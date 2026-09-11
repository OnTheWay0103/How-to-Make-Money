# games-site — 游戏攻略站网络

> 通用约定见父级 `../CLAUDE.md`（仓库信息、Claude Code 配置、手机工作流等）。

## Agent 体系（MUST 遵守）

本项目有 8 个正式 Agent 岗位，岗位卡 + Profile 在 `docs/agents/`：

| Agent | 岗位卡 | Profile | 职责 |
|-------|--------|---------|------|
| 主 Agent（统筹） | 07 | 08 | 任务拆解、接力派发、验收、commit/deploy、规则闭环 |
| 游戏侦察员 | 11 | 12 | 搜索筛选游戏、wiki 竞争全面检查、四维评分、候选池维护 |
| 关键词研究员 | 13 | 14 | Google Suggest 采集、去噪分类、命中率分析 |
| 建站协调员 | 03 | 04 | 选游戏→建站→部署流水线（当前 ⏸️ 暂停） |
| QA 审核员 | 05 | 06 | 残留扫描、编造检查、PASS/FAIL 报告 |
| 内容合规审计员 | 01 | 02 | AdSense 合规审计、事实核验、断言清理 |
| 性能监控员 | 15 | 16 | PV/UV 分析、重点站标记、扩充建议（⏸️ 暂停） |
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
| 侦察员 → 主 Agent | 候选清单 | `keyword-results/CANDIDATE-POOL.md` | 主 Agent 复核评分依据 |
| 关键词研究员 → 建站协调员 | 关键词报告 | `keyword-results/{game}.md` | 建站协调员检查主题覆盖 |
| 建站协调员 → QA | 站点目录 | `games-site/{site}wiki/` | QA 按 Profile 全检 |
| QA → 主 Agent | QA 报告 | `.agent/qa-report.md` | 主 Agent 按 PASS/FAIL 决策 |
| 合规审计员 → 主 Agent | 审计报告 | 工作区修改 + 报告 | 主 Agent 验收证据链 |
| 监控员 → 主 Agent | 监控报告 | `.agent/monitor-report.md` | 主 Agent 决策扩充 |
| 反馈分析师 → 主 Agent | 反馈报告 | `keyword-results/{game}-feedback.md` | 主 Agent 决策补缺口 |

核心接力（唯一 Agent↔Agent 前后交接）：**建站协调员 → QA 审核员**（PASS/FAIL 分流）。

## 项目概述

基于 **Next.js 静态站点 + Vercel** 的游戏攻略站矩阵，通过 Google 搜索获取自然流量，目标 AdSense 变现。

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

> ⚠️ **harvest 脚本已归档**（`e95cfe1`，7/31）。根目录不再有 `harvest-keywords.mjs` /
> `harvest-light.mjs` / `harvest-curl.sh` —— 全部移入 `docs/archive/`，采集改走
> `.claude/skills/harvest-keywords.md`（Agent 驱动）。**别再按旧路径找脚本**（9/12 有 Agent
> 因此白写了一个采集器）。
>
> 采集前必读（2026-09-12 实测）：本机 DNS 会把 `suggestqueries.google.com` 污染到
> `69.63.176.59`（Meta IP）导致 SSL 失败 —— **这不是"被墙"，是 DNS 投毒**，
> 用 `--resolve` 指定真实 IP 即可直连，不需要代理。

## 核心文档

| 文档 | 用途 |
|------|------|
| `SOP-游戏攻略站上线.md` | **最重要** — 新站上线全流程 |
| `SOP-AI-Agent开发.md` | Agent 开发方法论与成熟度模型 |
| `STATS-游戏站点统计.md` | 站点状态跟踪（每次建站后更新） |
| `RESEARCH-游戏分类与方法论.md` | 游戏分类体系与运营方法论 |
| `docs/archive/` | 历史文档归档（旧计划、调研、案例分析） |

## 关键词工作流

采集 → 存储到 `keyword-results/` → 对比命中率 → 决定是否新增攻略

## SOP 上线流程（新站）

选游戏 → 定域名 → 关键词调研 → 准备内容 → 初始化项目（参考已有 wiki）→ GA4+GSC → Vercel 部署 → Dashboard 注册 → 提交 GSC

## 当前优先级

SEO 优化 → 评估新游戏 → Dashboard 完善 → AdSense 接入
