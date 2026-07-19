---
name: evaluate-game
description: 快速评估一个游戏是否值得建攻略站。只做 Phase 1 评估 + Phase 2 关键词收割，不做后续建站。
arguments:
  - name: gameName
    description: 目标游戏名称
    required: true
---

# Evaluate Game — 快速选品评估

只执行 SOP 的 Phase 1（评估）和 Phase 2（关键词收割），输出评估报告，不建站。

## Step 1: Wiki 覆盖检查

```
WebSearch "{gameName} wiki"
WebSearch "{gameName} guide beginner tips"
```

## Step 2: 四维评分

按 build-game-site 的 Phase 1 标准打分。

## Step 3: 关键词收割

如果评分 ≥ 12/20，自动执行关键词收割（同 build-game-site Phase 2）。

## Step 4: 输出评估报告

```
## {gameName} 评估报告

### 四维评分
| 维度 | 评分 |
|------|------|
| 搜索需求 | X/5 |
| 生命周期 | X/5 |
| 内容扩展 | X/5 |
| 竞争结构 | X/5 |
| **总分** | **X/20** |

### 关键词样本（Top 15）
（列出 15 个真实搜索词）

### 建议
（建站 / 观望 / 放弃，附理由）
```

保存到 `keyword-results/{GameName}-evaluation.md`。
