# anomalypresidentwiki 扩充报告 — 2026-10-23

## 结论

- **状态**：DONE
- **新增 slug**：`pufferfish-flombie-counter-guide`
- **标题**：How to Beat Pufferfish and Flombie in Anomaly President — Posture, Pressure and Priority
- **正文词数**：1,431（不含表格；表格 88 词；总正文 1,519）
- **独立来源**：3（官方 Steam 公告 2 条 + 社区补丁镜像 1 条）
- **Build**：PASS
- **部署**：PASS
- **线上验证**：HTTP 200，标题与关键词命中

## 选题依据

选择 **v0.5.1.21 新增敌人 Pufferfish / Flombie**，原因是站内 `enemies-guide` 写于该补丁之前，全文没有这两个敌人；`patch-notes-roadmap-guide` 的补丁表止于 2026-08-20 的 v0.5.0.18，未覆盖 9 月更新。该题是「官方明说有、站内整块没写」的系统清单型缺口，不是抱怨驱动硬凑。

### 来源

1. **Official — Steam News**
   - 标题：Anomaly President - New Enemies Are Here! - v.0.5.1.21 Update Now Live!
   - URL：https://store.steampowered.com/news/app/3156330/view/679635225181945883
   - 日期：2026-09（公告标题标注 v.0.5.1.21）
   - 采用事实：Pufferfish 使用缓慢但强力的远程攻击；Posture 归零后自毁；Flombie 为新增敌人；敌人发现玩家后反应更可靠，失去视野后仍继续巡逻。

2. **Community — VGSpоilers Patch 0.5.1**
   - 标题：Anomaly President Patch 0.5.1
   - URL：https://www.vgspoilers.com/game/anomaly-president/patches/0.5.1
   - 日期：2026-09-03
   - 采用事实：确认 Pufferfish 与 Flombie 实装；记录敌人侦测与巡逻行为改动。该页未给出 Pufferfish/Flombie 的详细招式，本文只把它作为交叉核对。

3. **Official — Steam News v0.5.2.02**
   - 标题：New Weapon Update — Chakram
   - URL：https://store.steampowered.com/news/app/3156330/view/701027957162901739
   - 日期：2026-09-16
   - 采用事实：Chakram 新增，可从 Permanent Upgrades 菜单解锁。用于「配装建议」段落，并明确 Chakram 对 Posture 的加成未被官方说明。

## 查重结论

现有 16 篇攻略中，无 `pufferfish`、`flombie` 或同名主题：

- `enemies-guide`：只覆盖帮派/狂热者、ranged snake、shielded enemies、Viking/Gentleman 等旧内容；未提 Pufferfish/Flombie。
- `combat-tips-guide`：讲 parry、dodge、stamina break、finisher，是通用战斗节奏，不是新敌人对策。
- `night-combat`：讲 run 结构与元素，不涉及这两个敌人。
- `patch-notes-roadmap-guide`：补丁表止于 v0.5.0.18，未覆盖 v0.5.1.21。

新页的独立搜索意图是「Pufferfish 怎么打 / Flombie 怎么处理 / Posture 自毁机制」，与上述页面不构成自噬。标题、slug、H1 均唯一。

## 内容与事实边界

- 正文结构：更新确认表 → Pufferfish Posture 机制 → Flombie 干扰处理 → 混合波次优先级 → 配装建议 → 未确认项 → FAQ。
- 明确标注为 **[Unconfirmed]** 的内容：Posture 具体数值、每次攻击的 Posture 伤害、Posture 是否回复、自毁爆炸是否伤害玩家、Flombie 减速幅度/爆发间隔/刷新率、两敌是否出现在所有区域。
- 未编造 Boss 名、道具名、伤害数值或玩家引语。
- 英文站内容无中文标记残留（CJK 字符检查为 0）。

## 构建

```text
pnpm install --prefer-offline  → OK
pnpm build                     → PASS
Next.js 16.3.4 (Turbopack)
✓ Compiled successfully
✓ Generating static pages (30/30)
Route: ● /guides/pufferfish-flombie-counter-guide
```

无 TypeScript 错误、无构建警告阻断。

## 部署

- 最终部署 URL：https://anomalypresidentwiki-j3wi99oa1-zhaoq0103s-projects.vercel.app
- 生产 alias：https://anomalypresidentwiki.vercel.app
- 部署脚本：`./deploy-wiki-site.sh anomalypresidentwiki` → PASS

> 首次部署后修正了一处英文语法（a unusual → an unusual），已重新 build + deploy；上表为最终部署。

## 线上验证

```text
GET https://anomalypresidentwiki.vercel.app/guides/pufferfish-flombie-counter-guide
HTTP 200
size 59,735 bytes
title: How to Beat Pufferfish and Flombie in Anomaly President — Posture, Pressure and Priority · Anomaly President Wiki
```

页面文本命中：

- `How to Beat Pufferfish and Flombie` → true
- `Pufferfish` → true
- `Flombie` → true
- `Posture` → true
- `an unusual answer` → true（确认最终部署包含修正）

## 后续建议

- 等 v0.5.3.12「The Big Bribe」有可读官方全文后，另开一篇专门写该更新，不并入本篇。
- 若后续补丁调整 Posture 或 Flombie，优先更新本篇的 [Unconfirmed] 段，并在 `patch-notes-roadmap-guide` 补版本行。
