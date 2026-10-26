# games-site — 游戏攻略站网络

> 通用约定见父级 `../CLAUDE.md`（仓库信息、Claude Code 配置、手机工作流等）。

## Agent 体系（MUST 遵守）

本项目有 10 个正式 Agent 岗位，岗位卡 + Profile 在 `docs/agents/`：

| Agent | 岗位卡 | Profile | 职责 |
|-------|--------|---------|------|
| 主 Agent（统筹） | 07 | 08 | 任务拆解、接力派发、验收、commit/deploy、规则闭环 |
| 游戏侦察员 | 11 | 12 | **只发现**：多源扫描 + 硬筛 + 证据链接入池（`待分析`），不评分不查 wiki |
| 候选分析员 | 22 | 23 | 硬门槛 → 6 条竞争查询 → 四维评分 → 成本回本 → `selection-{date}.md` |
| 关键词研究员 | 13 | 14 | Google Suggest 采集、去噪分类、命中率分析 |
| 建站协调员 | 03 | 04 | 选游戏→建站→部署流水线（当前 ⏸️ 暂停） |
| QA 审核员 | 05 | 06 | 残留扫描、编造检查、PASS/FAIL 报告 |
| 内容合规审计员 | 01 | 02 | 内容合规审计（事实核验、断言清理、信任页）；AdSense 专项暂缓 |
| 性能监控员 | 15 | 16 | PV/UV 分析、重点站标记、扩充建议（⏸️ 暂停） |
| 生命周期管理员 | 20 | 21 | 月度分级 A/B/C/D、止损与恢复、回填站点台账 |
| 玩家反馈分析师 | 17 | 18 | Reddit+Steam 评论分析、内容缺口报告（⏸️ 暂停） |

执行规则：
- 派发子 Agent MUST 使用接力格式（任务编号/材料版本/完成标准/停止条件/MUST NOT）
- 派发子 Agent MUST 在指令中引用其岗位卡/Profile 文件路径（如「先读 docs/agents/03 + 04」）
- 派发子 Agent MUST 在指令中说明交接物（上游交付什么文件、下游检查什么）— 完整契约见 `docs/agents/19-全岗位交接关系.md`
- 验收 MUST 有证据链（build 输出 + 部署后线上验证）
- 出现新问题 MUST 更新对应 Profile（规则闭环），MUST NOT 只说「下次注意」
- 单点修改（1-2 文件）主 Agent 直接做；批量（3+ 文件）派子 Agent

## 交接协议（精简版，MUST 遵守）

Agent 之间不直接对话，通过**文件契约**交接：

| 交接 | 交接物 | 文件 | 检查方 |
|------|--------|------|--------|
| 侦察员 → 候选分析员 | 候选清单（`待分析`） | `keyword-results/CANDIDATE-POOL.md` | 分析员复核硬筛与证据链接 |
| 分析员 → 关键词研究员 | 需采集清单 | `CANDIDATE-POOL.md` 状态 `需采集` | 研究员按 slug 采词 |
| 分析员 → 主 Agent | 评分报告 + 池内分数 | `keyword-results/selection-{date}.md` | 主 Agent 复核依据链后决策 |
| 关键词研究员 → 建站协调员 | 关键词报告 | `keyword-results/{game}.md` | 建站协调员检查主题覆盖 |
| 建站协调员 → QA | 站点目录 | `games-site/{site}wiki/` | QA 按 Profile 全检 |
| QA → 主 Agent | QA 报告 | `.agent/qa-report.md` | 主 Agent 按 PASS/FAIL 决策 |
| 合规审计员 → 主 Agent | 审计报告 | 工作区修改 + 报告 | 主 Agent 验收证据链 |
| 监控员 → 主 Agent | 监控报告 | `.agent/monitor-report.md` | 主 Agent 决策扩充 |
| 生命周期管理员 → 主 Agent | 分级报告 + 台账分级 | `.agent/lifecycle-report.md` + 站点台账(自动化) | 主 Agent 决策加码/止损 |
| 反馈分析师 → 主 Agent | 反馈报告 | `keyword-results/{game}-feedback.md` | 主 Agent 决策补缺口 |

核心接力（唯一 Agent↔Agent 前后交接）：**建站协调员 → QA 审核员**（PASS/FAIL 分流）。

## 项目概述

基于 **Next.js 静态站点 + Vercel** 的游戏攻略站矩阵，通过 Google 搜索获取自然流量，目标 Adsterra 变现（AdSense 2026-10-25 起暂缓）。

## 战略基线（MUST 遵守）

> 完整规则见 `docs/STRATEGY-生命周期与止损.md`。这里只放会被反复用到的硬约束。

- **模式**：概率生意，多站长尾铺量。单站跑通线 = **30 天 PV ≥ 300**（不是原帖的"日 UV 50"）
- **内容口径**：**页型 + 词数**，不数篇数。首批 5–8 页、5 类页型（codes / 新手 / tier list / 核心机制或 boss / FAQ）、总词数 ≥ 8,000、单篇 ≥ 1,200；**D+30 ≥ 15–20 页**
- **页面矩阵**：一个搜索意图 = 一个内页；每站先出 `keyword-results/{slug}-matrix.md`（词 → 页 → 意图 → 素材源 → 优先级），MECE 分组、禁止 `gameplay`/`general` 这类大空类；页型是候选池不是必建清单
- **素材**：每页 ≥2 个独立来源且 ≥1 官方（Steam/官网/官方公告/官方视频），写进 `keyword-results/{slug}-sources.md`（URL + 抓取日期）；AI 只做过滤整理，搜索建议与竞对正文不算事实来源
- **写作**：title 40–60 字符、description 140–160、有且仅有 1 个 H1、首段 40–60 词直答、正文 ≥1,200 词；同类页每批 ≤5 篇，**批量前先做透单页**
- **建站模板**：三层分离（框架 `app/`+`components/` / 配置 `lib/` / 内容 `content/`）；新站 MUST 用 `node scripts/new-site.mjs` 从 `templates/wiki-base/` 生成（2026-10-26 建成），MUST NOT 从在运营站复制
- **节奏**：**每天 ≥ 5 个新站**（≈ 每月 150 站）；每站上线后 4 周内每周 +5–10 页
- **台账**：每月**两张表**（2026-10-26 起）—— `站点台账(自动化)YYYY-MM`（脚本写：PV/环比/分级/攻略数）+ `站点台账(人工)YYYY-MM`（人写：GA4 ID / GSC 状态 / 三个广告位代码，填了=人工做完了）。新月份 `node scripts/roll-month-ledger.mjs --month YYYY-MM --apply` 一次建两张；脚本按 `站点台账(自动化)|(人工)YYYY-MM` 解析表名，缺表报错
- **人工回填**：人工表的值由 `sync-ledger-manual.mjs` 每天 **20:00**（launchd `com.games-site.sync-ledger-manual`）回填进站点并部署，**只部署有改动的站**、单次上限 10 站。GSC 列纯提醒、`广告位3-todo-code` 占位，程序都不写。人工表最后一列 **`自动化状态` 由程序回写**：`已完成`（填了的项都已上线）/ `待回填`（填了但还没落地）/ `失败`（下轮强制重部署）/ 空（还没填）
- **检查点**：D+30 看索引（GSC 收录 ≥ 50%）、D+60 看进词、D+90 看排名点击；**D+90 前不做止损判断**
- **止损**：D 档 = 30 天 PV < 50 且上线 ≥ 90 天且环比 < +30% → **停止投入 + 台账标记 `不再维护`**；MUST NOT 删站、下架、改代码
- **模板**：当前只用一套 wiki 模板，**模板差异化暂不做**，等整条建站流程理通顺后再增加
- **数据来源**：流量一律取 `dashboard /api/traffic`，MUST NOT 编造或估算；取不到时报"不可判定"，不许当 0
- **挖词**：MUST 用 `node scripts/harvest-keywords.mjs --game "官方写法" --slug ... --genre ... --write`；锚定词带空格、固定 `hl=en&gl=us`、先裸词（三条实测教训见 `docs/STRATEGY-挖词与词库.md` 3.1）
- **每条词 MUST 带来源**（`渠道:细节`，如 `google_suggest:后缀:codes`）；**有效词 ≥20** 才进建站评分，否则判「搜索需求低」
- **采集节奏**（按**美东时间** America/New_York 排期）：发现轮每天 2 次（美东上午 08:00–09:00、下午 15:00–16:00，实际 launchd 固定本机 21:00 / 次日 04:00，换算依据见 `auto-build-site.plist` 注释）；扩词轮（周二/周五）与复盘轮（周一）当前含在发现轮全流程内、未单独排期；全部轮次 MUST 避开 DeepSeek 高峰期（工作日 09:00–12:00、14:00–18:00 北京时间），走半价。排期口径 MUST 先按美东窗口换算成固定本机时刻，并在 plist 注释里写清换算依据（launchd 无法按 job 设 `TZ`），MUST NOT 只看本机时刻随手排
- **词库索引**：`keyword-results/INDEX.md` 由 `node scripts/keyword-index.mjs` 生成，MUST NOT 手改
- **选词**：四维 = **需求 / 竞争 / 内容扩展 / 生命周期**（各 0–5，总分 20）；「变现」移入成本模型、「可行性」并入内容扩展。≥17 可建 / 15–16 观察 / 12–14 低优先 / <12 放弃
- **需求**：有效词 ≥20 是门禁；**攻略型词占比 <30% → 需求封顶 3 分**（发售日陷阱）；需求信号只有单一来源 → 封顶 3 分（双源规则）
- **竞争**：只数「专门攻略站」（独立域名+围绕该游戏+持续更新），厚站计 1、薄站计 0.5；**`P = T + 0.5t ≥ 3` 直接放弃**；Reddit/Steam/YouTube/大站单篇不计
- **竞争检查**：固定 6 条查询（EN wiki/guide/codes + ZH 攻略/wiki + JA 攻略），逐条记前 10 域名与 URL，MUST NOT 只跑一条就写「零 wiki」
- **内容扩展**：可写独立页 ≥20 才够 4 分；「可写」必须有可核验来源，搜索建议不算
- **成本**：台账加 `建站成本(元)` / `实际人工小时` / `预估回本PV`；回本 PV = 成本 ÷ (RPM/1000)，RPM 用 **$1–5/千次**（第三方基准，标来源与日期）；口径是**组合回本**，不是单站回本
- **分析轮**：**美东下午轮（15:00–16:00）内执行**，`待分析` ≥5 触发；产出 `keyword-results/selection-{date}.md`
- **选词完整规则**见 `docs/STRATEGY-选词与评分.md`；岗位是候选分析员（`docs/agents/22` / `23`）
- **变现**：**AdSense 暂缓（2026-10-25）**，只走 Adsterra；新站不注入 `ca-pub`，存量站代码不动（见 `docs/STRATEGY-域名与部署.md` 第六节）
- **域名**：当前维持 `*.vercel.app` 子域（2026-11-25 复盘）；风险 = URL 绑定托管账号，换账号即换 URL；将来迁移 MUST 先 301
- **托管**：当前 Vercel Hobby 单账号；Hobby 条款禁止商业用途、多账号分摊属规避限制，风险记在节点 18 备注；2026-11-25 复盘 Pro / Cloudflare
- **广告位**：每站 Adsterra `global`（Social Bar）+ `guide`（Native Banner）两个位；代码先填飞书「站点台账(人工)」两列 → 20:00 回填脚本写「广告位管理」→ `adsterra-sync.mjs` 注入，MUST NOT 手改「广告位管理」或站点代码
- **GA4**：暂维持人工建 property；每站 MUST 把 Dashboard 服务账号加为该 property 的读取者，否则看板无数据

## 站点矩阵

| 站点 | 目录 | 搜索词 | 攻略数 | 状态 |
|------|------|--------|--------|------|
| Witchspire Wiki | `witchspirewiki/` | 88 | 18 | ✅ |
| Mistfall Hunter Wiki | `mistfallhunterwiki/` | 89 | 22 | ✅ |
| Echoes of Aincrad Wiki | `aincradwiki/` | 107 | 17 | ✅ |
| The Mound Wiki | `themoundwiki/` | 46 | 10 | ✅ |
| SpiritVale Wiki | `spiritvalewiki/` | 116 | 10 | ✅ |
| **Dashboard** | `dashboard/` | — | — | ✅ |

## 技术栈

Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Vercel + GA4 + GSC + Recharts

## 依赖与磁盘约定（MUST 遵守）

> 2026-09-09 起生效。此前 41 站各自 npm 平铺 node_modules 共占 ~18.7G；改用 pnpm 全局 store 后全部依赖仅占 **~479M**（唯一副本 + 硬链接共享）。

- wiki 站依赖管理 **MUST 用 pnpm**，MUST NOT 用 npm（npm 平铺会每站复制 ~460M）
- 每站 `pnpm-lock.yaml` MUST 入库；MUST NOT 提交 `node_modules/`
- wiki 站**日常不保留 node_modules**（省磁盘）；QA/build 前在目标站 `pnpm install`，store 秒级链接
- 各站 node_modules 用 `du` 相加会偏大，属硬链接统计错觉，实际磁盘只有一份
- `dashboard/` 与仓库根目录保留 npm，不纳入 pnpm 范围
- **字体 MUST 用 geist 自托管**（`geist/font/sans` + `geist/font/mono`）；MUST NOT 用 `next/font/google`（fonts.googleapis 被墙，本地 build 必挂）
- 各站 `vercel.json` 的 `installCommand` MUST 为 `pnpm install`
- `.next/` 构建产物可随时清理（可再生），排查磁盘占用时优先查它

## 项目结构

```
games-site/
  <gamename>wiki/                # 独立 wiki 站点（Next.js 静态站）
  dashboard/                     # 流量聚合看板
    app/page.tsx, layout.tsx     # 主页面 + 布局
    app/api/                     # GA4 数据代理 API
    components/                  # React 组件
    lib/                         # GA4 客户端、站点注册表
  keyword-results/               # 关键词调研数据
```

> ⚠️ **旧 harvest 脚本已归档**（`e95cfe1`，7/31）：`harvest-curl.sh` / `harvest-light.mjs` /
> `harvest-keywords-browser.mjs` 在 `docs/archive/`，别再按那些路径找。
> **现行采集器是 `scripts/harvest-keywords.mjs`**（2026-10-25 重建，脚本驱动，见
> `docs/STRATEGY-挖词与词库.md`）。采集前必读：本机 DNS 会把 `suggestqueries.google.com`
> 污染到 `69.63.176.59`（Meta IP）导致 SSL 失败 —— **这不是"被墙"，是 DNS 投毒**；
> 脚本每次现取真实 IP + `--resolve` 直连，不需要代理。

## 核心文档

| 文档 | 用途 |
|------|------|
| `SOP-游戏攻略站上线.md` | **最重要** — 新站上线全流程 |
| `docs/STRATEGY-生命周期与止损.md` | **战略基线** — 内容口径、D+30/60/90 检查点、A/B/C/D 分级与止损 |
| `docs/STRATEGY-挖词与词库.md` | **挖词规范** — 五层渠道、来源标记、采集频率与排期、三问自检、去噪判定、词库命名、GSC 接入 |
| `docs/STRATEGY-选词与评分.md` | **选词规范** — 四维评分锚点、竞争厚薄定义与 `P≥3` 放弃线、需求三道闸门、成本模型、生财口径对照 |
| `docs/STRATEGY-域名与部署.md` | **域名账号规范** — 子域/自有域名决策、Vercel Hobby 限额与风险、GA4 流程、Adsterra 两位配置、AdSense 暂缓 |
| `docs/STRATEGY-内容生产.md` | **内容生产规范** — 页面矩阵 MECE、双源素材、写作规格、批量红线、三层模板、构建门禁（节点 22–34） |
| `docs/RESEARCH-生财手册内容生产对照.md` | **方法论对照** — 生财航海手册内容生产章节总结与取舍记录（2026-10-25） |
| `SOP-AI-Agent开发.md` | Agent 开发方法论与成熟度模型 |
| `STATS-游戏站点统计.md` | 站点状态跟踪（每次建站后更新） |
| `RESEARCH-游戏分类与方法论.md` | 游戏分类体系与运营方法论 |
| `docs/archive/` | 历史文档归档（旧计划、调研、案例分析） |

## 关键词工作流

```
发现轮（每天美东上午 08:00–09:00 + 下午 15:00–16:00）→ 侦察员 → CANDIDATE-POOL.md + discovery-{date}.md
验证轮（建站决策当天）→ 研究员 → scripts/harvest-keywords.mjs --write → keyword-results/{slug}.md
扩词轮（周二/周五下午轮内，仅 A/B 档）→ 研究员 → {slug}-expand-{date}.md
复盘轮（周一上午轮内）→ 研究员 → keyword-results/命中率分析.md（词 → 页面 → PV）
每月 → node scripts/keyword-index.mjs --check → INDEX.md
```

详细规则见 `docs/STRATEGY-挖词与词库.md`；岗位卡 `docs/agents/11`–`14`。

## SOP 上线流程（新站）

选游戏 → 定域名 → 关键词调研 → 准备内容 → 初始化项目（参考已有 wiki）→ GA4+GSC → Vercel 部署 → Dashboard 注册 → 提交 GSC

## 当前优先级

补齐已有站页数/词数（当前最大缺口）→ SEO 优化 → 生命周期分级与止损 → Adsterra 变现优化（AdSense 暂缓）→ 评估新游戏 → Dashboard 完善
