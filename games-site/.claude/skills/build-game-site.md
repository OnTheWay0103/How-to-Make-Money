---
name: build-game-site
description: 按 SOP 全流程自动化新建游戏攻略站。输入游戏名，自动完成评估→关键词收割→建站→部署→Dashboard 接管。
arguments:
  - name: gameName
    description: 目标游戏的 Steam 搜索名（如 "SpiritVale"、"Mistfall Hunter"）
    required: true
---

# Build Game Site Agent

> 基于 `游戏攻略站上线SOP.md` 的自动化执行版本。
> 触发方式：`/build-game-site "游戏名"`

---

## 前置检查

在开始之前，先检查游戏是否已经建过站：

```
搜索 games-site/ 目录下是否存在包含游戏名的子目录
如果存在 → 告知用户已有站点，询问是否要扩充内容
如果不存在 → 继续
```

---

## Phase 1: 评估（串行执行）

### 1.1 快速 Wiki 覆盖检查

```
WebSearch "{gameName} wiki"
WebSearch "{gameName} fandom"
如果搜索结果显示已有独立 Wiki 站 → 不推荐建站
如果搜索结果只有零散攻略/新闻 → 继续
```

### 1.2 搜索趋势验证

```
WebSearch "{gameName} Steam release date review"
从搜索结果中提取：
- 开发商规模（大厂/中型/独立）
- 发售时间
- Steam 评价
- 游戏类型（RPG/动作/生存/合作…）
```

### 1.3 决策输出

按 SOP 1.3 的四维评分，输出简洁评估：

```
| 维度 | 评分 | 说明 |
|------|------|------|
| 搜索需求结构 | X/5 | 有 how to / best build / tier list / guide 类搜索吗 |
| 生命周期 | X/5 | 新发售(5)/稳定期(4-3)/过气(1) |
| 内容可扩展性 | X/5 | 有职业/Boss/装备/更新系统吗 |
| 竞争结构 | X/5 | Wiki 覆盖情况 |

总评：X/20
≥ 15 → 推荐建站 | 10-14 → 可做但不优先 | < 10 → 不推荐
```

**停止点**：输出评估后，询问用户是否继续。

---

## Phase 2: 关键词收割（串行执行）

### 2.1 收割

用 10 个前缀轮询 Google Suggest API（通过代理）：

```
确认代理可用：curl --max-time 5 --proxy http://127.0.0.1:1087 https://www.google.com

如果代理不通 → 提示用户开启代理（proxyon）
如果代理通过 → 执行收割脚本

PREFIXES = ("", "how to ", "best ", "guide ", "weapons ", "beginner ", "build ", "solo ", "co op ", "tier list ")
对每个 prefix 执行：
  curl -s --max-time 30 --proxy http://127.0.0.1:1087 \
    "https://suggestqueries.google.com/complete/search?client=chrome&q={prefix}{gameName}"
  间隔 4 秒
```

### 2.2 保存与分类

将结果去重排序，分类保存到 `keyword-results/{GameName}.md`。

### 2.3 关键词摘要

输出 Top 10 高频搜索词，按类别简要统计（how-to X 条 / best X 条 / guide X 条…）。

**停止点**：输出关键词摘要后，询问用户是否继续建站。

---

## Phase 3: 并行建站

> 此阶段所有子任务同时启动，用 `TaskCreate` 跟踪进度。

### 子 Agent A：项目初始化

```
1. 复制 themoundwiki 模板到 games-site/{gamename}wiki/
2. 清理旧内容：rm -rf content/guides/*.md .vercel/ node_modules/
3. 更新配置文件：
   - lib/seo-config.ts → 改 name/description/url
   - package.json → 改 name
   - lib/schema.ts → 改 VideoGame schema
   - 用 sed 批量替换 Header/Footer/Metadata 中的游戏名
4. 创建首页 app/page.tsx → 游戏名 + 特色攻略卡片 + FAQ
5. 创建 FAQ 页 app/faq/page.tsx
6. 创建 Tier List 页 app/tier-list/page.tsx
7. 更新 Guides Hub 页 app/guides/page.tsx
8. 启动 npm install（后台运行）
```

### 子 Agent B：撰写 10 篇首发攻略

```
基于 Phase 2 关键词收割结果，撰写以下 10 篇：
1. beginner-guide.md — 新手入门
2. weapons-guide.md — 武器/装备指南
3. classes-guide.md — 职业/角色指南
4. builds-guide.md — Build 推荐
5. tier-list.md — 强度排行
6. bosses-guide.md — Boss 攻略
7. crafting-guide.md — 制作系统
8. solo-guide.md — 单人指南
9. co-op-guide.md — 联机指南
10. faq.md — 常见问题

每篇要求：
- Frontmatter：title/description/category/version/updated/keywords/related
- 英文 500-1200 字
- 结构化表格+列表
- 每篇末尾 3-5 个内链
- 版本标注
```

### 子 Agent C：模板残留清理检查

```
在项目初始化和内容创建完成后执行：

1. Header.tsx — 检查站点名称是否为 {gamename} Wiki
2. Footer.tsx — 检查版权信息是否包含游戏名
3. app/faq/page.tsx — 检查 FAQ 内容是否为 {gamename} 相关
4. app/guides/page.tsx — 检查描述和标题
5. app/tier-list/page.tsx — 检查 Tier List 内容
6. lib/metadata.ts — 检查 keywords 数组
7. content/home-content.md — 检查首页文案
8. content/guides/*.md — 检查是否所有文章 frontmatter 都正确

如果发现残留，用 sed 或 Edit 批量替换。
```

### 子 Agent D：SEO 验证

```
在项目初始化和内容创建完成后执行：

1. 检查 sitemap.ts → SITE_CONFIG.url 是否正确
2. 检查 robots.ts → sitemap URL 是否正确
3. 检查 metadata.ts → 默认 title/description/keywords
4. 检查 layout.tsx → Header + Footer + JsonLd + GA 组件是否都引入
5. 检查 guides/[slug]/page.tsx → canonical URL 生成逻辑
```

---

## Phase 4: 构建与部署（串行执行）

### 4.1 构建验证

```
cd {project} && npm run build
如果构建失败 → 修复错误后重试
如果构建成功 → 继续
```

### 4.2 Vercel 部署

```
cd {project} && rm -rf .vercel && npx vercel --prod --yes --token $TOKEN
```

### 4.3 GA4 + GSC

```
1. 复制 GSC 验证文件：cp 其他站/public/google12f8715471cef7b7.html {project}/public/
2. 更新 GoogleAnalytics.tsx → GA4 ID（询问用户提供，或使用已有配置）
3. 重新构建 + 部署
```

### 4.4 部署验证

```
curl 检查：
- 首页 https://{project}.vercel.app → 200
- sitemap → 200 + 有效 XML
- robots.txt → 200
- GSC 验证文件 → 200
```

**停止点**：部署完成后，输出站点信息摘要，询问是否继续收尾工作。

---

## Phase 5: 收尾（串行执行）

### 5.1 更新 Dashboard

```
编辑 dashboard/lib/sites.ts，在 SITES 数组中添加：
{
  name: '{GameName} Wiki',
  propertyId: 'REPLACE_ME',  // 询问用户提供
  gaId: 'G-XXXXXXXXXX',       // 询问用户提供
}
重新部署 Dashboard
```

### 5.2 Git 提交

```
cd /Users/admin/How-to-Make-Money
git add games-site/{project} games-site/keyword-results/{GameName}.md
git add games-site/dashboard/lib/sites.ts  # 如果更新了 Dashboard
git commit -m "feat: {GameName} Wiki — 10 guides + keywords + deployed"
git push
```

### 5.3 输出收尾清单

```
✅ {GameName} Wiki 已上线

后续需你手动完成：
1. GSC：添加 https://{project}.vercel.app → HTML 文件验证 → 提交 sitemap
2. GA4：创建新的 GA4 媒体资源 → 获取 Measurement ID 和 Property ID
3. Dashboard：把 Property ID 填入 dashboard/lib/sites.ts
4. 定期：每周一检查 GSC 数据，关注展现量变化
```

---

## 错误处理

| 场景 | 处理方式 |
|------|---------|
| 代理不通 | 提示用户执行 `proxyon` |
| npm install 超时 | 重试最多 3 次，每次间隔 60s |
| Vercel Token 过期 | 提示用户重新提供 Token |
| 构建失败 | 分析错误日志，修复后重试 |
| Google Suggest 全部超时 | 改用 WebSearch 间接获取关键词 |
| 游戏名包含特殊字符 | 目录名只保留字母数字连字符 |
| 子 Agent 超时 | 改用主 Agent 直接执行该任务 |
| 模板残留 | 执行子 Agent C 的完整检查流程 |
