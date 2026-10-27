# EXPAND — nivalisnightswiki — 2026-10-28

## 产出

- slug: `cooking-recipes-rotten-food-guide`
- 标题: Nivalis Nights: Cooking, Recipes & Rotten Food Guide
- URL: https://nivalisnightswiki.vercel.app/guides/cooking-recipes-rotten-food-guide
- 正文词数: 1,447（title 52 字符 / description 160 字符 / H1 ×1 / 首段 59 词 / 表格 4 个）

## 选题依据（为什么是它）

站内 19 篇零覆盖：`grep -i "recipe|rotten|composter|kitchen"` 全站仅 `manager-restock-guide` 顺带提及
「菜单/腐坏」，**没有任何烹饪页**；而 10-26 晚轮的关键词机会清单已把这条列为站内 Top 1 缺口：
`nivalis nights how to cook` / `how to get rid of rotten food` 属 How-to 簇中的食物链。

玩家侧高频且具体：Steam 差评反复出现「produce has spoiled, sprint to the market」「cooks use fresh
before expiring」「managers waste money on supplies」，官方则连出 5 个补丁（#2/#3/#4/#5/#6）修这条线——
说明这是真痛点、有官方事实可核验、且边界清楚。

**不与现有页抢词**（列出相关 slug）：

| 现有 slug | 它回答什么 | 与本篇的区别 |
|---|---|---|
| `manager-restock-guide` | 经理补货行为、四档补货目标、日预算 | 本篇讲**玩家侧**：配方/设备/腐坏原理/存储与处置；补货目标只在「日常流程」里链过去，不复述 |
| `greenhouse-guide` | 怎么租温室、控制台、种子 | 本篇只说明温室产出进入哪一层存储，交叉引用 |
| `greenhouse-automation-guide` | 自动收割/补种模块 | 同上，不重复 |
| `best-business-guide` | 七种业态、选址、人员排班 | 本篇不涉及业态选择 |
| `fishing-guide` | 钓鱼点位与收益 | 只在食材来源上互不重叠 |

目标词：`nivalis nights cooking` / `recipes` / `rotten food`（三词都有独立搜索意图，站内 0 覆盖）。

## 来源（9 条，3 条独立通道）

| 层级 | 来源 | 日期 |
|---|---|---|
| Official | Update #2 — 装饰家具 storage 值计入容量、Kitchen Buffet 100+50、老料优先（并拉低 freshness 评价）、员工任务优先级含 Food Processor/Drink Machine | 2026-10-02 |
| Official | Update #3 — 双存储下腐烂食物清不掉已修、Calypso Island 补垃圾桶、Composter/Vending 复制 bug | 2026-10-05 |
| Official | Update #4 — 菜单标出缺食材/缺设备的配方、库存显示食材是否被使用、配方定制只作用于自有 venue | 2026-10-09 |
| Official | Update #5 — 温室自有存储 + 溢出规则、Composter/Vending 计入剩余空间 | 2026-10-15 |
| Official | Update 6 — 冰箱存档后保持保鲜（此前冷藏腐坏快一倍）、Squid Ink 豁免、配方修复回溯旧存档 | 2026-10-22 |
| Official | 开发者 post《What's on the menu in Nivalis Nights?》— 菜品八分类、「right recipes and ingredients, as well as the right equipment」、可解锁并可自定义配方 | 2026-08-14 |
| Community | Steam 评测（Moralio，首印象向）— 「produce has spoiled…sprint to the market」、厨师先用手头新鲜食材、经理乱花钱 | 2026-10-28 抓取 |
| Editorial | GameSpace — Update #3 报道（腐烂食物清理为社区向 QoL 修复） | 2026-10-05 |
| Editorial | 本站编辑结论 — 工位表、存储取舍、症状表、日常流程 | 2026-10-28 |

> 官方公告经 Steam News API（appid 1488490）逐条取原文，gid 与 URL 见 frontmatter `sources`。
> 腐烂食物处置的**具体价格与增产百分比**只有社区来源，正文全部标 `[Community]`；
> 各食材精确腐坏时长、配方解锁条件官方无文档，正文列入「What the patch notes do not tell you」并标 `[Unconfirmed]`。

## 采集面（≥6 组查询）

1. Steam 评测/差评主题（performance、bug、navigation、pacing、management friction）—— 前四类已被 `performance-fps-guide` / `city-districts-guide` / `transportation-guide` / `beginner-guide` 覆盖
2. Steam 讨论 + 官方公告：food spoiling / fridge / rotten ingredients —— 命中，且是唯一有连续官方修复链的缺口
3. `wish I knew` / tips 类聚合 —— 全部落在 beginner / business 既有页
4. rotten food 具体处置（sell vs composter）—— 社区共识明确，官方只确认 Composter 存在
5. `dead rat` / `how to drop dead rat` —— 检索 0 命中，**放弃该方向**（先前的关键词清单提到过，但无任何可核验来源，不写）
6. 船只/离岸点位（oil rig / boat）—— 站内 `oil rig` 0 命中，但本轮未拿到 ≥2 条独立可核验来源，留待下轮
7. 配方解锁条件 —— 官方无文档，只写「可解锁、可自定义」的事实层

## 排除理由

- `how to get to oil rig` / 船只离岸点位：有搜索词但缺可核验来源，本轮不硬写
- `dead rat`：无来源，且疑似翻译/梗，不写
- 员工工资按小时计（破产陷阱）：已被 `best-business-guide` 的 staff 段覆盖
- 导航/无小地图抱怨：属体验抱怨，缺少可核验的机制事实，暂不单独成页

## QA

- `node scripts/lint-guides.mjs nivalisnightswiki` → **0 ERROR / 1 WARN**（本篇仅 `updated-future`：脚本用 UTC
  比较，本机 07:50 CST 时 UTC 仍是 10-27，属时区假警报）
- `node scripts/check-site-residue.mjs nivalisnightswiki` → ✅ 无模板残留
- 详细结论见 `.agent/qa-nivalisnightswiki-2026-10-28.md`（✅ PASS）

## 部署与线上验证

- `./deploy-wiki-site.sh nivalisnightswiki` → 部署成功，alias https://nivalisnightswiki.vercel.app/
- `dig @1.1.1.1 +short nivalisnightswiki.vercel.app` → 216.198.79.3
- `curl --resolve`：
  - `/guides/cooking-recipes-rotten-food-guide` → **200**（72,287 bytes，二次部署后复验，`<h1>` 计数 = **1**，`<title>` 正确，正文含 Kitchen Buffet ×2 / Food Processor ×4）
  - 页面 related 链接全部可解析：beginner-guide / best-business-guide / fishing-guide / greenhouse-automation-guide / greenhouse-guide / manager-restock-guide
- `/sitemap.xml` 含 `cooking-recipes-rotten-food-guide` ✅
- 二次部署原因：QA 自查发现日常流程首条「two to five dishes」为玩家经验数字、sources 内无对应来源，改为不带数字的表述后重新构建部署；二次 co-deploy 通过，删去该无源数字后正文 1,447 词

## 上轮 QA 🟡 修复

**本轮未做**。主 Agent 于 2026-10-28 08:00 前后两次指令：先要求修 `performance-fps-guide` ×2 与
`system-requirements-guide` ×1，随即撤回，理由是三项已在 commit `4f58824`（10-27）修完并部署
（sources 已补 May 2026 Optimization 公告、system-requirements 已加 CPU 瓶颈交叉引用、4 票样本限定已落在正文）。
按撤回指令，**本轮未改动这三个文件**，避免覆盖已修内容。

## 未做

- 未 commit / 未 push
- 未改 `.agent/expand-daily.json` / `.agent/qa-report.md`
- 未触碰其他站点目录、未改广告代码或 `lib/adsterra-zones.ts`
