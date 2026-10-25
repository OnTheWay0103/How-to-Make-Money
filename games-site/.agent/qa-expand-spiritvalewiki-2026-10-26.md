# QA quick — spiritvalewiki / multistrike-vs-auto-attack-chain-guide

- 审核日期：2026-10-26
- 对象：10-25 扩充篇（`multistrike-vs-auto-attack-chain-guide.md`，2,044 词）
- 结论：**PASS**（修正 1 项后通过）

## 检查项

| 项 | 结果 | 证据 |
|---|---|---|
| 正文词数 ≥1,200 | ✅ 2,044 | `wc -w` |
| H1 数量 = 1 | ✅ 1（H2 9 个） | `grep -c '^# '` |
| title 40–60 | ⚠️→✅ 原 90 → 改 56 | `title` |
| description 140–160 | ⚠️→✅ 原 276 → 改 160 | `description` |
| sources ≥1 Official | ✅ | frontmatter `sources` 三段 Official |
| related 块状数组 | ✅ | 6 条 |
| 中文残留 | ✅ 0 | 正则扫 CJK |
| `[Unconfirmed]` 标记 | ✅ 4 处（未核实数字已标注） | 正文 |
| `lint-guides.mjs --changed` | ✅ 0 ERROR | 输出 |
| 线上可达 | ✅ HTTP 200，title 已生效 | `https://spiritvalewiki.vercel.app/guides/multistrike-vs-auto-attack-chain-guide` |

## 本次修正

title/description 超长 → 按 `docs/STRATEGY-内容生产.md` 4.1 改为 56 / 160 字符，保留关键词
`multistrike` 与 `auto attack chain`；已重新部署并线上核对 `<title>`。

## 未覆盖

- 数值类事实（multistrike 倍率、技能名单）本次未逐条回源，只确认页面自带 `[Unconfirmed]` 标注；
  深度核验留给下次 QA deep。
