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
