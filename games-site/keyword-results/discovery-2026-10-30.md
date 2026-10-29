# 发现轮报告 — 2026-10-30

> 执行：游戏侦察员（`docs/agents/11` / `12`）
> 下游：候选分析员（`22` / `23`）
> 任务编号：DISCOVERY-10/30
> 本报告只做「多源发现 + 硬筛 + 证据」，**不含四维评分、不含 wiki 竞争检查、不含采词、不含建站建议**。

## 0. 本轮口径

- 按派单要求跑 **4 类主源 + 2 个补充源**：Steam 愿望单/Popular Upcoming（S1）、SteamDB 趋势/热销（S2）、Steam 新发售 2026-10-27~10-30（S3）、即将发售 + Next Fest（S4）、Reddit（S5，失败）、Steam 官方策展 + 三方发售日历（S6）。
- 硬筛（MUST）：跳过 AAA、纯竞技、超休闲、视觉小说、已停服、上线超过 6 个月且无重大更新。
- 优先级：**已发售 ≤30 天** 或 **已定档且 8 周内发售（≤ 2026-12-24）**；Steam 页只有 `Coming soon` 无日期的**不入池**（按 Profile「上线日期用 Steam 商店页为准」）。
- 侦察员只填候选池的 `# / 游戏 / 类型 / 上线日 / 发现日 / 证据`，结论一律 `待分析`；四维分、总分、Wiki 列留 `—`。
- 评测数、好评率、价格、发售日一律 Steam 商店页 / `appdetails` 一手；愿望单一律标三方，查不到写 `[待确认]`。

### 证据可信度分级（与 10-28 / 10-29 轮一致）

| 级别 | 含义 |
|---|---|
| **一手** | 本轮直接打开 Steam 商店页 / 调 `store.steampowered.com/api/appdetails`、`/api/storesearch` 读到的字段（发售日 / 评测数 / 好评率 / 类型标签 / 价格） |
| **三方** | 媒体、榜单站、SteamDB 快照、第三方愿望单模型；标注站点名与日期 |
| **待确认** | 多源冲突或只有单一弱来源，未写成确定值 |

### 本轮与上轮的关键差异（采集通道）

沿用 Profile 的 `--resolve` 直连，但**本轮 `store.steampowered.com` 明显更不稳定**：单次请求有 20–40% 概率 35–40 秒后超时返回 0 字节。处理方式：

```
dig @1.1.1.1 store.steampowered.com +short          # → 104.83.198.104
curl -sS -k -L --max-time 20 --resolve store.steampowered.com:443:104.83.198.104 \
  'https://store.steampowered.com/app/<appid>/?cc=us&l=english'
```

- 采集脚本对每个请求做 **2–4 次重试**，且**每次请求前先删除临时文件**——否则失败请求会留下上一次的 JSON，导致「DUSTBLOOM 被解析成 Grr Grr Gnomes」这类**错配**（本轮实际发生过一次，已修正并重取，见第五节第 6 条）。
- `api.steampowered.com`（`ISteamChartsService/GetMostPlayedGames`）**三个 IP 全部超时**，Steam 官方「最热玩」榜本轮拿不到 → S2 只能用三方转引。
- `store.steampowered.com/charts/*` 页面是客户端 JS 渲染，HTML 里无数据（`charts/mostplayed` 与 `charts/upcoming` 实际都跳回 `/charts`）。

---

## 一、搜索日志（6 个来源，S1–S6）

### S1 — Steam 愿望单 / Popular Upcoming（三方站 + 媒体榜单）

| 项 | 内容 |
|---|---|
| 查询 | `Steam top wishlisted upcoming games November 2026 indie chart` |
| 入口 1 | IndieBunny《Most Wishlisted》（按 Steam「Popular Upcoming」逐日排名，明示「Steam 不公开愿望单数」） https://indiebunny.com/most-wishlisted |
| 入口 2 | GameGrin《Steam Scream Fest V — Top 10 Upcoming Games by Wishlists》 https://www.gamegrin.com/news/steam-scream-fest-v-top-10-upcoming-games-by-wishlists/ |
| 入口 3 | lan-gaming《2026年10・11月 Steam 発売予定 tier リスト》（数据截至 2026-10-19） https://www.lan-gaming.net/steam-tier-2026-oct-nov/ |
| 入口 4 | PlayRecon《Steam releases · November 2026》 https://app.playrecon.com/calendar/2026/month/11/publishers |
| 命中（新） | **Terrible Lizards**、**Curse of Resthaven**、**The Zibbo Show**、**Dead Party**、**Phantasma Hotel**（GameGrin Scream Fest V 愿望单 Top10）；**Vampy's Big Day**（IndieBunny #20）、**Rat Game**（#23）；**Magical Girl ER**（#5）、**Fantasy World Manager**（#13）、**ShredDead**（#19）、**Rip It! Card Collector**（#10）、**just volleyball**（#26）、**Figure Me Out**（#17） |
| 去重 | Loftia / DREADMOOR / Warhammer Survivors / Cozy Game Restoration / Trees Hate You / Brotato 等已在池，未重复收录 |

### S2 — SteamDB 趋势 / 热销榜（三方转引，官方接口不可达）

| 项 | 内容 |
|---|---|
| 查询 | `SteamDB top sellers week ending October 29 2026 most played new releases` |
| 入口 | IGN FR（Phantom Blade Zero 首发）、ruocco.it 周报、gamelade.vn、gamebiz 日榜（10-29）、consolepcgaming、spidersweb |
| 命中（已发售，全部淘汰） | **Phantom Blade Zero**（峰值 43.1 万–44.8 万 CCU，1,293 条 86%）、**CoD: MW4**、**AION 2**、**FINAL FANTASY RESONANCE**、**Probably Stolen**（已在池 #77，日榜 12 位）、**ANOMALITH**（已在池 #50，日区第 3） |
| 结论 | Steam 官方 most played 接口本轮三 IP 全超时、`/charts` 页面为 JS 渲染 → **峰值 CCU 与周销排名一律标三方**，精确数字未逐项复核 |

### S3 — Steam 新发售（2026-10-27 ~ 10-30，一手主源）

| 项 | 内容 |
|---|---|
| 入口 1 | Steam 官方搜索 `search/results/?sort_by=Released_DESC` 连抓 8 页（400 条，`cc=us&l=english`），覆盖 10-28 23:00 ~ 10-29 全天 |
| 入口 2 | `store.steampowered.com/api/featuredcategories` 的 `new_releases`（30 条官方策展） |
| 入口 3 | 媒体：indiegamed.com《Steam 10 月独立新游发售盘点》 https://indiegamed.com/review/steam-late-october-indie-preview 、boilingsteam「New Steam Games 2026-10-28」、gamersky 10 月发售表 |
| 观察（只作事实） | 10-29 单日新上架约 **211 个** app（400 条里 Oct 29 占 211、Oct 28 余下），10-30 当日截至抓取时**尚未进入 Released_DESC 前 400**（页面最早一页仍全是 10-29） |
| 命中（新） | **Terrible Lizards**、**Curse of Resthaven**、**The Zibbo Show**、**Dead Party**、**Phantasma Hotel**（均在官方 `new_releases` 策展位）；**Fantasy World Manager**(10-28)、**Zombie Assault: Resurgence**(10-28)、**Hoosegow: Prison Survival**(10-28)、**Vampy's Big Day**(10-27) |
| 去重 | S.O.N.A.R.(#78)、O2GETHER(#108)、Coal Duty(#107)、Everlast(#111)、ANOMALITH(#50)、Moon Sweepers(#76)、Probably Stolen(#77) 均已在池 |

### S4 — 即将发售 / Next Fest（10 月届已于 10-27 结束）

| 项 | 内容 |
|---|---|
| 查询 1 | `Steam Next Fest October 2026 most played demos top games list` |
| 查询 2 | `upcoming co-op survival crafting games Steam November December 2026 release date indie` |
| 入口 1 | Valve 官方「50 most-played demos」转引：Polygon https://www.polygon.com/steam-next-fest-october-2026-most-played-games/ 、GamingOnLinux https://www.gamingonlinux.com/2026/10/steam-next-fest-october-2026-heres-the-most-played-demos-so-far/ 、ComputerBase、AUTOMATON |
| 入口 2 | Steam 官方搜索 `filter=comingsoon`（`total_count` 18,815）+ `api/featuredcategories` 的 `coming_soon` |
| 入口 3 | PlayRecon / steamalytics 发售日历、GameRant《Blind Descent》定档稿 |
| 命中（新） | **Wildsite**(11-05 EA)、**Orcthal**(11-16)、**World Craft Dream Island**(11-19)、**DUSTBLOOM**(11-24 EA)、**Abandoned Below**(12-01)、**Nothing Unusual**(12-03) |
| 淘汰/去重 | Next Fest Top20 里的 **Frostrail**(#85)、**Loftia**(#44)、**Dumpster Gang**(#83)、**HANDS OVER**(#79)、**Emberville**(#42)、**Never Be Alone**(#84)、**Probably Stolen**(#77)、**Worst Class Ever**(#101)、**Abyssal Lapidary**(#105)、**Haunted Paws**(#106) 均已在池；其余见第三节 |
| 注 | 下一届 Next Fest 为 **2027 年 2 月**，11–12 月没有 Fest 窗口 |

### S5 — Reddit 补充源（**连续三轮失败，如实记录**）

| 项 | 内容 |
|---|---|
| 查询 | `site:reddit.com new co-op horror survival game recommendation late October 2026` |
| 结果 | **无任何返回**（与 10-28、10-29 轮一致） |
| 处理 | 按 Profile 如实记录该维度缺失，**未用社区讨论量补证据**；S1–S4 + S6 已达 4 源要求，不影响本轮成立 |

### S6 — Steam 官方策展 + 三方发售日历（日期复核源）

| 项 | 内容 |
|---|---|
| 入口 | `api/featuredcategories`（`new_releases` 30 条 / `coming_soon` 10 条）、IndieBunny 逐日 Popular Upcoming、PlayRecon 11 月日历 |
| 用途 | 只用于**日期与「是否官方策展位」**的交叉核对，不用其分数或热度数字 |

---

## 二、通过硬筛（本轮入池候选，17 个：`#124`–`#140`）

> 全部 17 个的**发售日、评测数、好评率、价格、标签均为 2026-10-30 一手读取**（Steam 商店页 `All Reviews` 区块 + `appdetails`）；愿望单数一律三方或 `[待确认]`。

| 池号 | 游戏 | 类型 | 上线日（一手） | 评测（一手） | 证据 | 疑点（交分析员） |
|---|---|---|---|---|---|---|
| #124 | **Terrible Lizards** | 恐怖跑酷 / 第一人称（WDR Studios / Digital Pajamas、Behaviour Interactive） | 2026-10-29 | **3 条（暂无评分）** | [2920220](https://store.steampowered.com/app/2920220/) | 样本极小；Scream Fest 愿望单 Top10 但**首发 3 条评测**；标签 Puzzle Platformer，攻略面可能窄 |
| #125 | **Curse of Resthaven** | 单人叙事 Roguelite / 卡牌远征 + 岛屿治理（Hilltop Studios / Digital Bandidos） | 2026-10-29 | **0 条** | [3796150](https://store.steampowered.com/app/3796150/) | 0 评测；Lovecraft + 交易经济 + roguelite，页型面宽，但叙事比重待判 |
| #126 | **The Zibbo Show** | 骰子 + 卡组构筑 / 电视综艺 Roguelike（Tessera Studios） | 2026-10-29 | **3 条（暂无评分）** | [972450](https://store.steampowered.com/app/972450/) | 3 条评测；牌池/骰面组合可写，但需查是否有稳定答案来源 |
| #127 | **Dead Party** | 1–4 人 Co-op 丧尸清版射击（Radiation Blue / Snail Games USA） | 2026-10-29 | **1 条（暂无评分）** | [1270660](https://store.steampowered.com/app/1270660/) | 1 条评测；标签含 Party Game / Cartoony，**疑偏派对向**；发行方 Snail Games |
| #128 | **Phantasma Hotel** | 回合制战斗恐怖 Roguelike / 调查（Phantasma Games / Andgo Games） | 2026-10-29 | **0 条** | [4655530](https://store.steampowered.com/app/4655530/) | 0 评测；$7.19 小体量，内容深度待验证 |
| #129 | **Fantasy World Manager** | 幻想世界「上帝视角」沙盒 / 经营（Florian Alushaj / Legendary Pixels） | 2026-10-28 EA | **61 条 80%** | [3447280](https://store.steampowered.com/app/3447280/) | EA 首周 61 条；**带 Steam Workshop + 关卡编辑器**，系统层多但需核可写来源 |
| #130 | **Zombie Assault: Resurgence** | 俯视角 ARPG 射击 / 单人 + 4 人 Co-op（Ninja Kiwi） | 2026-10-28 | **163 条 68%** | [2747660](https://store.steampowered.com/app/2747660/) | 68% Mixed；有前作（SAS 系列）**系列 wiki/Fandom 风险**；跨平台联机 |
| #131 | **Hoosegow: Prison Survival** | 监狱生存 Roguelite / 选择分支（D.Dream games） | 2026-10-28 | **11 条 72%** | [4060640](https://store.steampowered.com/app/4060640/) | 11 条样本过小；perma death + 随机罪名，攻略面待判 |
| #132 | **Vampy's Big Day** | 吸血鬼潜行 / 喜剧冒险（Jerbob） | 2026-10-27 | **134 条 93%** | [4287040](https://store.steampowered.com/app/4287040/) | 单人剧情向 + 多结局；**攻略型需求可能偏低**（无构筑/数值系统） |
| #133 | **Hubble Bubble** | 1–4 人 Co-op 太空水烟店经营（Parita Games） | 2026-10-23 | **120 条 94%** | [5013160](https://store.steampowered.com/app/5013160/) | 口碑好但体量小（$6.39）；玩法偏「手忙脚乱」合作，页型面窄 |
| #134 | **Rat Game** | 最多 8 人非对称恐怖喜剧 Co-op（鼠群 vs 厨师；Sokpop Collective） | 2026-10-30（Steam 页今日；抓取时 `comingSoon=true`，尚未开售） | **0 条** | [3347910](https://store.steampowered.com/app/3347910/) | 抓取时未开售；Sokpop 作品多为小体量；非对称双阵营可写角色页 |
| #135 | **Wildsite** | 1–4 人 Co-op 科幻生存建造（Vividdi Entertainment） | 2026-11-05 EA | **0 条（未发售）** | [2649120](https://store.steampowered.com/app/2649120/) | 无愿望单数据 `[待确认]`；三方搜索称页面日期曾为 2025，**按 Steam 一手记 11-05** |
| #136 | **Orcthal** | 动作 Roguelike / Bullet Heaven（含 PvP + Co-op；RedKar Devs） | 2026-11-16 | **0 条（未发售）** | [4531360](https://store.steampowered.com/app/4531360/) | 自动施法向，**构筑深度与页型数待判**；Next Fest demo 可玩 |
| #137 | **World Craft Dream Island** | Cozy 体素沙盒 / 最多 10 人 Co-op（Pango Games / Playvest） | 2026-11-19 | **0 条（未发售）** | [5515440](https://store.steampowered.com/app/5515440/) | 无愿望单数据 `[待确认]`；46 张预制蓝图 + boss realm，内容面靠更新 |
| #138 | **DUSTBLOOM** | 1–4 人 Co-op 生存建造 / 自动化 + 地形改造（SoiQi Interactive） | **2026-11-24 EA**（媒体写 11-10，**按 Steam 一手**） | **0 条（未发售）** | [5157580](https://store.steampowered.com/app/5157580/) | 发售日**三方与一手差 14 天**；无愿望单数据 `[待确认]` |
| #139 | **Abandoned Below** | 1–4 人 Co-op 僵尸地堡波次生存（Eldersong Games） | **2026-12-01**（媒体写 11-30，按 Steam） | **0 条（未发售）** | [5415090](https://store.steampowered.com/app/5415090/) | 无愿望单数据 `[待确认]`；波次防御页型偏浅 |
| #140 | **Nothing Unusual** | 背包构筑 + 融合的竞技场生存 Roguelike / 联机 Co-op（SleepingMass） | 2026-12-03 | **0 条（未发售）** | [5198040](https://store.steampowered.com/app/5198040/) | 无愿望单数据 `[待确认]`；300+ 物品 / 100+ 融合配方（发行方口径，未核实） |

### 2.1 为什么这 17 个能过筛（只作事实陈述）

- 全部独立/中小体量，**无 AAA、无纯 PvP 竞技、无视觉小说、无已停服**。
- **10 个已发售**（#124–#133，#134 当日待开售）落在「≤30 天」窗口；**7 个已定档**（#135–#140 + #134）落在 8 周窗口（≤ 2026-12-24）。
- 每个候选都有可点开的 Steam 店页；**17/17 一手复核**发售日与评测数，无一条用搜索摘要编造。

### 2.2 评测样本分布（本轮最关键的事实）

| 口径 | 数量 | 游戏 |
|---|---|---|
| ≥100 条 | 4 | Zombie Assault 163 / Vampy 134 / Hubble Bubble 120 / Fantasy World Manager 61（未达 100） |
| 10–99 条 | 1 | Hoosegow 11 |
| 1–9 条 | 3 | Terrible Lizards 3 / Zibbo 3 / Dead Party 1 |
| 0 条 | 9 | Curse of Resthaven、Phantasma Hotel + 7 个未发售 |

**事实**：本轮「已发售 ≤30 天且评测 ≥300」的候选 **0 个**；上线 1–7 天的新品普遍只有个位数评测。10-29 单日上架约 211 个 app，说明**供给端极大、需求端分化极快**——哪款能起量要看 D+3 之后的评测曲线，这一点留给分析员判断。

---

## 三、未通过硬筛 / 未入池（记录理由，保留轨迹）

### 3.1 按硬筛规则淘汰

| 游戏 | 上线/窗口 | 淘汰理由 | 证据 |
|---|---|---|---|
| **Phantom Blade Zero** | 2026-10-29 | **AAA 动作 RPG**（1,293 条 86%，峰值 43–45 万 CCU，周销第一） | Steam 商店页 + IGN FR / consolepcgaming（三方） |
| **Call of Duty: Modern Warfare 4** | 2026-10-22 | **AAA**（5,212 条 75%） | Steam `featuredcategories`（一手）+ 三方周榜 |
| **AION 2 / FINAL FANTASY RESONANCE / ArcheAge Chronicles / Crimson Desert Enhanced** | 2026-10 | **AAA / 大厂 / MMO** | Steam 商店页（一手）+ 三方 |
| **Tropico 7** | 2026 | **系列 IP + 传统发行商（Kalypso）**，Next Fest Top50 里唯一传统发行 | Polygon / ComputerBase（三方） |
| **The Wolf Among Us Remastered / RESONANCE OF FATE Remaster / Croc 2 Kingdom of the Gobbo** | 2026-10-29 | **重制/复刻老作**，非新游戏窗口 | Steam 搜索页（一手） |
| **Magical Girl ER**（10-26，105 条 82%） | 2026-10-26 | **Steam 标签含 Visual Novel**（医疗模拟但 VN 化呈现）→ 硬筛 | 商店页标签（一手） |
| **ShredDead**（10-26，295 条 73%） | 2026-10-26 | **增量/放置（Incremental / Idler / Auto Battler）→ 超休闲向** | 商店页标签（一手） |
| **Rip It! Card Collector** | 2026-11-04 | **增量收集（Incremental）→ 超休闲向** | 商店页标签（一手） |
| **Find The Needle / Character House -Desktop Companion-** | 2026 | **增量 / 桌面挂件**，Next Fest 榜内但属超休闲品类 | Polygon（三方） |
| **HELENA : Cloud District** | 2026-10-29 | **免费第一人称探索/平台，无战斗**（Walking-sim 向），攻略面窄 | 商店页（一手） |
| **Crime Podcast: Welcome to the Neighborhood** | 2026-11-02 | **标签 Walking Simulator**，无系统可写 | 商店页（一手） |
| **Figure Me Out** | 2026-11-02 | **纯 PvP 派对 FPS**（无 PvE/Co-op 战役） | 商店页（一手） |
| **just volleyball** | 2026-11-04 | **纯竞技体育（PvP 排球）** | 商店页（一手） |
| **Fart Together** | 2026-10-29 EA | **物理派对 friendslop**，无系统深度 | 商店页（一手） |
| **Tensei Brave** | 2026-10-23 | **含 Nudity / Sexual Content / Hentai 标签**（广告合规风险）+ 33% 好评 | 商店页（一手） |

### 3.2 硬筛通过但本轮**未入池**（日期/窗口问题，非淘汰）

| 游戏 | 情况 | 理由 | 证据 |
|---|---|---|---|
| **8 Hours Till Dawn** | Steam `Coming soon`，无日期（三方写 10-27） | **一手无定档**；1–6 人 Co-op 卡牌编程生存 roguelite，机制面很好 → 等定档再收 | https://store.steampowered.com/app/4688730/ （一手） |
| **ROMUL** | Steam `Coming soon`，无日期 | **一手无定档**；1–4 人 Co-op 太空拾荒恐怖（语音控制机器人） | https://store.steampowered.com/app/4755250/ （一手） |
| **Deadzone Rogue 2 / Wyldheart / No Body No Problem! / Dark Hours: Anomalies** | 均 `Coming soon` 无日期 | **一手无定档**（其中前三为 Next Fest Top20） | app 4465790 / 3642910 / 4954970 / 5259120（一手） |
| **Grr Grr Gnomes** | 2027-01-19 | **超出 8 周窗口** | https://store.steampowered.com/app/4900890/ （一手） |
| **Mortuus** | 2027-01-11 | **超出 8 周窗口** | https://store.steampowered.com/app/3680170/ （一手） |
| **Haunted Paws** | May 2027 | **窗口外**，且已在池 #106 | https://store.steampowered.com/app/2861080/ （一手） |
| **Worst Class Ever / Abyssal Lapidary** | 2026-11-09 / 无日期 | **已在池**（#101 / #105），未重复收录 | `CANDIDATE-POOL.md` |
| **Frostrail / Loftia / Dumpster Gang / HANDS OVER / Emberville / Never Be Alone / Probably Stolen / S.O.N.A.R. / Moon Sweepers** | — | **已在池**（#85 / #44 / #83 / #79 / #42 / #84 / #77 / #78 / #76） | `CANDIDATE-POOL.md` |

---

## 四、候选逐条证据（只列本轮新增，17 条）

### #124 Terrible Lizards
- **类型**：第一人称恐怖跑酷 / 解谜平台，背景是废弃的 Route 66 恐龙乐园「Dalton's Dinos」。
- **开发/发行**：WDR Studios LLC / Digital Pajamas、Behaviour Interactive。
- **上线**：2026-10-29（一手）。
- **评测**：**3 条，暂无评分**（一手 2026-10-30）。
- **价格**：$19.99（原价 $24.99，-20%）。
- **标签（一手）**：Horror / Dinosaurs / Platformer / Puzzle Platformer / Psychological Horror / Fast-Paced。
- **平台**：仅单机（无 co-op）。
- **证据**：https://store.steampowered.com/app/2920220/

### #125 Curse of Resthaven
- **类型**：单人叙事 Roguelite；治理一座被诅咒的岛，调查侄女失踪，审问 / 交易 / 升级 / 卡牌式远征。
- **开发/发行**：Hilltop Studios / Digital Bandidos。
- **上线**：2026-10-29（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$17.99（原价 $19.99，-10%）。
- **标签（一手）**：Roguelite / Story Rich / Lovecraftian / Psychological Horror / Gothic / Trading / Economy / Mystery。
- **证据**：https://store.steampowered.com/app/3796150/

### #126 The Zibbo Show
- **类型**：骰子 + 卡组构筑的「电视综艺」Roguelike；选骰子、下注、组 combo。
- **开发/发行**：Tessera Studios（自研自发）。
- **上线**：2026-10-29（一手）。
- **评测**：**3 条，暂无评分**（一手）。
- **价格**：$19.99。
- **标签（一手）**：Deckbuilding / Card Game / Turn-Based Combat / Roguelike / Sci-fi / Retro / Robots。
- **证据**：https://store.steampowered.com/app/972450/

### #127 Dead Party
- **类型**：1–4 人 Co-op 丧尸清版射击；四主角对抗 UFO 带来的亡灵。
- **开发/发行**：Radiation Blue / Snail Games USA。
- **上线**：2026-10-29（一手）。
- **评测**：**1 条，暂无评分**（一手）。
- **价格**：$16.99（原价 $19.99，-15%）。
- **联机（一手）**：Online Co-op / 本地分屏 Co-op / Remote Play Together。
- **标签（一手）**：Multiplayer / Cartoony / Party Game / Zombies / Shooter / Local Co-Op / PvE。
- **证据**：https://store.steampowered.com/app/1270660/

### #128 Phantasma Hotel
- **类型**：回合制战斗 + 调查的恐怖 Roguelike；被诅咒的旅馆，每步掷骰定命。
- **开发/发行**：Phantasma Games / Andgo Games。
- **上线**：2026-10-29（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$7.19（原价 $8.99，-20%）。
- **标签（一手）**：Horror / Turn-Based Combat / Investigation / Choices Matter / 1980s / Roguelike / Pixel Graphics。
- **证据**：https://store.steampowered.com/app/4655530/

### #129 Fantasy World Manager
- **类型**：幻想世界「上帝视角」沙盒 / 经营——英雄、生物、任务、事件、文化、宗教、阵营、地上世界与地牢。
- **开发/发行**：Florian Alushaj / Legendary Pixels。
- **上线**：2026-10-28（Early Access，一手）。
- **评测**：**61 条 80% Very Positive**（一手）。
- **价格**：$13.49（原价 $14.99，-10%）。
- **特性（一手）**：Steam Workshop、关卡编辑器、程序化生成、像素 2D。
- **证据**：https://store.steampowered.com/app/3447280/

### #130 Zombie Assault: Resurgence
- **类型**：俯视角 ARPG 射击（Ninja Kiwi SAS 系列），单人 / 最多 4 人 Co-op，跨平台联机。
- **开发/发行**：Ninja Kiwi（自研自发）。
- **上线**：2026-10-28（一手）。
- **评测**：**163 条 68% Mixed**（一手）。
- **价格**：$11.99（原价 $14.99，-20%）。
- **内容（一手来自商店页）**：可升级武器与装备、RPG 成长、4 人 co-op、跨平台多人。
- **证据**：https://store.steampowered.com/app/2747660/

### #131 Hoosegow: Prison Survival
- **类型**：监狱生存 Roguelite；随机罪名 / 随机刑期，每个选择开新路或致死。
- **开发/发行**：D.Dream games（自研自发）。
- **上线**：2026-10-28（一手）。
- **评测**：**11 条 72% Mostly Positive**（一手，样本过小）。
- **价格**：$8.99（原价 $9.99，-10%）。
- **标签（一手）**：Roguelite / Perma Death / Simulation / Dark Humor / Crime / Choices Matter / Crafting。
- **证据**：https://store.steampowered.com/app/4060640/

### #132 Vampy's Big Day
- **类型**：吸血鬼潜行 / 喜剧冒险；借妖精之力移动太阳制造阴影，选择放过或吞食村民。
- **开发/发行**：Jerbob（自研自发）。
- **上线**：2026-10-27（一手）。
- **评测**：**134 条 93% Very Positive**（一手）。
- **价格**：$8.99（原价 $9.99，-10%）。
- **标签（一手）**：Cute / Choices Matter / Story Rich / Multiple Endings / Stealth / Comedy / Puzzle。
- **证据**：https://store.steampowered.com/app/4287040/

### #133 Hubble Bubble
- **类型**：1–4 人 Co-op 水烟店经营（太空站，服侍外星客人）。
- **开发/发行**：Parita Games（自研自发）。
- **上线**：2026-10-23（一手）。
- **评测**：**120 条 94% Very Positive**（一手）。
- **价格**：$6.39（原价 $7.99，-20%）。
- **玩法（一手描述）**：装烟碗、点炭、上桌、维持「正常」；物理向合作。
- **证据**：https://store.steampowered.com/app/5013160/

### #134 Rat Game
- **类型**：最多 8 人非对称恐怖喜剧——鼠群 vs 厨师，破坏餐厅 / 守住餐厅。
- **开发/发行**：Sokpop Collective。
- **上线**：2026-10-30（Steam 页今日；抓取时 `comingSoon=true`，尚未开售）。
- **评测**：**0 条**（一手）。
- **价格**：`[待确认]`（未开售，页面无价）。
- **标签（一手）**：Comedy / Online Co-Op / Horror / Asymmetric（PvP + Co-op 双模式）。
- **证据**：https://store.steampowered.com/app/3347910/

### #135 Wildsite
- **类型**：1–4 人 Co-op 科幻生存建造；等离子风暴星球，可缩小并搬运基地。
- **开发/发行**：Vividdi Entertainment（自研自发）。
- **上线**：2026-11-05（Early Access，一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`（未开售）。
- **标签（一手）**：Open World Survival Craft / Base Building / Online Co-Op / Crafting / Sci-fi。
- **愿望单**：`[待确认]`（未查到三方估算）。
- **证据**：https://store.steampowered.com/app/2649120/

### #136 Orcthal
- **类型**：动作 Roguelike / Bullet Heaven；自动施法清屏 + 升级 perk，含 PvP 与 Co-op；demo 可玩。
- **开发/发行**：RedKar Devs（自研自发）。
- **上线**：2026-11-16（一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **标签（一手）**：Action Roguelike / Bullet Hell / Hack and Slash / Bullet Heaven / PvP / Arcade。
- **证据**：https://store.steampowered.com/app/4531360/

### #137 World Craft Dream Island
- **类型**：Cozy 体素沙盒；单人 / 最多 10 人 Co-op，挖矿建造、46 张预制建筑、宠物、boss 领域传送门。
- **开发/发行**：Pango Games / Playvest。
- **上线**：2026-11-19（一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **标签（一手）**：Open World Survival Craft / Voxel / Online Co-Op / Base Building。
- **证据**：https://store.steampowered.com/app/5515440/

### #138 DUSTBLOOM
- **类型**：1–4 人 Co-op 生存建造；基地防御 + 生产自动化 + 卡车运矿 + 五阶段地形改造，夜间骷髅潮。
- **开发/发行**：SoiQi Interactive（自研自发）。
- **上线**：**2026-11-24（Early Access，一手）**；三方媒体写 11-10，**按 Steam 记 11-24**。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **标签（一手）**：Open World Survival Craft / Base Building / Colony Sim / Automation / Co-op / LAN Co-op。
- **证据**：https://store.steampowered.com/app/5157580/

### #139 Abandoned Below
- **类型**：1–4 人 Co-op 僵尸波次生存（地下掩体，修路障、解锁新区域）。
- **开发/发行**：Eldersong Games（自研自发）。
- **上线**：**2026-12-01（一手）**；三方媒体写 11-30，**按 Steam 记 12-01**。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **标签（一手）**：Zombies / FPS / Co-op / Horror / Online Co-Op。
- **证据**：https://store.steampowered.com/app/5415090/

### #140 Nothing Unusual
- **类型**：背包构筑 + 元素融合的竞技场生存 Roguelike，支持联机 Co-op。
- **开发/发行**：SleepingMass（单人，自研自发）。
- **上线**：2026-12-03（一手）。
- **评测**：0 条（未发售，一手）。
- **价格**：`[待确认]`。
- **标签（一手）**：Action Roguelike / Inventory Management / Roguelike Deckbuilder / Online Co-Op / Surreal / Hand-drawn。
- **三方口径（未核实）**：4 角色 / 300+ 物品 / 100+ 融合配方（媒体转述发行方）。
- **证据**：https://store.steampowered.com/app/5198040/

---

## 五、可达性与 `[待确认]` 说明

1. **Steam 一手可达性（本轮波动大）**：`store.steampowered.com` 用 `--resolve 104.83.198.104` 直连，单请求约 20–40% 概率 35–40 秒超时返回 0 字节；脚本重试 2–4 次后**全部 17 个候选店页 + appdetails 均取到**。**没有任何一条用「空 body」当通过**（空响应一律判未验证并重试）。
2. **解析错配事故（已修正）**：curl 失败时会保留上一次的临时文件，导致 `storesearch("DUSTBLOOM")` 读到上一轮 `Grr Grr Gnomes` 的结果；同一批里 `World Craft Dream Island` 又被错配成 `DUSTBLOOM`。已在脚本里**每次请求前删除临时文件**后重取，本报告与候选池里的 4 条（DUSTBLOOM / World Craft / Nothing Unusual / Abandoned Below）为修正后数据。
3. **`ISteamChartsService/GetMostPlayedGames` 不可用**：`api.steampowered.com` 两个真实 IP（23.54.118.38 / 23.54.118.35）全部超时 → 本轮**没有一手 most-played 榜**；峰值 CCU 一律三方转引。Steam 官方 `/charts/*` 页面为 JS 渲染，HTML 内无数据。
4. **`filter=comingsoon` 与 `sort_by=Released_ASC` 不可靠**：`search/results/?filter=comingsoon` 返回的 18,815 条里，首页显示的「发售日」全是 `Oct 29, 2026`（未开售条目仍显示当天日期），无法直接当定档表用 → 定档一律以 `appdetails.release_date` 为准。
5. **愿望单数字**：Steam 不公开精确值；本轮**没有一条候选拿到可信三方愿望单数**，全部写 `[待确认]`，只有「是否进 Next Fest Top20 / Scream Fest Top10」这类**榜单位置证据**（三方）。分析员复核时不得把榜单位置换算成愿望单数。
6. **发售日冲突（3 处，均已在池内标注）**：
   - `DUSTBLOOM`：Steam 2026-11-24 vs 媒体 11-10 → 按 Steam。
   - `Abandoned Below`：Steam 2026-12-01 vs 媒体 11-30 → 按 Steam。
   - `8 Hours Till Dawn`：媒体 10-27 vs Steam `Coming soon` 无日期 → **不入池**，等 Steam 出日期。
7. **评测数是动态值**：一手快照时间为 **2026-10-30（CST）**；分析员复核时应重新取数并注明时间。10-29 上架的游戏 D+1 评测普遍个位数，**样本不足不能当需求证据**。
8. **Reddit 源连续三轮缺失**：定向查询无返回，本轮未用社区讨论量作证据。

---

## 六、交接给候选分析员

- 本轮入池 **17 个**：`CANDIDATE-POOL.md` #124–#140，结论一律 `待分析`；四维分、总分、Wiki 列留 `—`。
- 本轮**未评分、未做 6 条 SERP wiki 查询、未采词**；分析员需按 `docs/STRATEGY-选词与评分.md` 补全。
- 按「一手评测样本」排序（**只排验证顺序，不是建站建议**）：
  1. **Zombie Assault: Resurgence**（#130）：163 条 68%，系列作品，先查既有 Fandom/系列 wiki 竞争。
  2. **Vampy's Big Day**（#132）/ **Hubble Bubble**（#133）：134 条 93% / 120 条 94%，口碑好但体量小，先判「攻略型需求」。
  3. **Fantasy World Manager**（#129）：61 条 80% + Workshop，系统面宽，值得先查可写来源。
  4. **Hoosegow**（#131）：11 条 72%，样本过小，等 D+7。
  5. **#124–#128、#134**：0–3 条评测，**建议先观察首发评测再采词**（10-29 上架当天数据无意义）。
  6. **#135–#140**：未发售，预售期风险见 10-26 轮教训（机制型词零搜索量）；按发售日远近排：#135（11-05）→ #136（11-16）→ #137（11-19）→ #138（11-24）→ #139（12-01）→ #140（12-03）。
- 采词消歧建议（分析员/研究员用）：
  - `Terrible Lizards` 撞通用词组（恐龙/宠物），必须 `Terrible Lizards game`。
  - `Curse of Resthaven`、`The Zibbo Show`、`Phantasma Hotel` 是多词品牌，需 `game` 锚定；`Zibbo` 疑似自造词，可单独试。
  - `Dead Party` 极通用（party/dead 组合），必须 `Dead Party game` 或加发行方 `Snail Games`。
  - `Fantasy World Manager` 是通用品类词组，裸词必撞经营类通用词，MUST 用 `Fantasy World Manager game`。
  - `Zombie Assault Resurgence` 需与系列旧作（SAS 1–4 / Zombie Assault）区分，试 `Zombie Assault Resurgence`、`SAS Resurgence`。
  - `Hoosegow` 是生僻词，试 `Hoosegow game`、`Hoosegow prison`；`Vampy` 易与 vampire 类撞词，用 `Vampy's Big Day`。
  - `Hubble Bubble` 撞童谣/通用词，必须 `Hubble Bubble game`。
  - `Rat Game` 是最坏情况：`rat game` 完全是通用短语，必须 `Rat Game Sokpop` 或等商店页加副标题。
  - `Wildsite` / `Orcthal` / `DUSTBLOOM` / `Nothing Unusual` / `World Craft Dream Island` 均为新造词或多词，`Nothing Unusual` 是通用短语（必须加 `game`）。
