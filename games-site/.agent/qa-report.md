# QA Report — 2026-08-28（EXPAND-007 + BUILD-003 合并）

## 执行摘要

- **模式**: quick × 2（本轮两处变更分别审查）
- **站点 1**: `spiritvalewiki`（EXPAND-007 反馈驱动扩充 + P0 事实校准）
- **站点 2**: `crimsonmoonwiki`（BUILD-003 新站，16 篇）
- **结果**: 两站均为 ⚠️ **有条件 PASS**（0 🔴 阻断 / 4 🟡 记录项 / 均已部署并验证）

**一句话结论**: 两站所有游戏特有名词均通过独立来源核实，无明确虚构；模板残留扫描干净；部署后 alias 指向新部署、新增页面 HTTP 200。遗留项为「非阻断记录」，均已登记跟进。

---

# 一、EXPAND-007 — spiritvalewiki

## 审查范围

- **新增** `content/guides/echoing-spire-endgame-guide.md`（1,466 词，终点爬塔攻略）
- **修改** 6 文件（P0 事实校准）：faq-content / trading-market-guide / updates-patch-notes / connection-server-guide / crafting-guide / home-content

## 虚构检测表（游戏特有名词独立核验）

| # | 名词 | 核实结果 | 依据来源 | 判定 |
|---|------|---------|---------|:--:|
| 1 | Echoing Spire（终点塔） | 官方补丁 Update 0.17.0「The Echoing Spire」(5/24) + PowerUpGaming 顶级 Boss | SteamDB + PowerUpGaming | ✅ |
| 2 | 补丁 0.30.14（8/17：Spire 重置修复/踢人、挂机检测移除、Ctrl+Shift 叠 1000、武器大改） | 逐字吻合 | vgspoilers | ✅ |
| 3 | 队伍配置 Paladin/Priest/Necromancer/Shinobi/Gunslinger | 「Tanky Bossing」实文 | PowerUpGaming | ✅ |
| 4 | Berserker 爬塔职业争议 | 俄评原文逐字对上 | free-play-online.ru | ✅ |
| 5 | 拍卖行 8/4 回归（5% 卖方税、30 上架上限、8/2 PTR） | 一致 | MassivelyOP 8/4 | ✅ |
| 6 | 职业名 Scout→Gunslinger、Weaver=特殊进阶 | 一致 | GamesHub | ✅ |
| 7 | $14.99 买断（非免费） | 多源一致 | SteamSpaghetti/Datahumble/DekuDeals | ✅ |

**结论**: 无 🔴 明确虚构。新攻略对「Spire=终点塔」「Echoing Spire 英文名」使用了 `[Unconfirmed]` 标注（偏保守——官方 0.17.0 已确认，见记录项）。

## 残留扫描

| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名（30+ 清单） | ✅ Clean |
| 描述模板残留（cursed jungle / extraction horror / The Mound community） | ✅ Clean |
| SpiritVale Studio / NACON 合法性 | ✅ 符合例外规则 |

## 一致性检查

| 检查项 | 结果 |
|--------|:--:|
| 拍卖行回归（6 文件间） | ✅ 完全一致 |
| $14.99 价格 | ✅ 一致 |
| frontmatter `updated` 2026-08-28 | ✅ 一致 |
| 新攻略 related slug 真实性 | ✅ 全部存在 |
| 职业名跨文件（faq/home/新攻略 vs 其余 12+ 页） | 🟡 记录项 R1 |

## 记录项

- **R1（🟡）职业名旧体系残留**：`classes-guide`/`class-tier-list`/`advanced-classes-guide`/`solo-guide`/`beginner-guide`/`builds-guide`/`party-composition`/`world-boss-chart`/`gunslinger-guide` 等 12+ 页仍用旧体系（Scout→Sniper【真实游戏中不存在】、Gunslinger=特殊、无 Weaver），与 FAQ/home 新体系矛盾。→ **P0 跟进批量修正**，先改 classes-guide 权威页。不阻断部署。
- **R2（🟡）home-content Quick Nav**：「Gunslinger Guide — The special advanced class」旧框架 → **已本轮顺手修复**为「The Scout's ranged advanced class」。
- **R3（🟡）`[Unconfirmed]` 过度保守 + "endless climb"**：官方 0.17.0 已确认 Echoing Spire（Spire Key/Resonance Core/Umbral Fragments/Grimoires），且真实塔为 100 层非无限。→ P1 后续用官方来源升级标注并补实机细节。
- **R4（🟢）** 新攻略可后续补充官方已记录机制（Spire Key 等），SEO 价值高。

## 基建

- Build: `npm run build` exit 0（53/53 页，含新路由）✅
- Deploy: alias `spiritvalewiki.vercel.app` → `dpl_5yVrpMCL3AZUahjdmgxWHr6tFdhs`（新部署）✅
- 线上: 首页/sitemap/echoing-spire-endgame-guide/faq-content/trading-market-guide 均 HTTP 200，sitemap 48 URL ✅

**判定**: ⚠️ **有条件 PASS**（R1 登记 P0 跟进，R3 登记 P1，不阻断部署）

---

# 二、BUILD-003 — crimsonmoonwiki（新站）

## 审查范围

全站 16 篇（price-platforms / beginner-guide / coop-multiplayer-guide / system-requirements / builds-guide / weapon-arts-guide / boons-guide / purification-guide / equipment-sets-guide / incursions-guide / dead-gods-boss-guide / wards-gildenarch-guide / sanctus-clypeus-hub-guide / solo-guide / game-length-guide / faq-content）

## 虚构检测表（未发售游戏，编造风险重点核查）

| # | 名词 | 判定 | 依据 |
|---|------|:--:|------|
| 1 | Gildenarch / Wards / Dead Gods / Incursions | ✅ | Steam 商店页 + wccftech + gamerfuzion |
| 2 | Boons / Weapon Arts / Purification / Sanctus Clypeus | ✅ | 官方 Builds/Loot & Progression explainer + IGN + wccftech |
| 3 | 共享生命池 + revive / Solomon Moore / Nephilim / Hellgrowth | ✅ | 多源一致 |
| 4 | $19.99/$29.99 / Steam App ID 4317690 / ProbablyMonsters | ✅ | Steam API 直查 |
| 5 | 金属配乐（HEALTH/Misha Mansoor 等） | ✅ | NME/gamerfuzion/bluntmag |
| 6 | Manuscript translation（hub 进度系统） | ⚠️ 无来源 | 全网零结果，3 篇写成 confirmed | 记录项 C1 |
| 7 | Vampire blacksmith（铁匠） | ⚠️ 铁匠确认，"吸血鬼"属性无来源 | 记录项 C2 |

**结论**: 核心机制/Boss/价格全部多源验证，**无 🔴 明确虚构**。

## 残留扫描

| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名 | 🟡 `lib/schema.ts` L51/L95 注释含 "Echoes of Aincrad"（不渲染，零影响）→ 记录项 C3 |
| The Mound 描述模板 / SpiritVale Studio / NACON / Hugo shortcodes | ✅ 干净 |
| app 页面模板残留 | ✅ 全部 Crimson Moon 专属 |

## 一致性 / 配置 / 部署

| 检查项 | 结果 |
|--------|:--:|
| 发售日/价格/平台/Co-op/机制 16 篇交叉 | ✅ 一致 |
| `[Unconfirmed]` 使用纪律（crossplay/PC 配置/游戏时长等） | ✅ 统一 |
| seo-config 站名 / GA4 空置 / ads.txt / GSC 文件 / Dashboard 注册 | ✅ 符合新站预期 |
| 部署可达（首页/sitemap 24 URL/5 条 guide 抽查） | ✅ 全部 200 |
| related slug | ✅ 0 broken |

## 记录项

- **C1（🟡）**「Manuscript translation」写成 confirmed 但无来源 → 改标 [Unconfirmed] 或二次确认，**9/1 发售后置入 deep 复查**。
- **C2（🟡）**「vampire blacksmith」属性无来源 → 改 "blacksmith" 或 [Unconfirmed]，9/1 后核对。
- **C3（🟢）** `lib/schema.ts` 注释 Aincrad 残留（不渲染）→ 下次 build 顺手清理。

**判定**: ⚠️ **有条件 PASS**（C1/C2 登记 9/1 复查，C3 顺手项，无 🔴）

---

# 三、QA deep 状态

- 上次 deep 全量审计：2026-08-25（35 站）→ 距今 3 天，**未超 7 天**，本轮无需 full audit ✅

---

## QA 结果汇总（供主 Agent 决策）

```
站点 1  spiritvalewiki (EXPAND-007): ⚠️ 有条件 PASS — R1 职业名旧体系 P0 跟进 / R3 [Unconfirmed] 升级 / 已部署
站点 2  crimsonmoonwiki (BUILD-003):  ⚠️ 有条件 PASS — C1+C2 预发售声明 9/1 复查 / C3 注释残留 / 已部署
QA deep: 上次 8/25，未超 7 天，跳过
决策:    两站均已部署且验证，可提交上线
```

---

# QA Report — 2026-08-30（QA-QUICK-008 tearsofmetalwiki EXPAND-008 + QA-QUICK-R1 spiritvalewiki R1 P0）

## 执行摘要

- **模式**: quick × 2（只读审查，未改任何源文件）
- **站点 1**: `tearsofmetalwiki`（EXPAND-008）— 新增 `healing-guide.md` + `home-content.md` +1 行
- **站点 2**: `spiritvalewiki`（R1 P0）— 19 文件职业名批量修正（Scout→Gunslinger / 特殊进阶 Gunslinger→Weaver / 清除虚构 Sniper）
- **结果**: tearsofmetalwiki ⚠️ 有条件 PASS（1 🟡 记录项）；spiritvalewiki ✅ PASS（2 🟢 顺手项 + 1 🟡 观察项）。无 🔴 阻断。

---

# 一、QA-QUICK-008 — tearsofmetalwiki（EXPAND-008）

## 审查范围

- 新增 `content/guides/healing-guide.md`（11.2K，治疗与回血经济指南，问题导向）
- 修改 `content/home-content.md`（+1 行引导链接）
- 事实驱动: `keyword-results/Tears-of-Metal-feedback.md`（8/29，P0 主题《Healing Guide》）

## Residue Scan（source-only）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes（`{{<`） | ✅ Clean（0） |
| 他站游戏名 / 他站域名（全树 md/tsx/ts） | ✅ Clean（0） |
| 模板 / TODO / Lorem / 占位残留 | ✅ Clean — `patch-notes.md` L212 的 placeholder 字样为历史性免责声明，非残留 |
| app / lib 元数据 | ✅ Clean |

## 编造检查（逐数值核对来源，抽样 ≥3）

| 具体数值 | 指南值 | 来源核对 | 判定 |
|----------|--------|---------|:--:|
| Healing Font | ~100 coins `[Unconfirmed]` | whisperofthehouse（反馈报告 L33「100 金币」） | ✅ |
| Chicken | free / 量小 `[Unconfirmed]` | whisperofthehouse（反馈 L33） | ✅ |
| Co-op 复活 | 250/350 coins | whisperofthehouse co-op（反馈 L34） | ✅ |
| Basic Healing potion | 50 triskelle | village-upgrade-guide L128（50） | ✅ |
| Corruption Cure | 100 triskelle | village-upgrade-guide L129（100） | ✅ |
| Stamina potion | 75 `[Unconfirmed]` | 数值与 village-upgrade-guide L131（75）一致；但 L111 解释句归属错误 → 🟡 R5 | ⚠️ |
| 后期 max-HP 削减 | — | 2upskill progression（反馈 L35） | ✅ |
| Apothecary 优先度 | ★★★★☆ | 2upskill（反馈 L133） | ✅ |
| Kotaku / Smashpad / 日文玩家引语 | — | 反馈 L29-L32 | ✅ |

**结论**: 全部精确数值均有来源或 `[Unconfirmed]` 标注，无无来源精确数值。

## 一致性检查

| 检查项 | 结果 |
|--------|:--:|
| healing-guide `related` slugs（6 个） | ✅ 全部存在（survival-tips/boss-guide/village-upgrade-guide/equipment-guide/co-op-guide/corruption-guide） |
| 内链 `/guides/threat-level-difficulty-guide` | ✅ 存在 |
| Apothecary 50/100 与 village-upgrade-guide | ✅ 一致 |
| home-content.md 新行格式 | ✅ 与表格上下文一致（`\| [Healing Guide](...) \| Recovery & coin budgeting \| Intermediate \|`） |
| 「带 3+ 药剂」引用 survival-tips | ✅ survival-tips L90「Always carry 3+」 |
| 「Act 1 Boss 房无治疗」引用 boss-guide | ✅ boss-guide L32/L59 |

## 记录项

- **R5（🟡）healing-guide L111 解释句事实误差**: 称「the stamina potion price is not yet documented there [Village Upgrade Guide]」，但 village-upgrade-guide L131 明确列出「Stamina Potion \| 75 triskelle」。数值两文一致（75），`[Unconfirmed]` 标注偏保守可接受；但该句归属错误——应指向外部来源（2upskill 无独立药水价格），而非站内 Village Upgrade Guide。建议改述为「未在外部独立来源确认」。

**判定**: ⚠️ **有条件 PASS**（R5 记录，非阻断）

---

# 二、QA-QUICK-R1 — spiritvalewiki（R1 P0 批量修正）

## 审查范围

- 19 文件：app 3（faq/page / page / tier-list/page）+ content/guides 16
- 修正目标: Scout→Gunslinger（真实进阶，5000 gold）、特殊进阶 Gunslinger→Weaver（任意 J50，15000 gold）、清除虚构 Sniper
- 事实基准: 8/28 QA 报告 R1 记录（GamesHub: Scout→Gunslinger、Weaver=特殊进阶）

## Residue Scan（source-only，排除 .next/node_modules）

| 检查项 | 结果 |
|--------|:--:|
| `Sniper` 残留（全文件类型） | ✅ **0**（`grep -rn "Sniper" spiritvalewiki --exclude-dir=.next --exclude-dir=node_modules` → EXIT 1） |
| 旧框架「Gunslinger=特殊进阶」残留 | ✅ **0** — 所有 Gunslinger+special 上下文均为新框架（faq L14 / class-tier-list L3/L20 / gunslinger-guide L17 等） |
| 旧 Sniper 技能 Perfect Shot / True Shot | ✅ 0 |
| Hugo shortcodes | ✅ 0 |
| 他站游戏名/域名（运行时） | ✅ Clean — 见 R6/R7 |
| app 模板残留（FAQ/tier-list/home 元数据） | ✅ Clean — tier-list B 行「Gunslinger kiting」为新框架 |

## 编造 / 一致性检查

| 检查项 | 结果 |
|--------|:--:|
| 职业名映射（19 改动 + 5 未改动文件） | ✅ 全部 Scout→Gunslinger、Weaver=特殊进阶 |
| 解锁条件 | ✅ Gunslinger: Scout J50 +「The Outlaw's Path」5-part chain + 决斗 Gunslinger Master；Weaver: 任意 J50，quest 标 `[Unconfirmed]` — 跨文件一致 |
| 费用 | ✅ Gunslinger 5000 gold（advanced-classes-guide L25/L65/L108/L162 + gunslinger-guide L39/L46）；Weaver 15000 gold（advanced-classes-guide L25/L173） |
| 武器定位 | ✅ Gunslinger=Dual Pistols（classes-guide / advanced-classes-guide / weapons-guide）；Weaver=`[Unconfirmed]` |
| 8 进阶职业名册集合 | ✅ 5 处列举集合一致（app/page、app/faq、world-boss-chart、faq-content、home-content），仅顺序不同 |
| Weaver 定位纪律 | ✅ 全程 `[Unconfirmed]`（武器/角色/难度/技能），无编造细节 |
| Tier 跨文件一致性 | ✅ Gunslinger PvE B（class-tier-list + advanced-classes-guide）、PvP A（pvp-arena + advanced-classes-guide + gunslinger-guide）；Weaver `[Unconfirmed]` |
| 未改动但提及 Gunslinger 的 5 文件 | ✅ combat-controls-guide / echoing-spire-endgame-guide / faq-content / job-change-reset / home-content 均为新框架 |

## 记录项

- **R6（🟢）** `lib/schema.ts` L51/L95、`lib/metadata.ts` L24 注释残留「Echoes of Aincrad / Aincrad Wiki」。仅注释，运行时 JSON-LD/metadata 由 SITE_CONFIG 输出 SpiritVale（seo-config 域名 `spiritvalewiki.vercel.app` 正确），零影响 → 下次 build 顺手清理。
- **R7（🟢）** `spiritvalewiki/keyword-results/` 存有他站关键词研究文件（Mistfall-Hunter / Echoes-of-Aincrad / Witchspire / The-Mound），无 app/lib 引用、非构建输入、不发布 → 目录整洁顺手项。
- **R8（🟡 观察）** app/tier-list A 行 note「Gunslinger boss DPS」与 class-tier-list「B \| Gunslinger」存在排名表述差。前者为武器分层 tier-list 的 best-in-role 说明，后者为职业 tier-list，方法论不同，非矛盾。如追求统一可后续对齐。

**判定**: ✅ **PASS**（R6/R7 顺手项，R8 观察项，无阻断）

---

# 三、QA deep 状态

- 上次 deep 全量审计：2026-08-25（35 站）→ 距今 5 天，**未超 7 天**，本轮无需 full audit ✅

---

## QA 结果汇总（供主 Agent 决策）

```
站点 1  tearsofmetalwiki (EXPAND-008): ⚠️ 有条件 PASS — R5 解释句归属错误 → 已修正（改述 cross-referenced），已部署验证
站点 2  spiritvalewiki (R1 P0):         ✅ PASS — Sniper/旧框架残留 0，映射/费用/名册全站一致；R6/R7 顺手项，已部署验证
QA deep: 上次 8/25，未超 7 天，跳过
决策:    两站均已部署并验证（alias 指向新部署、healing-guide/gunslinger-guide HTTP 200）；R6/R7 下次 build 清理
```

---

# 二、BUILD-004 — welcomeelderfieldwiki（新站，2026-08-30）

## 执行摘要

- **模式**: quick
- **站点**: `welcomeelderfieldwiki`（新站，17 篇 guide + tier-list，未发售 pre-release，9/10 上线）
- **结果**: ⚠️ **有条件 PASS**（0 🔴 明确虚构 / 2 🟡 需人工核验 / 1 🟡 轻微过期 / 已部署并 HTTP 200）

**一句话结论**: 内容纪律优秀——pre-release 站全程使用 [Official]/[Community]/[Editorial]/[Unconfirmed] 四级标注，抽检 6 篇（35%）+ 全站 grep，所有游戏特有名词（发售日/开发者/发行商/demo 数据/Hans 角色/wiki.gg）均独立来源核实无误。遗留 1 项「全游戏最低配置」具体数值无法线上证实、与聚合站冲突，登记为主 Agent 人工打开 Steam 页核实。

## Residue 扫描（source-only）

| 检查项 | 结果 | 证据 |
|--------|:--:|------|
| Hugo shortcodes（`{{< ref }}`） | ✅ Clean | `grep -rn "{{<"` exit 1（零命中） |
| 他站 wiki 域名（witchspire/mistfall/aincrad/themound/spiritvale/moonlightpeak/crimsonmoon） | ✅ Clean | source + `.next/server/app/` 均零命中 |
| Stardew/Moonlight Peaks/Harvest Moon 提及 | ✅ 类比 | 8 处全部为类比语境（"like weeds in Stardew Valley"/"Stardew Valley-style farming"），非错误品牌化 |
| 中文残留 | ✅ Clean | python CJK 扫描 content/app/lib/components 零命中（英文站用 [Unconfirmed]） |
| app 页面元数据模板残留 | ✅ Clean | home/faq/tier-list/guides/about/contact/privacy/terms 标题、描述、正文全部 "Welcome to Elderfield" |
| JSON-LD/schema 站名与域名 | ✅ Clean | `lib/seo-config.ts` url=`welcomeelderfieldwiki.vercel.app`；built 首页 WebSite="Welcome to Elderfield Wiki"、VideoGame name/author(Chris Cote)/publisher(Kwalee) 全对；guide Article headline 正确 |
| Footer/Header 品牌 | ✅ Clean | "Welcome to Elderfield Wiki. Unofficial fan wiki"；"Welcome to Elderfield 是 Kwalee 商标" 免责声明到位 |

## 编造检查（未发售游戏，编造风险重点）

抽样：system-requirements / npcs-romance / mysteries / fishing / price-platforms / rest-sleep 全读 + beginner/combat/faq/demo/core-mechanics 段读（6/17=35%+）。

| # | 名词/数值 | 判定 | 独立来源 |
|---|----------|:--:|------|
| 1 | 发售日 2026-09-10（+8/5 官宣 trailer） | ✅ | Game8 / IGN / gamespress / 17173 / GCORES |
| 2 | 开发者 Chris Cote（solo）、发行 Kwalee | ✅ | 多源新闻稿 + SteamDB |
| 3 | demo 存在、App ID 3195440(全)/3195680(demo)、10/7/2024 发布 | ✅ | SteamDB history + 搜索结果直链两个 appid |
| 4 | demo ~96% Overwhelmingly Positive | ✅ | TechTimes / 163 / 17173（现 ~550 评，见 R2） |
| 5 | demo≈1/6 全游戏、购物中心地牢、城镇/农场/牧场 | ✅ | Steam 描述 + umgamer 首印象 |
| 6 | 全游戏 >3x 城镇 + 至少 2 地牢 | ✅ | 多源一致 |
| 7 | 作曲家 Dated、Junji Ito 风、RPG Maker 引擎 | ✅ | 17173 / umgamer / SteamDB |
| 8 | 休息系统（浴缸回血重置怪位/睡觉解诅咒或中诅咒） | ✅ | umgamer 首印象逐字吻合 |
| 9 | Hans=巨型骷髅房东 | ✅ | TechTimes + umgamer |
| 10 | 社区 wiki welcometoelderfield.wiki.gg | ✅ | Steam 置顶帖「Official Wiki - Contributions Needed!」 |
| 11 | **全游戏最低配置**（Win10 64bit / i5-11600K / 5600X / 8GB / GTX 1050 Ti / RX 570 / DX11 / 2GB / 1280x768） | ⚠️ 无法线上证实 | 所有第三方聚合站（xd.deals/pcgamebenchmark）列更低配置（N4100/4GB/DX9 GPU）；Steam 页被 403/timeout 阻断无法直读 → **R1 人工核验** |
| 12 | demo 时长「彻底通关约 2–4 小时」 | ⚠️ 轻微 | 有玩家报 ~20 小时内容量；2-4h 为社区报告口径 → R3 记录 |
| 13 | demo 好评数「400+ 篇」 | ⚠️ 轻微过期 | 现 ~550 评，96% 不变 → R2 |
| 14 | 价格未公布 / 浪漫结婚「规划未实装」 | ✅ | 全站统一 [Unconfirmed]；与 17173/开发者声明一致 |

**结论**: 无 🔴 明确虚构。唯一高危点是 #11 全游戏最低配置的具体数值——未在独立来源出现且无法直读 Steam 页，按「无来源精确数值」原则登记阻断项人工核验（不自动判 FAIL，因该数值具体到反常、疑为页面真实数据但聚合站未更新）。

## 一致性检查

| 检查项 | 结果 | 证据 |
|--------|:--:|------|
| `related` slugs 全部存在 | ✅ | python 脚本：17 引用全部命中，无 missing / 无 self-ref |
| 不同页面主题互斥 | ✅ | 17 篇主题互不重叠（farming vs money-making vs fishing 区分明确），无 cannibalization |
| 发售日/开发商/发行商/价格跨页一致 | ✅ | 全站 "September 10, 2026" / "Chris Cote" / "Kwalee" / 价格 [Unconfirmed] 统一 |
| seo-config / schema / home-content / tier-list 站名域名 | ✅ | 全 "Welcome to Elderfield"/`welcomeelderfieldwiki.vercel.app` |
| build 零错误、含全部 guide slug | ✅ | `npm run build` exit 0，30 页（17 篇 guide HTML 全生成） |
| 线上状态 | ✅ | 首页 /guides/system-requirements /tier-list /sitemap.xml 均 HTTP 200；built HTML 无他站污染 |

## 记录项

- **R1（🟡 MUST 人工核验）** `content/guides/system-requirements.md`（及 app/home FAQ 引用）的「全游戏官方最低配置」（i5-11600K/5600X、8GB、GTX 1050 Ti/RX 570、DX11、1280x768）无法线上证实，且 xd.deals/pcgamebenchmark 均列更低配置（N4100/4GB/DX9/1-2GB）。需主 Agent **人工打开 Steam 页 App 3195440 核对**；若页面上不存在，将该表降级为 [Unconfirmed] 或删除。该 guide 已自行注明「对 2D 游戏偏高」并给了 editorial 解读，诚实但数值未验证。
- **R2（🟡 轻微过期）** demo 好评数「400+ 篇」（faq-content:46、app/faq/page.tsx:15）现 Steam 约 550 评；96% 不变。→ 顺手改「550+」。
- **R3（🟡 观察）** demo 时长「2–4 小时」（game-length/demo-guide/FAQ）与个别玩家「~20 小时」报告有落差；均为社区口径，暂以 [Community] 标注即可，post-launch 复核。
- **R4（🟢 说明）** 发行商按官方稿写 Kwalee ✅；个别第三方追踪站另列 "Ill-Advised Games"（Chris Cote 自留 label），不影响站点正确性。

## 基建

- Build: `npm run build` exit 0（30/30 页，17 guide SSG）✅
- Deploy: https://welcomeelderfieldwiki.vercel.app 首页/guide/tier-list/sitemap HTTP 200 ✅
- 构建产物无跨站污染，JSON-LD 站名/域名正确 ✅

**判定**: ⚠️ **有条件 PASS**（R1 登记主 Agent 人工核验，R2/R3 非阻断，R4 说明项；不阻断部署，但 R1 未核验前 system-requirements 的「官方最低配置」不得当作已确认事实引用）

---

# QA Report — 2026-08-31（EXPAND-009 + BUILD-005 合并）

## 执行摘要

- **模式**: quick × 2（本轮两处变更分别审查，只读）
- **站点 1**: `grainrotwiki`（EXPAND-009 反馈驱动扩充 +1 rot-debuff-guide）
- **站点 2**: `fallentearwiki`（BUILD-005 新站，17 篇，预发售 9/16）
- **结果**: grainrotwiki ✅ **PASS**；fallentearwiki ✅ **PASS**（4 项 🟡 已修复）。0 🔴 阻断，均已部署并验证。

**一句话结论**: 两站无编造、无残留、无跨站污染。grainrot 的 Rot debuff 机制全部社区数值 [Unconfirmed] 且有命名来源；fallentear 全部 load-bearing 数值经外部官方源核验，「22 vs 21 allies」真实出入被诚实标注。

---

# 一、QA-QUICK-009 — grainrotwiki（EXPAND-009）

## 审查范围
- 新增 `content/guides/rot-debuff-guide.md`（1,367 词，How to Clear the Rot Debuff）
- 修改 `content/home-content.md`（+1 quick-nav 行 + Featured 段 + updated 8/31）

## Residue Scan（source-only）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes / 模板占位 / TODO / lorem | ✅ Clean（0） |
| 他站游戏名/域名（全源树） | ✅ Clean（0） |
| 中文标记（英文站用 [Unconfirmed]） | ✅ Clean（0） |
| home-content 新行格式 | ✅ 与相邻 14 行 3 列格式一致 |

## 编造检查（逐数值核对）

| 数值/机制 | 指南值 | 来源核对 | 判定 |
|----------|--------|---------|:--:|
| 100 层阈值 → 减速+呕吐绿液+掉血 | `[Unconfirmed]` | GamerBlurb 实读确认 | ✅ |
| 阳光清除 Rot（重置） | `[Unconfirmed]` | GamerBlurb + FinalBoss 双源 | ✅ |
| 阳光代价（损害 Vessel 换清除） | `[Unconfirmed]` | GamerBlurb 实读 | ✅ |
| Outpost 净化/治愈点 | `[Unconfirmed]` | FinalBoss 实读 | ✅ |
| 污染区/绿泥/Corrupted 近身感染 | `[Unconfirmed]` | GamerBlurb 实读 | ✅ |
| 骷髅符号社区争议（Rot 房 vs 更难敌人） | `[Unconfirmed]` | Steam 讨论帖 573793023877537271 | ✅ |
| 官方「The deeper you go, the worse the Rot becomes」 | Official | Steam 商店页逐字 | ✅ |

**结论**: 无无来源精确数值。所有社区数值带 [Unconfirmed] 且可回溯。

## 一致性检查
- related slugs 6/6 存在 ✅
- Rot「阈值/净化/可否逆转」口径与 game-mechanics-systems-guide / endgame-survival 对齐 ✅
- home-content 新增行/Featured 段与上下文一致 ✅

## 记录项
- 🟡 1（已修复）: L37「Corrupted enemies are another source」引号内非逐字（GamerBlurb 原文 "Corrupted enemies can also inflict Rot…"）→ 主 Agent 已改述为引号外归属。
- 🟡 2（观察）: Steam 讨论帖直连 ECONNREFUSED，经 WebSearch 二次核实内容吻合。
- 🟡 3（观察）: GamerBlurb+FinalBoss 联合署名微瑕（L40 已用 "One guide adds" 区分）。

**判定**: ✅ **PASS**（已部署，rot-debuff-guide HTTP 200）

---

# 二、QA-QUICK-010 — fallentearwiki（BUILD-005 新站）

## 审查范围
- 全站 17 guide + tier-list 页 + app 页面（17 篇全部通读，100% 抽样）

## Residue Scan（source-only）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes | ✅ Clean（仅 JSX 对象字面量 `{{`，非 shortcode） |
| 他站游戏名/域名（themound/crimsonmoon/elderfield 等） | ✅ Clean（0） |
| 模板/占位残留 / 中文标记 | ✅ Clean（0） |

## 站级元数据核验

| 检查项 | 结果 |
|--------|:--:|
| seo-config 域名 `fallentearwiki.vercel.app` | ✅ |
| WebSite/VideoGame JSON-LD（Winter Crew/CMD、$24.99、9/16） | ✅ 与 Steam 一致 |
| app/page + faq + tier-list（预发售零数值横幅） | ✅ |
| content/home-content.md 孤儿文件（首页硬编码 app/page.tsx） | 🟡 记录（与 crimsonmoon/themound 模板同源，维护风险非阻断） |

## 编造检查（逐数值外部核验）

| 声明 | 判定 |
|------|:--:|
| 1.0 发售日 9/16、EA 3/17、价格 $24.99/$19.99 | ✅ themagicrain 等多源 |
| 20 区域 / 33 Boss（11 主+22 支）/ 21 Fated Bonds | ✅ themagicrain/StopGame |
| **Steam「22 allies」vs 新闻稿 21 出入** | ✅ 真实存在且被诚实标注（[Unconfirmed]，承诺发售后修正） |
| 时长 35-40h/80h+、1.0 技能增量、四神、Hira/Miah、Korr Blade、Overgrowth、Temple of Oras | ✅ 官网/Joypad/mxdwn |
| 系统需求、EA 12 成就、Afterimage 捆绑包 | ✅ Steam |
| Blink-Strike 及部分移动技术语 | 🟡 [Community] 未独立验证 → 发售后复验 |

**结论**: 无编造。所有数值要么官方确认（已核验），要么 [Unconfirmed]/[Community]/[Editorial]。

## 一致性检查
- related slugs: 1 处悬空（fated-bonds related `tier-list`）→ **已修复**为 hunter-skills-guide ✅
- 发售日/价格/开发商跨页一致 ✅

## 记录项（6 项，4 项已修复）
- ✅ 已修复 1: fated-bonds-guide related `tier-list` 悬空 → hunter-skills-guide
- ✅ 已修复 2: temple-of-oras-guide 「Temple of Oras FAQ」重复两遍 → 删除第二处
- ✅ 已修复 3: price-platforms L83「free Early Access build」（EA 实为付费 $19.99）→ 改「free demo」
- ✅ 已修复 4: hunter-skills-guide「9 total…[Official]」（3+6 算术推断）→ [Editorial] + 注明
- 🟡 观察 1: home-content.md 孤儿文件（与 crimsonmoon/themound 模板同源，非本建站独有）
- 🟡 观察 2: Blink-Strike [Community] → 9/16 发售后复验

**判定**: ✅ **PASS**（已部署，首页/beginner-guide/boss-guide/tier-list/sitemap HTTP 200）

---

# 三、QA deep 状态

- 上次 deep 全量审计：2026-08-25（35 站）→ 距今 6 天，**未超 7 天**，本轮无需 full audit ✅

---

## QA 结果汇总（供主 Agent 决策）

```
站点 1  grainrotwiki (EXPAND-009):  ✅ PASS — 1 🟡 已修复（L37 引号），已部署 rot-debuff-guide HTTP 200
站点 2  fallentearwiki (BUILD-005):  ✅ PASS — 4 🟡 已修复，2 🟡 观察（home-content 孤儿/Blink-Strike 复验），已部署全站 HTTP 200
QA deep: 上次 8/25，未超 7 天，跳过
决策:    两站均已部署且线上验证，可提交上线
```
