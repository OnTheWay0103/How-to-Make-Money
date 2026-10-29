# QA (quick) — waterparksimulatorwiki — 2026-10-30

## 范围

- 本轮变更：新增 1 篇 `content/guides/lag-low-fps-performance-guide.md`
- 线上：https://waterparksimulatorwiki.vercel.app/guides/lag-low-fps-performance-guide

## 结果

**QA: ✅ PASS（1/1）**

| 检查项 | 结果 | 证据 |
|---|---|---|
| 虚构检测 | ✅ | 系统需求（GTX 1050/1070、8 GB、20 GB、i5-3550/6400）来自官方 appdetails；`injury frame rate dependent`（1.0.63）、`file corrupted… park looks empty`（1.0.30）、`conflict with multiple pop-ups`（1.0.120）均为公告原文；FPS Limit 滑块/VSync/Borderless/后台下载/模组影响全部标 `[Community]`，未包装成官方机制；"FPS 上限为何缓解卡顿"标 `[Unconfirmed]` |
| 版本一致性 | ✅ | frontmatter `version: 1.0.120` = 最新公告 1.0.120（2026-10-28）；正文引用 1.0.119（2026-10-23）、1.0.63（2026-08-18）、1.0.30（2026-08-04），无版本错配 |
| 跨站残留 | ✅ | `node scripts/check-site-residue.mjs waterparksimulatorwiki` → 无模板残留，exit 0 |
| 来源可核验 | ✅ | 6 条 sources 带 URL + 日期；Steam 商店 appdetails 与 4 篇公告均实测抓取正文；fan wiki 与聚合站 200 可访问 |
| 线上 URL 200 | ✅ | HTTP 200，`<h1>` 数量 1，正文命中 "VSync" / "Borderless Fullscreen" / "GeForce GTX 1050" |
| 内部链接 | ✅ | 4 条站内链接（visitor-problems / stuck-guests-fix / price-platforms-system-requirements / co-op-multiplayer）目标均存在 |
| 首段长度 | ✅ | 57 词（口径 40–60） |
| related 块状数组 | ✅ | `lint-guides` 0 ERROR |
| 词数 | ✅ | 1,278 词（不含表格，总 1,496），在 800–1,500 口径内 |

## 诚实标注

- 评测采样（405 篇，负面中 Bugs & crashes 19%；100h+ 情绪 85%）来自 `videogamescritic.com` 的关键词计数，属第三方自制统计 → 标 `[Editorial]`，不作为官方数据。
- "10 September 2026 坏构建 → 回滚后 1.0.91"仅见 fan wiki 转述 → 标 `[Community]`。
- PS5 性能未取证 → 正文明确写"本页只覆盖 Steam 版"，并标 `[Unconfirmed]`。

## 已知限制（不阻断）

- 本机 `steamcommunity.com` 全域不可达、Reddit 403、Steam `appreviews` 302，无法附 Steam 评测原话；玩家侧证据改用 2026-10-30 Google Suggest 实采的 `why is my waterpark simulator lagging` / `really laggy` / `low fps` / `lag spikes` / `ps5 lag`，加上聚合站 405 篇采样计数。
- `lint-guides` 1 条 WARN：`updated` 在 UTC 未来（本机 CST 与 UTC 时区差）。
- `seo-check --live` WARN 57 条全为存量问题（静态页 canonical、首页/汇总页 title/desc 超长、旧稿首段过短等），本轮未新增 ERROR。

## 未处理（按 2026-10-29 决定）

- canonical WARN、title/description 长度 WARN：不处理。
