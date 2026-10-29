# Demon Bluff — 素材来源台账（2026-10-29）

> 规则：`docs/STRATEGY-内容生产.md`（每页 ≥2 个独立来源且 ≥1 官方；AI 只做过滤整理）
> 站点：`demonbluffwiki/`（2026-10-29 建站）

## 一、官方来源（tier: Official）

| # | 来源 | URL | 抓取日期 | 提供的事实 |
|:--:|---|---|---|---|
| O1 | Steam 商店 API `appdetails`（app 3522600） | `https://store.steampowered.com/api/appdetails?appids=3522600&cc=us&l=english` | 2026-10-29 | 发售 `coming_soon:true` / `"November 2026"`（无具体日）；`price_overview: null`；平台 Windows/macOS/Linux（macOS 另有「不兼容 10.15 Catalina 及以上」声明）；**12 语言已上架**（仅英文全语音，13 为开发公告口径）；分类 Single-player / Achievements / Cloud / Stats / Family Sharing；类型 Casual/Indie/Strategy；最低配置（Win 7–11、2 GB RAM、GeForce 840M、500 MB）；开发者 UmiArt、发行 offbrand games |
| O2 | Steam 商店页 HTML | `https://store.steampowered.com/app/3522600/` | 2026-10-29 | ⚠️ 初读把 `playtests: []` 当成「无 demo」是**错的**：demo 是独立 app（3803820），主页面用 demos 数组指向它；功能列表（100+ 角色卡、外观解锁、多模式）；模式名：多村庄 run / Deckbuilding mode / endless mode / challenges |
| O3 | **Steam 商店 API — Demon Bluff Demo（app 3803820）** | `https://store.steampowered.com/api/appdetails?appids=3803820&cc=us&l=english` | 2026-10-29 | **demo 存在**：type=demo、is_free=true、release_date 2026-05-27 |
| O4 | Steam 新闻聚合（app 3522600） | `https://store.steampowered.com/news/app/3522600` | 2026-10-29 | 官方公告发布位；2026-05-27 帖给出 demo 内容（40+ villager 卡、9 个 Relic） |
| O5 | 官方 Discord（wiki 外链列出） | `https://demonbluff.wiki.gg/` 外链区 | 2026-10-29 | 官方社区渠道存在（未逐条核公告内容） |

> ⚠️ 抓取注意：本机 DNS 把 `store.steampowered.com` 解析到 `2.20.193.191`（错误），裸 curl 会超时。正确做法：`dig +short store.steampowered.com @1.1.1.1` → `23.41.38.92`，再 `curl --resolve store.steampowered.com:443:23.41.38.92`。与 `suggestqueries.google.com` 的投毒是同一类问题。

## 二、社区来源（tier: Community）

| # | 来源 | URL | 抓取日期 | 提供的事实 | 可信度处理 |
|:--:|---|---|---|---|---|
| C1 | Demon Bluff Wiki（wiki.gg）主页 | `https://demonbluff.wiki.gg/` | 2026-10-29 | 142 篇文章；角色分类清单：Villagers 25 / Outcasts 7 / Minions 9 / Demons 3；另有 Gameplay / Relics / Unused Roles | 结构性事实可用；**其 About 写「Yamii Games」是旧工作室名**（wiki 自身 TODO 承认待更新），一律以 Steam 的 UmiArt 为准；**不得引用其首页的「Q1 2026」发售说法**（已过时） |
| C2 | wiki.gg 角色页（MediaWiki API） | `https://demonbluff.wiki.gg/api.php?action=parse&page=...&prop=wikitext&format=json` | 2026-10-29 | 各角色 Ability / Tips / Interactions | 数值随版本变，页面引用须标版本或 `[Unconfirmed]` |
| C4 | 开发公告（Steam news） | `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=3522600` | 2026-10-29 | Relic 定义与例子（Grave Flame / Severed Horn）、Oracle Action 日志、v0.762a「Endless 改为 A5 解锁」、v0.752a「Deckbuilding 需 Endless 存档 10 村」 | 官方口径，优先于 wiki 正文 |
| C5 | 官方新闻稿（三方转载） | `https://www.gamespress.com/nl/Single-player-Social-Deduction-Game-Demon-Bluff-Launches-NOVEMBER-2026` | 2026-10-08 | 30 万 playtest 玩家、均时长近 6h、~23 万愿望单、Discord 8,800+ | 发行方自述数字，引用须标「publisher figures」 |
| C3 | minmax.wiki / demon-bluff | `https://minmax.wiki/demon-bluff` | 2026-10-29 | 12 路径、单页约 1,200 词 | 判为薄站（revisions 停 2025-08），只作交叉印证 |

## 三、二手数据（不进正文档，只作背景）

| 数据 | 数值 | 来源 | 处理 |
|---|---|---|---|
| 愿望单 | ~230,000 | **官方新闻稿 2026-10-08** | 可写，标注「publisher figures」 |
| playtest 参与人数 | ~30 万、均时长近 6h | **官方新闻稿 2026-10-08** | 可写，标注「publisher figures」 |
| 中文社区攻略 | B站 v0.762b 万字攻略 | B站 | 仅用于发现「Drunk 惩罚 −2」与 wiki「−3」的冲突 → 正文一律标版本 |

## 四、禁令

- MUST NOT 写具体发售日（Steam 只到月）。
- MUST NOT 引用 wiki.gg 首页的「Q1 2026」。
- MUST NOT 写「无 demo」—— demo 是独立 app 3803820，2026-05-27 免费上线（2026-10-29 初次建站时的错误，已修正）。
- MUST NOT 写「支持 macOS」不带保留 —— 商店页明写不兼容 10.15 Catalina 及以上。
- 语言数写「**12 已上架 / 13 计划（Turkish）**」，MUST NOT 单写 13。
- MUST NOT 写主机/手机版存在。
- 数值冲突（如 Drunk 惩罚 −2 / −3）必须标版本或写 `[Unconfirmed]`，不得择一当事实。
