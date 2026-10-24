# SephiriaWiki 每日扩充报告 — 2026-10-24

> 任务编号：EXPAND-2026-10-24-SEPHIRIA
> 岗位：建站协调员 + 玩家反馈分析师
> 站点：`sephiriawiki/`（Sephiria，Steam appid 2436940，https://sephiriawiki.vercel.app）
> 产出：`content/guides/stuck-soft-lock-recovery-guide.md`
> 上一轮（10-23）产出 `sephiria-achievements-guide`，本轮不复用其主题

---

## 1. 选题

**Slug**：`stuck-soft-lock-recovery-guide`
**标题**：Sephiria Stuck? How to Fix 'Talk to Rylie', the Library Bench Trap and Lost Quest Progress
**Category**：Guides（沿用站内取值）
**词数**：1,481（正文，不含 frontmatter；区间要求 800–1500）

### 一句话选题

玩家在 Sephiria 里「卡住」其实是三类不同故障（章节 6 任务状态回退 / 几何卡位 / 任务标记未存档），救法不同，而「Quit 而非 Forfeit」这个关键区分决定跑团是否丢失 —— 站内 41 篇完全未覆盖。

---

## 2. 两条路径的选题依据

### ① complaint-driven（抱怨驱动）

近期 Steam 讨论区/公告评论区反复出现、且**互相独立**的具体问题：

| # | 抱怨/问题 | 独立提及 | 来源 |
|---|---|---|---|
| 1 | 章节 6 开头找 Rylie，对话后任务回退成 "Talk to Rylie"，Rylie 像消失了，塔打不开 | ≥4（英语 2 + 韩语 1 + 多人变体 1） | Steam 1.0.22 公告评论串 |
| 2 | 图书馆（Library）Boss 后房间的长椅会把角色卡死，进去出不来 | ≥2（原帖 2 次跑团 + 回帖复述该机制） | Steam 讨论 "Bug killed runs twice now." |
| 3 | 已做完的任务消失（水果串 Fruit Skewer 摊位不见了） | ≥2（原帖 + 韩语报告「fruitskewer 消失」） | Steam 讨论 "Fruit skewer gone?" + 1.0.22 评论串 |
| 4 | 多人联机后存档进度异常 / 章节不匹配 | ≥3（1.0.22 评论 + 1.0.24 补丁条目 + 0.11.4 条目） | 官方补丁 + 社区串 |

三类问题同属一个玩家搜索意图（"我卡住了，怎么救"），且互相有因果关系（先判类型再施救），因此合并成**一篇**而非三篇碎页 —— 拆开会造成三篇 intro 可互换的自噬页。

### ② system-inventory-driven（系统清单驱动）

官方商店页列出的系统 × 站内覆盖：

| 官方系统 | 站内覆盖 | 状态 |
|---|---|---|
| Strategic inventory（Artifacts + Tablets） | artifacts-guide / tablets-guide | ✅ |
| 6 weapons × 50+ upgrades | weapons-guide + 6 篇武器 build | ✅ |
| 60+ enemies / 10+ bosses / 6 chapters | boss-guide / chapter-guide | ✅ |
| Online co-op（4 人，交易/复活） | coop-guide / multiplayer-connection-fix / coop-freeze-recovery | ✅ |
| **任务/剧情推进状态（quest flags、章节切换、NPC 对话状态）** | **无任何页面** | ❌ **空白** |

系统清单路径同样命中同一空白：官方补丁在 1.0.23、1.0.24、1.0.29、1.0.31 连续四个版本修「story progression blocked / quest progression」，但站内没有任何一页解释任务状态是怎么存的、什么时候会丢。两条路径收敛到同一选题，故不 SKIP。

---

## 3. 来源表（全部为一手）

| # | Tier | 来源 | URL | 日期 | 用途 |
|---|---|---|---|---|---|
| 1 | Official | 1.0.33 Update（含 Known Issues） | https://store.steampowered.com/news/app/2436940/view/1843481262695189 | 2026-09-11 | 当前版本基准；墙体穿模已知问题；开发者征集复现材料 |
| 2 | Official | 1.0.23 Update | https://store.steampowered.com/news/app/2436940/view/1839676055896892 | 2026-08-04 | "story progression could occasionally become blocked"；Rylie 主任务对话优先级 |
| 3 | Official | 1.0.24 Update | https://store.steampowered.com/news/app/2436940/view/1840310314344750 | 2026-08-07 | 章节不匹配邀请；Ch6 大厅跨章；NPC 对话强制位移冻结 |
| 4 | Official | 1.0.28 hotfix（含 1.0.29 条目） | https://store.steampowered.com/news/app/2436940/view/1840944183778873 | 2026-08-14 | Ch6 多人 game over 后进度冻结 |
| 5 | Official | 1.0.26 Update | https://store.steampowered.com/news/app/2436940/view/1840944183776721 | 2026-08-13 | 最终 Boss 后 Give Up 按钮不可用 |
| 6 | Community | Steam 讨论 "Bug killed runs twice now." | https://steamcommunity.com/app/2436940/discussions/0/563668239243165336/ | 2026（10-24 访问） | 长椅卡位；Quit≠Forfeit 救法；多人无解 |
| 7 | Community | Steam 1.0.22 公告评论串 | https://steamcommunity.com/app/2436940/eventcomments/592937421547529312/ | 2026-08-01（10-24 仍可索引） | Ch6 Rylie 回退（多人变体 + 韩语报告）；开发者回复 Seyla/Rylie 区分 |
| 8 | Community | Steam 讨论 "Fruit skewer gone?" | https://steamcommunity.com/app/2436940/discussions/0/592939664045911349/ | 2026（10-24 访问） | 任务 Complete 标记必须在 NPC 处写入；树上的水果串需先解锁 |
| 9 | Editorial | 本页诊断顺序与预防清单 | https://sephiriawiki.vercel.app/guides/stuck-soft-lock-recovery-guide | 2026-10-24 | 三类判别表、施救顺序、Forfeit 禁令为本文综合判断 |

交叉验证：3 个独立社区来源（#6/#7/#8）+ 5 篇官方补丁（#1–#5）。每条断言至少两源，或单源已标 [Unconfirmed]。

### ⚠️ 采集限制（必须记录，影响复现）

本轮**Steam 评测 API 与 Reddit 均不可达**，因此改用讨论区 + 官方补丁作为主证据面：

- `store.steampowered.com/appreviews/2436940?json=1...` → 连续返回 **302 重定向到商店首页**（对照 appid 570 同样 302，判定为该端点对本机 IP 的封锁，非单游戏问题）。已尝试 `--resolve` 三个 IP、cookie、Referer、UA 伪装，均无效。
- `steamcommunity.com` DNS 被投毒（解析到 `162.125.32.6`/`199.59.149.230`，Dropbox/无关 IP），直连 ECONNREFUSED；WebFetch 同路径被拒。
- Reddit JSON API 返回 **403**（`/r/Sephiria/new.json`、`/search.json`），旧版端点 403，RSS 429；eddrit 镜像被 Anubis 反爬拦截（未绕过）。
- 可用面：`api.steampowered.com/ISteamNews`（200，取满 30 篇公告）、`store.steampowered.com/app/2436940`（重试 3 次后 200）、WebSearch 索引的讨论串正文。

结论：**没有编造任何评测引文**。本页所有玩家侧断言均标注为 Community 并附讨论串 URL；无法直接抓取正文的，只用搜索索引到的标题与内容摘要，未虚构逐字引用。

---

## 4. 查重结论（逐条对比 41 篇）

新 slug `stuck-soft-lock-recovery-guide` 与现有 41 个 slug **无重复**（站内现共 42 篇）。

全语料检索：`grep -rn "Forfeit|Rylie|soft-lock|softlock|unstick" content/guides/` → **0 命中**，即站内从未出现这些概念。

最接近的 5 篇逐一判定：

| 现有 slug | 主题 | 是否重叠 | 判定理由 |
|---|---|---|---|
| `save-file-guide` | 存档路径/备份/云同步 | ❌ 不重叠 | intro 不可互换：该页讲「文件在哪、怎么备份」，本页讲「进度为什么卡住、怎么救回来」；本页只链接它取路径，不复述 |
| `coop-freeze-recovery-guide` | 联机客户端冻结（能走不能打/看不见队友） | ❌ 不重叠 | 症状层不同：该页是**运行期冻结**，本页是**任务状态/几何卡位**；搜索意图分别是 "coop freeze" 与 "stuck can't progress" |
| `multiplayer-connection-fix-guide` | 连接/延迟/desync | ❌ 不重叠 | 该页是网络层；本页 Fix D 只讲**进度层**，且显式指向该页处理连接问题 |
| `chapter-6-final-boss-guide` | Ch6 结构与最终 Boss 打法 | ❌ 不重叠 | 该页讲「怎么打赢」，本页讲「进不去 Ch6 / 进去后出不来」；本页链接它但不复述战斗内容 |
| `sephiria-achievements-guide`（上一轮） | 27 个成就触发 | ❌ 不重叠 | 完全不同的搜索意图；仅 1.0.33 版本基准相同 |

其余 36 篇（6 篇武器 build、5 篇新手/操作/FAQ、4 篇 Boss/章节、4 篇系统机制、3 篇经济/农材、2 篇外观、2 篇内容信息、其余工具类）主题均为战斗/构筑/系统说明，与「卡关救援」无交集。

**related 校验**：`save-file-guide`、`coop-freeze-recovery-guide`、`chapter-6-final-boss-guide`、`multiplayer-connection-fix-guide`、`faq-content` —— 5 个 slug 全部存在（脚本校验 missing=[]）。使用块状数组。

---

## 5. [Unconfirmed] 清单

| 断言 | 为何未确认 |
|---|---|
| 长椅所在的 "Library" = Chapter 3 The Mirrored Library | 讨论串只说 "the library area"，未给章节号；按章节命名推断 |
| 切换属性/初始装备会**导致** Ch6 任务回退 | 单条玩家报告的模式，官方从未确认根因；补丁语焉不详 |
| 打开多人会**导致** Ch6 任务回退 | 同上；1.0.24 的联机修复是最接近的官方承认，但未点名该症状 |
| 长椅卡位在 1.0.33 仍存在 | 无任何补丁条目提到长椅；「补丁没提」是弱证据（1.0.31 提到修复地形角卡位，但未点名长椅） |
| 「Fruit Skewer 交任务才存档」适用于所有任务 | 社区只解释了这一个任务，泛化是本文推断 |

---

## 6. 构建结果

```
$ cd sephiriawiki && pnpm install && pnpm build
EXIT=0
✓ Compiled successfully in 121ms
✓ Generating static pages (55/55)
├ ● /guides/stuck-soft-lock-recovery-guide     ← 新路由已生成
```

- `pnpm install` → ok（pnpm 全局 store，未新增磁盘副本）
- 产物级验证：`.next/server/app/guides/stuck-soft-lock-recovery-guide.html` 存在，`Talk to Rylie` 命中 5 次，**无** `2026-09-12` 事故中的表格分隔行渲染缺陷（`<td>-------` 0 命中）
- 可发现性（按 QA 9/16 规则走产物级，不看 home-content.md）：`.next/server/app/guides.html` 索引命中 1 次；`sitemap.xml` 命中 1 次

---

## 7. 交接与后续

- **未部署、未 commit**（按任务要求，等 QA 通过后由主 Agent 统一处理）
- **未修改其他站点**
- 交 QA 审核员：站点目录 `games-site/sephiriawiki/`，本轮新增 1 篇：
  `content/guides/stuck-soft-lock-recovery-guide.md`
- QA 抽查建议重点核对：Rylie/Seyla 区分（来源 #7）、Quit vs Forfeit（来源 #6，单串社区证据，已标 Community）、补丁条目逐字引用（来源 #1–#5 官方原文）
