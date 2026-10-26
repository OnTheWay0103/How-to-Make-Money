# QA Report — sephiriawiki expand — 2026-10-26

> 模式: quick（本轮改动 1 篇） | 站点: sephiriawiki | 岗位: QA 审核员 05/06

## 执行摘要

- 范围: 1 站 1 篇新增稿 `content/guides/wishing-fountain-capacity-guide.md`
- 结果: **PASS**（0 🔴 阻断 / 2 🟡 警告 / 0 🟢 建议）

## 1. 虚构检测（逐个专有名词）

| 名词 | 类型 | 验证结果 | 证据 |
|---|---|---|---|
| Wishing Fountain / Wish Fountain | 系统 | ✅ | 官方公告 0.7.43、0.7.45、0.9.5、0.9.6、0.7.50、0.10.0、0.12.4 均点名；两种拼写在官方原文中并存（0.10.0 用 "Wish Fountain"，0.7.45/0.12.4 用 "Wishing Fountain"） |
| Willpower / Will（天赋） | 天赋 | ✅ | 0.10.0 原文 "the talent \"Willpower\""、0.7.43 原文 "the talent 'Will' level 20" |
| Destiny Engraving / Destiny Inscription | 进度层 | ✅ | 0.7.43（Engraving）、1.0.26 / 1.0（Inscription）；正文已说明官方两词并用 |
| Side Bag、Fruit Skewer | 解锁项 | ✅ | 1.0 官方原文 "The Side Bag can be unlocked through a Destiny Inscription"、"A Destiny Inscription quest for the Fruit Skewer"；外部检索（vgspoilers 1.0 notes、2UpSkill）同口径 |
| Journal | UI | ✅ | 0.7.43 "Journal: Added feature to search by tags and grades"；0.9.5 checked items |
| Sapphire | 货币 | ✅ | 官方 0.7.32 / 0.8.12 / 1.0.31 等多处；正文仅在 fan-wiki 口径处提及且标 [Unconfirmed] |
| Luck | 属性 | ✅ | 官方无定义 → 正文按社区口径引用 r/sephiria "Luck Stat?" 线程，未外推 |
| 具体神器/Boss/武器名 | — | ✅ 未出现 | 正文刻意不点名任何神器（理由已写入正文：池子取决于解锁，固定排名对多数账号不成立） |
| PvP / DLC / 联机功能 | — | ✅ 未声称 | 无 |

结论：无虚构。所有数字（4 / +1 / +4 / 9 / 6→5 / 3→4 / 3→2 / 12）均能回到官方原文或明确标 [Unconfirmed]。

## 2. 跨站残留

```
grep -nE "SpiritVale|Witchspire|mistfall|Mistfall|Aincrad|The Mound|Tears of Metal|Grain Rot|EX-Mod|EXMod|ca-pub|NACON" <file>
→ 0 命中
perl CJK 扫描 → 0 命中（全英文，[Unconfirmed] 标记已是英文）
```

## 3. 事实一致性

| 检查项 | 结果 |
|---|---|
| title 57 字符（40–60） | ✅ |
| description 159 字符（140–160） | ✅ |
| H1（markdown 正文） | ✅ 1 个 |
| 正文词数 | ✅ 1,491 词（800–1500） |
| related 块状数组 / 全部 slug 存在 | ✅ 6 个（artifacts/inscriptions/talents/stats-explained/beginner/farming） |
| sources 三层、≥1 Official | ✅ 12 条：Official 7 / Community 3 / Editorial 2 |
| 表格数量 | ✅ 4 个（渲染产物 `<table>` ×4，`<td>-------` 0 处） |
| 数字与官方原文一致 | ✅ 0.10.0 三条原文逐字核对：base 3→4；Willpower 上限 6→5；Lv5 起始骰 3→2、容量 +1；Lv20 容量 +6→+4；由此 4+1+4=9 |
| 站内既有页冲突 | 🟡 见下方 W-1（已在新页内加一段对齐说明，未改旧页） |

## 4. 构建与产物

```
$ cd sephiriawiki && pnpm build
✓ Compiled successfully in 609ms
✓ Generating static pages using 7 workers (57/57)
● /guides/wishing-fountain-capacity-guide   ← 新路由已生成
```

- `.next/server/app/guides/wishing-fountain-capacity-guide.html` 78,388 B
- `sitemap.xml.body` 命中新 slug 1 次
- 渲染产物 `Unconfirmed` 14 处（正文 + 表格），与草稿标记数一致

## 5. lint

```
$ node scripts/lint-guides.mjs sephiriawiki --changed
🔍 lint sephiriawiki — 1 篇（本次改动）
结果：全部通过 ✅
```

## 6. 警告（不阻断）

**W-1 🟡 站内旧页对新系统用了不同命名**
`artifacts-guide.md`（"Destiny Inscriptions include an **Artifact Slot +1** unlock (a second permanent artifact slot)"）与 `inscriptions-guide.md`（优先级表第 4 行 "Artifact Slot +1"）都把赛前携带容量说成一个 "+1 slot" 铭刻，而官方原文从未使用该说法，官方口径是 Wishing Fountain 容量（base 4 + Willpower）。
处理：新页内加一段显式对齐（"read 'artifact slot' as shorthand for fountain capacity"），**未改旧页**（避免单点改动扩散，且旧页属存量无源断言）。建议后续由主 Agent 决定是否回改两页。

**W-2 🟡 模板级 H1 重复（全站既有，非本轮引入）**
`components/GuideLayout.tsx:38` 用 frontmatter title 渲染一个 `<h1>`，正文 markdown 的 `# ` 又渲染一个，故每篇渲染产物都有 2 个 `<h1>`。实测同站既有页 `stuck-soft-lock-recovery-guide`、`sephiria-achievements-guide` 同为 2 个 → 属模板层存量问题，非本轮增量。
处理：不在本轮改（改模板影响全站 42 篇）。建议排期修 GuideLayout 或统一去掉正文 H1。

## 7. 判定

**PASS** — 可部署。W-1 已在新页内自洽处理，W-2 为全站存量且与本文无关。
