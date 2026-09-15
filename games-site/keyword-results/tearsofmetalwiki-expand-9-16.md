# TEARS OF METAL 内容扩充记录 — 9/16

> 任务编号：`EXPAND-2026-09-16-tearsofmetal`
> 站点：`tearsofmetalwiki`（Tears of Metal，Steam appid **1913120**，Paper Cult，EA 上线 2026-07-22）
> 执行时间：2026-09-16
> 上一轮：9/13（护符 Charms 指南），再上轮 9/11（SKIP + P0 校准），9/12（coop-join-failures-guide）
> 结论：**EXPANDED** — 新增 `barracks-statues-guide`（1496 词）+ P0 两项闭环

---

## 一、触发点：两条采集路径 MUST 双跑，本轮双跑结果不同

任务书强制要求同时跑 ① 抱怨驱动 与 ② 系统盘点驱动，且**反馈渠道可用性 MUST 当轮实测**（MUST NOT 继承旧结论）。

| 路径 | 本轮结果 | 判定 |
|------|----------|------|
| ① 抱怨驱动 | 收敛到**自噬**（所有抱怨簇都已有页面） | ❌ 否决 |
| ② 系统盘点驱动 | 命中**全站零覆盖的完整系统层** | ✅ 采纳 |

**这正是计划书警告的模式**：只跑 ① 会得出 SKIP，而实际上站内有整块官方明说的系统没写。

---

## 二、⚠️ 补丁史 MUST 重测 —— 老判断的再确认（本轮重点）

> 规则来源：`.agent/build-history.json` build #66（9/12）——「长期认为『Tears of Metal 9 月无补丁』是**错的**」，教训条目写明「SKIP 结论 MUST 每轮重新核验其前提」。

**本轮实测（2026-09-16，官方 ISteamNews，appid 1913120）：**

| 项 | 结果 |
|----|------|
| 接口 | `api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1913120` |
| HTTP | **200**（首次 `maxlength=0` 与 `maxlength=20000` 均 exit 28 超时；改用 `for i in 1 2 3` 重试循环后第 1 次即成功） |
| 字节 | count=4 → **17,129 B**；count=25 → **60,150 B** |
| 最新公告 | **2026-09-08「📜 New Patch - Big Bug Fixing Pass」**（未公布版本号） |
| 9/8 → 9/16 是否有新补丁 | **无**。9/8 仍是最新补丁，间隔已达 8 天 |

**结论：9/12 的推翻结论成立且仍然成立。**本轮新增信息是「9/8 之后到 9/16 无新补丁」这个区间事实。9/8 补丁正文被本轮新指南直接引用（Companion x3 前置条件放宽）。

**平台事实（9/11 修正，未回退）：** 游戏**不是** Steam PC 独占 —— 7/22 EA 同步上线 **Steam + Microsoft Store + PC Game Pass**，Steam ↔ Microsoft Store 可跨平台联机；仅 **Xbox Series X|S 主机版**未发布（2026 年稍后）。本轮所有涉及平台的措辞均按此写。

---

## 三、路径 ①：抱怨驱动采集（实采渠道 + 实测可用性）

| 渠道 | 实测状态 | 采集方式 | 可用性 |
|------|----------|----------|--------|
| Steam 评测（英文） | **可用** | appreviews API：100 条（32 负），总评 Very Positive（1545/181/1726） | ✅ 当轮实测可用 |
| Steam 官方公告 ISteamNews | **可用**（需重试） | 见第二节 | ✅ 当轮实测可用 |
| Steam 社区讨论 | **HTTP=000（直连抓不到）** | 退回 WebSearch 索引摘要 | ⚠️ 记为不可用渠道（未把索引摘要当"已读原文"） |
| Reddit | 可用（经搜索索引） | WebSearch | ✅ |
| 媒体评测 | 部分可用 | Kotaku / Smashpad / 见下 | ⚠️ gameshorizon.com **HTTP 503**、thegameswiki.com **HTTP 429** |

**抱怨簇聚类（100 条英文评测）：**

| 抱怨簇 | 频次感受 | 已有覆盖页 | 判定 |
|--------|----------|------------|------|
| 治疗稀缺/昂贵 | 最高频 | `healing-guide` | 已覆盖 → 自噬 |
| 刷取/元进度节奏 | 高频 | `progression-walkthrough`, `village-upgrade-guide` | 已覆盖 → 自噬 |
| 格挡/弹反手感 | 高频 | `beginner-guide`, `best-builds` | 已覆盖 → 自噬 |
| 无中途存档 | 中频 | `save-system-guide` | 已覆盖 → 自噬 |
| Boss 重复度 | 中频 | `boss-guide` | 已覆盖 → 自噬 |
| 难度指数上升 | 中频 | `difficulty-guide` | 已覆盖 → 自噬 |
| FPS/卡顿 | 中频 | 属性能问题，非内容 | 不写 |
| **军队侧永久升级无处可查** | 中频但**明确指向一个空白系统** | **无** | ✅ **转路径 ②** |

**路径 ① 判定：`MUST NOT` 自噬 —— 全部否决。**

---

## 四、路径 ②：系统盘点驱动（官方明说 × 站内零覆盖）

**方法：** 官方商店页 + 官方公告系统清单 × 现有 slug 覆盖 grep。

**站内覆盖 grep 实测（`content/guides/` + `app/`）：**

| 关键词 | grep 命中 | 结论 |
|--------|-----------|------|
| `Barracks` | **0** | 零覆盖 |
| `Statue`（作为货币） | **0** | 零覆盖 |
| `Moniker` | **0** | 零覆盖 |
| `War Preparation` | **0** | 零覆盖 |
| `Commander` | 仅 `boss-guide` / `patch-notes` 顺带提 | 无系统页 |
| `Companion`（作为槽位/兵种体系） | `battalion-companion-guide` 讲了 in-run 侧 | 无 between-run 侧 |

**官方第一方证据（自有补丁内容，无需第三方佐证）：**

| 日期 | 官方原文 | 证明什么 |
|------|----------|----------|
| 2026-07-24 v0.8.57278 | *"More Statue Region rewards, and increased quantity."* | Statue 是**独立奖励池**，从 Statue Region 产出 |
| 2026-07-24 v0.8.57278 | *"Improved Ally Command damage projections in the Army selection screen."* / *"Fixed the Archers' Volley Ally Command…"* | Army Selection 界面存在；**Archers' Volley** 是官方兵种/指令名 |
| 2026-08-01 v0.11.57863 | *"Added clearer Army Command visuals to the War Preparation and Army Selection screens."* | **War Preparation 界面**存在 |
| 2026-08-01 v0.11.57863 | *"Small Burning Statues that reduce Threat now cost one Dragonstone instead of two."* | ⚠️ 命名陷阱：这是**地图物件**，不是 Statue 货币 |
| 2026-08-13 v0.12.58540 | *"Aodh, the Vigil, an old scholar hauling a book heavier than the armor of most men…"* | 官方**点名**的唯一 Companion |
| **2026-09-08**（最新） | *"The Companion x3 Barracks upgrade now only requires Companion x2, rather than also requiring an upgrade from the previous row."* | **Barracks** 有编号分级的 Companion 升级 + 行前置条件 |

**第三方/社区佐证（≥3 独立来源，计在玩家问题上）：**

1. **Whisper of the House** — `whisperofthehouse.com/tears-of-metal/village-upgrades`（最后更新 7/24）— 早期 Barracks 选项（Recruitment Drive / Military Advantage / 额外 Companion / 三兵种 +20% Ally Command Damage）；区分 Triskeles（英雄）与 Statues（军队）
2. **GamesHorizon** — `gameshorizon.com`（**9/16 实测 HTTP 503**，经搜索索引）— Barracks 需 **2 Statues** 解锁；Statues 死亡保留；雕像图标地块产出
3. **TheGamesWiki** — `thegameswiki.com/tears-of-metal/wiki/companions`（**9/16 实测 HTTP 429**）— Companion 与 Commander 是不同体系、各自独立槽位（截图显示 "0 of 2"）；剩余槽位开放方式官方未公布
4. **2UpSkill** — `2upskill.com`（7/22）— 区分程序化 Ally 与手工 Unique Companion
5. **Steam 社区讨论** — "How do soldiers monikers and troop recruitment work?" / "Dismiss Ally" — Monikers 为战后给现存 ally 选择的永久 buff，会替换旧 Moniker

**独立来源计数：≥3（官方 4 条 + 社区 5 条），满足高频门槛。**

---

## 五、查重：现有 35 slug 全比对

写前先列全 slug（34 存量 + 1 本轮新增前的状态）：

```
barracks-statues-guide(本轮新增)  base-camp-guide              beginner-guide
best-builds                       boss-guide                    bounty-quests-guide
battalion-companion-guide         charms-guide                  co-op-guide
coop-join-failures-guide          corruption-guide              difficulty-guide
emblem-artifact-guide             faq-content                   full-release-guide
healing-guide                     heroes-tier-list              map-regions-guide
patch-notes                       price-guide                   progression-walkthrough
resources-guide                   save-system-guide             settings-guide
siege-guide                       system-requirements-guide     tier-list
tips-and-tricks                   village-upgrade-guide         …
```

**关键查重结论：`village-upgrade-guide` 只覆盖 5 栋建筑（Triskeles / Dragon Stone Shards 体系），完全不含 Barracks / Statue / Commander / Companion 槽位。** 这是**不完整**而非**错误**，故按 scope 注记处理（见第七节），未重写。

**近期已产出，禁止重写（避免自噬）：**
- 9/11 补丁 note 版本表 + roadmap
- 9/12 `coop-join-failures-guide`
- 9/13 Charms 指南

---

## 六、选题：命中

| 候选 | 来源 | 高频 | 具体 | 未覆盖 | 判定 |
|------|------|:--:|:--:|:--:|------|
| **Barracks / Statues / Commanders / Companion 槽位体系** | 官方 9/8 + 8/13 + 8/1 + 7/24 补丁 × 社区 5 源 | ✅ | ✅ | ✅（grep 全 0） | ✅ **采纳** |
| 官方三阶段 EA roadmap（Phase 2 建build/Emblems/元重做，Phase 3 Plague Doctor） | 官方 roadmap | ✅ | ✅ | ❌ | ❌ **否决** — 9/11 已以「计划未落地」否决；本轮**未发现实施证据**，`MUST NOT` 把计划当已上线内容写 |
| 治疗经济深入篇 | Steam 评测高频 | ✅ | ✅ | ❌ | ❌ 自噬（`healing-guide` 已有） |
| 中途存档诉求 | Steam 评测 | ✅ | ✅ | ❌ | ❌ 自噬（`save-system-guide`） |
| Boss 重复度 | Steam 评测 | ✅ | ⚠️ | ❌ | ❌ 自噬（`boss-guide`） |
| 性能/卡顿优化 | Steam 评测 | ✅ | ⚠️ | ❌ | ❌ 非内容向，且无可核验官方数值 |

**采纳 1 篇：`barracks-statues-guide`**

---

## 七、本轮改动（全部在 `tearsofmetalwiki/` 内）

### 1. 新增 `content/guides/barracks-statues-guide.md`（1496 词）

- 标题：`Tears of Metal Barracks & Statues Guide — How to Upgrade Your Army, Commanders and Companions`（How to 问题驱动）
- frontmatter 与既有指南对齐：`category: "Progression"`、`version: "Early Access"`、`updated: "2026-09-16"`、8 keywords、`related` 6 项、`sources` **8 条（4 Official / 3 Community / 1 Editorial）**
- 三档来源带可追溯链接；所有数字有源或带 `[Unconfirmed]`（全文 **7 处** `[Unconfirmed]` 标记）
- 内容骨架：Scope → 双货币拆分表 → Barracks 是什么（引 9/8 官方原文 + 3 条推论）→ 命名陷阱警示 → Commanders/Companions/Allies 三体系对照表 → 官方唯一点名的 Companion（Aodh）→ 英雄优先还是军队优先 → FAQ（含 "Small Burning Statues" 命名陷阱）→ Related Guides → 收尾价格警示

### 2. 双向 Scope 注记（避免自噬，3 处）

| 文件 | 改动 |
|------|------|
| `village-upgrade-guide.md` | Scope 注记：本文只讲 Triskeles / Dragon Stone Shards 的 5 栋建筑，**军队侧**（Barracks / Statue / Commander / Companion 槽位）另见新页；`related` 前置新增新页；Related Guides 列表加新页 |
| `battalion-companion-guide.md` | Scope 注记：本文讲 **in-run** 营队管理；**between-run 军队侧**永久升级另见新页；Related Guides 首位加新页 |
| `barracks-statues-guide.md` | 开头 Scope 反向指回上述两页 |

### 3. P0 校准：村庄升级「共享还是各人独立」矛盾（qa-report §六 #2）

**问题：** `app/page.tsx:20` 写村庄升级 "apply to all"，`app/faq/page.tsx:16` 写 "individual to each player"，两页均线上 200，互相矛盾。

**本轮核查：**
- 官方**无**任何说明（商店页、补丁 note、公告均未定义共享规则）→ **无法用可靠来源裁决**
- 社区证据指向：host 已购升级是共享战役生效的那一套

**处置（按任务书 `MUST NOT` 靠猜选一个）：** 三处全部统一为**诚实标注 `[Unconfirmed]`** 的措辞：

> 战役进度在队员间共享，村庄升级按玩家账号各自购买。**共享战役中生效的是哪一方的升级，官方没有文档说明** —— 社区反馈称是 host 已购的升级 `[Unconfirmed]`。无本地/分屏 co-op。

**⚠️ 第三处（此前未知）：** `content/guides/co-op-guide.md` 也含同一矛盾的旧表述。按 04 Profile「MUST 事实修正时全站 grep 关联引用…一次改齐」，本轮一并改为同一措辞（表格行 + "The Host Advantage" 新增一条 bullet）。

### 4. P0 校准：`base-camp-guide.md` 孤儿页（qa-report §六 #8）

**问题：** 无任何入站链接。

**处置：** 加入真实入站链接（未删除页面）：
- `village-upgrade-guide.md` Related Guides → `[Base Camp Guide: Pre-Run Preparation](/guides/base-camp-guide)`
- `barracks-statues-guide.md` Related Guides → `[Base Camp Guide](/guides/base-camp-guide)`

**验证：入站文件数 0 → 2。**

---

## 八、构建与部署证据

| 项 | 结果 |
|----|------|
| `pnpm install` | exit 0（pnpm 全局 store，站点日常不留 node_modules） |
| `pnpm build` | ✅ 成功，**48 静态页**，TypeScript 通过 |
| 新页预渲染 | ✅ `/guides/barracks-statues-guide` 出现在 SSG 列表（35 条 guide 路径） |
| 内部链接完整性 | ✅ **0 条断链**（脚本扫描全部构建后 HTML 的 `/guides/*` href × 35 slug） |
| 新页构建产物 | 72,437 B；3 `<table>` / 3 `<thead>` / 3 `<tbody>`；垃圾分隔行 `\|---\|` = **0**（8/12 共享组件表分隔符事件回归项） |
| 部署 | `./deploy-wiki-site.sh tearsofmetalwiki`（**全局 vercel 58.9.4**，非 npx） |
| 部署 ID | `dpl_Di8stiPke1c5xiHq6ksMfqYsgcXE` |
| 部署 URL | `https://tearsofmetalwiki-1k7siutqe-zhaoq0103s-projects.vercel.app` |
| 生产别名 | ✅ `https://tearsofmetalwiki.vercel.app` 指向本部署 |

### 线上验证（MUST `--resolve` 真实 IP）

本机 DNS 投毒：`tearsofmetalwiki.vercel.app` → `128.242.245.253`（不可达）。真实 IP 当轮实测：

```
@1.1.1.1 → 216.198.79.3,  64.29.17.3
@8.8.8.8 → 216.198.79.195, 64.29.17.195
本机     → 128.242.245.253  ← 投毒
```

| URL | 4 个真实 IP 结果 |
|-----|------------------|
| `/guides/barracks-statues-guide` | **HTTP=200 / 72,986 B**（四个 IP 完全一致） |
| `/` | HTTP=200 / 56,677 B |
| `/faq` | HTTP=200 / 42,439 B |
| `/guides/co-op-guide` | HTTP=200 / 71,832 B |
| `/guides/village-upgrade-guide` | HTTP=200 / 71,278 B |
| `/guides/battalion-companion-guide` | HTTP=200 / 92,694 B |
| `/guides/base-camp-guide` | HTTP=200 / 50,930 B |
| `/guides` | HTTP=200 / 112,465 B |
| `/sitemap.xml` | HTTP=200 / 7,972 B |

**新页线上内容抽查（全 ✅）：** 标题、9/8 补丁原文引用、"More Statue Region rewards" 引用、Aodh 引用、"+20% Ally Command Damage"、3 张表、7 处 `[Unconfirmed]`、3 条 scope/related 内链、无 CJK 残留、无 EX-Mod 残留。

**P0 线上复验：**

| 页面 | 新措辞 "community reports say the host" | 旧矛盾串 |
|------|:--:|:--:|
| `/` | 4 处 | 0 |
| `/faq` | 3 处 | 0 |
| `/guides/co-op-guide` | 2 处 | 0 |

新页已进入 `/guides` 列表与 `sitemap.xml`（各命中 1 次）。

---

## 九、遗留 / 交主 Agent

### 🔴 高危（编造嫌疑，**本轮未修改，超出任务范围，建议主 Agent 事实清扫**）

`content/guides/battalion-companion-guide.md` 存在**与官方原文直接冲突**的断言：

| 该页断言 | 官方实际 |
|----------|----------|
| 兵种："Pikeman / Grunt / Shield Bearer / Trebuchet Spotter / Blood-Steel Knight" | 官方补丁 note 用 **Infantry / Spearmen / Archers** |
| 5 个具名 Companion："Fergus the Unyielding"、"Morag of the Mist"、"Brochan the Piper"、"Ailsa the Cursed"、"Torcall the Unseen"，并给出**具体解锁条件与技能效果** | 官方**从未**发布 companion 列表；补丁 note 只点名过 **Aodh, the Vigil** |
| 兵种基础 HP / 技能树 / 每级数值 / 招募横幅数量（Act1=3, Act2=4, Act3=2）/ 各 Tent 等级解锁表 | 官方**全无**公布 |

该页虽有一句 "Community-reported section" 免责，但随后给出了**看似精确的数值与解锁路径**，属 AdSense 合规风险等级。**本轮新指南刻意只采用官方兵种名（Infantry/Spearmen/Archers），并在命名警示段落明确指出 Early Access 来源词汇混乱 —— 未与该页正面冲突，但两页并存时读者会发现口径不一。建议主 Agent 优先处理。**

### 🟡 中低

1. `village-upgrade-guide.md` 仅覆盖 5 栋建筑，缺 Barracks / Market / Cartographer —— 按**不完整**（非错误）处理，已加 scope 注记；若后续找到官方建筑全表可补。
2. `gameshorizon.com` 9/16 实测 **HTTP 503**、`thegameswiki.com` **HTTP 429**，均为当轮不可直连；新页 frontmatter 已显式注明 "via search index (the live page returned HTTP 503 on September 16, 2026)"，未冒充已读原文。
3. Steam 社区讨论直连 HTTP=000，本轮只能经 WebSearch 索引取用 —— 记为**渠道不可用**。
4. `content/guides/healing-guide.md:22` 的 CJK 告警经核查为**合法引用**（日语 Steam 评测原文 "回復コストが高すぎる" 带英文翻译与来源链接），非残留。

---

## 十、自检

- [x] 两条路径**都**跑了（① 抱怨 → 自噬否决；② 系统盘点 → 命中）
- [x] 渠道可用性**当轮实测**，未继承旧结论（含 503/429/000 的明确记录）
- [x] 补丁史**重新实测**：9/8 仍是最新，9/8→9/16 无新补丁；9/12 的推翻结论成立
- [x] 平台事实未回退（Steam + Microsoft Store + PC Game Pass，仅 Xbox 主机版未发）
- [x] 写前列出全部 slug，确认非自噬；9/11 / 9/12 / 9/13 近期产出均已避开
- [x] roadmap 未当已上线内容写（Phase 2/3 因无实施证据再次否决）
- [x] 词数 1496（800–1500 区间内）
- [x] 三档来源齐全（Official / Community / Editorial）+ 可追溯链接
- [x] 所有数字有源或 `[Unconfirmed]`（7 处）
- [x] 与既有页面双向 Scope 注记，避免自噬
- [x] P0 两项闭环（#2 三处一次改齐 + #8 孤儿页入站链接）
- [x] `MUST NOT` 清单全遵守：未用 npx vercel、未用 npm install、未用 next/font/google、未改 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md`、未 git commit / push、未动其他站目录
- [x] 未把 HTTP=000 / size=0 记为 PASS（本轮无此项）
- [x] 构建 + 部署 + `--resolve` 线上验证全部留证
