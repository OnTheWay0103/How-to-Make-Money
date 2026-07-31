# 游戏攻略站 SOP Agent — 开发计划

> 2026-07-19

---

## 一、目标

把 `游戏攻略站上线SOP.md` 变成一个可被 AI 执行的 Agent，输入游戏名，自动完成关键词收割→建站→部署→Dashboard 接管的完整流程。

---

## 二、Agent 形态选择

有三种可行的实现方式：

| 方式 | 难度 | 灵活性 | 推荐度 |
|------|------|--------|--------|
| **A. Claude Code Skill** | ⭐ 最低 | 高 | ⭐⭐⭐⭐⭐ |
| B. 独立 Node.js CLI 工具 | ⭐⭐⭐ | 中 | ⭐⭐ |
| C. GitHub Actions 自动化 | ⭐⭐ | 低 | ⭐⭐ |

**推荐 A**：Claude Code Skill 是 Claude Code 内置的 Agent 机制。一个 Markdown 文件定义指令，AI 读取后按指令执行。零部署、零维护、直接在我们已有的工作流中运行。

### Claude Code Skill 原理

```
用户输入: /build-game-site "SpiritVale"

Claude Code 读取: .claude/skills/build-game-site.md
  → 解析指令
  → 调用子 Agent 执行并行任务
  → 汇总结果
```

Skill 文件本身就是一个**给 AI 读的提示词**，里面定义了标准操作流程。AI 读完后按流程执行。

---

## 三、架构设计

### 3.1 总体架构

```
用户触发
  ↓
主 Skill: /build-game-site {游戏名}
  ├── Phase 1: 评估（串行）
  │   ├── 快速检查 Wiki 覆盖
  │   ├── Google Trends 趋势
  │   └── 输出「建/不建」决策
  │
  ├── Phase 2: 关键词收割（串行）
  │   ├── 10 前缀 × Google Suggest
  │   └── 分类保存到 keyword-results/
  │
  ├── Phase 3: 并行建站（并行）
  │   ├── 子 Agent A: 项目初始化
  │   ├── 子 Agent B: 撰写 10 篇攻略
  │   ├── 子 Agent C: SEO 基础设施
  │   └── 子 Agent D: 首页内容
  │
  ├── Phase 4: 部署（串行）
  │   ├── 本地构建验证
  │   ├── Vercel 部署
  │   ├── GSC 验证文件
  │   └── GA4 接入
  │
  └── Phase 5: 收尾（串行）
      ├── 更新 Dashboard sites.ts
      ├── 更新 keyword-results
      └── Git commit + push
```

### 3.2 为什么有的阶段用串行、有的用并行？

| 阶段 | 串/并 | 原因 |
|------|--------|------|
| Phase 1 评估 | 串行 | 必须先判断值不值得做，不值得就终止 |
| Phase 2 关键词 | 串行 | 需要代理、限速、一次只能一个请求 |
| Phase 3 建站 | **并行** | 项目框架、内容、SEO 互不依赖 |
| Phase 4 部署 | 串行 | 必须先构建通过才能部署 |
| Phase 5 收尾 | 串行 | Dashboard 和 git 需要前序完成 |

### 3.3 决策点

Agent 有三个明确的「停止点」，需要用户确认后才继续：

```
Phase 1 结束 → "该游戏搜索评估 X 分，是否继续？" [等待用户确认]
Phase 2 结束 → "收割了 N 个关键词，是否继续建站？" [等待用户确认]
Phase 4 部署后 → "网站已部署，是否提交 GSC 并更新 Dashboard？" [等待用户确认]
```

---

## 四、文件结构

```
games-site/
├── .claude/
│   └── skills/
│       └── build-game-site.md    ← 主 Skill 文件
├── 游戏攻略站上线SOP.md          ← 参考文档（Skill 会引用）
└── templates/                    ← 模板文件（可选）
    └── site-template/            ← Next.js 项目模板
```

### Skill 文件结构

一个 Skill 文件包含以下部分：

```markdown
---
name: build-game-site
description: 按 SOP 全流程自动化新建游戏攻略站
arguments:
  - name: gameName
    description: 目标游戏名称
    required: true
---

# 指令内容...

## 1. Phase 1: 评估
...

## 2. Phase 2: 关键词收割
...

## 3. Phase 3: 并行建站
...
```

---

## 五、开发步骤

### Step 1：创建目录结构（1 分钟）

```bash
mkdir -p .claude/skills
```

### Step 2：编写主 Skill 文件（核心工作）

将 SOP 的每个章节转化为 Agent 可执行的指令。关键区别：

| SOP（给人读） | Skill（给 AI 读） |
|-------------|-----------------|
| "打开 Steam 新发售页面" | "用 WebSearch 搜索 'Steam new releases...'" |
| "复制模板项目" | "用 Bash 执行 cp -r 命令" |
| "修改 seo-config.ts" | "用 Edit 替换指定字段" |
| "提交 GSC" | "提醒用户去 GSC 手动操作" |

### Step 3：测试（每个 Phase 单独测试）

用 `/build-game-site "测试游戏名"` 触发，观察 AI 是否正确执行每一步。

### Step 4：迭代

根据测试结果调整指令，直到全流程跑通。

---

## 六、风险与限制

| 风险 | 应对 |
|------|------|
| 代理问题导致关键词收割失败 | Skill 里包含多种收割方式（curl/Python/手动提示） |
| Vercel Token 过期 | 检测到 401 时提示用户更新 Token |
| 模板残留 | Phase 3 结束后自动执行残留清理检查 |
| 游戏名与现有站重复 | Phase 1 先检查 games-site/ 下是否已有同名目录 |
