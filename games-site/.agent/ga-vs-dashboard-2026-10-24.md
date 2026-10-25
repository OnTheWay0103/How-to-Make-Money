# GA4 API vs Dashboard 对账 — 2026-10-24

> 目的：独立调用 GA4 Data API 拉 43 站 30 天 PV/UV，与 dashboard 页面渲染值逐站对比；
> 并筛出「有流量但未接广告」的站点，供决定下一批广告投放。

## 一、结论

- **43/43 站 PV、UV 完全一致，差异数 0**：合计 PV **14,141**、Users **8,073**（两侧同值）。
- dashboard 的取数口径 = GA4 API 口径：`30daysAgo → today`，`screenPageViews` + `totalUsers`，无二次加工。
- 已接广告 10 站，合计 PV 8,143（57.6%）；未接广告 33 站，PV 5,998（42.4%）。
- 未接广告里最高流量是 **Nivalis Nights Wiki（PV 2,385 / UV 1,289）**，比已上广告的任何一个站都高。

### 对账口径说明

GA API 一侧来自 dashboard 生产环境的 `/api/diagnostics`（用 Vercel Production 的 Sensitive 凭证现场查 GA4），
dashboard 一侧来自 `https://dashboard-pied-six-31.vercel.app/` 首屏渲染的服务端表格（43 行）。
两边调用的是同一套凭证与同一个日期范围，因此本次验证能证明**页面渲染/聚合/排序没有失真**；
若要证明 GA4 Property 本身没接错站，需要再拿 GA4 后台 UI 交叉核对（本次未做）。

## 二、逐站对账（按 PV 降序）

| # | 站点 | PV(30d) | UV(30d) | 广告 |
|---:|---|---:|---:|:--:|
| 1 | Nivalis Nights Wiki | 2385 | 1289 | — |
| 2 | Sephiria Wiki | 1264 | 703 | ✅ |
| 3 | Waterpark Simulator Wiki | 1231 | 768 | ✅ |
| 4 | Shift At Midnight Wiki | 1093 | 706 | ✅ |
| 5 | Moonlight Peaks Wiki | 797 | 525 | ✅ |
| 6 | The Mound Wiki | 793 | 445 | ✅ |
| 7 | SpiritVale Wiki | 790 | 445 | ✅ |
| 8 | Tears of Metal Wiki | 703 | 294 | ✅ |
| 9 | Go-Go Town! Wiki | 556 | 380 | ✅ |
| 10 | Delverium Wiki | 500 | 264 | ✅ |
| 11 | The Relic: First Guardian Wiki | 416 | 230 | ✅ |
| 12 | IRON NEST Wiki | 317 | 210 | — |
| 13 | Expeditions: Samurai Wiki | 308 | 146 | — |
| 14 | Big Walk Wiki | 302 | 178 | — |
| 15 | Aincrad Wiki | 289 | 150 | — |
| 16 | WitchSpire Wiki | 288 | 150 | — |
| 17 | DragonSword Wiki | 263 | 214 | — |
| 18 | Vahrin's Call Wiki | 252 | 96 | — |
| 19 | Grain Rot Wiki | 251 | 141 | — |
| 20 | Ardent Wilds Wiki | 236 | 88 | — |
| 21 | Echoes of Mystralia Wiki | 156 | 87 | — |
| 22 | ReStory Wiki | 142 | 82 | — |
| 23 | Lunarium Wiki | 140 | 90 | — |
| 24 | Bonehold Wiki | 140 | 47 | — |
| 25 | Mistfall Hunter Wiki | 116 | 102 | — |
| 26 | Taival Wiki | 88 | 31 | — |
| 27 | Phantom Tower Wiki | 85 | 33 | — |
| 28 | Beast of Reincarnation Wiki | 82 | 66 | — |
| 29 | DinoBlade Wiki | 67 | 41 | — |
| 30 | Low-Budget Repairs Wiki | 45 | 35 | — |
| 31 | Graphite Wiki | 21 | 14 | — |
| 32 | MineGeon Wiki | 15 | 14 | — |
| 33 | Skills & Raids Wiki | 6 | 5 | — |
| 34 | Dwarf Delve Wiki | 4 | 4 | — |
| 35 | Crimson Moon Wiki | 0 | 0 | — |
| 36 | Welcome to Elderfield Wiki | 0 | 0 | — |
| 37 | Fallen Tear: The Ascension Wiki | 0 | 0 | — |
| 38 | BOMBANANA! Wiki | 0 | 0 | — |
| 39 | Anomaly President Wiki | 0 | 0 | — |
| 40 | Dressmaker Wiki | 0 | 0 | — |
| 41 | Silver Pines Wiki | 0 | 0 | — |
| 42 | Doloc Town Wiki | 0 | 0 | — |
| 43 | Sovereign Tower Wiki | 0 | 0 | — |

## 三、下一批广告建议

| 优先级 | 范围 | 站数 | PV 合计 | 说明 |
|---|---|---:|---:|---|
| P0 | PV≥1000 且未接广告 | 1 | 2385 | Nivalis Nights 单站 2,385 PV，ROI 最高 |
| P1 | PV 100–999 且未接广告 | 14 | 3200 | 14 站，单站 116–317 PV |
| P2 | PV 1–99 且未接广告 | 9 | 413 | 流量太小，可等增长后再接 |
| — | PV=0 | 9 | 0 | 均为 8 月下旬后新站，先不接 |

### 加广告的前置条件

- 需要 Adsterra 后台为每个站建 **global + guide 两个 zone**，把 code 填进 `adsterra/placements.csv`（或飞书广告表），
  然后 `node scripts/adsterra-sync.mjs --apply --build`，再逐站部署（每站 1 次，注意 100 次/日额度）。
- 14 个 P1 站 + Nivalis 都已具备 `app/layout.tsx` 与 `components/GuideLayout.tsx`，脚本可直接注入，无需改结构。

## 四、顺带发现（需要处理）

`/api/diagnostics` 在公网无鉴权可访问（HTTP 200），会返回：服务账号邮箱前缀、可访问的全部 GA4 账号/Property 列表、
43 站 PV。私有 key 没泄露（只回长度），但账号结构属于内部信息。建议加 header token 或改为仅本地/SSO 访问。
