# QA 报告 — QA-EXPAND-TEARSOFMETAL-9/13

- 日期: 2026-09-13
- 模式: quick（残留扫描 + 编造检查 + 内链 + 事实一致性）
- 审核员: QA 审核员（岗位卡 `docs/agents/05` + Profile `docs/agents/06`）
- 范围: tearsofmetalwiki 本轮 1 新增 + 2 修改文件
- 结论: ✅ **PASS**（批准部署）

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `tearsofmetalwiki/content/guides/charms-guide.md` | 🆕 新增 | Tears of Metal Charms Guide — Do Charms Stack? Rarity Tiers and Where to Get Them（33→34 篇） |
| 2 | `tearsofmetalwiki/content/home-content.md` | ✏️ 导航登记 | Quick Navigation 表新增 Charms Guide 一行 —— **但该文件经查为死文件，本行不生效**，见第六节 |
| 3 | `tearsofmetalwiki/app/guides/page.tsx` | ✏️ 跨站残留清除 | `/guides` 页元描述里的他站术语 `EX-Mod crafting` 清除（🔴 级，见第五节） |

---

## 二、反馈采集记录（第 1 步）

| 通道 | 可用性 | 本轮实际取得 |
|------|--------|--------------|
| Steam 官方公告（`api.steampowered.com/ISteamNews/GetNewsForApp/v2` appid=1913120） | ✅ 可用（HTTP 200，62081 bytes，20 条） | **9/8「📜 New Patch - Big Bug Fixing Pass」** 逐字全文；并逐条定位 20 条公告中**全部**含 `Charm` 的行（见下） |
| Steam 评测 recent（`appreviews` filter=recent, language=english, purchase_type=all） | ✅ 可用 | 金币/治疗取舍类负评聚类，用于印证 v0.12.58540 的设计意图 |
| Steam 评测 negative（同上 filter=negative） | ✅ 可用 | 同上 |
| Steam 商店页 appdetails（appid=1913120） | ✅ 可用 | 系统清单对照（路径 ② 用） |
| Steam 社区讨论区（steamcommunity.com） | ❌ 直连 `curl` **HTTP:000 / SIZE:0**（exit 28），两帖均不可达 | 仅经 WebSearch 摘要取得，两帖**摘要与官方补丁文本互相印证**；已按「community-reported / thread」定级，URL 附在 sources |
| `opencli reddit` | ❌ 不可用（2026-09-12 起长期性故障，非本轮新增） | 无 |
| 第三方编辑内容（cheatbook.de） | ✅ WebFetch 200 | 两条主张命中原文（Act 3 无商店 / Market Charm slots）；因无官方背书，页内一律标 `[Unconfirmed]` |

**9/8 官方补丁独立核验（本轮事实锚点，MUST 项）**

- 标题：`📜 New Patch - Big Bug Fixing Pass`，`date` = **2026-09-08**（UTC），**未公布版本号**。
- 逐字命中：`"Crossplay compatibility is temporarily disabled on this version."` ✅（官方公告原文）
- 逐字命中 Charm 相关行 ×3：
  1. `"The Heart of Wood Charm now visually disappears after being consumed to revive the player."`
  2. `"Fixed Castle Records sometimes showing already unlocked Charms as locked."`
  3. `"Added the proper Russian translation for the Sacred Heart Charm."`
- 逐字命中 barrel / item buyer 行 ×2：
  - `"The item requested by H.W. in a barrel (item buyer interactible) is now completely random."`
  - `"The amount offered by H.W. in a barrel (item buyer interactible) now varies based on the item's rarity and the current Act."`

**诚实缺口记录**：Reddit 通道本轮仍不可用；Steam 社区讨论原帖无法直接抓取，社区主张均以「community-reported / thread」措辞归因并附原帖 URL，未升格为官方事实。**本轮未编造任何 Reddit / 讨论区 / 评测内容。**

---

## 三、选题四条判据（第 2 步）

| 判据 | 证据 | 结论 |
|------|------|:--:|
| **高频**（≥3 独立来源） | ① 官方公告 Charm 相关条目横跨 v0.8.57278 / v0.9.57408 / v0.10.57598 / v0.11.57863 / v0.12.58540 / 9-8 补丁共 **6 次**独立发布（官方源）；② Steam 社区讨论「Do Charms Stack?」（独立来源）；③ Steam 社区讨论「A bug?」（独立来源）；④ 第三方 cheatbook.de；⑤ Steam 近期+差评中「coin 该买 charm 还是买血」聚类 | ✅ |
| **具体** | 落到四个可写死的问题：重复 Charm 是否叠加、稀有度分层到底怎么改的、Charm 一共有哪些获取途径、金币在 Charm 与治疗之间怎么分 —— 不是「Charm 攻略」这类泛题 | ✅ |
| **缺口** | `ls content/guides/`（33 篇）后逐篇 grep：区分大小写 `Charm` 全站仅 4 处命中 2 文件（`co-op-revive-guide` 的「Charm economy」提及、`emblem-artifact-guide` 把 Storm-Chaser's Charm 当 artifact 列出），`patch-notes.md` 仅顺带提 Tier 重分类 —— **Charm 系统实质零覆盖**；`healing-guide.md` 的金币预算表**完全没有 Charm 列**。无同题重稿 | ✅ |
| **可溯源** | 页内每处官方引用均**逐字回验**命中官方语料（见第四节，23/23 命中）；两条社区主张经 WebSearch 摘要双向印证；两条第三方主张标 `[Unconfirmed]`；无来源数字一律未写入 | ✅ |

**路径 ②（系统清单驱动）并行执行记录**：把 20 条官方公告中所有含 `Charm` 的行抽出并与站内 33 篇对照，确认 **Charms** 是与 Emblems/artifacts 并列的独立系统，却在站内近乎整块缺失（`healing-guide` 的预算表、`emblem-artifact-guide` 的 artifact 列表都把它漏了）。该缺口为路径 ② 独立于任何单次补丁发布的发现。

**`skips[]` 遵守情况**：已先读 `.agent/expand-daily.json` 的 `skips` 数组（9/7–9/11 已否决：治疗稀缺、敌人数值、Aodh 同伴解锁、六种货币、Trials of the Mother、desync、视觉可读性）。本轮选题与上述**零重合**。

**自噬（cannibalization）红线**：联机集群（`multiplayer-connection-fix-guide` / `coop-join-failures-guide` / `co-op-guide` / `co-op-revive-guide`）密集，故本轮**刻意避开一切联机题材**；新旧页之间加了 Scope blockquote 明确切分 Charm（run 内、金币购买）与 Emblem/artifact，并交叉链到 `healing-guide` / `emblem-artifact-guide` / `equipment-guide` / `patch-notes`。

---

## 四、编造检查（第 4 步 · 逐条回验官方语料）

方法：把 20 条官方公告合并成语料，对页内**每一处**引号引用做规范化（去 HTML 实体、去 `[list][*]` BBCode、统一弯引号/破折号）后的子串回验。

| 被检断言 | 核验结果 |
|----------|:--:|
| 「We changed which Charms belong to each rarity category and rebalanced some of them. The long-term goal is to create more meaningful differences between tiers.」 | ✅ v0.11.57863 逐字 |
| 「This also lays the groundwork for future content updates featuring new powerful Charms.」 | ✅ v0.11.57863 逐字 |
| 「Reclassified several Charm rarity tiers to reflect their utility」 | ✅ v0.11.57863 逐字（changelog 段标题为 `Charms`） |
| 「Rebalanced Charms in relation to their rarity」 | ✅ 逐字 |
| 「Updated the functionality of several Charms.」 | ✅ 逐字 |
| 「Dragonstone Treasure Chests now cost one Dragonstone and guarantee a high-tier Charm.」 | ✅ 逐字 |
| 「Reduced the Health cost of receiving a Charm from the Cursed Spealbone」 | ✅ 逐字 |
| 「Rebalanced Charm Treasure Chest and Healing Fountain prices between Acts.」 | ✅ 逐字 |
| 「Adjusted Shop and Campaign Shop prices」 | ✅ 逐字 |
| 「Coins are meant to create a meaningful choice between healing and becoming stronger through Charms.」 | ✅ v0.12.58540 逐字 |
| 「Tying revival directly to coins made choosing Charms difficult, even for stronger players.」 | ✅ 逐字 |
| 「All Charms and Emblems that trigger when under or over a certain amount of HP should now correctly check whether the condition is fulfilled at the beginning of a level, instead of only after taking damage.」 | ✅ **v0.12.58540** 逐字（**归属修正项**，见第六节） |
| 「Updated some Charm descriptions」 | ✅ v0.12.58540 逐字 |
| 「Fixed Charm stack counts not updating when picking up certain Charms.」 | ✅ v0.9.57408 逐字 |
| 「Fixed the Castle Records not displaying unlocked Charms correctly after the previous patch」 | ✅ v0.10.57598 逐字 |
| 「Added a new Common Charm: Cutthroat's Blade, which grants +10% critical hit chance on Finishers」 | ✅ v0.8.57278 逐字 |
| 「Fixed certain Charms displaying incorrect descriptions in the Castle Records」 | ✅ v0.8.57278 逐字 |
| 「The Heart of Wood Charm now visually disappears after being consumed to revive the player」 | ✅ 9/8 补丁逐字 |
| 「Fixed Castle Records sometimes showing already unlocked Charms as locked」 | ✅ 9/8 补丁逐字 |
| 「Added the proper Russian translation for the Sacred Heart Charm」 | ✅ 9/8 补丁逐字 |
| 「The item requested by H.W. in a barrel (item buyer interactible) is now completely random」 | ✅ 9/8 补丁逐字 |
| 「The amount offered by H.W. in a barrel (item buyer interactible) now varies based on the item's rarity and the current Act」 | ✅ 9/8 补丁逐字 |
| 「When you kill Captains, 10% chance to gain 5 Coins」（Ferryman's Fee） | ✅ 社区帖子主张，WebSearch 摘要复核一致，页内标为社区引用 |
| 「Yep, charms do stack.」/「a way to control your charms build」 | ✅ 社区帖子主张，WebSearch 摘要复核一致，页内标为社区主张 |
| Act 3 无商店 / Market 加 Tier 1-3 Merchant Charm slots | ✅ 第三方 cheatbook.de 原文命中；页内标 `[Unconfirmed]`（官方 changelog 无对应条目） |

### ⚠️ 主动排除的编造风险（重要）

1. **「补丁修了两次 Charm 叠加上限」——已剔除。** 全量 `[Ss]tack` 正则扫描 20 条公告，官方的 stack-count 行**只有 1 条**（v0.9.57408）。初稿曾在 4 处写成「两次 / 三条 changelog 条目」，回验后全部改为单条归属。9/8 补丁语料中 `stack` 命中数为 **0**，故新页未把叠加修复挂在 9/8 名下。
2. **`gamesmoler.com` 的「Charms 跨战役保留」主张——刻意不引用。** 该站内容特征符合 AI 生成 SEO 内容，无官方对应；页内 FAQ 反而把「跨战役是否保留」显式标为 `[Unconfirmed]`，并说明 Castle Records 只是「记录」而非持久背包的证据。
3. **Seraphic Blade 三件套（Intricate Pommel / Gilded Crossguard / Sanctified Blade）与 Charm 的混淆——已识别并排除。** WebSearch 摘要把上述剑件与「charms」混为一谈，实为武器/artifact 材料，未写入本页。
4. **「merchant's son」与官方「H.W. in a barrel」判为同一角色——未断言。** 官方语料中 `merchant`（小写）0 命中，`Merchant` 命中的 3 条与 barrel 无关。页内以 `[Unconfirmed]` 明示「无法确认是同一角色」。

---

## 五、Residue 扫描（第 4 步）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` / `{{%` | ✅ 0 命中 |
| 模板占位符 `lorem ipsum` / `TODO` / `FIXME` | ✅ 0 命中 |
| 跨站污染（其余站游戏名 / 术语 / 域名） | ✅ 0 命中（`aincrad`、`witchspire`、`mistfall`、`spiritvale`、`themound`、`dressmaker`、`sephiria`、`grainrot` 定向扫描；`EX-Mod` 扫描见下） |
| 中文标记 / CJK 泄漏 | ✅ 0 命中（正则 `[一-鿿]` 全篇扫描，新页无任何 CJK） |
| AI 套话（`In the world of` / `Whether you're a` / `Remember to` / `When it comes to` / `delve into`） | ✅ 0 命中 |
| 页脚 IP 归属 | ✅ `Paper Cult`（线上首页命中 24 处） |
| `/terms` IP 归属 | ✅ `Paper Cult`（线上 `/terms` HTTP 200 / 25147 bytes，命中 12 处） |
| 内链完整性 | ✅ 0 悬空 —— 正文 `/guides/*`（emblem-artifact-guide / equipment-guide / healing-guide / patch-notes）全部命中实际文件；frontmatter `related:` 5 个 slug 全部存在 |
| `content/home-content.md` 内链 | ✅ 0 悬空（全表 `/guides/*` 逐条比对） |

### 🔴 本轮发现并修复的残留（重要 · 并含一处对 9/11 报告的更正）

`tearsofmetalwiki/app/guides/page.tsx` 第 10 行元描述含 **`EX-Mod crafting`** —— `EX-Mod` 是 **Echoes of Aincrad** 的术语，非 Tears of Metal 的任何系统。

- `grep -rl "EX-Mod"` 全仓命中面：aincradwiki 各文件 + **本文件**。属跨站术语污染。
- `git log -- app/guides/page.tsx` 显示该文件自脚手架提交 `4be99c0` 起**从未被改动**。
- ⚠️ **更正 9/11 报告**：9/11 的 QA 报告称该残留「已清理」，与 git 记录不符 —— 实际直到本轮（9/13）才被清掉。**建议主 Agent 复核 9/11 报告该项，并考虑在 Profile 中补一条「残留修复 MUST 以 `git log` 佐证已改动，而非仅凭当轮声明」。**
- 处置：已在允许目录内就地为改（`…hero builds, emblems, charms, boss strategies, village upgrades, co-op fixes and more.`）。此残留属 🔴 级，**不修则本轮自己的部署不可放行**，故未按「只记录」处理。

---

## 六、事实一致性（跨页，第 4 步）

本轮修掉 1 处**写错归属**的站内断言，并发现 1 处**导航登记失效**：

1. **归属修正（🔴 级，自捕）**：初稿第 7 节把「HP 阈值 Charm 改为关卡开始时判定」写成 **9/8 补丁**的修复之一，标题写「Three fixes from the September 8, 2026 pass」。回验定位后确认该行出自 **v0.12.58540（2026-08-13）**，9/8 补丁只有 2 条 Charm 行为类修复。已改写为「from two different patches」，逐条挂对应版本号与日期，并把该行补进 v0.12.58540 的 sources 条目。**若不修，这是一处把 A 补丁的修复记到 B 补丁名下的硬事实错误。**
2. **导航登记失效（🟡，只记录不改）**：`content/home-content.md` 的 Quick Navigation 表本轮新增 Charms 一行 —— 但全仓 grep 确认该文件 **`NOT REFERENCED`**：`lib/guides.ts` 只读 `content/guides/*.md`（`CONTENT_DIR`），`app/page.tsx` 用的是**硬编码**的 `FEATURED_GUIDES`（固定 6 张卡）与 `FAQ_ITEMS`。即 `home-content.md` 是**孤儿内容文件**（与已知遗留 `base-camp-guide.md` 同类）。本行**不产生任何线上效果**，保留仅为表意完整。新页的可发现性由 `/guides` 索引（自动发现，34 篇）与 `sitemap.xml`（自动发现，命中 `charms-guide` ×1）承担，均已线上验证。
   - 未把 Charms 加进 `FEATURED_GUIDES`：该数组是**策展式 6 张**（3×2 栅格），站内近两轮新增的 `coop-join-failures-guide` / `armor-break-guide` / `save-system-guide` / `threat-level-difficulty-guide` / `co-op-revive-guide` 同样不在其中 —— 属既有设计，非缺陷。是否改由主 Agent 决策。

### 已知遗留（本轮**只记录、未修**，按要求交主 Agent 决策）

| 遗留 | 精确位置 | 冲突内容 |
|------|----------|----------|
| **村庄升级是否全队共享 —— 两页互相矛盾** | `app/page.tsx:20` vs `app/faq/page.tsx:16` | 首页 FAQ：「Progression is shared between party members — village upgrades apply to all.」；FAQ 页：「The campaign is shared, while village upgrades are individual to each player.」 —— **直接对立，两页均线上可达（各 HTTP 200）** |
| **孤儿攻略页** | `content/guides/base-camp-guide.md` | 无任何页内链指向（本轮内链全量比对确认） |

另记：`app/page.tsx:27` 的 crossplay FAQ 与 9/11 已纠正的平台事实**一致**（Steam + Microsoft Store / PC Game Pass 互通；暂无主机版，Xbox Series X\|S 版本 announced）。本页未复述任何平台事实，**未再写反**。

---

## 七、构建与部署（第 5 步）

| 项 | 结果 |
|----|------|
| 依赖安装 | ✅ `pnpm install` exit 0 |
| 本地构建 | ✅ **exit 0**，`✓ Compiled successfully`（Next.js 16.3.4 / Turbopack；新路由 `/guides/charms-guide` 预渲染成功，共 47 条静态路由） |
| 词数 | ✅ **1,490**（全文，按 9/12 报告同一测法；限 800–1500）。主要正文（不含 `## Sources` + `## Related Guides`）**1,360** |
| 产物级验证（Profile「共享组件回归规则」） | ✅ `grep -o '<td>[-: ]*</td>' .next/server/app/guides/charms-guide.html` = **0**（9/12 表格分隔行缺陷未复现）；`<table>` ×3、`<td>` ×26 正常渲染 |
| `sitemap.xml` 产物 | ✅ `.next/server/app/sitemap.xml.body` 命中 `charms-guide` |
| 部署命令 | `vercel --prod --yes`（本机 `npx vercel` 会误解析为 `npm run vercel` 并报 `Missing script`，MUST 直接用全局 `vercel`） |
| 本次生产部署 | `https://tearsofmetalwiki-o6obwjsnu-zhaoq0103s-projects.vercel.app`（`dpl_5soMnxTiFj73t3pnuwQcHwjSs3Fd`, target=production, status=● Ready） |
| 生产 alias 指向本次部署 | ✅ `vercel inspect https://tearsofmetalwiki.vercel.app` → 同一 `dpl_5soMnxTiFj73t3pnuwQcHwjSs3Fd`，Aliases 段含 `tearsofmetalwiki.vercel.app` |
| 是否重部署 | ✅ 是。**首次部署（`…kdoki0cxg`）早于第六节的归属修正**，故修完重跑构建并重部署；线上已复验为修订后内容（下表中「归属修正已上线」一行） |

### 线上内容级验证（非仅首页 200；DNS 安全通道）

测法：`curl --resolve tearsofmetalwiki.vercel.app:443:$(dig @8.8.8.8 tearsofmetalwiki.vercel.app +short | tail -1)`

| 验证项 | 证据 |
|--------|------|
| 新路由 HTTP 200 且 body 非零 | `GET /guides/charms-guide` → **HTTP 200**，`size_download=72836` |
| 正文含新页标题特征串 | HTML 命中 `Do Charms Stack` ×24（出现次数）/ 6 行、`Ferryman` ×2 |
| 正文含新页独有内容 | 命中 `completely random` ×2（9/8 补丁逐字引用） |
| **归属修正已上线** | 命中 `from two different patches` ×2、`HP-threshold` ×2、`v0.12.58540` ×4 —— 证明线上构建为**修订后**源码 |
| `[Unconfirmed]` 标记已上线 | 命中 ×7 |
| Sources 段已上线 | 命中 `Sources` ×2 |
| 首页可达 | **HTTP 200**，`size_download=55794` |
| `/guides` 索引可达且计入新篇 | **HTTP 200**，`size_download=109367`；渲染为 `34 guides covering every aspect`，`charms-guide` 卡片命中 ×1 |
| `sitemap.xml` 可达且收录 | **HTTP 200**，`size_download=7781`；`grep -c charms-guide` = **1** |
| `/terms` 可达 | **HTTP 200**，`size_download=25147` |
| `/faq` 可达 | **HTTP 200**，`size_download=41791` |

> **DNS 坑二次确认（更新既有认知）**：本机解析 `tearsofmetalwiki.vercel.app` 本轮返回 `216.198.79.195`，权威 `@8.8.8.8` 返回 `216.198.79.131` —— 与本轮早前一次（本地 `199.96.59.95` / 权威 `216.198.79.67`）**又不同**。这说明本机对该域的解析结果**不稳定且会漂移**，`--resolve` 不只是「绕投毒」，而是**必须**的确定性手段。凡 HTTP=000 或 size=0 一律记「未验证」，本报告全部条目均为 **200 + size>0**，**无一条为 000/0**。

---

## 八、结论

✅ **PASS** — 批准部署。**1 🔴（本轮发现并已修：`app/guides/page.tsx` 跨站术语 `EX-Mod`）**、1 🟡（导航登记失效：`home-content.md` 为死文件）、0 项未解决阻断。

**遗留建议（🟢）**：

1. **更正 9/11 报告**：其称 `app/guides/page.tsx` 的 `EX-Mod` 残留「已清理」，与 `git log`（该文件自 `4be99c0` 起未被改动）不符。建议同步核实 9/11 其余「已修」声明。
2. **`content/home-content.md` 定位需拍板**：它是孤儿文件（无任何代码引用）。要么接进首页（替换 `app/page.tsx` 的硬编码 `FEATURED_GUIDES` / 导航表），要么归档到 `docs/archive/`。现状下任何「导航登记」操作都是空转 —— 建议写入 `docs/agents/` 的建站 Profile，避免后续 Agent 重复踩。
3. **村庄升级共享性矛盾**（`app/page.tsx:20` vs `app/faq/page.tsx:16`）：两页线上均可达且结论对立，属 AdSense 合规与读者信任风险，建议主 Agent 优先定调后单点修一页。
4. **`base-camp-guide.md` 孤儿页**：仍无入链，建议补链或下线。
5. 本轮新增的 Charm 归属事实（HP 阈值修复 = v0.12.58540）建议回填进 `patch-notes.md`，与 9/8 补丁条目并列，避免下次再错挂。
