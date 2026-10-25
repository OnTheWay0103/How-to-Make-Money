#!/usr/bin/env node
/**
 * 一次性迁移工具：把飞书在线表 ADsMgr 的广告位数据同步到多维表格的「广告位管理」表。
 *
 *   飞书在线表：站点日常工作表 → ADsMgr（wiki Nbeqw9Dqmivo2jkWPYKc56Fwn7e）
 *   多维表格：  游戏站交付看板 → 广告位管理（tblPlFjSok72tnA1）
 *
 * ⚠️ 2026-10-25 起，多维表格才是唯一数据源（adsterra-sync.mjs 直接读它、回写同步状态）。
 *    在线表已归档。再跑 --apply 会把旧值覆盖回多维表格，除非确实要做反向迁移，否则别跑。
 *
 * 用法：
 *   node scripts/bitable-sync-ads.mjs              # 预览差异（默认 dry-run）
 *   node scripts/bitable-sync-ads.mjs --apply      # 写入
 *   node scripts/bitable-sync-ads.mjs --apply --prune   # 同时删除在线表里已不存在的行
 *
 * 以「广告位名称」为主键做 upsert，重复运行是幂等的。
 */

import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SPREADSHEET_TOKEN = 'F2dZsHhB0hGZZxtf7ywchwQmnJf';
const SHEET_ID = '9c3d28';
const BASE_TOKEN = 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg';
const TABLE_ID = 'tblPlFjSok72tnA1';

const APPLY = process.argv.includes('--apply');
const PRUNE = process.argv.includes('--prune');

const FIELDS = [
  '广告位名称',
  '站点目录',
  '域名',
  '广告位类型',
  '广告格式',
  '广告位ID',
  '状态',
  '广告代码',
  '备注',
  '同步状态',
];

/* ─── helpers ─────────────────────────────────────────────────────── */

function lark(args) {
  const out = execFileSync('lark-cli', args, {
    cwd: REPO,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  const parsed = JSON.parse(out);
  if (!parsed.ok) {
    throw new Error(`lark-cli ${args.slice(0, 2).join(' ')} failed: ${JSON.stringify(parsed.error)}`);
  }
  return parsed.data;
}

/** RFC 4180 CSV parser (multiline cells supported). */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      quoted = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (c !== '\r') {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((v) => v.trim() !== ''));
}

function loadSheetRows() {
  const data = lark([
    'sheets',
    '+csv-get',
    '--spreadsheet-token',
    SPREADSHEET_TOKEN,
    '--sheet-id',
    SHEET_ID,
    '--range',
    'A1:J500',
    '--format',
    'csv',
  ]);
  const csv = (data.annotated_csv ?? data.csv ?? '').replace(/^\[row=\d+\] ?/gm, '');
  const [header, ...body] = parseCsv(csv);
  return body.map((cells) =>
    Object.fromEntries(header.map((name, i) => [name.trim(), (cells[i] ?? '').trim()])),
  );
}

function loadBitableRecords() {
  const records = [];
  let offset = 0;
  for (;;) {
    const data = lark([
      'base',
      '+record-list',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      TABLE_ID,
      '--format',
      'json',
      '--limit',
      '200',
      '--offset',
      String(offset),
    ]);
    const names = data.fields;
    data.data.forEach((cells, i) => {
      const fields = {};
      names.forEach((name, c) => {
        const value = cells[c];
        fields[name] = Array.isArray(value) ? value.join(', ') : (value ?? '');
      });
      records.push({ recordId: data.record_id_list[i], fields });
    });
    if (!data.has_more) break;
    offset += data.data.length;
  }
  return records;
}

const norm = (v) => String(v ?? '').trim();
const rowToFields = (row) => {
  const fields = {};
  for (const key of FIELDS) fields[key] = norm(row[key]);
  if (!fields['同步状态']) fields['同步状态'] = '未同步';
  return fields;
};

/* ─── main ────────────────────────────────────────────────────────── */

const sheetRows = loadSheetRows();
const bitable = loadBitableRecords();

const byName = new Map(bitable.map((r) => [norm(r.fields['广告位名称']), r]));
const seen = new Set();
const toCreate = [];
const toUpdate = [];

for (const row of sheetRows) {
  const fields = rowToFields(row);
  const key = fields['广告位名称'];
  if (!key) continue;
  seen.add(key);
  const existing = byName.get(key);
  if (!existing) {
    toCreate.push(fields);
    continue;
  }
  const changed = {};
  for (const field of FIELDS) {
    if (norm(existing.fields[field]) !== norm(fields[field])) changed[field] = fields[field];
  }
  if (Object.keys(changed).length > 0) {
    toUpdate.push({ name: key, recordId: existing.recordId, fields: changed });
  }
}

const toDelete = PRUNE
  ? bitable.filter((r) => !seen.has(norm(r.fields['广告位名称'])))
  : [];

console.log(
  `在线表 ${sheetRows.length} 行 / 多维表格 ${bitable.length} 条 → 新增 ${toCreate.length}，更新 ${toUpdate.length}${PRUNE ? `，删除 ${toDelete.length}` : ''}`,
);
for (const c of toCreate.slice(0, 5)) console.log(`  + ${c['广告位名称']}`);
for (const u of toUpdate.slice(0, 5)) {
  const changed = Object.keys(u.fields).join(',');
  console.log(`  ~ ${u.name || u.recordId} (${changed})`);
}

if (!APPLY) {
  console.log('dry-run：加 --apply 写入。');
  process.exit(0);
}

console.warn('⚠️ 多维表格已是数据源，本次写入会用在线表的内容覆盖对应字段。');

if (toCreate.length > 0) {
  for (let i = 0; i < toCreate.length; i += 200) {
    lark([
      'base',
      '+record-batch-create',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      TABLE_ID,
      '--json',
      JSON.stringify({ create_records: toCreate.slice(i, i + 200) }),
    ]);
  }
}

if (toUpdate.length > 0) {
  const updateRecords = Object.fromEntries(toUpdate.map((u) => [u.recordId, u.fields]));
  lark([
    'base',
    '+record-batch-update',
    '--base-token',
    BASE_TOKEN,
    '--table-id',
    TABLE_ID,
    '--json',
    JSON.stringify({ update_records: updateRecords }),
  ]);
}

if (toDelete.length > 0) {
  lark([
    'base',
    '+record-delete',
    '--base-token',
    BASE_TOKEN,
    '--table-id',
    TABLE_ID,
    '--json',
    JSON.stringify({ record_id_list: toDelete.map((r) => r.recordId) }),
    '--yes',
  ]);
}

console.log('完成：多维表格已与在线表同步。');
