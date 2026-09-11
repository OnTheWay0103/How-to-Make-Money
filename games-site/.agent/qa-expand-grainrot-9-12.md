# QA 报告 — QA-EXPAND-GRAINROT-9/12

- 日期: 2026-09-12
- 模式: quick（残留扫描 + 编造检查 + 内链 + 事实一致性）
- 审核员: QA 审核员（岗位卡 `docs/agents/05` + Profile `docs/agents/06`）
- 范围: grainrotwiki 本轮 1 新增 + 3 修改文件
- 结论: ✅ **PASS**（批准部署）

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `grainrotwiki/content/guides/elevator-modifiers-fuse-guide.md` | 🆕 新增 | Grain Rot Elevator Modifiers & the Fuse — What the Symbols Mean and How to Avoid Getting Stranded（30→31 篇） |
| 2 | `grainrotwiki/content/guides/full-release-guide.md` | ✏️ P0 事实修复 | 「开发者未公布 roadmap / DLC / 赛季 / 活动」为假，改为 8/12「What's Next for GRAIN ROT」 |
| 3 | `grainrotwiki/content/guides/release-date-faq.md` | ✏️ P0 事实修复 | FAQ「Will there be post-launch content?」原答「Unannounced…」已失真 |
| 4 | `grainrotwiki/app/faq/page.tsx` | ✏️ P0 事实修复 | 站级 `/faq` 同一问同一错的答案，与 content 层同步 |

---

## 二、反馈采集记录（第 1 步）

| 通道 | 可用性 | 本轮实际取得 |
|------|--------|--------------|
| Steam 官方公告（`ISteamNews/GetNewsForApp` appid=4450620） | ✅ 可用（须走 WebFetch） | **确认最新补丁仍为 1.09（8/28）——9 月无新补丁**（这也是本轮必须切路径 ② 的原因）；并取得 8/12 官方 roadmap 与 1.01（8/8）「Deep Layers coin/fuse pickup fix」 |
| Steam 商店页 appdetails（appid=4450620） | ✅ 可用 | 商店页媒体 caption 逐字 `view of the RNG fuses in the elevator`；1.0 新增清单（含 **Elevator modifiers**） |
| Steam 差评（`appreviews` filter=negative） | ✅ 可用 | 上线窗口负评中「unfindable fuse 导致本局无法完成」一条 |
| Steam 社区讨论区（steamcommunity.com） | ❌ WebFetch ECONNREFUSED；`curl` 000 | 仅能经 WebSearch 摘要取得（两条独立摘要互印），已按「社区报告」定级 |
| `opencli reddit` | ❌ AUTH_REQUIRED（长期性故障，非本轮新增） | 无 |
| Reddit / 媒体 | ⚠️ 仅 WebSearch 摘要 | 未用于断言级内容 |

**诚实缺口记录**：讨论帖原帖不可直抓，页内涉及符号含义的段落全部标注 `[Unconfirmed]` 并附原帖 URL，未升格为官方事实。Reddit 通道本轮仍不可用。

---

## 三、选题四条判据（第 2 步）

| 判据 | 证据 | 结论 |
|------|------|:--:|
| **高频**（≥3 独立来源） | ① 官方商店页 1.0 清单明列 `Elevator modifiers` + 媒体 caption `RNG fuses in the elevator`（官方源）；② 官方补丁公告 1.01 `Deep Layers coin/fuse pickup fix`（官方源）；③ Steam 社区讨论「Symbols meaning」（社区源）；④ 上线窗口 Steam 负评「unfindable fuse」 | ✅ |
| **具体** | 具体到「电梯符号各代表什么 / 引信（fuse）修饰符为什么会把全队困在关内」 | ✅ |
| **缺口** | `ls content/guides/` + 逐篇 grep `fuse` / `elevator` / `modifier` / `symbol` —— 站内此前**零覆盖**：`game-mechanics-systems-guide` 只提「dungeon modifiers」名词，`rot-debuff-guide` 只处理 Rot 与骷髅符号之争，均未触及电梯修饰符机制 | ✅ |
| **可溯源** | 官方三条（修饰符存在 / 引信是电梯设定的一部分 / 引信在 Deep Layers 且曾被修补）与社区主张严格分层；符号含义逐条 `[Unconfirmed]` | ✅ |

**路径 ②（系统清单驱动）执行记录 —— 本轮破局点**：先跑路径 ① 抱怨驱动，结论是**高频抱怨已基本被现有页面覆盖**（「游戏是否未完成」被 `release-date-faq` / `full-release-guide` / `patch-notes-guide` 三页吃下，不可再写，否则自噬）。据此**未直接判 SKIP**，转路径 ②：取官方商店页 1.0 新增清单与 8/12 官方 roadmap **逐项对照**站内覆盖，发现 **`Elevator modifiers` 这一官方明列的系统，站内整块缺失**。路径 ② 不依赖新补丁 —— Grain Rot 9 月确无新补丁（最新仍 1.09 / 8/28），该题依然成立。

---

## 四、编造检查（第 4 步 · 逐名词 WebSearch）

| 被检断言 | 核验结果 |
|----------|:--:|
| 「Elevator modifiers 是 1.0 新增系统」 | ✅ 官方发布方 1.0 公告清单逐字 |
| 商店页 caption `view of the RNG fuses in the elevator` | ✅ 商店页媒体逐字 |
| 「1.01 (2026-08-08) 修复 Deep Layers coin/fuse pickup」 | ✅ 官方补丁公告逐字 |
| 「核心循环 = Ride a cursed elevator into shifting underground ruins with your crew」 | ✅ 商店页逐字 |
| 引信修饰符会让电梯无法关门、须找到备用引信才能离开 | ⚠️ **社区报告**，页面标 `[Unconfirmed]`，sources 归 Community 层 |
| 「（地图上）通常有两个引信，作为丢失保险」 | ⚠️ 社区报告，页面标 `[Unconfirmed]`，并加限定语「players in the thread read as…」 |
| Eye = 夜晚 | ⚠️ 社区报告，标 `[Unconfirmed]` |
| Skull = Rot 房 **或** 更强敌人（社区内存在真实分歧） | ⚠️ 如实写成「actively disputed」，未替玩家选边；分歧全文指向 `rot-debuff-guide` |
| Map / 问号符号 | ⚠️ 明确写「Nobody in the thread could agree」，未编含义 |
| 官方是否发布过修饰符清单 / 各符号解释 | ✅ 核实为**没有**，页面明确写出该空缺 |

**结论**：无编造。新页在「确认」与「社区报告」之间划了显式分界线（独立小节 `What Is Actually Confirmed`），全部符号含义逐条带 `[Unconfirmed]` 标记。

---

## 五、Residue 扫描（第 4 步）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` / `{{%` | ✅ 0 命中 |
| 模板占位符 `lorem ipsum` / `TODO` / `FIXME` | ✅ 0 命中 |
| 跨站污染（其余站游戏名 / 工作室名） | ✅ 0 命中（含 `Vaulted Sky Games` 定向扫描 —— 该站曾误填，本轮复查已无） |
| 中文标记 / CJK 泄漏 | ✅ 0 命中 |
| 页脚 IP 归属 | ✅ `Beck & Branch Games and Neem Interactive`（线上首页 / 新页页脚实测） |
| `/terms` IP 归属 | ✅ `Beck & Branch Games` + `Neem Interactive` 各命中 1 处（线上 `/terms` HTTP 200） |
| 内链完整性 | ✅ 0 悬空 —— 站内 31 篇全量比对：正文 `/guides/*` + frontmatter `related:` 全部命中实际文件 |
| `related` 仅引用真实 slug | ✅ `rot-debuff-guide` / `extraction-guide` / `game-mechanics-systems-guide` / `all-biomes-guide` / `beginner-guide` 均存在 |

---

## 六、事实一致性（跨页，第 4 步）

本轮修掉三处**已上线但已失真**的站内断言 —— 站内 `patch-notes-guide.md` 早已记录 8/12 官方 roadmap，但另外三处仍宣称「无 roadmap」，属**站内自相矛盾**：

1. `full-release-guide.md`「What About Post-Launch Content?」原称未公布 roadmap → 改为带日期的 **Update (September 12, 2026)** 块，注明原表述已不成立，并指向 `patch-notes-guide`。
2. `release-date-faq.md` FAQ「Will there be post-launch content?」原答「Unannounced. No roadmap, seasons, or DLC have been confirmed.」→ 改为 8/12 计划摘要。
3. `app/faq/page.tsx` 站级 FAQ 同一问同一错 → 同步修正（线上已验证旧文案 `Unannounced. No roadmap` 命中 **0**）。

新页与 `rot-debuff-guide` 之间加了**双向 Scope note**（新页只负责电梯修饰符，Rot 本体与骷髅符号之争留在原页），避免关键词自噬。

---

## 七、构建与部署（第 5 步）

| 项 | 结果 |
|----|------|
| 依赖 | ✅ 本站无 `node_modules`，构建前已 `pnpm install`（MUST NOT 用 npm） |
| 本地构建 | ✅ exit 0（新路由 `/guides/elevator-modifiers-fuse-guide` 预渲染成功） |
| 词数 | **1,449**（限 800–1500）✅ |
| 部署命令 | `./deploy-wiki-site.sh grainrotwiki` |
| 本次生产部署 | `https://grainrotwiki-hc298w7pb-zhaoq0103s-projects.vercel.app`（dpl_FwTyaBFa3GG8v4hxGmYn1F3Bit8p, target=production, status=Ready） |
| 生产 alias 指向本次部署 | ✅ `vercel inspect` Aliases 段：`https://grainrotwiki.vercel.app` → `dpl_FwTyaBFa3GG8v4hxGmYn1F3Bit8p` |

### 线上内容级验证（非仅首页 200）

| 验证项 | 证据 |
|--------|------|
| 新路由 HTTP 200 | `GET https://grainrotwiki.vercel.app/guides/elevator-modifiers-fuse-guide` → **200**，`size_download=61300` |
| 正文含新标题特征串 | `<title>` = `Grain Rot Elevator Modifiers &amp; the Fuse — What the Symbols Mean and How to Avoid Getting Stranded · Grain Rot Wiki`；正文命中 `How to Avoid Getting Stranded` |
| 正文含新页独有内容 | 命中商店页逐字 `RNG fuses in the elevator`；页内自链 `elevator-modifiers-fuse-guide` 出现 |
| 关联页修复已上线 | `GET /guides/full-release-guide` → 200，命中 `Update (September 12, 2026)`；`GET /faq` → 200，命中 `Next for GRAIN ROT` 与 `Deep Layers Update`，旧文案 `Unannounced. No roadmap` 命中 **0** |
| `/terms` 可达 | 200，IP 归属正确 |

---

## 八、结论

✅ **PASS** — 批准部署。0 🔴、0 🟡（页脚 / `/terms` 归属本轮复查通过）。

**遗留建议（🟢）**：
- 新页含 4 处 `[Unconfirmed]` 社区主张；若后续官方发布修饰符清单，需回填并撤标。
- 路径 ②（系统清单驱动）本轮证明有效：**Grain Rot 9 月无新补丁，靠官方 1.0 清单对照仍能开题**。建议写入 `docs/agents/18` Profile，作为后续「抱怨收敛即 SKIP」的纠偏规则。
