# GONE Fishing — 页面矩阵

> 建站任务 BUILD-R3-GONEDFISH（候选池 #92，`selection-2026-10-26-round3.md` 第五节）。
> 词库来源 `keyword-results/gonefishing.md`（171 有效词，人工复核 97 条品牌词）。
> 素材见 `keyword-results/gonefishing-sources.md`。
> 口径：一个搜索意图 = 一个内页；页型是候选池不是必建清单；本作**无兑换码**，`codes` 位由「每日祭坛配额」核心机制页顶替。
> 差异化约束：本作已有厚 Fandom（Species / Bait / Mechanics / Perks），**矩阵刻意不设鱼种表、鱼饵表**，
> 只做 Fandom 没覆盖的「怎么打、每日路线、团队分工、敌对生物应对、升级优先级、Boss」。

## 分类（MECE）

| 分类 | 覆盖的搜索意图 | 不覆盖 |
|---|---|---|
| A. 开局（First hours） | 新手怎么上手、前几天做什么 | 具体鱼种图鉴 |
| B. 每日生存循环（Daily loop） | 祭坛配额、白天/夜晚、路线与时间分配 | 团队分工 |
| C. 团队（Team） | 联机人数、角色分工、单人可行性、房主设置 | 单人技巧细节 |
| D. 威胁（Threats） | 夜间敌对生物、最终 Boss、传奇渔获打法 | 升级经济 |
| E. 成长（Progression） | 升级花费顺序、Perk 选择、Totem/Trinket 取舍 | 鱼饵图鉴 |
| F. 事实问答（Reference） | 发售/价格/平台/联机/存档/成就 | 玩法攻略 |

分类名不是 `gameplay` / `general` 这类大空类；A/B/C/D/E/F 互不包含。

## 页面清单

| 页面名（slug） | 目标搜索词 | 搜索意图 / 要回答什么 | 页型 | 优先级 | 素材源（≥2） | 目标词数 |
|---|---|---|---|---|---|---|
| `guides/gone-fishing-beginner-guide` | gone fishing beginner guide | 第一周怎么活：核心循环、每天先做什么、五个最贵的新手错误 | beginner | P0 | ① Steam 商店页（官方）② gonefishing.gg/faq（官方）③ Steam 社区攻略 | 1,400 |
| `guides/gone-fishing-sacrifice-quota` | gone fishing sacrifice quota / how to survive the night | 每日配额怎么涨、祭坛怎么交、蓝火什么时候出现、缺配额后果、当天路线怎么排 | boss-or-mechanic | P0 | ① Steam 商店页（官方）② Steam 社区攻略 ③ Fandom Mechanics | 1,350 |
| `guides/gone-fishing-co-op-guide` | gone fishing co-op / gone fishing multiplayer | 1–8 人怎么组队、四个岗位怎么分、单人能不能玩、建房与进度共享 | beginner | P0 | ① Steam 商店页分类（官方）② Steam 1.0 公告（官方）③ Steam 社区讨论 | 1,350 |
| `guides/gone-fishing-enemies-guide` | gone fishing enemies / how to survive night | 夜间七类敌对生物逐个怎么躲/怎么杀、哪些必须睡、尸体当饵 | boss-or-mechanic | P0 | ① Steam 商店页（官方）② Steam 热修公告（官方）③ Fandom Mechanics ④ 小红书实测 | 1,400 |
| `guides/gone-fishing-best-perks` | gone fishing best perks | 9 个 Perk 解锁条件、只能带 2 个时怎么选、单人与团队两套推荐 | tier-list | P0 | ① gonefishing.gg/faq（官方）③ Fandom Mechanics ④ Steam 讨论 | 1,300 |
| `guides/gone-fishing-lake-entity-boss` | gone fishing final boss / lake entity | 1.0 最终 Boss 怎么打、眼球/滚龟/鲸鱼核弹怎么处理、奖励 MOBY 杆 | boss-or-mechanic | P0 | ① Steam 1.0 公告（官方）② Steam 热修公告（官方）③ Steam 社区讨论 | 1,350 |
| `guides/gone-fishing-legendary-fish` | gone fishing lochness monster | Nessie 在哪些图、需要什么深度/饵分/装备、为什么多数人钓不到 | boss-or-mechanic | P0 | ① Steam 商店页（官方，点名 Lochness）② gonefishing.gg/faq（官方，大鱼条件）③ Fandom Species | 1,300 |
| `app/faq`（静态页） | gone fishing release date / price / crossplay / solo | 发售日、1.0 与 EA、价格、平台、联机人数、单人、Demo、是否有兑换码、支持语言、Hardcore | faq | P0 | ① Steam 商店 API（官方）② Steam 1.0 公告（官方）③ 官方 FAQ | 900（问答页） |
| `app/tier-list`（静态页） | gone fishing upgrade priority | 钱先花在哪：Big Grill / Fish Value / Line / Totem / Trinket 的先后顺序（花费顺序，不是强度榜） | tier-list | P1 | ① gonefishing.gg/faq（官方）② Steam 1.0 公告（官方） | 600 |
| `guides/gone-fishing-maps-guide` | gone fishing maps | 五张图的鱼种/危险/深度差异，什么时候换图 | boss-or-mechanic | P1 | ① Steam 商店页（官方）② Fandom Species ③ SteamDB 更新记录 | 1,300 |
| `guides/gone-fishing-bait-guide` | gone fishing best bait | 不是鱼饵表：什么阶段用高饵分饵、哪些饵只刷特定图、饵分怎么算 | boss-or-mechanic | P2 | ① gonefishing.gg/faq（官方）② Fandom Bait | 1,200 |
| `guides/gone-fishing-cooking-gambling` | gone fishing fish value / gambling | 烤鱼 +33%、赌博倍率、珍珠转化，什么时候卖什么时候献 | boss-or-mechanic | P2 | ① Steam 商店页（官方）② 官方 FAQ ③ Steam 社区攻略 | 1,200 |
| `guides/gone-fishing-achievements` | gone fishing achievements | 53 个成就里哪些会自然拿到、哪些要专门刷 | faq | P2 | ① Steam 商店 API（官方）② Steam 社区 | 900 |

## P0 覆盖检查

- P0 行：**8**（7 篇 guide + 1 个静态 FAQ），≥5 达标；每行都有目标词与搜索意图。
- 首批实建：**7 篇 guide + 2 个静态页（/faq、/tier-list）**，5 类页型覆盖：
  - `codes` → 用 `gone-fishing-sacrifice-quota` 顶替（本作无兑换码，且 `GONE Fishing codes` 全部被 Roblox 同名游戏占位）
  - `beginner` → `gone-fishing-beginner-guide`、`gone-fishing-co-op-guide`
  - `tier-list` → `gone-fishing-best-perks` + 静态 `/tier-list`（花费顺序）
  - `boss-or-mechanic` → `gone-fishing-sacrifice-quota`、`gone-fishing-enemies-guide`、`gone-fishing-lake-entity-boss`、`gone-fishing-legendary-fish`
  - `faq` → `/faq`
- 词数：7 篇 guide 目标合计 9,450 词（≥8,000），单篇 ≥1,300（≥1,200）；实际合计 **9,950 词**（`lint-guides.mjs` 口径）。
- `related` 全部指向本矩阵内的页，不指向未建页。

## 与 Fandom 的差异化

| Fandom 已覆盖 | 本站做法 |
|---|---|
| Species / Bait 表（80+ 鱼、饵分） | **不做表**；只在「大鱼条件」里引用官方 FAQ 的饵分门槛（60+、Troll 86） |
| Mechanics / Perks 定义 | 不抄定义，做**选择与顺序**：只带 2 个 Perk 怎么配、钱先花哪 |
| 无 | 新手第一周路线、每日配额路线、1–8 人岗位分工、七类敌人逐个应对、Boss 分阶段、Nessie 打法 |

> 本作 Fandom 是唯一厚站（`P = 1.0`）。与其比「资料全」，不如比「能不能照着打过」。
