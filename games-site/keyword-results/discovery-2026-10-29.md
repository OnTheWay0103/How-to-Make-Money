# 发现轮报告 — 2026-10-29

> 执行：游戏侦察员（`docs/agents/11` / `12`）
> 下游：候选分析员（`22` / `23`）
> 任务编号：DISCOVERY-10/29
> 本报告只做「多源发现 + 硬筛 + 证据」，**不含四维评分、不含 wiki 竞争检查、不含采词、不含建站建议**。

## 0. 本轮口径

- 按派单要求，本轮跑 **4 类主源 + 1 个补充源**：Steam 愿望单榜 / SteamDB 趋势 / Steam 新发售（10-26 ~ 10-29）/ 即将发售 + Next Fest；Reddit 作佐证源。
- 硬筛（MUST）：跳过 AAA、纯竞技、超休闲、视觉小说、已停服、上线超过 6 个月且无重大更新。
- 优先级：**已发售 ≤30 天** 或 **已定档且 8 周内发售（≤ 2026-12-24）**。
- 侦察员只填候选池的 `# / 游戏 / 类型 / 上线日 / 发现日 / 证据`，结论一律 `待分析`；四维分、总分、Wiki 列留 `—`。
- 评测数、愿望单数一律标来源；查不到写 `[待确认]`，**不估算、不编造**。

### 证据可信度分级（与 10-28 轮一致）

| 级别 | 含义 |
|---|---|
| **一手** | 本轮直接打开 Steam 商店页 / 调 `store.steampowered.com/api/appdetails` 读到的字段（发售日 / 评测数 / 好评率 / 类型标签 / 价格） |
| **三方** | 媒体、榜单站、SteamDB 快照、第三方愿望单模型；标注站点名与日期 |
| **待确认** | 多源冲突或只有单一弱来源，未写成确定值 |

### 本轮与上轮的关键差异（可达性）

上轮 12 个店页只取到 8 个（`store.steampowered.com` 时通时断）。本轮改用 Profile 记载的 `--resolve` 手法直连：

```
dig +short @1.1.1.1 store.steampowered.com   # → 104.83.198.104
curl -s -k -L --resolve store.steampowered.com:443:104.83.198.104 \
  'https://store.steampowered.com/app/<appid>/?cc=us&l=english'
```

结果 **17/17 候选店页全部取到一手发售日与评测数**。同时 `api.steampowered.com/ISteamNews`（官方公告）与 `store.steampowered.com/api/appdetails` 也可用；`appreviews` 接口被重定向到登录页/中国 CDN，**不可用**（详见第五节）。

---

## 一、搜索日志（5 个来源，S1–S5）

### S1 — Steam 愿望单榜 / 高愿望单新作

| 项 | 内容 |
|---|---|
| 查询 | `Steam top wishlisted upcoming games November 2026 indie` |
| 入口 1 | GameGrin《Steam Scream Fest V — Top 10 Upcoming Games by Wishlists》 https://www.gamegrin.com/news/steam-scream-fest-v-top-10-upcoming-games-by-wishlists/ |
| 入口 2 | IndieBunny Most Wishlisted（Steam Popular Upcoming 顺序） https://indiebunny.com/most-wishlisted |
| 入口 3 | lan-gaming《2026年10・11月 Steam 発売予定 注目度 tier リスト》（数据截至 2026-10-19） https://www.lan-gaming.net/steam-tier-2026-oct-nov/ |
| 命中（新） | **Trees Hate You**（约 #160–219）、**Demon Bluff**（约 #184 / Top 250）、**Warhammer Survivors**（#74）、**Cozy Game Restoration**（#98，已在池 #46）、**DREADMOOR**（#62，已在池 #43）、**Loftia**（已在池 #44）、**Brotato: Primal Dread**（#171）、**Fool King**、**Annihilated**（10 万+，已在池 #80）、**Figure Me Out** |
| 去重 | Cozy Game Restoration / DREADMOOR / Loftia / Annihilated 已在池，未重复收录 |

### S2 — SteamDB 趋势 / 周销 / 峰值 CCU

| 项 | 内容 |
|---|---|
| 查询 | `SteamDB trending games most played new releases week October 2026` |
| 入口 | IGN 法语（Phantom Blade Zero 首发）、ruocco.it 周报、IT之家/搜狐 Steam 周销榜、gamebiz（10-29 日榜）、gamebiz/163（Next Fest 10 月榜） |
| 命中（已发售） | Phantom Blade Zero 峰值 434K–448K CCU（**AAA，淘汰**）、CoD MW4（**AAA**）、Aion 2（**AAA/MMO**）、Moon Sweepers（已在池 #76，本周全球榜前十、峰值 51,686）、**We Were Here Tomorrow 6,961**、Mycopunk（已在池 #65）、Final Fantasy Resonance（**大厂**）、**QuestAway 8,449**、Warrior Cats 4,936 |
| 结论 | SteamDB 直连本轮仍未尝试（上上轮实测 403 反爬），以上为搜索摘要 + 媒体转引，标**三方**；峰值 CCU 精确数字未逐项复核 |

### S3 — Steam 新发售（2026-10-26 ~ 10-29）

| 项 | 内容 |
|---|---|
| 查询 1 | `new Steam games released October 28 29 2026 indie co-op` |
| 查询 2 | `reddit r/gamingsuggestions new co-op horror roguelite game late October 2026 recommendation`（兼作 S5） |
| 查询 3 | `best new indie games released October 2026 Steam reviews co-op survival horror` |
| 命中（新） | **Coal Duty**（10-27 EA）、**Project Nekrios**（10-28）、**O2GETHER**（10-29）、**Everlast: Undying Tale**（10-28 EA）、**SHARDS**（10-26）、**The Next Stop**（无定档）、**The Crimson Hunt**（10-06）、**OZARK**（10-01）、**No Such Place**（10-13 EA）、**Dawn of Irkalla**（10-16 EA）、**THE DEAD WE KNEW**（10-22，免费） |
| 去重 | Invokyr（#68）、UnderMire（#62）、Annihilated（#80）、DREADMOOR（#43）、Probably Stolen（#77）、Moon Sweepers（#76）、ANOMALITH（#50）均已在池 |

### S4 — 即将发售 / Next Fest（2026-10 届）

| 项 | 内容 |
|---|---|
| 查询 | `Steam upcoming releases November 2026 most anticipated indie games` |
| 入口 1 | Steam 官方 Next Fest 页 https://store.steampowered.com/sale/nextfest |
| 入口 2 | GameGrin Scream Fest V 愿望单 Top10 |
| 入口 3 | gamespress 新闻稿（Slumber Realm / Gendo the Gatherer / Gear Up Einstein! / Midwest 90 / Card Witch） |
| 入口 4 | 18183（Emery Hearts 定档）、dvg（纸牌巫） |
| 命中（新） | **Slumber Realm**（11-04）、**Gear Up Einstein!**（11-06 EA）、**Midwest 90: Rapid City**（11-10 EA）、**Gendo The Gatherer**（11-12）、**FailRooms**（11-04）、**Demon Bluff**（11 月，无日）、**Witch the Showdown / 纸牌巫：魔女决战**（11-18 EA）、**Emery Hearts**（Steam 官方已延期到 **12-01**，媒体仍写 11-11）、**Kick**（11-03）、**Abelina**（Q1 2027，窗口外）、**Crymelight**（11-04，细节未核实） |
| 淘汰 | **ArcheAge Chronicles**、**Sonic Pico Park**、**Football Manager 27**、**Ashes of the Singularity II**、**Escape Academy 2**、**Nocturnal 2**、**Warhammer Survivors** 见第三节 |

### S5 — Reddit 补充源（再次失败，如实记录）

| 项 | 内容 |
|---|---|
| 查询 | `reddit r/gamingsuggestions new co-op horror roguelite game late October 2026 recommendation` |
| 结果 | **未返回任何 reddit.com 链接**，返回的是商店页/新闻稿/聚合器；与 10-28 轮 `site:reddit.com` 无返回一致 |
| 处理 | 按 Profile 如实记录该维度缺失，**未用 Reddit 讨论量补证据**；S1–S4 四源达标，不影响本轮成立 |

---

## 二、通过硬筛（本轮入池候选，17 个：`#107`–`#123`）

> 全部 17 个的**发售日、评测数、好评率、价格、标签均为 2026-10-29 一手读取**；愿望单数一律三方。

| 池号 | 游戏 | 类型 | 上线日（一手） | 评测（一手） | 证据 | 疑点（交分析员） |
|---|---|---|---|---|---|---|
| #107 | **Coal Duty**（煤责） | 1–5 人 Co-op 提取恐怖喜剧 / 程序化煤矿（Corecrew Games / indie.io） | 2026-10-27 EA | **41 条 100%** | [4272370](https://store.steampowered.com/app/4272370/) | 样本 <300；近距语音是核心机制 |
| #108 | **O2GETHER** | 1–4 人 Co-op 零重力太空生存 / 共用氧气罐（iterco） | 2026-10-29 | **0 条** | [5041060](https://store.steampowered.com/app/5041060/) | 发售 0 天；$6 小体量；工作室首作 |
| #109 | **Project Nekrios** | 1–4 人 Co-op 科幻恐怖波次生存 / 空间站建造（De La Guardia Games） | 2026-10-28 | **0 条** | [5408070](https://store.steampowered.com/app/5408070/) | 0 评测；波次生存攻略面偏浅；含 AI 生成内容披露 |
| #110 | **SHARDS** | 2–4 人「只能语音」非对称 Co-op 恐怖解谜 Roguelite（LUMICROFT） | 2026-10-26 | **0 条** | [4871080](https://store.steampowered.com/app/4871080/) | 0 评测；自造语言谜题**无稳定答案来源**，可写性存疑 |
| #111 | **Everlast: Undying Tale** | MMO-lite Co-op ARPG（可达 100 人公共服；InSpades） | 2026-10-28 EA | **36 条 86%** | [3818450](https://store.steampowered.com/app/3818450/) | 样本小；16 技能至 99 级，内容面很宽 |
| #112 | **We Were Here Tomorrow** | 2 人 Co-op 非对称解谜冒险（Total Mayhem Games，系列第 5 作） | 2026-10-20 | **1,125 条 44%** | [2315050](https://store.steampowered.com/app/2315050/) | **唯一 ≥300 样本，但 44% 是负面口碑**；系列有 4 部前作 |
| #113 | **No Such Place**（查无此地） | 俯视角 PvE 提取射击 / 1–4 人 Co-op（Criti Team、ChillyRoom） | 2026-10-13 EA | **617 条 62%** | [3299050](https://store.steampowered.com/app/3299050/) | 62% 中等偏低；首发 bug 多 |
| #114 | **The Crimson Hunt** | Co-op 生存恐怖 / 吸血鬼猎人（Farelas；分屏 + Remote Play） | 2026-10-06 | **96 条 73%** | [4485020](https://store.steampowered.com/app/4485020/) | 流程 2.5–3.5h，内容面窄；无在线 Co-op；含 AI 素材披露 |
| #115 | **Slumber Realm** | 骰子 Roguelike 卡牌构筑（Chugga Chugga LLC，前 Monster Train/Inkbound 成员） | 2026-11-04 | **0 条（未发售）** | [3325390](https://store.steampowered.com/app/3325390/) | 未发售；150+ 卡 / 4 Aspect 可混搭，攻略面明确，但品牌新 |
| #116 | **Gear Up Einstein!**（备战吧，爱因斯坦！） | 1–3 人 Co-op Roguelite 自走棋（No Deadlines） | 2026-11-06 EA | **0 条（未发售）** | [2950410](https://store.steampowered.com/app/2950410/) | 27 角色 / 100+ 道具；TFT/SAP/Backpack Battles 同赛道密集 |
| #117 | **Midwest 90: Rapid City** | 后末日餐厅经营 + 塔防式怪物狩猎（Hidden Chest Studios / Rising Tide） | 2026-11-10 EA | **0 条（未发售）** | [1818480](https://store.steampowered.com/app/1818480/) | 双循环内容宽；RPS 有预览；12 天后发售 |
| #118 | **Gendo The Gatherer** | 江户风 Cozy 采集 / 茶屋烹饪经营（UnintentionalLogic，两人首作） | 2026-11-12 | **0 条（未发售）** | [3680120](https://store.steampowered.com/app/3680120/) | 无战斗、系统浅，攻略型需求可能偏低 |
| #119 | **Trees Hate You** | 喜剧向徒步「生存」恶搞（Tykenn） | 2026-11-16 | **0 条（未发售）** | [4171850](https://store.steampowered.com/app/4171850/) | wishlist 约 **207,300**（三方）；标签含 Walking Simulator，**攻略面可能极窄** |
| #120 | **Demon Bluff** | 单人社交推理 Roguelike 卡牌构筑（UmiArt / offbrand games） | **November 2026（无具体日）** | **0 条（未发售）** | [3522600](https://store.steampowered.com/app/3522600/) | wishlist 约 **230,000**（三方）；**无定档**，只能等日期 |
| #121 | **FailRooms** | 后室系 liminal 恐怖恶搞（Leonn Camayo / Andes Interactive） | 2026-11-04 | **0 条（未发售）** | [5217440](https://store.steampowered.com/app/5217440/) | wishlist 约 **15,000**（三方）；Walking Simulator 标签，攻略面窄；Backrooms 同名重 |
| #122 | **Witch the Showdown**（纸牌巫：魔女决战） | 弹反 × 卡组构筑 × Boss Rush（CitalesGames / Perp Games） | 2026-11-18 EA（媒体写 11-19） | **0 条（未发售）** | [3103620](https://store.steampowered.com/app/3103620/) | 与 GTA6 同日抢量；Boss-only 结构 |
| #123 | **Emery Hearts** | 体素风动作 JRPG（Haishō Interactive / Shinyuden） | **2026-12-01**（Steam 官方公告；已两次延期） | **0 条（未发售）** | [2732480](https://store.steampowered.com/app/2732480/) | 延期两次（9-02 → 11-05 → 12-01），**发售日风险高**；英文单语 |

### 2.1 为什么这 17 个能过筛

- 全部为独立/中小体量，**无 AAA、无纯竞技（PvP 主玩法）、无已停服、无视觉小说**。
- 8 个**已发售 ≤30 天**（#107–#114），其中 3 个评测 ≥300（#112 1,125 / #113 617 / #114 96 未达 300）；其余 5 个样本 <100，已在疑点列标注。
- 9 个**未发售但已定档**（#115–#119、#121–#123 有具体日期，#120 仅到月），全部落在 8 周窗口内（≤ 2026-12-24）。
- 每个候选都有可点开的 Steam 商店页；**17/17 一手复核**，无一条靠搜索摘要编造发售日。

### 2.2 评测样本分布（本轮最重要的发现）

| 口径 | 数量 | 游戏 |
|---|---|---|
| ≥300 条 | 3 | We Were Here Tomorrow 1,125 / No Such Place 617 / （#114 96 未达） |
| 30–100 条 | 3 | The Crimson Hunt 96 / Coal Duty 41 / Everlast 36 |
| 0 条 | 11 | 未发售 9 + 刚发售 2（O2GETHER、Project Nekrios）+ 0 评测 1（SHARDS） |

**结论（只作事实陈述，不打分）**：本轮「已发售 ≤30 天且评测 ≥300」的候选只有 **2 个**（#112 44%、#113 62%），且两者口碑都不高。高热度新品集中在本轮之后 8 周（#115–#123），**当前是预售期发现的窗口，不是成熟数据窗口**——这一点留给分析员判断。

---

## 三、未通过硬筛 / 未入池（记录理由，保留轨迹）

### 3.1 按硬筛规则淘汰

| 游戏 | 上线/窗口 | 淘汰理由 | 证据 |
|---|---|---|---|
| **Phantom Blade Zero** | 2026-10-29 | **AAA 动作 RPG**，峰值 434K–448K CCU、首发 5,000+ 评测 | IGN FR / egw.news（三方） |
| **Call of Duty: Modern Warfare 4** | 2026-10-23 | **AAA** | Steam 周销榜（三方） |
| **Aion 2 / Final Fantasy Resonance / ArcheAge Chronicles** | 2026-10 | **AAA / 大厂 MMO** | SteamDB 周销、AUTOMATON（三方） |
| **Warhammer Survivors** | 2026-11-10 | **授权 IP + Survivors 品类**，IP wiki 生态已存在 | lan-gaming tier（三方） |
| **Brotato: Primal Dread** | 2026 | **已有作品的续作/DLC 线**，前作 wiki 生态覆盖 | lan-gaming tier（三方） |
| **Escape Academy 2 / Nocturnal 2 / Ashes of the Singularity II / Football Manager 27 / Sonic Pico Park** | 2026-11 | **系列续作 / 大 IP / RTS 垂直**，已有 wiki 或非攻略型需求 | lan-gaming tier（三方） |
| **Kick**（11-03 cozy 足球横版） | 2026-11-03 | **无战斗 cozy 横版**，单人小体量，攻略面过窄（按「内容扩展」预判，交分析员复核） | gamespress（三方） |
| **Abelina** | Q1 2027 正式版 | **窗口外**（demo 11 月，正式版 2027Q1） | finalboss.io（三方） |
| **Dawn of Irkalla** | 2026-10-16 EA | **约 50 份销量 / 1 条评测**，需求侧近零 | crimeNet/steamcozy 聚合（三方） |
| **THE DEAD WE KNEW: Open World Survival** | 2026-10-22（免费） | **口碑崩盘**（约 9% 好评 / 186 条，三方）；免费 + 负评 | weloveit.io（三方） |
| **Invokyr / UnderMire / Annihilated / DREADMOOR / Cozy Game Restoration / Loftia / HANDS OVER / Probably Stolen / Moon Sweepers / ANOMALITH** | — | **已在候选池**（#68 / #62 / #80 / #43 / #46 / #44 / #79 / #77 / #76 / #50），未重复收录 | `CANDIDATE-POOL.md` |

### 3.2 硬筛通过但本轮**未入池**（窗口/日期问题，非淘汰）

| 游戏 | 情况 | 理由 | 证据 |
|---|---|---|---|
| **Fool King** | Steam 页写 **2027-03-02**（EA）；媒体普遍写 2026-11-16 | **一手 vs 三方冲突且相差 3.5 个月**；按 Profile「上线日期用 Steam 商店页为准」，Steam 日期超出 8 周窗口 → 本轮不收，等日期明确 | https://store.steampowered.com/app/4380860/ （appdetails 一手） |
| **The Next Stop** | Steam 仅 `Coming soon`，无日期 | **无定档**；1–4 人 Co-op 恐怖 FPS Roguelite，EA 计划 3–6 个月 → 等定档 | https://store.steampowered.com/app/5175610/ （一手：无评测） |
| **Gone Feral** | 仅单人 playtest 至 2026-10-31，Co-op playtest TBA | **无发售日**；先记背景 | mxdwn games（三方） |
| **OZARK** | 2026-10-01 | **31 条 58%**，3–6h 流程，样本与口碑双弱 → 不入池 | https://store.steampowered.com/app/1130380/ （一手） |
| **Crymelight / John Gleep / Toy Asylum / Theos: Cities of Myth / Hope in the City / HoloCozy / Figure Me Out** | 2026-11 ~ 12 | 只出现在榜单标题里，**类型/体量/评测均未核实**，本轮不占池位，等下一轮核实 | Next Fest 官方页、lan-gaming（三方） |
| **Witchbrook** | 2026（无定档） | 与 10-28 轮同样处理：愿望单高但发售窗口不明 | GameGrin（三方） |

---

## 四、候选逐条证据（只列本轮新增，17 条）

### #107 Coal Duty（煤责）
- **类型**：1–5 人 Co-op 提取恐怖喜剧；程序化煤矿，边挖煤凑国家配额边找逃生路线。
- **开发/发行**：Corecrew Games（伊斯坦布尔 5 人组）/ indie.io。
- **上线**：2026-10-27（Early Access，一手）。
- **评测**：**41 条 100% 好评**（一手，2026-10-29）。
- **价格**：$7.19（-20%，至 11-11）。
- **其余（一手）**：近距语音聊天为核心机制（怪物也靠声音找人）；枢纽含兵营/工坊/酒馆/走私者；首结局约 5h；EA 计划 12–18 个月。
- **三方**：约 20,000 愿望单；峰值 CCU 约 169–220。
- **证据**：https://store.steampowered.com/app/4272370/

### #108 O2GETHER
- **类型**：1–4 人 Co-op 零重力太空生存；全队共用一只氧气罐，用身体推着走。
- **开发/发行**：iterco（雅加达工作室首作，Unity）。
- **上线**：2026-10-29（一手，当日发售）。
- **评测**：**0 条**（一手）。
- **价格**：$6.03。
- **内容（一手 + 三方）**：6DOF 移动、8 个 hazard 主题 biome + 随机布局、Quarantine Zones、Endless 模式；demo 2026-10-15 起、Next Fest 10-19~26 参展。
- **证据**：https://store.steampowered.com/app/5041060/

### #109 Project Nekrios
- **类型**：1–4 人 Co-op 科幻恐怖波次生存 + 空间站扩建。
- **开发/发行**：De La Guardia Games（自研自发）。
- **上线**：2026-10-28（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$7.99。
- **内容（一手，来自商店页描述）**：5 把武器（Laser Pistol / Stinger SMG / Pulse Rifle / Scatter Gun / Mauler LMG）+ 近战；3 类敌人（Crawlers / Husks / The Stalker）+ swarm 轮次；6 类房间（发电机 / 军械库 / 医疗 / 生物实验 / 量子实验室 / 异星熔炉）；Vitals Augmenter 升级；Quantum Lab 通往 The Nexus。
- **合规提示**：商店页含 **AI 生成内容披露**（程序化材质/特效/音效合成，经开发者复核）。
- **证据**：https://store.steampowered.com/app/5408070/

### #110 SHARDS
- **类型**：2–4 人（最宜双人）**只能语音**、分屏、非对称 Co-op 恐怖解谜 Roguelite。
- **开发/发行**：LUMICROFT。
- **上线**：2026-10-26（一手）。
- **评测**：**0 条**（一手）。
- **价格**：$8.99。
- **内容（三方）**：两名玩家各自看不到对方画面，用「自造语言」指代无名符号沟通。
- **疑点**：谜题答案类内容**没有可核验来源**，与「内容可写性分级规则」冲突，交分析员判。
- **证据**：https://store.steampowered.com/app/4871080/

### #111 Everlast: Undying Tale
- **类型**：MMO-lite 开放世界 Co-op ARPG（RuneScape 致敬向）；单机 / 私人世界 / 最高 100 人公共服。
- **开发/发行**：InSpades（首作，自研自发）。
- **上线**：2026-10-28（Early Access，一手）。
- **评测**：**36 条 86% 好评**（一手，2026-10-29）。
- **价格**：$19.99（首发 -20%）。
- **内容（一手 appdetails + 三方）**：16 项技能（每项可练到 99）、实时动作战斗、采集/制造/钓鱼、Desolate Zones 全服重建改写世界；EA 约 1 年；**英文单语**。
- **三方**：愿望单破 100K（发行方口径）。
- **证据**：https://store.steampowered.com/app/3818450/

### #112 We Were Here Tomorrow
- **类型**：2 人（必须麦克风）非对称 Co-op 解谜冒险；系列第 5 作。
- **开发/发行**：Total Mayhem Games。
- **上线**：2026-10-20（一手）。
- **评测**：**1,125 条 44% 好评**（一手，2026-10-29）——**本轮唯一 ≥300 但负面**。OpenCritic 67 / 57% 推荐（三方）。
- **价格**：$10.98（-10%，至 11-03；原价 $19.99）。
- **内容（三方）**：南极 Norček Industries 复古未来场景；两人各持不同工具（抓钩 vs 立方/平台建造）；时间/重力/空间三类谜题；约 15h、37 成就；剧情作者 Claire North。
- **证据**：https://store.steampowered.com/app/2315050/

### #113 No Such Place（查无此地）
- **类型**：俯视角 PvE 提取射击，单人 / 1–4 人在线 Co-op。
- **开发/发行**：Criti Team、ChillyRoom / ChillyRoom、LoongGate。
- **上线**：2026-10-13（Early Access，一手；press release 写 10-14 UTC，时区差）。
- **评测**：**617 条 62% 好评**（一手，2026-10-29）。
- **价格**：$17.99。
- **内容（三方）**：EA 首发约 10 个程序化「异常区」（含 88 Whitegate Avenue 的 The Edifice）；风险/收益式 raids，死亡掉装备；复古枪械改造；Safehouse 升级。
- **证据**：https://store.steampowered.com/app/3299050/

### #114 The Crimson Hunt
- **类型**：Co-op 生存恐怖（经典生化风）；分屏 Co-op + Remote Play Together。
- **开发/发行**：Farelas（自研自发）。
- **上线**：2026-10-06（一手）。
- **评测**：**96 条 73% 好评**（一手，2026-10-29）。
- **价格**：$11.99（首发 -20%）。
- **内容（三方）**：双主角 Victoria（猎人）/ Eleanor（被掳者）双线；手枪/步枪/弩 3 类武器；环境与机械解谜；弹药与药品稀缺管理；流程 2.5–3.5h；11 语言。
- **合规提示**：含 AI 生成素材披露；含绑架/血腥/肢解描述。
- **证据**：https://store.steampowered.com/app/4485020/

### #115 Slumber Realm
- **类型**：骰子 Roguelike 卡牌构筑；把卡装进背包，掷 d6，落在区间的卡按序触发。
- **开发/发行**：Chugga Chugga LLC（单人开发 Brian Cronin，前 Monster Train / Inkbound / Natural Selection 2）。
- **上线**：2026-11-04（一手）。
- **评测**：0 条（未发售，一手）。
- **内容（三方，发行方口径）**：150+ 装备卡、40+ 记忆、35+ 零食、4 个 Aspect 可混搭、35 成就；单次约 30 分钟；主题为童年「Knightmares」（午餐阿姨 / 地质作业 / 狼人教练 / 闹钟 / 西兰花）。
- **证据**：https://store.steampowered.com/app/3325390/

### #116 Gear Up Einstein!（备战吧，爱因斯坦！）
- **类型**：1–3 人（单人 + 本地/在线 Co-op）Roguelite 自走棋。
- **开发/发行**：No Deadlines（蒙特利尔 3 人组，自研自发）。
- **上线**：2026-11-06（Early Access，一手）。
- **评测**：0 条（未发售，一手）。
- **内容（三方，发行方口径）**：EA 首发 29 可玩角色、100+ 道具、13 gadget、35 敌人、48 阵容 perk、5 难度；Divergence 系统跨时代洗牌 modifier/敌人/装备；按时代推进（古埃及 → 意大利文艺复兴 → 纽约）；Steam + itch.io 跨平台；16 语言。
- **证据**：https://store.steampowered.com/app/2950410/

### #117 Midwest 90: Rapid City
- **类型**：后末日餐厅经营（菜单/员工/科研/升级）+ 塔防式夜袭怪物狩猎；「捕获→取料→烹饪」。
- **开发/发行**：Hidden Chest Studios / Rising Tide Publishing。
- **上线**：2026-11-10（Early Access，一手）。
- **评测**：0 条（未发售，一手）。
- **内容（三方）**：EA 含 Endless 模式 + Prologue + Chapter 1；12-31 内容更新（自定义场景/新怪）、01-28 免费 Chapter 2、2027-03 1.0（分支结局）；设定为 2034 年南达科他 Rapid City、90 年代观感（致敬早期 Fallout）。
- **旁证**：入选 Unity G-STAR 2026 独立游戏展示（釜山 11-19~22）；RPS 有 hands-on 预览。
- **证据**：https://store.steampowered.com/app/1818480/

### #118 Gendo The Gatherer
- **类型**：江户风 Cozy 采集 + 茶屋烹饪经营。
- **开发/发行**：UnintentionalLogic（电气工程学生 + 建筑学生两人组，首作）。
- **上线**：2026-11-12（一手）。
- **评测**：0 条（未发售，一手）。
- **内容（三方，发行方口径）**：采集 → 切/蒸烹饪 → 茶屋上菜循环；房屋/家具自定义；任务线；矿工小游戏；商人；「摸浣熊」。
- **证据**：https://store.steampowered.com/app/3680120/

### #119 Trees Hate You
- **类型**：喜剧向徒步「生存」恶搞——回家路上每棵树都在整你。
- **开发/发行**：Tykenn（自研自发）。
- **上线**：2026-11-16（一手；部分区域页写 11-17）。
- **评测**：0 条（未发售，一手）。
- **三方**：愿望单约 **207,300**（2026-10 中），全站约 #215–219；预计首周约 41.5K 份。
- **内容（三方）**：多 biome、可收集帽子、死亡计数、22 语言本地化；标签 Comedy / Dark Humor / Memes / Parody / Walking Simulator / Surreal / Difficult。
- **冲突**：Play-Asia 写「action roguelite」，与官方 Steam 描述不符 → `[待确认]`。
- **证据**：https://store.steampowered.com/app/4171850/

### #120 Demon Bluff
- **类型**：单人「卡牌会说谎」社交推理 Roguelike 卡牌构筑。
- **开发/发行**：UmiArt / offbrand games（Aethermancer、Rivals of Aether II 发行方），Northernlion 参与设计、Ludwig 出资。
- **上线**：**November 2026（Steam 页只到月，一手）**——无具体日。
- **评测**：0 条（未发售，一手）。
- **三方**：愿望单约 230,000（2026-10，全站约 Top 250）；playtest 约 30 万人、均时长近 6h；Discord 8,800+。
- **内容（三方）**：100+ 角色卡（Villagers / Outcasts / Minions / Demons 四类）；Roguelike 构筑 / 手动牌组 / 无限 / 挑战 四模式；13 语言。
- **证据**：https://store.steampowered.com/app/3522600/

### #121 FailRooms
- **类型**：后室系 liminal 恐怖恶搞，第一人称探索。
- **开发/发行**：Leonn Camayo、Andes Interactive / Andes Interactive。
- **上线**：2026-11-04（一手；中文店页同一日期，Gamersky 写 11-05）。
- **评测**：0 条（未发售，一手）。
- **三方**：愿望单约 **15,000**（Steammaho 估算，2026-10-22），全站约 #2,673；demo 已出；Markiplier 引用背书。
- **内容（三方）**：无尽走廊、通向天花板的楼梯、干涸泳池、假门、「远离橡皮鸭」；标签 Psychological Horror / Exploration / Walking Simulator / Surreal / Comedy / Satire；11 语言。
- **证据**：https://store.steampowered.com/app/5217440/

### #122 Witch the Showdown（纸牌巫：魔女决战）
- **类型**：弹反 × 卡组构筑 × Boss Rush 的「魂系」动作；弹反蓄 Mana → 出牌反击。
- **开发/发行**：CitalesGames / Perp Games。
- **上线**：2026-11-18（Early Access，一手；中文媒体写 11-19，按 Steam 记 11-18）。
- **评测**：0 条（未发售，一手）。
- **内容（三方）**：5 档难度（新手 → Master）；Duel（固定牌组练弹反）与 Tournament（Roguelike 连战、点数解锁卡与永久被动）双模式；可选回合制模式；新角色「音音」；2027 正式版并计划 PS5/Xbox；简繁中文原生。
- **证据**：https://store.steampowered.com/app/3103620/

### #123 Emery Hearts
- **类型**：体素风动作 JRPG（Kingdom Hearts × Minecraft 观感）。
- **开发/发行**：Haishō Interactive / Haishō Interactive、Shinyuden。
- **上线**：**2026-12-01**（一手；Steam 官方公告《Important Update: New Release Date - December 1, 2026》，此前 9-02 → 11-05 → 12-01 延期两次；多家媒体仍写 11-11，已过时）。
- **评测**：0 条（未发售，一手）。
- **内容（三方）**：主角 Lug，能量晶体 + 「生命之线」；实时战斗（连段/闪避/魔法/道具）、武器与护符升级、Metroidvania 式区域解锁、解谜、多结局分支（救机器人 vs 保留有机生命）；demo 自 2025-11 起可玩；英文单语。
- **证据**：https://store.steampowered.com/app/2732480/

---

## 五、可达性与 `[待确认]` 说明

1. **Steam 一手可达性（本轮显著改善）**：`store.steampowered.com` 直连仍会被解析到 `95.101.194.54` 并 `ECONNREFUSED/ETIMEDOUT`（与上轮一致）；改用 `--resolve store.steampowered.com:443:104.83.198.104` 后**全部 17 个候选店页 + appdetails 接口均 HTTP 200**。WebFetch 工具直连 Steam 仍失败（`ECONNREFUSED 95.101.194.54:443`），故本轮一律走 Bash + curl。
   - 个别店页首次请求返回 `HTTP=000 SIZE=0`，重试 1–2 次后成功（Everlast 重试 3 次）；**没有任何一条候选是用「空 body」当通过**。
2. **`appreviews` 接口不可用**：`store.steampowered.com/appreviews/<appid>?json=1` 返回 302 并跳到 Steam 登录/中国 CDN 页（`store.cdn.queniuqe.com`），无法取结构化评测数 → 评测数改从**商店页 HTML 的 `data-tooltip-html`（"NN% of the N user reviews…"）**解析，属一手。
3. **SteamDB**：仍未直连（历史 403），峰值 CCU 与周销排名一律标三方。
4. **愿望单数字**：Steam 不公开精确值。#119 Trees Hate You（约 207,300）、#120 Demon Bluff（约 230,000）、#121 FailRooms（约 15,000）、#111 Everlast（100K+）、#107 Coal Duty（约 20,000）**全部为三方估算**，已逐条标来源与日期；分析员复核时不得直接当事实。
5. **评测数是动态值**：本轮一手快照时间为 **2026-10-29（CST）**；分析员复核时应重新取数并注明时间。
6. **发售日冲突（3 处，均已在池内标注）**：
   - `Witch the Showdown`：Steam 11-18 vs 中文媒体 11-19（时区/口径）→ 按 Steam。
   - `No Such Place`：Steam 10-13 vs press release 10-14 UTC → 按 Steam。
   - `Emery Hearts`：Steam 官方公告 12-01 vs 媒体 11-11（**媒体已过时，因两次延期**）→ 按 Steam 公告。
   - `Fool King`：Steam 2027-03-02 vs 媒体 2026-11-16 → **差距过大，本轮不收**，见 3.2。
   - `Trees Hate You`：Steam 11-16 vs 部分区域页 11-17 → 按英文店页。
7. **Reddit 源连续两轮缺失**：`reddit` 定向查询无返回，本轮未用社区讨论量作证据。

---

## 六、交接给候选分析员

- 本轮入池 **17 个**：`CANDIDATE-POOL.md` #107–#123，结论一律 `待分析`；四维分、总分、Wiki 列留 `—`。
- 本轮**未评分、未做 6 条 SERP wiki 查询、未采词**；分析员需按 `docs/STRATEGY-选词与评分.md` 补全。
- 按「已发售 + 一手评测样本」排序（**只排验证顺序，不是建站建议**）：
  1. **We Were Here Tomorrow**（#112）：1,125 条唯一大样本，但 **44% 是负口碑**，先判「生命周期」是否撑得住。
  2. **No Such Place**（#113）：617 条 62%，提取射击 + 4 人 co-op，页型可写（异常区 / 枪械改造 / Safehouse）。
  3. **Coal Duty**（#107）：41 条但 100%，提取恐怖喜剧，机制面（煤矿 / 配额 / 逃生路线 / 怪物）明确。
  4. **The Crimson Hunt**（#114）/ **Everlast**（#111）：96 条 73% / 36 条 86%，样本偏小，需等或按愿望单补证。
  5. **#108 / #109 / #110**：0 评测，只见于发售前三天，**建议先观察首发评测再采词**。
  6. **#115–#123**：未发售，**预售期风险见 10-26 轮教训**（机制型词零搜索量）；其中 #119/#120 愿望单三方数字最高，但也最可能是「发售日陷阱」。建议按发售日远近排：#115（11-04）→ #121（11-04）→ #116（11-06）→ #117（11-10）→ #118（11-12）→ #119（11-16）→ #122（11-18）→ #123（12-01）→ #120（无日期，最后）。
- 采词消歧建议（分析员/研究员用）：
  - `Coal Duty` 裸词会撞「coal / mining duty」通用词，需加 `game`。
  - `O2GETHER` 是数字混写，建议同时试 `O2GETHER game`、`O2 Gether`。
  - `Project Nekrios` 用全名；`SHARDS` 是极通用词，必须 `SHARDS game` / `SHARDS LUMICROFT`。
  - `We Were Here Tomorrow` 用全名（前作 We Were Here / Too / Together / Forever 会大量分流）。
  - `No Such Place` 极通用，必须 `No Such Place game` 或中文「查无此地」。
  - `Trees Hate You`、`FailRooms`、`Demon Bluff`、`Slumber Realm` 均为多词但偏叙事性，需 `game` 锚定。
  - `Witch the Showdown` 中文侧用「纸牌巫：魔女决战」可能命中的是不同写法（纸牌巫/魔纸牌巫），需两版都试。
  - `Emery Hearts` 与 `Gear Up Einstein` 建议加 `game`；后者中文名「备战吧，爱因斯坦！」可作本地化入口。
