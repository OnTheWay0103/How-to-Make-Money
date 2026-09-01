# BOMBANANA! — Google Suggest 关键词调研报告

> 任务: KWRD-BOMBANANA-2026-09-01
> 采集日期: 2026-09-01（发售前 1 天，9/2 Steam 发售）
> 采集方法: Google Suggest API（`suggestqueries.google.com/complete/search?client=chrome`），3 种子词 × 10 前缀 = 30 请求，间隔 ≥4 秒
> 数据源状态: Google Suggest **全程可用**（30/30 返回 HTTP 200，未触发限速，未降级 WebSearch）— 无数据源降级
> 原始建议条数: 58（去重后 56 词）| 噪声: 6 词 | 有效游戏词: 50
> 噪声率: 10.3%
> 备注: 游戏未发售（明日发售），Suggest 命中集中在发售信息/How-to/手册/模块 4 大簇；玩法长尾词发售后 1-2 周将随玩家搜索爆发

---

## 一、竞争快速扫描（WebSearch 补充，非重复验证）

候选池记录：**零 wiki**（wiki 级真空）。WebSearch 补充发现 **文章级攻略已出现**，说明搜索需求已被初步验证：

- Mobalytics：Beginner's Guide + Module and Callout Guide（文章级）
- allthings.how：Roles Explained（Blind/Mute/Deaf）+ beginner guide
- whisperofthehouse.com：Demo Guide（Roles, Modules, Callouts, Numpad Math, Switch Panels）
- gamehov.com / deltiasgaming.com / mullergame.com：beginner tips / instructions 文章

结论：**wiki 级 = 真空，文章级 = 已有竞争**。建站差异化方向 = 深度体系化（全模块图鉴、手册速查表、三角信息链沟通话术、Free Mode 编辑器说明），单篇攻略无法覆盖的广度。

**SEO 关键发现**：`BOMBANANA!` 名字独特，Suggest 显示 **零同名污染**（无其他 IP 干扰）；存在拼写变体 `bomb banana`（bomb banana game / bomb banana game price）——两种拼法都值得建页。

---

## 二、有效游戏关键词（50 词，按意图分类）

> ✅ = 高置信；◐ = 低置信（保留但标注）

### A. How-to / 玩法操作类（16 词）✅
- how to play bombanana / how to play bombanana game
- how to solve bombanana / how to solve bombanana puzzle
- how to play bombanana with friends / how to invite bombanana
- how to play bombanana as mute
- how to read bombanana manual
- how to play bombanana level 2
- how to emote bombanana
- how to beat bombanana / how to get bombanana / how to understand bombanana
- how to play bombanana demo
- bombanana how to play
- how to play bombanana on mac ◐（mac 支持未确认 → [Unconfirmed]）

### B. 手册 / Guide 类（6 词）✅
- bombanana manual / bombanana manual guide / bombanana manual game
- how to read bombanana manual（可并入 A 或本簇）
- bombanana game guide / bombanana guide
- bombanana guide book ◐（可能是实体手册/攻略书搜索，无其他同名 IP 证据）

### C. 发售 / 平台 / 价格 / 信息类（19 词）✅
- bombanana release date / bombanana game release date
- bombanana price / bombanana steam price / bomb banana game price
- bombanana steam / bombanana steam game / bombanana game steam
- bombanana game ps5 / bombanana game xbox / bombanana game console
- bombanana game where to play / bombanana game size
- bombanana demo
- bombanana game apk / bombanana game android / bombanana game apk download / bombanana mobile ◐（PC-only 游戏，答案=无移动版，FAQ 页覆盖）

### D. Co-op / 多人（3 词）✅
- bombanana co op
- how to play bombanana with friends / how to invite bombanana（与 A 重叠，归 A 亦可）

### E. 游戏系统专属词（3 词）✅ **——差异化长尾核心**
- bombanana switch module（Suggest 真实命中 = 玩家在搜「开关面板模块」）
- bombanana game switches（同上，开关模块）
- bombanana levels（等级系统，官方特性已确认）

### F. 玩法类型 / 身份（3 词）✅
- bombanana gameplay
- bombanana game / bomb banana game（拼写变体，核心身份词）

### G. Solo 类（1 词）✅
- bombanana solo（游戏**强制 3 人、无单人模式** → 这是 FAQ 问题「能不能单人玩」，答案=不能）

---

## 三、噪声词（已剔除，6 词 / 10.3%）

| 词 | 原因 |
|---|---|
| coop or co-op | 通用词，非游戏意图 |
| co-op opening hours | 无关（co-op 作商店名） |
| how to play empire game | 其他游戏 |
| how to play king game | 其他游戏 |
| game guidelines | 通用词 |
| strategy guides for video games | 通用词 |

> 低置信保留：`bombanana book`（无其他同名 IP 证据，疑似实体手册/攻略书搜索，可顺带覆盖不单建页）；`bombanana mobile / game apk / android`（PC-only 游戏，答案是「无移动版」，归入 FAQ 信息页，不是主攻）。

---

## 四、内容优先级建议

**有效关键词 50 个（落在 50-100 区间）→ 推荐 10 篇攻略**（发售后搜索量爆发可扩至 15 篇）。

### Top 5 主题（可直接用作攻略选题）

1. **BOMBANANA! 入门玩法指南（How to Play）** — 覆盖 16 个 how-to 词：基础玩法、如何开始第一局、三角色信息链、节奏与通关目标。（对应 how to play / how to solve / how to beat / level 2 / demo 等）
2. **三角信息链：盲/聋/哑三角色职责与沟通话术指南** — 覆盖 as mute / emote / invite / with friends / understand：手势字典、Deaf 中继话术、方向约定、确认-复诵规则。（**社区实测最高需求主题**，how to play as mute 是 Suggest 直接命中）
3. **全炸弹模块攻略（Wires / D-pad / Numpad / Switch Panels / Braille）** — 覆盖 switch module / switches：每个模块的解法、callout 模板、易错点。（**游戏专属长尾差异化核心**，Suggest 已命中「switch module」，文章级对手 Mobalytics 只有单篇 module 指南）
4. **手册（Manual）使用速查指南** — 覆盖 manual / manual guide / manual game / guide book / how to read manual：Mute 定位手册页、速查表、手势翻译。
5. **发售信息与 FAQ（发售日 / 价格 / 平台 / 配置 / 是否移动端）** — 覆盖 19 个信息类词：9/2 发售日、Steam 独占、PC 配置、无 PS5/Xbox/移动版、Demo 免费、Mac 支持 [Unconfirmed]。（**发售前最高搜索意图**，P0 必须）

### 其余建议选题（补齐 10 篇）
6. **BOMBANANA! Demo 攻略**（demo 600 万玩家 + Next Fest 效应；how to play demo / demo 内容）
7. **Free Mode 自造炸弹编辑器指南**（官方特性「自造炸弹」，无直接命中词但发售后高需求）
8. **Co-op 好友联机与邀请指南**（bombanana co op / how to invite / with friends）
9. **等级系统与进度指南**（bombanana levels）
10. **错误排查 / 常见问题 FAQ**（solo 不能玩、on mac、游戏尺寸、通关时长）

---

## 五、给建站协调员的 SEO 落地要点

1. **站名/标题锚点**：用 `BOMBANANA!`（保留感叹号原貌），同时覆盖拼写变体 `bomb banana`（bomb banana game / bomb banana game price 已在 Suggest 命中）。
2. **无同名污染**：BOMBANANA! 名称独特，裸词即可安全主攻——与 Crimson Moon 完全不同，无需加发行商消歧。
3. **P0 首发（发售日当天/次日）**：Top 5 的 5 篇；`switch module` 与 `switches` 已命中 → 模块攻略尽量随首发上线抢文章级对手的空白。
4. **发售后 1-2 周**：补 modules 图鉴（发售后模块全列表）、Free Mode、等级系统，随搜索量爆发扩到 15 篇。
5. **FAQ 页**：solo（强制 3 人）、移动版（无）、Mac、价格、配置——用 [Unconfirmed] 标注未确认项，遵守诚实标注规则。
6. **内容合规**：拆弹/喜剧暴力题材，无裸体/性内容信号——交由合规审计员（01/02）确认 AdSense 可行性。

---

> 数据来源: Google Suggest API（chrome client）30 请求全量采集（58 原始条目，30/30 HTTP 200，无降级）+ WebSearch 竞争扫描（Mobalytics / allthings.how / whisperofthehouse / gamehov / deltiasgaming / mullergame）。未编造搜索量数据；所有词均为真实采集。
