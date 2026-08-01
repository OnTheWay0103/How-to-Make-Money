---
name: discover-games
description: 自主搜索最新热门游戏，按 SOP 筛选评估，输出候选清单。不建站，只做游戏发现。
---

# Discover Games — 自主游戏发现

> 用法：`/discover-games`（无参数）

## Step 1: 多源并行搜索

```
WebSearch "Steam most wishlisted upcoming games 2026"
WebSearch "SteamDB trending new releases this week"
WebSearch "new gacha mobile games global English release 2026"
WebSearch "Roblox most popular games 2026 concurrent"
```

## Step 2: 自动筛选

```
跳过：AAA / 纯竞技 / 超休闲 / 视觉小说 / 已停服
跳过：发售超过 6 个月的老游戏（无重大更新时）
标记：RPG / 动作 / 生存 / 合作 / 恐怖 / 提取 / Roguelite
优先：最近 6 个月内发售 / 即将发售
```

## Step 3: Wiki 检查（Top 5 候选）

```
WebSearch "{gameName} wiki fandom guide"
```

## Step 4: 输出报告

保存到 `.agent/candidate-pool.md`（覆盖候选清单部分）和 `keyword-results/discovery-{YYYY-MM-DD}.md`（详细报告）。

**候选池格式** (`.agent/candidate-pool.md`):

```
| # | 游戏 | 类型 | 评分 | 上线日 | Wiki | 发现日 | 状态 |
|---|------|------|:--:|------|:--:|------|------|
| 1 | Game A | RPG | 17 | 8/15 | ❌无 | 7/31 | 待评估 |
| 2 | Game B | Survival | 15 | 已上线 | ❌无 | 7/31 | 待评估 |
```

**详细报告格式** (`keyword-results/discovery-{date}.md`):

```
# 游戏发现报告 — {日期}

## 候选清单

| # | 游戏 | 类型 | 发售日 | 热度 | Wiki | 预估分 |
|---|------|------|--------|------|------|--------|
| 1 | ... | ... | ... | ... | ... | ... |

## 各候选详细分析

### 🥇 Game A
- 开发/上线/类型
- 搜索需求估计
- 内容可扩展性
- Wiki 覆盖
- 建站建议

（重复每个候选）
```
