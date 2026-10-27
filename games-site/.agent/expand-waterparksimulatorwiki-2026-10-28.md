# EXPAND — waterparksimulatorwiki — 2026-10-28

## 产出

- slug: `chlorine-dirty-pool-water-guide`
- 标题: Waterpark Simulator Chlorine Guide: Dirty Pool Water Fixed
- URL: https://waterparksimulatorwiki.vercel.app/guides/chlorine-dirty-pool-water-guide
- 正文词数: 1,489（title 58 字符 / description 158 字符 / H1 ×1（线上实测 1）/ 首段 59 词）

## 选题依据（为什么是它）

站内 20 篇零覆盖。改前 `grep -ril "chlorine"` 全站只命中 1 处 ——
`shelves-multistand-staff-guide.md` 里引用的 2026-08-28 patch note 一句「shop supplies and chlorine
no longer despawn」，没有任何页面把 chlorine 当主题讲。相邻页面都只擦边：
`visitor-problems-guide` 一句 "water quality first"、`visitor-happiness-guide` 需求表一行、
`research-tree-guide` 只讲解锁顺序、`museum-questline-guide` 的 Yogi 主线没提 chlorine 步骤。

玩家侧信号：Steam 通用讨论区有一个专门的 **"chlorine?"** 串
（`app/3293260/discussions/0/598539452432963497`），玩家反复问三件事 ——「这玩意到底怎么用」
「为什么丢进去没反应」「买水还是倒水」。同时至少 3 个竞对站各写了一篇 chlorine / pool-maintenance
专页，说明这是有独立搜索需求的长尾，而不是我们臆想的题。属于**真缺口 + 具体 + 可核验边界清楚**。

与 10-27 的 `mafia-loan-guide` 不重叠：那篇讲黑帮借贷与武力反制，本篇讲池水变脏的判定与处理，
搜索意图（`waterpark simulator chlorine` / `dirty pool water`）与页面主题都不相交。
与新页互链的既有页：`visitor-problems-guide`、`visitor-happiness-guide`、`research-tree-guide`、
`museum-questline-guide`（均为 related 块状数组条目）。

## 来源（6 条，3 独立通道）

| 层级 | 来源 | 日期 |
|---|---|---|
| Official | Steam 商店页（CayPlay）："cleanup and pool waste" 属于玩家亲手做的活；"Cleanliness, slide quality, food, and amenities affect the park's score" | 2026-10-28 访问 |
| Official | 补丁 1.0.43「Patch Notes and thanks」bug 修复项："Fixed holding multiple chlorine bottles causing multiple throw options"（vgspoilers 镜像 + 17173 同补丁中文报道互证） | 2026-08-06 |
| Official | 公告 2026-08-28："shop supplies and chlorine no longer despawn on game quitting and reload"（证明 chlorine 是可持有实体物品，不是菜单开关） | 2026-08-28 |
| Community | Steam 讨论「chlorine?」：反应式而非预防式；丢进已变黄棕色的水立刻清澈；多人认为倒水免费所以更好用；一条回复称约 $25/次 | 2026-10-28 访问 |
| Community | waterparksimulatorgame.wiki「Chlorine and Pool Cleaning Guide」：CayMart 购买、不清垃圾、可培训 maintenance 员工代投、小班底跟不上大泳区 | 2026-10-28 访问 |
| Community | waterparksimulatorgame.wiki「Yogi Quests」：净化任务必须对**已脏**的水投氯，清水不计；玩家靠故意弄脏小池达成 | 2026-10-28 访问 |

> 本机 `steamcommunity.com` TCP 不可达（与前几轮一致），Steam 讨论串内容经搜索引擎索引正文取得，
> 已在 sources 的 text 里写明该限制。因此所有「价格 / 研究等级 / 换算」类数字一律标 `[Community]`，
> 并在文末「What is not confirmed」统一列出三项未确认：单瓶价格、研究等级与点数、一瓶覆盖几座池。

## 采集面（≥6 组查询）

1. `site:reddit.com Waterpark Simulator stuck help` — 0 结果（Reddit 侧无可用索引）
2. Steam 讨论 / 玩家提问总览 — 命中 feature request、bug 串、差评主题清单
3. `"Waterpark Simulator" reddit "how do I" pool cleaning chlorine` — 命中 chlorine 讨论串与 3 篇竞对专页
4. `"chlorine bottles" patch 1.0.43` — 官方补丁原文（多条互证）
5. `Wellness Update / Yogi quests` — Yogi 21 步清单，含 chlorine 步骤的坑
6. `where to buy chlorine Caymart research unlock` — 购买入口、Splash & Dash 解锁、员工代投
7. 站内差评主题（lifeguard 走不跑、补货太慢、检票机坏）— 已分别被 `staff-management-guide` /
   `stuck-guests-fix-guide` / `visitor-problems-guide` 覆盖

## 排除理由

- 溺水 / 救生员反应慢：`visitor-problems-guide` + `stuck-guests-fix-guide` 已覆盖
- 补货与 multistand：`shelves-multistand-staff-guide`（10-23）专页，复写=自噬
- 检票机 / 排队上限：无足够独立来源，只有零散差评情绪
- Mafia / 借贷：`mafia-loan-guide`（10-27）
- 泳池研究解锁顺序：`research-tree-guide` 已有，本篇只在正文引用不展开
- Saboteur 拔插头：1.0.43 新特性，但与 10-27 页脚注重叠且来源仅补丁一句，写不满一页

## QA

- `node scripts/lint-guides.mjs waterparksimulatorwiki` → **0 ERROR / 1 WARN**
  （本篇唯一的 WARN 是 `updated-future`：脚本按 UTC 比较日期，本机 08:2x CST 落在边界，属时区假警报）
- `node scripts/check-site-residue.mjs waterparksimulatorwiki` → ✅ 无模板残留
- `pnpm install && pnpm build` → exit 0，新页出现在静态路由表
- 完整 QA quick 报告：`.agent/qa-waterparksimulatorwiki-2026-10-28.md`

## 部署与线上验证

- `./deploy-wiki-site.sh waterparksimulatorwiki` → 部署成功，
  新部署 `waterparksimulatorwiki-7g7oyzar9-zhaoq0103s-projects.vercel.app`，alias 到 `https://waterparksimulatorwiki.vercel.app/`
- `dig @1.1.1.1 +short waterparksimulatorwiki.vercel.app` → 216.198.79.67 / 64.29.17.67
- `curl --resolve`（IPv4 216.198.79.67）：
  - `/guides/chlorine-dirty-pool-water-guide` → **200**，`<h1>` 计数 **1**，`<title>` 正确，正文 "chlorine" 122 次命中
  - `/` → 200，`/ads.txt` → 200，`/sitemap.xml` → 200
- `/sitemap.xml` 28 条 loc，含本页 `guides/chlorine-dirty-pool-water-guide` ✅

> 注：`/sitemap.xml` 首次裸请求命中 Vercel 边缘缓存（旧对象 5 条 loc），加查询串后取到新构建；
> 属边缘缓存 TTL 现象，不是站点缺陷，已复验两次。

## 未做

- 未执行 git add / commit / push（主 Agent 统一提交）
- 未改 `.agent/expand-daily.json`、未改 `.agent/qa-report.md`
- 未动站点广告代码与 `lib/adsterra-zones.ts`
- 未改 `mafia-loan-guide.md`（协调员中途撤回的 🟡-6 任务：该行已在 10-27 修好，本轮复核确认为
  「preset slots for outfits (the announcement does not mention multiple save files)」，无需再改）
- 未手改 `keyword-results/INDEX.md`、`STATS-游戏站点统计.md`
