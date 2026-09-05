# The Mound 内容扩充记录 — 9/6

> 模式: expand-feedback | 站点: themoundwiki | 游戏: The Mound: Omen of Cthulhu (ACE Team / NACON, Steam app 2569760, 2026-07-15)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）
> 结果: ✅ 写 1 篇（motion-sickness-camera-fix-guide）并部署

## 一、反馈来源采集（2026-09-06 实际抓取，优先 9/4 之后信号）

### 官方（补丁公告）
- [Steam Community announcements — Patch 1.03 "Quality of Life Hotfixes"](https://steamcommunity.com/app/2569760/allnews/?l=koreana) — 新增屏幕中央小圆点辅助选项「以缓解晕动症 (motion sickness)」；FOV 滑杆范围由 85–115 扩至 75–125；新增单人 AI 同伴指令（静音武器 vs 步枪）；可旁观时退出；等。
- [Steam Community announcements — 首发更新 "What's new since the demo"](https://steamcommunity.com/app/2569760/allnews/?l=tchinese)（同 SteamDB [patchnotes/24043641](https://steamdb.info/patchnotes/24043641/)）— "Fixed camera smoothing when disabling all camera effects, for 1:1 mouse-to-camera movement"；FOV 扩至 75–125。
- [Steam Community announcements — Patch 1.01 系列](https://steamcommunity.com/app/2569760/allnews/) — 首次启动新增 电影化/普通(Normal) 相机预选屏（补丁说明称 Standard）；修复 Motion Blur 滑杆。

### 编辑评测 / 设置指南（独立来源）
- [Gamer Social Club — First Major Patch 报道（2026-07-22）](https://gamersocialclub.ca/2026/07/22/the-mound-omen-of-cthulhu-receives-first-major-patch/) — 首次启动预选屏「cinematic camera 或 standard camera」，并注明 standard 相机「may help with feelings of delayed interaction or motion sickness」。
- [hone.gg — Best PC Settings](https://hone.gg/blog/the-mound-omen-of-cthulhu-best-settings/) — Camera Style = Cinematic / Normal（补丁 1.01 说明称 Standard、选屏标 Normal）；Motion Blur 滑杆 1.01 修复；建议 Normal + Motion Blur Off + 锁帧。
- [ingamenews — First Steam Hotfix](https://ingamenews.com/pc-gaming/the-mound-omen-of-cthulhu-receives-first-steam-hotfix/)（抓取时 410，标题级佐证）；ruliweb 韩文转载 Patch 1.01 细节（[bbs.ruliweb.com](https://bbs.ruliweb.com/game/87323/read/2503441)）。

### 社区（负面优先 / 晕动抱怨）
- [Steam 差评（中文，经 gametrend.jp 索引）](https://steamcommunity.com/app/2569760/reviews/) — 抱怨镜头摆动剧烈、即使把 sway 调低仍存在，描述「非常晕 (very nauseating)」。
- [revillution.net — 综合评测讨论帖](https://www.revillution.net/threads/this-horror-game-is-getting-mixed-reviews-but-its-best-parts-are-amazing.22411/) — 头晃(headbob)/武器摆动(weapon sway)导致部分玩家恶心。

## 二、选题四条件核对

**新指南**: `motion-sickness-camera-fix-guide.md` — *The Mound Motion Sickness Fix — Camera Settings That Stop the Nausea*

| 条件 | 判定 | 依据 |
|------|------|------|
| 高频（≥3 独立来源） | ✅ | 晕动/恶心问题同时被：① Steam 差评（中文）② revillution 综合讨论帖 ③ 官方 Patch 1.03 专为缓解晕动加中央圆点 + 扩 FOV（官方对问题普遍性的承认）④ GamerSocialClub 报道 standard 相机「may help with motion sickness」⑤ hone.gg 设置指南专门处理相机舒适度。≥3 独立成立。 |
| 具体 | ✅ | 「镜头晕车怎么关/怎么设置」是明确可写成一文的设置问题（搜索意图: motion sickness / nausea / camera too shaky / FOV）。 |
| 缺口（对照现有 slug） | ✅ | 站内 36 篇无晕动/相机舒适专项；controls-settings-guide（7/14 编写）早于相机补丁，仅有一行「Camera Shake Intensity — Reduce for motion sensitivity」，未覆盖 Camera Style(电影化/普通)、中央圆点、FOV 75–125、关闭相机特效 1:1 鼠标。逐条 grep（cinematic/camera style/center dot/head bob/fov range）零命中。 |
| 不编造 | ✅ | 每条设置事实挂官方补丁或编辑来源：① 预选屏/standard 相机（GamerSocialClub+hone.gg+官方）② Camera Style 双名 Normal/Standard（hone.gg）③ Motion Blur 滑杆 1.01 修复、建议 Off（hone.gg）④ FOV 75–125（官方 Patch 1.03）⑤ 中央圆点（官方 Patch 1.03）⑥ 关相机特效→1:1（官方首发更新）⑦ 头晃恶心=玩家报告，标注 [Unconfirmed]。无编造数值/Boss/引语。 |

## 三、产出清单（themoundwiki）
- 新指南: `content/guides/motion-sickness-camera-fix-guide.md`（frontmatter 按站内 schema；正文 1452 词，800–1500 ✓；无 sources frontmatter——themound lib/guides.ts 简易解析器不支持嵌套对象，沿用站内 isolation-guide/blood-moon-guide 的正文内分层 Sources 惯例）
- home-content: `content/home-content.md` Quick Navigation 在 Performance & FPS 行下加 1 行（保留全部既有行，含 9/4 blood-moon 行）
- 部署: ./deploy-wiki-site.sh themoundwiki → 线上验证（见 QA 报告）

## 四、自检
- related[] 3 个 slug（controls-settings-guide/performance-fps-fix-guide/faq-content）全部存在 ✅
- 站内 /guides/ 内链 0 BROKEN ✅；无 CJK、无他站站名/域名残留 ✅
- 无法以官方/编辑来源证实的信息均标 [Unconfirmed]（头晃幅度、残余 bobbing）✅
- 未触碰 updates-patch-notes-guide 既有正文（其 1.0.1 滞后属 P0 建议，另记）✅
