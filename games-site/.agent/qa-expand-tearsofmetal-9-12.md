# QA 报告 — QA-EXPAND-TEARSOFMETAL-9/12

- 日期: 2026-09-12
- 模式: quick（残留扫描 + 编造检查 + 内链 + 事实一致性）
- 审核员: QA 审核员（岗位卡 `docs/agents/05` + Profile `docs/agents/06`）
- 范围: tearsofmetalwiki 本轮 1 新增 + 2 修改文件
- 结论: ✅ **PASS**（批准部署）

---

## 一、本轮变更清单

| # | 文件 | 类型 | 说明 |
|---|------|------|------|
| 1 | `tearsofmetalwiki/content/guides/coop-join-failures-guide.md` | 🆕 新增 | Can't Join a Tears of Metal Co-op Game? Lobby Join Failures, Version Mismatch and Fixes（32→33 篇） |
| 2 | `tearsofmetalwiki/content/guides/patch-notes.md` | ✏️ P0 事实修复 | 原「最新补丁 = v0.14.58630」已失效；补入 9/8 官方补丁 + 日期记账法 |
| 3 | `tearsofmetalwiki/content/guides/multiplayer-connection-fix-guide.md` | ✏️ P0 事实修复 | 9/8 补丁对连接层的影响 + `related` 加新篇 + 双向 Scope 拆分 |

---

## 二、反馈采集记录（第 1 步）

| 通道 | 可用性 | 本轮实际取得 |
|------|--------|--------------|
| Steam 官方公告（`ISteamNews/GetNewsForApp` appid=1913120） | ✅ 可用（须走 WebFetch） | **9/8「New Patch - Big Bug Fixing Pass」** 全文要点（作者 WoofgangPCG）——本轮破局点 |
| Steam 商店页 appdetails（appid=1913120） | ✅ 可用 | 联机规格（Online Co-op ≤4 人；Steam ↔ Microsoft Store / PC Game Pass 跨平台） |
| Steam 差评（`appreviews` filter=negative） | ✅ 可用 | 连接/联机类负评主题聚类 |
| Steam 社区讨论区（steamcommunity.com） | ❌ WebFetch ECONNREFUSED；`curl` 000 | 仅能经 WebSearch 摘要取得（两条独立摘要互相印证），已按「社区报告」而非「官方」定级 |
| `opencli reddit` | ❌ AUTH_REQUIRED（长期性故障，非本轮新增） | 无 |
| Reddit / 媒体 | ⚠️ 仅 WebSearch 摘要 | 未用于断言级内容 |

**诚实缺口记录**：Steam 社区讨论原帖无法直接抓取，本页涉及社区主张的段落均以「community-reported / thread」措辞归因，并把原帖 URL 附在 sources，未升格为官方事实。Reddit 通道（`opencli reddit`）本轮仍不可用。

---

## 三、选题四条判据（第 2 步）

| 判据 | 证据 | 结论 |
|------|------|:--:|
| **高频**（≥3 独立来源） | ① 9/8 官方补丁公告的 multiplayer 段落（官方源）；② Steam 社区讨论「can't join multiplayer anymore」；③ Steam 社区讨论「Crossplay Steam Branch Instructions」；④ Steam 社区讨论「13k+ ping during multiplayer games」；⑤ Steam 负评聚类 | ✅ |
| **具体** | 症状具体到「点 Join 后卡在 Lobby、朋友房间不出现、秒超时」，不是「联机有问题」这种泛题 | ✅ |
| **缺口** | `ls content/guides/` 后逐篇 grep「join」「crossplay」「version mismatch」「EOS」「clock」——已有 `multiplayer-connection-fix-guide` 覆盖的是**进入对局之后**的 desync / lag / host 选择，**入局失败**零覆盖；无同题重稿 | ✅ |
| **可溯源** | 每条修复与每个数字均有来源：官方公告逐字引用（跨平台 beta 分支、EOS 连接处理、错误提示）；社区主张标注为社区主张；无来源的错误码一律排除（见第五节） | ✅ |

**路径 ②（系统清单驱动）并行执行记录**：取官方商店页 about / `detailed_description` 逐项对照站内覆盖 —— 官方明列的 **crossplay（Steam ↔ Microsoft Store / PC Game Pass）** 与 **「跨平台兼容会随每次补丁临时关闭」** 这一机制，站内此前**整块缺失**（既有页只把 crossplay 当名词提过，没写它会被临时禁用、也没写 `crossplay` beta 分支怎么切）。该块即为本页 Fix 1，属路径 ② 独立于补丁发布的发现。

---

## 四、编造检查（第 4 步 · 逐名词 WebSearch）

| 被检断言 | 核验结果 |
|----------|:--:|
| 「9/8 补丁名为 New Patch - Big Bug Fixing Pass」 | ✅ 官方公告逐字 |
| 「Crossplay compatibility is temporarily disabled on this version.」 | ✅ 官方公告逐字引用 |
| 「Use the "Crossplay" Beta branch…」+ Beta 分支名 `crossplay` | ✅ 官方公告逐字 + 社区线程印证 |
| 「Improved Epic Online Services (EOS) connection handling, including fixes for stale connections.」 | ✅ 官方公告逐字 |
| 「Added detection and clearer player-facing error messages…」 | ✅ 官方公告逐字 |
| 「Players can no longer accidentally Revive or Give Up while typing in chat」 | ✅ 官方公告逐字 |
| 「1-second delay after death before the dead player can Give Up」 | ✅ 官方公告逐字 |
| 「Host and Client save data could become mixed together on Clients」 | ✅ 官方公告逐字 |
| `EOSSDK-Win64-Shipping.dll` / `ToM_Data\Plugins\x86_64` | ✅ EOS 标准组件路径；社区线程报告一致 |
| 日志路径 `%USERPROFILE%\AppData\LocalLow\Paper Cult\Tears of Metal`（`player.log` / `Player-prev.log`） | ✅ Unity 标准 LocalLow 约定 + 工作室名官方可查 |
| 系统时钟偏移导致会话握手瞬间失败 | ⚠️ 社区通行经验，页面以通用故障排查表述，未挂官方名义 |

### ⚠️ 主动排除的编造风险（重要）

第三方 SEO 站（xmodhub 系）流传的错误码 **`0x0001` / `0x0004` / `0x0012` / `0x0029`** 及其「对应含义表」**无任何可核验来源**，特征符合 AI 生成的 SEO 内容。本轮**刻意未写入新页**，避免把不可溯源数字带进站内。建议主 Agent 记录：该组错误码是 Tears of Metal 相关搜索的高频污染源。

---

## 五、Residue 扫描（第 4 步）

| 检查项 | 结果 |
|--------|:--:|
| Hugo shortcodes `{{<` / `{{%` | ✅ 0 命中 |
| 模板占位符 `lorem ipsum` / `TODO` / `FIXME` | ✅ 0 命中 |
| 跨站污染（其余站游戏名 / 工作室名） | ✅ 0 命中（`spiritvale`、`mistfall`、`witchspire`、`aincrad`、`themound` 定向扫描） |
| 中文标记 / CJK 泄漏 | ✅ 0 命中 |
| 页脚 IP 归属 | ✅ `Paper Cult`（线上 `tearsofmetalwiki.vercel.app` 页脚实测） |
| `/terms` IP 归属 | ✅ `Paper Cult`（线上 `/terms` HTTP 200，命中 1 处） |
| 内链完整性 | ✅ 0 悬空 —— 站内 33 篇全量比对：正文 `/guides/*` + frontmatter `related:` 全部命中实际文件 |
| `related` 仅引用真实 slug | ✅ `multiplayer-connection-fix-guide` / `patch-notes` / `co-op-guide` / `save-system-guide` / `crash-launch-fix-guide` 均存在 |

---

## 六、事实一致性（跨页，第 4 步）

本轮修掉两处**已上线但已失真**的站内断言：

1. `patch-notes.md` 原称最新构建为 **v0.14.58630**、并把该行标为「This is the current build」。9/8 官方补丁发布后此断言为假。已改为按**日期**记账（9/8 补丁**未公布版本号**），并新增一条明确提示：「若你看到有攻略给这次更新标了 `v0.15`，那个号不是开发者的」。
2. `multiplayer-connection-fix-guide.md` 的「近期更新已修」段落未包含 9/8 补丁，与 `patch-notes.md` 并列时自相矛盾。已补齐，并把 desync 表述为「improved, not eliminated」。

两页与新页之间加了**双向 Scope note**（新页只负责「进不去」，旧页负责「进去之后」），避免关键词自噬。

---

## 七、构建与部署（第 5 步）

| 项 | 结果 |
|----|------|
| 本地构建 | ✅ exit 0（新路由 `/guides/coop-join-failures-guide` 预渲染成功） |
| 词数 | **1,454**（限 800–1500）✅ |
| 部署命令 | `./deploy-wiki-site.sh tearsofmetalwiki` |
| 本次生产部署 | `https://tearsofmetalwiki-52vtyk37l-zhaoq0103s-projects.vercel.app`（dpl_AjfzAYK6QoCAwkcsUuQR5FZaKCsX, target=production, status=Ready） |
| 生产 alias 指向本次部署 | ✅ `vercel inspect` Aliases 段：`https://tearsofmetalwiki.vercel.app` → `dpl_AjfzAYK6QoCAwkcsUuQR5FZaKCsX` |

### 线上内容级验证（非仅首页 200）

| 验证项 | 证据 |
|--------|------|
| 新路由 HTTP 200 | `GET https://tearsofmetalwiki.vercel.app/guides/coop-join-failures-guide` → **200**，`size_download=64592` |
| 正文含新标题特征串 | HTML 中命中 `Can't Join a Tears of Metal Co-op Game? Lobby Join Failures, Version Mismatch and Fixes`；`<title>` = `Can't Join a Tears of Metal Co-op Game? Lobby Join Failures, Version Mismatch and Fixes · Tears of Metal Wiki` |
| 正文含新页独有内容 | 命中逐字引用 `Crossplay compatibility is temporarily disabled on this version` |
| 末次措辞修订已上线 | 命中 `dropped back on the lobby list`；旧措辞 `Public Lobbies list` 命中 **0** —— 证明线上构建为**修订后**源码（第一次部署早于该修订，已重部） |
| 关联页修复已上线 | `GET /guides/patch-notes` → 200；命中 `Big Bug Fixing Pass` ×7、`September 8, 2026`、`v0.15` 提示 |
| `/terms` 可达 | 200，`Paper Cult` 命中 |

> 注：从本机 `curl` 直连 `tearsofmetalwiki.vercel.app` 时 DNS 会命中一个不可达 IP，需 `--resolve …:443:64.29.17.3` 才通（同域另一 A 记录超时）。这是本机网络问题，非站点故障 —— 带 `--resolve` 后 HTTP 200 且正文完整。**记录此坑，供后续 Agent 复用。**

---

## 八、结论

✅ **PASS** — 批准部署。0 🔴、0 🟡（页脚 / `/terms` 归属本轮复查通过）。

**遗留建议（🟢）**：
- `patch-notes.md` 现以日期而非版本号记账 9/8 补丁；若 Paper Cult 后续补发版本号，需回填。
- xmodhub 系错误码污染建议写入 `keyword-results/` 反馈报告，避免后续 Agent 误采。
