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

---

## QA Report — 2026-09-01（QA-QUICK-011 sephiriawiki EXPAND-010）

### 执行摘要
- 模式: quick（只读对抗审查，独立 QA 第二双眼睛）
- 范围: 1 站 / 1 篇新增 guide（dagger-build-guide，1702 词）+ home-content.md（+1 行）
- 结果: ⚠️ WARN — 1 🟡（低严重度，可提交）/ 0 🔴
- 事实核验: 10 组事实锚点全部独立 WebSearch 核实，9 组 ✅ / 1 组 ⚠️（火匕首变体暴击表述过述）/ 0 组 🔴

### 发现清单

| # | 严重度 | 站点 | 文件 | 问题类型 | 描述 | 建议操作 |
|---|--------|------|------|---------|------|---------|
| 1 | 🟡 | sephiriawiki | dagger-build-guide.md L108 | 一致性/来源过述 | 火匕首蜥蜴学者变体「its crit profile still lets you skip crit talents」与所引 doyo 源冲突：doyo 8/20 火 build 明确推荐点 20 暴击；18183 确认鹿/蜥蜴学者自带 90 基础暴击故「可跳暴击」非编造，但对火变体属简化过述 | 建议改为「fire line 仍需少量暴击投入」或删去该句；不阻断 |
| 2 | 🟢 | sephiriawiki | dagger-build-guide.md | 观察 | 触电结算公式/里程碑 DPS（2000+/10000+）等为单源 [Community]（18183），QA 独立 WebSearch 以 18183/ali213/diyiyou 多源交叉，数值完全一致 | 无需操作；后续补丁可回源复查 |
| 3 | 🟢 | sephiriawiki | home-content.md | 已知问题 | 死文件确认：无任何代码引用（app/page.tsx 用硬编码 FEATURED_GUIDES） | 登记 knownIssues；建议后续清理或改 content 驱动 |
| 4 | 🟢 | sephiriawiki | app/page.tsx | 记录项 | dagger-build-guide 未入 FEATURED_GUIDES——与 8/26 save-file-guide 先例一致（同未入） | 遵循先例，不阻塞；可选后续加曝光 |
| 5 | 🟢 | sephiriawiki | sitemap.xml（线上） | 观察 | 首拉命中 CDN 边缘旧缓存（dagger 0 命中），重新拉取确认包含 | 无需操作 |

### 编造检测明细（10 组事实锚点逐条判定）

| # | 锚点 | 判定 | 核实依据 |
|---|------|:--:|---------|
| 1 | 触电结算公式（每 2 秒 / ≈90%×层数×剩余秒数 / 结算后清空） | ✅ | 18183 电刀鹿 + ali213 + diyiyou 多源一致：基础每 2 秒结算一次，伤害≈90%×触电层数×持续秒数，结算后清空层数 |
| 2 | GG20 天赋（每拥有一套套装获得增伤） | ✅ | 18183/ali213 一致：GG20 每拥有一套套装获得高额增伤 |
| 3 | 萨满项链（延长触电时长 → 单次结算可破百层） | ✅ | 18183/ali213 一致：萨满项链延长触电持续时间，红装强化后伤害翻倍级质变 |
| 4 | 电球（雷伤核心件，与萨满项链并列） | ✅ | 18183/ali213 一致：电球+萨满项链为最高优先级核心增伤件 |
| 5 | 1.0.26（8/13）匕首冲刺衔接 Parry/Fury | ✅ | 17173 镜像 news.17173.com/content/08132026/225123646.shtml + Steam 公告：冲刺可衔接 Parry（招架）/Fury（狂怒） |
| 6 | Diff 60 可用性（完全体站撸 60 难 Boss） | ✅ | 18183 原文：60 最高难度下可站撸大部分 Boss，完全体「闭眼可清 60」 |
| 7 | 火匕首蜥蜴学者变体（炙热之刃/Blazing Blade + 余烬/Ember） | ✅ | doyo 8/20 蜥蜴学者流派 + 18183 撒匕灼伤流：火匕首每发上灼烧并吃「余烬」红利 |
| 8 | 鹿/蜥蜴学者 90 基础暴击；天赋 幸运满/防御5/迅捷5/跳暴击回蓝暴伤 | ✅ | 18183：鹿/学者蜥蜴系自带 90 点暴击，暴击乘区零投入 |
| 9 | 武器线：普通匕首→闪电匕首→雷电之怒（Stage 2） | ✅ | 18183：普攻匕首→一段闪电匕首→二段雷电之怒，二段后攻速极高每次命中叠触电 |
| 10 | 英区 B 档 + +4 endgame 线「melt bosses」 | ✅ | slashskill（B 档、69% 出现率、commitment pick）/ grindnstrat（B 档、+4 线 1.0 新增 endgame 路线）/ destructoid（B 档、最强武器之一）|

### 残留扫描

- 他站游戏名/域名（全清单）: ✅ 0 命中（content + app + lib + components 全部干净）
- 模板描述短语（cooperative extraction / cursed jungle / The Mound community / SpiritVale Studio / NACON）: ✅ 0 命中
- Hugo shortcodes `{{<`: ✅ 0 命中
- 中文标记: ✅ 仅 2 处（电刀鹿↔Electric Dagger Deer、电击术士↔Electro Mage），均含英文对应，符合反馈文档「中文俗称需给英文对应」写作规范
- 诚实标注: 机制数值经多源交叉确认不属「未核实」，故无需 [Unconfirmed]；[Official]/[Community]/[Editorial] 证据系统已在线上渲染 ✅

### 一致性

- frontmatter 结构与 builds-guide 对齐（title/description/category/version/updated/keywords/related）+ sources 证据块（与 save-file-guide 等 14 篇一致）✅
- related 7 个 slug 全部存在（weapons/builds/talents/mystic-pot/hard-mode/chapter-6-final-boss/coop）✅
- home-content.md 新行格式与相邻行完全一致 ✅
- updated "2026-09-01" 与正文 "September 1, 2026" 一致 ✅
- 与 builds-guide（匕首=High risk burst/crit）、hard-mode-guide（level 60 climb）无矛盾 ✅

### 基建检查

| 站点 | 页面 200 | 正文渲染 | Alias 指向新部署 | sitemap 含新篇 | /guides 列表 |
|------|:--:|:--:|:--:|:--:|:--:|
| sephiriawiki | ✅ | ✅ | ✅ | ✅ | ✅ |

- `curl -sI https://sephiriawiki.vercel.app/guides/dagger-build-guide` → HTTP/2 200；正文含 Dagger Build Guide / Electrocution×52 / GG20 / Shaman Necklace / 1.0.26 / Difficulty 60 / sources 证据块（Official×10/Community×62/Editorial×12 渲染）✅
- `vercel inspect sephiriawiki.vercel.app` → 指向 sephiriawiki-iweoqc7fb（2026-09-01 07:27 CST 创建，Production Ready，6 分钟前）✅
- sitemap.xml → 39 URL 总数，含 /guides/dagger-build-guide ✅（首拉 0 命中为 CDN 边缘旧缓存，重拉确认）
- /guides 列表页含 dagger-build-guide ✅

### 判定

⚠️ **WARN — 1 🟡（低严重度，可提交）/ 0 🔴 — 可提交上线**

### 记录项

- home-content.md 死文件（历史遗留，无代码引用）已登记为 knownIssues
- dagger-build-guide 未进 FEATURED_GUIDES，与 8/26 save-file-guide 先例一致
- 范围外观察（非本轮引入）：staff-build-guide 正文日期 "August 11, 2026" 与 frontmatter updated "2026-08-21" 不一致
- 过程观察：EXPAND-010 源码尚未提交（dagger-build-guide 为 untracked），Vercel 已从工作目录部署上线；部署内容与本地源码一致（线上内容抽查通过），建议提交源码闭环

---

# QA Report — 2026-09-02（QA-QUICK-012 / BUILD-006 bombananawiki）

## 执行摘要

- **模式**: quick（新站 BUILD-006，10 篇攻略 + tier-list + app 页面，9/1 构建已部署）
- **站点**: `bombananawiki`（BOMBANANA!，今日 9/2 Steam 发售）
- **结果**: ✅ **PASS**（0 🔴 编造 / 0 🟡 阻断 / 残留扫描 Clean / 部署验证通过）

**一句话结论**: 全部游戏特有名词与精确数值均通过 Steam 商店页（App 4656000，发售前 13h 直抓）+ 官方 press + 独立社区攻略多源核实，无编造；[Unconfirmed] 标注策略正确（价格官方至今未公布，未采用孤源 $7.99）。遗留项为「发售后数据扩充」建议，非阻断。

## 审查范围

- 全量读取 10 篇攻略（beginner/roles/modules/manual/co-op/levels/free-mode/demo/price-platforms-faq/faq-content）+ home-content + app/page.tsx + tier-list + faq/about/terms/privacy/contact + lib（seo-config/schema/guides）+ sitemap.ts（抽样覆盖率 100% ≫ 30% 要求）
- 独立核实基准：Steam 商店页（App 4656000）直抓、SteamDB（demo App 4747510）、Game*Spark 内容揭晓（8/27）、AUTOMATON/gamebiz/dengki/gamespark 日媒、whisperofthehouse demo guide + Mobalytics Module & Callout Guide（即 wiki 所引 [Community] 来源本体）

## 残留扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` | ✅ 0 命中 |
| 他站游戏名/域名（witchspire/mistfall/aincrad/themound/spiritvale/crimsonmoon/elderfield/fallentear/sephiria/grainrot） | ✅ 0 命中 |
| 模板残留（cursed jungle / extraction horror / The Mound community） | ✅ 0 命中 |
| 外部域名 | ✅ 仅本站 bombananawiki.vercel.app + Steam 外链 + AdSense/GA，全部合法 |
| 中文标记 | ✅ 0 命中（纯英文站） |
| `[Unconfirmed]` 标记 | ✅ 属本站诚实标注规则（home-content.md L85 明文声明），非模板残留；用量合理 |

## 编造检查表（游戏特有名词逐条核实）

| # | 锚点 | 判定 | 核实依据 |
|---|------|:--:|---------|
| 1 | 发售日 Sept 2, 2026 | ✅ | Steam 商店页「2 Sep, 2026 (planned)」+ AUTOMATON/gamebiz/Game*Spark/dengki 多源一致 |
| 2 | 开发商 Lefto Studio / 发行商 TARK | ✅ | Steam 商店页开发/发行商字段 |
| 3 | 三角色 Blind/Deaf/Mute Monkey（見ざる/聞かざる/言わざる） | ✅ | Steam 商店页精确描述 + AUTOMATON「見ざる聞かざる言わざる」 |
| 4 | "3-Player Co-op — No more, no less. Exactly three monkeys required" | ✅ | Steam 商店页逐字一致 |
| 5 | 强制 3 人、无 solo 无 2 人模式 | ✅ | Steam 商店页「No more, no less」+ 各 FAQ 页一致 |
| 6 | Mute 手册台词 "You are the only one who can read the bomb disposal manual. If only you could tell the others what you know." | ✅ | Steam 商店页逐字一致（manual-guide.md L29） |
| 7 | "Each bomb has different modules and different rules" | ✅ | Steam 商店页逐字一致（原文后接 "…induce different kinds of panic"） |
| 8 | Custom/Free Mode 五调整（difficulty/timer/module types/hazards/mistakes allowed） | ✅ | Steam 商店页逐字一致（free-mode-guide.md L34 引用） |
| 9 | 关卡解锁 "Defuse the bomb to unlock new levels. The better you get, the harder they are" | ✅ | Steam 商店页逐字一致（levels-guide.md L30） |
| 10 | 语音角色限制 "Some of you can talk, some of you can't" | ✅ | Steam 商店页逐字一致 |
| 11 | Color Blind Mode（两种色盲适配） | ✅ | Steam 商店页逐字一致 |
| 12 | 平台：Windows 10/11 64-bit + macOS 11.0 (Big Sur)+ | ✅ | Steam 商店页平台字段 |
| 13 | Win 最低配（i3-6100/Ryzen3 1200、8GB、HD520/Vega3、~300MB） | ✅ | Steam 商店页逐字一致 |
| 14 | macOS 最低配（M1/i3 6th gen+、4GB、~600MB） | ✅ | Steam 商店页逐字一致 |
| 15 | 15 语言（英/土/法/德/西/简中/巴葡/日/韩/俄/波/意/拉美西/繁中/乌） | ✅ | Steam 商店页逐字一致（注：SteamDB demo 页语言列表不同，以官方商店页为准） |
| 16 | Steam 特性 Online Co-op / Achievements / Family Sharing | ✅ | Steam 商店页 |
| 17 | 三模式：Campaign 30 关 / Endless 程序生成 / Custom | ✅ | Steam 商店页 + Game*Spark（30ステージ） |
| 18 | 环境灾害（power outages/obstructions/loud interruptions） | ✅ | Steam 商店页 + Game*Spark（停電/騒音/危険物） |
| 19 | Demo App 4747510 | ✅ | SteamDB app/4747510（demo 类型，parent 4656000） |
| 20 | Demo 600 万+ 玩家、June 2026 Steam Next Fest 最热门 demo | ✅ | AUTOMATON/Game*Spark/mxdwn 多源「600万人以上」「Next Fest 最热门 demo」 |
| 21 | Demo 免费 | ✅ | SteamDB「Free Weekend (Demand)」+ 商店页 |
| 22 | 模块类型 Wires/D-pad/Numpad-Math/Switch Panels/Braille | ✅ | whisperofthehouse demo guide + Mobalytics Module & Callout Guide 本体存在且一致（wiki 所引 [Community] 来源真实） |
| 23 | 价格未公布（9/1 时点） | ✅ | Steam 商店页发售前 13h 无价格显示 + Game*Spark「価格は未定」；wiki 正确未采用孤源 18183 的 $7.99 |
| 24 | 无成人内容/非暴力喜剧 | ✅ | Steam 商店页成熟内容描述逐字一致 |
| 25 | 沟通工具（emote wheel/slapping/flipping off/手势） | ✅ | Steam 商店页（slapping essential）+ Game*Spark（中指/ビンタ） |

**⚠️ 记录项（非编造、非阻断）**

| # | 锚点 | 判定 | 说明 |
|---|------|:--:|------|
| 1 | 正式版模块总数 14（11 标准 + 3 Chaos） | ⚠️ | Game*Spark 内容揭晓（8/27）：正式版 14 模块。wiki 仅记 5 个 demo 验证模块并标 [Unconfirmed]「full release may add more」——诚实标注、无编造，发售后需扩充图鉴 |
| 2 | "won the June 2026 Steam Next Fest demo race" 措辞 | ⚠️ | 官方口径为「Next Fest 最热门 demo」+「Steam 第 2 热门 demo（6-8 月）」；"won the race" 为合理转述，无冲突 |

**🔴 编造**: 无。

## 一致性

- related slugs：10 篇全部有效（Python 解析校验，零 BROKEN）✅
- 发售日 Sept 2, 2026 跨 10 篇 + home + app + faq 完全一致 ✅
- 价格 [Unconfirmed] 标注跨 6 处一致（$10–20/€10–20 编辑预估均带 [Editorial]/[Unconfirmed] 标签）✅
- 角色名 Blind/Deaf/Mute Monkey 跨 41/33/49 处引用无矛盾 ✅
- seo-config.ts url = `https://bombananawiki.vercel.app` ✅；schema.ts VideoGame url 指向 Steam 4656000 正确；JSON-LD 线上渲染 WebSite/VideoGame/FAQPage/Article/Breadcrumb 齐全 ✅
- sitemap.xml = 18 loc（8 static + 10 guides）✅

## 部署验证

| 检查项 | 结果 |
|--------|:--:|
| `/`、`/guides`、3 篇 guide 页 HTTP 200 | ✅ 全部 200 |
| sitemap.xml `<loc>` 计数 | ✅ 18（首拉即命中最新版，重拉一致） |
| 线上正文渲染（角色名/发售日/模块） | ✅ 抽查一致 |
| `vercel inspect bombananawiki.vercel.app` | ✅ 指向生产部署 bombananawiki-a11tdw0mn（Production Ready，9/1 07:32 CST） |

## 判定

✅ **PASS**（0 🔴 / 0 🟡 阻断）— 可提交上线；发售后数据扩充为建议项，非本轮阻断。

## 记录项

1. 发售后确认价格并更新（当前 [Unconfirmed] 正确；未采用孤源 $7.99）
2. 正式版 14 模块（11 标准 + 3 Chaos）发售后扩充模块图鉴（wiki 已用 [Unconfirmed] 诚实预标注）
3. demo 好评率/评测数（SteamDB 97%/619 ratings）wiki 未引用——回避不可靠/易过期数据，合规
4. 正式版所有猴子解锁 emote（demo 仅 Mute 可用）——roles-guide 描述基于 demo 正确，发售后可补充
5. 过程观察：sitemap/JSON-LD 首拉偶发命中 CDN 边缘缓存，重拉确认一致，无需操作

---

# QA Report — 2026-09-02（QA Deep 全量审计 Part A + Part B）

## 执行摘要

- **模式**: deep full audit（上次 deep 全量 2026-08-25，距今 8 天 > 7 天 → 触发）
- **Part A**: 8 站（crimsonmoon/welcomeelderfield/fallentear/grainrot/sephiria/spiritvale/tearsofmetal/themound）逐站审计 → **8/8 PASS**（完整报告 `.agent/qa-deep-partA.md`，334 行）
- **Part B**: 40 站全量脚本化残留扫描 + 12 站编造抽查 → **1 处渲染级残留（spiritvalewiki，P1）→ 本轮已修复并部署验证**；编造抽查 **0 编造**（完整报告 `.agent/qa-deep-partB.md`，187 行）
- **一句话结论**: 除 spiritvalewiki「SpiritVale Studio」虚构工作室名（P1，已修复上线）外，其余 39 站全部 PASS。40 站内容纪律优秀：0 跨站污染、0 虚构精确数值、sources 证据块 + [Unconfirmed] 标注纪律贯穿全站。

---

## 一、Part B 关键发现与修复（spiritvalewiki P1）

**发现**: `lib/schema.ts:67,71` 硬编码 JSON-LD author/publisher = **「SpiritVale Studio」**（虚构工作室，经 `app/page.tsx:27` 渲染到首页结构化数据）；`components/Footer.tsx:24` 商标归属；`app/terms/page.tsx:26` IP 归属同错。真实开发商 = **Baikun Interactive**（墨尔本，lead 开发者 Phil Yum；MMOHuts/MMORPG.com/mmo13 + 本次独立 WebSearch 复核一致）。同一 schema 的 Steam App ID 3767850 核对无误 → 仅工作室名一处错误。

**修复**（本轮主 Agent 直接做，3 文件单点改名）:
- `lib/schema.ts` author/publisher → `Baikun Interactive`（JSON-LD 已线上验证 `"author":{"@type":"Organization","name":"Baikun Interactive"}`）
- `components/Footer.tsx:24` → 「SpiritVale is a trademark of Baikun Interactive.」（线上验证）
- `app/terms/page.tsx:26` → 「respective owners (Baikun Interactive)」（线上验证）
- 残留扫描：全站 0 处「SpiritVale Studio」

**部署验证**: 本地 `npm run build` 通过 → `vercel deploy --prod` READY → 线上三处（首页 JSON-LD / 页脚 / Terms）全部确认替换，`SpiritVale Studio` 线上零命中。

**基建变更（关联）**: spiritvalewiki `app/layout.tsx` 字体从 `next/font/google`（Geist）切换为 `geist` npm 包自托管（`geist/font/sans` + `geist/font/mono`）。原因：本机无法连通 Google Fonts（GFW 阻断 fonts.googleapis.com/gstatic.com），导致 `next build` 失败；自托管后构建零外部字体依赖，CSS 变量 `--font-geist-sans/--font-geist-mono` 不变、渲染一致，且对目标地区（Google 受限区）加载更快。**同类站点后续需 rebuild 时若遇 Google Fonts 拉取失败，沿用此方案。**

## 二、Part B 残留扫描结果（40 站）

- ✅ **20 站完全干净**（witchspire/mistfallhunter/themound/skillsandraids/minegeon/dinoblade/mystralia/dragonsword/dwarfdelve/taival/vahrinscall/shiftatmidnight/bonehold/phantomtower/ardentwilds/bigwalk/ironnest/nivalisnights/doloc/sovereigntower/fallentear/bombanana 等）
- 🟢 **14 站仅注释级残留**（`lib/schema.ts`/`lib/metadata.ts` JSDoc 内含「Echoes of Aincrad/Witchspire」模板注释，**不渲染**、零运行时影响；与 8/28 C3、8/30 R6 同源历史遗留，建议下次各站 build 顺手删除）
- ✅ 6 站命中为本站合法身份/类比（themound「extraction horror/NACON」= 真实身份；grainrot「extraction horror」= 真实类型；waterparksimulator/welcomeelderfield 类比引用；sephiria 中文俗称带英文对应；tearsofmetal 日文引语带翻译）
- ❌ 1 站（spiritvalewiki）渲染级残留 → 已修复（见上）
- Hugo shortcodes `{{<`、他站域名互染、TODO/lorem ipsum：全 40 站零命中

## 三、编造抽查（Part A + Part B，共 20 站）

| 区块 | 抽查范围 | 结果 |
|------|---------|:--:|
| Part A | 8 站全检（关键数值逐项核验） | ✅ 0 编造 |
| Part B | 12 站（shiftatmidnight/dinoblade/mystralia/dwarfdelve/lunarium/vahrinscall/graphite/moonlightpeaks/bonehold/ardentwilds/doloc/sovereigntower，每站 ≥2 篇全读） | ✅ 0 编造 |

- shiftatmidnight（曾 FAIL）现通过；各站关键数值（发售日/价格/开发/发行/Boss/武器/机制）与 Steam/官方稿/独立媒体交叉核验全部吻合。
- 无法独立验证的数值站点均已带 `[Unconfirmed]`/`[Community]`/sources 证据块，无「写死未验证数值」编造模式。
- pre-release 内容（mystralia Therakan、graphite 终局、lunarium 18 Boss、ardentwilds Yorgoroth）正确降级标注，未冒充官方事实。

## 四、复核记录项（🟡，非编造，时点/细化差异，列入后续跟踪）

1. dwarfdelvewiki：EGS 商店列表未能独立证实
2. moonlightpeakswiki：「24 位可攻略」vs 官宣「20+」
3. doloctownwiki：「80 成就」计数未能独立复核
4. boneholdwiki：「10% 折扣 8/4 结束」vs 当前 Steam $8.99；「19 bundles」未能复核
5. sovereigntowerwiki：home-content「91%」vs 快照「92%」；Brunhilda 角色未能独立复核
6. vahrinscallwiki：「导演 Craig Smith」「Xbox/PS 计划中」未能独立证实
7. crimsonmoonwiki（发售后过期观察，非本轮引入）：home-content:15「has not launched yet」、system-requirements:43/54、price-platforms:64 pre-order 口径 → 建议发售后整站刷新一次
8. welcomeelderfieldwiki：demo 好评数已增至 603 评/95%（站点「over 550」仍准确，略滞后，🟢）

## 五、总体判定

- **全部 40 站 PASS**（spiritvalewiki P1 修复后）；编造抽查 20 站 0 编造。
- 顺手清理项：14 站 `lib/schema.ts`/`lib/metadata.ts` 注释级 Aincrad/Witchspire 模板残留（下次各站 build 一并删除）。
- QA deep 纪律记录：本轮 8 天 overdue → 已补 full audit，Part A + Part B 证据链齐全（`.agent/qa-deep-partA.md` + `.agent/qa-deep-partB.md` + 本报告）。

---

# QA Report — 2026-09-02（QA-QUICK-013 / EXPAND-011 themoundwiki）

## 执行摘要

- **模式**: quick（每日扩充 EXPAND-011，反馈驱动新增 1 篇）
- **站点**: `themoundwiki`（The Mound: Omen of Cthulhu）
- **新增**: `content/guides/multiplayer-connection-fix-guide.md`（Multiplayer Connection Fix — "Connection Failed" & Lobby Errors + Crossplay Join Workarounds）
- **结果**: ✅ **PASS**（0 🔴 编造 / 0 🟡 阻断 / 部署验证通过）

**一句话结论**: 反馈分析师（docs/agents/17-18 quick）先以 11 个独立来源验证「多人在线联机故障」内容缺口真实存在（33 篇攻略中无独立联机排查篇，coop-strategy-guide 仅 3 行清单），再由主 Agent 撰写问题导向指南；全部官方声明（Patch 1.03 crossplay invite 确认、password rooms 添加、beta branch Steam-only）与官方 Steam announcement 对齐，Community 声明均绑定 outagescope 用户报告 + 编辑媒体，无编造玩家引语。

## 审查范围

- 新增 guide 全文 + frontmatter（title/description/keywords/related 7+4 项）
- 交叉一致性：coop-strategy-guide / faq-content / performance-fps-fix-guide / extraction-guide / home-content.md quick-nav 行
- 残留扫描（他站污染 / Hugo shortcodes / [Unconfirmed] 标记 / 外部域名）
- 部署验证：本地 build exit 0 → vercel deploy → 线上 guide HTTP 200 + sitemap 计数

## 残留扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` | ✅ 0 命中 |
| 他站游戏名/域名污染 | ✅ 0 命中 |
| 模板残留（cursed jungle / Aincrad / Witchspire 等） | ✅ 0 命中 |
| 外部域名 | ✅ 仅 Steam 官方 + 编辑媒体 + outagescope，全部在 Sources 列出 |
| `[Unconfirmed]` 标记 | ✅ 仅用于 beta-branch 时间点等未官方钉死处，用量合理 |
| 虚构玩家引语 | ✅ 0（honesty note 明文声明 Steam post 正文无法直抓，Community 均带来源） |

## 编造检查表（关键断言逐条核实）

| # | 锚点 | 判定 | 核实依据 |
|---|------|:--:|---------|
| 1 | Patch 1.03 官方确认 crossplay invite bug「working on a fix」 | ✅ | Steam 官方 announcement（[Official] 唯一来源，guide 只在此处引官方） |
| 2 | 官方推荐 Public lobby + server list 跨平台组队 | ✅ | 同 Steam announcement |
| 3 | 6 位 lobby code 生成 | ✅ | 编辑媒体 tposegaming/gamerblurb 一致 |
| 4 | 10+ 次刷新 / 35 分钟等待（跨平台房间出现） | ✅ | Community（outagescope 用户报告 + tposegaming/gamerblurb 编辑转述），guide 标注 Community 非官方 |
| 5 | 无 search-by-name 功能 | ✅ | Community + 编辑媒体一致 |
| 6 | 8-18 更新后 matchmaking 回归 | ✅ | outagescope 状态页（Community），guide 标 Community 并附自检步骤 |
| 7 | password rooms 由 late-July 大补丁添加 | ✅ | gamersocialclub + ingamenews（Editorial） |
| 8 | beta branch Steam-only + 禁用 crossplay | ✅ | tposegaming + Steam announcement |
| 9 | 全平台 crossplay 支持（invite 坏、组队可用） | ✅ | 官方 announcement + 多编辑媒体 |
| 10 | Windows `netsh winsock reset` / `ipconfig /flushdns` 修复 | ✅ | 编辑媒体 2UpSkill（标准 Windows 网络栈修复，非编造） |
| 11 | 中文玩家用游侠对战平台绕过官方联机 | ✅ | duotegame（Editorial），guide 标注「unofficial workaround」 |

**🔴 编造**: 无。

## 一致性

- related slugs（coop-strategy-guide/faq-content/performance-fps-fix-guide/extraction-guide）全部有效 ✅
- 6 位 lobby code、crossplay 状态、password rooms 口径与 coop-strategy-guide / faq-content 一致 ✅
- home-content.md quick-nav 新增行指向 `/guides/multiplayer-connection-fix-guide`，路径与文件名一致 ✅
- frontmatter `updated: 2026-09-02`；sitemap 由 fs.readdirSync 自动发现 → 无需手动注册 ✅

## 部署验证

| 检查项 | 结果 |
|--------|:--:|
| 本地 `npm run build` | ✅ exit 0（themoundwiki 已切 geist 自托管字体，无 Google Fonts 阻断） |
| `/guides/multiplayer-connection-fix-guide` HTTP 200 | ✅ 线上验证 |
| sitemap.xml `<loc>` 计数 | ✅ 42（前 41 → 42，含新 guide） |
| `/guides` 列表包含新 slug | ✅ |
| `vercel inspect themoundwiki.vercel.app` | ✅ 指向最新生产部署 |

## 判定

✅ **PASS**（0 🔴 / 0 🟡 阻断）— 可提交上线。

## 记录项

1. Steam 官方补丁正文（Patch 1.03 完整公告文本）因 age-gate / ECONNREFUSED 无法直抓，官方声明仅引用 announcement 页面标题级事实；已用 honesty note 明确声明，未编造引语
2. 新增 guide 正文 1708 词，超出 800-1500 SOP 目标——与站内既有指南（coop-strategy ~3000、performance ~1800）一致，内容密实无注水，保留
3. themoundwiki 本轮与 spiritvalewiki 同批完成 geist 自托管字体切换（基建变更，见 QA Deep 记录）

# QA Report — 2026-09-03（每日内容扩充 EXPAND-012/013/015/016，spiritvalewiki 跳过）

## 执行摘要

- **模式**: quick × 4（每篇扩充一站独立审查）+ 1 站跳过（素材/缺口不足，宁缺毋滥）
- **审核对象**: sephiriawiki（EXPAND-012 katana-build-guide）/ themoundwiki（EXPAND-013 isolation-guide）/ tearsofmetalwiki（EXPAND-015 crash-launch-fix-guide）/ grainrotwiki（EXPAND-016 multiplayer-matchmaking-guide）
- **结果**: 4/4 站 ✅ **PASS**（0 🔴 阻断 / 0 🟡 阻断；少量记录项），均已部署并线上验证 HTTP 200。spiritvalewiki 当日跳过（理由见 expand-daily.json）。

---

## 一、QA-QUICK-014 — sephiriawiki（EXPAND-012，katana-build-guide）

### 审查范围
- **新增** `content/guides/katana-build-guide.md`（1,498 词）— 问题导向：Is the Katana Good in 1.0? Best Katana Evolutions (Heidi vs Blazing Helbanus)

### 选题缺口核实
- Katana 是 6 武器中唯一没有独立 build 页的武器（crossbow/dagger/greatsword/staff/sword-shield 均有）
- 高频证据：Steam Community 帖「Katana feed back」（Muramasa Swift Slash 慢/疑似 bug、Library Spectral dash 失效、推荐 Heidi + Blazing Helbanus）+ GrindNStrat / Destructoid / SlashSkill / XModHub 四家 1.0 武器 tier list（Katana B-tier、执行依赖）+ bilibili 中文全武器榜独立佐证

### 残留 / 编造 / 一致性
| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名/域名/模板残留 | ✅ 0 命中 |
| 虚构玩家引语 | ✅ 0（honesty note 说明 Steam 正文无法直抓，Community 均带来源） |
| 进化机制断言（Muramasa/Library Spectral/Heidi/Helbanus） | ✅ Community/Editorial 可溯源；单一来源细节（60% Swift Slash buff、overheat 窗口、Lava Bead 叠加、Spectral dash bug）标 [Unconfirmed] |
| related[] 8 个 slug | ✅ 全部真实存在 |
| 术语口径 | ✅ 与 faq/weapons/builds 一致（combo flow、skill-gated、Glass Cannon Melee、Mystic Pot） |
| 自噬检查 | ✅ 进化名 Heidi/Helbanus/Muramasa 不在其他 guide 出现；weapons-guide 仅泛述 Katana |
| frontmatter updated | ✅ 2026-09-03 |

**判定**: ✅ **PASS**。🟡 记录项：若干进化级机制为单一社区帖来源（已 [Unconfirmed]），待下个动 Katana 的平衡补丁后复核。

## 二、QA-QUICK-015 — themoundwiki（EXPAND-013，isolation-guide）

### 审查范围
- **新增** `content/guides/isolation-guide.md`（1,500 词）— 组队离队/落单触发 Isolation 惩罚（屏边变灰/画面扭曲/根束缚/定向刷怪），原 34 篇全未覆盖

### 选题缺口核实
- 证据 ≥6 独立来源：Steam 社区帖（西语新手帖）+ NoobFeed「How Isolation Works」+ OutputLag co-op 攻略 + 2UpSkill（惩罚落单者）+ ChapterCheats 首局失误 + TheSixthAxis/GamerScout/Xbox Nation/Gazettely 评测（分离致语音切断/森林模仿队友/尸体腐化追猎）+ Backloggd 评测（官方不解释机制）

### 残留 / 编造 / 一致性
| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名/域名/模板/中文残留 | ✅ 0 命中 |
| 单一来源机制（Whispering Statue、根/蜘蛛袭击细节、Luz del Sur 蘑菇、solo 差异） | ✅ 全部 [Unconfirmed] |
| Isolation 与 Sanity 系统关系 | ✅ 各源说法不一（NoobFeed=独立系统 vs OutputLag/Steam=Sanity 惩罚）→ 如实呈现矛盾，未强行定论 |
| related[] 6 个 slug | ✅ sanity/coop-strategy/solo/extraction/maps-locations/enemy-bestiary 全部存在 |
| 术语口径 | ✅ Ox Cart/Ox Wagon、Sanity、Galleon 与 sanity-guide/coop-guide 一致 |

**判定**: ✅ **PASS**。🟡 记录项：Isolation↔Sanity 从属关系跨源冲突，文内已双说并存并标注。

## 三、QA-QUICK-016 — tearsofmetalwiki（EXPAND-015，crash-launch-fix-guide）

### 审查范围
- **新增** `content/guides/crash-launch-fix-guide.md`（1,498 词）— 启动崩溃/黑屏修复；此前仅 steam-deck-guide 内一行带过

### 选题缺口核实
- 证据：2UpSkill（Black Screen 9 Ways）+ The CPU Guide（8 Quick FIXES）+ XModHub（Crash/FPS）+ 官方 Steam 补丁史（v0.10.57598 7/31、v0.14.58630 8/14 稳定性修复）+ Steam Support 技术流程

### 残留 / 编造 / 一致性
| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名/域名/模板残留 | ✅ 0 命中 |
| 未验证值（AppData 路径、驱动版本、-dx11 开关） | ✅ [Unconfirmed] 或标准修复标注 |
| related[] | ✅ 全部存在 |
| 一致性 | ✅ 与 steam-deck-guide 技术口径一致，正文出现 -dx11/verify integrity/launch option 均渲染验证 |

**判定**: ✅ **PASS**。🟡 记录项：Reddit 无直达来源，社区层由第三方修复指南 + 官方补丁构成（guide 已说明）。

## 四、QA-QUICK-017 — grainrotwiki（EXPAND-016，multiplayer-matchmaking-guide）

### 审查范围
- **新增** `content/guides/multiplayer-matchmaking-guide.md`（1,499 词，自 1,796 压到 SOP 上限内）— 联机仅邀请制、无公开匹配/服务器浏览器（社区第一诉求）

### 选题缺口核实
- 证据：Steam Community 发售讨论帖（invite only / matchmaking must have / server browser 期待）+ VaporLens 差评统计（No public matchmaking 列 top negatives）+ 官方商店页（Online Co-Op only、无 matchmaking tag）+ vgspoilers Patch 1.04（加 lobby privacy/max-player/view-lobby 但仍无匹配）

### 残留 / 编造 / 一致性
| 检查项 | 结果 |
|--------|:--:|
| 他站游戏名/域名/HTML/Hugo/中文残留 | ✅ 0 命中 |
| 未验证细节（Tab+Shift 呼出、guest 存档进度） | ✅ [Unconfirmed]（guest-save 社区报告） |
| 相关 slug + 行内 /guides/* 引用 | ✅ 全部存在 |
| frontmatter 单引号风格 | ✅ 与站内一致 |

**判定**: ✅ **PASS**。🟡 记录项：无 Reddit 子版（该游戏没有）；guest 存档进度社区层 → 已 [Unconfirmed]；待官方出服务器浏览器后此页需第一时间更新。

## 五、跳过记录 — spiritvalewiki（EXPAND-014）

- **原因**: 站内 40 篇覆盖极广且已同步至 8/17 v0.30.14。逐一核验候选缺口均不满足「高频 ≥3 独立来源 + 真缺口 + 不编造」：trading-market-guide 已深挖拍卖行（5% 卖家税/30 上架/Listing Types/Premium Pass/倒卖）；refinement 成功率已被 gear-progression/endgame/weapons 三处覆盖且站内刻意模糊口径（外部 100%/70%/40%/20% 与站内不一致，写细则=编造数值风险）；Weaver 进阶站内已 [Unconfirmed] 无数据；Grimoires 属 0.17.0 Playtest / roadmap（MassivelyOP 8/17 列为 next major update），当前 EA 未确认上线；区域命名外部来源互相矛盾（Vale's Rest vs Nearis 等）；移动输入 bug/服务器/回档/银行扩容均已覆盖。
- **尝试来源**: Steam Community/评测、Reddit（site:reddit.com 零索引）、MassivelyOP 7/21+7/22+8/17、pcgames.de、automaton、primagames、gameguidesbox、exitlag、gamerhour、online-station、2upskill、prodigygamers、lagofast、mmochronicles、SteamDB。
- **处理**: 跳过原因已记入 `.agent/expand-daily.json` skips，**次日优先补该站**。

## QA 结果汇总（供主 Agent 决策）

| 站点 | 任务 | 新增 guide | 判定 | 阻断 |
|------|------|-----------|:--:|:--:|
| sephiriawiki | EXPAND-012 | katana-build-guide | ✅ PASS | 0 |
| themoundwiki | EXPAND-013 | isolation-guide | ✅ PASS | 0 |
| spiritvalewiki | EXPAND-014 | —（跳过） | ⏭️ 记录原因 | — |
| tearsofmetalwiki | EXPAND-015 | crash-launch-fix-guide | ✅ PASS | 0 |
| grainrotwiki | EXPAND-016 | multiplayer-matchmaking-guide | ✅ PASS | 0 |

**结论**: 4/4 站 PASS，0 🔴；全部已部署，新页线上 HTTP 200。可提交上线。次日扩充优先补 spiritvalewiki。

---

## QA — 9/4 中断批次恢复 + 9/5 每日扩充（2026-09-05）

> 背景：9/4 run 被 600s 超时终止，4 站扩充指南写好未 QA/commit/部署；9/3 run 的 BUILD-007 anomalypresidentwiki 亦未收尾。本日先恢复 9/4 批次，再跑 9/5 周期扩充。QA 明细见 `.agent/qa-orphans-{A,B}.md` 与 `.agent/qa-expand-{sephiria,grainrot,tearsofmetal}-9-5.md`。

### 一、9/4 批次恢复（4 篇，QA quick）

| 站点 | guide | 判定 | 说明 |
|------|-------|:--:|------|
| grainrotwiki | performance-lag-fix-guide | ✅ PASS | WebSearch 抽查 5 组断言全命中（app 4450620/最低配置/VaporLens Poor optimization/thecpuguide 等）；1188 词 |
| themoundwiki | blood-moon-guide | ✅ PASS | 抽查全命中（app 2569760/NoobFeed/Gameplay.tips/nerdschalk/gamerguides）；已上线 200 + sitemap，无需重部署 |
| sephiriawiki | coop-freeze-recovery-guide | ✅ PASS | 抽查 6 项全命中（Steam 帖 URL 逐字/补丁链 1.0.23-1.0.30/log 路径与 save-file-guide 一致）；1473 词 |
| tearsofmetalwiki | armor-break-guide | ✅ PASS | 三英雄 Wallace/Ruadh/Brienne 身份武器全对；灰条/破甲/补丁 0.11.57863 验证；1390 词 |

### 二、9/5 周期扩充（3 篇新指南 + 2 站跳过，QA quick）

| 站点 | 任务 | 新增 guide | 判定 | QA 发现与处理 |
|------|------|-----------|:--:|------|
| sephiriawiki | EXPAND-017 | controller-casting-keybind-fix-guide | 🟡→修复→✅ | 🟡-HIGH 补丁误归因（quick-cast 实为 1.0.26 8/13 实装，误标 1.0.30）→ FIX 后 1.0.30 仅 recap 语境；1498 词 |
| grainrotwiki | EXPAND-018 | survive-enemy-chase-guide | 🔴→修复→✅ | 🔴 编造残留：Vanguard "Iron Bastion" 无来源（本站 co-op-guide 已回撤该命名）→ 已剔除改通用表述；🟡 aggro 归因 [Unconfirmed] 合规；🟢 引用/related 修正；1442 词 |
| tearsofmetalwiki | EXPAND-019 | low-fps-fix-guide | 🟡→修复→✅ | 🟡×3：GPU 帧率数值误挂 2UpSkill→改挂 XModHub；补丁版本表述一致化（v0.8.57278 精确标注 120→60 cap）；1789→1442 词压回区间 |
| themoundwiki | EXPAND-018 | —（9/5 新鲜题 SKIP） | ⏭️ | 30 条负面评测主题全被 35 篇覆盖；blood-moon（9/4 周期）本日已上线 |
| spiritvalewiki | EXPAND-019 | —（SKIP，3 连） | ⏭️ | 0.31.0 Dark Fortress 仅单官方源，宁缺毋滥；updates-patch-notes 滞后 P0 待校准 |

### 三、线上验证（部署后）

| 站点 | 路径 | 结果 |
|------|------|:--:|
| grainrotwiki | /guides/performance-lag-fix-guide, /guides/survive-enemy-chase-guide | ✅ HTTP 200 + 内容标记 |
| sephiriawiki | /guides/coop-freeze-recovery-guide, /guides/controller-casting-keybind-fix-guide | ✅ HTTP 200 + 内容标记（1.0.26 已上线） |
| tearsofmetalwiki | /guides/armor-break-guide, /guides/low-fps-fix-guide | ✅ HTTP 200 + 内容标记 |
| themoundwiki | /guides/blood-moon-guide | ✅ 9/4 已上线（本日核对一致） |

### QA 结果汇总（供主 Agent 决策）

| 站点 | 任务 | 判定 | 阻断 |
|------|------|:--:|:--:|
| grainrotwiki | 9/4 恢复 perf-lag + EXPAND-018 enemy-chase | ✅ PASS（1 🔴 已修） | 0 |
| sephiriawiki | 9/4 恢复 coop-freeze + EXPAND-017 controller-casting | ✅ PASS（🟡 已修） | 0 |
| tearsofmetalwiki | 9/4 恢复 armor-break + EXPAND-019 low-fps | ✅ PASS（🟡 已修） | 0 |
| themoundwiki | 9/4 恢复 blood-moon（已上线） | ✅ PASS | 0 |
| spiritvalewiki | EXPAND-019 | ⏭️ SKIP（0.31.0 单源） | — |

**结论**: 9/4 恢复批次 4/4 PASS、9/5 扩充 3/3 PASS（含 2 次 🔴/🟡 修复后复检），5 站均已部署/核对，新页线上 HTTP 200。次日扩充仍优先补 spiritvalewiki（等 0.31.0 独立来源）。BUILD-007 anomalypresidentwiki 单独 QA（进行中）。

---

## QA — 9/6 每日扩充（2026-09-06）

> 3 个子 Agent 并行执行（每 1-2 站）；每站完整流水线：反馈采集 → 四条件选题 → 写/校准 → QA quick → 部署 → 线上验证。明细见 `.agent/qa-expand-{site}-9-6.md`。

### 一、9/6 扩充结果

| 站点 | 任务 | 新增/改动 | 判定 | 说明 |
|------|------|-----------|:--:|------|
| sephiriawiki | EXPAND-020 | crash-launch-black-screen-fix-guide（1344 词） | ✅ PASS | 启动黑屏/DX12 修复；≥4 独立来源（gameplay.tips 专项 + 官方 0.12.3 DX12 黑屏 + 1.0.30 Deck 关闭 + Steam FAQ）。⚠️ 9/3 后无新素材，明日无新源应 SKIP（已披露） |
| tearsofmetalwiki | EXPAND-021 | co-op-revive-guide（1139 词） | ✅ PASS | v0.12 复活金币→生命值；官方公告 + thegameswiki 双核对 + 多站报道。⚠️ 既有 healing-guide §6 仍写旧金币复活制 → 待单独校准（P0） |
| themoundwiki | EXPAND-022 | motion-sickness-camera-fix-guide（1452 词） | ✅ PASS | 相机晕动修复；Steam 差评 + 官方 Patch 1.03 FOV/中央圆点 + GamerSocialClub。部署脚本 sleep-5 健康检查竞态 exit1×2 → 人工复验线上 200 + sitemap（良性） |
| spiritvalewiki | EXPAND-021(校准) | updates-patch-notes 补至 0.31.0 Dark Fortress | ✅ PASS | 新指南 4 连 SKIP（0.31.0 仅单官方源，宁缺毋滥）；改走 P0 校准：官方公告逐条如实补页。事实修正：0.31.0 无可玩 Dark Fortress 新地图（9/5 记录过度解读） |
| grainrotwiki | —（SKIP） | 零改动 | ⏭️ | 四条件均不满足：符号含义已覆盖/工具耐久差评与站内编辑准则冲突/v1.08-09 仅单一转载站不可溯源。触发条件：官方可溯源 ≥2 独立来源 |

### 二、线上验证（部署后）

| 站点 | 路径 | 结果 |
|------|------|:--:|
| sephiriawiki | /guides/crash-launch-black-screen-fix-guide | ✅ HTTP 200 + sitemap |
| tearsofmetalwiki | /guides/co-op-revive-guide | ✅ HTTP 200 + sitemap |
| themoundwiki | /guides/motion-sickness-camera-fix-guide | ✅ HTTP 200 + sitemap（人工复验） |
| spiritvalewiki | /guides/updates-patch-notes | ✅ HTTP 200 + Dark Fortress/0.31.0 标记 |

### 三、待办（校准/规则闭环）

- [ ] tearsofmetal healing-guide §6 复活机制与 v0.12 冲突 → 全站 grep revive/复活 一次改齐
- [ ] themound updates-patch-notes-guide 版本记录滞后（停 1.0.1，站内已引用 1.02/1.03）→ 补版本史
- [ ] themound home-content 既有重复「Weapons Guide」行清理
- [ ] spiritvalewiki：0.31.0 出现 ≥2 独立来源后写 Dark Fortress 深度指南（触发条件已记录）

### QA 结果汇总（供主 Agent 决策）

| 站点 | 判定 | 阻断 |
|------|:--:|:--:|
| sephiriawiki | ✅ PASS | 0 |
| tearsofmetalwiki | ✅ PASS | 0（healing-guide 校准待办） |
| themoundwiki | ✅ PASS | 0 |
| spiritvalewiki | ✅ PASS（校准） | 0 |
| grainrotwiki | ⏭️ SKIP | — |

**结论**: 9/6 扩充 3/3 新指南 PASS + 1 校准 PASS，均已部署并线上 200；grainrot 记 SKIP。BUILD-007 anomalypresidentwiki 收尾 QA 另见 `.agent/qa-build007-{a,b,final}.md`。

---

# QA Report — 2026-09-07（每日扩充 SKIP ×5）

- 日期: 2026-09-07 | 模式: quick（本轮全站无内容变更）
- 范围: 5 个 PV>1000 重点站（sephiria / themound / spiritvale / tearsofmetal / grainrot）各做一轮反馈采集+选题评审
- 执行: 3 个子 Agent 并行（sephiria+themound / tearsofmetal+grainrot / spiritvale），每站走 反馈采集 → 四条件选题 → QA quick →（无产出故无部署）全流程
- 明细: `.agent/qa-expand-{site}-9-7.md` ×5 + `keyword-results/{site}wiki-expand-9-7.md` ×5

## 一、9/7 扩充结果（全 SKIP — 宁缺毋滥，无内容改动、无部署）

| 站点 | 任务 | 结果 | QA | 核心否决理由 |
|------|------|:--:|:--:|------|
| sephiriawiki | — | ⏭️ SKIP（非连续，9/6 有产出） | ✅ | 最新补丁仍 1.0.30（8/20）无 1.0.31；联机 netcode / 终局弹幕 / evasion meta / 服装刷取 逐一命中既有指南或 <3 源/编造风险。P0 线索：WeMod 暗示或有未公告静默热更 |
| themoundwiki | — | ⏭️ SKIP（9/5 亦 SKIP） | ✅ | 官方补丁止 7 月（1.03），「1.0.4」单源不可验证；跨平台加入 / 近战 / 性能 / 库存 全被既有指南覆盖且无 9 月新事实。P0 线索：人工核对 1.0.4 是否存在 |
| spiritvalewiki | — | ⏭️ SKIP（5 连） | ✅ | 官方 RSS 最新仍 [0.31.0] Dark Fortress（8/25）；0.31.0 机制仍仅单一官方源，未达 ≥2 独立来源触发。19 检索（4 新角度）零佐证 |
| tearsofmetalwiki | — | ⏭️ SKIP（非连续，9/6 有产出） | ✅ | 版本史止 8/14 v0.14.58630 无 9 月补丁；治疗/难度/复活/FPS 全被覆盖（9/5–9/6 刚产出两篇）；Aodh/货币/Trials 仅 1–2 源不可溯源 |
| grainrotwiki | — | ⏭️ SKIP（2 连） | ✅ | v1.08/v1.09+ 仍无 ≥2 独立来源（vgspoilers 止 1.07、SteamDB 0、pc6 单一无内容）；9/7 触发重评估执行 |

## 二、QA 判定依据（quick — 零变更评审）

- 所有 5 站 git 工作树确认 **content/home-content 零改动**（仅新增记录性交接文件）
- 每站候选否决均逐条对照既有 slug 复核，否决主因集中在三类：**已被既有指南覆盖（内容自噬）** / **<3 独立来源或细节不可溯源（编造风险）** / **版本锚点缺失（无官方新补丁）**
- 关键事实独立复核通过：sephiria 最新 1.0.30 三路命中；themound 补丁史止 1.03；spiritvale 官方 RSS 无 0.31.0 后条目；grainrot vgspoilers 止 1.07
- 记录文件含中文属正常（keyword-results/.agent 惯用），非站点内容，无残留下游风险

## 三、待办（P0 建议 — 需人工核对，超出 expand 范围）

- [ ] **sephiria**：人工核对 Steam 公告页确认 8/31–9/6 间是否真有未公告静默热更（WeMod ~9/6「cheats stopped working」为唯一线索）；若出 1.0.31 → 校准 updates/patch 类页面
- [ ] **themound**：人工核对 Steam 公告确认「1.0.4」是否存在（单条 9/5 差评引用）；若属实 → updates-patch-notes 版本行 + multiplayer-connection-fix Official Fix Timeline 需校准
- [ ] **spiritvalewiki**：0.31.0 一旦出现 ≥2 独立非官方来源 → 写 Dark Fortress 深度指南（触发已记录，未变）
- [ ] **grainrot**：官方可溯源 v1.08/v1.09+ 补丁说明出现（≥2 独立来源）→ 写更新指南（触发未变）

## QA 结果汇总（供主 Agent 决策）

| 站点 | 判定 | 阻断 |
|------|:--:|:--:|
| sephiriawiki | ✅ SKIP（零变更） | 0 |
| themoundwiki | ✅ SKIP（零变更） | 0 |
| spiritvalewiki | ✅ SKIP（零变更） | 0 |
| tearsofmetalwiki | ✅ SKIP（零变更） | 0 |
| grainrotwiki | ✅ SKIP（零变更） | 0 |

**结论**: 9/7 为全站无新素材日（5/5 SKIP，宁缺毋滥），无新增指南、无部署、无 build-history 条目。各站连续跳过状态：spiritvale 5 连（上次产出 8/28）、grainrot 2 连；themound/sephiria/tearsofmetal 均为非连续跳过（9/6 刚产出，themound 9/5 亦曾 SKIP）。质量红线优先于产量节奏；触发条件均已记录于 `.agent/expand-daily.json` 供次日判断。

---

# QA Report — 2026-09-08（每日扩充 3/5 SKIP，run 中断）

- 日期: 2026-09-08 | 模式: quick（本轮 3 站无内容变更，2 站未轮到）
- 范围: 5 个 PV>1000 重点站中 3 站完成采集评审（sephiria / tearsofmetal / grainrot），run 在 3/5 站完成后中断；themound / spiritvale 未覆盖（9/9 优先补跑）
- 执行: 反馈采集 → 四条件选题 → QA quick，3 站均无新素材
- 明细: `.agent/qa-expand-{site}-9-8.md` ×3 + `keyword-results/{site}wiki-expand-9-8.md` ×3（本轮未 commit，9/9 归账时一并提交）

## 一、9/8 扩充结果（3/3 SKIP — 宁缺毋滥，无内容改动、无部署）

| 站点 | 结果 | QA | 核心否决理由 |
|------|:--:|:--:|------|
| sephiriawiki | ⏭️ SKIP（非连续） | ✅ | 采集 8/22–9/6 差评与 9/7 窗口高度重叠；netcode/Boss 弹幕/evasion/grid 摆放全命中既有 35 篇；补丁仍止 1.0.30（8/20）。P0「静默热更」复核**关闭**（WeMod 帖实为 8/31 适配 1.0.30，非新版本证据） |
| tearsofmetalwiki | ⏭️ SKIP（非连续） | ✅ | 版本史仍止 8/14 v0.14.58630，无 v0.15+/9 月补丁；候选全已覆盖 / 9/5–9/6 刚产出同类 / 单源不可溯源 |
| grainrotwiki | ⏭️ SKIP（3 连） | ✅ | v1.08/v1.09+ 仍无 ≥2 独立来源（vgspoilers WebFetch 直读止 1.07）；新候选 compass-as-fuse 核验为同内容链单源 + 编辑准则冲突 |
| themoundwiki | —（run 中断未覆盖） | — | 9/9 优先补跑（含「1.0.4」真伪人工核对线索） |
| spiritvalewiki | —（run 中断未覆盖） | — | 9/9 优先补跑（0.31.0 ≥2 独立来源触发复检） |

## 二、QA deep 状态

- 上次 deep 全量审计：2026-09-02 → 距今 7 天，**未超 7 天**，本轮无需 full audit ✅
- ⚠️ 9/10 起进入 >7 天窗口，若 9/10 run 无 deep audit 计划需触发 full audit

## QA 结果汇总（供主 Agent 决策）

| 站点 | 判定 | 阻断 |
|------|:--:|:--:|
| sephiriawiki | ✅ SKIP（零变更） | 0 |
| tearsofmetalwiki | ✅ SKIP（零变更） | 0 |
| grainrotwiki | ✅ SKIP（零变更） | 0 |
| themoundwiki | ⏸️ 9/8 未覆盖（run 中断） | 9/9 补跑 |
| spiritvalewiki | ⏸️ 9/8 未覆盖（run 中断） | 9/9 补跑 |

**结论**: 9/8 为低素材日（3/3 检查站 SKIP，宁缺毋滥）。连续跳过状态更新：sephiria/tearsofmetal 非连续、grainrot 3 连。QA deep 距今 7 天，9/10 起需触发 full audit（纪律记录）。

---

# QA Report — 2026-09-09（每日扩充：1 产出 + 4 SKIP）

- 日期: 2026-09-09 | 模式: quick（1 篇新指南 + home-content 1 行；其余站零变更）
- 范围: 5 个 PV>1000 重点站全部覆盖（含 9/8 中断的 themound/spiritvale 补跑）
- 执行: 3 个子 Agent 并行（sephiria / themound+spiritvale / tearsofmetal+grainrot），每站走 反馈采集 → 四条件选题 → QA quick →（有产出时部署）
- 明细: `.agent/qa-expand-{site}-9-9.md` ×5 + `keyword-results/{site}wiki-expand-9-9.md` ×5

## 一、9/9 扩充结果

| 站点 | 结果 | QA | 核心结论 |
|------|:--:|:--:|------|
| spiritvalewiki | ✅ **产出 1 篇** | PASS | **account-ban-appeal-guide**（约 1,500 词）——站内 grep ban/appeal 0 命中真缺口；≥3 独立来源（官方执法公告经 MassivelyOP 8/17 + MassivelyOP 7/21 + Steam 社区）。结束 5 连 SKIP。已部署，生产 200 |
| sephiriawiki | ⏭️ SKIP（3 连） | ✅ | 官方补丁仍 1.0.30（8/20）；负面评测止 9/6；武器升级材料刷取=真实空白但仅 xmodhub 单源且命名冲突 → 触发已记录 |
| themoundwiki | ⏭️ SKIP（9/8 补跑） | ✅ | **P0『1.0.4』查实为真**（官方 Patch 1.04 Content Update + addictinggames）；细节 2 通道 <3 源 + 落点已覆盖 → 不写。P0：补 1.04 版本行待人工核精确日期 |
| tearsofmetalwiki | ⏭️ SKIP（非连续） | ✅ | v0.15+/9 月补丁仍 0；新发现 ~8/26 官方三阶段 EA 路线图（未实装，只够 P0）。P0：patch-notes.md 滞后 3 实装补丁 + 缺路线图 |
| grainrotwiki | ⏭️ SKIP（4 连） | ✅ | v1.08/v1.09 升级为「可溯源但不可采信」（player.gg 归因冲突）；P0：人工核 v1.07 public server browser + v1.08/1.09 日期 |

## 二、QA 判定依据（quick）

- 产出站（spiritvale）：残留扫描 0 命中；编造核查核心断言全可溯源（执法数字 3,821/1,106/65 定级 Official-经 MassivelyOP；封禁阶梯/误封个案/ticket 体验全标 [Unconfirmed]，11 处）；内链 5 个 0 BROKEN；frontmatter schema 与 spiritvale sources tier/text 约定一致（15 篇既有同款）；正文约 1,500 词。部署后线上 curl 200 + 标志词命中。
- SKIP 站：git 工作树确认对应 site 目录零改动（仅记录文件）；否决均逐条对照既有 slug 复核，主因三类：已覆盖（自噬）/ 单源或归因冲突（编造风险）/ 官方无新补丁（版本锚点缺失）。

## 三、待办（P0 — 需人工核验或下轮触发，超出 expand 范围）

- [ ] **sephiria**：武器升级材料题（Copper/Luminous/Apex）出现 ≥2 独立来源一致命名 → 写 How to Farm Weapon Upgrade Materials（站内真实空白）
- [ ] **themound**：人工核 Patch 1.04 精确日期 → updates-patch-notes-guide 补版本行（现止 1.03）+ multiplayer-connection-fix Official Fix Timeline 加注「1.04 起 lobby code 自动生成」
- [ ] **tearsofmetal**：patch-notes.md 补 3 个实装补丁（v0.11.57874.1·8/9 / v0.12.58540·8/13 / v0.14.58630·8/14）+ ~8/26 官方三阶段 EA 路线图（Phase 2/3、Plague Doctor）
- [ ] **grainrot**：人工核官方 Steam 公告——v1.07 是否实装 public server browser（若属实 multiplayer-matchmaking-guide 需校准）+ v1.08/1.09 准确日期/changelog；核验后 patch-notes/update-history 页为站内真缺口
- [ ] **spiritvale**：0.31.0 长期无独立非官方来源时，updates-patch-notes 0.31.0 章节保持「官方单源未社区佐证」措辞；开发组预告 PvP 重做/Dragon Knight 落地后联动更新

## QA 结果汇总（供主 Agent 决策）

| 站点 | 判定 | 阻断 |
|------|:--:|:--:|
| spiritvalewiki | ✅ PASS（1 新指南，已部署） | 0 |
| sephiriawiki | ✅ SKIP（零变更） | 0 |
| themoundwiki | ✅ SKIP（零变更） | 0 |
| tearsofmetalwiki | ✅ SKIP（零变更） | 0 |
| grainrotwiki | ✅ SKIP（零变更） | 0 |

**结论**: 9/9 扩充 1/5 有产出（spiritvale account-ban-appeal-guide，结束 5 连 SKIP），已部署线上验证 200；其余 4 站 SKIP（宁缺毋滥，无一处硬写）。连续跳过状态：sephiria 3 连、grainrot 4 连、spiritvale 已归零。4 项 P0 待办（themound 1.04 版本行、tearsofmetal patch-notes 滞后、grainrot v1.07/v1.08+ 人工核验、sephiria 武器材料触发）均已记录，供人工核对或次日触发。QA deep 纪律：上次 9/2，9/9 为第 7 天（未超限）；**9/10 起须触发 full audit**。

---

# QA Report — 2026-09-11（每日扩充 5 站 + QA Deep 9/10 P0 遗留项修复 + 部署脚本修复）

## 执行摘要

- **模式**: QA quick ×（5 扩充站 + 9 站 P0 修复 + 1 站版本一致性），QA deep 状态复核
- **本轮产出**: 2 站新增攻略（grainrotwiki / sephiriawiki）+ 3 站 SKIP（themound / spiritvale / tearsofmetal，均附 P0 校准）
- **QA 结果**: **全部 PASS**（0 🔴 阻断遗留；P0 修复 9 站线上验证通过）
- **一句话结论**: 本轮最大价值不在新增篇数，而在**改掉了 3 处已上线的存量事实错误**（grainrot 联机功能、tearsofmetal 平台/crossplay、themound 跨站机制污染）——这些是既有审计未捕获的错误陈述，直接关系 AdSense「不实陈述」风险。

## 一、扩充站 QA quick（每站独立报告）

| 站点 | 结果 | QA 报告 | 关键动作 |
|------|:--:|------|------|
| grainrotwiki | ✅ **EXPANDED** | `.agent/qa-expand-grainrot-9-11.md` | 新增 patch-notes-guide；**事实纠错** multiplayer-matchmaking-guide（v1.07 确已实装 public server browser，原文断言「no public matchmaking has shipped」为错误）+ 3 处衍生引用；页脚/Terms IP 归属修正 |
| sephiriawiki | ✅ **EXPANDED** | `.agent/qa-expand-sephiria-9-11.md` | 新增 patch-1-0-31-build-changes-guide（1.0.31 = 9/10，官方 news API + RSS 双通道） |
| sephiriawiki | ✅ **PASS（追加）** | `.agent/qa-expand-sephiria-9-11-version.md` | 跨页版本一致性：20 命中 / 5 文件 → 改 8（「latest build」断言）/ 不改 12（版本史，改则制造错误）；消除今日扩充引入的站内矛盾 |
| themoundwiki | ✅ **SKIP + P0 7/7** | `.agent/qa-expand-themound-9-11.md` | Patch 1.04 = 8/31（双通道同戳）、新发现 1.05 = 9/9，但第三方零覆盖 → 单通道，严格按 9/9 同一把尺子否决；P0：EX-Mod 跨站污染、5 处 Hugo 式内链、编造地名 Mira Isle、AdSense ID 双源、补丁史 1.01–1.05 |
| spiritvalewiki | ✅ **SKIP + 线上 🔴 404 修复** | `.agent/qa-expand-spiritvale-9-11.md` | `/guides/tier-list` 线上 404 → slug 修正 + title/description 一并对齐（只换 slug 会引入同类事实不符） |
| tearsofmetalwiki | ✅ **SKIP + P0 + 🔴 平台纠错** | `.agent/qa-expand-tearsofmetal-9-11.md` | patch-notes 扩为完整版本表 v0.8→v0.14 + 官方路线图（标注「plan, not shipped」）；**纠错 7 文件**「Steam PC-only / no crossplay」= 错误，实际 7/22 首发即 Steam + Microsoft Store + PC Game Pass 且互通 |

## 二、QA Deep 9/10 遗留项修复（FIX-9/11-P0）

9/10 full audit 的 🔴/🟡 项**此前均未修复**（git log 无对应 commit），本轮全部闭环：

| 项 | 站点 | 结果 |
|------|------|:--:|
| 页脚 + Terms IP 归属错填（渲染于全站每页 + 法律页） | lunarium / mistfallhunter / shiftatmidnight / taival / bonehold / ironnest | ✅ FIXED |
| 生产环境渲染 `G-PLACEHOLDER`（每次访问发无效测量 ID） | anomalypresidentwiki | ✅ FIXED |
| related 悬空 slug（渲染） | relicfirstguardianwiki | ✅ FIXED |
| README 整篇为他站内容 | minegeonwiki | ✅ FIXED |
| 跨站机制污染（EX-Mod）/ 5 处 404 内链 / 编造地名 | themoundwiki | ✅ FIXED（并入扩充 Agent） |
| Footer/Terms 归属错填 | grainrotwiki | ✅ FIXED（并入扩充 Agent） |
| 线上 404 | spiritvalewiki | ✅ FIXED（并入扩充 Agent） |

**验收方法（MUST 证据链）**: 归属值**未直接采信审计报告**，逐站用 Steam / 官方 / 独立媒体重新核验；线上逐一 `curl` 页脚 + `/terms` 正文确认新值渲染、旧值残留 0。**发现 1 处分歧**：审计写 bonehold 发行商为「Pixel Jackal（+SaikingS）」，外部来源显示发行商**仅 Pixel Jackal**，已按外部来源修正；另发现 mistfallhunter 的 JSON-LD 亦错（审计称「多数正确」的漏网）。报告：`.agent/fix-p0-9-11.md`。

## 三、工具缺陷修复（本轮附带）

`deploy-wiki-site.sh` 的 `VAR=$(... | grep -o ... | head -1)` 在 `set -euo pipefail` 下：grep 无匹配退出 1，且 `head` 提前关管道使 grep 收 SIGPIPE(141)，两者经 pipefail 传播 → **errexit 在脚本自身错误处理之前静默退出**。后果：alias 告警不打印、成功部署被误报失败（9/11 实测 8 个成功部署全报 FAIL；亦为 9/9「40 站误报」的真正机理）。L77/L88 补 `|| true`，已用最小复现验证。规则已入 04 Profile。

## 四、线上内容级验证证据（非仅首页 200）

| 站点 | 验证内容 | 结果 |
|------|------|:--:|
| grainrotwiki | 新路由 200 + 5 页文本；页脚/Terms 新值；`Vaulted Sky` 残留 | ✅ 0 残留 |
| sephiriawiki | 新路由 200 / 70,470 B，19 项特征串全中；版本页 4 页 1.0.31 已渲染、`latest…1.0.30` 残留 0 | ✅ |
| themoundwiki | 4 页 200；`mira isle\|ex-mod\|themound/content` 合并 | ✅ 0 命中 |
| spiritvalewiki | home 200 / 7,617 B 含 class-tier-list 链接；`/guides/tier-list` 已无链接 | ✅ |
| tearsofmetalwiki | 5 页 200；陈旧断言 5 页合并 0；路线图标注已渲染 | ✅ |
| P0 六站 | 页脚 + Terms 新值渲染、旧值残留 | ✅ 0 残留 |
| anomalypresidentwiki | `G-PLACEHOLDER` / `googletagmanager` 计数 | ✅ 0 / 0 |

## 五、QA Deep 状态

上次 full audit = **2026-09-10**（Part A 8 站 + Part B 41 站脚本化扫描），距今 **1 天**，**未逾期**，本轮不触发。9/10 报告的遗留项已在本轮闭环（见 §二）。下一轮 deep 触发条件：2026-09-17 后。

## 六、遗留与风险

1. **Reddit 通道连续多日不可用**（`opencli reddit` AUTH_REQUIRED / `/api/me.json` 403，Chrome 未登录）→ 5 站反馈采集均缺该平台维度，如实记录未编造。建议排查登录态。
2. **tearsofmetalwiki patch-notes 篇幅 1,994 → 3,623 词**，超 800–1500 常规范式；QA 判非 FAIL（hub/tracker 参考页，增量均为任务指定）。若认为过长，建议后续拆出独立 roadmap 页。
3. **站级渲染文件互相矛盾（未动）**: tearsofmetal `app/page.tsx` 与 `app/faq/page.tsx` 对「village upgrades 是否全队共享」表述冲突 —— 无可靠来源裁决，改动即编造风险，保留待人工。
4. **spiritvale 0.31.0 长期单源** —— 已声明 developer-published but not player-corroborated，合规审计时保持该口径。
5. **待触发选题**: spiritvale「交易锁」（需第二独立平台来源，且须与 account-ban-appeal-guide 分工避免自噬）；themound Patch 1.05 语音聊天重做（需第 3 独立来源）；sephiria 武器升级材料刷取（需 ≥2 来源命名一致）。
6. **crimsonmoon / welcomeelderfield 发售后措辞过期**（9/10 deep 观察项，非阻断）—— 建议排「发售后刷新」专项，本轮未扩大改动面。

**结论**: 5 扩充站全部处置完毕（2 产出 / 3 SKIP，无一处硬写）；QA deep 遗留 🔴 项 100% 闭环并线上验证；新增 3 处存量事实错误修正。**宁缺毋滥纪律保持**。

---

# QA Report — 2026-09-12（每日扩充 5 站 + BUILD-008 + 全网面组件缺陷）

> 本日为 9/2 改版「所有 PV>1000 站每站每天 1 篇」以来**第一次 5/5 全产出**
> （此前连续多日出现 SKIP，9/11 为 2 产出 / 3 SKIP）。

## 一、执行摘要

- **模式**: quick × 6（5 站扩充 + BUILD-008 新站）
- **扩充**: `sephiriawiki` `themoundwiki` `spiritvalewiki` `tearsofmetalwiki` `grainrotwiki`
- **新站**: `dressmakerwiki`（BUILD-008，12 篇，score 19）
- **扩充结果**: **5/5 EXPANDED，全部 QA PASS**，无一件硬写
- **附带**: 发现并修复**全网络共享组件缺陷**（42/42 站，详见 §四）

**一句话结论**: 扩充首次实现满产且零 SKIP；5 站 QA 全 PASS；当日额外挖出一个
存在已久、覆盖全部 42 站的渲染缺陷并完成修复与分批部署。

## 二、扩充 5 站 QA 结果

| 站点 | 新增攻略 | 词数 | 选题路径 | QA 结论 | 报告 |
|------|---------|:--:|:--:|:--:|------|
| spiritvalewiki | `artifact-sets-guide` | 1,493 | ② 系统清单驱动 | ✅ PASS | `qa-expand-spiritvale-9-12.md` |
| sephiriawiki | `costume-stats-and-character-unlocks-guide` | 1,329 | ② 系统清单驱动 | ✅ EXPANDED — PASS | `qa-expand-sephiria-9-12.md` |
| themoundwiki | `voice-chat-fix-guide` | — | ① 官方补丁时间线 | ✅ PASS | `qa-expand-themound-9-12.md` |
| tearsofmetalwiki | `coop-join-failures-guide` | 1,454 | ② 系统清单驱动 | ✅ PASS | `qa-expand-tearsofmetal-9-12.md` |
| grainrotwiki | `elevator-modifiers-fuse-guide` | 1,449 | ② 系统清单驱动 | ✅ PASS | `qa-expand-grainrot-9-12.md` |

**选题路径分布值得记录**：5 站中 **4 站由路径②（官方系统清单 × 站内覆盖）
命中**，仅 1 站走路径①（抱怨驱动）。这直接验证了 9/12 新写入
`docs/每日内容扩充计划.md` §五与 `04-Profile` 的规则：**抱怨收敛 ≠ 没有缺口**。
最典型的是 spiritvalewiki —— 路径①已连续 6 次判定「抱怨均落在既有页面」，
按旧规则即 SKIP；转路径②后**第一次检索即命中**官方明列、站内整块缺失的
Artifacts 系统。grainrot 同理（路径①收敛，②命中官方商店页明列但站内零命中的
Elevator modifiers）。**若沿用旧的单路径规则，本日将是 3-4 个 SKIP 而非 5 篇产出。**

**排除编造（重要，防后续误采）**：tearsofmetal 扩充中发现 xmodhub 系站点给出的
错误码 `0x0001/0004/0012/0029` **无任何来源**，特征符合 AI 生成的 SEO 内容 →
**刻意未写入**，并已记入该站报告，防止后续 Agent 误当作一手来源采信。

**长期 SKIP 前提被推翻**：tearsofmetal 此前多轮以「9 月无补丁」为由 SKIP，
本轮核验官方 ISteamNews（appid 1913120）发现 **9/8 存在 'New Bug Fixing Pass'**
（官方未公布版本号）→ 前提本身是错的。**教训：SKIP 结论的前提 MUST 每轮重新核验，
MUST NOT 把上一轮的 SKIP 理由当作本轮的事实基础。**

## 三、BUILD-008 — dressmakerwiki

- 12 篇（P0 5 + P1 7），800–1500 词区间内无超标；hub-spoke 互链，独立搜索意图，无自噬
- 发售前纪律：游戏 **9/21 才发售**，所有源自 demo/prototype 的机制均句内标注
  `preview-sourced` / `community-reported from the prototype` + 英文 `[Unconfirmed]`；
  价格、数值、NPC 名、成就、配方一律未编造
- 归属红线：统一 "developed by **Cozy Lives** and published by **Free Lives**"；
  `dressmaker-vs-dressmaker-pro.md` 中的错误写法出现在**纠错段**内，属正确用法
  （**naive grep 会误报，MUST 读上下文再判定**）
- build gate PASS，25/25 静态页，12 条 `/guides/[slug]` 全 SSG
- 线上复验：12 条路由 200，sitemap `<loc>` 13 → **20**
- **QA 结论**: ✅ **PASS — 0 🔴 / 7 🟡 / 3 🟢**（报告 `.agent/qa-dressmaker-9-12.md`）
- **独立复核（主 Agent 未采信单方结论）**：QA 拉取线上 Steam `appdetails`（appid 4019220）
  逐条交叉核验，**零编造** —— 开发/发行归属、发售日、价格为空、`is_free:false`、
  Windows+macOS 无 Linux、类型、单机、辅助功能分类、配置要求、五类面料全部成立。
  两项**事实基线未覆盖却被写对**的断言（Steam 成就、三语全音频）经线上复核亦成立。
- **本批已修 3 项（commit `c06d833`，均已重部署 + 线上复验）**：
  ① 事实错误——对比表把他站类型写作 "Utilities"，实测应为 Casual / Animation & Modeling /
  Design & Illustration / Game Development（1487080、1599300 两站一致）；
  ② meta description 把绿色对齐提示写成既定事实（正文已 hedge，description 漏 hedge，
  且搜索结果摘要比正文更显眼）；
  ③ "The game has no failure state" 平铺直断，与另外 4 篇的 "has been described" 口径冲突。
  ⚠️ 其中 ①**主 Agent 自行拉取 Steam API 复核后才改**，未直接采信 QA 结论。
- **未修（网络级约定缺口，不宜单站私补）**：12 篇全缺 `sources:` frontmatter 渲染链路 ——
  `dressmakerwiki/lib/guides.ts` 无该字段、`GuideLayout.tsx` 无 sources 区块，故**即使补了
  也不会渲染**；新站已端到端支持（`sephiriawiki/lib/guides.ts:18`、
  `grainrotwiki/lib/guides.ts:18`，渲染于 `sephiriawiki/components/GuideLayout.tsx:72-80`）。
  属**全站规范决策**，须先定标准再统一推，已列待办。
- **P0 两篇超词数上限**（beginner-guide 2,213 / release-date 1,798）——800-1500 红线
  针对**每日扩充精写稿**；hub 类长文性质不同，本轮判**非阻断**，记录待议。

## 四、🔴 全网络共享组件缺陷（本日最重要发现）

**缺陷**：`components/ReactMarkdown.tsx` 表格分隔行判定正则
`/^\|[\s\-:]+\|$/` 的字符类**漏了 `|`**。markdown 分隔行形如 `|---|---|`，
中间含 `|`，故**永不匹配** → 落入数据行分支被 `split('|')` 切成单元格 →
渲染为垃圾行 `<td>-------</td>`。**即每站每篇攻略的每张表格，tbody 首行都是这条。**

| 项 | 值 |
|---|---|
| 命中面 | **42 / 42 站**（组件为复制关系，无共享包） |
| 发现路径 | BUILD-008 phase 2 子 Agent 在交接物中主动上报（非本批引入） |
| 复核 | 主 Agent **未采信单方结论**，独立复核后确认 |
| 线上实证 | dressmakerwiki P0 release-date 页 **14 处** `<td>-------</td>` |
| 产物级验证 | 本地构建 grep `<td>-{3,}</td>`：修复前 14 → **修复后 0** |
| 正则单测 | 8 例全过 — 4 种分隔行判中；4 种数据行（含 `\| Release date \| … \|`）**均未误判** |
| 线上复验 | 6 站 HTTP 200 / 表格 thead+tbody 正常 / **JUNK=0** |
| 未覆盖 | **36 站源码已修但未重新部署，线上仍为旧行为**（实测 witchspire 5 / mistfallhunter 10 / aincrad 21 处垃圾单元格） |

**修复**：字符类改为 `[\s\-:|]`，commit `d0a86db`（42 站源码全改）。
**已重发 6 站**：dressmakerwiki + 5 个扩充站（皆为当日已在途站点，属本次运行范围）。
**其余 36 站**为纯视觉缺陷、不阻断功能与 AdSense 政策，已连同批量命令记入
`docs/人工任务清单.md`，待按批次重发（静态站须重建部署才生效）。

**为何长期未被发现（根因，已固化为规则）**：历次 QA 只抽**单站**、只读**源码**、
未做**产物级**与**全网面**验证。已向 `06-Profile-QA审核员.md` 新增
「共享组件回归规则」：站级组件 MUST 当 **42 份复制体**看，发现缺陷 MUST 立即
全站 grep 报**命中站数**，且 MUST 做产物级验证（源码改对而产物未变 = 没修）。

## 五、部署校验的 DNS 陷阱（本日第二次误判拦截）

`tearsofmetalwiki.vercel.app` 本地解析被投毒至 `199.96.63.177`
（权威 `@8.8.8.8` 应为 `64.29.17.195`）→ 部署脚本校验 curl **exit 28**
（`m=15` 超时），**表现为「站点挂了」**。经 `--resolve` 改用真实 IP 后
**HTTP 200 / 55,794 B，内容完全正常**——站点从未故障。

⚠️ **叠加陷阱（已防线化）**：首次巡检时该站 `curl` 返回**空 body**，
而我当时的判据是「grep 缺陷特征 = 0 命中 → 通过」→ **空响应会让
「未验证」伪装成「无缺陷」**。已向 `12-Profile-游戏侦察员.md` 补纪律：
`HTTP=000 / size=0` 一律视为**未验证**，MUST NOT 记为 PASS；
MUST 同时断言 HTTP 200 与非零 body 长度。**本报告 §二、§四 的所有线上结论
均已按此重跑。**

## 六、QA Deep 状态

上次 full audit = **2026-09-10**（Part A 8 站 + Part B 41 站脚本化扫描），
距今 **2 天**，**未逾期**，本轮不触发。下一轮 deep 触发条件：2026-09-17 后。

## 七、遗留与风险

1. **36 站表格缺陷待重发**（见 §四）——已入库、已给命令，纯视觉，非阻断。
2. **Reddit 通道连续多日不可用** + **9/12 起 Steam 社区通道亦 ECONNREFUSED**
   → 反馈采集的两大一手来源同时缺失，本轮 5 站均改用官方评测 API
   （`appreviews`）与官方公告（`ISteamNews`）取得一手样本，**未编造任何
   Reddit/讨论区内容**，并在涉及页面 Sources 段加 Honesty note 向读者明示缺失维度。
   建议正式把「官方评测 API + 官方公告 RSS」登记为**降级通道**写入 Profile 18，
   避免每天重新发现同一问题。
3. **GA4 凭据不可 pull**（`dashboard/.env.ga4` 两值为空，Vercel 侧被标 Sensitive
   无法经 CLI 找回）→ PV>1000 名单自 9/2 快照后**无法刷新**，监控员链路仍 ⏸️。
   须在 GCP 重新签发 service account key（详见人工任务清单）。
4. **dressmakerwiki 发售日刷新**：价格/成就/itch 原型状态仍为 `[Unconfirmed]`，
   9/21 发售日须复核转 confirmed；关键词报告建议 9/22–9/25 重跑采集
   （发售前 72% 种子词零 suggestion）。
5. **跨站/站内一致性遗留（未动，改动即编造风险）**：spiritvalewiki 的 Corporeal
   套装描述与社区 DB 冲突（须对游戏内 tooltip 做合规复核）；tearsofmetal
   `app/page.tsx` 与 `app/faq/page.tsx` 对「village upgrades 是否全队共享」表述冲突。
6. **sephiriawiki 1.0.33 Known Issues**（敌人穿墙）本轮未展开，候选选题。
7. **`sources:` frontmatter 渲染链路缺口（网络级）**：dressmakerwiki 12 篇全部只有行内
   `*Sources: …*` 页脚，无 frontmatter `sources:` 字段，且组件层不支持渲染。新站（sephiria /
   grainrot）已端到端打通。**需先定全站规范再统一推**，MUST NOT 单站私自补（补了也不渲染）。
8. **P0 长文词数**：dressmakerwiki beginner-guide 2,213 词 / release-date 1,798 词超
   800-1500 —— 该红线针对每日扩充**精写稿**，hub 长文是否一并约束待定，本轮未改。

---

# QA Report — 2026-09-13（每日扩充 5 站全产出 + 事实核验 + 跨站残留全网面清扫）

> 模式：QA quick ×5（每篇扩充稿）+ 独立复核（主 Agent 亲自验证，不采信子 Agent 自述）
> 范围：5 站 5 篇新增 guide + 4 处站级修正
> 结论：**✅ 5/5 PASS，0 🔴 阻断**（1 项 🔴 在站内自行发现并修复）

## 一、扩充产出（PV>1000 名单，5/5 全产出，无 SKIP）

| 站点 | slug | 词数 | QA | 线上实测（主 Agent 独立复验） |
|------|------|:--:|:--:|------|
| sephiriawiki | `price-increase-and-worth-it-guide` | 1,486 | ✅ PASS 🔴0 | 200 / 68,555 B |
| themoundwiki | `patron-saints-guide` | 1,356 | ✅ PASS 🔴0 | 200 / 69,498 B |
| spiritvalewiki | `ptr-test-server-guide` | 1,316 | ✅ PASS 🔴0 | 200 / 62,381 B |
| tearsofmetalwiki | `charms-guide` | 1,490 | ✅ PASS 🔴1(已修) | 200 / 72,836 B |
| grainrotwiki | `outpost-decoration-stats-guide` | 1,471 | ✅ PASS 🔴0 | 200 / 67,869 B |

**主 Agent 复验方式**：逐站 `dig @8.8.8.8` 取权威 IP + `curl --resolve` 抓取，
断言 HTTP 200 **且** body 非零，并核对 `<title>` 与 sitemap 收录。
五站 size 与子 Agent 自报数字**逐字节一致** → 自报可信。

## 二、选题路径：4/5 走「系统清单驱动」（重要模式）

本站群多数游戏的**抱怨驱动路径已被榨干**——4 站的 Steam 评测聚类后，
高频抱怨 100% 收敛到既有 guide（themound 631 条评测：近战 65 / 性能 61 /
难度 35 / 进度 30 / 联机 29，全部已覆盖）。按 Profile 04 规则切换到
**system-inventory-driven**（官方公告机制清单 × 站内覆盖比对），5 站中 4 站由此命中：

| 站点 | 命中系统 | 站内覆盖证据 |
|------|---------|------|
| sephiria | 价格/商业层 | 官方 9/12 `Price Update Notice`（$14.99→$17.99，9/14 14:00 KST 生效）；38 篇价格覆盖 = 0 |
| themound | Patron Saints | 官方 1.01/1.02 公告逐字提及 ×3；38 篇 `patron`/`sacred figure`/`nine guardians` = 0 命中 |
| spiritvale | PTR / `publictest` | 全站 grep「PTR」仅 7 处，**全部**为顺带一句，无专页 |
| tearsofmetal | Charms | 全站仅 4 处非实质命中；`healing-guide` 金币预算表完全漏掉 Charm |

**结论**：抱怨驱动的边际产出已接近 0，系统清单驱动是当前主力路径。
建议写入 `04-Profile-建站协调员.md`，避免每站重复「先榨抱怨再换路径」的弯路。

## 三、本轮附带修正（超出「每日 1 篇」但属实证缺陷，均已线上验证）

| # | 站点 | 文件 | 问题 | 处置 |
|---|------|------|------|------|
| 1 | spiritvalewiki | `artifact-sets-guide.md` | **归因错误**：称 "Advanced Artifacts and Grimoires" 出自 0.31.0（8/25）公告，实际 0.31.0 全文 `Advanced` 命中 **0** | 订正为 8/2 公告（研发中）+ 9/10 公告（**已进 PTR**）；顺带修正「work in progress」的时效偏差 |
| 2 | sephiriawiki | `app/guides/page.tsx` | `EX-Mod crafting` 跨站模板残留 | → `artifact and tablet systems` |
| 3 | tearsofmetalwiki | `app/guides/page.tsx` | 同上 | 清除 |
| 4 | **taivalwiki** | `app/guides/page.tsx` | 同上（**本次全网面 grep 新发现的第 4 站**） | → `crafting professions`（站内确有该 guide） |

**#1 的核验链**（主 Agent 亲自复现，未采信子 Agent）：
`ISteamNews` 取 0.31.0 全文扫描 → `Advanced`/`develop` 命中 0；
8/2 公告命中 `"I've been working on Dark Fortress, Advanced Artifacts and Grimoires
with some of the team."`；9/10 公告命中 `"This version includes Advanced Artifacts
and Grimoires."`（PTR 分支）。**事实为真、官方，属归错误而非编造**，
但存在实质时效偏差（已进 PTR，非仅在研）。

## 四、本轮新增的规则级发现（MUST 闭环，勿只「下次注意」）

### 1. 🔴 `content/home-content.md` 是**死文件**（38 站全体）
全仓 `grep -rl "home-content"` 于 `*.ts`/`*.tsx` = **0 命中**；唯一非 md 引用是
`.agent/build-history.json`（历史记录）。`lib/guides.ts` 只读 `content/guides/*.md`，
首页 `app/page.tsx` 用硬编码 `FEATURED_GUIDES`。
**本轮 4 站的「导航登记」全部零渲染效果**（themound 已自行回退，其余保留但无效）。
新页可发现性实际由自动发现的 `/guides` 索引 + `sitemap.xml` 承担（两路径均已线上验证）。
→ **待决策**：38 站该文件归档，或接入为真实数据源。**在那之前，MUST NOT
再把「导航登记」当作新页上线步骤**。

### 2. 🟡 EX-Mod 残留是**多站模板缺陷**，非单站问题
命中 4 站：themound（9/11 修）、sephiria + tearsofmetal（9/13 修）、taival（9/13 修）。
已全网面 grep 确认**当前 0 站残留**（aincradwiki 为合法拥有者，未动）。
→ 写入 `06-Profile-QA审核员.md` 的残留检测清单，作为固定 grep 项。

### 3. 🟡 残留修复 MUST 以 `git log` 佐证，而非凭当轮声明
tearsofmetal 本轮 `git log` 显示 `app/guides/page.tsx` **自脚手架提交 `4be99c0`
起从未改动**，即 9/11 报告的该文件「已清理」声明**不成立**（该轮实际未改）。
→ 写入 `06-Profile`：**修复类声明 MUST 附 `git log`/`git diff` 证据**。

### 4. 🟡 工具链两坑（文档过时，MUST 更新）
- `npx vercel --prod --yes` 在本机被解析为 `npm run vercel` → `Missing script: "vercel"`。
  **MUST 用全局 `vercel` 二进制**（CLI 58.9.4）。SOP 与各 skill 文档中的 `npx vercel` 写法**在本机不可用**。
- **DNS 投毒是间歇性且会漂移的**：同一域名本轮先后解析到 `64.29.17.3`/`216.198.79.3`（投毒）
  与 `64.29.17.67`（真值）；tearsofmetal 域曾得 `199.96.59.95`/`216.198.79.195`（投毒）
  与 `216.198.79.131`（真值）。即 `--resolve` **不是绕坑技巧，而是取确定性的必需品**。
  `HTTP=000`/`size=0` 一律记「未验证」，MUST NOT 记为 PASS。

### 5. 🟢 采集通道状态变化
`api.steampowered.com` 与 `store.steampowered.com/appreviews` **本轮恢复 HTTP 200**
（此前数轮 ECONNREFUSED）→ 采信前 MUST 实测，勿沿用「不可用」的旧结论。
`massivelyop.com` / `steamdb.info` / `Gamer Guides` / `TrophiesHunter` WebFetch 仍 403
→ 建议登记为「索引级交叉参考，MUST 在 sources 显式披露 403」，避免把 403 误判为零信息而假 SKIP。

## 五、QA deep 状态

上次 full audit = **2026-09-10**（Part A 8 站 + Part B 41 站脚本化扫描），
距今 **3 天**，**未逾期**（>7 天触发）。下一轮 deep 触发条件：**2026-09-17 后**。

## 六、待人工 / 待决策（本轮只记录，未擅改）

1. **🔴 themoundwiki `characters-classes.md` 疑似编造**（最高优先）——该页给 4 名角色配了独有
   Trait 与数值（如 "Iron Will — 15% less Sanity damage"），但站级 `app/page.tsx` 与
   `faq-content.md` 均写「characters are purely cosmetic」，且 631 条评测语料（≥3 条独立评测）
   支持 cosmetic 一侧。**若证实为编造即为 AdSense 合规红线**。已派 fact-sweep 专项核验。
2. **🟡 tearsofmetalwiki 村庄升级共享性两页对立**——`app/page.tsx:20`「apply to all」
   vs `app/faq/page.tsx:16`「individual to each player」，两页线上均 200，属信任风险，建议优先定调。
   （9/11 已记录，本轮仍未定调）
3. **🟡 sephiriawiki Steam 评价标签**——站内 6 文件 7 处写 "Very Positive"。实测**取决于语言口径**：
   商店页英文视图 → Overwhelmingly Positive（97% of 2,693）；Recent → Overwhelmingly Positive
   （95% of 2,851）；评测 API 全语言聚合 → Very Positive（11,552/12,243 = 94.4%）。
   **MUST NOT 全局替换标签**（会在全语言口径下制造新错误），需带范围限定的表述。已派 fact-sweep。
4. **🟡 sephiriawiki** `app/page.tsx:39` 与 `lib/schema.ts:61,78` 的 "Buy on Steam" 疑指向商店首页。
5. **🟡 themoundwiki** `contracts-guide.md` 牛车「follows a fixed path」疑与官方 1.04 公告冲突。
6. **🟡 themoundwiki** `updates-patch-notes.md` PTR 起始日 8/2 vs 更早的 7/31 公告，口径待统一。
7. **时效提醒**：sephiriawiki `price-increase-and-worth-it-guide` 时效极强，
   **9/15 MUST 复核**——把 "still showed $14.99" 改为涨价后实测值，决策段转回顾式。
8. **tearsofmetalwiki** `content/guides/base-camp-guide.md` 孤儿页（早于本轮存在，无入链）。
9. **GA4 凭据不可 pull** → PV>1000 名单自 9/2 快照后无法刷新（既有遗留，未变）。

## 七、提交

本轮增量提交：`9036fe8` `f2381c7`（spiritvale）、`55a4f0e`（sephiria）、
`5aed04d`（themound）、`b71ad14`（grainrot）、`1a5ee5a`（tearsofmetal）、
`05a5a77`（taival 残留全网面清扫）。

---

# QA Report — 2026-09-16（每日扩充 5/5 全产出 + 三项事实清扫 + 规则闭环 + BUILD-009）

> 岗位：QA 审核员（`docs/agents/05-岗位卡-QA审核员.md` / `06-Profile-QA审核员.md`）
> 模式：quick × 5（逐站）+ 三项专项 fact-sweep 复验
> 结论：**5/5 站 PASS（0 🔴 阻断）**；本轮另**清除三个站的整层编造内容**（存量，非本轮引入）

**一句话结论**：扩充侧 5/5 全部产出且 QA quick 全 PASS；但**同一失效模式的编造内容在三个站同时暴露且逃过了历次 QA** —— 这是本轮真正的发现，已全部清除并固化为 Profile 规则。

---

## 一、每日扩充（名单 5 站，5/5 产出，0 SKIP）

| 站点 | 新增指南 | 词数 | 选题依据 | QA quick |
|------|---------|:--:|---------|:--:|
| themoundwiki | `ox-cart-guide.md` 牛车控制 | — | 官方 1.04 + 社区反证并列 | ✅ PASS |
| spiritvalewiki | `cosmetics-wardrobe-guide.md` 外观/衣柜 | 1,471 | **路径②** 系统清单命中 | ✅ PASS |
| sephiriawiki | `combo-system-guide.md` 连招系统 | 1,495 | 反馈驱动 | ✅ PASS |
| tearsofmetalwiki | `barracks-statues-guide.md` 兵营与雕像 | 1,496 | 官方明列、站内整块缺失 | ✅ PASS |
| grainrotwiki | `third-floor-locked-guide.md` 三楼锁定 | 1,324 | 反馈驱动 | ✅ PASS |

QA quick 明细（各站独立报告）：`.agent/qa-expand-{site}-9-16.md` ×5。

**路径②第三次生效**：spiritvalewiki 与 tearsofmetalwiki 的落点均非「抱怨聚类」直接给出，而是
「官方明列的系统 × 站内覆盖」比对命中。**再次证明「抱怨收敛 ≠ 没有缺口」**。

### 逐站 🟡 发现（均不阻断，已登记）

| 站点 | 🟡 | 内容 | 处置 |
|------|:--:|------|------|
| themoundwiki | 3 | ①`isolation-guide.md` 牛车降 sanity 有 1 条 10-vote 玩家明确反证；②`extraction-guide.md` 提取区四型表 + Compass 三模式无源；③`characters-classes.md:109` "Expedition Rank…unlocking new loadout slots" 无源 | ①已并列双方 + Scope note；②由 fact-sweep 整层清除；③**未闭合**，转 9/17 deep |
| spiritvalewiki | 3 | ①FAQ「no premium currency」与官方 premium currency + 站内 3 页商城条目冲突；②cash shop 售卖影响数值物品（模板特征）；③`pets-mounts-guide.md` 稀有度/属性/进化表无可溯源来源 | ①②由 fact-sweep 清除；③**未闭合**，转 9/17 deep（按新规则应为删除候选） |
| sephiriawiki | 2 | ①价格页改版后 ~2,100 词超 800–1500 红线（属校准类，非新写）；②Steam 评分口径未固化 | ②已写入 Profile；①建议明确豁免规则 |
| tearsofmetalwiki | 4 | ①`battalion-companion-guide.md` 具名 Companion/兵种数值编造（存量）；②`village-upgrade-guide.md` 建筑覆盖不全；③3 个来源当轮 503/429/000；④CJK 误报 | ①由 fact-sweep 清除；②已加 Scope 注记；③**未冒充已读原文**（如实标注经索引取用）；④排除 |
| grainrotwiki | 2 | ①`content/home-content.md` 死文件；②Reddit 通道连续两轮不可用 | ①已写入 Profile；②**未编造任何 Reddit 内容**，以 850 条 Steam 评测替代 |

---

## 二、🔴 本轮最重要发现：三站同源编造（存量，已清除）

三个**互不相关**的站在同日暴露出**同一失效模式**，且**全部逃过了此前多轮 QA**：

| 站点 | 编造内容 | 语料证据 | 清除提交 |
|------|---------|---------|---------|
| themoundwiki | 4 个角色名 + 4 项独有 Trait；提取系统整层（Compass 表/冷却秒数/配方/nightmare modifier/perk 数值），**散落 10 个文件** | 1,396 条评测中 0 命中；39 篇公告 + 1,925 条评测中 `perk`=2、`craft`=4、`Holy Water`=0、`Oil Lamp`=0 | `a6a853f`（跨 11 文件） |
| spiritvalewiki | 付费模式确证错误（**$14.99 买断制游戏被写成 free-to-play，含 `offers.price: '0'` 结构化数据**）+ P2W 商城条目 | 商店页 `All Microtransactions … purely cosmetic` + 173 条评测反证 | `6e9fe0b` |
| tearsofmetalwiki | 5 个具名 Companion + 解锁条件 + 兵种 HP + 技能树逐级数值 + 各 Act 招募数 + Tent 解锁表 | 官方补丁只用 Infantry/Spearmen/Archers，仅点名过 Aodh | `1cc284e` |

**根因判定**：**模板层**，非页面局部。themoundwiki 的提取页清理后暴露同模式散落 10 个文件，
证明污染来自建站模板的「生成细节」倾向，而非某次编辑失误。

**本轮最严重单项**：spiritvalewiki 把 $14.99 买断制游戏呈现为免费游戏，且
`lib/schema.ts` 的 `offers.price: '0'` 会在 Google 富媒体结果中**渲染成一个价格**。
已改为 buy-to-play / `14.99`（`genre` 同步移除 `Free-to-Play`）。

**免责句漏洞（已固化）**：tearsofmetalwiki 该页带 `community-reported` 免责句，随后照样给出精确数值。
**一句总免责不能漂白一张数值表** —— 免责只覆盖它所修饰的那一条断言。

---

## 三、QA 规则闭环（已写入 `docs/agents/06-Profile-QA审核员.md`，提交 `ca182ae`）

按 CLAUDE.md「出现新问题 MUST 更新 Profile，MUST NOT 只说『下次注意』」：

1. **语料零命中判定**——具名实体与精确数值 MUST 做全语料计数；**官方与全部可达社区来源均 0 命中 → MUST 直接删除**，MUST NOT 走「标注来源层级」降级路径。
2. **反向证据优先**——某术语的唯一命中若是玩家**要求加入**该功能，则是缺口证据，**不是**存在证据。
3. **免责句不可漂白精确数值**——见上。
4. **复合断言必须原子化裁定**——一句可含「真/假/无证据」三种子断言，MUST NOT 整句判对错（spiritvalewiki 的 `no subscription, battle pass, or premium currency` 三子断言裁定各不相同）。
5. **范围限定不可省**——Steam 评分 MUST 带语言/时间口径；英文池（97%/2,742/Overwhelmingly Positive）与全语言池（94.4%/11,703/Very Positive）是**两个数、两个标签**，MUST NOT 互换或全局替换。
6. **模板层扩散检查**——确认一处编造后 MUST grep 全站命中面并报**文件数**。
7. **导航登记与孤儿文件规则**——`content/home-content.md` 在 ≥38 站是孤儿文件；MUST NOT 再把「导航登记」当作上线步骤，可发现性 MUST 走产物级/线上证据。

---

## 四、基建与产物级验证（Profile 06 强制）

| 项 | 结果 |
|------|:--:|
| `pnpm install`（**未用 npm**） | ✅ 5/5 站 |
| `pnpm build` exit 0 | ✅ 5/5 站，静态页各 +1 |
| 产物级验证（`grep .next/server/app/**/*.html`） | ✅ 新页特征串命中；**表格分隔行垃圾 `<td>---</td>` = 0 命中**（9/12 组件缺陷未复发） |
| 部署（全局 `vercel` 58.9.4，**未用 `npx vercel`**） | ✅ 5/5 站 |
| 生产 alias 指向本次新部署 | ✅ `vercel inspect` 确认 |
| 线上验证（`--resolve` 真实 IP） | ✅ 新页 200；**无 `HTTP=000`/`size=0` 记为 PASS 的情形** |

**DNS 投毒佐证（本轮新增）**：系统 DNS 把 `themoundwiki.vercel.app` 解析到 Meta 污染 IP
`157.240.7.5`、`spiritvalewiki` 解析处理同样异常 → `--resolve` 为**确定性必要条件**，非可选技巧。

---

## 五、QA deep 状态

上次 full audit = **2026-09-10**（Part A 8 站 + Part B 41 站脚本化扫描）。
今日 **2026-09-16 = 第 6 天**，**未逾期**（>7 天触发）。**下一轮 deep 触发：2026-09-17**。

**已排入 9/17 deep 的强制项**（本轮未闭合，MUST NOT 遗漏）：

1. **🔴 spiritvalewiki `pets-mounts-guide.md`** —— 按本轮新固化的「零命中即删除」规则，
   该页的具名宠物/坐骑与进化表属**删除候选**，当前仅靠 `[Unconfirmed]` 块降级保留，
   **与新规则不符**。已派专项 sweep 复验（`.agent/fact-sweep-pets-mounts-9-16.md`）。
2. **🟡 themoundwiki `characters-classes.md:109`** —— "Expedition Rank…unlocking new loadout slots" 无源，与同页「角色无成长属性」基调冲突。
3. **themoundwiki 待清扫面**：perk 树、Nightmare modifiers、crafting recipes、weight thresholds、8 个岛屿/地名。
4. **tearsofmetalwiki 待清扫面**：伪单位系统（10 文件）+ Recruitment Tent（8 文件）+ village-upgrade 精确价格。
5. **spiritvalewiki 遗留**：等级上限 99 vs 100+（9/11 起挂起）。

---

## 六、采集通道状态（如实登记，未以「不可用」冒充「无数据」）

| 通道 | 状态 |
|------|------|
| Steam 评测 API（`appreviews`） | ✅ 200 —— ⚠️ **MUST 带 `json=1`**；缺该参数时 `cursor` 有值但 `reviews` 返回空数组，**极易被误判为「该游戏无评测」** |
| Steam 官方公告（`ISteamNews`） | ✅ 200 |
| Reddit | ❌ 连续两轮不可用（直连 403；OpenCLI `subreddit`→Failed to fetch、`search`→Navigation rejected、`hot`→TIMEOUT 60s）→ 本轮**以 Steam 评测替代，未编造任何 Reddit 内容**。待排查 OpenCLI 登录态 |
| Steam 社区讨论 | ❌ 长期 HTTP=000（DNS 投毒）→ 降级为**经搜索索引取用并强制标注**，MUST NOT 把索引摘要当原文引用 |
| `massivelyop` / `steamdb` / `Gamer Guides` / `TrophiesHunter` | ❌ 403（既有） |
| `gameshorizon.com` / `thegameswiki.com` | ⚠️ 本轮 503 / 429（单轮） |

---

## 七、待人工 / 待决策（本轮只记录，未擅改）

1. **GA4 凭据不可 pull** → PV>1000 名单自 9/2 快照后无法刷新（既有遗留，未变）。
2. **Dashboard 注册**：`doloctownwiki` / `sovereigntowerwiki` 未注册（预存在缺口）；
   `silverpineswiki` 本轮新建，待注册 + GA4 Property。
3. **Reddit / OpenCLI 登录态**：连续两轮不可用，建议排查。
4. **STATS 已更正一处长期错误信息**：此前记「anomalypresidentwiki 缺 GSC 验证文件待补」——
   9/16 逐目录复核确认**43/43 站该文件均在位**，该条为误记，已更正（含 P1 段与网站点总览表）。

---

## 八、提交

| 提交 | 内容 |
|------|------|
| `9fab583` | themoundwiki EXPAND-9/16 + 🔴 角色编造闭合 |
| `59a0a20` | spiritvalewiki EXPAND-9/16（路径②命中） |
| `dbcb77b` | sephiriawiki EXPAND-9/16 + 价格页时效校准 |
| `ac759e7` | tearsofmetalwiki EXPAND-9/16 + P0 两处闭环 |
| `ef90310` | grainrotwiki EXPAND-9/16 |
| `6e9fe0b` | spiritvalewiki fact-sweep（付费模式 + P2W） |
| `a6a853f` | themoundwiki fact-sweep（跨 11 文件） |
| `1cc284e` | tearsofmetalwiki fact-sweep |
| `ca182ae` | QA Profile 规则闭环（编造检测 / 孤儿文件） |

**站点账**：43 站 · 1002 篇攻略（本轮 +5 扩充 +10 BUILD-009）。

---

# QA Report — 2026-09-16 收尾复核追加（武器清单不一致 + 一处零命中误判纠正）

> 触发：主 Agent 在提交后做**线上产物级复核**，对三处 fact-sweep 逐条复验时发现。
> 结论：**fact-sweep 的清除结果本身正确**，但**其中一条证据是错的**，且暴露出一处尚未登记的站内不一致。

## 一、线上复验结果（`--resolve` 真实 IP）

| 站点 | 复验对象 | 结果 |
|------|---------|------|
| spiritvalewiki | 首页 JSON-LD（本轮最严重单项） | ✅ `"price":"14.99"`、`"genre"` 已无 `Free-to-Play`、正文 `buy-to-play`。**线上确证修复** |
| themoundwiki | `/guides/extraction-guide` | ✅ `Compass Calibration Kit` **0**、`Holy Water` **0**、`Nightmare` **0** —— 整层清除生效 |
| tearsofmetalwiki | `/guides/battalion-companion-guide` | ✅ 5 个具名 Companion（Fergus/Morag/Brochan/Ailsa/Torcall）**全部 0**；官方兵种名在（Infantry 14 / Spearmen 14 / Archers 26 / Aodh 10） |

## 二、⚠️ 一处零命中误判（MUST 记录，防止后续误删）

`pets-mounts` 同类判定之外，本轮发现 **fact-sweep 报告中的一条证据是错的**：

| 项 | 报告原文 | 复核实测 |
|----|---------|---------|
| `Oil Lamp` | `.agent/fact-sweep-themound-9-16.md:295` 记为「**0**」 | 官方 39 篇公告中 **2 命中**，且一条是官方对该道具的正面描述：*"The oil lamp isn't just a light source: it's a reliable companion against the jungle's unnatural dark. Unlike the torch, it won't flicker or die under the rain"* |

**处置：未删除 Oil Lamp —— 这是正确的。** 但同批判定若被机械执行，会**把官方内容当编造删掉**。
已据此在 06 Profile 追加「零命中误判防线」三条：计数必须写明「检索面+检索式+命中数」三元组；
公告语料对**单件武器/道具**是**弱证据**（按实体类别分级）；站内两份清单矛盾 ≠ 至少一份编造。

⚠️ **同日教训**：本轮的编造检测工具（零命中）与它可能造成的误伤是**同一枚硬币的两面**，
Profile 已同时固化「MUST 删」与「MUST NOT 误删」两侧。

## 三、新发现：themoundwiki 武器清单站内互相矛盾（转 9/17 deep）

官方公告 `appid 2569760` 全 39 篇逐条复核后，站内存在**两份互相矛盾**的武器清单：

| 位置 | 断言 | 官方佐证 |
|------|------|---------|
| `loadout-guide.md:51` | 「the game's six weapons — Crossbow, Matchlock Arquebus, **Flintlock Pistol**, Francesca Axe, Machete, Oil Lamp」 | Crossbow ✅ / Matchlock Arquebus ✅（官方称 "the most iconic firearm"）/ Francesca Axe ✅ / Machete ✅（"Added a machete to starting gear"）/ Oil Lamp ✅ / **Flintlock Pistol：公告 0 命中**（弱证据，未判编造） |
| `content/home-content.md:74` | 「6 Weapons — Crossbow, Flintlock Pistol, Matchlock Arquebus, Oil Lamp, **Medallion**, **Healing Salves**」 | **Medallion 官方明确定义为 support item 而非武器**：*"you can obtain powerful support items like The Medallion to uncover hidden treasures"* → 此清单把支援道具列为武器，**为误**。Healing Salves 公告 0 命中 |

**另**：官方明确把 **torch（火把）** 作为与 oil lamp 并列的光源（*"Unlike the torch…"*；另有补丁
"Fix for torches losing flame"、"lantern/torch light of the host"），而**两份站内清单都没有 torch**。

**性质判定**：这是**站内不一致 + 一处可确证的分类错误（Medallion）**，按 Profile 新规
**不等同于编造**。MUST NOT 在未取证的情况下把 Flintlock Pistol / Healing Salves 判为编造删除；
MUST 以官方"a handful of weapons … a single lamp / a shared arsenal"的表述为基准重写清单。

**已转 9/17 QA deep**，并加入下方强制项清单。

## 四、9/17 deep 强制项（更新，覆盖前文第五节）

1. **🔴 spiritvalewiki `pets-mounts-guide.md`** —— 零命中即删除规则下的删除候选（专项 sweep 进行中）。
2. **🟠 themoundwiki 武器清单统一** —— 两份矛盾清单 + Medallion 分类错误 + torch 缺失（见上）。
3. **🟡 themoundwiki `characters-classes.md:109`** —— "Expedition Rank…loadout slots" 无源。
4. **themoundwiki 待清扫面**：perk 树、Nightmare modifiers、crafting recipes、weight thresholds、8 个岛屿/地名。
5. **tearsofmetalwiki 待清扫面**：伪单位系统（10 文件）+ Recruitment Tent（8 文件）+ village-upgrade 精确价格。
6. **spiritvalewiki 遗留**：等级上限 99 vs 100+（9/11 起挂起）。
7. **全站**：按新 Profile 规则复核「以 [Unconfirmed] 块降级保留」的页面是否实为删除候选。

---

# QA Report — 2026-09-16（BUILD-009 silverpineswiki，新站 10 篇）

> 岗位：QA 审核员（`docs/agents/05` + `06`）｜模式：quick（新站全检）
> 独立报告：`.agent/qa-build009-silverpines.md`
> **结论：✅ PASS —— 0 🔴 阻断 / 5 🟡 警告 / 3 🟢 建议**

## 一、Residue Scan

| 站点 | 攻略数 | 模板残留 | 状态 |
|------|:--:|:--:|:--:|
| silverpineswiki | 10（+8 站级页） | 0 | ✅ Clean |

逐项 0 命中：他站游戏名/站名（12 个词表全扫）、**EX-Mod 跨站模板残留**、
`rose-` 调色板残留（1 处 `prose-invert` 假阳性已排除）、`next/font/google`、
假 GA4 回退值（`G-XXXXXXX`）、CJK 泄漏（`美工刀` 类）、
`localhost`/`example.com`/`TODO`/`lorem ipsum`。
**并做了线上独立复验**：`--resolve` 抓取全部渲染后 HTML 复查，产物中亦无残留。

## 二、Content Quality Sampling（编造检查 —— 本轮最高风险区）

⚠️ 背景：**该游戏尚未发售**，商店页无价格、无武器清单、无伤害值、无金币成本、无 Memento 清单——
正是今日在另三个站查出的编造类别。故本项为**专项全检**，非抽样。

| 检查项 | 结果 |
|------|:--:|
| 价格编造 | ✅ 无 —— 标注「Price — Not Announced Yet」，无 `$`、无区域定价、无「estimated」 |
| 销量/CCU/评测数编造 | ✅ 无 —— 本体明确记 **0 评测**（未发售）；802 条 / 95.9% 仅属 **demo** 且注明出处 |
| wishlist 口径混淆 | ✅ **处理得异常好** —— 「200K+ 全平台」（官方公告 6/19）与「~83K 仅 Steam」（第三方 Raijin，标 `[Unverified]`）**同行分列**，`home-content.md` 另加显式说明「MUST NOT 相加、平均或当作唯一数字」 |
| 武器名/伤害值编造 | ✅ 无 —— 全站不存在任何武器数值断言；仅提及 cutter/pistol/shotgun 且标 `[Community-reported]`，并声明**官方武器清单不存在** |
| 机制数值编造 | ✅ 无 —— 每页带来源注记 + `[Unconfirmed]` 数值表；10 篇含 **0** 个编造数字 |
| 来源编造 | ✅ 无 —— 10/10 页脚仅引 Steam 商店页/App ID 2333000 + demo 4540100、Steam appreviews、Game8 对 Mattias Snygg 的访谈、Wych Elm/Team17 联合发布物料 |
| 玩家声音编造 | ✅ 无 —— 无任何具名或改写后归属于真人的引语；社区材料一律集合式表述并标注 |
| **门禁机制被照抄** | ✅ **无，且为正面发现** —— 门禁 12 条机制中 **5 条本轮无法复核**（`gun locker code`/`herbs`·`glass bottle`/`camera photo map`/`hip pouch`/`stiletto`），建站方**选择省略或如实回答「无可验证来源」，而非当事实写出** |
| `[Unconfirmed]` 标记 | ✅ 10/10 篇共 **123 处**，0 篇缺失 |

> **本轮特别审计了 `shotgun code` 一项**：搜索建议中出现 `silver pines demo shotgun code`
> （真实秘籍意图），但无可核验来源 → 页面据实处理，未编造代码。

## 三、合规与一致性

| 项 | 结果 |
|------|:--:|
| AdSense 合规页 9/9 | ✅ |
| 归属红线（wishlist/评测口径） | ✅ |
| 裸词政策 | ✅ |
| 站内一致性 | ✅ 无矛盾 |
| 死链/自链 | ✅ Clean |
| 词数 | 7/10 在 1000–1500；3 篇超（`release-date` 2,180 / `demo` 1,653 / `map` 1,570）—— 均属**交易意图页**，长度来自 FAQ 块与 `[Unconfirmed]` 表而非灌水，**不阻断**，已记录 |

## 四、审计中修复 1 处（W-3，实质性）

`app/privacy/page.tsx:22` 原为**无条件**断言：*"This data is collected via Google Analytics…"*，
而本站 GA4 是**故意未配置**的（`googleAnalyticsId: ''`）→ **合规页上的事实错误**。
已改为条件式表述并**重新构建、重新部署、线上复验**（`/privacy` 200 / 29,514B，新措辞已在渲染 HTML 中确认）。

## 五、基建与线上验证

| 项 | 结果 |
|------|:--:|
| `pnpm install` / `pnpm build` | ✅ exit 0 |
| 部署（全局 `vercel --prod --yes` 58.9.4，**未用 npx**） | ✅ `dpl_4hY8dy6q3ZGMqzFbDVgjW6hGAV1K` |
| 别名 | ✅ `silverpineswiki.vercel.app` |
| 线上路由（`--resolve 64.29.17.195`） | ✅ **23/23 HTTP 200，0 未验证，0 `HTTP=000`，0 `size=0`** |
| sitemap 18 条 `<loc>` | ✅ 逐条单独 fetch |
| GA4 | ⏳ 未配置 —— `googleAnalyticsId = ''` 空串，**无 `G-XXX` 假回退值**；线上 `gtag(` 0 次 |
| GSC | ⏳ 未提交（验证文件线上 200，可直接提交） |

## 六、🟡 警告 5 项 / 🟢 建议 3 项（摘要）

| # | 项 | 建议 |
|---|----|------|
| W-1 | 10/10 篇 frontmatter 无 `sources:` 字段（来源置于正文页脚；`lib/guides.ts` 不读该字段，无破绽） | 全网面统一约定，或从 schema 正式移除。与 dressmakerwiki 同一处约定漂移 |
| W-2 | 3 篇超词数目标 | 发布前无需动作；若日后需分平台页再拆 release 页 |
| W-3 | privacy §2 无条件 GA 断言 | ✅ **已修复并线上复验** |
| W-4 | `<title>` 未字面含 `silver pines game` | 可接受（强塞 `game` 会伤 CTR）；已记录为**有意识选择**而非疏漏 |
| W-5 | 802 / 95.9% demo 数字本轮**无法复取**（`appreviews` curl 失败） | **发布日（10/8）前必须重验**并更新数字+日期+出处 |
| S-1 | `/tier-list` 是**刻意的非 tier list**（官方武器清单不存在，改排生存优先级 + 24 行系统状态表） | 正确处置；记录下来以免日后被「修」成编造 tier list |
| S-2 | `public/` 实际未被 gitignore | ✅ 已据此更正 STATS 与 CLAUDE.md 的陈旧规则 |
| S-3 | dashboard 注册用注释块 + `PENDING`，**无 `G-PLACEHOLDER` 回退** | 正确（规避 STATS §5.1 那类 15 站硬编码回退缺陷） |

## 七、🟠 门禁与现实不符 4 处（本轮最重要的建站侧发现）

| # | 门禁说法 | 实际 | 处置 |
|---|---------|------|------|
| 1 | 「12 条已验证机制」 | **5 条本轮无法复核**（gun locker code / herbs·glass bottle / camera photo map / hip pouch / stiletto） | 已降级为不写或标注，**MUST NOT 当事实写出** |
| 2 | 未提示机制词搜索量 | 20 条机制种子 **17 条零建议** | 机制页改以「发售后抢位」定位，**不是当前流量来源** |
| 3 | CJK 渠道可用 | zh-CN 3/5 响应字节层截断、ja 3/4 空建议 | **记为「未验证」而非「零建议」** |
| 4 | Steam appreviews 可用 | 本轮不可复现（curl 失败） | 沿用门禁 9/16 记录值并注明，**未声称本轮重验** |

**根因判定**：门禁的「已验证机制」清单**来源是搜索建议而非可核验来源** ——
搜索建议能证明「有人在搜」，**不能**证明「该机制存在」。
→ **MUST 写入 04/12 Profile**：预售期建站的门禁 MUST 把「建议里出现的机制」与
「有可核验来源的机制」**分列**，MUST NOT 合并计数。

## 八、发布日（2026-10-08）必须更新项（登记，勿漏）

价格与首发折扣 · 本体评测数与好评率（现为 **0**）· 平台实机表现 / Steam Deck 评级 / 成就表 ·
仍标 `[Community-reported]` 的 demo 机制（部分可由正式版确认）· W-5 的 demo 数字重验。

> ⚠️ 本站**预售期建站**（早于发售 22 天），123 处 `[Unconfirmed]` **不是灌水，是 9/16 的正确认知状态**。

---

# QA Report — 2026-09-16（收尾专项：pets-mounts 整层编造清除，闭合 9/17 deep 强制项 #1）

> 专项 sweep 独立报告：`.agent/fact-sweep-pets-mounts-9-16.md`（含 Profile 06
> 「零命中的误判防线」合规表）
> **结论：✅ 清除成立，线上已复验**；9/17 deep 强制项 #1 **已闭合**

## 一、执行结果

| 站点 | 文件 | 处置 |
|------|------|------|
| spiritvalewiki | `content/guides/pets-mounts-guide.md` | **重写（+121/−93）**：删除 20 个具名实体 + 8 套编造系统 + 总括 `[Unconfirmed]` 免责横幅 |
| themoundwiki | `content/guides/characters-classes.md` | 删除 `Expedition Rank — … unlocking new loadout slots`（39 篇公告 + 商店页 + 4,067 条评测 **0/0/0**） |

**删除的 8 套编造系统**：宠物稀有度阶梯 · 逐稀有度属性加成 · 角色推荐宠物 ·
宠物 XP 等级表 · 含材料的进化系统 · 坐骑速度分级 · 坐骑获取与训练 ·
收藏家里程碑清单 · 坐骑装饰（护甲/鞍袋/染色）。

**删除总括免责横幅**是本轮的关键动作 —— 按 Profile「免责句不可漂白精确数值」，
一句 `[Unconfirmed]` 覆盖整页表格**不构成合规**。

## 二、保留并加固的官方确证内容（**逐条重验，未沿用前轮结论**）

外观定位 · 宠物拾取 · 衣柜与可交易 · 移速加成 —— 全部官方确证，**brief 判断正确**。
页面另补入**真实存在**的具名外观宠物/坐骑（Fire Fox / Ice Fox / Banana Duck /
Green Whale / Mystery Pet Box / Mount Box / 0.31.0 赞助者设计款）并加 `sources:` frontmatter。

**一处事实精修（未以一个无源数字替换另一个）**：`40%` 移速加成是
**Playtest 时期（2026-03）**的值；正式版 `[0.31.0]`（2026-08-25）**上调**并把移速上限
封顶在 **+100%**。页面**两个值各带日期并列**，未把 40% 当作当前值。

## 三、⚠️ 本轮最重要的方法论发现：官方公告流**分属多个 appid**

该 sweep 的**首轮语料不完整，一度险些误驳正确结论**。

| 项 | 事实 |
|----|------|
| 正式版 app | `3767850` —— 其公告在 **2026-02-06 → 2026-04-19 之间直接跳空** |
| 缺失的公告实际位置 | **Playtest app `3918510`** —— March 2026 cosmetics 公告挂在此处 |
| 补上该面后 | `Mount: give you 40% movespeed out of combat` 与衣柜/可交易描述**逐字出现** |
| 最终检索面 | **84 篇公告 = 两个 app 合计**；评测 **5,211 条 = 该 app 列出的 100%** |

**已固化入 06 Profile**：零命中判定 MUST 先确认该游戏有几个 appid，
试玩/Playtest/Demo 版是独立 app 且有各自公告流；只查正式版会漏掉整段官方历史
→ **假零命中 → 误删官方内容**。检索面 MUST 写明全部 appid 与各自篇数。

## 四、⚠️ 第二个方法论发现：词频 ≠ 支持证据

该 sweep 报告记录了 3 处去混淆，均属「原始命中数会制造有支持假象」：

| 陷阱 | 实例 |
|------|------|
| 同形不同指 | `Level 20/30/40/50` 在评测语料中**每一处**都指**角色/怪物**等级，从无宠物进化阈值之意 |
| 同词不同域 | `Rarity` 官方公告中仅用于**精华**稀有度与 Boss 掉落，从无宠物稀有度 |
| 张冠李戴 | 该页原把 `Shield Bash`（补丁公告中的 **Paladin** 技能）当作宠物主动技能 |

**已固化入 06 Profile**：MUST 逐处读上下文核对，MUST NOT 以「词出现了 N 次」替代
「该断言有据」；去混淆结论 MUST 写进报告。

## 五、证据强度分级已实际执行

单件材料（`Evolution Stones` / `Mythic Core` / `Rare Crystal`）属 Profile 新规中的
**弱证据**类别 → 故对**商店页 + 全量评测**都清过才删，**未仅凭公告缺失下判**。
其余具名宠物/坐骑与系统属**强证据**类别（官方必宣传），公告 0 命中即成立。

## 六、线上复验

`--resolve` 真实 IP（本机 DNS 确认投毒：`157.240.10.36` = Meta IP vs 真值 `64.29.17.3`）：
两页 **HTTP 200 且字节非 0**（75,815 / 63,258）。编造词**仅**出现在本页
「已移除」披露清单中 —— 已**逐处打印上下文**核对，非残留。

## 七、⚠️ 新登记的跟进项（转 9/17 deep）

1. **🟠 themoundwiki `characters-classes.md` 进度列表的同类兄弟条目** —— 本次只删了
   `Expedition Rank` 这一行，但同一列表中：
   - **`Perks`**：官方公告 **0 命中**；评测中 25 处命中**全部是玩家在「要求加入该功能」**
     → 按 Profile「反向证据优先」这是**缺口证据，不是存在证据**
   - **`Logbook`**：Logbook 本身真实，但「**completing entries grants permanent bonuses**」
     为 **0 命中**
   → 该进度列表**仍保有两条与我刚删除的那行证据质量相同的断言**。
   **本轮未擅动（超授权范围）**，MUST 在 9/17 deep 处理。
2. **未决线索（记为「未验证」，非零命中）**：搜索摘要提示存在一个
   Kickstarter「enhanced pets and mounts」**未达成**的众筹目标 —— 若属实，
   可解释宠物/坐骑成长系统为何缺失。但 MassivelyOP / Kickstarter / MMO.Net
   本轮 **403/404**，**故未作任何断言**。

---

# 新词探索 — 2026-10-23（定时任务恢复首日）

> 完整报告：`keyword-results/discovery-2026-10-23.md`；候选池：`keyword-results/CANDIDATE-POOL.md`
> 说明：本段由主 Agent 按 `auto-build-site.sh` 每日协议补录（原探索 Agent 未追加到本文件）。

## Top 3 机会

| # | 候选 | 评分 | 建站窗口 | 竞争现状 | 建议 |
|---|------|------|----------|----------|------|
| 1 | **DREADMOOR** | 17/20 | 预发布，窗口内 | 真正的零组织化 wiki（日文仅 gamewith 新闻页） | 优先建站；发布窗口词先做，机制页售后补 |
| 2 | **Emberville** | 18/20 | 预发布，窗口内 | **非零 wiki**：已有 thegameswiki / emberville-wiki.wiki 两套英文站 | 需差异化（计算器/数据库/版本追踪），否则不做 |
| 3 | **Cozy Game Restoration** | 16/20 | 10 月窗口 | 未检索到 Fandom/wiki.gg，仅零散攻略文 | 可做，规模小、维护成本低 |

## 现有站新词缺口

`keyword-results/new-keywords-2026-10-23.md` 记录 3 个高 PV 站的 24 个缺口词，已并入下一轮扩充排期。

---

# 新词探索 — 2026-10-24

> 完整报告：`keyword-results/discovery-2026-10-24.md`；候选池：`keyword-results/CANDIDATE-POOL.md`（#56–#60）
> 关键词报告：`keyword-results/Loftia.md`（72 有效词）、`keyword-results/Chained-Beasts.md`（29 有效词）

## Top 3 机会

| # | 关键词簇 | 对应候选 | 评分 | 为什么现在写 | 窗口 |
|---|----------|----------|------|--------------|------|
| 1 | **stormforge release date / stormforge classes / stormforge co-op** | Stormforge | 17/20 | 100K+ wishlist、demo 35K 下载；EN/ZH/JA 三语**零组织化 wiki**；11/10 EA 前是建站黄金窗口 | 17 天 |
| 2 | **dreadmoor release date / dreadmoor gameplay** | DREADMOOR | 17/20 | 10/23 报告 161 有效词、真零 wiki；11/9 EA，仅比 Stormforge 早一天 | 16 天 |
| 3 | **loftia release date / is loftia free / how to join loftia beta** | Loftia | 16/20 | 72 有效词高度集中在发售/平台/价格/Beta；11/3 EA，预发布流量结构最清晰 | 10 天 |

**排期建议**：10/25 优先建 Stormforge（评分最高、窗口最长）；DREADMOOR 同日或次日；
Loftia 排在其后。Chained Beasts 已因名字污染重、需求偏小下调为观望。

**补采（10/24 当日追加）**：上表的 Stormforge 关键词为**推断**，当日已补做 Google Suggest 实测，
报告见 `keyword-results/Stormforge.md`：110 条原始建议中仅 **27 条**指向本作，**70%** 为同名
**WoW 私服**噪声，且没有任何深度系统词（无 boss/build/crafting/base building 问法）。
据此把 Stormforge 从「下一轮优先建站」**下调为 EA 后 3–7 天观察**；10/25 建站优先级改为
**DREADMOOR（已有 161 词报告、11/9 EA）> Loftia（72 词、11/3 EA）> Stormforge**。
候选池 #56 评分与建议已同步修正。

**本轮未建站的原因**：今日 5 站强制扩充 + 逾期 52 天的全量 deep QA 已占满预算；
即使按原排期，Stormforge 距 EA 仍有 17 天，推迟一天不损失窗口（评分 ≥15 的建站资格保留）。

---

# 每日扩充 QA — 2026-10-24（PV>1000 重点站）

> 模式：quick（每站产出后立即执行）→ build → 部署 → `scripts/verify-guide-live.sh` 线上内容级复验
> 名单：`.agent/expand-daily.json`（sephiria / themound / spiritvale / tearsofmetal / grainrot）

| 站点 | 选题来源 | 产出 | 词数（去表格） | `[Unconfirmed]` | sources | QA | 线上复验 |
|------|----------|------|:---:|:---:|:---:|:--:|:--:|
| sephiriawiki | 反馈驱动（Steam 讨论 + 官方 Known Issues 交叉） | `stuck-soft-lock-recovery-guide` | 1,142 | 2 | 9（5 Official / 3 Community / 1 Editorial） | PASS | PASS（HTTP 200，Talk to Rylie ×5） |
| themoundwiki | 反馈驱动（Reddit r/TheMoundOmenofCthulhu 多串 + 官方补丁） | `tulu-cylinders-unlock-the-mound` | 1,332 | 5 | 11 | PASS | PASS（HTTP 200，3 标记命中） |
| spiritvalewiki | **非反馈驱动**（官方 0.32.0 系统清单；反馈驱动记 SKIP） | `advanced-artifacts-grimoires-guide` | 1,449 | 2 | 10 | PASS | PASS（HTTP 200，3 标记命中） |
| grainrotwiki | 反馈驱动（Steam 讨论 + 官方 1.11–1.13 补丁） | `legendary-gumball-constructs-guide` | 1,312 | 9 | 11 | PASS | PASS（HTTP 200，3 标记命中） |
| tearsofmetalwiki | 反馈驱动（Steam 讨论 ×4 + 评测 ×1，开发者回帖定规则） | `trials-mother-stone-challenges-guide` | 1,373 | 7 | 10（4 Official / 5 Community / 1 Editorial） | PASS | PASS（HTTP 200，3 标记命中；sitemap 46 URL 已收录） |

## 事实核验要点

- **themound**：Tulu 圆筒的 5 个契约、随机刷新点、音效/绿光提示、满板导致契约不出现 —— 均有多条
  Reddit 独立串（7/18–8/29）与官方 1.05/1.06 补丁交叉；「圆筒是 unlock 条件」本身无官方文案，
  正文已用反向证据与社区一致做法表述，未把推测写成机制。
- **spiritvale**：0.32.0 Advanced Artifacts & Grimoires 的系统名、Box of Mastery、Masterwork Cores
  均有官方来源；同时修正了 `artifact-sets-guide` 中「高级神器尚未上线」的过期断言。
- **grainrot**：传奇 gumball 与 Vibe Modulator 的「三个同名 gumball」歧义在文首拆分；未确认的
  掉落/保底写明 `[Unconfirmed]`。同日把 `patch-notes-guide` 补到 1.13，消除「当前版本」自相矛盾。
- **sephiria**：卡关路径（第 6 章 Rylie 消失、Library 战后房、任务未保存、联机进度不同步）分别对应
  官方 1.0.23 / 1.0.24 / 1.0.28–1.0.33 修复记录，修复不了的部分给上报所需信息，未编造 GM 命令。

## SKIP 记录

- **spiritvalewiki** — 当日无满足「≥3 独立来源 + 真缺口 + 不编造」的反馈驱动选题；Steam 评测 API
  302、Reddit 403/429，可采样本不足 Profile 要求的 20 条。已写入 `.agent/expand-daily.json` skips，
  次日优先补跑。当日产出的系统指南不计入反馈驱动。
- **tearsofmetalwiki** — 采集面：`appreviews` 直连超时、公共代理只回门户页，改抓
  `steamcommunity.com/app/1913120/reviews/` HTML（recent 10 + toprated 10，共 20 条真实英文评测）
  与 4 条 Steam 讨论串；匿名分页 p=2..8 均回第 1 页，未达 100–300 条，已在报告中声明。
  选题落在「Trials / Mother Stone Challenges」与局内 Challenge 事件**同名两系统**（全站 0 专页），
  并纳入 10/20 玩家报告 + 开发者 WoofgangPCG 在帖内的 per-hero / 主机选级 / client 仅低于主机才 +1
  规则；未确认的总层数、具体倍率均标 `[Unconfirmed]`，demo 期旧帖明确标注为旁证。

## 新关键词机会（2026-10-26 补记，10-25 轮遗留）

- **Hela: of Mice & Magic**（12/1 1.0）— `node scripts/harvest-keywords.mjs` 采到 42 个有效词，
  但**攻略型占比 0%**（31 条 FAQ/发售平台、11 条待定，codes/boss/tier 全为 0 条）→ 触发「发售日陷阱」，
  需求封顶 3 分，不构成建站依据；建议发售 1–2 周后再采一轮。
- **UnderMire**（11/13）— 219 条去重建议里仅 2 条有效（99% 是 `UnderMine` 同名噪声）→ 判「搜索需求低」。
- 结论：预售期游戏挖不出攻略型词，发现轮 MUST 以「已发售 ≤30 天 + 有评测量」为主战场。

---

# 新关键词机会 — 2026-10-26（当日探索轮汇总）

> 来源：`keyword-results/discovery-2026-10-26.md`（6 源扫描）+ `keyword-results/selection-2026-10-26.md`（7 候选四维评分）
> 说明：本轮无候选达 ≥17 明确读法，**下列词是「若开建」的优先落点**，不是已建站的内容计划。

**Top 3 值得下一步写的关键词**

1. **`neon abyss 2 all bosses` / `neon abyss 2 boss list`**（Boss/Characters 簇 12 词，含 `bosses in order`、`eris boss`、`final boss`）
   — 全站最厚的一簇搜索意图。CapyDB 这类数据库覆盖 items/weapons/agents/hatchmon/faiths，**不覆盖 Boss 打法和顺序**，
   是真正的攻略缺口；若 Neon Abyss 2 获确认建站，这是首发第一页。

2. **`neon abyss 2 character tier list` / `neon abyss 2 best character`**（Tier List 簇 3 词 + `character unlock` / `secret characters`）
   — 强比较意图、可长期更新；与 Boss 页分属不同搜索意图，不构成自噬。`secret characters` 还带隐藏内容解锁需求。

3. **`neon abyss 2 local co op` / `neon abyss 2 multiplayer not working`**（Co-op 簇 8 词，页型仍为「待定」）
   — 8 个词里一半在问「有没有本地/同屏合作」，另一半在问「联机坏了怎么办」；
   前者是 FAQ，后者是排障页，二者可合成一个「联机完全指南」，也与站点现有 FAQ 页互补。

**次选（不建议优先）**：Hellraiser: Revival 的 `codes` 簇（9 词、锚定率 76.8%）搜索意图明确，
但血腥/性主题对 Adsterra 合规有风险，即使建站也应后置。

**结论**：本轮关键词工作的产出是「一个卡线候选 + 三组可用词簇」，**没有可直接开工的 ≥17 分站点**；
需用户对 Neon Abyss 2 的 16–17 分做出确认，或等复采后攻略型占比自然 ≥40%。

---

# 每日扩充 QA — 2026-10-26（PV>1000 重点站，主 Agent 手动运行）

> 模式：quick（每站产出后立即执行）→ build → deploy → `scripts/verify-guide-live.sh` 线上内容级复验
> 名单来源：`.agent/expand-daily.json` 原名单 5 站 + 按 30 天 PV 复核新过线 3 站
> （dashboard `/api/traffic` 2026-09-26→2026-10-26：nivalis 2,400 / sephiria 1,242 / waterpark 1,196 / shiftatmidnight 1,099）

| 站点 | 选题来源 | 产出 | 词数 | 来源（O/C/E） | QA | 线上复验 |
|------|----------|------|:---:|:---:|:--:|:--:|
| sephiriawiki | 反馈+系统双路径 | `wishing-fountain-capacity-guide` | 1,491 | 7/3/2 | PASS（2 警告） | PASS（HTTP 200） |
| themoundwiki | — | **SKIP 新页**；改做 `updates-patch-notes` 补 1.06 | 1,776（校准例外） | 3 Official 新增 | PASS（2 警告） | PASS（HTTP 200） |
| spiritvalewiki | 反馈驱动（5 社区源） | `empty-maps-missing-monsters-guide` | 1,500 | 1/5/1 | PASS | PASS（HTTP 200） |
| tearsofmetalwiki | 系统缺口 + 讨论区 | `seraphic-blade-unlock-guide` | 1,474 | 1/4/1 | PASS | PASS（HTTP 200） |
| grainrotwiki | 官方系统清单 | `save-files-and-coop-progress-guide` | 1,500 | 3/2/1 | PASS | PASS（HTTP 200） |
| nivalisnightswiki | 反馈驱动（manager 超买/腐烂） | `manager-restock-guide` | 1,474 | 3/4/1 | PASS-WITH-WARN | PASS（HTTP 200，sitemap 27 URL） |
| waterparksimulatorwiki | 官方补丁 + 讨论区 | `stuck-guests-fix-guide` | 1,373 | 2/4/1 | PASS-WITH-WARN | PASS（HTTP 200，sitemap 26 URL） |
| shiftatmidnightwiki | 反馈+官方系统 | `shop-rating-cleaning-guide` | 1,421 | 2/3/4 | PASS（1 P2） | PASS（HTTP 200） |

## 本日遗留（非阻断）

1. **themound SKIP 成立**：可达面只有官方公告 API；Steam 评测/讨论区 TCP 不可达、Reddit 403、eddrit 被拦。
   抱怨面已被 5 篇既有页覆盖；系统空白（珠宝盒/Rosary/Tsath pearls）无来源，写必编造。已记入 `expand-daily.json` skips。
2. **themound 「39 official announcements」表述陈旧**（现 40 条），散落约 15 文件 61 处 → 需下一轮批量校准。
3. **sephiria 旧页术语冲突**：`artifacts-guide` / `inscriptions-guide` 写「Artifact Slot +1」，官方无此说法；
   新页已解释，旧页未动 → 下一轮统一。
4. **跨站模板问题（P1）**：`GuideLayout.tsx` 渲染 frontmatter 标题为 `<h1>`，正文 markdown 又有一个 `#`，
   线上每页实测 **2 个 H1**（`curl | grep -o "<h1" | wc -l` = 2），与「有且仅有 1 个 H1」冲突。
   新建的 neonabyss2wiki 已采用「正文不写 H1」写法；存量 45 站需批量决策（改模板 demote h1→h2，或删正文 H1），本轮未动。
5. **并发运行冲突（重要）**：本次手动运行期间，08:30 的定时 `claude -p` 同时运行并
   ① 覆盖了 `.agent/qa-report.md`（已恢复并另存 `.agent/qa-neonabyss2-2026-10-26.md`）；
   ② 建站并部署 `neonabyss2wiki`（四维 16 分，属 15–16 需用户确认档），commit 4c13518 声称「用户决定」，
   但本会话无任何用户输入记录，**该确认无法核验**。详见本轮主管报告「待人工处理」。

---

# QA Quick — 2026-10-26 晚轮（21:00）P2 事实校准

> 触发：本日遗留 #2（themound 公告数陈旧）、#3（sephiria 神器术语冲突）
> 模式：quick（只审本轮改动文件）；详细证据见 `.agent/qa-p2-fixes-2026-10-26.md`

| 站点 | 改动 | 核验方式 | 结果 |
|------|------|----------|------|
| themoundwiki | 25 个文件：39→40 官方公告、36→37 开发者帖、「through Patch 1.05」→1.06 | `ISteamNews GetNewsForApp/v2`（appid 2569760，独立复算 40 条 = 37 dev + 2 RPS + 1 SteamDB；最新 1.06 gid 1845383656393418） | PASS，残留「39」= 0 |
| sephiriawiki | 3 篇：`Artifact Slot +1` → Wishing Fountain capacity（base 4，Willpower +5），补官方 0.10.0 来源 | Steam 公告 appid 2436940 gid 1819386365106847（2025-12-24）核对原文 | PASS，残留 4 处均为有意保留的对照解释 |

- 构建：两站 `next build` 成功；部署：各 1 次，`verify-guide-live.sh` 线上内容级复验 PASS（HTTP 200）。
- 交付台账：`delivery-2026-10-26.json` 已追加 themoundwiki 行（types 含「修正」，words 1776），飞书已合并。
- 附带修复：`scripts/feishu-report.mjs` 同日重试成功不再登记 T5 失败（本日 spiritvalewiki 07:44、themoundwiki 21:08 两次瞬时失败均已在 2 分钟内重试成功）。

---

# 新关键词机会 — 2026-10-26 晚轮（21:00 launchd 第二轮）

> 来源：`keyword-results/discovery-2026-10-26-round2-b.md`（7 源扫描，11 候选）
> + 5 份 Suggest 报告（`Nivalis-Nights` / `zedzone` / `permafrost` / `moonsweepers` / `escapefromplaytime`）
> + `keyword-results/selection-2026-10-26-round2.md`（12 条 SERP 查询）
> 结论：本轮 **0 个候选达 ≥17 分**（Permafrost 12 放弃、Moon Sweepers 11 放弃，其余 9 个词库未过硬门槛）。
> 因此下面 3 个词是**在运营站的内容缺口**，不是新站依据。

**Top 3 值得下一步写的关键词**

1. **`nivalis nights how to cook` / `how to get rid of rotten food` / `how to drop dead rat`**
   （How-to 簇 17 词中的食物链，站内 0 个烹饪页）—— 19 个既有页里只有 `manager-restock-guide`
   顺带提到「菜单/配方」（grep `recipe` 全站仅 2 页各 1 处），腐坏食物与死鼠处理是高频且具体的问题，
   可合成一页「食物、烹饪与腐坏库存」（≥1,200 词），不与 `manager-restock-guide` 同意图。
2. **`nivalis nights how to unlock recipes`**（含 `unlock recipes` 变体）—— 配方**解锁条件**与烹饪**操作**
   是两个搜索意图，可独立成页；若来源不足则并入上页 H2，不硬拆凑数。
3. **`nivalis nights how to get to oil rig`**（另有 `how to board boat` / `how to refuel boat` /
   `how to get to the docks`）—— 全站 `oil rig` 命中 **0 次**，`transportation-guide` 只讲城内交通，
   船与离岸点位是明确空白；写成「船只与离岸点位」新页，或并入 `hidden-locations-guide` 作 H2。

**次选 / 否决**

- **ZED ZONE `zed zone map` 簇**（map / map size / map icons / map legend + best build / best weapon，
  57 词、锚定 58.2%）—— 攻略型占比仅 19%（<30%），触发「发售日陷阱」需求封顶 3 分，**不构成建站依据**。
- **Permafrost** 173 词看似最优，但 98.9% 锚定率是单一通用词的假象（Calamity/Terraria、DC、Fisch、
  P99、PoE2 的 Permafrost 全被算作本游戏），且 77/173 是发售平台 FAQ → **12 分放弃**。
- **Moon Sweepers** 24 词、攻略型 12.5% → 11 分放弃；**Escape from Playtime** 34 词、锚定率 42%
  落在 30–50% 可疑带（Poppy Playtime 系列串词混入）→ 词表可信度不足，本轮不评分。

**口径提醒**：Nivalis 站内多处标注「pre-release coverage, unverified until launch」，新页 MUST 只用
官方公告/商店页可核验的机制，操作细节无来源的标 `[Unconfirmed]`，不得为凑词数编造按键或数值。

---

# QA Report — 2026-10-26（QA-R3-BUILD — rekawiki + gonefishingwiki）

> 追加在既有历史报告之后，**未删除/未修改任何既有内容**。
> 依据：`docs/agents/05-岗位卡-QA审核员.md`、`docs/agents/06-Profile-QA审核员.md`、`docs/STRATEGY-内容生产.md`。
> 输入：`keyword-results/selection-2026-10-26-round3.md` §三/§五、`reka-matrix.md`、`gonefishing-matrix.md`、`*-sources.md`、两份建站自查报告。
> 模式：quick（建站日 + 本轮新增内容）。只报告，不修复、不改站点、不部署。

## 执行摘要

| 站点 | 篇数/词数（QA 实测） | P0 覆盖 | 线上 200 率 | 结论 |
|---|---|---|---|---|
| `rekawiki` | 7 篇 / **9,799 词**，单篇 1,237–1,602 | 7/7 = 100% | 13/13 预期路由 200（`/tier-list` 已按 30f1f16 主动下架 → 404） | **PASS**（0 🔴 / 4 🟡） |
| `gonefishingwiki` | 7 篇 / **10,177 词**，单篇 1,237–1,633 | 8/8 = 100% | 14/14 = 100% | **PASS**（0 🔴 / 4 🟡） |

**一句话结论**：两站均无编造内容、无跨站游戏名/域名污染、来源与写作规格达标、线上可用；未发现 🔴 阻断项。遗留 🟡 集中在**模板 Terms 页残留他站发行商名**（影响 3 站 + 未来新站）与**首段略超 60 词**。

**词数口径**：QA 用 node 脚本自行统计（去 frontmatter / 代码块 / URL / markdown 符号 / 表格分隔行，保留表格单元格文本），与 `lint-guides.mjs` 口径不同，故数值略高于建站自报（REKA 9,290 → 9,799；GONE 9,950 → 10,177），两套口径都满足「总词数 ≥8,000、单篇 ≥1,200」。

**与自查报告的差异（须记录）**：
1. REKA 自查称 `/tier-list` 线上 200 且渲染 “The ranking is being built.”；QA 实测时该路由已在 **commit `30f1f16`（fix(reka): 下架空壳 /tier-list 页）** 被删除并重新部署，线上为 **404**，sitemap/Header 入口同步移除。自查报告该条已过期，不是缺陷。
2. GONE 自查的开发/发行写 **GONE Studios**，分析报告 §5.1 写 **ABCT Productions**。QA 以 Steam AppDetails 为准判定：**GONE Studios 正确**（详见 GONE 第 3 项）。

---

# 一、rekawiki（REKA）— PASS

- 线上：https://rekawiki.vercel.app
- 目录：`rekawiki/`；7 篇攻略 + 模板静态页
- 游戏：Steam app 1737870；1.0 发售 2026-10-26

## 1. Residue 扫描 — ❌ 有残留（仅 Terms 页，模板级）

| 扫描项 | 结果 | 证据 |
|---|---|---|
| Hugo shortcode / `{{…}}` / 模板占位符 | ✅ 0 命中 | 扫 `content/ app/ components/ lib/` |
| 他站游戏名（Witchspire / Aincrad / Mistfall / SpiritVale / Neon Abyss / The Mound / DREADMOOR 等） | ✅ 0 命中 | 同上 |
| 他站域名（`witchspirewiki.vercel.app` 等） | ✅ 0 命中；`vercel.app` 仅本站 `rekawiki.vercel.app`（privacy/terms/seo-config） | `rekawiki/lib/seo-config.ts:11` |
| 旧 Adsterra / AdSense 注入 | ✅ 无注入 | `lib/adsterra-zones.ts` 两 zone 空数组；`lib/seo-config.ts:19` `googleAdsenseId: ''`，layout 条件渲染不输出脚本 |
| **错误商标/他站发行商名** | ❌ **`Digital Vortex Entertainment`**（DREADMOOR 的发行商）出现在 Terms | `rekawiki/app/terms/page.tsx:29-30`：`(Emberstorm Entertainment / Digital Vortex Entertainment)`；根因 `templates/wiki-base/app/terms/page.tsx:29-30` 硬编码 |
| 中文渲染内容 / `[待确认]` | ✅ 0；不确定项用 `[Unconfirmed]` | 7 篇正文 CJK=0 |
| 中文代码注释（不渲染） | 🟢 2 处 | `rekawiki/lib/seo-config.ts:18`、`rekawiki/lib/adsterra-zones.ts:2`；仅注释，不进 HTML |

> 影响面（共享模板规则）：`templates/wiki-base` 的 Terms 页把 `{{DEVELOPER}} / Digital Vortex Entertainment` 写死。当前命中 **3 站**：`rekawiki`、`gonefishingwiki`、`neonabyss2wiki`（`dreadmoorwiki` 属合法使用）。**建议主 Agent 优先修模板 + 3 站**，属非阻断 🟡。

## 2. 内容抽样 — ✅ 无编造（7/7 全读）

抽样比例 100%（Profile 要求 ≥30% 且最少 3 篇）：`beginner / cooking-recipes / how-to-get-flour / leshy-trial / cottage-moving / character-appearance / reka-faq` 全部逐行读过。

- **具名实体**：Barzlin、Leshy、Luthi、Big Larch、Witch's Talisman、Kopnik、Trial of the Chicken、Faithful Crows、Mortar and Pestle —— 均能追到 `reka-sources.md` 的 Upcomer / Rutab / 2UpSkill / Critical Hits 条目；无「官方从无提及 + 社区 0 命中」的具名角色/系统。
- **精确数值**：24 道配方、售价 6–12 coins、松果 20 / 投掷约 10 次、3 名伐木工、1 水果粥 + 3 普通粥、4 稻草人 —— 均来自两张独立配方表（NineWiki + Cozy Gaming Panda）或 Upcomer/Rutab 双源；页面脚注按 Official/Community/Editorial 分级。
- **不确定项**：全文 `[Unconfirmed]` 共 31 处（FAQ 9、外观 5、面粉 5、烹饪 3、新手 3、小屋 3、Leshy 0），未把美区美元价、主机版、Steam Deck、联机 mod、蛋的稳定来源、磨粉写成事实。
- **冲突处理**：`oven`/`stove`、第三件恩惠（破陷阱 vs 救动物）、松果数量随种子变化 —— 均以「两说并列/范围表述」呈现，未强行裁定。
- **批量痕迹**：7 篇结构各异（步骤表 / 配方表 / FAQ / 排查清单），未见「同句式换名词」。

## 3. 事实核验（对 Steam / 官方 / 媒体）

| 断言 | 站点值 | 核验结果 | 来源 |
|---|---|---|---|
| 1.0 发售日 | 2026-10-26 | ✅ 与 Steam + 4Gamer/Famitsu 一致 | 搜索 + `reka-sources.md` A1/A2 |
| Early Access 起始 | 2024-09-12 | ✅ | Steam |
| 开发 / 发行 | Emberstorm Entertainment / Fireshine Games、Shochiku | ✅ | Steam + Famitsu |
| 价格 | 国区 ¥76 → ¥49.40（-35%），Deluxe ¥91.80→¥63.18 | ✅ 算术自洽（-35% / -31%）；美区标 `[Unconfirmed]` | Steam CNY 区 |
| 语言 | 9 种（含简中） | ✅ | Steam |
| 平台 / 联机 | PC Windows / 单人 | ✅ 商店无 co-op 标签 | Steam |
| 配置 | 最低 16 GB RAM、GTX 1060 6GB、10 GB | ✅ | Steam |
| 评测数 / 好评率 | **未发布**（正确留空） | ✅ 无未核实评分断言 | — |

## 4. 内容量 — ✅ 达标

页型 + 词数表（QA 自数）：

| 页 / 页型 | 词数 | H2 数 | 问题式 H2 | 表格 | 首段词数 |
|---|---|---|---|---|---|
| reka-beginner-guide / beginner | 1,602 | 11 | 有 | 有 | 54 |
| reka-cooking-recipes / codes（顶替） | 1,439 | 8 | 有 | 有 | 61 |
| reka-how-to-get-flour / boss-or-mechanic | 1,293 | 8 | 有 | 有 | 58 |
| reka-leshy-trial / boss-or-mechanic | 1,507 | 10 | 有 | 有 | 60 |
| reka-cottage-moving / boss-or-mechanic | 1,428 | 10 | 有 | 有 | 63 |
| reka-character-appearance / boss-or-mechanic | 1,237 | 10 | 有 | 有 | 63 |
| reka-faq / faq | 1,293 | 14 | 有 | 有 | 56 |
| **合计** | **9,799** | — | — | — | — |

- 页数 7（5–8 ✅）、总词数 9,799（≥8,000 ✅）、单篇最低 1,237（≥1,200 ✅）。
- 页型：beginner 1、codes（recipes 顶替）1、boss-or-mechanic 4、faq 1 = **4/5**；`tier-list` 因本作无层级系统未建，符合「页型是候选池不是必建清单」。

## 5. 矩阵覆盖 — ✅ P0 100%

- `keyword-coverage.mjs --slug reka`：P0 7/7 = **100%**；P1 2/4 = 50%（D+30 才要求 ≥70%，建站当日不适用）；P2 1/3。
- 未落地 P1/P2 行（`black-salt`、`house-ideas`、`eggs`、`pancakes`）保留在矩阵，未删行。
- **矩阵外的页**：脚本报 `faq`，实为模板静态 `/faq`（本站通用页），非为矩阵外意图新造；无「为完整性建页」的 FAIL 项。
- 说明：`reka-matrix.md` 已明确 `tier-list` 不建、`codes` 由 recipes 顶替。

## 6. 来源核对 — ✅ 每页 ≥2 源且 ≥1 官方

| 页 | 来源数 | Official | 独立非官方 | 备注 |
|---|---|---|---|---|
| beginner | 3 | 1 | 2 | ✅ |
| cooking | 5 | 1 | 4 | 两张独立配方表交叉 |
| flour | 3 | 1 | 2 | Critical Hits + Rutab |
| leshy | 4 | 1 | 3 | Upcomer + Rutab + 2UpSkill |
| cottage | 3 | 1 | 2 | 2UpSkill + Rutab |
| appearance | 3 | 1 | 2 | Critical Hits + 2UpSkill |
| faq | 2 | 1 | 1 | Steam + Famitsu |

- 无来源数字均标 `[Unconfirmed]`；**无 `[待确认]`、正文无 CJK**。
- 🟡 提示：配方售价/数量为社区/媒体源（非官方），页面以「verified set」+ 来源脚注呈现，未逐行标 `[Unconfirmed]`。按 Profile「≥2 独立来源可保留」可 PASS，但建议后续补一行「数值为社区整理」的口径说明。

## 7. 写作规格 — ✅（首段 🟡）

| 项 | 结果 |
|---|---|
| title 40–60 字符 | ✅ 51–55 |
| description 140–160 字符 | ✅ 140–149 |
| 有且仅有 1 个 H1 | ✅ 正文 H1=0，GuideLayout 渲染 1；线上抽验 1 |
| H2 不跳级 | ✅ 无 H3 先于 H2 |
| 首段 40–60 词 | 🟡 54/61/58/60/63/63/56 —— `cooking`(61)、`cottage`(63)、`character-appearance`(63) 略超 |

## 8. 线上复验 — ✅

方法：`dig @1.1.1.1 +short rekawiki.vercel.app` → `216.198.79.195`，`curl --resolve rekawiki.vercel.app:443:216.198.79.195`。

| URL | 码 |
|---|---|
| `/` | 200 |
| `/guides/reka-beginner-guide` | 200 |
| `/guides/reka-character-appearance` | 200 |
| `/guides/reka-cooking-recipes` | 200 |
| `/guides/reka-cottage-moving` | 200 |
| `/guides/reka-faq` | 200 |
| `/guides/reka-how-to-get-flour` | 200 |
| `/guides/reka-leshy-trial` | 200 |
| `/faq` | 200 |
| `/guides` | 200 |
| `/sitemap.xml` | 200（13 条，已不含 `/tier-list`） |
| `/robots.txt` | 200 |
| `/icon.png` | 200 |
| `/tier-list` | **404**（30f1f16 主动下架，sitemap/导航已移除，预期内） |

内容级复验：`/guides/reka-cooking-recipes` 线上 HTML 含 “Black Salt”；`/faq` 线上 `<h1>` 计数 = 1。

## 9. 额外关注

- **空壳页 `/tier-list`**：已由 commit `30f1f16` 删除路由 + 导航 + sitemap，线上 404。**无需再决策**；若日后要覆盖 `reka tier list` 意图，建议以 **P3** 重建为「进度优先级」页（须有可辩护依据）。当前状态 = 🟢 已闭环。
- **图标**：`rekawiki/public/icon.png` sha1 `9efef4b8…` ≠ 模板 `c71554f6…`，已差异化；线上 `/icon.png` 200。

## REKA 结论清单

**🔴 阻断：0**

**🟡 记录项（4）**
1. `rekawiki/app/terms/page.tsx:29-30` 残留他站发行商 `Digital Vortex Entertainment`（模板根因 `templates/wiki-base/app/terms/page.tsx:29-30`，影响 3 站 + 未来新站）。
2. 首段 >60 词：`reka-cottage-moving.md`(63)、`reka-character-appearance.md`(63)、`reka-cooking-recipes.md`(61)（SHOULD 级）。
3. `/faq`（静态）与 `/guides/reka-faq` 都回答 release/price/multiplayer → 潜在关键词自食（建议静态页做站点导航向、攻略页做长尾深答，或互相 canonical/内链区分）。
4. 配方表售价/数量为社区源，建议补「社区整理」口径句（非阻断）。

**🟢 通过项**：无编造；无跨站游戏名/域名污染；来源齐全；词数/页型达标；线上全通；图标已差异化；无 AdSense 注入。

---

# 二、gonefishingwiki（GONE Fishing）— PASS

- 线上：https://gonefishingwiki.vercel.app
- 目录：`gonefishingwiki/`；7 篇攻略 + 静态 `/faq` + `/tier-list`
- 游戏：Steam app 3645890；1.0 发售 2026-10-20

## 1. Residue 扫描 — ❌ 有残留（仅 Terms 页，模板级）

| 扫描项 | 结果 | 证据 |
|---|---|---|
| Hugo shortcode / `{{…}}` / TODO / FIXME / lorem | ✅ 0 命中 | 扫 `content/ app/ components/ lib/` |
| 他站游戏名（REKA / Witchspire / Aincrad / Mistfall / SpiritVale / Neon Abyss / The Mound 等） | ✅ 0 命中 | 同上 |
| 他站域名 | ✅ 0；`vercel.app` 仅本站 `gonefishingwiki.vercel.app` | `lib/seo-config.ts:11` |
| 旧 Adsterra / AdSense 注入 | ✅ 无注入 | zones 空数组；`googleAdsenseId: ''` |
| **错误商标/他站发行商名** | ❌ **`Digital Vortex Entertainment`** 出现在 Terms；另有 `not affiliated with GONE Studios or GONE Studios` 重复 | `gonefishingwiki/app/terms/page.tsx:29-30`、`:23-24`；根因同模板 |
| 中文渲染内容 / `[待确认]` | ✅ 0 | 7 篇正文 CJK=0 |
| 中文代码注释（不渲染） | 🟢 2 处 | `lib/seo-config.ts:18`、`lib/adsterra-zones.ts:2` |

> 同一模板缺陷，非本站独有；见 REKA 第 1 项影响面。

## 2. 内容抽样 — ✅ 无编造（7/7 全读）

抽样比例 100%：`beginner / sacrifice-quota / co-op / enemies / best-perks / lake-entity-boss / legendary-fish`。

- **社区向实体**（Giant、Shy One、Big Fish Man、Anaconda、Shark、Giant Spider、Nessie）：均明确标社区 + `[Unconfirmed]`，未写成确定事实；`enemies-guide` 表头直接写“treat every entry as `[Unconfirmed]` until the developer documents it”。
- **Perk**：只排 4/9（Sticky Hook / Fish Whisperer / Midas Touch / Tackle Box），其余 5 个明确写“not ranked because we could not verify their current names or effects”（`gone-fishing-best-perks.md:74-78`）。属**反编造正确处置**，非编造。
- **官方数值**：Big Grill/Fish Value +50%、bait 60+、Troll 86、depth 2500/4500、Day-40 基准、Jeremy Wade +20%、Hardcore 规则 —— 与 `gonefishing.gg/faq` 逐条一致（QA 用 WebFetch 复核）。
- **不确定项**：全文 `[Unconfirmed]` 共 22 处；配额随人数缩放、Rhizo 需 MOBY、Nessie 重量区间等均标未证实。
- **批量痕迹**：7 篇结构分别为阶段表 / 配额路线 / 岗位分工 / 敌人逐项 / 档位表 / 分阶段 Boss / 杠杆清单，未见同句式灌水。

## 3. 事实核验（对 Steam / 官方）

| 断言 | 站点值 | 核验结果 |
|---|---|---|
| 1.0 发售日 | 2026-10-20 | ✅ Steam + 4Gamer/game-news 一致 |
| Early Access 起始 | 2025-06-16 | ✅ |
| **开发 / 发行** | **GONE Studios / GONE Studios** | ✅ **Steam AppDetails 现列开发者与发行商均为 GONE Studios**；ABCT Productions 仅见于 Metacritic / Razer / 4Gamer / 3DM 等第三方镜像（疑似早期/关联标签）。**结论：GONE Studios 对，分析报告 §5.1 的 ABCT Productions 过时/错误。** |
| 价格 | ¥32.99 CNY → -33% ¥22.10 | ✅ 与美区 $9.99 → -33% $6.69 同步；算术自洽 |
| 联机 / 平台 | 1–8 人 Online Co-op + 单人 / Windows only | ✅ |
| 语言 | 14 种，仅英语全语音 | ✅ |
| 成就 | **未在站内发布**（自查称 53，已主动不写） | ✅ 无未核实断言 |
| 评测数 / 好评率 | **未发布** | ✅ 无编造评分 |

## 4. 内容量 — ✅ 达标

| 页 / 页型 | 词数 | H2 数 | 问题式 H2 | 表格 | 首段词数 |
|---|---|---|---|---|---|
| gone-fishing-beginner-guide / beginner | 1,633 | 11 | 有 | 有 | 68 |
| gone-fishing-sacrifice-quota / boss-or-mechanic（codes 顶替） | 1,454 | 9 | 有 | 有 | 70 |
| gone-fishing-co-op-guide / beginner | 1,390 | 9 | 有 | 有 | 73 |
| gone-fishing-enemies-guide / boss-or-mechanic | 1,524 | 11 | 有 | 有 | 82 |
| gone-fishing-best-perks / tier-list | 1,237 | 7 | 有 | 有 | 73 |
| gone-fishing-lake-entity-boss / boss-or-mechanic | 1,555 | 8 | 有 | 有 | 68 |
| gone-fishing-legendary-fish / boss-or-mechanic | 1,384 | 9 | 有 | 有 | 69 |
| **合计** | **10,177** | — | — | — | — |

- 页数 7（+2 静态页）、总词数 10,177（≥8,000 ✅）、单篇最低 1,237（≥1,200 ✅）。
- 页型：beginner 2、boss-or-mechanic 4、tier-list 1（+静态 `/tier-list`）、faq 1；`codes` 由配额页顶替 = **5/5 覆盖**。

## 5. 矩阵覆盖 — ✅ P0 100%（脚本有 1 处假阴性，已人工复核）

- `keyword-coverage.mjs --slug gonefishing` 报：P0 8/8 中「已落地 7、缺 `guides/gone-fishing-legendary-fish`」，并把同页列为「矩阵外」。**人工复核：该文件确实存在**（`gonefishingwiki/content/guides/gone-fishing-legendary-fish.md`，1,384 词），线上 200，矩阵行 `guides/gone-fishing-legendary-fish` 已落地 → 脚本按目标词/前缀匹配漏判。**P0 实为 8/8 = 100%**。
- P1：矩阵 3 行（`/tier-list`、`maps-guide`、`bait-guide`），实建 `/tier-list` 1 行 = 33%（D+30 才要求 ≥70%，建站当日不适用）。
- 矩阵外的页：无（静态 `/faq` 已在矩阵 P0 内）。
- 说明：矩阵刻意不设鱼种表/鱼饵表以差异化 Fandom，`legendary-fish` 走「杠杆 + 猎法」而非物种表，符合矩阵意图。

## 6. 来源核对 — ✅ 每页 ≥2 源且 ≥1 官方

| 页 | 来源数 | Official | 备注 |
|---|---|---|---|
| beginner | 4 | 2 | Steam + 官方 FAQ |
| sacrifice-quota | 5 | 2 | 官方 FAQ + 社区 + Fandom |
| co-op | 5 | 2 | Steam + 1.0 公告 |
| enemies | 5 | 3 | 商店页 + 两份热修 |
| best-perks | 4 | 1 | 官方 FAQ + Fandom + Steam 讨论 |
| lake-entity-boss | 6 | 4 | 商店 + 1.0 公告 + 两份热修 |
| legendary-fish | 5 | 2 | 商店 + 官方 FAQ |

- 无来源数字均标 `[Unconfirmed]`；**无 `[待确认]`、正文无 CJK**。
- 来源可达性说明已写在 `gonefishing-sources.md`（Fandom/Steam 社区本机 DNS 污染，经索引摘要读取），未隐藏。

## 7. 写作规格 — ✅（首段 🟡）

| 项 | 结果 |
|---|---|
| title 40–60 字符 | ✅ 45–54 |
| description 140–160 字符 | ✅ 145–160 |
| 有且仅有 1 个 H1 | ✅ 正文 H1=0 + GuideLayout 1；线上抽验 1 |
| H2 不跳级 | ✅ |
| 首段 40–60 词 | 🟡 **68–82 词，7/7 均超**（beginner 68 / quota 70 / co-op 73 / enemies 82 / perks 73 / boss 68 / legendary 69） |

## 8. 线上复验 — ✅ 100%

方法：`dig @1.1.1.1 +short gonefishingwiki.vercel.app` → `64.29.17.131`，`curl --resolve gonefishingwiki.vercel.app:443:64.29.17.131`。

| URL | 码 |
|---|---|
| `/` | 200 |
| `/guides/gone-fishing-beginner-guide` | 200 |
| `/guides/gone-fishing-best-perks` | 200 |
| `/guides/gone-fishing-co-op-guide` | 200 |
| `/guides/gone-fishing-enemies-guide` | 200 |
| `/guides/gone-fishing-lake-entity-boss` | 200 |
| `/guides/gone-fishing-legendary-fish` | 200 |
| `/guides/gone-fishing-sacrifice-quota` | 200 |
| `/faq` | 200 |
| `/tier-list` | 200（有实内容：Big Grill/Upgrade Priority） |
| `/guides` | 200 |
| `/sitemap.xml` | 200（14 条，含 `/tier-list`） |
| `/robots.txt` | 200 |
| `/icon.png` | 200 |

内容级复验：`/tier-list` 线上含 “Big Grill” ×10 与 “Upgrade Priority”；`/faq` 线上 `<h1>` 计数 = 1。

## 9. 额外关注

- **5/9 Perk 未排级**：`gone-fishing-best-perks.md:74-78` 明写“无法核实另外 5 个当前名称/效果，不凭记忆列出”。这是**反编造正确处置**，非缺陷；但页 title 仍是 “Best Perks Tier List”，覆盖度只有 4/9。建议 **P3**：等有可核验的 1.0 Perk 列表后补齐，或把 title 改为「已验证 Perk 排行」以对齐内容。
- **数值内部不一致（🟡）**：`gone-fishing-beginner-guide.md` 表格与正文写烹饪 **+33%**（`:89-92`），但紧接着 `:94` 用官方 FAQ 例子“A 50-point fish becomes 75 after cooking”（50→75 = **+50%**）。官方 FAQ 该例子确实是 +50%，community guide 是 +33%，页面把两个口径拼在一起未说明。建议改为「烹饪约 +33%（官方 FAQ 示例按 +50% 计）」或直接引用 FAQ 原例并标注口径。
- **图标**：`gonefishingwiki/public/icon.png` sha1 `8a115ae1…` ≠ 模板 `c71554f6…`，已差异化；线上 200。

## GONE 结论清单

**🔴 阻断：0**

**🟡 记录项（4）**
1. `gonefishingwiki/app/terms/page.tsx:29-30` 残留 `Digital Vortex Entertainment`；`:23-24` 出现 `GONE Studios or GONE Studios` 重复（模板代入同值所致）。模板根因同 REKA。
2. 烹饪加成口径不一致：`gone-fishing-beginner-guide.md:89-94` 正文 +33% 与示例 +50% 并存。
3. 首段 68–82 词，7/7 超 60（SHOULD 级；摘要/精选片段抓手偏弱）。
4. `gone-fishing-best-perks.md` 仅覆盖 4/9 Perk，title 仍称 Tier List（反编造正确，覆盖度待补）。

**🟢 通过项**：无编造；无跨站污染（除 Terms 模板项）；开发/发行判定正确；来源齐全；词数/页型达标；线上 14/14 = 100%；图标已差异化；无 AdSense 注入。

---

# 三、主 Agent 待决策项

| # | 事项 | 站点 | 级别 | 建议 |
|---|---|---|---|---|
| 1 | **模板 Terms 页残留 `Digital Vortex Entertainment`** | `templates/wiki-base` + rekawiki / gonefishingwiki / neonabyss2wiki | 🟡（模板级，建议优先） | 修模板 `templates/wiki-base/app/terms/page.tsx:29-30`，把 `{{DEVELOPER}} / Digital Vortex Entertainment` 改为 `{{DEVELOPER}} / {{PUBLISHER}}` 或按站配；同步修 3 站。否则未来每个新站都会带他站发行商名 |
| 2 | GONE 烹饪 +33% vs +50% 口径 | gonefishingwiki | 🟡 | 统一表述：正文用 +33%（community）或官方 FAQ 示例 +50%，并注明口径，避免同页自相矛盾 |
| 3 | 两站首段普遍偏长（REKA 3 篇 61–63，GONE 7/7 68–82） | 两站 | 🟡/P3 | 下一轮把首段压到 40–60 词并直答，利于摘要/精选片段 |
| 4 | REKA `/faq` 与 `/guides/reka-faq` 同意图 | rekawiki | 🟡/P3 | 静态页偏「站点导航/购买速答」，攻略页偏长尾；补内链与差异化 H1，或后续合并 |
| 5 | GONE 5/9 Perk 未排级 | gonefishingwiki | P3 | 等可核验 1.0 Perk 列表再补；先在 title/导语说明「仅收录已验证」，避免用户预期落差 |
| 6 | REKA `/tier-list` 空壳页 | rekawiki | 🟢 已闭环 | commit `30f1f16` 已下架（线上 404、sitemap/导航已移除），无需再决策；若要覆盖 `reka tier list` 意图，P3 重建「优先级」页 |
| 7 | 人工运维项（两站均未做） | 两站 | 🟡 人工 | GA4 property 未建、`googleAnalyticsId: ''`；GSC 未验证/未提交 sitemap；Dashboard 未注册；Adsterra 两位未注入（须走飞书台账 + 20:00 回填）。均属建站单明确排除项，交付主 Agent/人工 |
| 8 | 分析报告 §5.1 开发/发行错误 | `selection-2026-10-26-round3.md:631` | 🟢 文档 | 把 `ABCT Productions` 更正为 `GONE Studios`（Steam AppDetails 2026-10-26），避免后续复用错误基准 |

---

## 已执行的核验命令（可复现）

```
node scripts/lint-guides.mjs rekawiki        # 7 篇全部通过
node scripts/lint-guides.mjs gonefishingwiki # 7 篇全部通过
node scripts/keyword-coverage.mjs --slug reka        # P0 7/7 100%
node scripts/keyword-coverage.mjs --slug gonefishing # P0 报 7/8，人工复核实为 8/8（legendary-fish 假阴性）
dig @1.1.1.1 +short rekawiki.vercel.app        # 216.198.79.195
dig @1.1.1.1 +short gonefishingwiki.vercel.app # 64.29.17.131
curl --resolve <host>:443:<ip> -o /dev/null -w '%{http_code}' https://<host><path>  # 见表
WebFetch https://gonefishing.gg/faq            # 官方 FAQ 数值逐条比对
WebSearch "GONE Fishing ... GONE Studios ABCT Productions" / "REKA ... release date price"
```

> 本报告只做审核记录，未修改任何站点文件、未部署、未改规则文档。线上状态均为 2026-10-26 实测；`/tier-list` 的 404 为主动下架结果，非不可达。

---

# 四、主 Agent 处置记录（2026-10-26 夜）

| QA 项 | 处置 | 证据 |
|---|---|---|
| R3-1 模板 Terms 残留 Digital Vortex | 模板改成 `{{DEVELOPER}} / {{PUBLISHER}}`；新增 `scripts/check-site-residue.mjs` 并入 `deploy-wiki-site.sh` 第 0b 步（阻断式）；两站 terms 同步修 | commit `790ebd3`；线上 `/terms` 的 "Digital Vortex" 命中 0 |
| R3-1b 自研自发写成 "X / X" | new-site.mjs 新增 `{{RIGHTS_HOLDERS}}` / `{{DEV_PUB_PHRASE}}` 折叠；gonefishingwiki about/footer/schema/terms 四处修正；顺带修 waterparksimulatorwiki terms 的 "(CayPlay / CayPlay)" | commit `3cce2ee`；线上 /about 与 JSON-LD 均为 "developed and published by GONE Studios" |
| R3-2 烹饪 +33% vs +50% | 改为「方向确定、倍率 [Unconfirmed]」，并列官方 FAQ 的 +50% 与社区的 +33% | commit `e2bf67d`；线上正文已含该段 |
| R3-3 首段超长 | 14 篇全部压到 54–60 词（REKA 7 篇、GONE 7 篇），事实零丢失 | commit `e2bf67d`；`.agent/qa-build-r3-lead-fix.md`；源文件实测词数表 |
| R3-8 ABCT Productions | 更正为 GONE Studios（Steam AppDetails 3645890） | commit `975391a` |
| 线上复验 | 两站各 16/16 路由 200（首页/guides/faq/about/privacy/terms/sitemap/robots/icon + 7 篇攻略） | 2026-10-26 深夜实测（dig @1.1.1.1 + curl --resolve） |

**仍开放（P3 / 人工）**：GONE Perk 仅覆盖 4/9（等可核验 1.0 列表）；REKA `/faq` 与 `/guides/reka-faq` 同意图需差异化或合并；两站 GA4 property / GSC 验证 / Adsterra 两位（人工表两行已建，填完 20:00 自动回填部署）。

---

# EXPAND-2026-10-27 审核

> 审核对象：04:00 自动扩词轮产出、**已部署但未入库**的 4 篇新攻略（只审这 4 篇）
> 模式：quick（`docs/agents/05-岗位卡-QA审核员.md` + `06-Profile-QA审核员.md`）
> 审核时间：2026-10-27；机械项（lint / title / description / 词数 / 首段 / sources 条数 / 中文）由主 Agent 已跑，本轮不重复

## 执行摘要

- **结果：0 🔴 / 7 🟡 / 1 篇 ✅ PASS、3 篇 ⚠️ 有条件 PASS**
- 4 篇全部**无编造**：所有抽检的数值、名称、机制、版本号均能在「官方公告全量语料」或「frontmatter 所引第三方页面」中逐字/逐数命中
- 无跨站残留（仅两篇 frontmatter 的 Editorial 来源自引本站 URL，属自指非污染）
- 线上 4/4 = 200，正文与本地文件逐字一致；4 篇均在 `/guides` 索引与 `sitemap.xml` 中
- **唯一系统性发现**：渲染后每篇攻略页有 **2 个 `<h1>`**（模板层，48 站同款），lint 不覆盖此项 → 主 Agent 的「H1×1 通过」只在 Markdown 层成立

| 站点 | 文件 | 结论 | 🔴 | 🟡 |
|---|---|---|---|---|
| nivalisnightswiki | `content/guides/performance-fps-guide.md` | ⚠️ 有条件 PASS | 0 | 3 |
| spiritvalewiki | `content/guides/party-exp-and-loot-sharing-guide.md` | ✅ PASS | 0 | 0 |
| tearsofmetalwiki | `content/guides/armor-sets-gear-unlock-guide.md` | ⚠️ 有条件 PASS | 0 | 2 |
| waterparksimulatorwiki | `content/guides/mafia-loan-guide.md` | ⚠️ 有条件 PASS | 0 | 1 |
| （模板层） | `*/components/GuideLayout.tsx` + `ReactMarkdown.tsx` | 🟡 记录 | 0 | 1（48 站） |

---

## 一、核验语料与检索面（可复现）

| 游戏 | Steam appid | 官方公告语料 | 拉取方式 |
|---|---|---|---|
| Nivalis Nights | 1488490 | **30 篇全量**（含 Update #1–#6、Small Patch 2026-10-16、May 2026 Optimization 长文） | `ISteamNews/GetNewsForApp` `maxlength=0` |
| SpiritVale | 3767850 | **39 篇全量**（含 0.34.0 / 0.32.0 / 0.34.1 / 0.34.2） | 同上 |
| Tears of Metal | 1913120 | **40 篇全量**（含 2026-10-21 Experimental、2026-09-24、2026-07-22 Launch） | 同上 |
| Waterpark Simulator | 3293260 | **40 篇全量**（含 1.0 / 1.0.43 / 1.0.48 / 1.0.50 / 1.0.119） | 同上 |

- `store.steampowered.com` 本机直连超时（非 vercel 污染），改走 `api.steampowered.com` 与 `store.steampowered.com/api/appdetails` + `--resolve`。
- SpiritVale Playtest app **3918510 拉取失败**（API 无返回）；但本次涉及的 party 断言全部在**主 app 3767850 的 0.34.0 公告**中逐字命中，不影响结论。
- 第三方页面用 WebFetch 逐条回读：`gaming-st.com`（Nivalis 数值）、`steamdeckhq.com`（Deck 评分）、`tposegaming.com` / `whisperofthehouse.com` / `thegameswatch.com` / `waterparksimulatorgame.wiki`（Mafia）、`spiritvale-wiki.wiki`（5 人上限表）。
- 检索式示例（ToM 具名套装）：`grep -iE 'Commanding|Warmonger|Duelist'` 于 40 篇全量 → **0 命中**。

---

## 二、编造检测（每篇 ≥3 条原子断言）

### 2.1 nivalisnightswiki / `performance-fps-guide.md`

| # | 断言（行） | 声明来源 | 核对结果 |
|---|---|---|---|
| 1 | Update #4 新增 Crowd Density / Hybrid CPU Optimization / Pooling / Thunder Intensity / Brightness（:113-118） | Official Update #4 | ✅ 逐字命中："Crowd Density: reduce how many background characters appear"、"Hybrid CPU Optimization: …12th gen Core and newer, including Core Ultra"、"Pooling: can now be turned off" |
| 2 | Update #5「每小时卡顿减轻，背景 NPC 分几秒到离场」+ 后期存档小 50%（:102, :144） | Official Update #5 | ✅ 命中："Reduced frame stuttering at the start of each in-game hour (background NPCs now appear and leave over a few seconds instead of all at once)"、"a 50% reduction has been observed for late-game saves" |
| 3 | Update 6 修跨区内存泄漏 + 船灯与 Lighting Details 冲突（:145, :53） | Official Update 6 | ✅ 命中："Fixed memory leaks… Lighting, reflections and leftover objects…"、"Fixed a conflict between boat lights and the lighting details option" |
| 4 | 主线程 18.6%（≈6 ms）等 worker；103.1→29.8 fps，9.7→33.6 ms，IK 8.5/0.6、skinning 7.1/0.2（:84） | Gaming St | ✅ 回读原文命中："18.6%（1フレームあたり約6ms）"、"29.8fps/103.1fps"、"33.6ms/9.7ms"、"8.5ms→0.6ms"、"7.1ms→0.2ms" |
| 5 | Nivalis Unofficial Patch：动画更新距离「约 40% 更近」、需 BepInEx 6 (IL2CPP)（:170） | Gaming St | ✅ 回读原文命中："既定で40%手前に寄せる"、"BepInEx 6（IL2CPP版）"（原文另注「未测过 fps 收益」，页面也照写了这一点） |
| 6 | Steam Deck HQ 2/5、性能 1/5、19–22 W、67–70 °C、约 2 小时（:153） | Steam Deck HQ | ✅ 回读命中：2/5、1/5、19W-22W、67C-70C、~2 hours |
| 7 | 「游戏已有 ghost 系统，剥离区外 NPC / 视线外跳过逐帧动画」（:90） | 无（未列入 sources） | ⚠️ 内容为真（May 2026 Optimization 官方长文："Ghost system…separates simulated characters from their visual representations"），但 **frontmatter 未收录该公告** → 🟡 溯源缺口 |
| 8 | 「ION LANDS 说发售时会逐步扩大支持硬件」（:157） | Official | ✅ 命中："won't have full support at launch… widen the range of supported hardware over time" |

**结论**：无编造。🟡 2 项见第七节（另 1 项为站内矛盾）。

### 2.2 spiritvalewiki / `party-exp-and-loot-sharing-guide.md`

| # | 断言（行） | 声明来源 | 核对结果 |
|---|---|---|---|
| 1 | 0.34.0 两类设置原文（:45, :53-58） | Official 0.34.0 | ✅ 逐字命中："Fixed a lot of issues with it, how it works / was meant to work"；Each Take「No bonus」「Each person gets exp and gold based on damage dealt to the monster」；Even Share「+20% exp per party member, +10% gold and drops per party member」「Exp and gold shared evenly… across the whole map」 |
| 2 | 「公告没有说明人数上限 / 百分比是否叠加 / Each Take 掉落归属」（:58, :20） | — | ✅ 核对 0.34.0 全文（2,872 字符）：三项确实均未出现，属于**正确的「未写」判断** |
| 3 | 0.32.0：怪物高于角色每级 +2% EXP，上限 +30%（:91） | Official 0.32.0 | ✅ 逐字命中 |
| 4 | 地图等级倍率 3.00/2.40/1.90/1.40/1.00，S=Dark Fortress/Dark Manor（:97） | Official 0.32.0 | ✅ 命中代码块 `S ×3.00 / A ×2.40 / B ×1.90 / C ×1.40 / D ×1.00` 与 S/A/B/C 名单 |
| 5 | 第三方表 5 人上限、+10→+50%、掉落 +5→+20%、30 级档 ~10%（:83） | Community 第三方 | ✅ 回读 `spiritvale-wiki.wiki` 原页：5 members、+10/+25/+40/+50、+5/10/15/20、100/75/50/10%，Updated 7/19/2026 —— 与页面转述完全一致，且页面判为 `[Unconfirmed]` **判断正确** |
| 6 | 12 人队伍、同等级不攻击者仍高 58%（:75） | Community Steam 讨论 | ⚠️ steamcommunity.com 本机不可达，无法回读；但 frontmatter 已注明「日期为抓取日、原帖日期不可见」，且正文仅作历史叙述 → 可接受 |

**结论**：无编造，`[Unconfirmed]` 用了 4 处且位置恰当（人数上限 / 叠加外推 / 掉落品类 / 队伍等级差惩罚）。**唯一观察项（不计 🟡）**：:62-71 的「4 人 +80%」示例是在「假设百分比相加」下的算术，正文已自证"assuming the percentages add… That is arithmetic on the official wording, not a measured test"，处置合规，但表格本身易被单独引用，建议后续在表下补一句 `[Unconfirmed]`。

### 2.3 tearsofmetalwiki / `armor-sets-gear-unlock-guide.md`

| # | 断言（行） | 声明来源 | 核对结果 |
|---|---|---|---|
| 1 | Challenges 定义 + 「可奖励 healing/currency/passive Emblems」+ Cartographer（:72） | Official 2026-10-21 | ✅ 逐字命中："Challenges are optional multi-wave objectives you encounter during fights"、"New Challenge Rewards: Challenges can now reward healing, currency and passive Emblems"、"New Cartographer Item in Village: You can unlock new Challenge Rewards" |
| 2 | 三名英雄、专属 gear（:59） | Official 2026-07-22 | ✅ 逐字命中："Three playable Heroes, with unique gear, synergies and playstyles." |
| 3 | 商店可升级 + 「unlocking stuff was kind of a grind and too slow」+「much more frequently than before」（:121） | Official 2026-09-24 | ✅ 两段逐字命中 |
| 4 | **Commanding / Warmonger / Duelist 三档 + Act 1/2/3 映射**（:53, :84-92） | Community 单帖 | ⚠️ 官方 40 篇全量 **0 命中**（检索式见第一节），**仅 1 个社区帖**支撑 → 按 Profile「官方 0 + 社区仅 1 源 → 标 `[Unconfirmed]`」应加标；现仅标 `[Community]` → 🟡 |
| 5 | Dragonstones 走武器线、不给护甲（:65, :155） | Community | ⚠️ 部分成立：官方语料中 Dragonstone 确实用于买武器（"Wallace's Flamberge sword now cost 3 Dragonstones"），**但也用于 Charm 宝箱与雕像折扣**；且本站 `achievements-guide.md:149,317` 明写 "dragonstones … could not verify in current builds" → 🟡 表述过窄 + 站内口径不一 |
| 6 | 「10 runs with every char」、Ruadh Trial 8 仍缺件（:131） | Community 帖 | ✅ 已在正文标 [Community]，并注明「player estimates, not published figures」 |
| 7 | 护甲是否影响属性（:94, :144） | — | ✅ 正确标 `[Unconfirmed]`，未写成确定事实 |

**结论**：无编造（既没有虚构角色也没有虚构数值）；🟡 2 项为「单一社区源未降级」与「Dragonstone 口径窄」。

### 2.4 waterparksimulatorwiki / `mafia-loan-guide.md`

| # | 断言（行） | 声明来源 | 核对结果 |
|---|---|---|---|
| 1 | 1.0.43：Mafia 被攻击会反击、波次时间更随机（:115-116, :144） | Official 1.0.43 | ✅ 逐字命中："Mafia now can fight back when attacked during their event."、"Mafia wave times are more random…" |
| 2 | 1.0.48 新增无障碍选项，可关掉 Staff Quitting 与 NPC retaliation（:131, :145） | Official 1.0.48 | ✅ 逐字命中："New accessibility option to disable Staff Quitting and NPC retaliation"（日期 2026-08-07 ✅） |
| 3 | 1.0.50：存档退出不再错过 Mafia（:116, :146） | Official 1.0.50 | ✅ 逐字命中："Mafia is no longer missable if the player saves and quits on the day they should reappear"（2026-08-11 ✅） |
| 4 | 借 1,250 还 12,500（10x）；借 30,000 还 100,000（~3.3x）；750 → 第 7 天；约 5 人；"nobody refuses me twice, you will regret it"；"loyal business partners"；"certain businessmen"；「pride does not pay bills」；有玩家拒绝三次仍被再找（:72-93, :105, :135, :168） | Community TposeGaming | ✅ 逐条回读原文，**全部逐字命中**（含 day 3 最早出现之说） |
| 5 | 750 / 5,000 / 15,000 报价、公式未确认、约 5 人、Rusty Lounger、Out of Order（:74, :87-91, :113） | Community Whisper of the House | ✅ 命中："started with $750"、"$5,000 and $15,000"、"The exact repayment formula is not something I have confirmed"、"roughly five Mafia crew members"、"Rusty Lounger"、"Out of Order" |
| 6 | 保安是否减伤不确定（:129） | Community TheGamesWatch | ✅ 命中："It's not clear if hiring security will help" |
| 7 | 1.0（2026-07-31）加入 Mafia 任务线、保安、吉祥物、夜班、**multiple save slots**（:143） | Official 1.0 | ⚠️ 前三项 ✅（"Security"、"Mascots"、"Night mode"、"Mafia - An optional Questline…dubious loans"）；**"multiple save slots" 在 1.0 公告中查无**——公告里的 "Up to 5 slots can be saved" 属于**角色外观预设**，非存档槽 → 🟡 |
| 8 | 商店页原文 "Short on funds? Need a loan? The Mafia can help you out…. For a price."（:68） | Official 商店页 | ✅ 用 appdetails 正文命中该句；`release_date = 31 Jul, 2026` ✅ |

**结论**：无编造，第三方数字全部可回溯；🟡 1 项为补丁表里一处与官方公告不符的短语。

---

## 三、`[Unconfirmed]` 使用核查

| 站点 | 使用情况 | 判定 |
|---|---|---|
| nivalisnightswiki | 未使用 | ✅ 合理：所有精确数值均有具体来源；编辑建议段已由 Editorial 来源自述 |
| spiritvalewiki | 4 处（人数上限 / >5 人外推 / 掉落品类 / 队伍等级差惩罚） | ✅ 恰当，且把第三方 5 人表明确判为不可信 |
| tearsofmetalwiki | 4 处（套装件数 / 是否必出 / 分支奖励表 / 属性影响） | ⚠️ 漏标一处：Act→套装映射（单社区源） |
| waterparksimulatorwiki | 2 处（还款公式 / 保安减伤） | ✅ 恰当 |

**反向核查（把社区东西写成确定事实）**：4 篇均未发生。最接近的是 ToM 的 Act 映射表，见 🟡-4。

---

## 四、跨站残留扫描

| 检查项 | 结果 |
|---|---|
| Hugo shortcode / `{{ }}` / TODO / 占位 / 中文 | ✅ 4 篇 0 命中 |
| 他站游戏名（Witchspire / Mistfall / Aincrad / The Mound / Reka / GONE Fishing / Neon Abyss / Crimson Moon） | ✅ 0 命中 |
| 他站域名 | ✅ 仅 2 处**自指**：`performance-fps-guide.md:71` 与 `mafia-loan-guide.md:59` 的 Editorial 来源写的是本站 URL（声明「这是我们的编辑建议」），非污染 |
| 开发/发行商归属 | ✅ Nivalis=ION LANDS（官方语料 4 命中）、ToM=Paper Cult（2 命中）、Waterpark=CayPlay（商店页） |
| 他游戏专有名词混入 | ✅ 无；出现的 ION LANDS / Paper Cult / CayPlay / The Stacks / Wallace / Ruadh 均属本作 |

---

## 五、站内一致性

| 站点 | 检查 | 结果 |
|---|---|---|
| nivalisnightswiki | 新页「CPU 是瓶颈」（:78）vs `system-requirements-guide.md:57`「**GPU** is the component that will actually determine your experience」 | ⚠️ 🟡 直接矛盾。新页有实测支撑（分辨率降 20 倍只多 40% 帧），老页是发售前推断。建议老页补一句「人群场景为 CPU 瓶颈，见性能指南」 |
| nivalisnightswiki | 补丁时间线 vs `manager-restock-guide.md:89-92` | ✅ Update #1/#3/#4/#6 的口径一致，无冲突 |
| spiritvalewiki | 全站 party bonus 表述（`class-leveling-guide.md:160-161`、`endgame-guide.md:74`、`leveling-guide.md:95`） | ✅ 老页只说「2 人小 / 4+ 人大」，未复述第三方 5 人上限，不构成矛盾；新页第 49 行自述「including our own older pages」属实 |
| tearsofmetalwiki | Dragonstone：新页 :65/:155 vs `achievements-guide.md:149,317`（未验证） | ⚠️ 🟡 口径不一（见 2.3-5） |
| tearsofmetalwiki | Commanding/Warmonger/Duelist | ✅ 站内无第二处提法，无自相矛盾 |
| waterparksimulatorwiki | 全站 Mafia/loan 其他页 | ✅ 除新页外 0 命中，无冲突 |
| 4 篇共同 | `related` 目标存在性 | ✅ 全部存在且主题相关：nivalis（system-requirements / faq / beginner / city-districts / day-night-cycle）；spiritvale（party-composition / leveling / class-leveling / empty-maps / farming-resource / solo）；tearsofmetal（equipment / trials-mother-stone / progression-walkthrough / village-upgrade / seraphic-blade / achievements）；waterpark（money-making / visitor-problems / staff-management / endgame） |

---

## 六、线上复验（本机 DNS 污染 vercel.app → `dig @1.1.1.1` + `curl --resolve`）

| 站点 / URL | 解析 IP | HTTP | 正文比对（抽样段） | /guides 索引 | sitemap.xml |
|---|---|---|---|---|---|
| `nivalisnightswiki.vercel.app/guides/performance-fps-guide` | 64.29.17.195 / 216.198.79.195 | **200**（74,337 B） | ✅ "The main thread spent 18.6% of the frame — about 6 ms…" 逐字一致 | ✅ 命中 | ✅ 命中 |
| `spiritvalewiki.vercel.app/guides/party-exp-and-loot-sharing-guide` | 64.29.17.131 / 216.198.79.131 | **200**（68,893 B） | ✅ 首段 "Even Share pays +20% EXP and +10% gold…" 逐字一致 | ✅ | ✅ |
| `tearsofmetalwiki.vercel.app/guides/armor-sets-gear-unlock-guide` | 64.29.17.67 / 216.198.79.67 | **200**（68,053 B） | ✅ 首段 "New armor in Tears of Metal does not drop from bosses…" 逐字一致 | ✅ | ✅ |
| `waterparksimulatorwiki.vercel.app/guides/mafia-loan-guide` | 64.29.17.131 / 216.198.79.131 | **200**（68,609 B） | ✅ 首段 "The Mafia in Waterpark Simulator hands you cash now…" 逐字一致 | ✅ | ✅ |

**产物级发现（不影响入库，但需登记）**：4 篇（以及抽查的存量页 `beginner-guide`）渲染后 DOM 内均含 **2 个 `<h1>`**：
- `components/GuideLayout.tsx:38` 渲染 frontmatter 标题为 `<h1>`
- `components/ReactMarkdown.tsx:54` 又把 Markdown 的 `# ` 渲染成 `<h1>`

`grep -l "<h1" */components/GuideLayout.tsx` = **48 个站**，`templates/wiki-base` 也是同款（`:38`）。`scripts/lint-guides.mjs` **没有任何 H1 检查**（仅第 128 行查 title/description/category/updated、160 行查词数），所以「H1×1 通过」只在 Markdown 源文件层成立，产物层不成立。

---

## 七、🟡 记录项汇总（7）

| # | 站点 | 位置 | 问题 | 建议 |
|---|---|---|---|---|
| 1 | nivalisnightswiki | `performance-fps-guide.md:157` | 「25% 评 Perfect/Playable」省略了**样本仅 4 票**（0% Perfect / 25% Playable / 75% Bad）这一限定，读者会高估代表性 | 补「（4 票样本）」或改为「早期投票样本极小，仅供参考」 |
| 2 | nivalisnightswiki | `performance-fps-guide.md:90` | 「ghost 系统」为真，但依据是 **May 2026 Development Update: Optimization**，该公告未进 `sources` | 把该公告加进 sources（顺带可支撑 Object Pooling 的背景） |
| 3 | nivalisnightswiki | `system-requirements-guide.md:57` | 「GPU 决定体验」与新页「人群场景 CPU 瓶颈」直接矛盾 | 老页加一句交叉引用，不改结论 |
| 4 | tearsofmetalwiki | `armor-sets-gear-unlock-guide.md:84-92`（另 :53） | Act→Commanding/Warmonger/Duelist 映射官方 0 命中、**仅 1 个社区帖**，按 Profile 应标 `[Unconfirmed]`，现只标 `[Community]` | 表头加 `[Unconfirmed]`，或在拿到第 2 个独立社区源后保留现写法 |
| 5 | tearsofmetalwiki | `armor-sets-gear-unlock-guide.md:65, :155` | 「Dragonstones → 武器，不给护甲」把通用货币说窄了（官方语料中亦用于 Charm 宝箱、雕像折扣）；且与 `achievements-guide.md:149,317`「dragonstones 未能验证」口径不一 | 改为「Dragonstones 主要用于武器与 Charm/雕像，官方未见护甲用途」 |
| 6 | waterparksimulatorwiki | `mafia-loan-guide.md:143` | 1.0 补丁行写「multiple save slots」，官方 1.0 公告查无；公告里的 "Up to 5 slots can be saved" 指**角色外观预设** | 删掉该短语，或改为「角色外观 5 个预设槽」 |
| 7 | **模板层（48 站）** | `*/components/GuideLayout.tsx:38` + `ReactMarkdown.tsx:54`（含 `templates/wiki-base`） | 每篇攻略页渲染出 **2 个 `<h1>`**；lint 不覆盖，历次 QA 未发现 | 二选一：GuideLayout 标题降为 `<h2>`／按 `body` 是否自带 H1 决定是否渲染；同步给 `scripts/lint-guides.mjs` 加产物级 H1 断言 |

---

## 八、结论清单

| 站点 | 结论 | 理由 |
|---|---|---|
| nivalisnightswiki / `performance-fps-guide.md` | ⚠️ **有条件 PASS** | 8 条抽检断言全部可回溯（官方 6 条 + Gaming St/Steam Deck HQ 逐字核对）；🟡 3 项均为溯源/口径/站内引用问题，不涉及虚构 |
| spiritvalewiki / `party-exp-and-loot-sharing-guide.md` | ✅ **PASS** | 官方 0.34.0 / 0.32.0 逐字命中；对「公告未说」的判定准确；第三方 5 人表判 `[Unconfirmed]` 正确；无残留、无站内矛盾；线上一致 |
| tearsofmetalwiki / `armor-sets-gear-unlock-guide.md` | ⚠️ **有条件 PASS** | 官方 3 条逐字命中，无虚构数值；核心 Act→套装映射单社区源未降级为 `[Unconfirmed]`，Dragonstone 表述偏窄 |
| waterparksimulatorwiki / `mafia-loan-guide.md` | ⚠️ **有条件 PASS** | 8 条抽检里 7 条逐字命中（含 4 个社区页的引语与数字）；仅补丁表「multiple save slots」与官方 1.0 公告不符 |

**🔴 阻断：0**

**是否建议直接入库：建议入库**（4 篇内容层无编造、线上已一致）。三个 ⚠️ 都可在同一批数据修正里处理，不需要回炉重写：
- 必改（低成本、1 行级）：🟡-6 删「multiple save slots」；🟡-1 补「4 票样本」；🟡-4 表头加 `[Unconfirmed]`。
- 可随后：🟡-2 补 sources；🟡-3 / 🟡-5 站内口径对齐。
- 🟡-7 属模板层，建议单独一轮修 `GuideLayout` + 给 lint 加产物级 H1 断言（48 站 + 模板，影响面大于本次 4 篇）。

> 本轮只做审核，**未修改任何站点文件、未部署、未 commit、未改规则文档**。

---

## 新词机会 — 2026-10-28

> 由候选分析员 ANALYSIS-2026-10-28 追加，供下一轮选稿参考（不改动本文件以上内容）。

接下来最值得写的 3 个页面方向：**① #77 Probably Stolen「房租/买断经济 + 水商/酿酒产线利润」深度页** —— 词库 75 个有效词（复核无撞名，独立意图 67）、机制/物品型 29 词、攻略型 26/75=34.7%（>30% 未触发售日陷阱），但 6 条固定查询显示两家英文专属 wiki 已在发售前铺满新手/鉴定页（`P=2.0`，竞争 2，probably-stolen.wiki 11 页 + probablystolengame.wiki ~79 页），唯一空位是利润/路线数值；**② #94 One Way Tickets「载具与升级路线」** —— 已发售 6 天、1,487 条 86%，是 13 个新候选里唯一满足「已发售 + 评测 ≥300 + 好评 ≥85%」的，词库待采（`P` 待测，采词优先级 #1）；**③ #101 Worst Class Ever「8 人阵营/角色反制」** —— Next Fest 独立玩家第 1、峰值 27,684、demo 60 万+，11-09 发售窗口仅 12 天，词库待采（采词优先级 #2，须先用攻略型占比验证是否超休闲）。排序逻辑：① 有词库可立即动工但竞争最重；②③ 需求信号更强、窗口更近，但必须先采词再判 `P`。完整依据见 `keyword-results/selection-2026-10-28.md`。

### R5 采词后更新（2026-10-28 下午轮，主管追加）

> 上面那段是**采词前**的判断。R5 把 10 个 `需采集` 候选全部采完并跑了四维评分，结论已变：**②#94 One Way Tickets 复核仅 0 个有效词、③#101 Worst Class Ever 仅 7 个**，两个都因「有效词 <20」在门禁处出局；①#77 Probably Stolen 因未解锁仍暂缓。以采完的数据为准，后续最值得写的 3 个方向改为：

1. **Blind Descent —— co-op / multiplayer 页群**（本轮已建站，首批 8 页需覆盖）：68 个复核有效词里 co-op 类 17 条，是唯一成组的攻略型面（`co-op` / `crossplay` / `local co-op` / `how to invite friends` / `demo multiplayer`）；两家厚站（`blinddescent.wiki`、`blind-descent.wiki`）已铺 release/platform/playtest 泛信息页，差异化只能靠**具体步骤**。补页优先级：4 人联机怎么开 → 跨平台限制 → demo 联机能玩多久。
2. **Sephiria —— 独立 `tier list` 页**（6 词，站内目前无对应页）：re-harvest 156 有效词里 Tier List 6 条成组，是站内唯一成组缺口；但只有 Suggest 单源，动笔前 MUST 先补 ≥2 个独立来源，否则宁缺毋滥。
3. **Shift At Midnight —— 「Does it have codes?」答疑页**（5 词，站内唯一成组缺口）：官方从未公布兑换码系统，只能写「没有 codes / 别信假码」的答疑页，MUST NOT 编造码；写之前先确认官方渠道口径未变。

不做：Frostrail（13 分低优先，`P=2.0` 且攻略型 9.7%）、HANDS OVER / Never Be Alone（需求 2 边界，按严格口径否决）、One Way Tickets / Annihilated / Malignus（品牌不可检索或有效词不足）。完整依据见 `keyword-results/selection-2026-10-28.md` 第五节与 `.agent/selection-*-2026-10-28.md`。


---

# QA-QUICK 2026-10-28 — blinddescentwiki（新建站，8 页）

> 阶段：建站协调员交付后主管直跑（quick）。审核对象：`blinddescentwiki/` 8 篇攻略 + 5 个静态页。
> 素材底稿：`keyword-results/blinddescent-sources.md`（A 官方 ×4 / B 社区 ×1 / C 第三方 ×2，均 2026-10-28 抓取）。

## 一、机械门禁（全部通过）

| 项 | 结果 |
|---|---|
| `lint-guides.mjs blinddescentwiki` | 8 篇全部通过 ✅ |
| `check-site-residue.mjs blinddescentwiki` | 无模板残留 ✅ |
| 他站游戏名（16 个站名全表扫描） | 0 命中 ✅ |
| 未替换占位符 `{{ }}` / 中文正文 / 占位文案 | 0 命中（`app/page.tsx:12` 的 `TODO(per site)` 是模板注释，不进产物）✅ |
| 每页词数 | 1,291–1,586，合计 **11,305 词**（≥8,000 达标）✅ |
| title / description | 43–52 / 150–160 ✅ |
| H1 | 源文件 8/8 = 1 个；**线上 DOM 8/8 = 1 个** ✅（`ReactMarkdown` 已把正文 `#` 渲染为 `<h2>`，2026-10-24 报的「48 站 2 个 H1」在全仓代码里已不存在） |
| `related` | 8 篇全部块级数组；目标页 100% 存在 ✅ |
| 内链 | `/guides/*` 内链 0 断链 ✅ |

## 二、事实核验（抽样 12 条，逐条回溯到 sources）

| # | 断言 | 来源 | 判定 |
|---|---|---|---|
| 1 | 4 人 co-op、单人亦可玩 | A1 Steam appdetails（max 4） | ✅ 逐字 |
| 2 | 跨平台联机 Steam / GOG / EGS | A4 官方新闻稿（"crossplay between Steam, GOG and EGS"） | ✅ 逐字 |
| 3 | shared quests / shared world / separate inventory and mutations | A4 | ✅ 逐字 |
| 4 | EA 2026-12-02，约一年 | A1 + C（zero1gaming "approximately one year"） | ✅ |
| 5 | EA 只含 "part of the planned story" | C（zero1gaming） | ✅ 逐字 |
| 6 | 最低配置 Win11 / i3 / 16 GB / 40 GB | A1 | ✅ 表格逐项对齐 |
| 7 | 危害三类（地下风暴 / 有毒气体 / 攻击性生物） | A1 特性段 | ✅ |
| 8 | 基地会因忽视被藤蔓/真菌侵占 | A1（"quick to react to neglect"） | ✅ 逐字 |
| 9 | 2071 年、火星、10 miles 深、Marsborn Mining Company、Pathfinder | A2/A3 官方站与 FAQ | ✅ |
| 10 | 变异能力 telekinesis / wall running | A2/A4 | ✅ |
| 11 | 早期物品 axe / club / fire pit / lean-to / water container | B（gamer.org 试玩评测） | ⚠️ 🟡 社区单源（页面已按 B 标注，未升格为官方） |
| 12 | 平台：PC 首发 Steam/GOG/Epic，PS5 / Xbox 随正式版 | A4 + C | ✅ |

## 三、发现问题与处置

| # | 级别 | 问题 | 处置 |
|---|---|---|---|
| 1 | 🟠 **已修** | `blind-descent-beginner-guide.md:130` 与 `blind-descent-platforms-system-requirements.md:46` 写「EA 剧情 10–15 小时 / 试玩几小时」，但 `blinddescent-sources.md` 与 zero1gaming 原文**均无任何时长数据** → 属无源断言 | 已改写为「官方未公布时长，按开放结局的生存循环规划」，重新 build + 部署，线上复核 `10 to 15 hours` = 0 命中、新文案已命中 ✅ |
| 2 | 🟡 记录项 | `/tier-list` 这个 URL 承载的是「Upgrade Priority（解锁优先级）」页；title 与正文一致且自述「不是数据挖掘排行」，但 URL 与内容意图不完全对齐 | 不阻塞；下轮若该站跑起来，考虑 301 到 `/upgrade-priority` 或把该页并进 beginner |
| 3 | 🟡 记录项 | 价格、Steam Deck 评级、引擎（官方 FAQ UE4 vs 第三方 UE5）、PS5/Xbox 具体日期、变异全表、基地衰减时长、demo 是否联机 → 站内均已标 `[Unconfirmed]`（各页 1–9 处），无编造 | 发售日（2026-12-02）后统一复核升级 |
| 4 | 🟡 记录项 | 温度 / 氧气系统**无任何来源**，站内未写 —— 正确；若后续社区出现一手实测，再补 | 无需动作 |

## 四、线上复验（`dig` 取 IP + `curl --resolve`，绕过本机 vercel.app DNS 污染）

| 检查 | 结果 |
|---|---|
| `/`、`/guides`、2 篇抽查攻略、`/sitemap.xml` | 全部 **200** |
| `<h1>` 计数（首页 + 2 篇攻略） | 1 / 1 / 1 ✅ |
| sitemap | 16 条 = 8 静态 + 8 攻略 ✅ |
| `/guides` 索引 | 8 条链接 ✅ |
| 部署 | `vercel deploy --prod` 成功，alias → `blinddescentwiki.vercel.app` |

## 五、结论

**PASS（含 1 项已修 🟠）** —— 8 页 / 11,305 词，机械门禁全过，12 条抽检中 11 条逐字可回溯、1 条为已标注的社区单源；唯一的无源数值（10–15 小时）已在部署前删除并复验线上。

**缺口（需人工）**：GA4 property 未创建 → `lib/seo-config.ts` 留空、dashboard 未注册；已在飞书「站点台账(人工)2026-10」补登记行（站点裸域名），`自动化状态` 留空=待填。
