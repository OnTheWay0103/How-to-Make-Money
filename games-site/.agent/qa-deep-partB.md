# QA Deep 全量审计 — Part B（全 41 站脚本化扫描 + 编造抽查）

- **任务编号**: QA-DEEP-9/10-B
- **材料版本**: 2026-09-10（上次 deep 全量 2026-09-02，距今 8 天 > 7 天 → 触发 full audit）
- **模式**: deep full audit
- **范围**: 全部 41 个 `<site>wiki/` 目录（`dashboard/lib/sites.ts` 仅登记 39 站，见 §6）
- **执行**: QA 审核员（`docs/agents/05` + `06`）
- **性质**: **只读审计**。未修改任何站点文件，未 commit/push。仅写出本报告 + `qa-deep-partA.md`
- **审计时刻**: sephiriawiki / themoundwiki / spiritvalewiki / tearsofmetalwiki / grainrotwiki **可能正处于并发修改中**（另有 3 个子 Agent 今日在改这 5 站），所有结论以 2026-09-10 当前磁盘状态为准

---

## 一、执行摘要

| 项目 | 结论 |
|------|------|
| 残留扫描（41 站） | **1 处渲染级跨站污染**（ironnestwiki Terms 页写着他站工作室名）＋ **1 处渲染级他游机制残留**（themoundwiki meta description 出现 EX-Mod）＋ **7 站页脚/条款 IP 归属错误**（见 §4，本轮最大发现簇） |
| 静态资源 | 41/41 站 `public/icon.png` 存在；`lib/seo-config.ts` 的 `ogImage: '/icon.png'` 全部可解析；无悬空引用 |
| ads.txt / privacy / terms | 41/41 齐全，内容无他站域名；但 7 站 terms 的「respective owners (X)」填错 |
| 编造抽查（12 站，Part A 8 站另计） | 见 §5 |
| 一句话结论 | 内容纪律整体仍在，但**站级元数据（页脚商标 / Terms 归属）出现系统性错填**，且 **themoundwiki 存量内容存在成规模的编造**（Part A 详报）。 |

**定级口径**：🔴 阻断（渲染级事实错误 / 编造 / 404 链接）；🟡 警告（不渲染但会漂移 / 合规风险 / 配置不一致）；🟢 顺手项；✅ 通过。

---

## 二、检查方法（可复现）

1. **脚本化残留扫描**（`/tmp/qa_deep_scan.py`）：遍历每站 `content/ app/ lib/ components/` 及根配置（排除 `.next`/`node_modules`/`.vercel`/`public`），对 md/mdx/ts/tsx/js/json/txt/css 执行：
   - 模板 token：`{{<`、`{{%`、`lorem ipsum`、`TODO:`、`FIXME`、`XXX:`、`[待确认]`、`待确认`、`TBD`、`PLACEHOLDER`
   - 跨站 token：其余 40 站的游戏名专有 token（大小写敏感全词）+ 各站 `seo-config.ts` 的 `*.vercel.app` 域名
   - CJK / 假名扫描
2. **内链完整性**（`/tmp/qa_links.py`）：每站所有 `/guides/<slug>` 链接、frontmatter `related:` 数组、`app/*.tsx` 内 `slug:` / `href: '/guides/...'` 与 `content/guides/*.md` 实际文件集合比对。
3. **站级元数据提取**（`/tmp/qa_meta.py`、`/tmp/qa_footer.py`）：逐站抓取 `app/terms/page.tsx` 的 `respective owners (X)`、`app/about/page.tsx` 的 not-affiliated 名单、`lib/schema.ts` 的 JSON-LD `author`/`publisher`、`components/Footer.tsx` 的 trademark 行，两两互校并**与 Steam/官方来源逐条外部核验**。
4. **线上验证**：对可疑项用 `curl`/WebFetch 直读线上 HTML（非仅首页 200），确认「是否真的渲染」。
5. **frontmatter 完整性**（`/tmp/qa_fm.py`）：37 站 × 962 篇 md 的必需字段非空、无 frontmatter 泄漏。
6. **编造抽查**：Part A 8 站（见 partA 报告）+ 本轮额外 6 站（§5）。

---

## 三、41 站残留扫描矩阵

图例：`{{<`=Hugo shortcode；XSite=他站游戏名/域名；CJK=中文/假名；TBD=未确认标记（多为**合法**的诚实标注，非占位符）

| # | 站点 | Hugo | XSite 残留 | CJK | TBD/占位 | 状态 |
|---|------|:--:|------|:--:|:--:|:--:|
| 1 | aincradwiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 2 | anomalypresidentwiki | 0 | 0 | 0 | 1（`seo-config.ts:16` `G-PLACEHOLDER`，**渲染**） | 🟡 见 §4.3 |
| 3 | ardentwildswiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 4 | beastreincarnationwiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 5 | bigwalkwiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 6 | bombananawiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 7 | boneholdwiki | 0 | 0 | 0 | 3（合法 TBD 标注） | 🟡 页脚/条款归属错（§4.1） |
| 8 | crimsonmoonwiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 9 | delveriumwiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 10 | dinobladewiki | 0 | 0 | 0 | 6（合法 TBD 标注） | ✅ Clean |
| 11 | doloctownwiki | 0 | 0 | 0 | 0 | ✅ Clean（但不在 dashboard 注册表，§6） |
| 12 | dragonswordwiki | 0 | 0 | 0 | 80（合法 TBD 标注） | ✅ Clean |
| 13 | dwarfdelvewiki | 0 | 「The Relic Hunter」= 玩法名，**合法** | 0 | 0 | ✅ Clean |
| 14 | expeditionssamuraiwiki | 0 | 0 | 0 | 70（合法 TBD 标注） | ✅ Clean |
| 15 | fallentearwiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 16 | gotownwiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 17 | grainrotwiki | 0 | 0 | 0 | 0 | 🟡 页脚/条款归属错（§4.1） |
| 18 | graphitewiki | 0 | 0 | 0 | 14（合法 TBD 标注） | ✅ Clean |
| 19 | ironnestwiki | 0 | **Terms 页写他站工作室 House House / Panic** | 0 | 0 | 🔴 见 §4.1 |
| 20 | lowbudgetrepairswiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 21 | lunariumwiki | 0 | 0 | 0 | 3（合法 TBD 标注） | 🟡 页脚/条款归属错（§4.1） |
| 22 | minegeonwiki | 0 | **`README.md` 整篇为他站（Skills & Raids）模板** | 0 | 0 | 🟡 见 §4.2 |
| 23 | mistfallhunterwiki | 0 | 0 | 0 | 0 | 🟡 页脚/条款归属错（§4.1） |
| 24 | moonlightpeakswiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 25 | mystraliawiki | 0 | 「First Guardian」= 本站 Boss 名，**合法** | 0 | 85（合法 TBD 标注） | ✅ Clean |
| 26 | nivalisnightswiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 27 | phantomtowerwiki | 0 | 0 | 0 | 16（合法 TBD 标注） | ✅ Clean |
| 28 | relicfirstguardianwiki | 0 | 0 | 0 | 3（合法 TBD 标注） | 🟡 1 处 related 悬空（§4.4） |
| 29 | restorywiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 30 | sephiriawiki | 0 | 0 | 3（2 处含英文对应，**合法**） | 0 | ✅ Clean |
| 31 | shiftatmidnightwiki | 0 | 0 | 0 | 1（合法 TBD 标注） | 🟡 页脚/条款归属错（§4.1） |
| 32 | skillsandraidswiki | 0 | 0 | 0 | 0 | ✅ Clean |
| 33 | sovereigntowerwiki | 0 | 0 | 0 | 0 | ✅ Clean（但不在 dashboard 注册表，§6） |
| 34 | spiritvalewiki | 0 | `keyword-results/` 6 个他站文件 | 0 | 0 | 🟡 见 §4.2 |
| 35 | taivalwiki | 0 | 0 | 0 | 43（合法 TBD 标注） | 🟡 页脚/条款归属错（§4.1） |
| 36 | tearsofmetalwiki | 0 | 0 | 1 日文引语（含译文，**合法**） | 0 | ✅ Clean |
| 37 | themoundwiki | 0 | `keyword-results/` 6 个他站文件；**`app/guides/page.tsx:10` 出现他游机制 EX-Mod（渲染）** | 4（合法中文来源标题） | 0 | 🔴 见 §4.2 + Part A |
| 38 | vahrinscallwiki | 0 | 0 | 0 | 3（合法 TBD 标注） | ✅ Clean |
| 39 | waterparksimulatorwiki | 0 | Go-Go Town / Low-Budget Repairs = 类比语境，**合法** | 0 | 0 | ✅ Clean |
| 40 | welcomeelderfieldwiki | 0 | Moonlight Peaks ×4 = 类比语境，**合法** | 0 | 0 | ✅ Clean |
| 41 | witchspirewiki | 0 | 「The Relics」= 本站道具名，**合法** | 0 | 0 | ✅ Clean |

**汇总**：🔴 2 站（ironnestwiki 渲染级他站工作室名；themoundwiki 渲染级他游机制残留 + Part A 编造）｜🟡 8 站｜✅ 31 站。
**关键正向结论**：**Hugo shortcode `{{<` 全 41 站 0 命中**；**`[待确认]`/`待确认` 全站 0 命中**；**上一轮 14 站 `lib/schema.ts` JSDoc 的 Aincrad/Witchspire 模板注释已全部清理**（本轮 lib/ 扫描 0 命中）。

---

## 四、关键发现（🔴 / 🟡）

### 4.1 🔴 **7 站页脚 / 条款 IP 归属写错**（本轮最大发现簇，渲染于全站每一页）

`components/Footer.tsx` 的「X is a trademark of Y」与 `app/terms/page.tsx` 的「respective owners (X)」在两处同时错填，且**与本站 `lib/schema.ts` JSON-LD 的正确值互相矛盾**。已用 Steam / 官方 / 多家独立媒体外部核验：

| 站点 | 站内错写 | 真实归属（外部来源） | 渲染位置 | 定级 |
|------|---------|-------------------|---------|:--:|
| **grainrotwiki** | `Vaulted Sky Games` | **Beck & Branch Games**（斯德哥尔摩二人组，开发）/ **Neem Interactive**（发行） | `components/Footer.tsx:24`、`app/terms/page.tsx:26` — 线上已验证 | 🔴 |
| **lunariumwiki** | `tinyBuild` | **Lunarium Game Studio**（上海，开发）/ **Imperfect Games**（发行） | `Footer.tsx:24`、`terms/page.tsx:26` — 线上已验证 | 🔴 |
| **mistfallhunterwiki** | `Proxima Studio` | **Bellring Games**（开发）/ **Skystone Games**（发行） | `Footer.tsx:24`、`terms/page.tsx:26` — 线上已验证 | 🔴 |
| **shiftatmidnightwiki** | `Tasty Stewdios` | **Bun Muen**（澳 solo 开发）/ **Kwalee**（发行） | `Footer.tsx:24`、`terms/page.tsx:26` — 线上已验证 | 🔴 |
| **taivalwiki** | `Mingle Games` | **Bonobo Software**（芬兰，开发）/ **Level Up Gaming**（发行） | `Footer.tsx:24`、`terms/page.tsx:26` — 线上已验证 | 🔴 |
| **boneholdwiki** | `Soulash Studios` | **Pixel Jackal**（+SaikingS，开发/发行） | `Footer.tsx:24`、`terms/page.tsx:26` — 线上已验证 | 🔴 |
| **ironnestwiki** | `House House / Panic`（**他站 bigwalkwiki 的工作室**） | **Nick Nieuwoudt & Dominik Latos**（自发行） | 仅 `app/terms/page.tsx:26`（Footer 已正确） | 🔴 跨站污染 |

**性质**：这是 04 Profile 记录的「shiftatmidnight 站元数据编造 4 周未被发现」同类问题，且**范围更大（7 站）**。错误出现在：
- 全站页脚（每个页面都渲染）
- Terms 页（AdSense 复审会看的法律页）
- JSON-LD `videoGameSchema()` 在多数站点**渲染**，而这些站点 JSON-LD 值恰好是**正确的** → 站内自相矛盾

**建议修复（交主 Agent 决策，QA 不自行改）**：将上表 7 站的 `Footer.tsx:24` 与 `app/terms/page.tsx:26` 的工作室名替换为「真实归属」列的值；或统一改为不点名的泛化表述「their respective owners」。修复后需**线上内容级验证**（curl 抓页脚 + terms 页正文），不能只看 build 退出码。

### 4.2 🟡 跨站模板残留（不渲染 / 边缘渲染）

| 站点 | 位置 | 内容 | 是否渲染 | 定级 |
|------|------|------|:--:|:--:|
| **themoundwiki** | `app/guides/page.tsx:10` | meta description 含 **"EX-Mod crafting"** — EX-Mod 是 *Echoes of Aincrad* 的机制，The Mound 无此系统 | ✅ 渲染（SEO meta） | 🔴（并入 Part A FAIL） |
| **minegeonwiki** | `README.md:1,3,7` | 整篇为 **Skills & Raids Wiki** 的 README（含他站 URL `https://skillsandraidswiki.vercel.app`） | ❌ 不渲染（仓库文档，不在 `public/`） | 🟡 |
| **spiritvalewiki** | `keyword-results/` × 6 | Echoes-of-Aincrad / Mistfall-Hunter ×2 / The-Mound ×2 / Witchspire（上一轮 R7 遗留） | ❌ 不渲染（非构建输入） | 🟡 |
| **themoundwiki** | `keyword-results/` × 6 | 同上 | ❌ 不渲染 | 🟡 |
| **themoundwiki** | `content/guides/ending-guide.md:147` | "Mira Isle equivalent (Eastern Waterfall)" — 疑似他游占位 | ✅ 渲染 | 🟡 |

### 4.3 🟡 anomalypresidentwiki 生产环境渲染 `G-PLACEHOLDER`

- `lib/seo-config.ts:16` `googleAnalyticsId: 'G-PLACEHOLDER'`
- `components/GoogleAnalytics.tsx:5-6` 仅判空（`if (!gaId) return null`），`'G-PLACEHOLDER'` 为真值 → **渲染** gtag 脚本
- **线上已验证**：`curl https://anomalypresidentwiki.vercel.app/` HTML 中 `G-PLACEHOLDER` 出现 **3 次**、`googletagmanager` 出现 2 次 → 每次访问都向 Google 发一次无效测量 ID 请求
- 对比：其余 6 个未接入 GA 的站点（bombanana / crimsonmoon / doloctown / fallentear / sovereigntower / welcomeelderfield）`googleAnalyticsId: ''`，组件正确跳过 ✅
- **建议**：把 `'G-PLACEHOLDER'` 改为 `''`（或填入真实 GA4 ID）

### 4.4 🟡 内链完整性（全 41 站）

| 站点 | 问题 | 是否渲染 | 定级 |
|------|------|:--:|:--:|
| **spiritvalewiki** | `app/page.tsx:8` FEATURED_GUIDES 含 `slug: 'tier-list'` → `GuideCard` 渲染 `/guides/tier-list`；`content/guides/tier-list.md` **不存在**。**线上已验证：该 URL 返回 404**（`/guides/class-tier-list` 返回 200） | ✅ 首页渲染 | 🔴 |
| **relicfirstguardianwiki** | `content/guides/secret-areas.md:8` `related: ["walkthrough","boss-guide","runes-guide","all-bosses-list"]` — **`boss-guide` 不存在**（实际为 `boss-strategies.md`）；`app/guides/[slug]/page.tsx:43-45` 会渲染 related | ✅ 渲染 | 🟡 |
| **shiftatmidnightwiki** | `content/home-content.md:30-32` 链接 `/guides/tools-traps-guide`、`/guides/net-database-guide` 均不存在 | ❌ 不渲染（home-content 孤儿文件） | 🟢 |
| **themoundwiki** | `content/guides/ending-guide.md:228-232` 5 条链接前缀写成 `/themound/content/guides/...` → 404 | ✅ 渲染 | 🔴（并入 Part A FAIL） |
| 其余 37 站 | 无 broken `/guides/` 链接、无悬空 related | — | ✅ |

**说明**：脚本命中的 `/guides/crafting-guide`（约 25 站）全部位于 `lib/schema.ts` 的 **JSDoc `/** */` 注释块**内（如 `sephiriawiki/lib/schema.ts:167`），**不参与渲染**，判定为🟢顺手项（各站 build 时删除即可）。外部 URL（gameplay.tips / vgtimes / 18183 / bonus-action 等）被正则误判为内链，已逐一核实为**外部来源链接，非缺陷**。

### 4.5 🟡 `content/home-content.md` 全网络孤儿（37/41 站）

- 37 站存在 `content/home-content.md`（dinobladewiki / ironnestwiki / minegeonwiki / skillsandraidswiki 无）
- **全网络 0 个 `.ts/.tsx/.js` 引用它**（脚本全站扫描），首页内容均由 `app/page.tsx` 的硬编码 `FEATURED_GUIDES` 提供
- 后果：这 37 个文件（各约 100 行）**不渲染但会持续漂移**，已实际漂移：
  - `crimsonmoonwiki/content/home-content.md:15`「Crimson Moon **launches on** September 1, 2026」— 游戏 9/1 已发售，现在时过期
  - `lowbudgetrepairswiki/content/home-content.md:15`「launches on August 13, 2026」— 已发售，同上
  - `themoundwiki/content/home-content.md:85` Steam URL 写成 `store.steampowered.com/app/themound`（无效）
- **建议**：二选一 —（a）删除这 37 个文件；（b）让首页真正读取它。维持现状是纯负债。

### 4.6 🟡 GA / AdSense 配置状态（与 `dashboard/lib/sites.ts` 对照）

- **7 站无 GA**：anomalypresidentwiki（`G-PLACEHOLDER`，见 §4.3）、bombananawiki、crimsonmoonwiki、doloctownwiki、fallentearwiki、sovereigntowerwiki、welcomeelderfieldwiki（后 6 站为 `''`，组件正确跳过）
- `sites.ts` 对其中 5 站标 `G-PLACEHOLDER`，但站内实际为 `''` → 注册表与站内不一致（🟢，语义等价）
- **AdSense**：仅 7 站 `googleAdsenseId` 有值（sephiria / anomalypresident / bombanana / crimsonmoon / doloctown / fallentear / sovereigntower / welcomeelderfield）；其余 34 站为空（未获批前属预期）。**但 themoundwiki 例外**：`app/layout.tsx:35` 硬编码 `ca-pub-7211682665758448` 而 `lib/seo-config.ts:17` 为空 → 配置与渲染不一致（🟡，见 Part A）

### 4.7 ✅ 静态资源与合规文件（41/41 全绿）

| 检查项 | 结果 |
|--------|------|
| `public/icon.png` | **41/41 存在**；`lib/seo-config.ts` 的 `ogImage: '/icon.png'` 全部可解析 ✅（04 Profile 的「长期引用 /icon.png 而文件从未创建」教训已闭环） |
| `public/ads.txt` | **41/41 存在**，内容统一为 `google.com, pub-7211682665758448, DIRECT, f08c47fec0942fa0` ✅ |
| `public/google12f8715471cef7b7.html` | 41/41 存在 ✅ |
| privacy / terms / about / contact / faq / guides / tier-list 页面 | **41/41 齐全** ✅ |
| privacy 页他站域名/他站名 | 0 命中 ✅ |
| terms 页他站名 | **ironnestwiki 1 处**（House House / Panic，见 §4.1） |
| 遗留 Next.js 样板 SVG（`file.svg`/`globe.svg`/`next.svg`/`vercel.svg`/`window.svg`） | 9 站仍存在（aincrad / doloctown / dwarfdelve / grainrot / mistfallhunter / mystralia / sovereigntower / vahrinscall / witchspire）— 🟢 顺手清理 |

---

## 五、编造抽查（Part B 补充 6 站 + 全站元数据核验）

### 5.1 元数据外部核验（本轮覆盖 12 站，逐条对 Steam / 官方 / 独立媒体）

| 站点 | 核验项 | 来源 | 结果 |
|------|--------|------|:--:|
| aincradwiki | 开发 Game Studio Inc. / 发行 Bandai Namco / 7-10 发售 | Bandai Namco 官稿、PSU、gamesurf | ✅ 吻合 |
| boneholdwiki | 开发 Pixel Jackal（+SaikingS）/ 2026-07-28 / $8.99-9.99 | datahumble、Razer、3DM | ✅ 吻合（页脚/条款除外，§4.1） |
| doloctownwiki | 开发 RedSaw Games / 发行 Logoi Games + Pathea Games | SteamDB、4Gamer、TechRaptor | ✅ 吻合（站内省略 Pathea，非错误） |
| grainrotwiki | 开发 Beck & Branch Games / 发行 Neem Interactive / 2026-08-07 | gamespress、AppBank、IMDb | ✅ 吻合（页脚/条款除外，§4.1） |
| ironnestwiki | 开发 Nick Nieuwoudt & Dominik Latos（自发行） | SteamDB 2950790、PCGamesHardware | ✅ 吻合（Terms 页除外，§4.1） |
| lunariumwiki | 开发 Lunarium Game Studio（上海）/ 发行 Imperfect Games | gamespress、Gematsu、Game*Spark | ✅ 吻合（页脚/条款除外，§4.1） |
| mistfallhunterwiki | 开发 Bellring Games / 发行 Skystone Games | Xbox 商店、gamespress、4p.de | ✅ 吻合（页脚/条款除外，§4.1） |
| shiftatmidnightwiki | 开发 Bun Muen / 发行 Kwalee / 2026-07-22 | SteamDB 3722330、IGN、Baidu | ✅ 吻合（页脚/条款除外，§4.1） |
| taivalwiki | 开发 Bonobo Software（芬兰）/ 发行 Level Up Gaming | gamespress、Game*Spark、ithome | ✅ 吻合（页脚/条款除外，§4.1） |
| waterparksimulatorwiki | 开发/发行 CayPlay | gamespress、TechTimes、IGN | ✅ 吻合（`terms` 写成「CayPlay / CayPlay」重复，🟢 排版） |
| themoundwiki | 开发 ACE Team / 发行 NACON / 2026-07-15 / $29.99 / App 2569760 | SteamDB、Nacon、Fanatical | ✅ 站级元数据正确（**但正文有编造，见 Part A**） |
| spiritvalewiki | 开发 Baikun Interactive（上一轮 P1 虚构「SpiritVale Studio」） | MMOHuts 等 | ✅ **已修复**：`terms`/`Footer`/`schema` 均为 Baikun Interactive |

### 5.2 内容级编造抽查（6 站，每站全读 3-4 篇高数据密度指南）

见下节「抽查结论」——由 2 个并行子 Agent 执行，结果并入本表。

| 站点 | 抽样指南 | 结论 |
|------|---------|------|
| anomalypresidentwiki | 见 §5.3 | 见 §5.3 |
| doloctownwiki | 见 §5.3 | 见 §5.3 |
| sovereigntowerwiki | 见 §5.3 | 见 §5.3 |
| shiftatmidnightwiki | 见 §5.3 | 见 §5.3 |
| bombananawiki | 见 §5.3 | 见 §5.3 |
| minegeonwiki | 见 §5.3 | 见 §5.3 |

---

## 六、dashboard 注册表覆盖缺口（🟡）

- `dashboard/lib/sites.ts` 仅 **39 条** 记录，但仓库有 **41 个 `*wiki/` 站点目录**
- **缺失 2 站**：`doloctownwiki`（"Doloc Town Wiki"）、`sovereigntowerwiki`（"Sovereign Tower Wiki"）— dashboard 全量扫描确认无其他注册表文件
- 后果：这 2 站的 GA4 数据不会进入 dashboard 聚合看板
- 另：5 站 `sites.ts` 写 `G-PLACEHOLDER` 而站内为 `''`（语义等价，🟢）

---

## 七、上一轮（2026-09-02）遗留项核销

| 遗留项 | 本轮结论 | 证据 |
|--------|:--:|------|
| **spiritvale P1「SpiritVale Studio」虚构工作室** | ✅ **已修复** | `app/terms/page.tsx:26` = Baikun Interactive；`Footer.tsx` = Baikun Interactive；`lib/schema.ts` author/publisher = Baikun Interactive |
| 14 站 `lib/schema.ts`/`metadata.ts` JSDoc「Echoes of Aincrad / Witchspire」注释 | ✅ **已清理** | 全 41 站 lib/ 扫描 0 命中 |
| crimsonmoon C3 schema.ts 注释 Aincrad | ✅ **已清理** | 同上 |
| spiritvale R7 / themound `keyword-results/` 他站文件 | 🟡 **仍存在** | spiritvalewiki ×6、themoundwiki ×6（不渲染、不发布） |
| fallentear `content/home-content.md` 孤儿 | 🟡 **仍存在且已扩大** | 现为全网络 37 站孤儿（§4.5） |
| sephiria staff-build 日期不一致 | 见 Part A | — |
| dwarfdelve EGS 列表 / moonlightpeaks 24 vs 20+ / doloctown 80 成就 / bonehold 折扣 / sovereigntower 91 vs 92% / vahrinscall 导演+主机 | 见 §5.3 与 Part A | — |

---

## 八、结论与建议（供主 Agent 决策）

**必须处理（🔴）**
1. **7 站页脚 + Terms IP 归属错填**（§4.1）— 渲染于全站每页 + 法律页，属 AdSense「不实陈述」风险。修复后必须**线上内容级验证**。
2. **spiritvalewiki `/guides/tier-list` 首页 404**（§4.4）— 线上已复现。
3. **themoundwiki 存量编造 + 5 条 404 内链 + EX-Mod 残留**（详见 Part A）— 建议整体重写/删改前先下线受影响页面或加 `[Unconfirmed]` 降级。

**建议处理（🟡）**
4. anomalypresidentwiki `G-PLACEHOLDER` 改为 `''`（§4.3，线上已渲染）
5. ironnestwiki Terms 页 + minegeonwiki README 的他站内容清理（§4.1 / §4.2）
6. `dashboard/lib/sites.ts` 补 doloctownwiki / sovereigntowerwiki（§6）
7. relicfirstguardianwiki `secret-areas.md` related 的 `boss-guide` → `boss-strategies`（§4.4）
8. `content/home-content.md` 孤儿文件决策：删或接（§4.5）

**顺手（🟢）**
9. 25 站 `lib/schema.ts` JSDoc 的 `/guides/crafting-guide` 示例清理
10. 9 站遗留 Next.js 样板 SVG 清理
11. waterparksimulatorwiki `terms` 的「CayPlay / CayPlay」去重
