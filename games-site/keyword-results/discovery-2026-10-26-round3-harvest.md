# 关键词采集报告 — 2026-10-26 第三轮（R3：#86–#93）

> 执行：关键词研究员（`docs/agents/13` / `14`）
> 任务编号：KW-2026-10-26-R3
> 输入：`keyword-results/CANDIDATE-POOL.md` #86–#93（2026-10-26 A 组新发现，原状态 `待分析`）
> 工具：`node scripts/harvest-keywords.mjs`（locale=en，hl=en&gl=us，每条词由脚本写 `google_suggest:*` 来源）
> 范围：**只采词与回填状态，不评分、不建站、不改 dashboard**。

## 官方名复核（Steam appdetails，2026-10-26）

8 个游戏的 Steam 官方名全部取到，与池内写法**完全一致**，无差异：

| # | appid | Steam 官方名 |
|---|---|---|
| 86 | 2581410 | `Stygian: Outer Gods` |
| 87 | 4968640 | `Japanese Ramen Simulator` |
| 88 | 2680280 | `PAPERHEAD` |
| 89 | 3976340 | `Cucina Stellata` |
| 90 | 1737870 | `REKA` |
| 91 | 1566200 | `Tape to Tape` |
| 92 | 3645890 | `GONE Fishing` |
| 93 | 2949320 | `Ratatan` |

## 汇总表

> 攻略型占比 = （Codes + Tier List + Best/Ranking + Boss/Characters + Build/Class + Weapons/Gear + How-to + Guide/Beginner）/ 有效词，与任务给的口径一致；Info/发售平台、Co-op/Multiplayer、Other 不计入。

| # | 游戏 | 有效词数 | 攻略型占比 | 品牌锚定率 | 裸词污染情况 | 状态判断 |
|---|---|---:|---:|---:|---|---|
| 86 | Stygian: Outer Gods | 42 | 14.3%（6/42） | 77.8% | 低。全称唯一，无同名游戏；噪声主要是 `outer worlds` 混淆 | **需评分** |
| 87 | Japanese Ramen Simulator | 16 | 0.0%（0/16） | 20.0% | **极高**。被 Google 归一成 `ramen`，且存在另一款 `Ramen Simulator` | **需求不足（16<20）** |
| 88 | PAPERHEAD | 31 | 9.7%（3/31） | 53.4% | 中。`paper` / `paper mario` 回退占噪声，有效词仍以本作为主 | **需评分** |
| 89 | Cucina Stellata | 15 | 0.0%（0/15） | 29.4% | **极高**。意大利餐厅/地名（Milano/Napoli/Roma/Torino）与意大利语词占多数 | **需求不足（15<20）** |
| 90 | REKA | 158 | 22.8%（36/158） | 81.9% | **极高**。单字通用词：Reka AI、Reka Money、匈牙利人名、斯拉夫语河流 | **需评分**（锚定需人工复核） |
| 91 | Tape to Tape | 88 | 20.5%（18/88） | 57.9% | 中。噪声为胶带/磁带；有效词基本都指向本作冰球 Roguelite | **需评分** |
| 92 | GONE Fishing | 171 | 17.5%（30/171） | 73.1% | **极高**。通用习语；钓鱼包船/导游服务、BBC 剧集、电影、歌曲均同名 | **需评分**（锚定需人工复核） |
| 93 | Ratatan | 144 | 25.0%（36/144） | 65.5% | 低。仅 `rattan` / `rattataki` 近似词进噪声 | **需评分** |

**采集健康度**：8/8 成功，**请求失败 0**；原始建议 1,373 条、去重 919 条、有效词 565 条。脚本每次现取 `suggestqueries.google.com` 真实 IP 并 `--resolve` 直连，本轮各站解析到不同 IP（172.253.118.100 / 74.125.68.100 / 142.251.12.102 等），均正常返回，未出现 DNS 投毒导致的失败。

## 逐游戏判断

### #86 Stygian: Outer Gods（42 词）
- 参数：`--genre survival`，未加 alias。官网全称三段式且唯一；若加 `Stygian` 单 token 别名会把前作 `Stygian: Reign of the Old Ones` 与形容词义一起拉进来，故不加。
- 词面：Info 20 条（发售日/PS5/Steam/更新为主），攻略型仅 6 条（`safe code`、`guide`、`walkthrough`、`character creation`、`main character`、`skills`）。
- 判断：有效词过 20 → `需评分`；**攻略型占比 14.3% < 30%**，按战略基线分析阶段「需求封顶 3 分」，不是内容扩展强的候选。

### #87 Japanese Ramen Simulator（16 词）
- 参数：`--genre sim`，自定义 16 个种子，在原 sim 种子上把 `tier list` / `how to` 换成 `co op` / `crossplay`，理由是官方卖点为「经营 + 6 人合作」双词面。未加 alias：噪声里出现 `ramen simulator codes 2023`，说明去掉 `Japanese` 会撞另一款 Ramen Simulator，不能当别名。
- 词面：13 条 Info（demo/price/release date/ps5/xbox/steam），3 条 Other（delayed/discord/game），**0 条攻略型**；锚定率仅 20.0%，80% 噪声是拉面价格、日式拉面教程、日式铁道模拟等。
- 判断：16 < 20 → `需求不足（有效词 16<20）`。复采触发条件：EA 转 1.0 或官方公布正式中文/日文名后 7 天；届时先人工确认 `Japanese Ramen Simulator` 是否出现稳定长尾。

### #88 PAPERHEAD（31 词）
- 参数：`--genre default` + 自定义 seeds `codes,guide,walkthrough,secrets,weapons,achievements,endings,boss,release date`。任务给的是 `release-date`，这里改成自然语言 `release date`（Suggest 对连字符会归一，没必要制造非自然查询），其余完全按任务清单。
- 词面：Info 15、Other 13、Boss/Characters 2、Guide 1；攻略型仅 `all characters`、`ep 0 characters`、`walkthrough` 3 条。有效词里出现 `ep 0` / `ep 1` / `epo`，说明玩家在搜章节/序章内容。
- 判断：31 ≥ 20 → `需评分`；但攻略型 9.7%，且 `Other` 里 lore/gameplay/wiki/trailer 偏信息型，内容扩展需在分析阶段谨慎给分。

### #89 Cucina Stellata（15 词）
- 参数：`--genre survival`（沿用建议值，仅作元数据）+ 自定义 12 个种子（guide/walkthrough/endings/secrets/achievements/puzzle/recipes/how long to beat/release date/price/reddit/demo）。理由：1–2 小时恐怖烹饪游戏，survival 的 base building/resources/best weapons 全不适用。
- 词面：15 条有效词中只有约 7 条与游戏相关（`game`、`gioco`、`videogioco`、`itch`、`itch io`、`keys`、官方副标题 `✦ starred cuisine`），其余是米兰/那不勒斯/罗马/都灵餐厅、`a casa`、`in inglese`、`ricette` 等意大利语通用词；锚定率 29.4% 已低于 50% 线。
- 判断：15 < 20 → `需求不足（有效词 15<20）`。同名污染严重，复采也难改善；若后续观察到 itch.io 版本传播再考虑重采。

### #90 REKA（158 词）
- 参数：`--genre sim --alias "Reka game"`。按要求加了品牌化别名，但必须说明：脚本品牌匹配对单词品牌是「整 token 相等」，`REKA` 本身就会命中所有含 `reka` 的建议，**加别名无法过滤同名污染**，只能用于报告标注。
- 词面：Info 91、Other 28、How-to 15、Guide 11、Boss/Characters 5、Build/Class 5、Co-op 3。人工剔除同名后仍有约 **113 条与本作相关**（`reka how to cook`、`reka game release date`、`reka building guide` 等），攻略型约 33 条（29.2%）。
- 污染：约 45 条是 Reka AI、Reka Money / Reka Finance、匈牙利人名（Rubint Réka / Németh stb.）、斯拉夫语河流（Uvac / Neretva / Dunav / Volga）。按 `docs/STRATEGY-挖词与词库.md` 4.2，**单字通用词品牌锚定率再高也不可信**，本行虽按规则转 `需评分`，分析员 MUST 人工复核品牌可区分性（必要时按「品牌撞名」放弃）。

### #91 Tape to Tape（88 词）
- 参数：`--genre roguelite`，未加 alias。理由：官方品类就是 Roguelite 冰球，roguelite 种子（tier list/best build/unlock/boss/characters/meta/secrets）与词面吻合。
- 词面：Info 49、Other 19、Guide 8、How-to 3、Boss 3、Best 2、Co-op 2、Codes 1、Build 1；攻略型 18 条（20.5%），含 `best skills`、`best talents`、`bosses`、`unlock superstars`、`beginner tips`、`walkthrough`。
- 污染：噪声以胶带/磁带/五金胶带为主，有效词里只有 `tape to tape gauze` 等极少数误命中；品牌在本作语境下可区分。判断：`需评分`，但攻略型占比 < 30%，需求维度封顶 3 分。

### #92 GONE Fishing（171 词）
- 参数：`--genre coop`，未加 alias。理由：1–8 人合作恐怖钓鱼，coop 种子覆盖 crossplay/solo/with friends；试过用 `horror` 做别名没有意义——基础品牌短语仍会命中所有 `gone fishing` 建议，无法降噪。
- 词面：Info 73、Other 55、Guide 20、Co-op 13、Boss 6、Best 2、How-to 1、Weapons 1。人工剔除同名后约 **102 条与本作相关**（含 `horror game ps5`、`boss fight`、`solo`、`multiplayer mod`、`steam achievements`），攻略型约 20 条（19.6%）。
- 污染：约 69 条是通用习语与同名实体——钓鱼包船/导游服务（`guide service kentucky/oswego/texoma` 等 8 条）、BBC 剧集（`2026 release date bbc`、`s9`）、电影/歌曲/标牌/meme、Nike `foamposite`、其他 `Go Fishing` 手游。判断：`需评分`，但分析员必须人工复核，不能直接拿 171 当有效需求。

### #93 Ratatan（144 词）
- 参数：`--genre roguelite`，未加 alias。节奏 Roguelite，roguelite 种子覆盖 tier list/boss/unlock/characters/meta，命中良好。
- 词面：Info 89（demo 平台/发售/更新为主，均为本作）、Boss/Characters 17（`all bosses`、`world 3/4/5 boss`、`playable characters`）、Guide 6、Tier List 4、How-to 3、Co-op 3、Best 2、Build 2、Weapons 1、Codes 1；攻略型 36 条（25.0%）。
- 污染：仅 `rattan`（藤编）、`rattataki`（SWTOR）、`ratan` 等近似词进噪声，无同名游戏。判断：`需评分`；攻略型 25% 略低于 30%，需求维度仍需按封顶规则处理。

## 异常与方法备注

1. **Steam store/api 本轮可正常返回**：8 个 appid 的 `appdetails?filters=basic` 均 200 且拿到官方名，与 A 组发现轮记录的「21:2x 返回 0 字节」不一致；采词时点（22:xx）已恢复，官方名以本次结果为准。
2. **请求失败 0**：每个游戏 16–22 个锚定批次全部 HTTP 200；`--resolve` 的 IP 逐次不同，符合脚本「现取 IP、不写死」的设计。
3. **品牌撞名是本轮最大问题**：REKA（单字通用词）、GONE Fishing（通用习语）、Cucina Stellata（意大利餐厅）、Japanese Ramen Simulator（被截断成 ramen）四个的脚本有效词数都被同名/通用义抬高；报告里已分别给出人工剔除后的估计值，分析阶段 MUST 以人工复核后的口径为准。
4. **未做评分、未建站、未改 dashboard**；`CANDIDATE-POOL.md` 只改 #86–#93 的结论与证据列，并加一行本轮说明。
