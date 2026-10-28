# QA quick — Probably Stolen（BUILD-PS 2026-10-28）

> 执行人：主 Agent 直跑（建站 6 篇由 3 个并行子 Agent 写，QA quick 由主管复核 + QA 审核员报告）
> 日期：2026-10-28
> 站位：`probablystolenwiki/`｜线上：https://probablystolenwiki.vercel.app
> Vercel 项目：`prj_O1e3fqer8lEdw92KsyhP6uzqnna4`（org `team_Mwrd2QP7hPgKN6pawiY5tOCm`）
> 依据：`docs/agents/03`、`docs/agents/04`、`docs/STRATEGY-内容生产.md`、`SOP-游戏攻略站上线.md`
> 素材：`keyword-results/probablystolen-sources.md`（A1–A13，含 A2b）｜矩阵：`keyword-results/probablystolen-matrix.md`

## 结论

**PASS（quick）**。6 篇攻略 + `/faq`（16 问）+ `/tier-list`（实编辑页）上线，P0 覆盖 5/5、P1 覆盖 2/2，lint ERROR=0，build exit 0，线上 8 个 URL 全部 200 且 H1=1。

本单**故意不写**数值型页面（房租/买断价/利润表/熔炉配方与纯度/鉴定阈值/开局收入曲线），因为官方一条数都没公布；站内一律用 `[Unconfirmed]` 标注，不编数。GA4/GSC/Dashboard/Adsterra 均未做——用户明确「稍后我一起补GA4等」。

## 一、构建与静态检查

| 检查 | 结果 | 证据 |
|---|---|---|
| `node scripts/lint-guides.mjs probablystolenwiki` | ✅ exit 0 | 6 篇全部通过 |
| `node scripts/check-site-residue.mjs probablystolenwiki` | ✅ exit 0 | 无占位符 / 他站域名残留（**语义型模板残留未覆盖**，见第五节 🟠） |
| `pnpm install && pnpm build` | ✅ exit 0 | Next.js 16，静态路由全部生成 |
| title 40–60 / description 140–160 | ✅ | 48–53 / 149–160 |
| H1 = 1 | ✅ | 6/6；线下 HTML 复验 8/8 |
| 正文 ≥1,200 词/篇、总 ≥8,000 | ✅ | 1,429–1,501 / 合计 8,824（QA 口径，剔 frontmatter） |
| 首段 40–60 词直答 | ✅ | 51–59 词 |
| `related` 块状数组 | ✅ | 6/6，目标页 100% 存在 |
| 跨页重复（≥8 词同句） | ✅ 0 条 | 无批量换名词痕迹 |
| 竞对域名 / 「已可玩、已有评测」断言 | ✅ 0 命中 | — |
| 用 approximately/estimated 绕开 `[Unconfirmed]` | ✅ 0 命中 | — |

## 二、事实核验

QA 抽样 36 条，31 条逐字回溯到 sources 编号（86.1%），0 条自动修复；2 条推断已标注（房租「fixed cost + percentage cost」表述、`2x3` 全称判断）。

关键：`"Rent increases over time, regardless of how well your week went."` 曾被建站子 Agent 质疑无源，18:40 复抓 Steam 商店页（`dig @1.1.1.1 store.steampowered.com` → `104.83.198.104` + `curl --resolve`，163,097 bytes）确认逐字存在，已补入 **A2b**，**保留引文**而非删除。

## 三、部署与线上验证

| 项 | 结果 |
|---|---|
| `vercel deploy --prod` | ✅ `Production https://probablystolenwiki-pwwken33k-…` / `Aliased https://probablystolenwiki.vercel.app` |
| `/` | 200，H1 = Probably Stolen Wiki |
| `/guides` | 200，H1 = All Guides |
| `/faq` | 200，H1 = Probably Stolen FAQ: Release Date, Price, Platforms |
| `/tier-list` | 200，H1 = Upgrade Priority: What to Buy First |
| 6 个 `/guides/*` | 200 |
| `/sitemap.xml` | 200 |
| 本机 DNS 投毒 | 复验走 `dig @1.1.1.1`（216.198.79.3）+ `curl --resolve` |

## 四、缺口（明确不在本单范围）

| 项 | 状态 |
|---|---|
| GA4 property | ❌ 未建（用户稍后统一补） |
| Dashboard 注册 | ❌ 未注册（`check-dashboard-registry.mjs --site probablystolenwiki` 因无 measurement ID 失败） |
| GSC 提交 | ❌ 未提交 |
| Adsterra 两位 | ❌ 未接（等人工台账两列填了，20:00 回填脚本接管） |
| 飞书人工表行 | ✅ 已自动补登记（只填 站点/域名，其余列等人工） |

## 五、🟠 站点级残留（已修）+ 🟡 记录

模板语义残留 3 处，`check-site-residue.mjs` 查不到（它只查占位符/他站域名）：
1. `/tier-list` 是空壳页（`PRIORITY_TIERS = []`）→ **已重写**成实编辑页（S/A/B/C 四档 + "What Changes This Order" 一节，全部引 A2b/A4/A6 且解锁成本标 `[Unconfirmed]`）
2. 首页/关于页的 "codes / tier lists / boss strategies" 文案 → **已删改**为「Scenarios and endings」「Reference」
3. `lib/metadata.ts` keywords 里的 `Probably Stolen codes` / `tier list` / `boss guide` → **已换**为 `starting scenarios` / `upgrade priority` / `water guide`

🟡 记录 9 条（不影响上线，后续扩充时处理）：
- 首页 FAQ 实际 5 条（任务书写的 4 条）
- `3 post-launch scenarios` 无发布窗口 —— 已在正文写明「任何机制描述都是推断」
- 难度四档只有数量确认，名称/效果 `[Unconfirmed]`
- `2x3 rat` 未解释
- Rat Wrangler 是否沿用 Aquafarmer 的生长/投喂/品质系统 `[Unconfirmed]`
- 房租初始值 / 涨幅 / 宽限期 / 是否会被驱逐 `[Unconfirmed]`
- 买断价、是否可拒绝、是否解锁门槛 `[Unconfirmed]`
- total worth 是否计入未售库存 `[Unconfirmed]`
- demo mods 在正式版能否用 —— 正文用 "will likely not work"，属推断

## 六、解锁后待办（D+0 → D+7）

1. 补 1.0 实机数值（房租、买断价、利润、熔炉配方与纯度、鉴定阈值），把 `[Unconfirmed]` 逐项替换
2. 补 5 类矩阵里被押后的数值页（房租模型 / 水源利润表 / 熔炉纯度 / 9 开局收入曲线 / 鉴定阈值）
3. 补 review 数、CCU、Steam Deck 评级（发售前一律 `[待确认]`）
4. 用户补 GA4 后注册 dashboard
