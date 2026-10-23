#!/usr/bin/env node
/**
 * adsterra-stats.mjs — pull read-only revenue / impression stats from the
 * Adsterra Publisher API and write a markdown report.
 *
 * Usage:
 *   node scripts/adsterra-stats.mjs              # last 30 days
 *   node scripts/adsterra-stats.mjs --days 7     # last 7 days
 *   node scripts/adsterra-stats.mjs --json       # also print raw JSON
 *
 * Token: ADSTERRA_API_KEY in the environment, or in adsterra/.env.
 * API is GET-only: https://api3.adsterratools.com/publisher
 *
 * Output:
 *   .agent/adsterra-report.md
 *   .agent/adsterra-raw.json
 */
import fs from 'fs';
import path from 'path';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const API_BASE = 'https://api3.adsterratools.com/publisher';
const DAYS = Math.max(1, parseInt(opt('--days', '30'), 10) || 30);
const OUT_DIR = path.join(REPO, '.agent');

/* ─── Token ───────────────────────────────────────────────────────── */

function loadToken() {
  if (process.env.ADSTERRA_API_KEY) return process.env.ADSTERRA_API_KEY.trim();
  const envFile = path.join(REPO, 'adsterra', '.env');
  if (!fs.existsSync(envFile)) return null;
  for (const line of fs.readFileSync(envFile, 'utf8').split('\n')) {
    const m = line.match(/^\s*ADSTERRA_API_KEY\s*=\s*(.+?)\s*$/);
    if (m) return m[1].replace(/^["']|["']$/g, '');
  }
  return null;
}

const token = loadToken();
if (!token) {
  console.error(
    [
      '缺少 Adsterra API token。',
      '',
      '在仓库根目录创建 adsterra/.env，写入：',
      '  ADSTERRA_API_KEY=你的token',
      '',
      'Token 获取：publishers.adsterra.com → Settings → API → Generate New Token',
    ].join('\n'),
  );
  process.exit(1);
}

/* ─── Dates ───────────────────────────────────────────────────────── */

const fmtDate = (d) => d.toISOString().slice(0, 10);
const finish = new Date();
const start = new Date(finish.getTime() - (DAYS - 1) * 86400000);
const START_DATE = fmtDate(start);
const FINISH_DATE = fmtDate(finish);

/* ─── API ─────────────────────────────────────────────────────────── */

async function apiGet(pathname, params = {}) {
  const url = new URL(`${API_BASE}${pathname}`);
  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      for (const v of value) url.searchParams.append(`${key}[]`, v);
    } else if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  }
  const res = await fetch(url, {
    headers: { 'X-API-Key': token, Accept: 'application/json' },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text.slice(0, 2000) };
  }
  if (!res.ok) {
    const hint =
      res.status === 401 || res.status === 403
        ? '（token 无效或已重新生成，去后台重新 Generate New Token）'
        : '';
    throw new Error(`GET ${url.pathname}${url.search} → HTTP ${res.status}${hint}\n${JSON.stringify(body).slice(0, 800)}`);
  }
  return body;
}

function pickItems(body) {
  if (Array.isArray(body)) return body;
  for (const key of ['items', 'data', 'results', 'rows']) {
    if (Array.isArray(body?.[key])) return body[key];
  }
  return [];
}

function num(value) {
  const n = typeof value === 'string' ? parseFloat(value) : value;
  return Number.isFinite(n) ? n : 0;
}

/* ─── Main ────────────────────────────────────────────────────────── */

async function main() {
  console.log(`拉取 ${START_DATE} → ${FINISH_DATE} 的 Adsterra 数据…`);

  const [domainsBody, statsBody] = await Promise.all([
    apiGet('/domains.json'),
    apiGet('/stats.json', {
      start_date: START_DATE,
      finish_date: FINISH_DATE,
      group_by: ['domain'],
    }),
  ]);

  const domains = pickItems(domainsBody);
  const stats = pickItems(statsBody);

  const byDomain = new Map();
  for (const row of stats) {
    const domain = row.domain || row.site || row.site_domain || row.name || '(unknown)';
    const entry = byDomain.get(domain) || {
      domain,
      impressions: 0,
      clicks: 0,
      revenue: 0,
      ctr: 0,
      cpm: 0,
    };
    entry.impressions += num(row.impressions ?? row.impression ?? row.views);
    entry.clicks += num(row.clicks ?? row.click);
    entry.revenue += num(row.revenue ?? row.income ?? row.earnings);
    byDomain.set(domain, entry);
  }

  const rows = [...byDomain.values()]
    .map((r) => ({
      ...r,
      ctr: r.impressions > 0 ? (r.clicks / r.impressions) * 100 : 0,
      cpm: r.impressions > 0 ? (r.revenue / r.impressions) * 1000 : 0,
    }))
    .sort((a, b) => b.revenue - a.revenue || b.impressions - a.impressions);

  const totals = rows.reduce(
    (acc, r) => ({
      impressions: acc.impressions + r.impressions,
      clicks: acc.clicks + r.clicks,
      revenue: acc.revenue + r.revenue,
    }),
    { impressions: 0, clicks: 0, revenue: 0 },
  );
  const totalCtr = totals.impressions > 0 ? (totals.clicks / totals.impressions) * 100 : 0;
  const totalCpm = totals.impressions > 0 ? (totals.revenue / totals.impressions) * 1000 : 0;

  const money = (n) => `$${n.toFixed(2)}`;
  const pct = (n) => `${n.toFixed(2)}%`;

  const md = [
    '# Adsterra 收益报告',
    '',
    `- 统计区间：**${START_DATE} → ${FINISH_DATE}**（${DAYS} 天）`,
    `- 生成时间：${new Date().toISOString()}`,
    `- 已登记域名：${domains.length} 个`,
    '',
    '## 汇总',
    '',
    '| 指标 | 数值 |',
    '|---|---|',
    `| 曝光 | ${totals.impressions.toLocaleString('en-US')} |`,
    `| 点击 | ${totals.clicks.toLocaleString('en-US')} |`,
    `| CTR | ${pct(totalCtr)} |`,
    `| CPM | ${money(totalCpm)} |`,
    `| 收入 | **${money(totals.revenue)}** |`,
    '',
    '## 按域名',
    '',
  ];

  if (rows.length === 0) {
    md.push('_该区间没有统计数据。新接入的广告位通常需要几小时到一天才开始产生曝光。_');
  } else {
    md.push(
      '| 域名 | 曝光 | 点击 | CTR | CPM | 收入 |',
      '|---|---:|---:|---:|---:|---:|',
      ...rows.map(
        (r) =>
          `| ${r.domain} | ${r.impressions.toLocaleString('en-US')} | ${r.clicks.toLocaleString(
            'en-US',
          )} | ${pct(r.ctr)} | ${money(r.cpm)} | ${money(r.revenue)} |`,
      ),
    );
  }

  md.push('', '## 已登记域名清单', '');
  if (domains.length === 0) {
    md.push('_无_');
  } else {
    for (const d of domains) {
      const name = d.domain || d.name || d.url || JSON.stringify(d);
      const status = d.status || d.state || d.published;
      md.push(`- \`${name}\`${status !== undefined ? ` — ${status}` : ''}`);
    }
  }

  md.push(
    '',
    '## 对账提示',
    '',
    '- 只有 `adsterra/placements.csv` 里 `status=ready` 的广告位才会被注入站点。',
    '- 域名有曝光但报表为 0，先确认该站是否已部署含广告代码的版本。',
    '',
  );

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'adsterra-report.md'), md.join('\n'));
  fs.writeFileSync(
    path.join(OUT_DIR, 'adsterra-raw.json'),
    JSON.stringify({ range: { START_DATE, FINISH_DATE }, domains: domainsBody, stats: statsBody }, null, 2),
  );

  console.log(`曝光 ${totals.impressions} / 点击 ${totals.clicks} / 收入 ${money(totals.revenue)}`);
  console.log('已写入 .agent/adsterra-report.md 和 .agent/adsterra-raw.json');
  if (flag('--json')) console.log(JSON.stringify({ totals, rows }, null, 2));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
