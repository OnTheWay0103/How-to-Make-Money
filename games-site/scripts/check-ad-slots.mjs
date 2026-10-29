#!/usr/bin/env node
/**
 * Ad-slot coverage check — the machine half of a rule that kept getting missed.
 *
 * History (2026-10-29): all 50 sites had both Adsterra zones configured and the
 * Social Bar mounted site-wide, but the visible Native Banner only rendered on
 * `/` and `/guides/<slug>`. `/guides`, `/faq`, `/tier-list`, `/about`,
 * `/contact`, `/privacy`, `/terms` shipped with no banner at all, and nothing
 * in the pipeline could have noticed — the config was right, the rendering was
 * partial. Hence a check that looks at the render layer, not just the config.
 *
 * Per site it verifies:
 *   1. lib/adsterra-zones.ts defines both zones (14 = Social Bar, 21 = Native)
 *   2. app/layout.tsx mounts the global zone AND <PageAdBanner />
 *   3. components/PageAdBanner.tsx exists, renders the guide zone, and skips
 *      /guides/* so guide pages do not stack two banners
 *   4. components/GuideLayout.tsx still renders the guide zone inline
 *
 * Usage:
 *   node scripts/check-ad-slots.mjs                 # all sites, static only
 *   node scripts/check-ad-slots.mjs aincradwiki …   # named sites
 *   node scripts/check-ad-slots.mjs --live          # also fetch live HTML
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const argv = process.argv.slice(2);
const LIVE = argv.includes('--live');
const named = argv.filter((a) => !a.startsWith('--'));

const read = (f) => (fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '');

function sites() {
  if (named.length > 0) return named;
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((n) => fs.existsSync(path.join(ROOT, n, 'lib', 'adsterra-zones.ts')))
    .sort();
}

function staticCheck(site) {
  const dir = path.join(ROOT, site);
  const problems = [];

  const zones = read(path.join(dir, 'lib', 'adsterra-zones.ts'));
  if (!zones) problems.push('lib/adsterra-zones.ts 缺失');
  for (const [id, name] of [['14', 'global/SocialBar'], ['21', 'guide/NativeBanner']]) {
    if (zones && !zones.includes(`bauval.org/${id}/`)) problems.push(`zone ${name} 无广告 ID`);
  }

  const layout = read(path.join(dir, 'app', 'layout.tsx'));
  if (!layout) problems.push('app/layout.tsx 缺失');
  if (layout && !layout.includes('ADSTERRA_ZONES.global')) problems.push('layout 未挂 global 位');
  if (layout && !layout.includes('<PageAdBanner />')) problems.push('layout 未挂 <PageAdBanner />');

  const banner = read(path.join(dir, 'components', 'PageAdBanner.tsx'));
  if (!banner) problems.push('components/PageAdBanner.tsx 缺失');
  if (banner) {
    if (!banner.includes('ADSTERRA_ZONES.guide')) problems.push('PageAdBanner 未渲染 guide 位');
    if (!banner.includes('/guides/')) problems.push('PageAdBanner 缺 /guides/ 去重判断（攻略页会叠两条）');
  }

  const guideLayout = read(path.join(dir, 'components', 'GuideLayout.tsx'));
  if (guideLayout && !guideLayout.includes('ADSTERRA_ZONES.guide')) {
    problems.push('GuideLayout 未渲染 guide 位（攻略页无 banner）');
  }

  return problems;
}

function dig(host) {
  const out = execFileSync('dig', ['@1.1.1.1', '+short', host, 'A'], { encoding: 'utf8' });
  const ip = out.split('\n').map((s) => s.trim()).filter(Boolean)[0];
  if (!ip) throw new Error(`无法解析 ${host}`);
  return ip;
}

function fetchPage(host, ip, p) {
  return execFileSync(
    'curl',
    ['-s', '--max-time', '30', '--resolve', `${host}:443:${ip}`, `https://${host}${p}`],
    { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 },
  );
}

function liveCheck(site) {
  const host = `${site}.vercel.app`;
  const problems = [];
  let ip;
  try {
    ip = dig(host);
    const faq = fetchPage(host, ip, '/faq');
    if (!faq.includes('id="container-')) problems.push('线上 /faq 无 banner 容器');
  } catch (err) {
    problems.push(`${host} 线上检查失败: ${err.message.split('\n')[0]}`);
    return problems;
  }
  try {
    const guides = fetchPage(host, ip, '/guides');
    const count = (guides.match(/id="container-/g) || []).length;
    if (count !== 1) problems.push(`线上 /guides banner 数 ${count}（应为 1）`);
  } catch {
    problems.push('线上 /guides 检查失败');
  }
  return problems;
}

const targets = sites();
let failed = 0;
for (const site of targets) {
  const problems = staticCheck(site);
  if (LIVE && problems.length === 0) problems.push(...liveCheck(site));
  if (problems.length === 0) {
    console.log(`✅ ${site}`);
  } else {
    failed += 1;
    console.log(`❌ ${site}\n   ${problems.join('\n   ')}`);
  }
}

console.log('');
console.log(`共 ${targets.length} 站，通过 ${targets.length - failed}，失败 ${failed}`);
process.exit(failed === 0 ? 0 : 1);
