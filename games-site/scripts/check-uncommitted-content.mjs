#!/usr/bin/env node
/**
 * check-uncommitted-content.mjs — 找「已经上线、但不在 git 里」的内容。
 *
 * 由来：2026-10-27 04:00 那轮扩词写完 4 篇、QA 过了、也部署了，但**没 commit**，
 * 4 篇稿子在工作区躺了一天，直到主 Agent 手动补提交。期间线上内容在 git 里查不到，
 * 任何一次 `git checkout` / 回滚都会让线上与仓库分叉。
 *
 * 判定：站点目录下有未提交改动（`git status --porcelain`），且该站最近在
 * `.agent/deploy-log.jsonl` 里有成功部署记录 → 标「已部署未提交」（🔴）；
 * 没有部署记录 → 只是普通未提交改动（🟡）。
 *
 * 用法：
 *   node scripts/check-uncommitted-content.mjs              # 全站
 *   node scripts/check-uncommitted-content.mjs <site>...    # 只看指定站
 *   node scripts/check-uncommitted-content.mjs --json
 *
 * 退出码：0 干净；1 有「已部署未提交」；2 有未提交改动但未部署。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const targets = argv.filter((a) => !a.startsWith('--'));

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' });
}

/** deploy-log 里每个站最后一次成功部署的时间。 */
function lastDeployBySite() {
  const p = path.join(ROOT, '.agent', 'deploy-log.jsonl');
  const out = new Map();
  if (!fs.existsSync(p)) return out;
  for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try {
      const e = JSON.parse(line);
      if (e.status !== 'ok' || !e.site) continue;
      out.set(e.site, e.ts);
    } catch { /* 坏行忽略 */ }
  }
  return out;
}

const sites = targets.length
  ? targets
  : fs.readdirSync(ROOT).filter((d) => d.endsWith('wiki') && fs.existsSync(path.join(ROOT, d, 'content')));

const deploys = lastDeployBySite();
const dirty = [];
const deployedUncommitted = [];

for (const site of sites) {
  let status;
  try {
    status = git(['status', '--porcelain', '--', site]);
  } catch {
    continue;
  }
  const files = status.split('\n').map((l) => l.trim()).filter(Boolean);
  if (!files.length) continue;

  const deployTs = deploys.get(site);
  const entry = { site, files: files.slice(0, 8), fileCount: files.length, lastDeploy: deployTs ?? null };
  dirty.push(entry);
  if (deployTs) deployedUncommitted.push(entry);
}

if (asJson) {
  console.log(JSON.stringify({ dirty, deployedUncommitted }, null, 2));
} else {
  if (!dirty.length) {
    console.log('✅ 所有站点的工作区都干净：线上内容与 git 一致');
  } else {
    if (deployedUncommitted.length) {
      console.log(`🔴 已部署但未提交（${deployedUncommitted.length} 站）—— 线上内容不在 git 里，MUST 立即提交：`);
      for (const d of deployedUncommitted) {
        console.log(`  ${d.site}  最近部署 ${d.lastDeploy}`);
        for (const f of d.files) console.log(`      ${f}`);
        if (d.fileCount > d.files.length) console.log(`      …其余 ${d.fileCount - d.files.length} 个文件`);
      }
    }
    const plain = dirty.filter((d) => !d.lastDeploy);
    if (plain.length) {
      console.log(`\n🟡 未提交改动（未部署过，${plain.length} 站）：`);
      for (const d of plain) console.log(`  ${d.site}  ${d.fileCount} 个文件`);
    }
  }
}

process.exit(deployedUncommitted.length ? 1 : dirty.length ? 2 : 0);
