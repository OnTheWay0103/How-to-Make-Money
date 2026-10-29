# 选词评分 — 2026-10-30

> 岗位：候选分析员（`docs/agents/22` / `23`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维 0–5、§2.6 硬否决 + 总分分流）、§3.2 六条固定查询、§3.3 域名实测、§五 三道闸门、§六 成本
> 输入：`keyword-results/discovery-2026-10-30.md`（17 候选 #124–#140）+ 上轮遗留两候选 #61 / #62
> 需求数据：`keyword-results/terriblelizards.md`（56 有效词）/ `zombieassaultresurgence.md`（34）/ `hela.md`（36）/ `undermire.md`（2）
> 竞争数据：本轮 24 条 SERP（WebSearch，hl=en 为主）+ 4 组域名实测（`dig @1.1.1.1` 取 IP + `curl --resolve` 直连，绕开本机 DNS 投毒）
> 一手复取：Steam `appdetails` + 商店页 `All Reviews` 区块，**2026-10-30（CST）**
> 未做：未采词（数据已在）、未建站、未改站点文件、未 git

## 一、总分表

| # | 游戏 | 需求 | 竞争 | 内容 | 生命周期 | 总分 | 结论 |
|:--:|---|:--:|:--:|:--:|:--:|:--:|---|
| 124 | Terrible Lizards | 3 | 4 | 3 | 4 | **14** | ✅ **可建（压线）** |
| 130 | Zombie Assault: Resurgence | 3 | 3 | 4 | 4 | **14** | ✅ **可建（压线）** |
| 61 | Hela: of Mice & Magic | 3 | 2 | 3 | 5 | **13** | ⏸️ 低优先（需求 3 <4，12–13 例外不成立） |
| 62 | UnderMire | 0 | 5 | 3 | 4 | 12 | ❌ **放弃（需求门禁，硬否决）** |
| 125 | Curse of Resthaven | — | — | — | — | — | ❌ 放弃（有效词 9） |
| 126 | The Zibbo Show | — | — | — | — | — | ❌ 放弃（有效词 6） |
| 127 | Dead Party | — | — | — | — | — | ❌ 放弃（真实锚定 5–6） |
| 128 | Phantasma Hotel | — | — | — | — | — | ❌ 放弃（有效词 1） |
| 129 | Fantasy World Manager | — | — | — | — | — | ❌ 放弃（有效词 18 <20） |
| 131 | Hoosegow: Prison Survival | — | — | — | — | — | ❌ 放弃（英文有效词 8） |
| 132 | Vampy's Big Day | — | — | — | — | — | ❌ 放弃（有效词 14） |
| 133 | Hubble Bubble | — | — | — | — | — | ❌ 放弃（token 命中≠本作，复核 4–8） |
| 134 | Rat Game | — | — | — | — | — | ❌ 放弃（撞 Roblox Rat Game，复核 ~15 且全为发售/平台） |
| 135 | Wildsite | — | — | — | — | — | ❌ 放弃（有效词 4） |
| 136 | Orcthal | — | — | — | — | — | ❌ 放弃（有效词 0，全回退 Oracle） |
| 137 | World Craft Dream Island | — | — | — | — | — | ❌ 放弃（有效词 4） |
| 138 | DUSTBLOOM | — | — | — | — | — | ❌ 放弃（有效词 7，复核≈0，撞 PoE2 物品） |
| 139 | Abandoned Below | — | — | — | — | — | ❌ 放弃（有效词 0） |
| 140 | Nothing Unusual | — | — | — | — | — | ❌ 放弃（20 词全是英文习语） |

**分流：可建 2（#124 #130，均 14 分压线）/ 低优先 1（#61）/ 放弃 16（含 #125–#140 中 15 个门禁或撞名）。**

> 与上轮（17 候选 → 可建 1）相比，本轮入池 17 个里 15 个在采词阶段就被有效词门禁挡住，这是期望行为：10-29 上架新品 D+1 评测多为 3–8 条，搜索需求还没来得及形成。

## 二、硬否决逐条（MUST 先过这一步）

| # | 游戏 | 需求侧事实（一手/词库） | 否决判定 |
|:--:|---|---|---|
| 62 | UnderMire | 有效词 **2 < 20**（锚定率 0.9%，219 条里 217 条回退到 **UnderMine**——另一款 2020 年游戏；`undermine` 还被 WoW 区域/《地下矿井》中文圈吃掉） | **需求门禁**；按 §2.6「需求 ≤2」硬否决 |
| 124 | Terrible Lizards | 有效词 56（人工复核 ≈48），攻略型 **5/56 = 8.9%**（Codes 1 + Boss 3 + Co-op 1） | 不否决（需求 3 >2），但见 §3.1 边界 |
| 130 | Zombie Assault | 有效词 34，攻略型 **8/34 = 23.5%**（Best 2 + Boss 1 + Class 1 + Co-op 4） | 不否决（需求 3 >2） |
| 61 | Hela | 有效词 36，攻略型 **1/36 = 2.8%**（只有 `crossplay` 一条） | 不否决（需求 3 >2），但见 §3.3 边界 |

## 三、进评分候选的依据链

### 3.1 #124 Terrible Lizards — 14 分（可建，压线）

**基本信息**

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 2920220 | [`appdetails`](https://store.steampowered.com/api/appdetails?appids=2920220)（2026-10-30 一手） |
| 开发 / 发行 | WDR Studios（JT Music 的开发分支）/ Digital Pajamas、Behaviour Interactive | 商店页 + 媒体（三方） |
| 发售 | **2026-10-29**（D+1） | appdetails `release_date.coming_soon=false` |
| 价格 | $19.99（原价 $24.99，-20%） | 商店页 |
| 评测 | **8 条，暂无评分**（本轮 10-30 复取；侦察轮快照为 3 条） | 商店页 `All Reviews` |
| 平台/类型 | PC / PS5 / Xbox；第一人称恐怖跑酷 + 解谜，**单人，无 co-op** | appdetails `categories` 仅 Single-player |
| 结构 | **4 关**（4 个通关成就：Level 1–4）；15 成就 / 16 奖杯 | 成就表（TrueAchievements / PSNProfiles，三方） |

**硬门槛**：有剧情、4 关、解谜（键盘码 9216 / 1903、保险丝、三开关）、4 类收集物（琥珀样本 / 录音带 / 笔记 / 毛绒玩偶）、可命名生物（双脊龙 / 雷龙 / 异特龙 / 混合体）、有结局 → 内容可写性**通过**（无构筑/数值系统，页型面窄是事实，不是门槛问题）。

**需求 3** — `keyword-results/terriblelizards.md`

| 闸门 | 结果 |
|---|---|
| ① 有效词 | 56 ≥ 20 ✅（人工复核 ≈48） |
| ② 页型覆盖（≥3 类各 ≥3 词） | ❌ 仅 Boss/Characters 一类有 3 条；Codes 1、Co-op 1 |
| ③ 第三方信号 | 部分 ✅：GameGrin「Steam Scream Fest V 愿望单 Top10」（三方，10-30）+ 开发商 JT Music 约 500 万订阅（媒体口径）；**具体愿望单数 `[待确认]`** |

- 有效词 56 落在「40–59」桶，但攻略型占比 **8.9% < 40%** → 不满足 4 分条件；
- `guide / tips / beginner guide / tier list / best build / update` 六个后缀**全部返回 0 条**（采词员实测），页型闸门 ② 未过 → 按 §2.2「发售日陷阱」**封顶 3**，§五「任一闸门不过只能落 2–3 分」→ **需求 3**（严格读法可取 2，见 §5 边界）。

**竞争 4** — `P = 1.0`（T=1, t=0）

| # | 查询 | 前 10 结果（域名 / URL / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Terrible Lizards game wiki` | cbr.com（评测，非专门）· blog.de.playstation.com（官方博客，非）· ign.com（游戏 hub，非）· intoindiegames.com/walkthroughs/terrible-lizards-walkthrough-chapter-one/（综合站单篇，非）· tvtropes.org（非）· gematsu.com（非）· whatoplay.com（非）· grindnstrat.com/terrible-lizards-chapter-1/（综合站单篇，非）· digitalfoundry.net（非） | **0** |
| 2 | EN `Terrible Lizards game guide walkthrough` | intoindiegames.com · 18183.com（中文转载）· grindnstrat.com · 9to5gaming.com · ggrealm.ru · boardgamegeek.com（同名桌游，意图错位，不计）· games.gg（非）· gaming.stackexchange.com（非） | **0** |
| 3 | EN `Terrible Lizards codes` | grindnstrat / intoindiegames / 9to5gaming / 18183（**有真实答案 9216、1903**）· fhyx.hk / freegames.codes / keysforgames / gamesplanet / gameliner（CD-key 商城，意图错位，不计） | **0** |
| 4 | ZH `Terrible Lizards 游戏 攻略` | 18183.com/gonglue/202610/9071887.html（中文图文流程，非专门）· intoindiegames · grindnstrat · 9to5gaming · ggrealm.ru · games.gg 中文页 · boardgamegeek（错位）· playgamebol（浏览器版聚合）· truetrophies | **0** |
| 5 | ZH `恐怖蜥蜴 Terrible Lizards wiki 中文` | 18183（同上）· 商店页（Epic / Xbox / PSN）· awwrated（评分站）· grindnstrat / 9to5gaming / intoindiegames / ggrealm（同上）· playpile.gg / gazettely / noisypixel（评测） | **0**（**无灰机 wiki、无中文 wiki**） |
| 6 | JA `Terrible Lizards ダイナソー ホラー ゲーム 攻略` | intoindiegames · grindnstrat · 9to5gaming · ggrealm.ru（俄）· games.gg · gazettely / 2playerz.de（评测）· 18183 · itch 聚合 | **0**（日文**零**本作攻略页） |

**域名实测（§3.3，2026-10-30）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `terrible-lizards.wiki` | **200** | sitemap **176 loc = 43 页 × 4 语言**（en/de/es/pt）；分类 guide 5 / characters 6 / mechanics 6 / release 6 / story 4 / media 4；单页 1,900–2,300 词，已覆盖 walkthrough、all bosses、beginner guide、secrets、jumpscares | **2026-10-15**（15 天） | **厚 T=1** |
| `terriblelizards.wiki` | 000（2 个 IP 均 15s 超时） | — | — | 不计 |
| `terriblelizards.wiki.gg` | 401（未认领） | — | — | 不计 |
| `terriblelizardswiki.com` / `terriblelizardsguide.com` / `terriblelizards.guide` | NXDOMAIN | — | — | 不计 |
| `terriblelizardsgame.com` | 301 → Squarespace 托管页 | — | — | 不计（非攻略内容） |

`P = 1.0` → 区间 (0,1] → **竞争 4**。
**风险**：这站是 §3.3 记录过的「模板 `.wiki` 站网络」成员（四级语言 + 同一套分类），已在发售前（10-15）就把 walkthrough / bosses / beginnings 三类高价值页铺满；我们进 SERP 只能靠更深的章节流程与收集物定位。

**内容扩展 3**（12–19 页，≥3 类）

| 类 | 可写页 | 来源 |
|---|---|---|
| 章节流程 | 4（Level 1–4，第 1 关已有第三方逐段流程可核） | intoindiegames / grindnstrat / 9to5gaming（社区攻略可作事实源）+ 官方 4 个通关成就 |
| 解谜/密码 | 1–2（员工区 9216、地下室 1903、三保险丝、三开关） | 三家攻略一致 + 游戏内 |
| 收集物 | 2–4（琥珀 / 录音带 / 笔记 / 毛绒玩偶，按章节定位） | 15 成就 / 16 奖杯（PSNProfiles、TrueAchievements） |
| 生物/Boss | 3–4（双脊龙、雷龙追逐、异特龙终 Boss、混合体） | 商店页 + TV Tropes + 攻略正文 |
| 剧情/结局 | 1 | 商店页 About + 攻略正文 |
| 操作/跑酷 | 1 | 商店页 |
| FAQ | 3（demo、价格/平台、时长、是否联机） | 商店页 + 官方博客 |

合计 14–18 页 → **内容 3**。低于 4 分线的原因：**没有构筑/数值/物品库**，`tier list / best build / update` 后缀全 0，可写面全压在「一次性的流程与收集」上。

**生命周期 4**
- 发售 **2026-10-29（D+1）**，落在「≤8 周」本应 5 分；
- 但**Trends 未取得 `[待确认]`**，D+1 仅 8 条评测且无评分——无法证明「上升或高位平稳」，故按 4；
- 反证：同轮 GameGrin Scream Fest V 愿望单 Top10（三方）说明发售前有声量；JT Music 自带 500 万订阅受众。
- 触发降级：D+7（11-05）评测 <50 条 → 生命周期 3（总分 13 → 低优先）。

**成本与回本**

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成 | `[待确认]` | token 实测回填（建站后记台账） |
| 人工 | `[待确认]` | 目标 ≤6 小时/站（台账「实际人工小时」） |
| **回本 PV** | 总成本 ÷ (RPM/1000) | RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺）；组合口径下 30 天 300 PV ≈ $0.3–1.5 |

**结论**：硬否决未命中（需求 3 / 竞争 4）→ **总分 14 ≥ 14 → 可建（压线）**。
**若建，页型分布（MECE，`codes` 只做「章节密码/解谜」一页，不做兑换码）**：章节流程 4（首批 2）→ 收集物 3 → 生物/Boss 3 → FAQ 3 → 剧情/操作 2；首批 6 页先做 Level 1–2 + 密码 + 收集物总览。
**写作红线**：第三方流程文只写「已验证段落」；未通关部分标 `[Unconfirmed]`；不得写数值/伤害表（无来源）。

---

### 3.2 #130 Zombie Assault: Resurgence — 14 分（可建，压线）

**基本信息**

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 2747660 | [`appdetails`](https://store.steampowered.com/api/appdetails?appids=2747660)（2026-10-30 一手） |
| 开发 / 发行 | Ninja Kiwi（自研自发，SAS 系列第 5 作） | 商店页 |
| 发售 | **2026-10-28**（D+2） | appdetails |
| 价格 | $11.99（原价 $14.99，-20%） | 商店页 |
| 评测 | **170 条 68% Mixed**（D+2；侦察轮快照 163） | 商店页 `All Reviews` |
| 类型 | 俯视角 ARPG 射击，单人 / 4 人 co-op / 跨平台 | appdetails `categories` |
| 内容面（商店页一手） | 3 职业（Assault / Heavy / Medic）× 6 核心技能 + 6 职业技能 + 2 专精分支、60+ 武器、武器改装、Strongbox/制作、3 种行动模式、Bounty Board、Vendor 声望 | 商店页 + 官方 wiki |

**硬门槛**：职业/技能/武器/改装/Boss/模式/经济全有，且已有社区 wiki 在做逐项数据 → **通过**。

**需求 3** — `keyword-results/zombieassaultresurgence.md`

| 闸门 | 结果 |
|---|---|
| ① 有效词 | 34 ≥ 20 ✅ |
| ② 页型覆盖 | 部分：Co-op 4、Best 2、Boss 1、Class 1 → 仅 1 类达 3 词 ❌ |
| ③ 第三方信号 | ✅ D+2 **170 条评测 68%**（一手）+ Next Fest demo 历史（三方） |

- 34 词落「25–39」桶 = 3；攻略型 8/34 = **23.5% < 30%** → 发售日陷阱封顶 3 → **需求 3**。
- ⚠️ 口径风险：锚定率 **36.2%** 落在 §四「30–50% 可疑带」，按规则应换写法重采一次；本轮按任务要求不采词，且 34 条逐条核后全部是本作（无撞名残留），故按现有数据判 3，重采记入复评条件。

**竞争 3** — `P = 2.0`（T=2, t=0）

| # | 查询 | 前 10 结果（域名 / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Zombie Assault Resurgence wiki` | **saszombieassault.wiki.gg**（系列 wiki，含 `Levels (ZAR)`、武器、技能页 → **厚**）· pcgamingwiki（不计）· skich.app（商店聚合，非）· mmo13.ru（俄综合，非）· deals.razer.com（非）· igdb.com（非） | **1 厚** |
| 2 | EN `Zombie Assault Resurgence guide tips` | saszombieassault.wiki.gg（Levels (ZAR)，**厚**）· playco-opgame.com（联机教程单篇，非）· 9k9k.com（中文手游站概览，非）· gamereed / mmo13（非）· ldplayer（模拟器，错位）· 其他 Roblox/GMod fandom（意图错位，不计） | 1 厚 |
| 3 | EN `Zombie Assault Resurgence codes` | pcgamingwiki · Google Play / App Store（商店，非）· store.steampowered.com（不计）· ailygames.com（前瞻，非）· download.com.vn（非）→ **无 codes 生态**（付费买断，无兑换码） | 0 |
| 4 | ZH `Zombie Assault Resurgence 攻略` | saszombieassault.wiki.gg（Levels (ZAR)）· 9k9k.com / m.9k9k.com（中文概览，非）· playco-opgame（联机，非）· co-op.gg（联机信息页，非）· ailygames（日/英前瞻，非）· taptap.cn（玩家动态，非）· 百度贴吧（论坛，不计） | 1 厚 |
| 5 | ZH `僵尸突击 Resurgence 攻略 wiki` | saszombieassault.wiki.gg · 9k9k.com · mmo13.ru · steamstat.io（数据站，非）· skich.app · doom-to-die / nvz / undead-mayhem fandom（**别作**，错位不计）· mobi.gg（新闻，非） | 1 厚 |
| 6 | JA `ゾンビアサルト リサージェンス 攻略` | **日文零本作攻略**：Google Play / Steam / 韩文·泰文新闻稿 / atwiki（别作）/ namu.wiki SAS4 页（系列旧作，部分相关）/ 无关结果 | 0 |

**域名实测（§3.3，2026-10-30）**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `zombieassaultresurgence.wiki` | **200** | sitemap 48 loc = 16 页 × 3 语言（en/ja/ru）；guides 4（gameplay / system-requirements / **medic-best-perks** / **heavy-best-perks**）+ weapons + price/release/player-count 等；单页 730–830 词 | **2026-10-29**（当天） | **厚 T=1**（URL≥20、≥3 类、4 周内更新） |
| `saszombieassault.wiki.gg` | 401（wiki.gg 反爬，**未认领口径不计分**） | 但 SERP 已返回 `Levels (ZAR)`、`Galvanizer`、`Krachlader`、武器分类等实页 → 事实存在 | 页面含 v0.9 版本变更 | **厚 T=1（按 SERP 证据计，不按探测）** |
| `zombie-assault-resurgence.wiki` / `zombieassaultresurgenceguide.com` / `zombieassaultresurgencewiki.com` / `zombieassaultresurgence.guide` / `zombieassaultresurgencegame.com` | NXDOMAIN | — | — | 不计 |
| `zombieassault.wiki.gg` | 401 | — | — | 不计 |

`P = 2.0` → 按 #82 Blind Descent 同口径（两家厚站）→ **竞争 3**。
**说明**：`zombieassaultresurgence.wiki` 若判薄（英文仅 16 页），`P = 1.5`（T=1,t=1）→ 竞争仍为 3，**结论对这一判定不敏感**。

**内容扩展 4**（20–29 页，≥4 类，全部有源）

| 类 | 可写页 | 来源 |
|---|---|---|
| 职业/构筑 | 3–5（Assault / Heavy / Medic + 专精分支） | 官方 wiki 技能页 + 9k9k + co-op.gg |
| 技能树 | 2（6 核心 + 6 职业，逐项取舍） | saszombieassault.wiki.gg |
| 武器 | 6–8（手枪/SMG/突击/霰弹/狙击/火箭/LMG/强力武器） | 官方 wiki 武器分类页 + 商店页 |
| 改装/制作 | 2（10+ 模块、Strongbox 掉落、拆解） | 商店页 + 官方 wiki |
| Boss/敌人 | 2 | 官方 wiki（Galvanizer 等） |
| 模式 | 2（Eradication / Surge / Cache Recovery + 4 故事任务 + Special Ops） | 商店页 + 官网 |
| 进度/经济 | 2（XP 表 0–37+、Bounty Board、Vendor 声望） | `Levels (ZAR)`（XP 表逐级可核） |

合计 19–25 页 → **内容 4**。不取 5：职业只有 3 个，第 5 类（角色）凑不到 5 条。

**生命周期 4**
- 发售 **2026-10-28（D+2）**，≤8 周；
- D+2 已 **170 条评测**（本轮候选里体量最大），说明有真实玩家基数；
- 但 **68% Mixed** → 不满足「Trends 上升或高位平稳」的高分条件，按 4（与 #112 的「口碑降级」同口径但更轻，因为量级与系列基础更好）。
- 风险：系列旧作（SAS4）玩家用词混在品牌词里，长尾会被旧作内容分流。

**成本与回本**

| 项 | 值 | 口径 |
|---|---|---|
| 域名 / 托管 | 0 元 / 0 元 | `*.vercel.app` + Vercel Hobby |
| 内容生成 / 人工 | `[待确认]` | 建站后回填台账 |
| **回本 PV** | 总成本 ÷ (RPM/1000) | RPM **$1–5/千次**（第三方基准，2026-08），组合口径非单站回本 |

**结论**：硬否决未命中（需求 3 / 竞争 3）→ **总分 14 → 可建（压线）**。
**若建，页型分布**：职业构筑 3 → 武器 3 → 技能 2 → Boss 2 → 模式/进度 2 → FAQ 2；`codes` **不建**（付费买断无兑换码，SERP 已证零生态）。
**写作红线**：XP/技能数值只引官方 wiki 并标版本（v0.9 前后有改名与改动，如 `Auslegerlader → Krachlader`）；不得抄 wiki 的数值表当自有原创数据；评测 68% 的事实可直接引用（Steam 一手），不得写「口碑一般所以别买」。

---

### 3.3 #61 Hela: of Mice & Magic — 13 分（低优先）

> 旧分 16（10-25 旧口径，四维未拆）。本轮按新规则重评，**结论从「推荐/需主管决策」下调为「低优先」**，原因是 §3.3 域名实测发现**三家 Hela 专属站已存在**，与 10-25「三语零 wiki」的前提相反。

**基本信息**

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 3161310 | [`appdetails`](https://store.steampowered.com/api/appdetails?appids=3161310)（2026-10-30） |
| 开发 / 发行 | Windup Games（前 Unravel 团队，瑞典于默奥）/ Knights Peak（MY.GAMES） | 商店页 + 媒体 |
| 发售 | **2026-12-01**（未发售，`coming_soon=true`） | appdetails |
| 平台 | PC / PS5 / Xbox Series / Switch 2，**Xbox Game Pass 首日** | 官方公告（三方） |
| 玩法 | 3D 开放世界合作冒险，**无战斗**；蛙蛙背包、酿药（Remedies）、Shade 分身；1–4 人联机 / 2 人分屏 | 商店页 + Xbox Wire 深度介绍 |

**需求 3** — `keyword-results/hela.md`

| 闸门 | 结果 |
|---|---|
| ① 有效词 | 36 ≥ 20 ✅ |
| ② 页型覆盖 | ❌ **只有 1 类**（Co-op 1 条 `crossplay`）；28 条 Info/发售平台、7 条 Other |
| ③ 第三方信号 | ✅ **1M 愿望单（发行方口径）** / StatsWell 模型 **~607,785、全站愿望单排名 #50、关注 39,735（+28/日，2026-10-07）**（三方，两个数字冲突，两者都记） |

- 36 词落 25–39 桶 = 3；攻略型 **1/36 = 2.8%** → 发售日陷阱封顶 3 → **需求 3**。
- 含义：现在的搜索几乎全是「什么时候出 / 上不上 Game Pass / 什么平台」。**12-01 之后这批词会整体消失**，真正留下的攻略词极少（`crossplay` 一条）。

**竞争 2** — `P = 2.5`（T=2, t=1）

| # | 查询 | 前 10 结果（域名 / 归类） | 专门站 |
|:--:|---|---|---|
| 1 | EN `Hela of Mice and Magic wiki` | gematsu（非）· pcgamingwiki（不计）· esrb.org（评级，非）· filmaffinity / ppe.pl（非）· 17173（中文新闻，非）· jeu.video（非）· ign.com/games（hub，非）· gamespark.jp（PR 稿，非） | 0 |
| 2 | EN `Hela of Mice and Magic guide tips` | news.xbox.com（官方深度介绍，**算官方源不算竞争**）· 17173（中文译文）· gamesplanet 社区（商店博客，非）· mybiggaming / scenegamers（转载，非）· famitsu（预览，非）· questlog.gg（**别作** Throne and Liberty，意图错位不计）· yololab.net（中文介绍站，非专门） | 0 |
| 3 | EN `Hela of Mice and Magic codes` | 商店/key 商城（gamesplanet、gamegator、jeu.video、denderagames 等，**意图错位不计**）· games.gg（聚合，非）· gaugedb（数据站）· store.steampowered.com | 0（付费买断，无 codes 生态） |
| 4 | ZH `Hela of Mice and Magic 攻略` | 17173 · allthings.how（**酿药机制单篇**，非专门）· xboxdynasty / gamesplanet / mybiggaming / culpadolag（转载，非）· truetrophies（奖杯，非） | 0 |
| 5 | ZH `鼠鼠奇旅 Hela 魔法 游戏 wiki` | Steam 繁中页 · xiaoheihe（社区，非）· PSN / Xbox 商店 · yololab.net（介绍文）· Epic 商店 · playgame.wiki（新闻）· juejuegame（新闻）→ **无灰机/中文 wiki** | 0 |
| 6 | JA `Hela of Mice and Magic 攻略 wiki ゲーム` | 17173 · allthings.how · mybiggaming · xboxdynasty · games.gg · truetrophies / trueachievements / vgtimes（奖杯库）· ctrl-blog · famitsu → **无日文攻略 wiki** | 0 |

**域名实测（§3.3，2026-10-30）— 本轮最关键的发现**

| 域名 | HTTP | 规模 | lastmod | 计分 |
|---|:--:|---|---|---|
| `hela.wiki` | **200** | sitemap **244 loc = 61 unique × 4 语言**（en/ja/es/pt）；分类 guide / coop / characters / potions / collectibles / release / platforms；首页自述「unofficial Hela: of Mice & Magic wiki」 | **2026-10-29**（前一天） | **厚 T=1** |
| `helawiki.com` | **200** | sitemap 30 URL（en 单语）；beginner-guide / walkthrough / achievements / characters×5 / potion-brewing / shade-system / movement-guide / co-op / collections / comparisons×2 / FAQ / game-pass / editions / platforms | **2026-10-26** | **厚 T=1** |
| `helaguide.com` | **200** | sitemap 10 URL；7 篇 guide（co-op / solo-shade-system / brewing-remedies / demo / pc-requirements / platforms-and-editions） | 2026-10-09 ~ 10-13 | **薄 t=1**（URL<20） |
| `helagame.com` | 200 | 官方游戏站（Windup 版权、301 词、只有 Wishlist/Media/Community） | — | 不计（官方站，非攻略） |
| `hela.wiki.gg` / `helaofmiceandmagic.wiki.gg` | 401 | 未认领 | — | 不计 |
| `hela.guide` / `helaofmiceandmagic.wiki` / `helaofmiceandmagicguide.com` | NXDOMAIN | — | — | 不计 |

`P = 2.0 + 0.5×1 = 2.5` → 区间 (2,2.5] → **竞争 2**。
**敏感性（写清楚给主 Agent）**：`helaguide.com` 若补到 ≥20 URL 判厚 → `P = 3.0` → **竞争 0 → 硬放弃**；`helawiki.com` 若判薄 → `P = 2.0` → 竞争 3（总分 14 → 可建）。**P 正好压 2.5 线，属《Profile 异常处理》「P 在 2.5–3 之间 → 需主管决策」的邻域。**

**内容扩展 3**（12–19 页，来源可核）

| 类 | 可写页 | 来源 |
|---|---|---|
| 酿药/Remedies | 3（材料 8 种具名：Glimmer、Sticky Bun Mushroom、Arctic Starflower、Cloudberry、Red Cranberry、Forget-Me-Not、Resin Bead、Lasting Token；已知配方 Flying Soap / Active Tonic / Tonic / Recollector / Tailwind / Matchmaker） | Xbox Wire 深度介绍 + allthings.how（逐步骤） |
| 移动能力 | 2（蛙蛙背包：摆荡/滑翔/弹跳/地面砸、二段跳、耐力） | 官方 deep dive |
| 系统 | 2（Shade 分身、无死亡只扣耐力） | 同上 |
| 联机 | 2（4 人 online、2 人分屏、Game Pass、平台差异） | 商店页 + 官方 |
| 成就 | 2（PS 30 / Xbox 32 个具名） | TrueTrophies / TrueAchievements |
| 区域/角色 | 3（森林/草甸/湿地/地洞；魔女、鼠群、村民、野生动物） | 商店页 + 官方站 |
| 流程/FAQ | 3（区域流程、发售/平台、时长与难度） | 官方 + 商店页 |

合计 15–19 页 → **内容 3**。不取 4：**游戏未发售，逐条谜题与配方数值没有可核验来源**，20 页以上只能靠拆分类目硬凑；中文/日文无系统攻略（`[待确认]`，仅新闻稿），多语言机会记在扩词侧，不额外加分（与前几轮口径一致）。

**生命周期 5**
- 未发售，定档 **2026-12-01（≤8 周）**；
- 愿望单：发行方口径 **1M**（媒体转述），StatsWell 模型 ~608K、全站 #50、关注 +28/日（2026-10-07）→ 满足「wishlist 强」；
- 加上 **Xbox Game Pass 首日**（发行量放大器）。

**成本与回本**：域名/托管 0；token 与人工 `[待确认]`；RPM $1–5/千次（第三方，2026-08），组合回本。

**结论**：硬否决未命中（需求 3 >2、竞争 2 >1）→ **总分 13 <14，且 13 分档例外要求「需求 ≥4 且 竞争 ≥3」，本作需求 3、竞争 2 均不满足 → 低优先，留池观察。**
**复评触发**：
1. 12-01 发售后 **D+7（12-08）** 复采，看攻略型占比是否 ≥30%（现在 2.8%，几乎全压在发售词上）；
2. `helaguide.com` 若扩到 20+ 页或出现第 4 家 Hela 站 → `P ≥ 3` 直接放弃；
3. 若发售后 `hela.wiki` / `helawiki.com` 任一停更 8 周以上（对手退场）→ 竞争可回到 3–4，重新评估。

---

### 3.4 #62 UnderMire — 12 分，但**需求门禁直接放弃**

**基本信息**

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | 3366370 | [`appdetails`](https://store.steampowered.com/api/appdetails?appids=3366370)（2026-10-30） |
| 开发 / 发行 | Table Knight Games（曼彻斯特，自研自发） | 商店页 |
| 发售 | **2026-11-13**（未发售）；demo 2026-05-08 起长期可玩 | appdetails + 媒体 |
| 玩法 | 1–4 人第一人称手绘 Roguelite 恐怖；SMUSH 合成、恐惧值、4 角色（Hannah / Leo / Rawiah / Sam）、可变地堡、灵猫 McClane 任务、Den 升级、Mothman | 商店页 + 官方 press kit |

**需求 0（门禁）** — `keyword-results/undermire.md`
- 有效词 **2 < 20**；锚定率 **0.9%**；219 条去重建议里 **217 条回退到 `undermine`**（WoW 的 Undermine 区域、《地下矿井/UnderMine》、`undermine democracy` 等），2 条有效词也只是 `undermire game` / `undermire table knight games`；
- 按 §2.2「有效词 <20 → 门禁淘汰，不进评分」+ §2.6「需求 ≤2 硬否决」→ **需求 0**。
- 不是「搜不到就等于没有」：本作 2026-11-13 才发售，demo 有 3–3.4 万愿望单（gamedata.wtf 模型，三方），品牌词需求**现在就是没形成**，且被 `UnderMine` 结构性分流。

**竞争 5（P=0，仅作参考，不改变结论）**
- 6 条查询全部命中 `UnderMine`（2020，Thorium）：undermine.fandom / undermine.wiki.gg / undermine.huijiwiki / namu.wiki / B 站「火焰大喷菇」全攻略 / 9game / PSNProfiles —— **全部意图错位，不计**；
- 日文查询同样全是 UnderMine；中文查询只有 indiebunny 中文版、9game、游侠、18183 的新闻稿，**无 UnderMire 中文 wiki**；
- 域名实测：`undermire.wiki` / `undermireguide.com` / `undermirewiki.com` / `undermire.guide` / `undermiregame.com` / `undermire.co` 全 **NXDOMAIN**；`undermire.wiki.gg` **401**（未认领）→ `T=0, t=0` → `P=0` → 竞争 5。

**内容扩展 3 / 生命周期 4（仅作记录）**
- 内容：4 角色页 + 工具与 mod + SMUSH 配方 + 恐惧值 + 生物群系 + Boss（Mothman）+ Den 升级 + 猫任务 + 联机/语音 + demo FAQ ≈ 14–18 页 → 3；
- 生命周期：定档 11-13（≤8 周）但愿望单仅 ~3.0–3.4 万、全站排名 ~1,776（gamedata.wtf 模型，三方）→ 不属「wishlist 强」，按 4。

**结论**：总分 12 本应落「低优先」，但 **`需求 ≤2` 是硬否决、不可补偿**（§2.6 第一步）→ **放弃**。
**复采条件（唯一复活路径）**：发售 **D+7 = 2026-11-20** 用 `UnderMire co-op` / `UnderMire SMUSH` / `UnderMire demo` 三写法复采；有效词 ≥20 且攻略型 ≥30% 才重新进评分。在此之前**不得**因「零 wiki」翻案——2026-10-28 的教训是未发售候选的 SERP 空白只代表「今天」。

---

## 四、未进评分的 15 个候选（逐个一句放弃理由）

> 均为 `keyword-results/*.md` 采词已完成、有效词或锚定复核不达标；**不再重采、不打分**。

| # | 游戏 | 报告数字 | 放弃理由（一句） |
|:--:|---|---|---|
| 125 | Curse of Resthaven | 有效词 9 / 锚定率 12.0% | 有效词 9 <20，三语新闻稿都在、真实攻略词为 0；0 评测也说明首发无声量。 |
| 126 | The Zibbo Show | 有效词 6 / 锚定率 8.6% | `Zibbo` 自造词没人搜，6 条有效词不够撑 1 页；3 条评测。 |
| 127 | Dead Party | 有效词 22 / 锚定率 24.4%（复核 5–6） | `dead party` 是通用短语，22 条里绝大多数是「派对/死亡」通用意图，真实锚定仅 5–6 条 → 门禁。 |
| 128 | Phantasma Hotel | 有效词 1 / 锚定率 8.3% | 有效词 1，且 $7 小体量、0 评测，需求侧无任何信号。 |
| 129 | Fantasy World Manager | 有效词 18 / 锚定率 27.7% | 差 2 条到 20 门禁；且品牌是通用品类词组，18 条里混经营类通用意图。 |
| 131 | Hoosegow: Prison Survival | 有效词 13（英文 8 + 俄语 5） | 英文有效词仅 8 <20；生僻词没形成英文搜索量，俄语词对本站无用。 |
| 132 | Vampy's Big Day | 有效词 14 / 锚定率 16.3% | 有效词 14；`Vampy` 与 vampire 类撞名严重，134 条 93% 好评但没人搜攻略。 |
| 133 | Hubble Bubble | 有效词 56 / 锚定率 86.2%（复核 4–8） | 86% 锚定率是字符串假阳性——56 条多为童谣/通用词 token 命中，复核仅 4–8 条属本作 → 门禁。 |
| 134 | Rat Game | 有效词 58 / 锚定率 50.0%（复核 ~15） | 撞 Roblox `Rat Game`，58 条里多为别作；复核 ~15 且全是发售/平台意图 → 门禁。 |
| 135 | Wildsite | 有效词 4 / 锚定率 3.3% | 有效词 4，未发售且无愿望单数据，需求侧完全空白。 |
| 136 | Orcthal | 有效词 0 / 锚定率 0% | 269 条建议全部回退到 `Oracle`，本作 0 词 → 品牌不可分离。 |
| 137 | World Craft Dream Island | 有效词 4 / 锚定率 66.7% | 只有 22 条 raw 建议、6 条去重，有效词 4 → 需求极低。 |
| 138 | DUSTBLOOM | 有效词 7（复核 ≈0） | 7 条撞 PoE2 的 `Dustbloom` 物品/通用词，复核后本作约 0；未发售且无愿望单数据。 |
| 139 | Abandoned Below | 有效词 0 / 锚定率 0% | 18 条 raw、17 条去重、有效词 0，词库根本不存在。 |
| 140 | Nothing Unusual | 有效词 20 / 锚定率 44.4% | 20 条全是英文习语（`nothing unusual here` 类），非游戏意图 → 门禁。 |

---

## 五、本轮方法层结论与边界

1. **§3.3 域名实测第二次改写结论，而且这次是「把蓝海改成红海」**：#61 Hela 在 10-25 的判定是「三语零 wiki」，本轮实测到 **3 家 Hela 专属站**（`hela.wiki` 61 页×4 语言、`helawiki.com` 30 页、`helaguide.com` 7 页），其中前两家在 10-26 / 10-29 仍在更新 → 竞争从「5 分」降到「2 分」，总分从旧口径 16 落到 13，结论由「推荐」改为「低优先」。**SERP 六条查询对 Hela 一个专门站都没返回**（全部被新闻稿和商店页占满），这正是 §3.3 存在的理由。
2. **同时发现第二例「模板 `.wiki` 站网络」**：`terrible-lizards.wiki`（176 loc / 43 页 × 4 语言 / en-de-es-pt）与 `everlastundyingtale.wiki`（10-29 发现）结构一致，均在建站/发售前后一次铺满 guide + characters + mechanics + release 四类。**新游的「零 wiki 窗口」实测继续在 0–15 天量级**，事后补救成本高于提前建站。
3. **需求侧仍是主杀伤**：本轮 19 个候选里 15 个死在有效词（含 3 个锚定率 80%+ 的字符串假阳性：#133 Hubble Bubble 86.2%、#140 Nothing Unusual 44.4%、#134 Rat Game 50.0%）。**锚定率高不等于本作词多**——这条已在 10-29（SHARDS 86.2%）写过，本轮再验三次。
4. **两个可建都是 14 分压线，且构成不同**：
   - #124 是「竞争 4 + 生命周期 4 撑起来的」，需求侧只有 5 条攻略型词、内容侧只有 4 关；
   - #130 是「内容 4 + 竞争 3」，需求同样被发售日词主导（23.5%）。
   两者都**不是**「需求 4+ 的确定性机会」，建站后必须按 D+30 事后闸（PV30 <50 → 观察、不扩词）执行。
5. **需要主 Agent 复核的三处边界**：
   - **#124 需求 3 vs 2**：页型闸门（≥3 类各 ≥3 词）实际未过。按 §五「任一闸门不过只能落 2–3 分」取 3 属上限读数；**若取 2 → 需求 ≤2 硬否决 → 放弃**。取 3 的依据是它 56 词 ≥40 桶、只是被攻略型占比封顶（与 #112/#119/#120 同处理）。差 1 分决定建不建。
   - **#124 生命周期 4 vs 3**：D+1 仅 8 条评测、Trends `[待确认]`。取 3 → 总分 13 → 低优先。建议按「D+7 评测 <50 条降 3」的触发条件留痕，而不是现在拍板。
   - **#61 竞争 2 vs 0**：`P = 2.5` 正好压线，`helaguide.com` 补到 20 页即 `P = 3` → 竞争 0 → 硬放弃。**在 12-01 发售前不要再投入**，等 D+7 复采一并看。
6. **成本口径不变**：域名/托管 0 元（`*.vercel.app` + Vercel Hobby），token 与人工建站后回填台账；回本按组合口径、RPM $1–5/千次（第三方基准，2026-08，非承诺），单站 PV 不构成回本结论。
