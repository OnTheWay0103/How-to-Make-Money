# GRAIN ROT 内容扩充记录 — 9/11

> 模式: expand-feedback | 站点: grainrotwiki | 游戏: Grain Rot (Beck & Branch Games / Neem Interactive, Steam app 4450620, demo app 4731790, 1.0 = 2026-08-07)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）| 日期: 2026-09-11
> 结果: ✅ **EXPANDED** — 新增 `patch-notes-guide`（站内 0 覆盖的真缺口）+ P0 校准 4 篇 + 站级 IP 归属修复 2 处。**4 连 SKIP 结束。**

---

## 一、触发点：官方 Steam 公告 hub 首次可直连 —— 4 连 SKIP 的根因解除

前四轮（9/6–9/9）SKIP 的唯一触发条件是「官方可溯源的 v1.08/v1.09+ 补丁说明且 ≥2 独立来源」。**本轮该条件满足，且前几轮的归因冲突判定被证伪。**

### 1. 官方 hub 直连成功

`https://store.steampowered.com/news/app/4450620` 本轮返回 **200**（9/9 记录为 ECONNREFUSED）。页面内嵌完整 `announcement_body` JSON（HTML 实体转义），**Patch 1.01–1.09 全文 + `posttime` Unix 时间戳全部取到**。这是最高可信源，直接终结了四轮悬而未决的溯源问题。

| 版本 | 官方发布日期 | 要点 |
|------|-------------|------|
| 1.01 | 2026-08-08 | Deep Layers 金币/保险丝拾取修复；light invalidation 性能修复 |
| 1.02 | 2026-08-09 | 新玩家欢迎语；电梯上方 hatch；boss mesh 泄漏到 Outpost；客户端看不见滚石陷阱 |
| 1.03 | 2026-08-09 | 客户端打不开地堡门；存档加载进黑虚空；键位不保存 |
| 1.04 | 2026-08-10 | lobby privacy + 最大人数设置；view lobby 菜单（麦克风音量 / kick / ban） |
| 1.05 | 2026-08-10 | lobby privacy=friends 时无法加入好友；本地化缺失 |
| 1.06 | 2026-08-11 | Quill 巡逻不再着火；legendary gumball 无奖励；连接安全加固 |
| **1.07** | **2026-08-12** | **「Public servers are now available to join via an in-game browser.」** + 更多 host 设置 + 密码服务器 + 服务器内任何人的好友可加入 + Deep Layers 新帽子 |
| 1.08 | 2026-08-26 | 新 small Vessel **Boing**；**7 个新 constructs**（3 common/1 rare/1 epic/2 legendary）；small Vessels 可携 1 物；grief protection 改 per-player 设置；封禁跨会话持久；密码服务器搜索过滤 + 锁图标；Wailer 攻击模式调整 + 新增近战；dungeon cosmetic 生成 2→1；大量碰撞/网络修复 |
| 1.09 | 2026-08-28 | **compass 可重校准指向 Deep Layer grinder**；Vibe Modulator scrap 值修复 + VFX 性能；construct 上休息回复 HP/体力改百分比制；椅子穿墙修复；未受控角色身上的物品悬空修复 |

另有 **2026-08-12「What's Next for GRAIN ROT」官方 roadmap**（同 hub）：
- 优先级：**正在测试 public lobby browser** + 改进好友加入方式（friends-only / invite-only 保留）
- 下个月内：一批新 constructs + 一个新 vessel（→ 已兑现为 1.08）
- **9 月：The Deep Layers Update** —— 1 个新 biome + 若干新敌人（**截至 9/11 未上线**）
- **10 月：The Halloween Update** —— 开放 **Outpost 第三层** + 新任务线 + 季节视觉
- 团队为两人（Miche & Nikko），明确表示「按月给目标、不给固定日期」

### 2. ⚠️ 前四轮的「player.gg 归因冲突」是误判 —— 真相是 vgspoilers 漏项

9/9 记录判定 player.gg「1.07 实装 public server browser」与 vgspoilers、站内 multiplayer-matchmaking-guide、VaporLens、玩家反馈**全部冲突**，因而拒绝采信。

**官方源证明 player.gg 是对的。** vgspoilers 的 1.07 条目**不完整**（只列 host 设置 / 密码服务器 / 帽子，漏掉 server browser 这一行，且至今仍止于 1.07、无 1.08/1.09）。四轮 SKIP 把「vgspoilers 条目漏项」误读成了「player.gg 归因错误」。

**教训（建议写入 04/06 Profile）**：*聚合站条目缺失 ≠ 与聚合站冲突*。判定「归因冲突」前 MUST 先确认对照源本身完整（vgspoilers 无 1.08/1.09 已是完整性告警信号，当时未上升为否决其权威性的依据）。

### 3. 独立来源计数（满足 ≥3）

| 通道 | 覆盖 | 与官方源一致性 |
|------|------|--------------|
| **官方 Steam 公告 hub** | 1.01–1.09 全文 + 日期 + roadmap | 主源 |
| **player.gg** 游戏页 | 1.04–1.09 逐版本镜像 | 1.07/1.08/1.09 **逐条吻合** |
| **vgspoilers** patches 页 | 1.01–1.07 日期 | 日期全部吻合（1.07 条目内容不全） |
| **VaporLens** | launch 窗评测趋势 | 时间戳 8/8，属 pre-1.07 快照 |
| SteamDB | partial（需 token） | 未用于成篇 |

→ **触发条件解除**：官方可溯源 + ≥3 独立通道一致。

---

## 二、反馈采集（2026-09-11 实采，约 14 次检索/抓取）

| 渠道 | 结果 |
|------|------|
| **官方 Steam 公告 hub** | ✅ 直连 200，1.01–1.09 全文 + roadmap（决定性来源） |
| **Steam 评测（负面优先）** | ⚠️ steamcommunity.com 直抓 `000`（网络不可达），改由检索索引取得：评价「Very Positive」87–89%，负面集中在「像 EA 却标 full release」/ 优化 / 敌人过强 / **无公开匹配**（后者为 launch 窗反馈） |
| **Steam 讨论区 / launch 串** | ⚠️ 直抓不可达；经索引取回 launch 串原帖（invite-only 抱怨 + server browser 期待），保留原链接 |
| **Reddit r/GRAINROT** | ❌ 两次采集失败（`agent-reach` OpenCLI 后端返回 HTML 非 JSON；直连 403）。官方公告中确认该 sub 存在。**结论低置信，未用于支撑任何事实** |
| **媒体 / 编辑** | ⚠️ 9 月独立编辑覆盖仍 0（famitsu/hone.gg/notebookcheck/2upskill 均 8 月 launch 窗，属 pre-1.07） |
| **player.gg** | ✅ 1.04–1.09 逐版本镜像，与官方逐条吻合 |
| **vgspoilers** | ✅ 直读：仍止 1.07（8/12），无 1.08/1.09 —— 判定为镜像滞后，非事实冲突 |
| **VaporLens** | ✅ 官方源之外的评测趋势聚合；数据戳 2026-08-08（**pre-1.07**，故其「No public matchmaking available」已过期） |
| **SteamDB** | ⚠️ 403 / partial，未采用 |

> 采集声明：Reddit 采集使用 `agent-reach`，platform Reddit via backend OpenCLI，两次均失败（返回非 JSON），已如实记为不可用，未编造任何 Reddit 内容。

## 三、查重：现有 30 slug 全比对

现有 29 篇（本轮前）：all-biomes / all-enemies / beginner / best-vessels / co-op / controller / crafting-resources / demo / endgame-survival / events-timed-content / extraction / full-release / game-mechanics-systems / hard-mode / multiplayer-matchmaking / outpost-upgrade / performance-lag-fix / player-count / price-editions / release-date-faq / rot-debuff / solo / stealth-sound / survival-tips / survive-enemy-chase / system-requirements / tips-and-tricks / weapons-tools / weather-system。

**patch notes / update history = 0 覆盖，确认真缺口。**（`full-release-guide` 只写 1.0 首发内容；`release-date-faq` 只写发售/平台/价格；两者均无逐版本更新史。）

## 四、选题：命中

| 候选 | 判定 | 理由 |
|------|------|------|
| **Patch Notes & Update History（1.01–1.09 + roadmap）** | ✅ **选中** | ① 站内 0 覆盖真缺口；② 官方源全文可溯 + ≥3 独立通道；③ 9 个版本 + 日期 + 完整 changelog + 官方 roadmap，能写成 1500 词有实质内容的文章；④ 顺带解释「为什么你看到的攻略过期了」——正是本站自身此前犯的错 |
| v1.07 public server browser 专篇 | ⛔ 否决（并入校准） | 与既有 `multiplayer-matchmaking-guide` 同题，独立成篇 = 自噬。改为**校准该篇**（其前提已被官方源证伪） |
| compass 机制专篇（1.09 重校准） | ⛔ 否决 | 官方仅一行「compass can now be recalibrated to point towards the Deep Layer grinder」，无机制细节、无实测 → 写细则 = 编造。已在 patch-notes 内如实呈现一行 |
| Boing / 7 constructs 专篇 | ⛔ 否决 | 官方只给数量与稀有度配比，**无名称、无效果数据** → 单篇无法成立，写细则 = 编造。已在 patch-notes 内呈现 |
| 9 月 Deep Layers Update 专篇 | ⛔ 否决（并入 roadmap 段） | 目前只有 2026-08-12 规划（1 biome + 若干敌人），无实装、无日期、无细节 → 独立成篇即单源转写。已在 patch-notes 以「计划非日期」如实标注 |
| 优化 / 敌人过强 / 复活 / griefing | ⛔ 否决 | 分别落入 performance-lag-fix / all-enemies·survival / co-op 既有覆盖 |
| 无公开匹配 / 「join randoms」 | ⛔ 否决 | 已被 1.07 解决，属**过期反馈**；正确动作是校准既有篇，非新写 |

## 五、本轮改动（全部在 grainrotwiki/ 内）

**新增 1 篇**
- `content/guides/patch-notes-guide.md` — 1501 词，问题导向（"What changed / what's coming"），frontmatter 与既有一致，sources 三层（Official ×2 / Community / Editorial）保留来源链接；9 版本逐条对官方源核验，0 编造；未验证项（server browser 菜单标签、`Tab+Shift` 键位）标 `[Unconfirmed]`

**P0 校准 4 篇（官方源证伪后的事实修正，按 04 Profile「一次改齐」）**
- `multiplayer-matchmaking-guide.md` — 全文重写：核心前提「no public matchmaking or server browser has shipped」→ 1.07 已实装；保留 launch 窗社区引语但**明确标注为 pre-1.07 语境**；补 1.07/1.08 的浏览器/密码/锁图标/持久封禁/per-player grief protection
- `player-count-guide.md` — 3 处：表格「Public matchmaking」❓Unconfirmed → ✅Confirmed；正文「public matchmaking has not been announced」；FAQ「Does Grain Rot have matchmaking?」
- `release-date-faq.md` — FAQ「Is there matchmaking?」Unconfirmed → 确认
- `performance-lag-fix-guide.md` — related 链接描述「invite-only co-op」→「public servers, invites」

**站级元数据（qa-deep-partB §4.1，方案 (a)）**
- `components/Footer.tsx:24` + `app/terms/page.tsx:26` — `Vaulted Sky Games` → `Beck & Branch Games and Neem Interactive`（与 `lib/schema.ts:67/71` JSON-LD 既有正确值对齐）

**导航**
- `content/home-content.md` — Quick Navigation 表新增 patch-notes-guide 一行

## 六、P0 遗留与建议

1. **全站 `version: "1.0"` 版本戳** — 判定**不需后移**：该字段语义为「攻略内容版本」而非游戏版本，其余 29 篇一致，改动造成语义漂移。**建议主 Agent 复核该字段定义**（若确为游戏版本语义，则需另立规则）。
2. **vgspoilers 滞后** — 仍止 1.07、无 1.08/1.09。建议后续采集将「镜像缺版」优先解读为镜像滞后，而非与官方冲突（见 §一.2 教训）。
3. **Reddit 采集通路** — `agent-reach` OpenCLI 的 reddit 子命令连续返回非 JSON（`SyntaxError: Unexpected token '<'`），直连 403。本站反馈分析因此缺 Reddit 维度。**建议交主 Agent 排查 OpenCLI reddit 后端**。
4. **9 月 Deep Layers Update 观察点** — 官方规划 9 月上线，截至 9/11 未实装。下次复核时优先看官方 hub 是否出现新 event（`rtime32` > 1787911681）；若上线 → 写 Deep Layers 深度指南（1 新 biome + 新敌人，届时会有 ≥2 独立来源）。

## 七、自检
- 改动全部落在 grainrotwiki/ 内 ✅；未串站 ✅；未编造 ✅；未 commit/push ✅
- 采集约 14 次检索/抓取（< 25 上限）✅
- QA quick 已出（`.agent/qa-expand-grainrot-9-11.md`）✅
