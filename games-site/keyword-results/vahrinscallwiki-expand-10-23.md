# vahrinscallwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：社区高频问题集中在「悬赏板在哪」「Jimet Korb 为什么不给最后一个狩猎」「Charagoth 的门打不开」。站内已有 `combat-guide`、`farming-resource-guide`、`zones-areas-guide`、`beginner-guide`，仅在区域页顺带提到悬赏，未给出完整链条。命中未覆盖痛点。
- ② system-inventory-driven：官方商店页确认 Vale 中存在可悬赏猎杀的雇佣兵、强盗与怪物，但未给位置与链条；站内 **0 篇** 专门讲 bounty hunts。两条路径指向同一空白。

**选题**：South Vale Hamlet 悬赏板、Jimet Korb（Forest Edge 小屋）狩猎链、完成全部狩猎后解锁 Hunt: Charagoth + Old City Key、Old City North 西北锁门、奖励类别与故障排查。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Forsaken Realms: Vahrin's Call — Steam store page | https://store.steampowered.com/app/951770/ | 2026-10-23 取数 |
| Community | Forsaken Realms Vahrins Call, Hunt Charagoth（Steam 讨论帖） | https://steamcommunity.com/app/951770/discussions/0/580554442217251195/ | 2026-10-23 访问 |
| Community | Forsaken Realms: Vahrin's Call Review（GamesCreed） | https://www.gamescreed.com/reviews/forsaken-realms-vahrins-call-review | 2026-07-29 |
| Editorial | 狩猎路线、配装与故障排查顺序 | 本站 `bounty-hunts-guide` | 2026-10-23 |

官方商店页确认悬赏系统存在；Steam 讨论帖提供具体链条与位置；GamesCreed 提供奖励类别（金币、装备、法术、材料）。具体金额、目标等级、章节门槛未获官方文档。

## 2. 查重结论

- 现有 slug 全量比对，新 slug `bounty-hunts-guide` 无重复。
- 主题比对：
  - `zones-areas-guide` 只列 South Vale Hamlet、Forest Edge、Old City 的区域概览，未讲悬赏链；
  - `combat-guide` 讲战斗机制，新页只引用其「动作有硬直」原则；
  - `farming-resource-guide` 讲资源经济，新页把狩猎奖励接到升级支出；
  - `beginner-guide` 未覆盖悬赏板。
- 独立搜索意图：bounty board / Jimet Korb / Charagoth / Old City Key，与上述页面不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`vahrinscallwiki/content/guides/bounty-hunts-guide.md`
- slug：`bounty-hunts-guide`
- 标题：Vahrin's Call Bounty Hunts Guide: Bounty Board, Jimet Korb & Charagoth
- 正文词数：**1,482**（frontmatter 与表格行不计）
- `[Unconfirmed]` 标注：单次悬赏精确金币/物品、悬赏板是否补货或可重复、进入 Old City 的确切章节（社区有 Chapter 5 与 Chapter 8 两种说法）、命名目标是否重生、全游戏悬赏总数。
- 未编造悬赏金额、目标等级或 Boss 数值。

## 4. 构建

```
cd vahrinscallwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/bounty-hunts-guide` 出现在 prerender 路由列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh vahrinscallwiki`
- 生产：https://vahrinscallwiki.vercel.app
- 本次部署：https://vahrinscallwiki-6l740uw6n-zhaoq0103s-projects.vercel.app
- 备注：首次部署返回 `deploy_failed / fetch failed`，按 Profile 的瞬时错误重试规则立即重跑，第二次成功。

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/bounty-hunts-guide` | **HTTP 200** |
| 页面含 "Bounty Hunts Guide" | ✅ 命中 |
| 页面含 "Jimet Korb" / "Charagoth" | ✅ 命中 |
| frontmatter sources 三层 | ✅ Official ×1 / Community ×2 / Editorial ×1 |

## 7. 备注

- 未执行 git commit（按指令）。
- 未修改其他站点。
