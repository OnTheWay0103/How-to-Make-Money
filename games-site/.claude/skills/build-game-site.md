---
name: build-game-site
description: L3 自主规划 Agent — 输入游戏名建站，或留空自动搜索+评估+选择最佳游戏全自动建站。
arguments:
  - name: gameName
    description: 目标游戏的 Steam 搜索名（如 "Dinoblade"）。留空则自动搜索热门游戏。
    required: false
---

# Build Game Site — L3 Autonomous Planning Agent

> 能力级别：L3 自主规划 + 自主游戏发现（ReAct 推理 + 动态步骤 + 跨会话记忆）

---

## 入口判断

```
有 gameName 参数 → Phase 1（规划建站）
无 gameName 参数 → Phase 0（自主游戏发现）
```

---

## Phase 0: 自主游戏发现 🔍

> Agent 自主搜索最新热门游戏，按 SOP 筛选，输出候选清单供用户选择。

### 0.1 多源搜索

并行搜索以下来源：

```
WebSearch "Steam most wishlisted upcoming games 2026"
WebSearch "SteamDB trending new releases this week 2026"
WebSearch "new gacha mobile games global English release 2026"
WebSearch "Roblox most popular games 2026 concurrent players"
```

### 0.2 自动筛选

对搜索结果中的每个游戏，按 SOP 五条标准快速打分：

```
跳过：AAA大作 / 纯竞技体育 / 超休闲 / 视觉小说
标记：RPG/动作/生存/合作/恐怖/提取/Roguelite 类
检查：开发商规模（中型优先）
```

### 0.3 快速 Wiki 检查

对 Top 5 候选，并行检查：

```
WebSearch "{gameName} wiki fandom guide"
→ 有无独立 Wiki？前 5 名是否完整？
```

### 0.4 输出候选清单

```
## 🔍 自主发现的游戏候选 (2026-07-XX)

| # | 游戏 | 类型 | 发售日 | 热度信号 | Wiki | 预估分 |
|---|------|------|--------|---------|------|--------|
| 1 | Game A | RPG | 8/15 | 200k wishlist | ❌无 | 17/20 |
| 2 | Game B | Survival | 7/28 | Steam #5 | ❌无 | 15/20 |
| 3 | Game C | Gacha | 已上线 | Top 10 grossing | ❌无 | 14/20 |

### 详细分析

**🥇 Game A**
- Steam: {链接}
- 核心玩法：...
- 可写内容估算：{N} 篇
- 竞争检查：无 Wiki
- 风险：...

（对每个候选展开）

---

### 0.5 自动选择最佳游戏

> 不需要用户手动选择。Agent 按评分自动决定。

**选择规则**：

```
1. 所有候选按预估分排序
2. 取最高分游戏
3. 如果最高分 ≥ 15：
   → 自动选择该游戏，直接进入 Phase 1 规划
   → 输出：🥇 自动选择：{GameName}（{score}/20），开始建站流程…
4. 如果最高分在 10-14 之间：
   → 展示 Top 3 候选，等待用户确认
5. 如果最高分 < 10：
   → 报告"当前没有值得建站的游戏"，建议一周后再搜
```

**自动排除**：
- 已在 games-site/ 下建过站的游戏（检查目录名）
- 已确认有完整 Wiki 覆盖的游戏
- 评分 < 10 的游戏

### 0.6 进入规划

选定的游戏名自动传入 Phase 1，无需用户干预。输出简洁提示后直接开始规划。

---

## Phase 1: 自主规划（ReAct）

游戏名确定后，Agent 分析现状，动态生成执行计划。

### 1.1 读取长期记忆

```
Read games-site/.agent/build-history.json
→ 提取同类型经验、已知踩坑、最佳模板
```

### 1.2 状态检查

```
games-site/{gamename}wiki/ 是否存在？→ 已建站则只需扩充
keyword-results/{GameName}.md 是否存在？→ 关键词已收割
```

### 1.3 动态生成计划

AI 自主决定：

```
决策 1: 需要评估吗？
  已有评估 → 跳过
  新游戏 → 快速评估

决策 2: 需要收割关键词吗？
  已有且 < 7 天 → 跳过
  无 → 执行收割

决策 3: 写多少篇攻略？
  关键词 > 100 → 15 篇
  关键词 50-100 → 10 篇
  关键词 < 50 → 8 篇
  根据游戏复杂度微调

决策 4: 用哪个模板？
  从 genreInsights 匹配
  默认 themoundwiki（最干净）

决策 5: 内容优先级？
  Soulslike → boss + parry
  MMORPG → tier list + classes
  Extraction → builds + weapons
  新游戏 → beginner + FAQ + release info

决策 6: 预防哪些已知问题？
  从 knownIssues 提取预防措施
```

### 1.4 输出计划并确认

```
## {GameName} 建站计划（AI 自主规划）

### 发现方式
{用户指定 / Agent 自主发现}

### 现状
- 历史：{首次 / 已部分完成}
- 类型：{genre}，参考关键词 {N} 个
- 模板：{template}

### 执行步骤
1. [评估] {跳过/执行}
2. [关键词] {跳过/收割}
3. [建站] {N} 篇攻略，侧重 {…}
4. [部署] Vercel + GSC
5. [收尾] Git + Dashboard

确认后开始执行。
```

**确认规则**：
- 自动发现的游戏 + 评分 ≥ 15 → **自动继续，不等待确认**
- 用户指定的游戏 + 评分 ≥ 15 → **自动继续**
- 评分 10-14 → 展示计划，等待确认
- 已建站需扩充 → 展示扩充计划，等待确认

---

## Phase 2: 执行

### 自动决策规则

| 条件 | 行为 |
|------|------|
| 评分 ≥ 15 | 自动继续 |
| 关键词 ≥ 50 | 自动继续 |
| 已有工作 | 自动跳过 |
| 构建/部署失败 | 自动修复 × 3 |
| Token 过期 | 立即停止，提示用户 |

### 建站（并行）

```
Agent A: 写 {N} 篇攻略（按内容优先级排序）
Agent B: 项目初始化 + 配置
Agent C: 页面内容（首页/FAQ/TierList）+ 残留清理
```

完成后执行 **12 文件逐项检查**。

### 部署 + 收尾（强制两步）

```
1. Vercel Token 预检
2. npm build → 部署 Vercel
3. git add → commit → push
4. 更新 build-history.json
5. 输出用户待办清单
```

---

## 错误处理矩阵

| 错误 | 处理 |
|------|------|
| 代理不通 | 提示 proxyon |
| npm install 超时 | 后台重试 × 3 |
| Google Suggest 超时 | SOCKS5 → 降级 WebSearch |
| 构建失败 | 自动修复 × 3 |
| Token 过期 | 预检拦截 → 提示 vercel login |
| Git push 冲突 | pull --rebase → 重新 push |
| 子 Agent 超时 | 主 Agent 直接执行 |
