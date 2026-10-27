#!/usr/bin/env node
/**
 * devto-publish.mjs — 把 `.agent/backlink-drafts/*.md` 里的草稿发到 dev.to。
 *
 * 背景：外链节奏是「每个合适站点每周 1 条」，但**单平台单账号每周 ≤3 篇**
 * （docs/STRATEGY-外链建设.md 第五节）。所以发稿是「一篇一篇挑着发」，
 * 不是批量灌 —— 这个脚本就是那一步的机械部分：读草稿 → 建/发文章 → 回写状态。
 *
 * 用法：
 *   node scripts/devto-publish.mjs --list            # 看草稿状态（默认动作）
 *   node scripts/devto-publish.mjs --site waterparksimulatorwiki --publish
 *   node scripts/devto-publish.mjs --site X          # 只建草稿（不公开），到 dev.to 网页审一遍
 *
 * 退出码：0 正常；1 校验不过（缺链接/超周配额/找不到草稿）；2 取不到 API key 或接口报错。
 *
 * 铁律：
 *   - API key 只从 `~/.config/devto/api-key` 读，MUST NOT 写进仓库或日志；
 *   - 每周发布数 ≥3 时默认拒绝，确实要发得显式加 `--force`；
 *   - 发完 MUST 立刻 `node scripts/link-check.mjs --write` 实测 rel（脚本会打印提醒）。
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, '.agent', 'backlink-drafts');
const KEY_FILE = path.join(os.homedir(), '.config', 'devto', 'api-key');
const API = 'https://dev.to/api';
const WEEKLY_CAP = 3;

const argv = process.argv.slice(2);
const opt = (n) => (argv.indexOf(n) > -1 ? argv[argv.indexOf(n) + 1] : undefined);
const LIST = argv.includes('--list');
const PUBLISH = argv.includes('--publish');
const FORCE = argv.includes('--force');
const siteArg = opt('--site');

// ---------------------------------------------------------------- 解析

/** 极简 frontmatter：`key: value` 与 `tags: [a, b]` */
function parseDraft(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`${path.basename(file)} 缺 frontmatter`);
  const meta = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    else v = v.replace(/^["']|["']$/g, '');
    meta[kv[1]] = v;
  }
  return { file, meta, body: m[2].trim() };
}

function writeMeta(draft) {
  const raw = fs.readFileSync(draft.file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const lines = m[1].split('\n').map((line) => {
    const kv = line.match(/^([a-zA-Z][\w-]*):/);
    if (kv && Object.hasOwn(draft.meta, kv[1])) {
      const v = draft.meta[kv[1]];
      return `${kv[1]}: ${Array.isArray(v) ? `[${v.join(', ')}]` : (v ?? '')}`;
    }
    return line;
  });
  fs.writeFileSync(draft.file, `---\n${lines.join('\n')}\n---\n\n${draft.body}\n`);
}

function loadDrafts() {
  if (!fs.existsSync(DIR)) throw new Error(`草稿目录不存在：${DIR}`);
  return fs.readdirSync(DIR).filter((f) => f.endsWith('.md') && f !== 'INDEX.md')
    .sort().map((f) => parseDraft(path.join(DIR, f)));
}

/** 正文里指向 targetUrl 的链接数 + 锚文本 */
function linkAudit(body, targetUrl) {
  const origin = new URL(targetUrl).origin;
  const out = [];
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let m;
  while ((m = re.exec(body))) {
    if (m[2].startsWith(origin)) out.push({ anchor: m[1], url: m[2] });
  }
  return out;
}

function weeklyCount(drafts) {
  const cutoff = Date.now() - 7 * 86_400_000;
  return drafts.filter((d) => d.meta.publishedAt && new Date(d.meta.publishedAt).getTime() >= cutoff).length;
}

// ---------------------------------------------------------------- 主流程

const drafts = loadDrafts();

if (LIST || (!siteArg && !PUBLISH)) {
  const done = drafts.filter((d) => d.meta.status === 'published').length;
  console.log(`草稿 ${drafts.length} 篇 | 已发 ${done} | 本周已发 ${weeklyCount(drafts)}/${WEEKLY_CAP}\n`);
  for (const d of drafts) {
    const links = linkAudit(d.body, d.meta.targetUrl).length;
    const mark = d.meta.status === 'published' ? '✅' : '  ';
    console.log(`${mark} ${path.basename(d.file).padEnd(34)} ${d.meta.site.padEnd(26)} links=${links} ${d.meta.publishedAt ?? ''}`);
  }
  process.exit(0);
}

const target = siteArg ? drafts.find((d) => d.meta.site === siteArg) : drafts.find((d) => d.meta.status !== 'published');
if (!target) {
  console.error(siteArg ? `✗ 没有 ${siteArg} 的草稿` : '✗ 没有待发草稿');
  process.exit(1);
}

// 校验：链接数 2–3 条，且都指向本站
const links = linkAudit(target.body, target.meta.targetUrl);
const problems = [];
if (links.length < 2 || links.length > 3) problems.push(`正文指向本站的链接 ${links.length} 条，要求 2–3 条`);
for (const l of links) {
  if (!l.url.startsWith(new URL(target.meta.targetUrl).origin)) problems.push(`链接不属于本站：${l.url}`);
}
if (!target.meta.title || String(target.meta.title).length < 20) problems.push('title 缺失或过短');
if (!Array.isArray(target.meta.tags) || target.meta.tags.length < 1) problems.push('tags 缺失');
const wk = weeklyCount(drafts);
if (PUBLISH && wk >= WEEKLY_CAP && !FORCE) problems.push(`本周已发 ${wk} 篇，达单平台单账号每周 ${WEEKLY_CAP} 篇上限（确实要发加 --force）`);
if (problems.length) {
  console.error(`✗ ${path.basename(target.file)} 校验不过：`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(`→ ${path.basename(target.file)}  ${target.meta.title}`);
console.log(`  链接 ${links.length} 条：${links.map((l) => `"${l.anchor}"`).join(' / ')}`);
console.log(`  tags: ${target.meta.tags.join(', ')}  publish=${PUBLISH}`);

if (!fs.existsSync(KEY_FILE)) {
  console.error(`✗ 找不到 API key：${KEY_FILE}（600 权限，MUST NOT 入库）`);
  process.exit(2);
}
const key = fs.readFileSync(KEY_FILE, 'utf8').trim();

async function api(pathname, init = {}) {
  const res = await fetch(`${API}${pathname}`, {
    ...init,
    headers: { 'api-key': key, 'Content-Type': 'application/json', ...(init.headers ?? {}) },
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { raw: text }; }
  if (!res.ok) throw new Error(`${init.method ?? 'GET'} ${pathname} → ${res.status} ${text.slice(0, 300)}`);
  return json;
}

const payload = {
  article: {
    title: target.meta.title,
    published: false, // 先建草稿；要公开再 PUT
    body_markdown: target.body,
    tags: target.meta.tags.slice(0, 4),
    description: target.meta.description ?? '',
  },
};

let article;
try {
  article = await api('/articles', { method: 'POST', body: JSON.stringify(payload) });
} catch (e) {
  console.error(`✗ 建草稿失败：${e.message}`);
  process.exit(2);
}
console.log(`✓ 草稿已建：id=${article.id}（未公开）`);

if (PUBLISH) {
  let ok = false;
  for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
    try {
      article = await api(`/articles/${article.id}`, {
        method: 'PUT', body: JSON.stringify({ article: { published: true } }),
      });
      ok = true;
    } catch (e) {
      console.error(`  发布第 ${attempt} 次失败：${e.message}`);
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  if (!ok) {
    console.error('✗ 发布失败（草稿仍在 dev.to，可去网页手动发）');
    process.exit(2);
  }
  console.log(`✓ 已发布：${article.url}`);
  target.meta.status = 'published';
  target.meta.devtoId = String(article.id);
  target.meta.devtoUrl = article.url;
  target.meta.publishedAt = new Date().toISOString();
} else {
  target.meta.status = 'draft-created';
  target.meta.devtoId = String(article.id);
  console.log('  去 https://dev.to/new 或后台审一遍，再跑一次加 --publish 也可（会新建一篇，别重复）。');
}
writeMeta(target);

console.log('\n下一步（MUST 做）：');
console.log(`  1. 外链台账追加一行（site=${target.meta.site}，sourceUrl=${target.meta.devtoUrl ?? '待发布后填'}）`);
console.log('  2. node scripts/link-check.mjs --write    # rel 只认实测');
console.log('  3. node scripts/backlink-queue.mjs --write');
