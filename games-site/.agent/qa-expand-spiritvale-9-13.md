# QA 报告 — spiritvalewiki 每日扩充（EXPAND-9/13-spiritvale）

> 日期：2026-09-13 ｜ 岗位：玩家反馈分析师(quick) → 建站协调员(expand) → QA 审核员(quick)
> 审查范围：本轮新增 1 文件 `spiritvalewiki/content/guides/ptr-test-server-guide.md`
> 结论：**PASS**（已部署，线上验证通过）｜🔴 0 ｜🟡 1（他页既有问题，已上报，未擅自修改）

---

## 0. 本轮产出概要

| 项 | 值 |
|---|---|
| slug | `ptr-test-server-guide` |
| title | SpiritVale PTR Guide — How to Join the Public Test Server and What's on It Now |
| 词数 | **1,316**（markdown 剥离后脚本实测；raw body 1,342）— 在 800–1500 红线内 |
| category / version / updated | Guides / EA / 2026-09-13 |
| sources 三层 | Official 4 / Editorial 3 |
| 站内攻略总数 | 42 → **43** |
| 内链 | 7 条正文 + 6 个 related，线上 7/7 = 200 |
| CJK 字符 | **0** |

**选题性质：系统缺口（官方公告系统清单 × 站内覆盖），非抱怨驱动。**

---

## 1. 反馈采集（玩家反馈分析师 quick）

### 1.1 通道可用性（今日实测）

| 通道 | 结果 |
|---|---|
| Steam appreviews — recent (english, 100) | ✅ HTTP 200 / 127,234 B |
| Steam appreviews — negative (english, 100) | ✅ HTTP 200 / 140,321 B |
| Steam ISteamNews GetNewsForApp (3767850) | ✅ HTTP 200 / 32,833 B |
| Reddit | ❌ 不可用（延续 9/12 状态）→ **如实记录为缺失，未编造任何 Reddit 内容** |
| Steam 讨论区 | ❌ ECONNREFUSED（延续） |
| WebFetch massivelyop.com / steamdb.info | ❌ **HTTP 403** → 按规则记「不可用」，其内容**未被当作已核实**，仅作索引级交叉参考并在页面 sources 中显式标注 |

样本：recent 100 条（42 好评 / 58 差评，2026-08-25 → 09-12）+ negative 100 条（2026-08-13 → 09-12）。Steam 总体评价 Mixed（1,175 正 / 727 负 / 1,902 总）。

### 1.2 主题聚类（负面评测）

| 主题 | 频率 | 代表证据 | 站内状态 |
|---|---|---|---|
| 误封 / bot 判定 / 申诉通道 | **高频**（约 35/100） | 「perma banned for botting」「appeal → generic response」 | ✅ 已覆盖 `account-ban-appeal-guide`（9/9） |
| 交易锁 / 市场限制 / 申诉无回应 | **高频**（约 12/100，含 8/25 一批同文本镜像） | 「locked me from trading」「new character restriction bug」 | ✅ 同上，同执法簇 → **自噬红线** |
| 服务器重启 / 掉线 / 回档 | **中高频**（约 8/100） | 「more than 10 [restarts] a day, kept losing items」 | ✅ 已覆盖 `connection-server-guide` §Progress Rollbacks |
| bot 占图 / 抢怪 / 地图过小 | **中频**（约 6/100） | 「maps really only support 1 person grinding」「respawn 15-25s」 | ✅ 已覆盖 `solo-guide`（kill-steal 规则）+ `party-composition` + artifact 页「地图约 30 人上限」 |
| 职业/组队 meta（Wizard/Weaver/Gunslinger 独大） | 中频 | 「if you are not gunslinger/wizard you are not invited」 | ✅ 已覆盖 `class-tier-list` / `builds-guide` / `party-composition` |
| 满级后内容薄 | 中频 | 「Spire is the ONLY endgame activity」 | ✅ 已覆盖 `endgame-guide` / `echoing-spire-endgame-guide` |

**结论：抱怨已全部收敛到既有 42 篇**——与 9/3–9/11 六连 SKIP 的判定一致。按 Profile 04「抱怨收敛 ≠ 没有缺口，此时 MUST 切换到②」，本轮**不因抱怨无解而 SKIP**，改走系统清单路径。

### 1.3 系统清单路径（②）命中点

比对官方公告系统清单 × 站内 42 篇覆盖，发现一个**零覆盖**项：

> **PTR / publictest 测试分支** —— 全站 grep「PTR」仅 7 处命中，**全部**是「PTR-tested August 2」式的历史顺带一句，无一篇解释 PTR 是什么、怎么进、规则如何。

而 PTR 在官方公告中出现 **3 次**（7/31、8/2、9/10），且最近的 9/10 公告是一项**全新事实**，站内完全未收录。

---

## 2. 选题四条件核验

| 条件 | 判定 | 依据 |
|---|---|---|
| ① 高频：≥3 独立来源 | ✅ | **官方 3 则公告**（7/31 完整定义 + 8/2 + 9/10 当前状态）+ **独立编辑媒体 MassivelyOP 3 篇**（8/2、8/4、8/17）+ SteamDB 补丁存档。**关键**：PTR 的**实际机制**（加入步骤、非 live 进度、角色副本、可重置、每日更新、go-live 由反馈决定）同时被官方公告与**独立非官方媒体**描述 → 满足本站历史上用于 0.31.0 的「≥2 独立非官方来源描述实际机制」门槛 |
| ② 具体 | ✅ | 「怎么进 PTR / 进去后是什么状态 / 现在测什么 / 多久上线」——可操作、可验证 |
| ③ 真缺口 | ✅ | `ls content/guides/` 逐篇比对 + 全文 grep：0/42 篇解释 PTR。与 `updates-patch-notes`（仅一行历史）、`artifact-sets-guide`（讲神器/Grimoire **规则**，不讲测试分支）、`connection-server-guide`（讲线上连接问题）**搜索意图互不重叠** |
| ④ 可溯源 | ✅ | 每个事实均出自**直连 Steam 官方 news API**（HTTP 200）原文逐字，或 MassivelyOP 索引级报道；无编造 |

### 长期阻塞触发条款复检（0.31.0 Dark Fortress）

| 检查 | 本轮实测 | 判定 |
|---|---|---|
| 0.31.0 是否已出现 ≥2 独立非官方来源描述**实际机制** | ❌ **仍不达标**。官方公告索引最新 = 9/10 PTR、8/25 0.31.0（无 0.31.x/0.32.x）；定向检索仍只回官方/Steam 镜像（含 Steam 社区多语区镜像，属同一帖镜像）；JP wiki `misc:update` 页 `最后更新: 2026/08/25` 仅 3 行摘要无机制细节；vgspoilers 止 0.30.14、MassivelyOP 止 8/17 | ❌ **不写 0.31.0 机制深度指南**（且 0.31.0 已入 `updates-patch-notes`，再写 = 自噬） |
| 本选题是否踩 0.31.0 红线 | ✅ 否。本页主体是 **PTR 测试分支**（8/2 + 9/10 官方公告 + 独立媒体），**不涉及** 0.31.0 机制。仅引 0.17.0 补丁说明（5/24）与 0.31.0「Grimoires 角色绑定」既有事实，与站内一致 | ✅ |

### 已否决的候选（未重复踩坑）

| 候选 | 否决理由 |
|---|---|
| 交易锁 / 申诉 | 与 9/9 `account-ban-appeal-guide` 同执法簇、同 support-ticket 通道 → **自噬红线**（延续 9/11 否决） |
| Weaver 重做 / nerf | 单类职业抱怨，1–2 源；`class-tier-list` + 各职业页已覆盖 → 自噬 |
| bot 占图 / 抢怪 / KS 规则 | `solo-guide` §kill-steal rule + `artifact-sets-guide`「地图约 30 人」已覆盖 |
| 服务器重启/掉线/回滚/物品丢失 | `connection-server-guide` §Progress Rollbacks 已覆盖（该页 8/28 更新） |
| 满级无事做 / Spire 唯一终局 | `endgame-guide` + `echoing-spire-endgame-guide` 已覆盖（延续 9/3 否决） |
| Dragon Knight | 仅官方/媒体预告，无机制、无 ETA → **不写**（延续既往否决） |
| Steam Deck 口径 | 三源互相矛盾 → **不写**（延续 9/11 否决） |
| 高阶玩家在低级图刷怪抢 mob | 仅 2 条独立评测（08-13、08-26）+ 与 kill-steal 规则同簇 → <3 源，否决 |

---

## 3. Residue Scan

| 检查项 | 结果 |
|---|---|
| Hugo shortcodes（`{{< ref }}`） | ✅ 0 |
| 他站游戏名（grainrot / dwarfdelve / witchspire / mistfall / aincrad / themound / sephiria / tearsofmetal / shiftatmidnight / dressmaker 等） | ✅ 0 |
| 他站域名 / 硬编码外部链接 | ✅ 0（正文无任何 `http(s)://`） |
| 模板残留 / 跨站污染 | ✅ 0 |
| `published by NACON` | ✅ 0 |
| 中文标记泄漏（`[待确认]`） | ✅ 0 |
| **CJK 字符** | ✅ **0**（与全站 42 篇基线一致） |
| Steam 短语残留（`SpiritVale Studio` 在本站**合法**，本轮未使用；无 NACON/extraction horror 模板文本） | ✅ Clean |

**状态：✅ Clean**

---

## 4. 虚构检测（逐个断言核验）

对抗假设：我可能把官方**另一则**公告的内容错记到本则上（本站 9/12 已发生过一次同类错误，见 §7）。

| 断言 | 核验方式 | 结果 |
|---|---|---|
| PTR 存在理由 / 四规则 / 每日更新 / go-live 由反馈决定 / 加入步骤 | **直连官方 news API 读 7/31 公告全文**，逐字核对 | ✅ 原文逐字一致 |
| 「PTR server has been created…(especially since past few patches have broke the game)」 | 直连官方 news API 读 8/2 公告全文 | ✅ 原文逐字 |
| 「I've been working on Dark Fortress, Advanced Artifacts and Grimoires with some of the team.」 | 同上 | ✅ 原文逐字（**此句属 8/2 公告，非 0.31.0** —— 见 §7） |
| 9/10 公告：`publictest`、加入四步、`includes Advanced Artifacts and Grimoires`、`will run until next weekend`、`all advanced artifacts and grimoires will be in Nevaris closer to the center`、Discord 补丁说明与 PTR Bugs Reports、+50% EXP 活动 | 直连官方 news API 读 9/10 公告全文 | ✅ 原文逐字 |
| 0.17.0 只上线基础职业 Grimoire、进阶 Grimoire/神器套被推迟 | SteamDB 补丁存档（索引级；WebFetch 403 未复核） | ⚠️ **已在页面 sources 显式标注来源为 SteamDB 存档**，未当作一手直读 |
| AH 于 2026-08-04 回归、5% 卖家税、30 条上限 | 站内既有 4 页一致 + MassivelyOP 8/4 | ✅ 与站内不矛盾 |
| 地图/职业名/数值 | 本页**未使用**任何自造的区域名、怪物名或数值 | ✅ 无编造面 |

**结论：未发现编造。** 所有游戏特有名词（`publictest`、Nevaris、Box of Origin/Mastery、Echoing Spire、0.17.0/0.31.0）均可溯源。

### 诚实标注
- 页面对 `[Unconfirmed]` 类不确定项的处理：**未使用**该标记——因本页所有断言均为官方公告逐字或已核实历史，**无需**降级标注。反例风险（把单源当事实）已通过 sources 分层显式披露。
- 页面 sources 中**如实写明** MassivelyOP 全文复核返回 403，所用为其索引摘要——未把 403 内容冒充已核实。

---

## 5. 内部一致性（与既有 42 篇交叉）

| 交叉点 | 既有页 | 新页 | 判定 |
|---|---|---|---|
| PTR 首次开放时间 / 用途 | `updates-patch-notes` L102「On August 2 the developers opened a PTR…」 | 写 **July 31, 2026** 开放、Aug 2 补记 | ⚠️ **见 §7-2**：7/31 有独立官方公告（「We got some news!」）为该分支首次公开说明；`updates-patch-notes` 记 8/2 系指向另一则公告。两页**不构成互斥事实**（7/31 建立、8/2 再次说明），新页在 sources 中点明两则公告的日期与标题，未否认既有页 |
| AH 回归日 / 5% 税 / 30 条上限 | `trading-market-guide`、`connection-server-guide`、`faq-content`、`echoing-spire-endgame-guide` | 同 | ✅ 一致 |
| Grimoire 规则 | `artifact-sets-guide` §5 | **只引用不重讲**，显式反链 | ✅ 无自噬 |
| 职业名体系 | `class-tier-list`（7 基础 + 8 进阶） | 本页未使用职业名 | ✅ 不涉及 |
| 地图人数上限约 30 | `beginner-guide` / `solo-guide` | 未复述 | ✅ |

### 内容自噬检查（红线）

| 邻近页 | 是否重叠 | 依据 |
|---|---|---|
| `updates-patch-notes` | ❌ 不重叠 | 该页是版本/公告**编年史**；新页是**测试分支的操作与规则**。搜索意图不同（"spiritvale patch notes" vs "spiritvale ptr / how to join publictest"） |
| `artifact-sets-guide` | ❌ 不重叠 | 该页讲神器/Grimoire **游戏内规则**；新页只讲**如何进测试服看到它们**，并显式反链 |
| `connection-server-guide` | ❌ 不重叠 | 该页讲**线上**延迟/掉线/回档；新页讲**独立测试服**。两页互链 |
| `account-ban-appeal-guide` | ❌ 不重叠 | 新页 §8 显式把封禁问题导流回该页，不展开 |
| `trading-market-guide` | ❌ 不重叠 | 只在「PTR 验证过 AH」一句中作为历史证据引用 |

**自噬：未发现。**

---

## 6. 构建 / 部署 / 线上验证（内容级）

### 6.1 构建

```
pnpm install → ok
pnpm build   → ✓ Compiled successfully in 210ms
             → exit 0，0 error
             → /guides/ptr-test-server-guide 已 SSG 预渲染（56 静态页）
```

**产物级验证**（Profile 06 要求，不止源码阅读）：

| 检查 | 产物路径 | 命中 |
|---|---|---|
| 页面 HTML 含特征串 | `.next/server/app/guides/ptr-test-server-guide.html` | `publictest` ×16、`Advanced Artifacts` ×12、`PTR Bugs Reports` ×4、`Nevaris` ×4 |
| 攻略索引收录 | `.next/server/app/guides.html` | `ptr-test-server-guide` ×5 |
| sitemap 收录 | `.next/server/app/sitemap.xml.body` | ×1 |

### 6.2 部署

```
deployment : dpl_HtVjpYQFvF9qFuaAJ5fKXTBt53yp   readyState=READY   target=production
URL        : https://spiritvalewiki-bsy8gea8j-zhaoq0103s-projects.vercel.app
生产 alias : vercel inspect spiritvalewiki.vercel.app → id dpl_HtVjpYQFvF9qFuaAJ5fKXTBt53yp
             （与本次新部署 ID 一致，非旧部署）✅
```

> ⚠️ 首次 `vercel --prod` 返回瞬时 `Not authorized`，按 `04-Profile-建站协调员` 部署规则**自动重试 1 次**即成功（与 9/11 记录同因）。
> ⚠️ `npx vercel` 在本机被解析为 npm script 而报 `Missing script: "vercel"`；改用全局 `vercel`（58.9.4）正常。

### 6.3 线上验证（HTTP 200 **且** body 非零 —— 双断言）

```
默认 DNS ：HTTP:200  SIZE:62381
--resolve：HTTP:200  SIZE:62381   (真实 IP 216.198.79.3，dig @8.8.8.8)
```

两个通道一致，**非** HTTP 000 / size 0，判定为**已验证**。

| 验证项 | 证据 |
|---|---|
| 新路由 | `/guides/ptr-test-server-guide` → **200 / 62,381 B** |
| 正文特征串 | `publictest` ×16、`Advanced Artifacts` ×12、`PTR Bugs Reports` ×4、`Nevaris` ×4、`Game Versions` ×2、`September 13, 2026` ×6 |
| 标题渲染 | 含 "How to Join the Public Test Server" ✅ |
| 攻略索引 | `/guides` → 200 / 125,437 B，含 slug ×5 ✅ |
| sitemap | `/sitemap.xml` → 200 / 9,288 B，含 slug ×1 ✅ |
| 内链 7/7 线上 200 | artifact-sets-guide / updates-patch-notes / connection-server-guide / trading-market-guide / echoing-spire-endgame-guide / beginner-guide / account-ban-appeal-guide 全部 **200** |

---

## 7. 上报事项（🔴 0 ／ 🟡 1）

### 7.1 🟡 他页既有事实**归因错误**（非本轮引入，本轮未修改他页）

**位置**：`content/guides/artifact-sets-guide.md`（9/12 产出，当时 QA 判 PASS）
- **L13**（sources 段）：`Official [0.31.0] "Dark Fortress" announcement (August 25, 2026) … and "Advanced Artifacts and Grimoires" are named as in-development work.`
- **L120**（正文 §5）：`the official 0.31.0 Dark Fortress notes add that Grimoires are now character bound … and preview "Advanced Artifacts and Grimoires" as work in progress.`

**核验过程**：直连官方 Steam news API 取 **0.31.0 公告全文（8,219 字符，全文扫描）**，检索 `Advanced` / `advanced` / `develop` **命中数均为 0**。该公告确实包含「Grimoires 角色绑定」与「Oathbound +1 Bond Targets」（这两条归因**正确**），但**不含**「Advanced Artifacts and Grimoires」。

**正确出处**：官方 **8/2 公告**「Updates on what's happening this weeks.」原文：
> "I've been working on **Dark Fortress, Advanced Artifacts and Grimoires** with some of the team."

**性质**：事实本身为真且官方，属**来源归因错误**（把 8/2 开发者周报的话记到 8/25 补丁公告头上），非编造。8/2 那则恰好同时提到 Dark Fortress，疑为混淆成因。

**影响面**：`grep -rn "Advanced Artifacts and Grimoires"` 全站 → 仅命中 `artifact-sets-guide.md`（2 处）+ 本轮新页（正常引用）。`updates-patch-notes.md` **未**复制该错误，无需连带修改。

**建议**：派合规审计员按最小改动修正 `artifact-sets-guide.md` 上述 2 处——把 0.31.0 来源改为「8/2 官方公告」，或直接删除对该句的 0.31.0 归属。新页 `ptr-test-server-guide.md` 的归因已按 8/2 原文书写，两页**无显式互斥陈述**（新页未提及 0.31.0 是否提过该词），故不构成站内可见矛盾，但修正后两页归因将完全一致。

### 7.2 🟡 建议（低优先）：PTR 首次公开日期口径

`updates-patch-notes` L102 记「On **August 2** the developers opened a PTR…」。本轮实测存在**更早**的独立官方公告：**7/31「We got some news!」**（完整 PTR 定义 + 四规则 + 加入步骤）。
两者**非互斥**（7/31 建立并说明、8/2 周报再次提及），但若追求精确，「PTR 首次公开」宜记 **2026-07-31**。新页已按 7/31 书写并在 sources 列明两则公告的日期与标题。**建议**合规审计员合并时统一口径，不必单独开修。

---

## 8. 结论

**PASS** — 1 文件新增（42 → 43 篇），0 阻断项，已部署并完成内容级线上验证。

- Residue：✅ Clean（0 他站残留、0 CJK、0 外部链接）
- 编造：✅ 未发现；所有断言均为官方 news API 直读原文或已核实历史；403 来源已显式披露
- 内链：✅ 7/7 线上 200
- 自噬：✅ 未发现，独立搜索意图（`spiritvale ptr` / `spiritvale publictest`）
- 词数：✅ 1,316（红线 800–1500 内）
- 构建：✅ ✓ Compiled successfully / exit 0
- 部署：✅ dpl_HtVjpYQFvF9qFuaAJ5fKXTBt53yp，alias 已指向本次新部署
- 线上：✅ HTTP 200 / 62,381 B（双通道一致，非 000/0）

---

## 9. 规则闭环建议（交主 Agent 决定是否写入 Profile）

**建议（补充而非替代 9/12 的 ② 系统清单规则）**：

> 重点站每日扩充的选题第 ③ 路：**官方公告的"流程/机制"清单 × 站内覆盖**。
> 不只是「官方商店页声明了哪些**系统**」（9/12 路径②），还包括「官方公告描述过哪些**运行机制**」——例如测试服（PTR）如何运作、补丁如何从测试走到线上、反馈如何影响发布节奏。
> 依据：spiritvalewiki 的 PTR 在官方公告中出现 3 次、被独立媒体 MassivelyOP 报道 3 次、且是**唯一**能让玩家提前看到 Advanced Artifacts and Grimoires 的通道，但站内 42 篇只有「PTR-tested August 2」式的顺带一句，6 轮抱怨驱动检索从未枚举到它。
> 该路径的价值在于：它与玩家情绪无关，因此**不会**被「抱怨已收敛」这一判据否掉——而后者正是本站 9/3–9/11 六连 SKIP 的唯一根因。

**建议（采集通道）**：本机对 `massivelyop.com` / `steamdb.info` 的 WebFetch 返回 **403**，但二者仍可通过 WebSearch 取到索引摘要。建议在 Profile 采集规则中明确：**403 只降级为「不可作一手直读」，仍可作索引级交叉参考，但 MUST 在页面 sources 中显式披露该降级**（本轮已照此执行）。避免把「403」与「不可用、零信息」画等号而误判 SKIP。
