#!/usr/bin/env node
/**
 * feishu-report.mjs — 把每日交付写入飞书多维表格「游戏站交付看板」。
 *
 * 设计：仓库是唯一事实源，飞书只存元数据 + 链接；机器只写机器列，
 * 永远不覆盖「人工复核」「备注」两列。
 *
 * 用法：
 *   node scripts/feishu-report.mjs --journal                # 读取交付日志（dry-run）
 *   node scripts/feishu-report.mjs --journal --apply        # 写入 T1 每日交付
 *   node scripts/feishu-report.mjs --deploys --apply        # 读取部署日志，收口 T5 / 补 T1
 *   node scripts/feishu-report.mjs --queue --site x --reason "额度用尽" --apply
 *   node scripts/feishu-report.mjs --qa --apply             # QA 问题写入 T2（读 .agent/qa-issues-<date>.json）
 *   node scripts/feishu-report.mjs --sites --apply          # 刷新 T3 站点台账（43 站）
 *   node scripts/feishu-report.mjs --all --apply            # journal + deploys
 *
 * 常用参数：
 *   --date YYYY-MM-DD    目标日期（默认今天）
 *   --journal <path>     交付日志，默认 .agent/delivery-<date>.json
 *   --deploys <path>     部署日志，默认 .agent/deploy-log.jsonl
 *   --apply              真正写入；不带则只打印计划
 *
 * 交付日志格式（由 coordinator 收尾时写入）：
 * {
 *   "date": "2026-10-24",
 *   "rows": [
 *     { "site": "sephiriawiki",
 *       "types": ["扩充", "修正"],
 *       "guides": ["stuck-soft-lock-recovery-guide"],
 *       "qa": "PASS",
 *       "url": "https://sephiriawiki.vercel.app/guides/stuck-soft-lock-recovery-guide",
 *       "verify": "200",
 *       "commit": "95881c4",
 *       "words": 1481 }
 *   ]
 * }
 * words 可省略，脚本按正文自动统计。types 可选值：新建站/扩充/修正/部署/侦察。
 *
 * 部署日志格式（由 deploy-wiki-site.sh 追加，一行一条）：
 * {"ts":"2026-10-24T09:10:00+08:00","site":"x","commit":"abc1234","status":"ok","url":"https://..."}
 *
 * 身份：应用 cli_aae2c52aa4b89d05 的 bot 身份尚无 base:* scope，默认用 --as user。
 * 开发者后台补齐 scope 后，设 FEISHU_AS=bot 即可切换，无需改代码。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { resolveLedgerTable } from './lib/month-ledger.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const BASE_TOKEN = process.env.FEISHU_BASE_TOKEN || 'Zl7cb6Bz9ajsPdsQRbRci1QZnkg';
const TABLES = {
  delivery: process.env.FEISHU_DELIVERY_TABLE || 'tbltCgQw1VfMVj0T',
  deployQueue: process.env.FEISHU_DEPLOY_TABLE || 'tbljqIjX9qOD8fVs',
  qa: process.env.FEISHU_QA_TABLE || 'tblrHtlzD1KZhcdV',
  // 站点台账按月份表（表名 = 年月），延迟解析见 sitesTableId()
  sites: process.env.FEISHU_SITES_TABLE || null,
};

/**
 * 当月站点台账表 ID。台账 2026-10-25 起按月分表，新月份的站要写进当月表，
 * 不能在代码里钉死某个月的 table id。
 */
function sitesTableId() {
  if (TABLES.sites) return TABLES.sites;
  const t = resolveLedgerTable({ base: BASE_TOKEN, cwd: ROOT });
  TABLES.sites = t.id;
  return t.id;
}
const AS = process.env.FEISHU_AS || 'user';

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f, d) => {
  const i = argv.indexOf(f);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d;
};
const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const DATE = val('--date', today());
const APPLY = has('--apply');
const DRY = !APPLY;

// ---------- lark-cli ----------
let LARK_BIN = null;
function lark(args) {
  if (!LARK_BIN) {
    const candidates = [
      process.env.LARK_CLI,
      'lark-cli',
      '/Users/zhaoq0103/.nvm/versions/node/v24.4.0/bin/lark-cli',
      '/opt/homebrew/bin/lark-cli',
      '/usr/local/bin/lark-cli',
    ].filter(Boolean);
    for (const c of candidates) {
      try {
        execFileSync(c, ['--version'], { stdio: 'ignore' });
        LARK_BIN = c;
        break;
      } catch { /* try next */ }
    }
    if (!LARK_BIN) throw new Error('找不到 lark-cli，请设置 LARK_CLI 环境变量');
  }
  const out = execFileSync(LARK_BIN, args, {
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    env: { ...process.env, LARKSUITE_CLI_NO_UPDATE_NOTIFIER: '1', LARKSUITE_CLI_NO_SKILLS_NOTIFIER: '1' },
  });
  const start = out.indexOf('{');
  const end = out.lastIndexOf('}');
  if (start < 0 || end < start) throw new Error(`lark-cli 返回非 JSON：${out.slice(0, 300)}`);
  const json = JSON.parse(out.slice(start, end + 1));
  if (json.ok === false) {
    const e = json.error || {};
    throw new Error(`lark-cli ${args[1]} 失败：${e.message || JSON.stringify(e)}`);
  }
  return json.data ?? json;
}

const baseArgs = () => ['--as', AS, '--base-token', BASE_TOKEN];

// ---------- 本地事实 ----------
function countWords(site, slug) {
  const file = path.join(ROOT, site, 'content', 'guides', `${slug}.md`);
  if (!fs.existsSync(file)) return 0;
  const raw = fs.readFileSync(file, 'utf8');
  const body = raw
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ');
  const cjk = (body.match(/[㐀-鿿]/g) || []).length;
  const latin = (body.match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
  return cjk + latin;
}

function gitCommitFor(site) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%h', '--', `${site}/content/guides`], {
      cwd: ROOT, encoding: 'utf8',
    }).trim();
    return out || '';
  } catch { return ''; }
}

// ---------- 读现有记录 ----------
// +record-list --format json 返回列式结构：fields(列名) + data(行数组) + record_id_list
function listRecords(tableId) {
  const data = lark([
    'base', '+record-list',
    ...baseArgs(),
    '--table-id', tableId,
    '--format', 'json',
    '--limit', '200',
  ]);
  const names = data.fields || [];
  const ids = data.record_id_list || [];
  if (data.has_more) console.warn(`⚠️ ${tableId} 记录超过 200 条，只读取了前 200 条`);
  return (data.data || []).map((row, i) => {
    const fields = {};
    names.forEach((n, j) => { fields[n] = row[j]; });
    return { record_id: ids[i] || String(i), fields };
  });
}

// 读回的 url 字段是 markdown 链接，写回前还原成裸 URL
function normalizeUrl(v) {
  const s = String(v || '');
  const m = s.match(/\]\((https?:\/\/[^)]+)\)/);
  return m ? m[1] : s;
}

function recordDate(rec) {
  const v = rec.fields?.['日期'];
  if (!v) return '';
  if (typeof v === 'number') return new Date(v).toISOString().slice(0, 10);
  return String(v).slice(0, 10);
}

function asArray(v) {
  if (v == null) return [];
  if (Array.isArray(v)) return v.map(String);
  return [String(v)];
}

function splitGuides(v) {
  return String(v || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function union(a, b) {
  return [...new Set([...a, ...b])];
}

// ---------- T1 每日交付 ----------
function buildRows(rows, date) {
  return rows.map((r) => {
    const site = r.site;
    const guides = union(splitGuides(r.guides), r.guide ? [r.guide] : []);
    const words = Number.isFinite(r.words) ? r.words : guides.reduce((n, g) => n + countWords(site, g), 0);
    return {
      site,
      date,
      types: r.types?.length ? r.types : ['扩充'],
      guides,
      words,
      qa: r.qa || '未验',
      url: r.url || '',
      verify: r.verify || '未验',
      commit: r.commit || gitCommitFor(site),
    };
  });
}

// 「QA 结论」是单选，只有 PASS/黄/FAIL 三个选项。写不存在的选项会被飞书
// 判成 not_found（800030005，2026-10-24 排查了半天）。未验就不写，留空即未验。
const QA_OPTIONS = new Set(['PASS', '黄', 'FAIL']);

function toCell(row) {
  const cell = {
    '站点': row.site,
    '日期': `${row.date} 00:00:00`,
    '类型': row.types,
    '文章数': row.guides.length,
    '文章': row.guides.join(', '),
    '字数': row.words,
    '线上 URL': row.url || null,
    '验证': row.verify,
    'commit': row.commit || null,
  };
  if (QA_OPTIONS.has(row.qa)) cell['QA 结论'] = row.qa;
  return cell;
}

function upsertDelivery(rows, date) {
  const existing = listRecords(TABLES.delivery).filter((r) => recordDate(r) === date);
  const bySite = new Map(existing.map((r) => [String(r.fields?.['站点'] || ''), r]));
  const creates = [];
  const updates = {};

  for (const row of rows) {
    const old = bySite.get(row.site);
    if (!old) {
      // 部署日志来的行只有 site/types/...，日期必须在这里补；
      // 否则 toCell 会写出 "undefined 00:00:00"（2026-10-24 踩过）
      creates.push(toCell({ ...row, date }));
      continue;
    }
    const f = old.fields || {};
    const merged = {
      site: row.site,
      date,
      types: union(asArray(f['类型']), row.types),
      guides: union(splitGuides(f['文章']), row.guides),
      words: Math.max(Number(f['字数']) || 0, row.words),
      qa: row.qa !== '未验' ? row.qa : (asArray(f['QA 结论'])[0] || '未验'),
      url: row.url || normalizeUrl(f['线上 URL']),
      verify: row.verify !== '未验' ? row.verify : (asArray(f['验证'])[0] || '未验'),
      commit: row.commit || f['commit'] || '',
    };
    updates[old.record_id] = toCell(merged);
  }

  console.log(`\n【T1 每日交付】${date} — 新增 ${creates.length} / 合并 ${Object.keys(updates).length}`);
  for (const c of creates) console.log(`  + ${c['站点']} [${c['类型'].join('/')}] ${c['文章数']} 篇 ${c['字数']}w`);
  for (const [id, u] of Object.entries(updates)) console.log(`  ~ ${u['站点']} [${u['类型'].join('/')}] ${u['文章数']} 篇 ${u['字数']}w (${id})`);

  if (DRY) return { creates: creates.length, updates: Object.keys(updates).length };
  if (creates.length) {
    lark(['base', '+record-batch-create', ...baseArgs(), '--table-id', TABLES.delivery,
      '--json', JSON.stringify({ create_records: creates })]);
  }
  if (Object.keys(updates).length) {
    lark(['base', '+record-batch-update', ...baseArgs(), '--table-id', TABLES.delivery,
      '--json', JSON.stringify({ update_records: updates })]);
  }
  return { creates: creates.length, updates: Object.keys(updates).length };
}

// ---------- 部署日志 ----------
function readDeployLog(file, date) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8')
    .split('\n')
    .filter((l) => l.trim().startsWith('{'))
    .map((l) => { try { return JSON.parse(l); } catch { return null; } })
    .filter(Boolean)
    .filter((e) => String(e.ts || '').slice(0, 10) === date);
}

function processDeploys(file, date) {
  const log = readDeployLog(file, date);
  if (!log.length) {
    console.log(`\n【部署日志】${file} 今天没有记录，跳过`);
    return;
  }
  const ok = log.filter((e) => e.status === 'ok');
  // 同一站当天重试成功时，前面的 fail 属瞬时失败，不应登记成 T5 失败
  const lastBySite = new Map();
  for (const e of log) lastBySite.set(e.site, e);
  const fail = [...lastBySite.values()].filter((e) => e.status !== 'ok');
  const retried = log.filter((e) => e.status !== 'ok').length - fail.length;
  console.log(`\n【部署日志】${date} — 成功 ${ok.length} / 失败 ${fail.length}${retried > 0 ? `（另有 ${retried} 次瞬时失败已重试成功）` : ''}`);

  // 成功的部署：合并进 T1 的「部署」类型
  if (ok.length) {
    upsertDelivery(
      ok.map((e) => ({ site: e.site, types: ['部署'], guides: [], words: 0, qa: '未验', verify: '200', commit: e.commit || '' })),
      date,
    );
  }

  // 失败/排队：写入 T5 并关闭已完成的排队项
  const queueRows = listRecords(TABLES.deployQueue).filter((r) => recordDate(r) === date);
  const updates = {};
  for (const e of ok) {
    for (const r of queueRows) {
      if (String(r.fields?.['站点']) === e.site && asArray(r.fields?.['状态'])[0] === '排队') {
        updates[r.record_id] = { '状态': '已部署', '复验时间': `${date} 00:00:00` };
      }
    }
  }
  const creates = fail.map((e) => ({
    '站点': e.site,
    '日期': `${date} 00:00:00`,
    'commit': e.commit || null,
    '待部署原因': e.reason || '部署失败',
    '状态': '失败',
    '当日已用部署次数': ok.length + fail.length,
  }));

  if (Object.keys(updates).length) console.log(`  T5 关闭排队项 ${Object.keys(updates).length} 条`);
  if (creates.length) creates.forEach((c) => console.log(`  T5 失败登记 ${c['站点']}`));
  if (DRY) return;
  if (Object.keys(updates).length) {
    lark(['base', '+record-batch-update', ...baseArgs(), '--table-id', TABLES.deployQueue,
      '--json', JSON.stringify({ update_records: updates })]);
  }
  if (creates.length) {
    lark(['base', '+record-batch-create', ...baseArgs(), '--table-id', TABLES.deployQueue,
      '--json', JSON.stringify({ create_records: creates })]);
  }
}

// ---------- 排队登记 ----------
function addQueue(date) {
  const site = val('--site');
  const reason = val('--reason', '待部署');
  if (!site) throw new Error('--queue 需要 --site');
  const row = {
    '站点': site,
    '日期': `${date} 00:00:00`,
    'commit': val('--commit', gitCommitFor(site)) || null,
    '待部署原因': reason,
    '状态': '排队',
  };
  console.log(`\n【T5 部署队列】+ ${site} — ${reason}`);
  if (DRY) return;
  lark(['base', '+record-batch-create', ...baseArgs(), '--table-id', TABLES.deployQueue,
    '--json', JSON.stringify({ create_records: [row] })]);
}

// ---------- T2 QA 问题跟踪 ----------
function syncQa(date) {
  const file = val('--qa', path.join(ROOT, '.agent', `qa-issues-${date}.json`));
  if (!fs.existsSync(file)) {
    console.log(`\n【T2 QA 问题】没有 ${file}，跳过`);
    return;
  }
  const j = JSON.parse(fs.readFileSync(file, 'utf8'));
  const rows = j.rows || [];
  const existing = listRecords(TABLES.qa);
  // 幂等键：站点 + 文章 + 问题原文。问题描述改写会产生新行，保持原文稳定。
  const key = (f) => `${f['站点'] || ''}|${f['文章'] || ''}|${f['问题'] || ''}`;
  const byKey = new Map(existing.map((r) => [key(r.fields || {}), r]));
  const creates = [];
  const updates = {};

  for (const r of rows) {
    const cell = {
      '问题': r.issue,
      '站点': r.site,
      '文章': r.article || null,
      '等级': r.level || 'P2',
      '状态': r.status || '待修',
      '首次发现日': `${r.discovered || date} 00:00:00`,
      '修复 commit': r.commit || null,
      '复验日': r.verified ? `${r.verified} 00:00:00` : null,
      '逾期天数': r.overdue ?? null,
    };
    const old = byKey.get(key(cell));
    if (old) updates[old.record_id] = cell;
    else creates.push(cell);
  }

  console.log(`\n【T2 QA 问题】${date} — 新增 ${creates.length} / 更新 ${Object.keys(updates).length}`);
  for (const c of creates) console.log(`  + [${c['等级']}] ${c['站点']} ${c['问题']}`);
  if (DRY) return;
  if (creates.length) {
    lark(['base', '+record-batch-create', ...baseArgs(), '--table-id', TABLES.qa,
      '--json', JSON.stringify({ create_records: creates })]);
  }
  if (Object.keys(updates).length) {
    lark(['base', '+record-batch-update', ...baseArgs(), '--table-id', TABLES.qa,
      '--json', JSON.stringify({ update_records: updates })]);
  }
}

// ---------- T3 站点台账 ----------
function siteDirs() {
  return fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.endsWith('wiki'))
    .map((d) => d.name)
    .filter((s) => fs.existsSync(path.join(ROOT, s, 'content', 'guides')))
    .sort();
}

function guideCount(site) {
  return fs.readdirSync(path.join(ROOT, site, 'content', 'guides')).filter((f) => f.endsWith('.md')).length;
}

function siteDomain(site) {
  const p = path.join(ROOT, site, '.vercel', 'project.json');
  try {
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (j.projectName) return `https://${j.projectName}.vercel.app`;
  } catch { /* fall through */ }
  return `https://${site}.vercel.app`;
}

function firstCommitDate(site) {
  try {
    return execFileSync('git', ['log', '--reverse', '--format=%ad', '--date=short', '--', site], {
      cwd: ROOT, encoding: 'utf8',
    }).split('\n').filter(Boolean)[0] || '';
  } catch { return ''; }
}

function adSlots(site) {
  const p = path.join(ROOT, 'adsterra', 'placements.csv');
  if (!fs.existsSync(p)) return 0;
  return fs.readFileSync(p, 'utf8').split('\n')
    .slice(1)
    .filter((l) => l.split(',')[0]?.trim() === site).length;
}

function syncSites() {
  const tableId = sitesTableId();
  const existing = listRecords(tableId);
  const bySite = new Map(existing.map((r) => [String(r.fields?.['站点'] || ''), r]));
  const creates = [];
  const updates = {};

  for (const site of siteDirs()) {
    const row = {
      '站点': site,
      '域名': siteDomain(site),
      '上线日': firstCommitDate(site) ? `${firstCommitDate(site)} 00:00:00` : null,
      '攻略数': guideCount(site),
      '广告位上线数': adSlots(site),
    };
    const old = bySite.get(site);
    if (old) updates[old.record_id] = row;
    else creates.push(row);
  }

  console.log(`\n【T3 站点台账】共 ${creates.length + Object.keys(updates).length} 站 — 新增 ${creates.length} / 更新 ${Object.keys(updates).length}`);
  if (DRY) {
    for (const c of creates.slice(0, 5)) console.log(`  + ${c['站点']} ${c['攻略数']} 篇 ${c['域名']}`);
    if (creates.length > 5) console.log(`  ... 其余 ${creates.length - 5} 站`);
    return;
  }
  if (creates.length) {
    lark(['base', '+record-batch-create', ...baseArgs(), '--table-id', tableId,
      '--json', JSON.stringify({ create_records: creates })]);
  }
  const ids = Object.keys(updates);
  for (let i = 0; i < ids.length; i += 200) {
    const chunk = Object.fromEntries(ids.slice(i, i + 200).map((id) => [id, updates[id]]));
    lark(['base', '+record-batch-update', ...baseArgs(), '--table-id', tableId,
      '--json', JSON.stringify({ update_records: chunk })]);
  }
}

// ---------- main ----------
function main() {
  const journalPath = val('--journal', path.join(ROOT, '.agent', `delivery-${DATE}.json`));
  const deployPath = val('--deploys', path.join(ROOT, '.agent', 'deploy-log.jsonl'));
  const mode = has('--queue') ? 'queue'
    : has('--sites') ? 'sites'
      : has('--qa') ? 'qa'
      : has('--journal') ? 'journal'
        : has('--deploys') ? 'deploys'
          : has('--all') ? 'all' : null;

  if (!mode) {
    console.log(fs.readFileSync(new URL(import.meta.url), 'utf8').split('*/')[0]);
    process.exit(1);
  }
  console.log(`飞书交付同步 — ${DATE} — ${APPLY ? 'APPLY' : 'DRY-RUN'} (as=${AS})`);

  if (mode === 'queue') return addQueue(DATE);
  if (mode === 'sites') return syncSites();
  if (mode === 'qa') return syncQa(DATE);

  if (mode === 'journal' || mode === 'all') {
    if (!fs.existsSync(journalPath)) {
      console.log(`\n⚠️ 交付日志不存在：${journalPath}（跳过 T1）`);
    } else {
      const j = JSON.parse(fs.readFileSync(journalPath, 'utf8'));
      const date = j.date || DATE;
      const rows = buildRows(j.rows || [], date);
      upsertDelivery(rows, date);
    }
  }
  if (mode === 'deploys' || mode === 'all') processDeploys(deployPath, DATE);

  if (DRY) console.log('\n（dry-run，未写入。加 --apply 生效）');
}

main();
