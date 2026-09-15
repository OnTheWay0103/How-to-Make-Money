# THE MOUND 内容扩充记录 — 9/16

> 模式: expand-feedback | 站点: themoundwiki | 游戏: The Mound: Omen of Cthulhu (ACE Team / Nacon, Steam app 2569760, 1.0 = 2026-07-15)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）| 日期: 2026-09-16
> 结果: ✅ **EXPANDED** — 新增 `ox-cart-guide`（站内 0 覆盖的真缺口）+ **P0 先行**（3 个未提交改动核对 / 修正 4 处）
> 任务编号: EXPAND-2026-09-16-themound

---

## 〇、P0 先行（本轮最先执行，结论见第五节）

工作区 3 个未提交改动（9/13 fact-sweep 遗留）+ QA 待办 #5/#6。
**全部核对完成，发现并修正 3 处未达官方锚定标准 / 站内不一致的问题**（详见第五节）。
这 3 个文件与本轮新增页一同进入本次 build + deploy。

---

## 一、采集通道实测（2026-09-16 本轮实测，不沿用旧结论）

| 通道 | 实测 | 结果 |
|------|------|------|
| `store.steampowered.com/appreviews` | **HTTP 200** | ✅ 主数据源，游标翻页 8 页 + 筛选切片，取回 **1,396 条独立评测**（英文 1,185） |
| `store.steampowered.com/api/appdetails` | **HTTP 200** | ✅ 官方商店页描述 / 分类 / 价格（$29.99 / Deluxe 未单列价格） |
| `api.steampowered.com/ISteamNews/GetNewsForApp` | 首次 000 → **重试 HTTP 200** | ✅ 取回 **官方公告 1.01–1.05 全文 + 时间戳**（决定性一手来源） |
| `api.steampowered.com/ISteamUserStats/GetSchemaForGame` | HTTP 400 | ❌ 需 API key，成就表不可用 |
| `steamcommunity.com/app/2569760/announcements|discussions` | **HTTP 000** | ❌ 不可达（沿用历轮结论），故所有评测引文一律走官方 reviews API + 作者主页 permalink |
| `reddit.com/r/TheMoundOmenofCthulhu/*.json` | **HTTP 403**（返回 HTML 非 JSON） | ❌ 不可用；本轮**未采信任何 Reddit 内容**，也未编造 |
| WebFetch `addictinggames.com` | **HTTP 403** | ❌ 1.04 报道正文不可读（仅索引摘要可参考，未用于任何事实） |
| WebFetch `chaptercheats / noobfeed / outputlag / 2upskill` | **HTTP 200** | ✅ 编辑层来源 |

> 采集声明：本轮 Reddit 通道不可用已如实记录。所有玩家引文均来自 **Steam 官方 reviews API**（HTTP 200），每条附
> `steamcommunity.com/profiles/<steamid>/recommended/2569760/` 可追溯链接。**零编造。**

---

## 二、反馈采集结果（两条路径并行）

### 路径 ① complaint-driven — Steam 评测（负面优先）

1,185 条英文评测中按主题聚类（正则计数，独立评测去重）：

| 主题 | 提及数 | 其中负面 | 负面占比 |
|------|:--:|:--:|:--:|
| **Ox Cart / wagon** | **74** | **45** | **60.8%** |
| Sanity / madness | 84 | 29 | 34.5% |
| Progression / 无奖励 | 90 | 46 | 51.1% |
| Voice chat / mic | 46 | 17 | 37.0% |
| Proximity chat | 19 | 10 | 52.6% |
| Portal Mission / Tempestad | 3 | 3 | 100% |
| **jewel / rosary** | **0** | **0** | — |

> 全样本负面率 **36.5%**（432/1,185）。**Ox Cart 是唯一「高提及 + 显著高于基线负面率」且站内无专页的系统。**

**Ox Cart 玩家痛点（61 条不重复抱怨句，摘录）**：
- *"the AI pathfinding of the cart is super buggy"*（2026-08-16）
- *"The cart following you is slow, but the real problem is that it randomly gets completely lost."*（2026-08-13）
- *"Cart cannot be given ability to stay in place at least momentarily and can run away from you frequently depending on where you are standing (usually higher up/near dropdowns)."*（2026-07-21）
- *"I was able to visually watch it turn around and run away from me as if the driver itself had gone mad."*（2026-09-10）
- *"THE GUY WILL START GOING BACK FOR NO REASON OR HE WILL JUST BE STANDING EVENTHOUGH U TOLD HIM TO MOVE!"*（2026-07-24）
- *"Ingame guide tells you to send the cart back once ready to leave but it's actually the worst you could be doing because it will wake the forest"*（2026-07-16）
- *"you can extract without sending said cart back to start"*（2026-07-23）
- *"Only for the ox cart to follow them instead of us"*（2026-08-13）

### 路径 ② system-inventory-driven — 官方商店页 / 官方公告系统清单 × 站内覆盖

| 官方明说的系统 | 来源 | 站内覆盖 |
|------|------|------|
| Madness system / altered perception | 商店页 | ✅ sanity-guide + isolation-guide |
| Logbook → 解锁新起始点 | 商店页 | ✅ maps-locations-guide「Map Unlock Order」+ walkthrough-guide |
| 分装备 / 选下一个 jungle 区域 | 商店页 | ✅ loadout-guide + maps-locations-guide |
| spatialized voice chat | 商店页 | ✅ voice-chat-fix-guide + coop-strategy-guide |
| **Ox Cart（官方 pre-launch 原文 "escort your ox cart"；1.04 "Command Wheel 2.0"）** | 官方公告 ×2 | ❌ **无专页**（仅散落在 contracts/isolation/solo/money/extraction/maps 六页的零散引用） |
| jewel boxes + The Rosary（1.04） | 官方 1.04 公告 | ⚠️ 仅 updates-patch-notes 两行 |

---

## 三、查重：现有 39 slug 全比对

`beginner-guide / beginner-loadouts / blood-moon-guide / boss-weakness-drops-chart / characters-classes / combat-survival-guide / contracts-guide / controls-settings-guide / coop-strategy-guide / crafting-recipes / daily-challenges / ending-guide / enemy-bestiary / extraction-guide / faq-content / game-length-guide / isolation-guide / legendary-hunts / loadout-guide / maps-locations-guide / money-guide / motion-sickness-camera-fix-guide / multiplayer-connection-fix-guide / nightmare-mode / patron-saints-guide / performance-fps-fix-guide / perks-guide / price-platforms / progress-save-recovery-guide / progression-system-guide / sanity-guide / solo-guide / stealth-guide / trophy-achievement-guide / updates-patch-notes / voice-chat-fix-guide / walkthrough-guide / weapon-durability-repair-guide / weapons-guide`

**结论：`ox cart` / `ox wagon` / `command wheel` 主题 0 覆盖，确认真缺口。**
`contracts-guide` 只有一节 "The Ox Cart — Your Mobile Storage"（约 20 行，讲契约配装），**无 cart 行为/控制/召唤/送回 的内容** → 独立搜索意图成立，非自噬。双向 Scope note 已加（见第四节）。

---

## 四、选题：命中

| 候选 | 判定 | 理由 |
|------|------|------|
| **Ox Cart 行为与控制（"为什么牛车不跟我 / 怎么控制它"）** | ✅ **选中** | ① 高频：74 条评测提及 / 45 条负面（60.8% vs 基线 36.5%），61 条不重复抱怨句；② 具体：可写成「5 个不跟随原因 + Command Wheel 2.0 + 5 项功能 + 送不送回」；③ 缺口：站内 0 专页；④ **官方锚定**：1.04 公告逐字给出 Command Wheel 2.0；⑤ 编辑层 ≥3 独立来源（ChapterCheats / NoobFeed×2 / OutputLag / 2UpSkill） |
| Voice Chat 重做（1.05）专篇 | ⛔ 否决 | **自噬**：站内已有 `voice-chat-fix-guide.md`（12.7K），且已写明 "the audio corruption Patch 1.03 and 1.05 addressed"。另：1.05 的**第三方编辑层覆盖仍为 0**（本轮 WebSearch 只召回官方 Steam 公告页本身），历史 SKIP 条件未解除 |
| Jewel boxes / The Rosary 收集指南（1.04） | ⛔ 否决 | **频率不达标**：1,396 条评测中 `jewel|rosary` 提及 **0 条**。官方原文只给"scattered across the mainland. Find them all using the map"，**无坐标、无区域名**；唯一给出细节的 addictinggames 正文 **403 不可读**。写位置 = 编造地名（本站 "Mira Isle" 前科），红线 |
| Fort logbook → 新起始点 | ⛔ 否决 | 已被 `maps-locations-guide`「Map Unlock Order」+ `walkthrough-guide` + `beginner-guide` 覆盖，非缺口 |
| 角色名单 / 角色成长专篇 | ⛔ 否决 | 与 `characters-classes.md` 同搜索意图（自噬）。该问题已在 **P0 阶段直接并入该页**（补 roster 来源 + [Unconfirmed] 标注），不另开篇 |
| "送不送回牛车" 独立成篇 | ⛔ 否决 | 与选中题同意图，已并入 `ox-cart-guide` 的一节 |

---

## 五、P0 核对结论（本轮最重要产出）

### 5.1 `characters-classes.md` 重写核对 → **重写方向正确，但 1 处引文不可追溯，已修正**

**✅ 站内一致性**：全站 grep `Alonso|Miguel|Catalina|Rodrigo` = **0 命中**；grep `Iron Will|Divine Protection|Keen Eyes|Berserker Rage` = **0 命中**；
grep `unique ability|innate trait|character-specific|per-class` = 仅命中新页自身的**否定句**。与 `app/page.tsx:18`、`app/faq/page.tsx:16`、
`faq-content.md`、`coop-strategy-guide.md`、`loadout-guide.md`、`perks-guide.md`、`weapons-guide.md` 表述**一致**（weapons-guide 亦写 "your loadout defines your role — there are no classes"）。**无残留。**

**🔴 发现 1 — 引文不可追溯（已修正）**：原重写稿引用
*"every character is the same in terms of speed, strength, endurance, etc. It reminds me a bit of 'Left 4 Dead' where it didn't matter who you were playing as"*
并标注 `[Community, Steam reviews of app 2569760]`。
**在 1,396 条独立评测（含全语言、filter=recent / filter=all 双口径、8 页游标翻页）中全文检索该串 → 0 命中。判定不可追溯。**
→ 已替换为两条**可追溯**引文（附作者主页 permalink）：
- *"the characters don't have unique special abilities—they all feel the same"*（2026-08-06，`profiles/76561198009669889`）
- *"Why have the ability to rescue different characters if they are just skins?"*（2026-08-17，`profiles/76561198003079070`）

**🟡 发现 2 — "seven" 无来源（已补来源 + 标 [Unconfirmed]）**：新页原写 "There is an achievement tied to unlocking seven of them." 全站无来源支撑。
→ 独立编辑来源 [tposegaming 角色指南] 佐证「8 名可玩角色（4 首发 + 2 Deluxe + 2 进度解锁）+ 解锁 7 名的成就」，且明确写
*"Every character plays exactly the same. There are no classes, no unique abilities, and no stat differences."* → **反向印证 cosmetic 一侧**。
已补该链接并整段标 `[Unconfirmed]`（单一编辑来源，未获官方名册核对）；**MUST NOT 引入其角色名单**（8 个名字无法与官方源交叉验证）。

**结论**：原 4 名角色 + 4 个独有 Trait 的旧版**判定为编造**（真实来源显示首发角色名亦与旧版不符：旧版 "Alonso de Medina / Father Miguel / Catalina de Vega / Rodrigo de Silva"）。
本案为 **AdSense 合规红线级**问题，重写 + 本轮修正后已闭合。

### 5.2 `contracts-guide.md` 牛车改动 → **未达官方锚定标准，已修正**

官方 1.04 公告逐字（`api.steampowered.com/ISteamNews` 取回全文，gid 1842212951310330，`date` 1788185312 = **2026-08-31 14:08 UTC**）：
> *"Command Wheel 2.0: By popular demand we have added a new function to allow you to stop the cart and give it instructions. Proximity determines whether or not you use the horn."*

| 改动后的表述 | 锚定结论 |
|------|------|
| "you can stop it and give it instructions with the Command Wheel" | ✅ 逐字锚定 |
| "the horn works on proximity" | ✅ 逐字锚定 |
| **"follows your squad through the map"** | 🔴 **官方原文无此说**。官方 pre-launch 公告只有 "**escort your ox cart**"；1.04 只说"新增可停下并下指令的功能"（暗示此前做不到）。**"follows your squad" 属超出官方原文的推断** |

→ 已改为：`"The Ox Cart is a slow-moving vehicle you escort through the map — since Patch 1.04 …, Command Wheel 2.0 lets you 'stop the cart and give it instructions', and 'proximity determines whether or not you use the horn'"`
并补官方链接 + 指向新页的 Scope note。**原 "follows a fixed path" 同样是推断，一并废弃。**

### 5.3 `price-platforms.md` 删 "2 bonus characters" → **站内仍有 1 处残留，已修**

- `price-platforms.md`：✅ 已删（含 demo 对比表里的角色名列表，改为 "All 4 base characters"）
- **🔴 残留**：`app/faq/page.tsx:23` 仍写 *"the Fortune Hunters Character Pack **with 2 additional characters**"* → **已删**（保留 pack 名，删除未经验证的数量）
- 全站复扫 `2 additional characters|two bonus characters|bonus characters` = **0 命中** ✅

### 5.4 QA 待办 #6 PTR 日期 → **口径已正确，建议关单并改派 spiritvalewiki**

- 全站 grep `PTR` in `themoundwiki/` = **0 命中**；`updates-patch-notes.md` 也**没有 8/2 这个日期**。
- The Mound 的公开测试通道叫 **Open Beta branch（不叫 PTR）**，官方公告 *"Test next week's patch on a Beta Branch"*，`date` 1784300139 = **2026-07-17**。
- 站内 `multiplayer-connection-fix-guide.md:143` 已正确写 **Jul 17, 2026**，与官方源一致 ✅。
- `keyword-results/SpiritVale-feedback.md:20` 才是 "8/2 开 PTR" 的出处（**spiritvalewiki**，另一个游戏）。
- **结论：themoundwiki 口径正确，无需改动；待办 #6 系跨站误挂，建议主 Agent 改派 spiritvalewiki 或关单。**

### 5.5 本轮新发现（P0 之外的站内不一致，仅记录未擅改）

- 🟡 `extraction-guide.md:21-59` 的「Extraction Zones」四型表（Primary Beacon / Secondary Flare / Emergency Raft / Hidden Cache Exit + 精确提取秒数）与
  Compass 三模式，在本轮取到的官方公告与全部编辑来源中**均无佐证**；且该页的提取流程**完全未提"送回牛车"**这一步，
  而实测有 4 条独立评测描述 in-game 教学会要求送回牛车。**属"疑似无源细节 + 缺口"，非本轮 P0，建议立 fact-sweep 专项。**
- 🟡 `characters-classes.md:107` "Expedition Rank — … unlocking new loadout slots" 无来源（该页其余部分已重写，此行属重写遗漏的旧句）。

---

## 六、本轮改动（全部落在 themoundwiki/ 内）

**新增 1 篇**
- `content/guides/ox-cart-guide.md` — **1,487 词**（去 markdown 标记后），问题导向标题
  *"The Mound Ox Cart Guide — Why It Won't Follow You and How to Control It"*；
  frontmatter 对齐站内既有指南；sources 三层（Official ×4 / Community ×10 / Editorial ×5）全部附可追溯链接；
  所有数字标来源；单一来源 / 单一玩家报告一律标 `[Unconfirmed]`（共 5 处）

**P0 修正 4 处**
- `content/guides/characters-classes.md` — 替换不可追溯引文为 2 条可追溯引文 + 补 roster 来源 + [Unconfirmed]
- `content/guides/contracts-guide.md` — 牛车表述改回官方逐字锚定 + 官方链接 + 指向 `ox-cart-guide` 的 Scope note
- `app/faq/page.tsx` — 删除 "with 2 additional characters"
- `content/guides/isolation-guide.md` — 加 Scope note（牛车 sanity 争议 → 指向 `ox-cart-guide` / `sanity-guide`）

**导航**
- `content/home-content.md` — Quick Navigation 表新增 Ox Cart Guide 一行

---

## 七、部署与线上验证（`--resolve` 指定真实 IP）

- 部署：`./deploy-wiki-site.sh themoundwiki` → 新部署 `themoundwiki-ngh3u31be-...vercel.app`
- `vercel inspect themoundwiki.vercel.app` → **alias 已指向本次新部署**（created 43s ago，status Ready）
- 真实 IP：`dig @8.8.8.8` → `64.29.17.131` / `216.198.79.131`（**系统 DNS 返回 `157.240.7.5` = Meta 污染 IP，已弃用**）

| 页面 | HTTP | 字节数 | 内容抽查 |
|------|:--:|:--:|------|
| `/guides/ox-cart-guide`（新） | **200** | **72,266** | "Why It Won't Follow You" ✅ / "Command Wheel 2.0" ✅ / `<table>` 渲染 ✅ |
| `/guides/contracts-guide` | 200 | 83,976 | "you escort through the map" ✅ / 旧 "follows your squad" ✅ 已消失 / ox-cart 链接 ✅ |
| `/guides/characters-classes` | 200 | 63,522 | 新引文 ×2 ✅ / 旧编造引文 ✅ 已消失 / "Iron Will" ✅ 0 命中 |
| `/faq` | 200 | 41,518 | "2 additional characters" ✅ 已消失 |
| `/guides/isolation-guide` | 200 | 69,903 | — |
| `/` `/guides` | 200 | 46,234 / 122,614 | — |
| `/sitemap.xml` | 200 | 8,728 | 48 URL，含 `ox-cart-guide` ✅ |
| `/robots.txt` `/ads.txt` | 200 / 200 | — | — |

> 全部经 `--resolve themoundwiki.vercel.app:443:64.29.17.131` 实测，无 `HTTP=000` / `size=0`。

---

## 八、自检

- 改动全部落在 `themoundwiki/` 内 ✅；未串站 ✅；未改其它站 ✅
- 未 `git commit` / `git push` ✅；未改 `expand-daily.json` / `build-history.json` / `STATS-游戏站点统计.md` ✅
- 用 `pnpm install` + `pnpm build`（未用 npm）✅；用全局 `vercel` 58.9.4（未用 npx vercel）✅
- 未用 `next/font/google` ✅
- 采集约 20 次抓取/检索（Steam API 14 + WebFetch 6 + WebSearch 6）✅
- QA quick 已出：`.agent/qa-expand-themound-9-16.md` ✅
