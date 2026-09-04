# QA 报告 — QA-EXPAND-018-GRAINROT-9/5

- 日期: 2026-09-05
- 模式: quick（仅本轮变更）
- 审核员: QA 审核员（岗位卡 docs/agents/05 + Profile docs/agents/06 + .claude/skills/quality-assurance.md）
- 范围: 1 篇新增指南
  - `grainrotwiki/content/guides/survive-enemy-chase-guide.md`（游戏: Grain Rot）
- 排除: `performance-lag-fix-guide.md`（9/4 遗留，已单独 QA ✅）；themoundwiki 本轮 SKIP（无新指南）

## 执行摘要

- 结论: 🔴 **阻断需修复**（1 个 🔴 编造来源存疑 + 1 个 🟡 + 2 个 🟢）
- 阻断项集中在正文第 91 行 **「Vanguard "Iron Bastion"」stance**：WebSearch 全无来源，且与本wiki `co-op-guide.md:42` 明确回撤「Vanguard 角色名为未验证」直接冲突。修复后可提交。

## 问题清单

| # | 严重度 | 文件:行号 | 问题类型 | 描述 | 建议修改 |
|---|--------|-----------|---------|------|---------|
| 1 | 🔴 | `grainrotwiki/content/guides/survive-enemy-chase-guide.md:91` | 编造/误导性来源标注 | 「community-documented Vanguard "Iron Bastion" stance」— WebSearch("Grain Rot Vanguard Iron Bastion") 零结果；2UpSkill 角色清单（Scout/Harvester/Carrier/Support）无 Vanguard；且本站 `co-op-guide.md:42` 明确写「Earlier versions of this guide recommended named roles tied to specific vessels (Vanguard, Scout, Striker, Hauler). Those vessel names were unverified… Here's the honest version」。指南却把它标成「community-reported / community-documented」，等于给无来源专有名词套了假的「社区来源」出处。 | 删除专有名词「Vanguard "Iron Bastion"」及"community-documented"出处断言，改写为通用表述，例如「a player with a durable vessel holds the corridor while the Keeper extracts」，与 `co-op-guide.md:36/:76`（one survivor extracts / someone built for durability holds doors）保持一致。 |
| 2 | 🟡 | 同上 :34/:104 及 frontmatter Community tier | 玩家 aggro 断言无法独立证实（但已诚实标注） | 「1.0 负面评测反复报 aggro 永不丢失/追不上/总知道你在哪」经 WebSearch 未能直接找到原文；VaporLens 只见宽泛的「Enemies overpowered and unbalanced」，Crosswatch 评测反而称怪物「easy to kite and block」（方向相反）。因全篇已多处标 `[Unconfirmed]`，不按编造处理，但归因强度仍偏高。 | 保留现有 [Unconfirmed] 标注即可提交；可选：在 sources Community 条补一句「个别评测称敌人易 kiting，与 aggro 抱怨方向相反」，让玩家画像更完整。不阻断。 |
| 3 | 🟢 | frontmatter Community tier vs 正文 Sources:120 | 前后引用不对称 | frontmatter 提到 prodigygamers 属「document the playbook」来源之一，但正文 Sources 列表只给了 2UpSkill×2/gamerblurb/finalboss.io 四个链接，未给 prodigygamers 链接（prodigygamers.com 的 Grain Rot guide 真实存在）。 | 在正文 Community 源补 prodigygamers 链接，与 frontmatter 对齐。 |
| 4 | 🟢 | frontmatter `related` vs 正文 Related Guides | 前后不对称 | frontmatter related[] 含 `tips-and-tricks`（共 8 项），正文尾部 Related Guides 列表只有 7 项，漏了 tips-and-tricks。同站参照 performance-lag-fix-guide 前后一致（5=5）。 | 在正文 Related Guides 补 [Tips & Tricks](/guides/tips-and-tricks) 行，或从 frontmatter related[] 移除该项，二选一对齐。 |

## WebSearch 断言 → 来源对应

| 指南断言 | 验证结果 | 来源 |
|---------|---------|------|
| Steam 官方：Deep Layers「filled with Corrupted vessels, reacting to sound, movement, and each other」；vessel「splinter, collapse, and catch fire」；vessel 破后 Spark escapes、需「before you fade out completely」找新宿主 | ✅ 逐字确认（app 4450620 = GRAIN ROT） | Steam store page (app/4450620)，经 WebSearch 复述一致 |
| 2UpSkill 新手指南 & New Vessel/Vessel-Spark 指南存在并支持「电梯需金币/Spark 难被侦测/环境杀敌（pits, spikes, fans, explosives）」 | ✅ 两篇 URL 均真实存在，内容要点吻合 | [2UpSkill Beginner Guide](https://2upskill.com/grain-rot-beginner-guide-top-tips-tricks-and-strategies-to-survive-the-rot/)、[2UpSkill New Vessel Guide](https://2upskill.com/grain-rot-new-vessel-guide-how-to-find-swap-and-upgrade-wooden-vessels/)、[2UpSkill Vessel & Spark 2026](https://2upskill.com/grain-rot-guide-2026-all-vessel-types-abilities-and-expert-spark-survival-strategies/) |
| gamerblurb「12 Beginner Tips」存在并支持逃生/环境策略 | ✅ 真实存在 | [gamerblurb — 12 Beginner Tips](https://gamerblurb.com/articles/grain-rot-12-beginner-tips-you-should-know) |
| finalboss.io「Deep Layers / clear Rot debuff」指南存在并支持「电梯需 gold 返程、先攒够钱再冒险」 | ✅ 真实存在，要点吻合 | [finalboss.io — Deep Layers & Rot Debuff](https://finalboss.io/grain-rot-how-to-survive-deep-layers-and-clear-the-rot-debuff) |
| prodigygamers 属社区逃生 playbook 来源 | ✅ 真实存在（但正文未附链，见问题 #3） | [prodigygamers — Grain Rot Guide](https://prodigygamers.com/2026/08/10/grain-rot-guide-pro-survival-tips-room-upgrades-and-extraction-strategies/) |
| 1.0 负面评测「Corrupted aggro 永不丢失/比玩家快/总知道位置」 | ⚠️ 未能直接定位原文；仅见宽泛「Enemies overpowered and unbalanced」；个别评测（Crosswatch）方向相反（easy to kite）。已标 [Unconfirmed]，不阻断 | [VaporLens Stats](https://vaporlens.app/app/4450620/grain_rot/stats)、[Crosswatch Review](https://www.crosswatch.info/articles/entities/grain-rot-review) |
| Vanguard「Iron Bastion」stance 为「community-documented」 | 🔴 零搜索结果；本站 co-op-guide 已回撤 Vanguard 为未验证名称 | —（见问题 #1） |

## 检查项逐项结果

- a) 残留扫描：✅ Clean。目标文件无他站游戏名/域名/模板短语（grep Witchspire/Mistfall/aincrad/The Mound/SpiritVale/Sephiria/Tears of Metal/Mystralia 等全零命中）；内部链接全部指向本站 `/guides/…`。
- b) 编造检查：⚠️ 3+ 断言已抽查。官方机制描述/电梯金币/环境杀敌/Spark 侦测 ✅ 有真实来源；aggro 抱怨 ⚠️ 未独立证实但已标 [Unconfirmed]（合规）；Vanguard「Iron Bastion」🔴 无任何来源且被错误标成「community-documented」（见问题 #1）。
- c) 内部一致性：✅/🟢。frontmatter 字段格式（title/description/category/version/updated/keywords/related/sources 三层）与同站指南一致；category 'Mechanics' 本站已有（stealth-sound-guide、game-mechanics-systems-guide）。related[] 8 个 slug 全部在 `content/guides/` 存在。正文与 title/description 相符。对同站引文复核全部命中：stealth-sound-guide:85「stealth game is over for that area」、extraction-guide:51「## The Elevator Mindset」、all-enemies-guide「reacting to sound… / dropkick enemies / recruitment event / three-question check」、co-op-guide「Keeper」。home-content.md:35 已有新行且 :36 performance-lag 行未破坏。sources 三层（Official/Community/Editorial）齐全。唯一不对称见问题 #3/#4。
- d) 诚实标注：✅ 玩家 aggro 类断言全文多处标 [Unconfirmed]/[community-documented]/[not yet officially documented]。⚠️ 例外是 Vanguard「Iron Bastion」虽带「community-reported」标签，但该出处本身无来源支撑、且与同站 co-op-guide 冲突 → 判 🔴。
- e) 体量：✅。正文（去 frontmatter、不含 Sources/Related 尾部）1389 词；含尾部引用清单共 1589 词。主正文在 800–1500 区间内。
- f) 注册核对：✅。`grainrotwiki/lib/guides.ts` `getAllGuides()` 按 `content/guides/*.md` 自动读取目录内所有 .md（无白名单），`slug = filename`，故本文件会自动注册为 `/guides/survive-enemy-chase-guide`，无需额外登记。
- g) 参照对比：✅。与同站近期指南 `performance-lag-fix-guide.md`（9/4）对比：frontmatter 结构、sources 三层标注格式、正文「> Values caveat / Honesty note」提示块、Related Guides 尾链、[Unconfirmed] 标注习惯均一致。

## 基建检查

- 本轮为 quick 内容 QA、仅限部署前把关；按指令 MUST NOT 部署/commit，未跑 build/deploy/GA4/GSC 探测。标注：待 Builder 修复 #1 后由主 Agent 走部署验证。

## Coordinator 摘要

```
QA 结果: 🔴 BLOCK (1) | 🟡 WARN (1) | 🟢 SUGGEST (2) | ✅ 其余通过
阻断项: [grainrotwiki] survive-enemy-chase-guide.md:91 「Vanguard "Iron Bastion" stance」标注为
  community-documented 但无任何社区来源，且与 co-op-guide.md:42（Vanguard 为未验证名称、已回撤）冲突。
  建议: 删除该专有名词/出处断言，改为通用「durable vessel holds the corridor while Keeper extracts」。
修复后其余 🟡/#2（aggro 标注充分）与 🟢/#3 #4（引用清单对齐）可随部署一并处理或记录 issue。
```
