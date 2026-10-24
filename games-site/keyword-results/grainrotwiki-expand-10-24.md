# Grain Rot Wiki 扩充报告 — 2026-10-24

> 任务编号：EXPAND-2026-10-24-GRAINROT
> 站点：`grainrotwiki/`（Steam appid 4450620，https://grainrotwiki.vercel.app）
> 产出：1 篇新攻略，未部署、未 commit（按指令交 QA/主 Agent）

---

## 1. 选题结论

- **新 slug**：`legendary-gumball-constructs-guide`
- **标题**：Grain Rot Legendary Gumballs — How to Unlock the Last Constructs and the Vibe Modulator
- **正文词数**：**1,495 words**（正则计数 `[A-Za-z0-9'-]+`，目标 800–1500）
- **category**：`Builds`
- **version**：`1.1`（当前游戏版本 1.1，最新补丁 1.13）
- **updated**：`2026-10-24`

### 为什么写这篇

玩家在 Outpost 的 ball machine 里反复抽到 scrap、construct 图鉴还差最后几格、并且找不到 legendary gumball——这是 Reddit r/GRAINROT 上可复现的具体问题。站内 35 篇没有一篇解释「传奇 gumball 从哪来 / 最后几个 construct 怎么解锁 / Vibe Modulator 是什么」。

---

## 2. 两条选题路径（都跑）

### ① complaint-driven（抱怨/求助驱动）

在 r/GRAINROT 检索到以下独立玩家反馈（PullPush Reddit archive，2026-08-09 至 2026-10-03 的 100 条帖子 + 关键词评论检索）：

| # | 日期 | 玩家问题 | 来源 |
|---|------|---------|------|
| 1 | 2026-08-23 | construct 图鉴还差 3 个 schematics，但 gacha ball 每次只给约 400 scrap；追问是否要别的条件或尚未开放 | https://www.reddit.com/r/GRAINROT/comments/1vwgass/question_about_the_construct_list/ |
| 2 | 2026-08-11 | 在 level 5 找到 yellow gumball，但 Boss 打不过（武器全碎）；回帖称「最后 3 个 constructs 需要它，clown 在 depth 10 以下，podium 上应是必出 legendary gumball」 | https://www.reddit.com/r/GRAINROT/comments/1vlq2x9/yellow_gumball_potential_spoilers/ |
| 3 | 2026-09-02 | 专帖问「怎么找 corrupted elite boss 和 vibe modulator」；回帖给出 level 5 起红门、level 10 必出、Boss 每局变化、orange ball 随机出 Vibe Modulator | https://www.reddit.com/r/GRAINROT/comments/1w4nk40/how_to_find_corrupted_elite_boss_and_vibe/ |
| 4 | 2026-08-18 | 小队卡在「kill a Corrupted Elite」任务，打到 level 7 仍未见 Boss；回帖指出 elite 不在普通房间，而在下电梯后的 portal 里 | https://www.reddit.com/r/GRAINROT/comments/1vs5yv7/hey_guys_question_about_a_quest/ |
| 5 | 2026-09-02 | 玩家承认不知道 legendary gumball 用途，把它当任务道具放进 storage；拿到 Vibe Modulator 后房间等级飙升 | https://www.reddit.com/r/GRAINROT/comments/1w4nk40/how_to_find_corrupted_elite_boss_and_vibe/ |

独立提及 ≥5 条、涉及 ≥5 个不同用户（DrippySaurus / Davik_Colthain / SIRTIMM13 / Wedgehoe / Hamiczan / Automatic_Argument14 / AURORAJollyCraft / KlaVra 等）。核心问题一致：**标准 ball machine 抽干后只剩 scrap，传奇 construct 的获取路径没有官方说明**。

### ② system-inventory-driven（官方系统清单 × 站内空白）

官方公告/补丁列出的相关系统：

| 官方系统 | 首次出现 | 站内覆盖 |
|---------|---------|---------|
| Legendary gumball（作为会发奖励的道具） | Patch 1.06（2026-08-11） | ❌ 仅 patch-notes 一行提及 bug |
| Vibe Modulator（construct，有 scrap 值与 VFX） | Patch 1.09（2026-08-28） | ❌ 仅 patch-notes 一行修复 |
| Gumball machine / 地下城 shop 的 gumball 库存 | Patch 1.11（2026-09-28） | ❌ 无专门解释 |
| 1.08 新增 7 个 buildable constructs（2 legendary） | Patch 1.08（2026-08-26） | ⚠️ 仅列表级提及 |
| Expedition Gumballs（独立 stat 货币） | 1.1（2026-09-24） | ✅ Expedition 指南已覆盖 |

站内 grep 结果：
- `gumball` 仅命中 `grainrot-expedition-mode-guide.md`（Expedition 货币）与 `patch-notes-guide.md`（1.06 bug 一行）。
- `legendary gumball` / `Vibe Modulator 解锁` / `last 3 constructs` / `orange ball` 无任何专门段落。
- `construct` 在 weapons-tools / best-vessels 中只有「20+ unlockable constructs、名称与数值未证实」的概述，没有解锁管线。

结论：官方明说有 legendary gumball 与 Vibe Modulator，站内整块没写其获取路径 → 命中 system-inventory 空白。

---

## 3. 来源表（11 条，3 个层级）

### Official（Steam 官方公告，经 ISteamNews API 直取，2026-10-24）

| 标题 | 日期 | URL | 用于本文的事实 |
|------|------|-----|---------------|
| Patch 1.06 | 2026-08-11 | https://store.steampowered.com/news/app/4450620/view/1840310314353722 | "Fixed a bug where a legendary gumball would not give any reward." |
| Patch 1.08 | 2026-08-26 | https://store.steampowered.com/news/app/4450620/view/1842212951296658 | 新增 7 constructs（3 common / 1 rare / 1 epic / 2 legendary） |
| Patch 1.09 | 2026-08-28 | https://store.steampowered.com/news/app/4450620/view/1842212951302687 | Vibe Modulator scrap 值修正、VFX 性能优化 |
| Patch 1.11 | 2026-09-28 | https://store.steampowered.com/news/app/4450620/view/1844751498231191 | gumball machine 投币 bug、dungeon shop 只刷 gumball 的修复 |
| 1.1 发布公告 | 2026-09-24 | https://store.steampowered.com/news/app/4450620/view/1844751498222226 | Expedition Gumballs 是永久属性升级货币（与本文系统区分） |

最新版本核对：**Patch 1.13，2026-09-30**；最新公告为 2026-10-23 的 Twitch Drops。

### Community（Reddit，一手玩家发言）

| 标题 | 日期 | URL |
|------|------|-----|
| Question about the construct list | 2026-08-23 | https://www.reddit.com/r/GRAINROT/comments/1vwgass/question_about_the_construct_list/ |
| Yellow Gumball (potential spoilers) | 2026-08-11 | https://www.reddit.com/r/GRAINROT/comments/1vlq2x9/yellow_gumball_potential_spoilers/ |
| How to find corrupted elite boss and vibe modulator | 2026-09-02 | https://www.reddit.com/r/GRAINROT/comments/1w4nk40/how_to_find_corrupted_elite_boss_and_vibe/ |
| Hey guys, question about a quest | 2026-08-18 | https://www.reddit.com/r/GRAINROT/comments/1vs5yv7/hey_guys_question_about_a_quest/ |

### Editorial（第三方攻略站，仅用于交叉核对，不作官方事实）

| 标题 | 读取日期 | URL | 用途 |
|------|---------|-----|------|
| GRAIN ROT Artifacts & Blueprints Guide | 2026-10-24 | https://grainrot.org/outpost/artifacts-blueprints/ | 标准 artifact → coins → ball machine → unlocker → blueprint 管线 |
| GRAIN ROT Legendary Gumball and Gacha | 2026-10-24 | https://grain-rot.wiki/outpost/legendary-gumball/ | 明确「pity math 未公开」；未记载 Boss 掉落来源 |

### 采集限制（如实记录）

- 本机到 `store.steampowered.com` / `steamcommunity.com` 的 443 连接超时或被 ECONNREFUSED（DNS 返回 23.37.18.120 / 23.40.26.120 / 199.59.149.230），`--resolve`、HTTP、r.jina.ai、allorigins、codetabs 均失败。**Steam 评测语料本轮不可达**，因此未引用 Steam 评测原文。
- 官方公告走 `api.steampowered.com/ISteamNews` 直连成功（28 篇，2026-06-02 至 2026-10-23 全量读取）。
- Reddit 官方 JSON 403，改用 PullPush archive API 取得 r/GRAINROT 100 条帖子与关键词评论。

---

## 4. 查重结论（逐条对比 35 篇现有攻略）

判断标准：intro 是否可互换、搜索意图是否独立。

| 现有 slug | 覆盖内容 | 与新文重叠判断 |
|-----------|---------|---------------|
| all-biomes-guide | 生物群系分层 | 无重叠 |
| all-enemies-guide | 敌人类型与侦测模型 | 无重叠（新文只写 Boss 战准备，不列敌人图鉴） |
| beginner-guide | 上手核心循环 | 无重叠 |
| best-vessels-guide | vessels / constructs 概述与配装原则 | 部分相关；该文明确「construct 名称、数值、解锁路径未证实」，新文专注解锁路径，intro 不可互换 |
| co-op-guide | 多人组队策略 | 无重叠 |
| controller-guide | 手柄支持 | 无重叠 |
| crafting-resources-guide | 资源、Grinder、配方 | 相关但不同：该文讲资源→gold/制作，新文讲 artifact coins→blueprint→legendary 掉落 |
| demo-guide | Demo 内容 | 无重叠 |
| elevator-modifiers-fuse-guide | 电梯 modifier / fuse | 无重叠（新文仅用电梯深度作为 Boss 门槛） |
| endgame-survival | Deep Layers 风险管理 | 无重叠 |
| events-timed-content | 活动与 modifier | 无重叠 |
| extraction-guide | 撤离决策 | 无重叠 |
| full-release-guide | 1.0 新增内容 | 无重叠（新文是 1.1/1.08–1.13 时代的单系统深挖） |
| game-mechanics-systems-guide | 系统总览 | 无重叠（总览不含 gumball 分层） |
| grainrot-expedition-mode-guide | Expedition 永久死亡、Expedition Gumballs | **需明确区分**：该文写 Expedition 货币；新文在「Three things called gumball」中专门区分，搜索意图不同 |
| hard-mode-guide | 难度 | 无重叠 |
| multiplayer-matchmaking-guide | 公共服务器/联机 | 无重叠 |
| outpost-decoration-stats-guide | 房间装饰与属性 | 相关但不同：该文讲房间装饰加成，新文讲 construct 解锁 |
| outpost-upgrade-guide | Outpost 升级优先级 | 相关但不同：新文提及 Murch/ball machine 仅作为解锁管线 |
| patch-notes-guide | 1.01–1.09 补丁历史 | 引用关系而非重叠；该文只有 1.06/1.09 各一行 |
| performance-lag-fix-guide | 性能 | 无重叠 |
| player-count-guide | 人数 | 无重叠 |
| price-editions-guide | 价格 | 无重叠 |
| release-date-faq | 发售信息 | 无重叠 |
| rot-debuff-guide | Rot debuff | 无重叠 |
| solo-guide | 单人 | 无重叠 |
| spark-mode-guide | 容器破碎后的 Spark | 无重叠（新文只引用 spark 形态作 Boss 战术之一） |
| stealth-sound-guide | 潜行与声音 | 无重叠 |
| survival-tips | 生存技巧 | 无重叠 |
| survive-enemy-chase-guide | 被追逐时逃生 | 无重叠 |
| system-requirements | 配置 | 无重叠 |
| third-floor-locked-guide | 三楼为何锁、任务线终点 | **需明确区分**：该文讲「为什么任务停了/三楼锁」，新文讲「最后几个 construct 怎么解锁」；仅在 Corrupted Elite portal 一句相交 |
| tips-and-tricks | 10 条技巧 | 无重叠 |
| weapons-tools-guide | constructs 概述、Grinder、战术木工 | 相关但不同：该文是武器/工具评估框架，新文是传奇解锁管线；intro 不可互换 |
| weather-system | 环境/火 | 无重叠 |
| **新文 legendary-gumball-constructs-guide** | 传奇 gumball 来源、Boss portal、最后 constructs、Vibe Modulator | — |

结论：**无同主题覆盖**，`related` 6 个 slug 全部真实存在且已构建成功。

---

## 5. [Unconfirmed] 清单（正文中已逐条标注）

1. Boss 遭遇的官方名称（玩家称 "the clown"；未与 Rotlurker / Wailer 划等号）。
2. Boss portal 首次可能出现的确切电梯层数（玩家报告 level 5 起，非官方）。
3. level 10 是否「必出」portal，或仅为高概率。
4. legendary gumball 的掉落率与是否存在 pity。
5. Patch 1.08 之后的当前 construct 总数（「最后 3 个」说法写于 1.08 之前）。
6. legendary ball 的开启方式（ball machine / unlocker / 自动），官方无说明。
7. Vibe Modulator 放置在两个房间之间可同时加成两房（单一玩家报告）。
8. orange ball 随机出 Vibe Modulator、以及「已获得项从池中移除」的 pool 机制（玩家报告）。
9. Boss 战中的 fire DoT / spark 击退技巧（个别玩家经验，非验证策略）。

所有精确数值（约 400 scrap/roll、level 5/6/7/10、房间等级 50–90、level 20/29）均写明为玩家报告或标注 [Unconfirmed]，未作为官方事实。

---

## 6. 构建结果

```
cd grainrotwiki && pnpm install   → ok
pnpm build                        → ✓ Compiled successfully in 256ms
                                    ✓ Generating static pages (49/49)
                                    ● /guides/legendary-gumball-constructs-guide
```

- exit code 0
- 产物验证：`.next/server/app/guides/legendary-gumball-constructs-guide.html` 含新标题、Patch 1.06 来源、6 个 related 链接、Official/Community/Editorial 三档来源标签。
- 未部署、未 commit、未修改其他站点。

---

## 7. 交接

- 交给 QA：`games-site/grainrotwiki/content/guides/legendary-gumball-constructs-guide.md`
- QA 重点：Community 层事实（Boss portal 层数、最后 3 constructs、Vibe Modulator 来源）是否在正文均保留 [Unconfirmed]/[Community] 限定；是否误把玩家命名当官方名。
- 通过后由主 Agent 统一 commit/deploy。
