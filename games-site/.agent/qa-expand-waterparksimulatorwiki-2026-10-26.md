# QA Expand — waterparksimulatorwiki — 2026-10-26

- 模式: quick（仅本次新增 1 篇）
- 范围: `content/guides/stuck-guests-fix-guide.md`
- 结果: ⚠️ WARN（0 阻断 / 2 警告，均为本机网络不可达导致，非内容问题）

## 1. 基建

| 项 | 结果 | 证据 |
|---|---|---|
| pnpm install | ✅ | store 命中，秒级完成 |
| pnpm build | ✅ | 31/31 静态页生成，`/guides/stuck-guests-fix-guide` 出现在 `● (SSG)` 列表 |
| lint --changed | ✅ | 1 篇，全部通过 |
| 站点名/GA/GSC 残留 | ✅ | 未改代码，仅新增 content |

## 2. 内容红线

| 检查 | 结果 |
|---|---|
| title 长度 | ✅ 51 字符 |
| description 长度 | ✅ 156 字符 |
| H1 数量 | ✅ 1 |
| 正文词数 | ✅ 1,373（区间 800–1500） |
| related 块状数组 | ✅ 4 条，slug 均存在 |
| frontmatter sources | ✅ 7 条：Official 2 / Community 4 / Editorial 1 |
| 每数字有来源 | ✅ 见下 |
| 跨站残留 | ✅ 正文无其他游戏名（含 Nivalis 等站点） |
| 中文残留 / AI 套话 | ✅ 0 个 CJK；无模板套句 |
| [Unconfirmed] | ✅ 1 处（垃圾桶黄色范围圆的具体半径，官方未公布） |

## 3. 事实核验（逐条对源）

| 正文断言 | 来源 | 判定 |
|---|---|---|
| 1.0.119（2026-10-23）员工卡住/瞬移修复 | Steam 官方补丁公告原文 | ✅ 直引 |
| 1.0.63（2026-08-18）休息室员工卡住、园外游客卡住/受伤、景点复查 | vgspoilers 镜像 Steam 补丁公告 | ✅ |
| 1.0.91（2026-09-11）清洁工卡在 3 星垃圾桶、游客卡在 5 星 wellness 滑道与海盗跳台 | waterparksimulatorgame.wiki 更新追踪（摘录官方 patch notes） | ✅ |
| 开发者公开表态「working on the fix for the stuck visitors」并收存档至 support@cayplay.com | Steam 讨论帖 "to the developers of this game" | ⚠️ [Unverified-Offline]：本机不可达，内容取自搜索摘要 |
| 游客堆在厕所/5 星三滑道外道与环形段/跳台 | Steam 讨论帖 "Found a bug? Let us know (v 0.2.29+)" | ⚠️ 同上 |
| 右键推走游客；惊慌游客堵跳水板、推入救生圈、配救生员 | waterparksimulator.wiki 访客幸福指南 | ✅ |
| 垃圾桶朝向箭头指向路径、黄色圆圈决定游客是否来扔；圈外游客不扔 | waterparksimulator.wiki 清洁循环指南 | ✅ 原文直引 |
| 垃圾袋装满再丢、补给间靠近湿区 | 同上 | ✅ |
| 无官方公布的圆圈半径 | 两处社区文档均无数字 | ✅ 已标 [Unconfirmed] |

## 4. 与存量页一致性 / 自噬检查

- `visitor-problems-guide.md` 是「游客为什么不满」诊断页，12 个小节中**没有**任何一节覆盖卡住/冻结/寻路；新页聚焦寻路与卡实体，两者意图不重叠，已在新页首段反向链接。
- `staff-management-guide.md` 讲雇佣与工资，不含「员工卡住」；新页只在第 6 条与排障表中交叉引用。
- `park-design-layout-guide.md` 讲园区布局设计，新页只取「防卡死」相关的 6 条规则，不重复布局教学。
- 无数字冲突：新页不引用任何与存量页重叠的价格/星级数字。

## 5. 警告（P2，不阻断）

1. `steamcommunity.com` 本机返回 000（网络不可达，非死链）。两条引用帖在正文 sources 里已注明「verified from search results only」，未伪装成已核对原文。
2. 1.0.63 官方公告的直接 Steam news URL 未能取到（Steam news feed 只回溯最近 2 条），改用 vgspoilers 镜像页（已验 200），并在 sources text 中写明是镜像。

## 6. 结论

PASS-WITH-WARN，可部署。无虚构机制（未编造滑道名、员工名或修复条目）、无跨站残留、无占位符。

后续待办（不计入本次）：若日后能访问 Steam 讨论区，应把两条 Community 来源升级为直引原文并去掉 `[Unverified-Offline]` 备注。
