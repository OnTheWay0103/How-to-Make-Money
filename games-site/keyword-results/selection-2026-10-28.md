# 候选分析 — 2026-10-28（R4：#77 + 新候选分诊 #94–#106）

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md`（四维 20 分 / 需求三道闸门 / 竞争 `P = T + 0.5t` / 品牌锚定率 / 成本口径）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/probablystolen.md`（#77）、`keyword-results/sonar.md`（#78）
> 一手数据：Steam AppDetails `appid=4348910`（2026-10-28 抓取）；SERP 走 WebSearch（2026-10-28，美区 `hl=en`，中/日文按原样跑）
> 未做：未建站、未写攻略、未改站点目录、未重采词、未改 `INDEX.md`、未 commit
> 动态字段（评测数/价格/CCU/Trends）抓不到一律 `[待确认]` + 抓取日，**未估算**

## 口径与判定规则（本轮统一执行）

1. **有效词自己复核**：逐条剔除撞名/通用义，不抄研究员的 75，写复核算出的数（75 → 独立意图 67，见 1.2）。
2. **攻略型词**（§2.2）：Codes / Tier List / Best-Ranking / Boss-Characters / Build-Class / Weapons-Gear / How-to / Guide-Beginner / Co-op-Multiplayer。Info/发售平台 + Other 不计。
3. **需求闸门**：有效词 <20 → 淘汰；攻略型 <30% → 需求**封顶 3**；单一来源 → 封顶 3；**≥60 词且攻略型 30–50%** 属已记录的口径缺口（§2.2 注），同时写「取 3 = X」与「取 4 = Y」。
4. **竞争只数 SERP 里出现的站**（6 条固定查询，按 WebSearch 返回顺序记，不足 10 条如实记录）。**只算「专门攻略站」= 独立域名 + 围绕该游戏 + 持续更新**；大站单篇 / 综合游戏站的单篇攻略 / Reddit / Steam 社区 / YouTube / 论坛 / 商店页 / 聚合页不计；Fandom/专属 wiki 按厚度计；**非英文站不计入 `P`**。
5. **内容扩展**只数「有可核验来源的具体实体」；搜索建议本身不证明实体存在。
6. **生命周期**依据顺序：Steam 发售日 → 官方更新公告 → SteamDB 在线曲线 → Google Trends 28 天。
7. **成本**：域名 0（`*.vercel.app`）、托管 0（Vercel Hobby）；token 与人工按台账实测回填，本轮**不预估**；回本口径是**组合回本**，RPM 取 $1–5/千次（第三方基准，2026-08 检索，非承诺）。

---

## 一、#77 Probably Stolen - Cyberpunk Shopkeeper Sim — **观察（16；区间 14–17）**

### 1.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **4348910** | [Steam AppDetails](https://store.steampowered.com/api/appdetails?appids=4348910)（2026-10-28 抓取） |
| 开发 / 发行 | Questing Goose Studio / tinyBuild | 同上（一手） |
| 类型 | 赛博朋克当铺经营模拟（Indie / RPG / Sim / Strategy；**单人**） | 同上 |
| 发售 | **2026-10-28（当日）**；抓取时 `coming_soon=true`，Steam 尚未解锁 | 同上 |
| 评测 / 好评 | **[待确认]**（API `recommendations` 为空；商店页 curl TIMEOUT，2026-10-28） | — |
| 价格 | **[待确认]**（`price_overview` 为空，美区/国区商店页均 TIMEOUT） | — |
| 语言 | 英/德/日/俄/简中/法/西/波（8 种，含简中+日文） | 同上 |
| demo 热度 | GamesRadar 称其为 Next Fest「**最大的单人 demo**」；具体评测数/好评率 **[待确认]**（搜索摘要提到 2,000+ 条 98%，**未在一手页面复现**）；入选 Next Fest 2026-10 最热 20（第三方榜单） | [GamesRadar](https://www.gamesradar.com/games/simulation/in-a-steam-next-fest-plagued-by-ai-slop-the-biggest-single-player-demo-is-a-game-about-fighting-rampant-ai-a-sim-where-youre-basically-a-merchant-in-cyberpunk-2077/)；上游侦察记录 |
| 词库 5 数字 | 原始 179 / 去重 141 / **有效词 75** / 噪声 46.8% / 品牌锚定率 53.2% / 攻略型 34.7% | `keyword-results/probablystolen.md` 头部 |

### 1.2 硬门槛（有效词复核 + 内容可写性 + Other 重归类）

**硬门槛通过**。经营模拟有明确系统（6 类开局、8 类商品线、鉴定/还价/伪造/许可/检查/房租/声望/派系/产线），且 Steam 官方页逐条列了机制——可写实体充足。

**有效词复核（不抄 75）**：75 条全部含 `probably stolen` 且指向本作，**没有一条是同名影视/通用短语误入**（`probably stolen` 裸词虽是英文常用短语，但在本语境就是品牌导航词）。逐条合并同义/前缀变体 8 组后为 **67 个独立检索意图**：

| 近重复组（合并后 −1） | 条数 |
|---|:--:|
| `game ps5` / `ps5 game` | 2→1 |
| `game reddit` / `reddit game` | 2→1 |
| `game wiki` / `wiki game` | 2→1 |
| `game guide` / `guide` | 2→1 |
| `game how to buy shop` / `how to buy shop` | 2→1 |
| `game water guide` / `water guide` | 2→1 |
| `how to rotate items` / `how to rotate` | 2→1 |
| `game release date` / `release date` | 2→1 |

→ **有效词 75（官方口径）/ 67（独立意图口径）**；分母取 75 时攻略型 **26/75 = 34.7%**，取 67 时 **22/67 = 32.8%**——两种口径都 ≥30%、<40%，分档结论相同。

**`Other` 22.7% 的归类判断（建矩阵前必须处理，本轮处理如下）**：

| 原 Other 词 | 重新归类 | 判断依据 |
|---|---|---|
| `augs`、`game food stamps`、`game radioactive waste`、`radioactive waste`、`game rats`、`game underground exchange`、`game water purifier` | **机制/物品**（+7） | 均为 Steam 官方「物品风险/产线/地下市场」段落里的实义词（Aug 是 AI 劫持者，放射性废料/老鼠/水净化器是商品线） |
| `game eleanor` | **角色/NPC**（+1） | 攻略站与日文 wiki 均有 Eleanor 角色页（[gamewikistation](https://gamewikistation.com/games/probably-stolen/ja/characters/eleanor/)） |
| `discord`、`game discord`、`game mods`、`nexus mods` | **社区/Mod**（+4） | 社区/工具意图，归 FAQ 下的「Mod 与联机」子类，不单列 gameplay |
| `probably stolen`（裸词）、`game`、`cyberpunk shopkeeper sim` | **导航/品牌**（+3） | 首页/关于页承接，不建独立攻略页 |
| `playtest`、`launch date` | **FAQ/信息**（+2） | 发售信息 |

→ 重归类后页型分布：**机制/物品 29、FAQ/信息 26、社区/Mod 4、新手 2、角色/NPC 2、导航 3、其余信息型 12**，**无 `gameplay`/`general` 空类，Other 不再是大类**。

**可写实体（每条有来源）**：

- **6+ 开局**：Gunsmith / Chemist / Water Merchant / Fence / Farmer /「absolute rock bottom」；攻略站另列 Organ Dealer、Rat Wrangler、Aquafarmer（[Steam 官方](https://store.steampowered.com/app/4348910/)、[gamebrief 9 开局](https://www.gamebrief.net/blog/probably-stolen-starting-scenarios-guide-2026)）
- **商品线 8+**：香烟、水、武器、化学品、稀有品/artifact、食物、器官、违禁品/赃物（Steam 官方「Every item you stock carries its own risks」段）
- **机制 12+**：鉴定/估值、还价、降质、贴假标、收购赃物、许可与检查、水检测与过滤、化学品配方、房租递增、声望、派系、地下市场许可、机器与产线、藏匿违禁品/贿赂、Augs 识别与击杀、治安热度、夜间垃圾场
- **NPC 6**：Joe Wild、Eleanor、Dr. Jackson、Colson、Giorgio、Odin Haraldsson（[probably-stolen.wiki 电话号码页](https://probably-stolen.wiki/guide/phone-numbers/)）
- **Perks ~25**（[volx.jp 一览](https://volx.jp/probably-stolen-expertise-perk-control/)）、**6 条官方路线**（[starting scenarios](https://probably-stolen.wiki/guide/starting-scenarios/)）
- **配方**：熔炉纯度（2 废金属 / 1+1 / 2 矿石）、完美锭、酿酒评分（doyo 中文攻略）

→ 可写 **24–30 页、5 类各 ≥5 条** → 内容扩展 **5**。

### 1.3 需求三道闸门

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **75**（独立意图 67） | 通过 |
| 攻略型占比（自数） | Guide 13 + How-to 11 + Boss/Characters 1 + Weapons/Gear 1 = **26 / 75 = 34.7%**（67 口径 32.8%） | ≥30%，**不触发发售日陷阱**；但 60+ 词且 30–50% 落**已记录口径缺口** → 需求取 **4**（按词量档）/ 严格读法取 **3** |
| 页型覆盖 | 机制/物品 29、FAQ 26、社区 4、新手 2、角色 2 | 够 3 类；但「≥3 类页型各 ≥5 攻略型词」不满足 → **需求上限 4**，到不了 5 |
| 第三方信号 | ① Next Fest 最热 20（第三方榜单）② GamesRadar「最大的单人 demo」③ 发售当日 ④ 一手评测数 `[待确认]` | ≥1 个，通过（**不是单源**：Suggest + 媒体/demo） |
| 品牌锚定率 | 脚本 53.2%（75/141）；人工复核 **75/75 指向本作 = 100%** | ≥50% 通过；但裸词是常用短语，标题 MUST 锚定 `Probably Stolen cyberpunk shopkeeper sim` |

> 需求 = **4**（60+ 词、攻略型 34.7%）；若按口径缺口严格读 3，总分 15，结论仍是「观察」。

### 1.4 六条固定竞争查询（2026-10-28，逐条记录）

**Q1 EN `"Probably Stolen" Cyberpunk Shopkeeper Sim wiki`（返回 10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | escapistmagazine.com/probably-stolen-cyberpunk-shop-simulator-steam-playtest/ | 大站新闻（不计） |
| 2 | gematsu.com/games/probably-stolen | 数据库（不计） |
| 3 | gematsu.com/2026/09/probably-stolen-launches-october-28 | 新闻（不计） |
| 4 | 4gamer.net/games/030/G103004/ | 日语数据库（不计） |
| 5 | gamesradar.com/.../biggest-single-player-demo... | 大站新闻（不计） |
| 6 | gry-online.pl/gry/probably-stolen/z774d8 | 数据库（不计） |
| 7 | s.ign.com/games/probably-stolen-cyberpunk-pawnshop-simulator | 数据库（不计） |
| 8 | gamesbeat.com/tinybuild-unveils-probably-stolen-... | 新闻（不计） |
| 9 | 4gamers.com.tw/news/detail/81142/... | 中文媒体（不计） |
| 10 | pushsquare.com/games/pc/probably-stolen-cyberpunk-shopkeeper-sim | 数据库（不计） |

> 前 10 **无 wiki**，全是媒体/数据库——但 Q2 暴露了真正的竞争。

**Q2 EN `"Probably Stolen" Cyberpunk Shopkeeper Sim guide tips`（返回 10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | patch.ali213.net/showpatch/318573.html | 中文 MOD（不计） |
| 2 | gamebrief.net/blog/probably-stolen-starting-scenarios-guide-2026 | 综合游戏博客单篇（不计） |
| 3 | tposegaming.com/probably-stolen-guide/ | 综合游戏站单篇；站点覆盖 RDR2/2077/Elden Ring；2026-09-15 发布、**10-21 更新**（不计） |
| 4 | **probably-stolen.wiki/guide/beginner-guide/** | **厚**（专属 wiki） |
| 5 | probably-stolen.wiki/zh-cn/guide/beginner-guide/ | 同站中文页（不重复计） |
| 6 | 4gamer.net/games/030/G103004/ | 数据库（不计） |
| 7 | gamaloplay.com/probably-stolen/ | 页游模拟器/聚合（不计） |
| 8 | **probablystolengame.wiki/** | **厚**（专属 wiki） |
| 9 | baijiahao.baidu.com/s?id=1878188385148154642 | 中文自媒体（不计） |
| 10 | thegamesedge.com/probably-stolen-trading-guide-water-merchant-tips/ | 综合游戏站单篇；`dateModified 2026-10-13`（不计） |

**Q3 EN `"Probably Stolen" game codes`（仅返回 5 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | xmodhub.com/info/pl/guides/probably-stolen-kody-komendy-konsoli/ | 修改器（意图错位，不计） |
| 2 | probably-stolen.wiki/ja/guide/phone-numbers/ | 厚站日语页，答的是电话号码不是兑换码（意图错位） |
| 3 | nexusmods.com/probablystolen/mods/top | 模组库（不计） |
| 4 | probably-stolen.wiki/fr/guide/ | 厚站法语索引（不重复计） |
| 5 | gameliner.nl/games/probably-stolen/9042-1 | 数据库（不计） |

> 结果 5 条且无兑换码页 → `codes` 意图**空白**（游戏无兑换码，只有 Nexus 控制台 mod）。按规则「SERP 不足 10 条」不改变 `P`。

**Q4 ZH `Probably Stolen Cyberpunk Shopkeeper Sim 攻略`（返回 10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | patch.ali213.net/showpatch/318573.html | 中文 MOD（不计） |
| 2 | m.doyo.cn/game/559689.html | 中文游戏站（攻略/配方，非英文不计 P） |
| 3 | probably-stolen.wiki/zh-cn/guide/beginner-guide/ | 英文域名的中文本地化页（附注） |
| 4 | gamebrief.net/... | 综合博客单篇（不计） |
| 5 | tposegaming.com/probably-stolen-guide/ | 综合站单篇（不计） |
| 6 | baijiahao.baidu.com/s?id=1878188385148154642 | 中文自媒体（不计） |
| 7 | probably-stolen.wiki/guide/beginner-guide/ | **厚**（同站英文页） |
| 8 | probablystolengame.wiki/ja/ | 厚站日语页 |
| 9 | probably-stolen.wiki/zh-cn/guide/ | 厚站中文索引 |
| 10 | probablystolengame.wiki/ | **厚**（同站英文页） |

**Q5 ZH `Probably Stolen 深空当铺 wiki 中文`（返回 10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | probably-stolen.wiki/zh-tw/guide/phone-numbers/ | 厚站繁中页 |
| 2 | bilibili.com/opus/1241189559398563904 | B 站专栏攻略（社区，不计） |
| 3 | probably-stolen.wiki/zh-tw/guide/beginner-guide/ | 同上 |
| 4 | m.doyo.cn/soft/1589.html | 中文下载站（不计） |
| 5 | probably-stolen.wiki/zh-cn/guide/appraisal/ | 厚站简中页 |
| 6 | dl.3dmgame.com/pc/152142.html | 中文下载站（不计） |
| 7 | m.doyo.cn/game/559689.html | 中文游戏站（不计 P） |
| 8 | patch.ali213.net/showpatch/318573.html | 中文 MOD（不计） |
| 9 | store.steampowered.com/app/4348910/...（简中） | 商店（不计） |
| 10 | yystv.net/g/10507 | 数据库（不计） |

> ⚠️ **中文没有「本地独立站」，但空位已被英文域名站点用 `/zh-cn/`、`/zh-tw/` 全量本地化占住** → 多语言机会**不成立**，内容扩展**不加 +1**。

**Q6 JA `Probably Stolen 攻略 wiki 日本語 ゲーム`（返回 10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | probably-stolen.wiki/ja/guide/beginner-guide/ | **厚**（同站日文页） |
| 2 | probably-stolen.wiki/ja/guide/appraisal/ | 同上 |
| 3 | volx.jp/probably-stolen-expertise-perk-control/ | 日语攻略专门（非英文，不计 P） |
| 4 | probablystolengame.wiki/ja/ | **厚**（同站日文页） |
| 5 | probably-stolen.wiki/ja/guide/ending/ | 同上 |
| 6 | 4gamer.net/games/030/G103004/ | 数据库（不计） |
| 7 | gamewikistation.com/games/probably-stolen/ja/characters/black-market/ | 日语专属 wiki 分区（非英文，不计 P） |
| 8 | gamewikistation.com/games/probably-stolen/ja/characters/eleanor/ | 同上 |
| 9 | gamewikistation.com/games/probably-stolen/ja/characters/mentor/ | 同上 |
| 10 | volx.jp/probably-stolen-control/ | 日语攻略（不计 P） |

> 日文生态已有 **3 家**（probably-stolen.wiki / probablystolengame.wiki / gamewikistation.com + volx.jp）→ 攻略生态成熟，但按「只算英文」不计入 `P`。

### 1.5 P 值计算

| 站 | 类型 | 判定依据 |
|---|---|---|
| **probably-stolen.wiki** | **厚 T=1** | 独立域名、围绕本作；11 个攻略页（新手/困难开局/物品/治安热度/技巧/6 开局/鉴定/地下交易所/水商/买断/电话）+ release/platforms 分区 ≥5 类；有 `zh-cn`/`zh-tw`/`ja`/`fr` 本地化；页面覆盖到 ending/买断，明显在发售前后持续更新（精确 lastmod `[待确认]`） |
| **probablystolengame.wiki** | **厚 T=1**（附注） | 独立域名；sitemap **316 URL / 4 语言 ≈ 79 个独立页**，8 大类（items/shop/guide/water/rats/release/platforms/community）；首页 Latest Updates 为 **2026-09-17**（距今天 41 天）→ 落「4–8 周」**未定义带**；按覆盖计厚，若严格按「4 周内更新」判薄则为 `t` |
| gamewikistation.com | 非英文（不计） | 日语专属分区，角色页多 |
| volx.jp | 非英文（不计） | 日语攻略 |
| gamebrief / tposegaming / thegamesedge | 非专门（不计） | 综合游戏站/博客的**单篇**文章，站点不围绕本作（tposegaming 覆盖 RDR2/2077/Elden Ring 等） |

**主口径**：`P = 1 + 1 = 2.0` → 落 **(2, 2.5]「2 家厚站」→ 竞争 2（难，需差异化）**。

> **敏感度（必须让主 Agent 看到）**：
> - PSG.wiki 判薄 → `P=1.5` → 竞争 **3** → 总分 **17（可建边界）**；
> - 若按上一轮（PAPERHEAD）把「独立域名单篇站」也计 0.5 → `P=3.5` → **`P≥3` 硬放弃**；
> - 若按表格区间 `(1,2]` 取 3 → 总分 17。
> 本轮取 **竞争 2**：依据是「2 家厚站」的文字档位，且两家合计 ~90 页、覆盖 4 语言——**实质竞争强度高于分数**。

### 1.6 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **4**（严格 3） | 有效词 75（独立意图 67）≥60，攻略型 34.7% ≥30% 未触陷阱；60+ 且 30–50% 属口径缺口，按词量档取 4（[词库](keyword-results/probablystolen.md)） |
| 竞争 | **2** | `P=2.0`：两家英文专属 wiki 已在发售前铺满——[probably-stolen.wiki](https://probably-stolen.wiki/) 11 页 5 类 + [probablystolengame.wiki](https://probablystolengame.wiki/) ~79 页 8 类，无 codes 竞争但机制/新手页重合 |
| 内容扩展 | **5** | 6+ 开局 / 8 类商品线 / 12+ 机制 / 6 NPC / ~25 perks / 配方，24–30 页 ≥5 类（[Steam 官方](https://store.steampowered.com/app/4348910/)、[perks 一览](https://volx.jp/probably-stolen-expertise-perk-control/)） |
| 生命周期 | **5** | 发售**当日**（≤8 周）、Next Fest 最热 20 且为「最大的单人 demo」（[GamesRadar](https://www.gamesradar.com/games/simulation/in-a-steam-next-fest-plagued-by-ai-slop-the-biggest-single-player-demo-is-a-game-about-fighting-rampant-ai-a-sim-where-youre-basically-a-merchant-in-cyberpunk-2077/)）；一手评测/Trends `[待确认]` |
| **总分** | **16** | **观察**（需求 3 → 15；竞争 3 → 17；两家厚 wiki 是主要下行风险） |

### 1.7 成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成 | `[待确认]` | token 实测回填（建站后记台账） |
| 人工 | `[待确认]` | 目标 ≤6 小时/站（台账「实际人工小时」） |
| **回本 PV** | `总成本 ÷ (RPM/1000)` | RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺） |

现金成本为 0 时「回本 PV」只由 token/人力折算决定，单看 PV 无意义；**组合口径**下 30 天 300 PV ≈ **$0.3–1.5**。本作属「有 2 家厚 wiki」的中高竞争位，回本要靠差异化深度页而非铺量。

### 1.8 结论与页面矩阵建议

**结论：观察（16），本轮不建议建站。** 理由：需求与内容都够（75 词、24–30 页可写、发售当日），但**发售前就已有两家英文专属攻略 wiki（11 页 / ~79 页、4 语言）**，新手/鉴定/水商/开局这些最肥的词已被覆盖；我们要抢只能做「它们没做深的利润模型与路线」。

**若主 Agent 决定建，页型分布（MECE，`codes`/`tier` 明确不建）**：

| 页型 | 首批 | 扩到 15–20 页 | 说明 |
|---|:--:|:--:|---|
| 核心机制 | 3 | 8 | 房租递增与买断经济、鉴定四步进阶、Augs 识别与击杀、治安/热度、地下交易所、派系声望、夜间垃圾场、产线机器 |
| 物品/配方 | 1 | 4 | 水/酒产线利润表、熔炉纯度与完美锭、武器改装与许可、食物券/违禁品 |
| 新手/开局 | 1 | 3 | 6 开局对比（做成「利润曲线」不是流程复述）、Rock Bottom/困难、25 perks 评级 |
| 角色/NPC | 0 | 3 | Joe Wild、Eleanor、Dr. Jackson |
| FAQ/信息 | 1 | 4 | 发售/价格/平台/Steam Deck/更新/单人确认/demo 继承 |
| **合计** | **6** | **22** | 首批 6 页 ≈ 8,000+ 词；`codes` 0 页（无兑换码，不硬造） |

> 差异化红线：不做「新手十天」和「鉴定是什么」的复述（两家 wiki 已有），只做**数值/利润/路线**；每页仍需 ≥2 独立来源且 ≥1 官方。

---

## 二、#78 S.O.N.A.R. - Submarine Operators Not Actually Ready — **登记：需求不足**

研究员已判 `需求不足（有效词 14 < 20）`，本轮不展开、不评分。按规则给复采条件：**发售 D+7 = 2026-11-05 复采**（锚定词 `S.O.N.A.R.` 短词撞名严重、别名补救无新增，复采时换全称 + 副标题再试）。见 `keyword-results/sonar.md`。

---

## 三、新候选分诊（#94–#106，硬门槛第一步，不评分、不跑 SERP）

> 输入：侦察员 2026-10-28 写入候选池的一手数据（发售日、评测量与好评率、类型）。这 13 个**没有词库**，本轮只做「内容可写性 + 时机 + 是否值得采词」的第一步分诊。
> 处置口径：`需采集`（有需求信号且内容面可写，派研究员采词）/ `观察`（信号存在但时机或主题待定，先留池）/ `放弃`（内容量或主题不适合建站）。

| # | 候选 | 类型 | 一手信号（侦察员） | 分诊 | 一句理由 |
|:--:|---|---|---|---|---|
| 94 | **One Way Tickets** | Roguelite 增量冒险 / 载具战斗 | EA 2026-10-22；**1,487 条 86%**；15–20h；¥68 | **需采集** | 已发售 6 天、评测量过 300 且 86% 稳，载具/升级/路线可写；名字长但有中文别名，需求真实 |
| 95 | **Giggleland** | 第一人称心理恐怖 | 2026-10-26；**231 条 61% Mixed**；约 10 章/6h | **观察** | 章节可写但 61% Mixed 是硬伤，6h 体量决定攻略面窄；等 1–2 周口碑与评测量再定 |
| 96 | **Life Is a Dungeon: Lean into It.** | 地牢 Roguelite RPG / 四人「性分」系统 | 2026-10-26；**12 条 100%**（样本 <300） | **观察** | 样本仅 12 条不足判需求；且「性分」主题有广告合规风险，等评测 ≥300 再评 |
| 97 | **Benny's Backrooms** | 1–4 人 Co-op 恐怖 / 程序化后室 | EA 2026-10-27；**11 条 63% Mixed** | **放弃** | 11 条 63% + Backrooms 同名生态极重 + 程序化关卡难写稳定页，三重不利 |
| 98 | **Tarpit** | 第一人称短篇心理恐怖（免费） | 2026-10-27；**1 条无评分**；约 2h | **放弃** | 2h 免费短篇，可写页 <3，命中内容扩展 0 分淘汰线 |
| 99 | **Virtue and a Sledgehammer** | 第三人称叙事动作 / 发泄模拟 | 2026-10-27；**15 条 100%**（样本小） | **放弃** | Steam 标签含 Walking Simulator，叙事型无 build/tier/物品系统，攻略型需求结构性偏低 |
| 100 | **ELbab** | Roguelite 自走棋 / 构筑（1.0） | 2026-10-26 1.0；**142 条 79%** | **需采集** | 208 本书 + 刻石树 + Endless Mode 可核验、构筑类页面多；1.0 当日窗口，体量小但词面清晰 |
| 101 | **Worst Class Ever** | 1–8 人非对称社交推理 / 派对 | 2026-11-09；0 评测；**Next Fest 独立玩家第 1、峰值 27,684、demo 60 万+**（三方） | **需采集** | 窗口最近（12 天）+ demo 信号最强；8 人非对称有角色/阵营/反制页可写，「疑超休闲」由词库验证（攻略型 <30% 再退） |
| 102 | **Rip It! Card Collector** | 单人增量式拆卡收藏 / 1,809 张卡 | 2026-10-30；0 评测 | **观察** | 1,809 卡池理论上可写收集表，但增量拆卡是否产生「攻略型」搜索未验证；发售 2 天后先看锚定词 |
| 103 | **Dear Passengers** | 在线 Co-op 空乘模拟 / friendslop（F2P） | 无定档；愿望单 2 天破 100 万 / 5 天 150 万（三方 2026-07，`[待确认]`） | **观察** | 愿望单信号极强但**无发售日**且是 F2P 派对向，现在采词太早；定档后立即升级为需采集 |
| 104 | **Blight: Survival** | 1–4 人 Co-op 中世纪动作恐怖 | TBA；官方明确 **2026 不发售**；愿望单 150 万+（三方） | **观察** | 需求上限高但窗口在 2027，超出 8 周建站窗口；只做长期观察，不占本轮采词 |
| 105 | **Abyssal Lapidary** | 哥特宝石加工 / 经营模拟 + Lovecraft | 无定档；Next Fest demo 峰值约 4,549 CCU（三方 10-23） | **观察** | 题材与经营机制可写、demo 有量，但**无定档**；定档后再采词 |
| 106 | **Haunted Paws** | 2 人 Co-op 温馨恐怖解谜 | TBA（三方估 2026-12，非官方）；Friend's Pass + demo | **观察** | 无官方定档 + 两人小团队，内容量未知；等官方日期 |

**分诊结果：需采集 3 / 观察 7 / 放弃 3。**

### 采词优先级（按需求信号强度）

| 序 | 候选 | 依据 | 采词时注意 |
|:--:|---|---|---|
| **1** | **#94 One Way Tickets** | 已发售、**1,487 条 86%**（13 个新候选里唯一「已发售 + 评测 ≥300 + 好评 ≥85%」三条件全满足）、15–20h | 锚定 `One Way Tickets`（长名易被拆词）；中文别名「再再启程」单独探针；重点看载具/升级/结局词 |
| **2** | **#101 Worst Class Ever** | 未发售但 **11-09 窗口 12 天**、Next Fest 独立玩家第 1 / 峰值 27,684 / demo 60 万+，窗口价值最高 | 锚定全名 + `game`；必须验证是否「派对/超休闲」（攻略型 <30% → 需求封顶 3，且内容扩展按角色数走） |
| **3** | **#100 ELbab** | 1.0 当日、**142 条 79%**、208 本书/刻石树/Endless 有可核验实体 | 锚定 `ELbab`（4 字母易撞名，先测锚定率）；重点看书/刻石构筑词 |

> 备选第 4：#103 Dear Passengers（愿望单 150 万最猛，但无定档、F2P；**定档当天**插队采词）。

---

## 四、本轮汇总

| # | 候选 | P | 需求 | 竞争 | 内容 | 生命周期 | 总分 | 判定 |
|:--:|---|:--:|:--:|:--:|:--:|:--:|:--:|---|
| 77 | Probably Stolen - Cyberpunk Shopkeeper Sim | **2.0** | 4（严格 3） | 2 | 5 | 5 | **16** | **观察** |
| 78 | S.O.N.A.R. | — | — | — | — | — | — | **需求不足**（14 词，11-05 复采） |
| 94–106 | 13 个新候选 | — | — | — | — | — | — | **需采集 3 / 观察 7 / 放弃 3**（见第三节） |

### 4.1 本轮可建站数量 = **0**

- **#77（16，观察）**：卡在两处口径边界上，任一放宽就到 17：
  - 需求：60+ 词 + 攻略型 34.7% 落已记录缺口（取 3 = 15 / 取 4 = 16）；
  - 竞争：`P=2.0` 正好在「2 家厚站」档位边界（取 2 = 16 / 按 `(1,2]` 取 3 = 17）；
  - **但实质风险不因分数变化**：两家英文 wiki 合计 ~90 页且已本地化 4 种语言，我们晚于它们入场。**建议：除非主 Agent 认可「只做利润/路线深度页」的差异化打法，否则不建。**
- **#94 / #100 / #101** 是下一轮采词的最优三选，采完再走完整四维评分。

### 4.2 数据缺口与本轮影响

| 缺项 | 影响 | 处理 |
|---|---|---|
| #77 一手评测数 / 好评率 / 价格（API `recommendations` 空、商店页 TIMEOUT） | 只影响生命周期证据强度与成本栏 | `[待确认]`（2026-10-28）；发售当日无评测属正常，D+3 复看 |
| Next Fest demo 的评测数/好评率（搜索摘要称 2,000+/98%，一手页未复现） | 生命周期 5 的证据之一 | 标 `[待确认]`，未当结论 |
| 两家 wiki 的精确最后更新日（PSG 首页显示 09-17，sitemap 无 lastmod） | 厚/薄判定 → `P` 1.5–2.0 | 标 `[待确认]`；两种都在 15–17 分区间 |
| 13 个新候选全部无词库 | 不能评分 | 已按硬门槛分诊，3 个转 `需采集` |
| 所有候选 Google Trends 28 天 | — | 一律 `[待确认]`，未估算 |
