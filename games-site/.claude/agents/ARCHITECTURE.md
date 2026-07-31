# 多 Agent 协作架构设计

> 版本: v1.0 | 日期: 2026-07-31 | 状态: 设计中

---

## 一、架构总览

```
                          ┌──────────────────────────┐
                          │     🧠 主管 Agent         │
                          │     (coordinator)          │
                          │     每天 07:07 / 22:07     │
                          └─────┬──────────┬──────────┘
                                │          │
        ┌───────────────────────┼──────────┼────────────────┐
        │                       │          │                │
        ▼                       ▼          ▼                ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ 🔍 侦察Agent │   │ 🔑 关键词Agent│   │ 🏗️ 建站Agent │   │ 📊 监控Agent │
│ (discover)    │   │ (keywords)   │   │ (builder)     │   │ (monitor)    │
│ 搜索新游戏     │   │ 关键词调研    │   │ 新建站+补充内容 │   │ PV分析+标记   │
└──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
```

### Agent 角色一览

| Agent | Skill 文件 | 职责 | 触发方式 |
|------|------|------|------|
| 🧠 主管 | `coordinator` | 读取状态、决策调度、汇总报告 | 定时 (launchd) |
| 🔍 侦察 | `discover-games` | 搜索新游戏、填充候选池 | 主管按需调用 |
| 🔑 关键词 | `harvest-keywords` | Google Suggest 关键词收割 | 主管按需调用 |
| 🏗️ 建站 | `build-game-site` | 新站创建 + 已有站内容补充 | 主管按需调用 |
| 📊 监控 | `monitor-performance` | 读取 PV、标记重点站 | 主管每天调用 |

---

## 二、设计原则

### 2.1 上下文隔离

每个子 Agent 是独立调用的，每次调用都是新的上下文。Agent 之间通过**结构化数据**传递信息，不共享对话历史。

```
✅ 正确: 主管传入 { game: "Dark Frontier", score: 17, keywords: [...] }
❌ 错误: 建站 Agent 看到侦察 Agent 的搜索过程
```

### 2.2 文件共享

Agent 之间通过共享文件系统通信，不需要进程间通信：

| 文件 | 写入方 | 读取方 |
|------|------|------|
| `游戏站点统计.md` | 主管 / 建站 / 监控 | 全部 Agent |
| `.agent/build-history.json` | 建站 / 主管 | 主管 / 监控 |
| `keyword-results/*.md` | 关键词 Agent | 建站 Agent |
| `.agent/candidate-pool.md` | 侦察 Agent | 主管 |
| `dashboard/lib/sites.ts` | 建站 Agent | 主管 / 监控 |

### 2.3 结构化输入/输出

每个 Agent 接收明确的参数，返回明确的结果：

```
侦察 Agent:
  IN:  无（自主搜索）
  OUT: { candidates: [{ name, score, genre, steamUrl, wikiStatus }] }

关键词 Agent:
  IN:  { gameName, searchQuery }
  OUT: { keywords: [...], count, noiseRate, priorityTopics }

建站 Agent:
  IN:  { gameName, mode: "new"|"expand", guideCount, priorityTopics }
  OUT: { siteUrl, guidesAdded, guidesTotal, deployed }

监控 Agent:
  IN:  无（读取 Dashboard + stats doc）
  OUT: { highPV: [...], growing: [...], needsContent: [...] }
```

### 2.4 Gate 检查机制

建站 Agent 完成部署后，强制执行 Gate 检查（嵌入在建站 Agent 流程内，非独立 Agent）：

```
Build Gate (提交前):
  [ ] package.json / tsconfig.json / vercel.json 存在
  [ ] npm run build 通过
  [ ] grep 模板残留 = 0

Deploy Gate (部署后):
  [ ] curl 首页 200
  [ ] curl sitemap.xml 200 + 有效 XML
  [ ] curl ads.txt 200
  [ ] curl robots.txt Allow: /

Cleanup Gate (收尾):
  [ ] GA4 ID 非空
  [ ] Dashboard 已注册
  [ ] 统计文档已更新
  [ ] build-history.json 已追加
```

---

## 三、Agent 详细设计

### 3.1 🧠 主管 Agent (coordinator)

**触发**: 每天 07:07、22:07（launchd 定时）

**决策流程**:

```
1. git pull 同步最新代码
2. 读取 游戏站点统计.md → 了解各站状态
3. 调用监控 Agent → 获取 PV 排名和重点标记
4. 读取 .agent/candidate-pool.md → 检查候选池

5. 决策矩阵:
   ┌────────────────┬─────────────────────────────────────┐
   │ 条件            │ 行动                                │
   ├────────────────┼─────────────────────────────────────┤
   │ 候选池空        │ 调度侦察 Agent → 搜索新游戏           │
   │ 候选有分≥15     │ 调度关键词 Agent → 调度建站 Agent     │
   │ 重点站内容<25   │ 调度建站 Agent (expand mode, +5篇)    │
   │ 候选池低分      │ 不行动，等待更好的游戏                 │
   │ 一切正常        │ 输出状态报告，结束                     │
   └────────────────┴─────────────────────────────────────┘

6. 汇总本轮行动 → 更新统计文档
7. git commit + push（如有变更）
```

**输出**: 本轮行动摘要（做了什么、为什么、结果）

---

### 3.2 🔍 侦察 Agent (discover-games)

**触发**: 主管按需调用

**数据源**:
- Steam 热门新游 / 愿望单 / 即将推出
- SteamDB 趋势
- r/gachagaming（手游）
- Roblox 热门榜

**流程**:
```
1. 并行搜索多个来源
2. 按 SOP 五条标准筛选
3. 对 Top 5 检查 Wiki 覆盖
4. 四维评分（搜索需求/生命周期/内容量/竞争）
5. 输出候选清单到 .agent/candidate-pool.md
6. 排除已建站的游戏（检查目录名）
```

**输出**: 候选清单（评分、理由、风险）

---

### 3.3 🔑 关键词 Agent (harvest-keywords)

**触发**: 主管指定游戏名时调用

**流程**:
```
1. 用 10 种前缀 + 游戏名调用 Google Suggest API
2. 去噪：剔除明显无关的词
3. 分类：How-to / Best / Weapons / Build / Beginner / Co-op
4. 计算噪声率、有效关键词数
5. 产出内容优先级建议
6. 保存到 keyword-results/{GameName}.md
```

**输出**: 关键词报告 + 内容优先级列表

---

### 3.4 🏗️ 建站 Agent (build-game-site)

**触发**: 主管按需调用

**两种模式**:

| 模式 | 输入 | 做什么 | 攻略数 |
|------|------|------|:--:|
| **new** | 游戏名 + 关键词 | 创建新站 + 首发攻略 | 10-15 |
| **expand** | 站点名 + 篇数 | 给已有站补充攻略 | 3-10 |

**流程 (new 模式)**:
```
1. 读取关键词报告 → 确定内容优先级
2. 复制模板 → 项目初始化 → 12 文件配置
3. 写 {N} 篇攻略
4. 创建 AdSense 合规页面
5. Gate 检查 (build + deploy + cleanup)
6. npm install → npm run build
7. Vercel 部署
8. Dashboard 注册
9. 更新统计文档 + build-history.json
```

**流程 (expand 模式)**:
```
1. 读站点现有攻略 → 找缺口
2. 写 {N} 篇攻略
3. Gate 检查 (deploy gate)
4. Vercel 部署
5. 更新统计文档
```

---

### 3.5 📊 监控 Agent (monitor-performance)

**触发**: 主管每天调用

**流程**:
```
1. 调用 Dashboard 诊断 API → 获取 PV 数据
2. 按 PV 分级:
   ⭐⭐⭐ PV > 500   → 核心站，每周补充 5 篇
   ⭐⭐   PV > 100   → 成长站，每周补充 3 篇
   ⭐     PV > 10    → 普通站，有缺口时补充
   -     PV < 10    → 孵化中，等 Google 收录
3. 标记到统计文档的重点列
4. 返回需要补充内容的站点列表
```

**输出**: PV 分级 + 内容补充建议

---

## 四、协作流程示例

```
22:07 主管定时启动
│
├─ git pull → 代码已最新
├─ 调用 监控Agent → PV 数据:
│   The Mound ⭐⭐ (150), SpiritVale ⭐⭐ (120)
│   Witchspire ⭐ (45), Mistfall ⭐ (38)
│
├─ 读取候选池 → 空
│   → 调度 侦察Agent: 搜索新游戏
│
├─ 侦察Agent 完成:
│   发现 3 个候选: Dark Frontier (17分), Shadow Realm (15分), Pixel Tales (11分)
│   → 保存到 candidate-pool.md
│
├─ Dark Frontier 17分 ≥ 15 → 自动触发流水线
│   → 调度 关键词Agent(Dark Frontier)
│   → 返回 72 个关键词, noiseRate 18%
│   → 调度 建站Agent(Dark Frontier, new, 12篇)
│   → Gate 全部通过 → 部署成功 ✅
│
├─ 检查重点站:
│   The Mound 28篇 (>25) → 跳过
│   SpiritVale 27篇 (>25) → 跳过
│
├─ 更新统计文档 → Dark Frontier 加入
├─ git commit + push
│
└─ 输出摘要:
   本轮: 侦察(1候选) + 建站(Dark Frontier, 12篇)
   重点站状态: The Mound 28篇⭐, SpiritVale 27篇⭐
```

---

## 五、为什么不做的

| 不做的事 | 原因 |
|------|------|
| 独立 SEO Agent | SEO 能力融入建站/监控 Agent |
| 独立审核 Agent | 审核改为嵌入建站 Agent 的 Gate 机制 |
| 跨站互链 | Google 可能认为是 link scheme |
| 外链建设 | 风险大于收益，等自然积累 |
| 关键词域名 (EMD) | Google 不再给域名关键词加分，甚至可能惩罚 |
| 上下文共享 | 每个 Agent 独立上下文是核心优势 |

---

## 六、与当前架构的对比

| 维度 | 当前（单 Agent） | 目标（多 Agent） |
|------|------|------|
| 游戏发现 | 建站流程的一个步骤 | 独立 Agent，可单独运行 |
| 关键词收割 | 嵌入建站流程 | 独立 Agent，可被复用 |
| 建站 + 内容 | 耦合在一起 | 合并为一个 Agent，两种模式 |
| PV 监控 | 手动查看 Dashboard | 独立 Agent，每天自动运行 |
| 上下文 | 一个回合做所有事，认知污染 | 每个 Agent 独立上下文 |
| 失败恢复 | 全局重试 | 单个 Agent 重试，不影响其他 |
| 并行能力 | 串行 | 侦察 + 关键词可并行 |

---

## 七、实现计划

### 需要新建的 Skill 文件

| 文件 | Agent | 优先级 |
|------|------|:--:|
| `.claude/skills/coordinator.md` | 🧠 主管 | P0 |
| `.claude/skills/discover-games.md` | 🔍 侦察 | P0（已有，需更新） |
| `.claude/skills/harvest-keywords.md` | 🔑 关键词 | P0（新建） |
| `.claude/skills/build-game-site.md` | 🏗️ 建站 | P0（已有，需重构） |
| `.claude/skills/monitor-performance.md` | 📊 监控 | P0（新建） |

### 需要新建的共享文件

| 文件 | 用途 |
|------|------|
| `.agent/candidate-pool.md` | 候选游戏池 |

### 需要更新的现有文件

| 文件 | 变更 |
|------|------|
| `auto-build-site.sh` | 调用 coordinator 而非 build-game-site |

---

> **下一步**: 按实现计划逐个创建/更新 Skill 文件。
