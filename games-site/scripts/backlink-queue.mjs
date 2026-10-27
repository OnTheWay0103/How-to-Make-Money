#!/usr/bin/env node
/**
 * backlink-queue.mjs — 生成/刷新外链队列 `.agent/backlink-queue.md`。
 *
 * 口径见 docs/STRATEGY-外链建设.md 第五节「周节奏：每个合适站点每周 1 条」。
 * 「合适站点」三个条件同时成立：
 *   ① PV30 ≥ 50（--min-pv 可改）
 *   ② 上线 ≥ 30 天
 *   ③ 生命周期状态 ≠ 不再维护
 *
 * 唯一数据源：
 *   - 流量：dashboard /api/traffic（MUST NOT 用台账或记忆里的 PV 代替）
 *   - 生命周期 / 上线日：飞书当月台账（自动化表取分级，人工表取上线日）
 *   - 已发外链：.agent/link-building-log.jsonl（lastSeenOk/status 决定存活条数与上次发文）
 *
 * 用法：
 *   node scripts/backlink-queue.mjs              # 打印名单（不落盘）
 *   node scripts/backlink-queue.mjs --write      # 写 .agent/backlink-queue.md
 *   node scripts/backlink-queue.mjs --json       # 机器可读
 *   [--min-pv 50] [--min-days 30] [--month 2026-10]
 *
 * 退出码：0 正常；2 取不到流量或台账（按规矩报「不可判定」，不出名单）。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchTraffic, trafficByDir } from './lib/dashboard-traffic.mjs';
import {
  resolveLedgerTable, resolveManualLedgerTable, lark, cellScalar, BASE_TOKEN,
} from './lib/month-ledger.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const QUEUE_FILE = path.join(ROOT, '.agent', 'backlink-queue.md');
const LINK_LOG = path.join(ROOT, '.agent', 'link-building-log.jsonl');

const argv = process.argv.slice(2);
const opt = (name) => {
  const i = argv.indexOf(name);
  return i > -1 ? argv[i + 1] : undefined;
};
const WRITE = argv.includes('--write');
const AS_JSON = argv.includes('--json');
const MIN_PV = Number(opt('--min-pv') ?? 50);
const MIN_DAYS = Number(opt('--min-days') ?? 30);
const MONTH = opt('--month');
const TODAY = new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------- 取数

function siteHost(dir) {
  try {
    const p = path.join(ROOT, dir, '.vercel', 'project.json');
    return `${JSON.parse(fs.readFileSync(p, 'utf8')).projectName || dir}.vercel.app`;
  } catch {
    return `${dir}.vercel.app`;
  }
}

/** 读一张台账，返回 Map<host, row> */
function readTable(table) {
  const data = lark(
    ['base', '+record-list', '--base-token', BASE_TOKEN,
      '--table-id', table.id, '--format', 'json', '--limit', '200', '--offset', '0'],
    { cwd: ROOT },
  );
  const fields = data.fields ?? [];
  const byHost = new Map();
  for (const cells of data.data ?? []) {
    const row = {};
    fields.forEach((name, c) => {
      const v = cellScalar(cells[c]);
      row[name] = v == null ? '' : String(v);
    });
    const host = String(row['站点'] ?? '').trim().toLowerCase();
    if (host) byHost.set(host, row);
  }
  return byHost;
}

let traffic;
let autoRows;
let manualRows;
try {
  traffic = fetchTraffic();
  autoRows = readTable(resolveLedgerTable({ month: MONTH, cwd: ROOT }));
} catch (e) {
  console.error(`✗ 取不到数据：${e.message}\n  按规则报「不可判定」，本轮不出名单。`);
  process.exit(2);
}
try {
  manualRows = readTable(resolveManualLedgerTable({ month: MONTH, cwd: ROOT }));
} catch {
  manualRows = new Map(); // 人工表读不到只影响「上线日」精度，标 * 回退 GA 建 property 日
}

/** 该站是否真有这一页（`/guides/x` → `<site>/content/guides/x.md`） */
function guideExists(dir, page) {
  const slug = page.replace(/^\/guides\//, '');
  return fs.existsSync(path.join(ROOT, dir, 'content', 'guides', `${slug}.md`));
}

/** 兜底：该站按文件名排序的第一篇攻略 */
function firstGuide(dir) {
  try {
    const files = fs.readdirSync(path.join(ROOT, dir, 'content', 'guides')).filter((f) => f.endsWith('.md')).sort();
    return files.length ? `/guides/${files[0].replace(/\.md$/, '')}` : null;
  } catch {
    return null;
  }
}

/** 台账里该站的「上次发文 / 存活条数」，来源是外链台账而不是本 md 的历史（md 可随时重生成） */
function linkStats(site) {
  if (!fs.existsSync(LINK_LOG)) return { lastDate: null, live: 0 };
  let lastDate = null;
  let live = 0;
  for (const line of fs.readFileSync(LINK_LOG, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    let e;
    try { e = JSON.parse(line); } catch { continue; }
    if (e.site !== site) continue;
    // 掉链（dead/missing）不算存活；live 且 rel 非 nofollow 才计
    if (e.status === 'live' && e.rel !== 'nofollow' && e.rel !== 'ugc' && e.rel !== 'sponsored') live++;
    if (e.date && (!lastDate || e.date > lastDate)) lastDate = e.date;
  }
  return { lastDate, live };
}

function daysSince(dateStr) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return null;
  return Math.floor((Date.now() - d.getTime()) / 86_400_000);
}

// ---------------------------------------------------------------- 筛选

const { byDir } = trafficByDir(traffic);
const rows = [];
const excluded = [];

for (const [dir, t] of byDir) {
  const host = siteHost(dir);
  const auto = autoRows.get(host);
  const manual = manualRows.get(host);
  const status = auto?.['生命周期状态'] ?? '';
  const onlineDate = (manual?.['上线日'] || auto?.['上线日'] || '').trim();
  const onlineFrom = onlineDate ? 'ledger' : 'ga-createdAt';
  const dateForAge = onlineDate || (t.createdAt ?? '');
  const ageDays = dateForAge ? daysSince(dateForAge.slice(0, 10)) : null;

  const reasons = [];
  if (t.pv < MIN_PV) reasons.push(`PV30=${t.pv} < ${MIN_PV}`);
  if (status === '不再维护') reasons.push('状态=不再维护');
  if (ageDays == null) reasons.push('上线日不明');
  else if (ageDays < MIN_DAYS) reasons.push(`上线 ${ageDays} 天 < ${MIN_DAYS}`);

  const base = {
    site: dir, host, pv: t.pv, status, onlineDate: dateForAge.slice(0, 10) || null, onlineFrom, ageDays,
  };
  if (reasons.length) {
    excluded.push({ ...base, reasons });
    continue;
  }

  // 目标页：优先取流量 top 里的 /guides/xxx 单页（外链该推没排上的内页，不是首页）,
  // 但**必须落在本仓库内容里**：看板曾把两站映射到同一个 GA property（top 页完全相同），
  // 直接信 topPages 会推出 404 页面。
  const raw = traffic.sites.find((s) => s.site.gaId === t.gaId) ?? {};
  const pages = (raw.topPages ?? []).map((p) => p.path ?? p.pagePath).filter(Boolean);
  const target = pages.map((p) => p.match(/^\/guides\/([^/]+)$/)).filter(Boolean)
    .map((m) => `/guides/${m[1]}`)
    .find((p) => guideExists(dir, p))
    ?? (guideExists(dir, '/guides/beginner-guide') ? '/guides/beginner-guide' : null)
    ?? firstGuide(dir)
    ?? '/';

  const stats = linkStats(dir);
  rows.push({ ...base, target, lastDate: stats.lastDate, live: stats.live });
}

rows.sort((a, b) => b.pv - a.pv);
for (const r of rows) {
  r.state = r.live >= 3 ? '达标' : r.lastDate ? '进行中' : '待排';
}

// ---------------------------------------------------------------- 输出

if (AS_JSON) {
  console.log(JSON.stringify({
    fetchedAt: traffic.fetchedAt,
    minPv: MIN_PV,
    minDays: MIN_DAYS,
    queue: rows,
    excluded,
  }, null, 2));
  process.exit(0);
}

if (!WRITE) {
  console.log(`名额 ${rows.length} 站（PV30 ≥ ${MIN_PV}、上线 ≥ ${MIN_DAYS} 天、状态 ≠ 不再维护）`);
  for (const r of rows) {
    console.log(`${r.site}\tPV ${r.pv}\t上线 ${r.onlineDate}${r.onlineFrom === 'ga-createdAt' ? '*' : ''}\t${r.target}\t上次 ${r.lastDate ?? '—'}\t存活 ${r.live}\t${r.state}`);
  }
  console.log(`\n（未落盘；加 --write 写 ${path.relative(ROOT, QUEUE_FILE)}）`);
  process.exit(0);
}

const md = [];
md.push('# 外链队列（backlink-queue）');
md.push('');
md.push('> 口径见 `docs/STRATEGY-外链建设.md` 第五节「周节奏：每个合适站点每周 1 条」。');
md.push('> 本文由 `node scripts/backlink-queue.mjs --write` 生成，**`MUST NOT` 手改**（改了下次刷新会被覆盖）。');
md.push('>');
md.push('> 名额三条同时成立：① PV30 ≥ 50 ② 上线 ≥ 30 天 ③ 生命周期状态 ≠ `不再维护`。');
md.push('>');
md.push('> 产能约束：单平台单账号每周 ≤3 篇 → 实际可发 = 已开通平台数 × 3。当前只有 dev.to = 3 篇/周。');
md.push('');
md.push('```bash');
md.push('node scripts/backlink-queue.mjs --write   # 每周一刷新（也用于发完一篇文章后更新进度）');
md.push('node scripts/link-check.mjs --write       # 发完立刻实测 rel，结果回写外链台账');
md.push('```');
md.push('');
md.push(`**取数**：${traffic.fetchedAt} 抓 \`dashboard /api/traffic\`（GA4 30 天窗口）。当前名额 **${rows.length}** 站。`);
md.push(`**排除**：${excluded.length} 站（PV < ${MIN_PV} / 未满 ${MIN_DAYS} 天 / 不再维护 / 上线日不明）。`);
md.push('');
md.push('| # | 站点目录 | PV30 | 上线日 | 首选目标页 | 上次发文 | 存活条数 | 状态 |');
md.push('|---:|---|---:|---|---|---|---:|---|');
rows.forEach((r, i) => {
  const star = r.onlineFrom === 'ga-createdAt' ? '*' : '';
  md.push(`| ${i + 1} | ${r.site} | ${r.pv} | ${r.onlineDate ?? '?'}${star} | ${r.target} | ${r.lastDate ?? '—'} | ${r.live} | ${r.state} |`);
});
md.push('');
md.push('> `上线日` 带 `*` = 台账该列空着，回退成 GA property 创建日（近似值，不是真实上线日）。');
md.push('> `存活条数` 只数外链台账里 `status=live` 且 rel 不是 nofollow/ugc/sponsored 的条目。');
md.push('');
md.push('## 怎么消费这一队');
md.push('');
md.push('1. 取「上次发文」最久没动的（`—` 排最前），同批内 PV 高者优先；');
md.push('2. 一篇 2–3 条链接、只打 1 个站，指向表里的目标页；锚文本按品牌 6 : 长尾 3 : 精确 1 分布；');
md.push('3. 连续两篇 `MUST NOT` 打同一个站；同一天发的多篇 `MUST` 指向不同站；');
md.push('4. 发布后立刻 `node scripts/link-check.mjs --write`，rel 以实测为准；');
md.push('5. 再跑一次本脚本 `--write` 刷新进度（`上次发文`/`存活条数` 都是从外链台账算的，别手改本文件）；');
md.push('6. 累计到 **3 条存活** 才算该站达标（`状态` 变 `达标`），30 天后 `--due` 复查掉链要减回去。');
md.push('');

fs.writeFileSync(QUEUE_FILE, md.join('\n'));
console.log(`✅ 已写 ${path.relative(ROOT, QUEUE_FILE)}：名额 ${rows.length} 站，排除 ${excluded.length} 站`);
