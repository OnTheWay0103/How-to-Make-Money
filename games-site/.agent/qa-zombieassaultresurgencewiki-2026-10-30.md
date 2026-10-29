# QA 报告（quick）— zombieassaultresurgencewiki · 2026-10-30

> 站点：`zombieassaultresurgencewiki/` · 线上：https://zombieassaultresurgencewiki.vercel.app
> 游戏：Zombie Assault: Resurgence（Ninja Kiwi，2026-10-28 发售，Steam app 2747660）
> QA 范围：quick（虚构检测 / 一致性 / 跨站残留 / 来源可核验 / 线上 200），按 `docs/agents/05` 口径。
> 判定：**PASS（含 1 项人工待办，不阻塞上线）**

## 一、结论

6 篇首批页面 + 5 个静态页全部上线且 HTTP 200，每页 `h1` 计数 = 1；无模板残留、无跨站残留、无编造数值；来源全部可点开且与正文断言对应。唯一未通过项是广告位（宿主的 Adsterra zone 尚未创建，属人工流程），已列为待办。

## 二、逐项证据

### 1. 虚构检测（fabrication）— PASS

| 检查 | 结果 |
|---|---|
| 是否出现「ZA:R 专有技能名 + 数值」 | 未出现。三篇职业页明确写「launch build 未公布 ZA:R 技能名与数值」，并把 SAS4 数据排除在外 |
| 是否把 wiki 数值表当原创 | 未出现。仅引用 Galvanizer / HIKS M2831 / Krachlader / Frostbite 四把武器的单点数值，页内标注来源、`sources` 中写明抓取日与版本（1.0） |
| 是否出现无来源的百分比 | 无。全部百分比逐条对应已抓取的 stat 字段（100% knockback/flinch/pierce falloff、40% firing penalty/pierce falloff、20% idle、11% firing、5% / 2.5% crit、35% firing、25% idle、4% idle、0% aiming） |
| 评测口径 | 仅作事实引用「170 条评测，68% 好评，Steam 标 Mixed」，未写「口碑差所以别买」 |
| 未确认项处理 | 跨平台联机、等级上限、Mod 清单、职业分支名均写「not confirmed / 一手未取到」，无补白 |

### 2. 一致性（consistency）— PASS

- 三篇职业页共用同一套结构描述：6 Core + 6 Class + 3 Abilities（第 3 个 rank 10 解锁）+ 2 Speciality 分支，与商店页原文一致。
- 技能点经济三页口径一致：20 级 = 10 Basic + 10 Class + 1 Subclass（据 wiki.gg `Levels (ZAR)`）。
- 武器口径一致：`all-weapons-guide` 的 62 把可获取 + 7 把 Scrapped，与 `best-weapons-tier-list` 的分档数量对得上（Power 5 / 火箭 4 / LMG 9 / 步枪 11 / SMG 10 / 霰弹 8 / 狙击 4 / 手枪 11，火焰喷射器 N/A）。
- 内链无死链：修正了 2 处指向未建页 `operation-modes-guide` 的链接（medic / mods 页），改为无链接表述；现站内 `/guides/*` 链接全部指向已存在页面。

### 3. 跨站残留 — PASS

`node scripts/check-site-residue.mjs zombieassaultresurgencewiki` → `✓ 无模板残留`（exit 0）。
另人工扫过 `codes` 一词：主页 hero、`/guides` description、`/about`、`lib/metadata.ts` keywords 原模板都带 codes 字样，已全部改成与本作相符的表述（本作买断制、无兑换码，也不建 codes 页）。

### 4. 来源可核验 — PASS

| 来源 | 复核结果 |
|---|---|
| Steam 商店页 app 2747660 | 本轮会话内多次抓取成功（200）；末次复验出现间歇 000（本机 DNS 投毒 + 该 IP 限流），非链接失效 |
| Dev Diary #13 `view/1823191198605452` | 200 |
| Dev Diary #8 `view/1806698490813097` | 200 |
| 0.9.1 补丁 `view/1824644522839796` | 200 |
| 0.9.2 补丁 `view/1825093633187682` | API 列表确认存在 |
| Next Fest Kill Count `view/1825727806720715` | API 列表确认存在（标题一致），HTTP 末次 000 同属网络问题 |
| wiki.gg `Galvanizer` / `HIKS_M2831` / `Krachlader` / `Frostbite` / `Levels_(ZAR)` / 游戏主页 | 200（Googlebot UA），最后编辑日 2026-10-28 ~ 10-29 |

Steam News gid 全部经 `ISteamNews/GetNewsForApp/v2` 列表比对，标题与正文引用一致。

### 5. 线上 200 — PASS

14 个 URL 全部 200，`<h1>` 计数全部 = 1：

```
200 h1=1 /                                 200 h1=1 /privacy
200 h1=1 /faq                              200 h1=1 /terms
200 h1=1 /tier-list                        200 h1=1 /guides/assault-class-guide
200 h1=1 /guides                           200 h1=1 /guides/heavy-class-guide
200 h1=1 /about                            200 h1=1 /guides/medic-class-guide
200 h1=1 /contact                          200 h1=1 /guides/best-weapons-tier-list
                                           200 h1=1 /guides/all-weapons-guide
                                           200 h1=1 /guides/weapon-mods-and-upgrading
```

## 三、未通过 / 待人工

| 项 | 状态 | 说明 |
|---|---|---|
| 广告位 `check-ad-slots.mjs --live` | ❌ exit 1 | `zone global/SocialBar 无广告 ID`、`zone guide/NativeBanner 无广告 ID`。原因：新站尚无 Adsterra zone，`lib/adsterra-zones.ts` 出厂为空数组。**不得手改**，须走飞书「站点台账(人工)」两列 → 20:00 `sync-ledger-manual` → `adsterra-sync.mjs` 写文件并部署。代码侧已确认 layout 层挂载正确（`app/layout.tsx` 挂 `PageAdBanner` + global 位，`GuideLayout` 内联 guide 位），zone 一到位即全站生效 |
| GA4 / dashboard | ⚠️ 未注册 | `check-dashboard-registry.mjs --site ...` 提示未填 measurement ID；`lib/seo-config.ts` 中 `googleAnalyticsId: ''`，未编造 |

## 四、SEO 检查遗留 WARN（不阻塞，按 2026-10-29 决定不处理）

- `L-CANONICAL` / `S-CANONICAL-STATIC`：静态页无 canonical（已知缺口）。
- `L-TITLE-LEN` / `L-DESC-LEN`：静态页（`/`、`/faq`、`/guides`、`/tier-list`）title 与 description 长度偏离口径。
- 另：`lint-guides.mjs` 6 条 `updated-future` WARN —— 本机本地时间为 2026-10-30 CST，脚本按 UTC（2026-10-29）比较，属时区造成的误报，非内容问题。

以上均属 2026-10-29 明确「暂不处理」的两类，`seo-check --live` 仍 exit 0。
