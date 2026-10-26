# Adsterra 接入工作流

> 目标：人工只做「在 Adsterra 后台建站点 + 建广告位 + 复制代码」，其余（筛选站点、注入代码、构建、部署、拉收益）全部脚本化。
>
> Adsterra 的 Publisher API **只读（仅 GET）**，没有创建站点/广告位的接口，所以这一步必须人工。

## 一、一次性准备：API Token

1. 登录 `https://publishers.adsterra.com/`
2. Settings → API → **Generate New Token**
3. 在仓库根目录创建 `adsterra/.env`（已被 `.gitignore` 的 `.env*` 忽略，不会入库）：

```
ADSTERRA_API_KEY=你的token
```

> 同一时间只有一个有效 token。重新生成会让旧 token 立即失效。

## 二、人工部分（每个站点约 5 分钟）

1. Adsterra 后台 → **Websites → Add Website**
   - URL 填完整域名，例如 `https://witchspirewiki.vercel.app`
   - 分类选 Games
2. 在该站点下创建广告位（placement）：
   - `global` 槽位：一般用 **Social Bar** 或 **Popunder**，代码是单个 `<script>`
   - `guide` 槽位：一般用 **Native Banner**，代码是 `<script>` + `<div id="container-...">`
3. 复制后台给出的代码，粘进飞书「站点台账(人工)YYYY-MM」对应行的
   `广告位1-SocialBar-code` / `广告位2-NativeBanner-code` 两列（整段粘一格，可带换行）

> 2026-10-26 起**只有这一个入口**：原来的「广告位管理」多维表格已删除，
> 台账既是人工填写处，也是脚本的唯一数据源。

## 三、数据源格式

台账「站点」列写**裸域名**（`witchspirewiki.vercel.app`），脚本用 `siteDirOf()` 反推站点目录。

| 列 | 说明 |
|---|---|
| `站点` | 裸域名，主键 |
| `广告位1-SocialBar-code` | 注入 `global` 位（`app/layout.tsx`，`</body>` 前） |
| `广告位2-NativeBanner-code` | 注入 `guide` 位（`components/GuideLayout.tsx`，Verification 前） |
| `广告位3-todo-code` | 占位，脚本**只读不处理** |

- 一列空着 = **不动**该位已有的代码（空着不代表下线，避免误删线上广告）
- 一个位只放一份代码：填新的会整体替换旧的
- 离线/测试时可用本地 CSV（`adsterra/placements.csv`，表头支持中英文），用 `--csv` 显式指定

### 旧数据源（仅迁移/对比用）

- 「广告位管理」多维表格（`tblPlFjSok72tnA1`）**2026-10-26 已删除**
- 旧在线表 `站点日常工作表` 的 ADsMgr 子表：`--feishu <url>` 仍可读，只在对比旧数据时用

## 四、自动注入

```bash
# 1) 校验 + 预览（不写文件）
node scripts/adsterra-sync.mjs

# 2) 写入代码
node scripts/adsterra-sync.mjs --apply

# 3) 写入 + 逐站构建
node scripts/adsterra-sync.mjs --apply --build

# 4) 写入 + 部署（调用 deploy-wiki-site.sh）
node scripts/adsterra-sync.mjs --apply --deploy
```

默认直接读当月「站点台账(人工)」，无需任何参数。其他选项：

```bash
node scripts/adsterra-sync.mjs --site witchspirewiki      # 只处理一个站
node scripts/adsterra-sync.mjs --month 2026-10            # 指定月份人工台账
node scripts/adsterra-sync.mjs --csv adsterra/placements.csv   # 离线 CSV
node scripts/adsterra-sync.mjs --print                    # 打印改动后的文件
node scripts/adsterra-sync.mjs --seed-state [--apply]     # 从部署日志重建上线记录
```

**上线状态（不写云表）**：

- `--apply` 注入成功 → `<site>/lib/adsterra-zones.ts` 就是事实，不用记
- `--apply --deploy` 部署成功 → 记进 `.agent/adsterra-state.json`（代码 hash + 部署时间）
- 代码换了 hash 就对不上，自动变成「待部署」；`--deploy` 会顺带补部署「已注入但没记着上线」的站
- `--seed-state`：state 是 2026-10-26 新引入的，用它从 `.agent/deploy-log.jsonl` 的 commit
  精确回看线上那一版，给历史部署补记录（只补没有记录的站）

脚本行为：

- 在每个站点生成 `lib/adsterra-zones.ts`（自动生成，勿手改）
- 在每个站点生成 `components/AdsterraSlot.tsx`
- 在 `app/layout.tsx` 用 `ADSTERRA:GLOBAL` 标记块注入全站脚本
- 在 `app/layout.tsx` 用 `ADSTERRA:HOME` 标记块注入**首页广告**：复用 `guide` 广告位，组件按
  `pathname === '/'` 才渲染，其他路由返回 null（2026-10-25 起，首页不再只有 Social Bar）
- 在 `components/GuideLayout.tsx` 用 `ADSTERRA:GUIDE` 标记块注入攻略页广告位
- 重复运行是幂等的（按标记块替换，不会重复插入）
- 某位在台账里清空后重跑**不会移除**已有广告位（防误删）；要下线得手工改站点或明确要求

> 2026-10-23 已验证：在 witchspirewiki 注入测试代码后 `pnpm build` 通过，
> 构建出的 HTML 中 `<script>` 与 `container-*` 顺序正确，验证后已回退。

### 选站标准

优先接入 30 天 PV ≥ 100 的站点：

```bash
node scripts/ga4-pv-rank.mjs --top 40
```

PV 不到 100 的先不接（曝光太少，且 Adsterra 后台人工建站有成本）。

## 五、收益报表

```bash
node scripts/adsterra-stats.mjs              # 最近 30 天
node scripts/adsterra-stats.mjs --days 7     # 最近 7 天
node scripts/adsterra-stats.mjs --json       # 机器可读
```

输出：

- `.agent/adsterra-report.md` — 按域名汇总的曝光/点击/CTR/CPM/收入
- `.agent/adsterra-raw.json` — API 原始响应（排查字段变化用）

## 六、已接入状态

46 个站全部走同一套模板（`lib/adsterra-zones.ts` + `AdsterraSlot` + 标记块），
每个站 `global` / `guide` 两位，代码以飞书「站点台账(人工)」为准。

> 2026-10-26：`nivalisnightswiki` 原来硬编码在 `layout.tsx` + `AdsterraNativeBanner`，
> 已迁到模板（旧组件删除），全站不再有例外。

## 七、上线验收（必做）

「HTML 里有广告代码」≠「广告会出来」。每次接完广告至少验两条路径：

1. **直接打开攻略页**（服务端渲染首屏）
2. **从首页点击进入攻略页**（客户端路由切换）

原因（2026-10-25 踩坑）：`dangerouslySetInnerHTML` 插入的 `<script>` **不会执行**。
首屏由浏览器 HTML 解析器执行，站内路由切换后 React 用 innerHTML 塞进去的脚本被静默忽略，
表现为「首页点进去没有广告，直接刷新攻略页又有」。`components/AdsterraSlot.tsx` 已改为把
脚本标签从渲染内容里剥掉、在 `useEffect` 里用 `createElement` 补注入，两种路径都会执行。

验收做法：用 Chrome 无头 + CDP 打开首页，`click()` 一个 `/guides/` 链接，等 10 秒后检查
`document.querySelectorAll('[id^="container-"]')` 的 `innerHTML.length` 是否 > 0。
本机 DNS 会污染 `*.vercel.app`，必要时用 `dig @1.1.1.1 +short <域名>` 拿真 IP。
