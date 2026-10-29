# QA quick — waterparksimulatorwiki — 2026-10-29

> 模式: quick（expand 单页） | 游戏: Waterpark Simulator (Steam app 3293260)
> 审核对象: `content/guides/achievements-guide.md`

## 1. Residue Scan

| 站点 | 攻略数 | 模板残留 | 状态 |
|---|---:|---|---|
| waterparksimulatorwiki | 21 | 无 `{{UPPER_SNAKE}}`、无他站游戏名/域名、无 Hugo shortcode | ✅ Clean |

命令：`node scripts/check-site-residue.mjs waterparksimulatorwiki` → exit 0

## 2. Content Quality Sampling

| 站点 | 新增数 | 抽样数 | 编造情况 | 备注 |
|---|---:|---:|---|---|
| waterparksimulatorwiki | 1 | 1（100%） | 未发现编造 | 71 条成就名/解锁率全部来自 Valve 官方 API；社区口径逐条标 `[Community]` |

抽样检查项：

- **数字来源**：71 条成就、全部全球解锁率 → `ISteamUserStats/GetGlobalAchievementPercentagesForApp`（2026-10-29 实测 200）。
- **官方补丁事实**：1.0.21 beach/zipline、1.0.28 Nothing left to learn、1.0.91 painting + Slip Happens 冻结、
  1.0.21–1.0.31 空公园文件校验 → Steam 官方新闻 API 原文。
- **社区主张**：Easy/Sandbox 不给成就、70 人上限、主机 70 人触发、多人仅房主计数、Yogi 诈骗触发点
  → 均标 `[Community]`，并在「What is not confirmed」单列。
- **冲突处理**：Whisper 写 15 m 坠落，Steam API 内部名为 `FALL_HEIGHT_20M`；正文采用 20 m，
  未采用冲突的 15 m，并在 source text 里记录该冲突。
- **无来源断言**：未发现把社区数字写成官方事实的句子；无虚构专名/机制。

## 3. 写作规格（本次新增页）

| 项 | 实测 | 标准 | 结果 |
|---|---|---|---|
| title | 54 字符 | 40–60 | ✅ |
| description | 155 字符 | 140–160 | ✅ |
| H1（markdown） | 1 | 有且仅有 1 | ✅ |
| H1（线上渲染） | 1 | =1 | ✅ |
| 首段 | 50 词 | 40–60 且直答 | ✅ |
| 正文词数 | 1,380 | ≥1,200（本次上限 1,600） | ✅ |
| 表格 | 5 | 2–4（SHOULD） | ⚠️ 5 张，为完整覆盖 71 条成就；非 FAIL 项 |
| related | 块状数组，5 条，均存在 | 块状、无死链 | ✅ |
| sources | 16 条（Official 8 / Community 7 / Editorial 1） | ≥2 且 ≥1 Official | ✅ |

## 4. 构建门禁

| 检查 | 结果 |
|---|---|
| `node scripts/lint-guides.mjs waterparksimulatorwiki` | 0 ERROR / 0 WARN（21 篇） |
| `node scripts/check-site-residue.mjs waterparksimulatorwiki` | ✅ 无残留 |
| `pnpm install && pnpm build` | exit 0（34 个静态页；新页进入 SSG 路由表） |
| `node scripts/check-ad-slots.mjs waterparksimulatorwiki` | exit 0 |
| 本地产物 H1 | `<h1` ×1 |
| 本地产物 title | `Waterpark Simulator Achievements Guide: All 71 Unlocks · Waterpark Simulator Wiki` |

> 非阻断提示：`pnpm install` 报 `ERR_PNPM_IGNORED_BUILDS: unrs-resolver@1.12.2`（pnpm 构建脚本审批提示），
> 随后 `pnpm build` exit 0，静态产物完整。

## 5. 广告位（渲染层）

| 检查 | 命令 | 结果 |
|---|---|---|
| 源码/渲染层 | `check-ad-slots.mjs waterparksimulatorwiki` | exit 0 |
| 线上 HTML | `check-ad-slots.mjs waterparksimulatorwiki --live` | exit 0 |

新页未手写 `<AdsterraSlot>`；广告位由 layout / GuideLayout 继承，符合 2026-10-29 规则。

## 6. 部署与线上复验

| 项 | 证据 |
|---|---|
| 部署 | `./deploy-wiki-site.sh waterparksimulatorwiki` exit 0；新部署 `waterparksimulatorwiki-pludloutq-zhaoq0103s-projects.vercel.app` |
| DNS | `dig @1.1.1.1 +short` → 64.29.17.131 / 64.29.17.195 |
| 新页 | `curl --resolve` → **200**，H1 = **1**，title 正确 |
| 首页 / sitemap | `/` 200；`/sitemap.xml` 200，29 条 loc，含 `guides/achievements-guide` |
| canonical | 指向自身 |
| 广告位 live | exit 0 |

## 7. 结论

**PASS**

新增页构建通过、已部署、线上 200、H1=1、title/description/词数达线、来源满足双源规则、
广告位源码与线上均通过。唯一非 FAIL 提示是本页用了 5 张表（规格建议 2–4），
原因是需要逐条列出 71 个成就；拆表会降低可读性，故保留。

## 8. 已知限制

- Steam 社区 hub 本机 TCP 不可达，两条 Steam 讨论串经搜索引擎索引读取，已在 sources 中注明。
- 主机版成就/奖杯数量与触发条件与 Steam 不同；本页只承诺 Steam 口径。
- `Easy/Sandbox 禁用成就` 无官方补丁原文，按 `[Unconfirmed]` 处理，未写成确定事实。
