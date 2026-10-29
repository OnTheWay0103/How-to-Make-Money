# SEO 修复清单 — 2026-10-29

站点：zombieassaultresurgencewiki　模式：本地 + 线上
ERROR 0 / WARN 11

## ERROR（必须修）

无。

## WARN（口径偏离，暂不阻塞）

| 代码 | 位置 | 问题 |
|---|---|---|
| S-CANONICAL-STATIC | zombieassaultresurgencewiki/lib/metadata.ts | canonical 只在攻略页生成，静态页（/, /faq, /guides …）没有 canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | zombieassaultresurgencewiki.vercel.app/ | title 31 字符（口径 40–60） |
| L-CANONICAL | zombieassaultresurgencewiki.vercel.app/ | 没有 rel=canonical（已知缺口，暂不处理） |
| L-DESC-LEN | zombieassaultresurgencewiki.vercel.app/guides | description 133 字符（口径 140–160） |
| L-CANONICAL | zombieassaultresurgencewiki.vercel.app/guides | 没有 rel=canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | zombieassaultresurgencewiki.vercel.app/faq | title 37 字符（口径 40–60） |
| L-DESC-LEN | zombieassaultresurgencewiki.vercel.app/faq | description 131 字符（口径 140–160） |
| L-CANONICAL | zombieassaultresurgencewiki.vercel.app/faq | 没有 rel=canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | zombieassaultresurgencewiki.vercel.app/tier-list | title 70 字符（口径 40–60） |
| L-CANONICAL | zombieassaultresurgencewiki.vercel.app/tier-list | 没有 rel=canonical（已知缺口，暂不处理） |
| L-TITLE-LEN | zombieassaultresurgencewiki.vercel.app/guides/all-weapons-guide | title 86 字符（口径 40–60） |
