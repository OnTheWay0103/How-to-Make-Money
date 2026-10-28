# 候选分析 — #80 Annihilated（2026-10-28）

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md`（四维 / 需求三道闸门 / 竞争 `P = T + 0.5t` / 品牌锚定率 / 成本口径）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/annihilated.md`
> 一手数据：Steam AppDetails `appid=2638080`；商店页 app/2638080；demo app/4099940（均 **WebFetch 于 2026-10-28**，本机 `curl` 对 store.steampowered.com 超时，见 §A.9）
> SERP：WebSearch（2026-10-28，美区英文；中/日文按原样跑）
> 未做：未建站、未写攻略、未改站点目录、未重采词、未改 `CANDIDATE-POOL.md` / `INDEX.md`、未 commit

---

## A.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **2638080** | [AppDetails](https://store.steampowered.com/api/appdetails?appids=2638080&l=english)（2026-10-28） |
| 官方名 / 开发者 | **Annihilated** / Death Kumiai（デス組合） | 同上 |
| 发行 | Death Kumiai + Flashlight Games | 同上 |
| 类型 | Indie / RPG；标签含 **Story Rich、Roguelite、Visual Novel、Card Battler、Deckbuilding、Turn-Based Combat、Multiple Endings** | [商店页](https://store.steampowered.com/app/2638080/)（2026-10-28） |
| 发售 | **2026-11-10**（`coming_soon=true`，页面「约 13 天后解锁」） | AppDetails + 商店页 |
| 平台 / 人数 | Windows；**单人**（无 co-op） | 同上 |
| 语言 | 英 / 日 / 简中（界面+音频+字幕） | AppDetails |
| 价格 | **$16.99 / €17.25**，首发两周 −10% | 搜索摘要（[RPG Gamers](https://rpggamers.com/news/roguelite-rpg-annihilated-is-coming-to-steam-on-november-10)，2026-10-28）；AppDetails `price_overview` 为空 → 以媒体口径记，标 `[待确认]` |
| 评测 | 本体「No user reviews」；**demo（appid 4099940）Positive (38)、100%**，demo 页标注发售 16 Oct 2025 | [demo 商店页](https://store.steampowered.com/app/4099940/) |
| 第三方信号 | **Steam 愿望单 >100,000** | [AUTOMATON WEST](https://automaton-media.com/en/news/annihilated-a-dark-indie-vn-card-battler-that-forces-you-to-save-only-one-member-of-a-physically-and-mentally-broken-adventurer-party-celebrates-over-100000-steam/)（2026-10-28 抓取，文章日期 `[待确认]`） |
| **本地化名（关键）** | 日文官方名 **「勇者パーティはぜんめつしました。」**；中文 **《勇者小队全灭了》** | demo 商店页标题（app 4099940）；[4Gamers 繁中报道](https://www.4gamers.com.tw/news/detail/82837/annihilated-demo-steam-trial-release) |
| 词库 5 数字 | 原始 165 / 去重 155 / 有效词 28 / 噪声 81.9% / 品牌锚定率 18.1% | `keyword-results/annihilated.md` 头部 |

---

## A.2 硬门槛（有效词复核 —— 逐条剔除撞名 / 通用义）

**结论：硬门槛不通过。复核后独立意图仅 9 条，远低于 20 的门禁线。**

复核方法：对 28 条逐条判「这条搜索词的真实意图是否指向本作」。`annihilated` 是英语常用动词过去式（「被歼灭」），又是电影《湮灭》/跨界事件/EP 名的常用词，Suggest 的 28 条里 19 条是词典义或不相关作品。

| 保留（9） | 依据 |
|---|---|
| `annihilated game characters` | SERP 实测前 10 全部指向本作（Steam demo 日文页、Kotaku ES、RPG Gamers、Inven 韩文、简中媒体），保留 |
| `annihilated game demo` | 有免费 demo（app 4099940），意图成立 |
| `annihilated game release date` | 定档 2026-11-10，意图成立 |
| `annihilated game release delay` | 有档期推迟（早期报道为 7 月），意图成立 |
| `annihilated game steam` | 指向本作 |
| `annihilated steam` | 同上 |
| `annihilated steam game` | 与上条近重复（源文件已标），**合并计 1** |
| `annihilated steam rpg` | 指向本作（RPG 标签） |
| `annihilated game` | 品牌导航 |

| 剔除（19） | 原因 |
|---|---|
| `annihilated crossword` | 填字游戏线索义（通用词），与本作无关 |
| `annihilated wiki visual novel` | 未锚定到本作（本作有 VN 标签，但该组合无本作证据） |
| `annihilated academy` / `annihilated academy fe2` | 指向另一作品（Fire Emblem 改版圈同名），撞名 |
| `annihilated empires` | 另一款同名 RTS，撞名 |
| `annihilated jensen mcrae` / `annihilated love starset` | 歌曲（Jensen McRae / Starset），撞名 |
| `annihilated svu` | 《法律与秩序：SVU》剧集，撞名 |
| `annihilated meaning` / `meaning in chinese` / `meaning in english` | 词典义 |
| `annihilated pronunciation` / `syllables` / `spelling` / `synonym` | 词典义 |
| `annihilated in spanish` | 翻译义 |
| `annihilated m` / `annihilated us` | 无意义片段，无法归因 |

**有效词 = 9（独立意图）**；宽口径也不过 10（把 `annihilated crossword` 或 `wiki visual novel` 留下也仍 <20）。

**攻略型占比**：攻略型仅 `game characters`（Boss/Characters）1 条 → **1/9 = 11.1%**（宽口径 ≤2/10 = 20%），**双双 <30%**。

**SERP 反向验证（比词库更狠的一条证据）**：Q2 `Annihilated game guide tips` 返回的 7 条结果**没有一条与本作相关**（全部是 RE7 问答、无双奖杯、ZZZ「Annihilation Simulacrum」、Stalcraft 论坛、中文 NGA）；Q3 `codes` 与 Q5 `wiki 中文` **0 条结果**。也就是说，即使有人按词库去搜「Annihilated 攻略」，搜索引擎也不认为这些结果属于本作 —— 通用词无法靠 brand 前缀锚定。

**内容可写性**：通过（4 条路线、4 名可操作伙伴、破坏/诅咒/致命一击等机制、200k 字剧情、100+ 武器道具、400+ 插画），但这是**内容维度**的事，不能补偿需求否决（`23-Profile` 硬门槛规则）。

---

## A.3 需求（三道闸门）

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **9**（研究员原记 28） | **不通过 → 门禁淘汰** |
| 攻略型占比 ≥30% | 1/9 = **11.1%** | 不通过（若强行过门禁，需求封顶 3） |
| 页型覆盖 ≥3 类各 ≥3 词 | 仅 Boss/Characters 1 类 | 不通过 |
| 第三方信号 ≥1 | 愿望单 >100k（AUTOMATON）、demo 38 条 100% | 通过 |
| 品牌锚定率 ≥50% | **18.1%**（脚本口径） | **<30% → §4 判「品牌不成立或撞名严重」→ 放弃** |
| 双源 | Suggest + 媒体/demo | 通过（但救不了词数） |

> 关键：`annihilated` 的**通用词属性**与**日/中文官方名完全不同**（「勇者パーティはぜんめつしました。」/《勇者小队全灭了》）是同一枚硬币的两面 —— 英文名本身不可锚定，日/中文名可锚定但不进我们的英文词库。

---

## A.4 竞争检查（6 条固定查询，逐条记录）

**Q1 EN `Annihilated game wiki`（返回 10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | steamdb.info/app/2638080 | 数据库（不计） |
| 2 | dev.rpgsite.net/news/19648-dark-dungeon-crawler-rpg-annihilated-... | 媒体新闻（不计） |
| 3 | phighting.wiki/Annihilate | **另一游戏 wiki（Roblox Phighting 招式页，撞名，不计）** |
| 4 | 163.com/dy/article/L8RBBA1205561FY3_pdya11y.html | 中文媒体（不计） |
| 5 | retrogems.fr/test-jv/annihilated/ | 法语评测（非英文，不计） |
| 6 | zoomg.ir/game-news/418862-annihilated-steam-release-date-features/ | 波斯语新闻（不计） |
| 7 | gamespress.com/it/Annihilated-... | 新闻稿（不计） |
| 8 | wiki.shotbow.net/Translations:Annihilation_Game_Summary/13/en | **Minecraft 小游戏 wiki（撞名，不计）** |
| 9 | store.steampowered.com/app/4099940/勇者パーティはぜんめつしました。 Demo | 商店页（不计） |
| 10 | es.kotaku.com/.../annihilated-estrena-una-prueba-gratuita... | 西语评测（不计） |

> 前 10 **0 家专门攻略站**；2 条是被同名/近名作品占位的 wiki。

**Q2 EN `Annihilated game guide tips`（返回 7 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | gaming.stackexchange.com/revisions/c5ddbd37-... | RE7 问答（**意图错位**） |
| 2 | gaming.stackexchange.com/revisions/3265b524-... | RE7 问答（意图错位） |
| 3 | truetrophies.com/viewcomment.aspx?commentid=70254 | 无双「Annihilating Blow」奖杯（意图错位） |
| 4 | trueachievements.com/viewcomment.aspx?commentid=1881604 | 同上（意图错位） |
| 5 | forum.exbo.net/d/164770 | Stalcraft 俄语论坛（不计） |
| 6 | game8.co/games/Zenless-Zone-Zero/archives/604543 | ZZZ「Annihilation Simulacrum」攻略（**另一游戏，意图错位**） |
| 7 | ngabbs.com/read.php?tid=47776804 | 中文论坛（不计） |

> **整页意图错位：0 条与本作相关。** 这条是全报告最关键的反证 —— 词库里的 guide 类搜索在真实 SERP 上拿不到本作结果。

**Q3 EN `Annihilated game codes`（0 条结果）** → codes 意图空白（本作为单人卡牌 RPG，无兑换码），无竞争可计。

**Q4 ZH `Annihilated 攻略`（返回 1 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | icy-veins.com/zenless-zone-zero/annihilation-simulacrum | ZZZ 玩法攻略（**另一游戏，意图错位**） |

> 中文用 `annihilated` 搜不到本作；用官方中文名《勇者小队全灭了》才有中文报道（4Gamers 等）。

**Q5 ZH `Annihilated wiki 中文 攻略`（0 条结果）**

**Q6 JA `Annihilated 攻略 日本語`（返回 3 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | w.atwiki.jp/anni-ja | **Minecraft Annihilation 日文 wiki（撞名，不计）** |
| 2 | seesaawiki.jp/marikinonline4-game-info | 无关游戏揭示板（不计） |
| 3 | steamcommunity.com/app/2638080/discussions/1/756178031216900926 | **本作 demo 的 Steam 论坛 bug 帖（论坛，不计）** |

> 日文有本作的社区讨论（说明有人玩），但零攻略站；官方日文名不同名，`Annihilated` 在日文的检索面是空的。

### A.5 P 值计算

| 站 | 类型 | 判定 |
|---|---|---|
| phighting.wiki / shotbow wiki / atwiki anni-ja | **不计** | 围绕的是别的游戏，非本作 |
| game8 / icy-veins / gaming.stackexchange / truetrophies / trueachievements | **不计** | 意图错位，答的是另一个「Annihilation」 |
| steamcommunity / forum.exbo.net / ngabbs / 163.com | **不计** | 论坛 / 社区 / 媒体 |

**`P = 0` → 无专门攻略站 → 竞争 5。**

> 注意：**P=0 在本例不代表机会，而代表「英文检索面不存在」**。按规则 `P=0 → 分 5`，这是规则给的分数，但结合需求 0 一起读，真实含义是：这个英文词没有形成属于本作的搜索生态。

---

## A.6 内容扩展

| 类 | 可核验实体 | 来源 |
|---|---|---|
| 角色 / 路线（4 名伙伴 + 4 条线） | 失声的 Hero、失去魔法的 Mage、灵魂寄于人偶的 Warrior、失去 ██ 的 Priest；**四条路线四个结局** | [商店页](https://store.steampowered.com/app/2638080/) |
| Boss | 首位 Boss **The Outcast**（demo 通关点）；后续 Boss 未具名 | 商店页 + demo 报道 |
| 机制 | 武器「最后一击最强」+ Fatal Strike 秒杀并夺取装备；物品化为有限次数卡牌；Curse 系统（改判/锻造/化经验）；两种战斗风格（时机判定 / 概率）；伙伴信任-怀疑-依赖影响结局 | 同上 |
| 物品 | **100+ 武器与物品**（仅给数量，未逐件命名） | 同上 |
| 剧情 | 200,000+ 字分支剧情、400+ 手绘插画、约 6 小时/条线 | 同上 |
| FAQ / 信息 | 发售日、$16.99、首发 −10%、Win only、三语、demo 存档可继承 | 同上 + RPG Gamers |

**可写独立页估算：15–18 页**（4 角色 + 4 路线 + 结局/关系 2 + 机制 4–5 + 物品索引 1 + Boss 1 + FAQ 2），**3 类以上**。落 **12–19 页 → 3 分**。

多语言机会：日/中文用**官方本地化名**检索同样零攻略站（Q4/Q5/Q6 实测），理论上 +1；但 +1 后仍不足 20–29 页档，**按档位上限仍记 3**（不重复加分）。

---

## A.7 生命周期

| 项 | 值 |
|---|---|
| 发售日 | **2026-11-10**（距今 **13 天**，定档 ≤8 周） |
| 愿望单 | **>100,000**（AUTOMATON WEST，2026-10-28 抓） |
| demo | 38 条评价、100% 好评（demo appid 4099940）；另有 2026-02 Next Fest demo 的前史 |
| Trends 28 天 | `[待确认]`（未查） |
| 媒体覆盖 | RPG Site / Kotaku ES / 4Gamers / Inven / AUTOMATON / gamespress 多语种 |

→ 未发售、定档 13 天、愿望单 >10 万 → **生命周期 5**（规则：未发售且定档 ≤8 周且 wishlist 强，全部满足）。

---

## A.8 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| **需求** | **0** | 复核后独立意图 **9 < 20** → 门禁淘汰；攻略型 1/9 = 11.1% < 30%（[词库](keyword-results/annihilated.md)，§A.2 复核表） |
| 竞争 | 5 | 6 条查询 **0 家专门攻略站**，`P=0`；但这是「英文检索面不存在」而非空位（§A.4） |
| 内容扩展 | 3 | 4 角色 + 4 路线 + 机制 4 + 结局 + 100+ 物品，15–18 页 / ≥3 类（[Steam 商店页](https://store.steampowered.com/app/2638080/)） |
| 生命周期 | 5 | 2026-11-10 定档（13 天）+ 愿望单 >100k（[AUTOMATON](https://automaton-media.com/en/news/annihilated-a-dark-indie-vn-card-battler-that-forces-you-to-save-only-one-member-of-a-physically-and-mentally-broken-adventurer-party-celebrates-over-100000-steam/)） |
| 参考总分 | **13** | **不适用**：需求 ≤2 命中硬否决，总分不参与分流 |

---

## A.9 成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | `[待实测]` | 建站后记台账 |
| 人工 | `[待实测]` | 目标 ≤6 小时/站 |
| **回本 PV** | `成本 ÷ (RPM/1000)` | RPM **$1–5/千次**（第三方基准，2026-08 检索，非承诺）；现金成本 0 时 PV 只由 token/人力折算决定，**本轮不给单点值**；组合口径 30 天 300 PV ≈ **$0.3–1.5** |

> 抓取说明：本机 `curl` 对 `store.steampowered.com` 三次均超时（`--resolve 104.83.198.104` / `23.36.22.171` 同样 0 字节），改用 **WebFetch 于 2026-10-28** 取 AppDetails 与商店页；`price_overview` 与 `recommendations` 在 API 中为空，价格取媒体报道并标 `[待确认]`。steamdb.info 直连 **403**，CCU `[待确认]`。

---

## A.10 结论

**放弃。**

**第一步 · 硬否决**：需求 **0 ≤ 2** → **直接放弃**（不进总分分流）。双重佐证：
1. 复核后有效词 **9 < 20**，门禁淘汰；攻略型 11.1% < 30%（发售日陷阱之外更糟 —— 连「发售日」之外的攻略需求都没有）。
2. 品牌锚定率 **18.1% < 30%**（§4 规则）→ 判「品牌不成立或撞名严重」。

**第二步 · 总分分流**：不适用（已否决）。参考总分 13（0/5/3/5）**不得用于翻案** —— 这正是 `docs/STRATEGY-选词与评分.md` §2.6 要防的 `[需求0, 内容3, 生命周期5]` 组合。

**最关键的证据**：Q2 `Annihilated game guide tips` 的 7 条结果**没有一条与本作相关**，Q3 `codes` 与 Q5 中文 wiki **0 条结果** —— 通用动词 `annihilated` 在真实 SERP 上无法锚定到本作，靠 9 条导航/发售类词撑不起一个攻略站。

**复采 / 复活条件（供主 Agent 决策，非本轮建议）**：
- 英文品牌角度 **不建议复采**（通用词，换写法也救不回：`Annihilated Death Kumiai` 属于长尾利基，词量只会更少）。
- 唯一有价值的分支：本作在日/中文是**另一个名字** —— 日文「勇者パーティはぜんめつしました。」、中文《勇者小队全灭了》。若要做，属「日/中文本地化站」，需另采 `ja`/`zh` 词库并重新评估变现口径，**超出本轮英文站口径**，须由主 Agent 明确决策。
- 若仍要按英文站复采：等 **D+7 = 2026-11-17**，锚定 `Annihilated Death Kumiai`，并排除 `crossword|meaning|pronunciation|synonym|syllables|svu|academy|empires|movie|netflix`。
