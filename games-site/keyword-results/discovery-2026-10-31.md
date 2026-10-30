# 发现轮报告 — 2026-10-31

> 执行：游戏侦察员（`docs/agents/11` / `12`）
> 下游：候选分析员（`22` / `23`）
> 任务编号：DISCOVERY-2026-10-31
> 本报告只做「多源发现 + 硬筛 + 证据」，**不含四维评分、不含 wiki 竞争检查、不含采词、不含建站建议**。

## 0. 本轮口径

- 按派单要求跑 **4 类主源 + 2 个补充源**：Steam Popular Upcoming（S1）、SteamDB 趋势（S2，直连 403 仅三方）、Steam 新发售 10-28~10-31（S3）、Steam 官方策展 + 即将发售/愿望单媒体榜（S4）、三方趋势快照（S5）、Reddit（S6，无返回）。
- 硬筛（MUST）：跳过 AAA/大厂竞技、超休闲/增量/派对小游戏、视觉小说、已停服、重制复刻、上线超过 6 个月且无重大更新。
- 优先级：**已发售 ≤30 天且评测 ≥300** 或 **已定档且 8 周内发售（≤ 2026-12-26）**；Steam 页只有 `Coming soon` 无日期的**不入池**（Profile「上线日期用 Steam 商店页为准」）。
- 侦察员只填候选池的 `# / 游戏 / 类型 / 上线日 / 发现日 / 证据`，结论一律 `待分析`；四维分、总分、Wiki 列留 `—`。
- 评测数、好评率、价格、发售日一律 Steam 商店页 / `appdetails` 一手；愿望单一律三方，查不到写 `[待确认]`。

### 证据可信度分级（与 10-28 / 10-29 / 10-30 轮一致）

| 级别 | 含义 |
|---|---|
| **一手** | 本轮直接调 `store.steampowered.com/api/appdetails`、`search/results` 与商店页 `All Reviews` 区块读到的字段（发售日 / 评测数 / 好评率 / 类型标签 / 价格 / 联机） |
| **三方** | 媒体、榜单站、SteamDB 快照、愿望单模型；标注站点名与日期 |
| **待确认** | 多源冲突或只有单一弱来源，未写成确定值 |

### 采集通道（沿用并修正）

```
dig @1.1.1.1 store.steampowered.com +short        # 本轮 → 23.36.254.11 / 104.83.198.104
curl -sS -k -L --compressed --max-time 20 \
  --resolve store.steampowered.com:443:<IP> \
  'https://store.steampowered.com/api/appdetails?appids=<id>&cc=us&l=english'
```

- **`api/appdetails` 批量参数不可用**：`appids=1,2,3` 与 `appids=1%2C2` 两种写法都返回空体/24 字节 gzip 空包（重试 6 次全失败），**单 appid 请求稳定 200** → 本轮 114 个个案逐一取数。
- **`appreviews` JSON 接口不可用**：`/appreviews/<id>?json=1...` 被重定向到 `store.steampowered.com/` 首页（HTTP 200 但 body 是 Welcome to Steam），拿不到 JSON → 评测数改由商店页 `All Reviews / English Reviews` 区块解析。
- **同一 app 两次抓取评测块不一致**：部分请求落到中国 CDN 边缘（`store.cdn.queniuqe.com`、`china_alicloud`），页面显示「All Time: 8 user reviews」；换边缘 IP 后同一 app 显示 `148 条 87%`。处理：**同一 app 取多 IP 结果的最大评测数**，并在报告注明快照时间。
- `steamdb.info` 直连返回 **403**（Cloudflare），官方 `ISteamChartsService` 本轮未再尝试（10-30 已证实三 IP 全超时）→ S2 只能三方转引，标 `[待确认]`。

---

## 一、搜索日志（6 个来源）

### S1 — Steam Popular Upcoming（一手，愿望单加权榜）

| 项 | 内容 |
|---|---|
| 入口 | `https://store.steampowered.com/search/results/?filter=popularcomingsoon&cc=us&l=english`（`total_count` 65,295） |
| 抓取 | 2026-10-31 04:05 CST（= 2026-10-30 16:05 EDT） |
| 返回 | 前 50 条 Popular Upcoming，含定档日期 |
| 新命中（入池） | **GRAVHOUNDS**(11-02)、**Mayday: The Survival Island**(11-02)、**Ramen Shop Simulator**(11-03)、**County of Fortune**(11-05)、**Casualties: Unknown**(11-09) |
| 去重/淘汰 | ArcheAge Chronicles / Football Manager 27 / Godzilla 重制 / Shrek 2 重制 → 大厂或重制；Loftia / DREADMOOR / Worst Class Ever / HANDS OVER / Warhammer Survivors / Cozy Game Restoration / Dumpster Gang / Find The Needle / just volleyball / Figure Me Out → 已在池或纯竞技 |

### S2 — SteamDB 趋势 / 热销（直连失败，三方转引）

| 项 | 内容 |
|---|---|
| 查询 | `SteamDB trending new releases week October 30 2026` |
| 直连 | `https://steamdb.info/` → **HTTP 403 / 10,239 字节 Cloudflare 拦截**，无可解析榜单 |
| 三方入口 | `https://go-get-games.com/trending-games`（2026-10-30 快照）；Nerdly《Probably Stolen peaks at 112,145》、18183/163《Probably Stolen 24 小时 10 万在线》、Wikitree《Phantom Blade Zero 43 万同接》 |
| 命中（全部淘汰） | **Phantom Blade Zero**（AAA，峰值 72.3 万 CCU）、**Probably Stolen**（已在池 #77）、**Dead by Daylight / No Man's Sky / DST / Cyberpunk 2077 / GTA V / War Thunder / ETS2 / WARDOGS / HELldivers 2 / ARC Raiders** 等老作 → 硬筛 |
| 结论 | 本轮**没有一手 SteamDB 榜单**；峰值 CCU 与周销排名标 `[待确认]`，不写成确定值 |

### S3 — Steam 新发售（2026-10-28 ~ 10-31，一手主源）

| 项 | 内容 |
|---|---|
| 入口 1 | `search/results/?sort_by=Released_DESC&infinite=1&cc=us&l=english` 连抓 3 页 ×100 条（`total_count` 237,517），2026-10-31 04:06 CST |
| 入口 2 | `search/results/?filter=popularnew` 前 100 条（覆盖 10-20~10-30） |
| 入口 3 | `api/featuredcategories` 的 `new_releases` 30 条（官方策展） |
| 观察 | **10-30 单日 Steam 上架 ≥300 个 app**（Released_DESC 前 3 页 300 条全部为 Oct 30，未翻到底；其中含 Demo / Soundtrack / Artbook / DLC）；10-29/10-28 由 Popular New 覆盖 |
| 命中（入池） | **Deadly Days: Roadtrip**(10-29)、**Zotenhold**(10-30 EA)、**Cinderwake**(10-30 EA)、**Nomad Drive**(10-27 EA)、**Apocalyptica**(10-30)、**Divine Frequency**(10-26 EA)、**Geoplanetical**(10-28 EA)、**Rise of the Merchants**(10-29 EA)、**Airport Contraband**(10-28)、**Into the Crypt**(10-29)、**Grimhold**(10-30 EA)、**The Last Legion**(10-30)、**ABYSS**(10-30)、**Grinner's Diner**(10-30 EA)、**Project Exodus**(10-30 EA)、**Tiles of Grimmwoods**(10-30) |
| 去重 | Terrible Lizards(#124)、Zombie Assault(#130)、Curse of Resthaven(#125)、S.O.N.A.R.(#78)、ANOMALITH(#50)、Everlast(#111)、Probably Stolen(#77)、Fantasy World Manager(#129)、Vampy's Big Day(#132)、REKA、Tape to Tape、Moon Sweepers 均已在池 |

### S4 — Steam 官方策展 + 即将发售 / 愿望单媒体榜

| 项 | 内容 |
|---|---|
| 入口 1 | `api/featuredcategories?cc=us&l=english`（`new_releases` 30 / `coming_soon` 10） |
| 入口 2 | `search/results/?filter=comingsoon`（`total_count` 65,294；排序不可靠，定档一律回 `appdetails.release_date` 复核） |
| 入口 3 | WebSearch：《Steam most wishlisted upcoming games November 2026》命中 PlayRecon 11 月日历、GameGrin《Scream Fest V Top 10 Wishlists》、lan-gaming《2026年10·11月 tier》、Polygon《6 Steam Games Coming Soon》（页面被拦，仅读搜索摘要）、Gamerant《Stormforge 100K wishlists》 |
| 命中（入池） | **ALTEREDBLOOD+ [AB+]**(11-04 EA) 来自 Steam `comingsoon` 一手；其余 5 个即将发售候选来自 Popular Upcoming 一手 |
| 去重/淘汰 | **Stormforge**(已在池 #56)、**Hela: of Mice & Magic**(#61)、**UnderMire**(#62)、**Loftia**(#44)、**DREADMOOR**、**Trees Hate You**、**Brotato: Primal Dread**(DLC/续作)、**Nocturnal 2**(续作)、**Ashes of the Singularity II**(大厂 RTS) |
| 注 | 下一届 Steam Next Fest 为 **2027 年 2 月**，本轮无 Fest 窗口，故不以 Next Fest 为主源 |

### S5 — 三方趋势快照（补充）

| 项 | 内容 |
|---|---|
| 入口 | go-get-games trending（10-30）；Nerdly / 18183 / 163 / Wikitree（Phantom Blade Zero、Probably Stolen 数据） |
| 用途 | 只用于「本周谁在涨」的背景，**不入池、不当需求证据** |

### S6 — Reddit 补充源（**连续四轮失败**）

| 项 | 内容 |
|---|---|
| 查询 | `site:reddit.com new co-op survival horror game recommendation October 2026` |
| 结果 | **零返回**（与 10-28 / 10-29 / 10-30 一致） |
| 处理 | 按 Profile 如实记录该维度缺失，**未用社区讨论量补证据**；S1–S4 已满足 4 源要求 |

---

## 二、通过硬筛（本轮入池候选，22 个：`#141`–`#162`）

> 全部 22 个的发售日、价格、标签、联机方式为 **2026-10-31 04:10–04:25 CST 一手读取**；已发售的 16 个评测数与好评率同为一手快照。愿望单数一律 `[待确认]`（本轮无可信三方估算）。

| 池号 | 游戏 | 类型 | 上线日（一手） | 评测（一手） | 证据 | 疑点（交分析员） |
|---|---|---|---|---|---|---|
| #141 | **Deadly Days: Roadtrip** | 背包构筑 Bullet Heaven / 僵尸 Roguelite（1–2 人本地联机；Pixelsplit / Sidekick） | 2026-10-29 | **694 条 89% Very Positive** | [3026450](https://store.steampowered.com/app/3026450/) | **本轮唯一 ≥300 评测**；系列前作《Deadly Days》(2019) 可能有 Fandom/系列 wiki；`Roadtrip` 需与旧作区分 |
| #142 | **Zotenhold** | 动作 Roguelike ARPG / 生存（24+ 职业、技能树、10 人 Co-op；Clyxius Game Studios） | 2026-10-30 EA | **0 条** | [2234650](https://store.steampowered.com/app/2234650/) | 0 评测；EA 首日；内容口径「24+ 职业 / 数千物品」来自商店页自述，未核实 |
| #143 | **Cinderwake** | 等距动作 ARPG / 刷宝（5 职业 × 3 天赋；Enervo Games） | 2026-10-30 EA | **<10 条 `[待确认]`** | [5404010](https://store.steampowered.com/app/5404010/) | 评测数未在页面显示具体值；$5.99 小体量；类 Diablo 页型面宽 |
| #144 | **Nomad Drive** | 末世房车修理 + 生存 / 1–4 人 Co-op（Indie Devil） | 2026-10-27 EA | **296 条 81% Very Positive** | [2223980](https://store.steampowered.com/app/2223980/) | 296 条接近 300；程序化世界，需核可写来源；`Nomad Drive` 可能与通用词组撞名 |
| #145 | **Apocalyptica** | 开放世界生存建造 + RPG（100+ 怪物、元素护甲；Soullessregent） | 2026-10-30 | **0 条** | [3036840](https://store.steampowered.com/app/3036840/) | 0 评测；**同名金属乐队 Apocalyptica 严重撞词**，采词必须加 `game`；$16.99 单人 |
| #146 | **Divine Frequency** | 超现实 FPS / ARPG（3 流派、武器改装、Boss；Abraxaes） | 2026-10-26 EA | **231 条 98% Very Positive** | [2548880](https://store.steampowered.com/app/2548880/) | 叙事比重大（「拼故事」），攻略型需求待判；98% 口碑但样本 231 |
| #147 | **Geoplanetical** | 地缘政治模拟 / 沙盒（Polytale Games；带 Steam Workshop） | 2026-10-28 EA | **199 条 73% Mostly Positive** | [940230](https://store.steampowered.com/app/940230/) | 现实政治题材，内容敏感度高；模拟类攻略型需求偏弱；Workshop 可能补内容 |
| #148 | **Rise of the Merchants** | 中世纪城市建造 + 贸易/政治（Black Duke / 3RG） | 2026-10-29 EA | **48 条 77% Mostly Positive** | [5031210](https://store.steampowered.com/app/5031210/) | 48 条样本小；**持久化在线世界**，单机攻略是否适用待判 |
| #149 | **Airport Contraband** | 海关检查 Roguelike-Sim（DRAGO / Shochiku） | 2026-10-28 | **53 条 81% Very Positive** | [1167820](https://store.steampowered.com/app/1167820/) | 53 条；$17.99；玩法偏「检查清单」，页型深度待判 |
| #150 | **Into the Crypt** | 第一人称卡牌构筑 Roguelike / 1–2 人 Co-op（Megaglope） | 2026-10-29 | **12 条 83% Positive** | [1879270](https://store.steampowered.com/app/1879270/) | 12 条样本过小；「数百张卡 / 数十状态」为商店页自述 |
| #151 | **Grimhold** | 黑暗幻想 Roguelite 塔防 / 英雄构筑（Elzerath Studio） | 2026-10-30 EA | **0 条** | [5187440](https://store.steampowered.com/app/5187440/) | 0 评测；$5.94；10 幕 + 多英雄，页型面待核 |
| #152 | **The Last Legion** | RTS + 基地建造 + 指挥官成长（Zhiyuan / EZ-Game） | 2026-10-30 | **0 条** | [4183000](https://store.steampowered.com/app/4183000/) | 0 评测；发行方 EZ-Game 为中国发行，英中日三语攻略需求分布待判 |
| #153 | **ABYSS** | 1–4 人 Co-op 潜艇恐怖 / 内鬼（Finndustries） | 2026-10-30 | **0 条** | [4818920](https://store.steampowered.com/app/4818920/) | 0 评测；$4.99；与已入池 #78 S.O.N.A.R. 同为潜艇题材，注意区分 |
| #154 | **Grinner's Diner** | 2–4 人 Co-op 恐怖烹饪 / 物理手部（Distant Neon） | 2026-10-30 EA | **0 条** | [4540940](https://store.steampowered.com/app/4540940/) | 0 评测；**疑偏派对向 / friendslop**；EA 首日 |
| #155 | **Project Exodus** | 最多 6 人 Co-op 恐怖 / 生物质采集（Astrox） | 2026-10-30 EA | **0 条** | [4149590](https://store.steampowered.com/app/4149590/) | 0 评测；$5.94；近距语音，需核「有哪些可写系统」 |
| #156 | **Tiles of Grimmwoods** | 拼图式 Roguelike 牌组构筑（ArchLevel） | 2026-10-30 | **0 条** | [3411620](https://store.steampowered.com/app/3411620/) | 0 评测；$8.49；单机，牌池规模待核 |
| #157 | **GRAVHOUNDS** | 1–4 人 Co-op 动作建造 + 撤离 / EA（Octopus Panic） | 2026-11-02 EA | **0 条（未发售）** | [2440760](https://store.steampowered.com/app/2440760/) | 未发售；价格 / 愿望单 `[待确认]`；物理建造，页型待定 |
| #158 | **Casualties: Unknown** | 洞穴探索生存模拟（肢体 / 心血管系统；Orsoniks / Oro） | 2026-11-09 | **0 条（未发售）** | [4576490](https://store.steampowered.com/app/4576490/) | 未发售；硬核医疗模拟，攻略型需求可能很高但可写来源未核 |
| #159 | **County of Fortune** | 中世纪郡县建造 + 政治 / EA（Nepos / Aquila） | 2026-11-05 EA | **0 条（未发售）** | [3204330](https://store.steampowered.com/app/3204330/) | 未发售；价格 / 愿望单 `[待确认]`；建造类页型面宽 |
| #160 | **Mayday: The Survival Island** | 开放世界生存建造（Pequi / indie.io） | 2026-11-02 | **0 条（未发售）** | [1686230](https://store.steampowered.com/app/1686230/) | 未发售；有 demo；`Mayday` 通用词撞名严重 |
| #161 | **Ramen Shop Simulator** | 拉面店经营模拟 / EA（Sannin Interactive） | 2026-11-03 EA | **0 条（未发售）** | [3393720](https://store.steampowered.com/app/3393720/) | 未发售；`Ramen Shop Simulator` 是品类通用词组，采词需加 `game`；同类竞品多 |
| #162 | **ALTEREDBLOOD+ [AB+]** | 移动射击 FPS / 平台 + 波次生存 / EA（TRUEWORLD） | 2026-11-04 EA | **0 条（未发售）** | [4318080](https://store.steampowered.com/app/4318080/) | 未发售；EA 0.1 仅 6 任务 / 4 武器，**内容量偏薄**，疑点最大 |

### 2.1 为什么这 22 个能过筛（只作事实陈述）

- 全部独立/中小体量，**无 AAA、无纯 PvP 竞技、无视觉小说、无已停服、无重制复刻**。
- **16 个已发售**（10-26~10-30）落在「≤30 天」窗口；**6 个已定档**（11-02~11-09）落在 8 周窗口（≤ 2026-12-26）。
- 每个候选都有可点开的 Steam 店页；**22/22 一手复核发售日**，16 个已发售的全部复核评测数。

### 2.2 评测样本分布（本轮关键事实）

| 口径 | 数量 | 游戏 |
|---|---|---|
| ≥300 条 | **1** | Deadly Days: Roadtrip 694 |
| 100–299 条 | 3 | Nomad Drive 296 / Divine Frequency 231 / Geoplanetical 199 |
| 10–99 条 | 4 | Airport Contraband 53 / Rise of the Merchants 48 / Into the Crypt 12 / Cinderwake <10 |
| 0 条 | 8 | Zotenhold / Apocalyptica / Grimhold / The Last Legion / ABYSS / Grinner's Diner / Project Exodus / Tiles of Grimmwoods |
| 未发售 | 6 | #157–#162 |

**事实**：本轮「已发售 ≤30 天且评测 ≥300」命中 **1 个**（10-30 轮为 0）。10-30 单日上架约 300 个 app，但绝大多数是 Demo / 音轨 / 超休闲；能过筛且有评测的量集中在 10-27~10-29。

---

## 三、未通过硬筛 / 未入池（记录理由，保留轨迹）

### 3.1 按硬筛规则淘汰

| 游戏 | 上线/窗口 | 淘汰理由 | 证据 |
|---|---|---|---|
| **Phantom Blade Zero** | 2026-10-28 | **AAA 动作 RPG**（峰值 72.3 万 CCU） | Steam 商店页（一手）+ Wikitree/Nerdly（三方） |
| **Call of Duty: MW4 / Age of Empires IV: Raiders of the North / Crimson Desert Enhanced / FINAL FANTASY RESONANCE** | 2026-10 | **AAA / 大厂 IP / DLC** | 商店页 / `featuredcategories`（一手） |
| **ArcheAge Chronicles / Football Manager 27 / Ashes of the Singularity II** | 2026-11 | **大厂 / 系列 IP** | Popular Upcoming（一手）+ 媒体（三方） |
| **Croc 2 Kingdom of the Gobbos / The Wolf Among Us Remastered / Shrek 2 Remastered / Godzilla: Destroy All Monsters Melee Remastered / You Are Empty: Absolute Edition** | 2026-10~11 | **重制 / 复刻老作**，非新游戏窗口 | 商店页（一手） |
| **Last Evac** | 2026-10-30 | **60 人 PvP 撤离竞技**（outlast 60 players） | 商店页（一手） |
| **BOOST VECTOR EX** | 2026-11-02 | **纯竞速 PvP（parkour racing）** | 商店页（一手） |
| **just volleyball / Figure Me Out / Warlore** | 2026-11 | **纯竞技（排球 / PvP FPS / PvP 棋盘对决）** | 商店页（一手） |
| **Can 'Em All / Harvest Looper / Click&Fix / Pot Smasher / Debtbound / Farm.exe / cat.exe / Nedi Cloud Simulator / Organize my Shop 2 / Parking Simulator / Pomo Valley / Tumble / STAR³ / Lifelines / Put Your Toys Away Together!** | 2026-10-30 | **超休闲 / 增量（Incremental/Idler）/ 桌面挂件 / 整理小游戏** | 商店页标签（一手） |
| **Eggsecution Squad / Finals Week / Carry On Together / Queen's Court** | 2026-10-30~11-06 | **派对 / 合家欢 friendslop**，无系统深度 | 商店页标签（一手） |
| **Cthuloop / Gnome Dome / Montone / Dark Spawn: Infestation / Survival Denied** | 2026-10-30 | **免费短篇恐怖 / VR 专属**，内容量不足以支撑站 | 商店页（一手） |
| **Signal From The Stars / Edicts of the Truthsinger / Death at Fleming Manor / Tom the Postgirl / Sabado** | 2026-10-29~11-03 | **点选式叙事 / 侦探对话**，机制面窄（Walking-sim 向） | 商店页（一手） |
| **Message From Aliens** | 2026-11-01 | **文字系统解谜**，无战斗/构筑系统 | 商店页（一手） |
| **Drawquarium / Selkie's Salvage&Co. / CyberSprawl: Aquarium / A Place for Every Potion** | 2026-10~11 | **Cozy 超休闲 / 增量钓鱼 / 装饰** | 商店页（一手） |
| **Hentai Sexy - Hot Tub DLC 3 / Sexy Elf - Night Club DLC** 等 | `coming_soon` | **成人 DLC**，广告合规风险 + 非独立游戏 | `featuredcategories`（一手） |

### 3.2 硬筛通过但本轮**未入池**（日期/窗口/去重，非淘汰）

| 游戏 | 情况 | 理由 | 证据 |
|---|---|---|---|
| **Hullstorm / Warstead / The Undercity: Last Light / Biohazard Protocol / WoundWake / Dracula - Blood Moon / Nodes of Jucia / Day 31 / Lead the Charge / Primal Realms / Soul Tides / Mind of the Midwest / Anvira: Forge Defense / Gemfire Survival** | 2026-10-30 | **硬筛通过、机制面可写**，但本轮 22 个已覆盖主要品类；为避免单轮候选过载留待下轮复核（非淘汰） | Steam 商店页（一手） |
| **Zotenhold / Cinderwake 之外的 0 评测首发** | 2026-10-30 | 10-30 单日 300 个上架，绝大多数为 Demo / 音轨 / DLC / 小体量，逐一取数后仅保留有系统面的 | `search/results`（一手） |
| **BigFooten / Ski Survival / Dear Passengers** | `Coming soon` 无日期 | **一手无定档**，按 Profile 不入池 | appdetails（一手） |
| **Stormforge / Hela: of Mice & Magic / UnderMire / Loftia / DREADMOOR / Trees Hate You / Worst Class Ever / HANDS OVER / Dumpster Gang / Find The Needle / Warhammer Survivors / Cozy Game Restoration** | — | **已在池**（#56 / #61 / #62 / #44 等），未重复收录 | `CANDIDATE-POOL.md` |
| **Brotato: Primal Dread / Nocturnal 2 / Ashes of the Singularity II** | 2026-11 | **续作 / DLC**，且母作已有生态 | 商店页 / 媒体（三方） |

---

## 四、候选逐条证据（只列本轮新增，22 条）

### #141 Deadly Days: Roadtrip
- **类型**：背包构筑 Bullet Heaven / 僵尸 Roguelite；背包即 build，loot 拼图叠协同，2.5D 像素。
- **开发/发行**：Pixelsplit / Sidekick Publishing。
- **上线**：2026-10-29（一手）。
- **评测**：**694 条 89% Very Positive**（一手 2026-10-31 04:12 CST，商店页 `English Reviews` 区块；近 30 天 142 条 88%）。
- **价格**：$9.74（原价 $14.99，-35%）。
- **联机（一手）**：Single-player / Multi-player / Co-op / Shared-Split Screen Co-op；好友无需拥有游戏即可加入。
- **标签（一手）**：Inventory Management / Bullet Heaven / Local Co-Op / Zombies / Roguelite / Loot / Top-Down Shooter / Pixel Graphics / 2.5D / Bullet Hell。
- **证据**：https://store.steampowered.com/app/3026450/

### #142 Zotenhold
- **类型**：动作 Roguelike ARPG / 生存；24+ 职业、独立技能树、数千物品、10 人 Co-op。
- **开发/发行**：Jakob "Jake" Seilkop / Clyxius Game Studios。
- **上线**：2026-10-30（Early Access，一手）。
- **评测**：**0 条**（一手）。
- **价格**：$8.09（原价 $8.99，-10%）。
- **标签（一手）**：Early Access / Action Roguelike / Online Co-Op / Survival / Action RPG / Hack and Slash / PvE / Class-Based / Loot。
- **证据**：https://store.steampowered.com/app/2234650/

### #143 Cinderwake
- **类型**：等距动作 ARPG / 刷宝；5 职业 × 3 天赋、点击移动战斗。
- **开发/发行**：Leifyy / Enervo Games。
- **上线**：2026-10-30（Early Access，一手）。
- **评测**：**<10 条**（页面显示 Need more user reviews，具体数 `[待确认]`）。
- **价格**：$5.99（原价 $7.49，-20%）。
- **标签（一手）**：Action RPG / Hack and Slash / Dungeon Crawler / Loot / Dark Fantasy / Isometric / Online Co-Op / Class-Based。
- **证据**：https://store.steampowered.com/app/5404010/

### #144 Nomad Drive
- **类型**：末世房车修理 + 生存；程序化世界、修/升级房车部件，1–4 人 Co-op。
- **开发/发行**：Indie Devil（自研自发）。
- **上线**：2026-10-27（Early Access，一手）。
- **评测**：**296 条 81% Very Positive**（一手）。
- **价格**：$13.49（原价 $14.99，-10%）。
- **标签（一手）**：Early Access / Driving / Automobile Sim / Survival / Post-apocalyptic / Procedural Generation / Crafting / Co-op。
- **证据**：https://store.steampowered.com/app/2223980/

### #145 Apocalyptica
- **类型**：开放世界生存建造 + RPG；100+ 怪物、元素护甲、基地防御。
- **开发/发行**：Soullessregent Gaming LLC（自研自发）。
- **上线**：2026-10-30（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$16.99（原价 $19.99，-15%）。
- **标签（一手）**：Adventure / Survival / Crafting / Open World / Base Building / First-Person / RPG / Sandbox / Tower Defense。
- **证据**：https://store.steampowered.com/app/3036840/

### #146 Divine Frequency
- **类型**：超现实 FPS / ARPG；3 主角流派、武器改装、可选精英 Boss。
- **开发/发行**：Abraxaes（自研自发）。
- **上线**：2026-10-26（Early Access，一手）。
- **评测**：**231 条 98% Very Positive**（一手）。
- **价格**：$17.99（原价 $19.99，-10%）。
- **标签（一手）**：Early Access / Horror / FPS / RPG / Psychedelic / Surreal / Lovecraftian / Resource Management。
- **证据**：https://store.steampowered.com/app/2548880/

### #147 Geoplanetical
- **类型**：地缘政治模拟 / 沙盒；选国家管经济、债务、人口、政治机构，带 Steam Workshop。
- **开发/发行**：Polytale Games（自研自发）。
- **上线**：2026-10-28（Early Access，一手）。
- **评测**：**199 条 73% Mostly Positive**（一手）。
- **价格**：$22.49（原价 $24.99，-10%）。
- **标签（一手）**：Political Sim / Simulation / Sandbox / Capitalism / Management / Economy / 3D / Tactical / Steam Workshop。
- **证据**：https://store.steampowered.com/app/940230/

### #148 Rise of the Merchants
- **类型**：中世纪城市建造 + 经济/政治/贸易；持久化在线世界。
- **开发/发行**：Black Duke Games / Black Duke Games、Three River Games (3RG)。
- **上线**：2026-10-29（Early Access，一手）。
- **评测**：**48 条 77% Mostly Positive**（一手）。
- **价格**：$19.99。
- **标签（一手）**：Strategy / City Builder / Resource Management / Political Sim / Strategy RPG / Economy / Diplomacy / Historical。
- **证据**：https://store.steampowered.com/app/5031210/

### #149 Airport Contraband
- **类型**：海关检查 Roguelike-Sim；验文件、搜行李、扫货、抓违禁品。
- **开发/发行**：DRAGO entertainment / DRAGO entertainment、Shochiku。
- **上线**：2026-10-28（一手）。
- **评测**：**53 条 81% Very Positive**（一手）。
- **价格**：$17.99（原价 $19.99，-10%）。
- **标签（一手）**：First-Person / Simulation / Crime / Investigation / Life Sim / Story Rich / Choices Matter。
- **证据**：https://store.steampowered.com/app/1167820/

### #150 Into the Crypt
- **类型**：第一人称卡牌构筑 Roguelike；1–2 人 Co-op，双人各自组牌、可看队友手牌。
- **开发/发行**：Megaglope Studios（自研自发）。
- **上线**：2026-10-29（一手）。
- **评测**：**12 条 83% Positive**（一手，样本过小）。
- **价格**：$16.99（原价 $19.99，-15%）。
- **联机（一手）**：Single-player / Multi-player / Co-op / Online Co-op。
- **标签（一手）**：Roguelike Deckbuilder / Card Battler / Online Co-Op / Dark Fantasy / Turn-Based Combat / Roguelite。
- **证据**：https://store.steampowered.com/app/1879270/

### #151 Grimhold
- **类型**：黑暗幻想 Roguelite 塔防；英雄构筑、10 幕围城。
- **开发/发行**：Elzerath Studio（自研自发）。
- **上线**：2026-10-30（Early Access，一手）。
- **评测**：**0 条**（一手）。
- **价格**：$5.94（原价 $6.99，-15%）。
- **标签（一手）**：Tower Defense / Roguelite / Pixel Graphics / Strategy / RPG / Tactical RPG / Dark Fantasy / Medieval。
- **证据**：https://store.steampowered.com/app/5187440/

### #152 The Last Legion
- **类型**：RTS + 基地建造 + 指挥官成长；跨时代军团对抗 Vex。
- **开发/发行**：Zhiyuan / EZ-Game。
- **上线**：2026-10-30（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$12.99（原价 $14.99，-15%）。
- **标签（一手）**：RPG / Action RTS / Real Time Tactics / Top-Down Shooter / Action Roguelike / RTS / Strategy RPG。
- **证据**：https://store.steampowered.com/app/4183000/

### #153 ABYSS
- **类型**：1–4 人 Co-op 潜艇恐怖 + 内鬼（Saboteur）；修信标、管电力。
- **开发/发行**：Finndustries（自研自发）。
- **上线**：2026-10-30（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$4.99（原价 $6.99，-25%）。
- **标签（一手）**：Action / First-Person / Horror / Submarine / Online Co-Op。
- **证据**：https://store.steampowered.com/app/4818920/

### #154 Grinner's Diner
- **类型**：2–4 人 Co-op 恐怖烹饪；物理手部做汉堡，夜里「常客」不是人。
- **开发/发行**：Distant Neon Games（自研自发）。
- **上线**：2026-10-30（Early Access，一手）。
- **评测**：**0 条**（一手）。
- **价格**：$6.39（原价 $7.99，-20%）。
- **标签（一手）**：Early Access / Co-op / Horror / Cooking / Job Simulator / Roguelite / First-Person。
- **证据**：https://store.steampowered.com/app/4540940/

### #155 Project Exodus
- **类型**：最多 6 人 Co-op 恐怖；近距语音、共享武器库、用网枪采集 Biomass。
- **开发/发行**：Astrox（自研自发）。
- **上线**：2026-10-30（Early Access，一手）。
- **评测**：**0 条**（一手）。
- **价格**：$5.94（原价 $6.99，-15%）。
- **标签（一手）**：Horror / Comedy / Psychological Horror / Survival Horror / First-Person / Post-apocalyptic / FPS。
- **证据**：https://store.steampowered.com/app/4149590/

### #156 Tiles of Grimmwoods
- **类型**：拼图式 Roguelike 牌组构筑；放板块给迷路孩子照路。
- **开发/发行**：ArchLevel（自研自发）。
- **上线**：2026-10-30（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$8.49（原价 $9.99，-15%）。
- **标签（一手）**：Roguelike Deckbuilder / Deckbuilding / Strategy / Roguelike / Board Game / Turn-Based Combat / Hand-drawn。
- **证据**：https://store.steampowered.com/app/3411620/

### #157 GRAVHOUNDS
- **类型**：1–4 人 Co-op 动作建造 + 撤离；物理建造基地、抵御虫群后带资源撤离。
- **开发/发行**：Octopus Panic, Inc.（自研自发）。
- **上线**：2026-11-02（Early Access，一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`（未开售）。
- **愿望单**：`[待确认]`。
- **标签（一手）**：Action / Co-op / Base Building / Extraction / Physics / Sci-fi。
- **证据**：https://store.steampowered.com/app/2440760/

### #158 Casualties: Unknown
- **类型**：洞穴探索生存模拟；模拟肢体与心血管系统，伤势/情绪影响存活。
- **开发/发行**：Orsoniks / Oro Interactive。
- **上线**：2026-11-09（一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **愿望单**：`[待确认]`。
- **标签（一手）**：Action / Adventure / Simulation / Survival / Hardcore。
- **证据**：https://store.steampowered.com/app/4576490/

### #159 County of Fortune
- **类型**：中世纪郡县建造 + 政治；多点村落、市长、贵族家族、迁徙文化。
- **开发/发行**：Nepos Games / Aquila Interactive。
- **上线**：2026-11-05（Early Access，一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **愿望单**：`[待确认]`。
- **标签（一手）**：City Builder / Simulation / Strategy / Medieval / Politics / Early Access。
- **证据**：https://store.steampowered.com/app/3204330/

### #160 Mayday: The Survival Island
- **类型**：开放世界生存建造；坠机荒岛、狩猎钓鱼种田、揭开真相。
- **开发/发行**：Pequi studios / indie.io。
- **上线**：2026-11-02（一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **愿望单**：`[待确认]`。
- **标签（一手）**：Adventure / Indie / Open World Survival Craft / Crafting / Exploration。
- **证据**：https://store.steampowered.com/app/1686230/

### #161 Ramen Shop Simulator
- **类型**：拉面店经营模拟；翻新小巷、扩店、经营。
- **开发/发行**：Sannin Interactive（自研自发）。
- **上线**：2026-11-03（Early Access，一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **愿望单**：`[待确认]`。
- **标签（一手）**：Simulation / Management / Cooking / Early Access。
- **证据**：https://store.steampowered.com/app/3393720/

### #162 ALTEREDBLOOD+ [AB+]
- **类型**：移动射击 FPS / 平台 + 波次生存；EA 0.1 含 3 集 6 任务、4 武器、6 敌人、1 章 Boss。
- **开发/发行**：TRUEWORLD STUDIOS（自研自发）。
- **上线**：2026-11-04（Early Access，一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **愿望单**：`[待确认]`。
- **标签（一手）**：Action / FPS / Platformer / Wave Survival / Early Access。
- **证据**：https://store.steampowered.com/app/4318080/

---

## 五、可达性与 `[待确认]` 说明

1. **Steam 一手可达性**：`store.steampowered.com` 用 `--resolve 23.36.254.11 / 104.83.198.104` 直连；单 appid `appdetails` 与商店页稳定 200，**22/22 候选发售日取到**，16 个已发售候选评测数取到。
2. **`appdetails` 批量不可用**：逗号分隔多 appid 返回 24 字节 gzip 空包（6 次重试全失败）；本轮逐 appid 请求 114 次，成功 114 次。
3. **`appreviews` JSON 不可用**：接口 302 到首页（Welcome to Steam），无法拿 JSON；评测数改由商店页 `All Reviews / English Reviews` 区块解析。
4. **评测数跨边缘不一致**：同一 app 在不同 CDN 边缘显示 8 条 vs 148 条（可能为地区/语言切片）；本轮取多 IP 最大值，快照时间 2026-10-31 04:10–04:25 CST。**分析员复核时必须重取并注明时间**。
5. **SteamDB 直连 403**：`steamdb.info` Cloudflare 拦截，本轮没有一手 SteamDB 榜单；S2 的 Phantom Blade Zero / Probably Stolen 数字均为媒体转引 `[待确认]`。
6. **愿望单数字**：Steam 不公开精确值；本轮**没有一条候选拿到可信三方愿望单数**，全部写 `[待确认]`，只有 Popular Upcoming 的**榜单位置**（一手 Steam 排序）。
7. **无日期条目不入池**：BigFooten / Ski Survival / Dear Passengers 等 `Coming soon` 无具体日期，按 Profile「上线日期用 Steam 商店页为准」本轮不收。
8. **Reddit 源连续四轮缺失**：定向查询零返回，未用社区讨论量作证据。
9. **10-30 单日供给极大**：约 300 个 app 上架（含 Demo/音轨/DLC），本轮只对 114 个候选逐个取 `appdetails` 分类，未逐一读 300 个详情页；「未入池」不等于「已淘汰」，见 3.2。

---

## 六、交接给候选分析员

- 本轮入池 **22 个**：`CANDIDATE-POOL.md` #141–#162，结论一律 `待分析`；四维分、总分、Wiki 列留 `—`。
- 本轮**未评分、未做 6 条 SERP wiki 查询、未采词**；分析员需按 `docs/STRATEGY-选词与评分.md` 补全。
- 按「一手评测样本」排序（**只排验证顺序，不是建站建议**）：
  1. **Deadly Days: Roadtrip**（#141）：694 条 89%，本轮唯一 ≥300；先查系列前作 Fandom 与 `Deadly Days` 品牌竞争。
  2. **Nomad Drive**（#144）：296 条 81%，接近门槛；`Nomad Drive` 需与通用词组区分。
  3. **Divine Frequency**（#146）：231 条 98%；先判「叙事比重 vs 攻略型需求」。
  4. **Geoplanetical**（#147）：199 条 73%；政治模拟题材，先判攻略型词占比。
  5. **Airport Contraband**（#149）/ **Rise of the Merchants**（#148）：53 / 48 条，样本小，等 D+7。
  6. **Into the Crypt**（#150）/ **Cinderwake**（#143）：12 / <10 条，样本不足，建议先观察。
  7. **#142、#145、#151–#156**：0 评测首发，**建议先观察 D+3~D+7 评测曲线再采词**。
  8. **#157–#162**：未发售，预售期风险见 10-26 轮教训（机制型词零搜索量）；按发售日远近排：#157（11-02）→ #160（11-02）→ #161（11-03）→ #162（11-04）→ #159（11-05）→ #158（11-09）。
- 采词消歧建议（分析员/研究员用）：
  - `Deadly Days: Roadtrip` 必须与 2019 年《Deadly Days》区分，试 `Deadly Days Roadtrip`、加 `Pixelsplit`。
  - `Apocalyptica` 与芬兰金属乐队完全撞名，**必须** `Apocalyptica game`。
  - `Divine Frequency` / `Zotenhold` / `Cinderwake` / `Grimhold` / `ABYSS` 为生僻或通用词：`ABYSS` 尤其撞名严重，必须 `ABYSS game` 或加 `co-op submarine`。
  - `Nomad Drive` / `Rise of the Merchants` / `Airport Contraband` / `The Last Legion` / `County of Fortune` / `Mayday` / `Ramen Shop Simulator` 均为通用品类词组，裸词必撞，MUST 加 `game` 或发行方锚定。
  - `GRAVHOUNDS` / `Zotenhold` / `Cinderwake` 为新造词，可先试裸词。
