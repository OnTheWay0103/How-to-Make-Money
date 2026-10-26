# GONE Fishing — 素材表

> 建站任务 BUILD-R3-GONEDFISH｜抓取日期统一 **2026-10-26**。
> 规则：每页 ≥2 个独立来源且 ≥1 官方；Fandom 属非官方，只作社区层，关键数值标 `[Unconfirmed]` 或注明「社群整理」。
>
> **取证方式说明（如实记录）**：本机 DNS 把 `fandom.com` / `steamcommunity.com` 解析到 Meta IP 段
> （如 69.63.176.x），直连 TLS 超时；`store.steampowered.com` 的 AppDetails API 可直连。
> 因此：**Steam 商店数据为 API 一手返回**；Fandom、Steam 社区帖、Steam 公告、官方 FAQ 的内容
> **经搜索引擎索引摘要核对**（摘要保留了原文数字与专有名词），未能逐字抓取整页。
> 这一点在 QA 报告里也单独列出。

---

## 通用来源索引

| 编号 | 层级 | 来源 | URL |
|---|---|---|---|
| S1 | A 官方 | Steam 商店页（AppDetails API，`cc=us` / `cc=cn`） | https://store.steampowered.com/app/3645890/ |
| S2 | A 官方 | 官方 FAQ「FAQ & Angler Thesaurus」（Steam 支持面板指向 `gonefishing.gg/tickets`，同域） | https://gonefishing.gg/faq |
| S3 | A 官方 | Steam 新闻流：1.0 发售公告（2026-10） | https://steamcommunity.com/app/3645890/allnews/ |
| S4 | A 官方 | Steam 公告「BUFF BUFF 大BUFF！」（2026-10-22，Boss 与数值调整） | https://steamcommunity.com/games/3645890/announcements/detail/704408827984875155 |
| S5 | A 官方 | Steam 公告「Were talking YETI, were talking fixes」（2026-10-22） | https://steamcommunity.com/games/3645890/announcements/detail/704408827984874618 |
| S6 | A 官方 | Steam Demo 页（独立 appid 3708980） | https://store.steampowered.com/app/3708980/ |
| C1 | B 社区 | Fandom — Mechanics | https://gonefishing.fandom.com/wiki/Mechanics |
| C2 | B 社区 | Fandom — Species | https://gonefishing.fandom.com/wiki/Species |
| C3 | B 社区 | Fandom — Bait | https://gonefishing.fandom.com/wiki/Bait |
| C4 | B 社区 | Steam 讨论区攻略「A Guide to GONE Fishing」 | https://steamcommunity.com/app/3645890/discussions/0/591770958120924378/ |
| C5 | B 社区 | Steam 讨论「What is the difference between difficulty modes?」 | https://steamcommunity.com/app/3645890/discussions/0/601915789280396957/ |
| C6 | B 社区 | Steam 讨论「Start with perks?」 | https://steamcommunity.com/app/3645890/discussions/0/601916204202854904 |
| C7 | B 社区 | 小红书实测帖「从零开始的恐怖钓鱼——GONE Fishing」 | https://www.xiaohongshu.com/discovery/item/68f7b49b00000000070349f3 |
| C8 | B 社区 | SteamDB 更新记录（官方公告镜像） | https://steamdb.info/app/3645890/patchnotes/ |

### S1 关键内容（一手 API 返回，2026-10-26）

- 名称 `GONE Fishing`，开发者/发行商均为 **GONE Studios**（不是 ABCT Productions——后者只出现在部分第三方镜像页）。
- 发售日 **20 Oct, 2026**；类型 Action / Adventure / Indie；仅 Windows。
- 商店描述原文要点：`1-8 player survival horror game`；`over 100 different species of creatures to catch and dozens of live animals to use as bait`；`Grill it, smoke it, turn it into a pearl, or bet it all in the gambling pit`；`sacrifice a certain amount of fish to the beast every day`；`territorial beasts, stalking nightmares, and ambushing predators`；`explore multiple maps`；`legendary creatures like the Lochness monster`；`Fight back against the Lake Entity`。
- 分类：Single-player、Multi-player、Co-op、**Online Co-op**、Steam Achievements、Adjustable Difficulty、Save Anytime、Steam Cloud、Family Sharing、Partial Controller Support；**无** Shared/Split Screen、**无** LAN。
- 成就 **53** 个；支持 14 种语言，英语含完整语音。
- 价格（2026-10-26 快照）：美区 **$9.99**，33% 折扣 **$6.69**；国区 ¥32.99 → ¥22.10。
- 配置：最低 GTX 1070 / 6 GB RAM / 6 GB 空间；推荐 RTX 3060 / 12 GB RAM。
- Steam 评测总数 `recommendations.total = 3246`（API 字段，抓取时点）。

### S2 关键内容（官方 FAQ，经索引摘要）

- 提升 Bait Score 的四个乘区：**Sinker 等级满级、Beer Score、Leviathan Totem（约 Day 40 前）、垂钓深度 ≥2500**。
- 没有「唯一最强饵」；钓大鱼/传奇鱼用 **Bait Value 60+** 的大饵；**点数最高的饵是 Troll（86）**。
- 想稳定出货去 **Docks（约 500+ 深度）**；想搏体型往深处走，**每张图都有 4,500+ 深度区域**。
- **Jeremy Wade 难度给排行榜鱼重 +20%**，官方建议新手直接从这个难度起步。
- 烹饪与赌博的加成**相乘**（例：50 分 → 烤鱼 +50% = 75 → 赌博 ×10 = 750）。
- 早期优先 **Big Grill** 与 **Fish Value** 两项升级（点满各 +50%），再补线材与 **Leviathan / Fish Frenzy** Totem。
- **Hardcore 是永久死亡**：读档会销毁鱼饵，不能 Day Reset。

### S3 关键内容（1.0 发售公告，经索引摘要）

- 1.0 三件事：正式结局、新的钓鱼成长系统、修复与稳定性。
- 击败最终 Boss 解锁 **MOBY 钓竿**与 **Jeremy Wade 难度**。
- 旧的 line/rod/sinker 升级被 **8 个 Trinket** 取代，由新商人 **Clinket** 出售，**全队共享**。
  Trinket 名单：Iron Worm（概率保饵）、Hungry Hook（抛竿即咬）、Gambler's Doubloon（鱼价值倍率）、Devil's Ember（瞬间烟熏）、Deadman's Hand（瞬间收线）、Siren's Conch（提升传奇/神话概率）、Captain's Stopwatch（首次命中完美）、Bassweiser（概率微醺）。
- 新神话鱼 **Rhizo** 在湖图深水，**必须用 MOBY 竿**才能钓。
- 其余：北极新生物/Yeti、新陷阱与被动收鱼、火枪、外观解锁进度、排行榜与档案重置；旧存档兼容但建议新开，**旧存档迁移截止 2026-11-20**。

### S4 / S5 关键内容（2026-10-22 热修，经索引摘要）

- Boss 眼球命中判定 **+50%**；滚龟间距加大、碰撞箱缩小、伤害 **75 → 60**；玩家回血延迟 **7.5s → 6s**、回血速度 +10%。
- 修复：鱼饵无法卸下、北极图 Yeti 不刷新、湖图鳄鱼把玩家拖进崖壁/地图下、最终 Boss 鲸鱼核弹不可见但仍伤人。

---

## gone fishing beginner guide

### 来源 1：A — https://store.steampowered.com/app/3645890/
- 抓取日期：2026-10-26（API 一手）
- 关键内容：1–8 人合作生存恐怖；白天钓 100+ 物种、用活饵；每天必须向湖中实体献祭定量鱼；有贩卖机/商人升级；多张地图；夜间有领地兽、跟踪者、伏击掠食者。

### 来源 2：A — https://gonefishing.gg/faq
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：新手建议直接开 Jeremy Wade（鱼重 +20%）；早期先点 Big Grill 与 Fish Value（各 +50%）；Hardcore 永久死亡、读档销毁鱼饵。

### 来源 3：B — https://steamcommunity.com/app/3645890/discussions/0/591770958120924378/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：`TAB` 装备竿与饵；LMB 抛竿 → 定时 LMB 提钩 → 按住/松开 LMB 把张力保持在绿区；咬钩后 **2–5 秒**张力条才开始下降，别提前按住；烤熟的鱼献祭或出售都 **+33%**（炉子 60 秒/条）。

---

## gone fishing sacrifice quota

### 来源 1：A — https://store.steampowered.com/app/3645890/
- 抓取日期：2026-10-26（API 一手）
- 关键内容：`You must sacrifice a certain amount of fish to the beast every day if you want to survive`；`the beast is not the only thing out there`；可烤、烟熏、变珍珠、赌博。

### 来源 2：B — https://steamcommunity.com/app/3645890/discussions/0/591770958120924378/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：配额逐日上涨，可在 Esc 菜单查看；`G`/LMB 把鱼放进祭坛；祭坛灯光显示进度，**火焰变蓝=今日已喂饱，可以睡**；漏配额当夜被猎，连续漏会让全队被追杀并结束本轮；烤鱼 +33%；故意漏一天保第二天是可讨论策略。

### 来源 3：B — https://gonefishing.fandom.com/wiki/Mechanics
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：祭坛 = 向 Lake Demon 献祭；鱼大小/种类受水深、饵质、盐度、地图、天气、Totem、啤酒、存活天数影响；有提钩 QTE 与张力收线小游戏；饵可 Critical 到 1.5 倍价值。

---

## gone fishing co-op

### 来源 1：A — https://store.steampowered.com/app/3645890/
- 抓取日期：2026-10-26（API 一手）
- 关键内容：`1-8 player`；分类含 Single-player、Online Co-op；无本地分屏、无 LAN。

### 来源 2：A — https://steamcommunity.com/app/3645890/allnews/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：1.0 的 Trinket 由 Clinket 出售且**全队共享**；击败 Boss 解锁 MOBY 与 JW 难度；旧存档迁移截止 2026-11-20。

### 来源 3：B — https://steamcommunity.com/app/3645890/discussions/0/591770958120924378/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：Totem 是**全队生效**（升级是个人）；气球商人在正午出现，用鱼换钱买升级/Totem；骨头留祭坛过夜会召来狗，喂鱼后它会帮你把鱼送回祭坛，给灯笼还会照明。

---

## gone fishing enemies

### 来源 1：A — https://store.steampowered.com/app/3645890/
- 抓取日期：2026-10-26（API 一手）
- 关键内容：官方原文点名 `territorial beasts, stalking nightmares, and ambushing predators`；`Fight back against the Lake Entity`。

### 来源 2：A — https://steamcommunity.com/games/3645890/announcements/detail/704408827984875155
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：滚龟碰撞箱缩小、伤害 75 → 60、间距加大；玩家回血延迟 7.5s → 6s；Boss 眼球判定 +50%。

### 来源 3：B — https://www.xiaohongshu.com/discovery/item/68f7b49b00000000070349f3
- 抓取日期：2026-10-26（索引摘要）
- 关键内容（社群实测，全部标 `[Unconfirmed]`）：巨人（夜间低吼、极快、被盯着会僵住、可炸死、尸体可当饵）；害羞的人（躲在草/屋侧观察，先发现它会逃走）；鳄鱼（低吼预警、跺脚=接近、被咬狂按空格、可炸死、幼鳄也是饵）；蟒蛇（靠近有嘶声、缠绕整名玩家）；鲨鱼（靠近水中钓客突袭）；大鱼人（所有图夜间从天而降、抓到即死、炸不死、只能睡）；巨型蜘蛛（丛林图、体形过大常穿模抓不到人）。

### 来源 4：B — https://gonefishing.fandom.com/wiki/Mechanics
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：夜间机制与存活天数、Perk 解锁挂钩（存活 7 天）。

---

## gone fishing best perks

### 来源 1：A — https://gonefishing.gg/faq
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：官方只给方向（早期 Big Grill / Fish Value、Leviathan / Fish Frenzy），未给 Perk 排名；Hardcore 规则。

### 来源 2：B — https://gonefishing.fandom.com/wiki/Mechanics
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：共 **9 个 Perk**，连续存活 **7 天**解锁；每人开局最多带 **2 个**；Perk 只惠及本人，**Midas Touch 例外（金币共享）**；Fish Whisperer 平均鱼体 +5%。

### 来源 3：B — https://steamcommunity.com/app/3645890/discussions/0/601916204202854904
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：玩家报告 Sticky Hook / Tackle Box / Midas Touch 从第一轮就可选；其余在存活 7 天后解锁。

---

## gone fishing final boss / lake entity

### 来源 1：A — https://steamcommunity.com/app/3645890/allnews/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：1.0 加入最终 Boss 关与完整结局；击败后解锁 MOBY 竿与 Jeremy Wade 难度；MOBY 是钓 Rhizo 的前置。

### 来源 2：A — https://steamcommunity.com/games/3645890/announcements/detail/704408827984875155
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：Boss 眼球命中判定 +50%；滚龟伤害 75 → 60、间距加大、碰撞箱缩小；回血延迟 7.5s → 6s、速度 +10%。

### 来源 3：A — https://steamcommunity.com/games/3645890/announcements/detail/704408827984874618
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：修复最终 Boss 鲸鱼核弹不可见但仍伤人；修复湖图鳄鱼把玩家拖进地形。

---

## gone fishing lochness monster

### 来源 1：A — https://store.steampowered.com/app/3645890/
- 抓取日期：2026-10-26（API 一手）
- 关键内容：官方原文 `legendary creatures like the Lochness monster`；100+ 物种；深度与饵影响渔获。

### 来源 2：A — https://gonefishing.gg/faq
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：大鱼/传奇鱼用 Bait Value **60+**；最高饵是 Troll **86**；深度 **≥2500**、每图有 **4,500+** 深区；Sinker 满级、Beer Score、Leviathan Totem；Day 40 前堆满这些乘区。

### 来源 3：B — https://gonefishing.fandom.com/wiki/Species
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：Loch Ness Monster 全图出没、**Very Rare**，社群记录重量区间 690–125,000 lbs（`[Unconfirmed]`，社群整理，非官方数值）。

---

## gone fishing release date / price / faq

### 来源 1：A — https://store.steampowered.com/app/3645890/
- 抓取日期：2026-10-26（API 一手）
- 关键内容：发售 20 Oct 2026；$9.99 / 33% off $6.69；Windows only；1–8 人 Online Co-op + Single-player；53 成就；14 语言；6 GB 空间；GONE Studios。

### 来源 2：A — https://steamcommunity.com/app/3645890/allnews/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：1.0 = 正式结局 + 新成长系统；旧存档兼容、迁移截止 2026-11-20；排行榜重置。

### 来源 3：A — https://store.steampowered.com/app/3708980/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：独立 Demo appid 3708980，免费；Demo 限制升级与鱼饵种类，核心循环与联机保留（第三方报道）。

### 来源 4：B — https://steamdb.info/app/3645890/patchnotes/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：EA 起始 2025-06-16；Alpha 4.0（2025-12-13）加入 8 人大厅；2026-05 加入 Jungle 半咸水与 Brackish 鱼型。

---

## gone fishing upgrade priority

### 来源 1：A — https://gonefishing.gg/faq
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：Big Grill / Fish Value 各 +50%（点满）→ 线材 → Leviathan / Fish Frenzy；烹饪与赌博加成相乘；Hardcore 读档销毁鱼饵。

### 来源 2：A — https://steamcommunity.com/app/3645890/allnews/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：1.0 用 8 个 Trinket（Clinket 出售、全队共享）取代旧 line/rod/sinker 升级；Deadman's Hand + Captain's Stopwatch + Hungry Hook 是强力组合（社群总结）。

### 来源 3：B — https://steamcommunity.com/app/3645890/discussions/0/591770958120924378/
- 抓取日期：2026-10-26（索引摘要）
- 关键内容：Totem 全队生效、升级个人；气球商人正午出现。
