# 候选分析 — #79 HANDS OVER — 2026-10-28

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维 / 三道闸门 / `P = T + 0.5t` / 硬否决 + ≥14）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/handsover.md`
> 一手数据：SERP 走 WebSearch（2026-10-28，美区 `hl=en`，中/日文按原样跑）；Steam 商店页 2026-10-28 抓取
> 未做：未建站、未改站点目录、未重采词、未改 `CANDIDATE-POOL.md` / `INDEX.md`、未 commit
> 动态字段抓不到一律 `[待确认]` + 抓取日，**未估算**

---

## 1. 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **4661070**（`HANDS OVER`）；demo **5224010** | [商店页](https://store.steampowered.com/app/4661070/HANDS_OVER/)（2026-10-28 抓取） |
| 开发 / 发行 | ArtDock（前作 Penguin Helper / SOS OPS!） | 同上 |
| 类型 | **5 人 online co-op + PvP**「桌面派对恐怖」：围桌玩被扭曲的童年玩具（鳄鱼拔牙、Pie Face、记忆序列），回合间用 **影响牌** 改概率/自保/陷害，输一手少一只手，最后留在桌上者胜 | 同上；[AUTOMATON](https://automaton-media.com/articles/newsjp/20260525-444952/) |
| 发售 | **2026-10-30 EA**（今日 +2 天）；EA 期 **6–12 个月** | 同上 |
| 价格 | **未公布**（官方称 EA 后不涨价） | [Steam](https://store.steampowered.com/app/4661070/HANDS_OVER/) |
| 评测 | 本体未发售；**demo 64 条 ~3/4 好评（Mostly Positive）**，常见差评「demo 把内容玩完了」 | [gamebrief](https://www.gamebrief.net/blog/hands-over-demo-next-fest-2026) |
| 需求侧信号 | **愿望单破 10 万**；封闭测试 1.5 万人报名抢 ~300 名额；Next Fest 期间 demo 上线（2026-10-15） | 同上；[IGN 主机公布](https://in.ign.com/hands-over/262134/) |
| 平台 | PC（Steam）已定；PS5 / Xbox Series X\|S / Switch **已公布无日期** | 同上 |
| 语言 | `[待确认]`（商店页未列本作语言表） | — |
| 词库 5 数字 | 原始 155 / 去重 148 / **有效词 48** / 噪声 67.6% / 品牌锚定率 32.4% | `keyword-results/handsover.md` 头部 |

> **任务书要求验证「疑超休闲」**：验证结果——**是**。零 codes、零 boss、零 build/class、零武器、零具名角色、零具名卡牌；官方页面自己只举了「按牙齿」一个例子，其余机制描述全是抽象的「改变概率/陷害」（2026-10-28 抓取）。

---

## 2. 硬门槛（有效词复核 + 内容可写性）

### 2.1 有效词复核（**不抄 48**）—— 复核结果 **25–27**

`hands over` 是英语高频短语（"hands over the keys"），污染极重。逐类处理：

| 词库分类 | 条数 | 逐条判定 | 剔除 | 合并同义 | 保留 |
|---|:--:|---|:--:|:--:|:--:|
| Co-op/Multiplayer | 3 | `david hands over to solomon`＝**圣经**（大卫交棒所罗门）；`hands over tem crossplay`＝**乱码片段**（疑似 team 拼错）；`hands over game crossplay`＝本作 | −1 | −1 | **1** |
| Info/发售平台 | 27 | 全部指向本作（release date / price / ps5 / xbox / steam / system requirements / demo / free）；剔除近重复 6 组（`price game`↔`game price`、`ps5 game`↔`game ps5`、`ps5 game release date`↔`game release date ps5`、`release date game`↔`game release date`、`steam game`↔`game steam`、`steam price`↔`price steam`） | 0 | −6 | **21** |
| Other | 18 | 剔除 13 条非本作：`ears`、`eyes emoji`、`face`、`face anime meme`、`face emoji`、`face meme`、`head`、`head emoji`、`head meme`、`mouth`、`mouth meme`、`movie`、`clue`；保留 5 条本作导航/平台（`game`、`game android`、`game mobile`、`game pc`、`gameplay`） | −13 | 0 | **5** |
| **合计** | **48** | | **−14** | **−7** | **27** |

**敏感性**：若再把 `xbox release date`↔`game xbox release date`、`ps5 release`↔`ps5 release date` 两组并入（本可与上 6 组同标准处理），得 **25**。取 **25–27**。

> ⚠️ 其中 `game android` / `game mobile` 指向「手游版」——本作是 PC/主机，这两条本可算污染。剔除则 **23–25**。无论哪个口径都 ≥20，**门禁第一道通过**。

### 2.2 攻略型词占比（「超休闲」验证的核心）

| 攻略型类别 | 命中词 | 条数 |
|---|---|:--:|
| Codes | 0（`HANDS OVER codes` 后缀采集返回 8 条，**全部落进噪声表**） | 0 |
| Tier List / Best-Ranking | 0 | 0 |
| Boss-Characters | 0 | 0 |
| Build-Class | 0（`best class` 后缀 **返回 0 条**） | 0 |
| Weapons-Gear | 0 | 0 |
| How-to / Guide-Beginner | 0（`beginner guide` 后缀 **返回 0 条**；`guide` 后缀 15 条全被同名词吃掉） | 0 |
| Co-op-Multiplayer | `hands over game crossplay`（+ `is hands over cross platform`，若计入） | **1（宽口径 2）** |

**攻略型占比 = 1/27 = 3.7%（宽口径 2/27 = 7.4%）。**

**触发「发售日陷阱」修正：需求封顶 3。**
真实形态：27 个词里 **21 个是「什么时候出 / 多少钱 / 上不上 PS5 / 配置」**，其余 5 个是「这游戏是啥」导航。**这是典型的「大家只想看它出没出」，不是「大家想找攻略」。**

### 2.3 内容可写性（硬门槛第一条）

**勉强通过，但逼近下限。** 有可核验对象的只有：具名小游戏 3 个（Crocodile Dentist / Pie Face / 记忆序列）、影响牌 1 层系统（**0 张具名**）、平台与配置、EA 路线图 5 项（更多挑战/模式、扩卡系统、角色与解锁、表现与联机稳定性、平衡）。**零 codes / 零 boss / 零具名角色 / 零具名卡牌。**
→ 内容扩展不进 0 分（≥3 页），但撑不到「20+ 页」的过线标准（林广恩口径）。

---

## 3. 需求（三道闸门）

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **25–27**（复核，脚本 48） | ✅ 通过（贴地） |
| 攻略型 ≥30% | **3.7%–7.4%** | ❌ 触发封顶 3 |
| 页型覆盖 ≥3 类各 ≥3 词 | 只有 **Info/发售平台** 一类到 3 词（21 条）；Co-op 1 条 | ❌ **不满足 3 分档附加条件** |
| 第三方信号 ≥1 | ① 愿望单 10 万+ ② demo 64 条 3/4 好评 ③ 10-30 EA 定档 ④ Next Fest 参与 | ✅（非单源） |
| 品牌锚定率 ≥50% | 32.4%（脚本）——属「可疑」档（30–50%） | ⚠️ 需别名复核（见下） |

**别名复核**：`hands over game` / `hands over game release date` 等带 `game` 限定的词锚定清楚；裸词 `hands over` 则几乎全被 emoji/短语/歌曲吃掉（噪声表 100+ 条）。结论：**品牌只在带 `game` 时成立**，标题必须写死 `HANDS OVER game`。

> **需求 = 2（主口径）/ 3（宽松口径）**
> - 取 **2** 的理由：① 攻略型 3.7%；② 仅 1 类页型满足 ≥3 词（3 分档明文要求 ≥3 类各 ≥3 词）；③ 21/27 词是发售/价格/平台，是「发售日陷阱」的标准形态。
> - 取 **3** 的理由：只看词量桶（25–39）不验证附加条件，再套「封顶 3」。
> - 两读法结论相反（见 §9），**按 Profile「需求 2/3 之间属硬否决边缘 → 人工兜底」标「需主管决策」**。

---

## 4. 竞争（6 条固定查询，2026-10-28 实跑）

### Q1 EN `HANDS OVER wiki`（**返回 0 条**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| — | 无结果 | — |

> 检索端明确回复「No links found」，并建议改查 handover / Hands Over 歌曲。**SERP 不足 10 条**。

### Q2 EN `HANDS OVER game guide tips how to play`（返回 7 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | store.steampowered.com/app/5224010/HANDS_OVER_Demo/（de） | 商店（不计） |
| 2 | store.steampowered.com/app/5224010/HANDS_OVER_Demo/（hu） | 商店（不计） |
| 3 | itch.io/post/15950532 | 论坛帖（不计） |
| 4 | store.steampowered.com/app/4661070/HANDS_OVER/ | 商店（不计） |
| 5 | download.com.vn/hands-over-203330 | 下载站（不计） |
| 6 | player.gg/explore/games/403826-hands-over | 游戏数据库（不计） |
| 7 | sheapgamer.com/hands-over-horror-game-crocodile-dentist/ | 泰语媒体单篇（不计） |

> **无一条攻略页**——「tips」全部由商店页描述反推。

### Q3 EN `HANDS OVER codes`（**返回 0 条**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| — | 无结果 | — |

> 检索端回复「zero hits」。且游戏本无兑换码（纯买断多人），`codes` 意图**结构性为空**。

### Q4 ZH `HANDS OVER 攻略`（**返回 0 条相关**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1–7 | truesteamachievements.com、trueachievements.com、gaming.stackexchange.com ×3、itch.io ×3 | 全部无关（不计） |
| 附 | h1g.jp 益智游戏 Log.in 攻略 wiki | 别作（不计） |

### Q5 ZH `"HANDS OVER" wiki 中文 攻略 五人 恐怖 派对`（**返回 1 条**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | yazelin.github.io/glitch-vn/guide/walkthrough.html | 无关视觉小说攻略（不计） |

> 中文侧**零覆盖**：无 wiki、无 B 站专栏、无下载站攻略页。

### Q6 JA `"HANDS OVER" ゲーム 攻略 wiki ホラー`（**返回 1 条**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | steamcommunity.com/sharedfiles/filedetails/?id=3287211937 | 别作 Steam 指南（不计） |

> 日文侧**零覆盖**；命中的是另一款带 Olivia/Selene 的恐怖游戏。

### 补充核查（为防「搜不到 = 没有」）

另外跑了 4 条限定查询以确认候选池外的专门站是否存在：

| 查询 | 结果 | 归类 |
|---|---|---|
| `HANDS OVER ArtDock Steam co-op horror` | [game8.co release-date 单篇](https://game8.co/articles/release-dates/hands-over-release-date-and-time)、[gamebrief 单篇](https://www.gamebrief.net/blog/hands-over-demo-next-fest-2026)、[gamepressure 数据库](https://www.gamepressure.com/games/hands-over/z374e3)、slopranks、videogamescritic | Game8 是**大站的发售表单篇**（无本作 wiki 分区、无 characters/walkthrough 页）；其余为数据库/博客单篇 → **均不计** |
| `handsover.wiki OR "HANDS OVER" fandom wiki game 2026` | 无该域名、无 Fandom 页；只有 IGN 各地版本新闻、AUTOMATON、playfront | 无专门站 |
| `"HANDS OVER" ArtDock walkthrough influence cards tier list best strategy` | 只有德语公告文一篇 + 无关 biligame 页 | 无 tier list / 无 walkthrough |
| `"HANDS OVER" demo minigames ... roadmap` | 无具名卡牌数、无小游戏全表 | 内容面本身也薄 |

### 4.1 P 值

| 站 | 类型 | 依据 |
|---|---|---|
| Game8（game8.co） | **不计** | 只有 1 篇 release-date 文章，**没有本作的 game hub/wiki 分区**，不满足「围绕该游戏 + 覆盖 ≥3 类页」 |
| gamebrief / gamepressure / slopranks / videogamescritic | **不计** | 综合站的单篇/数据库页 |
| — | **T = 0 / t = 0** | 6 条主查询 + 4 条补充查询**无一专门攻略站** |

**`P = 0 + 0.5 × 0 = 0`** → **竞争 5**。

> 与 #94 的 `P=0` 要区分：这里**有真实搜索量**（27 个带 `game` 的词、10 万愿望单），空位是真的空位——但空位的原因是**这游戏没有纵向可写的攻略面**，不是竞争者没赶上。

---

## 5. 内容扩展

| 类别 | 可核验实体 | 来源 |
|---|---|---|
| 小游戏 | **3 个具名**（Crocodile Dentist 鳄鱼拔牙 / Pie Face 派脸夹 / 记忆序列 SIMON 式） | [Steam](https://store.steampowered.com/app/4661070/HANDS_OVER/)、[gamebrief](https://www.gamebrief.net/blog/hands-over-demo-next-fest-2026) |
| 影响牌（influence cards） | **1 层系统，0 张具名**（效果只有「改概率/自保/陷害/触发混乱事件」） | Steam |
| 角色 | **0 名具名**（EA 路线图才说「加角色」） | Steam |
| 模式 | 0 个具名（只有 Online Co-op / Online PvP 标签；「更多模式」在路线图里） | Steam |
| 平台/配置 | PC 已定，PS5/Xbox/Switch 公布无期；最低 i5-4460 / 8G / GTX 960 | Steam、[gamebrief](https://www.gamebrief.net/blog/hands-over-demo-next-fest-2026) |
| EA 路线图 | 5 项（更多挑战与模式、扩卡系统、角色与解锁、表现与联机稳定性、平衡） | Steam |
| Codes / Boss / Build / 武器 | **全 0** | 6 条查询 + 商店页 |

**可写独立页估算**：怎么玩 1 + 3 个小游戏 3 + 影响牌总览 1 + 联机/跨平台 2 + 平台与发售 2 + 路线图 1 + 配置 1 = **约 8–11 页**，且每页素材都薄（无具名卡牌、无角色、无数值）。
**多语言**：中文 0、日文 0 → **+1**。

→ 基础 **2**（6–11 页）+ 多语言 **1** = **内容扩展 3**（已含 +1；基础量属 2 分档）。

---

## 6. 生命周期

| 依据 | 值 |
|---|---|
| Steam 发售日 | **2026-10-30 EA**（今日 +2 天），EA 期 6–12 个月 |
| 预热强度 | 愿望单 **10 万+**；封闭测试 1.5 万人报名 / ~300 名额；Next Fest demo（10-15 上线） |
| Demo 口碑 | 64 条、~3/4 好评（Mostly Positive）；主要差评是「demo 已把内容玩完」——**对攻略站是负面信号**（内容本身薄） |
| 更新节奏 | EA 路线图明确（更多挑战/模式、扩卡、角色、解锁）→ 有持续更新预期 |
| Google Trends 28 天 | `[待确认]`（2026-10-28 未取到，未估算） |

→ **生命周期 5**（发售 ≤8 周 + 愿望单强，符合「未发售、定档 ≤8 周且 wishlist 强」档）。

---

## 7. 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **2**（宽松 3） | 复核有效词 25–27（脚本 48，剔 13 条 emoji/词组/圣经 + 并 7 组近重复），但**攻略型仅 1/27 = 3.7%**、只有 1 类页型到 3 词、21 个词是发售/价格/平台 → 3 分档附加条件不满足（[词库](keyword-results/handsover.md)） |
| 竞争 | **5** | `P=0`：6 条主查询 + 4 条补充查询**零专门攻略站**；Game8 只有 1 篇 release-date 文章不成 hub，`HANDS OVER codes` / `HANDS OVER wiki` 直接 0 结果（§4） |
| 内容扩展 | **3** | 仅 3 个具名小游戏 + 1 层无具名卡牌 + 0 角色 + 0 模式，约 8–11 页（基础 2 分）+ 中日文空缺 +1（[Steam](https://store.steampowered.com/app/4661070/HANDS_OVER/)） |
| 生命周期 | **5** | 2026-10-30 EA（+2 天）、愿望单 10 万+、demo 64 条 3/4 好评（[gamebrief](https://www.gamebrief.net/blog/hands-over-demo-next-fest-2026)）；Trends `[待确认]` |
| **总分** | **15** | 需求取 3 则 16；**但硬否决先命中**（见 §9） |

---

## 8. 成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | **0 元** | `*.vercel.app` 子域 |
| 托管 | **0 元** | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | `[待实测]` | 建站后回填台账 |
| 人工 | `[待实测]` | 目标 ≤6 小时/站 |
| 回本 PV | `总成本 ÷ (RPM/1000)`；RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺） | 组合回本口径 |

现金成本 0 → 回本 PV 由 token/人力折算决定，`[待实测]`；组合口径 30 天 300 PV ≈ **$0.3–1.5**（$1 与 $5 各算一次）。
**注**：本作可写页只有 8–11 页，达不到战略基线「首批 5–8 页 / 总词数 ≥8,000 / D+30 ≥15–20 页」的下限——即使建站，也**在结构上无法完成页数 KPI**。

---

## 9. 结论（两步判定）

**第一步 · 硬否决**：`需求 = 2 ≤ 2` → **命中否决，放弃**（不进入总分分流）。
（`竞争 = 5` 不构成否决。）

**第二步 · 总分（留档）**：2 + 5 + 3 + 5 = **15**；若按宽松口径把需求读成 3，则 **16 ≥ 14 → 会判「可建」**。**两种读法结论相反，属 Profile 明列的「硬否决边缘（需求 2/3 之间）」→ 标「需主管决策」。**

> **本员建议：放弃（按需求 2）。** 三条理由：
> 1. **攻略型 3.7%**——27 个词里没有一条 codes/tier/build/boss/weapon，唯一的攻略型词是 `crossplay`（属 FAQ 级，一页写完）；
> 2. **内容面撑不到战略基线**：3 个具名小游戏、0 张具名卡牌、0 名角色 → 8–11 页封顶，够不到「D+30 ≥15–20 页」；
> 3. **「demo 已把内容玩完」是官方口碑里的主流差评**——玩家自己都认为没多少内容可挖，攻略站无从下笔。
>
> **反方证据（供主 Agent 权衡）**：`P=0` 是真的空位，10 万愿望单 + 10-30 定档是硬需求信号，写「party game 怎么玩/怎么坑朋友」这类轻内容确实没人竞争；若主 Agent 认可「轻内容站 + 泛攻略」打法，可判「可建（需求 3 → 16）」。

### 若主 Agent 判「可建」，页型建议（MECE，明确不建 codes/tier/boss）

| 页型 | 首批 | 上限 | 说明 |
|---|:--:|:--:|---|
| 新手/怎么玩 | 1 | 2 | 桌面规则、回合流程、胜负条件 |
| 小游戏 | 2 | 3 | 鳄鱼拔牙 / Pie Face / 记忆序列（每个 1 页，含概率与心理） |
| 影响牌 | 1 | 2 | 总览 + 「何时出牌」时机表（无具名卡，只能写策略） |
| 联机/跨平台 | 1 | 2 | 5 人组队、crossplay 状态、好友通行证（`[待确认]`） |
| FAQ/信息 | 1 | 2 | 发售/价格/平台/配置/EA 路线图 |
| **合计** | **6** | **11** | 首批 6 页 ≈ 7,000–8,000 词（**低于基线 8,000，需放宽**）；codes 0 页 |
