# 游戏攻略资讯站上线 SOP（标准操作流程）

> 基于 Witchspire Wiki 首次上线实战总结，适用于基于 Next.js + Vercel 的游戏攻略/资讯类站点。
> 每上线一个新游戏站，按本文档逐项执行即可。

---

## 目录

1. [前置准备](#一前置准备)
2. [项目初始化](#二项目初始化)
3. [SEO 基础设施](#三seo-基础设施)
4. [Google Analytics 配置](#四google-analytics-配置)
5. [Vercel 部署](#五vercel-部署)
6. [Google Search Console 提交](#六google-search-console-提交)
7. [发布后检查清单](#七发布后检查清单)
8. [常见坑与排错](#八常见坑与排错)
9. [附录：模板文件清单](#九附录模板文件清单)

---

## 一、前置准备

### 1.1 账号要求

| 账号 | 用途 | 备注 |
|------|------|------|
| GitHub | 代码托管 + Vercel 自动部署 | 免费 |
| Vercel | 网站托管与部署 | 关联 GitHub，免费额度足够起步 |
| Google (Gmail) | GA4 + GSC + AdSense | 同一个账号管理所有 Google 服务 |
| Google Analytics | 流量分析 | 免费 |
| Google Search Console | SEO 收录 | 必做，否则 Google 不收录 |

### 1.2 选游戏 → 定域名

```
决策流程：
选定目标游戏 → 调研搜索量 → 确定域名 → 检查域名可用性
```

**域名建议**：
- 优先：`{gamename}wiki.com` / `{gamename}guide.com`
- 备选：Vercel 免费域名 `{projectname}.vercel.app`（起步够用，后续再绑自定义域名）
- 避免：与官方商标冲突太直接的域名

### 1.3 内容准备

在写代码之前，先准备好：
- **至少 10 篇攻略文章**（Markdown 格式，放在 `content/guides/` 下）
- 每篇文章包含：标题、描述、关键词、正文内容
- 文章文件名 = URL slug（如 `beginner-guide.md` → `/guides/beginner-guide`）

**文章 Markdown 模板**（前置 frontmatter）：

```markdown
---
title: 'Beginner Guide — Getting Started'
description: 'A complete beginner guide covering classes, familiars and the first 5 hours.'
keywords: ['beginner guide', 'getting started', 'tips']
updated: '2026-06-30'
---

正文内容...
```

---

## 二、项目初始化

### 2.1 基于模板创建新站点

> Witchspire Wiki 已作为模板站点。新站点直接复制其结构，替换内容和配置即可。

```bash
# 1. 复制模板项目
cp -r witchspirewiki/ new-site-name/

# 2. 进入新项目
cd new-site-name/

# 3. 安装依赖
npm install

# 4. 清理旧内容
rm -rf content/guides/*.md   # 删除旧的攻略文章
rm -rf .vercel/              # 删除旧的 Vercel 关联
```

### 2.2 必须修改的配置文件

按以下顺序修改，**一个都不能漏**：

| # | 文件 | 修改内容 |
|---|------|----------|
| 1 | `lib/seo-config.ts` | `name`、`description`、`url`、`ogImage` |
| 2 | `lib/metadata.ts` | `keywords` 数组（改成新游戏的词） |
| 3 | `lib/schema.ts` | `websiteSchema()` 中的站点名称和描述 |
| 4 | `app/sitemap.ts` | 静态路由列表（如路由结构有变化） |
| 5 | `app/robots.ts` | 一般不需要改，确认 sitemap URL 正确 |
| 6 | `vercel.json` | `regions` 按目标用户选地区 |
| 7 | `package.json` | `name` 字段 |
| 8 | `.env.local` | `NEXT_PUBLIC_GA_MEASUREMENT_ID`（见第四章） |

### 2.3 创建内容

```bash
# 将所有攻略文章放入 content/guides/
cp /path/to/your/articles/*.md content/guides/

# 修改首页内容（app/page.tsx 或 content/home-content.md）
```

### 2.4 本地验证

```bash
# 构建验证
npm run build

# 确认无报错，确认 sitemap 和 robots 正常生成
# 构建输出中应能看到：
#   ├ ○ /sitemap.xml
#   └ ○ /robots.txt
```

---

## 三、SEO 基础设施

### 3.1 必备文件清单

新站点必须包含以下 SEO 相关文件：

| 文件 | 作用 | 检查点 |
|------|------|--------|
| `app/sitemap.ts` | 动态生成 sitemap.xml | URL 是否正确、是否包含所有页面 |
| `app/robots.ts` | 生成 robots.txt | `Allow: /`、sitemap 指向正确 |
| `lib/seo-config.ts` | 全局 SEO 配置 | `url` 是否为实际部署域名 |
| `lib/metadata.ts` | 页面 meta 标签 | `robots: index + follow` |
| `lib/schema.ts` | JSON-LD 结构化数据 | 站点名称和 URL 正确 |
| `components/JsonLd.tsx` | 注入 JSON-LD 到页面 | 已在 layout.tsx 中引用 |
| `public/icon.png` | OG/Twitter 卡片图 | 512×512，代表站点 |

### 3.2 关键配置检查

**`lib/seo-config.ts`** — 最重要的文件：
```ts
export const SITE_CONFIG = {
  name: 'Your Site Name',        // <title> 和 og:site_name
  description: '...',            // meta description（150-160 字符）
  url: 'https://yoursite.vercel.app',  // ⚠️ 必须与部署域名一致！
  ogImage: '/icon.png',          // 社交分享卡片图
  locale: 'en_US',               // 或 zh_CN 等
};
```

**`app/sitemap.ts`** — 确认：
- 静态路由列表包含所有页面
- 动态路由（如 `/guides/[slug]`）能正确扫描 `content/guides/*.md`
- `SITE_CONFIG.url` 被用作 URL 前缀

**常见错误**：`seo-config.ts` 中的 `url` 与部署域名不一致 → sitemap 中的 URL Google 抓不到 → GSC 报"无法抓取"。

---

## 四、Google Analytics 配置

### 4.1 创建 GA4 媒体资源

1. 打开 [analytics.google.com](https://analytics.google.com)
2. 左下角 ⚙️ → 管理 → **创建媒体资源**
3. 填写网站名称，选择「网站」平台，输入网址
4. 创建后获得 **Measurement ID**（格式 `G-XXXXXXXXXX`）

### 4.2 前端埋点

组件 `components/GoogleAnalytics.tsx` 已在模板中，只需设置环境变量：

```bash
# 本地开发
# 在 .env.local 中添加：
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Vercel 生产环境（部署后通过 CLI 添加）
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID production
# 输入你的 Measurement ID
```

验证：部署后打开站点，在 GA4 后台 → 报告 → 实时，应能看到自己的访问。

### 4.3 GA Data API（可选，仅数据看板需要）

如果不需要通过 API 拉取数据做看板，跳过此步骤。详见 `Vercel + Google Analytics 网站发布指南.md` 第四部分。

---

## 五、Vercel 部署

### 5.1 首次部署

```bash
cd new-site-name/

# 1. 关联 Vercel 项目
vercel link --project your-project-name --yes

# 2. 检查 Root Directory 配置
vercel project inspect your-project-name
# ⚠️ 确认 Root Directory 正确（如项目在 monorepo 子目录中）

# 3. 如果 Root Directory 不对，通过 API 修正
#    详见 8.3 节

# 4. 部署到生产环境
vercel --prod --yes
```

### 5.2 Root Directory 配置

> **这是 monorepo 部署中最容易踩的坑。**

如果项目结构为：
```
games-site/
└── new-site-name/    ← 实际项目在此
```

则 Vercel 项目的 **Root Directory** 应设置为：`new-site-name`

**验证方法**：
```bash
vercel project inspect your-project-name | grep "Root Directory"
# 输出应为：Root Directory    new-site-name（相对于 repo 根目录）
```

**症状判断**：
- 部署路径报错 `The provided path "xxx/games-site/games-site/xxx" does not exist` → Root Directory 设置错误，路径被重复拼接

### 5.3 自动部署（Git 关联）

部署成功后，在 Vercel 网页端：
1. 项目 Settings → Git → **Connect Git Repository**
2. 选择 GitHub 仓库
3. 填写 Root Directory（⚠️ 无前导空格、用 `/` 不用 `\`）

配置后，每次 `git push` 自动触发部署。

### 5.4 部署验证

```bash
# 1. 首页可访问
curl -sI "https://your-site.vercel.app/" | head -3
# 应返回 HTTP/2 200

# 2. Sitemap 可访问
curl -s "https://your-site.vercel.app/sitemap.xml"
# 应返回有效 XML，URL 前缀正确

# 3. Robots.txt 正确
curl -s "https://your-site.vercel.app/robots.txt"
# Allow: /  且 sitemap URL 正确
```

---

## 六、Google Search Console 提交

> ⚠️ **这是决定 Google 是否收录的关键步骤。不做这一步 = 白上线。**

### 6.1 添加资源

1. 打开 [search.google.com/search-console](https://search.google.com/search-console)
2. 左上角下拉 → **添加资源**
3. 选择 **「网址前缀」**，输入：`https://your-site.vercel.app`
4. 点击继续

### 6.2 验证所有权（推荐：HTML 文件上传）

1. 在验证方式中选择 **「HTML 文件上传」**
2. 下载 GSC 提供的验证文件（如 `google12f8715471cef7b7.html`）
3. 将文件放入项目的 `public/` 目录
4. 重新部署：`vercel --prod --yes`
5. 确认文件可访问：
   ```bash
   curl -sI "https://your-site.vercel.app/google12f8715471cef7b7.html"
   # 应返回 HTTP/2 200
   ```
6. 回到 GSC 点击 **「验证」**

**备选方式**：如果站点已配置 GA4 且同一 Google 账号，可直接用 Google Analytics 验证。

### 6.3 提交 Sitemap

验证通过后：

1. 左侧菜单 → **Sitemaps**
2. 在「添加新的 Sitemap」输入：
   ```
   https://your-site.vercel.app/sitemap.xml
   ```
3. 点击 **提交**

### 6.4 验证收录状态

- 提交后状态可能显示「无法抓取」→ **这是正常的**，Google 需要几分钟到几小时处理
- 确认方法：在 GSC 顶部的 **URL 检查工具** 输入 sitemap URL，点击「测试实际网址」
- sitemap 状态变为 **「成功」** 即表示 Google 已成功读取

**时间线参考**：
- 提交后：几分钟到几小时 → GSC 状态变为「成功」
- 页面收录：数天到数周 → 开始在 Google 搜索结果中出现
- 排名稳定：数周到数月

---

## 七、发布后检查清单

每一项部署后必须逐条确认：

### 7.1 功能检查

- [ ] 首页正常加载，无报错
- [ ] 所有攻略页面可访问（逐个点击）
- [ ] 移动端显示正常
- [ ] 图片加载正常

### 7.2 SEO 检查

- [ ] `https://{domain}/sitemap.xml` 返回有效 XML（200），URL 前缀正确
- [ ] `https://{domain}/robots.txt` 返回 `Allow: /`
- [ ] 页面 `<title>` 格式正确（`页面标题 · 站点名称`）
- [ ] 页面 `<meta name="description">` 存在
- [ ] Open Graph 标签完整（`og:title`, `og:description`, `og:image`）
- [ ] 无 `<meta name="robots" content="noindex">` 残留

### 7.3 GSC 检查

- [ ] 所有权验证通过
- [ ] Sitemap 已提交，状态为「成功」
- [ ] 无安全/手动操作问题

### 7.4 GA 检查

- [ ] GA4 实时报告能看到自己的访问
- [ ] Measurement ID 正确（G- 开头）

### 7.5 性能检查

- [ ] PageSpeed Insights 评分 > 80（移动端）
- [ ] Lighthouse SEO 评分 = 100

---

## 八、常见坑与排错

### 8.1 Sitemap URL 不匹配

**症状**：GSC 提交后显示「无法抓取」

**根因**：`seo-config.ts` 中的 `url` 与实际部署域名不一致

**修复**：
```ts
// ❌ 错误 — witchspire.wiki 域名未配置
url: 'https://witchspire.wiki',

// ✅ 正确 — 使用实际 Vercel 域名
url: 'https://witchspirewiki.vercel.app',
```
修复后重新部署，再在 GSC 重新提交 sitemap。

### 8.2 Vercel SSO 保护导致无法抓取

**症状**：访问部署 URL 被重定向到 Vercel 登录页

**根因**：Vercel Deployment Protection 开启

**修复**：在 Vercel 项目 Settings → Deployment Protection → 关闭或设为「Disabled」

> 注意：`{project}.vercel.app` 的 production alias 一般是公开的，只有 hashed URL（如 `xxx-abc123.vercel.app`）可能有 SSO 保护。始终使用 production alias 的 URL 提交给 GSC。

### 8.3 Root Directory 路径重复拼接

**症状**：部署报错 `The provided path "xxx/games-site/games-site/xxx" does not exist`

**根因**：Vercel 项目 Root Directory 设置错误（路径从 repo 根起算，不是从 CWD 起算）

**修复**：
```bash
# 1. 获取 project ID
vercel project inspect your-project-name

# 2. 通过 API 修正 Root Directory
curl -X PATCH "https://api.vercel.com/v9/projects/{PROJECT_ID}" \
  -H "Authorization: Bearer $(cat ~/Library/Application\ Support/com.vercel.cli/auth.json | jq -r .token)" \
  -H "Content-Type: application/json" \
  -d '{"rootDirectory":"your-site-name"}'
```

### 8.4 TypeScript/构建错误

**症状**：`vercel --prod` 构建失败

**修复顺序**：
1. 本地 `npm run build` 确认能否复现
2. 检查 `package.json` 依赖版本是否正确
3. 检查 TypeScript 类型错误（`@ts-ignore` 不能滥用）
4. 检查动态路由 `generateStaticParams` 返回的数据结构

### 8.5 GSC 验证文件 404

**症状**：点击验证后提示找不到验证文件

**修复**：
```bash
# 1. 确认文件在 public/ 目录
ls public/google*.html

# 2. 确认已重新部署
vercel --prod --yes

# 3. 确认文件可访问
curl -sI "https://your-site.vercel.app/googleXXXX.html"
# 应返回 200，不是 404

# 4. 文件名必须完全一致，包括大小写
```

---

## 九、附录：模板文件清单

基于 Witchspire Wiki 的 Next.js 模板项目，以下文件是每个新站点需要复用的基础框架：

```
your-site/
├── app/
│   ├── layout.tsx              # 根布局（GA + JSON-LD + Header + Footer）
│   ├── page.tsx                # 首页
│   ├── globals.css             # 全局样式
│   ├── robots.ts               # 动态 robots.txt
│   ├── sitemap.ts              # 动态 sitemap.xml
│   ├── favicon.ico             # 站点图标
│   ├── guides/
│   │   ├── page.tsx            # 攻略列表页
│   │   └── [slug]/
│   │       └── page.tsx        # 攻略详情页（读取 Markdown）
│   ├── faq/
│   │   └── page.tsx            # FAQ 页
│   └── tier-list/
│       └── page.tsx            # Tier List 页
├── components/
│   ├── GoogleAnalytics.tsx     # GA4 埋点
│   ├── JsonLd.tsx              # JSON-LD 结构化数据
│   ├── Header.tsx              # 导航栏
│   ├── Footer.tsx              # 页脚
│   ├── GuideCard.tsx           # 攻略卡片
│   ├── GuideLayout.tsx         # 攻略页面布局
│   ├── ReactMarkdown.tsx       # Markdown 渲染
│   ├── RelatedGuides.tsx       # 相关推荐
│   ├── TableOfContents.tsx     # 目录导航
│   ├── FAQ.tsx                 # FAQ 组件
│   └── VersionBadge.tsx        # 版本标签
├── content/
│   └── guides/                 # ★ 攻略 Markdown 文章放这里
│       ├── beginner-guide.md
│       ├── crafting-guide.md
│       └── ...
├── lib/
│   ├── seo-config.ts           # ★ 全局 SEO 配置（需修改）
│   ├── metadata.ts             # ★ Meta 标签生成（需修改 keywords）
│   ├── schema.ts               # ★ JSON-LD schema（需修改站点名）
│   └── guides.ts               # 攻略数据读取工具
├── public/
│   └── icon.png                # OG 社交分享图（512×512）
├── .env.local                  # GA Measurement ID（本地）
├── vercel.json                 # Vercel 部署配置
├── package.json
└── tsconfig.json
```

**★ 标记** = 每个新站点必须修改的文件。

---

## 附录 B：快速部署命令备忘

```bash
# === 一次性部署流程 ===

# 1. 本地构建验证
cd your-site && npm run build

# 2. 链接 Vercel 项目
vercel link --project your-project-name --yes

# 3. 检查 Root Directory
vercel project inspect your-project-name | grep "Root Directory"

# 4. 添加 GA 环境变量
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID production

# 5. 部署到生产
vercel --prod --yes

# 6. 验证部署
curl -s "https://your-site.vercel.app/sitemap.xml" | head -20
curl -s "https://your-site.vercel.app/robots.txt"

# 7. GSC 验证文件（如有）
cp ~/Downloads/google*.html public/
vercel --prod --yes
curl -sI "https://your-site.vercel.app/google*.html"

# 8. 提交 GSC（需手动）
# → search.google.com/search-console
# → 添加资源 → HTML 文件验证 → 提交 sitemap
```

---

> **最后更新**：2026-07-04  
> **基于实战**：Witchspire Wiki (`witchspirewiki.vercel.app`)  
> **维护**：每上线一个新站点，回来更新本文档中遇到的新的坑。
