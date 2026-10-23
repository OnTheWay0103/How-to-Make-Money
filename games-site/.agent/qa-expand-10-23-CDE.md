# QA 报告 — 10/23 新增攻略抽检（C+D+E 批，15 站）

- **审核日期**：2026-10-23
- **审核范围**：15 个站点各 1 篇新增攻略
- **审核角色**：QA 审核员（依据 `docs/agents/05-岗位卡-QA审核员.md`、`06-Profile-QA审核员.md`、`.claude/skills/quality-assurance.md` Phase 2）
- **操作边界**：只读审核。**未修改任何站点内容，未执行 build / deploy**（另有进程在部署）。
- **结论口径**：
  - **PASS** — 未发现 🔴；仅有可延后处理的轻微问题或无问题
  - **有条件 PASS** — 未发现 🔴，但存在 🟡（事实待验证 / 站内互斥 / 需补来源），需在指定期限内收口
  - **FAIL** — 存在 🔴（编造实体、模板残留、构建/部署阻断）

---

## 一、总体结论

| 结论 | 站数 | 站点 |
|------|------|------|
| PASS | 12 | Dinoblade、Mystralia、DragonSword、Dwarf Delve、Lunarium、Taival、Vahrin's Call、Relic、Graphite、Shift at Midnight、Moonlight Peaks、Phantom Tower |
| 有条件 PASS | 3 | Bonehold、Ardent Wilds、Go-Go Town |
| FAIL | 0 | — |

- **🔴 合计：0**
- **🟡 合计：7**（分布于 6 个站）
- **模板残留：0**。15 篇均无其他游戏名、无 `vercel.app` 错域名、无 `PLACEHOLDER/TODO/lorem ipsum`、无中文残留、无 AI 套话模板句。
- **最高风险项**：`gotownwiki/.../photo-mode-guide.md:111` 的「Six players」与本站 co-op 指南的 4 人上限直接冲突，属可直接证伪的事实错误，列为 **P0 必须修复**。

---

## 二、模板残留扫描（全量，非抽样）

扫描命令与范围：对 15 个目标文件逐一 grep。

| 检查项 | 关键词 | 命中 |
|--------|--------|------|
| 跨站游戏名 | SpiritVale / Witchspire / Mistfall / Aincrad / The Mound / Skills & Raids / Sephiria / Tears of Metal / MineGeon / Grain Rot / Delverium / Big Walk / Waterpark Simulator / Nivalis / Iron Nest / ReStory / Low-Budget Repairs / Expeditions / Bombanana / Sovereign Tower / Crimson Moon / Elderfield / Fallen Tear / Anomaly President / Dressmaker / Silver Pines | **0**（exit 1） |
| 中文残留 | `[一-龥]` | **0**（exit 1） |
| 占位符/错域名 | `vercel.app` / `PLACEHOLDER` / `TODO` / `lorem ipsum` / `INSERT THE` / `XXX` | **0**（exit 1） |
| AI 套话 | `In the world of` / `Whether you're a` / `Remember to` / `dive into` / `unleash` / `game-changer` / `embark on` | **0**（exit 1） |

**结论：模板层干净，无扩散性问题。**

> 备注：首轮扫描时 `/tmp/qa_files.txt` 被其他进程覆盖，导致一次扫描对象错误；已改用唯一文件名 `/tmp/qa15-cde-1023.txt` 重新执行，上表为复跑结果。

---

## 三、逐站审核明细

### 1. Dinoblade — `dinobladewiki/content/guides/raptor-and-rematch-mode-guide.md`
**结论：PASS（0 🔴 / 1 🟡）**

- 核心事实核验：Playable Raptor、Rematch Mode 均真实存在；player.gg 收录了逐字一致的三条修复项（"Fixed Load Game UI Not showing if Players Play as Raptor First"、"Fixed Target Lock issue against Swamp Boss and Camera on Playable Raptor"）。文章对「解锁条件」「是否立即可用」均标 `[Unconfirmed]`，诚实标注到位。
- 站内一致性：与 `beginner-guide.md:34`（7/23 上线）、`boss-guide.md`（Boss Rush 在最终 Boss 后）无冲突；Soul Arts / Great Sword / Spinosaurus 用词一致。
- **🟡-1（`:36`）** 问题：把两个不同日期合并成「landed around October 1, 2026」。证据：Raptor 于 9/29 上线，Rematch Mode 于 10/2 上线（isitdoneyet、gamebrief 均如此记录）；文章 `:21` 引用的 Steam 公告日期是 10/1，`:23` 又写 map size optimization 为 10/2。建议：改为「Raptor 9/29 起、Rematch Mode 10/2 起」，或统一写「9 月底至 10 月初」。
- 来源质量：Official ×3 + Community ×2 + Editorial ×1，达标。

### 2. Mystralia — `mystraliawiki/content/guides/basement-dojo-vault-of-memories-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：All You Can Cast 更新（10/8）、Basement Dojo（Azimuth Temple 下方）、Vault of Memories、Echo Fragments / Ancient Lessons、七种 Memories（Alliance of Forces、Full Circle、Walled City、Fully Focused、Way Back、Aim High、Easy Prey）经 Steam Devlog #3 与 GAMERamble / Rogueliker 交叉验证，全部命中。
- 站内一致性：Azimuth Temple、Lotus、Mazarim、Watchers 等既有名词均与本站旧文一致。
- 来源质量：Official + 两家独立社区源，达标。

### 3. DragonSword — `dragonswordwiki/content/guides/save-file-corrupted-fix.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：10/20 官方临时方案（离线模式、关闭 Steam Cloud、`DS\Saved\savegames\` 九位数字目录、ZIP 备份、删除全部 `.bak`、启动后退出、重开云同步）经 17173 转载的官方公告逐步比对，**逐字一致**。1.1.0 / 1.1.1 细节（Ryza 20 周年角色、Adventure Quest 53、暴击重做、Hell 难度、Roderic Palace 附近 Training Ground、8 个地图标记、第三个食物槽、tag-combo 动画开关）经 Techtroduce 验证。
- 站内一致性：无版本号或机制名冲突。
- 来源质量：Official 公告 + 独立媒体，达标。风险最低的一篇。

### 4. Dwarf Delve — `dwarfdelvewiki/content/guides/material-exchange-money-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：QoL Hotfix 1（7/31）修复矿石零利润、Material Exchange 负库存、宝箱 UI、lockpicks ×5 与小幅涨价；Vitality Hotfix（7/28）。经 Steam Community / UpdateMonitor 逐条核对，全部命中。
- 站内一致性：与本站 1,000 Gild、Gild-vs-coin 待确认、Battlemallet 相关表述一致。
- 来源质量：达标。

### 5. Lunarium — `lunariumwiki/content/guides/steam-achievements-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：35 个成就、Stellar Lector 作为压轴成就、Boss/剧情清单、收集类成就、双结局、从最近 bench 续玩，经 GameCast.it 与 Steam 统计数据验证。
- 站内一致性：与 `endings-guide.md`（双结局）、`equipment-guide.md:60`（Cyanstone embroidery blueprint）一致。
- 备注：官方 Mushroom Meister 文案用 "Luna"，站点用 "Lune"，属可接受的本地化差异，不计问题。
- 来源质量：达标。

### 6. Taival — `taivalwiki/content/guides/night-encounters-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：9/15 更新、Light Keys、必得附魔物品、21 种附魔、Explosive/Electric/Wind 变体、Tornado Talisman，经 Steam news + RPG Jeuxvidéo 验证。
- 站内一致性：与既有 golden/purple 稀有变体系统属不同层，无冲突。
- 来源质量：达标。

### 7. Vahrin's Call — `vahrinscallwiki/content/guides/bounty-hunts-guide.md`
**结论：PASS（0 🔴 / 1 🟡）**

- 核心事实核验：South Vale Hamlet 悬赏板、Jimet Korb 的 Forest Edge 小屋、全清后再对话触发 Hunt: Charagoth + Old City Key、Old City North → 西北，均由 Steam Community 讨论帖验证。
- 站内一致性：与探索/战斗/潜行三篇的机制描述（移动中布置陷阱、无潜行提示、手动装备近战武器）一致。
- **🟡-2（`:82`、`:151`）** 问题：文章写「one commenter reports Chapter 8 instead」，但检索到的社区说法是 **Chapter 7**。证据：Steam 讨论帖与攻略站均出现 Chapter 7 版本；文章已整体标 `[Unconfirmed]`，故不构成编造。建议：把 Chapter 8 改为 Chapter 7，或直接删掉这句次要说法，只保留 Chapter 5 + `[Unconfirmed]`。
- 来源质量：达标。

### 8. Relic: First Guardian — `relicfirstguardianwiki/content/guides/night-of-the-unextinguished-flame-dlc-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：DLC 地牢 Sanctuary of the Forgotten Light、Sealstone of the Undying Ember、Armor/Weapon 套装、1,700+ Gold、1,500+ Relic Energy、营地 "The Gap Of A Long-standing Oath"、Patch 4（8/4）宝珠修复，经 Steam app 4891540、Perp Games 与 Steam Patch 4 公告验证。
- 站内一致性：与本站 editions-preorder 指南、70+ relic fragments 表述一致。
- 来源质量：达标。

### 9. Graphite — `graphitewiki/content/guides/party-building-and-bonds-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：七名英雄、Demo 可玩四人、四幕 × 15 天、bond/campfire、tarot 事件随队伍变化、Knight/Mage 已确认协同；最大队伍人数标 `[Unconfirmed]`。经 Steam 商店页与 GamerScout 验证。
- 站内一致性：与 `heroes-guide`、`faq` 一致。
- 来源质量：达标。

### 10. Shift at Midnight — `shiftatmidnightwiki/content/guides/chainsaw-guide.md`
**结论：PASS（0 🔴 / 1 🟡）**

- 核心事实核验：Chainsaw 于 9/1 加入（Build 25057748），店内电脑 → Weapons Arsenal 购买；无弹药；对漂浮 Marionette 效果差；为 LOCKED AND LOADED 必需。经 Steam 公告与 shiftatmidnight.wiki 验证。价格、键位、伤害值均标 `[Unconfirmed]`（`:62`、`:90`、`:168`）。
- 站内一致性冲突见下。
- **🟡-3（新版 `:113`、`:118-121` vs 旧文 `weapons-guide.md:45-47`）** 问题：新文把 Brick / Baseball Bat / Sledgehammer 列为可收集近战武器，而旧文明确写「社区尚未确认近战武器层级、伤害或价格，把近战说法视为未验证」。证据：新文 `:121` 已把完整清单标 `[Unconfirmed]`，但两篇读者会得到相反结论。建议：更新 `weapons-guide.md` 的「Melee Weapons — Unconfirmed」小节，改为「Chainsaw 已由官方确认；Brick/Bat/Sledgehammer 为社区记录、清单待确认」。
- 来源质量：Official + 社区 wiki，达标。

### 11. Moonlight Peaks — `moonlightpeakswiki/content/guides/museum-guide.md`
**结论：PASS（0 🔴 / 0 🟡）**

- 核心事实核验：五个展厅、210 件展品（Supernatural 34 = 5+7+7+7+8、Deity 4、Farming 55、Aquarium 22、Critter 95）、Jada Henderson 任务链、捐赠规则、5%–100% 奖励阶梯、Patch 1.2.3（8/20），经 GamesHedge / Moonlight Peaks Wiki / PocketTactics 三家交叉验证，数字全部吻合。奖励阶梯逐项命中。
- 站内一致性：无冲突；2-star 作物规则与种田指南一致。
- 🟢 建议（不计 🟡）：`:46` 把 "A New Beginning / Museum in the Making / Curating the Museum" 标为 `[Unconfirmed]`，但这三个任务名在社区指南中已有记录，属**过度保守**。可保留，也可升格为 Community 来源。
- 来源质量：Official + 三家独立社区源，优秀。

### 12. Bonehold — `boneholdwiki/content/guides/boss-rewards-guide.md`
**结论：有条件 PASS（0 🔴 / 1 🟡）**

- **Bonehold 10 职业 vs 站内 7 职业问题（重点核查项）**：**本篇未提及职业数量，因此没有引入新的 7-vs-10 矛盾**。站内现状：`review-guide.md:76` 认为 10 职业说法已过时/错误，`classes-guide.md:2-3` 与 `beginner-guide.md:26` 写 7 职业（4 个具名）。新文与三者均不冲突。**该历史矛盾仍存在于站内，但不属本次新增文章的责任范围**，建议另开单治理。
- 核心事实核验：`sources` 引用的两条 Steam 公告（Patch 1.0.1 / 1.0.2）**无法打开正文**，WebSearch 也未检索到 1.0.1「三选一」、1.0.2「法术随层数缩放」等具体条款。Steam 商店页可确认游戏存在、98 个成就。
- **🟡-4（`:21`、`:23`，正文 `:40-47`）** 问题：文章把「floor bosses drop 3 and pick one」「Arena/Mini-boss ≥ Epic」「Trap rooms Legendary」「rings scale with floor」「floors 4-10 more XP」「spells scale with floor」「click attack ≥20%」「Reverse Attack Buttons」全部写成已确认事实，但当前**无可复现的公开来源**。按 Profile「实体级零命中 → 待验证」规则，不能判 🔴，但也不能当已确认。
  - 证据：两条 `store.steampowered.com/news/app/3497800/view/...` 直连返回导航样板；检索「Bonehold 1.0.1 boss drop three items」零命中。
  - 建议：上线后 48h 内人工打开两条公告截图存档；若打不开，把 `:36` 的「The Confirmed Boss Reward Rules」改为「Reported in patch 1.0.1」，并在段首加 `[Unconfirmed]`。**不得删除来源行**（来源行本身是诚实标注）。
- 诚实标注：`:48` 明确声明「不编造物品名/掉率」，做得好。
- 来源质量：2 Official + 1 Community + 1 Editorial，形式达标；Official 可访问性不足是唯一缺陷。

### 13. Phantom Tower — `phantomtowerwiki/content/guides/runes-guide.md`
**结论：PASS（内容 0 🔴 / 1 🟡，问题在旧文）**

- 核心事实核验：**全篇对照 Horien Studio 官方 wiki 逐项验证通过**——Mythic 1 / Legendary 2 / Supreme 3 孔位；鉴定/镶嵌/移除费用 10,000-8,000-4,000、18,000-12,000-5,000、30,000-20,000-8,000；六路径 Valor/Vigor/Wisdom/Resolve/Resilience/Balance 的套装覆盖与祝福清单；Grade 区间（Valor ATK 48-60 / 60-75 / 72-90）；移除销毁符文；符文可替代套装件。这是本批事实密度最高且验证最完整的一篇。
- 站内一致性冲突见下。
- **🟡-5（旧文 `phantomtowerwiki/content/guides/resource-economy-guide.md:87`）** 问题：旧文写「手游版有独立系统（…rune sockets on gear），但手游与 Steam 版是不同产品——不要假设手游系统存在于 Steam 版」。新文已用官方 wiki 证明 **Steam 版本就有符文孔系统**（Patch 0.5.00, 7/13）。证据：官方 wiki `?cat=runes` + Steam Patch 0.5.00 公告。
  - 建议：**修改旧文 `:87`**，删掉「rune sockets」这一举例，改为「手游版有独立系统（如 Necromancer 职业），手游与 Steam 版是不同产品」；新文无需改动。
- 来源质量：3 Official + 1 Community + 1 Editorial，优秀。

### 14. Ardent Wilds — `ardentwildswiki/content/guides/multiplayer-scaling-guide.md`
**结论：有条件 PASS（0 🔴 / 1 🟡）**

- 核心事实核验：游戏存在、支持 6 人 co-op（Steam/LAN）已确认。但**文章的全部核心数值均无法验证**：
  - Patch 0.5.29（8/3）的「boss health +35%（原 +50%）」「Void Apparitions 不再缩放」「Rend 不再减速 Boss」「Pyromancer Staff 不再需要 Mark of Fire」「Mark of Fire 掉率 15%→75%」
  - Patch 0.5.34（8/25）的「开场 Boss void pull 可翻滚躲避」「Krell Ice Mage AoE 10s→3s」
  - 检索结果：公开可索引的最新构建为 **v0.5.9（2026-06-10）**；`0.5.29` / `0.5.34` / `+35%` 在 Steam news、Reddit、攻略站均零命中；Steam news 直连超时。
- **🟡-6（`:21`、`:23`，正文 `:34`、`:44`、`:156`）** 问题：文章的标题、description、首段、FAQ 都把 +35% 当作既定事实，且 `:47` 还把同一句公告用两种措辞重复引用，制造了「两个独立来源」的错觉。
  - 建议：上线后 24h 内必须由人工打开两条公告核实。若核实不了：标题与 description 去掉「+35%」，正文 `:40` 改为「社区报告称… `[Unconfirmed]`」，并把 `:69` 的数学表标注为「基于未核实数值的推算」。
  - **这是本批唯一「整篇论点建立在单一未验证来源上」的文章**，故列 P1。
- 诚实标注：`:97` 对「Boss 伤害是否缩放」标了 `[Unconfirmed]`，值得肯定；但核心数值本身没标。
- 来源质量：形式上有 3 Official，实际只对应 2 条无法打开的链接。

### 15. Go-Go Town — `gotownwiki/content/guides/photo-mode-guide.md`
**结论：有条件 PASS（0 🔴 / 2 🟡）**

- 核心事实核验：Photo Mode 于 hotfix 1.0.26502（9/14）加入、从 Emote Wheel 打开、相机模式/滤镜/时段选择/"Say Cheese!"/co-op 相机无人机，经 Steam news、gogotown.top、Perfectly Nintendo 验证。
- **🟡-7（P0，`:111`）** 问题：**「Six players all entering Photo Mode at once turns the town into a drone convention.」** 与本站 `coop-multiplayer-guide.md` 记载的上限直接冲突：**Steam 最多 4 人，Switch 最多 2 人**。证据：本站既有 co-op 指南 + Steam 商店页多人标签。这是可立即证伪的事实错误，且属于「无来源的精确数字」。
  - 建议：改为「Four players all entering Photo Mode at once…」（或「A full lobby all entering…」以规避平台差异）。**必须修复**，一句话改动，不涉及结构调整。
- **🟡-8（`:36`、`:151`、`:167`）** 问题：Switch / Switch 2 的 **1.0.26511（9/28）** 与「Photo Mode 在该版本可用」仅来自单一社区站 gogotown.top，官方公告未提及。文章已用 "community reporting places" 限定，但仍被 FAQ `:167` 当作排障依据。
  - 建议：保留限定措辞即可，不必改；若能找到官方 patch note 则升级为 Official。
- 站内一致性：除六人句外，Emote Wheel、Creative Mode、Collections 等表述与既有指南一致。
- 来源质量：2 Official + 1 Community + 1 Editorial，达标。

---

## 四、站内一致性专项（跨文件）

| # | 新文 | 旧文 | 冲突内容 | 处置 |
|---|------|------|----------|------|
| 1 | `gotownwiki/.../photo-mode-guide.md:111` | `gotownwiki/.../coop-multiplayer-guide.md` | 六人 vs Steam 4 / Switch 2 | **改新文（P0）** |
| 2 | `phantomtowerwiki/.../runes-guide.md`（全篇） | `phantomtowerwiki/.../resource-economy-guide.md:87` | 旧文称「不要假设手游符文系统存在于 Steam 版」，新文证明 Steam 有符文 | **改旧文（P1）** |
| 3 | `shiftatmidnightwiki/.../chainsaw-guide.md:113,118` | `shiftatmidnightwiki/.../weapons-guide.md:45-47` | 新文列近战武器清单 vs 旧文称近战「未确认」 | **改旧文（P2）** |
| 4 | `boneholdwiki/.../boss-rewards-guide.md` | `review-guide.md:76` / `classes-guide.md:2-3` / `beginner-guide.md:26` | 10 职业 vs 7 职业 | **与本篇无关**（新文未提职业）；历史矛盾另行治理 |

> 其余 11 篇与本站既有文章的版本号、价格、机制名、角色名均一致，未发现新的互斥。

---

## 五、必须修复项（按优先级）

### P0 — 上线后立即修（1 项）
1. **Go-Go Town 六人句**：`gotownwiki/content/guides/photo-mode-guide.md:111` → 改为 4 人 / 「a full lobby」。理由：与本站 co-op 指南和平台事实上限直接冲突，是可直接证伪的错误。

### P1 — 24–48h 内收口（2 项）
2. **Ardent Wilds 核心数值核实**：`ardentwildswiki/content/guides/multiplayer-scaling-guide.md:21,23,34,44,156`。人工打开 0.5.29 / 0.5.34 公告；核实不了则降级为 `[Unconfirmed]` 并从 title/description 移除「+35%」。
3. **Phantom Tower 旧文纠正**：`phantomtowerwiki/content/guides/resource-economy-guide.md:87` 删除「rune sockets」举例。新文正确，旧文过时。

### P2 — 本周内（3 项）
4. **Bonehold 补证**：`boneholdwiki/content/guides/boss-rewards-guide.md:21,23,36-47`，打开 1.0.1 / 1.0.2 公告截图存档；失败则加 `[Unconfirmed]`。
5. **Shift at Midnight 旧文对齐**：`weapons-guide.md:45-47` 更新为「Chainsaw 官方确认；其余近战为社区记录」。
6. **Dinoblade 日期拆分**：`raptor-and-rematch-mode-guide.md:36` 区分 9/29 与 10/2。

### 可选（🟢，不阻断）
7. Vahrin's Call `:82,151` 的 Chapter 8 → Chapter 7 或删除该次要说法。
8. Moonlight Peaks `:46` 的任务名可升格为社区确认，当前标注过度保守。
9. Go-Go Town Switch 1.0.26511 若能找到官方公告则升级来源层级。

---

## 六、逐站结论汇总表

| # | 站点 | 文章 | 结论 | 🔴 | 🟡 | 主要依据 |
|---|------|------|------|----|----|----------|
| 1 | Dinoblade | raptor-and-rematch-mode-guide | PASS | 0 | 1 | Raptor/Rematch 已证实；日期合并 |
| 2 | Mystralia | basement-dojo-vault-of-memories-guide | PASS | 0 | 0 | Steam Devlog #3 全量吻合 |
| 3 | DragonSword | save-file-corrupted-fix | PASS | 0 | 0 | 官方 10/20 方案逐字一致 |
| 4 | Dwarf Delve | material-exchange-money-guide | PASS | 0 | 0 | Hotfix 条款逐条吻合 |
| 5 | Lunarium | steam-achievements-guide | PASS | 0 | 0 | 35 成就 / Stellar Lector 证实 |
| 6 | Taival | night-encounters-guide | PASS | 0 | 0 | 9/15 更新 / 21 附魔证实 |
| 7 | Vahrin's Call | bounty-hunts-guide | PASS | 0 | 1 | 主线条件已限定；Chapter 8 次要说法待改 |
| 8 | Relic | night-of-the-unextinguished-flame-dlc-guide | PASS | 0 | 0 | DLC 奖励 / Patch 4 证实 |
| 9 | Graphite | party-building-and-bonds-guide | PASS | 0 | 0 | 7 英雄 / 4 幕证实 |
| 10 | Shift at Midnight | chainsaw-guide | PASS | 0 | 1 | 官方公告证实；与旧文近战表述冲突 |
| 11 | Moonlight Peaks | museum-guide | PASS | 0 | 0 | 210 展品 / 奖励阶梯全吻合 |
| 12 | Bonehold | boss-rewards-guide | 有条件 PASS | 0 | 1 | Patch 条款暂不可验证；未引入职业矛盾 |
| 13 | Phantom Tower | runes-guide | PASS | 0 | 1 | 官方 wiki 全量证实；旧文需纠正 |
| 14 | Ardent Wilds | multiplayer-scaling-guide | 有条件 PASS | 0 | 1 | 0.5.29/0.5.34 与 +35% 无公开来源 |
| 15 | Go-Go Town | photo-mode-guide | 有条件 PASS | 0 | 2 | 六人句与站内 4 人上限冲突 |

**合计：🔴 0 / 🟡 7**

---

## 七、审核方法与可复现说明

- **抽样比例**：15/15 全量精读（非 30% 抽样），每篇至少核验 2–3 个最具体的专名/数字。
- **检索面**：Steam 商店页与 news 公告、官方 wiki（Horien Studio）、Steam Community 讨论帖、player.gg、isitdoneyet.gg、GAMERamble、Rogueliker、Techtroduce、17173、GameCast.it、RPG Jeuxvidéo、GamesHedge、PocketTactics、gogotown.top、Perfectly Nintendo、Perp Games。
- **零命中判定**：检索不到 ≠ 编造。按 Profile 规则，来源受限的专名/数值一律记「待验证 🟡」，只有「明显编造且可被反证」才判 🔴。本次无 🔴。
- **已知限制**：Steam news 直连在本机多次返回导航样板或超时（ECONNREFUSED/ETIMEDOUT），Bonehold 与 Ardent Wilds 的 Official 来源因此无法逐字比对——这正是这两站被判「有条件 PASS」而非 PASS 的原因。
- **未执行**：未运行 build、未部署、未修改任何 `content/` 文件。本报告为唯一写入产物。
