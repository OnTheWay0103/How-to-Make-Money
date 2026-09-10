# SpiritVale 内容扩充记录 — 9/11（EXPAND-9/11-B）

> 模式: expand-feedback | 站点: spiritvalewiki | 游戏: SpiritVale (Baikun Interactive, Steam app 3767850, EA 2026-07-15)
> 角色: 反馈分析师(17/18) + 建站协调员(03/04) expand 模式 + QA 审核员(05/06) quick
> 结果: ⏭️ **SKIP**（新增攻略未命中四条件）+ ✅ **线上 🔴 404 已修复并部署验证**
> 背景: 9/9 破局产出 account-ban-appeal-guide（EXPAND-023）；本轮复检「0.31.0 出现 ≥2 独立非官方来源」触发条件 + 全网新反馈采集。

## 〇、0.31.0 触发复检结论（P0 指定项）

**仍未达标 → 本轮不写 Dark Fortress 深度指南。**

| 渠道 | 9/11 复检结果 |
|------|---------------|
| 官方 Steam 公告索引（经本地化镜像） | 最新条目仍为 **[0.31.0] Dark Fortress（8/25）**；其下依次 0.30.14（8/17）、Fair Play Update（8/14）、0.30.11、0.30.10、0.30.9。**全站无 9 月条目 → 无 0.31.1 / 0.32.x** |
| vgspoilers.com/game/spiritvale | 版本史**仍止于 0.30.14（8/17）**，未收录 0.31.0 |
| MassivelyOP（tag/indie） | 对 SpiritVale 报道仍止于 8/17 执法公告；检索其站内未发现 9 月 SpiritVale 文章 |
| 第三方（media / wiki / 攻略站 / 日文 / Reddit） | 定向检索 "0.31.0 Dark Fortress" 仅返回**官方 Steam 公告**一个来源；Dusk 武器 / Echo 套 / Bond Targets / PvP 跨服队列均仍**单一官方来源** |
| mmorpg-blog.ru（俄，8/18） | 只复述封禁数字与「新内容预计 9 月或 10 月」，**未描述 0.31.0 任何机制** |

→ **触发条件未达**（需 ≥2 独立非官方来源描述实际机制）。判定与 9/5–9/9 一致，不重复 9/5 的过度解读错误：官方 0.31.0 **未确认可游玩 Dark Fortress 新地图**（仅外观/商店 + Sanctum 重建）。另：0.31.0 官方内容 9/6 已完整收录进 `updates-patch-notes`，即使达标也不应重写（自噬）。

## 一、今日反馈采集（2026-09-11 实际执行）

工具与结果：WebSearch（约 12 次定向查询）+ WebFetch；`curl` 对 steamcommunity.com / r.jina.ai 被网络层拒绝；`opencli reddit` 返回 `AUTH_REQUIRED`（`/api/me.json` HTTP 403，Chrome 未登录 Reddit）→ **Reddit 本轮不可用**（延续 9/3 起「无活跃 subreddit」判断，非新结论）。

### 独立来源清单
| # | 来源 | 类型 | 内容要点 | 链接 |
|---|------|------|----------|------|
| 1 | Steam 全部公告索引（含 0.31.0 / 0.30.14 / Fair Play） | Official | 最新仍 0.31.0（8/25）；0.31.0 正文为卡牌/大师卡数值平衡（Iron Will、各职业 Acc 卡、Weaver/Paladin/Berserker/Shinobi/Gunslinger/Priest/Necro 卡、Master Cards） | https://steamcommunity.com/app/3767850/allnews/ |
| 2 | mmorpg-blog.ru（8/18） | Editorial | 封禁 4,992：未授权程序/宏 **3,821 永久**、RMT **1,106 永久**、行为准则 65；「新内容预计 9 月或 10 月」 | https://mmorpg-blog.ru/106944.html |
| 3 | MassivelyOP（8/17 / 8/4 / 7/21） | Editorial | 执法公告与下版预告（高级神器与 Grimoires、PvP 重做、Dragon Knight、亚洲服、滑板外观；**无时间表**）；拍卖行 8/4 恢复 | https://massivelyop.com/2026/08/17/spiritvale-shares-a-ban-list-updates-on-dev-team-size-and-a-list-of-features-for-its-next-update/ |
| 4 | Steam 评测（9 月，多账号） | Community | ① **交易锁**：4 人 group-self-found 互换装备（无金币）被判 RMT → trade lock；ticket 19 天回复 + 6 天解封，随后另两人同样被锁；② 「restricted by just playing the game」；③ 273 小时玩家被 RMT 永久封禁、ticket 秒关且关闭后无法查看；④ 官方市场交易被锁、一周无回复；⑤ 封禁潮后约 90% 可见 bot 消失；⑥ 9/1 评测称 v0.31 已加强 Necromancer，**Weaver 仍需重做** | https://steamcommunity.com/app/3767850/reviews/ |
| 5 | Steam 讨论区 | Community | 「Looking at the reviews」（评测口碑讨论）、「Is this a vibe coded/AI game?」、「Opinion」（PT：指向性技能、隐藏装备外观、俄罗斯区频繁断线、地图过小 + 俄语玩家附和） | https://steamcommunity.com/app/3767850/discussions/ |
| 6 | free-play-online.ru（8/2 长评） | Editorial | **等级不是进度货币**（百级「几十小时可达」，等级的职责只是解锁地图）；真实成长=装备基础值/套装/随机词条重铸/跨职业法术装备/卡片；**45–50 级有墙**；低级图刷特定掉落更高效；塔=无尽组队爬升；5,090 篇评测 51% 好评；拍卖/仓库关停期间「进度不是变慢，是撞墙」 | https://free-play-online.ru/spiritvale-rugayut-za-pustotu-xotya-eyo-endgejm-nachinaetsya-posle-prokachki/ |
| 7 | In Game News（7/25） | Editorial | 开发组（Zero / Python）**临时关闭交易、拍卖行、公会仓库**以修漏洞与基建 | https://ingamenews.com/topic/spiritvale/ |
| 8 | 第三方攻略站集群 | Editorial | gameguidesbox（14 篇：卡片/隐藏 Boss 刷新/法师/剑士弓手/摆摊盈利/精炼/1-60 练级/死灵/性能/交易）、gameplay.tips（12 篇）、lagofast、gameshub、destructoid、gamerhour、gameshorizon、powerupgaming、prodigygamers、ggwtb | https://gameguidesbox.com/spiritvale/ |
| 9 | 官方 Steam 商店页 / tuxDB / srec.ai / MMOHuts | Official / Editorial | Deck 支持口径冲突：商店页称「Fully implemented controller and Steam Deck support」，srec.ai 标 Unknown，MMOHuts 称 Deck 支持属 EA 期计划 | https://www.tuxdb.com/section/steamdeck?deckgame=3767850 |

### 候选选题为何全部不成立（对照站内 41 篇 slug 逐条比对）
| 候选 | 来源数 | 否决理由 |
|------|--------|----------|
| **0.31.0 Dark Fortress 深度指南** | 1（仅官方） | 见「〇」：独立来源未达标；且官方内容已被 updates-patch-notes 收录 → 自噬 |
| **交易锁 / trade lock 申诉指南** | 有效 ≈1 平台 | 这是本轮最接近命中的候选，仍否决：① 证据实质**只有一个平台**（Steam 评测，多语区镜像为同一批文本），无第二个独立平台/媒体描述「账号级交易锁」；② 编 ingamenews/MassivelyOP 描述的是**全服关闭交易**（另一回事）；③ 与 9/9 刚产出的 `account-ban-appeal-guide` 同属执法簇，申诉通道（support ticket）、RMT 误判、避坑清单高度重合 → 触发内容自噬红线。**下次触发条件**：出现第二个独立平台（官方 Discord 公告 / Reddit / 媒体）描述交易锁机制，或官方发布交易限制政策文档 |
| Weaver 重做/弱势 | 1–2 | 9/1 评测 + 三方针织（ggwtb/gameplay.tips）攻略属「教怎么玩」，非「抱怨 Weaver 弱」；<3 独立来源 |
| 「满级后没事做 / 游戏空」 | ≥3 | free-play-online + MassivelyOP（too grindy）+ 9 月评测（farm→买→farm）——但已由 endgame-guide（Heroic/World Boss/Raid/精炼/日常循环/进阶路线）+ gear-progression（档位/Gear Score/逐槽位）+ leveling-guide + daily-quests-guide 覆盖 → 自噬 |
| 摆摊盈利 / 摊位选址 | 3（编辑来源） | gameguidesbox ×2 + PowerUpGaming 覆盖，但属**编辑来源**而非玩家反馈；站内 trading-market-guide（AH 基础/费率/高利品类/时机/跨区/资金阶段/警示/产地）+ crafting-guide §11 + farming-resource-guide 已覆盖摊位与定价 → 自噬风险高，且不符合「反馈驱动」 |
| 隐藏 Boss 刷新计时 / 掉落表 | 2 | gameguidesbox；站内 boss-guide 有 respawn 表、world-boss-chart 有刷新窗口 → 非缺口 |
| Steam Deck 设置指南 | 口径冲突 | 商店页称已完整支持，srec.ai 标 Unknown，MMOHuts 称 EA 期计划 —— 三源互相矛盾，无法在不编造的前提下成篇 |
| Dragon Knight / 高级神器与 Grimoires / PvP 重做 / 亚洲服 | 1（官方预告） | 官方**计划**非实装、无 ETA、无机制 → 只够 P0（且 updates-patch-notes 已如实收录） |
| 等级上限口径矛盾（站内 FAQ 写 Base 99，三方攻略称 100+/125-135 图） | — | **非选题，是事实核验线索**：见「四、遗留」。未动 FAQ（无可靠单一权威来源，改动即编造风险） |

## 二、线上 🔴 404 修复（P0 指定项，已执行）

### 实地验证（改前）
| URL | 线上状态（curl -L） |
|-----|---------------------|
| `https://spiritvalewiki.vercel.app/tier-list`（**顶层路由** `app/tier-list/page.tsx`，武器 Tier List） | **200** ✅ 存在 |
| `https://spiritvalewiki.vercel.app/guides/tier-list`（首页 FEATURED_GUIDES 指向） | **404** ❌ 复现 |
| `https://spiritvalewiki.vercel.app/guides/class-tier-list`（实际文件 `class-tier-list.md`） | **200** ✅ |

补充核验：`/tier-list` 同时存在于 `app/sitemap.ts:32` 与 `components/Header.tsx:9` → **顶层路由正常，Header 无需改动**（未照搬任务假设，实地验证后确认）。

### 修复方案：采用 (a) 改 `app/page.tsx` 的 guide slug，并同步修正卡片文案

原第 8 行：
```
{ title: 'Weapon Tier List — Best Weapons by Class', description: 'Complete SpiritVale weapon rankings …', slug: 'tier-list', category: 'Weapons', updated: '2026-07-12' }
```
改为：
```
{ title: 'Class Tier List — Best Classes & Advanced Jobs', description: 'Community consensus class rankings for SpiritVale Early Access — best picks for farming, bossing, PvP, and solo play.', slug: 'class-tier-list', category: 'Classes', updated: '2026-08-09' }
```

**为何不只改 slug**：只把 `slug` 换成 `class-tier-list`，卡片会继续宣称「Weapon Tier List — Best Weapons by Class」并落到**职业** Tier List 页 → 引入一处**渲染级事实不符**（与本次要修的缺陷同类）。故一并把 title/description/category/updated 对齐目标页 `class-tier-list.md` 的 frontmatter（title/description/updated 全部取该文件真实值）。改动仍是**同一处**（FEATURED_GUIDES 单个数组项）、无新增文件、无内容重复，`/tier-list` 武器页仍由 Header 导航与 sitemap 可达。
为何不选 (b) 新增 `content/guides/tier-list.md`：会与 `class-tier-list.md` 形成两个 Tier List 页 → 内容自噬；且首页真正想要的是武器 Tier List（顶层路由已存在），新增 guide 反而更绕。

### 线上验证（改后，内容级）
```
$ curl -s -L https://spiritvalewiki.vercel.app/ | grep -c '/guides/class-tier-list'   → 2
$ curl -s -L https://spiritvalewiki.vercel.app/ | grep -c '/guides/tier-list'        → 0
/guides/class-tier-list  → 200
/guides/tier-list        → 404   （已无任何页面引用它）
/tier-list               → 200
```
`vercel inspect` 确认生产 alias `https://spiritvalewiki.vercel.app` 指向本次新部署 **dpl_3gxpCGhRjABfL1uzyogxR9vjW7Gg**（created 2026-09-11 05:10，status ● Ready）。
残留扫描：`grep -rn "guides/tier-list" content/ app/ components/ lib/` = **0 命中**；全站 `/guides/*` 内链与 `content/guides/*.md` 集合比对 = **0 BROKEN**。

## 三、交付物
| 文件 | 说明 |
|------|------|
| `spiritvalewiki/app/page.tsx` | 唯一改动：FEATURED_GUIDES 第 2 项修正为 `class-tier-list`（title/description/category/updated 同步对齐） |
| `.agent/qa-expand-spiritvale-9-11.md` | QA quick 报告（PASS） |

未新增 guide、未改 home-content、未改其他站。

## 四、遗留（交主 Agent）
1. **等级上限口径待核**：站内 `faq-content.md` 写「Base Level cap 99」，而多个第三方攻略（gameguidesbox、gameplay.tips、ggwtb）与 free-play-online 以「100 级」为满级、并提及 125–135 级地图。无单一权威来源可裁决 → 本轮未动，建议归入事实核验任务，勿凭三方攻略改站内数字。
2. **交易锁 = 下一个待触发选题**：若出现第二个独立平台来源，可成篇；届时须与 `account-ban-appeal-guide` 明确分工（该篇讲封禁与申诉，新篇只能讲「账号未被封但交易受限」的判定与解锁），否则即为自噬。
3. **0.31.0 长期单源**：`updates-patch-notes` 的 0.31.0 章节至今为「官方单一来源」，措辞已如实声明 developer-published but not community-corroborated；合规审计时保持该口径。

## 五、自检
- 未写任何新 guide（无 >=3 独立来源命中）✅；未编造玩家声音/数值 ✅；未串站 ✅；仅改本站 1 个文件 ✅
- 采集约 12 次 WebSearch + 3 次 WebFetch ≈ 15 次 < 25 次上限 ✅
- 0.31.0 触发复检**仍在 SKIP 侧**，未重复 9/5 过度解读 ✅
