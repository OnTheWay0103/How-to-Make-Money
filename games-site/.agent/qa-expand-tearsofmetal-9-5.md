# QA Report — tearsofmetalwiki low-fps-fix-guide (QA-EXPAND-019)

- 任务编号: QA-EXPAND-019-TEARSOFMETAL-9/5
- 材料版本: EXPAND-019 输出 v1
- 审核员: QA（quick 模式，依据 docs/agents/05 + 06 + .claude/skills/quality-assurance.md）
- 审核范围: `tearsofmetalwiki/content/guides/low-fps-fix-guide.md`（1 篇新增）
- 同批说明: armor-break-guide 属 9/4 遗留已单独 QA ✅，未再审；spiritvalewiki = SKIP
- 日期: 2026-09-05

## 执行摘要

- 结论: 🟡 **警告 — 可提交部署，记录 3 个 issue（无 🔴 阻断）**
- 残留扫描: ✅ Clean
- 编造检查: 抽查 ≥10 个高置信断言，无虚构；发现 1 处**引用错配**（内容真实但挂错来源名）+ 1 处**前后 patch 表述不一致**（非虚构，但需对齐）+ 1 处体量超限
- 内部一致性: 🟡（frontmatter 与正文 patch 版本表述需对齐）
- 诚实标注: ✅（无法证实处均有 [Unconfirmed]）
- 注册核对: ✅ 自动注册

## 发现清单

| # | 严重度 | 文件:行号 | 问题类型 | 描述 | 建议操作 |
|---|--------|-----------|---------|------|---------|
| 1 | 🟡 | low-fps-fix-guide.md:122 (Section 4，两处 [2UpSkill] 引用) | 引用错配（citation misattribution） | "GTX 1060-class ~30 FPS at 1080p in heavy waves" 与 "RTX 2060 / RX 5700 XT for stable 60 FPS" 两句**均标注 [2UpSkill]**，但 WebFetch 实测 2UpSkill 文章不含任何 GPU 型号/帧率基准；这些数值实际出自 **XModHub《Fix Tears of Metal Crashing on PC & Best FPS Settings》** 的硬件表（Minimum GTX 1060 6GB → 30 FPS@1080p；Recommended RTX 2060 / RX 5700 XT → 60 FPS stable）。底层事实真实（有真实来源），仅挂错来源。 | 将这两处引用改为 XModHub（fix-tears-of-metal-crashing-best-fps-settings）URL；或删除精确数值改述 "community guides"。非虚构，不阻断，但应在下次修复。 |
| 2 | 🟡 | low-fps-fix-guide.md:11（frontmatter Official sources）vs :111（正文 Section 3 表格首行） | 内部一致性 / 补丁版本表述 | frontmatter 声称 "v.0.11.57863 optimized Acts 1–2 performance"（v0.11.57863 = 8/1 最大补丁，确实含 Act1–2 优化，来源属实）；正文 Section 3 表格只列 "July 31 hotfix (v.0.10.57598)"（7/31 优化热修复，亦含 Act1–2，属实）。两版本**都真实执行过** Act1–2 优化，但同一篇内对"哪个补丁优化了 Act1–2"给出两个 build 号且互不引用，正文遗漏 v0.11.57863 行；另 120→60 默认上限实为 **v0.8.57278（7/24 首个发售后补丁）** 落地，正文仅以 "Early post-launch patch" 泛指。无逐字误归因（每个事件都真实存在），但 chronology 需对齐。 | 在 Section 3 表格补 v0.11.57863（8/1）行，或重写 frontmatter Official 摘要为 "v0.10.57598 (7/31) 与 v0.11.57863 (8/1) 均含 Act1–2 性能优化"；cap 120→60 行可标注精确版本 v0.8.57278 (7/24)。 |
| 3 | 🟡 | low-fps-fix-guide.md:17-157（正文） | 体量超限 | 正文去 frontmatter 约 1789 词（去除 URL/标点口径；含 URL 1947 词），超出任务规格 800–1500 词约 19–30%（同站 crash-launch 参考为 1423 词，符合）。 | 建议压缩 FAQ / Section 4 / Step 3 到 ≤1500 词。SEO 非阻断项，不阻塞部署。 |
| 4 | 🟢 | home-content.md:6 (frontmatter updated) | 元数据 | home-content 已加 low-fps 行（:39）与 armor-break 行（:42），均完整未破坏；但 frontmatter `updated` 仍为 2026-08-11，未随新行刷新；frontmatter `related[]` 亦未含 low-fps/armor-break（curated 型，可接受）。 | 下次批量更新时可将 updated 升为 2026-09-05（可选，非必须）。 |
| 5 | 🟢 | low-fps-fix-guide.md:143 (FAQ) | 措辞强度 | "high polling rates add system overhead that can cause random hitches" 引用 [2UpSkill]——2UpSkill 原文表述更弱（"Probably not" 主因，"can occasionally reduce stuttering"），措辞比来源略强，但属于可接受转述。 | 可选：加 "some players report" 软化。 |

## 编造检查：WebSearch/WebFetch 断言 → 来源对应

| 断言 | 结果 | 来源 |
|------|------|------|
| 官方补丁 v.0.10.57598（7/31）优化 Act1–2 性能/纹理 | ✅ 属实 | vgspoilers patch 页 + thegameswiki update-history |
| v.0.11.57863 优化 Act1–2 性能（8/1 最大发售后补丁，Act3 仍在进行，crossplay 临时关闭） | ✅ 属实（frontmatter 引用正确） | ingamenews 补丁报道 |
| 默认帧率上限 120→60 由某早期发售后补丁下调 | ✅ 属实，精确版本为 v0.8.57278（7/24） | thegameswiki update-history |
| 8/9 热修复 v.0.11.57874.1 通过禁用 Epic Online Services overlay 修复鼠标卡顿 | ✅ 属实 | thegameswiki update-history + Epic 开发者论坛佐证 |
| v.0.14.58630（8/14）多人补丁修复 HP/threat desync 与地图不一致 | ✅ 属实（正文措辞与来源一致） | steamcommunity.com/app/1913120 allnews |
| 2UpSkill《Low FPS Fix: How to Stop Lag and Stutters During Enemy Swarms》真实存在且要点吻合（CPU 瓶颈、140→25、60fps cap、血渍/布娃娃累积、全屏优化、polling rate、帧生成不解 CPU 瓶颈） | ✅ 真实存在，逐条吻合 | WebFetch 2upskill.com 原文 |
| XModHub "Best FPS Settings" 百分比：阴影 Epic→Medium +14%、Post High→Low +8%、AA Epic→High +5%、MB +3% | ✅ 属实，逐字命中 | WebFetch xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/ |
| XModHub 硬件表 GTX 1060→30fps@1080p / RTX 2060/RX 5700 XT→60fps | ✅ 属实（但正文**误引 2UpSkill**，见发现 #1） | WebFetch xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/ |
| GamerScout 报道大战场 GPU 负载 | ✅ 属实（"large battles put real load on the GPU"） | gamerscout.io/games/tears-of-metal-1913120 |
| Backloggd 玩家反馈 late-game 变慢 | ✅ 弱佐证（有用户 request "improving performance, especially late-game"） | backloggd.com 用户活动页 |
| The CPU Guide《Tears of Metal Crashing on PC? 8 Quick FIXES》存在 | ✅ 属实 | thecpuguide.com |
| Steam app id 1913120 | ✅ 属实 | steamcommunity.com/app/1913120 |

## 各检查项明细

- a) 残留扫描: 对目标文件 + home-content 跑技能内全套他站名/域名/模板短语 grep，0 命中 → ✅ Clean
- b) 编造检查: 抽查 12 项高置信断言，全部有真实来源或标 [Unconfirmed]；无虚构 → 无 🔴。唯一例外见发现 #1（引用错配，事实本身真实）
- c) 内部一致性:
  - frontmatter 结构（title/description/category/version/updated/keywords/related/sources 三层）与同站 crash-launch / armor-break 指南一致 ✅
  - related[] 5 个 slug（crash-launch-fix-guide / multiplayer-connection-fix-guide / steam-deck-guide / save-system-guide / patch-notes）在 content/guides/ 全部真实存在 ✅
  - 正文与 title/description 相符（覆盖 frame cap / shadows / AO / post-processing / Windows tweaks / memory-leak / hardware 60fps）✅
  - home-content.md 新增 low-fps 行且未破坏 armor-break 行（git diff 仅 2 行插入，两行均完整）✅
  - sources 三层（Official/Community/Editorial）✅
  - 补丁版本归属: 每个事件均有真实来源，无 sephiria 式"把功能归给错误补丁"的虚构；但 frontmatter/正文对 Act1–2 优化给了两个不同 build 号且互不对齐（见发现 #2）🟡
- d) 诚实标注: 选项名标签、Volumetric Fog、DDU 通用修复、GPU/CPU 判断规则等不确定处均标 [Unconfirmed] ✅
- e) 体量: 约 1789 词（去 URL/标点）/ 1947 词（含 URL），超出 800–1500 → 🟡（见发现 #3）
- f) 注册核对: `lib/guides.ts` `getAllGuides()` 用 fs.readdirSync(content/guides) 通配 *.md 自动注册，无任何静态 slug 白名单；代码目录无手工引用 → low-fps-fix-guide.md 自动注册 ✅
- g) 参照对比: 与 crash-launch-fix-guide.md（同站近期指南）格式一致（frontmatter、Honesty note、Fix ladder 表、patch 表、FAQ、Related Guides）✅

## 最终结论

🟡 **警告 — 可提交部署，记录 issue**：无 🔴 阻断（无虚构、无模板残留、无注册/链接断裂、引用来源全部真实存在）。3 个 🟡 建议在部署后/下轮修复：#1 引用错配（Section 4 硬件数值应引 XModHub 而非 2UpSkill）、#2 frontmatter/正文 patch chronology 对齐 + cap 120→60 精确到 v0.8.57278、#3 体量压缩到 ≤1500 词。2 个 🟢 可选。
