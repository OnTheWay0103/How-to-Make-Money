#!/usr/bin/env node
/**
 * 词库索引 —— 挖词阶段节点 10。
 *
 *   扫描 keyword-results/：新格式读 `.data/{slug}.json`，旧格式尽力从 md 头部解析
 *   输出 keyword-results/INDEX.md
 *
 * 用法：
 *   node scripts/keyword-index.mjs            # 生成索引
 *   node scripts/keyword-index.mjs --check    # 只做检查（命名冲突 / 无元信息），非零退出表示有问题
 */

import fs from 'node:fs';
import path from 'node:path';

const REPO = path.resolve(import.meta.dirname, '..');
const DIR = path.join(REPO, 'keyword-results');
const DATA = path.join(DIR, '.data');
const CHECK = process.argv.includes('--check');

const siteDirs = fs
  .readdirSync(REPO, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.endsWith('wiki'))
  .map((d) => d.name);

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.md') && !f.startsWith('INDEX'));

function siteFor(slug) {
  const s = String(slug).toLowerCase().replace(/[^a-z0-9]/g, '');
  const dirs = siteDirs.map((d) => [d, d.toLowerCase().replace(/[^a-z0-9]/g, '')]);
  const exact = dirs.find(([, l]) => l === `${s}wiki`);
  if (exact) return exact[0];
  const loose = dirs.find(([, l]) => l === s || l === `${s}wiki` || l.replace(/wiki$/, '') === s);
  return loose ? loose[0] : null;
}

/* ─── 新格式：.data/*.json ─────────────────────────────────────────── */

const entries = new Map(); // slug → entry

if (fs.existsSync(DATA)) {
  for (const f of fs.readdirSync(DATA).filter((x) => x.endsWith('.json'))) {
    const store = JSON.parse(fs.readFileSync(path.join(DATA, f), 'utf8'));
    const kws = Object.entries(store.keywords ?? {});
    const sources = {};
    let lastSeen = null;
    const pageTypes = new Set();
    for (const [, v] of kws) {
      for (const s of v.sources ?? []) sources[s] = (sources[s] ?? 0) + 1;
      if (v.pageType) pageTypes.add(v.pageType);
      if (v.lastSeen && (!lastSeen || v.lastSeen > lastSeen)) lastSeen = v.lastSeen;
    }
    entries.set(store.slug, {
      slug: store.slug,
      game: store.game,
      format: 'new',
      valid: kws.length,
      lastSeen,
      sources,
      pageTypes: [...pageTypes].sort(),
      runs: store.runs?.length ?? 0,
      site: siteFor(store.slug),
    });
  }
}

/* ─── 旧格式：md 头部尽力解析 ──────────────────────────────────────── */

const legacy = [];
for (const f of files) {
  const slug = f.replace(/\.md$/, '');
  if (entries.has(slug) || slug.includes('-expand-') || /^(candidate-pool|index|命中率|readme|discovery|candidate|build-gate)/i.test(slug)) continue;
  const head = fs.readFileSync(path.join(DIR, f), 'utf8').slice(0, 1200);
  const pick = (re) => head.match(re)?.[1]?.trim() ?? null;
  // 旧报告的头有好几种写法，全部兼容；解析不到就记 0 并在「待处理」里点名
  const valid = Number(
    pick(/有效词[:：]\s*(\d+)/) ??
      pick(/有效游戏词[:：]\s*(\d+)/) ??
      pick(/去噪后[:：]\s*(\d+)/) ??
      pick(/游戏相关[:：]\s*(\d+)/) ??
      pick(/(\d+)\s*unique keywords/) ??
      0,
  );
  const game = pick(/^#\s+(.+?)\s*(?:—|—)/m)?.trim() ?? null;
  const date =
    pick(/采集日期[:：]\s*([\d-]{10})/) ?? pick(/Harvested[:：]\s*([\d-]{10})/) ?? null;
  legacy.push({ slug, game, format: date ? 'legacy-meta' : 'legacy', valid, lastSeen: date, sources: {}, pageTypes: [], runs: 1, site: siteFor(slug) });
}

/* ─── 渠道产出汇总 ─────────────────────────────────────────────────── */

const channel = {};
const anchor = {};
for (const [, e] of entries) {
  const store = JSON.parse(fs.readFileSync(path.join(DATA, `${e.slug}.json`), 'utf8'));
  for (const v of Object.values(store.keywords ?? {})) {
    const srcs = v.sources ?? [];
    const chs = [...new Set(srcs.map((s) => s.split(':')[0]))];
    const labels = srcs.map((s) => s.slice(s.indexOf(':') + 1)).filter(Boolean);
    const chSet = [...new Set(chs)];
    const labelSet = [...new Set(labels)];

    for (const c of chSet) channel[c] ??= { contributed: 0, exclusive: 0 };
    for (const c of chSet) {
      channel[c].contributed += 1;
      if (chSet.length === 1) channel[c].exclusive += 1;
    }
    for (const l of labelSet) anchor[l] ??= { contributed: 0, exclusive: 0 };
    for (const l of labelSet) {
      anchor[l].contributed += 1;
      if (labelSet.length === 1 && chSet.length === 1) anchor[l].exclusive += 1;
    }
  }
}

/* ─── 检查 ─────────────────────────────────────────────────────────── */

const NON_GAME = /^(CANDIDATE-POOL|INDEX|命中率分析|README|discovery-|candidate-|build-gate-|discovery-review)/;
const isGameFile = (f) => !NON_GAME.test(f);

const problems = [];
const soft = [];
const byStem = {};
for (const f of files.filter(isGameFile)) {
  const m = f.match(/-expand-(\d{1,2}-\d{1,2})\.md$/) ?? f.match(/-expand-(\d{4}-\d{2}-\d{2})\.md$/);
  const stem = f
    .replace(/\.md$/, '')
    .replace(/-expand-.*$/, '')
    .replace(/wiki$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  // 同一天重复出扩词报告才算冲突；不同日期是正常的每日记录
  const key = `${stem}#${m ? m[1] : 'primary'}`;
  (byStem[key] ??= []).push(f);
}
for (const [key, list] of Object.entries(byStem)) {
  if (list.length > 1) {
    const [stem, when] = key.split('#');
    problems.push(`命名冲突：${stem} ${when === 'primary' ? '主报告' : when} 有 ${list.length} 份（${list.join('、')}）`);
  }
}
for (const l of legacy) {
  if (l.format === 'legacy') soft.push(`无采集元信息头（无法自动统计）：${l.slug}.md`);
}

/* ─── 输出 ─────────────────────────────────────────────────────────── */

const all = [...entries.values(), ...legacy].sort((a, b) => (b.lastSeen ?? '').localeCompare(a.lastSeen ?? ''));
const built = all.filter((e) => e.site).length;

const lines = [];
lines.push('# 词库索引');
lines.push('');
lines.push(`> 生成时间：${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`);
lines.push(`> 生成脚本：\`node scripts/keyword-index.mjs\` —— 不要手改本文件`);
lines.push('> 规则：`docs/STRATEGY-挖词与词库.md`');
lines.push('');
lines.push(`共 **${all.length}** 份游戏词库（新格式 ${entries.size}，旧格式 ${legacy.length}），已建站 **${built}** 站。`);
lines.push('');
lines.push('> 新格式以 `slug == 站点目录名去掉 wiki` 精确匹配；旧格式只能按文件名猜，「未建站」可能有漏配。');
lines.push('');

lines.push('## 渠道产出');
lines.push('');
lines.push('> 「贡献词数」= 该渠道采到的有效词条次（一词多渠道会重复计）；「独占词数」= 只有这个渠道采到的词。');
lines.push('> 用来回答：扩渠道该往哪扩、哪个渠道在空转。');
lines.push('');
lines.push('| 渠道 | 贡献词数 | 独占词数 |');
lines.push('|---|---:|---:|');
for (const [ch, v] of Object.entries(channel).sort((a, b) => b[1].exclusive - a[1].exclusive)) {
  lines.push(`| ${ch} | ${v.contributed} | ${v.exclusive} |`);
}
lines.push('');
lines.push('## 采集锚定产出');
lines.push('');
lines.push('> google_suggest 内部按锚定批次拆开：哪个种子真的踩到词，哪个在空转。扩种子时看这张表。');
lines.push('');
lines.push('| 锚定批次 | 贡献词数 | 独占词数 |');
lines.push('|---|---:|---:|');
for (const [l, v] of Object.entries(anchor).sort((a, b) => b[1].contributed - a[1].contributed).slice(0, 25)) {
  lines.push(`| ${l} | ${v.contributed} | ${v.exclusive} |`);
}
lines.push('');

lines.push('## 按游戏');
lines.push('');
lines.push('| 游戏 | slug | 有效词 | 最后采集 | 来源 | 页型覆盖 | 站点 | 格式 |');
lines.push('|---|---|---:|---|---|---|---|---|');
for (const e of all) {
  const chAgg = {};
  const labelAgg = {};
  for (const [k, n] of Object.entries(e.sources)) {
    const ch = k.split(':')[0];
    chAgg[ch] = (chAgg[ch] ?? 0) + n;
    const label = k.slice(k.indexOf(':') + 1);
    if (label) labelAgg[label] = (labelAgg[label] ?? 0) + n;
  }
  const top = Object.entries(labelAgg)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([k, n]) => `${k} ${n}`)
    .join('、');
  const src = Object.entries(chAgg)
    .map(([c, n]) => `${c}:${n}`)
    .join(' ') || '—';
  lines.push(
    `| ${e.game ?? '—'} | ${e.slug} | ${e.valid} | ${e.lastSeen ?? '—'} | ${src}${top ? `（${top}）` : ''} | ${e.pageTypes.join(' / ') || '—'} | ${e.site ?? '未建站'} | ${e.format} |`,
  );
}
lines.push('');

if (problems.length > 0 || soft.length > 0) {
  lines.push('## 待处理');
  lines.push('');
  if (problems.length > 0) {
    lines.push('**硬问题**（必须处理，`--check` 会失败）：');
    lines.push('');
    for (const p of problems) lines.push(`- ${p}`);
    lines.push('');
  }
  if (soft.length > 0) {
    lines.push(`**软问题**（旧格式，逐步随复采替换，不阻塞）：${soft.length} 份`);
    lines.push('');
    for (const p of soft.slice(0, 20)) lines.push(`- ${p}`);
    if (soft.length > 20) lines.push(`- … 其余 ${soft.length - 20} 份`);
    lines.push('');
  }
}

fs.writeFileSync(path.join(DIR, 'INDEX.md'), lines.join('\n'));
console.log(
  `INDEX.md：${all.length} 份词库（新格式 ${entries.size}），硬问题 ${problems.length}，软问题 ${soft.length}`,
);
if (CHECK) {
  if (problems.length > 0) {
    for (const p of problems) console.error(`  ✗ ${p}`);
    process.exit(1);
  }
  console.log('检查通过（软问题不阻塞）。');
}
