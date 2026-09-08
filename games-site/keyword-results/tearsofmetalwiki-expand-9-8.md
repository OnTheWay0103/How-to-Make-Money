# TEARS OF METAL 每日扩充记录 — 9/8

> 模式: expand-feedback | 站点: tearsofmetalwiki | 游戏: Tears of Metal (Paper Cult, Steam EA app 1913120, EA launch 2026-07-22)
> 角色: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 日期: 2026-09-08
> 结果: ⏭️ SKIP（采集后无选题满足「高频 ≥3 独立来源 + 真缺口 + 不编造」四条件；本站 9/7 SKIP、9/6 有产出 co-op-revive-guide，触发点 9/8 复检未达成）

## 一、采集了哪些源（真实执行，2026-09-08）

### 版本/官方动态（触发点复检）
- [thegameswiki — Tears of Metal Update History](https://thegameswiki.com/tears-of-metal/wiki/update-history)（WebSearch 摘录交叉，直抓仍受限）— 版本史**仍止于 v0.14.58630（8/14）**；7/24–8/14 的 0.8→0.14 系列后**无任何 9 月条目**。独立检索 "patch v0.15 September 2026"、"patch notes OR hotfix September OR v0.15 OR roadmap" 均 0 结果。
- Paper Cult Steam 公告 / SteamDB：app 1913120 allnews 直抓 ECONNREFUSED；搜索引擎 site: 摘录无 9 月公告；SteamDB history 直抓无 access token（仅 partial）。9/7–9/8 定向检索 "Paper Cult Tears of Metal news September 7 OR 8 2026" → **0 条 9 月新闻被索引**。

### Steam 讨论区 / 评测（负面优先）
- [Steam 讨论串 "Demo Feedback after 4 Runs in Multiplayer"](https://steamcommunity.com/app/1913120/discussions/0/592907032315681857) — demo 时代（2025 beta/playtest）反馈：同伴残留 bug、绿/球能力待 buff、初始输入延迟。非当前 EA 新反馈，9/7 已记录。
- [Steam 评测（76561198845272948，中文，德文/韩文转载）](https://steamcommunity.com/profiles/76561198845272948/recommended/1913120/) — 数值平衡批评簇（治疗稀缺/敌人数值膨胀/精英「数值怪」/闪避 CD 长/低血量无翻盘），launch 后老主题，9/7 已记录。
- [VaporLens — Churn Analysis](https://vaporlens.app/app/1913120/tears_of_metal/stats/analysis)（7/22–7/23 launch 窗口）— Bad Invulnerability / Limited Player Moveset / 多人网络 26.7%，聚合标签、launch 期数据。
- Reddit：site:reddit.com 多组查询仍 0 结果（无活跃专属 subreddit，延续 8/29/9/5/9/6/9/7 判断）。

### 编辑/媒体（候选交叉验证）
- 独立媒体批评簇（launch–8 月中，无 9 月新评测）：Kotaku / Game8 / Try Hard Guides / GameScout / VDGMS / 20min.ch / TheSixthAxis / SmashPad / NoobFeed / Finger Guns — 难度 brutal、治疗贵/稀缺、大场面视觉混乱、升级偏慢、Boss 血厚拖沓、build 深度浅。**全部与 9/5–9/7 记录同簇**。
- 免费游戏趋势站（俄语 free-play-online）— 转述 Steam 评价趋势：负面率 launch 期 ~4.2% → 5 天内 ~26.2%，Act 2–3 弃坑者更负面（治疗成本/进度墙）。聚合转述，无 9 月独立事实。
- 第三方攻略站（2UpSkill / gameshorizon / whisperofthehouse / thegameswiki）：无 9 月新指南被索引；提及「两个未实装神秘英雄（黑影剪影）仍不可获得」— 官方确认计划 EA 期后续加入，但**无解锁条件、无 9 月实装**。

## 二、候选选题为何全部不成立（对照现有 32 slug 全查）

| 候选（玩家高频抱怨/搜索） | 来源数 | 否决理由 |
|------|------|------|
| 治疗稀缺/喷泉贵/金币医疗成本跨 Act 上涨 | ≥5（Kotaku/Game8/VDGMS/free-play-online/俄语转述等） | healing-guide 已整体覆盖（§1 为什么贵/§2 三来源/§3 金币预算/§8 checklist），9/6 已随 v0.12 校准复活制 → 自噬。 |
| 难度 brutal / 精英数值怪 / 低血无翻盘 / 大场面压力 | ≥6（Kotaku/Game8/Try Hard/SmashPad/中文评测/free-play-online） | threat-level-difficulty + combat-tips + elite-enemy + survival-tips 多层覆盖 → 自噬。 |
| 复活规则困惑 | ≥3（v0.12 官方 + thegameswiki + 媒体） | 9/6 已产出 co-op-revive-guide 专篇 → 昨日刚覆盖，禁止自我复制。 |
| 大场面 FPS/卡顿 | ≥5（官方性能补丁 + 2UpSkill + XModHub×3 + GamerScout） | 9/5 已产出 low-fps-fix-guide → 已覆盖。 |
| 多人 desync/连接/跨平台 | ≥3（官方承认 + 讨论区 + 媒体） | multiplayer-connection-fix-guide 已覆盖。 |
| 无中途存档/长 run 掉进度 | ≥3（官方 top-priority + 媒体 + 差评） | save-system-guide + patch-notes 已覆盖（含开发中状态）；官方仍无时间窗。 |
| 两个「神秘英雄」黑影 / 何时解锁 | 1–2（官方计划性表述 + thegameswiki playable-heroes） | character-unlock-guide 已写明「另有 2 个英雄可见但不可获得」；官方确认需等技术/平衡优先事项后才加 → **无 9 月实装、无解锁条件可写**，写即新闻转写+编造解锁步骤。 |
| Act 2 中期 Boss 名 / Act 3 Boss「Excavation Juggernaut」 | 1（whisperofthehouse，单一第三方） | 定向检索 "Excavation Juggernaut OR Act 3 boss name" → **0 独立佐证**；boss-guide 已按「Iseult the Banshee 为社区名」标注，其余不具名。来源不足 + 编造风险。 |
| 武器/敌人专名（Overseers/Crystal Brutes/Vanguard Tracker 等） | 1（whisperofthehouse 内容链） | 单一第三方、无第 2 源交叉；与站内「不编造专名」准则冲突。 |
| 大场面视觉混乱/可读性 | 1–2（20min.ch + 西班牙语转载） | 编辑主观评论、无机制事实、<3 来源；不可操作化为步骤。 |

## 三、结论

tearsofmetalwiki 现有 **32 篇**指南。9/8 触发点复检：版本史仍止于 8/14 v0.14.58630，无 v0.15+/9 月官方补丁（Steam 公告/thegameswiki/SteamDB/9/7–9/8 新闻定向检索全部 0 命中）；Reddit 仍无活跃 subreddit；Steam 讨论区无 9 月新串；全部候选主题（治疗/难度/复活/FPS/desync/存档/神秘英雄/Act 2–3 Boss 名/视觉可读性）落入「已被既有 32 slug 覆盖」「9/5–9/6 刚产出同类」「单一第三方来源不可溯源」「写细则=编造」之一。按扩充计划「素材不足 → 跳过，宁缺毋滥；MUST NOT 无素材硬写」与「内容自噬红线」，本轮 **SKIP**，不改任何 guide / home-content、不部署。

## 四、自检
- 未改 tearsofmetalwiki 任何文件 ✅；未串站 ✅；未编造 ✅；采集约 13 次搜索/抓取 < 20 上限 ✅
- 本站 9/6 有产出（co-op-revive-guide）、9/7 SKIP → 非长期断供
- 下次触发条件（不变）：官方 v0.15+/9 月补丁公告被索引（≥2 独立来源）→ 写 patch-notes 校准或机制变更指南；或出现 ≥3 独立来源且未被 32 篇覆盖的 9 月新反馈
