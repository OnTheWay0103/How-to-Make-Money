# 候选分析 — #83 Dumpster Gang — **放弃（需求硬否决；11）**

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维 20 分 / 需求三道闸门 / 竞争 `P = T + 0.5t` / 硬否决 + ≥14 分流）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/dumpstergang.md`
> 一手数据：Steam AppDetails `appid=2870790`（2026-10-28 抓取）；SERP 走 WebSearch（2026-10-28，美区英文，中/日文按原样跑）
> 未做：未建站、未写攻略、未改站点目录、未重采词、未改 `CANDIDATE-POOL.md` / `INDEX.md`、未 commit
> 动态字段（价格 / 评测数 / 愿望单 / CCU / Trends）抓不到一律 `[待确认]` + 抓取日，**未估算**

---

## 1. 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **2870790**（demo `4895870`） | [Steam AppDetails](https://store.steampowered.com/api/appdetails?appids=2870790&l=english)（2026-10-28 抓取） |
| 开发 / 发行 | Coyote House Games（Jake & Sam，工作室首作）/ Curve Games | 同上 + [Curve 官方页](https://curvegames.com/our-games/dumpster-gang/) |
| 类型 | 1–4 人 co-op 物理沙盒（浣熊偷盗）；Action / Casual / Indie / Simulation；**单人 + online co-op，无本地分屏，跨平台联机未确认** | 同上 |
| 发售 | **2026-12-03**（PC Steam / Xbox on PC；Game Pass 首发，第三方口径）；抓取时 `coming_soon=true`，距发售 **36 天** | 同上 + [gamespress 新闻稿 2026-10-19](https://www.gamespress.com/it/Rally-the-Raccoons-Co-op-Sandbox-Game-Dumpster-Gang-Launches-on-PC-Dec) |
| 价格 | `[待确认]`（`price_overview` 为空，商店页「即将推出」） | 同上 |
| 评测 / 好评 | **无用户评测**（未发售） | 同上 |
| demo | **在架**，含教程 + 前两关（demo app 4895870） | [Steam demo 页](https://store.steampowered.com/app/4895870/Dumpster_Gang_Demo/?l=english) |
| 愿望单 / CCU | `[待确认]`（未取到一手数据） | — |
| 语言 | 10 种：英/简中/法/意/德/西(西)/日/韩/葡(巴)/俄；**无繁中** | Steam AppDetails（一手） |
| 词库 5 数字 | 原始 108 / 去重 86 / **有效词 39** / 噪声 54.6% / 品牌锚定率 45.4% / 品类 coop | `keyword-results/dumpstergang.md` 头部 |

---

## 2. 硬门槛（有效词复核 + 内容可写性）

**内容可写性通过**：有任务、帽子能力、藏身处、捕兽人（Exterminator）、攀爬/通风管、战利品等可写实体；但**官方未描述任何技能树 / 经验 / 货币 / 升级系统**（Steam 论坛两次提问无回复，见 `dumpstergang.online`）——这决定了内容深度上限很低。

### 2.1 有效词复核（「dumpster」通用词逐条复核）

**A. 判为撞名/通用义，剔除 1 条**：

| 剔除词 | 理由 |
|---|---|
| `dumpster gang toys` | 指向商品/玩具意图，非游戏；无可核验实体（玩具线未在官方渠道确认） |

> 研究员已剔除 46 条通用 `dumpster` 词（`dumpster cost` / `dumpster diving` / `gang beasts` 等），复核认可；剩余 39 条中仅 `toys` 一条仍有歧义。

**B. 近重复合并 18 组（−18，平台/价格/发售日变体为主）**：

| 组 | 原始条 | 合并后 | 省 |
|---|---|:--:|:--:|
| 发售日（`release date` / `game release date` / `ps5 release date` / `game ps5 release date`） | 4 | 2（通用 / PS5） | 2 |
| Steam（`steam` / `game steam` / `steam game`） | 3 | 1 | 2 |
| 价格（`price` / `game price`） | 2 | 1 | 1 |
| Switch（`switch` / `game switch` / `nintendo switch`） | 3 | 1 | 2 |
| Xbox（`game xbox` / `game xbox console` / `game xbox one` / `on xbox`） | 4 | 1 | 3 |
| PS5（`game ps5` / `coming to ps5`） | 2 | 1 | 1 |
| 跨平台（`crossplay` / `game crossplay` / `will … be crossplay` / `game cross platform`） | 4 | 1 | 3 |
| 主机（`console` / `game console`） | 2 | 1 | 1 |
| PlayStation（`playstation` / `game playstation`） | 2 | 1 | 1 |
| 品牌/泛词（`dumpster gang` / `dumpster gang game` / `video game`） | 3 | 1 | 2 |

→ **复核后有效词 = 39 − 1 − 18 = 20 个独立检索意图**（研究员 39）。仍保留的独立意图：crossplay、game pass、release date、ps5 release date、xbox release date、price、steam price、xbox price、platforms、steam、steam deck、steamdb、switch、xbox、ps5、dumpster gang、gameplay、console、playstation、trailer。

### 2.2 内容可写性

- 官方商店页：浣熊 1–4 人、偷/搬/扔/砸、攀爬/通风管、任务、藏身处装饰、帽子能力、捕兽人追捕 —— [Steam](https://store.steampowered.com/app/2870790/) / [Curve](https://curvegames.com/our-games/dumpster-gang/)
- 一手 demo：教程 + 前两关，5 类玩笑任务（推垃圾桶 / 堵马桶 / 煮咖啡 / 挤牛奶 / 偷鸡）—— [gamespress 新闻稿](https://www.gamespress.com/it/Rally-the-Raccoons-Co-op-Sandbox-Game-Dumpster-Gang-Launches-on-PC-Dec)
- 无技能树/XP/货币/商店 → **写不出 build / tier / 数值页**

---

## 3. 需求

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **20**（研究员 39，复核合并后 20） | **刚过判定线** |
| 攻略型占比（自数） | 仅 Co-op/Multiplayer 3 条 = **3 / 39 = 7.7%**（20 意图口径 1/20 = 5%） | **<30% → 需求封顶 3** |
| 页型覆盖 | Co-op 3、Info/FAQ 26、Other 10 —— **只有 2 类 ≥3 词** | 需求 3 要求「≥3 类页型各 ≥3 词」→ **不满足** |
| 词量档 | 独立意图 20 → 落 **20–24 档 = 2 分** | — |
| 双源 | 词源只有 Suggest；但第三方有 Game Pass 首发、demo、多家媒体稿 | 不触发单源封顶 |
| 品牌锚定率 | **45.4%**（<50%），噪声 54.6%（`dumpster` 通用义） | 品牌弱；标题 MUST 加 `raccoon co-op` 定位 |

**需求 = 2**。三条独立依据都指向 ≤3，其中两条指向 2：
1. 独立意图 20 → 20–24 档 = 2；
2. 页型只有 co-op + FAQ 两类 ≥3 词 → 拿不到 3 分的附加条件；
3. 攻略型 7.7%，封顶 3（不往上救）。

> 结构性问题：39 条里 26 条是「平台/发售日/价格」变体，本质是**一条意图的 26 种问法**，拆完只剩 ~20 个真实搜索需求，且没有一个 codes/tier/boss/build/weapon 词（`guide` / `wiki` / `codes` / `boss` / `beginner guide` 五条后缀**全部返回 0 条建议**）。

---

## 4. 竞争（6 条固定查询）

### 4.1 SERP 逐条记录（2026-10-28）

**Q1 EN `"Dumpster Gang" wiki`（10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | curvegames.com/our-games/dumpster-gang/ | 发行商官网（不计） |
| 2 | game8.co/articles/release-dates/dumpster-gang-release-date-and-time | 综合站单篇（不计） |
| 3 | gamescom.global/en/product/dumpster-gang | 展会数据库（不计） |
| 4 | in.ign.com/dumpster-gang | 数据库（不计） |
| 5 | xbox.com/en-au/games/store/dumpster-gang/9nt0wk0qg9p2 | 商店（不计） |
| 6 | news.17173.com/content/08272026/204159932.shtml | 中文新闻（不计） |
| 7 | **dumpstergang.online/mechanics/hats** | **专属站（计）** |
| 8 | **dumpstergang.online/mechanics/traversal** | 同上 |
| 9 | ign.com/games/dumpster-gang | 数据库（不计） |
| 10 | igdb.com/games/dumpster-gang | 数据库（不计） |

**Q2 EN `"Dumpster Gang" guide`（10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | dumpstergang.online/gameplay | 专属站 |
| 2 | dumpstergang.online/beginner-guide | 专属站 |
| 3 | 163.com/dy/article/L9LRGVB705561FY6_pdya11y.html | 中文新闻 |
| 4 | gameliner.nl/nieuws/pure-chaos-met-wasberen-in-dumpster-gang/56376 | 荷语新闻 |
| 5 | dumpstergang.online/mechanics/hideout | 专属站 |
| 6 | store.steampowered.com/app/4895870/Dumpster_Gang_Demo | 商店 |
| 7 | puls.games/dumpster-gang | 聚合（不计） |
| 8 | store.steampowered.com/app/4895870/（繁中） | 商店 |
| 9 | 9.72141.cn/news/519.html | 中文新闻 |
| 10 | gamespress.com/it/Rally-the-Raccoons-… | 新闻稿 |

**Q3 EN `"Dumpster Gang" codes`（0 条）**

> 无结果。游戏无兑换码（官方 FAQ：未公布任何 codes）→ `codes` 意图**空白且不可写**。

**Q4 ZH `Dumpster Gang 攻略`（2 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | dumpstergang.online/beginner-guide | 专属站（英文） |
| 2 | dumpstergang.online/gameplay | 专属站（英文） |

> 中文**无本地攻略站**；日文 0（见 Q6）。

**Q5 ZH `Dumpster Gang wiki 中文`（7 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | news.17173.com/content/08272026/204159932.shtml | 中文新闻 |
| 2 | 0day.ali213.net/html/2026/159183.html | 中文下载站 |
| 3 | awnchina.cn/…（简中新闻稿） | 中文新闻稿 |
| 4 | playtestgames.net/zh-cn/games/2870790 | demo 聚合 |
| 5 | store.steampowered.com/app/2870790/（繁中） | 商店 |
| 6 | thegamesdb.net/game.php?id=140751 | 数据库 |
| 7 | igdb.com/games/dumpster-gang | 数据库 |

**Q6 JA `Dumpster Gang 攻略 日本語`（2 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | game-kouryaku.info/ghosttrick/chart05.html | **意图错位**（《幽灵诡计》攻略，只因「垃圾场」被混入） |
| 2 | gamebiz.jp/news/434685 | 日文新闻（不计） |

> 日文**无攻略站**。

### 4.2 域名直探（补 6 条查询的盲区）

| 域名 | 实况 | 归类 |
|---|---|---|
| **dumpstergang.online** | 专属 fan 站：beginner guide + gameplay + all systems + Exterminator + hats + hideout + traversal + 平台/发售/价格/co-op/FAQ；内容明确区分「已确认 / 未确认」；新闻时间线到 2026-08-27，但页面引用 10-19 新闻稿与在架 demo | **厚 T=1** |
| **dumpstergang.wiki** | **存在**，专属 fan wiki：Guide / Release Info / Price / Co-op / Platforms / Missions / Raccoons / FAQ；最新文章 **2026-10-25**；**未进 6 条查询前 10**，且存在与其他源的发售/平台冲突说法 | **厚 T=1**（附注：质量存疑） |
| 其余 | 不计 | 商店、数据库、新闻、聚合、错位攻略页 |

### 4.3 P 值

| 站 | 类型 | 判定依据 |
|---|---|---|
| dumpstergang.online | **厚 T=1** | 独立域名 + 围绕本作 + ≥5 类（新手/机制/co-op/平台/FAQ）+ 覆盖 10 月 demo 与 12-03 发售 |
| dumpstergang.wiki | **厚 T=1** | 独立域名 + 8 个分区 + 3 天前更新；未被索引 |
| 其他 | 不计 | 大站单篇、商店、数据库、新闻稿、日文意图错位页 |

**主口径：`P = 1 + 1 = 2.0` → 落 `(1, 2]` → 竞争 3（1–2 家厚站，可做但要差异化）。**

> **敏感度**：若只数 SERP 前 10 出现的站 → `P = 1.0` → 竞争 4；若 dumpstergang.wiki 判薄 → `P = 1.5` → 仍 3。**无论取 3 还是 4，都救不回需求否决。**

---

## 5. 内容扩展

**可核验实体**：

| 类别 | 具体实体 | 来源 |
|---|---|---|
| 任务（5） | 推垃圾桶、堵马桶、煮咖啡、挤牛奶、偷鸡 | [gamespress 新闻稿](https://www.gamespress.com/it/Rally-the-Raccoons-Co-op-Sandbox-Game-Dumpster-Gang-Launches-on-PC-Dec) + demo |
| 机制（6） | 攀爬、通风管潜行、搬运/投掷/砸、被捕后队友营救、捕兽人陷阱、藏身处装饰 | [Steam](https://store.steampowered.com/app/2870790/)、[dumpstergang.online](https://dumpstergang.online/) |
| 装备（1 类） | 帽子（能力各异，**无具名清单**） | 官方页仅说「hats with unique abilities」 |
| 模式/平台（4） | 1–4 人 online co-op、跨平台未确认、Steam / Xbox on PC、Game Pass 首发 | Steam + 新闻稿 |
| FAQ（4） | 发售日、价格、demo 内容、无本地分屏 | Steam + demo 页 |

→ 可写 **8–11 页**（新手 1、机制 4–5、任务 1、co-op 1、FAQ 2–3）→ **内容扩展 2**（6–11 页档）。
→ 不足 3 的理由：**没有具名帽子/道具/敌人/Boss 清单，没有技能树/数值系统**，凑不出 12 页有来源的独立页；任何「帽子排行 / tier list / codes / 捕兽人打法」都无事实基础（专属站自己也这么说）。

> 多语言机会：中文只有新闻与商店（无本地攻略），本可 +1；但基础页数已在 2 分档边缘，加分不改变档位（8 → 8–11 页仍 ≤11），**不加**。

---

## 6. 生命周期

| 证据 | 值 | 来源 |
|---|---|---|
| 发售日 | **2026-12-03**（距今天 **36 天**，≤8 周） | Steam AppDetails（一手） |
| 平台 / 分发 | PC Steam、Xbox on PC、**Xbox PC Game Pass 首发**（第三方） | gamespress 新闻稿 |
| demo | 在架，教程 + 前两关 | Steam demo `4895870` |
| 愿望单 / CCU / Trends | `[待确认]`（均未取到一手） | — |
| Next Fest | 参加（demo 在架，第三方） | 新闻稿 |

**生命周期 = 4**：定档 ≤8 周 + demo 在架 + Game Pass 首发，时机很好；但**愿望单强度无一手数据**，按 §2.5 的 5 分档「未发售、定档 ≤8 周且 wishlist 强」缺 wishlist 证据，**取 4 不取 5**（若补到强 wishlist，可升 5，总分 12）。

---

## 7. 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **2** | 复核后 20 个独立意图（研究员 39，−1 撞名 −18 变体）；攻略型仅 **7.7%**、`guide/wiki/codes/boss` 后缀全 0 条；只有 2 类页型 ≥3 词（[词库](keyword-results/dumpstergang.md)） |
| 竞争 | **3** | `P=2.0`：[dumpstergang.online](https://dumpstergang.online/) + [dumpstergang.wiki](https://dumpstergang.wiki/) 两家厚站，均覆盖机制/新手/FAQ（§4） |
| 内容扩展 | **2** | 8–11 页：5 任务 / 6 机制 / 帽子无名录 / 4 平台 FAQ，**无技能树与数值系统**（[Steam](https://store.steampowered.com/app/2870790/)、[新闻稿](https://www.gamespress.com/it/Rally-the-Raccoons-Co-op-Sandbox-Game-Dumpster-Gang-Launches-on-PC-Dec)） |
| 生命周期 | **4** | 定档 2026-12-03（36 天）+ demo + Game Pass 首发；愿望单 `[待确认]`（[Steam](https://store.steampowered.com/app/2870790/)） |
| **总分** | **11** | — |

---

## 8. 成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | `[待实测]` | 建站后按台账回填 |
| 人工 | `[待实测]` | 目标 ≤6 小时/站（台账「实际人工小时」） |
| 回本 PV | `总成本 ÷ (RPM/1000)` | RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺） |

- 现金成本 = 0 → 单看 PV 门槛为 0；实际回本由 token/人工折算决定，按台账实测回填。
- 若成本记为 C 元：RPM $1 → 回本 PV = **1000×C**；RPM $5 → **200×C**。
- **组合回本口径**：本候选即使按最优情形（30 天 300 PV）也只有 **$0.3–1.5**，投入产出比不足以覆盖人工。

---

## 9. 结论

**第一步 · 硬否决**：需求 **2 ≤ 2** → **命中否决，直接放弃**（竞争 3、内容 2、生命周期 4 不能补偿）。
**第二步 · 总分分流**（仅记录，不影响结论）：总分 **11 < 12** → 放弃，与第一步同向。

**关键证据**：39 条「有效词」里 26 条只是「平台/发售日/价格」的同一意图变体，拆完仅 **20 个独立意图**；五个攻略型后缀（`guide` / `wiki` / `codes` / `boss` / `beginner guide`）采集时**全部返回 0 条建议**，攻略型词占比 **7.7%** —— 这是一个「大家只问在哪买、什么时候出」的发售日陷阱候选，上线后流量随窗口衰减。

**边界提示（供主 Agent 复核）**：需求落在 2/3 边界（人工兜底条件「需求 2/3 之间」）。若主 Agent 取需求 3，总分 = 3+3+2+4 = **12 → 低优先**；而 12–13 例外可建要求「需求 ≥4 且 竞争 ≥3」，**需求 3 不满足** → 仍是「留池观察」，不可建。**两种读法都不进建站队列。**

**复采条件**（若日后想复活）：发售 D+7（2026-12-10）复采，重点看 `dumpster gang hats` / `missions` / `exterminator` / `how to play with friends` 是否出现攻略型长尾；若攻略型占比仍 <15%，维持放弃。
