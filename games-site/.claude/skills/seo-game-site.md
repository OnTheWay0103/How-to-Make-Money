---
name: seo-game-site
description: 游戏攻略站 SEO 合规 — 四层「定位」+ 站点级 S1–S15 / 页面级 P1–P22 检查清单，依据 Google 官方 Search Essentials / Title / Snippet / Canonical 规范；配套可执行检查器 scripts/seo-check.mjs（本地 + --live 抓线上，ERROR/WARN 分级，--report 出修复清单）
arguments:
  - name: site
    description: 站点目录名（如 aincradwiki），不带域名；不传则对全站做基线扫描
    required: false
---

# SEO 合规 — 网站与页面

> 本 skill 只管一件事：**站点结构、每个页面是否符合 Google 的索引与展示要求**。
> 选词见 `docs/STRATEGY-选词与评分.md`，挖词见 `docs/STRATEGY-挖词与词库.md`，
> 写作与页面矩阵见 `docs/STRATEGY-内容生产.md`，节奏与止损见
> `docs/STRATEGY-生命周期与止损.md`。
>
> **冲突时项目 `docs/STRATEGY-*.md` 优先**，本 skill 提供检查口径与判定依据。

---

## 一、四层定位（先定位，再谈优化）

一个游戏站能不能起量，先把四层定位摆正。**上下层矛盾时，上层优先**。

| 层 | 定位对象 | 本项目判据 | 反例 |
|---|---|---|---|
| **L1 站点定位** | 一个站 = 一个游戏 | 独立域名/子域，主题单一，Google 才判「细分领域专长」 | 一域多游戏、做成综合游戏门户 |
| **L2 架构定位** | 站内是几层 | **导航页 → 分类页 → 内页** 三层，内页多时靠分类页收口 | 扁平堆 200 篇内页，没有分类层 |
| **L3 页面定位** | 一页 = 一个搜索意图 | 两页能答同一意图 → 合并，不新建 | 同一问题写三篇「新手攻略」 |
| **L4 关键词定位** | 一个词 = 一个落地页 | 同意图多写法归一页；异义词剔除 | 「联机几人」与「支持多人吗」各建一页 |

本项目当前的落地形态：

| 层 | 路径 | 目标词 | 数量 |
|---|---|---|---|
| 导航页 | `/` | 品牌 + 主词（`{game} wiki` / `{game} guide`） | 1 |
| 分类页 | `/guides`、`/tier-list`、`/faq` | 中频词簇 | 3–6 |
| 内页 | `/guides/<slug>` | **一个长尾意图** | 10–40 |

**判断「该不该建新页」只看两条**（`docs/STRATEGY-内容生产.md` 页面矩阵）：
玩家打开这一页要完成**哪一件**事？这页有什么是别页给不了的？
两条写不出来 → 不建。

---

## 二、Google 的三道最低门槛（达不到就不用谈后面的）

Google 原话是「能出现在搜索结果里的**最低要求**」：

1. **Googlebot 没被挡住** —— 不能登录保护、不能被 robots/防火墙拦
2. **页面返回 HTTP 200** —— 4xx / 5xx 不进索引
3. **有可索引内容** —— 受支持的文本格式，且不违反 spam 政策

> 满足了只是**有资格**，「收录不保证」。所以第 2 章过了，才轮到第三章。

---

## 三、站点级合规清单

**逐项打勾，任何一项 ❌ 都先修，再谈内容优化。**

| # | 检查项 | 通过标准 | 怎么验 |
|---|---|---|---|
| S1 | 一个站一个游戏 | 站点只有本品类内容，无他游戏残留 | `node scripts/check-site-residue.mjs <site>` |
| S2 | 三层架构完整 | 首页 → 分类页 → 内页，每层都能点到下一层 | 抓 `/` 与 `/guides` 的 `<a href>` |
| S3 | 每个重要页都有入口 | 至少从另一个页面有一条**可抓取**链接 | 见 S7；孤儿页 = 不合格 |
| S4 | 链接可抓取 | 只有 `<a href="...">` 算数；`javascript:`、`onclick`、无 `href` 的 `<a>` 不算 | 抓 HTML 搜 `<a ` 与 `javascript:` |
| S5 | 未知 URL 真 404 | 不把所有错误地址 301 回首页 | 编一个不存在的路径，看状态码 |
| S6 | sitemap 完整 | `/sitemap.xml` 200，含全部静态页 + 全部 `content/guides/*.md` | 数 `<loc>` 条数 vs 文件数 |
| S7 | robots 正确 | `Allow: /`，`Sitemap:` 行与站点 origin 一致 | 抓 `/robots.txt` |
| S8 | **canonical 统一** | 全部页面 canonical 指向自身，origin 与 sitemap/robots/内链**同一个** | 抓线上 `<link rel="canonical">` 逐个比对 |
| S9 | 无 noindex 误加 | 全站不应有 `<meta name="robots" content="noindex">` | 抓 HTML 搜 `noindex` |
| S10 | 首页元数据 | 首页有独立 title / description / H1 | 同 P1–P3 |
| S11 | 图片有 alt | 全部 `<img>` 带描述性 alt | 抓 HTML 数 `<img` 与 `alt=` |
| S12 | 结构化数据 | 内页有 `Article`；FAQ 页有 `FAQPage`；域名与页面一致 | 抓 `application/ld+json` |
| S13 | 移动端可用 | 页面在 375px 宽下无横向滚动、正文可见 | 人工 + PageSpeed |
| S14 | 广告不挡内容 | 首屏正文可见，广告不覆盖正文 | `check-ad-slots.mjs --live` + 人眼 |
| S15 | 内链有描述性锚文本 | 不用 `click here` / `read more`，锚文本能独立说明目标页 | 抽查内页 `<a>` 文本 |

> **canonical 四条铁律（Google 原文）**：① 规范页自己也要有指向自身的 canonical；
> ② 用绝对 URL；③ sitemap / 内链 / 301 **都指向同一个** URL，信号才叠加；
> ④ 不要用 `noindex`、robots.txt 或 URL 移除工具做规范化。

---

## 四、页面级合规清单（每页过一遍）

新建或修改页面后，MUST 逐项过这张表。**「符合」= 与页面实际内容一致，不是凑字符数。**

### 4.1 标题（`<title>`）

| # | 规则 | 依据 |
|---|---|---|
| P1 | 每页有独立 title，不与其他页重复 | Google：避免样板化/重复标题 |
| P2 | 描述性，不用 `Home` / `Guide` 这类空标签 | Google：避免模糊标签 |
| P3 | 与页面主内容一致；语言与正文一致 | Google：标题语言须匹配内容 |
| P4 | 不堆关键词、不重复同一短语 | Google：避免 keyword stuffing |
| P5 | 品牌名放末尾，用 `·` / `-` / `\|` 分隔，且简短 | Google：品牌标题要简短 |
| P6 | 只有一个「主标题」在视觉上突出 | Google：多个同样突出的标题会被误判 |
| P7 | 长度 **40–60 字符**（项目口径；Google 无硬上限，超长按设备宽度截断） | 项目 `STRATEGY-内容生产.md` |

### 4.2 描述（`<meta name="description">`）

| # | 规则 | 依据 |
|---|---|---|
| P8 | 每页唯一，不复用、不近似 | Google：避免多页复述同一描述 |
| P9 | 具体：写清这页解决什么，可含版本/日期/价格等 | Google：优先含具体信息 |
| P10 | 不堆关键词串，不是标题的复述 | Google |
| P11 | 长度 **140–160 字符**（项目口径） | 项目 `STRATEGY-内容生产.md` |

> Google 会用正文自动生成摘要，description 只是候选。**写歪了不一定显示，但写差了一定是浪费。**

### 4.3 正文结构

| # | 规则 | 依据 |
|---|---|---|
| P12 | 有且仅有 **1 个 `<h1>`**，与 title 主题一致 | Google：主标题要唯一、可辨识 |
| P13 | H2 不跳级，用**问题式小标题** | 精选摘要与 AI 引用的最小单元 |
| P14 | 首段 **40–60 词直接给答案** | 同上 |
| P15 | 正文 **≥ 1,200 词**（FAQ 可 800） | 项目口径 |
| P16 | 正文在**初始 HTML** 里，不靠 JS 渲染 | Google：可索引内容 |
| P17 | 有可见的「最后更新时间」 | 时效内容必需 |
| P18 | 至少 3 条指向站内其他页的**上下文**内链 | Google：重要页至少被一个页面链接 |

### 4.4 结构化数据

| # | 规则 |
|---|---|
| P19 | 内页用 `Article` / `NewsArticle` / `BlogPosting` 其中**一种**类型 |
| P20 | 建议字段：`headline`、`image`、`datePublished`、`dateModified`、`author.name` |
| P21 | JSON-LD 里的 URL、标题、日期与页面实际一致（不一致 = 误导） |
| P22 | FAQ 页用 `FAQPage`；没有 FAQ 区块的页不要硬加 |

### 4.5 「人优先」三条自检（Google 原文框架）

| 维度 | 问题 | 本项目怎么满足 |
|---|---|---|
| **Who** | 访客能看出这是谁做的吗？ | `/about`、`/contact` 有实质内容，不是占位 |
| **How** | 内容怎么来的说得清吗？ | 来源标注（`keyword-results/{slug}-sources.md`）+ 更新时间 |
| **Why** | 主要是为人写，还是为排名写？ | 只为排名建页 = 违反 spam 政策 |

> 一条红线：**「Automation is not used mainly to manipulate rankings」**。
> 用 AI 批量生成只为吃排名的空页，属 spam 政策范畴，不只是「质量低」。

---

## 五、本网络实测缺口（2026-10-29，未修）

以下为实际抓取结果，**不是推测**。

### 5.1 canonical：8 类静态页一个都没有

```bash
dig @1.1.1.1 +short aincradwiki.vercel.app A        # → 64.29.17.3（本机 DNS 被污染，必须先取 IP）
curl -s --resolve aincradwiki.vercel.app:443:64.29.17.3 \
  https://aincradwiki.vercel.app/faq | grep -c 'rel="canonical"'          # → 0
curl -s --resolve aincradwiki.vercel.app:443:64.29.17.3 \
  https://aincradwiki.vercel.app/guides/beginner-guide \
  | grep -o '<link rel="canonical"[^>]*/>'
# → <link rel="canonical" href="https://aincradwiki.vercel.app/guides/beginner-guide"/>
```

根因：canonical 只写在 `generateGuideMetadata()`（`lib/metadata.ts` 的
`alternates.canonical`）里；`/`、`/guides`、`/faq`、`/tier-list`、`/about`、
`/contact`、`/privacy`、`/terms` 走 layout 静态 metadata，没有 `alternates`。

影响：单 origin 下 Google 会自选规范页，损失有限；**但迁自有域名做 301 时，
没有 canonical 的页面会把信号留在旧 URL**。迁移前 MUST 补齐。

### 5.2 title / description 大面积超出项目口径

扫描 51 站 1,142 篇攻略 frontmatter：

| 项 | 超范围 | 占比 |
|---|---|---|
| title 不在 40–60 字符 | **700** | 61% |
| description 不在 140–160 字符 | **996** | 87% |

抽样线上页（`aincradwiki/guides/beginner-guide`）：title 78 字符、description 197 字符。
其余项正常：H1 = 1、`ld+json` 6 块、`Article` 存在、图片 alt 齐全、内链 5 条。

### 5.3 已合规、无需再动的项

`/sitemap.xml` 200（47 条）、`/robots.txt` 200 且 `Sitemap:` 同 origin、
不存在的路径真 404、H1 唯一、图片 alt 齐全、结构化数据存在。

---

## 六、一页上线前的验收单（复制使用）

> 验收单是**人工读稿**用的；部署后的机器闸是 `node scripts/seo-check.mjs --site <site> --live`，
> 两者都要过。谁跑、谁修见 §7.1。

```
[ ] title 40–60 字符、与本页一致、不与站内他页重复
[ ] description 140–160 字符、具体、不复用
[ ] 1 个 H1，与 title 主题一致
[ ] 首段 40–60 词直接给答案
[ ] 正文 ≥1,200 词，在初始 HTML 里
[ ] 有「最后更新时间」
[ ] ≥3 条上下文内链，锚文本描述性
[ ] 图片全部有描述性 alt
[ ] Article JSON-LD，字段与页面一致
[ ] canonical 指向自身，origin 与 sitemap 一致
[ ] 无 noindex
[ ] 线上 200，移动端正文可见，广告不挡内容
```

---

## 七、命令

### 7.1 主检查器：`scripts/seo-check.mjs`

本 skill 的 S1–S15 / P1–P22 已落成脚本，**新站上线后 MUST 以它为准**，不要手工逐条看。

```bash
node scripts/seo-check.mjs --site <site>                 # 本地结构 + frontmatter + 正文
node scripts/seo-check.mjs --site <site> --live          # 另抓线上 HTML（自动 dig 取真实 IP）
node scripts/seo-check.mjs --site <site> --live --report .agent/seo-fix-<site>.md
node scripts/seo-check.mjs --all                         # 51 站基线
node scripts/seo-check.mjs --site <site> --json          # 机器可读，供 Agent 消费
node scripts/seo-check.mjs --site <site> --strict        # WARN 也算失败（新站闸用）
```

退出码：`0` 通过 / `1` 不通过 / `2` 用法错误。

**严重度分工**（`--strict` 会把 WARN 也当失败）：

| 级别 | 包含 | 谁修 |
|---|---|---|
| **ERROR** | 缺文件、robots 挡站、noindex、`<h1>` 不唯一或渲染器产出 `<h1>`、缺 title/description、title/description 站内重复、图片无 alt、软 404、sitemap 漏页、页面非 200 | 内容层（frontmatter、图片 alt）建站自己改；结构与组件层写 `.agent/seo-fix-<site>.md`（`--report` 生成）交主 Agent |
| **WARN** | 字数、title/desc 长度、首段词数、内链数、标题跳级、canonical（**用户 2026-10-29 明确：canonical 与长度两项暂不处理**） | 记录，不阻塞 |

**判定链**：建站协调员跑 → exit 0 才交 QA → QA 用同一条命令复核，exit 0 才判 PASS。
本地层已并入 `deploy-wiki-site.sh` 第 0d 步（阻断式），部署后仍 MUST 手动跑一次 `--live`。
MUST NOT 靠删页面、下线路由、把正文挪进 JS、加 noindex 让检查变绿。

注意：`P-WORDS` 是项目内容口径（Google 无字数要求），因此是 WARN；它由
`scripts/lint-guides.mjs` 在写作阶段拦，不靠 SEO 检查兜。

### 7.2 配套脚本（各管一段，不要互相替代）

```bash
node scripts/check-site-residue.mjs <site>      # 跨站残留（S1）
node scripts/check-ad-slots.mjs <site> [--live] # 广告位覆盖（S14）
node scripts/lint-guides.mjs <site>             # 正文规格：占位符、sources、H1 数量
node scripts/keyword-coverage.mjs --slug <slug> --check   # 页面矩阵落地率（L3/L4）
```

### 7.3 手工复核（脚本查不到的：视觉、移动端、锚文本）

```bash
# MUST 先 dig 取真实 IP，本机 DNS 对 vercel.app 有污染，裸 curl 会误判
IP=$(dig @1.1.1.1 +short <site>.vercel.app A | head -1)
curl -s --resolve <site>.vercel.app:443:$IP https://<site>.vercel.app/<path> | grep -o '<a [^>]*>[^<]*'
```

---

## 八、MUST NOT

- MUST NOT 只按「有 title 有 description」判合规 —— 长度、唯一性、与内容一致性同样算。
- MUST NOT 用 `noindex`、robots.txt 或 URL 移除工具做规范化。
- MUST NOT 让 canonical 与 sitemap / 内链 / 301 指向不同 URL。
- MUST NOT 用 `javascript:`、`onclick`、无 `href` 的 `<a>` 做站内跳转（Google 抓不到）。
- MUST NOT 无脑堆关键词（title、description、anchor text 都算）。
- MUST NOT 把不存在的错误地址 301 回首页。
- MUST NOT 裸 `curl` 访问 `*.vercel.app`（本机 DNS 污染，会误判站点故障）。
- MUST NOT 为了排名批量生成空页 —— 这是 spam 政策问题，不是「质量待提升」。

---

## 九、来源

**Google 官方**
- Search Essentials（三道门槛 / spam 政策 / 最佳实践）：`developers.google.com/search/docs/essentials`
- 技术门槛：`.../essentials/technical`
- Title link：`.../appearance/title-link`
- Snippet：`.../appearance/snippet`
- Canonical 与重复页：`.../crawling-indexing/consolidate-duplicate-urls`
- 可抓取链接：`.../crawling-indexing/links-crawlable`
- 人优先内容（Who/How/Why）：`.../fundamentals/creating-helpful-content`
- Article 结构化数据：`.../appearance/structured-data/article`

**生财有术圈内实操（2026-10-29 检索）**
- 林广恩《从 0 到 1 做出游戏攻略站》`scys.com/articleDetail/xq_topic/14425582851488282`
  → 五层诊断、canonical origin 事故、任务卡
- 袁锐钦《不会写代码，怎么做靠 Google 广告赚钱的游戏攻略站？》`.../14425544145221552`
  → 首日页型优先级、收录三件事、游戏名密度
- 飞书「游戏站交付看板 → 总结与记录」（`docx/FtiSdGYIooYpJlxDM5ZcSU7onJj`）
  → 三层页面架构、首页模块标配、TDH 维护规则、上线前页面控制

**与本项目口径的差异（按项目执行）**

| 飞书总结的说法 | 本项目口径 |
|---|---|
| 新站上线 2–7 天无流量且热度下滑即放弃 | D+30 标 `观察`，D+90 才止损 |
| 日 UV < 1000 不必做外链 | PV30 ≥ 50 且上线 ≥ 30 天即进外链名单 |
| 每页放 2–3 个广告 | 固定 2 个位（`global` + `guide`），且必须在 layout 层统一挂 |
| 已进首页的页面禁止改 TDH | 采纳：已获排名的页不动 TDH，只新增内页 |
