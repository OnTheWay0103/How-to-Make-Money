# 游戏发现复核报告 — 2026-10-24（人工复核轮）

> 岗位：游戏侦察员（`docs/agents/11` + `docs/agents/12`）
> 任务：DISC-REVIEW-1024
> 采集时间：2026-10-24 10:20–12:10 CST
> 上游：`keyword-results/discovery-2026-10-24.md`（08:30 自动轮，4 源、5 候选 #56–#60）
> 本轮性质：**只做发现、评估、证据固化**。未修改 `CANDIDATE-POOL.md`，未建站，未 commit。

---

## 一、元信息

### 1.1 与 08:30 轮次的差异

| 项 | 08:30 自动轮 | 本轮复核 |
|---|---|---|
| 搜索源 | 4 源（wishlist / SteamDB 周趋势 / 新发售 / 即将发售） | **7 源**（+ Reddit 讨论、Game Pass/主机首发、Steam Next Fest 热门 demo） |
| 新候选 | 5 个（Stormforge、Draemony、Castaway Slime、Sacrumagus、Under Canopies） | **10 个全新候选**（与 #56–#60 无重叠） |
| 关键词 | 仅 Stormforge / Chained Beasts 补采 | **10 个候选全部采样**（79 次 Suggest 前缀查询） |
| Wiki 检查 | 仅 Stormforge / Draemony 做了完整三语 | **9 个 ≥13 候选全部做 EN/ZH/JA 三语检查** |
| 数据口径 | 部分 wishlist 只有二手转述 | 每个数字带来源 URL；查不到一律 `[待确认]` |
| 结论变化 | Stormforge 由推荐降为 EA 后观察 | 确认：本轮最高分是 **Frostrail 17/20**，但**无确定发售日**；有确定日期的最高分是 **Casualties: Unknown 16/20，但英文/中文 wiki 已成熟，不建议首发建站** |

### 1.2 本轮 7 源搜索清单（查询 + 关键发现 + URL）

| # | 来源 | 实际查询 | 关键发现 | 代表 URL |
|---|---|---|---|---|
| 1 | Steam wishlist 榜 | `Steam most wishlisted upcoming games November 2026` | Casualties: Unknown 360K、Cozy Game Restoration 400K+、Stormforge 100K+、DREADMOOR top-100；GaugeDB/Steamalytics 可查实时榜 | https://gaugedb.com/wishlists ; https://steamalytics.com/upcoming |
| 2 | SteamDB trending / 周趋势 | `SteamDB trending games this week October 2026 top sellers` | W42：Dota 2 / AION 2 / CS2 / Star Wars Galactic Racer；W43：CoD MW4 预购 / Planet Zoo 2 / Enshrouded / over the hill | https://steamdb.info/topsellers/2026W42/ ; https://www.vgchartz.com/article/469406/planet-zoo-2-enshrouded-and-more-debut-on-the-steam-charts/ |
| 3 | 新发售（近 7 天） | `new Steam releases week October 19 25 2026 top games` | FF Resonance、Stupid Never Dies、We Were Here Tomorrow、Warrior Cats、Moadra、DEMONS' NIGHT FEVER；本周被 Next Fest 挤压，重磅较少 | https://www.gamegrin.com/news/top-17-new-steam-games-this-week-19th-of-october-to-the-25th-of-october-2026/ |
| 4 | 即将发售（未来 30–60 天） | `upcoming Steam games November December 2026 release date RPG survival` | Frostrail（Q4 EA）、Gravhounds（11/2）、Food Devils（11/3）、System Arrival / RIFTGROVE / Annihilated（11/10）、Draemony（11/20） | https://steamalytics.com/upcoming ; https://store.steampowered.com/app/5019800/System_Arrival/ |
| 5 | Reddit 热门讨论 | `site:reddit.com most anticipated games November 2026 Steam` / `reddit r/Games indie games to watch November 2026` | **无直接 Reddit 帖命中**（索引未返回）；替代信号：Lemmy 上 Next Fest demo 讨论提到 Wyldheart「very much in alpha」；goha.ru 论坛转述 500K wishlist | https://rimworld.gallery/m/games@lemmy.world/t/21467/What-demos-have-you-been-playing-in-the-Steam-Next/comment/223385 |
| 6 | Game Pass / 主机首发 | `Xbox Game Pass November 2026 day one games announced` | Gravhounds（11/2，day one）、VOID/BREAKER 1.0（11/4）、Escape Academy 2（11/5）、Warhammer Survivors（11/10）、Thronefall 主机版（11/11） | https://gamerant.com/xbox-game-pass-day-one-games-2026-warhammer-survivors/ ; https://windowsreport.com/5-xbox-game-pass-games-confirmed-for-november-2026-so-far/ |
| 7 | Steam Next Fest 热门 demo | `Steam Next Fest October 2026 most played demos top trending` | 官方 Top20：Probably Stolen（27,475 CCU day2）、ArcheAge Chronicles（8,006）、Frostrail（7,675）、Worst Class Ever（4,840）、Loftia（4,820）、Abyssal Lapidary（2,224）；Emberville / DREADMOOR 在列 | https://outputlag.com/news/steam-next-fest-day-2-the-most-played-demos-right-now/ ; https://news.17173.com/content/10242026/050638437.shtml |

> Reddit 源说明：两次查询均未返回 reddit.com 的帖子（可能是索引限制）。本轮**如实记录为「Reddit 维度缺失」**，未用二手转述冒充 Reddit 证据。

### 1.3 关键词采样方法（全部真实采集）

- API：`https://suggestqueries.google.com/complete/search?client=firefox&hl={en|zh-CN}&q={prefix}`
- DNS：`dig +short @8.8.8.8 suggestqueries.google.com` → `74.125.24.139` 等；curl 用 `--resolve suggestqueries.google.com:443:74.125.24.139` 直连
- 请求间隔：4.2 秒；共 **79 次前缀查询**（58 + 21），全部 HTTP 200
- 口径：只统计与本作相关的建议；同名污染（greyhounds / Annihilation / coal import duty / NJ Devils）不计入「有效词」

---

## 二、新候选总表（NEW，编号仅本报告使用，**未写入候选池**）

| # | 游戏 | 类型 | 评分 | 发售日 | Wiki 状态（三语） | 建议 |
|---|------|------|:--:|------|------|------|
| NEW-01 | **Frostrail** | 4 人 co-op 生存 FPS（列车） | **17** | Q4 2026 EA（无具体日） | ❌ EN/ZH/JA 均无专属 wiki | **定档后优先建站** |
| NEW-02 | **Casualties: Unknown** | 2D 硬核洞穴生存模拟 | **16** | 11/9 1.0 | ⚠️ EN wiki.gg + ZH 灰机 + KO namu 已成熟 | **不建议首发建站**（竞争已闭合） |
| NEW-03 | **Wyldheart** | 4 人 co-op 动作 RPG | **16** | 2026 EA（无具体日） | ⚠️ EN thegameswiki 已有深度 wiki | 推荐/观望，等定档 |
| NEW-04 | **Probably Stolen** | 赛博朋克当铺经营模拟 | **15** | 10/28 1.0 | ⚠️ EN/ZH/JA 独立 fan wiki 已起 | 观望（需求最强、竞争已密） |
| NEW-05 | **Coal Duty** | 1–5 人 co-op 采煤撤离恐怖喜剧 | **15** | 10/27 EA | ❌ EN/ZH/JA 均无 wiki | 小站可做（8–10 篇） |
| NEW-06 | **Annihilated** | Roguelite 卡牌 RPG + VN | **15** | 11/10 1.0 | ❌ EN/ZH/JA 均无 wiki | 观望/小站，注意同名污染 |
| NEW-07 | **System Arrival** | 俯视角生存动作 RPG | **14** | 11/10 EA | ❌ EN/ZH/JA 均无 wiki | 观望，等 EA 评测量 |
| NEW-08 | **Food Devils** | 战术 RPG Roguelite + 餐厅经营 | **14** | 11/3 1.0 | ❌ EN/ZH/JA 均无 wiki | 观望，需求上限有限 |
| NEW-09 | **Gravhounds** | 1–4 人 co-op 动作建造/撤离 | **13** | 11/2 EA（Game Pass day one） | ⚠️ EN fan wiki 已起；ZH/JA 无 | 观望，Game Pass 首发看流量 |
| NEW-10 | **Abyssal Lapidary** | 哥特宝石切割/经营模拟 | **11** | 无日期（2027 占位） | ❌ 无 wiki，但 ZH 攻略页已多 | 低于阈值，等定档 |

> 评分口径：搜索需求/5 + 生命周期/5 + 内容扩展/5 + 竞争结构/5。
> 竞争结构：5 = 三语均无组织化 wiki；4 = 仅单一第三方 wiki；3 = 多语言 fan wiki 已起；2 = 官方/wiki.gg/灰机等成熟 wiki；1 = 大型 wiki 生态 + 大站全覆盖。

---

## 三、≥13 候选详细分析

---

### NEW-01｜Frostrail — 17/20（本轮最高分）

**基本信息**
- 开发/发行：FakeFish（《Barotrauma》团队）/ Shiro Unlimited
- Steam app：`3517740`；发售：**Early Access Q4 2026，无具体日期**
- 类型：1–4 人 co-op 生存 FPS；驾驶蒸汽装甲列车穿越永冻荒原
- 平台/语言：PC；支持 EN/FR/DE/ES/RU/PL/PT-BR/简中

**需求证据（全部带来源）**
- **500,000+ wishlists**（Next Fest demo 公布稿）：https://www.gamespress.com/zh-TW/Frostrail-Brutal-Co-op-Survival-FPS-Debuts-Playtest-on-Steam
- Next Fest day 2 demo **7,675 CCU**（outputlag 逐小时快照）：https://outputlag.com/news/steam-next-fest-day-2-the-most-played-demos-right-now/
- Google Suggest（EN，21 次前缀）：有效词集中在 **release date / playtest / how many players / max players / ps5 / xbox / steam / co-op**；`frostrail guide`、`frostrail wiki`、`frostrail tips` 均返回 **0 条**。
- 需求侧解读：500K wishlist 说明**发售窗口流量会很大**，但当前搜索需求仍是「什么时候出/能几个人玩」，不是「怎么玩」。攻略需求将在 EA 上线后 3–7 天形成。

**供给证据（有可核验来源的机制）**
- demo 含 3 个可探索区域（教程 + 2 区域）、列车驾驶/维护、搜刮/制作、与 Revenant 战斗（官方新闻稿 + Steam demo 页）。
- 4 人 co-op、近战 + 枪械、列车模块/装甲/性能升级（GameWith 日文介绍、gamespress）。
- 需要区分：**「专精/build/列车模块表」目前是需求侧推测，尚未在 demo 中完整验证**，建站时 MUST 标 `[Unconfirmed]`。

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Frostrail wiki fandom wiki.gg guide` | ❌ 无专属 wiki；唯一命中是《怪物猎人崛起》冰属性充能斧「Frostrail」（同名武器污染） |
| ZH | `Frostrail 攻略 wiki 灰机 bilibili wikiwiki atwiki` | ❌ 无；仅 MH 武器页 |
| JA | `Frostrail 攻略 wikiwiki.jp atwiki.jp ゲーム` | ❌ 无；仅有 GameWith 游戏介绍页（无 wiki）https://gamewith.jp/gamedb/13605 |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 4 | 500K wishlist + 7,675 demo CCU 是硬数据；但 guide/wiki 类搜索尚未形成 |
| 生命周期 | 4 | EA Q4 2026 启动，生存 FPS + 列车基地有长线更新空间；扣 1 分因无确定日期 |
| 内容扩展 | 4 | 列车运营/维护、制作、战斗、生物群系、模块升级、4 人 co-op，可写面足 |
| 竞争结构 | 5 | EN/ZH/JA 均无组织化 wiki，仅有新闻/概览页 |
| **合计** | **17** | 当前最强候选，但**必须等发售日** |

**建站建议**
- **推荐，但不在今天建站**：无确定日期，预售期机制词零搜索量（与 Silver Pines 同类风险）。
- 触发条件：官方公布 EA 日期后 **立即建站**，最迟 EA 前 7 天上线。
- 首批 10–12 篇：release date / price / platforms / demo / co-op max players / crossplay / train upgrades / crafting / Revenants / beginner guide / system requirements。
- 标题锚定 `Frostrail game` / `Frostrail co-op`，规避 MH 武器同名。

**风险**
- ① 日期未定，可能滑到 2027；② 预售期攻略词几乎为零，不能按「高需求」预估早期 PV；③ 同名 MH 武器长期占 SERP，需要长尾锚定；④ 生存 FPS 竞品多，EA 口碑未验证。

---

### NEW-02｜Casualties: Unknown — 16/20（需求最强，但 wiki 窗口已关）

**基本信息**
- 开发/发行：Orsoniks（单人）/ Oro Interactive
- Steam app：`4576490`；发售：**2026-11-09 1.0**；$22.99，首发 15% off
- 类型：2D 硬核洞穴探索生存模拟（无传统 HP，按肢体/心血管/精神状态模拟）
- 语言：EN/简中/日文等（Steam 页面）

**需求证据**
- **360,000 Steam wishlists**（2026-10-15 官方新闻稿）：https://www.gamespress.com/zh-CN/Casualties-Unknown-launches-Nov-9th-with-500000-demo-players-Cave-expl
- **500,000+ demo players**；demo 长期位列 Steam 每日最热 demo Top 10（同上）
- demo 评价：**Overwhelmingly Positive，约 96%（4,500+ 英文评测）**；Steam 德语页显示 **6,598 条总评测**：https://store.steampowered.com/app/4576490/
- Google Suggest（EN，5 组前缀，50 条原始建议）：有效词非常丰富——
  1. casualties unknown multiplayer
  2. casualties unknown multiplayer mod
  3. casualties unknown multiplayer mod how to install
  4. casualties unknown multiplayer discord
  5. casualties unknown guide
  6. casualties unknown walkthrough
  7. casualties unknown beginner guide
  8. casualties unknown crafting guide
  9. casualties unknown medical guide
  10. casualties unknown medicine guide
  11. casualties unknown ending
  12. casualties unknown final boss
  13. casualties unknown final layer
  14. casualties unknown all endings
  15. casualties unknown unchipped ending
  16. casualties unknown best food
  17. casualties unknown best armor
  18. casualties unknown best items
  19. casualties unknown best storage
  20. casualties unknown best settings
- 结论：这是本轮**唯一一个 guide/ending/best/medical 四类搜索词全部成形的候选**。

**供给证据**
- 10 个主层 + 较短第 11 层 + 可选 bonus ending；demo 覆盖前 5 层。
- 3 名可玩角色、3 阶假肢、300+ 物品、制作、特质、可调 loot/danger。
- 完全模拟肢体与心血管损伤（出血、感染、失血/昏厥）、精神状态（恐惧/绝望）。
- 注意：**官方是单人游戏**；`multiplayer` 建议指向社区 mod，不是官方 co-op。建站 MUST NOT 把多人写成官方功能。

**三语 Wiki 检查（DOLOC TOWN 教训重点）**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Casualties Unknown game wiki fandom wiki.gg guide` | ⚠️ **已有成熟 wiki**：`scavprototype.wiki.gg`（Guide:Getting started、Unchipped mode、主条目）；另有 `casualtiesunknown.miraheze.org`（Wikifur 指为新官方 wiki） |
| ZH | `未知伤亡 攻略 wiki 灰机 bilibili 萌娘百科` | ⚠️ **已有灰机 wiki**：`casualtiesunknown.huijiwiki.com`（世界观、芯片、教程博客）；B 站有大量攻略视频 |
| JA | `Casualties Unknown 攻略 wiki wikiwiki.jp atwiki.jp` | ❌ 未检索到日文专属 wiki；但有韩文 `namu.wiki` 深度页（层/环境/健康数值表） |

**判定**：不是「零 wiki」。EN/ZH 已被组织化 wiki 占住，且 wiki.gg 的 Guide 页质量较高。**竞争结构 2/5**。

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 5 | 360K wishlist + 500K demo + guide/ending/best 全部成形 |
| 生命周期 | 4 | 11 层 + 多结局 + 300 物品，重复可玩性高；单人开发，后续更新节奏未知 |
| 内容扩展 | 5 | 医疗/肢体/精神状态/假肢/制作/特质，可写深度极高 |
| 竞争结构 | 2 | EN wiki.gg + ZH 灰机 + KO namu 已成熟，英文 SEO 窗口基本关闭 |
| **合计** | **16** | 分数高，但**不适合「零 wiki 抢位」打法** |

**建站建议**
- **不建议首发建站**。若一定要做，只能做**差异化工具型内容**：伤势/血压/感染计算器、全层掉落表、300 物品数据库、多结局条件图；不与 wiki.gg 拼通用攻略。
- 若做，AdSense 合规 MUST 先过：游戏含肢解、自残、药物使用、抑郁等成人内容，攻略站需避免血腥截图与细节描写。

**风险**
- ① 竞争已闭合（最大风险）；② 成人内容 AdSense 风险；③ 单人开发者更新能力有限；④ demo 96% 口碑不等于 1.0 口碑。

---

### NEW-03｜Wyldheart — 16/20

**基本信息**
- 开发/发行：Wayfinder Studios（约 10 人，ex-DICE/Embark/Mojang）/ Curve Games
- Steam app：`3642910`；发售：**Early Access 2026，无具体日期**；1.0 目标 2027
- 类型：1–4 人 co-op 动作 RPG（桌游 hex-crawl + 地牢）
- demo：2026-10-08 上线，**11/2 结束**

**需求证据**
- **500,000+ Steam wishlists / 170,000+ demo 玩家**（2026-10-23 官方 Steam 新闻）：https://store.steampowered.com/news/app/3642910/view/710037784071504145
- 第三方转述：https://gamespace.com/all-articles/news/wyldheart-reaches-500k-wishlists-170k-demo-players/
- demo CCU：all-time peak **2,120**，7 日峰值 1,154（Gaugedb / PlaytestGames）：https://gaugedb.com/app/4475270/wyldheart-demo
- Google Suggest（EN，11 组前缀）：有效词集中在 **release date / early access / beta / ps5 / xbox / classes / co-op / wiki**；`wyldheart guide`、`wyldheart tips`、`wyldheart best` 均 **0 条**。
- 结论：wishlist 极强，但当前是「什么时候出/有没有主机版」阶段，攻略需求未起。

**供给证据**
- 4 个种族（Freefolk / Mossling / Grimhorn）、19 个背景、无职业限制技能树。
- EA 含第一幕约 10 小时主线 + 15 小时可选内容；demo 含 Whisperwood、Rivermere、Slumber's Den + 3 个地牢 + Withered Keep Boss。
- 4 人 drop-in/drop-out co-op、跨平台联机（官方 publisher 页）。
- 来源：https://curvegames.com/our-games/wyldheart/ ; https://thegameswiki.com/wyldheart/wiki/the-whisperwoods

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Wyldheart game wiki fandom wiki.gg guide` | ⚠️ `thegameswiki.com/wyldheart/wiki/...` 已有深度 wiki（Whisperwoods、Combat、Skill Trees、patch notes）；无 fandom/wiki.gg |
| ZH | `Wyldheart 攻略 wiki 灰机 bilibili wikiwiki atwiki 荒野雄心` | ❌ 0 条 |
| JA | 同上查询未返回日文页；另有 `Wyldheart 攻略 wikiwiki.jp atwiki.jp` 未检索到 | ❌ 无（仅 GameWith 概览） |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 4 | 500K wishlist + 170K demo 是硬数据；但 guide/wiki 搜索未形成 |
| 生命周期 | 4 | EA 2026 → 1.0 2027，co-op ARPG 有长线更新；扣 1 分因无确定日期 |
| 内容扩展 | 4 | 4 种族 × 19 背景 × 无职业树、10+15 小时、多个地牢，可写面足 |
| 竞争结构 | 4 | 已有 1 套英文第三方 wiki；ZH/JA 零 wiki |
| **合计** | **16** | 强候选，但需等 EA 日期并与 thegameswiki 差异化 |

**建站建议**
- **推荐/观望**：等 EA 日期公布后建站；首批做 **种族/背景/build 组合、hex 地图、Boss、co-op 机制**，避开 thegameswiki 已覆盖的 Whisperwoods 流程。
- 标题锚定 `Wyldheart game` / `Wyldheart classes`（同名 Wild Hearts 污染明显，SERP 里有大量《Wild Hearts》攻略）。

**风险**
- ① 与《Wild Hearts》同名污染严重；② 已有英文 wiki 抢位；③ 日期未定；④ Lemmy 反馈称 demo「very much in alpha」，EA 内容量可能不足。

---

### NEW-04｜Probably Stolen — 15/20（本轮需求最强的新作，但攻略竞争已密）

**基本信息**
- 开发/发行：Questing Goose Studio / tinyBuild
- Steam app：`4348910`；发售：**2026-10-28 1.0**（4 天后）
- 类型：赛博朋克当铺经营模拟（单人）；空间站灰色市场
- demo：2026-09-14 上线，app `4349200`

**需求证据**
- Next Fest day 2 demo **27,475 CCU**，全场最高（outputlag 快照）：https://outputlag.com/news/steam-next-fest-day-2-the-most-played-demos-right-now/
- 被 ixbt 称为「Steam hit」，tinyBuild Connect 公布发售日：https://ixbt.games/en/news/2026/09/20/demka-kiberpank-simuliator-prodavca-nelegalnyx-tovarov-stala-xitom-steam-nazvana-data-vyxoda-polnoi-versii-probably-stolen.html
- Google Suggest（EN，7 组前缀，50+ 条）有效词非常具体：
  1. probably stolen playtest
  2. probably stolen aug
  3. probably stolen radioactive waste
  4. probably stolen mods
  5. probably stolen demo
  6. probably stolen guide
  7. probably stolen game eleanor
  8. probably stolen how to buy shop
  9. probably stolen game release date
  10. probably stolen game wiki
  11. probably stolen game rats
  12. probably stolen walkthrough
  13. probably stolen water guide
  14. probably stolen wine guide
  15. probably stolen aug guide
  16. probably stolen appraisal guide
  17. probably stolen water purification guide
  18. probably stolen best perks
  19. probably stolen ending
  20. probably stolen wiki reputation
- 结论：**需求侧本轮第一**，且词非常长尾、可写性强。

**供给证据**
- demo 3 个开局：Water Merchant / Rat Wrangler / Rock Bottom；正式版加 gunsmith / chemist / fence / farmer。
- 8 步日循环：开店 → 叫客 → 验货（logo/seal/serial/appraisal）→ 报价 → 砍价 → 成交 → 关店 → 夜间行动。
- 房租每周上涨、保险、augs（3 个识别特征）、核废料处理、养鼠、酿酒、净水器、267 件物品、mod 支持。
- 来源：https://store.steampowered.com/app/4348910/ ; https://probablystolengame.wiki/ ; https://probably-stolen.wiki/zh-cn/guide/

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Probably Stolen Cyberpunk Shopkeeper Sim wiki fandom wiki.gg guide` | ⚠️ 无 fandom/wiki.gg，但已有 2 套独立 fan wiki：`probablystolengame.wiki`、`probably-stolen.wiki`；另有 `gamewikistation.com` 数据页、tposegaming/thegamesedge 攻略 |
| ZH | `深空当铺 攻略 wiki 灰机 bilibili 萌娘百科` | ⚠️ 无灰机/萌百，但 `probably-stolen.wiki/zh-cn/`、`gamewikistation.com/.../zh-cn/`、B 站专栏、知乎全攻略已覆盖 |
| JA | `Probably Stolen 攻略 wikiwiki.jp atwiki.jp ゲーム` | ⚠️ 无 wikiwiki/atwiki，但 `probably-stolen.wiki/ja/`、`gamewikistation.com/.../ja/` 已有日文攻略 |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 5 | 27,475 demo CCU + 长尾词（水/酒/aug/鉴定/核废料/老鼠）全部成形 |
| 生命周期 | 3 | 10/28 1.0，经营模拟内容有限；tinyBuild 可能更新但无 EA 路线图 |
| 内容扩展 | 4 | 6 开局、8 步循环、鉴定/砍价/aug/房租/保险/267 物品，可写 15–20 篇 |
| 竞争结构 | 3 | 三语均有独立 fan wiki + 攻略站，且已在大规模铺词 |
| **合计** | **15** | 需求强，但「零 wiki」窗口在发售前已关闭 |

**建站建议**
- **观望**。4 天后发售，已有 wiki 在 Next Fest 期间完成铺页；此时建站只能拼**数据表/计算器**（物品价格表、鉴定真伪速查、aug 特征图、房租/保险最优策略），不适合做通用新手攻略。
- 若人工判断要做，控制在 8–10 篇工具型页面，不做全流程。

**风险**
- ① 攻略竞争密度本轮最高；② 发售在即，索引来不及；③ 经营模拟生命周期偏短；④ 游戏名 `Probably Stolen` 是通用短语，SERP 有「was stolen or has been stolen」噪声。

---

### NEW-05｜Coal Duty — 15/20（零 wiki，但需求天花板低）

**基本信息**
- 开发/发行：Corecrew Games（伊斯坦布尔 5 人团队）/ indie.io
- Steam app：`4272370`；发售：**2026-10-27 Early Access**；demo app `4661180`
- 类型：1–5 人 co-op 采煤撤离 + 恐怖喜剧；程序生成矿井、近距离语音
- 语言：13 种（含简中/日文/韩文/土耳其语）

**需求证据**
- **接近 20,000 wishlists**（2026-06-25 官方 Steam 新闻）：https://store.steampowered.com/news/app/4272370/view/675124650460578271
- **2,500 名社区测试玩家**、5,000+ playtest 申请（官方/新闻稿）：https://www.gamespress.com/Shift-Starts-October-27-Attendance-Is-Mandatory
- Google Suggest（EN，7 组前缀）：`coal duty` 的建议被 **coal import duty / coal duty boundary post / coal duty marker** 占据；仅 `coal duty steam`、`coal duty game`、`coal duty steamdb`、`coal duty demo` 与本作相关；`coal duty guide/wiki/ending/tips` 全部 **0 条**。
- 结论：wishlist 有基础，但**品牌词搜索量弱且严重被税务/边界桩污染**。

**供给证据**
- 程序生成矿井、多个生物群系、完整生物 roster、配额系统、近距离语音（怪也听得到）、hub（军营/工坊/酒馆/走私者）、逃生机器、**2 个完整结局**（第一个约 5 小时）。
- EA 计划 12–18 个月，后续加逃生路线/结局/生物/群系/hub 活动/工具物品。
- 来源：https://store.steampowered.com/app/4272370/Coal_Duty/ ; https://www.gamespress.com/Shift-Starts-October-27-Attendance-Is-Mandatory

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Coal Duty game wiki fandom wiki.gg guide` | ❌ 无 wiki；仅 Steam 商店/新闻、hopzone 预览 |
| ZH | `Coal Duty 攻略 wiki 灰机 bilibili wikiwiki atwiki` | ❌ 无；仅繁中 Steam/Fanatical 商店页 |
| JA | `Coal Duty 攻略 wikiwiki.jp atwiki.jp`（含在 ZH 查询内） | ❌ 无；仅 Game*Spark/gamebiz 新闻 |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 2 | 20K wishlist 但品牌词弱、被 coal import duty 严重污染 |
| 生命周期 | 4 | 10/27 EA，12–18 个月路线图，2 结局 + 后续内容 |
| 内容扩展 | 4 | 程序矿井、群系、生物、配额、hub、工具、逃生路线，可写 10–15 篇 |
| 竞争结构 | 5 | EN/ZH/JA 均无 wiki，仅新闻页 |
| **合计** | **15** | 零 wiki 是真，但需求上限低；适合小站试水 |

**建站建议**
- **小站可做（8–10 篇）**，10/27 EA 前上线最佳：beginner guide / quota / creatures / proximity chat / escape routes / endings / hub upgrades / biomes / co-op tips。
- 标题 MUST 用 `Coal Duty game` / `Coal Duty co-op` 锚定，避开 coal import duty。
- 若人工只想要「高分大站」，可排到 Frostrail/Wyldheart 之后。

**风险**
- ① 品牌词搜索量低；② 名字与税务/边界桩强冲突；③ 5 人首作，EA 稳定性未知；④ 恐怖喜剧题材广告主友好度一般。

---

### NEW-06｜Annihilated — 15/20

**基本信息**
- 开发/发行：Death Kumiai（デス組合）/ Flashlight Games
- Steam app：`2638080`；发售：**2026-11-10 1.0**；$16.99，首发 10% off
- 类型：暗黑可爱风 Roguelite 卡牌 RPG + 视觉小说叙事；4 条角色路线
- 语言：EN/日文/简中

**需求证据**
- **100,000 wishlists**（2026-05-19 官方 Steam 新闻）：https://store.steampowered.com/news/app/2638080/view/659358246189926119
- **150,000+ wishlists**（10 月发售日公布时）：https://gamek.vn/dat-150000-luot-wishlist-tren-steam-tua-game-nay-chinh-thuc-chot-ngay-ra-mat-bao-tin-vui-cho-nguoi-choi-178261009180126207.chn
- Google Suggest（EN，7 组前缀）：`annihilated` 被 **Annihilation（电影/游戏/漫威/OSRS）** 大面积污染；有效词仅 `annihilated game`、`annihilated game release date`、`annihilated game steam`、`annihilated game demo`、`annihilated game characters`、`annihilated steam rpg`、`annihilated release date`、`annihilated demo`、`annihilated wiki visual novel`。`annihilated guide` 返回的全是其他游戏。
- 结论：wishlist 强，但**品牌搜索被 Annihilation 吞掉**，这是和 Stormforge 同类的结构性问题。

**供给证据**
- 4 条路线（Hero/Mage/Warrior/Priest），每条约 6 小时；200,000+ 字剧本；多结局。
- 100+ 武器/物品、400+ 手绘插画；卡牌化道具（用完即碎）、Weapon Breakage、Curse Points、即死陷阱、死亡层重开。
- 来源：https://store.steampowered.com/app/2638080/ ; https://turnbasedlovers.com/news/dark-roguelite-deckbuilder-annihilated-launches-november-10/

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Annihilated game wiki fandom wiki.gg guide roguelite` | ❌ 无 wiki；仅新闻/预览 |
| ZH | `Annihilated 攻略 wiki 灰机 bilibili wikiwiki atwiki` | ❌ 无；仅「Annihilation」Minecraft 小游戏 wiki 污染 |
| JA | 同上查询未返回日文页 | ❌ 无 |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 3 | 150K wishlist 很强，但品牌词被 Annihilation 吞掉，guide 搜索几乎为零 |
| 生命周期 | 3 | 11/10 1.0，4 路线约 24 小时，故事型内容消耗后长尾弱 |
| 内容扩展 | 4 | 4 路线/200K 字/100+ 武器/卡牌/诅咒，可写 10–15 篇（含剧透分区） |
| 竞争结构 | 5 | EN/ZH/JA 均无组织化 wiki |
| **合计** | **15** | 零 wiki + 高 wishlist，但名字污染和 finite content 拉低上限 |

**建站建议**
- **观望/小站**：若做，走「数据 + 路线」而非全剧情：weapons list / curse points / boss / endings / route differences / card mechanics。
- 标题 MUST 用 `Annihilated game` / `Annihilated roguelite` 锚定；MUST NOT 只写 `Annihilated`（会被 Annihilation 淹没）。
- 剧情型内容注意剧透标注与 AdSense 内容重复风险。

**风险**
- ① 名字污染严重；② 故事型 roguelite 通关后搜索衰减快；③ 日文/简中支持意味着日文 wiki 可能在发售后快速出现；④ 视觉小说混合品类，攻略需求偏窄。

---

### NEW-07｜System Arrival — 14/20

**基本信息**
- 开发/发行：ANLI GAMES
- Steam app：`5019800`；发售：**2026-11-10 Early Access**（官方估 4–8 个月 EA，1.0 涨价 25–30%）
- 类型：俯视角生存动作 RPG；白天搜刮、夜晚守地堡；单机为主，0.6.1 加入 4 人剧情 co-op（测试中）
- 语言：11 种（含简中/日文/韩文）；**AI 生成 2D 美术披露**

**需求证据**
- 公开 wishlist / demo CCU：**未检索到 → `[待确认]`，不估算**
- Google Suggest（EN，7 组前缀）：`system arrival` 全部是通用短语（style arrival / arrival system early childhood / bus arrival system / Akamai arrival system）；`system arrival game/guide/wiki/tips/ending/steam/reddit` 全部 **0 条**。
- 结论：**品牌搜索需求基本不存在**，这是本轮需求侧最弱的候选之一。

**供给证据**
- 10 个区域可完整游玩、3 个结局、3 方阵营（人类 / Earth AI / System）。
- 地堡管理：幸存者需求/工作休息/技能、路障与夜袭防御、Intelligence/Constitution/Strength/Agility + 技能、装备、随机突变、怪物 DNA 研究解锁植入体/能力/配方。
- 0.6.1 补丁加入 4 人剧情 co-op、3 档难度、Hardcore 永久死亡。
- AI 美术披露：部分预生成 2D 美术使用生成式 AI（无运行时 AI 生成）。
- 来源：https://store.steampowered.com/app/5019800/System_Arrival/ ; https://ku.gamersky.com/2026/system-arrival/

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `System Arrival game wiki fandom wiki.gg guide` | ❌ 无；仅一个无关 StackExchange 页 |
| ZH | `System Arrival 攻略 wiki 灰机 bilibili wikiwiki atwiki` | ❌ 无；仅 Steam 社区讨论/补丁 |
| JA | 同上查询未返回日文页 | ❌ 无；atwiki 命中的是另一款恐怖游戏 |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 2 | 无 wishlist/CCU 数据，品牌词零建议 |
| 生命周期 | 3 | EA 4–8 个月，10 区域已可通关；内容量中等 |
| 内容扩展 | 4 | 地堡/幸存者/突变/DNA/阵营/结局，系统多但需实机验证 |
| 竞争结构 | 5 | EN/ZH/JA 均无 wiki |
| **合计** | **14** | 系统深度是亮点，但需求未验证，适合 EA 后观察 |

**建站建议**
- **观望**。EA 后 3–7 天看：评测量 ≥100 且「Mostly Positive」以上、SteamDB CCU 有持续峰值，再考虑 8–10 篇系统页。
- 首批若做：beginner guide / bunker layout / survivors / mutations / DNA research / factions / endings / co-op。
- AI 美术披露可能在 AdSense 审核中被问到，建站时不要放大 AI 素材。

**风险**
- ① 需求零证据；② EA 内容量未验证；③ AI 美术披露；④ 单机/co-op 描述在商店页与补丁间不一致，写站前 MUST 以最新补丁为准。

---

### NEW-08｜Food Devils — 14/20

**基本信息**
- 开发/发行：Studio Daimon（意大利小团队）/ 自发行
- Steam app：`2861730`；发售：**2026-11-03 1.0**（从 11/5 提前 2 天）；主机版 2027
- 类型：战术 RPG Roguelite + 餐厅经营 + 恋爱；末日最后一位厨师

**需求证据**
- wishlist / demo CCU：**未检索到公开数字 → `[待确认]`**
- Next Fest demo 含完整约 5–6 小时 Prologue、2 个 Food Devils、全英文 VO、存档继承。
- Google Suggest（EN，7 组前缀）：`food devils` 被 **Food Devils Lake (North Dakota) / NJ Devils game food** 污染；有效词仅 `food devils game`、`food devils release date`、`food devils steam`、`food devils platforms`、`food devils console`、`food devils switch 2`、`food devils gameplay`、`food devils wiki`、`food devils romance`、`food devils demo`；`guide/tips` 为 0。
- 结论：品牌词中等偏弱，且同名地理/体育噪声明显。

**供给证据**
- 5 个手作 Food Devils、4 个生物群系、程序生成远征、回合制网格战斗、Roguelite 进度、餐厅装饰/扩张、职业（Warrior/Shielder/Mage/Healer）、与 Devil 恋爱或配对。
- 来源：https://store.steampowered.com/app/2861730/Food_Devils/ ; https://outputlag.com/news/food-devils-moves-steam-launch-to-november-3-two-days-earlier/

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Food Devils game wiki fandom wiki.gg guide` | ❌ 无；仅一个无关 itch.io 帖 |
| ZH | `Food Devils 攻略 wiki 灰机 bilibili wikiwiki atwiki` | ❌ 无 |
| JA | 同上查询未返回日文页 | ❌ 无 |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 2 | 无公开 wishlist/CCU；品牌词被地理/体育噪声分流 |
| 生命周期 | 3 | 11/3 1.0，单机战术 Roguelite；主机版 2027 但无长线更新承诺 |
| 内容扩展 | 4 | 5 Devils × 4 群系 × 职业 × 恋爱/配对 × 餐厅经营，可写 10–12 篇 |
| 竞争结构 | 5 | EN/ZH/JA 均无 wiki |
| **合计** | **14** | 零 wiki，但需求上限和生命周期都一般 |

**建站建议**
- **观望**。11/3 发售后看评测量；若 ≥200 且特别好评，可做 8–10 篇（Devils 图鉴、职业、四群系、恋爱线、餐厅经营）。
- 标题锚定 `Food Devils game` / `Food Devils RPG`，避开 Food Devils Lake。

**风险**
- ① 需求数据缺失；② 名字污染；③ 小团队首作级别的内容量；④ 恋爱/餐厅元素可能让攻略偏窄。

---

### NEW-09｜Gravhounds — 13/20

**基本信息**
- 开发/发行：Octopus Panic（7 人，ex-343/DICE，Josh Holmes 带队）/ 自发行
- Steam app：`2440760`；发售：**2026-11-02 Early Access**（PC/Xbox/Game Pass day one）
- 类型：1–4 人 co-op 动作建造 + 撤离；重力光束、基地防御、外星蜂群

**需求证据**
- **20,000+ playtest 玩家**（2026-09 playtest，官方/新闻稿）：https://www.gamespress.com/Co-op-action-builder-GRAVHOUNDS-entering-Early-Access-on-PC-and-Xbox-N
- Game Pass day one（11/2）：https://gamerant.com/xbox-game-pass-day-one-games-2026-warhammer-survivors/
- Google Suggest（EN，8 组前缀）：`gravhounds` 被 **greyhounds（灵缇犬/赛狗）** 淹没；`gravhounds guide/wiki/best/tier list/how to` 全部 **0 条**；仅 `gravehounds release date`、`gravehounds playtest`、`gravehounds video game`、`gravehounds xbox`、`gravhounds game preview` 等少量有效/拼写错误词。
- 结论：**品牌搜索需求未被验证**，且拼写变体（gravehounds）分流。

**供给证据**
- 5 只可玩 Gravhounds（Zane/Dozer/Selene/Finn/Luna），共享 Grav Beam/管道/Reward Pod/dropship，无职业锁定。
- 基地建造：炮塔/发电机/制造机/管道网络；中期升级；高风险撤离（待越久蜂群越强）。
- 雪地/沙漠生物群系、Coffee Cat 护送、Refinery 任务；EA 至少 6 个月。
- 来源：https://www.gematsu.com/2026/08/co-op-action-builder-gravhounds-announced-for-xbox-series-pc ; https://gravhoundsgame.wiki/guides/how-to-build/

**三语 Wiki 检查**
| 语言 | 查询 | 结果 |
|---|---|---|
| EN | `Gravhounds wiki fandom wiki.gg guide` | ⚠️ 无 fandom/wiki.gg，但 `gravhoundsgame.wiki` 已有 Getting Started / Grav Beam / Build / Extract / Enemies / Roster / Tier List，且多语言（EN/FR/ES/DE） |
| ZH | `Gravhounds 攻略 wiki 灰机 bilibili wikiwiki atwiki` | ❌ 无；3DM 有攻略目录但无实质页 |
| JA | `Gravhounds 攻略 wikiwiki.jp atwiki.jp ゲーム` | ❌ 无专属 wiki；仅 GameWith 概览、4Gamer 介绍 |

**四维评分**
| 维度 | 分 | 依据 |
|---|:--:|---|
| 搜索需求 | 2 | 无公开 wishlist；品牌词被 greyhounds 淹没，guide/wiki 零建议 |
| 生命周期 | 4 | 11/2 EA，6+ 个月，co-op + 基地建造有更新空间 |
| 内容扩展 | 4 | 5 hounds、Grav Beam、基地/炮塔/管道、生物群系、任务、撤离，可写 10–12 篇 |
| 竞争结构 | 3 | 英文 fan wiki 已起且多语言；ZH/JA 无 |
| **合计** | **13** | Game Pass 首发可能带流量，但 SEO 需求未验证 |

**建站建议**
- **观望**。11/2 Game Pass 首发是最大变量：若 Xbox/PC 同时上线带来 CCU 峰值，可在 11/3–11/5 快速做 8 篇；若 CCU 平淡则跳过。
- 若做，优先 `Gravhounds game` / `Gravhounds co-op` / `Gravhounds release date`，并同时覆盖拼写 `Gravehounds`。

**风险**
- ① 搜索需求零证据；② greyhounds 同名污染 + gravehounds 拼写分流；③ 英文 fan wiki 已抢位；④ Game Pass 用户更倾向站内/视频，不一定搜攻略站。

---

## 四、低于阈值候选（简报）

### NEW-10｜Abyssal Lapidary — 11/20（观望）
- Light Worm / XD；app `3797790`；**无发售日**（Instant Gaming 占位 2027）；哥特宝石切割/当铺经营 + Lovecraftian。
- 需求：demo 2026-10-23 峰值 **4,549 CCU**（https://motekgames.de/news/abyssal-lapidary-simulation-uebers-edelsteinschleifen-geht-viral/）；但 Google Suggest 仅 `abyssal lapidary` 和 `地渊珠宝匠` 两条，guide/wiki/tips 全 0。
- 供给：原石鉴定、切割刻面、珠宝制作、客户/声望/执照、觉知值异象；demo 内容有限。
- Wiki：EN 零；ZH 无 wiki 但 233 乐园/3DM/B 站已有零散攻略；JA 零。
- 评分：需求 2 + 生命周期 2 + 内容 3 + 竞争 4 = **11**。等定档后再评估。

### 其他已筛查但未入选

| 游戏 | 原因 |
|---|---|
| ArcheAge Chronicles | 开放世界 MMO，XLGAMES/UE5，既有 ArcheAge IP wiki 生态；demo 20,507 CCU 但不适合小站打法 |
| Warhammer Survivors | Games Workshop IP + 40K/AoS 成熟 wiki 生态；$7.99 bullet heaven |
| Thronefall | PC 1.0 自 2023 年，本次仅主机版首发；超过 6 个月窗口 |
| Worst Class Ever | 1 教师 vs 5 学生非对称派对/竞技，Q4 2026 无日期；按「纯竞技/派对」跳过 |
| Stupid Never Dies | SEGA 联合发行 AA，Metascore 66、Steam 78–80% Mixed，媒体覆盖已足；低于阈值 |
| Moadra | Metroidvania，10/22 发售但 Steam 仅 1 条评测；demo 口碑好但样本太小，列入观察 |
| DEMONS' NIGHT FEVER | Disgaea 作者新作，但 Steam 早期 ~47%、峰值 ~75 CCU；需求过低 |
| We Were Here Tomorrow | 系列已有成熟 wiki/攻略生态 |
| Haunted Paws | 2 人 co-op 小狗冒险，无发售日；低于阈值 |
| Voidwood | 仅 10/15–18 playtest，无发售日 |
| RIFTGROVE | 11/10 发售，但除商店页外几乎无开发者/需求数据 |
| Titanic Survival Simulator Together | 仅 demo，无发售日 |
| MONOMOON / JOHN GLEEP | 11/11 独立小品，攻略面窄/需求低 |
| Hope in the City | 11/11 叙事解谜，非系统型攻略品类 |

---

## 五、已有候选状态变化（仅记录，不改候选池）

| 候选 | 原状态 | 本轮核实 | 建议 |
|---|---|---|---|
| **#6 Neverway** | 16 分，10 月窗口未定 | **已延期至 2027**（Niche Gamer 等多家报道），10 月窗口落空 | **降级/移出优先队列**；等 2027 新日期 |
| **#42 Emberville** | 18 分，10/27 EA | wishlist **600,000+**（9 月）；10/27 15:00 UTC EA；$29.99，首发 10% off；Next Fest demo 存档可继承 | 维持「推荐但需差异化」；数据上调 |
| **#43 DREADMOOR** | 17 分，11/9 EA | 11/9 EA 确认；top-100 most-wishlisted；Next Fest demo 在推荐名单 | 维持优先，窗口 11/9 前 |
| **#44 Loftia** | 16 分，11/3 EA | 11/3 EA；Next Fest day 2 demo **4,820 CCU**（outputlag） | 需求信号上调，排在 DREADMOOR 之后 |
| **#45 Chained Beasts** | 16 分 → 观望 | 无新增变化；10/24 关键词报告已确认名字污染重 | 维持观望 |
| **#46 Cozy Game Restoration** | 16 分，11/4 | 11/4 确认；**400K+ wishlists**；Next Fest Top24 demo | 维持推荐 |
| **#56 Stormforge** | 17 → EA 后观察 | 11/10 EA；本轮 Next Fest Top20 未见；无新关键词证据 | 维持「EA 后 3–7 天看评测 ≥300」 |
| **#57 Draemony** | 16 分，11/20 EA | 11/20 EA 确认；无公开 wishlist 数据 | 维持观望 |
| **#58 Castaway Slime** | 13 分，无日期 | 无变化 | 维持观望 |
| **#59 Sacrumagus** | 13 分，11/30 EA | 无变化 | 维持观望 |
| **#60 Under Canopies** | 12 分，10/23 EA | **10/23 已上线 EA**，$14.99（25% off）；Steam「Positive」但仅 ~12 条评测；50K+ wishlist | 状态改为「已上线」；内容量仍不足以建站 |

> 未列出的 10/23 候选（Dimraeth / Valor Mortis / over the hill / ANOMALITH / Littlelands / Drunken Goddess Reflux / Echo Weaver / Deep Dish Dungeon / Fright Train）本轮未发现状态变化，wiki 结论沿用 10/23 三语检查。

---

## 六、本轮不确定项 / 需要人工判断

1. **Frostrail 发售日**：官方只说 Q4 2026 EA，无具体日。若 11 月内定档，建议立即排建站；若滑到 2027，则降为观察。
2. **Wyldheart EA 日期**：同样只有「2026 EA」，1.0 目标 2027。需人工决定是否在日期公布前预建（不建议，预售期机制词零搜索）。
3. **Casualties: Unknown 的竞争判断**：分数 16 但竞争 2。人工需决定是「完全放弃」还是「只做工具型差异化」；按现行「零 wiki 抢位」策略，建议放弃。
4. **Probably Stolen 的时间窗**：10/28 发售，只剩 4 天；即使需求最强，索引也来不及。建议放弃本轮，转为发售后观察长尾。
5. **Annihilated 的名字污染**：150K wishlist 但 `Annihilated` 裸词被 Annihilation 吞掉。若建站，MUST 用 `Annihilated game` 锚定；人工需判断是否值得为 4 条路线做 10–15 篇。
6. **Gravhounds 的 Game Pass 变量**：搜索需求零证据，但 Game Pass day one 可能带来非搜索流量。建议 11/2 看 CCU 再决定，不做预售期投入。
7. **Reddit 维度缺失**：本轮两次查询均未返回 reddit.com 帖，已如实记录；若人工需要 Reddit 信号，建议单独用 Reddit API/站内搜索补采。
8. **数据缺口**：System Arrival、Food Devils、Gravhounds、Abyssal Lapidary 无公开 wishlist/CCU，均标 `[待确认]`，未估算。

---

## 七、本轮结论（给主 Agent 的决策建议）

1. **最高分 Frostrail 17/20，但不能今天建站**：无确定日期，等官方定档后立即执行；这是当前唯一同时满足「500K wishlist + 三语零 wiki + 长线 EA」的候选。
2. **有确定日期、可立即执行的候选**：
   - **Coal Duty（15，10/27 EA，三语零 wiki）** — 需求弱但窗口最近，适合 8–10 篇小站。
   - **Annihilated（15，11/10，三语零 wiki）** — 150K wishlist，但名字污染重，适合小站+长尾锚定。
   - **Wyldheart（16，日期未定）** — 等定档；已有 1 套英文 wiki，需差异化。
3. **不建议建站**：
   - **Casualties: Unknown（16）** — EN wiki.gg + ZH 灰机已成熟，零 wiki 窗口关闭。
   - **Probably Stolen（15）** — 三语 fan wiki 已在 Next Fest 期间铺满，且 4 天后发售。
   - **Gravhounds（13）** — 搜索需求零证据 + 英文 fan wiki 已起，等 Game Pass 首发数据。
4. **已有候选**：Neverway 延期 2027，建议降级；Emberville 600K wishlist、DREADMOOR 11/9、Loftia demo 4,820 CCU 均维持/上调优先级。
5. **候选池未改动**：本报告所有 NEW 编号仅供人工审核；合并进 `CANDIDATE-POOL.md` 由主 Agent/人工执行。

---

## 八、来源清单（按主题）

**榜单 / 趋势**
- https://gaugedb.com/wishlists
- https://steamalytics.com/upcoming
- https://steamdb.info/topsellers/2026W42/
- https://www.vgchartz.com/article/469406/planet-zoo-2-enshrouded-and-more-debut-on-the-steam-charts/
- https://www.gamegrin.com/news/top-17-new-steam-games-this-week-19th-of-october-to-the-25th-of-october-2026/
- https://outputlag.com/news/steam-next-fest-day-2-the-most-played-demos-right-now/
- https://news.17173.com/content/10242026/050638437.shtml
- https://www.neowin.net/news/steam-next-fest-is-live-with-thousands-of-more-free-pc-game-demos/

**Frostrail**
- https://store.steampowered.com/app/3517740/
- https://www.gamespress.com/zh-TW/Frostrail-Brutal-Co-op-Survival-FPS-Debuts-Playtest-on-Steam
- https://gamewith.jp/gamedb/13605

**Casualties: Unknown**
- https://store.steampowered.com/app/4576490/
- https://www.gamespress.com/zh-CN/Casualties-Unknown-launches-Nov-9th-with-500000-demo-players-Cave-expl
- https://www.indie-exposure.com/casualties-unknown-launch-date/
- https://scavprototype.wiki.gg/wiki/Guide:Getting_started
- https://casualtiesunknown.huijiwiki.com/wiki/世界观
- https://namu.wiki/w/Casualties:%20Unknown/층계

**Wyldheart**
- https://store.steampowered.com/app/3642910/
- https://store.steampowered.com/news/app/3642910/view/710037784071504145
- https://gamespace.com/all-articles/news/wyldheart-reaches-500k-wishlists-170k-demo-players/
- https://curvegames.com/our-games/wyldheart/
- https://thegameswiki.com/wyldheart/wiki/the-whisperwoods
- https://gaugedb.com/app/4475270/wyldheart-demo

**Probably Stolen**
- https://store.steampowered.com/app/4348910/
- https://ixbt.games/en/news/2026/09/20/demka-kiberpank-simuliator-prodavca-nelegalnyx-tovarov-stala-xitom-steam-nazvana-data-vyxoda-polnoi-versii-probably-stolen.html
- https://probablystolengame.wiki/
- https://probably-stolen.wiki/zh-cn/guide/
- https://gamewikistation.com/games/probably-stolen/about/

**Coal Duty**
- https://store.steampowered.com/app/4272370/Coal_Duty/
- https://store.steampowered.com/news/app/4272370/view/675124650460578271
- https://www.gamespress.com/Shift-Starts-October-27-Attendance-Is-Mandatory
- https://www.combocaster.pt/2026/10/coal-duty-entra-em-early-access-no-steam-a-27-de-outubro/

**Annihilated**
- https://store.steampowered.com/app/2638080/
- https://store.steampowered.com/news/app/2638080/view/659358246189926119
- https://gamek.vn/dat-150000-luot-wishlist-tren-steam-tua-game-nay-chinh-thuc-chot-ngay-ra-mat-bao-tin-vui-cho-nguoi-choi-178261009180126207.chn
- https://turnbasedlovers.com/news/dark-roguelite-deckbuilder-annihilated-launches-november-10/

**System Arrival**
- https://store.steampowered.com/app/5019800/System_Arrival/
- https://ku.gamersky.com/2026/system-arrival/
- https://steamdb.info/app/5019800/

**Food Devils**
- https://store.steampowered.com/app/2861730/Food_Devils/
- https://outputlag.com/news/food-devils-moves-steam-launch-to-november-3-two-days-earlier/
- https://monstervine.com/2026/10/food-devils-steam-demo-tactical-rpg-romance/

**Gravhounds**
- https://www.gematsu.com/2026/08/co-op-action-builder-gravhounds-announced-for-xbox-series-pc
- https://www.gamespress.com/Co-op-action-builder-GRAVHOUNDS-entering-Early-Access-on-PC-and-Xbox-N
- https://gamerant.com/xbox-game-pass-day-one-games-2026-warhammer-survivors/
- https://gravhoundsgame.wiki/guides/how-to-build/

**Abyssal Lapidary**
- https://store.steampowered.com/app/3797790/Abyssal_Lapidary/
- https://motekgames.de/news/abyssal-lapidary-simulation-uebers-edelsteinschleifen-geht-viral/
- https://beta.robotsoverdinosaurs.net/abyssal-lapidary-is-making-the-social-media-rounds-and-i-can-confirm-cutting-gemstones-is-just-as-satisfying-as-it-looks/

**已有候选状态**
- Neverway 延期 2027：https://nichegamer.com/horror-life-sim-neverway-gets-delayed-to-2027/
- Emberville 10/27 EA + 600K wishlist：https://www.gamespress.com/en-GB/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo
- DREADMOOR 11/9：https://www.gamespress.com/zh-CN/Spooky-Fishing-Adventure-DREADMOOR-Sets-Course-for-Steam-Early-Access-
- Loftia Next Fest CCU：https://outputlag.com/news/steam-next-fest-day-2-the-most-played-demos-right-now/
- Cozy Game Restoration 400K：https://thegg.net/press-releases/cozy-game-restoration-now-has-over-400k-steam-wishlists-ahead-of-november-4th-launch/
- Under Canopies 10/23 EA：https://www.gamespress.com/Under-Canopies---Now-Available-on-Steam-Early-Access
