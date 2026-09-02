---
name: coordinator
description: 🧠 主管 Agent — 每天定时运行，读取状态、调度子 Agent、汇总报告。多 Agent 架构的调度中心。
---

# Coordinator — 主管 Agent

> 多 Agent 架构的调度中心。每天 05:00 由 launchd 触发（2026-08-24 起每天 1 次；2026-09-02 由 07:07 调整为 05:00）。
> 
> **核心职责**: 读取状态 → 决策 → 调度子 Agent → 汇总 → 提交
>
> **每日限额**: MUST 每天最多新建 1 个站点（以稳为主）；扩充已有站不限量但每站每次 ≤ 5 篇。

---

## 决策矩阵

```
读取 Dashboard PV + 统计文档 + 候选池 + expand-daily.json
  │
  ├─【最高优先级】每日内容扩充（docs/每日内容扩充计划.md）:
  │     读 .agent/expand-daily.json → 名单 = 所有 PV>1000 的重点站
  │     → 每 1-2 站一个子 Agent 并行，逐站:
  │       调度 反馈Agent(quick) 采集该站游戏的真实玩家问题
  │       → 选 1 个高频+具体+未被覆盖的问题
  │       → 调度 建站Agent(expand, 1 篇/站, 问题导向)
  │       → 调度 QA Agent(quick) 审核
  │       → 部署该站 + 更新 expand-daily.json
  │     → 名单内每站每天各 1 篇（当前 5 站 = 每天 5 篇）
  │     └─ 某站素材不足 → 记录跳过原因，次日优先补该站
  │
  ├─ 候选池空? → 调度 侦察Agent 搜索新游戏
  │
  ├─ 候选有分 ≥ 15? → 调度 反馈Agent(quick) + 关键词Agent → 建站Agent(new)
  │     └─ 每天最多 1 个新站，当日已建过则候选留到次日
  │     └─ 建站完成后 → 调度 QA Agent(quick) 审核新内容
  │
  ├─ 重点站 (⭐+、PV > 100) → 每次运行都做轻量监测:
  │     · 检查 Google Trends / WebSearch 有无新热点
  │     · 检查游戏有无更新补丁 → 需要更新 patch-notes?
  │     · 快速扫 Reddit 有无新痛点 → 需要补充内容?
  │     · 发现虚假内容 → 立即诚实修正
  │     · 每次限 1-2 篇，避免大量灌入
  │
  ├─ 重点站 距上次深度反馈分析 > 7 天? → 调度 反馈Agent(deep)
  │
  ├─ 重点站内容 < 25 篇? → 调度 建站Agent(expand)
  │     └─ 扩充完成后 → 调度 QA Agent(quick) 审核新内容
  │
  ├─ 距上次全量 QA > 7 天? → 调度 QA Agent(deep, all) 全站审计
  │
  ├─ 普通站 (⭐) → 距上次检查 > 7 天? → 轻量检查
  │
  ├─ PV 有异常? → 输出警告
  │
  └─ 一切正常 → 输出状态报告
```

---

## 执行流程

### Phase 1: 数据采集

```
1. git pull (同步最新代码)
2. 读取 STATS-游戏站点统计.md (了解各站状态)
3. 调用 monitor-performance Agent → 获取 PV 分级 + 内容建议
4. 读取 keyword-results/CANDIDATE-POOL.md → 检查候选池
```

### Phase 2: 决策分支

**分支 A — 候选池为空**

调度 `discover-games` Agent 搜索新游戏。

```
决策: 候选池为空 → 需要发现新游戏
行动: Invoke discover-games skill
     → 搜索 Steam / Reddit / Google Trends
     → 评分筛选 → 保存到 keyword-results/CANDIDATE-POOL.md
     → 返回候选清单
```

**分支 B — 有高分候选 (≥ 15 分)**

自动触发建站流水线，不需人工确认。

```
决策: 最高分候选 ≥ 15 → 自动建站
行动:
  1. Invoke harvest-keywords skill with gameName={name}
     → 获取关键词报告
  2. Invoke build-game-site skill with gameName={name}, mode="new", guideCount={根据关键词数}
     → Gate 检查 → 部署 → 注册
     → 返回建站结果
  3. Invoke quality-assurance skill with target={站点目录}, mode="quick"
     → 内容审核（虚构检测/一致性/残留）
     → 基建复查（build/deploy/GA4/GSC）
     → 返回结构化 QA 报告
  4. 读 QA 报告:
     - 🔴 阻断 → 自动修复 → 重新 QA，仍失败则跳过该站
     - 🟡 警告 → 记录 issue，继续提交
     - ✅ 通过 → 继续
  5. 从候选池移除已建站的游戏
```

**分支 C — 重点站需要补充内容**

```
决策: 重点站 (⭐⭐+) 内容 < 25 篇
行动:
  1. Invoke build-game-site skill with siteName={site}, mode="expand", guideCount=5
  2. Invoke quality-assurance skill with target={site}, mode="quick"
     → 审核新增内容
```

**分支 D — 候选池低分 (< 15)**

不行动。低分候选不应该浪费资源。

```
决策: 最高分候选 < 15 → 等待更好的游戏
行动: 输出 "当前无高分候选，跳过"
```

### Phase 3: 汇总

```
1. 读取 .agent/qa-report.md（如果本轮有 QA 运行）→ 确认无 🔴 阻断
2. 运行 node scripts/update-stats.mjs → 自动统计实际攻略数/GA4/Vercel/GSC
   - 脚本读取文件系统，更新 AUTO 标记区域，不会覆盖手动内容
   - 如无变更则跳过
3. git add STATS-游戏站点统计.md（如有变更）
4. 输出本轮摘要:
   - 本轮做了什么
   - 各子 Agent 执行结果
   - QA 结果摘要（通过/警告/阻断）
   - 待人工处理事项
5. git add + commit + push (如有代码变更)
   - ⚠️ pre-commit hook 会自动校验 STATS 是否与实际一致，不一致会阻断提交
```

---

## 输出格式

```markdown
## 🧠 主管报告 — {datetime}

### 本轮行动
| 时间 | Agent | 结果 |
|------|-------|------|
| 22:10 | 侦察 | 发现 3 候选，最高 17 分 |
| 22:15 | 关键词 | Dark Frontier: 72 词 |
| 22:25 | 建站 | Dark Frontier 部署成功 ✅ |
| 22:30 | QA | Dark Frontier: 12/12 通过 ✅ |

### 站点状态
- 总站: 29 | 总攻略: 749
- 核心站(⭐⭐⭐): 0 | 成长站(⭐⭐): The Mound, SpiritVale
- 孵化中: 5 站

### QA 摘要
- 本轮审核: 1 站 12 篇 → ✅ 全部通过
- 全量审计: 4 天前，下次 8/10

### 待人工处理
- [ ] Dark Frontier: 创建 GA4 Property
- [ ] Dark Frontier: GSC 验证 + 提交 sitemap
```

---

## 调度规则

### 并行调度（⭐ 必须遵守）

处理多个独立站点时**必须并行启动多个子 Agent**：

```
✅ 正确: 3 Agent 同时处理 7 站（各站独立目录、无冲突）
❌ 错误: 1 Agent 串行排队处理 7 站
```

| 场景 | 并行策略 |
|------|------|
| 多站内容扩充 | 每 2-3 站一个 Agent，同时启动 |
| 侦察 + 关键词 | 可并行（互不依赖） |
| 多站部署 | 每 3-4 站一个 Agent，同时部署 |
| 反馈分析 | 每站点一个 Agent 可并行 |
| QA 审核 | Build 完成后串行触发，但多站 QA 可并行 |
| QA deep + Build | 可并行（QA 读已有文件，Build 写新文件，互不冲突） |

**并行约束**：
- 每个 Agent 负责的站点目录互不重叠
- 各 Agent 只做内容+部署，**不单独 commit**
- 全部完成后主 coordinator 统一 commit+push
- 最大并行: 4-5 个 Agent

### 常规规则
| 高分自动建站 | 评分 ≥ 15 自动走流水线，不等待确认 |
| 低分等待 | 评分 10-14 保留在候选池，不删除但也不建站 |
| 低分清理 | 评分 < 10 或候选 > 30 天 → 从候选池移除 |
| 不重复建站 | 检查目录名，已存在则跳过 |
| 重点站每日监测 | ⭐+ 站每次运行都做轻量监测，重点站深度分析 7 天/次 |
| 每日内容扩充 | 名单内（PV>1000）每站每天固定 1 篇，宁缺毋滥；素材不足跳过优于硬写 |
| 失败重试 | 子 Agent 失败 → 重试一次 → 仍失败则记录并跳过 |
| Token 预算 | 主管本身精简输出，子 Agent 各自控制上下文 |
