#!/usr/bin/env node
/**
 * ga-audit.mjs — 独立跑一遍 GA4 Data API，用于核对 dashboard 数字，并筛出
 * 「有流量但还没接广告」的站点。
 *
 * 用法:
 *   node scripts/ga-audit.mjs                 # 30 天口径（与 dashboard 一致）
 *   node scripts/ga-audit.mjs --json out.json # 同时落盘
 *
 * 口径必须和 dashboard/lib/analytics.ts 保持一致：
 *   - 当前周期: 30daysAgo → today
 *   - 对比周期: 60daysAgo → 31daysAgo
 *   - 指标: screenPageViews / totalUsers / sessions / averageSessionDuration
 *
 * 凭证来自 dashboard/.env.ga4（Vercel 上同名变量）。
 */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const ROOT = path.resolve(import.meta.dirname, '..');
const DASH = path.join(ROOT, 'dashboard');
const require = createRequire(path.join(DASH, 'package.json'));
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// ---------- env ----------
function loadEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    out[m[1]] = v;
  }
  return out;
}

const env = loadEnv(path.join(DASH, '.env.ga4'));
const email = process.env.GA_CLIENT_EMAIL || env.GA_CLIENT_EMAIL;
const keyRaw = process.env.GA_PRIVATE_KEY || env.GA_PRIVATE_KEY;
if (!email || !keyRaw) {
  console.error('缺少 GA_CLIENT_EMAIL / GA_PRIVATE_KEY（dashboard/.env.ga4）');
  process.exit(1);
}
const client = new BetaAnalyticsDataClient({
  credentials: { client_email: email, private_key: keyRaw.replace(/\\n/g, '\n') },
});

// ---------- registry ----------
const src = fs.readFileSync(path.join(DASH, 'lib', 'sites.ts'), 'utf8');
const sites = [];
const re = /name:\s*['"]([^'"]+)['"][\s\S]{0,200}?propertyId:\s*'(\d+)'/g;
let m;
while ((m = re.exec(src))) sites.push({ name: m[1], propertyId: m[2] });
if (sites.length === 0) {
  console.error('未能从 dashboard/lib/sites.ts 解析出站点');
  process.exit(1);
}

// ---------- fetch ----------
const METRICS = [
  'screenPageViews',
  'totalUsers',
  'activeUsers',
  'sessions',
  'averageSessionDuration',
];

async function report(propertyId, startDate, endDate, attempt = 1) {
  try {
    const [res] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: METRICS.map((name) => ({ name })),
    });
    const v = res.rows?.[0]?.metricValues?.map((x) => Number(x.value)) ?? [];
    return {
      pv: v[0] ?? 0,
      users: v[1] ?? 0,
      activeUsers: v[2] ?? 0,
      sessions: v[3] ?? 0,
      avgEngagement: v[4] ?? 0,
      ok: true,
    };
  } catch (e) {
    if (attempt < 4) {
      await new Promise((r) => setTimeout(r, 800 * attempt));
      return report(propertyId, startDate, endDate, attempt + 1);
    }
    return { ok: false, error: String(e.message || e).slice(0, 200) };
  }
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      for (let i = next++; i < items.length; i = next++) out[i] = await fn(items[i], i);
    }),
  );
  return out;
}

console.log(`GA4 审计 — ${sites.length} 个 property，30 天口径（30daysAgo → today）\n`);

const rows = await mapLimit(sites, 6, async (s, i) => {
  const [cur, prev, week] = await Promise.all([
    report(s.propertyId, '30daysAgo', 'today'),
    report(s.propertyId, '60daysAgo', '31daysAgo'),
    report(s.propertyId, '7daysAgo', 'today'),
  ]);
  process.stderr.write(`\r${i + 1}/${sites.length} ${s.name}          `);
  return { ...s, cur, prev, week };
});
process.stderr.write('\n\n');

const ok = rows.filter((r) => r.cur.ok);
const failed = rows.filter((r) => !r.cur.ok);

const pct = (a, b) => (b > 0 ? Math.round(((a - b) / b) * 100) : 0);
const totalPV = ok.reduce((n, r) => n + r.cur.pv, 0);

ok.sort((a, b) => b.cur.pv - a.cur.pv);

const pad = (v, n) => String(v).padStart(n);
console.log(
  `${pad('#', 3)} ${'站点'.padEnd(26)} ${pad('PV30', 8)} ${pad('UV30', 8)} ${pad('PV7', 7)} ${pad('UV7', 6)} ${pad('环比', 7)}  错误`,
);
ok.forEach((r, i) => {
  console.log(
    `${pad(i + 1, 3)} ${r.name.padEnd(26)} ${pad(r.cur.pv, 8)} ${pad(r.cur.users, 8)} ${pad(r.week.pv, 7)} ${pad(r.week.users, 6)} ${pad(
      `${pct(r.cur.pv, r.prev.pv)}%`,
      7,
    )}  ${r.cur.ok ? '' : r.cur.error}`,
  );
});

console.log(`\n合计 PV30 = ${totalPV.toLocaleString()}  |  有流量站（PV30>0）= ${ok.filter((r) => r.cur.pv > 0).length}/${ok.length}`);
if (failed.length) {
  console.log(`\n⚠️ 查询失败 ${failed.length} 个：`);
  failed.forEach((r) => console.log(`  ${r.name} (${r.propertyId}): ${r.cur.error}`));
}

const outIdx = process.argv.indexOf('--json');
const outFile = outIdx > -1 ? process.argv[outIdx + 1] : '/tmp/ga-audit.json';
fs.writeFileSync(
  outFile,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      range: { current: '30daysAgo..today', previous: '60daysAgo..31daysAgo', week: '7daysAgo..today' },
      sites: rows,
    },
    null,
    2,
  ),
);
console.log(`\n已写入 ${outFile}`);
