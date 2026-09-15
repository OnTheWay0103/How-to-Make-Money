# QA 报告 — QA-EXPAND-SEPHIRIA-9/16

- 日期: 2026-09-16
- 模式: quick（残留扫描 + 编造检查 + 产物级验证）
- 审核员: QA 审核员（岗位卡 `docs/agents/05-岗位卡-QA审核员.md` + Profile `docs/agents/06-Profile-QA审核员.md`）
- 范围: sephiriawiki 本轮 1 新增指南 + 4 项 P0 校准（含 1 篇既有指南改版）+ 3 篇双向链接
- 结论: ✅ **PASS**（批准部署；线上下线已复验）

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `sephiriawiki/content/guides/combo-system-guide.md` | 🆕 新增 | Sephiria Combo System — 38→39 篇，1,495 词 |
| 2 | `sephiriawiki/app/page.tsx` | ✏️ P0 校准 | Steam 评测计数 `2,690` → **`2,742`**、日期 → 2026-09-16（2 处：FAQ_ITEMS + featured 文案） |
| 3 | `sephiriawiki/app/faq/page.tsx` | ✏️ P0 校准 | 同上（FAQ_ITEMS） |
| 4 | `sephiriawiki/content/guides/faq-content.md` | ✏️ P0 校准 | 同上 |
| 5 | `sephiriawiki/content/guides/beginner-guide.md` | ✏️ P0 校准 | 同上 |
| 6 | `sephiriawiki/content/guides/full-release-guide.md` | ✏️ P0 校准 | 同上 |
| 7 | `sephiriawiki/content/home-content.md` | ✏️ P0 校准 | 同上（2 处） |
| 8 | `sephiriawiki/lib/schema.ts` | ✏️ P0 校准 | JSON-LD 内评测计数（1 处） |
| 9 | `sephiriawiki/content/guides/price-increase-and-worth-it-guide.md` | ✏️ P0 校准（改版） | 涨价已落地，决策章节改回顾性，新增捆绑包 $16.19 路径 |
| 10 | `sephiriawiki/content/guides/artifacts-guide.md` | ✏️ 防自噬 | 新增 FAQ「Do artifacts trigger combos?」+ Related Guides 反向链接 |
| 11 | `sephiriawiki/content/guides/tablets-guide.md` | ✏️ 防自噬 | 新增 FAQ「Are tablets the same thing as combos?」+ Related Guides 反向链接 |
| 12 | `sephiriawiki/content/guides/patch-1-0-31-build-changes-guide.md` | ✏️ 防自噬 | Related Guides 反向链接一条 |

## 二、Residue 扫描（sephiriawiki）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` / `{{%` | ✅ 0 命中（`content/ app/ components/ lib/`） |
| 模板占位符 `lorem ipsum` / `TODO:` / `FIXME` / `REPLACE_ME` / `placeholder` | ✅ 0 命中 |
| 跨站游戏名 / 工作室名（`EX-Mod` 定向扫描 + SpiritVale / Witchspire / Mistfall / Aincrad / The Mound / Grain Rot / Tears of Metal / Skills & Raids / taival 全覆盖） | ✅ 0 命中 |
| 他站域名（`spiritvalewiki` / `witchspirewiki` / `mistfallhunterwiki` / `aincradwiki` / `themoundwiki` / `grainrotwiki` / `tearsofmetalwiki`） | ✅ 0 命中 |
| JSON-LD / schema 内域名 | ✅ 仅 `sephiriawiki.vercel.app` |
| 内链完整性（全 39 篇引用集合 vs `content/guides/*.md` 实际集合） | ✅ **38 个被引用 slug 全部存在，0 悬空** |
| 新篇 frontmatter `related:` 7 项 | ✅ 全部存在（含 `patch-1-0-31-build-changes-guide`） |
| 新篇 CJK 泄漏 | ✅ 0 命中（既有篇中的中文属**正当引用**：中文 Steam 评测原文、中文社区 build 名「电刀鹿」等，非残留） |
| 英文标记规范（`[Unconfirmed]` 而非 `[待确认]`） | ✅ 新篇无中文标记 |

## 三、编造检查（新增篇逐条对官方原文）

**方法**：不依赖第三方聚合，直接用 `store.steampowered.com/events/ajaxgetpartnereventspageable/?appid=2436940&count=50` 拉回**官方公告全文 50 条**（0.7.50 → 1.0.33），逐条 grep 核验新篇的每一个精确数值。

**核验结果：新篇 30 项精确断言全部命中官方原文**，包括：

| 断言 | 官方原文出处 |
|------|-------------|
| Combo 2/4/6/8/10 阶梯 + Companion Combo 各档数值 | 0.9.8 |
| Companion Revive Time Haste 100% → 40% | 0.10.6 |
| 「Most artifacts are now assigned #combos」 | Combo System 公开 beta 公告 |
| Fruit Skewer 定义（逐字） | 同上 |
| Fruit Skewer 容量 5 → 6 | 0.10.8（`Default capacity changes from 5 to 6.`） |
| +50% / 同种最多 3 个 / carrot 25% | 0.10.8 |
| 冰冻果 −50%（0.10.6 起双倍） | 0.10.6 |
| 冰冻果不吃 carrot；Bond Artifact 默认吃 carrot 且翻倍 | 0.10.8 |
| Bond Artifact 定义 + 「至少 1 级两个 combo」触发 + 「约 12 个」 | beta 公告 |
| 0.901.0 新增 5 个 Bond Artifact | 0.901.0 |
| 0.10.6 / 0.10.10 掉率规则两次调整 | 0.10.6、0.10.10 |
| Magitech Electrocute 180% / 2 秒 / 叠 2 | beta 公告 |
| Solarblade +1 / +50% / +33% | 0.900.6 |
| Wisdom L20：每类 combo 伤害加成 4% → 7% | 0.10.0 |
| White Paper 未被计入部分 UI（0.10.6）/ 显示虚高（0.10.16）/ 双 combo 图标（1.0.31） | 0.10.6、0.10.15 公告内 0.10.16 段、1.0.31 |
| 0.11.0 Magitech=10 伤害被砍 50% / 0.11.7 激活提示 / 1.0.23 Alchemy+Side Bag / 1.0.26 Stage 6 效果 | 各自公告 |
| 1.0 加入 Fruit Skewer 的 Destiny Inscription 任务 | 1.0 |
| 'Combo Effects' list 在 journal；0.9.8 起 Combo Activation UI 不挡背包 | beta 公告、0.9.8 |
| 0.9.1 = 公开 beta 转正版本 | 0.9.3（`The 0.9.1 update is the official version that incorporates the final changes from the 'Combo System' public beta.`） |

**本轮自查发现并已修正 2 处（写完后复核）：**

1. **版本归属错误** —— 初稿把「Chalcedony Key / White Paper 显示虚高」的修复归到 **0.10.15**。实际上该行位于「0.10.15 Update」**公告正文里的 0.10.16 小节**（该公告同时携带 0.10.14 / 0.10.15 / 0.10.16 三节）。→ 已改为 **0.10.16**，并在 sources 内注明该公告的分节结构，避免后续复核再误读。
2. **超出原文的推断** —— 0.10.10 的 Bond Artifact 外观规则，原文是两条并列 bullet（`when both related combos are activated` / `when one of the related combos is activated`），初稿写成「now adds them when either related combo is active, **not only when both are**」，属对原文的解读而非原文。→ 已改为**逐字锚定两条 bullet**，另起一句 `[Editorial]` 才给出合并解读，符合「超出官方原文的推断 MUST 标注」红线。

**未验证 / 不可用通道（如实记录，未编造）**：
- `steamcommunity.com` 讨论区直抓 = **HTTP 000**（本机 DNS 投毒，解析到 `108.160.165.53` = Dropbox IP）→ **未采信、未补写**
- Reddit 通路不可用 → **未用于支撑任何事实**
- `namu.wiki` 页面 WebFetch `ECONNRESET` → 改用检索索引摘要，相关断言在篇内标 `[Community]`

**结论：0 编造。** 无虚构 Boss / 武器 / 角色 / 系统名；无无法验证的精确数值；无编造的评分或销量。

**注**：价格页校准中新增的 `$16.19`（Sephiria 在捆绑包中的分摊价）**不是本站推算**，取自商店页自身字段 `m_nFinalPriceWithBundleDiscount: 1619`（包 `876926`），篇内已注明「Steam 的捆绑算术，非我们的」。

## 四、产物级验证（Profile 06 强制，不止于源码阅读）

本地 `pnpm build` 产物与线上下载双查：

| 检查项 | 本地产物 | 线上 |
|--------|---------|------|
| 新篇 HTML 存在 | ✅ `.next/server/app/guides/combo-system-guide.html` = **69,704 bytes** | ✅ **HTTP 200 / 70,024 bytes** |
| 表格分隔行渲染缺陷（`<td>-------</td>` 垃圾行） | ✅ **0 命中** | ✅ **0 命中** |
| 表格实际渲染行数 | 19 | 19 |
| `<title>` | — | ✅ `Sephiria Combo System — How to Activate Combos, Bond Artifacts and the Fruit Skewer · Sephiria Wiki` |
| 关键内容抽样（Electrocute / Companion Damage / Bond Artifacts ×7 / Fruit Skewer ×7 / 0.10.16 / 1.0.26 / Combo Effects / Scope note / 内链 artifacts-guide ×3、tablets-guide ×3） | — | ✅ 全部命中 |
| 价格页 17.99 / 16.19 | 80,601 bytes | ✅ HTTP 200 / 80,921 bytes，17.99 ×84、16.19 ×24 |
| 首页 `2,742` 一致 | — | ✅ HTTP 200 / 51,078 bytes，`2,742` ×6，`Very Positive` **0** 命中 |
| `/faq`、`/guides/artifacts-guide`、`/guides/tablets-guide` | — | ✅ 均 HTTP 200 |
| `sitemap.xml` 收录新篇 | — | ✅ `<loc>https://sephiriawiki.vercel.app/guides/combo-system-guide</loc>` |

## 五、P0 校准交叉验证

| P0 项 | 检查 | 结果 |
|-------|------|:--:|
| ① 9/13 diff 7 文件复核 | 无新增无源数字；全部为 `2,690→2,742` / 日期词元替换 | ✅ |
| ② Steam 标签实测 | 英文商店视图 **97% of 2,742** / Overwhelmingly Positive（2026-09-16 实读）；全语言 API 池 **11,703/12,395 = 94.4% = Very Positive** —— 两者**作用域限定语均已保留**，未做全局标签替换 | ✅ |
| ③ 站内 `Very Positive` 清零 | `grep -rniE "very positive"` = **0 命中**；首页线上 `Very Positive` = **0 命中** | ✅ |
| ④ `.agent/qa-report.md` todo #7 价格页 | 「still showed $14.99」已不存在；现存 10 处 `14.99` 全为 `$14.99 → $17.99` 历史对比；决策章节已改回顾性 | ✅ |

**一致性复核**：全站 `2,690` = 0 命中；`checked September 13` = 0 命中；`2,742` 在 7 个文件 + 线上首页一致。

## 六、最终结论

**✅ PASS — 批准部署**

- Residue: ✅ Clean（0 残留）
- 编造检查: ✅ 0 编造；30 项精确断言逐条对官方一手公告核验
- 产物级验证: ✅ 本地 + 线上双查，表格渲染缺陷 0 命中
- 自噬防线: ✅ 双向 Scope note 三篇齐备；38 个内链 slug 0 悬空
- 🔴 阻断级问题: **0**
- 🟡 提示级问题: **2**（均不阻断）

### 🟡 提示级问题（交主 Agent 决策）

1. **价格页改版后约 2,100 词，超出 800–1500 的日常扩充红线。** 属**既有页校准**（涨价落地 + 新增捆绑包决策信息），非新写；若强行压到 1500 需删除已核实的事实。**建议明确「校准类改动不受 1500 词上限约束」**，否则下次遇到同类过期页会陷入「保事实 vs 保字数」的两难。
2. **Steam 评分引用的口径规则未固化。** 本轮发现英文商店池（97%/2,742/Overwhelmingly Positive）与全语言 API 池（94.4%/11,703/12,395/Very Positive）是两个不同的数+不同的标签，历史上曾被混用。**建议写入 06 Profile**：Steam 评分引用 MUST 是「标签 + 作用域 + 实测日期」三元组，MUST NOT 出现裸的「the Steam rating is X」。

### 另记（供 Profile 闭环，非本站问题）

- `store.steampowered.com/appreviews/{appid}` **必须带 `json=1`**：缺该参数时 `cursor` 有值但 `reviews` 返回空数组，极易被误判为「该游戏无评测」。建议写入 18-Profile。
- `steamcommunity.com` 在本机长期解析到 Dropbox IP（DNS 投毒）→ 讨论区维度长期缺失，建议主 Agent 统一排查或固化 `--resolve` 目标。

---

### 证据文件

- 部署: `dpl_8qj1anerXKHpqFDzEMMRvd7UZXpk`（READY，production，created 2026-09-16 05:13:53 CST）
- Alias: `https://sephiriawiki.vercel.app` → 上述 deployment（`vercel inspect` 确认）
- 线上复验方式: `curl --resolve sephiriawiki.vercel.app:443:64.29.17.3`（本机 DNS 投毒，`--resolve` 为**确定性必要条件**）
- 扩充记录: `keyword-results/sephiriawiki-expand-9-16.md`
