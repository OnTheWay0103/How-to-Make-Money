# SEO 修复清单 — 2026-10-30

站点：deadlydaysroadtripwiki　模式：本地 + 线上
ERROR 0 / WARN 13

## ERROR（必须修）

无。

## WARN（口径偏离，暂不阻塞）

| 代码 | 位置 | 问题 |
|---|---|---|
| S-CANONICAL-STATIC | deadlydaysroadtripwiki/lib/metadata.ts | canonical 只在攻略页生成，静态页（/, /faq, /guides …）没有 canonical（已知缺口，暂不处理） |
| P-INTERNAL | deadlydaysroadtripwiki/content/guides/backpack-and-loot-guide.md | 站内攻略链接 2 条（建议 ≥3） |
| P-INTERNAL | deadlydaysroadtripwiki/content/guides/meta-progression-guide.md | 站内攻略链接 2 条（建议 ≥3） |
| L-TITLE-LEN | deadlydaysroadtripwiki.vercel.app/ | title 26 字符（口径 40–60） |
| L-CANONICAL | deadlydaysroadtripwiki.vercel.app/ | 没有 rel=canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | deadlydaysroadtripwiki.vercel.app/guides | title 39 字符（口径 40–60） |
| L-DESC-LEN | deadlydaysroadtripwiki.vercel.app/guides | description 134 字符（口径 140–160） |
| L-CANONICAL | deadlydaysroadtripwiki.vercel.app/guides | 没有 rel=canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | deadlydaysroadtripwiki.vercel.app/faq | title 83 字符（口径 40–60） |
| L-CANONICAL | deadlydaysroadtripwiki.vercel.app/faq | 没有 rel=canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | deadlydaysroadtripwiki.vercel.app/tier-list | title 90 字符（口径 40–60） |
| L-CANONICAL | deadlydaysroadtripwiki.vercel.app/tier-list | 没有 rel=canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | deadlydaysroadtripwiki.vercel.app/guides/backpack-and-loot-guide | title 80 字符（口径 40–60） |
