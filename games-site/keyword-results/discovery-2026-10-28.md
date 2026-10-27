# 发现轮报告 — 2026-10-28

> 执行：游戏侦察员（`docs/agents/11` / `12`）
> 下游：候选分析员（`22` / `23`）
> 任务编号：DISCOVERY-2026-10-28
> 本报告只做「多源发现 + 硬筛 + 证据」，**不含四维评分、不含 wiki 竞争检查、不含采词、不含建站建议**。

## 0. 本轮口径

- 按派单要求，本轮回到**多源发现**：Steam 愿望单榜 / SteamDB 趋势 / Steam 新发售 / 即将发售与 Next Fest，共 4 个主源 + 1 个补充源。
- 硬筛（MUST）：跳过 AAA、纯竞技、超休闲、视觉小说、已停服、上线超过 6 个月且无重大更新。
- 侦察员只填候选池的 `# / 游戏 / 类型 / 上线日 / 发现日 / 证据`，结论一律 `待分析`。
- 评测数、愿望单数一律标来源；查不到写 `[待确认]`，**不估算、不编造**。
- 与 10-26 轮的差异：10-26 轮经验是「预售期挖不出攻略型词」，但那属于分析/采词结论；本轮按派单口径仍收录部分未发售候选，并在「疑点」里标注**预售期风险**，是否值得建由分析员判。

### 证据可信度分级（本报告统一使用）

| 级别 | 含义 |
|---|---|
| **一手** | 本轮直接打开 Steam 商店页读到的字段（发售日/评测数/好评率/类型标签） |
| **三方** | 媒体、榜单站、SteamDB 快照、发行方新闻稿；标注站点名与日期 |
| **待确认** | 多源冲突或只有单一弱来源，未写成确定值 |

---

## 一、搜索日志（5 个来源，S1–S5）

### S1 — Steam 愿望单榜

| 项 | 内容 |
|---|---|
| 查询 | `Steam top wishlist games October 2026 upcoming indie release` |
| 入口 1 | GameGrin《Steam's Top Wishlisted Games of the Month — October 2026》 https://www.gamegrin.com/news/steams-top-wishlisted-games-of-the-month-october-2026/ |
| 入口 2 | IndieBunny Most Anticipated（按 Steam Popular Upcoming 顺序，快照 2026-10-22） https://indiebunny.com/most-wishlisted |
| 结果 | 榜单前列：Deadlock、Light No Fire、Dear Passengers、Fable、Blight: Survival、Phantom Blade Zero、Total War: WARHAMMER 40,000、Kingmakers、Resident Evil Veronica、Witchbrook、ILL、ARK 2、Soulframe、Unrecord、METRO 2039 等。Indie 侧：Moon Sweepers（已在池 #76）、Emberville（#42）、HANDS OVER（#79）、One Way Tickets、Magical Girl ER、S.O.N.A.R.（#78）、Under Canopies（#60）、Dear Passengers、Giggleland、Rip It! Card Collector |
| 去重 | Moon Sweepers / Emberville / HANDS OVER / S.O.N.A.R. / Under Canopies 均已在池，未重复收录 |

### S2 — SteamDB 趋势 / 周销榜

| 项 | 内容 |
|---|---|
| 查询 | `SteamDB trending games October 2026 new release` |
| 入口 | SteamDB Weekly Global Top Sellers 2026W42 https://steamdb.info/topsellers/2026W42/ ；SteamDB 首页热门新品（经 WebSearch 摘要读取） |
| 结果 | 周销榜：AION 2（免费，10/5）#2、STAR WARS: Galactic Racer（10/6）#4、Gears of War: E-Day（10/6）#7、Risk of Rain 2: Hallowed Concepts（10/8）#10、Hellraiser: Revival（10/8，已在池 #70）#14、CoD MW4（10/23）#19、Planet Zoo 2（10/13）#20、ACE COMBAT 8（10/1）#22、Phantom Blade Zero（10/29 前升至 #31） |
| 热门新品（24h 峰值） | Enshrouded 87,009、Castlevania: Belmont's Curse 12,395、Scam With Your Friends 8,969、over the hill 8,118（已在池 #49）、We Were Here Tomorrow 6,961、Arknights: Endfield 5,208；另有 Escape from Playtime（#63）、Brick by Brick、Chained Beasts（#45）、Frosthaven |
| 可达性 | 本轮**未直连** SteamDB（上轮实测 403 反爬）；以上为 WebSearch 对 SteamDB 页面的摘要，标为**三方**。未据此编造精确数字 |

### S3 — Steam 新发售（2026-10-26 ~ 10-28）

| 项 | 内容 |
|---|---|
| 查询 1 | `new Steam games released October 27 2026 indie` |
| 命中 | Arctic Roll（10/27，$4.99 战术 Roguelite）、Benny's Backrooms（10/27 EA）、A Dark Cave（10/27，文字增量）、Tarpit（10/27）、ELbab（10/27 1.0）、Life Is a Dungeon: Lean into It.（10/26–27）、ANTI-ANTI（10/27，视觉小说）、Better World、Junkpot Packages、Department of Final Judgment |
| 查询 2 | `"Virtue and a Sledgehammer" Deconstructeam Steam release date` |
| 命中 | Virtue and a Sledgehammer（10/27，Devolver） |
| 查询 3 | `"Giggleland" Steam game KMW release date October 2026` → 命中 10/26 |
| 查询 4 | `"One Way Tickets" Steam game Future Tech release date` → 命中 10/22 EA |
| 入口 5 | GameGrin《22 Hidden Gems Launching on Steam This Week（10/26–11/1）》 https://www.gamegrin.com/news/22-hidden-gems-launching-on-steam-this-week-26th-of-october-to-the-1st-of-november-2026/ |
| 命中 6 | Curse of Resthaven（10/29）、The Mailroom（10/26）、Into the Crypt（10/29）、CH13: Rest Stop（10/28）、FIRESTARTERS（10/28 EA）、Hokko Spaces（10/29）、Infinity Bounce（10/28）、That Which Remains（10/27）、Veyora（10/25）、Lost Camp（10/30）、Urbexophobia（10/30 EA）、Vampolitics（10/29）等 |
| 一手复核 | 本轮直接打开 Steam 商店页成功读取 **8 个**（One Way Tickets / Giggleland / Life Is a Dungeon / Benny's Backrooms / Tarpit / Virtue and a Sledgehammer / ELbab / Worst Class Ever），其余 4 个店页因本机到 Steam 的连接不稳定返回 ECONNREFUSED/ETIMEDOUT（详见第五节） |

### S4 — 即将发售 / Steam Next Fest 2026-10

| 项 | 内容 |
|---|---|
| 查询 | `Steam Next Fest October 2026 most played demos list` |
| 入口 1 | AUTOMATON（日）Valve 官方 top50 https://automaton-media.com/articles/newsjp/20261027-475863/ |
| 入口 2 | TheBigBois 20 个最热 demo（含类型/开发/发售日） https://thebigbois.com/news/steam-next-fest-october-2026-most-played-demos/ |
| 入口 3 | outputlag 峰值 CCU 榜 https://outputlag.com/news/steam-next-fest-october-2026-the-most-played-demos-by-the-numbers/ |
| Valve 官方 top10（按独立玩家数） | Worst Class Ever、Probably Stolen（已在池 #77）、Find The Needle、Fart Together、ArcheAge Chronicles、Frostrail（#85）、just volleyball、Character House – Desktop Companion、Abyssal Lapidary、Loftia（#44） |
| 峰值 CCU 榜 | Probably Stolen 39,696、Worst Class Ever 27,684、ArcheAge Chronicles 19,855、just volleyball 9,598、Frostrail 8,834、Loftia 7,427、Abyssal Lapidary 4,766、Fart Together 4,405、Among Shadows 3,063、BORE 2,923 |
| 官方 top20 补充 | Mortuus、Dumpster Gang（#83）、HANDS OVER（#79）、Haunted Paws、Emberville（#42）、No Body No Problem!、Deadzone Rogue 2、Wyldheart、Grr Grr Gnomes、Never Be Alone（#84） |
| 去重 | Probably Stolen / Frostrail / Loftia / Dumpster Gang / HANDS OVER / Emberville / Never Be Alone 已在池 |

### S5 — Reddit 补充源（失败，如实记录）

| 项 | 内容 |
|---|---|
| 查询 | `site:reddit.com Steam new co-op horror roguelite game recommendation late October 2026` |
| 结果 | **No links found**（WebSearch 无返回） |
| 处理 | 按 Profile 规则如实记录该维度缺失，未用 Reddit 数据补齐证据；不影响 S1–S4 的 4 源达标 |

---

## 二、通过硬筛（本轮入池候选，13 个：`#94`–`#106`）

> 评测数/好评率若标「一手」，为本轮 2026-10-28 直接打开 Steam 商店页读取；标「三方」为媒体/榜单快照。

| 池号 | 游戏 | 类型 | 上线日 | 评测（来源） | 一手证据 | 疑点（交分析员） |
|---|---|---|---|---|---|---|
| #94 | **One Way Tickets**（再再启程） | Roguelite 增量冒险 / 载具战斗（Future Tech.） | 2026-10-22 EA | **1,487 条 86% Very Positive**（一手） | https://store.steampowered.com/app/4817620/One_Way_Tickets/ | EA 期；15–20h 内容；名字较长、中文别名「再再启程」可分流 |
| #95 | **Giggleland** | 第一人称心理恐怖冒险（Hooked / Gamincat） | 2026-10-26 | **231 条 61% Mixed**（一手） | https://store.steampowered.com/app/3370490/Giggleland/ | 口碑 Mixed；约 10 章 / 6h，内容量中等 |
| #96 | **Life Is a Dungeon: Lean into It.** | 地牢 Roguelite RPG / 四人「性分」系统（Anonymous Works / syn Sophia） | 2026-10-26 | **12 条 100% Positive**（一手，样本小） | https://store.steampowered.com/app/5062910/Life_Is_a_Dungeon_Lean_into_It/ | 评测样本 <300，需求待验证；日式发行 |
| #97 | **Benny's Backrooms** | 1–4 人 Co-op 恐怖 / 程序化后室（GameName） | 2026-10-27 EA | **11 条 63% Mixed**（一手，样本小） | https://store.steampowered.com/app/2562390/Bennys_Backrooms/ | 首发样本小且 Mixed；EA 计划约 12 个月；Backrooms 同名生态重 |
| #98 | **Tarpit** | 第一人称短篇心理恐怖 / 芬兰焦油（Koivu Games，免费） | 2026-10-27 | **1 条，暂无评分**（一手） | https://store.steampowered.com/app/5277680/Tarpit/ | 免费 + 约 2h，内容与变现都偏薄；仅作长尾备选 |
| #99 | **Virtue and a Sledgehammer** | 第三人称叙事动作 / 发泄模拟（Deconstructeam / Devolver） | 2026-10-27 | **15 条 100% Positive**（一手，样本小） | https://store.steampowered.com/app/3743260/Virtue_and_a_Sledgehammer/ | Steam 标签含 Walking Simulator，攻略面可能窄；Devolver 发行 |
| #100 | **ELbab** | Roguelite 自走棋 / 构筑（makz，1.0） | 2026-10-26 1.0（EA 2025-12-12） | **142 条 79% Mostly Positive**（一手） | https://store.steampowered.com/app/4209630/ELbab/ | 小体量低价（$4–5）；208 本书 + 刻石树，构筑页可写 |
| #101 | **Worst Class Ever**（我带过的最差一届） | 1–8 人非对称社交推理 / 派对（Funcore Games / 2P Games） | 2026-11-09（发行稿写 11-10） | 0 条（未发售，一手） | https://store.steampowered.com/app/5175310/Worst_Class_Ever/ | **疑超休闲/派对**；Next Fest 600,000+ 玩家、峰值 27,684（三方）；8 人/10 教室/20 装饰，内容深度待判 |
| #102 | **Rip It! Card Collector**（再拆亿包！） | 单人增量式拆卡收藏模拟 / 1,809 张卡（Cybernetic Walrus） | 2026-10-30 | 0 条（未发售，一手） | https://store.steampowered.com/app/5088440/Rip_It_Card_Collector/ | **疑超休闲/增量**；卡池 1,809 张，图鉴型内容可写但攻略型词待验证 |
| #103 | **Dear Passengers** | 在线 Co-op 空乘模拟 / friendslop（FLEXUS，免费） | 2026（无定档） | 0 条（一手）；愿望单 2 天破 100 万、5 天破 150 万（三方 app2top，2026-07） | https://store.steampowered.com/app/4534960/Dear_Passengers/ | **无定档 + 疑派对/超休闲**；F2P 变现弱；愿望单数字为三方口径，标 `[待确认]` |
| #104 | **Blight: Survival** | 1–4 人 Co-op 中世纪动作恐怖 / 提取-lite Roguelite（Haenir / Behaviour） | TBA（官方明确 2026 不发售） | 0 条（未发售） | https://store.steampowered.com/app/1774880/Blight_Survival/ | **窗口远**；愿望单 150 万+（三方 IGN/开发者更新）；官方 2026-03 与 2026-10 两次说明延期，长期观察 |
| #105 | **Abyssal Lapidary**（地渊珠宝匠） | 哥特宝石加工 / 经营模拟 + Lovecraft（Light Worm / XD） | Coming soon（无日期） | 0 条（未发售） | https://store.steampowered.com/app/3797790/Abyssal_Lapidary/ | **无定档**；Next Fest demo 峰值 4,549 CCU（三方 SteamDB 10-23），demo 已病毒式传播 |
| #106 | **Haunted Paws**（闹鬼爪子） | 2 人 Co-op 温馨恐怖解谜 / 小狗（LazyFlock） | TBA（三方估 2026-12） | 0 条（未发售） | https://store.steampowered.com/app/2861080/Haunted_Paws/ | **无定档**；2 人小团队；Friend's Pass + 多平台公布，需求侧看 demo |

### 2.1 为什么这 13 个能过筛

- 全部为独立/中小体量，无 AAA、无纯竞技、无已停服。
- #94–#100 为本轮**已发售 0–2 天**，可直接观察评测与口碑；#101–#106 为**未发售/待定档**，按派单口径保留，但在疑点列标明预售期风险。
- 每个候选都有可点开的 Steam 商店页；已发售的 7 个中 5 个拿到一手评测数，2 个（Worst Class Ever / Rip It!）未发售所以为 0。

---

## 三、未通过硬筛（记录理由，保留轨迹）

### 3.1 按硬筛规则淘汰

| 游戏 | 上线/窗口 | 淘汰理由 | 证据 |
|---|---|---|---|
| **Magical Girl ER** | 2026-10-26 | **视觉小说**（Steam 标签明确含 `Visual Novel`）+ 单周目叙事，攻略面窄 | https://store.steampowered.com/app/4395870/Magical_Girl_ER/ ；73 条 82% Very Positive（一手） |
| **Fart Together** | 2026-10-29 | **超休闲**物理派对 | https://thebigbois.com/news/steam-next-fest-october-2026-most-played-demos/ （Next Fest 峰值 4,405） |
| **just volleyball** | 2026-11-04 | **超休闲**体育/派对 | 同上（峰值 9,598） |
| **Find The Needle** | 2026 Q4 | **超休闲**增量/找物 | AUTOMATON top50 https://automaton-media.com/articles/newsjp/20261027-475863/ |
| **Character House – Desktop Companion** | 2026 | **超休闲**桌面挂机 | 同上 |
| **No Body No Problem!** | Coming soon | **超休闲**隐藏身份派对 | TheBigBois top20 |
| **A Dark Cave** | 2026-10-27 | **超休闲**文字增量 | https://gamebiz.jp/news/434306 |
| **ANTI-ANTI** | 2026-10-27 | **视觉小说**（约 30 万字剧情） | https://bbs.ruliweb.com/news/read/231044 |
| **ArcheAge Chronicles** | TBA | **AAA/大厂 MMO**（XLGAMES） | AUTOMATON top50 |
| **Phantom Blade Zero** | 2026-09-08 | **AAA 动作 RPG**，大厂攻略生态 | SteamDB 周销榜 |
| **Call of Duty: Modern Warfare 4** | 2026-10-23 | **AAA** | SteamDB 周销榜 |
| **Planet Zoo 2** | 2026-10-13 | **大 IP 模拟经营**，已有攻略/wiki 生态 | SteamDB 周销榜 |
| **Enshrouded 1.0** | 2026-10-15 | **已有成熟 wiki 生态**（老游戏 1.0，上线远超 6 个月） | SteamDB 热门新品 87,009 |
| **AION 2 / STAR WARS: Galactic Racer / Gears of War: E-Day / Risk of Rain 2 DLC / ACE COMBAT 8** | 2026-10 初 | **AAA / 大厂 / 已有生态** | SteamDB 周销榜 |
| **Deadlock / Light No Fire / Fable / Resident Evil Veronica / METRO 2039 / Total War: WH40k / Persona 4 Revival / ARK 2 / Soulframe / Unrecord / ILL / Tides of Annihilation / Kingmakers / Witcher 3 DLC** | TBA | **AAA 或窗口过远/无定档** | GameGrin 愿望单榜 |
| **Grr Grr Gnomes** | 2027-01-19 | 窗口超出 6 个月发现窗口，暂不收集 | TheBigBois top20 |

### 3.2 已发售但本轮暂不入池（样本/体量不足，非硬筛）

| 游戏 | 上线日 | 理由 | 证据 |
|---|---|---|---|
| Arctic Roll | 2026-10-27 | $4.99 小体量、0 评测样本，内容面待观察 | https://store.steampowered.com/app/3948790/Arctic_Roll/ |
| The Mailroom / Into the Crypt / CH13: Rest Stop / FIRESTARTERS / Hokko Spaces / Infinity Bounce / That Which Remains / Veyora / Lost Camp / Urbexophobia / Vampolitics / Curse of Resthaven | 2026-10-25 ~ 10-30 | 新发售但评测样本为 0 或未核实，先记背景，不占池位 | GameGrin 22 Hidden Gems https://www.gamegrin.com/news/22-hidden-gems-launching-on-steam-this-week-26th-of-october-to-the-1st-of-november-2026/ |
| Better World / Junkpot Packages / Department of Final Judgment | 2026-10-27 | SteamDB 有条目但类型/体量/评测信息不足，未核实过硬筛 | SteamDB 条目（见 S3 搜索日志） |
| Mortuus / Deadzone Rogue 2 / Wyldheart / Among Shadows / BORE | Coming soon | 无定档；本轮只记 Next Fest 表现，等定档再收 | AUTOMATON / TheBigBois |
| Witchbrook | 2026 | 无定档，愿望单高但发售窗口不明，等官方日期 | GameGrin 愿望单榜 |

### 3.3 已在候选池（查重命中，未重复收录）

Moon Sweepers（#76）、Emberville（#42）、HANDS OVER（#79）、Probably Stolen（#77）、S.O.N.A.R.（#78）、Frostrail（#85）、Dumpster Gang（#83）、Loftia（#44）、Never Be Alone（#84）、Under Canopies（#60）、PAPERHEAD（#88）、over the hill（#49）、Japanese Ramen Simulator（#87）、Escape from Playtime（#63）、Chained Beasts（#45）、Deep Dish Dungeon（#54）、Order of the Sinking Star（#69）、Hellraiser: Revival（#70）、Invokyr（#68）、Neon Abyss 2（#72）、Every Day We Fight（#73）、Dungeon Inn（#74）、Stygian: Outer Gods（#86）、REKA（#90）、Tape to Tape（#91）、GONE Fishing（#92）、Ratatan（#93）。

---

## 四、候选逐条证据与开发/上线信息

### #94 One Way Tickets（再再启程）

- **类型**：Roguelite 增量冒险 / 横版载具战斗；Steam 标签 Adventure / Side Scroller / Roguelite / Incremental / Automobile Sim / Management / Vehicular Combat。
- **开发/发行**：Future Tech.（自研自发）。
- **上线**：Steam 商店页 2026-10-22（Early Access）；中文社区公告按北京时间写 10-23。
- **评测**：1,487 条 86% Very Positive（一手，2026-10-28）。
- **价格**：¥68（首发 -20% ¥54.40）。
- **证据**：https://store.steampowered.com/app/4817620/One_Way_Tickets/
- **内容线索（来自商店页标签/公告，未做机制核验）**：车辆选择、装置装备、冲撞/射击/挥砍、15–20h。

### #95 Giggleland

- **类型**：第一人称心理恐怖冒险；标签 Psychological Horror / Puzzle / Story Rich / Multiple Endings。
- **开发/发行**：Hooked / Gamincat, Inc.。
- **上线**：2026-10-26（一手）。
- **评测**：231 条 61% Mixed（一手，2026-10-28）。
- **价格**：¥68（首发 -10% ¥61.20）。
- **证据**：https://store.steampowered.com/app/3370490/Giggleland/
- **内容线索**：主题公园、吉祥物、约 10 章 / 6h、规则触发事件。

### #96 Life Is a Dungeon: Lean into It.

- **类型**：地牢 Roguelite RPG；核心是四名冒险者各自的「性分」需求。
- **开发/发行**：Anonymous Works / syn Sophia, Inc.。
- **上线**：2026-10-26（一手；日区媒体写 10-27）。
- **评测**：12 条 100% Positive（一手，样本小）。
- **价格**：¥70.07（首发 -20% ¥56.05）。
- **证据**：https://store.steampowered.com/app/5062910/Life_Is_a_Dungeon_Lean_into_It/
- **内容线索**：Dungeon Crawler / Roguelite / Action RPG / Pixel Graphics / Top-Down。

### #97 Benny's Backrooms

- **类型**：1–4 人 Co-op 第一人称恐怖 / 程序化后室；标签 Online Co-Op / Procedural Generation / Survival Horror。
- **开发/发行**：GameName（YouTuber "Socks" 创立，Jed "HakJak" Steen 主导）。
- **上线**：2026-10-27（Early Access，一手）。
- **评测**：11 条 63% Mixed（一手，样本小）。
- **价格**：¥42（首发 -20% ¥33.60，至 11-10）。
- **证据**：https://store.steampowered.com/app/2562390/Bennys_Backrooms/
- **内容线索**：T-Vac 采集 Tescil、实体 Benny、3–4 个程序化关卡、装备升级；EA 计划约 12 个月。

### #98 Tarpit

- **类型**：第一人称短篇心理恐怖 / 芬兰焦油工艺；标签 Psychological Horror / Short / Linear。
- **开发/发行**：Koivu Games。
- **上线**：2026-10-27（一手）。
- **评测**：1 条，暂无可显示评分（一手）。
- **价格**：¥25（首发 -10% ¥22.50）。
- **证据**：https://store.steampowered.com/app/5277680/Tarpit/
- **内容线索**：三座岛、熬焦油任务、追逐段、约 2h；含肢解/惊吓。

### #99 Virtue and a Sledgehammer

- **类型**：第三人称叙事动作 / 「暴力宣泄」模拟；标签 Walking Simulator / Story Rich / Cinematic。
- **开发/发行**：Deconstructeam、Selkie Harbour / Devolver Digital。
- **上线**：2026-10-27（一手）。
- **评测**：15 条 100% Positive（一手，样本小）。
- **价格**：¥59。
- **证据**：https://store.steampowered.com/app/3743260/Virtue_and_a_Sledgehammer/
- **内容线索**：返乡、砸镇、家庭情绪、邻居是机器人；demo 已出。

### #100 ELbab

- **类型**：Roguelite 自走棋 / 构筑；以 PoE + PoB 为灵感的「刻石」天赋树。
- **开发/发行**：makz（单人）。
- **上线**：2026-10-26 1.0（EA 2025-12-12，一手）。
- **评测**：142 条 79% Mostly Positive（一手）。
- **价格**：¥29（首发 -40% ¥17.40）。
- **证据**：https://store.steampowered.com/app/4209630/ELbab/
- **内容线索**：208 本书、4 层、6 难度、Endless Mode、战斗回放/分析。

### #101 Worst Class Ever（我带过的最差一届）

- **类型**：1–8 人非对称社交推理 / 派对；一名老师 vs 最多五名（正式版八名）捣蛋学生，混在 NPC 学生中。
- **开发/发行**：Funcore Games / Funcore Games + 2P Games。
- **上线**：Steam 商店页 2026-11-09；发行稿与中文媒体写 11-10（一手 vs 三方冲突，按 Steam 记为 11-09）。
- **评测**：0（未发售，一手）。
- **证据**：https://store.steampowered.com/app/5175310/Worst_Class_Ever/
- **Next Fest**：独立玩家数第 1、峰值 27,684、demo 600,000+ 玩家（三方）。
- **疑点**：派对/社交推理，**可能触发超休闲**；正式版加 8 人、班主任、10 教室、LAN、20 装饰项。

### #102 Rip It! Card Collector（再拆亿包！）

- **类型**：单人增量式拆卡/收藏模拟；1,809 张卡、卖重复卡、升级工具。
- **开发/发行**：Cybernetic Walrus。
- **上线**：2026-10-30（一手，未发售）。
- **评测**：0（一手）。
- **证据**：https://store.steampowered.com/app/5088440/Rip_It_Card_Collector/
- **疑点**：增量/收集品类，**可能偏超休闲**；图鉴型内容多但「攻略型」搜索需求待验证；demo App 5348340。

### #103 Dear Passengers

- **类型**：在线 Co-op 空乘/航空公司混乱模拟（friendslop）；标签 Online Co-Op / Physics / Management / Parody。
- **开发/发行**：FLEXUS（首个 PC 作品）。
- **上线**：2026（无具体日期，一手）。
- **评测**：0（一手）；免费游玩。
- **愿望单**：公布 2 天破 100 万、5 天破 150 万（三方 app2top，2026-07），约愿望单榜 #15；**具体数字标 `[待确认]`**。
- **证据**：https://store.steampowered.com/app/4534960/Dear_Passengers/
- **疑点**：无定档、F2P、派对向；攻略深度未知。

### #104 Blight: Survival

- **类型**：1–4 人 Co-op 中世纪动作恐怖 / 提取-lite Roguelite（装备会损耗）。
- **开发/发行**：Haenir Studio / Behaviour Interactive。
- **上线**：TBA；开发者 2026-03 与 2026-10 更新均明确 **2026 不发售**（三方 IGN/官方更新）。
- **评测**：0（未发售）。
- **愿望单**：150 万+（三方 IGN，2026 初）。
- **证据**：https://store.steampowered.com/app/1774880/Blight_Survival/
- **疑点**：窗口远，2026 内不可建；仅作长期观察。

### #105 Abyssal Lapidary（地渊珠宝匠）

- **类型**：哥特宝石鉴定/切割/首饰加工经营模拟 + Lovecraft 恐怖 + 赌石；标签 Immersive Sim / Job Simulator / Shop Keeper / Lovecraftian。
- **开发/发行**：Light Worm / XD。
- **上线**：Coming soon（无日期，一手）。
- **评测**：0（未发售）。
- **demo**：2026-10-16 上线，10-23 峰值约 4,549 CCU（三方 SteamDB）。
- **证据**：https://store.steampowered.com/app/3797790/Abyssal_Lapidary/
- **疑点**：无定档；demo 已病毒式传播，正式版窗口不明。

### #106 Haunted Paws（闹鬼爪子）

- **类型**：2 人 Co-op 温馨恐怖解谜 / 两只小狗救主人；挖掘、嗅探、吠叫技能。
- **开发**：LazyFlock（立陶宛两人团队）。
- **上线**：TBA（Steam 未定；三方 gry-online 估 2026-12，属估算，不作为定档）。
- **评测**：0（未发售）。
- **证据**：https://store.steampowered.com/app/2861080/Haunted_Paws/
- **疑点**：无定档；Friend's Pass + demo 已出；内容量待验证。

---

## 五、可达性与 `[待确认]` 说明

1. **Steam 一手可达性**：本轮 `store.steampowered.com` 时通时断。
   - 成功一手读取：One Way Tickets、Giggleland、Life Is a Dungeon、Benny's Backrooms、Tarpit、Virtue and a Sledgehammer、ELbab、Worst Class Ever、Rip It!（部分字段）、Magical Girl ER、Dear Passengers、Abyssal Lapidary。
   - 失败：`store.steampowered.com` 对同一 IP `23.0.222.94:443` 返回 `ECONNREFUSED` 或 `ETIMEDOUT`（如 Haunted Paws 店页未取到一手，改用 SteamDB/媒体三方）。
   - 按 Profile：**不把连接失败判为「被墙」**，也不编造缺失字段。
2. **SteamDB**：上轮实测 403；本轮只用 WebSearch 摘要，未直连，相关排名标三方。
3. **愿望单数字**：Steam 不公开精确愿望单数；Dear Passengers / Blight 的数字来自 app2top / IGN 转引发行方或第三方模型，已标三方 + `[待确认]`。
4. **评测数是动态值**：本轮一手快照时间为 2026-10-28（CST）；分析员复核时应重新取数并注明时间。
5. **发售日冲突**：
   - One Way Tickets：Steam 10-22 vs 中文公告 10-23（时区），按 Steam。
   - Life Is a Dungeon：Steam 10-26 vs 日区媒体 10-27（时区），按 Steam。
   - Giggleland：Steam 10-26；部分日媒 10-27。
   - Worst Class Ever：Steam 11-09 vs 发行稿 11-10，按 Steam 记 11-09 并保留冲突说明。
6. **Reddit 源缺失**：`site:reddit.com` 查询无返回，本轮未用 Reddit 讨论量作证据。

---

## 六、交接给候选分析员

- 本轮入池 **13 个**：`CANDIDATE-POOL.md` #94–#106，结论一律 `待分析`；四维分、总分、Wiki 列留 `—`。
- 本轮**未评分、未做 6 条 wiki 查询、未采词**；分析员需按 `docs/STRATEGY-选词与评分.md` 补全。
- 建议的验证顺序（只按「已发售 + 一手评测样本」排，不是建站建议）：
  1. **One Way Tickets**（#94）：1,487 条 86%，本轮样本最扎实。
  2. **Giggleland**（#95）：231 条 61% Mixed，口碑是主要风险点。
  3. **ELbab**（#100）：142 条 79%，构筑类内容面明确。
  4. **Life Is a Dungeon**（#96）/ **Benny's Backrooms**（#97）/ **Virtue and a Sledgehammer**（#99）：样本均 <20，需等评测累积或按愿望单/讨论量补证。
  5. **Worst Class Ever**（#101）/ **Rip It!**（#102）：未发售，11 月窗口；先观察首发评测再决定。
  6. **Dear Passengers**（#103）/ **Blight: Survival**（#104）/ **Abyssal Lapidary**（#105）/ **Haunted Paws**（#106）：均无定档，**不建议现在排建站**，只做水位储备。
- 采词消歧建议（分析员/研究员用）：
  - `One Way Tickets` 裸词易与票务/单程票混，MUST 加 `game` 或中文「再再启程」。
  - `Giggleland`、`ELbab`、`Tarpit` 均为短品牌词，需消歧。
  - `Life Is a Dungeon` 用全名 `Life Is a Dungeon Lean into It`。
  - `Worst Class Ever` 用全名 + 中文「我带过的最差一届」。
  - `Dear Passengers` 用全名 + `game`。
  - `Blight` 必须用 `Blight Survival`，否则撞通用词。
