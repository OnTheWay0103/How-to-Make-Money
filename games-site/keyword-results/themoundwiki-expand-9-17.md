# The Mound: Omen of Cthulhu — 玩家反馈分析与内容扩充报告

> 任务编号: EXPAND-9/17-themoundwiki
> 模式: deep | 日期: 2026-09-17
> 站点: `themoundwiki/` | Steam appid: **2569760**
> 结论: **PRODUCED** — 新增 1 篇 `inventory-management-guide`

---

## 1. 采集通道状态（如实）

| 通道 | 端点 | 状态 | 覆盖 |
|------|------|------|------|
| Steam 评测 API | `store.steampowered.com/appreviews/2569760?json=1` | ✅ HTTP 200 | **全量翻页**：26 页 + cursor 结束，2,679 条去重（Steam 报告英语池 2,680 条）→ **≈100%** |
| 官方公告 hub | `api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2569760` | ✅ HTTP 200 | **39 篇全量**（appid 仅 1 个；已确认无 Playtest/Demo 独立 appid） |
| Steam 商店页 | `store.steampowered.com/app/2569760/?l=english` | ✅ HTTP 200（需 age-gate cookie） | 正文全文 |
| 官方公告可读链 | `store.steampowered.com/news/app/2569760/view/<id>` | ✅ 5/5 目标链接均 HTTP 200 | 引用逐条验证可访问 |
| Reddit | — | ⚠️ 不可用（本机限制），未使用，未以「无数据」冒充 | — |
| Steam 讨论区 | — | ⚠️ 工具不可读，未使用 | — |

**English 池口径**：Steam 报告 1,873 好评 / 807 差评 / 2,680 总数（**差评率 30.1%**，标签 Mixed）。

---

## 2. 主题聚类（对 2,679 条全量评测做正则聚类，按差评数排序）

| 主题 | 命中总数 | 其中差评 | 站内覆盖 |
|------|--------:|--------:|---------|
| 战斗手感差 / 无闪避格挡跳 | 470 | 226 | ✅ combat-survival-guide |
| 性能 / 优化 | 440 | 163 | ✅ performance-fps-fix-guide |
| 价格 / 退款 | 289 | 162 | ✅ price-platforms |
| 进度 / 无 meta 成长 | 174 | 78 | ✅ progression-system-guide |
| 崩溃 / 卡死 | 129 | 77 | ✅ 已在 3 篇覆盖 |
| 牛车行为 | 154 | 74 | ✅ ox-cart-guide |
| 难度 / 平衡 | 195 | 73 | ✅ nightmare-mode / solo-guide |
| 幻觉 / 理智 | 321 | 70 | ✅ sanity-guide / isolation-guide |
| 重复 / 内容量 | 132 | 58 | ⚠️ 部分（game-length-guide） |
| 语音 | 184 | 52 | ✅ voice-chat-fix-guide |
| 网络延迟 | 74 | 46 | ✅ multiplayer-connection-fix-guide |
| 武器耐久 | 86 | 45 | ✅ weapon-durability-repair-guide |
| 「什么都没解释」 | 136 | 45 | ✅ beginner-guide |
| 匹配 / 单人 | 217 | 43 | ✅ solo-guide / coop-strategy-guide |
| **背包 / 快捷栏管理** | **136** | **68** | ❌ **无任何覆盖** ← 本轮选题 |

---

## 3. 缺口对比表（官方系统清单 × 站内覆盖）

| 官方明说的系统 | 来源 | 站内是否有专文 |
|----------------|------|:--:|
| 契约 / 牛车 / 理智（疯狂系统） | 商店页 | ✅ |
| 空间化语音 | 商店页 + 1.05 | ✅ |
| 堡垒日志解锁新出发点 | 商店页 | ⚠️ 仅 1 行表格（maps-locations-guide:195） |
| Command Wheel 2.0（1.04） | 公告 | ✅ ox-cart-guide |
| 珠宝盒 / 圣玫瑰念珠（1.04） | 公告 | ⚠️ 仅列于 updates-patch-notes（社区 0 命中，未达 ≥3 源） |
| teleport to safety（1.03） | 公告 | ⚠️ 仅列于 updates-patch-notes |
| **Inventory Management（1.01 + 1.03 两次实装）** | **公告 ×4** | ❌ **完全无覆盖** |

判定依据：`hotbar` 全站仅命中 1 处（updates-patch-notes 的变更列表）；`reorder` 0 处；`organize` 1 处。40 篇中无一篇以背包/快捷栏管理为主题。

---

## 4. 本轮选题与四条件核验

**选题：《The Mound Inventory Management Guide — How to Reorganise Your Hotbar and Items》**

| 条件 | 核验 |
|------|------|
| ① 高频（≥3 独立来源） | **官方 4 篇**（Jul 15 / Jul 17 / Patch 1.01 / Patch 1.03）+ **社区 7 条独立评测**（up 22/18/5/2/2/1/1） |
| ② 具体 | 是 — 鼠标 vs 手柄两条路径、牛车交互、共享仓库、槽位自动分配 |
| ③ 站内未覆盖 | 是（见 §3，grep 三重验证） |
| ④ 可溯源不编造 | 是 — 全部官方原文逐字引用 + 公告 URL 逐个 200 验证；唯一推测项标 `[Unconfirmed]` |

**关键证据链（官方原文）**
- Jul 15「What's new since the demo?」：*"Multiple players can now interact with the ox-wagon inventory simultaneously."*
- Jul 17「Test next week's patch on a Beta Branch」列为待办：*"Inventory Management (coming next patch for keyboard & mouse. Controller support to follow in a later update)"*
- Patch 1.01：*"Ability to organise items in your own inventory with a mouse during interactions with the wagon added"*
- Patch 1.03：*"Players can reorganise their hotbar inventory with a gamepad."*

开发者在 1 个月内按承诺顺序（键鼠→手柄）交付，是本作少见的「具体抱怨→明确补丁」闭环，叙事价值高于普通 QoL 条目。

**未采用候选（逐条否决）**
| 候选 | 否决理由 |
|------|---------|
| 格挡/闪避/弹反专文 | 与 combat-survival-guide 的 Blocking/Parrying 段自噬 |
| 玩家无跳跃 / 卡住 | 证据异构（多为 bug 报告），且 controls-settings-guide 是天然归属页 |
| 圣玫瑰念珠 / 珠宝盒 | 社区 0 命中，仅官方单通道 → 未达 ① |
| Day-1 DLC | 全量仅 36 条命中 / 13 差评，未达 ① |
| 数据收集 / EULA（107 赞） | 全量仅 3 条命中，未达 ① |
| 任务计时器 / 时限 | extraction-guide 已完整覆盖 |

---

## 5. 产出与部署证据

| 项 | 值 |
|----|----|
| 文件 | `themoundwiki/content/guides/inventory-management-guide.md` |
| slug | `inventory-management-guide` |
| 词数 | 正文 1,195 词（含来源/相关页全文 1,621 词） |
| `lib/guides.ts` | **未改动**（该文件目录扫描动态加载，无需注册；已 `git diff` 确认干净） |
| `pnpm build` | **exit 0**，`✓ Compiled successfully`，路由 `● /guides/inventory-management-guide` 已预渲染 |
| 构建产物校验 | `.next/server/app/guides/inventory-management-guide.html` 67,926 bytes；3 张 `<table>`；`<td>-------</td>` 0 处 |
| sitemap 产物 | `.next/server/app/sitemap.xml.body` 含新 slug ✅ |
| 部署方式 | `./deploy-wiki-site.sh themoundwiki`（**未**单独跑裸 `vercel --prod`） |
| 部署 ID | `dpl_4F4np4Jx4WGGfozm1KUoFtA2C4h9`，`target=production`，`status=Ready` |
| **alias 校验** | 脚本打印 `alias → 未知`（脚本解析局限，**非**失败告警）。已用 `vercel inspect` 独立复核：该部署 `Aliases` 列表**含 `https://themoundwiki.vercel.app`** → 生产 alias 指向本次新部署 ✅ |
| 线上验证 IP | DNS 现已解析到真实 Vercel IP（`64.29.17.131` / `216.198.79.131`），**未**观测到 `157.240.7.5` 投毒；仍按要求用 `curl --resolve` 确定性验证 |

**线上验证（`curl --resolve themoundwiki.vercel.app:443:<真实IP>`，两个 IP 结果一致）**

| 路径 | HTTP | 字节 |
|------|:--:|-----:|
| `/guides/inventory-management-guide`（新页） | **200** | **68,466** |
| `/` | 200 | 46,234 |
| `/guides`（索引） | 200 | 125,537 |
| `/sitemap.xml` | 200 | 8,919（含新 slug ✅） |

**可发现性验证（产物级 / 线上，非孤儿）**：`/guides` 索引含新页链接（41 个唯一 guide 链接），`sitemap.xml` 命中 1 次。线上新页正文探针：`Inventory Management` ×16、`backfills holes` ×2（本文独有短语）、`gamepad` ×6 → **确认本次内容已上线**。

---

## 6. 待人工处理事项

- [ ] 无阻塞项。本轮无需人工介入。
- [ ] （可选）`STATS-游戏站点统计.md` 的 The Mound 攻略数 40 → 41 未更新（不在本任务范围，未改动）。
- [ ] 未 `git add` / `commit` / `push`（按 MUST NOT 要求）。

---

## 7. 已知 P0 线索（**只记录不处理**，转 QA deep）

> 以下均为本轮采集副产品，**未做任何修改**。

**P0-①（沿用上轮）** 武器清单站内互相矛盾：`loadout-guide.md:51` vs `content/home-content.md:74` — Medallion 分类错误、torch 缺失。

**P0-②（沿用上轮）** `characters-classes.md` 进度列表中 `Perks`、`Logbook` 两条断言证据质量与已删的 Expedition Rank 同级。

**P0-③（本轮新增 — 建议升级为 deep 必查项）** **玩家侧不存在的战斗机制被写成确定事实**，扩散面 ≥3 篇：

| 断言 | 站内位置 | 官方语料核验 |
|------|---------|-------------|
| 玩家可 **Parry**（含 ~200ms 窗口、20 Sanity 伤害、双倍暴击） | `combat-survival-guide.md`（## Parrying 全节）；另 `boss-weakness-drops-chart` / `loadout-guide` / `controls-settings-guide` / `solo-guide` / `enemy-bestiary` / `perks-guide` 共 7 文件 | 全 39 篇公告中 `parry` **仅 1 次命中**，且是 **Y'm-bhi 敌人**能力(*"They can parry melee attacks, sometimes disarming players"*)，非玩家能力 |
| 玩家可 **Dodge Roll**（含 i-frame ~300ms/200ms、深水无 i-frame） | `combat-survival-guide.md`（## Dodging 全节）；共 4 文件 | 全 39 篇公告 `dodge` **0 命中**（评测 124 条提及，压倒性语境为 *"no dodge"*） |
| **Jump 键位** | `controls-settings-guide.md:63`「Jump \| Space」、`:113`「Jump \| Cross (X)」、`:140`「Jump \| A」；`loadout-guide.md:299` 表头含「Jump Height」列 | 全 39 篇公告 `jump` 唯一命中是 *"jumpscares"*；**36 条独立评测**明确「no jump / can't jump」 |
| 精确 Stamina 数值表（轻击 10% / 重击 30% / 格挡 15% / 弹反 25% / 翻滚 20% / 冲刺 5%/s） | `combat-survival-guide.md` | 官方**从未**发布任何 stamina 数值；属 §「免责句不可漂白精确数值」同类 |

**官方实际有的**只有：Patch 1.02 *"New block function (Q on Keyboard or RB/R1 on controller)"* + Patch 1.03 *"Added a minor stun to enemies when they are blocked, improving the blocking ability."* —— 即**格挡为真、弹反/翻滚为无源、跳跃为反向证据**。

⚠️ 按 QA Profile「模板层扩散检查」，处置时 MUST grep 全站命中面（上表已给出文件数）并**删除**无依据的精确数值，MUST NOT 改通名保留。
⚠️ 注意：`combat-survival-guide.md` 的战斗力叙述是站内多篇的引用源（boss-weakness-drops-chart / loadout-guide / solo-guide / perks-guide 均引其 Parry），修正需一次改齐，避免部分替换造成站内新矛盾（Profile 04 L41 教训）。
