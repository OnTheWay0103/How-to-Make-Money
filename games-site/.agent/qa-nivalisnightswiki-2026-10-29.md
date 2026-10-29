# QA Report — 2026-10-29 — nivalisnightswiki（quick）

> 模式：quick（只审本轮变更）
> 范围：1 站 / 1 篇新增 guide
> 变更：`content/guides/get-home-after-curfew-guide.md`（新增，1,593 词）
> 依据：`.claude/skills/quality-assurance.md`、`docs/STRATEGY-内容生产.md` 四节

## 执行摘要

- 结果：✅ **PASS**（0 🔴 阻断 / 0 🟡 记录项）
- 一句话：本篇的游戏特有事实全部落在 3 条官方公告原文或 4 名玩家的论坛原话上；查不到官方口径的
  （宵禁精确时间、罚款金额、紧急公寓是否免费）**一律进「What is not confirmed」并标 `[Unconfirmed]`**；
  模板残留干净；build exit 0；线上 HTTP 200 且 `<h1>` 计数 = 1。

## 虚构检测（逐条核验）

| # | 断言 | 判定 | 依据 |
|---|------|:--:|------|
| 1 | 存在宵禁，守规则+夜里待在家才安全 | ✅ | 官方 AUGUST 2025 COMMUNITY BLOG 原文 |
| 2 | 昼夜是「不同的机会」，宵禁有存在理由 | ✅ | 官方 COMMUNITY Q&A（2026-03-31）原文 |
| 3 | 睡前出门会让当晚照常结算（客人消费/评价/员工工资） | ✅ | 官方 Update 6 原文 |
| 4 | 宵禁被抓曾经会把玩家卡住，Update 6 已修 | ✅ | 官方 Update 6「Getting caught during curfew no longer traps you」 |
| 5 | 可租多套公寓、位置影响移动效率 | ✅ | 官方 AUGUST 2025 BLOG「rent as many as your wallet allows」 |
| 6 | 每个区都有宵禁期开放的紧急公寓 | ⚠️ 已标 `[Community]` | 玩家原话（Enidigm, 10/6），官方无文档；正文未写成官方事实 |
| 7 | 宵禁期间被抓会被罚款 | ⚠️ 已标 `[Community]` | 玩家原话「keep getting fined for being out too late」 |
| 8 | 宵禁起点 2:00 AM | ⚠️ 已标 `[Unconfirmed]` + 冲突记录 | 社区口径一致为 2 AM，但另有更早口径；正文写「watch your own clock」，**未当事实** |
| 9 | 罚款金额 / 是否累进 | ⚠️ 已标 `[Unconfirmed]` | 官方无公布，正文明确「不要按某个数字做预算」 |
| 10 | 船舱可当睡点 | ⚠️ 已标 `[Unconfirmed]` | 仅社区转述，未验证，列入未确认小节 |

- 无编造 Boss 名 / 数值 / 价格 / 机制；未出现其他游戏名。
- 未引用竞对攻略站正文当事实来源（`docs/STRATEGY-内容生产.md` 3.1）。

## 模板残留扫描

- `node scripts/check-site-residue.mjs nivalisnightswiki` → ✅ 无模板残留（他站游戏名 0 命中、`{{UPPER_SNAKE}}` 0 命中）

## 一致性与诚实标注

- 与 `day-night-cycle-guide`：分工写清（该页管昼夜/天气/节奏，本篇管「被抓在外面」），正文回链且不复述；
  该页把 2 AM 当已确认，本篇标 `[Unconfirmed]` 并记录冲突口径 —— **属下一篇更保守，不构成互斥陈述**，下轮建议对齐。
- 与 `transportation-guide`：未复述交通经济学，只在「宵禁前用掉快速移动」处回链。
- 与 `apartment-customization-guide`：只写「多租一套当睡点」，装修部分 0 重复。
- 与 `manager-restock-guide`：睡前设预算只引用不复述档位。
- 中文标记泄漏 0；`[Community]` / `[Unconfirmed]` 均为英文标记。
- 首段 51 词、直答；H2 10 节不跳级；表格 3 个（写作规格要求 2–4）。

## 基建检查

| 项 | 结果 |
|---|---|
| `pnpm install` | ✅ 完成（仅提示 `unrs-resolver` 构建脚本被忽略，不影响构建） |
| `pnpm build` | ✅ **exit 0**，35/35 页预渲染，`/guides/get-home-after-curfew-guide` 已 SSG |
| `node scripts/lint-guides.mjs nivalisnightswiki` | ✅ **0 ERROR / 0 WARN**（全站 22 篇） |
| `node scripts/check-ad-slots.mjs nivalisnightswiki` | ✅ exit 0 |
| 部署 | ✅ `deploy-wiki-site.sh` 完成（第 0 步 lint、第 0b 步残留均通过） |
| 线上新页 | ✅ HTTP 200，69,403 bytes，`<h1>` 计数 = **1**，`<title>` 正确，canonical 指向自身 |
| `check-ad-slots --live` | ✅ exit 0（线上每个页面均有广告容器，攻略页 1 条） |
| sitemap | ✅ 线上 `/sitemap.xml` 含新 slug，共 30 条 |
| `ca-pub` | ✅ 本页与本站新增代码 0 处 |

## 记录项

- 无。本轮 lint 0 WARN，未出现上轮的 `updated-future` 时区假警报（本机时间已过 UTC 10-29）。

## 结论

**QA 结果：✅ PASS（1/1）**，无阻断项。可交付。
