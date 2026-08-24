// ---------------------------------------------------------------------------
// ga4-pv-rank.mjs — 拉取全部站点 GA4 PV 并排名（性能监控员的临时替代工具）
//
// 用法: node scripts/ga4-pv-rank.mjs            # 30 天 + 7 天窗口
//       node scripts/ga4-pv-rank.mjs --top N    # 只输出前 N 名
//
// 凭据: dashboard/.env.ga4（GA_CLIENT_EMAIL + GA_PRIVATE_KEY，Vercel CLI 生成）
// 站点: dashboard/lib/sites.ts（propertyId 列表）
// ---------------------------------------------------------------------------
import { createRequire } from 'module';
import fs from 'fs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const require = createRequire(ROOT + '/dashboard/package.json');
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

// --- 凭据 ---
const env = fs.readFileSync(ROOT + '/dashboard/.env.ga4', 'utf8');
function getEnv(name) {
  const m = env.match(new RegExp('^' + name + '=(.+)$', 'm'));
  if (!m) throw new Error('missing env: ' + name);
  let v = m[1].trim();
  if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
  return v.replace(/\\n/g, '\n');
}

const client = new BetaAnalyticsDataClient({
  credentials: {
    client_email: getEnv('GA_CLIENT_EMAIL'),
    private_key: getEnv('GA_PRIVATE_KEY'),
  },
});

// --- 站点注册表（从 sites.ts 提取 name + propertyId）---
const sitesTs = fs.readFileSync(ROOT + '/dashboard/lib/sites.ts', 'utf8');
const sites = [];
const re = /name:\s*(['"])(.+?)\1,\s*\n\s*propertyId:\s*'([^']+)'/g;
let mm;
while ((mm = re.exec(sitesTs))) sites.push({ name: mm[2], propertyId: mm[3] });

// --- 单站汇总 ---
async function fetchTotals(propertyId, days) {
  const [r] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'totalUsers' },
      { name: 'sessions' },
    ],
  });
  const row = r.rows?.[0];
  return {
    pageViews: parseInt(row?.metricValues?.[0]?.value ?? '0', 10),
    users: parseInt(row?.metricValues?.[1]?.value ?? '0', 10),
    sessions: parseInt(row?.metricValues?.[2]?.value ?? '0', 10),
  };
}

// --- 主流程 ---
const rows = [];
for (const s of sites) {
  try {
    const [d30, d7] = await Promise.all([
      fetchTotals(s.propertyId, 30),
      fetchTotals(s.propertyId, 7),
    ]);
    rows.push({ ...s, ...d30, pv7: d7.pageViews });
    process.stderr.write('.');
  } catch (e) {
    rows.push({
      ...s,
      pageViews: -1,
      users: 0,
      sessions: 0,
      pv7: -1,
      error: String(e?.message ?? e).slice(0, 100),
    });
    process.stderr.write('x');
  }
}
process.stderr.write('\n');

rows.sort((a, b) => b.pageViews - a.pageViews);

const top = process.argv.includes('--top')
  ? parseInt(process.argv[process.argv.indexOf('--top') + 1], 10) || rows.length
  : rows.length;

console.log('Rank\tSite\tPV30d\tUsers30d\tSessions30d\tPV7d');
rows.slice(0, top).forEach((r, i) => {
  if (r.error) {
    console.log(`${i + 1}\t${r.name}\tERROR: ${r.error}`);
  } else {
    console.log(`${i + 1}\t${r.name}\t${r.pageViews}\t${r.users}\t${r.sessions}\t${r.pv7}`);
  }
});

const totalPv = rows.reduce((sum, r) => sum + Math.max(0, r.pageViews), 0);
const totalUsers = rows.reduce((sum, r) => sum + Math.max(0, r.users), 0);
console.log(`\nTOTAL\t${sites.length} sites\tPV30d=${totalPv}\tUsers30d=${totalUsers}`);
