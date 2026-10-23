# crimsonmoonwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：1.0.2（2026-10-01）修了数百项 co-op、存档、进度、Boons、Weapon Arts、崩溃与性能问题；这些抱怨已由现有 `coop-multiplayer-guide`、`builds-guide`、`boons-guide`、`faq-content` 覆盖，单写补丁会与既有页重叠。
- ② system-inventory-driven：官方 2026-09-02「Helpful Resources: Runs, Loadouts & Gear」专门解释 **Loadout Station 在 active run 中不可用**、**purification 只解锁 Common 品质**、**Gajov 提升最低品质**，并承认游戏内说明不清。站内 16 篇没有一篇讲 Loadout Station / Loadout Crystal / run 边界；`purification-guide` 只讲 purify 取舍，且仍把品质路径标为 `[Unconfirmed]`。命中整块空白。

**选题**：为什么 Loadout Station 锁住、如何正确结束 run 换 loadout、以及 purification/Gajov 品质关系。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | Helpful Resources: Runs, Loadouts & Gear | https://steamcommunity.com/games/4317690/announcements/detail/693145389614760259 | 2026-09-02 |
| Official | Crimson Moon Hotfix 1.0.1 Patch Notes（rolling backup saves / save fixes） | https://steamcommunity.com/games/4317690/announcements/detail/717915822014595574 | 2026-09-11 |
| Community | Gamerblurb – Crimson Moon How to Change Loadout | https://gamerblurb.com/crimson-moon/crimson-moon-how-to-change-loadout | 访问于 2026-10-23 |
| Community | Game8 – Can You Equip or Drop Reserved Items? | https://game8.co/games/Crimson-Moon/archives/618170 | 访问于 2026-10-23 |
| Editorial | run 规划与排障建议 | 本站编辑综合 | 2026-10-23 |

官方公告锚定「active run 锁定 / Common 品质 / Gajov 最低品质」；Loadout Crystal 位置、五个存档槽、Abandon Run/End Session、Armory reserved 等均标 `[Community]`。

## 2. 查重结论

- 现有 16 篇 slug 全量比对，新 slug `loadout-station-locked-guide` 无重复。
- 主题比对：
  - `purification-guide`：讲 purify/keep 决策，不解释 Loadout Station 锁定与 run 边界。
  - `incursions-guide`：讲 15–45 分钟 run 结构与 purification 循环，没有 loadout 更换流程。
  - `sanctus-clypeus-hub-guide`：讲 hub 升级/NPC，不涉及 Loadout Crystal。
  - `builds-guide` / `equipment-sets-guide`：讲构筑与套装，不涉及 run 中锁定。
- 独立搜索意图：crimson moon loadout station locked / how to change loadout / gajov upgrade。
- 判定：**无自噬**。

## 3. 产出

- 文件：`crimsonmoonwiki/content/guides/loadout-station-locked-guide.md`
- slug：`loadout-station-locked-guide`
- 标题：Why Is the Loadout Station Locked in Crimson Moon? Runs, Loadouts & Gajov
- 正文词数：**1,460**（表格、Sources、链接不计）
- `[Unconfirmed]` 标记：Loadout Crystal 的五个槽位、Abandon Run/End Session 菜单路径、Quick Match 绕过法、具体 run 任务数在后续补丁是否变化。
- 未编造 Boss/道具/数值；官方与社区来源分层标注。

## 4. 构建

```
cd crimsonmoonwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；静态路由全部生成；`/guides/loadout-station-locked-guide` prerender 成功。
- 站内攻略数：16 → 17。

## 5. 部署

- 命令：`./deploy-wiki-site.sh crimsonmoonwiki`
- 生产：https://crimsonmoonwiki.vercel.app
- 本次部署：https://crimsonmoonwiki-z28wbjso5-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/loadout-station-locked-guide` | **HTTP 200**（62,105 bytes） |
| 页面含 "Loadout Station" / "Gajov" | ✅ 命中 |
| sitemap.xml 收录 | ✅ `loadout-station-locked-guide` |
| 证据栏渲染 | ✅ 三层正常 |

## 7. 备注

- 未执行 git commit；未修改其他站点。
- 站内旧文将 purification 品质路径标为 `[Unconfirmed]`；新文用官方 9/2 公告补上了 Common/Gajov 事实，但未回改旧文，避免本批范围外改动。
