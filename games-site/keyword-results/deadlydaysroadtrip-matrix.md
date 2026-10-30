# Deadly Days: Roadtrip — 页面矩阵

> 生成日期: 2026-10-31 | 依据 `keyword-results/deadlydaysroadtrip.md`（114 有效词，攻略型 ~60%）
> 站点：`deadlydaysroadtripwiki` | 游戏版本：1.0（2026-10-29 正式发售）
> 竞对 `deadlydaysroadtrip.wiki`（45 页 × 4 语言）：差异化为**数值/路线/机制深度 + 每个结论标来源**，不写泛泛 walkthrough。

## 一、页型分配（MECE）

| 页型 | 页数 | 说明 |
|------|------|------|
| 新手指南 | 1 | 首小时到第一次通关的路线与优先级 |
| Tier List | 2 | 角色 1 + 武器/构筑 1，均标版本与判定依据 |
| 核心机制 | 2 | 背包/掉落/合成 1 + 局外成长（Meta）1 |
| Boss / 终局 | 1 | 五个最终 Boss 与 Headquarters Run |
| 角色解锁 | 1 | 每个角色的解锁方法与初始道具 |
| FAQ | 1 | 购买/平台/联机/版本等事实型问题 |

## 二、页面清单

| 优先级 | 页面 slug | 页型 | 目标搜索词（来自词库） | 搜索意图 | 素材源（详见 `-sources.md`） | 站内互链 |
|---|---|---|---|---|---|---|
| P0 | `beginner-guide` | 新手指南 | deadly days roadtrip beginner guide · beginner tips · tips | 「第一次玩，前几天该做什么、怎么不团灭」 | Steam 商店页（官方）+ Steam 1.0/0.22 公告（官方）+ GamingOnLinux（独立媒体） | weapon-tier-list / backpack-and-loot-guide / meta-progression-guide / unlock-all-characters |
| P0 | `character-tier-list` | Tier List | character tier list · best character · tier list · meta | 「练哪个角色 / 哪个角色最强」 | Steam 0.19/0.21/1.0 公告（官方）+ kosguides（社区）+ Steam 商店页（官方） | unlock-all-characters / weapon-tier-list / beginner-guide |
| P0 | `weapon-tier-list` | Tier List | weapon tier list · best weapons · best build · meta build | 「哪把武器值得做 / 怎么配装」 | Steam 1.0 公告（官方武器清单）+ GamingOnLinux（独立）+ Steam 商店页（官方） | backpack-and-loot-guide / character-tier-list / bosses-guide |
| P0 | `backpack-and-loot-guide` | 核心机制 | items · all items · items list · legendary items · red items · items workbench · item packs | 「背包怎么摆、掉落稀有度、工作台怎么用」 | Steam 商店页（官方）+ GamingOnLinux（独立）+ Steam 0.19/0.21 公告（官方） | weapon-tier-list / meta-progression-guide / beginner-guide |
| P0 | `bosses-guide` | Boss / 终局 | boss · deadly days roadtrip boss · final boss · walkthrough | 「有哪些 Boss、终局怎么打」 | Steam 1.0 公告（官方）+ Steam 0.21 公告（官方）+ Steam 0.22 公告（官方） | weapon-tier-list / meta-progression-guide / beginner-guide |
| P0 | `unlock-all-characters` | 角色解锁 | unlock astronaut / banana / chicken / death / grim reaper / santa · unlock all characters | 「某个角色怎么解锁」 | kosguides（社区）+ Steam 0.19/0.21/1.0 公告（官方）+ Steam 商店页（官方） | character-tier-list / meta-progression-guide / beginner-guide |
| P0 | `meta-progression-guide` | 核心机制 | meta progression · meta · upgrade · unlock · workbench · apples | 「死亡后保留什么、基地怎么升级」 | Steam 0.19/0.20/0.21 公告（官方）+ Steam 商店页（官方） | backpack-and-loot-guide / beginner-guide / unlock-all-characters |
| P0 | `/faq`（静态页） | FAQ | release date · price · ps5 · xbox · switch · game pass · demo · online co op · steam | 「买之前想确认的事实」 | Steam 商店页（官方）+ Steam 1.0 发布公告（官方）+ kosguides（社区）+ GamingOnLinux（独立） | 全部 guide |

## 三、互链与分类

- 分类层：`/guides`（全部）、`/tier-list`（优先级总览，链到两个 tier list）、`/faq`
- 每个内页 ≥3 条上下文内链，锚文本描述目标页（不用 "click here"）
- 所有页面 version 字段统一写 `1.0`，updated 写 `2026-10-31`

## 四、不做的页（明确排除）

| 页 | 原因 |
|---|---|
| `codes` | 买断制、无官方可兑换码；站内已用 `--no-codes` 生成。社区流传的 President 密码属隐藏解锁口令，不是促销码，写在 `unlock-all-characters` 并标注社区来源，不单开 codes 页 |
| `walkthrough`（逐关图文） | 竞对已铺 45 页泛 walkthrough，正面撞车且无可核验来源；差异化不做 |
| `patch-notes` | 官方公告原文可查，二次搬运无附加价值；版本变化写进各机制页的 version 字段 |
| `mods` / `cheats` | 无官方支持或可靠来源，不建 |

## 五、落地检查

- P0 行 = 8，其中 ≥5 行有明确目标词与意图 ✅
- 每页 ≥2 个独立来源且 ≥1 官方 ✅（见 `-sources.md`）
- 词库覆盖：Tier 6 / Boss 16 / Weapons 12 / How-to 13 / Guide 9 / Info 33 / Other 18 均有落点；`deadly days roadtrip codes` 与 `unlock knabe` 不单独立页（前者无官方码，后者为 Knabe Kola 联动误配词）
