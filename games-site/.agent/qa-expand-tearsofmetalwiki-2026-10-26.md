# QA quick — tearsofmetalwiki / aodh-the-vigil-unlock-guide

- 审核日期：2026-10-26
- 对象：10-25 扩充篇（`aodh-the-vigil-unlock-guide.md`，1,917 词）
- 结论：**PASS**（修正 1 项后通过）

## 检查项

| 项 | 结果 | 证据 |
|---|---|---|
| 正文词数 ≥1,200 | ✅ 1,917 | `wc -w` |
| H1 数量 = 1 | ✅ 1（H2 7 个） | `grep -c '^# '` |
| title 40–60 | ⚠️→✅ 原 82 → 改 44 | `title` |
| description 140–160 | ⚠️→✅ 原 279 → 改 157 | `description` |
| sources ≥1 Official | ✅ | frontmatter `sources` 三段 Official + Community + Editorial |
| related 块状数组 | ✅ | 6 条 |
| 中文残留 | ✅ 0 | 正则扫 CJK |
| `[Unconfirmed]` 标记 | ✅ 9 处（解锁路线为社区口径，已逐条标注） | 正文 |
| `lint-guides.mjs --changed` | ✅ 0 ERROR | 输出 |
| 线上可达 | ✅ HTTP 200，title 已生效 | `https://tearsofmetalwiki.vercel.app/guides/aodh-the-vigil-unlock-guide` |

## 本次修正

title/description 超长 → 改为 44 / 157 字符；title 补 `Tears of Metal` 品牌前缀（原标题以 Aodh 开头，
SERP 截断后看不出是哪个游戏）。已重新部署并线上核对 `<title>`。

## 未覆盖

- 「8 月 13 日补丁新增」与社区解锁路线未逐条回源；页面已标 `[Unconfirmed]` 且区分了官方确认/社区口径，
  深度核验留给下次 QA deep。
