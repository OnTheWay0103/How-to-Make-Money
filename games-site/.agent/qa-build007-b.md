# QA Report — QA-BUILD-007-B（Anomaly President wiki v3 · batch B）

- **日期:** 2026-09-05
- **模式:** quick
- **范围:** anomalypresidentwiki `content/guides/` 8 篇（9/5 新写）+ 基建核对
- **版本:** anomalypresidentwiki v3（16 指南齐全，尚未部署）
- **结果:** 🔴 1 阻断 / 🟡 4 警告 / ✅ 7 篇通过（其中 1 篇含 🟡）
  - 7/8 PASS · 1/8 FAIL（similar-games-guide.md）

---

## 执行摘要

Batch B 全部 8 篇：残留扫描干净、frontmatter schema 与最新跨站约定一致、related[] 与内链全部有效、正文体量全部落在 800–1500 词区间、诚实标注覆盖率总体良好（patch 史 / Food Truck / Dance-Gift-Marketing / Bigman / Dean 身份 / Epic-GOG-主机-移动版 / 存档重置 / 完整武器库现状均按需标 [Unconfirmed]）。

**唯一致命问题在 `similar-games-guide.md`：**「Algorithmic Games Like Lists」一节声称三个聚合器（Nodal.gg / WeLoveIt.io / WASDland）将 Homebound / Thalia / Curses & Daggers / Power Pets / Penny Blood: Hellbound 列为最接近的算法匹配 —— 但逐一抓取这三个链接页面后，五个名字**无一出现**，实际列表完全不同。属来源归属编造，🔴 阻断部署。

---

## 每篇结论 + 问题清单

### 1. bosses-guide.md — ✅ PASS（含 1 🟡）
- 残留：干净。体量：1030 词 ✓。related[]/内链全部有效。
- 编造抽查：Dean（补丁 v0.5.0.11 一阶段节奏重做 + v0.5.0.16 处决/阶段转换改进）已由 Steam 补丁逐字证实；Bigman（总统最强打手之一，动画曾 WIP）由 CultureCombine 证实且正确标 [Unconfirmed] 是否上线；PR 主管 / 公共事务部长持 HEART、击败 Boss 永久获得能力 = 商店页 + 演示页证实；Dean 身份关联主动标 [Unconfirmed] = 诚实处理。
- 🟡 代词内部矛盾：正文 49-50 行用 **her**（"fall in love with her"），55 行 "He is the first boss"、60 行 "he demonstrates" 用男性代词指同一个 PR chief / 公共事务部长。外部资料（演示覆盖 uvejuegos 等）显示该部长为女性（"She has the anomaly power of HEART"）。建议统一为 she / 中性表述。
- 文件：行号：`content/guides/bosses-guide.md:55` 与 `:60`（He/he → 应为 she 或中立）。

### 2. enemies-guide.md — ✅ PASS
- 残留：干净。体量：964 词 ✓。
- 编造抽查：gangs/brainwashed fanatics 框架 = 官方/发行页证实；ranged "snake" + shielded 敌人减伤 = roadmap 逐字证实（oyungunlugu）；"Viking"/"Gentleman" 工作标题 = CultureCombine 证实；完整敌人名册与两者是否实装均标 [Unconfirmed]。健康+体力+处决系统 = 多评测证实。
- 无阻断问题。

### 3. builds-strategy-guide.md — ✅ PASS
- 残留：干净。体量：975 词 ✓。
- 编造抽查：swordmaster / cyber mage 两个原型 = Steam 商店页原文证实；Ice 过强 vs Fire/Electric = CultureCombine 等多评测证实；v0.5.0.18 Ground Flame 起始伤害提高 + Fire 视觉改进 = Steam 补丁逐字证实；单武器/单能力数值主动标 [Unconfirmed]。
- 无阻断问题。

### 4. combat-tips-guide.md — ✅ PASS
- 残留：干净。体量：959 词 ✓。
- 编造抽查：movement-first 战斗 = Virtual Grip 证实；黄（可格挡）/红（不可格挡）指示 = Respawning 证实；弹反窗口过紧批评 = 多评测证实；v0.5.0.17 "boss ranged attacks cancel during finishers" = Steam 补丁逐字证实；体力破防→处决 = 证实。
- 无阻断问题。

### 5. patch-notes-roadmap-guide.md — ✅ PASS（含 1 🟡）
- 残留：干净。体量：1048 词 ✓。诚实标注：v0.5.0.15 缺档已显式说明；v0.5.0.19+ 标 [Unconfirmed]。
- 补丁逐字核对（吸取 sephiria 1.0.30 教训后最严格核对对象）：**已证实** v0.5.0.11（8/7，Dean 一阶段节奏 + Corrupted School 走廊宝箱）、v0.5.0.13（8/11，回巴士改 D-pad Down）、v0.5.0.14（8/12，Fluffies 夜间入睡）、v0.5.0.16（8/14，Dean 处决/阶段转换 + 新档默认 Borderless）、v0.5.0.17（8/17，Boss 远程攻击在处决动画期间取消）、v0.5.0.18（8/20，Food Truck 上世界地图 + Fire 视觉 + Ground Flame 增强 + Bridge 宝箱）。Roadmap（8/6 发布，三窗口首周/首月/9月）经 oyungunlugu 土语报道逐字证实（蛇/盾减伤、房间内移动房间、Exchange 房间、Merchant Fluffy、9 月新敌人/新武器）。
- 🟡 v0.5.0.12 行（`:51`）：仅版本号 + 日期（8/10）可证，其行内细节（single-reward / black-screen-in-Base-Build / Media Building / Elevator 归零 / Healthy Run 解锁）在 WebSearch 中无法独立复现。来源标注为官方 Steam 补丁，且同表其它 6 行均已逐字证实，故非阻断；建议部署前人工对 Steam News hub 核一次该行。
- 🟢 另：搜索曾浮现 **v0.5.0.10**（处决机制改进）的存在，而表格从 .11 起列且未说明为何不含 .10。若 .10 确为 EA 后补丁，标题"every reported patch"应覆盖或补一句说明。

### 6. price-platforms-guide.md — ✅ PASS（含 1 🟢）
- 残留：干净。体量：950 词 ✓。
- 编造抽查：$14.99 基础 / -20% ≈ $11.99 / 首约两周至约 8/17 = 多源证实（Fanatical / Steam 商店 / 价格追踪）；平台 PC Windows-only + 单人 = 商店页证实；12 语言全配音全字幕 = 商店页逐字证实；最低配置（Win10 / i5-3470 / FX-6300 / 4GB / GTX 660 / HD 7870 / 1GB）= 多源逐字证实；PS5/Switch/mobile/Epic/GOG 无版 = 正确标 [Unconfirmed]；Steam Deck 正反两派（SDHQ 8/18 稳定性批评 vs 多家 Deck Verified 正面）= 两派来源都真实存在，呈现实诚。
- 🟢 可选补充：GameBrief 曾指"官方并未发布 Steam Deck Verified 认证"，指南未提此争议点（姊妹篇 controls-settings-guide 已含 "Verify before assuming Verified" 提示）。非阻断。

### 7. similar-games-guide.md — 🔴 FAIL
- 残留：正文含 "Streets of Rage"（94 行，属"NOT 类比"编辑性内容，合法，非模板残留）。体量：938 词 ✓。
- 🔴 编造/来源归属错误（`:81-82`）：声称三个聚合工具将 **Homebound、Thalia、Curses & Daggers、Power Pets、Penny Blood: Hellbound** 列为"closest algorithmic matches"，并内链 Nodal.gg / WeLoveIt.io / WASDland 三页。实测三页均不含任何一个名字，实际列表不同：
  - WeLoveIt.io：Nine Realms Prologue / NecroBouncer / Death Must Die / Risk of Rain 2 / Heroes of Hammerwatch / Streets of Rogue / UnderMine / Hades…
  - Nodal.gg：Cult of the Lamb / Streets of Rogue / Have a Nice Death / This Is the President / Anomaly Agent / Hades…
  - WASDland：Windblown / Realm of Ink / Lost Castle 2 / UnderMine 2 / BELOW…
  其中 Death Must Die / UnderMine 确实在 WeLoveIt 列表（指南前半句可支撑），但五连名整体为**来源归属编造**。个别名字（Curses & Daggers、Power Pets、Homebound、Penny Blood: Hellbound）作为 Steam 游戏真实存在，但并非出自所引工具。→ 建议：删除或改写该句，改用三页实际出现的名字（Cult of the Lamb、Death Must Die、UnderMine、Hades、Risk of Rain 2、Streets of Rogue、Windblown 等），或仅保留链接并描述 tag 聚类，不再列具体"匹配名"。
- 🟡 Anomaly Agent 段（`:42`）："over 60,000 copies sold" 无任何找到的来源支持；实际报道为 N24 土语新闻 **120,000+ 销量**、GameSensor 估算 **~200,000**。同一句称 Anomaly Agent "Very Positive"，但当前 Steam 约 **95% / ~9,476 评测 = Overwhelmingly Positive**（Very Positive 系早期旧值或简化）。→ 建议改为 "Overwhelmingly Positive with close to 10,000 reviews" 并将销量改为可证数字（如 "over 100,000 copies" 或加 [Unconfirmed]）。
- 编辑性"try X if you like Y"组合（Cult of the Lamb / Skul / Hades / Dead Cells / Death Must Die / UnderMine）均为真实游戏且机制描述合理，不阻断。

### 8. faq-guide.md — ✅ PASS（含 1 🟢）
- 残留：干净。体量：1064 词 ✓。
- 编造抽查：值得买（~91% Very Positive / ~1,300 评测 + 上线时更高 GameRant）= 证实；时长（IGN TR 主内容 ~7h / HLTB ~10h / Steam 均时 ~4.1h / 玩家 14h+）= 证实；单人独占 = 商店页证实；免费 demo = App 4254970 证实；无主机/移动/Epic [Unconfirmed]；存档重置无公告 [Unconfirmed]；无难度选项 = 评测证实。
- 🟢 与静态 `/faq`（app/faq/page.tsx）重叠：FAQ 页为站级综合问答；faq-guide 专注购买决策并显式把快速答案导向 /faq（"the site's FAQ page (/faq) is a good companion"），差异化成立，不算重复。但两页在 price/platforms/demo/elements/difficulty 关键词上有部分交叠，属 SEO 关键词蚕食观察项，非阻断（可提交但留意）。

---

## WebSearch 断言 → 来源表（整批 ≥6 已超额完成）

| 断言 | 指南位置 | 来源 |
|---|---|---|
| Anomaly President = Phew Phew Games，EA 2026-08-03 Steam PC，昼夜双循环 | 全批次 | in.ign.com / automaton-media / playground.ru / gematsu.com |
| v0.5.0.18 (8/20)：Food Truck 上世界地图、Fire 视觉、Ground Flame 增强、Bridge 宝箱 | patch:56 / builds / combat / faq | steamcommunity.com/app/3156330/allnews（v.0.5.0.18 Update） |
| v0.5.0.11 (8/7)：Dean 一阶段节奏 + Corrupted School 宝箱 | patch:50 / bosses:66 | Steam 社区补丁（含 Build Mode 移动房间，roadmap 一致） |
| v0.5.0.13 (8/11) 回巴士改 D-pad Down | patch:53 | Steam 社区 Hotfix v.0.5.0.13 |
| v0.5.0.14 (8/12) Fluffies 夜间入睡 | patch:54 | Steam 社区 Hotfix v.0.5.0.14 |
| v0.5.0.16 (8/14) Dean 处决/阶段转换改进 + 新档默认 Borderless | patch:55 / bosses:67 | Steam 社区 Hotfix v.0.5.0.16 |
| v0.5.0.17 (8/17) Boss 远程攻击于处决动画期间取消 | patch:56 / combat:77 / bosses:92 | Steam 社区 Hotfix v.0.5.0.17 |
| Roadmap（8/6，首周/首月/9月：蛇+盾减伤、Exchange 房间、Merchant Fluffy、9 月新敌人新武器） | patch:78-96 | oyungunlugu.com 土语 roadmap 报道 + culturecombine.com |
| Dean = 真实多阶段 Boss（补丁命名）；身份/辖区未证 → [Unconfirmed] 处理正确 | bosses:63-75 | steamcommunity.com（v.0.5.0.18 公告引 .16/.11） |
| Bigman = 总统最强打手之一，动画曾 WIP，是否上线 [Unconfirmed] | bosses:79-82 | culturecombine.com impressions |
| PR chief / 公共事务部长 = 演示第一 Boss，持 HEART | bosses:53-57 / faq | uvejuegos.com + Steam Demo App 4254970 |
| $14.99 基础 / -20% ≈ $11.99 / 至约 8/17 | price:56-57 / patch:115-118 | fanatical.com + store.steampowered.com/app/3156330 |
| Steam Deck 正反（SDHQ 8/18 不稳 vs 多家 Verified/流畅） | price:65-75 | steamdeckhq.com（Aug 18, 2026）+ n-gamz.com + behindgaming.com + virtual-grip.com |
| 12 语言全配音全字幕 | price:79-84 | vgtimes.com / 商店页 |
| 最低配置逐字 | price:88-99 | vgtimes.com / systemrequirementslab.com |
| Anomaly Agent = 前作，2D action platformer，~95%/~9,476 = Overwhelmingly Positive，Kristal Piksel 最佳主机游戏+最佳音频艺术 | similar:42 | gamesensor.info/app/2378620 + N24.com.tr + Kristal Piksel 2024 获奖报道 |
| Anomaly Agent 销量报道 = 120k+（N24）/ ~200k（GameSensor），非 60k | similar:42 | n24.com.tr + gamesensor.info/app/2378620 |
| 值得买 ~91%/~1,300 + 上线时更高 | faq:38-39 | fixgamingchannel.com + gamerant.com |
| 时长：IGN TR ~7h / HLTB ~10h / Steam 均时 ~4.1h | faq:55-62 | tr.ign.com/anomaly-president/134591 + gamalytic.com/game/3156330 |
| Ice 过强 / Fire-Electric / 黄红指示 / 体力处决 / 弹反窗口批评 | builds / combat / enemies | technetbooks.com + respawning.co.uk + chaptercheats.com + gamebrief.net + culturecombine.com |
| **聚合器五连名不成立（🔴 反证）** | similar:81-82 | WebFetch 实测 weloveit.io + nodal.gg + wasdland.com 三页均无 Homebound/Thalia/Curses & Daggers/Power Pets/Penny Blood: Hellbound |

---

## 基建核对结果（代码级，未跑 build/未部署）

| 项 | 结果 | 说明 |
|---|---|---|
| `lib/seo-config.ts` GA4 | ✅（允许） | `googleAnalyticsId: 'G-PLACEHOLDER'` — 新站待人工 GA4，任务允许。AdSense ID 已填 `ca-pub-7211682665758448`，layout.tsx 已挂 adsbygoogle 脚本。⚠️ 部署前须换真 GA4 ID。 |
| `lib/guides.ts` 自动发现 | ✅ 16 | `getAllGuides()` 读 `content/guides/*.md`，无硬编码 slug；解析器支持本 16 篇的 block-list keywords/related 格式。 |
| `app/sitemap.ts` 自动发现 | ✅ 16 | `getGuideSlugs()` 读目录 → 16 动态路由 + 静态路由全量入 sitemap。 |
| `app/robots.ts` | ✅ | 存在，允许所有、排除 /admin /api/internal、指向 sitemap。 |
| `vercel.json` | ✅ | 存在（nextjs、headers 安全/缓存头）。 |
| `public/ads.txt` | ✅ | 存在，`google.com, pub-7211682665758448, DIRECT, f08c47fec0942fa0`。 |
| `.vercel/project.json` | ✅ | 存在：`prj_jGbFWjorhzh6BOJFpAyPAX67IM8K`，link 已完成。 |
| `.env.local` | ✅ | 已创建（1.3K）。 |
| 残留扫描 | ✅ | guides + app 无他站游戏名/域名/模板短语（唯一命中 = similar-games 编辑性 "Streets of Rage" 反比，合法）；无 CJK。 |
| frontmatter schema | ✅ | 16 篇统一：title/description/category/version/updated/keywords/related + 最新 `sources` 分阶字段（与 9/3 其它站新指南一致，非消费字段，仅信息性）。GuideFrontmatter 类型不含 sources（运行时不消费，无破坏）。 |
| 体量 | ✅ | 8 篇正文 938–1064 词，全在 800–1500。 |
| related[] / 内链 | ✅ | 8 篇 related 与 `/guides/*` 内链全部指向存在的 16 slug。 |

---

## 给主 Agent 的决策摘要

```
QA 结果: 🔴 FAIL (similar-games-guide.md) — 7/8 PASS（bosses/enemies/builds/combat/patch/price/faq），1 FAIL
阻断项: [anomalypresidentwiki] similar-games-guide.md:81-82 「Algorithmic Games Like」把 Homebound/Thalia/Curses & Daggers/Power Pets/Penny Blood: Hellbound 归因于所引三个聚合器 —— 实测三页均无此五名。删除或改用实际页面名单。
警告项:
  - [anomalypresidentwiki] bosses-guide.md:55,60 PR chief/公共事务部长男性代词 He/he 与 49-50 行 her 及外部来源（女性）矛盾
  - [anomalypresidentwiki] similar-games-guide.md:42 "60,000 copies sold" 无来源支持（实报 120k+/~200k）；Anomaly Agent 现为 Overwhelmingly Positive 非 Very Positive
  - [anomalypresidentwiki] patch-notes-roadmap-guide.md:51 v0.5.0.12 行细节未能在 WebSearch 复现，部署前人工核 Steam News hub；另 .10 可能遗漏
  - [anomalypresidentwiki] price-platforms-guide.md:69 可补 GameBrief "官方未发布 Deck Verified 认证" 争议（姊妹篇已提示）
非阻断观察: faq-guide 与静态 /faq 有部分关键词重叠（已显式差异化，留意蚕食）
基建: 全绿（GA4 占位符为新站允许项，部署前须替换）
```

修复优先级建议：similar-games-guide 为唯一 🔴，修复后重跑该篇 quick QA 即可放行；其余 🟡 可随 v3 部署前一次修订一并处理。
