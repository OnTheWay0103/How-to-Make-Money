# 挖词与词库

> 2026-10-25 定稿。对照「游戏站建站全流程清单」第 2 部分（二、挖词）逐节点落地。
> 本文是**采集规范与判断标准**；工具是 `scripts/harvest-keywords.mjs` + `scripts/keyword-index.mjs`，
> 执行人是关键词研究员（`docs/agents/13` / `14`）与游戏侦察员（`11` / `12`）。

---

## 一、渠道清单与来源标记（节点 6）

### 1.1 五层渠道

| 层 | 渠道 | 解决什么 | 可自动化 | 现状 |
|---|---|---|---|---|
| **L1 供给端** | Steam 即将发售 / 新品榜 / 热销榜、SteamDB 趋势、Steam News API、PS Store 新品、Nintendo eShop 新品、Game Pass 首发 | 发现值得建站的游戏 | 半自动（榜单页可抓） | 已在用 Steam + wishlist 榜 |
| **L2 需求端** | Google Suggest（裸词 / 品牌+game / 后缀种子）、Google Trends、Steam 评测数、SteamDB / SteamCharts CCU | 证明「有人搜」 | **Suggest 已全自动** | 已跑通 |
| **L3 社区端** | Reddit 子版、Steam 讨论区与差评、YouTube 攻略视频标题 | 找内容缺口，定页型和长尾 | 半自动 | 手工 |
| **L4 竞品端** | 同类站 sitemap、Fandom / wiki.gg 页面标题、SERP Top 10 标题 | 找竞品已覆盖 / 未覆盖的词 | 需脚本 | 手工 |
| **L5 内部端** | **GSC query**、GA4 落地页 | 老站扩词（只对 A/B 档站，D 档不采） | GSC 待接入 | **缺凭证，见 1.3** |

**渠道扩张原则**：每加一个渠道，必须先在 `source` 标记里给它一个名字，跑满两周后用
`keyword-results/INDEX.md` 的「渠道产出」表看「独占词数」——独占词数长期为 0 的渠道就撤掉。
MUST NOT 凭「听说这个渠道好」就扩。

### 1.2 来源标记（source）规范

**每条关键词 MUST 带来源**，格式 `渠道:细节`。一词多来源时全部保留（去重成集合）。

| 渠道名 | 细节写什么 | 例 |
|---|---|---|
| `google_suggest` | 锚定批次标签 | `google_suggest:裸词`、`google_suggest:后缀:codes`、`google_suggest:探针:ps5` |
| `steam_store` | 取的字段 | `steam_store:about`、`steam_store:tags` |
| `steam_reviews` | 采样口径 | `steam_reviews:negative-20` |
| `steam_discussions` | 版块 | `steam_discussions:general` |
| `steam_news` | — | `steam_news` |
| `reddit` | 子版 | `reddit:r/GameName` |
| `youtube` | — | `youtube:title` |
| `gsc_query` | 时间窗 | `gsc_query:28d` |
| `ga4_landing` | 时间窗 | `ga4_landing:30d` |
| `competitor_sitemap` | 站点 | `competitor_sitemap:game8` |
| `competitor_serp` | 查询词 | `competitor_serp:tears of metal codes` |
| `google_trends` | 区域 | `google_trends:US` |
| `psstore` / `eshop` / `gamepass` | — | `psstore:new-releases` |

用途：**知道每个词从哪来**，以后加渠道时能算清「谁在产出、谁在空转」。

### 1.3 GSC 接入（L5，待办）

GSC query 是价值最高的渠道（有曝光无点击的词 = 白捡的选题），但全流程清单节点 46 一直缺凭证。
**凭证怎么给**（一次性，约 15 分钟）：

1. **Google Cloud Console** → 选一个项目（没有就新建）→ API 和服务 → 库 → 搜索
   `Google Search Console API` → 启用。
2. IAM 和管理 → 服务账号 → 创建服务账号，名字 `gsc-reader` → 不授予项目级角色。
3. 进入该服务账号 → 密钥 → 添加密钥 → 创建新密钥 → **JSON** → 下载。
   存到 `~/.config/gsc/service-account.json`，`chmod 600`。**MUST NOT 入库、MUST NOT 放进仓库任何目录。**
4. 复制服务账号邮箱（形如 `gsc-reader@<project>.iam.gserviceaccount.com`）。
5. **Search Console 每个属性** → 设置 → 用户和权限 → 添加用户 → 粘贴该邮箱 → 权限选「受限」。
   - 现有 45 站逐个加，一次性；新站上线流程里顺手加（SOP 节点 44 提交 GSC 时同步做）。
   - Google 目前不提供批量加用户的 API，这一步无法脚本化。
6. 脚本读取优先级：环境变量 `GSC_KEY_FILE` → `~/.config/gsc/service-account.json`。
   scope 用 `https://www.googleapis.com/auth/webmasters.readonly`。
7. 验收：脚本能列出「有权限的属性数」，与站点数对得上才算接通。

备用方案：复用现有 GA4 服务账号（在 GA4「媒体资源访问权限管理」里能查到它的邮箱），
但私钥在 Vercel 上是 Sensitive、读不回来，仍需回 GCP 该项目新建一把 key —— 没有该项目权限就直接走上面的新建路线。

> GSC 数据特性：滞后 2–3 天，保留 16 个月，单次查询上限 25,000 行，配额 1,200 次/分钟/属性 —— 我们远用不满。

---

## 二、采集频率与排期（节点 7）

### 2.1 四类轮次

| 轮次 | 做什么 | 频率 | 产出要求 |
|---|---|---|---|
| **发现轮** | 跑 L1 五源，补候选池 | **每天 2 次** | 每天 ≥10 个新候选（5 站/天需要，留 3× 冗余） |
| **验证轮** | 建站决策当天，对单个候选做全量品牌词采集 | **每候选 1 次** | 该游戏的 `keyword-results/{slug}.md` |
| **扩词轮** | 只对 **A/B 档**老站跑 L3 + L5 | **每周 2 次** | 补页清单（词 → 页型） |
| **复盘轮** | 词 → 流量的命中率对照（GSC query 或 GA4 落地页） | **每周 1 次** | 命中率表，更新 `keyword-results/命中率分析.md` |

D 档站**不采集**（延续止损规则：不扩关键词）。

### 2.2 时间表（**以美国东部时间为准**）

原则：排期一律按 **America/New_York** 计算（目标市场是美国，用本地时间才不会随夏令时错位），
两轮都落在北京时间工作日高峰时段（09:00–12:00、14:00–18:00）之外 —— 既不占白天人工时间，也都走半价计费。

| 轮次 | 美国东部（窗口） | 北京时间（固定时刻） | 为什么 |
|---|---|---|---|
| 发现轮·早 | 每天 **08:00–09:00** | 21:00 | 美国上午，抓前夜新发售与新闻 |
| 发现轮·晚 | 每天 **15:00–16:00** | 次日 04:00 | 美国下午，抓当日榜单与讨论（含分析轮） |
| 扩词轮 | 周二、周五下午轮 | 次日 04:00（含在轮内） | 用当天数据排页；当前未单独排期 |
| 复盘轮 | 周一上午轮 | 21:00（含在轮内） | GSC 滞后 2–3 天，周一能拿到上周完整数据；当前未单独排期 |

补充说明：

- **为什么用固定北京时刻**：launchd 的 `StartCalendarInterval` 只认本机时区，不能按 job 设 `TZ`。
  夏/冬令时相差 1 小时，而窗口本身放宽到「美国上午 8–9 点、下午 3–4 点」（2026-10-26 用户口径），
  所以固定 21:00 / 04:00 全年都落窗：夏令时是 09:00 / 16:00，冬令时是 08:00 / 15:00。
  **排期 MUST 先按美东窗口换算再写本机时刻，并把换算依据写进注释**（见 `auto-build-site.plist`），
  MUST NOT 只看本机时刻随手排。
- **夏令时切换**：2026-11-01 转冬令时后无需改配置，21:00/04:00 仍落在窗口内；只有把窗口收窄到 ≤1 小时时才需要改。
- **DeepSeek 计费**：高峰期只有**工作日 09:00–12:00 与 14:00–18:00（北京时间）**，
  其余时间一律半价。本表四类轮次（含扩词轮、复盘轮）全部排在高峰期之外，
  因此全部按半价计费；周末任何时间也都是半价。
- **水位控制**：候选池里「可建」候选 > 30 个时，当天可跳过发现轮·早，避免无效采集。
- 周末照常跑发现轮（Steam 周末也会上新/打折），扩词轮与复盘轮只排工作日。

### 2.3 为什么不是「4 次/日」

2026-10-25 实测：同一查询连采 3 次，**返回完全一致（15 条，顺序相同）**。
所以「一天采同一个词 4 次」是纯浪费。真正有意义的高频是**发现**（新游戏多）而不是**复采**（词集稳定）。
原来的「4 次/日」据此改为「4 类轮次、各自不同频率」。

---

## 三、采集执行规范（节点 8）

### 3.1 采集前自检三问（MUST）

1. **锚定词带空格了吗？** 多词品牌 MUST 用官方写法（`Tears of Metal`）。
   实测 `tearsofmetal`（无空格）返回的是**另一款游戏** `tears of themis` 的词。
2. **固定 hl/gl 了吗？** 实测同一词不带参数 vs `hl=en&gl=us` 返回**不同词集**。
   默认 `hl=en&gl=us`（美国市场）；日文探针单独 `hl=ja&gl=jp`；中文 `hl=zh-CN&gl=cn`。
3. **先裸词了吗？** 品牌 + `game` 后缀可能被 Google 归一成近义词
   （ANOMALITH：加 `game` 后 71 条只有 3 条有效；裸词 15 条中 13 条有效）。
   顺序固定为：**裸词 → 品牌+game → 后缀种子 → 探针**，异常时以裸词为准判断。

### 3.2 锚定批次

| 批次 | 查询 | 作用 |
|---|---|---|
| 裸词 | `{Game}` | 判断品牌补全是否成立（命中率最高的批次） |
| 品牌+game | `{Game} game` | 消歧，但可能被归一，**命中率低不代表没需求** |
| 后缀种子 | `{Game} {seed}` | 主力批次，按品类选 16 个种子（见脚本 `GENRE_SEEDS`） |
| 探针 | 尾空格 / steam / ps5 / reddit / characters / skills | 找长尾与平台词 |

种子按品类分：`rpg` / `survival` / `coop` / `sim` / `roguelite` / `default`。
增删种子 MUST 依据 `INDEX.md` 的「采集锚定产出」表（独占词数为 0 的种子考虑撤掉）。

### 3.3 通道与 DNS

MUST NOT 把请求失败判为「被墙 / 需要代理」——本机是 **DNS 投毒**，逐域名、会变。
脚本每次运行现取真实 IP（`dig @1.1.1.1` → 回退 `@8.8.8.8`）再用 `curl --resolve` 直连；
取不到 IP 时降级直连并在报告里标注。MUST NOT 写死 IP。

### 3.4 脚本

```bash
# 验证轮（建站决策当天）
node scripts/harvest-keywords.mjs --game "Tears of Metal" --slug tearsofmetal --genre rpg --write

# 只要需求判断，快速跑（只采裸词）
node scripts/harvest-keywords.mjs --game "Draemony" --bare-only

# 日文/中文别名
node scripts/harvest-keywords.mjs --game "ANOMALITH" --alias "アノマリス" --locale ja --write
```

产物：`keyword-results/{slug}.md`（人看）+ `keyword-results/.data/{slug}.json`（机器读，含每条词的来源和跨次增量）。

**失败处理**：请求失败数 > 0 时报告会打警告。失败 ≠ 0 词，MUST NOT 把失败当「需求低」。

---

## 四、去噪与分类（节点 9）

### 4.1 有效词定义

**有效词** = 含品牌词（或 `--alias` 给的别名）且不是噪声。
别名（中文名、日文名、缩写）MUST 通过 `--alias` 传入，否则会被误判为噪声。

**近重复变体**（`demo ps5` vs `ps5 demo`）合并统计：报告同时给「有效词条数」和「独立词数」。

### 4.2 判定线

| 指标 | 线 | 不达线怎么办 |
|---|---|---|
| 有效词 | **≥ 20** | 判「搜索需求低」，**不进建站评分**（Draemony：28 次请求 0 条有效） |
| 品牌锚定率 | ≥ 50% | 先怀疑锚定词写法/别名，再判需求 |
| 请求失败 | **= 0** | 有失败就当报告不完整，重跑，不解读 |

**品牌匹配规则（2026-10-26 修正）**：一条建议算「命中品牌」只有两种情形——
① 品牌词按 token 连续出现（`neon abyss 2 characters`）；② 整条建议里有一个 token 与品牌**完全相等**（`tearsofmetal`）。
MUST NOT 用子串匹配：`tung` 会命中 `tungsten` / `tung oil` / `tung tung sahur`，把锚定率虚抬到 87.8%。
单词品牌若本身是通用词（TUNG / Dream / Rise），锚定率再高也**不可信**，按「品牌撞名」放弃。

### 4.3 分类（固定 9 类 + 噪声）

有效词 9 类：Codes / Tier List / Best-Ranking / **Boss-Characters** / Build-Class / Weapons-Gear /
How-to / Guide-Beginner / Co-op-Multiplayer / Info-发售平台 / Other。

> `Boss-Characters` 是 2026-10-26 新增：`boss` / `characters` 之前落进 `Other`，被当成非攻略词，
> 把 Neon Abyss 2 的攻略型占比从 39.7% 压到 25%（`selection-2026-10-26.md` §4.3）。

噪声 3 类（每条噪声词 MUST 写原因）：

| 原因 | 判断 |
|---|---|
| 同名/系列混淆 | 与品牌词有共同 token 但不是本作 |
| 近音回退/无关 | 与品牌词无共同 token（Google 无匹配时的降级结果） |
| 无意义片段 | 拼写错误、纯数字等 |

### 4.4 报告必带的 5 个数字

原始建议数 / 去重数 / 有效词数 / 噪声率 / **品牌锚定率**。
缺任何一项 = 报告不合规，MUST 重跑。

---

## 五、词库沉淀（节点 10）

### 5.1 命名

| 类型 | 文件名 | 说明 |
|---|---|---|
| 主报告 | `keyword-results/{slug}.md` | 每次复采**覆盖**，历史在 `.data/{slug}.json` |
| 机器数据 | `keyword-results/.data/{slug}.json` | 每条词的来源、首次/最后见到、跨次增量 |
| 老站扩词 | `keyword-results/{slug}-expand-{YYYY-MM-DD}.md` | 只记增量页，不覆盖主报告 |
| 发现报告 | `keyword-results/discovery-{YYYY-MM-DD}.md` | 每个候选一段，含评分依据 |
| 索引 | `keyword-results/INDEX.md` | **脚本生成，禁手改** |

`{slug}` MUST 与站点目录一致（站点目录 = `{slug}wiki`）。
禁止同一游戏出现两种命名（历史遗留的 `Tears of Metal.md` / `tearsofmetalwiki-*` 逐步归并到 slug）。

### 5.2 每条词必须带

关键词 / 分类 / **来源** / **页型**（1–5，对应 `docs/STRATEGY-生命周期与止损.md` 3.1）。

### 5.3 索引与检查

```bash
node scripts/keyword-index.mjs          # 重新生成 INDEX.md
node scripts/keyword-index.mjs --check  # 只检查：硬问题（命名冲突）非零退出；软问题（旧格式无元信息）只报数
```

`INDEX.md` 提供：渠道产出表、锚定批次产出表、按游戏的词数/最后采集日/页型覆盖/站点状态。

同一游戏两种命名（空格 / 连字符）会被判为硬问题：保留内容更全的一份，另一份移到
`keyword-results/archive/`（不删历史，见该目录 README）。

### 5.4 命中率复盘（复盘轮）

`keyword-results/命中率分析.md` 现在由 **`node scripts/keyword-hit-rate.mjs --write`** 生成
（2026-10-27 起，MUST NOT 手改）：

- 数据源 `dashboard /api/traffic`（GA4，30 天窗口）；接口只给每站 **top 10 落地页**
- 口径是**落地页代理指标**：回答「哪些页真的有人看」，不是「哪些词带来了流量」；
  报告头部 MUST 写明这条，MUST NOT 把 top10 外当成 0 流量
- 「命中率」= 进入 top 10 的攻略页数 ÷ 站点攻略总数，是**下界**
- 旧版（2026-07-18「Google Suggest 关键词数量变化」）已归档到
  `keyword-results/archive/命中率分析-2026-07-18.md`，那份不是命中率
- 复盘轮排在**美东周一上午轮**（本机周一 21:00），已写进 `auto-build-site.sh` 提示词；
  此前只在文档里存在、从未真正排期，文件一路停在 7/18

GSC query 级数据接通后，报告应升级成「词 → 展示/点击 → 落地页」三列，那时才算真正的词命中率。


---

## 六、第二部分各节点的审核方式

| # | 节点 | 审什么 | 证据 | 谁审 | 频率 |
|---|---|---|---|---|---|
| 6 | 词源渠道清单 | 该跑的源是否跑了；有无空转渠道 | discovery 报告「搜索日志」表（逐源列查询 + URL）；`INDEX.md` 渠道产出表 | **Agent 审 + 人工复审**（当前仅 Agent，人工后续补） | 每周 |
| 7 | 采集频率 | 有无断档；发现轮产出够不够 | git 提交日期；候选池新增条数（≥10/天）；四类轮次执行记录 | 主 Agent | 每周 |
| 8 | 采集执行 | 三问是否合规 | 报告头部：锚定词 / locale / 请求数 / 失败数；失败 > 0 必须说明 | 关键词研究员自检 + 主 Agent 抽检 | 每次 |
| 9 | 去噪与分类 | 5 个数字是否齐；判定线是否执行 | 报告的分类统计表 + 噪声词清单（逐条原因） | 主 Agent | 每次 |
| 10 | 词库沉淀 | 命名/格式/索引是否统一；命中率是否真实 | `keyword-index.mjs --check` 输出；`INDEX.md`；命中率报告口径说明 | **Agent 审 + 人工复审**（当前仅 Agent，人工后续补） | 每月 |

三条通用原则（与第一部分一致）：证据链优先、脚本先跑人后看、异常必须显性。

---

## 七、执行链

```
发现轮（每日美东 08:00–09:00 / 15:00–16:00）→ 侦察员
  L1 五源扫描 → 新候选 ≥10 → discovery-{date}.md + CANDIDATE-POOL.md
      ↓ 候选评分 ≥12
验证轮（建站决策当天）→ 关键词研究员
  node scripts/harvest-keywords.mjs --game "..." --slug ... --genre ... --write
      ↓ keyword-results/{slug}.md（有效词 ≥20 才建站）
建站协调员（第 3–5 部分）
      ↓ 上线后
扩词轮（周二、周五美东下午轮内）→ 研究员
  只对 A/B 档；L3 社区 + L5 GSC/GA4 → {slug}-expand-{date}.md
复盘轮（周一美东上午轮内）→ 研究员
  GSC/GA4 → 命中率分析.md（词 → 页面 → PV）
      ↓ 每月
node scripts/keyword-index.mjs --check → INDEX.md 归档
```

---

## 八、待定与复盘

| 项目 | 状态 |
|---|---|
| GSC 凭证（节点 46） | **待办**：按 1.3 步骤接入；接通前复盘轮用 GA4 落地页代理 |
| 发现轮·早 的跳过阈值 | 待定：候选池 > 30 个时可跳过，看两周实际水位再校准 |
| 渠道扩张 | 先用 `INDEX.md` 渠道产出表跑满两周，再决定加哪个 |
| 旧报告格式 | 62 份旧格式无元信息头，逐步在新采集中替换，不批量重写 |
| 有效词 ≥20 判定线 | 2027-01 复盘（样本更足后校准） |
