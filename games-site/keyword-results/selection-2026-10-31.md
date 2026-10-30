# 选词评分 — 2026-10-31

> 岗位：候选分析员（`docs/agents/22` / `23`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维 0–5、§2.5.1 Trends 四项、§2.6 硬否决 + 总分分流）、§3.2 六条固定查询、§3.3 域名实测、§五 三道闸门、§六 成本
> 输入：`keyword-results/harvest-2026-10-31.md`（#141–#162，22 候选）+ 各 `keyword-results/{slug}.md` 词库
> 竞争数据：本轮 **36 条 SERP**（6 候选 × 6 条固定查询）+ **6 组域名实测**（`dig @1.1.1.1` 取 IP + `curl --resolve` 直连，绕开本机 DNS 投毒；另补测连字符变体 7 个域名）
> 一手复取：Steam `appdetails` 6/6（发售日 + coming_soon 复核，`curl --resolve store.steampowered.com:443:104.83.198.104`，2026-10-31）
> 未做：未采词（词库已在）、未建站、未改站点文件、未 commit/push
> **不可判定项**：Google Trends 6/6 未取到（裸请求 HTTP 429，缺 cookie，读不到 `timelineData`）——按规则记「未见 + 原因」，不编造曲线

## 一、总分表

| # | 游戏 | 需求 | 竞争 | 内容 | 生命周期 | 总分 | 结论 |
|:--:|---|:--:|:--:|:--:|:--:|:--:|---|
| 141 | Deadly Days: Roadtrip | **5** | 3 | 5 | 5 | **18** | ✅ **可建** |
| 158 | Casualties: Unknown | 3（宽松读 4） | 2 | 5 | 5 | **15**（宽松 16） | ✅ **可建** |
| 144 | Nomad Drive | 2（宽松 3） | 0 | 4 | 5 | **11** | ❌ 放弃（竞争硬否决；P 边界需主管决策） |
| 146 | Divine Frequency | 2（宽松 3） | 3 | 3 | 5 | **13** | ❌ 放弃（需求 ≤2 硬否决；宽松读 14，边界需主管决策） |
| 159 | County of Fortune | 2（宽松 3） | 4 | 3 | 4 | **13** | ❌ 放弃（需求 ≤2 硬否决；宽松读 15，边界需主管决策） |
| 149 | Airport Contraband | 2 | 3 | 3 | 4 | **12** | ❌ 放弃（需求 ≤2 硬否决） |

**分流：可建 2（#141 18 分、#158 15 分）/ 放弃 4（#144 竞争 veto；#146 #159 #149 需求 veto）。另有 16 个候选在采词阶段已判 `需求不足`，本轮只补结论为 `放弃（需求门禁）`。**

> 与上一轮（19 候选 → 可建 2）持平。本轮最关键的发现仍是 §3.3 域名实测：**6 个候选里 5 个的专属攻略站在 SERP 中一个都没返回**，全部靠域名探测才看到（详见 §五）。

## 二、硬否决逐条（MUST 先过这一步）

| # | 游戏 | 需求侧事实（`{slug}.md`） | 竞争侧事实（域名实测优先） | 否决判定 |
|:--:|---|---|---|---|
| 141 | Deadly Days: Roadtrip | 有效词 114（≥60）；攻略型 68/114=**59.6%**（按分类表逐项相加得 62–63，54–55%，两读法均 ≥50%）；页型：Tier 6 / Boss 16 / Weapons 12 / How-to 13 / Guide 9 → ≥3 类各 ≥5 | `P=1.5`（1 厚 + 1 薄） | 不否决 |
| 158 | Casualties: Unknown | 有效词 161（≥60）；攻略型 56/161=**34.8%**（harvest 口径；按分类相加含 Co-op 26 得 67/161=41.6%）→ 落 §2.2「≥60 且 30–50%」口径缺口 | `P=2.5`（2 厚 + 1 薄） | 不否决（需求 3，宽松 4，结论不受影响） |
| 144 | Nomad Drive | 有效词 54；攻略型 12/54=**22.2% <30%** → 封顶 3；页型闸门 ② 未过（只有 Codes 1 / How-to 1 / Guide 2 / Co-op 2） | `P=3.0`（3 厚）→ 竞争 0；若 `nomaddrive.wiki` 判薄则 `P=2.5` → 竞争 2 | **竞争 veto**（需求侧严格读 2，亦不过） |
| 146 | Divine Frequency | 有效词 25；攻略型 5/25=**20% <30%** → 封顶 3；页型闸门 ② 未过（只有 Guide/Beginner 1 类，Info 12 + Other 29） | `P=2.0`（2 厚）→ 竞争 3 | **需求 veto**（严格读 2；宽松取 3 → 14 分） |
| 159 | County of Fortune | 有效词 26；攻略型 5/26=**19.2% <30%** → 封顶 3；页型闸门 ② 未过（只有 How-to 4 一类） | `P=1.0`（1 厚）→ 竞争 4 | **需求 veto**（严格读 2；宽松取 3 → 15 分） |
| 149 | Airport Contraband | 有效词 **23 → 20–24 桶 = 2**（刚过判定线）；攻略型 5/23=21.7%；页型闸门 ② 未过 | `P=1.5`（1 厚 + 1 薄）→ 竞争 3 | **需求 veto**（23 词直接落 2 分档，无宽松读法） |

### 需求分档口径（本轮统一执行，写明以便复核）

1. 先按有效词落桶（≥60=5 / 40–59=4 / 25–39=3 / 20–24=2）；
2. 攻略型占比：<50% 不给 5，<40% 不给 4，**<30% 封顶 3**（发售日陷阱）；
3. 页型闸门 ②（≥3 类各 ≥3 词）未过时，按 §五「任一闸门不过只能落 2–3」——**严格读法取桶值−1（floor 2），上限读法保留桶值**，两读法都写进报告。
   - 依据：2026-10-30 主管对 #79 / #84 的裁定（需求侧零攻略证据时，内容 5 + 生命周期 5 不得翻案）优先于 #124 的「上限读法取 3」；#124 的体积是 56 词（40–59 桶），与 #146/#159 的 25/26 词不同档。

## 三、进评分候选的依据链

### 3.1 #141 Deadly Days: Roadtrip — 18 分（可建）

**基本信息**

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 3026450 | [`appdetails`](https://store.steampowered.com/api/appdetails?appids=3026450)（2026-10-31 一手） |
| 开发 / 发行 | Pixelsplit（德国）/ 发行 `[待确认]`（媒体口径 Sidekick Publishing 与 INSTINCT3 冲突，两处都不足采信） | appdetails + 媒体 |
| 发售 | **2026-10-29**（D+2，`coming_soon=false`） | appdetails 一手 |
| 价格 | $9.74（原价 $14.99，-35%） | appdetails 一手 |
| 评测 | **694 条 89% Very Positive**（近 30 天 142 条 88%） | 侦察轮商店页一手（2026-10-31） |
| 类型 | 背包构筑 Bullet Heaven / 僵尸 Roguelite，单人 + 本地分屏 co-op（好友无需拥有） | 商店页 + 搜索摘要 |
| 内容面 | 7+ 可解锁角色（Survivor / Banana / Sheriff / Death / Chicken / Astronaut / President 密码码 / Knabe / Pumpkin / Santa）、武器合并升级、道具合成传说、Apples 永久属性、Duct Tape 解锁、4.5 关 + 路障/Giant、Titan Boss、Endless、成就、基地建设 | kosguides（两篇）+ deadlydaysroadtrip.wiki（45 页） |

**硬门槛**：角色/武器/道具/合成/Boss/模式/元进度全有，且有 ≥2 可核验来源 → **通过**。

**需求 5** — `keyword-results/deadlydaysroadtrip.md`

| 闸门 | 结果 |
|---|---|
| ① 有效词 | 114 ≥ 20 ✅（≥60 桶） |
| ② 页型覆盖（≥3 类各 ≥3 词） | ✅ Tier 6 / Boss 16 / Weapons 12 / How-to 13 / Guide 9 |
| ③ 第三方信号 | ✅ 694 条 89%（一手）+ 近 30 天 142 条 88% |

- 攻略型 68/114=59.6%（harvest）；按词表分类逐项相加为 62（不含 Co-op）/63（含 Co-op）= 54.4–55.3% —— **两种读法都 ≥50%**，5 分条件成立；
- 双源 ✅（Suggest + Steam 评测），不触发单源封顶；攻略型 ≥30%，不触发发售日陷阱。

**竞争 3** — `P = 1.5`（T=1, t=1）

| # | 查询 | 前 10 结果（域名 / URL / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Deadly Days Roadtrip wiki` | gry-online.pl/gry/deadly-days-roadtrip（数据库，非）· gematsu.com（非）· gamersgate.com（商店，非）· in.ign.com（hub，非）· dl.3dmgame.com（下载站，非）· mmo13.ru（俄综合，非）· fogplay.mts.ru（俄评测，非）· **kosguides.com/14107…apples-and-duct-tape-guide（薄）** · kosguides.com/14100…unlock-each-character（薄） · gamepressure.com（数据库，非） | **1 薄** |
| 2 | EN `… guide tips` | fogplay · kosguides×2 · sohu.com（中文转载）· gamingonlinux.com（评测，非）· 微信公众号（中文攻略）· iwillplay.ru（俄博客）· gamerfudge.com（非）· gameluster.com（评测，非）· 3dmgame（下载） | 1 薄 |
| 3 | EN `… codes` | kosguides（角色解锁）· gamespress.com（PR）· plitch.com×3（作弊工具，意图错位不计）· gleam.io（Steam key 抽奖）· gamalive.com / geek-o-polis.com / thatnerdshow.com / technoloki.de（新闻稿） | 0 |
| 4 | ZH `… 攻略` | sohu · 微信 · kosguides×2 · fogplay · gamingonlinux · steamcommunity（评测）· iwillplay | 1 薄 |
| 5 | ZH `… wiki 中文` | ku.gamersky.com（资料页）· sohu · 微信 · indienova.com/game（资料）· gamesstarfield / mlyouxi / qxunye / fhyx / aaaplayer（下载/商城）→ **无灰机/中文 wiki** | 0 |
| 6 | JA `… 攻略 wiki ゲーム` | sohu · fogplay · kosguides×2 · 微信 · ali213.net/zt/deadlydaysroadtrip（专题页）· gry-online · steamcommunity(ja) · truetrophies（奖杯）→ **日文零本作攻略** | 0 |

**域名实测（§3.3，2026-10-31）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `deadlydaysroadtrip.wiki` | **200** | sitemap **180 loc = 45 页 × 4 语言**（en/ja/de/fr）；分类 guide 8 / items 8 / weapons 6 / characters 6 / modes 5 / platforms 4 / codes 1 | **2026-10-30** | **厚 T=1** |
| `deadlydaysroadtrip.wiki.gg` | 401（未认领） | — | — | 不计 |
| `deadlydaysroadtripguide.com` / `deadlydaysroadtripwiki.com` / `deadlydaysroadtrip.guide` / `deadlydaysroadtripgame.com` | NXDOMAIN | — | — | 不计 |
| `deadly-days-roadtrip.wiki` | NXDOMAIN | — | — | 不计 |

`P = 1 + 0.5×1 = 1.5` → 区间 (1,2] → **竞争 3**。
**风险**：`deadlydaysroadtrip.wiki` 是 §3.3 记录的模板 `.wiki` 站网络成员（4 语言 + 同一套 guide/characters/codes 分类，发售次日 10-30 已铺 45 页）。另外系列前作《Deadly Days》(2019) 可能存在旧 Fandom，本轮 SERP 未返回（**未核，不计**），写稿时 MUST 用带 `Roadtrip` 的完整品牌词。

**内容扩展 5**（≥30 页，≥5 类各 ≥5 条）
- 角色 7–9（含 2 个密码/联动）、武器 ≥8（含合并升级）、道具/传说 ≥8、模式 5（4.5 关 / Titan / Endless / Boss / 特殊关）、地图/关卡 5、成就 15、元进度（Apples / Duct Tape）；
- 可直接对标的实证：`deadlydaysroadtrip.wiki` 已用 45 页覆盖同一批页型 → 可写性有第三方证据，不是估算。

**生命周期 5**
- 发售 **2026-10-29（D+2）**，≤8 周；
- **694 条 89%**（D+2 的高基线，本轮体量最大），近 30 天 142 条 88% 未见崩盘；
- **Trends 四项**：① 曲线形状 `未见` ② 28 天方向 `未见` ③ 对比基准词 `palworld wiki` ④ 原因 `未取（HTTP 429，缺 cookie，读不到 timelineData；无法判定是否 Not enough data）`。
- 按 2026-10-30 决定「取不到不封顶」按发售日给 5；**触发降级**：D+2～D+3 Trends 复检（SOP §7.0b）若为「尖峰」或 D+7 评测跌回 Mixed → 生命周期 3（总分 16 → 仍可建，但扩词优先级下调）。

**成本与回本**：域名 0 元（`*.vercel.app`）+ 托管 0 元（Vercel Hobby）；token 与人工 `[待确认]`（建站后回填台账，目标 ≤6 小时/站）；回本 PV = 总成本 ÷ (RPM/1000)，RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺），**组合口径**——30 天 300 PV ≈ $0.3–1.5，不构成单站回本结论。

**结论**：硬否决未命中（需求 5 / 竞争 3）→ **总分 18 ≥14 → 可建**。
**若建，页型分布（MECE）**：角色解锁 8（首批 3）→ 武器/合并 4 → 道具/合成 3 → 关卡/Boss 4 → 元进度（Apples/Duct Tape）2 → FAQ/co-op 3；`codes` 只做「角色解锁密码 + President 指令码」一页，**不做兑换码清单**（无来源）。
**写作红线**：密码 `erstknacktsdannknallts` 与各角色解锁条件只引 kosguides/Steam 社区已复现的段落；数值（攻击/暴击）无官方表，MUST 标 `[Unconfirmed]`。

---

### 3.2 #158 Casualties: Unknown — 15 分（可建）

**基本信息**

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 4576490 | [`appdetails`](https://store.steampowered.com/api/appdetails?appids=4576490)（2026-10-31 一手） |
| 开发 / 发行 | Orsoniks（单人，波兰）/ Oro Interactive | appdetails + 媒体 |
| 发售 | **2026-11-09**（`coming_soon=true`，未发售） | appdetails 一手 |
| demo / 热度 | Steam Next Fest 2026-06 **最高评分 demo 93.08%**；demo 96.8% 好评（4,091 条，SteamDB 三方）；itch.io 30 万+ 下载 | 媒体 + SteamDB（三方） |
| 类型 | 2D 洞穴探索硬核生存模拟（无 HP 条，按肢体/心血管/感染/辐射建模） | 商店页 + wiki |
| 内容面 | 11 层（当前 5 层可进）、300+ 物品、3 角色、INT/STR/RES 属性、6 结局、Unchipped 挑战模式、mod 工具 | scavprototype.wiki.gg + namu.wiki + WikiFur |

**硬门槛**：机制/物品/角色/Boss/结局全有，且已有 563 页社区 wiki 逐项在写 → **通过**。

**需求 3（宽松读 4）** — `keyword-results/casualtiesunknown.md`

| 闸门 | 结果 |
|---|---|
| ① 有效词 | 161 ≥ 20 ✅（≥60 桶） |
| ② 页型覆盖 | ✅ Boss/Characters 19 / Guide/Beginner 14 / Co-op 26 三类各 ≥5（Build 4 / Weapons 2 / Codes 2） |
| ③ 第三方信号 | ✅ Next Fest demo 第 1 评分 93.08%、96.8% 好评 4,091 条 |

- 攻略型 **56/161=34.8%**（harvest 口径）；按词表分类逐项相加（Codes 2 + Boss 19 + Build 4 + Weapons 2 + Guide 14 + Co-op 26）= **67/161=41.6%**。**两个数字都落在 §2.2 明示的口径缺口区间（≥60 词且攻略型 30–50%）**；
- 按 §2.2 缺口条款两读法并列：**取 3 → 总分 15；取 4 → 总分 16**。本轮按严格口径记 3，**两种读法都是「可建」，结论不受影响**；
- 不触发发售日陷阱（≥30%），不触发单源封顶（Suggest + demo 数据双源）。

**竞争 2** — `P = 2.5`（T=2, t=1）

| # | 查询 | 前 10 结果（域名 / URL / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Casualties Unknown wiki` | **scavprototype.wiki.gg/zh/wiki/Casualties_Unknown（厚，中日双语页）** · scavprototype.wiki.gg/wiki/Unchipped_mode（厚）· scavprototype.wiki.gg/zh/…版本历史（厚）· en.wikifur.com/wiki/Casualties:_Unknown（多游戏兽圈 wiki，单条，非）· zh.wikifur.com（中文，非英文竞争）· in.ign.com（非）· handwiki.org（百科镜像，非）· zeta-ai.io（同人，非） | **1 厚** |
| 2 | EN `Casualties Unknown game guide` | **scavprototype.wiki.gg/wiki/Guide:Getting_started（厚）** · scavprototype…Unchipped_mode · bjgsl.org.cn / gamedog.cn / 51pgzs.com（中文下载站）· **namu.wiki/w/Casualties:%20Unknown/층계（韩文百科，不计英文竞争）** · nmbxd1.com（论坛） | 1 厚 |
| 3 | EN `Casualties Unknown codes` | 前三页全是军事伤亡状态码 PDF（NZDF / JSP 751 / AR 600-8-1 / CJCSM，**意图错位不计**）· **glintgames.com/guides/casualties-unknown-controls（薄）** · rolimons.com（Roblox UGC，错位）· medal.tv（剪辑）· infinite-tower-tycoon.fandom（别作） | **1 薄** |
| 4 | ZH `Casualties Unknown 攻略` | bjgsl.org.cn · 51pgzs.com · **scavprototype.wiki.gg（厚）** · goapk.com · w12z.com · yxdown.com · **namu.wiki（韩）** · **scavprototype.wiki.gg/zh/wiki/挑战（中文）** | 1 厚 |
| 5 | ZH `Casualties Unknown wiki 中文` | scavprototype.wiki.gg/zh（老中文 wiki，已停更）· zh.wikifur.com · **casualtiesunknown.huijiwiki.com（中文灰机 wiki，活跃）** · scavprototype.wiki.gg/zh（info 页）· nexusmods.com/scavprototype/mods/129（汉化命令表）· github.com/tigerLin0127（汉化补丁）· bilibili（视频） | 中文侧 **1 厚**（不计英文 P） |
| 6 | JA `… 攻略 wiki ゲーム` | scavprototype.wiki.gg（英）· namu.wiki×3（韩）· ja.namu.wiki/w/Casualties（韩文日译镜像）· 中文下载站×4 → **日文零本作专门站** | 0 |

**域名实测（§3.3，2026-10-31）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `scavprototype.wiki.gg` | **200**（SERP 实页 + 统计页一手） | **Content pages 563 / Total pages 5,107 / 编辑 14,201 次 / 活跃编辑 11 人**，覆盖 guide、layers、items、characters、版本历史 | 版本历史更新至 Demo 5.1 | **厚 T=1** |
| `casualties-unknown.wiki` | **200** | sitemap **48 loc = 24 页 × 2 语言**（en / zh-cn）；guide 8（beginner / commands / crafting / medical / moodles / multiplayer / survival / guide 索引）+ world 4（characters / items / layers）+ release 3 + updates 2 | **2026-10-26** | **厚 T=1** |
| `casualtiesunknown.wiki` | NXDOMAIN | — | — | 不计 |
| `casualtiesunknown.wiki.gg` | 301 → `scavprototype.wiki.gg` | 跳转到别站，非独立站 | — | 不计（不重复计） |
| `casualtiesunknownguide.com` / `casualtiesunknownwiki.com` / `casualtiesunknown.guide` / `casualtiesunknowngame.com` | NXDOMAIN | — | — | 不计 |
| `glintgames.com`（5 篇本作页） | 200 | controls / crafting-and-items / faq / guide / walkthrough，lastmod 2026-10-30 | 10-30 | **薄 t=0.5** |

`P = 2.0 + 0.5 = 2.5` → 区间 (2,2.5] → **竞争 2**。
**中文侧（不计 P，仅记录）**：`casualtiesunknown.huijiwiki.com`（灰机中文 wiki）+ zh.wikifur + namu.wiki（韩）已成型 → **多语言空位已被占，内容扩展不加多语言分**。

**内容扩展 5**（≥30 页，≥5 类各 ≥5 条，全部有源）
- 层 11（每层 306m、地震/辐射激光时限）→ 11 页；物品 300+ → 分类页 ≥5；医疗状态 ≥15（出血/感染/败血症/血胸/脑损伤/中毒/辐射/骨折/弹片）→ 3–5 页；制作/智力等级失败表 2 页；敌怪（shade crawler / cave tick / sand stalker / boss）4 页；结局 6 页；角色 3 + 属性 3；Unchipped / 挑战 / 存档 3 页。

**生命周期 5**
- 发售 **2026-11-09**（≤8 周，未发售）；
- 需求信号强：Next Fest 2026-06 最高评分 demo（93.08%）、demo 96.8%（4,091 条）、itch 30 万+ 下载（三方）；
- **Trends 四项**：① `未见` ② `未见` ③ 基准词 `palworld wiki` ④ `未取（HTTP 429，缺 cookie；未发售词也可能 Not enough data，但本轮连查询都未成功）`。

**成本与回本**：同上（域名/托管 0；token/人工 `[待确认]`；RPM $1–5/千次，第三方 2026-08，组合口径）。

**结论**：硬否决未命中（需求 3 / 竞争 2）→ **总分 15（宽松 16）≥14 → 可建**。
**若建，页型分布**：11 层逐层指南（首批 3）→ 医疗状态 4 → 物品/制作 4 → 敌怪/Boss 3 → 资源路线 3 → 结局 2 → 角色/属性 2 → FAQ 2。
**写作红线**：`scavprototype.wiki.gg` 是**官方认可社区 wiki（563 页）**，数值与层数据 MUST 标版本（Demo 5.1 / EA 7.0.1）并注明来源；不得把 wiki 原文当自有原创；「5 层 vs 11 层」两口径并存，站内 MUST 写「当前可进 5 层 / 规划 11 层」。

---

### 3.3 #144 Nomad Drive — 11 分（放弃：竞争硬否决，P 边界需主管决策）

**基本信息**

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 2223980 | [`appdetails`](https://store.steampowered.com/api/appdetails?appids=2223980)（2026-10-31） |
| 开发 / 发行 | Indie Devil | appdetails |
| 发售 | **2026-10-27**（EA，D+4） | appdetails 一手 |
| 价格 / 评价 | $13.49（-10%）/ **296 条 81% Very Positive** | 侦察轮商店页一手 |
| 类型 | 末世房车修理 + 生存，1–4 人 co-op，程序化世界 | 商店页 |

**硬门槛**：房车部件（电池/冷却液/轮胎/引擎/舵）、打磨-抛光-喷漆、家具/货架、种子与地图、宝藏（金属探测器 + 铲子 + 钥匙）、烹饪/钓鱼/种植、多人与服务器 → **通过**。

**需求 2（宽松读 3）** — `keyword-results/nomaddrive.md`
- 有效词 54（40–59 桶 → 4），但攻略型 **12/54=22.2% <30%** → 发售日陷阱封顶 3；
- 页型闸门 ② 未过：Codes 1 / How-to 1 / Guide 2 / Co-op 2，无任何一类 ≥3 词；
- ③ 第三方信号 ✅（296 条 81%）。
- 严格读法 → **2**；上限读法 → 3。两个读法都不改结论（见下）。

**竞争 0** — `P = 3.0`（T=3, t=0）

| # | 查询 | 前 10 结果（域名 / URL / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Nomad Drive game wiki` | gamerant.com/db（数据库，非）· game8.co（发售日页，非）· pushsquare.com（非）· steamdb.info（不计）· **npctips.com/nomad-drive/data/items/（厚）** · **npctips.com/nomad-drive/data/vehicles/（厚）** · gry-online.pl · mmo13.ru · vgtimes.com · dl.3dmgame.com | **1 厚** |
| 2 | EN `… guide tips` | leigod.com（联机教程单篇，非）· **npctips.com/nomad-drive/rv/（厚）** · npctips…/how-to-play/（厚）· xiaohongshu（UGC，非）· polytrackgames.io（单篇，非）· 2upskill.com（单篇，非）· f71.com / gamedog.cn（手游站） | 1 厚 |
| 3 | EN `… codes` | **npctips.com/nomad-drive/data/seeds/（厚）** · fearlessrevolution.com（作弊表）· cheat-engine.co（作弊器）· xmodhub.com（猜测性条目标题，注明未 dump）· npctips…/treasure/（厚）· wemod.com · fhyx.hk（商城）· survivalservers.com（服务器 wiki 单页）· modengine.net | 1 厚 |
| 4 | ZH `… 游戏 攻略` | leigod · 小红书×2 · bilibili（视频）· f71 · gamedog · **npctips×3（厚）** | 1 厚 |
| 5 | ZH `… wiki 中文 攻略` | 小红书×3 · bilibili · f71 · 233leyuan×2 · gamedog · gamesauce.cn → **无中文 wiki** | 0 |
| 6 | JA `… 攻略 wiki ゲーム` | npctips×3（厚）· 小红书 · polytrackgames · 2upskill · survivalservers → **日文零本作攻略** | 0 |

**域名实测（§3.3，2026-10-31）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `nomad-drive.wiki` | **200** | sitemap **81 loc = 27 页 × 3 语言**（en/es/tr）；guide（beginner/coop/demo）· map（seeds/treasure）· repair（battery/coolant/tool/water）· vehicle（rv-list/upgrades）· compare 2 · release 2 | **2026-10-29** | **厚 T=1** |
| `nomaddrive.wiki` | **200** | sitemap **352 loc = 88 页 × 4 语言**（en/de/ja/fr）；guides / rv-repair / rv-customization / survival / crafting / farming | **2026-09-12**（7 周未更新） | **厚 T=1**（`[边界]` 不满足「4 周内更新」，也未到「>8 周」→ 判薄则 `−0.5`） |
| `npctips.com/nomad-drive/` | **200** | **22 页**（items / vehicles / seeds / rv / treasure / how-to-play / coolant / battery / crowbar / blueprints / furniture / mods / multiplayer / achievements / console-commands / demo / release / roadmap / patch-yourself-up / system-requirements …） | **2026-10-28** | **厚 T=1** |
| `nomaddrive.wiki.gg` | 429（反爬） | — | — | 不计（记录） |
| `nomad-drive.wiki.gg`（未单独测） / `nomaddriveguide.com` / `nomaddrivewiki.com` / `nomad-driveguide.com` / `nomad-drive.guide` / `nomad-drivegame.com` | NXDOMAIN | — | — | 不计 |

`P = 3.0` → **竞争 0 → 硬否决**。
**边界（写清给主 Agent）**：`nomaddrive.wiki` 若按「>4 周未更新」判**薄**，则 `P = 2.5` → 竞争 2；配合上限读法需求 3 → 总分 **14 → 可建**。按 Profile「P 在 2.5–3 之间 → 需主管决策，不自行放弃」，本条**必须主管裁定**，本轮按严格读数标放弃。

**内容扩展 4**（20–29 页，≥4 类）
- 房车部件 6（电池/冷却液/轮胎/引擎/散热器/舵）· 修复流程 3（打磨/抛光/喷漆）· 载具 2（starter van / C-Class）· 地图种子 2 · 宝藏 2（探测器/铲子/钥匙）· 生存 4（水/食物/烹饪/作物）· 多人 1 · 成就 1 → ≈20–24 页。

**生命周期 5**：EA 2026-10-27（D+4，≤8 周）、296 条 81%；Trends 四项 ① `未见` ② `未见` ③ `palworld wiki` ④ `未取（HTTP 429，缺 cookie）`。

**成本与回本**：同上（0 / 0 / `[待确认]` / `[待确认]`；RPM $1–5，第三方 2026-08，组合口径）。

**结论**：`P=3.0` → **竞争 0 → 硬否决 → 放弃**；需求侧严格读 2 亦不过。
**复评触发**：① 主管判定 `nomaddrive.wiki` 厚/薄（决定 11 vs 14 分）；② D+7（11-03）用同一锚定词复采，若攻略型占比 ≥30% 且页型闸门过，重新评分。

---

### 3.4 #146 Divine Frequency — 13 分（放弃：需求 ≤2 硬否决）

**基本信息**：Steam 2548880 · Abraxaes · EA **2026-10-26**（D+5）· $17.99 · **231 条 98% Very Positive** · GZDoom 超现实恐怖 FPS/ARPG，3 流派（Strength / Wits / Physique）、武器改装、Meso-Divinity Boss、6h / 70% 内容。

**硬门槛**：3 流派 + 武器改装 + Boss + 结局 + 谜题/秘密 + 关卡 → **通过**（但叙事比重大，机制型页型窄）。

**需求 2（宽松读 3）** — `keyword-results/divinefrequency.md`
- 有效词 25（25–39 桶 → 3）；攻略型 **5/25=20% <30%** → 封顶 3；
- 页型闸门 ② 未过：仅 Guide/Beginner 1 类，Info 12 + Other 29（其中 17 条是 963Hz/110Hz 疗愈音频同名，已剔除）；
- ③ 第三方信号 ✅（231 条 98%）。
- 严格读法 **2** → 硬否决；上限读法 3 → 总分 14。

**竞争 3** — `P = 2.0`（T=2, t=0）

| # | 查询 | 前 10 结果（域名 / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Divine Frequency game wiki` | pushsquare · weloveit.io · kotaku · store.steampowered · gamepressure · denderagames · hlgamingofficial · isthereanydeal · gamehypes · dreadcentral（前瞻） | **0** |
| 2 | EN `… guide walkthrough` | steamcommunity/app/2548880（讨论帖×2，论坛不计）· itch.io/post（结局 2 攻略，单帖）· truesteamachievements（成就解法）· aurelia-game.fandom（**别作**，错位）· gaming.stackexchange×3（Q&A）· bilibili · sultansgame.wiki.gg（**别作**，错位） | **0** |
| 3 | EN `… codes` | zenodo / 灵修音频 / 播客 / 电商（**整页在答另一件事，意图错位不计**） | 0 |
| 4 | ZH `… 游戏 攻略` | steamcommunity（讨论）· bilibili×3（Boss 视频）· store.steampowered/news · jidiyouxi.com · down.ali213.net · gkwiki3.com（**Baroque**，错位） | 0 |
| 5 | ZH `… wiki 中文 攻略` | bilibili · jidiyouxi · avg.163 · rom-game.fr（法文评测）· par30games · 52steamgame · hlgaming · denderagames → **无中文 wiki** | 0 |
| 6 | JA `… 攻略 wiki ゲーム` | steamcommunity · jidiyouxi · divine-gate.fandom（**别作**）· gkwiki3（**别作 Baroque**）· rom-game · dekudeals → **日文零本作攻略** | 0 |

**域名实测（§3.3，2026-10-31）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `divinefrequency.wiki` | **200** | sitemap **168 loc = 42 页 × 4 语言**（en/ja/de/es）；guide 8（battery/controls/increase-strength/save-locations/speedrun/survival/system-req/walkthrough）+ puzzles 3（endings/puzzle-solutions/secrets）+ media + 其余 | **2026-10-28** | **厚 T=1** |
| `divine-frequency.wiki` | **200** | sitemap **104 loc = 26 页 × 4 语言**（en/ru/pt/es）；guide 2 + release 4 + community 4 + platforms 3 + mods 3 + download 3 + soundtrack 2 + 其余 | **2026-10-28** | **厚 T=1** |
| `divinefrequency.wiki.gg` | 429（反爬） | — | — | 不计（记录） |
| `divinefrequencyguide.com` | 000（连接失败） | — | — | 不计 |
| `divinefrequencywiki.com` / `divinefrequency.guide` / `divinefrequencygame.com` | NXDOMAIN | — | — | 不计 |

`P = 2.0` → (1,2] → **竞争 3**。

**内容扩展 3**（12–19 页）：3 流派页 + 属性/加点 + 武器改装 + Boss（Meso-Divinity ×N）+ 结局 4–6 + 谜题/秘密 + 区域 + 物品 + 成就/速通 ≈ 14–18 页。

**生命周期 5**：EA 2026-10-26（D+5，≤8 周）、231 条 98%；Trends ① `未见` ② `未见` ③ `palworld wiki` ④ `未取（HTTP 429，缺 cookie）`。

**成本与回本**：同 §3.1 口径。

**结论**：严格读法需求 2 → **需求 ≤2 硬否决 → 放弃**（内容 3 + 生命周期 5 不可补偿）。
**边界**：若需求取 3 → 总分 **14 → 可建**。按岗位卡「需求 2/3 之间 → 人工介入」标**需主管决策**。
**复评触发**：D+7（11-02）复采 `Divine Frequency build` / `Divine Frequency boss` / `Divine Frequency endings`；出现 ≥3 类各 ≥3 词再进评分。

---

### 3.5 #149 Airport Contraband — 12 分（放弃：需求 ≤2 硬否决）

**基本信息**：Steam 1167820 · DRAGO entertainment（+ Titanite Games）/ Shochiku · **2026-10-28**（D+3）· ¥68.40 · **53 条 81% Very Positive** · 海关检查 Roguelike-Sim，官方中文名《机场安检：包过一下》。

**硬门槛**：9 类工具（X 光/化学/UV/刀/锤/撬棍/电击枪/手铐/秤）、货物区、起重机 perk、卡特尔线、成就、序章关卡 → **通过**。

**需求 2** — `keyword-results/airportcontraband.md`
- 有效词 **23 → 20–24 桶 = 2**（刚过判定线）；
- 攻略型 5/23=21.7%（<30%，封顶 3 不提升）；
- 页型闸门 ② 未过：Weapons/Gear 3 / Info 17 / Other 18，无 3 类各 ≥3；
- ③ 第三方信号 ✅（53 条 81%）。
- **无宽松读法**：23 词直接落 2 分档 → 需求 ≤2 → 硬否决。

**竞争 3** — `P = 1.5`（T=1, t=1）

| # | 查询 | 前 10 结果（域名 / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Airport Contraband game wiki` | gamewith.jp/gamedb（日文 DB，非）· gry-online.pl · playgames.dk（商城）· pcgamingwiki（**不计**）· greenmangaming（商城）· vgtimes · ign · kotaku · gog（demo）· steamdb（不计） | **0** |
| 2 | EN `… guide tips` | steamcommunity/app/1167820×3（官方公告，非）· gog（demo）· 233leyuan（手游站，错位）· store.steampowered/news×2（官方 DevLog，非）· 微信（单篇）· gamehypes.com/news/devlog-1（单篇） | 0 |
| 3 | EN `… codes` | playground.ru（Cheat Engine 表）· cheats.co（无实际码）· 52steamgame / fhyx / gamersbase / jidiyouxi×2 / shuri.gg（商城/下载）· typc.net（论坛）· 17173（新闻） | 0 |
| 4 | ZH `… 游戏 攻略` | steamcommunity×3 · volx.jp（日文操作说明单篇）· 233leyuan · gog · steam news · 微信 · game.press → **无中文攻略/ wiki** | 0 |
| 5 | ZH `… wiki 中文 攻略` | gamersbase · sogou 百科（《机场违禁品》）· douyin×2 · taptap · 233leyuan · gamersky · kuai8（下载站）→ **无灰机/中文 wiki** | 0 |
| 6 | JA `… 攻略 wiki ゲーム` | volx.jp（操作说明单篇）· steamcommunity×3 · sogou 百科 · gog · gry-online · game.press · gamehypes | 0（日文零 wiki） |

**域名实测（§3.3，2026-10-31）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `airport-contraband.wiki` | **200** | sitemap **188 loc = 47 页 × 4 语言**（en/es/de/ja）；guide 8 / playthrough 7 / platforms 6 / overview 6 / items 6 / demo 6 / faq 4 | **2026-10-30** | **厚 T=1** |
| `airportcontraband.wiki` | **200** | sitemap 14 loc = 11 内容页（getting-started / inspections / duty-or-cartel / prologue / faq / achievements / perks / platforms / release-date） | **2026-10-30** | **薄 t=1**（URL <20） |
| `airportcontraband.wiki.gg` | 429（反爬） | — | — | 不计（记录） |
| `airportcontrabandguide.com` / `airportcontrabandwiki.com` / `airportcontraband.guide` / `airportcontrabandgame.com` | NXDOMAIN | — | — | 不计 |

`P = 1 + 0.5 = 1.5` → (1,2] → **竞争 3**。

**内容扩展 3**（12–19 页）：证件核验 / 行李检查 / 货物区 / 9 类工具 / perk 树 / 卡特尔线 / 乘客疾病 / 成就 / 序章 / Big Ben 关卡 ≈ 12–16 页。

**生命周期 4**：发售 2026-10-28（D+3，≤8 周）；但仅 **53 条**（样本偏小），不足以支撑「高位平稳」的判断；Trends ① `未见` ② `未见` ③ `palworld wiki` ④ `未取（HTTP 429，缺 cookie）`。

**成本与回本**：同 §3.1 口径。

**结论**：需求 **2（23 词，20–24 桶）→ 需求 ≤2 硬否决 → 放弃**；总分 12 不改变结论。

---

### 3.6 #159 County of Fortune — 13 分（放弃：需求 ≤2 硬否决）

**基本信息**：Steam 3204330 · Nepos Games（捷克，Nebuchadnezzar 团队）/ Aquila Interactive · **2026-11-05 EA**（未发售）· 愿望单 ~168K（三方）· 中世纪郡县建造 + 政治（定居点/生产链/道路河流/市长/贵族家族/文化）。

**硬门槛**：定居点 / 建筑槽 / 生产链 / 贸易路线 / 市长 / 贵族家族 / 社会阶层 / 文化 / 区域 / 建造点数 → **通过**。

**需求 2（宽松读 3）** — `keyword-results/countyoffortune.md`
- 有效词 26（25–39 桶 → 3）；攻略型 **5/26=19.2% <30%** → 封顶 3；
- 页型闸门 ② 未过：只有 How-to 4 一类（Info 16 + Other 6）；
- ③ 第三方信号 ⚠️：168K 愿望单为**三方口径**，一手商店页未显示 → 计为 1 个弱信号；
- 严格读法 **2** → 硬否决；上限读法 3 → 总分 15。

**竞争 4** — `P = 1.0`（T=1, t=0）

| # | 查询 | 前 10 结果（域名 / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `County of Fortune game wiki` | game8.co（发售日页，非）· kotaku · dl.3dmgame（demo 页）· **gamewikistation.com/news/…（单篇机制文，非专门）** · store.steampowered · gamedata.wtf（数据页）· visiongame.cz（捷克开发访谈）· rockpapershotgun（预览）· srec.ai（聚合）· gog 论坛 | **0** |
| 2 | EN `… guide tips` | store.steampowered/news/app/3204330（**官方 Demo FAQ + Dev Diary #1，算官方源不算竞争**）×2 · ali213.fhyx（商城）· taptap · gaming.stackexchange（别作）· gry-online（预览） | 0 |
| 3 | EN `… codes` | freegames.codes（赠送追踪，非 codes）· thegamesdb · forum.strategyturk（论坛）· kotaku · srec.ai · gamebrain · steamfocus.ru · backloggd · store.steampowered → **无 codes 生态** | 0 |
| 4 | ZH `… 游戏 攻略` | steam news（官方 FAQ，繁中/越南语）×2 · taptap×2 · **spielerheim.de（德文一手实测，单篇，非）** · xiaoheihe（专题）· fhyx · 3dm · 百度贴吧（无关） | 0 |
| 5 | ZH `… wiki 中文 攻略` | xiaoheihe · taptap · bbs.nga（无关）· douyin×2 · store.steampowered（demo）· steamcommunity 指南（别作）· avg.163（别作）→ **无灰机/中文 wiki** | 0 |
| 6 | JA `… 攻略 wiki ゲーム` | steam news×3 · xiaoheihe · **gamewikistation.com/ja（日语聚合站，非本作专区）** · wikisp（别作）· happyhome（别作）→ **日文零本作攻略** | 0 |

**域名实测（§3.3，2026-10-31）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `countyoffortune.wiki` | **200** | sitemap **29 loc = 单语 ~20 内容页**；guides 7（beginner / delete-settlement / mayors / production-chains / settlements / tips / trade-routes）+ wiki 9（assembly / buildings / construction-points / cultures / noble-houses / regions / resources / social-classes / faq）+ release/review/roadmap/demo/game | **2026-10-30** | **厚 T=1**（URL ≥20、≥3 类、4 周内更新） |
| `countyoffortune.wiki.gg` | 429（反爬） | — | — | 不计（记录） |
| `countyoffortuneguide.com` / `countyoffortunewiki.com` / `countyoffortune.guide` / `countyoffortunegame.com` | NXDOMAIN | — | — | 不计 |
| `county-of-fortune.wiki` | NXDOMAIN | — | — | 不计 |

`P = 1.0` → (0,1] → **竞争 4**。

**内容扩展 3**（12–19 页）：定居点 / 建筑与槽位 / 生产链 / 贸易路线 / 市长 / 贵族家族 / 社会阶层 / 文化 / 区域 / 建造点数 / 资源 / 组装 ≈ 13–18 页。

**生命周期 4**：未发售、定档 **2026-11-05**（≤8 周）；愿望单 ~168K（**三方，非一手**）与 Next Fest demo 在跑 → 未达「wishlist 强」的一手证据，按 4；Trends ① `未见` ② `未见` ③ `palworld wiki` ④ `未取（HTTP 429，缺 cookie）`。

**成本与回本**：同 §3.1 口径。

**结论**：严格读法需求 2 → **需求 ≤2 硬否决 → 放弃**。
**边界**：若需求取 3 → 总分 **15 → 可建**。按岗位卡「需求 2/3 之间 → 人工介入」标**需主管决策**。
**复评触发**：EA 后 D+7（11-12）复采 `County of Fortune trade routes` / `… mayor` / `… production chains`；有效词 ≥20 且 ≥3 类各 ≥3 词再进评分。

---

## 四、未进评分的 16 个候选（逐个一句，结论已改 `放弃（需求门禁）`）

| # | 游戏 | 报告数字（复核后） | 放弃理由（一句） |
|:--:|---|---|---|
| 142 | Zotenhold | 有效词 1 | EA 首日（10-30），21 条锚定只有裸词命中，所有后缀零建议。 |
| 143 | Cinderwake | 有效词 0 | 裸词 + 20 条后缀全无品牌命中，Google 未形成该品牌建议。 |
| 145 | Apocalyptica | 有效词 5 | 同名金属乐队（专辑/巡演/成员/歌词 ≥30 条）+ 2003 同名老游戏；加 `game` 也救不回。 |
| 147 | Geoplanetical | 有效词 0 | 203 条去重零品牌，查询被归一成 geopolitical / planet。 |
| 148 | Rise of the Merchants | 有效词 3 | 只有 game / release date / steam，品牌是通用短语无长尾。 |
| 150 | Into the Crypt | 有效词 4 | Roblox Slap Battles 手套 8 条 + Celtic Frost 歌名撞词。 |
| 151 | Grimhold | 有效词 3 | 同名乐队/小说/D&D/Warhammer/HP 资产（keep/fortress/exile）。 |
| 152 | The Last Legion | 有效词 1 | 2007 电影 + 同名小说/剧集占 51 条，本作仅 `the last legion game`。 |
| 153 | ABYSS | 有效词 9（脚本报 283） | 通用词灾难：PoE2 深渊 / Genshin / Neon Abyss / Duet Night Abyss / Roblox / Made in Abyss；90.4% 锚定率是假阳性。 |
| 154 | Grinner's Diner | 有效词 0 | EA 首日，56 条去重零品牌命中。 |
| 155 | Project Exodus | 有效词 2 | Bible Project / Terra Invicta / Roblox / Gundam / Xenoblade / 电影同名。 |
| 156 | Tiles of Grimmwoods | 有效词 0 | 发售首日，70 条去重零品牌命中。 |
| 157 | GRAVHOUNDS | 有效词 1 | 未发售（11-02），仅 `game preview` 一条。 |
| 160 | Mayday: The Survival Island | 有效词 8 | 品牌太长、`mayday` 通用词分流；8 条全为 release/price/platform/demo，攻略型 0。 |
| 161 | Ramen Shop Simulator | 有效词 8 | 品类通用词组，android/apk/mobile 疑撞同名手游，攻略型 0。 |
| 162 | ALTEREDBLOOD+ [AB+] | 有效词 0 | 含 `+`/`[AB+]` 的品牌 Suggest 零建议，47 条去重零锚定。 |

> 复采条件（沿用 harvest 报告）：已发售的 #142 #143 #145 #147 #148 #154 #156 于发售/EA 后 **D+7** 复采；未发售的 #157(11-02) #160(11-02) #161(11-03) #162(11-04) #159(11-05) #158(11-09) 定档后 D+7 复采。有效词 ≥20 才重新进评分。

## 五、本轮方法层结论与边界

1. **模板 `.wiki` 站网络第四次被域名实测抓到，而且这次是「6 个候选 5 个中招」**：`deadlydaysroadtrip.wiki`（45 页×4 语言）、`divinefrequency.wiki`（42×4）+`divine-frequency.wiki`（26×4）、`nomad-drive.wiki`（27×3）+`nomaddrive.wiki`（88×4）、`casualties-unknown.wiki`（24×2）、`airport-contraband.wiki`（47×4）、`countyoffortune.wiki`（20 单语）——**结构一致（/guide + /characters|/items + 多语言 + 同一套分类），全部在发售前后 1–4 天铺满**。**36 条 SERP 一个都没有返回这些站**（#146/#149 尤其干净，SERP 完全空白，会直接误判成竞争 5）。
2. **因此本轮的竞争分全部由实测决定，SERP 只用于确认「有无大站/官方占位」**：若只看 SERP，6 个候选会得到 P=0–1（竞争 4–5），实测后是 P=1.0–3.0（竞争 0–4）。这与 10-29 / 10-30 的记录一致，但本轮是**首次出现「实测直接把候选判死」**（#144）。
3. **需求侧仍是主杀伤**：6 个进评分候选里 3 个（#146 #159 #149）落在「25 词上下 + 攻略型 20% + 只有一个页型」的结构，这是本轮最典型的「新游发售期长尾未形成」形态；严格读法直接 veto，上限读法也只有 14–15 分。
4. **需要主 Agent / 人工复核的三处边界**（都写了两种读法的总分）：
   - **#144 竞争 0 vs 2**：`nomaddrive.wiki` 7 周未更新（9-12），厚/薄判定直接决定 11 分（放弃）还是 14 分（可建）。Profile 明确「P 2.5–3 → 需主管决策」，本轮按严格标放弃。
   - **#146 需求 2 vs 3**：25 词、20% 攻略型、单一页型；取 3 → 14 分可建。按 #79/#84 的主管裁定口径取 2。
   - **#159 需求 2 vs 3**：26 词、19% 攻略型、单一页型；取 3 → 15 分可建；但 168K 愿望单只有三方口径，第三方信号弱。
5. **口径缺口再次出现**：`#158` 的攻略型占比按 harvest 口径是 34.8%、按词表分类相加（含 Co-op 26）是 41.6%，**同一份词库两个数字**。§2.2 已写明「≥60 词且攻略型 30–50%」要两读法并列，本轮已按此处理（15 / 16，均 ≥14）。**建议**：下一轮之前统一「Co-op/Multiplayer 是否计入攻略型」并在 harvest 脚本里固化，否则每个候选都要人工二次核对。
6. **Trends 6/6 不可判定**：裸请求 `trends.google.com/trends/explore` 返回 **HTTP 429（缺 cookie）**，页面拿不到 `timelineData`。按 2026-10-30 决定「取不到不封顶」，本轮按发售日/更新日给分，四项字段全部如实记录（形状 `未见` / 方向 `未见` / 基准词 `palworld wiki` / 原因 `HTTP 429`）。**这不是规则遗漏，是已知工具限制**。
7. **成本口径不变**：域名/托管 0 元（`*.vercel.app` + Vercel Hobby），token 与人工建站后回填台账；回本按组合口径、RPM $1–5/千次（第三方基准，2026-08，非承诺），单站 PV 不构成回本结论。
