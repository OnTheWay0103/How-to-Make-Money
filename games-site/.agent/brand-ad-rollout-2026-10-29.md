# 广告位全页覆盖 + 默认 logo 上线记录 — 2026-10-29

> 触发：用户 2026-10-29 四项要求
> 1. 每个站申请了广告位的页面都要挂上，不要漏
> 2. 新增页面也不能漏广告位
> 3. 以上两条写进规则
> 4. `Weixin_2026-09-24.jpg` 作为默认网站 logo，更新到所有站
>
> 提交：`dc14faa feat(ads+brand): 广告位铺满全站页面，统一默认 logo`（含迁移脚本与校验脚本）

## §1 诊断：漏在哪、为什么查不出来

| 层 | 现状 | 结论 |
|---|---|---|
| 配置 `lib/adsterra-zones.ts` | 50/50 站都有 `global`(14) + `guide`(21) 两个位 | ✅ 没问题 |
| 组件 `components/AdsterraSlot.tsx` | 50/50 站与模板逐字节一致 | ✅ 没问题 |
| `global` 位渲染 | `app/layout.tsx` 全站每页 | ✅ 没问题 |
| `guide` 位渲染 | 只在 `/`（`variant="home"`）与 `/guides/<slug>`（`GuideLayout`） | ❌ **其余 7 类页面没有** |

漏掉的页面：`/guides`、`/faq`、`/tier-list`、`/about`、`/contact`、`/privacy`、`/terms`。

线上实测（aincradwiki，`dig @1.1.1.1` + `curl --resolve`）：

| URL | `id="container-` | 判定 |
|---|---|---|
| `/` | 1 | 有 banner |
| `/guides/beginner-guide` | 1 | 有 banner |
| `/guides` | 0 | 只有隐形 Social Bar |
| `/faq` | 0 | 同上 |
| `/tier-list` | 0 | 同上 |

**根因是结构性的**：banner 硬编码在 `app/layout.tsx` 的 `ADSTERRA:HOME` 块里，且
`AdsterraSlot` 的 `variant="home"` 只在 `pathname === '/'` 渲染。新增任何路由都拿不到
广告位——不是忘了写，是没地方可写。

**为什么之前所有检查都是绿的**：residue 检查查占位符、lint 查攻略正文、配置检查查 zone ID，
三者都不看渲染结果。跟 2026-10-27 的「48 站两个 H1」是同一类缺陷：**源码合规 ≠ 线上合规**。

## §2 改法

1. 新增 `components/PageAdBanner.tsx`（client），渲染 `ADSTERRA_ZONES.guide`，
   路径以 `/guides/` 开头时返回 `null`（`GuideLayout` 已内联同一 zone，避免一页两条）
2. `app/layout.tsx`：`ADSTERRA:HOME` 块 → `<PageAdBanner />`，标记改为
   `ADSTERRA:PAGE:START/END`；`global` 块不动
3. 结果：**广告位只在 layout 挂一次，新页面自动继承**，没有可忘的步骤

`variant="inline"` 会渲染 "Advertisement" 标签，首页从无标签变成有标签 —— 对外更清楚，属预期变化。

## §3 Logo

- 源图：`games-site/Weixin_2026-09-24.jpg`，1080×1080 JPEG，76.3 KB，无 alpha
- 生成：`public/icon.png`（512²，256 色 PNG，91.2 KB，同时是 `SITE_CONFIG.ogImage`）
  + `app/favicon.ico`（64/48/32/16，31.3 KB）
- Header：站名左侧加 32px 圆角图标（`object-cover`），保留各站站名文字
- ⚠️ 视觉服务当天不可用（`analyze_image` 返回 502 `rate_limited` / `invalid_key`），
  **未能看图内容**。因此按原图等比降采样、不裁切，规避切到主体；若图内有需裁掉的边或水印，
  需另行处理（改 `scripts/apply-brand-and-page-ad.mjs` 里的 `magick` 参数即可）

## §4 规则落点（用户第 3 项）

| 文件 | 加的内容 |
|---|---|
| `CLAUDE.md` | 战略基线新增「广告位必须挂在每个页面」硬约束 + 校验命令 |
| `docs/agents/03-岗位卡-建站协调员.md` | 处理动作新增第 5 步「广告位」；成功标准加一条 |
| `docs/agents/04-Profile-建站协调员.md` | 配置规则 3 条 MUST（渲染层、自动继承、check-ad-slots） |
| `docs/agents/06-Profile-QA审核员.md` | 新增「广告位覆盖检查规则」整节，MUST 查线上 |
| `docs/STRATEGY-内容生产.md` | 构建门禁节点 34 第 4 条 |
| `SOP-游戏攻略站上线.md` | C.9 上线验证清单从 5 条 → 6 条 |
| `auto-build-site.sh` | coordinator prompt 里的 QA 段加 `check-ad-slots.mjs`，定时轮自动执行 |

配套脚本：

- `scripts/apply-brand-and-page-ad.mjs` —— 幂等迁移脚本（已对 50 站 + 模板跑过，可重跑）
- `scripts/check-ad-slots.mjs` —— 渲染层校验，`--live` 抓线上 HTML

## §5 验证

本地 build（2 站，覆盖两代模板）：

| 站 | build | `/` | `/faq` | `/guides` | `/tier-list` | `/about` | `/privacy` | 攻略页 |
|---|---|---|---|---|---|---|---|---|
| aincradwiki（旧主题） | ✅ exit 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| witchspirewiki | ✅ exit 0 | 1 | 1 | 1 | 1 | — | — | — |

数字 = 预渲染 HTML 里 `id="container-` 的个数；攻略页 1 个说明 `PageAdBanner` 的
`/guides/` 去重生效（没有叠成 2 个）。

静态全量：`node scripts/check-ad-slots.mjs` → **50 站通过 50，失败 0**。

## §6 部署范围（用户指定「只铺有流量的站」）

按 `dashboard /api/traffic` 的 PV30 切分：

- **部署 41 站**（PV30 > 0）
- **不部署 9 站**（PV30 = 0，代码已改但线上仍是旧版）：
  `welcomeelderfieldwiki`、`sovereigntowerwiki`、`silverpineswiki`、`fallentearwiki`、
  `dressmakerwiki`、`doloctownwiki`、`crimsonmoonwiki`、`bombananawiki`、`anomalypresidentwiki`
- 这 9 站当时未写进 `.agent/pending-deploys.md`（那会被每轮 `deploy-pending.sh` 自动铺掉，
  与「只铺有流量的站」相悖）

> **2026-10-30 补记**：用户要求「其余的网站部署上去」，这 9 站已于 10-30 08:05–08:09
> 全部部署到 `c1e3618`，线上复验 `check-ad-slots.mjs --live` **9/9 通过**。
> 至此 52 站全部带广告位 + logo 改动上线，不再有遗留站。

部署结果见 §7（部署完成后回填）。

## §7 部署结果

**41/41 成功**，`.agent/deploy-log.jsonl` 本批次全部 `ok`（当天另有 1 条 `fail` 是 04:00
定时轮留下的 sephiriawiki，历史记录，非本批次）。耗时约 46 分钟（18:38–19:24）。

线上复验：

| 检查 | 结果 |
|---|---|
| `check-ad-slots.mjs --live` 41 站 | **41 通过 / 0 失败** |
| 全页型抽查 aincradwiki | `/`=1 `/faq`=1 `/guides`=1 `/tier-list`=1 `/about`=1 `/contact`=1 `/privacy`=1 `/terms`=1 |
| 全页型抽查 themoundwiki | 同上，8 个页面各 1 |
| 攻略页不叠 | `/guides/<slug>` 恰好 1 个 `container-` |
| Logo 线上 | `/icon.png` HTTP 200，93,346 字节（与生成文件 md5 一致）；页面含 `src="/icon.png"` |
| 未部署的 9 站 | `crimsonmoonwiki` / `anomalypresidentwiki` 的 `/faq` 仍为 0 个容器（线上仍是旧版，符合预期） |

## §8 遗留

- ~~9 个 PV30=0 的站线上仍为旧版~~ → **2026-10-30 已全部部署**，复验 9/9 通过（见 §6 补记）
- `AdsterraSlot` 的 `variant="home"` 分支已无调用方，保留未删（仍是有意义的 API，删它要动 51 个文件且会再触发一轮全量部署）
- 视觉服务当天不可用，logo 未经人眼确认；如需裁切/去边，改 `apply-brand-and-page-ad.mjs` 的 `magick` 参数重跑即可
- 飞书两张台账无对应列，本次改动不涉及台账数据
