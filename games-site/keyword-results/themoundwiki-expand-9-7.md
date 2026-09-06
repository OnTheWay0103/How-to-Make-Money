# The Mound 内容扩充记录 — 9/7

> 模式: expand-feedback | 站点: themoundwiki | 游戏: The Mound: Omen of Cthulhu (ACE Team / NACON, Steam app 2569760, 2026-07-15)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）
> 结果: ⏭️ **SKIP（无内容变更，无部署）** — 9/5 已全面映射 35 篇覆盖；9/7 采集的近期（8/29–9/6）差评全部仍落入既有指南，无新补丁可锚定新题。

## 一、今日反馈采集（2026-09-07 实际执行）

### Steam 近期英文差评 API（WebFetch appreviews/2569760，filter=recent & negative，25 条，覆盖 2026-08-29 → 09-06）
| # | 日期 | 玩家/内容一句话 | 主题 |
|---|------|------|------|
| 1 | ~09-06 | Nagev（已购）: 「network connections are laggy」，先修 netcode 再加内容 | 联机延迟 |
| 2 | ~09-06 | DashTheDachshundVT（3 票）: 「I cannot join my crossplatform friends」~99% 时间，game-breaking 未修 | 跨平台加入 |
| 3 | ~09-05 | joeandsam75th（2 票）: 「Joining lobbies is a pain」 | 加入房间 |
| 4 | ~09-05 | offlineuse2020: 玩 10h 尚可，但「1.0.4 update broke multiplayer」——好友加入时崩溃、主机服务器不出现 | 1.0.4 联机回归（版本单源，见否决 2） |
| 5 | ~09-03 | Sykophantēs: 内容/价格不满；loadout/cart 库存摩擦；某个「entangled」攻击无法闪避；NPC 复活不一致 | 库存摩擦/战斗 |
| 6 | ~09-02 | Crashed（4 票，退款）: melee「truly awful for a 1.0 game」、anvil 菜单软锁、cart 移动差、无 upscaling 主菜单 4–6 fps | 近战/性能 |
| 7 | ~09-02 | boob_slayer（3 票，退款）: 「the true horror is the framerate and clunky controls」 | 性能 |
| 8 | ~08-29 | Buster（8 票，退款）: melee「enemies barely recoil when hit」、blocking 无意义、proximity 语音一玩家身位外就听不清 | 近战/语音 |
| 9 | ~08-29 | Torgrime（5 票）: 左撇子改键 bug——「Can't unbind pause from p」 | 键位（单源） |
| 10 | 8/29–9/5 多票 | Vertom17 / El Shake / Atomic / rodanmusic / DissonantDani: 无 meta progression、任务重复、单张森林图、不值定价 | 进度/重复 |

### 补丁状态核对（关键事实）
- 官方补丁仍止于 7 月：Patch #1/1.01（首发大更 + 首个 Steam Hotfix）、1.02「Block Ability & Hotfixes」、1.03「Quality of Life Hotfixes」。
  来源：[Steam Community allnews (koreana)](https://steamcommunity.com/app/2569760/allnews/?l=koreana)、[SteamDB patchnotes 24043641](https://steamdb.info/patchnotes/24043641/)、
  [ingamenews First Steam Hotfix](https://ingamenews.com/pc-gaming/the-mound-omen-of-cthulhu-receives-first-steam-hotfix/)、[gamersocialclub First Major Patch](https://gamersocialclub.ca/2026/07/22/the-mound-omen-of-cthulhu-receives-first-major-patch/)。
- **「1.0.4」仅出现在 1 条 9/5 差评中，今日多路搜索（"1.0.4"/"1.04"/September hotfix/SteamDB）均无官方公告佐证**；wiki 内 updates-patch-notes-guide（9/6 校准）也止于 1.03。→ 版本存在性本身不可验证。

### 跨平台加入问题的编辑来源（独立佐证该题「已广为人知且有既定解法」）
[gamerblurb — How to Crossplay & Join Friends](https://gamerblurb.com/articles/the-mound-omen-of-cthulhu-how-to-crossplay-join-friends)、
[tposegaming — Is The Mound Crossplay?](https://tposegaming.com/the-mound-omen-of-cthulhu-crossplay/)、
[lagofast — Play with Friends & Fix Invite Issues](https://www.lagofast.com/en/blog/the-mound-omen-of-cthulhu-play-with-friends-matchmaking/)、
[2UpSkill — Fix Multiplayer Connection Failed Lobby Error](https://2upskill.com/how-to-fix-the-mound-omen-of-cthulhu-multiplayer-connection-failed-lobby-error/) —
四家独立编辑来源给出同一解法：跨平台 invite 失效 → 公开服务器列表 + 密码房 / Server Finder（与 multiplayer-connection-fix-guide Step 3/4 完全同内容）。

---

## 二、候选选题 → 否决记录（对照站内 37 篇覆盖）

| # | 候选（玩家高频） | 独立来源 | 否决原因 | 判定 |
|---|------|------|------|:--:|
| 1 | 跨平台/好友加入失败（Dash/DachshundVT + joeandsam75th + offlineuse2020 ≥3，另有 4 家编辑指南同题） | ≥3 | **缺口不成立**：multiplayer-connection-fix-guide 已有 Step 3「Public Lobby + Server List Refresh (the Crossplay Workaround)」、Step 4「Password Rooms / Server Finder」与 Official Fix Timeline——该题从 7 月首发起持续、解法未变，再写=内容自噬；无「9 月新事实」可增量 | 否决 |
| 2 | 「1.0.4 弄坏联机」回归 | 1 | **不编造**：版本号仅单条差评、无官方公告/补丁记录佐证；写版本化回归=编造风险；即便属实也落入候选 1 的同解法 | 否决 |
| 3 | 近战烂/敌人无受击反馈/block 无意义/无法闪避的 entangled 攻击（Crashed/Buster/Sykophantēs ≥3） | ≥3 | **缺口不成立**：combat-survival-guide（Blocking/Parrying/Dodging + Why Combat Feels Hard）+ weapons-guide 已在 9/5 映射该主题；开发组预告的 block/counter 系统亦已入 updates-patch-notes（1.02 Block Ability） | 否决 |
| 4 | 性能/FPS/主菜单低帧（boob_slayer/Vertom17/Crashed ≥3） | ≥3 | performance-fps-fix-guide 已覆盖 | 否决 |
| 5 | 无 meta 进度/任务重复/单图（≥5 条差评） | ≥5 | progression-system-guide + walkthrough + maps-locations-guide 已覆盖；且为设计/内容量批评，非玩家可操作 How-to | 否决 |
| 6 | 库存/6 格/cart 摩擦（Sykophantēs + 差评散见） | ~2–3 | **缺口不成立**：loadout-guide（Equipment Slots Overview / Weight Budgeting）、beginner-loadouts（Slot and Weight Rules / Six Consumable Slots）、extraction-guide（Ox Cart）、coop-strategy 等 12 篇已散覆盖；独立成篇=自噬 | 否决 |
| 7 | 左撇子无法解绑 P（pause） | 1 | **<3 独立来源** + controls-settings-guide 覆盖改键 | 否决 |
| 8 | 无确认的新补丁（1.0.4+/9 月 hotfix）可锚定新指南 | 0 | 无官方来源，不能据此写 patch-content 指南 | 否决 |

---

## 三、结论

themoundwiki 现有 37 篇，9/5 已把 10 类高频差评主题逐一映射到既有指南/章节；9/6 相机舒适题是 7 月补丁 1.01/1.03 带来的
真新缺口并已产出。今日（9/7）采集的近期差评（8/29–9/6）——跨平台加入、近战、性能、进度、库存——全部仍命中既有覆盖，
且 9/1 后无确认的新官方补丁可产生新主题。无任一候选通过「≥3 独立来源 + 真缺口 + 具体 + 不编造」四条件 → **SKIP**，
宁缺毋滥，零改动。

## 四、给主 Agent 的遗留建议（P0 级线索）
1. **核实 1.0.4 是否存在**：单条 9/5 差评引用「1.0.4 弄坏联机」。若经 Steam 公告人工核实确有 1.0.4 → updates-patch-notes-guide
   需补版本行（其补丁史 9/6 已校准至 1.03），multiplayer-connection-fix-guide 的 Official Fix Timeline 也需同步。
2. **跨平台加入仍高频**：multiplayer-connection-fix-guide 可加「9 月仍报告 invite 失效」时效注记（属既有指南编辑，超出 expand 范围）。
