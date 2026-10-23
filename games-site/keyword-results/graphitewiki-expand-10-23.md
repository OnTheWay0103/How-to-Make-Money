# graphitewiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：玩家问题集中在「队伍最多几人」「怎么招募」「bond/friendship 有什么用」「campfire 是什么」，站内 `heroes-guide`、`how-to-unlock-heroes`、`tarot-events-guide`、`builds-artifacts-guide` 只在行文中顺带提及 party / bond，没有专页。命中未覆盖痛点。
- ② system-inventory-driven：官方商店页明确写 "Build your party… notebook scenarios that test your team"、Scribe 让七位英雄 "gather allies"；Demo 页确认 friendship levels up to 1。站内 **0 篇** 专门讲队伍构建与 bond。两条路径指向同一空白。

**选题**：确认的队伍结构、招募方式、bond/campfire 系统、friendship 等级、队伍构成如何影响塔罗事件、可执行轮换建议。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Graphite — Steam store page（build your party / seven heroes / gather allies） | https://store.steampowered.com/app/3080560/ | 2026-10-23 取数 |
| Official | Graphite: Act 1 demo — Steam store page（四英雄、friendship up to 1） | https://store.steampowered.com/app/3307810/ | 2026-10-23 取数 |
| Community | Graphite game overview（GamerScout：bond system、campfire、party-responsive events、四幕十五日） | https://www.gamerscout.io/games/graphite | 2026-10-23 访问 |
| Editorial | 队伍搭配与轮换建议 | 本站 `party-building-and-bonds-guide` | 2026-10-23 |

官方商店页确认队伍构建与七英雄；Demo 页确认 friendship 机制存在且上限为 1；GamerScout 提供 bond、campfire 与事件响应队伍的社区描述。队伍上限、招募门槛、bond 点数来源与等级奖励均无官方文档。

## 2. 查重结论

- 现有 slug 全量比对，新 slug `party-building-and-bonds-guide` 无重复。
- 主题比对：
  - `heroes-guide` 讲七英雄定位与玩法，不讲队伍规模与 bond；
  - `how-to-unlock-heroes` 讲解锁已知/未知，不讲招募后的队伍运营；
  - `tarot-events-guide` 讲事件机制，新页只把「事件随队伍变化」作为组队理由；
  - `builds-artifacts-guide` 讲遗物 build，新页讲阵容角色搭配。
- 独立搜索意图：party size / recruit heroes / bond system / campfire / friendship，与上述页面不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`graphitewiki/content/guides/party-building-and-bonds-guide.md`
- slug：`party-building-and-bonds-guide`
- 标题：How Party Building and Bonds Work in Graphite
- 正文词数：**1,414**（frontmatter 与表格行不计）
- `[Unconfirmed]` 标注：队伍最大人数、招募是否受剧情/好感门槛、七英雄能否单局全收、招募是否跨局保留、bond 点数获取方式、正式版 friendship 上限、bond 是否跨局继承。
- 明确写出「任何给出具体队伍人数或 bond 阈值的指南都是猜测」，未编造数值。

## 4. 构建

```
cd graphitewiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/party-building-and-bonds-guide` 出现在 prerender 路由列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh graphitewiki`
- 生产：https://graphitewiki.vercel.app
- 本次部署：https://graphitewiki-nrfip78ch-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/party-building-and-bonds-guide` | **HTTP 200** |
| 页面含 "Party Building and Bonds" | ✅ 命中 |
| 页面含 "bond system" / "campfire" | ✅ 命中 |
| frontmatter sources 三层 | ✅ Official ×2 / Community ×1 / Editorial ×1 |

## 7. 备注

- 未执行 git commit（按指令）。
- 未修改其他站点。
