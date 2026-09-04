# The Mound 内容扩充记录 — EXPAND-018 (9/5)

> 模式: expand-feedback | 站点: themoundwiki | 游戏: The Mound: Omen of Cthulhu (ACE Team / NACON, Steam app 2569760, 2026-07-15)
> 角色: 反馈分析师 + 建站协调员 | 结果: ⏭️ SKIP（本轮无满足四条件选题，按「宁缺毋滥」规则不硬写）

## 一、采集了哪些源（真实执行）

### Steam 用户差评（经 Steam 官方 reviews API 抓取英文差评原文，2026-09-05）
- [The Mound: Omen of Cthulhu Steam 商店页（评价区，总计 Mixed / 近期 Mostly Positive）](https://store.steampowered.com/app/2569760/) — 抓取 30 条英文差评，归纳出 10 类高频抱怨（见下）。

### 编辑评测（独立来源）
- [IGN — review（难度/伸缩）](https://www.ign.com/articles/the-mound-omen-of-cthulhu-review) — "really freaking hard"、敌人数/致命度 scaling 过快、Basic 难度地板过高。
- [digitalchumps — review](https://digitalchumps.com/the-mound-omen-of-cthulhu-review/) — Harsh difficulty spikes；敌人不断复活。
- [NoobFeed — review](https://www.noobfeed.com/reviews/the-mound-omen-of-cthulhu-review) — 敌人数量超过装备容量、单人 AI 无效。
- [gamersocialclub.ca — review](https://gamersocialclub.ca/2026/07/15/the-mound-omen-of-cthulhu-review/) — 突然的「人工难度尖刺」惩罚不沟通的队。
- [cogconnected — review](https://cogconnected.com/review/the-mound-omen-of-cthulu-review/) — Buggy and Boring；下雨让枪失效；流血机制烦人。
- [azat.tv — difficulty mechanics](https://azat.tv/en/the-mound-omen-of-cthulhu-difficulty-mechanics/) — 惩罚性难度缩放。
- [Backloggd 用户评测](https://backloggd.com/u/SweetKingParrot/review/5152945) — 差评用户视角。
- 技术类: [2UpSkill — Black Screen / Crash on Launch](https://2upskill.com/how-to-fix-the-mound-omen-of-cthulhu-black-screen-and-crash-on-launch-issues/)、[The CPU Guide — Crashing on PC](https://www.thecpuguide.com/gaming/the-mound-omen-of-cthulhu-crashing-pc/)、[The CPU Guide — Crashing on PS5](https://www.thecpuguide.com/gaming/the-mound-omen-of-cthulhu-crashing-ps5/)（崩溃类独立编辑来源，≥3）。
- 玩法/机制编辑来源（对现有 slug 逐一比对后判定已被站内覆盖）: outputlag co-op difficulty、nerdschalk Nine Guardians / Fort Logbooks、Destructoid Fort Logbooks、tposegaming tips、ChapterCheats hints。

## 二、高频主题 → 站内覆盖对照（为何全部不满足「未被覆盖」）

| 玩家高频抱怨（≥3 独立来源） | 站内已有覆盖 | 结论 |
|------|------|------|
| 优化差/低 FPS/微卡 | performance-fps-fix-guide | 已覆盖 |
| 崩溃/fatal error/冻结/软锁（anvil） | progress-save-recovery-guide（含 Known Crash Issues + 崩溃后步骤）+ performance-fps-fix-guide（config reset 修 crash-on-launch）+ multiplayer-connection-fix-guide（Fatal Error 混合显卡）+ controls-settings-guide（crash on launch 条目）——跨 4 篇分散覆盖 | 已覆盖（分散但成体系），再写为自噬 |
| 难度过高/scaling 太快/host 等级拖新人 | contracts-guide（Difficulty Scaling — Contracts Follow the Host + 新人 workaround）+ combat-survival-guide（Why Combat Feels Hard）+ nightmare-mode | 已覆盖 |
| 近战烂/没防御/block 差 | combat-survival-guide（Blocking/Parrying/Dodging + 为何难）+ weapons-guide | 已覆盖 |
| 枪在雨里失效 | weapons-guide（rain-proof 表、Matchlock 雨天无用、按天气配装） | 已覆盖 |
| 武器消失/无 meta 进度 | progression-system-guide（title: why weapons never leave the expedition） | 已覆盖 |
| 近距语音几乎听不见/proximity 过强 | coop-strategy-guide（Communication 章节：spatial voice 距离表 + 「不是 bug 是核心机制」+ 视觉距离/ping 建议）+ controls-settings-guide（语音推荐设置 + Voice chat not working 排障条目）+ sanity-guide/isolation-guide（假队友声、距离掉线） | 已覆盖（跨 2-4 篇的成体系说明 + 排障），独立成篇会与大段落重复 |
| 图重复/千篇一律 | maps-locations-guide | 覆盖（游玩感受型，非可写 how-to 的具体缺口） |
| 流血机制烦人 | crafting-recipes/characters-classes/perks/coop 多处提及消耗品止血；gamerguides/chaptercheats 为 item 级说明 | 非高频玩家求助主题（单评测抱怨 + item 数据库），不足以成文 |
| 结局赶/流程短 | ending-guide / game-length-guide / walkthrough-guide | 已覆盖 |

**候选但淘汰**：
- Nine Guardians / Sacred Figures / 收集品 → trophy-achievement-guide 的 Collectible Trophies 覆盖同类；独立来源仅 nerdschalk 一篇，<3，且为成就向非痛点。
- Hound of Tindalos / cursed treasure → 站内 enemy-bestiary 无此名；独立来源不足 3（tposegaming + 聚合），机制细节难核实，编造风险高 → 弃。
- Blood Moon / 雨 / 性能 → 任务明确禁用同类（blood-moon-guide / performance 已存在），且雨已入 weapons-guide。

## 三、结论

themoundwiki 已有 35 篇指南，覆盖所有核心系统；9/5 采集的每一类高频差评主题都能映射到至少一篇既有指南或既有指南的成体系章节。按扩充计划「素材不足/无未被覆盖高频问题 → 跳过，宁缺毋滥；MUST NOT 无素材硬写」以及「内容自噬红线」，本轮 **SKIP**，不写新指南、不改 home-content、不部署。

已满足任务停止条件中「该站不写，仅把 skip 原因写入对应记录文件」一项。

## 四、自检
- 未改 themoundwiki 任何 guide/home-content ✅（保留 9/4 遗留 blood-moon-guide 未动）
- 未串站、未编造 ✅
- 次日优先补该站（记录于 .agent/expand-daily.json 由 coordinator 处理）
