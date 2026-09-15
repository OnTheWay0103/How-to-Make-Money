# SILVER PINES 建站记录 — 9/16（BUILD-009）

> 模式: build-new-site | 站点: `silverpineswiki/` | 游戏: **Silver Pines**（Wych Elm / Team17，Steam app **2333000**，demo app **4540100**，发售 **2026-10-08**）
> 角色: 关键词研究员 + 建站协调员 + QA 审核员（一站内串起全流程）| 日期: **2026-09-16**（发售前 **22 天**）
> 上游材料: `keyword-results/build-gate-2026-09-16.md`（门禁 17/20）+ `keyword-results/Silver-Pines.md`（本轮采集）
> 结果: ✅ **BUILD SUCCESS** — 新建站点 + 10 篇 P0 攻略 + 8 个站级页面，构建通过，线上 23/23 路由 200，QA **PASS**（0 🔴 / 5 🟡 / 3 🟢）

---

## 一、采集通道实测（逐通道实测，未沿用旧结论）

| 通道 | 本轮实测 | 结果 |
|------|---------|------|
| **Google Suggest** `suggestqueries.google.com` | `--resolve …:443:64.233.170.139` | ✅ **直连成功**。本机 DNS 把它污染到 `69.63.176.59`（Meta IP）导致 SSL 失败 —— 是 DNS 投毒不是被墙，`--resolve` 即可 |
| **Google Suggest `hl=zh-CN`** | 5 条查询，**3 条响应截断** | ⚠️ **部分未验证**（详见 §二）。返回为 GBK，需 `iconv -f GBK -t UTF-8` |
| **Google Suggest `hl=ja`** | 4 条查询，3 条空数组 | ✅ 可用，仅 1 条命中 |
| **Steam 商店页 / 商店数据** `store.steampowered.com/app/2333000` | 沿用门禁 Agent 的采集（appdetails 的 `pc_requirements` / `categories` / `platforms` 均在站内被引用） | ✅ 有数据 |
| **Steam 评测 API** `store.steampowered.com/appreviews/4540100`（demo） | `curl` 失败（带 `--resolve` 亦失败） | ❌ **本轮不可复现** → 沿用门禁记录值 802 / 95.9%，站内标注为「Steam appreviews API, 2026-09-16」 |
| **Steam 评测 API** `store.steampowered.com/appreviews/2333000`（本体） | 同上 | ❌ 不可复现。本体**发售前 0 评测**，站内如实写 0 |
| `api.gamelytic.com` | `HTTP=403`，需 API key | ❌ 未验证 |
| `steamdb.info` | `HTTP=403` | ❌ 未验证（但 `silver pines steamdb` 词本身在 Suggest 命中） |
| `steamspy.com` | `HTTP=403` | ❌ 未验证 |
| `fandom.com` | 域名不可达 | ❌ 未验证 |
| WebFetch（`bloody-disgusting.com` / `game8.co`） | `HTTP=403` | ❌ 不可用 |
| WebFetch / WebSearch（`worthplaying`、`17173`、`evergameday`） | 可用 | ✅ 作为机制类二手来源，全部标 `[Community-reported]` |
| 本机 DNS 直连 `silverpineswiki.vercel.app` | `HTTP=000` | ⚠️ DNS 投毒（与 suggestqueries 同因）→ 线上验证一律 `--resolve` 指定 `64.29.17.195` |

**采集声明**：4 个通道（gamelytic / steamdb / steamspy / fandom）与 2 个 WebFetch 域名不可达，已如实记为「未验证」，**未用任何推测填补**。Steam 评测 API 本轮不可复现，**沿用门禁记录值并注明来源日期**，未声称本轮重新验证。

---

## 二、关键词采集结果（原始 → 去重 → 游戏意图 → 采纳）

| 指标 | 数值 |
|------|------|
| 采集查询数 | **62**（en 48 + 裸词探针 5 + ja 4 + zh-CN 5） |
| 拿到可解析响应 | **59** |
| 响应截断（未验证） | **3**（zh-CN `银松镇` 系列） |
| 返回非空建议的查询 | **22 / 59（37.3%）** |
| 返回零建议的查询 | **35 / 59（59.3%）** |
| 原始建议条数 | **102** |
| 去重后唯一词 | **67** |
| 噪声（剔出） | **18（26.9%）** |
| 模糊 / 裸词（不做目标词） | **4** |
| **明确游戏意图词** | **45（en 44 + ja 1）** |

### 2.1 裸词污染 —— 门禁判断被独立复现

| 污染源 | 条数 | 代表词 |
|------|:--:|------|
| Ranch 小说 / 图书系列 | 6 | `silver pines ranch series`、`a silver pines novel order` |
| 实体场所（公寓 / 度假屋 / 餐厅 / 酒店） | 5 | `silver pines apartments`、`silver pines lodge`、`the silver pines restaurant` |
| 医疗 / 康复机构 | 2 | `silver pines medical group`、`silver pines treatment center` |
| 影视 | 1 | `silver pines movie` |
| 词干漂移（silver 系列） | 4 | `silver metal price today`、`silver tips today` |

**裸词探针 5 条返回的 10 条建议中，只有 3 条指向本作**（`silver pines game` / `silver pines release date` / `silver pines game ps5`）—— 与门禁报告「前 10 条只有 3 条是本作」的实测**逐条吻合**。

### 2.2 采纳的主题簇（→ 10 篇 P0）

| 簇 | 词数 | 代表词 | 落点 |
|---|:--:|---|---|
| B 发售/价格/平台 | 18 | `silver pines game release date`（复现 5 次）、`silver pines game ps5`（5）、`silver pines game price`（3）、`silver pines game physical copy` | 发售信息页 |
| C Demo | 11 | `silver pines demo length`、`silver pines demo review`、`silver pines demo steam deck`、`silver pines demo shotgun code` | Demo 页 |
| D wiki/攻略 | 7 | `silver pines game wiki`、`silver pines game wikipedia`、`silver pines game walkthrough` | 首页 + About + FAQ（不单独成篇） |
| E 机制（**Suggest 真命中 0 条**） | 0 | 20 条机制种子 17 条零建议 | 6 篇机制页（**发售后抢位**） |
| F 内容形态 | 4 | `silver pines locations`、`silver pines gameplay` | 地图页 + 新手页 |
| G CJK | 1 | `シルバーパインズ ゲーム` | 仅作 keywords 次要补充 |

**锚词政策**：裸词 `Silver Pines` **MUST NOT** 作主关键词；全站 title/description/keywords 锚定 `silver pines game` 或其变体。实测首页 HTML 含字面量 `silver pines game` **12 次**。

### 2.3 噪声词与处置

- **MUST NOT 触碰**（异构语义）：Ranch 小说系列 / 公寓 / 度假屋 / 餐厅 / 酒店 / 医疗集团 / 康复中心 / 电影
- **漂移词（MUST NOT 当本作需求）**：`silver metal price today`、`silver tips today`、`silver mountain activities`
- **边界词（不做目标词）**：`silver pines`（裸）、`the silver pines`、`silver pines stream`、`silver pines wiki`（→ 一律写 `silver pines game wiki`）

---

## 三、建站产出

### 3.1 站点骨架（自 `dressmakerwiki/` 派生）

| 项 | 状态 |
|---|---|
| `package.json` `name` | `silverpineswiki` |
| 依赖管理 | **pnpm**（`pnpm install` ✅，`pnpm-lock.yaml` 134.4K 已入库）。**未用 npm** |
| 字体 | **geist 自托管**（`geist/font/sans` + `geist/font/mono`）；`next/font/google` 出现 **0 次** |
| `vercel.json` `installCommand` | `pnpm install` ✅ |
| `lib/seo-config.ts` | 唯一真源。`googleAnalyticsId: ''`（**空字符串，未写任何 `G-XXX` 假回退值**）；`googleAdsenseId: 'ca-pub-7211682665758448'` |
| `public/icon.png` | 由 `scripts/generate-site-icons.py` 生成，hue=190（teal） |
| GA4 渲染 | `components/GoogleAnalytics.tsx` 读 falsy → `return null`。**线上 0 个 `gtag(`/`googletagmanager`** |
| 配色 | 全站 `rose-` → `teal-`（79 处替换，与 dressmakerwiki 视觉区分）；确认 0 处残留 |
| `public/` 入库 | `git check-ignore` 对本站 `public/*` 无命中 → **正常 `git add` 即可，无需 `-f`**（brief 中的 `Public/` 规则在本仓不适用，实测确认） |

### 3.2 P0 攻略 10 篇（`content/guides/`，全部 `version: '1.0'` / `updated: '2026-09-16'`）

| # | slug | 标题 | 类别 | 词数 |
|---|---|---|---|:--:|
| 1 | `silver-pines-release-date-price-platforms` | Silver Pines Release Date, Price and Platforms — Everything Confirmed | Release Info | 2,180 |
| 2 | `silver-pines-demo-guide` | Silver Pines Demo Guide — What the Free Steam Demo Contains | Demo | 1,653 |
| 3 | `silver-pines-save-system-phone-booths` | Silver Pines Save System — Phone Booths and Save Coins Explained | Mechanics | 1,386 |
| 4 | `silver-pines-coins-vending-machines-economy` | Coins and Vending Machines | Economy | 1,412 |
| 5 | `silver-pines-inventory-storage-guide` | Inventory and Storage | Inventory | 1,382 |
| 6 | `silver-pines-melee-weapons-durability-repair` | Melee Weapons, Durability and Tape Repairs Explained | Combat | 1,375 |
| 7 | `silver-pines-guns-ammo-reloading-guide` | Guns, Ammo and Reloading — Why Reloading Gets You Killed | Combat | 1,374 |
| 8 | `silver-pines-stamina-dodge-mementos-guide` | Stamina, Dodging and Mementos — How Not to Die | Combat | 1,283 |
| 9 | `silver-pines-map-backtracking-exploration` | Map, Shortcuts and Backtracking — How to Get Unstuck | Exploration | 1,570 |
| 10 | `silver-pines-beginner-guide` | Beginner Guide — 12 Rules Before You Start | Beginner | 1,514 |

**合计 15,129 词**。6 篇落在 1000-1500 区间，4 篇略超（最长 2,180）。

### 3.3 站级页面

`/`（hero + 4 featured guides + 17 FAQ）、`/faq`（**31 条**）、`/tier-list`（生存优先级 + 24 行系统状态表 + 证据台账）、`/guides`、`/about`（三级来源政策 + 裸名消歧）、`/privacy`、`/terms`、`/contact`。

### 3.4 三级来源标注

| 标记 | 出现次数 |
|---|:--:|
| `[Unconfirmed]` | **123**（10/10 篇均有） |
| `Community-reported` | **136** |
| `*Sources:` 页脚 | **10/10 篇** |

---

## 四、QA quick 结论

报告: `.agent/qa-build009-silverpines.md`

| 严重度 | 数量 | 阻断 |
|:--|:--:|:--|
| 🔴 Blocker | **0** | — |
| 🟡 Warning | **5** | 否 |
| 🟢 Suggestion | **3** | 否 |

**判定: PASS。**

- **残留扫描 ✅ 干净**：其它站名/游戏名 **0** 命中（含 EX-Mod 跨站模板残留专查）；`rose-` 0 真残留（1 处为 `prose-invert` 子串假阳性）；`next/font/google` 0；假 GA id 0；CJK 泄漏 0；`TODO/PLACEHOLDER/lorem` 0。线上 8 个站级页面 grep `dressmaker` 全部 0。
- **编造检查 ✅ 未发现编造**：价格未公布未编造；本体 0 评测如实写；**wishlist 两个口径 200K+（全平台官方）vs ~83K（Steam 三方估计）全程分列，未混写、未相加、未平均**；武器名/伤害值/金币成本/Memento 清单**全站 0 处编造数值**；来源未编造；玩家声音未编造。
- **一处审计中修复**（W-3）：`app/privacy/page.tsx` §2 原写「This data is collected via Google Analytics」为无条件断言，而本站 GA4 是**故意未配置**的 → 已改为条件式表述，重新构建 + 重新部署 + 线上复验通过。
- **兼容性合规 ✅**：条件式广告措辞、opt-out 链接三处保留、`ads.txt` 线上正确、4 个法务页齐全、联系邮箱存在、GSC 验证文件线上可访问。`We use Google AdSense` / `We intend to apply for Google AdSense` 类措辞 **0 命中**。

---

## 五、构建与部署

| 项 | 结果 |
|---|---|
| `pnpm install` | ✅ exit 0，store 硬链接 |
| `pnpm build` | ✅ **`✓ Compiled successfully in 3.6s`**，TypeScript 通过，**23 条静态路由**（10 篇 SSG 攻略 + 13 个静态页/资源） |
| 部署命令 | **全局 `vercel --prod --yes`（58.9.4）** —— **未用 `npx vercel`** |
| 生产别名 | ✅ **`https://silverpineswiki.vercel.app`** |
| 部署 ID | `dpl_4hY8dy6q3ZGMqzFbDVgjW6hGAV1K`（首次）/ `silverpineswiki-fxac0d675`（W-3 修复后重部署） |

---

## 六、线上验证（`--resolve 64.29.17.195`，逐路由）

| 路由 | HTTP | Bytes | 判定 |
|------|:--:|--:|:--:|
| `/` | 200 | 73,192 | PASS |
| `/faq` | 200 | 78,033 | PASS |
| `/tier-list` | 200 | 67,710 | PASS |
| `/guides` | 200 | 48,701 | PASS |
| `/about` | 200 | 31,295 | PASS |
| `/privacy` | 200 | 29,514 | PASS |
| `/terms` | 200 | 25,629 | PASS |
| `/contact` | 200 | 22,039 | PASS |
| `/icon.png` | 200 | 2,369 | PASS |
| `/sitemap.xml` | 200 | 3,488 | PASS |
| `/robots.txt` | 200 | 123 | PASS |
| `/ads.txt` | 200 | 59 | PASS |
| `/google12f8715471cef7b7.html` | 200 | 53 | PASS |
| `/guides/silver-pines-release-date-price-platforms` | 200 | 77,531 | PASS |
| `/guides/silver-pines-demo-guide` | 200 | 65,830 | PASS |
| `/guides/silver-pines-save-system-phone-booths` | 200 | 59,726 | PASS |
| `/guides/silver-pines-coins-vending-machines-economy` | 200 | 61,259 | PASS |
| `/guides/silver-pines-inventory-storage-guide` | 200 | 60,892 | PASS |
| `/guides/silver-pines-melee-weapons-durability-repair` | 200 | 62,070 | PASS |
| `/guides/silver-pines-guns-ammo-reloading-guide` | 200 | 62,493 | PASS |
| `/guides/silver-pines-stamina-dodge-mementos-guide` | 200 | 60,587 | PASS |
| `/guides/silver-pines-map-backtracking-exploration` | 200 | 62,581 | PASS |
| `/guides/silver-pines-beginner-guide` | 200 | 65,487 | PASS |

**23 / 23 PASS · 0 未验证 · 0 `HTTP=000` · 0 `size=0`。**

补充验证：sitemap 含 **18 条 `<loc>`**（8 静态 + 10 攻略），全部单独 fetch 过；`robots.txt` 全站 Allow 并指向 sitemap；首页 meta 的 `keywords` 首项为 `Silver Pines game`，OG/Twitter 卡完整；`gtag(`/`googletagmanager` **0 次**（GA4 正确关闭）；AdSense script 存在。

> ⚠️ **不加 `--resolve` 时 `HTTP=000`** —— 本机 DNS 把域名污染到不可达 IP。这是环境问题不是站点故障，**未记为失败**，也**未记为 PASS**，而是通过 `--resolve` 取到真实 200 后判定。

---

## 七、与门禁报告（17/20）的差异 —— 需主 Agent 知悉

| 项 | 门禁报告 | 本轮实测 | 性质 |
|---|---|---|---|
| 裸词污染 | 前 10 条 Suggest 仅 3 条为本作 | **独立复现：10 条建议中 3 条指向本作** | ✅ **一致**，门禁判断被证实 |
| 12 条"已验证机制" | 列为已验证 | **5 条无法复核**：`gun locker code`、`herbs/glass bottle`、`camera photo map`、`hip pouch`、`stiletto` | ⚠️ **部分不成立** —— 已降级为「无可验证来源」或不写，**未当成事实写出去** |
| 机制词搜索需求 | 未强调 | **20 条机制种子 17 条零建议** | ⚠️ **门禁未提示「机制当前无量」** —— 本轮补上：机制页定位为发售后抢位，不是当前流量来源 |
| CJK 渠道 | 记为可达 | **zh-CN 3/5 响应截断、ja 3/4 空建议** | ⚠️ **实际可用性低于门禁描述** —— 已记为「未验证」而非「零建议」 |
| appreviews | 采集成功 | **curl 失败，不可复现** | ⚠️ 沿用门禁记录值并注明来源日期 |
| 建议篇数 | 8-10 篇 | **采纳 10 篇 P0** | ✅ 一致 |
| FAQ 篇目 | 建议 FAQ 1 篇 | **改为 `/faq` 专页（31 条）+ 首页 FAQ 区块（17 条）** | ⚠️ **主动调整**：若 FAQ 既做攻略页又做专页会与 10 篇 P0 的问答段落自噬 |

---

## 八、规则级发现（建议主 Agent 归档）

1. **`silver pines demo shotgun code` 是真实存在的「找秘籍」意图，也是最容易诱发编造的词。** 本轮的处置是**用诚实答案占位**（「无任何可验证来源，引用具体按键序列的页面都是猜测」）。建议把这条写进 Profile：**明确秘籍类查询（`X code` / `X cheat` / `X secret`）在来源不可验证时的标准答复模板** —— 否则每个新站都会各自决定，迟早有人选择编一个。
2. **「机制词零建议」不等于「机制页不该做」，但等于「机制页不是当前流量来源」。** 门禁报告倾向把机制列为已验证卖点，本轮实测显示 Suggest 里 17/20 条机制种子完全无建议。建议在建站细则里加一句：**机制类选题 MUST 标注其在 Suggest 的实际状态（有量 / 占位）**，避免主 Agent 误判 ROI。
3. **`hl=zh-CN` 的 GBK 截断是一个新的采集陷阱。** 本轮 3/5 条中文查询在字节层被截断，若按「空数组」处理会得出「中文零需求」的错误结论。**截断 MUST 记为「未验证」，MUST NOT 记为「零建议」。** 建议补进 `harvest-keywords.md`。
4. **`public/` 全局 gitignore 的告警在本仓不适用。** 实测 `git check-ignore` 对 `silverpineswiki/public/*` 无命中，`dressmakerwiki/public/` 亦正常入库。建议核实 brief 中的 `Public/` 规则是否只在某个特定 worktree/文件系统上成立，否则每次建站都要重复验证一遍。

---

## 九、遗留项 / 未验证清单（交接给主 Agent）

| 项 | 状态 | 处置 |
|---|---|---|
| GA4 Measurement ID | **未配置**（`SITE_CONFIG.googleAnalyticsId = ''`） | 手动：建 GA4 property → 填 `seo-config.ts` |
| GA4 propertyId（dashboard） | `'PENDING'` | 手动：`dashboard/lib/sites.ts` 的 `Silver Pines Wiki` 条目，已附注释说明三处需同步修改 |
| GSC 提交 | **未做** | 验证文件线上可访问（`google12f8715471cef7b7.html` → 200） |
| 价格 | **官方未公布** `[Unconfirmed]` | **发售日（2026-10-08）必须更新** |
| 本体评测数 | **0**（发售前） | 发售后更新 |
| Demo 评测 802 / 95.9% | 二手指标 **未复现** | 发售前复验并更新日期 |
| 通关时长 / 区域名 / 武器清单 / 伤害值 / Memento 清单 | `[Unconfirmed]` | 发售后从正式版核实 |
| 5 条门禁机制（gun locker code / herbs / camera map / hip pouch / stiletto） | **无可验证来源** | 不写，或保持「无来源」答复 |

---

## 十、自检

- [x] 关键词采集完成 → `keyword-results/Silver-Pines.md`（62 查询 / 102 原始 / 67 去重 / 45 游戏意图）
- [x] 裸词 `Silver Pines` **未**作为主关键词；全站锚定 `silver pines game`
- [x] pnpm（非 npm）；`pnpm-lock.yaml` 入库；`vercel.json` `installCommand: pnpm install`
- [x] geist 自托管；`next/font/google` 0 次
- [x] `lib/seo-config.ts` 单一真源；`googleAnalyticsId: ''`（**无假回退值**）
- [x] 10 篇 P0 攻略（1000-1500 词为目标，4 篇略超），问题导向标题
- [x] 三级来源标注 + 123 处 `[Unconfirmed]` + 页脚 Sources
- [x] QA quick → `.agent/qa-build009-silverpines.md`（**PASS**，0 🔴）
- [x] `pnpm build` ✓；`vercel --prod --yes`（**非 `npx vercel`**）→ 别名 `silverpineswiki.vercel.app`
- [x] 线上 23/23 路由 200，**0 处记为「未验证」当 PASS**
- [x] Dashboard 注册（propertyId `PENDING` + 手动配置注释）
- [x] **未** 修改 `.agent/expand-daily.json` / `.agent/build-history.json` / `STATS-游戏站点统计.md`
- [x] **未** `git commit` / `git push`
- [x] **未** 触碰 `sephiriawiki/` / `themoundwiki/` / `spiritvalewiki/` / `tearsofmetalwiki/` / `grainrotwiki/`
- [x] **Phase 2（P1 攻略）本轮未做** —— 按停止条件，Phase 1 完成后输出结论
