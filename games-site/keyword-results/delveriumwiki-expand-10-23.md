# delveriumwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**走「官方系统清单 × 站内覆盖」路径。**

- Update v0.1.0.3（2026-10-03）把火把从「照明」改成带明确数值的 **刷怪抑制系统**：普通火把 25%（原 20%）、6 格半径（原 5 格）、Quartz 50%、彩色水晶火把 75%，并按生物群系乘算（Plains ×10、Woodlands ×3、Labyrinth ×0.5、其余 ×1），同版还改了软刷怪上限与 mini-boss 消失冷却。
- 站内 18 篇 **零火把覆盖**：`boss-guide`/`dungeon-guide` 讲战斗与地牢，`farming-guide` 讲农场，`biomes-guide` 讲群系，但没有一篇解释刷怪抑制怎么算、火把怎么摆。
- 玩家痛点明确：基地一直刷怪，以为是墙不够，其实是光照覆盖不够。

**选题**：火把刷怪抑制的数值、群系乘算与基地布灯。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Delverium Update v0.1.0.3（火把数值、6 格半径、群系乘数、刷怪上限改动） | https://steamcommunity.com/app/2710040/allnews/ | 2026-10-03 |
| Official | Delverium 商店页（生存沙盒、庇护所建造、1-8 人） | https://store.steampowered.com/app/2710040/ | 2026-10-23 访问 |
| Community | GameGrin — Delverium Preview（starter torch、床/地板/火把/门的房间、夜间与地下刷怪） | https://www.gamegrin.com/previews/delverium-preview/ | 2026 |
| Editorial | 基地布局、覆盖算法与摆放清单为基于官方数值的推导建议 | — | 2026-10-23 |

## 2. 查重结论

- 18 篇 slug 全量比对，新 slug `stop-enemy-spawns-torch-guide` 无重复。
- 主题比对：`boss-guide` 讲 Boss 打法；`dungeon-guide` 讲地牢探索；`farming-guide` 讲种植；`biomes-guide` 讲群系差异但不含火把数值；`crafting-recipes-chart` 是配方表。
- 搜索意图独立：delverium torch / stop enemies spawning / base defense。
- 判定：**无自噬**。

## 3. 产出

- 文件：`delveriumwiki/content/guides/stop-enemy-spawns-torch-guide.md`
- slug：`stop-enemy-spawns-torch-guide`
- 标题：How to Stop Enemies Spawning in Delverium — Torches, Light & Base Defense
- 正文词数：**1,492**（表格不计）
- `[Unconfirmed]` 标记：火把抑制是否简单叠加（官方未给叠加公式）、火把是否影响 Boss/脚本刷怪。
- 所有百分比、半径、乘数均逐条来自 v0.1.0.3 官方公告；推导值（如 Labyrinth 下水晶火把 37.5%）在文中明确标注为 derived，不写成官方数值。

## 4. 构建

```
cd delveriumwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；18/18 static pages；`/guides/stop-enemy-spawns-torch-guide` prerender 成功。

## 5. 部署

- 命令：`./deploy-wiki-site.sh delveriumwiki`
- 生产：https://delveriumwiki.vercel.app
- 本次部署：https://delveriumwiki-8eylrlh22-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/stop-enemy-spawns-torch-guide` | **HTTP 200**（68,464 bytes） |
| 页面含 "Spawning" | ✅ 命中 |
| `<title>` | How to Stop Enemies Spawning in Delverium — Torches, Light & Base Defense · Delverium Wiki |
| sitemap.xml 收录 | ✅ `guides/stop-enemy-spawns-torch-guide` |
| 证据栏渲染 | ✅ Official ×2 / Community ×1 / Editorial ×1 |
| related 内链 | ✅ 4 条均指向真实 slug |

## 7. 备注

- 未执行 git commit；未修改其他站点。
