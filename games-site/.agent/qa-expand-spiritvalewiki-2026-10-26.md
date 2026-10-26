# QA Report — spiritvalewiki expand (quick)

- 日期: 2026-10-26
- 模式: quick（仅本轮变更）
- 范围: 1 篇新增 — `content/guides/empty-maps-missing-monsters-guide.md`
- 结果: **PASS**

## 1. 结论

| 检查项 | 结果 | 证据 |
|---|---|---|
| 虚构检测（游戏专有名词） | PASS | 见下表逐个核验 |
| 跨站残留 | PASS | `grep -n "Witchspire\|mistfall\|aincrad\|The Mound\|Sephiria\|DinoBlade\|Tears of Metal\|MineGeon\|Mystralia\|Grain Rot\|EX-Mod\|NACON\|SpiritVale Studio"` → 0 匹配 |
| 事实一致性 | PASS（含 1 处主动加注） | 与 advanced-artifacts-grimoires-guide / pvp-conquest-guide 对齐，见第 3 节 |
| 词数 | PASS | 1,500 词（800–1500 内） |
| H1 数量 | PASS | 1 |
| title / description 长度 | PASS | title 57 字符；description 151 字符 |
| related 块状数组 | PASS | 块状，6 项 |
| sources 三层 + url/date/text | PASS | Official 1 / Community 5 / Editorial 1，每条含 url+date+text |
| 数字标来源或 [Unconfirmed] | PASS | 见第 4 节 |
| build | PASS | `pnpm build` ✓ Compiled successfully，路由含 `/guides/empty-maps-missing-monsters-guide` |
| lint | PASS | `node scripts/lint-guides.mjs spiritvalewiki --changed` → 全部通过 |

## 2. 虚构检测：专有名词逐个核验

| 名词 | 出现位置 | 核验 | 判定 |
|---|---|---|---|
| Dark Fortress / Dark Manor（S 级） | 排名表 | spiritvale.blog 排名页 + 站内 advanced-artifacts-grimoires-guide 的 0.33.0 掉率表同列 S 级 | ✅ |
| Forge / Night Garden / Warcamp（A 级） | 排名表 | 同上，站内已有页一致 | ✅ |
| Turtle Nexus（A 级） | 排名表 | WebSearch 命中 spiritvalers.com/maps/turtle-nexus（Island Dungeon，Lv131–135）与 spiritvale.blog 排名页 | ✅ |
| Abyss Castle（B 级） | 排名表 | spiritvale.blog + 站内 advanced-artifacts（"B-rank map: Abyss"） | ✅ |
| Goblin Cave（C 级） | 排名表 | WebSearch 命中 spiritvalers.com/maps/goblin-cave-1（Lv51–55 / 56–60） | ✅ |
| Demon's Maw（C 级） | 排名表 | WebSearch 命中（Lv96–100） | ✅ |
| Starfall / Swamp / Forgotten Depths（C 级） | 排名表 | spiritvale.blog 排名页 | ✅ |
| 「last channel is PvP and Boss enabled」 | 第 3 节 | 官方 0.34.0 公告原文（URL 已核对为站内 pvp-conquest-guide 同一条） | ✅ |

未发现凭空编造的 Boss 名、NPC 名、武器名、职业名或系统。未声称游戏有 PvP 模式之外未证实的联机功能。

## 3. 事实一致性

- **主动加注**：排名附录中不同官方摘要对同一地图的写法不一致（"Turtle Nexus" vs "Nexus"、"Demon's Maw" vs "Maw"、"Sunken" 未列入部分表）。文中已加一句「Other official summaries abbreviate the same maps (Nexus, Maw, Sunken), so trust the in-game world map label over any table」，避免与站内 advanced-artifacts-grimoires-guide 的写法互相打脸。
- **通道规则**与 pvp-conquest-guide 第 7 节一致（0.34.0，末位频道 PvP+Boss 开启）；本文只写对刷怪的影响，风险侧指向该页，不重复论述 → 无自噬。
- **与 leveling-guide 的边界**：本文不列刷怪点清单（leveling-guide 已有），只解释「为什么看起来空 / 为什么被占」，避免同一意图拆两页。

## 4. 数字来源标注

| 数字 | 标注 |
|---|---|
| respawn 15–25 秒 | 引 Steam 评测 + 正文标 **[Unconfirmed]**（官方未公布） |
| 排名倍率表（2.00×/1.75×/3.00× 等） | 注明来自 spiritvale.blog 转录，正文标 **[Unconfirmed]** |
| +2%/级、上限 30% | 同上，标 **[Unconfirmed]** |
| 「几百名玩家」 | 玩家自述，标 **[Unconfirmed]** |
| 每图频道数 | 明确写「未公布」，不猜数字 |

## 5. 来源真实性说明

- 本机对 `store.steampowered.com` / `steamcommunity.com` 直连被拒（curl 000 / WebFetch ECONNREFUSED），Steam 原文未能二次打开；官方链接沿用站内 pvp-conquest-guide 已上线并核验过的 0.34.0 公告 URL。此项按 QA 规则记为 **P2 [Unverified-Offline]**，不阻断。
- 其余来源（primagames、free-play-online.ru、mmochronicles、spiritvale.blog、mmogah、spiritvalers）本轮均可访问。

## 6. 后续建议（不阻断）

- 等 Steam 可直连时，回读 0.32.0 公告原文，把排名倍率表从 [Unconfirmed] 升为已核实。
