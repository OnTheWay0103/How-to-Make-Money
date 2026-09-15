# QA Report — EXPAND-2026-09-16-grainrot

> 模式: quick（仅审查本轮变更）| 岗位: QA 审核员（05-岗位卡 / 06-Profile）
> 站点: `grainrotwiki` | 审核时间: 2026-09-16
> 范围: 新增 1 篇 + 修改 4 篇 + 导航 1 处

### 执行摘要

- 模式: quick | 范围: 1 站 5 篇 guide + 1 导航文件
- 结果: **✅ PASS** — 🔴 阻断 0 / 🟡 警告 2 / 🟢 建议 1

---

## Residue Scan 表

| 站点 | 攻略数 | 模板残留 | 状态 |
|------|:---:|---------|:---:|
| grainrotwiki | 33（+1） | 无 | ✅ Clean |

扫描命令与结果（`rg`，已排除 `node_modules` / `.next`）：

| # | 扫描项 | 结果 |
|---|--------|------|
| A | 他站游戏名（SpiritVale/Witchspire/Mistfall Hunter/Echoes of Aincrad/Sephiria/Tears of Metal/…共 22 项） | ✅ 0 命中 |
| B | Hugo shortcodes（`{{<` / `{{%`） | ✅ 0 命中 |
| C | 模板描述短语（cooperative PvE extraction horror / cursed jungle / The Mound community / SpiritVale Studio / published by NACON / Vaulted Sky） | ✅ 0 命中 |
| D | app 页面（FAQ / tier-list / guides 元数据） | ✅ 无残留 |
| E | JSON-LD / schema 域名 | ✅ 本次未改动，沿用 9/11 修复态 |
| F | **正对照**（确认扫描非空跑） | ✅ `rg "Grain Rot" 新页` → 12 命中，证明扫描器有效 |

---

## Content Quality Sampling 表

| 站点 | 新增数 | 抽样数 | 编造情况 | 备注 |
|------|:---:|:---:|:---:|------|
| grainrotwiki | 1 篇新 + 4 篇改 | 5/5（100%，超 06-Profile 30% 下限） | ✅ 无编造 | 见下 |

### 编造检查（本轮核心）

**方法**：脚本提取新页全部引用字符串，归一化（BBcode 剥离 / 弯引号统一 / `\uXXXX` 解码 / 空白折叠）后与三个源语料逐条比对——① 850 条 Steam 评测合并语料；② 官方 Steam 公告 hub 全文；③ 官方商店页 HTML。

| # | 引用 | 归属源 | 结果 |
|:--:|------|--------|:---:|
| 1 | "Fixed so Quill shouldn't catch fire on his patrol route outside the Outpost" | 官方 Patch 1.06 | ✅ |
| 2 | "The Halloween Update will open the third floor of the Outpost and introduce a new questline" | 官方 roadmap 2026-08-12 | ✅ |
| 3 | "Second Floor of the Outpost" | 官方上线前公告 2026-07-14 | ✅ |
| 4 | "Complete 1.0 Quest Flow" | 官方上线前公告 2026-07-14 | ✅ |
| 5 | "you get to a certain quest in the game, and the quests just stop… 3rd floor… yet to be unlocked" | 评测 160 赞 8/11 | ✅ |
| 6 | "There is a 3rd floor in the house but as of now there is no way to find a key to unlock it" | 评测 28 赞 8/7 | ✅ |
| 7 | "had to google about the story & 3rd floor still being closed in a finished product" | 评测 70 赞 8/20 | ✅ |
| 8 | "had to go to the discord to figure out why I couldnt unlock certain parts of the base…" | 评测 62 赞 8/16 | ✅ |
| 9 | "after a certain point the quests stop" | 评测 15 赞 9/1 | ✅ |
| 10 | "u unlock the 2nd floor and the game just comes full stop shortly after unlocking it" | 评测 15 赞 8/21 | ✅ |
| 11 | "under no obligation to continue development further" | 评测 156 赞 8/10 | ✅ |
| 12 | "Currently I think it is deceptive to represent this as a full game" | 评测 160 赞 8/11 | ✅ |
| 13 | "The quests / tasks end after meeting NPC called Quill" | 评测 28 赞 8/7 | ✅ |
| 14 | "I think I have seen everything the game has to offer in around 6 hours" | 评测 28 赞 8/7 | ✅ |
| 15 | "you would be done in about 3-4h or less" | 评测 70 赞 8/20 | ✅ |
| 16 | "I believe it stands at 35 total" / "about 5 hours of competent gameplay" | 评测 160 赞 8/11 | ✅ |
| 17 | "1/3 or 1/4 complete" | 评测 15 赞 8/21 | ✅ |
| 18 | "Family Sharing"（商店页 Features） | 官方商店页 | ✅ |

**结论：18/18 通过，0 条无源。** 所有超出官方原文的内容量数字均标 `[Unconfirmed]`（新页共 6 处 `[Unconfirmed]` 标记）。

### 事实核验（与 Steam 官方一致性）

| 抽查项 | 站内表述 | 官方源 | 结论 |
|--------|---------|--------|:---:|
| 发售日 | 2026-08-07 | 商店页 `release_date` = `7 Aug, 2026` | ✅ |
| 是否 EA | 非 Early Access | 商店页无 EA 标识（`early_access:true` 属推荐位 appid 108600） | ✅ |
| 开发商/发行商 | Beck & Branch Games / Neem Interactive | 沿用 9/11 已核验值 | ✅ |
| 价格 | $9.99 | 商店页 US 区 `$9.99`（当前 -35% 促销 $6.49，未写入正文以免过期） | ✅ |
| 最新版本 | 1.09 / 2026-08-28 | 官方 hub 最新 event `headline` = "Patch 1.09" | ✅ |
| 三楼状态 | 关闭，排期十月 | 官方 roadmap 逐字 | ✅ |

### 站内一致性（跨页交叉检查）

| 检查项 | 结果 |
|--------|:---:|
| 新页与 `patch-notes-guide` 的三楼/版本表述是否一致 | ✅ 一致（同引官方 roadmap 原文） |
| 新页与 `full-release-guide` 的「Second Floor」表述是否一致 | ✅ 一致 |
| 是否回退 9/11 已裁定结论（v1.07 确已实装 public server browser） | ✅ 未触碰该结论；新页未提及 server browser 状态 |
| 双向 Scope note 是否齐全 | ✅ 新页 → 3 页；4 个既有页 → 新页（产物级验证全部 2 命中） |
| 标题/搜索意图是否与既有页重叠 | ✅ 唯一意图「三楼锁着 / 剧情终点」，与 patch-notes（版本史）、full-release（1.0 内容）分离 |
| 中文标记泄漏（`[待确认]`） | ✅ 0（全部英文 `[Unconfirmed]`） |
| AI 套话（"Whether you're a…"/"In the world of…"） | ✅ 无 |

---

## 基建检查

| 站点 | Build | Deploy | Sitemap | 新页线上 | GA4 | GSC |
|------|:---:|:---:|:---:|:---:|:---:|:---:|
| grainrotwiki | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**构建（产物级）**
- `pnpm install` → ok；`pnpm build` → `✓ Compiled successfully in 759ms`，`Finished TypeScript`，46 页 static 生成，exit 0
- 新页以 SSG 预渲染：`● /guides/third-floor-locked-guide`（`.next/server/app/guides/third-floor-locked-guide.html`，71,849 bytes）
- **表格渲染回归检查**（9/12 `ReactMarkdown.tsx` 事故）：新页产物 grep `-------` → ✅ 0 命中；2 张表格正常
- 首页产物不含 "Quick Navigation" → 见下方 🟡-1

**部署 + 线上验证（MUST 用 `--resolve`）**

新部署：`https://grainrotwiki-mw65sebfb-zhaoq0103s-projects.vercel.app`（`vercel ls` 显示 48s / Ready / Production，为最新）
生产 alias 校验：`vercel inspect grainrotwiki.vercel.app` → ✅ 解析到上述**本次新部署**（非旧部署）

DNS 说明：本机对 `grainrotwiki.vercel.app` 解析到 `216.198.79.131` / `64.29.17.131`；两个 IP 实测可用，`76.76.21.21` 返回 `HTTP=000`（**未计入 PASS**）。

| 目标 | IP | HTTP | 字节数 |
|------|----|:---:|:---:|
| `/`（首页） | 216.198.79.131 | 200 | 45,400 |
| `/`（首页） | 64.29.17.131 | 200 | 45,400 |
| **`/guides/third-floor-locked-guide`** | 216.198.79.131 | **200** | **72,169** |
| **`/guides/third-floor-locked-guide`** | 64.29.17.131 | **200** | **72,169** |
| `/sitemap.xml` | 216.198.79.131 | 200 | 7,476（含新 slug，共 41 个 `<url>`） |

线上内容抽查（`/guides/third-floor-locked-guide`）：`Why Is the Third Floor Locked` ×3、`Halloween Update will open the third floor` ×2、`Is Grain Rot Early Access` ×4、`Quill` ×4、`160 helpful` ×2、`Unconfirmed` ×6、`Patch Notes` ×3 — ✅ 全部命中

本轮修改的 4 个既有页线上复核（`--resolve` 216.198.79.131）：

| 页面 | HTTP | 字节数 | 指向新页的链接数 |
|------|:---:|:---:|:---:|
| `patch-notes-guide` | 200 | 70,740 | 2 ✅ |
| `release-date-faq` | 200 | 56,829 | 2 ✅ |
| `outpost-upgrade-guide` | 200 | 57,333 | 2 ✅ |
| `full-release-guide` | 200 | 68,106 | 2 ✅ |

线上残留扫描：`/guides/third-floor-locked-guide` 线上 HTML grep 他站游戏名 → ✅ 0 命中

---

## 发现清单

| # | 严重度 | 站点 | 文件 | 问题类型 | 描述 | 建议操作 |
|:--:|:---:|------|------|---------|------|---------|
| 1 | 🟡 | grainrotwiki | `content/home-content.md` | 死文件 | 全站 `rg "home-content\|homeContent"`（排除 node_modules/.next）**0 命中** —— 该文件无任何代码读取，本轮（及 9/11、9/13）对其导航表的新增**对线上零影响**。首页导航实际硬编码在 `app/page.tsx` 的 `FEATURED_GUIDES`。已验证：首页 HTML 不含 "Quick Navigation" 字样 | 二选一：(a) 把 `home-content.md` 接入首页渲染；(b) 在 03/04 Profile 标注其「已废弃，导航改动请改 `app/page.tsx`」。**不阻断本次提交**（新页已通过 `/guides` 索引 + 4 页交叉链接可达） |
| 2 | 🟡 | — | — | 采集通道 | Reddit 维度**连续两轮不可用**（9/11、9/16）：直连 403；`agent-reach` OpenCLI 的 `reddit subreddit`→`Failed to fetch`、`search`→`Navigation rejected`、`hot`→`TIMEOUT 60s`。本轮以 Steam 评测 API（850 条一手原文）替代，未编造任何 Reddit 内容 | 交主 Agent 排查 OpenCLI 浏览器登录态。**不阻断** |
| 3 | 🟢 | grainrotwiki | 新页 | SEO | 新页 1324 词，处于 800–1500 区间且与站内既有篇（1384/1408/1453）同量级。`related` 已指向 5 页 | 无需操作 |

### 未列入阻断的说明

- **非「无诚实标注」**：新页 `[Unconfirmed]` 6 处，覆盖全部玩家个人计数与推断内容。
- **非「一致性冲突」**：跨页交叉检查全部一致，且未回退 9/11 已裁定结论。
- **未发现虚构**：18/18 引用可溯源。

---

## 最终结论

| 站点 | Residue | 编造 | 一致性 | Build | Deploy | 结论 |
|------|:---:|:---:|:---:|:---:|:---:|:---:|
| grainrotwiki | ✅ Clean | ✅ 无 | ✅ 一致 | ✅ | ✅ | **PASS** |

**QA 结果: ✅ PASS (5/5) | ⚠️ WARN (2) | 🔴 FAIL (0)**

无 🔴 阻断项，本次变更**准予提交**。2 项 🟡 均为非本站内容质量的系统级问题（死文件 / Reddit 通路），建议交主 Agent 决策。
