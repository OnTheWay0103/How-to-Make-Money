# 候选分析 — #94 One Way Tickets（再再启程）— 2026-10-28

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维 / 三道闸门 / `P = T + 0.5t` / 硬否决 + ≥14）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/onewaytickets.md`
> 一手数据：SERP 走 WebSearch（2026-10-28，美区 `hl=en`，中/日文按原样跑）；Steam 商店页 2026-10-28 抓取
> 未做：未建站、未改站点目录、未重采词、未改 `CANDIDATE-POOL.md` / `INDEX.md`、未 commit
> 动态字段抓不到一律 `[待确认]` + 抓取日，**未估算**

---

## 1. 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **4817620**（`再再启程 One Way Tickets`） | [商店页](https://store.steampowered.com/app/4817620/)（2026-10-28 抓取） |
| 开发 / 发行 | Future Tech.（制作人：B 站 UP 主「怕上火暴王老菊」） | 同上；[GameLook 2026-10-27](http://www.gamelook.com.cn/2026/10/604843/) |
| 类型 | Roguelite 增量养成 / 载具战斗冒险（单人） | 同上 |
| 发售 | **2026-10-23 EA**（任务书写的 10-22 与 3DM 记的 10-23 不一致，取商店页口径，精确时分 `[待确认]`）；EA 期 6–12 个月 | [Steam](https://store.steampowered.com/app/4817620/)、[3DM 游戏库](https://dl.3dmgame.com/pc/152412.html) |
| 价格 | ¥68（首发 −20% ≈ ¥54.4）/ $17.99（$14.39） | 同上 |
| 评测 | Steam **特别好评 ~86%**；峰值 CCU ~4,070（10-27）；3DM 用户分 7.9（55 人） | [GameLook](http://www.gamelook.com.cn/2026/10/604843/)、[3DM](https://3dm.games/index/steam/detail/app_id/4817620.html) |
| 口碑风险 | 多篇报道指「**人情票**」占比高（支持 UP 主而非作品本身），差评集中在无键位/无手柄、点击微操重复、新手引导弱 | [今日头条](https://www.toutiao.com/article/7701362039230382633/) |
| 语言 | 简中 / 繁中 / 英（日文 `[待确认]`） | [Steam](https://store.steampowered.com/app/4817620/) |
| EA 内容量 | 4/6 群系 × 每群系 3 子场景；30+ 角色、100 遗物、60 设备；15–18h | 同上 |
| 词库 5 数字 | 原始 108 / 去重 84 / **有效词 28** / 噪声 66.7% / 品牌锚定率 33.3% | `keyword-results/onewaytickets.md` 头部 |

---

## 2. 硬门槛（有效词复核 + 内容可写性）

### 2.1 有效词复核（**不抄 28**）—— 复核结果 **0**

逐条剔除撞名/通用义。判定标准：词义必须锚定「这款 2026 年的 roguelite 载具游戏」，否则出局。

| 词库分类 | 条数 | 逐条判定 | 保留 |
|---|:--:|---|:--:|
| How-to | 2 | `how do one way tickets work`、`why are one way tickets more expensive reddit` —— 均在问**机票定价**（"为什么单程票更贵"），指向航空 | 0 |
| Info/发售平台 | 4 | `buying/two one way tickets (vs round trip) reddit` ×4 —— **买机票**策略，与游戏无关 | 0 |
| Other | 22 | ① `one way tickets to {atlanta/california/chicago/dallas/florida/hawaii/houston/japan/las vegas/miami/new york/phoenix arizona/san diego/seattle}` 共 13 条 —— **航线搜索**；② `are one way tickets cheaper`、`are one way tickets more expensive`、`is it better to buy one way tickets`、`one way tickets cheap`、`one way tickets or round trip`、`one way tickets vs round trip`、`one way tickets meaning`、`one-way tickets`（裸词，航空术语）共 8 条 —— 机票通用义 | 0 |
| **合计** | **28** | **无一条锚定本作** | **0** |

**结论：复核后有效词 = 0（门禁线 20）。**

研究员的 66.7% 噪声率**低估**了污染：被剔进噪声表的确实全是航空/歌曲，但**留在「有效词」里的 28 条同样是同一族航空词**——它们只是没有出现 `flight`/`amtrak` 这些显式噪声词，所以逃过了脚本的同名过滤。**真实品牌锚定率 = 0%**（脚本的 33.3% 是把「one-way tickets」这个英文通用短语当成了锚定成功）。

**这不是「需求低」，是「锚定词选错」**（`STRATEGY-选词与词库.md` 3.1 / Profile 异常处理：锚定率 <30% MUST 先查写法/别名，MUST NOT 直接判需求低）。

**别名线索（已存在的真实需求入口）**：
- 中文官方名 **「再再启程」** —— B 站实况、3DM 资源页、游侠口碑页、GameLook 报道均以此为标题（[B 站](https://www.bilibili.com/video/BV1z9nt6aEtB/)、[游侠](https://0day.ali213.net/html/2026/159411.html)）
- 英文须加限定：`One Way Tickets game` / `One Way Tickets 再再启程`
- **另有同名别作**：2018 年国产文字 AVG《One-way Ticket · 单程票》（[app 856370](https://store.steampowered.com/app/856370/)）在 4/6 条查询里反复出现——即使换中文名，也仍有一层同名干扰

### 2.2 内容可写性（硬门槛第二条）

**通过**。EA 版有明确的系统与图鉴：设备（60）、角色/旅人（30+）、怪物（按群系）、遗物（Steam 记 100，社区 MOD 数据表记 195 种）、掉落物、5 类营地资源（里程券/食物/建材/珍宝/秘能）、6 种状态（点燃/机械故障/腐蚀/缠绕/潮湿）、4 群系 × 3 子场景。来源：[Steam 官方](https://store.steampowered.com/app/4817620/)、[3DM MOD 帖（数据表）](https://bbs.3dmgame.com/thread-6714890-1-1.html)。

---

## 3. 需求（三道闸门）

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **复核 0**（脚本 28，全部为机票/航空通用义） | **❌ 淘汰线** |
| 攻略型占比 ≥30% | 攻略型 0 / 28 = **0%**（Codes/Tier/Build/Weapons/Boss 四类后缀采集**全部 0 条返回**） | 触发「发售日陷阱封顶」；但词量为 0，已无分可封 |
| 页型覆盖 ≥3 类各 ≥3 词 | 0 类 | ❌ |
| 第三方信号 ≥1 | ① Steam 86% / 1,487 条 ② 峰值 CCU ~4,070（10-27）③ 3DM 7.9 分 | ✅（不是单源，但**这些是「游戏热度」不是「攻略需求」**） |
| 品牌锚定率 ≥50% | **真实 0%**（脚本 33.3% 为假阳性） | ❌ 污染，MUST 换写法重采 |

> **需求 = 0**。第三方信号很强（86%、4,070 CCU、7.9 分），但三道闸门第一道就没过——**热度 ≠ 攻略需求**，这正是 2026-10-28 新规则要拦的形态。

---

## 4. 竞争（6 条固定查询，2026-10-28 实跑）

### Q1 EN `One Way Tickets wiki`（返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | web.archive.org/web/20230306…/en.wikipedia.org/wiki/One-way_travel | 百科（意图错位，非游戏） |
| 2 | ncyclopedia.thefreedictionary.com/one-way+ticket | 词典（不计） |
| 3 | en-wikipedia--on--ipfs-org.ipns.dweb.link/wiki/One-way_travel | 镜像（不计） |
| 4 | web.archive.org/all/20141229…/One-way_travel | 镜像（不计） |
| 5 | encyclopedia.marginalia.nu/article/One-way_travel | 镜像（不计） |
| 6 | wikiwand.com/EN/One-way_travel | 镜像（不计） |
| 7 | nacion.com/blogs/de-viaje-con-jairo/… | 西语媒体（不计） |
| 8 | industrialdictionary.com/term/one-way-ticket | 词典（不计） |
| 9 | airtechzone.iata.org/aidm_model/… | IATA 标准（不计） |
| 10 | ja.wikipedia.org/w/api.php… | 维基（不计） |

> 前 10 **无一条与游戏相关**；`One Way Tickets wiki` 这个查询在英文世界里被「单程机票」完全占满。

### Q2 EN `One Way Tickets guide`（返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/單程機票 | 百科（不计） |
| 2 | vietnam.vn/en/mua-ve-khu-hoi-hay-dat-rieng-tung-chieu… | 旅游媒体（不计） |
| 3 | bachaway.bookaway.com/zh/routes/japan/hiroshima-to-fukuoka/… | 票务（不计） |
| 4 | bookaway.com/ko/routes/japan/fukuoka-to-okayama/… | 票务（不计） |
| 5 | westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/ | 铁路官方（不计） |
| 6 | tw.trip.com/moments/detail/bangkok-191-150506379/ | 票务（不计） |
| 7 | bookaway.com/vi/routes/japan/fukuoka-to-hiroshima/… | 票务（不计） |
| 8 | 12go.trainline.com/en/trip-page/JP0acW0a994h1t0WH03OmFW5/… | 票务（不计） |
| 9 | lot.com/ro/en/help-center/making-a-booking/can-i-book-a-one-way-ticket | 航司 FAQ（不计） |
| 10 | company.wego.com/ufaq-category/my-booking-and-ticket-information/ | 票务（不计） |

### Q3 EN `One Way Tickets codes`（**仅返回 7 条**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | kkday.com/ms-my/product/100299-foreigners-only-taiwan-high-speed-rail-ticket… | 票务促销（不计） |
| 2 | sbn.maybank.co.id/en/Promotion/CreditCard/…/KLIA-Ekspress | 银行促销（不计） |
| 3 | gazoobie.com/pick/41012911 | 促销聚合（不计） |
| 4 | bangkokair.com/ktc | 航司促销（不计） |
| 5 | ferrygogo.co.uk/discount/tallink-silja/ | 促销（不计） |
| 6 | vouchercloud.com/ryanair-vouchers | 促销（不计） |
| 7 | jetsotoday.com/airport-express-20261102/ | 促销（不计） |

> `codes` 意图在游戏侧本就是空（游戏无兑换码，`Tier list` / `best build` / `wiki` 三个后缀在词库采集时也是 **0 条返回**）。这里返回的全是机票优惠码，**意图完全错位**。

### Q4 ZH `One Way Tickets 攻略`（返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | tw.trip.com/moments/detail/bangkok-191-150506379/ | 票务（不计） |
| 2 | afar.com/magazine/are-two-one-way-tickets-cheaper-than-a-roundtrip-flight | 旅游媒体（不计） |
| 3 | flytap.com/en_es/one-way-flights | 航司（不计） |
| 4 | sp.booking.com/guides/article/flights/one-way-vs-round-trip… | 旅游指南（不计） |
| 5 | bookitbutton.booking.com/guides/article/flights/one-way-vs-round-trip… | 同上（不计） |
| 6 | borderpilot.com/blog/booking-one-way-tickets-with-return-visa-proof | 旅游博客（不计） |
| 7 | traveloka.com/en-au/explore/tips/multi-city-vs-one-way-flights/1004014 | 票务（不计） |
| 8 | help.going.com/hc/en-us/articles/31549484256532-One-Way-Flights | 票务（不计） |
| 9 | baike.baidu.com/item/單程機票 | 百科（不计） |
| 10 | nacion.com/blogs/de-viaje-con-jairo/… | 西语媒体（不计） |

### Q5 ZH `再再启程 攻略 wiki`（改用官方中文名复核，**仅返回 1 条**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | down.ali213.net/pcgame/nafhba.html | 中文下载/资料站单页（游戏介绍，非攻略；不计） |

> 换中文名后 SERP **不足 10 条且只有 1 条下载页** → 中文侧**零攻略站**，连骨架 wiki 都没有。

### Q6 JA `One Way Tickets 攻略 ゲーム wiki`（**仅返回 6 条**）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | steamcommunity.com/id/gfcjyb/recommended/856370/ | **别作**《单程票》Steam 评测（不计） |
| 2 | acheev.net/game/243747772/s/one-way-ticket-dan-cheng-piao | 别作成就页（不计） |
| 3 | steamcommunity.com/id/gfcjyb/recommended/856370/?l=koreana | 同上（不计） |
| 4 | steamcommunity.com/id/keithkmy/recommended/856370 | 同上（不计） |
| 5 | bbs.3dmgame.com/thread-6714890-1-1.html | 中文 MOD 帖/论坛（不计） |
| 6 | deals.razer.com/games/one-way-tickets | 商店聚合（不计） |

> 日文侧**无任何本作页面**；命中的是 2018 年同名别作。

### 4.1 P 值

| 站 | 类型 | 依据 |
|---|---|---|
| — | **T = 0 / t = 0** | 6 条查询里**没有出现任何一个「围绕本作的独立域名站」**（英文 0、中文 1 条下载页、日文 0） |

**`P = 0 + 0.5 × 0 = 0`** → 落 `0`（空位）→ **竞争 5**。

> 冷却提示：`P=0` 在这里的含义是「**没人做**」，不是「好做」——因为**连词都没有**。空位原因是品牌不可检索（名字是英文高频短语、中文名又小众），不是竞争者失职。

---

## 5. 内容扩展

**可核验实体（每类有来源）**：

| 类别 | 可写实体 | 来源 |
|---|---|---|
| 角色/旅人 | **30+** | [Steam 官方](https://store.steampowered.com/app/4817620/) |
| 遗物 | 100（官方）/ **195**（社区数据表） | Steam；[3DM MOD 帖](https://bbs.3dmgame.com/thread-6714890-1-1.html)、GitHub `ChenXiQianQiu/OneWayTicketsMod` |
| 设备 | **60** | Steam |
| 状态效果 | 6（点燃/机械故障/腐蚀/缠绕/潮湿） | 3DM MOD 数据表 |
| 营地资源 | 5（里程券/食物/建材/珍宝/秘能） | 同上 |
| 群系/路线 | 4 群系 × 3 子场景（EA 期）= 12 个可写场景页 | Steam、[ali213 资料页](https://down.ali213.net/pcgame/nafhba.html) |
| 机制 | 能量管理、载具改装、伙伴驻站（上限 6 人）、天气、商人/随机事件、大本营永久升级 | Steam |

**页型可写量**：图鉴页（角色 30 / 遗物 100+ / 设备 60）+ 群系路线页 12 + 机制页 6 + 新手/配置 2 ≈ **24–30 页，5 类各 ≥5 条**。
**多语言**：中文侧零攻略站、日文侧零页面 → **+1**。

→ 基础 4（20–29 页、≥4 类）+ 多语言 1 = **内容扩展 5**（保守可记 4）。

---

## 6. 生命周期

| 依据 | 值 |
|---|---|
| Steam 发售日 | **2026-10-23 EA** → 距今 **5 天**，≤8 周 |
| 热度 | 峰值 CCU ~4,070（10-27）；86% 特别好评（1,487 条） |
| 口碑质量 | ⚠️ 多篇报道指好评里「人情票」比例高，且差评集中在「无手柄/点击微操重复/引导弱」——**热度真实、满意度存疑** |
| EA 计划 | 6–12 个月，现为计划内容的 ~70%（4/6 群系）→ 后续有更新节点 |
| Google Trends 28 天 | `[待确认]`（2026-10-28 未取到，未估算） |

→ **生命周期 5**（发售 ≤8 周 + CCU/好评有量）。

---

## 7. 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **0** | 词库 28 条「有效词」复核后**全部是机票/航空通用义**（13 条「one way tickets to {城市}」+ 8 条机票比价 + 4 条买票策略），无一锚定本作；`codes`/`tier list`/`best build`/`wiki` 四个后缀采集**返回 0 条**（[词库](keyword-results/onewaytickets.md)） |
| 竞争 | **5** | `P=0`：6 条查询无一「围绕本作的独立域名站」，英文被「单程机票」占满、中文仅 1 条下载页、日文仅命中 2018 同名别作（Q5/Q6 记录见 §4） |
| 内容扩展 | **5**（保守 4） | 30+ 角色 / 100（数据表 195）遗物 / 60 设备 / 12 场景 / 5 资源 / 6 状态，24–30 页 ≥5 类（[Steam](https://store.steampowered.com/app/4817620/)、[MOD 数据表](https://bbs.3dmgame.com/thread-6714890-1-1.html)）；中日文侧空缺 +1 |
| 生命周期 | **5** | EA 2026-10-23（5 天）、峰值 CCU ~4,070、86% 特别好评（[GameLook](http://www.gamelook.com.cn/2026/10/604843/)）；Trends `[待确认]` |
| **总分** | **15** | 但**硬否决先命中**（见 §9） |

---

## 8. 成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | **0 元** | `*.vercel.app` 子域 |
| 托管 | **0 元** | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | `[待实测]` | 建站后回填台账 |
| 人工 | `[待实测]` | 目标 ≤6 小时/站 |
| 回本 PV | `总成本 ÷ (RPM/1000)`；RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺） | 组合回本口径 |

现金成本 0 → 回本 PV 只由 token/人力折算决定，数值上 `[待实测]`；按组合口径 30 天 300 PV ≈ **$0.3–1.5**（$1 vs $5 各算一次）。**但本项目前连「词」都没有，PV 预估无意义。**

---

## 9. 结论（两步判定）

**第一步 · 硬否决**：`需求 = 0 ≤ 2` → **命中否决，直接放弃，不看总分。**
（`竞争 = 5` 不构成否决；但竞争的空位来自「没人能搜到这款游戏」，不是机会。）

**第二步 · 总分（仅作留档）**：0 + 5 + 5 + 5 = **15**，若强行过否决会判「可建」——**这正是新规则要拦的情形**：内容与生命周期满分把一个搜索不可见的游戏抬过线。

> **结论：淘汰（门禁未过）。** 定性不是「游戏不好」（86%、4,070 CCU、内容量 24–30 页都成立），而是**品牌不可检索**：英文名 `One Way Tickets` 是机票行业高频短语，`One Way Tickets wiki/guide/codes/攻略` 四条查询在英文与中文世界**全部指向机票**；中文官方名「再再启程」虽真实存在，但英文侧零检索量。

### 复采条件（交主 Agent 决定是否重跑验证轮）

| 项 | 条件 |
|---|---|
| 何时 | 立即（游戏已 EA 5 天，窗口 ≤8 周） |
| 锚定词 | ①中文官方名 **`再再启程`**（主锚，B 站/3DM/游侠都用它）②**`One Way Tickets game`**（英文带限定） |
| 必查 | 遗物/设备/角色图鉴词、载具构筑词、群系路线词、`再再启程 攻略`/`再再启程 图鉴` |
| 判据 | 复核后**真正锚定本作的**有效词 ≥20 且攻略型 ≥30% → 重跑四维（届时需求可能 3–4、竞争仍近 0，总分有希望 14–16） |
| 风险 | 即使中文词达标，**英文站仍抢不到英文流量**（英文名不可检索）；若做，只能做中文站，与「英文攻略站矩阵」的主航道不一致 |

> 若主 Agent 走「中文站」路线，本候选值得重采一次；若只做英文站，**此候选结构性排除**。
