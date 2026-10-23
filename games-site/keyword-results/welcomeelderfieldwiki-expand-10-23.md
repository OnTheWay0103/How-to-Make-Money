# welcomeelderfieldwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：发售后玩家抱怨集中在难度、刷取、QoL 与「第三个 AP」争论；官方 2026-10-10 已承认这些问题，但相关机制已由 `combat-guide`、`difficulty-modes-guide`、`progress-upgrades-guide` 覆盖，单写抱怨会自噬。
- ② system-inventory-driven：官方商店页把 **cooking** 列为生活模拟核心系统之一，而站内 17 篇没有一篇烹饪专文 —— `farming-economy-guide` 只有「Cooking & Crafting」两段，`money-making-guide` 只有一节。同时 2026-10-19 官方开发者日志专门公布 **Cooking profession**（品质、售价、成长），2026-10-15 公布 **130+ profession perks** 的 rework。命中「官方明说有、站内整块没写」的空白。

**选题**：当前烹饪循环 + 官方已公布但尚未上线的 Cooking profession，明确区分 live 与 planned。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | A Word With the Developer — Cooking profession / food quality / food pricing | https://steamcommunity.com/ogg/3195440/announcements/detail/689771494788563704 | 2026-10-19 |
| Official | A Word With the Developer — Levels-to-Professions rework / 130+ perks / Combat profession | https://steamcommunity.com/ogg/3195440/announcements/detail/689771494788563686 | 2026-10-15 |
| Community | Elderfield Wiki – Cooking Guide: Recipes, Unlocks and Gift Dishes | https://elderfieldgame.wiki/guides/cooking-guide/ | 访问于 2026-10-23 |
| Media | RPG Jeuxvidéo – Welcome to Elderfield developer roadmap | https://www.rpgjeuxvideo.com/actualite/news-welcome-to-elderfield-le-developpeur-devoile-la-suite/ | 2026-10-11 |
| Editorial | 当前版本投入建议与「先别为卖而做菜」判断 | 本站编辑综合 | 2026-10-23 |

关键区分：Cooking profession、品质概率、食材成本定价均为**官方已公布、尚未上线**；Farmer Hans 解锁、Chef Elroy、具体菜谱与礼物偏好来自社区 wiki，正文标 `[Community]`，未把社区数值写成官方。

## 2. 查重结论

- 现有 17 篇 slug 全量比对，新 slug `cooking-guide` 无重复。
- 主题比对：
  - `farming-economy-guide`：种植/采矿/捕鱼/资源优先级，烹饪仅两段。
  - `money-making-guide`：收入来源排序，烹饪仅「value-add」一节。
  - `fishing-guide`：钓鱼路线与鱼饵，烹饪只作为鱼的用途一句带过。
  - `combat-guide` / `rest-sleep-guide`：食物作为战斗/休息补给，没有烹饪解锁、菜谱来源、售价机制。
- 独立搜索意图：welcome to elderfield cooking / recipes / chef elroy / food quality / cooking profession。
- 判定：**无自噬**；新文是站内第一篇烹饪专文。

## 3. 产出

- 文件：`welcomeelderfieldwiki/content/guides/cooking-guide.md`
- slug：`cooking-guide`
- 标题：How Cooking Works in Welcome to Elderfield — Recipes, Food Buffs & the Coming Cooking Skill
- 正文词数：**1,499**（表格、Sources、链接不计）
- `[Unconfirmed]` 标记：Cooking profession 上线日期、品质档位与倍率、完整 perk 列表、旧菜谱是否迁移、食材成本定价是否覆盖全部料理。
- 未编造菜谱/数值；社区来源的菜名与 HP 数值只作定性引用，未写精确数字。

## 4. 构建

```
cd welcomeelderfieldwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；静态路由全部生成；`/guides/cooking-guide` prerender 成功。
- 站内攻略数：17 → 18。

## 5. 部署

- 命令：`./deploy-wiki-site.sh welcomeelderfieldwiki`
- 生产：https://welcomeelderfieldwiki.vercel.app
- 本次部署：https://welcomeelderfieldwiki-2os17s9bu-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/cooking-guide` | **HTTP 200**（67,553 bytes） |
| 页面含 "Cooking" / "Chef Elroy" | ✅ 命中 |
| sitemap.xml 收录 | ✅ `cooking-guide` |
| 证据栏渲染 | ✅ 三层正常 |

## 7. 备注

- 未执行 git commit；未修改其他站点。
- 旧文多为 8 月底预发售口径；新文以 2026-10-23 的 live 版本为准，未回改旧文，避免本批范围外改动。
- 「A Word With the Developer」系列是开发者路线图，不是已上线补丁；正文已明确写 planned / not shipped。
