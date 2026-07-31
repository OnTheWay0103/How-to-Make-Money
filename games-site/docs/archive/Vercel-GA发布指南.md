# Vercel + Google Analytics 网站发布指南

## 一、前置条件

- GitHub 账号已关联 Vercel
- Google 账号已注册 Google Analytics
- Node.js 环境（本地开发用）

---

## 二、部署网站到 Vercel

### 2.1 首次部署（CLI）

```bash
# 1. 进入项目目录
cd your-project/

# 2. 安装 Vercel CLI（如未安装）
npm install -g vercel

# 3. 登录并部署
vercel
# 首次会弹出浏览器授权，按提示完成
# CLI 自动检测 Next.js，一路回车即可
```

### 2.2 关联 GitHub 自动部署

部署成功后，在 Vercel 网页端操作：

1. 打开项目 Settings → Git
2. 点击 **Connect Git Repository**，选择 GitHub 仓库
3. **重要**：如果项目在 monorepo 子目录中，务必填写 **Root Directory**

| ⚠️ 坑 | 说明 |
|--------|------|
| **Root Directory 前导空格** | 复制粘贴时容易多一个空格，导致构建 0ms 失败。例如 ` games-site/dashboard` ❌ → `games-site/dashboard` ✅ |
| **目录分隔符** | 必须用 `/`，例如 `games-site/dashboard`，不用 `./` 或 `\` |

### 2.3 配置文件：`vercel.json`

放在项目根目录（和 `package.json` 同级）：

```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "regions": ["iad1"]
}
```

- `regions` 根据目标用户选择：
  - `iad1`：美国东部（欧美用户）
  - `hkg1`：香港（国内 / 亚洲用户）

### 2.4 验证部署

每次 git push 会自动触发构建。在 Vercel Dashboard → Deployments 查看状态：
- **Ready** → 成功
- **Error（Duration 几秒）** → 通常是 Root Directory 配置错误
- **Error（Duration 正常）** → 检查构建日志

---

## 三、Google Analytics 配置

### 3.1 前端埋点（每个网站做一次）

在 Next.js 的 `app/layout.tsx` 中加入 Google Analytics 组件：

```tsx
// components/GoogleAnalytics.tsx
import Script from 'next/script';

const GA_ID = 'G-XXXXXXXXXX'; // 你的 Measurement ID

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

然后在 `layout.tsx` 的 `<body>` 中引入：

```tsx
import GoogleAnalytics from '@/components/GoogleAnalytics';

// 在 body 内第一行加入：
<GoogleAnalytics />
```

> **原理**：根布局 `layout.tsx` 包裹所有页面，加一次 = 全部页面生效。不需要每个页面单独加。

### 3.2 获取 Measurement ID

1. 打开 [analytics.google.com](https://analytics.google.com)
2. 左下角 ⚙️ → 管理 → 创建媒体资源
3. 选择「网站」平台，填写网址
4. 创建后得到 **G-XXXXXXXXXX** 格式的 Measurement ID

---

## 四、GA Data API（数据看板用）

> 如果需要用程序拉取 GA 数据做看板，才需要配置此部分。

### 4.1 创建 Service Account

1. 打开 [console.cloud.google.com](https://console.cloud.google.com)
2. 选择或创建一个项目
3. 导航到 **IAM 与管理 → 服务账号**
4. 创建服务账号，名称随意（如 `dashboard-ga-reader`），角色选「Viewer」
5. 创建后进入该服务账号 → 密钥 → 添加密钥 → JSON → 下载

### 4.2 启用 API

需要在 GCP 项目中启用两个 API：

| API | 用途 | 启用链接 |
|-----|------|----------|
| **Google Analytics Data API** | 拉取 GA4 报告数据 | `console.cloud.google.com/apis/library/analyticsdata.googleapis.com` |
| **Google Analytics Admin API** | 列出可访问的账号/属性（调试用） | `console.cloud.google.com/apis/library/analyticsadmin.googleapis.com` |

搜索 API 名称 → 点击 **启用**。

### 4.3 授权 Service Account 访问 GA4

| ⚠️ 最关键的坑 |

**必须同时做两步**，缺一不可：

**步骤 A — 媒体资源级别（必须）**

打开：
```
https://analytics.google.com/analytics/web/#/p{PROPERTY_ID}/admin/property/access-management
```
（把 `{PROPERTY_ID}` 替换为实际数字）

添加 Service Account 的邮箱，角色选「查看者」。**不要勾选邮件通知**。

**步骤 B — 帐号级别（建议也做）**

同样的操作，但 URL 中是 `/admin/account/access-management`。

| ⚠️ 最容易踩的坑 | 说明 |
|------------------|------|
| **属性 ID 填错** | Measurement ID（`G-XXXX`）≠ Property ID（纯数字，如 `543617553`）。在 GA 管理 → 媒体资源设置中找到「媒体资源 ID」 |
| **只加了 Account 级别权限** | Data API 需要 **Property 级别** 的权限。注意 URL 中 `/property/` vs `/account/` 的区别 |
| **勾选了邮件通知** | Service Account 邮箱不接受邮件，勾选会导致添加失败 |
| **API 未启用** | 漏了在 GCP 中启用 Analytics Data API |

### 4.4 配置环境变量

在 Vercel 项目 Settings → Environment Variables 中添加：

| Key | Value | 环境 |
|-----|-------|------|
| `GA_CLIENT_EMAIL` | JSON 文件中的 `client_email` | Production |
| `GA_PRIVATE_KEY` | JSON 文件中的 `private_key`（**含换行符**） | Production |

---

## 五、调试清单

当数据看板不工作时，按顺序排查：

```
1. Vercel 构建是否成功？
   └─ 否 → 检查 Root Directory（无前导空格）、包版本号

2. 环境变量是否设定？
   └─ 访问 /api/diagnostics 查看 env 字段

3. GCP API 是否启用？
   └─ 访问 /api/diagnostics 查看 adminApiError 中是否有 "not been used" 提示

4. Service Account 是否有权限？
   └─ 访问 /api/diagnostics 查看 apiError
   └─ PERMISSION_DENIED → 属性 ID 写错，或未在正确属性中添加 Service Account

5. GA4 属性 ID 是否正确？
   └─ Measurement ID (G-XXXX) ≠ Property ID (纯数字)
   └─ 在 GA 管理 → 媒体资源设置中确认
```

---

## 六、项目结构参考

```
games-site/
├── witchspirewiki/       # 游戏攻略站
│   ├── app/layout.tsx    # GA 埋点在这里
│   ├── vercel.json       # 部署区域 iad1
│   └── ...
├── dashboard/            # 数据看板
│   ├── app/api/diagnostics/  # 诊断接口（调试用）
│   ├── lib/analytics.ts      # GA Data API 客户端
│   ├── vercel.json
│   └── ...
└── 发布指南.md            # 本文件
```

---

## 七、速查表

| 操作 | 命令 / 链接 |
|------|------------|
| 本地构建验证 | `npm run build` |
| 部署到 Vercel | `vercel` |
| 部署到生产 | `vercel --prod` |
| 查看部署列表 | `vercel ls` |
| 添加环境变量 | `vercel env add KEY production` |
| GA4 管理后台 | `analytics.google.com` |
| GCP 控制台 | `console.cloud.google.com` |
| Measurement ID 格式 | `G-XXXXXXXXXX` |
| Property ID 格式 | 纯数字，如 `543617553` |
