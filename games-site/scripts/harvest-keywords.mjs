#!/usr/bin/env node
/**
 * Google Suggest 采集器 —— 挖词阶段节点 8。
 *
 *   规则文档：docs/STRATEGY-挖词与词库.md
 *   输出：    keyword-results/{slug}.md（人看）+ keyword-results/.data/{slug}.json（机器读）
 *
 * 为什么是脚本而不是让 Agent 手敲 curl：
 *   1. 本机 DNS 投毒是逐域名、会变的 —— 脚本每次 dig 取真实 IP 再 --resolve，不猜、不写死。
 *   2. 必须固定 hl/gl：实测同一词不带参数与带 hl=en&gl=us 返回不同词集，跨次不可比。
 *   3. 必须记录「来源」：每条词标注它来自哪一轮（裸词 / 品牌+game / 后缀种子 / 探针），
 *      以后扩渠道时才能算清哪个来源产出高。
 *
 * 用法：
 *   node scripts/harvest-keywords.mjs --game "Tears of Metal"
 *   node scripts/harvest-keywords.mjs --game "Tears of Metal" --slug tearsofmetal --write
 *   node scripts/harvest-keywords.mjs --game "ANOMALITH" --genre rpg --locale en --write
 *   node scripts/harvest-keywords.mjs --game "ドラゴン" --locale ja --alias "アノマリス"
 *
 *   --game      游戏名，MUST 用官方写法（带空格）；这是锚定词，写错整批作废
 *   --slug      输出文件名，默认由游戏名推导（小写去空格）
 *   --alias     别名（中文名/日文名/缩写），可重复；命中别名也算品牌词
 *   --locale    en（默认，hl=en&gl=us）/ ja（hl=ja&gl=jp）/ zh（hl=zh-CN&gl=cn）
 *   --genre     rpg / survival / coop / sim / roguelite，决定后缀种子集
 *   --seeds     自定义后缀种子，逗号分隔（覆盖 --genre）
 *   --delay     ms，默认 1500
 *   --bare-only 只跑裸词，用于快速判需求
 *   --write     写入 keyword-results（不加则只打印摘要）
 *   --json      额外把本次结果写到指定路径
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const REPO = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(REPO, 'keyword-results');
const DATA_DIR = path.join(OUT_DIR, '.data');
const HOST = 'suggestqueries.google.com';

/* ─── 参数 ─────────────────────────────────────────────────────────── */

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
function opt(flag, fallback = null) {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : fallback;
}
function optAll(flag) {
  const out = [];
  argv.forEach((a, i) => {
    if (a === flag && argv[i + 1] && !argv[i + 1].startsWith('--')) out.push(argv[i + 1]);
  });
  return out;
}

const GAME = opt('--game');
if (!GAME) {
  console.error('缺少 --game。例：node scripts/harvest-keywords.mjs --game "Tears of Metal" --write');
  process.exit(2);
}

const SLUG = opt('--slug') || GAME.toLowerCase().replace(/[^a-z0-9]+/g, '');
const ALIASES = optAll('--alias');
const LOCALE = opt('--locale', 'en');
const GENRE = opt('--genre', 'default');
const DELAY = Number(opt('--delay', '1500'));
const WRITE = has('--write');
const JSON_OUT = opt('--json');
const BARE_ONLY = has('--bare-only');

const LOCALES = {
  en: { hl: 'en', gl: 'us' },
  ja: { hl: 'ja', gl: 'jp' },
  zh: { hl: 'zh-CN', gl: 'cn' },
};
if (!LOCALES[LOCALE]) {
  console.error(`未知 --locale：${LOCALE}（可选 en / ja / zh）`);
  process.exit(2);
}

/* ─── 锚定批次 ─────────────────────────────────────────────────────── */

const GENRE_SEEDS = {
  rpg: ['release date', 'codes', 'tier list', 'best build', 'classes', 'boss', 'wiki', 'beginner guide', 'map', 'items', 'characters', 'multiplayer', 'demo', 'price', 'update', 'reddit'],
  survival: ['release date', 'codes', 'guide', 'base building', 'resources', 'boss', 'map', 'wiki', 'beginner guide', 'multiplayer', 'co op', 'demo', 'price', 'update', 'reddit', 'best weapons'],
  coop: ['release date', 'how to play with friends', 'crossplay', 'codes', 'guide', 'boss', 'wiki', 'beginner guide', 'solo', 'multiplayer', 'demo', 'price', 'update', 'reddit', 'mods', 'best class'],
  sim: ['release date', 'guide', 'tips', 'money', 'wiki', 'best layout', 'unlock', 'beginner guide', 'update', 'mods', 'multiplayer', 'demo', 'price', 'reddit', 'tier list', 'how to'],
  roguelite: ['release date', 'tier list', 'best build', 'unlock', 'guide', 'boss', 'wiki', 'beginner guide', 'items', 'characters', 'demo', 'price', 'update', 'reddit', 'meta', 'secrets'],
  default: ['release date', 'codes', 'tier list', 'guide', 'wiki', 'best build', 'boss', 'beginner guide', 'tips', 'multiplayer', 'co op', 'demo', 'price', 'characters', 'update', 'reddit'],
};
const SEEDS = opt('--seeds')
  ? opt('--seeds').split(',').map((s) => s.trim()).filter(Boolean)
  : GENRE_SEEDS[GENRE] ?? GENRE_SEEDS.default;

// 每一轮都带 source 标签：以后扩渠道时按 source 统计产出
const ANCHOR_LIST = BARE_ONLY
  ? [{ label: '裸词', query: GAME }]
  : [
      { label: '裸词', query: GAME },
      { label: '品牌+game', query: `${GAME} game` },
      ...SEEDS.map((s) => ({ label: `后缀:${s}`, query: `${GAME} ${s}` })),
      { label: '探针:尾空格', query: `${GAME} ` },
      { label: '探针:steam', query: `${GAME} steam` },
      { label: '探针:ps5', query: `${GAME} ps5` },
      { label: '探针:reddit', query: `${GAME} reddit` },
      { label: '探针:characters', query: `${GAME} characters` },
      { label: '探针:skills', query: `${GAME} skills` },
    ];

// 后缀种子与探针会撞（reddit / characters），撞了就只跑一次 —— 同一查询重复请求返回一致，纯浪费
const seenQuery = new Set();
const ANCHORS = ANCHOR_LIST.filter((a) => {
  const k = a.query.toLowerCase().trim();
  if (seenQuery.has(k)) return false;
  seenQuery.add(k);
  return true;
});

/* ─── 网络 ─────────────────────────────────────────────────────────── */

/** 每次运行现取 IP：投毒是逐域名且会变的，写死 IP 迟早失效。 */
function resolveIp() {
  for (const dns of ['1.1.1.1', '8.8.8.8']) {
    try {
      const out = execFileSync('dig', [`@${dns}`, '+short', '+time=3', '+tries=1', HOST], {
        encoding: 'utf8',
        timeout: 8000,
      });
      const ips = out
        .split('\n')
        .map((s) => s.trim())
        .filter((s) => /^\d+\.\d+\.\d+\.\d+$/.test(s));
      if (ips.length > 0) return ips[ips.length - 1];
    } catch {
      /* 换下一个 DNS */
    }
  }
  return null;
}

const { hl, gl } = LOCALES[LOCALE];

function suggest(query, ip) {
  const url =
    `https://${HOST}/complete/search?client=chrome&hl=${hl}&gl=${gl}` +
    `&q=${encodeURIComponent(query)}`;
  const args = ['-sS', '--max-time', '20', '-w', '\n%{http_code}'];
  if (ip) args.push('--resolve', `${HOST}:443:${ip}`);
  args.push(url);

  try {
    const raw = execFileSync('curl', args, { encoding: 'utf8', maxBuffer: 8 << 20, timeout: 30000 });
    const cut = raw.lastIndexOf('\n');
    const status = Number(raw.slice(cut + 1).trim());
    const body = raw.slice(0, cut);
    if (status !== 200) return { status, items: [], error: `HTTP ${status}` };
    const data = JSON.parse(body);
    return { status, items: Array.isArray(data?.[1]) ? data[1] : [], error: null };
  } catch (e) {
    return { status: 0, items: [], error: String(e.message || e).split('\n')[0] };
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ─── 文本处理 ─────────────────────────────────────────────────────── */

const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^\p{L}\p{N} ]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const tokens = (s) => norm(s).split(' ').filter(Boolean);

function brandMatchers(game, aliases) {
  const list = [game, ...aliases].map((n) => tokens(n)).filter((t) => t.length > 0);
  return (kw) => {
    const t = tokens(kw);
    return list.some((b) => {
      // 1) 品牌词按 token 连续出现（"neon abyss 2"）
      for (let i = 0; i + b.length <= t.length; i += 1) {
        if (b.every((x, j) => t[i + j] === x)) return true;
      }
      // 2) 品牌被连写成一个 token（"tearsofmetal"）—— MUST 整 token 相等。
      // MUST NOT 用 substring：`tung` 会命中 tungsten / tung oil / tung tung sahur，
      // 把锚定率虚抬到 87.8%（2026-10-26 实测）。
      return t.includes(b.join(''));
    });
  };
}

const isBrand = brandMatchers(GAME, ALIASES);

const CATEGORIES = [
  ['Tier List', /tier list|\btier\b|meta\b/],
  ['Best/Ranking', /\bbest\b|\btop\b|ranking|strongest/],
  // Boss / 角色 / 敌人清单是攻略型需求，之前落进 Other 被当成非攻略词，
  // 把 Neon Abyss 2 的攻略型占比从 41% 压到 25%（2026-10-26 实测）。
  ['Boss/Characters', /\bboss|bosses|character|characters|enemy|enemies|companions?\b/],
  ['Codes', /code|codes|redeem/],
  ['Co-op/Multiplayer', /co op|coop|multi player|multiplayer|with friends|crossplay|solo|dedicated server/],
  ['Build/Class', /\bbuild|class|classes|skill|skills|loadout|spec\b|talent/],
  ['Weapons/Gear', /weapon|gear|equipment|armor|armour|sword|gun\b|loot|craft|item/],
  ['How-to', /how to|how do|how does|how many|why\b|can i\b|where (to|is)|is there|unlock/],
  ['Guide/Beginner', /guide|walkthrough|tutorial|tips|tricks|beginner|getting started|explained/],
  ['Info/发售平台', /release|price|cost|platform|ps5|ps4|xbox|switch|steam|demo|early access|game pass|gamepass|review|reddit|wiki|update|dlc|roadmap|download|size|requirements|free/],
];

function categoryOf(kw) {
  for (const [name, re] of CATEGORIES) if (re.test(kw)) return name;
  return 'Other';
}

/** 词 → 首批页型（对应 docs/STRATEGY-生命周期与止损.md 第 3.1 节） */
function pageTypeOf(kw) {
  if (/code|redeem/.test(kw)) return '1 Codes';
  if (/tier list|\btier\b|\bbest\b|meta\b/.test(kw)) return '3 Tier List';
  if (/beginner|getting started|tips|how to play/.test(kw)) return '2 Beginner';
  if (/release|price|platform|multiplayer|crossplay|demo|early access|ps5|xbox|switch|steam|game pass|review|size|requirements/.test(kw)) return '5 FAQ';
  if (/how to|boss|guide|walkthrough|unlock|location|map|craft|build|character|characters|enemy|enemies/.test(kw)) return '4 核心机制/Boss';
  return '待定';
}

/** 同一组词换个顺序 = 近重复，用来把「有效词条数」和「独立词数」分开报 */
function variantKey(kw) {
  return tokens(kw).filter((t) => !['the', 'a', 'of', 'for', 'to'].includes(t)).sort().join(' ');
}

/* ─── 采集 ─────────────────────────────────────────────────────────── */

const ip = resolveIp();
if (!ip) {
  console.error('⚠️ dig 取不到真实 IP，将不带 --resolve 直连（可能因 DNS 投毒失败）。');
}

console.log(
  `采集 ${GAME}（slug=${SLUG}，locale=${LOCALE} hl=${hl} gl=${gl}）` +
    `${ip ? `，--resolve ${HOST}:443:${ip}` : ''}`,
);
console.log(`锚定批次 ${ANCHORS.length} 个，间隔 ${DELAY}ms，预计 ${Math.ceil((ANCHORS.length * DELAY) / 1000)}s`);

const requests = [];
/** kw → { sources:Set, firstQuery } */
const raw = new Map();

for (const anchor of ANCHORS) {
  const r = suggest(anchor.query, ip);
  requests.push({ label: anchor.label, query: anchor.query, status: r.status, count: r.items.length, error: r.error });
  for (const kw of r.items) {
    const key = kw.trim();
    if (!key) continue;
    if (!raw.has(key)) raw.set(key, { sources: new Set(), firstQuery: anchor.query });
    raw.get(key).sources.add(`google_suggest:${anchor.label}`);
  }
  process.stdout.write(r.error ? 'x' : '.');
  await sleep(DELAY);
}
process.stdout.write('\n');

const failures = requests.filter((r) => r.status !== 200);
const totalRaw = requests.reduce((s, r) => s + r.count, 0);

/* ─── 去噪 / 分类 ──────────────────────────────────────────────────── */

const brandWords = [];
const noiseWords = [];
const seenVariant = new Map();

for (const [kw, meta] of [...raw.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const sources = [...meta.sources].sort();
  if (isBrand(kw)) {
    const vk = variantKey(kw);
    const variantOf = seenVariant.get(vk) ?? null;
    if (!variantOf) seenVariant.set(vk, kw);
    brandWords.push({
      keyword: kw,
      category: categoryOf(kw),
      pageType: pageTypeOf(kw),
      sources,
      variantOf,
    });
  } else {
    const shared = tokens(kw).filter((t) => tokens(GAME).includes(t)).length;
    noiseWords.push({ keyword: kw, reason: shared > 0 ? '同名/系列混淆' : '近音回退/无关' });
  }
}

const variantCount = brandWords.filter((w) => w.variantOf).length;
const anchorRate = raw.size === 0 ? 0 : brandWords.length / raw.size;

const byCategory = {};
for (const w of brandWords) (byCategory[w.category] ??= []).push(w);

/* ─── 输出 ─────────────────────────────────────────────────────────── */

const now = new Date();
// 本地日期（美东/北京时间都按机器本地算），不用 toISOString 的 UTC 日期，
// 否则凌晨采集会写成前一天（2026-10-26 07:55 CST 实测写成 10-25）。
const pad2 = (n) => String(n).padStart(2, '0');
const stamp = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
const summary = {
  slug: SLUG,
  game: GAME,
  aliases: ALIASES,
  locale: LOCALE,
  genre: GENRE,
  collectedAt: now.toISOString(),
  ip,
  requests: requests.map((r) => ({ label: r.label, query: r.query, status: r.status, count: r.count })),
  stats: {
    requests: requests.length,
    failures: failures.length,
    raw: totalRaw,
    dedup: raw.size,
    valid: brandWords.length,
    variants: variantCount,
    noise: noiseWords.length,
    noiseRate: raw.size === 0 ? 0 : Number((noiseWords.length / raw.size).toFixed(4)),
    anchorRate: Number(anchorRate.toFixed(4)),
  },
  keywords: brandWords,
  noise: noiseWords,
};

function renderMarkdown(data) {
  const s = data.stats;
  const pct = (x) => `${(x * 100).toFixed(1)}%`;
  const lines = [];
  lines.push(`# ${data.game} — Google Suggest 关键词`);
  lines.push('');
  lines.push(
    `> 采集日期: ${stamp} | 原始建议: ${s.raw} | 去重: ${s.dedup} | 有效词: ${s.valid} | 噪声率: ${pct(s.noiseRate)} | 品牌锚定率: ${pct(s.anchorRate)}`,
  );
  lines.push(
    `> 采集方式: script \`scripts/harvest-keywords.mjs\`（${s.requests} 次请求，失败 ${s.failures}；` +
      `locale=${data.locale}，锚定词 \`${data.game}\`${data.ip ? `，--resolve ${HOST}:443:${data.ip}` : ''}）`,
  );
  lines.push(`> 别名: ${data.aliases.length ? data.aliases.join(' / ') : '—'} | 品类: ${data.genre}`);
  lines.push('');
  if (s.failures > 0) {
    lines.push(`> ⚠️ **${s.failures} 次请求失败** —— 失败不等于 0 词，本报告的有效词数不可当作完整需求。`);
    lines.push('');
  }
  if (s.valid < 20) {
    lines.push(
      `> ⚠️ 有效词 ${s.valid} < 20：按规则判「**搜索需求低**」，不进入建站评分。` +
        `先确认锚定词写法是否正确，再判断是否真的没需求。`,
    );
    lines.push('');
  }

  lines.push('## 采集覆盖（证据链）');
  lines.push('');
  lines.push('| 锚定批次 | 查询 | HTTP | 返回条数 |');
  lines.push('|---|---|---:|---:|');
  for (const r of data.requests) lines.push(`| ${r.label} | \`${r.query.trim()}\` | ${r.status || '—'} | ${r.count} |`);
  lines.push('');

  lines.push(`## 有效关键词（${s.valid} 条，其中近重复变体 ${s.variants} 条）`);
  lines.push('');
  lines.push('> 「来源」= 这个词由哪一轮锚定采到；同一词可能来自多轮，全部列出。');
  lines.push('');
  const order = ['Codes', 'Tier List', 'Best/Ranking', 'Boss/Characters', 'Build/Class', 'Weapons/Gear', 'How-to', 'Guide/Beginner', 'Co-op/Multiplayer', 'Info/发售平台', 'Other'];
  for (const cat of order) {
    const list = byCategory[cat];
    if (!list || list.length === 0) continue;
    lines.push(`### ${cat}（${list.length}）`);
    lines.push('');
    lines.push('| 关键词 | 来源 | 页型 | 备注 |');
    lines.push('|---|---|---|---|');
    for (const w of list) {
      lines.push(
        `| ${w.keyword} | ${w.sources.join('<br>')} | ${w.pageType} | ${w.variantOf ? `近重复于「${w.variantOf}」` : ''} |`,
      );
    }
    lines.push('');
  }
  if (s.valid === 0) {
    lines.push('无。MUST NOT 用商店页事实反推关键词。');
    lines.push('');
  }

  lines.push('## 噪声词（已剔除）');
  lines.push('');
  if (noiseWords.length === 0) {
    lines.push('无。');
  } else {
    lines.push('| 关键词 | 原因 |');
    lines.push('|---|---|');
    for (const n of data.noise.slice(0, 300)) lines.push(`| ${n.keyword} | ${n.reason} |`);
    if (data.noise.length > 300) lines.push(`| … 其余 ${data.noise.length - 300} 条 | |`);
  }
  lines.push('');
  lines.push('## 历史采集');
  lines.push('');
  lines.push('见 `keyword-results/.data/' + data.slug + '.json`（机器可读，含跨次增量和每条词的来源）。');
  lines.push('');
  return lines.join('\n');
}

function loadStore() {
  const p = path.join(DATA_DIR, `${SLUG}.json`);
  if (!fs.existsSync(p)) return { slug: SLUG, game: GAME, runs: [], keywords: {} };
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

/**
 * 旧命名的主报告（如 `SpiritVale.md`）与新 slug（`spiritvale.md`）同名不同字时，
 * `keyword-index.mjs --check` 会判「命名冲突：主报告有 2 份」——2026-10-28 采
 * Shift At Midnight 时真的撞上了，只能人工 `git mv` 收尾。这里在写入前自动把
 * 旧文件挪进 docs/archive，让「重采老词库」不再需要手工抢险。
 */
function archiveLegacyMainReport() {
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const target = `${SLUG}.md`;
  const hits = fs
    .readdirSync(OUT_DIR)
    .filter((f) => f.endsWith('.md') && f !== target)
    .filter((f) => !/-expand-|feedback/i.test(f))
    .filter((f) => norm(f.replace(/\.md$/, '').replace(/wiki$/, '')) === norm(SLUG));
  for (const f of hits) {
    const d = new Date(fs.statSync(path.join(OUT_DIR, f)).mtimeMs);
    const stampDay = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const dir = path.join(REPO, 'docs', 'archive');
    fs.mkdirSync(dir, { recursive: true });
    const dest = path.join(dir, `keyword-results-${f.replace(/\.md$/, '')}-${stampDay}.md`);
    try {
      execFileSync('git', ['mv', path.join('keyword-results', f), path.relative(REPO, dest)], {
        cwd: REPO,
        stdio: 'pipe',
      });
    } catch {
      fs.renameSync(path.join(OUT_DIR, f), dest);
    }
    console.log(`归档旧命名报告：keyword-results/${f} → ${path.relative(REPO, dest)}`);
  }
}

if (WRITE) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  archiveLegacyMainReport();
  const store = loadStore();
  const prev = store.keywords ?? {};
  const merged = { ...prev };
  const isNew = [];
  for (const w of brandWords) {
    const old = merged[w.keyword];
    if (!old) isNew.push(w.keyword);
    // 本脚本只拥有 google_suggest 这一路的来源；Steam / Reddit / GSC 等其他渠道由别的流程写入，必须保留
    const others = (old?.sources ?? []).filter((s) => !s.startsWith('google_suggest:'));
    merged[w.keyword] = {
      category: w.category,
      pageType: w.pageType,
      sources: [...new Set([...others, ...w.sources])],
      firstSeen: old?.firstSeen ?? stamp,
      lastSeen: stamp,
      variantOf: w.variantOf ?? old?.variantOf ?? null,
    };
  }
  store.game = GAME;
  store.aliases = [...new Set([...(store.aliases ?? []), ...ALIASES])];
  store.locale = LOCALE;
  store.updatedAt = now.toISOString();
  store.runs = [...(store.runs ?? []), { at: now.toISOString(), locale: LOCALE, ...summary.stats, newKeywords: isNew.length }];
  store.keywords = merged;
  fs.writeFileSync(path.join(DATA_DIR, `${SLUG}.json`), `${JSON.stringify(store, null, 2)}\n`);
  fs.writeFileSync(path.join(OUT_DIR, `${SLUG}.md`), renderMarkdown(summary));
  console.log(`写入：keyword-results/${SLUG}.md + .data/${SLUG}.json（新增词 ${isNew.length}）`);
}

if (JSON_OUT) {
  fs.writeFileSync(JSON_OUT, `${JSON.stringify(summary, null, 2)}\n`);
  console.log(`JSON：${JSON_OUT}`);
}

console.log(
  `原始 ${summary.stats.raw} / 去重 ${summary.stats.dedup} / 有效 ${summary.stats.valid}` +
    ` / 噪声 ${summary.stats.noise}（${(summary.stats.noiseRate * 100).toFixed(1)}%）` +
    ` / 锚定率 ${(summary.stats.anchorRate * 100).toFixed(1)}% / 失败 ${summary.stats.failures}`,
);
if (!WRITE) console.log('未写入（加 --write 生成 keyword-results 报告）。');
