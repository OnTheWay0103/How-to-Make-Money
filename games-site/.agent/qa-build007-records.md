# QA / 记录收尾 — REC-9/6-BUILD007（anomalypresidentwiki BUILD-007 中央记录补齐）

- **任务**: REC-9/6-BUILD007（记录收尾子 Agent，纯记录，未改任何站点 content/、未部署、未写攻略）
- **日期**: 2026-09-06
- **材料版本**: HEAD（main @ 9bbafb7）工作树 v1；anomalypresidentwiki 已完成最终 QA 并经 deploy 上线
- **QA 依据**: `.agent/qa-build007-final.md`（✅ PASS 16/16，🔴 0 / 🟡 0 阻断 / 🟢 2）
- **范围**: dashboard/lib/sites.ts · keyword-results/CANDIDATE-POOL.md · STATS-游戏站点统计.md · .agent/build-history.json
- **执行**: 本报告（改动清单 + update-stats 输出摘要 + 复核结果）

---

## 一、改动文件清单

| 文件 | 改动 |
|------|------|
| `dashboard/lib/sites.ts` | SITES 数组末尾（BOMBANANA! 之后）追加 `Anomaly President Wiki`，`propertyId: 'PENDING'` / `gaId: 'G-PLACEHOLDER'`（等人工建 GA4 Property 后回填，同 crimsonmoon/welcomeelderfield/fallentear/bombanana 先例） |
| `keyword-results/CANDIDATE-POOL.md` | ① 顶部「最后更新」日期 → 2026-09-06（注明 9/6 已建站）；② 候选 #36 Anomaly President 行改为删除线处理 + 状态 ✅ 已建站（9/6）→ anomalypresidentwiki；③「已建站（从候选池移除）」表加行（游戏/评分 19/建站日 9/6/一句话：EA 满月 ~1,300 92% Very Positive、英日中零 wiki、16 guides、QA PASS 已部署）；④ 底部注「完整已建站清单（34 站）」→ 41 站 |
| `STATS-游戏站点统计.md` | ① 头部「最后更新」→ 2026-09-06 · 41 站 · 962 篇；②「站点总览」表加 #41 Anomaly President（上线 9/6、域名 anomalypresidentwiki.vercel.app、备注 BUILD-007）；③「SOP 步骤完成情况」表加 #41 行（⑦Dashboard ✅ 本次已注册）；④ 汇总表后手工 tracker 两行同步（Dashboard 注册 39/41、GSC 后台验证 40/41）；⑤ P1 GSC 注记补 anomalypresidentwiki 缺 GSC 验证文件 |
| `.agent/build-history.json` | builds 数组末尾（9/6 三条 EXPAND 之后）追加 BUILD-007 新站条目（mode `new-build (BUILD-007…)`，guides/guidesAdded 16，deployed true，score 19，pipeline 简述，qa 引用 qa-build007-final.md PASS，issues 5 项） |

未触碰：任何 wiki 站点的 `content/` 与 `app/`（含 anomalypresidentwiki）、`.agent/expand-daily.json`、9/6 已提交的 3 条扩充 build-history 条目、无 git 操作、无部署。

---

## 二、update-stats 运行结果

`node scripts/update-stats.mjs` → `✅ STATS updated: 41 sites, 962 guides`

脚本机制确认（先读代码 + --print 复核）：对新增 FS 目录（`*wiki`）**会自动插行**，但自动插的行是 `🆕 {dir} | ❓ | … | ⚠️ 新站点，需手动补全信息` 占位（SOP 表不会自动插，仅总览表）。因此采用**先手填行再跑脚本**：先在总览 + SOP 两表手填 #41 行（保留 sticky 的 名称/上线日/备注/Dashboard 列），再跑脚本刷新自动列（攻略数/Vercel/GA4/GSC/汇总）。脚本验证无破坏性改写（仅替换 3 个 AUTO 区块，手填备注/名称/日期列保留）。

刷新后汇总块：

| 指标 | 数值 |
|------|:--:|
| **总站点数** | 41 |
| **总攻略数** | 962 |
| **Vercel 部署** | 41/41 ✅ |
| **GA4 已配置** | 34/41 |
| **GA4 真缺失** | 7（anomalypresidentwiki G-PLACEHOLDER、bombananawiki/crimsonmoonwiki/doloctownwiki/fallentearwiki/sovereigntowerwiki/welcomeelderfieldwiki 空） |
| **GSC 文件部署** | 40/41 ❌（anomalypresidentwiki 缺文件） |

---

## 三、复核结果（四处中央记录一致且可复核）

| 复核项 | 结果 |
|--------|------|
| FS 站点目录数 = 41（`ls -d *wiki \| wc -l`） | ✅ |
| FS 总攻略数 = 962（41 站 `content/guides/*.md` 实际总和） | ✅ |
| STATS「站点总览」行数 = 41（含 #41 Anomaly President） | ✅ 与 FS 一致 |
| STATS「SOP 步骤完成情况」行数 = 41（含 #41） | ✅ 与 FS 一致 |
| STATS 汇总 = 41 站 / 962 篇；`update-stats --check` 通过 | ✅ |
| dashboard `lib/sites.ts` 含 Anomaly President Wiki（PENDING/G-PLACEHOLDER），位于 bombanana 之后 | ✅ |
| CANDIDATE-POOL：#36 已删除线处理；已建站表含 anomalypresidentwiki 行；最后更新 2026-09-06 | ✅ |
| build-history：#36 无重复；BUILD-007 唯一 1 条；`guides 16 / guidesAdded 16 / deployed true`；JSON 有效（57 条 builds） | ✅ |
| anomalypresidentwiki `content/guides/` = 16 篇（实扫） | ✅ |
| 站点内容/app/未改动；无 git 操作 | ✅ |

---

## 四、遗留事项（非本任务范围，供主 Agent / 人工）

1. **GA4 人工配置**（已知允许项）：`anomalypresidentwiki/lib/seo-config.ts` 仍为 `G-PLACEHOLDER`；dashboard 已注册 PENDING。需人工建 GA4 Property 后回填 seo-config.ts + `dashboard/lib/sites.ts`（同批待回填：bombananawiki/crimsonmoonwiki/welcomeelderfieldwiki/fallentearwiki）。
2. **⚠️ GSC 验证文件缺失（本次新发现）**：anomalypresidentwiki `public/` 仅有 ads.txt，无 `google12f8715471cef7b7.html`（其余 40 站均有）。STATS 已如实标 GSC ❌ / 40-41。需补文件 + 重新部署 + GSC 后台提交。
3. **⚠️ dashboard 注册缺口（预存在，非本次引入）**：`doloctownwiki` 与 `sovereigntowerwiki` 未在 `dashboard/lib/sites.ts` 注册（SITES 实际 39 条 / STATS 41 站）。STATS 手工 tracker 已如实改为 39/41 并标注，建议主 Agent 补注册。
4. **patch 号持续演进**（QA-final 遗留 #2）：store-tracker 已越过 v0.5.0.18，下次内容刷新以 Steam News hub 复核 patch-notes-roadmap-guide。
5. **enemies-guide WIP 敌人**（QA-final 遗留 #3）：现记 Viking/Gentleman 两名，Road-to-EA 另现 Werewolf，下次扩充时补或弱化。
6. **/faq 与 faq-guide 关键词蚕食**（QA-final 遗留 #4）：观察项，待有流量后以 GSC 复核。
7. **部署脚本健康检查竞态**（QA-final 遗留 #5）：已知良性，已 curl 复验。

---

## 五、证据文件路径

- 本报告：`.agent/qa-build007-records.md`
- QA 最终报告：`.agent/qa-build007-final.md`（PASS 16/16）
- QA-A / QA-B：`.agent/qa-build007-a.md`、`.agent/qa-build007-b.md`
- 中央记录：`dashboard/lib/sites.ts`、`keyword-results/CANDIDATE-POOL.md`、`STATS-游戏站点统计.md`、`.agent/build-history.json`
