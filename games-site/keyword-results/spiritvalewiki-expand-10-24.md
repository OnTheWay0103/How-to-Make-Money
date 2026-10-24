# spiritvalewiki 扩充 — 2026-10-24

> 任务：EXPAND-2026-10-24-SPIRITVALE | 岗位：建站协调员 + 玩家反馈分析师
> 站点：spiritvalewiki（SpiritVale，Steam appid 3767850；Playtest 3918510 已查）
> 结果：**PRODUCED** — 1 篇新攻略，构建通过，未部署、未 commit

## 1. 选题依据（两条路径都跑）

### ① complaint-driven（未命中可用选题）

采集面：Steam 评测聚合（player.gg / VaporLens）、Steam 讨论区（经 WebSearch 索引）、官方公告（ISteamNews 全量 39 篇）、第三方媒体/攻略站。

| 玩家反复提到的问题 | 频率 | 现有覆盖 | 判定 |
|---|---|---|---|
| 更新后卡死/无法操作（拍卖行、背包、强化、回城后） | 高频（单帖多人复现） | `connection-server-guide` 已有 soft-lock / relog / 移动 bug 段 | 已覆盖（主题可互换） |
| 等级回档（Lv70→35，死亡点重登触发回档） | 中频 | `connection-server-guide` 有 rollback 专段 | 已覆盖 |
| 黑屏（传送 Nevaris waystone） | 低频（1 帖） | 无专段，但属瞬时客户端 bug，撑不起 800 词 | 不成立 |
| 误封 / 外挂 / RMT / 客服 | 高频 | `account-ban-appeal-guide` | 已覆盖 |
| 职业平衡改动让 build 失效 | 高频 | `class-tier-list` / `builds-guide` / `updates-patch-notes` | 已覆盖 |
| 终局空、刷得无聊、地图没人 | 高频 | `endgame-guide` / `solo-guide` / `party-composition` | 已覆盖或不可执行 |
| 交易/拍卖行停摆 | 高频（历史） | `trading-market-guide` / `connection-server-guide` | 已覆盖 |

结论：抱怨已全部收敛到既有页（与 Profile 04 记录的 9/3–9/11 情形一致），不据此 SKIP，按规则切换到路径②。

### ② system-inventory-driven（命中）

官方 0.32.0（2026-09-21）正式上线 **Advanced Artifacts & Grimoires**：32 件 / 8 套高级神器、Advanced Artifact Box、Masterwork Core、账号绑定的 Advanced Grimoire 配方。站内 46 篇逐条比对后确认：

- `artifact-sets-guide` 写于 9/12（0.32.0 上线前），正文仍称高级神器"not in the live build yet" —— 该句已失真，且全站 **0 篇**讲高级神器的获取/拆解/精炼/魔法书配方；
- `dark-fortress-guide` 仅在掉落表提到 Corrupted Core；
- `updates-patch-notes` 未展开 0.32.0 玩法；
- 社区已有多个专页在回答同一组问题（Box of Mastery、Masterwork Core、20 核配方），说明搜索需求真实存在。

选题：**Advanced Artifacts & Grimoires 的完整循环**（盒子来源 → 拆解/精炼取舍 → 20 核魔法书配方 → Corrupted Core / Umbral Fragment 两个瓶颈）。

## 2. 来源表

| 层级 | 标题 | URL | 日期 |
|---|---|---|---|
| Official | [0.32.0] Advanced Artifacts & Grimoires! | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1844115010501414 | 2026-09-21 |
| Official | [0.33.0] Halloween Event（Box of Mastery 掉率 / 25→20 核） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1845383656380019 | 2026-10-01 |
| Official | [0.34.2]（Compass/Lure Memory 20→10、A/B/C 图伤害下调） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706686324 | 2026-10-18 |
| Community | Box of Mastery — SpiritValers（内部名 Artifact Box Advanced、8 套名单、25 Umbral/25 Valor 配方、116 个掉源） | https://spiritvalers.com/consumables/box-of-mastery | 访问 2026-10-24 |
| Community | Masterwork Core — SpiritValers | https://spiritvalers.com/materials/masterwork-core | 访问 2026-10-24 |
| Community | Corrupted Core — SpiritValers（23 个掉源） | https://spiritvalers.com/materials/corrupted-core | 访问 2026-10-24 |
| Community | Umbral Fragment — SpiritValers（楼层产出 +1/+2/+3/+5） | https://spiritvalers.com/materials/umbral-fragment | 访问 2026-10-24 |
| Community | Crushing Advance — SpiritValers（Aegis Light 四件 + 20 核 + 1 Corrupted） | https://spiritvalers.com/grimoires/crushing-advance | 访问 2026-10-24 |
| Editorial | Advanced Artifacts: Boxes, Fragments & Masterwork Cores — spiritvale.blog | https://spiritvale.blog/guides/artifacts/ | 访问 2026-10-24 |
| Editorial | Advanced Grimoire Recipe — spiritvale.blog | https://spiritvale.blog/guides/advanced-grimoires/ | 访问 2026-10-24 |

官方公告两个 appid 均已查：3767850（39 篇）+ 3918510（40 篇，Playtest 历史）。0.32.0 之后的高级神器内容全部挂在正式版 3767850，Playtest 流无新增。

## 3. 查重结论（逐条对比）

现有 46 篇 slug 已全量列出并逐一对照；新 slug `advanced-artifacts-grimoires-guide` 无重复。

| 现有 slug | 它覆盖什么 | 与新页的关系 |
|---|---|---|
| artifact-sets-guide | 普通 33 套四件套：穿哪套、去哪刷；仅一段提及 grimoire | intro 不可互换（"穿哪套" vs "高级件怎么拿/怎么换书"）；搜索意图独立 |
| dark-fortress-guide | 地图/怪物/Dusk 掉落（含 Corrupted Core 0.1%/1%） | 新页只引用其 Corrupted Core 表，不重复地图内容 |
| echoing-spire-endgame-guide | Spire 队伍、重置、奖励 | 新页只用 Spire 作为 Umbral Fragment 来源 |
| crafting-guide | 装备制作、精炼基础 | 新页只讲 Masterwork Core 专属精炼成本 |
| gear-progression | Lv1→终局装备路线 | 新页是其中一个终局层级的操作细节 |
| endgame-guide | 终局活动总览 | 无高级神器获取/配方 |
| updates-patch-notes | 按时间罗列补丁 | 无 how-to 配方与掉率整理 |
| cards-guide / pvp-conquest-guide | 卡牌 / Conquest | 仅 Valor Crest 兑换路径有交叉，不构成同主题 |

判定：**无自噬**。

`related` 6 个 slug 全部存在：artifact-sets-guide、dark-fortress-guide、echoing-spire-endgame-guide、pvp-conquest-guide、crafting-guide、gear-progression。

## 4. 产出

- 文件：`spiritvalewiki/content/guides/advanced-artifacts-grimoires-guide.md`
- 标题：SpiritVale Advanced Artifacts & Grimoires Guide — Box of Mastery, Masterwork Cores, and the 20-Core Recipe
- 正文词数：**1,442**（不含表格行；含表格总计 1,865）
- `[Unconfirmed]` 显式标记 2 处 + 独立"未确认"章节

### [Unconfirmed] 清单

1. 8 套高级神器均为四件套 —— 仅 Aegis Light 由真实配方确证，其余 7 套来自社区数据库。
2. "Advanced Artifact Box" 与 "Box of Mastery" 是否同物 —— 数据库内部名/内容支持同物，spiritvale.blog 主张不同物。
3. 每次精炼消耗的 Masterwork Core 精确数量 —— 官方仅写 "a Masterwork Core"（单数）。
4. 8 套神器与职业/伤害类型的官方映射与套装效果。
5. 是否存在保底/pity 机制 —— 无任何文档。
6. 完整 Advanced Grimoire 配方表 —— 数据库仅列 75 本名字，配方以职业大师界面为准。

### 数据置信说明

- 25 Umbral Fragments / 25 Valor Crests、116 个掉源、23 个 Corrupted Core 掉源、楼层产出 +1/+2/+3/+5、Aegis Light 配方均为 **Community（SpiritValers 数据库）**，正文已标注。
- 0.32.0 的 0.1% A/S 掉率与 0.33.0 的 0.25%/0.3% 并不矛盾：后者明确写 "better rates"，正文按时间顺序解释。

## 5. 构建

```
cd spiritvalewiki && pnpm install && pnpm build
```

- `pnpm install`：ok
- `pnpm build`：**exit 0**，`✓ Compiled successfully`，60/60 static pages
- 新路由 `/guides/advanced-artifacts-grimoires-guide` prerender 成功
- sitemap.xml 产物包含新 slug
- 产物级验证：页面含 "Box of Mastery"、Related Guides 6 个内链、Verification 来源块均渲染

## 6. 顺带修正（1 文件）

`content/guides/artifact-sets-guide.md` 第 122 行原文称高级神器 "not in the live build yet"，与 0.32.0 已上线冲突。已改为：0.32.0 已上线、advanced grimoire 账号绑定、并链接新页；`updated` 同步为 2026-10-24。未改其他站点、未部署、未 commit。

## 7. 采集限制（诚实记录）

- Steam 评测 API（`store.steampowered.com/appreviews/3767850`）在本机被 302 重定向到商店首页，无法取评测全文；改用 player.gg 聚合（近 7 天 20% 好评、差评标签 performance 27% / bugs 25%）与 WebSearch 索引的评测摘要。
- Reddit JSON 返回 403（r/SpiritVale 无成形英文社区，与 8/1 反馈报告一致）。
- Steam Community 讨论区页面直连超时/SSL 失败，只能经 WebSearch 读取索引摘要与帖子标题。
- 因此本轮**未能取得 ≥3 条专门讨论高级神器的玩家帖**；选题由 system-inventory 路径成立（官方系统 + 0 站内覆盖 + 多个第三方专页回答同一问题），而非由玩家抱怨计数成立。此限制已写入报告，供 QA/主 Agent 判断。
