# 事实核验专项报告 — spiritvalewiki（FACT-SWEEP-2026-09-16-spiritvale）

> 日期：2026-09-16 ｜ 岗位：内容合规审计员（01/02），交接 QA 审核员（05/06）复核
> 上游：`.agent/qa-expand-spiritvale-9-16.md` §6.1 / §6.2 / §6.3（三处 🔴/🟡 原始记录）
> 站点：`spiritvalewiki`（SpiritVale，Steam app **3767850**，买断制 **$14.99**，开发商/发行商 **Baikun Interactive**，EA 发售 2026-07-15）
> 结论：**🔴 #1 确证错误（已修）｜🔴 #2 确证编造（已修）｜🟡 #3 无法裁决（已标 [Unconfirmed]，未删）｜另查出 4 项站内既有错误，一并修正**
> 改动：**11 文件**（+45 / −39 行）｜构建 ✅ ｜部署 ✅ ｜线上 52 URL 全 200 ✅

---

## 0. 一手来源清单（2026-09-16 实测，全部本机直连）

本机 DNS 对 `store.steampowered.com` 投毒（系统 DNS `69.192.130.40`），**全部请求带 `--resolve`**。

| # | 来源 | 端点 | 实测 |
|---|---|---|---|
| S1 | Steam 商店页 | `store.steampowered.com/app/3767850/?l=english&cc=us`（`--resolve …:23.45.138.131`） | **HTTP 200 / 151,108 B** |
| S2 | Steam ISteamNews `GetNewsForApp` v2 | `api.steampowered.com/...appid=3767850&count=200`（`--resolve …:23.212.62.214`） | **HTTP 200 / 76,761 B**，`count=30`（即**全部** 30 则公告），最新 2026-09-10 |
| S3 | Steam 新闻中心页 | `store.steampowered.com/news/app/3767850?l=english` | **HTTP 200 / 247,248 B** |
| S4 | Steam 公告存档页 | `store.steampowered.com/news/posts/?feed=steam_community_announcements&enddate=1773559090` | **HTTP 200 / 40,580 B** |
| S5 | Steam 评测 API（recent） | `store.steampowered.com/appreviews/3767850?...filter=recent&language=english&day_range=365` | **HTTP 200 / 122,319 B**（100 条） |
| S6 | Steam 评测 API（negative） | 同上 `review_type=negative` | **HTTP 200 / 169,482 B**（100 条）｜去重 **173 条 / 173 个独立账号** |
| S7 | 编辑源 | WebSearch + 检索摘要（2UpSkill / JeuxOnline / steamdb） | ⚠️ 仅摘要，**未作为逐字引语依据**（见 §6 说明） |

**仍不可达（如实记为未验证，MUST NOT 当作「无冲突」证据）**：

| 通道 | 结果 |
|---|---|
| `steamcommunity.com`（讨论区 / 公告评论区） | ❌ 不可达（延续 9/16 QA 记录） |
| Reddit `r/SpiritVale` | ❌ 不可达（延续 9/3 起状态） |
| steamdb.info 直连 | ❌ WebFetch `403`（仅经 WebSearch 摘要间接引用） |

---

## 1. 🔴 #1 — 付费模式自相矛盾 → **判定：确证错误（已修）**

### 1.1 争议点

`app/faq/page.tsx:13` 断言 `There is no subscription, battle pass, or premium currency`；而站内 `class-leveling-guide.md:166` 写 `Premium Subscription`、`trading-market-guide.md:37` 写 `Premium Pass` —— FAQ 与两篇指南互相矛盾，且均与官方公告存在冲突。

### 1.2 逐句裁定（拆成三个子断言）

| 子断言 | 一手证据 | 裁定 |
|---|---|---|
| **"no premium currency"** | **S2 `[0.30.0] Early Access Launch`（2026-07-15，EA 发售当日）**：`Cosmetics Store Is now purchased from inside the game (click on balance). No longer linked to Ko-Fi donations.`<br>**S2 `0.30.1 Hotfix`（2026-07-17，EA 后）**：`Fix: premium currency purchases being rolled back`<br>**S4 `[Update 0.14.0] Cosmetics Update`（2026-03-15，Playtest 期）**：`Added premium currency (denoted as p below)`、`Equip conversion to cosmetic (100p)`、`Storage Expansion +500 (500p)` | ❌ **错误**。premium currency `p` 存在，且 **EA 上线后在游戏内购买**（非仅 Ko-fi） |
| **"no subscription"** | **S2 `SpiritVale Official release date!`（2026-06-04）**：`As we discussed months ago, it will be only one-time payment (no subscription).` | ✅ **正确** |
| **"no battle pass"** | 30 则官方公告 + 商店页 `battle pass` / `Battle Pass` **0 命中** | ⚠️ **无证据**（既未证实也未证伪）→ 不可核验的否定断言，按措辞纪律**移出**表述 |
| **"microtransactions are purely cosmetic"** | S1 商店页原文（逐字）：`All Microtransactions in SpiritVale are purely cosmetic and do not affect gameplay.`（标题 `Fair-To-Play. Never Pay-To-Win.`）<br>**但** S1 EA Q&A 同页：`We plan to introduce cosmetic purchases and optional bonuses (e.g. inventory space)`；S2 0.30.0：`Added Character Slot purchases`；S4：`Storage Expansion +500 (500p)` | ⚠️ **需加限定**：官方自称纯外观，但官方同时发售**非数值型便利品**（仓库扩容、角色栏位）。准确表述为「无 pay-to-win 物品」而非「仅外观」 |

### 1.3 关键新证据（本轮新发现，QA 报告未取得）

**S4**：QA 报告与 `cosmetics-wardrobe-guide` 引用的 `[Update 0.14.0] Cosmetics Update` **不在** post-EA 的 `ISteamNews` 30 则feed 中（该 feed 从 2026-02-06 的 0.12.0 直接跳到 2026-04-19 的 0.16.0）。经 **S4** 检索确认它是 **`SpiritVale Playtest`** 的公告（Playtest 期，EA 前），页面标注方为 `SpiritVale Playtest`。其内容已逐字回读并**确认与站内引用一致**（含 `Equip conversion to cosmetic (100p)`、`Storage Expansion +500 (500p)`、`Memberships currently don't award Premium Currency yet`）。

→ 结论：QA 报告与 `cosmetics-wardrobe-guide` 的**引语内容属实**，但**来源归属需精确化为「Playtest 期公告」**（已修前端 frontmatter `sources`）。

### 1.4 改动

**`app/faq/page.tsx:13`**

- 改前：`No. SpiritVale is buy-to-play at $14.99 USD on Steam. There is no subscription, battle pass, or premium currency — microtransactions are purely cosmetic (the developer calls it "Fair-To-Play, Never Pay-To-Win").`
- 改后：`No. SpiritVale is buy-to-play at $14.99 USD on Steam — a "one-time payment (no subscription)" in the developer's words. The game does have a premium shop currency (the developer's March 2026 cosmetics notes call it premium currency, denoted "p"): the Early Access launch notes state the cosmetics store "is now purchased from inside the game", and a launch hotfix references "premium currency purchases". The store page adds that "All Microtransactions in SpiritVale are purely cosmetic and do not affect gameplay" under the heading "Fair-To-Play. Never Pay-To-Win.", and official notes also list non-power convenience purchases such as storage expansion and character slots.`

---

## 2. 🔴 #2 — 疑似编造的 P2W 商城条目 → **判定：确证编造（模板残留），已修**

### 2.1 争议点

| 位置（改前） | 断言 |
|---|---|
| `class-leveling-guide.md:164-166` | `XP Scroll (Small)` / `XP Scroll (Large)` / `Premium Subscription \| Permanent small boost \| Cash Shop` |
| `leveling-guide.md:84` | `Premium booster (cash shop) \| Large XP bonus` |
| `trading-market-guide.md:37` | `Premium Pass: Reduces all fees by 50%. Available from the cash shop` |
| `class-leveling-guide.md:204` | `Use XP Scrolls during XP events.` |
| `farming-resource-guide.md:33` | `Combine with XP Scrolls to earn gold and XP simultaneously.` |
| `trading-market-guide.md:112 / :126` | `Premium Pass holders flooding` / `Invest in the Premium Pass to cut every fee`（同源扩散，QA 报告未列） |

### 2.2 取证

| 证据 | 结果 |
|---|---|
| **S2 全 30 则官方公告**全文检索 `XP Scroll` / `XP scroll` / `XP Potion` / `XP Boost` / `EXP Boost` / `Premium Subscription` / `Premium Pass` / `Premium Booster` / `Premium booster` / `booster` / `Booster` / `battle pass` / `Battle Pass` / `cash shop` / `Cash Shop` / `Speed Boost` | **全部 0 命中** |
| **S1 商店页**全文检索同一批词 | **全部 0 命中**（`Microtransaction` 1 命中 = 官方否定句；`Pay-To-Win` 1 命中 = 官方标题；`$14.99` 1 命中 = 售价） |
| **S5+S6 评测语料 173 条 / 173 账号**检索同一批词 | **全部 0 命中**（`cosmetic` 5 命中、`cash shop` 1 命中、`pay-to-win` 2 命中、`p2w` 3 命中，**均为「商城只有外观」的证据，非反例**） |
| **S2 官方对商城内容的正面枚举** | 0.14.0 列 `Equip conversion to cosmetic (100p)` / `Storage Expansion +500 (500p)` / `Mystery Pet Box` 等；0.31.0 列 Umbra Knight Set 等 30+ 外观项 + 3 条 cosmetic shop bug 修复 —— **无任何 XP 类或费率类商品** |
| **S2 `Patch Notes 0.30.10`（2026-08-04）官方费率** | `Vending Listing Tax: 1% > 5%`、`Listing Limit: 50 > 30` —— **不存在任何降低费率的商品** |
| **S1 商店页否定句** | `All Microtransactions in SpiritVale are purely cosmetic and do not affect gameplay.` |

**玩家原话（S5/S6 直读，与上述冲突方向一致）**：

- 2026-07-20，120h（id `230913960`）：`No P2W aspects as of right now.`
- 2026-08-18，181h（id `233141885`）：`No inherent P2W, however there are plenty of bots and 3rd party sellers.`
- 2026-08-30，156h（id `234068367`）：`every item ingame can become cosmetic that cost a low amount of ingame currency, this includes pet and mount`
- 2026-09-07，304h（id `234716198`）：`Is this a pay-to-win game? Definitely not. … The only things you can buy from the cash shop are cosmetics. They don't give you any stats or hidden stats.`
- 2026-09-13，117h（id `235206949`）：`0 and I mean 0 P2W`
- 2026-09-08，427h（id `234774459`）：`without pay-to-win shortcuts or endless cash-grab systems`

### 2.3 裁定

**确证编造（模板残留）**，依据三条独立第一方证据链：
1. 官方**否定句**直接排除数值类微交易；
2. 官方**正面枚举**商城内容两轮（0.14.0 / 0.31.0），无 XP / 费率类商品；
3. 173 条评测**零提及**，而讨论过商城的 6 条评测口径一致；
4. 佐证：措辞呈通用 MMO 模板特征，且 `leveling-guide.md:84`（cash shop booster）与同页 `§XP Potions`（NPC/Alchemy 获取）**自相矛盾**。

### 2.4 改动（改前 → 改后）

| 文件:行 | 改前 | 改后 |
|---|---|---|
| `class-leveling-guide.md:160-166` | `### Paid Items` + 3 行编造表格 | `### Shop-Bought Items` + 官方逐字否定句 + 「官方公告与评测语料均无 XP 商品」+ 一条 **Correction** 说明（声明删除原因） |
| `class-leveling-guide.md:204` | `Use XP Scrolls during XP events.` | `Play during XP events. Stack the free boosts — Waystone buff, daily first-kill bonus and party bonus — during event windows.` |
| `leveling-guide.md:84` | `\| Premium booster (cash shop) \| Large XP bonus \| …` | **整行删除**，并在表下加 `No paid XP boost is documented` 引注（含官方逐字否定句 + 删除声明） |
| `leveling-guide.md:92-95` | `### XP Potions` / `Available from the General Goods NPC or crafted via Alchemy:` | `### XP Potions [Unconfirmed]` / 「无法对官方公告核验来源，以下为社区报告 **[Unconfirmed]**」 |
| `trading-market-guide.md:37` | `**Premium Pass:** Reduces all fees by 50%. Available from the cash shop or earned via achievement milestones.` | `**No fee-reduction item exists.**` + 删除声明 + 官方真实费率（5% listing tax / 30 cap） |
| `trading-market-guide.md:112` | `\| Premium Pass holders flooding \| Fee-reduced sellers dump stock \| Buy — their volume is your discount \|` | `\| Post-patch relisting wave \| Everyone re-prices at once after a trade fix \| Buy the dip before prices settle \|` |
| `trading-market-guide.md:126` | `Invest in the Premium Pass to cut every fee — it pays for itself in roughly 20 flips` | `Size your flips around the 5% listing tax and the 30-listing cap — those two numbers set your real break-even, not any shop perk` |
| `farming-resource-guide.md:33` | `Combine with XP Scrolls to earn gold and XP simultaneously.` | `Group up for the party XP bonus while you farm so gold and XP come in together.` |

> **无证据处置纪律遵守情况**：编造项（有第一方**反证**）→ 删除并留 Correction 声明；无证据项（XP Potions 来源）→ 标 `[Unconfirmed]`，**未删**。

---

## 3. 🟡 #3 — `pets-mounts-guide.md` 稀有度/属性/进化表无可溯源 → **判定：无法裁决（已标 [Unconfirmed]，未删）**

### 3.1 取证

| 检索项 | S2 全 30 则官方公告 | 结果 |
|---|---|---|
| `Evolution Stone` / `Mythic Core` / `Rare Crystal` / `Training Manual` | 0 命中 |
| `Iron Shell Turtle` / `Ember Fox` / `Luminous Sprite` / `Wind Runner` / `Celestial Griffin` / `Void Stalker` / `Primal Unicorn` | 0 命中 |
| `pet level` / `Pet level` / `evolve` / `Rarity` / `rarity` / `Companion` | 0 命中 |

**官方对宠物的定位（正面证据）**：
- **S2 0.30.0** 把 `Mounts & Pets`（Fire Fox / Ice Fox / Banana Duck / Green Whale）列在 **Cosmetics** 区块内；
- **S2 0.31.0** 把 `Bombza (Pet) Bobby` / `Mrkbx (Pet) Cubeman` 等列在 **Cosmetics** 区块内；
- **S4 0.14.0**：`World drop cosmetics like pets and mounts can be added/removed from wardrobe and traded`；`All premium cosmetics are account bound, world droppable monster pets and mounts are tradable`；`Mystery Pet Box: world drop that gives random monster pet`；`Pets: periodically pick up items for you`；`Mount: give you 40% movespeed out of combat`。
- **S5** 2026-08-30 156h 评测：`every item ingame can become cosmetic … this includes pet and mount`

→ 官方可证实的宠物/坐骑**效果**只有两条：**宠物定期拾取物品**、**坐骑非战斗移速 +40%**。该页的稀有度分级、逐级属性加成、宠物 XP 升级表、Evolution Stones / Mythic Core 进化材料表、坐骑速度档位与训练表、收藏里程碑，**在任何官方来源与 173 条评测中均无踪迹**。

### 3.2 裁定：**无法裁决（无可溯源）** → 标 `[Unconfirmed]`，**不删**

理由：无**反证**（官方未否认宠物有属性/进化系统，只是从未描述过），故按「无证据的处置是标 `[Unconfirmed]`，不是删」执行；同时把与官方「cosmetic」定位明显冲突的开篇断言改写。

### 3.3 改动（`pets-mounts-guide.md`）

| 行 | 改动 |
|---|---|
| L15（新增） | 顶部 `⚠️ [Unconfirmed] — read this first` 横幅：写明官方定位为 cosmetic、官方可证实的**仅**两条效果、下文全部表格来自社区报告且**不在任何官方公告中**、并列名未经验证的宠物名 |
| L17 | 开篇 `Pets and mounts are more than cosmetic… Pets provide combat bonuses and utility skills` → 改为官方口径 `cosmetic layer + quality-of-life layer`，效果仅保留可溯源的「拾取物品 / 非战斗移速」 |
| L25 / L35 / L50 / L59 / L72 / L81 / L93 / L97 / L117 | 9 处标题追加 `[Unconfirmed]`（1.1 稀有度属性表、1.2 最佳宠物、2.1 升级表、2.2 进化需求、3.1 坐骑速度档、3.2 坐骑获取、§4 坐骑训练、4.1 训练表、§5 收藏清单） |

---

## 4. 本轮**额外**查出的站内既有错误（超出派发三处，一并修正）

> 按 Profile 02「MUST NOT 只改第一个找到的文件就停（同类问题要扫全站）」与「MUST 修改全站性数据前 grep -rn 全局搜索」执行。

| # | 文件:行 | 改前 | 改后 | 一手证据 |
|---|---|---|---|---|
| **N1** | `app/page.tsx:16` | `SpiritVale is a **free-to-play** class-based MMORPG…` | `…is a **buy-to-play**…` | S1 `Buy SpiritVale $14.99` |
| **N1** | `app/page.tsx:17` | `**Yes.** SpiritVale is **completely free-to-play** on Steam.` | `**No.** SpiritVale is buy-to-play at $14.99 USD on Steam — a one-time purchase with no subscription.…` | S1 同上 |
| **N1** | `app/page.tsx:32` | `Free-to-Play on Steam Early Access` | `Buy-to-Play on Steam Early Access — $14.99` | S1 同上 |
| **N1** | `app/page.tsx:34` | CTA 文案 `Play Free on Steam` | `View on Steam` | S1 同上 |
| **N1** | `app/about/page.tsx:15` | `a **free-to-play**, class-based MMORPG` | `a **buy-to-play**, class-based MMORPG` | S1 同上 |
| **N1** | `lib/schema.ts:60` | `A **free-to-play** class-based MMORPG…`（VideoGame JSON-LD description） | `A **buy-to-play** class-based MMORPG…` | S1 同上 |
| **N1** | `lib/schema.ts:64` | `genre: [..., '**Free-to-Play**']` | `genre: ['MMORPG','RPG','Fantasy','Multiplayer']` | S1 同上 |
| **N1** | `lib/schema.ts:75` | `offers.price: '**0**'`（**结构化数据声明免费**） | `offers.price: '**14.99**'` | S1 `Buy SpiritVale $14.99` |
| **N2** | `app/faq/page.tsx:21` | `the Auction Hall exists, but it is **currently down for a rebuild**` | `the Auction Hall is **back online** (returned August 4, 2026, with a 5% seller tax and a 30-listing cap)` | S2 `0.30.10`（2026-08-04）`Trade/Vending/Guild storage re-enabled` + `Vending Listing Tax: 1% > 5%` + `Listing Limit: 50 > 30`；站内 `trading-market-guide.md:19` 同口径 |
| **N3** | `content/guides/faq-content.md:3` | meta description `Covers the **F2P** model…` | `Covers the **buy-to-play** price model…` | S1 同上 |
| **N3** | `content/guides/faq-content.md:7` | keywords 含 `"SpiritVale **F2P**"` | `"SpiritVale **buy to play**"` | S1 同上 |
| **N4** | `content/guides/cosmetics-wardrobe-guide.md:11` | sources 称 0.14.0 为 `official SpiritVale Steam **news feed (App 3767850)**` | 精确化为 `official SpiritVale Steam announcement published during the **public Playtest phase, before Early Access launch**（it is not in the post-launch news feed for App 3767850）` | S2 feed 30 则无 0.14.0；S4 页面标注 `SpiritVale Playtest` |
| **N5** | `content/guides/cosmetics-wardrobe-guide.md:81`（新增） | §4 仅称 `Everything sold there is appearance only` | 追加 caveat：商店**并非字面 cosmetics-only**（另售 `p` 与 仓库扩容 / 角色栏位 等**非数值便利品**）；准确表述为「no pay-to-win items」 | S1 EA Q&A `optional bonuses (e.g. inventory space)`；S2 0.30.0 `Character Slot purchases`；S4 `Storage Expansion +500 (500p)` |
| **N6** | `content/guides/cosmetics-wardrobe-guide.md:11` | 0.14.0 引语清单未含 `Storage Expansion +500 (500p)` | 补入（逐字回读 S4 确认） | S4 |

> **N1 严重度说明**：`lib/schema.ts` 的 `price:'0'` + `genre:'Free-to-Play'` 是**面向 Google 的结构化数据**，与商店页售价直接冲突，属「站点级元数据错误」（与 Profile 02 记载的 `shiftatmidnight` 编造元数据教训同类）。且 `app/page.tsx` 的「free-to-play」与**同站** `app/faq/page.tsx` 的「buy-to-play」**互相矛盾**，是本次「付费模式自相矛盾」的第 4、5 个冲突方，QA 报告仅记录了 FAQ 与 2 篇指南。

---

## 5. 统一口径复扫（MUST）

### 5.1 源码级（`content/ + app/ + lib/ + components/`）

```
$ grep -rn "premium currency|subscription|battle pass|Premium Pass|Premium Subscription|pay-to-win|P2W|cash shop" …
```
剩余命中**全部**为以下三类，**无一是活跃断言**：
1. 官方**逐字引语**（`All Microtransactions…purely cosmetic…` / `one-time payment (no subscription)`）；
2. **删除声明**（`An earlier version of this page listed … they have been removed.`）；
3. 引用**玩家/编辑源原话**（`The only things you can buy from the cash shop are cosmetics…`）。

```
$ grep -rni "free-to-play|free to play|F2P" …    # 价格模型语境
→ 仅剩 3 处「Is SpiritVale free to play?」**问句**（答案均为 No）+ 已被否定的历史表述
```

### 5.2 产物级（`.next/server/app/**`，Profile 06 要求，不止源码阅读）

| 检查 | 结果 |
|---|---|
| `no subscription, battle pass, or premium currency` | **0 文件** ✅ |
| `completely free-to-play` / `Free-to-Play on Steam Early Access` / `Play Free on Steam` | **0 文件** ✅ |
| `currently down for a rebuild` | **0 文件** ✅ |
| `Reduces all fees by 50%` / `Combine with XP Scrolls` | **0 文件** ✅ |
| `XP Scroll` / `Premium Pass` / `Premium Subscription` / `Premium booster` | 仅存于 **Correction 声明**上下文（逐条核对：`earlier version` / `Correction` 包裹），**无活跃断言** ✅ |
| 新断言 `one-time payment (no subscription)` / `is now purchased from inside the game` / `premium currency purchases` | **FOUND** ✅ |
| `buy-to-play` | 24 文件 ✅ ｜ `14.99` 12 文件 ✅ |
| `Unconfirmed` | 48 文件（含 pets 横幅 9 处标题标记）✅ |

### 5.3 线上全站复扫（`--resolve 64.29.17.67`，**52 个 sitemap URL 全量**）

| 指标 | 结果 |
|---|---|
| HTTP 状态码分布 | **52 × HTTP 200**（0 个非 200，0 个 `000`） |
| 零字节页面 | **0** |
| `battle pass` 命中页 | **0** |
| `free-to-play` / `completely free` 命中页 | 6 页，**逐页回读上下文后全部合法**：`/`、`/faq`、`/guides/faq-content` 为问句「Is SpiritVale free to play?」（答案 No）；`/guides/beginner-guide`、`/guides/classes-guide`、`/guides/job-change-reset` 为「Respecs are **completely free**」（洗点免费，与 S5 评测 `unlimited free skill and stat/attribute reset` 一致，非价格模型断言） |

**结论：全站口径已统一，无残留矛盾。**

---

## 6. 部署与线上验证

```
vercel CLI : 58.9.4（全局，未用 npx vercel）
构建       : pnpm install → ok ｜ pnpm build → ✓ Compiled successfully in 145ms → 57/57 静态页，0 error
部署       : dpl_EUqCQntHHERbn4DKN8KZKkPxAExL  status=Ready  target=production  created 2026-09-16 05:18:02 (+08)
部署 URL   : https://spiritvalewiki-47i5635oz-zhaoq0103s-projects.vercel.app
alias      : https://spiritvalewiki.vercel.app  （vercel inspect 确认 alias 指向本次部署）
```

### 6.1 受影响页面线上验证（`--resolve spiritvalewiki.vercel.app:443:64.29.17.67`）

| URL | HTTP | 字节数 | 旧断言 | 新断言 |
|---|:--:|---|:--:|:--:|
| `/` | **200** | **44,808** | ✅ 消失 | ✅ 存在 |
| `/faq` | **200** | **37,256** | ✅ 消失 | ✅ 存在 |
| `/about` | **200** | **23,248** | ✅ 消失 | ✅ 存在 |
| `/guides/faq-content` | **200** | **60,868** | ✅ 消失 | ✅ 存在 |
| `/guides/class-leveling-guide` | **200** | **71,678** | ✅ 消失 | ✅ 存在 |
| `/guides/leveling-guide` | **200** | **58,617** | ✅ 消失 | ✅ 存在 |
| `/guides/trading-market-guide` | **200** | **64,724** | ✅ 消失 | ✅ 存在 |
| `/guides/pets-mounts-guide` | **200** | **59,547** | n/a | ✅ `Unconfirmed` ×11 |
| `/guides/cosmetics-wardrobe-guide` | **200** | **69,727** | n/a | ✅ 存在 |
| `/guides/farming-resource-guide` | **200** | **69,789** | ✅ 消失 | ✅ 存在 |
| `/guides`（索引） | **200** | **128,197** | ✅ | ✅ |
| `/sitemap.xml` | **200** | **9,479** | — | — |
| `/ads.txt` | **200** | **59** | — | — |

> 字节数与此前 9/16 QA 记录（`/` 44,444 ／ `/guides/cosmetics-wardrobe-guide` 67,846 ／ `/guides/trading-market-guide` 63,952 ／ `/guides/pets-mounts-guide` 56,034 ／ `/guides/updates-patch-notes` 67,424）**均不同** → 证明线上确为本次新部署。

### 6.2 旧错误断言消失确认（线上逐串 grep = 0）

`no subscription, battle pass, or premium currency` ／ `completely free-to-play` ／ `Play Free on Steam` ／ `/about` 的 `free-to-play` ／ `Premium Subscription`（活跃断言）／ `Premium booster (cash shop)`（活跃断言）／ `Reduces all fees by 50%` ／ `Combine with XP Scrolls` → **全部 0 命中**（后者两串的剩余命中经逐条回读，均在 Correction 声明内）。

---

## 7. `[Unverified]` 待人工复核清单

> 以下为**一手来源不可达 / 无一手证据**项，本轮**未凭猜测改动**，单列待人工复核。

| # | 事项 | 状态 | 处置 |
|---|---|---|---|
| U1 | `steamcommunity.com` 讨论区与公告评论区 | ❌ 本机不可达（`HTTP=000`，延续 9/16 QA） | 未引用其中任何内容；**MUST NOT** 视为「无冲突」证据 |
| U2 | Reddit `r/SpiritVale` | ❌ 本机不可达（延续 9/3） | 同上 |
| U3 | `steamdb.info` 直连 | ❌ `403` | 0.14.0 公告的**存在性**仅经 WebSearch 摘要确认，**正文**已由 S4（Steam 官方存档页）逐字回读验证 → 引语可用；steamdb 本身**未**作为来源引用 |
| U4 | **2UpSkill / JeuxOnline 原文** | ⚠️ 本轮仅得检索摘要，**未取得全文直读** | 站内 `cosmetics-wardrobe-guide` frontmatter 的 Editorial 引语为**上轮（9/16）QA 全文直读**所得，本轮**未改动、未背书**；标 `[Unverified: 本轮未复读]`，建议下轮 deep 复读后确认逐字性 |
| U5 | `pets-mounts-guide` 全表（稀有度/属性/进化/训练/收藏） | ⚠️ 无任何官方来源 | 已全表标 `[Unconfirmed]` + 顶部横幅；**未删**。需人工/实测确认其真伪后决定去留 |
| U6 | `leveling-guide` XP Potions 的 NPC / Alchemy 来源 | ⚠️ 无官方来源 | 已标 `[Unconfirmed]`；**未删** |
| U7 | `cosmetics-wardrobe-guide` 的 `100p` 是否为**线上现值** | ⚠️ 官方旧公告（Playtest 期）数值 | 站内已标 `[Unconfirmed]`，本轮沿用，未改 |
| U8 | `p` 货币自 Ko-fi 切至「游戏内购买」后的**具体汇率/单价** | ⚠️ 官方未公布 | 未写入任何数字；仅引官方存在性表述 |
| U9 | FAQ「level cap 99」与 9/11 遗留「99 vs 100+」争议 | ⚠️ 本轮未涉及 | 沿用 9/11 遗留，建议与下轮事实核验同批处理 |

---

## 8. 规则闭环建议（写入 Profile）

1. **Profile 01/02（内容合规审计员）**：建议新增 — *核验「官方否定式断言」（`no X` / `purely Y` / `never Z`）时，MUST 拆成**原子子断言**逐条裁定，MUST NOT 整句判真伪*。本轮 FAQ 一句含 4 个子断言，其中「no premium currency」错、「no subscription」对、「no battle pass」无证据 —— 整句判会导致误删正确内容或保留错误内容。
2. **Profile 01/02**：建议新增 — *「无一手证据」与「有第一方反证」是两种不同处置：前者标 `[Unconfirmed]`，后者才可删除，且删除 MUST 留可见的 Correction 说明（保留可追溯性，避免读者以为从未写过）*。本轮 8 处编造项全部附 Correction 说明。
3. **Profile 05/06（QA 审核员）**：建议新增 — *引用 Steam 公告前 MUST 确认该公告**属于哪个 feed/阶段**（`ISteamNews` post-EA feed 不含 Playtest 期公告）；Playtest 期公告的数值 MUST 标注「Playtest 快照，线上现值未知」*。本轮 S2 的 post-EA feed（30 则）不含 0.14.0，若仅依赖该 feed 会误判「来源不存在」。
4. **Profile 06**：建议新增 — *站点级「付费模式」核验面 MUST 包含 `app/page.tsx`、`app/faq/page.tsx`、`app/about/page.tsx`、`lib/schema.ts`（尤其 `offers.price` 与 `genre`）四处；`price:'0'` + `genre:'Free-to-Play'` 是**结构化数据级**错误，影响 Google 展示，优先级等同正文错误*。
5. **新增待办**：`pets-mounts-guide` 需一次**实测/社区二次来源**核验（U5），因涉及 9 张表全表存废，不宜在无来源情况下继续沿用。

---

## 9. 自检

- 三处争议点**全部**取证并判定（🔴 #1 确证错误 / 🔴 #2 确证编造 / 🟡 #3 无法裁决）✅
- 三处**一起改**，未只改一处（避免制造新站内矛盾）✅
- 每个引语均**逐字**锚定官方原文；官方未说的标 `[Unconfirmed]`，**未二选一硬猜** ✅
- 编造项删除**均附 Correction 说明**；无证据项**标 `[Unconfirmed]` 未删** ✅
- 全站 grep 一致性复扫（源码级 + 产物级 + 线上 52 URL）✅
- 未编造来源 / 数字 / 玩家声音 ✅
- 未用 `npx vercel`（用全局 58.9.4）；未用 `npm install`（用 `pnpm`）；未用 `next/font/google` ✅
- 未 `git commit` / `git push`；未改 `.agent/expand-daily.json` / `build-history.json` / `STATS-游戏站点统计.md` ✅
- 未触碰 `sephiriawiki/` / `themoundwiki/` / `tearsofmetalwiki/` / `grainrotwiki/`（`git status` 那 4 站改动非本 Agent 所为）✅
- 线上验证全部经 `--resolve` 指定真实 IP，**无 `HTTP=000` / `size=0`** ✅
- 未把不可达通道（steamcommunity / Reddit）当作「无冲突」证据，已单列 U1–U2 ✅
