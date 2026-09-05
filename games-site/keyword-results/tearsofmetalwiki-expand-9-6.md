# Tears of Metal 每日扩充记录 — 9/6

> 任务: 每日内容扩充（tearsofmetalwiki）| 站点: tearsofmetalwiki（Tears of Metal, Paper Cult, Steam EA）| 日期: 2026-09-06
> 岗位: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 材料版本: HEAD 工作树 v1
> 产出: 1 篇新指南 `co-op-revive-guide.md` + home-content 加行 + 本记录
> 说明: 9/4 遗留 `armor-break-guide` 与 9/5 `low-fps-fix-guide` 视为已覆盖主题，未改动。未写任何 EXPAND 编号。

---

## 1. 现有 slug 清单（31 = 30 既有 + 本日新增前）与查重结论

achievements / armor-break（9/4 遗留，已覆盖）/ base-camp / battalion-companion / beginner / best-builds / boss /
brienne-build / character-unlock / co-op / combat-tips / corruption / crash-launch-fix / elite-enemy /
emblem-artifact / equipment / healing / heroes-tier-list / low-fps-fix（9/5，已覆盖）/ multiplayer-connection-fix /
patch-notes / progression-walkthrough / ruadh-build / save-system / solo / steam-deck / survival-tips /
threat-level-difficulty / village-upgrade / wallace-build / weapon-merge

**缺口定位**: 站内唯一描述 co-op 复活机制的是 healing-guide §6「Co-op Revive Costs — Budget for Resurrections」（250/350 金币、按复活次数涨价），但 **v0.12.58540（8/13）已把复活从金币改为生命值制** → healing-guide 该节已过时（9/5 QA 已记录此校准建议）。全站**无任何一篇解释现行生命值复活规则** → 真缺口 + 事实性矛盾（新页须诚实标注，既有指南正文不改）。

---

## 2. 反馈来源列表（采集 2026-09-06，官方补丁 + 更新史 + 独立媒体 + 玩家反馈）

| # | 来源 | 类型 | 一句话内容 |
|---|------|------|-----------|
| 1 | Paper Cult Steam 公告 v0.12.58540（8/13）— steamcommunity.com/app/1913120/allnews | Official | 复活由金币改为生命值制；开发者解释旧金币制与 Charm 经济「相互对抗」：玩家囤币等复活、晚局复活可能贵到付不起。同补丁含网络大改 + 首个有名同伴。 |
| 2 | [thegameswiki Update History](https://thegameswiki.com/tears-of-metal/wiki/update-history) | Community/Editorial | 逐条记录 v0.12.58540：复活者付出 **当前生命 50%**、被救者按「实际牺牲的最大生命占比」回血、复活者需 **>10% 最大生命**、**每次复活使窗口 -5 秒**；治疗喷泉价格仍涨但改为仅跨 Act 上涨。 |
| 3 | [ingamenews《Tears of Metal Hits 100,000 Sales…》](https://ingamenews.com/pc-gaming/tears-of-metal-hits-100-000-sales-as-developer-outlines-next-patches/) | Editorial | 报道 10 万销量 + 开发者优先级（中途存档开发中、多人 desync）；引用开发者对复活改动的说明。 |
| 4 | [gamereactor.se](https://www.gamereactor.se/svenska-tears-of-metal-har-salt-over-100-000-exemplar-1866673/) + [primagames](https://primagames.com/news/tears-of-metal-sells-100k-copies-mid-campaign-saves-planned) + [163.com 中文](https://www.163.com/dy/article/L2VRVK9O05561FY8.html) | Editorial | 独立转载 10 万销量 + 开发者下一步（中途存档），多源佐证复活经济问题为开发者承认并修复的玩家痛点。 |
| 5 | 站内 healing-guide §6（金币复活 250/350） | 内部基准 | 现行指南仍写旧制 → 事实性缺口，本页须写明「旧数值不再适用」并建议校准。 |

**说明**: v0.12.58540 数值经 2 次独立 WebSearch 查询交叉验证一致；Steam 讨论区/评测正文 age-gate 无法直抓，未虚构任何玩家引语，玩家痛点（囤币、晚局复活太贵）以开发者公告原文表述归属。

---

## 3. 候选排除记录

- **中途存档（mid-campaign saves）** — 开发者「开发中、无时间窗」，功能未上线；save-system-guide 已覆盖现有存档与恢复；写无可操作步骤，硬写即成新闻转写，排除。
- **多人 desync（开发者头号优先级）** — multiplayer-connection-fix-guide 已覆盖；无新意图，排除。
- **首个有名同伴 / 网络大改（v0.12 同批）** — battalion-companion-guide / multiplayer-connection-fix 已覆盖同类，排除。
- **Crossplay 临时关闭 / Beta 分支** — multiplayer-connection-fix-guide 已述跨平台，排除。
- **Steam Deck 键鼠/触控** — steam-deck-guide 已覆盖，排除。

---

## 4. 选题: Tears of Metal co-op 复活现行规则（co-op-revive-guide）

标题: *Tears of Metal Co-op Revive Guide — Health-Cost Rules & the v0.12 Change*

**玩家语言 → 搜索语言**: "复活怎么变贵了/还能不能金币救" → "tears of metal co-op revive" / "tears of metal revive health cost" / "tears of metal can't revive" / "tears of metal revive changed 0.12"

**四条件核对**

| 条件 | 判定 | 依据 |
|------|:--:|------|
| 高频（≥3 独立来源指向同一问题） | ✅ | 官方 v0.12 公告 + thegameswiki 更新史 + ingamenews/gamereactor/primagames/163 独立报道 + 9/5 QA 已记录「heal/save 页可能早于 8/13 复活机制改动」→ 复活规则变更属玩家高频困惑且被开发者公开承认 |
| 具体（可写单篇 How-to） | ✅ | 现行规则表（50%/10%/按比例回血/-5s 窗口）+ 旧制到新制的迁移 + 实战策略 + FAQ，结构清晰 |
| 未被覆盖（对照 slug） | ✅ | healing-guide §6 写的是**已被取代的旧金币制**（信息错误而非覆盖）；无任何页解释 v0.12+ 现行机制 → 真缺口，且新页可诚实标注 healing-guide 待校准 |
| 不编造（数据项可溯源） | ✅ | 全部数值标 Official/thegameswiki/媒体来源；「默认窗口长度」官方未公布 → 标 [Unconfirmed]；未虚构玩家引语 |

**与 healing-guide 不重叠说明**: 新页专注「现行复活机制 + v0.12 变更 + 救人不当的代价」，healing-guide 专注三大治疗来源与金币预算；两页在复活一节存在**旧信息矛盾**（healing-guide 金币制 vs 本页生命制），本页已内嵌提示条引导读者，并作为校准建议移交主 Agent。既有指南正文一律未改。

---

## 5. 完成清单

- [x] tearsofmetalwiki/content/guides/co-op-revive-guide.md（正文去 frontmatter ≈ 1139 词，800–1500 ✓；frontmatter 与同站 schema 一致；related[] 与 /guides/ 内链全部真实存在，0 BROKEN）
- [x] tearsofmetalwiki/content/home-content.md（Quick Navigation 在 Healing Guide 行后插入 1 行，3 列完整）
- [x] keyword-results/tearsofmetalwiki-expand-9-6.md（本文件）

**遗留建议（供主 Agent）**: healing-guide §6（金币复活 250/350 + max-HP 削减表述）与 v0.12+ 现行生命值复活制冲突 → 建议单独立校准任务修正（本轮 MUST NOT 改既有正文，未动）。修正时注意全站 grep「revive/复活」关联引用一次改齐。
