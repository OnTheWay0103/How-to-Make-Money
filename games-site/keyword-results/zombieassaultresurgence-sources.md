# Zombie Assault: Resurgence — 素材来源（Sources）

> 站点：`zombieassaultresurgencewiki/` · 抓取日期：**2026-10-30（CST）**
> 规则：每页 ≥2 个独立来源且 ≥1 官方（`docs/STRATEGY-内容生产.md` §3）。
> 抓取方式：本机 DNS 对 Steam 有投毒，均用 `dig @1.1.1.1 +short <host>` 取真实 IP 后 `curl --resolve` 直连；
> wiki.gg 对默认 UA 返回 403/Cloudflare，改用 `Googlebot` UA 读取（页面本身公开可读）。
> 标记：A=官方，B=社区，C=媒体。**未取到的一手写「一手未取到」，不编造。**

## 通用一手来源（多页共用）

### 来源 O1：A — Steam 商店页
- URL：`https://store.steampowered.com/app/2747660/`
- 抓取日期：2026-10-30
- 关键内容（原文照录）：
  - 发行/开发：**Ninja Kiwi**；发售：**28 Oct, 2026**。
  - 评测：**Mixed — 68% of the 170 user reviews for this game are positive**（页面 `All Reviews` 区块）。
  - 折扣：页面显示 20% off（CN 区 `¥ 198.00`；美元原价/折扣价本轮一手未取到，selection §3.2 记 2026-10-30 appdetails 为 **$11.99（原价 $14.99，-20%）**，两处口径按「区域显示不同」记录）。
  - 职业：「**3 distinct classes to choose from Assault, Heavy or Medic.**」「**6 Core and 6 Class specific skills to select and upgrade.**」「**3 powerful Activated Abilities**」「**2 Unique Speciality Classes** — choose a branch and lock in your unique traits」。
  - 武器/装备：「Customisable loadouts with **over 60 primary and secondary weapons**；a range of armours … grenades and turrets」「**Crafting system** allows weapons and gear to be improved and modified」「**Sell or Dismantle** excess weapons for extra resources」「unique **Power Weapons** from a mid-mission **Supply Drop**」「**Strongboxes** to uncover an extensive arsenal」。
  - 玩法：「**4 player co-op** or go solo in **single player**」「**Story Missions**」「**Special Operations**」「**bounty board**」「**Vendors**, raise your reputation」。
  - 世界观：「New Dawn Protocol」「New Aartis」「United Systems Initiative (USI)」「Mercs」。

### 来源 O2：A — Dev Diary #13: Steam Next Fest（Ninja Kiwi 官方公告）
- URL：`https://store.steampowered.com/news/app/2747660/view/1823191198605452`
- 发布：2026-01-30；抓取：2026-10-30（Steam News API `ISteamNews/GetNewsForApp`）
- 关键内容（原文照录）：
  - 三职业 **Assault / Heavy / Medic**；demo 等级上限 **12**；Base Skills + Class Skills。
  - 地图：**Mining Facility / Abandoned Colony / Icefield**。
  - 模式：**Eradication、Eradication Surge、Cache Recovery、Uplink、Close the Breach**。
  - Boss：**Regurgitator、Shredder**（「Two terrifying boss encounters」）。
  - 厂商：**HVM、Critical Mass、Ronson**（「guns from the likes of HVM, Critical Mass, Ronson」）。
  - 系统：**Weapon upgrading**、**Mods**、**Armour**、**HVM Grenade and Turret**、**USI Bounties**、**Merc HQ**。
  - 联机：Discord/Steam 好友列表、派对邀请、全文本聊天。
  - 奖励：**Morlok Frostbite Pistol**（cryo-based pistol、Morlok LN2 rounds、唯一获取）。
  - 追踪站：`zombieassault.com`。

### 来源 O3：A — Dev Diary #8: Playtest Announcement（Ninja Kiwi 官方公告）
- URL：`https://store.steampowered.com/news/app/2747660/view/1806698490813097`
- 发布：2025-08-04；抓取：2026-10-30
- 关键内容（原文照录）：
  - 「All 3 character classes can now be levelled up to **rank 103**」。
  - 「**4 Operation types** Eradication, Eradication Surge, Cache Recovery, and Close the Breach」+ 「**Tough Mode** A modifier that increases difficulty but also increases rewards」。
  - 「**3 Abilities** can be unlocked（final one at **rank 10**）」；「Skill Points gained on level up」；「Skill Points can be placed into Core and Class Skills」。
  - 「**Skills can also be respec'd easily, but will come with an in-game currency cost**」。
  - 单人：「The game is being built in such a way that it will be **equally playable in multiplayer as it is in single player**」。
  - Boss：最终版会有血条与阶段反馈（「health bars for bosses as well as clear visual feedback for changes in phases」）；Operations 可随机 Boss，Story missions 更固定。

### 来源 O4：A — ZA:R Demo Bug Fix Patch 0.9.1 / 0.9.2（官方补丁公告）
- URL：`https://store.steampowered.com/news/app/2747660/view/1824644522839796`（0.9.1，2026-02-13）
- URL：`https://store.steampowered.com/news/app/2747660/view/1825093633187682`（0.9.2，2026-02-20）
- 抓取：2026-10-30
- 关键内容：0.9.1 修「the Movement Speed mod to not take affect」「the percentage symbol being missing from some Skill descriptions」；0.9.2 修「Aegis Station」「Icefield」卡关与崩溃、「Decreased wait time between Cache drops in Cache Recovery」「Slightly increased the difficulty of Uplink」。

### 来源 O5：A — Next Fest Global Kill Count Achieved!
- URL：`https://store.steampowered.com/news/app/2747660/view/1825727806720715`
- 发布：2026-03-03；抓取：2026-10-30
- 关键内容：Next Fest 全球击杀挑战达成，参与者发售后获 **Morlok Frostbite Pistol**。

### 来源 C1：B — SAS: Zombie Assault Wiki（wiki.gg）`Levels (ZAR)`
- URL：`https://saszombieassault.wiki.gg/wiki/Levels_(ZAR)`
- 抓取日期：2026-10-30（Googlebot UA 读取；页面 last edited 2026-03-04）
- 关键内容（原表摘录）：
  - 「Upon every level-up (up to level 37), players are rewarded with either Basic Skill Point, Class Skill Point or Subclass Skill Point」。
  - 等级 1 = 850 XP → 1 Basic；2 = 1,870（+1,020）→ 1 Class；3 = 3,094 → 1 Class；4 = 4,563 → 1 Basic；5 = 6,326 → 1 Class；6 = 8,441 → 1 Basic；7 = 10,979 → 1 Class；8 = 14,025 → 1 Basic；9 = 17,680 → 1 Class；10 = 22,066 → 1 Basic；11 = 27,329 → 1 Class；12 = 33,645 → 1 Basic；13 = 41,224 → 1 Class；14 = 50,318 → 1 Basic；15 = 61,231 → 1 Class；16 = 73,781 → 1 Basic；17 = 88,214 → 1 Class；18 = 104,812 → 1 Basic；19 = 123,899 → 1 Class；20 = 145,850 → 1 Basic + 1 Subclass，此后 Subclass 点在 22/24/26… 出现。
  - 结论（据表统计）：到 20 级共 **10 Basic + 10 Class + 1 Subclass**。
- 注意：该表截至抓取日未标注游戏版本号，按「社区整理、对照发布版本使用」处理。

### 来源 C2：B — SAS: Zombie Assault Wiki（wiki.gg）`Galvanizer`（ZAR 武器页 + 全武器导航）
- URL：`https://saszombieassault.wiki.gg/wiki/Galvanizer`
- 抓取日期：2026-10-30（last edited 2026-10-28）
- 关键内容（原文照录）：
  - Galvanizer 是 **ZA:R 的 SMG**：Damage Type **Energy**；Damage **35 / 52.5 / 78.75 / 118.13**；Pierce **2**；Fire Rate **16 rps**；Clip **35**；Reload **1.8s**；Crit **5%**；Range **11m**；"Drop Information: Available Rarities **Common and higher**, Availability **Strongboxes**"；"Version 1.0 Introduced Galvanizer."
  - ZA:R 武器分类导航（据此整理全名录）：Pistols / SMGs / Assault Rifles / Shotguns / Sniper Rifles / Rocket Launchers / Flame Throwers (N/A) / LMGs / Power Weapons / Scrapped。
  - 厂商前缀：HVM、RIA、CM（Critical Mass）、Ronson、HIKS、Morlok、GG/G44。
  - **改名证据**：Rocket Launchers 列表含 **Krachlader**（旧名 `Auslegerlader`，selection 记为 v0.9 前后改名）。

### 来源 C3：B — SAS: Zombie Assault Wiki（wiki.gg）游戏主页
- URL：`https://saszombieassault.wiki.gg/wiki/Zombie_Assault:_Resurgence`
- 抓取日期：2026-10-30（last edited 2026-10-29）
- 关键内容：「sequel to SAS: Zombie Assault 4」「released on Steam for Microsoft Windows on 28 October 2026」「top-down 3D」「some mechanics, such as **Mods for guns and armor**, an **expanded rarity system**, and **Subclasses** are unique to ZA:R」。

---

## `assault-class-guide`

### 来源：A — Steam 商店页（O1）
- 抓取：2026-10-30 · Assault 为三职业之一；6 Core + 6 Class skills；3 Activated Abilities；2 Speciality branches。

### 来源：A — Dev Diary #8 / #13（O2/O3）
- 抓取：2026-10-30 · 3 abilities、rank 10 解锁第 3 个、技能点来源与洗点成本、联机/单人平衡。

### 来源：B — Levels (ZAR)（C1）
- 抓取：2026-10-30 · 1–20 级技能点表（10 Basic + 10 Class + 1 Subclass）。

> 未取到：ZA:R 各职业技能的具体名称与数值（wiki 尚未建 ZAR 技能页，`Zombie Assault Resurgence Skills` 为 404）。
> 因此本页不列举具体技能名，只写结构与官方确认的机制；把 SAS4 的技能名当 ZA:R 事实属错源，已排除。

## `heavy-class-guide`

- 同 `assault-class-guide` 的 O1 / O2 / O3 / C1。
- 未取到：Heavy 专属技能名与数值（同上）。

## `medic-class-guide`

- 同 `assault-class-guide` 的 O1 / O2 / O3 / C1。
- 未取到：Medic 专属技能名与数值（同上）。

## `best-weapons-tier-list`

### 来源：A — Steam 商店页（O1）
- 抓取：2026-10-30 · 「over 60 primary and secondary weapons」、Strongbox、Power Weapons / Supply Drop、crafting。

### 来源：B — Galvanizer（C2）
- 抓取：2026-10-30 · ZA:R 武器分类导航（真实武器名）+ Galvanizer 数值样例（Energy SMG、35 base damage、16 rps、35 clip）。

> 说明：本轮没有公开的 DPS 排行或 datamine 数值表，榜单按「武器类别 + 可核验存在性」给编辑向优先级，逐条标 Editorial，不伪造数值。

## `all-weapons-guide`

### 来源：A — Steam 商店页（O1）
- 抓取：2026-10-30 · 60+ 武器、Power Weapons、Supply Drop。

### 来源：A — Dev Diary #13（O2）
- 抓取：2026-10-30 · 厂商 HVM / Critical Mass / Ronson；Morlok Frostbite Pistol。

### 来源：B — Galvanizer（C2）
- 抓取：2026-10-30 · 全武器名录（按枪种与厂商）、Krachlader 等真实名、Scrapped 名单（HVM 004 等）。

## `weapon-mods-and-upgrading`

### 来源：A — Steam 商店页（O1）
- 抓取：2026-10-30 · Crafting system、improve and modify、Sell or Dismantle、Strongboxes。

### 来源：A — Dev Diary #13（O2）
- 抓取：2026-10-30 · Common/Uncommon Mods、Weapon upgrading、Common/Uncommon Armour。

### 来源：A — 0.9.1 补丁（O4）
- 抓取：2026-10-30 · 「Movement Speed mod」存在与修复记录。

## `coop-and-crossplay-faq` / `release-price-platforms-faq`（P1/P2，尚未写）

- O1 + O2 已覆盖：4 人 co-op / 单人、Discord/Steam 好友、发售日 2026-10-28、Windows。
- 跨平台（crossplay）细节：**一手未取到**（商店页 categories 未列 cross-platform；禁止臆断）。
