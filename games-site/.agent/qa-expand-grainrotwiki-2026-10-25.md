# QA Report — EXPAND-2026-10-25-grainrotwiki

> 模式: quick（仅审查本轮变更）| 岗位: QA 审核员（`docs/agents/05-岗位卡-QA审核员.md` + `docs/agents/06-Profile-QA审核员.md`）
> 站点: `grainrotwiki` | 审核时间: 2026-10-25
> 范围: 新增 1 篇 + 修改 3 篇（仅 `related` 加一行）+ 构建/部署/线上复验
> 结论: **✅ PASS** — 0 🔴 / 0 🟡 阻断项

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `grainrotwiki/content/guides/how-to-repair-weapons-guide.md` | 🆕 新增 | How Do You Repair Weapons in Grain Rot? The Enchantment & Repair Machine and Its Reroll Catch（36 → 37 篇） |
| 2 | `grainrotwiki/content/guides/weapons-tools-guide.md` | ✏️ related | 追加 `how-to-repair-weapons-guide` |
| 3 | `grainrotwiki/content/guides/outpost-upgrade-guide.md` | ✏️ related | 追加 `how-to-repair-weapons-guide` |
| 4 | `grainrotwiki/content/guides/crafting-resources-guide.md` | ✏️ related | 追加 `how-to-repair-weapons-guide` |

未改 `app/`、`components/`、`lib/`、其他任何站点。未执行 `git add/commit/push`。未改 `.agent/expand-daily.json`、`.agent/qa-report.md`、`.agent/delivery-*.json`、`.agent/build-history.json`、`STATS-游戏站点统计.md`、`keyword-results/CANDIDATE-POOL.md`。

---

## 二、反馈采集记录（可复现）

### 2.1 平台与样本量

| 平台 | 路径 | 样本量 | 可读性 |
|------|------|--------|--------|
| Reddit | PullPush archive API（`api.pullpush.io`） | r/GRAINROT 18 篇投稿 + 203 条评论（asc 100 + desc 100 + 关键词 3）+ 定向帖 41 条（1vjibb7 ×7、1vnctlf ×25、1vinr7m ×5、1vpyfyc ×4） | ✅ 可读，含 permalink |
| YouTube | 视频评论区（Innertube `next` continuation） | 5 个视频共 75 条评论，其中与本主题相关 4 条 | ✅ 可读，含作者/时间 |
| Steam 评测 | `store.steampowered.com/appreviews/4450620` | ❌ 302 → 商店首页；`steamcommunity.com` HTML 连接被 reset | ❌ 本轮不可达 |
| Steam 商店页 | `store.steampowered.com/app/4450620/GRAIN_ROT/` | ✅ 可读；87% of 1,122 all reviews / 86% of 190 last-30d | ✅ 仅统计，无引文 |
| 官方公告 | `api.steampowered.com/ISteamNews/GetNewsForApp/v2` appid 4450620 | 28 篇全量，2026-06-02 → 2026-10-23 | ✅ 全文 |

**Steam 网络失败如实记录**：`appreviews` 无论 `json=1`、`cursor=*`、age cookie、Referer 均返回 `HTTP 302 Location: https://store.steampowered.com/`；`steamcommunity.com` 默认 DNS 返回 69.63.176.x / 104.244.43.104 / 108.160.165.141（Facebook / Dropbox / Fastly 段，非 Valve），改用 hackertarget 查得的 Akamai IP `23.222.124.226` 后 TLS/HTTP 均 `Connection reset by peer`。本轮因此**没有引用任何 Steam 评测原文**，社区层全部来自 Reddit + YouTube。未用聚合站替代一手来源。

### 2.2 与本主题直接相关的玩家反馈（≥10 条，2 平台）

| # | 平台 | 玩家 | 日期 | 原话/要点 | 链接 |
|---|------|------|------|-----------|------|
| 1 | Reddit | Azurus_II（帖） | 2026-08-13 | "If repairing without changing enchants is already in the game, well i have no idea how to do it and no one has told me yet." | https://www.reddit.com/r/GRAINROT/comments/1vmxpm1/adding_a_repair_option_to_enchant_machine/ |
| 2 | Reddit | Davik_Colthain | 2026-08-09 | "Have you been to the second floor yet? It costs 100 gold to use, but it repairs valid items to full." | https://www.reddit.com/r/GRAINROT/comments/1vjibb7/how_in_the_world_do_you_repair_your_items/p2m45yc/ |
| 3 | Reddit | Mustytree69 | 2026-08-09 | "Murch also talks about a way to repair items but he says he hasn't gotten it working yet… for right now use that machine" | https://www.reddit.com/r/GRAINROT/comments/1vjibb7/how_in_the_world_do_you_repair_your_items/p2oh7ef/ |
| 4 | Reddit | Azurus_II | 2026-08-09 | 用 glue 修物品："Jut tried, Nope. Doesnt work sadly." | https://www.reddit.com/r/GRAINROT/comments/1vjibb7/how_in_the_world_do_you_repair_your_items/p2pmnfu/ |
| 5 | Reddit | BlueAurus | 2026-08-08 | "Once you have the second floor the device up there will restore durability." | https://www.reddit.com/r/GRAINROT/comments/1vinr7m/how_do_you_get_more_ammo/p2gvbxo/ |
| 6 | Reddit | Davik_Colthain | 2026-08-09 | "When you upgrade it rerolls and reloads/restores durability… it does suck we don't have a way to keep a specific upgrade." | https://www.reddit.com/r/GRAINROT/comments/1vinr7m/how_do_you_get_more_ammo/p2m4na4/ |
| 7 | Reddit | quietstormx1 | 2026-08-08 | "But doesn't it re roll the ability? I got the staple gun with electricity. I just want more ammo lol" / "Not very clear" | https://www.reddit.com/r/GRAINROT/comments/1vinr7m/how_do_you_get_more_ammo/p2h5qh5/ |
| 8 | Reddit | DrippySaurus | 2026-08-13 | "if ur melee weapon breaks u have to fully replace it. Whereas guns can never break and u can repair them to full for just 100 gold each." | https://www.reddit.com/r/GRAINROT/comments/1vnctlf/question_for_solo_players/p3j47sj/ |
| 9 | Reddit | kravmagaa | 2026-08-13 | "we do have a repair station and that's the main use case with the random enchantments being a 'nice bonus'"；"repairing them costs 100 gold which is cheaper than buying a new one" | https://www.reddit.com/r/GRAINROT/comments/1vnctlf/question_for_solo_players/p3iofgn/ |
| 10 | Reddit | Azurus_II | 2026-08-13 | "i wish repairing without enchanting was in the game but its not"；"spend 100 gold to repair" | https://www.reddit.com/r/GRAINROT/comments/1vnctlf/question_for_solo_players/p3inb1x/ |
| 11 | Reddit | SharlowsHouseOfHugs | 2026-08-16 | "You can not [repair the glue bottle]. I keep the empty ones in a crate, on the off chance we get a glue refill station." | https://www.reddit.com/r/GRAINROT/comments/1vpyfyc/can_you_repair_the_glue_bottle/p41gavn/ |
| 12 | Reddit | NonicleNonsense | 2026-08-19 | "would you rather spend 750 on a new sniper or 100 to repair/ enchant the old even if the enchant is worse?" | https://www.reddit.com/r/GRAINROT/comments/1vnctlf/question_for_solo_players/p4o95p6/ |
| 13 | Reddit | ZiggieTheKitty | 2026-08-09 | "You could repair it at the upgrade machine" | https://www.reddit.com/r/GRAINROT/comments/1vjf7p9/scorch_traversal/p2pwpg4/ |
| 14 | YouTube | @MrBlublo | ~2026-08 | "so how do I repair stuff?" | https://www.youtube.com/watch?v=8m07oGiyIUU |
| 15 | YouTube | @misterchatty528 | ~2026-08 | "Can you repair your tools/weapons?" | https://www.youtube.com/watch?v=aRReKt_DOqs |
| 16 | YouTube | @виталий-ж6в | ~2026-08 | 胶水瓶用后不消失、无法升级，看起来应该有补充方式 | https://www.youtube.com/watch?v=8m07oGiyIUU |

去重后独立玩家 **≥12 人**（Reddit 10 作者 + YouTube 3 作者，其中 Azurus_II 多次发言已合并），满足「≥3 条独立来源」。

### 2.3 官方权威事实

| 事实 | 来源 |
|------|------|
| 1.0 内容清单含 "Enchantment & Repair Machine"、"Second Floor of the Outpost"、"Extract with Treasures, Items & Vessels in the Elevator" | 官方公告 *Get Ready for the Wasteland - We're Launching 7th August!*，2026-07-14，Steam news appid 4450620 |
| 该公告仅列名称，无价格/位置/UI/规则说明 | 同上（全文读取） |
| 1.01–1.13 无任何补丁记录 repair 成本、reroll 或可修物品清单 | ISteamNews 28 篇全量检索（repair 仅命中 1.04 的 "unrepaired ceiling modules"；enchant 仅命中 1.0 发布清单） |
| 当前版本 1.1，最新补丁 1.13（2026-09-30） | 官方 Patch 1.13 公告，2026-09-30 |

---

## 三、两条选题路径（都跑）

### ① complaint-driven

| 主题 | 独立提及 | 是否已覆盖 | 判定 |
|------|:--:|------|------|
| 武器/工具怎么修、修理机在哪、多少钱 | ≥12 | ❌ 站内只有「machine 存在、mechanics unverified」一句 | **命中** |
| 修完为什么词条变了 / 能不能只修不洗 | 4（Davik、quietstormx1、Azurus_II、NonicleNonsense） | ❌ 无 | **命中（并入上题）** |
| 胶水瓶能不能修/补 | 3（SharlowsHouseOfHugs、@виталий-ж6в、Azurus_II 的 glue 实验） | ❌ 无 | **命中（并入上题）** |
| 第二艘 vessel 带出的战利品丢失 | 1（@BackiNator123） | ⚠️ extraction-guide 未覆盖该细节 | 样本不足，未选 |
| 敌人 respawn 间隔 | 2（@novy1198、Mozzy4Ever） | ⚠️ 部分覆盖 | 样本不足，未选 |
| 没有 matchmaking / 怎么找队 | 3（@necrotic777、@user-ny2pk1gx7i、@kimmymaro2527） | ✅ multiplayer-matchmaking-guide 已覆盖 | 排除 |

### ② system-inventory-driven

| 官方系统 | 站内覆盖 | 判定 |
|---------|---------|------|
| Enchantment & Repair Machine | 仅 4 处「已确认存在/mechanics unverified」；无专门页 | **空白** |
| Second Floor of the Outpost | third-floor-locked / outpost-upgrade 有楼层页，但无机器操作 | 部分 |
| Extract with Treasures, Items & Vessels in the Elevator | extraction-guide 覆盖撤离，未覆盖多身体物品归属 | 部分（本轮未选） |

两条路径在同一主题收敛 → 选题成立。

---

## 四、查重（逐条对比 36 篇）

| 现有 slug | 覆盖内容 | 与新文重叠判断 |
|-----------|---------|---------------|
| weapons-tools-guide | constructs 概念、评估框架 | 无重叠：该文不写耐久/修理；新文只写维修管线 |
| outpost-upgrade-guide | 升级优先级、建筑 | 部分相关：该文仅一句「machine 是 1.0 新增」；新文是操作与风险 |
| crafting-resources-guide | 资源→gold、Grinder；"Repairing vs. Replacing" 指换 vessel | 术语相近但对象不同：该文是换身体，新文是修装备 |
| survival-tips / best-vessels-guide | vessel 耐久与生存 | 无重叠：vessel 破损 ≠ 武器耐久修理 |
| full-release-guide | 1.0 功能清单 | 引用关系：该文「mechanics unverified」，新文补细节 |
| third-floor-locked-guide | 三楼锁、进度终点 | 仅一句提到 machine 是 1.0 ceiling；无操作内容 |
| legendary-gumball-constructs-guide（10-24） | 传奇 gumball / Vibe Modulator | **明确避开**：不写 gumball、Vibe Modulator、Boss portal |
| patch-notes-guide（1.01–1.13） | 补丁历史 | **明确避开**：不重述补丁条目，只引用「官方未记载修理规则」这一检索结论 |

结论：无同主题覆盖，`related` 5 个 slug 全部真实存在。

---

## 五、编造检测（具名实体逐项）

| 名词/断言 | 类别 | 检索面与结果 | 判定 |
|-----------|------|-------------|------|
| Enchantment & Repair Machine | 系统 | 官方 28 篇公告：1 命中（1.0 清单）；商店页 0；社区 ≥10 | ✅ 真实，官方命名 |
| Second Floor of the Outpost | 地点 | 官方 1 命中（1.0 清单） | ✅ 真实 |
| Murch | NPC | 官方 1 命中（"Murch's Discount"）；站内 3 篇 | ✅ 真实 |
| 100 gold / 次 | 数值 | 官方 0；社区 5 位不同作者、2 个帖子一致 | ⚠️ 社区层，正文已标 **[Unconfirmed]** 并写明非官方价 |
| 修理会 reroll 词条 | 机制 | 官方 0；社区 4 位作者一致 | ⚠️ 社区层，正文标 **[Community]** / **[Unconfirmed]** |
| guns never break | 机制 | 官方 0；社区仅 1 人 | ⚠️ 正文明确「single-player report」+ **[Unconfirmed]** |
| glue bottle 不可修/不可补 | 物品 | 官方 0（"glue" 在 28 篇公告 0 命中）；社区 2 平台 3 条 | ⚠️ 正文标 **[Unconfirmed]**，未写成官方事实 |
| 750 gold sniper | 价格 | 官方 0；仅 1 位玩家作对比 | ✅ 以玩家原话引用，未当价目表 |
| electric staple gun | 武器 | 玩家原话（quietstormx1） | ✅ 引用，未列数值 |
| 28 篇官方公告 / 1.01–1.13 无修理记录 | 检索结论 | ISteamNews appid 4450620 全量 28 篇，2026-06-02→2026-10-23 | ✅ 可复现 |

其他游戏名扫描（22 项 + DREADMOOR / Cozy Game Restoration / Vaulted Sky / NACON / cursed jungle）：**0 命中**。
Hugo shortcode / TODO / FIXME / lorem ipsum：**0 命中**。
正对照：`grep "Grain Rot"` 新页 → 12 命中，证明扫描非空跑。

---

## 六、构建与线上验证

```
cd grainrotwiki && pnpm install   → ok
pnpm build                        → EXIT:0
                                    ✓ Generating static pages (50/50)
                                    ● /guides/how-to-repair-weapons-guide
```

产物级检查（`.next/server/app/guides/how-to-repair-weapons-guide.html`，69.8K）：

- `Enchantment & Repair Machine` ×2、`100 gold` ×7、`rerolls and reloads/restores` ×2、`[Unconfirmed]` ×10（HTML 内）
- 表格垃圾行 `<td>-------</td>` ×0（9/12 回归未复现）
- 3 篇被修改页的产物均含 `how-to-repair-weapons-guide` 链接（各 ×2）

部署与线上（`./deploy-wiki-site.sh grainrotwiki`）：

```
新部署: https://grainrotwiki-mut0rdfh6-zhaoq0103s-projects.vercel.app
✅ 部署完成: https://grainrotwiki.vercel.app/ (HTTP 200)
```

`./scripts/verify-guide-live.sh grainrotwiki how-to-repair-weapons-guide "Enchantment" "100 gold" "rerolls and reloads/restores"`：

```
URL: https://grainrotwiki.vercel.app/guides/how-to-repair-weapons-guide
HTTP: 200  bytes: 71615
  marker [Enchantment] hits=6
  marker [100 gold] hits=7
  marker [rerolls and reloads/restores] hits=2
RESULT: PASS
```

线上内链复验：`/guides/weapons-tools-guide` HTTP 200，`how-to-repair-weapons-guide` 链接 ×2。

---

## 七、[Unconfirmed] 清单（正文 9 处标记，6 组断言）

1. 修理价格 100 gold（5 位玩家一致，但非官方公布）
2. 机器只接受 "valid items" 的白名单范围
3. 修理必然 reroll、无法保留原词条
4. glue bottle 不可修、无 refill station
5. 破损 melee 武器不可修、guns 永不 break
6. 机器是否同时补 ammo；Murch 对话内容（玩家转述 NPC）

所有精确数字（100 gold、750 gold、1.13、28 篇）均注明来源层级；无「免责句覆盖整张数值表」问题。

---

## 八、最终结论

**✅ PASS** — 0 🔴 阻断 / 0 🟡 警告。

残余风险（P2，已在正文诚实标注，不阻断）：

- 修理机制无官方文档，核心细节依赖社区；若后续补丁改变，需按 `patch-notes-guide` 复查。
- Steam 评测原文本轮不可达，社区样本以 Reddit + YouTube 为主；样本量足以支撑「玩家普遍不知道如何修理」这一结论，但不足以量化比例。
- 未部署前未改任何共享文件；部署只动 `grainrotwiki`。
