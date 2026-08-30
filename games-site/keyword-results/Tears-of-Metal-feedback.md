# Tears of Metal 玩家反馈分析 — 2026-08-29

> 模式: **quick**（每日内容扩充计划 EXPAND-008 / Step 2）
> 数据源: Steam Community 讨论区 + Steam 评测（经聚合站）+ 外媒评测 + 攻略站实测记录
> 目标站: `tearsofmetalwiki`（PV 1837，27 篇现有攻略，首次反馈驱动扩充）
> 执行人: 玩家反馈分析师（岗位卡 17 / Profile 18）

---

## 0. 样本统计

| 来源 | 有效样本数 | 说明 |
|------|:--:|------|
| Steam 评测（玩家原文） | 6 | 经 gamelog-jp 聚合站取回，含日期/时长 |
| Steam Community 讨论区 | 2 | 多人 Demo 反馈帖、Steam Deck 性能帖 |
| 外媒评测（含玩家向抱怨） | 10 | Kotaku / Smashpad / Game8 / Finger Guns / GameScout / Windows Central 等 |
| 攻略站实测记录 | 4 | whisperofthehouse（beginner/co-op）、2upskill progression 等 |
| Reddit | 0 | ⚠️ 多组查询（site:reddit.com + 各关键词）均 0 结果，未发现专属 subreddit |

**合计 ≥21 条独立样本**（达标，Profile 要求 ≥20）。

⚠️ **Reddit 说明**：Tears of Metal 尚无活跃专属 subreddit（搜索 `site:reddit.com "Tears of Metal"` 全部空结果）。按 skill 兜底规则，转为 Steam Community 讨论区 + Steam 评测 + 外媒评测为主要来源。结论置信度 **中-高**（样本量足，但 Reddit 玩家声音缺失）。

---

## 1. 玩家痛点 Top 5

### 1️⃣ 治疗稀缺且昂贵，HP 管理决定成败 — 【高频】≥6 独立来源
- 玩家原话（Steam 评测，2026-07-25，3h）：**"HP 管理が重要で回復コストがとんでもなく高い"**（HP 管理极重要、回复成本高得离谱）→ [gamelog-jp](https://gamelog-jp.com/game/1913120/)
- 玩家原话（Steam 差评，2026-07-28，7h）：**"回復はコストが高すぎる"**（回复成本过高）→ [gamelog-jp](https://gamelog-jp.com/game/1913120/)
- Kotaku 评测：**"healing is very expensive or rare…the first boss fight offers no way to heal"**（治疗昂贵或稀少；第一个 Boss 战无治疗手段）→ [Kotaku](https://kotaku.com/new-bloody-roguelike-is-scottish-dynasty-warriors-and-its-awesome-2000718370)
- Smashpad 评测：**"scarce healing"** 贯穿早期 → [Smashpad](https://smashpad.com/tears-of-metal-early-access-review/)
- whisperofthehouse 实测：Healing Font 100 金币，Chicken 免费但回复量小，金币死后不继承 → [beginner-guide](https://www.whisperofthehouse.com/tears-of-metal/beginner-guide)
- whisperofthehouse co-op 实测：复活费用 250/350 金币，由存活玩家支付 → [co-op-guide](https://www.whisperofthehouse.com/tears-of-metal/co-op-guide)
- 2upskill：后期反复受伤会**永久降低本局最大 HP** → [2upskill progression](https://2upskill.com/tears-of-metal-progression-guide-full-3-acts-walkthrough-best-heroes-and-village-upgrades/)

### 2️⃣ 难度曲线陡峭（第 2 章起、后期区"The Scar"、Boss 两下秒） — 【高频】≥4 独立来源
- Kotaku：难度 **"a bit too brutal"**，漏一次闪避/格挡/弹反被队长打掉近半血 → [Kotaku](https://kotaku.com/new-bloody-roguelike-is-scottish-dynasty-warriors-and-its-awesome-2000718370)
- Smashpad：第三章"The Scar" **"wild difficulty spike…absolutely unforgiving"**，两场战斗被 5+ 队长碾碎 → [Smashpad](https://smashpad.com/tears-of-metal-early-access-review/)
- Windows Central：后期敌人 **"kill you in one or two shots"** → [Windows Central via NewsBreak](https://www.newsbreak.com/windows-central-1593921/4796131933123-the-dark-state-of-gaming-has-been-mentally-clawing-at-me-but-this-early-access-xbox-on-pc-hack-and-slash-snapped-me-out-of-it)
- Steam 差评（2026-07-28）：**"ステージ２になったら難易度激上がり"**（进第 2 章难度暴涨，乱战里直接融化）→ [gamelog-jp](https://gamelog-jp.com/game/1913120/)

### 3️⃣ 不能中途存档，一场 1–2 小时、退出即丢 — 【高频】≥3 独立来源
- 玩家在 Steam 评测集体呼吁；开发者公开回应「中途存档是 EA 头号优先」→ [PrimaGames](https://primagames.com/news/tears-of-metal-sells-100k-copies-mid-campaign-saves-planned)
- Steam 差评（2026-07-23）：**"ストーリーのアンロック要素や…通貨アイテム以外は、プレイの進行状況を保存できない"**（除剧情解锁和货币物品外，游戏进度无法保存）→ [gamelog-jp](https://gamelog-jp.com/game/1913120/)
- 中文媒体 163.com：玩家「集体恳求」中途存档 → [163.com](https://www.163.com/dy/article/L2VRVK9O05561FY8.html)

### 4️⃣ 友军/士兵 AI 鸡肋，不打移动目标、不拉仇恨 — 【中频】≥2 独立来源
- Steam 评测（2026-07-25，7h）：士兵 **"AIがザコなので、動いている敵にはまず攻撃を当ててくれない。ヘイトを稼ぐわけでもない"**，是「賑やかし要因」（气氛组）→ [gamelog-jp](https://gamelog-jp.com/game/1913120/)
- Steam Community 多人 Demo 反馈：战斗后同伴行为异常（留守、三人各带一个）→ [steamcommunity 讨论帖](https://steamcommunity.com/app/1913120/discussions/0/592907032315681857)

### 5️⃣ 多人同步/大厅问题（ping 不显示、房内被踢） — 【中频】≥2 独立来源
- Steam 差评（2026-07-28）：多人房间不显示 ping；**"同期がうまくできてないらしく、警告文が出て部屋入っても蹴られる"**（同步不良，进房被踢）→ [gamelog-jp](https://gamelog-jp.com/game/1913120/)
- 开发者优先级：**multiplayer desync** + midrun save 两大项目 → [steamcommunity patch notes](https://steamcommunity.com/app/1913120/allnews/?l=koreana)

> 备选（中-低频）：战斗中敌我识别/可见性（Game8：精英"Champion"入场屏幕变暗反而更难看清 → [Game8](https://game8.co/reviews/tears-of-metal-review-early-access)；Finger Guns：HUD 装饰品多了显杂乱 → [Finger Guns](https://fingerguns.net/features/2026/08/10/how-tears-of-metal-is-forging-to-be-a-tier-above-the-rest-early-access-review/)）。意见相反面：NoobFeed 认为百敌场面依旧清晰 → [NoobFeed](https://noobfeed.com/reviews/tears-of-metal-review)。

---

## 2. 玩家情绪

- 😡 **差评高频词**: 治疗太贵 / 难度暴涨 / 不能存档 / 友军 AI 弱 / 多人不同步 / 后期苦行
- 😊 **好评高频词**: 打击感强 / 美术独特（手绘美漫风）/ 爽快刷怪 / 四人联机 / 永久成长 / "再来一把"
- 🚪 **弃坑原因 Top 3**:
  1. 治疗成本过高 + 被两下秒 → 挫败感累积（Kotaku / Windows Central / gamelog）
  2. 中后期"苦行化"（Steam 差评 56h 通关者：**"プレイを重ねるほど苦行になっていく"**）→ [gamelog-jp](https://gamelog-jp.com/game/1913120/)
  3. 一场太长 + 不能中途存档 → 现实生活打断即丢进度（PrimaGames / 163.com）
- 📊 整体评价：Steam 全语言 **86% Very Positive**（2,012 正 / 330 负）；日区 70% 略低于均值 → [gamelog-jp](https://gamelog-jp.com/game/1913120/)

---

## 3. 语言翻译（玩家语言 → 搜索语言）

| 玩家怎么说 | Google 怎么搜 |
|------|------|
| "healing is way too expensive / 回復コストが高すぎる" | `tears of metal how to heal` / `tears of metal healing guide` |
| "I keep dying, one shot / 体力管理が重要" | `tears of metal health management` / `tears of metal too hard` |
| "can't save mid-run / 進行状況を保存できない" | `tears of metal mid campaign save` / `tears of metal save game` |
| "my soldiers don't fight / AIがザコ" | `tears of metal companion guide` / `tears of metal battalion guide` |
| "coins keep running out / 回復コスト" | `tears of metal coin farming` / `tears of metal coins` |
| "revive too expensive in co-op" | `tears of metal co-op revive` |

---

## 4. 玩家画像

- **主力人群**: 中等偏核心的砍杀/肉鸽玩家（Musou 老手 + Hades 系肉鸽玩家交叉），EA 首发期以尝鲜与 Steam 首发流量为主
- **最大的困惑**: ① 治疗/金币怎么花才不白给；② 难度为何越打越难（Threat Level 机制）；③ 什么时候算"攒够"
- **搜索意图特征**: 查攻略（怎么活下去）> 查 Build > 查机制（Threat/治疗/存档）> 查 Boss
- **语言分布**: 英语为主 + 明显中文/日文社区流量（站内 PV 佐证 + gamelog 日语评论丰富）

---

## 5. 内容缺口分析

对比现有 27 篇攻略（已逐一核对 `tearsofmetalwiki/content/guides/*.md`，slug 全部与任务清单一致）：

| 玩家需求 | 现有覆盖 | 状态 |
|------|:--:|------|
| 治疗/血量经济（Healing Font / Chicken / 药剂 / 金币预算 / 复活 / 最大HP削减 / Apothecary） | ❌ 无专文；仅 survival-tips 一句「带 3+ 药剂」、boss-guide「Boss 房无治疗」 | **P0 缺口** |
| 怎么活下去（体力/弹反/撤退纪律） | ✅ survival-tips | 已覆盖 |
| 难度为何越打越难 + 后期难度曲线 | ✅ threat-level-difficulty-guide | 已覆盖 |
| 不能中途存档的现状与应对 | ✅ save-system-guide（已直击 #1 需求） | 已覆盖 |
| Boss 打法（Gilles / Banshee，无治疗房） | ✅ boss-guide | 已覆盖 |
| 战斗基础（格挡/弹反/闪避/体力） | ✅ combat-tips | 已覆盖 |
| 部队/同伴招募与管理 | ✅ battalion-companion-guide | 已覆盖（可增强 AI 用法） |
| 多人连接问题修复 | ✅ multiplayer-connection-fix-guide | 已覆盖 |
| 战场敌我识别/屏幕杂乱（Champion 变暗、HUD 拥挤） | ❌ 无 | P2（话题偏主观，可写性弱） |
| 金币/资源获取与预算 | ❌ 无专文（仅 healing 相关沾边） | 并入 P0 主题 |

**结论**：27 篇攻略中，**治疗与血量经济是唯一"高频痛点 × 完全无专文覆盖"的缺口**。

---

## 6. 建议新增攻略（1 个 P0 主推 + 2 个备选）

### ⭐ P0 — 推荐新增（本次任务的主推主题）

**标题建议**: `Tears of Metal Healing Guide — Healing Fonts, Chicken, Salves & Coin Budgeting`

**中文主题**: 《Tears of Metal 治疗与回血经济指南 — Healing Font / Chicken / 药剂 / 金币怎么花》

**关键词方向**: `tears of metal how to heal`、`tears of metal healing`、`tears of metal healing font`、`tears of metal chicken`、`tears of metal health guide`、`tears of metal coins`

**理由**:
1. **高频**：≥6 个独立来源提及治疗稀缺/昂贵（Steam 评测 ×2、Kotaku、Smashpad、whisperofthehouse、2upskill）— 满足「≥3 独立来源」
2. **具体**：完全可写成问题导向攻略（"How to heal / 为什么老是没血"），800–1500 词覆盖：
   - 三大治疗来源：Chicken（免费、量小、不能救命）vs Healing Font（100 金币、进房前买）vs 药剂/消耗品
   - 金币预算决策树：治疗 vs 宝箱 vs 商店，金币死后不继承
   - Boss 房无治疗 → 进场前补满
   - 后期最大 HP 永久削减机制 → 规避打法
   - 合作模式复活费用（250/350 金币）与各自留复活备用金
   - 村庄 Apothecary（药剂师）升级优先级（2upskill ★★★★☆）
3. **缺口**：已逐一核对 27 篇攻略，**无任何一篇覆盖 chicken / font / 金币预算 / 最大HP削减**；现有指引只是顺带提「治疗稀缺、带药剂」——正是最值得扩写的问题导向主题

**写作要点（交接给建站协调员）**: 开篇直接回答「游戏为什么不自动回血 / 血怎么补」，用决策表格呈现三种治疗来源 + 成本 + 适用场景；结尾给「残血进 Boss 房前的检查清单」。事实来源以 whisperofthehouse 实测数值 + Kotaku 定性描述为主，注明 EA 数值可能随补丁变动。

---

### P1 — 备选（本期不做，留作观察）

**标题**: `Tears of Metal Visibility Guide — How to Track Champions & Read the Horde`
- 理由：Game8（Champion 入场屏幕变暗）、Finger Guns（HUD 拥挤）提及敌我识别问题，但样本仅 2 来源、且 NoobFeed 持反方意见，可写性弱于 P0。观察补丁后社区反应再定。

### P2 — 备选（增强既有攻略）

**标题建议**: 增强 `battalion-companion-guide`（增加「AI 士兵实用技巧 / 为什么它们不打人 / 如何让部队干活」章节）
- 理由：Steam 差评明确抱怨士兵 AI 鸡肋（不打移动目标、不拉仇恨），现有 battalion 攻略偏「招募与机制」，缺「AI 行为预期与实用指令」角度。属既有攻略增强，非新篇。

---

## 附：全部来源（可追溯）

- Steam 评测聚合（日文玩家原话）：https://gamelog-jp.com/game/1913120/
- Kotaku 评测：https://kotaku.com/new-bloody-roguelike-is-scottish-dynasty-warriors-and-its-awesome-2000718370
- Smashpad 评测：https://smashpad.com/tears-of-metal-early-access-review/
- Windows Central（经 NewsBreak）：https://www.newsbreak.com/windows-central-1593921/4796131933123-the-dark-state-of-gaming-has-been-mentally-clawing-at-me-but-this-early-access-xbox-on-pc-hack-and-slash-snapped-me-out-of-it
- Game8 评测：https://game8.co/reviews/tears-of-metal-review-early-access
- Finger Guns 评测：https://fingerguns.net/features/2026/08/10/how-tears-of-metal-is-forging-to-be-a-tier-above-the-rest-early-access-review/
- GameScout 评测：https://gamescout.co.uk/2026/07/tears-of-metal-early-access-is-it-worth-it/
- NoobFeed 评测：https://noobfeed.com/reviews/tears-of-metal-review
- Steam Community 多人 Demo 反馈帖：https://steamcommunity.com/app/1913120/discussions/0/592907032315681857
- Steam Community 补丁公告（多人修复/优先级）：https://steamcommunity.com/app/1913120/allnews/?l=koreana
- PrimaGames（中途存档新闻）：https://primagames.com/news/tears-of-metal-sells-100k-copies-mid-campaign-saves-planned
- 163.com（中文报道）：https://www.163.com/dy/article/L2VRVK9O05561FY8.html
- whisperofthehouse beginner-guide：https://www.whisperofthehouse.com/tears-of-metal/beginner-guide
- whisperofthehouse co-op-guide：https://www.whisperofthehouse.com/tears-of-metal/co-op-guide
- 2upskill progression-guide：https://2upskill.com/tears-of-metal-progression-guide-full-3-acts-walkthrough-best-heroes-and-village-upgrades/
- GameRant（87% Very Positive）：https://gamerant.com/co-op-steam-games-tears-metal-reviews/
- Notebookcheck（92% 好评）：https://www.notebookcheck.net/92-positive-and-Steam-top-10-Why-this-hack-and-slash-is-so-popular.1349868.0.html

---

## 交接物声明

本报告完成即停止，**未编写任何攻略正文**。下游**建站协调员**读取本报告，以 P0 主题《Tears of Metal Healing Guide》选题写攻略（800–1500 词，问题导向），并先读 `tearsofmetalwiki/content/guides/` 现有风格（survival-tips / equipment-guide）保持格式一致。
