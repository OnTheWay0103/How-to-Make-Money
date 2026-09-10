# Sephiria Wiki 每日扩充记录 — 9/11

> 任务: 每日内容扩充（sephiriawiki）| 站点: sephiriawiki | 日期: 2026-09-11
> 岗位: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 材料版本: 工作树（HEAD e5258d6）
> 结果: ✅ **EXPANDED `patch-1-0-31-build-changes-guide`** — 触发条件命中：官方 **1.0.31 Update（2026-09-10）** 发布（前值 1.0.30 / 8-20）。
> 说明: 未触碰本站既有 35 个 guide 与 home-content；只新增 1 篇。

---

## 1. 触发条件核验（.agent/expand-daily.json 的 9/9 SKIP 触发条款）

9/9 SKIP 记录的触发条件是两条，任一命中即可写：

| 触发条件 | 9/11 核验结果 | 判定 |
|---|---|:--:|
| 官方 1.0.31+（前值 1.0.30 / 8-20） | **命中** — Steam 官方公告「1.0.31 Update」发布日 **2026-09-10** | ✅ 命中 |
| 武器升级材料刷取（Copper/Luminous/Apex）出现 ≥2 独立来源且命名一致 | 未命中 — 仍仅 xmodhub 单源（EN / zh-tw / ko 三语同源）；9game / wandoujia / pp.cn 的「铁砧（Anvil）」文讲的是每阶段用哪把武器，非材料刷取 | ❌ 未命中 |

**→ 按官方补丁触发条件执行扩充。**

补丁史核验（Steam 官方公告时间戳，本次逐条读取，非二手转述）：

| 版本 | 发布日期 | 备注 |
|---|---|---|
| **1.0.31** | **2026-09-10** | 本次素材来源 |
| 1.0.30 | 2026-08-20 | 站内既有 guide 引用的「最新版本」基线 |
| 1.0.28 hotfix | 2026-08-14 | |
| 1.0.26 | 2026-08-13 | |
| 1.0.24 | 2026-08-07 | |
| 1.0.23 | 2026-08-04 | |

「静默热更」线索按 9/9 结论维持关闭（连续 4 日无新反证，已不再查）。

---

## 2. 1.0.31 素材（全部取自官方公告原文，逐字可比对）

来源：[Steam 公告 — 1.0.31 Update（2026-09-10）](https://store.steampowered.com/news/app/2436940)，经 Steam 官方 news API / RSS 读取全文。

**新增内容**

- Sword & Shield 2 个新升级：**Blinding Silence**（Lightning Damage +5；Thunder's Earring 攻击次数 +1、伤害 +100；Special Attack: Cleave 立即触发 Thunder's Earring）、**Garden of Needle Ice**（Cold Damage +5；Ice Vine 激活后环绕玩家且不再有冷却）。
- Sword & Shield **移除 Magic Wand 升级**，替换为 **Prismatic Magic Wand**（Weapon Attack 改为 Magic Missile，元素取 Highest Elemental Damage；两种以上元素并列最高时改打 Chaos Damage）。
- Great Sword 新升级 **Bloodletting Gearblade**（以 Bloodletting 替换 Special Attack: Reassemble；Bloodletting 将 Max HP 固定并把溢出部分转为伤害，效果结束时返还）。
- Crossbow 新升级 **M-9200**（Ammo Compression 相关；压缩 ≥10 发产生强化弹，弹体更大、伤害 +20%）。
- Blade 新闪电系升级 **Cerulean Cloud Sword 'Arges'**（Weapon Attack 伤害 −20% 但改为随 Lightning Damage 缩放；Sheath 替换为 Special Attack: Cloud Slash，MP 5；Storm Cloud 自行落雷获得 1 层 Residual Lightning，上限 20；每 5 层基础威力 200/220/250/300% of Lightning Damage，每层再 +5%）。
- **8 个新神器**：Faded Shield Crest（50 次 Perfect guard → Crest of the Iron Wall）、Rusty Tsuba（Unsheath/Sheath 格挡 30 次 → Master's Tsuba）、Trainee Duelist's Epaulette（→ Duelist's Epaulette，350%）、Dull Resonance Stone（移速 ≥140% → Resonance Stone）、Stiff Crank（完成 Reload 50 次 → Marksman's Crank）、Midday Whetstone、Meteorite Mirror、Blacksmith's Tongs。
- **Comprehensive Training Grounds** 新增教学：从 Training Grounds 入口进入，可在其中打开背包取出已解锁物品试用。
- Stages：调整部分区域地块摆放；Qliphoth's Temple：修复奖励/楼梯过近、补齐缺失碰撞。

**神器改动（11 个）**：Thorn Charm（Physical Damage +1/1/2/3 → +1/2/3/5）、Mini Ballista（多人客户端旋转、特效透明度）、Broken Sapphire、Slim Cushion、Fretted Clay Tablet（Storm Cloud 不消耗概率 10/20/30/40/50% → 20/30/40/55/70%）、**Blood Stone Ring（重做：每 15/13/10 击杀回 5 HP → Damage Taken Recovery +20/40/60）**、**Vital Touch（重做：3 级 → 5 级，新增 Defense ≤50 额外回血，Final HP 惩罚 −55/−48/−40/−33% → −30/−26/−22/−18/−14/−10%）**、Meteorite Earrings（Legendary → Rare，移除 Solar Blade Damage 5/10/15）、Droplet of Plitvice、White Paper、Elastic Band。

**武器改动（17 个）**：Perfect Balance（格挡角度 90° → 110°）、Starlight（格挡反弹 300%/400% → Riposte Blade Fragment 反击改为穿透 Star Trail）、Drifting Ash、Carrot Sword（改为随最高元素伤害缩放并打 Chaos）、Ballista Sword（Mini Ballista 不再受伤）、Solis Missio（Reignite 仅在格挡时倒数）、Creeping Despair（Fury +10% → +15%）、Solis Imber（+50% Meteorite Pauldrons 伤害）、Frozen Smelt（Fury 命中额外施加 2 次 Frostbite）、Colossal Crossbow: Rapid Freeze Crystal（Frost Veil → Frost Relic: Frost Veil）、The Barnacle（Explosion 改物理伤害 10 + 120% Physical Damage，每 2 Defense +1%）、Beast Marks Sword 'Hou'（每 2 Evasion +1% → 每 1 Evasion +1%）、Heidi（Overheat 重做：叠加 1 层上限 12、攻速固定 300%、2 段连击 135% Fire Damage）、Solis Braca（🥕 手柄特殊攻击无法锁定）、Sacred Jar（普攻 20% 召唤 Carrot Soldier，20 秒，最多 5 个）、Formless Dance（每 Evasion 1% → 0.85%）、Successor（Grimoire Damage +30% → Magic Wound：受 Grimoire 伤害 +6%，10 秒，最多 5 层）。

**🥕 社区反馈标记（10 处）**：官方在公告开头声明 🥕 代表「基于社区反馈的改进」，1.0.31 共 10 条带此标记 —— 武器输入自定义关闭后武器槽技能回到快捷栏、多任务并行时任务进度修复、第一章某服装无法解锁、第六章地震过场重复播放、药水槽减少时药水掉地、以及 3 条联机改动（观战对象切换区域时结束观战、绑定物品掉地全队可见但拾取提示不可拾取、聊天字数上限与屏蔽标签格式）。

---

## 3. 查重（对照站内既有 35 篇 slug）

`ls sephiriawiki/content/guides/` → 35 篇（artifacts / beginner / boss / builds / chapter-6-final-boss / chapter / controller-casting-keybind / controls-settings / coop-freeze-recovery / coop / costumes / crash-launch-black-screen / crossbow-build / dagger-build / endgame / faq-content / farming / full-release / game-length / greatsword-build / hard-mode / inscriptions / katana-build / multiplayer-connection-fix / mystic-pot / potions-consumables / save-file / secret-rooms / solo / speedrun / staff-build / sword-shield-build / tablets / talents / weapons）。

站内 grep 核验（`1.0.31` / `1.0.30` / `training ground` / 全部新神器名与新升级名）：

- **无任何 guide 覆盖 1.0.31**。既有 guide 引用的最新版本一律为 **1.0.30（Aug 20, 2026）**（`coop-freeze-recovery-guide.md:11/51/53/55/62/100/106/109`、`crash-launch-black-screen-fix-guide.md:42/105/112`、`save-file-guide.md:63/88`、`controller-casting-keybind-fix-guide.md:11/49/58`）。
- `training ground` 仅在 `coop-freeze-recovery-guide.md:51` 出现（1.0.24 已知问题 / 1.0.25 修复），讲的是**进入 Training Grounds 卡死**，与 1.0.31 新增的 **Comprehensive Training Grounds** 不同题。
- 8 个新神器名、6 个新升级名全站 **0 命中** → 真实内容空白。
- 与 `artifacts-guide` / `weapons-guide` / `builds-guide` / 6 篇武器 build 的关系：那 6+1 篇描述的是 **1.0.30 及更早的效果**，本文写的是 **1.0.31 的变更与重做**，搜索意图不同（「我的 build 变了怎么办」vs「这个武器怎么玩」）。为降低自噬风险，正文以变更对照为主线，不复述武器基础玩法，并在 Related Guides 中回链到上述各篇。

---

## 4. 选题四条件核对

| 条件 | 核验 |
|---|---|
| ≥3 条独立来源提及 | ✅ 官方公告为主源（补丁内容的唯一权威来源，公告本身即触发条件）；Community 层用官方公告内的 10 处 🥕 社区反馈标记 + TEAM HORAY Discord / Steam Discussions 渠道；Editorial 层用 VaporLens 聚合分析（武器平衡多样性 / Boss 血量 为玩家最常提的两项设计抱怨，数据快照至 2026-08，早于 1.0.31）。RSS + news API 两条通道读到同一时间戳 |
| 可写成一篇具体问题的文章 | ✅ 「1.0.31 之后我的 build 要怎么改」——6 个新升级、8 个新神器、11 个神器重做、17 个武器重做、1 个升级被移除 |
| 未被现有攻略覆盖 | ✅ 见 §3（新素材全站 0 命中；既有 guide 全停在 1.0.30） |
| 不编造 | ✅ 所有名称/数值/机制均逐字取自官方公告；无玩家引语；无第三方转述；未标注任何 [Unconfirmed] 数字（因为不需要——全部可溯源到官方） |

**产出**：`sephiriawiki/content/guides/patch-1-0-31-build-changes-guide.md`（body 1478 词，落在 800–1500 词红线内；`sources` 三层 Official / Community / Editorial；frontmatter 与既有 guide 同构；`related` 7 个 slug 全部经 `ls` 核验存在）。

---

## 5. 未改动事项 / 待人工

- ⚠️ **既有 4 篇 guide 的「最新版本 = 1.0.30」表述在 1.0.31 后已滞后**（coop-freeze-recovery / crash-launch-black-screen / save-file / controller-casting-keybind）。本次按任务边界只新增 1 篇，**未**做跨篇版本号刷新（属批量事实修正，建议主 Agent 单独派单，避免部分替换造成站内矛盾）。
- 武器升级材料刷取（Copper/Luminous/Apex）触发条件**未变**：仍需 ≥2 独立来源且命名一致（xmodhub 的 tier 命名 Lunar vs Luminous 冲突仍在）。
- 下一次触发条件：官方 1.0.32+ 或 ≥3 独立来源的新玩家反馈。
