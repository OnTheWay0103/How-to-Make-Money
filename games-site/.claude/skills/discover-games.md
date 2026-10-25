---
name: discover-games
description: 自主搜索最新热门游戏，过硬筛后带证据写入候选池（状态 待分析）。不评分、不查 wiki、不采词、不建站。
---

# Discover Games — 自主游戏发现

> 用法：`/discover-games`（无参数）
> 岗位卡 / Profile：`docs/agents/11`、`docs/agents/12`
> **本 skill 只做「发现 + 硬筛 + 入池」；判断值不值得建是候选分析员（22/23）的活。**

## Step 1: 多源并行搜索

```
WebSearch "Steam most wishlisted upcoming games 2026"
WebSearch "SteamDB trending new releases this week"
WebSearch "new gacha mobile games global English release 2026"
WebSearch "Roblox most popular games 2026 concurrent"
```

至少 4 个不同来源；不要只搜一次就下结论。

## Step 2: 硬筛

```
跳过：AAA / 纯竞技 / 超休闲 / 视觉小说 / 已停服
跳过：发售超过 6 个月且无重大更新（1.0 / 大版本）
标记：RPG / 动作 / 生存 / 合作 / 恐怖 / 提取 / Roguelite / 模拟经营
优先：最近 6 个月内发售或即将发售、高 wishlist
```

**不做**：不查 wiki 竞争、不给四维评分、不采关键词。

## Step 3: 记录证据

每条候选必带：
- Steam 商店页 URL（必填）
- 发售 / 更新日期
- wishlist / 评测数 / CCU（有就记，查不到写 `[待确认]`，**不许估算**）

## Step 4: 入池 + 报告

候选池：`keyword-results/CANDIDATE-POOL.md`（13 列，**只填 6 列**）

```
| # | 游戏 | 类型 | 需求 | 竞争 | 内容 | 生命周期 | 总分 | 上线日 | Wiki | 发现日 | 结论 | 证据 |
|---|------|------|:--:|:--:|:--:|:--:|:--:|------|:--:|------|------|------|
| 1 | Game A | RPG | — | — | — | — | — | 8/15 | — | 10/25 | 待分析 | steam:... |
```

`需求 / 竞争 / 内容 / 生命周期 / 总分 / Wiki` 留给候选分析员填。

详细报告：`keyword-results/discovery-{YYYY-MM-DD}.md`

```
# 游戏发现报告 — {日期}

## 搜索日志
（逐源列查询 + URL）

## 新候选
### Game A
- 开发 / 发售 / 类型 / 平台
- 证据链接（Steam 商店页）
- 硬筛结论（为什么留下）
- [待确认] 项
```

**报告里不写四维分数、不写建站建议**（那是 `selection-{date}.md` 的内容）。
