#!/usr/bin/env node
/**
 * check-new-sites.mjs — 每天开工第一件事：查最近刚上线的站，看它们「能不能被搜到、有没有统计、有没有广告」
 *
 * 依据：2026-10-30 用户定下「每天先检查新上站的情况，这是我们最重要的策略」。
 * 新站的问题只在前几天能低成本修 —— 没填 GA4 就没有 PV 记录，没开广告位就没有收入，
 * 上线日一过再补，那几天的数据永远补不回来。
 *
 * 用法：
 *   node scripts/check-new-sites.mjs                # 默认查最近 3 天上线的站
 *   node scripts/check-new-sites.mjs --days 7
 *   node scripts/check-new-sites.mjs --site demonbluffwiki
 *   node scripts/check-new-sites.mjs --json         # 供 Agent / 看板消费
 *   node scripts/check-new-sites.mjs --no-live      # 不联网，只看本地配置
 *
 * 退出码：0 = 所有新站无缺口；1 = 有缺口（缺 GA4 / 缺广告位 / 未注册看板 / SEO ERROR / 线上异常）
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f, d) => {
  const i = argv.indexOf(f);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d;
};

const DAYS = Number(val('--days', '3'));
const ONLY = val('--site', null);
const JSON_OUT = has('--json');
const NO_LIVE = has('--no-live');

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '');
const today = new Date();
/* ───────────── 上线日：部署日志里第一次成功部署 ───────────── */

const firstDeploy = new Map();
const logPath = path.join(ROOT, '.agent/deploy-log.jsonl');
if (fs.existsSync(logPath)) {
  for (const line of read(logPath).trim().split('\n')) {
    if (!line) continue;
    let l;
    try { l = JSON.parse(line); } catch { continue; }
    if (l.status !== 'ok' || !l.ts) continue;
    const prev = firstDeploy.get(l.site);
    if (!prev || l.ts < prev) firstDeploy.set(l.site, l.ts);
  }
}

const allSites = fs
  .readdirSync(ROOT, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /wiki$/.test(d.name))
  .map((d) => d.name)
  .filter((s) => fs.existsSync(path.join(ROOT, s, 'app', 'layout.tsx')))
  .sort();

function daysSince(ts) {
  if (!ts) return null;
  // 按“日历日”算 D+N：跨过零点就算一天，跟运营口径一致
  const d0 = new Date(`${ts.slice(0, 10)}T00:00:00`);
  if (Number.isNaN(d0.getTime())) return null;
  const todayLocal = new Date();
  todayLocal.setHours(0, 0, 0, 0);
  return Math.round((todayLocal - d0) / 86400000);
}

const targets = ONLY
  ? [ONLY]
  : allSites.filter((s) => {
      const d = daysSince(firstDeploy.get(s));
      return d !== null && d <= DAYS;
    });

/* ───────────── 网络：本机 DNS 对 vercel.app 有污染 ───────────── */

const ipCache = new Map();
function realIp(host) {
  if (ipCache.has(host)) return ipCache.get(host);
  let ip = null;
  try {
    ip = execFileSync('dig', ['@1.1.1.1', '+short', host, 'A'], { encoding: 'utf8' })
      .split('\n').map((s) => s.trim()).find((s) => /^\d+\.\d+\.\d+\.\d+$/.test(s)) || null;
  } catch { /* ignore */ }
  ipCache.set(host, ip);
  return ip;
}

function fetchLive(host, p) {
  const ip = realIp(host);
  if (!ip) return { status: 0, body: '' };
  try {
    const out = execFileSync(
      'curl',
      ['-s', '-o', '-', '-w', '\n__S__%{http_code}', '--max-time', '25',
        '--resolve', `${host}:443:${ip}`, `https://${host}${p}`],
      { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 },
    );
    const i = out.lastIndexOf('__S__');
    return { status: Number(out.slice(i + 5).trim()), body: out.slice(0, i) };
  } catch {
    return { status: 0, body: '' };
  }
}

/* ───────────── 逐站体检 ───────────── */

function inspect(site) {
  const dir = path.join(ROOT, site);
  const gdir = path.join(dir, 'content/guides');
  const guides = fs.existsSync(gdir) ? fs.readdirSync(gdir).filter((f) => f.endsWith('.md')).length : 0;

  const seo = read(path.join(dir, 'lib/seo-config.ts'));
  const gaId = (seo.match(/googleAnalyticsId:\s*'([^']*)'/) || [, ''])[1].trim();

  const zones = read(path.join(dir, 'lib/adsterra-zones.ts'));
  const hasGlobal = /global:\s*\[\s*\{/.test(zones);
  const hasGuide = /guide:\s*\[\s*\{/.test(zones);

  const registry = read(path.join(ROOT, 'dashboard/lib/sites.ts'));
  const inDashboard = gaId ? registry.includes(gaId) : false;

  const gscFile = fs.existsSync(path.join(dir, 'public'))
    ? fs.readdirSync(path.join(dir, 'public')).some((f) => /^google.*\.html$/.test(f))
    : false;

  // SEO 检查（本地层）
  let seoErrors = null;
  try {
    const out = execFileSync('node', [path.join(ROOT, 'scripts/seo-check.mjs'), '--site', site, '--json'],
      { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    seoErrors = JSON.parse(out).summary.errors;
  } catch (e) {
    try { seoErrors = JSON.parse(e.stdout || '{}').summary?.errors ?? null; } catch { seoErrors = null; }
  }

  const row = {
    site,
    上线日: (firstDeploy.get(site) || '').slice(0, 10) || '[无部署记录]',
    D: daysSince(firstDeploy.get(site)),
    攻略数: guides,
    线上状态: null,
    sitemap条数: null,
    H1数: null,
    GA4: gaId || '缺',
    广告位: hasGlobal && hasGuide ? '两位齐' : hasGlobal || hasGuide ? '只有一位' : '缺',
    看板注册: inDashboard ? '已注册' : '未注册',
    GSC文件: gscFile ? '有' : '缺',
    SEO_ERROR: seoErrors,
  };

  if (!NO_LIVE) {
    const host = `${site}.vercel.app`;
    const home = fetchLive(host, '/');
    row.线上状态 = home.status;
    row.H1数 = (home.body.match(/<h1[ >]/g) || []).length;
    const sm = fetchLive(host, '/sitemap.xml');
    row.sitemap条数 = sm.status === 200 ? (sm.body.match(/<loc>/g) || []).length : null;
  }
  return row;
}

const rows = targets.map(inspect);

/* ───────────── 缺口判定 ───────────── */

const gapsOf = (r) => {
  const g = [];
  if (r.GA4 === '缺') g.push('没填 GA4 → 看板统计不到 PV');
  if (r.广告位 === '缺' || r.广告位 === '只有一位') g.push(`广告位${r.广告位} → 没有收入`);
  if (r.看板注册 === '未注册') g.push('未注册 dashboard → 看板看不到这个站');
  if (r.GSC文件 === '缺') g.push('缺 GSC 验证文件');
  if (r.SEO_ERROR) g.push(`SEO ERROR ${r.SEO_ERROR} 条`);
  if (r.线上状态 !== null && r.线上状态 !== 200) g.push(`首页 HTTP ${r.线上状态}`);
  if (r.H1数 !== null && r.H1数 !== 1) g.push(`首页 H1 ${r.H1数} 个`);
  if (r.sitemap条数 !== null && r.sitemap条数 < r.攻略数) g.push(`sitemap ${r.sitemap条数} 条 < 攻略 ${r.攻略数} 篇`);
  return g;
};

const withGaps = rows.map((r) => ({ ...r, 缺口: gapsOf(r) }));

/* ───────────── 输出 ───────────── */

if (JSON_OUT) {
  console.log(JSON.stringify({
    days: DAYS,
    checked: rows.length,
    sitesWithGaps: withGaps.filter((r) => r.缺口.length).length,
    rows: withGaps,
  }, null, 2));
} else {
  const win = DAYS;
  console.log(`新站体检 — 最近 ${win} 天内上线的站（${rows.length} 个）\n`);
  if (!rows.length) {
    console.log(`最近 ${win} 天没有新站上线。`);
  } else {
    const head = ['站点', '上线日', 'D', '攻略', '线上', 'sitemap', 'H1', 'GA4', '广告位', '看板', 'GSC', 'SEO'];
    const cell = (r) => [
      r.site, r.上线日, r.D ?? '-', r.攻略数, r.线上状态 ?? '-', r.sitemap条数 ?? '-', r.H1数 ?? '-',
      r.GA4 === '缺' ? '缺' : '有', r.广告位, r.看板注册 === '已注册' ? '有' : '缺',
      r.GSC文件, r.SEO_ERROR === null ? '?' : r.SEO_ERROR === 0 ? '0' : `${r.SEO_ERROR}✗`,
    ];
    const widths = head.map((h, i) => Math.max(wid(h), ...rows.map((r) => wid(String(cell(r)[i])))));
    const line = (arr) => arr.map((c, i) => pad(String(c), widths[i])).join('  ');
    console.log(line(head));
    console.log(widths.map((w) => '─'.repeat(w)).join('  '));
    for (const r of rows) console.log(line(cell(r)));
  }

  const flagged = withGaps.filter((r) => r.缺口.length);
  if (flagged.length) {
    console.log('\n❌ 需要人工处理：');
    for (const r of flagged) {
      console.log(`  ${r.site}（D+${r.D ?? '?'}）`);
      for (const g of r.缺口) console.log(`    - ${g}`);
    }
    const manual = flagged.filter((r) => r.缺口.some((g) => /GA4|广告位|看板/.test(g)));
    if (manual.length) {
      console.log(
        '\n  人工入口：飞书「站点台账(人工)」填 GA4-measurementID / GA4-propertyID 与两列广告位代码，' +
        '20:00 的 sync-ledger-manual 会回填进代码并部署（scripts/sync-ledger-manual.mjs --status-only 可先看缺什么）。',
      );
    }
  } else if (rows.length) {
    console.log('\n✅ 全部新站无缺口。');
  }
}

function wid(s) { return [...s].reduce((n, ch) => n + (ch.charCodeAt(0) > 0x2e80 ? 2 : 1), 0); }
function pad(s, w) { return s + ' '.repeat(Math.max(0, w - wid(s))); }

process.exit(withGaps.some((r) => r.缺口.length) ? 1 : 0);
