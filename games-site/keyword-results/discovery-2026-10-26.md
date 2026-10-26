# 发现轮报告 — 2026-10-26

> 执行：游戏侦察员（`docs/agents/11` / `12`）
> 下游：候选分析员（`22` / `23`）
> 本报告只做「发现 + 硬筛 + 证据」，**不含四维评分、不含建站建议**（评分见 `selection-{date}.md`）。

## 0. 本轮口径变化（为什么不是继续扫预售期）

- 10-25 入池的 7 个候选（#61–#67）全部是「未发售 / 预售」游戏。
- 10-26 实测两个最高分候选：
  - **Hela**（12/1 发售）：42 个有效词，**攻略型占比 0%**，全部是发售日 / 平台 / 价格类 FAQ → 触发「发售日陷阱」，需求封顶 3 分。
  - **UnderMire**（11/13）：219 条去重建议里只有 **2 条**有效词，99% 是 `UnderMine` 同名噪声。
- 结论：**预售期挖不出攻略型词**。本轮起扫描重心改为「**已发售 0–30 天、评测数 ≥300**」的游戏。

本轮硬筛条件：

1. 发售日在 **2026-09-26 至 2026-10-26** 之间（≤30 天）；
2. Steam 评测数 **≥300**（第三方快照，注明来源与口径）；
3. 跳过 AAA、纯竞技、超休闲、视觉小说、已停服、发售超 6 个月；
4. 按游戏名查重，排除已在 `keyword-results/CANDIDATE-POOL.md` 的候选。

---

## 一、搜索日志（6 个来源：S1–S3 为指定源，S4–S6 为补充源）

### S1 — Steam 新品 / 热销榜（新品与近期发售）

| 项 | 内容 |
|---|---|
| 入口 | `https://store.steampowered.com/search/?filter=popularnew&supportedlang=english&ndl=1` |
| 查询 | `filter=popularnew`（新品热销） |
| 结果 | **不可达**。本机 DNS 解析 `store.steampowered.com` → `23.45.138.131`（AliDNS / 8.8.8.8 一致），`curl --resolve` 25s 超时 `HTTP=000 size=0`；`api.steampowered.com` 同样超时；`steamcommunity.com` `Recv failure`；WebFetch `ETIMEDOUT` |
| 替代 | GameGrin「Top 17 New Steam Games This Week（10/19–10/25）」+ GameGrin「Weekly Top Paid Games on Steam（10/13–10/20）」+ VGChartz 周榜 |
| 替代 URL | https://www.gamegrin.com/news/top-17-new-steam-games-this-week-19th-of-october-to-the-25th-of-october-2026/ ；https://www.gamegrin.com/news/weekly-top-paid-games-on-steam-13th20th-of-october-2026/ ；https://www.vgchartz.com/article/469406/planet-zoo-2-enshrouded-and-more-debut-on-the-steam-charts/ |
| 发现 | 10/19–25 新作：FINAL FANTASY RESONANCE（10/22）、THE DEAD WE KNEW（10/22）、We Were Here Tomorrow（10/20）、Warrior Cats: Clans of the Forest（10/23）、Stupid Never Dies（10/21）、Escape from Playtime（10/21，已在池 #63）、Star Trek: Outposts Unknown（10/20）、Moadra（10/22）、DEMONS' NIGHT FEVER（10/21）、Blue Ridge Hunting（10/20，后延期）等；周销榜头部为 CoD MW4、Planet Zoo 2、Enshrouded 1.0、over the hill（已在池 #49） |

### S2 — SteamDB 发售周榜 / 趋势

| 项 | 内容 |
|---|---|
| 入口 | `https://steamdb.info/calendar/` |
| 结果 | **不可达**。`curl` 返回 `HTTP=403 size=10287`；WebFetch 同样 `HTTP 403 Forbidden`（SteamDB 屏蔽数据中心 IP） |
| 替代 | GameGrin「Top-rated Steam PC Games Released Last Week（10/19–10/25）」按**评测数 + 好评率**排序；`steamcozy.com/new/` 新品页 |
| 替代 URL | https://www.gamegrin.com/news/top-rated-steam-pc-games-released-last-week-19th25th-of-october-2026/ ；https://steamcozy.com/new/ |
| 发现 | 10/12–16 一批 ≥300 评测作品：over the hill 2,232（92%，已在池）、Warhammer 40,000: Boltgun 2 505（93%）、Trash Day 379（95%）、Shipping Store Simulator 2037 369（95%）、Tenebris Somnia 359（94%）、Enshrouded 96,018（86%，已有大 wiki）；10/5–11 一批：Order of the Sinking Star 1,439（97%）、Afterbeat 2,489（95%）、Hellraiser: Revival 3,506（94%）、TUNG 3,060（88%）、Neon Abyss 2 426（87.8%）、Invokyr 417（94%） |

### S3 — Steam / Reddit 评测量排序

| 项 | 内容 |
|---|---|
| 查询 1 | `site:reddit.com new co-op horror game October 2026 Invokyr OR "Order of the Sinking Star" OR Hellraiser` |
| 结果 1 | **无结果**（WebSearch 返回 `No links found`），无法用 Reddit 做排序 |
| 查询 2 | `https://steamcharts.com/top`（全站在线榜） |
| 结果 2 | `HTTP=200 size=44192`，但榜单是全站常青游戏，**不含新作评测数**，不能用于本题硬筛 |
| 替代 | GameGrin 周榜（评测数 + 好评率）+ 单游戏评测快照：VaporLens / Gamalytic / steamcozy / niklasnotes |
| 发现 | 本轮候选评测量集中在 400–7,000 区间；TUNG（2,583–3,200）、Invokyr（629–936）、Order（2,551–2,989）、Hellraiser（~6,858）为第一梯队 |

### S4 — 补充源：Game\*Spark 每日 Steam 精选（日本）

| 项 | 内容 |
|---|---|
| 查询/URL | https://news.infoseek.co.jp/article/gamespark_173859/（10/20，5 选）；https://news.infoseek.co.jp/article/gamespark_174012/（10/23，16 选） |
| 发现 | 10/20：最大 8 人协力的钓鱼恐怖正式版、等；10/23：时间循环 3 人 Roguelite 策略正式版等；用于交叉确认 10/19–23 的发售密度 |

### S5 — 补充源：PC Mod Gamer 周报第 438 回

| 项 | 内容 |
|---|---|
| URL | https://pcmodgamer.com/gaming-news/weekly-steam-release-438 |
| 发现 | 当周重点：FINAL FANTASY RESONANCE（10/23）、Mycopunk（10/21，已在池 #65）、Every Day We Fight（10/23，1.0）、Dungeon Inn（10/23，1.0）、Stupid Never Dies（10/22） |

### S6 — 补充源：GameGrin 隐藏佳作 / vgtimes 发售日历

| 项 | 内容 |
|---|---|
| URL | https://www.gamegrin.com/news/8-hidden-gems-launching-on-steam-this-week-19th-of-october-to-the-25th-of-october-2026/ ；https://vgtimes.com/games/release-dates/windows-pc/sort-date/9-october-2026/ |
| 发现 | Horror Tales Eats The World、Lighthouse of Madness、Dearbnb、Cutout Village、ALYSSA、Warding Witches、WOIM、The last keeper 等小体量作品；评测量均未达 300，仅作背景 |

### 来源可达性备注（按 Profile「采集通道规则」）

- Steam 三个域名（store / api / community）在本机均不可达，**不是「被墙」结论，是当前网络路径不可达**；本轮按规则如实记录缺失维度，用第三方页替代，未编造 Steam 一手数据。
- SteamDB 403 属站点反爬，不是本机 DNS 问题。
- 所有评测数均为**第三方快照**，标注来源与日期；同一游戏不同快照会波动，正文给区间。

---

## 二、硬筛结果

### 2.1 通过硬筛（本轮入池候选，7 个）

| # | 游戏 | 发售日 | 评测数（快照） | 类型 | 判定 |
|---|---|---|---|---|---|
| 1 | **Invokyr** | 10/8 EA | 629–936（94%） | 1–6 人 Co-op 生存恐怖 / 诅咒桌游 | ✅ 入池 |
| 2 | **Order of the Sinking Star** | 10/8–10/9 | 2,551–2,989（97%） | 解谜冒险（Jonathan Blow/Thekla） | ✅ 入池 |
| 3 | **Clive Barker's Hellraiser: Revival** | 10/8 | ~6,858（93.5%） | 第一人称生存恐怖动作（Saber） | ✅ 入池 |
| 4 | **TUNG** | 10/6 1.0 | 2,583–3,200（88%） | 第一人称短篇恐怖（免费） | ✅ 入池（有疑点） |
| 5 | **Neon Abyss 2** | 10/7–10/8 1.0 | ~1,954（69%） | Roguelite 横版射击 | ✅ 入池（薄 wiki/资料库已起） |
| 6 | **Every Day We Fight** | 10/22 1.0 | 427–428（72–74%） | 回合制战术 Roguelite | ✅ 入池（官方薄 wiki） |
| 7 | **Dungeon Inn** | 10/23 1.0 | 629–675（93%） | 回合制经营策略 | ✅ 入池（活跃度疑点） |

### 2.2 未通过硬筛（记录理由，保留轨迹）

| 游戏 | 发售日 | 评测数（快照） | 淘汰理由 |
|---|---|---|---|
| Tenebris Somnia | 10/16 | 500–520（94%） | **已有专属 wiki** `tenebrissomnia.wiki`（EN + JA，含全流程/奖杯/BOSS），不符合「零/薄 wiki」目标；另有 Prima Games、Gamersky、360game、Into Indie Games 攻略 |
| Warrior Cats: Clans of the Forest | 10/23 | 900+（~47%） | **已有专属 wiki** `warriorcatswiki.wiki` + 多家攻略站；且首发 Mostly Negative → Mixed，口碑风险 |
| We Were Here Tomorrow | 10/20 | 171–185（65%） | 评测数 <300 |
| Stupid Never Dies | 10/21 | ~117（76–84%） | 评测数 <300 |
| Moadra | 10/22 | `[待确认]`（VaporLens 73% 情绪，未见总量；3DM ~60 评分） | 评测数未能核实 ≥300，按规则不猜测 |
| THE DEAD WE KNEW | 10/22–23 | ~306（9–13%） | 评测数刚过线，但 **13% 好评 / Very Negative**，350K wishlist 兑现失败；玩家基数快速流失 |
| DEMONS' NIGHT FEVER | 10/21 | `[待确认]`（峰值 CCU 75，SteamDB 约 47%） | 活跃度与口碑过低，评测数未核实 ≥300 |
| Blue Ridge Hunting | 延期至 10/26 | 0 | 发售当晚 Valve 未过审，延期；无评测数据 |
| Trash Day | 10/13 | 200–300+（96%） | 评测数在 300 线上下波动；主线 2–3 小时，内容量偏薄 |
| Shipping Store Simulator 2037 | 10/14 | 52 / 155 / 588（来源冲突） | 评测数口径冲突，且为物流管理模拟，攻略面窄 |
| Nientum - Op.ZERO | 10/14 | 218–329 | 评测数未稳定过 300 |
| Witch Cabin Cleanup | 10/12 | 240–296 | 评测数 <300 |
| Alice Nation | 10/15–16 | 167–291 | 评测数 <300 |
| The Witch's Bakery | 10/14 | 174–283 | 评测数 <300 |
| Barfender: CO-OP Bar Simulator | 10/12 | 274 | 评测数 <300 |
| Devices Tycoon | 10/16 | 332 | 过线，但模拟经营攻略面窄，暂不入池 |
| Burn With Me | 10/12 | 274–314 | 评测数在 300 线上下；卡牌构筑内容可写，但先观察 |
| Enshrouded 1.0 | 10/15 | 96,018（86%） | 已有成熟 wiki 生态 |
| Planet Zoo 2 | 10/13–20 周榜 | `[待确认]` | 大 IP 模拟经营，已有攻略/wiki 生态 |
| Call of Duty: Modern Warfare 4 | 10/23 | `[待确认]` | AAA，跳过 |
| FINAL FANTASY RESONANCE | 10/22 | `[待确认]` | Square Enix AAA，已有攻略生态 |
| ACE COMBAT 8 | 10/2 | `[待确认]` | AAA，跳过 |
| Mycopunk | 10/20 1.0 | 3,231（91%） | **已在候选池 #65** |
| Escape from Playtime | 10/21 EA | 1,378（65%） | **已在候选池 #63** |
| Under Canopies | 10/23 EA | `[待确认]` | **已在候选池 #60** |
| over the hill | 10/14 | 2,232（92%） | **已在候选池 #49** |

---

## 三、候选三语 wiki 竞争检查（固定 6 条查询）

> 口径：只把「独立域名 + 围绕该游戏 + 持续更新」的站算作专门攻略站；Reddit / Steam / YouTube / 大站单篇不计。
> 本节只记证据，**不做 `P = T + 0.5t` 判定**（判定属候选分析员）。

### 3.1 Invokyr（#68）

**基本信息**
- 类型：1–6 人 Co-op 生存恐怖 / 诅咒桌游（掷骰推进、怪物、事件、诅咒）
- 开发/发行：Ludogram / Shochiku；EA 2026-10-08
- 评测：936 条 94%（steamcozy 快照）；另有 629 条 Very Positive（SteamAnalyser）
- 规模：约 14.2 万份、24h 峰值 8,212 CCU（Video Game Insights）；demo 70 万+ 下载
- 证据：https://steamcozy.com/games/invokyr.html ；https://app.sensortower.com/vgi/game/invokyr ；https://www.4gamer.net/games/040/G104086/20261014006/index_2.html

**六条查询**

| # | 查询 | 前 10 中的相关域名 / URL | 专门攻略站？ |
|---|---|---|---|
| 1 | `Invokyr wiki` | **无结果**（WebSearch 返回 No links） | 无 |
| 2 | `Invokyr guide tips` | ninewiki.com/guide/invokyr-guide-monsters-events-dice-idols/ ；ggguides.com/guide/invokyr-guide-dice-idols-monsters-events/ ；kosgames.com（EN/ES/IT/DE 多语同一篇） | 3 个薄站（九wiki / ggguides / kosgames），均以单篇指南为主 |
| 3 | `Invokyr codes` | **无结果** | 无 |
| 4 | `Invokyr 攻略` | entertainment14.net/blog/post/111012775-…（骰子效果表）；ninewiki；ggguides；kosgames/ja；dvg.cn 概览 | 中文 1 个攻略博客（娛樂計程車）+ 英文 3 薄站 |
| 5 | `Invokyr wiki 中文` | baike.baidu.com/item/勇敢者之试炼…；3dmgame.com；gamersky.com；ali213.net —— 均为资料库/下载站 | 无中文 wiki |
| 6 | `Invokyr 攻略 日本語` | kosgames.com/ja/invokyr-begginers-guide…；kosgames.com/ja/tag/invokyr/；entertainment14（保险箱密码 091387） | 日文仅 KosGames 1 站 |

**小结**
- **专属 wiki：无**（EN/ZH/JA 六查均未出现 Fandom / wiki.gg / 独立 wiki 域名）。
- **薄攻略站：3–4 个**（ninewiki、ggguides、kosgames、娛樂計程車），内容为单篇系统介绍/怪物弱点/骰子表，无数据库、无逐页更新。
- 无 codes（游戏内无兑换码体系，仅隐藏保险箱密码）。
- `[待确认]`：EA 期内容仅 4 主题 / 15+ 怪 / 20+ 事件，后续更新会改变词面。

### 3.2 Order of the Sinking Star（#69）

**基本信息**
- 类型：解谜冒险（1,000+ Sokoban 式谜题，四世界交汇）
- 开发/发行：Thekla（Jonathan Blow）/ Arc Games；2026-10-08–09
- 评测：2,551–2,989 条 97%（VaporLens / 媒体快照）；峰值 4,634 CCU；Metacritic 83（PC）
- 证据：https://steamcozy.com/games/order-of-the-sinking-star.html ；https://vaporlens.app/app/499170/order_of_the_sinking_star/stats/details ；https://www.gry-online.pl/newsroom/gra-tak-duza-ze-jednych-zachwyca-a-innych-przytlacza-dzis-premier/z831e96

**六条查询**

| # | 查询 | 前 10 中的相关域名 / URL | 专门攻略站？ |
|---|---|---|---|
| 1 | `Order of the Sinking Star wiki` | baike.baidu.com/item/沉星之序/67081251 ；gamerant.com/order-of-the-sinking-star-walkthrough/ ；gamer.org/order-of-the-sinking-star-characters-abilities-guide/ ；官方站 orderofthesinkingstar.com | 无独立 wiki；GameRant 为多页走查 hub |
| 2 | `Order of the Sinking Star guide` | gamerant.com（Walkthrough / Heroes and Artifacts / Mirror Isles Part 1 等多页）；polygon.com（开局方向）；hardcoregamer.com（Mirrors and Stones Part 4）；intoindiegames.com；gamer.org；criticalhits.com.br | **大站多页 hub 已成型**；无独立域名专门站 |
| 3 | `Order of the Sinking Star codes` | xmodhub.com（物品 ID/控制台，明说无原生代码）；apocanow.fr/it/es/nl（标题为 codes，内容为 tips）；seagm.com（充值页） | 无 codes；无专门站 |
| 4 | `Order of the Sinking Star 攻略` | gamerant.com 多页；bilibili.com/video/BV1GsH16gEqd（全谜题/全成就/全结局）；hardcoregamer；polygon；criticalhits；163.com 开局方向 | 中文为 B 站视频 + 门户单篇；无中文攻略站 |
| 5 | `Order of the Sinking Star wiki 中文` | baike.baidu.com；bilibili.com/video/BV1afpB6dEZV；zhuanlan.zhihu.com（护肝/评测）；9k9k.com；pcgameres.com | 无中文 wiki；百科 + 视频 + 单篇 |
| 6 | `Order of the Sinking Star 攻略 日本語` | mudauchi.info（GNR，开局方向/评测）；xboxplay.games/ja（HxM 金屋、Beamcaster Lv2）；gameroamer.net；minna-no-indie.com；gamereactor.jp | 日文为媒体/博客单篇，无体系 wiki |

**小结**
- **专属 wiki：无**（只有百度百科 + Wikipedia 式条目，无 Fandom/wiki.gg）。
- **竞争形态：大站多页走查 hub**（GameRant 至少 5–6 页，Polygon / Hardcore Gamer / Into Indie Games 跟进），不是「专门攻略站」，但覆盖密度高。
- 中文有 B 站完整视频攻略 + 9k9k 单篇；日文有 xboxplay 逐步图文 + GNR 翻译。
- 需求侧极强（2,500+ 评测、97%、250 小时内容），但「谜题答案」型内容易被视频与大站 hub 吃掉。

### 3.3 Clive Barker's Hellraiser: Revival（#70）

**基本信息**
- 类型：第一人称生存恐怖动作（UE5，解谜盒/密码/潜行/BOSS）
- 开发/发行：Saber Interactive；2026-10-08；Metacritic 69–75，Steam 93.5%
- 评测：~6,858 条 93.5%（10/17 快照）；~3,000 CCU（后跌 39%）；69 成就，主线 ~8.5h
- 证据：https://steamcozy.com/games/clive-barker-s-hellraiser-revival.html ；https://igamemag.com/hellraiser-revival-review-roundup/ ；https://tech.yahoo.com/gaming/articles/hellraiser-revival-divides-critics-players-144406947.html

**六条查询**

| # | 查询 | 前 10 中的相关域名 / URL | 专门攻略站？ |
|---|---|---|---|
| 1 | `Hellraiser Revival wiki` | en.wikipedia.org/wiki/Clive_Barker%27s_Hellraiser:_Revival ；gamerant.com/db/video-game/clive-barkers-hellraiser-revival/articles/ ；thegamer.com/tag/…；IGN 页面 | 无 Fandom/wiki.gg；Wikipedia + 大站 tag 页 |
| 2 | `Hellraiser Revival guide walkthrough` | gamerant.com/db/…/guides/（hub）；gamerant 单篇（bell door / statue gates / cemetery gate / lockpicks）；thegamer.com（Sister of Mercy / Charlotte / statue hand）；gamesradar.com；vgtimes.com/guides/171272；bilibili 全流程 | **大站攻略 hub 密集**；无独立专门站 |
| 3 | `Hellraiser Revival codes` | gamerant.com/hellraiser-revival-locker-safe-codes-locked-containers/ ；thegamer.com（all safe/keypad codes）；pockettactics.com/hellraiser-revival/codes；criticalhits.com.br；hobbyconsolas.com；playground.ru | 无独立站；大站 + 多语门户 |
| 4 | `Hellraiser Revival 攻略` | bilibili.com/video/BV1L9HX6YEPs（4K 全结局）；gamerant；thegamer；gamesradar；yahoo tech | 中文仅 B 站视频；无中文站 |
| 5 | `Hellraiser Revival wiki 中文` | zh.vgtimes.com/guides/171719（全谜题）；douban.com/game/37447530；zhuanlan.zhihu.com（修改器）；bilibili；fhyx/tasarot/umgamer 资料页 | 无中文 wiki |
| 6 | `Hellraiser Revival 攻略 日本語` | xboxplay.games/ja（墓地门）；bigwalkgame.run/hellraiser-revival/hr-codes/（密码一覧）；gameboost.com/jp（战斗技巧）；opengames.one/ja；mudauchi.info（评测） | 日文有 1 个攻略博客（bigwalkgame.run）+ 门户单篇；无体系 wiki |

**小结**
- **专属 wiki：无**（Wikipedia 有条目，非攻略 wiki）。
- **竞争形态：大站高密度覆盖**（GameRant 至少 15+ 篇、TheGamer 多篇、GamesRadar 多篇、VGTimes 总走查、PocketTactics codes 页），另有 B 站全流程、日文密码/墓地单篇。
- 内容可写面明确（10 个保险箱/门禁密码、5 个 Genesis 谜题、BOSS、成就、结局二选一），但同题已被大站占满。
- ⚠️ 内容含血腥/性主题，需在分析阶段一并考虑合规风险（AdSense 虽暂缓，Adsterra 仍需评估）。

### 3.4 TUNG（#71）

**基本信息**
- 类型：第一人称短篇恐怖（免费；Triple T 工厂 + 树篱迷宫）
- 开发：Niche Games；2026-10-06 1.0（EA 8/11）
- 评测：2,583 条 88.5%（VaporLens）；Gamalytic 约 3.2K / 88%；约 15 万独立玩家（开发者公告）
- 证据：https://vaporlens.app/app/4341400/tung/stats ；https://gamalytic.com/game/4341400 ；https://guidexon.com/tung-walkthrough-hedge-maze-map/

**六条查询**

| # | 查询 | 前 10 中的相关域名 / URL | 专门攻略站？ |
|---|---|---|---|
| 1 | `TUNG game wiki` | guidexon.com/tung-walkthrough-hedge-maze-map/ ；steambase.io/games/tung/info ；vorythic.com/games/161751/tung ；Steam 商店页 | 无 wiki；guidexon 单篇走查 |
| 2 | `TUNG game guide how to escape` | guidexon.com（4 阀门 → 4 球棒零件 → 3 炸药 → 储物柜躲避）；steamcommunity.com/app/4341400/discussions（2:20 速通路线） | 1 个薄站 + Steam 讨论 |
| 3 | `TUNG game codes` | 全部是 Roblox `Tung Tung Race` / 手游 `Tung Tung Heroes` / `Steal Cappuccina From TungTung` 的兑换码 | **同名污染**；本作无 codes |
| 4 | `TUNG 攻略 木棍人` | 233leyuan.com（黑洞侵入）、diyiyou.com（木棍人通通通）、ali213（木棍人通通通）、9k9k（木棍人恐怖片） | 均为**其它 Tung Sahur 衍生游戏**，非本作 |
| 5 | `TUNG wiki 中文 恐怖游戏` | ku.gamersky.com/2026/tung/（资料页）；steamlease.cn；steamdata.ai；Epic/Steam 商店页 | 无中文 wiki；无本作攻略站 |
| 6 | `TUNG 攻略 日本語 ホラーゲーム` | guidexon（英文走查）；其余为 `Tung Sahur Horror` / `Horror Night with Tung Tung Tung Sahur` / `Five Nights with Tung Tung Sahur` 等其它游戏 | 无日文本作攻略 |

**小结**
- **专属 wiki：无**；攻略仅 guidexon 1 篇英文走查 + Steam 讨论速通。
- **品牌词污染极重**：Roblox / 手游 / 浏览器游戏大量共用 `Tung Tung Tung Sahur` / `TUNG`，SERP 前 10 多数不是本作。
- 内容量薄：4 阀门、4 球棒零件、3 炸药、1 个追逐段，主线约 2 小时 → 可写独立页远少于 20。
- 免费游戏，变现能力弱。
- `[待确认]`：评测数快照差异大（2,583 vs 3,200），但均 ≥300。

### 3.5 Neon Abyss 2（#72）

**基本信息**
- 类型：Roguelite 横版射击（4 人联机、Faith 系统、Hatchmon 宠物、武器词缀）
- 开发/发行：Veewo Games / Kepler Ghost；EA 2025-07-17，**1.0 2026-10-07–08**
- 评测：~1,954 条 69%（marumiesteam 快照）；近 30 天 74%；Metacritic PS5 81
- 证据：https://marumiesteam.com/game/2235200 ；https://www.metacritic.com/game/neon-abyss-2/ ；https://www.altchar.com/reviews/neon-abyss-2-review-more-neon-more-abyss-ahMQc3y5GQ9M

**六条查询**

| # | 查询 | 前 10 中的相关域名 / URL | 专门攻略站？ |
|---|---|---|---|
| 1 | `Neon Abyss 2 wiki` | fastlaunch.io/projects/capydb（CapyDB：items/weapons/affixes/agents/hatchmon/jars/evolution/faiths/fates/tasks 数据库）；rutab.net（宠物/孵化）；thegamer.com/tag/neon-abyss-2；gamewith.jp/gamedb/12478 | **无 Fandom/wiki.gg，但 CapyDB 为 wiki 型数据库** |
| 2 | `Neon Abyss 2 guide tips` | thegamer.com（8 Beginner Tips）；9game.cn（新手指南）；taptap.cn（开荒）；wandoujia（隐藏房间）；gamemad.com（刷钱）；ali213 攻略集 | 中文攻略密集（9game/ali213/游戏狂/TapTap） |
| 3 | `Neon Abyss 2 codes` | ali213 / 9k9k / 18183（兑换码 NH666/NH888/NH999/NH111）；trueachievements（开发控制台）；vgtimes（修改器） | 无独立站；中文站批量覆盖 codes |
| 4 | `霓虹深渊2 攻略` | 9game.cn/nhsy2/；360game；wandoujia；diyiyou；biubiu；taptap；gamemad | 中文多站密集，无单一 wiki |
| 5 | `Neon Abyss 2 霓虹深渊2 wiki 中文` | baike.baidu.com/item/霓虹深渊2/66449024；9game 专页；gamemad 全任务；ali213 全任务；gamersky 攻略集 | 无中文 wiki；百科 + 攻略集 |
| 6 | `Neon Abyss 2 攻略 日本語` | volx.jp（操作/日本語化）；gamerch.com/ps5trophies/1020759（奖杯）；gamespark.jp；4gamer；denfaminicogamer；automaton-media | 日文为媒体 + 奖杯页，无体系 wiki |

**小结**
- **专属 wiki：无 Fandom/wiki.gg**，但 CapyDB 已是 wiki 型数据库（覆盖 items/weapons/agents/hatchmon/faiths）。
- 攻略密度：英文 TheGamer 多篇；中文 9game/ali213/游戏狂/TapTap/360game 密集；日文 gamerch 奖杯页 + 媒体。
- 口碑 69% mixed（1.0 后近 30 天 74%），需求仍在，但已有资料库削弱「零 wiki」窗口。

### 3.6 Every Day We Fight（#73）

**基本信息**
- 类型：回合制战术 Roguelite（第一人称手动瞄准、时间循环、XCOM 式）
- 开发/发行：Signal Space Lab / Hooded Horse；EA 2025-07-10，**1.0 2026-10-22**
- 评测：427–428 条 72–74%（niklasnotes / isitdoneyet 快照）
- 证据：https://niklasnotes.com/dashboard/game/76662/every_day_we_fight ；https://isitdoneyet.gg/game/every-day-we-fight ；https://www.gamesfinity.com/news/every-day-we-fight-1-0-out-now/

**六条查询**

| # | 查询 | 前 10 中的相关域名 / URL | 专门攻略站？ |
|---|---|---|---|
| 1 | `Every Day We Fight wiki` | wiki.hoodedhorse.com/Every_Day_We_Fight/（官方 wiki：Main Page / Beginner's Guide / Items / Thorns）；giantbomb.com/wiki（一句话条目） | **官方 wiki 存在但薄**（页面少、最后修订多在 2025） |
| 2 | `Every Day We Fight guide tips` | store.epicgames.com/news/every-day-we-fight-guide-tips-surviving-the-rifters（官方指南）；wiki.hoodedhorse.com Beginner's Guide；gamewatcher.com（beginner tips/console）；dbltap.com（Vivian/Dylan build） | 官方 + 大站单篇；无独立攻略站 |
| 3 | `Every Day We Fight codes` | plitch.com；apocanow.pt/es/nl；fearlessrevolution.com；gametrainers.com —— 均为修改器/trainer | 无 codes |
| 4 | `Every Day We Fight 攻略` | store.epicgames.com 中文官方指南；wiki.hoodedhorse.com（Items/Beginner's）；dbltap build；ixbt 评测 | 中文仅 Epic 官方指南 |
| 5 | `Every Day We Fight wiki 中文` | gl.ali213.net（类型介绍）；xbox.com/zh-CN 商店页 | **无中文 wiki** |
| 6 | `Every Day We Fight 攻略 日本語` | pokemongo.gamewith.jp/gamedb/13403/articles/45519（GameWith 评测/攻略思路） | 仅 1 篇媒体文章，无 wiki |

**小结**
- **专属 wiki：有，但薄** —— `wiki.hoodedhorse.com/Every_Day_We_Fight` 为发行商官方 wiki，已有 Beginner's Guide / Items / Thorns 等页，但内容停留在 EA 期。
- 其他：Epic 官方指南（多语）、dbltap 角色 build、GameWatcher 技巧；中文/日文几乎空白。
- 1.0 内容扩充（70% 更多枪、52 个枪件、Heat Meter、Ambush/Sabotage、Forever War）尚未被 wiki 覆盖 → 存在版本差窗口。
- `[待确认]`：官方 wiki 的更新频率与页面总量未逐页核对。

### 3.7 Dungeon Inn（#74）

**基本信息**
- 类型：回合制经营策略（双公会、怀疑值、每周目标）
- 开发/发行：Cat Society / Spiral Up Games；EA 2024-11-14，**1.0 2026-10-23**
- 评测：629–675 条 93%（InsertCoins / Datahumble 快照）；平均 4.4h
- 活跃度：近期 CCU 极低（stmstat 快照 0–3，全时峰值约 205）`[待确认]`
- 证据：https://datahumble.com/dungeon-inn-2552310 ；https://insertcoins.press/en/articles/dungeon-inn-test ；https://stmstat.com/app/2552310

**六条查询**

| # | 查询 | 前 10 中的相关域名 / URL | 专门攻略站？ |
|---|---|---|---|
| 1 | `Dungeon Inn game wiki` | game8.co/articles/latest/dungeon-inn-gameplay-and-story；game8.co/reviews/dungeon-inn/…；IGN 页面；CBR；TheGamer；4gamer 汇总页；SteamDB | 无专属 wiki；Game8 为攻略/评测站 |
| 2 | `Dungeon Inn guide tips` | gamebrief.net/blog/dungeon-inn-complete-guide-hub（含公会/章节/代币/冬季）；game8；chalgyr.com；keengamer；cool3c 攻略集 | **1 个指南 hub（gamebrief）+ Game8**；无独立 wiki |
| 3 | `Dungeon Inn codes` | cheats.co；Fanatical 折扣码（FANATICAL15）；淘宝/凤凰商城 CDKey | 无游戏内 codes；无攻略站 |
| 4 | `Dungeon Inn 攻略 莎拉的黑店` | cool3c.com/tag/160125（全攻略）；gl.ali213.net/z/101623（攻略集）；pttweb；xiaohongshu | 中文 2 个攻略集（Cool3c / ali213） |
| 5 | `Dungeon Inn wiki 中文` | cool3c 全攻略；steamlease.cn；qoo-app；ali213 攻略集；yxdp.cc | 无中文 wiki |
| 6 | `Dungeon Inn 攻略 日本語` | 4gamer.net/games/051/G105191/（汇总）；gamewith.jp/gamedb/12446/articles/38164；4gamer TGS 试玩；indie-freaks；newsgeekjp | 日文仅媒体介绍，**无日文攻略站** |

**小结**
- **专属 wiki：无**（EN/ZH/JA 六查均无 Fandom/wiki.gg/独立 wiki）。
- 薄攻略：gamebrief 指南 hub、Game8 页、Cool3c 全攻略、ali213 攻略集；日文空白。
- 内容可写面：公会分离、怀疑值、信物/龙币、设施升级、第 7–12 章（队伍/热浪/冬季/违禁品）。
- 疑点：1.0 后在线人数极低（0–3），需求可能集中在「关卡解法」而非持续搜索。

---

## 四、`[待确认]` 与口径说明

1. **Steam 一手数据缺失**：store / api / community 三域在本机不可达（DNS 解析正常但连接超时），本轮评测数全部来自第三方快照（steamcozy / VaporLens / Gamalytic / niklasnotes / marumiesteam / datahumble），**未用估算值补齐**。
2. **评测数是动态值**：同一游戏不同快照相差 10–20%，正文给区间；分析员复核时 MUST 重新取数并注明时间。
3. **发售日差异**：Order of the Sinking Star 有 10/8 与 10/9 两种写法；Neon Abyss 2 有 10/7 与 10/8；均以「1.0 上线周」处理，未影响 ≤30 天判定。
4. **Moadra**：未查到可信评测总量（VaporLens 仅给 73% 情绪，3DM 约 60 个评分），按规则标 `[待确认]` 并排除，**未猜测 ≥300**。
5. **Dungeon Inn 活跃度**：stmstat 快照 0–3 CCU，可能是抓取时点问题，交分析员复核；本轮只按评测数 ≥300 入池。
6. **同名污染**：TUNG 与 Roblox/手游 `Tung Tung Tung Sahur` 系列严重混淆；UnderMire 与 UnderMine 的教训同样适用于本词，分析员采词时 MUST 用 `TUNG Steam` / `TUNG horror` 等消歧锚定。
7. **Reddit 源缺失**：`site:reddit.com` 查询无返回，本轮未能把 Reddit 讨论量纳入证据；已在搜索日志如实记录。

---

## 五、交接给候选分析员

- 本轮入池 7 个：`CANDIDATE-POOL.md` #68–#74，结论一律 `待分析`，四维分与总分留 `—`。
- 建议验证顺序（按「评测规模 × wiki 空白度」排，不是建站建议）：
  1. **Invokyr**（#68）：评测 629–936、wiki 最薄、co-op 恐怖词面宽（怪物/骰子/事件/隐藏保险箱）。
  2. **Order of the Sinking Star**（#69）：评测 2,551–2,989、无专属 wiki，但 GameRant 多页 hub 已铺，竞争计数需严格按「专门攻略站」口径。
  3. **Hellraiser: Revival**（#70）：评测 ~6,858、无专属 wiki，但大站 15+ 篇密集，且含血腥/性主题。
  4. **Neon Abyss 2**（#72）：评测 ~1,954、CapyDB 数据库已起，需判断「资料库」是否计入竞争。
  5. **Every Day We Fight**（#73）：官方 Hooded Horse wiki 薄，1.0 新内容未被覆盖。
  6. **TUNG**（#71）：评测 2,583+，但品牌词污染与内容量薄是硬伤。
  7. **Dungeon Inn**（#74）：评测 629–675，但 1.0 后活跃度极低，需求存疑。
- 分析员 MUST 重新跑 6 条固定 SERP 查询并逐条记前 10 域名/URL（本报告为侦察轮证据，不作为最终竞争判定）。
- 关键词研究员采词时：`Invokyr` 用裸词 + `game`；`Order of the Sinking Star` 用全名；`Hellraiser` 用 `Hellraiser Revival`；`TUNG` 必须加消歧词；`Neon Abyss 2` 用 `Neon Abyss 2`；`Every Day We Fight` 用全名；`Dungeon Inn` 用全名 + `莎拉的黑店` 别名。
