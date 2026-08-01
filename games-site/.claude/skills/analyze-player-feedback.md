---
name: analyze-player-feedback
description: 🎤 玩家反馈分析 Agent — 从 Reddit + Steam 评论中提取玩家痛点、内容缺口和 SEO 机会
arguments:
  - name: gameName
    description: 目标游戏名
    required: true
  - name: subreddit
    description: Reddit 子版块名（如 "eldenring"），不提供则自动搜索
    required: false
  - name: mode
    description: "quick"(建站时轻量版) | "deep"(发售后深度版) | "delta"(更新后增量版)
    required: false
---

# Analyze Player Feedback — 玩家反馈分析 Agent

> 从 Reddit 和 Steam 评论中提取玩家真实需求，找出内容缺口，产出精准的内容建议。
> 输入是玩家语言，输出是 SEO 关键词 + 攻略主题。

---

## 数据源

| 源 | 方式 | 不需要账号 |
|------|------|:--:|
| Reddit | `site:reddit.com` WebSearch | ✅ |
| Steam Reviews | `site:store.steampowered.com` WebSearch | ✅ |

---

## 执行模式

| 模式 | 触发时机 | 搜索深度 | 输出 |
|------|------|------|------|
| **quick** | 新站建站时 | 3 轮搜索，快速定位 | 首发内容优先级建议 |
| **deep** | 游戏发售后 1-2 周 | 6 轮搜索，深度挖掘 | 完整内容缺口报告 |
| **delta** | 游戏大更新后 | 限制最近 30 天 | 增量更新建议 |

---

## Step 1: 并行搜索

### Reddit — 痛点类（3 组查询）

```
查询组 A: "卡关/求助"
  site:reddit.com {game} ("stuck" OR "help" OR "can't beat" OR "lost" OR "confused")

查询组 B: "Build/攻略"
  site:reddit.com {game} ("best build" OR "meta" OR "after patch" OR "updated build" OR "beginner build")

查询组 C: "新手/经验"
  site:reddit.com {game} ("mistake" OR "things I wish" OR "beginner tips" OR "advice" OR "what should I")
```

### Steam Reviews — 情绪/抱怨

```
查询组 D: "差评"
  site:store.steampowered.com {game} negative review

查询组 E: "最有价值的评价"
  site:store.steampowered.com {game} "most helpful" review
```

### 搜索注意事项

- 如果找不到游戏专属 subreddit，改用 `site:reddit.com/r/gaming {game}` 或 `site:reddit.com/r/pcgaming {game}`
- 搜索词中的 `{game}` 使用游戏的完整英文名
- 每个查询组取前 10-15 条结果

---

## Step 2: 分析（定性，非定量）

### 2.1 痛点提取

从搜索结果中提取玩家反复提到的问题：

```markdown
### Top 5 玩家痛点
1. {痛点描述} — 来源: {Reddit/Steam}, 频率: {高频/中频}
2. ...
```

注意：
- 不追求精确计数（我们处理的数据量不大）
- 关注**反复出现的模式**而非单个帖子
- 区分新手痛点（"不知道怎么开始"）和老手痛点（"build 被 nerf 了"）

### 2.2 情绪摘要

从 Steam 评价中提取：

```markdown
### 玩家情绪
- 😡 差评高频词: {3-5 个关键词}
- 😊 好评高频词: {3-5 个关键词}
- 🚪 弃坑原因 Top 3: ...
```

### 2.3 语言翻译（关键步骤）

玩家在 Reddit 上的表达 vs Google 搜索的表达不同：

```markdown
### 玩家语言 → 搜索语言
| 玩家怎么说 (Reddit) | Google 怎么搜 |
|------|------|
| "Why does X boss one shot me" | "X boss guide" / "X boss too hard" |
| "My build sucks after patch" | "{game} best build after patch" / "{game} meta 2026" |
```

### 2.4 玩家画像

```markdown
### 这个游戏的玩家是谁
- 主力人群: {新手/老手/回归玩家}
- 最大的困惑: {核心痛点}
- 搜索意图特征: {查攻略/查Build/查机制/查剧情}
```

---

## Step 3: 对比我们的内容

读取目标站点的现有攻略列表（`content/guides/*.md`），对比分析：

```markdown
### 内容缺口分析
| 玩家需求 | 我们是否有覆盖 | 状态 |
|------|:--:|------|
| {需求1} | ❌ 完全没有 | P0 — 紧急 |
| {需求2} | ⚠️ 有但过时 | P1 — 需更新 |
| {需求3} | ✅ 已覆盖 | — |
| {需求4} | ⚠️ 太浅 | P2 — 需增强 |
```

---

## Step 4: 输出

保存到 `keyword-results/{GameName}-feedback.md`。

### 输出格式

```markdown
# {GameName} 玩家反馈分析 — {date}

> 模式: {quick/deep/delta} | 数据源: Reddit + Steam

## 1. 玩家痛点 Top 5
（见 2.1 格式）

## 2. 玩家情绪
（见 2.2 格式）

## 3. 语言翻译
（见 2.3 格式）

## 4. 内容缺口
（见 Step 3 格式）

## 5. 建议新增/更新攻略
1. **{标题}** (P0) — {理由}
2. **{标题}** (P1) — {理由}
3. **{标题}** (P1) — {理由}
4. **{标题}** (P2) — {理由}
```

---

## 调用示例

主管 Agent 调用：
```
Invoke analyze-player-feedback with gameName="Mistfall Hunter", mode="deep"
→ 输出 keyword-results/Mistfall-Hunter-feedback.md
→ coordinator 读取 → 调度 builder Agent (expand mode)
```

人工调用：
```
/analyze-player-feedback "Mistfall Hunter"
```

## 注意事项

- **不要追求样本量** — 中小型游戏 Reddit 讨论可能只有几十条，定性分析即可
- **语言翻译是关键** — 玩家在社交平台的语言 ≠ 搜索语言
- **优先 P0 缺口** — 玩家反复抱怨但无攻略覆盖的主题最值得写
- **不重复工作** — 如果已有攻略覆盖，不要建议重复写
