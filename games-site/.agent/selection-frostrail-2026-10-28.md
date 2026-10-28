# 候选分析 — #85 Frostrail（2026-10-28）

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维口径、需求三道闸门、`P = T + 0.5t`、2026-10-28 硬否决 + ≥14 分级）+ §4（品牌锚定率）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/frostrail.md`
> SERP：WebSearch（2026-10-28，美区 `hl=en`；中/日文按原样跑），每条记前 10（不足 10 条如实记）
> 一手抓取限制：`store.steampowered.com` / `api/appdetails` / `steamdb.info` 本机 TCP 超时或 403（2026-10-28 实测）→ 发售日、wishlist、CCU 逐条标来源类型（官方 Steam 新闻 = 一手引用 / 第三方追踪 = 二手）
> 未做：未建站、未改站点目录、未改 `CANDIDATE-POOL.md`、未改 `INDEX.md`、未 commit

## 0.1 本轮方法论补充（影响结论）

**WebSearch 的 SERP 对未发售游戏的新建攻略站会漏报。** 6 条查询的前 10 里没有一家专门攻略站（`P(SERP)=0`），但**域名实测**（`dig` + 直取 HTML）发现 **2 家英文专门攻略站**已在跑，且都在 4 周内更新：

| 站 | 实测内容 | 更新日 |
|---|---|---|
| `frostrailguide.com` | 13 个攻略页（train / survival / crafting / resources / weapons / characters / locations / expeditions / multiplayer / gameplay / guides / release-date / early-access）+ 3 条 news | 首页最新日期 **2026-10-07**（21 天前） |
| `frostrailguide.wiki` | 12 个内容页（train / survival / scavenging-crafting / enemies / map-locations / co-op-multiplayer / gameplay / demo / faq / release-date / system-requirements / what-is） | 页面日期 **2026-10-20**（8 天前） |

`23-Profile` 写「MUST NOT 把『搜不到』当『没有』」，故本报告同时给 `P(SERP)=0` 与 `P(实测)=2.0`，**主口径取实测**。
`frostrail.wiki` 本身**未注册**（`dig` 无 A 记录），`frostrailwiki.com` / `frostrail.guide` / `frostrail.co` 同样无 A 记录。

---

## 一、基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **3517740** | 官方 Steam 新闻 URL（`store.steampowered.com/news/app/3517740/...`）+ SteamDB 入口，2026-10-28 |
| 开发 / 发行 | **FakeFish**（《Barotrauma 潜渊症》团队，芬兰）/ **Shiro Unlimited**（Shiro Games 发行臂） | [Gematsu](https://www.gematsu.com/games/frostrail)、[gamerfridge 开发者采访](https://gamerfridge.com/2025/04/10/barotrauma-developer-unveils-its-next-co-op-survival-game-a-dieselpunk-fps-where-your-mobile-fortress-is-a-train/) |
| 类型 | 柴油朋克开放世界**生存 FPS**（含恐怖要素）；单人或 1–4 人 co-op；基地 = 装甲蒸汽列车「Eden Engine」 | 同上 |
| 发售 | **Q4 2026 抢先体验（PC/Steam），具体日未公布** | [Game8 release-date 文](https://game8.co/articles/release-dates/frostrail-release-date-and-time)、[官方 Steam news](https://store.steampowered.com/news/app/3517740/view/712287592723253230) |
| Demo | Steam Next Fest 2026-10-19 – 10-26；峰值同时在线 **≈8,834**（第三方追踪，另一家记 8,843；24h 峰值 4,417） | [outputlag Next Fest 排行](https://outputlag.com/news/steam-next-fest-october-2026-the-most-played-demos-by-the-numbers/)、[playtestgames](https://playtestgames.net/games/3517740) |
| wishlist / beta | **500K wishlist**（官方 Steam 新闻标题「Frostrail Closed Beta & 500K Wishlists - Thank You!」）；封闭测试 2026-08-31 – 09-08，7 万+ 玩家 | [官方 Steam news](https://store.steampowered.com/news/app/3517740/view/671753291385801057?l=english)（一手引用）、[gamespress](https://www.gamespress.com/uk-UA/Frostrails-Closed-Beta-Arrives-August-31) |
| 语言 | 英/法/德/西(西)/葡(巴)/俄/波/简中 —— **无日文** | [gameliner](https://gameliner.nl/games/frostrail/7117-1)、[Game8](https://game8.co/articles/release-dates/frostrail-release-date-and-time) |
| 词库 5 数字 | 原始 121 / 去重 100 / **有效词 31** / 噪声 69.0% / 锚定率 **31.0%** | `keyword-results/frostrail.md` 头部 |

---

## 二、硬门槛（有效词逐条复核）

### 2.1 内容可写性：**通过**

列车作为移动基地 → 升级树（引擎/装甲/车厢/武器站/工作台/储物）+ 温度系统 + 燃料压力 + 分支铁轨 + 精炼制作 + 敌人谱系，机制与实体都可核验，不是「无机制/纯氛围」类。

### 2.2 有效词复核：**31 → 31（0 剔除），独立意图 30**

逐条核对 31 个词**是否真指向本作**（`frost` 是通用前缀，必须逐条查）：

| 检查项 | 结果 |
|---|---|
| 撞名剔除 | **0 条**。31 条全部带完整 `frostrail` 且语境为本作（`how to get charcoal`、`max players`、`player count`、`closed beta`、`save game`） |
| 已剔除的 69 条噪声抽查 | `frostrail *`（Frost Rail 建筑产品）、`frostrain *`（另一款免费列车 roguelike）、`frost train *`、`frostpunk *`、`frostallion *`（Palworld 坐骑）、`frostborn`、`frostline`、`frostfire`、`frostgrave`、`monsterhunterrise.wiki.fextralife.com/Frostrail`（MH Rise 同名**武器**）—— 剔除正确 |
| 近重复合并 | `frostrail ps5 release date` / `frostrail release date ps5` → 1 条 → **独立意图 30** |
| 有效词数 | **31（独立 30）** |

**但品牌锚定率 31.0% 落在 §4 的「30–50% 可疑」带 → 规则要求「先查锚定词写法/别名 → 重采一次」。本轮无权采词，未重采，只做风险标注**：

- 已知别名/正式标题仅为 `Frostrail`，暂无中文官方名之外的英文别名（中文媒体译名「冰原轨道 / 霜轨」不构成英文锚定词）；
- 重采时建议把锚定词写成 `Frostrail game` / `Frostrail FakeFish`，并把 `frostrail`、`frostrain`、`frost train` 明确列入黑名单；
- **若重采后有效词 <20 → 按 `需求不足` 回退**（本报告结论对词数敏感性高，见 §9.3）。

### 2.3 页型分布复核

| 页型 | 条数 | 说明 |
|---|:--:|---|
| How-to | **3** | `how to get charcoal`、`how to join friends`、`how to save` |
| Info/发售 | 16（独立 15） | demo / download / price / ps5 / reddit / release date / steam / xbox / release date reddit 等 |
| Other | 12 | 品牌裸词、charcoal、closed beta、discord、game、game engine、gameplay、max players、player count、playtest、save game、survival game frostrail |

> `ps5` / `xbox` 相关的 4–5 条是**推测性平台搜索**（官方只公布 PC/Steam）→ 可写但转化低，按 FAQ 处理。

---

## 三、需求（三道闸门）

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **31**（独立 30） | 通过（余量仅 11 条，贴线） |
| 攻略型占比 | **3 / 31 = 9.7%** | **<30% → 触发「发售日陷阱」→ 需求封顶 3** |
| 页型覆盖 ≥3 类各 ≥3 词 | How-to 3 / Info 16 / Other 12 → 3 类各 ≥3 | 形式上通过（但 Only 1 类是真攻略型） |
| 双源 | ① Suggest（31 词）② 官方 500K wishlist ③ Next Fest demo 峰值 8,834 ④ 封闭测试 7 万+ 玩家 | 通过（不是单源） |
| 单源修正 | 需求**词**只有 Suggest 一个来源（上面 ②③④ 是热度不是词源） | 同样指向封顶 3 |

**判定：需求 = 3**（词量档 25–39 → 3；两条修正都只封顶到 3，不额外下压）。

> 与 #84 的区别：本作有 3 条**真·玩法求助词**（charcoal / join friends / save），虽少但方向对；#84 是 0 条。这是本作需求给 3、#84 给 2 的唯一区别。

---

## 四、竞争（6 条固定查询 + 域名实测）

### Q1 EN `Frostrail game wiki`（返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | gry-online.pl/gry/frostrail/ze6d3a | 波兰语数据库（不计） |
| 2 | ixbt.games/games/frostrail | 俄语数据库（不计） |
| 3 | game8.co/articles/release-dates/frostrail-release-date-and-time | **大站单篇**（Game8 未建本作专题页，不计） |
| 4 | gematsu.com/games/frostrail | 数据库（不计） |
| 5 | ign.com.cn/frostrail | 中文 IGN 库（不计） |
| 6 | ppe.pl/gry/frostrail/19193 | 波兰库（不计） |
| 7 | whatoplay.com/games/frostrail/ | 聚合（不计） |
| 8 | store.steampowered.com/news/app/3517740/view/837214361691882062 | 官方新闻（不计） |
| 9 | es.kotaku.com/frostrail-quiere-cambiar-la-supervivencia-cooperativa… | 媒体（不计） |
| 10 | playdome.hu/jatek/10069/frostrail | 匈牙利库（不计） |

### Q2 EN `Frostrail game guide tips`（返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | eurogamer.de/frostrail-ist-absolut-lebensbeneinend-… | 大站体验文（不计） |
| 2 | gry-online.pl/gry/frostrail/ze6d3a | 库（不计） |
| 3 | steamcommunity.com/app/**2735630** | **意图错位**——那是 *Frostrain*（另一款免费列车 roguelike）的社区 |
| 4 | store.steampowered.com/news/app/3517740/view/520837698904129747 | 官方 FAQ（不计） |
| 5 | gameroamer.net/?p=13882 | 日文介绍博客（非专门，且日文不计 P） |
| 6 | edivaldobrito.com.br/frostrail-sobrevivencia-congelante-trem/ | 巴西媒体（不计） |
| 7 | gamerstogether.cz/en/frostrail-co-op-survival-fps-train-early-access/ | 媒体（不计） |
| 8 | 9game.cn/frostrail/12001700.html | 中文媒体（不计） |
| 9 | itch.io/post/15336951 | 无关（意图错位） |
| 10 | steamcommunity.com/app/2735630（hu） | 同 #3，意图错位 |

> 前 10 **0 家专门攻略站**；`guide` 查询被「Frostrain 的社区指南」污染（同名系列陷阱，与 #84 的歌名污染同型）。

### Q3 EN `Frostrail codes`（仅返回 5 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | esportsba.fhyx.hk/item/13876.html | 中文 key 商城（意图错位，不计） |
| 2 | gameliner.nl/games/frostrail/7117-1 | 数据库（不计） |
| 3 | freegames.codes/game/79768/frostrail/ | 免费游戏 tracker（意图错位，不计） |
| 4 | de.gamesplanet.com/community/frostrail-steam-key--7608-1 | key 转售（不计） |
| 5 | keysforgames.com.ar/games/steam-games/frostrail/ | key 转售（不计） |

> 无兑换码页 → `codes` 意图**空白**（EA 单机 co-op 无兑换码）。结果 5 条 <10，按 §2.3 按 `P=0` 处理。

### Q4 ZH `Frostrail 攻略 柴油朋克 生存 游戏`（返回 4 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | store.steampowered.com/news/app/3517740/view/837214361691882062?l=tchinese | 官方新闻（不计） |
| 2 | playeatsleep.fun/en/frostrail-a-new-steam-themed-survival-fps-game/ | 英文媒体（不计） |
| 3 | gamerfridge.com/2025/04/10/… | 媒体采访（不计） |
| 4 | vandal.elespanol.com/noticia/1350779762/… | 西语媒体（不计） |

> **中文攻略为零**，连聚合「攻略列表页」都没排进来。

### Q5 ZH `Frostrail 游戏 wiki 中文`（返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | taptap.cn/app/751930/all-info | 聚合（不计） |
| 2 | 9game.cn/frostrail/10991896.html | 中文媒体（不计） |
| 3 | ku.gamersky.com/2025/frostrail/ | 游民库（不计） |
| 4 | 9game.cn/frostrail/gonglue-0-1/ | 九游**攻略列表页**（聚合/非专门，不计 P） |
| 5 | fhyx.com/box/v2/item/13876.html | 凤凰商城（不计） |
| 6 | ign.com.cn/frostrail | 库（不计） |
| 7 | 43u.com/wygl/176650.html | 中文媒体（不计） |
| 8 | gamemad.com/index.php/news/124547 | 中文媒体（不计） |
| 9 | ali213.net/news/html/2025-4/923195.html | 中文媒体（不计） |
| 10 | xiaohongshu.com/discovery/item/6805dbaa… | 社区帖（不计） |

> 中文**没有**本地独立攻略站，也没有任何 `/zh-cn/` 本地化攻略页 → 多语言空位成立（游戏**官方支持简中**）。

### Q6 JA `Frostrail 攻略 ゲーム 日本語`（返回 9 条，另 1 条为别作）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | ailvgames.com/2025/12/06/frostrail-introduction/ | 个人介绍博客（非专门，不计 P） |
| 2 | ailvgames.com/2025/12/page/6/ | 同上归档页（不计） |
| 3 | news.denfaminicogamer.jp/news/250411o | 媒体（不计） |
| 4 | gamebiz.jp/news/421972 | 媒体（不计） |
| 5 | 4gamer.net/games/900/G090034/20261008050/ | 媒体（不计） |
| 6 | gamewith.jp/gamedb/13605/articles/54204 | GameWith 库文章（未建 wiki hub，不计） |
| 7 | topics.smt.docomo.ne.jp/…（Game\*Spark 转载） | 媒体（不计） |
| 8 | game-news.tokyo/news/924534 | 媒体（不计） |
| 9 | **think-game.com/archives/53942810.html** | **意图错位**——《フォレスティア～ちいさな町の牧場ライフ～》攻略（别作） |
| 10 | game-news.tokyo/news/907902 | 媒体（不计） |

> 日文**零攻略站**；且游戏**无日文支持** → 日文多语言机会**不计 +1**（官方本地化决定价值）。

### Q7 补充（规则外，验证 Game8/Fandom 是否建了 hub）`Frostrail game8 wiki walkthrough database page`（返回 8 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | mmo13.ru/games/145820_frostrail | 俄语库（不计） |
| 2 | monsterhunterrise.wiki.fextralife.com/Frostrail | **意图错位**——MH Rise 的 Charge Blade 同名武器页 |
| 3 | gematsu.com/games/frostrail | 数据库（不计） |
| 4 | videogamedata.com/3517740/frostrail/ | Steam 数据站（不计） |
| 5 | goha.ru/games/frostrail | 库（不计） |
| 6 | deals.razer.com/games/frostrail | 商店（不计） |
| 7 | gameguru.ru/game/frostrail/ | 库（不计） |
| 8 | whatoplay.com/games/frostrail/ | 聚合（不计） |

> 结论：**Game8 只有 1 篇 release-date 文章，没有专题页**；Fextralife 无本作 wiki；无 Fandom/wiki.gg 实例（`frostrail.fandom.com` 与 `frostrail.wiki.gg` 的解析均为 CDN 通配，直取 403/超时，无真实内容）。

### Q8 域名实测（关键补充，非 SERP）

| 站 | 判定 | 依据 |
|---|---|---|
| **frostrailguide.com** | **厚 `T=1`** | 独立域名、只做本作；13 个攻略页 ≥6 类（train / survival / crafting / resources / weapons / characters / locations / expeditions / multiplayer / gameplay / guides / release-date / early-access）+ 3 条 news；首页最新 **2026-10-07**（21 天前，在 4 周内） |
| **frostrailguide.wiki** | **厚 `T=1`**（附注偏薄） | 独立域名、只做本作；12 个内容页 ≥5 类；日期 **2026-10-20**；但单页正文 ≈1,100–1,140 词（比 #84 对手的 3,700 词浅）→ 按定义（覆盖 ≥3 类 + 4 周内更新）计厚，实质偏薄 |
| game8.co | 非专门（不计） | 单一 release-date 文章，站点不围绕本作 |
| gematsu / gry-online / 4gamer / GameWith / IGN | 非专门（不计） | 数据库/媒体/库文章 |
| gameroamer / ailvgames | 非专门（不计 P） | 个人博客介绍文，不围绕本作持续更新 |

### 4.1 P 值

| 口径 | T | t | P | 竞争分 |
|---|:--:|:--:|:--:|:--:|
| SERP-only（6 条查询） | 0 | 0 | **0** | 5 |
| **SERP + 域名实测（主口径）** | **2** | 0 | **2.0** | **2**（「2 家厚站，难」） |
| 敏感度：frostrailguide.wiki 判薄 | 1 | 1 | 1.5 | 2（仍在 (1,2] 边界） |

**取竞争 = 2。** 敏感度：按 `(1,2]` 档取 3 → 总分 +1（14）；若再发现第 3 家 → `P=2.5–3` → 「需主管决策」；`P≥3` → 硬放弃。

---

## 五、内容扩展（只数可核验的具体实体）

| 类别 | 可核验实体 | 来源 |
|---|---|---|
| 列车升级 | Eden Engine 燃料与压力、装甲强化、武器站车厢、工作台/工坊车厢、储物车厢、居住车厢、引擎速度升级 —— **7 项** | [官方 Steam news「Welcome to Frostrail」](https://store.steampowered.com/news/app/3517740/view/837214361691882062)、[Gematsu](https://www.gematsu.com/games/frostrail) |
| 生存机制 | 温度/严寒（远离列车可达 **-60°C**，炉火正常时车厢 **+20°C**）、暴风雪、燃料枯竭、食物、弹药稀缺、热量管理 —— 6 项 | 同上 + [gamerfridge 采访](https://gamerfridge.com/2025/04/10/barotrauma-developer-unveils-its-next-co-op-survival-game-a-dieselpunk-fps-where-your-mobile-fortress-is-a-train/) |
| 敌人 | Revenant（快速亡灵）、大型 boss（预告出现，**未具名**）、eldritch horror 体系 —— 3 项（**具名极少**） | 同上 |
| 世界/地图 | 分支铁轨、手动扳道、需炸开的路障、定居点废墟、地堡 dungeon、北方「救赎之地」—— 6 项（**无具名地区**） | 同上 + [GRYOnline](https://www.gry-online.pl/gry/frostrail/ze6d3a) |
| 制作 | 精炼厂、金属/布/塑料资源、工作台、冶炼—制作链路 —— 4 项 | 同上 |
| 联机 | 1–4 人、分工（驾驶/探索/守卫）—— 2 项 | 同上 |

**可写页数**：把上表收敛成独立页（温度系统 / 燃料与引擎 / 车厢类型 / 武器站 / 精炼制作 / Revenant / Boss / 地图与铁轨 / 扳道 / 地堡 / 生存基础 / 联机分工 / 弹药管理 / 暴风雪 / 结局与救赎之地）≈ **16 页，≥3 类** → **12–19 档 = 3 分**。
**不给 4 分的理由**：没有公开的具名清单（无武器表、无物品配方表、无具名 Boss、无具名地区），20–29 页缺素材支撑；`19-Profile` 的「可写 = 有可核验来源」在这里卡住。

**+1 多语言**：中文攻略实测为零（Q4/Q5），游戏**官方支持简中** → 中文空位成立，**+1**。
**+0 日文**：日文零攻略，但游戏**无日文支持** → 按「官方本地化决定价值」不重复加分。

→ **内容扩展 = 3（base）+ 1 = 4**。

---

## 六、生命周期

| 证据 | 值 | 判断 |
|---|---|---|
| 发售日 | **Q4 2026 EA，具体日未公布**（`[待确认]`，2026-10-28 查） | 未定档 → 看 wishlist 强度 |
| wishlist | **500K**（官方 Steam 新闻标题，一手引用） | 「强 wishlist」成立 |
| demo / beta | Next Fest demo 峰值 **≈8,834** 同时在线；封闭测试 7 万+ 玩家 | demo 有量，非空转 |
| 更新节奏 | 2026-04 公开测试 → 2026-08-31 封闭测试 → 2026-10-07 新预告 → 2026-10-19 demo；官方明确 EA 期约 1 年 | 持续放料，节奏密 |
| Trends 28 天 | `[待确认]`（未取到，未估算） | — |

**判定：生命周期 = 4**（§2.5「未定档但有强 wishlist / demo」）。
若 EA 落在 **11 月**（≤8 周）且 wishlist 保持 → 上调 5。

---

## 七、四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **3** | 有效词复核实测 **31（独立 30）**，0 条撞名（`frostrail/frostrain/frostpunk/frostallion` 69 条已正确剔除）；**攻略型仅 3/31 = 9.7%**（3 条 how-to）→ 发售日陷阱封顶 3；词源单源 Suggest 亦封顶 3（[词库](keyword-results/frostrail.md)） |
| 竞争 | **2** | **`P = 2.0`（2 家厚站）**：[frostrailguide.com](https://frostrailguide.com/) 13 攻略页 ≥6 类、2026-10-07 更新；[frostrailguide.wiki](https://frostrailguide.wiki/) 12 页 ≥5 类、2026-10-20 更新——两家都未进 SERP 前 10，靠域名实测才发现。Game8 仅 1 篇 release-date 文章（不计） |
| 内容扩展 | **4** | 列车 7 项可升级件 + 6 项生存机制 + 6 项世界/铁轨 + 4 项制作 + 3 项敌人 ≈16 页 ≥3 类 = 3 分；**无具名武器/物品/地区清单 → 到不了 20 页**；中文攻略为零且游戏有简中 → **多语言 +1**（[官方 Steam news](https://store.steampowered.com/news/app/3517740/view/837214361691882062)） |
| 生命周期 | **4** | 未定档（Q4 2026）但有**官方 500K wishlist** + Next Fest demo 峰值 ≈8,834 + 封测 7 万玩家（[官方 Steam news](https://store.steampowered.com/news/app/3517740/view/671753291385801057?l=english)、[outputlag](https://outputlag.com/news/steam-next-fest-october-2026-the-most-played-demos-by-the-numbers/)）；Trends `[待确认]` |
| **总分** | **13** | 竞争取 3 → 14；需求若能重采到 4 → 14 |

---

## 八、成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | **[待实测]** | 建站后回填台账 |
| 人工 | **[待实测]**（目标 ≤6 小时/站） | 台账「实际人工小时」 |
| **回本 PV** | `总成本 ÷ (RPM/1000)`，RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺） | **组合回本**口径 |

现金成本为 0，单站回本只在折算 token/人工后成立。折算示例（**示例，不是预估**）：每投入 ¥10（≈$1.4）→ RPM $1 需 **1,400 PV**、RPM $5 需 **280 PV**；跑通线 30 天 300 PV ≈ **$0.3–1.5**。

本作的回收结构与 #84 不同：**没有发售窗口红利可吃**（Q4 2026 无具体日），但**有 500K wishlist 的转化势能**——若 EA 上线时我们的站已收录，前 4 周能吃到一波；这也是为什么生命周期给 4 而不是 2。

---

## 九、结论

### 9.1 两步判定

1. **硬否决**：`需求 = 3 > 2`、`竞争 = 2 > 1` → **不命中否决**，进总分分流。
2. **总分分流**：`3 + 2 + 4 + 4 = 13` → 落 **12–13「低优先」**；例外可建要求 `需求 ≥4 且 竞争 ≥3`，本例 `需求 3 < 4` → **例外不成立**。

### 9.2 本轮结论：**低优先（13）→ 留池观察，不立即建站**

| 取法 | 需求 | 竞争 | 内容 | 生命 | 总分 | 分流 |
|---|:--:|:--:|:--:|:--:|:--:|---|
| 本轮主口径 | 3 | 2 | 4 | 4 | **13** | **低优先（留池观察）** |
| 竞争取 `(1,2]` 档 = 3 | 3 | 3 | 4 | 4 | **14** | 可建 |
| 复采后词量上 40–59 且攻略型 ≥40% → 需求 4 | 4 | 3 | 4 | 4 | 15 | 可建 |
| 内容不给多语言 +1 | 3 | 2 | 3 | 4 | 12 | 低优先（同档） |

**这是「低优先↔可建」的边界（13 与 14 一线之隔），按 `23-Profile` 总分 12–14 边界 MUST 标「需主管决策」。**

**我的建议：不立刻建，先做两件低成本的事再定：**

1. **复采一次词**（§4 要求，锚定率 31.0% 在可疑带）。目标：确认有效词能否过 40 且攻略型 ≥40%。若仍是 31 词、攻略型 10%，需求就是 3，总分 13 → 维持低优先。
2. **等 EA 定档日**（Q4 2026 内，预计 11–12 月）。定档当天若落在 8 周内 → 生命周期升 5，总分 14 → 可建；同时可确认真实首发 CCU 与是否出现第 3 家攻略站。

### 9.3 若主 Agent 决定建（页型建议，`codes`/`tier` 明确不建）

| 页型 | 首批 | 上限 | 说明 |
|---|:--:|:--:|---|
| 列车/升级（本作独占题材） | 2 | 5 | 引擎燃料与压力、车厢类型与优先级、武器站、装甲、引擎速度 |
| 生存机制 | 2 | 4 | 温度与「离车距离」、燃料经济、弹药管理、暴风雪应对 |
| 制作/资源 | 1 | 3 | 精炼厂、金属/布/塑料、工作台链路 |
| 敌人 | 1 | 2 | Revenant 行为与应对、大型怪物（EA 后再补） |
| 地图/位移 | 0 | 2 | 扳道与铁轨分支、地堡/废墟 |
| 新手/FAQ | 1 | 4 | 新手前 2 小时、联机与分工、发售/平台/价格/系统需求 |
| **合计** | **7** | **20** | 首批 ≥8,000 词；`codes` 0 页、`tier list` 0 页（无此机制，不硬造） |

差异化红线：对手 `frostrailguide.com` 已铺 13 页宽面但**浅**；我们要么做**温度-距离-燃料的数值模型**、要么做**车厢优先级路线**，否则同质。

### 9.4 规则闭环建议（交主 Agent）

1. **竞争检查加「域名实测」步骤**（与 #84 同一条）：本轮两个候选 SERP 都是 `P=0`，实测都是 `P=2.0`；未发售游戏的攻略站建立速度已快于搜索引擎收录，只跑 SERP 会系统性低估竞争。建议在 `23-Profile`「竞争评分规则」加一条：
   > MUST 跑完 6 条 SERP 后，对 `{slug}.wiki`、`{slug}game.wiki`、`{slug}guide.com`、`{slug}guide.wiki`、`{slug}.com` 做 `dig` + 直取首页，数站内页与日期；实测存在的专门站 MUST 计入 `P`（与「MUST NOT 把搜不到当没有」一致）。
2. **锚定率 30–50% 可疑带的处置要可执行**：规则要求「重采一次」，但分析员无权采词 → 应把「可疑带 → 退回关键词研究员复采」写成显式交接状态（`需复采`），否则分析员只能带着未验证的需求打分。
3. **同名系列污染要进采集器黑名单**：本作的 `frostrail`（建筑产品）、`frostrain`（另一款列车 roguelike，Steam app 2735630，其社区指南会污染 `guide` 类查询）、`frost train`、`frostallion`（Palworld）、`Frostrail`（MH Rise 武器）全部是跨品类同名，建议写进 `harvest-keywords.mjs` 的噪声规则库而非每次人工剔除。
