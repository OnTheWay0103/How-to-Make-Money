# QA Report — 2026-10-28 (quick) — shiftatmidnightwiki

### 执行摘要
- 模式: quick（仅审查本轮变更）
- 范围: 1 站 1 篇新 guide — `content/guides/voice-chat-mic-setup-guide.md`
- 结果: ✅ 通过（0 阻断 / 1 警告，警告为时区假警报）

### 发现清单

| # | 严重度 | 文件 | 问题类型 | 描述 | 判定 |
|---|--------|------|---------|------|------|
| 1 | 🟢 | voice-chat-mic-setup-guide.md | 门禁时序 | `lint-guides.mjs` 报 `updated-future`（updated: 2026-10-28） | 假警报，0 ERROR，不阻断 |

无 🔴 / 🟡 项。

### 内容审查（逐项）

| 检查项 | 结果 |
|---|---|
| 虚构检测 | ✅ 专名仅 Proximity chat、NET/register 类通用词，均可在 Steam 商店页与官方更新公告中找到；未编造版本号、未编造官方 bug 修复 |
| 数字/事实断言 | ✅ 3 人上限（官方商店页）、逐玩家音量滑杆（2026-08-20 公告）、无设备选择器（社区实测）均标了层级 |
| 来源不可达的处理 | ✅ Steam Community 主机本机 ETIMEDOUT，公告条目已写明"自检索索引读到、未直接抓取"，并在「What is not confirmed」重复披露 |
| 模板残留 | ✅ `check-site-residue.mjs` → 无残留 |
| 跨站污染 | ✅ 新页无他站游戏名；全文 0 处提及 Waterpark Simulator |
| 内部一致性 | ✅ 与 `multiplayer-faq-guide.md`（3 人上限、proximity chat）不冲突，且新页把"找不到设备选择器"作为差异点显式点明；与 `entity-survival-guide.md`（实体听声）一致 |
| 诚实标注 | ✅ 有独立「What is not confirmed」节 |
| AI 套话 | ✅ 无 |

### 静态规格（构建门禁口径）

| 项 | 实测 | 标准 |
|---|---|---|
| title | 57 字符 | 40–60 ✅ |
| description | 155 字符 | 140–160 ✅ |
| H1（源码） | 1 | =1 ✅ |
| H1（线上渲染） | 1 | =1 ✅ |
| 正文词数 | 1,372 | 800–1,500 ✅ |
| 首段词数 | 53 | 40–60 ✅ |
| related 格式 | 块状数组（4 条，slug 均存在） | 块状 ✅ |
| sources | 4 条，含 2 条 Official | ≥1 Official ✅ |

### 抢词检查

新页目标是 `shift at midnight voice chat not working / mic not working / proximity chat / push to talk`（技术排查意图）。
现有相关 slug 均不含该意图：
- `multiplayer-faq-guide` — 回答"几个玩家 / crossplay / 怎么邀请 / 加入报错"，语音只在「Voice Chat, Muting, and Mic Discipline」里讲**礼仪与纪律**（约 1 节），不做设备排查
- `coop-strategy-guide` — 分工与战术
- `entity-survival-guide` — 实体听声的战术后果
- `pc-performance-guide` — 崩溃、卡顿、网络与存档，未提音频设备
- `shop-rating-cleaning-guide`（10-27）— 清洁与评分，主题无关
故本篇独占"麦克风为什么不出声 / 在哪设置"这一意图，并在正文与 related 中与上述页面互链。

### 基建检查

| 站点 | Build | Deploy | Sitemap | GA4 | GSC |
|------|:--:|:--:|:--:|:--:|:--:|
| shiftatmidnightwiki | ✅ | ✅ 200 | ✅ 本页在 sitemap（42 loc / 34 guide） | ✅ G-M8577QD2NQ | ✅ 验证文件存在 |

- `pnpm install && pnpm build` → exit 0，`/guides/voice-chat-mic-setup-guide` 出现在静态路由表
- 线上 `curl --resolve`：`/`、`/ads.txt`、`/sitemap.xml`、新页 → 全部 200；`/guides` 列表页含新页链接
- 存量 WARN（不在本轮范围）：多个存量页正文无 markdown `#` 标题（页面 H1 由 frontmatter 渲染，线上仍为 1 个），属 2026-10-27 已澄清的历史口径，不追溯

### 结论

**QA 结果: ✅ PASS (1/1)，0 阻断，0 待修**
