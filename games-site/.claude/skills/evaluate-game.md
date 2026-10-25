---
name: evaluate-game
description: 已作废（2026-10-25）。选品评估拆为「候选分析员」+「关键词研究员」两个岗位，改用本文件的转调说明。
arguments:
  - name: gameName
    description: 目标游戏名称
    required: true
---

# Evaluate Game — ⚠️ 已作废（2026-10-25）

原 skill 把「wiki 检查 + 四维评分 + 关键词收割」揉在一个动作里，与现行分工冲突：
发现者不打分、分析员不采词。**不要再按本文件执行评估。**

## 现在的做法

| 原步骤 | 现在由谁做 | 规则 |
|---|---|---|
| Step 1 Wiki 覆盖检查 | 候选分析员 | 6 条固定 SERP 查询，`docs/STRATEGY-选词与评分.md` 第三节 |
| Step 2 四维评分 | 候选分析员 | 需求 / 竞争 / 内容扩展 / 生命周期，同文档第二节 |
| Step 3 关键词收割 | 关键词研究员 | `docs/agents/13` / `14`，产出 `keyword-results/{slug}.md` |
| Step 4 评估报告 | 候选分析员 | `keyword-results/selection-{YYYY-MM-DD}.md` |

## 执行方式

若只想评估一个游戏：

1. 确认它已在 `keyword-results/CANDIDATE-POOL.md`，状态 `待分析`（没有就先按 `discover-games` 入池）。
2. 按 `docs/agents/23-Profile-候选分析员.md` 执行分析轮。
3. 没有关键词报告的，先把状态改 `需采集`，等关键词研究员跑验证轮。

MUST NOT 用本文件旧的 12 分门槛或 Top 15 词样本作为建站依据。
