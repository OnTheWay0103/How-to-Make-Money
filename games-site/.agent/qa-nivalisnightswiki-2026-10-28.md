# QA Report — 2026-10-28 — nivalisnightswiki（quick）

> 模式：quick（只审本轮变更）
> 范围：1 站 / 1 篇新增 guide
> 变更：`content/guides/cooking-recipes-rotten-food-guide.md`（新增，1,447 词）
> 依据：`.claude/skills/quality-assurance.md`、`docs/STRATEGY-内容生产.md` 四节

## 执行摘要

- 结果：✅ **PASS**（0 🔴 阻断 / 1 🟡 记录项：`updated-future` 时区假警报）
- 一句话：本篇所有游戏特有名词均可回落到官方补丁说明或开发者 post；模板残留干净；build exit 0；线上 HTTP 200 且 `<h1>` 计数 = 1。

## 虚构检测（逐专名核验）

| # | 名词 | 判定 | 依据 |
|---|------|:--:|------|
| 1 | Food Processor / Drink Machine | ✅ | Update #2 员工任务列表「Make meal at Food Processor or Drink Machine」 |
| 2 | Kitchen Buffet 100 normal + 50 refrigerated | ✅ | Update #2 原文 |
| 3 | 装饰家具 storage / refrigerated storage 计入容量 | ✅ | Update #2 原文 |
| 4 | older ingredients used first + 会拉低 food freshness 评价 | ✅ | Update #2 原文 |
| 5 | Rotten Food 在 normal + refrigerated 双存储时清不掉（已修） | ✅ | Update #3 原文 |
| 6 | Calypso Island 缺 rotten food 垃圾桶（已补） | ✅ | Update #3 原文 |
| 7 | Composter / vending machine 复制 bug | ✅ | Update #3、#5 原文 |
| 8 | fridges 存档后保持保鲜 / 此前冷藏食物腐坏快一倍 | ✅ | Update 6 原文 |
| 9 | Squid Ink 不再腐坏、不再需要冰箱、不再变 Rotten Food | ✅ | Update 6 原文 |
| 10 | recipe 定制仅对自己拥有/租用的 venue 生效 | ✅ | Update #4 原文 |
| 11 | 菜品分类（meat/fish/salad/sandwich/pizza/soup/dessert/snack） | ✅ | 官方 post《What's on the menu in Nivalis Nights?》 |
| 12 | Composter 价格 850–1,070 lims、肥料增产 | ⚠️ 已标 `[Community]` | 仅社区来源，正文明确标注未写入补丁说明 |
| 13 | 各食材精确腐坏时长 / 配方解锁条件 | ⚠️ 已标 `[Unconfirmed]` | 官方无文档，正文列入「未确认」小节，未写成事实 |

未出现「死鼠 / dead rat」类无来源内容（检索未命中，已放弃该选题方向）。

复验追加：「两到五道菜」这一玩家经验数字在初版正文里没有对应 sources，已于二次部署前改为不带数字的表述（正文 1,447 词），线上已确认更新。

## 模板残留扫描

- `node scripts/check-site-residue.mjs nivalisnightswiki` → ✅ 无模板残留（他站游戏名 0 命中、`{{UPPER_SNAKE}}` 0 命中）

## 一致性与诚实标注

- 与 `manager-restock-guide`（10/26）口径一致：Update #2 老料优先、Update #6 冰箱存档修复、Squid Ink 豁免三处表述相同，无冲突。
- 与 `greenhouse-guide` / `greenhouse-automation-guide` 分工：本篇讲烹饪/腐坏/存储，温室只做交叉引用，不重复机制。
- 无「In the world of…」「Whether you're a…」类 AI 套话；中文标记泄漏 0；`[Unconfirmed]` / `[Community]` 均为英文标记。

## 基建检查

| 项 | 结果 |
|---|---|
| `pnpm install` | ✅ exit 0 |
| `pnpm build` | ✅ exit 0，`/guides/cooking-recipes-rotten-food-guide` 已预渲染 |
| `node scripts/lint-guides.mjs nivalisnightswiki` | ✅ 0 ERROR / 1 WARN（见记录项） |
| 部署 | ✅ `deploy-wiki-site.sh` 完成，alias `https://nivalisnightswiki.vercel.app/` |
| 线上新页 | ✅ HTTP 200（`curl --resolve` 216.198.79.3），`<h1>` 计数 = 1，`<title>` 正确 |
| sitemap | ✅ 含 `cooking-recipes-rotten-food-guide` |
| GA4 | ✅ `G-WH2SMVV8EB` |
| GSC 验证文件 | ✅ `public/google12f8715471cef7b7.html` |
| `ca-pub` | ✅ 本页与本站新增代码 0 处 |

## 记录项

- **🟡 `updated-future`（时区假警报）**：`updated: 2026-10-28` 被 lint 判为「未来日期」。脚本按 UTC 比较，本机 07:50 CST 时 UTC 仍是 10-27。与 tearsofmetalwiki 10-27 同因，**非内容问题，不修**。

## 结论

**QA 结果：✅ PASS（1/1）**，无阻断项。
