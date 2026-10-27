# QA Report — 2026-10-28 (quick) — waterparksimulatorwiki

### 执行摘要
- 模式: quick（仅审查本轮变更）
- 范围: 1 站 1 篇新 guide — `content/guides/chlorine-dirty-pool-water-guide.md`
- 结果: ✅ 通过（0 阻断 / 1 警告，警告为时区假警报）

### 发现清单

| # | 严重度 | 文件 | 问题类型 | 描述 | 判定 |
|---|--------|------|---------|------|------|
| 1 | 🟢 | chlorine-dirty-pool-water-guide.md | 门禁时序 | `lint-guides.mjs` 报 `updated-future`（updated: 2026-10-28） | 假警报：脚本按 UTC 比较，本机 08:2x CST 时脚本取到的"今天"仍是 UTC 侧边界，0 ERROR，不阻断 |

无 🔴 / 🟡 项。

### 内容审查（逐项）

| 检查项 | 结果 |
|---|---|
| 虚构检测（游戏特有名词） | ✅ 出现的专名仅 CayMart、Yogi、Saboteur、Splash & Dash，全部可在来源中找到；CayPlay 未在 Steam 页描述 chlorine 机制，故机制结论一律标 [Community] |
| 数字类断言 | ✅ 价格 $25、研究约 16 点 / Level 7 均标 [Community] 并写入「What is not confirmed」 |
| 模板残留 | ✅ `check-site-residue.mjs` → 无残留 |
| 跨站污染 | ✅ 新页无他站游戏名；全文 0 处提及 Shift At Midnight |
| 内部一致性 | ✅ 与 `visitor-problems-guide.md`（water quality 优先序）、`visitor-happiness-guide.md`（干净水）一致，无冲突数值 |
| 诚实标注 | ✅ 有独立「What is not confirmed」节；官方/社区来源在 sources 里分级 |
| AI 套话 | ✅ 无 "In the world of" / "Whether you're a" 句式 |

### 静态规格（构建门禁口径）

| 项 | 实测 | 标准 |
|---|---|---|
| title | 58 字符 | 40–60 ✅ |
| description | 158 字符 | 140–160 ✅ |
| H1（源码） | 1 | =1 ✅ |
| H1（线上渲染 `curl \| grep -o '<h1'`） | 1 | =1 ✅ |
| 正文词数 | 1,489 | 800–1,500 ✅ |
| 首段词数 | 59 | 40–60 ✅ |
| related 格式 | 块状数组（4 条，slug 均存在） | 块状 ✅ |
| sources | 5 条，含 3 条 Official | ≥1 Official ✅ |

### 抢词检查

新页目标是 `waterpark simulator chlorine / where is the chlorine / dirty pool water`，站内既有相关页均不含该意图：
`visitor-problems-guide`（满意度诊断，仅一句 "water quality"）、`visitor-happiness-guide`（需求表一行）、
`research-tree-guide`（解锁顺序）、`museum-questline-guide`（Yogi 主线，未提 chlorine）。
`grep -ril chlorine` 改前仅命中 `shelves-multistand-staff-guide.md` 的一条 patch note 引文，不构成落地页。

### 基建检查

| 站点 | Build | Deploy | Sitemap | GA4 | GSC |
|------|:--:|:--:|:--:|:--:|:--:|
| waterparksimulatorwiki | ✅ | ✅ 200 | ✅ 本页在 sitemap（28 loc） | ✅ G-JMLQMKR4X4 | ✅ 验证文件存在 |

- `pnpm install && pnpm build` → exit 0，`✓ Compiled successfully`，`/guides/chlorine-dirty-pool-water-guide` 出现在静态路由表
- 线上 `curl --resolve`：`/`、`/ads.txt`、`/sitemap.xml`、新页 → 全部 200
- 新页线上 `<title>` 正确、`<h1>` 计数 = 1

### 结论

**QA 结果: ✅ PASS (1/1)，0 阻断，0 待修**
