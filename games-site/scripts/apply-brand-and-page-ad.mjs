#!/usr/bin/env node
/**
 * One-shot (idempotent) migration: site-wide page ad banner + default logo.
 *
 * Two rules from 2026-10-29 that this script encodes:
 *
 *   1. Every page carries the ad slots. Before this, only `/` and
 *      `/guides/<slug>` rendered the Native Banner (zone `guide`); the other
 *      routes shipped the invisible Social Bar script alone. Fixing it in the
 *      root layout instead of page by page is what makes rule 2 hold.
 *   2. A newly added route must inherit the slots. Because `PageAdBanner`
 *      lives in `app/layout.tsx`, any new page gets the banner with no extra
 *      work — there is nothing to remember and nothing to copy.
 *
 * The guide route is skipped inside the component: `GuideLayout` already
 * renders the same zone inline, and two copies would stack the banner.
 *
 * Usage:
 *   node scripts/apply-brand-and-page-ad.mjs            # all sites + template
 *   node scripts/apply-brand-and-page-ad.mjs --dry-run
 *   node scripts/apply-brand-and-page-ad.mjs aincradwiki ...
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const TEMPLATE = path.join(ROOT, 'templates', 'wiki-base');
const LOGO_SRC = path.join(ROOT, 'Weixin_2026-09-24.jpg');

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const only = args.filter((a) => !a.startsWith('--'));

const PAGE_AD_BANNER = `'use client';

/**
 * Site-wide in-page banner (Adsterra zone \`guide\`, the Native Banner).
 *
 * It lives in the root layout rather than in the individual pages so that a
 * route added tomorrow renders the slot without anyone remembering to copy
 * markup into it. The guide route is the one exception: \`GuideLayout\` already
 * renders this same zone inline, so returning null there keeps a single
 * banner per page instead of two stacked ones.
 */

import { usePathname } from 'next/navigation';
import AdsterraSlot from '@/components/AdsterraSlot';
import { ADSTERRA_ZONES } from '@/lib/adsterra-zones';

export default function PageAdBanner() {
  const pathname = usePathname();
  if (pathname?.startsWith('/guides/')) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 pb-12">
      {ADSTERRA_ZONES.guide.map((zone) => (
        <AdsterraSlot key={\`page-\${zone.name}\`} variant="inline" html={zone.html} />
      ))}
    </div>
  );
}
`;

const ICON_IMG = (indent) =>
  `${indent}{/* eslint-disable-next-line @next/next/no-img-element */}\n` +
  `${indent}<img\n` +
  `${indent}  src="/icon.png"\n` +
  `${indent}  alt=""\n` +
  `${indent}  width={32}\n` +
  `${indent}  height={32}\n` +
  `${indent}  aria-hidden="true"\n` +
  `${indent}  className="h-8 w-8 shrink-0 rounded-md object-cover"\n` +
  `${indent}/>\n`;

const report = { banner: [], layout: [], header: [], assets: [], skipped: [] };

function discoverSites() {
  if (only.length > 0) return only;
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    // `lib/adsterra-zones.ts` is what separates a wiki site from dashboard/.
    .filter(
      (name) =>
        fs.existsSync(path.join(ROOT, name, 'app', 'layout.tsx')) &&
        fs.existsSync(path.join(ROOT, name, 'lib', 'adsterra-zones.ts')),
    )
    .sort();
}

function writeIfChanged(file, content) {
  const exists = fs.existsSync(file);
  if (exists && fs.readFileSync(file, 'utf8') === content) return false;
  if (!DRY) fs.writeFileSync(file, content);
  return true;
}

function applyBannerAndLayout(dir, label) {
  const bannerPath = path.join(dir, 'components', 'PageAdBanner.tsx');
  if (writeIfChanged(bannerPath, PAGE_AD_BANNER)) report.banner.push(label);
  else report.skipped.push(`${label}:PageAdBanner`);

  const layoutPath = path.join(dir, 'app', 'layout.tsx');
  if (!fs.existsSync(layoutPath)) return;
  let src = fs.readFileSync(layoutPath, 'utf8');
  const before = src;

  if (!src.includes("from '@/components/PageAdBanner'")) {
    src = src.replace(
      /^import AdsterraSlot from '@\/components\/AdsterraSlot';\n/m,
      "import AdsterraSlot from '@/components/AdsterraSlot';\nimport PageAdBanner from '@/components/PageAdBanner';\n",
    );
  }

  src = src.replace(
    /[ \t]*\{\/\* ADSTERRA:HOME:START \*\/\}[\s\S]*?\{\/\* ADSTERRA:HOME:END \*\/\}/,
    '        {/* ADSTERRA:PAGE:START */}\n        <PageAdBanner />\n        {/* ADSTERRA:PAGE:END */}',
  );

  if (src !== before) {
    if (!DRY) fs.writeFileSync(layoutPath, src);
    report.layout.push(label);
  } else {
    report.skipped.push(`${label}:layout`);
  }

  const missing = [];
  if (!src.includes("from '@/components/PageAdBanner'")) missing.push('import');
  if (!src.includes('<PageAdBanner />')) missing.push('render');
  if (src.includes('ADSTERRA:HOME:START')) missing.push('old-home-block');
  if (missing.length > 0) {
    console.error(`❌ ${label}/app/layout.tsx 未完成: ${missing.join(', ')}`);
    process.exitCode = 1;
  }
}

function applyHeaderLogo(dir, label) {
  const headerPath = path.join(dir, 'components', 'Header.tsx');
  if (!fs.existsSync(headerPath)) return;
  let src = fs.readFileSync(headerPath, 'utf8');
  if (src.includes('src="/icon.png"')) {
    report.skipped.push(`${label}:header`);
    return;
  }
  const anchor = /^([ \t]*)<Link href="\/" className="flex items-center gap-2 shrink-0">\n/m;
  const match = src.match(anchor);
  if (!match) {
    console.error(`❌ ${label}/components/Header.tsx 找不到 logo Link 锚点`);
    process.exitCode = 1;
    return;
  }
  const indent = `${match[1]}  `;
  src = src.replace(anchor, `${match[0]}${ICON_IMG(indent)}`);
  if (!DRY) fs.writeFileSync(headerPath, src);
  report.header.push(label);
}

function buildAssets() {
  const out = path.join(ROOT, '.agent', 'brand-assets');
  fs.mkdirSync(out, { recursive: true });
  const icon = path.join(out, 'icon.png');
  const ico = path.join(out, 'favicon.ico');
  execFileSync('magick', [LOGO_SRC, '-resize', '512x512', '-strip', '-colors', '256', `PNG8:${icon}`]);
  execFileSync('magick', [LOGO_SRC, '-define', 'icon:auto-resize=64,48,32,16', ico]);
  return { icon, ico };
}

function installAssets(dir, label, assets) {
  const iconDest = path.join(dir, 'public', 'icon.png');
  const icoDest = path.join(dir, 'app', 'favicon.ico');
  let changed = false;
  for (const [src, dest] of [
    [assets.icon, iconDest],
    [assets.ico, icoDest],
  ]) {
    if (!fs.existsSync(path.dirname(dest))) continue;
    const same = fs.existsSync(dest) && execFileSync('md5', ['-q', src]).equals(execFileSync('md5', ['-q', dest]));
    if (!same) {
      if (!DRY) fs.copyFileSync(src, dest);
      changed = true;
    }
  }
  if (changed) report.assets.push(label);
  else report.skipped.push(`${label}:assets`);
}

const assets = DRY ? null : buildAssets();
for (const label of ['templates/wiki-base', ...discoverSites()]) {
  const dir = path.join(ROOT, label);
  if (!fs.existsSync(dir)) {
    console.error(`❌ 目录不存在: ${label}`);
    process.exitCode = 1;
    continue;
  }
  applyBannerAndLayout(dir, label);
  applyHeaderLogo(dir, label);
  if (!DRY) installAssets(dir, label, assets);
}

const summary = (name, list) => `${name}: ${list.length}${list.length ? ' -> ' + list.slice(0, 4).join(', ') + (list.length > 4 ? ' …' : '') : ''}`;
console.log(DRY ? '=== DRY RUN ===' : '=== APPLIED ===');
console.log(summary('PageAdBanner 写入', report.banner));
console.log(summary('layout 改造', report.layout));
console.log(summary('Header 加图标', report.header));
console.log(summary('logo 资源替换', report.assets));
console.log(summary('已是目标状态', report.skipped));
