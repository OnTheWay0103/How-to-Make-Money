# QA (quick) — shiftatmidnightwiki — 2026-10-30

> 模式：quick（仅本轮新增页） | 站点：`shiftatmidnightwiki/`
> 范围：`content/guides/save-system-and-cloud-guide.md`（1 篇新增）
> 结论：✅ PASS

## 1. 虚构检测

| 断言 | 判定 | 依据 |
|---|---|---|
| Steam Cloud 于 2026-08-20 更新加入 | ✅ 官方原文 | Steam 公告「15 CUSTOMERS + BUG FIXES」：`Added cloud saves for Steam`（08-20） |
| 无手动存档，只在班次/主要剧情目标结束写盘 | ✅ | shiftatmidnight.wiki、TposeGaming 两独立源一致 |
| 强制结束进程可能导致 Night Transition 存档损坏 | ✅ | shiftatmidnight.wiki / TposeGaming |
| 团灭只重开当前班次，金钱与评分保留 | ✅ | shiftatmidnight.wiki |
| Shift 13 失败在该存档槽留下永久评分惩罚 | ✅ | TposeGaming |
| 存档路径 `LocalLow\Kwalee\ShiftAtMidnight` | ✅ 三源一致 | shiftatmidnight.wiki / TposeGaming / Checkpoint64 |
| 云存档副本在 `userdata\<SteamID>\3722330` | ✅ | shiftatmidnight.wiki |
| Proton 路径 | ✅ | shiftatmidnight.wiki |
| Steam 云不与 Xbox/Game Pass 互通；Xbox Play Anywhere 仅 Xbox↔MS Store | ✅ | TposeGaming / shiftatmidnightwiki |
| 联机用 host 存档 | ✅ | shiftatmidnight.wiki / Checkpoint64 / TposeGaming |
| 客人是否保留个人进度 | ⚠️ 显式标 [Unconfirmed] | TposeGaming 明言未确认；正文未写成事实 |
| 云开关是否默认开启 | ⚠️ 显式标 [Unconfirmed] | 官方未说明 |

未发现编造的 Boss 名、数值、菜单名或日期；所有未确认项均在正文标注。

## 2. 版本与一致性

- `version: "1.0"`（与该站其余攻略口径一致）；`updated/date: 2026-10-30`。
- 正文引用的更新日期（2026-08-20）与 Steam 公告时间戳一致。
- 与站内 `pc-performance-guide` 的存档路径存在冲突：旧页写 `AppData\Local\ShiftAtMidnight\Saved\SaveGames`，本页按三独立源写 `LocalLow\Kwalee\ShiftAtMidnight`。已在正文说明以 LocalLow 为准；旧页属存量缺陷，未改（见交接事项）。

## 3. 跨站残留

`node scripts/check-site-residue.mjs shiftatmidnightwiki` → `✓ 无模板残留`（exit 0）。

## 4. 来源可核验

- sources 共 6 条：Official ×1、Community ×4、Editorial ×1。
- 官方链接 `https://steamcommunity.com/ogg/3722330/announcements/detail/672877388439226838` 经 Steam News CDN 302 目标核对，为 08-20 公告正式页。
- 社区链接均于 2026-10-30 实际抓取全文（TposeGaming 页面标注更新于 2026-07-29，其云存档段落已被 08-20 官方更新取代，正文已注明）。

## 5. 构建与线上

| 检查 | 结果 |
|---|---|
| `pnpm build` | ✅ exit 0，含 `/guides/save-system-and-cloud-guide` 预渲染 |
| `node scripts/lint-guides.mjs shiftatmidnightwiki` | ✅ 0 ERROR（25 WARN 均为存量） |
| `node scripts/seo-check.mjs --site shiftatmidnightwiki --live` | ✅ exit 0，ERROR 0 / WARN 97 |
| `node scripts/check-ad-slots.mjs shiftatmidnightwiki --live` | ✅ exit 0 |
| 线上 `/guides/save-system-and-cloud-guide` | ✅ HTTP 200 |
| 线上 `<h1>` 数量 | ✅ 1 |
| title / description 长度 | ✅ 53 / 158 字符 |
| 正文词数 | ✅ 1,313（区间 800–1500） |

## 6. 发现（不属于本轮新增内容）

| 级别 | 位置 | 问题 | 建议 |
|---|---|---|---|
| 🟡 | `shiftatmidnightwiki/content/home-content.md` | 首页链接 `/guides/tools-traps-guide` 与 `/guides/net-database-guide` 线上均 **404** | 主 Agent 决定：补两页或改首页链接 |
| 🟡 | `shiftatmidnightwiki/content/guides/pc-performance-guide.md` | 存档路径为 `AppData\Local\ShiftAtMidnight\Saved\SaveGames`，与三独立源不符 | 主 Agent 排期修正为 `AppData\LocalLow\Kwalee\ShiftAtMidnight` |
