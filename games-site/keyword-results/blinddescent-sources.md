# Blind Descent — 素材文档（双源，每页 ≥2 源且 ≥1 官方）

> 抓取日期：**2026-10-28**（全部来源同日抓取；官方 FAQ / 新闻稿保留原文日期）
> 规则：`docs/STRATEGY-内容生产.md` §三（A 官方 / B 社区 / C 媒体）。搜索建议、竞对正文不作事实来源。
> 抓取方式：WebFetch（服务端抓取）。本机 `curl store.steampowered.com` 全部超时（Akamai IP 不可达），已放弃直连。
> **数值纪律**：官方没给的数值一律写 `[Unconfirmed]`；第三方给出的实测值标来源与日期。

---

## 共用来源（多页复用）

### 来源 A1：官方 — Steam 商店页 / appdetails（appid 1209970）
- URL：https://store.steampowered.com/app/1209970/ ；https://store.steampowered.com/api/appdetails?appids=1209970&l=english
- 抓取日期：2026-10-28
- 关键内容（原样要点）：
  - 简介：“Blind Descent is an open-world survival adventure into the mysteries of the Martian depths.” / “Play solo or with friends in 4-player co-op as you search for the missing team.” / “Adapt to survive by building custom tools, upgrading your base, and/or mutating in this bizarre alien world.”
  - 六大特性：Alien world（reconnaissance + 寻找 missing pioneer team + AI assistant）；Crafting/scanning（“Scan and study the lifeforms around you to gather resources and craft essential tools”）；Base building（“discover the lost team's abandoned base. Clear it, make it yours, and improve it” + “vines, fungal growths, and creeping alien organisms are quick to react to neglect”）；Hazards（“underground storms, toxic gases, and aggressive creatures”）；Mutation vs science（“Science or symbiosis—the choice is yours.”）；Team survival（“up to three pioneers” 队友 = 4 人）。
  - 开发 Pokuch / 发行 META Publishing / 发售 **2 Dec, 2026**（Coming Soon To Early Access，“approximately 5 weeks”）。
  - 语言 11 种（英/法/德/西(西)/日/韩/葡(巴)/葡(葡)/俄/简中/西(拉美)）。
  - 配置：最低 Win11 64-bit、Intel Core i3、16 GB RAM、DX12 GPU 2 GB VRAM、40 GB 空间；推荐 i5+、32 GB RAM、6 GB VRAM。
  - categories：Single-player、Multi-player、Co-op、Online Co-op、Cross-Platform Multiplayer、Steam Achievements、Full controller support、Save Anytime、Steam Cloud、Remote Play on TV、HDR、Family Sharing。
  - **未提及**：temperature、oxygen、dungeon、climbing（climbing 只在官方站/presskit 出现）。

### 来源 A2：官方 — 官网 blinddescent.net
- URL：https://blinddescent.net/
- 抓取日期：2026-10-28
- 关键内容：2071 年；下潜 **10-mile deep** 火星洞穴；电梯失事、失去地表通讯、pioneer team 失踪；地下世界有 alien life、dense jungles、bizarre weather。特性分组 Survive / Build / Explore / Craft / Fight / Unite / Progress。武器类别：**bows, spears, axes, and rifles**。进度手段：**printer** 与 **signal booster** 联系地表、寻找 **energy source**。状态 “Currently Under Development”。

### 来源 A3：官方 — 官网 FAQ（**旧版，部分已过期**）
- URL：https://blinddescent.net/faq
- 抓取日期：2026-10-28
- 关键内容：2071；**Marsborn Mining Company** 的 veteran **Pathfinder**；**Pioneer team** 失联；“ten miles underground”。联机 “up to 4 players”，且 “Every story element within the singleplayer will also be playable in multiplayer”。引擎写 **Unreal Engine 4**。开发期 “only English is supported”。**平台写 “only targeting Windows 10 64-bit on the Steam platform”**，且 “There is no release date at the moment.”
- **冲突记录**：与 A1（Win11 / Steam+GOG+Epic / 2026-12-02）冲突 → 以 A1 + A4（2026-10）为准，A3 视为过期页面；引擎 UE4 与 C2 的 UE5 冲突 → 引擎写 `[Unconfirmed]`。

### 来源 A4：官方 — 发行商新闻稿 2026-10-12（META Publishing / gamespress）
- URL：https://www.gamespress.com/it/Get-ready-Elon-Blind-Descent-goes-into-Early-Access-below-the-surface-
- 抓取日期：2026-10-28（稿件日期 2026-10-12，Nicosia, Cyprus）
- 关键内容：
  - EA：**Steam、GOG、Epic Games Store，2026-12-02**。
  - co-op playtest：**2026-10-14** 起。
  - 联机：“up to four players with crossplay between Steam, GOG and EGS”，且 **“shared quests, shared world, separate inventory and mutations”**。
  - 感染设定：玩家被 alien growth 感染；共生 **“unlocks powerful mutations like telekinesis or wall running”**；保持纯净 **“means access to new technology”**。
  - 生存要素：管理 infection、治疗 **body-part injuries**、resting、scanning。
  - 探索：grappling hook、mutation powers、environmental puzzles、story logs / codex entries。
  - 制作：“**Modular crafting instead of following fixed recipes**”，覆盖 weapons、tools、shelter、medicine。
  - 战斗：“Every weapon type plays different and every enemy type requires different strategies.”
  - **未给**：价格、路线图、1.0 时间、主机日期。

### 来源 A5：官方 — 发行商新闻稿 2025-07-30（META Publishing / gamespress，首个 playtest）
- URL：https://www.gamespress.com/uk-UA/META-Publishings-Scavengers-Reign-inspired-Sci-Fi-Survival-Adventure-B
- 抓取日期：2026-10-28（稿件日期 2025-07-30）
- 关键内容：开放 Steam playtest（Windows PC），**聚焦单人**；目的 “test core mechanics and observe player behavior”。**Symbiosis System** 受 *Scavengers Reign* 启发。基地 “Build log-by-log in a world where nature reclaims what’s left unattended”，可被 “overgrown, devoured, or corrupted”。变异 “Gain abilities through exposure to alien spores, fruits, and strange infections”。攀爬 “Use advanced climbing gear to scale vertical shafts”。co-op “up to three other pioneers”（共 4 人），**alpha playtest 不含联机**。2026 年 PC 发售，主机版计划首发。

### 来源 A6：官方 — 官网 presskit
- URL：https://blinddescent.net/presskit/
- 抓取日期：2026-10-28
- 关键内容：10-mile deep Martian cave、elevator crash、surface communication lost、pioneer team missing；feature 提到 “Climb dynamically”、建造并布置房屋、追踪 pioneer team 足迹、最多 4 人 co-op；团队 Emrehan ŞEYİHOĞLU（Project Director）、Burhan KELEŞ（Art Director）。**未给** 价格 / 平台 / 发售日。

### 来源 B1：社区/媒体试玩 — gamer.org playtest review
- URL：https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/
- 抓取日期：2026-10-28
- 关键内容（试玩 build，非 EA）：
  - 2071 / **Hyperion Excavation** / 主角 **Daniel Harris**（lone active **Pathfinder**）/ AI 助手 **Hollowatch** / 受伤队友 **Hakan**。
  - **无教程提示**，靠观察。有 hydration（补水）、烧水、烹饪；失误可能致死。
  - **扫描器**：几乎所有植物/动物/结构可扫描，扫描**扩充配方池**，形成「无显式解锁树的技术树式推进」。
  - 可制作：斧、棍、火堆、简易棚（lean-to）、水容器；资源含 banana leaves、palm fronds、特定藤蔓。管理耐久、负重、烹饪。
  - 基地扩建用 workbench 与 container；**adaptations interface** 给出 armor crafting、signal tracking、new shelter blueprints 等目标。
  - 植物：resistant vines、red belly succulents、toxic wither fruit；生物：rainbow crab、“quote-unquote rabbits”、froglike organisms；**infection clusters** 会吞没玩家建筑。有昼夜与反应式动物行为。
  - UI 问题：拖拽上限、堆叠资源交互、扫描未识别物体、hotbar 冲突；环境音盖过 Hollowatch 语音。
  - **未提到**：co-op、storm/gas/temperature/oxygen、明确的 base decay 系统、mutation vs science 框架、playtest 时长。

### 来源 C1：媒体 — zero1gaming（2026-10-14）
- URL：https://zero1gaming.com/news/blind-descent-december-2-early-access-pc
- 抓取日期：2026-10-28（文章发布/更新 2026-10-14，作者 Dylan Turck）
- 关键内容：EA 2026-12-02；**EA 预计约一年**；**价格未公布**；PC = Steam/EGO/Epic（原文 Steam、Epic、GOG）；PS5 与 Xbox Series X|S 计划随**正式版**、日期未定；EA “only part of the planned story”，后续更新加 narrative、**additional biomes, creatures and resources**；威胁 “toxic gases, storms and aggressive creatures”；**specialized climbing equipment**；变异路 = 吃特定 alien fruits/spores 解锁 adaptations（改善战斗与探索）；科学路 = 研究本地生物 + 制作对抗环境的装备；两条是**互替的角色成长路线**；co-op playtest 2026-10-14 起、经 Steam 页申请。

### 来源 C2：媒体 — indiegames-inside（德语，系统细节最多）
- URL：https://www.indiegames-inside.de/blind-descent-mars-survival-open-world/
- 抓取日期：2026-10-28
- 关键内容：**Organic Restoration System** —— 砍树/建造会触发自然反扑；失修基地被藤蔓/真菌/pink infection clumps 覆盖、吞没、污染直至结构崩塌；掉落物会弱化→长藤→变真菌。**无传统技能树**，工具与武器会「变异」（锤子获得更强击打、盾与剑解锁新防御动作）。本地植物可煮成治疗药水。**声称 Unreal Engine 5**。EA 内容：**10–15 小时剧情 + 一名可玩主角**，之后 endless survival；正式版计划 **4 名可玩角色（2 男 2 女）+ 4 人联机**。据开发者说法**不计划巨型蜘蛛**。
- **注意**：该站部分信息早于 2026-10 新闻稿（写 “EA 2026 无具体日期”、“联机仅正式版”），与 A1/A4 冲突处一律以官方为准。

---

## 分页素材（每页 ≥2 源，≥1 官方）

## blind descent multiplayer / how to play blind descent multiplayer

### 来源 1：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：简介 “Play solo or with friends in 4-player co-op”；“up to three pioneers”；categories 含 Multi-player、Co-op、Online Co-op、Cross-Platform Multiplayer。

### 来源 2：A — https://www.gamespress.com/it/Get-ready-Elon-Blind-Descent-goes-into-Early-Access-below-the-surface-
- 抓取日期：2026-10-28
- 关键内容：“up to four players with crossplay between Steam, GOG and EGS”；“shared quests, shared world, separate inventory and mutations”。

### 来源 3：A — https://blinddescent.net/faq
- 抓取日期：2026-10-28
- 关键内容：“Every story element within the singleplayer will also be playable in multiplayer”；单人/多人皆可。

---

## blind descent beginner guide / blind descent walkthrough

### 来源 1：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：scan and study lifeforms → 资源与工具；清空并接管 abandoned base；storms/toxic gases/aggressive creatures；science or symbiosis。

### 来源 2：B — https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/
- 抓取日期：2026-10-28
- 关键内容：无教程；补水/烧水/烹饪；斧、棍、火堆、lean-to、水容器；耐久/负重；扫描扩配方池；adaptations interface（armor crafting / signal tracking / new shelter blueprints）。

### 来源 3：A — https://blinddescent.net/
- 抓取日期：2026-10-28
- 关键内容：printer + signal booster 联系地表；寻找 energy source；攻击用 bows/spears/axes/rifles。

---

## blind descent demo / blind descent demo multiplayer / blind descent playtest

### 来源 1：A — https://www.gamespress.com/uk-UA/META-Publishings-Scavengers-Reign-inspired-Sci-Fi-Survival-Adventure-B
- 抓取日期：2026-10-28
- 关键内容：2025-07-30 开放 Steam playtest，聚焦单人；“not currently available in Alpha playtest version”（指 co-op）。

### 来源 2：A — https://www.gamespress.com/it/Get-ready-Elon-Blind-Descent-goes-into-Early-Access-below-the-surface-
- 抓取日期：2026-10-28
- 关键内容：co-op playtest “starting October 14th”；跨平台 Steam/GOG/EGS。

### 来源 3：C — https://zero1gaming.com/news/blind-descent-december-2-early-access-pc
- 抓取日期：2026-10-28
- 关键内容：playtest 2026-10-14 开始，经 Steam 页报名，选中者获权限；focus 在 multiplayer，战斗/制作/UI/画面/性能持续改进。

### 来源 4：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：商店页显示 demo / playtest 入口状态（“Join Playtest / Request Access”），发售 2026-12-02。

---

## blind descent crafting guide

### 来源 1：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：“Scan and study the lifeforms around you to gather resources and craft essential tools”；“Observing how alien creatures interact with their environment can lead to powerful insights”。

### 来源 2：A — https://www.gamespress.com/it/Get-ready-Elon-Blind-Descent-goes-into-Early-Access-below-the-surface-
- 抓取日期：2026-10-28
- 关键内容：“Modular crafting instead of following fixed recipes”，覆盖 weapons / tools / shelter / medicine。

### 来源 3：B — https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/
- 抓取日期：2026-10-28
- 关键内容：扫描扩配方池 = 技术树式推进；具体早期物品（axe / club / fire pit / lean-to / water container）；资源 banana leaves / palm fronds / vines；耐久与负重。

---

## blind descent mutation / blind descent symbiosis

### 来源 1：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：“Take a scientific approach by crafting tools and equipment that help you and your team endure while preserving your humanity” vs “become part of the ecosystem by undergoing mutations that enhance your abilities”；“Science or symbiosis—the choice is yours.”

### 来源 2：A — https://www.gamespress.com/it/Get-ready-Elon-Blind-Descent-goes-into-Early-Access-below-the-surface-
- 抓取日期：2026-10-28
- 关键内容：感染设定；共生 “unlocks powerful mutations like telekinesis or wall running”；保持纯净 “means access to new technology”；管理 infection 与 body-part injuries。

### 来源 3：A — https://www.gamespress.com/uk-UA/META-Publishings-Scavengers-Reign-inspired-Sci-Fi-Survival-Adventure-B
- 抓取日期：2026-10-28
- 关键内容：“Gain abilities through exposure to alien spores, fruits, and strange infections”；Symbiosis System 受 *Scavengers Reign* 启发。

### 来源 4：C — https://zero1gaming.com/news/blind-descent-december-2-early-access-pc
- 抓取日期：2026-10-28
- 关键内容：变异路 = 水果/孢子解锁 adaptations，改善战斗与探索，越深越有用；科学路 = 研究本地生物 + 制作对抗装备；两条是互替路线，细节未全部公布。

---

## blind descent base building

### 来源 1：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：“discover the lost team's abandoned base. Clear it, make it yours, and improve it”；“vines, fungal growths, and creeping alien organisms are quick to react to neglect”。

### 来源 2：A — https://www.gamespress.com/uk-UA/META-Publishings-Scavengers-Reign-inspired-Sci-Fi-Survival-Adventure-B
- 抓取日期：2026-10-28
- 关键内容：“Build log-by-log in a world where nature reclaims what’s left unattended”；基地可被 “overgrown, devoured, or corrupted”。

### 来源 3：C — https://www.indiegames-inside.de/blind-descent-mars-survival-open-world/
- 抓取日期：2026-10-28
- 关键内容：“Organic Restoration System”；失修基地被藤蔓/真菌/粉色感染簇覆盖至崩塌；掉落物弱化→藤蔓→真菌。

### 来源 4：A — https://blinddescent.net/
- 抓取日期：2026-10-28
- 关键内容：Build——“Construct and furnish buildings; make them durable against weather and creatures.”

---

## blind descent creatures / blind descent hazards

### 来源 1：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：“Face ever-changing threats like underground storms, toxic gases, and aggressive creatures.”

### 来源 2：A — https://blinddescent.net/
- 抓取日期：2026-10-28
- 关键内容：Fight——“Dodge, block, and use surroundings; weapons include bows, spears, axes, and rifles. Dark caves are especially dangerous.”；Survive——“Adapt to harsh weather and predators”。

### 来源 3：B — https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/
- 抓取日期：2026-10-28
- 关键内容：植物 resistant vines / red belly succulents / toxic wither fruit；生物 rainbow crab / “rabbits” / froglike organisms；infection clusters 吞没建筑；昼夜 + 反应式动物行为。**生物名为试玩 build 的社区观察，官方未公布图鉴。**

### 来源 4：A — https://www.gamespress.com/it/Get-ready-Elon-Blind-Descent-goes-into-Early-Access-below-the-surface-
- 抓取日期：2026-10-28
- 关键内容：“Every weapon type plays different and every enemy type requires different strategies.”

---

## blind descent platforms / blind descent steam deck / blind descent ps5 release date

### 来源 1：A — https://store.steampowered.com/app/1209970/
- 抓取日期：2026-10-28
- 关键内容：Win11 64-bit；最低 i3 / 16 GB / DX12 2 GB VRAM / 40 GB；推荐 i5+ / 32 GB / 6 GB；11 种语言；Full controller support；发售 2026-12-02。

### 来源 2：A — https://www.gamespress.com/it/Get-ready-Elon-Blind-Descent-goes-into-Early-Access-below-the-surface-
- 抓取日期：2026-10-28
- 关键内容：EA 平台 = Steam、GOG、Epic Games Store；跨平台联机互通三平台。

### 来源 3：C — https://zero1gaming.com/news/blind-descent-december-2-early-access-pc
- 抓取日期：2026-10-28
- 关键内容：PS5 与 Xbox Series X|S 计划随正式版，日期未定；EA 约一年；价格未公布。

### 来源 4：A — https://blinddescent.net/faq
- 抓取日期：2026-10-28
- 关键内容：旧版页面写 “only targeting Windows 10 64-bit on the Steam platform”，主机版计划首发后推出 → **已过期**，与 A1/A2 冲突以官方当前页为准。

---

## 未确认项汇总（写作红线）

| 项 | 状态 | 原因 |
|---|---|---|
| 价格 | `[Unconfirmed]` | Steam `price_overview` 为空；新闻稿明说未公布 |
| Steam Deck 认证 | `[Unconfirmed]` | 官方未给 Deck 兼容评级；只有 Full controller support |
| 引擎 | `[Unconfirmed]` | 官方 FAQ 写 UE4，第三方写 UE5，冲突 |
| PS5 / Xbox 具体日期 | `[Unconfirmed]` | 只说随正式版，未定档 |
| 变异能力完整清单 | `[Unconfirmed]` | 官方只点名 telekinesis、wall running |
| Boss / 敌人名录与数值 | `[Unconfirmed]` | 官方无图鉴；仅有试玩观察的少量生物 |
| 温度 / 氧气系统 | **无来源，不写** | Steam / 官网 / FAQ / 新闻稿 / 试玩均未提及 |
| EA 具体页数与地图分区 | `[Unconfirmed]` | 未公布 |
