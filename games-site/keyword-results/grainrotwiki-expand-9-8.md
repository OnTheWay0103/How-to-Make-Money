# GRAIN ROT 内容扩充记录 — 9/8

> 模式: expand-feedback | 站点: grainrotwiki | 游戏: Grain Rot (Beck & Branch Games / Neem Interactive, Steam app 4450620, 1.0 = 2026-08-07)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）| 日期: 2026-09-08
> 结果: ⏭️ SKIP（9/8 触发点复检：官方/可溯源 v1.08/v1.09+ 仍无 ≥2 独立来源；新候选 compass-as-fuse 技巧单源链条不可溯源 → 依 9/6、9/7 约定三连 SKIP）

## 一、9/8 触发点复检：v1.08/v1.09（或更新）现在可溯源吗？

**结论：否。** 逐渠道核验（2026-09-08）：

| 渠道 | 结果 |
|------|------|
| [vgspoilers — GRAIN ROT Patches](https://www.vgspoilers.com/game/grain-rot/patches)（WebFetch 直读） | 页面逐条列出 1.01（8/8）→ **1.07（8/12）**，最新 1.07；**无 1.08/1.09/9 月条目**。 |
| SteamDB / 检索 | "GRAIN ROT steam update v1.08 v1.09 changelog" → 0 结果；steamdb.info 无 access token（partial）。 |
| Steam 官方公告 | allnews 直抓受限；9/7–9/8 定向检索 "Grain Rot news September 7 OR 8 2026" → 0 条 9 月条目被索引；最新仍 "GRAIN ROT IS OUT NOW"（8/7 launch）+ launch 期 eventcomments。 |
| 编辑/媒体 | 检索仅返回 8/7–8/26 launch 窗口评测（MKAU/technetbooks/cinelinx/crimenetgazette/VaporLens 等），零 9 月独立覆盖。 |
| pc6.com 转载 | 仍为唯一标注 v1.09 的来源且无变更内容、疑似破解/转载 → 不可溯源，判定同 9/6、9/7。 |

→ 触发条件（官方可溯源 v1.08/v1.09+ 更新公告 ≥2 独立来源）**仍未达成**。按 9/6 约定应再次 SKIP。

## 二、9/8 新检索角度：有无新的非补丁缺口？

### A. 9/8 重点复核候选：compass-as-fuse-substitute（电梯提取技巧）
采集到 4 个编辑来源提及「Compass 可当 fuse box 替代品启动电梯提取」（2UpSkill beginner / finalboss / prodigygamers / allthings.how），且站内现有 29 slug **0 覆盖 compass/fuse**（grep 全站确认），extraction-guide 明言电梯机制「call timers/fuel」未官方文档化 → 乍看是真缺口。

**否决**（逐条）：
1. **来源独立性存疑**：定向检索 `"grain rot" compass item what does compass do` → **0 结果**；`Grain Rot compass fuse box elevator` 命中的 2UpSkill/finalboss/prodigygamers 属同内容链（互相转写、措辞一致），并非 ≥3 独立来源。玩家真实 Steam 串（Symbols meaning，573793023877537271）只讲 fuse modifier 需找备用 fuse、通常地图 2 颗 fuse，**未提 compass**。
2. **站内编辑准则冲突**：weapons-tools-guide / best-vessels-guide 明言「无任何已证实 construct 名称，在线名单视为杜撰」；本 wiki 拒绝把未验证专有名词（compass/fuse box 的具体功能细节）当作机制事实书写。9/6 对「工具耐久（broom/hammer/nail gun）」的否决同因：写细则=重新引入未验证专有名词。
3. **单源链条不可溯源**：compass-as-fuse 仅出现于同一内容链，无官方/独立第二源；[Unconfirmed] 标注也无法挽救「机制是否存在」这一层不确定性 → 违反「不编造」与「MUST NOT 无素材硬写」。

### B. 9/8 其余反馈簇（逐条对照现有 29 slug）
- **Steam 负面评测（8/26，12.9h）**：单体「feels like early access / story ends unfinished / 蓝图有限 / 武器升级机制 underdeveloped」→ 1 条单体聚合观感；full-release-guide / game-mechanics-systems-guide / events-timed-content-guide 已按「what's confirmed vs 未证实」框架覆盖同类 → 非新缺口。
- **无公开匹配/服务器浏览器** → multiplayer-matchmaking-guide（+ player-count-guide）已覆盖。
- **Poor Optimization / stuttering** → performance-lag-fix-guide（9/4）已覆盖。
- **工具耐久低/broom 易碎/维护像 chore**（MKAU/technetbooks/cinelinx 8/7–8/10 发售窗 + 8/26 评测）→ 9/6 已否决：非新反馈 + weapons-tools 编辑准则冲突 + 建议已散在 crafting/tips/survival/weapons 各页 → 自噬。9/8 无新事实改变该判定。
- **房主权限/griefing**（VaporLens + launch 评论：randoms 能拆基地、host 无法锁建造权限）→ 9/7 已记录：功能请求、无机制事实；co-op-guide/outpost-upgrade-guide 已覆盖共享 Outpost 经济面。
- **放置家具减房间 XP 的 building bug**（technetbooks 单体）→ 定向检索 0 独立佐证 → 单源、<3 独立来源，不可写。

## 三、结论

grainrotwiki 现有 29 篇指南。9/8 触发点复检后 v1.08/v1.09+ 仍不可溯源（vgspoilers 止 1.07/8-12，SteamDB 检索 0，官方公告无 9 月条目，媒体零 9 月覆盖，pc6 单一无内容转载）；9/8 重点复核的 compass-as-fuse 新候选经查为同内容链单源、与站内不编造专名准则冲突而否决；其余反馈簇全部落入已覆盖/功能请求/发售窗老主题。按扩充计划「素材不足 → 跳过，宁缺毋滥」与「内容自噬红线」，本轮 **SKIP**（9/6 起三连 SKIP，站内 9/5 有产出 survive-enemy-chase-guide，非长期断供），不改任何 guide / home-content、不部署。

下次触发条件（不变）：官方/独立编辑出现可溯源的 v1.08/v1.09+（或更新）补丁说明（≥2 独立来源描述实际变更）→ 写 patch-notes/具体机制变更指南；或 compass/fuse 机制出现 ≥2 独立非内容链来源（如官方公告/玩家实测录像/独立攻略站分源）→ 可评估写「Extraction Elevator 机制专篇」；或出现新的 ≥3 独立来源且未被 29 篇覆盖的高频玩家问题。

## 四、自检
- 未改 grainrotwiki 任何文件 ✅；未串站 ✅；未编造 ✅；采集约 12 次搜索/抓取 < 20 上限 ✅
