# GRAIN ROT 内容扩充记录 — 9/16

> 模式: expand-feedback | 站点: grainrotwiki | 游戏: Grain Rot (Beck & Branch Games / Neem Interactive, Steam app 4450620, demo app 4731790, 1.0 = 2026-08-07)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）| 日期: 2026-09-16
> 结果: ✅ **EXPANDED** — 新增 `third-floor-locked-guide`（站内 0 覆盖的 #1 抱怨簇）+ 4 页双向 Scope note。**两条选题路径均跑完，路径①命中。**

---

## 一、采集通道实测（逐通道实测，未沿用旧结论）

| 通道 | 本轮实测 | 结果 |
|------|---------|------|
| **官方 Steam 公告 hub** `store.steampowered.com/news/app/4450620` | `HTTP=200 size=167341` | ✅ **直连成功**（9/11 起恢复，本轮延续）。内嵌 `announcement_body` JSON，22 条 event 的 `headline`+`posttime`+`body` 全文取到 |
| **官方商店页** `store.steampowered.com/app/4450620` | `HTTP=200 size=170058` | ✅ 完整 Features 块 + About This Game + 无障碍/控制器 JSON |
| **Steam 评测 API** `store.steampowered.com/appreviews/4450620` | `HTTP=200`，cursor 翻页 8 页 | ✅ **本轮新增的高价值一手通道**（9/11 只能取到检索索引的二手摘要）。合并去重 **850 条英文评测**，日期覆盖 2026-08-07 → 2026-09-15 |
| `steamcommunity.com`（讨论区/评测页） | 3 个 IP 全部 `HTTP=000`（`Connection timed out`，TCP 层不通） | ❌ 不可用（与 9/11 一致） |
| **Reddit** `www.reddit.com` 直连 | 换 3 个真实 IP（151.101.1.140/65.140/129.140）均 `HTTP=403` | ❌ 403 |
| **Reddit via agent-reach / OpenCLI** | `subreddit GRAINROT` → `TypeError: Failed to fetch`；`search` → `Pre-navigation to https://reddit.com failed: Navigation rejected`；`hot` → `TIMEOUT after 60s` | ❌ 三种命令全败（与 9/11 同因） |
| `r.jina.ai` 代理 | 连接失败 | ❌ |
| **Exa**（agent-reach 零配置搜索） | `mcporter` 报 `Unknown MCP server 'exa'` | ❌ 未配置 |
| WebSearch / WebFetch | 可用但不稳定（同一 query 两次结果一次空） | ⚠️ 仅作补充 |

**采集声明**：Reddit 维度本轮**仍不可用**（直连 403 + OpenCLI 三种命令全败），已如实记录，**未编造任何 Reddit 内容**。本轮把 Steam 评测 API 作为社区一手来源，取到 850 条带时间戳的评测原文——覆盖度**优于** 9/11 的检索索引路径。

---

## 二、官方源核实：最新版本号与内容

**最新版本 = Patch 1.09（2026-08-28）** —— 9/11 至 9/16 **无新补丁**。官方 roadmap 里规划的 9 月「Deep Layers Update」（1 新 biome + 若干新敌人）**截至 9/16 仍未上线**。

本轮从官方 hub 逐字取到的关键原文（全部为最高可信一手源）：

| 来源 | 逐字原文 | 用途 |
|------|---------|------|
| 上线前公告 2026-07-14 | 1.0 内容清单含 **"Complete 1.0 Quest Flow"**、**"Second Floor of the Outpost"**、**"New Outpost NPCs"** | 官方**承诺**的 1.0 内容 |
| 路线图公告 2026-08-12 | **"The Halloween Update will open the third floor of the Outpost and introduce a new questline, amongst other visual updates to celebrate the season."** | 官方**确认三楼当前是关的**、且排在十月 |
| Patch 1.06（2026-08-11） | **"Fixed so Quill shouldn't catch fire on his patrol route outside the Outpost."** | Quill 是官方承认的 NPC |
| Patch 1.07（2026-08-12） | "Added a new hat that can be found in the Deep Layers." | 化妆品系统 |
| 商店页 Features（本轮直读） | 仅 **Single-player / Online Co-op / Family Sharing** 三项 | **无 Steam Cloud** 标识 |

### ⚠️ 一处需要小心的读法（本轮实测澄清）

商店页 HTML 里全文搜索 `Early Access` 只有 **1 处命中**，位于 `"early_access":true`。**该字段属于 appid 108600（Project Zomboid，出现在 "more like this" 推荐位），不是 Grain Rot。** Grain Rot 的商店页 `release_date` 字段为 **`7 Aug, 2026`**，**无 Early Access 标识**。→ 结论：**Grain Rot 确非 EA 发行**，这正是玩家争议的焦点（"标 1.0 却像 EA"）。

---

## 三、两条选题路径 —— 均跑完

### 路径① complaint-driven：✅ **命中**

对 850 条评测做主题聚类（正则命中数，负面 117 条 / 全部 850 条）：

| 抱怨簇 | 负面命中 | 全部命中 | 站内是否已覆盖 |
|--------|:---:|:---:|------|
| **"标 1.0 却像 EA" / 任务线断掉 / 三楼锁着** | **35** | **97** | ❌ **整块未覆盖**（见 §四） |
| 内容量不足 | 29 | 147 | ⚠️ 部分（full-release-guide / price-editions） |
| 任务/剧情结束得突兀 | 18 | 92 | ❌ 并入上一行 |
| 房间装饰/等级 | 17 | 162 | ✅ `outpost-decoration-stats-guide`（9/13） |
| 太简单/难度 | 14 | 62 | ✅ `solo-guide` / `hard-mode-guide` |
| 价格 | 13 | 99 | ✅ `price-editions-guide` |
| 电梯/保险丝 | 10 | 51 | ✅ `elevator-modifiers-fuse-guide`（9/12） |
| 十月/三楼 | 10 | 19 | ❌ 并入第一行 |
| 匹配/大厅 | 9 | 38 | ✅ `multiplayer-matchmaking-guide`（9/11 校准） |
| 画面降级 | 9 | 54 | ❌ 但**仅 1 条实质指控**（13 赞，8/22），不足 ≥3 |
| 优化/性能 | 7 | 30 | ✅ `performance-lag-fix-guide` |
| 存档丢失 | 5 | 25 | ❌ 但分散且无一致具体问题 |
| Steam Cloud | **1** | **1** | ❌ 频率不足（见下） |

**本轮被否决的具体候选（含实测证据）**：

| 候选 | 否决理由 |
|------|---------|
| **Steam Cloud 存档缺失** | 全 850 条评测中**仅 1 条**提及（9/13，0 赞）。官方商店页 Features 确无 Steam Cloud 标识（可作官方旁证）→ **频率不足 ≥3 独立来源，否决**。若后续出现第 2、3 条再立题 |
| **画面降级 / "ripples like water"** | 仅 **1 条实质指控**（13 赞，8/22："They changed the graphics recently which greatly reduced how good it looks"）。其余 53 条命中全是正面称赞画面 → **否决**（1 条 ≠ 高频） |
| **工具/武器耐久细则** | 任务书红线：与 `weapons-tools-guide` 的「construct 名称未验证」编辑准则冲突 → 写细则 = 编造风险，**MUST NOT** |
| **符号含义题** | 已被 `rot-debuff-guide` 覆盖（含同串引用）→ 再写 = 自噬 |
| **敌人无限追猎 / 软锁仇恨** | 高频但已被 `survive-enemy-chase-guide`（11.9K）+ `all-enemies-guide` 覆盖 |
| **Boss 刷新不稳定** | 仅 1 条（3 赞）；官方仅 Patch 1.02 一行 "a mesh related to a boss in the deep layers could appear at the outpost" → 无数据可写 |
| **Emotes / 幸存者 / 化妆品专篇（路径②候选）** | 站内均**有** pass-through 覆盖（co-op-guide 引官方 "rage-bait your friends with cursed emotes"；outpost-upgrade-guide §3 写 Rescued Survivors）。官方对这三者**只给一句宣传语、无机制细节** → 独立成篇必靠推断 = 编造。**否决** |

### 路径② system-inventory-driven：✅ 已跑（未命中更优，但产出两条边缘发现）

官方商店页 FEATURES 清单 × 站内 slug 覆盖比对：

| 官方明说的系统 | 站内覆盖 | 判定 |
|---------------|---------|------|
| Possess and swap between fragile wooden vessels | `best-vessels-guide` | ✅ |
| Co-op extraction horror with physics-driven chaos | `co-op-guide` | ✅ |
| Tactical carpentry with interactive furniture | `outpost-decoration-stats-guide` | ✅ |
| Procedurally shifting underground dungeons | `all-biomes-guide` | ✅ |
| Persistent Outpost rebuilding and progression | `outpost-upgrade-guide` | ✅ |
| Rage-bait your friends with cursed emotes | 仅 pass-through 引用，无专篇 | ⚠️ 官方无细节 → 不可写 |
| Rescue survivors trapped in the Deep Layers | `outpost-upgrade-guide` §3 有专节 | ⚠️ 官方无细节 → 不可写 |
| Body corruption and mutation systems | `rot-debuff-guide` / `game-mechanics-systems-guide` | ✅ |
| Questionable cosmetics | 多处提及，无专篇 | ⚠️ 官方无细节 → 不可写 |

**路径②的净产出**：官方商店页 Features 只有 3 项（Single-player / Online Co-op / Family Sharing），**无 Steam Cloud**——成为「Steam Cloud 缺失」候选的官方旁证；但该候选频率不足，故最终由路径①命中。

---

## 四、查重：现有 32 slug 全比对 → 确认真缺口

现有 32 篇（本轮前）：all-biomes / all-enemies / beginner / best-vessels / co-op / controller / crafting-resources / demo / elevator-modifiers-fuse / endgame-survival / events-timed-content / extraction / full-release / game-mechanics-systems / hard-mode / multiplayer-matchmaking / outpost-decoration-stats / outpost-upgrade / patch-notes / performance-lag-fix / player-count / price-editions / release-date-faq / rot-debuff / solo / stealth-sound / survival-tips / survive-enemy-chase / system-requirements / tips-and-tricks / weapons-tools / weather-system。

**全站 grep `third floor` / `3rd floor` / `3rd level` → 唯一命中是 `patch-notes-guide.md:109` 的 roadmap 表格一格**（"October | The Halloween Update — opens the third floor of the Outpost"）。

即：**「三楼为什么锁着 / 剧情在哪里断掉 / 任务为什么没了」这个 #1 抱怨簇，站内整块没有答案**——patch-notes 只把它当路线图一格，full-release-guide 只写 1.0 加了「Second Floor」，release-date-faq 的 "Is there a story?" 只答"未详细说明"。**确认真缺口。**

---

## 五、选题：✅ 命中（路径①）

**选题：`third-floor-locked-guide`**
**标题：Why Is the Third Floor Locked in Grain Rot? Where the Story Ends Right Now**

三项条件同时满足：

1. **高频（≥3 独立来源）**——远超阈值，共 8 条独立玩家报告（全部保留 permalink）：

| # | 赞 | 日期 | 原话 |
|:--:|:--:|------|------|
| 1 | 160 | 2026-08-11 | "you get to a certain quest in the game, and the quests just stop, even though there is clearly a 3rd floor to the game that has yet to be unlocked" |
| 2 | 70 | 2026-08-20 | 需要 "google about the story & 3rd floor still being closed in a finished product" |
| 3 | 62 | 2026-08-16 | "had to go to the discord to figure out why I couldnt unlock certain parts of the base and why I couldnt progress the story line" |
| 4 | 28 | 2026-08-07 | "There is a 3rd floor in the house but as of now there is no way to find a key to unlock it" |
| 5 | 15 | 2026-09-01 | "after a certain point the quests stop" |
| 6 | 15 | 2026-08-21 | "u unlock the 2nd floor and the game just comes full stop shortly after unlocking it" |
| 7 | 3 | 2026-08-12 | "The final quest ends on a call to action dialogue implying there's more to do and the third floor of the building is still locked." |
| 8 | 156 | 2026-08-10 | "under no obligation to continue development further"（EA 标签争议） |

2. **具体**——可写成"三楼能不能开 / 剧情在哪断 / 是不是 EA / 现在有多少内容"的问答型文章，命中真实搜索意图（`grain rot third floor locked`、`grain rot quests stopped`、`is grain rot early access`）。

3. **站内未覆盖**——见 §四 grep 证据。

**官方一手锚定**：核心事实（三楼关着、十月开）**逐字来自官方 roadmap**："The Halloween Update will open the third floor of the Outpost and introduce a new questline"。按 2026-09-12 裁定，官方对其自身内容是一手权威源，**无需第三方 corroborate**；超出官方原文的推断（如"剧情完成度 1/3"）已标 `[Unconfirmed]`。

---

## 六、本轮改动（全部在 `grainrotwiki/` 内）

**新增 1 篇**
- `content/guides/third-floor-locked-guide.md` — **1324 词**（去 URL/链接目标后计数，与站内既有篇 1384/1408/1453 同量级），问题导向标题，frontmatter 与站内既有指南一致（category `Game Info`、version `1.0`、updated `2026-09-16`）
  - **sources 三层**：Official ×3（商店页 / roadmap 公告 / 上线前公告+Patch 1.06/1.09）/ Community ×1（8 条评测，逐条带 permalink + 赞数 + 日期）/ Editorial ×1
  - 所有数字标来源或 `[Unconfirmed]`：内容量三个数字（3-4h、约 6h、35 个解锁物）**全部按玩家个人计数标注 [Unconfirmed]**
  - **逐字核验**：18 条关键引用/bullet 全部脚本比对通过（评测语料 + 官方 hub + 商店页），**0 条无源**

**双向 Scope note（防自噬，4 页）**
- `patch-notes-guide.md` — scope note 增加指向新页（明确区分「版本史」vs「内容终点」）
- `full-release-guide.md` — 新增 9/16 update 段：澄清 1.0 的 "Complete 1.0 Quest Flow" 是**上线任务链**而非完整剧情
- `outpost-upgrade-guide.md` — 「second Outpost floor」bullet 补三楼状态 + 链接
- `release-date-faq.md` — **事实修正**：FAQ "Is there a story?" 原文只写 "A narrative campaign, endings, or story modes have not been detailed."（暗示无剧情），改为如实陈述 1.0 有 "Complete 1.0 Quest Flow" 但**停在半途、三楼待十月**

**导航**
- `content/home-content.md` — Quick Navigation 新增一行（⚠️ **本轮发现该文件是孤儿文件，详见 §八.1**）

---

## 七、QA quick 结论

见 `.agent/qa-expand-grainrot-9-16.md`。**PASS**（🔴 0 / 🟡 2）。

| 检查项 | 结果 |
|--------|------|
| 残留扫描（他站游戏名 / Hugo shortcode / 模板短语 / 站级 IP） | ✅ Clean（含正对照验证扫描非空跑） |
| 编造检查（18 条引用逐条比对源语料） | ✅ 0 条无源 |
| 双向 Scope note | ✅ 4 页全部产物级验证 |
| 构建 | ✅ `✓ Compiled successfully`，46 页，新页 SSG 预渲染 |
| 线上验证 | ✅ 新页 HTTP 200 / 72,169 bytes；4 页校准页 HTTP 200 |

---

## 八、规则级发现（建议主 Agent 归档）

1. **`content/home-content.md` 是孤儿文件（本轮实测）** — 全站 `rg "home-content|homeContent"`（排除 node_modules/.next）**0 命中**，无任何代码读取它；首页导航实际来自 `app/page.tsx` 里硬编码的 `FEATURED_GUIDES` 数组。**9/11 与 9/13 两轮都改了该文件以为在更新导航，实际对线上零影响**（本轮产物级验证：首页 HTML 不含 "Quick Navigation" 字样）。→ 建议：要么把 `home-content.md` 接进首页渲染，要么在 03/04 Profile 里把它标注为「已废弃，导航改动请改 `app/page.tsx`」。
2. **Steam 评测 API 是本站被低估的一手社区源** — `store.steampowered.com/appreviews/{appid}?json=1&cursor=*` 支持 cursor 翻页，本轮取到 **850 条带时间戳评测原文**，在 `steamcommunity.com` 全域不通、Reddit 403 的情况下仍能完成 complaint-driven 分析。建议写入 18-Profile 采集规则（「Steam 讨论区不可达时，评测 API 是一手替代，MUST NOT 直接降级为『社区不可用』」）。
3. **聚合站的「轮子」字段要看清归属** — 商店页 HTML 里搜 `Early Access` 命中 1 处，实为推荐位里**另一个 appid** 的字段。教训：商店页是**多游戏混合页**（推荐位/捆绑包），全文 grep 官方字段 MUST 绑定 appid 上下文，否则会得出「Grain Rot 是 EA」的反向错误结论。
4. **Reddit 通路连续两轮（9/11、9/16）全败** — `agent-reach` OpenCLI 的 reddit 三命令（subreddit/search/hot）分别报 `Failed to fetch` / `Navigation rejected` / `TIMEOUT`，直连 403。建议主 Agent 排查浏览器登录态。

---

## 九、9/11 遗留项跟进

| 9/11 建议 | 9/16 状态 |
|-----------|----------|
| 9 月 Deep Layers Update 观察点 | ✅ 已复核：**截至 9/16 未上线**，官方 hub 最新仍是 Patch 1.09（8/28）。下次复核优先看 `rtime32` 是否出现 > 1787911681 的新 event |
| vgspoilers 滞后 | 未复核（本轮未使用聚合站，改走官方 hub + 评测 API 一手源） |
| 全站 `version: "1.0"` 版本戳语义 | 未改动（沿用 9/11 结论），仍待主 Agent 复核字段定义 |
| Reddit 采集通路排查 | ❌ 仍未修复（见 §八.4） |

---

## 十、自检
- 改动全部落在 `grainrotwiki/` 内 ✅；未串站 ✅；未编造 ✅；未 commit/push ✅
- 未修改 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md` ✅
- 未用 `npx vercel`（用全局 vercel 58.9.4）✅；未用 `npm install`（用 pnpm）✅；未用 `next/font/google` ✅
- 线上验证一律用 `--resolve` 指定真实 IP（`HTTP=000` 的 76.76.21.21 未计入 PASS）✅
- 采集约 24 次检索/抓取 ✅
