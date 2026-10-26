# QA quick — REKA（BUILD-R3-REKA）

> 执行人：建站协调员（自查，非 QA 审核员正式报告）
> 日期：2026-10-26
> 站位：`rekawiki/`｜线上：https://rekawiki.vercel.app
> 依据：`docs/agents/03`、`docs/agents/04`、`docs/STRATEGY-内容生产.md`、`SOP-游戏攻略站上线.md`

## 结论

**PASS（quick）**。首批 7 页全部上线，P0 覆盖率 100%，lint ERROR=0，build exit 0，线上首页与 7 个攻略页均 200，生产 alias 指向本次部署。

未完成项均为**明确不在本单范围**或**需上游/人工处理**：GA4/GSC/Dashboard 注册、站点图标、Adsterra、STATS/台账。无 🔴 阻断项；🟡 6 项（见第五节）。

## 一、构建与静态检查

| 检查 | 结果 | 证据 |
|---|---|---|
| `node scripts/lint-guides.mjs rekawiki` | ✅ ERROR=0 / WARN=0 | 7 篇全部通过 |
| `pnpm install && pnpm build` | ✅ exit 0 | Next.js 16.3.4，20 条静态路由生成成功 |
| 每页 frontmatter title 40–60 字符 | ✅ | 51–55 字符（构建产物另带模板 ` · REKA Game Wiki` 后缀，属全站模板约定） |
| 每页 description 140–160 字符 | ✅ | 140–149 字符 |
| 每页有且仅有 1 个 H1 | ✅ | 7 个构建 HTML 均为 h1=1（H1 由 GuideLayout 渲染，正文无 H1） |
| canonical 指向自身 | ✅ | 7 页均检出 canonical |
| sitemap 含全部攻略 | ✅ | sitemap.xml 中 `guides/reka-*` = 7 |
| related 块状数组 | ✅ | lint 通过；构建后相关推荐可渲染 |
| sources ≥1 Official | ✅ | 7 页均以 Steam 商店页为 Official 基座 |
| 单篇 ≥1,200 词 / 总词数 ≥8,000 | ✅ | 1,222–1,571 词；合计 9,290 词（脚本口径，去 URL） |
| 字体 | ✅ | 模板 geist 自托管，无 `next/font/google` |

## 二、线上验证（本地 DNS 污染，已用 `dig @1.1.1.1` + `curl --resolve`）

| URL | HTTP |
|---|---|
| `https://rekawiki.vercel.app/` | 200 |
| `/guides/reka-beginner-guide` | 200 |
| `/guides/reka-cooking-recipes` | 200 |
| `/guides/reka-how-to-get-flour` | 200 |
| `/guides/reka-leshy-trial` | 200 |
| `/guides/reka-cottage-moving` | 200 |
| `/guides/reka-character-appearance` | 200 |
| `/guides/reka-faq` | 200 |
| `/faq`、`/guides`、`/sitemap.xml`、`/robots.txt` | 200 |

内容级抽验：`reka-cooking-recipes` 线上 HTML 含 “Black Salt”，`reka-leshy-trial` 含 “Barzlin”。

**生产 alias**：`vercel inspect rekawiki.vercel.app` →
`dpl_GD7Z7fLwfpKiX9thuKXiuHChC24X`，url `rekawiki-hrda5qboj-zhaoq0103s-projects.vercel.app`，status `● Ready`，Aliases 列表含 `https://rekawiki.vercel.app` → **指向本次部署**。

## 三、残留扫描

| 扫描项 | 结果 |
|---|---|
| 他站域名（witchspirewiki / aincradwiki / mistfallhunterwiki / themoundwiki / spiritvalewiki / neonabyss2wiki） | 0 命中 |
| 他站游戏名（Witchspire / Aincrad / Mistfall / SpiritVale / Neon Abyss / The Mound） | 0 命中（FAQ 价格表中一条 Steam bundle 名已主动删除，避免误判） |
| Hugo shortcode / 模板正文 | 0 命中 |
| `ca-pub` / AdSense | 0 命中 |
| Adsterra 代码 | `lib/adsterra-zones.ts` 两个 zone 均为空数组；仅模板组件引用，无注入 |
| 中文标记 `[待确认]`、正文 CJK 字符 | 0 命中；不确定项统一 `[Unconfirmed]` |

## 四、编造检查（每个数字的落点）

| 页面 | 关键数字 | 来源 |
|---|---|---|
| 全部 | 发售 2026-10-26 / EA 2024-09-12 / 单机 / 9 语言 / 配置 / ¥76 / -35% ¥49.40 / 截止 11-07 | Steam 商店页（A，抓取 2026-10-26） |
| FAQ | ¥2,300 含税 / PC Steam / 单人 | Famitsu（C，抓取 2026-10-26） |
| 烹饪 | 3 食材、6–12 coins 售价、24 道配方逐项数量 | NineWiki（B）+ Cozy Gaming Panda（B），数值逐行一致；Upcomer（C）交叉 |
| 面粉 | 商人卖面粉/盐/蘑菇；无磨粉步骤 | Critical Hits（C）+ Rutab（C）双源；「是否有磨粉」标 `[Unconfirmed]` |
| Leshy | Barzlin、3 恩惠、最多 20 松果、约 10 次投掷、3 伐木工、1 水果粥+3 普通粥、4 稻草人 | Upcomer（C）+ Rutab（C）双源；数量随程序化地图变化已注明 |
| 小屋 | 召回护符、`Ctrl` 轮盘、绿色预览、跨区单程、旅程食物 | 2UpSkill（B）；官方商店页（A）覆盖「chicken-legged moving house」 |
| 外观 | 起始镜、魔法镜、点蜡烛、摆放大占位、衣服来源 | Critical Hits（C）+ 2UpSkill（B）；官方页（A）覆盖角色自定义 |
| 未证实项 | 美区美元价、主机版、Steam Deck、联机 mod、蛋的稳定来源、磨粉、名字/性别能否改 | 文中均标 `[Unconfirmed]`，未写成事实 |

**素材冲突已记录**：`oven` vs `stove` 命名、第三件恩惠「破陷阱」vs「救被困动物」、松果数量随种子变化 —— 正文按「两说并列/范围表述」处理。

## 五、🟡 待办与已知缺口

| # | 项 | 状态 | 归口 |
|---|---|---|---|
| 1 | `public/icon.png` 仍是模板图（sha1 与 `templates/wiki-base/public/icon.png` 完全相同） | 🟡 待换 REKA 图标 | 主 Agent / 人工 |
| 2 | GA4 `googleAnalyticsId: ''`（按指令不建 property、不填） | 🟡 待人工建 property 后走台账回填 | 主 Agent |
| 3 | Dashboard 未注册（`check-dashboard-registry.mjs` 告警） | 🟡 同上，随 GA4 一起回填 | 主 Agent |
| 4 | GSC 验证文件未放、sitemap 未提交 | 🟡 待人工 | 主 Agent |
| 5 | Adsterra 两个广告位未注入 | 🟡 按规则只由台账 + `adsterra-sync.mjs` 写入 | 人工台账 |
| 6 | `/tier-list` 的 `PRIORITY_TIERS` 为空（本作无角色/武器层级系统，未硬造榜单）；页面显示 "The ranking is being built." | 🟡 建议后续改为「优先级」页或下线路由 | 主 Agent 决策 |

## 六、与规则的偏差说明

1. **15–16 观察档邻近**：本单为 17 分（保守口径）由主 Agent 明确下令，矩阵顶部已写明依据。
2. **`codes` 页型空缺**：本作无兑换码，按指令以 `reka-cooking-recipes` 顶替，矩阵页型标 `codes` 并在意图列注明。
3. **`tier-list` 未建**：本作无层级系统，按 STRATEGY「页型是候选池不是必建清单」处理。
4. **P1 覆盖率 50%**：建站当日不适用 D+30 的 70% 要求；未落地 P1 行保留在矩阵，未删行。
5. **Steam 页价格抓取为人民币区**：美区价格标 `[Unconfirmed]`，未按估算写美元。
6. **Upcomer 对 curl 返回 403、对 WebFetch 可读**：来源仍为可达页面，已在 `reka-sources.md` 记录抓取日期；Dot Esports / TheGamer / GFinity 403 未采用，列入「未采用来源」。

## 七、上线清单（本单已完成）

- [x] 从 `templates/wiki-base/` 经 `scripts/new-site.mjs` 生成（未从运营站复制）
- [x] `keyword-results/reka-matrix.md`（P0 7 行，MECE 五类 + 入口页）
- [x] `keyword-results/reka-sources.md`（每页 ≥2 源、≥1 官方、URL + 抓取日期）
- [x] 7 篇正文，9,290 词，lint/build 零错误
- [x] `vercel link --project rekawiki` + `deploy-wiki-site.sh rekawiki`
- [x] 首页与 7 攻略页 200、alias 指向本次部署
- [ ] GA4 / GSC / Dashboard / Adsterra / 图标 / STATS / 台账（主 Agent 统一处理）
