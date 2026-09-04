# Sephiria Wiki 每日扩充记录 — EXPAND-017-SEPHIRIA-9/5

> 任务: EXPAND-017-SEPHIRIA-9/5 | 站点: sephiriawiki | 日期: 2026-09-05
> 岗位: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 | 材料版本: 当前 HEAD 工作树 v1
> 产出: 1 篇新指南 `controller-casting-keybind-fix-guide.md` + home-content 加行 + 本记录
> 说明: 9/4 遗留未提交的 `coop-freeze-recovery-guide.md`（联机卡死恢复）视为已覆盖主题 → 联机卡死/co-op freeze 类题材禁用，本轮未触碰该文件。

---

## 1. 现有 slug 清单（34 = 33 既有 + coop-freeze，含 FAQ 内容文件）

artifacts / beginner / boss / builds / chapter-6-final-boss / chapter / controls-settings /
coop-freeze-recovery（已覆盖，禁止选题）/ coop / costumes / crossbow-build / dagger-build /
endgame / faq-content / farming / full-release / game-length / greatsword-build / hard-mode /
inscriptions / katana-build / multiplayer-connection-fix / mystic-pot / potions-consumables /
save-file / secret-rooms / solo / speedrun / staff-build / sword-shield-build / tablets /
talents / weapons

排除思路：6 武器 build 全部已覆盖；co-op 三件套（coop / coop-freeze / multiplayer-connection）已覆盖；
boss / chapters / hard-mode / endgame / ch6-final-boss 已覆盖；controls-settings 存在但仅覆盖通用按键/手柄识别/性能，**未覆盖施法键位与快速施法问题**（缺口）。

---

## 2. 反馈采集来源列表（WebSearch，Steam 正文 age-gate 无法直抓 → 用索引内容，未虚构任何玩家引语）

| # | 来源 | 类型 | 一句话内容 |
|---|------|------|-----------|
| 1 | [Steam 社区帖 "Questions about controller?"](https://steamcommunity.com/app/2436940/discussions/0/596277178174278609) | Community | 玩家直接提问手柄支持/键位自定义，属手柄操作疑问集中的讨论帖。 |
| 2 | [Steam 中文评测页（toprated）](https://steamcommunity.com/app/2436940/reviews?l=schinese&browsefilter=toprated) | Community | 中文评测多次抱怨：手柄施法仅「魔法模式切换」无独立施法键、施法时无法兼顾闪避、攻击与瞄准同用右手拇指、RT 闲置。 |
| 3 | [vgover 1.0 重评 5/10](https://www.vgover.com/news/230905) | Editorial | 指出主动神器/魔法书的自定义键位做得差，部分键盘按键无法绑定。 |
| 4 | [sarusarugame 日文长评](https://sarusarugame.blog/sephiria-review-3/) | Editorial | 手柄无自由改键；LT+按键施法需「钢琴家指法」，弹幕中犹豫即致命。 |
| 5 | [volx.jp 键位/手柄设置指南](https://volx.jp/sephiria-keyboard-controller-setting/) | Editorial | 记录默认布局（LT/L2 魔法模式、攻击 X、冲刺 A 等）与键鼠 1–4 快速施法 + Shift 魔法模式。 |
| 6 | [Steam 更新公告（1.0.30 recap）/ 17173 镜像](https://steamcommunity.com/app/2436940/announcements/) + [17173 赛菲莉娅标签](https://news.17173.com/tag/%E8%B5%9B%E8%8F%B2%E8%8E%89%E5%A8%85) | Official | 「Options→Gamepad」更多快速施法槽、RT 默认=快速施法1、手柄技能 UI、修复摇杆误绑/DualSense 图标/DualShock 触摸板图在 **1.0.26(8/13)** 实装（17173 1.0.26 镜像逐字确认）；Steam 1.0.30 公告为 8 月补丁周期累计 recap，其中 Steam 浮层卡施法模式修复仅该 recap 单源 → [Unconfirmed]；1.0.28(8/14) 修手柄无法改难度。 |

候选排除记录：co-op EXP「队友冲前面导致掉级」— 仅「How does co-op work?」单帖多语言镜像，**不满足 ≥3 独立来源**；
第五章/难度 60 Boss 数值抱怨 — hard-mode-guide 已覆盖 Festival of Blood（吸血词缀）与 6 词缀对策，属内容自噬；
「背包整理负担」— 偏设计批评且 tablets/artifacts 已覆盖放置策略；
「冲刺手感差」— 无法写成可执行 How-to 且来源偏媒体单点。

---

## 3. 选题: Sephiria 手柄施法/键位问题（controller-casting-keybind-fix-guide）

**玩家语言 → 搜索语言**
- "手柄施法不能同时闪避" / "no per-spell keys on gamepad" → "sephiria controller casting fix" / "sephiria quick cast"
- "键盘按键绑不上" → "sephiria rebind not working"
- "RT 键闲置 / 默认键位不合理" → "sephiria controller keybind fix"

**选题理由**
玩家反馈集中在「手柄施法键位设计不合理」这一具体问题上：多个独立来源（中文 Steam 评测、Steam 手柄问答帖、vgover、日文长评）都在描述同一痛点；官方 1.0.26（8/13）已针对性加快速施法槽/RT 默认值/技能 UI 承认并修复（Steam 1.0.30 公告为其累计 recap）。本站既有 controls-settings-guide 只覆盖「手柄识别/Steam Input/性能」，没有一篇解释施法键位怎么设、1.0.26 改了什么、绑不上键怎么办 → 真缺口。写成单篇 How-to 结构清晰（问题→官方改动→设置步骤→FAQ）。

---

## 4. 四条件核对

| 条件 | 判定 | 依据 |
|------|:--:|------|
| 高频（≥3 独立来源） | ✅ | 中文 Steam 评测 + Steam「Questions about controller?」帖 + vgover + sarusarugame（≥3 独立），另有官方 1.0.26 补丁作为该问题的官方承认 |
| 具体（可写单篇 How-to） | ✅ | 手柄施法/快速施法设置/键位绑定失败处理，问题→解决路径明确 |
| 未被覆盖（对照 slug） | ✅ | controls-settings-guide 未覆盖施法键位与快速施法；全站无施法/改键修复专篇；同站无内容自噬 |
| 不编造（数据项可溯源） | ✅ | 全部数值/机制标注 Official/Community/Editorial 来源；单源细节（默认布局细节、键盘绑定 bug 是否全修）标 [Unconfirmed]；无虚构 Boss/机制/数值 |

**合规确认**: 未选联机卡死/co-op freeze 类题；未改/删 coop-freeze-recovery-guide.md；未改其他站文件；仅新增 1 篇；未部署、未 commit。

---

## 5. 完成清单

- [x] sephiriawiki/content/guides/controller-casting-keybind-fix-guide.md（正文 1425 词，800–1500 ✓，frontmatter 与同站格式一致，related[] 全部为本站真实 slug）
- [x] sephiriawiki/content/home-content.md（Quick Navigation 表格插入 1 行，保留 coop-freeze 行）
- [x] keyword-results/sephiriawiki-expand-9-5.md（本文件）
