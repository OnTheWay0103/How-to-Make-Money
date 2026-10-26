import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
let s = fs.readFileSync(path.join(ROOT, 'dashboard/lib/sites.ts'), 'utf8');
s = s.replace(/export interface[\s\S]*?\n}\n/, '').replace(/export const SITES: SiteConfig\[\] =/, 'module.exports =');
const m = { exports: {} };
new Function('module', s)(m);
const dash = m.exports;

const dirs = fs.readdirSync(ROOT).filter((d) => d.endsWith('wiki') && fs.existsSync(path.join(ROOT, d, 'lib', 'seo-config.ts')));
const cfg = {};
for (const d of dirs) {
  const c = fs.readFileSync(path.join(ROOT, d, 'lib', 'seo-config.ts'), 'utf8');
  // 名字可能含撇号（"Vahrin's Call Wiki"），优先匹配双引号，再退回单引号
  const name =
    (c.match(/name:\s*"([^"]+)"/) || c.match(/name:\s*'([^']+)'/) || [])[1];
  const ga = (c.match(/googleAnalyticsId:\s*['"]([^'"]*)/) || [])[1];
  cfg[d] = { name, ga };
}

const dashGa = new Map(dash.map((x) => [x.gaId, x.name]));
const notInDash = [];
const orphan = [];
for (const d of dirs) if (!dashGa.has(cfg[d].ga)) notInDash.push(`${d} ${cfg[d].ga}`);
const siteGa = new Set(Object.values(cfg).map((v) => v.ga));
for (const x of dash) if (!siteGa.has(x.gaId)) orphan.push(`${x.name} ${x.gaId}`);

// 大小写差异只提示，不算错误（dashboard 的显示名可以自己定）
const norm = (n) => n.toLowerCase().replace(/[^a-z0-9]/g, '');
const names = Object.values(cfg).map((v) => v.name);
const dashNames = dash.map((x) => x.name);
const caseOnly = names.filter(
  (n) => !dashNames.includes(n) && dashNames.some((d) => norm(d) === norm(n)),
);
const reallyMissing = names.filter(
  (n) => !dashNames.includes(n) && !dashNames.some((d) => norm(d) === norm(n)),
);

// --site <site-dir>：只查一个站，未注册则退出码 1（deploy-wiki-site.sh 用来告警）
const siteIdx = process.argv.indexOf('--site');
const only = siteIdx > -1 ? process.argv[siteIdx + 1] : null;
if (only) {
  if (!cfg[only]) {
    console.log(`✗ ${only} 不是站点目录（缺 lib/seo-config.ts）`);
    process.exit(2);
  }
  if (!cfg[only].ga) {
    console.log(`✗ ${only} 还没填 GA4 measurement ID（lib/seo-config.ts）→ dashboard 无法统计`);
    process.exit(1);
  }
  if (!dashGa.has(cfg[only].ga)) {
    console.log(`✗ ${only} (${cfg[only].ga}) 不在 dashboard/lib/sites.ts → 看板不会显示`);
    process.exit(1);
  }
  console.log(`✓ ${only} 已在 dashboard 注册`);
  process.exit(0);
}

console.log('站点目录:', dirs.length, '| dashboard 条目:', dash.length);
console.log('站点 GA 不在 dashboard:', notInDash.length ? notInDash : '无');
console.log('dashboard GA 无对应站点:', orphan.length ? orphan : '无');
console.log('站点名缺失:', reallyMissing.length ? reallyMissing : '无');
console.log('仅大小写/标点不同:', caseOnly.length ? caseOnly : '无');
