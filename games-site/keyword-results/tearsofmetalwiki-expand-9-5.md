# Tears of Metal 每日扩充记录 — 2026-09-05 (EXPAND-019-TEARSOFMETAL)

> 任务: EXPAND-019-TEARSOFMETAL-SPIRITVALE-9/5 | 站点: tearsofmetalwiki（Tears of Metal, Paper Cult, Steam EA）
> 产出: 1 篇新攻略 `low-fps-fix-guide.md` + home-content 加行
> 材料版本: HEAD 工作树 v1（含 9/4 遗留 armor-break-guide，视为已覆盖主题，未改动）

---

## 1. 反馈来源（采集于 2026-09-05，WebSearch + Steam RSS + 独立攻略站）

同一高频问题：**PC 大型会战（horde）场景 FPS 骤降/卡顿，以及长期运行后的卡顿**。

| # | 来源 | 类型 | 链接（一句话） |
|---|------|------|----------------|
| 1 | Paper Cult 官方 Steam 公告（v0.10.57598 等） | Official | 「Act 1 / Act 2 的一般性能与稳定性改动」、默认帧率上限 120→60 与上限设置失效修复、8/9 鼠标卡顿热修复（禁用 EOS overlay）— [steamcommunity allnews](https://steamcommunity.com/app/1913120/allnews/) |
| 2 | 2UpSkill《Tears of Metal Low FPS Fix: Stop Lag and Stutters During Enemy Swarms》 | Community/Editorial | 明确记录「多群敌人合并成大场面时掉帧/卡顿」并给出设置与帧率上限建议 — [2upskill](https://2upskill.com/tears-of-metal-low-fps-fix-how-to-stop-lag-and-stutters-during-enemy-swarms/) |
| 3 | XModHub《Best FPS Settings and Crash on Startup Fix》 | Community/Editorial | 给出 Shadow Quality Epic→Medium 约 +14% FPS、AA/Post-Processing/Motion Blur 数字 — [xmodhub](https://www.xmodhub.com/info/blog/tears-of-metal-best-fps-settings-crash-fix/) |
| 4 | XModHub《Fix Tears of Metal Crashing on PC & Best FPS Settings》 | Community/Editorial | 补充 Volumetric Fog Low、Exclusive Fullscreen、16GB pagefile、EA 内存泄漏缓解 — [xmodhub](https://www.xmodhub.com/info/blog/fix-tears-of-metal-crashing-best-fps-settings/) |
| 5 | XModHub《Tears of Metal High GPU Temp Fix》 | Community/Editorial | 帧率不设上限 → 菜单/刷怪时 GPU 过热，建议驱动级限帧 — [xmodhub](https://www.xmodhub.com/info/blog/tears-of-metal-gpu-overheating-fix/) |
| 6 | GamerScout 评测 | Reviewer | 大场面战斗在较老硬件/四人大厅时对 GPU 负载明显 — [gamerscout.io](https://www.gamerscout.io/games/tears-of-metal-1913120) |
| 7 | Backloggd 玩家动态 | Player | 报告「especially in the late-game」的性能问题（大样本聚合页） — [backloggd](https://backloggd.com/u/boneyjoney/activity/friends/) |
| 8 | Reddit | — | site:reddit.com 多组查询仍 0 结果（该游戏无活跃专属 subreddit，延续 8/29 判断） |

> 说明：Steam 差评/讨论区原文经聚合站与补丁记录交叉验证；站点现有的 crash-launch-fix-guide 亦引用 2UpSkill/XModHub/TheCPUGuide 同类源，来源可信。

---

## 2. 选题：Tears of Metal Low FPS & Stutter Fix（`low-fps-fix-guide.md`）

标题: *Tears of Metal Low FPS & Stutter Fix — PC Performance Settings for Large Battles*

正文词数: ~1,068（不含 frontmatter，含链接文字）→ 满足 800–1500。

### 四条件核对

| 条件 | 判定 | 依据 |
|------|------|------|
| 高频（≥3 独立来源） | ✅ | 官方补丁历史 + 2UpSkill + XModHub×3 + GamerScout + Backloggd 玩家 → ≥5 个独立来源指向同一问题（大场面 FPS/卡顿） |
| 具体 | ✅ | 可写成分步修复：帧率上限 → 阴影/AO/后期/血雾/布娃娃设置表 → Windows/驱动 → 内存/分页 → 更新后校验 |
| 未被覆盖（对照 slug 清单） | ✅ | 30 个现有 slug 逐一核对：crash-launch-fix-guide 明确自述「只管启动崩溃，战斗中卡顿是另一问题」；multiplayer-connection-fix-guide 是网络；steam-deck-guide 是 Deck 专属；无任何 PC 帧率/设置专篇 |
| 不编造 | ✅ | 所有设置项/数值标注 Community/Editorial 来源或 [Unconfirmed]；官方部分引用 Steam 公告原文 |

### 与 armor-break-guide 不重叠的说明

armor-break-guide（破甲机制，9/4 遗留，视为已覆盖）属战斗机制类；本页为 PC 性能/帧率修复，搜索意图与内容完全不同。

---

## 3. 变更清单

- 新增 `tearsofmetalwiki/content/guides/low-fps-fix-guide.md`
- 更新 `tearsofmetalwiki/content/home-content.md`（Quick Navigation 增加一行 Low FPS & Stutter Fix / Fixes）
- 未改动其他站/其他文件；未部署、未 commit

## 4. 遗留建议（供主 Agent / QA 参考）

- ToM home-content「What is Tears of Metal」及 heal/save 页可能早于 8/13 复活机制改动（HP 复活取代金币复活），建议后续校准（本次不涉及）。
