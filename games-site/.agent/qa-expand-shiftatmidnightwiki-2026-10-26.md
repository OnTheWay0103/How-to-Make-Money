# QA Report — shiftatmidnightwiki — 2026-10-26

## 执行摘要

- 模式: quick（仅本轮新增页）
- 范围: 1 站 1 篇 guide — `content/guides/shop-rating-cleaning-guide.md`
- 结果: ✅ PASS（0 阻断 / 0 警告 / 1 条 P2 备注）

## 本轮变更

| 项 | 值 |
|---|---|
| 新页 | `shop-rating-cleaning-guide.md` |
| 选题 | Shop rating + cleaning/decor（官方系统清单 × 站内空白；站内原无 rating/cleanliness 页） |
| 词数 | 1,421（要求 800–1,500） |
| title | 53 字符（要求 40–60） |
| description | 160 字符（要求 140–160） |
| H1 | 1 个 |
| related | 块状数组，4 条，slug 均存在 |
| sources | 9 条 = Official 2 / Community 3 / Editorial 4，均带 url + date + text |

## 发现清单

| # | 严重度 | 站点 | 文件 | 问题类型 | 描述 | 建议操作 |
|---|---|---|---|---|---|---|
| 1 | P2 | shiftatmidnightwiki | shop-rating-cleaning-guide.md | 来源可达性 | 本机对境外站点直连被拒（Steam / itch.io / games.gg 均 ECONNREFUSED），无法逐页抓取 HTML 复核；来源内容通过搜索索引摘要交叉验证 | 标 `[Unverified-Offline]`，不阻断；下次网络可用时复验 9 条 URL |

## 虚构检测（逐项）

| 名词 / 数字 | 来源情况 | 判定 |
|---|---|---|
| Store rating 由 Reviews tab 查看 | Game Rant + Rutab 两源一致 | ✅ |
| Rating 影响客流 / 消费 | GamesHorizon + GameRant + Rutab 三源一致 | ✅（正文标为 community-reported） |
| Decor → Decor Points → 送货卡车 → 必须摆放 | GamesHorizon + Rutab 两源一致 | ✅ |
| 老鼠 / 蟑螂在数夜后出现 | GameRant + Rutab + GamesUnit 三源一致 | ✅ |
| 顾客无视未触发陷阱 / 散落木板 | Rutab 单源 | ⚠️ 正文已限定为 community reports，未当硬事实 |
| 外部垃圾仍拉低 rating | GAMES.GG 日文用户评测单源 | ⚠️ 正文标明为一条 user review |
| $0.10 / $0.40 / $3 等金额 | Niche Game Guides + Rutab 部分重合，但与站内 Money Guide「精确金额未确认」口径冲突 | ✅ 全表标 `[Unconfirmed]` |
| 4 星 / 5 星 / 0–100 分制 | 社区来源互相矛盾，无官方 | ✅ 标 `[Unconfirmed]`，不选边 |
| 1 Sept 2026 补丁未改 cleaning/rating | 官方公告清单（Steam news hub） | ✅ 逐字锚定 |
| 清理收入计入 $250 | Niche 单源 | ✅ 标为 community claim + 建议自查余额 |

结论：未发现虚构的专有名词、Boss/角色名、系统名或未标注的精确数字。

## 残留与一致性

- 跨站残留扫描（SpiritVale / Witchspire / Mistfall / Aincrad / The Mound / Sephiria / Grain Rot 等）：0 命中
- 中文残留：0 命中
- 站内一致性：Shift 9 roach bonus、$250 personal cash、two-account rule 与 `money-guide.md` / `resource-management.md` 一致
- 站内链接：`/guides/money-guide`、`/guides/resource-management`、`/guides/coop-strategy-guide`、`/guides/solo-guide` 均存在
- 查重：站内 33 篇原无 shop rating / cleaning / decor 主题页；与 money-guide（$250 收入）、resource-management（库存/配额）、item-locations（工具位置）意图不重叠

## 基建检查

| Build | 新路由 | Lint | 静态检查 |
|:--:|:--:|:--:|:--:|
| ✅ `pnpm build` exit 0 | ✅ `/guides/shop-rating-cleaning-guide` 已 SSG | ✅ 0 ERROR / 0 WARN | ✅ title/description/H1/related 全通过 |

## 返回摘要

QA 结果: ✅ PASS (1/1) | ⚠️ WARN (0) | 🔴 FAIL (0)
备注: 1 条 P2 来源可达性（本机境外直连受限，`[Unverified-Offline]`），不阻断部署。
