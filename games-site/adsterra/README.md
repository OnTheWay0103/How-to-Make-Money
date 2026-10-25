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
3. 复制后台给出的代码，粘贴到 `adsterra/placements.csv`

## 三、代码表格式（多维表格 / placements.csv）

**唯一数据源：飞书多维表格「游戏站交付看板 → 广告位管理」（`tblPlFjSok72tnA1`）**

| 字段 | 说明 |
|---|---|
| `站点目录` | 站点目录名，如 `witchspirewiki` |
| `域名` | 域名，仅用于核对 |
| `广告位类型` | `global`（全站，layout body 末尾）或 `guide`（攻略页正文后） |
| `广告格式` | 广告格式，`Social Bar` / `Native Banner` / `Popunder` / `Display Banner` |
| `广告位名称` | Adsterra 后台的广告位名称（也是同步主键） |
| `广告位ID` | Adsterra 广告位 ID（可选，便于对账） |
| `状态` | `pending`（待处理）、`ready`（可注入）、`已接入`（手工接入，脚本会跳过）、`已上线`（已部署） |
| `广告代码` | **Adsterra 后台复制的完整代码**（整段粘在一格里，可带换行） |
| `备注` | 备注 |
| `同步状态` | `未同步` / `已同步`，由脚本回写，人工不用填 |

- 同一站点可以有多行（一个 `global` + 一个 `guide`）。
- 不要填 `dashboard` 或其他非站点目录。
- 离线/测试时可用本地 CSV（`adsterra/placements.csv`，表头支持中英文），用 `--csv` 显式指定。

### 旧版飞书在线表格（仅迁移用）

在线表：<https://jcn5oum2q1jh.feishu.cn/wiki/Nbeqw9Dqmivo2jkWPYKc56Fwn7e>

已全量导入多维表格，**日常不再从这里读**。`--feishu <url>` 参数仍保留，只在需要对比旧数据时用。

## 四、自动注入

```bash
# 1) 校验 + 预览（不写文件）
node scripts/adsterra-sync.mjs

# 2) 写入代码
node scripts/adsterra-sync.mjs --apply

# 3) 写入 + 逐站构建
node scripts/adsterra-sync.mjs --apply --build

# 4) 写入 + 构建 + 部署（调用 deploy-wiki-site.sh）
node scripts/adsterra-sync.mjs --apply --build --deploy
```

默认直接读多维表格「广告位管理」，无需任何参数。其他来源：

```bash
node scripts/adsterra-sync.mjs --csv adsterra/placements.csv          # 离线 CSV
node scripts/adsterra-sync.mjs --base <token> --table <id|name>       # 其他多维表格
node scripts/adsterra-sync.mjs --feishu '<旧在线表URL>'                # 旧在线表（对比用）
node scripts/adsterra-sync.mjs --no-writeback                         # 不回写状态
```

**回写**（读多维表格时生效）：

- `--apply` 注入成功 → 对应记录 `同步状态` = `已同步`
- `--apply --build --deploy` 部署成功 → 对应记录 `状态` = `已上线`

回写失败只告警、不影响已写入的站点代码。

其他选项：`--site <dir>` 只处理一个站，`--print` 打印改动后的文件内容。

脚本行为：

- 在每个站点生成 `lib/adsterra-zones.ts`（自动生成，勿手改）
- 在每个站点生成 `components/AdsterraSlot.tsx`
- 在 `app/layout.tsx` 用 `ADSTERRA:GLOBAL` 标记块注入全站脚本
- 在 `app/layout.tsx` 用 `ADSTERRA:HOME` 标记块注入**首页广告**：复用 `guide` 广告位，组件按
  `pathname === '/'` 才渲染，其他路由返回 null（2026-10-25 起，首页不再只有 Social Bar）
- 在 `components/GuideLayout.tsx` 用 `ADSTERRA:GUIDE` 标记块注入攻略页广告位
- 重复运行是幂等的（按标记块替换，不会重复插入）
- 某行从 `ready` 改回 `pending` 后重跑，对应广告位和 import 会被移除
- **注入条件：`广告代码` 非空，且状态不是 `已接入`**（`pending` 也可以，人工粘完代码即可）
- 没有代码的行、以及 `已接入` 的行会被跳过并汇总报告

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

| 站点 | 接入方式 | 备注 |
|---|---|---|
| `nivalisnightswiki` | 手工接入（2026-10-23） | 硬编码在 layout + AdsterraNativeBanner，未走 `placements.csv` |

> 后续新站统一走 `placements.csv`，不要再手工硬编码。

### 飞书多维表格（数据源，2026-10-25 起）

`游戏站交付看板`（base `Zl7cb6Bz9ajsPdsQRbRci1QZnkg`）的 **广告位管理** 表
（`tblPlFjSok72tnA1`，72 条）是**唯一数据源**：`adsterra-sync.mjs` 默认直接读它，
注入/部署成功后回写 `同步状态` / `状态`。

- 要改广告位（换代码、加站、改状态）→ **在多维表格里改**，然后重跑脚本
- 旧在线表 `站点日常工作表`（wiki `Nbeqw9Dqmivo2jkWPYKc56Fwn7e`）的 ADsMgr 子表已归档为迁移来源，不再维护
- 一次性迁移脚本 `scripts/bitable-sync-ads.mjs` 仍保留（在线表 → 多维表格 upsert）。
  ⚠️ 它会把在线表的旧值覆盖回多维表格，**多维表格成为数据源后不要再随手 `--apply`**

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
