# EXPAND-2026-10-31-nivalisnightswiki

- 状态：**成功**
- 站点：`nivalisnightswiki`（Nivalis Nights）
- 新页 slug：`no-customers-venue-empty-guide`
- 标题：Nivalis Nights No Customers: Why Your Venue Is Empty
- 文件：`nivalisnightswiki/content/guides/no-customers-venue-empty-guide.md`
- 部署 URL：https://nivalisnightswiki.vercel.app/guides/no-customers-venue-empty-guide

## 1. 选题

**Nivalis Nights 餐厅/场地没有客人（venue empty / no customers）的逐项诊断。**

选题依据：
- 高频：Steam 评测与第三方评测反复提到员工慢、顾客等到红脸离开、场地没有客流；Nexus 社区修复 mod 直接描述「no customers turn up. All day」；社区 wiki 有专门的 empty-venue 故障页。
- 具体：不是泛泛 beginner/tips，而是按「开门/菜单可做 → 厨师与服务生班次重叠 >1 小时 → 空座/雨天有顶座位 → popularity + distance 权重 → 饥饿周期与早高峰」五道门逐项排查。
- 站内未覆盖：现有 24 篇中 `manager-restock` 讲补货预算、`fill-venue-inventory-stuck` 讲进货入店、`best-business` 讲选店，没有任何一篇讲「客人为什么不来」。

## 2. 玩家反馈来源（真实 URL + 抓取日期）

| 来源 | URL | 日期 | 关键内容 |
|---|---|---|---|
| Steam 用户评测（20h） | https://steamcommunity.com/profiles/76561199042461274/recommended/1488490/ | 2026-10（评测日期） | “Something's wrong with 'happiness indicator' of the customers.” “No matter how fast I serve the dish - they are always unhappy, but can still leave a 4-5* review.” “Picking up one plate as a waiter is laughable.” 引文镜像：https://www.wasdland.com/game/nivalis-nights-1488490/（2026-10-31 抓取） |
| Steam 用户评测（31h） | https://steamcommunity.com/profiles/76561198015077026/recommended/1488490/ | 2026-10（评测日期） | “the AI for your employees is kinda terribad at the moment”；“Managers seem especially bad at their jobs” |
| 第三方评测 The Guide Hall | https://theguidehall.com/nivalis-nights-review/ | 2026-10-05 | 回到店里看到 “a slew of red-faced customers still waiting for their orders”，员工 “lollygag” |
| 社区机制站 | https://nivalis-nights.com/gameplay/ordering/ | 2026-10-31 抓取 | 客人选店条件、班次重叠 >1h、空座/雨天有顶、popularity+distance 权重、半饥饿才找饭 |
| 社区指南 | https://nivalis.wiki/guides/reputation-reviews/ | 更新 2026-10-11 | 满意度三支柱（服务速度/新鲜度/氛围）；差评与取消到店；五星与文字不一致为社区报告 |
| 社区 mod 描述 | https://www.nexusmods.com/nivalisnights/mods/104 | 2026 抓取 | 经理配送失败 → 菜单全是缺料 → “no customers turn up. All day”；Update #4 后已退役 |

**Reddit 采集说明（如实记录）**：本轮尝试 `reddit.com` JSON、old.reddit、eddrit、redlib、safereddit 均被 403/ECONNREFUSED/Anubis 拦截；WebSearch 只返回镜像摘要与无法核验的转述，未获得可点击的真实 Reddit 帖子 URL。按照「不编造玩家反馈」规则，**未引用任何 Reddit 链接**，改用 Steam 用户评测（一手）+ 第三方评测 + 社区机制文档。样本量因此低于 Profile 的 20 条理想值，结论置信度标注为中。

## 3. 素材源（≥2 独立 + ≥1 官方）

frontmatter 共 12 条来源：
- **Official 5 条**：Steam 公告 Update #5（2026-10-15）、Small Patch（2026-10-16）、Update #2（2026-10-02）、Update #4（2026-10-09）、Update #6（2026-10-22），全部为 `store.steampowered.com/news/app/1488490/view/<gid>` 可点击链接。
- **Community 3 条**：`nivalis-nights.com/gameplay/ordering/`、`nivalis.wiki/guides/reputation-reviews/`、Nexus mod 104。
- **Player 2 条**：上述两条 Steam 用户评测。
- **Third-party 1 条**：The Guide Hall 评测。
- **Editorial 1 条**：本站诊断清单。

关键事实均有官方出处：
- popularity 影响 venue visits、rival popularity 归零 bug、ranking 三要素等权、owner reputation → Update #5。
- 饥饿每 6 游戏小时回复、早高峰、Dagmar 破坏任务 popularity debuff 未重置、unhappy smiley 纯视觉 → 2026-10-16 Small Patch。
- 单人店座位过多会服务不过来、食材新鲜度影响评价 → Update #2。
- 取消到店的差评、订单取消后食材退回仓库 → Update #4。
- 睡觉时场地继续营业、客人被服务并留评价 → Update #6。

社区机制（班次重叠、雨天有顶座位、权重公式、半饥饿阈值）均标 `[Community]`，未写成官方确认事实。

## 4. 规格自检

| 项目 | 结果 |
|---|---|
| 词数 | **1,500**（口径 1,200–1,500） |
| title | 52 字符（40–60） |
| description | 157 字符（140–160） |
| H1 | 1 个 |
| 首段 | 56 词（40–60） |
| 站内链接 | 9 条（≥3） |
| related | 块状数组（5 条，已确认不是内联数组） |
| 事实标注 | 无编造数值；社区机制标 `[Community]`，玩家引文标 `[Player]` |

## 5. 自检命令与 exit code

| 命令 | exit code | 结果 |
|---|---|---|
| `node scripts/seo-check.mjs --site nivalisnightswiki --live --report .agent/seo-fix-nivalisnightswiki.md` | **0** | ERROR 0 / WARN 68；新页不在 WARN 清单 |
| `node scripts/check-ad-slots.mjs nivalisnightswiki` | **0** | 通过 |
| `node scripts/check-ad-slots.mjs --live nivalisnightswiki` | **0** | 通过 |
| `cd nivalisnightswiki && pnpm build` | **0** | 37/37 静态页生成，包含新路由 |
| `./deploy-wiki-site.sh nivalisnightswiki` | **0** | lint / residue / 本地 SEO / vercel deploy 全过 |

## 6. 部署与线上验证

- 部署时间：2026-10-31
- 新 deployment：`https://nivalisnightswiki-9fx9ckdhh-zhaoq0103s-projects.vercel.app`
- 生产域名：`https://nivalisnightswiki.vercel.app`
- 线上验证（本地 DNS 污染，使用 `dig @1.1.1.1` + `curl --resolve`）：
  - `/` → **200**
  - `/guides/no-customers-venue-empty-guide` → **200**
  - `/sitemap.xml` → **200**，且包含该 slug **1 条**
  - 新页 `<h1>` 数量：**1**
  - 新页 `<title>`：`Nivalis Nights No Customers: Why Your Venue Is Empty · Nivalis Nights Wiki`
- 部署脚本 alias 显示「未知」（`vercel inspect` 未取到 alias URL），但首页与新页均 200 且内容为新页，判定部署成功；未以退出码单独作为成功依据。

## 7. 遗留问题

1. **Reddit 无法访问**：本机与 WebFetch 对 reddit.com 及其镜像均被拦截，本轮没有可核验的 Reddit 帖子 URL。若后续需要满足「Reddit + Steam 双源」的完整采集口径，需在主 Agent 环境用可用的 Reddit 访问方式补采；当前结论置信度按「中」处理。
2. **Steam 评测页无法直连**：`store.steampowered.com/appreviews` 返回 302 到首页，`steamcommunity.com` 的 DNS 被污染且直连失败；评测引文通过 wasdland 镜像核对，链接仍指向真实 Steam 评测 URL。
3. **WARN 68 为存量**：title/description 长度、旧页词数、canonical 等 WARN 在本轮之前即存在，按 2026-10-29 决定不处理；新页未新增 WARN。
4. **未 commit / 未 push**（按指令）。
5. 未改 `lib/seo-config.ts`、`lib/adsterra-zones.ts`、`.agent/expand-daily.json`、`.agent/qa-report.md`；未改其他站点目录。

## 8. 本轮文件清单

- 新增：`nivalisnightswiki/content/guides/no-customers-venue-empty-guide.md`
- 新增：`.agent/expand-nivalisnightswiki-2026-10-31.md`
- 脚本生成/更新：`.agent/seo-fix-nivalisnightswiki.md`（seo-check 报告）
