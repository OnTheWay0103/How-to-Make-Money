# 建站记录 — #130 Zombie Assault: Resurgence（2026-10-30）

> 执行者：建站协调员（`docs/agents/03` + `04`）· 依据：`keyword-results/selection-2026-10-30.md` §3.2（14 分，可建压线）
> 当日新站上限 1 个，本日为唯一新站。

## 一、站点参数

| 项 | 值 |
|---|---|
| 目录 | `zombieassaultresurgencewiki/` |
| 游戏 | Zombie Assault: Resurgence |
| 开发 / 发行 | Ninja Kiwi / Ninja Kiwi |
| 发售 | 2026-10-28（Windows / Steam） |
| Steam app | 2747660 |
| 生成方式 | `node scripts/new-site.mjs --slug zombieassaultresurgence ... --dir zombieassaultresurgencewiki`（MUST NOT 从在运营站复制，已遵守） |
| 线上 | https://zombieassaultresurgencewiki.vercel.app |
| Vercel project | `prj_70WP5fdiESdrj5mib2keCHR3m0gX`（org `team_Mwrd2QP7hPgKN6pawiY5tOCm`，与其他站同 team） |
| GA4 | **未填**（`lib/seo-config.ts` 中 `googleAnalyticsId: ''`，未编造） |
| Adsterra | **未配**（`lib/adsterra-zones.ts` 出厂空数组，按规则不得手改） |

SEO 基础：`lib/seo-config.ts` description 已从生成器的 177 字符改为 **154 字符**（口径 140–160）。

## 二、首批 6 页（按 selection 页型分布：职业构筑 3 → 武器 3）

| # | slug | 标题 | title 字符 | desc 字符 | 正文词数 | H1 |
|---|---|---|---|---|---|---|
| 1 | `assault-class-guide` | Assault Class Guide — Zombie Assault Resurgence Build | 53 | 160 | 1,316 | 1 |
| 2 | `heavy-class-guide` | Heavy Class Guide — Zombie Assault Resurgence Build | 51 | 159 | 1,318 | 1 |
| 3 | `medic-class-guide` | Medic Class Guide — Zombie Assault Resurgence Support | 53 | 140 | 1,361 | 1 |
| 4 | `best-weapons-tier-list` | Best Weapons Tier List — Zombie Assault Resurgence | 50 | 158 | 1,737 | 1 |
| 5 | `all-weapons-guide` | All Weapons List — Zombie Assault Resurgence Arsenal | 52 | 158 | 1,559 | 1 |
| 6 | `weapon-mods-and-upgrading` | Weapon Mods and Upgrading — Zombie Assault Resurgence | 53 | 151 | 1,422 | 1 |

全部 ≥1,200 词、title 40–60、description 140–160、恰好 1 个 markdown H1、`related` 用块状数组（lint 0 ERROR）。

`codes` 页**未建**：付费买断、无兑换码生态，SERP 六查询零 codes 结果（selection §3.2）。

### 页面口径说明（写作红线执行情况）

- **XP / 技能点数**：只引 wiki.gg `Levels (ZAR)`，页内标注 Community 来源与抓取日；20 级 = 10 Basic + 10 Class + 1 Subclass。
- **职业技能名与数值**：ZA:R 尚未公布，**一律不写**，三篇职业页显式声明「未公布，SAS4 数据不适用」，改为写结构与加点节奏。
- **武器数值**：只引用 4 把单点样本（Galvanizer / HIKS M2831 / Krachlader / Frostbite），frontmatter `sources` 逐条标 URL + 抓取日 + 版本 1.0；**未整表搬运** wiki。
- **评测**：仅作事实「170 条评测 / 68% 好评 / Mixed」，未作购买建议。
- **改名**：`Auslegerlader → Krachlader` 在 `all-weapons-guide` 明确写为「0.9 前后改名」，旧攻略用旧名。

## 三、配套交付物

| 文件 | 内容 |
|---|---|
| `keyword-results/zombieassaultresurgence-matrix.md` | 14 行页面矩阵（词 → 页 → 意图 → 素材源 → 优先级），MECE 六组，无 `gameplay`/`general` 大空类；标注不建 codes 页 |
| `keyword-results/zombieassaultresurgence-sources.md` | 通用来源 O1–O5 + C1–C3，按页分节；未取到项写明「一手未取到」 |

### 素材来源对照（每页 ≥2 独立来源且 ≥1 官方）

| 页面 | 官方来源 | 社区/编辑来源 |
|---|---|---|
| assault / heavy / medic | Steam 商店页；Dev Diary #8；Dev Diary #13 | wiki.gg `Levels (ZAR)`；Editorial |
| best-weapons-tier-list | Steam 商店页；Dev Diary #13 | wiki.gg `Galvanizer` / `HIKS_M2831` / `Krachlader` / `Frostbite` |
| all-weapons-guide | Steam 商店页；Dev Diary #13；Next Fest Kill Count | wiki.gg 武器导航（Galvanizer 页）；游戏主页 |
| weapon-mods-and-upgrading | Steam 商店页；Dev Diary #13；0.9.1 补丁 | wiki.gg 游戏主页 / Galvanizer / Krachlader；Editorial |

## 四、检查结果（按序，全部给出退出码）

| # | 命令 | 结果 |
|---|---|---|
| 1 | `pnpm install && pnpm build` | ✅ build 通过：19 路由，6 篇攻略 SSG 全部生成，TypeScript 通过。⚠️ `pnpm install` 末尾报 `ERR_PNPM_IGNORED_BUILDS: unrs-resolver@1.12.2`，但依赖已链接、build 正常；对比 `witchspirewiki/pnpm-lock.yaml` 为同一版本同一形态，属本机 pnpm 审批配置，非本站缺陷 |
| 2 | `node scripts/lint-guides.mjs zombieassaultresurgencewiki` | ✅ exit 0，**0 ERROR / 6 WARN**（WARN 全为 `updated-future`：本机 CST=10-30、脚本按 UTC=10-29 比较，时区误报） |
| 3 | `node scripts/check-site-residue.mjs zombieassaultresurgencewiki` | ✅ exit 0，`无模板残留` |
| 4 | `./deploy-wiki-site.sh zombieassaultresurgencewiki` | ✅ 部署成功，alias `zombieassaultresurgencewiki.vercel.app` HTTP 200（共部署 3 次：首传 / 补词数 / 修链接） |
| 5 | `node scripts/seo-check.mjs --site zombieassaultresurgencewiki --live --report .agent/seo-fix-zombieassaultresurgencewiki.md` | ✅ **exit 0**，ERROR 0 / WARN 11（canonical + 静态页 title/description 长度，均为 2026-10-29 决定暂不处理项） |
| 6 | `node scripts/check-ad-slots.mjs zombieassaultresurgencewiki --live` | ❌ exit 1 — `zone global/SocialBar 无广告 ID`、`zone guide/NativeBanner 无广告 ID`。**预期内**：新站尚无 Adsterra zone，属人工流程（见第六节） |
| 7 | QA quick | ✅ PASS，报告 `.agent/qa-zombieassaultresurgencewiki-2026-10-30.md` |
| 8 | `node scripts/check-dashboard-registry.mjs --site zombieassaultresurgencewiki` | ⚠️ exit 0 但提示未填 GA4 measurement ID → 看板无数据，列为人工待办 |
| 9 | 本文件 | — |

### 部署前发现并修掉的问题

1. 生成器自动 description 177 字符 → 改 154。
2. `app/privacy/page.tsx` 模板写 Google AdSense → 改为 Adsterra（AdSense 2026-10-25 起暂缓）。
3. 首页 hero、`/guides` description、`/about`、`lib/metadata.ts` keywords 均残留 `codes` 字样（本作无兑换码）→ 全部替换为 class builds / weapon tiers / mods 等实有内容。`check-site-residue` 查不出这类语义残留。
4. 2 处内链指向未建的 `/guides/operation-modes-guide`（会软 404）→ 改为无链接表述。
5. `medic-class-guide` 首稿 1,146 词（脚本口径）低于 1,200 → 补「Three abilities, three jobs」一节，现 1,361 词。
6. `best-weapons-tier-list` / `medic` / `weapon-mods` 三页 description 超 160 → 逐个trim。

## 五、线上复验（部署后实测）

14 个 URL 全部 **HTTP 200**，`<h1>` 计数全部 = **1**：

| URL | HTTP | H1 |
|---|---|---|
| `/` | 200 | 1 |
| `/faq` | 200 | 1 |
| `/tier-list` | 200 | 1 |
| `/guides` | 200 | 1 |
| `/about` | 200 | 1 |
| `/contact` | 200 | 1 |
| `/privacy` | 200 | 1 |
| `/terms` | 200 | 1 |
| `/guides/assault-class-guide` | 200 | 1 |
| `/guides/heavy-class-guide` | 200 | 1 |
| `/guides/medic-class-guide` | 200 | 1 |
| `/guides/best-weapons-tier-list` | 200 | 1 |
| `/guides/all-weapons-guide` | 200 | 1 |
| `/guides/weapon-mods-and-upgrading` | 200 | 1 |

另：`/guides/operation-modes-guide` 实测 404（该页属 P1，尚未写）——站内已无指向它的链接。

## 六、待人工处理

| 项 | 谁做 | 怎么做 |
|---|---|---|
| **Adsterra 两个广告位** | 人 | 在 Adsterra 建 zone → 填飞书「站点台账(人工)」`广告位1-global` / `广告位2-guide` 两列 → 每天 20:00 `sync-ledger-manual` 自动写 `lib/adsterra-zones.ts` 并部署。**禁止手改 zones 文件或站点广告代码**。代码侧已确认：`app/layout.tsx` 挂 `PageAdBanner` + global 位，`GuideLayout` 内联 guide 位，zone 到位即全站生效 |
| **GA4 property + Dashboard 注册** | 人 | 建 property → 把 Dashboard 服务账号加成读取者 → 填飞书人工表 `GA4-measurementID` / `GA4-propertyID`；`lib/seo-config.ts` 现为空值，未编造 ID |
| **GSC 提交** | 人 | `public/` 已带 GSC 验证文件（模板内置），需在 GSC 添加站点并提交 sitemap |
| **看板/台账** | 主 Agent | 站点矩阵与 `STATS-游戏站点统计.md` 由主 Agent 统一回填，本次未改 |
| 后续扩词 | — | 按战略基线，D+30 前不扩词；P1 页面（核心技能、职业分支、2 Boss、行动模式、等级经济、联机 FAQ）列入 D+30 前计划，见 matrix §三 |

## 七、未提交

按指令 **未执行 `git commit` / `git push`**，改动留在工作区由主 Agent 统一提交。
未改 `keyword-results/CANDIDATE-POOL.md`，未改其他站点目录。
