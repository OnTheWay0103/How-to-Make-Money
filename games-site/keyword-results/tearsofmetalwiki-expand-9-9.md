# TEARS OF METAL 每日扩充记录 — 9/9

> 模式: expand-feedback | 站点: tearsofmetalwiki | 游戏: Tears of Metal (Paper Cult, Steam EA app 1913120, EA launch 2026-07-22)
> 角色: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 日期: 2026-09-09
> 结果: ⏭️ SKIP（采集后无选题满足「高频 ≥3 独立来源 + 真缺口 + 不编造」四条件；今日定向核验 v0.15+/9 月补丁仍为 0，但发现 ~8/26 官方三阶段路线图新闻 → P0 校准建议 patch-notes.md）

## 一、今日定向核验（2026-09-09）：v0.15+/9 月补丁/公告/路线图

### 版本史 / 补丁（触发点复检）
| 渠道 | 结果 |
|------|------|
| thegameswiki Update History | 版本史**仍止于 v0.14.58630（8/14）**；检索 "patch v0.15 September 2026" → 0 结果。7/24–8/14 系列（0.8→0.14）后无任何 9 月条目。 |
| Steam 公告（app 1913120） | 最新公告仍为 **v0.14.58630（8/14）Multiplayer Bug Fixes**（搜索引擎索引的 allnews 韩文镜像确认）。9/1–9/9 定向检索 "Tears of Metal news September 2026" → 0 条 9 月新闻被索引。allnews 直抓 ECONNREFUSED。 |
| SteamDB / 编辑 / 媒体 | SteamDB 无 access token（partial）；媒体检索仅返回 7/27–8/26 launch 窗文章，零 9 月独立覆盖。 |
| Reddit | site:reddit.com 仍 0 结果（无活跃专属 subreddit，延续 8/29–9/8 判断）。 |

→ **无 v0.15+ / 无 9 月官方补丁**。事实锚点依旧只有 v0.14.58630（8/14）。

### 路线图新闻（⚠️ 今日新发现，非补丁但属官方公告）
- **Paper Cult 发布 Early Access 三阶段路线图**（覆盖：primagames.com "Sells 100K Copies, Mid-Campaign Saves Planned" + ingamenews.com "Hits 100,000 Sales As Developer Outlines Next Patches" + gamereactor.se 转载，≥3 独立编辑来源；内容互相一致，判定来自 ~8/26 官方 developer post）：
  - **Phase 1（进行中）**：networking / crash / performance 大修；下一补丁 = "big push for stability"。
  - **Phase 2**：按反馈重做系统 — build-crafting agency、更有意义的 Emblems、降低 meta-progression 刷度。
  - **Phase 3**：新内容；官方明确点名被预告英雄 **Plague Doctor** "will be coming later"（无日期、无机制）。
  - 另：开发商考虑增设 **Steam Beta Branch** 测试在制内容（crossplay 已单设 "Crossplay" beta 分支）。
- 说明：这些是**计划**而非已实装事实，无版本号、无 ETA。

## 二、候选选题为何全部不成立（对照现有 32 slug 全查）

| 候选（玩家高频抱怨/搜索） | 来源数 | 否决理由 |
|------|------|------|
| v0.15+/9 月补丁内容 / patch-notes 校准 | 0 命中 | 无 v0.15+/9 月补丁可写；写即编造。 |
| 治疗稀缺/喷泉贵/金币医疗成本 | ≥5（Kotaku/Game8/VDGMS/free-play-online/评测簇） | healing-guide 已整体覆盖（9/6 已随 v0.12 校准复活制）→ 自噬。 |
| 难度 brutal/精英数值怪/低血无翻盘 | ≥6 | threat-level-difficulty + combat-tips + elite-enemy + survival-tips 覆盖 → 自噬。 |
| 复活规则困惑 | ≥3（v0.12 官方 + thegameswiki + 媒体） | 9/6 已产出 co-op-revive-guide → 刚覆盖。 |
| 大场面 FPS/卡顿 | ≥5 | 9/5 已产出 low-fps-fix-guide → 已覆盖。 |
| 多人 desync/连接/无中途存档 | ≥3（官方 + 讨论区 + 差评） | multiplayer-connection-fix + save-system + patch-notes 覆盖；官方对 mid-run save 仍无时间窗。 |
| 两个「神秘英雄」黑影 | 1–2 | character-unlock-guide 已写明「另有 2 英雄可见但不可获得」→ 已覆盖。 |
| **Plague Doctor 英雄（路线图点名）** | 2–3（primagames/ingamenews/gamereactor 转载同源） | **单一官方路线图内容链**（3 家互相转写同一条 developer post），非独立机制事实；无解锁条件/无机制/无 ETA → 写=路线图新闻转写 + 编造解锁步骤。只够 P0 校准 patch-notes / character-unlock，不够成篇。 |
| **三阶段路线图 / Beta Branch 计划** | 2–3（同上，同源内容链） | 官方**计划**非已实装事实；patch-notes.md 才是该主题的天然载体 → 属 P0 校准，不新建 guide（与既有「roadmap 不做深挖单篇」站例一致）。 |
| 联机敌人数值（普通战斗过易、Boss 团灭） | 1（GamerScout） | 单源编辑观感；boss-guide/co-op-guide 已覆盖 Boss 房联机战术 → 非缺口。 |
| 无本地分屏/需多份拷贝 | 1（GamerScout） | 单源；co-op-guide 已覆盖 Steam-only 现状 → 非缺口。 |
| 大场面视觉混乱/可读性 | 1–2（20min.ch + 转载） | 编辑主观、<3 来源、不可操作化为步骤。 |

## 三、结论

tearsofmetalwiki 现有 **32 篇**指南。9/9 触发点复检：**v0.15+/9 月官方补丁 = 0**（thegameswiki 止 8/14 v0.14.58630、Steam 公告最新仍 8/14、9 月新闻 0 命中、Reddit 仍无 sub）。今日新发现 **~8/26 官方三阶段路线图 + Plague Doctor 点名**（primagames/ingamenews/gamereactor ≥3 转载一致），但属官方计划非实装、无机制/无 ETA，且其天然载体是站内 patch-notes.md（现有 guide）→ 记 P0 校准建议，不新建 guide。其余候选全部落入「已被 32 slug 覆盖」「9/5–9/6 刚产出同类」「单源不可溯源」之一。按扩充计划「素材不足 → 跳过，宁缺毋滥」与内容自噬红线，本轮 **SKIP**，不改任何 guide / home-content、不部署。

**P0 建议（交主 Agent）：`tearsofmetalwiki/content/guides/patch-notes.md` 已滞后。** updated 字段 2026-08-11，正文自称「latest confirmed update is the late-July one」，但 **v0.11.57874.1（8/9 hotfix）、v0.12.58540（8/13，health-based co-op revive）、v0.14.58630（8/14，multiplayer bug fixes）均已实装**（v0.12 复活制已被本站 co-op-revive-guide 引用），且缺失 ~8/26 三阶段路线图（Phase 2 build-crafting/Emblems/meta-progression 重做、Phase 3 Plague Doctor、Beta Branch 考虑中）。建议校准：补 v0.9→v0.14 实装表 + 路线图段落 + Plague Doctor 以「teased，非可解锁」口径。

## 四、自检
- 未改 tearsofmetalwiki 任何文件 ✅；未串站 ✅；未编造 ✅；采集约 14 次搜索/抓取 < 20 上限 ✅
- 本站 9/6 有产出（co-op-revive-guide）、9/7–9/8 SKIP → 非长期断供
- 下次触发条件（不变）：官方 v0.15+/9 月补丁公告被索引（≥2 独立来源）→ 写机制变更指南或校准 patch-notes；或 ≥3 独立来源且未被 32 篇覆盖的 9 月新玩家问题。P0 校准项不依赖触发条件，主 Agent 可随时安排。
