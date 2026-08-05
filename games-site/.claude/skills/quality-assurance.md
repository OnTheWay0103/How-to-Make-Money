---
name: quality-assurance
description: ✅ 独立 QA Agent — 内容审核（虚构检测/一致性/残留）+ 基建健康检查。建站后自动触发，也可手动独立运行。对抗验证：假设 Builder 可能出错，以"第二双眼睛"视角审查。
arguments:
  - name: target
    description: 目标站点目录名（如 witchspirewiki）或 "all"（全站扫描）。留空则从 build-history.json 取最近变更。
    required: false
  - name: mode
    description: "quick"（仅审查本轮变更，默认）或 "deep"（全站全量审计）
    required: false
---

# QA Agent — 质量审核

> **设计理念**: 独立于 Build Agent 的"第二双眼睛"。创作和审核由不同 Agent 执行，对抗验证。

---

## 入口判断

```
有 target 参数 → 审查指定站点
无 target 参数 → 读取 .agent/build-history.json 取最近一次 build 的站点
mode=deep    → 全量审计（所有 guide）
mode=quick   → 仅审查本轮变更（默认）
```

---

## Phase 1: 确定审查范围

### 1.1 读取目标

```
if mode == "deep":
  范围 = 所有 *wiki/content/guides/*.md
elif target == "all":
  范围 = 所有 *wiki/content/guides/*.md
else:
  从 .agent/build-history.json 读取最近一次 build
  范围 = 该站点的 content/guides/*.md（如无法确定则全站）
```

### 1.2 确定审查文件

```
quick 模式: 仅审查 build-history 中 guidesAdded > 0 的最近一次变更涉及的文件
deep 模式: 审查目标站（或全站）所有 guide
```

---

## Phase 2: 内容审查

> ⚠️ 这是 QA Agent 的核心价值。Build Agent 容易在创作中"自信地编造"游戏细节。QA Agent 必须假设内容可能有误，主动验证。

### 2.1 虚构检测（每篇 guide 必做）

对每篇 guide 执行：

```
1. 提取游戏特有名词:
   - Boss 名、NPC 名、地点名
   - 武器名、装备名、技能名
   - 职业/角色名
   - 游戏机制（"PvP 模式"、"联机 Co-op"、"New Game+" 等）

2. 对每个名词 → WebSearch 验证:
   WebSearch "{游戏名} {名词}" → 检查是否在官方来源/社区讨论中出现
   
3. 判定:
   ✅ 找到 → 通过
   ⚠️ 找不到但来源有限（小游戏/新游戏）→ "待验证"标记，不阻断
   🔴 明确虚构（如单机游戏声称有 PvP）→ 阻断
```

**特别注意**：以下模式历史上最常出现虚构：
- 声称游戏有 PvP/联机/Multiplayer 而实际是纯单机
- 编造具体的武器/Boss 名称（而非使用通用描述）
- 声称游戏有某系统（如 New Game+、Season Pass）而官方未宣布
- 给游戏编造"DLC"或"扩展包"内容

### 2.2 模板残留检测

```bash
# 在目标站点目录执行
grep -rn "SpiritVale\|Witchspire\|mistfall\|aincrad\|The Mound\|Skills & Raids\|Sephiria\|DinoBlade\|Tears of Metal\|MineGeon\|Mystralia\|Grain Rot\|DragonSword\|Dwarf Delve\|Lunarium\|Taival\|Vahrin\|Relic.*Guardian\|Graphite\|Shift.*Midnight\|Moonlight Peaks\|Bonehold\|Phantom Tower\|Ardent Wilds\|Go-Go Town\|Expeditions.*Samurai\|Delverium\|Low-Budget Repairs\|Big Walk" \
  {site}/ --include="*.tsx" --include="*.ts" --include="*.md" | grep -v node_modules | grep -v "SITE_CONFIG.name"
```

任何非本站游戏名的匹配 → 🔴 模板残留，阻断。

### 2.3 内部一致性（quick 模式做，deep 模式深度做）

```
同一站点的 guide 之间交叉检查:
- Boss 弱点在 boss-guide.md 和 weapons-guide.md 中是否一致？
- 角色/职业名在各个 guide 中拼写是否统一？
- 数值类信息（伤害、价格、冷却时间）是否一致？
- 系统需求在 system-requirements.md 和 faq.md 中是否一致？
```

### 2.4 诚实标注检查

```
检查每篇 guide:
- 是否包含明确不确定但标注了的信息？
  → 应有"待验证"、"截至 X 月 X 日未确认"等标记
- 是否有机翻痕迹？
  → 中英文混用、不通顺的直译
- 是否过度使用 AI 套话？
  → "In the world of..."、"Whether you're a..."、"Remember to..."
```

---

## Phase 3: 基建健康检查

> 即使 Build Agent 报告 Gate 通过，QA Agent 也应独立验证。

### 3.1 构建验证

```bash
cd {site}
npm run build 2>&1 | tail -20
# 必须看到 ✓ Compiled successfully
# Exit code 必须为 0
```

### 3.2 部署可达性

```bash
DOMAIN="{site}wiki.vercel.app"
curl -sI "https://$DOMAIN" | head -1          # → HTTP/2 200
curl -sI "https://$DOMAIN/sitemap.xml" | head -1  # → HTTP/2 200
curl -sI "https://$DOMAIN/ads.txt" | head -1      # → HTTP/2 200
curl -s "$DOMAIN/sitemap.xml" | grep -c "<url>"   # URL 数量 > 0
```

### 3.3 配置检查

```bash
# GA4 ID 非空且非占位符
grep "googleAnalyticsId:" {site}/lib/seo-config.ts
# 必须是 G-XXXXXXXXXX 格式，不能是 G-PLACEHOLDER 或 ''

# GSC 验证文件存在
ls {site}/public/google*.html
# 必须存在至少一个

# SITE_CONFIG.name 正确
grep "name:" {site}/lib/seo-config.ts | head -1
# 必须包含正确的站点名（不能是模板名 "Witchspire Wiki" 等）
```

---

## Phase 4: 输出 QA 报告

### 4.1 写入 `.agent/qa-report.md`

```markdown
## QA Report — {datetime}

### 执行摘要
- 模式: {quick|deep}
- 范围: {N} 站 {M} 篇 guide
- 结果: ✅ 全部通过 | ⚠️ {X} 警告 | 🔴 {Y} 阻断

### 发现清单

| # | 严重度 | 站点 | 文件 | 问题类型 | 描述 | 建议操作 |
|---|--------|------|------|---------|------|---------|
| 1 | 🔴 | xxx | boss-guide.md | 虚构 | Boss 名 "XXX" 未在 WebSearch 中找到 | 删除或替换为通用描述 |
| 2 | 🟡 | yyy | weapons.md | 一致性 | 与 build-guide.md 推荐的武器排名冲突 | 统一两篇 guide 的信息 |

### 基建检查

| 站点 | Build | Deploy | Sitemap | GA4 | GSC |
|------|:--:|:--:|:--:|:--:|:--:|
| xxx | ✅ | ✅ | ✅ | ✅ | ✅ |

### 无问题时

## QA Report — {datetime}

### 执行摘要
- 模式: quick | 范围: 1 站 5 篇 guide
- 结果: ✅ 全部通过

### 基建检查
- Build: 1/1 ✅ | Deploy: 1/1 ✅ | GA4: 1/1 ✅ | GSC: 1/1 ✅

无发现问题。
```

### 4.2 返回结构化摘要给 Coordinator

Coordinator 只需要读这一段就能决策：

```
QA 结果: ✅ PASS (5/5) | ⚠️ WARN (1) | 🔴 FAIL (0)
如有问题: [站点] [文件] [问题简述] [建议]
```

---

## 严重度与 Coordinator 动作

| 级别 | 条件 | Coordinator 动作 |
|:--|:--|:--|
| 🔴 阻断 | 虚构内容、build 失败、部署不可达、模板残留 | **不提交**。等待自动修复或人工介入 |
| 🟡 警告 | 一致性冲突、可疑信息、GA4 占位符、无诚实标注 | **可提交**但记录 issue，下次 deep 复查 |
| 🟢 建议 | SEO 优化、措辞改进 | 不阻塞，纳入 backlog |

---

## 调度规则

### 并行执行

QA Agent 可以和 Build Agent **串行**（Build → QA，因为 QA 需要审查 Build 的输出），但多个 QA Agent 可以**并行**（多站同时审查时各自独立）。

### 失败处理

```
QA 发现 🔴 阻断 → Coordinator 判断:
  - 可自动修复（如模板残留）→ 自动修复 → 重新 QA
  - 需人工判断（如虚构内容难确认）→ 标记，跳过该 guide，提交其余
  - 无法修复 → 回退变更，记录到 knownIssues
```

### Token 预算

- quick 模式: 精简输出，~1-2 轮对话
- deep 模式: 全量扫描，可能消耗较多 token，7 天才跑一次

---

## 独立触发（人工使用）

用户也可以直接调用 QA Agent 做手动检查：

```
/quality-assurance target=witchspirewiki mode=quick
/quality-assurance target=all mode=deep
/quality-assurance  # 默认 quick，审查最近变更
```
