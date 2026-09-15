# FACT-SWEEP — tearsofmetalwiki 事实核验专项报告

> 任务编号：`FACT-SWEEP-2026-09-16-tearsofmetal`
> 站点：`tearsofmetalwiki`（Tears of Metal，Steam app **1913120**，Paper Cult，EA 2026-07-22）
> 岗位：内容合规审计员（`docs/agents/01` + `02`）+ QA 审核员（`docs/agents/05` + `06`）
> 上游：`.agent/qa-expand-tearsofmetal-9-16.md` §七 🟡 #1（存量编造嫌疑）
> 性质：**信任修复任务，非内容扩充**
> 执行日期：2026-09-16
> 部署：`dpl_9brAJ4C3AGFiVk9xfc1pAQmQiDdo`（最终；生产别名 `tearsofmetalwiki.vercel.app`）
> 结论：**🔴 已闭合** — 5 个具名 Companion 及全部无依据精确数值已移除；另发现**新的同类系统性问题**（见 §七），因一手/可及来源不可达，按 `[Unverified]` 记录，未凭猜测改动。

---

## 一、取证方法（一手来源，全部实调）

本机 DNS 投毒实测：`tearsofmetalwiki.vercel.app` → `128.242.245.253`（不可达）。所有请求带 `--resolve`。

### 1.1 成功取回的一手/编辑来源

| # | 来源 | 层级 | 结果 | 体量 |
|---|------|------|------|------|
| S1 | Steam 商店页 appdetails（app 1913120） | **官方** | HTTP 200 | 22,485 B |
| S2 | ISteamNews `GetNewsForApp/v1`（**36 条公告全量**，2024-06-07 → 2026-09-08） | **官方** | HTTP 200（首调曾 exit 28，重试成功） | 91,452 B（正文 74,643 B） |
| S3 | `store.steampowered.com/news/app/1913120` 完整新闻页 HTML | **官方** | HTTP 200（首调 HTTP=000，**重试后成功**） | 269,548 B |
| S4 | Steam store news RSS `feeds/news/app/1913120` | **官方** | HTTP 200 | 50,216 B（11 条，最近窗口） |
| S5 | Whisper of the House「Village Upgrades」 | **社区** | HTTP 200（301 跳转后） | 128,417 B |
| S6 | 2UpSkill「Companion Guide: Recruitment and Battalion Mechanics Explained」 | **社区** | HTTP 200（301 跳转后） | 361,187 B |
| S7 | `store.steampowered.com/appreviews/1913120` 评测 API | **社区/玩家** | HTTP 200，分页取回 | **793 条评测（去重 523 条）/ 399,211 B** |

> ⚠️ `api.steampowered.com` ISteamUserReviews v1 → **HTTP 404**（该接口不在该路径）；改用 store appreviews 端点成功。
> ⚠️ ISteamNews **v2** 忽略 `format=json` 返 schema（`newsitems` 为 `{"newsitem":[...]}` 而非数组）—— 解析需按嵌套取，已处理。

### 1.2 不可达来源（**MUST 记「未验证」，MUST NOT 当作「无数据」**）

| 来源 | 两次实测 | 性质 |
|------|---------|------|
| `thegameswiki.com/tears-of-metal/wiki/companions` | HTTP **429**（"Vercel Security Checkpoint"） | 反爬拦截，非内容不存在 |
| `gameshorizon.com` | HTTP **503**（"Your access to this site has been limited"） | IP 限流，非内容不存在 |
| `steamcommunity.com/app/1913120/discussions/` | HTTP **000** | 不可达（与上游 QA 记录一致） |

---

## 二、逐项判定

### 判定口径

- **判定依据的强度**：S2+S3 合计为**官方公告全量**（36 条公告 / 74,643 B 正文，覆盖 2024-06-07 至 **2026-09-08 最新一条**），加 S1 商店页与 S4 RSS；社区侧为 S5（128 KB）S6（361 KB）S7（523 条评测）。
- **关键闭合证据**：官方 v0.12.58540（2026-08-13）把 **Aodh, the Vigil** 作为**「游戏第一位具名 companion」**发布（本站 `patch-notes.md:69`、`co-op-revive-guide.md:32` 亦如此记载）。此后至 2026-09-08 仅剩 2 个补丁（08-14、09-08），全文中**再无任何 companion 名**。→ 官方具名 companion 名单规模极小且可穷举，5 人名单不可能成立。

---

### 项目 1 — 5 个具名 Companion 及其解锁条件/技能效果　→ **判定：无依据（编造）**

| 具名 | 官方全量（S2+S3+S4+S1） | 2UpSkill (S6) | Whisper (S5) | 523 条评测 (S7) |
|------|:--:|:--:|:--:|:--:|
| Fergus the Unyielding | **0** | 0 | 0 | 0 |
| Morag of the Mist | **0** | 0 | 0 | 0 |
| Brochan the Piper | **0** | 0 | 0 | 0 |
| Ailsa the Cursed | **0** | 0 | 0 | 0 |
| Torcall the Unseen | **0** | 0 | 0 | 0 |
| 技能名 Unyielding / Mist Walker / Piper's March / Cursed Blades / True Sight | **0** | 0 | 0 | 0 |
| （对照组）**Aodh** | **3**（官方） | 0 | 0 | 0 |
| （对照组）**Marriott** | 0 | 0 | **有**（"Marriott, leader of Clan McGregor"） | 0 |

**反向证据（决定性）**：
1. 官方 v0.12.58540 明确 Aodh 是**第一位具名 companion** —— 5 人名单时间线不成立。
2. S6 是**专门写 companion 机制的社区长文**（361 KB），描述了 `Unique Companions` 这一**类别**，却**一个 companion 名都没给出**：
   > "Unique Companions … They're handcrafted characters with unique backgrounds, specialized combat abilities, and powerful utility skills"
3. S5 是详尽的村庄升级指南，全程只点名**一个** companion：**Marriott, leader of Clan McGregor**（完成 Tools of the Trade 解锁）—— 不在本站 5 人名单内。
4. S7 玩家侧：全 523 条评测中 5 个名字与 5 个技能名**全 0 命中**；而**两条独立评测**明确说当前版本只有 2 个 companion：
   > "why have I still only unlocked 2 playable characters and **2 companions**, even after getting far into Act 3?"
   > "but right now the game only has **2 companions**. this is the one thing that limits the variety …"

**「community-reported 免责」陷阱判定**：原页虽有免责句，但随后给出 `解锁地点 + 职业 + 技能名 + 技能效果` 的**完整精确表**。免责不能为精确数据背书；且**这些数据连社区来源都无**（本轮实查 S5/S6/S7 全 0）—— 免责句在此不成立，属纯编造。**已整段移除。**

---

### 项目 2 — 兵种基础 HP（Pikeman / Grunt / Shield Bearer / Trebuchet Spotter / Blood-Steel Knight）　→ **判定：无依据**

官方全量 S2+S3+S4+S1 中：`Grunt`=0、`Shield Bearer`=0、`Trebuchet`=0、`Blood-Steel`=0；`Pikeman` 仅 1 处且为**敌方** Captain：

> "Removed the block-breaking effect from **Pikeman Captain II**'s counterattack…"

`Infantry` 亦仅 1 处且为**敌方**：`"Fixed **Infantry Captain II** overshooting his reach attack"`。
社区侧 S6=0；S7（523 条评测）：`Pikeman`=0、`Grunt`=0、`Shield Bearer`=0、`Trebuchet`=0、`Blood-Steel`=0。

**反证（玩家实际词汇）**：S7 评测里玩家描述自家军队用的是 **Infantry / Spearmen / Archers**：
> "build an army of **infantry, spearmen, archers**, and bring a high impact companion to help take back the land of kilts, sheep, and haggis"

命中分布：`Infantry` 4 条、`Spearmen` 1 条、`Archer` 10 条。S5 同样使用 Infantry / Spearmen / Archers（"Infantry for central groups; Spearmen for protected or shielded enemies; Archers for ranged pressure"）。

→ **Base HP 列无任何来源，已删除**；兵种表改用有依据的 troop family 口径（Infantry / Spearmen / Archers）。

---

### 项目 3 — 技能树每级数值（Iron Hide / Sharpened Steel / Battle Hardened / Swift Feet / Veteran's Instinct，含 max 等级与点数消耗）　→ **判定：无依据（编造）**

| 检索对象 | 官方全量 | S5 | S6 | S7（523 条） |
|---------|:--:|:--:|:--:|:--:|
| Iron Hide / Sharpened Steel / Battle Hardened / Swift Feet / Veteran's Instinct | **0** | 0 | 0 | 0 |
| `skill point` | **0** | 0 | 0 | 0 |

5 个技能名在全量官方 + 三个社区来源中**均为 0**。官方只确认「有永久技能」这一层：

> "**IMPROVE YOUR SOLDIERS** — Your soldiers gain permanent skills between campaigns."（S1 商店页）

→ 技能名、每级数值、max 等级、点数消耗、优先级表**全部移除**；仅保留官方可证的三条（技能跨战役保留 / 可 rank up / 损失永久）。

---

### 项目 4 — 各 Act 招募横幅数（Act 1 = 3 / Act 2 = 4 / Act 3 = 2）　→ **判定：无依据**

- 官方 S2+S3：`banner` 56 次命中**全部为 CSS/HTML 样板**（`role="banner"`、`localized_sale_product_banner`），**无一是游戏内招募横幅**。
- S5 / S6 / S7：`banner` 合计 2 次，均与招募数量无关。
- 官方**从未**发布任何 per-act 招募点数量。

→ 三个数字**全部移除**，改为「招募发生在 run 内 + 定居点升级两条轨道」的官方可证描述。

---

### 项目 5 — Tent 各等级解锁表（L1–L4 及解锁内容）　→ **判定：无依据**

- `Recruitment Tent` 在官方全量 / S5 / S6 / S7 中 **全部 0 命中**（该建筑名无任何来源）。
- 官方仅确认「盟友有**等级**」且低等级盟友曾过脆：

> "**Improved the survivability of level 1 allies.**"（官方 2026-08-01 补丁）

→ L1–L4 解锁表**整段移除**；仅保留官方可证的「allies 有 level」与「War Preparation 界面可管理/rank up/Dismiss」。
> 注：官方同补丁另有 `"Fixed the two unit Dismiss buttons filling at different rates in the War Preparation screen."` 与 `"Fixed units disappearing between sessions after being ranked up without entering another level."` —— 这两条是本次替换内容的依据。

---

### 项目 6 — 其他同时清理的无依据项（同页连带）

| 内容 | 判定 | 依据 |
|------|------|------|
| 命令表 Charge / Shield Wall / Volley / Retreat（含 "bars"，1/3 格） | **无依据** | 官方 `Shield Wall`=0、`Retreat`=0；`Charge` 的 5 次命中均为 `Special Charge` / `Morale Beacon` / `Wallace's Committed Charge`，非军团命令。仅 **Volley 官方可证**：`"Fixed the Archers' Volley Ally Command…"` |
| Hero-Soldier 配比表（2 Shield Bearers + 2 Pikemen 等） | **无依据** | 依赖已证伪的兵种体系 |
| "Shield Bearer … **the community's consensus best class**" | **无依据** | 无任何来源；且违反 02 Profile「MUST NOT 保留 community's most respected 类断言」。线上已复验 0 命中 |
| "Retreat ping" / "Move ping" | **无依据** | 官方无 ping 系统记载 |

---

## 三、改动清单（文件:行 → 改前 / 改后）

### 3.1 `tearsofmetalwiki/content/guides/battalion-companion-guide.md`（重写：283 行 → 180 行；diff **+99 / -202**）

> **词数说明**：正文 2,193 词，高于 `04-Profile-建站协调员.md:26`「MUST 每篇 800-1500 词」的**建站**目标。该条约束对象为建站协调员的新建攻略，`02-Profile-内容合规审计员` 无词数规则；本站现有 14 篇正文超过 1,500 词（`achievements-guide` 3,888 / `patch-notes` 3,479 / `solo-guide` 3,730 / `steam-deck-guide` 3,089 等），本次为**存量修正**而非新建，增量来自「来源分层表」与「官方未公布项」显式声明 —— 即合规价值本身。若主 Agent 要求收敛，建议优先裁 §「Permadeath management」的散文段而非来源声明。

| 原行号 | 区块 | 改前 | 改后 |
|--------|------|------|------|
| 39–45 | Soldier Classes 表 | 5 个兵种 + **Base HP** 列 + "Best class" 断言 | **删除**，替换为「来源分层表」（官方商店页 / 官方补丁 note / 社区+评测三层各能证什么） |
| 47 | Recruitment reality | "3 in Act 1, 4 in Act 2, 2 in Act 3" + Tent Level 2+/3+ | **删除数字**，改为「per-act 数量未公布 `[Unconfirmed]`」 |
| 57–61 | Act 招募横幅表 | Act1=3 / Act2=4 / Act3=2 横幅 + 兵种池 | **整表删除** |
| 65–69 | Tent 等级表 | L1–L4 各解锁内容 | **整段删除**，改为官方可证的 allies level / War Preparation / Dismiss |
| 73–83 | Hero-Soldier Pairings | 依伪兵种体系的配比表 | **删除**，改为「Ordinary Allies vs Companions」两系统对照（来源分层标注） |
| 87–97 | Battlefield Roles | Anchor=Shield Bearer 等 5 行伪角色分工 | **整表删除** |
| 101–124 | Skill Progression | 5 个伪技能名 + max 等级 + 点数 + 优先级表 | **整表删除**，改为官方可证三条 + 「技能表未公布」显式声明 |
| 128–162 | Permadeath | 6 条策略表（依赖伪兵种/Tent/ping） | 改写为 5 条不依赖伪术语的规则 |
| **166–198** | **Unique Companions**（🔴 核心） | **5 人名单表 + Priority 排名表 + 5 条解锁提示** | **整段删除**。替换为：官方唯一具名 Aodh（逐字引官方原文）+ 社区类目（2UpSkill）+ Whisper 的 Marriott + 显式声明「本页不列任何 companion 名单」 |
| 202–219 | Battalion Commands | Charge/Shield Wall/Volley/Retreat + bars 表 | **整表删除**；仅保留官方可证的 Archers' Volley |
| 223–242 | Tactical Usage | 3 套依赖伪兵种/伪命令的战术 | **整段删除** |
| 246–255 | Recruitment Priorities | 依伪兵种 + Tent Level | **整段删除** |
| 259–265 | Common Companion Mistakes | 5 条（含 "No Shield Bearer"） | **整段删除**，改入 permadeath/co-op 的正向规则 |
| 1–16 | frontmatter | description/keywords 含 "soldier classes, recruitment banners"；sources 3 条（1 Official / 2 Community / 1 Editorial，无逐字引文） | description/keywords 重写；`sources` 扩为 **9 条（5 Official / 3 Community / 1 Editorial）**，逐条带**官方逐字引文 + 日期 + 补丁号** |
| — | 新增区块 | — | 「What the sources actually name」来源分层表（新增，用于统一全站口径） |

### 3.2 `tearsofmetalwiki/content/guides/progression-walkthrough.md`（2 处，跨文件残留）

| 行 | 改前 | 改后 |
|----|------|------|
| 51 | "Breaking it reveals **Fergus the Unyielding's** shield (see the Battalion & Companion Guide)" | 改为「破坏墙藏战利品」的通用描述 + 显式注明「早期社区写法把某个具名 companion 解锁挂在此处，Paper Cult 从未确认 Act 1 有 companion 解锁，该具体断言视为未验证」 |
| 202 | "**No Soldier Lost** — …（community-reported unlock: **Morag of the Mist**）" | 移除具名，改为「早前版本把某个具名 companion 解锁挂在此目标；官方从未发布 companion 解锁条件，故此处不再主张任何名字」+ 内链 |

### 3.3 `tearsofmetalwiki/content/guides/barracks-statues-guide.md`（口径统一，1 处）

| 行 | 改前 | 改后 |
|----|------|------|
| 79 | "⚠️ Naming caution: … **Paper Cult's own notes use Infantry, Spearmen and Archers**, and name one command outright … **This page uses the official terms.**" ← **口径不一 + 自身过度归因** | 改为分层归因：官方 note 只点名 **Archers** 一条命令（逐字引）；**Infantry / Spearmen / Archers** 的完整词汇来自社区（Whisper of the House）与 Steam 评测；并指出 `Spearmen` 在官方补丁 note 中**一次都没出现**；再指出 `Infantry` / `Pikeman` 在官方是**敌方** Captain；末尾加内链指向 Battalion 页统一口径 |

**为什么必须改 barracks 页**：该页原句把社区词汇包装成「官方用语」，与本轮取证冲突；若不改，两页并存会形成「Battalion 页说未验证 / Barracks 页说是官方」的新矛盾。

---

## 四、全站一致性复扫

```
范围：tearsofmetalwiki/ 全量 *.md / *.tsx / *.ts（排除 node_modules）
```

| 复扫对象 | 结果 |
|---------|------|
| `Fergus\|Morag\|Brochan\|Ailsa\|Torcall\|Unyielding\|Mist Walker\|Piper's March\|Cursed Blades\|True Sight` | ✅ **0 命中**（改前 **17 行**：battalion 页 15 行 + progression-walkthrough 2 行） |
| 伪技能名 `Iron Hide\|Sharpened Steel\|Battle Hardened\|Swift Feet\|Veteran's Instinct\|Shield Wall` | ✅ **0 命中**（改前 **13 行**，全在 battalion 页） |
| `Recruitment Tent` | ⚠️ **8 文件仍有命中**（见 §七，**新发现**，非本次授权范围） |
| 伪兵种名 `Pikeman\|Grunt\|Shield Bearer\|Trebuchet\|Blood-Steel` | ⚠️ **10 文件仍有命中**（见 §七，**新发现**，非本次授权范围） |

**构建产物级复扫**（06 Profile「MUST 做产物级验证，MUST NOT 止于源码阅读」）：

| 检查 | 结果 |
|------|------|
| `.next/server/app/guides/battalion-companion-guide.html`（83,211 B）伪内容 | ✅ 全部 **0** |
| 同文件表格回归（8/12 共享组件分隔符 bug） | ✅ `<table>`=2 / `<thead>`=2 / `<tbody>`=2 / 垃圾分隔单元格 **0** |
| `[Unconfirmed]` 标记（HTML 内） | ✅ **14 处** |
| 全站构建产物内链完整性 | ✅ **0 断链**（35 slug 全命中） |
| `related` 6 个 slug | ✅ 全部存在 |

---

## 五、构建 + 部署 + 线上验证

### 5.1 构建

```
pnpm install   → exit 0
pnpm build     → ✅ 成功，48 个静态页，TypeScript 通过
```
（未用 npm；未用 `next/font/google`——字体仍为 geist 自托管，未改动）

### 5.2 部署

```
最终部署 ID : dpl_9brAJ4C3AGFiVk9xfc1pAQmQiDdo
状态        : READY（target=production）
构建器      : 全局 vercel 58.9.4（**非 `npx vercel`**）
别名        : vercel inspect tearsofmetalwiki.vercel.app → id = dpl_9brAJ4C3AGFiVk9xfc1pAQmQiDdo ✅ 已指向本部署
过程注记    : 首次部署 dpl_4izyQimjCH4PuatDYsG8PgGPCq2L 后，自查发现正文「来源分层表」把 Ally Command 训练归因给了 2UpSkill（实测该站 `Ally Command` = 0 命中），
              遂修正归因（改归 Whisper of the House + Steam reviews，与实测一致）→ **重新构建并重新部署**，最终以本 ID 为准。
```

### 5.3 线上验证（`--resolve` 真实 IP，4 IP 全覆盖）

`dig @1.1.1.1 / @8.8.8.8` → 真实 IP：`216.198.79.131`、`216.198.79.3`、`64.29.17.131`、`64.29.17.3`
（本机投毒 IP `128.242.245.253` 已绕过）

| URL | 216.198.79.131 | 216.198.79.3 | 64.29.17.131 | 64.29.17.3 |
|-----|:--:|:--:|:--:|:--:|
| `/guides/battalion-companion-guide` | 200 / 83,511 B | 200 / 83,511 B | 200 / 83,511 B | 200 / 83,511 B |
| `/guides/progression-walkthrough` | 200 / 80,087 B | 200 / 80,087 B | 200 / 80,087 B | 200 / 80,087 B |
| `/guides/barracks-statues-guide` | 200 / 74,511 B | 200 / 74,511 B | 200 / 74,511 B | 200 / 74,511 B |
| `/` | 200 / 56,677 B | 200 / 56,677 B | 200 / 56,677 B | 200 / 56,677 B |

> **无 HTTP=000 / size=0 记录。**（4 IP 结果逐字一致）

**线上「旧可疑内容已消失」逐项确认**（`/guides/battalion-companion-guide` 实抓 83,511 B，最终部署）：

| 旧内容 | 线上命中 |
|--------|:--:|
| Fergus / Morag / Brochan / Ailsa / Torcall | **0 / 0 / 0 / 0 / 0** |
| Unyielding / Mist Walker / Piper's March / Cursed Blades / True Sight | **0 / 0 / 0 / 0 / 0** |
| Shield Bearer / Trebuchet / Blood-Steel / Recruitment Tent | **0 / 0 / 0 / 0** |
| Iron Hide / Sharpened Steel / Battle Hardened / Swift Feet / Veteran's Instinct / Shield Wall | **全 0** |
| "community's consensus best class" / "Best class" | **0 / 0** |

**线上新内容确认（>0）**：`Aodh, the Vigil`=8、`Marriott`=6、`Infantry, Spearmen and Archers`=10、`Scottish battalion`=18、`gain permanent skills between campaigns`=10、`survivability of level 1 allies`=4、`Codex`=8、`War Preparation`=8、`[Unconfirmed]`=14。

**线上关联页确认**：
- `/guides/progression-walkthrough`：`Fergus`=0、`Morag`=0 ✅
- `/guides/barracks-statues-guide`：旧过度归因句 `"Paper Cult's own notes use"` = **0**；新表述「community troop-family vocabulary」=2、「not as your troops」=2、逐字官方引文 `"Fixed Infantry Captain II overshooting his reach attack"` 已在线上 ✅
- `/guides` 索引与 `/sitemap.xml` 均含 `battalion-companion-guide`（各 1 次）✅

---

## 六、`[Unverified]` / 待人工复核清单

| # | 项 | 为何无法裁决 | 建议 |
|---|----|-------------|------|
| U1 | `thegameswiki.com` companions 页原文 | HTTP **429**（Vercel Security Checkpoint），两次尝试均拦截 | 换网络/代理或人工浏览器复核；若该页确实列有具名 companion，可据此回补 |
| U2 | `gameshorizon.com` 原文 | HTTP **503**（IP 限流），两次尝试（含备用 IP）均拦截 | 同上 |
| U3 | Steam 社区讨论「Monikers」「Dismiss Ally」等 | HTTP **000**，两种 UA 均不可达 | 同上；上游 QA 已记为长期约束 |
| U4 | **伪兵种体系在其余 8–10 个文件的最终定性** | 官方 0 命中、可达社区 0 命中，但 U1–U3（最可能记载敌方 archetype 的来源）不可达 → 无法区分「编造」与「来源不可及」 | 见 §七，需专项批次 + U1–U3 可达后判定 |
| U5 | 商店页 `Companion` 一词 | 官方**商店页** 0 命中（`Companion` 只出现在补丁 note）；未公布名单 | 已按「未公布」处理，无需动作 |
| U6 | `barracks-statues-guide.md` 引用的 GamesHorizon 条目 | 经 U2 不可达（该页已自行标注 "via search index"） | 保留现有标注，人工复核后可升级为逐字引用 |

---

## 七、新发现的同类问题（超出本任务范围，**未改动**）

> 性质：**模板残留 / 生成式细节导致的系统性失效**，与 themoundwiki、spiritvalewiki 同源。按停止条件「一手来源全部不可达 → 记 `[Unverified]`，MUST NOT 凭猜测改动」，本报告**只记录、不修改**。

### 7.1 伪兵种体系跨 10 个文件（`Pikeman` / `Grunt` / `Shield Bearer` / `Trebuchet Spotter` / `Blood-Steel Knight`）

| 文件 | 命中数 | 用法 |
|------|:--:|------|
| `content/guides/progression-walkthrough.md` | 16 | **敌方** archetype 表（L40–43 / 93–94 / 158–160）+ 路线 |
| `content/guides/solo-guide.md` | 9 | **我方**军团构成 + 比例表（40–50% 等） |
| `content/guides/village-upgrade-guide.md` | 4 | Recruitment Tent 各等级解锁（含 400 / 1,000 / 2,500 triskelle 与 Dragon Stone Shards 数量） |
| `content/guides/beginner-guide.md` | 3 | 敌方 + 我方混用 |
| `content/guides/combat-tips.md` | 2 | 敌方 |
| `content/guides/achievements-guide.md` | 2 | 敌方 |
| `content/guides/survival-tips.md` | 1 | 敌方 |
| `content/guides/co-op-guide.md` | 1 | 我方 |
| `content/guides/base-camp-guide.md` | 1 | 我方 |
| `content/guides/barracks-statues-guide.md` | 1 | 本次新增的**命名警示**（合法，指认其为敌方 Captain） |

**判定为 `[Unverified]` 而非「已证伪」的理由**：官方与可达社区 0 命中，但最可能记载敌方 archetype 的 3 个来源（U1–U3）不可达 → 按停止条件不得凭猜测改动。**但 `Grunt` / `Shield Bearer` / `Trebuchet Spotter` / `Blood-Steel Knight` 在官方全量 + 523 条评测中亦为 0**，嫌疑等级高于 `Pikeman`（官方确有 `Pikeman Captain II`）。
**建议**：单开批次，先解决 U1–U3 可达性再统一处置；处置时 MUST 注意这些文件同时混用**我方**与**敌方**两种语义，不可全局 find-replace。

### 7.2 `Recruitment Tent` 建筑名跨 8 个文件

`app/page.tsx`(1)、`content/home-content.md`(1)、`content/guides/village-upgrade-guide.md`(11)、`base-camp-guide.md`(4)、`patch-notes.md`(2)、`beginner-guide.md`(2)、`healing-guide.md`(1)、`solo-guide.md`(1)。
该建筑名在官方全量 + S5/S6 + 523 条评测中 **0 命中**。**建议**：与 7.1 同批处理。

### 7.3 `village-upgrade-guide.md` 精确价格（L72–75）

Recruitment Tent L1–L4 的 `400 / 1,000 / 2,500 triskelle` 与 `2 / 5 Dragon Stone Shards` 均无来源（与本次已移除的 Tent 表同源）。**建议**：同批处置。

### 7.4 与 `.agent/qa-expand-tearsofmetal-9-16.md` §八 规则闭环建议的呼应

上游 QA 建议的规则（「社区来源给出的具体数值/具名清单，若官方存在但未公布对应内容，MUST 整体删除或降级为无数字的描述，MUST NOT 只加一句免责后照写」）在本轮得到二次验证，且本轮进一步发现：**免责句甚至不能覆盖「连社区也无」的编造** —— 建议该规则补一句：**若该数据在官方与全部可达社区来源中均为 0 命中，则 MUST 直接删除，不适用「标注来源层级」的降级路径。**

---

## 八、违规项自查

| MUST NOT | 状态 |
|----------|------|
| 编造来源 / 数字 / 玩家声音 | ✅ 未犯。所有引文均为实抓原始文本；评测引语为 523 条真实评测逐字 |
| 在无一手证据时保留精确数值 | ✅ 未犯。5 类精确数值全部移除或标 `[Unconfirmed]` |
| 用 `npx vercel` | ✅ 未犯（用全局 vercel 58.9.4） |
| 用 `npm install` | ✅ 未犯（pnpm） |
| 用 `next/font/google` | ✅ 未犯（geist 自托管，未改动） |
| 修改 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md` | ✅ 未犯（`git status` 复查：build-history / STATS 0 变更；`expand-daily.json` 的改动为并行主 Agent 产物，非本 Agent 所为） |
| `git commit` / `git push` | ✅ 未犯（工作区改动，留待主 Agent 统一提交） |
| 改动其它站点目录 | ✅ 未犯（改动仅限 `tearsofmetalwiki/` 3 文件） |
| 触碰 `sephiriawiki` / `themoundwiki` / `spiritvalewiki` / `grainrotwiki` | ✅ 未犯（`git status` 中这些站的改动为会话开始前的存量） |
| 把 `HTTP=000` / `size=0` 记为 PASS | ✅ 未犯（首调 000 已重试至 200；4 IP 全部实测字节数） |

**改动文件（3 个，均在 `tearsofmetalwiki/`）**：
- `content/guides/battalion-companion-guide.md`（重写）
- `content/guides/progression-walkthrough.md`（2 处）
- `content/guides/barracks-statues-guide.md`（1 处，口径统一）

---

## 九、结论

| 项 | 判定 |
|----|------|
| 5 个具名 Companion + 解锁条件 + 技能效果 | **无依据 → 已整段移除** |
| 兵种基础 HP 表 | **无依据 → 已删表**，改用有依据的 troop family 口径 |
| 技能树每级数值 | **无依据 → 已整段移除** |
| 各 Act 招募横幅数 3/4/2 | **无依据 → 已移除数字** |
| Tent 各等级解锁表 | **无依据 → 已整段移除** |
| community-reported 免责陷阱 | **已拆除**：不再用总免责覆盖精确表；改为逐项来源分层 + 显式「未公布」声明 |
| 与 barracks 页口径统一 | **已统一**（barracks 页过度归因句已修正，两页共用同一词汇分层） |
| 全站 5 名残留 | ✅ 0 命中（源码 + 构建产物 + 线上三层复验） |
| 构建 / 部署 / 线上验证 | ✅ 48 页构建通过；`dpl_9brAJ4C3AGFiVk9xfc1pAQmQiDdo` READY；4 IP × 4 URL 全 200 且字节数逐字一致 |
| 新增同类问题 | ⚠️ **3 项**（§七），已记录未改动，待人工复核 + 专项批次 |
