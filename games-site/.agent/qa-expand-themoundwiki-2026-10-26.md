# QA Report — themoundwiki expand — 2026-10-26

> 模式: quick（本轮改动 1 篇：校准，无新增页） | 站点: themoundwiki | 岗位: QA 审核员 05/06

## 执行摘要

- 范围: 1 站 1 篇改动 `content/guides/updates-patch-notes.md`（新增 Patch 1.06 + 补 sources）
- 新页: **SKIP**（采集面与逐条否决见 `keyword-results/themoundwiki-expand-10-26.md`）
- 结果: **PASS**（0 🔴 阻断 / 2 🟡 警告 / 0 🟢 建议）

## 1. 虚构检测（新增段落逐个专有名词 / 数字）

| 名词或数字 | 验证结果 | 证据（官方公告 gid 1845383656393418，2026-10-05） |
|---|---|---|
| Version 1.06 / 2026-10-05 | ✅ | 公告标题 "Patch 1.06 — Optimizations & hot fixes."；发布日期 2026-10-05 |
| "Improved memory performance" | ✅ | 原文逐字：`Improved memory performance` |
| Ghost inventory（蘑菇消失） | ✅ | 原文逐字：`Fixed an issue causing the mushroom from the Ghost inventory to disappear.` |
| 社区致谢整段 | ✅ | 原文逐字：`A big thank you to everyone who took the time to report the inventory issue. The videos, reproduction steps, and detailed reports shared by the community were extremely helpful in identifying and fixing the problem.` |
| "本版未动武器/敌人/契约/经济数值" | ✅ | 公告全文仅三条要点 + 致谢，无任何 balance/economy 行；属「未出现」的可核验否定，非编造 |
| 1.05 / 1.04 既有段落 | ✅ | 未改动；与 gid 1843481262689270 / 1842212951310330 原文一致（沿用 9 月核验结果） |
| 新造玩家声音 | ✅ 无 | 全文唯一「玩家」表述为官方公告自身转述（"reported the inventory issue"），已标明是开发者致谢，未伪造任何玩家语句 |

结论：无虚构。新增内容 100% 来自单条官方一手公告，未引入任何二手推定。

## 2. 跨站残留

```
grep -nE "Sephiria|Witchspire|Mistfall|Aincrad|SpiritVale|Tears of Metal|Grain Rot|EX-Mod|EXMod|ca-pub|NACON" updates-patch-notes.md
→ 0 命中
perl CJK 扫描 → 0 命中（全英文）
```

## 3. 事实一致性 / 格式

| 检查项 | 结果 |
|---|---|
| 版本序列连续 | ✅ 1.06 → 1.05 → 1.04 → 1.03 → 1.02 → 1.01 → 1.0.0，归档表与正文顺序一致 |
| `updated` 与正文 "Last verified" 一致 | ✅ 均为 2026-10-26 |
| `Sources checked` 覆盖全部已写版本 | ✅ 1.01–1.06 六个公告全部列出 |
| sources 字段 | ✅ 3 条 Official（1.06 / 1.05 / 1.04），均含 url + date + 原文摘录；修复该页此前无 sources 的缺陷 |
| related 块状数组 + slug 存在 | ✅ 3 个（faq-content / game-length-guide / controls-settings-guide） |
| 正文 H1 | ✅ 1 个（模板层重复见 W-2） |
| 正文词数 | 🟡 1,776 词，超 800–1,600 建议区间（见 W-1） |
| 表格 | ✅ 归档表与 Launch Content 表完好，无 `\|-------` 断行 |

## 4. 构建与产物

```
$ cd themoundwiki && pnpm build
✓ Compiled successfully
✓ Generating static pages
● /guides/updates-patch-notes   ← 路由正常生成
```

## 5. lint

```
$ node scripts/lint-guides.mjs themoundwiki --changed
⚠️ updates-patch-notes.md [length] 正文 1776 字，超出 800–1600 的建议区间
结果：0 ERROR / 1 WARN
```

## 6. 部署与线上复验

```
$ ./deploy-wiki-site.sh themoundwiki
✅ 部署完成: https://themoundwiki.vercel.app/ (HTTP 200)

$ ./scripts/verify-guide-live.sh themoundwiki updates-patch-notes "Ghost inventory" "Optimizations & Hot Fixes"
URL: https://themoundwiki.vercel.app/guides/updates-patch-notes
HTTP: 200  bytes: 77322
  marker [Ghost inventory] hits=2
  marker [Optimizations & Hot Fixes] hits=2
RESULT: PASS
```

## 7. 警告（不阻断）

**W-1 🟡 正文 1,776 词超建议区间**
该页是累积型补丁历史页，1.06 段落为增量。依 `docs/每日内容扩充计划.md` 第五节「校准类改动不受 1500 词上限约束，MUST NOT 为凑字数上限而删除已核实的事实」，**保留现状**，不删 1.01–1.03 的任何已核实条目。若后续要压长度，正确做法是把 1.01–1.03 拆成独立页并留摘要，而不是删事实。

**W-2 🟡 站内「39 official announcements」表述已陈旧（跨 15 文件 61 处，本轮未改）**
官方公告现为 **40 条**（含 1.06）。本页正文第 151/153/155 行的 "39 official announcements" 随之失准，但因同批表述散落在约 15 个文件，按「批量（3+ 文件）派子 Agent」规则不在本轮单点修改。**建议主 Agent 排一个批量校准任务**。

（另：模板级双 `<h1>` 问题同 `qa-expand-sephiriawiki-2026-10-26.md` W-2，属 `components/GuideLayout.tsx:38` 全站存量，与本文无关，此处不再重复计入。）

## 8. 判定

**PASS** — 可部署且已部署。W-1 属规则允许的例外，W-2 为跨站批量遗留、已明确交接。
