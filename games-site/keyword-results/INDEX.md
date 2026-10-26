# 词库索引

> 生成时间：2026-10-26 00:48 UTC
> 生成脚本：`node scripts/keyword-index.mjs` —— 不要手改本文件
> 规则：`docs/STRATEGY-挖词与词库.md`

共 **70** 份游戏词库（新格式 10，旧格式 60），已建站 **32** 站。

> 新格式以 `slug == 站点目录名去掉 wiki` 精确匹配；旧格式只能按文件名猜，「未建站」可能有漏配。

## 渠道产出

> 「贡献词数」= 该渠道采到的有效词条次（一词多渠道会重复计）；「独占词数」= 只有这个渠道采到的词。
> 用来回答：扩渠道该往哪扩、哪个渠道在空转。

| 渠道 | 贡献词数 | 独占词数 |
|---|---:|---:|
| google_suggest | 728 | 728 |

## 采集锚定产出

> google_suggest 内部按锚定批次拆开：哪个种子真的踩到词，哪个在空转。扩种子时看这张表。

| 锚定批次 | 贡献词数 | 独占词数 |
|---|---:|---:|
| 裸词 | 111 | 92 |
| 品牌+game | 84 | 72 |
| 后缀:release date | 73 | 66 |
| 探针:steam | 66 | 56 |
| 后缀:demo | 63 | 54 |
| 探针:ps5 | 48 | 42 |
| 后缀:reddit | 48 | 36 |
| 后缀:price | 47 | 33 |
| 后缀:characters | 38 | 34 |
| 后缀:wiki | 35 | 25 |
| 后缀:boss | 34 | 32 |
| 后缀:multiplayer | 31 | 25 |
| 后缀:guide | 28 | 15 |
| 后缀:update | 26 | 18 |
| 后缀:tips | 19 | 14 |
| 后缀:codes | 16 | 13 |
| 后缀:tier list | 15 | 12 |
| 后缀:map | 10 | 6 |
| 后缀:co op | 9 | 6 |
| 后缀:items | 7 | 3 |
| 后缀:classes | 6 | 3 |
| 探针:skills | 5 | 2 |
| 后缀:crossplay | 3 | 2 |
| 后缀:best build | 3 | 3 |

## 按游戏

| 游戏 | slug | 有效词 | 最后采集 | 来源 | 页型覆盖 | 站点 | 格式 |
|---|---|---:|---|---|---|---|---|
| Dungeon Inn | dungeoninn | 12 | 2026-10-26 | google_suggest:14（裸词 11、探针:steam 2、后缀:guide 1） | 5 FAQ / 待定 | 未建站 | new |
| Every Day We Fight | everydaywefight | 15 | 2026-10-26 | google_suggest:27（裸词 7、探针:steam 6、后缀:wiki 5） | 4 核心机制/Boss / 5 FAQ / 待定 | 未建站 | new |
| Hellraiser Revival | hellraiserrevival | 119 | 2026-10-26 | google_suggest:131（裸词 15、后缀:demo 15、品牌+game 15） | 1 Codes / 4 核心机制/Boss / 5 FAQ / 待定 | 未建站 | new |
| Invokyr | invokyr | 33 | 2026-10-26 | google_suggest:36（后缀:demo 12、裸词 8、探针:steam 5） | 1 Codes / 5 FAQ / 待定 | 未建站 | new |
| Neon Abyss 2 | neonabyss2 | 68 | 2026-10-26 | google_suggest:86（裸词 14、品牌+game 8、后缀:multiplayer 8） | 1 Codes / 2 Beginner / 3 Tier List / 4 核心机制/Boss / 5 FAQ / 待定 | neonabyss2wiki | new |
| Order of the Sinking Star | orderofthesinkingstar | 88 | 2026-10-26 | google_suggest:95（品牌+game 15、裸词 15、后缀:demo 15） | 4 核心机制/Boss / 5 FAQ / 待定 | 未建站 | new |
| TUNG | tung | 178 | 2026-10-26 | google_suggest:184（后缀:characters 15、后缀:price 15、探针:steam 15） | 1 Codes / 2 Beginner / 3 Tier List / 4 核心机制/Boss / 5 FAQ / 待定 | 未建站 | new |
| Hela of Mice and Magic | hela | 49 | 2026-10-25 | google_suggest:55（裸词 19、后缀:release date 11、品牌+game 7） | 5 FAQ / 待定 | 未建站 | new |
| Tears of Metal | tearsofmetal | 164 | 2026-10-25 | google_suggest:195（后缀:characters 15、裸词 15、品牌+game 15） | 1 Codes / 2 Beginner / 3 Tier List / 4 核心机制/Boss / 5 FAQ / 待定 | tearsofmetalwiki | new |
| UnderMire | undermire | 2 | 2026-10-25 | google_suggest:2（裸词 1、品牌+game 1） | 待定 | 未建站 | new |
| ANOMALITH | ANOMALITH | 28 | 2026-10-25 | — | — | 未建站 | legacy-meta |
| Draemony | Draemony | 0 | 2026-10-25 | — | — | 未建站 | legacy-meta |
| Chained Beasts | Chained-Beasts | 29 | 2026-10-24 | — | — | 未建站 | legacy-meta |
| Loftia | Loftia | 72 | 2026-10-24 | — | — | 未建站 | legacy-meta |
| Stormforge | Stormforge | 27 | 2026-10-24 | — | — | 未建站 | legacy-meta |
| DREADMOOR | DREADMOOR | 0 | 2026-10-23 | — | — | dreadmoorwiki | legacy-meta |
| Emberville | Emberville | 0 | 2026-10-23 | — | — | 未建站 | legacy-meta |
| Anomaly President | anomaly-president | 0 | 2026-09-03 | — | — | anomalypresidentwiki | legacy-meta |
| BOMBANANA! | BOMBANANA | 50 | 2026-09-01 | — | — | bombananawiki | legacy-meta |
| Crimson Moon | Crimson-Moon | 0 | 2026-08-28 | — | — | crimsonmoonwiki | legacy-meta |
| Bonehold | Bonehold | 0 | 2026-08-25 | — | — | boneholdwiki | legacy-meta |
| Phantom Tower | Phantom-Tower | 0 | 2026-08-25 | — | — | phantomtowerwiki | legacy-meta |
| Shift At Midnight | Shift-At-Midnight | 0 | 2026-08-25 | — | — | shiftatmidnightwiki | legacy-meta |
| Sovereign Tower | Sovereign-Tower | 0 | 2026-08-25 | — | — | sovereigntowerwiki | legacy-meta |
| Low-Budget Repairs | Low-Budget-Repairs | 0 | 2026-08-03 | — | — | lowbudgetrepairswiki | legacy-meta |
| Delverium | Delverium | 0 | 2026-08-02 | — | — | delveriumwiki | legacy-meta |
| Pass the Fear | Pass-the-Fear | 0 | 2026-08-01 | — | — | 未建站 | legacy-meta |
| Ardent Wilds | Ardent-Wilds | 23 | — | — | — | ardentwildswiki | legacy |
| DinoBlade | DinoBlade | 70 | — | — | — | dinobladewiki | legacy |
| DragonSword: Awakening | DragonSword-Awakening | 0 | — | — | — | 未建站 | legacy |
| Dressmaker | Dressmaker | 0 | — | — | — | dressmakerwiki | legacy |
| Dwarf Delve | Dwarf-Delve | 60 | — | — | — | dwarfdelvewiki | legacy |
| Echoes of Aincrad | Echoes of Aincrad | 147 | — | — | — | 未建站 | legacy |
| Echoes of Aincrad | Echoes-of-Aincrad-feedback | 0 | — | — | — | 未建站 | legacy |
| Echoes of Mystralia | Echoes-of-Mystralia | 0 | — | — | — | 未建站 | legacy |
| Expeditions: Samurai | Expeditions-Samurai | 0 | — | — | — | expeditionssamuraiwiki | legacy |
| Fallen Tear: The Ascension | Fallen-Tear | 0 | — | — | — | fallentearwiki | legacy |
| Go-Go Town! | Go-Go-Town | 0 | — | — | — | 未建站 | legacy |
| Grain Rot | Grain-Rot | 0 | — | — | — | grainrotwiki | legacy |
| Graphite | Graphite | 65 | — | — | — | graphitewiki | legacy |
| Lunarium | Lunarium | 63 | — | — | — | lunariumwiki | legacy |
| MineGeon: Renegades | MineGeon-Renegades | 70 | — | — | — | 未建站 | legacy |
| Mistfall Hunter | Mistfall Hunter | 108 | — | — | — | mistfallhunterwiki | legacy |
| Mistfall Hunter | Mistfall-Hunter-feedback | 0 | — | — | — | 未建站 | legacy |
| Moonlight Peaks | Moonlight-Peaks | 0 | — | — | — | moonlightpeakswiki | legacy |
| Nivalis Nights | Nivalis-Nights | 0 | — | — | — | nivalisnightswiki | legacy |
| ReStory: Chill Electronics Repairs | ReStory | 0 | — | — | — | restorywiki | legacy |
| Sephiria | Sephiria-feedback | 0 | — | — | — | 未建站 | legacy |
| Sephiria | Sephiria | 79 | — | — | — | sephiriawiki | legacy |
| Silver Pines | Silver-Pines | 0 | — | — | — | silverpineswiki | legacy |
| Skills & Raids | Skills-and-Raids | 20 | — | — | — | skillsandraidswiki | legacy |
| SpiritVale | SpiritVale-feedback | 0 | — | — | — | 未建站 | legacy |
| SpiritVale | SpiritVale | 113 | — | — | — | spiritvalewiki | legacy |
| Tears of Metal 玩家反馈分析 | Tears-of-Metal-feedback | 0 | — | — | — | 未建站 | legacy |
| The Mound Omen of Cthulhu | The Mound Omen of Cthulhu | 77 | — | — | — | 未建站 | legacy |
| The Mound: Omen of Cthulhu | The-Mound-feedback | 0 | — | — | — | 未建站 | legacy |
| The Mound | The-Mound | 51 | — | — | — | themoundwiki | legacy |
| Welcome to Elderfield | Welcome-to-Elderfield | 0 | — | — | — | 未建站 | legacy |
| Witchspire | Witchspire-feedback | 0 | — | — | — | 未建站 | legacy |
| Witchspire | Witchspire | 97 | — | — | — | witchspirewiki | legacy |
| — | lowbudgetrepairswiki-postlaunch-fix | 0 | — | — | — | 未建站 | legacy |
| Neon Abyss 2 | neonabyss2-matrix | 0 | — | — | — | 未建站 | legacy |
| Neon Abyss 2 | neonabyss2-sources | 0 | — | — | — | 未建站 | legacy |
| 新词缺口扫描 | new-keywords-2026-10-23 | 0 | — | — | — | 未建站 | legacy |
| 候选分析 | selection-2026-10-26 | 0 | — | — | — | 未建站 | legacy |
| Silver Pines / Dressmaker | silverpines-dressmaker-postlaunch-fix | 0 | — | — | — | 未建站 | legacy |
| SILVER PINES 建站记录 | silverpineswiki-build-9-16 | 0 | — | — | — | 未建站 | legacy |
| The Relic: First Guardian | the-relic-first-guardian | 0 | — | — | — | 未建站 | legacy |
| Vahrin's Call | vahrins-call | 0 | — | — | — | vahrinscallwiki | legacy |
| Welcome to Elderfield | welcomeelderfield-postlaunch-fix | 0 | — | — | — | 未建站 | legacy |

## 待处理

**软问题**（旧格式，逐步随复采替换，不阻塞）：43 份

- 无采集元信息头（无法自动统计）：Ardent-Wilds.md
- 无采集元信息头（无法自动统计）：DinoBlade.md
- 无采集元信息头（无法自动统计）：DragonSword-Awakening.md
- 无采集元信息头（无法自动统计）：Dressmaker.md
- 无采集元信息头（无法自动统计）：Dwarf-Delve.md
- 无采集元信息头（无法自动统计）：Echoes of Aincrad.md
- 无采集元信息头（无法自动统计）：Echoes-of-Aincrad-feedback.md
- 无采集元信息头（无法自动统计）：Echoes-of-Mystralia.md
- 无采集元信息头（无法自动统计）：Expeditions-Samurai.md
- 无采集元信息头（无法自动统计）：Fallen-Tear.md
- 无采集元信息头（无法自动统计）：Go-Go-Town.md
- 无采集元信息头（无法自动统计）：Grain-Rot.md
- 无采集元信息头（无法自动统计）：Graphite.md
- 无采集元信息头（无法自动统计）：Lunarium.md
- 无采集元信息头（无法自动统计）：MineGeon-Renegades.md
- 无采集元信息头（无法自动统计）：Mistfall Hunter.md
- 无采集元信息头（无法自动统计）：Mistfall-Hunter-feedback.md
- 无采集元信息头（无法自动统计）：Moonlight-Peaks.md
- 无采集元信息头（无法自动统计）：Nivalis-Nights.md
- 无采集元信息头（无法自动统计）：ReStory.md
- … 其余 23 份
