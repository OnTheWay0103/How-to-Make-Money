# QA 报告 — themoundwiki 每日扩充（EXPAND-9/13-themound）

- 日期：2026-09-13
- 站点：`themoundwiki`（The Mound: Omen of Cthulhu，Steam appid **2569760**）
- 模式：quick（本轮变更审查）+ 对抗审查（假设自己写错了）
- 结论：**PASS**（🔴 0 / 🟡 2 项既有缺陷，均非本轮引入）
- 新增：`content/guides/patron-saints-guide.md`（1 篇）
- 附带修正：`content/guides/progress-save-recovery-guide.md`（1 行，事实错误）
- 部署：https://themoundwiki-3k5riezt1-zhaoq0103s-projects.vercel.app （alias: https://themoundwiki.vercel.app，`dpl_5XL5XC1oi8VHtmCxzqgjLefw5XjV`）

---

## 一、选题与四条件核验

### 路径选择：complaint-driven 收敛 → 切 system-inventory-driven（路径②）

本轮先跑**路径①（抱怨驱动）**：拉取 Steam 官方评测 API 全量样本 **631 条独立评测**（4 种 filter × 3 页 + 负面专页，去重），日期跨度 2026-07-15 → 2026-09-12，其中负面 269 / 正面 362。按主题聚类（负面命中数）：

| 主题簇 | 负面数 | 站内覆盖 |
|---|---:|---|
| 近战/战斗手感 | 65 | ✅ `combat-survival-guide`（Blocking/Parrying/Stagger/Whiff） |
| 性能/优化 | 61 | ✅ `performance-fps-fix-guide` |
| 难度尖峰 | 35 | ✅ `contracts-guide`（host scaling）+ `combat-survival` |
| 掉落/奖励 | 33 | ✅ `money-guide` / `extraction-guide` |
| 重复/同一张图 | 31 | 设计问题，非可写缺口 |
| 进度不保留 | 30 | ✅ `progression-system-guide` |
| 联机/加入失败 | 29 | ✅ `multiplayer-connection-fix-guide` |
| 崩溃 | 25 | ✅ `progress-save-recovery-guide` |
| 牛车 AI | 24 | ⚠️ 半覆盖（9/11 已因自噬否决 Command Wheel 2.0） |
| 物品栏/负重 | 20 | ✅ `loadout-guide` / `beginner-loadouts` |
| 语音聊天 | 12 | ✅ `voice-chat-fix-guide`（9/12） |

**结论**：高频抱怨已全部收敛到既有 38 篇，与 9/12 spiritvalewiki 的情形同构。按 Profile 规则「抱怨收敛 ≠ 没有缺口，此时 MUST 切换到②」，本轮改走**路径②**。

### 路径②命中：Patron Saints（守护圣徒）系统 —— 站内整块空白

官方补丁说明中反复出现、但**站内 38 篇零覆盖**的系统：

| 官方原文（Steam news API 逐字） | 补丁 |
|---|---|
| 「Modified the Saints shop so these are no longer bought at the woodshop. **Saints are now equipped for a smaller cost at the ox wagon before an expedition**」 | 1.01（2026-07-21） |
| 已知问题：「**Saints are disappearing after one expedition** unless you restart a lobby」 | 1.01 |
| 「**Reduced Saints blessing costs**」「Fixed Saints not loading after missions (which was introduced in patch 1)」 | 1.02（2026-07-29） |

站内覆盖实测（`grep -ri` 全站 `content/ app/ lib/ components/`）：

| 关键词 | 命中 |
|---|---|
| `patron` | **0** |
| `sacred figure` | **0** |
| `nine guardians` | **0** |
| `saint` | 4 行，且**全部不是系统说明**——3 行是 `updates-patch-notes.md` 的补丁史转述，1 行是 `progress-save-recovery-guide.md` 的**错误描述**（见 3.3） |

### 四条件判定

| 条件 | 判定 | 证据 |
|---|:--:|---|
| **高频（≥3 独立来源）** | ✅ | 官方通道 2（1.01/1.02 公告）+ 编辑/社区 3（GrindNStrat、NerdsChalk、NoobFeed）+ 奖杯站 3（PSNProfiles、TrophiesHunter、VGTimes）。**如实标注**：本条件按「官方明说有、站内无覆盖」的系统计，不是抱怨频率计——与 Profile 路径②一致 |
| **具体** | ✅ | 「如何解锁 + 该带哪个圣徒」有明确答案路径（解锁两步骤 → 装车 → 选祝福） |
| **真缺口** | ✅ | 见上表：`patron`/`sacred figure`/`nine guardians` 全为 0；38 篇无一同主题 |
| **可溯源** | ✅ | 官方逐字 + 社区来源逐条附链；不可核实项标 `[Unconfirmed]`，未量化任何数值 |

---

## 二、Residue 扫描（全站）

| 检查项 | 结果 |
|---|:--|
| 他站游戏名（SpiritVale / Witchspire / Mistfall / Aincrad / Sephiria / Grain Rot / EX-Mod / Mira Isle 等 40+ 词） | ✅ Clean（`content/ app/ lib/ components/` 全目录 grep 无命中） |
| Hugo shortcodes（`{{<` / `{{%`）、他站域名、`/themound/content/guides` 式残留、`localhost:` | ✅ Clean |
| 模板化描述残留（「cooperative PvE extraction horror」等） | N/A —— 本站为正向命中（QA skill 明列例外站点） |
| 虚假工作室残留（`published by NACON`） | ✅ 合法（themoundwiki 例外站点，ACE Team + NACON 与 Steam 商店页一致） |
| 中文标记泄漏（`待确认`/`待验证`） | ✅ Clean —— 新增文件用英文 `[Unconfirmed]` |

---

## 三、内容质量抽样

抽样比例：本轮新增 1 篇 → **100% 全检**。

### 3.1 虚构检测（逐个游戏特有名词独立核验）

| 名词 / 断言 | 核验方式 | 结果 |
|---|---|---|
| Saints 系统存在、在 ox-wagon 装备、有花费 | Steam 官方 news API 1.01/1.02 逐字 | ✅ 官方属实，正文按官方原文引用 |
| 1.01「消失一个远征」bug / 1.02 修复 | 同上 | ✅ 属实 |
| **Nine Guardians** 成就（Woodworker 制作 9 个 Sacred Figures，PS 金杯） | 3 家独立奖杯站交叉（PSNProfiles / TrophiesHunter / VGTimes） | ✅ 属实 |
| Sacred Figures 共 9 个、由 Woodworker 雕刻成圣徒像 | NerdsChalk 原文（WebFetch 200 逐字）+ 奖杯描述「Have the Woodworker craft 9 Sacred Figures」 | ✅ 两通道一致 |
| 9 个圣徒**名称** | GrindNStrat + NerdsChalk 两份独立名单一致；且 9 位均为真实天主教圣人，其传统主保领域与祝福效果一一对应（Barbara→炮兵/火器、Dymphna→精神疾病、Eulalia→雷雨、Sebastian→弓箭、George→士兵、Paschal Baylón→食物） | ✅ 交叉一致，正文标注 **community-documented, not officially published** |
| 9 个祝福**效果** | 主要来自 GrindNStrat 单通道（Dymphna 另有 NoobFeed 第二通道），官方无表 | ⚠️ **已在正文显式降级**：整表标为「community-reported, not officially published」，并写明「ACE Team has not printed an official table」 |
| 一次只能带一个祝福 | GrindNStrat 原文 | ⚠️ 正文标 `community-reported` |
| 花费货币 = Tokens | GrindNStrat 称 Tokens；**官方仅说 "a cost" / "blessing costs"，从不点名货币** | ⚠️ **正文标 `[Unconfirmed]`**，并提示读者以自己 build 的车斗提示为准 |
| Saint Dymphna 祈祷提示、不清除 Sanity 持续下降 | NoobFeed 原文逐字 | ✅ 属实，正文明确写出限制 |

**未做的事（MUST NOT 边界）**：
- **未写任何 Sacred Figure 精确坐标。** NerdsChalk 给的区域名（South Landing / Scarlet Flower Woods / Shambler's Hunting Grounds / Cliffs of Ibara / Wreck of La Favorita 等）与站内 `maps-locations-guide.md` 的区域词表（Isle of Voices / Forest Regions / Catacombs / Sunken Grotto / Shallow Graves / The Hollow Woods / The Deep Warrens / Mansion of Fools / The Mound Interior）**完全对不上**——两套命名无法互相验证，故正文**拒绝转述坐标**，改为说明「社区按区域分头收集」+ 内链到 maps-locations 让读者顺手搜自己已在跑的区域。已在正文写明这一取舍理由。
- **未量化任何数值**：无数值型祝福强度、无 Token 花费数字、无 HP/伤害。
- **未复述 1.04 新增敌人名 / Rosary 珠宝箱 / Command Wheel 2.0**（9/11、9/9 已否决项）。

### 3.2 内链有效性（历史教训：曾出现线上 404）

- frontmatter `related` 5 个 slug：`progression-system-guide` / `sanity-guide` / `trophy-achievement-guide` / `loadout-guide` / `updates-patch-notes` → **5/5 站内存在** ✅
- 正文站内链接去重 7 个目标 → **7/7 存在** ✅，且**线上逐条 200 实测**（见第五节）
- 反向内链：`progress-save-recovery-guide` 线上 HTML 含 `href="/guides/patron-saints-guide"` × 2 ✅
- `/guides` 列表页含新 slug ✅；`/sitemap.xml` 含新 slug ✅

### 3.3 事实一致性（与站内其他页面）

发现并修复 **1 处站内事实错误（既有缺陷，非本轮引入）**：

- `progress-save-recovery-guide.md` L121 原文：「`Saints not loading` in expeditions | Fixed in 1.02 — **Saints allies now appear correctly**」
- **错误**：官方 1.02 原文是「Fixed Saints not loading **after missions**」，指的是**已装备的祝福不加载**，不是「盟友不出现」。官方 1.01 已明确 Saints 是 ox-wagon 上**花钱装备的祝福**（blessing），不是 NPC/盟友。原文把 Saints 误读为盟友。
- 修正：`— equipped Saints blessings now load correctly (see the [Patron Saints Guide](/guides/patron-saints-guide))`

未修改其他任何页面；未触碰 `updates-patch-notes.md`（该文 3 处 Saints 引用均为准确的补丁史转述，与本篇一致）。

### 3.4 自噬审查（内容自噬红线）

| 既有页面 | 既有内容 | 本篇处理 |
|---|---|---|
| `progression-system-guide` | Tokens 来源/花费、永久商店解锁优先级表 | **不重复任何表格**；仅 1 句说明「若 Saints 花费 Tokens，这是少数买**单次效果**的 token 支出」并链出 |
| `sanity-guide` | 幻觉类型、Sanity 机制 | 仅写 Saint Dymphna 一个祝福的**限制**（清当前效果 ≠ 停止下降）并链出，不复述机制 |
| `trophy-achievement-guide` | 奖杯总表、可错过奖杯、Lore/Blueprint 收集 | 只写 Nine Guardians 一行关系与两个坑（需 Woodworker 雕刻 / 不即时弹出）；**顺带发现该页完全未收录 Nine Guardians**（见第六节） |
| `loadout-guide` / `weapons-guide` | 装备槽、武器分类、天气影响 | 仅以「祝福按**武器类别**生效，先确认你的武器属于哪类」1 句链出，不复述武器数据 |
| `maps-locations-guide` | 各区域 POI / 路线 | **刻意不写坐标**（见 3.1），只链出 |
| `updates-patch-notes` | 1.01–1.05 全文变更 | 不复述补丁正文，改以「开发者确认了什么 vs 社区补了什么」的读者视角分层 |

搜索意图独立性：`the mound patron saints` / `the mound sacred figures` / `the mound nine guardians achievement` / `the mound which saint to pick` / `the mound saint dymphna` —— 与「进度系统」「理智机制」「路线地图」「武器配装」均非同一查询意图。**判定：独立搜索意图成立，不构成自噬。**

---

## 四、规格核对

| 项 | 要求 | 实测 |
|---|---|---|
| 词数 | 800–1500 | 正文（`## Sources` 之前）**1,356** 词 ✅（含 Sources/Related 全文 1,743） |
| 标题 | 问题导向 | "The Mound Patron Saints Guide — **How to Unlock** Every Blessing and **Which Saint to Equip**" ✅ |
| frontmatter | 对齐站内现有格式 | title / description / category("Guides") / version("1.0") / updated("2026-09-13") / keywords[7] / related[5] —— 与站内 38 篇同构 ✅ |
| Sources 三层 | Official / Community / Editorial | ✅ 三层齐备，每条带可点击链接 + 1 段 Honesty note |
| `[Unconfirmed]` 标记 | 英文站用英文标记 | ✅ 用于 Token 货币；祝福表整表降级为 community-reported |
| AI 套话 | MUST NOT | ✅ grep 校验（"In the world of" / "Whether you're" / "Remember to" / "dive into" / "delve into" / "it's important to note"）**0 命中** |

---

## 五、构建与部署验证（证据链）

1. **构建**：`pnpm build` → **`✓ Compiled successfully in 144ms`**，**EXIT=0**，52 个静态页（原 51），新增路由 `● /guides/patron-saints-guide` 已预渲染
2. **产物级内容核对**（9/12 教训：源码对了不等于产物对了）
   - `.next/server/app/guides/patron-saints-guide.html` 存在，69,165 bytes
   - 表格分隔行垃圾检测：`grep -c "<td>---"` = **0**（9/12 修复的 `ReactMarkdown.tsx` 表格缺陷未复发）
   - 关键串命中：`Patron Saints` ×7、`Nine Guardians` ×5、官方原文 `Saints are now equipped for a smaller cost at the ox wagon` ×3、`Saint Dymphna` ×5、`Unconfirmed` ×3
   - sitemap 产物 `.next/server/app/sitemap.xml.body` 含新 slug ×1，共 **47** 条 URL
3. **部署**：`vercel --prod --yes`（CLI v58.9.4，`/Users/zhaoq0103/.nvm/versions/node/v24.4.0/bin/vercel`）
   - 新部署 `https://themoundwiki-3k5riezt1-zhaoq0103s-projects.vercel.app`，`readyState: READY`，`target: production`
4. **线上内容级验证**（**非仅首页 200**；DNS 陷阱已验证：`dig @8.8.8.8 themoundwiki.vercel.app +short` → **216.198.79.67**，全程用 `--resolve` 绑定该 IP，HTTP 000/size 0 一律不计 PASS）

| 验证项 | 实测值 |
|---|---|
| `GET /guides/patron-saints-guide` | **HTTP:200 SIZE:69498** ✅ |
| `<title>` 渲染 | `The Mound Patron Saints Guide — How to Unlock Every Blessing and Which Saint to Equip · The Mound Wiki` ✅ |
| 正文关键串（线上 HTML） | `Patron Saints` ×7 / `Nine Guardians` ×5 / `Saint Dymphna` ×5 ✅ |
| `GET /sitemap.xml` | **HTTP:200 SIZE:8550**，含 `patron-saints-guide` ×1，guide URL 39 条（原 38）✅ |
| `GET /guides` 列表页 | **HTTP:200 SIZE:120014**，含新 slug ✅ |
| 出站内链线上可达 | 7/7 全部 **HTTP 200**（progression-system / sanity / trophy-achievement / loadout / updates-patch-notes / weapons / maps-locations）✅ |
| 反向内链 | `/guides/progress-save-recovery-guide` 线上 HTML 含新 slug ×2 ✅ |
| 回归（旧页未坏） | `/` 200·46234 ／ `/guides` 200·120014 ／ `progress-save-recovery-guide` 200·63620 ／ `voice-chat-fix-guide` 200·68962 ／ `updates-patch-notes` 200·68610 ／ `sanity-guide` 200·69208 ✅ |
| 生产 alias 指向本次部署 | `vercel inspect themoundwiki.vercel.app` → id `dpl_5XL5XC1oi8VHtmCxzqgjLefw5XjV`，`target production`，`status Ready`，`created 29s ago` ✅（满足「MUST NOT 只查首页 200」） |

---

## 六、如实上报：本轮发现但**未修**的既有缺陷（🟡，建议主 Agent 裁定）

### 6.1 `content/home-content.md` 是**孤立死文件**（本轮曾改后**已回退**）

指示要求「若存在 home-content.md 之类导航注册机制 → 先确认再照做」。**核实结论：它不是导航注册机制。**

- `grep -rn "home-content" app/ lib/ components/` → **0 命中**。该 md 未被任何代码 import。
- 首页 `app/page.tsx` 用的是**硬编码** `FEATURED_GUIDES` 数组（6 条）与 `FAQ_ITEMS` 数组。
- 因此对该文件「登记新 guide 一行」对渲染**零影响**。本轮已 `git checkout --` 回退，保持最小 diff。
- **给主 Agent 的信号**：该文件 9/6 曾在 P0 批次被编辑（commit `8956007`「home 重复行清理」），说明当时的 Agent 也以为它在线上生效。
- **⚠️ 全网面复核（本条影响面为整个矩阵）**：`grep -rln "home-content" --include="*.ts" --include="*.tsx"` 覆盖全部 42 站 → **0 命中**；有 `content/home-content.md` 的站点 **38 个**。即：**该文件在网络内 100% 是死文件**，任何对它的「登记新 guide 一行」都不会被渲染。
- **9/13 并行批次实证**：同日的 grainrot / sephiria / tearsofmetal 三站扩充（见 `git status`）**均向各自的 `content/home-content.md` 加了行**，均为零渲染影响。
- 若它确实无用，建议单独裁定「归档或接入」；若应生效，是一个独立工单（38 站），不应由每日扩充顺带处理。

### 6.2 🟡 站级 FAQ 与 `characters-classes-guide` **互斥**（既有缺陷，非本轮引入）

- `app/page.tsx` FAQ_ITEMS 与 `content/guides/faq-content.md` 均写：「Do characters have different classes or skills? **No. The four characters are purely cosmetic** — like Left 4 Dead.」
- `content/guides/characters-classes.md` 却给 4 名角色各配了**独有 Trait 与数值**（Alonso「Iron Will — 15% less Sanity damage」、Father Miguel「Divine Protection — healing items 25% more effective」、Catalina「Keen Eyes」、Rodrigo「Berserker Rage — 30% more damage below 50% HP」）。
- **本轮 631 条评测语料支持 FAQ 一侧**：反复出现「Why have the ability to rescue different characters if they are just skins?」、「character selection is entirely pointless with no dialogue between them and **none of them playing any differently from the others**」（≥3 条独立评测）。
- 即 `characters-classes.md` 的 Trait 表与数值**很可能属编造**，且与站级页面直接冲突。**本轮未改动**（超出选题范围，且需先取得可核实来源）。建议列为 P0 单独处理。

### 6.3 🟡 `contracts-guide.md` 对牛车行为的描述可疑

- 原文 L193：「The Ox Cart is a slow-moving vehicle that **follows a fixed path through the map**」。
- 实测评测语料与官方 1.04 公告（「allow you to **stop the cart** and give it instructions. Proximity determines whether or not you use the horn」）均指向牛车**跟随队伍**而非固定路径。另有 ≥8 条独立评测描述牛车跟丢/掉头/跑掉。
- **本轮未改动**（属 9/11 已否决的牛车主题范畴，且需先确认跟随机制的一手来源）。建议列为后续工单。

---

## 七、缺失维度（如实记录，未编造）

| 维度 | 状态 | 说明 |
|---|---|---|
| Reddit | ❌ **不可用** | 与 9/12 同：`reddit.com` 系列 403/ECONNREFUSED，镜像站 000，WebSearch `site:reddit.com` 零结果。**未编造任何 Reddit 内容**，正文 Honesty note 已明示 |
| Steam 社区讨论区 | ❌ **不可用** | `steamcommunity.com` ECONNREFUSED（`/stats/2569760/achievements` → HTTP:000 SIZE:0）。改用 Steam 官方**评测 API**（631 条独立样本，成功）与官方 **news API**（补丁全文，成功） |
| Gamer Guides「Sacred Figures」数据库 | ❌ **不可用（403）** | WebFetch 返回 HTTP 403。**未作为来源使用**，正文 Honesty note 已显式声明 |
| TrophiesHunter 奖杯页 | ❌ 403 | 未作为逐字来源；仅以其在搜索结果中的成就描述作为 3 家奖杯站交叉之一（另两家为 PSNProfiles / VGTimes） |
| 官方圣徒祝福表 | ❌ **不存在** | 官方从未公布；正文已整表降级为 community-reported |

---

## 八、结论

**PASS** —— 🔴 阻断 0；无虚构（不确定项已降级标注，未量化任何数值）；无跨站残留；内链 7/7 有效且线上复核；词数 1,356 达标；构建 `✓ Compiled successfully` + EXIT=0；线上 HTTP 200 + size 69,498 内容级验证通过；生产 alias 指向本次部署。

🟡 2 项既有缺陷（6.2 角色 Trait 疑似编造、6.3 牛车行为描述）与 1 项基建发现（6.1 home-content.md 为死文件）已如实上报，均**未在本轮修改**。

## 九、提醒主 Agent 的事项

1. **须裁定（四条件解释）**：本轮「≥3 独立来源」是按**系统存在性 + 站内零覆盖**计（官方 2 通道 + 编辑/社区 3 家 + 奖杯站 3 家），**不是**按抱怨频率计。这是 Profile 路径② 的正当用法（同 9/12 spiritvalewiki 判例），但若主 Agent 采用严格的「必须是负面抱怨聚类」解释，本轮应回退 SKIP。
2. **祝福效果表的证据强度**：系统存在 / 解锁链 / 成就 → 多通道确证；**9 条祝福效果**主要来自 GrindNStrat 单通道（官方无表）。正文已把整表标为 community-reported 并明写「ACE Team has not printed an official table」、货币标 `[Unconfirmed]`。若认为单通道不足以成表，可要求删表降级。
3. **本轮含超出新增文件范围的改动（1 处，在 themoundwiki 内）**：`progress-save-recovery-guide.md` L121 事实错误修正（Saints allies → Saints blessings）。请复核是否接受。
4. **路径②本轮已跑通并首次命中**（承接 9/12 报告第 3 条：当时判定「无官方明说、站内整块没写的空白」——该判定**漏了 Saints**，因为 Saints 不在 Steam 商店页系统清单里，只出现在补丁说明中）。**给后续轮次的规则建议**：路径②的比对基准不应只用「商店页系统清单」，应并上「全部官方补丁说明提及的系统名」。
5. 未修改 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md`；未 `git add/commit/push`（新增文件为 untracked，主 Agent 统一提交）。
