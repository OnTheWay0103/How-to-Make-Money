# Anomaly President — Google Suggest 关键词调研报告

> 任务: KWRD-ANOMALY-PRESIDENT-2026-09-03（BUILD-007）
> 采集日期: 2026-09-03（EA 满月当天；8/3 EA 上线 → 今日满月）
> 采集方法: Google Suggest API（`suggestqueries.google.com/complete/search?client=chrome`），4 组种子词 + 12 单字母扩展 = ~36 请求，间隔 ≥1 秒
> 数据源状态: Google Suggest 可用（全部 HTTP 200，未触发限速）；WebSearch 补充竞争扫描与意图推断
> 原始建议条数: ~60（去重后 ~52 词）| 噪声: ~12 词 | 有效游戏词: ~40
> 备注: 游戏为土耳其开发者作品，Suggest 命中大量土耳其语词（satış/fiyat/indir/kaç saat/ekşi）→ 印证 TR 玩家盘活跃，但本站内容为英文，英文 SEO 意图用 WebSearch + 评测/商店页推断补足

---

## 〇、游戏事实基准（2026-09-03 核验）

| 项 | 值 | 来源 |
|----|----|----|
| 名称 | Anomaly President | Steam 商店页 |
| 开发者 | Phew Phew Games（Anomaly Agent 同工作室，"Anomaly Universe"） | Steam / 评测 |
| 发行商 | Phew Phew Games, Gamedev.ist, Gamersky Games | Steam |
| 类型 | 总统竞选 roguelike 动作（白天竞选管理 + 夜间横版动作双循环） | Steam |
| 上线 | 2026-08-03 Early Access（Steam App 3156330） | Steam |
| 价格 | $14.99 基础（首发 -20% ≈ $11.99，首两周后 8/17 回升） | GameBrief / Virtual Grip |
| 口碑 | Very Positive，91% of ~1,334（9/3 时点，全时段） | Steam 商店页 |
| 语言 | 12 种全配音全字幕（含简/繁中、英、日、土、韩等） | Steam |
| 平台 | PC Windows（Steam Deck Verified，Virtual Grip 实测引用 Valve 认证） | Steam / Virtual Grip |
| 竞品 wiki | 零组织化 wiki（英/中/日）；仅 2 篇轻量第三方攻略（文章级） | 侦察 |

---

## 一、竞争快速扫描（WebSearch + 侦察复核）

- 组织化 wiki（Fandom/Fextralife/wiki.gg/独立 wiki）：**英/中/日零 wiki**（侦察 BUILD-GATE 复核）
- 文章级攻略：仅 **2 篇轻量第三方攻略** + 多家评测（GameBrief 7.5/10、Best of Games 8.2/10、MKAU、Virtual Grip、CultureCombine impressions、Gaming Coffee、N-Gamz Deck 测试、Kotaku ES）
- 玩家社区：Steam 评测区活跃（~1,300 评测 91-92%）；土耳其玩家盘显著（Suggest 土语词密集）；Reddit/Steam 讨论区存在但无系统性 wiki
- 差异化结论：评测已铺、wiki 真空。建站主攻**机制系统化长尾**（双循环/Fluffy/巴士房间/Anomaly Powers/武器），单篇评测覆盖不了的深度。玩家搜 "wiki" 已命中 → 站名直接吃 `anomaly president wiki` 需求

**SEO 关键发现**：
- `Anomaly President` 名字偏独特，同名污染 = Persona "Shadow Anomaly" 等弱噪声（已归噪声），可控
- 存在强相关变体：**Anomaly Agent**（前作，玩家会搜关系）、**Anomaly Universe**
- "anomaly president ps5 / switch / platforms / mobile" = 高频疑问（答案=暂无主机版），FAQ/平台页覆盖
- "kaç saat"（土语 = how long）→ game-length 意图

---

## 二、有效游戏关键词（~40 词，按意图分类）

> ✅ = 高置信（Suggest 直击或评测/商店页佐证）；◐ = 中置信（意图推断）

### A. 身份 / Wiki 类（7 词）✅
- anomaly president / anomaly president game / anomaly president gameplay
- anomaly president wiki（**Suggest 直击 = 玩家在找 wiki**）
- anomaly president steam / anomaly president steamdb / anomaly president steam charts
- anomaly president metacritic / anomaly president score / anomaly president review（评测需求）

### B. How-to / 玩法操作类（6 词）✅ ◐
- anomaly president how to play ◐
- anomaly president beginner guide ◐（双循环入门 = 最高意图主题）
- anomaly president controls ◐（操作/键位）
- anomaly president tips ◐
- anomaly president demo（**Suggest 直击**；demo indir 土语）
- anomaly president download / free download / pc download ◐（免费下载 = 盗版/误搜，FAQ 覆盖「无免费版，EA 付费」）

### C. 发售 / 平台 / 价格 / 信息类（11 词）✅
- anomaly president release date（Suggest 直击）
- anomaly president price / fiyat（土语价格） / kaç tl（土语=多少钱）
- anomaly president ps5 / anomaly president switch / anomaly president ps4 / anomaly president playstation / anomaly president nintendo switch（**高频主机疑问，答案=暂无主机版**）
- anomaly president platforms
- anomaly president mobile（无移动版 → FAQ）
- anomaly president system requirements ◐
- anomaly president player count / satış sayısı / ne kadar sattı / kaç sattı（土语销量，玩家关心 EA 表现）

### D. 游戏系统专属词（6 词）✅ **——差异化长尾核心**
- anomaly president campaign（白天竞选/投票管理）
- anomaly president boss（**Suggest 直击**）→ 副总统 Boss / 能力窃取
- anomaly president fluffy（**Suggest 直击**）→ Fluffy 养成（招募/部门/照料）
- anomaly president combat（夜间战斗）
- anomaly president weapons ◐（武器/双持）
- anomaly president build ◐（流派：swordmaster / cyber mage / 元素冰火电）

### E. 时长 / 内容状态类（5 词）✅ ◐
- anomaly president how long / kaç saat（土语=多少小时）◐
- anomaly president roadmap ◐
- anomaly president update / patch notes ◐（8/20 首月更新 [Unconfirmed]）
- anomaly president early access
- anomaly president review（复归 B）

### F. 关联 / 社区类（5 词）✅ ◐
- anomaly president reddit（口碑/值得买讨论）
- anomaly president discord（官方社区）
- anomaly president trailer（**Suggest 直击**；japanese trailer）
- anomaly president game engine ◐
- anomaly president epic games ◐（无 Epic 版 → FAQ）

### G. 关联游戏 / 竞品意图（2 词）◐
- anomaly agent（前作关系）
- games like anomaly president / anomaly president similar games ◐

---

## 三、噪声词（已剔除，~12 词）

| 词 | 原因 |
|---|---|
| anomaly scan price in india / pregnancy scan / congenital anomaly scan philippines | 医疗「anomaly scan」语义，完全无关 |
| shadow anomaly tv president weakness (persona 5) | Persona 5 内容，同名弱噪声 |
| faces of all presidents / impeached presidents of philippines | 政治通用词 |
| enis kirazoğlu / ekşi（单列土语论坛名保留为社区信号不建页） | 人名/论坛 |
| anomaly agent president metacritic | Anomaly Agent（前作）词条混合 → 归 similar-games |

> 低置信保留：`free download / pc download`（盗版意图，归 FAQ「正版渠道」答案页）；`game engine / epic games`（信息类，FAQ 覆盖，不单建页）。

---

## 四、内容优先级建议（→ 16 篇攻略选题）

有效关键词 ~40 个 → **16 篇**（落在任务 12-16 区间 + Profile 15-18 区间交集内）。

### 分层（按 Profile 三层结构）

**基础层（8 篇）**
1. **beginner-guide** — 双循环系统入门（白天竞选/夜晚战斗）、首个选举周期、巴士基地 → 覆盖 how to play / beginner
2. **controls-settings** — PC 键位 + Steam Deck + 设置项（无难度选项、弹反判定争议）→ 覆盖 controls
3. **campaign-management** — 白天竞选循环：拉票/演讲/形象/电视/卡牌对话 + 迷你游戏 → 覆盖 campaign（**核心差异化**）
4. **campaign-bus-guide** — 竞选巴士基地：房间/模块/升级（卧室/电视演播室/铁匠升级间/拉票间；规划中的 Dance/Gift/Marketing）→ Base Building 支柱
5. **fluffy-guide** — Fluffy 招募/部门（竞选/装备/战斗）/照料（忽视会离开或死）→ 覆盖 fluffy（**Suggest 直击**）
6. **night-combat** — 夜间动作循环：横版清版 + roguelike run 结构、移动/走位/元素 → 覆盖 combat
7. **weapons-guide** — 武器类型/双持/首发武器库（Sword/Nunchucks/Claws/Kusarigama/Staff…）→ 覆盖 weapons
8. **anomaly-powers-guide** — Anomaly Powers 获取（Boss 掉落/永久）+ HEART 案例 → 核心机制

**关键词驱动层（6 篇）**
9. **bosses-guide** — 副总统 Boss 结构、PR 主管（HEART）、roadmap Bigman → 覆盖 boss
10. **enemies-guide** — 敌方类型（红眼暴徒/洗脑狂热者/犀牛状 Boss）+ EA 敌人种类薄争议（诚实标注）
11. **builds-strategy** — 流派（swordmaster 弹反 / cyber mage AOE）+ 元素强度（冰被指过强）→ 覆盖 build
12. **combat-tips-parry** — 实战技巧 + 弹反窗口（批评热点）+ 走位 → 覆盖 tips
13. **patch-notes-roadmap** — EA 状态/更新史/roadmap（8/3 上线、demo、预发布 hotfix、价格 8/17 回升、roadmap 至 9 月新武器敌人）→ 覆盖 update/roadmap/early access
14. **price-platforms** — EA 定价/平台/Deck/语言/配置 → 覆盖 price/platforms/ps5/switch/mobile 疑问（**FAQ 类大簇**）

**辅助层（2 篇）**
15. **similar-games** — 同类游戏（Anomaly Agent 前作、beat-em-up roguelite 如 Absolum 等）→ 覆盖 similar/like
16. **faq** — 综合 FAQ（是否值得买/时长/主机版/免费下载/Epic/进度重置）→ 覆盖 reddit 口碑 + 信息类长尾

---

## 五、给建站协调员的 SEO 落地要点

1. **站名锚点**：`Anomaly President Wiki`；home/站点级描述嵌入 `anomaly president wiki`、`anomaly president guide`、`Anomaly President EA`。
2. **前作流量**：Anomaly Agent 玩家是天然受众 → similar-games + FAQ 各引一处，吃 `anomaly agent` 弱关联。
3. **平台疑问集中处理**：ps5/switch/ps4/mobile 全部「暂无主机/移动版 [Unconfirmed]」→ 放 price-platforms + FAQ，避免单开页自噬。
4. **差异化护城河**：Fluffy/bus/Anomaly Powers/Boss 机制系统化页 = 文章级评测不覆盖的深度，是排名主力。
5. **诚实标注**：EA 未证实项一律 [Unconfirmed]（完整武器库当前状态、8/20 Food Truck 更新、Dance/Gift/Marketing 房间是否已实装、Bigman 是否已上线）。Boss 名/数字 MUST NOT 编造。
6. **合规**：卡通暴力 + 虚构政治讽刺，PEGI 18（评等）/ Steam 内容描述为 "Frequent Violence or Gore, General Mature Content"，无性内容 → AdSense 方向交给合规审计员复核。

---

> 数据来源: Google Suggest API（chrome client，36 请求全 HTTP 200）+ WebSearch 竞争扫描（GameBrief / CultureCombine / Virtual Grip / MKAU / Best of Games / N-Gamz / Gaming Coffee / Mithrie）+ Steam 商店页事实核验（App 3156330）。未编造搜索量；所有词为真实采集或来源佐证意图推断。
