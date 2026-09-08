# The Mound Wiki — 深度去模板化改造方案（ADSENSE-P1-B）

> 任务编号：ADSENSE-P1-B
> 材料版本：themoundwiki @ commit 07348d87
> 审计日期：2026-09-09
> 执行人：内容合规审计员（01 岗位卡 / 02 Profile）
> 本文档为**出方案**交付物；按 MUST NOT 约定，未修改 `content/guides/` 下任何文件，未 commit。
> 上游依据：`docs/AdSense合规分析与改进方案.md`（2026-08-10 拒绝记录 + 综合整改策略）、生财圈内复盘 CTR 分桶数据（yes/no 0.00% / codes 0.86% / build 决策类 5.36%；245 篇中 59 篇重定向 = 24.1% 自噬负债；379 条数据 354 条未验证 = 93.4%）。

---

## 0. 执行摘要

- 盘点 **37 篇** guides，总字数 62,383，平均 1,686 词/篇；发布日期集中在 2026-07-14 ~ 09-06。
- **5 篇** intro 可整体互换到其他文章仍通顺（= 模板开头）；另有 **3 篇无叙述性 intro 的结构模板页**（FAQ/价格/图表直开式），其中 FAQ 在站点层还有第二个硬编码版本（`app/faq/page.tsx`）与之并存。
- **30/37 篇零来源零核验标记**（无 Sources 段、无外链、无 [Unconfirmed]/honesty note）。仅 5 篇有 Sources 段落、7 篇带外链。全仓库 **0 张图片、0 个作者字段**。
- 建议**合并 3 篇**（`daily-challenges`、`beginner-loadouts`、`boss-weakness-drops-chart`），**站点级去重 2 组**（`/faq` 与 `/guides/faq-content` 双 FAQ；`/tier-list` 与 `weapons-guide` 双 Tier List）。
- 执行顺序：P0 决策/修复类 10 篇 → P1 机制类 14 篇 → P2 资讯/合并/下线类 8 篇 + 站点页 2 组。全部改造完成后等 2-3 周再复审。

---

## 1. 判定方法与分级定义

**核心法则（全案依据，来自项目文档）**：*如果你能把一页的 intro 换到另一页上读起来同样通顺，这就是模板，不是写作。*

**互换测试执行口径**：对每篇的首段 intro 做「嫁接到站内其他主题页」的可读性判断，分三级：

| 级别 | 定义 | 处置 |
|------|------|------|
| **T1 可互换 = 模板** | intro 整体搬到 ≥2 篇其他文章仍通顺，仅主题名词需替换 | intro 必须重写；通常整篇也需去重 |
| **T2 半模板** | intro 有主题锚点（地名/系统名），但句式为模板式「This guide covers X, Y, Z」/「Complete guide to X」 | intro 需重写强绑定；正文需核验+去重 |
| **T3 已差异化** | 场景/问题/数据驱动开头，换到别页读不通 | 保留；仅做可选打磨 |

**无 intro 的结构模板页**（直开表格/问答，无叙述段）：`boss-weakness-drops-chart`、`faq-content`、`price-platforms` —— 不参与 intro 互换测试，按整页结构判定。

**内容自噬判定**：两页回答同一搜索意图（关键词/kw 覆盖重叠）且正文知识点大面积重复 → 记为近重复组（详见 §4）。

---

## 2. 全篇盘点表（37 篇全覆盖）

统计口径：词数 = `wc -w`；日期 = frontmatter `updated`；骨架 = 顶层 H2/H3 序列；类型分桶：DEC=build/配队/决策 · MECH=机制系统 · FIX=问题修复 · INFO=资讯 · QA=问答 · LIST=图表罗列；证据 = Sources 段/外链/[Unconfirmed]/honesty note 有无。

| # | 文件 | 词数 | updated | 首段 intro（逐字） | 结构骨架 | 类型 | 证据 | 互换 |
|---|------|----:|---------|--------------------|---------|------|------|------|
| 1 | beginner-guide | 867 | 07-14 | "Welcome, conquistador. The New World is not what the Crown promised. **The Mound: Omen of Cthulhu** is a 1-4 player cooperative PvE extraction horror game set in 1652 Chile, during the conquest era. You and your crew sail from the Galleon — your floating hub — into the Lovecraftian unknown, accept Contracts, explore hostile islands, and extract with loot before the forest consumes everything." | Core Loop｜Starting Loadout｜Common Mistakes｜Checklist | MECH(新手) | 无 | T2 |
| 2 | beginner-loadouts | 1221 | 08-04 | "Your loadout is the difference between extracting with loot and feeding the forest. The Mound gives you eight equipment slots, six consumable slots, and a weight system that punishes packrats — and on a beginner budget, every item choice matters. This guide covers three proven starter loadouts, the weight rules you must respect, and what to upgrade first with your first few hundred coins." | Slot/Weight 规则｜3 Starter Loadouts｜6 Consumable Slots｜Upgrade Order｜Mistakes | DEC | 无 | **T1** |
| 3 | blood-moon-guide | 1698 | 09-04 | "You spend twenty minutes doing fine: silent backstabs, one kicked chest, a single musket shot at a Berserker you did not want to melee. Then the heartbeat starts, the moon turns red, and the forest vomits out a wave of enemies that keeps coming no matter how still you stand."（后接 2 段：命名说明 + honesty note「ACE Team 未发布官方说明…单源细节标 [Unconfirmed]」） | 机制｜喂表因素｜预警｜Quiet 无效｜Scripted｜生存法｜vs Forest Awakens｜FAQ｜Sources | MECH(事件) | ✅ 有 | T3 |
| 4 | boss-weakness-drops-chart | 928 | 08-01 | 无叙述 intro，直开表："Quick-reference chart for every boss… Table format for fast scanning before and during a run. For full fight breakdowns, see the [Walkthrough Guide]… and [Legendary Hunts Guide]…" | 6 张表头说明｜All 6 Bosses 表｜一图流策略｜通用规则 | LIST | 无 | 结构模板 |
| 5 | characters-classes | 1336 | 08-10 | "The Mound: Omen of Cthulhu features four playable conquistador characters, each with unique stats, starting equipment, and special abilities. While no character is locked to a specific playstyle, their innate traits make them naturally suited to different roles. There are no classes — your loadout defines your role — but each character's trait makes one role a natural fit." | Overview｜4 Characters｜对比表｜Build Chart｜Squad 调整｜Solo/Co-op 选择｜Progression | DEC | 无 | T2 |
| 6 | combat-survival-guide | 3048 | 08-10 | "Combat in The Mound is slow, deliberate, and punishing. Victory comes from understanding the mechanics — blocking, parrying, Stamina management, noise discipline, and positioning — not reflexes alone. And when the fight isn't what kills you, the environment will: storms, floodwater, darkness, and traps all end runs that combat never touched. This guide breaks down every system so you can survive any encounter, and every hazard." | Stamina/Block/Parry/Dodge｜Noise/Backstab｜敌攻击型｜环境灾害｜武器 tips｜Why Combat Feels Hard｜Quick Reference | MECH | 无 | T2 |
| 7 | contracts-guide | 2291 | 08-10 | "Contracts are the backbone of every expedition in **The Mound: Omen of Cthulhu**. Before you set sail from the Galleon, you choose a Contract from the board. This determines your objective, the difficulty, the map layout, and the reward tier. Most players pick contracts by vibes — this guide fixes that: how contracts work, which types pay what, the host-level scaling rule that silently ruins mixed-level squads, and a pick order that optimizes your time for money, rank, or materials." | 机制｜Host 难度｜6 类型｜报酬｜选择法｜优化循环｜Reward Table｜Ox Cart｜错误 | MECH | 无 | T2 |
| 8 | controls-settings-guide | 1472 | 07-14 | "Setting up your controls and graphics correctly before your first expedition can mean the difference between a clean extraction and a messy death. This guide covers default controls for all platforms, recommended settings, and technical troubleshooting." | 系统要求｜PC 键位｜PS5｜Xbox｜推荐画质｜音频｜Common Technical Issues｜无障碍 | MECH(配置) | 1 外链(Steam) | **T1** |
| 9 | coop-strategy-guide | 3577 | 08-10 | "**The Mound: Omen of Cthulhu** is designed for 1-4 players, but the full experience truly shines with a coordinated squad. The forest rewards teamwork and punishes solo heroics. Whether you are playing with friends or matchmade strangers, this guide will help your squad survive the worst the New World can throw at you." | 概述｜开黑方式｜Crossplay｜Squad Roles｜Loadout 分配｜沟通｜幻觉信任｜复活｜团队规则｜进阶战术｜排障 | DEC | 无 | T2 |
| 10 | crafting-recipes | 1147 | 07-29 | "The Galleon serves as your mobile base of operations in The Mound: Omen of Cthulhu. Its crafting station is where you transform raw materials into essential tools, consumables, and upgrades. This guide covers every important recipe, material source, and tier progression path." | Galleon 站｜Tier 递进｜重要配方｜材料 farm｜Tips | MECH | 无 | T2 |
| 11 | daily-challenges | 1205 | 07-29 | "Daily challenges, called **Contracts**, are the primary repeatable content in The Mound: Omen of Cthulhu. They provide structure to each expedition, offer targeted rewards, and drive the core progression loop. This guide explains how contracts work, how rewards rotate, and how to complete them efficiently." | 每日合同机制｜Reward Rotation｜类型｜效率策略｜Progression Loop｜日程表 | MECH | 无 | **T1** |
| 12 | ending-guide | 1962 | 07-27 | "**The Mound: Omen of Cthulhu** has 3 distinct endings, each determined by choices you make throughout the story. Your ending is decided by a combination of your Faction reputation, key item collection, and a critical decision during the final boss encounter. This guide explains every ending, how to achieve it, and what you need to know before making your choice." | 3 Ending 总览｜判定机制｜A/B/C 每结局｜对比｜多次结局？｜FAQ | MECH(剧情) | 无 | T2 |
| 13 | enemy-bestiary | 3142 | 08-10 | "The New World is home to horrors beyond human comprehension. This bestiary catalogs every confirmed creature in **The Mound: Omen of Cthulhu**, providing detailed information on behavior, weaknesses, loot, and lore. Use this guide to prepare for any encounter." | Bestiary Key｜Weakness 表｜4 类生物｜Backstab 大全｜怕光种｜通用规则｜速查表｜地区分布 | LIST+MECH | 无 | T2 |
| 14 | extraction-guide | 1934 | 08-10 | "Extraction is the most critical moment of any expedition in **The Mound: Omen of Cthulhu**. You can nail the entire run — perfect stealth, full loot, zero damage — and lose everything in the last five minutes if you mishandle the extraction phase. Everything you gather during an expedition — loot, artifacts, resources — is lost if you fail to extract." | 流程｜撤离点｜隐藏计时器｜三色信号｜路线策略｜常见失败｜Loadout｜Checklist | MECH | 无 | T2 |
| 15 | faq-content | 1079 | 07-14 | 无叙述 intro，直开 "## Q1: What is…"（15 个问答，Q1 与 /faq 页同题同答来源但文本不同） | 15 个 Q（价格/平台/单机/crossplay/配置/语言/豪华版/退款/在线服务/难度/时长/mod） | QA | 无 | 结构模板 |
| 16 | game-length-guide | 815 | 07-14 | "**The Mound: Omen of Cthulhu** launched on July 15, 2026 with a substantial amount of content. This guide breaks down exactly how long you can expect to spend in the cursed forests of the New World, covering the main campaign, expedition durations, demo scope, and what to expect from post-launch updates." | 主线时长｜远征时长｜Demo｜发后更新｜可重玩性｜FAQ | INFO | 无 | T2 |
| 17 | isolation-guide | 1647 | 09-03 | "You peel off from the squad to grab a chest forty meters from the Ox Cart — and within seconds the screen edges turn gray, the image warps, the audio muffles, and something rises from the dirt and pins you while your Sanity collapses…"（后接 3 段：机制命名 + honesty note + 单源 [Unconfirmed] 声明） | vs Sanity｜预警｜触发｜雕像｜清除｜Solo？｜规则｜FAQ｜Sources | MECH(事件) | ✅ 有 | T3 |
| 18 | legendary-hunts | 936 | 07-31 | "Legendary Hunts are The Mound's signature endgame content: named monsters with fixed spawns, unique mechanics, and drops that exist nowhere else. Unlike normal contracts, hunts are announced on the contract board with a target name and a skull icon — and unlike Nightmare contracts, a hunt can fail even if you extract, because the kill is the objective." | 机制表｜4 猎物详解｜准备清单｜Reward Table | MECH+DEC | 无 | T2 |
| 19 | loadout-guide | 2386 | 08-10 | "Your loadout in **The Mound: Omen of Cthulhu** determines how effectively you can explore, fight, and extract. With limited inventory space and equipment durability, every slot must earn its keep. This guide covers each equipment slot, the survival half of the loadout screen — healing economy, Sanity management, weight discipline — and how to adapt your gear to specific expeditions." | 槽位表｜生存公式｜武器 Loadout｜护甲｜治疗经济｜Sanity 物品｜消耗品｜重量｜角色型 Loadout｜按远征调整｜Presets | DEC | 无 | **T1** |
| 20 | maps-locations-guide | 2016 | 08-04 | "Every expedition in **The Mound: Omen of Cthulhu** begins the same way: you sail from the Galleon — your floating hub — toward an island on the horizon. Where you land decides everything: the enemies you face, the loot you can carry, and the bosses you might trigger. This guide maps every confirmed location in the New World, with points of interest, enemy profiles, and the fastest loot routes on each map." | 解锁顺序表｜逐岛 POI/敌人/路线｜Hunt 位置｜导航要点 | MECH | 无 | T2 |
| 21 | money-guide | 1473 | 08-04 | "Every expedition in **The Mound: Omen of Cthulhu** is an investment: you sail out with tools and return with loot — or you do not return at all. The players who climb fastest are not the ones who loot the most; they are the ones who understand what each currency is for and what is worth carrying back. This guide breaks down all three currencies, the best ways to earn each, and the fastest farm routes in the game." | 三货币｜Token 速刷｜Gyldenblood 速刷｜Sell vs Keep｜钱坑｜高效日常 | MECH(经济) | 无 | T2 |
| 22 | motion-sickness-camera-fix-guide | 1871 | 09-06 | "Twenty minutes into an expedition, the camera sways with every step and the queasiness starts. Community hubs and Steam reviews keep returning the same complaint from different players…"（后接 2 段：原因列举 + honesty note「开发方无官方防晕指南…Patch 相关标 Official，玩家报告标 [Unconfirmed]」） | 原因｜Standard 相机｜FOV 75-125｜关动态模糊｜关特效｜降低 shake｜Patch 1.03 中心点｜Comfort 清单｜FAQ｜Sources | FIX | ✅ 有 | T3 |
| 23 | multiplayer-connection-fix-guide | 1913 | 09-02 | "**Multiplayer is the point of The Mound: Omen of Cthulhu.** It is a 1–4 player co-op extraction horror from ACE Team (published by NACON), and if you cannot get into the same lobby as your squad, the whole game falls apart…"（后接 3 段：错误现象 + 修复顺序 + 「Current state (as of 2026-09-02)」官方修复时间线声明） | 错误速查表｜4 步修复｜同平台｜进阶｜FAQ｜官方时间线｜Sources | FIX | ✅ 有 | T3 |
| 24 | nightmare-mode | 1100 | 07-31 | "Nightmare Mode is The Mound's endgame difficulty. Unlocked after you complete every contract tier at least once (including a Legendary contract), it re-rolls the expedition with stacked modifiers that punish everything the base game taught you. It is also the only reliable source of the highest-tier gear and the season's exclusive cosmetics." | 解锁条件｜Modifiers｜Sanity/敌人/撤离变化｜Loadout 调整｜Reward 表｜危险组合 | MECH+DEC | 无 | T2 |
| 25 | performance-fps-fix-guide | 2026 | 08-01 | "If **The Mound: Omen of Cthulhu** runs like a slideshow on hardware that should crush it, you are not alone — poor performance is one of the game's most-reported issues. The UE5 jungle is extremely dense, and the cost is steep: an **RTX 4080 Super at 1440p on High only holds 45–58 FPS at native resolution**, needing DLSS to reach a stable 60." | TL;DR｜原因｜Real-World Benchmarks｜设置表｜DLSS/FSR/TSR｜着色器｜SSD｜驱动｜config 重置｜帧率上限｜Steam Deck｜卡顿/音频｜低显存 | FIX | 无 | T2 |
| 26 | perks-guide | 1855 | 07-23 | "Perks are passive abilities in **The Mound: Omen of Cthulhu** that provide permanent upgrades to your character. Unlike equipment, perks are always active once unlocked and do not take up inventory space. This guide covers every perk in the game, how to unlock them, which combinations are strongest, and how to adapt your perk build for different expedition types." | 系统｜5 系 25 个｜每系推荐｜4 套 Build 模板｜解锁节奏｜重置 | DEC | 无 | **T1** |
| 27 | price-platforms | 866 | 08-10 | 无叙述 intro，直开 "## Price & Editions" 表格（$29.99/$39.99 两版、Game Pass 不在列） | 版本价格｜Game Pass｜Demo 细节｜平台｜购买渠道｜系统要求｜值得买吗 | INFO | 1 外链 | 结构模板 |
| 28 | progress-save-recovery-guide | 1605 | 08-01 | "Few things kill a co-op game faster than watching your progress vanish. During launch week, players reported **full progress and levels being reset**, and hard crashes that **wiped 30–60 minutes of expedition progress**… The developers answered with **Patch 1.02 (late July 2026)**, which added an **achievement/trophy-based progress recovery tool on all platforms** and a **PS5-specific progress loss fix**." | 问题实录｜1.02 工具｜逐步入口｜PS5 修复｜崩溃后处理｜验证文件｜防丢习惯｜已知崩溃｜存档位置｜FAQ | FIX | 无 | T2 |
| 29 | progression-system-guide | 1446 | 08-01 | ""I just extracted with a legendary matchlock — where did it go?" This is the most common question new players ask in **The Mound: Omen of Cthulhu**, and the answer is the game's most misunderstood system: **weapons and armor never leave the expedition**…" | 保留/不保留｜为什么这样设计｜Token 机制｜购买顺序｜反浪费论｜Roadmap｜FAQ | MECH(经济) | 无 | T3 |
| 30 | sanity-guide | 1808 | 08-10 | "Sanity is the invisible clock that ticks during every expedition in **The Mound: Omen of Cthulhu**. Unlike a traditional health bar, Sanity erodes your perception of reality. Let it drain too low, and the forest begins to play tricks on you — tricks that can get you and your team killed." | 机制｜阈值表｜预算｜幻觉类型｜真假分辨｜团队沟通｜面具｜恢复道具｜常见错误 | MECH | 无 | T2 |
| 31 | solo-guide | 2528 | 08-10 | "**The Mound: Omen of Cthulhu** supports solo play, but it is a fundamentally different experience from team play. Without teammates to confirm hallucinations, cover your flanks, or revive you, every decision carries higher stakes. This guide covers everything you need to know to survive the New World alone — from stealth and resource discipline to knowing exactly when to leave." | 四支柱｜AI 同伴｜vs Co-op｜潜行｜最佳 Solo Loadout｜资源｜Sanity｜四阶段｜撤离规划｜独有威胁｜Do/Don't｜Solo or Co-op | DEC+MECH | 无 | T2 |
| 32 | stealth-guide | 1739 | 08-04 | "In **The Mound: Omen of Cthulhu**, combat is a failure state. Every gunshot you fire, every sprint through undergrowth, and every chest you wrench open tells the forest where you are — and the forest remembers. The players who extract consistently are not the best fighters; they are the ones who never had to fight." | 噪音机制｜侦测机制｜暗杀｜静默工具｜光线管理｜潜行 Loadout｜完整潜行路线 | DEC | 无 | T2 |
| 33 | trophy-achievement-guide | 1135 | 07-18 | "The Mound ships with approximately 28 trophies/achievements: 1 Platinum (PS only), 5 Gold, 10 Silver, 12 Bronze. This guide covers every unlock requirement, missable warnings, and the most efficient path to 100% completion." | 总览表｜剧情杯｜可错过杯｜战斗杯｜收集杯(Lore)｜杂项｜Roadmap | INFO/LIST | 无 | T2 |
| 34 | updates-patch-notes | 1037 | 09-06 | "This page tracks confirmed updates for **The Mound: Omen of Cthulhu**. We only include information that can be verified against official developer announcements or consistent community reports."（后接声明：launch 07-15、持续更新中、数值可能变动，附 Steam/社区链接） | 1.03/1.02/1.0.1/1.0.0｜Roadmap｜如何跟进｜Archive｜Verification | INFO | ✅ 有链接 | T3 |
| 35 | walkthrough-guide | 1629 | 08-10 | "Story progression in The Mound is driven by Contracts you accept from the Galleon's Contract Board. As your faction reputation grows, new islands, enemies, and story revelations unlock. This walkthrough covers the story so far, the critical path through all three phases, every boss encounter with strategies, the three endings, and what comes after." | 1652 背景｜进度机制｜4 章逐章｜Lurker/High Priest 双 Boss｜真相｜三结局｜通关后｜关键路径 | MECH(剧情) | 无 | T2 |
| 36 | weapon-durability-repair-guide | 1347 | 08-27 | "Your Machete was fine a minute ago. Now it is gone — snapped mid-swing while a Y'm-bhi patrol closes in. If this has happened to you, you are not alone. 'Weapon durability is poorly explained'… are among the most common complaints in Steam reviews…"（后接 2 段：机制概述 + Sources） | 为何损坏｜等级含义｜Galleon Anvil 修理｜耐久排行｜维护习惯｜Sources | FIX | ✅ 有 | T3 |
| 37 | weapons-guide | 2298 | 08-10 | "The Mound features six distinct weapons: the Crossbow, the Matchlock Arquebus, the Flintlock Pistol, the Francesca Axe, the Machete, and the Oil Lamp. Your loadout defines your role — there are no classes. Understanding each weapon's traits is essential for surviving expeditions." | 总览表｜6 武器深潜｜Tier List｜弹药经济｜天气｜获取/升级｜优化｜Loadout 推荐 | DEC | 无 | T2 |

**汇总统计**：T1（intro 可互换）= **5 篇**（#2/#8/#11/#19/#26）；无 intro 结构模板页 = 3 篇（#4/#15/#27）；T3 已差异化 = 7 篇（#3/#17/#22/#23/#29/#34/#36）；T2 = 22 篇。证据层：仅 #3/#17/#22/#23/#36 五篇有 `## Sources`；#8/#27/#34 有外链；其余 **32 篇零外链、30 篇零核验标记**。全站 0 图片、0 作者字段（grep author = 0/37）。

---

## 3. 互换测试矩阵（intro 互换 → 判定）

矩阵仅覆盖有 intro 的 34 篇。判「A = 可互换」标准：互换后目标页读起来通顺，只需换主题词。**T1 命中组**：

| 源页 intro 句模 | 嫁接后通顺的目标页（不限于 1 个） | 判定 |
|----------------|-------------------------------|------|
| #2 beginner-loadouts：「Your loadout is the difference between…」 | #19 loadout-guide（「Your loadout in The Mound determines…」—— 两页开头同构，互换无违和） | **A（同源对）** |
| #19 loadout-guide：「With limited inventory space and equipment durability, every slot must earn its keep…covers each equipment slot…」 | #2、#31 solo-guide 装备段、#10 crafting（槽位/装备语境通用） | **A** |
| #8 controls-settings：「Setting up your controls and graphics correctly before your first expedition can mean the difference between a clean extraction and a messy death. This guide covers default controls…recommended settings, and technical troubleshooting」 | 任何含设置/键位/性能的页（#25 performance、#22 motion sickness、#24） | **A** |
| #11 daily-challenges：「Daily challenges, called **Contracts**, are the primary repeatable content…provide structure…drive the core progression loop. This guide explains how contracts work…」 | #7 contracts-guide（内容即 contract 系统本身） | **A** |
| #26 perks-guide：「Perks are passive abilities…This guide covers every perk in the game, how to unlock them, which combinations are strongest…」 | #37 weapons-guide（「covers every weapon, how to unlock them, strongest…」结构逐句可换）、#30 sanity（道具语感） | **A** |

**B（T2 半模板，边界抽查——互换会"半通顺"，仍需重写）**：详见盘点表 T2 列。典型句模：「This guide covers/explains…」出现于 12 篇（#1/#2/#8/#10/#14/#18/#19/#24/#26/#31/#32/#33）；「Complete X Guide」式标题 15 篇。首段 premise 段（「1-4 player co-op extraction horror set in 1652 Chile…sail from the Galleon」）在 #1/#9/#15(Q1)/#23 间逐句重复。

**C（T3 已差异化，通过互换测试）**：#3/#17/#22/#23/#29/#34/#36 —— 场景/问题开头 + honesty note + 来源标注，嫁接到别页立即露馅。

**站点层结构互换（不止 intro）**：
- `/faq`（app/faq/page.tsx，17 条硬编码）↔ `/guides/faq-content`（15 条 md）：**双 FAQ 双文本**，同类 Q 答案措辞不一致（如角色问答只在 /faq：『The four characters are purely cosmetic』，与 #5 characters-classes 的角色 trait/属性/初始装备直接矛盾；系统要求在 /faq、#8、#27 三处重复）。
- `/tier-list`（app/tier-list/page.tsx，3 套排名表）↔ #37 weapons-guide「Weapon Tier List」节：两处 Tier 排名并存。
- #16 game-length 的 Demo 节 ↔ #27 price-platforms 的 Demo 节：同知识点双写。

---

## 4. 内容自噬主题簇（近重复组，含重叠证据）

| 主题簇 | 涉及文件 | 重叠证据（grep 实测） | 处置方向 |
|--------|---------|---------------------|---------|
| C1 合同/日常 | #7 contracts-guide ↔ #11 daily-challenges ↔ #18 legendary-hunts(#7 也覆盖 hunt 类型与 Ox Cart) | #11 intro 自称「explains how contracts work」，与 #7 全同题；#11:17-23 的「00:00 UTC 刷新/5·3·1 每日上限/x1.5·x2.5 倍率」与 #7 的「board rotates each cycle」模型冲突且双无来源 | #11 并入 #7 为「每日刷新」小节；数值先核验 |
| C2 Loadout | #2 beginner-loadouts ↔ #19 loadout-guide ↔ #31 solo-guide(「Best Solo Loadout」+「Solo Stealth」) ↔ #37 weapons-guide(Loadout 推荐) ↔ #26 perks-guide(Build 模板) | #2 与 #19 槽位表逐格相同（8 槽 6 消耗位）；#2「70%→-15% 移速 / 90%→-30% 禁跑」与 #19「Key constraint」同数值同句式 | 三篇合一：#19 承载全量，#2 只留「新手预算（<100 硬币）配装」差异段，#31/#37/#26 的配装节改为指向 #19 并各留一句结论 |
| C3 潜行/背刺 | #32 stealth-guide ↔ #13 enemy-bestiary(「Backstab — Complete Guide」节) ↔ #6 combat-survival(Noise/Backstab 节) ↔ #3 blood-moon(噪音表) ↔ #31 solo(潜行) | 「backstab」出现于 14 篇；#32 的噪音半径表(~200m/25m/30m/15m)与 #6、#3 的噪音叙述三处并行 | #32 定为背刺/噪音唯一主场；#13 只保留逐生物背刺备注并链 #32；#6 减为规则摘要 |
| C4 Forest Awakens/血月计时 | #3 blood-moon ↔ #14 extraction(隐藏计时器) ↔ #6 combat(「The Forest Awakens (Escalation Hazard)」节) ↔ #7/#30/#31 提及 | 「Forest Awaken」命中 6 篇；#3 内已有「Blood Moon vs Forest Awakens」辨析节 | #3（有来源）定为该机制唯一权威页；其余页只引用不复述触发值 |
| C5 Sanity 系 | #30 sanity-guide ↔ #17 isolation-guide ↔ #9 coop(幻觉信任/救助节) ↔ #12/#1 | #30 的「如何分辨真伪/团队交叉验证」与 #9「Hallucinations, Impostors and Trust」整节重叠；#17 已自建边界 | #9 的幻觉节压缩为 2 段 + 链 #30/#17；#30 数值（见 §6 高危例 4）先核验 |
| C6 敌人/Boss | #13 enemy-bestiary ↔ #4 boss chart ↔ #18 legendary-hunts ↔ #35 walkthrough(2 剧情 Boss) ↔ #6(敌攻击模式) | 4 大 Hunt 猎物在 #4/#18 双表；Lurker/High Priest 在 #4/#35 双写；#4 整页即 #13+#18+#35 的数据子集 | #18/#35 各自保详解，数据单源化；#4 改为「纯引用图表」或并入 #18 附录 |
| C7 资讯四胞胎 | #15 faq-content ↔ /faq ↔ #27 price-platforms ↔ #16 game-length ↔ #8(系统要求) ↔ #34 | 系统要求 3 处全表、Demo 2 处、价格 2 处（/faq、#15、#27）；「crossplay/Game Pass/difficulty/offline」问答在双 FAQ 间重复 | 单一事实源（建议 #27 价格、#8 配置、#16 时长），#15 与 /faq 双页合一，其余问答深链 |
| C8 剧情 | #35 walkthrough ↔ #12 ending-guide ↔ #33 trophy(Lore 页收集) | #35 有「Three Endings」整节与 #12 全题重复；Lore Page 提及 5 篇 | #12 独占结局条件细节，#35 的结局节改为概要+链；「Collect All all Lore Pages」类笔误一并清理 |
| C9 经济 | #21 money-guide ↔ #29 progression-system-guide ↔ #7(报酬表) | 三货币表在 #21/#29 双写（Token/Reputation/Gyldenblood 定义重复） | #29 专注「跨局保留机制」，#21 专注「获取效率」，重复段互相引用 |
| C10 跨层 | #9 coop ↔ #31 solo(模式对比表双写、AI 同伴双写) ↔ #6↔#14 覆面 | 「Duo 是 sweet spot」式对比在 #9/#31 各有一版 | 模式对比结论仅存 #9，#31 只写「solo 侧推演」 |

站点硬编码层额外发现（非 guides，但同为 AdSense 素材，改造时必须一并处理）：
- `/faq` 停留于**发售前文案**：「It launches July 15, 2026…check official documentation at launch」（app/faq/page.tsx:12,27）—— 时态过期 + 「launch 后再查」占位语 = 陈旧内容信号。
- `/tier-list` 自称「verified from the launch build (July 15, 2026) / Post-launch — verified July 2026」徽标，但无任何可核查的实测证据 —— 「verified」字样为无证据断言，按 Profile 规则 MUST NOT 保留此类无据声称，应改为「Ranking compiled [date]; based on [sources]，editorial」表述。

---

## 5. 逐篇 intro 重写清单（37 篇全覆盖）

**写作纪律（先读，后写）**：
1. 40-60 词直接给答案 —— 被 AI 搜索引用的最小单元。
2. 仅使用该页与本站自洽内容中**可核实的钩子**（官方公告已录、页内已标注来源、或纯结构性事实如「6 种武器」「4 角色」「1652 设定」）；**MUST NOT 新增任何数值/经历/机制**。
3. intro 所依赖的正文数值若属「未核验」（§6 高危例），执行顺序上须**先完成核验标注再上架新 intro**，否则只是把编造搬到第一段。
4. 对缺差异化素材的篇目如实标注「建议合并/下线」，不硬写（§7）。

**T3 已差异化篇目（7 篇）—— 保留，仅可选打磨**：#3 blood-moon、#17 isolation、#22 motion-sickness、#23 multiplayer-connection、#29 progression-system、#34 updates-patch-notes、#36 weapon-durability。理由：场景化开头 + honesty note + [Unconfirmed] 标记 + Sources 段，已通过互换测试；任何重写只会削弱。可选微调：各页首段已有 50+ 词时无需动。其中 #23 首段可删「(published by NACON)」同义前置（已在次段），无实际必要 —— **结论：不改**。

以下 **30 篇**为重写对象（#1、#2、#4、#5、#6、#7、#8、#9、#10、#11、#12、#13、#14、#15、#16、#18、#19、#20、#21、#24、#25、#26、#27、#28、#30、#31、#32、#33、#35、#37）。

**重写版 intro 逐篇清单**（【前置核验】= 上架前必须先完成的事实项；无标记 = 仅依赖已自洽结构事实）：

| # | 文件 | 重写后 intro（40-60 词，主题强绑定） | 前置核验 |
|---|------|--------------------------------------|---------|
| 1 | beginner-guide | 你第一个 5 小时的死法不是枪没子弹，而是（按顺序）：淋雨开枪、离队单走、无视 Sanity、超时不走。本页给出 The Mound 前五小时的行动顺序表：先清什么合同、买什么、何时必须回头 —— 并在末段给你一张可打印的首次远征清单。 | 四阶段核心循环数值 |
| 2 | beginner-loadouts | 与 #19 loadout-guide 合并（见 §7）。若保留独立页，重写为：预算低于 100 硬币时，正确买法是「一把静音武器 + 一套布甲 + 两个治疗 + 两个 Sanity 道具」，而不是 8 个槽全塞满。本页给三套 100 硬币内起步装与 70%/90% 重量红线表。 | 重量红线数值（#19 同表） |
| 3 | blood-moon-guide | —— 保留（T3）。 | — |
| 4 | boss-weakness-drops-chart | 与 #18/#35 数据单源化后，intro 改为：跑 Boss 前 30 秒应该看的只有一行：Lurker 怕火、Priest 怕打断、四个 Hunt 猎物的弱点和首杀奖励。本表所有数值与 Walkthrough/Legendary Hunts 两页逐条同源（上方已注明各 Boss 详解链接）。 | 全表数值 |
| 5 | characters-classes | 选谁开局不决定玩法 —— 决定的是 trait：Alonso 的 15% Sanity 减伤偏前排、Catalina 的速度偏单走、Miguel 的治疗加成偏奶位、Rodrigo 的耐久偏扛线。本页按「solo 首推 / 四人队职责」各给一套结论，不看成长曲线。 | 4 角色 trait 数值 + 与 /faq「purely cosmetic」矛盾裁决 |
| 6 | combat-survival-guide | 你死得快的顺序通常是：体力见底被破防 → 被围时想跑但噪音引来更多 → 站水里被 Leech 咬。防死公式只有三条：战斗期体力不低于 30%、交火前先清两翼、雨天把枪收起来。本页按死亡原因排章节，末尾附「打不过组合」速查表。 | Stamina 数值表、敌攻击型描述 |
| 7 | contracts-guide | 合同的真正规则不是报酬表，而是**难度跟随房主等级** —— 老带新时新人进的是老手的怪。选合同的顺序应为：新人带 Rescue、速刷带 Salvage、冲声望带 Story、满配去 Legendary。本页含 6 类合同报酬表与 Ox Cart 携带策略。 | Host 难度缩放、报酬表数值 |
| 8 | controls-settings-guide | 键位表本页只列默认值与改键建议，真正的重点是三处：雨水天气下枪械键位形同虚设、PS5/Xbox 两版键位布局不一致、以及第 6 节常见故障（黑屏/语音/手柄）各自对应哪个修复页。系统要求以 Steam 商店页为准（已注明核验日期）。 | 键位默认值需对照游戏内设置逐项 |
| 9 | coop-strategy-guide | 四人队翻车的第一原因不是怪强，而是幻觉没人对证：屏幕上队友变怪时，唯一可靠的验证是语音里真人开口。本页的职责分法（Point Man/Support/Rearguard/Pack Mule）、公共大厅跨平台组队法与复活优先级，全部围绕「信任链」设计。 | 幻觉/复活机制（与 #30 边界） |
| 10 | crafting-recipes | Galleon 下层甲板那张工作台只做三类事：升 Medallion、搓治疗与 Sanity 消耗品、装弹药。配方解锁绑个人 Rank，本页按 Rank 阶段列配方与材料来源（Scrap/组件/Artifact 三类）。「这把武器能修吗」不在这里 —— 修理走 Anvil，见武器耐久页。 | 全配方表数值、材料命名 |
| 11 | daily-challenges | —— 合并入 #7 contracts-guide（见 §7），不单独重写。 | — |
| 12 | ending-guide | 三个结局的分叉不在最后一战 —— 在它之前的两个计数：Lore Pages 是否集齐（含 12,000 声望线）决定你能不能选「Descend Further」进 True Ending；声望不到 8,000 则只有 Escape 可选。本页按结局倒推给出决策点清单，含剧透警告。 | 结局条件数值（12,000/8,000）、声望来源 |
| 13 | enemy-bestiary | 本图鉴收录的所有生物里，真正改变打法的只有三类判据：怕不怕光、能不能背刺、会不会在玩家落单时点名。页面按这三分法组织：怕光种拿灯劝退、可背刺种绕后一刀、点名怪（Corrupted 复制体等）必须贴队处理。Y'm-bhi 六变体的行为差异见类目一。 | 全生物 HP/掉落/行为数值 |
| 14 | extraction-guide | 撤离失败的原因排序是：等太久（隐藏计时器触发森林觉醒）＞ 分散撤离（队伍第一个进圈后倒计时不为任何人停留）＞ 把 Ox Cart 当仓库忘了拉走。本页的绿灯/黄灯/红灯三色规则告诉你每阶段该走该留，撤离装建议在末节。 | 计时器机制、60-90 秒等待期 |
| 15 | faq-content | 与 /faq 双页合一后（站点层处置，见 §7），本页只保留**别处没有答案**的问题（如 Alt+F4 存档损坏、跨平台购买两次、Demo 进度继承），价格/平台/配置/时长类问答改为一段摘要 + 深链到对应指南页。 | 双 FAQ 合并执行 |
| 16 | game-length-guide | 「多久能通关」取决于你问的是哪条线：主线剧情约 15-20 小时是发售前估值，未含后期更新；单次远征 20 分钟上下；Demo 只有一次固定内容的远征。本页把三条时长线分开列，并把「Demo 体验什么」移到独立小节避免与价格页重复。 | 时长估值全部重标「发售前估计 [待实测/待社区校准]」 |
| 17 | isolation-guide | —— 保留（T3）。 | — |
| 18 | legendary-hunts | 四个 Hunt 猎物有三个共同点：固定巢穴、20 分钟不杀就脱战、掉落全游戏唯一。本页的差异只在打法：Drowned Baron 水战、Pale King 怕火怕声、Crawling King 地下钻地、Gilded Widow 毒与高伤。接单前先看本页「一次合同只出一单」的机制说明。 | 4 猎物机制/奖励表数值 |
| 19 | loadout-guide | 决定一次远征成败的槽位只有三个：主武器（决定你能否静音清怪）、光源（暗区 Sanity 与怕光怪）、以及 6 个消耗位里你为 Sanity 留了几格。重量规则是硬约束：超 70% 减速 15%、超 90% 禁跑。本页给 Solo/Squad/速刷/噩梦四套预设起点。 | 重量红线/耐久消耗数值 |
| 20 | maps-locations-guide | 地图开放顺序 = 声望门：Sunken Grotto 要 2,000 声望，四张 Hunt 图只随合同解锁。本页逐图给「POI - 敌人 - 路线」三栏，其中 Catacombs 与 Sunken Grotto 的水位地形是最常翻车点 —— 两图路线节有专项提示。Hunt 巢穴位置与 Legendary Hunts 页同源。 | 解锁顺序/声望门槛数值 |
| 21 | money-guide | 三条货币的差别一句话讲完：Reputation 解锁地图、Token 买永久升级、Gyldenblood 只在「带 loot 活着出图」时产生 —— 所以最快赚钱法不是打最贵的怪，而是挑报酬/风险比最高的 Salvage 合同并活着回来。本页含最高价掉落清单与卖/留判断表。 | 货币表、掉落价值数值 |
| 22 | motion-sickness-camera-fix-guide | —— 保留（T3）。 | — |
| 23 | multiplayer-connection-fix-guide | —— 保留（T3）。 | — |
| 24 | nightmare-mode | 解锁噩梦只有一个真实前提：把每档合同都清过一次（含 Legendary）。开启后真正的威胁不是怪变强，而是 Sanity 压力与撤离窗口同时收紧。本页的 modifier 组合表会告诉你哪些组合该直接重roll。 | 解锁条件（Galleon Rank 4/10 个 Hard 日常）、modifier 数值 |
| 25 | performance-fps-fix-guide | 帧数瓶颈按优先级修：着色器没编完（等 100% 再重开）＞ Foliage/Volumetric Fog 设 Low ＞ 开 DLSS/FSR ＞ 挪 SSD。本页 TL;DR 表给六步与各自收益；「45-58 FPS@1440p High」等基准数值属社区与编辑实测汇总，标注了来源与测试环境，若你环境不同以本页设置表为准。 | 基准数值标注来源（当前无来源，见 §6 高危例 3） |
| 26 | perks-guide | 25 个被动里真正进构筑的只有两类：恢复系（Sanity/血量）与噪音系（潜行）。本页四套 Build（Silent Collector/Frontline/Cursed/Speedrunner）各给出核心 6 perk 名单与解锁里程碑；「哪些最强」的结论在每系推荐节，按 solo/co-op 分开给。 | perk 数量/解锁里程碑数值 |
| 27 | price-platforms | 结构页改造后补 intro：买之前先确认三件事 —— 你要的平台是否有 Game Pass（当前没有）、Deluxe 多出来的两个角色是否值得 10 美元、Demo 进度是否继承（不继承）。本页价格与版本信息核验日期见页脚，系统要求链接指向 Steam 商店页。 | 版本内容（Fortune Hunters 2 角色）、Demo 范围 |
| 28 | progress-save-recovery-guide | 丢档分两种，修法不同：整档清零走 1.02 的成就/奖杯恢复工具（全平台，含 PS5 专项修复）；单次远征崩没的 30-60 分钟只能预防（崩溃后先别开新局，按本页验证文件 + 退出流程）。存档路径在末节，Alt+F4 卡撤离画面属已知触发点。 | 1.02 工具可用性（对照 #34 官方记录）、存档路径 |
| 29 | progression-system-guide | —— 保留（T3）。 | — |
| 30 | sanity-guide | Sanity 的判断顺序比数值重要：先分「Sanity 掉」还是「Isolation 压」（后者离队才触发，吃药无效，见隔离页）→ 幻觉真假用三秒规则 + 队友语音对证 → 真掉再按预算吃药，别低于 40% 才补。本页的掉落阈值表用于规划单次远征预算。 | 阈值/掉落数值表 |
| 31 | solo-guide | 单刷的第一决定不是带什么，而是带不带 AI 同伴：同伴能对证幻觉但会制造噪音、且救不了被「点名怪」盯上的你（见隔离页）。本页四支柱按优先级排 —— 潜行 > 资源 > Sanity > 撤离规划 —— 每支柱给 solo 专属做法而非团队做法的翻版。 | AI 同伴能力描述（与 #34 手势更新对齐） |
| 32 | stealth-guide | 噪音半径表给出的是相对关系而非精确距离：枪声约等于全图广播，跑步脚步声高于潜行，安静移动才是默认态。背刺只对可背刺类生效（图鉴已分类）且失败会触发 stumble 连击。本页的潜行路线节是 solo 与四人队通用的最低噪音走法。 | 噪音半径数值（标来源或降级为相对表述） |
| 33 | trophy-achievement-guide | 全成就约 28 个（1 白金 + 5 金 + 10 银 + 12 铜），真正会错过的只有 2 个可错过杯 + Lore 收集线。白金不需要在线。本页的路线图按剧情杯→收集→杂项排；奖杯数量属平台公开列表数据，页脚注明核对版本。 | 奖杯清单对照平台公开列表（可核验项） |
| 34 | updates-patch-notes | —— 保留（T3）。 | — |
| 35 | walkthrough-guide | 主线不是关卡制，而是合同制：声望到点解锁新岛新章，四章分别在 Phase 1-3 推进，两个剧情 Boss（Lurker/High Priest）在固定合同里。最短通关路径的合同清单在末节。结局分支细则不在这页 —— 见 Ending Guide，本章只给三结局触发概要。 | 章节/声望数值、Boss 机制（对照 #13/#4） |
| 36 | weapon-durability-repair-guide | —— 保留（T3）。 | — |
| 37 | weapons-guide | 六把武器按「静音×防雨」两个属性分三档：Crossbow 全条件可用、Machete 零成本近战、Francesca Axe 高风险高回报，枪械三件套全部怕雨。弹药是共享池，所以四人队别全员带枪。Tier 结论与 /tier-list 页同一来源（两处已合并，见页面注记）。 | 武器属性表、Tier 排序来源声明 |

---

## 6. 证据层方案（可落地、不编造）

现状：**0 图片 / 0 作者 / 0 实测**；32/37 篇零外链；大量精确数值无来源。ChatGPT 交叉审核（2026-08-10 记录）已给出正确路线：**真实来源 > 伪造经验**。据此分层落地：

### 6.1 高危数值例（先核验或标注，改造前置项）—— 举证（file:line）

| # | 声明 | 位置 | 处置 |
|---|------|------|------|
| 1 | 每日 00:00 UTC 刷新、Easy 5/Medium 3/Hard 1、x1.0/1.5/2.5 倍率 | daily-challenges.md:17-23 | 与 contracts-guide「board rotates each cycle」冲突；无来源 → 合并时或删或标 [待确认] |
| 2 | 角色 trait 数值：Iron Will 15% Sanity 减伤、Divine Protection 治疗 +25% | characters-classes.md:23-31（首段表格区） | 与 /faq「characters purely cosmetic」矛盾；玩家自制站无此来源 → 标 [待确认] 并裁决双源 |
| 3 | 「RTX 4080 Super 1440p High 仅 45-58 FPS」「~15%/20-40% FPS 收益」 | performance-fps-fix-guide.md:21-38 | 无来源的硬件实测数字 = 93.4% 未验证数据典型 → 删除或标来源（若社区帖可证则附链） |
| 4 | Sanity 阈值表（39%-15% 幻觉、3x 敌潮、45% 用药线） | sanity-guide.md:40-56 | 无来源 → 标 [待确认] 或降级为相对表述（「低 Sanity 出幻觉」） |
| 5 | 噪音半径 ~200m/25m/30m/15m | stealth-guide.md:25-28 | 无来源精确值 → 标 [待确认] 或改「近/中/全图」相对档 |
| 6 | Boss 数值（Lurker 50% 弹伤减免、800 Reputation、Mask of Dagon 掉落） | boss-weakness-drops-chart.md:32 | 与 #18/#35 双写且均无来源 → 单源化 + 标核对 |
| 7 | 结局门槛 8,000/12,000 声望、Lore Pages 收集 | ending-guide.md:27,124-154 | 无来源（首发前/后均无官方攻略书）→ 标 [待确认]，与 #35 同值互查 |
| 8 | 主线 15-20 小时、Demo 20-30 分钟 | game-length-guide.md:21-28；app/faq/page.tsx:24-25 | **发售前（07-14）估值**，发布 2 个月未重标 → 重标「发售前估计，待玩家社区校准」 |
| 9 | 解锁条件「Galleon Rank 4 + 10 个 Hard 日常」 | nightmare-mode.md:23-25 | 与 #11 每日 Hard=1 逻辑尚自洽但无来源 → 标 [待确认] |
| 10 | 武器耐久「两三次挥击即断」「20 分钟脱战」等 | weapon-durability-repair-guide.md / legendary-hunts.md:25 | 前已有 Community 标注（好）；后者无来源 → 标 [待确认] |

### 6.2 来源字段体系（每篇 frontmatter 增加，遵循 Profile 三层证据）

```yaml
sources:
  - type: official          # Official：Steam 商店页/官方公告可查证
    what: "system requirements"
    url: "https://store.steampowered.com/app/2569760"
    checked: "2026-09-09"
  - type: community        # Community：有社区/编辑站链接（模式：#3/#17/#22/#23/#36 已在用）
    what: "Isolation mechanic"
    url: "https://noobfeed.com/articles/the-mound-omen-of-cthulhu-isolation"
    note: "single-source detail — flagged [Unconfirmed] in body"
  - type: editorial        # Editorial：编辑判断/规划性建议，诚实标注
    what: "tier rankings"
verified_against_game_version: "1.03 [已按 updates-patch-notes 核]"
```

现有可复用锚点（站点已引用，勿新增来源猜测）：Steam 商店页/社区 hub（updates-patch-notes.md 链接，app 2569760）、blood-moon 与 isolation 引用的 NoobFeed/OutputLag/ChapterCheats 编辑页、multiplayer 引用的 2UpSkill/lagofast、weapon-durability 引用的 GameWatcher。

### 6.3 可核实的版本/日期字段（不编造即可落地）

- 所有页 frontmatter `version: "1.0"` → 改为游戏版本号 `game_version: "1.03"`（依 #34 记录），并删除正文「Launch Version / Updated」占位块（现 30 篇页首仍挂着 Launch Version 字样的过时信息）。
- 价格页/配置页加 `checked: 2026-09-09`；改动过版本数值的页面统一重查一次。

### 6.4 「未能确认」显式化（唯一合法的诚实出口）

现 7 篇 T3 页的写法成为全站模板：正文单源/无源细节统一标 **[Unconfirmed]**，页首 honesty note 一句说明「开发者未发布官方说明，单源细节已标注」。30 篇 T2/T1 页改造时按同一纪律执行，**禁止反向操作（把存疑数值当事实输出）**。

### 6.5 截图采集清单（由真实玩家/站主执行，采集后按页归档；禁止无图硬声称）

| 优先页 | 需要采的镜头 | 说明 |
|--------|-------------|------|
| #30 sanity / #17 isolation | 灰色边缘/画面扭曲/树根抓取瞬间 | 两机制视觉区分的最佳证据；采集时勿裁剪失实 |
| #6 combat | 体力条与破防/背刺成功帧 | 关键帧即可，1-2 张/节 |
| #8 controls / #22 motion | 设置菜单（FOV 滑条 75-125、中心点开关）| 菜单截图可对照 patch 版本号一起拍 |
| #37 weapons / /tier-list | 6 武器 HUD 与属性页 | tier 页「verified」徽标的唯一合法证据来源 |
| #25 performance | 设置表 + 帧率计数器 | 与基准声明绑定（如采不到就删基准句） |
| #34 updates | 游戏内版本号角标 | 版本声明的事实锚 |

每张截图配署名行：`Captured by <站主> on <日期>, game version 1.03, no post-processing`—— 这是唯一允许出现的「经验证据」，与伪造 "I tested this" 划清界限。

### 6.6 站点层陈旧信号清理（AdSense 低价值感知的直接来源）

- `/faq`（app/faq/page.tsx）：删除「It launches July 15, 2026」「check official documentation at launch」等发售前占位句（:12,27），全页按 2026-09-09 状态重写；「purely cosmetic」条目先与 #5 裁决。
- `/tier-list`：将「verified from the launch build」徽标改为「Editorial ranking, compiled <date>」；说明数据来自哪（官方资料页/社区讨论/编辑判断分列）。

---

## 7. 薄页/重复页处置建议

| 建议 | 文件 | 理由 |
|------|------|------|
| **合并（3 篇 guides）** | #11 daily-challenges（1,205w） | intro 即 #7 的同题模板；唯一增量（UTC 刷新表/倍率表）与 #7 冲突且无来源 → 内容并入 #7「每日轮换」小节，路由 301 或下线 |
| | #2 beginner-loadouts（1,221w） | 槽位/重量表与 #19 逐格相同，Build 与 #19 预设重叠；唯一差异「<100 硬币预算」→ 压缩为 #19 的「新手预算」小节；若保留独立页则必须与 #19 划清「预算」单一边界 |
| | #4 boss-weakness-drops-chart（928w） | 纯表格页，整页是 #18（4 Hunt 猎物）+ #35（2 剧情 Boss）的数据子集；无任何独立知识点 → 数据源并入两页后，作为「跑前速查」附录并入 #18，或下线（替换为两页互相锚点链接） |
| **站点级合一双 FAQ** | /faq（app）↔ #15 faq-content | 同题双答、文本不一致、且 #15 的 15 问中 ≥10 问与 #27/#8/#16 重复 → 保留硬编码 /faq 作为唯一 FAQ 路由（含 FAQPage schema 优势），#15 下线或改造成「深链导航」薄页；裁决「purely cosmetic」矛盾 |
| **站点级单源化 Tier** | /tier-list ↔ #37「Weapon Tier List」节 | 两处排名并存且文案不同 → 排名数据只存一处（建议 /tier-list 页面），#37 节保留分析文并注「排名见 /tier-list」 |
| **去重不合并** | #16 demo 节 ↔ #27 demo 节；#21 ↔ #29 货币表；#30 ↔ #9 幻觉节；#35 ↔ #12 结局节；#13 ↔ #32 背刺节；#3↔#6/#14 Forest Awakens | 各自有独立搜索入口（时长/价格/货币/结局/图鉴/血月），保留页面，只做知识单源 + 互相深链（见 §4 簇 C3-C9） |
| **观察（不并入）** | #33 trophy-achievement-guide（1,135w） | 奖杯列表是**可官方核验**的数据 → 与其合并不如「补来源」升级为证据模范页（对 Steam/PSN 公开列表截图引用）；目前「approximately 28」为对冲性写法，核验后可直接精确化 |
| **观察（不并入）** | #16 game-length-guide（815w，最薄正文页之一） | 保留，但 15-20 小时等数字必须重标发售前估值；若无法校准到「玩家实测中位数」，建议降级并入 /faq 单页回答 |

---

## 8. 改造优先级排序（CTR 价值 × 性价比）

依据：决策类搜索 CTR 5.36% 为最高价值桶；fix/机制页承担真实问题意图；yes-no 问答桶 0.00% —— 只保最少必要入口，不做独立排名页。参考反面数据：59/245 篇最终被重定向的自噬页在改造成本最高后才被处理 —— 所以**先清理后重写，先决策页后资讯页**。

**P0 —— 决策/修复/机制高价值页（10 篇 + 2 组站点页）**
#19 loadout（并 #2）、#37 weapons、#5 characters、#26 perks、#31 solo、#9 coop、#32 stealth、#25 performance、#28 progress-save、#24 nightmare（并入解锁核验）；站点层：#30↔#17↔#9 幻觉/隔离边界裁决、#13↔#32 背刺边界。
完成标准：intro 全部 T3 化；危险数值（§6.1 例 2/3/5）完成核验标注；Tier 排序来源声明化。
性价比：决策词直达最高 CTR 桶；fix 页是复审时「回答问题」的最佳证据。

**P1 —— 机制/系统主力页（10 篇）**
#1 beginner、#6 combat、#7 contracts（并 #11）、#14 extraction、#18 legendary（并 #4）、#35 walkthrough、#12 ending、#20 maps、#21 money、#29 progression（保留 intro，去重货币段）。
完成标准：intro 全重写；§6.1 例 1/6/7/9 数值核验或 [待确认] 化；与 C 簇内各页互链就位。

**P2 —— 资讯/问答/薄页（8 篇 + 站点 2 组）**
#8 controls、#10 crafting、#13 enemy-bestiary、#15 faq-content（/faq 合一）、#16 game-length、#27 price-platforms、#33 trophy、#34 updates（保留）、/tier-list 徽标修正。
完成标准：资讯类完成官方来源逐条标注（§6.2）；陈旧占位文案清零；双 FAQ/Tier 合流；#33 截图归档。

**批次纪律（MUST）**：任何一批内，先跑 §6.1 高危清单核验 → 再改正文 → 最后换 intro → `npm run build` 零错误 → 更新页脚 checked 日期。**MUST NOT** 在数值未核验前把新 intro 里的对应断言上线。全部完成后：等 2-3 周（复审建议间隔）→ 主 Agent 提交复审。

---

## 9. 风险与停止项

- **停止项（本任务触发即停，上报主 Agent）**：#5 与 /faq 的「角色是否纯装饰」矛盾涉及对游戏事实的对外陈述，需在核验游戏实际内容后裁决，不得凭推测改；任何涉及 ACE Team/NACON 商标表述、Lovecraft《The Mound》改编权表述如需改动，先停下标注。
- **残余风险**：T2 页正文中未逐条列入 §6.1 的其他精确数字（各表内 HP/声望/价格），执行批次内必须全表扫一遍；「0.00% CTR」桶页面（/faq、price 类）保留存在合理性（导航/信任页职能），但**禁止为它们新增同型新页**。
- **本篇目改造 ≠ 复审通过保证**：AdSense 低价值判定是多维的；本方案只保证「模板互换」与「无据数字」两类核心信号清零。
- 文档全部行文基于工作区文件实读（37 篇 + app/faq + app/tier-list + sitemap），未访问线上站点；线上与本地如不一致以线上为准（执行期复查）。
