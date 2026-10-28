# 候选分析 — #82 Blind Descent — **可建（16）**

> 岗位：候选分析员（`docs/agents/22-岗位卡-候选分析员.md` + `23-Profile-候选分析员.md`）
> 规则：`docs/STRATEGY-选词与评分.md` §2（四维 20 分 / 需求三道闸门 / 竞争 `P = T + 0.5t` / 硬否决 + ≥14 分流）
> 词库输入（**只读，未另采、未估算**）：`keyword-results/blinddescent.md`
> 一手数据：Steam AppDetails `appid=1209970`（2026-10-28 抓取）；SERP 走 WebSearch（2026-10-28，美区英文，中/日文按原样跑）
> 未做：未建站、未写攻略、未改站点目录、未重采词、未改 `CANDIDATE-POOL.md` / `INDEX.md`、未 commit
> 动态字段（价格 / 评测数 / CCU / Trends）抓不到一律 `[待确认]` + 抓取日，**未估算**

---

## 1. 基本信息

| 项 | 值 | 来源 |
|---|---|---|
| Steam app | **1209970** | [Steam AppDetails](https://store.steampowered.com/api/appdetails?appids=1209970&l=english)（2026-10-28 抓取） |
| 开发 / 发行 | Pokuch（土耳其，2019 年起开发，首款商业作）/ META Publishing（Owlcat 子公司） | 同上 + [presskit](https://blinddescent.net/presskit/) |
| 类型 | 开放世界科幻生存冒险；Action / Adventure / Casual / Indie / RPG / Simulation；**单人 + 1–4 人 online co-op + 跨平台联机** | 同上 |
| 发售 | **2026-12-02 Early Access（PC：Steam / Epic / GOG）**；抓取时 `coming_soon=true`，距发售 **35 天**；PS5 / Xbox Series 计划 2027 随 1.0 | 同上 + [Gematsu 2026-10](https://www.gematsu.com/2026/10/blind-descent-launches-in-early-access-for-pc-on-december-2) |
| 价格 | `[待确认]`（`price_overview` 为空，商店页「尚未发售」） | 同上 |
| 评测 / 好评 | **无用户评测**（新作未发售）；18 个 curator 已收录 | 同上 |
| 愿望单 | **300,000+**（第三方多家口径，非官方一手） | [GameRant](https://gamerant.com/steam-new-open-world-survival-games-blind-descent-release/)、[Capsule Computers](https://www.capsulecomputers.com.au/2026/10/get-ready-elon-blind-descent-goes-into-early-access-below-the-surface-of-mars-on-december-2nd/) |
| demo / 测试 | 免费 demo 在架；co-op 专项 playtest 2026-10-14 起（第三方） | 同上 + [gamer.org 试玩评测](https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/) |
| 语言 | 11 种：英/法/德/西(西)/日/韩/葡(巴)/葡(葡)/俄/简中/西(拉美) | Steam AppDetails（一手） |
| 词库 5 数字 | 原始 159 / 去重 103 / **有效词 83** / 噪声 19.4% / 品牌锚定率 80.6% / 品类 survival | `keyword-results/blinddescent.md` 头部 |

---

## 2. 硬门槛（有效词复核 + 内容可写性）

**硬门槛通过**：开放世界生存 + 扫描研究 + 模块化建造 + 变异/共生双路线 + 攀爬/战斗 +  dungeon，机制层可写；且有一手商店页与官方 presskit 可核验。

### 2.1 有效词复核（不抄研究员的 83）

**A. 判为撞名，剔除 10 条**（这些词指向 Brian Dickinson 的珠峰书、Nevada Barr 的 Anna Pigeon 小说、或同名电影，不是本作）：

| 剔除词 | 理由 |
|---|---|
| `blind descent book` / `blind descent book review` / `blind descent book brian dickinson` | Brian Dickinson《Blind Descent》登山书 |
| `blind descent barr` | Nevada Barr 同名小说作者 |
| `blind descent novel` / `blind descent pdf` / `blind descent summary` / `blind descent book wikipedia` / `blind descent goodreads` | 图书/阅读平台意图 |
| `blind descent movie` | 影视意图，本作无影视改编 |

**B. 近重复合并 5 组（−5）**：

| 组 | 原始 | 合并后 |
|---|---|---|
| co-op 问法 | `demo multiplayer` / `multiplayer demo` | 1 |
| co-op 问法 | `how to play multiplayer` / `how to play blind descent multiplayer` / `como jogar blind descent multiplayer` | 1 |
| 发售日 | `ps5 release date` / `release date ps5` | 1 |
| 发售日 | `release date xbox` / `xbox release date` | 1 |

→ **复核后有效词 = 83 − 10 − 5 = 68**（研究员 83）。

> **稳健性**：即使这 10 条全算有效（83），攻略型也只有 20/83 = **24.1%**，仍 <30%，需求封顶结论不变。`summary` 若判为游戏剧情摘要（+1 = 69），攻略型 17/69 = 24.6%，同样不变。

### 2.2 内容可写性

有可核验的机制/物品/生物/角色，不是「搜索建议里出现过」——

- 官方商店页明列 7 大系统（扫描研究 / 模块化制作 / 基地建造与被生态侵蚀 / 地底风暴·毒气·主动攻击生物 / 科研 vs 变异双路线 / 4 人 co-op / 跨平台联机）——[Steam 商店页](https://store.steampowered.com/app/1209970/)
- 一手试玩评测给出具体实体名（Hyperion 挖掘场、Daniel Harris、AI 助手 Hollowatch、失踪队友 Hakan；斧/棍/火堆/简易棚/水容器/工作台/容器；抗性藤蔓/红腹多肉/毒枯果；彩虹蟹/「兔子」/蛙状生物）——[gamer.org](https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/)
- 官方 presskit 给出「10 英里深、电梯失事、动态攀爬、基地装修、追踪足迹」——[presskit](https://blinddescent.net/presskit/)

---

## 3. 需求

| 闸门 | 实测 | 判定 |
|---|---|---|
| 有效词 ≥20 | **68**（研究员 83，剔除 15） | 通过 |
| 攻略型占比（自数） | Co-op/Multiplayer 14 + Guide 1 + Weapons/Gear 1 + Boss/Char 1 = **17 / 68 = 25.0%**（83 口径 24.1%） | **<30% → 触发发售日陷阱，需求封顶 3** |
| 页型覆盖（需求 5 要求 ≥3 类各 ≥5 词） | co-op 14、其余三类各 1 | 不满足，到不了 5 |
| 需求 3 的附加条件（25–39 词且 ≥3 类各 ≥3 词） | 词量 68 不在该档；页型只有 co-op 一类 ≥3 | 不满足 |
| 第三方信号 | 300k+ 愿望单、免费 demo、co-op playtest、Gematsu/GameRant/IGN 多篇报道 | 通过（非 Suggest 单源） |
| 品牌锚定 | 脚本 80.6%；但 `Blind Descent` 同时是 2020 年 arXiv 论文名与两本小说名 | 通过（≥50%），但**标题 MUST 加品类词**（`Blind Descent survival game`）避免与论文/小说抢词 |

**需求 = 3**。依据：词量够（68 ≥60），但攻略型仅 25.0%——搜索需求集中在「发售日 / 平台 / co-op 有没有 / demo 多长」，是典型「发售窗口词多、攻略词少」，按 §2.2 封顶 3。这是本候选**唯一的下行项**。

> 备注：研究员的关键词表把 `book review` / `goodreads` / `pdf` 等书评词留在了「Info/发售平台」里，导致攻略型占比进一步被稀释；复核后结构更清晰，但结论方向一致。

---

## 4. 竞争（6 条固定查询）

### 4.1 SERP 逐条记录（2026-10-28）

**Q1 EN `"Blind Descent" wiki`（10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/无光绝境 | 中文百科（不计） |
| 2 | gematsu.com/?post_type=games&p=972015 | 数据库（不计） |
| 3 | export.arxiv.org/abs/2006.11505 | 论文（撞名，不计） |
| 4 | gamepressure.com/games/blind-descent/z96e8f | 数据库（不计） |
| 5 | me.ign.com/en/blind-descent | 数据库（不计） |
| 6 | ppe.pl/gry/blind-descent/19461 | 数据库（不计） |
| 7 | boardgamegeek.com/videogame/450512/blind-descent | 数据库（且标 unreleased/vaporware） |
| 8 | aitopics.org/doc/arxivorg:F432FD2F | 论文索引（撞名，不计） |
| 9 | in.ign.com/blind-descent | 数据库（不计） |
| 10 | ar5iv.labs.arxiv.org/html/2102.09643 | 论文（撞名，不计） |

> 前 10 **没有专门攻略站**；3 条是机器学习论文（同名污染）。

**Q2 EN `"Blind Descent" guide`（10 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | ar5iv.labs.arxiv.org/html/2006.11505 | 论文（撞名） |
| 2 | arxiv.las.ac.cn/abs/2006.11505v2 | 论文镜像 |
| 3 | browse.dev.arxiv.org/pdf/2006.11505v1 | 论文 |
| 4 | co-op.gg/xbox-series-x/game/blind-descent | co-op 数据库单页（不计） |
| 5 | douyin.com/shipin/7271433799387432979 | 短视频（不计） |
| 6 | gry-online.pl/gry/blind-descent/z96e8f | 数据库 |
| 7 | gamer.org/blind-descent-playtest-review-craft-scan-survive | 综合站单篇试玩（不计） |
| 8 | gamepressure.com/games/blind-descent/z96e8f | 数据库 |
| 9 | chaptercheats.com/cheats/pc/491621/blind-descent-cheat-codes | 通用 cheat 站单页（不计） |
| 10 | voidu.com/cn/product/blind-descent/73093 | 商店 |

**Q3 EN `"Blind Descent" codes`（8 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | browse-export.arxiv.org/abs/2102.09643 | 论文 |
| 2 | ui.adsabs.harvard.edu/abs/2021arXiv210209643R/abstract | 论文索引 |
| 3 | browse.dev.arxiv.org/pdf/2006.11505v1 | 论文 |
| 4 | trends.openbayes.com/paper/blind-descent-a-prequel-to-gradient-descent | 论文聚合 |
| 5 | fugumt.com/fugumt/paper_check/2102.09643v1 | 论文翻译 |
| 6 | chaptercheats.com/cheats/pc/491621/blind-descent-cheat-codes | cheat 站单页（无码） |
| 7 | shop.fhyx.hk/item/20596.html | 港服 key 商城 |
| 8 | instant-gaming.com/da/19969-koeb-blind-descent-pc-steam | key 商城 |

> `codes` 意图**空白**（游戏无兑换码）。结果 8 条、无专门站。

**Q4 ZH `Blind Descent 攻略`（6 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | douyin.com/shipin/7271433799387432979 | 短视频 |
| 2 | co-op.gg/xbox-series-x/game/blind-descent | co-op 数据库（不计） |
| 3 | chaptercheats.com/cheats/pc/491621/blind-descent-cheat-codes | cheat 站（不计） |
| 4 | playority.net/it/gioco/blind-descent | 聚合/下载（不计） |
| 5 | xct.live/game/1817817180/blind-descent | 聚合（不计） |
| 6 | chaptercheats.com/game/pc/491621/blind-descent | cheat 站（不计） |

**Q5 ZH `Blind Descent wiki 中文`（1 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/无光绝境 | 百度百科（不计 P，附注：内容已过时，写「2025-10-11 发售」） |

> 中文**无本地攻略站**，只有百科；`/zh-cn/` 本地化也未出现 → **多语言机会成立（内容扩展可 +1）**。

**Q6 JA `Blind Descent 攻略 日本語`（0 条）→ 回退 `Blind Descent ゲーム 攻略 wiki`（4 条）**

| # | 域名 / URL | 归类 |
|:--:|---|---|
| 1 | baike.baidu.com/item/无光绝境 | 中文百科 |
| 2 | jestr.gg/games/blind-descent | 数据库 |
| 3 | xbox.com/en-au/games/store/blind-descent/9nc10hw6xf01 | 商店 |
| 4 | 163.com/dy/article/L96LU9O705561FY1.html | 中文新闻 |

> 日文**无专门攻略站**；原查询 0 条（如实记录，并已回退一次）。

### 4.2 域名直探（补 6 条查询的盲区）

规则要求「MUST NOT 把搜不到当没有」，故对疑似专属域直探：

| 域名 | 实况 | 归类 |
|---|---|---|
| **blinddescent.wiki** | **存在**，自称「unofficial fan-made resource website」；分区：新手 / codes and rewards / 变异排行 / co-op 策略 / 生存机制 / 资源与制作 / 敌人威胁库 / EA 发售信息 / FAQ；最新文章日期 **2026-10-19** | **厚 T=1** |
| blinddescent.net | 官方站 / presskit（非攻略站） | 不计 |
| gamewikistation.com / volx.jp 等 | 6 条查询均未检出该作的独立分区 | 不计 |

### 4.3 P 值

| 站 | 类型 | 判定依据 |
|---|---|---|
| blinddescent.wiki | **厚 T=1** | 独立域名 + 围绕本作 + ≥5 类攻略页 + 9 天前更新；但**未进 6 条查询前 10**（未被索引/权重低） |
| 其余 | 不计 | 数据库、论文、商店、cheat 站单页、综合站单篇、Reddit/YouTube 类 |

**主口径：`P = 1 + 0.5×0 = 1.0` → 落 `(0, 1]` → 竞争 4（只有一家厚站，可以切）。**

> **敏感度**：若严格只数「SERP 前 10 出现的站」（blinddescent.wiki 未上榜）→ `P = 0` → 竞争 5 → 总分 17；若该站被严判为薄 → `P = 0.5` → 仍 4。**两种口径都 ≥14，结论不变。**
> 实质判断：这是一家**未上榜、内容疑似模板化**（写「codes and rewards」，而本作无兑换码）的站点，威胁低于 P=1 的字面值——反而说明「高质量 + 有真实数值的攻略」有空位。

---

## 5. 内容扩展

**可核验实体（每条有来源）**：

| 类别 | 具体实体 | 来源 |
|---|---|---|
| 机制（12） | 扫描研究、模块化制作、基地建造 + 生态侵蚀回收、动态攀爬/抓钩、感染-共生、变异能力（念力 / 墙面奔跑）、近战+远程、地底风暴、毒气、昼夜、负重/耐久/格子背包、dungeon | [Steam](https://store.steampowered.com/app/1209970/)、[gamer.org](https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/)、[presskit](https://blinddescent.net/presskit/) |
| 物品/配方（10） | 斧、棍、火堆、简易棚、水容器、工作台、容器、护甲制作、信号追踪、新庇护所蓝图 | 同上（gamer.org 逐条点名） |
| 生物/植物（7） | 抗性藤蔓、红腹多肉、毒枯果、彩虹蟹、「兔子」、蛙状生物、感染簇 | gamer.org（**单一来源**） |
| 角色（4） | Daniel Harris、AI 助手 Hollowatch、Hakan、失踪先驱队 | gamer.org |
| FAQ/信息（9） | 发售日、平台（PC EA / PS5·Xbox 2027）、价格、co-op 与跨平台、demo/playtest、EA 时长（约 1 年）、配置、语言、路线图 | [Steam](https://store.steampowered.com/app/1209970/)、[Gematsu](https://www.gematsu.com/2026/10/blind-descent-launches-in-early-access-for-pc-on-december-2) |

→ 可写 **22–26 页、5 个类别**（机制/物品/生物/角色/FAQ）→ **内容扩展 4**。
→ 不足 5 的理由：**没有可核验的 Boss 名录、武器数值表、可命名变异清单**（官方页面一律不给名字），短期内撑不到「30+ 页且 5 类各 ≥5 条」。
→ 多语言机会 **+1 的加分已含在 4 分内**：中文只有过时的百度百科，日文 0 结果。

> 写作风险：生物/植物名来自单一试玩评测，写稿前 MUST 用第二来源（demo 实测或官方 Discord/公告）复核；否则该页降级为「生态机制」而非「图鉴」。

---

## 6. 生命周期

| 证据 | 值 | 来源 |
|---|---|---|
| 发售日 | **2026-12-02 EA**（距今天 **35 天**，≤8 周） | Steam AppDetails（一手） |
| 愿望单 | **300,000+**（第三方多源，非官方口径） | GameRant / Capsule Computers |
| demo / 测试 | 免费 demo 在架；co-op playtest 2026-10-14 | gamer.org / GameRant |
| 后续 | EA 约 1 年，1.0 加新生物群系/生物/机制；PS5·Xbox 2027 | Gematsu / GameRant |
| Google Trends 28 天 | `[待确认]`（未取） | — |

**生命周期 = 5**：未发售但定档 ≤8 周（35 天）且愿望单 30 万（强信号），符合 §2.5 的 5 分档。

---

## 7. 四维得分

| 维度 | 分 | 一句话依据 + 链接 |
|---|:--:|---|
| 需求 | **3** | 有效词 68（复核后）≥60，但攻略型仅 **25.0%**（17/68）<30% → 售日陷阱封顶 3（[词库](keyword-results/blinddescent.md)） |
| 竞争 | **4** | `P=1.0`：仅 [blinddescent.wiki](https://blinddescent.wiki/) 一家厚站且未进前 10，6 条查询全是数据库/论文/单篇（§4） |
| 内容扩展 | **4** | 22–26 页、5 类：12 机制 / 10 物品 / 7 生物 / 4 角色 / 9 FAQ（[Steam](https://store.steampowered.com/app/1209970/)、[gamer.org](https://www.gamer.org/blind-descent-playtest-review-craft-scan-survive/)） |
| 生命周期 | **5** | EA 2026-12-02（35 天）+ 愿望单 300k+ + demo/playtest 在跑（[Gematsu](https://www.gematsu.com/2026/10/blind-descent-launches-in-early-access-for-pc-on-december-2)） |
| **总分** | **16** | — |

---

## 8. 成本与回本

| 项 | 值 | 口径 |
|---|---|---|
| 域名 | 0 元 | `*.vercel.app` 子域 |
| 托管 | 0 元 | Vercel Hobby（100 次部署/UTC 日上限） |
| 内容生成（token） | `[待实测]` | 建站后按台账回填 |
| 人工 | `[待实测]` | 目标 ≤6 小时/站（台账「实际人工小时」） |
| 回本 PV | `总成本 ÷ (RPM/1000)` | RPM **$1–5/千次**（第三方公开基准，2026-08 检索，非承诺） |

- 现金成本 = 0 → **单看 PV 门槛为 0**；实际回本只由 token/人工折算决定，按台账实测回填后再算。
- 若把成本记为 C 元：RPM $1 时回本 PV = **1000×C**；RPM $5 时回本 PV = **200×C**。
- **组合回本口径**：30 天 300 PV ≈ **$0.3–1.5**（RPM $1–5），单站不单独算回本。

---

## 9. 结论

**第一步 · 硬否决**：需求 **3** > 2 ✅；竞争 **4** > 1 ✅ → **不触发否决**。
**第二步 · 总分分流**：总分 **16 ≥ 14** → **可建**。

**关键证据**：发售 35 天、愿望单 30 万、6 条查询无一家正经英文攻略站（唯一专属站 blinddescent.wiki 未上榜、内容疑似模板化且写了不存在的「codes」），而官方页把扫描/建造/变异/战斗/co-op 讲得足够细 —— 攻略空位真实存在。

**MUST 注意的 3 条风险**：

1. **需求是唯一短板（3）**：搜索量集中在「发售日/平台/demo/co-op 有没有」，攻略型仅 25%。页型必须往「co-op 怎么玩 / 跨平台 / demo 内容 / 生存机制」靠，纯 Tier/Boss 页会缺词。
2. **品牌撞名**：`Blind Descent` 同时是 2020 年机器学习论文与两本小说名，title/H1 MUST 带 `survival game` 或 `co-op` 限定词，避免进错 SERP。
3. **竞争会变**：EA 上线（12-02）后攻略站会在 1–4 周内冒出来，D+0 前抢首页是唯一窗口；上线后按事后闸（D+30 PV<50 → 观察）执行。
