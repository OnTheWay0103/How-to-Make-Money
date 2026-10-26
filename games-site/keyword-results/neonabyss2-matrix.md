# Neon Abyss 2 — 页面矩阵

> 站点：`neonabyss2wiki`（`https://neonabyss2wiki.vercel.app`）
> 岗位：关键词研究员交付 / 建站协调员核对（`docs/STRATEGY-内容生产.md` §二）
> 词库：`keyword-results/neonabyss2.md`（68 有效词，采集 2026-10-26）
> 素材：`keyword-results/neonabyss2-sources.md`
> 建站依据：`keyword-results/selection-2026-10-26.md` §4.1（16 分观察档，**特批建站样本**，评分口径不动）

## 一、MECE 分类与词量

| 分类 | 词数 | 代表词 |
|---|--:|---|
| A 联机与本地同屏 | 8 | `does neon abyss 2 have local co op`、`neon abyss 2 couch co op`、`neon abyss 2 multiplayer not working` |
| B Boss 与推进 | 8 | `neon abyss 2 all bosses`、`neon abyss 2 bosses in order`、`neon abyss 2 final boss` |
| C Agents / 角色 | 6 | `neon abyss 2 characters`、`neon abyss 2 character unlock`、`neon abyss 2 best character` |
| D 武器与构筑 | 3 | `neon abyss 2 weapon tier list`、`neon abyss 2 character tier list`、`neon abyss 2 gameplay` |
| E 新手与流程 | 3 | `neon abyss 2 tips and tricks`、`neon abyss 2 walkthrough`、`neon abyss 2 guide` |
| F 更新与补丁 | 3 | `neon abyss 2 patch notes`、`neon abyss 2 patch energy`、`neon abyss 2 1.0 release date` |
| G 发售 / 平台 / 价格 | 24 | `neon abyss 2 release date`、`neon abyss 2 ps5`、`neon abyss 2 game pass`、`neon abyss 2 steam deck` |
| H 兑换码 | 1 | `neon abyss 2 cheat codes` |
| I 杂项（单页归并） | 12 | `neon abyss 2 acid token`、`neon abyss 2 wonder room`、`games like neon abyss 2` |

## 二、内页清单

| 页面名（slug） | 目标搜索词 | 搜索意图 / 要回答什么 | 页型 | 优先级 | 素材源（≥2） | 目标词数 |
|---|---|---|---|---|---|---|
| neon-abyss-2-local-co-op | does neon abyss 2 have local co op | 有没有本地同屏 / 沙发合作；没有的话线上 4 人怎么开、报错怎么修 | boss-or-mechanic | P0 | S1 Steam 商店分类（Online Co-op 唯一联机项）；S2 1.0 公告（4 人联机、可分队探房）；S3 10-16 周报（联机修复清单）；S4 聊天功能移除公告；S10 Beta 分支不互通 | 1,400 |
| neon-abyss-2-boss-list | neon abyss 2 all bosses | 已确认 Boss 全表：名称、层级（Titan / Manager / Regular）、解锁与挑战条件、隐藏 Boss | boss-or-mechanic | P0 | S1 Steam 商店页；S2 1.0 公告（Theia、Apollo 修正、渔屋隐藏 Boss）；S4 6-14 更新（Dark Aphrodite 解锁/挑战条件、Michel）；S6 3-05 更新（Aphrodite 上线） | 1,500 |
| neon-abyss-2-beginner-guide | neon abyss 2 tips and tricks | 前 2 小时：跑一局的顺序、Faith 怎么花、Hatchmon 与道具叠加、必开的设置、常见坑 | beginner | P0 | S1 Steam 商店页；S2 1.0 公告（QoL、Wonder Blocks、Smiley Merchant）；S6 3-05 更新（Blackdog Patch 充能机制、Infinite Energy 设置）；S3 10-16 周报（分解 1 秒、教程跳过、安全屋计时暂停） | 1,450 |
| neon-abyss-2-weapon-tier-list | neon abyss 2 weapon tier list | 1.0 版本的构筑优先级：6 个套装效果 + 3 种战斗风格怎么排、武器词缀稀有度怎么用 | tier-list | P0 | S2 1.0 公告（6 个套装重做原文数值）；S6 3-05 更新（词缀系统、稀有度、Tempering）；S1 Steam 商店页（战斗风格与无限道具叠加） | 1,400 |
| neon-abyss-2-1-0-update | neon abyss 2 patch notes | 1.0 加了什么、10-16 周报修了什么、Beta 分支怎么切 | boss-or-mechanic | P0 | S2 1.0 公告（七项重点 + 套装 + QoL + 修复）；S3 10-16 周报；S7 Archenemy Returns DLC 状态；S10 Beta 分支切换方法 | 1,450 |
| neon-abyss-2-codes | neon abyss 2 cheat codes | 有没有兑换码；搜「cheat codes」的人真正想要的是什么（官方内置开关 / Beta 分支 / DLC） | codes | P0 | S1 Steam 商店页（无兑换入口相关项）；S2/S3/S4/S6/S7/S8/S9/S10 全部官方公告（逐条核对无 code）；S6 Infinite Energy 设置；S7 DLC 赠送规则 | 1,250 |
| faq | neon abyss 2 release date | 发售日、价格、平台、人数、Game Pass、Steam Deck、语言、DLC、存档（落在路由页 `app/faq/page.tsx`，非 content 文件） | faq | P0 | S1 Steam 商店页 API（Oct 7, 2026 / $19.99 / 12 语言 / 32 成就 / Windows only）；S2 1.0 公告（10 月 8 日主机同步）；S13 发售日公告 | 1,200 |
| neon-abyss-2-agents | neon abyss 2 characters | Agent 名单、解锁、个人档案、随机选人、10→3 通关成就 | boss-or-mechanic | P1 | S1；S2（随机选人 + 个人档案）；S4（Tino）；S3（成就 10→3）；CapyDB agents 表（2026-10-26 访问失败，待恢复） | 1,400 |
| neon-abyss-2-faith-and-hatchmon | neon abyss 2 faith system | Faith 三用途、Artisanism 重做、Hatchmon 孵化 / 进化 / 招募 | boss-or-mechanic | P1 | S1 Steam 商店页（Faith System 原文）；S2（Artisanism + badges）；S3（Faith 机多人同时使用修复） | 1,400 |
| neon-abyss-2-storm-breach | neon abyss 2 storm breach | 新模式怎么进、和 Classic 的区别、适合谁 | boss-or-mechanic | P1 | S2（Storm Breach 出 beta）；S4（Storm Raid beta 描述）；S9 6.26（Continue Game 模式串台修复） | 1,300 |
| neon-abyss-2-wonder-room | neon abyss 2 wonder room | Wonder Block / Wonder Pocket / 商店概率 | boss-or-mechanic | P2 | S2（Great Wonder Block 进商店与 Athena 房、Wonder Pocket 修复） | 1,200 |
| neon-abyss-2-achievements | neon abyss 2 achievements | 32 个成就里能核实的部分、10→3 改动 | boss-or-mechanic | P2 | S1（成就数 32）；S2（成就全平台上线）；S3（10→3） | 1,200 |
| neon-abyss-2-acid-token | neon abyss 2 acid token | 该词无任何官方来源，**待核实后再建** | faq | P2 | `[Unconfirmed]` — 官方公告与 Steam 商店页均未出现 acid token | — |
| neon-abyss-2-eris | neon abyss 2 eris boss | Eris 是否为 Boss 未核实；暂不建页 | boss-or-mechanic | P2 | `[Unconfirmed]` — 官方公告未出现 Eris | — |

## 三、首批执行（P0，7 个落地页）

1. `neon-abyss-2-local-co-op`
2. `neon-abyss-2-boss-list`
3. `neon-abyss-2-beginner-guide`
4. `neon-abyss-2-weapon-tier-list`
5. `neon-abyss-2-1-0-update`
6. `neon-abyss-2-codes`
7. `app/faq`（FAQ 路由，非 content 文件）

页型覆盖：boss-or-mechanic ×3、beginner ×1、tier-list ×1、codes ×1、faq ×1 —— 5 类各 ≥1。

## 四、P0 覆盖率自查（节点 24）

| P0 词 | 落地页 | 状态 |
|---|---|---|
| does neon abyss 2 have local co op / couch co op / coop local / local co-op / local multiplayer / local coop mod | neon-abyss-2-local-co-op | ✅ |
| neon abyss 2 all bosses / boss list / bosses in order / boss guide / final boss | neon-abyss-2-boss-list | ✅ |
| neon abyss 2 tips and tricks / guide / walkthrough | neon-abyss-2-beginner-guide | ✅ |
| neon abyss 2 weapon tier list | neon-abyss-2-weapon-tier-list | ✅ |
| neon abyss 2 patch notes / patch energy | neon-abyss-2-1-0-update | ✅ |
| neon abyss 2 cheat codes | neon-abyss-2-codes | ✅ |
| neon abyss 2 release date / ps5 / switch / xbox / game pass / steam deck / price history / review / steam charts / console | faq | ✅（未核实项按 `[Unconfirmed]` 处理） |

> 未覆盖词：`neon abyss 2 characters` 系列 6 词进 P1（缺可核验名单，CapyDB 2026-10-26 访问失败）；
> `neon abyss 2 multiplayer not working` 并入 local-co-op 的排错节。

## 五、更新记录

| 日期 | 变更 |
|---|---|
| 2026-10-26 | 首版：68 词入库后建矩阵，P0 7 页 |
