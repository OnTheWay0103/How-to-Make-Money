# Probably Stolen — 页面矩阵（BUILD-PS-2026-10-28）

> 游戏：`Probably Stolen - Cyberpunk Shopkeeper Sim`（Steam app **4348910**，Questing Goose Studio / tinyBuild）
> 关键词库：`keyword-results/probablystolen.md`（2026-10-28 采集，有效词 **75**，锚定率 53.2%）
> 素材底稿：`keyword-results/probablystolen-sources.md`（A 级官方 13 组 / B 级媒体 5 条 / C 级竞对 6 条不可引用）
> 站点目录：`probablystolenwiki/`（`node scripts/new-site.mjs` 生成，域名 `probablystolenwiki.vercel.app`）
> 解锁时间：2026-10-28 14:00 CET = **北京 21:00**。本轮建站在解锁前完成，页面只写**官方已公布**内容，
> 实测类数值（房租、利润、配方、评测、CCU）一律标 `[Unconfirmed]`。

## 一、词 → 页 → 意图（MECE）

| # | 页 | slug | 搜索意图 | 覆盖词（来自 75 有效词） | 素材源 | 优先级 |
|---|----|------|---------|------------------------|--------|--------|
| 1 | FAQ / 发售信息 | `/faq` | 「什么时候出、多少钱、什么平台、有没有联机、Demo 还在吗」 | release date ×6（裸词/steam/full/game/reddit/两个全名变体）、price ×2、ps5 ×2、steam deck ×2、demo ×4、playtest ×2、wiki ×2、steamdb、steam community/discussion、mods ×2、nexus mods | A1 A2 A3 A4 A5 A9 | **P0** |
| 2 | 新手攻略 | `/guides/probably-stolen-beginner-guide` | 「刚上手先干什么、怎么不破产」 | game tips、tips and tricks、game guide、guide、how to make money ×2、how to upgrade、how to win | A1 A2 A4 A5 A6 | **P0** |
| 3 | 开局与难度 | `/guides/probably-stolen-starting-scenarios-guide` | 「9 个开局选哪个、4 个难度区别」 | rat wrangler guide、game characters、walkthrough（部分） | A4 A5 A6 A7 A8 A10 | **P0** |
| 4 | 水生意（检测/净化/换标） | `/guides/probably-stolen-water-business-guide` | 「水怎么净化、怎么卖、酒怎么做」 | water guide ×2、water purification guide、water merchant、how to make pure water、wine guide、game water guide | A3 A4 A5 A6 A7 | **P0** |
| 5 | 黑市 / 声望 / 治安 | `/guides/probably-stolen-black-market-reputation-guide` | 「地下交易所在哪、声望怎么涨、怎么躲检查」 | wiki reputation、game underground exchange、how to use underground exchange、how to bargain | A4 A6 A7 A8 | **P0** |
| 6 | Aquafarmer 水产线 | `/guides/probably-stolen-aquafarmer-guide` | 「水产开局怎么养鱼、鱼子酱怎么出」 | aquafarmer（A5 开局列表）、game water guide（部分） | A4 A5 A10 | P1 |
| 7 | 买断店铺 / 通关 | `/guides/probably-stolen-buy-out-shop-guide` | 「怎么买下店铺、怎么算赢」 | how to buy shop ×2、how to buy the store、game how to buy shop、how to win | A2 A4 A6 A7 | P1 |
| — | 后续候选 | mods / workshop、appraisal、augs、food stamps、radioactive waste | 词量不足或官方零信息（`appraisal` 四步阈值只有竞对 wiki 有，C 级不可引） | — | 解锁后按实机数据补 | P2 |

**不做的页**（有词但无官方数，硬写即编造）：
房租/买断**数值**模型、水/酒**利润表**、熔炉**纯度与配方**、9 开局**收入曲线**、鉴定**四步阈值**。
这些在矩阵里拆成「机制型」表述并入 #2/#4/#6/#7，数值位置写 `[Unconfirmed]`。

## 二、页型覆盖

| 5 类页型 | 本批落地 |
|---|---|
| Codes | 无（本作无兑换码需求，`tier list` 查询返回 0 条） |
| Beginner | #2 #3 |
| Tier list / Best builds | 无（无角色养成体系，官方 9 开局已由 #3 覆盖「best starting scenario」意图） |
| 核心机制 | #4 #5 #6 #7 |
| FAQ / Release | #1 |

## 三、写作红线（本轮）

1. 只有 A 级官方源能作事实依据；B 级只做定性交叉；**C 级竞对 wiki 的数字与文字一律不引**。
2. 价格用 A3 官方公告原文（US$19.99 / CN ¥55 / 首发 -10%），并注明「官方公告，2026-10-28」。
3. 评测数、好评率、CCU、Steam Deck 等级、实机数值：一律 `[Unconfirmed]`，不写「预计」「大约」。
4. 每页 ≥1,200 词、title 40–60 字符、description 140–160、1 个 H1、首段 40–60 词直答、表格 2–4 个。
5. 页面**不得**声称游戏已可玩、已有评测——本轮部署发生在解锁前。

## 四、验收

- `node scripts/check-content.mjs`（如有）与 QA quick 全过。
- 逐页 `wc -w` 正文 ≥1,200；抽检 ≥10 条事实逐字可回溯到 `probablystolen-sources.md`。
- 部署后 5 个 URL 线上 200 + title 正确。
