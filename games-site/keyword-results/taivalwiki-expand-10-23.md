# taivalwiki 全站补更 — 2026-10-23

> 岗位：建站协调员 + 玩家反馈分析师 | 批次：全站补更（每站 1 篇）

## 1. 选题依据

**两条路径都跑了。**

- ① complaint-driven：站内已有 `combat-system-guide`、`crafting-professions-guide`、`coop-multiplayer-guide`、`quests-walkthrough`、`fishing-guide`、`mount-guide`，覆盖基础战斗、职业、联机、任务、钓鱼与坐骑，未出现新的高频未覆盖抱怨点。
- ② system-inventory-driven：官方 **2026-09-15 Update #2「Combat, Creatures & Night Encounters」** 新增夜间遭遇（Night Encounters）、Light Key、必出附魔物品的宝箱、武器附魔槽（按稀有度）、21 条附魔、Explosive/Electric/Wind 三种生物变体、Tornado Talisman。站内 18 篇指南 **0 篇** 覆盖该整块系统。命中空白。

**选题**：Taival 夜间遭遇的触发方式、Light Key 获取与开箱、附魔槽与 21 条附魔、三种元素变体应对、夜间刷装循环。

### 来源

| 层级 | 标题 | URL | 日期 |
|------|------|-----|------|
| Official | NEW Content Update: Combat, Creatures and Night Encounters | https://steamcommunity.com/app/3152750/allnews/ | 2026-09-15 |
| Official | Taival — Steam store page（Early Access 特性清单） | https://store.steampowered.com/app/3152750/ | 2026-10-23 取数 |
| Community | PATCH – Taival : Combat, Créatures et Rencontres Nocturnes（RPG Jeuxvidéo 补丁拆解） | https://www.rpgjeuxvideo.com/actualite/patch-taival-combat-creatures-et-rencontres-nocturnes/ | 2026-09-15 |
| Editorial | 夜间配装、目标优先级与刷装路线 | 本站 `night-encounters-guide` | 2026-10-23 |

官方公告为系统存在的权威一手来源；RPG Jeuxvidéo 用于补足 21 条附魔、Light Key、三种变体与 Tornado Talisman 的具体措辞。掉落率、刷新计时、附魔名称与数值均未获官方公布。

## 2. 查重结论

- 现有 18 篇 slug 全量比对，新 slug `night-encounters-guide` 无重复。
- 主题比对：
  - `combat-system-guide` 讲基础战斗与武器类型，未提夜间遭遇、Light Key 或附魔槽；
  - `crafting-professions-guide` 讲制作站与职业配方，与附魔是两套系统；
  - `biomes-exploration-guide` 讲地形与探索，未涉及夜间威胁表；
  - `boss-guide` 讲 Boss 战，新页只把 Boss 作为附魔测试场景引用。
- 独立搜索意图：night encounters / Light Keys / enchantments / Tornado Talisman，与上述页面不互换 intro。
- 判定：**无自噬**。

## 3. 产出

- 文件：`taivalwiki/content/guides/night-encounters-guide.md`
- slug：`night-encounters-guide`
- 标题：Taival Night Encounters Guide: Light Keys, Enchanted Gear & Night Variants
- 正文词数：**1,463**（frontmatter 与表格行不计）
- `[Unconfirmed]` 标注：完整 21 条附魔名单/数值、Light Key 掉落率与宝箱位置、Tornado Talisman 具体效果与是否叠加、夜间遭遇刷新计时/等级缩放、Light Key 是否消耗、钥匙与宝箱是否一一对应、夜间内容是否主线必需。
- 未编造附魔名称、百分比、掉落率或 Talisman 数值。

## 4. 构建

```
cd taivalwiki && pnpm install --prefer-offline && pnpm build
```

- exit 0；`/guides/night-encounters-guide` 出现在 prerender 路由列表。

## 5. 部署

- 命令：`./deploy-wiki-site.sh taivalwiki`
- 生产：https://taivalwiki.vercel.app
- 本次部署：https://taivalwiki-13o0eeugl-zhaoq0103s-projects.vercel.app

## 6. 线上验证

| 检查 | 结果 |
|------|------|
| `GET /guides/night-encounters-guide` | **HTTP 200** |
| 页面含 "Taival Night Encounters" | ✅ 命中 |
| 页面含 "Light Keys" | ✅ 命中 |
| frontmatter sources 三层 | ✅ Official ×2 / Community ×1 / Editorial ×1 |

## 7. 备注

- 未执行 git commit（按指令）。
- 未修改其他站点。
