# 候选分析 — #84 Never Be Alone（2026-10-28）

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维口径、需求三道闸门、`P = T + 0.5t`、2026-10-28 硬否决 + ≥14 分级）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/neverbealone.md`
> SERP：WebSearch（2026-10-28，美区 `hl=en`；中文/日文按原样跑），每条记前 10（不足 10 条如实记）
> 一手抓取限制：`store.steampowered.com` / `store.steampowered.com/api/appdetails` / `steamdb.info` 本机全部 TCP 超时或 403（2026-10-28 实测，`curl --max-time 30` 与 TCP 直连均失败）→ 发售日与 wishlist 以「Steam 页面在第三方引用中的原文」为准，**逐条标「二手」**，未编造
> 未做：未建站、未改站点目录、未改 `CANDIDATE-POOL.md`、未改 `INDEX.md`、未 commit

## 0.1 本轮方法论补充（影响结论，MUST 看）

**WebSearch 的 SERP 对「未发售游戏的新建攻略站」会系统性漏报。** 本轮按规则跑完 6 条查询后，SERP 前 10 里一家专门攻略站都没有（P=0）；但**按域名实测**（`dig` + 直取 HTML），本作已有 **2 家英文专门攻略站**在跑，且都在 4 天内更新过、都挂着 Adsterra + GA4：

| 站 | 实测内容 | 更新日 |
|---|---|---|
| `neverbealone.wiki` | 15 个内容页（guide 7 + info 8），`infected-types` 页正文 ≈3,700 词 | 2026-10-24（sitemap/rss 的 `lastmod`/`pubDate`） |
| `neverbealonegame.wiki` | 13 个内容页（`/game-info/` 下 infected / maps / guides / gameplay / co-op / demo / price / release-date / system-requirements / updates 等），`infected` 页正文 ≈1,580 词 | 页面日期 2026-10-20 |

`23-Profile` 明确写「MUST NOT 把『搜不到』当『没有』」——所以本报告给 **两个 P 值**：`P(SERP) = 0`，`P(实测) = 2.0`；**主口径取 `P(实测)=2.0`**（更保守，且符合 Profile 原意）。这条建议同步进 Profile（见文末）。

---

## 一、基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **2988120**（Demo：3012110） | Steam 商店页被本机网络阻断，appid 由词库脚本记录 + SERP 返回的 URL 双重确认（2026-10-28） |
| 开发 / 发行 | Jonas Jensen、Wes Larkin / **Beast Studios** | [AUTOMATON](https://automaton-media.com/articles/newsjp/never-be-alone-20260523-444732/)（二手）、[Game\*Spark](https://www.gamespark.jp/article/2026/10/20/173822.html)（二手） |
| 类型 | 开放世界僵尸生存；单人 + host 制无缝 co-op（人数上限由主机性能决定）；体素风 | 同上 |
| 发售 | **2026-12-08 抢先体验**（距今日 **41 天 / 5.9 周**） | [AUTOMATON](https://automaton-media.com/articles/newsjp/never-be-alone-20260523-444732/)（二手，2026-05-23）；[163](https://www.163.com/dy/article/L79314HM0526D8LR_pdya11y.html)、[gdfzsh](https://www.gdfzsh.cn/news/3572.html) 同口径 |
| Demo | Next Fest 期间 2026-10-20 – 10-27；Demo 首发 10-19 | [pixmofu](https://pixmofu.com/articles/never-be-alone-demo-steam-next-fest)（二手） |
| 第三方信号 | **Valve 十月 Next Fest「最热 demo」榜第 1**（榜内另有 Grr Grr Gnomes、Wyldheart） | [goha.ru 转 Valve/IGN 榜](https://forums.goha.ru/showthread_0_0_p161163679)（二手）、[v2.fi](https://v2.fi/uutiset/pelit/42045/Naita-peleja-on-pelattu-eniten--Steam-Next-Festin-satoa/)（二手） |
| wishlist | **185,000+**（2026-09）；Steam 官方 news 里程碑 150K+；StatsWell 估 ~146K（wishlist 排名 ~310） | [pixmofu](https://pixmofu.com/articles/never-be-alone-demo-steam-next-fest)（二手）、[StatsWell](https://statswell.com/steam/game/2988120-never-be-alone)（第三方估算） |
| 语言 | 含**简体中文 / 繁中**（Steam 页 `?l=schinese`、`?l=tchinese` 索引存在） | SERP 返回的 Steam URL（二手） |
| 词库 5 数字 | 原始 159 / 去重 133 / **有效词 89** / 噪声 33.1% / 锚定率 66.9% | `keyword-results/neverbealone.md` 头部 |

---

## 二、硬门槛（有效词逐条复核）

### 2.1 内容可写性：**通过**

开放世界生存有明确系统（建造/制作/电力/载具/枪械改装/技能/天气/温度/饥饿/多结局），Steam 官方页逐条列了机制，可写实体充足。

### 2.2 有效词复核：**89 → 40**（MUST NOT 照抄研究员数字）

**为什么要重审**：锚定词 `Never Be Alone` 是一个**被多首歌占满的英文短语**（Skillet、David Guetta & Morten feat. Aloe Blacc、Shawn Mendes、Shadrow 的 FNAF 同人曲、Lemon Demon），外加《鬼灭之刃》剪辑、书、通用心理学短语。采集脚本的「有效」判定是**子串匹配锚定词**，歌名因此全部通过——这就是 66.9% 锚定率与真实语义锚定率相差一倍的原因。

| 原分类 | 原条数 | 剔除（撞名/通用义） | 保留（真指向本作） | 剔除样例 |
|---|:--:|:--:|:--:|---|
| Info/发售平台 | 44 | **12** | 32 | `deepside deejays … release date`、`… demon slayer` ×3、`… fnaf release date`、`… lemon demon` ×2、`… shadrow release date`、`… shawn mendes release date`、`i can never be alone reddit`、`people who can never be alone reddit`、`never be alone with a woman at work reddit` |
| Other | 43 | **35** | 8 | 歌/曲：`… lyrics`、`… chords`、`… guitar tab`、`… piano`、`… song`、`… singer`、`… shadrow`、`… shawn mendes`、`… marshmello`、`… osu map`；作品：`… book`、`… fnaf`、`… but doors`、`… chikn`、`… help wanted`；通用：`… meaning`、`… mep`、`… topic`、`… words`、`… r`；无法判定：`… 10`、`… 2023`、`… 2024`、`… modify`、`… repeat`、`… war`、`…'` |
| Build/Class | 1 | **1** | 0 | `never be alone skillet` —— **Skillet 是乐队名**，是歌不是职业 |
| Guide/Beginner | 1 | **1** | 0 | `never be alone guitar tutorial` —— 吉他教学，不是游戏攻略 |
| **合计** | **89** | **49** | **40** | — |

**语义锚定率复算：40 / 133（去重后）= 30.1%**，不是 66.9%。按 §4 表格，30–50% 属「可疑」，而本作是**踩线**（30.1%），且污染的成因已定位（短语撞名），不是写法错误——换别名（`Never Be Alone Beast Studios`/`Never Be Alone zombie`）可作复采方向，但语义上「Never Be Alone」这个名字本身抢不动导航词。

### 2.3 页型分布复核

| 页型 | 条数 | 说明 |
|---|:--:|---|
| FAQ/发售信息（release date / platform / price / demo / early access / steam / xbox / ps5） | **32** | 全部是「什么时候出、上不上主机、多少钱」 |
| 导航/品牌（`never be alone game`、`… creator`、`… gameplay`、`… genre`、`… map`、`… 100h`、`… game mobile`、`… game console`） | **8** | 首页/关于页承接，`map` 可做 1 页（三岛地图） |
| 攻略型（Codes / Tier / Boss / Build / Weapons / How-to / Beginner / Co-op） | **0** | 见下 |

**采集器的 5 次空返回已经说明问题**：`codes` 0 条、`boss` 0 条、`best weapons` 0 条、`beginner guide` 0 条；`guide` 只回 3 条且全是吉他教学。

---

## 三、需求（三道闸门）

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **40**（研究员口径 89） | 通过 |
| 攻略型占比 | **0 / 40 = 0.0%** | **触发「发售日陷阱」→ 需求封顶 3** |
| 页型覆盖 ≥3 类各 ≥3 词 | 实际只有 2 类（FAQ 32 / 导航 8），攻略型 0 类 | **不通过** → 按 §5「只能落 2–3 分」 |
| 双源 | ① Suggest（40 词）② Valve Next Fest 最热 demo 第 1 ③ 185K wishlist ④ 发售 41 天后 | 通过（不是单源），但**四个信号全部指向「想玩/想买」，没有一条指向「想找攻略」** |

**判定：需求 = 2（严格读法）/ 3（按词量档 40–59 取 4 再被 30% 线压到 3）。**

- 取 **2** 的依据：40 个词 100% 是发售信息，页型只有 1 类，`攻略型 <30%` 的修正是「封顶」不是「保底」，叠加页型闸门不通过 → 落 2；
- 取 **3** 的依据：词量 40 落在 40–59 档，修正只封顶到 3，不再下压。

**这是「硬否决边缘」（需求 2/3 之间），按 `23-Profile` 异常处理 MUST 标「需主管决策」，两种取法都写清。**

---

## 四、竞争（6 条固定查询 + 域名实测）

### Q1 EN `Never Be Alone Beast Studios zombie survival game wiki`（返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | dl.3dmgame.com/pc/152265.html | 中文游戏库（非专门，且中文不计 P） |
| 2 | in.ign.com/never-be-alone | IGN 游戏库（非专门） |
| 3 | store.steampowered.com/app/3012110（Demo） | 商店（不计） |
| 4 | store.steampowered.com/app/2988120/allnews | 商店新闻（不计） |
| 5 | news.17173.com/content/09212026/101641102.shtml | 中文媒体（不计） |
| 6 | store.steampowered.com/app/2988120/?l=koreana | 商店（不计） |
| 7 | vgtimes.com/gaming-news/143704-… | 媒体（不计） |
| 8 | ku.gamersky.com/2024/never-be-alone/ | 游民星空库（不计） |
| 9 | embed.gog.com/dreamlist/game/never-be-alone | 商店 wishlist（不计） |
| 10 | automaton-media.com/articles/newsjp/never-be-alone-20260523-444732/ | 日文媒体（不计 P） |

> 前 10 **0 家专门攻略站**。

### Q2 EN `Never Be Alone Beast Studios game guide tips`（仅返回 7 条，含噪声）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | dl.3dmgame.com/pc/152265.html | 中文库（不计） |
| 2 | itch.io/post/13071100（Between Beasts） | 意图错位（不计） |
| 3 | wenshan789.cn/…/9176913.html（**永不孤单**攻略） | **意图错位**——《Never Alone》是另一款 2014 游戏（不计） |
| 4 | trueachievements.com/viewcomment.aspx?commentid=1967072 | 论坛（不计） |
| 5 | itch.io/post/13238044（Beast Companions） | 意图错位（不计） |
| 6 | store.steampowered.com/app/3012110 | 商店（不计） |
| 7 | itch.io/post/9304790 | 意图错位（不计） |

### Q3 EN `Never Be Alone game codes`（仅返回 1 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | keysforgames.co.uk/games/steam-games/never-be-alone/ | CD-Key 转售（意图错位，不计） |

> 结果 1 条 → `codes` 意图**空白**（游戏无兑换码）。按 §2.3「SERP 不足 10 条 → 按 P=0 处理」，不改变 P。

### Q4 ZH `Never Be Alone 攻略 僵尸 生存 游戏`（返回 4 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | steamdb.info/patchnotes/21059693/ | 更新日志（不计） |
| 2 | dl.3dmgame.com/pc/152265.html | 中文库（不计 P） |
| 3 | store.steampowered.com/app/3012110/?cc=cn | 商店（不计） |
| 4 | xiaohongshu.com/discovery/item/695bcc2a… | 社区帖/推荐（不计） |

> 中文**没有**攻略站，只有库页与一条小红书玩法推荐。

### Q5 ZH `Never Be Alone 游戏 wiki 中文`（返回 5 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | playtestgames.net/zh-cn/games/2988120 | 多游戏聚合数据页（非专门） |
| 2 | 0day.ali213.net/html/2024/117711.html | 中文库页《不会孤单》（不计） |
| 3 | 163.com/dy/article/L79314HM0526D8LR_pdya11y.html | 中文媒体（不计） |
| 4 | store.steampowered.com/app/2988120/?l=schinese | 商店（不计） |
| 5 | gdfzsh.cn/news/3572.html | 中文媒体（不计） |

### Q6 JA `Never Be Alone 攻略 ゲーム 日本語`（仅返回 1 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | pixmofu.com/articles/never-be-alone-demo-steam-next-fest | 日文介绍博客（非专门，不计 P） |

> 日文**零攻略站**，只有介绍文。

### Q7 补充（规则外，用于排除「搜不到≠没有」）`Never Be Alone wiki`（字面，返回 10 条）

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | dl.3dmgame.com/pc/152265.html | 中文库 |
| 2 | en.wikipedia.org/…/Never_Be_Alone | 维基百科（**是歌曲**，意图错位） |
| 3 | ja.namu.wiki/w/Never%20Be%20Alone | 韩语 wiki（**FNAF 同人曲**，意图错位） |
| 4 | thegamesdb.net/game.php?id=140744 | 数据库 |
| 5 | kotaku.com/games/never-be-alone | 大站游戏库（非专门） |
| 6 | playtestgames.net/zh-cn/games/2988120 | 聚合数据页 |
| 7 | ku.gamersky.com/2024/never-be-alone/ | 游民星空库 |
| 8 | rutab.net/b/video-games/… | 俄文媒体 |
| 9 | store.steampowered.com/app/2988120/?l=tchinese | 商店 |
| 10 | instant-gaming.com/en/24384-buy-never-be-alone-pc-steam/ | key 转售 |

> 字面查询暴露的正是词库污染同源问题：第 2、3 名是歌。**SERP 里依然 0 家专门站。**

### Q8 域名实测（关键补充，非 SERP）

| 站 | 判定 | 依据 |
|---|---|---|
| **neverbealone.wiki** | **厚 `T=1`** | 独立域名、只做本作；15 个内容页（beginner / base-building / co-op / crafting-and-storage / infected-types / vehicles / vs-surroundead + demo / early-access-vs-demo / platforms / price / release-date / system-requirements / updates / what-is）≥5 类；`sitemap`/`rss` 的 `lastmod`=**2026-10-24**（4 天前）；`infected-types` 正文 ≈3,700 词；站内挂 Adsterra Social Bar + GA4 |
| **neverbealonegame.wiki** | **厚 `T=1`** | 独立域名、只做本作；13 个内容页（`/game-info/` 下 infected / maps / guides / gameplay / co-op / demo / discord / price / release-date / system-requirements / updates + about）；页面日期 **2026-10-20**（8 天前）；`infected` 正文 ≈1,580 词 |
| playtestgames.net | 非专门（不计） | 多游戏聚合数据页 |
| 3DM / 游民 / IGN / Kotaku / Gematsu 类 | 非专门（不计） | 库页/媒体，不围绕本作 |

### 4.1 P 值

| 口径 | T | t | P | 竞争分 |
|---|:--:|:--:|:--:|:--:|
| SERP-only（6 条查询） | 0 | 0 | **0** | 5 |
| **SERP + 域名实测（主口径）** | **2** | 0 | **2.0** | **2**（「2 家厚站，难」） |

**取竞争 = 2。** 敏感度：若按 `(1,2]` 档取 3 → 总分 +1；若再发现第 3 家厚站 → `P=2.5–3` → 触发「需主管决策」，`P≥3` → 硬放弃。

> 实质提醒：这两家站**恰好覆盖了我们原本会做的页型**（新手/基地/联机/制作/感染体/载具/发售信息），且都早于本报告 4–8 天发布、都已挂 Adsterra。晚入场且无差异化 = 重复造轮子。

---

## 五、内容扩展（只数可核验的具体实体）

| 类别 | 可核验实体 | 来源 |
|---|---|---|
| 感染体 | **11 类**：Sprinter、Feral、Toxic 变异体、Brute、Night Roarer（夜行稀有精英）、Screamer/Bloater（喊叫召怪）等，行为/强弱各不相同 | [Game\*Spark](https://www.gamespark.jp/article/2026/10/20/173822.html)（二手，引官方）、[pixmofu](https://pixmofu.com/articles/never-be-alone-demo-steam-next-fest)（二手）、词库 `never be alone boss` 0 条（无 boss 词） |
| 人类阵营 | 军方、匪帮、掠夺者/拾荒者（各有地盘与动机） | 同上 |
| 生存机制 | 生命/饥饿/口渴/体温、动态天气与季节、昼夜、雪地泥地**足迹追踪**、噪音引怪、辐射区（需防毒面具）、安全区与 NPC 商店 | 同上 |
| 基地/电力 | 建造与防御工事、发电机、太阳能/风电（发电量随时间/天气/云量变化）、工作台与修理台 | 同上 |
| 载具 | 载具油量与损伤、co-op 补给运输 | 同上 |
| 武器/改装 | 枪械/弓/近战；瞄具、消音器、手电、扩容弹匣（=4 项具名配件） | 同上 |
| 地图/剧情 | **3 座岛**、30+ 主线、1,000+ 配音、Demo 内 2 个结局 / 8 种事件走向、多结局分叉 | 同上 |
| 技能 | 技能树与角色属性、角色自定义 | 同上 |

**可写页数**：敌人图鉴（11）、机制（≥10）、基地建造（≥5）、任务/结局（30+ 主线 + 结局分叉）、FAQ（8）→ **20–29 页、≥4 类**；
**+1 多语言**：中文攻略实测为零（Q4/Q5 无中文攻略站），游戏官方含简中 → 多语言机会成立。
→ **内容扩展 = 4（base）+ 1 = 5**（若主 Agent 不认多语言加分，则 4）。

---

## 六、生命周期

| 证据 | 值 | 判断 |
|---|---|---|
| 发售日 | **2026-12-08**（EA），距今日 **41 天 = 5.9 周** | 未发售、**定档 ≤8 周** → 5 分档 |
| 热度 | Valve 十月 Next Fest **最热 demo 第 1**；185K wishlist | 强 wishlist + demo，满足「wishlist 强」 |
| Trends 28 天 | **[待确认]**（本次未取到 Google Trends，未估算） | — |
| EA 计划 | 官方称 EA 将持续「many many years」，EA 期定价更低 | 长期运营，不是一次性上线 |

→ **生命周期 = 5**（定档 41 天内 + Next Fest 第 1 + 185K wishlist）。风险：发售窗口内流量峰值高但衰减快（正是需求口径担心的那类曲线）。

---

## 七、四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **2**（边界取 3） | 有效词复核 **40**（研究员 89，剔除 49 条歌名/《鬼灭》剪辑/吉他教学/通用短语），**攻略型 0/40 = 0%**，40 词全是发售信息、页型只 1 类 → 触发发售日陷阱封顶 3，再叠页型闸门落 2（[词库](keyword-results/neverbealone.md)、[AUTOMATON](https://automaton-media.com/articles/newsjp/never-be-alone-20260523-444732/)） |
| 竞争 | **2** | **`P = 2.0`（2 家厚站）**：[neverbealone.wiki](https://neverbealone.wiki/) 15 页 5 类、2026-10-24 更新、infected 页 ≈3,700 词；[neverbealonegame.wiki](https://neverbealonegame.wiki/) 13 页、2026-10-20 更新——SERP 前 10 两家都没出现（漏报），靠域名实测才看到 |
| 内容扩展 | **5**（保守 4） | 11 类感染体 + 3 阵营 + ≥10 机制 + 基地/电力 + 载具 + 4 项具名配件 + 3 岛/30+ 任务/多结局 → 20–29 页 ≥4 类；中文攻略实测为零 → **多语言 +1** |
| 生命周期 | **5** | 定档 **2026-12-08**（41 天 ≤8 周）+ Valve 十月 Next Fest 最热 demo **第 1** + 185K wishlist（[v2.fi](https://v2.fi/uutiset/pelit/42045/Naita-peleja-on-pelattu-eniten--Steam-Next-Festin-satoa/)、[StatsWell](https://statswell.com/steam/game/2988120-never-be-alone)）；Trends `[待确认]` |
| **总分** | **14**（需求取 3 时 **15**） | 竞争取 3 时 **15 / 16** |

---

## 八、成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | **[待实测]** | 建站后回填台账 |
| 人工 | **[待实测]**（目标 ≤6 小时/站） | 台账「实际人工小时」 |
| **回本 PV** | `总成本 ÷ (RPM/1000)`，RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺） | **组合回本**口径 |

现金成本为 0，单站「回本 PV」只在把 token/人工折算后才成立。折算示例（**示例，不是预估**）：每投入 ¥10（≈$1.4）→ RPM $1 需 **1,400 PV**、RPM $5 需 **280 PV**。跑通线 30 天 300 PV ≈ **$0.3–1.5**。本作需求全是发售 FAQ 词，峰值集中在 12-08 前后，**衰减曲线陡**，30 天 300 PV 的达成靠窗口期冲量，不是长尾。

---

## 九、结论

### 9.1 两步判定

1. **硬否决**：`需求 = 2 ≤ 2` → **命中否决 → 放弃**（不看总分）。
2. **总分分流**（若主 Agent 把需求判为 3）：`3 + 2 + 5 + 5 = 15 ≥ 14` → **可建**。

### 9.2 本轮结论：**放弃（需求 2，硬否决）**，并标 **「硬否决边缘 → 需主管决策」**

`23-Profile` 规定需求 2/3 之间必须人工兜底，故两种口径都留档：

| 取法 | 需求 | 竞争 | 内容 | 生命 | 总分 | 分流 |
|---|:--:|:--:|:--:|:--:|:--:|---|
| 严格（本轮主口径） | 2 | 2 | 5 | 5 | **14** | **硬否决 → 放弃** |
| 按词量档（40–59 取 4 → 被 30% 线压 3） | 3 | 2 | 5 | 5 | **15** | 可建 |
| 竞争再取 `(1,2]` 档 | 3 | 3 | 5 | 5 | 16 | 可建 |

**我的建议：即使按宽松口径到 15，也不建。** 三条理由，前两条是规则外的实质判断：

1. **攻略型词 0%**——40 个有效词里没有一条是「怎么打」；采集器对 codes/boss/best weapons/beginner guide **四次全部空返回**。这类站的 PV 集中在发售窗口，D+30 后随窗口衰减（`tearsofmetal` 同型，攻略型 10.4%，本作更极端）。
2. **那 32 个 FAQ 词的实际霸屏者不是攻略站，而是 Steam 商店页 / IGN / 3DM / 游民 / Instant Gaming**（Q1、Q5、Q7 实测）——这些位置我们抢不到，竞争分 2 反而低估了真实难度。
3. **两家专门 wiki 已把同批页型铺满**（15 页 + 13 页，10-24 / 10-20，已挂 Adsterra），我们晚 4–8 天且无独占素材。

### 9.3 若主 Agent 仍决定建（页型建议，`codes`/`tier` 明确不建）

| 页型 | 首批 | 上限 | 说明 |
|---|:--:|:--:|---|
| 感染体图鉴 | 2 | 5 | 11 类逐个弱点/应对（唯一有「攻略」属性的类别） |
| 核心机制 | 2 | 5 | 噪音引怪与潜行、体温/天气、电力（太阳能 vs 风电）、辐射区 |
| 基地/载具 | 1 | 3 | 建造顺序、发电机、载具油量 |
| 新手/开局 | 1 | 2 | Demo 10 任务路线 |
| FAQ/发售 | 1 | 4 | 发售/平台/价格/EA vs Demo（窗口期内唯一有量的词） |
| **合计** | **7** | **19** | 首批 ≥8,000 词；`codes` 0 页（无兑换码，不硬造） |

差异化红线：不做「新手前 10 小时」「base building first」的复述（neverbealone.wiki 已做 ≈3,700 词深页），只做**数值/弱点/路线**。

### 9.4 规则闭环建议（交主 Agent）

1. **竞争检查 MUST 加一步「域名实测」**：跑完 6 条 SERP 后，对 `{slug}.wiki` / `{slug}game.wiki` / `{slug}guide.com` / `{slug}guide.wiki` / `{slug}.com` 做 `dig` + 直取首页，数站内页与 `lastmod`。本轮两个候选的 SERP 都是 `P=0`，实测都是 `P=2.0` —— 未发售游戏的攻略站**建立速度已快于搜索引擎收录**，只跑 SERP 会系统性低估竞争。
2. **词库的「锚定率」不能只做子串匹配**：本作 66.9% 的锚定率里，49 条是歌名/同人曲/剪辑（`Never Be Alone` 是 Skillet、David Guetta、Shawn Mendes、Shadrow 的共同歌名）。建议 `harvest-keywords.mjs` 对**短语型游戏名**增加「同名词黑名单」或要求词里出现 `game`/`steam`/`release` 等游戏语境词，否则有效词会被系统性高估 2 倍以上。
