---
name: build-game-site
description: L2 半自主 Agent — 按 SOP 全流程自动化新建游戏攻略站。自动评估→关键词→建站→部署→Dashboard。含自动纠错和构建记忆。
arguments:
  - name: gameName
    description: 目标游戏的 Steam 搜索名（如 "SpiritVale"）
    required: true
---

# Build Game Site — L2 Semi-Autonomous Agent

> 能力级别：L2 半自主（固定 Pipeline + 动态纠错 + 会话记忆 + 长期历史）

---

## Agent Loop：入口

### 第一步：读取历史记忆

在开始任何操作之前，先读取长期记忆文件：

```
Read games-site/.agent/build-history.json（如果不存在，跳过）
```

从历史中提取：
- 之前同类型游戏的成功经验
- 踩过的坑（issues 字段）
- 如果有同名游戏的历史记录，直接复用当时的 decisions

### 第二步：确定项目名

将游戏名转换为项目目录名：
```
{gameName} → 小写 + 去特殊字符 + 加 wiki 后缀
例：SpiritVale → spiritvalewiki
```

检查 games-site/ 下是否已存在同名目录，存在则提示用户。

---

## Phase 1: 评估

### 1.1 Wiki 覆盖检查

```
WebSearch "{gameName} wiki"
WebSearch "{gameName} fandom guide"
```

### 1.2 搜索趋势 + 游戏信息

```
WebSearch "{gameName} Steam release date gameplay review"
```

从结果中提取：开发商、发售日、游戏类型、Steam 评价

### 1.3 四维打分

| 维度 | 权重 | 评分 |
|------|------|------|
| 搜索需求结构 | ⭐5 | 有 how to / best / tier list / guide 类搜索吗？ |
| 生命周期 | ⭐4 | 新发售(5) / 稳定期(3-4) / 过气(1) |
| 内容可扩展性 | ⭐4 | 有职业/Boss/装备/更新系统？能拆出多少篇？ |
| 竞争结构 | ⭐3 | Wiki 覆盖情况 |

### 1.4 评估层：自动决策

```
总评 ≥ 15 → 推荐，自动进入 Phase 2（不等待确认）
总评 10-14 → 展示评估，等待用户确认
总评 < 10 → 报告不推荐理由，终止
```

**停止点**：总评 10-14 时需要用户确认。

---

## Phase 2: 关键词收割

### 2.1 代理检查

```
curl --max-time 5 --proxy http://127.0.0.1:1087 https://www.google.com
不通 → 提示 proxyon
```

### 2.2 执行收割

10 个前缀轮询，间隔 4 秒：

```
PREFIXES = ("", "how to ", "best ", "guide ", "weapons ", "beginner ", "build ", "solo ", "co op ", "tier list ")
```

### 2.3 评估层：自动检查收割质量

```
检查项：
□ 收割词数 ≥ 20？ → 通过
□ 收割词数 5-19？ → 部分成功，补一轮重试
□ 收割词数 < 5？ → 代理可能限速，等 60s 重试
□ 收割词中是否包含游戏名？ → 不包含可能是名称太通用，标记警告
```

自动重试最多 2 次。全部失败则降级为 WebSearch 间接获取。

### 2.4 保存

保存到 `keyword-results/{GameName}.md`，分类统计。

**停止点**：收割词数 > 50 时自动继续；≤ 50 时展示结果等待确认。

---

## Phase 3: 并行建站

> 启动前先读取历史记忆，找同类型游戏的成功模板

### 3.1 子 Agent 启动

同时启动 4 个子 Agent：

```
Agent A: 项目初始化 + 配置
Agent B: 写 10 篇攻略（基于 Phase 2 关键词）
Agent C: 模板残留清理
Agent D: SEO 验证
```

每个子 Agent 执行前，从历史记忆中提取：
- "上次这个类型的游戏建站，有什么问题？"
- "上次哪个模板最稳定？"

### 3.2 评估层：自动检查 + 修复

全部子 Agent 完成后，执行评估：

```
检查项：
□ npm run build 通过？
□ 攻略文件数 ≥ 10？
□ 每篇攻略都有 frontmatter？（title/description/keywords/related）
□ Header/Footer 中没有残留的模板站名称？
□ metadata.ts keywords 数组已更新？
□ sitemap.ts 中的 URL 已更新？
□ 无空文件（文件大小 > 100 字节）？
```

任何检查不通过 → 自动修复 → 重新评估。修复失败 → 输出具体问题列表，等待用户介入。

### 3.3 工作记忆更新

在上下文中记录：
```
本 Phase 使用的模板：{template_name}
本 Phase 写的攻略数：{count}
本 Phase 遇到并修复的问题：[列表]
```

---

## Phase 4: 构建与部署

### 4.1 构建验证

```
npm run build → 检查输出
失败 → 分析错误日志 → 自动修复 → 重新构建
3 次失败 → 停止，输出错误日志
```

### 4.2 Vercel 部署

```
npx vercel --prod --yes --token {TOKEN}
失败 → 检查 Token 是否过期 → 提示用户
```

### 4.3 GA4 + GSC

```
复制 GSC 验证文件 → 更新 GA4 ID → 重新部署
```

### 4.4 部署验证

```
检查首页 → sitemap → robots.txt → GSC 验证文件
```

### 4.5 评估层

```
□ 首页返回 200？
□ sitemap.xml 可访问且 URL 正确？
□ robots.txt 指向正确 sitemap？
□ 无明显的模板残留（检查首页 HTML 是否包含正确游戏名）？
```

---

## Phase 5: 收尾

### 5.1 Dashboard 更新

编辑 `dashboard/lib/sites.ts`，添加新站点。提醒用户提供 GA4 Property ID。

### 5.2 Git 提交

```
git add → git commit → git push
```

### 5.3 长期记忆写入

创建/更新 `.agent/build-history.json`：

```json
{
  "game": "{GameName}",
  "date": "今天日期",
  "genre": "{游戏类型}",
  "template": "{使用的模板}",
  "guides": {攻略数},
  "keywords": {关键词数},
  "score": {四维总分},
  "decisions": {
    "auto_continue_phase2": true,
    "auto_continue_phase3": false
  },
  "issues": ["本构建中遇到的问题"],
  "lessons": ["本构建中学到的经验"],
  "fixes_applied": ["自动修复了哪些问题"]
}
```

### 5.4 收尾清单

```
✅ {GameName} Wiki 已上线 — https://{project}.vercel.app

需用户手动完成：
1. GSC：添加属性 → HTML 验证 → 提交 sitemap
2. GA4：获取 Property ID → 填入 dashboard/lib/sites.ts
3. Dashboard：重新部署到 Vercel
```

---

## 自动决策规则（升级核心）

本 Agent 在以下场景**自动决策、不等待用户**：

| 条件 | 自动行为 |
|------|---------|
| 四维评分 ≥ 15 | 跳过确认，直接进入 Phase 2 |
| 关键词 ≥ 50 个 | 跳过确认，直接进入 Phase 3 |
| 构建失败 | 自动分析 + 修复，最多 3 次 |
| frontmatter 缺失 | 自动补全 |
| 模板残留检测到 | 自动替换 |
| 收割词 < 5（代理问题） | 自动等待 60s 重试 |

**需要用户确认的场景**：

| 条件 | 原因 |
|------|------|
| 评分 10-14 | 可做可不做，需用户决策 |
| 评分 < 10 | 不推荐，终止 |
| 关键词 < 50 | 搜索需求弱，需确认 |
| Vercel Token 过期 | 需要用户操作 |
| 构建 3 次自动修复失败 | 需要人工介入 |
| GA4 Property ID | 需要用户提供 |

---

## 错误处理矩阵

| 错误 | 自动修复策略 | 最大重试 |
|------|------------|---------|
| 代理不通 | 提示 proxyon | — |
| npm install 超时 | 等 60s 重试 | 3 次 |
| Google Suggest 超时 | 换 SOCKS5 代理 | 2 次 |
| 构建失败 | 分析日志 → 修复文件 | 3 次 |
| Token 过期 | 提示用户 | — |
| 部署路径叠加 | API 清 rootDirectory → 重试 | 1 次 |
| 子 Agent 超时 | 主 Agent 直接执行 | — |
| 收割词太少 | 降级 WebSearch | 1 次 |
