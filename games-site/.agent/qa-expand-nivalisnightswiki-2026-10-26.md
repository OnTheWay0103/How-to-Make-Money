# QA Expand — nivalisnightswiki — 2026-10-26

- 模式: quick（仅本次新增 1 篇）
- 范围: `content/guides/manager-restock-guide.md`
- 结果: ⚠️ WARN（0 阻断 / 2 警告，均为本机网络不可达导致，非内容问题）

## 1. 基建

| 项 | 结果 | 证据 |
|---|---|---|
| pnpm install | ✅ | store 命中，秒级完成 |
| pnpm build | ✅ | 32/32 静态页生成，`/guides/manager-restock-guide` 出现在 `● (SSG)` 列表 |
| lint --changed | ✅ | 1 篇，全部通过 |
| 站点名/GA/GSC 残留 | ✅ | 未改代码，仅新增 content |

## 2. 内容红线

| 检查 | 结果 |
|---|---|
| title 长度 | ✅ 56 字符 |
| description 长度 | ✅ 149 字符 |
| H1 数量 | ✅ 1 |
| 正文词数 | ✅ 1,474（区间 800–1500） |
| related 块状数组 | ✅ 4 条，slug 均存在 |
| frontmatter sources | ✅ 8 条：Official 3 / Community 4 / Editorial 1 |
| 每数字有来源 | ✅ 逐个核对见下 |
| 跨站残留 | ✅ 正文无其他游戏名 |
| 中文残留 / AI 套话 | ✅ 0 个 CJK；无 "In the world of" 等模板句 |
| [Unconfirmed] | ✅ 1 处（manager XP 曲线、mod 内部权重等未公开数值） |

## 3. 事实核验（逐条对源）

| 正文断言 | 来源 | 判定 |
|---|---|---|
| Manager 在 venue level 3 解锁 | tposegaming（2026-10-05）+ gamescreed（2026-10-24）双源一致 | ✅ |
| 采购循环不扣减已购数量；37 vs 19 件 | Nexus Mods "Manager Order Fix" 说明 | ✅ |
| 开发商承认 managers "don't work that well right now" | tposegaming 引 ION LANDS 表态 | ✅ |
| Update #1/#3/#4/#6 的 manager 修复内容、日期 | Steam 官方公告 #4/#6 + nivalis-nights.com 更新追踪（#1/#3） | ✅ |
| Lean 2 / Normal 5 / Extra 10 / Recent Sales（4 游戏小时、下限 2） | Steam Update #4 原文 | ✅ |
| 每日补货预算、目标只在 0 库存出现、缺货红图标 | Steam Update #4 原文 | ✅ |
| <10 单位触发 Restock 目标、计入在途配送、10s→4s | nivalis-nights.com Update #3 摘要（对官方原文） | ✅ |
| 冰箱读档后保鲜；此前冷藏食物腐坏速度翻倍 | Steam Update #6 原文 | ✅ |
| Squid Ink 不再腐坏 | Steam Update #6 原文 | ✅ |
| 店内通宵营业（睡后仍营业） | Steam Update #6 原文 | ✅ |
| ≥1,000 lims 留存、双菜菜单 | gamescreed（2026-10-24） | ✅ |
| ~1,000 lims/天 亏损案例、30 kahlua 无鸡肉 | tposegaming 转述玩家报告 | ✅ 已标注为 community report |

## 4. 与存量页一致性

- `best-business-guide.md`（Pre-release，2026-08-11）的 "Manager System" 段落仍写「每个场馆最终都该配 manager」，未提上线后的超买问题与预算设置。**不构成矛盾**（新页讲配置与排障，旧页讲业务选择），但旧页已过时。
- `greenhouse-automation-guide.md` 的 "Use Greenhouse Stock" 描述与新页一致（per-venue 设置）。
- 数字口径无冲突：新页不重复旧页的任何价格/利润数字。

## 5. 警告（P2，不阻断）

1. `steamcommunity.com` 本机不可达，官方公告改由 `store.steampowered.com/news` 直达（已验 200）。玩家声音经 tposegaming / gamescreed / Nexus 转述引用，未直接引 Steam 讨论原帖。
2. `tposegaming.com` 与 `nexusmods.com` 对 curl 返回 403（反爬），WebFetch 可正常取 tposegaming 正文；两条链接浏览器可达，非死链。标 `[Unverified-Offline]` 记录。

## 6. 结论

PASS-WITH-WARN，可部署。无虚构、无跨站残留、无占位符。

后续待办（不计入本次）：`best-business-guide.md` 的 manager 段落建议按 Update #4/#6 校准（校准类改动不受 1500 词上限约束）。
