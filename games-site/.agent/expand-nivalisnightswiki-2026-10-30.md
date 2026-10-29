# nivalisnightswiki — 2026-10-30 扩词交接

## 新增攻略

- **Title**: Nivalis Nights Fill Venue Inventory Stuck: Buy Ingredients
- **Slug**: `fill-venue-inventory-stuck-guide`
- **File**: `nivalisnightswiki/content/guides/fill-venue-inventory-stuck-guide.md`
- **URL**: https://nivalisnightswiki.vercel.app/guides/fill-venue-inventory-stuck-guide
- **词数**: 1,218（不含表格，总 1,404）
- **Title/Description 长度**: 58 / 159 字符
- **Version**: 1.0（游戏 2026-09-29 发售）
- **站内攻略数**: 22 → 23

## 选题依据

**问题**：开局 "Fill Venue Inventory" 目标不推进 —— 买完东西任务栏不走，玩家以为买够了。

**玩家侧证据（真实搜索行为，2026-10-30 实采 Google Suggest，hl=en&gl=us）**：

- `nivalis nights stuck on fill venue inventory`
- `nivalis nights stuck on buy ingredients`
- `nivalis nights buy ingredients bug`

同批还出现 `green thumb quest` / `quest failed` / `quest guide` / `all quests`，说明开局任务卡点是成组需求（本轮只做最具体的一条）。

**官方侧证据**：Update #1（2026-10-01）公告原文自述 —— `Fixed an issue with the intro tutorial quest objective, where buying only the required amount from the shopping list could later cause confusion when completing the "Fill Venue Inventory" objective`。官方承认这是真实卡点并修复。

**为什么是今天写**：Update #7（2026-10-29）刚重写了配送逻辑 —— `Managers now do the ingredient delivery runs. Other staff only step in when no manager is on shift.` 站内所有旧稿（manager-restock 2026-10-26、beginner 2026-08-07）都没覆盖这条，属于"官方刚改、站内全空"的窗口。

**查重结论**（对比全部 22 篇 slug/title）：

- `manager-restock-guide`：写经理采购目标（Lean/Normal/Extra/Recent Sales）、每日预算、腐坏 —— 不写「买了东西没进店面」这一层；新篇正文首屏即声明分工并互链。
- `cooking-recipes-rotten-food-guide`：写烹饪与腐坏处理，不写仓储类型/容量。
- `beginner-guide`：pre-release 口径，未覆盖 Update #1–#7 的仓储与配送改动。
- 与 10-29 的 `get-home-after-curfew-guide`（宵禁/回家/睡觉）零重叠。
- 新 slug 与既有文件不重复。

## 来源表

| # | 层级 | 来源 | 日期 |
|---|---|---|---|
| 1 | Official | [Update #1](https://store.steampowered.com/news/app/1488490/view/699903325897752826) — 开局目标 confusion 修复、经理采购行为改进、点单重复动作修复 | 2026-10-01 |
| 2 | Official | [Update #2](https://store.steampowered.com/news/app/1488490/view/699903325897753685) — 装饰家具的仓储/冷藏值计入店面容量；Kitchen Buffet = 100 普通 + 50 冷藏；旧食材先用；员工任务优先级 | 2026-10-02 |
| 3 | Official | [Update #7](https://store.steampowered.com/news/app/1488490/view/693150463100454120) — 经理负责送货、无经理才由其他员工顶；饮料机卡杯、空杯回收、玩家可自行清杯 | 2026-10-29 |
| 4 | Official | [Steam 商店页](https://store.steampowered.com/app/1488490/Nivalis_Nights/) — 未公布仓储槽位，故流程标 Community | 2026-10-30 访问 |
| 5 | Community | [社区 wiki：Restocking / Fill Venue Inventory](https://nivalisnightsgame.wiki/business/nivalis-nights-restocking) — 购买进个人背包、须转入店面橱柜/冰箱；鸡肉冷藏、洋葱与拉面放橱柜；营业中会消耗库存 | 更新/核验 2026-10-03 |
| 6 | Editorial | 四因诊断表、五步完成顺序、版本排查表 | 2026-10-30 |

素材明细见 `keyword-results/nivalisnights-sources.md`。

## 构建与检查

| 项 | 命令 | 结果 |
|---|---|---|
| Expand 闸 | `node scripts/expansion-targets.mjs --verify nivalisnightswiki` | ✅ exit 0（PV30=2401，状态=加码） |
| 构建 | `cd nivalisnightswiki && pnpm build` | ✅ 成功，`/guides/fill-venue-inventory-stuck-guide` 出现在 SSG 路由表 |
| Lint | `node scripts/lint-guides.mjs nivalisnightswiki --changed` | ✅ 0 ERROR / 1 WARN（`updated` 在 UTC 未来，时区差） |
| 残留 | `node scripts/check-site-residue.mjs nivalisnightswiki` | ✅ 无模板残留 |
| 部署 | `./deploy-wiki-site.sh nivalisnightswiki` | ✅ 部署完成，dashboard 已注册 |
| SEO 线上 | `node scripts/seo-check.mjs --site nivalisnightswiki --live --report .agent/seo-fix-nivalisnightswiki.md` | ✅ exit 0，ERROR 0 / WARN 68（全为存量 WARN，无结构层 ERROR） |
| 广告位 | `node scripts/check-ad-slots.mjs nivalisnightswiki --live` | ✅ exit 0 |
| 线上验证 | `curl --resolve .../guides/fill-venue-inventory-stuck-guide` | ✅ HTTP 200，`<h1>` = 1，正文命中目标词 |

## QA

`.agent/qa-expand-nivalisnightswiki-2026-10-30.md` — ✅ PASS（1/1）。

## 需要主 Agent 处理

- 无结构层 ERROR，无需交接修复单。
- git commit / push 未执行（按要求）。
- 待提交文件：`nivalisnightswiki/content/guides/fill-venue-inventory-stuck-guide.md`、`keyword-results/nivalisnights-sources.md`、`.agent/qa-expand-nivalisnightswiki-2026-10-30.md`、`.agent/expand-nivalisnightswiki-2026-10-30.md`、`.agent/seo-fix-nivalisnightswiki.md`
