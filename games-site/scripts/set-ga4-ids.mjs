#!/usr/bin/env node
/**
 * 把 GA4 的 Measurement ID（G-XXXX）和 Property ID（纯数字）注入站点，
 * 同时维护 dashboard 的站点注册表。
 *
 * 用法：
 *   node scripts/set-ga4-ids.mjs .agent/ga4-ids.json            # 执行
 *   node scripts/set-ga4-ids.mjs .agent/ga4-ids.json --dry-run  # 只看改动
 *
 * 输入文件格式：
 *   {
 *     "anomalypresidentwiki": { "gaId": "G-XXXXXXXXXX", "propertyId": "123456789" },
 *     "bombananawiki":        { "gaId": "G-YYYYYYYYYY", "propertyId": "123456790" }
 *   }
 *
 * 做三件事：
 *   1. <site>/lib/seo-config.ts 的 googleAnalyticsId 改成新 ID
 *   2. dashboard/lib/sites.ts 里同名站点条目更新 propertyId / gaId
 *   3. dashboard 里没有的站点，追加条目
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const file = args.find((a) => !a.startsWith('--'));

if (!file) {
  console.error('用法: node scripts/set-ga4-ids.mjs <ids.json> [--dry-run]');
  process.exit(1);
}

const input = JSON.parse(fs.readFileSync(path.resolve(ROOT, file), 'utf8'));
const GA_RE = /^G-[A-Z0-9]{6,}$/;
const PROP_RE = /^\d+$/;

const problems = [];
for (const [site, v] of Object.entries(input)) {
  if (!fs.existsSync(path.join(ROOT, site, 'lib', 'seo-config.ts'))) {
    problems.push(`${site}: 找不到 lib/seo-config.ts`);
    continue;
  }
  if (!GA_RE.test(v.gaId || '')) problems.push(`${site}: gaId 格式不对（${v.gaId}）`);
  if (!PROP_RE.test(String(v.propertyId || ''))) problems.push(`${site}: propertyId 必须是纯数字（${v.propertyId}）`);
}
if (problems.length) {
  console.error('❌ 输入有问题，未做任何修改：');
  problems.forEach((p) => console.error('  -', p));
  process.exit(1);
}

let changed = 0;

// ---------- 1. 站点 seo-config ----------
for (const [site, v] of Object.entries(input)) {
  const p = path.join(ROOT, site, 'lib', 'seo-config.ts');
  const src = fs.readFileSync(p, 'utf8');
  const next = src.replace(/googleAnalyticsId:\s*'[^']*'/, `googleAnalyticsId: '${v.gaId}'`);
  if (next === src) {
    console.log(`- ${site}: googleAnalyticsId 已是 ${v.gaId} 或未找到字段，跳过`);
    continue;
  }
  console.log(`${dryRun ? '~' : '✓'} ${site}: googleAnalyticsId → ${v.gaId}`);
  if (!dryRun) fs.writeFileSync(p, next);
  changed++;
}

// ---------- 2. dashboard 注册表 ----------
const dashPath = path.join(ROOT, 'dashboard', 'lib', 'sites.ts');
let dash = fs.readFileSync(dashPath, 'utf8');

// 站点目录 → SITE_CONFIG.name
function siteName(site) {
  const cfg = fs.readFileSync(path.join(ROOT, site, 'lib', 'seo-config.ts'), 'utf8');
  const m = cfg.match(/name:\s*'([^']+)'/) || cfg.match(/name:\s*"([^"]+)"/);
  return m ? m[1] : null;
}

const appended = [];
for (const [site, v] of Object.entries(input)) {
  const name = siteName(site);
  if (!name) {
    console.warn(`⚠️ ${site}: 读不到 SITE_CONFIG.name，dashboard 跳过`);
    continue;
  }
  // 定位该 name 的条目块
  const idx = dash.indexOf(`name: '${name}'`) >= 0
    ? dash.indexOf(`name: '${name}'`)
    : dash.indexOf(`name: "${name}"`);
  if (idx === -1) {
    appended.push({ name, ...v });
    console.log(`${dryRun ? '~' : '+'} dashboard: 新增 ${name}`);
    continue;
  }
  // 条目块结束于下一个 "}," —— 从 name 往后找
  const end = dash.indexOf('},', idx);
  const block = dash.slice(idx, end);
  const newBlock = block
    .replace(/propertyId:\s*'[^']*'/, `propertyId: '${v.propertyId}'`)
    .replace(/gaId:\s*'[^']*'/, `gaId: '${v.gaId}'`);
  if (newBlock === block) {
    console.log(`- dashboard: ${name} 无需改动`);
    continue;
  }
  dash = dash.slice(0, idx) + newBlock + dash.slice(end);
  console.log(`${dryRun ? '~' : '✓'} dashboard: ${name} → ${v.gaId} / ${v.propertyId}`);
  changed++;
}

if (appended.length) {
  const entries = appended
    .map((a) => `  {\n    name: '${a.name}',\n    propertyId: '${a.propertyId}',\n    gaId: '${a.gaId}',\n  },`)
    .join('\n');
  const close = dash.lastIndexOf('];');
  dash = dash.slice(0, close) + entries + '\n' + dash.slice(close);
  changed += appended.length;
}

if (!dryRun && changed) fs.writeFileSync(dashPath, dash);

console.log(`\n${dryRun ? 'DRY-RUN' : '完成'}：${changed} 处改动`);
if (!dryRun && changed) {
  console.log('下一步：git add -A && git commit，然后按站批量部署（每站一次）');
}
