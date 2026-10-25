# ANOMALITH — Google Suggest 关键词

> 采集日期: 2026-10-25 | 原始建议: 350 | 去重: 188 | 有效词: 28 | 噪声率: 85.1%（原始词条口径 84.0%）
> 采集方式: Google Suggest API（57 次请求 = 3 个锚定批次 + 10 个补充种子；全部 HTTP 200，0 失败；本机 DNS 未投毒，直连 `suggestqueries.google.com` 成功）
> 游戏: ANOMALITH（FuRyu 发行 / Winning 开发，生存第三人称射击，2026-10-29 发售，PS5 / Switch 2 / Steam）
> 站内状态: **尚未建站** → 命中率对照 **N/A**（仓库内无 ANOMALITH 站点，无任何既有攻略可对比）

## 方法备注（影响结论，MUST 记录）

首次按 `anomalith game` 作锚定词采集，Google 把 `anomalith` 归一成 `anomaly`，71 条去重建议里只有 **3 条**属于本作（4.2%）。改用**裸词 `anomalith`** 作锚定后，15 条补全里 13 条属于本作，整批 111 条去重里 **26 条**有效（23.4%）。

结论：本作的品牌补全只在**裸词**下触发；追加通用词（game / guide / tips）会让 Google 回退到 `anomaly`。后续复采 MUST 用裸词锚定。

## 有效关键词（28 条，已去重）

> 说明：以下每条均来自实际 Suggest 返回，无编造。28 条为**去重词条**，其中 `anomalith demo ps5` 与 `anomalith ps5 demo`、`anomalith ps5 gameplay` 与 `anomalith gameplay` 属近重复变体。

### 1. 发售 / 平台 / 实体版 (10)
- anomalith ps5
- anomalith switch
- anomalith switch 2
- anomalith steam
- anomalith ps5 release date
- anomalith physical
- anomalith physical release
- anomalith switch 2 physical
- anomalith launch edition ps5
- anomalith ps5 amazon

### 2. Demo / 试玩 (7)
- anomalith demo
- anomalith demo ps5
- anomalith ps5 demo
- anomalith demo switch 2
- anomalith switch 2 demo
- anomalith demo review
- anomalith demo reddit

### 3. 评测 / 口碑 / 社区 (3)
- anomalith review
- anomalith game review
- anomalith reddit

### 4. 玩法 / 系统 (2)
- anomalith gameplay
- anomalith ps5 gameplay
（代表词不足 5 个——该主题需求极薄，**没有任何** boss / weapons / build / crafting / tier list 类品牌词）

### 5. 厂商 / 日文入口 (5)
- anomalith furyu
- anomalith furyu survival horror
- アノマリス/anomalith steam
- アノマリス/anomalith ps5
- アノマリス/anomalith demo

### 6. 品牌锚定 (1)
- anomalith game

### 低置信词（未计入 28 条，需发售后复核）
`anomaly ps5 review`(2x)、`anomaly switch 2 review`、`anomaly switch 2 physical`、`anomaly release date`(4x)、`anomaly demo`、`anomaly game ps5`、`anomaly game physical copy`、`anomaly physical copy`、`anomaly physical edition`、`anomaly pre order bonus`、`anomaly switch physical`、`anomaly trophy guide`
原因：这些词在平台/实体版维度与本作高度吻合，可能是用户漏打 `ith`；但 `Anomaly` 本身是既有游戏名/通用词，无法确认归属，故不纳入有效词。

## 内容优先级建议

1. **发售日、平台与实体版（P0，10 词）** — `release date` / `ps5` / `switch 2` / `steam` / `physical` / `physical release` / `switch 2 physical` / `launch edition ps5` / `ps5 amazon` / `switch`。2026-10-29 发售，PS5 / Switch 2 / Steam 三平台，含实体版（Switch 2 为游戏密钥卡）与 launch edition。这是当前最大的高意图入口，必须做一页持续更新的 release/platform/edition tracker，覆盖「哪个版本能买到、实体版含什么、Amazon 是否有货」。
2. **Demo 全指南（P0，7 词）** — `demo` / `demo ps5` / `demo switch 2` / `demo review` / `demo reddit` / `ps5 demo` / `switch 2 demo`。正式体验版 2026-10-08 已在三平台上线，搜索明确围绕「哪个平台有 demo、demo 多长、进度是否继承、值不值得玩」。做一页 demo 入口 + 常见问题（进度不继承、可获赠服装等需以官方为准），并单列一段 demo 试玩感受。
3. **评测汇总与口碑（P1，3 词）** — `review` / `game review` / `reddit`。发售前后是评测词峰值；做 review roundup（标注媒体评分与样本量）+ Reddit 社区口碑摘要，避免单篇「我们的评分」式内容。
4. **玩法与战斗系统总览（P1，2 词，需求薄）** — `gameplay` / `ps5 gameplay`。仅 2 词且无深度系统词，说明玩家目前先关心「是什么、能不能玩」，尚未进入 build/武器研究阶段。先做一篇 systems overview（TPS 战斗、枪械、格挡/parry、探索循环），**不要**按传统 ARPG wiki 铺 10+ 篇系统页。
5. **FuRyu / 日文别名入口（P2，5 词）** — `furyu` / `furyu survival horror` / `アノマリス` × 3。日文片假名与英文名在 Suggest 中已绑定，可在 title/正文自然带入 `アノマリス / ANOMALITH`，承接罗马字与片假名双向检索；但本站为英文站，日文流量优先级低于前四项。

**首批篇数：6–8 篇**（有效词 28，按 harvest-keywords 的「< 50 词 → 8 篇」档位；扣除近重复变体后取 6–8）。发售日（10-29）前至少上线 P0 的 2 篇，其余在发售后 7 天内补齐。

## 采集覆盖（证据链）

| 批次 | 请求数 | 原始建议 | 去重 | 有效词 |
|------|:--:|:--:|:--:|:--:|
| 锚定词 `anomalith game`（10 前缀 + 10 种子） | 19 | 95 | 71 | 3 |
| 裸词探针（`anomalith` / steam / ps5 / release / reddit / review / gameplay / switch 2 等） | 8 | 74 | 57 | 23 |
| 裸词 `anomalith` 锚定（10 前缀 + 10 种子） | 20 | 127 | 111 | 26 |
| 补充种子（walkthrough / parry / ending / length / price / metacritic / trophy / gun 等） | 10 | 54 | 35 | 0 |
| **合计（去重后并集）** | **57** | **350** | **188** | **28** |

关键单条返回（裸词 `anomalith`，15 条补全中 13 条属于本作）：
`anomalith game` / `anomalith ps5` / `anomalith switch 2` / `anomalith demo` / `anomalith review` / `anomalith physical` / `anomalith steam` / `anomalith switch 2 physical` / `anomalith reddit` / `anomalith demo ps5` / `anomalith gameplay` / `anomalith furyu` / `anomalith switch`（另 2 条为 `anomaly release date`、`animality ps5 physical`）

补充种子 `walkthrough` / `parry` / `ending` / `length` / `price` / `metacritic` / `trophy` / `gun` 全部 0 有效——说明**攻略型长尾尚未形成**，符合发售前 4 天的阶段特征。

## 噪声词（已剔除，160 条）

四类合计 160 条（占去重 188 条的 85.1%）。

### 1. Anomali（网络安全厂商）/ Anomalyst（工作室）/ anomalib（库）— 17 条，占原始建议 82 次（350 条中的 23.4%）
anomali analytics、anomali api docs、anomali class、anomali confidence score、anomali distributor、anomali missing、anomali singapore、anomali threatstream review、anomali wiki、anomalib reddit、anomalyst、anomalyst singapore、anomalyst studio、anomalyst studio reviews、anomalyst studios、competitors of anomali、tip anomali
原因：与 `anomalith` 只差尾部字符的真实企业/产品名；`anomali analytics`、`anomali singapore`、`anomalyst` 是重复率最高的三条噪声，说明 Google 在多数补全场景仍优先匹配这些成熟实体。

### 2. 泛 `anomaly` 技术 / 医疗 / 语言学（23 条，约 31 次）
anomaly scan、anomaly scan cost singapore、anomaly scan kkh、anomaly scan price singapore、anomaly scan singapore、anomaly detection、anomaly detection with clip、beginning anomaly detection、best anomaly detection algorithms、build anomaly detection、how to enable anomaly detection、how to evaluate anomaly detection model、how to prevent insertion anomaly、what is anomaly testing、anomaly meaning、anomaly pronunciation、anomaly synonym、anomaly vs abnormality、anomaly or abnormality、anomaly in a pattern、anomalies in math、anomaly prevention、congenital anomaly of coronary vessels
原因：通用英文词/医学词（新加坡产检扫描）/数据科学词，与游戏无关。

### 3. 其他 `anomaly` 游戏与作品（66 条，约 103 次）
高频：`anomaly games crypto`(15x)、`anomaly tok`(5x)、`anomaly bistro`(4x)、`best anomaly games`(3x)、`anomalies strategy`(3x)
代表：anomaly games、anomaly games on ps5 / xbox / steam / roblox / android / pc / online / free、anomaly game horror、anomaly game subway、anomaly game review、anomaly game ps5、anomaly zzz、anomaly mechanics zzz、anomaly guide ac valhalla、anomaly tier list、tier list anomalies once human、what to do with anomalies stalker、all exit 8 anomaly、anomaly 2 trophies、anomaly arbitration hsr、anomaly wiki、wikipedia anomaly
原因：`Anomaly` 是既有游戏名与通用品类词（含《Once Human》《绝区零》《AC 英灵殿》《Stalker》《Exit 8》等具体作品），与 ANOMALITH 无关。

### 4. 本地商家 / 无意图 / 邻近拼写（54 条，约 78 次）
anomaly bistro / bar / bar and bistro / bbq / cafe / cafe roblox / aliwal / animal hospital / bio / mouse / ruler、anomaly vlog major / vlogs、animality ps5、animality ps5 physical(5x)、weapons singapore、weapons found in singapore、weapons which are not guns、weapons unmoored world、weapon from another world、weapon nuclear bike、pre order list、pre order vs order、do you get pre orders early、switch 2 differences、switch 2 vs switch pro、who are switch 2、ittle dew 2 switch review、how to play 5 card plo / pit with 4 players / spot it with 4 players、beginner vs enthusiast、beginning nomads、solo anoa'i、when was 1.16.5 released、game anomali train / online anomali / pc anomali 等
原因：新加坡本地餐饮/诊所、语法类查询、`animality` 邻近拼写（PS5 实体版话题）、以及种子词串味。

## 判断

- **需求侧：中等偏窄，但真实。** 57 次请求里 28 条有效词几乎全部围绕「买哪个版本 / demo / 评测」（仅 gameplay ×2 与 furyu 系例外）；`anomalith` 裸词能稳定触发 13/15 条品牌补全，说明品牌导航需求已经起来（对比 Draemony 的 0 条）。但深度系统词为 0，短期只能支撑 6–8 篇，不足以撑起 15 篇以上的 wiki。
- **同名污染：严重但可控。** 噪声率 85.1%，其中 Anomali（网络安全公司）与 `anomaly` 通用/技术词合计占原始建议约 32%（82 + 31 / 350）；再加上其他 `anomaly` 作品词，泛 `anomaly` 相关噪声合计约占 62%。与 Stormforge 不同的是：**精确 token `anomalith` 的补全几乎全部属于本作**，污染只在追加通用词/Google 回退时出现。因此页面标题和 H1 MUST 始终包含完整拼写 `ANOMALITH`，MUST NOT 用 `Anomaly` 简写或只写 `ANOMALITH game` 作锚定。
- **供给侧：零组织化英文 wiki**，日文媒体（Famitsu / Gamer / ASCII / AUTOMATON）已密集覆盖新闻与 demo 情报，但英文攻略页仍是空白。
- **建议：build（窄站 6–8 篇），前提是能在 2026-10-29 发售前上线 P0 两篇**；若赶不上发售日，降级为 **wait**，在发售后 7 天（约 11-05）用裸词锚定复采——届时若出现 `anomalith boss` / `anomalith weapons` / `anomalith build` / `anomalith trophy` 等深度词，再扩到 10–12 篇；若仍只有发售/平台词，保持 6 篇不再扩。
- **复采注意**：MUST 用裸词 `anomalith` 锚定；用 `anomalith game` 会把有效率打到 4%。
