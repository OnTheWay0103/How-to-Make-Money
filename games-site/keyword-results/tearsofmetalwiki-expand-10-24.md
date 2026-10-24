# tearsofmetalwiki 每日扩充报告 — 2026-10-24

> 任务编号：EXPAND-2026-10-24-TEARSOFMETAL
> 材料版本：2026-10-24 08:30 CST
> 站点：`tearsofmetalwiki`（Tears of Metal，Steam appid 1913120）
> 产出：`content/guides/trials-mother-stone-challenges-guide.md`
> 状态：PRODUCED（未部署、未 commit）

---

## 1. 选题依据

### ① complaint-driven（抱怨驱动）

采集面：Steam 评测 20 条（10 条 recent + 10 条 toprated，英文）、Steam 讨论区 20+ 帖（General / Bug Reports / Suggestions）、官方公告 30 篇。

| 玩家问题 | 独立提及数 | 代表证据 | 站内覆盖 | 结论 |
|---|---:|---|---|---|
| Boss 像伤害海绵 / 打太久 / Boss 种类少 | 4 | 4.1h 评测（helpful 68）；96.2h 评测；"Seems just insanely hard?" 帖 | `boss-guide` | 已覆盖，写则自噬 |
| 队友/军队没用 | 2 | 8.2h 低评（helpful 205）；20.8h 低评（helpful 231） | `battalion-companion-guide`、`solo-guide` | 已覆盖 |
| 战斗视觉混乱、看不清预警 | 3 | 20.8h 低评（helpful 231）；Suggestions "Visual Clutter…"；"Map Design, Visual Clutter…" | `visual-clarity-guide` | 已覆盖 |
| 一局太长、不能中途存档 | 2 | 1,133 helpful 顶评；8.2h 低评 | `save-system-guide`、`tears-of-metal-experimental-branch-guide` | 已覆盖 |
| 难度墙 / 第三幕太难 | 4 | "How the hell do I beat this game?"；"Seems just insanely hard?"；"Is this game hard?" | `threat-level-difficulty-guide`、`progression-walkthrough`、`solo-guide` | 已覆盖 |
| Trial 进度不算 / 挑战不给奖励 / 挑战奖励不值 | 6+ | 见下节来源表 S5–S9 | **无专页，仅零星提及** | **缺口** |

结论：高频抱怨已全部收敛到既有页面（与 Profile 所述 spiritvalewiki 情形一致）。抱怨路径唯一未覆盖的落点，正好是 Trials/Challenge 系统本身，且证据密度足够。按 04-Profile 规则切换 ② 并保留该落点。

### ② system-inventory-driven（系统清单 × 站内覆盖）

官方商店页列出的系统：Emblems、Artifacts、Heroes、Soldiers/permanent skills、Settlement/Village shops、Solo/Co-op、45 environments、Challenges。
官方公告额外列出：Trials（9/8 补丁）、Mother Stone challenges（开发者回复）、Challenge Rewards、Cartographer/Market/Emporium（10/21）。

| 官方系统 | 站内是否有专页 | 覆盖情况 |
|---|---|---|
| Emblems / Artifacts | ✅ | `emblem-artifact-guide` |
| Heroes / builds | ✅ | 3 篇 build + `heroes-tier-list` |
| Soldiers / Companions | ✅ | `battalion-companion-guide`、`barracks-statues-guide` |
| Village shops | ✅ | `village-upgrade-guide`、`base-camp-guide` |
| Solo / Co-op | ✅ | `solo-guide`、`co-op-guide` 等 |
| Weapon merge / armor break | ✅ | `weapon-merge-guide`、`armor-break-guide` |
| **Trials / Mother Stone Challenges** | ❌ 无专页 | 全站仅 `barracks-statues-guide` 提到 "trial" 是 Dragonstone Shard 的一个解锁项 |
| **In-run Challenge events** | ❌ 无专页 | `achievements-guide`、`threat-level-difficulty-guide`、`experimental-branch-guide` 仅顺带提及 |

最终选题：**把玩家口中同名的两套系统拆开讲** —— 局外 Trial 难度阶梯（Mother Stone Challenges / Trials of the Mother）+ 局内 Challenge 事件。二者共享词汇与部分奖励池，这正是"挑战到底怎么算/为什么不给奖励"困惑的根因；站内零覆盖，且与既有页面的搜索意图不重叠。

---

## 2. 来源表

| # | 层级 | 来源 | 日期 | URL | 用于 |
|---|---|---|---|---|---|
| S1 | Official | Patch Notes — 2026-09-08 — Big Bug Fixing Pass | 2026-09-08 | https://store.steampowered.com/news/app/1913120/view/1842846814456327 | Trials 存在且按 Hero 解锁 |
| S2 | Official | What We're Working On | 2026-09-18 | https://store.steampowered.com/news/app/1913120/view/1844115010495854 | Challenge 原奖励 = Charms + Threat reduction |
| S3 | Official | The Experimental Branch Update | 2026-10-21 | https://store.steampowered.com/news/app/1913120/view/1847286114029005 | 局内 Challenge 定义、新奖励、Cartographer |
| S4 | Official | Patch Notes — Version 0.8.57278 | 2026-07-24 | https://store.steampowered.com/news/app/1913120/view/1839041357030696 | 具名挑战 "Special Challenge: Infestation" |
| S5 | Community | No progress after Mother Stone Challenge 9?（含 WoofgangPCG 开发者回复） | 2026-10-20 | https://steamcommunity.com/app/1913120/discussions/2/568174939259033776/ | 逐角色 +1、co-op 主机选级、client 规则 |
| S6 | Community | Trials of the Mother need better rewards | 2026-07-25 | https://steamcommunity.com/app/1913120/discussions/4/583929583674345443/ | 奖励/难度体感、+2.5% 单人估算 |
| S7 | Community | middle lv challege flag dont give rewards after quest | 2026-09-23 | https://steamcommunity.com/app/1913120/discussions/2/573801622447315677/ | 挑战旗完成后未给宝箱 |
| S8 | Community | Steam 评测（96.2h，Trial 10） | 2026-10-20 | https://steamcommunity.com/profiles/76561198082312029/recommended/1913120/ | 玩家可达 Trial 10 |
| S9 | Community | Curse/ side mission/challenges | 2025-04-11 | https://steamcommunity.com/app/1913120/discussions/0/644685477979451802/ | 早期命名困惑（已标注 demo 期，仅作旁证） |
| S10 | Editorial | 本页解读与排查顺序 | 2026-10-24 | https://tearsofmetalwiki.vercel.app/guides/trials-mother-stone-challenges-guide | 两系统框架、co-op 排查顺序、停止爬塔建议 |

交叉来源类型：Steam 评测（S8）+ Steam 讨论区（S5–S7、S9）+ 官方公告（S1–S4）= 3 类独立来源。

补充采集说明（诚实记录）：
- `store.steampowered.com/appreviews/…?json=1` 在本机被网络层阻断（直连超时；经公共代理返回 Steam "Welcome to Steam" 页，非 JSON）。改用 `steamcommunity.com/app/1913120/reviews/` HTML，取得 20 条真实评测（recent 10 + toprated 10）。Pagination 对匿名请求无效（p=2..8 均回第 1 页），故未达 100–300 条，但已满足"至少 3 独立来源交叉"。
- Steam 讨论区通过公共代理抓取，逐帖可追溯；`p=` 翻页同样受代理缓存影响。
- Reddit：多组 `site:reddit.com "Tears of Metal"` 查询均无命中（该游戏无活跃且被索引的 subreddit 帖），故未纳入来源，也未编造 Reddit 证据。

---

## 3. 查重结论

新 slug：`trials-mother-stone-challenges-guide`（与现有 37 个 slug 均不同）。

逐条对比（判断标准：intro 是否可互换 + 搜索意图是否独立）：

| 现有 slug | 与新页关系 | 判定 |
|---|---|---|
| achievements-guide | 成就是 Steam 层，Challenge 是游戏内层 | 不重叠 |
| armor-break-guide | 战斗机制 | 不重叠 |
| barracks-statues-guide | 讲 Barracks/Statues；仅把 trial 列为 Shard 解锁项 | 不重叠（新页讲阶梯规则） |
| base-camp-guide | 村庄准备 | 不重叠 |
| battalion-companion-guide | 军队/同伴 | 不重叠 |
| beginner-guide | 新手 | 不重叠 |
| best-builds | Build | 不重叠 |
| boss-guide | Boss 打法 | 不重叠 |
| brienne-build-guide | Build | 不重叠 |
| character-unlock-guide | 角色解锁 | 不重叠 |
| charms-guide | Charm 获取/叠加 | 部分奖励交叉，但页面主题是 Charm 机制，intro 不可互换 |
| co-op-guide | 组队配置/角色分工 | 不重叠（新页只讲挑战进度规则） |
| co-op-revive-guide | 复活 | 不重叠 |
| combat-tips | 战斗基础 | 不重叠 |
| coop-join-failures-guide | 联机失败 | 不重叠 |
| corruption-guide | 腐化 | 不重叠 |
| crash-launch-fix-guide | 崩溃 | 不重叠 |
| elite-enemy-guide | 精英怪 | 不重叠 |
| emblem-artifact-guide | Emblem | 不重叠 |
| equipment-guide | 装备 | 不重叠 |
| healing-guide | 治疗 | 不重叠 |
| heroes-tier-list | 英雄排名 | 不重叠 |
| low-fps-fix-guide | 性能 | 不重叠 |
| multiplayer-connection-fix-guide | 连接 | 不重叠 |
| patch-notes | 补丁总表 | 引用其结论但主题不同 |
| progression-walkthrough | 三幕流程 | 不重叠 |
| ruadh-build-guide | Build | 不重叠 |
| save-system-guide | 存档 | 不重叠 |
| solo-guide | 单人 | 不重叠 |
| steam-deck-guide | Deck | 不重叠 |
| survival-tips | 生存 | 不重叠 |
| tears-of-metal-experimental-branch-guide | 讲分支切换与首版内容，含"Challenges 可奖励…"一句 | 不重叠（该页是分支决策，新页是系统规则） |
| threat-level-difficulty-guide | 讲局内 Threat（清图变难） | 不重叠（新页讲局外 Trial 阶梯，二者不同系统） |
| village-upgrade-guide | 村庄建筑 | 不重叠 |
| visual-clarity-guide | 画面可读性 | 不重叠 |
| wallace-build-guide | Build | 不重叠 |
| weapon-merge-guide | 武器合并 | 不重叠 |

`related` 6 个 slug 全部存在（已用脚本校验）：patch-notes、co-op-guide、achievements-guide、threat-level-difficulty-guide、progression-walkthrough、tears-of-metal-experimental-branch-guide。

---

## 4. 产出指标

- 文件：`games-site/tearsofmetalwiki/content/guides/trials-mother-stone-challenges-guide.md`
- 正文词数：**1456**（800–1500 区间内；脚本按正文 token 统计，不含 frontmatter）
- frontmatter：title / description / category "Mechanics" / version "Early Access" / updated "2026-10-24" / keywords（块状，8 项）/ related（块状，6 项）/ sources（块状，10 项，tier ∈ Official/Community/Editorial）
- 表格：两系统速查表 1 张；正文无内联 related 数组
- 英文站标记：全部英文（`[Official]` / `[Community]` / `[Unconfirmed]` / `[Editorial]`），无中文残留

---

## 5. [Unconfirmed] 清单

1. Trial 阶梯总层数（玩家已到 Trial 10，官方未公布上限）
2. Trial 阶梯的确切解锁条件（社区称通关战役；官方未明示）
3. 各 Trial 的敌人/Boss 血量与奖励倍率（"+2.5%" 为单个玩家估算）
4. 缺失的 Challenge 宝箱是否可补发（官方无任何说明）
5. "Trials of the Mother" 是否为官方名称（官方文本用 Trials / mother stone challenges；该名为社区用法）

以上均已在正文对应位置标注 `[Unconfirmed]` 或 `[Community]`。

---

## 6. 构建结果

```
cd tearsofmetalwiki
pnpm install   # Lockfile up to date, Already up to date (374ms)
pnpm build
  ▲ Next.js 16.3.4 (Turbopack)
  ✓ Compiled successfully in 678ms
  Finished TypeScript in 822ms
  ✓ Generating static pages using 7 workers (51/51)
  ● /guides/trials-mother-stone-challenges-guide
```

- exit 0，`✓ Compiled successfully` 已确认
- 产物验证：`.next/server/app/guides/trials-mother-stone-challenges-guide.html` 存在，含 1 张表、0 处 `-------` 分隔行残留、H1 与正文渲染正常
- sitemap：`trials-mother-stone-challenges-guide` 已进入 `sitemap.xml`
- 未部署、未 commit、未修改其他站点
