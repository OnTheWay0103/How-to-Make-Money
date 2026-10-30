# Deadly Days: Roadtrip — 素材源

> 采集日期: 2026-10-31 | 版本口径: 1.0（2026-10-29 正式发售）
> 规则：每页 ≥2 个独立来源且 ≥1 官方；搜索建议与竞对正文不算事实来源。
> 本机网络：`store.steampowered.com` 直连被阻断（`dig @1.1.1.1` + `curl --resolve` 均超时），
> 商店页事实取分析轮 2026-10-31 一手记录，并用 Steam Web API（官方公告）、GamingOnLinux、
> Gamepressure 三方交叉复核；`api.steampowered.com` 可直连，公告原文已逐条抓取。

## 一、来源清单

| ID | 分级 | 来源 | URL | 抓取日期 | 用于 |
|----|------|------|-----|----------|------|
| S1 | Official | Steam 商店页（Pixelsplit / Sidekick Publishing；2026-10-29 发售；$14.99，10-31 折后 $9.74；694 条英文评测 89%；标签 Inventory Management / Bullet Heaven / Local Co-Op / Zombies / Roguelite） | https://store.steampowered.com/app/3026450/ | 2026-10-31（分析轮一手 + 三方库复核） | 全部页 |
| S2 | Official | Steam 公告《Full Release 1.0 - LOOT & SHOOT!》（Vampire、Laz、1.0 武器清单、咖啡摊、110+ 武器道具） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1847920302234863 | 2026-10-31（API 原文） | 1.0 机制、武器、Boss、角色 |
| S3 | Official | Steam 公告《We're launching into 1.0 on October 29!》（平台：Steam / Xbox Series X\|S / PS5；Couch Co-Op + Steam Remote Play；Weekly Mode；Headquarters Run） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1845383656396574 | 2026-10-31（API 原文） | FAQ、终局、联机 |
| S4 | Official | Steam 公告《Update 0.22 - Bite & Bright》（Couch Co-Op、Steam Remote Play、Coast Biome、Vacationeer、冲浪角色、雷达升级） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1842212951310480 | 2026-10-31（API 原文） | 联机、机制、角色 |
| S5 | Official | Steam 公告《Update 0.21 - Sunscream》（Headquarters Run 终局、Penny the Clown、Mr. Kyde、生态区敌人、Boss 重做） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1834602721199661 | 2026-10-31（API 原文） | Boss、Meta、角色 |
| S6 | Official | Steam 公告《Update 0.20 - Weekly Madness》（Weekly Mode、每周随机角色/计分/4 个修饰器、排行榜） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1830797770237162 | 2026-10-31（API 原文） | Weekly Mode、Meta |
| S7 | Official | Steam 公告《Update 0.19 - BLOOM & BOOM!》（Bushy、角色道具贴纸、Item Banishing、Run History、Luck、Luck Clover、Razor Blade、Lucy、Bandage、Propeller、4 个增量升级） | https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1827626365755019 | 2026-10-31（API 原文） | 背包、Meta、角色 |
| S8 | Independent | GamingOnLinux《…has set an October 29 release date》（类型定义、路线选择、背包网格与相邻协同、合成、Dash、空投） | https://www.gamingonlinux.com/2026/10/the-awesome-deadly-days-roadtrip-has-set-an-october-29-release-date/ | 2026-10-31 | 新手、背包、武器 |
| S9 | Independent | GamingOnLinux《…added local co-op》（本地联机上线报道） | https://www.gamingonlinux.com/2026/09/the-excellent-inventory-management-bullet-heaven-deadly-days-roadtrip-added-local-co-op/ | 2026-10-31 | 联机、FAQ |
| S10 | Community | kosguides《How to Unlock Each Character》（Survivor / Banana Person / Sheriff / Death / Chicken / Astronaut / President 解锁方法；President 密码） | https://kosguides.com/14100-deadly-days-roadtrip-how-to-unlock-each-character/ | 2026-10-31 | 角色解锁 |
| S11 | Independent | Gamepressure 游戏库（Pixelsplit / Sidekick Publishing / 2026-10-29 / EA 2025-09-22；俯瞰视角、巴士、油料、合成、幸存者加入） | https://www.gamepressure.com/games/deadly-days-roadtrip/z56f72 | 2026-10-31 | 事实复核、新手 |

> 官方 = Steam 商店页 / Steam 官方公告（开发者 Pixelsplit 发布）。GamingOnLinux 与 Gamepressure 为独立媒体/数据库。
> kosguides 为社区攻略（亦为竞对薄站），只用于「社区实测的解锁条件」，站内一律标注 Community。

## 二、逐页来源对照

| 页面 | 官方来源 | 独立/社区来源 | 结论强度 |
|------|----------|----------------|----------|
| `beginner-guide` | S1, S3, S4, S8 | S8（独立媒体）, S11（独立库） | 强：玩法循环、联机、油料/路线均有官方+独立 |
| `character-tier-list` | S2, S5, S7 | S10（社区） | 中：角色机制官方可证，强弱排序为编辑判断 |
| `weapon-tier-list` | S1, S2, S8 | S8, S11 | 中：1.0 武器名单官方；排名为编辑判断 |
| `backpack-and-loot-guide` | S1, S5, S7 | S8, S11 | 强：网格背包/相邻协同/合成有官方+独立 |
| `bosses-guide` | S2, S5, S4 | S8 | 中：Laz/Mr. Kyde/HQ CEO 官方可证；具体血量与招式数值未公开 |
| `unlock-all-characters` | S2, S4, S5, S7 | S10（社区） | 中：官方角色的解锁条件官方可证；其余为社区实测 |
| `meta-progression-guide` | S1, S5, S6, S7 | S11 | 强：基地升级/苹果/工作台/Weekly Mode 官方可证 |
| `/faq` | S1, S3 | S10, S8, S9 | 强：发售/价格/平台/联机官方可证；demo 存档继承未确认 |

## 三、写作红线（本作特有）

- 未公布的数值（Boss 血量、武器伤害、掉落概率、通关时长）一律写 `[Unconfirmed]`，不给假数字。
- 角色名只用官方公告出现过的拼写（Bushy / Penny the Clown / Vampire / Laz / Mr. Kyde）；社区名（Banana Person / Sheriff / Chicken / Astronaut / Death）标 Community。
- 不写 "Patch X.X" 版本声明；版本字段写 `1.0`，具体改动只引用官方公告标题。
- 价格写「$14.99 标准价；2026-10-31 折后 $9.74（-35%）」，并注明价格会变。
- 不建 codes 页；President 密码只作社区解锁提示，并明确「不是促销兑换码」。
