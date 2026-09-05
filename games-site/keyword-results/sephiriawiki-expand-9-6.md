# Sephiria Wiki 每日扩充记录 — 9/6

> 任务: 每日内容扩充（sephiriawiki）| 站点: sephiriawiki | 日期: 2026-09-06
> 岗位: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 材料版本: HEAD 工作树 v1
> 产出: 1 篇新指南 `crash-launch-black-screen-fix-guide.md` + home-content 加行 + 本记录
> 说明: 9/4 遗留 `coop-freeze-recovery-guide.md` 与 9/5 `controller-casting-keybind-fix-guide.md` 视为已覆盖主题，本轮未触碰。未写任何 EXPAND 编号（主 Agent 统一编号）。

---

## 1. 现有 slug 清单（34 = 33 既有 + coop-freeze，含 FAQ 内容文件）与查重结论

artifacts / beginner / boss / builds / chapter-6-final-boss / chapter / controller-casting-keybind / controls-settings /
coop-freeze-recovery（已覆盖，禁止选题）/ coop / costumes / crossbow-build / dagger-build / endgame / faq-content /
farming / full-release / game-length / greatsword-build / hard-mode / inscriptions / katana-build /
multiplayer-connection-fix / mystic-pot / potions-consumables / save-file / secret-rooms / solo / speedrun /
staff-build / sword-shield-build / tablets / talents / weapons

**缺口定位**: 全站 Fix 类指南仅覆盖 controller-casting / coop-freeze / multiplayer-connection / save-file，**没有任何「启动崩溃/黑屏/无法进入游戏」专篇**（对照 tearsofmetal 站的 crash-launch-fix 同类题材）。controls-settings-guide 只管键位/手柄/性能，不含启动修复 → 真缺口。

---

## 2. 反馈采集来源列表（WebSearch + WebFetch，日期覆盖 7–8 月；9/3 后无新补丁/新讨论，见候选排除）

| # | 来源 | 类型 | 一句话内容 |
|---|------|------|-----------|
| 1 | [gameplay.tips《Sephiria Troubleshooting Guide》](https://gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html)（WebFetch 逐字） | Community | 针对 Sephiria 的专项排障页：DirectX 启动崩溃用 `-force-d3d11` 启动项、改名 `D3D12` 文件夹、验证完整性会恢复该文件夹、日志路径 `AppData/LocalLow/TEAMHORAY/Sephiria`(Player.log)、存档权限/OneDrive 拦截首启。 |
| 2 | [gaminerd《Sephiria 0.12.3 Patch Notes》](https://www.gaminerd.com/sephiria-0-12-3-patch-notes/)（WebFetch 逐字） | Official（开发者公告镜像） | 2026-07-01 补丁：「instantly crash from a black screen when launched in environments with limited DirectX 12 support」+「game would fail to run properly when some corrupted language files failed to load」→ 开发者多次修复启动崩溃的直接证据。 |
| 3 | [17173《赛菲莉娅 1.0.30 版本更新》](https://news.17173.com/content/08202026/224633949.shtml) + Steam 公告 | Official | 1.0.30（8/20）「改善了 Steam Deck 在特定情况下游戏会关闭的问题」→ 最近一次补丁仍含启动/运行稳定性修复，说明该主题持续。 |
| 4 | [Steam「Sephiria Technical Support FAQ」置顶帖](https://steamcommunity.com/app/2436940/discussions/0/596284150003074945/) | Community | 官方板块置顶技术支援帖存在（正文 age-gate 无法直抓），佐证启动类技术问题有持续咨询量。 |
| 5 | [Steam 讨论帖：M2 MacBook Air stuck on publisher logo](https://steamcommunity.com/app/2436940/discussions/0/4515506143568852444) | Community | 玩家报告 macOS 卡在发行商 Logo + 闪烁、菜单音乐在播；尝试 `-force-metal`/`-autoconfig`。单帖 → 正文细节标 [Unconfirmed]。 |

**采集日期说明（诚实披露）**: 9/6 检索未发现 9/3 后新补丁（最新仍为 1.0.30，8/20）或 ≥3 独立来源的新反馈；本选题为**真实存在、可溯源、未被覆盖的高频支持类问题**（启动崩溃/黑屏），证据链横跨官方补丁史 + 专项排障指南 + 置顶 FAQ + 平台个案。是否在新版本仍复现已按实标注 [Unconfirmed]。

---

## 3. 候选排除记录

- **co-op 交互时随机卡死**（近期 Steam 讨论串「Fun game, but a reeeally bad coop bug」）— 与 9/4 已覆盖 coop-freeze-recovery-guide（联机卡死恢复）同题，内容自噬红线，排除。
- **多人无重连机制 / 掉线即废档**（VaporLens 聚合 + 多篇评测）— multiplayer-connection-fix + coop-freeze（dropped runs）已覆盖「掉线/卡死后的处理」，且属设计缺口非玩家可操作 How-to，排除。
- **第六章最终 Boss 高血量+回血 / 难度 60 词缀** — chapter-6-final-boss-guide + hard-mode-guide（Festival of Blood 6 词缀）已覆盖；9/5 记录已将该类数值抱怨判为内容自噬，排除。
- **1.0 新增「3 Wonders」** — 除官方 1.0 更新公告外 WebSearch 零独立佐证，不满足 ≥3 独立来源，展开即单源转写，排除。
- **武器平衡/meta（雷强、魔法书弱）** — builds + 6 武器 build + weapons 已覆盖，无新意图，排除。
- **观看队友屏幕（spectator，1.0.26/1.0.30 加入）** — 功能更新非抱怨，玩家需求来源不足，排除。

---

## 4. 选题: Sephiria 启动崩溃/黑屏修复（crash-launch-black-screen-fix-guide）

标题: *Sephiria Crash on Startup / Black Screen Fix — Won't Launch? Force DirectX 11 & More*

**玩家语言 → 搜索语言**: "打不开/黑屏/卡 Logo" → "sephiria crash on startup" / "sephiria black screen" / "sephiria won't launch" / "sephiria force d3d11"

**四条件核对**

| 条件 | 判定 | 依据 |
|------|:--:|------|
| 高频（≥3 独立来源指向同一问题） | ✅ | 官方补丁史 0.12.3(7/1) DX12 黑屏崩溃 + 1.0.30(8/20) Steam Deck 关闭修复 + gameplay.tips 专项排障指南 + Steam 置顶技术 FAQ + macOS 卡 Logo 个案 → ≥4 独立来源指向「启动失败/黑屏/进不去游戏」同一问题族 |
| 具体（可写单篇 How-to） | ✅ | 问题→修复阶梯（-force-d3d11 → 改名 D3D12 文件夹 → 验证完整性 → 更新驱动 → 读 Player.log → 存档权限 → Steam Deck/macOS），路径明确 |
| 未被覆盖（对照 slug） | ✅ | 全站无任何启动崩溃/黑屏专篇；controls-settings 只管键位/性能；与 coop-freeze（跑中卡死）作用域不同，无内容自噬 |
| 不编造（数据项可溯源） | ✅ | 全部修复步骤/补丁归属标注 Official/Community 来源；gameplay.tips 与 gaminerd 经 WebFetch 逐字核对；「新版本是否仍复现」「macOS 修复是否有效」标 [Unconfirmed]；无虚构用户引语 |

**合规确认**: 未选 coop-freeze 类题；未改/删既有指南正文；仅新增 1 篇 + home-content 加行；未触碰其他站文件。

---

## 5. 完成清单

- [x] sephiriawiki/content/guides/crash-launch-black-screen-fix-guide.md（正文去 frontmatter ≈ 1344 词，800–1500 ✓，frontmatter 与同站 schema 一致，related[] 与 /guides/ 内链全部为本站真实 slug，0 BROKEN）
- [x] sephiriawiki/content/home-content.md（Quick Navigation 插入 1 行，位于 Controller Casting 行与 Co-op 行之间，表格 3 列完整）
- [x] keyword-results/sephiriawiki-expand-9-6.md（本文件）

**遗留建议（供主 Agent）**: 本站 9/3 后无新补丁/新讨论，明日若无新素材建议直接 SKIP；若官方出 1.0.31+ 或出现 ≥3 来源新反馈再补。本期启动崩溃题证据链偏「7–8 月补丁史 + 常青排障页」，主 Agent 可复核是否接受作为当日产出。
