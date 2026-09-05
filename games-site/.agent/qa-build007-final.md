# QA Report — QA-BUILD-007-FINAL（anomalypresidentwiki 收尾 · 最终放行）

- **模式**: quick（问题清单复核 + 全站最终 QA + 部署 + 线上验证）
- **日期**: 2026-09-06
- **范围**: anomalypresidentwiki（BUILD-007 新站，本次首次上线）16 篇指南 + app 静态页
- **审核员**: QA 审核员（05 岗位卡 / 06 Profile）
- **审查材料**: HEAD（main @ 93f3e1f）工作树；QA-A / QA-B 报告所列问题逐一核实
- **结果**: ✅ **PASS**（🔴 0 · 🟡 0 遗留阻断 · 🟢 2 建议）

---

## 执行摘要

QA-A（batch A 8 篇）与 QA-B（batch B 8 篇）列出的全部问题已逐条核实：**1 个 🔴（similar-games 聚合器五连名编造）与 5 个 🟡/🟢 此前已修且本次经独立 WebFetch/WebSearch 复验通过**；另 2 个 🟡 本次直接修正（controls-settings 难度选项误引 GameBrief；patch-notes v0.5.0.10 遗漏补全）。全站残留干净、schema 统一、内链 0 BROKEN、体量全合规、编造抽查 ≥6 条核心断言全部证实。本地 `next build` PASS，`deploy-wiki-site.sh` 已产出新部署 URL（健康检查段出现已知良性竞态），线上核心页全部 200 + sitemap 收录 16 slug。

---

## 一、问题核实表

| # | 来源 | 问题 | 状态 | 说明 |
|---|------|------|:--:|------|
| 1 | QA-A#1 🟡 | controls-settings v0.5.0.17 版本归因不精确 | **确认无需改** | 现表述 "…input that had a bug fixed in v0.5.0.17"。本轮 WebSearch 复验 v.0.5.0.17 (8/17) 官方 hotfix 原文 = "The 'Special Attack at Combo End' input **no longer disappears** after performing another attack"。归因 v0.5.0.17 **准确**，无需再改（QA-A 建议的 .16 反而会引入错误）。 |
| 2 | QA-A#2 🟡 | controls-settings 难度选项误标 [GameBrief]（GameBrief 原文未谈难度） | **本次修** | 本轮 WebFetch GameBrief 原文确认全文**无任何 difficulty 讨论**。已将该处引用 `[GameBrief, Community]` 改为 `[Community]`，保留 "per reviewer consensus"。 |
| 3 | QA-A#3 🟢 | controls-settings frontmatter sources 缺 GameBrief 却正文引用 | **已随 #2 解决** | #2 移除正文 GameBrief 引用后，正文与 sources 不再错配（全文已无 GameBrief 标签；部署后 curl 验证 0 命中）。 |
| 4 | QA-A g 节 🟢 | 静态 /faq Steam Deck 单边（仅 Verified） | **已修（前次）** | app/faq/page.tsx 平台问答现并列 SDHQ 8/18 反方（"unstable frame rates and roughly 17W power draw"）。 |
| 5 | QA-A 跨页 FYI | /faq "no voice acting" vs "full audio" 内部张力 | **已修（前次）** | /faq 现统一口径：difficulty 问答改为 "Voice acting is present: … full audio for all 12 supported languages"，与语言问答一致，无自相矛盾。 |
| 6 | QA-B 🔴 | similar-games-guide「Algorithmic Games Like Lists」五连名（Homebound/Thalia/Curses & Daggers/Power Pets/Penny Blood）归因于 Nodal/WeLoveIt/WASDland | **已修（前次）+ 本轮复验** | 本轮逐一 WebFetch 三个聚合页：三页**均不含**五名；指南现列名单与三页实测一致——WeLoveIt（Death Must Die/Risk of Rain 2/UnderMine/Hades）、Nodal（Cult of the Lamb/Streets of Rogue/Have a Nice Death）、WASDland（Windblown/Realm of Ink/Lost Castle 2）。部署后 curl 验证五名 0 命中、实名多命中。 |
| 7 | QA-B 🟡 | similar-games Anomaly Agent 销量 60k 无源 + Very Positive | **已修（前次）+ 本轮复验** | 现为 "Overwhelmingly Positive (about 95%, ~9,500 reviews)" + "more than 120,000 copies sold (N24)"。本轮 WebSearch 证实 N24/Forbes 报道 **120 bini aşkın satış**（120k+）；95%/9.5K 由 QA-A/B 已证。 |
| 8 | QA-B 🟡 | bosses-guide PR chief 代词 he/her 混用 | **已修（前次）** | 现 49-50 行 her、55 行 She、60 行 she 统一女性。本轮佐证：demo 商店描述 "Minister of Public Relations **and her** lovely friend"；GameBrief 原文 "makes people fall in love with **her**"。 |
| 9 | QA-B 🟡 | patch-notes v0.5.0.12 行细节不可复现 | **已修（前次）+ 本轮复验** | 指南已加 Steam News hub 复验说明；本轮 WebSearch 复验官方 hotfix 原文：single-reward 屏修复、Base Build 黑屏修复、Media Building + difficulty 调整、Elevator 归零、early Permanent Upgrades 改价、"Healthy Run" 初始解锁——**逐项吻合**。 |
| 10 | QA-B 🟢 | patch-notes v0.5.0.10 未说明 | **本次修** | 本轮确认 v0.5.0.10 = 真实 EA hotfix（8/6，dlcompare 更新日志 + Steam 公告均列）。已补 v0.5.0.10 表格行（蛇/盾/Speedy 减伤、处决机制改进、键位修复、Health 永久升级前两项降价、Media Building 调整、Ground Slam 增伤）+ 说明 .07–.09 与 Demo Hotfix #3 只见于 store-tracker 无已核 changelog。frontmatter sources 同步改 "(v0.5.0.10 through v0.5.0.18)"。 |
| 11 | QA-B 🟢 | price-platforms Deck 双观点 + 可选 GameBrief 争议 | **确认无需改** | 指南已并列 N-Gamz/Behind Gaming（Verified/流畅）与 SDHQ 8/18（不稳）双观点。可选加注 "GameBrief 称官方未发 Verified 认证" **未采纳**——本轮 WebFetch 证实 GameBrief 全文未谈 Steam Deck，引用将构成新编造。 |
| 12 | QA-B 🟢 | faq-guide 与静态 /faq 关键词重叠（蚕食观察） | **确认无需改** | 差异化已显式建立（faq-guide 购买决策 + 导流 /faq），非阻断观察项。 |

---

## 二、QA quick 结论

### 1. Residue 扫描 — ✅ CLEAN
- 范围：`content/guides/` 16 篇 + `app/` 全部静态页 + `lib/` + `components/`。
- 他站站名/游戏名（witchspire/mistfall/aincrad/themound/sephiria/tearsofmetal/grainrot/spiritvale 等 30+ 词）：0 命中。
- 他站域名/模板短语（cursed jungle / SpiritVale Studio / NACON / cooperative PvE 等）：0 命中（唯一 vercel.app 命中 = 本站 own domain，privacy/terms/seo-config，合法）。
- CJK/假名/韩文：0 命中。Hugo shortcode / `{{ }}` / 模板残留：0（metadata.ts 两处命中为 TS `??` 运算符，误报）。EXPAND/BUILD/QA 编号泄漏：0。
- similar-games 中 "Streets of Rage" / "Crusader Kings" 为编辑性反比/类比，合法（QA-B 已裁定）。

### 2. Frontmatter schema — ✅ 16/16 统一
title/description/category/version/updated/keywords/related/sources 全键存在，block-list 格式与解析器一致。

### 3. 内链 — ✅ 0 BROKEN
- `related[]`：73 条全部指向存在 slug。
- 正文 `/guides/*` 内链：143 条全部指向存在 slug（16/16 文件逐一验证）。

### 4. 体量（去 frontmatter 正文词数，要求 800–1500）— ✅ 16/16
| 指南 | 词数 | 指南 | 词数 |
|---|--:|---|--:|
| anomaly-powers-guide | 1086 | faq-guide | 1072 |
| beginner-guide | 1032 | fluffy-guide | 1107 |
| bosses-guide | 1040 | night-combat | 1079 |
| builds-strategy-guide | 971 | patch-notes-roadmap-guide | **1148**（本次补 .10 后） |
| campaign-bus-guide | 1185 | price-platforms-guide | 922 |
| campaign-management | 908 | similar-games-guide | 1011 |
| combat-tips-guide | 965 | weapons-guide | 1020 |
| controls-settings-guide | **1079**（本次删 GameBrief 后） | enemies-guide | 976 |

### 5. 编造抽查（本轮独立 WebSearch/WebFetch，≥6 达标 — 实际 9 项）— ✅
见第三节来源表。重点：similar-games 聚合器名单逐页复验（🔴 清零）；价格/平台/补丁/Boss/语言核心断言全部证实；未证实项均标 [Unconfirmed]。

### 6. 诚实标注 — ✅
Bigman 是否上线、Dance/Gift/Marketing 房间是否实装、完整武器库现状、Viking/Gentleman 是否实装、HEART 机制细节、全 Power 名单、存档重置、Epic/GOG/主机/移动版 —— 全部保持 [Unconfirmed]，未写成已证实。

---

## 三、本轮编造抽查 → 来源表

| # | 断言 | 涉及指南 | 验证结果 | 来源 |
|---|------|---------|:--:|------|
| 1 | 聚合器名单：WeLoveIt=Death Must Die/Risk of Rain 2/UnderMine/Hades | similar-games | ✅ 全部在列（#5/#6/#11/#12）；五连编造名 0 出现 | WebFetch weloveit.io/game/3156330 |
| 2 | 聚合器名单：Nodal=Cult of the Lamb/Streets of Rogue/Have a Nice Death | similar-games | ✅ 在列（#1/#2/#3）；五连编造名 0 出现 | WebFetch nodal.gg/game/anomaly-president-3156330 |
| 3 | 聚合器名单：WASDland=Windblown/Realm of Ink/Lost Castle 2 | similar-games | ✅ 在列；五连编造名 0 出现 | WebFetch wasdland.com/game/anomaly-president-3156330/similar-games |
| 4 | Anomaly Agent 销量 120k+（N24） | similar-games | ✅ "120 bini aşkın satış" | WebSearch → n24.com.tr + forbes.com.tr |
| 5 | Demo 下载 27,000+ | /faq、home | ✅ "more than 27,000 players downloaded it"（Road to EA devlog） | WebSearch（uvejuegos/steam news 聚合） |
| 6 | v0.5.0.12 行细节（single-reward/黑屏/Media Building/Elevator/Healthy Run） | patch-notes | ✅ 逐项吻合官方 hotfix | WebSearch → steamcommunity.com/app/3156330/allnews |
| 7 | v0.5.0.17 = "Special Attack at Combo End" 输入消失修复 + Boss 远程攻击于处决期间取消 | controls、patch | ✅ 官方 hotfix 原文逐字 | WebSearch → steamcommunity.com/app/3156330/allnews |
| 8 | v0.5.0.10 存在（8/6 EA hotfix）及其内容 | patch-notes | ✅ dlcompare 更新日志 + Steam 公告（蛇/盾减伤、处决改进、键位修复…） | WebFetch dlcompare.vn + WebSearch |
| 9 | GameBrief 原文未谈 difficulty、未谈 Steam Deck、使用 "her"（PR chief HEART）、Boss 掉永久 power | controls、bosses、powers、price | ✅ 全文核对：无 difficulty、无 Deck、有 "fall in love with her"、有 "boss fights drop permanent anomaly powers" | WebFetch gamebrief.net/blog/anomaly-president-review-2026 |
| 10 | 无 Fandom/wiki.gg/Fextralife 官方 wiki | /faq、home | ✅ 搜索 0 结果，无矛盾（负向声明，弱证实） | WebSearch |
| 11 | Demo 首个 Boss = Minister of Public Relations（女性） | bosses、faq | ✅ "…Minister of Public Relations and her lovely friend" | WebSearch（uvejuegos / steam news 聚合） |

> 依赖前批已证（QA-A 21 项 + QA-B 大表）未重复的基准：App 3156330、EA 8/3、Phew Phew Games 土耳其、价格 $14.99/-20%/国区 ¥48、12 语言全配音全字幕、最低配置逐字、Steam Deck 双观点、swordmaster/cyber mage、三元素 Ice 过强、Fluffy 三部门、sword/nunchucks…octo-arms 武器清单、v0.5.0.11/.13/.14/.16/.18 各补丁、Roadmap 8/6 三窗口 —— 均不在本轮 4. 范围内与既有证据冲突。

---

## 四、部署结果

- **本地预检**: `npm run build`（Next 16.3.4 Turbopack）→ Compiled successfully / TypeScript PASS / 29 路由静态生成（16 guide SSG + sitemap/robots/静态页）。
- **部署**: `./deploy-wiki-site.sh anomalypresidentwiki`
  - ✅ 新部署 URL 已创建：`https://anomalypresidentwiki-48zape9b2-zhaoq0103s-projects.vercel.app`
  - ⚠️ 脚本在健康检查段截断（未打印 "✅ 部署完成"）——**部署脚本健康检查竞态（良性）**：属已知 sleep-5 alias 传播竞态类。已用 curl 直连生产站复验（见下），内容确为本次新部署（含本次修复标记），判定部署成功。

## 五、线上验证（生产 alias https://anomalypresidentwiki.vercel.app）

| 检查 | HTTP | 结果 |
|---|:--:|---|
| 首页 `/` | 200 | ✅ |
| `/guides/similar-games-guide` | 200 | ✅ 五编造名 0 命中；实名（Death Must Die/Cult of the Lamb/Have a Nice Death/Risk of Rain 2/Windblown/Anomaly Agent）多命中 |
| `/guides/controls-settings-guide` | 200 | ✅ "no difficulty options" 在、GameBrief 标签 0 命中 |
| `/guides/patch-notes-roadmap-guide` | 200 | ✅ "v0.5.0.10" 3 命中（本次补行） |
| `/guides/faq-guide` | 200 | ✅ |
| `/guides/bosses-guide` | 200 | ✅ |
| `/faq` 静态页 | 200 | ✅ |
| `/guides` hub | 200 | ✅ |
| `/sitemap.xml` | 200 | ✅ 24 个 `<loc>` = **16 个 /guides/ slug** + 8 个静态页 |

---

## 六、证据文件路径

- 本报告：`.agent/qa-build007-final.md`
- 修正文件（仅 anomalypresidentwiki 内，均为本轮改动）：
  - `anomalypresidentwiki/content/guides/controls-settings-guide.md`（移除难度选项误引 GameBrief）
  - `anomalypresidentwiki/content/guides/patch-notes-roadmap-guide.md`（补 v0.5.0.10 行 + .07–.09/Demo#3 说明 + frontmatter sources 同步）
- 前次修复（本轮核实未再改动）：`similar-games-guide.md`、`bosses-guide.md`、`patch-notes-roadmap-guide.md`(.12 复验注)、`controls-settings-guide.md`(.17 归因)、`app/faq/page.tsx`(Deck 双观点 / voice acting 口径)

---

## 七、遗留问题与建议（非阻断）

1. **GA4 ID 仍为占位符** `G-PLACEHOLDER`（`lib/seo-config.ts`）——新站允许项，但上线后应尽快替换为真实 GA4 ID 再接流量判断。
2. **补丁号持续演进**：store-tracker 显示 EA 热修已推进至 v0.5.1.x（早于/晚于 .18 的构建号均有）；指南已用 "anything past v0.5.0.18 is [Unconfirmed]" 对冲。下次内容刷新时以 Steam News hub 为准复核最新版本号。
3. **enemies-guide 记 "two" WIP 敌人（Viking/Gentleman）**：部分 Road-to-EA 报道另现 "Werewolf" WIP 敌人。指南归因 CultureCombine（只覆盖两名），严格说不冲突；建议下次扩充时补 Werewolf 或弱化为 "at least two"。
4. **静态 /faq 与 faq-guide 关键词蚕食**：仍为观察项，建议上线后以 GSC 数据复核是否需差异化。
5. 部署脚本健康检查段竞态（本类已知）：建议后续在脚本 `vercel inspect` 前加重试，或改由主 Agent 直接 curl 复验（本次即按此处理）。

---

## 给主 Agent 的决策摘要

```
QA 结果: ✅ PASS（🔴 0 · 遗留阻断 🟡 0 · 🟢 2 建议）
QA-A 3 项: 2 确认无需改（.17 归因经复验准确）+ 1 本次修（GameBrief 误引）→ g 节/跨页 FYI 前次已修
QA-B 🔴: similar-games 五连名编造 确认清零（前次修 + 本轮三聚合页逐页复验 + 线上 0 命中）
QA-B 🟡/🟢: 4 已修（.12 复验注/代词/销量归因/Deck 双观点）+ 1 本次修（.10 补全）+ 观察项
全站: 残留 CLEAN · schema 16/16 · 内链 0 BROKEN · 体量 16/16 (908–1185) · 编造抽查 9 项全证实
部署: 成功（健康检查竞态良性，线上已复验）
线上: 首页/抽查 5 guide//faq//guides 全 200 · sitemap 16 slug 全收录
证据: .agent/qa-build007-final.md
```
