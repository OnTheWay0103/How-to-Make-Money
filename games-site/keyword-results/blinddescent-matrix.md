# Blind Descent — 页面矩阵（词 → 页 → 意图 → 素材 → 优先级）

> 输入（只读）：`keyword-results/blinddescent.md`（83 有效词，复核后 68）、`.agent/selection-blinddescent-2026-10-28.md`、`keyword-results/selection-2026-10-28.md` §五。
> 规则：`docs/STRATEGY-内容生产.md` §二（MECE 分组 / 一个搜索意图一行 / 禁止大空类）。
> 差异化红线（主 Agent 5.5）：两家厚站 `blinddescent.wiki`（216 URL）与 `blind-descent.wiki`（35 页）已铺 release / multiplayer / platforms / playtest 泛页 → **本站只做机制/路线/数值深度与「怎么做」**，不复述发售新闻；title 一律带 `survival game` / `co-op` 限定词，避开 2020 年 ML 论文与两本小说的同名 SERP。
> 不做：`codes`（游戏无兑换码，词库 `codes` 轮返回 0 条）、纯 `tier-list`（无角色/武器排行词，仅保留模板的「升级优先级」页作 editorial）。
> 首批 P0 共 **8 行**；总目标词数 11,000。

## 1. 分组总览（MECE）

| # | 分组 | 行数 | 覆盖的需求面 |
|---|---|---:|---|
| A | Co-op 与联机 | 1 | co-op 怎么开、跨平台、四人联机、共享/独立进度 |
| B | 上手（前 2 小时） | 1 | 无教程怎么活、先做什么、前两小时的顺序 |
| C | Demo 与 Playtest | 1 | demo/playtest 有什么、怎么进、能不能联机、是否继承 |
| D | 核心系统 | 3 | 扫描→配方、变异 vs 科学、基地有机侵蚀与维护 |
| E | 威胁与环境 | 1 | 风暴/毒气/生物/感染簇，怎么防、先做什么装备 |
| F | 发售与平台事实 | 1 | 平台、配置、Steam Deck、价格、跨平台、主机时间 |

> 分类互不包含（D 是玩家可控系统，E 是环境与敌人，F 是购买前事实），且覆盖 68 个复核有效词里的全部攻略型词面。

## 2. 页面清单

| 页面名（slug） | 目标搜索词 | 搜索意图 / 要回答什么 | 页型 | 优先级 | 素材源（≥2） | 目标词数 |
|---|---|---|---|---|---|---|
| blind-descent-coop-multiplayer-guide | blind descent multiplayer / how to play blind descent multiplayer | 怎么和 3 个朋友联机；跨平台怎么互通；共享世界但独立背包/变异意味着什么；剧情能不能多人打 | faq | P0 | 官方 Steam 页 categories；官方 2026-10-12 新闻稿；官方 FAQ | 1,400 |
| blind-descent-beginner-guide | blind descent beginner guide / blind descent walkthrough | 没有教程的前 2 小时按什么顺序做：先扫描还是先喝水、基地什么时候占、哪些早期错误最费时间 | beginner | P0 | 官方 Steam「About This Game」；gamer.org 试玩；官方 2025-07-30 新闻稿 | 1,400 |
| blind-descent-demo-playtest-guide | blind descent demo / blind descent demo multiplayer / blind descent playtest | demo 和 alpha playtest 是不是一回事；现在还能不能进；demo 里能不能联机；进度带不带进 EA | faq | P0 | 官方 Steam demo/playtest 状态；官方 2025-07-30 与 2026-10-12 新闻稿；zero1gaming | 1,300 |
| blind-descent-scanning-crafting-guide | blind descent crafting guide | 扫描到底解锁什么；为什么没有固定配方表；模块化制作怎么用；负重/耐久怎么管 | boss-or-mechanic | P0 | 官方 Steam「Scan and study」；gamer.org 试玩（扫描扩配方池）；官方 2026-10-12 新闻稿（modular crafting） | 1,400 |
| blind-descent-mutation-vs-science-guide | blind descent mutation / blind descent symbiosis | 变异（共生）与科学两条路各自给什么；念力/墙面奔跑怎么来；能不能两条都走；对 co-op 队伍的影响 | boss-or-mechanic | P0 | 官方 Steam「Science or symbiosis」；官方 2026-10-12 新闻稿；zero1gaming | 1,400 |
| blind-descent-base-building-guide | blind descent base building | 房子怎么盖、为什么会被藤蔓/真菌/感染簇吞掉、怎么维护与回收；离开多久算「失修」 | boss-or-mechanic | P0 | 官方 Steam（vines/fungal growths 反应 neglect）；官方 2025-07-30 新闻稿（log-by-log / overgrown-devoured-corrupted）；indiegames-inside（Organic Restoration System） | 1,400 |
| blind-descent-hazards-creatures-guide | blind descent creatures / blind descent hazards | 地底风暴、毒气、主动攻击生物、感染簇分别怎么应对；哪些只是环境不是敌人；早期该先做什么防护 | boss-or-mechanic | P0 | 官方 Steam（underground storms / toxic gases / aggressive creatures）；官方站 Fight 段（bow/spear/axe/rifle）；gamer.org（植物/生物清单） | 1,400 |
| blind-descent-platforms-system-requirements | blind descent platforms / blind descent steam deck / blind descent ps5 release date | PC 三平台是否都上、PS5/Xbox 什么时候、配置够不够、Steam Deck 能不能跑、价格定了没 | faq | P0 | 官方 Steam 页（Win11 配置 / 11 语言 / 40GB）；官方 2026-10-12 新闻稿（Steam+GOG+Epic）；zero1gaming（EA 约一年 / PS5·Xbox 随正式版） | 1,300 |

## 3. 长尾覆盖与后续（P1，不首批）

| 候选页 | 目标词 | 为什么先不做 |
|---|---|---|
| blind-descent-update-roadmap | blind descent update / early access roadmap | 词库 `update` 轮 0 条；EA 上线后才有真实补丁可写 |
| blind-descent-map-underground | blind descent map | `map` 轮只返回 8 条且均为泛问；无官方地图/区域名可核验，先不建 |
| blind-descent-weapons-combat | blind descent best weapons | 词库 0 条 + 官方只给武器类别（bow/spear/axe/rifle）无数值，写不出可核验的排行 |
| blind-descent-characters | blind descent characters | 官方只确认 EA 一名主角（Daniel Harris，来自第三方试玩），角色清单未公布 |

## 4. 检查记录

- P0 行 = 8（≥5 ✅），每行都有目标搜索词与搜索意图 ✅
- 页型分布：faq 3 / beginner 1 / boss-or-mechanic 4 / codes 0 / tier-list 0（codes 与 tier-list 均因「无对应搜索需求」不建，符合 §2.3「候选池不是必建清单」）
- 每行素材源 ≥2 且 ≥1 官方 ✅（明细见 `keyword-results/blinddescent-sources.md`）
- 冲突处理：引擎（UE4 vs UE5）、平台（Win10/仅 Steam vs Win11/三平台）以 2026-10-12 新闻稿 + 当前 Steam 页为准，冲突已记录
