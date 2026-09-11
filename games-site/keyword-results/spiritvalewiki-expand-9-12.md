# spiritvalewiki 每日扩充 — 反馈采集与选题记录（2026-09-12）

> 执行：EXPAND-9/12-spiritvale ｜ 岗位：玩家反馈分析师（17/18）→ 建站协调员（03/04）
> 上游：`.agent/expand-daily.json` 中 spiritvalewiki 全部 skip 记录（9/3、9/4、9/5、9/6、9/7、9/8、9/11）
> 下游：`.agent/qa-expand-spiritvale-9-12.md`
> 结果：**选题命中，产出 `artifact-sets-guide`（1,493 词）**

---

## 一、通道可用性（如实记录，含缺失维度）

| 通道 | 状态 | 说明 |
|---|---|---|
| Steam 商店页 | ✅ 可用 | 官方原文取到（经检索回显 + 镜像站交叉） |
| Steam 评测（多语区） | ✅ 可用 | 负面评测可读，多语区为同一批文本镜像 → 计为**一个平台** |
| Steam 社区讨论区 | ❌ 反爬 | `steamcommunity.com/app/3767850/discussions/` 直连 ECONNREFUSED |
| Steam 官方公告 hub | ❌ 直连失败 | `steamcommunity.com/app/3767850/allnews/` ECONNREFUSED（9/11 曾 200，属间歇性）；改走 SteamDB 归档 + 日文 wiki 旁证 |
| **Reddit** | ❌ **不可用** | `opencli reddit` AUTH_REQUIRED / `/api/me.json` 403（长期故障）→ **本维度缺失，未编造任何 Reddit 内容** |
| 日文 wiki（SpiritVale JP Wiki） | ✅ 可用 | 本轮**关键新来源**，结构化神器数据库 |
| 媒体/攻略站 | ✅ 可用 | 8+ 家独立编辑站 |

**样本置信度**：社区样本 <20 条（Reddit 缺失）。按 Profile「样本 <10 条标低置信」——本轮样本量在 10-20 之间，结论按**中置信**处理，且本轮选题**不依赖抱怨样本**（见第三节），故 Reddit 缺失不影响结论成立。

---

## 二、本轮采集到的玩家声音（可点击链接）

### 2.1 负面 Steam 评测（9/3–9/6，多语区镜像，计 1 个平台）

来源：Steam 评测页（多语区视图，同一批文本）

- <https://steamcommunity.com/app/3767850/reviews/?l=polish>
- <https://steamcommunity.com/app/3767850/reviews/?l=spanish>
- <https://steamcommunity.com/app/3767850/reviews/?l=german>
- <https://steamcommunity.com/app/3767850/reviews/?l=koreana>

高频抱怨（均已映射既有指南 → 不构成新缺口）：

| 抱怨 | 频率 | 站内覆盖 | 判定 |
|---|---|---|---|
| 机器人泛滥 / 经济被破坏 | 高 | `account-ban-appeal-guide`（9/9）+ `trading-market-guide` | 已覆盖 |
| 误封 / 交易锁 / 申诉慢 | 高 | `account-ban-appeal-guide`（9/9 刚产出，同 support-ticket 通道） | 已覆盖，再写=自噬 |
| 地图太小 / 只有 1 人能刷 / 抢怪 | 高 | `solo-guide` L28 kill-steal 规则 + L170 地图 ~30 人上限 + `beginner-guide` L59 | 已覆盖 |
| 重生时间短（15–25s）、怪物不足 | 中 | `farming-resource-guide` / `leveling-guide` | 已覆盖 |
| 循环重复（farm → buy → farm） | 中 | `daily-quests-guide` / `endgame-guide` | 已覆盖 |
| 服务器/延迟/回档 | 中 | `connection-server-guide` | 已覆盖 |

### 2.2 编辑站 / 媒体

- Prima Games：<https://primagames.com/featured/spiritvale-a-promising-free-mmo-inspired-by-classic-rpgs-suffers-a-rough-early-access-launch>（区域设计约容 30 人、怪物不足）
- MassivelyOP 封禁名单：<https://massivelyop.com/2026/08/17/spiritvale-shares-a-ban-list-updates-on-dev-team-size-and-a-list-of-features-for-its-next-update/>（3,821 / 1,106 / 65，已入 9/9 页）
- MassivelyOP 机器人危机：<https://massivelyop.com/2026/07/21/indie-mmorpg-spiritvale-sees-20000-concurrent-players-as-the-dev-fights-economy-wrecking-bots/>
- pcgames.de：<https://www.pcgames.de/Spiele-Thema-239104/News/Heftige-Kritik-fuer-neues-MMO-SpiritVale-nach-Early-Access-Start-1548477/>

### 2.3 官方

- Steam 商店页（app 3767850）：<https://store.steampowered.com/app/3767850/SpiritVale/>
  > "Cards and Artifacts are 2 important features in SpiritVale, both allow you to build your character the way you want or need for specific content! With more than 220 cards and **33 Artifact Sets**, you can freely mix and match to adapt to any build or biome."
- 官方 0.31.0 Dark Fortress 公告（8/25）— 已由 9/6 收录进 `updates-patch-notes`
- 官方 playtest patch notes 0.17.0 / 0.18.0（SteamDB 归档）：<https://steamdb.info/patchnotes/23389593/> ｜ <https://steamdb.info/patchnotes/23530406/>
  （整套神器 → 换 Grimoire；基础职业 Grimoire 来自 Box of Origin 套装；Grimoire 职业锁定、可装备 3 个；Nevaris Sewers 属 0.18.0 重制地图）

### 2.4 社区（本轮关键新来源）

SpiritVale JP Wiki 神器数据库（**本轮首次发现并直读**）：

- 神器索引：<https://spiritvalewiki.masherhouse.com/db:artifact:start>
- 符文一览：<https://spiritvalewiki.masherhouse.com/db:artifact:rune:start>
- 圣物一览：<https://spiritvalewiki.masherhouse.com/db:artifact:relic:start>
- 单件页（逐条直读，非检索摘要）：Pioneer / Steelheart / Arcanum / Stormquiver / Corporeal
- 版本史：<https://spiritvalewiki.masherhouse.com/misc:update>

---

## 三、选题决策（四条件逐条）

| 条件 | 判定 | 依据 |
|---|---|---|
| **高频 ≥3 独立来源** | ✅ | Official（商店页原文 + 0.17.0/0.18.0 patch notes + 0.31.0 公告）／Community（JP Wiki 神器数据库，结构化）／Editorial（GamesHorizon "Best Artifacts"、GamerHour、Exitlag、ProdigyGamers、Power Up Gaming、Sportskeeda、Destructoid、gameplay.tips）→ 独立来源 ≥8 家 |
| **具体** | ✅ | 可写成一篇文章的具体问题：「神器是什么、为什么散件没用、我该穿哪套、去哪刷」——玩家有独立搜索意图（spiritvale artifacts / best artifacts spiritvale / how to get artifact sets） |
| **缺口** | ✅ | 站内 41 篇 **零覆盖**。`ls content/guides/` 全列 slug 后 grep：artifact 仅 4 个文件偶发提及（necromancer-build 6 / summoner 3 / warrior 1 / updates-patch-notes 1），无专页。Cards 有专页（`cards-guide`），Artifacts 没有——而官方原文把二者**并列为两个系统** |
| **可溯源** | ✅ | 33 套装＝官方原文；四件套规则＝JP Wiki 脚注原文；逐套数值与掉落＝JP Wiki 单件页直读；槽位与 33/34 差异＝**来源冲突，页面内如实标注 [Unconfirmed]，未强取** |

### 3.1 为什么前 6 轮没发现（根因）

9/3–9/11 的检索全部是**抱怨驱动**（"玩家在骂什么"），而本站玩家抱怨已高度收敛到执法/机器人/地图拥挤三簇，全部命中既有页面 → 连续 SKIP 是合理结果。本轮改为**系统清单驱动**（官方商店页声明了哪些系统 × 站内是否各有专页），一次命中。建议写入 Profile（见 QA 报告 §8）。

### 3.2 本轮否决的候选（逐条理由）

| 候选 | 否决理由 |
|---|---|
| 0.31.0 Dark Fortress 深度指南 | 触发条件仍不达标：JP Wiki 已收录 0.31.0 但**仅 3 行摘要**、无机制细节，属转述；深度细节仍仅官方单源。vgspoilers 止 0.30.14、MassivelyOP 止 8/17。且官方内容 9/6 已入 `updates-patch-notes`，展开写=自噬 |
| 交易锁（trade lock）指南 | 证据仍只有 Steam 一个平台（多语区同批文本镜像）；MassivelyOP 讲的是「全服关闭交易」，另一回事；与 9/9 `account-ban-appeal-guide` 同执法簇、同申诉通道 → 自噬红线 |
| 刷怪点竞争 / 抢怪攻略 | 被 `solo-guide` L28 + L170、`beginner-guide` L59、`farming-resource-guide` 覆盖，写=自噬 |
| Weaver 重做 / Steam Deck / Dragon Knight | 分别 1-2 源、三源口径互相矛盾、仅官方预告无机制无 ETA |
| 隐藏 Boss / 摆摊盈利 / 满级无事做 | 均已被站内 41 篇覆盖 |

---

## 四、产出

- 新页：`spiritvalewiki/content/guides/artifact-sets-guide.md`（1,493 词，Guides / EA / 2026-09-12）
- 三层 sources：Official 3 / Community 1 / Editorial 1
- 站内攻略总数：41 → 42
- 部署：`dpl_J8PQ1pEgw8bWmLakvHTDLZCqSJnP`（Ready / production，alias 已确认）
- 线上：<https://spiritvalewiki.vercel.app/guides/artifact-sets-guide> → 200
