# 域名与部署

> 2026-10-25 定稿。对照「游戏站建站全流程清单」第 4 部分（四、域名账号）节点 17–21。
> 本阶段的决策偏保守：**域名、托管、GA4、Adsterra 广告位全部维持现状**，
> 2026-11-25 复盘后再定是否升级。本文记录「现在怎么做 + 已知风险 + 复盘触发条件」。

---

## 一、当前决策速查

| # | 节点 | 当前决策（2026-10-25） | 复盘 |
|:--:|---|---|---|
| 17 | 域名策略 | 维持 `*.vercel.app` 子域 | 2026-11-25 |
| 18 | Vercel 项目 / 账号 | 单账号 Hobby，`vercel link` 手动 | 2026-11-25 |
| 19 | GA4 申请 | 人工建 property；暂不自动化 | 待用户安排 |
| 20 | Adsterra 广告位 | 每站 global + guide 两个位 | 流量数据出来后看 |
| 21 | AdSense 域名提交 | **暂缓**，只走 Adsterra | 不设日期 |

---

## 二、域名（节点 17）

### 2.1 现状与决策

- 45 个 wiki 站全部使用 `{project}.vercel.app`
- 站点 canonical 写在 `<site>/lib/seo-config.ts` 的 `SITE_CONFIG.url`
- 台账「域名」列记录的就是 `*.vercel.app`

**决策：维持子域，暂不买自有域名。**

### 2.2 已知风险（记账，不是待办）

| 风险 | 说明 |
|---|---|
| URL 绑定托管账号 | `{project}.vercel.app` 全局唯一且归属当前 Vercel 账号；换账号 / 换托管平台，URL 无法保留 |
| 迁移代价高 | 换 URL = 索引与排名重新积累；没有 301 就无法保住存量信号 |
| 品牌与信任弱 | Adsterra 接受子域，但独立域名在 CTR、品牌记忆、后续 AdSense 上都更好 |
| 续费陷阱 | 10–15 元/年通常是首年促销价，**续费价远高于首年**；按 150 个/月算，第二年才是真成本 |

### 2.3 将来要迁自有域名时（playbook）

只在决策改为「买域名」后执行：

1. **只给通过 D+30 索引检查的站买**（GSC 收录 ≥50%）——不给还没验证的站付钱
2. 新域名先绑到现有 Vercel 项目，子域保持可访问
3. 全站 `SITE_CONFIG.url` / canonical / sitemap 切到新域名
4. **子域 301 到新域名**，观察 30 天
5. GSC 提交「地址更改」，确认新域名收录

MUST NOT 在**没有 301** 的情况下直接换 URL。
MUST NOT 批量买域名后再慢慢建站（续费从购买日算）。

---

## 三、Vercel 项目与账号（节点 18）

### 3.1 现状

- **单账号 Hobby**，45 个项目
- 项目创建：`vercel link --project <name> --yes`（手动）
- 部署：`./deploy-wiki-site.sh <site-dir>`（CLI 直传，`rootDirectory` 必须为空）
- 部署日志：`.agent/deploy-log.jsonl`

### 3.2 官方限额（2026-09-14 版文档）

| 项 | Hobby | Pro |
|---|---|---|
| 项目数 | 200 / 账号 | 无限 |
| 部署 | 100 次/日 | 6,000 次/日 |
| 商业用途 | **禁止**（仅限非商业个人使用） | 允许 |

### 3.3 已知风险

1. **商业用途冲突**：已有 36 个站挂 Adsterra，属于商业用途，与 Hobby「非商业个人使用」条款冲突。
2. **多账号分摊属于规避限制**：官方公平使用条款明确把「规避或滥用限制」列为违规。
   按 75 站/账号新开免费账号，技术上能把日部署压到 100 以下（45 站批量日实测 34–42 次，
   线性推算 75 站约 57–70 次），但改变不了商业用途的性质。
3. **连带失效**：账号被暂停时，该账号下全部站点与 `*.vercel.app` URL 一起失效。

### 3.4 复盘时三选一

| 方案 | 现金 | 部署能力 | 合规 | 备注 |
|---|---|---|---|---|
| **A. Vercel Pro** | $20/月 | 6,000 次/日、无限项目 | ✅ | 单账号即可，不用拆；约 1 元/站/月（按 150 站） |
| **B. Cloudflare Pages** | 0 | 500 构建/月、100 项目/账号 | ⚠️ 条款未禁止商业（也无明文许可） | 需先改静态导出；150 站/月约 2 个账号/月 |
| **C. 维持 Hobby + 75 站/账号** | 0 | 100 次/日/账号 | ❌ | 商业用途 + 规避限制；不推荐 |

Cloudflare 的可行性前提：45 个 wiki 站都是 SSG（`generateStaticParams`、无 API 路由、
无 `next/image`），改 `output: 'export'` 后可以承接；但必须先在 1 个站跑通构建、
sitemap、路由和 404，再谈批量。

### 3.5 复盘触发条件

满足任意一条就提前复盘，不等 11-25：

- 单日部署连续 3 天 > 80 次
- 收到 Vercel 限额 / 条款警告，或项目被暂停
- 站点数 > 150 且仍保持 5 站/天节奏

### 3.6 项目创建（当前仍是手动）

```bash
cd <site-dir>
vercel link --project <project-name> --yes
```

MUST NOT 设置 `rootDirectory`（CLI 直传模式下会导致路径叠加，见部署脚本头注释）。

---

## 四、GA4（节点 19）

### 4.1 当前流程（人工）

1. GA 后台建 Property + Web Stream，URL 填部署后的域名
2. 记下 `G-XXXXXXXXXX`（Measurement ID）和纯数字 Property ID
3. 写入 `.agent/ga4-ids.json`，执行：
   ```bash
   node scripts/set-ga4-ids.mjs .agent/ga4-ids.json
   ```
   脚本会改站点 `lib/seo-config.ts` 并维护 `dashboard/lib/sites.ts`
4. **GA 管理 → 媒体资源访问权限 → 把 Dashboard 服务账号加为读取者**
   （不加 = GA4 有数据但 Dashboard 永远读不到）

### 4.2 已知限制与风险

- GA4 单账号上限 **2,000 个 Property**（官方结构限制）；按 150 站/月约 13 个月需要第二个 GA 账号
- 手动建 property 是 5 站/天节奏下最容易漏的一步；漏了 Dashboard 就缺站
- 查不到 / 没建好时写 `[待确认]`，MUST NOT 编造 GA ID

### 4.3 自动化（暂缓，不实施）

将来可走 GA Admin API：

- `properties.create` 建媒体资源
- `dataStreams.create` 建 Web Stream
- 需要 GCP 服务账号 + `analytics.edit` 权限，并把服务账号加到 GA 账号

用户 2026-10-25 决定**先保持手动**，后续再安排。本文只记录方案，不落地脚本。

---

## 五、Adsterra（节点 20）

### 5.1 当前配置（每站两个位）

| 位 | 类型 | 注入位置 | 说明 |
|---|---|---|---|
| `global` | Social Bar | `app/layout.tsx`，`</body>` 前 | 全站曝光 |
| `guide` | Native Banner | `components/GuideLayout.tsx`，Verification 注释前 | 攻略页正文位 |

- 数据源：飞书多维表格「广告位管理」（`tblPlFjSok72tnA1`），**唯一来源**
- 注入：`node scripts/adsterra-sync.mjs --apply --build [--deploy]`
- 现状：36 站 / 72 个位已接

### 5.2 手工部分与产能

Adsterra Publisher API 是**只读**的（`api3.adsterratools.com/publisher`），
建 zone 只能在后台手工完成：

- 5 站/天 × 2 个位 = 10 个 zone/天
- 当前接受这个手工量；若成为瓶颈，优先考虑「新站只开 1 个 Social Bar，D+30 再加 Native」

### 5.3 MUST 规则

MUST 广告代码先进飞书表，再由 `adsterra-sync.mjs` 注入
MUST NOT 直接手改站点里的广告代码（否则表与代码不一致，下次同步会覆盖）
MUST 部署后验证 HTTP 200 且页面含广告脚本
MUST NOT 在无流量站上堆多个广告位（影响体验与审核，收益接近 0）

---

## 六、AdSense（节点 21，暂缓）

### 6.1 决策

**2026-10-25 起暂缓 AdSense 申请，只走 Adsterra。**

原因：连续申请未通过，且当前是 5 站/天铺量 + 薄内容阶段，与 AdSense 的内容深度要求冲突；
继续投入申请与整改的时间产出比低。

### 6.2 具体变化

| 项 | 变化 |
|---|---|
| 新站提交审核 | 停止 |
| 新站 `ca-pub` 代码 | 不再注入 |
| 存量站 `ca-pub` 代码 | **不动**（不做批量清理，避免无收益的返工） |
| 信任页（privacy / terms / about / contact） | **继续保留**——Adsterra、SEO、用户信任都需要，只是不再标「AdSense 必需」 |
| 内容真实性规则 | **不放松**：不编造、数字标来源、事实与 Steam 一致 |

### 6.3 重新开启的条件（不设日期）

- Adsterra 收入稳定，组合收入能覆盖域名 + 托管成本
- 有一批站通过 D+90 检查点（30 天 PV ≥300 且持续增长）
- 单站内容深度达到 AdSense 可接受水平（≥8,000 词/站已是最低线，不是充分条件）

三条同时满足再评估，MUST NOT 因为「别人说 AdSense 收入高」就提前恢复。

---

## 七、成本与复盘

### 7.1 当前月度现金成本

| 项 | 当前 |
|---|---|
| 域名 | 0（用子域） |
| 托管 | 0（Vercel Hobby） |
| Adsterra | 0 |
| GA4 / GSC | 0 |

### 7.2 若改方案的成本（估算，决策前复核）

| 方案 | 成本 |
|---|---|
| Vercel Pro | $20/月（≈143 元） |
| 自有域名（上线即买） | 150 个/月 × 10–15 元 ≈ 1,500–2,250 元/月（首年），续费按注册商实际价格 |
| 自有域名（D+30 验证后买） | 只为通过索引检查的站买，成本约为上线即买的 30–50% |

### 7.3 2026-11-25 复盘清单

- [ ] 部署峰值是否连续 3 天 >80 次/日
- [ ] 是否收到 Vercel 限额或条款警告
- [ ] Adsterra 实际 RPM（用 `node scripts/adsterra-stats.mjs --days 30` 取数，不用估算）
- [ ] 自有域名的迁移收益是否大于成本（按实际存活站数算）
- [ ] 是否有重新申请 AdSense 的信号（内容/流量是否达标）

> ⚠️ `docs/STRATEGY-选词与评分.md` 里的 RPM $1–5 是通用第三方基准。
> 只走 Adsterra 后，**用 30 天真实数据替换**，MUST NOT 继续拿通用区间当结论。
