# shiftatmidnightwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：9 月更新后高频问题「Chainsaw 在哪买」「为什么 LOCKED AND LOADED 还不解锁」「Chainsaw 能不能打 Marionette」。站内 `weapons-guide`、`achievements-guide`、`survival-strategies`、`money-guide` 均未覆盖该武器。命中未覆盖痛点。
- ② system-inventory-driven：官方 **2026-09-01** 公告（Build 25057748）新增可购买 Chainsaw，并把它列为 LOCKED AND LOADED 的必需项；站内 **0 篇** 专门讲 Chainsaw。两条路径指向同一空白。

**选题**：Chainsaw 的购买路径（店内电脑 → Weapons Arsenal）、无弹药特性、对地面敌人的适用性、对 Marionette 的无效、LOCKED AND LOADED 完整清单与分班次购买计划、联机共享不确定性。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | 30 NEW CUSTOMERS + MORE（Steam 公告，Bun Muen / Kwalee） | https://steamcommunity.com/app/3722330/allnews/ | 2026-09-01 |
| Community | Shift At Midnight News & Patch Notes — September 2026 | https://shiftatmidnight.co/updates/ | 2026-10-23 访问 |
| Community | Shift At Midnight Chainsaw — LOCKED AND LOADED | https://shiftatmidnight.wiki/guide/chainsaw/ | 2026-10-23 访问 |
| Editorial | 购买时机、预算与战斗建议 | 本站 `chainsaw-guide` | 2026-10-23 |

官方公告确认武器存在、上架时间与成就必需性；社区站补足购买位置、无弹药、地面敌人限定与完整清单。价格、键位、精确伤害未公布。

## 2. 查重结论

- 现有 slug 全量比对，新 slug `chainsaw-guide` 无重复。
- 主题比对：
  - `weapons-guide` 讲 Arsenal 与陷阱总览，未收录 9/1 新增 Chainsaw；
  - `achievements-guide` 讲 100% 规划，未列 LOCKED AND LOADED 的完整武器清单；
  - `survival-strategies` 讲 Hunt 生存，只在近战段落泛提；
  - `money-guide` 讲店钱/私钱，新页只引用其双账户纪律。
- 独立搜索意图：chainsaw / locked and loaded / weapons arsenal，与上述页面不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`shiftatmidnightwiki/content/guides/chainsaw-guide.md`
- slug：`chainsaw-guide`
- 标题：How to Get the Chainsaw in Shift At Midnight (Locked and Loaded)
- 正文词数：**1,240**（frontmatter 与表格行不计）
- `[Unconfirmed]` 标注：Chainsaw 售价、键位、攻击速度/范围/精确伤害、店钱与私钱的扣款规则、联机是否每人一把、完整成就清单（官方只确认 Chainsaw 为必需项）、成就追踪范围（近战 only 还是含枪械/陷阱）。
- 未编造价格、伤害数值或未确认的成就条目。

## 4. 构建

```
cd shiftatmidnightwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/chainsaw-guide` 出现在 prerender 路由列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh shiftatmidnightwiki`
- 生产：https://shiftatmidnightwiki.vercel.app
- 本次部署：https://shiftatmidnightwiki-efrmygen3-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/chainsaw-guide` | **HTTP 200** |
| 页面含 "Chainsaw" | ✅ 命中 |
| 页面含 "Locked and Loaded" / "LOCKED AND LOADED" | ✅ 命中 |
| frontmatter sources 三层 | ✅ Official ×1 / Community ×2 / Editorial ×1 |

## 7. 备注

- 未执行 git commit（按指令）。
- 未修改其他站点。
