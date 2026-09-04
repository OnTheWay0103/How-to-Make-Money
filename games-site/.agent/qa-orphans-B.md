# QA Report — qa-orphans-B（9/4 中断批次回收）

> 任务编号: QA-RECOVER-9/4-B ｜ 材料版本: 9/4 扩充批次 v1
> 执行: QA 审核员（quick 模式） ｜ 日期: 2026-09-05
> 范围: 2 站 2 篇 guide（sephiria / tearsofmetal），每篇独立审核
> 结果: ✅ 2/2 通过（0 阻断 🔴 / 2 建议级记录项 🟢）

---

## 执行摘要

| # | 站点 | 文件 | 结论 | 编造 | 残留 | 体量(词) | 注册 |
|---|------|------|------|:--:|:--:|:--:|:--:|
| 1 | sephiriawiki | content/guides/coop-freeze-recovery-guide.md | ✅ 通过 | 无 | 干净 | ≈1473 | ✅ 自动注册 |
| 2 | tearsofmetalwiki | content/guides/armor-break-guide.md | ✅ 通过 | 无 | 干净 | ≈1390 | ✅ 自动注册 |

无 🔴 阻断项。两项均为「无来源支撑且未标 [Unconfirmed]」= 0；WebSearch 抽查的高置信断言全部找到真实来源支撑（详见各篇抽查表）。

---

## 审核说明（共同项）

- **注册机制（f）**：两站均用同一 `lib/guides.ts`（内容逐字节相同），`getAllGuides()` 通过 `fs.readdirSync(content/guides)` 过滤 `*.md` 自动注册，无需手工登记；`app/guides/[slug]/page.tsx` 的 `generateStaticParams` 亦来自 `getAllGuides()`。两个新文件均为 `content/guides/*.md`，会被正确注册与预渲染，不会 404。
- **frontmatter 解析**：自定义 YAML parser 已验证可正确解析两文件（sources 对象数组、keywords/related 字符串数组、含内嵌 `'` 的 title/description、长 `text:` 单行）——与站内既有指南同一写法。
- **残留扫描（a）**：跨站游戏名/域名/模板短语（含 The Mound extraction-horror 短语、SpiritVale Studio、NACON、Hugo shortcodes）扫描结果 = 无残留；唯一匹配项是各站自身的游戏名，属合法。
- **对照格式（g）**：sephiria 对照近期 `katana-build-guide.md`（1.0 批次）；tearsofmetal 对照 `crash-launch-fix-guide.md`（9/3 批次）与 `combat-tips.md`。字段齐全：title/description/category/version/updated/keywords/related/sources 顺序与站点惯例一致；`version` 符合各站惯例（sephiria=`"1.0"`，tearsofmetal=`"Early Access"`）；`category: "Guides"` 两站均已有使用（tearsofmetal 18 篇、sephiria 4 篇）。
- **related[] / 正文内链（c）**：所有 slug 在各自站 `content/guides/` 真实存在（sephiria 6 个、tearsofmetal 6 个全命中）。
- **体量（e）**：均在 800–1500 词区间内。
- **诚实标注（d）**：两篇对「单线程报告 / 模型输出 / 无法核实的键位 / 补丁细节」均显式标 `[Unconfirmed]`，无漏标编造项。

---

## 1. sephiriawiki/content/guides/coop-freeze-recovery-guide.md

**游戏: Sephiria（TEAM HORAY，Steam app 2436940，2026-07-31 出 1.0）**
**结论: ✅ 通过（可提交/部署）**

### WebSearch 编造抽查（断言 → 来源）

| # | 正文高置信断言 | 位置 | 抽查结果 | 来源 |
|---|---------------|------|---------|------|
| 1 | Steam 社区帖 "Fun game, but a reeeally bad coop bug" 存在，URL 为 .../2436940/discussions/0/596283752196609510，症状 = 可移动但无法交互/攻击/看不到队友，触发含 anvil/roots tree | L13, L28-30, L48 | ✅ 精确命中（URL 一字不差；症状、升级站触发、开发者回帖索要 log 均吻合） | steamcommunity.com/app/2436940/discussions/0/596283752196609510 |
| 2 | 补丁 1.0.23 (Aug 4) / 1.0.24 (Aug 7) / 1.0.25 / 1.0.28(热修 Aug 14) / 1.0.30 (Aug 20) 的联机 freeze/stuck 修复链 | L11, L50-53 | ✅ 1.0.23=8/4、1.0.24=8/7、1.0.30=8/20 均命中；1.0.24 修「NPC 对话强制移动 freeze」、1.0.25 修 Training Grounds freeze、1.0.28/29 修第 6 章多人卡进度 | news.17173.com（赛菲莉娅 tag，08042026/08072026/08202026）、vgspoilers.com/game/sephiria/patches |
| 3 | 无 reconnect 功能；开发者 late-June 2026 预告 reconnect 开发中 | L59-62, L108-109 | ✅ 命中：VaporLens 负面主题含 missing reconnection；官方 news 帖称 reconnect 需大改网络代码、过渡期可能出 bug | vaporlens.app/app/2436940/sephiria；store.steampowered.com/news |
| 4 | 开发者联系方式 team.horay.game@gmail.com | L92 | ✅ 命中（社区帖内开发者索要录像/log 用的同一邮箱） | steamcommunity 帖 |
| 5 | log 路径 `%USERPROFILE%\AppData\LocalLow\TEAM HORAY\Sephiria\` + Player.log + TEAMHORAY 无空格写法 | L90 | ✅ 与本站已提交 `save-file-guide.md` 完全一致（跨指南一致性通过） | save-file-guide.md (sephiria) |
| 6 | 「room code 首关易 freeze、Steam 好友邀请稳定」workaround | L69 | ✅ 命中（社区帖玩家原话语义一致：邀请制「greatly improved」） | steamcommunity 帖；xboxplay.games/sephiria/how-to-fix-sephiria-multiplayer-not-working-75117 |

### 问题清单

| 文件:行号 | 严重度 | 问题 | 修改建议 |
|-----------|:--:|------|---------|
| coop-freeze-recovery-guide.md:11 | 🟢 | frontmatter sources 将 "Training Grounds freeze" 归入 {1.0.23/1.0.24/1.0.28/1.0.30} 集合，但正文 L51 正确说明该 freeze 是 1.0.25 修复的（1.0.24 仅确认）——frontmatter 压缩表述略失准 | 可选：frontmatter 补一句「Training Grounds freeze 修复于 1.0.25」，与正文对齐 |
| coop-freeze-recovery-guide.md:53 | 🟢 | 「Chapter 5 kick issues 于 1.0.30 修复」具体条目未能在抽查摘要中独立复核（1.0.30 镜像真实存在且被引用，非编造迹象；可能属摘要截断） | 部署后 deep 复查时对 17173 1.0.30 镜像核对该条；如需更稳妥可标 [Unconfirmed] |
| coop-freeze-recovery-guide.md:52, L106 | 🟢 | 「1.0.28 / 1.0.29」并列表述；同站 save-file-guide 已注明「1.0.29 未找到独立补丁记录 [Unconfirmed]」 | 建议统一为「1.0.28（热修）」或对 1.0.29 加 [Unconfirmed]，避免与 save-file-guide 语义打架 |

以上 🟢 均为非阻断、可提交、记录待 deep 复查即可。

---

## 2. tearsofmetalwiki/content/guides/armor-break-guide.md

**游戏: Tears of Metal（Paper Cult，Steam app 1913120，EA 2026-07-22）**
**结论: ✅ 通过（可提交/部署）**

### WebSearch 编造抽查（断言 → 来源）

| # | 正文高置信断言 | 位置 | 抽查结果 | 来源 |
|---|---------------|------|---------|------|
| 1 | 三英雄身份与武器：Wallace=longsword 全能型、Ruadh Stonecrusher=giant hammer、Brienne=unarmed | L76-78 | ✅ 全部命中（EA 首发三英雄 = Wallace / Ruadh Stonecrusher / Brienne Ironleg，武器描述吻合） | thegameswiki.com/tears-of-metal/wiki/playable-heroes、whisperofthehouse.com；并与本站 combat-tips.md / wallace-build-guide.md / ruadh-build-guide.md / brienne-build-guide.md 描述一致 |
| 2 | 装甲敌人 = 血条上方灰条（盾/甲条），普通攻击几乎无效，精英可叠 2–3 层灰条 | L30-40 | ✅ 精确命中（多独立攻略一致：grey bar=shield health；elite 2-3 条；需 armor-breaking combos） | destructoid.com/how-to-defeat-armored-enemies-in-tears-of-metal/、allthings.how/tears-of-metal-how-to-break-armored-enemy-shields/、es/se.moyens.net、dungen.ru |
| 3 | Wallace 的 Block Thrusts = Space + LMB×2（已标 [Unconfirmed] 键位） | L60-66 | ✅ 命中（输入与效果完全一致；键位按诚实标注处理为 [Unconfirmed]） | allthings.how（同文） |
| 4 | 每个英雄/武器（含初始武器）至少有 1 个破甲 combo | L50 | ✅ 命中（含 starter/初始角色亦有破甲技） | allthings.how / destructoid |
| 5 | 补丁 v.0.11.57863 平衡 Act 2 多个 captain 血量/格挡血 | L99 | ✅ 命中（0.11.57863 = 2026-08-01 最大 EA 后补丁；「several Act 2 Captains had their health and block health adjusted」；文中 sword-and-shield 细分已标 [Unconfirmed]） | ingamenews.com/tears-of-metal-patch-0-11-57863…、thegameswiki.com/tears-of-metal/wiki/update-history |
| 6 | 引用的 4 个外部攻略 URL 真实存在 | L40, L134 | ✅ 全部可检索命中（destructoid / allthings.how / es+se.moyens.net / dungen.ru） | 见 L134 引用列表 |

### 问题清单

| 文件:行号 | 严重度 | 问题 | 修改建议 |
|-----------|:--:|------|---------|
| armor-break-guide.md:9-13 | 🟢 | frontmatter sources 仅含 Community + Editorial 两层（无 Official）。正文已诚实说明 Paper Cult 未发布 bestiary/controls reference，故缺 Official 层可自洽；但正文引用了真实官方补丁 0.11.57863 却未给官方源条目 | 可选：补一条 `- tier: "Official"` 引用 Steam/ingamenews 的 0.11.57863 补丁公告，与 body L99 呼应，使三层标注更完整 |

非阻断 🟢；提交前如顺手补一层 Official 源更佳，不补也可接受（无官方机制文档是事实）。

---

## 基建核对（Phase 3 摘要，注册可达性）

| 站点 | 注册机制 | 新文件是否被收录 | 内链/related 命中 |
|------|---------|:--:|:--:|
| sephiriawiki | `getAllGuides()` auto-scan `content/guides/*.md` → `generateStaticParams` | ✅ | 6/6 |
| tearsofmetalwiki | 同上 | ✅ | 6/6 |

两站尚未部署；本次仅做静态注册核对（读代码路径确认），未执行 build/deploy（属主 Agent 部署环节，非 QA quick 范围）。

---

## 返回给 Coordinator 的结构化摘要

```
QA 结果 (qa-orphans-B): ✅ PASS (2/2) | 🟡 WARN (0) | 🔴 FAIL (0)
- sephiriawiki coop-freeze-recovery-guide.md → ✅ PASS（3 条 🟢 记录项，deep 复查 1.0.30 细节）
- tearsofmetalwiki armor-break-guide.md     → ✅ PASS（1 条 🟢 可选补 Official 源）
建议: 本批 2 篇可提交并部署；记录 4 条 🟢 至 knownIssues/下轮 deep。
```
