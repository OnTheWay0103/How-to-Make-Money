# QA 报告 — spiritvalewiki 每日扩充 2026-09-06（updates-patch-notes 0.31.0 校准）

> 审核对象: `spiritvalewiki/content/guides/updates-patch-notes.md`（唯一内容变更；新指南 SKIP）
> 材料版本: HEAD 工作树 v1 | 审核方式: residue 扫描 + 编造/事实回溯 + 一致性

## 1. Residue Scan

| 项目 | 结果 |
|------|------|
| 模板残留（Hugo shortcode `{{< }}` / `>}}`） | ✅ Clean（grep 0 命中） |
| CJK 字符 | ✅ Clean（python 正则 0 命中） |
| Emoji | ✅ Clean |
| 他站站名/域名（witchspire/mistfall/aincrad/themound/tearsofmetal/grainrot/sephiria/anomaly/dwarfdelve/welcomeelderfield/fallentear/crimsonmoon/shiftatmidnight/katana/isolation/crash/matchmaking 等） | ✅ Clean（仅 spiritvale 自身合法提及） |
| 污染串（Brilett / BACK TO EBATORIA / nacon） | ✅ Clean（检索噪音未进入内容） |
| EXPAND-0xx 编号 | ✅ Clean（未写入） |

**结论**: Residue ✅ Clean

## 2. 编造/事实回溯（0.31.0 全部细节 → 官方公告）

校准页新增内容的**每一条**均逐字取自 WebFetch 抓取的官方 Steam 公告全文（store.steampowered.com/feeds/news/app/3767850，[0.31.0] Dark Fortress，8/25/2026，view/693144122046809561），并已在 frontmatter sources 标注 **Official tier + Editorial 单源说明**（明示「截至 2026-09-06 无独立第三方收录，需以游戏内 tooltip 复核」）。抽样核验 ≥5 条核心断言：

| # | 页面断言 | 官方公告对应原文 | 判定 |
|---|---------|----------------|------|
| 1 | Duskbreaker（unique axe）grant Iron Will：每损失 2% HP 减 1% 终伤、上限 30% | "Duskbreaker — unique axe, 2 slots: +1 Str, +3% Atk, +2 Crit per refine; grants Iron Will (1% final damage reduction per 2% lost HP, up to 30%)" | ✅ 一致 |
| 2 | Duskmire 血魔法：50% MP 由 HP 支付，每 1500 HP +1% 魔伤 | "Duskmire — staff … grants Blood Magic (50% of MP cost paid as HP, +1% magic damage per 1500 HP)" | ✅ 一致 |
| 3 | Grimoires 现为角色绑定；修复「Grimoires 可转外观」bug | "Grimoires are now character bound." + bug-fix "Grimoires could be converted into cosmetics (fixed)" | ✅ 一致 |
| 4 | Bond Targets 来源：所有书籍 +1、Oathbound +1、Spirit Familiar/Chains of Binding +1、Soulbinders +2、死灵 Weaver combo +1 | "Bond Targets: all books +1; Oathbound Artifact Set +1; Spirit Familiar / Chains of Binding +1; Soulbinders Armor Set +2." + Necro card combo "+1 Bond Targets" | ✅ 一致 |
| 5 | 召唤物间接溅射伤害 -50%，可同时普攻与施法 | "Summons now take 50% less splash damage when hit indirectly, and can auto-attack and cast at the same time." | ✅ 一致 |
| 6 | Sanctum 重建加大；ET 跨实例负载均衡 + vote kick；PvP 竞技场排队改跨服 | "Sanctum maps were rebuilt to be larger … ET lag was reduced through load balancing across several instances … Vote kick was added to ET … PvP arena queue system was rewritten to function across servers." | ✅ 一致 |
| 7 | Echo Set(Atk/Matk) 全套 +10% Atk/Matk | "Echo Set (Atk) … full set +10% Atk." / "Echo Set (Matk) … full set +10% Matk." | ✅ 一致 |
| 8 | 移速上限 +100%；boss 装备掉率重平衡 | "Movespeed bonus capped at +100% … Boss gear drop rates rebalanced." | ✅ 一致 |

**事实口径修正记录**: 页面**未**声称 0.31.0 新增「可游玩 Dark Fortress 新地图」——官方公告仅出现 Dark Fortress 外观（mask/gear 进商店）+ Sanctum 重建 + Dusk 武器线，页面按官方原文如实呈现，纠正 9/5 记录「Dark Fortress 地图」的过度解读。编造风险点已避开。

## 3. 体量与一致性

| 项目 | 结果 |
|------|------|
| 正文字数（去 frontmatter） | 1562 词（校准既有页；新增 0.31.0 大节为主体。800–1500 词约束针对新指南，本页为「修正过期既有页」不在该限内，且总量对 patch-notes 页合理） |
| related[] 内链 | connection-server-guide / trading-market-guide / echoing-spire-endgame-guide / weapons-guide / class-tier-list → 5 个 slug 全部存在于 content/guides/ → **0 BROKEN** |
| 正文内链 | /guides/weapons-guide、/guides/cards-guide、/guides/echoing-spire-endgame-guide、/guides/connection-server-guide、/guides/class-tier-list、/guides/trading-market-guide、/guides/solo-guide、/faq → 全部存在 → 0 BROKEN |
| updated 字段 | "2026-09-06" ✅ |
| 版本标注 | 0.31.0 内容全部标 Official + 单源 Editorial 提示，未冒充多源证实 |

## 4. 最终结论

**PASS** — Residue Clean、无编造、0.31.0 每条可回溯官方公告并明示单源、内链 0 BROKEN。可部署。
