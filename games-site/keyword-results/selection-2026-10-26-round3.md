# 候选分析 — 2026-10-26 第三轮（R3：#86–#93）

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md`（四维 20 分 / 需求三道闸门 / 竞争 `P = T + 0.5t` / 品牌锚定率 / 成本口径）
> 词库输入（**只读这 6 份，未另采、未估算**）：`keyword-results/stygianoutergods.md`、`paperhead.md`、`reka.md`、`tapetotape.md`、`gonefishing.md`、`ratatan.md`
> 上游：`keyword-results/discovery-2026-10-26-round3-harvest.md`（采集参数、脚本口径）
> 查询时间：2026-10-26（本机）；SERP 走 WebSearch（美区 `hl=en`，中/日文查询按原样跑）
> 未做：未建站、未改站点目录、未改 dashboard、未改任何规则文件、未重采词

## 口径与判定规则（本轮统一执行，先写清楚再看分）

1. **有效词自己复核**：按「是否真的搜这款游戏」逐条剔除撞名/通用义，不抄研究员的数，也不抄脚本的 158/171/144。
2. **攻略型词**（§2.2）：Codes / Tier List / Best-Ranking / Boss-Characters / Build-Class / Weapons-Gear / How-to / Guide-Beginner / **Co-op-Multiplayer**。Info/发售平台 + Other 不计。
3. **需求闸门**：有效词 <20 → 淘汰；攻略型 <30% → 需求**封顶 3**；单一来源 → 封顶 3；≥60 词且攻略型 30–50% 属**已记录的口径缺口**（§2.2 注），同时写「取 3 = X」与「取 4 = Y」。
4. **竞争只数 SERP 里出现的站**（6 条固定查询的 top 10），再按站核实厚度。**大站单篇 / Reddit / Steam 社区 / YouTube / 论坛 / 商店页 / PCGamingWiki / 成就奖杯库 / 聚合列表页不计**；Fandom 该游戏页按厚度计（薄 → 不计，厚 → 1）；非英文站不计入 `P`。
5. **内容扩展**只数「有可核验来源的具体实体」；搜索建议本身不证明实体存在。
6. **生命周期**依据顺序：Steam 发售日 → 官方更新公告 → SteamDB 在线曲线 → Google Trends 28 天。**动态值（评测数/在线）标抓取日，取不到写 `[待确认]`**。
7. **成本**：域名 0（`*.vercel.app`）、托管 0（Vercel Hobby）；token 与人工按台账实测回填，本轮**不预估**；回本口径是组合回本，RPM 取 $1–5/千次（第三方基准，2026-08 检索，非承诺）。

> 本轮启动时 Steam `appdetails` 与商店页直取均失败（`store.steampowered.com/api/appdetails` 空响应 / 商店页 TIMEOUT、ECONNREFUSED），因此**一手评测数与价格一律按上游 21:2x 抓取值 + 本次三方快照并列**，动态字段以抓取日为准。

---

## 一、#86 Stygian: Outer Gods — **观察（16）**

### 1.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 2581410 | [商店页](https://store.steampowered.com/app/2581410/) |
| 开发 / 发行 | Misterial Games / Fulqrum Publishing | [Gematsu](https://www.gematsu.com/games/stygian-outer-gods) |
| 类型 | 第一人称生存恐怖 RPG（Lovecraft；理智系统/制作/多结局） | 同上 |
| 发售 | EA 2025-04-14 → **1.0 2026-10-26（当日）** | 上游 `discovery-2026-10-26-round2-a.md`；[Steam 新闻](https://store.steampowered.com/news/app/2581410/view/537714770822824451) |
| 评测 / 好评 | **517 条 / 79%**（2026-10-26 21:2x 一手，未二次复现） | 上游；本次搜索旁证 ~82% [VGTimes](https://vgtimes.com/games/stygian-outer-gods/) |
| 价格 | **$19.99**（2026-10-26 快照） | [Newegg 商品页](https://www.newegg.com/fulqrum-publishing-stygian-outer-gods-pc/p/N82E16832749232) |
| 峰值 CCU | **22–49**（EA 期三方快照，`[待确认]`） | 上游侦察记录 |
| 词库 5 数字 | 原始建议 / 去重 / **有效词 42** / 噪声率 22.2% / 品牌锚定率 77.8% | `stygianoutergods.md` 头部 |

### 1.2 硬门槛（有效词复核 + 内容可写性）

**通过**。42 条有效词全部指向本作（前作 `Stygian: Reign of the Old Ones` 与 `outer worlds` 混淆已在噪声表剔除），复核后仍是 **42**。

可写实体（每条有来源）：

- 26 个成就及解锁条件（[VGTimes achievements](https://vgtimes.com/games/stygian-outer-gods/achievements-and-trophies/steam/)）
- 8+ 角色特质：Heavy Strike / Stealth Master / Perfect Block / Speak with Death / Attentiveness / Artifact Knowledge / Backstab / Leverage（[VGTimes walkthrough](https://vgtimes.com/guides/124568-stygian-outer-gods-walkthrough-guide.html)）
- 地点：Kingsport、Brasko Mansion、House of Mists、Cursed Lighthouse、矿井、墓园（[GamesStarter 剧情](https://gamesstarter.com/stygian-outer-gods-story-explained-plot-lore-and-the-black-day-prequel/)）
- Boss/敌人：首个 Nosferatu、Grotto 解谜、Sona-Nyl 相关成就（[Steam 社区讨论](https://steamcommunity.com/app/2581410/discussions/0/682992180338640702/)）
- 机制：制作（绷带/开锁器）、理智、多结局、`triangle key`、`cave puzzle`、`safe code`（词库 + VGTimes）

→ 4 类以上、20–29 个可写页 → 内容扩展 **4**。

### 1.3 需求三道闸门

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **42**（人工复核后不变） | 通过 |
| 攻略型占比（自数） | Codes 1 + Boss/Characters 2 + Build 1（skills）+ Guide 2 + Co-op 2 = **8 / 42 = 19.0%** | **<30% → 发售日陷阱，需求封顶 3** |
| 双源需求信号 | ① 517 条 79%（Steam，一手快照）② 峰值 22–49 CCU（三方） ③ 4 源发现命中 | 通过（信号真实但弱） |
| 品牌锚定率 | 脚本 77.8%；人工复核有效词 **42/42 = 100%** | ≥50%，通过；全称唯一，无同名游戏 |

> 需求 42 词落在「40–59」桶，但该桶要求攻略型 ≥40%，实际 19.0%，按封顶规则取 **3**。

### 1.4 六条固定竞争查询（逐条 top 10）

**Q1 EN `Stygian Outer Gods wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | gry-online.pl/gry/stygian-outer-gods/z9698b | 非专门（游戏库） |
| 2 | store.steampowered.com/news/app/2581410/view/537714770822824451 | 商店 |
| 3 | gematsu.com/games/stygian-outer-gods | 非专门（数据库） |
| 4 | indiedb.com/games/stygian-outer-gods | 非专门（数据库） |
| 5 | pcgamingwiki.com/wiki/Stygian:_Outer_Gods（curid=202155） | 技术 wiki（规则明示不计） |
| 6 | playground.ru/stygian_outer_gods | 非专门（俄语） |
| 7 | store.epicgames.com/p/stygian-outer-gods-e5f4c5 | 商店 |
| 8 | gamersgate.com/en-hu/product/stygian-outer-gods/ | 商店 |
| 9 | gamesstarter.com/stygian-outer-gods-story-explained-plot-lore-and-the-black-day-prequel/ | 非专门（信息 SEO） |
| 10 | pcgamingwiki.com/wiki/Stygian:_Outer_Gods（oldid=1743719） | 技术 wiki（不计） |

**Q2 EN `Stygian Outer Gods guide`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | vgtimes.com/guides/124568-stygian-outer-gods-walkthrough-guide.html | 大站/攻略门户单篇（不计） |
| 2 | vgtimes.ru/guides/124567-prohozhdenie-stygian-outer-gods | 俄语（不计） |
| 3 | es.vgtimes.com/guides/124568-... | 西语（不计） |
| 4 | gamesstarter.com/who-is-jack-harrison-in-stygian-outer-gods... | 非专门（信息） |
| 5 | zoneasoluces.fr/solution-stygian-outer-gods-guide-survival-horror-lovecraftien/ | 法语（不计） |
| 6 | showgamer.com/ru/prohozhdeniya-igr/2952-prohozhdenie-stygian-outer-gods | 俄语（不计） |
| 7 | gamesstarter.com/stygian-outer-gods-low-fps-stuttering-fix... | 非专门（优化文） |
| 8 | gamesstarter.com/stygian-outer-gods-optimization-fix-pc... | 非专门（优化文） |
| 9 | videoconvert.minitool.com/news/record-stygian-outer-gods.html | 工具站 |
| 10 | steamcommunity.com/app/2581410 | 社区（不计） |

**Q3 EN `Stygian Outer Gods codes`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | vgtimes.com/games/stygian-outer-gods/files/cheats/ | 修改器库（意图错位） |
| 2 | vgtimes.com/games/stygian-outer-gods/files/cheats/top-files/ | 修改器库 |
| 3 | apocanow.com/cheats/multi/31442/stygian-outer-gods | 修改器库 |
| 4 | vgtimes.com/games/stygian-outer-gods/files/ | 修改器库 |
| 5 | gamersky.fhyx.hk/item/10827.html | 商店（激活码） |
| 6 | apocanow.pt/truques/multi/31442/stygian-outer-gods | 修改器库 |
| 7 | apocanow.it/trainers/2716/stygian-outer-gods | 修改器库 |
| 8 | newegg.com/fulqrum-publishing-stygian-outer-gods-pc/... | 商店 |
| 9 | apocanow.fr/trainers/2716/stygian-outer-gods | 修改器库 |
| 10 | gamersbase.pro/zh/game/stygian-outer-gods | 商店 |

> 无一条 codes 攻略页 → 该意图是**空白**（`codes` 词本身是 `safe code`，即保险箱密码，不是兑换码）。

**Q4 ZH `Stygian Outer Gods 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | vgtimes.com/guides/124568-... | 大站单篇 |
| 2 | fr.vgtimes.com/guides/124568-... | 法语 |
| 3 | vgtimes.ru/guides/124567-... | 俄语 |
| 4 | zoneasoluces.fr/solution-stygian-outer-gods-... | 法语 |
| 5 | showgamer.com/ru/prohozhdeniya-igr/2952-... | 俄语 |
| 6 | vgtimes.com/games/stygian-outer-gods/files/cheats/trainers/ | 修改器库 |
| 7 | steamcommunity.com/app/2581410（it） | 社区 |
| 8 | fuyumomo.seesaa.net/article/519579552.html | 日语个人博客 |
| 9 | gamesstarter.com/who-is-jack-harrison-... | 信息 |
| 10 | ku.gamersky.com/2024/stygian-outer-gods/ | 中文资料站 |

**Q5 ZH `Stygian Outer Gods wiki 中文`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | gamelode.vercel.app/post/701ca1fd-... | 中文资料聚合 |
| 2 | ku.gamersky.com/2024/stygian-outer-gods/ | 中文资料站 |
| 3 | gamelode.vercel.app/game/980464 | 同上 |
| 4 | gamelode.vercel.app/post/df53a6a8-... | 同上 |
| 5 | fhyx.com/box/v2/item/10827.html | 商店 |
| 6 | aaaplayer.com/18933.html | 下载站 |
| 7 | mlyouxi.com/87951.html | 下载站 |
| 8 | yxk111.com/28945.html | 下载站 |
| 9 | indienova.com/game/stygian-outer-gods | 数据库 |
| 10 | xudanji.cn/61702.html | 下载站 |

> 中文**无成型 wiki**（只有资料/下载站）→ 多语言空间成立，内容扩展 +1 已在 4 分内体现。

**Q6 JA `Stygian Outer Gods 攻略 wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | vgtimes.com/guides/124568-... | 大站单篇 |
| 2 | fr.vgtimes.com/guides/124568-... | 法语 |
| 3 | vgtimes.ru/guides/124567-... | 俄语 |
| 4 | showgamer.com/ru/.../2952-... | 俄语 |
| 5 | steamcommunity.com/app/2581410/discussions/0/682992180338640702/ | 社区 |
| 6 | zoneasoluces.fr/solution-stygian-outer-gods-... | 法语 |
| 7 | gamesstarter.com/who-is-jack-harrison-... | 信息 |
| 8 | vgtimes.com/games/stygian-outer-gods/achievements-and-trophies/steam/ | 成就页 |
| 9 | gamesstarter.com/stygian-outer-gods-story-explained-... | 信息 |
| 10 | steamcommunity.com/app/2581410（it） | 社区 |

> 日文**无专属攻略 wiki**（仅有个人博客 1 篇）。

### 1.5 P 值计算

| 站 | 类型 | 判定依据 |
|---|---|---|
| — | — | 6 条查询 top 10 内**没有**英文专门攻略站；VGTimes/GamesStarter 按「大站单篇/信息站」不计；PCGamingWiki 明示不计；中文仅资料/下载站 |

`P = 0` → 竞争 **5**（空位）。

### 1.6 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | 3 | 42 有效词过门禁，但攻略型 8/42=19.0% <30%，触发发售日陷阱封顶 3；[VGTimes 走查](https://vgtimes.com/guides/124568-stygian-outer-gods-walkthrough-guide.html) 是唯一成体系内容 |
| 竞争 | 5 | 6 条查询无专属 wiki/攻略站，`codes` 意图整页被修改器占据（[apocanow](https://www.apocanow.com/cheats/multi/31442/stygian-outer-gods)），英文空位 |
| 内容扩展 | 4 | 26 成就 + 8 特质 + 6 地点 + Boss/解谜/结局，20–29 页、≥4 类（[成就页](https://vgtimes.com/games/stygian-outer-gods/achievements-and-trophies/steam/)） |
| 生命周期 | 4 | 1.0 当日（≤8 周）但信号弱：517 条 79%、峰值仅 22–49 CCU，Trends `[待确认]` → 不给 5 |
| **总分** | **16** | **观察**（差 1 分）；若 Trends 确认平稳/上升 → 生命周期 5 → 17 可建 |

**成本/回本**：域名 0 + 托管 0；token 与人工 ≤6h 按台账实测回填（本轮 `[待确认]`，不预估）。`回本 PV = 总成本 ÷ (RPM/1000)`，RPM $1–5/千次（第三方基准 2026-08）→ 现金成本为 0 时回本 PV 无意义，按组合口径看，30 天 300 PV ≈ $0.3–1.5。

---

## 二、#88 PAPERHEAD — **低优先（13）**

### 2.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 2680280 | [商店页](https://store.steampowered.com/app/2680280/) |
| 开发 / 发行 | Paperhead te4m / HypeTrain Digital | [GameWith](https://gamewith.jp/gamedb/18814) |
| 类型 | 复古 boomer shooter / 恐怖冒险（纸板世界、魔法铅笔） | [Game Rant](https://gamerant.com/paperhead-steam-fps-like-paper-mario-doom-halloween/) |
| 发售 | **2026-10-09/10**（PC；PS5/Xbox 列于部分渠道） | 上游 + [Namu Wiki](https://en.namu.wiki/w/%ED%8E%98%EC%9D%B4%ED%8D%BC%ED%97%A4%EB%93%9C) |
| 评测 / 好评 | **553–606 条 / 95%**（一手 606 于 21:2x；本次快照 553） | 上游 + 本次搜索快照（动态值） |
| 价格 | **€7.29 / ¥2,090** | [GameWith](https://gamewith.jp/gamedb/18814)（区域价，`[待确认]` 美区） |
| 词库 5 数字 | 有效词 31 / 噪声率 46.6% / 品牌锚定率 53.4% | `paperhead.md` 头部 |

### 2.2 硬门槛（有效词复核 + 内容可写性）

**通过**。31 条中剔除 2 条不指向本作内容：`paperhead movie`（同名影片）、`paperhead te4m`（开发商名，非内容查询）→ **29**。

可写实体：

- 7 把武器及副射击（手枪/霰弹/机枪/加农/火箭/喷火(BFG)/铅笔）——[9k9k 中文新手攻略](https://www.9k9k.com/shouyou/paperheadzt/)
- 13+ 成就及条件（Glaughzoonja / Mascot Horror / Can You Pet the Dog / Super Bandage Boy / ANTIHYPETRAIN…）——[233乐园 全成就](https://new.233leyuan.com/post-detail/2041003039873581056)
- 关卡 EP.0–EP.4+ 与最终 Boss/真反派——[Namu Wiki](https://en.namu.wiki/w/%ED%8E%98%EC%9D%B4%ED%8D%BC%ED%97%A4%EB%93%9C)
- 机制/秘密：铅笔画炸弹与门、踢桶、踩头、滑铲二段跳；隐藏门与彩蛋——[apocanow walkthrough](https://www.apocanow.com/walkthroughs/multi/31907/paperhead)

→ 3 类（武器/关卡/成就+机制）、12–19 页 → 内容扩展 **3**。

### 2.3 需求三道闸门

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **29**（31 − 2） | 通过 |
| 攻略型占比（自数） | Boss/Characters 2 + Guide 1 = **3 / 29 = 10.3%** | **<30% → 封顶 3**；且只有 2 类页型，基准 2（25–39 桶要求 ≥3 类各 ≥3 词，不满足）→ **2** |
| 双源需求信号 | ① 553–606 条 95% ② 4 源发现命中 ③ 免费 EP.0 前作积累 | 通过 |
| 品牌锚定率 | 脚本 53.4%；人工复核 **29/31 = 93.5%** | ≥50%，通过 |

### 2.4 六条固定竞争查询（逐条 top 10）

**Q1 EN `PAPERHEAD wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | gamersgate.com/en-pl/product/paperhead/ | 商店 |
| 2 | dl.3dmgame.com/pc/152434.html | 中文下载站 |
| 3 | namu.wiki/w/페이퍼헤드 | 韩语百科（不计） |
| 4 | whatoplay.com/games/paperhead/ | 数据库 |
| 5 | gamewith.jp/gamedb/18814 | 日语数据库 |
| 6 | fr.vgtimes.com/games/paperhead/ | 法语 |
| 7 | playguilds.com/.../paperhead/ | 日语商店介绍 |
| 8 | dlcompare.ru/nowosti-igry/paperhead-... | 俄语资讯 |
| 9 | tasarot.com/ru/serie/280998295 | 数据库 |
| 10 | gcores.com/games/115377 | 中文社区数据库 |

> 英文**无 wiki / 无专属攻略站**。

**Q2 EN `PAPERHEAD game guide walkthrough`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | 9k9k.com/shouyou/paperheadzt/ | 中文（不计） |
| 2 | 9k9k.com/shouyou/paperheadzt/（重复） | 中文 |
| 3 | gametruth.com/guides/paperhead-combat-healing-pencil-upgrades-guide/ | **薄**（1 类） |
| 4 | apocanow.com/cheats/multi/31907/paperhead | **薄**（走查+秘籍 2 类） |
| 5 | 3dmgame.com/games/paperhead/gl/ | 中文 |
| 6 | gameyj.com/down/53320.html | 中文下载站 |
| 7 | 233leyuan.com/game-detail/2541009 | 中文（EP.0） |
| 8 | 233leyuan.com/post-detail/2041003039873581056 | 中文成就 |
| 9 | apocanow.com/walkthroughs/multi/31907/paperhead | **薄**（同上站） |
| 10 | gamemall.org/en/guides/paperhead-first-session-plan | **薄**（1 类） |

**Q3 EN `PAPERHEAD codes`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | moggydaytrainer.com/en/f/paperhead-trainer | 修改器站（意图错位，不计） |

> 结果不足 10 条，按规则不改变 `P`；`codes` 意图**空白**（无兑换码，只有修改器）。

**Q4 ZH `PAPERHEAD 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | 9k9k.com/shouyou/paperheadzt/ | 中文 |
| 2 | 9k9k.com/shouyou/paperheadzt/ | 中文 |
| 3 | m.gameyj.com/down/53320.html | 中文下载站 |
| 4 | gameyj.com/down/53320.html | 中文下载站 |
| 5 | 233leyuan.com/game-detail/2541009 | 中文 |
| 6 | 233leyuan.com/post-detail/2041003039873581056 | 中文 |
| 7 | 3dmgame.com/games/paperhead/gl/ | 中文 |
| 8 | 3g.ali213.net/gl/html/1404119.html | 中文 |
| 9 | moggydaytrainer.com/en/f/paperhead-trainer | 修改器 |
| 10 | gamemall.org/en/guides/paperhead-first-session-plan | **薄**（同站） |

**Q5 ZH `PAPERHEAD wiki 中文`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/PAPERHEAD/69240850 | 中文百科 |
| 2 | dl.3dmgame.com/pc/152434.html | 下载站 |
| 3 | 9k9k.com/shouyou/paperheadzt/ | 中文 |
| 4 | m.18183.com/ku/PAPERHEAD.html | 中文资料站 |
| 5 | 3h3.com/danji/440001.html | 下载站 |
| 6 | vgtimes.com/games/paperhead/ | 数据库 |
| 7 | fr.vgtimes.com/games/paperhead/ | 法语 |
| 8 | tasarot.com/zh/game/329781389 | 数据库 |
| 9 | 3dm.games/index/steam/detail/app_id/2680280.html | 数据库 |
| 10 | ku.gamersky.com/2024/paperhead/ | 中文资料站 |

**Q6 JA `PAPERHEAD 攻略 wiki 日本語`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | kidsv.gnpp.xyz/paperhead | 日语视频攻略（1 页） |
| 2 | voidu.com/jp/product/paperhead/79521 | 商店 |

> 日文**无 wiki**（仅攻略视频页 + 商店），结果不足 10 条。

### 2.5 P 值计算

| 站 | 类型 | 判定依据 |
|---|---|---|
| gametruth.com | 薄 0.5 | 1 篇战斗指南（治疗/铅笔/升级），无第二类页型 |
| apocanow.com | 薄 0.5 | 同站走查 + 秘籍 2 类，未覆盖 codes/tier/角色 |
| gamemall.org | 薄 0.5 | 1 篇 first-session plan |

`P = 0 + 0.5×3 = 1.5` → 落 `(1, 2]` → 竞争 **3**（可做但要有差异化）。

> **敏感度**：若把这三家按「小站单篇」视作不计（参照大站单篇口径），`P = 0` → 竞争 5 → 总分 15（观察）。本轮按「独立域名 + 1–2 类页型 = 薄」计入，取更保守的 13。

### 2.6 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | 2 | 29 有效词过门禁，但攻略型仅 3/29=10.3%，且只有 2 类页型 → 基准 2（[词库](keyword-results/paperhead.md)） |
| 竞争 | 3 | 3 家薄站（[apocanow 走查](https://www.apocanow.com/walkthroughs/multi/31907/paperhead)、[gametruth](https://www.gametruth.com/guides/paperhead-combat-healing-pencil-upgrades-guide/)、[gamemall](https://www.gamemall.org/en/guides/paperhead-first-session-plan)），无厚站、无 wiki |
| 内容扩展 | 3 | 7 武器 + 13 成就 + 4–5 关卡 + 机制秘密，12–19 页 3 类（[全成就](https://new.233leyuan.com/post-detail/2041003039873581056)） |
| 生命周期 | 5 | 发售 17 天（≤8 周）+ 95% 好评 + 553–606 条评测；Trends `[待确认]`，按评测增速判平稳 |
| **总分** | **13** | **低优先**（若竞争按 5 计 → 15 观察） |

**成本/回本**：同上（域名 0、托管 0、token/人工实测回填）；7 美元级小体量、内容 3 类，回本 PV `[待确认]`，组合口径下优先级低于 17 分候选。

---

## 三、#90 REKA — **可建（17 / 18，口径缺口两算）**

### 3.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 1737870 | [商店页](https://store.steampowered.com/app/1737870/) |
| 开发 / 发行 | Emberstorm Entertainment / Fireshine Games（中文区松竹） | [17173](https://news.17173.com/content/09222026/160118163.shtml) |
| 类型 | 单人女巫生活模拟：鸡脚小屋建造、采集、烹饪、驯兽、分支任务 | 同上 |
| 发售 | EA 2024-09-12 → **1.0 2026-10-26（当日，加简中）** | 上游 + [17173](https://news.17173.com/content/10122026/200702957.shtml) |
| 评测 / 好评 | 近 30 天 **113 条 92%**（一手）；总量 **3.1–3.6k / 82–83%**（三方，动态） | 上游 + [vgspoilers](https://www.vgspoilers.com/game/reka) |
| 价格 | **¥76（折后 ¥68.40）/ 约 $10**；美区 `[待确认]` | [凤凰商城](https://www.fhyx.com/box/v2/item/9081.html) |
| 词库 5 数字 | 有效词 158（脚本）/ 品牌锚定率 81.9% / 单字通用词污染 ~45 | `reka.md` 头部 |

### 3.2 硬门槛（有效词复核 + 内容可写性）

**通过**。158 条中剔除 **49 条**同名/通用义：

- Reka AI / Reka Money / Reka Finance / Reka UI / Reka stock / clip / bar / card / ms200 / colour sand / colour stone / teemor（13 条）
- 匈牙利人名：Rubint / Németh / Lado / György / Bela / Florján / Demoulin（7 条）
- 斯拉夫语河流/地名：Dunav / Neretva / Radika / Una / Uvac / Volga / Rajna / gorska / suncana / u reka / Vikinga（11 条）
- 波兰语 `demon/demoniczna reka`、`demona krwi/lol`、`demon slayer`（5 条）
- `guide ch`（瑞士旅游）、`guide app`、`demo wheel`、`reka services`（4 条）
- 其余（`reka ai clip`、`reka card`、`reka clip`、`reka ui skills` 等）已含在上组，逐条列于词库

→ **109 条**与本作相关（109/158 = **69.0%**，≥50% 通过；但单字品牌可区分性仍是结构性风险，见 3.3）。

可写实体（每条有来源）：

- 30+ 配方：面包/蒜香面包/煎饼/南瓜汤/派/饺子/卷心菜卷/女巫道具（[Dot Esports 全配方](https://dotesports.com/indies/news/all-reka-recipes-cooking-guide)）
- 材料链：谷物/面粉/蛋/罂粟籽/亚麻/黑盐（[TheGamer](https://www.thegamer.com/reka-how-to-complete-trial-of-the-forest-spirit-leshys-favors/)、[GFinity 黑盐](https://www.gfinityesports.com/article/reka-how-to-get-black-salt)）
- 任务/试炼：Leshy 三愿、森林之灵试炼、镜子换装、清墓、Bludnik（[TheGamer tag](https://www.thegamer.com/tag/reka/)）
- 建造/装饰：鸡脚小屋、家具、附魔（[17173 建造](https://news.17173.com/content/10122026/200702957.shtml)）
- 生物/伙伴：Bludnik、可驯服动物（[TheGamer Bludnik](https://www.thegamer.com/reka-how-to-find-bludnik-location/)）
- 法术/能力：篱笆女巫魔法、powers（[games.gg 资料页](https://games.gg/zh-CN/reka/)）

→ ≥5 类、≥30 页 → 内容扩展 **5**。

### 3.3 需求三道闸门与口径缺口

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **109** | 通过 |
| 攻略型占比（自数） | Boss 5 + Build 4 + How-to 15 + Guide 8 + Co-op 3 = **35 / 109 = 32.1%** | 落 **30–50% 且 ≥60 词**的已记录口径缺口 → **同时保留 3 与 4** |
| 双源需求信号 | ① 3.1–3.6k 条 82–83% ② 近 30 天 113 条 92%（1.0 拉升） ③ 4 源发现命中 | 通过 |
| 品牌锚定率 | 脚本 81.9%；人工复核 **109/158 = 69.0%** | ≥50% 通过；**但单字通用词，SERP 品牌可分离性弱**（`REKA` 同时是 AI/金融/人名/河流），标题必须锚定 `REKA game` / `REKA witch game` |

### 3.4 六条固定竞争查询（逐条 top 10）

**Q1 EN `REKA wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | vgspoilers.com/game/reka | 补丁/剧透库（不计） |
| 2 | shuri.gg/games/115384-reka | 数据库 |
| 3 | 2upskill.com/reka-fast-travel-and-cottage-summoning-guide... | **薄**（1 类） |
| 4 | weloveit.io/game/1737870/ | 数据库 |
| 5 | 2upskill.com/reka-game-guide-10-essential-beginner-tips... | **薄**（同站第 2 篇） |

> 无论文 wiki、无 Fandom；结果仅 5 条。

**Q2 EN `REKA game guide walkthrough`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | thegamer.com/reka-how-to-find-bludnik-location/ | 大站（不计） |
| 2 | thegamer.com/reka-how-to-complete-trial-of-the-forest-spirit-leshys-favors/ | 大站 |
| 3 | criticalhits.com.br/dicas/reka-como-encontrar-o-bludnik/ | 葡语（不计） |
| 4 | steamcommunity.com/app/1737870/discussions/0/4630356482652710292 | 社区（不计） |
| 5 | thegamer.com/reka-how-to-change-appearance-find-use-mirror/ | 大站 |
| 6 | steamcommunity.com/app/1737870/discussions/...（en） | 社区 |
| 7 | news.17173.com/content/10122026/200702957.shtml | 中文 |
| 8 | gfinityesports.com/article/reka-how-to-get-black-salt | 大站 |
| 9 | gfinityesports.com/article/reka-how-to-change-your-appearance | 大站 |
| 10 | dotesports.com/indies/news/all-reka-recipes-cooking-guide | 大站 |

> 走查级内容集中在大站（TheGamer/GFinity/Dot Esports），按「大站单篇不计」。

**Q3 EN `REKA game codes`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | fearlessrevolution.com/viewtopic.php?f=4&t=33032 | 修改器论坛（不计） |
| 2 | fungameguides.ru/guides/chity-i-komandy-dlia-reka | 俄语修改器 |
| 3 | ggsel.net/en/catalog/product/rf-sng-reka-steam-kliuc... | 商店（Key） |
| 4 | steamcommunity.com/app/1737870/discussions/0/798965853658938961/ | 社区 |
| 5 | games.gg/zh-CN/reka/ | 聚合页（不计） |
| 6 | plitch.com/tr/games/reka-255960984080875520 | 修改器 |
| 7 | community.wemod.com/t/reka-cheats-and-trainer-for-steam/330029/9 | 修改器 |

> 结果 7 条，无兑换码；`codes` 意图**空白**（只有内置调试菜单，Ctrl+Shift+J）。

**Q4 ZH `REKA 游戏 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | thegamer.com/reka-how-to-find-bludnik-location/ | 大站 |
| 2 | news.17173.com/content/10122026/200702957.shtml | 中文媒体 |
| 3 | criticalhits.com.br/dicas/reka-como-encontrar-o-bludnik/ | 葡语 |
| 4 | dotesports.com/indies/news/all-reka-recipes-cooking-guide | 大站 |
| 5 | ali213.net/zt/reka/ | 中文攻略专题（不计入 P） |
| 6 | steamcommunity.com/app/1737870/discussions/... | 社区 |
| 7 | thegamer.com/reka-how-to-complete-trial-of-the-forest-spirit... | 大站 |
| 8 | thegamer.com/reka-how-to-change-appearance... | 大站 |
| 9 | steamcommunity.com/...（nl） | 社区 |
| 10 | steamcommunity.com/...（ja） | 社区 |

**Q5 ZH `REKA 游戏 wiki 中文`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | 9game.cn/news/10408334.html | 中文媒体 |
| 2 | 163.com/dy/article/L7EFF4DF0526D8LR.html | 中文媒体 |
| 3 | dl.3dmgame.com/pc/140838.html | 下载站 |
| 4 | games.gg/zh-CN/reka/ | 聚合页 |
| 5 | 3dmgame.com/gl/3948487.html | 中文媒体 |
| 6 | wanjiazhan.com/article/gl_3948478.html | 中文媒体 |
| 7 | 3dmgame.com/gl/3948483.html | 中文媒体 |
| 8 | wanjiazhan.com/article/gl_3948487.html | 中文媒体 |
| 9 | fhyx.com/box/v2/item/9081.html | 商店 |
| 10 | douban.com/game/36829672/ | 豆瓣条目 |

> 中文**无成型 wiki**（只有媒体/聚合页）→ 多语言空间成立。

**Q6 JA `REKA ゲーム 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | thegamer.com/reka-how-to-find-bludnik-location/ | 大站 |
| 2 | criticalhits.com.br/dicas/reka-como-encontrar-o-bludnik/ | 葡语 |
| 3 | steamcommunity.com/app/1737870/discussions/...（en） | 社区 |
| 4 | steamcommunity.com/...（ja 板） | 社区 |
| 5 | steamcommunity.com/...（nl） | 社区 |
| 6 | news.17173.com/content/10122026/200702957.shtml | 中文 |
| 7 | ali213.net/zt/reka/ | 中文专题 |
| 8 | criticalhits.com.br/dicas/reka-como-limpar-sepulturas/ | 葡语 |
| 9 | thegamer.com/tag/reka/ | 大站 tag 页 |
| 10 | cozygamingpanda.com/reka-the-complete-cooking-and-recipe-guide/ | **薄**（1 类） |

> 日文**无专属攻略站**（只有 Steam 日语板转贴英文提示）。

### 3.5 P 值计算

| 站 | 类型 | 判定依据 |
|---|---|---|
| 2upskill.com | 薄 0.5 | 2 篇（新手 10 技巧、快速旅行/召唤小屋），2 类，2026-10 更新 |
| cozygamingpanda.com | 薄 0.5 | 1 篇完整食谱，1 类 |
| TheGamer / GFinity / Dot Esports | 不计 | 大站多篇但非专门，按 §3.1「大站单篇」 |
| games.gg / shuri.gg / vgspoilers | 不计 | 聚合/数据库/剧透库 |

`P = 0.5 + 0.5 = 1.0` → 落 `(0, 1]` → 竞争 **4**（只有薄站，可以切）。

### 3.6 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **3 或 4** | 109 有效词、攻略型 35/109=32.1%，落 30–50% 口径缺口；取 3（保守）/ 取 4（按 ≥60 词档） |
| 竞争 | 4 | `P=1.0`（2upskill 0.5 + cozygamingpanda 0.5），无 wiki/Fandom、无厚站（[2upskill](https://2upskill.com/reka-game-guide-10-essential-beginner-tips-and-tricks-to-master-witchcraft/)） |
| 内容扩展 | 5 | ≥30 页、≥5 类：30+ 配方 / 材料链 / 试炼任务 / 建造家具 / 生物伙伴 / 法术（[全配方](https://dotesports.com/indies/news/all-reka-recipes-cooking-guide)） |
| 生命周期 | 5 | 1.0 当日 + 近 30 天 113 条 92% + 总量 3.6k 82–83%，EA 两年持续更新（[vgspoilers 1.0 补丁](https://www.vgspoilers.com/game/reka)） |
| **总分** | **17 / 18** | **可建**（取 3 = 17，取 4 = 18；两算都 ≥17） |

**成本/回本**：域名 0 + 托管 0；5–8 页、≥8,000 词的 token 与人工（≤6h）按台账实测回填，`[待确认]`。RPM $1–5/千次（第三方 2026-08）→ 回本 PV 区间 = 实测成本 ÷ (0.001–0.005)；组合口径，单站不承诺回本。

---

## 四、#91 Tape to Tape — **观察（16）**

### 4.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 1566200 | [商店页](https://store.steampowered.com/app/1566200/) |
| 开发 / 发行 | Excellent Rectangle / Null Games | [SteamDB](https://steamdb.info/app/1566200/info/) |
| 类型 | Roguelite 街机冰球（分支地图、组队、遗物、行贿裁判） | 同上 |
| 发售 | EA 2023-05-03 → **1.0 2026-10-23**（PC/PS5/Switch/Xbox） | 上游 + [Nintendo Life](https://www.nintendolife.com/games/switch-eshop/tape_to_tape) |
| 评测 / 好评 | 近 30 天 **492 条 93%**（一手）；总量 **3,467–3,643 / 92%**（三方，动态） | 上游 + [Steambase](https://steambase.io/games/tape-to-tape/info) |
| 价格 | **$19.99 / £16.75**（1.0 主机版同价） | [Nintendo Life](https://www.nintendolife.com/games/switch-eshop/tape_to_tape) |
| 词库 5 数字 | 有效词 88 / 噪声率 42.1% / 品牌锚定率 57.9% | `tapetotape.md` 头部 |

### 4.2 硬门槛（有效词复核 + 内容可写性）

**通过**。88 条中剔除 1 条误命中 `tape to tape gauze`（医用胶带）→ **87**。

可写实体：

- 19 种 Squad + 4 个起始流派（GM / Violence / Retro / Slapshot）及各自机制（[三无游戏概览](https://www.sanwugame.com/55931.html)）
- 40+ 支球队与精英/Boss 队、Nightmare 难度（同上）
- 球员/超级明星：Gideon、Rory、Willie、Clementine 等及能力（[Steam 讨论](https://steamcommunity.com/app/1566200/discussions/0/3832043983177943859/)）
- 天赋/主动：Slow Mo、Dash、Gas、Magnet 等，S/A 分级（[Speedrun 论坛](https://www.speedrun.com/tape_to_tape/forums/vytze)）
- 遗物/升级：The Rock、Whistle of Time、Rubber Idol、Blademaster、Training Center、Infirmary、No.1 Fan（同上 + 概览）
- 108 个成就（[TrophiesHunter](https://trophieshunter.com/games/tape-to-tape-xbox-series)）

→ ≥4 类、20–29 页（19 Squad 不可能首批发完，按可核验实体取 20–29）→ 内容扩展 **4**。

### 4.3 需求三道闸门

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **87**（88 − 1） | 通过 |
| 攻略型占比（自数） | Codes 1 + Best 2 + Boss 3 + Build 1 + How-to 3 + Guide 8 + Co-op 2 = **20 / 87 = 23.0%** | **<30% → 封顶 3** |
| 双源需求信号 | ① 3.7–3.9k 条 92%、近 30 天 492 条 93% ② 1.0 同步上 4 平台 ③ EA 两年口碑沉淀 | 通过 |
| 品牌锚定率 | 脚本 57.9%；人工复核 **87/88 = 98.9%** | ≥50% 通过（噪声在建议层，有效词几乎全指向本作） |

### 4.4 六条固定竞争查询（逐条 top 10）

**Q1 EN `Tape to Tape wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | minmax.wiki/tape-to-tape | **薄/厚待定**（专属 wiki，见 4.5） |
| 2 | wiki.myehs.eu/wiki/Special:WikiDiscover?offset=tapiadventurewikiwiki... | wiki 农场索引（不计） |
| 3 | askfilo.com/ug405see-ca-2-multimediaapplications-... | 问答站（不计） |
| 4 | speedrun.com/tape_to_tape/forums/vytze | 论坛（不计） |
| 5 | tsp.co.jp/production-log/968 | 视频编辑（意图错位） |

> 结果仅 5 条，其中 2 条是「磁带转录」含义的意图错位。

**Q2 EN `Tape to Tape game guide tips`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | speedrun.com/tr-TR/tape_to_tape/forums/vytze | 论坛 |
| 2 | speedrun.com/id-ID/tape_to_tape/forums/vytze | 论坛 |
| 3 | steamcommunity.com/app/1566200/discussions/0/4331977981789676097/ | 社区 |
| 4 | store.steampowered.com/news/posts/?feed=steam_community_announcements... | 官方公告 |
| 5 | steamcommunity.com/app/1566200/discussions/0/592893795011432536/ | 社区 |
| 6 | steamcommunity.com/app/1566200/discussions/0/3832043983177943859/ | 社区 |
| 7 | truetrophies.com/viewcomment.aspx?commentid=66485 | 奖杯库（不计） |
| 8 | gamecritix.co.uk/tape-to-tape-review/ | 评测（不计） |
| 9 | shipengliang.com/download/switch/... | 中文下载站 |
| 10 | sanwugame.com/55931.html | 中文下载站 |

**Q3 EN `Tape to Tape codes`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | discogs.com/group/thread/809350 | 黑胶蚀刻（意图错位） |
| 2 | patentimages.storage.googleapis.com/29/ef/50/9423fd74f7e5c6/EP1578124B1.pdf | 专利（意图错位） |

> 结果 2 条，全部意图错位 → `codes` 意图**空白**（无兑换码）。

**Q4 ZH `Tape to Tape 游戏 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | steamcommunity.com/app/1566200/discussions/0/4514381183279830251/ | 社区 |
| 2 | sanwugame.com/55931.html | 中文下载站 |
| 3 | xdgame.io/game/roguelite-rink-rebellion | 中文资讯 |
| 4 | shipengliang.com/download/switch/... | 中文下载站 |
| 5 | gamecritix.co.uk/tape-to-tape-review/ | 评测 |
| 6 | pixmofu.com/articles/tape-to-tape-1-0-release-hockey-roguelite | 日语资讯 |
| 7 | 9liyun.com/portal/article/index/id/16271.html | 中文下载站 |
| 8 | xbox.com/zh-tw/games/store/.../9P51DN776TFV | 商店 |

**Q5 ZH `Tape to Tape wiki 中文`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | zhuanlan.zhihu.com/p/594456602 | 知乎（社区，不计） |

> 仅 1 条 → 中文**无 wiki**，多语言空间成立。

**Q6 JA `Tape to Tape 攻略 wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | trophieshunter.com/games/tape-to-tape-xbox-series | 奖杯库（不计） |
| 2 | truetrophies.com/viewcomment.aspx?commentid=69060 | 奖杯库（不计） |
| 3 | sanwugame.com/55931.html | 中文下载站 |

> 仅 3 条；日文无专属 wiki。

### 4.5 P 值计算

| 站 | 类型 | 判定依据 |
|---|---|---|
| minmax.wiki | 薄 0.5（保守）| 独立域名 + 围绕本作，但仅 1 个入口页，未见分页的球员/遗物/天赋目录，且无法确认 4 周内更新 → 按薄计；若核实为多页厚 wiki，`P` 升至 1.0，**竞争仍是 4**（`(0,1]`） |
| trophieshunter / truetrophies | 不计 | 成就奖杯库（聚合列表页） |
| Speedrun 论坛 / Steam 社区 / GameCritix | 不计 | 论坛/社区/评测 |

`P = 0.5`（保守上限 1.0）→ 落 `(0, 1]` → 竞争 **4**。

### 4.6 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | 3 | 87 有效词但攻略型 20/87=23.0% <30%，封顶 3；1.0 后需求真实（近 30 天 492 条） |
| 竞争 | 4 | `P=0.5–1.0`：只有 minmax.wiki 一个专属 wiki（[minmax](https://minmax.wiki/tape-to-tape)），无 Fandom、无攻略站矩阵 |
| 内容扩展 | 4 | 19 Squad + 40+ 队 + 超级明星 + 天赋/遗物 + 108 成就，20–29 页 4 类（[TrophiesHunter](https://trophieshunter.com/games/tape-to-tape-xbox-series)） |
| 生命周期 | 5 | 1.0 仅 3 天（≤8 周）+ 近 30 天 492 条 93% + 4 平台同步发行；Trends `[待确认]` |
| **总分** | **16** | **观察**（差 1 分，卡在需求封顶） |

**成本/回本**：域名 0 + 托管 0；token/人工 ≤6h 实测回填，`[待确认]`；RPM $1–5/千次（第三方 2026-08），组合口径。

---

## 五、#92 GONE Fishing — **可建（17）**

### 5.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 3645890 | [商店页](https://store.steampowered.com/app/3645890/) |
| 开发 / 发行 | GONE Studios（自研自发） | Steam AppDetails 3645890，2026-10-26 复核（原记 ABCT Productions 有误，SourceForge 旧条目不可靠） |
| 类型 | 1–8 人合作恐怖钓鱼：白天钓鱼献祭湖怪，夜里被猎 | 同上 |
| 发售 | EA 2025-06-16 → **1.0 2026-10-20** | 上游 + [RAWG](https://rawg.io/games/gone-fishing-3) |
| 评测 / 好评 | 近 30 天 **220 条 84%**（一手）；总量 **3.1–3.8k / 90–91%**（三方，动态） | 上游 + 本次快照 |
| 价格 | `[待确认]`（本轮商店页 TIMEOUT，未取到一手价） | — |
| 峰值 CCU | **1,631**（三方，抓取日 `[待确认]`） | 上游侦察记录 |
| 词库 5 数字 | 有效词 171（脚本）/ 噪声率 26.9% / 品牌锚定率 73.1% | `gonefishing.md` 头部 |

### 5.2 硬门槛（有效词复核 + 内容可写性）

**通过**。171 条中剔除 **74 条**同名/通用义：

- 钓鱼包船/导游服务 14 条（`guide service kentucky/oswego/pulaski/texoma/richland chambers…`、`charters cairns/cooktown/geelong/annapolis…`）
- BBC 剧集/影视/歌曲/meme 12 条（`2025/2026 release date bbc`、`s9`、`air date`、`movie`、`lyrics`、`song`、`meme`、`sign`、`meaning`）
- 其他游戏/模组 6 条（`payday 2 gone fishing solo`、`fallout 76 gone fishing update`、`mod minecraft`、`mod hytale`、`animal crossing`、`2021 2017`）
- 商品/品牌/地名 10 条（`foamposite`、`marine`、`vip`、`merit`、`pro`、`cairns prices`、`cottages prices`、`wolverton prices`、`u reka` 类价格词）
- 其余平台/下载/下载站/近重复/无关 32 条（`mobile`、`online`、`activity`、`report`、`prof`、`thomas wiki`、`wiki beer`、`wiki heart`、`ted`、`mabel's` 等）

→ **97 条**（97/171 = **56.7%**，≥50% 通过）。

可写实体：

- **80+ 鱼种/捕获物**，含重量区间、稀有度、出没水域（[Fandom Species](https://gonefishing.fandom.com/wiki/Species)）
- **鱼饵表 15+**：Frog 24 / Spider 30 / Minnow 15 / Rat 38 / Human 70 / Baby Polar-Bear 78 等 Bait Power（[Fandom Bait](https://gonefishing.fandom.com/wiki/Bait)）
- **9 个 Perk**（存活 7 天解锁，最多带 2 个）（[Fandom Mechanics](https://gonefishing.fandom.com/wiki/Mechanics)）
- **敌对环境生物 6+**：巨人 / 害羞的人 / 鳄鱼 / 蟒蛇 / 鲨鱼 / 大鱼人 / 巨型蜘蛛（中文攻略，[小红书](https://www.xiaohongshu.com/discovery/item/68f7b49b00000000070349f3)）
- 升级与团队 Totem：Rod / Line / Sinker（个人）+ Totem（团队）、气球商人、祭坛配额（[Steam 指南](https://steamcommunity.com/app/3645890/discussions/0/591770958120924378/)）
- 地图/天气/水深对鱼种的影响（同上）

→ ≥5 类、≥30 页 → 内容扩展 **5**。

### 5.3 需求三道闸门

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **97**（171 − 74） | 通过 |
| 攻略型占比（自数） | Best 1 + Boss 5 + Guide 12 + Co-op 2（solo guide / how to play solo）= **20 / 97 = 20.6%** | **<30% → 封顶 3** |
| 双源需求信号 | ① 3.7–3.8k 条 90–91%、近 30 天 220 条 84% ② 峰值 1,631 CCU ③ 两轮发现命中 | 通过（但近期好评从 87% 降到 84%，需盯 1.0 后口碑） |
| 品牌锚定率 | 脚本 73.1%；人工复核 **97/171 = 56.7%** | ≥50% 通过（裸词是通用习语，标题必须锚定 `GONE Fishing horror game`） |

### 5.4 六条固定竞争查询（逐条 top 10）

**Q1 EN `GONE Fishing game wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | gonefishing.fandom.com/wiki/Mechanics | **厚**（机制/鱼种/鱼饵 ≥3 类） |
| 2 | gonefishing.fandom.com/wiki/Species | **厚**（同站） |
| 3 | baike.baidu.com/item/Gone%20Fishing/6415948 | 中文百科（同名手游） |
| 4 | sourceforge.net/app/gone-fishing/ | 软件库（不计） |
| 5 | gonefishing.fandom.com/wiki/Bait | **厚**（同站） |
| 6 | dl.3dmgame.com/pc/144968.html | 中文下载站 |
| 7 | steamcommunity.com/app/3645890/discussions/0/591770958120924378/ | 社区 |
| 8 | gamewith.jp/gamedb/13763 | 日语数据库 |
| 9 | mmo13.ru/games/145743_gone-fishing | 俄语（不计） |
| 10 | player.gg/explore/games/348447-gone-fishing-1 | 聚合页（不计） |

**Q2 EN `GONE Fishing game guide tips`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | store.steampowered.com/app/3708980/GONE_Fishing_Demo/ | 商店 |
| 2 | dl.3dmgame.com/pc/144968.html | 中文下载站 |
| 3 | store.steampowered.com/app/3708980/ | 商店 |
| 4 | sourceforge.net/app/gone-fishing/ | 软件库 |
| 5 | steamcommunity.com/app/3645890/discussions/0/591770958120924378/ | 社区 |
| 6 | gonefishing.fandom.com/wiki/Mechanics | **厚**（同站） |
| 7 | gonefishing.fandom.com/wiki/Bait | **厚**（同站） |
| 8 | itch.io/post/16642132 | 社区 |
| 9 | player.gg/explore/games/348447-gone-fishing-1 | 聚合页 |
| 10 | rawg.io/games/gone-fishing-3 | 数据库 |

**Q3 EN `GONE Fishing codes Roblox`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | robloxden.com/game-codes/go-fishing | Roblox 同名游戏（意图错位） |
| 2 | gamerant.com/roblox-go-fishing-codes/ | Roblox |
| 3 | supercheats.com/go-fishing-codes-tips | Roblox |
| 4 | robloxcodes.app/codes/go-fishing-codes/ | Roblox |
| 5 | mobilematters.gg/guides/redeem-codes/go-fishing-codes | Roblox |
| 6 | bloxodes.com/codes/go-fishing | Roblox |
| 7 | gamertweak.com/go-fishing-codes/ | Roblox |
| 8 | rockpapershotgun.com/go-fishing-codes | Roblox |
| 9 | vgtimes.com/games/gone-fishing/files/cheats/top-files/ | 修改器库 |
| 10 | pockettactics.com/go-fishing/codes | Roblox |

> 全部是 Roblox `Go Fishing`（另一款游戏）→ 对本作 `codes` 意图**零覆盖**；且本作无兑换码。

**Q4 ZH `GONE Fishing 游戏 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | store.steampowered.com/app/3708980/... | 商店 |
| 2 | dl.3dmgame.com/pc/144968.html | 中文下载站 |
| 3 | store.steampowered.com/app/3708980/ | 商店 |
| 4 | news.17173.com/content/07232025/172419430.shtml | 中文媒体（联机教程） |
| 5 | gonefishing.fandom.com/wiki/Mechanics | **厚** |
| 6 | steamcommunity.com/app/3645890/discussions/0/591770958120924378/ | 社区 |
| 7 | xiaohongshu.com/discovery/item/68f7b49b00000000070349f3 | 中文社区攻略 |
| 8 | sourceforge.net/app/gone-fishing/ | 软件库 |
| 9 | itch.io/post/16642132 | 社区 |
| 10 | mp.weixin.qq.com/s?...（v0.0.2 中文版） | 公众号 |

**Q5 ZH `GONE Fishing wiki 中文`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/Gone%20Fishing/6415948 | 中文百科（同名手游） |
| 2 | xiaohongshu.com/discovery/item/68f7b49b... | 中文社区 |
| 3 | steamlease.cn/gameColumnDetail/49302 | 中文媒体 |
| 4 | gamesstarfield.com/games/39904 | 中文数据库 |
| 5 | mp.weixin.qq.com/s?...（联机/中文版） | 公众号 |
| 6 | mp.weixin.qq.com/s?...（v0.0.2） | 公众号 |
| 7 | indienova.com/game/gone-fishing--1 | 数据库 |
| 8 | lwan.com/news/19489.html | 中文媒体 |
| 9 | btdj.net/75163.html | 下载站 |
| 10 | mp.weixin.qq.com/s?...（中文版） | 公众号 |

> 中文**无成型 wiki**（只有百科/媒体/下载）→ 多语言空间成立。

**Q6 JA `GONE Fishing ゲーム 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | store.steampowered.com/app/3708980/... | 商店 |
| 2 | dl.3dmgame.com/pc/144968.html | 中文下载站 |
| 3 | steamcommunity.com/app/3645890/discussions/0/591770958120924378/ | 社区 |
| 4 | gonefishing.fandom.com/wiki/Mechanics | **厚** |
| 5 | itch.io/post/16642132 | 社区 |
| 6 | sourceforge.net/app/gone-fishing/ | 软件库 |
| 7 | gonefishing.fandom.com/wiki/Bait | **厚** |
| 8 | xiaohongshu.com/discovery/item/68f7b49b... | 中文社区 |
| 9 | mp.weixin.qq.com/s?... | 公众号 |
| 10 | mp.weixin.qq.com/s?... | 公众号 |

> 日文**无专属攻略站**（仅 Steam 日语板/中文转贴）。

### 5.5 P 值计算

| 站 | 类型 | 判定依据 |
|---|---|---|
| gonefishing.fandom.com | **厚 T=1** | 覆盖 Species（80+ 物品/生物）、Bait（物品）、Mechanics（机制）、Perks ≥3 类，构成本作唯一系统资料库；**最后编辑日 `[待确认]`** |
| 其余 | 不计 | sourceforge/player.gg/RAWG 为库/聚合页；Steam 社区、itch、中文媒体不计 |

`P = 1.0` → 落 `(0, 1]` → 竞争 **4**。

> **敏感度**：若 Fandom 被判「骨架/停更 → 薄」，按 §3.1 注「薄 Fandom 的子页面不计」→ `P=0` → 竞争 5 → 总分 **18**；若再计入 1 家薄站 → `P=1.5` → 竞争 3 → 总分 **16**。三种情形均只影响「可建」的裕度，不影响 17 分门槛（保守情形仍 16，需主 Agent 留意）。

### 5.6 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | 3 | 97 有效词，但攻略型 20/97=20.6% <30%，封顶 3；需求真实（3.8k 评测、峰值 1,631 CCU） |
| 竞争 | 4 | `P=1.0`：只有 Fandom 一家厚站（[Mechanics](https://gonefishing.fandom.com/wiki/Mechanics)），无攻略站矩阵、无 codes/tier 竞争 |
| 内容扩展 | 5 | 80+ 鱼种、15+ 鱼饵、9 Perk、6+ 敌对生物、升级/Totem/地图 ≥5 类 ≥30 页（[Species](https://gonefishing.fandom.com/wiki/Species)） |
| 生命周期 | 5 | 1.0 仅 6 天（≤8 周）+ 3.8k 条 91% + 峰值 1,631 CCU；近期 84%，Trends `[待确认]` |
| **总分** | **17** | **可建** |

**成本/回本**：域名 0 + 托管 0；content token/人工 ≤6h 台账实测，`[待确认]`；RPM $1–5/千次（第三方 2026-08），组合口径。注意：本作已有厚 Fandom，建站必须做 Fandom 未覆盖的「怎么打/怎么配/每日路线」，不能再做一份鱼种表。

---

## 六、#93 Ratatan — **观察（15）**

### 6.1 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 2949320 | [商店页](https://store.steampowered.com/app/2949320/) |
| 开发 / 发行 | Ratata Arts / TVT / pH Studio；发行 Game Source Entertainment | [VGC](https://www.videogameschronicle.com/games/ratatan/) |
| 类型 | 节奏 Roguelite 横版动作（Patapon 精神续作，1–4 人线上） | 同上 |
| 发售 | EA 2025-09-18/19 → **1.0 2026-10-14/15**（PS5/PS4/XSX/XB1/Switch/PC） | 上游 + [Baidu Baike](https://baike.baidu.com/item/%E5%95%A6%E5%97%92%E9%93%9B/66766661) |
| 评测 / 好评 | 近 30 天 **165 条 40% Mixed**（一手）；总量 **~3.1–3.3k / 82–83%**（三方，动态） | 上游 + [Steam 商店](https://store.steampowered.com/app/2949320/) |
| 价格 | EA $24.99；1.0 国区 **¥118**（美区 `[待确认]`） | [VGC](https://www.videogameschronicle.com/games/ratatan/) / 上游 |
| 峰值 CCU | **921**（1.0 后三方快照，`[待确认]`） | 上游侦察记录 |
| 词库 5 数字 | 有效词 144 / 噪声率 34.5% / 品牌锚定率 65.5% | `ratatan.md` 头部 |

### 6.2 硬门槛（有效词复核 + 内容可写性）

**通过**。144 条有效词**无同名污染**（噪声只有 `rattan` / `rattataki` / `ratan`，已在噪声表剔除）→ 复核后 **144**。

可写实体：

- **15 个 Boss**：6 世界 Boss（Dekadon / Jolly Hermit / Wagoon / Lord Rosham Bo / Chillwarden / Flipflop）+ 5 世界 Midboss + 4 Hard Mode（[wiki.gg Bosses](https://ratatan.wiki.gg/wiki/Bosses)，最后编辑 2026-10-24）
- **8 名可操作 Ratatan**（Pyokorappa / Nyandola / Mimizukyun / Harigittan / Mashuma / Buttonda / Kamonelo / Keroronpa）+ 100+ Cobun（[Fandom](https://ratatan.fandom.com/wiki/Ratatans)）
- **武器/装备**：每件有等级、稀有度、获取方式（[wikiwiki 武器页](https://wikiwiki.jp/ratatan/%E3%83%9C%E3%83%BC%E3%83%B3%E3%83%87%E3%83%83%E3%83%89%E3%82%B9%E3%83%94%E3%82%A2)）
- **6 条指令** + Fever/Super Fever（[Nintendo 官方介绍](https://www.nintendo.com/jp/topics/article/7c22bd96-d725-402e-84c2-fc27c6c13693)）
- **Dark Ratatans / Shop / 世界 1–5 / 通关后 Endgame**（[wiki.gg](https://ratatan.wiki.gg/wiki/Dark_Ratatans)、[GamerHour](https://gamerhour.net/guides/ratatan-list-of-all-bosses-and-ending/)）

→ ≥5 类、≥30 页 → 内容扩展 **5**。

### 6.3 需求三道闸门

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **144** | 通过 |
| 攻略型占比（自数） | Codes 1 + Tier 4 + Best 2 + Boss 17 + Build 2 + Weapons 1 + How-to 3 + Guide 6 + Co-op 3 = **39 / 144 = 27.1%** | **<30% → 封顶 3** |
| 双源需求信号 | ① 3.1–3.3k 条 82–83% ② 1.0 六平台发行、峰值 921 CCU ③ 3 源发现命中 | 通过；但近 30 天 **165 条 40% Mixed** 是明确负面信号 |
| 品牌锚定率 | 脚本 65.5%；人工复核 **144/144 = 100%** | ≥50% 通过（无同名游戏） |

### 6.4 六条固定竞争查询（逐条 top 10）

**Q1 EN `Ratatan wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/啦嗒铛/66766661 | 中文百科 |
| 2 | videogameschronicle.com/games/ratatan/ | 大站数据库 |
| 3 | gry-online.pl/gry/ratatan/z466e3 | 游戏库 |
| 4 | gamerant.com/db/video-game/ratatan/ | 大站数据库 |
| 5 | gematsu.com/?post_type=games&p=823279 | 数据库 |
| 6 | patapon.fandom.com/wiki/Ratatan | 系列 Fandom 单页（非本作专属，不计） |
| 7 | tvtropes.org/pmwiki/pmwiki.php/Characters/Ratatan | TV Tropes（不计） |
| 8 | dualshockers.com/tag/ratatan/ | 大站 tag |
| 9 | ign.com.cn/ratatan | 大站数据库 |
| 10 | ratatanwiki.com/about/ | 日语（不计） |

> 本轮 6 条查询的 top 10 里**没有英文本作 wiki**；`ratatan.wiki.gg` 是补查确认的专属 wiki（见 6.5）。

**Q2 EN `Ratatan game guide tips`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | nintendo.com/jp/topics/article/7c22bd96-... | 官方（不计） |
| 2 | bilibili.com/video/BV1E6TTz9E9k/ | 视频 |
| 3 | esportstw.com/news/584702/ | 中文媒体 |
| 4 | store.steampowered.com/app/2949320/Ratatan/ | 商店 |
| 5 | appbank.net/2026/10/15/game/3133308.php | 日语媒体 |
| 6 | 925g.com/pingce/299387.html | 中文媒体 |
| 7 | noobfeed.com/articles/ratatan-best-elements-ratakaruta-tier-list | **薄**（1 类） |
| 8 | backloggd.com/u/DryboSuperStar/review/4186751/ | 社区评测 |
| 9 | gamerhour.net/guides/ratatan-list-of-all-bosses-and-ending/ | **薄**（1 类） |
| 10 | appmedia.jp/ratatan/78979544 | 日语（不计） |

**Q3 EN `Ratatan codes`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | vgtimes.com/games/ratatan/files/cheats/tables/ | 修改器库 |
| 2 | vgtimes.com/games/ratatan/files/ | 修改器库 |
| 3 | vgtimes.com/games/ratatan/files/87467-table-for-cheat-engine... | 修改器库 |
| 4 | gry-online.pl/gry/ratatan/mody-trainery/z466e3 | 修改器库 |
| 5 | gamepressure.com/games/ratatan/mods-trainers/z466e3 | 修改器库 |
| 6 | kickstarter.com/projects/ratata-arts/ratatan/posts/4327415/comments | 众筹评论（不计） |
| 7 | plitch.com/zh/games/ratatan-390424994867580928 | 修改器 |
| 8 | apocanow.de/cheats/multi/31861/ratatan | 修改器库 |
| 9 | fearlessrevolution.com/viewtopic.php?f=5&p=470483 | 修改器论坛 |
| 10 | playground.ru/ratatan/cheat/ratatan_tablitsa_8... | 修改器库 |

> 全是修改器/众筹 backer code → `codes` 意图**空白**。

**Q4 ZH `Ratatan 游戏 攻略`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | bilibili.com/video/BV1E6TTz9E9k/ | 视频 |
| 2 | nintendo.com/jp/topics/article/7c22bd96-... | 官方 |
| 3 | 925g.com/pingce/299387.html | 中文媒体 |
| 4 | store.steampowered.com/app/2949320/Ratatan/ | 商店 |
| 5 | doyo.cn/soft/1605.html | 中文下载站 |
| 6 | xiaohongshu.com/discovery/item/68d8e3ee... | 中文社区 |
| 7 | esportstw.com/news/584702/ | 中文媒体 |
| 8 | appmedia.jp/ratatan/78979544 | 日语 |
| 9 | appmedia.jp/ratatan/79308764 | 日语 |
| 10 | appmedia.jp/ratatan/78976070 | 日语 |

**Q5 ZH `Ratatan wiki 中文`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/啦嗒铛/66766661 | 中文百科 |
| 2 | asia.gamesource-ent.com/.../detail/783 | 发行商页 |
| 3 | 9game.cn/news/10842100.html | 中文媒体 |
| 4 | bilibili.com/read/cv25449120/ | 中文社区 |
| 5 | gamesstarfield.com/games/57633 | 中文数据库 |
| 6 | dl.3dmgame.com/pc/143159.html | 中文下载站 |
| 7 | 3dmgame.com/gl/3961175.html | 中文媒体 |
| 8 | bilibili.com/opus/1054630100046184483 | 中文社区 |
| 9 | 0day.ali213.net/html/2023/84563.html | 中文下载站 |
| 10 | aaaplayer.com/17379.html | 中文下载站 |

> 中文**无成型 wiki**（只有百科/媒体），多语言空间成立。

**Q6 JA `ラタタン 攻略 wiki`**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | wikiwiki.jp/ratatan/ラタタン | 日语 wiki（不计） |
| 2 | wikiwiki.jp/ratatan/TIPS | 日语 wiki |
| 3 | wikiwiki.jp/ratatan/小ネタ・隠し要素など | 日语 wiki |
| 4 | appmedia.jp/ratatan/78979544 | 日语媒体 |
| 5 | gamerch.com/ratatan/ | 日语 wiki |
| 6 | appmedia.jp/ratatan/79304423 | 日语媒体 |
| 7 | ratatanwiki.com/world/519/ | 日语 wiki |
| 8 | ratatanwiki.com/ | 日语 wiki |
| 9 | ratatanwiki.com/world/684/ | 日语 wiki |
| 10 | appmedia.jp/ratatan/78976070 | 日语媒体 |

> 日文生态**非常成熟**（wikiwiki + gamerch + ratatanwiki + AppMedia 三家以上），但按规则不计入英文 `P`。

### 6.5 P 值计算

| 站 | 类型 | 判定依据 |
|---|---|---|
| ratatan.wiki.gg | **厚 T=1** | 独立域名 + 围绕本作 + 覆盖 Boss（15 页）/角色（Cobuns、Dark Ratatans）/物品（Shop）≥3 类；最后编辑 **2026-10-24**（[Bosses](https://ratatan.wiki.gg/wiki/Bosses)） |
| noobfeed.com | 薄 0.5 | 1 篇 Elements + Ratakaruta Tier List |
| gamerhour.net | 薄 0.5 | 1 篇全 Boss + 结局 |
| ratatan.fandom.com | 不计 | 只有 8 个角色 stub，无 codes/tier，按 §3.1 注薄 Fandom 不计 |
| howtovideogame / gametruth | 不计 | 未进 6 条查询 top 10，补查发现；若计入各 +0.5（见敏感度） |

`P = 1.0 + 0.5 + 0.5 = 2.0` → 落 `(1, 2]` → 竞争 **3**。

> **敏感度**：若把补查发现的 howtovideogame（2 篇）与 gametruth（1 篇）各计 0.5，`P=3.0 → ≥3 硬放弃`。本轮按 Profile「以 6 条固定查询 top 10 为准」不计入，但主 Agent 决策时应知道：**英文攻略生态正在快速铺开**，这是本候选最大的下行风险。

### 6.6 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | 3 | 144 有效词，攻略型 39/144=27.1% <30% 封顶 3；需求真实但口碑转差（近 30 天 40% Mixed） |
| 竞争 | 3 | `P=2.0`：1 家厚站（[wiki.gg](https://ratatan.wiki.gg/wiki/Bosses)，10-24 仍在更新）+ 2 家薄站，需差异化 |
| 内容扩展 | 5 | 15 Boss + 8 Ratatan + 100+ Cobun + 武器/物品 + 6 指令 + 5 世界，≥30 页 ≥5 类（[wiki.gg Bosses](https://ratatan.wiki.gg/wiki/Bosses)） |
| 生命周期 | 4 | 1.0 仅 12 天（≤8 周）但近 30 天 **165 条 40% Mixed**、峰值 921 CCU，热度回落 → 扣 1（Trends `[待确认]`） |
| **总分** | **15** | **观察** |

**成本/回本**：域名 0 + 托管 0；token/人工 ≤6h 实测回填，`[待确认]`；RPM $1–5/千次（第三方 2026-08），组合口径。

---

## 七、本轮结论

### 7.1 判定表

| # | 游戏 | P | 需求 | 竞争 | 内容 | 生命周期 | 总分 | 判定 |
|:--:|---|:--:|:--:|:--:|:--:|:--:|:--:|---|
| 86 | Stygian: Outer Gods | 0 | 3 | 5 | 4 | 4 | **16** | **观察** |
| 88 | PAPERHEAD | 1.5 | 2 | 3 | 3 | 5 | **13** | **低优先** |
| 90 | REKA | 1.0 | 3 / 4 | 4 | 5 | 5 | **17 / 18** | **可建** |
| 91 | Tape to Tape | 0.5–1.0 | 3 | 4 | 4 | 5 | **16** | **观察** |
| 92 | GONE Fishing | 1.0 | 3 | 4 | 5 | 5 | **17** | **可建** |
| 93 | Ratatan | 2.0 | 3 | 3 | 5 | 4 | **15** | **观察** |

### 7.2 本轮可建站数量 = **2**（REKA、GONE Fishing）

- **REKA**：17（需求取 3）/ 18（取 4），两算都过 17。唯一不过的组合是「需求取 3 **且** 竞争再 +1 家薄站」→ 16，主 Agent 可按 §2.2 口径缺口决定取 3 还是 4。
- **GONE Fishing**：17（Fandom 厚）；若 Fandom 判薄 → 18；若再计 1 家薄站 → 16。建议建站前先核 Fandom 最后更新日。
- **Stygian**（16）与 **Tape to Tape**（16）差 1 分：Stygian 差在生命周期（1.0 当日但 517 条 79%、峰值 22–49 CCU、Trends `[待确认]`）；Tape to Tape 差在需求封顶（攻略型 23.0% <30%）。两者都建议下一轮补 Trends / 补 1–2 周口碑后再评。
- **Ratatan**（15）：英文攻略生态（wiki.gg 10-24 仍在更新）已成型，且 1.0 后近 30 天 40% Mixed，风险偏高。
- **PAPERHEAD**（13）：攻略型 10.3%、内容面只有 3 类，属小体量；只在竞争按 5 计时才到 15。

### 7.3 数据缺口与本轮影响

| 缺项 | 影响 | 处理 |
|---|---|---|
| Steam 一手评测/价格（`appdetails` 空响应、商店页 TIMEOUT/ECONNREFUSED） | 评测数/好评率为 21:2x 一手 + 本次三方快照并列，可能隔日变动 | 标 `[待确认]`，不影响四维（生命周期用的是量级） |
| 6 个候选的 Google Trends 28 天 | Stygian 生命周期 4→5 可到 17；Ratatan 4 是否再降 | 一律 `[待确认]`，按评测/CCU 现有证据取值 |
| GONE Fishing Fandom 最后编辑日 | 厚/薄判定 → 竞争 4 或 5 | 标 `[待确认]`，两种都 ≥17 |
| minmax.wiki 的 Tape to Tape 页数与更新日 | 厚/薄 → P 0.5 或 1.0 | 两种都是竞争 4，总分 16 |
| REKA 美区价、GONE Fishing 价格、Ratatan 1.0 美区价 | 只影响成本栏，不影响评分 | `[待确认]` |

> 本轮未发现可建候选为 0 的情形；两处边界（REKA 需求 3/4、GONE Fishing 竞争 4/5）已按规则同时列出两种算法，供主 Agent 决策。
