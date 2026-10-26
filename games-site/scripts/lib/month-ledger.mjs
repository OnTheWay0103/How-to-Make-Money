#!/usr/bin/env node
/**
 * 站点台账的月度表约定。
 *
 * 2026-10-25 起按**月**分表；2026-10-26 起每月**两张表**，表名都以 `站点台账` 开头 + 年月：
 *
 * - `站点台账(自动化)2026-10` — 脚本写：PV/环比/分级/攻略数/广告位上线数（LEDGER_FIELDS）
 * - `站点台账(人工)2026-10`  — 人写、脚本读：GA4 / GSC / 三个广告位代码（MANUAL_FIELDS）
 *
 * 人工表填了值 = 人工处理完了，`sync-ledger-manual.mjs` 每天 20:00 把值回填进站点并部署。
 * 旧名 `站点台账2026-10` 一律按自动化表处理（改名过渡期兼容）。
 *
 * **「站点」列写裸域名**（2026-10-26 起，如 `witchspirewiki.vercel.app`），
 * 原来的 `域名` 列两表都已删除。需要目录名的地方统一用 `siteDirOf()` 反推。
 *
 * 建新月份的两张表：`node scripts/roll-month-ledger.mjs --month 2026-11`
 */

import { execFileSync } from 'node:child_process';

export const BASE_TOKEN = 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg';
export const MONTH_RE = /^\d{4}-\d{2}$/;

/** 月度表名前缀。 */
export const LEDGER_PREFIX = '站点台账(自动化)';
export const MANUAL_PREFIX = '站点台账(人工)';

/** 月度表名：`站点台账(自动化)2026-11`。 */
export const ledgerTableName = (month) => `${LEDGER_PREFIX}${month}`;

/** 人工表名：`站点台账(人工)2026-11`。 */
export const manualTableName = (month) => `${MANUAL_PREFIX}${month}`;

/**
 * 台账表名 → `{ month, kind }`，不是台账表返回 null。
 * kind：`auto`（脚本写）/ `manual`（人写脚本读）；旧名 `站点台账2026-10` 算 auto。
 */
export function parseLedgerTableName(name) {
  const m = /^站点台账(?:[（(](自动化|人工)[）)])?(\d{4}-\d{2})$/.exec(name ?? '');
  if (!m) return null;
  return { month: m[2], kind: m[1] === '人工' ? 'manual' : 'auto' };
}

/** 台账表名 → 月份；不是台账表返回 null。 */
export function monthOfTable(name) {
  return parseLedgerTableName(name)?.month ?? null;
}

/** 历史表名兼容（改名前后都可能遇到）。 */
export const LEGACY_MONTH_TABLES = {
  '2026-10': ['站点台账', '站点台账 2026-10'],
};

/**
 * 台账字段定义（建月度表时用；顺序即列顺序，首个字段是主字段）。
 * 2026-10-26 起 `站点` 列直接写**裸域名**（`witchspirewiki.vercel.app`），
 * 原来的 `域名` 列已删——两列内容重复，人看着费劲。目录名由 `siteDirOf()` 反推。
 */
export const LEDGER_FIELDS = [
  { name: '站点', type: 'text' },
  { name: '上线日', type: 'datetime' },
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
  { name: '建站成本(元)', type: 'number' },
  { name: '实际人工小时', type: 'number' },
  { name: '预估回本PV', type: 'number' },
  {
    name: '生命周期状态',
    type: 'select',
    options: [{ name: '加码' }, { name: '维持' }, { name: '观察中' }, { name: '不再维护' }],
  },
];

/** 月度指标：建新表时不从旧表带过来，由脚本重新计算。 */
export const MONTHLY_FIELDS = ['PV(30d)', 'PV 环比(%)'];

/**
 * 人工表字段（人填 = 人工事项已完成，脚本读走回填站点）。
 * 顺序即列顺序，首个字段是主字段。
 * `站点` 写**裸域名**（见 siteDirOf），`域名` 列已删（同一件事写两遍没意义）。
 * `广告位3-todo-code` 目前只占位：脚本只读不写，留给第三个广告位（待定）。
 * `上线日` 由脚本从自动化表同步（用来判断某行是「新站还没填」还是「老站漏了」）。
 * `自动化状态` 是脚本**回写**的列，人工不填（取值见 AUTO_STATUS）。
 */
export const MANUAL_FIELDS = [
  { name: '站点', type: 'text' },
  { name: '上线日', type: 'datetime' },
  { name: 'GA4-measurementID', type: 'text' },
  { name: 'GA4-propertyID', type: 'text' },
  { name: 'GSC', type: 'text' },
  { name: '广告位1-SocialBar-code', type: 'text' },
  { name: '广告位2-NativeBanner-code', type: 'text' },
  { name: '广告位3-todo-code', type: 'text' },
  { name: '自动化状态', type: 'text' },
];

/**
 * 「自动化状态」列的取值。判定口径：**这一行的自动化项是不是全填了、也全落地了**。
 *   空     = 一个都还没填（人工还没开始）
 *   待补填 = 只填了一部分（还差 GA4 或某个广告位）→ 人工继续填
 *   待回填 = 全填了，但程序还没落到站点（值有误 / 等下一轮 / 部署没成功）
 *   已完成 = 全填了，且都已落到站点并上线
 *   失败   = 回填或部署失败，下一轮强制重部署
 */
export const AUTO_STATUS = {
  done: '已完成',
  pending: '待回填',
  partial: '待补填',
  failed: '失败',
};

/** 人工表里由脚本**算出来**的列：跨月建表时不复制（新月份由下一轮回填重新算）。 */
export const MANUAL_DERIVED_FIELDS = ['自动化状态'];

/** 脚本回填的三个广告位 → 广告位管理表里的广告位类型。 */
export const MANUAL_AD_SLOTS = [
  { field: '广告位1-SocialBar-code', slot: 'global', format: 'Social Bar' },
  { field: '广告位2-NativeBanner-code', slot: 'guide', format: 'Native Banner' },
];

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
 * 定位某个月的**自动化**台账表。
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

  const m = month ?? monthName();
  const name = ledgerTableName(m);
  const hit = tables.find((t) => t.name === name);
  if (hit) return hit;

  // 历史表名（改名过渡期）
  for (const old of LEGACY_MONTH_TABLES[m] ?? []) {
    const legacy = tables.find((t) => t.name === old);
    if (legacy) return legacy;
  }

  const months = tables
    .map((t) => parseLedgerTableName(t.name))
    .filter((p) => p?.kind === 'auto')
    .map((p) => p.month)
    .sort();
  throw new Error(
    `没有「${name}」这张月度台账表。\n` +
      `先建本月表：node scripts/roll-month-ledger.mjs --month ${m}\n` +
      `现有月度表：${months.length ? months.map(ledgerTableName).join('、') : '（无）'}`,
  );
}

/**
 * 定位**人工**台账表。
 * - 当月表不存在时回退到最近一张人工表（不中断每日回填），并在返回对象上标 `fallback: true`
 * - 一张都没有时直接报错
 */
export function resolveManualLedgerTable({ base = BASE_TOKEN, table, month, cwd } = {}) {
  const tables = listTables(base, cwd);

  if (table) {
    const hit = tables.find((t) => t.id === table || t.name === table);
    if (!hit) throw new Error(`找不到人工台账表：${table}`);
    return hit;
  }

  const m = month ?? monthName();
  const name = manualTableName(m);
  const hit = tables.find((t) => t.name === name);
  if (hit) return hit;

  const manual = tables
    .filter((t) => parseLedgerTableName(t.name)?.kind === 'manual')
    .sort((a, b) => parseLedgerTableName(a.name).month.localeCompare(parseLedgerTableName(b.name)));

  if (manual.length === 0) {
    throw new Error(
      `没有人工台账表「${name}」。\n` +
        `先建表：node scripts/roll-month-ledger.mjs --month ${m} --apply`,
    );
  }

  return { ...manual[manual.length - 1], fallback: true };
}

/**
 * 飞书把「文本里的 URL」当富文本链接返回，`+record-list` 给的是 markdown 形态
 * `[https://x](https://x)`。直接拿去写站点会把 `src="[https://…](https://…)"` 写坏，
 * 所以统一拆成纯文本再往下走。
 */
export const unwrapLinks = (s) =>
  typeof s === 'string' ? s.replace(/\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)/g, '$1') : s;

/** 把单元格值统一成能写回 batch-create 的标量。 */
export function cellScalar(value) {
  if (Array.isArray(value)) return value.length === 0 ? null : cellScalar(value[0]);
  if (value && typeof value === 'object') return unwrapLinks(value.text ?? value.name ?? null);
  return unwrapLinks(value ?? null);
}

/**
 * 台账「站点」列的口径：**裸域名**，不带 `https://`、不带结尾斜杠。
 * `https://witchspirewiki.vercel.app/` → `witchspirewiki.vercel.app`
 * 老行里写的是目录名时也能通过（没有点，原样留着）。
 */
export function ledgerHost(value) {
  return String(unwrapLinks(value) ?? '')
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '')
    .toLowerCase();
}

/** 站点目录 → 台账「站点」列的值（`witchspirewiki` → `witchspirewiki.vercel.app`）。 */
export function ledgerHostOfDir(site) {
  return `${String(site).trim().toLowerCase()}.vercel.app`;
}

/**
 * 台账「站点」列 → 仓库站点目录名。
 * `witchspirewiki.vercel.app` → `witchspirewiki`；已经是目录名的原样返回。
 * 传 `knownDirs`（仓库里真实存在的目录名集合）只用来识别「老行写的是目录名」；
 * 换成自有域名后这里反推不出目录，调用方会把它当「本地不存在的站点」报出来，
 * 那时需要在调用处补 host → 目录的映射，别硬猜。
 */
export function siteDirOf(value, knownDirs = null) {
  const host = ledgerHost(value);
  if (!host) return '';
  if (knownDirs?.has(host)) return host; // 老口径：列里写的就是目录名
  return host.replace(/\.vercel\.app$/, '');
}
