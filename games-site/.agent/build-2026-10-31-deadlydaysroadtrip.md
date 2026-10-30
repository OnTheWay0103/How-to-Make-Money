# 建站报告 — Deadly Days: Roadtrip（BUILD-DDR-2026-10-31）

- 任务：BUILD-DDR-2026-10-31（候选 #141，18/20）
- 站点：`deadlydaysroadtripwiki/` → https://deadlydaysroadtripwiki.vercel.app
- 游戏：Deadly Days: Roadtrip ｜ 开发商 Pixelsplit ｜ 发行 Sidekick Publishing ｜ Steam appid 3026450 ｜ EA 2025-09-22，1.0 2026-10-29
- 结论：**上线成功（HTTP 200 / SEO ERROR 0 / 部署 Ready）；GA4 与 Adsterra 因无 ID 未完成，未伪造**

## 1. 门禁与 exit code

| 步骤 | 命令 | exit |
|---|---|---|
| 模板初始化 | `new-site.mjs --slug deadlydaysroadtrip --name "Deadly Days: Roadtrip" --developer "Pixelsplit" --publisher "Sidekick Publishing" --release-date 2026-10-29 --steam-id 3026450 --domain deadlydaysroadtripwiki.vercel.app --dir deadlydaysroadtripwiki --no-codes` | 0 |
| 依赖 | `pnpm install`（store 链接；unrs-resolver build script 被 pnpm 忽略，不影响 build） | 0 / 警告 |
| 构建 | `pnpm build`（Next.js 16.3.4，20 静态页） | 0 |
| 部署 | `./deploy-wiki-site.sh deadlydaysroadtripwiki` | 0（dpl_FQXj23V3EALrp5q9jf2GpZxyX4RH，Ready） |
| SEO 本地 | `seo-check.mjs --site deadlydaysroadtripwiki` | 0 |
| SEO 线上 | `seo-check.mjs --site deadlydaysroadtripwiki --live --report .agent/seo-fix-deadlydaysroadtripwiki.md` | 0（ERROR 0 / WARN 13） |
| 广告位 | `check-ad-slots.mjs deadlydaysroadtripwiki` | **1**（无 zone ID） |
| 看板注册 | `check-dashboard-registry.mjs --site deadlydaysroadtripwiki` | **1**（无 GA4） |
| 看板登记 | `feishu-report.mjs --sites --apply` | 0（53 站，新增 3，更新 50） |

## 2. 页面清单与词数（7 guide + /faq，共 9,657 词）

| 页面 | 词数 | title / desc 字符 | 页型 |
|---|---|---|---|
| `/guides/beginner-guide` | 1,534 | 51 / 153 | 新手 |
| `/guides/character-tier-list` | 1,543 | 55 / 155 | tier list |
| `/guides/weapon-tier-list` | 1,439 | 57 / 155 | 武器 |
| `/guides/backpack-and-loot-guide` | 1,319 | 51 / 156 | 核心机制 |
| `/guides/bosses-guide` | 1,237 | 53 / 160 | Boss |
| `/guides/unlock-all-characters` | 1,301 | 53 / 159 | 解锁 |
| `/guides/meta-progression-guide` | 1,284 | 50 / 152 | 元进度 |
| `/faq` | 14 条问答 | 53 / 158 | FAQ |

另有 `/tier-list` 改写为「优先解锁顺序」页（与两篇 tier list 分工，避免撞意图）、首页 5 条已验证 FAQ。全部页面 H1=1、首段 49–58 词、`version: '1.0'`、`updated: '2026-10-31'`、`related` 块状数组。

## 3. 素材与矩阵

- `keyword-results/deadlydaysroadtrip-matrix.md`：8 行 P0（词 → 页 → 意图 → 素材源 → 优先级），MECE 分组，无 `gameplay`/`general` 大空类；显式排除 codes / 通关流程 / patch notes / mods
- `keyword-results/deadlydaysroadtrip-sources.md`：S1–S11，官方 7 条（Steam 商店页 + 6 篇官方公告）、独立 3 条（GamingOnLinux ×2、Gamepressure）、社区 1 条（kosguides）；每页 ≥2 独立来源且 ≥1 官方
- 未建 codes 页：买断制无兑换码；President 密码作为「内置社区密码」写入解锁页与 FAQ，明确标注非促销码

## 4. 线上验证

- 19 个 URL（15 页 + sitemap + robots + GSC 文件 + icon）全部 **200**，HTML 页 H1 均 = 1
- `/guides/nonexistent-page` → **404**（无软 404）
- sitemap 15 条 `<loc>` 与页面一一对应
- 验证方式：`dig @1.1.1.1` 取真实 IP + `curl --resolve`（本机 DNS 污染）

## 5. dashboard / GA4 / 广告位状态

| 项 | 状态 | 说明 |
|---|---|---|
| 看板登记 | 已登记 | `feishu-report.mjs --sites --apply` 成功 |
| GA4 | **缺失** | `googleAnalyticsId: ''`；需人工建 property、加 Dashboard 服务账号为读取者，再回填；`dashboard/lib/sites.ts` 暂无条目 |
| Adsterra global | **缺失** | 飞书「站点台账(人工)」两列为空，`adsterra-sync` 无代码可注入 |
| Adsterra guide | **缺失** | 同上 |
| 广告位结构 | 正确 | `app/layout.tsx` 挂 `ADSTERRA_ZONES.global` + `<PageAdBanner />`；guide 位在 layout 层按路径排除 `/guides/*`，GuideLayout 内联同一 zone；未在单页复制 `AdsterraSlot` |
| `/ads.txt` | 缺失 | 等 publisher ID 后补 |

## 6. 遗留项（交主 Agent / 人工）

1. GA4 property 创建 + measurement ID 回填 + 服务账号授权（不代填）
2. Adsterra 两个 zone 代码填入飞书人工表，等 20:00 回填脚本注入并部署
3. `/ads.txt` 待 Adsterra publisher ID
4. `STATS-游戏站点统计.md` 与台账成本列未更新（任务未授权）
5. 本站在 `check-ad-slots` / `check-dashboard-registry` 修好前为**配置未完成**状态，不是内容失败

## 7. 遵守的 MUST NOT

未 commit、未 push；未改其他站点；未手改 `.agent/expand-daily.json`；未建第二个站；未编造 GA4 / 广告位 / 兑换码；未删页或加 noindex 规避检查；未手改 `lib/seo-config.ts` / `lib/adsterra-zones.ts`。
