# EXPAND — sephiriawiki — 2026-10-28

## 产出

- slug: `inventory-side-bag-guide`
- 标题: Sephiria Inventory & Side Bag Guide: Slots and Space
- URL: https://sephiriawiki.vercel.app/guides/inventory-side-bag-guide
- 正文词数: 1,294（title 52 字符 / description 151 字符 / H1 ×1 / 首段 59 词 / 表格 3 个）

## 选题依据（为什么是它）

站内 44 篇里 **没有一篇讲背包容量**。`grep -i "side bag"` 只在 4 篇里各出现 1 句、`grep -i "slot"` 多为
potion slot / preset slot / save slot，**「我有多少格、怎么变多、放 Side Bag 里为什么没用」零覆盖**。
玩家侧这是新手期最高频的具体困惑之一：背包满会直接吃掉拾取（1.0.30 就修过「背包满时换装导致 Tablet
未获得」），而 Side Bag 的反直觉规则（物品放进去就失效）官方只用一行字说清、游戏内没有解释。

三条独立通道可核验：官方 1.0/1.0.23/1.0.26/1.0.30/1.0.31 五条补丁说明 + 独立 wiki 的槽位数值 + 站内既有
systems 页（tablets / combo / artifacts）的定义分工。

**不与现有页抢词**（列出相关 slug）：

| 现有 slug | 它回答什么 | 与本篇的区别 |
|---|---|---|
| `artifacts-guide` | 神器是什么、~300 件、稀有度、Wishing Fountain 容量（base 4 + Willpower） | 本篇不谈**战前可带件数**，只谈**背包格数**；两者在正文里明确区分，并链接过去 |
| `tablets-guide` | Tablet 相邻加成规则与摆放 | 本篇只在「槽位值不值得花」处引用相邻规则，不复述 |
| `wishing-fountain-capacity-guide` | 喷泉容量（战前选神器的额度） | 完全不同的容量口径，本篇只在 related 互链 |
| `combo-system-guide` | 组合按 tag 计数 | 本篇只用到「Side Bag 内不计入」这一条结论并链过去 |
| `mystic-pot-guide` | 神器 1:1 / 2:1 兑换 | Side Bag 的典型用途之一，交叉引用 |
| `potions-consumables-guide` | 药水种类与 Extra Potion Slot | 本篇只在 1.0.31「药水槽减少会掉地」处引用 |
| `full-release-guide` | 1.0 新特性清单（含 Side Bag 一句） | 清单式提及，无操作层内容 |

目标词：`sephiria inventory slots` / `sephiria side bag` / `sephiria inventory full`（站内 0 覆盖）。

## 来源（7 条，2 条独立通道）

| 层级 | 来源 | 日期 |
|---|---|---|
| Official | 1.0 Update — Side Bag 加入、「Items in the Side Bag are inactive」、经 Destiny Inscription 解锁、预设槽 5→7、可丢弃区域调整 | 2026-07-31 |
| Official | 1.0.23 — 修复「Costume/Talent 起始物品放进 Side Bag 后仍生效」 | 2026-08-04 |
| Official | 1.0.26 — 预设槽 7→15 + slot lock、Reset Slot 改 Delete Slot 且不可恢复 | 2026-08-13 |
| Official | 1.0.30 — 修复「背包满时换装导致 Tablet 未获得」 | 2026-08-20 |
| Official | 1.0.31 — 药水槽减少时药水掉地、Comprehensive Training Grounds 可取用已解锁物品 | 2026-09-11 |
| Community | 独立 wiki《Bag basics: six columns, 24 to 42 slots》— 6 列、起始 24、上限 42、四种扩容来源（升级 / Expanding Pouch / Ingenuity+2·Survival+3 / Red Fox+6·Fairy of Fortune−3）、Side Bag 内不计 combo | 2026-10-28 经搜索索引取得 |
| Editorial | 本站编辑结论 — 槽位优先级、Side Bag 工作流、拾取丢失排查清单 | 2026-10-28 |

> 官方公告经 Steam News API（appid 2436940）逐条取原文。
> **限制说明**：`sephiria.grandwiki.com/guides/bag-basics/` 本机抓取返回 **HTTP 403**，数值只经搜索索引取得，
> 已在 frontmatter 的 `text` 里写明该限制，并让正文所有相关数字一律带 `[Community]` 标记；
> 24/42、Expanding Pouch、天赋与服装加成均未写成官方事实。

## 采集面（≥6 组查询）

1. Steam 差评主题（final boss 难度尖峰、高难度锁 build、敌人可读性、meta 进度慢、co-op 断线无重连、平衡与 RNG）—— 前五类均已被 `boss-guide` / `hard-mode-guide` / `chapter-6-final-boss-guide` / `farming-guide` / `coop-freeze-recovery-guide` / `patch-1-0-31-build-changes-guide` 覆盖
2. 背包/槽位类问题（inventory、slot、side bag、inventory full）—— 站内 0 覆盖，命中
3. 配方/解锁类 —— 站内以武器分支/铭文承载，无空白
4. 房间类型（Forge / merchant）—— 站内 0 命中，但官方与社区均无可核验清单，放弃
5. respec / 天赋重置 —— 仅 3 处零散提及且无官方来源，放弃
6. 构建预设（preset slots）—— 官方有 1.0 / 1.0.26 事实，但搜索需求弱，本轮并入本篇的一节而不单独成页
7. Steam 讨论区检索 —— Reddit / Steam 讨论串未能取到可用索引正文，社区面仅剩独立 wiki 一条

## 排除理由

- 高难度 build 锁死：`hard-mode-guide` 已覆盖 6 个 modifier 与最优武器
- 最终 Boss 血厚/带回血 modifier：`chapter-6-final-boss-guide` + `hard-mode-guide` 已覆盖
- co-op 无重连：`coop-freeze-recovery-guide` 已专页
- Forge / merchant 房间清单：无可核验来源，不硬写
- 天赋重置：无官方说法，不写

## QA

- `node scripts/lint-guides.mjs sephiriawiki` → **0 ERROR / 14 WARN**（本篇仅 `updated-future` 时区假警报；
  另 13 条为存量页 h1 与 sources-tier 旧账，quick 模式不追溯）
- `node scripts/check-site-residue.mjs sephiriawiki` → ✅ 无模板残留
- 详细结论见 `.agent/qa-sephiriawiki-2026-10-28.md`（✅ PASS）
- 备查：`app/layout.tsx` 仍有存量 `ca-pub-7211682665758448`，非本轮引入，按「AdSense 暂缓、存量不动」未改

## 部署与线上验证

- `./deploy-wiki-site.sh sephiriawiki` → 部署成功，alias https://sephiriawiki.vercel.app/
- `dig @1.1.1.1 +short sephiriawiki.vercel.app` → 64.29.17.195
- `curl --resolve`：
  - `/guides/inventory-side-bag-guide` → **200**（64,875 bytes，`<h1>` 计数 = **1**，`<title>` 正确，正文含 "Side Bag" ×15）
  - 页面 related 链接全部可解析：artifacts-guide / builds-guide / combo-system-guide / full-release-guide / inscriptions-guide / mystic-pot-guide / tablets-guide
- `/sitemap.xml` 含 `inventory-side-bag-guide` ✅

## 未做

- 未 commit / 未 push
- 未改 `.agent/expand-daily.json` / `.agent/qa-report.md`
- 未触碰其他站点目录、未改广告代码或 `lib/adsterra-zones.ts`
