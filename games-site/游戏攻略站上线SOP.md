# 游戏攻略资讯站上线 SOP（标准操作流程）

> 基于 Witchspire Wiki 首次上线实战总结，适用于基于 Next.js + Vercel 的游戏攻略/资讯类站点。
> 每上线一个新游戏站，按本文档逐项执行即可。

---

## 目录

1. [前置准备](#一前置准备)
   - [账号要求](#11-账号要求)
   - [关键词调研与验证](#12-关键词调研与验证-)
   - [选游戏](#13-选游戏-)
   - [定域名](#14-定域名)
   - [内容准备](#15-内容准备)
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

### 1.2 关键词调研与验证 🔑

> **这是决定攻略站 SEO 成败的核心步骤。不做这一步 = 凭感觉写攻略 = 写了没人搜。**

#### 1.2.1 方法原理

Google 搜索框的**自动补全（Google Suggest）**反映的是真实用户在搜索的词。与其猜测"玩家会搜什么"，不如直接拉取 Google 的数据。

**免费 API 端点**（无需付费、无需 API Key）：
```
https://suggestqueries.google.com/complete/search?client=chrome&q={关键词}
```

返回格式：`["查询词", ["建议1", "建议2", ...]]`

#### 1.2.2 搜索前缀轮询法

用多种前缀 + 游戏名轮询，覆盖不同类型的搜索意图：

| 前缀 | 示例查询 | 捕获的搜索意图 |
|------|---------|--------------|
| `（空）` | `witcspire` | 基础搜索、平台、评测 |
| `how to ` | `witcspire how to` | How-to 攻略类 |
| `best ` | `witcspire best` | 最强/最佳/排行类 |
| `guide ` | `witcspire guide` | 综合攻略类 |
| `weapons ` | `witcspire weapons` | 武器/装备类 |
| `beginner ` | `witcspire beginner` | 新手向 |
| `build ` | `witcspire build` | Build/配装类 |
| `solo ` | `witcspire solo` | 单人玩法 |
| `co op ` | `witcspire co op` | 联机/合作 |
| `tier list ` | `witcspire tier list` | 强度排行 |

**一个游戏 × 10 种前缀 = 约 50-110 个真实搜索词**。

#### 1.2.3 工具脚本

项目下提供了抓取脚本：

| 脚本 | 方式 | 适用场景 |
|------|------|---------|
| `harvest-curl.sh` | curl + HTTP 代理 | 需本地配置代理 |
| `harvest-light.mjs` | Node.js https | 直连可用时 |
| `harvest-keywords-browser.mjs` | Puppeteer 浏览器 | 模拟真实浏览器 |

**推荐用法**（确保代理已开启）：
```bash
# 先开代理
proxyon

# 运行抓取（Python版，最稳定）
python3 << 'PYEOF'
import subprocess, json, os, time

PROXY = "http://127.0.0.1:1087"  # 或 socks5h://127.0.0.1:1080
PREFIXES = ["", "how to ", "best ", "guide ", "weapons ", "beginner ", "build ", "solo ", "co op ", "tier list "]

# 对每个游戏抓取
GAMES = [("游戏名", "game query")]
for name, query in GAMES:
    all_kw = set()
    for prefix in PREFIXES:
        r = subprocess.run(["curl", "-s", "--max-time", "30", "--proxy", PROXY,
            f"https://suggestqueries.google.com/complete/search?client=chrome&q={prefix}{query}"],
            capture_output=True, text=True, timeout=35)
        data = json.loads(r.stdout)
        for s in (data[1] if len(data) > 1 else []): all_kw.add(s)
        time.sleep(4)  # 避免被 Google 限速
    # 保存结果到 keyword-results/{name}.md
    with open(f"keyword-results/{name}.md", "w") as f:
        for kw in sorted(all_kw): f.write(f"- {kw}\n")
    print(f"{name}: {len(all_kw)} keywords")
PYEOF
```

#### 1.2.4 验证流程

1. **抓取**：运行脚本，获取所有 Google Suggest 建议词
2. **去噪**：手动剔除明显无关的词（如游戏名与其他内容撞车的词）
3. **分类**：按搜索意图分类（How-to / Best / Weapons / Build / Beginner / Co-op…）
4. **命中率检查**：逐一对比"我们已有的攻略"和"Google真实搜索词"
5. **补缺口**：真实搜索词中有、但我们没覆盖的 → 新增攻略
6. **不追**：明确无关或低价值词（如 `cheats`、混淆词）

#### 1.2.5 实战案例

2026-07-11 对四个站进行了关键词验证：

| 站点 | 抓取词数 | 命中率 | 补充攻略 |
|------|---------|--------|---------|
| Witchspire | 88 | 核心词全覆盖，缺操作细节 | +2（Demo + Character Creation） |
| Mistfall Hunter | 89 | Build词全覆盖，缺社交/设置 | +3（Multiplayer + Class Change + Settings） |
| Aincrad | 107 | 覆盖率最高，缺Demo/Build排名 | +3（Demo + Build Tier List + EX-Mod Tier List） |
| The Mound | 46 | 新游戏词量少，基础覆盖够用 | +1（Game Length + FAQ扩充） |

**核心教训**：
- 我们猜的关键词方向**大部分正确**（Build、Weapons、Beginner Guide 在所有游戏中都有搜索）
- 但我们**遗漏了高频操作细节词**（如 `how to sprint`、`how to save`、`how to change class`）
- **Demo 相关搜索**是意料之外的强需求（两个游戏都有大量 `demo` 搜索）
- 新游戏（The Mound）词量少，但 `release date`/`price`/`crossplay` 等基础信息搜索集中

#### 1.2.6 注意事项

- **代理**：Google Suggest API 在中国大陆需通过代理访问，推荐 V2Ray（HTTP:1087 / SOCKS5:1080）
- **限速**：Google 会对频繁请求限速，每次请求间隔 ≥ 4 秒；同一 IP 每分钟建议不超过 10 次
- **SOCKS5 vs HTTP**：两个代理端口走同一出口 IP，Google 限速基于 IP 而非端口
- **干扰词**：Google 可能会把相似名称的游戏混在一起（如 `witcspire` 和 `witchfire`），需手动清理

### 1.3 选游戏 🔑

> **选游戏 = 选赛道。游戏选错了，SEO 做得再好也没人搜。不是挑"热门游戏"，而是挑"搜索结构最健康的游戏"。**

#### 1.3.1 选游戏的四维评分体系

用一个游戏能不能做攻略站赚钱，不看热度，看这四个维度：

| 维度 | 判断标准 | 权重 |
|------|---------|------|
| **搜索需求结构** | 有没有 `how to` / `best build` / `tier list` / `guide` / `fix` 类关键词？ | ⭐⭐⭐⭐⭐ |
| **生命周期** | 新发售（0-6月）→ 搜索爆发 / 稳定期（1-5年）→ 长尾稳定 / 过气 → 不碰 | ⭐⭐⭐⭐ |
| **内容可扩展性** | 有没有职业/Build系统、装备/技能树、Boss/关卡、版本更新？能拆出100+篇吗？ | ⭐⭐⭐⭐ |
| **竞争结构** | Fandom/IGN 是否垄断？Reddit 是否活跃但未SEO化？有没有独立Wiki？ | ⭐⭐⭐ |

**快速判断公式**：
> 如果一款游戏能生成 ≥ 200 个攻略类关键词 → SEO 金矿  
> 如果 < 50 个 → 不碰

#### 1.3.2 游戏发现：数据源

**PC/主机：**

| 来源 | 链接 | 用途 | 频率 |
|------|------|------|------|
| Steam 热门新游 | `store.steampowered.com/search/?filter=popularnew&sort_by=Released_DESC` | 找已上线的新游戏 | 每天 |
| Steam 热门即将推出 | `store.steampowered.com/explore/upcoming/` | 愿望单最高的未上线游戏 | 每周 |
| SteamDB | `steamdb.info/upcoming/` | 关注数、精确发售日 | 每周 |
| Steam 新品节 | `steamnextfest.com` | 每年2/6/10月，几百款游戏集中放Demo | 活动期每天 |

**手游：**

| 来源 | 链接 | 用途 | 频率 |
|------|------|------|------|
| Google Play 新游 | `play.google.com/store/games` | 新上线手游 | 每周 |
| r/gachagaming | `reddit.com/r/gachagaming` | 新游情报 + 玩家讨论 | 每天 |
| Sensor Tower（免费层） | `sensortower.com` | 下载量/收入预估 | 按需 |

**UGC 平台：**

| 来源 | 链接 | 用途 | 频率 |
|------|------|------|------|
| Roblox 热门榜 | `roblox.com` → Discover → Popular | 找高并发子游戏 | 每周 |
| Minecraft 社区 | Reddit/YouTube 热门 | 找新玩法/Mod趋势 | 按需 |

#### 1.3.3 筛选流程（五条硬标准）

```
打开 Steam 新发售 / 即将推出
  ↓
① 只看 RPG / 动作 / 生存 / 合作 / 恐怖 这几类
  ↓
② 跳过3A大作（Fandom Wiki 会瞬间覆盖，没机会）
  ↓
③ 跳过超小众独立游戏（评价数 < 50、截图像一个人做的）
  ↓
④ 开发商规模中等（20-100人）：不会像暴雪有官方攻略站，但有玩家基数
  ↓
⑤ Steam 评价 ≥ 70% 好评（太差没人玩）
  ↓
⑥ 检查 Wiki 覆盖：「游戏名 wiki」前五名没有 Fandom/IGN 专题页
  ↓
⑦ Google Trends 验证：搜索量在上升
  ↓
→ 全部通过 = 候选目标 ✅
```

#### 1.3.4 游戏类型红黑榜

**✅ 推荐做**（能拆出大量攻略页）：

| 类型 | 推荐理由 | 内容量估算 |
|------|---------|-----------|
| 开放世界 RPG | 职业+装备+Boss+探索，内容极多 | 80-150 篇 |
| 魂系/高难度动作 | 玩家频繁卡关，搜索意愿极强 | 60-120 篇 |
| 生存建造 | 制作+建造+生态，攻略链长 | 100-200 篇 |
| 合作恐怖/射击 | 团队配合+武器+机制，社区活跃 | 50-100 篇 |
| Roguelike | Build多样+每局不同，攻略复读需求高 | 80-120 篇 |
| Extraction（掠夺撤出） | 武器+Build+PvPvE+地图，复合系统 | 80-120 篇 |

**❌ 不推荐**（内容天花板低）：

| 类型 | 原因 |
|------|------|
| 超休闲游戏 | 玩家不查攻略，留存低，广告价值低 |
| 纯竞技体育（FIFA/NBA 2K） | 攻略内容极少，玩家看直播不搜文字 |
| 视觉小说 | 搜「全结局」「选项指南」就没了，天花板 ~20 篇 |
| 已停服游戏 | 搜索量持续下降，做了白做 |
| 过于小众的独立游戏 | 搜索量极低，ROI 不划算 |

#### 1.3.5 快速判断：一个游戏"能做多大"

搜这三组词，看搜索结果数量和质量：

```
1. "{游戏名} wiki" → 有没有独立Wiki站？前五名内容是否完整？
2. "{游戏名} best build" → 有没有人在做Build攻略？内容深不深？
3. "{游戏名} how to" → Google Suggest 自动补全多少条？"People also ask"几个问题？
```

**判据**：
- 三个搜索都没有完整答案 → **蓝海，立刻做**
- Wiki 存在但内容浅 → **可做，用深度内容差异化**
- Wiki 已全面覆盖 → **不碰**

#### 1.3.6 维护候选观察池

每周日过一遍 Steam，用一个简单表格维护候选：

```
| 游戏 | 类型 | 开发商 | 上线日期 | 愿望单 | Trends | Wiki | 判断 |
|------|------|--------|---------|--------|--------|------|------|
|      |      |        |         |        |        |      |      |
```

#### 1.3.7 实战验证

我们现有的四个站，按上述方法论复盘：

| 站点 | 游戏类型 | 选品逻辑 | 结果 |
|------|---------|---------|------|
| Witchspire | 合作生存RPG | 中型工作室 EA新游，无Wiki | 18篇，搜索词88条 ✅ |
| Mistfall Hunter | PvPvE Extraction | Next Fest #4最热试玩，无Wiki | 25篇，搜索词89条 ✅ |
| Aincrad | 动作JRPG | 大IP粉丝基础，上线7天 | 20篇，搜索词107条 ✅ |
| The Mound | 合作恐怖Extraction | 60万愿望单，无Wiki，上线前1天建站 | 11篇，搜索词46条 ✅ |

#### 1.3.8 手游（Gacha / Mobile RPG）

> Steam 不是唯一的数据源。手游攻略站是一个被忽视的富矿——英文手游攻略内容竞争远低于 PC/主机。

**为什么手游值得单独考虑：**

| 差异点 | PC/主机游戏 | 手游 |
|--------|-----------|------|
| 搜索词类型 | how to beat boss, best build | **tier list, codes, reroll, banner, team comp, should I pull** |
| 更新频率 | 数月~数年一次 | **2-6 周一个版本** → 持续内容机会 |
| 搜索量 | 集中在发售前后 | **持续稳定**，每版本更新都有新搜索 |
| 竞争度 | Fandom/IGN 覆盖广 | **英文站竞争较低**（日文/中文攻略多，英文少） |
| 玩家行为 | 搜索通关攻略 | **搜索抽卡决策、资源规划** |

**手游专属高价值关键词：**

| 关键词类型 | 示例 | 搜索意图 |
|-----------|------|---------|
| `tier list` | `{game} tier list 2026` | 角色/武器强度排行 |
| `codes` / `redeem codes` | `{game} codes july 2026` | 兑换码（月活搜索） |
| `reroll guide` | `{game} reroll guide` | 刷初始教程 |
| `banner schedule` | `{game} next banner` | 卡池排期 |
| `team comp` | `{game} best team` | 配队攻略 |
| `should I pull` | `{game} should I pull {character}` | 抽卡建议 |
| `farm guide` | `{game} how to farm currency` | 资源规划 |
| `beginner guide` | `{game} beginner guide 2026` | 新手入坑 |

**手游选品标准：**

1. **有全球发行**（非仅日服/韩服/国服）→ 确保英文搜索量
2. **Gacha + RPG 类型优先** → 角色多、Build多、版本更新频繁
3. **6个月以上运营历史** → 搜索量已验证
4. **英文Wiki缺失或不完整** → 内容缺口

**典型案例**：Game8（日本最大攻略站）核心收入来源就是手游攻略——角色评测 + 首抽推荐 + 强度榜。

**发现手游的数据源：**

| 来源 | 链接 | 用途 |
|------|------|------|
| Google Play 新游 | `play.google.com/store/games` | 新上线手游 |
| App Store 游戏榜 | `apps.apple.com` | iOS 端热门 |
| Sensor Tower（免费层） | `sensortower.com` | 下载量/收入预估 |
| r/gachagaming | `reddit.com/r/gachagaming` | 新游情报 + 玩家讨论 |

#### 1.3.9 Roblox & 用户生成内容（UGC）平台

> Roblox 不是一个游戏，是几百万个独立游戏的平台。每个热门 Roblox 子游戏都可以做一个独立的攻略站。

**已验证的案例**：一个开发者用 Next.js + Cloudflare 搭建了 **13 个 Roblox 单游戏攻略站**，其中一个站 60 天做到 **日均 500+ 自然搜索访问**。核心发现：计算器/排行榜页面的 **CTR 比纯文字攻略高 3-5 倍**。

**Roblox 子游戏的选品特征：**

| 特征 | 说明 |
|------|------|
| 游戏类型 | 模拟器类（Simulator）、RNG 类（随机抽奖）、RPG 类最优 |
| 搜索信号 | 玩家在 Reddit/Discord 频繁问 "how to get X"、"best strategy" |
| 竞品情况 | Fandom Wiki 通常只有玩家自发维护，结构混乱、更新慢 |
| 内容形式 | **计算器/效率榜 > Tier List > Codes > 纯文字攻略** |

**Roblox 攻略站内容模式：**

| 页面类型 | 示例 | 为什么有效 |
|---------|------|-----------|
| 兑换码 | Active Codes (Monthly) | 月活搜索，玩家必搜 |
| 计算器 | DPS Calculator, Upgrade Cost Calculator | 游戏内信息不透明 → 强需求 |
| 效率榜 | Best XP Farm, Best Money Method | 玩家天然想知道最优解 |
| Tier List | Pet Tier List, Weapon Tier List | 高频搜索，竞争低 |
| 地图/位置 | All NPC Locations, Secret Areas | 探索类游戏刚需 |

**同样适用于**：
- **Minecraft** 子领域（种子推荐、建造教程、Mod安装）
- **Fortnite Creative** 模式（地图代码）

**选品方法**：
1. 打开 Roblox 官网 → 按玩家数排序 → 找 1000+ 并发在线的 RPG/模拟器类游戏
2. 搜 `{游戏名} wiki` → 看是否有混乱的 Fandom Wiki（混乱 = 机会）
3. 搜 `{游戏名} codes` → 看是否有专门页面在做（做了说明有搜索量）

### 1.4 定域名

```
决策流程：
选定目标游戏 → 确定域名 → 检查域名可用性
```

**域名建议**：
- 优先：`{gamename}wiki.com` / `{gamename}guide.com`
- 备选：Vercel 免费域名 `{projectname}.vercel.app`（起步够用，后续再绑自定义域名）
- 避免：与官方商标冲突太直接的域名（如 `{gamename}.com`）
- 小技巧：域名里嵌关键词自带 SEO 权重（如 `farevergame.wiki` 自带 `farever game wiki` 搜索匹配）

### 1.5 内容准备

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

> **最后更新**：2026-07-12  
> **基于实战**：Witchspire / Mistfall Hunter / Aincrad / The Mound 四个站点  
> **维护**：每上线一个新站点，回来更新本文档中遇到的新的坑。
