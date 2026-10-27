#!/usr/bin/env node
/**
 * keyword-hit-rate.mjs — 复盘轮：词 → 页面 → PV 的真实命中率。
 *
 * 由来：`keyword-results/命中率分析.md` 从 2026-07-18 起就没更新过，而且那版是
 * 「Google Suggest 关键词数量变化」，**不是**命中率 —— docs/STRATEGY-挖词与词库.md
 * 5.4 已经点名要求改口径。复盘轮也一直没真排进定时任务，所以文件一路停在 7/18。
 *
 * 口径（MUST 如实标注在报告里）：
 *   - 数据源：`dashboard /api/traffic`（GA4 聚合，30 天窗口）
 *   - 页面级只给**每站 top 10 落地页**，所以：
 *       · top 10 里出现 = 有确切 PV
 *       · 没出现 **≠ 0 流量**，只是排在 top 10 之外 —— 一律写「top10 外（不可判定）」，
 *         MUST NOT 当 0
 *   - GSC query 级数据尚未接通（本机没有 GSC 凭证），所以这一步是**落地页代理指标**，
 *     回答「哪些页真的有人看」，不是「哪些词带来了流量」
 *
 * 用法：
 *   node scripts/keyword-hit-rate.mjs            # 打印摘要
 *   node scripts/keyword-hit-rate.mjs --write    # 覆写 keyword-results/命中率分析.md
 *   node scripts/keyword-hit-rate.mjs --write --archive-old
 *
 * 退出码：0 正常；2 取不到流量数据。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchTraffic } from './lib/dashboard-traffic.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const WRITE = argv.includes('--write');
const ARCHIVE_OLD = argv.includes('--archive-old');
const REPORT = path.join(ROOT, 'keyword-results', '命中率分析.md');
const TODAY = new Date().toISOString().slice(0, 10);

/** 极简 frontmatter 读取（只取本脚本需要的字段）。 */
function readFrontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  let key = null;
  for (const line of m[1].split('\n')) {
    const top = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (top) {
      key = top[1];
      fm[key] = top[2].trim().replace(/^["']|["']$/g, '');
      continue;
    }
    if (key && /^\s+- /.test(line)) {
      const v = line.trim().slice(2).trim().replace(/^["']|["']$/g, '');
      fm[key] = fm[key] ? `${fm[key]}\n${v}` : v;
    }
  }
  return fm;
}

function guidesOf(siteDir) {
  const dir = path.join(ROOT, siteDir, 'content', 'guides');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fm = readFrontmatter(path.join(dir, f)) ?? {};
      const keywords = String(fm.keywords ?? '').split('\n').map((s) => s.trim()).filter(Boolean);
      return {
        slug: f.replace(/\.md$/, ''),
        title: fm.title ?? '',
        category: fm.category ?? '',
        updated: fm.updated ?? '',
        keywords,
      };
    });
}

function siteHost(siteDir) {
  try {
    const p = path.join(ROOT, siteDir, '.vercel', 'project.json');
    return `${JSON.parse(fs.readFileSync(p, 'utf8')).projectName || siteDir}.vercel.app`;
  } catch {
    return `${siteDir}.vercel.app`;
  }
}

let traffic;
try {
  traffic = fetchTraffic();
} catch (e) {
  console.error(`✗ 取不到 dashboard /api/traffic：${e.message}`);
  process.exit(2);
}

// gaId → 站点目录
const gaToDir = new Map();
for (const dir of fs.readdirSync(ROOT)) {
  const cfgPath = path.join(ROOT, dir, 'lib', 'seo-config.ts');
  if (!dir.endsWith('wiki') || !fs.existsSync(cfgPath)) continue;
  const ga = (fs.readFileSync(cfgPath, 'utf8').match(/googleAnalyticsId:\s*['"](G-[A-Z0-9]+)['"]/) || [])[1];
  if (ga) gaToDir.set(ga, dir);
}

const rows = [];
const unmatched = [];
for (const s of traffic.sites) {
  const dir = gaToDir.get(s.site.gaId);
  if (!dir) {
    unmatched.push({ name: s.site.name, gaId: s.site.gaId, pv: s.totals?.pageViews ?? null });
    continue;
  }
  const guides = guidesOf(dir);
  const guideSet = new Map(guides.map((g) => [g.slug, g]));
  const topPages = s.topPages ?? [];
  const topGuidePages = topPages.filter((p) => /^\/guides\/[^/]+$/.test(p.path));
  const hitSlugs = new Set(topGuidePages.map((p) => p.path.replace('/guides/', '')));

  rows.push({
    dir,
    host: siteHost(dir),
    name: s.site.name,
    pv: s.totals?.pageViews ?? null,
    change: s.totals?.pageViewsChange ?? null,
    guideCount: guides.length,
    topPages,
    topGuidePages,
    hits: topGuidePages.map((p) => ({ ...p, guide: guideSet.get(p.path.replace('/guides/', '')) ?? null })),
    hitCount: hitSlugs.size,
    zeroHitGuides: guides.filter((g) => !hitSlugs.has(g.slug)),
  });
}

rows.sort((a, b) => (b.pv ?? 0) - (a.pv ?? 0));

// 仓库里有攻略、但看板没给它数据的站：单列出来，避免「攻略总数」跟 STATS 对不上被当成漏算
const seenDirs = new Set(rows.map((r) => r.dir));
const missingDirs = fs.readdirSync(ROOT)
  .filter((d) => d.endsWith('wiki') && fs.existsSync(path.join(ROOT, d, 'content', 'guides')))
  .filter((d) => !seenDirs.has(d))
  .map((d) => ({ dir: d, guides: fs.readdirSync(path.join(ROOT, d, 'content', 'guides')).filter((f) => f.endsWith('.md')).length }));
const missingGuides = missingDirs.reduce((a, m) => a + m.guides, 0);

const totalPv = rows.reduce((a, r) => a + (r.pv ?? 0), 0);
const totalGuides = rows.reduce((a, r) => a + r.guideCount, 0);
const totalHit = rows.reduce((a, r) => a + r.hitCount, 0);
const sitesWithGuides = rows.filter((r) => r.guideCount > 0).length;

// ---- 文本报告 ----
const L = [];
L.push('# 关键词 → 页面 → PV 命中率（复盘轮）');
L.push('');
L.push(`> 生成：\`node scripts/keyword-hit-rate.mjs --write\` | 数据日期 ${TODAY} | 窗口：最近 30 天（GA4 \`30daysAgo → today\`）`);
L.push('> 数据源：`dashboard /api/traffic`（GA4 聚合）。MUST NOT 手工改本文件，改脚本后重跑。');
L.push('');
L.push('## 口径（先读，否则会误读下面的表）');
L.push('');
L.push('1. **这是落地页代理指标，不是 GSC query 级命中率。** 本机没有 GSC 凭证，`dashboard /api/traffic` 只给每站 **top 10 落地页**。');
L.push('2. **没出现在 top 10 ≠ 0 流量**，只是排在 top 10 之外。报告里一律写「top10 外（不可判定）」，MUST NOT 当成 0 去做止损判断。');
L.push('3. 「攻略页」= `/guides/<slug>`；`/`、`/codes`、`/tier-list`、`/faq` 这类非攻略页单独算，不混进命中率分母。');
L.push('4. 命中率 = **进入 top 10 的攻略页数 ÷ 站点攻略总数**。这是一个**下界**，真实命中率只会更高。');
L.push('');
L.push('## 总览');
L.push('');
L.push(`- 统计站点：**${rows.length}** 站（有攻略的 ${sitesWithGuides} 站）`);
L.push(`- 30 天总 PV：**${totalPv.toLocaleString('en-US')}**`);
L.push(`- 攻略总数：**${totalGuides}** 篇；进入各站 top 10 的攻略页：**${totalHit}** 篇`);
L.push(`- 下界命中率：**${totalGuides ? ((totalHit / totalGuides) * 100).toFixed(1) : '—'}%**（${totalHit}/${totalGuides}）`);
if (missingDirs.length) {
  L.push(`- ⚠️ **${missingDirs.length} 站（${missingGuides} 篇攻略）在看板里没有数据**，未计入上表，也**不可判定**：${missingDirs.map((m) => m.dir).join('、')}`);
  L.push('  （多为 GA4 property 未建 / 未把 Dashboard 服务账号加为读取者 —— 补上后重跑本脚本即可纳入）');
}
if (unmatched.length) {
  L.push(`- ⚠️ 有 ${unmatched.length} 个 GA4 property 在仓库里找不到对应站点目录（不可判定）：${unmatched.map((u) => `${u.name}(${u.gaId})`).join('、')}`);
}
L.push('');
L.push('## 每站命中率（按 PV 降序）');
L.push('');
L.push('| 站点 | PV(30d) | 环比 | 攻略数 | 进 top10 的攻略页 | 下界命中率 |');
L.push('|---|---:|---:|---:|---:|---:|');
for (const r of rows) {
  if (r.guideCount === 0) continue;
  const rate = r.guideCount ? ((r.hitCount / r.guideCount) * 100).toFixed(0) : '—';
  L.push(`| ${r.dir} | ${(r.pv ?? 0).toLocaleString('en-US')} | ${r.change == null ? '—' : `${r.change}%`} | ${r.guideCount} | ${r.hitCount} | ${rate}% |`);
}
L.push('');
L.push('## 真正在吃流量的页面（每站 top 页全量）');
L.push('');
L.push('> 「关键词」列取该页 frontmatter 的第一个 `keywords` 词，用来回答「哪个词对应哪一页」。');
L.push('');
for (const r of rows) {
  if (!r.topPages.length) continue;
  L.push(`### ${r.dir}（PV ${(r.pv ?? 0).toLocaleString('en-US')}${r.change == null ? '' : `，环比 ${r.change}%`}）`);
  L.push('');
  L.push('| 落地页 | PV(30d) | 环比 | 类型 | 主关键词 |');
  L.push('|---|---:|---:|---|---|');
  for (const p of r.topPages) {
    const kind = /^\/guides\/[^/]+$/.test(p.path) ? '攻略页'
      : p.path === '/' ? '首页'
        : p.path === '/guides' ? '攻略索引'
          : p.path.startsWith('/guides') ? '攻略子页'
            : '功能/其他页';
    const g = r.hits.find((h) => h.path === p.path)?.guide;
    const kw = g?.keywords?.[0] ?? '—';
    L.push(`| \`${p.path}\` | ${p.views} | ${p.change == null ? '—' : `${p.change}%`} | ${kind} | ${kw} |`);
  }
  L.push('');
}
L.push('## 写完了没人看的页（top10 外的攻略页）');
L.push('');
L.push('> 这些页**没有**进入任意一站的 top 10。因为 top10 之外拿不到确切 PV，这里只能给出名单，');
L.push('> 作为下一轮「补内链 / 换标题 / 合并」的候选池 —— **MUST NOT** 据此判「这页没用」。');
L.push('');
for (const r of rows) {
  if (!r.zeroHitGuides.length) continue;
  const shown = r.zeroHitGuides.slice(0, 40).map((g) => `\`${g.slug}\``).join('、');
  const more = r.zeroHitGuides.length > 40 ? ` …其余 ${r.zeroHitGuides.length - 40} 篇` : '';
  L.push(`- **${r.dir}**（${r.zeroHitGuides.length}/${r.guideCount}）：${shown}${more}`);
}
L.push('');
L.push('## 补页 / 改页任务（下一轮复盘轮的执行输入）');
L.push('');
L.push('1. **标题与首段重写候选**：上表中 `零命中` 占比 > 70% 且 PV > 300 的站，优先改现有页的 title/description，而不是继续加新页。');
L.push('2. **内链补强**：top 页里 PV 最高的 3 个页面，应作为「枢纽页」，在同期新增攻略里主动链过去。');
L.push('3. **待接通**：GSC query 级数据接通后，本报告应换成「词 → 展示/点击 → 落地页」三列，届时才谈得上真正的词命中率。');
L.push('');
L.push('---');
L.push('');
L.push(`> 历史版本：旧版（2026-07-18「Google Suggest 关键词数量变化」）已归档到 \`keyword-results/archive/命中率分析-2026-07-18.md\`，`);
L.push('> 那份是词量变化表，不是命中率，不要拿来回答「哪些词带来了流量」。');
L.push('');

const text = L.join('\n');

if (WRITE) {
  if (ARCHIVE_OLD && fs.existsSync(REPORT)) {
    const arch = path.join(ROOT, 'keyword-results', 'archive', '命中率分析-2026-07-18.md');
    fs.mkdirSync(path.dirname(arch), { recursive: true });
    if (!fs.existsSync(arch)) fs.copyFileSync(REPORT, arch);
    console.log(`📦 旧版已归档：keyword-results/archive/命中率分析-2026-07-18.md`);
  }
  fs.writeFileSync(REPORT, text);
  console.log(`✅ 已写入 keyword-results/命中率分析.md（${rows.length} 站 / ${totalGuides} 篇攻略 / 下界命中率 ${totalGuides ? ((totalHit / totalGuides) * 100).toFixed(1) : '—'}%）`);
} else {
  console.log(text);
}
