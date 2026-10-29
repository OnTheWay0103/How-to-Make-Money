#!/usr/bin/env node
/**
 * seo-check.mjs — 站点级 + 页面级 SEO 合规检查（配套 skill：.claude/skills/seo-game-site.md）
 *
 * 规则依据：Google Search Essentials / Title link / Snippet / Canonical 官方文档，
 * 以及 docs/STRATEGY-内容生产.md 的项目口径。
 *
 * 用法：
 *   node scripts/seo-check.mjs --site aincradwiki          # 本地检查（不需要 node_modules）
 *   node scripts/seo-check.mjs --all                       # 全部 wiki 站
 *   node scripts/seo-check.mjs --site aincradwiki --live   # 另抓线上 HTML
 *   node scripts/seo-check.mjs --all --json                # 机器可读，供 Agent 消费
 *   node scripts/seo-check.mjs --site x --report .agent/seo-fix.md   # 输出修复清单
 *   node scripts/seo-check.mjs --site x --strict           # WARN 也算失败（新站上线闸用）
 *
 * 严重度：
 *   ERROR = 违反 Google 索引/展示硬规范，必须修（退出码 1）
 *           —— 缺文件、robots 挡站、noindex、H1 不唯一、缺 title/description、
 *              软 404、sitemap 漏页、页面打不开、图片无 alt
 *   WARN  = 项目口径或已知缺口，不阻塞（用户 2026-10-29 明确：canonical 静态页、
 *           title/desc 长度先不处理）
 *           —— 字数、title/desc 长度、首段词数、内链数、canonical
 *
 * 退出码：0 = 无 ERROR（可以有 WARN）；1 = 有 ERROR；2 = 用法错误
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/* ────────────────────────── 参数 ────────────────────────── */

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f, d) => {
  const i = argv.indexOf(f);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d;
};

const ALL = has('--all');
const LIVE = has('--live');
const JSON_OUT = has('--json');
const QUIET = has('--quiet');
const STRICT = has('--strict');
const SITE = val('--site', null);
const REPORT = val('--report', null);

if (!ALL && !SITE) {
  console.error('用法: node scripts/seo-check.mjs --site <site> | --all [--live] [--json] [--strict] [--report <path>]');
  process.exit(2);
}

/* ────────────────────────── 结果收集 ────────────────────────── */

const findings = []; // { level:'ERROR'|'WARN', site, code, where, msg }
const add = (level, site, code, where, msg) => findings.push({ level, site, code, where, msg });
const err = (...a) => add('ERROR', ...a);
const warn = (...a) => add('WARN', ...a);

const files = []; // 参与扫描的文件清单，便于报告

/* ────────────────────────── 站点发现 ────────────────────────── */

function listSites() {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /wiki$/.test(d.name))
    .map((d) => d.name)
    .filter((name) => fs.existsSync(path.join(ROOT, name, 'app', 'layout.tsx')))
    .sort();
}

/* ────────────────────────── 工具 ────────────────────────── */

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null);

/** 极简 frontmatter 解析：只取顶层 key: value，够用且不引依赖。 */
function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) v = v.slice(1, -1);
    out[kv[1]] = v;
  }
  return out;
}

const stripFrontmatter = (src) => src.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');

/** 去掉注释再看标签，避免把注释里提到的 `<h1>` 当成真实输出。 */
const stripComments = (src) =>
  src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

/** 词数口径与 lint-guides.mjs 一致：英文词 + 中文字符。 */
function countWords(body) {
  const clean = body.replace(/```[\s\S]*?```/g, ' ').replace(/https?:\/\/\S+/g, ' ');
  const cjk = (clean.match(/[㐀-鿿]/g) || []).length;
  const latin = (clean.match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
  return cjk + latin;
}

/** 首页段落（跳过标题、列表、表格、引用） */
function firstParagraph(body) {
  for (const block of body.split(/\n\s*\n/)) {
    const t = block.trim();
    if (!t) continue;
    if (/^#{1,6}\s/.test(t) || /^[-*|>]/.test(t) || /^\d+\./.test(t) || /^!\[/.test(t)) continue;
    return t.replace(/\s+/g, ' ');
  }
  return '';
}

const wordCount = (s) => (s.match(/[㐀-鿿]/g) || []).length + (s.match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;

/* ────────────────────────── 站点级检查 ────────────────────────── */

const REQUIRED = [
  ['app/layout.tsx', '根布局'],
  ['app/sitemap.ts', 'sitemap'],
  ['app/robots.ts', 'robots'],
  ['lib/seo-config.ts', 'SITE_CONFIG'],
  ['lib/schema.ts', '结构化数据'],
  ['components/GuideLayout.tsx', '攻略页布局'],
];

function checkSite(site) {
  const dir = path.join(ROOT, site);

  // S-FILES：必需文件
  for (const [rel, label] of REQUIRED) {
    if (!fs.existsSync(path.join(dir, rel))) err(site, 'S-FILES', `${site}/${rel}`, `缺少${label}文件`);
  }

  // S-ORIGIN：SITE_CONFIG.url 与站点域名一致
  const seo = read(path.join(dir, 'lib/seo-config.ts'));
  const expected = `https://${site}.vercel.app`;
  if (seo) {
    const m = seo.match(/url:\s*['"]([^'"]+)['"]/);
    if (!m) err(site, 'S-ORIGIN', `${site}/lib/seo-config.ts`, 'SITE_CONFIG 里找不到 url');
    else if (m[1].replace(/\/$/, '') !== expected) {
      warn(site, 'S-ORIGIN', `${site}/lib/seo-config.ts`, `url=${m[1]}，预期 ${expected}（自有域名时忽略本条）`);
    }
  }

  // S-ROBOTS：不得 Disallow 根路径
  const robots = read(path.join(dir, 'app/robots.ts'));
  if (robots && /disallow:\s*\[[^\]]*['"]\/['"]/.test(robots)) {
    err(site, 'S-ROBOTS', `${site}/app/robots.ts`, "robots 里 Disallow 了根路径 '/'，整站不可抓取");
  }

  // S-NOINDEX：全站不得有 noindex
  const noindexHits = grepDir(dir, /noindex/);
  if (noindexHits.length) {
    err(site, 'S-NOINDEX', noindexHits.slice(0, 3).join(', '), `出现 noindex（${noindexHits.length} 处），被标记的页面不会进索引`);
  }

  // S-SITEMAP：sitemap 必须从 content/guides 读
  const sitemap = read(path.join(dir, 'app/sitemap.ts'));
  if (sitemap && !/content/.test(sitemap)) {
    err(site, 'S-SITEMAP', `${site}/app/sitemap.ts`, 'sitemap 未读取 content/guides，攻略页可能不进 sitemap');
  }

  // S-H1：攻略页布局必须渲染唯一 H1，正文渲染器不得再产出 <h1>
  const layout = read(path.join(dir, 'components/GuideLayout.tsx'));
  if (layout) {
    const clean = stripComments(layout);
    const n = (clean.match(/<h1[ >]/g) || []).length;
    if (n === 0) err(site, 'S-H1', `${site}/components/GuideLayout.tsx`, '攻略页布局没有 <h1>');
    else if (n > 1) err(site, 'S-H1', `${site}/components/GuideLayout.tsx`, `布局里有 ${n} 个 <h1>`);
  }
  const renderer = read(path.join(dir, 'components/ReactMarkdown.tsx'));
  if (renderer && /<h1[ >]/.test(stripComments(renderer))) {
    err(site, 'S-H1-RENDER', `${site}/components/ReactMarkdown.tsx`, '正文渲染器会产出 <h1>，与模板 H1 重复');
  }

  // S-CANONICAL：canonical 只在攻略页生成（已知缺口，暂列 WARN）
  const metadata = read(path.join(dir, 'lib/metadata.ts'));
  if (metadata && !/alternates/.test(metadata)) {
    err(site, 'S-CANONICAL', `${site}/lib/metadata.ts`, '没有任何 alternates.canonical，全站无规范网址');
  } else {
    warn(site, 'S-CANONICAL-STATIC', `${site}/lib/metadata.ts`, 'canonical 只在攻略页生成，静态页（/, /faq, /guides …）没有 canonical（已知缺口，暂不处理）');
  }

  checkGuides(site, dir);
}

function grepDir(dir, re, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name.startsWith('.')) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) grepDir(p, re, acc);
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      const s = read(p);
      if (s && re.test(s)) acc.push(path.relative(ROOT, p));
    }
  }
  return acc;
}

/* ────────────────────────── 页面级检查 ────────────────────────── */

function checkGuides(site, dir) {
  const gdir = path.join(dir, 'content/guides');
  if (!fs.existsSync(gdir)) {
    err(site, 'P-FILES', `${site}/content/guides`, '攻略目录不存在');
    return;
  }
  const list = fs.readdirSync(gdir).filter((f) => f.endsWith('.md')).sort();
  if (!list.length) {
    err(site, 'P-FILES', `${site}/content/guides`, '没有任何攻略文件');
    return;
  }

  const seenTitle = new Map();
  const seenDesc = new Map();

  for (const file of list) {
    const p = path.join(gdir, file);
    const rel = `${site}/content/guides/${file}`;
    files.push(rel);
    const src = read(p);
    const fm = parseFrontmatter(src);
    const body = stripFrontmatter(src);

    // P1/P2：title
    if (!fm.title) err(site, 'P-TITLE', rel, '缺少 title');
    else {
      const n = fm.title.length;
      if (n < 40 || n > 60) warn(site, 'P-TITLE-LEN', rel, `title ${n} 字符（口径 40–60）`);
      if (seenTitle.has(fm.title)) err(site, 'P-TITLE-DUP', rel, `title 与 ${seenTitle.get(fm.title)} 重复`);
      else seenTitle.set(fm.title, file);
    }

    // P8/P9：description
    if (!fm.description) err(site, 'P-DESC', rel, '缺少 description');
    else {
      const n = fm.description.length;
      if (n < 140 || n > 160) warn(site, 'P-DESC-LEN', rel, `description ${n} 字符（口径 140–160）`);
      if (seenDesc.has(fm.description)) err(site, 'P-DESC-DUP', rel, `description 与 ${seenDesc.get(fm.description)} 重复`);
      else seenDesc.set(fm.description, file);
    }

    // P12：正文 markdown H1 只允许一个（渲染器会把它降级/丢弃，多写只是语义混乱）
    const mdH1 = (body.match(/^#\s+\S/gm) || []).length;
    if (mdH1 > 1) warn(site, 'P-H1-COUNT', rel, `正文有 ${mdH1} 个 markdown H1，只允许 1 个`);

    // P13：标题层级不跳级
    const levels = [...body.matchAll(/^(#{1,6})\s/gm)].map((m) => m[1].length);
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i - 1] > 1) {
        warn(site, 'P-HEADING-JUMP', rel, `标题从 H${levels[i - 1]} 跳到 H${levels[i]}`);
        break;
      }
    }

    // P15：词数（项目内容口径，非 Google 要求 → WARN）
    const words = countWords(body);
    const isFaq = /faq/i.test(file) || /faq/i.test(fm.category || '');
    const min = isFaq ? 800 : 1200;
    if (words < min) warn(site, 'P-WORDS', rel, `${words} 词，低于项目口径 ${min}`);

    // P14：首段直答（40–60 词）
    const lead = firstParagraph(body);
    const leadN = wordCount(lead);
    if (!lead) warn(site, 'P-LEAD', rel, '找不到正文首段');
    else if (leadN < 30 || leadN > 80) warn(site, 'P-LEAD-LEN', rel, `首段 ${leadN} 词（口径 40–60）`);

    // P17：更新时间
    if (!fm.updated) warn(site, 'P-UPDATED', rel, '缺少 updated 字段');

    // P18：站内上下文内链
    const internal = (body.match(/\]\(\/guides\//g) || []).length;
    if (internal < 3) warn(site, 'P-INTERNAL', rel, `站内攻略链接 ${internal} 条（建议 ≥3）`);

    // P11：图片 alt
    const emptyAlt = (body.match(/!\[\]\(/g) || []).length;
    if (emptyAlt) err(site, 'P-IMG-ALT', rel, `${emptyAlt} 张图片没有 alt`);
  }
}

/* ────────────────────────── 线上检查 ────────────────────────── */

const ipCache = new Map();
function realIp(host) {
  if (ipCache.has(host)) return ipCache.get(host);
  let ip = null;
  try {
    ip = execFileSync('dig', ['@1.1.1.1', '+short', host, 'A'], { encoding: 'utf8' })
      .split('\n')
      .map((s) => s.trim())
      .find((s) => /^\d+\.\d+\.\d+\.\d+$/.test(s));
  } catch { /* fall through */ }
  ipCache.set(host, ip);
  return ip;
}

function fetchPage(host, ip, p) {
  const args = ['-s', '-o', '-', '-w', '\n__STATUS__%{http_code}', '--max-time', '25'];
  if (ip) args.push('--resolve', `${host}:443:${ip}`);
  args.push(`https://${host}${p}`);
  try {
    const out = execFileSync('curl', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
    const i = out.lastIndexOf('__STATUS__');
    return { status: Number(out.slice(i + 10).trim()), html: out.slice(0, i) };
  } catch {
    return { status: 0, html: '' };
  }
}

function checkLive(site) {
  const host = `${site}.vercel.app`;
  const ip = realIp(host);
  if (!ip) {
    warn(site, 'L-DNS', host, '取不到真实 IP，跳过线上检查');
    return;
  }

  // L-404：未知路径必须真 404
  const ghost = fetchPage(host, ip, `/__seo_check_missing_${Date.now()}`);
  if (ghost.status !== 404) {
    err(site, 'L-404', `${host}/<unknown>`, `未知路径返回 ${ghost.status}，应为 404（软 404 会稀释整站质量信号）`);
  }

  // L-ROBOTS / L-SITEMAP
  const robots = fetchPage(host, ip, '/robots.txt');
  if (robots.status !== 200) err(site, 'L-ROBOTS', `${host}/robots.txt`, `HTTP ${robots.status}`);
  else if (!new RegExp(`Sitemap:\\s*https://${host.replace(/\./g, '\\.')}`).test(robots.html)) {
    warn(site, 'L-ROBOTS-ORIGIN', `${host}/robots.txt`, 'Sitemap 行与站点 origin 不一致');
  }

  const sitemap = fetchPage(host, ip, '/sitemap.xml');
  const locs = (sitemap.html.match(/<loc>/g) || []).length;
  if (sitemap.status !== 200) err(site, 'L-SITEMAP', `${host}/sitemap.xml`, `HTTP ${sitemap.status}`);
  else {
    const guides = fs.existsSync(path.join(ROOT, site, 'content/guides'))
      ? fs.readdirSync(path.join(ROOT, site, 'content/guides')).filter((f) => f.endsWith('.md')).length
      : 0;
    if (locs < guides) err(site, 'L-SITEMAP-COUNT', `${host}/sitemap.xml`, `${locs} 条 <loc>，少于 ${guides} 篇攻略`);
  }

  // 抽样页面
  const guideFile = fs.existsSync(path.join(ROOT, site, 'content/guides'))
    ? fs.readdirSync(path.join(ROOT, site, 'content/guides')).filter((f) => f.endsWith('.md')).sort()[0]
    : null;
  const pages = ['/', '/guides', '/faq', '/tier-list'];
  if (guideFile) pages.push(`/guides/${guideFile.replace(/\.md$/, '')}`);

  for (const p of pages) {
    const { status, html } = fetchPage(host, ip, p);
    const where = `${host}${p}`;
    if (status !== 200) {
      err(site, 'L-STATUS', where, `HTTP ${status}`);
      continue;
    }
    const h1 = (html.match(/<h1[ >]/g) || []).length;
    if (h1 !== 1) err(site, 'L-H1', where, `<h1> 数量 ${h1}，应为 1`);

    const tm = html.match(/<title[^>]*>([\s\S]*?)<\/title>/);
    if (!tm || !tm[1].trim()) err(site, 'L-TITLE', where, '缺少 <title>');
    else if (tm[1].length < 40 || tm[1].length > 60) {
      warn(site, 'L-TITLE-LEN', where, `title ${tm[1].length} 字符（口径 40–60）`);
    }

    const dm = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
    if (!dm) err(site, 'L-DESC', where, '缺少 meta description');
    else if (dm[1].length < 140 || dm[1].length > 160) {
      warn(site, 'L-DESC-LEN', where, `description ${dm[1].length} 字符（口径 140–160）`);
    }

    if (!/rel="canonical"/.test(html)) {
      warn(site, 'L-CANONICAL', where, '没有 rel=canonical（已知缺口，暂不处理）');
    }

    const imgs = html.match(/<img[^>]*>/g) || [];
    const noAlt = imgs.filter((t) => !/\balt=/.test(t)).length;
    if (noAlt) err(site, 'L-IMG-ALT', where, `${noAlt} 张图片没有 alt`);
  }
}

/* ────────────────────────── 主流程 ────────────────────────── */

const sites = ALL ? listSites() : [SITE];
for (const s of sites) {
  if (!fs.existsSync(path.join(ROOT, s))) {
    console.error(`站点不存在: ${s}`);
    process.exit(2);
  }
  checkSite(s);
  if (LIVE) checkLive(s);
}

const errors = findings.filter((f) => f.level === 'ERROR');
const warns = findings.filter((f) => f.level === 'WARN');
const fail = errors.length > 0 || (STRICT && warns.length > 0);

/* ────────────────────────── 输出 ────────────────────────── */

const byCode = (arr) => {
  const m = new Map();
  for (const f of arr) {
    if (!m.has(f.code)) m.set(f.code, []);
    m.get(f.code).push(f);
  }
  return [...m.entries()].sort((a, b) => b[1].length - a[1].length);
};

if (JSON_OUT) {
  console.log(JSON.stringify({
    ok: !fail,
    sites,
    live: LIVE,
    summary: { errors: errors.length, warns: warns.length },
    findings,
  }, null, 2));
} else if (!QUIET) {
  console.log(`SEO 合规检查 — ${sites.length} 站${LIVE ? '（含线上）' : '（本地）'}\n`);

  if (errors.length) {
    console.log('❌ ERROR（必须修）');
    for (const [code, items] of byCode(errors)) {
      console.log(`  ${code}  ×${items.length}`);
      for (const f of items.slice(0, 5)) console.log(`    - ${f.where}: ${f.msg}`);
      if (items.length > 5) console.log(`    … 另有 ${items.length - 5} 条`);
    }
    console.log('');
  }

  if (warns.length) {
    console.log('⚠️  WARN（口径偏离，不阻塞）');
    for (const [code, items] of byCode(warns)) {
      console.log(`  ${code}  ×${items.length}`);
      for (const f of items.slice(0, 3)) console.log(`    - ${f.where}: ${f.msg}`);
      if (items.length > 3) console.log(`    … 另有 ${items.length - 3} 条`);
    }
    console.log('');
  }

  console.log(
    `结果：${fail ? '❌ 不通过' : '✅ 通过'}  ERROR ${errors.length} / WARN ${warns.length}` +
      (STRICT ? '（--strict：WARN 也计为失败）' : ''),
  );
}

if (REPORT) {
  const lines = [
    `# SEO 修复清单 — ${new Date().toISOString().slice(0, 10)}`,
    '',
    `站点：${sites.join(', ')}　模式：${LIVE ? '本地 + 线上' : '本地'}`,
    `ERROR ${errors.length} / WARN ${warns.length}`,
    '',
    '## ERROR（必须修）',
    '',
  ];
  if (!errors.length) lines.push('无。');
  else {
    lines.push('| 代码 | 位置 | 问题 | 修复方向 |', '|---|---|---|---|');
    for (const f of errors) lines.push(`| ${f.code} | ${f.where} | ${f.msg} | ${hint(f.code)} |`);
  }
  lines.push('', '## WARN（口径偏离，暂不阻塞）', '');
  if (!warns.length) lines.push('无。');
  else {
    lines.push('| 代码 | 位置 | 问题 |', '|---|---|---|');
    for (const f of warns) lines.push(`| ${f.code} | ${f.where} | ${f.msg} |`);
  }
  fs.mkdirSync(path.dirname(path.resolve(ROOT, REPORT)), { recursive: true });
  fs.writeFileSync(path.resolve(ROOT, REPORT), lines.join('\n') + '\n');
  if (!QUIET) console.log(`\n修复清单已写入 ${REPORT}`);
}

function hint(code) {
  const m = {
    'S-FILES': '用 scripts/new-site.mjs 重新生成，或从 templates/wiki-base 补齐该文件',
    'S-ORIGIN': '把 SITE_CONFIG.url 改成站点真实 origin（与 sitemap/robots/内链同源）',
    'S-ROBOTS': "robots.ts 的 disallow 去掉 '/'，只挡 /admin/ 等内部路径",
    'S-NOINDEX': '删掉 noindex（规范化请用 canonical，不要用 noindex）',
    'S-SITEMAP': 'sitemap.ts 要读取 content/guides 生成攻略页 URL',
    'S-H1': 'GuideLayout 必须渲染唯一的 <h1>（来自 frontmatter.title）',
    'S-H1-RENDER': '正文渲染器把 `# xxx` 降级为 h2，不得输出 <h1>（参考 templates/wiki-base 的 ReactMarkdown）',
    'S-CANONICAL': '在 generateGuideMetadata 与静态页 metadata 里补 alternates.canonical',
    'P-TITLE': '补 frontmatter title，40–60 字符，描述本页而非泛称',
    'P-TITLE-DUP': '两页共用同一 title，按搜索意图改掉其中一个',
    'P-DESC': '补 frontmatter description，140–160 字符',
    'P-DESC-DUP': '两页共用同一 description，必须各自重写',
    'P-WORDS': '补内容到 1,200 词以上（FAQ 800）；补齐要有可核验来源',
    'P-IMG-ALT': '给图片补描述性 alt',
    'L-404': '让未知路径返回真实 404，不要 301 回首页',
    'L-STATUS': '页面打不开，先查部署',
    'L-H1': '每页有且仅有 1 个 H1',
    'L-TITLE': '补 <title>',
    'L-DESC': '补 meta description',
    'L-IMG-ALT': '补图片 alt',
    'L-SITEMAP-COUNT': 'sitemap 漏页，检查 sitemap.ts 是否遍历了全部 content/guides',
  };
  return m[code] || '按 .claude/skills/seo-game-site.md 对应条目处理';
}

process.exit(errors.length === 0 && !(STRICT && warns.length) ? 0 : 1);
