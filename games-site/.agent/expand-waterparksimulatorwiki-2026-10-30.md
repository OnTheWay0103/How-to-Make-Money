# waterparksimulatorwiki — 2026-10-30 扩词交接

## 新增攻略

- **Title**: Waterpark Simulator Lag & Low FPS: Fixes That Work
- **Slug**: `lag-low-fps-performance-guide`
- **File**: `waterparksimulatorwiki/content/guides/lag-low-fps-performance-guide.md`
- **URL**: https://waterparksimulatorwiki.vercel.app/guides/lag-low-fps-performance-guide
- **词数**: 1,278（不含表格，总 1,496）
- **Title/Description 长度**: 50 / 155 字符
- **Version**: 1.0.120（最新公告 2026-10-28）
- **站内攻略数**: 21 → 22

## 选题依据

**问题**：游戏越大越卡 / 帧数掉，玩家在找"为什么卡、怎么调"。

**玩家侧证据（2026-10-30 实采 Google Suggest，hl=en&gl=us）**：

- `waterpark simulator lagging` / `laggy` / `really laggy` / `keeps lagging`
- `waterpark simulator lag fix` / `reduce lag` / `lag spikes`
- `waterpark simulator low fps` / `fps drop` / `fps fix` / `fps boost` / `fps limit`
- `waterpark simulator performance issues` / `bad performance`
- `why is my waterpark simulator lagging`
- `waterpark simulator ps5 lag`

**反馈样本**：第三方聚合站对 405 篇 Steam 评测做关键词计数，负面里 `Bugs & crashes` 占 19%；游玩 100 小时后好评率从 97% 掉到 85%（大园后期体验下滑的间接证据）。

**为什么是今天写**：站内 21 篇全无 fps / performance / lag 内容（`grep -rln "fps\|performance"` 命中 0）；官方 1.0.120（2026-10-28）刚修弹窗冲突、1.0.119（2026-10-23）修员工卡住，性能话题正热。

**查重结论**（对比全部 21 篇 slug/title）：

- `stuck-guests-fix-guide` 讲游客路径卡住，不讲帧率/设置。
- `visitor-problems-guide` 讲满意度与投诉，不讲性能。
- `price-platforms-system-requirements` 只列配置表，不写优化步骤（新篇引用它并互链）。
- `co-op-multiplayer-guide` 不讲 host 性能负担（新篇补一句并互链）。
- 与 10-29 的 `achievements-guide`、`chlorine-dirty-pool-water-guide` 零重叠。
- 新 slug 无重复。

## 来源表

| # | 层级 | 来源 | 日期 |
|---|---|---|---|
| 1 | Official | [Steam 商店页 / appdetails 系统需求](https://store.steampowered.com/app/3293260/Waterpark_Simulator/) — min i5-3550 / GTX 1050 / 8 GB / 20 GB；rec i5-6400 / GTX 1070；无 mac/linux 版 | 2026-10-30 访问 |
| 2 | Official | [UPDATE 1.0.63](https://store.steampowered.com/news/app/3293260/view/547902498070858255) — `Fixed a case where injuries were frame rate dependent` | 2026-08-18 |
| 3 | Official | [UPDATE 1.0.30](https://store.steampowered.com/news/app/3293260/view/714534317091457187) — 更新后 1 个文件损坏导致园区显示为空，官方建议 Steam 文件校验 | 2026-08-04 |
| 4 | Official | [UPDATE 1.0.120](https://store.steampowered.com/news/app/3293260/view/703283562262036979) / [1.0.119](https://store.steampowered.com/news/app/3293260/view/703282928078034533) — 弹窗冲突修复、员工不再卡住/瞬移 | 2026-10-28 / 2026-10-23 |
| 5 | Community | [独立 fan wiki：Crashing and Lag: Real Fixes](https://waterparksimulatorgame.wiki/guides/troubleshooting/) — FPS Limit 滑块在 VSync 关闭后可见、拉到最大；Borderless Fullscreen；模组版本不匹配耗性能；园区越大越卡（每个游客是物理对象、每个设施追踪排队与磨损） | 2026-10-30 访问 |
| 6 | Editorial | [videogamescritic 405 篇评测采样](https://videogamescritic.com/game/waterpark-simulator-3293260) — 负面中 Bugs & crashes 19%；时长分段情绪；全时段 96% / 1.0.99 后 98% | 2026-10-30 访问 |

素材明细见 `keyword-results/waterparksimulator-sources.md`。

## 构建与检查

| 项 | 命令 | 结果 |
|---|---|---|
| Expand 闸 | `node scripts/expansion-targets.mjs --verify waterparksimulatorwiki` | ✅ exit 0（PV30=1061，状态=加码） |
| 构建 | `cd waterparksimulatorwiki && pnpm build` | ✅ 成功，`/guides/lag-low-fps-performance-guide` 进入 SSG 路由表 |
| Lint | `node scripts/lint-guides.mjs waterparksimulatorwiki --changed` | ✅ 0 ERROR / 1 WARN（`updated` UTC 未来，时区差） |
| 残留 | `node scripts/check-site-residue.mjs waterparksimulatorwiki` | ✅ 无模板残留 |
| 部署 | `./deploy-wiki-site.sh waterparksimulatorwiki` | ✅ 部署完成，dashboard 已注册 |
| SEO 线上 | `node scripts/seo-check.mjs --site waterparksimulatorwiki --live --report .agent/seo-fix-waterparksimulatorwiki.md` | ✅ exit 0，ERROR 0 / WARN 57（存量 WARN，无结构层 ERROR） |
| 广告位 | `node scripts/check-ad-slots.mjs waterparksimulatorwiki --live` | ✅ exit 0 |
| 线上验证 | `curl --resolve .../guides/lag-low-fps-performance-guide` | ✅ HTTP 200，`<h1>` = 1，正文命中 VSync / Borderless Fullscreen / GTX 1050 |

## QA

`.agent/qa-expand-waterparksimulatorwiki-2026-10-30.md` — ✅ PASS（1/1）。

## 需要主 Agent 处理

- 无结构层 ERROR，无需交接修复单。
- git commit / push 未执行（按要求）。
- 待提交文件：`waterparksimulatorwiki/content/guides/lag-low-fps-performance-guide.md`、`keyword-results/waterparksimulator-sources.md`、`.agent/qa-expand-waterparksimulatorwiki-2026-10-30.md`、`.agent/expand-waterparksimulatorwiki-2026-10-30.md`、`.agent/seo-fix-waterparksimulatorwiki.md`
