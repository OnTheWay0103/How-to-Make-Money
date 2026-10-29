# Demon Bluff — 页面矩阵（2026-10-29）

> 规则：`docs/STRATEGY-内容生产.md`（一搜索意图 = 一内页；MECE 分组；页型是候选池不是必建清单）
> 词源：`keyword-results/demonbluff.md`（有效词 67，采集 2026-10-29）
> 素材：`keyword-results/demonbluff-sources.md`
> 建站依据：`keyword-results/selection-2026-10-29.md` §三 #120（14 分，可建）

## 一、意图分组（MECE）

| 组 | 词数 | 覆盖的词（代表） | 判定 |
|---|---:|---|---|
| A 发售/平台/价格 | 54（含裸词） | `demon bluff`, `demon bluff release date`, `steam release date`, `game price`, `ps5`, `switch`, `mobile`, `steam deck`, `metacritic`, `discord` | **一页吃掉**，全部是「买不买/什么时候买」 |
| B 角色/卡牌 | 8 + 5 具名角色 | `all characters`, `character list`, `characters wiki`, `new characters`, `modded characters`, `wiki baker`, `wiki dreamer`, `wiki witness`, `rambler`, `lycanthrope` | **一页**；具名角色是长尾，指向同一页 |
| C 玩法/新手 | — | `demon bluff guide`, `demon bluff gameplay`, `demon bluff game` | **一页** |
| D 机制/推理 | 1 + 1 | `can demons disguise as outcasts`, `demon bluff demon` | **一页**（结算顺序 + 阵营判定） |
| E Demo/升格 | 4 | `demo`, `demo steam`, `demo online`, `demo how many ascensions` | **一页** |
| F 解锁/皮肤 | 2 | `unlock skins`, `steam unlocked` | **一页**（并入进度页） |
| G Tier list | 1 | `tier list maker` | **不单独建页**（1 词，撑不起一页；Tier 观点无官方依据）→ 并入 `app/tier-list/page.tsx` 的社区共识表 |
| H 杂问 | 余 | `reddit`, `northernlion`, `game artist`, `game free`, `new update`, `patch notes`, `steam charts` | `/faq` 页 + 首页 FAQ 块 |

> 没有 `codes` 组：本作是单人 roguelite，无兑换码系统（与市面模板默认页型不同，页型池不是必建清单）。

## 二、词 → 页映射

| # | 页面 | 主关键词 | 次关键词 | 意图 | 素材源 | 优先级 |
|:--:|---|---|---|---|---|---|
| 1 | `release-date-and-platforms` | `demon bluff release date` | `steam release date`, `full release date`, `mobile release date`, `game price`, `steam price`, `ps5`, `switch`, `mobile`, `steam deck`, `metacritic`, `demo online`, `game free` | 发售/平台/价格 | Steam 商店页（官方）+ Steam News（官方）+ wiki.gg | **P0**（22+ 词） |
| 2 | `characters-list` | `demon bluff characters` | `all characters`, `character list`, `characters wiki`, `game characters`, `new characters`, `modded characters`, `wiki baker`, `wiki dreamer`, `wiki witness`, `rambler`, `lycanthrope` | 角色/卡牌 | wiki.gg 角色页（社区）+ Steam 页（官方） | **P0**（13 词） |
| 3 | `beginner-guide` | `demon bluff guide` | `demon bluff gameplay`, `demon bluff game`, `demon bluff tutorial`（无返回） | 新手 | Steam 页（官方）+ wiki.gg 机制页 | **P1** |
| 4 | `ability-order` | `demon bluff demon` | `can demons disguise as outcasts`, `demon bluff skills`, `demon bluff boss` | 机制/结算 | wiki.gg 机制页（社区）+ Steam 页（官方） | **P1** |
| 5 | `demo-and-ascension` | `demon bluff demo` | `demo steam`, `demo how many ascensions`, `steam unlocked` | Demo/升格 | Steam 页 Demo 段（官方）+ wiki.gg | **P1** |
| 6 | `unlocks-and-skins` | `demon bluff unlock skins` | `steam unlocked`, `demon bluff new update`, `demon bluff patch notes` | 进度/解锁 | Steam 页（官方）+ wiki.gg | **P2** |
| 7 | `app/faq/page.tsx` | `demon bluff`（裸词） | `reddit`, `discord`, `northernlion`, `game artist`, `steam charts`, `metacritic` | 杂问 | Steam 页 + 官方公告 | **P2** |

## 三、交付口径

- 首批 **6 个 guide 页**，每页 ≥1,200 词，合计目标 ≥8,000 词（另加 `/faq`）。
- 每页 ≥2 个独立来源且 ≥1 官方（Steam 商店页 / Steam News / 官方公告）；社区 wiki 只作机制补充，逐条标来源。
- **发售日一律写「November 2026（Steam 商店页，截至 2026-10-29 无具体日）」**，MUST NOT 写具体某天；wiki.gg 首页的「Q1 2026」已过时，MUST NOT 引用。
- 游戏仍在 demo/playtest，所有数值标 `[Unconfirmed]` 或版本号（`v0.762b`）。
- `related` 用块状 YAML 数组（`guides-related-inline-array` 记忆：内联数组会被静默忽略）。


## 四、落地结果（2026-10-29 建站当日）

| 页面 | 实际词数 | 标题字符 | description 字符 | 来源数（官方/社区） |
|---|---:|---:|---:|---|
| release-date-and-platforms | 1,768 | 45 | 156 | 3（官方 2 + 社区 1） |
| characters-list | 1,810 | 46 | 148 | 4（官方 1 + 社区 3） |
| beginner-guide | 1,661 | 52 | 147 | 4（官方 2 + 社区 2） |
| ability-order | 1,421 | 49 | 152 | 4（官方 1 + 社区 3） |
| demo-and-ascension | 1,222 | 54 | 158 | 4（官方 3 + 社区 1） |
| unlocks-and-skins | 1,472 | 52 | 159 | 3（官方 1 + 社区 2） |
| **合计** | **9,354** | — | — | — |

> 建站当日修订 3 次事实性错误（初稿错误都来自「只看了主商店页的 playtests: []」）：
> 1. **demo 存在**（独立 app 3803820，2026-05-27 免费上线，40+ villager 卡 / 9 个 Relic）；
> 2. **语言 12 已上架 / 13 计划**（Turkish 只在 demo 页与开发公告里）；
> 3. **macOS 有官方不兼容声明**（"not compatible with macOS 10.15 Catalina or above"），不能写成「支持 macOS」。
