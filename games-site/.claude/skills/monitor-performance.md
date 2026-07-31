---
name: monitor-performance
description: PV 监控 Agent — 读取 Dashboard 数据，分析各站 PV，标记重点站，输出内容补充建议
---

# Monitor Performance — PV 监控 Agent

> 独立 Agent，被主管 Agent 每天调用。

---

## 执行流程

### Step 1: 读取 Dashboard 数据

访问诊断 API 获取各站数据：
```
GET https://dashboard-pied-six-31.vercel.app/api/diagnostics
```

检查：
- `apiResult` = "OK" → 数据正常
- `accessibleAccounts` → 确认所有站点可访问

### Step 2: 读取统计文档

读取 `STATS-游戏站点统计.md`，获取：
- 各站攻略数
- 各站上线日期
- 当前重点标记

### Step 3: PV 分级

从 Dashboard 数据中提取各站 PV，按以下标准分级：

| 级别 | 条件 | 标记 | 内容策略 |
|:--:|------|:--:|------|
| ⭐⭐⭐ | PV > 500 | 核心站 | 每周至少补充 5 篇 |
| ⭐⭐ | PV > 100 | 成长站 | 每周补充 3 篇 |
| ⭐ | PV > 10 | 普通站 | 有内容缺口时补充 2-3 篇 |
| — | PV < 10 | 孵化中 | 等 Google 收录，不主动补充 |

### Step 4: 生成内容补充建议

对 ⭐⭐ 及以上站点，检查攻略数是否充足：
- 攻略数 < 25 → 建议补充到 25 篇
- 攻略数 25-35 → 内容充足，维持
- 攻略数 > 35 → 内容饱和，优化已有而非新增

### Step 5: 异常检测

- PV 突然下降 > 50% → 标记 ⚠️，可能被 Google 降权
- PV 持续为 0 超过 2 周 → 标记 ⚠️，可能未被收录
- 新站上线 2 周后 PV 仍为 0 → 检查 GSC 状态

---

## 输出格式

```markdown
## 📊 PV 监控报告 — {date}

### 重点站（需补充内容）
| 站点 | PV | 攻略数 | 建议 |
|------|:--:|:--:|------|
| The Mound | 150 ⭐⭐ | 28 | 充足，维持 |
| SpiritVale | 120 ⭐⭐ | 27 | 充足，维持 |

### 成长站
| 站点 | PV | 攻略数 | 建议 |
|------|:--:|:--:|------|
| Witchspire | 45 ⭐ | 37 | 内容饱和，优化索引 |

### 孵化中（等收录）
| 站点 | 上线天数 | 攻略数 |
|------|:--:|:--:|
| Bonehold | 2 | 10 |

### 异常
| 站点 | 问题 | 建议 |
|------|------|------|
| — | — | — |

### 需要调度的行动
1. [ ] The Mound: 内容充足，跳过
2. [ ] SpiritVale: 内容充足，跳过
3. [ ] Dark Frontier: 新站 2 周，等收录
```

---

## 调用示例

主管 Agent 调用：
```
Invoke monitor-performance skill. Read dashboard data, classify sites by PV, and return a report with content recommendations.
```
