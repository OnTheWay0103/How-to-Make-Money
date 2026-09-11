# QA 报告 — sephiriawiki 每日内容扩充（EXPAND-9/12-sephiria）

- 站点：`sephiriawiki`（Sephiria，Steam app 2436940，TEAM HORAY）
- 日期：2026-09-12
- 结论：**EXPANDED — PASS**
- 新增：`content/guides/costume-stats-and-character-unlocks-guide.md`（1,329 词）
- 修订：`content/guides/costumes-guide.md`（事实纠错）、`content/home-content.md`（导航登记 1 行）

---

## 一、选题路径（两条并行，按 9/12 新规则）

### 路径① complaint-driven（抱怨驱动）

采集范围：Steam 评测 API（`appreviews/2436940`，英文，`filter=recent` 100 条 + `filter=negative` 67 条，窗口 60/180 天）、Steam 商店页新闻区（含官方 1.0.31 / 1.0.33 全文）、WebSearch 覆盖 Reddit / Steam 讨论区 / 媒体。

Reddit：**维度缺失，如实记录**。`site:reddit.com Sephiria` 与 `TEAM HORAY` 均零结果，未找到活跃 subreddit；未编造任何 Reddit 内容。`opencli reddit` 通道故障沿用既往记录，未使用。

高频抱怨逐条映射后**全部落在既有页面上**（与 9/7–9/9 结论一致）：

| 抱怨主题 | 源数 | 既有覆盖 | 判定 |
|---|---|---|---|
| 联机 server-side 命中 / 高 ping / 延迟制 netcode | ≥6（8/11 101 赞、9/6、8/5、8/13、8/10、8/11） | multiplayer-connection-fix-guide | 已覆盖 |
| 掉线无法重连 / 无 reconnect 按钮 | ≥4（8/11、5/19、9/10、8/14） | multiplayer-connection-fix + coop-freeze-recovery | 已覆盖 |
| 崩溃丢档 / 存档损坏 | ≥3（9/11、8/11、8/7） | save-file-guide | 已覆盖 |
| 弹幕海不可读 / 终局 DPS 检查 | ≥6 | chapter-6-final-boss / boss / hard-mode / endgame | 已覆盖（9/5 判自噬） |
| evasion 必选 meta | ≥5 | builds-guide + 泛化批评，i-frame 无数值来源 | 已覆盖 / 编造风险 |
| 硬模式锁元进度、需逐级通关 | 2（9/9、8/25） | hard-mode-guide | 已覆盖 |
| 控制器失效 / UI 闪烁 | 2（8/6） | controls-settings + controller-casting-keybind-fix | 已覆盖 |

**抱怨收敛 ≠ 无缺口** → 按新规则切路径②。

### 路径② system-inventory-driven（官方系统清单驱动）— 本轮命中

官方口径来源（GitHub 上的 Steam 商店页 `game_area_description` 与官方公告正文，均为一手来源；`store.steampowered.com/api/appdetails` 与 `api.steampowered.com` 本机 ECONNREFUSED，改用商店页 HTML 内嵌的官方公告 JSON，取到 1.0.31 与 1.0.33 全文）。

官方明说的系统清单 vs 站内 36 篇覆盖：

| 官方明说的系统 | 出处 | 站内覆盖 |
|---|---|---|
| Artifacts + Tablets 背包网格 | 商店页 Features | ✅ artifacts / tablets |
| 6 武器 × 各 50+ 升级 | 商店页 Features | 🟡 weapons-guide 提了，升级系统本身无专页（材料名不可验，见下） |
| 60+ 敌人 / 10+ Boss / 6 章 | 商店页 Features | ✅ boss / chapter |
| 4 人联机（trade items / revive） | 商店页 Features | ✅ coop / multiplayer-connection-fix |
| Talents | 商店页 About | ✅ talents-guide |
| Steam Achievements（27） | 商店页分类 | ✅ endgame-guide |
| Steam Cloud | 商店页分类 | ✅ save-file-guide |
| **Costumes（官方公告独立章节，且写明 "costume effect"）** | 官方 1.0.31 + 1.0.33 公告 | ❌ **站内唯一一页声称"纯外观、无数值"，与官方措辞矛盾，且零条具体服装数据** |

**命中项 = Costumes。** 官方公告把 Costumes 作为与 Weapons / Artifacts / Bosses / Multiplayer 并列的独立系统章节；站内 `costumes-guide.md` 却写 "Costumes ... are **cosmetic**"、"Cosmetics have **no gameplay effect**"，且全文未出现任何一套服装的名字或数值。这是官方明说有、站内整块写错+空白的系统。

四条件核验：

1. **高频 ≥3 独立来源** ✅ — Official 1（官方 1.0.33 公告 "the costume effect" 措辞）+ Community 2（Steam 评测 8/7 七赞"costumes are set at a bonus, but they have huge downsides"、8/24 ~80 小时未解锁蝙蝠服装；Steam 社区指南 id 3461710959）+ Editorial 4（ProdigyGamers 8/6、Last Word on Gaming 8/6、All Things How、Destructoid；交叉核对 DVG 转载 Ali213 8/13 的 27 套全表）。
2. **具体** ✅ — "每套服装的数值是什么 / 隐藏服装怎么解锁 / 该选哪套" 是能写成一篇文章的具体问题。
3. **缺口** ✅ — 先 `ls content/guides/` 列全 37 slug，再 grep `costume|cosmetic|cosmetics` 全文查重：站内仅 costumes-guide 一页，0 条服装名、0 条数值、0 条解锁条件，且结论错误。新页搜索意图为"选哪套 / 怎么解锁"，与既有页"解锁机制怎么分类"不同，不自噬。
4. **可溯源** ✅ — 见 sources 三层标注；分歧处一律标注，未挑单方下结论。

### 未采纳的待触发选题（如实记录）

- **武器升级材料刷取（Copper / Luminous / Apex）**：**触发条件仍未满足，继续不写**。复检结果：`"Sephiria" "Tower Copper"` 独立搜索**零结果**；三语（en / zh-tw / ko）同名文章全部来自 **xmodhub 同源**，且该源自身中英版本对 tablet 名不一致（英文 Thief's Satchel / Greed Tablet，其他语言作 Scavenger / Fortune）；另有 9/9 已记录的 tier 命名冲突（Lunar vs Luminous）。中文侧关于"武器铁砧 / 附魔祭坛"的说法来自 9game / 豌豆荚内容农场，与英文侧的"村庄铁匠铺永久升级"描述**互斥**，属不可验。按 9/9 同一标准（单源 + 命名冲突 = 不可验）判不写。
- **1.0.33 更新**：官方公告已核（2026-09-11 12:45 UTC 发布），但内容量极小（1 个 Boss 弹幕修正、Meteorite Pauldrons 修复、Master's Tsuba 数值改百分比、Heidi 文案、Scholar Lizard 服装修复、UI 文案、训练场弹窗修复），写不成 800 词，未单独成篇。
- **联机开局门槛（"host 主线进度高于你" 无法加入 / Mysterious Door 未出现）**：有真实玩家声音（Steam 评测 8/10、8/15），但独立来源 <3，且与既有 multiplayer-connection-fix-guide 同题族，未写。

---

## 二、QA quick 结果

### 2.1 虚构检测（逐个游戏特有名词独立 WebSearch 核验）

| 名词 | 核验结果 | 判定 |
|---|---|---|
| **Scholar Lizard**（新页引用） | 官方 1.0.33 公告 Costumes 章节原文命中 | ✅ 官方确认 |
| **"the costume effect"**（新页核心论点） | 官方 1.0.33 公告原文逐字命中 | ✅ 官方确认 |
| **Wing-Eared Rabbit / Blessing Grimoire** | ProdigyGamers + Last Word on Gaming 双源一致 | ✅ |
| **Brown Rabbit / Braided Hair Rabbit** | ProdigyGamers + All Things How + Last Word on Gaming 三源数值完全一致 | ✅ |
| **Wingless Bat / Blood Donation event ×5** | Destructoid + All Things How + Last Word on Gaming 三源一致 | ✅ |
| **Frog（闪电 50）/ Red-Clothed Cat（火焰 50）/ Red Fox（单局 10 石板）/ Ghost（单局 5 魔典）/ Otter（175% 暴击伤害）** | Last Word on Gaming + All Things How + ProdigyGamers + DVG(Ali213) 至少 2 源一致 | ✅ |
| **Pillager Leader "Rataka"** | ⚠️ **QA 抓到命名冲突**：英文侧（Destructoid）作 Rataka，韩文社区 wiki（en.namu.wiki/w/세피리아/보스）作 **"Lataka"（Marauder leader）**；R/L 罗马化歧义 | 🔧 **已修**：正文改为"the Chapter 1 pillager leader … spelled Rataka in the English guides and Lataka on the Korean wiki **[Unconfirmed]**"，并写入 sources 说明 |
| **Skeleton 效果** | 各源互斥（ProdigyGamers：两次 60% 复活 / All Things How：Max HP 固定 50 / DVG：开局携带诅咒石板） | 🔧 正文标 **[Unconfirmed]**，不挑单方 |
| **White Rabbit 数值** | ⚠️ 英中两表**完全不同**（英：+10 Barter / −5% Evasion；中：特殊攻击 +12% / 最大 MP +8 / 闪避 −15） | 🔧 正文单列"Watch out for three rows"说明分歧，标 **[Unconfirmed]** |
| **服装总数** | 英文侧点名 19 套，中文侧称 27 套（含 Crocodile / Deer / Eagle / Lucky Fairy / Farmer Squirrel / Forest Cat / Turtle，其中 Scholar Lizard 已获官方背书） | 🔧 正文写"treat any specific total as approximate"，并声明以游戏内衣柜为准 |

未发现无来源的名词或数值。所有分歧均已显式标注，未做单源断言。

### 2.2 残留扫描

| 检查项 | 命令 | 结果 |
|---|---|---|
| 他站游戏名残留（20+ 站名 + NACON） | `grep -rniE "SpiritVale\|Witchspire\|Mistfall\|Aincrad\|The Mound\|Tears of Metal\|Grain Rot\|…" content/` | ✅ Clean（exit 1，零命中） |
| Hugo shortcodes / 模板描述残留 | `grep -rniE "\{\{<\|\{\{%\|cooperative PvE extraction\|survive the horrors of the cursed jungle" content/` | ✅ Clean |
| app / components / lib 层残留 | 同上 pattern 扫 `app/ components/ lib/` | ✅ Clean |
| JSON-LD 域名 | `grep -oE "https?://[a-z0-9.-]+" lib/schema.ts` | ✅ 仅 `schema.org` 与 `store.steampowered.com`（官方商店，正确） |
| 站点身份 | `lib/seo-config.ts` | ✅ `Sephiria Wiki` / Sephiria 描述，无他站串味 |

### 2.3 内链有效性（历史线上 404 教训项）

脚本全量校验 `content/guides/*.md` + `content/home-content.md`：解析 `related:` 数组与正文 `](/guides/…)` 链接，对照实际 slug 集合。

- 结果：**BROKEN: none** — 新页 8 个 related slug 与正文 7 条内链全部真实存在。
- 新页 related：`costumes-guide, builds-guide, beginner-guide, talents-guide, artifacts-guide, full-release-guide, hard-mode-guide, endgame-guide`（均为站内真实 slug）。
- 反向链接已建立：`costumes-guide`（related + 正文 3 处）、`home-content.md` 导航表 1 行。

### 2.4 事实一致性（与站内其他页面不矛盾）

- **发现并修复一处站内事实错误**：`costumes-guide.md` 原文声称服装"纯外观、无数值"，与官方 1.0.33 公告 "the costume effect" 措辞及 4 家独立英文指南**直接矛盾**。若不修，新页上线即与站内既有页互斥 → 按 QA 规则为 🔴 阻断项。
- **修复方式（同站内、最小改动）**：改写该页 title/description/正文首段/FAQ 首问/"值得刷"段，并加上指向新页的内链；slug 未改（避免线上 404），仅 1 处入站链接（home-content.md）不受影响。`updated` 改 `2026-09-12`。
- 版本号核验：新页不主张具体游戏版本号；仅引用官方 1.0.31（2026-09-10）与 1.0.33（2026-09-11）公告日期，与 `patch-1-0-31-build-changes-guide.md`（updated 2026-09-11）一致，无冲突。
- `patch-1-0-31-build-changes-guide.md` 已写 "weapon upgrades are permanent meta-progression … at the blacksmith in the tower-top village"，新页"村庄换装"与之一致（同场景），无矛盾。

---

## 三、部署与线上验证（证据链）

- 部署命令：`./deploy-wiki-site.sh sephiriawiki` → exit 0
- 新部署 URL：`https://sephiriawiki-lg6qsdypr-zhaoq0103s-projects.vercel.app`
- **生产 alias 指向本次新部署**（不只查首页 200）：
  `vercel inspect sephiriawiki.vercel.app` → `> Fetched deployment "sephiriawiki-lg6qsdypr-zhaoq0103s-projects.vercel.app"`，`target production`，`status ● Ready`，created Sat Sep 12 2026 05:17:16 +0800；Aliases 段列出 `https://sephiriawiki.vercel.app`。✅

线上验证（生产域）：

| 检查 | 结果 |
|---|---|
| `/guides/costume-stats-and-character-unlocks-guide` | **HTTP 200**，70,848 bytes |
| 正文特征串命中 | `Costume Stats` ×3、`Scholar Lizard` ×2、`Wing-Eared Rabbit` ×5、`Brown Rabbit` ×4、`pillager leader` ×2、`Lataka` ×2、`Unconfirmed` ×3 |
| `/guides/costumes-guide`（修订页） | **HTTP 200**，含 `not cosmetic`，并含指向新页的内链 ×3 |
| `sitemap.xml` | 200；共 45 条 URL = 8 静态 + **37 篇攻略**，与 `content/guides/*.md` 实际 37 个文件一致；新 slug 已收录 |

> 注：部署专属 URL（`*-lg6qsdypr-…`）返回 302 属 Vercel Deployment Protection 正常行为，canonical 生产域为 200。

---

## 四、变更文件清单

| 文件 | 变更 |
|---|---|
| `sephiriawiki/content/guides/costume-stats-and-character-unlocks-guide.md` | 新增（1,329 词） |
| `sephiriawiki/content/guides/costumes-guide.md` | 事实纠错（去"纯外观"错误结论）+ 加新页内链 + updated → 2026-09-12 |
| `sephiriawiki/content/home-content.md` | 导航表新增 1 行 |

未触碰 `sephiriawiki/` 以外任何站点目录；未改 `.agent/expand-daily.json`、`.agent/build-history.json`、`STATS-游戏站点统计.md`；未 `git add/commit/push`；未使用 `npm`。

---

## 五、遗留与建议

1. **`costumes-guide.md` 的解锁分类表仍偏推测性**（"Story progress / Run milestones / Challenge modes" 等分桶无逐条来源）。本轮只修了与官方措辞直接冲突的部分，未重写整页。建议后续派内容合规审计员按证据逐条核，或将其降级为指向新页的索引页。
2. **武器升级材料题的触发条件依然未满足**（Copper / Luminous / Apex 仍为单源 + 命名冲突）。下次触发条件不变：出现 ≥2 独立来源、命名一致，或官方公告直接命名材料。
3. **官方 1.0.33 已发布但站内无覆盖**（`patch-1-0-31-build-changes-guide.md` 停在 1.0.31）。1.0.33 内容量不足以单独成篇，但站内 patch 页存在"落后一个版本"的观感。建议主 Agent 决策：是否将 1.0.32/1.0.33 以简短附注追加进现有 1.0.31 页并更新 `updated`。
4. **官方公告通道备忘**：本机 `api.steampowered.com` 与 `store.steampowered.com/api/appdetails` 直连失败（ECONNREFUSED / HTTP 000），但 `store.steampowered.com/app/2436940/` 商店页**重试后 200**，且其 HTML 内嵌官方公告 JSON，可一次取到 1.0.31 + 1.0.33 全文。此路径可作为后续 sephiriawiki 采集的稳定一手入口。
5. **Reddit 维度连续多轮缺失**，本次仍未找到活跃 subreddit，已在报告中如实记录，未编造。
