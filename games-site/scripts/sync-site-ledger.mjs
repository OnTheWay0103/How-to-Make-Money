#!/usr/bin/env node
/**
 * 把 30 天 PV 和环比写进飞书多维表格的**当月站点台账表**。
 *
 *   数据来源：dashboard `/api/traffic`（GA4 聚合，见 scripts/lib/dashboard-traffic.mjs）
 *   目标表：  游戏站交付看板 → 月度台账表（表名 = `站点台账(自动化)` + 年月，如 `站点台账(自动化)2026-10`）
 *   新月份的表：node scripts/roll-month-ledger.mjs --month 2026-11 --apply
 *
 * 用法：
 *   node scripts/sync-site-ledger.mjs                      # 预览差异（默认 dry-run）
 *   node scripts/sync-site-ledger.mjs --apply              # 写入当月表
 *   node scripts/sync-site-ledger.mjs --month 2026-10      # 指定月份
 *   node scripts/sync-site-ledger.mjs --table tblXXXX      # 指定表
 *
 * 以台账「站点」列（裸域名）反推出的站点目录名为主键匹配记录。只写 `PV(30d)` 和 `PV 环比(%)` 两个字段，
 * 不动人工维护的字段（上线日、攻略数、备注……）。重复运行是幂等的。
 */

import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fetchTraffic, trafficByDir } from './lib/dashboard-traffic.mjs';
import { resolveLedgerTable, siteDirOf } from './lib/month-ledger.mjs';

const REPO = path.resolve(import.meta.dirname, '..');

const APPLY = process.argv.includes('--apply');
const BASE_TOKEN = opt('--base', 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg');
const TABLE_ARG = opt('--table', null);
const MONTH = opt('--month', null);

const FIELD_PV = 'PV(30d)';
const FIELD_CHANGE = 'PV 环比(%)';

function opt(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function lark(args) {
  const out = execFileSync('lark-cli', args, {
    cwd: REPO,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  const parsed = JSON.parse(out);
  if (!parsed.ok) {
    throw new Error(`lark-cli ${args.slice(0, 2).join(' ')} 失败：${JSON.stringify(parsed.error)}`);
  }
  return parsed.data;
}

function listRecords(tableId) {
  const rows = [];
  let offset = 0;
  for (;;) {
    const data = lark([
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
    ]);
    const cols = data.fields;
    const iSite = cols.indexOf('站点');
    const iPv = cols.indexOf(FIELD_PV);
    const iChange = cols.indexOf(FIELD_CHANGE);
    if (iSite === -1) throw new Error('站点台账缺少「站点」字段');

    data.data.forEach((cells, i) => {
      rows.push({
        recordId: data.record_id_list[i],
        site: String(cells[iSite] ?? '').trim(),
        pv: iPv === -1 ? null : cells[iPv],
        change: iChange === -1 ? null : cells[iChange],
      });
    });

    if (!data.has_more || data.data.length === 0) break;
    offset += data.data.length;
  }
  return rows;
}

const num = (v) => (typeof v === 'number' ? v : v == null || v === '' ? null : Number(v));

/* ─── main ────────────────────────────────────────────────────────── */

const ledger = resolveLedgerTable({
  base: BASE_TOKEN,
  table: TABLE_ARG,
  month: MONTH,
  cwd: REPO,
});
const TABLE_ID = ledger.id;
console.log(`台账表：${ledger.name}（${TABLE_ID}，${ledger.records_count ?? '?'} 行）`);

const traffic = fetchTraffic();
const { byDir, unmatched } = trafficByDir(traffic);
console.log(
  `流量源：${traffic.host}（${traffic.ip}，${traffic.sites.length} 站，抓取于 ${traffic.fetchedAt}）`,
);
if (unmatched.length > 0) {
  console.warn('⚠️ 这些站在 traffic 接口里找不到对应 GA ID：', unmatched.map((u) => u.dir).join(', '));
}

const records = listRecords(TABLE_ID);
console.log(`站点台账：${records.length} 条`);

const updates = {};
const notInLedger = [];
const unchanged = [];

for (const [dir, t] of byDir) {
  const rec = records.find((r) => siteDirOf(r.site) === dir);
  if (!rec) {
    notInLedger.push(dir);
    continue;
  }

  const patch = {};
  if (num(rec.pv) !== t.pv) patch[FIELD_PV] = t.pv;
  if (t.change != null && num(rec.change) !== t.change) patch[FIELD_CHANGE] = t.change;

  if (Object.keys(patch).length === 0) unchanged.push(dir);
  else updates[rec.recordId] = { ...patch, __site: dir };
}

const missingPv = records.filter((r) => !byDir.has(siteDirOf(r.site))).map((r) => r.site);

const changed = Object.entries(updates);
console.log(
  `待更新 ${changed.length} 条，无变化 ${unchanged.length} 条` +
    `${notInLedger.length ? `，台账缺 ${notInLedger.length} 站（${notInLedger.join(', ')}）` : ''}` +
    `${missingPv.length ? `，无流量数据 ${missingPv.length} 站` : ''}`,
);
for (const [, patch] of changed.slice(0, 10)) {
  const { __site, ...fields } = patch;
  console.log(`  ~ ${__site}: ${Object.entries(fields).map(([k, v]) => `${k}=${v}`).join(', ')}`);
}
if (changed.length > 10) console.log(`  … 其余 ${changed.length - 10} 条`);

if (!APPLY) {
  console.log('dry-run：加 --apply 写入多维表格。');
  process.exit(0);
}
if (changed.length === 0) {
  console.log('无需写入。');
  process.exit(0);
}

const updateRecords = Object.fromEntries(
  changed.map(([id, { __site, ...fields }]) => [id, fields]),
);
for (let i = 0; i < changed.length; i += 200) {
  const chunk = Object.fromEntries(
    Object.entries(updateRecords).slice(i, i + 200),
  );
  lark([
    'base',
    '+record-batch-update',
    '--base-token',
    BASE_TOKEN,
    '--table-id',
    TABLE_ID,
    '--json',
    JSON.stringify({ update_records: chunk }),
  ]);
}

console.log(`完成：${changed.length} 条已写入站点台账。`);
