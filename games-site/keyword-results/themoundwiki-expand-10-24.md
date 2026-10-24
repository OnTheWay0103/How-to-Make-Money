# The Mound: Omen of Cthulhu — 每日扩充报告

> 任务编号: EXPAND-2026-10-24-THEMOUND
> 日期: 2026-10-24 08:30 CST
> 站点: `themoundwiki/`（42 篇 → 43 篇）
> 结论: **PRODUCED** — 新增 1 篇 `tulu-cylinders-unlock-the-mound`

---

## 1. 采集通道状态（如实）

| 通道 | 端点 | 状态 | 覆盖 |
|------|------|------|------|
| Steam 官方公告 | `api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2569760&count=30&maxlength=0` | ✅ 首次 HTTP 200 | 30 篇（含 1.01–1.06 全文）；最新 **Patch 1.06 / 2026-10-05** |
| Steam 评测 API | `store.steampowered.com/appreviews/2569760?json=1` | ❌ 全部尝试返回 **302 → store 首页**；后续直连超时 | 0 条；本报告不使用任何 Steam 评测引用 |
| Steam 讨论区 | `steamcommunity.com/app/2569760/discussions` | ❌ TCP 连接超时（DNS 投毒到 192.133.77.133 等） | 不可读 |
| Reddit 实时页 | `reddit.com/r/TheMoundOmenofCthulhu/...json` | ❌ 403；RSS 首次 200 后 429 | 未用实时页 |
| Reddit 存档 API | `api.pullpush.io/reddit/search/{submission,comment}` | ✅ HTTP 200 | 100 条 submissions + 约 180 条相关 comments（tulu/cylinder/artifact/statue/mound/blood moon） |
| 编辑来源 | NoobFeed / Nerdschalk | ✅ HTTP 200 | 2 篇全文 |

**诚实说明**：本轮 Steam 评测接口被重定向，无法取得评测原文。主题证据改由 **Reddit 玩家原帖（多帖）+ 2 个独立编辑来源 + 官方公告（作为版本/系统基准）** 三方交叉，满足 ≥3 独立来源。未把「Steam 评测不可达」当成「无数据」，也未用聚合站转述冒充一手玩家原话。

---

## 2. 选题依据（两条路径都跑）

### 路径 ① complaint-driven（最终采用）

**反复出现的问题**：玩家到达 Mound、交回 logbook 后，**拿不到 Tulu Cylinder 契约**，或拿到契约也**找不到 cylinder**，误以为存档 bug。

| # | 玩家原话摘要 | 来源 | 日期 |
|---|-------------|------|------|
| 1 | 多次尝试不同地图，买地图搜遍全图仍找不到 Tulu cylinder，怀疑 bug，已花数小时 | [r/TheMoundOmenofCthulhu — "Tulu Cylinder"（15 赞 / 12 评论）](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1uzvokc/tulu_cylinder/) | 2026-07-18 |
| 2 | 已拿 3 个 cylinder，之后只刷到 treasure/portal 契约，全地图和 fort 都解锁了仍不出 | [r/TheMoundOmenofCthulhu — "Tulu cylinders"](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1v9ntz5/tulu_cylinders/) | 2026-07-29 |
| 3 | 到达 Mound、交回 logbook 后，又被派 "Find the logbook at the mound"，logbook 不在，且没有任何 cylinder 契约 | [r/TheMoundOmenofCthulhu — "Final missions Glitched??"](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1w1a2kh/final_missions_glitched/) | 2026-08-29 |
| 4 | Near the Mound North/South 连续给 cylinder 契约，但找不到；已拿 3 个 | [r/TheMoundOmenofCthulhu](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1v6qwas/ok_does_any_one_know_the_spawn_locations_for_the/) | 2026-07-26 |
| 5 | Mapuche Village 的 cylinder 找了数小时找不到 | [r/TheMoundOmenofCthulhu](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1v82zi7/tulu_cylinder_contract_in_mapuche_village/) | 2026-07-27 |
| 6 | 法语文档同样卡在「找 Tulu 圆柱」，翻遍地图找不到 | [r/TheMoundOmenofCthulhu — "Cylindre de Tulu"](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1uzb8js/cylindre_de_tulu/) | 2026-07-17 |

**高频判定**：≥6 条独立发帖，横跨 7 月中旬至 8 月底（说明未被 1.01–1.06 任一补丁解决），远超 ≥3 条门槛。

**根因在讨论中被反复定位**（写进正文的可执行部分）：
- 契约栏已满 → 先完成/失败一个（[Aug 2 回复](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1vdstif/how_do_you_play_on_the_mound_map/p1btrfu/)、Jul 23 回复）
- 队伍中有人缺 logbook（host 进度）→ 地图虚线未清（[Jul 29 回复](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1v9ntz5/tulu_cylinders/p0kaohd/)）
- 新区域需先做一次普通任务才刷 logbook 契约
- 纯 RNG 轮换 → 刷低难度任务 / 重开（[Aug 31 回复](https://www.reddit.com/r/TheMoundOmenofCthulhu/comments/1w1a2kh/final_missions_glitched/p6w74xw/)）

**玩家找法**（≥3 独立来源）：声音提示（低频鼓点/轰鸣，越近越快越响）、绿色发光/绿雾、随机刷新但生成后固定；日志里的 "lights in the sky" 被多名玩家证实**不可用**。

### 路径 ② system-inventory-driven

| 官方明说的系统 | 来源 | 站内覆盖 |
|----------------|------|:--:|
| Logbook 解锁新出发点 | Steam 商店页 | ✅ maps-locations-guide / walkthrough |
| 契约（Basic/Advanced/Legendary） | 商店页 + 社区 | ✅ contracts-guide / legendary-hunts |
| Mound 关卡本身 | Patch 1.05（"the orb from the Mound level"） | ✅ walkthrough / ending-guide |
| **进入 Mound 的前置链（5 个 Tulu Cylinder / Mysterious Artifact 契约）** | **官方 0 命中**；玩家 + 编辑来源还原 | ❌ **无任何专文** |

官方没写 cylinder（`Tulu` 在 30 篇公告中 0 命中），但官方明确写了 logbook 是解锁系统、Patch 1.05 明确点名 Mound 关卡；两者之间的**解锁程序**是整块空白。该路径与 ① 指向同一缺口，互相印证。

---

## 3. 查重结论（逐条对比现有 42 篇）

现有 slug 全量：beginner-guide, beginner-loadouts, blood-moon-guide, boss-weakness-drops-chart, characters-classes, combat-survival-guide, contracts-guide, controls-settings-guide, coop-strategy-guide, crafting-recipes, daily-challenges, ending-guide, enemy-bestiary, extraction-guide, faq-content, game-length-guide, inventory-management-guide, isolation-guide, legendary-hunts, loadout-guide, maps-locations-guide, money-guide, motion-sickness-camera-fix-guide, multiplayer-connection-fix-guide, nightmare-mode, ox-cart-guide, patron-saints-guide, performance-fps-fix-guide, perks-guide, price-platforms, progress-save-recovery-guide, progression-system-guide, sanity-guide, solo-guide, stealth-guide, temple-of-yig-dlc-guide, trophy-achievement-guide, updates-patch-notes, voice-chat-fix-guide, walkthrough-guide, weapon-durability-repair-guide, weapons-guide。

| 可能重叠的既有页 | 它写什么 | 本篇写什么 | 判定 |
|------------------|----------|------------|------|
| `walkthrough-guide` | 剧情顺序；Tulu 只作为 "Artifact phase" 一句带过 + 结局评价 | 解锁程序、契约不出的排查、cylinder 定位 | 不重叠（intro 不可互换；搜索意图为 "how to unlock / not showing"） |
| `contracts-guide` | 契约层级、任务类型、奖励、牛车 | 只讲 Mysterious Artifact 这一条链与卡点 | 不重叠 |
| `legendary-hunts` | 澄清没有 Legendary Hunt 系统；提及最终幕 | 不提传奇系统定义，只讲解锁前置 | 不重叠 |
| `maps-locations-guide` | 地点术语、logbook 解锁、导航工具 | 只把 logbook 作为排查条件之一并链接出去 | 不重叠 |
| `blood-moon-guide` | Blood Moon 机制与生存 | 仅标注「拾取触发」为单源 Unconfirmed | 不重叠 |
| `ending-guide` | 最终任务内容、结局、Zamacona | 只写到「进入 Mound 前」并链接出去 | 不重叠 |
| `extraction-guide` | 撤离与森林计时 | 只讲 cylinder 搬回 cart 后撤离 | 不重叠 |
| `temple-of-yig-dlc-guide`（上轮） | 免费 DLC 领取/联机 | 完全不同的解锁链 | 不重叠 |

**结论**：新 slug `tulu-cylinders-unlock-the-mound` 站内唯一；`grep -ril 'tulu cylinder|mysterious artifact|unlock the mound|enter the mound'` 仅命中 walkthrough / blood-moon / ending 三篇的顺带提及，均非同主题专文。

---

## 4. 产出

| 项 | 值 |
|----|----|
| 文件 | `themoundwiki/content/guides/tulu-cylinders-unlock-the-mound.md` |
| slug | `tulu-cylinders-unlock-the-mound` |
| 词数 | **正文 1,332 词**（不含 Sources/Related；含全部正文表格）；全文 1,810 词 |
| frontmatter | title / description / category=Guides / version=1.0 / updated=2026-10-24 / keywords（块状数组）/ related（**块状数组**，6 个全部存在）/ sources（块状数组，11 条，tier ∈ Official/Community/Editorial） |
| related 校验 | walkthrough-guide ✅ maps-locations-guide ✅ contracts-guide ✅ blood-moon-guide ✅ extraction-guide ✅ ending-guide ✅ |
| `lib/guides.ts` | 未改动（目录扫描动态加载） |
| 站内标记 | 全部英文（[Unconfirmed]），无中文标记 |

---

## 5. [Unconfirmed] 清单

| 断言 | 为什么标 Unconfirmed |
|------|---------------------|
| Mound 入口有 **5 座雕像**，每个 cylinder 点亮一座 | 仅 NoobFeed 一家；Reddit 只独立确认「barrier 由这些任务解除」，未提雕像数量 |
| **拾取 cylinder 立即触发 Blood Moon**，装上牛车后结束 | 仅 NoobFeed；Nerdschalk 同主题路线文完全未提；Reddit 无一条 cylinder+blood moon 的直接报告 |
| **牛车不能进入 Mound** | 仅 NoobFeed；无玩家复述 |
| 契约名为 **"The Mound: Explore the Underworld"** | 仅 NoobFeed；Reddit 玩家称 "the Legendary Mound contract"，命名不一致 |
| 联机解锁 **host-tied** | 单条 Steam 评测（历史语料），非本轮直采 |
| 绿色 mist 标记位置 | 仅 NoobFeed；声音 + 绿色发光有多名玩家视频佐证 |

**未写入正文的高风险项**（故意不写）：任何具体坐标、固定 spawn 点、cylinder 数量以外的数值、Blood Moon 秒数、掉落奖励。

---

## 6. 构建结果

```
cd themoundwiki && pnpm install && pnpm build
EXIT=0
✓ Compiled successfully in 125ms
✓ Generating static pages (56/56)
● /guides/tulu-cylinders-unlock-the-mound   (SSG, prerendered)
```

产物级校验：
- `.next/server/app/guides/tulu-cylinders-unlock-the-mound.html` — 74.0K
- `<table>` ×1（Troubleshooting 表）；`<td>-------</td>` **0 处**（表格分隔行渲染正常）
- `sitemap.xml.body` 含新 slug **1 次**
- 构建日志无 Error / Failed

---

## 7. 待人工/下游事项

- [ ] 未 `git add` / `commit` / `push`（按 MUST NOT）
- [ ] 未部署（等 QA PASS 后由主 Agent 统一处理）
- [ ] 未改其他站点
- [ ] 建议 QA 重点核：5 座雕像 / Blood Moon / 牛车限制三处是否已正确标 [Unconfirmed]；related 渲染是否正常
- [ ] P0 线索（只记录不处理）：`combat-survival-guide` 的 Parry/Dodge/Jump 无源断言（见 9/17 报告 P0-③）仍未处理，属既有存量问题，与本轮无关
