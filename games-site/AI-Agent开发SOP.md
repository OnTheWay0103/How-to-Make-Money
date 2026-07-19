# AI Agent 开发 SOP

> 基于实战总结：从固定流程的 Skill 到自主推理的 Agent。适用于 Claude Code Skill 开发场景。

---

## 一、Agent 能力成熟度模型

不是每个 Agent 都需要做到"完全自主"。按能力分为四个级别：

| 级别 | 名称 | 规划方式 | 记忆 | 适用场景 |
|------|------|---------|------|---------|
| L1 | **指令执行器** | 固定步骤，人工编排 | 无 | 单一重复任务 |
| L2 | **半自主 Agent** | 固定 Pipeline + 子步骤动态调整 | 会话内记忆 | 复杂但有 SOP 的任务 |
| L3 | **自主规划 Agent** | AI 自主分解目标 + 制定步骤 | 跨会话持久化 | 目标明确但路径不定的任务 |
| L4 | **自进化 Agent** | 从历史轨迹学习 + 优化策略 | 长期记忆 + 反馈循环 | 需要持续改进的生产级系统 |

我们的 `/build-game-site` 当前是 **L1 → L2 过渡期**。

---

## 二、Agent 的核心组件

### 2.1 Agent Loop（核心引擎）

```
┌─────────────────────────────────────────┐
│              Agent Loop                   │
│                                           │
│  1. 理解目标  →  2. 制定计划              │
│       ↓              ↓                    │
│  4. 评估结果  ←  3. 调用工具              │
│       ↓                                    │
│  5. 目标达成？→ Yes: 结束                 │
│       ↓ No                                 │
│  6. 调整计划 → 回到 2                      │
└─────────────────────────────────────────┘
```

**关键代码模式**（伪代码）：

```python
class Agent:
    def run(self, goal: str):
        plan = self.plan(goal)           # 2. 制定计划
        context = {"goal": goal, "history": []}
        
        while not self.is_done(goal, context):
            step = plan.next()           # 取下一步
            result = self.execute(step)  # 3. 调用工具
            context["history"].append({"step": step, "result": result})
            
            if self.should_replan(result):  # 4. 评估
                plan = self.replan(goal, context)  # 6. 调整计划
```

### 2.2 工具系统

Agent 通过**工具**与外部世界交互。每个工具需要：

```python
TOOL_SCHEMA = {
    "name": "web_search",        # 工具名
    "description": "搜索网页内容",  # 告诉 AI 什么时候用
    "parameters": {              # 参数定义（JSON Schema）
        "query": {"type": "string", "description": "搜索关键词"}
    },
    "handler": lambda query: search_web(query)  # 实际执行函数
}
```

**好的工具设计原则**：
- 每个工具只做一件事
- description 要足够清晰，AI 才能判断何时调用
- 返回值要结构化，方便 AI 理解结果

### 2.3 规划引擎

三种常见模式：

| 模式 | 原理 | 适用场景 |
|------|------|---------|
| **固定 Pipeline** | 预定义步骤，顺序执行 | 流程明确、标准化的任务 |
| **ReAct** | 思考→行动→观察→思考，逐步推理 | 需要灵活应对的任务 |
| **Plan-and-Execute** | 先制定完整计划，再逐步执行 | 复杂多步骤任务 |

**ReAct 模式示例**：

```
Goal: 为 SpiritVale 建攻略站

Thought: 我需要先确认这个游戏值不值得做
Action: web_search("SpiritVale wiki guide")
Observation: 没有独立 Wiki，只有零散攻略

Thought: Wiki 覆盖检查通过，下一步看搜索需求
Action: google_suggest("spiritvale how to")
Observation: 15 个建议词，包含"how to play""how to level up"等

Thought: 搜索需求确认，可以建站。开始项目初始化
Action: init_project("spiritvalewiki")
...
```

### 2.4 记忆系统

分三层：

| 层级 | 存储 | 内容 | 生命周期 |
|------|------|------|---------|
| **工作记忆** | 对话上下文 | 当前任务的中间结果 | 单次对话 |
| **短期记忆** | 会话文件（JSON/Markdown） | 本次任务的决策和结果 | 当前会话 |
| **长期记忆** | 持久化文件 | 历史建站记录、踩过的坑、优化经验 | 永久 |

**长期记忆的数据结构**：

```json
// .agent/build-history.json
{
  "builds": [
    {
      "game": "SpiritVale",
      "date": "2026-07-12",
      "genre": "MMORPG",
      "guides": 10,
      "keywords": 116,
      "decisions": {
        "template": "themoundwiki",
        "guide_count": 10,
        "reason": "MMORPG content depth > 100 pages"
      },
      "issues": [
        "GA4 property ID was in wrong format",
        "Dashboard silently skipped new sites"
      ],
      "lessons": [
        "MMORPG类游戏 Tier List 搜索量最高",
        "fetchSiteData 不能用 null 返回值"
      ]
    }
  ]
}
```

### 2.5 评估层

每个行动后都要评估：

```python
def evaluate(self, step_result):
    checks = [
        # 规则检查
        ("build_passed", step_result.exit_code == 0),
        ("guides_count", len(step_result.guides) >= 10),
        # AI 语义检查
        ("content_quality", self.llm_check(step_result, "内容是否准确？")),
        ("no_template_leftover", self.llm_check(step_result, "是否残留模板文字？")),
    ]
    return all(passed for _, passed in checks)
```

---

## 三、开发流程

### Step 1：定义 Agent 的能力边界

回答三个问题：

```
1. Agent 的输入是什么？→ 游戏名
2. Agent 的输出是什么？→ 已部署的攻略站 + 收尾清单
3. Agent 不能做什么？→ 不能创建 GA4 账号、不能手动操作 GSC
```

### Step 2：列举所有需要的工具

从 SOP 反推：

```
需要的能力              → 对应工具
搜索游戏信息             → WebSearch
抓取 Google Suggest     → curl（Bash）
创建文件/编辑配置        → Write / Edit
执行命令                → Bash
并行执行子任务           → Agent（子 Agent）
读写记忆               → Read / Write
```

### Step 3：设计规划模式

判断任务的复杂度：

```
单一明确路径 → 固定 Pipeline（L1-L2）
多路径需要判断 → ReAct（L2-L3）
复杂多步骤 → Plan-and-Execute（L3）
```

### Step 4：实现 Agent Loop

对于 Claude Code Skill 形态，Agent Loop 由 Claude Code 本身提供。我们只需：
1. 把规划逻辑写在 Skill 的提示词里
2. 用 `TaskCreate` 管理子任务
3. 在关键节点用 `AskUserQuestion` 获取确认

### Step 5：加入评估

每个 Phase 结束时：

```
1. 检查输出是否符合预期（规则检查）
2. 如果不符 → 自动修复 → 重新检查
3. 修复失败 → 报告用户
```

### Step 6：加入记忆

```
每次构建结束后：
1. 记录到 .agent/build-history.json
2. 记录成功/失败的决策
3. 下次构建前先读取历史，避免重复踩坑
```

### Step 7：测试 → 迭代

```
用真实游戏名测试 → 观察 AI 决策 → 调整提示词 → 再测试
```

---

## 四、我们的升级路线图

```
当前：L1 指令执行器
  └── 固定 5 个 Phase，硬编码流程

第一步：→ L2 半自主 Agent
  ├── 保留 Pipeline 框架
  ├── 加入评估循环（每 Phase 自动检查 + 修复）
  ├── 加入工作记忆（会话内追踪状态）
  └── 加入长期记忆（.agent/build-history.json）

第二步：→ L3 自主规划 Agent
  ├── 用 ReAct 替代固定 Pipeline
  ├── Agent 自己决定 Phase 顺序和内容
  └── 跨会话持久化记忆

第三步：→ L4 自进化 Agent（远期）
  ├── 从历史构建中学习最优策略
  └── 自动优化 SOP
```

---

## 五、常见陷阱

| 陷阱 | 表现 | 修复 |
|------|------|------|
| **过度自动化** | Agent 做了不该做的决策 | 加确认点，关键决策必须用户同意 |
| **提示词膨胀** | Skill 文件太长，AI 迷失 | 拆成多个子 Skill，主 Skill 只做编排 |
| **静默失败** | 错误被吞掉（如 fetchSiteData 返回 null） | 所有 try/catch 必须打日志 |
| **记忆污染** | 历史记忆干扰新决策 | 记忆读取要加时效过滤，过期数据不用 |
| **工具描述不清** | AI 不知道该用哪个工具 | 每个工具加使用示例 |
