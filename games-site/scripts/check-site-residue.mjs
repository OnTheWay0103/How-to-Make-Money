#!/usr/bin/env node
/**
 * check-site-residue.mjs — 站点模板残留扫描（部署前置门禁）。
 *
 * 由来：2026-10-26 建 rekawiki / gonefishingwiki 时，模板 terms 页把发行商写成
 * 硬编码的 "Digital Vortex Entertainment"（父级游戏的值，不是 {{PUBLISHER}} token），
 * new-site.mjs 只查 `{{UPPER_SNAKE}}` 占位符，查不到这类**已替换但值是别人的**残留，
 * 结果两站带着别家发行商名上线，被 QA 抓出来。
 *
 * 所以这里查两类东西：
 *   1. 未替换的占位符 `{{UPPER_SNAKE}}`（JSX 的 style={{...}} 是小写/表达式，不会命中）
 *   2. 模板里遗留的**硬编码字面量**（DENY 表，随发现的问题往上加）
 *
 * 用法：
 *   node scripts/check-site-residue.mjs <site-dir>
 *   node scripts/check-site-residue.mjs --all      # 全站
 *
 * 退出码：有 ERROR → 1；干净 → 0。
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

// 模板里出现过的、不该出现在**别的游戏**站上的字面量。
// 加一条 = 一类"新站带着别人身份上线"的事故。
// `own` 标明该字面量属于本站自己的哪个字段：站点自己就是这个值时不报警
// （模板源自 dreadmoorwiki，DREADMOOR 的发行商本就是 Digital Vortex）。
const DENY = [
  { re: /Digital\s+Vortex/i, own: 'publisher', why: '模板发行商的硬编码值，应替换为本站发行商' },
  { re: /lorem\s+ipsum/i, why: '占位正文' },
];

// 例外：站点自己/源站就是这个值。每加一条都要写清为什么。
const ALLOW = {
  // 模板源站（templates/wiki-base 由它抽出），DREADMOOR 的发行商本来就是 Digital Vortex
  // Entertainment；且它的 lib/seo-config.ts 没有 developer/publisher 字段可自动比对。
  dreadmoorwiki: [/Digital\s+Vortex/i],
};

// 从 lib/seo-config.ts 读站点自己的 name / developer / publisher；
// 老站没有这两个字段时退回 lib/schema.ts 里的 publisher.name / author.name
function ownIdentity(dir) {
  const out = {};
  const p = path.join(dir, 'lib', 'seo-config.ts');
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const pick = (key) => {
      const m = text.match(new RegExp(`\\b${key}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`));
      return m ? m[1] : '';
    };
    out.name = pick('name');
    out.developer = pick('developer');
    out.publisher = pick('publisher');
  }
  const s = path.join(dir, 'lib', 'schema.ts');
  if (fs.existsSync(s) && (!out.developer || !out.publisher)) {
    const text = fs.readFileSync(s, 'utf8');
    // schema 里 publisher / author 是对象，取其中的 name
    const block = (key) => {
      const m = text.match(new RegExp(`\\b${key}\\s*:\\s*\\{[\\s\\S]{0,200}?name\\s*:\\s*['"\`]([^'"\`]+)['"\`]`));
      return m ? m[1] : '';
    };
    out.publisher = out.publisher || block('publisher');
    out.developer = out.developer || block('author');
  }
  return out;
}

// developer === publisher（自研自发）时，模板并列式会写成 "X / X"、"X, X"、
// "developed by X and published by X"（2026-10-26 GONE Fishing 教训）。
// 只认站点自己的公司名，避免把 "House Flipper, House Flipper 2" 这类列表误报。
function duplicateIdentityHits(text, own) {
  const names = [...new Set([own.developer, own.publisher].filter(Boolean))];
  const hits = [];
  if (!names.length) return hits;
  if (names.length > 1) return hits; // 开发/发行不是同一家，不会出现 "X / X"
  const name = names[0];
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`${escaped}\\s*(?:\\/|,|or|and published by)\\s*${escaped}`);
  text.split('\n').forEach((line, i) => {
    if (re.test(line)) hits.push({ line: i + 1, text: line.trim().slice(0, 100) });
  });
  return hits;
}

const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.mjs', '.md', '.json', '.css', '.html', '.txt']);
const SKIP_DIRS = new Set(['node_modules', '.next', '.vercel', '.git', 'public', '.agent']);

function scanSite(site) {
  const dir = path.join(ROOT, site);
  const findings = [];
  if (!fs.existsSync(dir)) return [{ file: site, level: 'ERROR', msg: '站点目录不存在' }];
  const own = ownIdentity(dir);

  const walk = (d) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      if (SKIP_DIRS.has(entry.name)) continue;
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (!TEXT_EXT.has(path.extname(entry.name))) continue;
      const rel = path.relative(dir, full);
      const text = fs.readFileSync(full, 'utf8');

      const tokens = [...new Set([...text.matchAll(/\{\{[A-Z0-9_]+\}\}/g)].map((m) => m[0]))];
      if (tokens.length) {
        findings.push({ file: `${site}/${rel}`, level: 'ERROR', msg: `未替换的占位符: ${tokens.join(', ')}` });
      }

      for (const d of DENY) {
        // 站点自己就是这个值 → 不是残留（如 DREADMOOR 的发行商确实叫这个）
        if (d.own && own[d.own] && d.re.test(own[d.own])) continue;
        const allow = ALLOW[site] || [];
        if (allow.some((re) => re.source === d.re.source)) continue;
        text.split('\n').forEach((line, i) => {
          if (d.re.test(line)) {
            findings.push({ file: `${site}/${rel}:${i + 1}`, level: 'ERROR', msg: `${d.why} → ${line.trim().slice(0, 100)}` });
          }
        });
      }

      for (const hit of duplicateIdentityHits(text, own)) {
        findings.push({
          file: `${site}/${rel}:${hit.line}`,
          level: 'ERROR',
          msg: `同一公司名并列重复（developer === publisher 时未折叠）→ ${hit.text}`,
        });
      }
    }
  };
  walk(dir);
  return findings;
}

function listSites() {
  return fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory() && fs.existsSync(path.join(ROOT, e.name, 'lib', 'seo-config.ts')))
    .map((e) => e.name);
}

const args = process.argv.slice(2);
const all = args.includes('--all');
const site = args.find((a) => !a.startsWith('--'));

if (!all && !site) {
  console.error('用法: node scripts/check-site-residue.mjs <site-dir> | --all');
  process.exit(2);
}

const sites = all ? listSites() : [site];
const findings = sites.flatMap(scanSite);
const errors = findings.filter((f) => f.level === 'ERROR');

if (errors.length) {
  console.log(`\n❌ 模板残留 ${errors.length} 处：`);
  for (const f of errors) console.log(`  ${f.file}  ${f.msg}`);
  process.exit(1);
}

console.log(`✓ ${sites.join(', ')} 无模板残留`);
