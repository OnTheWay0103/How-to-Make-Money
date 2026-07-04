# 职业路径决策测试 H5 — 实施计划

## Context

基于对标账号拆解，构建一个配置驱动的通用 H5 心理测试壳。首套测试主题：**「职业路径决策测试」**——帮用户判断该转行还是深耕。同一个壳后续可快速换皮做恋爱、自我认知等测试品类。

核心差异化：对标账号 7 题不给答案驱动评论 → 我们的 H5 作为付费交付物承接评论区流量；产品本身支持免费预览 + ¥3.9 解锁完整报告 + 结果卡片分享回流。

## 技术选型

**Vite + React + TypeScript**，部署到 Vercel（免费）。

为什么不用纯 HTML：雷达图、分步答题、报告生成等交互用框架更干净；Vite 零配置、构建产物小。

核心依赖：`chart.js` + `react-chartjs-2`（雷达图）、`html2canvas`（结果卡片生成截图）。

## 项目结构

```
xiaohongshu/career-path-test/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── career-test.json      # 题目+维度+评分规则+报告模板（配置驱动）
│   ├── components/
│   │   ├── WelcomeScreen.tsx      # 封面页：标题+价值主张+CTA
│   │   ├── QuestionScreen.tsx     # 单题展示：选项卡片式
│   │   ├── ProgressBar.tsx        # 顶部进度条
│   │   ├── ResultScreen.tsx       # 免费版：雷达图+简短结论
│   │   ├── PaywallBanner.tsx      # ¥3.9 解锁完整报告
│   │   ├── FullReport.tsx         # 完整版：维度详解+行动建议
│   │   ├── ShareCard.tsx          # 分享卡片组件（截图用）
│   │   └── RadarChart.tsx         # Chart.js 雷达图封装
│   ├── hooks/
│   │   └── useTestEngine.ts       # 核心：答题状态管理+计分+维度聚合
│   ├── utils/
│   │   ├── scoring.ts             # 得分计算→维度得分→结果类型映射
│   │   └── share.ts               # 分享卡片截图生成
│   ├── App.tsx                    # 路由：welcome → questions → result → fullReport
│   ├── App.css                    # 全局样式
│   ├── index.css                  # Tailwind-like 工具类（手写，不引入 Tailwind）
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## 实施步骤

### Step 1：初始化项目
- `npm create vite@latest career-path-test -- --template react-ts`
- 安装依赖：`chart.js` `react-chartjs-2` `html2canvas`
- 配置 Vercel 部署

### Step 2：配置数据（`career-test.json`）
设计首套测试的完整 JSON：
- 12-15 道选择题，每题 4 个选项
- 4 个维度映射（职业匹配度、成长反馈、迁移能力、转型动机）
- 每个选项对 4 维度的加权
- 4 种结果类型（深耕型/转型型/探索型/沉淀型）
- 每种结果的：免费版摘要 + 完整版报告模板（含行动建议）
- 报告 AI 生成占位符（后续可用 Claude API 动态生成个性化报告）

### Step 3：核心组件开发

**WelcomeScreen**：标题「职业路径决策测试」+ 副标题「12 题帮你判断该转行还是深耕」+ 4 维度图标 + 开始按钮。对标 PDF 的"不让用户思考，直接给行动指令"原则。

**QuestionScreen**：单题全屏展示，大号题目 + 4 个选项卡片。对标 PDF 的"每个选项都是扎心文案"——选项不是干巴巴的 ABCD，而是有情绪张力的句子。进度条实时显示。

**ResultScreen（免费版）**：
- 雷达图展示 4 维度得分
- 1-2 句简短结论（制造信息缺口）
- PaywallBanner：「¥3.9 查看完整报告，含详细维度分析 + 具体行动建议」

**FullReport（付费后）**：
- 4 维度逐一深度解读
- 对标类型（如「你属于：转型型选手」）
- 3 条具体行动建议
- 分享按钮 → 生成结果卡片

**ShareCard**：可截图分享的结果卡片，包含雷达图缩略 + 一句话结论 + 二维码（回流到测试页）。

### Step 4：付费闭环
- 免费看完结果 → 点击解锁 → 跳转支付页
- 初期：微信支付/支付宝个人收款码（贴二维码图片）→ 支付后手动/自动发完整报告
- 后续：接入 Stripe/微信支付 API

### Step 5：部署 + 测试
- `vercel deploy` 一键部署
- 手机扫码测试完整流程
- 验证分享卡片截图效果
- 确认支付流程可走通

## 验证方法

1. 首次部署后，在手机上完整走一遍：封面→答题→免费结果→付费→完整报告→分享卡片
2. 检查雷达图在移动端的显示效果
3. 测试微信内打开的兼容性（微信内置浏览器是最大的流量入口）
4. 确认二维码可被识别并跳转

## 产出物

一套可复用的 H5 测试壳 + 首套「职业路径决策测试」内容，部署后可立即挂到小红书笔记的商品链接/评论区。
