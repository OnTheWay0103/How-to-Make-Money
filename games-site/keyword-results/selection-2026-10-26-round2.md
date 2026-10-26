# 候选分析 — 2026-10-26 第二轮（21:00 晚轮）

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md`（四维 20 分 / 需求三道闸门 / 竞争 `P = T + 0.5t` / 品牌锚定率）
> 词库输入（**只引用这两份，未另采、未估算**）：`keyword-results/moonsweepers.md`、`keyword-results/permafrost.md`
> 候选证据：`keyword-results/discovery-2026-10-26-round2-b.md`（§二 1/2、§四 口径）
> 采集时间：2026-10-26 21:00–22:00（本机）；SERP 走 WebSearch（美区），12 条查询全部返回结果，**无「不可判定」项**
> 结论：**本轮 0 个「可建」候选**（阈值 ≥17）；两个候选都被 `P ≥ 3` 硬性淘汰，Permafrost 另有品牌撞名否决

---

## 一、Moon Sweepers — **放弃**（`P = 3.5 ≥ 3` 硬放弃；另锚定率 35.3% 不可信）

### 1.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 5335510 | [store.steampowered.com/app/5335510](https://store.steampowered.com/app/5335510/Moon_Sweepers/) |
| 开发 / 发行 | DragDrop Games（2 人自研自發） | `discovery-2026-10-26-round2-b.md` §二 2 |
| 类型 | 合作清洁 + 自动化 + 基地建造模拟，1–16 人线上 co-op，PC | 同上 |
| 发售日 | **2026-10-23**（商店页直取核验，距今 3 天） | 同上 |
| 评测 / 好评 / CCU | **1,020 条 / 76% / Mostly Positive**；峰值 **36,318 CCU**（2026-10-25，SteamDB 经媒体转引） | 同上（动态值，隔日会变） |
| 词库 5 数字 | 原始建议 98 / 去重 68 / **有效词 24** / 噪声率 64.7% / **品牌锚定率 35.3%** | `moonsweepers.md` 头部 |

### 1.2 硬门槛（内容可写性）

**通过**。有可核验的机制/物品/结构实体（非「搜索建议里出现过」）：

- 升级：56 项，分 Containers / Cleaning / Suit / Logistics / Economy 5 类（[Destructoid](https://www.destructoid.com/best-upgrades-to-get-in-moon-sweepers/)）
- 机器：Pressure Chamber（$500 / 10 kW）、Stone Press（$1,000）、Packager（$100）、Conveyor（$0.50/m）（[GamerBlurb](https://gamerblurb.com/guides/moon-sweepers-pressure-chamber-guide)、[Tpose](https://tposegaming.com/moon-sweepers-packager/)）
- 载具：Push Sweeper $300 / Ride-On $1,000 / Lunar Sweeper $2,500 / Mega Vacuum Rover $6,000（[Tpose upgrades](https://tposegaming.com/moon-sweepers-upgrades/)）
- 自动化：Robot Vacuum I/II、J.O.O.N.A.S. $20,000 + Capsule Catcher $1,500（[Destructoid JOONAS](https://www.destructoid.com/how-to-use-j-o-o-n-a-s-in-moon-sweepers/)）
- 收集物：195 面旗 / 26 个特殊地点 / 12 座月球站；33 个成就（[Whisper of the House](https://www.whisperofthehouse.com/moon-sweepers/achievements)）

### 1.3 需求（2 分）与品牌锚定率

| 项 | 实测 | 判定 |
|---|---|---|
| 有效词 | **24** | 落在 20–24 桶 → 基准 2 分 |
| 攻略型占比（**本报告自数**） | How-to 1 + Guide/Beginner 2 = **3 / 24 = 12.5%**；Codes 0、Tier List 0、Boss/Characters 0、Weapons/Gear 0 | **< 30% → 触发「发售日陷阱」，需求封顶 3 分**（本就只有 2，不构成加分） |
| 非攻略型 | Info/发售平台 12（ps5 / steam / switch / xbox / price / steam deck…）+ Other 9 | 24 词里 21 条是「在哪买、上不上主机」 |
| 第三方信号（闸门 3） | Steam 1,020 评测、76%、峰值 36,318 CCU | 闸门 3 **通过**（需求成立，只是「不是攻略需求」） |
| 品牌锚定率 | **35.3%**（落在 30–50% 可疑带） | 按 §四「先查锚定词写法 / 别名」执行，见下 |

**锚定词/别名核查（MUST 先做，不许自造别名）**：

- 词库报告头部 `别名: —`，采集脚本已跑裸词 + `game` + 17 个后缀 + 3 个探针，共 22 次请求（失败 0），**没有产出任何可验证别名**。
- 噪声构成（报告「噪声词」44 条）：street sweeper / steam mop（清洁工具）、Pokémon Sweepers / Smogon（宝可梦）、Space Sweepers（电影）、Curse of the Moon / Moonlighter / Moon 系列（同名游戏）、project moon wiki sweepers —— 全部是「sweep/moon」通用词回退。
- 官方本地化名（中文「月球清洁工 / 月球清扫员」）确实存在（[vjgamer 介绍](https://www.vjgamer.com.hk/articles/2026/10/26/106040/moon-sweepers)），但**中文名无可核验的官方对应关系**（Steam 页只有英文名），按规则 MUST NOT 自造别名去重采。
- **判定：别名不可验证 → 锚定率 35.3% 按「不可信」处理**，需求维度不再上调（本次即便上调也只会到 3 分，不改变结论）。

### 1.4 六条固定竞争查询（全跑，逐条记前 10）

> 只算「专门攻略站」：独立域名 + 围绕该游戏 + 持续更新。Reddit / Steam 社区 / YouTube / 论坛 / 大站单篇 / 商店页 / PCGamingWiki 不计；俄语站不计入 `P`（§2.3「只算英文」）。

**Q1 EN `Moon Sweepers wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | destructoid.com/best-upgrades-to-get-in-moon-sweepers | 非专门（大站） |
| 2 | playground.ru/moon_sweepers/guide/…-1884846 | 非专门（俄语，不计 P） |
| 3 | destructoid.com/how-to-use-j-o-o-n-a-s-in-moon-sweepers | 非专门（大站） |
| 4 | tech.yahoo.com/gaming/articles/best-way-clean-moon-moon-231728668 | 非专门（转载） |
| 5 | playground.ru/moon_sweepers/guide/…-1884848 | 非专门（俄语） |
| 6 | gamerblurb.com/guides/moon-sweepers-pressure-chamber-guide | **厚** |
| 7 | gamerblurb.com/guides/moon-sweepers-what-does-the-packager-do | **厚** |
| 8 | gamerblurb.com/guides/moon-sweepers-conveyor-belt-guide | **厚** |
| 9 | tposegaming.com/moon-sweepers-dust/ | **厚** |
| 10 | tposegaming.com/moon-sweepers-upgrades/ | **厚** |

结果：**无 Fandom / wiki.gg 页**（补跑 `"Moon Sweepers" fandom OR wiki.gg` 同样为空）→ wiki 生态是空位，但**指南站已占位**。

**Q2 EN `Moon Sweepers guide`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | destructoid.com/best-upgrades-to-get-in-moon-sweepers | 非专门 |
| 2 | destructoid.com/how-to-use-j-o-o-n-a-s-in-moon-sweepers | 非专门 |
| 3 | tech.yahoo.com/…best-way-clean-moon | 非专门 |
| 4–5 | playground.ru/moon_sweepers/guide/… ×2 | 非专门（俄语） |
| 6 | tposegaming.com/moon-sweepers-upgrades/ | **厚** |
| 7 | tposegaming.com/moon-sweepers-packager/ | **厚** |
| 8 | gamerblurb.com/guides/moon-sweepers-progression-guide | **厚** |
| 9 | gamerblurb.com/guides/moon-sweepers-what-does-the-packager-do | **厚** |
| 10 | gamerblurb.com/guides/moon-sweepers-joonas-guide | **厚** |

**Q3 EN `Moon Sweepers codes`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | fearlessrevolution.com/viewtopic.php?f=5&p=470489（+7 修改器） | 非专门（论坛） |
| 2 | nexusmods.com/moonsweepers/mods/1（改钱 mod） | 非专门（mod 站） |
| 3 | wemod.com/zh/cheats/moon-sweepers-trainers | 非专门（修改器） |
| 4 | smartcdkeys.com/…moon-sweepers-pc（卖激活 key） | 非专门（商店） |
| 5 | community.wemod.com/t/…/379099 | 非专门（论坛） |

结果：**10 条里 0 条「兑换码」内容**，且 Suggest 侧 `Moon Sweepers codes` 返回 **0 条**（`moonsweepers.md` 采集覆盖表）——**本作没有 codes 词**，codes 页型直接不成立（这也是攻略型占比只有 12.5% 的根因）。

**Q4 ZH `Moon Sweepers 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1–3 | destructoid.com ×3 | 非专门 |
| 4–5 | playground.ru ×2 | 非专门（俄语） |
| 6–7 | tposegaming.com ×2 | **厚**（英文站） |
| 8–9 | gamerblurb.com ×2 | **厚**（英文站） |
| 10 | youxiniao.com/game/229.html（「月球清扫员」新手赚钱/联机攻略） | **薄**（中文，2 类，不计入 P） |

**Q5 ZH `Moon Sweepers wiki 中文`**（原模板第 5 条与第 1 条同为 `{Game} wiki`，为避免重复加「中文」限定，特此记录）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | vjgamer.com.hk/articles/2026/10/26/106040/moon-sweepers | 非专门（港媒介绍） |
| 2 | 0day.ali213.net/html/2026/159393.html | 非专门（下载站） |
| 3 | 3cgame.top/105683.html | 非专门（下载站） |
| 4 | youyinli.com/game/20_16120/ | 非专门（下载站） |
| 5 | youxiniao.com/game/229.html | 薄（中文攻略 2 篇） |
| 6 | jidiyouxi.com/topic/detail/2217926481 | 非专门（下载站） |
| 7 | pcgameres.com/PUZ/16272.html | 非专门（下载站） |
| 8 | wandanji.cc/2026/10/24/17279.html | 非专门（资讯） |
| 9 | store.steampowered.com/app/5335510 | 官方页（不计） |
| 10 | 52steamgame.com/game/4445 | 非专门（下载站） |

结果：**无中文 wiki、无中文专门攻略站**，全部是下载/资讯站；但有「月球清洁工/月球清扫员」中文名译法（后续可用的锚定词线索，本轮不改需求）。

**Q6 JA `Moon Sweepers 攻略 ムーンスウィーパーズ`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | playground.ru（俄） | 非专门 |
| 2–4 | destructoid.com ×3 | 非专门 |
| 5–7 | tposegaming.com（guide / upgrades / dust） | **厚** |
| 8–10 | gamerblurb.com（progression / best-build / pressure-chamber） | **厚** |

结果：**前十 0 家日文站**（wikiwiki.jp / atwiki.jp / Game8 JP 均未出现），日文侧为空位。

### 1.5 P 值计算与判定

| 项 | 站点 | 依据（厚度） |
|---|---|---|
| **T = 3（厚站）** | gamerblurb.com | 至少 **7 篇**本作攻略（progression / power / money / packager / best build / pressure chamber / conveyor / JOONAS），覆盖 progression、装备升级、自动化机器、电力、赚钱 ≥5 类，全部 **2026-10-24～26** 更新（[页脚日期 10/26](https://gamerblurb.com/guides/moon-sweepers-progression-guide)） |
| | tposegaming.com | **4 篇**（play & money / upgrades / packager / dust），4 类，**10-24 发布、10-26 更新**（[upgrades](https://tposegaming.com/moon-sweepers-upgrades/) 页标「Last Updated: Oct 26, 2026」） |
| | whisperofthehouse.com | **3 篇**（achievements / beginner upgrades & vehicles / automation-conveyors-power-JONAS），3 类，**Last Updated 10-24**（[achievements](https://www.whisperofthehouse.com/moon-sweepers/achievements)） |
| **t = 1（薄站）** | 2upskill.com | 4 篇但只有 2 类攻略（tips / automation manual）+ 1 篇 PC 报错 + 1 篇发售平台，站体为综合游戏站（[页面自述](https://2upskill.com/moon-sweepers-guide-tips-tricks-and-strategies-for-fast-cleaning/)） |
| **非专门（不计）** | destructoid.com（3 篇大站稿件）、tech.yahoo.com（转载）、playground.ru（俄语）、youxiniao.com（中文下载站）、grindnstrat.com（**仅 1 篇**，10-26）、fearlessrevolution / WeMod / Nexus / SmartCDKeys | 按 §3.1 |

```
P = T + 0.5 × t = 3 + 0.5 × 1 = 3.5
```

**P = 3.5 ≥ 3 → 硬放弃**（林广恩阈值：前三页 3 个以上专门攻略站 → 跳过）。

稳健性检查：即使把 Whisper 降为薄、2upSkill 不计，`P = 2 + 0` 仍不等于 0；把 Destructoid 反而算作厚，`P` 升到 4.0 —— **任何合理归类下都不低于 3**，结论不受单站归类影响。

### 1.6 四维得分（记录用）

| 维度 | 分 | 依据（含链接） |
|---|:--:|---|
| 需求 | **2** | 有效词 24（`moonsweepers.md`）属 20–24 桶；攻略型 3/24 = **12.5% < 30%** → 发售日陷阱封顶 3，实际只到 2；codes 词 0 条（[Q3 SERP](https://www.wemod.com/zh/cheats/moon-sweepers-trainers) 全是修改器）；锚定率 35.3% 且无别名 → 按不可信处理 |
| 竞争 | **0** | `P = 3.5 ≥ 3` 硬放弃（[GamerBlurb](https://gamerblurb.com/guides/moon-sweepers-pressure-chamber-guide) / [Tpose](https://tposegaming.com/moon-sweepers-upgrades/) / [Whisper](https://www.whisperofthehouse.com/moon-sweepers/achievements) 三家厚站均在发售 72 小时内铺完） |
| 内容扩展 | **4** | 可核验实体可支撑 20–29 页、≥4 类：56 项升级（5 类）、7 类机器/物流、4 档载具、33 成就、195 旗 + 26 地点 + 12 站点、16 人 co-op；来源为商店页 + Destructoid/Tpose/GamerBlurb（评审可查）。**未给 5**：无官方 wiki/数据库，具体数值依赖第三方 |
| 生命周期 | **5** | 2026-10-23 发售（3 天，≤8 周）；峰值 36,318 CCU（10-25）且评测 3 天破千 → 高位；Trends 28 天曲线 `[待确认]`（未取） |
| **总分** | **11** | **放弃**（`<12` 档 AND `P ≥ 3` 双触发）。分数只作记录，按 Profile「`P ≥ 3` → 硬放弃，不进评分」，决策依据是 P 值 |

### 1.7 成本与回本

| 项 | 值 | 说明 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` |
| 托管 | 0 元 | Vercel Hobby（未建站，未发生） |
| 内容生成 | **0 元** | 未建站，无 token 消耗可回填 |
| 人工 | **0 小时** | 未建站 |
| **合计** | **0 元（未建）** | 实测回填，不预估 |
| 回本 PV | **不可判定** | 未建站 + 未跑 `node scripts/adsterra-stats.mjs --days 30`；按口径写「不可判定」，**不是 0** |
| RPM 参考 | $1–5 / 千次（第三方基准，2026-08 检索） | MUST NOT 当结论；组合回本口径 |

---

## 二、Permafrost — **放弃**（品牌撞名 + `P = 3.5 ≥ 3` 双否决）

### 2.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 2254990 | [store.steampowered.com/app/2254990](https://store.steampowered.com/app/2254990/Permafrost/) |
| 开发 / 发行 | SpaceRocket Games / Toplitz Productions | `discovery-2026-10-26-round2-b.md` §二 1 |
| 类型 | 剧情驱动开放世界生存建造沙盒，单人 + 最多 4 人 co-op，PC（Steam/GOG/Epic） | 同上 |
| 发售日 | **2026-10-09 抢先体验**（商店页直取核验，距今 17 天） | 同上 |
| 评测 / 好评 | **1,827 条 / 71% / Mostly Positive**（2026-10-26 直取） | 同上 |
| 词库 5 数字 | 原始建议 189 / 去重 175 / **有效词 173** / 噪声率 1.1% / **品牌锚定率 98.9%** | `permafrost.md` 头部 |

### 2.2 硬门槛（内容可写性）

**通过（内容量是本轮最强）**。metabot.gg 的本作数据库给出可核验实体清单：**319 件物品、176 个配方、137 个建造件、90 个任务、12 种动物、16 项技能、6 个区域、生物群系 −23 ℃～−55 ℃**
（[metabot.gg/permafrost](https://metabot.gg/de_DE/permafrost)，第三方数据库，2026-10 检索）。
另有官方侧证据：发行商 Toplitz 官方攻略文（[toplitz-productions.com/news-2388](https://www.toplitz-productions.com/news-2388/how-to-survive-the-frozen-post-apocalyptic-world-of-permafrost.html)）。

### 2.3 需求（3 分，规则口径）— 但 **品牌撞名专项否决**

**先按规则算（本报告自数）**：

| 页型（报告分类） | 词数 |
|---|--:|
| Best/Ranking | 2 |
| Boss/Characters | 4 |
| Build/Class | 6 |
| Weapons/Gear | 4 |
| How-to | 1 |
| Guide/Beginner | 10 |
| Co-op/Multiplayer | 3 |
| **攻略型小计** | **30** |
| Info/发售平台 | 77 |
| Other | 66 |
| **合计** | **173** ✓（与报告头部一致） |

`攻略型占比 = 30 / 173 = **17.3% < 30%**` → 触发「发售日陷阱」，**需求封顶 3 分**（有效词 173 本属 ≥60 的 5 分桶）。

**但 98.9% 的锚定率是假象，必须逐条核验。** §4.2 明文：「单词品牌若本身是通用词（TUNG / Dream / Rise），锚定率再高也不可信，按「品牌撞名」放弃」。`Permafrost` 正是单个通用词，本报告的锚定率 98.9% 只是因为「整条建议里有一个 token 完全相等」就算命中（§4.2 规则 ②）——所有含 permafrost 的地质/电影/别作建议全部被算成有效词。逐条核验如下：

| 撞名线索（词库原文） | 实际指向 | 核验证据 |
|---|---|---|
| `calamity wiki permafrost` | **Terraria 灾厄模组**里的大法师 NPC「永冻（Permafrost）」 | [calamity.huijiwiki.com 搜索页](https://calamity.huijiwiki.com/index.php?title=%E7%89%B9%E6%AE%8A:%E6%90%9C%E7%B4%A2&search=%E9%BB%91%E9%94%AE)（灰机灾厄中文维基，2026-09 更新） |
| `permafrost boss calamity` / `permafrost boss terraria` | 同上（灾厄 / Terraria） | 同上 + 灾厄模组词条 |
| `permafrost dc wiki` | **DC 动画《Static Shock》角色 Maureen Connor / Permafrost**（另 DC 系 Dr. Permafrost） | [dcau.fandom.com/wiki/Permafrost](https://dcau.fandom.com/wiki/Permafrost)、[dc.fandom.com Pluto Parulian](https://dc.fandom.com/wiki/Pluto_Parulian_(Earth-ABC)) |
| `permafrost fisch wiki` | **Roblox《Fisch》的鱼变异体 Permafrost（9.5–10× 售价）** | [fischipedia.org/wiki/Permafrost](https://fischipedia.org/wiki/Permafrost)、[aweswikis.com/fisch/.../permafrost](https://aweswikis.com/fisch/wiki/mutations/permafrost/) |
| `p99 wiki permafrost` | **EverQuest Project 1999 的冰原地牢 zone Permafrost**（Lady Vox 所在） | [wiki.project1999.com/Permafrost](https://wiki.project1999.com/index.php?title=Permafrost&direction=next&oldid=158927) |
| `permafrost bolts reddit` / `permafrost bolts leveling guide` / `pohx permafrost guide` | **Path of Exile 2 的十字弩技能宝石 Permafrost Bolts** + Pohx 的 PoE2 build | [poe2wiki.net/Permafrost_Bolts](https://www.poe2wiki.net/index.php?title=Permafrost_Bolts&oldid=45443)、[mobalytics Pohx Permafrost](https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician) |
| `permafrost skill diablo 4` / `permafrost skill god of war` | 暗黑 4 / 战神 的技能词 | 报告分类「Build/Class」内，非本作 |
| `montbell permafrost reddit` | **Montbell Permafrost Down Parka 羽绒服**（¥37,400 / €589） | [montbell.com Permafrost Down Parka](https://www.montbell.com/eu/en/products/detail/1101712) |
| `permafrost alastair reynolds reddit` | **Alastair Reynolds 2019 年科幻中篇《Permafrost》**（Tor.com，Locus 提名） | [reactormag 书评](https://reactormag.com/book-reviews-alastair-reynolds-permafrost/) |
| `permafrost plains best team` / `permafrost plains guide` / `permafrost plains tutorial` / `permafrost plains 4` | **《Cookie Run: Kingdom》Trial Grounds 关卡「Frost Queen Cookie's Permafrost Plains」** | [LDPlayer CRK Trial Grounds 攻略](https://th.ldplayer.net/blog/crk-trial-grounds-best-teams.html) |
| `permafrost movie*` / `permafrost parents guide` | 同名电影与家长指引 | 词库 Info/Guide 分类内，非本作 |
| `permafrost sols rng wiki` / `permafrost villains wiki` / `permafrost superpower wiki` | Sol's RNG / DC 反派维基 / 超能力维基 | 均非本作 |
| 地质义：`what is permafrost` / `is permafrost melting` / `permafrost degradation` / `release of methane from permafrost` 等 | **永冻土（地质学）** | 词库 Other 分类内 |

**核验结论（明确判定）**：

1. 词库里**真正指向本作的只有约 45 条**，且几乎全是 `permafrost game …` / `permafrost ps5/steam/release date/price` 一类 **FAQ/发售平台词**；指向本作的**攻略型词仅约 2–3 条**（`permafrost game crossplay`、`permafrost game multiplayer`、`permafrost co op game`），**真实攻略型占比 ≈ 1.2–1.7%**，比名义 17.3% 低一个数量级。
2. 报出的 30 条「攻略型词」逐条看，绝大多数落在 Terraria 灾厄 / PoE2 / D4 / GoW / Minecraft / CRK / 电影 / 地质 —— **本作的攻略型需求几乎为零**。
3. **判定：品牌撞名成立 → 按 `STRATEGY-挖词与词库.md` §4.2 放弃。** 这一条独立于分数，也独立于竞争检查，**不需要主管决策**（规则是 MUST）。
4. 需求分**按规则口径记 3**（有效词 173 + 17.3% 触顶），但已在依据里标明「去撞名后真实值 ≈1–2 分」，MUST NOT 拿 3 分当「需求成立」使用。

### 2.4 六条固定竞争查询（全跑）

**Q1 EN `Permafrost wiki`**（裸串，按模板原样跑）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | techraptor.net/gaming/guides/permafrost-crafting-and-recipe-unlocks-guide | **厚** |
| 2 | techraptor.net/gaming/guides/permafrost-crafting-materials-guide-where-to-find-resources | **厚** |
| 3 | techraptor.net/gaming/guides/permafrost-guide-beginner-tips-and-tricks | **厚** |
| 4 | baike.baidu.com/item/永冻纪元/69240870 | 非专门（中文百科） |
| 5 | fr.vgtimes.com/guides/171270-… | 薄（vgtimes 法语镜像） |
| 6 | vgtimes.com/guides/171270-permafrost-beginners-guide… | 薄 |
| 7 | metabot.gg/pl_PL/permafrost/guides/base-building | **厚** |
| 8 | whisperofthehouse.com/permafrost/mining-guide | **厚** |
| 9 | kosguides.com/21363-permafrost-all-items-list | 非专门（单篇） |
| 10 | xboxplay.games/permafrost/where-to-find-coal-copper-cloth… | 非专门（单篇） |

结果：**无 Fandom / wiki.gg 页**（补跑 `Permafrost game wiki survival`、`Permafrost 攻略 wiki パーマフロスト` 同样未出现）——但**本作专属数据库 metabot.gg 已存在**，功能上替代了 wiki。

**Q2 EN `Permafrost guide`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1–3 | techraptor.net（crafting-recipes / beginner / how-to-get-gun） | **厚** |
| 4 | vgtimes.com/guides/171270-…beginners-guide | 薄 |
| 5 | fr.vgtimes.com/guides/171270-… | 薄（镜像） |
| 6 | metabot.gg/en/permafrost/guides/beginners-guide | **厚** |
| 7 | vgtimes.com/guides/170830-permafrost-dog-guide… | 薄 |
| 8 | intoindiegames.com/walkthroughs/permafrost-prologue-walkthrough | 非专门（单篇） |
| 9 | showgamer.com/en/guides/6510-… | 非专门（单篇） |
| 10 | whisperofthehouse.com/permafrost/mining-guide | **厚** |

**Q3 EN `Permafrost codes`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | ccplay.cc/package/275343.html（云游戏下载） | 非专门 |
| 2 | vgtimes.com/games/permafrost/files/cheats/tables/ | 非专门（修改器） |
| 3 | vgtimes.com/games/permafrost/files/98916-cheat-table… | 非专门 |
| 4 | fearlessrevolution.com/viewtopic.php?t=41129 | 非专门（论坛） |
| 5 | cheat-engine.co/threads/permafrost-cheat-engine.4743 | 非专门 |
| 6 | github.com/jianzhichun/permafrost（同名代理项目） | **撞名**（非游戏） |
| 7 | github.com/dead1786/permafrost（同名 AI 项目） | **撞名** |
| 8 | moggydaytrainer.com/zh/f/permafrost-trainer | 非专门 |

结果：**0 条兑换码内容**；Suggest `Permafrost codes` 也是 **0 条**（`permafrost.md` 采集覆盖表）→ codes 页型不成立，且 SERP 被修改器 + 同名 GitHub 项目占满。

**Q4 ZH `Permafrost 攻略 永冻纪元`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1–5 | techraptor.net ×4（crafting / beginner / how-to-get-gun 等） | **厚**（英文站） |
| 6 | entertainment14.net/…永凍荒原-permafrost-故事與生存選擇指南 | 薄（中文，3 篇，不计入 P） |
| 7 | entertainment14.net/…永凍荒原-permafrost-新手入門攻略 | 薄 |
| 8 | entertainment14.net/…永凍荒原-permafrost-全部目標與材料消耗 | 薄 |
| 9 | vgtimes.com/guides/171270… / fr.vgtimes | 薄 |
| 10 | 3h3.com/danji/440959.html（下载） | 非专门 |

**Q5 ZH `Permafrost wiki 永冻纪元 灰机 wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1–3 | calamity.huijiwiki.com/index.php?title=特殊:搜索…（灾厄中文维基「永冻」词条） | **撞名（Terraria 灾厄）**，不计 |
| 4 | metabot.gg/pl_PL/permafrost | **厚** |
| 5 | metabot.gg/de_DE/permafrost | **厚** |

结果：**无《永冻纪元》中文 wiki**（灰机平台上「Permafrost」= 灾厄模组 NPC）→ 中文 wiki 空位，但这是撞名导致的空位，不是本作的蓝海。

**Q6 JA `Permafrost 攻略 wiki パーマフロスト`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1–3 | techraptor.net ×3 | **厚** |
| 4 | fr.vgtimes.com/… | 薄 |
| 5–6 | metabot.gg/pl_PL（staying-warm / skills-and-classes） | **厚** |
| 7 | whisperofthehouse.com/permafrost（what to do first） | **厚** |
| 8 | whisperofthehouse.com/permafrost/main-quests-walkthrough | **厚** |
| 9 | int-ent.de/2026/10/permafrost-ein-neues-zuhause-guide/ | 非专门（德语单篇） |
| 10 | vgtimes.ru/guides/171190-… | 薄（俄语镜像） |

结果：**前十 0 家日文站**（wikiwiki.jp / atwiki.jp / Game8 JP 均未出现）。

### 2.5 P 值计算与判定

| 项 | 站点 | 依据（厚度） |
|---|---|---|
| **T = 3** | techraptor.net | ≥5 篇本作攻略（beginner / crafting materials / crafting & recipe unlocks / how to get a gun）+ 评测预告，≥3 类，**2026-10 更新**（[crafting-materials](https://techraptor.net/gaming/guides/permafrost-crafting-materials-guide-where-to-find-resources)） |
| | metabot.gg | **本作专属数据库**：319 物品 / 176 配方 / 137 建造件 / 90 任务 / 12 动物 / 16 技能 + ≥4 篇攻略（beginner / staying-warm / skills-and-classes / base-building）→ 覆盖 ≥3 类且持续更新，等同「厚 wiki」（[metabot.gg/permafrost](https://metabot.gg/de_DE/permafrost)） |
| | whisperofthehouse.com | **3 篇**（what to do first / main-quests walkthrough / mining guide），3 类，**10 月更新**（[permafrost hub](https://www.whisperofthehouse.com/permafrost)） |
| **t = 1** | vgtimes.com | ≥3 篇（beginner / dog guide / cheats 分区）但攻略只有 2 类 → **薄** |
| **非专门（不计）** | showgamer.com、intoindiegames.com、kosguides.com、xboxplay.games、int-ent.de、entertainment14.net（中文，不计 P）、Baidu 百科、Gematsu、Toplitz 官方页、cheat-engine / Fearless / GitHub 同名项目 | 按 §3.1 |

```
P = T + 0.5 × t = 3 + 0.5 × 1 = 3.5
```

**P = 3.5 ≥ 3 → 硬放弃**。稳健性：即使只认 techraptor + metabot 两家（`T=2`），加上 vgtimes 薄站也到 `P=2.5`，仍在「接近饱和 1 分」档；把 whisper 算厚是本报告的口径，删掉也改变不了「不值得建」的结论。

### 2.6 四维得分（记录用）

| 维度 | 分 | 依据（含链接） |
|---|:--:|---|
| 需求 | **3** | 规则口径：有效词 173（≥60 桶）、攻略型 30/173 = **17.3% < 30%** → 发售日陷阱封顶 3。**去撞名后真实值 ≈1–2**：本作词约 45 条且几乎全是 FAQ，攻略型仅 2–3 条（`game crossplay` / `game multiplayer` / `co op game`），见 §2.3 核验表；品牌为通用单词 → §4.2 按撞名放弃 |
| 竞争 | **0** | `P = 3.5 ≥ 3` 硬放弃（[TechRaptor](https://techraptor.net/gaming/guides/permafrost-guide-beginner-tips-and-tricks) + [metabot.gg](https://metabot.gg/de_DE/permafrost) + [Whisper](https://www.whisperofthehouse.com/permafrost/main-quests-walkthrough) 三家厚站，EA 17 天内已铺满） |
| 内容扩展 | **5** | 可核验实体 ≥30 页且 ≥5 类：319 物品 / 176 配方 / 137 建造件 / 90 任务 / 16 技能 / 12 动物 / 6 区域 / 31 状态效果（[metabot 数据库](https://metabot.gg/de_DE/permafrost)）+ 官方攻略文。中文有 3 篇（entertainment14）/ 日文空缺 → 多语言机会存在，但 5 分已封顶 |
| 生命周期 | **4** | EA 2026-10-09（17 天，≤8 周），1,827 评测 71% 仍在累积；EA 路线图「White Hell」时间点 `[待确认]`；Trends 28 天曲线 `[待确认]` → 不给 5 |
| **总分** | **12** | 记录值。**决策不用分数**：品牌撞名（§4.2，MUST）+ `P ≥ 3`（硬放弃）双否决 |

### 2.7 成本与回本

| 项 | 值 | 说明 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` |
| 托管 | 0 元 | 未建站，未发生 |
| 内容生成 | **0 元** | 未建站 |
| 人工 | **0 小时** | 未建站 |
| **合计** | **0 元（未建）** | 实测回填 |
| 回本 PV | **不可判定** | 未建站 + 未取 Adsterra 实测 RPM；写「不可判定」，**不是 0** |
| RPM 参考 | $1–5 / 千次（第三方基准，2026-08 检索） | 组合回本口径 |

---

## 三、未评分候选与原因（9 个）

> 来自 `discovery-2026-10-26-round2-b.md` §二，**本轮无词库 → 硬门槛第一道（有效词 ≥20）根本没法判**，按 Profile「有效词 < 20 → 淘汰，不进评分」的**前一步**处理：标 `需采集`，MUST NOT 给分。

| # | 候选 | 发售 / 状态 | 需求侧已有证据 | 本轮状态 | 下一步 |
|:--:|---|---|---|---|---|
| 1 | Probably Stolen | 10-28（2 天后） | Next Fest 20 强 demo；wishlist `[待确认]` | `需采集` | 发售 7 天后采词 |
| 2 | S.O.N.A.R. | 10-29（3 天后） | playtest 42,000+ 人；wishlist `[待确认]` | `需采集` | 发售 7 天后采词 |
| 3 | HANDS OVER | 10-30 EA | wishlist 约 108K–115K（第三方估算） | `需采集`；侦察员已标「疑超休闲」 | 先判硬门槛（内容可写性），再决定是否采词 |
| 4 | Annihilated | 11-10 | wishlist 150K+（发行方口径） | `需采集` | 发售前 7 天内采词（词多为 release/guide 需拆） |
| 5 | Malignus | 11-12/13 EA | demo 参加 Next Fest；wishlist `[待确认]` | `需采集` | 同上 |
| 6 | Blind Descent | 12-02 EA | wishlist 300K+（发行方口径） | `需采集` | 12 月再采（距发售 >8 周，早采会采到发售日词） |
| 7 | Dumpster Gang | 12-03 | wishlist 约 207K（第三方估算） | `需采集`；疑点：物理沙盒攻略深度 | 先判硬门槛 |
| 8 | Never Be Alone | 12-08 EA | demo 进 Next Fest 20 强；wishlist `[待确认]` | `需采集` | 12 月再采 |
| 9 | Frostrail | Q4 2026（具体日 `[待确认]`） | wishlist 300K+（2026-08 口径） | `需采集`；发售日未定 | 定档后再采，避免发售日陷阱 |

**共同提醒**：本轮的两个已采词候选都是**已发售**游戏，而这两个的 `P` 都已 3.5 —— 说明「已发售热门新作」这个池子里，专门攻略站在 72 小时内就位是常态，**采词后的竞争检查反而是更硬的门**。建议优先给 **HANDS OVER / Dumpster Gang** 先判硬门槛（疑似超休闲、可写页不足 20），不合格的不要浪费采词配额。

---

## 四、本轮结论与下一轮触发条件

### 4.1 结论

| 候选 | 需求 | 竞争 | 内容 | 生命 | 总分 | 结论 |
|---|:--:|:--:|:--:|:--:|:--:|---|
| Moon Sweepers | 2 | 0 | 4 | 5 | 11 | **放弃**：`P = 3.5 ≥ 3`；另锚定率 35.3% 且无可验证别名 |
| Permafrost | 3（去撞名 ≈1–2） | 0 | 5 | 4 | 12 | **放弃**：品牌撞名（通用单词，§4.2 MUST）+ `P = 3.5 ≥ 3` |

- **本轮 0 个 ≥17 分的可建候选**，也没有 15–16 分的观察候选需要主管决策。
- 两个候选的「内容扩展」都很强（4 / 5），**卡死在竞争**——这不是评分太严，是「热门新作 72 小时内被指南站围满」这条事实。
- Moon Sweepers 的**唯一真空位是 wiki**（无 Fandom / wiki.gg / 中文 wiki / 日文 wiki），但空位本身不构成建站理由：`P ≥ 3` 是 MUST 硬放弃。若将来要复盘这条规则，样本应记在这里（**不自行改规则**）。

### 4.2 下一轮触发条件

1. **候选池 `待分析` ≥ 5** 且其中 ≥ 2 个已有 `keyword-results/{slug}.md`（否则只做硬门槛分流，不空转跑 12 条查询）。
2. 本轮 9 个 `需采集` 候选：**主 Agent 派关键词研究员**，优先 HANDS OVER / Dumpster Gang（先判硬门槛），其余按发售窗口倒排 7 天内采词。
3. **复采条件（Moon Sweepers）**：不建议复采——竞争 `P ≥ 3` 与别名缺失都是结构性结论，复采只会重复消耗 22 次请求。除非 6 个月后该品类指南站集体停更。
4. **Permafrost 的复活条件**：仅当出现**非通用词写法**（如官方副标题 / 系列名，目前不存在）才可重新入池；否则按规则长期关闭。

### 4.3 对流程的两条反馈（不自行改规则，供主管判断）

1. **品牌锚定率对「单词通用品牌」完全失效**：Permafrost 报 98.9%，实际指向本作的有效词约 45/173（26%）。§4.2 已有「单词品牌按撞名放弃」的规则，但**词库报告仍照常输出 98.9% 并标「通过」**——建议在报告头部加一行「单词/通用词品牌 → 锚定率不参与判定」，避免下游误读（本轮按规则判了放弃，未擅自改动）。
2. **「已发售热门新作」的竞争窗口正在缩短**：本轮两个候选分别在上线 3 天 / 17 天内就被 3 家厚站覆盖。发掘「已发售但还没人写」的游戏，可能比追愿望单榜更有价值——这是发现侧的事，交侦察员与主管判断。

---

> 本报告只做判断，未建站、未改站点文件、未改 `CANDIDATE-POOL.md`、未 commit。
> 候选池回填由主 Agent 执行（4 维分 + 总分 + 结论 + 本报链接）。
