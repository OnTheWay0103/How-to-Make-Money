# GRAIN ROT 内容扩充记录 — 9/9

> 模式: expand-feedback | 站点: grainrotwiki | 游戏: Grain Rot (Beck & Branch Games / Neem Interactive, Steam app 4450620, demo app 4731790, 1.0 = 2026-08-07)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）| 日期: 2026-09-09
> 结果: ⏭️ SKIP（4 连）。但 **v1.08/v1.09 溯源状态显著升级**：今日从 player.gg 找到带实际变更内容的官方 Steam 补丁镜像（v1.09 compass 重校准 / Vibe Modulator 修复；v1.08 Boing vessel / 7 constructs / small vessels 携带），并有 ~8/28 中文 Steam 公告片段佐证 v1.09 → 从「完全不可溯源」变为「可溯源但存在镜像归因冲突 + 无日期 + 零独立编辑/玩家佐证」→ 依宁缺毋滥 + 不编造红线仍 SKIP，P0 建议交主 Agent 人工核验。

## 一、9/9 触发点复检：v1.08/v1.09（或更新）现在可溯源吗？

**较 9/8 有实质进展，但仍未达「≥2 干净独立来源」可写作门槛。** 逐渠道核验（2026-09-09）：

| 渠道 | 结果 |
|------|------|
| **player.gg 游戏页（新发现）** | https://player.gg/explore/games/400575-grain-rot 聚合官方 "Steam patch notes"，逐条列出 **1.09 → 1.08 → [What's Next for GRAIN ROT 公告] → 1.07 → 1.06 → 1.05 → 1.04**（无日期、每条截断以 "…"）。内容：**1.09** compass 可重校准指向 Deep Layer grinder + 修复 Vibe Modulator 错误 scrap 值 + 改善 Vibe Modulator 性能；**1.08** 新增 small vessel **"Boing"** + 7 个可建造 constructs（3 common/1 rare/1 epic/2 legendary）+ small Vessels 现可携带 1 件物品。1.06 Quill 巡逻着火修复等亦在此页。 |
| **中文 Steam 社区公告片段（~8/28，佐证 v1.09）** | 搜索引擎摘录一 Steam 公告 feed 页（标题「8 月 28 日」，中文）含 Grain Rot 内容：与 player.gg 的 v1.09 条目一致（compass 指向 Deep Layer grinder 重校准、Vibe Modulator scrap/性能），并追加：休息回复的 HP/体力改为百分比制、修复用椅子穿墙 clipping、修复悬空未受控 construct 上保存的物品。⚠️ 该片段 URL 归因不可靠（appgroup 显示为其他游戏），只能当作「官方 Steam 公告确实存在且 ~8/28 发布」的弱佐证，无法作为干净可引用 URL。 |
| **vgspoilers — GRAIN ROT Patches**（WebFetch 直读，2026-09-09） | 版本列表（有日期、无 changelog）：1.07=8/12、1.06=8/11、1.05=8/10、1.04=8/10、1.03=8/9、1.02=8/9、1.01=8/8。**最新仍 1.07，无 1.08/1.09。** 单独页 1.07 changelog：新增更多 host 多人设置 + 支持密码保护服务器 + Deep Layers 新帽子。 |
| **SteamDB** | 主 app 4450620 patchnotes 需 token（partial）；demo app 4731790 patchnotes 页为导航壳，无内容。 |
| **Steam 官方公告（allnews）** | 直抓 ECONNREFUSED；RSS feed WebFetch 仅返导航壳。9/1–9/9 检索 "Grain Rot news September" → 0 条 9 月条目被索引。 |
| **编辑/媒体/Reddit** | 9 月独立编辑覆盖仍 0（famitsu/hone.gg/notebookcheck 均为 8 月 launch 窗）；Reddit 无活跃 sub。 |

→ **v1.08/v1.09 已从「不可溯源」升级为「有内容镜像 + 一弱佐证，但不可完全采信」。**

### ⚠️ player.gg 归因冲突（否决用它单源成篇的关键）
player.gg 在 **1.07** 条目写「Public servers are now available to join via an in-game browser」；但 **vgspoilers 1.07（8/12）** 只列 host 设置/密码服务器/帽子，**不含 server browser**；站内 multiplayer-matchmaking-guide（9/3）与玩家真实反馈（VaporLens "No public matchmaking available" 仍列 top negatives）也均指向「无公开服务器浏览器」。→ player.gg 的逐版本归因**存在至少一处与多源冲突**，可信度不足；不能以它为唯一依据宣布 v1.08/v1.09 变更。

## 二、候选选题（对照现有 29 slug 全查）

| 候选 | 来源/证据 | 否决理由 |
|------|------|------|
| **Grain Rot Patch Notes / Update History（v1.0→1.09）新指南** | vgspoilers 1.01–1.07（有日期）+ player.gg 1.04–1.09（内容、无日期）+ 中文片段弱佐证 v1.09 | 站内确实 0 覆盖 patch-notes（真缺口），但：1) player.gg 归因冲突（见上）使其不可作唯一事实源；2) v1.08 仅 player.gg 单链；3) v1.08/1.09 **无日期**；4) 官方公告直抓不可达、零独立编辑/玩家佐证 → 写即「半截 changelog + 无日期 + 单源」= 编造/误导风险。按宁缺毋滥 SKIP；待官方公告人工核验或 ≥2 干净独立来源后优先写。 |
| **compass 机制专篇（含 v1.09 重校准）** | player.gg + 中文片段（v1.09 compass→Deep Layer grinder） | compass-as-fuse 候选 9/8 已否决（同内容链单源 + 编辑准则冲突）。今日 v1.09 官方内容确证 compass 有「重校准指向 grinder」功能，但细节截断、无上下文、无玩家实测；单独成篇内容单薄 → 不够。P0：若官方确认，可评估校准 weapons-tools/或写 compass 机制专篇。 |
| **v1.08 Boing vessel / 7 constructs / small-vessel carry** | 仅 player.gg 单源 | 单内容链、无日期、无第二源 → 不可写（与 9/8 compass-as-fuse 同因）。 |
| **v1.07 public server browser（player.gg 主张）** | 仅 player.gg | 与 vgspoilers 1.07 + 站内 multiplayer-matchmaking-guide + 玩家反馈冲突 → **不采信**，转 P0 人工核验。 |
| 无公开匹配/服务器浏览器 | ≥4（VaporLens + Steam 串 + 编辑） | multiplayer-matchmaking-guide（9/3）已覆盖（基于 1.04 状态）→ 已覆盖；**若 v1.07+ 真加了 public browser，则此 guide 需 P0 校准**。 |
| Griefing/房主锁建造权限 | VaporLens + launch 评论 | 功能请求、无机制事实；co-op/outpost-upgrade 已覆盖共享 Outpost 经济面 → 非缺口。 |
| Poor optimization / stuttering | VaporLens 28.1% churn risk | performance-lag-fix-guide（9/4）已覆盖 → 非缺口。 |
| Enemies overpowered / 平衡 | VaporLens top negative | all-enemies-guide / survival-tips / endgame-survival 已覆盖战斗原则 → 非缺口。 |
| 单人无聊 / 缺 lobbylist | Steam launch 串（"lvl 20…borig fast as a solo"） | solo-guide + co-op-guide 覆盖；本质是 matchmaking 功能请求的衍生 → 非独立可写主题。 |
| "1/3 finished not EA" / 内容量 | 单条评测 | full-release-guide / game-mechanics 已按 confirmed-vs-unconfirmed 框架覆盖 → 非新缺口。 |

## 三、结论

grainrotwiki 现有 **29 篇**指南。9/9 复检结论：**v1.08/v1.09 现在有实际变更内容可溯**（player.gg 官方补丁镜像 + ~8/28 中文 Steam 公告片段弱佐证），较 9/6–9/8「完全不可溯源」显著升级；但 player.gg 自身存在与 vgspoilers/站内/玩家反馈冲突的归因错误（1.07 声称 public server browser），且 v1.08 单链、v1.08/1.09 无日期、零独立编辑/玩家佐证、官方公告 hub 直抓不可达 → **按「宁缺毋滥 + MUST NOT 编造 + 单源不可当事实」仍 SKIP（4 连）**。站内 9/5 有产出 survive-enemy-chase-guide，非长期断供。不改任何 guide / home-content、不部署。

**P0 建议（交主 Agent，优先级最高）**：**人工核验 Grain Rot 官方 Steam 公告 hub（store.steampowered.com/app/4450620 → 公告 / Steam 客户端内可见）**，确认三件事：
1. **v1.07 是否实装「public server browser / 公开服务器列表」**——若是，`grainrotwiki/content/guides/multiplayer-matchmaking-guide.md`（updated 9/3，正文反复声明「no public matchmaking or server browser has shipped」）已严重滞后，需 P0 校准；这也直接影响 VaporLens/玩家差评簇的时效性。
2. **v1.08 / v1.09 的准确发布日期与完整 changelog**（player.gg 截断；重点：Boing vessel、7 constructs、small-vessel 携带、compass 重校准、休息百分比回复）。
3. 全站 guide 的 `version: "1.0"` 版本戳是否需要统一后移。
人工核验通过后（官方公告为最高可信源），建议下一扩充优先写 **patch-notes / update-history 页**（站内真缺口，slug 建议 `patch-notes-guide` 或并入首页，具体由主 Agent 定）。

## 四、自检
- 未改 grainrotwiki 任何文件 ✅；未串站 ✅；未编造 ✅；采集约 13 次搜索/抓取 < 20 上限 ✅
- 本轮发现的 v1.08/1.09 与 server-browser 线索全部如实记录，未放大为已确认事实。
