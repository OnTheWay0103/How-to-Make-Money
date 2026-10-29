# EXPAND — nivalisnightswiki — 2026-10-29

## 产出

- slug: `get-home-after-curfew-guide`
- 标题: Nivalis Nights: How to Get Home After Curfew & Sleep
- URL: https://nivalisnightswiki.vercel.app/guides/get-home-after-curfew-guide
- 正文词数: 1,593（title 52 字符 / description 150 字符 / H1 ×1 / 首段 51 词 / 表格 3 个）
- 站内攻略数: 21 → 22

## 选题依据（为什么是它）

玩家的失败点是同一个，而且站内整块没写：**2 AM 前后你在别的区、回不去家**。Quarter To Three 一个
launch-week 线程里 4 个不同玩家撞同一面墙（原文见来源表）——「navigating these streets is almost
impossible without an overhead map」「I keep getting lost trying to get home and keep getting fined
for being out too late」「I still don't actually understand where th I live」「once I'd bought them I had
no idea how to get back home」。

需求侧同向：`harvest-keywords.mjs` 本轮 17 组种子（含 `--seeds "how to find,map,curfew,sleep,steal,
npc,quest,stuck,where to,how to get"`）采回 131 条有效词，**curfew 一簇 8 条**是同批最密的问题簇：
`after curfew` / `curfew time` / `curfew quest` / `end curfew` / `get home after curfew` /
`how to get home after curfew` / `how long does curfew last` / `get home after curfew`。相比之下
`how to find npc` 0 条、`stealing` 2 条、`interactive map` 1 条。

官方侧有硬事实可核验：开发者把 curfew 写成规则（"stay within your home at night, you'll be safe"）、
把昼夜写成"不同机会"（"there's a curfew for a reason"）、Update 6 明确修了 **"Getting caught during
curfew no longer traps you"**——即「被抓」是官方承认的常态，且曾经能把玩家卡死。

**不与现有页抢词**（站内相关 slug 全部列出）：

| 现有 slug | 它回答什么 | 与本篇的区别 |
|---|---|---|
| `day-night-cycle-guide` | 昼夜系统、五类天气、2 AM 宵禁、时段节奏（**pre-release，8/11 稿**） | 本篇不写「一天怎么排」和天气，只处理「宵禁已经压过来、人还在外面」这一个场景；宵禁定义只一段并回链；**不占领 `nivalis nights curfew` 这个头词**（该词仍在 day-night 的 keywords 内），本篇只吃 `how to get home after curfew` / `curfew time` / `end curfew` / `where to sleep` 长尾 |
| `city-districts-guide` | 四个区、各交通方式、日常动线 | 本篇不讲「有哪些区、怎么坐车」，只在步骤里引用「先选今晚睡哪」 |
| `transportation-guide` | HOVA / 飞的 / 地铁 / 船的经济学 | 本篇不比较交通方式；只在「宵禁前用掉快速移动」一句里回链 |
| `apartment-customization-guide` | 买房、装修、家具、位置选择 | 本篇只讲**多租一套房当睡点**这一个用途，不写装修 |
| `beginner-guide` | 首小时核心循环 | 本篇不重讲开店 |
| `manager-restock-guide` | 补货档位、日预算 | 本篇只在「睡前先设预算」一节引用，不复述档位 |

## 来源（5 条，3 条官方 / 1 条社区 / 1 条本站编辑结论）

| 层级 | 来源 | 日期 |
|---|---|---|
| Official | AUGUST 2025 COMMUNITY BLOG — "respect the curfew, and stay within your home at night, you'll be safe"；以及公寓条款「rent as many as your wallet allows」「one in a strategic location can make your movements around the city much more convenient」 | 2025-08-28 |
| Official | COMMUNITY Q&A — 「day and night life offer different opportunities (after all there's a curfew for a reason)」 | 2026-03-31 |
| Official | Update 6 — 「Venues keep running while you sleep. When you go to bed before curfew, the evening plays out…」/ Fixes:「Getting caught during curfew no longer traps you」/「Fixed the curfew popup text sometimes appearing cut off or instantly」 | 2026-10-22 |
| Community | Quarter To Three 论坛 launch-week 线程（Enidigm / Gordon_Bleu / Papageno 四人原话，逐条录入 frontmatter `sources`） | 2026-10-06（2026-10-29 抓取） |
| Editorial | 睡点对比表、宵禁前清单、失败模式表 = 本站综合，非外部事实 | 2026-10-29 |

> 官方公告经 Steam News API（appid 1488490，`maxlength=0` 取全文）逐条核对原文，URL 见 frontmatter。
> **本机 `store.steampowered.com` 与 `steamcommunity.com` 直连超时/TLS 拒绝**（公网 DNS 已取到真实 IP，
> `curl --resolve` 仍 000），因此 Steam 评测只能看到检索摘要、无法逐条复验——**本轮一条 Steam 评测都没写进
> sources**，社区侧全部用可直连复验的论坛原话。宁可少一条来源，不写没打开过的引用。

## 采集面（10 组，≥6）

1. Steam 评测总体/差评主题检索（performance、bug、navigation、pacing、management friction）—— 前四类已被 `performance-fps-guide` / `city-districts-guide` / `transportation-guide` / `beginner-guide` 覆盖
2. `site:reddit.com nivalis nights stealing curfew Security Awareness` —— 无索引结果
3. Steam 讨论区 / 检索「how do I find NPC / stuck / can't find」—— 命中大量 quest blocker，属 bug 类
4. 差评 + curfew/sleep/apartment 检索 —— **命中本篇选题**
5. reddit curfew get home/shelter 检索 —— 无 Reddit 线程，全为竞对攻略站
6. reddit r/nivalisnights curfew fine emergency apartment 检索 —— 同样无 Reddit 线程
7. heist / steal 检索 —— 有机制描述，但只有竞对攻略站，见排除理由
8. no minimap / navigation 检索 —— 命中，作为**根因**并入本篇「为什么头几晚会出事」，不单独成页
9. 官方公告全量（Update 1–6、Small Patch、launch、Tourist Map、A Day in the Life、Aug 2025 blog、Community Q&A）
10. Google Suggest 17 组种子（`--seeds` 见上），131 条有效词，用于判需求密度

样本置信度：**可本地复验的玩家样本 4 条（同一线程 4 人）**，低于 Profile 的 20 条门槛 → 按规则**标注「低置信」**；
需求侧由 8 条同簇搜索建议补强，官方侧由 3 条公告硬支撑。三者方向一致才动手，不是只凭情绪。

## 排除理由

- **「宵禁偷窃 / 搬空对手店」（`nivalis nights stealing furniture`，有搜索词）**：机制细节只存在于竞对攻略站
  正文，`docs/STRATEGY-内容生产.md` 3.1 明确「竞对攻略站的正文不可引用」，官方公告里也找不到对应条款
  （Update 3/5/6 只提 vending machine / composter 复制 bug）。**素材不足 → 不做**，不靠改写竞对稿硬撑。
- **「没有小地图 / 怎么找 NPC」单独成页**：检索面和论坛都证实高频，但结论 95% 来自社区，且与
  `city-districts-guide` / `transportation-guide` 的「怎么在这座城里移动」高度重叠。**改为并入本篇做根因段**，
  不新开一页抢词。
- **Quest blocker / 卡任务排查页**：Update 3/5/6 每版都在修（Coffee Run、The Network、Hacker Guide、Alexander
  不重现…），写成「已知 bug 清单」两周就过期，且属 bug 而非内容缺口。
- **`nivalis nights how to get a loan` / `more business permits`**：有词，但业务线已被 `best-business-guide`
  覆盖，属该页该补的小节，不该拆页。
- **`where to buy X` 一大簇（fridge / wheat / liquid nitrogen / decorations…）**：单点采购，20+ 条碎词，
  按 1:1 建页就是内容自噬，归入购物清单类整页留待下轮。
- **photo mode / achievements**：本轮 Suggest 未见独立问题簇，不写。

## QA

- `node scripts/lint-guides.mjs nivalisnightswiki` → **0 ERROR / 0 WARN**（22 篇全站）
- `node scripts/check-site-residue.mjs nivalisnightswiki` → ✅ 无模板残留
- `node scripts/check-ad-slots.mjs nivalisnightswiki` → ✅ exit 0（1 站通过）
- `cd nivalisnightswiki && pnpm install && pnpm build` → **exit 0**，35/35 页预渲染
- 详细结论见 `.agent/qa-nivalisnightswiki-2026-10-29.md`（✅ PASS）

## 部署与线上验证

- `./deploy-wiki-site.sh nivalisnightswiki` → 完成；第 0 步 lint 1 篇通过，第 0b 步残留通过
- 部署 ID：`https://nivalisnightswiki-qskn1jtb9-zhaoq0103s-projects.vercel.app`
- `dig @1.1.1.1 +short nivalisnightswiki.vercel.app` → **64.29.17.131**
- `curl --resolve` 结果：
  - `/guides/get-home-after-curfew-guide` → **200**（69,403 bytes）
  - `<h1>` 计数 = **1**；`<title>` = `Nivalis Nights: How to Get Home After Curfew & Sleep · Nivalis Nights Wiki`
  - canonical 指向自身：`https://nivalisnightswiki.vercel.app/guides/get-home-after-curfew-guide`
  - 正文含来源块（AUGUST 2025 COMMUNITY BLOG）与 H1 文本
  - `/sitemap.xml` → 200，含 `get-home-after-curfew-guide`，共 30 条
- `node scripts/check-ad-slots.mjs nivalisnightswiki --live` → ✅ **exit 0**

> 部署脚本第 3 步打印 `alias → 未知`（并发/CLI 解析老问题，见 Profile 部署规则 9/9 教训）：
> 未以脚本退出码下结论，改用**内容级验证**判定成败——新 slug 线上 200 且 canonical/sitemap 均更新，
> 证明生产 alias 已指向本次部署。

## 未做

- 未跑任何 git 命令（add / commit / push 都没有）
- 未改 `.agent/expand-daily.json` / `.agent/qa-report.md`
- 未改 `lib/adsterra-zones.ts`、未在页面里写 `<AdsterraSlot>`
- 未碰其他站点目录
- **未改动的已知问题（留给下一轮）**：`transportation-guide` 第 120–121 行仍写「curfew changes travel
  rather than banning it」，与本轮玩家反馈（宵禁时跨区极难、需提前快速移动）口径偏松，建议下轮按 Update 6
  后的实测口径复核该段；`day-night-cycle-guide` 的 2 AM 表述与本篇 `[Unconfirmed]` 标注需对齐。
