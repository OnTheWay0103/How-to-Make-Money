# Fact-Sweep 核验报告 — themoundwiki（2026-09-16）

> 任务：处理 QA 报告 `.agent/qa-expand-themound-9-16.md` 的 🟡 #2 —— `extraction-guide.md:21-59`
> 岗位：内容合规审计员（01-岗位卡 / 02-Profile）+ QA 审核员（05/06）
> 站点：`themoundwiki` — The Mound: Omen of Cthulhu（ACE Team / Nacon，Steam app 2569760，1.0 = 2026-07-15）
> **性质：信任修复，非内容扩充。本站 2026-08-10 因「低价值内容」被 AdSense 拒审，事实准确性是红线。**
> 结论：**3 项全部判定完毕并处置；发现并修复同失效模式的跨页扩散（11 文件）；构建 + 部署 + 线上验证通过。**

---

## 一、取证通道实测（2026-09-16 本轮实测）

本机 DNS 污染确认：`themoundwiki.vercel.app` 系统 DNS → `31.13.94.7`（Meta IP），
`store.steampowered.com` 系统 DNS → `69.192.130.40`（HTTP 000）。
全部请求用 `--resolve` 指定真实 IP 完成。

| 通道 | 实测 | 结果 |
|------|------|------|
| `api.steampowered.com/ISteamNews/GetNewsForApp`（`--resolve 23.77.217.154`） | **HTTP 200** | ✅ **官方公告全量 39 篇全文**（1.01–1.05 + 发售前），92,868 字符 |
| `store.steampowered.com/appreviews`（`--resolve 23.45.138.131`，**带 `json=1`**） | **HTTP 200** | ✅ **1,925 条独立评测**（英文 1,283；`filter=recent/updated/all` 三口径游标翻页） |
| `store.steampowered.com/api/appdetails`（`json` 带 `l=english`） | **HTTP 200** | ✅ 商店页官方描述原文 |
| `store.steampowered.com/app/2569760/` 直连 | 302 → 跟随 | ✅ 可读 |
| WebFetch `intoindiegames` / `finalboss.io` / `nerdschalk` / `noobfeed` | **HTTP 200** | ✅ 编辑层一手引文（逐字取得） |
| WebFetch `chaptercheats` / `outputlag` | **HTTP 200** | ✅ 编辑层 |
| WebSearch「primary beacon / secondary flare / emergency raft」「compass tool survey mode crisis mode」 | **0 结果** | ⚠️ 这两个词组在任何公开索引中**零命中** |
| `steamcommunity.com` 讨论区 / Reddit `.json` | HTTP 000 / 403 | ❌ 不可达（沿用历轮结论）；**故全部玩家引文一律走官方 reviews API + 作者主页 permalink** |
| WebFetch `addictinggames` | HTTP 403 | ❌ 未验证（见第六节） |

> **零编造声明**：本报告所有引文均来自上述 HTTP 200 通道，每条附可追溯 URL。
> 403 / 000 通道一律记为「未验证」，未当作「无数据」或「无冲突」的证据。

---

## 二、各项判定

### 判定 1 — 提取区四型表 + 精确秒数 → 🔴 **无一手依据｜已整段移除**

**被核验的原文（`extraction-guide.md:40-45`，改前）：**
```
| Primary Beacon | Green | Always active at expedition start | ~15 seconds | Low |
| Secondary Flare | Blue | Activates after the first major objective | ~20 seconds | Medium |
| Emergency Raft | Yellow | Permanent but one-use per expedition | ~25 seconds | Medium |
| Hidden Cache Exit | Purple | Requires finding a map fragment | ~30 seconds | Very High |
```
另含 `:28` 「Survive the waiting period (typically 60-90 seconds)」、`:182`「The extraction flare takes 60-90 seconds」。

**取证结果（全部一手）：**

| 来源 | 检索项 | 命中 |
|------|--------|:--:|
| 官方公告全文 39 篇（92,868 字符） | `beacon` | **0** |
| 同上 | `flare` | **0** |
| 同上 | `extraction point` | **0** |
| 同上 | `\braft\b`（词边界） | **0** |
| 同上 | `timer` | **0** |
| Steam 官方商店页描述 | 提取点 / 信标 / 信号弹 | **0**（只讲 contract / logbook / madness / voice chat） |
| Steam 评测 1,925 条 | `beacon` / `flare` / `\braft\b` / `extraction zone` / `extraction timer` | **0 / 0 / 0 / 0 / 0** |
| WebSearch 词组精确检索 | 「primary beacon」「secondary flare」「emergency raft」 | **0 结果** |

**改写实际存在的提取模型（多源一致）：**

| 来源 | 逐字引句 | URL |
|------|---------|-----|
| Into Indie Games | *"When you're ready to extract, return to the map's starting location and speak to the boatman to end your expedition."* | https://intoindiegames.com/walkthrough-hub/the-mound-omen-of-cthulu-beginner-tips-tricks/ |
| Into Indie Games | *"the Captain will tally your haul and will reward you depending on your performance."* | 同上 |
| Into Indie Games | *"you can still talk to the Boatman to end your expedition"* / *"you won't earn the Tokens you would normally for completing the Contract."* | 同上 |
| FinalBoss | *"Remember that the run ends at the boat, not when you find the treasure."* | https://finalboss.io/the-mound-omen-of-cthulhu-how-to-start |
| FinalBoss | *"the safest loot is the loot you successfully bring back to the boat."* | 同上 |

→ **判定：无依据。按 Profile「MUST NOT 编造精确数据（无来源则删除）」整段移除，未做「改通名保留」处理 —— 因为四型表整体不存在，改通名等于换一种编造。**

### 判定 2 — Compass 三模式 → 🔴 **无一手依据｜已整段移除**

**被核验的原文（`:49-53`）**：Standard Mode / Survey Mode / Crisis Mode 三模式描述。

**取证结果：**

| 来源 | 结果 |
|------|------|
| 官方公告 39 篇 | `compass` = **0** |
| 官方商店页 | 未提及 |
| Steam 评测 1,925 条 | `compass` = **3 条，且全部是玩家「要求加入」罗盘** |
| WebSearch「compass tool survey mode crisis mode」 | **0 结果** |
| 6 个独立编辑源（intoindiegames / finalboss / nerdschalk / noobfeed / chaptercheats / outputlag） | **全部 0 提及** |

**3 条评测原文（反向证据 —— 玩家在索取罗盘，说明游戏内没有）：**
- *"If those damn things even work on land give me a compass, could be implemented as a cheaper form of map just for orientation."*（review 234436071）
- *"I would not recommend this until they add a difficulty level or level options, like a map, compass, non breaking items, etc."*（review 231721688）
- *"...like a sanity meter or a compass to at least help you tell what direction you're facing"*（review 230892167）

→ **判定：无依据，且存在反向证据。整段移除。**

### 判定 3 — 「送回牛车」缺失 → 🟢 **确有其事｜已补入，且口径已与 3 页统一**

⚠️ **先纠正任务书的一处表述**：任务书写「in-game 教学要求把**战利品送回牛车**」。
实际评测原文指向的是**把牛车本身送回起点**（send the cart back），不是「把战利品送回牛车」。
本报告按评测原文判定，未沿用误读 —— 否则会把一个错误断言写进站点。

**「牛车送回」机制的一手证据（≥10 条独立评测，全部来自 reviews API）：**

| review ID | 作者 permalink | 日期 | 逐字引句 |
|-----------|---------------|------|---------|
| 230777045 | `profiles/76561198055300240` | Jul 18 2026（1,229 有用票） | *"It has an interaction that will have the cart return to the extraction point, however there is legitimately no reason to ever use it. It causes the driver to blow a horn which makes a lot of noise and enemy spawns drastically increase."* |
| 231635410 | `profiles/76561198021798916` | Jul 30 2026 | *"You do not have to return your cart in order to get the supplies back to the ship!"* / *"when you tell the cart driver to return he leads you out."* |
| 231812309 | `profiles/76561198038864751` | Aug 1 2026 | *"the players can simply walk back to the extraction point themselves without sending the cart away."* |
| 230583646 | `profiles/76561197969741894` | Jul 16 2026 | *"Ingame guide tells you to send the cart back once ready to leave but it's actually the worst you could be doing because it will wake the forest"* |
| 231159912 | `profiles/76561198026087779` | Jul 23 2026 | *"you can extract without sending said cart back to start"* |
| 230784256 | `profiles/76561197994179232` | Jul 18 2026 | *"Don't send the cart home, just follow the trail back so you don't trigger the swarm."* |
| 230957861 | `profiles/76561198030994835` | Jul 21 2026 | *"there is a mechanic where you tell the cart to go back to the start where you have to extract. When you do this is triggers a ratcheting up in difficulty"* |
| 230570219 | `profiles/76561198422897735` | Jul 15 2026 | *"after you send the cart back to the start, the game is just forcing so many enemies on you"* |
| 234246354 | `profiles/76561198294216435` | Sep 1 2026 | *"There is really no point in sending the cart back because it causes enemies to fight you"* |
| 234457866 | `profiles/76561198052912151` | Sep 4 2026 | *"being able to extract without having Carlito back at the boat makes the end of a run easier"* |

**编辑层同向证据：**
- Into Indie Games：*"As the Ox Wagon moves across the map, it leaves a streak of paint on the ground."* / *"Follow the streak to the start point to find your way back to the boat easily when you're ready to extract."*

**判定**：牛车送回交互、其角笛噪音代价、以及「提取不强制要求牛车」= **多源确证**。
「in-game 教学要求送回」= **单一来源（230583646）**，已在页内标 `[Unconfirmed]` 并明示「仅就对教学的说法存疑，噪音代价另有大量独立佐证」。

→ **已补入 `extraction-guide.md` 新增章节「The Walk Out: Following the Ox Wagon」，与 `ox-cart-guide.md` 口径对齐。**

---

## 三、改动清单（11 文件，全部在 `themoundwiki/` 内）

`git diff --stat -- themoundwiki/` → **11 files changed, 138 insertions(+), 114 deletions(-)**

### 3.1 `content/guides/extraction-guide.md`（主体，+185 行改动）

| 位置 | 改前 | 改后 |
|------|------|------|
| frontmatter `description` | 「extraction point types and how to find them」 | 「how to get your haul back to the boat, following the Ox Wagon's trail out」 |
| frontmatter `keywords` | `themound extraction zones` | `themound ox wagon trail` |
| frontmatter `related` | 5 slug | +`ox-cart-guide`；`updated` → 2026-09-16 |
| `:17` 导语 | 「extraction points and how to find them」 | 「the walk back to the boat, how to navigate it with the Ox Wagon」 |
| `:21-32` **The Extraction Process** | 6 步表（flare / 60-90s waiting period / rowboat） | 5 步表：secure objective → load Ox Wagon → head for the start shore → speak to the Boatman → Captain tallies haul；附 Into Indie Games 逐字引句 + 「leaving early is allowed」 |
| `:36-67` **Extraction Zones**（整节） | 四型表 + Compass 三模式 + flare 颜色/音频线索 + Zone Priority | **整节替换**为 **The Walk Out: Following the Ox Wagon**（牛车油漆轨迹 + 送回决策 + 2 条可追溯评测引文） |
| `:68` 计时器导语 | 「The game does not show you a countdown」 | 更正为「press Tab 看左上角剩余游戏内小时数」+ 2 条独立评测佐证（**原句与实测矛盾**） |
| `:74-79` Timer Trigger Points 表 | `~15-20 / ~25-30 / ~30-35 / ~40+ minutes`、`3x enemy spawns` | 改为「玩家报告区间」并标注 **not tightly consistent** + `[Unconfirmed]`；`3x` 无源数字删除 |
| `:87-93` Before/After 表 | 含「Extraction point may relocate」「Ghost Bats in fixed locations」 | 移除依赖已删系统的行，改述已确证现象 |
| `:124-126` Red Light / Sanity | 「fake extraction point」「hallucinated abort」 | 改为「没人能就海岸线方向达成一致」等可行表述 |
| `:136-138` Pre-Extraction | 「which zones are active」/「Save a Medallion ping…marks your route」 | 改为 mark the way back + keep the wagon between you and the shore（**Medallion 实测功能是找 artifact/orb，非标路线**） |
| `:151-154` Threats 表 | 「extraction point」「nearest active zone」 | 改述为「line of retreat」「commit to the walk out」 |
| `:175-187` Failures #4/#5/#6 | 「False Extraction Points」/「extraction flare takes 60-90 seconds」/「Prayer Beads or Holy Water」 | #4 改为「Trusting a Landmark Only One Player Can See」；#5 改为「Panicking on the Final Stretch」；#6 删除 **Prayer Beads / Holy Water（1,925 条评测 0 命中）** |
| `:197` Loadout 表 | 「during the waiting period」 | 「so nobody has to be carried」 |
| `:205-212` Checklist | 「Extraction point confirmed」「Waiting-period defensive positions」「Flare or signal item」 | 改为 objective/treasure value、wagon trail、return route agreed 等 |
| `:215-221` Related Guides | 无牛车链接 | +Ox Cart Guide |
| **新增 Sources 节** | 无 | Official ×2 / Editorial ×5 / Community ×9，全部附 URL |
| **新增 Correction note** | 无 | 明示删除了什么、为何删除、"a number without a source is worse than no number" |

### 3.2 同失效模式跨页扩散（10 文件，均为定向外科修改）

| 文件 | 改前 | 改后 |
|------|------|------|
| `maps-locations-guide.md` Navigation 表 | `Compass (Standard / Survey) … Survey reveals all active points for 10s (90s cooldown)`、`Map (M key) … active zones`、`Map fragments → Hidden Cache exits`、`Flare colors Green=Primary Blue=Secondary Red=Storm` | 改为 **Forest timer (Tab)**、**Ox Wagon's trail**、**The Medallion**（实测功能）、**Fort logbooks**、**The shoreline** |
| `maps-locations-guide.md` Route Rules | 「which zones are active」 | 「Mark the way back early」+ 指向 Ox Cart Guide |
| `maps-locations-guide.md:210` Related | 「zone types, compass modes, and safe exits」 | 「the walk out, the forest timer, and safe exits」 |
| `crafting-recipes.md` | `Compass Calibration Kit`（降 compass cooldown 15%）、`Extraction Beacon`（凭空造提取点）两行 + Tier I「compass calibration」+ Tier IV「sanctuary beacons」+ 工具类「compass enhancements」 | 两行**删除**；Tier 表述改为 lantern oil / advanced expedition gear |
| `nightmare-mode.md` | `Iron Coffins｜Extraction beacon takes 50% longer`、「Beacons in Nightmare can be jammed」、「Assign beacon guard」、「starts beacon」、`Iron Coffins + Twin Shadows` 组合行 | 删除依赖已删系统的 2 行；其余改为「rear guard」「leads the walk out」「clear the approach before you commit to the walk out」 |
| `perks-guide.md` | `Quick Exit｜Extraction timer reduced by 15 seconds` + 末尾配装表 `-15s extraction timer` | 两处**删除**（**未替换为新编造效果**） |
| `beginner-loadouts.md` | 「extraction is a 60-90 second sprint to the flare」、「Flare｜Extraction signal backup — if your extraction point shifts」 | 改为「the walk back to the shore is the one stretch…」、「Flare｜Light and area denial on the walk out」 |
| `coop-strategy-guide.md` | 呼叫词「Extracting now, moving to flare」、「(enemy, extract, hallucination, flare)」 | 「heading for the shore」、「(enemy, extract, hallucination, shore)」 |
| `solo-guide.md` | 「False extraction markers…Check your compass — if the needle is spinning」、「extraction waiting period」、「final countdown」 | 改为「Losing the way out…navigate by the Ox Wagon's trail」、「On the walk out」、「final stretch」 |
| `loadout-guide.md` | `Flare｜Extraction signal`、`Extraction-heavy zones`、`70–90%｜never in extraction zones` | 「Light on the walk out」、「Extraction-heavy runs」、「never on the walk out」 |
| `weapons-guide.md` | 「during the waiting period」 | 「on the way back to the shore」 |
| `ox-cart-guide.md`（一致性对齐） | 「One player reports it is not mandatory…**[Unconfirmed]**」、「the second comes from a single reviewer」 | 改为**三条独立评测并列**并补 `76561198021798916` permalink；官方未表态 vs 玩家多源确证分开表述 |

> **改动原则**：无一手依据的**精确数值一律删除，不做「改通名保留」**；不做任何反向编造填补
> （例：`perks-guide.md` 的 Quick Exit 是**删除**而非改成另一个编造的 perk 效果）。
> 全部新增断言均附 URL；单一来源一律标 `[Unconfirmed]`。

---

## 四、全站一致性复扫

### 4.1 任务指定 4 页

| 主题 | extraction-guide | ox-cart-guide | contracts-guide | isolation-guide | 一致？ |
|------|------------------|---------------|-----------------|-----------------|:--:|
| 提取是否强制送回牛车 | 「What is not required is the wagon itself」+3 条评测 | 「three players separately report it is not mandatory」+同 3 条 permalink | 未表态 | 未表态 | ✅ 同向且同源 |
| 送回牛车的代价 | 角笛噪音、corroborated across many reviews | 「noise cost is corroborated across many independent reviews」 | 未表态 | 未表态 | ✅ |
| 「教学要求送回」 | `[Unconfirmed]`，单一来源 | `[Unconfirmed]`，指向同一 review | — | — | ✅ |
| 牛车轨迹作为导航 | 「streak of paint」/「white path」 | 「leaves behind a salt trail」/「white path back to the boat」 | 未表态 | 「anchors navigation and staging」 | ✅ 同向（**措辞差异见 4.3**） |
| 官方锚定（Command Wheel 2.0） | 引 ox-cart-guide，未复述数字 | 逐字引 1.04 公告 | 逐字引 1.04 公告 | — | ✅ 三处同为官方逐字 |
| 牛车降 sanity 争议 | 未表态 | 双方并列 + `[Unconfirmed]` | — | Scope note 指向争议 | ✅ 无自噬 |

### 4.2 全站 grep 复扫（判定后）

```
primary beacon|secondary flare|emergency raft|hidden cache exit|survey mode|crisis mode|
extraction beacon|extraction timer|extraction zone|waiting period|60-90 second|
compass (tool|mode|needle|cooldown|calibration)
→ 命中 0（排除本页刻意保留的 Correction note / Sources 声明行）
```

**无新增矛盾。** 唯一残留词面命中为 `loadout-guide.md` 的 `Old Map｜Reveals hidden caches on your map`
—— 属既有道具描述，与已删的「Hidden Cache Exit 提取点」无关，非本次失效模式，已列入第七节观察项。

### 4.3 遗留（未改，需人工决定）

- `ox-cart-guide.md` 称轨迹为 **salt trail**，`extraction-guide.md` / `maps-locations-guide.md` 称 **streak of paint / wheel tracks**（两处分别来自不同评测与编辑源，各自有据）。
  三页描述同一机制但用词不同 —— **未统一**，因为 salt / paint 哪个为准**目前无一手来源可裁决**。
  强行统一会变成编造。**列入待人工复核。**

---

## 五、构建 / 部署 / 线上验证

### 5.1 构建（产物级验证，非仅源码阅读）

| 项 | 结果 |
|------|:--:|
| `pnpm install`（**未用 npm**） | ✅ ok |
| `pnpm build` **exit code** | ✅ **0** |
| 静态页生成 | ✅ **53/53** |
| `Compiled successfully` | ✅ |

**产物级 grep（`.next/server/app/guides/*.html`）：**

| 断言 | 产物命中 |
|------|:--:|
| `Primary Beacon` / `Emergency Raft` / `Hidden Cache Exit` / `Compass Tool` | 各 **1**（**仅来自刻意保留的 Correction note**，已逐条核对上下文） |
| `Survey Mode` / `Crisis Mode` / `~15 seconds` / `~20 seconds` / `~25 seconds` / `~30 seconds` / `60-90 seconds` / `Zone Type` | **0** |
| `extraction beacon` / `extraction timer`（其余 10 页产物） | **0** |
| `<td>---`（9/12 组件表格缺陷） | **0** —— 未复发 |

### 5.2 部署

- 部署：`./deploy-wiki-site.sh themoundwiki` → `https://themoundwiki-avuqbdxxj-zhaoq0103s-projects.vercel.app`
- 全局 `vercel` **58.9.4**（**未用 `npx vercel`**）
- `vercel inspect themoundwiki.vercel.app` → **status ● Ready / created 45s ago**（alias 已指向本次新部署）
- 真实 IP：`dig @8.8.8.8 themoundwiki.vercel.app` → **`64.29.17.195`** / `216.198.79.195`
  （**系统 DNS 返回 `31.13.94.7` = Meta 污染 IP，已弃用**）

### 5.3 线上验证（全部 `--resolve themoundwiki.vercel.app:443:64.29.17.195`）

| 路径 | HTTP | 字节 |
|------|:--:|:--:|
| `/guides/extraction-guide` | **200** | **94,794** |
| `/guides/maps-locations-guide` | 200 | 74,513 |
| `/guides/ox-cart-guide` | 200 | 73,946 |
| `/guides/contracts-guide` | 200 | 83,976 |
| `/guides/isolation-guide` | 200 | 69,903 |
| `/guides/nightmare-mode` | 200 | 52,903 |
| `/guides/perks-guide` | 200 | 73,757 |
| `/guides/crafting-recipes` | 200 | 53,008 |
| `/guides/beginner-loadouts` | 200 | 56,830 |
| `/guides/coop-strategy-guide` | 200 | 108,900 |
| `/guides/solo-guide` | 200 | 90,716 |
| `/guides/loadout-guide` | 200 | 92,397 |
| `/guides/weapons-guide` | 200 | 78,726 |
| `/guides` | 200 | 122,705 |
| `/` | 200 | 46,234 |
| `/sitemap.xml` | 200 | 8,728（**48 URL**） |
| `/robots.txt` | 200 | 120 |
| `/ads.txt` | 200 | 59 |

**无 `HTTP=000` / `size=0` 记录为 PASS 的情形。**

### 5.4 旧可疑内容已从线上消失（逐条实测）

| 线上检查项 | 结果 |
|------|:--:|
| `Compass Tool is the primary` | **0** ✅ 已消失 |
| `Survey Mode` / `Crisis Mode` | **0 / 0** ✅ |
| `60-90 second` / `extraction flare takes` | **0 / 0** ✅ |
| `Prayer Beads` / `Holy Water` | **0 / 0** ✅ |
| 其余 10 页 `extraction beacon\|extraction timer\|primary beacon\|…` | **0** ✅ |
| 新内容 `Boatman` = 4 / `streak of paint` = 2 / `press Tab` = 3 / `Correction note` = 1 | ✅ 已上线 |

---

## 六、`[Unverified]` / 待人工复核清单

| # | 项 | 原因 | 处置 |
|---|----|------|------|
| 1 | **牛车轨迹的确切形态**：`salt trail`（ox-cart-guide）vs `streak of paint` / `wheel tracks`（extraction-guide / maps-locations-guide） | 两说各有一手来源，**无一手来源可裁决哪个为准** | 三页各自保留、均附来源；**未统一**（强行统一 = 编造） |
| 2 | 「in-game 教学要求送回牛车」 | 仅 230583646 一条评测 | 页内标 `[Unconfirmed]`，并明示只有「教学说法」存疑、噪音代价另有大量佐证 |
| 3 | 「送回牛车会唤醒森林」 | 多源玩家报告，**官方从未表态** | 标 `[Community]`；`ox-cart-guide` 明写「Not confirmed by the developer」 |
| 4 | Forest Awakens 的**具体时长** | 官方 0 提及；玩家报告 20 min ~ 45 min 区间不一致 | 已改为区间表 + `[Unconfirmed]`，删掉原 `3x spawns` 等无源数字 |
| 5 | `addictinggames` 1.04 报道正文 | WebFetch **HTTP 403** | 记为**未验证**，未用于任何事实 |
| 6 | Steam 讨论区 / Reddit | HTTP 000 / 403 | 记为**不可达**，未采信任何内容 |

---

## 七、新发现的同类问题（超出本次范围，未擅改）

⚠️ **本次失效模式（「整套游戏机制 + 精确数值无一手来源」）在站内不止于提取系统。**
以下是本轮 grep + 1,925 条评测交叉检索中**顺带发现**、但**需要各自独立取证**的项，本次**未改动**：

| # | 位置 | 可疑内容 | 评测语料反证 |
|---|------|---------|-------------|
| 1 | `perks-guide.md` 全页 | 整套 perk 树（Pack Mule / Scavenger / Field Medic / Artisan / Ghost / Second Wind / Slippery / Adrenaline Rush）+ 解锁条件 | **`perk` 全语料仅 2 条命中** —— 整套系统无佐证 |
| 2 | `nightmare-mode.md` 全页 | 整套 Nightmare modifier 卡（Thicker Dark / Bloodthirst / Hollow Veil / Ravenous / Mourning Bells / Twin Shadows）+ 40%/30%/50%/60% 精确百分比 | 「Nightmare」14 条提及，但**无一条描述这些 modifier** |
| 3 | `crafting-recipes.md` 全页 | 整套配方表（含 `Holy Water` 材料、`Blessed Ammunition +60%`、`Storm Cloak 20%/40%`） | `craft` 全语料 **4 条**；`Holy Water` **0**、`Map fragment` **0**、`Whisper Charm` **0**、`Oil Lamp` **0** |
| 4 | `loadout-guide.md` / `beginner-loadouts.md` | 精确负重阈值（70%/90% 切 15%/30% 速度）、`Flare`、`Old Map`、`Spirit Bell`、`Whisper Charm` | **`flare` 全语料 0 命中**；负重百分比无任何来源 |
| 5 | `maps-locations-guide.md` 全页 | 8 个岛/地点名（Isle of Voices / Catacombs / Sunken Grotto / Shallow Graves / The Hollow Woods / The Deep Warrens / Mansion of Fools / The Mound Interior） | **本站有 `Mira Isle` 编造地名前科** —— 建议优先专项核验 |
| 6 | `solo-guide.md` | 「Close your eyes for 3 seconds. Hallucinations despawn.」 | 无来源的精确机制 |
| 7 | `boss-weakness-drops-chart.md` / `legendary-hunts.md` | `The Crawling King` / `The Gilded Widow` 等 Boss 名 + 掉落物 + 精确数值 | 未核验 |

> **建议**：立 **fact-sweep 第二批次**，按「每页独立取证 → 判定 → 处置」逐页处理，
> 优先级建议 `perks-guide` / `nightmare-mode` / `crafting-recipes`（整套系统级编造嫌疑最高），
> 其次是 `maps-locations-guide` 的**地名**（编造地名是本站 AdSense 前科）。

---

## 八、自检

- 改动全部落在 `themoundwiki/`（11 文件）✅；**未触碰 `sephiriawiki/` / `spiritvalewiki/` / `tearsofmetalwiki/` / `grainrotwiki/`** ✅
  （`git status` 中 `tearsofmetalwiki/*` 与 `.agent/expand-daily.json` 的改动为**主 Agent 并行任务**产生，非本 Agent 所为）
- **未** `git commit` / `git push` ✅；**未**改 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md` ✅
- 用 `pnpm install` + `pnpm build`（**未用 npm**）✅；用全局 `vercel` 58.9.4（**未用 `npx vercel`**）✅
- **未用 `next/font/google`** ✅
- **零编造**：所有引文均来自 HTTP 200 通道并附 permalink；**过程中发现并纠正了自己 3 处引文错误**
  （2 个 steamid 与 1 个日期在初稿中被写错，已按 reviews API 实测值更正）
- **未**在无一手证据时保留任何精确数值 ✅
- **未**把 `HTTP=000` / `size=0` 记为 PASS ✅
