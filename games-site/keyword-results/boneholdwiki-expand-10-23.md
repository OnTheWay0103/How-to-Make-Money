# Bonehold — 扩充报告（2026-10-23）

## 选题

**Slug**: `boss-rewards-guide`
**标题**: Bonehold Boss Rewards Guide — How to Choose the Best of Three Drops

选题依据：官方 Patch 1.0.1（2026-08-02）新增「楼层 Boss 掉 3 件、玩家选 1 件」，并给 Arena / Mini-boss 房保底 Epic、Trap 房保底 Legendary。现有 `boss-guide.md` 只讲战斗框架，`item-prefixes-guide.md` 只讲词缀评估，均未覆盖「三选一」这一新奖励机制。该题具体、可溯源、直接影响每局 build 决策。

## 来源

- Official — Steam Patch Notes 1.0.1（2026-08-02，三选一、保底、戒指随层数缩放）：https://store.steampowered.com/news/app/3497800/view/1839676055893059
- Official — Steam Patch Notes 1.0.2（2026-08-26，法术随所在层数缩放、魔法装备加成下调）：https://store.steampowered.com/news/app/3497800/view/1842212951297701
- Community — Bestof.games Bonehold Review（Boss 惩罚贪刀、房间间检查 build、无存档）：https://bestof.games/en/reviews/bonehold
- Official — Steam 商店页（程序化掉落、传奇装备）：https://store.steampowered.com/app/3497800/

未编造任何 Boss 名、道具名、掉率或数值；只使用补丁原文中的机制与数值。

## 查重结论

- 新 slug 与现有 23 篇无重复；标题无重复。
- `boss-guide`：Boss 战防御框架，无奖励三选一。
- `item-prefixes-guide`：词缀评估与 build 转型，无 Boss 奖励房保底规则。
- `endgame-guide`：传奇刷取与深层推进，无 1.0.1 的 Boss 掉落改动。
- 独立搜索意图：boss rewards / choose one item / special room loot。

## 词数

正文 **1499 词**（不含表格，脚本统计）。

## Build

`pnpm install --prefer-offline` + `pnpm build` 成功，静态生成 37 页，路由包含 `/guides/boss-rewards-guide`。

## 部署

- 部署命令：`./deploy-wiki-site.sh boneholdwiki`（正文微调后重新构建并二次部署）
- 生产 URL：https://boneholdwiki.vercel.app/guides/boss-rewards-guide
- 本次 deployment：https://boneholdwiki-cw8nf1ebv-zhaoq0103s-projects.vercel.app

## 线上验证

- `curl` HTTP **200**（63,854 bytes）
- 页面标题包含 `Bonehold Boss Rewards Guide — How to Choose the Best of Three Drops`
- 正文包含 `With no checkpoints or mid-run saves`，确认二次部署内容生效

## 待 QA 跟进（不在本次改动范围）

Steam 商店页当前写 **10 unique character classes**，而站内多篇旧攻略仍写 7 classes、4 named。该矛盾不由本篇引入，但建议 QA 排期统一校准。
