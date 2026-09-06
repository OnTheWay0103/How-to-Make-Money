# TEARS OF METAL 每日扩充记录 — 9/7

> 模式: expand-feedback | 站点: tearsofmetalwiki | 游戏: Tears of Metal (Paper Cult, Steam EA app 1913120, EA launch 2026-07-22)
> 角色: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 日期: 2026-09-07
> 结果: ⏭️ SKIP（采集后无选题满足「高频 ≥3 独立来源 + 真缺口 + 不编造」四条件；9/6 已产出 co-op-revive-guide，本站为非连续跳过）

## 一、采集了哪些源（真实执行，2026-09-07）

### 版本/官方动态
- [thegameswiki — Tears of Metal Update History](https://thegameswiki.com/tears-of-metal/wiki/update-history)（检索快照，直接抓取 429，靠搜索摘要交叉）— 版本史仍止于 **v0.14.58630（8/14）**；0.8.57278→0.14.58630 全为 7/24–8/14；**无 9 月任何版本条目**。独立检索 "v0.15/v0.16/September patch" 均 0 结果。
- Paper Cult Steam 公告（app 1913120 allnews）多次 WebFetch ECONNREFUSED（Steam 数据中心封锁），改由搜索引擎 site: 摘录确认：最新可查公告为 v0.14.58630 (8/14) Multiplayer Bug Fixes 系列；无 9 月公告被索引。

### Steam 讨论区 / 评测（负面优先）
- [Steam Community 讨论串 "Demo Feedback after 4 Runs in Multiplayer"](https://steamcommunity.com/app/1913120/discussions/0/592907032315681857) — 内容为 demo 时代（2025 beta/playtest）反馈：同伴在 lost run 后残留的 bug、绿/球能力待 buff、初始输入延迟（疑 NVIDIA Smooth Motion）。均为 demo 期、非当前 EA build 新反馈。
- [Steam 评测（76561198845272948，中文）](https://steamcommunity.com/profiles/76561198845272948/recommended/1913120/) — 数值平衡批评簇：治疗稀缺、敌人数值膨胀、精英怪「数值怪」易破防、闪避冷却长、低血量无翻盘。与下列编辑评测同属 launch 后平衡批评。
- [VaporLens — Tears of Metal Churn & Retention Analysis](https://vaporlens.app/app/1913120/tears_of_metal/stats/analysis)（7/22–7/23 launch 窗口）— 流失风险 top1 "Bad Invulnerability Mechanics" 10.1%；Design 类 "Limited Player Moveset"；Technical 类多人网络问题占 26.7%。
- Reddit：site:reddit.com 多组查询仍 0 结果（无活跃专属 subreddit，延续 8/29/9/5/9/6 判断）。

### 编辑/独立攻略站（交叉验证候选主题）
- [ingamenews — Patch 0.11.57863 Balance Adjustments](https://ingamenews.com/pc-gaming/tears-of-metal-patch-0-11-57863-balance-adjustments-and-performance/) — Act 2 过渡已官方平滑化 + Act 2 Captains 血量/格挡调整（旧反馈已被 0.11 处理）。
- [VDGMS — Tears of Metal Review](https://www.vdgms.com/reviews/tears-of-metal-review) — 结算货币偏少、永久升级偏贵（经济/成长节奏批评）。
- [GameScout — Tears of Metal EA worth it?](https://gamescout.co.uk/2026/07/tears-of-metal-early-access-is-it-worth-it/) + [20min.ch 法语评测](https://www.20min.ch/fr/story/test-jeu-video-tears-of-metal-prometteur-mais-encore-trop-brouillon-103606650) — 大场面视觉混乱/可读性、BOSS 血厚拖沓。
- [whisperofthehouse.com — Tears of Metal hub](https://www.whisperofthehouse.com/tears-of-metal) — 独立 fan wiki：六货币体系（Triskeles/Scrolls/Dragonstone Shards/Statues/Gems/Coins）、Trials of the Mother（通关解锁、10 种、可叠加）、Companion 槽位与 Commander 槽位分离等。**单一第三方来源，多数细节无第 2 源交叉。**
- [thegameswiki — Companions](https://thegameswiki.com/tears-of-metal/wiki/companions) — Aodh the Vigil 为 v0.12 首个官方命名 Companion，「unlockable rather than granted」，但**无任何公开解锁条件**。

## 二、候选选题为何全部不成立（对照现有 32 slug 全查）

| 候选（玩家高频抱怨/搜索） | 来源数 | 否决理由 |
|------|------|------|
| 治疗稀缺/治疗喷泉太贵/回复不足 | ≥4（Steam 评测 + VDGMS + douban + GameScout） | **已被 healing-guide 整体覆盖**（§1 为什么贵/§2 三来源/§3 金币预算/§6 复活已按 v0.12 校准/§8 checklist），站内无信息矛盾 → 写即自噬。 |
| 敌人数值膨胀/精英怪「数值怪」/被群殴无翻盘 | ≥4（Steam 评测 + douban + GameScout + VaporLens Bad Invulnerability） | 已被 threat-level-difficulty-guide + combat-tips（格挡/闪避/敌人预兆）+ elite-enemy-guide + survival-tips（Stamina/撤退）多层覆盖 → 自噬。 |
| 复活规则困惑 | ≥3（v0.12 官方 + thegameswiki + 媒体转载） | **9/6 已产出 co-op-revive-guide** 专篇；healing-guide §6 已随 9/6 P0 校准（commit 8956007）→ 昨日刚覆盖，禁止自我复制。 |
| 大场面 FPS/卡顿 | ≥5（官方性能补丁 + 2UpSkill + XModHub×3 + GamerScout） | 9/5 已产出 low-fps-fix-guide；crash-launch-fix-guide 管启动崩溃 → 已覆盖。 |
| 多人 desync/连接/跨平台 | ≥3（官方承认 + 讨论区 + 媒体） | multiplayer-connection-fix-guide 已覆盖（含 crossplay 临时关闭 + Beta 分支）；9/6 记录已排除同类。 |
| 无中途存档/长 run 掉进度 | ≥3（官方 top-priority + 媒体 + 差评） | save-system-guide + patch-notes 已覆盖（含开发中状态）。 |
| 同伴解锁（Aodh the Vigil） | 1（thegameswiki 单一） | 官方无公开解锁条件；battalion-companion-guide 已有 Companion 解锁/优先级/常见错误章节 → 写细则必滑向编造解锁步骤；来源不足 ≥3。 |
| 货币体系/花什么划算（六货币） | 1–2（whisperofthehouse + gamesmoler，疑似同一内容链） | 非「玩家高频问题/抱怨」，且细节仅单源；与 village-upgrade-guide（triskelle 35 处）/healing-guide §3（金币预算）重叠 → 自噬 + 编造风险双高。 |
| 闪避 i-frame / "Bad Invulnerability" | 1（VaporLens 聚合，launch 窗口） | 仅聚合标签、launch 数据；combat-tips 已含 Dodge/Block 章节 → 写=泛化复述 + 无 ≥3 独立来源。 |
| Endgame Trials of the Mother | 1（whisperofthehouse） | 单一第三方来源、站内 0 覆盖但无玩家高频抱怨证据；无法不编造地写细则。 |
| 大场面视觉混乱/可读性 | 1–2（20min.ch + douban） | 编辑主观评论、无具体机制事实、<3 来源；不可操作化为步骤。 |

## 三、结论

tearsofmetalwiki 现有 **32 篇**指南。9/7 采集到的全部候选（治疗/敌人难度/复活/FPS/desync/存档/同伴/货币/闪避/endgame）均落入「已被既有 slug 覆盖」「<3 独立来源」「9/5–9/6 刚产出同类」「写细则=编造」之一。今日亦无任何 v0.15+/9 月官方补丁可作事实锚点（版本史仍止于 8/14 v0.14.58630）。按扩充计划「素材不足 → 跳过，宁缺毋滥；MUST NOT 无素材硬写」与「内容自噬红线」，本轮 **SKIP**，不改任何 guide / home-content、不部署。

## 四、自检
- 未改 tearsofmetalwiki 任何文件 ✅；未串站 ✅；未编造 ✅
- 本站 9/6 有产出（co-op-revive-guide）→ **非连续跳过**，与 9/5 grainrot SKIP 情形一致
