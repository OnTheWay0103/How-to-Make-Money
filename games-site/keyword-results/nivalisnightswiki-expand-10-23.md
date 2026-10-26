# nivalisnightswiki — 2026-10-23 全站补更报告

## 新增攻略

- **Title**: How to Automate Your Greenhouse in Nivalis Nights (Update 5 & 6)
- **Slug**: `greenhouse-automation-guide`
- **File**: `nivalisnightswiki/content/guides/greenhouse-automation-guide.md`
- **词数**: 1,242（表格不计）
- **Version**: 1.0（游戏 2026-09-29 发售）

## 选题依据

路径② system-inventory-driven 命中：官方 Update #5 把温室自动化列为核心系统（Automatic Harvester、RePlanter 4000、Greenhouse Storage、Remote Control、Use Greenhouse Stock），Update #6 又修复了自动化循环的关键 bug。站内 `greenhouse-guide` 仍停留在 pre-release 的「种植基础」层，没有覆盖任何自动化内容，属于「官方明说有、站内整块没写」。

来源：

- Official: [Nivalis Nights - Update #5](https://store.steampowered.com/news/app/1488490/view/1846651706678000)（2026-10-15）— Farming 15/16 解锁、储存、Tab 远程面板、Use Greenhouse Stock、动画加速 40%。
- Official: [Nivalis Nights - Update 6](https://store.steampowered.com/news/app/1488490/view/1847286114032742)（2026-10-22）— 满仓自动补种同作物、模块退款、自家作物按种植成本计入财务、睡眠期间场馆继续营业。
- Community: [GameSpace — Nivalis Nights Received Update #5](https://gamespace.com/all-articles/news/nivalis-nights-received-update-5/)（2026-10-15）— 独立媒体复述自动化升级与远程控制。
- Community: [Nivalis Nights Wiki — Greenhouse Guide](https://nivalisnights.wiki/greenhouses/)（accessed 2026-10-23）— 温室控制台基础机制。

## 查重结论

对比全部 17 篇现有 slug/title：`greenhouse-guide` 讲租温室、控制台、高级模块与种植基础；`best-business-guide` 讲七类业态、员工、库存与供应链；`fishing-guide` 讲钓鱼。新篇只写 Update #5/#6 的自动化层（升级解锁、储存溢出、远程面板、场馆联动、故障排查），并在开头明确指向基础篇，无标题/主题自噬。新 slug 与现有文件无重复。

## 构建

- `pnpm install --prefer-offline`: 成功（3.3s）
- `pnpm build`: 成功，31/31 静态页，`/guides/greenhouse-automation-guide` 出现在 SSG 路由表。

## 部署与线上验证

- `./deploy-wiki-site.sh nivalisnightswiki`: 成功
- URL: https://nivalisnightswiki.vercel.app/guides/greenhouse-automation-guide
- HTTP: **200**
- 内容校验：页面包含 `How to Automate Your Greenhouse` 与 `Automatic Harvester`。

## 备注

- 升级价格、每作物 XP、控制台设置是否全温室共享等官方未公布项，正文均标 `[Unconfirmed]`。
- 未执行 git commit（按要求）。

---

## 下一批候选页（2026-10-26 晚轮 Suggest 复采，未开写）

> 依据：`keyword-results/Nivalis-Nights.md`（202 原始 / 103 有效 / 锚定 57.2%，How-to 17 + Guide/Beginner 11 + Boss/Characters 4 + Co-op 2 = 34 条攻略型，占 33%）
> 与现有 19 篇 slug 逐一比对后的真空缺口，按优先级：

1. **食物、烹饪与腐坏库存**（`food-cooking-spoilage-guide`）
   覆盖词：`how to cook` / `how to get rid of rotten food` / `how to drop dead rat` / `how to eat at restaurant`。
   现状：全站无烹饪页，`recipe` 仅在 `manager-restock-guide` 与 `greenhouse-automation-guide` 各出现 1 次作旁证；
   与 `manager-restock-guide`（补货/预算）和 `greenhouse-guide`（种植）意图不同。
2. **配方解锁**（`recipe-unlock-guide`，素材不足则并入上页 H2）
   覆盖词：`how to unlock recipes` / `unlock recipes`。现有页面只把「配方」当补货的输入项，没有解锁链。
3. **船只与离岸点位**（`boats-and-offshore-locations-guide`，或并入 `hidden-locations-guide` 作 H2）
   覆盖词：`how to get to oil rig` / `how to board boat` / `how to refuel boat` / `how to get to the docks`。
   现状：`oil rig` 在全站 19 篇中命中 **0 次**；`transportation-guide` 只讲城内交通。

写作口径：Nivalis 已于 2026-09-29 发售，优先用官方 Update 公告（#5/#6 及以后）与商店页可核验机制；
按键、数值、刷新点无官方来源的标 `[Unconfirmed]`，不得为凑词数编造。

