# Sephiria Wiki — AdSense 提交前改进计划（最终版）

> 2026-08-12 | 基于 ChatGPT 逐篇审查 + 我们自己的 Phase 1 审计 | 29 篇 · PV #1 (6,696/30d)

---

## 核心策略

> **不再合并/删除文章。29 篇可以了。**
> 现在进入「事实核验 + 证据体系 + 去断言」阶段，然后提交。

当前最大的问题不是内容量，而是三点：
1. **模板化 Verification** — 所有页面统一写 "Sources checked: Steam / Community / Player reports"，没有区分官方事实 vs 社区观点 vs 编辑判断
2. **断言过强且无来源** — "community consensus" / "safest weapon" / "community's most respected" 等，没有证据支撑
3. **隐私声明内部矛盾** — §2/§3 说「正在使用 AdSense」，§4 说「intend to apply」

---

## 一、P0：申请前必须修复（3 项）

### 1. 隐私声明统一
- **文件**：`app/privacy/page.tsx`
- **问题**：§2 "This data is collected via ... Google AdSense" / §3 "Display relevant advertisements via Google AdSense" — 与 §4 "We intend to apply ... If approved" 矛盾
- **修复**：§2 和 §3 中所有 AdSense 引用改为 "may be collected via Google AdSense if the site is approved"

### 2. 首页 Steam 评分去固定数字
- **文件**：`content/home-content.md`
- **问题**：写 "94% Positive — ~5,700 reviews"，这是动态变化的数字
- **修复**：改为 "Very Positive on Steam（checked Aug 2026）"

### 3. Full Release Guide 删除评分
- **文件**：`content/guides/full-release-guide.md`
- **问题**：包含旧的 94% / 97% / ~5,700 reviews
- **修复**：直接删除评分/评论数量，这篇文章主题是「1.0 新增了什么」不需要动态评分

---

## 二、P1：证据体系升级（核心改动）

### 目标：把 Verification 从统一模板 → 三层证据体系

**当前（全站统一）：**
```
Sources checked: Official Steam patch notes, Steam Community discussions,
developer announcements, player reports.
```

**目标（每篇差异化）：**
```
Official: 6 weapon types, 6 chapters, 10+ bosses — Steam store page
Community: Crossbow frequently recommended for Hard Mode by players
Editorial: We rank Crossbow A-tier based on range safety + sustain synergy
Last checked: Aug 12, 2026
```

### 需要在以下 8 篇核心攻略中实现：

| 文章 | 需要标注来源的关键数据 |
|------|------|
| **Weapons Guide** | 6 武器类型（Official）/ Tier 排名（Editorial）/ "50+ upgrades per weapon"（Official） |
| **Boss Guide** | 已知 Boss 名（区分 Official vs Community）/ 难度曲线（Editorial） |
| **Chapter Guide** | Chapter 1-3 名和敌人（区分 Observed vs Strategy）/ 66%/33% HP 阶段（需来源或删除） |
| **Hard Mode** | 6 个 modifier 名和效果（Official patch notes）/ 武器推荐（Editorial） |
| **Artifacts** | ~300（Our catalog）/ 具体解锁条件（Community-reported） |
| **Inscriptions** | 推荐解锁顺序（Editorial） |
| **Talents** | Build 方向（Editorial） |
| **Potions** | 推荐携带数量（Editorial strategy） |

**实现方式**：在 GuideLayout 的 Verification footer 中增加 `source` 字段，从 frontmatter 读取。每篇文章的 frontmatter 增加 `sources` 数组。

---

## 三、P2：消除过度断言（逐篇）

以下断言全部改为 "Our assessment" / "Recommended" / "Editorial strategy"：

| 文章 | 当前表述 | 改为 |
|------|------|------|
| Weapons | "Community consensus on the 1.0 meta" | "Our 1.0 Weapon Tier List — based on weapon mechanics, build interactions, and community discussions" |
| Crossbow | "safest weapon in the game" / "community calls it the safest pick" | "One of the safest options for ranged play" |
| Greatsword | "boss shutdown" / "community's pick" / "best boss weapon" | "Recommended for boss-focused play" |
| Staff | "highest-ceiling weapon" / "element-synergy king" | "High skill ceiling with strong element synergy" |
| Sword & Shield | "community's most consistent pick" / "no bad matchup" | "A forgiving all-round weapon for most situations" |
| Costumes | "the community's most respected cosmetic" | 直接删除这句话 |
| Talents | "high-talent account is stronger than a high-skill one" | 删除这句话 |
| Solo | "Greatsword = solo bossing king" | "Recommended for boss-focused solo play" |

---

## 四、P3：结构微调（4 项）

### 1. Co-op ↔ Multiplayer 区分
- **Co-op Guide**：team composition, roles, revive, boss cooperation, build synergy
- **Multiplayer Guide**：hosting, joining, connection issues, ping, desync, disconnect
- 在前言各加一句话说明两篇的区别

### 2. Best Builds 定位调整为 Build Framework
- 不讲具体武器 Build（链接到各武器页）
- 只讲 Build 的组成框架：Weapon + Artifact + Tablet + Talent + Inscription

### 3. FAQ 瘦身
- 删除与已有攻略重复的详细回答
- 只保留 8-10 个全站级问题（what / how many / co-op / price / demo 等）

### 4. Speedrun Guide 弱化标题
- 如果没有 WR/route/split 数据 → 标题改成 "Speedrun Basics & Early Routing"

---

## 五、执行顺序

| 优先级 | 内容 | 预估改动量 | 执行方式 |
|:--:|------|:--:|------|
| 🔴 P0 | 隐私声明 + 首页评分 + Full Release 评分 | 3 文件 | 直接改 |
| 🟠 P1 | 证据体系升级（8 篇核心 + GuideLayout 组件） | 9 文件 | Agent 批量 |
| 🟡 P2 | 消除过度断言（8-10 篇） | ~10 文件 | Agent 批量 |
| ⚪ P3 | 结构微调（FAQ/Best Builds/Co-op-Multiplayer/Speedrun） | 4 文件 | 直接改 |

**P0 → 立即修，修完即可提交 AdSense。P1/P2 → 提交后等待审核期间慢慢改。**

---

## 六、不做的事情

- ❌ 不再合并文章（29 篇已是合理规模）
- ❌ 不加 "I tested this" / "In my experience"（没有就不编造）
- ❌ 不加原创截图（除非真的有）
- ❌ 不把 Updated 日期全部统一（保持真实修改记录）
