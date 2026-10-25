#!/usr/bin/env node
/**
 * 站点生命周期分级：A 加码 / B 维持 / C 观察中 / D 不再维护。
 *
 *   规则文档：docs/STRATEGY-生命周期与止损.md
 *   数据来源：dashboard `/api/traffic`（30 天 GA4）+ 当月站点台账（表名 = `站点台账` + 年月）
 *   输出：    .agent/lifecycle-report.md
 *   可选：    --apply 把分级写回台账的「生命周期状态」字段
 *
 * 用法：
 *   node scripts/lifecycle-report.mjs            # 只生成报告
 *   node scripts/lifecycle-report.mjs --apply    # 报告 + 回写分级
 *   node scripts/lifecycle-report.mjs --month 2026-10
 *   node scripts/lifecycle-report.mjs --table tblXXXX
 *
 * 分级口径（2026-10-25 定）：
 *   A 加码     PV(30d) ≥ 300，或 PV ≥ 100 且环比 ≥ +50%
 *   B 维持     50 ≤ PV < 300（且未触发 A）
 *   C 观察中   其余低流量站（含上线不足 90 天、或环比在回升的）
 *   D 不再维护 PV < 50 且上线 ≥ 90 天且环比 < +30%
 *   不可判定   台账和 dashboard 都没有上线日
 *
 * 归档动作只是「停止投入 + 标记不再维护」，不删站、不改任何代码。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fetchTraffic, trafficByDir } from './lib/dashboard-traffic.mjs';
import { resolveLedgerTable } from './lib/month-ledger.mjs';

const REPO = path.resolve(import.meta.dirname, '..');

const APPLY = process.argv.includes('--apply');
const BASE_TOKEN = opt('--base', 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg');
const TABLE_ARG = opt('--table', null);
const MONTH = opt('--month', null);
const OUT = path.join(REPO, '.agent', 'lifecycle-report.md');

const GRADES = ['加码', '维持', '观察中', '不再维护'];
const UNDECIDABLE = '不可判定';

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

function listLedger(tableId) {
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
    const iLaunch = cols.indexOf('上线日');
    const iGrade = cols.indexOf('生命周期状态');
    if (iSite === -1) throw new Error('站点台账缺少「站点」字段');

    data.data.forEach((cells, i) => {
      const rawGrade = iGrade === -1 ? null : cells[iGrade];
      rows.push({
        recordId: data.record_id_list[i],
        site: String(cells[iSite] ?? '').trim(),
        launchAt: cells[iLaunch] ?? null,
        // 单选字段读回来是数组，取第一个值
        grade: Array.isArray(rawGrade) ? (rawGrade[0] ?? null) : rawGrade,
      });
    });

    if (!data.has_more || data.data.length === 0) break;
    offset += data.data.length;
  }
  return rows;
}

const dayOf = (iso) => {
  if (!iso) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
};

const DAY = 86_400_000;
const today = new Date();

function classify({ pv, change, launch }) {
  if (!launch) return { grade: UNDECIDABLE, reason: '无上线日，无法判断所处阶段' };
  const days = Math.floor((today - launch) / DAY);
  const chg = change ?? 0;

  if (pv >= 300) return { grade: '加码', reason: `PV ${pv} ≥ 300` };
  if (pv >= 100 && chg >= 50) return { grade: '加码', reason: `PV ${pv} ≥ 100 且环比 +${chg}%` };
  if (pv >= 50) return { grade: '维持', reason: `PV ${pv} 在 50–299` };
  if (days < 90) return { grade: '观察中', reason: `上线 ${days} 天 < 90 天` };
  if (chg >= 30) return { grade: '观察中', reason: `PV ${pv} 低但环比 +${chg}% 在回升` };
  return { grade: '不再维护', reason: `PV ${pv} < 50、上线 ${days} 天 ≥ 90、环比 ${chg}% < +30%` };
}

/* ─── main ────────────────────────────────────────────────────────── */

const ledgerTable = resolveLedgerTable({
  base: BASE_TOKEN,
  table: TABLE_ARG,
  month: MONTH,
  cwd: REPO,
});
const TABLE_ID = ledgerTable.id;

const traffic = fetchTraffic();
const { byDir } = trafficByDir(traffic);
const ledger = listLedger(TABLE_ID);

const rows = [];
for (const [dir, t] of byDir) {
  const rec = ledger.find((r) => r.site === dir);
  const launchFrom = rec?.launchAt ? '台账' : t.createdAt ? 'git 首提交' : null;
  const launch = dayOf(rec?.launchAt ?? t.createdAt);
  const { grade, reason } = classify({ pv: t.pv, change: t.change, launch });
  const days = launch ? Math.floor((today - launch) / DAY) : null;

  rows.push({
    dir,
    name: t.name,
    launch,
    launchFrom,
    days,
    pv: t.pv,
    change: t.change,
    grade,
    reason,
    recordId: rec?.recordId ?? null,
    prevGrade: rec?.grade ?? null,
  });
}

const unledgered = [...byDir.keys()].filter((dir) => !ledger.some((r) => r.site === dir));

const order = { 加码: 0, 维持: 1, 观察中: 2, [UNDECIDABLE]: 3, 不再维护: 4 };
rows.sort((a, b) => (order[a.grade] ?? 9) - (order[b.grade] ?? 9) || b.pv - a.pv);

const counts = Object.fromEntries([...GRADES, UNDECIDABLE].map((g) => [g, 0]));
for (const r of rows) counts[r.grade] += 1;

const fmtDate = (d) => (d ? d.toISOString().slice(0, 10) : '—');
const fmtChg = (c) => (c == null ? '—' : `${c > 0 ? '+' : ''}${c}%`);

const md = [];
md.push('# 站点生命周期报告');
md.push('');
md.push(`生成时间：${today.toISOString().slice(0, 16).replace('T', ' ')} UTC`);
md.push(`数据源：\`${traffic.host}/api/traffic\`（近 30 天 GA4）+ 台账「${ledgerTable.name}」（上线日）`);
md.push(`规则：\`docs/STRATEGY-生命周期与止损.md\``);
md.push('');
md.push(
  `总计 **${rows.length}** 站，PV(30d) 合计 **${rows.reduce((s, r) => s + r.pv, 0).toLocaleString()}**。`,
);
md.push('');
md.push('| 分级 | 站点数 | 含义 |');
md.push('|---|---:|---|');
md.push(`| 加码 | ${counts['加码']} | 值得继续投入内容/外链 |`);
md.push(`| 维持 | ${counts['维持']} | 按节奏更新，不加码 |`);
md.push(`| 观察中 | ${counts['观察中']} | 还在 90 天窗口内或数据在回升 |`);
md.push(`| 不再维护 | ${counts['不再维护']} | 停止投入、台账标记，不删站 |`);
md.push(`| ${UNDECIDABLE} | ${counts[UNDECIDABLE]} | 缺上线日，补数据后重跑 |`);
md.push('');

md.push('## 全部分级');
md.push('');
md.push('| 站点 | 上线日 | 天数 | PV(30d) | 环比 | 分级 | 依据 |');
md.push('|---|---|---:|---:|---:|---|---|');
for (const r of rows) {
  md.push(
    `| ${r.dir} | ${fmtDate(r.launch)}${r.launchFrom === 'git 首提交' ? '*' : ''} | ${r.days ?? '—'} | ${r.pv} | ${fmtChg(r.change)} | ${r.grade} | ${r.reason} |`,
  );
}
md.push('');
if (rows.some((r) => r.launchFrom === 'git 首提交')) {
  md.push('\\* 台账未填上线日，暂用 git 首次提交日代替；补进台账后重跑即可。');
  md.push('');
}

const d = rows.filter((r) => r.grade === '不再维护');
md.push('## 不再维护（止损）');
md.push('');
if (d.length === 0) {
  md.push('本轮没有站点触及止损线。');
} else {
  md.push('动作：**停止投入（不再新增攻略、不再接广告、不再扩关键词）**，台账 `生命周期状态` 置为 `不再维护`。');
  md.push('站点保持在线、代码不动；若后续 30 天环比回到 +30% 以上，下轮会自动降回 `观察中`。');
  md.push('');
  for (const r of d) md.push(`- **${r.dir}** — PV ${r.pv}，上线 ${r.days} 天，环比 ${fmtChg(r.change)}`);
}
md.push('');

const a = rows.filter((r) => r.grade === '加码');
md.push('## 加码名单');
md.push('');
if (a.length === 0) {
  md.push('本轮没有站点达到加码线（PV ≥ 300，或 PV ≥ 100 且环比 ≥ +50%）。');
} else {
  for (const r of a) md.push(`- **${r.dir}** — PV ${r.pv}，环比 ${fmtChg(r.change)}`);
}
md.push('');

if (unledgered.length > 0) {
  md.push('## 台账缺行');
  md.push('');
  md.push(`这些目录有流量数据但台账里没有对应记录：${unledgered.join('、')}`);
  md.push('');
}

if (APPLY) {
  const patch = rows
    .filter((r) => r.recordId && r.grade !== UNDECIDABLE && r.prevGrade !== r.grade)
    .map((r) => [r.recordId, { 生命周期状态: r.grade }]);
  if (patch.length > 0) {
    lark([
      'base',
      '+record-batch-update',
      '--base-token',
      BASE_TOKEN,
      '--table-id',
      TABLE_ID,
      '--json',
      JSON.stringify({ update_records: Object.fromEntries(patch) }),
    ]);
    md.push(`## 回写`);
    md.push('');
    md.push(`已回写台账 \`生命周期状态\`：${patch.length} 条。`);
    md.push('');
    console.log(`回写台账：${patch.length} 条`);
  } else {
    console.log('台账分级无变化，未回写。');
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md.join('\n'));

console.log(
  `报告：${path.relative(REPO, OUT)} — ` +
    [...GRADES, UNDECIDABLE].map((g) => `${g} ${counts[g]}`).join(' / '),
);
