# spiritvalewiki 每日扩充 — 反馈采集与选题记录（2026-09-16）

> 执行：EXPAND-2026-09-16-spiritvale ｜ 岗位：玩家反馈分析师（17/18）→ 建站协调员（03/04）
> 上游：`docs/每日内容扩充计划.md`、`.agent/expand-daily.json`（本站 9/3–9/8、9/11 共 6 次 SKIP 历史）
> 下游：`.agent/qa-expand-spiritvale-9-16.md`
> 结果：**EXPANDED** — 产出 `cosmetics-wardrobe-guide`（1,471 词，站内 43 → 44 篇）
> 路径命中：**② system-inventory-driven**（路径①抱怨仍全部收敛，与 9/3–9/13 判定一致）

---

## 一、通道可用性（2026-09-16 实测，非沿用旧结论）

| 通道 | 实测 | 证据 |
|---|---|---|
| Steam appreviews API（recent, english, 100） | ✅ 可用 | `HTTP 200 / 122,780 B` |
| Steam appreviews API（negative, english, 100） | ✅ 可用 | `HTTP 200 / 127,606 B`；两批去重后 **142 条独立评测** |
| Steam ISteamNews `GetNewsForApp` v2（appid 3767850, count=200） | ✅ 可用 | `HTTP 200 / 48,578 B`（count=25）与 `/76,761 B`（count=200）；返回 **30 则官方公告**，最新 = **2026-09-10** |
| Steam 商店页 | ✅ 可用 | `HTTP 200 / 152,162 B`（完整 About This Game + 配置要求 + 发行商） |
| `api.steampowered.com` 首次直连 | ⚠️ 瞬时失败后恢复 | 首轮 `curl HTTP=000`；加 `--resolve api.steampowered.com:443:23.212.62.214`（8.8.8.8 解析值）即 200，系统 DNS 值随后也 200 —— 属**间歇性**，非通道不可用 |
| Steam 社区讨论区 / 公告评论区 | ❌ 不可用 | `steamcommunity.com` 直连 `HTTP=000`（系统 DNS=108.160.165.9 与 8.8.8.8 值 128.242.245.125 均失败） |
| Reddit | ❌ 不可用 | `www.reddit.com/r/SpiritVale/.json` `HTTP=000`（延续 9/3 起状态）→ **如实记为缺失，未编造任何 Reddit 内容** |
| steamdb.info | ❌ 403 | WebFetch `HTTP 403 Forbidden` |
| WebSearch / WebFetch（编辑站） | ✅ 可用 | 2UpSkill、JeuxOnline 全文直读成功 |

**样本置信度**：142 条 Steam 评测（日期覆盖 2026-08-23 → 09-15）+ 2 篇编辑站全文 + 30 则官方公告原文。Reddit 缺失，但本轮选题**不依赖抱怨样本**（见三、），故不影响结论成立；按 Profile 记为**中置信**。

---

## 二、路径① complaint-driven — 抱怨仍全面收敛

对 142 条独立评测做主题聚类（脚本正则计数）：

| 主题（正则命中条数） | 频率 | 站内覆盖 | 判定 |
|---|---|---|---|
| bot 泛滥 / 反 bot 不力（48）、误封 / 申诉无果（46） | **高频** | `account-ban-appeal-guide`（9/9） | 已覆盖，再写 = 自噬 |
| 组队依赖 / 单人打不动终局（26） | 高频 | `solo-guide` + `party-composition` | 已覆盖 |
| 服务器重启 / 掉线 / 回档（15） | 中高频 | `connection-server-guide` §Rollbacks | 已覆盖 |
| 崩溃 / 掉帧 / 优化（12） | 中频 | `connection-server-guide` | 已覆盖 |
| 职业平衡 / nerf（12，Weaver 为主） | 中频 | `class-tier-list` + 各职业页 | 已覆盖 |
| 地图过小 / 抢怪 / respawn 15–25s（11） | 中频 | `solo-guide` L28+L170、`beginner-guide` L59、`artifact-sets-guide`（~30 人上限） | 已覆盖 |
| 满级后无事可做 / Spire 是唯一终局（8） | 中频 | `endgame-guide` + `echoing-spire-endgame-guide` | 已覆盖 |
| 交易锁 / 交易受限（1，且为 8/25 批次文本镜像） | 低频 | 与 9/9 页同执法簇、同 support-ticket 通道 | **自噬红线**（延续 9/11、9/13 否决） |
| 退款 / 商店页宣传不符（11） | 中频 | 属执法簇与商店承诺簇 | 无独立新缺口 |

**结论：与 9/3–9/13 一致，抱怨无新增缺口。** 按 Profile 04「抱怨收敛 ≠ 没有缺口，此时 MUST 切换到②」，本轮不因此 SKIP。

## 三、路径② system-inventory-driven — 命中点

### 3.1 官方系统清单 × 站内覆盖矩阵

来源：Steam 商店页「About This Game」原文 + 30 则官方公告 + 0.31.0 公告全文。

| 官方明说的系统 | 站内覆盖 | 判定 |
|---|---|---|
| 230+ Monsters / 20+ World Bosses | `boss-guide`、`world-boss-chart`、`raid-boss-guide` | ✅ |
| 30+ maps / unique biomes | `dungeon-guide`、`leveling-guide` §Best Grinding Maps | ⚠️ 部分（见下·否决表） |
| 7 Base Classes + 8 Advanced Specializations | `classes-guide`、`advanced-classes-guide`、`class-tier-list`、9 篇单体职业页 | ✅ |
| **220+ Cards** | `cards-guide` | ✅ |
| **33 Artifact Sets** | `artifact-sets-guide`（9/12 产出） | ✅ |
| 430+ equipment types | `weapons-guide`、`gear-progression` | ✅ |
| Crafting / refining / gathering | `crafting-guide`、`farming-resource-guide` | ✅ |
| Vending stalls / player trading / shared economy | `trading-market-guide` | ✅ |
| PvP Arena | `pvp-arena` | ✅ |
| Pets / mounts | `pets-mounts-guide` | ✅（存在性） |
| PTR / publictest 测试分支 | `ptr-test-server-guide`（9/13 产出） | ✅ |
| **「almost limitless number of cosmetic options」+「All Microtransactions … purely cosmetic」+ 官方 cosmetic shop** | **❌ 零覆盖** | 🎯 **命中** |
| 「Cards and Artifacts are 2 important features」并列表述 | 9/12 已补齐 | ✅ |

### 3.2 命中点证据（可点击）

站内查重（`ls content/guides/` 全 43 slug + 全文 grep）：

```
wardrobe              → 0 命中（content/ + app/ + components/）
premium currency      → app/faq/page.tsx 1 处（且为「没有」的断言）
cosmetic conversion   → 0 命中
Mystery Pet Box       → 0 命中
Mystery Mount Box     → 0 命中
100p                  → 0 命中
appearance            → 0 命中
cosmetic（散见）       → 9 文件偶发提及，均为顺带一句，无专页
```

**官方一手来源（逐字锚定）**：

1. **Steam 公告 `[Update 0.14.0] Cosmetics Update`（2026-03-15）** —— 该系统的完整定义：
   - `Cosmetic items can be purchased from here, adding it permanently to your wardrobe across all characters`
   - `Equip conversion to cosmetic (100p)`
   - `World drop cosmetics like pets and mounts can be added/removed from wardrobe and traded`
   - `All premium cosmetics are account bound, world droppable monster pets and mounts are tradable`
   - `Mystery Pet Box: world drop that gives random monster pet` ／ `Mystery Mount Box: world drop that gives random monster mount`
   - boss-exclusive cosmetics；怪物可掉落自身 pet 版本；pets 定期拾取物品；mounts 非战斗移速 +40%
   - 该公告同时说明当时的 shop 货币（`p`）经 Ko-fi 捐赠获取，计划 EA 发售后改为 Steam 购买
2. **Steam 商店页原文**：`almost limitless number of cosmetic options`；`All Microtransactions in SpiritVale are purely cosmetic and do not affect gameplay`（标题 `Fair-To-Play. Never Pay-To-Win.`）
3. **Steam 公告 `[0.31.0] Dark Fortress`（2026-08-25，live 期）** —— 证明 cosmetic shop **在当前线上版本存在**：三条 shop bug 修复（`Fix: Dark Fortress mask and gear in cosmetic shop`、`Fix: Solaris Blade missing from cosmetic shop`、`Fix: Cyber Rogue Eyewear cosmetic is now being worn backwards`）+ 一整块 `Cosmetics` 新增清单（Umbra Knight Set、Kaeru 系列、Dawn Wings ×6、Kickstarter 设计者外观等）

**社区一手来源（Steam 评测 API 直读原文）**：

- 2026-08-30（156 小时）：`every item ingame can become cosmetic that cost a low amount of ingame currency, this includes pet and mount`
- 2026-09-07（304 小时）：`Is this a pay-to-win game? Definitely not. … The only things you can buy from the cash shop are cosmetics. They don't give you any stats or hidden stats.`
- 2026-09-13（116 小时）：`0 and I mean 0 P2W`

**编辑站（全文直读）**：

- 2UpSkill《Is SpiritVale Pay to Win? Full Monetization Review (2026)》：`is not pay to win`、`Once you've bought the game, that's it`、`There isn't a shortcut waiting behind a payment screen.`
- JeuxOnline《Présentation du MMORPG indé SpiritVale》：`fair-to-play, avec des microtransactions présentées comme purement cosmétiques et non pay-to-win`

**旁证**：SpiritVale JP Wiki（结构化工数据库，9/12 曾用）导航全表**无** cosmetic/wardrobe/外观分类 → 该缺口不只在站内，全网亦无结构化覆盖。

---

## 四、选题决策（四条件逐条）

| 条件 | 判定 | 依据 |
|---|---|---|
| **高频 ≥3 独立来源** | ✅ | 官方 3 源（商店页 + 0.14.0 公告 + 0.31.0 公告）／社区 3 源（3 位不同账号、不同日期、不同游玩时长的 Steam 评测直读原文）／编辑 2 源（2UpSkill、JeuxOnline **全文直读**）。三者围绕同一玩家问题：「商城到底卖什么 / 外观怎么来 / 是不是 pay-to-win」 |
| **具体** | ✅ | 可操作、可验证：wardrobe 是什么 → 三条获取路径（掉落 / 转换 / 购买）→ 绑定与可交易规则 → 是否 P2W |
| **真缺口** | ✅ | 见 3.2：`wardrobe` / `cosmetic conversion` / `Mystery Pet Box` / `appearance` 全站 **0 命中**；43 篇无一篇讲外观层。与 `pets-mounts-guide`（讲宠物/坐骑本体）、`trading-market-guide`（讲经济）**搜索意图不重叠** |
| **可溯源** | ✅ | 每个数字与引语均出自官方公告原文 / Steam 评测 API 直读 / 编辑站全文；两处不确定项（转换费 100p 是否为线上现值、Ko-fi→Steam 是否已切换）已在页内标 `[Unconfirmed]` |

### 4.1 历史 SKIP 触发条款复检（MUST）

| 条款 | 复检结果 | 判定 |
|---|---|---|
| **0.31.0 Dark Fortress 深度指南** —— 触发条件 = ≥2 独立非官方来源描述**实际机制** | ❌ 仍不达标。官方 news API 最新条目 = **2026-09-10 PTR**，无 0.31.x / 0.32.x；0.31.0 之后无新补丁。JP Wiki `misc:update` 页 `最后更新 2026/08/25`，条目仅到 0.30.10 且为摘要无机制细节。第三方对 0.31.0 机制的描述仍未出现第二家 | ❌ **不写**（且 0.31.0 官方内容 9/6 已入 `updates-patch-notes`，再写 = 自噬） |
| **交易锁 / trade lock 申诉** —— 触发条件 = 第二独立平台描述机制 | ❌ 未达标。142 条评测中匹配 `trade lock\|locked from trad\|trading restricted` 仅 **1 条**，且属 8/25 批次同文本镜像；无 Discord/Reddit/媒体第二平台。与 9/9 `account-ban-appeal-guide` 同 support-ticket 通道 | ❌ **不写**（自噬红线，延续 9/11、9/13） |
| 本轮选题是否踩 0.31.0 红线 | ✅ 否。仅把 0.31.0 的 **cosmetic shop bug 修复 + Cosmetics 清单**作为「shop 在线上存在」的存在性证据引用；**未**展开任何 0.31.0 战斗/机制内容 | ✅ |

### 4.2 本轮否决的候选（逐条理由）

| 候选 | 否决理由 |
|---|---|
| 0.31.0 Dark Fortress 机制深度指南 | 触发条件未达（见 4.1）；官方内容已入 `updates-patch-notes` → 自噬 |
| 交易锁申诉指南 | 有效来源 = 1 个平台（Steam 评测，同批文本镜像）；同执法簇 → 自噬 |
| 地图 / biome 全表指南 | 官方称「30+ maps」，但站内 `leveling-guide` §Best Grinding Maps by Level 已占「去哪练级」意图；第三方可直读的只有 gameguidesbox 练级点表 + JP Wiki 世界地图，**均为等级-地区对照**，与既有页搜索意图高度重叠 → 自噬风险高。可作为**下轮候选**（须先确认能否与 `leveling-guide` 划清界） |
| Gems 系统指南 | 商店页把 gems 列在收集项中，但 142 条评测 **0 次**提及、JP Wiki 无 gems 分类、官方公告仅在 0.31.0 出现一次 `Tenacity Gem` 平衡改动 → 来源密度不足以成篇，写则必然编造 |
| 满级无事做 / Weaver nerf / 抢怪 / 服务器回档 / 退款 | 全部命中既有页（见二、表格） |
| Dragon Knight / 高级神器与 Grimoires / PvP 重做 / 亚洲服 | 仍仅官方预告，无 ETA 无机制（延续 9/9–9/13 否决） |
| Steam Deck 设置 | 三源口径互相矛盾（延续 9/11 否决） |

---

## 五、产出

| 项 | 值 |
|---|---|
| slug | `cosmetics-wardrobe-guide` |
| title | How to Get Cosmetics in SpiritVale — Wardrobe Unlocks, Gear Conversion, and What the Shop Sells |
| 词数 | **1,471**（markdown 剥离后脚本实测；raw body 1,490）— 在 800–1500 红线内 |
| category / version / updated | Guides / EA / 2026-09-16 |
| sources 三层 | **Official 3 / Community 3 / Editorial 2**（共 8 条，含可点击可追溯链接） |
| `[Unconfirmed]` 标记 | 2 处（转换费 100p 是否为线上现值；p 货币是否已切至 Steam 购买） |
| 站内攻略总数 | 43 → **44** |
| 双向 Scope note | 新增页 §8 ↔ `pets-mounts-guide` §4.2 ↔ `trading-market-guide` §1.2 各加一条互指说明 |
| 改动文件 | 新增 1 篇；`pets-mounts-guide.md`、`trading-market-guide.md` 各 +1 条 scope note（未改其余内容） |

### 5.1 部署与线上验证

```
部署    : dpl_8JyPeBpjp4JQg18a6Z1ZvNiQndEH  （Ready / production）
alias   : https://spiritvalewiki.vercel.app  → 本次新部署（vercel inspect 确认）
```
（首次 `vercel deploy` 返回 `Not authorized`，按 Profile 04 立即重试 1 次即成功。）

| URL（`--resolve 64.29.17.67`） | HTTP | 字节数 |
|---|---|---|
| `/guides/cosmetics-wardrobe-guide` | **200** | 67,846 |
| `/guides/pets-mounts-guide`（含入链） | 200 | 56,034 |
| `/guides/trading-market-guide`（含入链） | 200 | 63,952 |
| `/guides/updates-patch-notes` | 200 | 67,424 |
| `/` | 200 | 44,444 |
| `/guides`（索引） | 200 | 128,169 |

内容级抽查（线上 HTML grep）：`Mystery Pet Box` ×6、`Equip conversion to cosmetic` ×4、`0 and I mean 0 P2W` ×4、`Unconfirmed` ×2、`Scope note` 在两篇邻页各 ×2。

**入链可用性抽查**（9/11 曾发现 `/guides/tier-list` 线上 404）：
- 新页 6 条站内出链 **6/6 = 200**
- 站内索引页 44 条 `/guides/*` 出链**全量扫描，0 条 BROKEN**（9/11 的 404 未复发）
- 指向新页的入链：`/guides` 索引 ×1、`pets-mounts-guide` ×2、`trading-market-guide` ×2，全部 200

---

## 六、遗留（交主 Agent，含「推翻旧判断」级线索）

1. 🔴 **【本页直接相关】`app/faq/page.tsx:13` 与官方公告冲突**：该行断言 `There is no subscription, battle pass, or premium currency`，而官方 0.14.0 Cosmetics Update 明确记录了一个 premium currency（`p`，`Equip conversion to cosmetic (100p)`）。同时站内 `class-leveling-guide.md:166` 写 `Premium Subscription … Cash Shop`、`trading-market-guide.md:37` 写 `Premium Pass … from the cash shop` —— **FAQ 与站内另外两页亦互相矛盾**。本轮未擅自改动（无权威当前来源可裁决线上商城是否仍用 `p`），但新页已用 `[Unconfirmed]` 如实呈现。**建议单独立「事实核验」任务**。
2. 🔴 **疑似编造的 P2W 商城条目**：`class-leveling-guide.md:164-166`（XP Scroll Small/Large、Premium Subscription）、`leveling-guide.md:84`（Premium booster）、`trading-market-guide.md:37`（Premium Pass，`Reduces all fees by 50%`）均声称「可从 cash shop 买到影响数值/经济的物品」，与商店页 `All Microtransactions … purely cosmetic and do not affect gameplay`、2 条 Steam 评测（「只有外观、无隐藏属性」）及 2UpSkill 结论**直接冲突**。且 `leveling-guide.md:84` 与 `class-leveling-guide.md` 对 XP 药水的来源口径也不一致（NPC/Alchemy vs Cash Shop）。措辞与数值呈明显模板化特征。**建议列入下一轮 QA deep 的编造检查**。
3. 🟡 **`pets-mounts-guide.md` 的稀有度/属性/进化表无可溯源来源**：官方与社区证据一致指向「pets 是 world-drop cosmetic，存于 wardrobe，怪物可掉落自身 pet 版本，Mystery Pet Box 随机开出」；该页的 `Iron Shell Turtle` / `Ember Fox` / `Evolution Stones` / `Mythic Core` / 逐级进化表在官方公告、Steam 评测、JP Wiki 中**均无踪迹**。本轮**未改动**该页（只加了一条 scope note），建议单独立项核验。
4. **0.31.0 长期单源**：`updates-patch-notes` 的 0.31.0 章节仍为官方单一来源，措辞已如实声明；本轮新增的 cosmetic shop 证据不改变该口径。
5. **下轮候选**：地图/biome 全表（须先与 `leveling-guide` 划清 intent 边界）、Gems（待来源密度足够）。

---

## 七、自检

- 两条路径**均实跑**（① 142 条评测主题聚类；② 商店页+30 则公告系统清单 × 44 slug 覆盖矩阵）✅
- 未编造玩家声音 / 来源链接 / 数字；所有数字均标来源或 `[Unconfirmed]` ✅
- 写前已 `ls content/guides/` 全 slug 查重 + 全文 grep；与邻页加**双向** scope note ✅
- 未改动其它站点目录；未 commit / push；未动 `.agent/expand-daily.json` / `build-history.json` / `STATS-游戏站点统计.md` ✅
- 未用 `npx vercel`（用全局 `vercel`）；未用 `npm install`（用 `pnpm`）；未用 `next/font/google` ✅
- 采集预算：WebSearch 5 次 + WebFetch 5 次 + curl 约 14 次，**未超 25 次上限** ✅
