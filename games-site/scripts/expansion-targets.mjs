#!/usr/bin/env node
/**
 * expansion-targets.mjs — 扩词轮（每日内容扩充）的目标站清单，按台账过滤。
 *
 * 由来：2026-10-27 用主 Agent 跑扩词轮时发现要建`.agent/expand-daily.json` 与
 * `auto-build-site.sh` 的提示词里都写死了「PV>1000 的站每天一篇」，没跟
 * 「站点台账(自动化)」的**生命周期状态**联动 —— 台账里标了 `不再维护` 的站
 * 也会被继续写新攻略，等于把已止损的站重新投入成本。
 *
 * 规则（用户 2026-10-27 明确）：
 *   - `生命周期状态 = 不再维护` → **不再扩词**，即使 PV 还在名单里
 *   - 其余状态（加码 / 维持 / 观察中）照常，观察中优先级低于加码
 *
 * 用法：
 *   node scripts/expansion-targets.mjs            # 人读输出
 *   node scripts/expansion-targets.mjs --json     # 机读
 *   node scripts/expansion-targets.mjs --apply    # 把 blocked 的站从
 *                                                 # .agent/expand-daily.json 移进 skips
 *   [--month 2026-10] [--table <id|name>]
 *
 * 退出码：0 正常（哪怕全部被过滤）；2 台账读不到。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  resolveLedgerTable,
  lark,
  cellScalar,
  ledgerHostOfDir,
  siteDirOf,
} from './lib/month-ledger.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const opt = (name) => {
  const i = argv.indexOf(name);
  return i > -1 ? argv[i + 1] : undefined;
};
const asJson = argv.includes('--json');
const apply = argv.includes('--apply');
const EXPAND_FILE = path.join(ROOT, '.agent', 'expand-daily.json');

function readLedger() {
  const table = resolveLedgerTable({ table: opt('--table'), month: opt('--month'), cwd: ROOT });
  const data = lark(
    ['base', '+record-list', '--base-token', 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg',
      '--table-id', table.id, '--format', 'json', '--limit', '200', '--offset', '0'],
    { cwd: ROOT },
  );
  const fields = data.fields ?? [];
  const rows = (data.data ?? []).map((cells) => {
    const row = {};
    fields.forEach((name, c) => {
      const v = cellScalar(cells[c]);
      row[name] = v == null ? '' : String(v);
    });
    return row;
  });
  return { table, rows };
}

function readExpandList() {
  if (!fs.existsSync(EXPAND_FILE)) return { sites: [], skips: [] };
  try {
    return JSON.parse(fs.readFileSync(EXPAND_FILE, 'utf8'));
  } catch {
    return { sites: [], skips: [] };
  }
}

let ledger;
try {
  ledger = readLedger();
} catch (e) {
  console.error(`✗ 读台账失败：${e.message}`);
  process.exit(2);
}

const byHost = new Map();
for (const row of ledger.rows) {
  const host = String(row['站点'] ?? '').trim().toLowerCase();
  if (!host) continue;
  const dir = siteDirOf(host) || ledgerHostOfDir(host);
  byHost.set(host, { row, dir });
}

const list = readExpandList();
const candidates = list.sites ?? [];

const eligible = [];
const blocked = [];
for (const c of candidates) {
  const host = `${c.site}.vercel.app`;
  const entry = byHost.get(host);
  const status = entry?.row?.['生命周期状态'] ?? '(台账无此行)';
  const pv30 = entry?.row?.['PV(30d)'] ?? '';
  const item = { site: c.site, pv: c.pv, pv30, lifeStatus: status, lastExpanded: c.lastExpanded };
  if (status === '不再维护') blocked.push(item);
  else eligible.push(item);
}

// 台账里已标不再维护、但还没进扩词名单的站，也一并报出来（防止以后再被加进去）
const retiredAll = [];
for (const [host, { row, dir }] of byHost) {
  if (row['生命周期状态'] === '不再维护') retiredAll.push({ host, dir, pv30: row['PV(30d)'] ?? '' });
}

if (asJson) {
  console.log(JSON.stringify({ table: ledger.table.name, eligible, blocked, retiredAll }, null, 2));
} else {
  console.log(`台账：${ledger.table.name}（${ledger.rows.length} 行）`);
  console.log(`\n✅ 可扩词（${eligible.length}）：`);
  for (const e of eligible) console.log(`  ${e.site.padEnd(24)} 状态=${e.lifeStatus}  PV30=${e.pv30 || '—'}  上次=${e.lastExpanded ?? '—'}`);
  if (blocked.length) {
    console.log(`\n⛔ 已过滤（不再维护，${blocked.length}）：`);
    for (const b of blocked) console.log(`  ${b.site.padEnd(24)} PV30=${b.pv30 || '—'}`);
  }
  console.log(`\n台账内全部「不再维护」站（${retiredAll.length}）：`);
  for (const r of retiredAll) console.log(`  ${r.host.padEnd(36)} PV30=${r.pv30 || '—'}  ${r.dir ?? ''}`);
}

if (apply && blocked.length) {
  const retired = new Set(blocked.map((b) => b.site));
  const today = new Date().toISOString().slice(0, 10);
  list.sites = (list.sites ?? []).filter((s) => !retired.has(s.site));
  list.skips = list.skips ?? [];
  for (const b of blocked) {
    list.skips.push({
      site: b.site,
      date: today,
      reason: `台账「生命周期状态 = 不再维护」（PV30=${b.pv30 || '—'}），按用户 2026-10-27 口径停止扩词，从每日扩词名单移除`,
    });
  }
  list.ruleUpdated = today;
  fs.writeFileSync(EXPAND_FILE, `${JSON.stringify(list, null, 2)}\n`);
  console.log(`\n▶ 已从 .agent/expand-daily.json 移除 ${blocked.length} 个不再维护的站`);
}
