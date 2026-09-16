# SEPHIRIA 内容扩充记录 — 9/17

> 任务编号：EXPAND-9/17-sephiriawiki
> 站点：`sephiriawiki`（Steam app 2436940，TEAM HORAY，2026-07-31 正式版）
> 结果：**PRODUCED** — `photosensitivity-flashing-effects-guide.md`（1499 词，已部署 + 线上验证）
> 执行路径：路径① 抱怨驱动先跑（结论收敛）→ 路径② 系统盘点驱动命中

---

## 一、采集通道状态（如实登记）

| 通道 | 状态 | 实测证据 |
|------|:--:|------|
| Steam 评测 API | ✅ 可用 | `store.steampowered.com/appreviews/2436940?json=1&filter=recent&language=english&purchase_type=all&num_per_page=100`，带 `json=1` 返回 100 条；cursor 连续翻页 8 页（`p1..p8.json`）共 **800 条** |
| 官方公告 API | ✅ 可用 | `ISteamNews/GetNewsForApp/v2/?appid=2436940&count=200&maxlength=0` → **106 篇** Community Announcements，2024-06-10 → 2026-09-12 |
| Demo appid 排查 | ✅ 已完成 | store appdetails 列出 demo `appid 2686970`；其公告流 **0 篇**（`GetNewsForApp` 返回空 appnews）。结论：本游戏**只有正式版一个公告面**，无「试玩独立公告流」漏检风险 |
| Steam 讨论区 | ⚠️ 直连不可用 / 索引可用 | 本机 DNS 对 `steamcommunity.com` 投毒（解析到 `108.160.162.115`）；`curl --resolve steamcommunity.com:443:23.62.98.103` 返回 `000`（TLS 失败）。改用 WebSearch 索引命中讨论串标题与正文摘要，**未编造任何帖文内容** |
| Reddit | ❌ 不可用 | WebSearch 域限检索未返回 Sephiria 相关帖（与 9/7、9/16 记录一致） |
| WebSearch | ✅ 可用 | 用于交叉核对 1.0.31 内容、VaporLens 聚合口径、讨论区串存在性 |

---

## 二、样本统计（2026-09-17 实采）

**Steam 评测**
- 采集面：`filter=recent&language=english&purchase_type=all`，cursor 连续翻页
- 实际取回：**800 条**，日期覆盖 **2026-08-18 → 2026-09-16**，逐页日期连续无缺口
  （p1 9/12–9/16、p2 9/07–9/12、p3 9/03–9/07、p4 8/30–9/03、p5 8/26–8/30、p6 8/23–8/26、p7 8/20–8/23、p8 8/18–8/20）
- 覆盖比例：该窗口英文池 **100%**（非抽样）
- 全英文池口径（同日 `query_summary`）：**2,957 条 = 2,866 好评 / 91 差评 → 97% Overwhelmingly Positive**
- ⚠️ 口径限定：以上为**英文池 + filter=recent** 数字，与全语言池不是同一个数、也不是同一个标签，本报告不与全语言口径互换引用

**官方公告**：app 2436940 × 106 篇（全量，非抽样）+ demo app 2686970 × 0 篇 = 106 篇

**讨论区**：1 串（`Photosensitivity`，app 2436940 discussions/0/832747723340031954，经 WebSearch 索引确认存在与内容）

**有效样本合计**：800 条评测 + 106 篇公告 + 1 串讨论 = 远超岗位卡「≥20 条有效样本」门槛

---

## 三、主题聚类（对 800 条评测做关键词聚类，人工逐条读上下文）

| 主题 | 命中条数 | 站内状态 |
|------|:--:|------|
| 背包/inventory 管理 | 71 | 已覆盖（artifacts / tablets / inscriptions / combo-system） |
| 平衡/build 强弱 | 43 | 已覆盖（builds + 6 篇武器 build） |
| **联机断线/lag/ping** | 37 | 已覆盖（multiplayer-connection-fix + coop-freeze-recovery） |
| 内容量/想要 DLC | 30 | 已覆盖（endgame / game-length / full-release） |
| RNG | 25 | 已覆盖（farming / endgame） |
| 崩溃/性能 | 13 | 已覆盖（crash-launch-black-screen-fix / controls-settings） |
| 剧情门槛/刷 | 12 | 已覆盖（chapter-guide / hard-mode / endgame） |
| 剧情不可跳过 | 10 | 部分覆盖（chapter-guide），无独立操作型选题 |
| **英文翻译 / 效果描述不清** | 7 | 未覆盖，但**无操作型抓手**（不可写：无从核实的译法对照） |
| **光敏/闪烁/眼疲劳** | 5 | **站内零覆盖 ← 命中** |
| BOSS 难度/一击必杀 | 5 | 已覆盖（boss / chapter-6-final-boss / hard-mode） |
| 无 resume run（只能放弃） | 2 | 频次不足 |
| Cintamani Stone 双持只复活一次 | 2 | 频次不足 + 无数值来源 |

---

## 四、路径① 抱怨驱动：结论为「收敛」

按 Profile 04「每日扩充 MUST 并行跑两条路径」，先跑抱怨驱动：

- **联机断线（37 条，最高频抱怨）** → `coop-freeze-recovery-guide` 已专章写「Missing Reconnect Feature」「Freeze vs Lag vs Desync」「Recovery」，且 9/16 已更新到 1.0.33 口径 → **写即自噬**，否决
- **英文翻译/描述不清（7 条）** → 无独立可核实来源做逐条译法对照，写细则即编造风险 → 否决
- **剧情不可跳过（10 条）** → 官方 0.7.43 有「automatically skip boss scenes」条目，但站内 chapter-guide 已覆盖剧情节奏；独立成篇会与 chapter-guide 同题族 → 否决
- **Cintamani Stone / 无 resume run** → 各 2 条，未达 ≥3 独立来源 → 否决
- **「cosmetics 不是纯外观」** → `costume-stats-and-character-unlocks-guide` 已覆盖 → 否决

**抱怨驱动本轮无合规选题** —— 但按 Profile 04 红线，抱怨收敛 **≠** 没有缺口，MUST 切换到路径②。

---

## 五、路径② 系统盘点驱动：命中

做法：把官方公告全量（106 篇）按主题切面重扫，找「官方明说有、站内整块没写」的空白。命中的切面是**视觉可访问性**：

| 官方条目 | 出处 | 站内覆盖 |
|------|------|:--:|
| "A photosensitive seizure warning is now shown when the game starts." | 1.0 Update（2026-07-31） | ❌ 零 |
| "'Photosensitivity Warning' UI could not be clicked on the title screen during the first (or second) launch" | 1.0.23（2026-08-04） | ❌ 零 |
| "Added FX transparency settings for party members. (Default setting: 'Slightly Transparent')" + 明说尚未覆盖 attack FX / companion projectiles | 0.7.28（2025-04-24） | ❌ 零 |
| "Party member FX transparency option: Applied … to projectile attacks and Chain Lightning" | 0.7.32（2025-05-09） | ❌ 零 |
| "Added feature to change your own effect transparency." | 0.7.43（2025-07-01） | ❌ 零 |
| "…according to the 'Effect Transparency' option" | 0.7.47（2025-07-17） | ❌ 零 |
| 选项名 **"Party Member fx - Fully Transparent"** 曾致断线，0.9.3 修复 | 0.9.3（2025-10-24） | ❌ 零 |
| "Fixed an issue where some projectiles fired by enemies were affected by effect transparency." ← **敌方弹幕被刻意排除在透明度选项之外** | 0.11.5（2026-04-03） | ❌ 零 |
| "Improved the full-screen attack so that players can continue controlling their character even while the white screen effect is active." ← 终 BOSS Phase 1 全屏白屏效果 | 1.0.21 Hotfix（2026-07-31） | ❌ 零 |
| "certain Solar Blade animations were not affected by the transparency option" | 1.0.30（2026-08-20） | ❌ 零 |

**站内零覆盖确证**：对 `content/ app/ components/ lib/` 全量 grep `photosensitiv|epilep|seizure|flashing|effect transparency|transparen`，唯一命中是 `app/about/page.tsx` 的 "Source transparency"（无关）。`controls-settings-guide` 的 `## Accessibility & Comfort` 章节写的是**输入负担**（键位、block 比 dash 省力），**完全不含视觉安全**。

---

## 六、已覆盖 vs 缺口对比表

| 玩家需求 | 站内现状 | 判定 |
|------|:--:|------|
| 联机断线怎么办 | `multiplayer-connection-fix` + `coop-freeze-recovery`（含 reconnect 缺失专章） | ✅ 已覆盖 |
| 游戏有没有癫痫警告 | 39 篇零命中 | ❌ **P0 缺口** |
| 有没有关掉闪烁的设置 | 39 篇零命中 | ❌ **P0 缺口** |
| 透明度选项到底管什么 | 39 篇零命中（官方有 11 处公告条目） | ❌ **P0 缺口** |
| 哪个 BOSS 闪得最厉害 | 39 篇零命中（`boss-guide` / `chapter-6-final-boss` 只写机制） | ❌ **P0 缺口** |
| 出问题怎么报给开发组 | 散见各页，无独立入口 | ⚠️ 顺手并入本篇 |
| 键位/手柄舒适度 | `controls-settings-guide` | ✅ 已覆盖（本篇显式外链，不重复写） |

---

## 七、选题理由（四条件逐条）

**① 高频（≥3 独立来源）** — 实际 **5 个独立社区来源 + 11 处官方条目**：

| # | 来源 | 日期 | 内容 |
|---|------|------|------|
| 1 | Steam 差评 `.../recommended/235140596/`（70h，5 赞） | 2026-09-12 | 第三章 alternate boss 全屏攻击差点诱发癫痫；称无警告、无开关；无光敏史的朋友也不适 |
| 2 | Steam 差评 `.../recommended/235139414/`（20h，4 赞） | 2026-09-12 | 有癫痫的朋友因"certain enemies"闪烁已无法再玩；称无警告、无去闪烁开关 |
| 3 | Steam 好评 `.../recommended/235051658/`（35h） | 2026-09-11 | "Transparency options for your own special effects and those of allies' is also a boon. Minus points for some select flashing effects…" |
| 4 | Steam 差评 `.../recommended/234508367/`（29h） | 2026-09-05 | 终 BOSS 后眼睛疼/头痛；"if you are epileptic then have an emergency contact ready" |
| 5 | Steam 讨论串 `discussions/0/832747723340031954`（`Photosensitivity`） | 索引可达 | 玩家问如何去掉新 BOSS 的闪烁，因其触发朋友癫痫；回帖建议走官方 Discord 建议频道 |

**② 具体（可写成操作型指南）** — 可落地为：警告在哪、透明度选项覆盖什么/不覆盖什么、哪两场战斗被反复点名、单局中出问题怎么退出、报告要附什么。

**③ 站内未被覆盖** — 见 §五、§六，全站 grep 零命中，且与 `controls-settings-guide` 的 Accessibility 章节**显式分工**（该页管输入，本篇管视觉），非同题族改写。

**④ 不编造** — 本篇每一条断言都有出处：
- 选项名 `Effect Transparency` / `Party Member fx - Fully Transparent` / 默认值 `Slightly Transparent` —— **逐字取自官方公告**，非推测
- 「敌方弹幕不在透明度范围」—— 由 0.11.5 官方条目**反推并原文引用**（官方把它当 bug 修掉）
- 「终 BOSS Phase 1 有全屏白屏效果」—— 1.0.21 官方原文
- 「截至 1.0.33 没有任何关闭闪烁的补丁条目」—— 对**全部 appid 的公告全量**做的**否定性检索**，非印象
- 第三章 alternate boss 与杂兵闪烁 —— **明确标注为玩家报告（player-reported），不是官方效果清单**；无来源的攻击名/效果参数一律不写
- **未写**的东西：透明度选项的确切菜单路径（无处可查 → 明写在 Editorial 来源里说明「不写是因为查不到」）；BOSS 具体招式名；任何帧率/亮度数值

---

## 八、查重：39 现存 slug 全比对

逐条比对现存 39 篇 slug（artifacts / beginner / boss / builds / chapter-6-final-boss / chapter / combo-system / controller-casting-keybind-fix / controls-settings / coop-freeze-recovery / coop / costume-stats-and-character-unlocks / costumes / crash-launch-black-screen-fix / crossbow-build / dagger-build / endgame / faq-content / farming / full-release / game-length / greatsword-build / hard-mode / inscriptions / katana-build / multiplayer-connection-fix / mystic-pot / patch-1-0-31-build-changes / potions-consumables / price-increase-and-worth-it / save-file / secret-rooms / solo / speedrun / staff-build / sword-shield-build / tablets / talents / weapons）：

- **无一篇**涉及光敏/闪烁/视觉可访问性 → 非自噬
- **特别核验 3 篇高危近邻**：
  - `patch-1-0-31-build-changes-guide`：已含 1.0.31 全部新 artifact 与 1.0.33 附录（含 Master's Tsuba 改动的替代说明）。**因此本次未另写「可进化 artifact」独立篇** —— 那会与该附录表格同题族。该页可访问性条目为零，无交集
  - `controls-settings-guide`：Accessibility 章节 = 输入负担，与视觉安全零重叠；本篇已显式外链，该页也已回链（见 §十）
  - `boss-guide` / `chapter-6-final-boss-guide`：只写机制与打法，不写效果强度/闪烁/可访问性 → 无重叠

---

## 九、成篇信息

- 文件：`sephiriawiki/content/guides/photosensitivity-flashing-effects-guide.md`
- slug：`photosensitivity-flashing-effects-guide`
- 标题：Sephiria Photosensitivity Guide — Seizure Warning, Flashing Effects and What the Transparency Options Actually Cover
- category：`Beginner`（与 controls-settings 同族，导航一致）
- **词数：1499**（正文，不含 frontmatter；目标 800–1500）
- frontmatter：沿用站内既有格式（title / description / category / version / updated / keywords / related / sources[3 层证据]），对齐 `patch-1-0-31-build-changes-guide` 与 `controls-settings-guide`
- **`lib/guides.ts` 未做任何改动**（按主 Agent 更正指令：`getAllGuides()` 走 `readdirSync` 动态扫描，无硬编码注册表；已确认未产生任何无用改动）
- 三级来源（Official 11 条公告出处 / Community 5 条可追溯链接 / Editorial 选题与自我设限说明）已写入 frontmatter，由 GuideLayout 渲染

**结构**：The Warning Is Real → Effect Transparency 覆盖表 → 不能关掉的（敌方/BOSS）→ 单局应急 5 步 → 怎么报给开发组 → FAQ ×4 → Related Guides ×5

### 数字核验台账（逐条对官方原文）

| 断言 | 官方原文出处 | 核验 |
|------|------|:--:|
| 癫痫警告 1.0 起加入 | 1.0 Update：`A photosensitive seizure warning is now shown when the game starts.` | ✅ 逐字 |
| 警告在 title screen、首次/二次启动曾点不动 | 1.0.23：`'Photosensitivity Warning' UI could not be clicked on the title screen during the first (or second) launch` | ✅ 逐字 |
| 队友 FX 透明度默认 `Slightly Transparent` | 0.7.28：`(Default setting: 'Slightly Transparent')` | ✅ 逐字 |
| 选项名 `Party Member fx - Fully Transparent` | 0.9.3：`the option "Party Member fx - Fully Transparent"` | ✅ 逐字 |
| 自己的效果透明度 | 0.7.43：`Added feature to change your own effect transparency.` | ✅ 逐字 |
| 命名 `Effect Transparency` | 0.7.47：`according to the 'Effect Transparency' option` | ✅ 逐字 |
| 敌方弹幕被排除在透明度之外 | 0.11.5：`Fixed an issue where some projectiles fired by enemies were affected by effect transparency.` | ✅ 逐字（反向证据） |
| 终 BOSS Phase 1 全屏白屏 | 1.0.21：`even while the white screen effect is active` | ✅ 逐字 |
| Solar Blade 透明度两轮修补 | 0.10.10、1.0.30 | ✅ |
| 可暂停 / 可放弃远征 | 1.0.33：`could not be paused or abandoned when the player and the boss died at the same time` | ✅（间接确证功能存在） |
| 报告渠道 Discord `g7AaeBuyMV` / `team.horay.game@gmail.com` / 日志路径 | 各公告结尾 quote 块 | ✅ 逐字 |
| 1.0.33 索要 footage + version + specs + mods | 1.0.33 Known Issues 段 | ✅ 逐字 |
| 截至 1.0.33 无「关闭闪烁」条目 | 对 app 2436940（106 篇）+ app 2686970（0 篇）全量否定性检索 | ✅ 全语料 |

---

## 十、部署与线上验证证据

**构建**
```
cd sephiriawiki && pnpm install
pnpm build  →  BUILD_EXIT=0
✓ Compiled successfully in 772ms
│ ├ ● /guides/photosensitivity-flashing-effects-guide     ← 新路由生成
```
产物侧核验：`.next/server/app/guides/photosensitivity-flashing-effects-guide.html`，69KB；表格垃圾行 `<td>-------</td>` 计数 **0**（9/12 ReactMarkdown 表格缺陷未复现）

**部署**（按主 Agent 更正指令，使用封装脚本，未单独跑裸 `vercel --prod`）
```
cd games-site && ./deploy-wiki-site.sh sephiriawiki
新部署: https://sephiriawiki-56aw54bio-zhaoq0103s-projects.vercel.app
```
- 首轮脚本曾报 `Not authorized`（Profile 04 记载的瞬时 token 抢占），**立即重试即成功**（共 3 次部署：内容稿 → frontmatter 补 appid 说明 → 交叉链接）

**alias 校验（关键，非「首页 200」）**
```
vercel inspect sephiriawiki.vercel.app
> Fetched deployment "sephiriawiki-56aw54bio-zhaoq0103s-projects.vercel.app"
  target  production   status ● Ready
  Aliases ╶ https://sephiriawiki.vercel.app
```
✅ 生产 alias 已指向**本次新部署**（created 34s ago），非旧部署

**线上验证**（本机 DNS 对 `*.vercel.app` 有投毒/不一致，故用 `--resolve`；三个 IP 均验证）

| 路径 | IP 216.198.79.195 | IP 64.29.17.195 | IP 216.198.79.131 |
|------|:--:|:--:|:--:|
| `/guides/photosensitivity-flashing-effects-guide` | **HTTP 200, 70,857 B** | HTTP 200, 70,857 B | HTTP 200, 70,857 B |
| `/guides/controls-settings-guide` | HTTP 200, 49,746 B | — | — |
| `/` | HTTP 200, 51,078 B | — | — |
| `/guides` | HTTP 200, 125,975 B | — | — |
| `/sitemap.xml` | HTTP 200, 8,803 B | — | — |

线上文本级核验（非仅看 200）：新页 HTML 含 `Photosensitivity Warning`、`Effect Transparency`、`Party Member fx - Fully Transparent`、`Chapter 3 alternate boss`、`g7AaeBuyMV`、`0.11.5`、`2686970` — 全部 OK

**可发现性（产物级/线上证据，非 home-content.md）**
- `/guides` 索引页含该 slug 卡片 ×5 处（含 JSON-LD itemList）
- `sitemap.xml` line 220 含 `.../guides/photosensitivity-flashing-effects-guide</loc>`

**附带的站内交叉链接（1 文件）**
- `controls-settings-guide.md`：Accessibility 章节末尾加一行指向新篇的链接 + `updated` 由 2026-08-11 → 2026-09-17；线上验证该页已含新 slug（HTTP 200）
- 理由：新篇此前只能从 `/guides` 索引和 sitemap 进入，加一条正文内链提升可发现性与内链权重；改动限定在 `sephiriawiki/` 内，未触碰其他站点

---

## 十一、P0 遗留 / 新发现问题

1. **【已在本篇如实处理，需主 Agent 知悉】社区"没有癫痫警告"的说法与官方公告不一致**
   官方 1.0（7/31）明写加了警告，1.0.23（8/4）还修了它点不动的 bug；但 9/12 两条高赞差评坚称「无任何警告」。
   **本篇没有选边**，而是把两边都摆出来并给出可执行结论（「别指望它会让你注意到」）。若后续有玩家实拍 title screen 无警告，则可能是**平台差异或版本差异**，届时本篇需校准。
2. **否定性结论的多 appid 面已做**：本篇「截至 1.0.33 无关闭闪烁的设置」已同时检索 app 2436940（106 篇）与 demo app 2686970（0 篇）。此项与 9/16 QA 固化的「多 appid 语料面」规则一致，**建议后续扩充沿用**。
3. **未采纳的相邻缺口（记此备查，本轮不写）**：
   - 英文翻译 / 效果描述不清（评测 7 条 + 官方 1.0.33 "Updated the effect text to match the actual effect"）→ 缺可核实的逐条译法对照，写即编造
   - 剧情不可跳过（评测 10 条）→ 与 `chapter-guide` 同题族风险
   - 无 resume run（2 条）、Cintamani Stone 双持失效（2 条）→ 频次未达 ≥3
4. **讨论区直连仍不可用**：本机 DNS 投毒 `steamcommunity.com → 108.160.162.115`；`--resolve` 指定 IP 亦 TLS 失败（返回 000）。本轮以 WebSearch 索引补齐，未编造帖文。若后续要拿讨论区原文，需换出口或代理。

---

## 十二、自检（对 QA Profile 05/06）

| 检查项 | 结果 |
|------|:--:|
| Residue：Hugo shortcodes / 他站游戏名 / 他站域名 / 模板残留 | ✅ 无（新篇 grep 全站 0 命中他站名） |
| 英文站标记语言 | ✅ 全英文，无中文标记泄漏 |
| 编造：具名实体与精确数值逐一可溯源 | ✅ 见 §九 台账，13/13 条对官方原文 |
| 免责句漂白数值 | ✅ 无免责句 + 数值组合；本篇无任何无源数值 |
| 复合断言原子化 | ✅ 社区报告与官方事实分列两栏（「玩家报告 / 官方佐证」表格） |
| 范围限定词 | ✅ 评测数字标注「英文池 + filter=recent」，未与全语言口径互换 |
| 站内一致性 | ✅ 未与现存 39 篇任一重叠；与 controls-settings 显式分工并互链 |
| 导航登记 | ✅ 未改 `content/home-content.md`（孤儿文件、零渲染）；用 `/guides` 索引 + sitemap 产物级验证 |
| 构建 | ✅ exit 0，新路由生成，产物 0 表格垃圾行 |
| 部署 | ✅ 脚本部署，`vercel inspect` 确认 alias 指向本次新部署 |
| 线上验证 | ✅ 3 IP × HTTP 200 × 70,857 B，新文本逐项命中 |
| 未越界 | ✅ 未改 `.agent/expand-daily.json`；未 `git add`/`commit`/`push`；未触碰其他站点 |
