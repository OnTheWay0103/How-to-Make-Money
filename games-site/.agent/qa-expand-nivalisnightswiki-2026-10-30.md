# QA (quick) — nivalisnightswiki — 2026-10-30

## 范围

- 本轮变更：新增 1 篇 `content/guides/fill-venue-inventory-stuck-guide.md`
- 线上：https://nivalisnightswiki.vercel.app/guides/fill-venue-inventory-stuck-guide

## 结果

**QA: ✅ PASS（1/1）**

| 检查项 | 结果 | 证据 |
|---|---|---|
| 虚构检测 | ✅ | 全文只有 3 处数字/机制断言，均指向官方公告：仓储 100 普通 + 50 冷藏（Update #2）、员工任务优先级（Update #2）、经理负责送货（Update #7）。无 BOSS/NPC 名、无编造日期 |
| 版本一致性 | ✅ | frontmatter `version: 1.0`，`updated/date: 2026-10-30`；正文引用最新 Update #7 = 2026-10-29，未出现旧版本号混用 |
| 跨站残留 | ✅ | `node scripts/check-site-residue.mjs nivalisnightswiki` → "无模板残留"，exit 0 |
| 来源可核验 | ✅ | 6 条 sources 全部带 URL + 日期；4 条 Steam 官方公告已用 `dig @1.1.1.1` + `curl --resolve` 实测抓取正文；社区 wiki 页 200 且自带 Updated/Verified 2026-10-03 |
| 线上 URL 200 | ✅ | HTTP 200，`<h1>` 数量 1，正文命中 "Kitchen Buffet" / "Fill Venue Inventory" |
| 内部链接 | ✅ | 5 条站内攻略链接目标均存在（manager-restock / cooking-recipes-rotten-food / greenhouse / best-business） |
| 首段长度 | ✅ | 54 词（口径 40–60） |
| related 块状数组 | ✅ | `lint-guides` 无 related 相关 ERROR |
| 词数 | ✅ | 1,218 词（不含表格），在 800–1,500 口径内 |

## 已知限制（不阻断）

- 本机 `steamcommunity.com`（讨论区/评测/成就）全线不可达、Reddit 403、Steam `appreviews` 接口 302 跳首页，因此无法附 Steam 评测原话。玩家侧证据改用 2026-10-30 Google Suggest 实采词（`stuck on fill venue inventory` / `stuck on buy ingredients`）+ 官方 Update #1 自述"该目标会造成 confusion"，两者互相印证。
- `lint-guides` 报 1 条 WARN：`updated` 日期在 UTC 未来（本机 CST 04:13 = UTC 前一日）。属时区差，不是内容问题。
- `seo-check --live` 的 WARN 全部为站点存量问题（静态页 canonical、首页 title/desc 长度、6 篇旧稿首段超长等），本轮未新增 ERROR。

## 未处理（按 2026-10-29 决定）

- canonical WARN、title/description 长度 WARN：不处理。
