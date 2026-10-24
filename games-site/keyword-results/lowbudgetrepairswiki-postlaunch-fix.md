# lowbudgetrepairswiki 发售后内容修正报告

- 执行角色：内容合规审计员
- 执行日期：2026-10-24
- 站点：`lowbudgetrepairswiki/`
- 核实事实源：Steam appdetails API（appid 3167920，`coming_soon: false`，`release_date: "Aug 13, 2026"`，price `19.99` USD）+ Steam 商店页内嵌评价 JSON（2026-10-24 抓取）

## 结论

- 改动文件：**41 个**（37 个 `content/` 文件 + 3 个 `app/` 页面 + 1 个 `lib/schema.ts`）
- build：**PASS**（Next.js 16.3.4，50/50 静态页生成成功，TypeScript 无错误）
- 未部署（按要求交给主 Agent）
- 报告路径：`keyword-results/lowbudgetrepairswiki-postlaunch-fix.md`

## 核实后统一口径

| 项 | 采用表述 | 依据 |
|----|----------|------|
| 发售日 | 2026-08-13（14:00 UTC，Steam 解锁） | appdetails API |
| 价格 | $19.99 USD，标准版，检查时无折扣 | appdetails API，2026-10-24 |
| 平台 | Steam（PC / Windows）已核实；PS5 / Xbox Series X\|S 曾公布但发售状态 `[Unconfirmed]` | appdetails API；主机侧未取得可核实页面 |
| 评测 | Steam 用户评测 **Mixed**（checked 2026-10-24）：2,477 条 Steam 购买评测（含非 Steam 共 2,600）；英文汇总 654 条为 Mixed；近 30 天 184 条为 Mostly Positive；无 Metacritic 媒体分 | Steam 商店页内嵌 JSON |
| 评测文本 | 未采集到可靠样本，不做评分推断 | 抓取限制说明，未编造 |

全局处理：
- 所有被改文件 frontmatter `updated:` → `2026-10-24`
- 所有 `version: "Pre-release"` / `"0.1"` → `"1.0"`（`home-content.md`）
- 旧标记 `[Needs launch verification]`、`[Speculative — awaiting launch confirmation]`、`[Predicted — unconfirmed]` 全部归一为 `[Unconfirmed]`
- 全站已无 `[待确认]`、`Placeholder — no reviews yet`、`coming soon`、`Pre-release`

## 改动文件清单

### content/guides（36）

`release-hub.md`、`review-guide.md`、`achievements-guide.md`、`demo-guide.md`、`price-editions-guide.md`、`faq.md`、`ps5-guide.md`、`steam-deck-guide.md`、`how-long-to-beat.md`、`plumbing-guide.md`、`bathroom-renovation-guide.md`、`system-requirements.md`、`tool-guide.md`、`room-by-room-strategy-guide.md`、`hardware-store-guide.md`、`money-making-guide.md`、`languages-guide.md`、`tiling-guide.md`、`inspection-guide.md`、`controls-guide.md`、`furniture-assembly-guide.md`、`renovation-jobs-guide.md`、`upgrade-priorities-guide.md`、`job-profit-guide.md`、`games-like-low-budget-repairs.md`、`demolition-guide.md`、`flooring-guide.md`、`electrical-work-guide.md`、`beginner-guide.md`、`kitchen-renovation-guide.md`、`hidden-secrets-guide.md`、`materials-guide.md`、`painting-guide.md`、`cost-cutting-tips.md`、`client-management-guide.md`、`wallpaper-guide.md`

### 其他 content

`content/home-content.md`

### 代码文件（4）

`app/page.tsx`、`app/faq/page.tsx`、`app/tier-list/page.tsx`、`lib/schema.ts`

> 未改：`content/guides/how-to-save-game-guide.md` —— 该文件已是发售后口径，仅使用 `[Unconfirmed]`，无需修改（`updated: "2026-10-23"` 保留）。

## 逐处改写摘要

### 1. 发售信息类（release-hub / price-editions / faq / demo）

| 文件 | before | after |
|------|--------|-------|
| release-hub.md | "launches… price/editions/preload expected-but-unconfirmed" | 已发售 2026-08-13、$19.99、Steam（PC/Windows）；主机/版本/预载 `[Unconfirmed]` |
| release-hub.md | "Placeholder — no reviews yet" 评测区块 | 替换为已核实的 Steam 评测汇总（Mixed，2,477 条，checked 2026-10-24）+ 明确"未采集可靠文本样本，不做评分推断" |
| release-hub.md | "What to Do Before Launch" | 改为发售后行动建议 |
| price-editions-guide.md | "expected ~$19.99"、猜测首发折扣 | $19.99 已核实、检查时无折扣、仅标准版 |
| faq.md / app/faq/page.tsx / app/page.tsx | "launches on August 13…PS5/Xbox planned" | "was released on August 13, 2026…$19.99"；主机状态 `[Unconfirmed]` |
| faq.md / app/faq/page.tsx | "price has not been confirmed yet… expected ~$19.99" | $19.99 verified 2026-10-24，单一标准版 |
| faq.md / app/faq/page.tsx | "length hasn't been officially confirmed yet… after the August 13, 2026 launch" | 官方未公布 `[Unconfirmed]`；不编造时长 |
| faq.md / app/faq/page.tsx | "No DLC plans announced yet… post-launch" | 截至 2026-10-24 无 DLC 公告 `[Unconfirmed]` |
| demo-guide.md | demo 进度是否继承"发售后才能确认" | 官方未公布 `[Unconfirmed]`；发售日/价格补全 |
| app/page.tsx | hero "Launching August 13, 2026 — PC, PS5, Xbox" + "Wishlist on Steam" | "Released August 13, 2026 on Steam (PC) — $19.99" + "View on Steam" |
| app/page.tsx | 6 张指南卡 `updated: '2026-08-03'`、FAQ 描述"pre-launch questions" | `2026-10-24`、改为发售后描述 |

### 2. 评测/成就类（review-guide / achievements）

| 文件 | before | after |
|------|--------|-------|
| review-guide.md | "no full-game reviews yet"、demo 评分为主 | 已发售事实 + Steam Mixed（checked 2026-10-24）+ 无 Metacritic；保留 demo ~90% 历史数据并注明来源 |
| achievements-guide.md | 官方成就列表"发售后确认"、预测项标 `[Predicted — unconfirmed]` | 官方列表仍 `[Unconfirmed]`；全部预测项归一 `[Unconfirmed]`；删除"发售日才可知"框架 |
| achievements-guide.md | "ships with an achievement system at launch" / "pre-launch coverage" | "shipped… at release" / "pre-release coverage" |

### 3. 平台/兼容性类（ps5 / steam-deck / controls / languages / system-requirements）

| 文件 | before | after |
|------|--------|-------|
| ps5-guide.md | PS5/Xbox 与 PC 同日发售为既定事实 | Steam 已核实；PS5/Xbox 公布但状态 `[Unconfirmed]`（截至 2026-10-24） |
| steam-deck-guide.md | "no official Deck rating… as of August 7, 2026"、"not out yet" | "could not verify… as of 2026-10-24"；无 ProtonDB 可靠样本；手柄支持 `[Unconfirmed]` |
| controls-guide.md | "controller support is confirmed for the full release" | 商店页未列手柄支持 → `[Unconfirmed]`；按键重绑定官方未公布 |
| languages-guide.md | "as of August 7, 2026"、主机语言"almost certainly mirror" | 2026-10-24 列表；主机语言 `[Unconfirmed]`，删除推测 |
| system-requirements.md | "may be adjusted slightly at release"、"Exact frame rates are unconfirmed before release" | 2026-10-24 复核无修订；帧率未实测 `[Unconfirmed]`；主机安装体积 `[Unconfirmed]` |

### 4. 玩法指南类（其余 25 篇）

统一模式：
- `launches August 13, 2026` → `was released on August 13, 2026 at $19.99`
- "release build will add X，发售后更新" → "release build may add X，未独立核实 `[Unconfirmed]`"
- "exact prices unconfirmed until launch" → "in-game prices 官方未公布 `[Unconfirmed]`"
- "demo is your lab / before launch" → 改为发售后可玩 + demo（若仍可用）
- `[Needs launch verification]` / `[Speculative — awaiting launch confirmation]` → `[Unconfirmed]`

涉及文件：plumbing、bathroom-renovation、tool、room-by-room-strategy、hardware-store、money-making、tiling、inspection、furniture-assembly、renovation-jobs、upgrade-priorities、job-profit、games-like-low-budget-repairs、demolition、flooring、electrical-work、beginner、kitchen-renovation、hidden-secrets、materials、painting、cost-cutting-tips、client-management、wallpaper、how-long-to-beat。

其中 `cost-cutting-tips.md` 的 sourcing note 由"the full game has not launched yet, so nothing comes from the release build"改为"game released 2026-08-13，但这些技巧未在 release build 独立验证"，避免保留未发售断言。

### 5. 首页与结构化数据

| 文件 | before | after |
|------|--------|-------|
| content/home-content.md | "launches on August 13, 2026…PS5/Xbox planned"、"Wishlist"、版本 0.1、页脚"will be updated after the full release" | 已发售 $19.99、主机 `[Unconfirmed]`、版本 1.0、"View on Steam"、页脚改为已发售口径 |
| app/tier-list/page.tsx | "Version 0.1 (Pre-release) — Updated Aug 3, 2026…Will be updated after the full release" | "Version 1.0 (Released Aug 13, 2026) — Updated 2026-10-24…release-build rankings are [Unconfirmed]" |
| lib/schema.ts | `availability: 'https://schema.org/PreOrder'` | `availability: 'https://schema.org/InStock'`（price 19.99、datePublished 2026-08-13 原本已正确） |

## 仍标 `[Unconfirmed]` 的条目及原因

| 条目 | 文件 | 原因 |
|------|------|------|
| PS5 / Xbox Series X\|S 发售状态、性能、DualSense、体积、预载 | ps5-guide、faq、release-hub、home-content、app 页面 | 主机商店页无可核实条目；不同来源互相矛盾，不做推断 |
| Steam Deck 官方兼容评级、Proton 实际表现 | steam-deck-guide | 商店页无 Verified/Playable/Unsupported 徽章；未采集到可靠 ProtonDB 样本 |
| 手柄支持与按键重绑定 | controls-guide、steam-deck-guide | 商店页未列 controller support；未核实 release build 设置菜单 |
| 官方成就列表 | achievements-guide | 未取得官方成就清单；不编造成就名 |
| 战役时长 / 通关时间 | how-long-to-beat、faq | 官方未公布（官方未公布）；未采集到 release build 可靠 playtime 样本 |
| 预载历史、版本/预购奖励 | release-hub、price-editions | 商店页当前仅标准版；预载为发售前事实，本次未复验 |
| 存档进度是否继承 demo | demo-guide、faq | 官方未说明 |
| 结构拆除（室内承重墙/隔墙） | demolition-guide | demo 与官方资料均未确认 |
| 电气系统细节（插座/开关、专用工具、接线可行度） | electrical-work-guide | playtest 期系统，release build 未独立核实 |
| 厨房电器类型/品牌/价位 | kitchen-renovation-guide | release build 未核实 |
| 隐藏秘密/社区理论 | hidden-secrets-guide | 社区理论，无 release build 验证 |
| 油漆/工具/材料等游戏内价格 | painting、tool、materials、job-profit、bathroom-renovation | 游戏内经济数值无官方公开表 |
| release build 新增岗位/客户类型/房间 | renovation-jobs、client-management、room-by-room、kitchen、flooring、wallpaper 等 | 未独立核实 release build 完整内容 |
| DLC / 路线图 | faq、price-editions、how-long-to-beat | 截至 2026-10-24 无官方公告 |
| 帧率表现、主机安装体积 | system-requirements | 未做 release build 基准测试 |

## 构建证据

```
> next build
▲ Next.js 16.3.4 (Turbopack)
✓ Compiled successfully in 703ms
  Finished TypeScript in 994ms
✓ Generating static pages using 7 workers (50/50) in 343ms
```

依赖已存在（`node_modules/.bin/next` 可用），未重复 install。

## 合规自检

- 无中文 `[待确认]`（全站 grep 为 0）
- 无 Hugo shortcode
- 未改动 `related` / `sources` 数组结构（仅个别 `sources.text` 文案随事实更新）
- 未编造评分、评测数、机制或数值
- 评测数字全部来自 2026-10-24 Steam 商店页内嵌 JSON
- 未部署
