# QA Report — sephiriawiki crash-launch-black-screen-fix-guide (9/6)

- 模式: quick | 审核范围: sephiriawiki 1 篇新指南 `crash-launch-black-screen-fix-guide.md` + home-content 加行
- 审核日期: 2026-09-06 | 审核员: QA（依据 docs/agents/05 + 06）
- 游戏事实基准: Steam 商店页（app 2436940）/ 开发者补丁史（0.12.3, 1.0.30）/ gameplay.tips 排障指南

## 执行摘要

- 结论: ✅ **PASS（可部署）** — 无 🔴 阻断；2 个 🟢 记录项（选题为常青支持类非「9/3 后新反馈」；含 1 条单源平台个案已标 [Unconfirmed]）
- 残留扫描: ✅ Clean
- 编造检查: ✅ 抽查 ≥6 项核心断言，全部有真实来源或 [Unconfirmed]，无虚构
- 体量: ✅ 正文去 frontmatter ≈ 1344 词（raw wc 1393），800–1500 内
- 一致性: ✅ related[] 与全部 /guides/ 内链 0 BROKEN；updated 2026-09-06；frontmatter YAML 解析通过
- 记录: ✅ keyword-results/sephiriawiki-expand-9-6.md 存在，来源可溯源、候选排除与合规确认齐全

## 发现清单

| # | 严重度 | 位置 | 描述 | 建议 |
|---|--------|------|------|------|
| 1 | 🟢 | 选题本身 | 站内 9/3 后无新补丁/新讨论，本页证据链偏 7–8 月补丁史 + 常青排障页（非「9/3 后优先」素材）。已在 expand 记录诚实披露。 | 非阻断；主 Agent 可决定是否计入当日产出。 |
| 2 | 🟢 | 正文 Fix 7 (macOS) | M2 卡 Logo 为单帖个案，正文与 sources 均标 [Unconfirmed]，处理正确。 | 无需处理；仅记录。 |

## 编造检查：断言 → 来源对应（WebFetch/WebSearch 实核）

| # | 指南断言 | 判定 | 来源 |
|---|---------|------|------|
| 1 | Sephiria = TEAM HORAY，Steam app 2436940 | ✅ | Steam 商店/多篇镜像（此前 QA 亦确认） |
| 2 | patch 0.12.3（2026-07-01）修复「limited DirectX 12 support 下启动即黑屏崩溃」+「corrupted language files 启动失败」 | ✅ 逐字 | WebFetch gaminerd.com/sephiria-0-12-3-patch-notes/ |
| 3 | patch 1.0.30（8/20）「改善了 Steam Deck 特定情况下游戏会关闭的问题」 | ✅ | WebSearch 17173 1.0.30 镜像 + Steam 公告索引 |
| 4 | gameplay.tips 排障指南记录 `-force-d3d11` 启动项 + 改名 `D3D12` 文件夹 + 验证完整性会恢复该文件夹 | ✅ 逐字 | WebFetch gameplay.tips/fixed-solved/sephiria-troubleshooting-guide.html |
| 5 | 日志路径 Windows `AppData/LocalLow/TEAMHORAY/Sephiria`（Player.log） / macOS `~/Library/Logs/TEAMHORAY/Sephiria` | ✅ | WebFetch gameplay.tips（同上） |
| 6 | 存档位置 `%USERPROFILE%\Saved Games\Sephiria`、OneDrive 权限问题 | ✅ | WebFetch gameplay.tips（同上） |
| 7 | Steam 置顶「Sephiria Technical Support FAQ」帖存在 | ✅ 存在性 | steamcommunity.com/app/2436940/discussions/0/596284150003074945（正文 age-gate 无法直抓，仅证存在） |
| 8 | M2 MacBook Air 卡 publisher logo | ⚠️ 单源 | Steam 讨论串标题/摘要；正文标 [Unconfirmed] ✅ |

## 各检查项

- a) 残留扫描: 对新增 1 文件 + home-content 跑全站他站名/域名/CJK/Hugo 短代码正则 → 0 命中 ✅
- b) 编造检查: 见上表，核心断言全部有真实来源；无虚构 Boss/数值/用户引语 ✅
- c) 内部一致性: frontmatter 字段与同站近期指南（controller-casting / coop-freeze）schema 一致；`related[]` 5 项（beginner/controls-settings/save-file/multiplayer-connection-fix/full-release）均真实存在；正文 /guides/ 内链 7 个均真实存在，0 BROKEN；title/description 与正文相符 ✅
- d) 诚实标注: 「新版本是否仍复现 0.12.3 时代黑屏 bug」「-windowed 普适性」「macOS 修复有效性」等均标 [Unconfirmed]；sources 三层（Official/Community/Editorial）结构完整并披露 age-gate 与索引内容局限 ✅
- e) 体量: 正文 ≈1344 词（800–1500）✅
- f) 注册: app/guides/[slug]/page.tsx generateStaticParams = getAllGuides()（lib/guides.ts readdirSync *.md）→ 新文件自动注册，无静态白名单，0 404 风险 ✅
- g) 残留风险: 与 tearsofmetal/grainrot 的 crash-launch 指南为**不同站点**各自独立内容；本页为 Sephiria 专属（TEAMHORAY 路径/1.0.30/0.12.3/macOS/Steam Deck），无跨站复制 ✅

## 最终结论

✅ **PASS — 可部署**。无 🔴；🟢 记录项 2 条不阻断。
