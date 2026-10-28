# Probably Stolen — 建站素材底稿（BUILD-PS-2026-10-28）

> **抓取日期**：2026-10-28（本机 05:11–12:20 CET / 12:11–19:20 北京时间）
> **抓取时游戏状态**：**未解锁**。Steam AppDetails 返回 `release_date: { coming_soon: true, date: "Oct 28, 2026" }`，
> 商店页购买区为 `Coming soon`；官方公告写明 **2026-10-28 14:00 CET / 09:00 EDT / 06:00 PDT** 解锁，
> 即**北京时间 2026-10-28 21:00**。抓取时无评测、无价格 API、无在线人数。
> **本文件用途**：建站素材底稿 + 本轮「不建站」判定的证据留档，**不是成品页，也不是可直接发布的正文**。
> 下一轮建站（解锁后）从这里起步，不用重采官方源。
>
> **本轮结论（2026-10-28 18:40 已更新）**：原始判断是「6 页里只有 FAQ 与治安/派系 2 页达标 → 不建站」。
> 当天 18:40 复抓商店页后补入 **A2b（About This Game 全文）**，发现官方原本就有「许可证→地下市场」「派系专属交易」
> 「房租递增后果」「每条产线各有利润曲线」等整段机制文案，**机制型页面因此可写**：
> 以 6 页（FAQ + 新手 / 9 开局 / 水生意 / Aquafarmer / 黑市声望 / 买断通关）建站，
> `probablystolenwiki/` 于 2026-10-28 生成并部署。**数值型页面仍不写**（房租数值、买断价、利润表、熔炉配方与纯度、
> 鉴定阈值、各开局收入曲线）——这些官方从未公布，唯一带数字的是竞对 wiki，按 C 级不可引用。
>
> **官方名**：`Probably Stolen - Cyberpunk Shopkeeper Sim`；Steam app **4348910**；
> 开发 **Questing Goose Studio**，发行 **tinyBuild**；平台 **仅 Windows**；**单人**。

---

## A 级（官方一手，可作事实依据）

> 全部 A 级均为 Steam 官方商店页 / Steam 官方公告 / 开发商官网。抓取方式：Steam Web API
> （`store.steampowered.com/api/appdetails`、`ISteamNews/GetNewsForApp`）+ 商店页 HTML + 开发商站；
> 公告正文经 HTML 标签剥离后摘录，**数字与专名保持原样**。

### A1. Steam AppDetails API — 基础信息（抓取 2026-10-28）

- URL：`https://store.steampowered.com/api/appdetails?appids=4348910&l=english&cc=us`
- 抓取日期：**2026-10-28**
- 关键字段（原样）：
  - `name`: `Probably Stolen - Cyberpunk Shopkeeper Sim`
  - `steam_appid`: `4348910`
  - `developers`: `["Questing Goose Studio"]`
  - `publishers`: `["tinyBuild"]`
  - `release_date`: `{"coming_soon": true, "date": "Oct 28, 2026"}`
  - `price_overview`: `null`（未开售，API 无价格）
  - `recommendations`: `null`（无评测）
  - `genres`: `Indie`, `RPG`, `Simulation`, `Strategy`
  - `categories`: `Single-player`, `Steam Achievements`, `Steam Cloud`, `Family Sharing`, `Adjustable Text Size`, `Custom Volume Controls`, `Mouse Only Option`, `Playable without Timed Input`, `Stereo Sound`
  - `platforms`: `{"windows": true, "mac": false, "linux": false}`
  - `supported_languages`: English, German, Japanese, Russian, Simplified Chinese, French, Spanish - Spain, Polish（共 8 种）
  - `pc_requirements.minimum`（原文要点）：Windows 10 x64；Intel Core i3 or equivalent；8 GB RAM；GTX 650ti equivalent or higher；DirectX 10；1 GB available space
  - `dlc`: `[5113870]`（Supporter Edition 相关，具体内容以商店页为准）

### A2. Steam 商店页 — 购买/评测状态（抓取 2026-10-28）

- URL：`https://store.steampowered.com/app/4348910/?cc=us&l=english`
- 抓取日期：**2026-10-28**
- 关键内容：购买区显示 `Coming soon`；页面内嵌 JSON `bHasAnyReviews: false`；`short_description` 原文：
  > "Probably Stolen is a cyberpunk shopkeeping simulator set in a dystopian space station. Craft, trade, and smuggle goods of questionable origin, navigate faction loyalties, and stop rampant AI by killing those it controls. Earn enough to buy out your shop before rising rent forces your hand."

### A2b. Steam 商店页 `About This Game` 全文（2026-10-28 18:40 复抓，补 A2 遗漏）

> **为什么补**：2026-10-28 建站写作时发现，A2 原先只摘了 `short_description`，而商店页正文里还有整段**官方一手**文案，
> 是「许可证 → 地下市场」「派系专属交易」「房租递增后果」「每条产线各有利润曲线」的唯一官方依据。
> 不补这段，站内这些句子会被 QA 判「无源」（首轮 QA 已实际报出该风险）。
> 抓取方式：`dig @1.1.1.1 +short store.steampowered.com` → `104.83.198.104`，再 `curl --resolve`（裸 curl 会超时：
> 本机 DNS 污染，同 `suggestqueries.google.com` / `vercel.app` 现象）。

- URL：`https://store.steampowered.com/app/4348910/?cc=us&l=english`
- 抓取日期：**2026-10-28**（HTML 163,097 bytes；页面显示 `All Reviews: No user reviews`、`Release Date: Oct 28, 2026`）
- 关键原文（按段摘录，逐字）：

  > "You're a former scavenger who secured a storefront thanks to a generous loan and questionable timing. Now rent is rising, factions are watching, and most of your best margins live in legal gray zones."

  > "Today's customer could be a security fisher for evidence, a revolutionary seeking leverage, or a fallen elite testing your usefulness. Every sale is a gamble. Approve it, refuse it, report it, or look away; someone is always taking notes. Reputation buys access and protection, but it also paints a target on your back."

  > "Start as a gunsmith, chemist, water merchant, fence, farmer, or from absolute rock bottom. Every product line has its own profit curve and its own way of ruining you, weapons bring inspections, chemicals bring addiction, water brings liability, contraband brings raids. Some trades need heavy machinery and permits, others just a good hiding spot and a straight face."

  > "Every item you stock carries its own risks. Cigarette packs need visual inspection before resale. Water must be tested and filtered. Weapons require permits and modifications. Profitable chemicals rely on closely guarded recipes. Rare items need proper appraisal to avoid overpaying. You can cut the product's quality, relabel counterfeit products as genuine, or fence discounted, stolen goods if you believe Security won't reach you. But beware, there's always the mob justice."

  > "Rent increases over time, regardless of how well your week went. If you fall behind, the consequences are practical. Your store loses attractiveness, fewer customers walk in, revenue drops, and the gap widens. Recovering from that slide often means taking on riskier deals just to stabilize your cash flow."

  > "A sentient AI chip went rogue and took its hosts with it. Augs look like everyone else ... until they don't. Stay alert, pick up on the signs. Every faction agrees on the policy, and you have the gun to enforce it."

- GAME FEATURES 原文清单（逐条）：
  > Run your store in a dystopian station／Balance supply and demand by attracting the right customers／Authenticate rare goods and sell them for a profit／Haggle for the best deals, but remember that every bargain comes with a trade-off／Master additional jobs: water merchant, hydroponic farmer, organ dealer, and more／Manage machines and production chains to craft valuable artifacts／Unlock advanced licenses to access the underground market／Navigate cutthroat politics and build connections with the right factions to get the exclusive deals／Profit from the arrogant elite by selling them counterfeit goods／Exploit (or help) the less fortunate／Manage and expand your inventory／Hide stolen goods and contraband from the authorities (or bribe your way out if you get caught)

- 使用限制：以上均为**机制定性**，仍**没有**房租数值、买断价、利润数字、配方与阈值 → 这些位置继续写 `[Unconfirmed]`。

### A3. 官方公告：Global Release Times and Pricing（发布 2026-10-26，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847286114044034`
- 抓取日期：**2026-10-28**
- 关键原文（价格与时间，全部原样）：
  > "We're launching on October 28 at 2:00 PM CET / 9:00 AM EDT / 6:00 AM PDT!"
  > "US: $19.99 / EU: €19.99 / UK: £16.99 / CN: ¥55 / RU: ₽499 / PL: zł49.99 / JP: ¥1,999 / CA: C$24.99 / AU: A$24.99 / NZ: NZ$29.99 / KZ: ₸2,999 / ZA: R99.99 / BR: R$44,99 / MENA: US$8.99 / CIS: US$7.99 / LATAM: US$8.99 / SASIA: US$7.99"
  > "Additionally, Probably Stolen will have a 10% discount at launch!"
  > "Supporter Edition - it includes the base game + official soundtrack."
  > "Probably Stolen will have bundled deals with ReStory, Potion Craft, and TCG Card Shop Simulator"
  > "Saves from the Demo are compatible, but we greatly recommend starting a new game to avoid potential bugs. Once Probably Stolen 1.0 is releases, the Demo will no longer be available, and mods made for the Demo will likely not be compatible for the main game."
- 用途：FAQ 页价格/平台/版本；不得用于「首发实际成交价」以外的推断。

### A4. 官方公告：Opening October 28: What's in Store for 1.0 Release?（发布 2026-10-21，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847286114030254`
- 抓取日期：**2026-10-28**
- 关键原文（1.0 系统清单）：
  > "Game Ending — Where you can purchase and own the store. However, now when achieving this massive goal, you'll get THE STATS. See your most profitable sale, the days survived, total worth, perks and more numbers to compare it to your more successful friends."
  > "After picking a starting scenario, you can choose between 4 difficulty options."
  > "Steam Workshop support + modding API + mod localization support"
  > "21 Steam Achievements"
  > "Vending Machines — Unlock the Vending Machines that sell goods overnight after your close shop to generate more profit."
  > "Coming in the post-launch updates: Organ Trader Starting Scenario... Junker Starting Scenario... Street Food Vendor Starting Scenario"
- 1.0 可用开局（原文列 9 个）：Apprentice、Water Merchant、Fence、Rock Bottom、Hydroponic Farmer、Gunsmith、Chemist、Rat Wrangler、Aquafarmer。
  > "Apprentice. Best for beginners. Be a generalist. Upgrade as you go. Learn the game at your own pace."
  > "Rat Wrangler. Can you grow a healthy 2x3 rat?"（原文如此）
  > "Organ Trader Starting Scenario - for the Butcher fans."（明确为 **post-launch**，1.0 不可选）
- 注意：任务书写的「6 类开局」对应的是商店页文案；**1.0 官方公告实际为 9 个**，建矩阵时以 9 个为准。

### A5. 官方公告：500,000 Wishlists!（发布 2026-10-27，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847286114050284`
- 抓取日期：**2026-10-28**
- 关键原文：
  > "Then, over 100,000 of you tried it and filed bug reports and surveys. Today, we've hit 500k Wishlists and Probably Stolen is one of the Most Played Demos at Steam Next Fest."
  > "October 28, 2:00 PM CET / 9:00 AM EDT / 6:00 AM PDT / 10% off at launch"
- 官方开局一句话描述（原文）：
  > "Apprentice: Generalist. Best for beginners. / Water Merchant: Test, purify, re-label or don't. Liability is yours. / Fence: Stolen goods. / Gunsmith: Weapons and mods. High margins, security inspections. / Chemist: Profitable chemicals, closely guarded recipes, and customers who come back. / Hydroponic Farmer: Grow crops in small spaces. Finish with genetically modified breeds people pay a fortune for. / Aquafarmer: Breed fish. Manage their tanks and water quality. / Rat Wrangler: Can you grow a healthy rat? / Rock Bottom: You start with nothing. Maximum difficulty."

### A6. 官方公告：UPDATE 049 Patch note — Release Date + New Demo（发布 2026-09-14，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1843481262702145`
- 抓取日期：**2026-10-28**
- 可引用的官方数值（原文）：
  > "Model Citizen: credit bonus from reporting criminal customers increased from 20% to 50% (buff)"
  > "Intimidating: evidence generation reduction increased from 25% to 33%, and starting point cost reduced from 3 to 2 (buff)"
  > "Addiction perks: trading penalty increased from 5% to 8%"
  > "Each ingot size upgrade now also adds 20 maximum durability and 20 current durability"
  > "Repairing with scrap now restores 50% of maximum durability instead of a flat 50 points"
  > "Increased the cap on how many inventory windows can be open at once from 10 to 25"
  > "The Toolbox can be bought from Dr. Jackson after day 14"
  > "Fanta has been renamed to Phanta to avoid trademark infringement"
  > "The Advanced Turbo-Booster's sprite is now color coded by its status"
  > "Pouring wine into a liquid container now produces a new Wine Extract liquid, which changes the color of the liquid"
  > "Premium Spring Water now has the Water tag, but non-Upper Level customers and tourists will not accept it"
  > "The Thief's stock now scales with Black Market reputation"
  > "Some T3 buyers from the display case now scale their budget"
  > "Adjusted how bargaining affects customer budgets"
- 注意：以上是**补丁数值**，不是经济模型；不能据此推导房租、利润或熔炉配方。

### A7. 官方公告：Playtest Patch 48.3.10 — Rock Bottom & Water Upgrade（发布 2026-08-06，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314342898`
- 抓取日期：**2026-10-28**
- 关键原文：
  > "New starting scenario: Rock Bottom (hardcore mode, you start with nothing)"
  > "Water trading guide can now be bought from Dr. Jackson"
  > "At -40 reputation with the Black Market, players now retain access to the janitorial service, but the cost is doubled"
  > "Players can no longer lose the game with the 'Augmented' ending for missing too many augs, unless playing on Hard Mode"
  > "Added a 60 FPS cap to prevent increased load on faster hardware"

### A8. 官方公告：Playtest Patch 48.3.12 — The Rat Wrangler（发布 2026-08-07，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840310314345942`
- 抓取日期：**2026-10-28**
- 关键原文：
  > "The Rat Wrangler starting scenario (previously secret) is now visible alongside the other starting scenarios"
  > "A cleared inspection that resulted from showing contraband in the display case will no longer grant Security reputation. This prevents players from farming free Security reputation by repeatedly displaying contraband and then hiding it in the smuggler bay to pass inspection"
  > "Fixed a bug where the Junk Processing Module for the furnace was secretly using twice the amount of power displayed"

### A9. 官方公告：100,000 Wishlists and unique players + our nearest plans（发布 2026-08-28，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1842212951304317`
- 抓取日期：**2026-10-28**
- 关键原文：
  > "Probably Stolen has reached 100,000 wishlists! And also 100,000 players have tried our Steam playtest."
  > "a Probably Stolen Demo is coming on September 14th... It will feature a new starting scenario: The Water Merchant"
  > "come join the 7500 other shopkeepers on our Discord"

### A10. 官方公告：Demo Update — Aquafarmer（发布 2026-10-19，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706689954`
- 抓取日期：**2026-10-28**
- 关键原文（Aquafarmer 机制，可作定性事实）：
  > "You begin with a basic water circulation system, a stock of tilapia, and a supply of fish food."
  > "There are different varieties of tilapia before expanding into more valuable species, such as eels and sturgeons. Each has its own habitat requirements, so you'll need to manage the tank's water quality, filtration, and energy cell"
  > "your fish may reproduce by laying and fertilizing roe. The eggs will eventually hatch into swarms of fry, which will grow into mature fish."
  > "Use a knife to slaughter and butcher fish for their meat. Certain fish may also provide unique resources beyond meat. You can also use Surgery Tools on sturgeons to harvest caviar."

### A11. 官方公告：首发公告 Probably Stolen: Cyberpunk Pawnshop Simulator（发布 2026-08-03，抓取 2026-10-28）

- URL：`https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1839676055895202`
- 抓取日期：**2026-10-28**
- 关键原文（开发背景）：
  > "Probably Stolen initially began as a solo project by dev Bei Ning Pan, who has since been joined by a team of 4 artists and 3 audio developers."
  > "Probably Stolen was built on top of a previous project originally called Space Looter... His biggest inspirations for Probably Stolen have been Space Station 13 and also a bit of Papers, Please."

### A12. 官方开发商站 — Questing Goose Studio（抓取 2026-10-28）

- URL：`https://questinggoosestudio.com/en/probably-stolen`
- 抓取日期：**2026-10-28**
- 关键内容：
  > "Coming to Steam in 2026."
  > 商店页文案级描述（rent / station's cut rise over time）；**无价格、无具体发售日、无系统需求、无数值机制**。
- 注意：开发商站信息**落后于 Steam**（仍写 2026），不得用其覆盖 Steam 公告的 10-28 日期。

### A13. 官方视频（存在性核验）

- YouTube 搜索（2026-10-28）可见官方系标题：
  `Probably Stolen - Cyberpunk Shopkeeper Sim - Official Announcement Trailer`、
  `Probably Stolen - Official Release Date Trailer`、
  `Probably Stolen - Official Release Date Trailer | TinyBuild Connect Showcase 2026`。
- **URL 未落库，未取字幕**；若要当 A 级来源引用，解锁后补抓具体视频 URL + 上传日期 + 字幕时间戳。

---

## B 级（媒体/可交叉，仅用于定性事实，不含数值）

> 判定标准：能交叉官方事实（发售日、平台、类型、开发商/发行商）的媒体稿。
> **本文件不把任何媒体稿当数值来源**；下表多为 SERP 可见、正文未完整抓取，引用前需补抓。

| # | URL | 发布日期 | 抓取状态（2026-10-28） | 可用范围 |
|---|---|---|---|---|
| B1 | `https://www.gematsu.com/2026/09/probably-stolen-launches-october-28` | 2026-09（URL 路径） | WebFetch 返回 **403**，正文未取 | 仅可交叉「10-28 发售」；引用前补抓 |
| B2 | `https://www.gamesradar.com/games/simulation/in-a-steam-next-fest-plagued-by-ai-slop-the-biggest-single-player-demo-is-a-game-about-fighting-rampant-ai-a-sim-where-youre-basically-a-merchant-in-cyberpunk-2077/` | 未取到 | 正文被截断，仅标题可见 | 仅可交叉「Next Fest 最大单人 demo」的说法；**具体 demo 数据仍为 `[待确认]`** |
| B3 | `https://www.gamesbeat.com/`（正文路径 `tinybuild-unveils-probably-stolen-...`，来自 `selection-2026-10-28.md` Q1） | 未取到 | 仅 SERP 标题 | 仅可交叉 tinyBuild 发行 |
| B4 | `https://www.escapistmagazine.com/probably-stolen-cyberpunk-shop-simulator-steam-playtest/` | 未取到 | 仅 SERP 标题 | 仅可交叉 playtest 存在 |
| B5 | `https://www.pushsquare.com/games/pc/probably-stolen-cyberpunk-shopkeeper-sim` | 未取到 | 仅 SERP 标题（数据库页） | 仅可交叉平台 |

> B 级使用红线：**任何价格、房租、利润、配方、开局收入都不得从 B 级取**；只用它证明「媒体也这么写」的定性事实。

---

## C 级（明确不可引用，只可用于「结构参考」）

> 依据 `docs/STRATEGY-内容生产.md` 3.1：「竞对攻略站的正文（结构可参考，文字与数据不可引用）」。
> 以下站点均围绕本作、与本站争同一批搜索词，属**竞对**；且多数为 **demo 期**内容。

### C1. probably-stolen.wiki（专属 wiki，竞对）

- URL：`https://probably-stolen.wiki/`（含 zh-cn / zh-tw / ja / fr / es / pt 本地化）
- 页面日期示例：buy-out-shop `9/16/2026`；appraisal `9/18/2026`
- **为什么不能引用**（其自述）：
  - buy-out-shop 页：**无房租公式**；买断价只是单个存档的例子，且明确「因开局而异、不是固定价」（unconfirmed）；抵押条款「开发者从未公布」（unconfirmed）。
  - starting-scenarios 页：**没有每路线统计数据**；隐藏路线为社区说法、标为未确认。
  - 页脚来源只列 `questinggoosestudio.com` / `store.steampowered.com` / `discord.gg` / `x.com` / `reddit.com`，**均无发布日期**。
- 结论：结构可参考（页型、目录、FAQ 组织），**数据与文字一律不引**。

### C2. probablystolengame.wiki（专属 wiki，竞对）

- URL：`https://probablystolengame.wiki/`（含 ja / fr / de 等）
- 约 79 页 / 8 类（见 `selection-2026-10-28.md` 竞争分析 Q2）
- **为什么不能引用**：同 C1；且未提供可核验的一手来源与日期。

### C3. gamewikistation.com（多语言 wiki 农场，竞对）

- URL：`https://gamewikistation.com/games/probably-stolen/ja/machines/furnace/` 等（ja / ru / pt / es / fr 自动本地化）
- **为什么不能引用**：多语言自动翻译页，无可核验来源与日期；熔炉配方/纯度分级等数值均无官方出处，属社区未确认数据。

### C4. tposegaming.com（综合站单篇，demo 期）

- URL：`https://tposegaming.com/probably-stolen-guide/`
- 日期：发布 **2026-09-15**，更新 **2026-10-21**
- **为什么不能引用**：作者自述 "This text has been written based on the demo version of the game."；**全文无任何数值**（房租只说 "starts manageable and climbs"），**无引用**。

### C5. thegamesedge.com（综合站单篇，demo 期）

- URL：`https://thegamesedge.com/probably-stolen-trading-guide-water-merchant-tips/`
- 日期：**2026-09-15**
- **为什么不能引用**：自述基于 demo；**无水质阈值、无价格、无利润数字**；**无引用**。

### C6. gamebrief.net（综合博客单篇）

- URL：`https://www.gamebrief.net/blog/probably-stolen-starting-scenarios-guide-2026`
- **为什么不能引用**：综合站单篇、demo 期，未见可核验数值与引用；仅可用于「9 个开局」的旁证（官方 A4/A5 已足够）。

---

## 不可达来源（现象留档，供以后判断）

### U1. Steam 社区（steamcommunity.com）

- 现象（2026-10-28 实测）：
  - `dig +short steamcommunity.com` → `198.27.124.186`
  - `dig @8.8.8.8` → `208.101.21.43`；`@1.1.1.1` → `31.13.95.169`；`@223.5.5.5` → `162.125.32.13`
  - WebFetch → `connect ECONNREFUSED 31.13.67.33:443`（Facebook 段 IP）
  - `curl --resolve` 直连亦失败
- 判断：与本机已知的 **DNS 投毒**一致（同 `suggestqueries.google.com` / `vercel.app` 现象），不是站点下线。
- 影响：Steam 讨论区/指南**无法按「URL + 抓取日期 + 原文摘录」留证**，按素材规范视为无效来源。

### U2. Reddit（reddit.com / r/ProbablyStolen）

- 现象：`old.reddit.com/.../top.json` → **HTTP 403 Blocked**；`www.reddit.com/...json` 返回反爬 HTML；WebSearch 未返回该 subreddit 的真实帖子。
- 影响：同上，无法留证；`r/ProbablyStolen` 的存在仅由竞对页脚间接提到，**未验证**。

### U3. Cloudflare DoH

- `https://cloudflare-dns.com/dns-query?name=steamcommunity.com&type=A` 本机请求失败，无法用 DoH 绕开污染。

---

## 逐页可写性判定（本轮建站决策依据）

| 计划页 | A 级是否够 | 第二独立源 | 判定 | 说明 |
|---|---|---|---|---|
| 房租递增 + 买断经济数字模型 | ❌ | ❌ | **不写** | A 级只有「房租每周涨、落后→吸引力↓→客流↓」的定性描述；**无房租数值、无买断价、无公式**；竞对页亦自述无公式 |
| 水/酒产线利润表 | ❌ | ❌ | **不写** | A 级有检测/过滤/换标/装瓶/Wine Extract 机制；**无价格与利润**；综合站自述零数值 |
| 熔炉纯度与完美锭 | ❌ | ❌ | **不写** | A 级仅「机器与产线造 artifact」+ 锭耐久 +20 + 废料修理 50%；**无配方/纯度/价值** |
| 6（实为 9）类开局利润曲线对比 | ❌ | ❌ | **不写** | A 级有 9 个开局描述，**无收入数据**；竞对自述无每路线统计 |
| 鉴定四步判定条件 | ❌（仅检查类型） | ❌ | **不写** | A 级有香烟目检、水质检测、稀有品估价、假货换标；「四步清单」只在竞对 wiki |
| 治安/地下交易所/派系声望因果 | ✅ | ✅（B 级定性） | **可写** | A4/A5/A6/A7/A8 覆盖许可证→地下市场、派系专属交易、藏匿/贿赂、-40 声望、窃贼库存随黑市声望、检查通过不再给治安声望 |
| FAQ（发售/价格/平台/语言/联机/成就/Mod） | ✅ | ✅（B 级定性） | **可写** | A1/A2/A3/A4 覆盖 $19.99、-10%、14:00 CET、仅 Windows、单人、8 语言、21 成就、Workshop、4 难度 |

> 结论（2026-10-28 18:40 更新）：数值型 5 页仍**不写**（官方无数）；机制型可写页在补入 **A2b** 后从 2 页扩到 6 页
> （FAQ / 新手 / 9 开局 / 水生意 / Aquafarmer / 黑市声望 / 买断通关），已满足首批 5–8 页下限 → **已建站**。

---

## `[待确认]` 清单（原样保留）

- 1.0 实际售价是否与公告一致（商店 API 未开售，`price_overview` 为空）
- 评测数/好评率、CCU、Steam Deck 兼容等级（发布后才有）
- 房租公式/初始房租/涨幅、买断价、抵押条款（官方从未公布）
- 熔炉配方、纯度分级、完美锭判定、各产线利润（无官方源；竞对数据不可引用）
- 各开局收入曲线（竞对自述无统计数据）
- 鉴定四步的具体判定阈值（仅竞对 wiki 有框架）

---

## 解锁后要补采什么（下一轮建站前置）

> 解锁时间：**2026-10-28 21:00 北京时间**。建议解锁后 **24–48 小时**再采，让评测与实机数据沉淀。

1. **评测数据**：Steam `appreviews/4348910` 的 `query_summary`（review_score、total_reviews、total_positive/total_negative）、首发好评率；商店页 `bHasAnyReviews` 是否转 true。
2. **在线/热度**：`ISteamUserStats/GetNumberOfCurrentPlayers`（当前 `result: 42` = 无数据）；SteamDB 历史峰值（如可达）。
3. **房租与买断实际数值**：初始房租、每周涨幅、逾期宽限次数、买断价/产权价、是否 1.0 真的开放买断；以**实机截图或官方 1.0 公告**为准，竞对数值不可引。
4. **熔炉纯度与产线利润**：输入配比、纯度分级、完美锭判定、单夜产出与售价；需 ≥2 个独立来源（官方补丁 + 实机测试帖/视频），否则标 `[Community]`。
5. **各开局收入**：至少 3 个开局的前 10/30 天收入样本，需说明版本号与难度；单一样本不得写成「曲线」。
6. **鉴定阈值**：包装/指示剂/序列号/印刷四类检查的判定条件与失败后果，需官方或可复现实机证据。
7. **渠道可达性**：换网络或修 DNS 后重试 `steamcommunity.com` / `reddit.com`，把 URL + 抓取日期 + 原文摘录补进本文件 B 级。
