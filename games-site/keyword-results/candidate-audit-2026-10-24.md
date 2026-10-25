# 候选证据链复核 — 2026-10-24（KW-AUDIT-1024）

> 执行：关键词研究员（docs/agents/13 + 14）
> 范围：DREADMOOR / Emberville / Loftia / Stormforge / Draemony / Chained Beasts
> 方法：Steam 商店页（经搜索结果与官方公告间接核对，本机 store.steampowered.com 全域超时）+ 官方公告 + 权威媒体 + Google Suggest 复采
> 边界：本报告只做核对，**未修改候选池、站点或任何攻略，未 commit/deploy**

---

## 0. 先纠正任务简报里的一个前提

派单说「DREADMOOR / Emberville 是否有独立关键词报告文件？没有就补」。

**两份报告都已存在，且均有原始数字支撑：**

- `keyword-results/DREADMOOR.md`（采集 2026-10-23，46 种子，161 有效词）
- `keyword-results/Emberville.md`（采集 2026-10-23，46 种子，233 有效词）

因此本轮**不是补采**，而是复核数字能否复现、事实是否成立。候选池的 161 / 233 不是无源数字，但下文会说明这两个数字**不能直接当作「可写 15 篇攻略」的依据**。

---

## 一、候选证据总表

| 候选 | 原评分 | 发售日（本次核对） | 价格 | 关键词有效数（报告） | 报告文件 | 本次复采 | 证据强度 | 建议 |
|------|:--:|------|------|------:|:--:|------|------|------|
| **DREADMOOR** | 17 | **11/9 EA** ✅ | $19.99 ✅ | 161 | ✅ 有 | 15/46 种子成功；15 种子得 59 条有效 | **事实充分；关键词量级可信但被变体放大** | **维持 17，内容量下修到 8–10 篇** |
| **Emberville** | 18 | **10/27 EA** ✅ | **未公布** ⚠️ | 233 | ✅ 有 | 10 前缀 → 19 条含品牌词 | **证据矛盾**（供给侧结论不成立） | **下调至 15** |
| **Loftia** | 16 | **11/3 EA** ✅ | $29.99（首发 -17%） | 72 | ✅ 有 | 14 前缀 → 74 条含品牌，去歧义后 72 ✅ | **证据矛盾**（wiki 供给已成形） | **下调至 14** |
| **Stormforge** | 17 | **11/10 EA** ✅ | 未公布 [待确认] | 27 | ✅ 有 | 16 前缀 → 27 / 91 = 70.3% ✅ 精确复现 | **证据不足** | **下调至 15，维持「EA 后观察」** |
| **Draemony** | 16 | **11/20 EA** ✅ | 未公布 [待确认] | 无报告 | ❌ 无 | **14 种子 68 条建议，0 条含品牌词** | **证据不足（关键维度缺失）** | **下调至 13** |
| **Chained Beasts** | 16 | **10/15 已上线** ✅ | $12.99（Steam）/ $19.99 主机 | 29 | ✅ 有 | 14 前缀 → 20 条含品牌（+其他前缀约 27–29） | **证据部分成立** | **维持 16，观望** |

评分口径按 `docs/agents/12-Profile-游戏侦察员.md`：≥17 近期建站 / 15–16 推荐观望 / 12–14 观望等数据。

---

## 二、采集通道与复采方法（可复现）

```bash
dig +short @8.8.8.8 suggestqueries.google.com
# 本次：74.125.24.138 / .139 / .113 / .101 / .100 / .102

curl --resolve suggestqueries.google.com:443:74.125.24.138 \
  --get --data-urlencode 'q=stormforge' --data 'client=chrome' \
  'https://suggestqueries.google.com/complete/search'
```

- 每个请求间隔 **4.2–4.5 秒**，`client=chrome`，只读 `[1]` 建议数组。
- 复采日期：2026-10-24 10:2x–11:0x CST。
- **通道不稳定，必须如实记录**：对 `74.125.24.138` 连续请求约 21 次后开始出现 `curl: (28) Connection timed out`，46 个 DREADMOOR 种子里 **31 个失败**；换 `74.125.24.102` 后恢复。
- 失败一律记为「未验证」，**没有**按「0 条建议」处理（依据 12-Profile「HTTP=000 / size=0 一律视为未验证」）。

---

## 三、逐候选核对明细

### 3.1 DREADMOOR — 17 分，11/9 EA，报告 161 词

**事实核对（全部成立）**

| 项 | 核对结果 | 来源 |
|----|----------|------|
| 发售日 | 2026-11-09 Steam Early Access（周一） | [GameWatcher](https://www.gamewatcher.com/dreadmoor-release-date-reveal)、[Yahoo/GameDaily](https://tech.yahoo.com/gaming/articles/dreadmoor-casts-off-steam-early-181559143.html) |
| 价格 | $19.99；1.0 时涨价 | 同上 |
| 开发/发行 | Dream Dock（开发）/ Digital Vortex Entertainment（发行） | 同上、[gamebiz](https://gamebiz.jp/news/434135) |
| 平台 | **PC / Steam 为主**；主机仅「计划」，未见正式公告 | [Datahumble](https://datahumble.com/dreadmoor-3629430)、Steam 页 |
| 语言 | 12 种，含 **日语、简中、繁中** | [Game*Spark](https://www.gamespark.jp/article/2026/10/16/173673.html) |
| 模式 | **单人**（官方置顶 FAQ 明示） | [Steam 社区 FAQ](https://steamcommunity.com/app/3629430/discussions/0/632318982806920280/) |
| Demo | 10/6 已上线，免费，支持日语 | [GamesPress](https://www.gamespress.com/ko-KR/Demo-for-Fishing-Adventure-DREADMOOR-Sets-Sail-on-Oct-6) |
| wishlist | 「Steam 未发售愿望单前 100」——**二手表述，非官方数字** | Yahoo/GameDaily（同上） |
| 评测数 | 未发售，无 | — |
| Wiki（EN/ZH/JA） | **无专属 fandom / wiki.gg / 灰机 / bilibili / wikiwiki / atwiki** | 搜索复核；仅 [gamewikistation](https://gamewikistation.com/news/dreadmoor-fishing-trawler-demo/) 发文「要不要建 wiki」 |
| 实际竞争 | ⚠️ **whisperofthehouse 已有 DREADMOOR demo 攻略 hub**：Demo Guide / Walkthrough / Fishing Guide 三页，覆盖鱼饵、线张力、船体升级、The Throat 开门 | [whisperofthehouse.com/dreadmoor](https://www.whisperofthehouse.com/dreadmoor)、[/fishing-guide](https://www.whisperofthehouse.com/dreadmoor/fishing-guide)、[/walkthrough](https://www.whisperofthehouse.com/dreadmoor/walkthrough) |

**关键词复算**

- 46 种子复采只成功 15 个（10 通用前缀 + a/b/c/d/f 字母扩展），得 127 条原始、115 条去重、74 条含 `dreadmoor`；剔除纹身店/人名/地名后约 **59 条有效**。
- 按 15 种子 59 条外推 46 种子，报告「183 含品牌 / 161 有效」**在量级上可信**；但因为后 31 个种子全部是请求失败，**今天无法精确复现 161**。
- 报告把 `dreadmoor e/l/q` 记为「0 条」——本次同样在 `dreadmoor e` 开始失败，且之后 30 个种子连续超时。**这更像传输/限流失败，不是「Google 返回 0 条」**。原报告同时记录了「UTF-8 解码错误」，进一步说明是通道问题。按 Profile 规则，这三条应标「未验证」而非「0 条」。
- **三处归类错误（可复核）**：
  1. `tearscape dreadmoor map`、`tearscape dreadmoor palace` 属于另一款游戏 **Tearscape**——「Dreadmoor Palace」是 Tearscape 的首个地牢（[Steam Demo 页](https://store.steampowered.com/app/3271010/Tearscape_Demo/)）。这两条不该计入 DREADMOOR 的 161。
  2. `dreadmoor experiment` 是 Barrie Stevenson 的小说 *The Dreadmoor Experiment*（[书目](https://manybooks.net/ebook/the-dreadmoor-experiment)），报告写「暂按游戏内内容保留」——它不是游戏内容。
  3. `dreadmoor dream dock` 被归入「剧情/地点/世界观」，但 **Dream Dock 是开发商名**，不是游戏内地点。
- **计数膨胀**：主题 1「发售/平台/价格」72 条里，`dreadmoor console` / `console release` / `console release date` / `coming to console` / `coming to xbox` / `will be on ps5` / `will be on xbox` / `will be on console` / `cuando sale` / `fecha de lanzamiento` 等是同一个问题的语言/词形变体。**72 条 ≈ 6–8 个独立问题。**
- **联机 13 条是伪需求**：官方 FAQ 明确单人。13 条只能合成一句「DREADMOOR 是单人游戏，不支持联机/跨平台」，不构成 P0 攻略。
- **`dreadmoor ps5` / `xbox` 同理**：EA 只有 PC，主机未定。答案是「没有」，不是功能页。

**判定**：事实维度**充分**；关键词维度**部分成立**——161 是「字符串数」，独立意图约 45，可独立成页约 **8–10 篇**，其中真正需要游戏内数据的机制页只有 **4 篇**（钓鱼、存档、鱼竿/编织线、地点/收集）。**不支持「15 篇」**。

**建议**：维持 17（需求真实：前 100 愿望单 + demo + 零 wiki + 16 天窗口），但排产按 **8–10 篇**；并把 whisperofthehouse 已占 demo 机制位写入建站风险。

---

### 3.2 Emberville — 18 分，10/27 EA，报告 233 词

**事实核对**

| 项 | 核对结果 | 来源 |
|----|----------|------|
| 发售日 | 2026-10-27 EA（15:00 UTC；部分地区页显示 10/26） | [GamesPress 官方稿](https://www.gamespress.com/en-GB/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo)、[Game8](https://game8.co/articles/release-dates/emberville-release-date-and-time) |
| 价格 | **未公布**（Steam 无价格字段；官方称一次性买断、无内购、EA 后不涨价） | [thegameswiki Early Access 页](https://thegameswiki.com/emberville/wiki/early-access)、[Shacknews](https://www.shacknews.com/article/150061/what-is-the-release-date-of-emberville) |
| 平台 | PC（Steam + GOG）；主机版 1.0 才有 | [Game*Spark](https://www.gamespark.jp/article/2026/10/20/173829.html) |
| 语言 | 支持日语（含 demo） | 同上 |
| wishlist | **600,000+（2026 年 9 月）**；关注 42.3K | Game*Spark（同上）、[steamdata.ai](https://steamdata.ai/zh-CN/game/2295170/emberville) |
| 评测数 | 未发售，0 | — |
| 联机 | ⚠️ **EA 首发不含 co-op**，合作多人计划在 1.0 | Game*Spark（同上，原文「協力マルチプレイの実装」） |
| Wiki | **两套英文 wiki 均已成形**：`emberville-wiki.wiki` 覆盖 Guides / Classes / Weapons / Builds / Combat / Crafting / Estate / Villagers / World / Updates / **Voice Cast**；`thegameswiki.com/emberville/wiki/` 有 Voice Cast、Early Access、Life Skills 等页 | [emberville-wiki.wiki](https://emberville-wiki.wiki/en/)、[thegameswiki Voice Cast](https://thegameswiki.com/emberville/wiki/voice-cast) |
| 配音阵容 | 属实：Matt Mercer / Jennifer English / Doug Cockle 均在 22 人 cast 内 | [Polygon](https://www.polygon.com/emberville-voice-cast-full/)、[ScreenRant](https://screenrant.com/emberville-stardew-valley-rival-bg3-jennifer-english/) |

**关键词复算**

- 10 前缀复采：54 条原始 / 54 条去重 / 19 条含 `emberville`。字母扩展抽样（a/b/c）每个返回 14–15 条含品牌词，说明 46 种子的 251 条含品牌数字**量级可信**。
- 报告 233 条的结构问题与 DREADMOOR 同构：**111 条（47.6%）是发售/平台/价格变体**（`console` / `console release` / `console release date` / `coming to console` / `will be on ps5` / `will be on switch` / `will be co op`…），实际是 8–10 个问题。
- 报告第四条说「英文 wiki 已存在，不能写零 wiki」——这点是对的；但 P1 建议「主攻其未覆盖的联机/配音/职业长尾」**已被证伪**：
  - 配音：thegameswiki 有独立 **Voice Cast** 页，emberville-wiki 有 voice cast 条目；
  - 职业：emberville-wiki 有 Classes / Class Swap / Hybrid Builds / Weapons / Builds 全套；
  - 只剩联机未被覆盖，而**联机在 EA 不存在**。
- 报告把「联机 19 条」列为 P0 第二篇。实际答案是一句「EA 不支持合作，1.0 加入」，无法撑起一篇有深度的攻略。
- 价格未公布意味着「发售 FAQ」最关键的字段在发售前 3 天仍无法落笔。

**判定**：**证据矛盾**。需求侧很强（600K wishlist），但「可切的差异化长尾」这一评分依据不成立；供给侧的成熟度被低估。

**建议**：**下调至 15**（推荐/观望）。若建，最多 8 篇，且必须承认联机/配音/职业三个方向都已有覆盖；更稳妥是等 EA 后看评测与价格再定。

---

### 3.3 Loftia — 16 分，11/3 EA，报告 72 词

**事实核对**

| 项 | 核对结果 | 来源 |
|----|----------|------|
| 发售日 | 2026-11-03 EA | [Steam 公告](https://store.steampowered.com/news/app/2320980/view/692020757910258531)、[IGN India](https://in.ign.com/loftia/272238/loftia-qloud-games-announces-release-date-for-their-upcoming-cozy-life-sim-solarpunk-mmo-game) |
| 价格 | **$29.99**，首发 -17% → **$24.89** | [TechPowerUp](https://www.techpowerup.com/352918/mmo-solarpunk-cozy-game-loftia-gets-launch-date)、[Gamereactor](https://www.gamereactor.eu/loftia-early-access-launch/) |
| 平台 | PC + Mac，Steam + Epic；Switch 2 后续 | 同上 |
| 语言 | 14 种 | 同上 |
| 测试数据 | 春季封闭 beta 约 **24,600–25,000 人** | [MassivelyOP](https://massivelyop.com/2026/05/07/solarpunk-mmorpg-loftia-concludes-closed-beta-with-a-promise-to-bolster-early-access-with-player-feedback/)、[INARA](https://inara.cz/morps/article/56992/) |
| wishlist | 无公开数字 | — [待确认] |
| 评测数 | 未发售，0 | — |
| Wiki / 攻略供给 | ⚠️ **不是 stub**：`thegameswiki.com/loftia/wiki/` 有 Farming、Exploration and Urbex、Crafting 等多页；`loftia.gaming.tools` 有完整熟练度数据库；`cozygameguides.com` 有 Beginner / Money Guide；另有坐标攻略多篇 | [Farming 页](https://thegameswiki.com/loftia/wiki/farming)、[Exploration 页](https://thegameswiki.com/loftia/wiki/exploration-and-urbex)、[Crafting 页](https://thegameswiki.com/loftia/wiki/crafting)、[gaming.tools](https://loftia.gaming.tools/proficiencies/research)、[cozygameguides](https://cozygameguides.com/loftia/beginner-guide/) |

> 说明：thegameswiki 直连返回 429，未能读取正文；上述页面由搜索结果索引确认存在，页名与摘要可复核。

**关键词复算**

- 14 前缀复采：120 条原始 / 117 条去重 / 74 条含 `loftia`；剔掉 `loftia switch oled/lite/amazon` 这类歧义后 **72 条**，与报告**完全吻合**。噪声词清单也与报告一致（loft/lofi/lofta/loftie/新加坡 loft）。
- 但结构是硬伤：**28 条发售/平台 + 7 条价格 + 13 条 beta/key + 10 条平台操作 = 58 条（81%）全是上线物流问题**。真正的玩法/系统词只有 6 条（`is loftia an mmo`、`can you get married`、`is loftia using ai`…）。
- 报告称「`loftia guide` / `loftia wiki` 需求存在但供给未成形」——**供给侧已成形**，且 beta 期攻略已覆盖 farming/crafting/exploration。
- `loftia switch` 系列 28 条里，Switch 2 是「后续计划」，EA 只有 PC/Mac；这批词的答案同样是「没有」。

**判定**：**证据矛盾**。需求真实（beta 2.4 万人），但 72 词几乎不能支撑一个 wiki 站；供给侧 stub 的判断已被推翻。

**建议**：**下调至 14**（观望）。若建，形态应是 5–6 篇 FAQ/发售追踪页，不是 10–12 篇攻略站；与现有打法不匹配。

---

### 3.4 Stormforge — 17 分，11/10 EA，报告 27 词

**事实核对**

| 项 | 核对结果 | 来源 |
|----|----------|------|
| 发售日 | 2026-11-10 EA | [TGG 官方稿](https://thegg.net/press-releases/the-survival-crafting-fantasy-adventure-stormforge-is-coming-to-steam-ea-on-november-10th/)、[GameRant](https://gamerant.com/steam-games-open-world-survival-crafting-stormforge-release/) |
| 价格 | 未公布；官方称「一次性买断，1.0 小幅涨价」 | [low.ms 汇总](https://low.ms/blog/stormforge-early-access-release-date) |
| 平台 | PC / Steam；主机未见公告 [待确认] | Steam 页 |
| wishlist | **100,000+** | [GameRant](https://gamerant.com/new-open-world-games-steam-like-valheim-stormforge/)、[Kotaku ES](https://es.kotaku.com/un-nuevo-survival-cooperativo-supera-las-100-000-listas-de-deseados-en-steam-y-recuerda-a-valheim-2000053333) |
| Demo | 免费，**35,000+ 下载**；demo Steam 评测约 112–116 条 Mostly Positive | [GamesPress 官方稿](https://www.gamespress.com/zh-CN/Survival-Crafting-Fantasy-Adventure-Stormforge-Begins-Its-Early-Access)、[ScreenRant](https://screenrant.com/zelda-meets-studio-ghibli-valheim-stormforge-free-demo/) |
| 评测数（本体） | 未发售，0 | — |
| Wiki | 无 fandom/wiki.gg；仅 [Giant Bomb 条目](https://giantbomb.com/wiki/Games/Stormforge) | 搜索复核 |
| **Steam app id** | ⚠️ **本体 2826790；5056340 是 Demo** | [本体页](https://store.steampowered.com/app/2826790/Stormforge/)、[Demo 页](https://store.steampowered.com/app/5056340/Stormforge_Demo/) |

**关键词复算**

- 16 前缀复采：**94 原始 / 91 去重 / 58 条含 `stormforge`**；剔除 WoW 私服（约 31 条）与 `stormforged` 系（Neverwinter/Hacksaw，约 11 条）后 **27 条指向本作**，噪声 **64/91 = 70.3%**——与报告**精确一致**。
- 报告的 `27` 可复现；但其分节小计数对不上（10+6+4+5+2=27，而实际列出的独立词条约 31，因多处用 `/` 并列）。属排版/计数口径问题，不影响结论。
- 结论「无深度系统词、品牌导航需求未起」**成立**：复采中没有任何 boss/build/crafting/base building 的具体问法。
- 唯一的硬错误：`discovery-2026-10-24.md` 把 **5056340（Demo）当作本体商店页**，来源链接也写错。候选池 #56 未写 app id，未受影响，但后续建站若照抄会取错页面。

**判定**：**证据不足**。需求侧只有 27 条且 70% SERP 被 WoW 私服占据；供给侧零 wiki 成立，但不足以支撑预售期建站。

**建议**：**下调至 15**，维持候选池已写的「EA 后 3–7 天观察」。若 EA 后评测 ≥300 且出现 `stormforge game` 锚定词，再按 8 篇小站建。

---

### 3.5 Draemony — 16 分，11/20 EA，无关键词报告

**事实核对**

| 项 | 核对结果 | 来源 |
|----|----------|------|
| 发售日 | 2026-11-20 EA（10/23 公告） | [Steam 公告](https://steamcommunity.com/games/5452650/announcements/detail/710038327520138077) |
| 价格 | 未公布；官方称 EA 后不涨基础价 | 同上 |
| 平台 | PC / Steam（app 5452650） | [Steam 页](https://store.steampowered.com/app/5452650/Draemony/) |
| 内容 | 8 职业、1000+ 节点天赋树、4 幕、T1–T16 终局、6 人 co-op、独立掉落 | [TUXDB](https://www.tuxdb.com/game/27762) |
| wishlist | **无公开数字** | — [待确认] |
| 评测数 | 未发售，0 | — |
| Wiki | 无 EN/ZH/JA 专属 wiki；仅聚合站 TUXDB 条目 | 搜索复核 |
| 攻略供给 | 无（无 guide 站、无 wiki） | 搜索复核 |

**关键词复算（本次补做，报告缺失）**

- 14 前缀（含 classes/wiki/release date/multiplayer）→ **68 条原始建议，0 条含 `draemony`**。
- 裸词 `draemony` 返回：`daemon targaryen dracarys` / `dramon industries pte ltd` / `dramsky` / `dreamer cinema` / `dramabeans com my demon`——Google **完全不认识这个品牌**。
- 这不是「噪声率高」，是**品牌在 Suggest 里没有存在感**。EA 前 27 天，这是本批六个候选里最负面的需求信号。

**判定**：**证据不足**。16 分只有供给侧依据（系统深度、零 wiki），需求侧与口碑侧均无数据；零 Suggest 是新增的反向证据。

**建议**：**下调至 13**（观望，EA 后看评测）。若 EA 后 3–7 天评测 <300 或仍无品牌 Suggest，建议放弃。

---

### 3.6 Chained Beasts — 16 分，10/15 已上线，报告 29 词

**事实核对**

| 项 | 核对结果 | 来源 |
|----|----------|------|
| 发售日 | 2026-10-15（已上线 9 天） | [Gocdkeys](https://gocdkeys.com/blog/chained-beasts-out-now-game-pass-or-buy)、[TheXboxHub](https://www.thexboxhub.com/chained-beasts-turns-co-op-combat-into-a-gladiatorial-game-pass-circus/) |
| 价格 | Steam **$12.99**（-35%，原价 $19.99）；主机 $19.99 | Gocdkeys、[TrueAchievements](https://www.trueachievements.com/game/Chained-Beasts/price) |
| 平台 | PC / PS5 / Xbox Series X\|S / Switch；**Game Pass 首发**（主机 + PC） | 同上 |
| 联机 | 在线 crossplay + 本地同屏（2–4 人），单人可玩 | [Urgametips](https://urgametips.com/news/chained-beasts-launch-cross-play-afflictions-roadmap/)、[iCrewPlay](https://www.icrewplay.com/chained-beasts-game-pass-coop-crossplay/) |
| 评测 | 上线时 ~106 条 / 96% Very Positive；追踪站显示 ~315 条 / **83.5%**（聚合站数据，需 Steam 页复核） | [Datahumble](https://datahumble.com/chained-beasts-3569420)、Gocdkeys |
| Demo | ⚠️ **预发布 demo 已于 10/15 随发售下线** | [PixelTwelve](https://pixeltwelve.com/articles/chained-beasts-demo-offline-october-15-game-pass) |
| Wiki | 无专属 wiki；但有 [TposeGaming 全攻略](https://tposegaming.com/chained-beasts-guide/)（战斗/链子/词条/手术/契约）与中文角色表（[9k9k](https://www.9k9k.com/shouyou/lsjd2/)） | 搜索复核 |

**关键词复算**

- 14 前缀复采：66 原始 / 56 去重 / **20 条含 `chained beasts`**。报告 64 原始 / 29 有效——原始数接近，29 里多出的约 9 条应来自 `is` / `when` / `can` 类前缀（报告用了 14 个前缀，本次未覆盖），**量级可复现**。
- 报告把 `chained beast`（裸词）和 `chained beast meaning`（词典意图）计入「有效/低置信」。按 Profile 去噪规则，这两条更接近噪声，**实际有效约 27 条**。
- 同名分流确认：`chained together` / `chained echoes` / `chained soldier` / `gang beasts` 合计约占噪声 35 条的大半。
- **事实缺口**：报告 P1 建议做「demo 页面承接试玩值不值得买」，但 demo 已在发售日下线——这条建议现已失效。
- 供给侧不是零：TposeGaming 一篇长攻略已覆盖战斗/词条/角色，中文站有完整角色表。`all characters` 想做出差异，需要实机数据。

**判定**：**证据部分成立**。29 条可复现（扣歧义后 27），但需求小、名字污染重、评测从 96% 回落到 83.5%、demo 已下线。

**建议**：**维持 16 / 观望**。不优先建站；若 12 月 1.1 更新（新竞技场/ Boss / 武器）带来第二波搜索，再复查。

---

## 四、发现的问题清单

### A. 数据与口径

1. **派单前提过时**：DREADMOOR / Emberville 报告均已存在（10/23），候选池数字有原始文件支撑。派单仍按「缺报告」描述，建议后续派单前先 `ls keyword-results/`。
2. **请求失败被记成「0 条建议」**：`DREADMOOR.md` 的 `dreadmoor e/l/q` 与 `Emberville.md` 的 `best/build emberville` 都记为「0 条」。本次复采在 `dreadmoor e` 之后连续 31 个种子超时（`curl 28`），说明该环境会成片失败。按 12-Profile「HTTP=000 / size=0 = 未验证」，这些必须标「未验证」，否则原始数会被低估、且掩盖通道问题。
3. **噪声率分母不统一**，三份报告不可横向比较：
   - Stormforge：64/91（去重后）
   - DREADMOOR：97/258（去重后）
   - Emberville：114/347（去重后）
   - Loftia：40/**112**（原始）
   - Chained Beasts：35/**64**（原始）
   建议 Profile 固化：噪声率一律用「去重后」分母，并同时给出原始数/去重数/含品牌数/有效数四列。
4. **「有效词数」被变体放大**：DREADMOOR 72 条发售词 ≈ 6–8 个问题；Emberville 111 条同理；Loftia 58/72 是上线物流。用 161/233/72 直接套 skill 的「>100 → 15 篇」会系统性高估。建议新增「独立意图数」一列。

### B. 同名污染漏检

5. **DREADMOOR**：`tearscape dreadmoor map` / `tearscape dreadmoor palace` 属 Tearscape（另一款游戏，Dreadmoor Palace 是其地牢），被计入 161。
6. **DREADMOOR**：`dreadmoor experiment` 是小说 *The Dreadmoor Experiment*，报告明确「暂按游戏内内容保留」。
7. **DREADMOOR**：`dreadmoor dream dock` 被归为「地点」，实际是开发商名。
8. **Stormforge / Chained Beasts** 的同名剔除做得对（WoW 私服 70%、Chained Together 系列），可作为正面样例。

### C. 供给侧结论错误/过时

9. **Loftia**：候选池写「thegameswiki stub」——实际有多页内容 + gaming.tools 熟练度库 + cozygameguides 指南。这是本次最明确的事实错误。
10. **Emberville**：报告称可切「配音/职业」长尾——两套 wiki 已分别覆盖 Voice Cast 与 Classes/Builds；唯一未覆盖的联机在 EA 不存在。
11. **DREADMOOR**：「零组织化 wiki」成立，但 whisperofthehouse 的 demo hub 已覆盖报告建议的钓鱼/升级机制页。

### D. 机制事实缺口

12. **Emberville EA 不含 co-op**（1.0 才加），19 条联机词 + P0 第二篇失去落点。
13. **DREADMOOR 单人、PC only（主机未定）**，13 条联机词 + `ps5/xbox` 的答案都是「没有」。
14. **Chained Beasts demo 已下线**，报告仍建议做 demo 页。
15. **Stormforge app id 写错**：`discovery-2026-10-24.md` 用 5056340（Demo）当本体，本体是 2826790。
16. **Emberville 发售前 3 天价格仍未公布**，发售 FAQ 无法完整落笔。

### E. 评分依据

17. **Draemony 16 分无需求侧依据**：无关键词报告、无 wishlist、无评测；本次补采 14 种子 **0 条含品牌建议**。
18. **Stormforge 17 分与关键词结论冲突**：报告自己已建议降到「EA 后观察」，候选池分数列仍写 17，建议把分数改成 15 以免下一轮误读。

---

## 五、需要人工拍板的点

1. **DREADMOOR 是否按 8–10 篇排产**（而不是 skill 默认的 15 篇）？是否接受「4 篇机制页 + 4–6 篇 FAQ/对比」的结构？whisperofthehouse 已占 demo 机制位，是否仍视为可打？
2. **Emberville 是否放弃本轮建站**？距 EA 仅 3 天、价格未公布、两套 wiki 已覆盖宣称的差异化方向。建议等 EA 后 3–7 天看评测与价格。
3. **Loftia 是否改变打法**？「零 wiki」前提已不成立；若仍要建，只能做 5–6 篇上线物流 FAQ，和现有 10–20 篇攻略站模式不符。
4. **Draemony 是否直接降到 13 或移出优先队列**？零 Suggest 存在感 + 无 wishlist，是本批最弱的需求证据。
5. **是否把以下两条写回 `docs/agents/14-Profile-关键词研究员.md`（规则闭环）**：
   - 噪声率统一用去重后分母，报告必须同时给「原始/去重/含品牌/有效/独立意图」五个数；
   - HTTP 000 / 空 body / 连续超时一律标「未验证」，MUST NOT 记为「0 条建议」。
6. **是否修正 `discovery-2026-10-24.md` 的 Stormforge app id**（5056340 → 2826790），并把候选池 #56 的分数从 17 改为 15。本报告按边界未改动任何文件。

---

## 六、复现材料

| 项 | 路径/说明 |
|----|-----------|
| 复采原始响应 | `/tmp/kwaudit/raw*.jsonl`（临时文件，不随仓库提交） |
| 复采种子 | Stormforge 16 / Loftia 14 / Chained Beasts 14 / DREADMOOR 46（31 失败）/ Emberville 10 / Draemony 14 |
| Suggest IP | 74.125.24.138（前 21 次）→ 74.125.24.102（后续） |
| 采集时间 | 2026-10-24 10:20–11:10 CST |
| 未采集 | 中文/日文 Suggest（六款均未做）；Steam 页直读（本机 store.steampowered.com 全域超时，改用官方稿/权威媒体交叉核对） |
