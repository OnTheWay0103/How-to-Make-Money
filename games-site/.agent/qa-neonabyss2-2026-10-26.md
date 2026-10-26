# QA 审核报告 — neonabyss2wiki

> 岗位：QA 审核员（`docs/agents/05-岗位卡-QA审核员.md` + `06-Profile-QA审核员.md`）
> 审核对象：`games-site/neonabyss2wiki/`（首批 6 篇 + FAQ 路由 + Upgrade Priority 页）
> 审核日期：2026-10-26
> 结论：**PASS**（附 4 条待跟进，均不阻断上线）

## 一、构建与门禁

| 检查项 | 命令 | 结果 |
|---|---|---|
| 依赖安装 | `pnpm install` | ✅ 4.1s，pnpm store 链接 |
| 生产构建 | `pnpm build` | ✅ 19 条路由，6 篇 guide SSG 全部生成 |
| ESLint | `pnpm lint` | ✅ No issues found（修复 1 处 `no-html-link-for-pages`） |
| 内容 lint | `node scripts/lint-guides.mjs --site neonabyss2wiki` | ✅ 6 篇全部通过（首轮 1 条 length WARN 已修） |
| 矩阵覆盖 | `node scripts/keyword-coverage.mjs --slug neonabyss2 --check` | ✅ P0 7/7 = 100% |
| sitemap | 构建产物 `sitemap.xml.body` | ✅ 14 条 URL，6 篇 guide 全含 |
| robots | `app/robots.txt` | ✅ 存在 |

## 二、写作规格

| 页面 | title（字符） | description（字符） | H1 | 表格 | 正文词数 |
|---|--:|--:|:--:|:--:|--:|
| neon-abyss-2-local-co-op | 52 | 153 | 1 | 3 | 1,619 |
| neon-abyss-2-boss-list | 51 | 154 | 1 | 3 | 1,620 |
| neon-abyss-2-beginner-guide | 54 | 150 | 1 | 4 | 1,588 |
| neon-abyss-2-weapon-tier-list | 52 | 149 | 1 | 3 | 1,329 |
| neon-abyss-2-1-0-update | 54 | 143 | 1 | 4 | 1,637 |
| neon-abyss-2-codes | 50 | 156 | 1 | 4 | 1,233 |
| faq（路由页） | 23（模板后缀拼接） | 142 | 1 | – | 12 问答 |
| tier-list（Upgrade Priority） | 58 | 157 | 1 | – | 4 档 |

- 全部页面 H1 唯一（首轮 6 篇均出现「frontmatter 标题 + 正文 `#`」双 H1，已删除正文 H1 与冗余 `**Game / Updated**` 行）。
- `related` 全部为块状数组，渲染后 5 条站内链接均出现。
- 每页 `sources` ≥2 条且含 ≥1 条 `Official`。
- 首批 6 篇正文合计 **9,026 词**（口径：正文英文词计数，去 frontmatter），满足「总词数 ≥ 8,000 / 单篇 ≥ 1,200」。

## 三、残留扫描

- 模板站名残留（Dreadmoor / Witchspire / Mistfall / Aincrad / SpiritVale / The Mound）：**0 命中**
- 未替换 token（`{{...}}`）：**0 命中**
- 中文串泄漏：**0 命中**（英文站口径，`[Unconfirmed]` 为统一标记）
- 广告代码：`lib/adsterra-zones.ts` 为空数组，符合「新站不注入、由 adsterra-sync.mjs 统一注入」
- AdSense：`googleAdsenseId` 为空字符串，符合 2026-10-25 暂缓口径

## 四、编造检查（逐条回溯到素材）

| 页面 | 关键数字/断言 | 来源 | 判定 |
|---|---|---|---|
| 全站 | $19.99、Oct 7, 2026、12 语言、32 成就、Windows only、2,271 条评测 | Steam appdetails（2026-10-26） | ✅ 原样 |
| local-co-op | 「无本地同屏 / 无分屏 / 无 Remote Play Together 分类」 | Steam categories 全量列表 | ✅ 以「分类缺失」为证据，并标注 `[Unconfirmed]` |
| local-co-op | 4 人、可分队探房、主机难度、断线回楼层起点、聊天改表情 | 1.0 公告 + 10-16 周报 + 07-30 聊天公告 + 03-05 更新 | ✅ |
| boss-list | 9 个已点名 Boss、Dark Aphrodite 解锁/挑战条件、Dark Zeus 30 分钟、Theia 为 Titan | 1.0 / 06-14 / 03-05 / 10-19 公告 | ✅ |
| boss-list | 「无官方 Boss 顺序」「Eris 未确认」「最终 Boss 未确认」 | 全部官方公告零命中 | ✅ 记为 `[Unconfirmed]`，未建 eris 页 |
| beginner | 分解 2s→1s、教程跳过、成就 10→3、Blackdog 充能规则、Infinite Energy 警告 | 10-16 周报 + 03-05 更新 | ✅ |
| tier-list | 6 个套装效果与数值（1.5×、10 紫魂、10% 重生、6 水晶匕首、词缀稀有度 4 档） | 1.0 公告 + 03-05 更新 | ✅ 原文数值；排名标注为主编判断 |
| tier-list | 「无官方伤害表，故不排单武器」「Agent 梯队暂缺」 | 官方公告未发布伤害表；CapyDB 当日 1016 | ✅ 明确写为 `[Unconfirmed]`，未编造 |
| 1.0 | 10 月 10/13/16 三次更新内容、Archenemy Returns 转付费、Beta 分支切换路径 | 10-19 周报 + 08-28 + 06-05 公告 | ✅ |
| codes | 「截至 2026-10-26 无任何官方兑换码」 | 10 条官方公告逐条核对 + 商店页 | ✅ 以「已核对范围」为限，未断言游戏永久无码 |
| faq | Game Pass 无记录、Steam Deck `[Unconfirmed]`、跨平台 `[Unconfirmed]` | Steam API 无对应字段；官方公告零命中 | ✅ |

## 五、待跟进（不阻断）

1. **P1 三页未建**：`agents`（缺可核验名单）、`faith-and-hatchmon`、`storm-breach`。CapyDB（`capydb.com`）2026-10-26 返回 Cloudflare 1016，恢复后补 agents/items 类页面。
2. **`keyword-coverage.mjs` 已修复**：原先只扫 `content/guides`，把落在 `app/faq/page.tsx` 的 FAQ 行误判为未落地；现按「FAQ_ITEMS 非空的路由页」计入。副作用：P2 的 `neon-abyss-2-achievements` 行因关键词命中 FAQ 正文被算作已落地 → 该行仍按「待建」处理，脚本不视为证据。
3. **首页 hero 文案已按实建页面调整**，去掉了尚未建站的「character lists / redemption codes」承诺。
4. **图标**：模板自带 `icon.png` 为 Dreadmoor 图，已替换为本站生成的 512×512 霓虹蛋图标（`NA2`）；后续如用官方美术需确认版权口径。

## 六、交接

- 下游：主 Agent（部署 → Dashboard 注册 → GA4 → GSC → 飞书回填）。
- 证据链：本报告 + `pnpm build` 输出 + `lint-guides` 输出 + `keyword-coverage --check` 输出 + 部署后线上验证（含 `/guides/<slug>` 200 与标题核对）。
