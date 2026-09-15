# Silver Pines — Google Suggest 关键词调研报告

> 任务: BUILD-009 上游材料（Phase 1 第 1 项）
> 岗位: 关键词研究员（`docs/agents/13-岗位卡-关键词研究员.md` + `14-Profile-关键词研究员.md`）
> 采集日期: **2026-09-16**（发售前 **22 天**；Steam 发售日 2026-10-08）
> 采集方法: Google Suggest API（`suggestqueries.google.com/complete/search?client=firefox&hl={hl}&gl={gl}`）
> 查询数: **62（en 48 + 裸词探针 5 + ja 4 + zh-CN 5）**，其中 **59 条拿到可解析响应**，**3 条响应截断（记为「未验证」）**
> 原始建议条数: **102** → 去重后 **67** 条唯一词
> 噪声（同名公寓 / 医疗集团 / Ranch 小说系列 / 康复中心 / 电影 / 餐厅 / 银价漂移）: **18 条（26.9%）**
> 模糊 / 裸词（不做目标词）: **4 条**
> 明确游戏意图词: **45 条（en 44 + ja 1）**
> 站级事实来源: `keyword-results/build-gate-2026-09-16.md`（门禁 Agent 已核验，本报告**不重新核验、不改写**其事实）

---

## 〇、结论先行（给主 Agent / 建站协调员）

1. **裸词 `silver pines` 已被四类语义瓜分，走裸名 = 零胜算。** 本次裸词探针 5 条，返回的 10 条建议里**只有 3 条是本作**（`silver pines game` / `silver pines release date` / `silver pines game ps5`），其余是 **Ranch 小说系列、医疗集团、公寓、度假屋、康复中心**。这与门禁报告 §SEO 红线的判断**完全吻合**，并在本次采集里得到实证。
2. **`silver pines game` 才是唯一存活的锚。** 加上 `game` 限定后，返回的 10 条建议**10/10 全部指向本作**（ps5 / release date / switch / xbox / price / physical copy / voice actors / cast / review / engine）。**所有标题 / 描述 / keywords MUST 带 `silver pines game` 或其变体**（`silver pines the game` / `video game silver pines`）。
3. **本批最强需求簇是「发售窗口」而非「机制」**：release date（含 ps5 / switch 细分）、platform（ps5 / xbox / switch）、price、physical copy、demo（含 ps5 / xbox / steam deck / length / review）合计 **31 条**，占游戏意图词的 **68.9%**。
4. **意外高价值长尾：`silver pines demo shotgun code`。** 这是一条**明确的「找秘籍」意图**，且在 Suggest 里与 `demo walkthrough`、`demo length`、`demo review` 同批出现——说明 Demo 已经是**独立于本体**的搜索对象。本站已按此立页并**诚实回答「没有可验证的 shotgun code」**（详见 §六）。
5. **机制词在 Suggest 里几乎全空 —— 20 条机制种子全部零建议。** `phone booth save` / `inventory` / `ammo` / `reload` / `melee durability` / `duct tape` / `herbs` / `coffee` / `map` / `camera` / `gun locker` / `vending machine` / `coins` / `hip pouch` / `item box` / `bosses` / `weapons` **17 条机制种子返回空**，只有 `endings` 和 `tips` 各返回 1 条**泛词**（`silver pines game walkthrough`），且都不带机制限定。**机制类内容现在没有搜索量，属于发售后抢位。**
   - ⚠️ **注意**：`silver pines game herbs` / `silver pines game tips` / `silver pines game price` 三条返回的**不是本作建议**，而是漂移词（`silver mountain activities` / `silver tips today` / `silver metal price today`）——**这三条命中 MUST NOT 当作本作搜索需求**。
6. **`silver pines game wiki` / `silver pines game wikipedia` 真实存在（各 1 条 + 词干重合）。** 说明「找 wiki」的意图已经出现，而门禁报告已确证 **EN/CN/JP 三语零成建制 wiki** —— 这是本站的**直接抢位窗口**。
7. **中文零命中、日文仅 1 条。** zh-CN 5 条查询（含 `银松镇` 中文译名探针）**无一条返回本作建议**；ja 4 条查询仅 `シルバーパインズ ゲーム` 1 条命中，说明日本市场对这个标题的认知**尚未形成**。CJK 不是本轮的流量来源。
8. **建议篇数：10 篇 P0（本轮全做）**，与门禁报告的 8-10 篇建议一致（Profile 14 的 50-100 词区间基线为 10 篇）。

---

## 一、采集命令与可复现记录

### 1.1 网络异常与处置（MUST 记录）

本机 DNS 会把 `suggestqueries.google.com` 解析到 `69.63.176.59`（Meta IP），SSL 直接失败。这是 **DNS 投毒，不是 GFW 封锁**（见 `games-site/CLAUDE.md` 采集前必读）。处置：

```bash
# 诊断
dig +short suggestqueries.google.com   # → 69.63.176.59（Meta IP，错）
# 单次验证（返回 HTTP 200 + JSON 建议数组）
curl -s -m 15 --resolve suggestqueries.google.com:443:64.233.170.139 \
  'https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=silver+pines+game'
```

`--resolve` 指定真实 IP `64.233.170.139` 后全部主采集直连成功，**未使用代理**。

### 1.2 主采集（英文，48 查询）

- **14 条锚词种子**：`silver pines game` / `silver pines the game` / `silver pines wiki` / `silver pines game wiki` / `silver pines game guide` / `silver pines game demo` / `silver pines game release date` / `silver pines game price` / `silver pines game steam` / `silver pines game walkthrough` / `silver pines demo` / `silver pines steam`（+ 尾随空格变体 + 前缀轮询）
- **14 条前缀轮询**（挂在锚词上）：`how to ` / `best ` / `guide ` / `weapons ` / `beginner ` / `build ` / `solo ` / `co op ` / `tier list ` / `where ` / `what ` / `why ` / `can you ` / `is `
- **20 条机制种子**（门禁报告的 12 机制 + 8 相邻）：`phone booth save` / `save` / `inventory` / `ammo` / `reload` / `melee durability` / `duct tape` / `herbs` / `coffee` / `map` / `camera` / `endings` / `gun locker` / `vending machine` / `coins` / `hip pouch` / `item box` / `bosses` / `weapons` / `tips`

### 1.3 裸词污染探针（5 查询，MUST 记录）

`""` / `game ` / `the ` / `movie ` / `wiki ` + `silver pines` —— 用于实证裸词的语义版图（见 §五）。

### 1.4 补充采集（CJK，9 查询）⚠️ 部分未验证

- **zh-CN 5 条**：`银松镇` / `银松镇 攻略` / `银松镇 游戏 攻略` / `silver pines 攻略` / `silver pines 游戏`
  → ⚠️ **3 条（`银松镇` 系列）响应被截断**（返回体在 JSON 字符串中途断开，无法解析），**记为「未验证」，MUST NOT 当作「零建议」**。另 2 条（`silver pines 攻略` / `silver pines 游戏`）返回**合法的空建议数组**（`[]`）。
  → 本次采集**没有观察到中文译名**。门禁报告称中文区同样零成建制 wiki；中文站名是否存在，本报告**不下结论**。
- **ja 4 条**：`silver pines ゲーム` / `silver pines 攻略` / `シルバーパインズ ゲーム` / `silver pines ホラー`
  → 仅 `シルバーパインズ ゲーム` 返回 1 条建议（即它自己）。其余 3 条为空数组。
- ⚠️ **zh-CN 走 GBK**：`hl=zh-CN` 返回 GBK 字节流，MUST 经 `iconv -f GBK -t UTF-8`；截断现象与编码无关（截断发生在字节层）。

### 1.5 不可达渠道（MUST 记为「未验证」，MUST NOT 记为 0）

| 渠道 | 状态 | 处置 |
|---|---|---|
| `api.gamelytic.com` | **403，需 API key** | 未验证 |
| `steamdb.info` | **403** | 未验证（但 `silver pines steamdb` 词本身在 Suggest 命中，见 §三 D） |
| `steamspy.com` | **403** | 未验证 |
| `fandom.com` | **域名不可达** | 未验证 |
| `store.steampowered.com/appreviews/...` | **curl 失败**（本次；门禁 Agent 采集时可用） | 沿用门禁报告 2026-09-16 记录值，见 §七 |

> **本次没有可用的搜索量 API**（无 Ahrefs / Semrush / GKP 接入），因此报告内**不出现任何搜索量数字**。

---

## 二、原始采集量与水线

| 指标 | 数值 |
|------|------|
| 采集查询数（attempted） | **62** |
| 拿到可解析响应 | **59** |
| 响应截断（未验证） | **3**（全部 zh-CN `银松镇` 系列） |
| 返回非空建议的查询数 | **22 / 59（37.3%）** |
| 返回**零建议**的查询数 | **35 / 59（59.3%）** |
| 原始建议条数 | **102** |
| 去重后唯一词 | **67** |
| 噪声（剔出） | **18（26.9%）** |
| 模糊 / 裸词（另列，不做目标词） | **4** |
| 明确游戏意图 | **45（en 44 + ja 1）** |

> **零建议率 59.3% 本身就是结论**：**20 条机制种子中 17 条返回空数组**。
> 「Silver Pines + 机制词」目前**尚无搜索需求** —— 机制类选题是**发售后抢位**，不是当前流量来源。
> 对比 Dressmaker（BUILD-008，零建议率 72.1%），本作的零建议率**更低**，原因不是机制词有量，
> 而是**发售窗口词（release date / platform / price / demo）有量**。

### 2.1 关于 `google:suggestrelevance`

Google Suggest 会随建议返回 `google:suggestrelevance`（本批区间 390-650）。
**它只是 Google 对该建议的相对排序权重，不是搜索量、不是 KD、不是 CPC。**
本报告**不引用该数值**做任何热度推断，仅按**同批出现频次**排序（同一个词在多少条不同查询里被返回 = 结构强度）。

### 2.2 跨查询复现频次（结构强度，非搜索量）

| 词 | 在多少条查询中被返回 |
|---|:--:|
| `silver pines game release date` | **5** |
| `silver pines game ps5` | **5** |
| `silver pines game switch` | **4** |
| `silver pines game xbox` | **4** |
| `silver pines game price` | **3** |
| `silver pines game walkthrough` | **3** |
| `silver pines gameplay` | **3** |
| `silver pines game` | **3** |

> **复现频次 = 该词在不同种子下都被 Google 认为相关**，比单条 rel 值更能说明它的结构位置。
> `release date` 与 `ps5` 并列第一（各 5 次），是**本轮最强的两条需求**。

---

## 三、去噪后的分类表（45 条有效游戏词）

### A. 锚词 / 身份消歧（6 条）

`silver pines game`、`game silver pines`、`video game silver pines`、`silver pines the game`、`the silver pines game`、`silver pines game wikipedia`

> **处置**：这 6 条**不单独成篇**，而是**站点级锚点** —— MUST 出现在首页 title / description / H1 / About 的消歧段落里。
> `silver pines game wikipedia` 说明「本作是否有维基页」已经是问题 → About 页正面回答。

### B. 发售 / 价格 / 平台（18 条）—— **本批最密集、最真实的需求簇**

| 关键词 | 复现 | 站内落点 |
|---|:--:|---|
| `silver pines game release date` | 5 | 发售信息页 |
| `silver pines game release date ps5` | 2 | 发售信息页 |
| `silver pines game switch release date` | 2 | 发售信息页 |
| `silver pines game ps5 release date` | 2 | 发售信息页 |
| `silver pines release date` | 1 | 发售信息页（不带 game 也仍指向本作） |
| `silver pines game ps5` | 5 | 发售信息页 |
| `silver pines game switch` | 4 | 发售信息页 |
| `silver pines game xbox` | 4 | 发售信息页 |
| `silver pines ps5` | — | 发售信息页 |
| `silver pines game price` | 3 | 发售信息页（**价格未公布 → `[Unconfirmed]`，MUST NOT 编造**） |
| `silver pines game physical copy` | 2 | 发售信息页 / FAQ |
| `silver pines game cast` | 2 | FAQ（配音阵容） |
| `silver pines game voice actors` | 2 | FAQ（配音阵容） |
| `silver pines game engine` | 2 | FAQ（技术问题，**已标记未确认**） |
| `silver pines game review` | 2 | 口碑页 / Demo 页 |
| `silver pines game steam` | 2 | 站点级 |
| `silver pines steam` | 1 | 站点级 |
| `silver pines steamdb` | 1 | FAQ |

> **这一簇是本轮唯一确定有量的需求**，也是发售后 22 天窗口内**时效性最强**的内容。
> ⚠️ **`silver pines game price` 有结构强度，但价格官方未公布** —— 本站的回答是「未公布」+ 说明已知的商店信息，**MUST NOT 填一个数字**。

### C. Demo / 试玩（11 条）—— **第二条真实需求簇，且已独立于本体**

| 关键词 | 备注 |
|---|---|
| `silver pines demo` | 词干 |
| `silver pines game demo` | 词干 |
| `silver pines demo ps5` / `silver pines game demo ps5` / `silver pines demo xbox` | 平台细分 |
| `silver pines demo steam` | 来源 |
| `silver pines demo steam deck` | 掌机兼容 |
| `silver pines demo length` | **强度信号：玩家在决定要不要投入时间** |
| `silver pines demo review` | **强度信号：Demo 本身被当作一部作品评价** |
| `silver pines demo walkthrough` | 攻略意图 |
| `silver pines demo shotgun` / `silver pines demo shotgun code` | **秘籍意图（见 §六）** |

> **Demo 已经是独立搜索对象**，不是本体的附属。本站为它单独立页，且**没有**把 Demo 内容塞进发售页。

### D. wiki / 攻略 / 社区（7 条）

`silver pines wiki`、`silver pines game wiki`、`silver pines game wikipedia`、`silver pines game walkthrough`、`silver pines game guide`、`silver pines game reddit`、`silver pines demo reddit`

> **`silver pines wiki` / `silver pines game wiki` 直接命中本站的存在意义** —— 门禁报告已确证 EN/CN/JP 零成建制 wiki（apocanow 仅为模板占位页），**这是抢位窗口**。
> `silver pines game reddit` 出现但**没有官方 subreddit** [Unconfirmed] —— FAQ 诚实回答。

### E. 机制长尾（**Suggest 真命中：0 条**）⚠️

20 条机制种子中，**17 条返回空数组**，另 3 条返回的是**漂移词而非本作建议**：

| 机制种子 | 返回 | 判定 |
|---|---|---|
| `phone booth save` / `inventory` / `ammo` / `reload` / `melee durability` / `duct tape` / `coffee` / `map` / `camera` / `gun locker` / `vending machine` / `coins` / `hip pouch` / `item box` / `bosses` / `weapons` / `save` | **空数组** | 零需求 |
| `silver pines game endings` | `silver pines game walkthrough` | 泛词，不带机制 |
| `silver pines game herbs` | `silver mountain activities` | ⚠️ **漂移，非本作** |
| `silver pines game tips` | `silver tips today` | ⚠️ **漂移，非本作** |
| `silver pines game price` | `silver metal price today` | ⚠️ **漂移混入（该词同时有本作建议，见 B）** |

> **这意味着机制类内容不可能是本轮的流量来源。** 它的价值是**发售后的抢位**与**站内深度**——
> 现在写，是因为发售后 1-4 周这些词会起来，而那时再写就晚了。
> **但 MUST NOT 因为「机制词没量」就编造机制细节来填充**：本轮机制内容的每一条都带三级来源标注，
> 未验证的写 `[Unconfirmed]`。

### F. 内容形态词（4 条）

`silver pines gameplay`、`silver pines locations`、`silver pines game walkthrough`、`silver pines locations`

> `silver pines locations` 是**地图/地点意图**的唯一直达词（无任何平台或发售污染）→ 直接对应地图与回溯页。
> `silver pines gameplay` 出现 3 次（复现频次并列第三），是**「这游戏怎么玩」的观察意图** → 对应新手页。

### G. CJK 补充命中（1 条，2026-09-16 采集）

`シルバーパインズ ゲーム` —— 日文片假名标题 + `ゲーム`。仅 1 条，**不构成选题依据**，仅作为站点 `keywords` 的次要补充。

---

## 四、低置信 / 边界词（4 条，MUST NOT 作为目标词）

| 词 | 为什么会返回 | 处置 |
|---|---|---|
| `silver pines`（裸词） | 语义完全混合 | **MUST NOT 作为主关键词**；仅在 About 消歧段落里作为「你搜的是什么」的入口 |
| `the silver pines` | 小说系列 / 餐厅 | 不做目标词 |
| `silver pines stream` | 可能是 `steam` 拼写变体，也可能是直播意图 | 不做目标词（歧义），但**已确认 `steam` 拼写变体存在**，站点 title 用完整 `Steam` |
| `silver pines wiki` | 可能是 Ranch 小说 wiki | ⚠️ **边界**：该查询返回了 `silver pines ranch wiki`（噪声）+ `silver pines game wiki`（本作）。**处置：站内一律写 `silver pines game wiki`，不用裸 `silver pines wiki`** |

---

## 五、同名污染全景（18 条噪声，MUST 排除）

本次裸词探针**完整画出了 `silver pines` 这个词的语义版图**。四类污染源合计 18 条（26.9%）：

| 污染源 | 条数 | 代表词 |
|---|:--:|---|
| **Ranch 小说 / 图书系列** | 6 | `silver pines ranch series`、`the silver pines ranch series`、`the silver pines ranch`、`the silver pines series`、`a silver pines novel`、`a silver pines novel series`、`a silver pines novel order` |
| **实体场所（公寓 / 度假屋 / 餐厅 / 酒店）** | 5 | `silver pines apartments`、`silver pines lodge`、`the silver pines restaurant`、`the silver pine flagstaff` |
| **医疗 / 康复机构** | 2 | `silver pines medical group`、`silver pines treatment center` |
| **影视** | 1 | `silver pines movie` |
| **词干漂移（silver 系列）** | 4 | `silver metal price today`、`silver tips today`、`silver mountain activities`、`silver pines ranch wiki` |

> **实证结论（与门禁报告一致）**：裸词 `silver pines` 的搜索结果里，
> **只有 3 条**（`silver pines game` / `silver pines release date` / `silver pines game ps5`）指向本作。
> **这与门禁报告「前 10 条 Google Suggest 只有 3 条是本作」的实测数字逐条吻合** —— 门禁判断被本次采集独立复现。

### 5.1 锚词政策（MUST 遵守）

1. 所有页面 `title` / `description` / `keywords` **MUST 含 `silver pines game`** 或其变体（`silver pines the game` / `video game silver pines`）
2. `SITE_CONFIG.name` = `Silver Pines Wiki`（含 `Wiki` 消歧）
3. **MUST NOT** 用裸词 `Silver Pines` 单独作为任何页面的主关键词
4. About 页 **MUST** 有一段显式消歧（"If you are looking for the Silver Pines Ranch book series, the Silver Pines medical group, or the Silver Pines apartments, this is not that"）
5. `lib/metadata.ts` **MUST** 带一段记录该污染事实的注释，供后续维护者理解为什么不能改回裸词

---

## 六、命中率分析：词 → 攻略可行性

> 本站为**新建站**，无既有攻略 → **全部选题均为缺口（0% 已覆盖）**。
> 下表评估「该词簇能否支撑一篇 1000-1500 词攻略」。

| 词簇 | 词数 | 能否支撑 1000-1500 词 | 判断 |
|---|:--:|---|---|
| B 发售/价格/平台 | 18 | ✅ 能（发售日 + 10 语言 + 5 平台 + 价格未公布 + 实体版 + 配音 + 引擎 + 口碑） | **P0 必做** |
| C Demo | 11 | ✅ 能（Demo 内容 + 时长 + 平台 + 秘籍问题 + 评价） | **P0 必做**，意图独立于 B（「能不能试」vs「多少钱」） |
| D wiki/攻略/社区 | 7 | ◐ 部分（不足以单成一篇） | **融入 About + 首页 + FAQ**，不单独成篇 |
| E 机制 | 0（Suggest） | ✅ 能（**靠门禁报告 12 机制 + 本次 WebSearch 复核**，非靠 Suggest） | **P0 必做 6 篇**（发售后抢位） |
| F 内容形态 | 4 | ✅ 能（locations → 地图页；gameplay → 新手页） | **P0 必做 2 篇** |
| A 锚词/消歧 | 6 | ❌ 不能（不足以单成一篇） | **站点级锚点** |
| 低置信 4 条 | 4 | ❌ 不能 | **不立页** |
| 噪声 18 条 | 18 | ❌ 不能 | **MUST NOT 碰**（异构语义） |

### 6.1 机制词的补充证据链（Suggest 无量的部分）

Suggest 里机制词全空，但**官方商店页文案 + 预览实测 + Demo 玩家报告**已核验出足够写深页的机制。
以下机制**均有来源支撑**（可直接引用，不属于编造）：

| 机制 | 来源等级 | 站内落点 |
|---|---|---|
| 电话亭投币存档、无自动存档、死亡回退到上次存档 | Community-reported | 存档机制页（**旗舰页**） |
| 硬币同时是「存档费」与「货币」 | Community-reported | 经济页 + 存档页 |
| 贩卖机售补给（弹药 / 胶带 / 药 / 咖啡） | Community-reported | 经济页 |
| 手动逐发装弹、实时、不暂停 | Community-reported | 枪械页 |
| 近战武器有耐久、用**胶带**手动修复、实时 | Community-reported | 近战页 |
| 体力条只被**闪避与近战挥砍**消耗，**奔跑不消耗** | Community-reported | 体力页 |
| **咖啡**恢复体力且消耗真实时间 | Community-reported | 体力页 + 经济页 |
| **Mementos** 是能力增益（非解谜道具），报告效果含加快装弹、提升回复 | Community-reported | 体力页 |
| 背包空间有限；**关键区域有储物箱**可换装 | Community-reported | 背包页 |
| 地图实时、可**标记**未解谜题与地点 | Community-reported | 地图页 |
| 多结局、**单存档可全达成**、奖励彻底探索 | **Official**（Game8 开发者访谈） | 地图页 + 新手页 |
| 战斗可「打或避」；工具/武器渐进解锁城区 | **Official**（Steam 商店描述逐字） | 新手页 + 地图页 |
| 弹药、药品、升级皆稀缺 | **Official**（Steam 商店描述逐字） | 枪械页 + 新手页 |
| **武器清单、伤害值、弹药数、耐久值、Memento 清单、区域名、通关时长** | **无任何官方来源** | 全站 **`[Unconfirmed]`** |

> ⚠️ **门禁报告的 12 机制中有 5 条本次无法复核**：`gun locker code`、`herbs/glass bottle`、`camera photo map`、`hip pouch`、`stiletto`。
> 处置：这 5 条**不写进内容**，或在页面内**诚实回答「没有可验证来源」**（如 shotgun code / hip pouch）。
> **MUST NOT 因为「门禁报告说有」就把它当成事实写出去。** 详见 §八。

### 6.2 `silver pines demo shotgun code` 的处置（重要）

这是本轮**唯一一条明确的「找秘籍」意图**，也是**最容易诱发编造的词**。
Suggest 里同批还出现 `silver pines demo shotgun`（无 `code`），说明这条意图有真实基础。

**处置**：本站 Demo 页设置一个显式小节回答该问题，答案是：
**「没有任何可验证的 Silver Pines Demo shotgun code。所有引用具体按键序列的页面都是猜测。」**
并说明 Demo 中确实可报告地拾取到霰弹枪（Community-reported），但**秘籍码不存在可验证来源**。

> **这是一个刻意的反 SEO 直觉决定**：编一个码能吃到这个词，但那是编造。
> 站点的处理是**用诚实的答案占据这个位置**，并因此获得 E-E-A-T 而非短期点击。

---

## 七、站级事实基线（引自门禁报告，本次不重新核验）

| 项 | 值 | 来源 |
|---|---|---|
| 本作 App ID | **2333000** | Steam |
| Demo App ID | **4540100** | Steam |
| 发售日 | **2026-10-08** | Steam |
| 开发 / 发行 | **Wych Elm / Team17** | Steam |
| 语言 | 10 种 | Steam |
| Demo 评价 | **802 条 / 95.9% Overwhelmingly Positive**（2026-09-16） | Steam appreviews API（门禁 Agent 记录；本次 curl 失败，**未验证复现**） |
| 关注者 | **13.2K** | Steam |
| EN/CN/JP 成建制 wiki | **零**（apocanow 仅为模板占位页） | 门禁 Agent 实测 |
| 竞品风险 | Game8（高权重攻略站）+ Team17 官方 | 门禁 Agent 评估 |
| Wishlist 口径冲突 | 官方 **200K+（全平台）** vs Raijin **~83K（仅 Steam）** | ⚠️ **两个数字 MUST 分开标注口径，MUST NOT 混写** |

> ⚠️ 上述数字**全部来自门禁报告的 2026-09-16 采集**。本次采集**未能复现** appreviews 调用（curl 失败），
> 因此站内引用时统一标注为「Steam appreviews API, 2026-09-16」并注明来源，**不声称本轮重新验证**。

---

## 八、本次采集与门禁报告的差异（MUST 上报主 Agent）

| 项 | 门禁报告 | 本次采集 | 差异性质 |
|---|---|---|---|
| 裸词污染程度 | 前 10 条 Suggest 仅 3 条为本作 | **独立复现：裸词 10 条建议中 3 条指向本作** | ✅ **一致**（门禁判断被证实） |
| 12 条机制 | 列为已验证机制 | **5 条无法复核**（gun locker code / herbs / camera photo map / hip pouch / stiletto） | ⚠️ **部分不成立** —— 已降级或不采用 |
| 机制词搜索需求 | 14 条测试方向 | **20 条机制种子 17 条零建议** | ⚠️ **门禁未强调「机制当前无量」** —— 本轮补上 |
| CJK 渠道 | 记为可达 | **zh-CN 3/5 响应截断、ja 3/4 空** | ⚠️ **实际可用性低于门禁描述** |
| appreviews | 采集成功 | **curl 失败** | ⚠️ 不可复现，沿用门禁记录值 |

---

## 九、建议篇数与逐篇选题（10 篇 P0）

> **篇数依据**：Profile 14 —— 关键词 50-100 → **10 篇**。本批有效词 **45 条**落在 50 以下区间下沿，
> 但 **B/C 两簇（29 词，64.4%）密度极高且时效性最强**，且**机制簇虽有 0 搜索量但必须提前占位** →
> 采用 **10 篇 P0**，与门禁报告的 8-10 篇建议一致。

| # | 目标词簇 | 页面 slug | 类型 |
|---|---|---|---|
| 1 | B 发售/价格/平台（18 词） | `silver-pines-release-date-price-platforms` | 时效 |
| 2 | C Demo（11 词，含 shotgun code） | `silver-pines-demo-guide` | 时效 |
| 3 | E 存档机制（Suggest 0，占位） | `silver-pines-save-system-phone-booths` | 机制（旗舰） |
| 4 | E 经济（Suggest 0，占位） | `silver-pines-coins-vending-machines-economy` | 机制 |
| 5 | E 背包（Suggest 0，占位） | `silver-pines-inventory-storage-guide` | 机制 |
| 6 | E 近战耐久（Suggest 0，占位） | `silver-pines-melee-weapons-durability-repair` | 机制 |
| 7 | E 枪械装弹（Suggest 0，占位） | `silver-pines-guns-ammo-reloading-guide` | 机制 |
| 8 | E 体力/Mementos（Suggest 0，占位） | `silver-pines-stamina-dodge-mementos-guide` | 机制 |
| 9 | F 地图/locations + 多结局 | `silver-pines-map-backtracking-exploration` | 探索 |
| 10 | F gameplay + E 机制收束 | `silver-pines-beginner-guide` | 新手 |

**站级页面（不占总篇数）**：`/`（首页 + 17 FAQ）、`/faq`（31 条）、`/tier-list`（生存优先级 + 24 行系统状态表 + 证据台账）、`/guides`、`/about`、`/privacy`、`/terms`、`/contact`。

### 9.1 去重与自噬控制（MUST 记录）

- **FAQ 不单独成篇**：门禁建议中有「FAQ 1 篇」，但本轮**改为 `/faq` 专页 + 首页 FAQ 区块** ——
  若 FAQ 既做攻略页又做专页，会与 10 篇 P0 的问答段落**自噬**。这是**对门禁建议的一处主动调整**。
- **`/tier-list` 不是武器梯榜**：`silver pines game weapons` 有词（词干级），但**官方无武器清单** →
  页面改为**生存优先级 + 系统确认状态表**，并在页首显式说明「这不是武器梯榜，因为武器清单尚未公布」。**MUST NOT 编造梯榜**。
- **9 篇机制/探索页互查 slug 与目标词**：存档（费用）vs 经济（来源）vs 背包（携带）三页边界已划清：
  存档页只讲**投币与回退规则**，经济页只讲**硬币收支**，背包页只讲**容量与储物箱**。

---

## 十、MUST NOT 清单（交给建站协调员）

1. **MUST NOT** 用裸词 `Silver Pines` 作为任何页面的主关键词
2. **MUST NOT** 编造价格、销量、CCU、通关时长、武器数值、Memento 清单
3. **MUST NOT** 把噪声词（Ranch 小说 / 公寓 / 医疗集团 / 康复中心 / 电影）写进任何 meta
4. **MUST NOT** 把飘逸词（`silver metal price today` / `silver tips today` / `silver mountain activities`）当本作需求
5. **MUST NOT** 把 200K+（全平台）与 ~83K（Steam）两个 wishlist 数字**混写或换算**
6. **MUST NOT** 把 3 条截断的 zh-CN 查询记为「零建议」—— 那是「未验证」
7. **MUST NOT** 因为机制词在 Suggest 无量而**放松来源标注** —— 机制页每一位数字都要么有来源、要么 `[Unconfirmed]`

---

*采集执行：关键词研究员（BUILD-009）· 2026-09-16 · 原始数据 `/tmp/sp-harvest/raw-{bare,en,zh,jp}.txt`（临时目录，已归档于本报告）*
*站级事实来源：`keyword-results/build-gate-2026-09-16.md`*
