# GRAIN ROT 内容扩充记录 — 9/17

> 模式: expand-feedback | 站点: grainrotwiki | 游戏: Grain Rot (Steam app 4450620, demo app 4731790, 1.0 = 2026-08-07)
> 角色: 玩家反馈分析师 + 建站协调员 + QA 自查 | 日期: 2026-09-17
> 结果: ✅ **PRODUCED** — 新增 `spark-mode-guide`（站内 0 覆盖的死亡/夺舍恢复簇）

---

## 一、采集通道实测（逐通道实测，未沿用旧结论）

| 通道 | 本轮实测 | 结果 |
|------|---------|------|
| **官方公告 API** `ISteamNews/GetNewsForApp?appid=4450620` | `HTTP=200`，**22 条**全文（`maxlength=0` 取正文） | ✅ **直连成功** —— 本轮最关键的一手通道 |
| **demo appid 4731790 公告流** | `HTTP=200`，**0 条** | ✅ 已查（多 appid 规则）—— 证明 22 条即**全部**官方语料，非假零命中 |
| **官方公告 hub 页面** `store.steampowered.com/news/app/4450620` | `HTTP=200 bytes=167343`；`Patch 1.01`–`1.09` 全部命中 | ✅ 与 API 互证 |
| **Steam 商店页** `store.steampowered.com/api/appdetails?appids=4450620` | `HTTP=200`，Features / about_the_game / categories 全取 | ✅ |
| **Steam 评测 API** `appreviews/4450620?json=1`（带 `json=1`） | cursor 翻页 13 页，**1,199 条去重英文评测**（= 该 app 英文池 100%），负面 **134 条** | ✅ 社区一手来源 |
| `steamcommunity.com`（讨论区/评测页） | 6 次尝试、6 个不同 IP 全部 `HTTP=000`（TCP 层超时）；`r.jina.ai` 代理亦超时 | ❌ 不可用（与 9/16 一致） |
| WebSearch | 可用；命中 2UpSkill 等站，但**内容存疑**（见 §五 编造防线） | ⚠️ 仅作补充 |

**采集声明**：Steam 讨论区本轮**仍不可用**（6 IP 全 `000`），已重试并如实记录，**未编造任何讨论区内容**。社区维度以 Steam 评测 API 全量 1,199 条为准（覆盖度 100%）。

---

## 二、版本史核验结论（本轮重新直连核验，未沿用前轮结论）

**最新版本 = Patch 1.09，2026-08-28。截至 2026-09-17 无 1.10、无 9 月 Deep Layers Update。**

| 来源 | 层级 | 取到的版本跨度 |
|------|------|---------------|
| **ISteamNews API appid 4450620**（本轮直连） | 官方一手 | **1.01–1.09** 全量正文（22 条） |
| **vgspoilers.com/game/grain-rot/patches**（本轮实测 `HTTP=200`） | 独立二手 | **1.01–1.09**（已追平，非滞后） |
| **player.gg/explore/games/400575-grain-rot**（本轮实测 `HTTP=200`） | 独立二手 | **1.01–1.09**（已追平） |

**结论**：**前几轮「v1.08/v1.09 可溯源但不可采信」的判断在本轮失效** —— 前轮的依据是「仅 pc6 单一转载站」，而本轮官方 API 直连取到 **Patch 1.08 / 1.09 逐字正文**，且两个独立聚合站**已双双追平到 1.09**。三方**无互斥陈述**，一致。

- **无冲突**（按修正后的判据：只有两个来源对**同一事实**给出互斥陈述才算冲突；此处不存在）
- 官方路线图 9 月「Deep Layers Update」（1 新 biome + 若干新敌人）**截至 9/17 未上线** → **不得写成已发售事实**

**⚠️ 关键判断：版本史「已可采信」≠「可写新选题」。** 站内 `patch-notes-guide`（9/11 更新）**已完整覆盖 1.01–1.09**，含 1.08 的 Boing/7 constructs/small Vessel 携带、1.09 的 compass 重置。**再写一篇补丁/版本页 = 直接自噬**。故本轮把新核验到的官方正文**降格为「证据锚点」**，用于支撑反馈驱动的选题，而非当作选题本身。

---

## 三、选题：两条路径均跑完

### 路径① complaint-driven：✅ **命中**

对 1,199 条英文评测（负面 134 条）做主题聚类（正则命中，负面 / 全部）：

| 抱怨簇 | 负面 | 全部 | 站内覆盖判定 |
|--------|:---:|:---:|------|
| **Spark 模式 / 夺舍 / 死亡恢复** | **12** | **52** | ❌ **无任何页面拥有此主题**（仅 6 页各有一段 1–3 句提及） |
| 难度/平衡/一击必杀 | 44 | 273 | ✅ `hard-mode-guide` / `survive-enemy-chase-guide` |
| 内容不足 / 像 EA / 三楼锁着 | 58 | 406 | ✅ `third-floor-locked-guide`（9/16 新增）/ `endgame-survival` |
| 无匹配/服务浏览器 | 10 | 37 | ✅ `multiplayer-matchmaking-guide`（1.07 已含） |
| 电梯内死亡 / 出口窗口 | 5 | 17 | ⚠️ 部分（`extraction-guide` 只讲路线与团队，明确声明电梯机制未证实） |
| 无地图 / 迷路 | 4 | 12 | ⚠️ 部分（`extraction-guide` 的「Know the Way Back」已覆盖） |
| 工具耐久掉太快 | 4 | 8 | ⚠️ 数值无来源 → 编造风险，否决 |
| 存档/进度丢失 | 3 | 7 | ⚠️ 3 条独立来源，但样本偏薄 + 与崩溃页重叠，本轮不取 |

**选定簇：Spark 模式（死亡→夺舍→恢复）。** 理由：
1. **频率最高**的**未覆盖**簇（12 负面 / 52 全部，8 条具名独立评测）
2. 是游戏的**招牌机制**，且玩家**明确抱怨「游戏内没解释」**——最典型的搜索意图缺口
3. 有 **1.08/1.09 官方正文**做硬锚点（small Vessel 携带 1 件、uncontrolled character 物品 bug）
4. 与 `weapons-tools-guide` 的「construct 名称未验证」编辑准则**无冲突**（本页不写任何 construct 名）

### 路径② system-inventory-driven：❌ 未命中

逐条核对商店页 Features × 站内覆盖：Possess and swap / Co-op extraction / Tactical carpentry / Procedural dungeons / Persistent Outpost / Cursed emotes / Rescue survivors / Body corruption / Questionable cosmetics —— **九项全部已有页面覆盖**（`weapons-tools`、`co-op`、`outpost-decoration-stats`、`all-biomes`、`outpost-upgrade`、`rot-debuff` 等）。无「官方明说有、站内整块没写」的空白。**路径②本轮无产出，已如实记录。**

### 四条件校验（选定簇）

| 条件 | 核验 |
|------|------|
| ① 高频 ≥3 独立来源 | ✅ **8 条具名独立 Steam 评测**（见 §四） |
| ② 具体 | ✅「vessel 破掉之后到底发生什么、怎么回到身体里」 |
| ③ 站内未覆盖 | ✅ 无页面拥有该主题（已 grep 全部 33 篇标题+正文，见 §五） |
| ④ 可溯源不编造 | ✅ 官方正文逐字引用 + 评测 recommendation id 可回溯；所有社区断言标 `[Unconfirmed]` |

---

## 四、依据来源清单（全部可追溯）

### 官方（一手，本轮直连取回）
| 来源 | 逐字原文 | 用途 |
|------|---------|------|
| 商店页 about_the_game | "When your vessel breaks, you stay in the run as a Spark. Guide your team through the dark and search for another host with a new set of abilities. Force your way back in before you fade out completely." | 三态模型核心 |
| 商店页 about_the_game | "You are a Living Spark surviving inside fragile wooden vessels that splinter, collapse, and catch fire. When your vessel breaks, the Spark escapes. Death is just a change of scenery." | 前提 |
| 商店页 Features | "Possess and swap between fragile wooden vessels" | 机制确认 |
| 商店页 about_the_game | "If everyone breaks, your loot is lost." | 团队级损失条件 |
| **Patch 1.08**（2026-08-26） | "Added a new small Vessel named **Boing**." / "**Small Vessels can now carry and hold up to one item.**" / "Fixed a bug where the player could change eyes and badges on small vessels." | 备胎身体可携带 1 件 |
| **Patch 1.09**（2026-08-28） | "Fixed a bug where items saved on an **uncontrolled character** would end up floating in the air." | 官方确认「非当前操控角色」可存物 |

### 社区（Steam 评测，按 recommendation id 可回溯）
| recommendation id | 时长 | 引述 |
|---|--:|---|
| 232668015 | 1,367 h | "spark glow runs out to fast so you cannot get in to another body on the map" |
| 232477767 | 204 h | "Glow doesn't last long enough" / "barely any bodies on each level and none can actually collect things" |
| 232922050 | 387 h | "when left as sparks… there is no way to win the game" / "should be allowed to pick up fuses and money" |
| 234119603 | 214 h | "there are no robot bodies that are useful" |
| 234558485 | 667 h | "Losing all the resources in the pocket of your idle (not currently possessed) robots in the elevator" |
| 233394895 | 2,657 h | "no real explanation about like going into spark mode" |

**来源数：官方 6 条 + 社区 6 条具名评测（8 处独立引述）** —— 远超 ≥3 独立来源门槛。

---

## 五、编造防线（本轮主动排除的雷）

1. **2UpSkill 等站的 vessel 名当虚构处理**：WebSearch 命中 `2upskill.com` 的 "All Vessel Types" 页，给出 **Scrapper / Vanguard / Tinderbox / Echo**、**Radiance Bound**、**Scrappy Dash / Iron Bastion / Acoustic Decoy / Sonar Ping**。这些**在官方 22 篇公告 + 1,199 条评测中均 0 命中**，且站内 `best-vessels-guide` 早已声明「任何具名 vessel 榜单都是编造」。→ **本页一律不写任何 vessel/技能名**，只用官方确认的 "small Vessel" 与 "Boing"（后者有 1.08 官方原文）。
2. **fade 窗口时长**：官方仅确认窗口存在且会关闭，**从未公布秒数**。社区两条独立反馈均称「太短」。→ 写为 `[Unconfirmed — player-reported]`，**明确声明不编造数字**。
3. **Spark 能否拾取物品**：**无官方文档**，仅 2 条评测称不行。→ 全程 `[Unconfirmed]`，且写明是「玩家报告」而非「机制」。
4. **「glow」一词**：官方用 "fade out completely"，"glow/orange light" 是玩家用语。→ 两者区分呈现，不把 glow 写成官方术语。
5. **1.08 与玩家抱怨的因果**：不得声称「官方为回应抱怨而改」。→ 文中明确写 "Whether or not 1.08 was aimed at that complaint — the developer has not said"。
6. **不写任何 construct 名** → 与 `weapons-tools-guide` 编辑准则零冲突。

---

## 六、自噬查重（写作前逐条比对 33 篇）

grep 全站 `spark` / `glow` / `possess` / `fade out` / `vessel` 命中后逐处读上下文：

| 既有页 | 已有内容 | 本页如何避让 |
|--------|---------|-------------|
| `game-mechanics-systems-guide` | §Vessel Possession **1 段**（纯商店页事实） | 本页不重复机制介绍，做**操作层**（怎么恢复） |
| `survive-enemy-chase-guide` | §3「Spend the vessel, not the run」= 把死亡当**逃跑战术** | 本页 Scope note 明确让其拥有「用身体换命」 |
| `best-vessels-guide` | 备胎身体的**选型** | 本页 Scope note 交出「选哪具身体」 |
| `tips-and-tricks` | 「The Sacrificial Body」**2 句** | 本页不重复牺牲打法 |
| `extraction-guide` | 路线/团队/Keeper | 本页只讲「Spark 状态下的价值保全」 |
| `solo-guide` / `survival-tips` | 各 1 句提及 fade | 不重复 |

**处置**：新页加 **1 处 Scope note**，把三类相邻主题（逃跑战术 / 身体选型 / 撤离）显式指向对应页面；本轮**未**改动既有页面（单页扩充范围）。「可互换 intro」标准不触发——本页 intro 与上述任何一篇**不可互换**（本页是死亡后状态，其余三篇分别是逃跑、选型、撤离）。

---

## 七、产出与部署验证

| 项 | 值 |
|---|---|
| 文件 | `grainrotwiki/content/guides/spark-mode-guide.md` |
| slug | `spark-mode-guide` |
| 词数 | **1,523**（正文，不含 frontmatter；站内既有页中位数 1,198、最大 1,747） |
| 注册 | **未改 `lib/guides.ts`** —— 经确认 `getAllGuides()` 用 `fs.readdirSync` 扫描，无硬编码 slug 表（协调员 9/17 更正指令） |
| `pnpm install` | exit 0 |
| `pnpm build` | **exit 0**；`● /guides/spark-mode-guide` 已 SSG 预渲染（`.next/server/app/guides/spark-mode-guide.html` 63.1K） |
| 部署 | `./deploy-wiki-site.sh grainrotwiki` **exit 0**（按协调员更正指令，**未**裸跑 `vercel --prod`） |
| 新部署 URL | `https://grainrotwiki-m63lctjnb-zhaoq0103s-projects.vercel.app` |
| **alias 校验** | ✅ **`vercel inspect grainrotwiki.vercel.app` → 该 alias 指向 `grainrotwiki-m63lctjnb-zhaoq0103s-projects.vercel.app`，与本次新部署 URL 逐字一致**（脚本内 grep 未取到 alias 显示「未知」，故人工补验） |
| 线上验证（`curl --resolve grainrotwiki.vercel.app:443:64.29.17.3`） | `/guides/spark-mode-guide` → **HTTP 200 / 64,919 bytes** |
| 内容级验证 | 页面含唯一串 `Spark Mode Guide` + `body census`；三档来源标签渲染（Official×16 / Community×6 / Editorial×4）；`[Unconfirmed]` 9 处 |
| 收录验证 | `/guides` 索引 **34 条**（33+1，含 `spark-mode-guide`）；`sitemap.xml` 含该 slug |
| Residue 扫描 | ✅ Clean（0 命中：`{{<` / 他站游戏名 / 他站域名 / `待确认`） |

---

## 八、待人工处理事项

1. **`/guides` 索引页未做「最新」置顶确认** —— 首页/索引排序依赖 `updated` 字段（本页 2026-09-17 为最新），已确认链接存在，未逐位核对排序位置。
2. **Steam 讨论区通道持续不可用**（本机 DNS 对 `steamcommunity.com` 投毒，6 IP 全 `000`）。这是**环境问题非游戏问题**，建议人工确认是否需要在 hosts 固定可达 IP，否则后续所有站的讨论区维度将持续缺失。
3. **privacy/terms 等站级页面未在本轮范围内**（单页扩充任务）。
4. **`patch-notes-guide` 的跨页链接**指向 `weapons-tools-guide`「compass 在 loadout 中的位置」，但该页**实际未写 compass**（悬空引用），属既有小瑕疵，本轮未动（超出单页范围），建议后续单独修。

---

## 九、SKIP 判定说明（本轮不适用，但记录判据）

本轮**未 SKIP**。若按前轮「v1.08/v1.09 不可采信 → 无新素材 → SKIP」的旧判据，本轮会误判 SKIP —— **这正是本轮最重要的规则闭环**：官方 API 直连成功即证伪了「不可采信」，且两个独立聚合站已追平 1.09。**但「版本史可采信」并未直接产出选题**，真正命中的是**反馈驱动**路径（Spark 模式簇），版本正文只作证据锚点。
