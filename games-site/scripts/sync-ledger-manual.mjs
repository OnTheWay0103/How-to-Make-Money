#!/usr/bin/env node
/**
 * sync-ledger-manual.mjs — 读「站点台账(人工)」，把人工填好的值回填进站点并部署。
 *
 * 这是「台账是唯一事实来源」的落地脚本：
 *
 *   站点台账(人工)YYYY-MM 里填了什么        → 脚本做什么
 *   ───────────────────────────────────────────────────────────
 *   GA4-measurementID + GA4-propertyID      → 写 <site>/lib/seo-config.ts + dashboard/lib/sites.ts
 *   广告位1-SocialBar-code                  → 写「广告位管理」global 行 → 注入 layout.tsx
 *   广告位2-NativeBanner-code               → 写「广告位管理」guide 行 → 注入 GuideLayout.tsx
 *   GSC                                     只读：填了=人工已做，空着=每日报告里继续提醒
 *   广告位3-todo-code                       占位：脚本只读不写，填了会在报告里列出来
 *   自动化状态                              脚本回写：已完成 / 待回填 / 待补填 / 失败（人工据此判断进度）
 *
 * 只处理**有变化**的站：值已和站点代码一致的行完全不动，也就不部署。
 * 上一轮标了「失败」的站即使文件已一致，本轮也会强制重新部署一次。
 *
 * 用法：
 *   node scripts/sync-ledger-manual.mjs                     # dry-run（默认，只出计划）
 *   node scripts/sync-ledger-manual.mjs --apply             # 回填 + 部署 + 提交
 *   node scripts/sync-ledger-manual.mjs --apply --no-deploy # 只改文件，不部署
 *   node scripts/sync-ledger-manual.mjs --site sephiriawiki --apply
 *   node scripts/sync-ledger-manual.mjs --table tblnXK0TUhXQhr4A --apply
 *   node scripts/sync-ledger-manual.mjs --max-deploy 5      # 单次最多部署几个站（默认 10）
 *   node scripts/sync-ledger-manual.mjs --status-only        # 只刷「自动化状态」列，不部署
 *
 * 「自动化状态」是跑的那一刻算的：刚填完还没跑，列里可能仍是上一轮的「已完成」。
 * 想立刻知道程序认不认这些值，用 `--status-only`。
 *
 * 退出码：0 全部成功；1 有站失败（其余照常处理）；2 找不到人工表/参数错误。
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync, spawnSync } from 'node:child_process';
import {
  AUTO_STATUS,
  BASE_TOKEN,
  MANUAL_AD_SLOTS,
  cellScalar,
  lark,
  resolveLedgerTable,
  resolveManualLedgerTable,
} from './lib/month-ledger.mjs';

const REPO = path.resolve(import.meta.dirname, '..');
const ADS_TABLE = 'tblPlFjSok72tnA1';
const GA_RE = /^G-[A-Z0-9]{6,}$/;
const PROP_RE = /^\d+$/;
const PLACEHOLDERS = new Set(['[待确认]', '待确认', 'TBD', 'PENDING']);

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const opt = (f, d = null) => {
  const i = argv.indexOf(f);
  return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d;
};

const APPLY = has('--apply');
const STATUS_ONLY = has('--status-only');
const DEPLOY = !has('--no-deploy');
const ONLY_SITE = opt('--site');
const TABLE = opt('--table');
const MONTH = opt('--month');
const MAX_DEPLOY = Number(opt('--max-deploy', '10'));

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const log = (...a) => console.log(...a);
const warn = (...a) => console.warn(...a);

function sh(cmd, args, opts = {}) {
  return spawnSync(cmd, args, { cwd: REPO, stdio: 'inherit', ...opts });
}

/** 读一张表的全部行：{ 字段名: 标量 }[] + record_id。 */
function readTable(tableId) {
  const rows = [];
  let offset = 0;
  for (;;) {
    const data = lark(
      [
        'base',
        '+record-list',
        '--base-token',
        BASE_TOKEN,
        '--table-id',
        tableId,
        '--format',
        'json',
        '--limit',
        '200',
        '--offset',
        String(offset),
      ],
      { cwd: REPO },
    );
    const fields = data.fields ?? [];
    const ids = data.record_id_list ?? [];
    (data.data ?? []).forEach((cells, i) => {
      const row = { __record: ids[i] };
      fields.forEach((name, c) => {
        const v = cellScalar(cells[c]);
        row[name] = v == null ? '' : String(v);
      });
      rows.push(row);
    });
    if (!data.has_more || (data.data ?? []).length === 0) break;
    offset += data.data.length;
  }
  return rows;
}

/** 站点目录 → 现有 GA 配置（读 lib/seo-config.ts）。 */
function currentGa(site) {
  const p = path.join(REPO, site, 'lib', 'seo-config.ts');
  if (!fs.existsSync(p)) return null;
  const m = fs.readFileSync(p, 'utf8').match(/googleAnalyticsId:\s*'([^']*)'/);
  return m ? m[1] : '';
}

/** 域名统一成裸主机名（广告位管理表的口径）。 */
function hostOf(domain) {
  return (domain || '')
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/\/+$/, '');
}

/**
 * 算一行该标什么「自动化状态」。
 *
 * 口径是**这一行做完了没有**，不是「填了的东西落地了没有」：
 *   一个自动化项都没填 → 空
 *   只填了一部分       → 待补填（人工还要继续填 GA4 / 广告位）
 *   全填了但没全落地   → 待回填
 *   全填了且全落地     → 已完成
 * 必须全填才可能「已完成」，否则「只填了 GA」的行会被误标成做完（2026-10-26 踩过）。
 * 已上线 / 已接入 都算落地：已接入 是人工手工接的，adsterra-sync 本来就会跳过它。
 * `gaOf` 可注入，dry-run 用来模拟「回填后」的 GA 值。
 */
function autoStatusOf(row, adsMap, failedSites, gaOf = currentGa) {
  const site = (row['站点'] || '').trim();
  if (!site || !fs.existsSync(path.join(REPO, site, 'lib', 'seo-config.ts'))) return '';

  const gaId = (row['GA4-measurementID'] || '').trim();
  const propId = (row['GA4-propertyID'] || '').trim();
  const gaFilled = GA_RE.test(gaId) && PROP_RE.test(propId);
  const filledSlots = MANUAL_AD_SLOTS.filter((s) => (row[s.field] || '').trim());
  const filledCount = (gaFilled ? 1 : 0) + filledSlots.length;
  const needed = 1 + MANUAL_AD_SLOTS.length;
  if (filledCount === 0) return '';

  if (failedSites.has(site)) return AUTO_STATUS.failed;
  if (filledCount < needed) return AUTO_STATUS.partial;

  const gaOk = gaOf(site) === gaId;
  const adsOk = filledSlots.every(({ field, slot }) => {
    const ex = adsMap.get(adKey(site, slot));
    if (!ex) return false;
    if ((ex['广告代码'] || '').trim() !== (row[field] || '').trim()) return false;
    return ['已上线', '已接入'].includes((ex['状态'] || '').trim());
  });

  return gaOk && adsOk ? AUTO_STATUS.done : AUTO_STATUS.pending;
}

/** 上一次 syncStatuses 的结果（写进日志行）。 */
let statusSummary = null;
/** 上一次 syncLaunchDates 写了多少行。 */
let launchSynced = 0;

/** 把自动化表的「上线日」抄进人工表（空着或对不上才写）。返回更新的行数。 */
function syncLaunchDates() {
  if (!launchDates.size) return 0;
  const updates = {};
  for (const row of rows) {
    const site = (row['站点'] || '').trim();
    if (!site) continue;
    if (ONLY_SITE && site !== ONLY_SITE) continue;
    const want = launchDates.get(site);
    if (!want) continue;
    if ((row['上线日'] || '').trim() === want) continue;
    updates[row.__record] = { 上线日: want };
  }
  const n = Object.keys(updates).length;
  launchSynced = n;
  if (!n) return 0;
  lark(
    [
      'base',
      '+record-batch-update',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      manual.id,
      '--json',
      JSON.stringify({ update_records: updates }),
    ],
    { cwd: REPO },
  );
  log(`\n▶ 上线日：同步 ${n} 行（来源 ${autoName}）`);
  return n;
}

/**
 * 回填完 → 重读「广告位管理」（内存里的 adIndex 是跑之前的，状态还是旧的），
 * 逐行算「自动化状态」，只写变化的格子。
 * 没部署就不写：文件没上线，标「已完成」是假的。
 * `carryFailures=false`：按站点真实状态重算，不继承上一轮的「失败」标记
 *   （--status-only 用；否则手工修好之后状态永远洗不掉）。
 */
function syncStatuses({ deployedSites = [], failedNow = [], carryFailures = true } = {}) {
  if (!DEPLOY) {
    log('\n自动化状态：--no-deploy 不回写（没部署，标了也不准）');
    statusSummary = { skipped: true };
    return statusSummary;
  }

  const fresh = new Map();
  for (const r of readTable(ADS_TABLE)) {
    const site = r['站点目录'];
    const slot = r['广告位类型'];
    if (site && slot) fresh.set(adKey(site, slot), r);
  }

  const deployedSet = new Set(deployedSites);
  // 上次标了失败、这次也没成功部署的，继续算失败（别把没上线的站标成已完成）
  const stillFailed = new Set([
    ...failedNow,
    ...(carryFailures ? [...forceDeploy].filter((s) => !deployedSet.has(s)) : []),
  ]);

  const updates = {};
  const counts = { done: 0, pending: 0, partial: 0, failed: 0 };
  for (const row of rows) {
    const site = (row['站点'] || '').trim();
    if (!site) continue;
    if (ONLY_SITE && site !== ONLY_SITE) continue;
    const desired = autoStatusOf(row, fresh, stillFailed);
    if (desired === (row['自动化状态'] || '').trim()) continue;
    updates[row.__record] = { 自动化状态: desired };
    if (desired === AUTO_STATUS.done) counts.done++;
    else if (desired === AUTO_STATUS.pending) counts.pending++;
    else if (desired === AUTO_STATUS.partial) counts.partial++;
    else if (desired === AUTO_STATUS.failed) counts.failed++;
  }

  const updated = Object.keys(updates).length;
  statusSummary = { ...counts, updated };
  if (!updated) {
    log('\n自动化状态：无变化');
    return statusSummary;
  }

  lark(
    [
      'base',
      '+record-batch-update',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      manual.id,
      '--json',
      JSON.stringify({ update_records: updates }),
    ],
    { cwd: REPO },
  );
  log(
    `\n▶ 自动化状态：更新 ${updated} 行（已完成 ${counts.done} / 待回填 ${counts.pending} / 待补填 ${counts.partial} / 失败 ${counts.failed}）`,
  );
  return statusSummary;
}

/* ─── 1. 读人工表与广告位表 ───────────────────────────────────────── */

let manual;
try {
  manual = resolveManualLedgerTable({ table: TABLE, month: MONTH, cwd: REPO });
} catch (err) {
  console.error(`❌ ${err.message}`);
  process.exit(2);
}
if (manual.fallback) {
  warn(`⚠️ 本月人工表还没建，回退到最近一张：${manual.name}（${manual.id}）`);
}

const rows = readTable(manual.id);
const adsRows = readTable(ADS_TABLE);
const adKey = (site, slot) => `${site}::${slot}`;
const adIndex = new Map();
for (const r of adsRows) {
  const site = r['站点目录'];
  const slot = r['广告位类型'];
  if (site && slot) adIndex.set(adKey(site, slot), r);
}

log(`人工表：${manual.name}（${manual.id}，${rows.length} 行）`);
log(`广告位管理：${adsRows.length} 行\n`);

/**
 * 上线日：从自动化表抄进人工表。
 * 有了这个日期才能看出某行空着是「新站还没来得及填」还是「老站漏了」。
 */
const launchDates = new Map();
let autoName = '';
try {
  const auto = resolveLedgerTable({ month: MONTH, cwd: REPO });
  autoName = auto.name;
  for (const r of readTable(auto.id)) {
    const site = (r['站点'] || '').trim();
    const d = (r['上线日'] || '').trim();
    if (site && d) launchDates.set(site, d);
  }
  log(`自动化表：${auto.name}（上线日 ${launchDates.size} 条）`);
} catch (err) {
  warn(`⚠️ 读不到自动化表，本次跳过「上线日」同步：${err.message.split('\n')[0]}`);
}

/* ─── 2. 逐行算出「哪些站需要改什么」 ─────────────────────────────── */

const gaPlan = {}; // site -> { gaId, propertyId }
const adPlan = []; // { site, slot, format, code, existing }
const forceDeploy = new Set(); // 上次标了「失败」的站：本次强制重部署
const gscPending = [];
const slot3Filled = [];
const unknownSites = [];
const badValues = [];

for (const row of rows) {
  const site = (row['站点'] || '').trim();
  if (!site) continue;
  if (ONLY_SITE && site !== ONLY_SITE) continue;
  if (!fs.existsSync(path.join(REPO, site, 'lib', 'seo-config.ts'))) {
    unknownSites.push(site);
    continue;
  }

  // 上次「失败」→ 这次不靠 diff，直接重部署一次（文件可能已经一致，但没上线）
  if ((row['自动化状态'] || '').trim() === AUTO_STATUS.failed) forceDeploy.add(site);

  // GA4
  const gaId = (row['GA4-measurementID'] || '').trim();
  const propId = (row['GA4-propertyID'] || '').trim();
  const gaKnown = GA_RE.test(gaId) && PROP_RE.test(propId);
  const gaPlaceholder = PLACEHOLDERS.has(gaId) || PLACEHOLDERS.has(propId);
  if (gaKnown) {
    if (currentGa(site) !== gaId) gaPlan[site] = { gaId, propertyId: propId };
  } else if (!gaPlaceholder && (gaId || propId)) {
    badValues.push(
      `${site}: GA4 值不完整或格式不对（measurementID="${gaId || '空'}" / propertyID="${propId || '空'}"）`,
    );
  }

  // 广告位 1 / 2
  const domain = hostOf(row['域名']);
  for (const { field, slot, format } of MANUAL_AD_SLOTS) {
    const code = (row[field] || '').trim();
    if (!code) continue;
    const existing = adIndex.get(adKey(site, slot));
    if (existing && (existing['广告代码'] || '').trim() === code) continue;
    adPlan.push({ site, slot, format, code, domain, existing });
  }

  // GSC 只是提醒，程序不写
  if (!(row['GSC'] || '').trim()) gscPending.push(site);

  // 广告位 3 占位，程序不处理
  const slot3 = (row['广告位3-todo-code'] || '').trim();
  if (slot3) slot3Filled.push(site);
}

/* ─── 3. 计划汇总 ─────────────────────────────────────────────────── */

// 本地有新站但人工表还没行 → 自动补一行（只填站点/域名，等人工填其余列）
const knownSites = new Set(rows.map((r) => (r['站点'] || '').trim()).filter(Boolean));
const localSites = fs
  .readdirSync(REPO, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.endsWith('wiki'))
  .map((d) => d.name)
  .filter((s) => fs.existsSync(path.join(REPO, s, 'lib', 'seo-config.ts')));
const newRows = localSites.filter((s) => !knownSites.has(s)).sort();

const sitesChanged = [
  ...new Set([...Object.keys(gaPlan), ...adPlan.map((a) => a.site)]),
].sort();
const deployBudget = Math.max(0, MAX_DEPLOY);

log(`需要回填的站：${sitesChanged.length} 个`);
for (const s of sitesChanged) {
  const bits = [];
  if (gaPlan[s]) bits.push(`GA4 ${gaPlan[s].gaId}/${gaPlan[s].propertyId}`);
  const mine = adPlan.filter((a) => a.site === s);
  for (const a of mine) bits.push(`广告位 ${a.slot}${a.existing ? '' : '（新建行）'}`);
  log(`  - ${s}: ${bits.join('，')}`);
}
if (sitesChanged.length === 0) log('  （无变化：人工表里的值都已和站点代码一致）');

if (gscPending.length) log(`\nGSC 未填（人工待办）：${gscPending.length} 站 — ${gscPending.join(', ')}`);
if (slot3Filled.length) {
  log(`\n广告位3-todo-code 有值（脚本暂不处理，仅提示）：${slot3Filled.join(', ')}`);
}
if (unknownSites.length) warn(`\n⚠️ 台账里有本地不存在的站点目录：${unknownSites.join(', ')}`);
if (newRows.length) {
  log(`\n新站待登记（本地有、人工表没行）：${newRows.length} 站 — ${newRows.join(', ')}`);
  log('  （--apply 时会自动补一行：只填 站点/域名，其余列等人工）');
}
if (badValues.length) {
  warn('\n⚠️ GA4 值有问题（这些行本次跳过）：');
  badValues.forEach((b) => warn(`  - ${b}`));
}

if (launchDates.size) {
  const stale = rows.filter((r) => {
    const site = (r['站点'] || '').trim();
    if (!site || (ONLY_SITE && site !== ONLY_SITE)) return false;
    const want = launchDates.get(site);
    return want && (r['上线日'] || '').trim() !== want;
  }).length;
  log(`\n上线日待同步：${stale} 行${stale ? `（来源 ${autoName}）` : ''}`);
}

const deferred = sitesChanged.slice(deployBudget);
if (deferred.length) {
  warn(
    `\n⚠️ 本次部署预算 ${deployBudget} 站，超出的 ${deferred.length} 站顺延到下一次：${deferred.join(', ')}`,
  );
}
const selected = new Set(sitesChanged.slice(0, deployBudget));

// 上次「失败」但本次没有 diff 的站：也要重部署一次（文件可能早写好了、只是没上线）
const forceOnly = [...forceDeploy].filter((s) => !sitesChanged.includes(s)).sort();
const forceRoom = Math.max(0, deployBudget - selected.size);
const forceSelected = forceOnly.slice(0, forceRoom);
const forceDeferred = forceOnly.slice(forceRoom);
if (forceOnly.length) {
  log(
    `\n上次「失败」待重部署：${forceOnly.length} 站 — ${forceSelected.join(', ') || '（本次额度已满）'}${
      forceDeferred.length ? `；顺延 ${forceDeferred.join(', ')}` : ''
    }`,
  );
}

// 部署结果（早退路径也要能看到，所以提前声明）
const deployed = [];
const failed = [];
const failedSet = new Set();

const gaSelected = Object.fromEntries(
  Object.entries(gaPlan).filter(([site]) => selected.has(site)),
);
const adSelected = adPlan.filter((a) => selected.has(a.site));
const adSites = [...new Set(adSelected.map((a) => a.site))];

/* ─── 手工触发：只刷「自动化状态」，不改站点、不部署 ─────────────── */

if (STATUS_ONLY) {
  // 按站点真实状态重算，不继承上一轮的「失败」标记（否则手动修好之后状态永远洗不掉）
  const r = syncStatuses({ deployedSites: [], failedNow: [], carryFailures: false });
  log(
    `\n--status-only：只刷状态（已完成 ${r.done ?? 0} / 待回填 ${r.pending ?? 0} / 待补填 ${r.partial ?? 0} / 失败 ${r.failed ?? 0}），站点与部署都没动`,
  );
  process.exit(0);
}

if (!APPLY) {
  // 预览：按「本次计划顺利落地上线」估算，回填完真实状态会再刷一次
  const planned = new Set([...selected, ...forceSelected]);
  const simAds = new Map(adIndex);
  for (const a of adSelected) {
    simAds.set(adKey(a.site, a.slot), { 广告代码: a.code, 状态: '已上线' });
  }
  const gaOf = (s) => (gaSelected[s] ? gaSelected[s].gaId : currentGa(s));
  const previewStillFailed = new Set([...forceDeploy].filter((s) => !planned.has(s)));
  const preview = { done: 0, pending: 0, partial: 0, failed: 0, changed: 0 };
  for (const row of rows) {
    const site = (row['站点'] || '').trim();
    if (!site || (ONLY_SITE && site !== ONLY_SITE)) continue;
    const desired = autoStatusOf(row, simAds, previewStillFailed, gaOf);
    if (desired === (row['自动化状态'] || '').trim()) continue;
    preview.changed++;
    if (desired === AUTO_STATUS.done) preview.done++;
    else if (desired === AUTO_STATUS.pending) preview.pending++;
    else if (desired === AUTO_STATUS.partial) preview.partial++;
    else if (desired === AUTO_STATUS.failed) preview.failed++;
  }
  if (DEPLOY) {
    log(
      `\n自动化状态预览：会更新 ${preview.changed} 行（已完成 ${preview.done} / 待回填 ${preview.pending} / 待补填 ${preview.partial} / 失败 ${preview.failed}）——按部署全部成功估算`,
    );
  } else {
    log('\n自动化状态：--no-deploy 不回写');
  }

  log(`\nDRY-RUN：加 --apply 执行（本次会处理 ${selected.size} 站${
    forceSelected.length ? ` + 重部署 ${forceSelected.length} 站` : ''
  }${DEPLOY ? '，含部署' : '，不部署'}${newRows.length ? `，并补登记 ${newRows.length} 个新站` : ''}）。`);
  process.exit(0);
}

/** 本地新站 → 人工表补一行（只填站点/域名，其余列等人工）。 */
function addNewRows() {
  if (!newRows.length) return;
  log(`\n▶ 人工表补登记 ${newRows.length} 站：${newRows.join(', ')}`);
  lark(
    [
      'base',
      '+record-batch-create',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      manual.id,
      '--json',
      JSON.stringify({
        create_records: newRows.map((s) => ({
          站点: s,
          域名: `https://${s}.vercel.app/`,
          ...(launchDates.get(s) ? { 上线日: launchDates.get(s) } : {}),
        })),
      }),
    ],
    { cwd: REPO },
  );
}

if (selected.size === 0 && forceSelected.length === 0) {
  addNewRows();
  syncLaunchDates();
  // 就算没有待回填项也要刷一次状态：首次跑会把「已完成 / 待回填」标出来
  syncStatuses();
  commitAndLog([], []);
  process.exit(0);
}

addNewRows();
syncLaunchDates();

/* ─── 4. 回填 GA4 ─────────────────────────────────────────────────── */

if (Object.keys(gaSelected).length) {
  const tmp = path.join(os.tmpdir(), `ga4-ids-${process.pid}.json`);
  fs.writeFileSync(tmp, JSON.stringify(gaSelected, null, 2));
  log(`\n▶ GA4：写入 ${Object.keys(gaSelected).length} 站`);
  const r = sh('node', ['scripts/set-ga4-ids.mjs', tmp]);
  fs.rmSync(tmp, { force: true });
  if (r.status !== 0) warn('⚠️ set-ga4-ids 失败，GA 相关站本次不改');
}

/* ─── 5. 回填广告位 → 广告位管理表 ────────────────────────────────── */

const toUpdate = {};
const toCreate = [];
for (const a of adSelected) {
  if (a.existing) {
    // 已有行：只换代码，状态不动（状态=已接入 表示人工接的，adsterra-sync 会自动跳过）
    toUpdate[a.existing.__record] = { 广告代码: a.code };
  } else {
    toCreate.push({
      广告位名称: `${a.site}-${a.slot}`,
      广告位类型: a.slot,
      域名: a.domain || `${a.site}.vercel.app`,
      广告格式: a.format,
      广告代码: a.code,
      站点目录: a.site,
      状态: 'ready',
      同步状态: '未同步',
      备注: `由站点台账(人工)回填 ${today()}`,
    });
  }
}
if (Object.keys(toUpdate).length) {
  log(`\n▶ 广告位管理：更新 ${Object.keys(toUpdate).length} 行代码`);
  lark(
    [
      'base',
      '+record-batch-update',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      ADS_TABLE,
      '--json',
      JSON.stringify({ update_records: toUpdate }),
    ],
    { cwd: REPO },
  );
}
if (toCreate.length) {
  log(`▶ 广告位管理：新建 ${toCreate.length} 行`);
  lark(
    [
      'base',
      '+record-batch-create',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      ADS_TABLE,
      '--json',
      JSON.stringify({ create_records: toCreate }),
    ],
    { cwd: REPO },
  );
}

/* ─── 6. 注入 + 部署（只动本次选中的站） ──────────────────────────── */

if (!DEPLOY) {
  log('\n--no-deploy：跳过注入与部署，只改了台账和 GA 配置');
} else {
  for (const site of adSites) {
    log(`\n▶ ${site}：注入广告位并部署`);
    const r = sh('node', ['scripts/adsterra-sync.mjs', '--apply', '--deploy', '--site', site]);
    if (r.status === 0) deployed.push(site);
    else {
      failed.push(`${site}: adsterra-sync/deploy 失败`);
      failedSet.add(site);
    }
  }

  // 只有 GA 变化的站（没有广告变化）单独部署
  for (const site of [...selected].sort()) {
    if (adSites.includes(site)) continue;
    log(`\n▶ ${site}：GA4 变更部署`);
    const r = sh('./deploy-wiki-site.sh', [site]);
    if (r.status === 0) deployed.push(site);
    else {
      failed.push(`${site}: deploy 失败`);
      failedSet.add(site);
    }
  }

  // 上次标了「失败」、本次又没有 diff 的站：强制重部署一次
  for (const site of forceSelected) {
    if (deployed.includes(site)) continue;
    log(`\n▶ ${site}：上次失败，强制重新部署`);
    const r = sh('./deploy-wiki-site.sh', [site]);
    if (r.status === 0) deployed.push(site);
    else {
      failed.push(`${site}: 重部署失败`);
      failedSet.add(site);
    }
  }
}

/* ─── 7. 回写「自动化状态」（重读广告位管理，用部署后的真实状态） ── */

syncStatuses({ deployedSites: deployed, failedNow: [...failedSet] });

/* ─── 8. 收尾：报告 + 提交 + 落日志 ───────────────────────────────── */

log('\n──────── 汇总 ────────');
log(`部署成功：${deployed.length} 站${deployed.length ? ` — ${deployed.join(', ')}` : ''}`);
if (failed.length) {
  warn('失败：');
  failed.forEach((f) => warn(`  - ${f}`));
}
if (deferred.length) log(`顺延：${deferred.join(', ')}`);
if (forceDeferred.length) log(`重部署顺延：${forceDeferred.join(', ')}`);
if (gscPending.length) log(`GSC 未填：${gscPending.join(', ')}`);
if (statusSummary && !statusSummary.skipped) {
  log(
    `自动化状态：更新 ${statusSummary.updated} 行（已完成 ${statusSummary.done} / 待回填 ${statusSummary.pending} / 待补填 ${statusSummary.partial} / 失败 ${statusSummary.failed}）`,
  );
}

commitAndLog(deployed, failed);

function commitAndLog(deployedSites, failedSites = []) {
  // 先落日志，再提交：日志行跟着本次真实改动一起进 commit；
  // 没有改动时留到下一次，避免每天空提交。
  const entry = {
    ts: new Date().toISOString(),
    manualTable: { name: manual.name, id: manual.id, fallback: !!manual.fallback },
    planned: sitesChanged,
    redeploy: forceSelected,
    launchDateSynced: launchSynced,
    deployed: deployedSites,
    failed: failedSites,
    deferred,
    forceDeferred,
    autoStatus: statusSummary,
    gscPending,
    slot3Filled,
    unknownSites,
    badValues,
  };
  const logPath = '.agent/ledger-sync-log.jsonl';
  fs.appendFileSync(path.join(REPO, logPath), JSON.stringify(entry) + '\n');

  // 只提交本次动过的路径：仓库里还有其他自动化在改文件，禁用 git add -A
  const paths = [...new Set([...sitesChanged, 'dashboard/lib/sites.ts', '.agent/deploy-log.jsonl'])];
  sh('git', ['add', '--', ...paths]);

  const staged = execFileSync('git', ['diff', '--cached', '--name-only'], {
    cwd: REPO,
    encoding: 'utf8',
  })
    .split('\n')
    .filter(Boolean);

  if (staged.length === 0) {
    log(`本次没有文件改动，不提交（日志已写入 ${logPath}，留给下次一并提交）`);
    return;
  }

  // 有真实改动时，把这次的日志行一起带上
  sh('git', ['add', '--', logPath]);

  const r = sh('git', [
    'commit',
    '-m',
    `chore(ledger): 回填人工台账 ${today()}（${selected.size} 站${
      forceSelected.length ? ` + 重部署 ${forceSelected.length}` : ''
    }）`,
    '-m',
    [
      `来源：${manual.name}（${manual.id}）`,
      `改 GA4：${Object.keys(gaSelected).length} 站`,
      `改广告位：${adSites.length} 站`,
      `部署：${deployedSites.join(', ') || '无'}`,
      `自动化状态：已完成 ${statusSummary?.done ?? 0} / 待回填 ${statusSummary?.pending ?? 0} / 待补填 ${statusSummary?.partial ?? 0} / 失败 ${statusSummary?.failed ?? 0}`,
      '',
      'Co-Authored-By: Claude Code <noreply@anthropic.com>',
    ].join('\n'),
  ]);
  if (r.status === 0) {
    sh('git', ['push', 'origin', 'HEAD']);
  } else {
    warn('⚠️ git commit 失败，改动留在工作区');
  }
  log(`日志：${logPath}`);
}
