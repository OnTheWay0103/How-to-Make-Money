# SCOUT-9/11-GATE — 候选池建站门禁复核（8 候选）

> 任务编号：SCOUT-9/11-GATE
> 材料版本：`keyword-results/CANDIDATE-POOL.md`（最后更新 2026-09-06）
> 执行日期：2026-09-11（周五）
> 岗位：游戏侦察员（先读 `docs/agents/11-岗位卡-游戏侦察员.md` + `12-Profile-游戏侦察员.md`，机制见 `10-候选池机制与岗位全景.md`）
> 模式：**只读**复核 — 未建站、未改任何 `*wiki/` 目录、未 commit/push

## 门禁口径说明（MUST 先读，影响 GO/NO-GO 判定）

Profile 12「评分规则」原文：

- ≥ 17 分：强烈推荐（近期建站）
- 15-16 分：推荐/观望（按上线日窗口决定）
- 12-14 分：观望（等更多数据）

`CANDIDATE-POOL.md` 记录的 **9/3 BUILD-GATE 实际开门线是 19/20**（Anomaly President）。

本次复核**以 Profile 12 的 ≥17 为 GO 线**（Profile 优先于历史操作口径），并在每节标注「距 19/20 前例差多少分」。若主 Agent 沿用 19/20 前例，则本批**无候选达标**——此差异请主 Agent 显式决策。

四维分值沿用 Profile 12 / 机制文档口径：搜索需求 /5 + 生命周期 /5 + 内容扩展 /5 + 竞争结构 /5 = /20。

**数据方法**：Steam 官方 store API（`appdetails`、`appreviews`、`storesearch`）直取 + SteamCharts 直读 + WebSearch/WebFetch 交叉核验。
**数据限制**：SteamDB 全站 403、SteamSpy 被 Cloudflare 拦截、fandom.com 与 r.jina.ai 本机不可达（ECONNREFUSED），wiki 存在性以 WebSearch site 检索 + 站点可达性探测交叉判定；wishlist 绝对数除 Dressmaker（官方新闻稿）外多为第三方模型值，一律标 `[Unconfirmed]`。

---

## 总览表

| 候选 | 池内分 | 今日分 | 变动 | 实际发售 | 评测数 / 好评率 | 峰值 CCU | 组织化 wiki | 门禁 |
|------|:--:|:--:|:--:|------|------|------|------|:--:|
| Dressmaker | 19 | **17** | -2 | 未发售 **9/21**（10 天后） | 0（未发售）；200K+ wishlist | — | ❌ 无 | ✅ **GO** |
| Silver Pines | 19 | **17** | -2 | 未发售 **10/8**（27 天后） | 0（未发售） | — | ❌ 无 | ⚠️ **GO（窗口偏早）** |
| Corsair Cove | 15 | **16** | +1 | 已发售 7/31 | 3,342 / 85.7% Very Positive | ~12,640（[Unconfirmed]） | ✅ thegameswiki | ❌ NO-GO |
| Ex Sanguis | 16 | **15** | -1 | 已发售 **9/10 EA（昨天）** | 7 / 42.9% | [Unconfirmed] | ❌ 无 | ❌ NO-GO |
| Approximately Up | 17 | **15** | -2 | 已发售 8/6 | 1,045 / 94.2% Very Positive | 2,713 | ❌ 无 | ❌ NO-GO |
| Combolands | 16 | **13** | -3 | 已发售 8/24 | 1,174 / 97.7% Overwhelmingly Positive | 1,794（[Unconfirmed]） | ❌ 无（但攻略站密集） | ❌ NO-GO |
| Ledgerbound | 16 | **12** | -4 | 已发售 8/13 | 579 / 92.9% Very Positive | 864 | ❌ 无 | ❌ NO-GO（AdSense 否决） |
| TWD: Streets of Survival | 15 | **12** | -3 | 未发售 **9/18**（7 天后） | 0（未发售） | — | ⚠️ TWD fandom 生态 | ❌ NO-GO |

---

## 1. Dressmaker ✅ GO（17/20）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **未发售，2026-09-21（10 天后）**，`coming_soon=true` | Steam appdetails appid **4019220** |
| 价格 | 未公布（[Unconfirmed]，Steam 页无 price_overview） | Steam appdetails |
| 开发/发行 | Cozy Lives（Free Lives 的 cozy 子厂牌）/ Free Lives | Steam appdetails |
| 平台 | Windows + macOS | Steam appdetails |
| 评测 | 0（未发售） | Steam appreviews |
| 需求 | **200,000+ Steam wishlist**（官方新闻稿）；itch 原型 **100,000+ 下载**；TikTok 视频 ~500K 播放 | [gamespress 官方通稿](https://www.gamespress.com/ko-KR/Highly-anticipated-Dressmaker-gets-a-release-date-200k-Wishlists) / [indiegame.com](https://indiegame.com/en/archives/32438) |
| CCU | —（未发售） | — |

**Wiki 竞争（EN/CN/JP 全面检查）**
- fandom：❌ 无（`Dressmaker wiki` EN 检索仅返回官网与新闻；无 fandom/wiki.gg/Game8 结果）
- wiki.gg：❌ 无
- 灰机 / bilibili wiki / 萌娘百科：❌ 无（中文检索空结果）
- 日文 wikiwiki.jp / atwiki.jp：❌ 无（仅 gamewith.jp 的[游戏资料库条目](https://gamewith.jp/gamedb/17408)，非攻略 wiki）
- ⚠️ 唯一竞争：**dressmakergame.com**（粉丝站，含图案排布技巧 / 高分穿搭 / 更新日志 FAQ）——是 fan site，**不是组织化 wiki**，内容体量小
- **主要风险：裸名 SERP 污染**。Steam 上另有 **DressMaker（appid 1487080）** 与 **DressMaker Pro（appid 1599300）**两款无关应用，且 "Dressmaker" 本身是通用英文词 → MUST 以长尾词为主攻（`Dressmaker patterns`、`Dressmaker fabric grain`、`Dressmaker customer requests`、`Free Lives Dressmaker`）

**内容深度**：面料体系（棉/亚麻/羊毛/丝绸/天鹅绒）、**布纹方向 grain direction** 与 **斜裁 bias cut** 真实机制、图案排布与省料、人台预览、缝纫机缝合、装饰（纽扣/缎带/贴花/蕾丝）、镇民订单（可满足**或故意搞砸**）、镇民日历事件、声望与金币、橱窗售卖。同类 cozy 模拟在本矩阵已多次验证（DOLOC TOWN 22、ReStory 22、Nivalis Nights 22、Moonlight Peaks 17、Waterpark Simulator 17）→ 现实可支撑 **15-20 篇**长尾。

**AdSense 合规**：`content_descriptors.ids = []`（**完全为空**）——本批 8 个候选中**唯一零标记**。无血腥/色情/敏感题材。风险最低。

**四维评分**
- 搜索需求 **4/5**：200K+ wishlist 属头部量级；但裸名泛化 + 两个同名 Steam 应用压词，扣 1
- 生命周期 **4/5**：cozy 模拟长尾稳定（矩阵内同类站已验证）；单机离线、无 live-service，扣 1
- 内容扩展 **4/5**：面料/图案/客户/事件/经济五条线，15-20 篇
- 竞争结构 **5/5**：EN/CN/JP 零组织化 wiki，唯一 fan site 体量小
- **合计 17/20**（距 19/20 前例差 2 分）

**GO 理由**：本批唯一同时满足「零 wiki + AdSense 全清 + 200K wishlist + 发售窗口在 10 天内」的候选，且完全复刻本矩阵已验证的「发售前建站抢索引」模式（Crimson Moon 8/28 建→9/1 发售、Fallen Tear 8/31 建→9/16 发售、Welcome to Elderfield 8/30 建→9/10 发售）。

**执行注意**：① SEO 主攻必须避开裸词 `Dressmaker`，用 `Free Lives Dressmaker` / `Cozy Lives Dressmaker` + 机制长尾；② 官网 `dressmakergame.com` 已在铺内容，建站需在深度上压过它；③ 发售后再按实际评测复核口碑。

---

## 2. Silver Pines ⚠️ GO（17/20，但窗口偏早 27 天）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **未发售，2026-10-08（27 天后）**，`coming_soon=true` | Steam appdetails appid **2333000** |
| 价格 | 未公布 [Unconfirmed] | Steam appdetails |
| 开发/发行 | Wych Elm（瑞典/挪威远程小团队，处女作；成员做过 Helldivers 2 / The Darkness / Yoku's Island Express）/ **Team17** | Steam appdetails + [Wikipedia](https://en.wikipedia.org/wiki/Silver_Pines) |
| 平台 | PS5 / Xbox Series X\|S / Switch / Switch 2 / PC（Steam + Epic） | [gametsu/gematsu 等](https://www.gematsu.com/games/the-walking-dead-streets-of-survival) 检索汇总 |
| 评测 / Demo | 0（未发售）；Demo 已上（appid 4540100） | Steam appreviews |
| wishlist | 池内记 83-112K、社区 10-11K 成员 — **今日未复核** [Unconfirmed] | CANDIDATE-POOL.md 8/10 记录 |

**Wiki 竞争**：fandom ❌ 无；wiki.gg ❌ 无；中文（baike.baidu / acgwiki.tw）仅**百科条目**非攻略；日文 ❌ 无。
⚠️ 唯一沾边：[apocanow.es 的「Guía y Solución de Silver Pines」](https://www.apocanow.es/guias/multi/31735/silver-pines) 是**模板占位页**（自述「等有内容再补」），非实质攻略。→ 实质零竞争。
⚠️ 风险：**Team17 是中型发行商**，发售前后有官方/授权 wiki 快速落地的可能（Crimson Moon 同类风险）。

**内容深度**：类银河城 → 互联小镇地图 + 工具/武器解锁门 + 隐藏路径 + 回溯；Boss 与小怪层级；武器（美工刀 / .36 左轮 / 霰弹枪）；**装弹反射小游戏**；Trinkets 饰品；有限背包 + 弹药/药品稀缺 + 近战武器耐久（胶带修）；投币电话存档；拍照地图标记；密码锁谜题。→ 现实可支撑 **20+ 篇**（区域攻略 / Boss / 道具 / 谜题密码 / 结局 / 资源管理）。

**AdSense 合规**：`content_descriptors.ids = [5]`（General Mature Content），官方说明含 blood / violence / horror themes。**无裸体/性内容** → 风险中等可控（与已建 crimsonmoonwiki 同级）。

**四维评分**：搜索需求 **4/5**（wishlist 中高位 + Team17 营销 + 银河城查询结构丰富）；生命周期 **4/5**（单机有限内容会衰减，但银河城长尾 + DLC 潜力）；内容扩展 **5/5**（20+ 篇，本批最强）；竞争结构 **4/5**（今日零 wiki，但 Team17 官方 wiki 风险 + 距发售 27 天，窗口尚早）→ **合计 17/20**。

**GO 但建议不占用今天的名额**：分数与 Dressmaker 持平，但发售日远 17 天，且候选池自身规划就是「9 月底复查」。今天建会白放 2 周以上索引期且承担 Team17 官方 wiki 抢先的风险。建议 **9/25-10/1 再建**，届时 Demo 内容已被玩家挖透，攻略可写得更实。

---

## 3. Corsair Cove ❌ NO-GO（16/20，卡在竞争结构）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **已发售 2026-07-31**（6 周前） | Steam appdetails appid **1368140** |
| 价格 | $39.99 | Steam appdetails |
| 开发/发行 | Limbic Entertainment（Tropico 6）/ Hooded Horse；**Game Pass 首日** | Steam appdetails |
| 评测 | **3,342 条 / 85.7% Very Positive** | Steam appreviews（9/11 直取） |
| 峰值 CCU | **~12,637–12,679**（Raijin 12,637 / Tracker.gg 12,679 / activeplayer 24h 12,294，多源一致「>12,000」）[Unconfirmed-第三方] | [raijin.gg](https://raijin.gg/app/1368140/Corsair_Cove) / [tracker.gg](https://tracker.gg/population/steam/1368140) |
| 销量 | **48 小时内 100,000 份**（Hooded Horse CEO 公开）；发售前 2 天 500K+ wishlist；进 Steam 全球畅销榜第 6 | [Gamekult](https://www.gamekult.com/actualite/corsair-cove-prouve-que-tout-le-monde-aime-les-pirates-et-ecoule-100-000-unites-en-48-heures-3050871504.html) / [Game*Spark](http://www.gamespark.jp/article/2026/08/04/170202.html) |

**Wiki 竞争 —— 这是否决项**
- ✅ **组织化 wiki 已存在**：[thegameswiki.com/corsair-cove/wiki/overview](https://thegameswiki.com/corsair-cove/wiki/overview)（含 3 岛 / 50+ 商品 / 垂直分层建造体系）
- ✅ **TheGamer 专区**：[thegamer.com/tag/corsair-cove](https://www.thegamer.com/tag/corsair-cove/) — 已发《14 Best Principle Buildings To Build First》《How To Get More Drifters》《Black Powder Material Guide》《Principle Points Unlock Guide》等
- ✅ **allthings.how**：[每个建筑及其造价](https://allthings.how/corsair-cove-every-building-and-its-build-cost/)（覆盖 140+ 建筑）
- ✅ **xmodhub**：[50+ 商品资源管理终极指南](https://www.xmodhub.com/info/guides/corsair-cove-resource-guides/)（已多语言）
- ✅ blast.tv 技巧 / [finalboss.io 首个海盗营地攻略](https://finalboss.io/coco-s-cove-how-to-build-a-first-pirate-camp-part-1-guide)
→ 六大来源已把建筑表、资源链、原则建筑、解锁路径全部铺满。

**内容深度**：极高（140+ 建筑 / 50+ 商品 / 3 岛 / 科技罗盘 / 海军回合战斗 / 原则与 Drifters）→ 本可支撑 25+ 篇。**AdSense**：`content_descriptors.ids = []` 干净。

**四维评分**：搜索需求 **5/5**；生命周期 **4/5**；内容扩展 **5/5**；**竞争结构 2/5**（组织化 wiki 已存在 + 四大攻略站全角度覆盖 + 发售 6 周窗口全关）→ **合计 16/20**。**卡点：竞争结构**。

---

## 4. Ex Sanguis ❌ NO-GO（15/20，卡在内容深度 + 首日口碑）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **已发售 2026-09-10 EA（昨天）**，`coming_soon=false` | Steam appdetails appid **3275050** |
| 价格 | **$17.99**（原价 $19.99，-10% 首发折扣） | Steam appdetails |
| 开发/发行 | Lightbulb Crew（《Othercide》团队）/ Firesquid | Steam appdetails |
| 评测 | **7 条 / 42.9% 好评**（首日样本极小） | Steam appreviews（9/11 直取） |
| 峰值 CCU | [Unconfirmed] — App 太新，SteamCharts 尚无页面 | — |
| wishlist | [Unconfirmed] — 多轮检索无权威数字 | — |

**Wiki 竞争**：fandom ❌ / wiki.gg ❌ / 中文（keylol 仅购物帖、Ludens 仅试玩报道）❌ / 日文 ❌ → **实质零 wiki**。媒体覆盖密集（RPS、TechTimes、Rogueliker、Try Hard Guides、Turn Based Lovers、Gematsu、Pizza Fria）但**全是评测/预览，不是攻略**。

**内容深度 —— 否决主因**：EA 首发仅 **2 个 biome（Desert / City）+ 1 主 Boss + 2 小 Boss + 3 个 Stillae 原型（Swordlady / Gunlass / Time Wizardress）+ 12 项 traits**。评测明确批评「variety 不足」「只有三个职业」「找到强 combo 后 build 就重复」。
时间线机制（AP 消耗推后回合、加速/延迟/换位、可预判的敌方延迟行动）+ XCOM 式环境互动（爆炸物/点燃/视线阻挡/击退/强制朝向/侧翼加成/DoT）确是优质攻略题材，但**当前内容量写不出 15 篇以上**。路线图覆盖 2026 下半年至 2027（新敌人/Boss/biome/天赋树/周挑战/4 人 Co-op）→ 长期可成长，但**今天不是建站时点**。

**AdSense 合规**：`content_descriptors.ids = [2, 5]`（Frequent Violence or Gore + General Mature Content）。官方说明为风格化血液特效，**无裸体/性内容** → 中等可控。

**四维评分**：搜索需求 **3/5**（无 wishlist 证据 + 硬核战术小众，仅 Othercide 血统与中文零售帖作正向信号）；生命周期 **4/5**（EA ≥6 个月 + 2027 路线图）；内容扩展 **3/5**（当前仅 3 职业/3 Boss/2 biome）；竞争结构 **5/5**（零 wiki）→ **合计 15/20**。**卡点：内容扩展（+首日 7 条评测、42.9% 的弱口碑）**。
**建议**：EA 内容更新 2-3 轮后（或 12 月大版本）再复核。

---

## 5. Approximately Up ❌ NO-GO（15/20，卡在搜索需求）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **已发售 2026-08-06**（5 周前） | Steam appdetails appid **3904850** |
| 价格 | $24.99（已恢复全价） | Steam appdetails |
| 开发 | Approximately Games（单人开发） | Steam appdetails |
| 评测 | **1,045 条 / 94.2% Very Positive**（池内 8/25 记 ~775 条/95% → **环比增长约 +270 条，趋势正向**） | Steam appreviews（9/11）/ 池内 8/25 记录 |
| 峰值 CCU | **2,713**（24h 峰值 434 / 30 天峰值 2,106 / 当前 420） | [SteamCharts](https://steamcharts.com/app/3904850) |
| 销量 | 池内记 38.6K（Gamalytic）[Unconfirmed] | CANDIDATE-POOL.md |

**Wiki 竞争**：fandom ❌ 无；wiki.gg ❌ 无；EN 检索无组织化 wiki。唯一攻略内容：
- [kosguides《How to Enter Black Hole Tunnel》](https://kosguides.com/20744-approximately-up-how-to-enter-black-hole-tunnel/)（单篇深度指南）
- Steam 社区公告/更新日志（1.0.104–1.0.110，新方块 Space GPS / Massmeter / 手册 / 撤销重做）
→ 实质零 wiki。池内记的「fandom 空壳 wiki」今日未能复现（本机 fandom 不可达，标 [Unconfirmed]）。

**内容深度**：**15 个星球**（各有重力/大气/温度/动态配乐）+ 星球站（检查点/车库）+ 具名任务（Tree Lid、Baobara Interference、Operation Ghostfire、Twin Crystals）+ 模块化飞船部件（电推/燃料/混合燃料/太阳能板/耐热框架/GPS/质量计/雷达/加速计/变焦相机）+ **Steam Workshop UGC** + 物理建造 → 现实可支撑 **15-20 篇**。
**AdSense 合规**：`content_descriptors.ids = []` 干净。

**四维评分**：**搜索需求 3/5**（38.6K 销量 + 峰值 CCU 2,713 偏小，$24.99 中高价，游戏名泛化；但评测增速正向 + 查询需求有实证）；生命周期 **4/5**（沙盒 + Steam Workshop UGC + 单人开发者高频打补丁）；内容扩展 **4/5**（15 星球 / 部件表 / Workshop / 物理）；竞争结构 **4/5**（近乎零 wiki；但沙盒类易被粉丝自发建 wiki）→ **合计 15/20**。**卡点：搜索需求（玩家基数上限低）**。
**建议**：池内标的「9/10 复查」今日到期，结论为**维持观望**——评测数在涨（775→1,045）是唯一改善项，但峰值 CCU 2,713 说明需求天花板明确。

---

## 6. Combolands ❌ NO-GO（13/20，卡在搜索需求 + 竞争结构）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **已发售 2026-08-24**（2.5 周前） | Steam appdetails appid **4075620** |
| 价格 | **$9.99** | Steam appdetails |
| 开发/发行 | Crux Games（2 人团队，自发行） | Steam appdetails |
| 评测 | **1,174 条 / 97.7% Overwhelmingly Positive**（本批好评率最高） | Steam appreviews（9/11） |
| 峰值 CCU | **1,794** [Unconfirmed — 来源为 SteamDB 对比图表搜索摘要] | steamdb.info/charts（经 WebSearch 摘要） |
| 背书 | Polygon「Cities: Skylines meets Balatro…Steam's coolest new roguelike in years」 | [Polygon](https://www.polygon.com/combolands-demo-preview-impressions/) |

**Wiki 竞争**：❌ 无组织化 wiki —— **但攻略站已密集铺满元游戏**：
- [xmodhub《Best Guild Combos & Synergies》](https://www.xmodhub.com/info/guides/best-guild-combos-combolands-roguelike-citybuilder/)（公会配对 / 地形 pivot / 陷阱组合 / 议员 / 100+ heirloom）
- [xmodhub《High Score Guide & Exploits》](https://www.xmodhub.com/info/guides/combolands-high-score-guide-citybuilder-exploits/)（无限循环 exploit、连锁反应）
- [gameplay.tips 后期钓鱼+商业策略](https://gameplay.tips/guides/combolands-roguelike-citybuilder-late-game-fishing-and-commercial-strategy.html) + [tags 汇总页](https://gameplay.tips/tags/combolands-roguelike-citybuilder)
- [kosguides 隐藏成就（Rogue/Arcane 公会解锁）](https://kosguides.com/20762-combolands-roguelike-citybuilder-secret-achievements-guide/)
→ 元游戏核心（组合、heirloom、exploit）已被三家写透。

**内容深度**：**确实深** —— 120+ 建筑、7 个计划公会（+2 隐藏 Rogue/Arcane）、100+ 被动 heirloom、议员系统、多地形 biome、8 周人口里程碑循环 → 可支撑 15-20 篇。
**AdSense 合规**：`content_descriptors.ids = []` 干净。

**四维评分**：**搜索需求 3/5**（$9.99 低价封顶 + 2 人团队 + 仅英文 + 峰值 CCU 1,794 → 需求上限受限；好评率 97.7% 是最强项但转化不了搜索量）；生命周期 **3/5**（roguelike 单局制，小团队更新节奏慢）；内容扩展 **4/5**（120 建筑 / 100+ heirloom / 9 公会）；**竞争结构 3/5**（无 wiki 但 xmodhub/gameplay.tips/kosguides 已占住元游戏关键词）→ **合计 13/20**。**卡点：搜索需求 + 竞争结构**。

---

## 7. Ledgerbound ❌ NO-GO（12/20，AdSense 硬否决）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **已发售 2026-08-13**（4 周前；原定 8/11，Steam 内容审查延迟 2 天） | Steam appdetails appid **3315060** |
| 价格 | **$29.99**（池内已标「高价」） | Steam appdetails |
| 开发 | OmniMegaSuperCorp（前 Helldivers 2 开发者创立） | Steam appdetails |
| 评测 | **579 条 / 92.9% Very Positive**（4 周仅 579 条 = 增速慢） | Steam appreviews（9/11） |
| 峰值 CCU | **864** | [SteamCharts](https://steamcharts.com/app/3315060) |

**AdSense 合规 —— 硬否决项**
`content_descriptors.ids = [1, 5]`（**Some Nudity or Sexual Content** + General Mature Content）。Steam 官方说明原文摘录：
> "…there is a lot of swearing and **sexual humor** … there is a lot of **innuendo**, and the text and VO do get fairly spicy—think **three out of five peppers** … **crude language…like lots of it**; **alcohol and drug use**; the aforementioned **steamy, non-visually explicit romance**; and **mentions of suicide**."

对照本项目已固化的 AdSense 治理规则（Blood Dungeon 因「裸体/粗俗内容」被否），Ledgerbound 同时命中**性暗示 + 粗俗语言 + 药物使用 + 自杀提及**四项 → **MUST NOT 建站**。

**Wiki 竞争**：❌ 无 fandom/wiki.gg/官方 wiki；仅 [chaptercheats.com 的 Walkthrough Part 1 + hints](https://www.chaptercheats.com/cheats/pc/787753/ledgerbound-cheat-codes)（及 A.R.T.E. 技巧单页）。竞争极低。

**内容深度**：A.R.T.E. 元素三角、Promotion Paths、Swag/Liabilities 装备（如 Quota Collar +20% 伤害但每回合「血偿」）、HR 可选目标（换 tickets → Certificate of Mastery → Shareholder Value）、Burnout/关系经营、战斗复盘模式 → 中等，约 12-15 篇。

**四维评分**：搜索需求 **2/5**（$29.99 + 峰值 CCU 864 + 4 周仅 579 条评测）；生命周期 **3/5**；内容扩展 **3/5**；竞争结构 **4/5**（仅 chaptercheats）→ **合计 12/20**，**叠加 AdSense 硬否决**。**卡点：AdSense 合规（一票否决）+ 搜索需求**。

---

## 8. The Walking Dead: Streets of Survival ❌ NO-GO（12/20，卡在内容深度 + 竞争结构）

| 项 | 数据 | 来源 |
|------|------|------|
| 发售 | **未发售，2026-09-18（7 天后）**，`coming_soon=true` | Steam appdetails appid **3777850** |
| 价格 | $19.99 | Steam appdetails |
| 开发/发行 | Odaclick Game Studio / Trailmark Games（AMC 官方 IP） | Steam appdetails |
| 平台 | PS5 / Xbox Series X\|S / Switch / Switch 2 / PC | [gematsu 等](https://www.gematsu.com/games/the-walking-dead-streets-of-survival) 检索汇总 |
| 评测 / Demo | **0 条**（未发售）；免费 Demo 已上（appid 4718570） | Steam appreviews |
| 营销 | Gamescom 2026 Future Games Show 公布 Negan 为可解锁角色 | [Graphic Policy](https://graphicpolicy.com/2026/08/27/the-walking-dead-streets-of-survival-reveals-negan-as-a-playable-character/) |

**Wiki 竞争 —— 否决主因**
- ⚠️ **walkingdead.fandom.com 已有本作词条**：https://walkingdead.fandom.com/wiki/The_Walking_Dead:_Streets_of_Survival
  （当前是 stub，仅引用 IGN 公布预告，**但该 fandom 是游戏界体量最大的 IP wiki 之一**，配套还有 walking-deadroad-to-survival.fandom.com 等子站）
- 同 IP 的既有 wiki 生态会**在发售当周内**吸收全部攻略需求 → 与 pool 内「大 IP 有 wiki 快速出现风险」判断一致，今日已可确认该风险落地
- 大站（IGN 已有本作专页与公布预告）发售即铺

**内容深度**：**4 名可玩角色**（Rick Grimes 马格南 / Daryl Dixon 十字弩 / Michonne 武士刀 / 解锁 Negan + Lucille）、**4 个 Boss**（Winslow、Well Walker、Simon、Negan 多阶段）、场景（Sanctuary / Hilltop / Alexandria）、多难度 + Easy Mode、可重复刷的横版清版结构 → **现实上限约 8-12 篇**，且横版清版类长尾关键词极少。**这是本批内容深度最差的候选。**

**AdSense 合规**：`content_descriptors.ids = [2, 5]`（Frequent Violence or Gore + General Mature Content），官方说明「frequent blood and gore」+ 人类互殴 + 丧尸血腥 → 风险偏高。

**四维评分**：搜索需求 **4/5**（TWD IP 搜索量巨大且 5 平台同步，但绝大多数流量会被 fandom 与大站截走）；生命周期 **3/5**（线性清版，无 live-service 钩子）；**内容扩展 2/5**（4 角色 / 4 Boss → 8-12 篇封顶）；**竞争结构 3/5**（TWD fandom 已有词条 + 大站发售即铺）→ **合计 12/20**。**卡点：内容扩展 + 竞争结构**。

---

## 附：其余 ≥15 候选快速核验（Steam 官方 API 直取，2026-09-11）

| 候选 | 池内分 | 实际发售 | 评测 / 好评率 | 价格 | content_descriptors | 结论 |
|------|:--:|------|------|------|------|------|
| **Neverway** | 16 | **2027**（池内「10 月窗口未定」→ 已推迟到 2027） | 0 | n/a | [2,5] | ❌ **NO-GO — 窗口推到 2027**（Prologue 仍免费可玩） |
| **Entropy** | 18 | 已发售 8/18 EA | 286 / 94.4% Very Positive | $11.99 | [] 干净 | ❌ NO-GO — 评测量偏小（286）、名字泛化（Steam 另有 2 个同名 app） |
| **Nimbit Frontier** | 18 | 已发售 8/17 EA | 114 / 97.4% Very Positive | $13.99 | [] 干净 | ❌ NO-GO — 池内「首周 >300 评测可升级」未达标（仅 114） |
| **Mortal Shell II** | 16 | 已发售 8/20 | **19,144 / 78.1% Mostly Positive** | $49.99 | [2,5] | ❌ NO-GO — 玩家基数大但 IGN/Ludo.guide/社区 wiki 生态已成熟，竞争结构极差 |
| **Blood Dungeon** | 16 | 已发售 8/25 | 440 / 90.2% Very Positive | $9.99 | **[1,2,5]** | ❌ NO-GO — **AdSense 硬否决**（Some Nudity or Sexual Content + 血腥） |
| **Tiny Monster Haven** | 17 | 已发售 8/11 | **26 / 100%** | $7.99 | [] 干净 | ❌ NO-GO — 玩家基数过小 |
| **Good Heavens!** | 15 | 未发售 **9/16**（5 天后） | 0 | n/a | [] 干净 | ⚠️ 未深查 — 池内「EA 日期模糊、热度低」，今日仅确认日期已定；如主 Agent 需要可另派 |

---

## 今日建站建议（2026-09-11）

### 1) 建议今天建的：**Dressmaker**（17/20）→ `dressmakerwiki`

- **唯一理由**：本批唯一同时满足「**AdSense 零标记**（content_descriptors 全空）+ **EN/CN/JP 零组织化 wiki** + **200K+ wishlist** + **发售日在 10 天内（9/21）**」的候选。
- **窗口价值**：现在建站 → 9/21 发售前完成 Google 索引 → 收割首发搜索第一波。这正是本矩阵反复验证过的模式（Crimson Moon 提前 4 天、Fallen Tear 提前 16 天、Welcome to Elderfield 提前 11 天）。
- **MUST 注意**：① 主攻长尾词，**MUST NOT** 依赖裸词 `Dressmaker`（Steam 上另有 DressMaker / DressMaker Pro 两个无关应用，且该词本身通用）；② `dressmakergame.com` 粉丝站已在铺内容，建站须在深度与结构化上压过它；③ `pnpm install` + geist 自托管字体 + `vercel.json` 的 `installCommand: pnpm install`（CLAUDE.md 依赖约定）。
- **风险**：价格尚未公布 [Unconfirmed]；发售前无实机口碑可依。建议发售日（9/21）后按实际评测做一次快速复核。

### 2) 备选（今天不建，约 9/25-10/1 再建）：**Silver Pines**（17/20）

同分但发售日 10/8，早建会白放 2 周索引期并承担 Team17 官方 wiki 抢先风险。建议在 9/25-10/1 复核后再走流水线。

### 3) 若主 Agent 坚持 9/3 的 **19/20 开门线**

则**本批 8 个候选全部 NO-GO，今天不建站**。此口径下建议把资源转向存量站的扩充（EXPAND 排期），而非新建。

### 4) 明确不建议

Corsair Cove（竞争结构 2/5，thegameswiki 组织化 wiki + TheGamer/allthings.how/xmodhub 已全覆盖）、Ledgerbound 与 Blood Dungeon（**AdSense 一票否决**）、TWD: Streets of Survival（内容深度 2/5 + TWD fandom 生态）。

---

## 未完成 / 存疑项（MUST 标注，非编造）

| 项 | 状态 |
|------|------|
| Ex Sanguis 峰值 CCU | `[Unconfirmed]` — EA 上线仅 1 天，SteamCharts 无页面；SteamDB 全站 403 |
| Combolands 峰值 CCU 1,794 | `[Unconfirmed]` — 来源为 WebSearch 摘要中的 SteamDB 对比图表（URL 内 appid 为 3501570，与 Combolands 4075620 不符，存疑） |
| Dressmaker 价格 / Silver Pines 价格 / TWD 未发售期 CCU | `[Unconfirmed]`（均未发售） |
| Silver Pines wishlist（83-112K） | 沿用池内 8/10 记录，**今日未复核** |
| Approximately Up 的「fandom 空壳 wiki」 | 今日**未能复现**：fandom.com 本机不可达 + EN 检索无结果 → 倾向判定为**无实质 wiki** |
| Corsair Cove 峰值 CCU 12,640 | `[Unconfirmed-第三方]` — Raijin/Tracker.gg/activeplayer 多源一致「>12,000」，但非 SteamDB 直读 |
| Good Heavens! | 仅确认发售日 9/16 + 0 评测 + AdSense 干净，**未做 wiki 竞争与内容深度深查** |
| 环境限制 | SteamDB 403 / SteamSpy Cloudflare / r.jina.ai 超时 / fandom.com ECONNREFUSED；wiki 存在性依赖 WebSearch 检索 + 可达性探测交叉判定，**未能逐个 fandom 页面直读确认** |

---

> 交接物：本报告 → 主 Agent（07/08 Profile）做建站决策。
> 本 Agent 未建站、未部署、未 commit/push、未修改任何 `*wiki/` 站点目录。
