#!/usr/bin/env node
/**
 * 建下个月的两张站点台账表（表名 = `站点台账(自动化)` / `站点台账(人工)` + 年月）。
 *
 * 自动化表：以最近的自动化表为模板，复制表结构 + 全部站点行；
 *   `PV(30d)` / `PV 环比(%)` 不复制（由 sync-site-ledger.mjs 重新算）。
 * 人工表：以最近的人工表为模板整行复制（GA4/GSC/广告位代码都保留，等于沿用上月状态）。
 *   一张人工表都没有时，按自动化表的站点列表建空行（只填 站点 / 域名）。
 *
 * 用法：
 *   node scripts/roll-month-ledger.mjs                 # 预览（默认本月）
 *   node scripts/roll-month-ledger.mjs --apply
 *   node scripts/roll-month-ledger.mjs --month 2026-11 --apply
 *   node scripts/roll-month-ledger.mjs --month 2026-11 --from 2026-10 --apply
 *
 * 目标表已存在时直接报错退出，不会覆盖。
 */

import path from 'node:path';
import {
  BASE_TOKEN,
  LEDGER_FIELDS,
  MANUAL_DERIVED_FIELDS,
  MANUAL_FIELDS,
  MONTHLY_FIELDS,
  MONTH_RE,
  cellScalar,
  lark,
  ledgerTableName,
  manualTableName,
  listTables,
  monthName,
  parseLedgerTableName,
} from './lib/month-ledger.mjs';

const REPO = path.resolve(import.meta.dirname, '..');

const APPLY = process.argv.includes('--apply');
const MONTH = opt('--month', monthName());
const FROM = opt('--from', null);

/** 还没有月度表时，用这张老表当模板（2026-10 那份记录）。 */
const LEGACY_FALLBACK = '站点台账';

function opt(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function readRecords(tableId) {
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
    const cols = data.fields;
    data.data.forEach((cells) => {
      const row = {};
      cols.forEach((name, i) => {
        if (MONTHLY_FIELDS.includes(name)) return;
        if (MANUAL_DERIVED_FIELDS.includes(name)) return; // 新月份由回填脚本重新算
        const v = cellScalar(cells[i]);
        if (v !== null && v !== '') row[name] = v;
      });
      rows.push(row);
    });
    if (!data.has_more || data.data.length === 0) break;
    offset += data.data.length;
  }
  return rows;
}

/* ─── main ────────────────────────────────────────────────────────── */

if (!MONTH_RE.test(MONTH)) {
  console.error(`--month 必须是 YYYY-MM，收到：${MONTH}`);
  process.exit(1);
}

const TARGET = ledgerTableName(MONTH);
const MANUAL_TARGET = manualTableName(MONTH);
const tables = listTables(BASE_TOKEN, REPO);
if (tables.some((t) => t.name === TARGET)) {
  console.error(`「${TARGET}」已存在（${tables.find((t) => t.name === TARGET).id}），不覆盖。`);
  process.exit(1);
}
const manualExists = tables.find((t) => t.name === MANUAL_TARGET);

const months = tables
  .map((t) => ({ t, p: parseLedgerTableName(t.name) }))
  .filter((x) => x.p?.kind === 'auto')
  .sort((a, b) => a.p.month.localeCompare(b.p.month))
  .map((x) => x.t);

let source;
if (FROM) {
  source = tables.find((t) => t.id === FROM || t.name === FROM);
  if (!source) {
    console.error(`找不到来源表：${FROM}`);
    process.exit(1);
  }
} else {
  // 优先拿最近的自动化表；还没有月度表时用老的「站点台账」（2026-10 那份）
  source =
    months[months.length - 1] ??
    tables.find((t) => t.name === LEGACY_FALLBACK);
  if (!source) {
    console.error(`没有可用的模板表（既无月度表，也无「${LEGACY_FALLBACK}」）。`);
    process.exit(1);
  }
}

const rows = readRecords(source.id);

// 人工表模板：最近一张人工表（同月目标已存在时跳过）
const manualSource = manualExists
  ? null
  : tables
      .map((t) => ({ t, p: parseLedgerTableName(t.name) }))
      .filter((x) => x.p?.kind === 'manual' && x.p.month !== MONTH)
      .sort((a, b) => a.p.month.localeCompare(b.p.month))
      .map((x) => x.t)
      .pop();
const manualRows = manualSource
  ? readRecords(manualSource.id)
  : rows.map((r) => ({ 站点: r.站点, 域名: r.域名 }));

console.log(`新表：${TARGET}`);
console.log(`模板：${source.name}（${source.id}，${rows.length} 行）`);
console.log(`不带过来的字段：${MONTHLY_FIELDS.join('、')}（由 sync-site-ledger.mjs 重算）`);
console.log(`字段：${LEDGER_FIELDS.map((f) => f.name).join(' / ')}`);
console.log('前 3 行示例：');
for (const r of rows.slice(0, 3)) console.log('  ', JSON.stringify(r).slice(0, 140));

if (manualExists) {
  console.log(`\n人工表「${MANUAL_TARGET}」已存在（${manualExists.id}），跳过不动。`);
} else {
  console.log(`\n人工表：${MANUAL_TARGET}`);
  console.log(
    `模板：${manualSource ? `${manualSource.name}（${manualSource.id}）` : '无（按站点列表建空行）'}，${manualRows.length} 行`,
  );
  console.log(`字段：${MANUAL_FIELDS.map((f) => f.name).join(' / ')}`);
}

if (!APPLY) {
  console.log('\ndry-run：加 --apply 建表。');
  process.exit(0);
}

const created = lark(
  [
    'base',
    '+table-create',
    '--base-token',
    BASE_TOKEN,
    '--name',
    TARGET,
    '--fields',
    JSON.stringify(LEDGER_FIELDS),
  ],
  { cwd: REPO },
);

const tableId = created.table_id ?? created.table?.table_id ?? created.id;
if (!tableId) throw new Error(`建表返回里没有 table_id：${JSON.stringify(created)}`);
console.log(`已建表：${TARGET}（${tableId}）`);

for (let i = 0; i < rows.length; i += 200) {
  lark(
    [
      'base',
      '+record-batch-create',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      tableId,
      '--json',
      JSON.stringify({ create_records: rows.slice(i, i + 200) }),
    ],
    { cwd: REPO },
  );
}

console.log(`完成：${rows.length} 行已复制到「${TARGET}」，PV/环比留空待重算。`);

/* ─── 人工表 ───────────────────────────────────────────────────────── */

if (manualExists) process.exit(0);

const manualCreated = lark(
  [
    'base',
    '+table-create',
    '--base-token',
    BASE_TOKEN,
    '--name',
    MANUAL_TARGET,
    '--fields',
    JSON.stringify(MANUAL_FIELDS),
  ],
  { cwd: REPO },
);
const manualId = manualCreated.table_id ?? manualCreated.table?.table_id ?? manualCreated.id;
if (!manualId) throw new Error(`人工表建表返回里没有 table_id：${JSON.stringify(manualCreated)}`);

// table-create 并发建字段会打乱列顺序 → 用视图的 visible_fields 钉回 MANUAL_FIELDS 顺序
const views = lark(
  ['base', '+view-list', '--base-token', BASE_TOKEN, '--table-id', manualId],
  { cwd: REPO },
).views ?? [];
const grid = views.find((v) => v.type === 'grid') ?? views[0];
if (grid) {
  lark(
    [
      'base',
      '+view-set-visible-fields',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      manualId,
      '--view-id',
      grid.id,
      '--json',
      JSON.stringify({ visible_fields: MANUAL_FIELDS.map((f) => f.name) }),
    ],
    { cwd: REPO },
  );
}

for (let i = 0; i < manualRows.length; i += 200) {
  lark(
    [
      'base',
      '+record-batch-create',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      manualId,
      '--json',
      JSON.stringify({ create_records: manualRows.slice(i, i + 200) }),
    ],
    { cwd: REPO },
  );
}

console.log(`完成：人工表「${MANUAL_TARGET}」（${manualId}）已建，${manualRows.length} 行已带入。`);
