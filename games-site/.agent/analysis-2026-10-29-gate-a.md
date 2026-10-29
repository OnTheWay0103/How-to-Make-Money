# 候选分析（第一段 / 竞争检查与硬门槛）— 2026-10-29 — A 组 #107–#114

> 岗位：候选分析员（`docs/agents/22` + `23`）｜规则：`docs/STRATEGY-选词与评分.md` §2.3 / §3.2
> 执行：SERP 固定 6 条（WebSearch，hl=en，中/日文原样）+ 域名实测（dig/curl，记 HTTP、sitemap 数、lastmod）
> 范围：#107–#114 ｜ **只判竞争侧 + 硬门槛，未打需求/内容/生命周期分**
> 未做：未采词、未改 `CANDIDATE-POOL.md`、未跑 git、未建站

## 口径

1. 只算「专门攻略站」= 独立域名 + 围绕该游戏 + 持续更新。大站单篇 / 综合站 / Steam / Reddit / YouTube / 论坛 / 数据库 / 商店页 / 聚合页不计。
2. 厚 = ≥3 类攻略页 + 4 周内更新（实测：200 且 sitemap ≥20 URL）；薄 = 1–2 类 或 >8 周未更新（URL <20）。
3. 意图错位不计，但记入事实风险（品牌污染）。
4. `P = T + 0.5t`；`P ≥ 3` 硬放弃；`P > 2.5`（竞争 ≤1）硬否决。
5. 需求侧：8 个候选均无 `keyword-results/{slug}.md` → 一律 `待采词`。

---

## 一、#107 Coal Duty（Corecrew / indie.io，EA 2026-10-27，D+2）

- 6 条查询：wiki / guide / codes / 攻略 / 中文 wiki / 日文攻略 —— **全部 0 个专门站**；`codes` 与 `攻略` 被煤炭关税 HS 编码、俄综合站 coop-land.ru 单篇、sonkwo/voidu 商店页占位。
- 域名实测：`coal-duty.wiki` `coalduty.wiki` `coaldutywiki.com` `coaldutyguide.com` `coal-duty-guide.com` `coalduty.guide` `coaldutygame.com` 全 NXDOMAIN；`coalduty.wiki.gg` 401。
- **P = 0（T=0, t=0）→ 竞争 5** ｜ 结论：继续（待采词）
- 风险：41 条评测样本太小；2 万愿望单为三方；怪物/配方/数值仅商店文案级，无源；近距语音机制写法易主观。

## 二、#108 O2GETHER（iterco，2026-10-29，D+0）

- 6 条查询：0 个专门站；`codes`/`攻略` 前 10 被 `o2gether.com.tw`（台湾运动平台）与小红书高尔夫占满。
- 域名实测：`o2gether.wiki` `o2getherwiki.com` `o2getherguide.com` `o2gethergame.com` `o2gether.guide` NXDOMAIN；`o2gether.wiki.gg` 401。
- **P = 0 → 竞争 5** ｜ 结论：继续（**品牌污染标红**）
- 风险：撞名已实测发生，锚定率大概率不合格；0 评测；8 biome 无一手枚举；标题须带 `iterco` / `co-op oxygen` 限定。

## 三、#109 Project Nekrios（De La Guardia Games，2026-10-28，D+1）

- 6 条查询：0 个专门站；`Madness: Project Nexus` 占满 4/6 条（namu.wiki 长篇攻略，错位）。
- 域名实测：`project-nekrios.wiki` `nekrios.wiki` `nekrioswiki.com` `nekriosguide.com` `projectnekriosguide.com` `nekriosgame.com` `nekrios.guide` 全 NXDOMAIN；`projectnekrios.wiki.gg` 401。
- **P = 0 → 竞争 5** ｜ 结论：继续（**品牌撞名标红**）
- 风险：3 敌人/5 武器/6 房间仅官方文案级；波次数值/升级花费/伤害表无可核验来源。

## 四、#110 SHARDS（LUMICROFT，2026-10-26，D+3）

- 6 条查询：0 个专门站；日文 0 命中；出现 `1000 Shards`、Remnant Sentinel Shard 错位。
- 域名实测：`shards.wiki` `shardsgame.wiki` `shardswiki.com` `shardsthegame.wiki` `shardscoop.wiki` `playshards.wiki` `shardsguide.com` NXDOMAIN；`shardsgame.com` 000；`shards.wiki.gg` 401。
- **P = 0 → 竞争 5** ｜ 结论：继续（**内容可写性存疑**，交第二段）
- 风险：通名污染；官方/媒体确认符号与表盘每局随机 ⇒ 答案型攻略无稳定内容；含血腥心脏 + AI 素材披露。

## 五、#111 Everlast: Undying Tale（InSpades，EA 2026-10-28，D+1）

- 6 条查询：SERP 0 个专门站（2upskill.com 为综合性能站，不计，已有 4+ 篇本作调优文 ⇒ 低质占位信号）。
- 域名实测：**`everlastundyingtale.wiki` = 200**，`Everlast: Undying Tale Wiki - Builds, Crafting & Quests`；sitemap 172 loc / 43 条英文 URL；分区 guide 7 / reviews 6 / release 6 / features 6 / demo 6 / combat 6 / platforms 5；en+de+es+ru；**lastmod 2026-10-29T03:02Z（当天）**；beginner-guide 1,332 词。其余 `everlast.wiki` 等 NXDOMAIN。
- **P = 1.0（T=1 厚站）→ 竞争 4** ｜ 结论：继续（待采词）
- 风险：对手 D+1 建成 43 页且当天仍在更，已占 16 技能 / 制作 / 构建高价值页；36 条样本小；10 万愿望单三方；官方无简中；RuneScape 式升级数值官方未公布，易编数值。

## 六、#112 We Were Here Tomorrow（Total Mayhem，2026-10-20，D+9）

- 6 条查询：0 个专门站；中文/日文 0 命中（B 站只有视频）；解法由 noobfeed / tposegaming / whisperofthehouse 等综合站铺满。
- 域名实测：**`wewereheretomorrow.wiki` = 200**，25 loc / 19 篇 guide（walkthrough / achievements / beginner-tips / characters / crossplay / stuck / story / how-long / price / series-order…），lastmod 2026-09-26（33 天，保守按厚）；**`wewerehere.wiki` = 200**，18 loc，lastmod 2026-10-27 → **T=1, t=1**。`wewerehere.fandom.com` 不可读（DNS 污染到 Meta IP）→ 不计分。
- **P = 1.5 → 竞争 3** ｜ 结论：继续（待采词），口碑是硬伤
- 风险：1,125 条 44% → 大量「退款/为什么差评/卡关」意图；系列 5 部前作分流品牌词；第 5 作 vs sixth entry 待核；第 3 章线缆谜题固定，已被 6+ 家抄同一答案。

## 七、#113 No Such Place（CritTeam / ChillyRoom，EA 2026-10-13，D+16）

- 6 条查询：0 个专门站；中文侧 17173 / 360game / ali213 / 9game / 游民 / 豌豆荚 用同一稿源铺满。
- 域名实测：**`nosuchplaceguide.com` = 200**，sitemap 8,693 loc / 英文 1,285 条，13 语言，自述 888 物品 / 85 敌人 / 152 任务 / 8 地图 / gear planner / 交互地图；无 lastmod → 按厚站计。**`nosuchplace.wiki` = 200**，15 loc，lastmod 2026-07-20（>14 周停更）→ 薄。`no-such-place.wiki` HTTPS 000 不可读，不计分。
- **P = 1.5 → 竞争 3** ｜ 结论：继续（待采词）
- 风险：对手是数据库型重资产站，不建库只能吃长尾；中文侧不算空缺；62% 好评 + 首发 bug；EA 地图随时改版。

## 八、#114 The Crimson Hunt（Farelas，2026-10-06，D+23）

- 6 条查询：0 个专门站；中文/日文 0 命中；多个查询被另一款 Crimson Hunt / Crimson Desert 错位。
- 域名实测：**`the-crimson-hunt.wiki` = 200**，66 loc / 英文 31 条（combat 4 / coop 2 / guide 2 / purchase 5 / puzzles 1 / reviews 1 / story 4 / technical 5），lastmod 2026-10-10（19 天）；walkthrough 2,334 词。**`thecrimsonhunt.wiki` = 200**，28 loc，lastmod 2026-10-26，仅 guide + puzzle。→ **T=1, t=1**。
- **P = 1.5 → 竞争 3** ｜ 结论：继续（待采词）
- 风险：2.5–3.5h / 3 武器 / 2 角色 / 19 成就，可写页数天然少；**无在线 co-op**（仅分屏/Remote Play）；固定解法已被三家抄满。

---

## 九、汇总表

| # | 游戏 | 发售·D+ | 评测 | SERP P | 探测 P | T | t | 竞争分 | 需求 | 门槛结论 |
|:--:|---|:--:|:--:|:--:|:--:|---|:--:|:--:|:--:|---|
| 107 | Coal Duty | 10-27 · D+2 | 41 | 0 | 0 | — | — | **5** | 待采词 | 继续 |
| 108 | O2GETHER | 10-29 · D+0 | 0 | 0 | 0 | — | — | **5** | 待采词 | 继续（品牌污染） |
| 109 | Project Nekrios | 10-28 · D+1 | 0 | 0 | 0 | — | — | **5** | 待采词 | 继续（品牌污染） |
| 110 | SHARDS | 10-26 · D+3 | 0 | 0 | 0 | — | — | **5** | 待采词 | 继续（可写性存疑） |
| 111 | Everlast: Undying Tale | 10-28 · D+1 | 36 | 0 | 1.0 | 1 | 0 | **4** | 待采词 | 继续 |
| 112 | We Were Here Tomorrow | 10-20 · D+9 | 1,125 | 0 | 1.5 | 1 | 1 | **3** | 待采词 | 继续 |
| 113 | No Such Place | 10-13 · D+16 | 617 | 0 | 1.5 | 1 | 1 | **3** | 待采词 | 继续 |
| 114 | The Crimson Hunt | 10-06 · D+23 | 96 | 0 | 1.5 | 1 | 1 | **3** | 待采词 | 继续 |

**无候选触发 `P ≥ 3` 放弃线，也无竞争 ≤1 硬否决。**

## 十、方法层发现（规则闭环）

1. **SERP 对新游系统性漏报**：8 候选 × 6 查询 = 48 条，SERP 一个专门攻略站都没返回；域名实测抓到 7 个 200 且在更新的专属站。不补测会把 8 个全判竞争 5，其中 4 个实际应为 3–4 → **域名实测固化为默认步骤**。
2. **存在程序化 `.wiki` 站网络**：`everlastundyingtale.wiki`、`the-crimson-hunt.wiki`、`thecrimsonhunt.wiki`、`wewerehere.wiki`、`wewereheretomorrow.wiki`、`nosuchplace.wiki` 模板高度一致（同分区 / 同 lastmod 格式 / 多语言 / 单页 1,300–2,300 词），Everlast 在 D+1 就建成 43 页 ⇒ 「新游空位」窗口实测可短至 1 天，`P=0` 只代表今天。

## 十一、竞争侧最值得继续

1. #111 Everlast: Undying Tale（竞争 4）—— 可写面最宽，窗口是现在。
2. #107 Coal Duty（竞争 5）—— 唯一完全干净空位，但内容薄，若有效词 <20 或攻略型 <30% 应掉头。
3. #113 No Such Place（竞争 3）—— 深度英文攻略 + 机制缺口仍有空间，但别做物品库。

## 十二、数据获取失败 / 未核实

| 项 | 状态 |
|---|---|
| `wewerehere.fandom.com` | 不可读（DNS 污染到 Meta IP），不计分 |
| `gamerblurb.com` | 403 Cloudflare，按综合站不计 |
| `no-such-place.wiki` | HTTPS 000，未计分 |
| `nosuchplace.wiki.gg` | 429，未重试 |
| `nosuchplaceguide.com` 更新时间 | 无 lastmod，按数据库型厚站计 |
| Steam 一手数据 | 未重抓，沿用池内今日记录 |
| 需求数据 | 全部缺失（8 个均无词库）→ 全 `待采词` |
| #112 系列序数 | 任务书第 5 作 vs 媒体 sixth entry，待核 |
