# 新词缺口扫描 — 2026-10-23

> 角色：关键词研究员（岗位卡 13 / Profile 14）
> 日期：**2026-10-23**
> 范围：`sephiriawiki`、`themoundwiki`、`spiritvalewiki`
> 方法：Google Suggest 采集 + `content/guides` 全量比对
> **本报告不含任何搜索量、流量或难度估算。** Suggest 的返回顺序不是搜索量排序，只代表「该查询存在自动补全」。

---

## 一、方法与口径

### 1.1 采集

| 站点 | 种子数 | Suggest 原始条数 | 去重后 | 人工剔除同名/无关后 |
|------|-----:|-----:|-----:|-----:|
| Sephiria | 23 | 250 | **231** | 约 **175** |
| The Mound: Omen of Cthulhu | 17 | 181 | **171** | 约 **140** |
| SpiritVale | 22 | 232 | **220** | 约 **153** |

- 通道：`dig +short @8.8.8.8 suggestqueries.google.com` 取真实 IP（本次 `74.125.68.102`），再 `curl --resolve suggestqueries.google.com:443:74.125.68.102`。
- 请求间隔 4.2–4.5 秒。
- 种子以 `{game}`、`{game} how to`、`{game} best`、`{game} build`、`{game} boss`、`{game} guide`、`{game} wiki` 等为主，另加各站主题词（save / guild / map / cards 等）。
- 原始响应在 `/tmp/suggest_sites.json`（临时文件，不随仓库提交）。

### 1.2 缺口判定

一个词被判为「缺口」，必须同时满足：

1. 它是 Suggest 原样返回、且明确指向该游戏的查询；
2. `content/guides` 中没有页面**直接回答**这个查询；
3. 不是同义覆盖。例如 Sephiria 的 `secret walls` 已被 `secret-rooms-guide.md` 的「cracked walls」回答，**不算缺口**。

判定分三档：

- **零覆盖**：站内没有相关段落，或只有无关提及。
- **部分覆盖**：有相邻内容，但没有回答该查询的核心问题。
- **已回答**：不列入缺口表（即使字面不同）。

> 「未覆盖」基于本次 `rg` 全量检索 + 逐篇阅读关键段落；不能排除用词不同导致的漏判。

---

## 二、Sephiria

### 2.1 缺口表

| # | Suggest 原样长尾词 | 现有覆盖 | 判定 | 可写性 |
|---|-------------------|----------|------|--------|
| 1 | `does sephiria save mid run` / `sephiria save and quit` / `sephiria can you save a run` | `save-file-guide.md`（9.2K）覆盖存档位置、备份、损坏恢复、Steam Cloud、3 个槽位；**没有回答「一局中途能不能存档/退出」** | **零覆盖** | 高。需要实机验证「Save and Quit」是否存在、重进后回到哪；不能凭猜测写 |
| 2 | `sephiria how to get 8 dashes` | `costume-stats-and-character-unlocks-guide.md` 提到 `+1 Dash`（Adventurer Bunny）、`Infinite dashes`（White Wolf）、`dash count fixed at 1`（Wingless Bat）；**没有「8 dashes」的来源或达成路径** | **部分覆盖** | 中。先确认 8 是否来自成就/词条/特定套装；若不存在，应写成「为什么你拿不到 8 段冲刺」的纠错页 |
| 3 | `sephiria favorite artifacts` / `sephiria how to favorite artifacts` | 全站 0 处 `favorite/favourite artifact` | **零覆盖** | 高。若游戏内有收藏/锁定功能，操作步骤短、意图明确 |
| 4 | `sephiria best planet build` / `sephiria planet build` | `combo-system-guide.md` 只解释 `#Planet` 组合标签；`builds-guide.md` 没有 Planet 专章 | **部分覆盖** | 中高。需要实测 Planet 词条/武器/石板搭配，不能只从标签推 |
| 5 | `sephiria best companion build` / `sephiria companion build` | `combo-system-guide.md` 给出 Companion Combo 的 2/4/6/8/10 档数值；**没有 companion 装备/词条/build 页** | **部分覆盖** | 中。先把「companion 是什么、吃什么属性」写清，再谈 build |
| 6 | `sephiria costume tier list` | `costumes-guide.md` + `costume-stats-and-character-unlocks-guide.md` 有逐件属性/解锁，**没有分级/排名** | **部分覆盖** | 高。可基于现有属性表做「按场景分级」，但必须标注编辑判断，不能伪造社区共识 |
| 7 | `sephiria how to sell` / `sephiria how to sell items` | 仅 `chapter-guide.md`、`artifacts-guide.md` 提到「在 boss 前商店卖掉不要的词条」；**没有卖东西的操作/商店规则页** | **部分覆盖** | 高。商店位置、可卖物、回购规则容易实机核实 |
| 8 | `sephiria weapon evolutions` / `sephiria weapon upgrade paths` | `katana-build-guide.md` 详写两把刀进化；`weapons-guide.md` 有 6 系与 tier list；**没有全武器进化路径总表** | **部分覆盖** | 中高。工作量大，但一旦做成是长期资产 |

### 2.2 建议下一篇选题

**首选：扩写 `save-file-guide.md`，新增 H2「Does Sephiria save mid-run? Save and Quit explained」**

依据：

- Suggest 同时出现 `does sephiria save mid run`、`sephiria save and quit`、`sephiria can you save a run`、`sephiria save run` 四种问法，意图高度集中。
- 现有 9.2K 的存档指南只讲「文件在哪、怎么备份、坏了怎么救」，完全没有回答「一局打到一半能不能退」。这是**同一意图下的内容空洞**，扩写比新建页更合适，避免自我竞争。
- 风险最低：只需要实机确认 Save and Quit 的行为，不依赖未公开数据。

**次选：`sephiria how to sell items` 独立短页**

依据：现有两处只是顺带提「卖 off-theme artifacts」，没有操作步骤；而 `how to sell` 是明确的交易意图，适合做 600–900 字的操作页并内链到 `artifacts-guide`。

**不建议现在写：`8 dashes`。** 现有资料只能证明「有 +1 Dash 和 infinite dashes 的 costume」，不能证明存在「8 dashes」的合法路径；若写成攻略，容易变成编造。

---

## 三、The Mound: Omen of Cthulhu

### 3.1 缺口表

| # | Suggest 原样长尾词 | 现有覆盖 | 判定 | 可写性 |
|---|-------------------|----------|------|--------|
| 1 | `the mound omen of cthulhu how many maps` / `all maps` / `full map` | `maps-locations-guide.md`（14.9K）明确说「没有 island list、没有 map-select」，并解释 logbook/rowboat/Galleon；**没有直接回答「一共几张图」** | **部分覆盖** | 高。可基于现有「无 map-select」结论写「为什么没有地图数量」+ 已确认区域清单，但区域名多来自第三方，需标注 |
| 2 | `the mound omen of cthulhu map size` | 全站 0 处 `map size` | **零覆盖** | 中。若官方没公布尺寸，只能写「为什么查不到 + 实际体感」，价值有限 |
| 3 | `the mound omen of cthulhu interactive map` | 全站 0 处 `interactive map` | **零覆盖** | 低。做交互地图需要可靠坐标数据；现有区域名都未核实，**不建议**为了这个词硬做 |
| 4 | `the mound omen of cthulhu south landing map` | 仅在 `maps-locations-guide.md` 与 `enemy-bestiary.md` 的「第三方报告、未核实」区域名列表中出现，**没有独立地图页** | **部分覆盖** | 中。先把 South Landing 的可核实 POI 找到，否则只能写「目前无可靠地图」 |
| 5 | `the mound omen of cthulhu scarlet flower woods map` | 同上，仅区域名列表出现 | **部分覆盖** | 中。同上 |
| 6 | `the mound omen of cthulhu parents guide` | 全站 0 处 `parents guide` / 年龄分级内容 | **零覆盖** | 高。可引用 ESRB/Steam 分级、恐怖/血腥/在线互动描述；不需要编造机制 |
| 7 | `the mound omen of cthulhu map item` | 仅 `maps-locations-guide.md` 引用一条 patch note：「Map item no longer behaves like the Medallion item」；**没有说明 Map item 是什么、在哪拿** | **部分覆盖** | 中。需要先确认该 item 的正式名称与获取方式 |
| 8 | `the mound omen of cthulhu long shot achievement` / `just in time achievement` | `trophy-achievement-guide.md` 明确写「开发者从未公布成就列表」，站内不编造条件；两个词 0 处出现 | **零覆盖，但不可写** | **不建议写**。没有可核验条件，写了就是编造；可在 trophy guide 里加一句「这两个成就暂无官方条件」 |

> 已排除的伪缺口：`best class`（`characters-classes.md` 已间接回答角色≈皮肤、无 unique ability）、`weapon grip bonus`（`weapons-guide.md` 已提到但标为第三方未确认）、`torch`（`controls-settings-guide.md` 覆盖）、`roadmap`（`updates-patch-notes.md` 有 Developer Roadmap 段）。

### 3.2 建议下一篇选题

**首选：扩写 `maps-locations-guide.md`，新增 H2「How many maps does The Mound have? Map size and why there is no map select」**

依据：

- Suggest 同时有 `how many maps`、`all maps`、`full map`、`map size` 四个同簇查询，而现有 14.9K 地图指南只解释「没有 island list / 没有 map-select」，**没有把这个结论变成对用户问题的直接回答**。
- 这是典型的「已有正确内容，但缺一个可被抓取的答案段」；扩写比新建页更稳，也能避免与现有地图页自我竞争。
- 注意：`interactive map` 虽然也有搜索，但现有区域数据不可靠，**本轮不做**。

**次选：新建 `parents-guide.md`**

依据：`parents guide` 零覆盖，且与现有攻略不冲突；内容可完全基于分级机构/商店页的公开描述，合规风险低。适合作为站点的「非玩家意图」补充流量。

**不建议：South Landing / Scarlet Flower Woods 单页。** 这两个区域名目前只来自第三方且站内已标「未核实」；在没有可靠 POI 前单独建页，会放大事实风险。

---

## 四、SpiritVale

### 4.1 缺口表

| # | Suggest 原样长尾词 | 现有覆盖 | 判定 | 可写性 |
|---|-------------------|----------|------|--------|
| 1 | `spiritvale how to get to night garden` | 全站 0 处 `night garden` | **零覆盖** | 中高。需先用 JP wiki/官方来源核实区域名与入口 |
| 2 | `spiritvale how to get to crystal cave` | 全站 0 处 `crystal cave` | **零覆盖** | 中高。同上 |
| 3 | `spiritvale how to get to dark forest` | 全站 0 处 `dark forest` | **零覆盖** | 中高。同上；注意与已覆盖的 `dark-fortress-guide.md`（Dark Fortress / Dark Manor，Lv145+）不是同一区域 |
| 4 | `spiritvale guild tax` | `guild-guide.md` 覆盖建会、guild hall、guild bank、guild quests、Guild Wars、Treasury 升级；**0 处 `guild tax`** | **零覆盖** | 中高。若游戏内确有 guild tax/贡献扣款，数值可从界面核实 |
| 5 | `spiritvale guild emblem` | 0 处 `emblem`；`cosmetics-wardrobe-guide.md` 讲的是玩家外观，不是公会徽章 | **零覆盖** | 高。徽章解锁/上传规则通常是短操作页 |
| 6 | `spiritvale guild name color` | 0 处 `name color` / `guild color` | **零覆盖** | 中。需确认是公会等级奖励还是商城道具 |
| 7 | `spiritvale all cards` / `spiritvale card database` / `spiritvale card list` | `cards-guide.md` 明确写「227 cards」，但正文只点名约 20 张；**没有全卡表/数据库** | **部分覆盖** | 中。工作量大且需要逐张核实；可先做「227 张卡按类型/来源索引」的骨架，不编数值 |
| 8 | `spiritvale black market` | 0 处 `black market`；`trading-market-guide.md` 只覆盖 Auction House、vending stalls、5% tax、30-listing cap | **零覆盖** | 中。先确认游戏内是否真有 black market；若没有，写成「没有黑市，只有 AH/摊位」的纠错页 |
| 9 | `spiritvale how to become weaver` / `spiritvale weaver job change` | `advanced-classes-guide.md` 写「任何 J50 可转，需完成 Weaver unlock quest」，但任务链标 `[Unconfirmed]`；`classes-guide.md` 同样只有一句 | **部分覆盖** | 中。只差任务步骤，补齐后是明确高价值页 |

### 4.2 建议下一篇选题

**首选：新建 `hidden-zones-guide.md`（Night Garden / Crystal Cave / Dark Forest 三区怎么去）**

依据：

- Suggest 同时出现三个 `how to get to ...` 查询，站内三词全为 0 命中；这是**成组的、明确的路径型需求**。
- 站点已有 `dark-fortress-guide.md` 的 JP wiki 引用习惯，说明这类区域信息可通过 `spiritvalewiki.masherhouse.com` 等来源核实，不需要编造。
- 一页覆盖三个区域，内链到 `dungeon-guide`、`leveling-guide`、`farming-resource-guide`，比三篇薄页更强。

**次选：扩写 `guild-guide.md`，新增「Guild tax, emblem, and name color」小节**

依据：`guild tax`、`guild emblem`、`guild name color` 三个词全部零覆盖，而现有 11.4K 公会指南已经覆盖创建/大厅/银行/任务/战争，缺的正是「钱与外观」这一块；扩写可复用现有结构，风险低。

**暂缓：全卡数据库。** `all cards` 意图真实，但 227 张卡逐张核实成本高，且现有 `cards-guide.md` 已给出获取与升级框架；在没有可靠数据源前，不建议用估算填表。

---

## 五、优先级汇总

| 优先级 | 站点 | 选题 | 形式 | 依据 | 主要风险 |
|:--:|------|------|------|------|----------|
| P0 | Sephiria | Save mid-run / Save and Quit | 扩写 `save-file-guide.md` | 4 种同义问法；现有存档指南完全不答 | 需实机确认行为 |
| P0 | SpiritVale | Night Garden / Crystal Cave / Dark Forest 怎么去 | 新建 `hidden-zones-guide.md` | 3 个 `how to get to` 查询；站内 0 命中 | 区域名与入口需先核实 |
| P1 | The Mound | How many maps / map size / no map select | 扩写 `maps-locations-guide.md` | 4 个同簇查询；现有页面有结论但无直答 | 区域名多为第三方 |
| P1 | SpiritVale | Guild tax / emblem / name color | 扩写 `guild-guide.md` | 3 个零覆盖词；现有公会页结构完整 | 数值需游戏内核实 |
| P1 | Sephiria | How to sell items | 新建短页 | `how to sell` 明确；现有仅顺带一提 | 商店规则需实机确认 |
| P2 | The Mound | Parents Guide | 新建 `parents-guide.md` | 零覆盖；与攻略不冲突 | 分级信息需引用权威来源 |
| P2 | Sephiria | Costume tier list | 扩写 `costumes-guide.md` | 有完整属性表但无分级 | 必须标为编辑判断 |
| 不做 | The Mound | Long Shot / Just in Time 成就条件 | — | 开发者未公布列表 | **写了就是编造** |
| 不做 | The Mound | Interactive map | — | 无可靠坐标数据 | 会放大事实风险 |

---

## 六、限制

| 项 | 说明 |
|----|------|
| 搜索量 | **无**。Google Suggest 不提供 volume；本报告没有任何流量/难度数字 |
| Suggest 顺序 | 不是搜索量排序，只能证明查询存在 |
| 相关性判定 | 「约 175 / 140 / 153 条有效」是人工判断，非算法输出 |
| 覆盖判定 | 基于 `rg` 全量检索 + 关键段落阅读；同义表达可能造成漏判 |
| 事实核验 | 关键词只证明「有人搜」，不证明「游戏里真有」。Night Garden / Crystal Cave / Dark Forest / guild tax / black market 均需先核实 |
| 区域名 | The Mound 的 South Landing / Scarlet Flower Woods 在站内已被标为第三方未核实，不能直接当官方名 |
| 未做 | 未修改任何站点内容、未建站、未 git commit |

---

## 七、复现记录

- 原始响应：`/tmp/suggest_sites.json`
- 采集日期：2026-10-23
- 通道：`curl --resolve suggestqueries.google.com:443:74.125.68.102`
- 站点指南快照：
  - `sephiriawiki/content/guides/`（41 篇）
  - `themoundwiki/content/guides/`（42 篇）
  - `spiritvalewiki/content/guides/`（45 篇）
- 逐词比对命令示例：
  `rg -in "mid.?run|save and quit|favorite artifact|how to get 8 dashes" sephiriawiki/content/guides`
  `rg -in "how many maps|map size|interactive map|parents guide" themoundwiki/content/guides`
  `rg -in "night garden|crystal cave|dark forest|guild tax|guild emblem|black market" spiritvalewiki/content/guides`
