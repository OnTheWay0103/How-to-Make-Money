# QA Report — QA-EXPAND-017-SEPHIRIA-9/5

> 模式: quick | 范围: sephiriawiki 1 篇新指南（controller-casting-keybind-fix-guide.md）
> 审核日期: 2026-09-05 | 审核员: QA 审核员（独立，只读 + 本报告）
> 游戏事实基准: Steam 商店页 / 官方 17173 补丁镜像 / Steam 社区 / 第三方评测

## 执行摘要

- **结论: 🟡 警告（可提交，记录 issue；建议部署前修正版本引用）**
- 残留扫描: ✅ Clean
- 编造检查: ✅ 无虚构机制（核心机制全部有真实来源），但存在**版本号归属错误**（见问题 1）
- 诚实标注: ⚠️ 单源细节有 [Unconfirmed]；但补丁版本断言标 [Official] 却与所引官方镜像矛盾 → 未做 [Unconfirmed] 标注
- 体量: ✅ 正文 1425 词（800–1500）
- 注册: ✅ 动态注册，无 404 风险
- EXPAND-017 交付记录: ✅ keyword-results/sephiriawiki-expand-9-5.md 存在，反馈可溯源

### 核心发现（一句话）

文章把快速施法槽 / RT 默认键 / 手柄技能 UI 等改动**全部归到补丁 1.0.30（8/20）**，但官方增量补丁记录显示这批改动实际在 **1.0.26（8/13）** 已实装；指南引用的 17173 1.0.30 镜像并不含这些条目。功能全部真实存在（非编造），但版本归属系统性错误，贯穿 title/description/Official 来源/正文多处/FAQ。

---

## 发现清单

| # | 严重度 | 文件:行 | 问题类型 | 描述 | 修改建议 |
|---|--------|--------|---------|------|---------|
| 1 | 🟡 HIGH | controller-casting-keybind-fix-guide.md L2/L3/L11/L22/L45–50/L54/L55/L57/L73/L82 + sources | 版本归属错误（一致性/事实） | 快速施法槽+RT 默认 QC1+手柄技能 UI+施法易用性+摇杆误绑修复+DualSense 图标修复+DualShock 触摸板图 = **1.0.26（2026-08-13）** 实装（17173 1.0.26 镜像逐字确认）。指南全部归到 **1.0.30（8/20）**。L54「None of the quick-cast additions exist on older builds」不成立（1.0.26–1.0.29 已有）。指南引用的 17173 1.0.30 镜像（逐字读取）并不含这些条目 → 所引官方证据与断言矛盾。Steam 1.0.30 公告页（索引可见）确实 recap 了这些条目，是疑似误归因来源，但 1.0.30 增量补丁不含。 | 将「1.0.30 added quick-cast / RT 默认」表述改为「1.0.26（8/13）及后续版本实装」，或改用「8 月补丁周期 / August patch cycle」；删除/弱化 L54「older builds 全无」；或在公告页 recap 无法排除前把相关条目改标 [Unconfirmed] 并注明 Steam 公告为累计 recap。 |
| 2 | 🟡 MED | L48/L57 + sources L11 | 单源未标 | 「magic-cast mode not canceling when the Steam overlay is open」修复标 [Official]，但在 17173 1.0.30 逐字镜像与 1.0.26/1.0.28 镜像均未出现；仅 Steam 1.0.30 公告页（搜索引擎索引摘要）支持。可能是 17173 中文镜像漏译，属真实条目，但当前单源且未标。 | 保留但补标 [Official — 单源，17173 镜像未收录]，或标 [Unconfirmed]。 |
| 3 | 🟢 LOW | sources L13 + 正文 L20/L36–37 | 来源归因过宽 | frontmatter Community 来源把「mode-toggle 施法 / 施法时无法闪避 / 攻击瞄准同手拇指 / RT 闲置」抱怨并列归因于中文评测 **与**「Questions about controller?」帖。逐字核查该帖实为 demo 版手柄问题（右摇杆光标、转向慢、按键提示显示键盘键、改键不生效、demo 专属已解决）——不含 mode-toggle 抱怨。中文评测确实含这些抱怨。帖子是真实手柄反馈帖，但不是这些具体抱怨的来源。 | 把帖子在 Community 来源中的作用收窄为「controller UX/改键抱怨」；mode-toggle/RT 闲置等归中文评测。 |
| — | ✅ | 其余各项 | — | 见下方逐项检查 | 无 |

---

## 逐项检查

### a) 残留扫描 — ✅ Clean
- 正则扫描他站游戏名/域名/模板短语（Witchspire/SpiritVale/mistfall/aincrad/The Mound/DinoBlade/Tears of Metal/Grain Rot/NACON/cooperative PvE extraction horror/cursed jungle/SpiritVale Studio 等全名单）→ 0 匹配。
- 模板/AI 套话/TODO/占位符扫描 → 0 匹配。
- 无短代码残留、无他站域名。

### b) 编造检查 — ✅ 无虚构机制（版本归属除外，见问题 1）
WebSearch 抽查 ≥3 高置信断言 → 来源对应：

| # | 指南断言 | 判定 | 来源 |
|---|---------|------|------|
| 1 | 游戏真实存在：TEAM HORAY（Dungreed 工作室），1.0 于 2026-07-31 Steam 上线 | ✅ | gamebiz.jp/news/430523；vandal/tech.yahoo/thestate 转载；17173 1.0 镜像 07312026/231256229 |
| 2 | 默认手柄布局：LT/L2 魔法模式、攻击 X、冲刺 A、消耗品 Y、交互 RB、特殊 LB、移动左摇杆、瞄准右摇杆 | ✅ | volx.jp/sephiria-keyboard-controller-setting/（逐字：魔法モード=LT/L2、攻撃=X/□、ダッシュ=A/×、消耗品=Y/△、相互作用=RB/R1、移動=Lスティック、照準=Rスティック） |
| 3 | 中文 Steam 评测抱怨「mode-toggle 施法无独立施法键 / 施法无法兼顾防御冲刺 / 攻击+瞄准同右手拇指 / 默认不用 RT」 | ✅ | steamcommunity.com/app/2436940/reviews?l=schinese&browsefilter=toprated（索引正文确认，2026.08.13 评测） |
| 4 | Steam 讨论帖「Questions about controller?」真实存在 | ✅ | steamcommunity.com/app/2436940/discussions/0/596277178174278609（逐字：demo 手柄光标/提示/改键问题，demo 专属）——但内容非 mode-toggle 抱怨（见问题 3） |
| 5 | vgover 1.0 重评 5/10，自定义键位差 + 部分键盘键绑不上 | ✅ | vgover.com/news/230905（逐字：重评 5/10；「发动型神器和魔法书一多就得自定义绑定按键，但这方面开发者没做好…键盘按键无法绑定」） |
| 6 | sarusarugame 日评「钢琴家指法」LT+按键施法、弹幕中犹豫致命 | ✅ | sarusarugame.blog/sephiria-review-3/（索引正文：パッドでの魔法切り替えが煩雑、「ピアニストのような指使い」、LT(L2)押しながら魔法放つ、弹幕中一瞬の迷いが致命傷） |
| 7 | **快速施法槽 + RT 默认 QC1 + 手柄技能 UI + 施法易用性 + 摇杆误绑 + DualSense 图标修复 + DualShock 触摸板 = 1.0.30** | ❌ **版本误归因** | 17173 1.0.26 镜像（08132026/225123646.shtml）逐字确认以上全部在 **1.0.26（8/13）**；17173 1.0.30 镜像（08202026/224633949.shtml）逐字**不含**以上任何条目。Steam 1.0.30 公告页（allnews 索引摘要，匈牙利/中文）recap 了这些条目 → 唯一支持 1.0.30 的说法，疑为累计公告。见问题 1。 |
| 8 | 1.0.28 修手柄无法改困难模式难度 | ✅ | 17173 1.0.28 镜像（08142026/230100289.shtml）逐字：「修复了使用手柄无法正常更改困难模式难度的Bug」 |
| 9 | 「magic-cast mode not canceling when Steam overlay open」修复 | ⚠️ 单源 | Steam 1.0.30 公告页索引摘要支持；17173 1.0.30/1.0.26/1.0.28 镜像均无。见问题 2。 |

结论：无凭空虚构机制/数值/Boss/武器名；1.0.26 才是 quick-cast 实装版本这一事实性错误需修正。

### c) 内部一致性 — ✅（除问题 1 的版本表述外）
- frontmatter 字段与同站 schema 一致：`category: "Guides"` 与该站 fix-guide 惯例一致（coop-freeze-recovery、multiplayer-connection-fix、save-file 均为 Guides）；version/updated/keywords/related/sources 结构同 katana-build-guide。
- related[] 6 个 slug（controls-settings/staff-build/crossbow-build/builds/weapons/full-release）在本站 content/guides/ 全部真实存在。
- title/description 与正文相符（quick-cast 设置、改键选项、1.0.30 变化）。
- home-content.md：新行 `[Controller Casting & Keybind Fixes]`（L34）已加，coop-freeze-recovery 行（L33）保留完整，表格未破坏（git diff = 2 行纯插入）。
- sources 三层标注（Official/Community/Editorial）结构完整。

### d) 诚实标注 — ⚠️（问题 1、2 除外基本合格）
- 6 处 [Unconfirmed] 覆盖单源细节：默认布局对照游戏内菜单（L31）、vgover 键盘 bug 是否影响所有 build（L39）、绑不上键的兜底（L59）、FAQ 改键是否 bug（L76）。
- Source note（L84）披露 Steam 正文 age-gate 无法直抓、只用索引内容、未虚构玩家引语 → 符合诚实披露惯例。
- 短板：补丁版本断言（问题 1）与 Steam overlay 修复（问题 2）标 [Official] 而未按真实可信度标注。

### e) 体量 — ✅
- 正文（去 frontmatter）= 1425 词，在 800–1500 区间。

### f) 注册核对 — ✅（无 404 风险）
- app/guides/[slug]/page.tsx `generateStaticParams()` = getAllGuides() 扫 content/guides/*.md → 新文件自动生成页面；不存在静态注册清单。
- app/sitemap.ts 直接 readdirSync content/guides → 自动收录。
- app/guides/page.tsx + home-content 均从同一目录枚举 → 新指南自动出现在索引页。

### g) 参照对比（katana-build-guide.md）— ✅
- schema/结构/3-tier sources/source note 风格/FAQ/Related Guides 尾部块与同站近期指南一致。
- 正文质量：中英混合页面与同站一致（面向国际+中文长尾，符合该站惯例）。

---

## EXPAND-017 交付核对 — ✅
- keyword-results/sephiriawiki-expand-9-5.md 存在（5.9K）。
- 反馈可溯源：6 个来源全部带 URL（Steam 讨论帖、中文评测页、vgover、sarusarugame、volx.jp、Steam 公告/17173），选题理由、四条件核对、候选排除记录、合规确认齐全。
- 记录声称「正文 1425 词」与实测一致；声称未触碰 coop-freeze-recovery-guide.md → git status 确认该文件独立未提交、未被本批次改动。
- 注意：记录本身沿用了同一 1.0.30 归因（第 33 行来源表），未独立核对增量补丁版本 → 与问题 1 同源。

---

## 给主 Agent 的决策摘要

```
QA 结果: 🟡 WARN (3) | 🔴 FAIL (0)
如部署前接受低成本修正：
  [sephiriawiki] controller-casting-keybind-fix-guide.md — 问题1: 把「1.0.30 新增 quick-cast/RT/技能UI」改为「1.0.26(8/13)及后续实装」(或改「8月补丁周期」)，删除/弱化 L54「older builds 全无」；问题2: Steam overlay 修复补标单源/[Unconfirmed]；问题3: 讨论帖来源作用收窄。
若主 Agent 认为 title/description 中的「1.0.30 Changes」属硬事实卖点 → 该文件视为 🔴 需修正后重审；若接受改版本表述 → 🟡 可提交并记录 issue。
其余检查全部通过（残留 ✅ / 机制编造 ✅ / 一致性 ✅ / 体量 ✅ / 注册 ✅ / 记录 ✅）。
```
