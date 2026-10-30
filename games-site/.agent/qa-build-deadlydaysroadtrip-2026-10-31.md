# QA 快检 — deadlydaysroadtripwiki（BUILD-DDR-2026-10-31）

- 日期：2026-10-31
- 站点：`deadlydaysroadtripwiki/` → https://deadlydaysroadtripwiki.vercel.app
- 版本口径：`1.0`（2026-10-29 发售）
- 结论：**内容侧 PASS；配置侧 2 项 BLOCKED（GA4 / Adsterra 无 ID），非内容问题，未伪造**

## 1. 硬门禁 exit code

| 检查 | 命令 | exit |
|---|---|---|
| 模板初始化 | `node scripts/new-site.mjs --slug deadlydaysroadtrip ... --no-codes` | 0 |
| SEO 本地 | `node scripts/seo-check.mjs --site deadlydaysroadtripwiki` | 0 |
| SEO 线上 | `node scripts/seo-check.mjs --site deadlydaysroadtripwiki --live` | **0**（ERROR 0 / WARN 13） |
| 构建 | `pnpm build` | 0（20 静态页） |
| 部署 | `./deploy-wiki-site.sh deadlydaysroadtripwiki` | 0（dpl_FQXj23V3EALrp5q9jf2GpZxyX4RH，Ready） |
| 广告位 | `node scripts/check-ad-slots.mjs deadlydaysroadtripwiki` | **1** |
| 看板注册 | `node scripts/check-dashboard-registry.mjs --site deadlydaysroadtripwiki` | **1** |

## 2. 内容检查

- 页面：7 篇 guide + `/faq` = 8 页（首批 5–8 页上限内）；总词数 9,657；单篇最少 1,237（bosses-guide），全部 ≥1,200
- 每页 H1 = 1（ReactMarkdown 剥掉正文首个 `#`，H1 由 GuideLayout 输出）
- title 50–57 字符、description 152–160 字符，全部在 40–60 / 140–160 区间
- 首段 49–58 词，全部在 40–60 区间
- `related` 全部为块状数组，引用的 slug 7/7 存在
- 版本字段 `version: '1.0'` 7/7；`updated: '2026-10-31'` 7/7
- 跨站残留扫描：`check-site-residue` exit 0；无中文正文；无 `{{...}}` 占位符
- 无 codes 页（买断制，无兑换码）；未编造兑换码/Boss 数值/掉率，未公开值一律 `[Unconfirmed]`（共 15 处）
- 无硬编码百分比断言；价格与折扣标注核对日期
- 未删页规避检查、未加 noindex

## 3. 线上验证（`dig @1.1.1.1` + `curl --resolve`）

19 个 URL 全部 HTTP 200，HTML 页 H1 均 = 1：

`/`、`/guides`、`/faq`、`/tier-list`、`/about`、`/contact`、`/privacy`、`/terms`、7 篇 guide、`/sitemap.xml`、`/robots.txt`、GSC 校验文件、`/icon.png`

- sitemap 15 条 `<loc>`，与实际 15 个页面一一对应，无漏页
- robots：`Allow: /` + Sitemap 指向正确
- 软 404：`/guides/nonexistent-page` 返回 404（正确）

## 4. 配置侧缺口（BLOCKED，需主 Agent / 人工处理）

1. **Adsterra 无 zone ID**：`check-ad-slots` 报 `global/SocialBar` 与 `guide/NativeBanner` 均无 ID；`adsterra-sync.mjs --site deadlydaysroadtripwiki` 报「台账里没有填广告位代码，无需注入」。结构接线正确（layout 挂 global + PageAdBanner，GuideLayout 内联 guide 且排除 `/guides/*`），只缺 ID。未伪造。
2. **GA4 为空**：`googleAnalyticsId: ''`；`feishu-report.mjs --sites --apply` 已登记站点（53 站，新增 3），但 GA4 measurement ID 需人工建 property 后回填，`dashboard/lib/sites.ts` 暂无条目。未伪造。
3. **`/ads.txt` 缺失**：`public/` 只有 GSC 文件与 icon.png；等 Adsterra 账号给出 publisher ID 后补。

## 5. WARN 清单（按 2026-10-29 决定暂不处理）

title 长度 5、canonical 4、内链 2、static canonical 1、description 长度 1（`/guides` 134 字符）。无 ERROR。

## 6. 未做（交主 Agent）

- 未 commit / push（按 MUST NOT）
- 未改 `STATS-游戏站点统计.md`、未回填台账成本列
- 未动 `.agent/qa-report.md`
