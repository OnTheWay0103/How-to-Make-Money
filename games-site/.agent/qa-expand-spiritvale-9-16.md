# QA 报告 — spiritvalewiki 每日扩充（EXPAND-2026-09-16-spiritvale）

> 日期：2026-09-16 ｜ 岗位：玩家反馈分析师（17/18）→ 建站协调员（03/04 expand）→ QA 审核员（05/06 quick）
> 审查范围：本轮新增 `spiritvalewiki/content/guides/cosmetics-wardrobe-guide.md` + 2 处既有页 scope note
> 结论：**PASS**（已部署，线上验证通过）｜🔴 0（本轮产物）｜🟡 2（他页既有问题，已上报，未擅自修改）

---

## 0. 本轮产出概要

| 项 | 值 |
|---|---|
| slug | `cosmetics-wardrobe-guide` |
| title | How to Get Cosmetics in SpiritVale — Wardrobe Unlocks, Gear Conversion, and What the Shop Sells |
| 词数 | **1,471**（markdown 剥离后脚本实测；raw body 1,490）— 在 800–1500 红线内 |
| category / version / updated | Guides / EA / 2026-09-16 |
| sources 三层 | **Official 3 / Community 3 / Editorial 2**（共 8 条） |
| 站内攻略总数 | 43 → **44** |
| 内链 | 6 条正文 + 6 个 related，线上 **6/6 = 200** |
| CJK 字符 | **0** |
| 选题性质 | **系统缺口（路径② 官方商店页/公告系统清单 × 站内覆盖）**，非抱怨驱动 |

---

## 1. 反馈采集（玩家反馈分析师 quick，2026-09-16 实测）

### 1.1 通道可用性

| 通道 | 结果 |
|---|---|
| Steam appreviews API — recent(english,100) + negative(english,100) | ✅ `HTTP 200`（122,780 B / 127,606 B），去重 **142 条**，日期覆盖 **2026-08-23 → 09-15** |
| Steam ISteamNews `GetNewsForApp` v2（3767850） | ✅ `HTTP 200`，**30 则官方公告**，最新 = **2026-09-10**（无 9/11 之后新公告） |
| Steam 商店页 | ✅ `HTTP 200 / 152,162 B` |
| `api.steampowered.com` 首轮直连 | ⚠️ 瞬时 `HTTP=000`，加 `--resolve`（8.8.8.8 解析值）后 200 —— **间歇性**，未据此判定通道不可用（符合 Profile 18「MUST NOT 因一次失败就降级」） |
| steamcommunity.com（讨论区 / 公告评论区） | ❌ `HTTP=000`（两个候选 IP 均失败） |
| Reddit | ❌ `HTTP=000` → **如实记为缺失，未编造任何 Reddit 内容** |
| steamdb.info | ❌ WebFetch `403 Forbidden` |
| WebSearch + WebFetch（编辑站） | ✅ 2UpSkill、JeuxOnline **全文直读**成功 |

### 1.2 路径① 抱怨聚类 → 全部收敛

| 主题（正则命中条数/142） | 频率 | 站内状态 |
|---|---|---|
| bot（48）／误封申诉（46） | 高频 | ✅ `account-ban-appeal-guide` |
| 组队依赖（26） | 高频 | ✅ `solo-guide` / `party-composition` |
| 服务器重启·回档（15）／崩溃掉帧（12） | 中高频 | ✅ `connection-server-guide` |
| 职业平衡·Weaver nerf（12） | 中频 | ✅ `class-tier-list` + 各职业页 |
| 地图小·抢怪·respawn（11） | 中频 | ✅ `solo-guide` / `beginner-guide` |
| 满级无事做·Spire 唯一终局（8） | 中频 | ✅ `endgame-guide` / `echoing-spire-endgame-guide` |
| 交易锁（**1**） | 低频 | ✅ 同执法簇 → 自噬红线，否决 |
| 退款·商店宣传不符（11） | 中频 | 属执法簇/商店承诺簇，无独立新缺口 |

→ 抱怨无新缺口。按 Profile 04 切路径②。

### 1.3 路径② 系统清单 → 命中点

官方商店页 + 30 则公告的系统清单 × 站内 44 slug 覆盖：Cards ✅、Artifacts ✅、Classes ✅、Crafting ✅、Economy ✅、PvP ✅、Pets/Mounts ✅、PTR ✅、Bosses ✅、Dungeons ✅ —— **唯一零覆盖项：外观层（wardrobe / cosmetic shop）**。

站内查重 grep：`wardrobe` **0**、`cosmetic conversion` **0**、`Mystery Pet Box` **0**、`Mystery Mount Box` **0**、`100p` **0**、`appearance` **0**（`content/` + `app/` + `components/` 全扫）。

---

## 2. 选题四条件核验

| 条件 | 判定 | 依据 |
|---|---|---|
| ① 高频 ≥3 独立来源 | ✅ | **Official 3**（商店页 Fair-To-Play 原文；0.14.0 Cosmetics Update 全系统定义；0.31.0 三条 cosmetic shop bug 修复证明线上存在）／**Community 3**（3 位不同账号、不同日期/时长的 Steam 评测**原文直读**）／**Editorial 2**（2UpSkill、JeuxOnline **全文直读**）。全部围绕同一玩家问题：商城卖什么 / 外观怎么来 / 是否 pay-to-win |
| ② 具体 | ✅ | 三条获取路径 + 绑定/可交易规则 + 转换机制，均可操作可验证 |
| ③ 真缺口 | ✅ | 见 1.3；与 `pets-mounts-guide`（宠物坐骑本体）、`trading-market-guide`（经济）**搜索意图不重叠**，且已加双向 scope note |
| ④ 可溯源 | ✅ | 引语逐字来自官方公告原文 / Steam 评测 API / 编辑站全文；2 处不确定项标 `[Unconfirmed]` |

### 长期阻塞条款复检（延续项）

| 条款 | 本轮实测 | 判定 |
|---|---|---|
| 0.31.0 Dark Fortress 机制深度指南 | ❌ 仍不达标：官方 news 最新 = 9/10 PTR，无 0.31.x/0.32.x；JP Wiki `misc:update` 最后更新 2026/08/25，条目仅到 0.30.10 且无机制细节；无第二家非官方描述机制 | ❌ 不写（且已入 `updates-patch-notes` → 自噬） |
| 交易锁申诉 | ❌ 未达标：142 条评测仅 1 条命中且属同批文本镜像；无第二平台 | ❌ 不写（自噬红线） |
| 本页是否踩 0.31.0 红线 | ✅ 否：仅引 cosmetic shop 的存在性证据，未展开 0.31.0 战斗/机制内容 | ✅ |

---

## 3. Residue Scan

| 检查项 | 结果 |
|---|---|
| Hugo shortcodes（`{{< ref }}` / `{{%`） | ✅ 0（全站 grep `content/ app/ components/ lib/`） |
| **EX-Mod / 跨站模板残留**（`EX-Mod`、`<ref `、`hugo`、`dwarfdelve.`、`grainrotwiki.`、`witchspirewiki.`） | ✅ **0 命中**（全站） |
| 他站游戏名（grainrot / dwarfdelve / witchspire / mistfall / aincrad / themound / sephiria / tearsofmetal / shiftatmidnight / dressmaker / taival / vahrin） | ✅ 0（本轮 3 个文件逐个 grep） |
| 他站域名 / 硬编码外部链接 | ✅ 新页正文 `http(s)://` **0 命中**（来源链接仅存在于 frontmatter `sources`，由 GuideLayout 渲染为文本，非正文外链） |
| `published by NACON` / `SpiritVale Studio` / `extraction horror` / `cursed jungle` | ✅ 0 |
| 中文标记泄漏（`[待确认]`） | ✅ 0 |
| **CJK 字符** | ✅ **0**（与全站 44 篇基线一致） |
| JSON-LD / schema 域名 | ✅ 未涉及（本轮未改 `lib/schema.ts`） |
| **构建产物级表格回归**（`td>-------` 垃圾分隔行，9/12 全站缺陷） | ✅ **0 命中**（`.next/server/app/guides/cosmetics-wardrobe-guide.html`） |

**状态：✅ Clean**

---

## 4. 虚构检测（逐个断言核验）

对抗假设：我可能把**另一则**公告的内容错记到本则上（本站 9/12 已发生过一次同类归因错误，`artifact-sets-guide` 于 `f2381c7` 订正；本轮按该教训**逐条回读公告原文**核对）。

| 断言 | 核验方式 | 结果 |
|---|---|---|
| wardrobe 菜单存在；购买后**跨全部角色**永久解锁 | 直连官方 news 源读 **0.14.0 Cosmetics Update（2026-03-15）** 原文 | ✅ 逐字一致 |
| `Equip conversion to cosmetic (100p)` | 同上 | ✅ 逐字一致；页内另标该数值为 **2026-03 快照**，线上现值 `[Unconfirmed]` |
| `All premium cosmetics are account bound, world droppable monster pets and mounts are tradable` | 同上 | ✅ 逐字一致 |
| `Mystery Pet Box` / `Mystery Mount Box` 为 world drop 随机开出 | 同上 | ✅ 逐字一致 |
| boss-exclusive cosmetics；怪物可掉落自身 pet 版本 | 同上 | ✅ 逐字一致 |
| pets 定期拾取物品；mounts 非战斗移速 +40% | 同上 | ✅ 逐字一致 |
| 当时的 `p` 货币经 **Ko-fi 捐赠**获取、计划 EA 后改 Steam 购买 | 同上（经 `store.steampowered.com/news/posts` 公告页全文核对） | ✅ 逐字一致；页内标 **`[Unconfirmed]`：线上是否已切换未验证** |
| cosmetic shop **在当前线上版本存在** | 直连 news API 读 **0.31.0（2026-08-25）** 原文，取三条 shop bug 修复 | ✅ 逐字一致（**关键：这是「存在性」证据，未展开 0.31.0 机制**） |
| 商店页 `All Microtransactions … purely cosmetic` / `almost limitless number of cosmetic options` | 直读商店页 HTML（152,162 B）取原文 | ✅ 逐字一致 |
| 三条玩家引语（156h / 304h / 116h） | Steam appreviews API 原文直读，逐条比对账号与时间戳 | ✅ 逐字一致，三位为**不同账号/不同日期** |
| 2UpSkill「is not pay to win」「There isn't a shortcut waiting behind a payment screen」 | WebFetch 全文直读 | ✅ 逐字一致 |
| JeuxOnline「fair-to-play, avec des microtransactions présentées comme purement cosmétiques et non pay-to-win」 | WebFetch 全文直读 | ✅ 逐字一致；页内**如实标注**该表述为开发者「宣称的」模型，非经审计的商店页明细 |

**结论：未发现编造。** 所有游戏特有名词（wardrobe、Mystery Pet Box、Umbra Knight Set、Kaeru Set、Dawn Wings、Solaris Blade、Cyber Rogue Eyewear、Dark Fortress）均可溯源至官方公告或商店页。

**已主动放弃的不可核验断言**（起草后删除，宁缺毋滥）：
- 一度拟写入「怪物 pet 掉率约 0.01%」——来源为 `steamcommunity.com` 公告评论区，**本机两个候选 IP 均 `HTTP=000`，无法直读复核**，仅得自检索摘要。按「MUST NOT 编造数字/来源」**整条删除**，改以官方可溯源的「Mystery Box 随机开出」表述替代。
- 一度拟引用 nantoiu.com（日文测评）作为 Editorial 源 —— WebFetch 返回正文缺失（仅菜单与导航），**无法核验**，整条移除。

### 诚实标注
- 页面 `[Unconfirmed]` 使用 **2 处**（转换费 100p 现值；`p` 货币是否已切 Steam 购买），均为「官方旧公告数值 → 线上现值未知」这一特定情形，非泛泛免责。
- 新页**未**对站内既有页下任何断言作背书（见 6.2）。

---

## 5. 内部一致性（与既有 43 篇交叉）

| 交叉点 | 既有页 | 新页 | 判定 |
|---|---|---|---|
| 0.31.0 Grimoires 不可再转外观 | `updates-patch-notes` L83、`artifact-sets-guide` L122 | 新页 §7 同事实，并反链 | ✅ 一致，无重讲 |
| AH 5% 卖家税 / 30 条上限 / 8/4 回归 | `trading-market-guide`、`connection-server-guide`、`faq-content`、`echoing-spire-endgame-guide` | 未复述 | ✅ 不涉及 |
| 宠物/坐骑机制 | `pets-mounts-guide`（稀有度、训练、收藏里程碑） | **只讲外观层**，§7 与 §8 显式反链 | ✅ 不重叠 |
| 职业名体系（7 基础 + 8 进阶） | `classes-guide` 等 | 仅 1 处顺带提及，无新体系 | ✅ |
| 商店货币 | `app/faq/page.tsx` 断言「无 premium currency」 | 新页如实写「0.14.0 公告记录了 `p`」，并标 `[Unconfirmed]` | ⚠️ **既有页冲突，已上报，未擅改**（见 6.1） |

### 内容自噬检查（红线）

| 邻近页 | 是否重叠 | 依据 |
|---|---|---|
| `pets-mounts-guide` | ❌ 不重叠 | 该页讲宠物/坐骑**本体**（获取、训练、收藏）；新页讲**外观层**（wardrobe、转换、商城、绑定规则）。**双向 scope note 已加**：新页 §8 ↔ 该页 §4.2 |
| `trading-market-guide` | ❌ 不重叠 | 该页讲**经济**（AH/摊位/费率/翻卖）；新页 §5 只讲「哪些外观可交易」这条定价规则。**双向 scope note 已加**：新页 §8 ↔ 该页 §1.2 表后 |
| `updates-patch-notes` | ❌ 不重叠 | 该页是版本**编年史**；新页是**系统说明**。搜索意图不同（"spiritvale patch notes" vs "spiritvale cosmetics / wardrobe / pay to win"） |
| `artifact-sets-guide` | ❌ 不重叠 | 该页讲神器与 Grimoire **规则**；新页仅引「Grimoire 不再可转外观」一句并反链 |
| `faq-content` | ❌ 不重叠 | 该页为结构化问答；新页为系统长文，且 §8 显式反链 |

**自噬：未发现。**

---

## 6. 报告发现（交主 Agent，两项均**未擅自修改**）

### 6.1 🟡 既有页事实冲突：FAQ「无 premium currency」× 3 页商城条目 × 官方公告

- `app/faq/page.tsx:13`：`There is no subscription, battle pass, or premium currency` —— 与官方 **0.14.0 Cosmetics Update** 记录的 `premium currency (p)`（`Equip conversion to cosmetic (100p)`）**冲突**。
- 同站 `content/guides/class-leveling-guide.md:166`：`Premium Subscription | Permanent small boost | Cash Shop` —— 与 FAQ「no subscription」**自相矛盾**。
- 同站 `trading-market-guide.md:37`：`Premium Pass … Available from the cash shop` —— 同类冲突。
- **未修改理由**：无权威当前来源可裁决线上商城是否仍使用 `p`（0.14.0 公告明言计划 EA 后由 Ko-fi 改为 Steam 购买，切换与否未验证）；擅改即编造风险。新页已用 `[Unconfirmed]` 如实标注。
- **建议**：单独立「事实核验」任务，与 9/11 遗留的「等级上限 99 vs 100+」同批处理。

### 6.2 🟡 疑似编造条目：cash shop 出售影响数值/经济的物品

| 位置 | 断言 | 与官方/社区证据的冲突 |
|---|---|---|
| `class-leveling-guide.md:164-166` | XP Scroll (Small/Large)、Premium Subscription 来自 Cash Shop | 商店页 `All Microtransactions … purely cosmetic and do not affect gameplay`；2 条 Steam 评测「只有外观、无隐藏属性」；2UpSkill「no official cash shop selling power」 |
| `leveling-guide.md:84` | `Premium booster (cash shop) | Large XP bonus` | 同上；且与该页下方 §XP Potions「可从 General Goods NPC 购买或 Alchemy 制作」**自相矛盾** |
| `trading-market-guide.md:37` | `Premium Pass: Reduces all fees by 50%`（cash shop） | 同上 |

措辞（XP Scroll / Premium Subscription / Premium Pass）呈明显**通用 MMO 模板**特征。本轮**未改动**（QA 只报告不修复，Profile 05「本期不做 1」）。
**建议**：列入下一轮 QA deep 的编造检查清单。

### 6.3 🟡（线索，非本轮产物）`pets-mounts-guide.md` 稀有度/属性/进化表无可溯源来源

官方 0.14.0 公告 + 0.31.0 公告 + Steam 评测一致指向「pets 是 world-drop cosmetic，存于 wardrobe，怪物可掉落自身 pet 版本，Mystery Pet Box 随机开出」，而该页的 `Iron Shell Turtle` / `Ember Fox` / `Luminous Sprite` / `Evolution Stones` / `Mythic Core` / 逐级进化表在官方公告、Steam 评测、JP Wiki 中**均无踪迹**。本轮**未改动**该页（仅加 scope note），建议单独立项核验。

> **QA 角色边界说明**：6.1–6.3 均为**他页既有问题**，按 Profile 05「本期不做 1/2」只报告不修复；本轮新页本身 🔴 0。

---

## 7. 构建 / 部署 / 线上验证（内容级）

### 7.1 构建

```
pnpm install → ok
pnpm build   → ✓ Compiled successfully in 850ms
             → exit 0，0 error
             → /guides/cosmetics-wardrobe-guide 已 SSG 预渲染（57 静态页，+1）
```

**产物级验证**（Profile 06 要求，不止源码阅读）：

| 检查 | 产物路径 | 命中 |
|---|---|---|
| 页面 HTML 含特征串 | `.next/server/app/guides/cosmetics-wardrobe-guide.html` | `wardrobe` ×56、`cosmetic shop` ×22、`pay-to-win` ×10、`Mystery Pet Box` ×6、`100p` ×6、`account bound` ×4、`Unconfirmed` ×2 |
| 攻略索引收录 | `.next/server/app/guides.html` | `cosmetics-wardrobe-guide` ×5 |
| sitemap 收录 | `.next/server/app/sitemap.xml.body` | ×1 |
| 双向 scope note 落地 | `pets-mounts-guide.html` / `trading-market-guide.html` | 各 ×1 |
| 表格分隔行缺陷回归（9/12 全站缺陷） | `cosmetics-wardrobe-guide.html` | `td>-------` **0 命中** |

### 7.2 部署

```
deployment : dpl_8JyPeBpjp4JQg18a6Z1ZvNiQndEH   status=Ready   target=production
alias      : https://spiritvalewiki.vercel.app   （vercel inspect 确认指向本次新部署）
```

首次 `vercel deploy` 返回 `Not authorized` → 按 Profile 04 立即重试 1 次即成功（CLI 会话 token 刷新的已知间歇故障）。

### 7.3 线上验证（`--resolve spiritvalewiki.vercel.app:443:64.29.17.67`）

| URL | HTTP | 字节数 |
|---|---|---|
| `/guides/cosmetics-wardrobe-guide` | **200** | **67,846** |
| `/guides/pets-mounts-guide` | 200 | 56,034 |
| `/guides/trading-market-guide` | 200 | 63,952 |
| `/guides/updates-patch-notes` | 200 | 67,424 |
| `/` | 200 | 44,444 |
| `/guides` | 200 | 128,169 |

线上 HTML 内容抽查：`Wardrobe Unlocks` ×14、`Mystery Pet Box` ×6、`Equip conversion to cosmetic` ×4、`0 and I mean 0 P2W` ×4、`Unconfirmed` ×2；`Scope note` 在 `pets-mounts-guide` 与 `trading-market-guide` 线上各 ×2。

### 7.4 入链可用性（9/11 失效内链教训复检）

- 新页 6 条站内出链 → **6/6 HTTP 200**
- `/guides` 索引 **44 条** `/guides/*` 出链**全量扫描 → 0 条 BROKEN**（9/11 的 `/guides/tier-list` 404 未复发）
- 指向新页的入链：`/guides` 索引 ×1、`pets-mounts-guide` ×2、`trading-market-guide` ×2，全部可达

**未出现 `HTTP=000` / `size=0`，无「未验证」项。**

---

## 8. 规则闭环建议（写入 Profile）

1. **Profile 04（建站协调员）**：建议在「系统清单驱动」条目下补一条实操要求 —— *对官方商店页 + 全部官方公告做系统名词抽取，与站内 slug 列表做成矩阵；`grep -r` 逐个系统名在 `content/ + app/ + components/` 的命中数，**0 命中即零覆盖候选***。本轮与 9/12（Artifacts）、9/13（PTR）三次由该法命中，已可固化为标准动作。
2. **Profile 06（QA 审核员）**：建议补一条 —— *QA 引用某条断言前，**MUST 回读该断言的原始公告**，MUST NOT 依赖检索摘要*（本站 9/12 `artifact-sets-guide` 归因错误 + 本轮起草阶段删除的「0.01% 掉率」不可核验数字，均属此类）。本报告 §4 已按该标准执行。
3. **新增待办**：`app/faq/page.tsx` 的 monetization 断言与 3 篇 guide 的 cash-shop 条目需一次**联动事实核验**（单独改任一页都会造成站内矛盾）。

---

## 9. 自检

- 审查范围 = 本轮 3 个改动文件 + 全站 residue 扫描 ✅
- 未修复问题（只报告）；未改动站点文件以外任何内容；未部署他人站点 ✅
- 🔴 0（本轮产物）／🟡 2（他页既有，已上报所属文件与行号）✅
- 所有「不可核验」断言已**主动删除**而非降级保留 ✅
- 线上验证全部经 `--resolve` 指定真实 IP，无 `HTTP=000` / `size=0` ✅
