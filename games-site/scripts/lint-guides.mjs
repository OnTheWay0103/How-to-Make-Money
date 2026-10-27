#!/usr/bin/env node
/**
 * lint-guides.mjs — 攻略 frontmatter / 正文的机械校验。
 *
 * 由来：2026-10-23 有 12 篇新稿把 related 写成内联数组，导致 587 篇
 * 「相关攻略」静默不渲染（lib/guides.ts 只认块状数组）。这类问题肉眼不可见，
 * 必须在部署前挡住。
 *
 * 用法：
 *   node scripts/lint-guides.mjs <site-dir>              # 全站
 *   node scripts/lint-guides.mjs <site-dir> --changed    # 只看本次改动
 *   node scripts/lint-guides.mjs <site-dir> --changed --json
 *
 * 退出码：有 ERROR → 1；只有 WARN → 0。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const argv = process.argv.slice(2);
const site = argv.find((a) => !a.startsWith('--'));
const onlyChanged = argv.includes('--changed');
const jsonOut = argv.includes('--json');

if (!site) {
  console.error('用法: node scripts/lint-guides.mjs <site-dir> [--changed] [--json]');
  process.exit(2);
}

const guideDir = path.join(ROOT, site, 'content', 'guides');
if (!fs.existsSync(guideDir)) {
  console.error(`❌ 目录不存在: ${guideDir}`);
  process.exit(2);
}

const allSlugs = new Set(
  fs.readdirSync(guideDir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, '')),
);

function changedFiles() {
  const set = new Set();
  const today = new Date().toISOString().slice(0, 10);
  // 今天改过的稿子（含已提交的）：以 frontmatter updated 为准
  try {
    for (const f of fs.readdirSync(guideDir)) {
      if (!f.endsWith('.md')) continue;
      const raw = fs.readFileSync(path.join(guideDir, f), 'utf8');
      const fm = parseFrontmatter(raw);
      const updated = (fm?.kv?.updated || '').replace(/["']/g, '');
      if (updated === today) set.add(f);
    }
  } catch { /* ignore */ }
  try {
    const out = execFileSync('git', ['status', '--porcelain', '--', `${site}/content/guides`], {
      cwd: ROOT, encoding: 'utf8',
    });
    for (const line of out.split('\n')) {
      const p = line.slice(3).trim();
      if (p.endsWith('.md')) set.add(path.basename(p));
    }
  } catch { /* not a git repo */ }
  try {
    const out = execFileSync('git', ['diff', '--name-only', 'HEAD~1', 'HEAD', '--', `${site}/content/guides`], {
      cwd: ROOT, encoding: 'utf8',
    });
    for (const p of out.split('\n')) if (p.endsWith('.md')) set.add(path.basename(p));
  } catch { /* first commit or shallow */ }
  return set;
}

const changed = onlyChanged ? changedFiles() : null;
const files = fs.readdirSync(guideDir)
  .filter((f) => f.endsWith('.md'))
  .filter((f) => !changed || changed.has(f))
  .sort();

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return null;
  const lines = m[1].split('\n');
  const kv = {};
  let currentKey = null;
  for (const line of lines) {
    const top = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (top) {
      currentKey = top[1];
      kv[currentKey] = top[2].trim();
      continue;
    }
    if (currentKey) kv[currentKey] += `\n${line}`;
  }
  return { kv, body: raw.slice(m[0].length) };
}

function listItems(block) {
  return block
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim().replace(/^["']|["']$/g, ''));
}

function countWords(body) {
  const clean = body.replace(/```[\s\S]*?```/g, ' ').replace(/https?:\/\/\S+/g, ' ');
  const cjk = (clean.match(/[㐀-鿿]/g) || []).length;
  const latin = (clean.match(/[A-Za-z][A-Za-z'’-]*/g) || []).length;
  return cjk + latin;
}

const findings = [];
const add = (level, file, rule, msg) => findings.push({ level, file, rule, msg });

const TODAY = new Date().toISOString().slice(0, 10);

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(guideDir, file), 'utf8');
  const fm = parseFrontmatter(raw);

  if (!fm) {
    add('ERROR', file, 'frontmatter', '缺少 frontmatter（--- 块）');
    continue;
  }
  const { kv, body } = fm;

  for (const key of ['title', 'description', 'category', 'updated']) {
    if (!kv[key]) add('ERROR', file, 'required', `缺少必需字段 ${key}`);
  }

  // related：块状数组才有效，内联数组会被 lib/guides.ts 静默忽略
  if (kv['related'] && /^\s*\[/.test(kv['related'])) {
    add('ERROR', file, 'related-inline', 'related 写成内联数组，相关推荐不会渲染；改成块状 - slug');
  }
  const related = kv['related'] ? listItems(kv['related']) : [];
  for (const r of related) {
    if (!allSlugs.has(r)) add('ERROR', file, 'related-missing', `related 指向不存在的文章: ${r}`);
  }
  if (related.length === 0 && !/^related:/m.test(raw)) {
    add('WARN', file, 'related', '没有 related，站内相关推荐为空');
  }

  // updated 必须是 ISO 日期，且不能是未来
  const updated = (kv['updated'] || '').replace(/["']/g, '');
  if (updated && !/^\d{4}-\d{2}-\d{2}$/.test(updated)) {
    add('ERROR', file, 'updated-format', `updated 不是 YYYY-MM-DD: ${updated}`);
  } else if (updated && updated > TODAY) {
    add('WARN', file, 'updated-future', `updated 在未来: ${updated}`);
  }

  // sources：新增/改动的稿子要求 ≥2 条且至少 1 条 Official
  const sources = kv['sources'] ? listItems(kv['sources']) : [];
  const tiers = (kv['sources'] || '').match(/tier:\s*"?(\w+)"?/g) || [];
  const hasOfficial = tiers.some((t) => /Official/.test(t));
  if (sources.length && !hasOfficial) add('WARN', file, 'sources-tier', 'sources 里没有 Official 级来源');
  if (!sources.length && updated === TODAY) add('WARN', file, 'sources', '今天的稿件没有 sources');

  // H1：每篇必须有且仅有 1 个 markdown 级 H1（页面模板渲染 frontmatter.title 作为页面 H1，
  // 正文的第一个 `#` 行会被渲染器丢掉；多写一个就会变成正文里的第二层标题，语义混乱）
  const h1Count = (body.match(/^# .+$/gm) || []).length;
  if (h1Count === 0) add('WARN', file, 'h1', '正文没有 markdown H1（首行应为 `# 标题`）');
  if (h1Count > 1) add('ERROR', file, 'h1', `正文有 ${h1Count} 个 markdown H1，只允许 1 个`);

  // 字数：只对今天的稿子严格，老稿只提示
  const words = countWords(body);
  if (updated === TODAY && (words < 800 || words > 1600)) {
    add('WARN', file, 'length', `正文 ${words} 字，超出 800–1600 的建议区间`);
  }

  // 正文里不能有未清理的占位符。
  // TODO/FIXME/lorem ipsum 是模板残留，阻断；
  // TBD 往往是诚实标注（"specifics are TBD"），只提示不阻断（见 QA skill 2.4）。
  if (/\b(TODO|FIXME)\b|lorem ipsum/i.test(body)) {
    add('ERROR', file, 'placeholder', '正文含 TODO/FIXME/lorem ipsum 等占位符');
  } else if (/\bTBD\b/.test(body)) {
    add('WARN', file, 'tbd', '正文含 TBD，确认属于诚实标注而非未填内容');
  }
}

const errors = findings.filter((f) => f.level === 'ERROR');
const warns = findings.filter((f) => f.level === 'WARN');

if (jsonOut) {
  console.log(JSON.stringify({ site, files: files.length, errors, warns }, null, 2));
} else {
  console.log(`\n🔍 lint ${site} — ${files.length} 篇${onlyChanged ? '（本次改动）' : ''}`);
  for (const f of [...errors, ...warns]) {
    const icon = f.level === 'ERROR' ? '❌' : '⚠️';
    console.log(`${icon} ${f.file} [${f.rule}] ${f.msg}`);
  }
  console.log(errors.length || warns.length
    ? `\n结果：${errors.length} ERROR / ${warns.length} WARN`
    : '\n结果：全部通过 ✅');
}

process.exit(errors.length ? 1 : 0);
