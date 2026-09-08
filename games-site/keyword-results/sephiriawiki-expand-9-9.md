# Sephiria Wiki 每日扩充记录 — 9/9

> 任务: 每日内容扩充（sephiriawiki）| 站点: sephiriawiki | 日期: 2026-09-09
> 岗位: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick | 材料版本: 工作树 v1（HEAD 8cc8659）
> 结果: ⏭️ **SKIP（无内容变更，无部署）** — 9/7、9/8 判定延续：官方补丁仍 1.0.30（8/20），无 1.0.31 / 9 月补丁；9/9 采集确认负面评测最新仍止于 9/6（9/7–9/8 仅新增正面短评），Steam 讨论区新出现/索引到的串全部命中既有 35 篇覆盖主题或独立来源 <3。
> 说明: 未写任何 EXPAND 编号；未触碰本站 35 个既有 guide 与 home-content。

---

## 1. 现有 slug 覆盖基线（35，与 9/7、9/8 一致）

artifacts / beginner / boss / builds / chapter-6-final-boss / chapter / controller-casting-keybind /
controls-settings / coop-freeze-recovery（已覆盖，禁用选题）/ coop / costumes / crash-launch-black-screen（启动类禁用选题）/
crossbow-build / dagger-build / endgame / faq-content / farming / full-release / game-length /
greatsword-build / hard-mode / inscriptions / katana-build / multiplayer-connection-fix /
mystic-pot / potions-consumables / save-file / secret-rooms / solo / speedrun / staff-build /
sword-shield-build / tablets / talents / weapons

启动崩溃（9/6 crash-launch）、联机卡死（9/4 coop-freeze）、联机连接（multiplayer-connection-fix）、
手柄施法/键位（9/5 controller-casting）、存档（save-file）、网格摆放（tablets/artifacts 两篇专节）均在覆盖基线内，同类题材禁止选题。

---

## 2. 今日反馈采集（2026-09-09 实际执行）

### 2a. Steam 近期英文评测（WebFetch appreviews/2436940，9/9 复核）
- **负面（filter=recent, negative）最新仍为 09-06**（Pinexy 等），与 9/8 结论一致；9/7–9/8 无新负面。
- **正面（filter=recent, all）出现 9/7–9/8 爆发**（约 30 条短评：`best action Roguelike since Hades`、`game of the year`、
  `just 100% this game`、`holy peak, the inventory management is so good`、`Glad there's mods...` 等）— 情绪爆发
  （疑似 8/26–30 Gamescom + 9 月 TGS 参展带动），但均为无痛点的正面短评，无新可写问题。

| # | 日期 | 玩家/内容一句话 | 主题 |
|---|------|------|------|
| 1 | 09-06 | 「Had a lot of fun til near the end」 | 终局（情绪类） |
| 2 | 09-04 | 「Yknow, this game is just okay.」 | 内容平庸 |
| 3 | 09-03 | 「抄袭怪物猎人」（中文短评） | 抄袭指控（无细节，单源） |
| 4 | 09-03 | 「Some good concepts at work that carry an otherwise bog-standard roguelike.」 | 内容平庸 |
| 5 | 09-01 | 「It's very well made overall, but it's hard to recommend it」 | 综合 |
| 6 | 08-31 | 「Bad balance. 3 animal's Lion stage」（= thehymner Lion 关卡尖峰） | 难度尖峰（单源） |
| 7 | 08-30 | 「Unbalanced & old bs.」 | 平衡 |
| 8 | 08-30 | 「feels somewhat generic, no idea where all the hype is coming from.」 | 内容平庸 |

（负面与 9/7、9/8 两日窗口重叠 >95%，全部主题命中既有覆盖，无新主题。）

### 2b. 官方补丁核验（9/9，结论不变：最新仍 1.0.30，无 1.0.31 / 9 月补丁）
- [17173 1.0.30 镜像](https://news.17173.com/content/08202026/224633949.shtml)（2026-08-20）+ [Steam 公告 koreana](https://steamcommunity.com/app/2436940/allnews/?l=koreana)
  + [Steam 公告 schinese](https://steamcommunity.com/app/2436940/allnews/?l=schinese) + [Steam announcements greek](https://steamcommunity.com/app/2436940/announcements/?l=greek) —
  多语言镜像一致，最新为 **1.0.30（8/20，QoL + 繁体中文/意大利语/土耳其语 + Pentaxis 专属 BGM + 观战模式等）**。
- 检索「1.0.31 / September 2026 patch / roadmap / new content」：零官方命中；9 月唯一活动 = TEAM HORAY 出展 TGS
  （[game.donga Gamescom/TGS](https://game.donga.com/124023/)），非游戏更新。
- 9/7 P0「静默热更」线索 9/8 已复核关闭（WeMod 8/31 trainer 更新 = 1.0.30 适配）；今日无新反证 → 维持关闭。

### 2c. Steam 讨论区（9/9 新索引到 / 复核）
| # | 串 | 主题 | 备注 |
|---|------|------|------|
| 1 | [Feedback: I hate blocking — 不想靠格挡发特殊攻击](https://steamcommunity.com/app/2436940/discussions/0/596272651478023714) | 格挡/特殊攻击 设计 | 楼主 dash/dodge 玩家抱怨「必须格挡才能特殊」；回帖澄清：Cleave 不必真格挡，按住右键+攻击即可，格挡只是把 20MP 消耗降下来；大剑蓄力释放、匕首弹反→fury。**设计反馈 + 玩法澄清，全部内容与站内 weapons-guide + 6 武器 build 重叠** |
| 2 | [How does co-op work?（队友先开战斗区→你漏 EXP）](https://steamcommunity.com/app/2436940/discussions/0/800065387638046230) | 联机 EXP | 与野人速刷时队友先开 combat zone、本人掉队漏 EXP、被逼放弃整理跟上。**单串**（多语言镜像同串）；xmodhub coop 文未提 EXP 机制 |
| 3 | [Library 误导性对话（Erma，微剧透）](https://steamcommunity.com/app/2436940/discussions/0/755052131309925526) | 翻译/对话 | 单串；开发已回复将把选项改成「I do / I don't」。**将被官方修复的临时问题** |
| 4 | [What's the current meta?](https://steamcommunity.com/app/2436940/discussions/0/662718188276951479) | 构筑 meta | 防御/evasion、火伤法、crit、planet/wind-song 高运气 — 与 builds-guide / 6 build 系列重叠 |
| 5 | [Brutal opinion of Sephiria](https://steamcommunity.com/app/2436940/discussions/0/798968152812730093) | 敌人设计 | 「怪物像柱子几乎不动、无灵魂」— 内容批评，非 How-to |
| 6 | [Sephiria personal feedback（平衡愿望单）](https://steamcommunity.com/app/2436940/discussions/0/596284150003079858) | 平衡建议 | 格挡角 180°→120°、格挡耗蓝、stack 出售、toggle block 等 — 泛化 wishlist，非单一可执行问题 |
| 7 | [We are using Discord channels!](https://steamcommunity.com/app/2436940/discussions/0/4337609830360193739) | 官方渠道 | 抱怨官方用 Discord 不用可搜索 Steam 论坛 — 渠道批评 |
| 8 | [Co-op EXP 机制串（遗漏串的完整语境）](https://steamcommunity.com/app/2436940/discussions/0/800065387638046230/?l=schinese) | 联机 EXP | 同上 #2 |

### 2d. Reddit
- r/SephiriaGame 直接抓取被拒（Reddit 反爬）；WebSearch 9 月检索零结果。与 9/7、9/8 一致：仍无活跃 subreddit。

### 2e. 外部编辑站（核对是否出现站内未覆盖的新机制词条）
- [xmodhub weapon-upgrade guide（Tower Copper / Luminous Shards / Apex Cores 速刷）](https://www.xmodhub.com/info/guides/sephiria-weapon-upgrade-guide/) —
  提出「快速升级武器」材料路线（4500 Tower Copper / 300 Luminous / 15 Apex Cores，1-2 章速降循环等）。
- [wap.pp.cn 中文武器升级路线](https://wap.pp.cn/news/1323338.html) — 讲的是每阶段用哪把武器（普攻流/太初/万年寒霜大剑），
  非材料刷取路线，与 xmodhub 不同题。
- ⚠️ [altema.jp/sapphiresphere](https://altema.jp/sapphiresphere/soubikyoka) 为**另一款游戏（Sapphire Sphere）**，已排除，勿跨游戏引用。
- 其余编辑站（destructoid/slashskill/2upskill/grindnstrat/doyo/9game/ali213）仍以武器 tier / 表格组合 / 构筑为主，均被站内覆盖。

---

## 3. 候选选题 → 否决记录（四条件逐一核对）

| # | 候选主题（玩家/编辑语言） | 独立来源数 | 否决原因（对照四条件） | 判定 |
|---|------|------|------|:--:|
| 1 | 联机 netcode / server-side hitbox / 高 ping「被打到没碰到你的攻击」（9/7-9/9 窗口无新增，沿用 Pinexy/Litsy/Polaris/morb ≥4） | ≥4 | **缺口不成立**：multiplayer-connection-fix-guide + coop-freeze-recovery-guide 已成体系覆盖；玩家可操作增量与既有指南重叠 → 内容自噬 | 否决 |
| 2 | 终局/最终 Boss 弹幕海、白屏连击「不公平」（Poppenhofer/grugGR/Split Mask/OmegaDestroyer/Rebekho ≥5） | ≥5 | **缺口不成立**：chapter-6-final-boss / boss / hard-mode / endgame 已覆盖；9/5 起判为自噬红线 | 否决 |
| 3 | evasion/dodge 必选、构筑被 funnel 进闪避流（Henslock/Split Mask/OmegaDestroyer/Harrison/Rebekho ≥6） | ≥6 | **具体性 + 编造风险**：meta 平衡批评非单一 How-to；i-frame/闪避率数值无独立来源；与 builds 系列重叠 | 否决 |
| 4 | 格挡才能发特殊攻击的设计抱怨（I-hate-blocking 串，楼主 + 回帖澄清玩法） | 1（单串） | **<3 独立来源** + **缺口不成立**：特殊攻击实际触发方式（S&S Cleave 按住右键+攻击、大剑蓄力、匕首弹反→fury）已被 weapons-guide + 6 武器 build 各自覆盖，独立成篇 = 自噬 | 否决 |
| 5 | 联机队友先开战斗区导致漏 EXP（How-does-coop-work 串） | 1（单串，多语言镜像） | **<3 独立来源**；机制细节（EXP 是否真共享/是否房间内全队分）无第二来源，展开即编造风险；与 coop-guide 团队玩法重叠 | 否决 |
| 6 | 武器升级材料速刷路线（Tower Copper/Luminous Shards/Apex Cores，xmodhub 提出） | 1（xmodhub EN+zh-tw 同源） | **<3 独立来源** + **可溯源失败**：唯一来源 xmodhub 自己的 tier-list 却写「Lunar Shards」货币，材料命名自相矛盾 → 具体数值（4500/300/15、35%/12%/100%、7.7 vs 22.5/min）单源不可验，写 = 编造风险；且非玩家反馈驱动（无评测/讨论问材料刷取） | 否决 |
| 7 | Library Erma 对话选项误导（会被官方改成 I do/I don't） | 1（单串 + 开发回复） | **<3 独立来源** + 官方已认领将修 → 临时问题，写后即过时 | 否决 |
| 8 | 「What's the current meta?」（防御/evasion/火法/crit 讨论） | 1（单串） | **缺口不成立**：builds-guide + 6 武器 build 已覆盖；meta 综述题与既有内容重叠 | 否决 |
| 9 | 敌人像柱子无灵魂 / 内容平庸（Brutal opinion + 多差评） | 2-3 | **具体性不成立**：泛化内容批评，非可执行问题；无法写成 How-to 指南 | 否决 |
| 10 | 蝙蝠服装 blood-donation 过稀有（Fanlee，沿用） | 1 | **<3 独立来源** + costumes-guide 已覆盖 | 否决 |
| 11 | Lion 关卡难度尖峰（thehymner，08-31 差评） | 1 | **<3 独立来源**；单关卡难度批评非 How-to | 否决 |
| 12 | 新补丁 1.0.31 / 静默热更 / 9 月内容 | 0 | **不编造**：无官方公告；9 月仅 TGS 参展非更新；WeMod 8/31 更新已证为 1.0.30 适配 | 否决 |

---

## 4. 结论

sephiriawiki 已有 35 篇，覆盖启动/联机/Boss/难度/构筑/网格摆放/服装/存档全部高频主题。9/9 采集：负面评测最新仍止 9/6，
9/7–9/8 仅正面情绪爆发（Gamescom/TGS 带动，无新问题）；讨论区新索引串（格挡特殊攻击、联机 EXP、Library 对话、
current meta、Brutal opinion）逐串比对 — 或为单源、或已被站内 weapons/builds/coop 系列覆盖；外部唯一「新题」
（武器升级材料速刷）仅 1 个编辑源且材料命名自相矛盾，展开即编造风险。无「≥3 独立来源 + 真缺口 + 具体可写 + 不编造」
四条件同时成立的新选题。按「宁缺毋滥 / 素材不足即 SKIP」规则，本轮 **SKIP**：不改任何 guide、不改 home-content、不部署。

## 5. 自检
- 未改 sephiriawiki 任何 guide / home-content ✅
- 未触碰其他站目录与聚合文件（expand-daily.json / qa-report.md / build-history.json / STATS / dashboard）✅
- 所有来源可溯源；无虚构引语；玩家声音仅以 API/搜索片段转述；altema（Sapphire Sphere 他游）已排除未引用 ✅

## 6. 给主 Agent 的遗留建议（P0 级线索）
1. **静默热更线索终态**：连续 3 日（9/7-9/9）无官方新补丁，9/9 复核仍 1.0.30（8/20）。WeMod 8/31 更新 = 1.0.30 适配。
   此线索**确认关闭**，除非 Steam 公告出现 1.0.31+。
2. **正面情绪信号**（9/7–9/8 约 30 条「best since Hades / GOTY」短评）疑似 Gamescom 8/26-30 + 9 月 TGS 参展带动的
   新玩家潮。若主 Agent 关注流量，可留意 TGS（9 月下旬）前后是否出访谈/新内容预告 — 届时若官方有实质更新公告再触发扩充。
3. 站内 **farming-guide / weapons-guide 均未覆盖「武器升级材料」维度**（Tower Copper 等词全站 0 命中），这是真实内容空白；
   但当前仅有 1 个编辑源且命名冲突，暂不可写。触发条件：出现 ≥2 个独立来源一致确认材料名/数值，或 Steam 讨论出现
   玩家问「怎么快速升级武器」的 ≥3 来源，即可补一篇 How to Farm Weapon Upgrade Materials。
4. 次日触发条件：官方 1.0.31+ 公告 或 出现 ≥3 独立来源的 9 月新反馈（当前 Reddit 静默、Steam 讨论均为既有主题家族）。
