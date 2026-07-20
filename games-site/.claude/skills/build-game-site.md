---
name: build-game-site
description: L3 自主规划 Agent — 输入游戏名，AI 自主决定建站策略。根据上下文动态调整步骤、攻略数量、模板选择。
arguments:
  - name: gameName
    description: 目标游戏的 Steam 搜索名（如 "Dinoblade"）
    required: true
---

# Build Game Site — L3 Autonomous Planning Agent

> 能力级别：L3 自主规划（ReAct 推理 + 动态步骤 + 跨会话记忆）

---

## 核心变化（L2→L3）

| L2 | L3 |
|----|----|
| 固定 5 个 Phase，顺序执行 | **AI 先分析，再动态生成执行计划** |
| 攻略数固定 10 篇 | **根据关键词数 + 游戏系统决定（8-15 篇）** |
| 模板固定 themoundwiki | **从历史中选最优模板** |
| Phase 顺序不可变 | **根据上下文跳过/合并/重排步骤** |

---

## Step 0: 自主规划（ReAct）

在动手之前，Agent 必须先**分析现状**，然后**动态生成执行计划**，最后**提交给用户确认**。

### 0.1 读取长期记忆

```
Read games-site/.agent/build-history.json

提取：
- 本次游戏是否建过站？（检查 builds 数组）
- 同类型游戏的经验（genreInsights）
- 已知踩坑（knownIssues）
- 最佳模板（bestTemplates）
```

### 0.2 状态检查

```
检查是否已有部分工作完成：
- games-site/{gamename}wiki/ 是否存在？→ 可能已建站，只需扩充
- keyword-results/{GameName}.md 是否存在？→ 关键词已收割，跳过
- Vercel 上是否已部署？→ 只需更新内容
```

### 0.3 动态生成执行计划

根据以上分析，**AI 自主决定**以下内容：

```
决策 1: 需要评估吗？
  已有评估报告 → 跳过
  新游戏 → 执行快速评估（Wiki检查 + 四维打分）

决策 2: 需要收割关键词吗？
  已有且 < 7 天 → 跳过
  已有但 > 7 天 → 问用户是否更新
  无 → 执行收割

决策 3: 写多少篇攻略？
  关键词 > 100 → 建议 15 篇
  关键词 50-100 → 建议 10 篇
  关键词 < 50 → 建议 8 篇
  根据游戏系统复杂度微调（MMORPG多写，Roguelite精写）

决策 4: 用哪个模板？
  从 genreInsights 中找同类型 → 用该类型的成功模板
  无同类型 → 用 bestTemplates.cleanest (themoundwiki)

决策 5: 攻略排序优先级？
  Soulslike → boss + parry 优先
  MMORPG → tier list + classes 优先
  Extraction → builds + weapons 优先
  新游戏 → beginner + FAQ + release info 优先

决策 6: 需要跳过哪些已知问题？
  从 knownIssues 提取 → 在计划中标注预防措施
```

### 0.4 输出计划并等待确认

```
## {GameName} 建站计划（AI 自主规划）

### 现状分析
- 历史状态：{首次建站 / 第N次 / 已部分完成}
- 同类型参考：{MMORPG/Soulslike/…}，平均关键词 {N} 个
- 推荐模板：{template}（原因：{…}）

### 执行计划
1. [评估] {跳过/执行}
2. [关键词] {跳过/收割}
3. [建站] {N} 篇攻略，内容侧重 {…}
4. [部署] Vercel + GSC
5. [收尾] Git + Dashboard + 记忆

### 已知风险预防
- {risk 1}: {prevention}
- {risk 2}: {prevention}

确认后开始执行。
```

**停止点**：等待用户确认计划。

---

## 执行阶段

用户确认后，按计划执行。执行过程中遵循以下原则：

### 自动决策规则

| 条件 | 行为 |
|------|------|
| 评分 ≥ 15 | 自动继续到关键词收割 |
| 关键词 ≥ 50 | 自动继续到建站 |
| 已有工作可复用 | 自动跳过对应步骤 |
| 构建/部署失败 | 自动修复 × 3，失败则报告 |
| Token 过期 | 立即停止，提示用户 |

### 建站阶段（并行执行）

根据计划中确定的攻略数，启动子 Agent：

```
Agent A: 写 {N} 篇攻略（按计划中的优先级排序）
Agent B: 项目初始化 + 配置
Agent C: 页面内容（首页/FAQ/TierList）+ 残留清理
```

完成后执行 12 文件逐项评估检查。

### 部署阶段

```
1. 构建验证 → 失败则自动修复
2. Vercel Token 预检
3. Vercel 部署
4. 部署验证（首页/sitemap/robots）
```

### 收尾阶段（强制）

```
1. Dashboard 注册（如果有 GA4 Property ID 则填入）
2. Git add + commit + push
3. 长期记忆写入（build-history.json）
4. 输出用户待办清单
```

---

## 构建记忆更新（每次收尾）

写入 `.agent/build-history.json` 的 builds 数组：

```json
{
  "game": "{GameName}",
  "date": "{YYYY-MM-DD}",
  "genre": "{类型}",
  "template": "{使用的模板}",
  "guides": {N},
  "keywords": {N},
  "score": {评分},
  "plan": "{AI 自主生成的计划摘要}",
  "issues": ["问题列表"],
  "lessons": ["经验列表"]
}
```

---

## 错误处理矩阵

| 错误 | 处理 |
|------|------|
| 代理不通 | 提示 proxyon |
| npm install 超时 | 后台重试 × 3 |
| Google Suggest 超时 | 换 SOCKS5 → 降级 WebSearch |
| 构建失败 | 分析日志 → 自动修复 × 3 |
| Token 过期 | 预检拦截 → 提示 vercel login |
| 部署路径叠加 | API 清 rootDirectory → 重试 |
| 子 Agent 超时 | 主 Agent 直接执行 |
| Git push 冲突 | pull --rebase → 重新 push |
