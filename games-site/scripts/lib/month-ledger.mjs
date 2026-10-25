#!/usr/bin/env node
/**
 * 站点台账的月度表约定。
 *
 * 2026-10-25 起，站点台账按**月**分表，表名 = `站点台账` + 年月：
 * `站点台账2026-10`、`站点台账2026-11`……
 * 每月一张全量快照（所有站点 + 当月 PV/环比/分级），便于按月对比。
 * 建新月份的表：`node scripts/roll-month-ledger.mjs --month 2026-11`
 */

import { execFileSync } from 'node:child_process';

export const BASE_TOKEN = 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg';
export const MONTH_RE = /^\d{4}-\d{2}$/;

/** 月度表名前缀。 */
export const LEDGER_PREFIX = '站点台账';

/** 月度表名：`站点台账2026-11`。 */
export const ledgerTableName = (month) => `${LEDGER_PREFIX}${month}`;

/** 月度表名 → 月份；不是月度表返回 null。 */
export function monthOfTable(name) {
  if (!name.startsWith(LEDGER_PREFIX)) return null;
  const rest = name.slice(LEDGER_PREFIX.length);
  return MONTH_RE.test(rest) ? rest : null;
}

/** 历史表名兼容（改名前后都可能遇到）。 */
export const LEGACY_MONTH_TABLES = {
  '2026-10': ['站点台账', '站点台账 2026-10'],
};

/** 台账字段定义（建月度表时用；顺序即列顺序，首个字段是主字段）。 */
export const LEDGER_FIELDS = [
  { name: '站点', type: 'text' },
  { name: '上线日', type: 'datetime' },
  { name: '域名', type: 'text' },
  { name: '最后 QA', type: 'datetime' },
  { name: '广告位上线数', type: 'number' },
  { name: '版本确认日', type: 'datetime' },
  { name: '攻略数', type: 'number' },
  { name: '备注', type: 'text' },
  { name: '游戏当前版本', type: 'text' },
  {
    name: '发售状态',
    type: 'select',
    options: [{ name: '已发售' }, { name: 'EA' }, { name: '未发售' }, { name: '未知' }],
  },
  {
    name: '广告状态',
    type: 'select',
    options: [{ name: '未申请' }, { name: '已申请' }, { name: '已接入' }, { name: '暂停' }],
  },
  { name: '玩家上限', type: 'number' },
  { name: 'PV(30d)', type: 'number' },
  { name: 'PV 环比(%)', type: 'number' },
  {
    name: '生命周期状态',
    type: 'select',
    options: [{ name: '加码' }, { name: '维持' }, { name: '观察中' }, { name: '不再维护' }],
  },
];

/** 月度指标：建新表时不从旧表带过来，由脚本重新计算。 */
export const MONTHLY_FIELDS = ['PV(30d)', 'PV 环比(%)'];

export function lark(args, { cwd } = {}) {
  const out = execFileSync('lark-cli', args, {
    cwd,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  const parsed = JSON.parse(out);
  if (!parsed.ok) {
    throw new Error(`lark-cli ${args.slice(0, 2).join(' ')} 失败：${JSON.stringify(parsed.error)}`);
  }
  return parsed.data;
}

export function listTables(base = BASE_TOKEN, cwd) {
  return lark(['base', '+table-list', '--base-token', base], { cwd }).tables ?? [];
}

export function monthName(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * 定位某个月的台账表。
 * - 传 `table`：按 ID 或表名精确匹配
 * - 传 `month`：按月表名匹配，缺表直接报错并给出建表命令
 */
export function resolveLedgerTable({ base = BASE_TOKEN, table, month, cwd } = {}) {
  const tables = listTables(base, cwd);

  if (table) {
    const hit = tables.find((t) => t.id === table || t.name === table);
    if (!hit) throw new Error(`找不到台账表：${table}`);
    return hit;
  }

  const name = ledgerTableName(month ?? monthName());
  const hit = tables.find((t) => t.name === name);
  if (hit) return hit;

  // 历史表名（改名过渡期）
  const m = month ?? monthName();
  for (const old of LEGACY_MONTH_TABLES[m] ?? []) {
    const legacy = tables.find((t) => t.name === old);
    if (legacy) return legacy;
  }

  const months = tables
    .map((t) => monthOfTable(t.name))
    .filter(Boolean)
    .sort();
  throw new Error(
    `没有「${name}」这张月度台账表。\n` +
      `先建本月表：node scripts/roll-month-ledger.mjs --month ${m}\n` +
      `现有月度表：${months.length ? months.map(ledgerTableName).join('、') : '（无）'}`,
  );
}

/** 把单元格值统一成能写回 batch-create 的标量。 */
export function cellScalar(value) {
  if (Array.isArray(value)) return value.length === 0 ? null : cellScalar(value[0]);
  if (value && typeof value === 'object') return value.text ?? value.name ?? null;
  return value ?? null;
}
