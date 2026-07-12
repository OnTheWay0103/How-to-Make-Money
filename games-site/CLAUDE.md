# games-site — 游戏攻略站网络

## 项目概述

基于 **Next.js 静态站点 + Vercel 部署** 的游戏攻略资讯站矩阵。每个游戏一个独立 wiki 站点，
通过 Google 搜索获取自然流量，目标是通过广告（AdSense）变现。

## 站点矩阵

| 站点 | 目录 | 状态 | 说明 |
|------|------|------|------|
| Witchspire Wiki | `witchspirewiki/` | ✅ 已上线 | 魔法学院题材，88 个真实搜索词，18 篇攻略 |
| Mistfall Hunter Wiki | `mistfallhunterwiki/` | ✅ 已上线 | 狩猎题材，89 个搜索词，22 篇攻略 |
| Echoes of Aincrad Wiki | `aincradwiki/` | ✅ 已上线 | 刀剑神域题材，107 个搜索词，17 篇攻略 |
| The Mound Wiki | `themoundwiki/` | ✅ 已上线 | 恐怖题材新游，46 个搜索词，10 篇攻略 |
| SpiritVale Wiki | `spiritvalewiki/` | ✅ 已上线 | 新增站点，10 篇攻略 + 116 个关键词 |
| **Dashboard** | `dashboard/` | ✅ 运行中 | Next.js 看板，聚合所有站点数据 |

## 技术栈

- **框架**: Next.js 16 + React 19 + TypeScript
- **样式**: Tailwind CSS 4
- **部署**: Vercel（关联 GitHub 自动部署）
- **分析**: Google Analytics 4 (GA4) + Google Search Console (GSC)
- **图表**: Recharts（Dashboard 用）
- **包管理**: npm

## 项目结构

```
games-site/
  <gamename>wiki/          # 每个游戏的独立 wiki 站点（Next.js 静态站）
  dashboard/               # 流量聚合看板（Next.js + GA4 Admin API）
    app/
      page.tsx             # 主看板页面
      layout.tsx           # 根布局
      api/                 # API 路由（GA4 数据代理等）
    components/            # React 组件
    lib/                   # 工具库（GA4 客户端、站点注册表等）
  keyword-results/         # 关键词调研数据
  harvest-keywords.mjs     # 关键词采集脚本（Google Suggest API）
  harvest-keywords-browser.mjs  # 浏览器版关键词采集（Puppeteer 思路）
  harvest-light.mjs        # 轻量版关键词采集
  harvest-curl.sh          # curl 版快速验证脚本
  node_modules/            # 共享依赖
```

## 核心文档

| 文档 | 用途 |
|------|------|
| `游戏攻略站上线SOP.md` | **最重要**—新站上线全流程，从选游戏到 GA4 到 Vercel 部署 |
| `游戏攻略站.md` | 游戏分类体系与攻略站运营方法论 |
| `游戏攻略站调研报告.md` | 竞品调研与市场分析 |
| `网站优化计划.md` | 基于关键词验证的增量优化清单 |
| `月度开发计划-2026-07.md` | 7 月开发计划 |
| `候选游戏评估-2026-07-12.md` | 下一批候选游戏评估 |
| `攻略内容从哪来.md` | 内容生产方法论 |
| `Vercel + Google Analytics 网站发布指南.md` | 部署操作手册 |

## Dashboard 说明

- 聚合展示所有 wiki 站点的 GA4 流量数据
- 站点注册表在 `dashboard/lib/` 中
- GA4 API 调用有容错处理：某个站点 API 挂了不影响其他站点显示
- 通过 Vercel 环境变量配置 GA4 凭据

## 关键词工作流

1. **采集**: 运行 `harvest-keywords.mjs`（Node.js）或 `harvest-curl.sh`（快速验证）
2. **存储**: 结果写入 `keyword-results/` 目录
3. **验证**: 对比 `网站优化计划.md` 中的命中率
4. **生产**: 根据验证结果决定是否新增攻略内容

## SOP 上线流程（新游戏站）

参考 `游戏攻略站上线SOP.md`，核心步骤：
1. 选游戏 → 2. 定域名 → 3. 关键词调研 → 4. 准备攻略内容
5. 项目初始化（参考已有 wiki 站目录结构）→ 6. 配置 GA4 + GSC
6. Vercel 部署 → 7. 在 Dashboard 注册表中添加新站点 → 8. 提交 GSC

## 当前优先级

- 优化已有站点的 SEO（关键词覆盖）
- 评估候选新游戏
- Dashboard 完善
- 广告变现接入（AdSense）
