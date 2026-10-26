# themoundwiki 每日扩充记录 — 2026-10-26

> 结论：**新页 SKIP**（无满足红线的选题）；同日交付 **P0 校准**：`content/guides/updates-patch-notes.md` 补 Patch 1.06。

## 1. 工具与可达性（采集面）

| 源 | 方式 | 结果 |
|---|---|---|
| Steam 官方公告（app 2569760） | `api.steampowered.com/ISteamNews/GetNewsForApp/v2` | ✅ 40 条全文（含 1.04 / 1.05 / 1.06 正文） |
| Steam 商店页 / 社区讨论区 | `store.steampowered.com` / `steamcommunity.com` | ❌ 本机网络不可达（TLS 超时 / ECONNREFUSED），与 9 月各轮一致 |
| Steam 评测 API | `store.steampowered.com/appreviews` | ❌ 同域不可达；本轮无法拉新评测语料 |
| Reddit | `www.reddit.com` 403；`eddrit.com` 被 Anubis 机器人校验拦截 | ❌ 无法直读 |
| 搜索引擎 | WebSearch（服务端） | ✅ 可作索引，但命中多为攻略站与官方转载 |
| 二手编辑源 | addictinggames 1.04 报道 | ❌ HTTP 403（与 9/16 fact-sweep 记录一致），不可作为来源 |

> 因此本轮「真实玩家声音」只能取到搜索索引摘要，无逐条可点的玩家原帖 → 不满足「≥3 条独立玩家来源」的引用要求。

## 2. 官方更新基线（本轮核对）

| 版本 | 日期 | 内容 |
|---|---|---|
| **1.06** | 2026-10-05 | 内存优化；修「Ghost inventory 里的蘑菇消失」；官方致谢社区报告 |
| 1.05 | 2026-09-09 | 语音重做；TSR/XeSS 配置修复；Mound 关卡 orb 伤害修复 |
| 1.04 | 2026-08-31 | 3 个新敌人（森林深处）、散落大陆的隐藏珠宝盒 → 解锁新 Occult Item「The Rosary」；Command Wheel 2.0；自动大厅码 + 可选加密密码；近战调整 |

站内 `updates-patch-notes.md` 此前止于 1.05、"Last checked 9/11" → **1.06 缺失**，本轮已校准（见第 5 节）。

## 3. 路径① 抱怨驱动 — 主题映射（逐条否决）

| 抱怨主题 | 现网来源形态 | 站内现有页 | 判定 |
|---|---|---|---|
| 性能/卡顿（1.06 内存优化前后） | 评测摘要、媒体综述 | `performance-fps-fix-guide`（含 TSR/XeSS、1.05 修复） | 已覆盖 |
| 物品格错乱 / 背包不可整理 / 隐形物品占格 | 评测摘要、1.06 致谢原文 | `inventory-management-guide`（含 slot mismatch、wagon 共享、未修清单） | 已覆盖 |
| 语音聊天机器人音/失效 | 1.05 官方原文 + 评测 | `voice-chat-fix-guide` + `multiplayer-connection-fix-guide` 时间线 | 已覆盖 |
| 牛车不跟随 / 叫车 | 评测 + 1.04 官方 | `ox-cart-guide`（Command Wheel 2.0 逐字引官方） | 已覆盖 |
| 倒地→腐化、救援 | 评测 | `coop-strategy-guide`（Downed/Corrupted 表）+ `ox-cart-guide` 复活 | 已覆盖 |
| 1.04 三个新敌人太凶 | 1.05 官方一句「new creatures… causing you trouble」 | `enemy-bestiary`（但三名新敌人**官方从未给名**） | 无法写（无名、无机制、无独立玩家描述） |
| 珠宝盒找不到 / Rosary 怎么解锁 | 仅 1.04 官方一行 + 403 的编辑稿 | 无专页（crafting/legendary/perks/money 各一行带过） | **素材不足**，见第 4 节 |

## 4. 路径② 系统清单 × 站内覆盖 — 空白扫描

对 40 条官方公告做名词扫描（orb / lantern / torch / whisper / shrine / curse / pearl / Tsath / jewel / Rosary / Ghost / Medallion / Mask / Crucifix / anvil / Saints / idol / relic / blessing / doppelganger / treasure shrine / rowboat / portal / Migo / stamina / mushroom…），逐一对 43 个站内 slug：

- **已整块覆盖**：Medallion / Mask / Crucifix / occult shop（money-guide、weapons-guide）、Anvil（weapons/progression/money）、Saints 与 blessing（patron-saints）、Command Wheel 2.0（ox-cart）、block（controls/combat/loadout）、bot 手势（solo）、portal 任务（daily-challenges/walkthrough）、Ghost Bat 等虚构名已被 bestiary 明确否定。
- **唯一实质空白：珠宝盒 / The Rosary / Tsath pearls**
  - 官方口径只有一句：「New hidden jewel boxes scattered across the mainland. Find them all using the map to unlock a new Occult Item from the shop!」+「New Occult Item: The Rosary」。
  - **数量、坐标、刷新规则、Rosary 具体效果、Tsath pearl 与 Rosary 的关系，全部无官方或可核验玩家来源**；唯一外部细节来自 403 的 addictinggames（「digging」「wilted vulture」），按站内既有准则（9/16 fact-sweep 第 281 行）不可采信。
  - 写 800 词必然有 60%+ 是「我们不知道」，触犯「不为凑字数硬写」红线 → **SKIP**。
- **次要空白：Ghost inventory（1.06 一行）**、**3 名新敌人（无名）** —— 同上，素材不足以成页。

## 5. 本轮实际交付：P0 校准（单文件）

`content/guides/updates-patch-notes.md`：

1. 新增 `### Version 1.06 — Optimizations & Hot Fixes`（2026-10-05），逐字锚定官方三句（内存优化 / Ghost inventory 蘑菇 / 社区致谢），并注明本版未动武器·敌人·契约·经济数值。
2. 归档表加 1.06 行；`updated` → 2026-10-26；`Last checked` → 2026-10-26；`Sources checked` 补 1.06。
3. 补 `sources`（3 条 Official：1.06 / 1.05 / 1.04，均带 gid 链接与原文摘录），修掉该页长期缺 sources 的问题。
4. 正文 1,776 词 > 1,600（lint WARN）。依 `docs/每日内容扩充计划.md` 第五节「校准类改动不受 1500 词上限约束」保留，**未删任何已核实事实**。

## 6. 交接 / 后续触发条件

- **P0（未处理，需主 Agent 决策）**：站内 **61 处**「39 official announcements」类表述已陈旧（官方公告现为 **40** 条，含 1.06）。属跨 15 个文件的批量改写，按「批量改派子 Agent」规则本轮不动。
- **新页触发条件（任一成立即可写）**：
  1. 官方公布珠宝盒数量/位置或 Rosary 具体效果；
  2. 1.04 三名新敌人得名，且出现 ≥3 条独立玩家来源描述；
  3. 社区讨论区/评测可直读（网络恢复），能有 ≥3 条可点玩家原帖。
- 未改 `.agent/expand-daily.json`、`build-history.json`、`qa-report.md`、`STATS-游戏站点统计.md`；未 git add/commit/push；未触碰其他站点。
