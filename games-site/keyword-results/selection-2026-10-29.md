# 选词评分 — 2026-10-29

> 岗位：候选分析员（`docs/agents/22` / `23`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维 0–5、硬否决、§2.6 分流）
> 输入：`keyword-results/discovery-2026-10-29.md`（17 候选 #107–#123）
> 竞争：`.agent/analysis-2026-10-29-gate-a.md`（#107–#114）/ `.agent/analysis-2026-10-29-gate-b.md`（#115–#123）
> 需求：`.agent/harvest-2026-10-29-a.md` / `.agent/harvest-2026-10-29-b.md`（17/17 采词成功，0 失败）
> 口径日期：采词与 SERP 均为 2026-10-29

## 一、总分表

| # | 游戏 | 需求 | 竞争 | 内容 | 生命周期 | 总分 | 结论 |
|:--:|---|:--:|:--:|:--:|:--:|:--:|---|
| 107 | Coal Duty | 0 | 5 | — | — | — | ❌ 放弃（需求门禁） |
| 108 | O2GETHER | 0 | 5 | — | — | — | ❌ 放弃（需求门禁 + 品牌污染） |
| 109 | Project Nekrios | 0 | 5 | — | — | — | ❌ 放弃（需求门禁） |
| 110 | SHARDS | 0 | 5 | — | — | — | ❌ 放弃（通用词撞名，本作 0 词） |
| 111 | Everlast: Undying Tale | 0 | 4 | — | — | — | ❌ 放弃（需求门禁；竞争 4 不能补偿） |
| 112 | We Were Here Tomorrow | 3 | 3 | 3 | 3 | **12** | ⏸️ 低优先 |
| 113 | No Such Place | 3 | 3 | 3 | 3 | **12** | ⏸️ 低优先 |
| 114 | The Crimson Hunt | 2 | 3 | — | — | — | ❌ 放弃（需求 ≤2 硬否决） |
| 115 | Slumber Realm | 1 | 5 | — | — | — | ❌ 放弃（需求门禁） |
| 116 | Gear Up Einstein! | 1 | 5 | — | — | — | ❌ 放弃（需求门禁） |
| 117 | Midwest 90: Rapid City | 1 | 5 | — | — | — | ❌ 放弃（需求门禁） |
| 118 | Gendo The Gatherer | 0 | 5 | — | — | — | ❌ 放弃（需求门禁，0 有效词） |
| 119 | Trees Hate You | 3 | 2 | 2 | 5 | **12** | ⏸️ 低优先（需求 <4，12–13 例外不成立） |
| 120 | Demon Bluff | 3 | 3 | 4 | 4 | **14** | ✅ **可建** |
| 121 | FailRooms | 0 | 5 | 0 | — | — | ❌ 放弃（Walking Simulator，内容硬门槛） |
| 122 | Witch the Showdown | 1 | 5 | — | — | — | ❌ 放弃（需求门禁） |
| 123 | Emery Hearts | 1 | 5 | — | — | — | ❌ 放弃（需求门禁 + 品牌撞名） |

**分流：可建 1（#120）/ 低优先 3（#112 #113 #119）/ 放弃 13。**

## 二、硬否决逐条（MUST 先过这一步）

| # | 游戏 | 需求侧事实 | 否决 |
|:--:|---|---|---|
| 107 | Coal Duty | 有效词 9 < 20；攻略型 0% | 需求门禁 |
| 108 | O2GETHER | 有效词 12，**12 条全指向台湾匹克球/运动平台**，本作 0 条 | 需求门禁 |
| 109 | Project Nekrios | 有效词 0；83 条去重全归一成 Warframe 的 Nekros | 需求门禁 |
| 110 | SHARDS | 脚本报 213 有效词 / 锚定率 86.2%，**逐条核后本作 0 条**（DBD iridescent shards / Kirby crystal shards / Warframe archon shards / Silksong mask shards）→ 按 `STRATEGY-挖词与词库.md` §4.2 通用词撞名处理，213 MUST NOT 当需求证据 | 需求门禁 |
| 111 | Everlast: Undying Tale | 有效词 10 < 20；攻略型 10%；竞争 4 分也不翻案 | 需求门禁 |
| 114 | The Crimson Hunt | 有效词 21 → §2.2 的「20–24」桶 = **需求 2**；攻略型 19.0%（封顶 3 但 2 < 3） | **需求 ≤2 硬否决** |
| 115 | Slumber Realm | 有效词 3；策略型 0 条；17 个后缀种子 12 个零返回 | 需求门禁 |
| 116 | Gear Up Einstein! | 有效词 2；品牌含通用词 `gear`，16 个种子被拆成 `best gear build` | 需求门禁 |
| 117 | Midwest 90: Rapid City | 有效词 2（release date ×2） | 需求门禁 |
| 118 | Gendo The Gatherer | 有效词 0；`gendo` 撞福音战士/MTG，`gatherer` 撞万智牌数据库 | 需求门禁 |
| 121 | FailRooms | 有效词 15 < 20；Steam 标签 Walking Simulator，无战斗/物品/构筑 | 需求门禁 + 内容 0 |
| 122 | Witch the Showdown | 有效词 11；全部是发售日/平台（日文 3 条） | 需求门禁 |
| 123 | Emery Hearts | 有效词 7；品牌被首饰/服装电商占据 | 需求门禁 |

## 三、进评分候选的依据链

### #112 We Were Here Tomorrow — 12 分（低优先）

- **需求 3**：有效词 68（≥60 桶本应 5），但攻略型仅 10.3%（校正 23.5%）< 30% → **发售日陷阱封顶 3**；且只有 Suggest 单源 → 单源再封顶 3。依据 `keyword-results/wewereheretomorrow.md`。
- **竞争 3**：`P = 1.5`（`wewereheretomorrow.wiki` 25 URL 厚 + `wewerehere.wiki` 18 URL 薄）；fandom 不可读未计分。
- **内容 3**：可写 15 页上下——7 类谜题（laser/battery/generator/crystal/plant/rune/wire）、37 成就、双视角角色、剧情/结局、系列顺序、卡关排查；≥3 类实体，来源为 Steam 页 + 成就 + 官方支持站。
- **生命周期 3**：10-20 发售（D+9，≤8 周本应 5），但 **1,125 条仅 44% 好评**，不满足「Trends 上升或高位平稳」→ 降为 3。
- **分流**：12 分且 `需求 3 < 4` → **低优先**（§2.6 的 12–13 例外要求 需求 ≥4 且 竞争 ≥3）。

### #113 No Such Place — 12 分（低优先）

- **需求 3**：有效词 38（去撞名约 30）→ 25–39 桶 = 3；攻略型 18.4% < 30% → 封顶 3，与基础分一致。
- **竞争 3**：`P = 1.5`（`nosuchplaceguide.com` 1,285 英文 URL 数据库型厚站 + `nosuchplace.wiki` 停更薄站）。
- **内容 3**：8 张地图、枪械改装、研究台升级、Phase Shift、安全屋、撤离点、异常区——≥3 类可写；但物品库对手已占，我们不建库。
- **生命周期 3**：10-13 EA（D+16，≤8 周本应 5），617 条 62% 好评、EA 首发 bug 多 → 3。
- **分流**：12 分且 `需求 3 < 4` → **低优先**。

### #119 Trees Hate You — 12 分（低优先）

- **需求 3**：有效词 95（≥60 桶本应 5），攻略型 10.5% < 30% → 封顶 3；单源再封顶 3。
- **竞争 2**：`探测 P = 2.5`（`trees-hate-you.wiki` 59 URL + `treeshate.com` 22 URL 两家厚站 + `treeshateyou.wiki` 薄站）。SERP 只看到 1 家，域名实测才补齐 —— 正是 §3.3 要防的漏报。敏感性：薄站升厚 → P=3.0 硬放弃。
- **内容 2**：demo 仅 2 关、无 build/tier/数值；可写 walkthrough / traps / secrets / 收集物 / controls / speedrun / 结局，约 6–11 页。
- **生命周期 5**：11-16 发售（≤8 周）+ ~207K 愿望单（三方）。
- **分流**：12 分且 `需求 3 < 4` → **低优先**；同时竞争 2 已在临界，留池观察而非建站。

### #120 Demon Bluff — 14 分（可建）

- **需求 3**：有效词 67（≥60 桶本应 5），攻略型 19.4% < 30% → 封顶 3；单源 Suggest 再封顶 3。依据 `keyword-results/demonbluff.md`。中文侧真实热度（B站 v0.762b 万字攻略）但灰机/B站 wiki 均 0。
- **竞争 3**：`P = 1.5` = `demonbluff.wiki.gg`（142 篇 / 662 页 / 50+ 角色页 / 2026-10-08 更新，厚）+ `minmax.wiki`（12 路径、revisions 停 2025-08，薄）。
- **内容 4**：≥4 类且 ≥20 页——角色（50+，每页 Ability/Tips/Interactions）、卡牌/遗物（100+ 卡）、机制/关键词（ability order、drunk 惩罚）、模式/升格（ascension、skins、witness）；来源 = Steam 页 + 社区 wiki（§2.4 允许社区 wiki 作事实源）。
- **生命周期 4**：Steam 发售日仅到 **November 2026（无具体日）** → 按「未定档但有强 wishlist / demo」= 4；wishlist ~230K、playtest 30 万人（均为三方）。
- **分流**：过否决（需求 3 > 2、竞争 3 > 1）且 **总分 14 ≥ 14 → 可建**。
- **风险与写作约束**：
  1. 无具体定档日 → 站内禁止写死发售日，只用「November 2026（Steam 商店页，截至 2026-10-29）」。
  2. wiki.gg 首页仍写「Q1 2026 发售」（过时）→ 不得引用其日期。
  3. 血量惩罚数值 B站 v0.762b（Drunk −2）与 wiki（−3）冲突 → 一律标版本或 `[Unconfirmed]`。
  4. 游戏仍处 demo/playtest → 数值随时改，所有数值页必须标 `[Unconfirmed]` 或版本号。

## 四、低优先候选的复评触发条件

| # | 游戏 | 触发条件 |
|:--:|---|---|
| 112 | We Were Here Tomorrow | 口碑回升至 ≥70% 且攻略型占比复核 ≥30%；或 D+30 后重采 |
| 113 | No Such Place | 地图/物品稳定（EA 大版本后）且攻略型占比 ≥30% |
| 119 | Trees Hate You | 发售 7 天后重采；若攻略型 ≥30% 且 `treeshateyou.wiki` 确认停更（P=2.0）可升 12→14 |

## 五、本轮方法层结论

1. **17 个候选只有 1 个可建**，主因是需求：13 个有效词 <20 或撞名归零。侦察→采词→评分这条链把「愿望单很高但没人搜攻略」的候选（Trees Hate You 207K、Emery Hearts、Slumber Realm）挡在了建站之前，这是期望行为。
2. **域名实测再次改写结论**：#119 若只看 SERP 会是 P=1.0/竞争 4，实测 P=2.5/竞争 2；#120 从 0.5 升到 1.5。已写入 `docs/STRATEGY-选词与评分.md` §3.3。
3. **单词通用名撞名的锚定率不可信**（SHARDS 86.2% → 本作 0），已补进 `docs/STRATEGY-挖词与词库.md` §4.2。
4. 策略型占比 <30% 的候选一律封顶需求 3；本轮 4 个过门槛候选**全部**落在这一档，说明 10-25 之后的采词更多是「发售日搜索」，不是攻略需求 —— 与 §2.2 的 tearsofmetal 样本一致。
