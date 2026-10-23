# sephiriawiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：9 月社区讨论集中在 1.0.31/1.0.33 的武器与神器改动、以及 1.0.33 已知的“敌人穿墙”问题。武器/神器改动已被 `patch-1-0-31-build-changes-guide` 正文与 1.0.33 附录完整覆盖；穿墙是官方承认但未修复的开放 bug，没有可写的确定性解法，不硬写。
- ② system-inventory-driven：官方 Steam 商店页把 **Steam Achievements** 列为游戏功能，站内 41 篇攻略中 **0 篇** 成就专页；`endgame-guide` 只提到“27 个成就”，`hard-mode-guide` 只覆盖 Root's Retreat 的难度层。官方成就数据（Steam 全局解锁率）返回恰好 27 条，命中整块空白。

**选题**：Sephiria 27 个成就的完整清单、隐藏触发、RNG 替代 Boss、Hard Mode 三层阶梯与最短完成顺序。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Sephiria — Steam global achievement percentages（app 2436940，API 返回 27 条） | https://steamcommunity.com/stats/2436940/achievements | 2026-10-23 取数 |
| Official | Sephiria 1.0.33 Update（当前版本参照，成就数未变） | https://store.steampowered.com/news/app/2436940/view/1843481262695189 | 2026-09-11 |
| Community | GamePrimer — Sephiria Achievements: All 27, Ranked | https://gameprimer.com/sephiria/achievements/ | 2026-09-15 快照 |
| Community | ProdigyGamers — Sephiria 100% Achievements Walkthrough | https://prodigygamers.com/2026/08/06/sephiria-100-achievements-walkthrough-guide/ | 2026-08-06 |
| Editorial | 完成顺序与未确认项判定 | https://sephiriawiki.vercel.app/guides/sephiria-achievements-guide | 2026-10-23 |

官方对自身成就数据为权威一手来源；两个社区来源用于交叉核对触发条件。两者对 **Chapter V** 的描述不一致（章节完成 vs 三只动物救援），文中明确写出分歧并标为社区争议，未擅自二选一。Soul Plan 的“章四后永久错过”说法只有单一 pre-1.0 报告，文中明确标为未在 1.0.33 复测、不作定论。

## 2. 查重结论

- 现有 41 篇 slug 全量比对，新 slug `sephiria-achievements-guide` 无重复。
- 主题比对：
  - `endgame-guide` 只在一条 bullet 提到“27 achievements total”，无清单、无触发、无完成顺序；
  - `hard-mode-guide` 只讲 6 个 modifier 与 60 级，不讲 Root's Retreat 1/15/30 成就；
  - `secret-rooms-guide` 讲隐藏房找法，未与 Traveler 成就绑定；
  - `boss-guide` 讲战斗策略，未覆盖三个替代 Boss 的成就条件。
- 独立搜索意图：all achievements / hidden achievement / 100% completion，与上述页不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`sephiriawiki/content/guides/sephiria-achievements-guide.md`
- slug：`sephiria-achievements-guide`
- 标题：How to Get All 27 Sephiria Achievements — Hidden Triggers and the Hard Mode Grind
- 正文词数：**1,131**（表格、frontmatter、URL 不计）
- `[Unconfirmed]` / 明确标注：Chapter V 的两种社区解释、Soul Plan 永久错过的单一报告、直接跳 Root's Retreat 30 的社区路径、按名称映射的全局百分比。
- 未编造成就名、Boss 名、数值；全部成就名与触发来自两个社区来源交叉核对，百分比来自官方 Steam 全局数据。

## 4. 构建

```
cd sephiriawiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；静态页 54/54；`/guides/sephiria-achievements-guide` 出现在 prerender 列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh sephiriawiki`
- 生产：https://sephiriawiki.vercel.app
- 本次部署：https://sephiriawiki-pyhrvj8yf-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/sephiria-achievements-guide` | **HTTP 200**（66,892 bytes） |
| 页面含标题关键词 "All 27 Sephiria Achievements" | ✅ 命中 |
| 页面含 "Root's Retreat 30" | ✅ 4 处 |
| sitemap.xml 收录 | ✅ 1 处 |
| frontmatter sources 三层 | ✅ Official ×2 / Community ×2 / Editorial ×1 |

## 7. 备注

- 顺带在 `endgame-guide` 的成就 bullet 加了指向新页的内链（同站事实校准，无内容改写）。
- 未执行 git commit（按指令）。
- 未修改其他站点。
