# GRAIN ROT 内容扩充记录 — EXPAND-018 (9/5)

> 模式: expand-feedback | 站点: grainrotwiki | 游戏: Grain Rot (Beck & Branch Games / Neem Interactive, Steam app 4450620, 1.0 = 2026-08-07)
> 角色: 反馈分析师 + 建站协调员 | 结果: ✅ 写 1 篇（survive-enemy-chase-guide）

## 一、反馈来源采集（本轮实际抓取）

### Steam 用户差评（经 Steam 官方 reviews API 抓取英文差评原文，2026-09-05）
- [GRAIN ROT Steam 商店页（评价区）](https://store.steampowered.com/app/4450620/GRAIN_ROT/) — 1.0 差评反复出现同一条核心抱怨：Corrupted「从不让敌人脱战（never lose aggro）」「全都比你快、比你强、永远知道你的精确位置」「跑步逃跑本身最难」。摘录性转述（未具名玩家、不可逐条回溯链接，故正文按「player-reported + [Unconfirmed]」处理）。

### 社区/编辑攻略（独立来源，含逃生实操共识）
- [2UpSkill — GRAIN ROT Beginner Guide](https://2upskill.com/grain-rot-beginner-guide-top-tips-tricks-and-strategies-to-survive-the-rot/) — 先付电梯费、把电梯当 panic room；别过度深入。
- [2UpSkill — New Vessel Guide（找/换/升级容器）](https://2upskill.com/grain-rot-new-vessel-guide-how-to-find-swap-and-upgrade-wooden-vessels/) — 容器碎裂后 Spark 逃生、找替代容器；「在安全处保留备用容器」。
- [2UpSkill — All Vessel Types & Spark Survival](https://2upskill.com/grain-rot-guide-2026-all-vessel-types-abilities-and-expert-spark-survival-strategies/) — Spark 形态更难被标准威胁察觉（社区说法，未官方证实）。
- [gamerblurb — 12 Beginner Tips](https://gamerblurb.com/articles/grain-rot-12-beginner-tips-you-should-know) — 用环境陷阱/坑/风扇杀敌而非硬打；床回血、椅子回体力、Repair Glue 应急。
- [finalboss.io — Surviving Deep Layers / Rot Debuff](https://finalboss.io/grain-rot-how-to-survive-deep-layers-and-clear-the-rot-debuff) — 先建营地为先、深潜风险管理。
- [prodigygamers — Survival Tips & Extraction](https://prodigygamers.com/2026/08/10/grain-rot-guide-pro-survival-tips-room-upgrades-and-extraction-strategies/) — 逃生/提取策略。
- [Destructoid — GRAIN ROT weapons tier list](https://www.destructoid.com/grain-rot-weapons-tier-list/) — 佐证武器/敌人生态热度（辅助）。

### 站内既有攻略对照（防自噬）
读取 grainrotwiki/content/guides 全部 28 个 slug + all-enemies-guide / stealth-sound-guide / extraction-guide / survival-tips / endgame-survival / best-vessels-guide 章节。

## 二、选题

**新指南**: `survive-enemy-chase-guide.md` — *Grain Rot Enemy Chase Guide — How to Survive When the Corrupted Won't Stop Chasing*

### 四条件核对
| 条件 | 判定 | 依据 |
|------|------|------|
| 高频（≥3 独立来源） | ✅ | 差评中多名玩家独立提及「never lose aggro / 比你快 / 永远知道你在哪 / 跑步无用」；2UpSkill/gamerblurb/finalboss 等 ≥3 个独立编辑来源同向提供「被追时靠环境/电梯/Spark」实操。 |
| 具体 | ✅ | 「被 Corrupted 发现并追击后如何活下来」是可写成一文的明确场景问题（搜索意图: escape enemies / too hard / won't stop chasing）。 |
| 未被覆盖 | ✅ | 现有 all-enemies 只讲确认的侦测模型与战斗原则；stealth-sound 只讲「别被发现 / alarm 阶段 break line of sight」；survival-tips/endgame 讲耐久/腐化/提取纪律；无任何 slug 专门讲「已进入追击后的逃生协议」。已核对 slug 列表，无重复。 |
| 不编造 | ✅ | 官方确认模型（sound/movement/each other）可溯 Steam 页；追击不脱战=玩家报告，正文标注 [Unconfirmed]；逃生建议逐条挂真实社区链接；不出现虚构数值/Boss/技能名（Vanguard Iron Bastion、Soft Treds 等一律标注 community-reported + [Unconfirmed]）。 |

## 三、产出清单
- 新指南: `grainrotwiki/content/guides/survive-enemy-chase-guide.md`（frontmatter 含 Official/Community/Editorial 三层 sources；正文核心 1389 词，800-1500 ✓）
- home-content: `grainrotwiki/content/home-content.md` 在 Quick Navigation 表插入 1 行（保留既有行含 performance-lag-fix 遗留行）
- 未部署 / 未 commit（MUST NOT）

## 四、自检
- related[] 全为 grainrotwiki 真实 slug ✅
- 无 themound/其他站串站残留 ✅
- 无法证实信息均标 [Unconfirmed] ✅
