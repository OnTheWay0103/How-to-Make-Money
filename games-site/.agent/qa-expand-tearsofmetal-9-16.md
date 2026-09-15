# QA 报告 — tearsofmetalwiki 内容扩充 9/16

> 任务编号：`EXPAND-2026-09-16-tearsofmetal`
> 站点：`tearsofmetalwiki`
> QA 范围：本轮全部改动（1 新指南 + 4 处修改）
> QA 时间：2026-09-16
> QA 依据：`docs/agents/05` + `06`（QA 审核员 Profile）快速档
> 结论：**PASS**（🔴 0 / 🟡 4；其中 1 项 🟡 为**存量**编造嫌疑，非本轮引入）

---

## 一、本轮改动清单（审计对象）

| # | 文件 | 类型 |
|---|------|------|
| 1 | `content/guides/barracks-statues-guide.md` | **新增** |
| 2 | `content/guides/village-upgrade-guide.md` | 修改（Scope 注记 + related + Related Guides） |
| 3 | `content/guides/battalion-companion-guide.md` | 修改（Scope 注记 + Related Guides） |
| 4 | `content/guides/co-op-guide.md` | 修改（村庄升级共享表述，第三处矛盾点） |
| 5 | `app/page.tsx` | 修改（P0 #2 co-op FAQ 答案） |
| 6 | `app/faq/page.tsx` | 修改（P0 #2 co-op FAQ 答案） |

---

## 二、残留扫描

| 检查项 | 方法 | 结果 |
|--------|------|------|
| EX-Mod 跨站模板残留 | `grep -rniE "EX-Mod\|exmod\|EX Mod"` over `content/ app/ components/ lib/` | ✅ **0 命中** |
| 跨站站名残留 | 同上 grep 覆盖 `grainrot\|spiritvale\|witchspire\|mistfall\|aincrad\|themound\|sephiria\|taival\|yourdailyshells` | ✅ **0 命中** |
| CJK 残留（中日韩字符） | `grep -rnP '[\x{4e00}-\x{9fff}\x{3040}-\x{30ff}\x{ac00}-\x{d7af}]'` | ⚠️ 1 命中 → **核查为合法引用，见 §三** |
| 模板占位符残留 | 人工阅 `.md` 全文 | ✅ 无 `TODO` / `XXX` / `Lorem` / `{{` |
| 新页线上 CJK | 线上 HTML 扫描 CJK | ✅ 0 |
| 新页线上 EX-Mod | 线上 HTML 扫描 | ✅ 0 |

---

## 三、CJK 命中核查（误报排除）

`content/guides/healing-guide.md:22`

```
…Steam reviewers in Japanese put it plainly — **"回復コストが高すぎる"** (healing costs too high) ([gamelog-jp aggregation](https://gamelog-jp.com/game/1913120/)).
```

**判定：合法。** 这是**带英文翻译与来源链接的日语 Steam 评测原文引用**，符合"社区来源需可追溯"要求。不是残留、不是漏水。**不改。**

---

## 四、内容抽查 / 编造检查

### 4.1 新页 `barracks-statues-guide.md`

| 检查项 | 方法 | 结果 |
|--------|------|------|
| 词数 | 剥离 frontmatter 后计词 | ✅ **1496**（区间 800–1500） |
| frontmatter 完整性 | 对比既有指南字段 | ✅ title / description / category / version / updated / keywords / related / sources 齐全 |
| `related` 目标存在性 | 6 个 slug 逐一比对 `content/guides/` | ✅ 全部存在 |
| 三档来源 | Official / Community / Editorial | ✅ **8 条：4 Official / 3 Community / 1 Editorial** |
| 来源链接可追溯性 | 逐一检查域名与路径 | ✅ 官方均指向 `store.steampowered.com/news/app/1913120`；社区给全域名+路径；不可直连的显式注明 |
| 官方引用**逐字**核验 | 与 ISteamNews 抓取正文（9/16 实测 200，17,129 B / 60,150 B）对读 | ✅ 9/8 / 8/13 / 8/1 / 7/24 四段引文均**逐字一致** |
| 数字有源 | 全篇数字清点 | ✅ Barracks 2 Statues → `[Unconfirmed]`；+20% Ally Command Damage → 标为 community-reported；Companion "0 of 2" → 标为社区截图；每级 Statue 价格 → `[Unconfirmed]` |
| `[Unconfirmed]` 计数 | 正文标记 | ✅ **7 处**（构建后 HTML 16 处，含 frontmatter/related 渲染重复） |
| 社区报告列归属 | 表格 ✅ 列脚注 | ✅ 已加 `*✅ = community-reported, not from Paper Cult. Statues trip people up.*` |
| 官方 vs 推断边界 | 3 条 "Three things follow" 是否为官方原文 | ✅ 官方原文只说前置放宽；三条推论在正文中显式标为推论，未冒充官方 |
| 已知命名陷阱处理 | "Small Burning Statues" | ✅ 显式区分（地图物件买 Dragonstone vs Statue 军队货币），直接引官方原文 |
| 兵种命名 | 是否使用官方词 | ✅ 用 **Infantry / Spearmen / Archers**（官方词），并加命名警示段 |
| roadmap 冒充已上线 | 是否把 Phase 2/3 当已发布内容 | ✅ **未提及 roadmap** |
| 自噬检查 | 与 `village-upgrade-guide` / `battalion-companion-guide` 重叠度 | ✅ 双向 Scope 注记切分（军队侧 between-run vs 建筑侧 / in-run 侧），无内容重复 |

### 4.2 修改文件

| 文件 | 检查项 | 结果 |
|------|--------|------|
| `app/page.tsx` | 新措辞 + `[Unconfirmed]` 标注；旧矛盾串清零 | ✅ 构建后 & 线上均为新措辞 4 处，旧串 0 |
| `app/faq/page.tsx` | 同上 | ✅ 新措辞 3 处，旧串 0 |
| `content/guides/co-op-guide.md` | 第三处矛盾点一次改齐 | ✅ 表格行 + "The Host Advantage" bullet 双改，新措辞 2 处，旧串 0 |
| `content/guides/village-upgrade-guide.md` | Scope 注记 + 无内容删除 | ✅ 仅新增，未删既有内容 |
| `content/guides/battalion-companion-guide.md` | Scope 注记 + 无内容删除 | ✅ 仅新增，未删既有内容 |

### 4.3 一致性（04 Profile：事实修正 MUST 全站一次改齐）

全站 grep 村庄升级共享表述的**三个**出现位置：

| 位置 | 改前 | 改后 |
|------|------|------|
| `app/page.tsx` | "apply to all" | 统一 `[Unconfirmed]` 措辞 |
| `app/faq/page.tsx` | "individual to each player" | 统一 `[Unconfirmed]` 措辞 |
| `content/guides/co-op-guide.md` | "Not officially documented" + 暗示 guest 不生效 | 统一 `[Unconfirmed]` 措辞 |

✅ 三处措辞**逐字一致**，线上复验全部通过。

---

## 五、构建产物验证（产品级，非仅读源码）

| 检查项 | 方法 | 结果 |
|--------|------|------|
| `pnpm install` | 站点目录内 | ✅ exit 0 |
| `pnpm build` | — | ✅ 成功，48 静态页，TypeScript 通过 |
| 新页预渲染 | 构建输出 SSG 列表 | ✅ `/guides/barracks-statues-guide` 在列 |
| **HTML 表格回归**（8/12 共享组件 `ReactMarkdown.tsx` 分隔符 bug 回归项） | 数构建后 HTML | ✅ `<table>`=3 / `<thead>`=3 / `<tbody>`=3；垃圾分隔单元格 `\|---\|` = **0** |
| 内部链接完整性 | 脚本抽取全部构建 HTML 的 `href="/guides/*"` × 35 slug | ✅ **0 断链** |
| 孤儿页修复 | `base-camp-guide` 入站引用计数 | ✅ **0 → 2**（`village-upgrade-guide.md`、`barracks-statues-guide.md`） |
| 字体 | `next/font/google` 使用检查 | ✅ 未使用（geist 自托管，未改动） |

---

## 六、线上验证（`--resolve` 真实 IP，MUST）

本机 DNS 投毒实测：`tearsofmetalwiki.vercel.app` → `128.242.245.253`（不可达）。

真实 IP（当轮 `dig` 实测）：
```
@1.1.1.1 → 216.198.79.3,  64.29.17.3
@8.8.8.8 → 216.198.79.195, 64.29.17.195
```

| URL | 4 IP 一致结果 |
|-----|---------------|
| `/guides/barracks-statues-guide` | ✅ **HTTP=200 / 72,986 B** |
| `/` | ✅ HTTP=200 / 56,677 B |
| `/faq` | ✅ HTTP=200 / 42,439 B |
| `/guides/co-op-guide` | ✅ HTTP=200 / 71,832 B |
| `/guides/village-upgrade-guide` | ✅ HTTP=200 / 71,278 B |
| `/guides/battalion-companion-guide` | ✅ HTTP=200 / 92,694 B |
| `/guides/base-camp-guide` | ✅ HTTP=200 / 50,930 B |
| `/guides` | ✅ HTTP=200 / 112,465 B |
| `/sitemap.xml` | ✅ HTTP=200 / 7,972 B |

**新页线上抽查（全 ✅）：** 标题存在、9/8 官方引文存在、"More Statue Region rewards" 存在、Aodh 引文存在、"+20% Ally Command Damage" 存在、3 表、7 处 `[Unconfirmed]`、3 条内链（→ village / battalion / base-camp）、无 CJK、无 EX-Mod。

**新页收录验证：** `/guides` 列表命中 1 次、`sitemap.xml` 命中 1 次。

**部署：** `dpl_Di8stiPke1c5xiHq6ksMfqYsgcXE`，生产别名 `tearsofmetalwiki.vercel.app` ✅ 已指向本部署。

> 无 HTTP=000 / size=0 记录，全部实测有效。

---

## 七、失败项汇总

**🔴 严重：0 项**

**🟡 提示：4 项**

| # | 项 | 性质 | 说明 |
|---|----|------|------|
| 1 | `battalion-companion-guide.md` 兵种/Companion 列表与官方冲突 | **存量**（非本轮引入） | 该页列 5 个具名 Companion（Fergus / Morag / Brochan / Ailsa / Torcall）及具体解锁条件与技能效果，并给出兵种基础 HP、技能树每级数值、各 Act 招募横幅数量（3/4/2）、Tent 各等级解锁表 —— **官方从未发布任何一项**；官方补丁 note 只用 Infantry/Spearmen/Archers，且只点名过 Aodh, the Vigil。虽有一句 community-reported 免责，但随后给出精确数值，属**编造嫌疑 / AdSense 合规风险**。**本轮未修改（超出任务范围）**，建议主 Agent 优先事实清扫。本轮新指南刻意只用官方兵种名并加命名警示段，未与该页正面冲突，但两页并存口径不一。 |
| 2 | `village-upgrade-guide.md` 建筑覆盖不全 | 存量 | 仅 5 栋建筑，缺 Barracks / Market / Cartographer。按**不完整**（非错误）处理，已加 Scope 注记指向新页。 |
| 3 | 部分来源渠道当轮不可直连 | 采集约束 | `gameshorizon.com` HTTP **503**、`thegameswiki.com` HTTP **429**、Steam 社区讨论 **HTTP=000**。新页已显式注明经搜索索引取用（"via search index (the live page returned HTTP 503 on September 16, 2026)"），**未冒充已读原文**。 |
| 4 | `healing-guide.md:22` CJK | **误报** | 合法日语评测原文引用 + 英文翻译 + 来源链接。非残留。 |

---

## 八、规则闭环建议

1. **（针对 🟡 #1）** 存量"community-reported 免死金牌"问题：一句免责声明 + 随后精确数值，不等于合规。建议在 06 Profile 增加规则：**社区来源给出的具体数值/具名清单，若官方存在但未公布对应内容，MUST 整体删除或降级为无数字的描述，MUST NOT 只加一句免责后照写。**（与前几轮「角色编造内容闭合」同类，themoundwiki 9/16 已有先例。）
2. **（针对 P0 #2 的发现）** 同一事实矛盾出现在 **3 处**（两处 `app/*.tsx` + 一处 `content/guides/*.md`），而 qa-report §六 只登记了 2 处。建议 04 Profile 的「全站 grep 关联引用」检查清单明确包含 **`content/guides/` 目录**，不只 `app/`。
3. **（渠道）** Steam 社区讨论直连长期 HTTP=000，本机 DNS 投毒已可解释部分现象；建议在采集 Profile 里把"Steam discussions 经搜索索引"固化为**降级路径**并强制标注，避免后续 Agent 把索引摘要当原文引用。

---

## 九、QA 判定

| 维度 | 结果 |
|------|------|
| 残留扫描 | ✅ PASS |
| 编造检查（本轮新增内容） | ✅ PASS |
| 来源三档 + 可追溯 | ✅ PASS |
| 数字有源 / `[Unconfirmed]` | ✅ PASS |
| 自噬检查 | ✅ PASS |
| 词数合规 | ✅ PASS（1496） |
| 构建产物（含共享组件表格回归） | ✅ PASS |
| 内部链接完整性 | ✅ PASS（0 断链） |
| 线上验证（`--resolve`） | ✅ PASS（9/9 URL HTTP 200） |
| P0 #2 一致性（一处改齐 3 位置） | ✅ PASS |
| P0 #8 孤儿页 | ✅ PASS（0 → 2 入站） |

### **总判定：PASS**（🔴 0 / 🟡 4，其中 3 项为存量或采集约束，1 项为误报）
