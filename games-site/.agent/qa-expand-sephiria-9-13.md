# QA 报告 — sephiriawiki 每日内容扩充（EXPAND-9/13-sephiria）

- 站点：`sephiriawiki`（Sephiria，Steam app 2436940，TEAM HORAY）
- 日期：2026-09-13
- 结论：**EXPANDED — PASS**（🔴 0 / 🟡 3 已归档）
- 新增：`content/guides/price-increase-and-worth-it-guide.md`（**1,486 词**，脚本实测）
- 修订：`content/home-content.md`（导航登记 1 行）、`app/guides/page.tsx`（**跨站模板残留修复**，1 行 meta description）

---

## 一、选题路径（两条并行，按 9/12 规则）

### 路径① complaint-driven（抱怨驱动）

采集范围与实测结果：

| 通道 | 命令 | 实测 |
|---|---|---|
| Steam 评测（近期） | `appreviews/2436940?filter=recent&language=english&num_per_page=100` | **HTTP 200**，100 条，窗口 2026-09-08 → 09-12 |
| Steam 评测（差评） | `appreviews/2436940?filter=negative&language=english&num_per_page=100` | **HTTP 200**，37 条 |
| Steam 评测（全时段最有帮助） | `appreviews/2436940?filter=all&num_per_page=100&day_range=365` | **HTTP 200**，100 条 |
| 官方新闻 API | `ISteamNews/GetNewsForApp/v2/?appid=2436940&count=20` | **HTTP 200**，20 条公告全文 |
| 官方商店页 | `store.steampowered.com/app/2436940/` | **HTTP 200**，156 KB |

去重后**unique 样本 136 条**。全局基数：`total_reviews` 2,879 / `total_positive` 2,794（97%），`review_score_desc` = **Overwhelmingly Positive** —— 差评占比仅 2.9%，**抱怨池天然稀薄**。

Reddit：**维度缺失，如实记录**。本轮 `site:reddit.com` 与 WebSearch 均未取到可用结果，未编造任何 Reddit 内容。WebSearch 返回的 keylol 二手转述（"2025-04-03 脱离 EA"）与官方 7/29 公告"full 1.0 launch on July 31st, 2026"**互斥**，按规则判该二手源不可采信，未采用。

高频抱怨逐条映射后仍**全部落在既有页面上**（与 9/7–9/12 结论一致）：

| 抱怨主题 | 样本数（独立评测） | 既有覆盖 | 判定 |
|---|---|---|---|
| server-side / delay-based netcode、高 ping、跨区不可玩 | ≥4（8/11 99 赞、8/13 6 赞、8/15、9/6 4 赞） | multiplayer-connection-fix + coop-freeze-recovery | 已覆盖 |
| 崩溃/报错丢档 | ≥3（8/11 0.8h、9/11 "deleted all my data"、8/11） | save-file-guide | 已覆盖 |
| 后期弹幕/特效糊屏不可读 | ≥2（8/23 40.3h、8/26 27.4h） | chapter-6-final-boss / boss / hard-mode | 已覆盖 |
| evasion 必选 meta、终局 DPS 检查 | ≥5（8/22、8/23、8/25、8/29、8/16） | builds-guide + hard-mode | 已覆盖 |
| 后期变简单 / 一个 broken build 通关 | ≥4（9/1、9/4、9/9、8/11） | 部分（hard-mode 提供加压路径） | 折叠为新页警示项 |
| 服装数值取舍 | ≥1（8/30） | costume-stats-and-character-unlocks（9/12 新页） | 已覆盖 |

**抱怨收敛 ≠ 无缺口** → 按规则切路径②。

### 路径② system-inventory-driven（官方系统清单驱动）— 本轮命中

官方一手清单来源：商店页 `game_area_description`（Features + About + 系统需求 + 购买区）与官方公告正文，均本轮直连 200。

| 官方明说的层 | 出处 | 站内覆盖 |
|---|---|---|
| Artifacts + Tablets 背包网格 | 商店页 Features | ✅ artifacts / tablets |
| 6 武器 × 各 50+ 升级 | 商店页 Features | ✅ weapons |
| 60+ 敌人 / 10+ Boss / 6 章 | 商店页 Features | ✅ boss / chapter |
| 4 人联机（trade items / revive） | 商店页 Features | ✅ coop / multiplayer-connection-fix |
| Achievements / Cloud / Windows+macOS / 2 GB | 商店页 Features + 系统需求 | ✅ endgame / save-file |
| Talents / Hard Mode 60 / Gauntlet | 商店页 About + 公告 | ✅ talents / hard-mode / endgame |
| **商业层：价格、折扣、涨价时点、Demo、无 DLC** | **商店页购买区 + 官方 "Price Update Notice"（9/12）** | ❌ **全站 0 覆盖** |

**命中项 = 定价与购买决策。** 官方 9/12 发布 "Price Update Notice"（$14.99 → $17.99，2026-09-14 14:00 KST 生效），商店页购买区仍为 `data-price-final=1499`、`data-discount=0`；站内 38 篇**没有任何一篇**涉及价格、购买时机或"值不值"。这是官方明说有、站内整块空白的层（也是协调员 Profile"辅助层：价格平台"明列的品类）。

四条件核验：

1. **高频 ≥3 独立来源** ✅（**5 类，去重后互不派生**）
   - Official-A：Steam 公告 "Price Update Notice"，2026-09-12 07:10 UTC，经 `ISteamNews` 取全文（5 币种对照表 + 生效时点 + "see you in Bunnyville!"）
   - Official-B：Steam 公告 "Launch Time Details"，2026-07-29，**独立**预告"once the discount ends and Steam's price-change cooldown (1 month) has passed, **the price will be increased**"
   - Official-C：商店页购买区实测（2026-09-13），`itemprop price = 14.99`、`data-discount = 0`、`Download Sephiria Demo` 按钮在架
   - Media-D：**独立媒体** 17173《赛菲莉娅》价格调整公告，2026-09-12 22:31 CST，WebFetch 取全文，5 币种表与官方逐字一致
   - Community-E：**≥6 条独立 Steam 评测**给出明确价格/价值判断（7/21 17 赞 229.8h、8/4 79 赞 126.2h、9/9 ×2、9/10、9/11 28.9h、9/12）
2. **具体** ✅ —— "何时涨、涨多少、现在买还是等、$17.99 值不值"是能写清且有明确截止时点的具体问题。
3. **真缺口** ✅ —— 先 `ls content/guides/` 列全 38 个 slug，再全站 `grep -rn -i "14\.99|17\.99|price|USD|\$1[0-9]"`：**仅 2 处命中**，一为 `faq-content.md` 的 keyword 标签 `"price"`，一为 `costume-stats-…-guide.md` 里 "the dash penalty is the price"（语义无关）。无任何价格/购买/平台页。另有旁证：`keyword-results/Sephiria-feedback.md`（2026-08-01）已把 "Is Sephiria worth it 2026 / should I buy" 列为目标搜索语且标注无覆盖 —— 缺口为既有分析所预见。新页搜索意图（购买决策）与 `full-release-guide`（1.0 新增了什么）、`game-length-guide`（通关时长）**均不同**，不自噬。
4. **可溯源** ✅ —— 见下 2.1；百分比与 KST→UTC/PDT/EDT 换算明确标 [Editorial]；未来是否会打折回 $14.99 标 **[Unconfirmed]**，未挑单方下结论。

### 未采纳的待触发选题（如实记录否决理由）

| 候选 | 卡在四条件哪一条 | 处置 |
|---|---|---|
| **1.0.33 单独成篇** | 条件②具体 —— 内容量仅 1 个 miniboss 弹幕修正 + 3 条 artifact/weapon 修正 + 2 条 UI/弹窗修复，凑不满 800 词 | 已由 `patch-1-0-31-build-changes-guide` 附录承载，**独立成篇即自噬红线** |
| **敌人穿墙（1.0.33 Known Issues）** | 条件①高频 —— 官方 1 条 + 玩家零散反映，**无可追溯的独立第三方样本** | 折叠进新页警示项，不成篇 |
| **武器升级材料（Copper / Luminous / Apex）** | 条件④可溯源 —— 复检仍单源（xmodhub 同源多语）+ 命名冲突（Lunar vs Luminous、Thief's Satchel vs Scavenger） | **触发条件不变，继续不写** |
| **Mysterious Door / 联机开局门槛** | 条件① —— 独立来源 <3，且与 multiplayer-connection-fix 同题族 | 不写 |
| **后期变简单 / broken build 通关** | 条件③缺口 —— ≥4 独立评测满足①，但落点会与 hard-mode + builds-guide 重叠 | 折叠为新页警示项，不成篇 |
| **Fruit stand / 重掷经济** | 条件① —— "fruit stand" 仅 1 条评测（9/3） | 不写 |
| **村庄建造未完成** | 条件① —— 仅 1 条（8/13 "not even half finished town builder"） | 不写 |
| **服装数值** | 条件③ —— 9/12 已建 `costume-stats-and-character-unlocks-guide` | 自噬，不写 |

---

## 二、QA quick 结果

### 2.1 虚构检测（逐个数值/名称独立核验）

| 名词/数值 | 核验方式 | 判定 |
|---|---|---|
| $14.99 → **$17.99**（USD） | 官方公告全文逐字 + 17173 独立媒体表逐字 + 商店页 `itemprop price=14.99` 实时值 | ✅ 三源一致 |
| €14.79 → €18.25 / ¥58 → ¥68 / ¥1,700 → ¥1,980 / ₩16,500 → ₩19,000 | 官方公告 + 17173 逐字一致 | ✅ 双源一致 |
| 生效时点 **September 14, 2026, 2:00 PM (KST)** | 官方公告原文；中文媒体作"2026年9月14日下午2:00（韩国标准时间）" | ✅ 双源一致 |
| KST→UTC/PDT/EDT 换算 | 自行换算（KST=UTC+9） | ✅ 文中标 [Editorial] |
| 涨幅 +20.0% / +23.4% / +17.2% / +16.5% / +15.2% | 自行算术（17.99/14.99 等） | ✅ 文中标 [Editorial] |
| "no season pass / DLC" | 商店页 HTML `Downloadable Content` / `game_area_dlc` / `Season Pass` **零匹配**，限定 "as of September 13, 2026" | ✅ 实测并限期 |
| 免费 Demo 在架 | 商店页存在 `Download Sephiria Demo` 按钮 + `game_area_purchase_game` 区 | ✅ 实测 |
| 97% of 2,693（English）/ 95% of 2,848（近 30 天） | 商店页 glance 原文逐字 | ✅ 实测 |
| 6 武器 × 50+ 升级 / 60+ 敌人 / 10+ Boss / 6 章 / 4 人联机 / 2 GB / Windows+macOS | 商店页 Features + 系统需求 | ✅ 官方 |
| 发布日 **July 31, 2026**、TEAM HORAY、Dungreed 工作室 | 商店页 `Released Jul 31, 2026` + Developer/Publisher 区块 | ✅ 官方，且与站内 full-release-guide / faq 一致 |
| 玩家引语 6 条（含 28.9h / 18.4h / 29.0h / 229.8h 17 赞 / 126.2h 79 赞） | 逐条回查 `appreviews` 原始 JSON（时间戳、`votes_up`、`playtime_forever` 三项一一对齐） | ✅ 全部可溯源，未改写原话 |
| "a heavily-upvoted negative review (August 11, 2026, 99 helpful votes)" | 回查原始 JSON：`votes_up=99`、日期 08-11 | ✅（初稿曾写 "most-upvoted 最高赞"，因样本为 137 条抽取而非全量，**已降级为 "heavily-upvoted"** 避免过度断言） |
| "playtimes run from under 20 hours to 230 hours" | 回查抽取池 min/max（18.4h / 229.8h） | ✅（初稿写 "around 19 hours"，**已修正为 under 20 hours**） |
| 1.0.33 Known Issues「enemies moving outside of walls」 | 官方 1.0.33 公告开头 Known Issues 段逐字 | ✅ 官方，且与 patch-1-0-31 页 sources 记载一致 |

未发现无来源的名词或数值。所有自行推导项均标 [Editorial]，不可验证的未来价格标 **[Unconfirmed]**。

### 2.2 残留扫描

| 检查项 | 命令 | 结果 |
|---|---|---|
| 他站游戏名（20+ 站名 + 站名变体） | `grep -rniE "SpiritVale\|Witchspire\|Mistfall\|Aincrad\|The Mound\|Tears of Metal\|Grain Rot\|…" content app lib components` | ✅ Clean（exit 1） |
| Hugo shortcodes / 模板描述 / 虚假工作室 | `grep -rniE "\{\{<\|\{\{%\|cooperative PvE extraction\|survive the horrors of the cursed jungle\|SpiritVale Studio\|published by NACON" content app lib components` | ✅ Clean（exit 1） |
| 新页单独扫描 | 同上 pattern + `EX-Mod\|Hugo\|shortcode` | ✅ Clean（exit 1） |
| JSON-LD 域名 | `grep -oE "https?://[a-z0-9.-]+" lib/schema.ts` | ✅ 仅 `schema.org` + `store.steampowered.com` |
| 站点身份 | `lib/seo-config.ts` | ✅ `Sephiria Wiki` / `G-…` 与 `ca-pub-…` 均非占位符 |
| **表格渲染缺陷（9/12 全网面事故项）** | 构建产物 `grep -c '<td>-------</td>'` | ✅ 0 —— 新页 2 张表 tbody 首行正常 |

#### 🔴 残留修复 1 处（本轮发现并修复，属 9/12 已归档的"组件/模板残留"类别）

- **位置**：`sephiriawiki/app/guides/page.tsx:10`（`/guides` 页 metadata description）
- **原文**：`'Complete Sephiria guide collection — weapon classes, builds, boss strategies, EX-Mod crafting, progression tips, and more.'`
- **证据**：`grep -rn "EX-Mod"` 全仓命中 —— `EX-Mod` 是 **aincradwiki 的专有系统**（`aincradwiki/app/guides/page.tsx:10` 同句逐字相同，另有 20+ 处 aincradwiki 内容引用 EX-Mod）。**Sephiria 官方商店页 Features / About / 全部 20 条公告中不存在 EX-Mod 系统**；Sephiria 的实际系统是 Artifacts / Tablets / Inscriptions / Talents / weapon upgrades / Costumes。判定为**跨站模板残留**（复制 relation，非共享包）。
- **修复**：同句改为 `'Complete Sephiria guide collection — weapon classes, builds, boss strategies, artifact and tablet systems, progression tips, and more.'`
- **命中面（按 9/12 共享组件规则报站数）**：本次全仓 grep 命中的 **`app/guides/page.tsx` 文案串仅 2 站** —— `aincradwiki`（**合法**，EX-Mod 是该游戏真实系统）与 `sephiriawiki`（**残留**，已修）。**本轮仅改 sephiriawiki，未触碰 aincradwiki 或其他任何站点目录**。线上复验：`/guides` 页 `EX-Mod` 计数 **0**、`artifact and tablet systems` 计数 **1**。

### 2.3 内链有效性（历史线上 404 教训项）

脚本全量校验新页 `related:` 数组与正文 `](/guides/…)` 链接，对照 `content/guides/*.md` 实际 slug 集合：

- `related`（8 个）：`full-release-guide, game-length-guide, beginner-guide, multiplayer-connection-fix-guide, save-file-guide, costume-stats-and-character-unlocks-guide, patch-1-0-31-build-changes-guide, endgame-guide` → **missing: none**
- 正文内链（12 个 unique）：`beginner-guide, coop-freeze-recovery-guide, costume-stats-and-character-unlocks-guide, endgame-guide, full-release-guide, game-length-guide, hard-mode-guide, inscriptions-guide, multiplayer-connection-fix-guide, patch-1-0-31-build-changes-guide, save-file-guide, talents-guide` → **missing: none**
- 线上渲染确认：页内 `href="/guides/…"` unique = **12**，与源码一致。
- 反向链接已建立：`content/home-content.md` Quick Navigation 表新增 1 行；新页同时被 `/guides` 索引自动收录（`app/guides/page.tsx` 走 `getAllGuides()`，无需手工登记）。

### 2.4 内部一致性

- **与 `patch-1-0-31-build-changes-guide.md` 无自噬、无矛盾**：新页只在警示项引用 1.0.33 的 Known Issues（敌人穿墙），并链接该页；不重述 1.0.31/1.0.33 的任何 upgrade/artifact 数值。版本口径（1.0.31 = 9/10、1.0.33 = 9/11）与该页 `updated: 2026-09-12` 的记载一致。
- **与 `full-release-guide` / `faq-content.md` 一致**：发行日 July 31, 2026、开发商 TEAM HORAY、6 武器 / 6 章 / 10+ Boss / ~300 artifacts / 1-4 人联机 / 2 GB 全部一致，无冲突。
- **与 `save-file-guide` / `multiplayer-connection-fix-guide` / `coop-freeze-recovery-guide` 一致**：新页只做"购买前须知"层面的指引并外链，不重述修复步骤。
- **新页不主张 Steam 综合评价标签**（只引用可当场复核的百分比与分母），因此**不与站内现有 "Very Positive" 表述构成直接互斥**。

#### 🟡 已归档（不在本轮修改范围，建议主 Agent 决策）

1. **站内 Steam 评分标签已过时（"Very Positive" → 现为 "Overwhelmingly Positive"）**
   - 证据：商店页 2026-09-13 实测 `English Reviews: Overwhelmingly Positive (97% of 2,693)`、`Recent Reviews: Overwhelmingly Positive (95% of 2,848)`；`appreviews` API `review_score_desc = "Overwhelmingly Positive"`；官方 7/08 公告亦自称 "the Overwhelmingly Positive rating so far"。
   - 命中位置（**7 处 / 6 文件**）：`content/guides/faq-content.md:20`、`content/guides/full-release-guide.md:13`、`content/guides/beginner-guide.md:13`、`content/home-content.md:15` 与 `:93`（后者自相矛盾："**Very Positive** — Overwhelmingly positive player reception"）、`app/faq/page.tsx:12`、`app/page.tsx:16` 与 `:89-90`（首页统计卡）。
   - **未修理由**：属跨 6 文件的批量事实修正，且需同步 `updated` 字段，超出"今日 1 篇"范围；按规则记录待主 Agent 决策（建议单独派一次 mini fact-sweep）。
2. **`app/page.tsx:39` / `lib/schema.ts:61,78` 的 "Buy on Steam" 指向 `https://store.steampowered.com/` 商店首页**，而非 app 页 `https://store.steampowered.com/app/2436940/Sephiria/`（正确写法见 `components/Footer.tsx:9`）。属历史遗留，未在本轮改动。
3. **`content/home-content.md:100` 链接 `https://www.reddit.com/r/SephiriaGame/`** —— 与 9/12 及本轮 Reddit 维度连续缺失（未找到活跃 subreddit）的记录存在张力，该链可能为死链。未在本轮改动。

---

## 三、部署与线上验证（证据链）

- 构建：`pnpm install && pnpm build` → **`✓ Compiled successfully in 1099ms`**，**exit 0**；静态页 51 条，`/guides/price-increase-and-worth-it-guide` 出现在 route 表内。
- 本地产物级验证（`.next/server/app/guides/price-increase-and-worth-it-guide.html`）：
  `Price Update Notice` ×2、`17.99` ×11、`September 14, 2026` ×7、`<td>-------</td>` **0**、`EX-Mod` **0**、`SpiritVale` **0**。
- 部署命令：`vercel --prod --yes`（CLI **58.9.4**；`npx vercel` 在本机解析为 npm script 报 `Missing script: "vercel"`，改用全局 `vercel` 二进制成功）
- 新部署 URL：`https://sephiriawiki-au5zqximf-zhaoq0103s-projects.vercel.app`（`readyState: READY`，`target: production`）
- **生产 alias 指向本次新部署**（不只查首页 200）：
  `vercel inspect sephiriawiki.vercel.app` → `> Fetched deployment "sephiriawiki-au5zqximf-zhaoq0103s-projects.vercel.app"`，`target production`，`status ● Ready`，created Sun Sep 13 2026 05:08:55 +0800。

线上验证（**DNS 陷阱实测命中，已规避**）：本机 DNS 对 `sephiriawiki.vercel.app` 返回 **被投毒的 A 记录** —— `dig sephiriawiki.vercel.app +short` → `64.29.17.3 / 216.198.79.3`（真值 `.67`），照此直连 `curl` 实测 **HTTP:000 SIZE:0（超时 exit 28）**，按规则计为**未验证**。因此全部线上断言改用 `--resolve sephiriawiki.vercel.app:443:64.29.17.67`，真实 IP 由 `dig @8.8.8.8 sephiriawiki.vercel.app +short` 取（返回 `64.29.17.67` / `216.198.79.67`）。

| 检查 | 结果 |
|---|---|
| `/guides/price-increase-and-worth-it-guide` | **HTTP 200，SIZE 68,555**（非零，已断言） |
| 正文特征串命中（线上实测） | `Price Update Notice` ×2、`17.99` ×11、`September 14, 2026` ×7、`under 20 hours` ×2、`heavily-upvoted` ×2、`Bunnyville` ×1 |
| 旧串确认已下线 | `around 19 hours` **0**、`most-upvoted` **0** |
| 残留/缺陷串 | `<td>-------</td>` **0**、`EX-Mod` **0**、`SpiritVale` **0**、转义引号泄漏 **0** |
| `/guides`（残留修复页） | **HTTP 200，SIZE 120,218**；`EX-Mod` **0**、`artifact and tablet systems` **1**、新页卡片 **1** |
| `/sitemap.xml` | **HTTP 200，SIZE 8,416**；`<url>` 共 **46** 条 = 8 静态 + **38 篇攻略**，与 `content/guides/*.md` 实际 38 个文件一致；新 slug 已收录 |
| `/` 、`/ads.txt` | HTTP 200，SIZE 50,329 / 59 |

> 注：部署专属 URL（`*-au5zqximf-…`）返回 302 属 Vercel Deployment Protection 正常行为，canonical 生产域为 200。

---

## 四、变更文件清单

| 文件 | 变更 |
|---|---|
| `sephiriawiki/content/guides/price-increase-and-worth-it-guide.md` | 新增（**1,486 词**） |
| `sephiriawiki/content/home-content.md` | Quick Navigation 表新增 1 行 |
| `sephiriawiki/app/guides/page.tsx` | 跨站模板残留修复（EX-Mod → artifact and tablet systems） |

未触碰 `sephiriawiki/` 以外任何站点目录；未改 `.agent/expand-daily.json`、`.agent/build-history.json`、`STATS-游戏站点统计.md`、`keyword-results/Sephiria-feedback.md`；**未 `git add/commit/push`**；未使用 `npm` 装依赖。

> 观察（非本轮问题）：`git status` 显示 grainrotwiki / tearsofmetalwiki / themoundwiki 同期有并行 Agent 变更，本轮未触碰。

---

## 五、遗留与建议

1. **时效性**：本页时效极强 —— 2026-09-14 14:00 KST 后，"现在买还是等" 的结论转为历史事实。建议 **9/15 复核一次**：把 "still showed $14.99" 更新为 "was raised to $17.99 on September 14"，并把决策段改为"已涨价，回顾"。届时需在正文补记涨价后商店页实测值。
2. **未验证项**：涨价后是否进入常规折扣周期（Steam 通常 4–8 周后首次折扣）**无任何官方来源**，本轮未写，维持 **[Unconfirmed]**。下次复检条件：商店页出现首次 post-launch 折扣（`data-discount > 0`）时，可补一节"涨价后折扣史"。
3. **Steam 评分标签过时（7 处 / 6 文件）** —— 见 2.4 🟡#1，建议主 Agent 派单次 fact-sweep 一次改齐（协调员 Profile 要求"事实修正时全站 grep 关联引用，一次改齐"）。
4. **`app/page.tsx` 与其 JSON-LD 的 Steam 链接指向商店首页**（2.4 🟡#2），以及 `home-content.md` 的 `r/SephiriaGame` 疑似死链（2.4 🟡#3），均建议纳入同一次 fact-sweep。
5. **武器升级材料题的触发条件依然未满足**（Copper / Luminous / Apex 仍单源 + 命名冲突）。下次触发条件不变：出现 ≥2 独立来源且命名一致，或官方公告直接命名材料。
6. **官方公告通道备忘**：`api.steampowered.com` 与 `store.steampowered.com/appreviews` 本轮均 **HTTP 200**，较前几轮的 ECONNREFUSED 已恢复 —— 后续 sephiriawiki 采集可优先直连这两条一手通道，商店页 HTML 内嵌官方公告 JSON 作为兜底。
