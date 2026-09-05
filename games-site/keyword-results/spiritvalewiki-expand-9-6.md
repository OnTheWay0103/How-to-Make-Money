# SpiritVale 每日扩充记录 — 2026-09-06

> 任务: 每日内容扩充 spiritvalewiki（重点站，PV>1000）| 站点: spiritvalewiki（SpiritVale, Baikun Interactive, Steam EA, buy-to-play, App 3767850）
> 结果: **新指南 SKIP（0.31.0 仍单源）→ 完成 updates-patch-notes 0.31.0 校准（Official tier，已部署）**
> 材料版本: HEAD 工作树 v1（spiritvale 无其他遗留；anomalypresidentwiki 属 BUILD-007 未触碰）

---

## 1. 采集范围与 0.31.0 独立来源检索结果（2026-09-06，逐个列出）

**核心问题：0.31.0 "Dark Fortress"（官方 8/25 发布）是否已出现 ≥2 个与官方一致且相互独立的来源？→ 否。** 以下是本次针对 0.31.0 / Dark Fortress / Dusk 武器 / Echo 套 / Grimoires / Bond Targets / PvP 跨服排队的全部检索条目：

| # | 来源（URL） | 检索内容 | 相关性 / 判定 |
|---|------------|---------|--------------|
| 1 | store.steampowered.com/feeds/news/app/3767850（官方 RSS，正文 [0.31.0] Dark Fortress，链接 view/693144122046809561） | WebFetch 全文抓取 | **单一官方来源**。拿到完整官方 changelog：Sanctum 地图重建加大、ET 跨实例负载均衡 + vote kick、PVP 竞技场排队改跨服、Dusk 8 件武器（Duskbreaker…Duskbringer）、Echo Set(Atk/Matk)、Face Gear、基础职业卡/Weaver 组合卡/Master 卡、Grimoires 角色绑定、Bond Targets 新词条、召唤物溅射 -50%、移速上限 +100%、boss 装备掉率重平衡、大批 bug 修复。⚠️ 正文**未确认**可游玩的「Dark Fortress 新地图」——只有 Dark Fortress mask/gear 进外观商店 + Sanctum 重建 + Dusk 武器线（修正 9/5 记录「Dark Fortress 地图」的过度解读） |
| 2 | vgspoilers.com/game/spiritvale | WebFetch 直连 | 最新仍是 **0.30.14（8/17）**；0.30.11 / 0.30.0 / 0.16.0 / 0.12.0。无 0.31.0，无 Dark Fortress → **无独立收录** |
| 3 | WebSearch: SpiritVale "0.31.0" / "Dark Fortress" / "Dark Fortress" map Baikun / "0.31" guide walkthrough / steamdb 0.31 | 多组关键词 | 全部 **0 结果**；无第三方攻略站/媒体/视频收录 0.31.0 → **无独立来源** |
| 4 | WebSearch: "Duskbreaker" OR "Duskmire" OR "Echo set" OR "Bond Targets" SpiritVale | 精确词条检索 | **0 结果** → 无任何第三方佐证这些新词条 |
| 5 | WebSearch: Grimoires character bound / Bond Targets patch notes | 精确检索 | **0 结果** |
| 6 | massivelyop.com（SpiritVale tag + September 定向） | WebSearch | 最新 SpiritVale 报道仍为 **8/17**（封禁名单 + 下个大更预告）；7/26 Make My MMO 与 8/17 均早于 0.31.0。无 9 月报道 → **无独立来源** |
| 7 | steamdb.info/patchnotes/… | WebFetch | HTTP 403（不可达）。检索到的唯一 SpiritVale SteamDB patch 为 **0.15.0 PVP（2026-03-24，EA 前 playtest）**，与 0.31.0 无关 |
| 8 | Steam 讨论区（steamcommunity.com/app/3767850） | WebSearch 定向 | 索引不可达 / 无 9/1 后新串；含 Dark Fortress/grimoires/bond targets 关键词的讨论串 **0 结果** → 无玩家反馈源 |
| 9 | Reddit r/SpiritVale | WebSearch 定向 | **0 结果**（延续 8/1、8/28、9/5 判断；英文主社区为官方 Discord） |
| 10 | store.steampowered.com/news/posts/?…appgroupname=BACK+TO+EBATORIA（"SpiritVale - Brilett"） | WebSearch 反复返回 | **污染/串台条目**：feed 归属 appgroup `BACK TO EBATORIA`、工作室写 Brilett（与 Baikun Interactive 不符），内容称 Dark Fortress/Grimoires "in development"（与 8/25 已上线的官方公告时序矛盾）。**判定：不可作为独立来源**，仅记录为检索噪音 |
| 11 | mein-mmo.de/spiritvale-steam-spieler-zahlen/ | WebFetch 核实 | 文章日期 **2026-07-21**（20k 峰值、52% 好评），早于 0.31.0 → 不相关，排除 |
| 12 | PowerUpGaming 7/22 endgame builds、ExitLag、2UpSkill、grindnstrat、LagoFast 等攻略站 | WebSearch | 全部 **7 月–8 月中**内容，早于 0.31.0，且主题已被本站覆盖 → 无增量 |
| 13 | 玩家数 tracker（tracker.gg / steamplayerstats / datahumble / raijin.gg / whatalaunch / playerauctions / technobezz） | WebSearch | 仅人口数据（8 月底 8.3K–14.5K 峰值、Mixed ~52% / ~4.8K 评测），**无内容/版本信息** → 非 0.31.0 佐证，也无具体可写问题 |

**结论**：9/6 新增检索了 9/5 未覆盖的角度（Dusk/Echo/Bond Targets 精确词条、SteamDB、mein-mmo 日期核实、Dark Fortress 地图定向、Steam 讨论区关键词），但 **0.31.0 在索引内仍只有 Steam 官方 RSS 单一来源**。触发写 Dark Fortress 深度指南的条件（≥2 独立来源且与官方一致）不满足。

---

## 2. 选题判定过程

### 2a. 0.31.0 深度指南候选 — ❌ SKIP（仍单源）

| 条件 | 判定 | 说明 |
|------|------|------|
| 高频（≥3 独立来源） | ❌ | 0.31.0 相关（Dark Fortress/Dusk/Echo/Grimoires/Bond Targets/PvP 跨服排队）在索引内**仅官方 RSS 1 个来源**；vgspoilers/MassivelyOP/SteamDB 均未收录，Reddit 0、Steam 讨论不可达。远未达 ≥2 独立来源门槛，遑论 ≥3 |
| 具体 | ⚠️ 部分 | 官方 changelog 内容具体（可读到 Dusk 每把武器效果、Bond Targets 每项来源），但**单一官方源**，无第二方实机/社区交叉验证 |
| 未被覆盖 | ✅ | 该站 39 篇 guide + updates-patch-notes 全部未提 0.31/Dark Fortress/Grimoires 绑定（0.31.0 覆盖仍为 0） |
| 不编造 | ⚠️ | 按红线「0.31.0 任何细节无独立来源即 [Unconfirmed]，绝不把单一官方源当多源证实」，把单源 changelog 展开写成「已证实」新指南风险高 |

**红线判断**：今日新增检索后仍无 ≥2 独立来源 → 0.31.0 深度指南**不写**（与 9/5 结论一致，但理由更新为「新增了 Dusk/Echo/Bond Targets 精确词条、SteamDB、mein-mmo 日期核实等检索仍全部单源/零源」，非流水账重复）。

### 2b. 其它近期高频未覆盖问题候选 — ❌ 无

- 9/1 后索引内**无任何新的玩家反馈源**：Reddit 0、Steam 讨论区不可达、MassivelyOP 停更 8/17、攻略站生态停更 8 月中、媒体无 9 月 SpiritVale 报道。
- 玩家数 tracker 显示 8 月底 8.3K–14.5K / Mixed ~52%——是人口趋势数据，非「≥3 独立来源的同一具体玩家问题」，不可写成攻略。

### 2c. 最终决定

**新指南 SKIP**（宁缺毋滥，MUST NOT 无素材硬写）。但 9/5 记录与 QA deep 均将 updates-patch-notes 滞后 0.31.0 标为 P0 事实校准，且官方源（Steam RSS）的 0.31.0 完整 changelog **本次可抓取到确切内容** → 执行任务允许的「修正过期既有页」：把 updates-patch-notes 补到 0.31.0。

---

## 3. 变更清单（已完成）

| 文件 | 变更 | 性质 |
|------|------|------|
| `spiritvalewiki/content/guides/updates-patch-notes.md` | frontmatter：updated 8/28→**2026-09-06**；description 加 0.31.0；keywords 增 spiritvale 0.31.0 / dark fortress / grimoires / bond targets / dusk weapons；related 增 echoing-spire-endgame-guide、weapons-guide；**新增 sources 三阶标注**（Official×2 + Editorial 单源说明）。正文：intro 日期行更新；Update Cadence 后**新增「What's New in 0.31.0 "Dark Fortress"」大节**（Dusk 8 武器表 + Echo/Face Gear/新卡 + 系统平衡逐条，全部逐字取自官方公告）；FAQ 更新「48 hours」表述并新增 0.31.0 Q&A | 事实校准（修正过期既有页，非新页） |
| `keyword-results/spiritvalewiki-expand-9-6.md` | 本文件 | 交接物 |
| `.agent/qa-expand-spiritvale-9-6.md` | QA 报告 | 交接物 |

**未改动**：home-content.md（无新页，无需加 Quick Navigation 行）、其余 38 篇 guide、站级渲染文件、STATS/expand-daily.json/build-history.json（主 Agent 收尾），及 anomalypresidentwiki/（BUILD-007 未触碰）。

---

## 4. 给主 Agent / 后续建议

1. **Dark Fortress 深度指南的写入门槛不变**：待 ≥2 个独立来源（vgspoilers/SteamDB 收录 0.31.0、MassivelyOP/媒体 9 月报道、或 Steam 讨论区可索引的实机反馈）出现即可写。届时素材将包括本站 updates-patch-notes 已校准确认的官方条目 + 独立来源交叉验证。
2. **注意 0.31.0 事实范围**：官方 changelog **未确认**可游玩的 Dark Fortress 新地图（只有 DF 外观 + Sanctum 重建 + Dusk 武器线）。后续若第三方提到「Dark Fortress 地图」需与官方核对，勿沿 9/5 的过度解读。
3. updates-patch-notes 现版本滞后点已清（0.31.0 已入页）；下个版本（0.31.x/0.32.0）发布后建议轮询官方 RSS 再校准。
