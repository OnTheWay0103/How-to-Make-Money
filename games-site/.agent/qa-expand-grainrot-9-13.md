# QA 报告 — QA-EXPAND-GRAINROT-9/13

- 日期: 2026-09-13
- 模式: quick（残留扫描 + 编造检查 + 内链 + 事实一致性 + 产物级表格回归 + 线上验证）
- 审核员: QA 审核员（岗位卡 `docs/agents/05` + Profile `docs/agents/06`）
- 范围: grainrotwiki 本轮 1 新增 + 2 修改文件
- 结论: ✅ **PASS**（0 🔴 / 0 🟡 / 0 🟢）

> ⚠️ **DNS 诚实记录**：本轮运行期间本机默认解析器曾对 `grainrotwiki.vercel.app` 返回 `HTTP:000 / size=0`（DNS 投毒现象，见 `CLAUDE.md`；同一现象本轮也命中了 `reddit.com` 与 `steamcommunity.com`）。按任务规则 **HTTP=000 或 size=0 一律视为「未验证」，MUST NOT 记为 PASS**。因此本报告第七节全部线上数据**一律**以 `dig @8.8.8.8 grainrotwiki.vercel.app +short` 取得的真实边缘 IP + `curl --resolve grainrotwiki.vercel.app:443:<IP>` 实测得出，不依赖默认解析器。
>
> 诚实补充：报告落盘后复测，默认解析器**已恢复**（`HTTP:200 SIZE:67869`，与 `--resolve` 结果逐字节一致），说明该故障是**间歇性**而非持续性 —— 但这不改变上述验证方法，且 `--resolve` 结果与默认解析结果一致，构成互证。

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `grainrotwiki/content/guides/outpost-decoration-stats-guide.md` | 🆕 新增 | Grain Rot Outpost Decoration & Room Stats — How Decorating Your Base Raises Your Stats（31→32 篇） |
| 2 | `grainrotwiki/content/guides/outpost-upgrade-guide.md` | ✏️ 双向内链 | 第 4 节加「Where to go next」指向新页；Related Guides 加新页条目（防关键词自噬） |
| 3 | `grainrotwiki/content/home-content.md` | ✏️ 导航注册 | Quick Navigation 表加新页一行；`updated` 2026-09-04 → 2026-09-13 |

**未改**：`app/`、`components/`、`lib/`、`vercel.json`、其他任何站目录。未执行 `git add/commit/push`。

> ⚠️ **诚实备注（导航注册机制）**：任务要求「若存在 `content/home-content.md` 一类导航注册机制 → 先确认再按机制注册」。实测该文件**被孤立** —— `grep -rn "home-content" app/ lib/ components/` 零命中，无任何代码读取它，注册后**无渲染效果**。本轮已按要求登记一行，但它不是有效导航面；真正的 `/guides` 索引由 `lib/guides.ts` 的 `fs.readdirSync` 自动发现（无需注册，见第七节实测 32 张卡片）。

---

## 二、反馈采集记录（第 1 步）

| 通道 | 今日实测 | 本轮实际取得 |
|------|----------|--------------|
| Steam 评测 `appreviews` filter=recent | ✅ **HTTP 200** / 101,575 B | 英文近期评测全量（去重后 172 条语料） |
| Steam 评测 `appreviews` filter=negative | ✅ **HTTP 200** / 78,378 B | 负评主题聚类 |
| Steam 官方公告 `ISteamNews` appid=4450620 | ✅ **HTTP 200** / 39,878 B | 最新补丁仍为 **1.09（8/28）——9 月无新补丁**；demo「Best Build」征集（6/12）、Patch 1.08 新增 7 个可建造构造（8/26）、8/12 roadmap（9 月 Deep Layers / 10 月 Halloween 三层） |
| Steam 商店页 `appdetails` appid=4450620 | ✅ **HTTP 200** / 31,075 B | Outpost 解锁文案、`Persistent Outpost rebuilding and progression`、`Tactical carpentry with interactive furniture` |
| Steam 社区讨论区 `steamcommunity.com` | ❌ **HTTP:000**（curl exit 28 超时） | 无 |
| Reddit `reddit.com/r/GrainRot/new.json` | ❌ **HTTP:000**（curl exit 28 超时；长期性不可用，非本轮新增） | 无 |
| WebSearch 补充 | ⚠️ 仅作交叉印证 | 仅用于 1.0「第二层 Outpost」的发布方公告佐证（TechTimes 上线周报道），页面已如实标注归属 |

**诚实缺口记录**：Reddit（`reddit.com/r/GrainRot/new.json`）与 Steam 讨论区今日均为 `HTTP:000`（curl exit 28 超时），**按规则记为「不可用」，未作为任何断言的来源**。全页所有玩家侧主张 100% 来自 Steam 评测通道（可回溯到具体评测日期），无一条来自抓不到的讨论帖。
> 归因诚实说明：本轮同一时间段 `grainrotwiki.vercel.app` 的默认解析也出现过 `HTTP:000`，故这两条的 000 **可能部分源于本机 DNS 投毒而非目标站真不可达**。但按任务规则 000 一律不得升格为可用，且 Reddit 通道自 2026-09-12 起已长期不可用，因此本报告仍按「不可用」计，**不声称其为「已验证不可达」**。若需坐实，应对这两条同样加 `--resolve` 用真实 IP 复测 —— 本轮未做，故不下结论。

**历史否决记录已先读**（`.agent/expand-daily.json` → `skips`，共 23 条）：grainrotwiki 9/6 否决四条候选（符号含义已被 `rot-debuff-guide` 覆盖 / 工具耐久与 `weapons-tools-guide` 编辑准则冲突 / v1.08-v1.09 仅 pc6 单源不可溯 / VaporLens 标签已覆盖）。本轮选题**刻意避开以上四条**。

---

## 三、选题四条判据（第 2 步）

| 判据 | 证据 | 结论 |
|------|------|:--:|
| **高频**（≥3 独立来源） | ① 官方商店页解锁文案含 `stat upgrades` + `interactive furniture`（官方源）；② 官方 demo 公告「Share 2 to 3 screenshots of your best Outpost room」+ Patch 1.08（官方源）；③ Steam 评测中 **~10 条相互独立**的时间戳分散评测（8/11 – 9/9）分别独立描述「装饰→房间等级→属性」系统，含正面与抱怨两侧 | ✅ |
| **具体** | 具体到「放装饰到底加不加属性 / 房间等级怎么算 / 什么东西会把已升级的房间打回去」，不是泛泛的「游戏难」 | ✅ |
| **缺口** | `grep -rin "decorat" content/ app/ components/` 在本轮改动前**全站零命中**；对照既有 31 篇文件名 + 逐篇正文（`outpost-upgrade-guide` 明确写「房间名/费用未经官方文档化」，从未提及装饰转属性）→ **真缺口，非自噬** | ✅ |
| **可溯源** | 官方 4 条（Outpost 有 stat upgrades / 强度门控深度 / 永久性 / 房间被官方展示）与社区主张严格分层；房间数 12、~40 件装饰、等级掉落均带日期标注并逐条 `[Unconfirmed]`；**无任何房间名、属性名、费用、等级上限、物品-加成数值**（因无可溯源来源，按 `weapons-tools-guide` 既有编辑准则一律不写） | ✅ |

**路径 ②（系统清单驱动）执行记录 —— 本轮破局点**：
Grain Rot 9 月确认无新补丁（最新 1.09 / 8/28），路径 ① 抱怨驱动产出的高频抱怨**已基本被现有页面吃下**（Early Access 未完成 → `release-date-faq` / `full-release-guide` / `patch-notes-guide` 三页；难度 → `tips-and-tricks` / `beginner-guide`；单人 → `co-op-guide`；Spark/附身 → `beginner-guide`；服务器浏览 → `multiplayer-matchmaking-guide`；恶意玩家 → `co-op-guide`；存档丢失 → `progress-save-recovery`）。据此**未直接判 SKIP**，转路径 ②：把官方商店页 1.0 解锁清单逐项对照站内覆盖，发现 **`stat upgrades` / `interactive furniture` / `best Outpost room` 这一整块官方明列的系统，站内零覆盖**，而社区侧又有 ~10 条独立评测在对它做实证描述 —— 官方锚 + 社区实证同时成立。此路径不依赖新补丁，故 9 月无补丁不影响本题成立。

---

## 四、编造检查（第 4 步）

| 被检断言 | 核验结果 |
|----------|:--:|
| 商店页逐字 `Unlock interactive furniture, stat upgrades, rescued survivors, and stranger ways to survive the next descent.` | ✅ 商店页逐字命中 |
| 商店页逐字 `The stronger the outpost becomes, the deeper you can afford to go.` | ✅ 逐字命中 |
| `Persistent Outpost rebuilding and progression` / `Tactical carpentry with interactive furniture` | ✅ 商店页逐字 |
| demo「Best Build」征集与 `Share 2 to 3 screenshots of your best Outpost room.` | ✅ 官方公告（6/12）逐字 |
| Patch 1.08 新增 7 个可建造构造（8/26） | ✅ 官方公告 |
| 8/12 roadmap：9 月 Deep Layers Update / 10 月 Halloween Update 开第三层 | ✅ 官方公告 |
| 1.0 新增**第二层 Outpost** | ⚠️ 来自发布方上线公告（TechTimes 上线周报道交叉印证），页面 frontmatter 与正文 Sources **均已如实标注归属为「发布方公告 + 媒体覆盖」，未升格为商店页逐字** |
| `stat bonuses are tied to how you decorate your home` | ⚠️ **社区**，标 `[Unconfirmed]`，带评测日期 |
| `roughly 40 objects` / `12 rooms with unique effects to fill` | ⚠️ **社区计数**，标 `[Unconfirmed]`，注明「玩家计数、非官方」 |
| `Each Room Having Its Own Level, And Corresponding Stat That It Raises Per Level` | ⚠️ **社区**（9/3 评测），标 `[Unconfirmed]` |
| `Nothing you build stays put` / NPC 把物件撞飞「destroys both your room bonuses and the objects themselves」 | ⚠️ **社区**（8/11 评测），标 `[Unconfirmed]`，并加限定语「worst in the entrance and basement rooms」如实照录 |
| 合作队友放物品导致房间 Level 2 → Level 1 | ⚠️ **单条社区报告**，页面明确写「A single report, possibly a bug」，标 `[Unconfirmed]` |
| `good luck figuring out how to setup a room without seeing if stuff Syncs for a boost or ruins each other` | ⚠️ **社区**（8/21 评测），标 `[Unconfirmed]` |
| `All we do is spam rooms with the same item` / 请求 `add room item lim[it]` | ⚠️ **社区**（9/5 评测），页面明确写「That is a complaint about the strategy, not proof it fails」 |
| `you don't lose progress on your stats if you die` / `max stats building crates of decor` / `a touch of your own decorations for buffs` / `It does get super easy when you level your rooms enough` / `we update our house by decorating, making it easier to go deeper` | ⚠️ **社区**（9/1 – 9/9 评测逐条带日期） |
| 房间名 / 属性名 / 升级费用 / 等级上限 / 物品-加成对照表 | ✅ 核实为**不存在可溯源来源**，页面 `What Nobody Has Confirmed` 明确写出该空缺，并写明「Any guide quoting exact costs is guessing」 |
| 化妆品（hats/paints）与 Outpost 家具是两条不同轨道 | ✅ 依据商店页 `Questionable cosmetics` 与 `interactive furniture` 分列，页面写成显式消歧句，避免与 `outpost-upgrade-guide` 的 Cosmetics 小节冲突 |

**引文逐条脚本核验**：新页 23 处引号内字符串全部对照本轮抓取的 Steam 评测语料 + 商店页 + 公告 JSON 做程序化匹配 → **23/23 命中，0 miss**。

**结论**：**无编造**。新页第 43–50 行设独立小节 `What Is Actually Confirmed`，把「官方」与「玩家报告」划出显式分界线；未确认项一律 `[Unconfirmed]`；一切可能被读成数值/名称的内容（房间名、属性名、费用、等级上限、物品加成）**主动留空并说明原因**。

---

## 五、Residue 扫描（第 4 步）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` / `{{%`（`content/` + `app/` + `components/`） | ✅ 0 命中 |
| 模板占位符 `lorem ipsum` / `TODO` / `FIXME` | ✅ 0 命中 |
| 跨站污染（witchspire / mistfall / aincrad / spiritvale / themound / sephiria / tearsofmetal / dressmaker / Vaulted Sky 定向扫描） | ✅ 0 命中 |
| 中文标记 / CJK 泄漏（`[\x{4e00}-\x{9fff}]`） | ✅ 0 命中 |
| 模板描述残留（`your game name` / `placeholder` / `site description here` / `example.com`） | ✅ 0 命中 |
| AI 陈词（`In the world of` / `Whether you're a` / `Remember to`） | ✅ 新页 0 命中 |
| 站名与工作室名 | ✅ `Beck & Branch Games` + `Neem Interactive`（`/terms` 线上实测 5 处 / 4 处命中） |
| 内链完整性 | ✅ **0 悬空** —— 32 篇全量比对：正文 `/guides/*` 与 frontmatter `related:` **全部命中实际文件**（脚本 `BROKEN_LINKS: 0`） |

**产物级表格回归（Profile 06 强制项，非源码阅读）**：

```
grep -ro '<td>-*</td>' .next/server/app/guides/ | wc -l   →  0
```

✅ 全 32 篇攻略产物 **零** 2026-09-12 归档的表格分隔行垃圾。新页产物另验证：`<table>` × 1（即 `The Short Answer` 表）、`<em>` × 3、无字面下划线泄漏（`_Cosmetics` 命中 0 —— 该处曾在首次构建中渲染为字面 `_..._`，已由 `*...*` 修正并重建复验）。

---

## 六、事实一致性（跨页，第 4 步）

| 检查项 | 结果 |
|--------|:--:|
| 新页 ↔ `outpost-upgrade-guide` **双向 Scope note** | ✅ 新页第 26 行指向 Outpost Guide；Outpost Guide 第 79 行「Where to go next」指回新页 —— 两侧各自声明职责边界（新页只管「装饰与房间属性」，Upgrade 页只管「升级顺序」） |
| 新页 ↔ Outpost Guide `Cosmetics` 小节冲突 | ✅ 已消歧：新页第 61 行明写化妆品与 Outpost 家具是两条轨道，避免读者把「装饰有加成」误读成「化妆品有加成」 |
| 新页 ↔ `multiplayer-matchmaking-guide` | ✅ 第 103 行合作归属未定项同时指向 Outpost Guide 与 Multiplayer Guide，与本轮两页既有表述一致 |
| 新页 ↔ `patch-notes-guide` | ✅ 第 105 行把 roadmap 判断权交给 patch-notes 页，并注明「包括本页在内，任何房间表都要先核对补丁」 |
| 「9 月无新补丁」与站内 `patch-notes-guide`（最新 1.09 / 8/28） | ✅ 一致，无自相矛盾 |
| 页脚 / `/terms` IP 归属 | ✅ 与商店页一致 |

---

## 七、构建与部署（第 5 步）

| 项 | 结果 |
|----|------|
| 依赖 | ✅ 本站无 `node_modules`，构建前 `pnpm install`（MUST NOT 用 npm） |
| 本地构建 | ✅ **EXIT=0**，`✓ Compiled successfully in 177ms`，`Generating static pages (45/45)` |
| 新路由预渲染 | ✅ `● /guides/outpost-decoration-stats-guide` 出现在 build 路由表 |
| 词数 | **1,471**（正文去 markdown / 链接文本保留，脚本实测）。同脚本对 9/12 页 `elevator-modifiers-fuse-guide` 得 1,439，而 9/12 QA 报该页 1,449 → 折算本轮 ≈ 1,481，**无论用哪种口径均 ≤1,500 且 ≥800** ✅ |
| 部署命令 | `vercel --prod --yes`（全局 CLI v58.9.4；`npx vercel` 会因 npm 11 把 `--prod` 展开成 `--production` 而报 `Missing script: "vercel"`，已改用全局二进制） |
| 本次生产部署 | `https://grainrotwiki-92frufl3g-zhaoq0103s-projects.vercel.app`（`dpl_41pLm4GMrqyNyBctNeP5W5FCtqxP`，`target=production`，`status=● Ready`，created 2026-09-13 05:10 GMT+0800） |
| 生产 alias 指向本次部署 | ✅ `vercel inspect` Aliases 段：`https://grainrotwiki.vercel.app` → 本次部署 |

### 线上内容级验证（真实 IP + `--resolve`，非仅首页 200）

真实边缘 IP：`dig @8.8.8.8 grainrotwiki.vercel.app +short` → **216.198.79.131**
全部请求以 `curl --resolve grainrotwiki.vercel.app:443:216.198.79.131` 发出（本轮默认解析器曾 `HTTP:000` 不可用；落盘后复测已恢复，且两种路径结果逐字节一致）。

| 验证项 | 实测证据 |
|--------|----------|
| 新路由 HTTP 200 且 body 非空 | `GET /guides/outpost-decoration-stats-guide` → **HTTP:200 SIZE:67869** |
| 新页 `<title>` 正确 | `Grain Rot Outpost Decoration &amp; Room Stats — How Decorating Your Base Raises Your Stats · Grain Rot Wiki` |
| 新页独有内容上线 | 命中 `How Decorating Your Base Raises Your Stats` ×3、`carrying the bonuses` ×2、`tied to how you decorate your home` ×3、`roughly 40 objects` ×2、`add room item lim` ×2、`September 13, 2026` ×4 |
| 字面下划线泄漏 | `_Cosmetics` 命中 **0**；`<em>` × 3（斜体渲染正常） |
| sitemap 收录 | `GET /sitemap.xml` → **HTTP:200 SIZE:7287**，slug 命中 **1**，`<loc>` 总数 **40** |
| 关联页修复已上线 | `GET /guides/outpost-upgrade-guide` → **HTTP:200 SIZE:56817**，指向新页的入链命中 **2**（正文 Scope note + Related Guides） |
| `/guides` 索引自动收录 | `GET /guides` → **HTTP:200 SIZE:103754**，新页卡片命中 **1** |
| `/faq` 可达 | **HTTP:200 SIZE:40838** |
| `/terms` 可达且归属正确 | **HTTP:200 SIZE:25337**，`Beck &amp; Branch Games` ×5、`Neem Interactive` ×4 |

---

## 八、结论

✅ **PASS** — 批准部署。**0 🔴、0 🟡、0 🟢**。

- 阻断项（编造 / 构建失败 / 部署不可达 / 模板残留）：**全部 0**。
- 编造检查：23/23 引文可回溯；官方与社区严格分层；不可验证数值主动留空。
- 产物级验证：32 篇攻略产物表格垃圾 **0**（9/12 归档缺陷未复发）。
- 内链：32 篇全量 **0 悬空**。

### 遗留建议（🟢，无阻断）

1. 新页含 **6 处 `[Unconfirmed]`** 社区主张（房间等级、物品数 12/40、物理掉落、合作降级、物品互斥）。**下次触发条件**：官方发布房间/属性清单，或 10 月 Halloween Update 开第三层 Outpost → 回填数值并撤标。
2. `content/home-content.md` **确认为孤立文件**（无任何代码引用），本轮登记的导航行**不产生渲染效果**。建议主 Agent 决策：要么接入渲染（改 `lib/` 或首页组件，属跨站模板级改动，须按 Profile 06 的「42 份复制体」规则全网络评估），要么停止把它当导航注册面。
3. 路径 ②（系统清单驱动）连续两轮（9/12、9/13）破局有效：**Grain Rot 9 月无新补丁，靠官方 1.0 清单逐项对照站内覆盖仍能开题**。9/12 报告已建议写入 `docs/agents/18` Profile，本轮再次印证 —— 建议主 Agent 落规则。
4. 本机默认 DNS 解析**间歇性**投毒：本轮运行期间对 `grainrotwiki.vercel.app`、`reddit.com`、`steamcommunity.com` 均出现过 `HTTP:000`（curl exit 28 超时），落盘后复测又全部恢复。本轮已按规则用 `--resolve` + 真实 IP 完成验证；建议把「默认解析 000 → 必须 `--resolve` 复测，MUST NOT 记为 PASS」写进 `docs/agents/06` 的线上验证规则，并注明该故障为**间歇性**（因此「验证时恰好 200」也不足以证明通道稳定）。
