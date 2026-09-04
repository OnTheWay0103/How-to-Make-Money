# SpiritVale 每日扩充记录 — 2026-09-05 (EXPAND-019-SPIRITVALE)

> 任务: EXPAND-019-TEARSOFMETAL-SPIRITVALE-9/5 | 站点: spiritvalewiki（SpiritVale, Baikun Interactive, Steam EA, buy-to-play）
> 结果: **本轮无满足四条件的选题 → 记录 skip**（不写新攻略、不改动该站文件）
> 材料版本: HEAD 工作树 v1（spiritvale 无遗留）

---

## 1. 采集范围（2026-09-05，WebSearch + Steam 官方 RSS + 补丁聚合）

| 渠道 | 结果 | 一句话结论 |
|------|------|-----------|
| Reddit `site:reddit.com SpiritVale` / r/SpiritVale | 0 结果 | 仍无活跃英文 subreddit（延续 8/1、8/28 判断；开发组主社区是 Discord） |
| Steam 讨论区（WebSearch/WebFetch 直连） | 无法索引 / ECONNREFUSED | steamcommunity 对抓取不可达，索引内亦无 9/3 后新串 |
| Steam 官方 RSS（store.steampowered.com/feeds/news/app/3767850） | 有，更新到 8/25 | **0.31.0 "Dark Fortress"（8/25）大更**，但 0.30.14（8/17）后唯一官宣；无 9/3 后条目 |
| MassivelyOP（spiritvale tag） | HTTP 403；搜索页更新停 8/17 | 最近报道 8/17（封禁名单 + 下个大更预告：Dragon Knight / PvP 重做 / 神器+魔法书 / 亚洲服 / 滑板） |
| vgspoilers 补丁页 | 最新 0.30.14（8/17） | 索引未收录 0.31.0 |
| 攻略站生态（2UpSkill / ExitLag / LagoFast / grindnstrat / PowerUpGaming 等） | 仅 7 月-8 月中 | 覆盖服务器/单人/职业/拍卖行——均已被本站覆盖 |
| WebSearch 独立佐证 0.31.0 / Dark Fortress / Dusk* 武器 / Bond Targets | 全 0 结果 | 0.31.0 内容除官方 RSS 外无任何独立来源被索引 |

---

## 2. 采集到的新事实（与 9/3 的差异）

**唯一的新增量：0.31.0 "Dark Fortress"（2026-08-25）官方大更**，该站 40 篇 guide 与 updates-patch-notes 全部早于或未提及该版本（已 grep 全站确认 0.31/Dark Fortress 0 覆盖）。官方公告要点：
- 新地图/新内容：Dark Fortress 地图、一批 "Dusk" 系新武器（Duskbreaker/Duskmire/Duskharvest/Duskveil/Dusktome/Duskedge/Duskscourge/Duskbringer）、Echo 套装、新卡牌（基础职业卡 + Weaver 卡组线 + Master Cards）、Dark Fortress 外观
- 平衡/系统：**Grimoires 现为角色绑定（character bound）**、书籍类武器 +1 **Bond Targets（新词条）**、Oathbound/Spirit Familiar/Chains of Binding/Soulbinders 套加 Bond Target、召唤物受到的溅射伤害 -50%、Wraith 属性移位、移速上限 +100%、boss 装备掉率重平衡
- 技术/修复：Sanctum 地图重做加大、ET 跨实例负载均衡、PVP 竞技场排队重做为跨服、ET 新增 vote kick

（来源：Steam 官方 RSS 公告 [0.31.0] Dark Fortress — store.steampowered.com/feeds/news/app/3767850）

**与 9/3 的差异**：9/3 评估「Grimoires 未确认在当前 EA build 上线」——按 0.31.0 公告，Grimoires 与 Bond Targets 实际已随该版本进游戏（此前判断被部分推翻）；9/3 亦未评估 Dark Fortress 这批内容。故本轮与 9/3 不是简单重复。

---

## 3. 为何仍不满足四条件（skip 原因）

| 条件 | 判定 | 说明 |
|------|------|------|
| 高频（≥3 独立来源，同一玩家问题） | ❌ | 9/3 后索引内**无任何新的玩家反馈源**（Reddit 0、Steam 串不可达、媒体停更 8/17、攻略站停更 8 月中）。0.31.0 仅有**单一官方来源**（Steam RSS），WebSearch 对 Dark Fortress/Dusk 武器/Bond Targets/Grimoires 绑定 全部 0 条独立佐证 |
| 具体 | ⚠️（部分） | Dark Fortress 内容具体，但单源且无实机/社区交叉验证，写成「确认事实」风险高 |
| 未被覆盖 | ✅（Dark Fortress 确为 0 覆盖） | 但该缺口的最佳载体是**站点 updates-patch-notes 的事实校准 / 内容更新页**，而非独立高频问题指南；且本站已有 updates-patch-notes slug，另开新页有内容自噬风险 |
| 不编造 | ⚠️ | 0.31.0 细节仅靠 WebFetch 对 RSS 的转写，无第二来源校验；武器/词条数值若展开写极易滑向编造 |

**红线判断**：按「宁缺毋滥，素材不足时跳过优于硬写」与「MUST NOT 无真实反馈硬写」，本轮 spiritvale 无满足「≥3 独立来源同一高频问题 + 真缺口 + 不编造」的选题 → 记录 skip。

---

## 4. 给主 Agent / QA 的建议（下一轮触发条件）

1. **内容新鲜度风险（P0 事实校准，非新页）**：`spiritvalewiki/content/guides/updates-patch-notes.md` 及多篇 class/endgame 页停留在 8/28 之前版本，未反映 8/25 0.31.0 "Dark Fortress"（Grimoires 角色绑定、Bond Targets 新词条、召唤物溅射 -50%、Dark Fortress 新武器/卡）。建议主 Agent 派发一次 updates-patch-notes 校准。
2. **Dark Fortress 深度指南的写入门槛**：待 ≥2 个独立来源出现（MassivelyOP/thegameswiki 收录、Steam 讨论区可索引、或第三方 Dark Fortress 指南），即可写《SpiritVale 0.31 Dark Fortress — 新地图与新 Dusk 武器/卡牌》类内容页。
3. 若 0.31 后的新 PvP 赛季/ET 改动在社区形成新高频问题（如跨服排队、vote kick），下轮按新反馈优先评估。
