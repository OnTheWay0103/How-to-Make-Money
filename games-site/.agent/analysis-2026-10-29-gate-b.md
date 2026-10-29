# 候选分析（第一段：竞争检查 + 硬门槛）— 2026-10-29 — B 组 #115–#123

> 岗位：候选分析员（`docs/agents/22` + `23`）｜规则：`docs/STRATEGY-选词与评分.md` §2.3 / §3.2 / §3.3
> SERP：WebSearch（2026-10-29，美区）；域名探测：`dig @1.1.1.1` + `curl --resolve`；发售日一手：Steam `appdetails`（9/9 成功）
> 范围：#115–#123 ｜ **只判竞争侧 + 硬门槛，未打需求/内容/生命周期分**

一手发售日核对（Steam）：115=11-04 / 116=11-06 EA / 117=11-10 EA / 118=11-12 / 119=11-16 / 120=November 2026（仅到月）/ 121=11-04 / 122=11-18 EA / 123=12-01。

## 汇总表

| # | 游戏 | SERP P | 探测 P | 竞争分 | 门槛结论 | 理由 |
|:--:|---|:--:|:--:|:--:|---|---|
| 115 | Slumber Realm | 0 | 0 | **5** | 继续（待采词） | 6 查询 + 8 域名全空，只有媒体预览 |
| 116 | Gear Up Einstein! | 0 | 0 | **5** | 继续（待采词） | 空位；机制只见官方补丁说明 |
| 117 | Midwest 90: Rapid City | 0 | 0 | **5** | 继续（待采词） | 空位；只有 RPS 预览 + B站试玩 |
| 118 | Gendo The Gatherer | 0 | 0 | **5** | 继续（待采词） | 空位；日文仅 GameWith 数据库页 |
| 119 | **Trees Hate You** | 1.0 | **2.5** | **2** | **待主管决策（P=2.5 临界）** | 探测出 3 家程序化 SEO 站（2 厚 1 薄） |
| 120 | **Demon Bluff** | 0.5 | **1.5** | **3** | 继续（待采词；无定档） | 探测出 `demonbluff.wiki.gg` 厚站 |
| 121 | FailRooms | 0 | 0 | 5 | **放弃（题材+内容量）** | Walking Simulator、无机制/物品系统 |
| 122 | Witch the Showdown | 0 | 0 | **5** | 继续（待采词） | 英文零站；中文仅游侠门户专题 |
| 123 | Emery Hearts | 0 | 0 | **5** | 继续（待采词） | 空位；仅开发商官网 + 媒体旧闻 |

## 逐候选要点

### #115 Slumber Realm — P=0 → 竞争 5
- 6 条查询：0 专门站；`guide`/`codes` 多为媒体预览与意图错位（原神 Realm of Slumber、ACNH 梦境岛、Where Shadows Slumber）。
- 探测：`slumberrealm.wiki` 等全无 DNS；`slumberrealm.wiki.gg` 401（对照 `terraria.wiki.gg` 200 验证 401 语义）；`slumberrealm.com` = Shopify 睡眠用品店（品牌撞名）。
- 风险：裸词泛化 + 同名电商 → 标题须锚 `Slumber Realm dice roguelike`；第三方内容口径冲突（30 内存/60 零食 vs 40/35）。

### #116 Gear Up Einstein! — P=0 → 竞争 5
- 6 条查询：0 专门站；`guide` 只回 Steam 官方 Demo Patch #1 与 play-coopgame 联机 FAQ 单篇。
- 探测：`gearupeinstein.wiki` 等全无 DNS；`.wiki.gg` 401。
- 风险：第三方发售日全错（媒体 10-29、GameWith 10-30 vs Steam 11-06）→ 以 Steam 为准；数值平衡（Einstein 速度 6%→3%、上限 25→30）只在 Demo Patch #1，需标版本。

### #117 Midwest 90: Rapid City — P=0 → 竞争 5
- 6 条查询：0 专门站；中文只有小红书试玩 + B站视频。
- 探测：`midwest90.wiki` 等全无 DNS。
- 风险：`233leyuan.com` 页是编造的手游描述（列入禁令来源）；语言仅英文。

### #118 Gendo The Gatherer — P=0 → 竞争 5
- 6 条查询：0 专门站；日文仅 `gamewith.jp/gamedb/17457` 数据库页。
- 探测：`gendothegatherer.wiki` 等全无 DNS。
- 风险：GameWith 写 11-13（JST）与 Steam 11-12 为时区差；Demo 与正式版功能不同。

### #119 Trees Hate You — 探测 P=2.5 → 竞争 2（本轮重点）
| 域名 | HTTP | 规模 | 更新 | 判定 |
|---|:--:|---|---|---|
| `trees-hate-you.wiki` | 200 | 59 URL / 7 类；walkthrough 2,335 词 | 2026-10-12 | 厚 |
| `treeshate.com` | 200 | 22 URL（beginner-survival/traps/secrets/controls/speedrun…）；/traps 1,432 词 | 2026-10-19 | 厚 |
| `treeshateyou.wiki` | 200 | 56 路径但 38 条是 /demo/ 平台价格，/guide/ 仅 6 条 | 2026-04 | 薄 |

- `SERP P=1.0` → `探测 P = 2 + 0.5×1 = 2.5` → 竞争 **2**。敏感性：`treeshateyou.wiki` 也算厚 → P=3.0 硬放弃。
- 结论：待主管决策；可写面窄（demo 2 关、无 build/tier/数值），页型与三家完全重合。

### #120 Demon Bluff — 探测 P=1.5 → 竞争 3
| 域名 | HTTP | 规模 | 更新 | 判定 |
|---|:--:|---|---|---|
| `demonbluff.wiki.gg` | 200 | 142 篇 / 662 页 / 1,812 次编辑；50+ 角色页；单页 1,100–1,600 词 | 2026-10-08 | 厚 |
| `minmax.wiki/demon-bluff` | 200 | 12 路径，单页 ~1,200 词 | revisions 停 2025-08 | 薄 |
| `demonbluff.com` | 200 | 1KB 停放页 | — | 不计 |

- `SERP P=0.5` → `探测 P=1.5` → 竞争 **3**。结论：继续（待采词；无定档，建议观察）。
- 风险：wiki.gg 首页仍写「Q1 2026 发售」（过时）；血量惩罚数值 B站 v0.762b 与 wiki 冲突（Drunk −2 / −3）→ 必须标版本。

### #121 FailRooms — P=0 → 竞争 5，但**放弃**
- 6 条查询：0 专门站（只有 B站实况与聚合页）；探测全无 DNS。
- 放弃依据（与竞争无关）：Steam 标签 Walking Simulator / Exploration / Surreal，无战斗、无角色/物品/构筑系统；Demo 10–15 分钟 → 撑不到 3 页，命中「内容扩展 0 = 淘汰」。

### #122 Witch the Showdown — P=0 → 竞争 5
- 6 条查询：英文 0 专门站；中文仅 `gl.ali213.net` 门户攻略集（非独立站）；日文 `game-tier.com` 1 家（不进 P）。
- 探测：全无 DNS。风险：EA 首发仅 2 角色 / 31 卡 / 8 boss（正式版 60 卡/16 boss）；GTA6 同日。

### #123 Emery Hearts — P=0 → 竞争 5
- 6 条查询：0 专门站；媒体发售日全面过时（9-02 / 11-11 vs Steam 12-01，已延期两次）。
- 探测：`emeryhearts.com` = 开发商 Indie Dev Hell 官网（非攻略站）。风险：品牌撞名（服装系列、KH 同人 OC）。

## 竞争侧最值得继续

1. **#116 Gear Up Einstein!**（竞争 5）— 竞争空位 + 机制可核验来源扎实（29 角色 / 100+ 道具 / 48 perk）。
2. **#117 Midwest 90: Rapid City**（竞争 5）— 双循环天然分页型，英文零站，EA 有明确路线图。
3. **#115 Slumber Realm**（竞争 5）— 150+ 卡可拆多页；隐患是裸词泛化 + 同名电商。
- 补充：#120 需求侧信号最强（230K 愿望单、playtest 30 万人、中文社区热），竞争 3 仍可做，唯一问题是无定档。

## 数据获取失败 / 不可读

| 项 | 状态 | 影响 |
|---|---|---|
| `*.fandom.com` ×9 | 返回 000（本机不可达） | Fandom 无法实测；6 条查询未返回本作页，按 0 计但标「未实测」 |
| `treeshateyou.wiki/sitemap.xml` | 301 | 改用首页链接数代 URL 数 |
| 多处 `.wiki.gg` | 首次 429，复测 401 | 按不存在记（`terraria.wiki.gg`=200 验证 401 语义） |
| `minmax.wiki` 更新时间 | 无结构化日期，revisions 停 2025-08 | 判薄；若近期更新则 1.5→2.0，仍为竞争 3 |
| Google Trends | 未查（本段不做生命周期） | 不影响 |

## 方法层结论（与 A 组一致）

#119 是本轮唯一「SERP 说蓝海、实测已饱和」的候选：只看 6 条查询会判 P=1.0（竞争 4）直接建站，实测 P=2.5（竞争 2）。#120 同理（0.5→1.5）。域名探测必须继续作强制步骤 —— 已写入 `docs/STRATEGY-选词与评分.md` §3.3。
