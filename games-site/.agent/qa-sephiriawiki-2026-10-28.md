# QA Report — 2026-10-28 — sephiriawiki（quick）

> 模式：quick（只审本轮变更）
> 范围：1 站 / 1 篇新增 guide
> 变更：`content/guides/inventory-side-bag-guide.md`（新增，1,294 词）
> 依据：`.claude/skills/quality-assurance.md`、`docs/STRATEGY-内容生产.md` 四节

## 执行摘要

- 结果：✅ **PASS**（0 🔴 阻断 / 1 🟡 记录项：`updated-future` 时区假警报）
- 一句话：官方可核验部分（Side Bag 机制、四条修复补丁）全部逐字对得上 Steam 公告；社区数值一律标 `[Community]` 且在同页说明抓取限制；build exit 0；线上 HTTP 200 且 `<h1>` 计数 = 1。

## 虚构检测（逐专名核验）

| # | 名词 / 断言 | 判定 | 依据 |
|---|------|:--:|------|
| 1 | Side Bag 于 1.0 加入，存放备用物品 | ✅ | 1.0 Update 原文 |
| 2 | 「Items in the Side Bag are inactive」 | ✅ | 1.0 Update 原文（逐字） |
| 3 | Side Bag 通过 Destiny Inscription 解锁 | ✅ | 1.0 Update 原文（逐字） |
| 4 | 1.0.23 修「Costume/Talent 起始物品放进 Side Bag 后仍生效」 | ✅ | 1.0.23 原文 |
| 5 | 1.0.30 修「背包满时换装导致 Tablet 未获得」 | ✅ | 1.0.30 原文 |
| 6 | 1.0.31「药水槽减少时药水掉地」 | ✅ | 1.0.31 原文 |
| 7 | 构建预设 1.0 由 5 扩到 7、1.0.26 由 7 扩到 15 且加 slot lock | ✅ | 1.0 / 1.0.26 原文 |
| 8 | 1.0.26「Reset Slot 改为 Delete Slot，删除不可恢复」 | ✅ | 1.0.26 原文 |
| 9 | 1.0「Adjusted the area where items can be dropped in the Inventory」 | ✅ | 1.0 Update 原文 |
| 10 | 背包 6 列、起始 24、上限 42 格 | ⚠️ 全篇标 `[Community]` | 独立 wiki；本机抓取返回 HTTP 403，已在 sources 写明「仅经搜索索引取得」 |
| 11 | Expanding Pouch / Ingenuity +2 / Survival +3 / Red Fox +6 / Fairy of Fortune −3 | ⚠️ 全篇标 `[Community]` | 同上，表格内明确标注 |
| 12 | Side Bag 内物品不计入 combo | ⚠️ 标 `[Community]` | 同上 |

未出现编造的 Boss / 武器 / 版本号；未声称任何官方未公布的数值。

## 模板残留扫描

- `node scripts/check-site-residue.mjs sephiriawiki` → ✅ 无模板残留

## 一致性与诚实标注

- 与 `artifacts-guide` 的口径一致：Wishing Fountain 容量（base 4 + Willpower）与「Artifact Slot +1」旧说法已在该页纠正，本篇不复述，只指向 `mystic-pot-guide` / `inscriptions-guide`。
- 与 `tablets-guide` 分工：tablet 相邻规则归 tablets 页，本篇只讲槽位经济并交叉引用，无定义冲突。
- 与 `combo-system-guide` 分工：combo 计数规则归 combo 页，本篇只引用结论。
- 中文标记泄漏 0；`[Official]` / `[Community]` / `[Unconfirmed]` 均为英文标记。

## 基建检查

| 项 | 结果 |
|---|---|
| `pnpm install` | ✅ exit 0 |
| `pnpm build` | ✅ exit 0，`/guides/inventory-side-bag-guide` 已预渲染 |
| `node scripts/lint-guides.mjs sephiriawiki` | ✅ 0 ERROR / 14 WARN（其中 1 条本篇 `updated-future`，13 条为存量页 h1 / sources-tier 旧账） |
| 部署 | ✅ `deploy-wiki-site.sh` 完成，alias `https://sephiriawiki.vercel.app/` |
| 线上新页 | ✅ HTTP 200（`curl --resolve` 64.29.17.195），`<h1>` 计数 = 1，`<title>` 正确 |
| sitemap | ✅ 含 `inventory-side-bag-guide` |
| GA4 | ✅ `G-JP8PP1V90D` |
| GSC 验证文件 | ✅ `public/google12f8715471cef7b7.html` |
| `ca-pub` | ⚠️ 存量：`app/layout.tsx` 仍有 `ca-pub-7211682665758448`。非本轮引入，按「AdSense 暂缓、存量站代码不动」原则**未改**，登记备查 |

## 记录项

- **🟡 `updated-future`**：与 nivalis 同因（脚本按 UTC 比较，本机 CST 尚未跨日），非内容问题，不修。
- **🟡 存量 WARN 13 条**（`coop-guide` / `costumes-guide` / `faq-content` / `game-length-guide` / `inscriptions-guide` / `secret-rooms-guide` / `solo-guide` / `speedrun-guide` / `talents-guide` / `potions-consumables-guide` 的 h1 与 sources-tier）：均为本轮之前既有，quick 模式不追溯，转下一轮批量处理。

## 结论

**QA 结果：✅ PASS（1/1）**，无阻断项。
