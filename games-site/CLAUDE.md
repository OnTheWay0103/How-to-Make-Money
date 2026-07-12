# games-site — 游戏攻略站网络

> 通用约定见父级 `../CLAUDE.md`（仓库信息、Claude Code 配置、手机工作流等）。

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
| `游戏攻略站上线SOP.md` | **最重要** — 新站上线全流程 |
| `网站优化计划.md` | 基于关键词验证的增量优化清单 |
| `月度开发计划-2026-07.md` | 7 月计划 |
| `候选游戏评估-2026-07-12.md` | 下一批候选游戏 |
| `游戏攻略站.md` | 游戏分类体系与运营方法论 |

## 关键词工作流

采集 → 存储到 `keyword-results/` → 对比命中率 → 决定是否新增攻略

## SOP 上线流程（新站）

选游戏 → 定域名 → 关键词调研 → 准备内容 → 初始化项目（参考已有 wiki）→ GA4+GSC → Vercel 部署 → Dashboard 注册 → 提交 GSC

## 当前优先级

SEO 优化 → 评估新游戏 → Dashboard 完善 → AdSense 接入
