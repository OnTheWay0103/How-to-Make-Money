# shiftatmidnightwiki 扩词报告 — 2026-10-30

> 任务：每站新增 1 篇 | 站点：`shiftatmidnightwiki/`（Steam app 3722330，https://shiftatmidnightwiki.vercel.app）
> 可扩校验：`node scripts/expansion-targets.mjs --verify shiftatmidnightwiki` → ✅ exit 0（PV30=1014，状态=加码）

## 1. 产出

| 项 | 值 |
|---|---|
| slug | `save-system-and-cloud-guide` |
| 标题 | Shift At Midnight Save Guide: Autosave, Cloud & Co-op（53 字符） |
| description | 158 字符（140–160） |
| 线上 URL | https://shiftatmidnightwiki.vercel.app/guides/save-system-and-cloud-guide |
| 正文词数 | 1,313（800–1500） |
| 站内攻略数 | 36（新增后） |
| 本次部署 | https://shiftatmidnightwiki-fd9u8wnvs-zhaoq0103s-projects.vercel.app |

## 2. 选题依据

**问题：** Shift At Midnight 怎么存档？有没有手动存档 / Steam 云存档？联机时谁的存档算数？备份与恢复怎么做？

三条路径收敛到同一空白：

1. **官方更新驱动**：2026-08-20「15 CUSTOMERS + BUG FIXES」公告明确 `Added cloud saves for Steam`，但站内 35 篇无任何存档/云存档页；`pc-performance-guide` 只在崩溃恢复段落提了一句备份目录（且路径与三独立源不符）。
2. **玩家问题驱动**：多个独立社区文档把该问题作为独立 FAQ 处理——
   - shiftatmidnight.wiki/guide/saves/（2026-10-30 抓取）：`no manual save`、`saves only at shift end`、`%AppData% (Roaming) folder is wrong`、`online sessions use the host's save`。
   - TposeGaming（2026-07-28，07-29 更新）：`The game autosaves once a shift or major objective is completed`、`There's no Save Game option in the pause menu`。
   - Checkpoint64（2026-10-30 抓取）：`usually lives on one person's PC — whoever hosts`、`When they're offline nobody else can carry on`。
3. **采集限制（如实记录）**：`store.steampowered.com/appreviews/3722330` 返回 302 到商店首页（对照同端点历史报告，属本机 IP 对该端点的封锁）；`steamcommunity.com` 与 Reddit 本机 DNS 被投毒/不可达，未能抓到逐字玩家回帖。因此本页玩家侧断言一律以**已抓取全文的社区文档**为 Community 级来源，未虚构任何玩家引文；官方侧用 Steam News API 原文作证。

**查重结论：** 现有 35 个 slug 中无 `save`/`cloud`/`backup` 主题页；`pc-performance-guide` 讲性能与崩溃恢复，`multiplayer-faq-guide` 讲联机设置，均不以存档为搜索意图。新页 intro 与二者不可互换，无自噬。

## 3. 来源表

| # | Tier | 来源 | URL | 日期 |
|---|---|---|---|---|
| 1 | Official | Steam 公告「15 CUSTOMERS + BUG FIXES」（cloud saves） | https://steamcommunity.com/ogg/3722330/announcements/detail/672877388439226838 | 2026-08-20 |
| 2 | Community | Shift At Midnight save files, Steam Cloud, and manual backups | https://shiftatmidnight.wiki/guide/saves/ | 2026-10-30 抓取 |
| 3 | Community | Does Shift at Midnight Save?（TposeGaming） | https://tposegaming.com/does-shift-at-midnight-save/ | 2026-07-28 / 07-29 更新 |
| 4 | Community | Shift At Midnight Save File Location（Checkpoint64） | https://checkpoint64.com/games/shift-at-midnight/save/ | 2026-10-30 抓取 |
| 5 | Community | Shift At Midnight Save: Autosave and Cloud Saves | https://shiftatmidnightonline.com/guides/shift-at-midnight-save | 2026-10-30 抓取 |
| 6 | Editorial | 备份顺序、排障顺序与联机 host 规则 | https://shiftatmidnightwiki.vercel.app/guides/save-system-and-cloud-guide | 2026-10-30 |

## 4. 构建 / SEO / 广告位 / 部署 / QA

| 检查 | 结果 |
|---|---|
| `pnpm build` | ✅ exit 0，`/guides/save-system-and-cloud-guide` 已预渲染 |
| `lint-guides` | ✅ 0 ERROR |
| `check-site-residue` | ✅ 无残留 |
| `seo-check --live --report` | ✅ exit 0，ERROR 0 / WARN 97（WARN 均为存量的 canonical/长度/词数项） |
| `check-ad-slots --live` | ✅ exit 0 |
| 部署 | ✅ `deploy-wiki-site.sh` exit 0，生产 alias HTTP 200 |
| 线上页面 | ✅ 200，`<h1>`=1，官方引文「Added cloud saves for Steam」已渲染 |
| QA quick | ✅ PASS（详见 `.agent/qa-expand-shiftatmidnightwiki-2026-10-30.md`） |

## 5. [Unconfirmed] 清单

- 客人是否保留任何个人进度（host 存档之外）。
- Steam Cloud 对存量安装是否默认开启。
- 除班次完成外还有哪些「主要目标」触发写盘。
- 云/本地冲突时游戏是否弹窗提示。

## 6. 交接事项（主 Agent）

1. 首页 `content/home-content.md` 链接 `/guides/tools-traps-guide`、`/guides/net-database-guide` 线上 404，需补页或改链。
2. `pc-performance-guide.md` 的存档路径与三独立源不符，建议改为 `%USERPROFILE%\AppData\LocalLow\Kwalee\ShiftAtMidnight`。
3. 未执行 git commit / push（按指令）；未改动其他站点。
