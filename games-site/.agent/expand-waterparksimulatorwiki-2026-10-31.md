# EXPAND-2026-10-31-waterparksimulatorwiki

## 状态

✅ 完成：新增 1 篇（`guest-limit-park-capacity-guide`），已部署并线上验证。

## 选题

**Waterpark Simulator Guest Limit: How to Raise Capacity**

- 高频：2026-08-06 至 2026-10-11 至少 8 个独立 Reddit 主题帖（PS5 / Xbox / PC），另有多条评论重复同一问题。
- 具体：玩家卡在 70（主机）/ 75（四星）/ 100（PC 默认）时不知道是平台上限、星级上限还是 Settings 上限。
- 站内未覆盖：23 篇现有攻略中，只有 `achievements-guide.md` 用一句话提到 70 人上限；`park-design-layout-guide.md` 没有任何容量/上限说明。无同主题页。

## 反馈来源（可点击，含抓取日期）

| 来源 | URL | 日期 | 关键内容 |
|---|---|---|---|
| Reddit — Guest limit? | https://reddit.com/r/waterparksimulator/comments/1vjq1g1/guest_limit/ | 2026-08-09 | PS5 70 上限；PC 25/50/75/100 按星级，Settings 可到 200；多放 pools/loungers 提升容量 |
| Reddit — Is PS5 soft capped at 70 guests? | https://reddit.com/r/waterparksimulator/comments/1vjye9c/is_ps5_soft_capped_at_70_guests/ | 2026-08-09 | PC 可在 Settings 提到 200；主机 70 |
| Reddit — How to get 100 Guests in Ps5 | https://reddit.com/r/waterparksimulator/comments/1vgyf0k/how_to_get_100_guests_in_ps5/ | 2026-08-06 | 满园 6 星仍 70；PC 5 星 100；建议加 pools/loungers 直到硬上限 |
| Reddit — Max Guest Limit? | https://reddit.com/r/waterparksimulator/comments/1vpg4oo/max_guest_limit/ | 2026-08-15 | 玩家称主机 70 是 bug、应为 100；Xbox/PS5 均复现 |
| Reddit — Maximum capacity 70 | https://reddit.com/r/waterparksimulator/comments/1vvuluo/maximum_capacity_70/ | 2026-08-23 | PS5 满园仍卡 70 |
| Reddit — Anyone else mildly frustrated with the progression? | https://reddit.com/r/waterparksimulator/comments/1w51rmv/anyone_else_mildly_frustrated_with_the_progression/ | 2026-09-02 | 评论：loungers/benches 提升上限；Settings 可翻倍客流 |
| Reddit — is this a building item limit?? | https://reddit.com/r/waterparksimulator/comments/1x2vqd6/is_this_a_building_item_limit/ | 2026-10-11 | 最后一块扩张后 142/150；同时问能否超过 70 访客 |
| Reddit — Can't load more attraction types | https://reddit.com/r/waterparksimulator/comments/1w20zas/cant_load_more_attraction_types/ | 2026-08-29 | 主机 100 unique items 上限；评论称内存原因 |
| Steam 商店页评测汇总（官方） | https://store.steampowered.com/app/3293260/Waterpark_Simulator/ | 2026-10-31 | 96% 好评（10,141 条英文评测）；近 30 天 97%（472 条） |
| Steam 评测样本（第三方聚合） | https://videogamescritic.com/game/waterpark-simulator-3293260 | 2026-10-31 | 405 条样本；差评中 Bugs & crashes 19%、Grind 19% |
| 第三方攻略站 | https://waterparksimulatorwiki.wiki/guides/waterpark-simulator-achievement-guide | 2026-10-31 | 四星容量升到 75 |
| 第三方攻略站 | https://waterparksimulator.wiki/build/expansion-strategy/ | 2026-08-25 | 容量规划：loungers/toilets/bins/food；扩张前先稳住运营 |

**Steam Community 限制说明**：本机 DNS 对 `steamcommunity.com` 投毒（解析到 103.42.176.244 等错误 IP），Steam 评测 API 返回 302，讨论区与评测页均无法直连。已用 Steam 商店页官方评测汇总替代为 Steam 侧信号；未引用无法核实的 Steam 讨论帖内容。

## 素材源（≥2 独立 + ≥1 官方）

- 官方 5 条：Steam 商店页；UPDATE 0.4（200 上限、默认 100）；UPDATE 0.4.21（超过 100 后装饰要求联动）；PlayStation 1.0.62.29p（Full house 改为 70）；Xbox 1.0.90.1x（unique buildings 提到 150）。
- 社区 5 条：见上表 Reddit。
- 第三方 3 条：waterparksimulatorwiki.wiki（四星=75）、waterparksimulator.wiki（容量规划）、videogamescritic（Steam 样本）。
- 合计 frontmatter `sources` 13 条（5 Official / 5 Community / 2 Third-party / 1 Editorial）。

## 文章规格

- 文件：`waterparksimulatorwiki/content/guides/guest-limit-park-capacity-guide.md`
- 正文词数：**1,390**（目标 1,200–1,500）
- title：54 字符（40–60）
- description：155 字符（140–160）
- H1：1 个
- 首段：58 词（40–60）
- `related`：块状数组，5 个站内 slug 全部存在
- 内链：6 条（park-design / lag / achievements / money-making / stuck-guests / visitor-problems）

## 自检命令与 exit code

| 命令 | Exit | 结果 |
|---|---:|---|
| `node scripts/seo-check.mjs --site waterparksimulatorwiki --live --report .agent/seo-fix-waterparksimulatorwiki.md`（部署前） | 0 | ERROR 0 / WARN 57 |
| `node scripts/check-ad-slots.mjs waterparksimulatorwiki` | 0 | 通过 1 / 失败 0 |
| `node scripts/check-site-residue.mjs waterparksimulatorwiki` | 0 | 无模板残留 |
| `cd waterparksimulatorwiki && pnpm build` | 0 | 36/36 静态页，含新路由 |
| `./deploy-wiki-site.sh waterparksimulatorwiki` | 0 | 部署成功 |
| `node scripts/seo-check.mjs --site waterparksimulatorwiki --live`（部署后） | 0 | ERROR 0 / WARN 57 |

## 部署与线上验证

- 部署：`https://waterparksimulatorwiki.vercel.app/`（HTTP 200）
- 新页：`https://waterparksimulatorwiki.vercel.app/guides/guest-limit-park-capacity-guide`
  - HTTP 200（70,370 B，`--resolve` 绕过本地 DNS 污染）
  - `<h1>` 数量 = 1
  - `container-` 广告容器 = 2（global + guide）
  - canonical = 自身 URL
  - sitemap.xml 含该 slug（1 条）
  - 正文关键文本线上存在（“70-guest wall”、“Increase of building limit to 150 unique buildings”）

## 遗留问题

1. **Steam Community 不可达**：DNS 投毒 + 评测 API 302，本轮无法引用单条 Steam 评测/讨论原文；已用 Steam 商店页官方评测汇总 + 第三方 Steam 样本替代。若后续网络恢复，可补 2–3 条具体评测引用。
2. **星级容量 25/50/75/100 为社区口径**：仅 Reddit 多帖 + 第三方四星=75 交叉验证，官方未公布分档表；文中已标 `[Community]`，未写成官方事实。
3. **主机 70 上限是否 bug 未定**：官方补丁只侧面确认“Full house 改为 70”，未说明是否有意；文中标 `[Unconfirmed]`。
4. **PC 无 unique building 上限为社区说法**：无官方说明，文中标 `[Unconfirmed]`。
5. 现有存量页仍有 57 条 WARN（描述长度、词数等），按 2026-10-29 决定不处理；本轮未改动其他页面。
