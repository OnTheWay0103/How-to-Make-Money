# SpiritVale 内容扩充记录 — 9/17（EXPAND-9/17-spiritvalewiki）

> 模式: expand-feedback | 站点: spiritvalewiki | 游戏: SpiritVale (Baikun Interactive, Steam app 3767850 / Playtest app 3918510, EA 2026-07-15)
> 角色: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) 自查
> 结果: ✅ **PRODUCED** — 产出 1 篇新攻略并部署 + 线上验证通过
> 背景: 本站 9/3–9/11 连续 6 轮 SKIP，核心卡点是「0.31.0 Dark Fortress 机制始终仅官方单一来源」。**本轮破局：独立核验找到两个互相佐证的非官方来源。**

---

## 〇、0.31.0 触发复检 —— **本轮达标（6 轮 SKIP 的卡点已解除）**

前 6 轮（9/3–9/11）的否决理由统一是：DK Dark Fortress / Dusk 武器 / Bond Targets 只有官方 Steam 公告（+ 一个不描述机制的聚合站），未达「≥2 独立非官方来源」。

**9/17 复检结论：不成立。** 存在两个独立非官方来源，且二者在关键事实点上**互相佐证**：

| 关键事实 | 官方 | JP Wiki | MKAU | 判定 |
|----------|:----:|:-------:|:----:|------|
| Dark Fortress 为 0.31.0（8/25/2026）新增 | ✓ | ✓ | ✓ | 三源一致 |
| 8 把 Dusk 系列武器 | ✓（逐条列 8 件） | ✓（「Dusk 装备 8 种」） | ~ | 数量互证 |
| Echo Set（Atk / Matk 两版） | ✓ | ✓ | – | 两源一致 |
| 7 只 **Lv 155** Echo Master Boss | – | ✓ | ✓ | **两独立源一致** |
| 三色水晶 Boss 100% / 杂怪 0.5% | – | ✓ | ✓ | **两独立源一致** |
| 怪物名单与属性（7 职） | – | ✓ | ✓ | **两独立源一致（仅前缀与等级口径不同）** |
| 通关下层才能进上层 | – | – | ✓ | 单源，标 [Unconfirmed] |

- **来源 A（Community）**: SpiritVale JP Wiki `area:dark_fortress`（spiritvalewiki.masherhouse.com，个人运营非公式 wiki，wiki 内 0.31.0 翻译页戳记 2026/08/25）。带**逐怪掉落表**、等级带、地图属性、以及 `db:monster:echo_berserker` 的完整数值页（最后编辑 2026/08/28）。**本轮第一次直连成功**——前几轮从未尝试该站，这是 6 轮 SKIP 的直接原因。
- **来源 B（Editorial）**: MKAU Gaming「SpiritVale Dark Fortress Guide - How To Reach And Farm The Level 150 Map」。独立称其为「level 150 map」、分裂上下两层、列 7 只 Lv 155 Echo Boss 与「三色水晶 100% from Echo bosses」。**与来源 A 在 Boss 等级（155）与水晶结构上完全吻合**。正文复检 403，仅取索引摘要，已在站内 `sources` 如实标注。

→ **触发条件达成**，写 Dark Fortress 深度指南。

---

## 一、今日采集（2026-09-17 实际执行）——通道状态如实登记

| 通道 | 状态 | 明细 |
|------|------|------|
| Steam 评测 API（3767850） | ✅ 可用 | `json=1&filter=recent&num_per_page=100&language=english&purchase_type=all` 全量翻页至 cursor 耗尽，取 **1,917 条英文评测**（2026-07-15 → 2026-09-16；负 738 / 正 1,179）。API 自身默认英文 summary 报 1,617 条、Mixed、948 正 / 669 负 —— 两者口径不同，**本报告以实取 1,917 条为语料面，不等于「100% 全语言」**。 |
| 官方公告 —— app **3767850** | ✅ 可用 | `ISteamNews/GetNewsForApp/v2?appid=3767850&count=100&maxlength=0` → **30 篇**全文，最新 **[0.31.0] Dark Fortress（8/25）**，其上无 9 月补丁；最新一篇为 **9/10「Help us test in PTR version!」**（Advanced Artifacts + Grimoires 进 PTR）。 |
| 官方公告 —— app **3918510**（Playtest/Demo 独立 app） | ✅ 可用 | 同 API → **54 篇**全文，覆盖 2025-08-08 → 2026-06-12（0.1.4 起至 0.18.0）。**检索面合计 84 篇 = 3767850 ×30 + 3918510 ×54**，两个 appid 均已查，无「假零命中」。 |
| JP Wiki（spiritvalewiki.masherhouse.com） | ✅ 可用 | `_export/raw/` 直取纯文本：`area:dark_fortress` / `area:dark_manor` / `db:monster:echo_berserker` / `db:armor:shield:duskbulwark` / `misc:update:0_31_0` / `db:monster:start`（271 行怪物总表）。 |
| WebSearch | ✅ 可用 | 多组定向检索，命中 MKAU 等。 |
| Reddit | ❌ 不可用 | 无活跃 subreddit（延续 9/3 起结论）；`opencli reddit` 仍 AUTH_REQUIRED。 |
| Steam 讨论区 | ❌ 不可用 | 反爬返回 0 字节。 |
| spiritvaledb.com（第三方数据库） | ❌ 不可用 | Vercel Security Checkpoint，HTTP 429 + JS 挑战，无法直取。 |
| MKAU Gaming 正文 | ⚠️ 部分 | 站点正文 HTTP 403（Cloudflare 拦截，换 UA 亦失败），**仅能用索引摘要**，已在 sources 标注。 |
| r.jina.ai 代理 | ❌ 不可用 | 连接失败（HTTP 000）。 |

---

## 二、选题（四条件逐条对照）

| 条件 | 证据 |
|------|------|
| ① 高频 | **≥3 独立 Steam 评测**（不同作者、不同日期）指向同一件事：2026-08-05（481h，正面）「Max level 150」；2026-08-17（119h）「leveled a wizard to 143」；2026-08-19（0h）「went pretty end game till level 150 was farming」；**2026-09-06（1,358h，正面）「the only end game content is Endless Tower and boss hunts on the new level 150 map… the grind to level 150 — after that, [nothing]」**；2026-09-12「the Level 150 map」。**玩家口径的「level 150 map」= Dark Fortress**（8/25 为上月唯一新图，9/16 评测亦提「the new maps last month」）。 |
| ② 具体 | 选题 = 「Dark Fortress 是什么 / 怎么打 / 掉什么」，非泛论。 |
| ③ 站内未覆盖 | 44 篇现有攻略**无任何一篇以 Dark Fortress 为题**。全站 grep：`Duskbreaker` 等 8 件 Dusk 武器仅出现在 `updates-patch-notes` 的 0.31.0 变更表（逐条效果），**无出处、无怪物、无掉落、无地图信息**；`Dark Manor` 全站 **0 命中**；`Wing Ears` / `Echo Master` / `Gravion/Lunaris/Vulkanite Crystal` 全站 **0 命中**。`endgame-guide` / `echoing-spire-endgame-guide` / `dungeon-guide` 均**未提及** Dark Fortress。 |
| ④ 可溯源不编造 | 全部数值来自 JP Wiki 具名页面（含最后编辑日期）或官方 0.31.0 公告；单源内容逐条标 `[Unconfirmed]`。 |

**自噬检查（对照 44 篇 slug 逐条比对）**：
- 与 `account-ban-appeal-guide`（执法簇 / support-ticket / RMT 误判清单）**零重叠** —— 本轮**刻意避开**了「账号 restriction / trade lock」这一高频抱怨簇（8/25 有 8 条文本高度雷同的评测疑似模板灌水，且与既有页同属执法簇 + 同申诉通道 = 自噬红线）。
- 与 `trading-market-guide`（交易簇）零重叠。
- 与 `updates-patch-notes`（时间线变更日志）**意图不同**：新页是「区域/掉落/打法」参考页，Dusk 武器逐条 per-refine 效果**不重复**，改为外链指向该页。
- 与 `endgame-guide` / `echoing-spire-endgame-guide` 为**并列关系**（不同区域/系统），intro 不可互换。

---

## 三、产出物

| 项 | 值 |
|----|-----|
| 文件 | `spiritvalewiki/content/guides/dark-fortress-guide.md` |
| slug | `dark-fortress-guide` |
| title | SpiritVale Dark Fortress Guide — Level 150 Endgame Map, Echo Bosses & Dusk Gear Drops |
| 正文词数 | 1,636（正文含 4 张速查表；纯散文 1,428） |
| 站内攻略数 | 44 → **45** |
| 依据来源数 | **6 条 sources**（Official ×2 / Community ×3 / Editorial ×1）+ 评测语料 1 条；其中 ≥2 独立非官方来源互相佐证 |
| lib/guides.ts | **未改动**（按主 Agent 9/17 更正：该文件 `readdirSync` 动态扫描，无需注册） |
| build exit code | **0**（`✓ Compiled successfully`，58 静态页，`● /guides/dark-fortress-guide` 列出） |
| 产物级验证 | `.next/server/app/guides/dark-fortress-guide.html` 74.4K，`Duskbreaker` ×4 / `Echo Berserker Master` ×2 / `Gravion Crystal` ×4 / `Duskbulwark` ×10 |
| 部署 | `./deploy-wiki-site.sh spiritvalewiki`（**未用裸 `vercel --prod`**）。共部署 **2 次**：第 1 次 `dpl_B276CZ84y2ndVswEnuux48UbZD1Y` 后自查发现 sources 块残留 4 个日文字符（JP Wiki 原文引用 `職人NPC あり`），清除 CJK 并重建（exit 0）后第 2 次部署 **`dpl_9VCxA6CRen2eotAP77iHkjn7bsHp`**（target=production，status=Ready） |
| alias 校验 | `vercel inspect` 明确列出 `Aliases: https://spiritvalewiki.vercel.app` 指向**第 2 次**新部署 ✔（脚本自身打印 `alias → 未知`，已用 `vercel inspect` 独立确认为**已指向**，非失败） |
| 线上验证（`curl --resolve spiritvalewiki.vercel.app:443:216.198.79.67`） | `/guides/dark-fortress-guide` **HTTP 200 / 76,454 bytes**；`/guides` 200 / 131,080；`/` 200 / 44,808；`/sitemap.xml` 200 / 9,665 |
| 线上内容级验证 | 新页命中 `Duskbreaker` ×4、`Echo Berserker Master` ×2、`Echo Paladin Master` ×4、`Gravion Crystal` ×4、`Duskbulwark` ×10、`Unconfirmed` 标记 ×12、**CJK 0**；`sitemap.xml` 含 `dark-fortress-guide` ×1；`/guides` 索引含 ×1 |
| DNS 备注 | 本机 DNS 返回 `216.198.79.3 / 64.29.17.3`，公共解析（8.8.8.8 / 1.1.1.1）一致返回 `216.198.79.67 / 64.29.17.67` —— **确证本机投毒**，全程用公共解析 IP 验证 |

---

## 四、新页合规处置（防编造，逐条登记）

| 断言 | 处置 |
|------|------|
| 区域等级带 | JP Wiki 记 **150 - 150**；MKAU 记 **146-150**。**两个口径同时写出**并标 `[Unconfirmed]`，不择一。 |
| Echo Master Boss 等级 155 | JP Wiki + MKAU **两独立源一致** → 可写成事实。 |
| 怪物名单/属性/有效属性 | 全表来自 JP Wiki 逐怪页；MKAU 名单与属性一致但用 `Umbral` 前缀、等级 146-150 → 差异**明写在正文**。 |
| 掉落率（Dusk 0.25%/10%、水晶 0.5%/100%、Wing Ears 0.1% 等） | 全部标注为**社区数据库数值**；页内 honesty note + 来源条明写「不是官方数据」，末尾再要求「以自己的击杀数复核」。 |
| Echo Berserker 数值（HP 360,000 / ATK 5,937 / MATK 2,422 / DEF 30 / MDEF 15） | 标为 JP Wiki 单页数据，括号给出「For scale」，并归入「所有数值均为社区数据」的总口径。 |
| Duskveil vs Duskbulwark 命名 | 官方 0.31.0 列 **Duskveil**（未标类型，效果「15% 伤害延后 3 秒」）；JP Wiki 记 **Duskbulwark**（盾，需 Lv130，**效果文字与官方逐字对应**，来源 Echo Paladin）。**效果吻合、名称不符 → 标 `[Unconfirmed]`，不合并、不择一**。 |
| Boss 重生 1 小时 | 仅 MKAU 单源 → `[Unconfirmed]`。 |
| 通关下层才能进上层 | 仅 MKAU 单源 → `[Unconfirmed]`。 |
| 等级上限冲突 | 站内 `faq-content.md` 写「Base Level cap: 99」，而 JP Wiki 区域数据（Lv145 / Lv150）与 ≥5 条玩家评测（Lv143/150）指向 100+。**本轮按任务要求「只记录不处理」——未改 faq-content**；新页在「Could Not Confirm」中如实点出该冲突并劝读者自查角色面板。 |
| MKAU 独有且疑似内容农场特征的数据 | 「42 个区域掉落 / 107 个区域掉落 / difficulty 25 / density 1」等**一律未采用**（单源 + 无法复核正文 + 与其自身叙述矛盾：既称「7 只 Echo Boss」又称「三只 Echo Boss」）。 |

**反向证据排查**：新页未使用任何「玩家要求加入」型证据当作存在证据。

---

## 五、待人工处理事项

1. **`updates-patch-notes.md` 第 50 行的陈述已失效**（本页 44+1 篇中唯一需要跟进的既有内容）：
   原文写「Because no independent third-party guide or wiki had covered 0.31.0 **as of September 6, 2026**, treat the per-refine specifics as developer-published but not yet community-corroborated」。
   现状：JP Wiki 的 0.31.0 条目戳记 **2026/08/25**、`db:monster:echo_berserker` 最后编辑 **2026/08/28**，MKAU 亦已覆盖 → **「无第三方覆盖」不再成立**。该句有日期限定（「as of September 6」），严格讲未造假，但**已被新证据推翻**，建议主 Agent 决定是否由合规审计员改口径（本轮未动，避免越界）。
2. **`faq-content.md` 等级上限「99」的裁决** —— 见上表。属既有 P0 挂起线索，**本轮仍未处理**（任务指定「只记录不处理，转 QA deep」）。
3. **`dungeon-guide.md` 区域名与 JP Wiki 271 行怪物总表对不上**（本轮顺带发现，**未处理、未上报为确证**）：站内提到 `Sunken Hollow Depths` / `Frostpine Cavern` / `Golem Core`，而 JP Wiki 的区域总表只有 `Sunken Depths`，**无 `Frostpine Cavern`**。这可能是命名口径差异，也可能是站内编造残留 —— **证据不足以裁定**（JP Wiki 亦可能滞后/漏项，按 Profile 18 教训不得把「聚合站缺某条目」判为「冲突」）。**建议转 QA deep 专项**。
4. **MKAU Gaming 是否可继续作为本站来源** —— 其正文长期 403、数据内部自相矛盾（7 只 vs 3 只 Echo Boss）、且与 JP Wiki 在怪物前缀与等级上分歧。本轮仅将其用作**交叉佐证**并在 sources 中降级说明。建议人工定调是否列入「不采信名单」。

---

## 六、已知挂起线索（只记录不处理）

- **等级上限 99 vs 100+**：自 9/11 起挂起，本轮获得新证据（JP Wiki 区域数据 Lv145-150 + Steam 评测 Lv143/150 多处），但**仍未裁决**，转 QA deep。
- 其余 9/11、9/16 报告中的挂起项本轮未复核，状态不变。

---

## 七、本轮未做的事（边界声明）

- 未修改 `.agent/expand-daily.json`。
- 未 `git add` / `commit` / `push`（按任务 MUST NOT）。
- 未改动 `lib/guides.ts`（按主 Agent 更正指令）。
- 未改动 `faq-content.md` / `updates-patch-notes.md` / `dungeon-guide.md`（均为待人工决定项）。
- 未触碰本任务范围外的其他站点。

> **无关文件声明**：`git status` 中另有两个 untracked 文件不属本轮产物 —— `grainrotwiki/content/guides/spark-mode-guide.md` 与 `tearsofmetalwiki/content/guides/visual-clarity-guide.md`，系**同日其他站点的并发 Agent** 所留。本轮**未读取、未修改、未暂存**，仅供主 Agent 归属时排除。
