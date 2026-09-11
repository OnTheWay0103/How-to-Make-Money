# FIX 报告 — sephiriawiki 版本一致性校准（1.0.31 → 1.0.33）

> 任务: FIX-9/12-SEPHIRIA-VERSION | 站点: sephiriawiki | 日期: 2026-09-12
> 触发: 官方 **1.0.33 已于 2026-09-11 发布**，站内多处「latest build = 1.0.31」成为过时现在时断言；9/11 那轮跨页刷新（1.0.30 → 1.0.31）的结论已被推翻。
> 判定: **PASS**

---

## 1. 1.0.33 核验（一手来源，自行读取）

### 1.1 取源过程（含网络障碍与绕行）

| 通道 | 结果 |
|---|---|
| `curl https://store.steampowered.com/app/2436940/`（默认 DNS） | ❌ 超时。**本机 DNS 被污染**：`store.steampowered.com → 59.151.137.185`（错误）、`steamcommunity.com → 31.13.88.26`（Facebook 段） |
| `api.steampowered.com` / `store.steampowered.com/api/appdetails` | ❌ 超时（与派单描述一致） |
| cloudflare / google / 1.1.1.1 DoH | ❌ 被 reset / 超时 |
| **AliDNS DoH（`223.5.5.5` / `dns.alidns.com`）** | ✅ 返回真实 A 记录 `23.45.138.131` |
| **`curl --resolve store.steampowered.com:443:23.45.138.131`** | ✅ **HTTP 200，34923 bytes** —— 拿到商店页 HTML 内嵌官方公告 JSON |

**结论：派单所述「商店页 HTML 内嵌官方公告 JSON」通道成立**，前提是先经 AliDNS DoH 取得真实 IP 再 `--resolve` 直连（本机 DNS 污染是此前所有直连失败的原因，不是 Steam 侧封锁）。

商店页 `var StoreDefaults` 内 `PartnerEventStore` 数组含 3 条事件：

| # | event_name | gid | posttime (UTC) |
|---|---|---|---|
| 0 | See you at Tokyo Game Show 2026! | 692020124159312295 | 2026-09-11 08:42:50 |
| **1** | **1.0.31 Update** | 692020124159312087 | **2026-09-10 15:19:54** |
| **2** | **1.0.33 Update** | 692020124159312357 | **2026-09-11 12:45:55** |

> **1.0.32 不存在**：通告流中 1.0.31 与 1.0.33 直接相邻，全页 `1.0.32` 字符串命中 0。

### 1.2 1.0.33 发布日期

**2026-09-11**（posttime 1789130755 = 2026-09-11 12:45:55 UTC；即北京时间 9/11 20:45，与 17173 镜像发布时刻 22:36 相符）。全球时区下均为 **September 11, 2026**。

### 1.3 1.0.33 完整变更清单（逐条，取自官方公告原文正文）

公告正文共 3448 字符，编号 `[h2]1.0.33[/h2]` 段落全文如下：

**开头 Known Issues（官方主动挂出的已知问题）**
- 玩家报告**敌人穿墙移动**。官方怀疑由 **1.0.31 为修复终章卡角问题而引入的新碰撞系统**导致，但**尚未定位根因、无法复现**，征集玩家录像（需附游戏版本、配置、是否装 mod）。

**Bosses**
- `[h5]Demonic Grimoire[/h5]` — Improved a miniboss pattern that could hit the player repeatedly in quick succession.（改善某个小型 Boss 的弹幕模式，此前可能让玩家在短时间内被连续命中；**无 🥕**）
- `[h5]Qliphoth[/h5]` — 🥕 Fixed an issue where the game could not be paused or abandoned when the player and the boss died at the same time.

**Artifacts（2 个）**
- **Meteorite Pauldrons** — ① Fixed an issue where certain Solar Blade-related bonuses were not applied to the damage dealt upon retrieving the Solar Blade. ② Fixed an issue where the damage dealt when retrieving Solar Blades was **doubled** in certain situations.
- **Master's Tsuba** — Changed its effect.
  - Before: Weapon Damage +5/10/15；Sheath/Unsheath 无敌时间 **0.05/0.15/0.25 秒**
  - After: Weapon Damage +5/10/15；Sheath/Unsheath 无敌时间 **40/70/120%**

**Weapons（1 个）**
- **Heidi** — Updated the effect text to match the actual effect.（**仅文案对齐，无任何数值变更**）

**Costumes（1 个）**
- **Scholar Lizard** — 🥕 Fixed an issue where the costume effect could be removed by a certain weapon.

**UI**
- 🥕 Adjusted some text to read more naturally.

**Bug Fixes**
- 🥕 Fixed an issue where the **Comprehensive Training Grounds** tutorial popup could appear while the ending popup was open.

**结构尾部**：Discord 链接 `discord.gg/g7AaeBuyMV`、日志路径 `C:/Users/{PC}/AppData/LocalLow/TEAMHORAY/Sephiria`（Player.log / Player-prev.log）、邮箱 `team.horay.game@gmail.com`。

### 1.4 与派单转述的比对（**派单不完整，已按官方原文修正**）

| 派单转述 | 官方原文核对 | 判定 |
|---|---|---|
| 「约 1 个 Boss 弹幕」 | 实为 **2 条 Boss 条目**：Demonic Grimoire（弹幕模式）+ **Qliphoth（同时死亡时无法暂停/放弃的修复，带 🥕）** | ⚠️ 派单漏了 Qliphoth 条目，已按原文补全 |
| 「2 个神器」 | ✅ 吻合（Meteorite Pauldrons、Master's Tsuba） | ✅ |
| 「Heidi 文案」 | ✅ 吻合，且原文明确**无数值变更** | ✅ |
| 「Scholar Lizard 修复」 | ✅ 吻合，带 🥕 | ✅ |
| 「UI 文案」 | ✅ 吻合，另加 1 条 Bug Fix（训练场教程弹窗） | ✅ |
| （派单未提） | **官方开篇 Known Issues**：敌人穿墙 + 归因 1.0.31 新碰撞系统 | ➕ 原文有，已写入 |

> **内容量判定成立**：新增内容 = 0（无新升级、无新神器、无新区域），2 个神器均为修复/调整，1 个武器仅文案。**不足以单独成篇**，按派单要求作为**附注并入 1.0.31 页**，未拔高为「大更」。

### 1.5 交叉验证

- **17173 镜像**（站内既有来源政策认可的官方镜像）：`news.17173.com/content/09112026/223643091.shtml`，发布 2026-09-11 22:36:43，标注【来源：steam】，内容与商店页 JSON **逐条一致**（含 2 条 Boss、2 个神器、Heidi、Scholar Lizard、UI、错误修复）。独立第二通道，互证通过。

---

## 2. 全站 grep 结果

命令：`grep -rniE "1\.0\.3[0-9]|latest build|latest patch|latest version|newest|most recent|current build|current patch" sephiriawiki/ --include=*.md --include=*.ts --include=*.tsx --include=*.json`

**命中 8 个文件 / 41 行**：

| 文件 | 行数 |
|---|---|
| `content/guides/patch-1-0-31-build-changes-guide.md` | 13 |
| `content/guides/coop-freeze-recovery-guide.md` | 8 |
| `content/guides/crash-launch-black-screen-fix-guide.md` | 7 |
| `content/guides/controller-casting-keybind-fix-guide.md` | 5 |
| `content/guides/save-file-guide.md` | 3 |
| `content/guides/costume-stats-and-character-unlocks-guide.md` | 3 |
| `content/guides/costumes-guide.md` | 1 |
| `lib/guides.ts` | 1 |

---

## 3. 逐处判定（该改 / 不该改 + 依据）

### 3.1 该改并已改（6 处现在时断言 + 1 处被 1.0.33 推翻的数值）

| # | 文件:行 | 原文 | 判定依据 | 处置 |
|---|---|---|---|---|
| 1 | `patch-1-0-31-...md:77-78` | 「**Q: Is 1.0.31 the latest build?** A: **Yes**, as of September 11, 2026」 | **现在时断言，且今日即为假**（9/11 12:45 UTC 起最新已是 1.0.33）。这是全站最直接的矛盾源，9/11 那轮把它写成 "Yes" 正是被推翻之处 | 改为「**No.** The current build is **1.0.33**, posted September 11, 2026 …」，并保留 1.0.31/1.0.30 的史实顺序 |
| 2 | `save-file-guide.md:63` | 「the **latest** confirmed build as of **September 10, 2026** is **1.0.31**」 | 现在时断言 | 「…1.0.31 followed on September 10, 2026, and the **current build as of September 11, 2026** is **1.0.33**」 |
| 3 | `save-file-guide.md:88` | 「Update to the **latest build** — **1.0.31**, posted September 10, 2026…」 | 现在时断言（且是行动指令） | 改为 **1.0.33**, posted September 11, 2026 |
| 4 | `coop-freeze-recovery-guide.md:55` | 「prevention matters even on the **current build** (**1.0.31**, September 10, 2026)」 | 现在时断言 | 改为 **1.0.33**, September 11, 2026，并注明 1.0.31/1.0.33 均未改冻结类 |
| 5 | `coop-freeze-recovery-guide.md:106` | 「The **current build** is **1.0.31** (September 10, 2026)」 | 现在时断言 | 改为 **1.0.33**，并如实补「1.0.31/1.0.33 通告均无冻结类修复」（[Unconfirmed] 复现状态**保留不动**，未假设已修） |
| 6 | `crash-launch-...md:105` | 「Make sure Sephiria is on the **current build** (**1.0.31**, September 10, 2026 …)」 | 现在时断言 | 改为 **1.0.33**；**1.0.30 是 Deck 修复出处**的史实归属不改 |
| 7 | `patch-1-0-31-...md:43` | 表格 Rusty Tsuba → Master's Tsuba「invincibility **+0.05/0.15/0.25 s**」 | **不是版本号问题，是事实被 1.0.33 推翻**：官方把该数值改为 40/70/120%。留着即让读者按错数值规划 | 保留 1.0.31 原值（那是该补丁的史实）**并加 `[superseded by 1.0.33 — see the appendix]` 指针**，在附注中给出前后对照 |

**附带改动（3 处过期「前沿」引用，同类滞后）**

| # | 文件:行 | 原文 | 依据 | 处置 |
|---|---|---|---|---|
| 8 | `coop-freeze-recovery-guide.md:62` | 「whether **1.0.31** (September 10, 2026) shipped one is **[Unconfirmed]**」 | 该句把 1.0.31 当作未确认的「未知前沿」，与站内他处「当前=1.0.33」冲突 | 改为「no patch note **through 1.0.33** (September 11, 2026) lists it」——1.0.31 与 1.0.33 通告**已全文读过**，均无 reconnect，故由 [Unconfirmed] 升级为**可核验的否定**（未编造） |
| 9 | `coop-freeze-recovery-guide.md:100` | 「Not live as of **1.0.30** …whether **1.0.31** changed that is [Unconfirmed]」 | 同上 | 改为「Not live as of **1.0.33** (September 11, 2026)」 |
| 10 | `coop-freeze-recovery-guide.md:109` | 「no patch note through **1.0.30** … whether **1.0.31** added one is [Unconfirmed]」 | 同上 | 改为「no patch note **through 1.0.33**」 |
| 11 | `coop-freeze-recovery-guide.md:111` | Source note 只列到 1.0.30 的镜像 | 本次新增依据 1.0.31/1.0.33 通告，出处须交代 | 补「…and the Steam "1.0.31 Update"(September 10, 2026) and "1.0.33 Update"(September 11, 2026) announcements, both read in full」 |

**元数据同步**：4 个被改文件的 frontmatter `updated` → `2026-09-12`；`crash-launch` 正文可见行 `Updated: September 6, 2026` → `September 12, 2026`（该文件已实质改内容，正文日期不得停留在 9/6）；1.0.31 页 `keywords` 增补 `"sephiria 1.0.33"`，`sources` 增补一条 Official 条目记录 1.0.33 公告出处。

### 3.2 命中但**不该改**（版本史/时间线，改了即制造错误）

| 文件:行 | 内容 | 不改理由 |
|---|---|---|
| `coop-freeze-recovery-guide.md:11` | 补丁史元数据：1.0.23/1.0.24/1.0.28/1.0.30 各修哪类冻结 | **版本史归属**，各修复确实发生在该版本 |
| `coop-freeze-recovery-guide.md:50/51/52/53` | 「fixed in **1.0.24**」「fixed in **1.0.25**」「fixed in **1.0.28/1.0.29**」「patched in **1.0.30**」 | 逐条历史事实，与「当前最新」无关 |
| `coop-freeze-recovery-guide.md:111`（既有部分） | 引用 1.0.23/1.0.24/1.0.28/1.0.30 的 17173 镜像 | 来源出处，改则失据 |
| `controller-casting-keybind-fix-guide.md:11/49/51/58/85`（5 行） | 「the Steam **1.0.30** recap lists…」「**1.0.26** 新增快捷施法槽」「**1.0.28** 修 Hard Mode 难度」 | 全部指「某则历史公告的内容」，且**已明写 1.0.30 是 cumulative recap**，非「最新版本」断言。**该文件 0 改动** |
| `crash-launch-...md:11` | 元数据：0.12.3 修黑屏、1.0.30 改 Steam Deck 关闭 | 版本史归属 |
| `crash-launch-...md:42` | 表格「Official fix in patch **1.0.30** (August 20, 2026)」 | 该 Deck 修复确实在 1.0.30 |
| `crash-launch-...md:112` | 「later patches added further stability work (including the **1.0.30** Steam Deck fix)」 | 史实，未断言 1.0.30 为最新 |
| `crash-launch-...md:15/28/120` | 「the **newest 1.0.x builds**」/「the **newest 1.0.x build**」 | **不含任何具体版本号**，不构成矛盾（1.0.33 即为 1.0.x 最新，表述仍成立） |
| `patch-1-0-31-...md:2/3/7/20/69/74/113` | 标题/description/keywords/正文「1.0.31 于 9/10 发布」「1.0.31 移除了 Magic Wand」「1.0.31 新增 Comprehensive Training Grounds」 | **该页主题即 1.0.31 这个补丁本身**，全是历史陈述，正确无误 |
| `save-file-guide.md:63`（既有部分） | 1.0.24 / 1.0.28 / 1.0.29 / 1.0.30 的修复归属 | 史实，仅「latest」从句被改 |
| `costumes-guide.md:13`、`costume-stats-...md:11/20/81` | 已引用「1.0.33 (September 11, 2026)」 | **今日新增页，本就正确**，0 改动 |
| `lib/guides.ts:103` | 代码注释「sorted by most recently updated」 | 与版本无关 |

### 3.3 判定规则（写入报告供复核）

1. **改**：主语是「当前/最新构建」的**现在时断言**（`latest` / `current build` / `newest version` + 具体版本号）→ 必须指向 1.0.33。
2. **改**：原文明确写出但已被 1.0.33 公告**直接推翻的数值/效果**（Master's Tsuba）→ 保留原值 + 附注对照 + 指针。
3. **改**：把 1.0.31 当作「未知前沿」的悬置断言（[Unconfirmed] 的对象是 1.0.31）→ 前沿推进到 1.0.33；有原文证据的由 [Unconfirmed] 升级为可核验否定。
4. **不改**：`X 于 Y 日发布` / `fixed in X` 形式的版本史与来源出处。
5. **不改**：不含具体版本号的泛指（`newest 1.0.x builds`）。

---

## 4. 1.0.33 落地方式（并入 1.0.31 页附注）

**未新建页面**。在 `content/guides/patch-1-0-31-build-changes-guide.md` 末尾、`## Related Guides` 之前新增 `## Appendix: What 1.0.33 Changed (September 11, 2026)`，含：

- 开篇定性句：「**1.0.33 is a correction pass, not a second feature patch.** It landed the day after 1.0.31, adds **no** weapon upgrades, **no** new artifacts and **no** new areas」——明确**不拔高为大更**。
- 分节如实复刻官方结构：Bosses（2 条）/ Artifacts（2 条，Master's Tsuba 含 Before-After 对照）/ Weapons（Heidi）/ Costumes（Scholar Lizard）/ UI 与 Bug Fixes / 官方开篇 Known Issues（含「归因于 1.0.31 新碰撞系统、官方未能复现」的如实表述）。
- 附注行数 ≈ 26 行，与本体的 1.0.31 内容量成比例。
- Related Guides 增补一行指向 `artifacts-guide` + `costumes-guide`（1.0.33 两个修复的落点），两 slug 均真实存在。

**未编造声明**：附注中每个数值/条目均来自官方公告 JSON 原文，无一条为推断或转述加工；官方未给出数值的（Heidi）明写「No numeric change was announced」。

---

## 5. QA quick 自查

| 检查项 | 结果 |
|---|---|
| 站内是否仍有「latest / current = 1.0.31」矛盾 | **0 命中**（见 §7 证据链） |
| `related` slug 是否全部真实存在 | ✅ 37 篇 guide 全量校验，**0 broken** |
| 正文内链 `/guides/*` 是否全部真实存在 | ✅ 同上脚本覆盖正文链接，**0 broken** |
| 是否触碰 sephiriawiki 以外站点 | ✅ 否（`git status` 仅 4 个 sephiriawiki 文件） |
| 是否触碰 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md` | ✅ 否（`git status` 三项均空） |
| 是否使用 npm | ✅ 否（全程 pnpm） |
| 是否 git add / commit / push | ✅ 否（留给主 Agent 统一提交） |
| 「不该改」的版本史条目是否被误改 | ✅ 否（controller-casting 5 行、crash-launch 史实 3 行、coop 史实 4 行全部原样保留） |

**QA 判定：PASS**

---

## 6. 构建与部署

**构建**（`sephiriawiki/`）：
```
pnpm install                       → ok
pnpm run build                     → ✓ Compiled successfully in 760ms
                                     Finished TypeScript in 865ms
                                     ✓ Generating static pages (50/50) in 483ms
                                     零错误零警告
```

**部署**：`./deploy-wiki-site.sh sephiriawiki`
```
新部署: https://sephiriawiki-6a4cthd9u-zhaoq0103s-projects.vercel.app
✅ 部署完成: https://sephiriawiki.vercel.app/ (HTTP 200)
```

**alias 校验**（`vercel inspect https://sephiriawiki.vercel.app`）：
```
id      dpl_72rCN8qPJCAk2726FsMCa3Aa12zn
status  ● Ready
url     https://sephiriawiki-6a4cthd9u-zhaoq0103s-projects.vercel.app
created Sat Sep 12 2026 05:29:48 GMT+0800  [30s ago]
Aliases ╶ https://sephiriawiki.vercel.app
        ╶ https://sephiriawiki-zhaoq0103s-projects.vercel.app
```
→ **alias 指向本次新部署**（非「只查首页 200」）。

---

## 7. 线上内容级验证（证据链）

### 7.1 改动页 HTTP + 新串渲染

| 路径 | HTTP | 可见 HTML 中的新串 |
|---|:--:|---|
| `/guides/patch-1-0-31-build-changes-guide` | **200** | ✅「Appendix: What 1.0.33 Changed」「1.0.33 is a correction pass」「No. The current build is」「superseded by 1.0.33」 |
| `/guides/save-file-guide` | **200** | ✅「current build as of」「1.0.33」「1.0.31 followed on September 10, 2026」 |
| `/guides/coop-freeze-recovery-guide` | **200** | ✅「1.0.33」「no patch note through」 |
| `/guides/crash-launch-black-screen-fix-guide` | **200** | ✅「1.0.33」「Updated: September 12, 2026」 |

> 验证方式：curl 取线上 HTML → 剥离 `<script>`（RSC flight payload）→ 去标签取**可见文本**再匹配，避免 payload 重复导致误判。

### 7.2 旧断言残留 = 0（全站，非抽样）

对**本机构建产物全量 47 个 HTML**（覆盖全部 37 篇 guide + 首页/FAQ/terms 等）扫描 3 条对抗性正则：

```
P1 = (latest|current|newest|most recent) + (build|patch|version|update) + …1.0.31
P2 = 1.0.31 + …(is the latest|is the newest|is the most recent)
P3 = as of September 1[01], 2026 … is 1.0.31
→ scanned 47 built HTML files; residual 'latest/current = 1.0.31' assertions: 0
```

线上 4 个改动页同样扫描：**residual = 0**（各页独立复核见 §7.1 表）。

**结论：站内已不存在「latest / current = 1.0.31」类自相矛盾陈述。**

---

## 8. 改动清单

```
 M sephiriawiki/content/guides/coop-freeze-recovery-guide.md   | 14 ++++----
 M sephiriawiki/content/guides/crash-launch-black-screen-fix-guide.md |  6 ++--
 M sephiriawiki/content/guides/patch-1-0-31-build-changes-guide.md | 40 +++++++++++++++++++---
 M sephiriawiki/content/guides/save-file-guide.md              |  6 ++--
 4 files changed, 49 insertions(+), 17 deletions(-)
```

**未提交**：按派单要求，`git add` / `commit` / `push` 留给主 Agent。

---

## 9. 遗留与建议（不阻塞本次验收）

1. **本机 DNS 污染是长期风险**：`store.steampowered.com` 被解析到 `59.151.137.185`、`steamcommunity.com` 被解析到 `31.13.88.26`（Facebook 段）。后续凡需直连 Steam 的侦察/核验任务，**须先经 AliDNS DoH 取真实 IP 再 `--resolve`**，否则会误判为「Steam 不可达」。建议写入侦察员 Profile。
2. **正文 `Updated:` 行与 frontmatter 存在站点级历史不同步**：另有 7 篇（staff-sword-shield/crossbow/hard-mode/greatsword/chapter-6/dagger/staff-build）正文日期与 frontmatter 不一致（如 sword-shield 正文 Aug 11 / frontmatter 2026-08-21）。本次仅同步了**被改动的** crash-launch 一篇，其余未纳入范围，建议主 Agent 决定是否单独派单统一。
3. **1.0.33 的 Known Issues（敌人穿墙）仍在开放中**，且官方自述由 1.0.31 碰撞系统引起。若官方后续修复，`patch-1-0-31-...md` 附注的 Known Issues 段需再更新——可作为下次触发的检查点。
