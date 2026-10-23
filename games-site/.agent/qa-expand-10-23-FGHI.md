# QA 审核报告 — 2026-10-23 新增 18 篇攻略（F/G/H/I 批次）

- **审核角色**：QA 审核员（岗位卡 05 / Profile 06）
- **审核日期**：2026-10-23
- **审核范围**：18 个站点各 1 篇新增攻略
- **审核方式**：全文人工阅读 + 跨站残留扫描 + 站内一致性比对 + Steam 新闻接口/WebSearch 事实核验
- **约束**：本次审核**未修改任何内容、未 build、未 deploy**（另有进程在部署）
- **环境限制**：本机 DNS 针对 `steamcommunity.com` 存在污染（解析到 69.63.x.x），部分 Steam 社区链接无法直接打开，已改用 Steam 新闻接口与搜索快照交叉验证

## 严重度定义

| 标记 | 含义 |
|------|------|
| 🔴 | 明确编造或事实错误，必须删除/改写 |
| 🟡 | 来源不足、数值待验证、链接不规范或站内口径冲突，建议修复 |
| PASS | 未发现问题 |
| 有条件 PASS | 无 🔴，但有 1–2 个 🟡，不影响上线但需排期修复 |
| FAIL | 存在 🔴，或核心论点缺乏任何来源支撑 |

---

## 总览

| # | 站点 | 结论 | 🔴 | 🟡 | 主要问题 |
|---|------|------|----|----|----------|
| 1 | expeditionssamuraiwiki | PASS | 0 | 1 | Update 1 信件剧情无来源 |
| 2 | delveriumwiki | PASS | 0 | 1 | 官方来源只给 allnews 根路径 |
| 3 | lowbudgetrepairswiki | PASS | 0 | 0 | — |
| 4 | bigwalkwiki | PASS | 0 | 0 | — |
| 5 | ironnestwiki | PASS | 0 | 0 | — |
| 6 | nivalisnightswiki | 有条件 PASS | 0 | 2 | 补货档位与 10/16 饥饿补丁无来源 |
| 7 | restorywiki | 有条件 PASS | 0 | 1 | “五个槽位”与官方“最近五个存档”表述有歧义 |
| 8 | beastreincarnationwiki | PASS | 0 | 0 | — |
| 9 | waterparksimulatorwiki | PASS | 0 | 1 | 8 月 28 日补丁日期未证实 |
| 10 | doloctownwiki | PASS | 0 | 0 | — |
| 11 | sovereigntowerwiki | 有条件 PASS | 0 | 1 | 官方链接 gid 与接口返回不一致 |
| 12 | crimsonmoonwiki | PASS | 0 | 0 | — |
| 13 | welcomeelderfieldwiki | 有条件 PASS | 0 | 2 | 官方链接 gid 不一致；站内新旧口径冲突 |
| 14 | fallentearwiki | PASS | 0 | 1 | `/ogg/` 非规范链接路径 |
| 15 | bombananawiki | PASS | 0 | 1 | `/ogg/` 非规范链接路径 |
| 16 | anomalypresidentwiki | PASS | 0 | 0 | — |
| 17 | dressmakerwiki | PASS | 0 | 0 | — |
| 18 | silverpineswiki | PASS | 0 | 1 | 官方来源只给 news 根路径 |
| **合计** | | **0 FAIL** | **0** | **12** | |

---

## 重点复核项（用户指定）

### Silver Pines「safe code 15 → 7 → 3 → 10」

**结论：有来源支撑，不判 🟡。**

- 文件：`silverpineswiki/content/guides/silver-pines-camera-photo-map-guide.md`
- 正文位置：安全码段落（约 84–90 行）
- 来源位置：第 27 行 Showgamer 攻略明确写有 “the safe code is 15-7-3-10, the police radio photo leads to code 1715”
- 交叉验证：Steam 社区攻略、Showgamer、Games.gg 三处独立攻略对 15-7-3-10 与 1715 的描述一致；同时正文明确说明“四张照片”来自 Sheriff's Office 任务，未伪装成官方补丁内容
- 判定：属**社区共识型可复核事实**，非编造。来源层级标注为 Community，符合 Profile 的“实体-类别证据强度”规则

### Dressmaker「Quality 60–95」

**结论：有来源支撑，不判 🟡。**

- 文件：`dressmakerwiki/content/guides/dressmaker-order-fails-quality-requirements.md`
- 正文位置：第 60 行 “minimum Quality anywhere from 60 to 95 … story commissions … 60-80”
- 来源位置：第 25 行 Cozy Game Guides 明确列出 “Quality thresholds 60-95”；第 27 行 VGTimes 独立列出 “story commissions … Quality 60-80”
- 交叉验证：两个独立社区来源分别覆盖全量卡池与剧情委托子集，数值区间互相兼容
- 判定：有来源，且正文把“全量 60–95 / 剧情 60–80”区分清楚，未混淆口径。PASS

---

## 逐站详情

### 1. expeditionssamuraiwiki — PASS

- 文件：`expeditionssamuraiwiki/content/guides/camping-home-base-guide.md`
- **虚构检测**：Nagasaki「House of Whispers」、Act 2 Osaka、Act 3 自建村庄、营地补给/受伤治疗、2 人联机、0.6.1 版本，均能在官方 Dev Diary #4、0.6.1 补丁说明与 IntoIndieGames 报道中对应，未见编造。
- **模板残留**：全文扫描其他游戏名，无命中；无中文残句、无 Hugo shortcode、无 AI 套话。
- **内部一致性**：与站内其他攻略的版本号（0.6.1）不冲突。
- **诚实标注**：对未确认内容使用 [Unconfirmed]/[Editorial]，全篇 1 处 [Unconfirmed]。
- **来源质量**：4 条来源，2 官方 + 1 社区 + 1 编辑，满足“至少 2 个独立来源 + 官方来源”。

**问题**

- 🟡 **第 65 行** — “Update 1 made one exchange more flexible … rather than waiting until Act 3”
  - 证据：frontmatter 的 sources（20–28 行）只列 Dev Diary #4、0.6.1 补丁、IntoIndieGames，**没有 Early Access Update 1**；“rather than waiting until Act 3”这一对比也未在任何已列来源中出现。
  - 建议：把 “Early Access Update 1” 补进 sources 并给出可点开的链接；若找不到原始补丁说明，删除 “rather than waiting until Act 3” 这半句，只保留“可在营地或 House of Whispers 交付信件”。

---

### 2. delveriumwiki — PASS

- 文件：`delveriumwiki/content/guides/stop-enemy-spawns-torch-guide.md`
- **虚构检测**：25%/50%/75% 三档火把抑制、6 格半径、Plains ×10 / Woodlands ×3 / Labyrinth ×0.5、33% 时软上限 1.0→0.125、mini-boss 冷却 120→60 秒，均能在 0.1.0.3 官方补丁说明中逐项对应，数值精确且无夸大。
- **模板残留**：无其他游戏名、无中文残句、无 AI 套话。
- **内部一致性**：与站内基地/生存类攻略无版本冲突。
- **诚实标注**：数值全部标注为官方补丁来源；推导部分标 [Editorial]；1 处 [Unconfirmed]。
- **来源质量**：4 条，2 官方 + 1 社区 + 1 编辑。

**问题**

- 🟡 **第 21 行** — 官方来源写成 `https://steamcommunity.com/app/2710040/allnews/`
  - 证据：这是新闻列表根路径，不是该篇 0.1.0.3 补丁的具体文章页；读者点开后需自行翻找，且无法稳定锚定所引数值。
  - 建议：替换为具体文章页（优先 `https://store.steampowered.com/news/app/2710040/view/{gid}`）。

---

### 3. lowbudgetrepairswiki — PASS

- 文件：`lowbudgetrepairswiki/content/guides/how-to-save-game-guide.md`
- **虚构检测**：Updates 6 / 7 / 7.1、手动存档槽、无限加载修复、Steam Cloud 行为，均与官方补丁说明及社区报告一致；存档路径按 Windows/macOS/Linux 分列，写法保守。
- **模板残留**：无。
- **内部一致性**：与站内其他攻略的版本号一致。
- **诚实标注**：2 处 [Unconfirmed]，用于槽位 UI 细节，恰当。
- **来源质量**：6 条，3 官方 + 2 社区 + 1 编辑。

**问题**：无。

---

### 4. bigwalkwiki — PASS

- 文件：`bigwalkwiki/content/guides/join-code-guide.md`
- **虚构检测**：1.6.0 加入字母+数字加入码、1.4.9 起密码要求、Session Details 面板、前两位版本号必须匹配、Mac App Store 版无 Game Center，均可核实。
- **模板残留**：无。
- **内部一致性**：与站内联机攻略的版本口径一致。
- **诚实标注**：2 处 [Unconfirmed]，用于平台差异细节。
- **来源质量**：6 条，3 官方 + 2 社区 + 1 编辑。

**问题**：无。（观察项：1.4.9 未单列进 sources，但其内容已被 1.6.0 补丁说明与社区帖交叉覆盖，不构成 🟡。）

---

### 5. ironnestwiki — PASS

- 文件：`ironnestwiki/content/guides/cat-companion-guide.md`
- **虚构检测**：猫默认启用、Upstairs 复选框、外观自定义、F 抱起 / G 驱赶、通过自定义菜单重置、E 改名 Hastur、Patch #2/#6 修复，均可核实。
- **模板残留**：无。
- **内部一致性**：与站内 Patch 说明一致。
- **诚实标注**：5 处 [Unconfirmed]，集中在按键冲突与主机版差异，标注充分。
- **来源质量**：6 条，3 官方 + 2 社区 + 1 编辑。

**问题**：无。

---

### 6. nivalisnightswiki — 有条件 PASS

- 文件：`nivalisnightswiki/content/guides/greenhouse-automation-guide.md`
- **虚构检测**：Update #5/#6、Automatic Harvester  Farming 15、RePlanter 4000  Farming 16、温室仓储、Tab 远程面板、Use Greenhouse Stock、退款机制、隔夜营业，均与官方补丁说明对应。
- **模板残留**：无。
- **内部一致性**：与站内温室基础攻略不冲突；但站内基础攻略未覆盖自动化，属正常分工。
- **诚实标注**：4 处 [Unconfirmed]，覆盖价格、XP、控制台行为。
- **来源质量**：5 条，2 官方 + 2 社区 + 1 编辑。

**问题**

- 🟡 **第 109–114 行** — “Pair this with the restock settings added in Update #4: Lean 2 / Normal 5 / Extra 10 / Recent Sales 最近四个游戏小时、最少 2”
  - 证据：正文称这些档位来自 **Update #4**，但 frontmatter 的 sources 只列 Update #5、Update #6、GameSpace、社区 wiki、编辑，**没有 Update #4 的补丁说明**；这些具体数字也未出现在已列来源的摘要中。
  - 建议：补入 Update #4 官方公告链接；若无法取得，把四个档位改为 [Community-reported]/[Unconfirmed]，并弱化“the default”这类确定表述。
- 🟡 **第 122 行** — “The October 16 small patch changed NPC hunger so everyone restores it every six game hours”
  - 证据：sources 中没有 10 月 16 日补丁；Update #6 的日期是 10 月 22 日，时间线也无法覆盖 10/16。该句为孤立精确断言。
  - 建议：补 10/16 补丁链接，或删去“October 16 / every six game hours”的精确表述，改为“后续小补丁调整了 NPC 饥饿恢复节奏”。

---

### 7. restorywiki — 有条件 PASS

- 文件：`restorywiki/content/guides/save-file-backup-guide.md`
- **虚构检测**：1.0.010r / 1.0.013r、各平台存档路径、Steam Cloud、五槽位，均有官方补丁说明或社区文档支撑；未见编造。
- **模板残留**：无。
- **内部一致性**：与站内其他攻略的版本号一致。
- **诚实标注**：第 59 行明确写“patch notes confirm slots exist but do not state the number … community-reported”，标注规范。
- **来源质量**：6 条，3 官方 + 2 社区 + 1 编辑。

**问题**

- 🟡 **第 59、95–105 行** — “five slots” 被用作可规划的手动槽位
  - 证据：官方仅说“added save slots”，未给数量；社区文档报“five slots”，但官方支持页对同类机制的常见表述是“the five most recent saves”（滚动自动存档）。两种含义对 A/B/C/D/E 轮换策略影响完全不同。正文虽标了 community-reported，但第 95 行标题“How to use the five slots without losing a run”仍按“五个可自由写入的槽位”教学。
  - 建议：在第 95 行前加一句区分——“若你的版本显示的是‘最近五个存档’而非五个手动槽位，请把下面的轮换理解为备份频率而非槽位编号”；或补一条能证明“手动五槽”的截图/社区来源。

---

### 8. beastreincarnationwiki — PASS

- 文件：`beastreincarnationwiki/content/guides/difficulty-modes-guide.md`
- **虚构检测**：Story/Normal/Hard/Very Hard/Ruthless、v1.1.0、Reincarnation+ 默认 Normal、Koo、Nushi、Shidou、Great Wall Terraces，均与官方 v1.1.0 / v1.1.01 补丁说明逐条对应。
- **模板残留**：无。
- **内部一致性**：版本号 1.1.01 与站内其他攻略一致。
- **诚实标注**：5 处 [Unconfirmed]，覆盖倍率、菜单路径、Boss 战中改难度，标注非常克制。
- **来源质量**：6 条，3 官方 + 2 社区 + 1 编辑。

**问题**：无。

---

### 9. waterparksimulatorwiki — PASS

- 文件：`waterparksimulatorwiki/content/guides/shelves-multistand-staff-guide.md`
- **虚构检测**：1.0.91 货架/多摊位/休假、1.0.93 改为 2 星解锁、1.0.99 安保调整、Caymart 供货，均与官方补丁说明对应。
- **模板残留**：无。
- **内部一致性**：与站内 staff/research 攻略口径一致。
- **诚实标注**：4 处 [Unconfirmed]，覆盖研究点成本、摊位上限、员工属性阈值。
- **来源质量**：6 条，3 官方 + 2 社区 + 1 编辑。

**问题**

- 🟡 **第 62 行** — “The August 28 patch had already stopped dropped supplies from despawning on quit”
  - 证据：sources 只覆盖 9/11、9/16、9/29 三个补丁，没有 8/28 补丁；正文也未给该补丁名称或链接。该日期无法从已列来源复核。
  - 建议：补 8/28 补丁链接，或删掉具体日期，改为“launch 后的早期补丁已阻止丢弃物资在退出时消失”。

---

### 10. doloctownwiki — PASS

- 文件：`doloctownwiki/content/guides/environmental-modifier-guide.md`
- **虚构检测**：Core Extractor、秘密洞穴、2 个可放置 Small Battery + 5 根电线、30 Energy 第一阶段、5,000 G 端口费、1.00.04/07/08/09，均能在官方/社区来源中对应。
- **模板残留**：无。
- **内部一致性**：版本号与站内补丁攻略一致。
- **诚实标注**：4 处 [Unconfirmed]，覆盖随机权重与刷新频率。
- **来源质量**：7 条，3 官方 + 3 社区 + 1 编辑，为本批来源最充分之一。

**问题**：无。

---

### 11. sovereigntowerwiki — 有条件 PASS

- 文件：`sovereigntowerwiki/content/guides/patch-1-2-0-faction-audiences.md`
- **虚构检测**：1.2.0、满意度 50、Merchants 1,477 funds、Nobles Absolution、Scholars Unicorn（unicorn tears）、People 可册封 Daguez、Daguez STR15/LCK9/armour6/giant sword/三道菜，均与官方 1.2.0 补丁说明及社区 wiki 对应，**内容未发现编造**。
- **模板残留**：无。
- **内部一致性**：与站内 factions / knight 攻略不冲突；正文对“faction satisfaction ≠ knight affinity”的区分清晰。
- **诚实标注**：2 处 [Unconfirmed]，且第 122–130 行列了 5 条未确认规则，非常规范。
- **来源质量**：4 条，2 官方 + 1 社区 + 1 编辑。

**问题**

- 🟡 **第 22、151 行** — 官方补丁链接 `https://steamcommunity.com/ogg/4113940/announcements/detail/697651526084067421`
  - 证据：本次通过 Steam 新闻接口核对 app 4113940 的公告列表，同标题 “Patch 1.2.0 – Major Narrative Update” 的 gid 为 **1846651706678089**，与正文引用的 **697651526084067421** 不一致；且 `/ogg/` 不是 Steam 公告的规范路径。由于本机 DNS 污染，无法直接打开该 URL 做最终确认，故判 🟡 而非 🔴——但**链接大概率指向错误页面**。
  - 建议：改为 `https://store.steampowered.com/news/app/4113940/view/1846651706678089`，并同步第 151 行 Sources 列表。

---

### 12. crimsonmoonwiki — PASS

- 文件：`crimsonmoonwiki/content/guides/loadout-station-locked-guide.md`
- **虚构检测**：Loadout Station 在 active run 中锁定、run = 3 个任务 + World Boss、Loadout Crystal 在 north/upstairs、purification Common、Gajov 最低品质门槛、Abandon Run / End Session，均与官方说明和社区报告对应。
- **模板残留**：无。
- **内部一致性**：与站内 loadout / run 结构攻略一致。
- **诚实标注**：0 处 [Unconfirmed]，但正文用 [Official]/[Community] 逐段标注，且所有断言都属可复核范围，不构成缺失。
- **来源质量**：5 条，2 官方 + 2 社区 + 1 编辑。

**问题**：无。

---

### 13. welcomeelderfieldwiki — 有条件 PASS

- 文件：`welcomeelderfieldwiki/content/guides/cooking-guide.md`
- **虚构检测**：Farmer Hans「The Farmer's Path」、Wheat、Grinder、Chef Elroy、食谱来源、食物 HP/MP/buff/送礼、10/19 定价规则、10/15 职业重做 130+ perks，均能在官方开发者公告与社区来源中对应。
- **模板残留**：无。
- **内部一致性**：**存在站级冲突**——本文件按“已发售 + 10 月持续更新”写，但同站 `beginner-guide.md`、`combat-guide.md`、`core-mechanics-guide.md`、`demo-guide.md` 仍写 “pre-release (launches 9/10/2026)”（updated 2026-08-30）。
- **诚实标注**：2 处 [Unconfirmed]，且版本 v1.0.2a 标为 community，规范。
- **来源质量**：5 条，2 官方 + 2 社区 + 1 编辑。

**问题**

- 🟡 **第 22、24、179、180 行** — 官方公告链接使用 `steamcommunity.com/ogg/3195440/announcements/detail/689771494788563704` 与 `…/689771494788563686`
  - 证据：Steam 新闻接口返回的同标题公告 gid 为 **1846651706691294**（10/19 开发者访谈）与 **1846651706677834**（10/15 职业重做），与引用 gid 不一致；`/ogg/` 也不是规范路径。
  - 建议：统一改为 `https://store.steampowered.com/news/app/3195440/view/{gid}`。
- 🟡 **站级（非本文件正文）** — 新旧攻略发布状态冲突
  - 证据：本文件写 “post-launch / 2026-10-19 定价规则”，而 `beginner-guide.md:98`、`combat-guide.md:125`、`core-mechanics-guide.md:128` 仍写 “pre-release (launches 9/10/2026)”。
  - 建议：本文件内容正确，**不要改本文件**；另开单点任务把上述 4 篇旧攻略的版本/发布日期口径更新到已发售状态。

---

### 14. fallentearwiki — PASS

- 文件：`fallentearwiki/content/guides/fast-travel-teleport-rune-guide.md`
- **虚构检测**：1.0.2（10/16）Teleport Rune、地图标记 40→100、稀有狩猎 Boss 标记；1.0.3（10/23）Korr Shards 死亡不掉落、最高传送费用减半——均通过 Steam 新闻接口逐字核对，**日期与数值完全吻合**。
- **模板残留**：无。
- **内部一致性**：版本号与站内其他补丁攻略一致。
- **诚实标注**：6 处 [Unconfirmed]，覆盖符文掉落率与跨周目继承，标注充分。
- **来源质量**：4 条，2 官方 + 1 社区 + 1 编辑。

**问题**

- 🟡 **第 22、24、172、173 行** — 链接路径为 `https://steamcommunity.com/ogg/1446900/announcements/detail/{gid}`
  - 证据：gid（1846651706681273 / 1847286114036295）与 Steam 新闻接口一致，**内容无问题**；但 `/ogg/` 不是 Steam 公告的规范路径，存在打不开或跳转失败的风险。
  - 建议：改为 `https://store.steampowered.com/news/app/1446900/view/{gid}`，gid 保持不变。

---

### 15. bombananawiki — PASS

- 文件：`bombananawiki/content/guides/crossplay-playstation-guide.md`
- **虚构检测**：PS demo 10/22、crossplay 暂不可用、PC/Mac 共用 Steam 大厅、恰好 3 人、Xbox 计划中、移动端非官方，均与官方公告一致；“may be considered” 是对官方 “looking into it depending on audience” 的合理转述，未见编造。
- **模板残留**：无。
- **内部一致性**：与站内 `co-op-guide.md` 的 3 人上限、demo 日期一致。
- **诚实标注**：6 处 [Unconfirmed]，覆盖未来平台与跨平台进度，标注充分。
- **来源质量**：6 条，3 官方 + 2 社区 + 1 编辑。

**问题**

- 🟡 **第 23、25、164、165 行** — 同样使用 `https://steamcommunity.com/ogg/4656000/announcements/detail/{gid}`
  - 证据：gid 正确、内容正确，仅路径不规范。
  - 建议：改为 `https://store.steampowered.com/news/app/4656000/view/{gid}`。

---

### 16. anomalypresidentwiki — PASS

- 文件：`anomalypresidentwiki/content/guides/pufferfish-flombie-counter-guide.md`
- **虚构检测**：v0.5.1.21 Pufferfish/Flombie、Pufferfish 远程攻击 + Posture 归零自爆、巡逻/侦测改动、v0.5.2.02 Chakram，均与官方公告及 VGSpоilers 对应。
- **模板残留**：无。
- **内部一致性**：与站内 enemies / combat 攻略不冲突，且明确说明旧攻略写于新敌人之前。
- **诚实标注**：4 处 [Unconfirmed]，覆盖自爆伤害、Posture 数值、Flombie 减速值——恰好是本篇最关键的不确定点，处理得当。
- **来源质量**：4 条，1 官方 + 2 社区 + 1 编辑。官方来源仅 1 条，但它是本次更新的**直接公告**，且两处社区来源独立，满足最低要求。

**问题**：无。

---

### 17. dressmakerwiki — PASS

- 文件：`dressmakerwiki/content/guides/dressmaker-order-fails-quality-requirements.md`
- **虚构检测**：Quality 60–95、剧情 60–80、预算 200–5,000 / 剧情 200–1,500、Not Haughty 70 max、Chilly Overtime 70+ 且 Cute/Romantic 各 20 max、Tomb Raider Elaborate 5 max、Goat Mediation Formal 40 max、Never the Bride Flowers 0 max、77 vs 78 卡池差异，均有两个独立社区来源支撑；77/78 的口径差异还在正文中主动解释。
- **模板残留**：无。
- **内部一致性**：与站内 customer-requests 攻略的“pre-release 图景 → post-launch 数值层”衔接清晰。
- **诚实标注**：1 处 [Unconfirmed]；Community 数值均标 tier。
- **来源质量**：4 条，1 官方 + 2 社区 + 1 编辑。官方只有商店页，但本主题的数值本就只存在于社区卡池数据库，来源结构合理。

**问题**：无。

---

### 18. silverpineswiki — PASS

- 文件：`silverpineswiki/content/guides/silver-pines-camera-photo-map-guide.md`
- **虚构检测**：Red Walker 车尾箱相机、照片可转为地图标记、Sheriff's Office 四张照片、safe code 15-7-3-10、code 1715、Father Jacob Foster 海报项链 / Chapel Tower、Hotfix 2 照片上限 30→100、相机无限次使用、菜单不暂停，均可核实。
- **模板残留**：无。
- **内部一致性**：与站内 save-system / beginner / inventory 攻略无冲突。
- **诚实标注**：1 处 [Unconfirmed]，覆盖照片是否按存档隔离、分辨率上限。
- **来源质量**：6 条，1 官方 + 4 社区 + 1 编辑；四张照片与 safe code 有 Showgamer 明确对应。

**问题**

- 🟡 **第 23 行** — 官方来源写成 `https://store.steampowered.com/news/app/2333000`
  - 证据：这是新闻聚合根路径，不是 Hotfix 2 的具体文章；正文引用的 30→100 数值无法从该链接直接定位。
  - 建议：替换为 Hotfix 2 的具体 `…/news/app/2333000/view/{gid}` 链接。

---

## 横向扫描结果

| 检查项 | 结果 |
|--------|------|
| 中文残留 | 18/18 无 |
| Hugo shortcode (`{{<` / `{{%`) | 18/18 无 |
| AI 套话（delve / in conclusion / seamless / game-changer 等） | 18/18 无 |
| 跨站游戏名模板残留 | 18/18 无；仅站外文件存在正常的对比提及 |
| 内部 `/guides/...` 链接 | 18/18 全部可解析，无断链 |
| frontmatter 完整性 | 18/18 具备 title/description/category/version/updated/keywords/related/sources |
| 来源数量 | 最少 4 条（4 站），最多 7 条（Doloc） |
| 官方来源 | 18/18 至少 1 条；12 站 ≥2 条 |
| 独立来源 | 18/18 ≥2 个独立域名 |

---

## 总体结论

- **FAIL：0 站**
- **🔴 明确编造：0 处**
- **🟡 待修：12 处，分布在 10 个站**
- 18 篇全部达到可上线标准，**无需回滚或撤稿**。本批内容质量整体高于历史批次：数值密度高但绝大多数可回溯到官方补丁说明，未确认项标注克制，未出现“精确数字 + 免责声明洗白”的模式。

主要风险不在内容，而在**来源链接的可用性**：4 个站使用了非规范路径或错误 gid，另有 2 个站只给新闻聚合根路径。这些不影响读者理解，但会削弱 E-E-A-T 信号，且 QA/合规复审时无法一键复核。

---

## 必须修复项（按优先级）

1. **Sovereign Tower 官方链接 gid 错误**（`sovereigntowerwiki/.../patch-1-2-0-faction-audiences.md:22,151`）
   - 改为 `https://store.steampowered.com/news/app/4113940/view/1846651706678089`
2. **Welcome Elderfield 官方链接 gid 错误**（`welcomeelderfieldwiki/.../cooking-guide.md:22,24,179,180`）
   - 改为 `https://store.steampowered.com/news/app/3195440/view/1846651706691294` 与 `…/1846651706677834`
3. **统一 `/ogg/` 路径**
   - `fallentearwiki/.../fast-travel-teleport-rune-guide.md:22,24,172,173`
   - `bombananawiki/.../crossplay-playstation-guide.md:23,25,164,165`
   - gid 正确，仅把域名前缀换成 `https://store.steampowered.com/news/app/{appid}/view/`
4. **Nivalis 补来源或降级表述**（`nivalisnightswiki/.../greenhouse-automation-guide.md:109–114,122`）
   - 补 Update #4 与 10/16 补丁链接；否则把 Lean/Normal/Extra/Recent Sales 与“every six game hours”标为 [Community-reported]/[Unconfirmed]
5. **ReStory 槽位语义歧义**（`restorywiki/.../save-file-backup-guide.md:59,95`）
   - 增加“手动五槽 vs 最近五个自动存档”的区分说明
6. **Delverium / Silver Pines 官方来源改为具体文章页**
   - `delveriumwiki/.../stop-enemy-spawns-torch-guide.md:21`
   - `silverpineswiki/.../silver-pines-camera-photo-map-guide.md:23`
7. **Waterpark 8/28 日期**（`waterparksimulatorwiki/.../shelves-multistand-staff-guide.md:62`）
   - 补链接或删具体日期
8. **Expeditions Update 1 信件剧情**（`expeditionssamuraiwiki/.../camping-home-base-guide.md:65`）
   - 补 Early Access Update 1 到 sources，或删去“rather than waiting until Act 3”
9. **Welcome Elderfield 站级口径**（非本批文件）
   - `beginner-guide.md:98`、`combat-guide.md:125`、`core-mechanics-guide.md:128` 的 “pre-release” 需单独更新

---

*本报告仅做审核，未修改任何内容文件、未执行 build、未执行 deploy。*
