# 候选分析 — #81 Malignus（2026-10-28）

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md`（四维 / 需求三道闸门 / 竞争 `P = T + 0.5t` / 品牌锚定率 / 成本口径）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/malignus.md`
> 一手数据：Steam AppDetails `appid=4672030`；商店页 app/4672030；demo app/5407640（均 **WebFetch 于 2026-10-28**，本机 `curl` 对 store.steampowered.com 超时）
> SERP：WebSearch（2026-10-28，美区英文 + 中文 + 日文）
> 未做：未建站、未写攻略、未改站点目录、未重采词、未改 `CANDIDATE-POOL.md` / `INDEX.md`、未 commit

---

## B.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **4672030** | [AppDetails](https://store.steampowered.com/api/appdetails?appids=4672030&l=english)（2026-10-28） |
| 官方名 | **Malignus**（无副标题、无别名） | 同上 |
| 开发 / 发行 | **Mossbomb**（自研自发） | 同上 |
| 类型 | Indie / Simulation / Strategy / **Early Access**；标签 **Colony Sim、Villain Protagonist、Base Building、2D、Top-Down、Management、Crafting、Dark Fantasy、Survival、Resource Management、Co-op** | [商店页](https://store.steampowered.com/app/4672030/)（2026-10-28） |
| 玩法定位 | 「地牢殖民模拟」：**你就是地牢**（Boss + 小兵 + 洞穴野兽），灵感来自 **Dungeon Keeper + RimWorld** | AppDetails `short_description` |
| 发售 | **2026-11-12（EA，Steam 页）**；媒体稿写 **11-13、$19.99**，EA 结束预期 1.0 $29.99 | AppDetails + [gamespress 新闻稿](https://www.gamespress.com/en-GB/Build-the-dungeon-Rule-the-horde-Keep-the-treasure)（2026-10-28） |
| 平台 / 人数 | Windows；**单人 + 2–4 人 online co-op**（共享一个地牢）+ Steam Workshop | AppDetails |
| 语言 | **9 种**：英/法/意/德/日/俄/简中/繁中/西（含日文 + 简繁中） | AppDetails |
| 评测 | 本体「No user reviews」；**demo（appid 5407640，19 Oct 2026）Mostly Positive (65)、75% 好评** | [demo 商店页](https://store.steampowered.com/app/5407640/) |
| demo 热度 | SteamDB 转载：峰值 **98**（10-20）、当日约 70；PlaytestGames 监测 7 日峰值 **430**（口径为并发 demo 玩家，非愿望单） | [OutputLag Next Fest day 7](https://outputlag.com/news/steam-next-fest-day-7-the-most-played-demos-right-now/)、[PlaytestGames](https://playtestgames.net/zh-cn/games/4672030)（第三方，**SteamDB 直连 403**，标 `[待确认]`） |
| 愿望单 | `[待确认]`（未找到官方数字） | — |
| 词库 5 数字 | 原始 103 / 去重 61 / 有效词 37 / 噪声 39.3% / 品牌锚定率 60.7% | `keyword-results/malignus.md` 头部 |

---

## B.2 硬门槛（有效词复核 —— 逐条剔除撞名 / 通用义）

**结论：硬门槛不通过。复核后独立意图仅 5 条。**

`Malignus` 不是自造词：它是 **Magic: The Gathering 的红卡名**（Innistrad 系，CDA「力量等于对手生命一半」）、拉丁语词根（邪恶意）、以及多款游戏的 Boss/事件名（NW2 事件、HoTS 玛尔加尼斯近形）、还有 Skyrim 的动画 mod 名。**研究员记的 37 条里 32 条是被这些同名实体吃掉的**。

| 保留（5） | 依据 |
|---|---|
| `malignus` | 品牌导航（歧义，但由本作语境采得） |
| `malignus game` | 明确指向游戏 |
| `malignus steam` | 明确指向 Steam 页 |
| `malignus price` | 采自 `探针:ps5` 批次，游戏价格意图 |
| `malignus discord` | 游戏社区意图（Steam 页提到开发者 Discord） |

| 剔除（32） | 原因 |
|---|---|
| `malignus mtg`、`malignus mtg rules`、`malignus mtg ruling`、`malignus mtg price`、`malignus mtg reddit`、`malignus rulings`、`malignus gatherer`、`malignus scryfall`、`malignus tcg`、`malignus tcgplayer`、`malignus commander`、`malignus power in graveyard`、`malignus teferi's protection`、`malignus transformers` | **MTG 卡牌（14 条）** |
| `malignus combos` | **实测 100% MTG**：EDH-Combos、Commander Spellbook、EDHREC 前 10 全是万智牌组合技 |
| `best malignus` | SERP 0 命中；`Malignus` 作为术语的主义是 MTG 卡，按撞名剔除 |
| `malignus how to pronounce`、`malignus definition`、`malignus def`、`malignus meaning`、`malignus wiktionary`、`malignus jelentése`（匈语「含义」) | 词典义（6 条） |
| `malignus animations`、`malignus animations skyrim`、`malignus mortifier` | **Skyrim 动画 mod**（同名词条），非本作 |
| `malignus league`、`malignus lol` | 指向 LoL 语境（近形 Malignance），非本作 |
| `malignus rs3`、`malignus um rs3` | RuneScape 3，非本作 |
| `malignus hipertermia` | 「恶性高热」医学术语（西语），通用义 |
| `malignus tumor` | 医学，通用义 |
| `malignus youth` | 无明确指向，无法归因 |

**有效词 = 5**；即使放最宽口径（把 `combos` / `best malignus` 都算回本作）也只有 **7 < 20** —— 结论对剔词尺度不敏感。

**攻略型占比**：保留的 5 条里 **0 条**攻略型（nav / info / 社区）→ **0%**（宽口径 1/7 = 14.3%），**<30%**。

**锚定率复核**：脚本 60.7% 是**字符串匹配**（只要结果里出现 `malignus` 就算锚定），而 `malignus` 的主义是 MTG 卡。按「真的指向本作」重算 = **5/37 = 13.5%**（或 5/61 去重 = 8.2%），**<30% → §4 判「品牌不成立或撞名严重」**。

**内容可写性**：**通过且是全报告最强项**（见 §B.6），但按 `23-Profile` 硬门槛规则，内容不能补偿需求否决。

---

## B.3 需求（三道闸门）

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **5**（研究员原记 37） | **不通过 → 门禁淘汰** |
| 攻略型占比 ≥30% | 0/5 = **0%** | 不通过（若强行过门禁，需求封顶 3） |
| 页型覆盖 ≥3 类各 ≥3 词 | 0 类 | 不通过 |
| 第三方信号 ≥1 | demo 65 条 75%、Next Fest day-7 最热 demo 之一、峰值 CCU 98–430（第三方） | 通过 |
| 品牌锚定率 ≥50% | 脚本 60.7% / **人工复核 13.5%** | **<30% → 污染判放弃** |
| 双源 | Suggest + demo/媒体 | 通过（救不了词数） |

> 本作的词库是**「锚点被同名卡牌吃掉」的教科书案例**：跑的是 `Malignus beginner guide`、`Malignus tier list` 这类正确后缀，但 Suggest 返回的是万智牌用户在同名实体上的历史查询。脚本侧只做字符串锚定，没有做「同名义项」判定 → 37 这个数字虚高 **7 倍**。

---

## B.4 竞争检查（6 条固定查询，逐条记录）

**Q1 EN `Malignus game wiki`（返回 10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | 9game.cn/news/12164380.html | 中文媒体（特色介绍，不计） |
| 2 | dl.3dmgame.com/pc/152696.html | 中文下载站（不计） |
| 3 | gamespress.com/pl/Build-the-dungeon-Rule-the-horde-Keep-the-treasure | 新闻稿（不计） |
| 4 | dvg.cn/danjigl/192252.html | 中文媒体（不计） |
| 5 | store.steampowered.com/app/4672030/Malignus/?l=koreana | 商店页（不计） |
| 6 | store.steampowered.com/app/4672030/Malignus/?l=ukrainian | 商店页（不计） |
| 7 | store.steampowered.com/app/4672030/Malignus/?l=vietnamese | 商店页（不计） |
| 8 | gamebrain.co/game/malignus | 游戏数据库（不计） |
| 9 | commanderspellbook.com/combo/1506-2942-3059/ | **MTG 组合技（撞名，不计）** |
| 10 | commanderspellbook.com/combo/331-1506-3059/?q=card:"Burning Anger" | **MTG（撞名，不计）** |

> 前 10 **0 家专门攻略站**；2 条被 MTG 卡牌占位。没有任何 wiki（Fandom / 官方 / 社区）。

**Q2 EN `Malignus game guide tips beginner`（返回 5 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | dvg.cn/danjigl/192252.html | 中文媒体（不计） |
| 2 | itch.io/post/15123545 | 另一游戏评论区（意图错位） |
| 3 | itch.io/post/12737605 | 另一游戏评论区（意图错位） |
| 4 | 9game.cn/news/12164380.html | 中文媒体（不计） |
| 5 | gamefaqs.gamespot.com/pc/179840-divinity-original-sin-ii/... | 另一游戏攻略（意图错位） |

> 英文侧**零引导类内容**；只有中文「特色介绍」转载，不是攻略页。

**Q3 EN `Malignus game codes`（返回 1 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | itch.io/post/15053171 | 另一款 itch 游戏的解锁码帖（**意图错位**，与本作无关） |

> codes 意图空白（买断制 EA，无兑换码），无竞争可计。

**Q4 ZH `Malignus 攻略`（返回 6 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | sanctum2.hu/.../Malignus_event | NW2/Sanctum 匈牙利网游事件（撞名，不计） |
| 2 | wiki.nw2online.com/index.php?title=Malignus_event | 同上（撞名，不计） |
| 3 | tappedout.net/mtg-questions/what-impact-does-doublestrike-have-on-malignus/ | **MTG 规则问答（撞名，不计）** |
| 4 | tappedout.net/mtg-questions/malignus-and-double-strike-1/ | MTG（撞名，不计） |
| 5 | store.steampowered.com/app/5407640/Malignus_Demo/ | 商店页 demo（不计） |
| 6 | ja.namu.wiki/w/... | HoTS「玛尔加尼斯」条目（撞名，不计） |

> 中文**零攻略页**（3DM/9game/dvg 的「特色内容介绍」是发稿转载，覆盖的是新闻不是攻略，不计 P，但可作为内容扩展的来源）。

**Q5 ZH `Malignus wiki 中文 地下城 攻略`（0 条结果）** → 中文 wiki 完全空缺。

**Q6 JA `Malignus 攻略 日本語 ダンジョン`（返回 2 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | www8.atwiki.jp/persona4/pages/23 | Persona 4 攻略 wiki（无关，意图错位） |
| 2 | www36.atwiki.jp/to_graces/pages/82 | Tales of Graces 攻略 wiki（无关，意图错位） |

> 日文**零条目**；语言列表里有日文（官方本地化），但日文攻略生态尚未形成。

### B.5 P 值计算

| 站 | 类型 | 判定 |
|---|---|---|
| 9game / 3DM / dvg.cn / playtestgames / checkpointzero / gamebrain | **不计** | 媒体转载 / 下载站 / 游戏数据库，不围绕本作持续更新，非攻略站 |
| commanderspellbook / tappedout / edhrec 类 | **不计** | MTG，撞名 |
| sanctum2.hu / nw2online / namu.wiki / atwiki(P4 / ToG) | **不计** | 另一游戏 |
| Steam 商店 / Steam 社区 | **不计** | 商店页 / 官方渠道 |

**`P = 0` → 无专门攻略站 → 竞争 5。**

> 同样是「P=0 ≠ 机会」的情形：英文 SERP 里 `Malignus` 的结果位被 **MTG 卡牌、游戏数据库、商店页**占满，我们的攻略页即使上线，也要先跟「万智牌 Malignus」抢同一个词面。**竞争分 5 只反映「没有攻略站对手」，不反映「这个词好抢」。**

---

## B.6 内容扩展

全部来自 [Steam 商店页](https://store.steampowered.com/app/4672030/)（2026-10-28 抓取，官方一手）：

| 类 | 可核验实体 | 可写页数 |
|---|---|:--:|
| 小兵种族 | **6 族**：Goblins / Kobolds / Orcs / Gnolls / Bugbears / Ogres（具名） | 6 |
| Boss | **4 个 Boss 怪物**，能力随宝物库规模成长（**未具名**） | 1–2 |
| 魔法 | **4 系**：Pyromancy / Electromancy / Necromancy / Shadowmancy + 仪式 + 黑暗神祇 | 4 |
| 陷阱 | **6 型**：dart throwers / spinning blades / flamethrowers / gas / electric coils / webs；**5 种触发**：pressure plates / tripwires / sensors / levers / timers | 3–4（陷阱总表 + 联动 + 触发） |
| 巢穴 | **9 种 lair type**（数量已给，**未逐类具名**） | 1 |
| 野兽 | **30+ 野生生物**（未具名），可驯为宠物或猎食 | 1（索引） |
| 入侵者 | **6 个冒险者种族、10 个职业、40+ 特性**（职业/特性未具名） | 2–3 |
| 设施/建造 | 挖凿、房间、workshops / beds / thrones / altars / traps | 2 |
| 囚犯 | 捕获、上链、审讯取情报；小兵期待「地牢该有俘虏」 | 1 |
| 地表 | 实时劫掠聚落、世界记住你的行为 | 1 |
| 小兵管理 | traits / grumbles / breakdowns / 喂食 / 床位 / 打造装备 / 秩序 | 2 |
| 联机 | **2–4 人 co-op 共享地牢** | 1 |
| 新手 / FAQ | 开局、EA 路线图（月度更新约 1 年）、价格 $19.99、9 语言、Workshop | 2 |

**可写独立页估算：25–28 页，6 类以上** → 落 **20–29 页 → 4 分**。

限制（据实说明，避免高估）：
- 4 Boss、9 巢穴、30+ 野兽、10 职业、40+ 特性**都只给了数量、没给名字**，实体级页面只能等 EA 上线后从游戏内/官方公告补；现阶段这 5 类是「索引页」而非「实体页」。
- 达到 5 分需「≥30 页且 5 类各 ≥5 条具体实体」，当前不满足 → **不给 5**。
- 中/日文攻略实测完全空缺（Q4–Q6），按规则理论上可 +1，但 5 分档的页数门槛不满足，**按档位上限仍记 4**。

---

## B.7 生命周期

| 项 | 值 |
|---|---|
| 发售 | **EA 2026-11-12（Steam 页）/ 11-13（媒体稿）**，距今 **14–15 天** |
| 更新计划 | EA 期约 **1 年、月度更新** → 1.0（$29.99），期间加 Steam Workshop | 商店页 |
| demo | 19 Oct 2026，**65 条 75% Mostly Positive** |
| demo 并发 | SteamDB 转载峰值 **98**（10-20）；PlaytestGames 7 日峰值 **430**（第三方，口径为并发非愿望单） |
| 愿望单 | `[待确认]` |
| Trends 28 天 | `[待确认]`（未查） |
| 媒体覆盖 | gamespress 新闻稿 + 中文 3DM/9game/dvg 转载（发稿驱动，非自然热度） |

→ 定档在 8 周内（满足「定档 ≤8 周」），但**「wishlist 强」缺一手证据**，demo 峰值 98–430 属中等偏弱 → 按规则保守取 **生命周期 4**（不给 5）。

---

## B.8 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| **需求** | **0** | 复核后独立意图 **5 < 20** → 门禁淘汰；攻略型 0/5 = 0%；人工复核锚定率 13.5%（[词库](keyword-results/malignus.md)，§B.2 复核表） |
| 竞争 | 5 | 6 条查询 **0 家专门攻略站**，`P=0`；但 SERP 被 MTG 卡牌/数据库/商店页占位（§B.4） |
| 内容扩展 | 4 | 6 具名种族 + 4 魔法系 + 6 陷阱型 + 5 触发 + 入侵者/囚犯/地表/联机，25–28 页 / 6 类（[Steam 商店页](https://store.steampowered.com/app/4672030/)） |
| 生命周期 | 4 | EA 2026-11-12（15 天）+ 月度更新 1 年；愿望单 `[待确认]`、demo 峰值 98–430 属中等，不满足「wishlist 强」（[demo 页](https://store.steampowered.com/app/5407640/)） |
| 参考总分 | **13** | **不适用**：需求 ≤2 命中硬否决，总分不参与分流 |

---

## B.9 成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | `[待实测]` | 建站后记台账 |
| 人工 | `[待实测]` | 目标 ≤6 小时/站 |
| **回本 PV** | `成本 ÷ (RPM/1000)` | RPM **$1–5/千次**（第三方基准，2026-08 检索，非承诺）；现金成本 0 时 PV 只由 token/人力折算决定，**本轮不给单点值**；组合口径 30 天 300 PV ≈ **$0.3–1.5** |

> 抓取说明：本机 `curl` 对 `store.steampowered.com` 超时（含 `--resolve`），改用 **WebFetch 于 2026-10-28**；`steamdb.info` 直连 **403**，CCU 用第三方转载并标 `[待确认]`；`price_overview` 在 API 为空，$19.99 取自 gamespress 新闻稿。

---

## B.10 结论

**放弃。**

**第一步 · 硬否决**：需求 **0 ≤ 2** → **直接放弃**。双重佐证：
1. 复核后有效词 **5 < 20**，门禁淘汰（最宽口径 7，仍 <20）。
2. 锚定率脚本 60.7%、**人工复核 13.5% < 30%** → §4 判「品牌不成立或撞名严重」。

**第二步 · 总分分流**：不适用（已否决）。参考总分 13（0/5/4/4）**不得用于翻案**：`[需求0, 竞争5, 内容4, 生命周期4]` 正是 §2.6 实测里「内容与生命周期满分、但零流量」的那类结构。

**最关键的证据**：`keyword-results/malignus.md` 的 37 条里 **32 条被同名实体吃掉** —— `malignus combos` 实测前 10 全是 EDHREC / Commander Spellbook 的万智牌组合技，`malignus mtg / tcg / scryfall / gatherer / commander / rulings` 共 13 条直接是 MTG 卡牌词。脚本的「60.7% 锚定率」只做字符串匹配，没做同名判定，把这个数字抬高了 4–7 倍。

**复采用条件（若主 Agent 想再给它一次机会）**：
- 时点：**EA 上线 D+7 = 2026-11-19**（或 D+14 = 11-26，等官方 Workshop/更新公告落地）。
- 锚定词改：`Malignus Mossbomb` / `Malignus dungeon` / `Malignus colony sim`（单一 `Malignus` 不可用）。
- 必须加排除词：`mtg|tcg|scryfall|gatherer|commander|rulings|graveyard|teferi|league|lol|rs3|skyrim|wiktionary|pronounce|definition|meaning|tumor|hipertermia`。
- 通过线：有效词 ≥20 且攻略型 ≥30%，锚定率 ≥50%（按新锚定词重算）。
- 若复采仍 <20 → **永久放弃**，不再占池。

> 备选取向（供参考，非本轮结论）：本作内容面是 2 个候选里最好的（6 具名种族 + 4 魔法系 + 6 陷阱型 + 2–4 人 co-op），且中/日文攻略 100% 空缺 —— **若品牌词问题能在 EA 后被自然流量解决（如官方推出中文副标题或社区开始用 `Malignus dungeon` 指代），它是值得回池的**。当前阻断点是品牌词，不是产品。
