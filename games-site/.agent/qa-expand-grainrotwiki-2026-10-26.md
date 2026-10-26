# QA Quick — grainrotwiki 扩容篇（2026-10-26）

- **站点**: grainrotwiki
- **篇目**: `content/guides/save-files-and-coop-progress-guide.md`
- **模式**: quick（仅本轮变更，1 篇）
- **结论**: ✅ **PASS**（0 阻断 / 0 警告 / 2 条可选建议）

---

## 1. 选题依据（真实反馈，非编造）

并行跑了两条选题路径，最终由 **② system-inventory-driven** 命中。

### ① complaint-driven（抱怨驱动）
采集面：Steam 评测聚合、Steam 公告评论、官方 news feed、Reddit r/GRAINROT（本机不可达，见下）、第三方评测分析。

| 抱怨面 | 证据 | 判定 |
|---|---|---|
| 3 楼锁着 / 完整版像 EA | Steam 评测多语言片段（英/KR/ZH/FR） | ❌ 已有 `third-floor-locked-guide.md`、`full-release-guide.md` |
| 无公开匹配 / 邀请制 | 已在站内覆盖 | ❌ 已有 `multiplayer-matchmaking-guide.md` |
| 优化差 / 掉帧 | VaporLens "Poor Optimization" 25% | ❌ 已有 `performance-lag-fix-guide.md` |
| 私人大厅 / 防止陌生人偷材料 | Patch 1.04–1.08 官方 | ❌ 已被 `multiplayer-matchmaking-guide.md` 覆盖 |
| Elite 只掉蓝图 | 仅 1 条二手转述，检索无法证实 | ❌ **不成立，不写** |
| 治愈机制（床 vs 椅子） | 只有 SEO 站覆盖，无 3 条玩家一手声源 | ⚠️ 证据不足，暂缓 |

### ② system-inventory-driven（官方系统清单 × 站内覆盖）
官方 Steam appdata（appid 4450620，读取 2026-10-26）明写系统 **"Persistent Outpost rebuilding and progression"** + **"If everyone breaks, your loot is lost"**；而**站内 37 篇无任何一篇讲存档/进度持久化**（`grep -ril "stash"` = 0，`"save slot"` 仅出现在 `patch-notes-guide.md` 一句话里）。→ 典型的「官方明说有、站内整块没写」。**命中。**

### 采集面与网络限制（如实记录）
- ✅ 可达：Steam News API（`api.steampowered.com`）、Steam appdetails API、VaporLens、grainrotguides.com、gamecluebook.com、Thunderstore
- ❌ 不可达：`steamcommunity.com`（DNS 投毒到 108.160.x.x，与 CLAUDE.md 记录一致）、`store.steampowered.com` 评测接口（302 回首页）、`reddit.com`（403 Blocked）
- 因此**玩家声源以评测聚合（VaporLens）+ 玩家自制 mod + 第三方存档页转述**为准；**未使用任何无法打开的页面内容作为引用**。

---

## 2. 虚构检测（逐个专有名词核验）

| 名词 | 核验方式 | 结果 |
|---|---|---|
| `%LOCALAPPDATA%\Helden\Saved` | WebSearch 三源交叉（playground.ru / grainrotguides / SteamAH 均给 `AppData\Local\Helden\Saved\SaveGames`） | ✅ 存在，文中标 **[Unconfirmed]**（官方未公布） |
| Helden（内部项目名） | 同上 | ✅ |
| RotKeep / MoNikki | 直接抓取 Thunderstore 页面 | ✅ 原文引用 "Keep your loot when the whole team wipes" |
| VaporLens "No Shared Progression" 12.5% | 直接抓取 VaporLens 分析页 | ✅ 页面实测值 |
| 5 个存档位 | 官方 Patch 1.1 原文 "Changed the maximum number of save slots to 5" | ✅ |
| 无 Steam Cloud | appdetails 分类列表（含 Family Sharing，不含 Steam Cloud）+ 28 条官方公告全文 grep "cloud" = 0 命中 | ✅ 双证据 |
| Lost and found crate | 官方 Patch 1.04 原文 | ✅ |
| Grief protection | 官方 Patch 1.08 原文 | ✅ |
| 电梯 anti-grief | 官方 Patch 1.1 原文 "Starting the elevator is now an anti grief protected action" | ✅ |
| Spark / Deep Layers / Outpost | 官方商店页原文 | ✅ |

未出现的虚构项：未编造 boss 名、武器名、掉落率、玩家引语。**全文无一处直接引号引用玩家言论。**

---

## 3. 跨站残留扫描

```
grep -rn "SpiritVale|Witchspire|mistfall|aincrad|The Mound|Sephiria|Tears of Metal|EX-Mod|Echoes of Aincrad|Neon Abyss|Mystralia" → 0 命中
中文残留 grep -c "[一-龥]" → 0
TODO/FIXME/lorem → 0
```
✅ 无残留。

---

## 4. 事实一致性（与站内既有页交叉）

| 交叉点 | 既有页 | 本篇 | 一致 |
|---|---|---|---|
| 联机进度归房主 | `multiplayer-matchmaking-guide.md:108-110`（标 Unconfirmed） | 同结论、同标记 | ✅ |
| 五个存档位 | `patch-notes-guide.md:63,120` | 同 | ✅ |
| Demo 进度未继承 | `demo-guide.md:59` | 同 | ✅ |
| Outpost 持久化 | `outpost-upgrade-guide.md:19,33` | 同 | ✅ |
| 全员阵亡才丢战利品 | 官方原文，全站一致 | 同 | ✅ |

无冲突。

---

## 5. 规格检查

| 项 | 要求 | 实测 | 结果 |
|---|---|---|---|
| title | 40–60 字符 | 56 | ✅ |
| description | 140–160 字符 | 154 | ✅ |
| H1 | 有且仅 1 个 | 1 | ✅ |
| 正文词数 | 800–1500 | 1,500 | ✅ |
| 首段 | 40–60 词直答 | 55 | ✅ |
| 表格 | 2–4 个 | 2 | ✅ |
| related | 块状数组 | 块状，5 条全部存在 | ✅ |
| sources | ≥1 Official，三层 | 6 条（Official 3 / Community 2 / Editorial 1），均含 url+date+text | ✅ |
| 数字标源 | 每个数字有源或 [Unconfirmed] | 5 槽、1.1/1.04/1.08/1.02/1.03 版本日期、12.5% 均有源；存档路径标 [Unconfirmed] | ✅ |

---

## 6. 基建

| 项 | 结果 |
|---|---|
| `pnpm build` | ✅ exit 0，51 页，路由含 `/guides/save-files-and-coop-progress-guide` |
| `node scripts/lint-guides.mjs grainrotwiki --changed` | ✅ 全部通过（0 ERROR / 0 WARN） |
| 部署 | 见下方 vercel 结果 |
| 线上复验 | 见下方 verifier 结果 |

---

## 7. 建议（不阻断）

1. 🟢 `third-floor-locked-guide.md` 可考虑在 10 月 26 日更新上线后做一次时效校准（官方 10-23 公告提到 "the October 26th update"）。**属既有页校准，不在本篇范围。**
2. 🟢 "如何回血（床 vs 椅子）" 有稳定搜索意图且站内缺口，但目前缺 3 条独立玩家一手声源，建议下一轮补采后再写，不硬写。

---

**QA 结果: ✅ PASS (1/1) | ⚠️ WARN (0) | 🔴 FAIL (0)**
