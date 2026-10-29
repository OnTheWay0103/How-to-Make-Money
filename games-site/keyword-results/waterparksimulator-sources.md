# Waterpark Simulator — 素材表（2026-10-30 扩词）

> 对应页面：`waterparksimulatorwiki/content/guides/lag-low-fps-performance-guide.md`
> 采集方式：Steam 官方 appdetails / 公告（`dig @1.1.1.1 store.steampowered.com` → `curl --resolve`）、独立 fan wiki、评测聚合站、Google Suggest（仅作需求证据）。

## 搜索需求证据（Google Suggest，2026-10-30，hl=en&gl=us）

采集命令：`node scripts/harvest-keywords.mjs --game "Waterpark Simulator" --seeds "lag,fps,stuck,not working,how to get stars,ticket price,performance,candy"`

命中且站内零覆盖（全站 21 篇无 fps / performance / lag 相关文件）：

- `waterpark simulator lagging` / `laggy` / `really laggy` / `keeps lagging`
- `waterpark simulator lag fix` / `reduce lag` / `lag spikes`
- `waterpark simulator fps` / `low fps` / `fps drop` / `fps fix` / `fps boost` / `fps limit` / `bad fps` / `frame rate`
- `waterpark simulator performance issues` / `bad performance` / `performance mod`
- `waterpark simulator ps5 lag` / `ps5 fps`
- `why is my waterpark simulator lagging`

## 来源 1：A 官方 — Steam 商店页 / appdetails（系统需求）
- URL: https://store.steampowered.com/app/3293260/Waterpark_Simulator/（正文经 `https://store.steampowered.com/api/appdetails?appids=3293260` 读取）
- 抓取日期：2026-10-30
- 关键内容（原文）：
  - Minimum: `Windows (64-bit) 10`, `Intel Core i5-3550`, `8 GB RAM`, `NVidia GeForce GTX 1050 or AMD Radeon RX 570`, `DirectX: Version 11`, `20 GB available space`
  - Recommended: `Intel Core i5-6400`, `8 GB RAM`, `NVidia GeForce GTX 1070 or AMD Radeon RX Vega 56`
  - platforms: `windows: true, mac: false, linux: false`

## 来源 2：A 官方 — UPDATE 1.0.63
- URL: https://store.steampowered.com/news/app/3293260/view/547902498070858255
- 抓取日期：2026-10-30（公告日期 2026-08-18）
- 关键内容（原文）：`Fixed a case where injuries were frame rate dependent, causing unintended injuries.`

## 来源 3：A 官方 — UPDATE 1.0.30（覆盖 1.0.21–1.0.31）
- URL: https://store.steampowered.com/news/app/3293260/view/714534317091457187
- 抓取日期：2026-10-30（公告日期 2026-08-04）
- 关键内容（原文）：`after an update in some rare occasions, your install gets 1 file corrupted, not to the point of the game not launching, but enough to do stupid things like you open your park and it looks empty` → 官方建议 Steam 文件校验：`This rechecks all your game files and finds the one that got corrupted during the download and fixes it`

## 来源 4：A 官方 — UPDATE 1.0.120 / 1.0.119
- URL: https://store.steampowered.com/news/app/3293260/view/703283562262036979 （1.0.120，2026-10-28）
- URL: https://store.steampowered.com/news/app/3293260/view/703282928078034533 （1.0.119，2026-10-23）
- 关键内容（原文）：`Solved a conflict with multiple pop-ups windows/ messages`；`Staff no longer gets stuck in some situations where it shouldn't and no longer teleports`；`Queso no longer leaves immediately in some cases upon arrival at the park entrance without anything happening`

## 来源 5：B 社区 — 独立 fan wiki「Crashing and Lag: Real Fixes」
- URL: https://waterparksimulatorgame.wiki/guides/troubleshooting/
- 抓取日期：2026-10-30
- 关键内容（原文摘录）：
  - `For stutter: open Settings, go to Video, and max the FPS Limit slider — disable vsync first if the slider is not there.`
  - `the FPS option only becomes visible once vsync is off`
  - `Switch the display mode to Borderless Fullscreen in Settings › Video — a Steam forum lag thread was closed by exactly that change.`
  - `A version-mismatched mod can cost real performance.`
  - `every guest is a physics object with satisfaction state, and every attraction is tracking queues and wear`
  - `If you run mods, disable them.` / `Check whether Steam is downloading something in the background`
  - 该页自列来源：Steam Community 置顶帮助帖、Steam「Game Crashes」讨论、r/waterparksimulator、官方 PlayStation 补丁页
  - 站点声明为非官方 fan wiki（`unofficial fan site and is not affiliated with, endorsed by, or sponsored by CayPlay`）

## 来源 6：C 编辑/聚合 — videogamescritic.com 405 篇 Steam 评测采样
- URL: https://videogamescritic.com/game/waterpark-simulator-3293260
- 抓取日期：2026-10-30
- 关键内容（原文）：
  - `aspect mentions counted across 405 sampled Steam reviews (389 positive / 16 negative)`
  - 负面里 `Bugs & crashes` 19%、`Grind & repetition` 19%
  - 时长分布：`Under 5h 93%` / `5-15h 96%` / `15-40h 98%` / `40-100h 97%` / `100h+ 85%`
  - `Steam reviews are 96% positive across 14,633 all-time reviews`，`Players reviewing the current build, since the "UPDATE 1.0.99 - Patch Notes" update on Sep 29, 2026, are 98% positive`

## 玩家反馈（真实症状）

- Google Suggest 2026-10-30 实采：`why is my waterpark simulator lagging`、`waterpark simulator really laggy`、`waterpark simulator lag spikes`、`waterpark simulator low fps`、`waterpark simulator ps5 lag` —— 说明性能是当前活跃搜索需求，且站内 21 篇零覆盖。
- 聚合采样（405 篇负面/正面评测关键词计数）显示 `Bugs & crashes` 占负面 19%，与"卡顿/崩溃"投诉量级一致。
- 无法访问：本机 `steamcommunity.com` 全域不可达、Reddit 403、Steam `appreviews` 接口 302，故未能附 Steam 评测原话；改用 fan wiki 转述的 Steam 论坛反馈 + 聚合站数字。

## 标注原则

- FPS Limit 滑块、VSync 依赖、Borderless Fullscreen、后台下载、mod 影响：全部标 `[Community]`，正文不写成官方机制。
- 系统需求、帧率相关 bug 修复、文件校验指引、1.0.119/1.0.120 修复项：标 `[Official]`。
- 评测采样数据：标 `[Editorial]`（聚合站自制统计，非官方）。
- "FPS 上限为何能缓解卡顿"的机制解释官方未说明 → 正文明确标 `[Unconfirmed]`。
