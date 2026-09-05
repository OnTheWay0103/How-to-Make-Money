# QA Report — QA-BUILD-007-A

- **模式**: quick
- **日期**: 2026-09-05
- **范围**: anomalypresidentwiki（BUILD-007 新站，未部署）batch A = 8 篇指南 + 基础一致性 + 静态 /faq Deck 表述
- **审核员**: QA 审核员（05 岗位卡 / 06 Profile，skill: quality-assurance quick）
- **审查材料**: anomalypresidentwiki v3（16 指南齐全，5 篇薄指南已扩 ≥800 词，未部署）
- **结果**: ✅ 8/8 通过 | 🟡 2 处低危（可提交） | 🔴 0 阻断

---

## 执行摘要

| 指南 | Residue | 编造抽查 | [Unconfirmed] 诚实标注 | 体量(词) | 结论 |
|------|:--:|:--:|:--:|:--:|:--:|
| anomaly-powers-guide.md | ✅ | ✅ | ✅ | 1076 | ✅ |
| beginner-guide.md | ✅ | ✅ | ✅ | 1021 | ✅ |
| campaign-bus-guide.md | ✅ | ✅ | ✅ | 1195 | ✅ |
| campaign-management.md | ✅ | ✅ | ✅ | 898 | ✅ |
| fluffy-guide.md | ✅ | ✅ | ✅ | 1115 | ✅ |
| night-combat.md | ✅ | ✅ | ✅ | 1068 | ✅ |
| weapons-guide.md | ✅ | ✅ | ✅ | 1040 | ✅ |
| controls-settings-guide.md | ✅ | ✅ | ✅ | 1108 | ✅ |

**最终结论**: ✅ PASS (8/8)，2 处 🟡 低危记录 issue（可提交，下次 deep 复查），无 🔴 阻断。**MUST NOT 项全部满足：未修改/创建任何站点文件，未 deploy/commit；无来源且未标 [Unconfirmed] 的断言未判通过。**

---

## 一、Residue 扫描（a）

范围：`content/guides/` 全部 16 篇（8 篇 batch A + 抽查其余作一致性对照）。

| 检查项 | 结果 |
|---|---|
| 他站游戏名/站名（witchspire/mistfall/aincrad/themound/sephiria/tearsofmetal/grainrot/spiritvale 等 30+ 词） | ✅ CLEAN |
| 模板描述短语（cooperative PvE extraction / cursed jungle / The Mound community / SpiritVale Studio / published by NACON） | ✅ CLEAN |
| CJK / 日文假名 / 韩文残留 | ✅ CLEAN |
| 错误商标 / 他站域名 | ✅ CLEAN（未见） |

**状态**: ✅ Clean（8/8 与全站 16 篇）。

---

## 二、编造检查（b）— WebSearch/WebFetch 断言 → 来源表

共执行 10 次 WebSearch + 2 次 WebFetch（Steam 商店页、GameBrief 原文）。批量 ≥6 达标，每篇 ≥1-2 核心断言已抽查。**全部核心断言证实，无虚构。**

| # | 断言 | 涉及指南 | 验证结果 | 来源 |
|---|------|---------|---------|------|
| 1 | Steam App 3156330 = Anomaly President，Windows，EA 2026-08-03 | beginner、全部 | ✅ 证实 | [steamdb.info/app/3156330](https://steamdb.info/app/3156330/subs/)、[store.steampowered.com/app/3156330](https://store.steampowered.com/app/3156330/Anomaly_President/)（WebFetch） |
| 2 | 开发者 Phew Phew Games（Anomaly Agent 同工作室，土耳其）；发行 Phew Phew Games/Gamedev.ist/Gamersky Games | beginner、controls | ✅ 证实 | [gematsu](https://www.gematsu.com/2024/09/side-scrolling-roguelike-action-game-anomaly-president-announced-for-pc)、[nichegamer](https://nichegamer.com/anomaly-president-launches-in-august/)、store 页 WebFetch |
| 3 | 白天竞选管理 + 夜晚横版动作双循环 | beginner、campaign、night | ✅ 证实 | [steamdb 描述](https://steamdb.info/app/3156330/subs/)、[gamebrief](https://www.gamebrief.net/blog/anomaly-president-review-2026)、[virtual-grip](https://virtual-grip.com/anomaly-president/) |
| 4 | PR 主管（=Minister of Public Relations）的 Anomaly Power = HEART，使人爱上她；demo 首个 Boss 为 Minister of Public Relations | anomaly-powers、beginner | ✅ 证实 | [fanatical](https://www.fanatical.com/en/game/anomaly-president)、[Steam Demo 页](https://store.steampowered.com/app/4254970/Anomaly_President_Demo/) |
| 5 | Boss 击杀授予永久 Anomaly Power，立即使用 | anomaly-powers | ✅ 证实 | [gamebrief 原文 Pros/Key Takeaways](https://www.gamebrief.net/blog/anomaly-president-review-2026)（WebFetch 逐句核对） |
| 6 | Bigman = 邪恶总统最强打手，Roadmap 中登场（动画 WIP） | （batch B bosses-guide 引用，本站一致） | ✅ 证实；是否已上线保持 [Unconfirmed] 正确 | [Steam 新闻 "Road to EA" 鹰派大统领](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&enddate=1782910615) |
| 7 | 价格 $14.99 基础，首发 -20% ≈ $11.99 至 8/17；国区 ¥48 | beginner（仅交叉引用，未在本批正文直接报价） | ✅ 证实 | [steamdb](https://steamdb.info/app/3156330/subs/)、store 页 WebFetch（¥48） |
| 8 | EA 巴士房间：bedroom / TV studio / blacksmith-style upgrade / "vote" canvassing | campaign-bus、beginner、campaign-management | ✅ 证实（GameBrief 原文逐字） | [gamebrief 原文](https://www.gamebrief.net/blog/anomaly-president-review-2026) |
| 9 | Road-to-EA 规划 Dance/Gift/Marketing 房间及其 minigame/功能；是否已实装标 [Unconfirmed] | campaign-bus、campaign-management | ✅ 证实（内容）；是否实装确为未证实 | [Steam 新闻 feed](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&enddate=1782910615) |
| 10 | 首发武器库：Sword/Nunchucks/Claws/Kusarigama/Staff/Hammer(WIP)/Octo-Arms(WIP) + kicks/punches；同时带两把；demo 仅 4 把 | weapons、beginner | ✅ 证实 | [Gamehypes Kusarigama 新闻](https://gamehypes.com/news/anomaly-president-new-weapon-kusarigama)、[updatemonitor](https://www.updatemonitor.com/app/2378620/news/1792751526168471)、[gematsu](https://www.gematsu.com/2024/09/side-scrolling-roguelike-action-game-anomaly-president-announced-for-pc) |
| 11 | Kusarigama 群控/长距、单挑偏慢 | weapons | ✅ 证实 | [Gamehypes](https://gamehypes.com/news/anomaly-president-new-weapon-kusarigama) |
| 12 | 元素三系 Ice/Fire/Electric；Ice 被指过强 | night、beginner | ✅ 证实 | [gamesnight 新手指南](https://gamesnight.nz/anomaly-president-tips-tricks-beginner-guide/)、[chaptercheats](https://www.chaptercheats.com/cheat/pc/785721/anomaly-president/hint/222317) |
| 13 | 敌人有 stamina/posture，破防可处决；黄=可格挡、红=不可格挡 | controls、night | ✅ 证实 | [Respawning 评测](https://respawning.co.uk/reviews/anomaly-president-early-access-review/)、[technetbooks](https://www.technetbooks.com/2026/08/anomaly-president-review-explores.html) |
| 14 | 补丁史：v0.5.0.13(8/11) 世界地图返回巴士改 D-pad Down、跳踢改善；v0.5.0.16(8/14) 新存档默认 Borderless、"Special Attack at Combo End" UI 改善；v0.5.0.18 存在 | controls | ✅ 证实（.13/.16/.18）；**.17 的"bug 修复"版本号未直接证实（见 issue #2）** | [Steam Community v.0.5.0.18 Update](https://steamcommunity.com/app/3156330/allnews/?l=bulgarian) |
| 15 | Steam Deck：多家称 Verified + N-Gamz Deck 表现好/仅密集人群偶降帧；Steam Deck HQ 8/18 报不稳定（FPS 50-55/锁 45、功耗 17-18W） | controls | ✅ 证实（双观点并存，指南已并列） | [N-Gamz](http://n-gamz.com/video-game-review/anomaly-president-test-steam-deck-votez-pour-lui/)、[Steam Deck HQ](https://steamdeckhq.com/ja/news/anomaly-president-early-access-review/)、[virtual-grip](https://virtual-grip.com/anomaly-president/) |
| 16 | Fluffy 三部门（campaign/equipment/battle）+ 忽视会 abandon 或死亡 | fluffy、beginner | ✅ 证实 | store 页 WebFetch、[gamebrief](https://www.gamebrief.net/blog/anomaly-president-review-2026)、[technetbooks](https://www.technetbooks.com/2026/08/anomaly-president-review-explores.html) |
| 17 | "Tamagotchi on the side" 批评 | fluffy、beginner、campaign-management | ✅ 证实（GameBrief 引用玩家原话） | [gamebrief 原文](https://www.gamebrief.net/blog/anomaly-president-review-2026)（WebFetch） |
| 18 | 敌兵薄/复用模型；红眼持棍敌人、犀牛状 Boss（截图为证） | beginner、night | ✅ 证实（GameBrief 截图说明） | [gamebrief 原文截图 caption](https://www.gamebrief.net/blog/anomaly-president-review-2026)（WebFetch） |
| 19 | "The Viking"（可格挡你的攻击、高机动）/"The Gentleman" 为预发布工作名敌人 | night | ✅ 证实（Road-to-EA 预告）；是否实装标 [Unconfirmed] 正确 | [Steam 新闻 feed](https://store.steampowered.com/news/posts/?feed=steam_community_announcements&enddate=1782910615) |
| 20 | 单人、无主机版/无移动版（商店页无主机/移动提及）；无难度选项（评测共识） | controls（+跨页 faq） | ✅ 证实（主机无提及）；难度选项由多家评测共识佐证 | store 页 WebFetch、[gamebrief](https://www.gamebrief.net/blog/anomaly-president-review-2026) 等多家评测聚合 |
| 21 | 12 语言全 Interface+Full Audio+字幕 | （本批正文未直接主张，仅 faq 静态页/price-platforms 覆盖） | ✅ 证实 | store 页 WebFetch 语言表（12 语言全 ✔ Full Audio） |

---

## 三、一致性（c）

- **frontmatter schema**：16 篇统一（title/description/category/version/updated/keywords/related/sources），`category` 值各自语义化，无模板化残留。抽读 bosses-guide.md、faq-guide.md、combat-tips-guide.md 对照一致。✅
- **related[] slug**：全 16 篇逐个核对该站 `content/guides/` 下文件存在 → **0 BROKEN**。✅
- **正文内链 /guides/\***：全站去重链接逐一验证 → **0 BROKEN**。✅
- **正文 ↔ title/description 相符**：8 篇逐一比对，相符。✅
- **交叉一致性**：巴士四房间、Fluffy 三部门、元素三系、Anomaly Power 获取、补丁版本（.13/.16）在 batch A 内部及与 [bosses-guide / faq-guide / combat-tips-guide / builds-strategy-guide / patch-notes-roadmap-guide / price-platforms-guide] 一致（抽查）。✅

---

## 四、诚实标注（d）

EA 未证实项均如实 [Unconfirmed] 标注，与 keyword-results 五.5 诚实清单一致：

| 未证实项 | 覆盖指南 | 标注 |
|---|:--:|:--:|
| 武器库当前完整阵容 / 逐武器伤害 | weapons | ✅ |
| Hammer / Octo-Arms 是否实装 | weapons | ✅ |
| Dance / Gift / Marketing 房间是否实装 | campaign-bus、campaign-management | ✅ |
| Bigman 是否上线 | （bosses-guide / patch-notes 承担，批 B） | — |
| Viking / Gentleman 是否实装 | night-combat | ✅ |
| 精确键位 / 完整改键菜单 / 细分画质选项 | controls-settings | ✅ |
| HEART 具体机制 / 全 Power 名单 / 重复击杀 Boss 奖励 | anomaly-powers | ✅ |
| Fluffy 物种 / 解锁点 / 个体差异 | fluffy | ✅ |
| 建造费用 / 解锁顺序 / minigame 奖赏表 | beginner、campaign-bus、campaign-management | ✅ |

Boss 名/数值/机制/补丁 **未发现编造**（见第二节 21 条证实记录）。

---

## 五、体量（e）

去 frontmatter 正文词数（batch A 8 篇，800-1500 要求）：

| 文件 | 词数 | 判定 |
|---|--:|:--:|
| anomaly-powers-guide.md | 1076 | ✅ |
| beginner-guide.md | 1021 | ✅ |
| campaign-bus-guide.md | 1195 | ✅ |
| campaign-management.md | 898 | ✅ |
| fluffy-guide.md | 1115 | ✅ |
| night-combat.md | 1068 | ✅ |
| weapons-guide.md | 1040 | ✅ |
| controls-settings-guide.md | 1108 | ✅ |

---

## 六、交叉核对 keyword-results/anomaly-president.md（f）

| 基准项 | 指南一致性 |
|---|:--:|
| 价格 $14.99 / 首发 -20% / 8/17 回升 | ✅（本批正文未直接报价，交叉引用 price-platforms-guide，无冲突） |
| 上线 2026-08-03 EA / App 3156330 | ✅ |
| 12 语言全配音全字幕 | ✅（本批正文未主张，faq/price-platforms 覆盖；见 g 节 voice-acting 提示） |
| 双循环（竞选管理 + 夜战） | ✅ |
| 无主机版/移动版（答案=暂无） | ✅ |
| Deck：基准写 "Verified" 但诚实清单要求双观点 | ✅ controls-settings 已并列 Verified + Steam Deck HQ 不稳定 |

未发现与基准冲突。

---

## 七、问题清单（文件:行号 + 严重度 + 建议）

| # | 严重度 | 文件 | 位置 | 问题 | 建议 |
|---|:--:|------|------|------|------|
| 1 | 🟡 | controls-settings-guide.md | ~78（"Special Attack at Combo End … bug fixed in v0.5.0.17"） | 补丁版本归因不精确：可证实的 "Special Attack at Combo End" 改善在 v0.5.0.16（8/14），v0.5.0.17 的"bug 修复"未直接证实。正文已用"which implies"对冲，非编造 | 建议改引 v0.5.0.16 或弱化为"v0.5.0.16/.17 补丁"；下次 deep 对 patch-notes-guide 统一 |
| 2 | 🟡 | controls-settings-guide.md | ~107-108（"**no difficulty options** as of launch [GameBrief, Community]"） | 引用精度：GameBrief 原文经 WebFetch 核对**未**讨论难度选项；但"EA 无难度选项"由多家评测（Virtual Grip/MKAU 等聚合）佐证 = 事实成立。属于 [Community] 引用张冠李戴，非虚构 | 将 [GameBrief] 改为更广的评测共识引用，或去除该处 GameBrief 标签 |
| 3 | 🟢 | controls-settings-guide.md | frontmatter sources（Community 行） | sources 列表未含 GameBrief，但正文 107-108 引 GameBrief | 与 #2 一并处理（要么正文改引，要么 sources 补 GameBrief） |

> 其余 5 篇（anomaly-powers / beginner / campaign-bus / campaign-management / fluffy / night-combat / weapons）无问题。campaign-management 的 "nine-perfect-input" 经 WebFetch 证实存在于 GameBrief 截图说明，非编造，不记 issue。

---

## 八、静态 /faq Deck 表述建议（g）

文件：`app/faq/page.tsx`，FAQ_ITEMS「What platforms is Anomaly President on?」（line 15）：

> 现表述：*"Reviewers reported the game is Steam Deck Verified."*

**评估**：该句非绝对断言（已用 "Reviewers reported" 归属），且 Verified 认证属实（Virtual Grip/N-Gamz/tuxdb 佐证），因此**不构成错误**。但它只给单边信息，漏掉本站 controls-settings-guide 已采用的 Steam Deck HQ 8/18 反方（不稳定、50-55 FPS/锁 45、功耗 17-18W），与"指南已双观点并列"的站内标准不一致。

**建议（🟢 软化为双观点，与指南对齐）**，例如：

> *"The game carries a Steam Deck Verified badge and reviewers such as Virtual Grip and N-Gamz report it runs well on Deck. Counterpoint: Steam Deck HQ's Aug 18 Early Access review reported stability and performance problems (FPS drops around 50-55 and high ~17W power draw), so treat Deck performance as patch-dependent during Early Access."*

严重度：🟢 建议（不阻断）。Deck 相关更多细节已由 controls-settings-guide「Setting Up for Steam Deck」小节承载，/faq 可仅补一句反方。

### 附：跨页一致性 FYI（供主 Agent 转 faq-guide/合规 agent，不在 batch A 范围）

- `/faq` line 26 答 *"no voice acting"*（归因评测）与 line 27 答 *"12 languages with full audio and subtitles"* 存在内部张力 — Steam 商店语言表实测 12 语言 **Full Audio 全勾**（WebFetch 证实）。若商店 "Full Audio" 即含配音，则 "no voice acting" 与商店数据冲突；若评测所指为"无（英语）配音"需限定语境。建议 faq 审核 agent 对这条做事实核验并统一口径，避免同页自相矛盾。此条**不影响 batch A 8 篇 PASS**（本批正文未主张 voice acting）。

---

## 九、基建检查（仅记录，未执行 deploy/构建——任务范围只读）

任务要求 MUST NOT deploy/commit；build 验证与部署可达性留给主 Agent 验收阶段执行。

---

## QA 结果摘要（给主 Agent）

**QA-BUILD-007-A: ✅ PASS (8/8) | 🟡 WARN (2 低危，可提交) | 🔴 FAIL (0)**

- Residue: ✅ Clean（全 16 篇扫描，batch A 8 篇无他站名/CJK/模板短语）
- 编造: 21 项高置信断言经 10 WebSearch + 2 WebFetch 证实，无虚构 Boss/数值/机制/补丁；未证实项均标 [Unconfirmed]
- 体量/一致性/内链/schema: 全部通过
- 静态 /faq Deck 表述: 建议软化补 Steam Deck HQ 反方（🟢）
- 低危 issue 待 deep 复查: controls-settings-guide v0.5.0.17 版本归因、[GameBrief] 难度选项引用精度
- 跨页 FYI: /faq "no voice acting" vs "full audio" 张力需 faq-guide 审核员核验
