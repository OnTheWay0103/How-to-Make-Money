# Draemony — Google Suggest 关键词

> 采集日期: 2026-10-25 | 原始建议: 136 | 去重: 123 | 有效词: 0 | 噪声率: 100%
> 采集方式: Google Suggest API（28 次请求 = 10 前缀 + 10 目标种子 + 8 补充裸词探针；全部 HTTP 200，0 失败；本机 DNS 未投毒，直连 `suggestqueries.google.com` 成功）
> 游戏: Draemony（Xinoqs Studios，暗黑奇幻 ARPG，EA 2026-11-20，Steam app 5452650）
> 站内状态: **尚未建站** → 命中率对照 **N/A**（仓库内无 Draemony 站点，无任何既有攻略可对比）

## 结论先行

**Google Suggest 对 `draemony` 没有任何补全数据。** 28 次请求、136 条返回建议中，**0 条包含 "draemony"**。返回内容全部是 Google 在无匹配时回退的近音词（drama / doraemon / dramon / dreamms / dragon）。

按岗位卡异常处理条款（有效词 < 20 → 判定「游戏搜索需求低」并说明原因）：本作**当前不具备建站的关键词基础**。注意这不是"被墙"或"采集失败"——所有请求 HTTP 200，且同一时段的 ANOMALITH 采集能正常返回品牌词（见 `keyword-results/ANOMALITH.md`），说明通道健康，缺失的是真实搜索需求。

## 有效关键词（0 条）

| 分类 | 数量 |
|------|:--:|
| How-to | 0 |
| Best/Ranking | 0 |
| Guide | 0 |
| Weapons/Gear | 0 |
| Build | 0 |
| Co-op/Multiplayer | 0 |
| Tier List | 0 |
| 发售/平台/Info | 0 |
| 品牌锚定 | 0 |
| **合计** | **0** |

无任何词可列出。MUST NOT 用 Steam 页面事实反推关键词——本报告不编造搜索词。

## 采集覆盖（证据链）

每个请求均记录 HTTP 状态、返回条数、含 `draemony` 的条数：

| 批次 | 请求数 | 原始建议 | 含 draemony |
|------|:--:|:--:|:--:|
| 10 前缀 × `draemony game` | 10 | 47 | 0 |
| 10 目标种子（release date / class / classes / boss / boss fight / crafting / multiplayer / co op / tips / wiki） | 10 | 43 | 0 |
| 8 补充裸词探针（`draemony` / `draemony ` / steam / ps5 / early access / reddit / characters / skills） | 8 | 46 | 0 |
| **合计** | **28** | **136** | **0** |

单个请求的典型返回（全部为近音回退，无品牌匹配）：

- `draemony game` → `demon game drama` / `dream of dragon games` / `drametal` / `dramon game` / `game plan drama`
- `draemony release date` → `dragon romance 2024` / `dragonheir silent gods season 5 release date` / `doraemon movie 2024 singapore release date`
- `draemony class` / `draemony classes` → `drama classes singapore` / `drama classes singapore adults` / `dramon class`
- `draemony boss` → `dreamms bosses` / `dreamms boss hp` / `dreamms boss guide`（MapleStory 私服 DreamMS）
- `draemony wiki` → `what does dramon mean` / `daemon targaryen dracarys` / `dramawiki gyeongseong creature` / `wikimon dramon`
- `draemony characters` → 15 条 `doraemon characters *`（Google 直接纠正为哆啦A梦）

## 内容优先级建议

**无。** 有效关键词为 0，无法产出有搜索依据的内容优先级；按岗位卡「MUST NOT 凭空编造关键词」，本节不列主题。

若主 Agent 仍决定建站，只能依赖 Steam 官方页/公告做事实型页面（非关键词驱动），本报告不为其提供关键词依据。

**复采触发条件（建议写入候选池备注）：**

1. 2026-11-20 EA 上线后 7 天（约 11-27）用同一套 28 个请求复采；
2. 判定线：出现 ≥ 10 条含 `draemony` 的有效词（尤其是 `draemony release date` / `draemony build` / `draemony class`）才进入建站评估；
3. 若届时仍为 0，建议从候选池移除或降为「长期观察」，资源转投已有品牌词需求的项目。

## 噪声词（全部 123 条，已剔除）

四类噪声合计 123 条，占比见括号；每条仅归入一类。

### A. 近音 / 近形非游戏实体（39 条，31.7%）
`doraemon` 系 16 条：doraemon characters、doraemon characters all、doraemon characters chinese、doraemon characters chinese name、doraemon characters damulag、doraemon characters drawing、doraemon characters girl、doraemon characters images、doraemon characters in japanese、doraemon characters in real life、doraemon characters list、doraemon characters name、doraemon characters name in india、doraemon characters names with pictures、doraemon characters suneo、doraemon movie 2024 singapore release date
`drama` 系 17 条：drama class sg、drama classes for kids singapore、drama classes singapore、drama classes singapore adults、dramabeans com my demon、dramabox love redemption、dramagi buddyfight、dramalama reddit、dramanice official reddit、dramatic skills development、dramawiki gyeongseong creature、dramione compassion for the condemned、drametal、dramsky、game plan drama、demon game drama、ps5 drama
`dramon` 系 6 条：dramon class、dramon game、dramon industries pte ltd、dramon type、what does dramon mean、wikimon dramon
原因：与 `draemony` 编辑距离最近的既有高频词，Google 无品牌数据时回退到这些词；其中新加坡戏剧课、韩剧站属本地服务/娱乐内容，与游戏无关。

### B. DreamMS 私服 / `dream*` 近音（21 条，17.1%）
bowman guide dreamms、build a lot big dreams download、build dream kids、dream ms skills、dream of dragon games、dreamcore coupons、dreamcore ps、dreamer cinema、dreamer class tier list、dreamer coin shop、dreamer gms、dreamer patch gms、dreameren、dreamms boss guide、dreamms boss hp、dreamms bosses、dreamms player count、dreamms skill book、how to make dream crafted items、how to play dream castle、narin skills dream ms
原因：`drae-` 与 `drea-` 混淆；DreamMS 是 MapleStory 私服，`dreamer`/`dreamcore` 为其他社区词。`draemony class` / `boss` / `skills` 三个种子词几乎全部被这一类吞掉。

### C. 龙题材其他游戏 / IP（45 条，36.6%）
aemond dragon reddit、battle of demonland tier list 2024、beginner dragons、best beginner dragon、best dragon armor hypixel、best dragon quest all time、best vampire dragon、boss fight fantasy dragon、build drakite、cny dragon games、co op dragon game、daemon targaryen dracarys、dracollect、draconic weapons mousehunt、dragon commemorative coin、dragon craft making、dragon crafting maplelegends、dragon crafting mapleroyals、dragon craftwork、dragon dogma 2 steam players、dragon empire puzzle、dragon empire stride fodder、dragon fight and the master、dragon romance 2024、dragon tiger baccarat strategy、dragon's dogma 2 tips and tricks advanced、dragonbane almanac、dragonheir silent gods season 5 release date、dragons boss fight、dungeon and dragon builder、game ps5 dragon、games related to dragon、guide draconia saga、guide of dragon、how to draw dragamonz、rising dragon earmark、solo leveling arise dragon tips、solo leveling game draw、solo levelling game guide、solo levelling guaranteed draw、steamdb dragon spirits、weapon like a dragon infinite wealth、weapon special dragonfable、weapons maker novel、weapons unmoored world
原因：`drae...on` 触发 Google 的 dragon 补全；含《龙之信条 2》《Dragonheir》《Solo Leveling》《MapleStory》私服、Hypixel、MouseHunt 等其他作品，以及《权力的游戏》角色词。

### D. 泛查询 / 本地服务 / 无意图（18 条，14.6%）
beginner dnd singapore、beginner luck sg、beginner luck singapore、best handphone games 2024、co op games to play with girlfriends、coop coop、dreachong reddit、dreachong tiktok、dropeling、how to draw gradient line、how to draw gradient triangle、how to end gartic phone、ps5 dra、solomon game fanfic、steam scara sargon、tier list maker vanguard、tierlist danmachi、tiermaker fe2
原因：无游戏搜索意图、拼写残片（`ps5 dra`）、或与任何游戏无关的泛查询。

## 判断

- **需求侧：极弱（零）**。28 次请求覆盖了发售、职业、Boss、制作、联机、Wiki、Steam、PS5、Reddit 等全部高意图方向，仍无一条品牌词。对比同批候选：Stormforge 有 27 条有效词、Loftia 有 72 条，Draemony 为 0，差距不是采集方法问题。
- **供给侧：零组织化 wiki**（侦察已确认 EN/ZH/JA 均无），但**供给为零并不等于机会**——没有搜索需求时，零竞争也没有流量。
- **同名污染：不适用**（无同名实体）。真正的障碍是**品牌词尚未进入 Google 补全词库**：连导航型搜索（`draemony steam` / `draemony reddit`）都没有，说明当前关注度停留在 Steam 愿望单层面，未转化为搜索行为。
- **建议：wait（当前不建议建站）**。EA 2026-11-20 上线后 7 天复采；达到上文判定线再评估，否则从候选池移除。
