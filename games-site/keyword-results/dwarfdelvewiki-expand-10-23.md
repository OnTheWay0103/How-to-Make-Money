# dwarfdelvewiki 扩充报告 — 2026-10-23

## 选题

**Slug**: `material-exchange-money-guide`
**标题**: Why Is Your Ore Selling for Nothing? Dwarf Delve Material Exchange & Money Guide
**选题路径**: ① complaint-driven（发售期「gold drought / 卖矿无收益」抱怨）+ ② 官方 QoL Hotfix 1 系统清单

发售初期玩家集中抱怨卖矿没有收益。官方 **QoL Hotfix 1（2026-07-31）**明确修复了 **zero-profit ore sales**、**Material Exchange 负库存**、**chest opening UI 不出现**，并把 **Lockpicks 改为 5 个一组出售**。站内 17 篇既有攻略覆盖 mining、meta-progression、best gear、extraction，但没有一篇讲 Material Exchange / 卖矿 / 金币循环。

## 来源（5 个独立来源，含 2 个官方）

**Official**
1. Dwarf Delve 商店页 — 确认 refine ore → sell resources for coin → buy equipment/tools；perks 提升 move speed / attack power / carry capacity
   https://store.steampowered.com/app/2237320/Dwarf_Delve/
2. Steam 公告 **QoL Hotfix 1** — 2026-07-31
   https://steamcommunity.com/app/2237320/allnews/
   - Fixed negative Material Exchange stocks
   - Fixed zero-profit ore sales
   - Lockpicks price slightly increased, now sold in quantities of five
   - Fixed chest opening UI not appearing
3. Steam 公告 **Vitality Hotfix** — 2026-07-28（降低 Vitality drain 与 mining grind）

**Community**
4. steamstat.io Steam 评价汇总 — 记录 launch-era “gold drought”、卖矿无钱、item cost balance 问题（访问于 2026-10-23）
   https://steamstat.io/app/2237320
5. IndieGame.com Dwarf Delve review — 混合评价，涉及 progression / economy pacing
   https://indiegame.com/en/archives/32147

**Editorial**: 卖/留分类、花费顺序、刷钱路线为本刊分析。

## 查重结论

现有 17 个 slug 均无重复；新 slug 唯一。

与既有页面边界：
- `meta-progression-guide`：什么跨局保留、quarters、coin 框架，不涉及 Material Exchange 或卖矿策略
- `mining-strategies-guide`：采矿路线与效率，不涉及售价/经济
- `best-gear-equipment-guide`：工具优先级，不涉及卖矿
- `extraction-guide`：撤离与防守，不涉及金币循环

新文聚焦「为什么卖矿没钱 + Material Exchange 是什么 + 怎么花」，无自噬。

## 文章

- 正文字数（不含表格）：**1,418 词**
- 含表格总词数：1,576
- 事实处理：ore-to-coin 汇率、Material Exchange 完整库存、Gild 与 coin 是否同一货币、relic 是否可卖均未公开，标 `[Unconfirmed]`；未编造具体价格或掉落表。

## 构建

```
pnpm install --prefer-offline  → OK (2.4s)
pnpm build                     → OK
/guides/material-exchange-money-guide 已静态生成 (31/31 pages)
```

## 部署与线上验证

- 部署命令：`./deploy-wiki-site.sh dwarfdelvewiki`
- 部署 URL：https://dwarfdelvewiki.vercel.app/guides/material-exchange-money-guide
- HTTP 状态：**200**
- 内容验证：页面含标题 “Why Is Your Ore Selling for Nothing? Dwarf Delve Material Exchange & Money Guide” 与正文 “Material Exchange”
- Vercel 生产 alias：dwarfdelvewiki.vercel.app（部署脚本返回 HTTP 200）
