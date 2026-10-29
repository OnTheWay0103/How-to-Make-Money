# QA 报告 — demonbluffwiki（快速模式）— 2026-10-29

> 岗位：QA 审核员（`docs/agents/05` + `06`）｜口径：`docs/STRATEGY-内容生产.md`
> 站点：`demonbluffwiki/`（新建，2026-10-29）｜线上：https://demonbluffwiki.vercel.app/
> 依据：`keyword-results/selection-2026-10-29.md` §三 #120（14 分可建）

## 结论：**PASS（内容）/ 2 项人工待办（配置）**

内容侧全部通过；广告位与 GA4 是配置侧缺口，需要人工在飞书台账填两列，不属于内容缺陷。

## 一、构建与门禁

| 检查 | 命令 | 结果 |
|---|---|---|
| 构建 | `pnpm build` | ✅ 19 静态页全部生成（6 篇 guide + 8 固定页 + rss/robots/sitemap） |
| 指南 lint | `node scripts/lint-guides.mjs demonbluffwiki` | ✅ 0 ERROR / 2 WARN（characters-list 1,710 词、release 1,673 词超建议上限，参考型长页可接受） |
| 模板残留 | `node scripts/check-site-residue.mjs demonbluffwiki` | ✅ 无残留 |
| 占位符 | `new-site.mjs` 自检 | ✅ 无 `{{...}}` 残留 |
| 部署 | `./deploy-wiki-site.sh demonbluffwiki` | ✅ HTTP 200，alias → https://demonbluffwiki.vercel.app/ |

## 二、内容规格（逐页）

| 页面 | 词数 | title | description | H1 | 首段 | 来源（官方/社区） |
|---|---:|---:|---:|---:|---:|---|
| release-date-and-platforms | 1,768 | 45 | 156 | 1 | 48 | 3（2/1） |
| characters-list | 1,810 | 46 | 148 | 1 | 52 | 4（1/3） |
| beginner-guide | 1,661 | 52 | 147 | 1 | 59 | 4（2/2） |
| ability-order | 1,421 | 49 | 152 | 1 | 59 | 4（1/3） |
| demo-and-ascension | 1,222 | 54 | 158 | 1 | 56 | 4（3/1） |
| unlocks-and-skins | 1,472 | 52 | 159 | 1 | 48 | 3（1/2） |
| **合计** | **9,354** | — | — | — | — | 每页 ≥1 官方 |

门禁核对：单篇 ≥1,200 ✅｜总词数 ≥8,000 ✅｜title 40–60 ✅｜description 140–160 ✅｜有且仅有 1 个 H1 ✅｜首段 40–60 词 ✅｜每页 ≥2 独立来源且 ≥1 官方 ✅。

## 三、事实核验（本轮最重要的一节）

建站过程中发现并修正 **3 处会导致整站结论错误的事实判断**，全部来自「只读主商店页的 `playtests: []` 就下结论」：

| # | 初稿写法 | 事实 | 来源 | 影响面 |
|:--:|---|---|---|---|
| 1 | 「当前无 demo、无公开测试」 | **demo 存在**：独立 app 3803820，免费，2026-05-27 上线，含 40+ villager 卡与 9 个 Relic | Steam `appdetails?appids=3803820`（2026-10-29） | demo 页整页重写；release 页与 FAQ 同步改 |
| 2 | 「13 语言」 | 主商店页 **12 种**；13 是开发公告口径（多 Turkish），Turkish 只在 demo 页出现 | 商店 API + 2026-05-27 官方新闻 | release 页语言段改为「12 已上架 / 13 计划」 |
| 3 | 「支持 macOS」 | 商店页明写 **"not compatible with macOS 10.15 Catalina or above"** | 商店页 HTML（2026-10-29） | release 页平台表加保留说明 |

其他已按来源标注的冲突（MUST NOT 择一当事实）：

- **Endless 解锁线**：wiki 正文 A4 vs v0.762a 补丁 A5 → 正文写 A5 并注明 wiki 仍旧。
- **Start Order**：v0.730 把 Puppeteer / Shaman 前移，wiki 页面未重写 → 页面加补丁警示。
- **Drunk 惩罚**：−2 为总量（相对常规 −5 少 3），无 −3 总量之说 → 按 −2 写并解释差额。
- **工作室名**：wiki About 写「Yamii Games」（旧名），Steam 与法律声明为 **UmiArt** → 全站用 UmiArt。
- **模式数**：Steam 文案提到 "challenges"，但无任何可读描述 → 不称「第 4 种模式」。

## 四、线上验证（2026-10-29）

DNS 走 `dig @1.1.1.1` + `curl --resolve`（本机对 vercel.app 有投毒，裸 curl 会误判）。

| 路径 | 状态 | 字节 |
|---|---:|---:|
| `/` | 200 | 44,790 |
| `/guides/release-date-and-platforms` | 200 | 65,467 |
| `/guides/characters-list` | 200 | 68,248 |
| `/guides/beginner-guide` | 200 | 61,895 |
| `/guides/ability-order` | 200 | 58,764 |
| `/guides/demo-and-ascension` | 200 | 57,164 |
| `/guides/unlocks-and-skins` | 200 | 60,160 |
| `/faq` | 200 | 33,498 |
| `/tier-list` | 200 | 31,906 |
| `/sitemap.xml` | 200 | 2,534 |

渲染核对（`/guides/characters-list`）：`<title>` 带站名后缀共 65 字符、description 148、H1 恰好 1 个、来源块渲染正常、canonical 指向自身。

## 五、缺口（需人工，不是内容缺陷）

| # | 缺口 | 现状 | 处理 |
|:--:|---|---|---|
| 1 | **Adsterra 两个广告位为空** | `check-ad-slots.mjs demonbluffwiki` **exit 1**：zone global/SocialBar、guide/NativeBanner 均无 ID | 在 Adsterra 后台建两个 zone → 飞书「站点台账(人工)」填对应两列 → 20:00 `sync-ledger-manual` 自动写 `lib/adsterra-zones.ts` 并部署 |
| 2 | **GA4 未建 / 未注册** | `check-dashboard-registry.mjs --site demonbluffwiki` 报「还没填 GA4 measurement ID」 | 建 GA4 property → 把 Dashboard 服务账号加为读取者 → 填飞书两列 → 同上自动回填 |

> 这两项都必须在飞书「站点台账(人工)」补 `demonbluffwiki` 一行；在此之前本站**不进 dashboard 统计**，也不显示广告。广告代码位置未手改（`app/layout.tsx` 一处挂载，符合 2026-10-29 规则）。

## 六、复核周期

- 下次 QA：发售后 7 天（定档/价格/成就/Steam Deck 徽章会同时出现，需一次性复核全部 6 页）。
- 触发条件：发售日公布、demo 更新、任一补丁改角色 → 立即复核 `characters-list` 与 `ability-order`。
