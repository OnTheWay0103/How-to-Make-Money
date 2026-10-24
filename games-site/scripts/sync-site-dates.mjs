#!/usr/bin/env node
/**
 * 把每个站点的建站日期（该目录在 git 里的首个提交日）写进
 * dashboard/lib/sites.ts 的 createdAt 字段。
 *
 * 用法：
 *   node scripts/sync-site-dates.mjs            # 写入
 *   node scripts/sync-site-dates.mjs --dry-run  # 只看差异
 *
 * 为什么不用构建时跑 git：Vercel 的构建环境没有仓库历史，
 * 所以日期必须提前固化到注册表里。站点增删或首次提交被改写后重跑一次即可。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '..');
const dryRun = process.argv.includes('--dry-run');
const dashPath = path.join(ROOT, 'dashboard', 'lib', 'sites.ts');

const dirs = fs
  .readdirSync(ROOT)
  .filter((d) => d.endsWith('wiki') && fs.existsSync(path.join(ROOT, d, 'lib', 'seo-config.ts')));

// gaId → { site, date }
const byGa = new Map();
for (const dir of dirs) {
  const cfg = fs.readFileSync(path.join(ROOT, dir, 'lib', 'seo-config.ts'), 'utf8');
  const ga = (cfg.match(/googleAnalyticsId:\s*['"](G-[A-Z0-9]+)['"]/) || [])[1];
  if (!ga) continue;
  const date = execFileSync(
    'git',
    ['log', '--reverse', '--format=%ad', '--date=short', '--', dir],
    { cwd: ROOT, encoding: 'utf8' },
  )
    .trim()
    .split('\n')[0];
  if (date) byGa.set(ga, date);
}

let src = fs.readFileSync(dashPath, 'utf8');
let changed = 0;
const missing = [];

for (const [ga, date] of byGa) {
  const idx = src.indexOf(`gaId: '${ga}'`);
  if (idx === -1) {
    missing.push(ga);
    continue;
  }
  const lineStart = src.lastIndexOf('\n', idx) + 1;
  const lineEnd = src.indexOf('\n', idx) + 1;
  const indent = src.slice(lineStart, idx).match(/^\s*/)[0];
  const nextEnd = src.indexOf('\n', lineEnd);
  const nextLine = src.slice(lineEnd, nextEnd);

  if (/^\s*createdAt:/.test(nextLine)) {
    const replaced = nextLine.replace(/createdAt: '[^']*'/, `createdAt: '${date}'`);
    if (replaced !== nextLine) {
      src = src.slice(0, lineEnd) + replaced + src.slice(nextEnd);
      console.log(`~ ${ga} → ${date}`);
      changed++;
    }
  } else {
    src = src.slice(0, lineEnd) + `${indent}createdAt: '${date}',\n` + src.slice(lineEnd);
    console.log(`+ ${ga} → ${date}`);
    changed++;
  }
}

if (missing.length) console.warn('⚠️ dashboard 里找不到这些 GA ID：', missing.join(', '));
if (dryRun) {
  console.log(`\nDRY-RUN：将改动 ${changed} 处`);
} else if (changed) {
  fs.writeFileSync(dashPath, src);
  console.log(`\n完成：${changed} 处已写入 ${path.relative(ROOT, dashPath)}`);
} else {
  console.log('\n无需改动');
}
