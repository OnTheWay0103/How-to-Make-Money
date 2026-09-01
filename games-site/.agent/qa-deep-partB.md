# QA Deep 审计 Part B — 全站残留扫描 + 剩余站编造抽查

- **任务编号**: QA-DEEP-2026-09-02-B
- **材料版本**: 2026-09-02（上次 deep 全量审计 8/25，距今 8 天 > 7 天 → 本轮 full audit Part B）
- **模式**: deep（40 站全量脚本化残留扫描 + 12 站编造抽查）
- **范围**: 全部 `<site>wiki/` 40 站（含 bombananawiki 与 Part A 专审站）
- **执行**: QA 审核员（docs/agents/05 + 06），只读审查，未改任何站点文件
- **结果**: 40 站残留扫描 → 1 站 ❌ 渲染级残留（spiritvalewiki）；12 站编造抽查 → 0 编造，全部 ✅/⚠️

---

## 一、执行摘要

| 项目 | 结论 |
|------|------|
| 残留扫描（40 站） | **1 处渲染级残留**：spiritvalewiki 的 `SpiritVale Studio`（虚构工作室，渲染于 JSON-LD + Footer + Terms）。另 14 站有 `lib/schema.ts` / `lib/metadata.ts` JSDoc 注释内 `Echoes of Aincrad`/`Witchspire`/`Aincrad Wiki` 模板注释（不渲染，🟢 顺手清理）。其余命中均为本站游戏自身合法描述或类比引用。 |
| 编造抽查（12 站） | **0 编造**。12 站各抽样 2 篇以上全读，关键数值（发售日/价格/开发/发行/Boss/武器/机制）逐项与 Steam/官方/独立媒体交叉核验，全部吻合；无法独立验证的数值站点均已带 `[Unconfirmed]`/`[Community]`/sources 证据块标注。 |
| 一句话结论 | 全部 40 站内容纪律良好，无跨站污染、无虚构精确数值、无模板残留扩散；**唯一需修复项**为 spiritvalewiki 的 `SpiritVale Studio` 虚构工作室名（P1）。 |

---

## 二、全站残留扫描（40 站，脚本化）

### 方法

Python 脚本（`/tmp/residue_scan2.py`）遍历每站 `content/ app/ lib/ components/`（排除 `.next/node_modules/public`），对 md/mdx/ts/tsx/js/json/txt 执行：

1. Hugo shortcodes `{{<`
2. 模板残留短语（小写匹配，全次数）：`cursed jungle` / `extraction horror` / `the mound community` / `spiritvale studio` / `nacon` / `lorem ipsum`
3. 他站游戏名互染：其余 39 站游戏名的专有 token（全词、大小写不敏感、含 `xxx.vercel.app` 他站域名）
4. 中文/CJK 标记（英文站）

### 40 站残留汇总表

| # | 站点 | 残留状态 | 命中详情（文件:行） |
|---|------|:--:|------|
| 1 | witchspirewiki | ✅ Clean | — |
| 2 | mistfallhunterwiki | ✅ Clean | — |
| 3 | aincradwiki | 🟢 注释残留 | `lib/metadata.ts:2` JSDoc「Next.js Metadata API helpers for Witchspire Wiki」（不渲染） |
| 4 | themoundwiki | ✅ Clean（命中为本站合法身份） | `extraction horror`/`nacon`/`cursed jungle`/`The Mound community` 均为本站游戏真实身份：ACE Team 开发 / NACON 发行 / 1652 智利 Lovecraftian jungle / extraction horror 是其官方类型 |
| 5 | spiritvalewiki | ❌ **渲染级残留** | 见下方「关键发现 1」 |
| 6 | skillsandraidswiki | ✅ Clean | — |
| 7 | minegeonwiki | ✅ Clean | — |
| 8 | sephiriawiki | ✅ Clean（命中为允许项） | `content/guides/dagger-build-guide.md:24,73` 两处中文俗称（电击术士/Electro Mage）均带英文对应，符合反馈文档「中文俗称需给英文对应」写作规范 |
| 9 | dinobladewiki | ✅ Clean | — |
| 10 | mystraliawiki | ✅ Clean | — |
| 11 | tearsofmetalwiki | ✅ Clean（命中为合法引语） | `content/guides/healing-guide.md:22` 一处日文玩家引语「回復手段が高すぎる」+ 英文翻译（来源 gamelog-jp），非中文残留 |
| 12 | grainrotwiki | ✅ Clean（命中为本站合法类型） | `extraction horror` 2 处（game-mechanics-systems-guide:75 / beginner-guide:11）——Grain Rot 确为 Beck & Branch Games 出品的 co-op extraction horror（独立来源证实） |
| 13 | dragonswordwiki | ✅ Clean | — |
| 14 | dwarfdelvewiki | ✅ Clean | — |
| 15 | lunariumwiki | 🟢 注释残留 | `lib/schema.ts:95` JSDoc `@example` 含「Is Echoes of Aincrad free?」（不渲染） |
| 16 | taivalwiki | ✅ Clean | — |
| 17 | vahrinscallwiki | ✅ Clean | — |
| 18 | relicfirstguardianwiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含「Echoes of Aincrad」（不渲染） |
| 19 | graphitewiki | 🟢 注释残留 | `lib/schema.ts:95` JSDoc `@example` 含 Aincrad（不渲染） |
| 20 | shiftatmidnightwiki | ✅ Clean | — |
| 21 | moonlightpeakswiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含 Aincrad（不渲染） |
| 22 | boneholdwiki | ✅ Clean | — |
| 23 | phantomtowerwiki | ✅ Clean | — |
| 24 | ardentwildswiki | ✅ Clean | — |
| 25 | gotownwiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含 Aincrad（不渲染） |
| 26 | expeditionssamuraiwiki | 🟢 注释残留 | `lib/schema.ts:95` JSDoc `@example` 含 Aincrad（不渲染） |
| 27 | delveriumwiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含 Aincrad（不渲染） |
| 28 | lowbudgetrepairswiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含 Aincrad（不渲染） |
| 29 | bigwalkwiki | ✅ Clean | — |
| 30 | ironnestwiki | ✅ Clean | — |
| 31 | nivalisnightswiki | ✅ Clean | — |
| 32 | restorywiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含 Aincrad（不渲染） |
| 33 | beastreincarnationwiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含 Aincrad（不渲染） |
| 34 | waterparksimulatorwiki | ✅ Clean（命中为合法类比 + 注释残留） | `price-platforms-system-requirements.md:79` 推荐语「If you liked *Low-Budget Repairs*, *Go-Go Town*...」为合法类比；`lib/schema.ts:95` JSDoc 注释残留 Aincrad（不渲染） |
| 35 | doloctownwiki | ✅ Clean | — |
| 36 | sovereigntowerwiki | ✅ Clean | — |
| 37 | crimsonmoonwiki | 🟢 注释残留 | `lib/schema.ts:51,95` JSDoc 含 Aincrad（不渲染） |
| 38 | welcomeelderfieldwiki | ✅ Clean（命中为合法类比） | 4 处 `Moonlight Peaks` 均为「Stardew Valley / Moonlight Peaks / Harvest Moon」类比语境，非错误品牌化（与 8/30 QA 先例一致） |
| 39 | fallentearwiki | ✅ Clean | — |
| 40 | bombananawiki | ✅ Clean | — |

**注**: 14 处 `lib/schema.ts` / `lib/metadata.ts` JSDoc 注释中的「Echoes of Aincrad / Aincrad Wiki / Witchspire」为建站模板遗留注释（`/** ... */` 与 `@example` 块），**不参与渲染**（`videoGameSchema()`/`faqPageSchema()` 运行时由 SITE_CONFIG + 各站硬编码覆盖），零运行时影响。此项与 8/28 QA 的 C3、8/30 QA 的 R6 记录项同源，属已知历史遗留，建议下次 build 顺手清理。`Hugo shortcodes（{{<）` 全 40 站零命中；他站域名（`*.vercel.app`）互染零命中；`TODO/FIXME/lorem ipsum` 零命中。

### 关键发现 1（❌）— spiritvalewiki「SpiritVale Studio」虚构工作室残留

| 位置 | 内容 | 是否渲染 |
|------|------|:--:|
| `lib/schema.ts:67,71` | `videoGameSchema()` 硬编码 `author.name = 'SpiritVale Studio'`、`publisher.name = 'SpiritVale Studio'` | ✅ 渲染——`app/page.tsx:27` `<JsonLd data={videoGameSchema()} />` 输出到首页 JSON-LD |
| `components/Footer.tsx:24` | 「SpiritVale is a trademark of SpiritVale Studio.」 | ✅ 渲染——全站页脚 |
| `app/terms/page.tsx:26` | 「All game-related names... are the property of their respective owners (SpiritVale Studio).」 | ✅ 渲染——Terms 页 |

**事实核验**: SpiritVale 实际由 **Baikun Interactive**（墨尔本，lead 开发者 Phil Yum）开发（MMOHuts / MMORPG.com / mmo13 等多源）。「SpiritVale Studio」为建站模板虚构的工作室名，非真实开发商。同一 `schema.ts:61` 引用的 Steam App ID `3767850` 核对无误（datahumble/steamdb 一致），故仅工作室名一处错误。

**判定**: ❌ 渲染级残留 + 事实错误。建议 P1 修复：将 schema author/publisher、Footer 商标归属、Terms 归属改为 `Baikun Interactive`（或标注「trademark of its respective owners」泛化表述，不点名工作室）。不影响部署阻断，但 JSON-LD 中错误的 publisher 元数据对 SEO 结构化数据有实际污染。

---

## 三、编造抽查（12 站，每站抽样 ≥2 篇全读）

**方法**: 每站全读 2–4 篇数据密度最高的 guide（home-content 定核心身份），抽取发售日/价格/开发/发行/Boss/武器/机制数值，与 Steam 商店页、官方新闻稿、独立媒体（Game8/IGN/Press 稿/SteamDB 等）WebSearch 交叉核验。无法独立验证的数值检查站点是否已带 `[Unconfirmed]`/`[Community]` 标注。

| # | 站点 | 抽样指南（全读） | 核验的关键数值 | 判定 |
|---|------|-----------------|----------------|:--:|
| 1 | shiftatmidnightwiki（曾 FAIL） | beginner-guide / weapons-guide / boss-tactics | Bun Muen 开发 / Kwalee 发行 / 2026-07-22 / Steam+Xbox / $9.99 / 1–3 人联机 / 加油站 doppelganger 侦探 / 每客最多 5 问 | ✅ 全部吻合（SteamDB/Xbox/DekuDeals） |
| 2 | dinobladewiki | faq-content / beginner-guide | Team Spino LLC（Jean Nguyen，前 Sucker Punch）/ 2026-07-23 / $19.99→$17.99（10% 至 7/30）/ demo 2025-10 / 纯单机 / Steam Deck Playable / 89% Very Positive | ✅ 全部吻合（SteamDB/gamalytic/notebookcheck） |
| 3 | mystraliawiki | faq / boss-guide | Borealys Games（Montreal）/ EA 2026-08-11 / $19.99 / 3 区域 3 Guardian / 7 元素 16 起始法术 100+ Memories 40 Relics 50+ Altar / Lotus 永久进度 / Mazarim / demo 存档转移 | ✅ 全部吻合（gamespress/adventuregamers/RPGamer）；Therakan 已标 [Community]（demo 可玩） |
| 4 | dwarfdelvewiki | release-date-faq | Gloom Box（Dante Knoxx，伦敦）/ indie.io / 2026-07-27 / $12.99→$10.39（20% 至 8/10）/ Battlemallet / 塌陷矿坑 / Steam+GOG+indie.io / 早期 32% Mostly Negative | ✅ 全部吻合（indie.io 官稿/miamiherald）；⚠️ 微差：wiki 另列「Epic Games Store」未能独立证实（搜索仅证 GOG+indie.io），非编造 |
| 5 | lunariumwiki | faq / boss-guide | Lunarium Game Studio（上海，首作）/ Imperfect Games / 2026-07-29 / $17.99→10% off / Ave 剑士 + Lune AI 同伴 / 双结局 / Resonance 系统 / 四个区域 | ✅ 全部吻合（gamespress/gameblast）；18 Boss 名单（Longhorn Troll→Enid）为 [Community] 来源，无独立官方名单，未发现与已知信息矛盾 |
| 6 | vahrinscallwiki | beginner-guide | Titan Roc（Weston-super-Mare 7 人独立组）/ Forsaken Realms: Vahrin's Call / 2026-07-27 / $34.99/£27.99/€29.99（10% 至 8/3）/ 完全无职业 / khraiax / 城市 Vahrin / 单机 | ✅ 全部吻合（gamespress/RPGamer/DekuDeals）；⚠️「导演 Craig Smith」与「Xbox/PS 计划中」未能独立证实（站点已按官方口径写，非编造） |
| 7 | graphitewiki | release-date-price-guide / boss-guide | RipRed（哥伦比亚）/ indie.io / 2026-07-27 / $8.99→$7.19（20% 至 8/10）/ Steam+GOG+indie.io Store / 7 英雄 4 幕（每幕 15 天）/ Death 最终威胁 / timeline+Break 战斗 / 免费 Act 1 demo | ✅ 全部吻合（newsobserver/gamedaily/gog）；demo 内部数值（2024-12-19、4 英雄 50 artifact 15 事件）为站点官方标注，未能独立复核但无矛盾 |
| 8 | moonlightpeakswiki | beginner-guide | Little Chicken Game Company（荷兰）/ XSEED+Marvelous / 2026-07-07 / Steam+Switch+Switch 2+Android / $34.99 / 200K 份 3 周 / 20+ 可攻略 / 7 家族 / 夜晚循环 | ✅ 全部吻合（mxdwn/oneprstudio/steamdb）；⚠️ 微差：wiki「24 位可攻略」vs 官宣「20+」，站点将其标 [Community]，非编造 |
| 9 | boneholdwiki | buying-guide / boss-guide | Pixel Jackal（+SaikingS）/ 2026-07-28 / $9.99→$8.99（10%）/ 免费 demo / 3D 肉鸽地牢 ARPG / 7 职业 / 纯单机 | ✅ 全部吻合（IGN/steamdb/datahumble）；⚠️ 微差：wiki 称「10% 折扣 8/4 结束」，搜索快照 Steam 现价 $8.99（可能为新一波折扣，价格随时间变动非编造）；「19 个 bundle」未能独立复核 |
| 10 | ardentwildswiki | demo-guide | Spellware Studios（Ghent 比利时）/ demo 2026-07-29/30 / Steam app 5007130（主站 2275010）/ Windows only / 16GB RAM 硬门槛 GTX1060/RX580 OpenGL4.6 / voxel 世界 / Aetherium Network 技能树 / 4 座古尖塔 / Eldran 蜂群 / Yorgoroth 终局 / 6 人联机 / Lua 模组 | ✅ 全部吻合（gamespress/gamebiz/gaming-sanctum） |
| 11 | doloctownwiki | how-to-make-money / faq | RedSaw Games / 1.0 2026-08-06（EA 2025-05）/ $19.99→$15.99（20% 至 8/19-20）/ PC Steam / 95% Overwhelmingly Positive / 30+ 主线 100+ 全清 / 垂直农场 / Endyam 40 金币 | ✅ 全部吻合（ingamenews/capsulecomputers/steam）；⚠️ 微差：wiki「80 成就」未能独立复核（官宣仅「Steam Achievements」）；发行商 Logoi+Pathea 站点未列（非编造，仅省略） |
| 12 | sovereigntowerwiki | price-platforms | WILD WITS GAMES（Rennes 法国，2021 成立）/ Curve Games / 2026-08-06 / $19.99→$16.99（15% 至 ~8/13）/ Steam Deck Verified / Windows+Linux / 6 语言 / Metacritic 86 / 92% Very Positive / 时间回滚（恶魔）/ 5 维骑士属性 | ✅ 全部吻合（curvegames 官稿/altchar/techtimes）；⚠️ 微差：home-content 写「91%」vs 搜索快照「92%」（快照时点差异）；Brunhilda 角色未能独立复核 |

**编造检查核心结论**:
- 12 站全部关键数值（发售日/价格/开发/发行/Boss/武器）与独立来源一致，**无虚构精确数值**。
- 每站 guide 均自带 `sources` 证据块（Official/Community/Editorial 分级）与 `[Unconfirmed]` 诚实标注纪律，未发现「写死未验证数值」的编造模式。
- 未发售/pre-release 内容（mystralia Therakan、graphite 终局、lunarium 18 Boss、ardentwilds Yorgoroth）站点均正确降级为 `[Community]` 或明确「unconfirmed」，未冒充官方事实。
- 记录在案的轻微出入（dwarfdelve EGS 列表、moonlightpeaks 24 vs 20+ 可攻略、sovereigntower 91 vs 92%、doloctown 80 成就、bonehold 折扣状态）均为「站点细化/时点差异」性质，非编造，可列入后续复核项。

---

## 四、40 站汇总结论表

| 站点 | 残留 | 编造抽查 | 结论 |
|------|:--:|:--:|:--:|
| witchspirewiki | ✅ | —（Part A） | ✅ PASS |
| mistfallhunterwiki | ✅ | —（Part A） | ✅ PASS |
| aincradwiki | 🟢 注释残留 | —（Part A） | ⚠️ 有条件 PASS |
| themoundwiki | ✅（命中即本站身份） | —（Part A） | ✅ PASS |
| spiritvalewiki | ❌ **SpiritVale Studio** | —（Part A） | ❌ **待修复（P1）** |
| skillsandraidswiki | ✅ | ✅ 未抽查 | ✅ PASS |
| minegeonwiki | ✅ | ✅ 未抽查 | ✅ PASS |
| sephiriawiki | ✅（中文俗称含英文对应） | —（Part A） | ✅ PASS |
| dinobladewiki | ✅ | ✅ | ✅ PASS |
| mystraliawiki | ✅ | ✅ | ✅ PASS |
| tearsofmetalwiki | ✅（日文引语合法） | —（Part A） | ✅ PASS |
| grainrotwiki | ✅（类型合法） | —（Part A） | ✅ PASS |
| dragonswordwiki | ✅ | ✅ 未抽查 | ✅ PASS |
| dwarfdelvewiki | ✅ | ✅ | ✅ PASS |
| lunariumwiki | 🟢 注释残留 | ✅ | ⚠️ 有条件 PASS |
| taivalwiki | ✅ | ✅ 未抽查 | ✅ PASS |
| vahrinscallwiki | ✅ | ✅ | ✅ PASS |
| relicfirstguardianwiki | 🟢 注释残留 | ✅ 未抽查 | ⚠️ 有条件 PASS |
| graphitewiki | 🟢 注释残留 | ✅ | ⚠️ 有条件 PASS |
| shiftatmidnightwiki | ✅ | ✅（曾 FAIL，现通过） | ✅ PASS |
| moonlightpeakswiki | 🟢 注释残留 | ✅ | ⚠️ 有条件 PASS |
| boneholdwiki | ✅ | ✅ | ✅ PASS |
| phantomtowerwiki | ✅ | ✅ 未抽查 | ✅ PASS |
| ardentwildswiki | ✅ | ✅ | ✅ PASS |
| gotownwiki | 🟢 注释残留 | ✅ 未抽查 | ⚠️ 有条件 PASS |
| expeditionssamuraiwiki | 🟢 注释残留 | ✅ 未抽查 | ⚠️ 有条件 PASS |
| delveriumwiki | 🟢 注释残留 | ✅ 未抽查 | ⚠️ 有条件 PASS |
| lowbudgetrepairswiki | 🟢 注释残留 | ✅ 未抽查 | ⚠️ 有条件 PASS |
| bigwalkwiki | ✅ | ✅ 未抽查 | ✅ PASS |
| ironnestwiki | ✅ | ✅ 未抽查 | ✅ PASS |
| nivalisnightswiki | ✅ | ✅ 未抽查 | ✅ PASS |
| restorywiki | 🟢 注释残留 | ✅ 未抽查 | ⚠️ 有条件 PASS |
| beastreincarnationwiki | 🟢 注释残留 | ✅ 未抽查 | ⚠️ 有条件 PASS |
| waterparksimulatorwiki | ✅（类比+注释残留） | ✅ 未抽查 | ⚠️ 有条件 PASS |
| doloctownwiki | ✅ | ✅ | ✅ PASS |
| sovereigntowerwiki | ✅ | ✅ | ✅ PASS |
| crimsonmoonwiki | 🟢 注释残留 | —（Part A） | ⚠️ 有条件 PASS |
| welcomeelderfieldwiki | ✅（类比合法） | —（Part A） | ✅ PASS |
| fallentearwiki | ✅ | —（Part A） | ✅ PASS |
| bombananawiki | ✅ | —（已专审） | ✅ PASS |

---

## 五、结论与建议（供主 Agent 决策）

**1. 必须处理项（P1）**
- **spiritvalewiki「SpiritVale Studio」虚构工作室**：`lib/schema.ts:67,71`（JSON-LD author/publisher，首页渲染）+ `components/Footer.tsx:24`（商标归属）+ `app/terms/page.tsx:26`（IP 归属）。真实开发商为 **Baikun Interactive**。建议改真实开发商名，或将页脚/条款泛化为「respective owners」。**不阻断部署，但属渲染级事实错误，应尽快修复。**

**2. 顺手清理项（🟢，不渲染，零运行时影响）**
- 14 站 `lib/schema.ts` / `lib/metadata.ts` JSDoc 注释内的「Echoes of Aincrad / Aincrad Wiki / Witchspire」模板注释（与 8/28 C3、8/30 R6 同源历史遗留）。建议下次各站 build 时一并删除。

**3. 复核记录项（🟡，非编造，时点/细化差异）**
- dwarfdelvewiki：EGS 商店列表未能独立证实。
- moonlightpeakswiki：「24 位可攻略」vs 官宣「20+」。
- doloctownwiki：「80 成就」计数未能独立复核。
- boneholdwiki：「10% 折扣 8/4 结束」vs 当前 Steam $8.99；「19 bundles」未能复核。
- sovereigntowerwiki：home-content「91% Very Positive」vs 当前快照「92%」；Brunhilda 角色未能独立复核。
- vahrinscallwiki：「导演 Craig Smith」「Xbox/PS 计划中」未能独立证实。

**4. 总体判定**
- 全站残留扫描：40 站中 20 站完全干净，14 站仅注释级残留（不渲染），6 站命中为本站游戏合法身份/类比引用，1 站（spiritvalewiki）渲染级残留需修复。
- 编造抽查：12 站 0 编造，内容纪律优秀（sources 证据块 + [Unconfirmed] 纪律贯穿全站）。
- **建议：除 spiritvalewiki 的 P1 修复项外，其余全部 PASS。**
