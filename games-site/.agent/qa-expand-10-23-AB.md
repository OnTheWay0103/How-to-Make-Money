# QA 报告 — 10/23 新增攻略抽检（A+B 批，10 站）

- **审核日期**：2026-10-24（对象为 2026-10-23 新增内容）
- **审核范围**：10 个站点各 1 篇新增攻略（全量精读，非抽样）
- **审核角色**：QA 审核员（依据 `docs/agents/05-岗位卡-QA审核员.md`、`docs/agents/06-Profile-QA审核员.md`）
- **操作边界**：只读审核。**未修改任何 `content/` 文件，未执行 build / deploy，未 commit。**
- **结论口径**：
  - **PASS** — 无 🔴；仅有可延后处理的轻微问题
  - **有条件 PASS** — 无 🔴，但存在 🟡（核心事实待验证 / 站内旧文过时），需限期收口
  - **FAIL** — 存在 🔴（编造实体、模板残留、构建阻断）

---

## 一、总体结论

| 结论 | 站数 | 站点 |
|------|------|------|
| PASS | 6 | Witchspire、Mistfall Hunter、Echoes of Aincrad、The Mound、Grain Rot、Skills & Raids |
| 有条件 PASS | 4 | SpiritVale、Sephiria、Tears of Metal、MineGeon |
| FAIL | 0 | — |

- **🔴 合计：0**
- **🟡 合计：8**（分布于 7 个站）
- **模板残留：0**（10 篇均无他游游戏名、无中文残句、无 Hugo shortcode、无占位符、无 AI 套话）
- **链接可解析：10/10 全通过**（40 个 `related` slug 全部存在于同站 `content/guides/`）
- **最高风险项**：Tears of Metal 与 MineGeon 两篇的**核心前提**（10/21 实验分支、8/28 Patch 3）在本机网络下无法获得独立外部佐证；按 Profile「零命中不得判编造」规则记为 🟡，需人工开公告核实。**无 P0。**

> 技术说明：本机对 `store.steampowered.com` 的 curl 全部超时（HTTP 000），无法逐字比对 Steam 公告正文；WebSearch 仍可命中摘要与第三方转载。因此「Steam 公告细节」类断言统一记为「未验证」，不判 🔴。Bandai Namco 官方链接实测 **HTTP 200**。

---

## 二、横向扫描结果表

| # | 文件 | 他游名/中文/Hugo/占位符 | AI 套话 | related slug | 来源形式 | 诚实标注 | 结论 |
|---|------|------------------------|---------|--------------|----------|----------|------|
| 1 | `witchspirewiki/.../spell-gems-guide.md` | 0 | 0 | 4/4 OK | 3 Official + 2 Community + Editorial | 有，多处 | PASS |
| 2 | `mistfallhunterwiki/.../season-1-reset-guide.md` | 0 | 0 | 4/4 OK | 2 Official + 2 Community + Editorial | 有 | PASS |
| 3 | `aincradwiki/.../genesis-maidens-dlc-guide.md` | 0 | 0 | 4/4 OK | 3 Official + 1 Community + Editorial | 有，密度高 | PASS |
| 4 | `themoundwiki/.../temple-of-yig-dlc-guide.md` | 0 | 0 | 4/4 OK | 3 Official + 1 Community + Editorial | 有 | PASS |
| 5 | `spiritvalewiki/.../pvp-conquest-guide.md` | 0 | 0 | 4/4 OK | 4 Official + 1 Community + Editorial | 有 | 有条件 PASS |
| 6 | `sephiriawiki/.../sephiria-achievements-guide.md` | 0 | 0 | 5/5 OK | 2 Official + 2 Community + Editorial | 有，逐段标注 | 有条件 PASS |
| 7 | `grainrotwiki/.../grainrot-expedition-mode-guide.md` | 0 | 0 | 5/5 OK | 3 Official + 1 Community + Editorial | 有 | PASS |
| 8 | `tearsofmetalwiki/.../tears-of-metal-experimental-branch-guide.md` | 0 | 0 | 5/5 OK | 4 Official + 1 Community + Editorial | 有 | 有条件 PASS |
| 9 | `skillsandraidswiki/.../skills-and-raids-skill-rework-guide.md` | 0 | 0 | 5/5 OK | 3 Official + 1 Community + Editorial | 有 | PASS |
| 10 | `minegeonwiki/.../minegeon-save-rest-resume-guide.md` | 0 | 0 | 5/5 OK | 2 Official + 2 Community + Editorial | 有 | 有条件 PASS |

扫描关键词与结果：
- 跨站游戏名（SpiritVale/Witchspire/Mistfall/Aincrad/The Mound/Skills & Raids/Sephiria/Tears of Metal/MineGeon/Grain Rot 等，排除本站自身名）：**0 命中**
- 中文 `[一-龥]`：**0 命中**
- `{{<` / `{{%` / `PLACEHOLDER` / `TODO` / `lorem ipsum` / `XXX`：**0 命中**
- AI 套话（in the world of / whether you're a / remember to / delve into / dive into / unleash / game-changer / embark on / in conclusion）：**0 命中**
- `vercel.app`：5 篇出现，均为**本站 canonical 域名**（`lib/seo-config.ts` 确认），非残留

---

## 三、逐站审核明细

### 1. Witchspire — `witchspirewiki/content/guides/spell-gems-guide.md`
**结论：PASS（0 🔴 / 1 🟡）**

- **虚构检测**：WebSearch 命中官方新闻稿转载与 2 家媒体，确认 **52 Spell Gems、25 Sigils、Ricochet/Bleed/Multi-shot、Scrappy 六元素变体、Weapon Enhancement Table、Salvage Station、Luminary 退款**。具名生物 `Chirili / Traxio / Specra / Xilvant / Froblins` 与 `Stellar Burst` 法杖未能独立命中，但文中已把这些描述限定为「公告给出的部分示例」，并标 `[Unconfirmed]`（`:65`、`:102`、`:104`），不判编造。
- **模板残留**：无。
- **内部一致性**：🟡-1。本站旧文 frontmatter 仍为 `version: "0.1.4"`（`beginner-guide.md:5`、`spellblade-vs-wand-guide.md` 等），新文为 `0.3.2`。旧 `spellblade-vs-wand-guide.md:17` 仍写「武器是否锁定 Coven 未经证实」，与 0.3.0 后「gem 可在武器基座间自由迁移」的新机制存在读者观感冲突（非直接事实互斥）。
- **诚实标注**：良好。掉落表不完整、Sigil 商人与来源、升级成本/上限、Legacy 武器逐件行为均标 `[Unconfirmed]`。
- **来源质量**：3 条官方具体新闻页 + 2 家独立媒体 + Editorial，形式达标；Steam 链接本机不可直连，未逐字比对。
- **建议**：给旧文加「0.3.0 武器系统已重做」横幅或更新 version 字段（P2）。

### 2. Mistfall Hunter — `mistfallhunterwiki/content/guides/season-1-reset-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- **虚构检测**：WebSearch 独立复核 DevNote #10（2026-10-21）全部要点：六座重置建筑（Goddess Statue / Gylden Pool / Tavern / Workshop / Scavenger Squad / Soulcatch Tree）、Contribution → Gyldenblod Leaves、递减兑换率、保留清单、`Faded Contract Sigils` 1:1、Soulcatch Tree 新形态、Fateweaver Shop 五类商品与两件纪念品，**逐项命中**。
- **模板残留**：无。
- **内部一致性**：优秀。`season-guide.md:28` 已同步改为「六座建筑重置 + 仓库物品转换」并回链本篇，旧文的错误说法已修正（新文 `:147` 明确说明更正）。
- **诚实标注**：兑换比例未公布标 `[Unconfirmed]`（`:87`）；Season 2 日期 11/11 仅一家外媒报道，标 `[Unconfirmed]`（`:132`、`:163`）。
- **来源质量**：2 Official + 2 Community + Editorial，达标。
- **备注**：本篇为 10 篇中事实链条最完整的一篇。

### 3. Echoes of Aincrad — `aincradwiki/content/guides/genesis-maidens-dlc-guide.md`
**结论：PASS（0 🔴 / 2 🟡）**

- **虚构检测**：WebSearch 命中 Bandai Namco 官方公告、Steam 新闻、Anime News Network、GamesPress，确认 **Genesis Maidens、Mito（Misumi Tozawa）、curved sword、armor enhancement with passive effects、Floors 1–2 新区域、2026 冬季**。
- **模板残留**：无。
- **内部一致性**：🟡-2。本站 `update-patch-notes.md:30` 仍写「Current Build: 1.0.4」，且全文无 1.0.6；新文以 1.0.6（9/28）为当前前提。旧页已过时（非新文错误），需同步。
- **诚实标注**：非常到位。Mito 是否可操作、曲剑是否玩家可用、DLC 价格、上线日期、进入门槛全部标 `[Unconfirmed]`（`:58`、`:73`、`:91`、`:103`、`:155-159`）。
- **来源质量**：Bandai 官方链接实测 HTTP 200；3 Official + 1 Community + Editorial，达标。
- **🟡-3（`:48`）**：官方公告明确写 **Winter 2026**，文章写「Announced for 2026; no exact date」，精度不足。建议改为「Winter 2026（官方用词），未给具体日」。
- **建议**：更新旧 patch notes 页（P2）；补 Winter 2026（P2）。

### 4. The Mound — `themoundwiki/content/guides/temple-of-yig-dlc-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- **虚构检测**：WebSearch 命中 Steam 官方新闻、DLC 商店页、ACE Team 公告、PS Store，确认 **Temple of Yig 免费、需手动领取、仅 host 需要、4 人 co-op、Lost Explorers' Swords Pack 独立且 7/29 截止、crossplay 需同版本**，全部与正文一致。
- **模板残留**：无。
- **内部一致性**：4/4 人上限与 `coop-strategy-guide.md:15`、`faq-content.md:56`、`game-length-guide.md:116`、`maps-locations-guide.md:36` 完全一致。
- **诚实标注**：Epic/PS/Xbox 领取路径、任务菜单入口、区域正式名、敌人类型、奖励表均标 `[Unconfirmed]`（`:69`、`:73`、`:77`、`:106`、`:134`、`:180`、`:184`）。
- **来源质量**：3 Official + 1 Community + Editorial；官方具体文章页 + 具体 store page，达标。
- **备注**：本批「官方措辞 vs 社区推断」分离得最干净的一篇。

### 5. SpiritVale — `spiritvalewiki/content/guides/pvp-conquest-guide.md`
**结论：有条件 PASS（0 🔴 / 1 🟡）**

- **虚构检测**：WebSearch 命中 SpiritValers 与俄语媒体报道，确认 **0.34.0 Conquest：5v5、3 个占领点、PvP Lobby（queue/spar/services/Valor 装备）、Combat Master 入口、Valor 买 Gladys 装备/材料/EXP tome、PvP Channel = 每图最后频道、伤害 -82.5% / 治疗 -65%**。核心模式全部成立。
- **未验证项（🟡-4）**：`0.34.1` 的「level scaling 100→150」、`0.34.2` 的「max party 2 / Lv.100+ advanced class / 三区合并队列」，以及 10/12 平衡条目的具体数值，本机无法打开 Steam 公告，WebSearch 摘要未覆盖。文章本身已对 Valor 10/4 标 `[Unconfirmed]`（`:143`）、对死亡惩罚标 `[Unconfirmed]`（`:163`），但上述 0.34.1/0.34.2 条款写成了确定事实。
- **模板残留**：无。
- **内部一致性**：与 `pvp-arena.md`（8/9，Colosseum/Arena 体系）不冲突；新文明确区分「Conquest ≠ Colosseum」（`:32`）。旧文未提 Conquest，属正常时间差。
- **来源质量**：4 Official + 1 Community + Editorial；官方链接均为具体 view 页，形式优秀，但正文不可达。
- **建议**：人工打开三条公告截图存档；若失败，把 `:63`、`:69-75`、`:125-127` 的 0.34.1/0.34.2 细项降级为「据官方补丁说明（待复核）」（P1）。

### 6. Sephiria — `sephiriawiki/content/guides/sephiria-achievements-guide.md`
**结论：有条件 PASS（0 🔴 / 1 🟡）**

- **虚构检测**：WebSearch 命中 GamePrimer、ssephiria.wiki、allthings.how 等，确认 **27 个成就、Root's Retreat 1/15/30、Journey's End 在 1.0.23 修复、Hard Mode 可直跳 30 层并同时给 15 层成就、Soul Plan 两段对话、Demolition Expert / Shadow Blade Panther / Mutated Askard 替换 Boss**。成就体系与隐藏触发基本全部成立。
- **🟡-5（未验证版本号）**：文章以 **1.0.33** 为 current build（`:19`、`:32`、`:44`、`:146`），并称 1.0.33 是 2026-09-11 的修正补丁。检索面（GamePrimer/社区 wiki/Steam 统计页摘要）**只找到 1.0.21、1.0.23**，未找到 1.0.33。按规则不判编造，但 1.0.33 的「当前版本」定位需人工核实。
- **模板残留**：无。
- **内部一致性**：与 `hard-mode-guide` / `endgame-guide` / `boss-guide` 的层级与术语一致；27 成就数与相关旧文一致。
- **诚实标注**：优秀。逐段用 `[Official]` / `[Community]` / `[Editorial]` 行内标注；Chapter V 两派说法、Soul Plan 是否可错过、tier 30 直跳路径均明确标为争议或未复测。
- **来源质量**：Steam 官方统计 + GamePrimer + ProdigyGamers + 1.0.33 公告 + Editorial；两条社区源相互交叉且文中保留分歧，达标。
- **建议**：人工确认 1.0.33 公告；若不存在，改为「1.0.x 当前版本」并从 `:32` 的来源条目移除或替换（P1）。稀有度百分比与社区快照差 1–2 个百分点属正常漂移，文章已说明口径，不计问题。

### 7. Grain Rot — `grainrotwiki/content/guides/grainrot-expedition-mode-guide.md`
**结论：PASS（0 🔴 / 1 🟡）**

- **虚构检测**：WebSearch 命中官方 Steam 新闻与粉丝 wiki，确认 **1.1（9/24）Expedition、permadeath、dark side outpost、cold 替代 heat、frost 替代 scorch、Peter the Heater 烧 scrap + 家具、quota 不达扣 debuff、归零结束、Gumball 永久属性、每成功一轮提高 scrap 需求与难度、Deep Layers 计分、25 个 profile 绑定图案、Rainbow Ward**，全部命中。
- **🟡-6（来源 URL 可疑）**：文章 `sources` 引用两条 Steam 新闻 `view/1844751498222226` 与 `view/1844751498221869`（`:17`、`:22`），但 WebSearch 命中的官方 1.1 公告 URL 为 `view/685265994960076801`。两组 ID 不一致，存在**贴错链接**的可能；本机无法直连验证。
- **模板残留**：无。
- **内部一致性**：`beginner-guide.md:109` 等写「up to 4 players」，与本篇商店页引用的 4 人一致；1.11–1.13 补丁时间线与正文自洽。
- **诚实标注**：明确声明不发明 quota/debuff/难度倍率（`:39`、`:121`），co-op 单人死亡是否终结全队标 `[Unconfirmed]`（`:79`）。
- **来源质量**：3 Official + 1 独立俄语评测 + Editorial；形式达标，但 Official URL 待替换。
- **建议**：核对并替换两条 Steam 新闻链接；若原 ID 是旧公告，保留但补上 1.1 主公告（P1）。

### 8. Tears of Metal — `tearsofmetalwiki/content/guides/tears-of-metal-experimental-branch-guide.md`
**结论：有条件 PASS（0 🔴 / 1 🟡）**

- **虚构检测**：WebSearch **未能命中**「2026-10-21 实验分支」「Emblem Power」「F3 举报工具」的独立来源；只命中「solo mid-campaign saves 即将上线、且先做单人」的旧报道与 wiki 修订。按 Profile，零命中 ≠ 编造，记 🟡。
- **🟡-7（核心前提单源）**：全文论点建立在一条 Steam 公告（`:17`）上，本机不可达；站内 `save-system-guide.md:15` 与 `patch-notes.md:22` 已同步引用该分支，但属同批同源，**不构成独立佐证**。
- **模板残留**：无。
- **内部一致性**：优秀。`save-system-guide.md` 明确「默认分支仍无 mid-campaign save，实验分支有」，`patch-notes.md` 的主分支版本 `v0.17.60380 (9/30)` 与本篇 `:130` 一致。
- **诚实标注**：对「切回默认分支的菜单标签」标 `[Unconfirmed]`（`:66`），对「可能恢复存档」保留官方原话措辞（`:70`）。
- **来源质量**：4 Official + 1 Community + Editorial，形式优秀；核心公告不可达是唯一缺陷。
- **建议**：24h 内人工打开 `view/1847286114029005` 截图存档；若打不开，在首段加「据 Paper Cult 10/21 公告（待复核）」（P1）。

### 9. Skills & Raids — `skillsandraidswiki/content/guides/skills-and-raids-skill-rework-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- **虚构检测**：WebSearch 命中 Steam 官方公告转载，**逐字确认 8/2/2026 更新目的与 22 个 10 秒冷却技能名单**（Fury Strike、Gods Blessings、Rupture、Shield Burst、Spear Thrust、Venom Execute、Toxic Shield、Spreading Plague、Septic Assault、Harvest Decay、Freeze Frenzy、Ice Bash、Purifying Chill、Thunder Strike、Conductive Surge、Shock Guard、Blighted Scar、Decay Wound、Profaned Oath、Eraser Bite、Eye of the Abyss、Ferocious Feast），与文章 `:64` **完全一致**。
- **未完全验证**：5 个 6 秒技能、0.5/1.5 秒施法表、v1.3.1–v1.3.5 热修条目未在搜索摘要中展开，但均引自同一官方公告，且文章反复提示数值可能随后续热修漂移（`:143`、`:149`）。
- **模板残留**：无。
- **内部一致性**：优秀。`skills-guide.md:25` 已加入同一更新提示并回链本篇；「30 skills / demo 15」与 `skills-guide.md:50` 一致。
- **诚实标注**：完整 30 技能表未知、后续是否静默改动均标 `[Editorial]/未确认`（`:78`、`:147-149`）。
- **来源质量**：3 Official + 1 Community（Noisy Pixel 评测）+ Editorial，达标。

### 10. MineGeon — `minegeonwiki/content/guides/minegeon-save-rest-resume-guide.md`
**结论：有条件 PASS（0 🔴 / 1 🟡）**

- **虚构检测**：WebSearch 对「MineGeon Renegades Patch 3 / rest between biomes / room checkpoint」**零相关命中**（唯一结果是不相关 Minecraft 服务器）。按规则记「未验证」，不判 🔴。
- **🟡-8（核心前提单源且检索零命中）**：全文依赖 `view/1842212951304526`（`:17`），本机不可达；Patch 3 日期（8/28）、双系统（Rest + room checkpoint）、三种结束色、50% 自动兑换移除、食物结算改动、成就阈值下调等均无外部独立佐证。
- **模板残留**：无。
- **内部一致性**：优秀。`walkthrough-guide.md:47` 已同步写「Patch 3 后每房间 checkpoint + 每 biome boss 后可 Rest」并回链本篇，旧文「不可存档」说法已被更正（本篇 `:144` 也说明）。
- **诚实标注**：co-op 分歧、host migration、部分队伍恢复均标 `[Unconfirmed]`（`:129`）。
- **来源质量**：2 Official + 2 独立评测（Duuro、InsertCoins）+ Editorial，形式达标；核心公告不可达。
- **建议**：人工打开 Patch 3 公告并截图；若无法访问，首段加「据 Kickstone 8/28 公告（待复核）」（P1）。

---

## 四、站内一致性专项（跨文件）

| # | 新文 | 旧文 | 冲突内容 | 处置 |
|---|------|------|----------|------|
| 1 | `aincradwiki/.../genesis-maidens-dlc-guide.md`（1.0.6 为前提） | `aincradwiki/.../update-patch-notes.md:30` | 旧页仍称 Current Build = 1.0.4，全文无 1.0.6 | **改旧文（P2）** |
| 2 | `witchspirewiki/.../spell-gems-guide.md`（0.3.2） | 多篇旧文 `version: "0.1.4"`；`spellblade-vs-wand-guide.md:17` | 版本号落后两个大版本；旧文称武器灵活性未证实 | **改旧文/加横幅（P2）** |
| 3 | `mistfallhunterwiki/.../season-1-reset-guide.md` | `season-guide.md:28` | 旧文原写「camp/warehouse 持久」，**已在本批同步修正** | ✅ 已闭环 |
| 4 | `minegeonwiki/.../minegeon-save-rest-resume-guide.md` | `walkthrough-guide.md:47` | 旧文原写「不可存档」，**已同步修正并回链** | ✅ 已闭环 |
| 5 | `tearsofmetalwiki/.../tears-of-metal-experimental-branch-guide.md` | `save-system-guide.md:15`、`patch-notes.md:22` | 已同步实验分支与主分支版本 | ✅ 已闭环 |
| 6 | `skillsandraidswiki/.../skills-and-raids-skill-rework-guide.md` | `skills-guide.md:25` | 已同步 8/2 重做提示 | ✅ 已闭环 |
| 7 | `spiritvalewiki/.../pvp-conquest-guide.md` | `pvp-arena.md`（8/9） | 未提 Conquest，但不互斥 | 无需处理 |

> 其余 3 篇（Mound、Sephiria、Grain Rot）与本站既有文章的版本号、人数上限、机制名、角色名均一致，未发现新的互斥。

---

## 五、必须修复项（按优先级）

### P0 — 上线后立即修
- **无。**

### P1 — 24–48h 内收口（5 项）
1. **Grain Rot 来源链接核对**：`grainrotwiki/content/guides/grainrot-expedition-mode-guide.md:17,22`。文章引用 `view/1844751498222226` / `1844751498221869`，检索到的官方 1.1 公告为 `view/685265994960076801`。人工打开比对；贴错则替换。
2. **Sephiria 版本号核实**：`sephiriawiki/content/guides/sephiria-achievements-guide.md:19,32,44,146`。确认 1.0.33 是否存在；若无，改为「current 1.0.x」并替换来源条目。
3. **Tears of Metal 核心公告核实**：`.../tears-of-metal-experimental-branch-guide.md:17`。人工打开 10/21 实验分支公告并截图；失败则在首段加「待复核」限定。
4. **SpiritVale 0.34.1/0.34.2 细项降级**：`.../pvp-conquest-guide.md:63,69-75,125-127`。核实 level 100→150、max party 2、区域合并队列；失败则标 `[Unconfirmed]`。
5. **MineGeon Patch 3 公告核实**：`.../minegeon-save-rest-resume-guide.md:17`。人工打开并截图；失败则首段加「待复核」限定。

### P2 — 本周内（3 项）
6. **Aincrad 旧 patch notes 同步**：`aincradwiki/content/guides/update-patch-notes.md:30`，把「Current Build: 1.0.4」更新到 1.0.6，补 9/28 条目。
7. **Aincrad 发售窗口精度**：`.../genesis-maidens-dlc-guide.md:48`，把「2026」改为「Winter 2026（官方用词）」。
8. **Witchspire 旧文版本对齐**：全站旧文 `version: "0.1.4"` → 至少加「0.3.0 武器系统重做，旧机制描述可能过时」横幅，优先 `spellblade-vs-wand-guide.md`。

### 可选（🟢，不阻断）
9. Sephiria 稀有度百分比与社区快照差 1–2 点属正常漂移，文章已说明，无需改。
10. Witchspire 具名生物（Chirili/Traxio/Specra/Xilvant/Froblins）若有官方公告截图可升级为 Official 示例。

---

## 六、逐站结论汇总表

| # | 站点 | 文章 | 结论 | 🔴 | 🟡 | 主要依据 |
|---|------|------|------|----|----|----------|
| 1 | Witchspire | spell-gems-guide | PASS | 0 | 1 | 52 gems/25 sigils 证实；旧站 version 0.1.4 过时 |
| 2 | Mistfall Hunter | season-1-reset-guide | PASS | 0 | 0 | DevNote #10 六建筑/兑换/商店逐项吻合 |
| 3 | Echoes of Aincrad | genesis-maidens-dlc-guide | PASS | 0 | 2 | DLC/Mito/曲剑/护甲证实；发售窗口精度 + 旧 patch notes 过时 |
| 4 | The Mound | temple-of-yig-dlc-guide | PASS | 0 | 0 | 免费/手动领取/仅 host/4 人全部证实 |
| 5 | SpiritVale | pvp-conquest-guide | 有条件 PASS | 0 | 1 | 5v5/3 点/82.5%/频道证实；0.34.1–0.34.2 细项未验证 |
| 6 | Sephiria | sephiria-achievements-guide | 有条件 PASS | 0 | 1 | 27 成就证实；1.0.33 未检索到 |
| 7 | Grain Rot | grainrot-expedition-mode-guide | PASS | 0 | 1 | 1.1 Expedition 全要点证实；两条来源 URL 疑似贴错 |
| 8 | Tears of Metal | tears-of-metal-experimental-branch-guide | 有条件 PASS | 0 | 1 | 实验分支零外部命中，单源待复核 |
| 9 | Skills & Raids | skills-and-raids-skill-rework-guide | PASS | 0 | 0 | 8/2 更新与 22 技能名单逐字吻合 |
| 10 | MineGeon | minegeon-save-rest-resume-guide | 有条件 PASS | 0 | 1 | Patch 3 零外部命中，单源待复核 |

**合计：🔴 0 / 🟡 8**

---

## 七、审核方法与可复现说明

- **抽样比例**：10/10 全量精读，每篇至少核验 2–3 个最具体的专名/数字。
- **检索面**：WebSearch（每站 1 次，符合「最多 3 次」约束）；命中来源包括 Bandai Namco 官方、Steam 新闻摘要、GamesPress、Anime News Network、GamerFuzion、GamePrimer、ssephiria.wiki、allthings.how、grainrotguides.com、fogplay、SpiritValers、mmorpg-blog、Noisy Pixel。
- **HTTP 直连**：Bandai Namco 官方页 **200**；`store.steampowered.com` 在本机全部超时（000），故 Steam 公告正文未能逐字比对。
- **零命中判定**：Tears of Metal / MineGeon 的零命中按 Profile 记为「未验证 🟡」，**未判 🔴**；Grain Rot 的 URL 差异记为来源质量问题而非编造。
- **未执行**：未运行 build、未部署、未修改任何 `content/` 文件、未 git commit。本报告为唯一写入产物。
