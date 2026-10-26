#!/usr/bin/env node
/**
 * 页面矩阵覆盖率 —— 内容生产阶段节点 24。
 *
 *   读 keyword-results/{slug}-matrix.md，对照站点 content/guides/*.md，
 *   算 P0 / P1 / P2 词的落地率，并列出「矩阵外的页」。
 *
 * 用法：
 *   node scripts/keyword-coverage.mjs --slug witchspire
 *   node scripts/keyword-coverage.mjs --slug witchspire --check   # P0 未 100% 时退出码 1
 *   node scripts/keyword-coverage.mjs --matrix /tmp/m.md --site witchspirewiki
 *
 * 判定：
 *   - 页面 slug 与矩阵「页面名」一致 → 命中
 *   - 或矩阵「目标搜索词」的所有实词（去停用词）都出现在该页
 *     slug / title / description / keywords 里 → 命中
 *   规则见 docs/STRATEGY-内容生产.md 2.4；矩阵格式见 2.1。
 */

import fs from 'node:fs';
import path from 'node:path';

const REPO = path.resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
};

const slug = opt('--slug');
const siteArg = opt('--site');
const matrixArg = opt('--matrix');
const CHECK = args.includes('--check');

if (!slug && !matrixArg) {
  console.error('用法：node scripts/keyword-coverage.mjs --slug <slug> [--check]');
  process.exit(2);
}

const matrixPath = matrixArg || path.join(REPO, 'keyword-results', `${slug}-matrix.md`);
const siteDir = siteArg
  ? path.resolve(REPO, siteArg)
  : [path.join(REPO, slug || ''), path.join(REPO, `${slug}wiki`)].find((p) => fs.existsSync(p));

if (!fs.existsSync(matrixPath)) {
  console.error(`✗ 找不到矩阵文件：${matrixPath}`);
  console.error('  先按 docs/STRATEGY-内容生产.md 2.1 产出矩阵，再跑本脚本。');
  process.exit(2);
}
if (!siteDir || !fs.existsSync(siteDir)) {
  console.error(`✗ 找不到站点目录（试过 ${slug} 与 ${slug}wiki）`);
  process.exit(2);
}

const guidesDir = path.join(siteDir, 'content', 'guides');
if (!fs.existsSync(guidesDir)) {
  console.error(`✗ 站点没有 content/guides：${guidesDir}`);
  process.exit(2);
}

/* ─── 读矩阵 ────────────────────────────────────────────── */

function cells(line) {
  const parts = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|');
  return parts.map((c) => c.trim().replace(/`/g, ''));
}

const matrix = [];
for (const line of fs.readFileSync(matrixPath, 'utf8').split('\n')) {
  if (!line.trim().startsWith('|')) continue;
  const c = cells(line);
  if (c.length < 5) continue;
  if (/^[-: ]+$/.test(c[0])) continue; // 分隔行
  if (c[0] === '页面名（slug）' || c[0] === '页面名') continue; // 表头
  const priority = (c.find((x) => /^P[0-2]$/.test(x)) || 'P1').toUpperCase();
  matrix.push({
    page: c[0],
    keyword: c[1] || '',
    intent: c[2] || '',
    priority,
  });
}

if (!matrix.length) {
  console.error('✗ 矩阵里没解析到数据行（需要 markdown 表格，表头见规则文档 2.1）');
  process.exit(2);
}

/* ─── 读站点页面 ────────────────────────────────────────── */

// 停用词 + 通用意图词：只判断「主题词是否命中」，不让 how/beat/guide 这类泛词决定结果
const STOP = new Set([
  'how', 'to', 'the', 'a', 'an', 'is', 'in', 'for', 'of', 'and', 'on', 'do', 'does',
  'guide', 'best', 'beat', 'defeat', 'kill', 'get', 'find', 'use', 'fix', 'unlock',
  'location', 'locations', 'which', 'what', 'where', 'when', 'why', 'vs', 'all', 'my',
]);
const tokensOf = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP.has(w));

const pages = fs
  .readdirSync(guidesDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const raw = fs.readFileSync(path.join(guidesDir, f), 'utf8');
    const get = (k) => (raw.match(new RegExp(`^${k}:\\s*["']?(.+?)["']?\\s*$`, 'm')) || [])[1] || '';
    const kwLine = (raw.match(/^keywords:\s*\[(.+?)\]/m) || [])[1] || '';
    return {
      slug: f.replace(/\.md$/, ''),
      haystack: [f.replace(/\.md$/, ''), get('title'), get('description'), kwLine]
        .join(' ')
        .toLowerCase(),
      tokens: new Set(tokensOf([f.replace(/\.md$/, ''), get('title'), kwLine].join(' '))),
    };
  });

/* ─── 读路由页（app/<dir>/page.tsx）─────────────────────── */
// 矩阵里的 FAQ 行落在 app/faq/page.tsx 这类路由页，而不是 content/guides。
// 只把「自带问答数组（FAQ_ITEMS 非空）」的路由页算作落地页，避免把
// /about、/privacy 这类信任页当成内容页。
const appDir = path.join(siteDir, 'app');
const routePages = [];
for (const entry of fs.existsSync(appDir) ? fs.readdirSync(appDir, { withFileTypes: true }) : []) {
  if (!entry.isDirectory()) continue;
  const file = path.join(appDir, entry.name, 'page.tsx');
  if (!fs.existsSync(file)) continue;
  const raw = fs.readFileSync(file, 'utf8');
  const items = raw.match(/FAQ_ITEMS[^=]*=\s*\[([\s\S]*?)\n\];/);
  if (!items || !items[1].trim()) continue;
  const qa = [...items[1].matchAll(/question:\s*['"]([^'"]+)['"][\s\S]*?answer:\s*['"]([^'"]+)['"]/g)]
    .map((m) => `${m[1]} ${m[2]}`)
    .join(' ');
  const get = (k) => (raw.match(new RegExp(`${k}:\\s*\\n?\\s*['"]([^'"]+)['"]`)) || [])[1] || '';
  const hay = [entry.name, get('title'), get('description'), qa].join(' ').toLowerCase();
  routePages.push({
    slug: entry.name,
    route: `/app/${entry.name}/page.tsx`,
    haystack: hay,
    tokens: new Set(tokensOf(hay)),
  });
}
for (const p of routePages) pages.push(p);

/* ─── 匹配 ──────────────────────────────────────────────── */

const used = new Set();
const rows = matrix.map((row) => {
  const wantSlug = row.page.toLowerCase().replace(/[^a-z0-9-]/g, '');
  let hit = pages.find((p) => p.slug.toLowerCase() === wantSlug);
  let how = 'slug';
  if (!hit) {
    const toks = tokensOf(row.keyword);
    if (toks.length) {
      hit = pages.find((p) => toks.every((t) => p.tokens.has(t) || p.haystack.includes(t)));
      how = hit ? 'keyword' : '';
    }
  }
  if (hit) used.add(hit.slug);
  return { ...row, hit: hit?.slug || null, how };
});

const extra = pages.filter((p) => !used.has(p.slug));

/* ─── 报告 ──────────────────────────────────────────────── */

const byPriority = (p) => rows.filter((r) => r.priority === p);
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 100);

const rel = path.relative(REPO, matrixPath);
console.log(`# 页面矩阵覆盖率 — ${path.basename(siteDir)}`);
console.log(`矩阵：${rel.startsWith('..') ? matrixPath : rel} | 站内页面：${pages.length} 篇\n`);
console.log('| 优先级 | 词数 | 已落地 | 覆盖率 | 要求 |');
console.log('|---|---|---|---|---|');
const req = { P0: '100%', P1: 'D+30 ≥70%', P2: '按数据' };
for (const p of ['P0', 'P1', 'P2']) {
  const all = byPriority(p);
  if (!all.length) continue;
  const hit = all.filter((r) => r.hit).length;
  console.log(`| ${p} | ${all.length} | ${hit} | ${pct(hit, all.length)}% | ${req[p]} |`);
}

const missing = rows.filter((r) => !r.hit);
if (missing.length) {
  console.log('\n## 未落地');
  for (const r of missing) console.log(`- [${r.priority}] ${r.page} — \`${r.keyword}\``);
}
if (extra.length) {
  console.log('\n## 矩阵外的页（有独立意图→补进矩阵；没有→判 FAIL）');
  for (const p of extra) console.log(`- ${p.slug}`);
}

const p0 = byPriority('P0');
const p0Missing = p0.filter((r) => !r.hit);
if (CHECK && p0Missing.length) {
  console.error(`\n✗ P0 覆盖率未达 100%（缺 ${p0Missing.length}）`);
  process.exit(1);
}
if (!p0Missing.length) console.log('\n✓ P0 覆盖率 100%');
