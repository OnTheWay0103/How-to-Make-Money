# QA Deep 全量审计 — Part A（8 站）

- **模式**: deep full audit（上次 deep 全量 2026-08-25，距今 8 天 > 7 天 → 触发 full audit）
- **审查日期**: 2026-09-02
- **范围**: crimsonmoonwiki / welcomeelderfieldwiki / fallentearwiki / grainrotwiki / sephiriawiki / spiritvalewiki / tearsofmetalwiki / themoundwiki
- **性质**: 只读审查（未修改任何站点文件；只写本报告）
- **方法**: 逐站 Residue 扫描（source-only）+ 记录项闭环验证（文件行号证据）+ 编造抽检（Steam/官方/独立来源外部核验）+ related/跨页一致性

---

## 执行摘要

- 8 站全部线上可达（HTTP 200）
- **0 🔴 阻断**；**9/8 站 PASS，1 站（crimsonmoon）PASS（含 2 项新观察）**
- 历史「有条件 PASS」记录项闭环情况：**6 项已修复 / 4 项经发售后或外部来源验证已闭环 / 4 项仍存在（均为零影响顺手项或观察项，非阻断）**
- 新增观察（非阻断）：crimsonmoon 发售后仍有「尚未发售」过期措辞（9/1 已发售）；welcomeelderfield demo 好评数再增长（603 评/95%），"~550" 略滞后

---

# 一、crimsonmoonwiki（BUILD-003，9/1 已发售）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| **C1** Manuscript translation 写成 confirmed 但无来源 | ✅ **已闭环（发售后可验证）** | 独立来源确认 Sanctus Clypeus hub 含 "translate scrolls"（gamerfuzion / wccftech / Duck-IT，法媒 "traduire des parchemins"）。底层系统真实存在；站内措辞「manuscript translation」为 "translate scrolls" 的意译，无事实错误。涉及文件仍写 confirmed：`content/guides/sanctus-clypeus-hub-guide.md:3/21/46/79/91`、`content/home-content.md:73`、`content/guides/faq-content.md:102`、`content/guides/beginner-guide.md:79`、`app/tier-list/page.tsx:16` |
| **C2** vampire blacksmith 属性无来源 | ✅ **已闭环（发售后可验证）** | 独立来源确认存在吸血鬼铁匠 NPC **Gajov**：奖杯「Gajov Make Strong」（在铁匠处升级武器/盾牌至 rare 以上）+ 预览稿 "A fearsome vampire blacksmith whose legendary craftsmanship is matched only by his turbulent past"。站内「vampire blacksmith」表述准确。`sanctus-clypeus-hub-guide.md:44`、`equipment-sets-guide.md:84` 等 |
| **C3** lib/schema.ts 注释残留 Aincrad | 🟡 **仍存在**（零渲染，顺手项） | `lib/schema.ts:51`「Describes Echoes of Aincrad as a software application / video game」、`:95`「Is Echoes of Aincrad free?」 |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` | ✅ Clean（0） |
| 他站游戏名/域名（运行时） | ✅ 仅 schema.ts 注释 2 处（C3，不渲染） |
| 模板/占位残留 / 中文标记 | ✅ Clean |

## 编造抽检（发售后）

- 价格 $19.99/$29.99、发售日 9/1/2026、Steam App ID 4317690、平台 PC/PS5/Xbox — 与 Steam 直读一致 ✅
- C1/C2 底层事实发售后均已独立验证（见上）✅

## 跨页一致性

- related slugs 16 篇 0 broken / 0 self-ref；内部 `/guides/` 链接 0 broken ✅

## 新观察（非本轮引入，发售后过期）

- 🟡 `content/home-content.md:15`「Because the game has not launched yet…」— 游戏已于 9/1 发售，措辞过期
- 🟡 `system-requirements.md:43`（Steam Deck ⏳ Pending）、`:54`（"will be filled before launch"）、`price-platforms.md:64`（pre-order 口径）、`game-length-guide.md:59`（"before launch"）— 发售后建议整站刷新一次，将已可验证的 [Unconfirmed] 升级为 confirmed

**判定**: ✅ **PASS**（C1/C2 已闭环，C3 顺手项；新增发售后刷新观察 2 项，非阻断）

---

# 二、welcomeelderfieldwiki（BUILD-004，9/10 发售）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| **R1** 全游戏最低配置无法线上证实 | ✅ **已闭环（本次人工/线上核验通过）** | 直接 WebFetch Steam App 3195440：最低配置与站内表**逐字一致**（Win10 64-bit / i5-11600K & 5600X / 8GB / GTX 1050 Ti & RX 570 / DX11 / 2GB / 1280x768）。`system-requirements.md:37-43` 全部正确；`:21` 仍带 [Unconfirmed] 保留注记 → 建议升级为 confirmed/Official |
| **R2** demo 好评数 400+→550+ | ✅ **已修复** | `content/guides/faq-content.md:46`「~550 reviews」、`app/faq/page.tsx:15`「over 550 reviews」。实测现为 **603 评 / 95% positive** → "over 550" 仍准确但略滞后（🟢 观察，非阻断） |
| **R3** demo 时长 2-4h vs 玩家 20h 报告 | ✅ **已闭环（口径标注到位）** | 统一标 [Community] / "community reports"：`demo-guide.md:61`、`faq-content.md:82`、`game-length-guide.md:37`，`:117` 注明 "Demo playtime (2–4h) is community-reported" |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes | ✅ Clean（0） |
| 他站游戏名/域名 | ✅ 仅 4 处 "Moonlight Peaks" 类比（Stardew/Moonlight Peaks 对比语境，非品牌污染）：demo-guide:102 / difficulty-modes:77 / game-length:89 / price-platforms:108 |
| 模板/中文 | ✅ Clean |

## 编造抽检

- 全游戏最低配置 = Steam 逐字 ✅（R1 闭环）
- demo App ID 3195680、2024-10-07 发布、~1/6 全游戏 — 与 Steam 一致 ✅
- 发售日 9/10/2026、开发者 Chris Cote、发行 Kwalee — 与先验一致 ✅

## 跨页一致性

- related 17 篇 0 broken；内部链接 0 broken ✅

**判定**: ✅ **PASS**（R1/R2/R3 全部闭环；demo 好评数再增为 🟢 观察）

---

# 三、fallentearwiki（BUILD-005，9/16 发售）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| Blink-Strike [Community] 待发售后复验 | ⏳ **待 9/16 发售**（当前处置正确） | 游戏未发售，无法复验；站内维持 [Community] 标注纪律：`combat-guide.md:39`、`controls-techniques-guide.md:43/65/134`、`boss-guide.md:74`。无越级确认 |
| home-content.md 孤儿文件 | 🟡 **仍存在**（非构建输入） | app/page.tsx 用硬编码 FEATURED_GUIDES，`content/home-content.md` 无代码引用。维护风险非阻断 |
| fated-bonds related 悬空 `tier-list` | ✅ **已修复** | `fated-bonds-guide.md:14-19` related = beginner-guide/combat-guide/hunter-skills-guide/temple-of-oras-guide/endings-guide，全部存在，无 `tier-list` 悬空 |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes / 中文 / 模板残留 | ✅ Clean（0） |
| 他站游戏名/域名 | ✅ Clean（0） |

## 编造抽检

- 1.0 价格 $24.99/€24.99/£21.99、首发 -10%、EA $19.99、9/16 1.0、Steam App ID 1446900 — 与先验一致 ✅

## 跨页一致性

- related 17 篇 0 broken；内部链接 0 broken ✅

**判定**: ✅ **PASS**（fated-bonds 已修复；Blink-Strike 待发售后复验为既定流程，home-content 孤儿为已登记 known issue）

---

# 四、grainrotwiki（EXPAND-009）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| L37 引号非逐字 | ✅ **已修复** | `rot-debuff-guide.md:37`「Corrupted enemies are another source: **"Allowing one to get too close can inflict Rot as well."**」— 非逐字部分已移出引号外，引号内为逐字 |
| Rot 阈值/净化口径跨页一致 | ✅ **一致** | 100 层阈值 [Unconfirmed]（`rot-debuff-guide.md:39`）；`game-mechanics-systems-guide.md:38` 明确「specific corruption thresholds, cleansing items, whether reversed in-run」未验证；`endgame-survival.md` 用框架而非具体数值。三页无矛盾 |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes / 中文 / 模板残留 | ✅ Clean（0） |
| "extraction horror" | ✅ 合法（grain rot 自身类型描述）：`beginner-guide.md:11`（引源）、`game-mechanics-systems-guide.md:75`（自述类型），非他站模板 |
| 他站游戏名/域名 | ✅ Clean |

## 编造抽检

- Rot 100 阈值「减速 + 随机呕吐绿液 + 掉血」— 与 GamerBlurb 原文逐字吻合 ✅（外部核实）
- 阳光清除但伤 Vessel、Outpost 净化 — 与 GamerBlurb/FinalBoss 一致 ✅

## 跨页一致性

- related 26 篇 0 broken；内部链接 0 broken ✅

**判定**: ✅ **PASS**

---

# 五、sephiriawiki（EXPAND-010）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| dagger-build-guide L108 火匕首 crit 过述 | ✅ **已修复** | `dagger-build-guide.md:108` 现为「Crit investment differs from the lightning build, so follow a community Lizard Scholar guide for the exact split [Community].」— 删除了「skip crit talents」过述，改为诚实指向社区指南 |
| staff-build-guide 正文日期 8/11 vs frontmatter 8/21（范围外观察） | 🟡 **仍存在**（范围外，非本轮引入） | `staff-build-guide.md:6` updated "2026-08-21" vs `:13` 正文 "August 11, 2026" |
| 「R5 healing-guide L111」归属说明 | ✅ **不属 sephiria，实为 tearsofmetal** | 任务清单将 R5 重复列入 sephiria 与 tearsofmetal；查 QA 历史，R5 为 EXPAND-008 tearsofmetal `healing-guide` 的记录项（本轮已在其章节验证闭环）。sephiria EXPAND-010 无独立 R5 编号 |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes | ✅ Clean（0） |
| 中文标记 | ✅ 2 处均有英文对应，符合写作规范：`dagger-build-guide.md:24` 电刀鹿（"Electric Dagger Deer"）、`:73` 电击术士（"Electro Mage"） |
| 他站游戏名/域名 / 模板 | ✅ Clean |

## 编造抽检

- 触电公式（每 2 秒结算 / ≈90%×层数×剩余秒 / 结算后清空）、GG20 每套装增伤、Difficulty 60 站撸 — 与先验 18183/ali213/diyiyou 多源交叉一致 ✅

## 跨页一致性

- related 31 篇 0 broken；内部链接 0 broken ✅

**判定**: ✅ **PASS**（L108 已修复；staff 日期不一致为范围外既有观察）

---

# 六、spiritvalewiki（R1 P0 批量修正）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| **R1 P0** 职业名 Scout→Gunslinger/Weaver 批量修正 | ✅ **保持**（无回退） | `grep "Sniper"` 全树 0 命中；Gunslinger 5,000 gold（`advanced-classes-guide.md:25/65/108/162`、`gunslinger-guide.md:39/46`）、Weaver 15,000 gold（`advanced-classes-guide.md:25/173`）跨文件一致；class-tier-list:3/20/44 新框架 |
| **R6** lib/schema.ts/metadata.ts 注释 Aincrad 残留 | 🟡 **仍存在**（零渲染，顺手项） | `lib/schema.ts:51/95`、`lib/metadata.ts:24` |
| **R7** keyword-results/ 他站文件 | 🟡 **仍存在**（非构建输入，不发布） | `keyword-results/` 含 Echoes-of-Aincrad / Mistfall Hunter ×2 / The-Mound ×2 / Witchspire |
| **R8** tier 表述观察 | 🟡 **观察项，维持原判** | app/tier-list:10 A 行「Gunslinger boss DPS」vs class-tier-list:44 B「Gunslinger safe ranged DPS」— 武器 tier（best-in-role）vs 职业 tier 方法论不同，非矛盾，可选对齐 |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Sniper / 旧框架残留 | ✅ 0 |
| Hugo shortcodes / 中文 / 模板 | ✅ Clean |
| 他站游戏名（运行时） | ✅ 仅 keyword-results/（R7）与 lib 注释（R6） |

## 编造抽检

- Gunslinger 解锁（Scout J50 + 5,000 gold）、Weaver（任意 J50 + 15,000 gold）— 跨文件一致，与先验 GamesHub 来源吻合 ✅

## 跨页一致性

- related 40 篇 0 broken；内部链接 0 broken ✅

**判定**: ✅ **PASS**（R1 保持；R6/R7 顺手项，R8 观察项）

---

# 七、tearsofmetalwiki（EXPAND-008）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| healing-guide R5 L111 解释句归属 | ✅ **已修复** | `healing-guide.md:110` 现为「the stamina potion price **lacks an independent public source**, so it is marked **[Unconfirmed]**」— 正确指向「无外部独立来源」，不再误称 Village Upgrade Guide 未记载 |
| 治疗数值跨页一致 | ✅ **一致** | Basic Healing 50 / Stamina 75 / Corruption Cure 100（`healing-guide.md:115-117` = `village-upgrade-guide.md:126-131`）；Healing Font ~100 coins [Unconfirmed]（healing-guide:43/49）；co-op 复活 250/350 coins（healing-guide:100） |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes | ✅ Clean（0） |
| 中文标记 | ✅ 仅 1 处日文引语「回復コストが高すぎる」（`healing-guide.md:22`，Steam 日评引述含译文，合法引用非残留） |
| 他站游戏名/域名 / 模板 | ✅ Clean |

## 编造抽检

- 治疗来源/价格与 whisperofthehouse、2upskill 社区来源一致 ✅

## 跨页一致性

- related 28 篇 0 broken；内部链接 0 broken ✅

**判定**: ✅ **PASS**

---

# 八、themoundwiki（EXPAND-006）

## 记录项闭环状态

| 记录项 | 结论 | 证据（文件:行号） |
|--------|:--:|------|
| ChubbiChibbai attribution | ✅ **已闭环** | `weapon-durability-repair-guide.md:112` 完整归属：`[Steam player review — ChubbiChibbai (melee breaks; axe + crossbow most reliable)](https://steamcommunity.com/profiles/76561198008302916/recommended/2569760/)` — 带 Steam 档案链接 |
| anvil-persistence 表述 | ✅ **已闭环** | `weapon-durability-repair-guide.md:57`「Anvil upgrades apply only to the current expedition — they do not permanently improve the weapon, so you must re-apply them each run」— 与 NoobFeed 原文「apply only to the current expedition」逐字吻合，attribution 为 Editorial—NoobFeed（:50/:116） |

## Residue 扫描

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes | ✅ Clean（0） |
| 他站游戏名（运行时） | ✅ 仅 `keyword-results/` 6 个他站文件（非构建输入，同 spiritvale R7 情形） |
| 模板 / 中文 | ✅ Clean |
| related 误报澄清 | ✅ `weapons-guide.md:8` related 为内联 JSON 数组（6 个合法 slug）；「Rain-vulnerable/Rain-proof」为武器特质正文，非 related。`:118-119` 为外部 vgtimes/gameplay.tips URL，非站内 /guides/ 链接 |

## 编造抽检

- anvil 一次性（per-run）机制 — NoobFeed 外部核实吻合 ✅
- 武器耐久分级（Standard/Aged/Decayed）— GameWatcher Editorial 来源 ✅

## 跨页一致性

- related 33 篇 0 broken；内部 /guides/ 链接 0 broken ✅

**判定**: ✅ **PASS**

---

# 全量 Residue 汇总

| 站点 | Hugo shortcodes | 他站污染 | 模板/中文 | 状态 |
|------|:--:|:--:|:--:|:--:|
| crimsonmoonwiki | 0 | 仅 schema.ts 注释（C3） | Clean | ✅ Clean（1 顺手项） |
| welcomeelderfieldwiki | 0 | 0（Moonlight Peaks 类比合法） | Clean | ✅ Clean |
| fallentearwiki | 0 | 0 | Clean | ✅ Clean |
| grainrotwiki | 0 | 0 | Clean | ✅ Clean |
| sephiriawiki | 0 | 0 | 2 处中文含英文对应（规范） | ✅ Clean |
| spiritvalewiki | 0 | lib 注释（R6）+ keyword-results（R7） | Clean | ✅ Clean（2 顺手项） |
| tearsofmetalwiki | 0 | 0 | 1 处日文引语（合法） | ✅ Clean |
| themoundwiki | 0 | keyword-results/ 他站文件 | Clean | ✅ Clean（1 顺手项） |

# 记录项闭环汇总（12 项）

| 记录项 | 结论 |
|--------|:--:|
| crimsonmoon C1 Manuscript translation | ✅ 已闭环（发售后验证） |
| crimsonmoon C2 vampire blacksmith | ✅ 已闭环（发售后验证，NPC Gajov） |
| crimsonmoon C3 schema.ts 注释 | 🟡 仍存在（顺手项） |
| welcomeelderfield R1 最低配置 | ✅ 已闭环（Steam 逐字核验） |
| welcomeelderfield R2 demo 400+→550+ | ✅ 已修复（现 603 评/95%） |
| welcomeelderfield R3 demo 时长口径 | ✅ 已闭环（[Community] 标注到位） |
| fallentear Blink-Strike | ⏳ 待 9/16 发售复验（当前处置正确） |
| fallentear home-content 孤儿 | 🟡 仍存在（known issue） |
| fallentear fated-bonds related | ✅ 已修复 |
| grainrot L37 引号 | ✅ 已修复 |
| sephiria dagger L108 crit 过述 | ✅ 已修复 |
| sephiria staff 日期不一致（范围外） | 🟡 仍存在（观察项） |
| spiritvale R1 P0 职业名 | ✅ 保持（无回退） |
| spiritvale R6/R7 顺手项 | 🟡 仍存在（零影响） |
| spiritvale R8 tier 表述 | 🟡 观察项（非矛盾） |
| tearsofmetal R5 归属句 | ✅ 已修复 |
| themound ChubbiChibbai attribution | ✅ 已闭环 |
| themound anvil-persistence | ✅ 已闭环 |

# 编造抽检汇总（≥3 篇/站，Steam/官方/独立来源基准）

| 站点 | 抽检锚点 | 结果 |
|------|---------|:--:|
| crimsonmoon | 价格/发售日/App ID；C1/C2 底层事实 | ✅ 全部验证 |
| welcomeelderfield | 最低配置=Steam 逐字；demo App ID/好评 | ✅ 全部验证 |
| fallentear | 价格/发售日/App ID | ✅ 与先验一致 |
| grainrot | Rot 100 阈值/阳光清除 | ✅ GamerBlurb 吻合 |
| sephiria | 触电公式/GG20/难度60 | ✅ 多源交叉一致 |
| spiritvale | Gunslinger/Weaver 解锁费用 | ✅ 跨文件一致 |
| tearsofmetal | 治疗三价/复活价 | ✅ 跨页一致 |
| themound | anvil 一次性机制 | ✅ NoobFeed 吻合 |

**结论**: 无 🔴 明确编造。所有 load-bearing 数值均有来源或 [Unconfirmed] 标注。

---

# 决策建议（供主 Agent）

```
站点 1  crimsonmoonwiki       : ✅ PASS — C1/C2 发售后验证闭环；C3 顺手项；新观察：发售后措辞待刷新
站点 2  welcomeelderfieldwiki : ✅ PASS — R1（Steam 逐字核验）/R2/R3 全部闭环；demo 好评数再增为 🟢 观察
站点 3  fallentearwiki        : ✅ PASS — fated-bonds 已修复；Blink-Strike 待 9/16 复验；home-content 孤儿 known issue
站点 4  grainrotwiki          : ✅ PASS — L37 已修复；rot 口径三页一致
站点 5  sephiriawiki          : ✅ PASS — L108 已修复；staff 日期不一致为范围外观察
站点 6  spiritvalewiki        : ✅ PASS — R1 保持；R6/R7 顺手项；R8 观察项
站点 7  tearsofmetalwiki      : ✅ PASS — R5 已修复；治疗数值跨页一致
站点 8  themoundwiki          : ✅ PASS — ChubbiChibbai/anvil-persistence 均闭环
QA deep: 本轮为 full audit（Part A），8 站全部 PASS
决策:    8 站可维持已部署状态；建议后续（非阻断）：①crimsonmoon 发售后刷新措辞并升级已可验证的 [Unconfirmed] ②顺手清理 C3/R6 注释与 keyword-results/ 他站文件 ③welcomeelderfield demo 好评数改为 ~600 ④sephiria staff-build 日期对齐
```
