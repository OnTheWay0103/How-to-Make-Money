#!/usr/bin/env node
/**
 * link-check.mjs — 外链台账的「实测」步骤：状态 + rel 属性。
 *
 * 为什么单独做这个：docs/STRATEGY-外链建设.md 的铁律是
 *   「rel 必须实测，平台宣传的 dofollow 不算」，
 * 而实测本身是机械劳动 —— 适合脚本，不适合人肉。候选筛选和文案不能自动化，
 * 这两步（死链检查、rel 判定）可以。
 *
 * 台账格式（.agent/link-building-log.jsonl，每行一条外链）：
 *   { "date":"2026-10-27", "site":"nivalisnightswiki",
 *     "targetUrl":"https://nivalisnightswiki.vercel.app/guides/beginner-guide",
 *     "sourceUrl":"https://telegra.ph/xxx", "sourceType":"A/telegraph",
 *     "rel":"dofollow", "anchor":"Nivalis Night beginner guide",
 *     "status":"live", "recheckAt":"2026-11-26", "lastSeenOk":"2026-10-27" }
 *
 * 用法：
 *   node scripts/link-check.mjs                 # 全部复查
 *   node scripts/link-check.mjs --site <dir>    # 只查某站
 *   node scripts/link-check.mjs --due            # 只查已过 recheckAt 的
 *   node scripts/link-check.mjs --write          # 把 status/rel/lastSeenOk 写回台账
 *
 * 判定：
 *   source 页面 404/410              → status = dead
 *   页面在但找不到 targetUrl         → status = missing（链接被删，站还在）
 *   找到且 <a> 无 rel 或 rel 不含 nofollow/ugc/sponsored → dofollow
 *   找到且 rel 含 nofollow/ugc/sponsored → 按原值记（nofollow / ugc / sponsored）
 *
 * ⚠️ 本机 DNS 把部分域名污染到错误 IP，直接 curl 会超时误判 ——
 *    这里和前几个脚本一样，先 dig @1.1.1.1 取真实 IP 再 curl --resolve。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LEDGER = path.join(ROOT, '.agent', 'link-building-log.jsonl');
const argv = process.argv.slice(2);
const WRITE = argv.includes('--write');
const DUE_ONLY = argv.includes('--due');
const siteFilter = argv.includes('--site') ? argv[argv.indexOf('--site') + 1] : null;
const TODAY = new Date().toISOString().slice(0, 10);

function realIp(host) {
  try {
    return execFileSync('dig', ['@1.1.1.1', '+short', host, 'A'], { encoding: 'utf8', timeout: 10000 })
      .split('\n').map((s) => s.trim()).find((s) => /^\d+\.\d+\.\d+\.\d+$/.test(s)) ?? null;
  } catch {
    return null;
  }
}

/** 取页面 HTML；返回 { code, html }。code = 'DNS_FAIL' | 'TIMEOUT' | 数字 */
function fetchPage(url) {
  let u;
  try { u = new URL(url); } catch { return { code: 'BAD_URL', html: '' }; }
  const ip = realIp(u.hostname);
  if (!ip) return { code: 'DNS_FAIL', html: '' };
  try {
    const html = execFileSync(
      'curl',
      ['-sL', '-m', '25', '--resolve', `${u.hostname}:443:${ip}`, '-w', '\n%{http_code}', url],
      { encoding: 'utf8', timeout: 30000, maxBuffer: 8 * 1024 * 1024 },
    );
    const idx = html.lastIndexOf('\n');
    return { code: Number(html.slice(idx + 1)) || 0, html: html.slice(0, idx) };
  } catch {
    return { code: 'TIMEOUT', html: '' };
  }
}

/** 找出所有指向 targetUrl（忽略协议/结尾斜杠/大小写）的 <a>，返回 rel 集合 */
function relsFor(html, targetUrl, baseUrl) {
  const norm = (s) => s.replace(/^https?:\/\//, '').replace(/\/+$/, '').toLowerCase();
  const target = norm(targetUrl);
  const rels = [];
  const re = /<a\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    const raw = (attrs.match(/\bhref\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    if (!raw) continue;
    // 站内相对链接（如 /guides/x）必须按 source 页的 origin 展开再比，否则永远匹配不上
    let href = raw;
    try { href = new URL(raw, baseUrl).href; } catch { /* 保持原样 */ }
    if (!norm(href).startsWith(target)) continue;
    const rel = (attrs.match(/\brel\s*=\s*["']([^"']*)["']/i) || [])[1] || '';
    rels.push(rel.trim().toLowerCase());
  }
  return rels;
}

function classify(rels) {
  if (!rels.length) return null;
  const joined = rels.join(' ');
  if (/\bsponsored\b/.test(joined)) return 'sponsored';
  if (/\bugc\b/.test(joined)) return 'ugc';
  if (/\bnofollow\b/.test(joined)) return 'nofollow';
  return 'dofollow';
}

if (!fs.existsSync(LEDGER)) {
  console.error(`台账不存在：${LEDGER}`);
  console.error('先按 docs/STRATEGY-外链建设.md 第五节建第一条（每行一条外链，字段见脚本头部注释）。');
  process.exit(2);
}

const lines = fs.readFileSync(LEDGER, 'utf8').split('\n').filter((l) => l.trim());
const out = [];
const tally = { dofollow: 0, nofollow: 0, ugc: 0, sponsored: 0, dead: 0, missing: 0, error: 0, skipped: 0 };
let checked = 0;

for (const line of lines) {
  let e;
  try { e = JSON.parse(line); } catch { out.push(line); continue; }

  const due = !e.recheckAt || e.recheckAt <= TODAY;
  if ((siteFilter && e.site !== siteFilter) || (DUE_ONLY && !due)) { out.push(JSON.stringify(e)); tally.skipped++; continue; }

  const page = fetchPage(e.sourceUrl);
  if (page.code === 'DNS_FAIL' || page.code === 'TIMEOUT' || page.code === 0) {
    console.log(`⚠️  ${e.site}  ${e.sourceUrl}  取不到页面（${page.code}）—— 不改状态`);
    tally.error++; out.push(line); continue;
  }
  if (page.code === 404 || page.code === 410) {
    e.status = 'dead'; e.lastSeenOk = e.lastSeenOk ?? null;
    console.log(`❌ ${e.site}  ${e.sourceUrl}  ${page.code} → dead`);
    tally.dead++; checked++; out.push(JSON.stringify(e)); continue;
  }

  const rel = classify(relsFor(page.html, e.targetUrl, e.sourceUrl));
  checked++;
  if (!rel) {
    e.status = 'missing';
    console.log(`❌ ${e.site}  ${e.sourceUrl}  页面在（${page.code}）但找不到指向 ${e.targetUrl} 的链接 → missing`);
    tally.missing++; out.push(JSON.stringify(e)); continue;
  }
  e.rel = rel; e.status = 'live'; e.lastSeenOk = TODAY;
  console.log(`✅ ${e.site}  ${e.sourceUrl}  rel=${rel} → live`);
  tally[rel]++; out.push(JSON.stringify(e));
}

console.log('');
console.log(`复查 ${checked} 条 | dofollow ${tally.dofollow} / nofollow ${tally.nofollow} / ugc ${tally.ugc} / sponsored ${tally.sponsored} / dead ${tally.dead} / missing ${tally.missing} / 取不到 ${tally.error} / 跳过 ${tally.skipped}`);

if (WRITE) {
  fs.writeFileSync(LEDGER, out.join('\n') + '\n');
  console.log(`💾 已写回 ${LEDGER}`);
} else {
  console.log('（未写回；加 --write 落盘）');
}
