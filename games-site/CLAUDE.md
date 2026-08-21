# games-site — 游戏攻略站网络

> 通用约定见父级 `../CLAUDE.md`（仓库信息、Claude Code 配置、手机工作流等）。

## Agent 体系（MUST 遵守）

本项目有 4 个正式 Agent 岗位，岗位卡 + Profile 在 `docs/agents/`：

| Agent | 岗位卡 | Profile | 职责 |
|-------|--------|---------|------|
| 主 Agent（统筹） | 07 | 08 | 任务拆解、接力派发、验收、commit/deploy、规则闭环 |
| 内容合规审计员 | 01 | 02 | AdSense 合规审计、事实核验、断言清理 |
| 建站协调员 | 03 | 04 | 选游戏→建站→部署流水线（当前 ⏸️ 暂停） |
| QA 审核员 | 05 | 06 | 残留扫描、编造检查、PASS/FAIL 报告 |

执行规则：
- 派发子 Agent MUST 使用接力格式（任务编号/材料版本/完成标准/停止条件/MUST NOT）
- 验收 MUST 有证据链（build 输出 + 部署后线上验证）
- 出现新问题 MUST 更新对应 Profile（规则闭环），MUST NOT 只说「下次注意」
- 单点修改（1-2 文件）主 Agent 直接做；批量（3+ 文件）派子 Agent

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

## 项目结构

```
games-site/
  <gamename>wiki/                # 独立 wiki 站点（Next.js 静态站）
  dashboard/                     # 流量聚合看板
    app/page.tsx, layout.tsx     # 主页面 + 布局
    app/api/                     # GA4 数据代理 API
    components/                  # React 组件
    lib/                         # GA4 客户端、站点注册表
  harvest-keywords.mjs           # 关键词采集（Google Suggest API）
  harvest-light.mjs              # 轻量版采集
  harvest-curl.sh                # curl 快速验证
  keyword-results/               # 关键词调研数据
```

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
