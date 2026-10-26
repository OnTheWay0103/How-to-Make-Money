#!/usr/bin/env node
/**
 * new-site.mjs — 从 templates/wiki-base 生成一个新 wiki 站。
 *
 *   node scripts/new-site.mjs \
 *     --slug witchspire --name "Witchspire" \
 *     --developer "Studio X" --publisher "Studio X" \
 *     --release-date 2026-10-01 \
 *     [--steam-id 1234567] [--domain witchspirewiki.vercel.app] \
 *     [--description "..."] [--genre-line "..."] \
 *     [--dir witchspirewiki] [--force] [--dry-run]
 *
 * 只做「复制 + 替换占位符 + 改包名」。内容、GA4、GSC、部署、台账仍按
 * docs/STRATEGY-内容生产.md 与 SOP-游戏攻略站上线.md 走。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const TEMPLATE = path.join(REPO_ROOT, 'templates', 'wiki-base');

const SKIP_DIRS = new Set(['node_modules', '.next', '.vercel', '.git', 'out', 'dist']);

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const key = argv[i];
    if (!key.startsWith('--')) throw new Error(`无法识别的参数: ${key}`);
    const name = key.slice(2);
    if (name === 'force' || name === 'dry-run') {
      args[name] = true;
      continue;
    }
    const value = argv[++i];
    if (value === undefined || value.startsWith('--')) throw new Error(`--${name} 缺少值`);
    args[name] = value;
  }
  return args;
}

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

const args = parseArgs(process.argv);

for (const required of ['slug', 'name', 'developer', 'publisher', 'release-date']) {
  if (!args[required]) fail(`缺少必填参数 --${required}`);
}

const slug = args.slug;
if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) fail('--slug 只能用小写字母、数字、连字符（用作目录名与包名）');
if (!/^\d{4}-\d{2}-\d{2}$/.test(args['release-date'])) fail('--release-date 需要 YYYY-MM-DD');

const targetName = args.dir || `${slug}wiki`;
const target = path.join(REPO_ROOT, targetName);
const domain = args.domain || `${slug}wiki.vercel.app`;
const steamUrl = args['steam-id']
  ? `https://store.steampowered.com/app/${args['steam-id']}/`
  : `https://${domain}`;
const genreLine =
  args['genre-line'] ||
  'codes, beginner guides, tier lists, boss strategies, and FAQs, written from official sources and labelled where a claim is only community-reported';
const description =
  args.description ||
  `Unofficial ${args.name} wiki and guide hub — codes, beginner guides, tier lists, boss strategies, and FAQs for ${args.name}, updated as patches land.`;

if (!args.description) {
  const len = description.length;
  if (len < 140 || len > 160) {
    console.warn(`⚠ 自动生成的 description 是 ${len} 字符（规范 140–160），用 --description 覆盖`);
  }
}

const TOKENS = {
  '{{SITE_NAME}}': `${args.name} Wiki`,
  '{{GAME_NAME}}': args.name,
  '{{DOMAIN}}': domain,
  '{{DEVELOPER}}': args.developer,
  '{{PUBLISHER}}': args.publisher,
  '{{STEAM_URL}}': steamUrl,
  '{{RELEASE_DATE}}': args['release-date'],
  '{{SITE_DESCRIPTION}}': description,
  '{{GENRE_LINE}}': genreLine,
};

if (!fs.existsSync(TEMPLATE)) fail(`模板目录不存在: ${TEMPLATE}`);
if (fs.existsSync(target) && !args.force) fail(`目标目录已存在: ${targetName}（要覆盖加 --force）`);

if (args['dry-run']) {
  console.log(`[dry-run] 将复制 ${TEMPLATE} → ${target}`);
  console.log(`[dry-run] 域名 https://${domain}`);
  console.log(`[dry-run] Steam ${steamUrl}`);
  console.log(`[dry-run] description ${description.length} 字符`);
  process.exit(0);
}

fs.cpSync(TEMPLATE, target, {
  recursive: true,
  filter: (src) => !SKIP_DIRS.has(path.basename(src)),
});

const TEXT_EXT = new Set(['.ts', '.tsx', '.md', '.json', '.css', '.mjs', '.js']);
const leftovers = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!TEXT_EXT.has(path.extname(entry.name))) continue;
    const original = fs.readFileSync(full, 'utf8');
    let next = original;
    for (const [token, value] of Object.entries(TOKENS)) {
      next = next.split(token).join(value);
    }
    if (next !== original) fs.writeFileSync(full, next);
    // `{{` 在 JSX 里是对象字面量（style={{...}}），所以只认 `{{UPPER_SNAKE}}` 形态。
    const hits = [...new Set([...next.matchAll(/\{\{[A-Z0-9_]+\}\}/g)].map((m) => m[0]))];
    if (hits.length) leftovers.push(`${path.relative(target, full)}: ${hits.join(', ')}`);
  }
}

walk(target);

// 包名不能用占位符（npm 名只允许小写与 URL 安全字符），单独改。
const pkgPath = path.join(target, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.name = `${slug}wiki`;
fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

// README 换成站点自己的，模板 README 讲的是「怎么用模板」。
fs.writeFileSync(
  path.join(target, 'README.md'),
  `# ${args.name} Wiki\n\nUnofficial wiki and guide hub for **${args.name}**, developed by ${args.developer} and published by ${args.publisher}.\n\n- Live site: https://${domain}\n- Steam: ${steamUrl}\n- Release date: ${args['release-date']}\n\n## Development\n\n\`\`\`bash\npnpm install\npnpm dev\n\`\`\`\n\nBuild:\n\n\`\`\`bash\npnpm build\n\`\`\`\n\n## Content\n\nGuides live in \`content/guides/*.md\` with YAML frontmatter. \`related\` must be a block YAML list,\nand each guide needs at least two \`sources\`, including one with \`tier: "Official"\`.\nSee \`docs/STRATEGY-内容生产.md\` for the page matrix and writing spec.\n\n## Configuration\n\n- Site metadata: \`lib/seo-config.ts\` (GA4 id empty until the property exists)\n- Ad slots: \`lib/adsterra-zones.ts\` — injected by \`scripts/adsterra-sync.mjs\`, never edited by hand\n\n## Notes\n\nUnofficial fan project, not affiliated with ${args.developer} or ${args.publisher}.\nUnconfirmed mechanics are labelled in the guides rather than presented as fact.\n`,
);

console.log(`✓ 已生成 ${targetName}/  （域名 https://${domain}）`);

const TODO = [
  `public/icon.png 仍是模板图 —— 换成 ${args.name} 的图标`,
  'GA4 / GSC / Adsterra：在飞书「站点台账(人工)」对应行填 ID 与代码（每天 20:00 自动回填+部署）',
  'content/guides/: 按页面矩阵写 5–8 页（每页 ≥1,200 词、≥2 个来源且 ≥1 官方）',
  'app/faq/page.tsx 与 app/tier-list/page.tsx 的数组仍是空的 —— 有来源后再填',
  'Vercel 建项目（rootDirectory 留空）→ scripts/deploy-wiki-site.sh <site>',
  'dashboard 注册（站点台账(自动化) 由 scripts/feishu-report.mjs --sites 写）',
];
console.log('\n下一步（人工，按 SOP）:');
TODO.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));

if (leftovers.length) {
  console.error(`\n✗ 还有未替换的占位符，上线前必须清掉：`);
  leftovers.forEach((l) => console.error(`  - ${l}`));
  process.exit(1);
}
