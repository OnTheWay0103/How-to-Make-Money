# xiaohongshu — 小红书心理评测变现

## 项目概述

在小红书发布心理测试类笔记，引导用户到 H5 页面做免费预览，¥3.9 解锁完整报告变现。
核心思路：对标账号用「7 题不给答案」驱动评论互动 → 我们的 H5 承接评论区流量完成付费转化。

## 项目结构

```
xiaohongshu/
  career-path-test/              # H5 — 职业路径决策测试（Vite + React + TS）
    src/data/career-test.json    # 题目、维度、评分规则、报告模板（配置驱动）
    src/components/              # WelcomeScreen, QuestionScreen, ResultScreen 等
  relationship-test/             # H5 — 恋爱关系测试（同一套壳换皮）
    src/data/relationship-test.json
  career-path-test-materials/    # 职业测试小红书内容素材
    01-标题库.md                 # 小红书笔记标题
    02-封面文案.md               # 封面图文案
    03-7题版笔记内容.md          # 笔记正文（7 题版）
    04-评论区话术.md             # 引导评论 → 转化的关键话术
    05-商品详情页.md             # 小红书商品/支付页
    06-发布计划.md               # 发布时间表
    07-图片制作规范.md           # 封面和配图标准
  relationship-test-materials/   # 恋爱测试内容素材（同上结构）
  url-to-markdown/               # URL 转 Markdown 工具
  plan-career-path-test.md       # 实施计划文档
  research-report-psychological-testing.md  # 心理评测赛道调研
  小红书职场心理评测账号拆解.pdf   # 对标账号分析
```

## 技术栈

- **框架**: Vite + React 19 + TypeScript
- **图表**: Chart.js + react-chartjs-2（雷达图）
- **截图**: html2canvas（结果卡片分享图）
- **部署**: Vercel（免费）
- **设计**: 配置驱动 — 换一套 JSON 数据即可换皮新测试

## 变现闭环

```
小红书笔记（免费心理测试吸引）
  → 评论区引导（话术 → 私信/链接）
    → H5 落地页（免费预览：雷达图 + 简短结论）
      → ¥3.9 解锁完整报告
        → 结果卡片分享 → 回流小红书 → 更多流量
```

**当前状态**: H5 测试功能完成，付费墙是前端假实现（`unlockFullReport` 直接放行），真正的支付接入（微信/支付宝）尚未完成。

## 运营链路

| 步骤 | 内容 | 状态 |
|------|------|------|
| 1. 笔记发布 | 标题 + 封面 + 7 题版内容 | 素材已备 |
| 2. 评论引导 | 话术引导用户「想知道答案」 | 话术已备 |
| 3. H5 承接 | 免费预览 → 付费解锁 | 前端完成，支付未接入 |
| 4. 分享回流 | 结果卡片带二维码/链接 | 截图功能完成 |

## 关键文档

- `plan-career-path-test.md` — 完整实施计划（技术选型、项目结构、付费设计）
- `career-path-test-materials/README.md` — 素材包使用说明
- `research-report-psychological-testing.md` — 赛道调研
