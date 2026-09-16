# EXPAND-9/17 — tearsofmetalwiki 每日扩充报告

> 任务编号：EXPAND-9/17-tearsofmetalwiki
> 材料版本：`.agent/expand-daily.json` @ 2026-09-16 run
> 站点：`games-site/tearsofmetalwiki` | Steam appid **1913120**
> 执行日期：2026-09-17
> 角色：建站协调员 + 玩家反馈分析师

---

## 1. 结果

**PRODUCED** — 1 篇真实反馈驱动的新攻略，已部署并线上验证通过。

| 项 | 值 |
|---|---|
| slug | `visual-clarity-guide` |
| 文件 | `content/guides/visual-clarity-guide.md` |
| 标题 | Tears of Metal Visual Clarity Guide — How to See What's Actually Hitting You |
| 词数 | **1,494 词（正文含表格）/ 600 词（不含表格）** — 复核后压缩，双双 ≤1,500 |
| 选题 | 战斗可读性 / 视觉杂乱 —— 大战场中看不清敌人攻击预警 |
| 依据来源数 | 5 类（官方公告 ×2 + Steam 评测全量 + 豆瓣 + 2UpSkill 设置文档 + 2 篇独立媒体评测） |
| build exit code | **0**（压缩后重新 build，两次均 0） |
| 部署 URL | https://tearsofmetalwiki.vercel.app/guides/visual-clarity-guide |
| 线上验证 | HTTP **200**，**78,121** bytes（非 0），关键文本逐条命中；alias 经 `vercel inspect` 独立确认 |
| 本次另含 | 1 个**校准类改动**：`patch-notes.md` 补 9/8 官方补丁逐字变更日志（下节 9 详述） |

### 1.1 词数裁剪说明（复核后返工）

初版 3,037 词 → 2,148 → 复核要求后压至 **1,494 词**。

- **校准例外不适用**：`visual-clarity-guide` 是**新页**，不满足「对象是既有页」的判定要点①，
  且规则明确把「借『校准』之名把新写的长文塞进来」列为反例 —— 故按 800–1500 正常上限执行。
- **裁剪原则（未删任何已核实事实）**：
  - 官方原文、Steam 评测引语、媒体引语**全部保留**，逐字引文的完整版移入 frontmatter `sources`
    层（该层不计入词数），正文表格只留关键短语指向；
  - 散文/重复铺垫压缩：合并重复 FAQ、删掉整段「Still Missing」元评论、去掉重复铺陈；
  - **细节并入表格**（表格不计词数、信息密度更高）：预警信号表、设置表、官方修复清单均为表格。
- **中途过度矫正的自我修正**：压缩过程中一度把几乎所有内容改写成表格，导致 raw 总词数反而**上升**
  （2,298 / 不含表 778），形态上近似「刷指标」。已回退重平衡，改为**收紧表格单元格**而非扩张表格数量。
- 最终两种口径（含表 1,494 / 不含表 600）**均 ≤1,500**，不存在口径争议。

---

## 2. 选题依据

### 2.1 为什么是「视觉可读性」

四条件核验：

| 条件 | 核验结果 |
|---|---|
| ① 高频（≥3 独立来源） | ✅ **38 条**英文评测触及可读性，其中 **21 条为差评**；另 2 篇独立媒体评测（FR/ES）+ 豆瓣中文评测 |
| ② 具体 | ✅ 可落到「哪种预警→意味着什么→怎么应对」，非泛泛「游戏很难」 |
| ③ 站内未覆盖 | ✅ 全站 `grep -i "clarity\|clutter\|visual noise\|visibility\|colorblind"` = **仅 1 处误命中**（co-op-guide 讲 Threat Level visibility，无关）。`timer` / `reward screen` 全站 **0 命中** |
| ④ 可溯源不编造 | ✅ 见 §2.3，全部断言可回溯；无法确证者标 `[Unconfirmed]` 或写成「玩家请求」而非「功能」 |

### 2.2 关键语料证据（Steam 评测全量，非抽样）

采集方式：`appreviews/1913120?json=1&language=english` 全量翻页，**1,726 条 = 该 app 英文评测池 100%**（18 页，去重后与 `query_summary.total_reviews` 一致），好评率 89.5%（1,545 / 181）。

| 票数 | 时长 | 原文（节选） |
|---|---|---|
| **366** | 25.0h | "The visual clarity in this game is non existent" / "The visual clutter is impossible to see through" |
| **211** | 20.0h | "The indicator for when an enemy is about to attack can get easily lost behind visual effects once you get boons on every attack, and it can be very hard to tell what attack will stagger the enemy vs what they will hyper armor" |
| **88** | 63.0h | "the visual clarity of the combat is essentially non-existent, leading to every death being a 'What killed me?' moment" |
| 43 | 20h | "get hit in the back out of nowhere by some unseen captain off-screen" |
| 27 | 15h | "5 enemy miniboss health bars taking up half the screen" |
| 15 | 11h | "gets too cluttered to be able to clearly see enemies attack prompts by the time you get to Act 3" |
| 8 | 0h | "too zoomed in on the character to have any awareness past the cone in front of you" + "lack options like camera centering hotkeys" + "lack of colorblind support" |
| 3 | 8h | "most the enemy tells are done pretty well except for offscreen cannon people and effing archers" |

**注意**：站上**最高票差评（366 票）与次高票差评（211 票）的主诉都是可读性** —— 这是本站此前完全未覆盖的最大单一痛点，优先级高于任何新版本机制选题。

### 2.3 独立来源清单（全部为直采或我本人核验）

| 来源 | 层级 | 核验方式 |
|---|---|---|
| Paper Cult 官方公告（Steam Community） | Official | `ISteamNews` API 直连成功，36 篇全文；9/8 补丁全文已读 |
| Steam 商店页 | Official | app 1913120 |
| Steam 评测全量 1,726 条 | Community | `appreviews` API 全量翻页，**100% 覆盖** |
| 豆瓣《金属之泪》玩家评测 | Community | 直接抓取，取得中文原句 |
| 2UpSkill 设置文档 | Community | 直接抓取，取得 13 个**真实选项名** |
| 20min.ch（法语 EA 评测，2.5/5） | Editorial | 直接抓取，取得法文原句 |
| Noticias Caracol（西语 EA 评测） | Editorial | 直接抓取，取得西文原句 |

### 2.4 事实核验要点（防编造）

- **设置选项名**全部来自 2UpSkill 实测列举（Display Mode / Resolution / V-Sync / Resolution Scale / Texture Quality / Texture Filtering / Shadow Quality / Volumetric Fog / Lighting / Post Processing / Effects / Anti-Aliasing / Upscaling）。其中 **Motion Blur / Depth of Field / Blood Effects** 站内与社区来源不一致，已标 `[Unconfirmed]`（与站内 low-fps-fix-guide 既有标注口径一致）。
- **「可自定义预警颜色」「色盲模式」「相机居中键」**：全部来自玩家**请求**（诉求证据），**未**写成已实装功能 —— 遵守「反向证据优先」规则。
- **色盲**仅 **1 条**独立报告，正文已明写「仅见单条报告，视为个人无障碍缺口而非已文档化设置」。
- **官方 9/8 补丁**相关断言逐字引用公告原文，未改写、未补版本号（该补丁无版本号，站内既有口径为按日期记录）。

---

## 3. 采集通道状态（如实）

| 通道 | 状态 | 说明 |
|---|---|---|
| Steam 评测 API | ✅ 可用 | `json=1` 必需（缺则该参数下 `cursor` 有值但 `reviews` 空数组）。本轮全量翻页 18 页成功 |
| Steam 官方公告（ISteamNews v2） | ✅ 可用 | 首次超时（exit 28），**重试后成功** —— 印证 Profile「MUST NOT 因一次失败就降级」 |
| Steam 商店页 | ✅ 可用 | — |
| **Steam 讨论区** | ❌ **不可用** | DNS 投毒（解析至 Meta IP `31.13.94.10`、`199.59.149.201`），`curl` 与 `curl --resolve` 均 `HTTP=000`；Cloudflare/Google DoH 亦被阻断；`r.jina.ai` 代理不通。**本轮未采信任何未能直连核验的讨论区引文**（含搜索结果中出现的 "CAN'T SEE!" 帖）—— 未列为来源 |
| Reddit | ⚠️ 无活跃 sub | 按任务说明未依赖 |
| WebSearch | ✅ 可用 | 仅用于**发现**来源，所有入稿引文均经直采复核 |
| 独立媒体评测 | ⚠️ 部分可达 | 20min.ch / Noticias Caracol 直采成功；TheSixthAxis 403、smashpad 无相关内容 |

---

## 4. 部署与线上验证证据链

> 本节为**压缩 + patch-notes 校准之后的最终一轮**证据（前两轮的部署已被本轮覆盖）。

```
build:   pnpm build → ✓ Compiled successfully (Next.js 16.3.4 Turbopack)
         BUILD_EXIT=0（显式打印 "pnpm build EXIT=0"）
         49 static pages | /guides/visual-clarity-guide 与 /guides/patch-notes 均已 prerender
         产物存在性: .next/server/app/guides/{visual-clarity-guide,patch-notes}.html = 2/2 ✓
索引:    live /guides → 36 条唯一 /guides/ 链接 ✓
         live sitemap.xml → 含 visual-clarity-guide ✓ / 含 patch-notes ✓

deploy:  ./deploy-wiki-site.sh tearsofmetalwiki   ← 按更正指令使用封装脚本（未另跑 vercel --prod）
         新部署 https://tearsofmetalwiki-24rrjwdt2-zhaoq0103s-projects.vercel.app
         ⚠️ 脚本输出 "alias → 未知" —— 非「未指向」告警串，但**不足以判定成功**，
            故按下述独立复核为准（HTTP 200 不能证明部署）

alias 复核（独立补做）:
  vercel inspect tearsofmetalwiki.vercel.app
  → 解析到 tearsofmetalwiki-24rrjwdt2-...（即本次新部署 URL，逐字一致）
  → id dpl_4KxgDyA2z6KJGxRJxkfBLXm6BKnk | target production | status ● Ready
  → created 36s ago | Aliases 含 https://tearsofmetalwiki.vercel.app
  ✅ 生产 alias 确已指向本次新部署 → 判定部署成功

线上验证（curl --resolve，DNS 投毒规避）:
  IP 216.198.79.195：/guides/visual-clarity-guide http=200 size=78,121
                     /guides/patch-notes          http=200 size=123,602
                     /guides                      http=200 size=115,234
  IP 216.198.79.131 / 64.29.17.195 / 64.29.17.131 三 IP 交叉复测，两页
  http=200、size 完全一致 → 非单点假象

内容级复核（live，证明是**新**版本而非「旧部署 200」）:
  visual-clarity-guide: 'Not a fringe view: ' ✓ / "Hyper-armour's only test is" ✓ /
    'The levers that reduce the noise' ✓ / 'Two cause reported unfair deaths' ✓ /
    'Fixed Hunt Captain objectives sometimes spawning Captains' ✓
    表格分隔行缺陷串 '|---' = False ✓
  patch-notes: 'Full Changelog — September 8, 2026' ✓ /
    'Companion x3 Barracks upgrade now only requires Companion x2' ✓ /
    'Recorded verbatim, not yet reconciled' ✓ / 'Updated: September 17, 2026' ✓ /
    'Status as of September 17, 2026' ✓ / "Marriott's Whetstone quest item" ✓ /
    'Further optimized grass' ✓ / 'Fixed Oak Barrels sometimes granting the wrong number of Emblem rerolls' ✓
    旧时间戳 'Status as of September 12, 2026' 已消失 ✓
```

**结论：部署生效，非「旧部署 200」误判。**

---

## 5. 已知事实基线遵守情况

- 正文与来源层均按 **7/22 EA 首发即 Steam + Microsoft Store + PC Game Pass 三平台同步、Steam ↔ Microsoft Store 支持 crossplay** 表述。
- **Xbox Series X|S 主机版**明确写为「announced for later in 2026，尚未发售」。
- **未**出现「Steam PC-only / no crossplay」类错误表述（9/11 修正未回退）。
- 「crossplay beta 分支不含 9/8 修复」的取舍提示已交叉链接至 multiplayer-connection-fix-guide。

---

## 6. 去重核验（防自噬）

- 与现有 **35 篇**逐条比对：`combat-tips`（Block/Parry/Dodge/Tells）、`survival-tips`（Parry Windows）、
  `elite-enemy-guide`、`low-fps-fix-guide` 为最近邻。
- 差异点：上述页面讲**机制与性能**；本篇讲**「看不见」这一独立痛点及其缓解手段**，全站此前 0 覆盖。
- 已在正文显式划界并互链：性能问题 → 导向 low-fps-fix-guide；无重复段落。
- **未**触碰 9/5–9/6 刚产出的 `low-fps-fix-guide` / `co-op-revive-guide` 选题。

---

## 7. 待人工处理事项

1. ~~**词数决策**~~ **已闭环**：复核后已压至 1,494 词（含表）/ 600 词（不含表），双双 ≤1,500，无需再决策。
2. **Steam 讨论区通道**：本机对 `steamcommunity.com` DNS 投毒 + DoH 阻断，本轮无法直采。若后续任务强依赖讨论区，需先解决出网（或改用可直连的镜像并如实标注）。
3. **未部署改动**：本轮新增文件**未** `git add`/`commit`/`push`（遵守 MUST NOT）。文件处于 untracked 状态，需主 Agent 决定提交时机。
4. **同批其他 Agent 产物**（非本任务范围，我未触碰）：`grainrotwiki/content/guides/spark-mode-guide.md`、`spiritvalewiki/content/guides/dark-fortress-guide.md`、`keyword-results/spiritvalewiki-expand-9-17.md`。

---

## 8. 已知待清扫面（**只记录，不处理** — 转 QA deep）

> 按任务指令仅登记，本轮**未做任何修改**。

| # | 面 | 规模 | 状态 |
|---|---|---|---|
| 1 | **伪单位系统** | 10 文件 | 待 QA deep 清扫 |
| 2 | **Recruitment Tent** | 8 文件 | 待 QA deep 清扫 |
| 3 | **village-upgrade 精确价格** | 1 文件 | 待 QA deep 核价 |

**附带线索（Barracks 前置条件）→ QA deep 线索 #4**：9/8 官方补丁含
*"The Companion x3 Barracks upgrade now only requires Companion x2, rather than also requiring an upgrade from the previous row"*
—— 涉及 **Barracks 升级前置条件**，可能与站内 `barracks-statues-guide` / `village-upgrade-guide` 的既有表述冲突。
**本轮只在 `patch-notes.md` 逐字记录了官方原文，未改动 barracks / village 任何页面**（按指令：单点改动会制造新的站内自相矛盾，属 QA deep 18 文件清扫面）。
**建议 QA deep 核对**：这两页当前对 Companion x3 前置条件的表述是否与 9/8 官方原文一致。

---

## 9. 校准类改动：`patch-notes.md` 补 9/8 官方补丁逐字变更日志

### 9.1 ⚠️ 先说一条事实更正 —— P0 前提不成立

复核指令称「`patch-notes.md` 内容滞后，缺 2026-09-08 官方补丁，版本历史止于 8/14 v0.14.58630」。
**实测该前提不正确**：该页**早已完整记录 9/8 补丁**，共 4 处，`updated: "2026-09-12"`：

| 位置 | 内容 |
|---|---|
| L3 description | 「…plus the September 8, 2026 Big Bug Fixing Pass (no version number published)…」 |
| L38 版本速览 | `Latest confirmed patch` = **September 8, 2026** — "New Patch - Big Bug Fixing Pass" |
| L58 章节标题 | 「Patch History — Every Confirmed Build (July 22 – September 8, 2026)」 |
| L71 版本表末行 | `**(no version published)**` \| September 8, 2026 \| 完整多人修复摘要 + 「**This is the current build**」 |
| L76 / L239 / L244 | 三条说明 + FAQ 均确认 9/8 为最新公开构建 |

版本表**并未**止于 8/14 v0.14.58630 —— v0.14.58630 之后紧接 9/8 行。故本轮**不存在**「补一个缺失补丁」的动作。

### 9.2 但确实存在一个**窄口径真实缺口** —— 已按校准路径补上

原页对 9/8 的非多人部分只有一句概括：「Also gameplay, economy, saves, objectives, UI/localisation and audio passes.」
经 grep 核实，以下官方条目在改前**全页 0 命中**：`Barracks`(0)、`Status damage`(0)、`Poison Trail`(0)、
`Black Shield`(0)、`Giant II`(0)、`Heart of Wood`(0)、`Oak Barrel`(0)、`Whetstone`(0)。

**改动**：新增 `### Full Changelog — September 8, 2026 (Non-Multiplayer Sections, Verbatim)`，
逐字转录官方公告的 **Gameplay / Shops & Economy / Progression, Saves & Codex / Objectives & Levels /
UI & Localization / Audio & Visuals** 共 **6 节 52 条**（Multiplayer 节因版本表已摘要，不重复）。

- **逐字性保证**：不是手抄 —— 条目由脚本从 `ISteamNews GetNewsForApp v2` 返回的公告原文
  （BBCode `[list][*]`）**程序化提取转换**，规避转录误差。
- **版本/日期/标题与官方一致**：标题 `📜 New Patch - Big Bug Fixing Pass`，日期 2026-09-08 17:05 UTC，
  **无版本号**——页面沿用「by date, not by invented version」的既有处理，未擅自编号。
- **未扩写**：只做逐字转录，**未**添加任何官方原文之外的推断、数值或因果解释。
- **三层来源结构保留**：Official / Community / Editorial 三层未动；Official 层补记
  「re-verified against the live announcement feed September 17, 2026（该公告仍是 feed 最新一条，9/8 17:05 UTC）」；
  Editorial 层注记本次为逐字转录而非新论述。
- **时间戳同步**：`updated` 2026-09-12 → **2026-09-17**；`Updated:` 页首行、
  「version history as it stands on」、Phase 2/3「as of」、「Watch item / Status as of」表头同步更新。
- **Barracks 行**：仅作为官方原文逐字出现在 Gameplay 节内，**未据此改动任何 barracks / village 页面**。

### 9.3 超出 1500 词上限的理由（判定要点③）

本页为**既有页校准**（满足要点①：对象是既有页），增量是**已核实事实**的逐字转录
而非论述扩写（满足要点②）。改动后 `patch-notes.md` 约 4,493 词 —— **超出 1500 上限，理由即本条**：
该页是本站 patch tracker 枢纽，**为凑字数上限而丢弃已核实的官方变更条目，正是规则明令禁止的
「MUST NOT 为凑字数上限而删除已核实的事实」**。故按 9/16 裁定取「保事实」。

### 9.4 本轮改动文件清单

| 文件 | 动作 |
|---|---|
| `tearsofmetalwiki/content/guides/visual-clarity-guide.md` | 新建（压缩至 1,494 词） |
| `tearsofmetalwiki/content/guides/patch-notes.md` | 校准（补 9/8 逐字变更日志 + 时间戳） |
| `keyword-results/tearsofmetalwiki-expand-9-17.md` | 本报告 |

**未** `git add`/`commit`/`push`；**未** 改动 `lib/guides.ts`；**未** 改动 tearsofmetalwiki 以外任何站点。
