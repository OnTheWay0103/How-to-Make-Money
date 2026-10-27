#!/usr/bin/env node
/**
 * expansion-targets.mjs — 扩词轮（每日内容扩充）的目标站清单。
 *
 * 由来（两道规则，都是踩过坑才加的）：
 *   1. 2026-10-27 之前，「PV>1000 每天一篇」写死在提示词与 docs 里，没跟
 *      「站点台账(自动化)」的**生命周期状态**联动 —— 台账标了 `不再维护` 的站
 *      也会被继续写新攻略，等于把已止损的站重新投入成本。
 *   2. 同一天的 04:00 轮还暴露了第二个坑：目标名单是 `.agent/expand-daily.json`
 *      里手维护的 `sites` 数组 + `docs/每日内容扩充计划.md` 的 2026-09-02 快照表。
 *      两处都过期，于是那轮扩了 PV 已跌破 1000 的 spiritvale / tearsofmetal，
 *      却漏了名单内的 sephiria / shiftatmidnight。
 *
 * 现在的口径（单一事实源，2026-10-27 起）：
 *   - PV 一律现取 `dashboard /api/traffic`（30 天 pageViews），MUST NOT 用台账里的
 *     历史快照列或手抄的 pv 字段
 *   - `生命周期状态` 一律现取「站点台账(自动化)」
 *   - **可扩清单 = PV(30d) > 1000 且 生命周期状态 ≠ 不再维护**
 *   - `.agent/expand-daily.json` 降级为**产物的记录**，不再当名单用
 *
 * 用法：
 *   node scripts/expansion-targets.mjs                 # 人读
 *   node scripts/expansion-targets.mjs --json          # 机读
 *   node scripts/expansion-targets.mjs --verify <site> # 该站是否在本轮可扩清单内（退出码 0/1）
 *   node scripts/expansion-targets.mjs --apply         # 把可扩清单写回 expand-daily.json
 *   [--threshold 1000] [--month 2026-10] [--table <id|name>]
 *
 * 退出码：0 正常；1 --verify 不通过；2 取不到流量或台账。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchTraffic, trafficByDir } from './lib/dashboard-traffic.mjs';
import { resolveLedgerTable, lark, cellScalar } from './lib/month-ledger.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const opt = (name) => {
  const i = argv.indexOf(name);
  return i > -1 ? argv[i + 1] : undefined;
};
const asJson = argv.includes('--json');
const apply = argv.includes('--apply');
const verifySite = opt('--verify');
const THRESHOLD = Number(opt('--threshold') ?? 1000);
const EXPAND_FILE = path.join(ROOT, '.agent', 'expand-daily.json');

/** 站点目录 → 线上 host（优先 .vercel/project.json 的 projectName，回退目录名）。 */
function siteHost(dir) {
  try {
    const p = path.join(ROOT, dir, '.vercel', 'project.json');
    return `${JSON.parse(fs.readFileSync(p, 'utf8')).projectName || dir}.vercel.app`;
  } catch {
    return `${dir}.vercel.app`;
  }
}

function readLedgerStatus() {
  const table = resolveLedgerTable({ table: opt('--table'), month: opt('--month'), cwd: ROOT });
  const data = lark(
    ['base', '+record-list', '--base-token', 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg',
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
  return { table, byHost };
}

function readExpandList() {
  if (!fs.existsSync(EXPAND_FILE)) return { sites: [], skips: [], watchlist: [] };
  try {
    return JSON.parse(fs.readFileSync(EXPAND_FILE, 'utf8'));
  } catch {
    return { sites: [], skips: [], watchlist: [] };
  }
}

// ---- 取数：两个都必须成功，否则报「不可判定」，不许当 0 ----
let traffic;
let ledger;
try {
  traffic = fetchTraffic();
} catch (e) {
  console.error(`✗ 取不到 dashboard /api/traffic：${e.message}\n  按规则报「不可判定」，本轮不产出目标清单。`);
  process.exit(2);
}
try {
  ledger = readLedgerStatus();
} catch (e) {
  console.error(`✗ 读台账失败：${e.message}`);
  process.exit(2);
}

const { byDir, unmatched } = trafficByDir(traffic);
// dashboard /api/traffic 固定取 GA4 `30daysAgo → today`（dashboard/lib/analytics.ts），
// 环比列是同长度的前 30 天，接口本身不回传日期区间，所以这里不假装有精确窗口。
const asOf = '最近 30 天（GA4 30daysAgo → today）';

const eligible = [];
const blocked = [];
const below = [];
const noLedgerRow = [];

for (const [dir, t] of byDir) {
  const host = siteHost(dir);
  const row = ledger.byHost.get(host) ?? ledger.byHost.get(`${dir}.vercel.app`);
  const status = row?.['生命周期状态'] ?? '';
  const ledgerPv = row?.['PV(30d)'] ?? '';
  const item = { site: dir, host, pv: t.pv, change: t.change, lifeStatus: status, ledgerPv };

  if (t.pv > THRESHOLD) {
    if (status === '不再维护') blocked.push(item);
    else {
      eligible.push(item);
      if (!row) noLedgerRow.push(item);
    }
  } else {
    below.push(item);
  }
}

eligible.sort((a, b) => b.pv - a.pv);
blocked.sort((a, b) => b.pv - a.pv);
below.sort((a, b) => b.pv - a.pv);

// 台账里标了不再维护、但 PV 已经掉到阈值以下的站，也列出来（防止被重新加回名单）
const retiredAll = [...ledger.byHost.entries()]
  .filter(([, row]) => row['生命周期状态'] === '不再维护')
  .map(([host, row]) => ({ host, pv30: row['PV(30d)'] ?? '' }));

const payload = {
  table: ledger.table.name,
  threshold: THRESHOLD,
  trafficRange: asOf,
  fetchedAt: traffic.fetchedAt,
  eligible,
  blocked,
  retiredAll,
  belowThreshold: below.slice(0, 10),
  unmatchedGa: unmatched,
  noLedgerRow,
};

if (verifySite) {
  const hit = eligible.find((e) => e.site === verifySite || e.host === verifySite);
  if (asJson) console.log(JSON.stringify({ site: verifySite, eligible: Boolean(hit), item: hit ?? null }));
  else if (hit) console.log(`✅ ${verifySite} 在本轮可扩清单内：PV30=${hit.pv} 状态=${hit.lifeStatus || '(台账空)'}`);
  else {
    const blockedHit = blocked.find((b) => b.site === verifySite);
    const belowHit = below.find((b) => b.site === verifySite);
    const retiredHit = retiredAll.find((r) => r.host === verifySite || r.host === `${verifySite}.vercel.app`);
    console.log(`❌ ${verifySite} 不在本轮可扩清单内 —— ${
      (blockedHit || retiredHit) ? `台账状态=不再维护（已止损，MUST NOT 扩词）${blockedHit ? `，PV30=${blockedHit.pv}` : ''}`
        : belowHit ? `PV30=${belowHit.pv} ≤ ${THRESHOLD}（未达扩词阈值）`
          : '不在流量数据里（未注册 GA4 / 看板无数据，本轮不可判定）'}`);
  }
  process.exit(hit ? 0 : 1);
}

if (asJson) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  console.log(`台账：${ledger.table.name}（${ledger.byHost.size} 行）`);
  console.log(`流量：dashboard /api/traffic 窗口 ${asOf}（取数 ${traffic.fetchedAt}）`);
  console.log(`\n✅ 本轮可扩词（PV30 > ${THRESHOLD}，${eligible.length} 站）：`);
  for (const e of eligible) {
    console.log(`  ${e.site.padEnd(26)} PV30=${String(e.pv).padStart(6)}  状态=${e.lifeStatus || '(台账空)'}  环比=${e.change == null ? '—' : `${e.change}%`}`);
  }
  if (blocked.length) {
    console.log(`\n⛔ 已过滤（PV 过线但台账标了不再维护，${blocked.length} 站）：`);
    for (const b of blocked) console.log(`  ${b.site.padEnd(26)} PV30=${String(b.pv).padStart(6)}  ${b.lifeStatus}`);
  }
  console.log(`\n💤 未过线（前 10，纯参考，MUST NOT 拿去扩）：`);
  for (const b of below.slice(0, 10)) console.log(`  ${b.site.padEnd(26)} PV30=${String(b.pv).padStart(6)}  状态=${b.lifeStatus || '(台账空)'}`);
  if (noLedgerRow.length) {
    console.log(`\n⚠️ 台账里没有这些站的行（状态未知，按非不再维护处理，但请补台账）：`);
    for (const n of noLedgerRow) console.log(`  ${n.host}`);
  }
  if (unmatched.length) {
    console.log(`\n⚠️ 有 ${unmatched.length} 个站没匹配上 dashboard 流量（看板无数据，本轮不可判定，MUST NOT 当 0）：`);
    for (const u of unmatched) console.log(`  ${u.dir}  (${u.gaId || '无 GA id'})`);
  }
}

if (apply) {
  const list = readExpandList();
  const prev = new Map((list.sites ?? []).map((s) => [s.site, s]));
  const today = new Date().toISOString().slice(0, 10);

  list.description = '每日内容扩充跟踪（docs/每日内容扩充计划.md）—— 名单由 scripts/expansion-targets.mjs --apply 生成，MUST NOT 手改 sites 数组';
  list.mechanism = 'daily-per-site';
  list.pvSnapshotDate = today;
  list.pvSource = `dashboard /api/traffic，窗口 ${asOf}`;
  list.pvCheckedAt = new Date().toISOString();
  list.sites = eligible.map((e) => ({
    site: e.site,
    pv: e.pv,
    lifeStatus: e.lifeStatus,
    lastExpanded: prev.get(e.site)?.lastExpanded ?? null,
    ...(prev.get(e.site)?.lastProduced ? { lastProduced: prev.get(e.site).lastProduced } : {}),
  }));

  const keepWatch = new Map((list.watchlist ?? []).map((w) => [w.site, w]));
  for (const b of below) {
    if (!keepWatch.has(b.site) && prev.has(b.site)) {
      keepWatch.set(b.site, {
        site: b.site, pv: b.pv, lastExpanded: prev.get(b.site).lastExpanded ?? null,
        ...(prev.get(b.site).lastProduced ? { lastProduced: prev.get(b.site).lastProduced } : {}),
        note: `PV30=${b.pv} 已跌破 ${THRESHOLD}，移出每日名单；复核过线自动回归`,
      });
    } else if (keepWatch.has(b.site)) {
      keepWatch.get(b.site).pv = b.pv;
    }
  }
  list.watchlist = [...keepWatch.values()].sort((a, b) => b.pv - a.pv);

  fs.writeFileSync(EXPAND_FILE, `${JSON.stringify(list, null, 2)}\n`);
  console.log(`\n▶ 已写回 .agent/expand-daily.json：sites=${list.sites.length} 站，watchlist=${list.watchlist.length} 站`);
}
