# SEPHIRIA 内容扩充记录 — 9/16

> 模式: expand-feedback | 站点: sephiriawiki | 游戏: Sephiria (TEAM HORAY, Steam app 2436940, 1.0 = 2026-07-31)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）| 日期: 2026-09-16
> 结果: ✅ **EXPANDED** — 新增 `combo-system-guide`（站内 0 覆盖的官方核心系统）+ P0 校准 4 项（Steam 标签实测、价格页改版、FAQ 一致性、Very Positive 清零）

---

## 一、P0 前置项（扩充前强制）

### 1. 9/13 fact-sweep 未提交 diff 全量复核（7 文件）

`git diff sephiriawiki/` 覆盖：`app/faq/page.tsx`、`app/page.tsx`、`content/guides/beginner-guide.md`、`content/guides/faq-content.md`、`content/guides/full-release-guide.md`、`content/home-content.md`、`lib/schema.ts`。

**结论：无新增无源数字。** diff 内容为两处词元替换（`2,690` → `2,742`、`checked September 13, 2026` → `checked September 16, 2026`）加措辞；所有数字均可追到既有 Official/Community 来源行。未发现 9/13 引入的新断言。

### 2. Steam 标签重新实测（今日，非沿用 9/13）

**用 `store.steampowered.com` 英文商店视图 `?l=english&cc=us` + 全语言 appreviews API 实测：**

| 读数 | 数值 | 标签 | 口径 |
|------|------|------|------|
| 英文商店页文案 | **97% of the 2,742** user reviews in your language are positive | Overwhelmingly Positive | 商店页「in your language」 |
| 英文商店页 30 天 | 95% of the 2,452（近 30 天） | — | 同上 |
| `itemprop="reviewCount"` | 2743 | — | HTML 属性 |
| appreviews `language=english&purchase_type=all` | 2,850 / 2,941 = **96.9%** | Overwhelmingly Positive | API 英文池 |
| appreviews `language=all` | **11,703 / 12,395 = 94.4%** | **Very Positive** | API 全语言池（更低、不同标签） |
| 韩语商店视图 | 압도적으로 긍정적 | — | 本地化视图 |
| 中文商店视图 | 好评如潮 | — | 本地化视图 |

**处理**：站内 `2,690` → **`2,742`**，`September 13, 2026` → **`September 16, 2026`**，并**保留作用域限定语**（"across the store page's English-language Steam reviews"）。**未做全局标签替换** —— 全语言池确实是 Very Positive，两者不可互换引用；该口径差异已写进 `price-increase-and-worth-it-guide` 的正文与 sources。

**校准陷阱留档**：英文商店视图 97%/2,742 与 API 全语言池 94.4%/Very Positive 是两个不同的数，历史上曾被混用。

### 3. 站内 `Very Positive` 清零

`grep -rniE "Very Positive|very positive" sephiriawiki/`（排除 node_modules 与 .next）= **0 命中**。✅

### 4. `.agent/qa-report.md` todo #7 结清（价格页过期项）

`price-increase-and-worth-it-guide.md` 此前遗留「still showed $14.99」的过期断言（9/15 MUST 复核，已逾期）。本轮实测商店页：`game_purchase_price` = **$17.99**、`data-price-final="1799"`、`data-discount="0"`、`itemprop price="17.99"`。改动：

- 标题/description/`updated` → 涨价已落地口径（「It's $17.99 Now」），决策章节从「买不买」改为**回顾性**「Was it worth buying before the deadline?」
- 新增「The one way to still pay less than $17.99」小节 + 三个 -10% 捆绑包实测表（Heroes of Hammerwatch II $34.18 / Dungreed $25.18 / Ascend to ZERO $26.98），并用商店页 `m_nFinalPriceWithBundleDiscount` **1619**（包 876926）给出 Sephiria 分摊价 **$16.19** —— 属 Steam 自己的捆绑算术，非本站推算
- 评测计数同步为 2,742 / 2,452，并写入全语言池 11,703/12,395 的作用域说明
- 「still showed $14.99」字样已不存在（现存 10 处 `14.99` 全部是 `$14.99 → $17.99` 的历史对比）

---

## 二、反馈采集（2026-09-16 实采）

| 渠道 | 状态 | 结果 |
|------|------|------|
| **Steam appreviews API**（`store.steampowered.com/appreviews/2436940`） | ✅ 200 | 多组筛选（negative / recent / all-language）共约 **780 条去重评测**入库；⚠️ 必须带 `json=1`，否则 cursor 有值但 reviews 为空数组 |
| **Steam 官方公告（partner-events API）** | ✅ 200 | `events/ajaxgetpartnereventspageable/?appid=2436940&count=50` 取回 **50 条公告全文**（含 `announcement_body.body`），覆盖 0.7.50 → 1.0.33 全量更新史 —— 本轮决定性来源 |
| **Steam 官方 RSS**（`feeds/news/app/2436940`） | ⚠️ 部分 | RSS XML 可读；`format=json` 仍返回 XML（历史已知问题，未采信该参数） |
| **steamcommunity.com 讨论区** | ❌ 不可达 | 解析到 `108.160.165.53`（Dropbox IP，DNS 投毒）→ HTTP 000，**记为不可用，未采信、未编造** |
| **Reddit** | ❌ 未采用 | 本机通路不可用，**未用于支撑任何事实** |
| **第三方攻略/媒体** | ⚠️ 低置信 | doyo.cn（中文 build 文）、note.com（日文属性 build 文）作为 Community 层；namu.wiki 页面 WebFetch ECONNRESET，改用检索索引摘要 |

> 采集声明：所有未取到的渠道一律记「不可用」，未以任何形式补写内容。

## 三、路径①：抱怨驱动（先跑，结论为「收敛」）

780 条去重评测的抱怨聚类（按频次）：

| 抱怨簇 | 频次 | 落点判定 |
|--------|------|---------|
| 联机延迟 / 断线 / 服务器权威判定（2–3 秒 lag spike 毁掉一局长跑） | 最高簇 | 已有 `multiplayer-connection-fix-guide`、`coop-freeze-recovery-guide`、`coop-guide` |
| build 多样性不足 / 后期 power creep | 高 | 已有 `builds-guide` + 7 篇武器 build 分册 |
| Hard Mode 难度曲线、后期变简单 | 高 | 已有 `hard-mode-guide`、`endgame-guide` |
| 刷取时长 / 重复劳动 | 中 | 已有 `farming-guide` |
| 服装属性 trade-off（一件定一局） | 中 | 已有 `costume-stats-and-character-unlocks-guide` |
| 存档丢失 / 崩溃 | 中 | 已有 `save-file-guide`、`crash-launch-black-screen-fix-guide` |

**路径①结论：抱怨收敛，全部落点已有页 ⇒ 无新缺口。** 按计划红线，此时 **MUST NOT 直接判 SKIP**，MUST 切路径②。

## 四、路径②：系统盘点驱动（命中）

用官方公告（一手，50 条全文）列出游戏**官方明说的系统清单**，逐项对照站内 38 篇 slug：

| 官方系统 | 站内覆盖 | 判定 |
|----------|---------|------|
| **Combo System（官方原话「one of Sephiria's core systems」）** | **0 篇**（`combo` 全站仅出现在「attack combo」连招义） | ✅ **缺口** |
| Fruit Skewer | 0 命中 | 同上（Combo 系统子系统，并入本篇） |
| Bond Artifact | 0 命中 | 同上（并入本篇） |
| Tablet Combiner | 0 命中 | 官方仅一句「synthesize Tablet」，无机制细节 → 不独立成篇 |
| Dice Conversion / Imprint / Subspace / Ancient Records | 0 命中 | 官方描述不足以支撑单篇 → 不写 |
| Journal（含 'Combo Effects' list） | 0 命中 | 并入本篇 |

**决策：写 Combo System。** 理由：① 官方把它定义为**核心系统**，且 `0.9.1` 是**专门为它做的公开 beta 转正**（0.9.3 公告原话：*"The 0.9.1 update is the official version that incorporates the final changes from the 'Combo System' public beta."*）—— 一个官方级别如此之高、站内整块空白的系统；② 官方公告对自身系统定义是一手权威来源，逐字锚定即合规；③ 内容量足够（等级阶梯 + 具名 combo 表 + Bond Artifact + Fruit Skewer + 排障）。

**主动放弃的历史线索**：**武器升级素材刷取**（Copper / Luminous / Apex，站内 0 命中）。9/9 曾因「单一来源（xmodhub）+ 命名冲突（Lunar vs Luminous）」否决。本轮复核仍未找到 ≥2 条一致来源，命名冲突未解决 → **维持否决，不留待办**。历史死线索「silent hotfix」已连续 3 日无进展，本轮未追。

## 五、查重：现有 38 slug 全比对

本轮前站内 38 篇：artifacts / beginner / boss / builds / chapter-6-final-boss / chapter / controller-casting-keybind-fix / controls-settings / coop-freeze-recovery / coop / costume-stats-and-character-unlocks / costumes / crash-launch-black-screen-fix / crossbow-build / dagger-build / endgame / faq-content / farming / full-release / game-length / greatsword-build / hard-mode / inscriptions / katana-build / multiplayer-connection-fix / mystic-pot / patch-1-0-31-build-changes / potions-consumables / price-increase-and-worth-it / save-file / secret-rooms / solo / speedrun / staff-build / sword-shield-build / tablets / talents / weapons。

**`combo`（系统义）= 0 覆盖，`fruit skewer` = 0，`bond artifact` = 0 —— 确认真缺口。**

**自噬防线（双向 Scope note）**：新篇明确写「只覆盖 tag 系统」，并把三处最易混淆的邻页做**反向指回**：
- `artifacts-guide.md` — 新增 FAQ「Do artifacts trigger combos?」+ Related Guides 首条指向新篇
- `tablets-guide.md` — 新增 FAQ「Are tablets the same thing as combos?」（tablet 管**摆放**、combo 管**标签**）+ Related Guides 首条
- `patch-1-0-31-build-changes-guide.md` — Related Guides 新增一条（引出本页所列 combo 修复）

## 六、成篇：`combo-system-guide.md`

- 标题：**Sephiria Combo System — How to Activate Combos, Bond Artifacts and the Fruit Skewer**（问题导向）
- 正文 **1,495 词**（800–1500 红线内，精写不凑数）
- frontmatter 对齐既有 38 篇：`category: Mechanics` / `version: "1.0"` / `updated: 2026-09-16` / 11 个 keywords / `related` 7 项
- sources 三层：
  - **Official** = 公开 beta 公告全文（系统定义、具名 combo、Bond Artifact 定义与「约 12 个」、Fruit Skewer 定义）+ 0.9.1/0.9.8/0.10.0/0.10.6/0.10.8/0.10.10/0.10.13/0.10.15(含 0.10.14/0.10.16)/0.11.0/0.11.7/1.0/1.0.23/1.0.26/1.0.31/1.0.33 逐条核验
  - **Community** = namu.wiki 神器页（tag 列表）、doyo.cn 两篇中文 build 文、note.com 日文属性 build 文
  - **Editorial** = 标签层与掉落层关系的白话解释、「进本前设、不是本中设」的框架、[Unconfirmed] 判定规则
- 全部数字均逐条对官方原文核验（见下）

### 数字核验台账（逐条对官方原文）

| 篇内断言 | 官方原文 | 出处 |
|----------|---------|------|
| Combo 2/4/6/8/10 阶梯（Companion Combo 各档数值） | `(2 Combo) Companion Damage 8%→6%` … `(10 Combo) Newly added: Companion Damage 20%, Companion Revive Time Haste 100%` | 0.9.8 |
| L10 Revive Time Haste 100% → 40% | `Companion combo level 10 'Companion Revive Time Haste' stat value changed from 100% → 40%` | 0.10.6 |
| 「Most artifacts are now assigned #combos」 | 原句 | beta 公告 |
| Fruit Skewer 定义 | `tools that can increase or decrease the drop rates of related combo items, which you can set before entering an expedition` | beta 公告 |
| 容量 6 格（自 5 提升） | `Default capacity changes from 5 to 6.` | 0.10.8 |
| 普通果 +50%、同种最多 3 个、adaptive(carrot) 25% | `Regular Fruit (+): Increases by 25%→50% per fruit. Can consume up to 2→3 of the same fruit. (Note: adaptive rate (carrot) remains at 25%)` | 0.10.8 |
| 冰冻果 −50%（0.10.6 起双倍） | `-(minus)' Fruit Skewers … now apply double the reduction (i.e., -50% per '-')` | 0.10.6 |
| 冰冻果不吃 carrot | `Frozen Fruit (-): The adaptive rate effect of 'carrot' does not apply to frozen fruits.` | 0.10.8 |
| Bond Artifact 默认吃 adaptive，carrot 时翻倍 | `Even if adaptive rate (carrot) is not applied, the adaptive rate is applied by default. (When carrot is applied, it is doubled)` | 0.10.8 |
| 0.10.6 掉率随 combo 数上调 | `Bond Artifact drop rates have been adjusted to appear more frequently as the number of acquired combos increases.` | 0.10.6 |
| 「Hard Mode 20–30 层以上胜率降约 3–4%」 | `we identified a roughly 3–4% decrease in win rates in Hard Mode stages 20–30 and above` | 0.10.8 |
| Bond Artifact 定义 + 「至少 1 级两个 combo」触发 | `unique artifacts that connect two combos` / `They appear as artifact rewards when you activate at least level 1 of the two corresponding combos.` | beta 公告 |
| 约 12 个 Bond Artifact | `Currently, approximately 12 bond artifacts are implemented` | beta 公告 |
| 0.901.0 新增 5 个 | `Five Bond Artifact have been added.` | 0.901.0 |
| 0.10.10 外观规则变更（双条件并列） | `Added to the drop table when both related combos are activated` / `Added to the drop table when one of the related combos is activated` | 0.10.10 |
| Magitech Electrocute 180% / 2 秒 / 叠 2 | `A debuff that deals 180% of lightning attribute damage after 2 seconds. … Stacks up to 2 times` | beta 公告 |
| Solarblade 基础数 +1 / 范围 +50% / 下落 +33% | `Base solar blade count +1, solar blade acquisition range increased by 50%, blade fall speed accelerated by 33%` | 0.900.6 |
| Wisdom L20：每类 combo 伤害加成 4% → 7% | `Level 20 effect: Damage increased per active combo type from 4% to 7%.` | 0.10.0 |
| 0.10.6 White Paper「未被计入部分 UI」 | `Fixed a bug where item combos granted by White Paper were not being counted in some UI elements (e.g., item rewards).` | 0.10.6 |
| 0.10.16 Chalcedony Key / White Paper 显示虚高 | `Chalcedony Key, White Paper: Fixed an issue where the combo increase was displayed as if it was applied even though it was not actually applied.` | 0.10.15 公告内 0.10.16 段 |
| 1.0.31 White Paper 双 combo 图标 | `Both combo icons are now displayed when two combos apply.` | 1.0.31 |
| 0.11.0 Magitech=10 时伤害被砍 50% | `Fixed an issue where damage would be reduced by 50% if Magitech combo was 10.` | 0.11.0 |
| 0.11.7 激活提示不显示 | 见 0.11.7 公告 | 0.11.7 |
| 1.0.23 Alchemy Combo 与 Side Bag 平板 | `Alchemy Combo: Fixed an issue where the effect did not trigger when a Tablet was obtained into the Side Bag.` | 1.0.23 |
| 1.0.26 Glacier/Ember/Magitech 的 Stage 6 效果 | `Fixed a bug where the Stage 6 effects of the Glacier, Ember, and Magitech combos did not work properly.` | 1.0.26 |
| 1.0 加入 Fruit Skewer 的 Destiny Inscription 任务 | `A Destiny Inscription quest for the Fruit Skewer has been added.` | 1.0 |
| 'Combo Effects' list 在 journal | `You can now view the 'Combo Effects' list in the journal.` | beta 公告 |
| 0.9.8 起 Combo Activation UI 不挡背包 | `You can now interact with the inventory even while the Combo Activation UI popup is displayed.` | 0.9.8 |
| 0.9.1 = beta 转正版本 | `The 0.9.1 update is the official version that incorporates the final changes from the 'Combo System' public beta.` | 0.9.3 |
| Curse = debuff / Negotiation = leaf | `Curse is a support combo related to debuffs, and Negotiation is a support combo related to leaf acquisition.` | 0.10.6 |
| Elemental = 强化最高元素属性 | `Elemental is a support combo that enhances the 'highest elemental attribute'.` | 0.10.10 |

**本轮自查纠错 1 处（写完后复核发现）**：初稿把「Chalcedony Key / White Paper 显示虚高」的修复归到 **0.10.15**，实际该行位于「0.10.15 Update」公告正文里的 **0.10.16** 小节 → 已改为 **0.10.16**，并在 sources 里注明该公告正文同时携带 0.10.14 与 0.10.16 两节。

**另一处表述收紧**：0.10.10 的 Bond Artifact 外观规则原文是两个并列 bullet（both / one），初稿写成「now adds them when either related combo is active, not only when both are」属**超出原文的推断** → 改为逐字锚定原文两条 bullet，另起一句 `[Editorial]` 才给出合并解读。

**唯一 `[Unconfirmed]`**：frontmatter Editorial 层声明「无法追到 ≥3 独立来源的断言一律标 [Unconfirmed]」的规则本身；正文无未标来源的精确数值。

## 七、本轮改动（全部在 sephiriawiki/ 内）

**新增 1 篇**
- `content/guides/combo-system-guide.md` — 1,495 词，sources 三层，数字逐条对官方原文核验

**P0 校准（4 项）**
- `app/page.tsx`、`app/faq/page.tsx`、`content/guides/faq-content.md`、`content/guides/beginner-guide.md`、`content/guides/full-release-guide.md`、`content/home-content.md`、`lib/schema.ts` — Steam 评测计数 2,690 → **2,742**、日期 → 2026-09-16，作用域限定语保留
- `content/guides/price-increase-and-worth-it-guide.md` — 涨价后实测校准，决策章节改回顾性，新增捆绑包 $16.19 路径（见 §一.4）

**双向 Scope note（防自噬）**
- `content/guides/artifacts-guide.md`、`content/guides/tablets-guide.md`、`content/guides/patch-1-0-31-build-changes-guide.md` — 各加一条反向链接；前两篇另加一条 FAQ 明确 combo ≠ artifact / combo ≠ tablet

## 八、P0 遗留与建议

1. **全语言池 vs 英文池的口径** —— 站内已统一为「英文商店页口径 + 显式限定语」，并在价格页写明全语言池是 **Very Positive**。**建议写入 06 Profile**：Steam 评分引用的 MUST 是「标签 + 作用域 + 实测日期」三元组，MUST NOT 出现裸的「the Steam rating is X」。
2. **价格页长度** —— 校准后约 2,100 词，超出 800–1500 的日常扩充红线。属**既有页校准**而非新写，未强行删减事实（涨价后捆绑包是新的决策信息）。**建议主 Agent 明确「校准类改动不受 1500 词上限约束」**。
3. **appreviews 必须带 `json=1`** —— 缺该参数时 cursor 有值但 `reviews` 为空数组，极易误判为「无数据」。**建议写入 18-Profile**。
4. **武器素材刷取线索（Copper / Luminous / Apex）** —— 本轮仍未达 ≥2 一致来源且命名冲突未解，**维持 9/9 否决，不留待办**。
5. **steamcommunity.com 讨论区** —— 本机解析到 Dropbox IP（DNS 投毒），讨论区维度长期缺失。建议主 Agent 统一排查或固化 `--resolve` 目标。

## 九、自检
- 改动全部落在 sephiriawiki/ 内 ✅；未串站 ✅；未编造玩家声音/链接/数字 ✅；未 commit/push ✅
- 两条选题路径均实跑（① 收敛 → ② 命中）✅
- QA quick 已出（`.agent/qa-expand-sephiria-9-16.md`）✅
