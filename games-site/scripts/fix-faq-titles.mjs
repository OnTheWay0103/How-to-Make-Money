#!/usr/bin/env node
/**
 * fix-faq-titles.mjs — 把各站 `/faq` 页的 metadata.title 补到 40–60 字符。
 *
 * 由来（2026-10-27）：REKA 的 /faq 与 faq 攻略页重叠，查下去发现更大的问题 ——
 * 45/48 站的 `app/faq/page.tsx` 里写的是 `title: 'FAQ'`，线上渲染成
 * 「FAQ · REKA Game Wiki」（20 字符），既低于 CLAUDE.md 的 title 40–60 规格，
 * 也没有任何游戏名 —— 而 title 是最强的页面信号之一。
 *
 * 口径：
 *   - 只在 40–60 字符之外时才改；已经合规的站原样跳过（幂等）
 *   - 游戏名从 `lib/seo-config.ts` 的 SITE_CONFIG.name 去掉 " Game Wiki"/" Wiki" 后缀得到
 *   - 依次尝试多个句式，取第一个落在 40–60 的；都落不进去就报出来，MUST NOT 硬塞
 *   - 只写「发行信息类」措辞（Release / Price / Platforms），MUST NOT 声称游戏有它没有的
 *     模式（例如 REKA 是单机，标题里不能出现 Co-op）
 *
 * 用法：
 *   node scripts/fix-faq-titles.mjs            # 预览 diff
 *   node scripts/fix-faq-titles.mjs --apply    # 写入
 *   node scripts/fix-faq-titles.mjs --apply --pending .agent/pending-deploys.md
 *                                              # 同时把改过的站写进待部署清单
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const APPLY = argv.includes('--apply');
const PENDING = (() => {
  const i = argv.indexOf('--pending');
  return i > -1 ? argv[i + 1] : null;
})();

const MIN = 40;
const MAX = 60;

function siteDirs() {
  return fs.readdirSync(ROOT)
    .filter((d) => d.endsWith('wiki') && fs.existsSync(path.join(ROOT, d, 'app', 'faq', 'page.tsx')));
}

/** 个别站 SITE_CONFIG.name 用的是简称，标题里要写官方全名。 */
const GAME_OVERRIDES = {
  // 站点名只写系列内的一层（Aincrad），游戏官方名是 Echoes of Aincrad
  aincradwiki: 'Echoes of Aincrad',
};

function gameName(dir) {
  if (GAME_OVERRIDES[dir]) return GAME_OVERRIDES[dir];
  try {
    const cfg = fs.readFileSync(path.join(ROOT, dir, 'lib', 'seo-config.ts'), 'utf8');
    // 只在 SITE_CONFIG 块里找 name：从 `export const SITE_CONFIG` 往后切，
    // 别撞上文件头注释里的 `SITE_CONFIG.url` 或更早出现的别的 name 字段
    const i = cfg.indexOf('export const SITE_CONFIG');
    const block = i === -1 ? cfg : cfg.slice(i);
    // 引号要成对匹配（回引用），否则 "Vahrin's Call Wiki" 会被撇号截成 Vahrin
    const name = (block.match(/^\s*name:\s*(['"])(.*?)\1/m) || [])[2] || dir;
    return name.replace(/\s*(Game\s+)?Wiki\s*$/i, '').trim();
  } catch {
    return dir.replace(/wiki$/, '');
  }
}

// 标题里能写的主题，必须页面正文真的答到了 —— 否则就是用标题承诺不存在的答案。
// need = 该句式要求的主题，全部命中才允许用。
const CANDIDATES = [
  { need: ['release', 'price', 'platform'], t: (g) => `${g} FAQ: Quick Answers on Release, Price & Platforms` },
  { need: ['release', 'price'], t: (g) => `${g} FAQ: Quick Answers on Release Date and Price` },
  { need: ['release', 'platform'], t: (g) => `${g} FAQ: Quick Answers on Release Date and Platforms` },
  { need: ['price', 'platform'], t: (g) => `${g} FAQ: Quick Answers on Price and Platforms` },
  { need: ['release'], t: (g) => `${g} FAQ: Quick Answers on the Release Date` },
  { need: [], t: (g) => `${g} FAQ: Quick Answers for New Players` },
  { need: ['release'], t: (g) => `${g} — Frequently Asked Questions and Release Details` },
  { need: [], t: (g) => `${g} FAQ — Frequently Asked Questions and Answers` },
  { need: [], t: (g) => `${g} — Frequently Asked Questions` },
];

/** 页面自己提到了哪些主题 */
function topicsOf(src) {
  const s = src.toLowerCase();
  const have = new Set();
  if (/release/.test(s)) have.add('release');
  if (/price/.test(s)) have.add('price');
  if (/platform/.test(s)) have.add('platform');
  return have;
}

function currentTitle(src) {
  // 不要求 metadata 块以 "\n};" 结尾 —— welcomeelderfieldwiki 的那份是
  // `description: '...',};` 收在同一行；这里只锚在 `export const metadata ... {`
  // 之后的第一处 title，够用且不会被别处的 title 抢走。
  const start = src.search(/export const metadata:\s*Metadata\s*=\s*\{/);
  if (start === -1) return null;
  const m = src.slice(start).match(/title:\s*(['"])(.*?)\1/);
  return m ? m[2] : null;
}

/** 标题超长时优先「保留原有信息、砍掉尾部从句」，实在不行才换句式。 */
function trimLongTitle(title) {
  const base = title.split(/\s+[—–-]\s+/)[0];       // 「Silver Pines FAQ」这种主干
  const clauses = title.split(/,\s*/);
  for (let i = clauses.length; i >= 1; i--) {
    const t = clauses.slice(0, i).join(', ');
    if (t.length >= MIN && t.length <= MAX) return t;
  }
  // 主干 + 一个收尾词，凑进区间
  for (const tail of [' FAQ', ' FAQ — Quick Answers', ' FAQ and Release Details']) {
    const t = `${base}${tail}`;
    if (t.length >= MIN && t.length <= MAX) return t;
  }
  return null;
}

const changed = [];
const skipped = [];
const failed = [];

for (const dir of siteDirs()) {
  const file = path.join(ROOT, dir, 'app', 'faq', 'page.tsx');
  const src = fs.readFileSync(file, 'utf8');
  const title = currentTitle(src);

  if (title == null) {
    failed.push({ dir, why: '找不到 metadata.title' });
    continue;
  }
  if (title.length >= MIN && title.length <= MAX) {
    skipped.push({ dir, title, why: '已合规' });
    continue;
  }

  const g = gameName(dir);
  const have = topicsOf(src);
  // 超长的先试着砍尾（保住原有信息量），再把句式候选接上：
  // 先按「主题真的答到了」过滤，再按 40–60 过滤
  const pick = (title.length > MAX ? trimLongTitle(title) : null)
    ?? CANDIDATES
      .filter((c) => c.need.every((k) => have.has(k)))
      .map((c) => c.t(g))
      .find((t) => t.length >= MIN && t.length <= MAX);
  if (!pick) {
    failed.push({ dir, why: `没有句式能落在 ${MIN}–${MAX}（游戏名「${g}」长度 ${g.length}）` });
    continue;
  }

  // 引号选择：标题里有撇号就改用双引号（"Vahrin's Call"），两种都有才转义。
  // 2026-10-27 教训：撇号原样写进单引号字符串，源码直接语法断掉。
  const q = !pick.includes("'") ? "'" : !pick.includes('"') ? '"' : "'";
  const body = pick.replaceAll(q, `\\${q}`);
  const next = src.replace(
    /(export const metadata:\s*Metadata\s*=\s*\{[\s\S]*?title:\s*)(['"])(.*?)\2/,
    (_m, head) => `${head}${q}${body}${q}`,
  );
  if (next === src) {
    failed.push({ dir, why: '替换未生效（正则没匹配到）' });
    continue;
  }
  // 写完再读一遍，确认 title 能原样读回来（防转义/引号类事故）
  if (currentTitle(next) !== pick) {
    failed.push({ dir, why: `写入后校验失败（读回「${currentTitle(next)}」）` });
    continue;
  }

  changed.push({ dir, from: title, to: pick, len: pick.length });
  if (APPLY) fs.writeFileSync(file, next);
}

console.log(`${APPLY ? '写入' : '预览'} — 需改 ${changed.length} 站 / 已合规 ${skipped.length} 站 / 失败 ${failed.length} 站\n`);
for (const c of changed) console.log(`  ${c.dir.padEnd(28)} "${c.from}" (${c.from.length})  →  "${c.to}" (${c.len})`);
for (const s of skipped) console.log(`  · ${s.dir.padEnd(26)} 已合规 "${s.title}" (${s.title.length})`);
for (const f of failed) console.log(`  ❌ ${f.dir}: ${f.why}`);

if (APPLY && PENDING) {
  const p = path.join(ROOT, PENDING);
  const old = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
  const header = '# 待部署清单\n\n> 由脚本写入。coordinator 每一轮开工前先跑 `scripts/deploy-pending.sh`（或逐站 `./deploy-wiki-site.sh <site>`），\n> 成功的行从本文件删掉。存在的理由：Vercel 免费版 100 次部署/日（UTC 日切 = 北京 08:00），\n> 大范围改动（如 48 站 title 修订）必须跨日铺。\n';

  // 清单来源用 git 状态，而不是本轮 changed[]：重跑脚本时 changed 会是空的，
  // 但已经改过、还没部署的站仍然必须在清单里
  let dirty = [];
  try {
    dirty = execSync(`git -C ${JSON.stringify(ROOT)} status --porcelain`, { encoding: 'utf8' })
      .split('\n')
      .map((l) => l.match(/^.{2}\s*\S*?([^/\s]+)\/app\/faq\/page\.tsx$/))
      .filter(Boolean)
      .map((m) => m[1]);
  } catch { /* 不是 git 仓库就只保留已有条目 */ }

  const existing = old.match(/^-\s*\S+.*$/gm) || [];
  const known = new Set(existing.map((l) => l.replace(/^-\s*/, '').split(/\s+/)[0]));
  const add = dirty.filter((d) => !known.has(d))
    .map((d) => `- ${d}  # ${new Date().toISOString().slice(0, 10)} FAQ title`);

  const head = old ? old.replace(/^-\s*\S+.*$\n?/gm, '').trimEnd() : header.trimEnd();
  fs.writeFileSync(p, `${head}\n\n${[...existing, ...add].join('\n')}\n`);
  console.log(`\n▶ 待部署清单：新增 ${add.length} 站，共 ${existing.length + add.length} 站（${PENDING}）`);
}

process.exit(failed.length ? 1 : 0);
