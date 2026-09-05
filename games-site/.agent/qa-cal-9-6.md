# QA 记录 — CAL-9/6（既有页 P0 校准：tearsofmetal revive 口径 + themound 补丁版本 + home 重复行）

- 日期: 2026-09-06 | 模式: quick（仅改动页）
- 范围: tearsofmetalwiki 1 页既有校准 + themoundwiki 2 页（1 既有校准 + 1 重复行清理）
- 基准材料: `.agent/qa-expand-tearsofmetal-9-6.md`、`.agent/qa-expand-themound-9-6.md`、`tearsofmetalwiki/content/guides/co-op-revive-guide.md`（v0.12 权威口径）、`docs/agents/05 + 06`
- 排除: anomalypresidentwiki（BUILD-007 收尾中，严禁触碰）

## 改动清单

### tearsofmetalwiki/content/guides/healing-guide.md
| 位置 | 改前 → 改后 |
|------|------------|
| §6（旧 L98-106） | 「Co-op Revive Costs — 250/350 金币、幸存者付费、囤币/复活基金」→「Co-op Revive Rules — Health Is the Currency, Not Coins」：按 v0.12.58540（8/13）重写为生命值制表格（救人者付当前生命 50% / 需 >10% 最大生命 / 被救者按让渡最大生命占比回血 / 每次复活窗口 -5s），注明旧 250/350 为发行版历史、不再适用，正文交叉链接 /guides/co-op-revive-guide |
| frontmatter L3 description | 「…coin budgeting…, co-op revive costs, and Apothecary…」→「…coin budgeting…, the health-based co-op revive rules (post-v0.12), and Apothecary…」 |
| frontmatter L6 updated | 2026-08-29 → 2026-09-06 |
| frontmatter L13 Community source | 删「co-op revive costs…community-measured from whisperofthehouse」→ 补一段：revive 章节已按 v0.12.58540 官方公告 + thegameswiki update-history 校正（数值列举） |
| §8 Checklist（L138） | 「confirm who holds the revive reserve (250/350 coins)」→「keep the designated reviver above 50% HP — a revive costs the reviver 50% of current health (v0.12+), not coins」 |
| Related Guides（L151） | 新增「[Co-op Revive Guide](/guides/co-op-revive-guide) — v0.12 health-cost revive rules that supersede the old coin costs」 |

全站 grep（tearsofmetalwiki，除 co-op-revive-guide 外）复核：250/350 coin 现状仅剩 §6 历史性表述 + achievements「2500 triskelle」（无关），无任何页面再把金币制写成现行机制。✅ 旧口径清零。

### themoundwiki/content/guides/updates-patch-notes.md
| 位置 | 改前 → 改后 |
|------|------------|
| frontmatter L6 updated | 2026-08-10 → 2026-09-06 |
| L13 Last verified | August 10, 2026 → September 6, 2026 |
| 新增 Version 1.03 段（L23-35） | （原停在 1.0.1）→ 新增 1.03 Quality of Life Hotfixes：中央圆点防晕动无障碍项 + FOV 滑杆 85–115→75–125（链接 motion-sickness guide）、多人 ox-wagon 同时互动/观战可退出/语音 3D 空间化、单机随从静音武器↔步枪切换手势、序章过场加长、合约信息/宝藏需求更多样、doppelganger 与 sanity 效果改进、各类 bug/crash 修复、已知问题 crossplay 好友邀请仍在修复（server-list 变通，链 multiplayer guide）；日期 ~Late July 2026 [Unconfirmed] |
| 新增 Version 1.02 段（L37-48） | 新增 1.02 Block Ability & Hotfixes：新增 Block 能力、全平台成就/奖杯制进度恢复工具（链 save-recovery guide）、PS5 进度丢失修复、Ultra 预设性能修复、单机匕首消失与 Saints 不加载（1.01 回归）修复、同类敌人重复生成/超宽屏武器外观/本地语音/火把火焰修复 + 小额平衡（Saints 祝福降价、契约 tier token 上调）；日期 ~Late July 2026 [Unconfirmed] |
| Patch Notes Archive 表（L119-120） | 新增「1.03 ~Late July 2026 [Unconfirmed] Quality of Life Hotfixes」「1.02 ~Late July 2026 [Unconfirmed] Block Ability & Hotfixes」两行（最新在前） |
| Verification 段（L127-129） | Last checked 改 2026-09-06；Sources checked 补 Steam 公告标题 + 内部交叉引用清单 |

### themoundwiki/content/home-content.md
| 位置 | 改前 → 改后 |
|------|------------|
| Quick Navigation（旧 L33 行） | 删除重复行「| [Weapons Guide](/guides/weapons-guide) | Crossbow & firearms deep dive | Intermediate |」，保留 L24「| [Weapons Guide](/guides/weapons-guide) | Loadout planning | Starter |」；其它行未动 |
| frontmatter L6 updated | 2026-09-04 → 2026-09-06 |

## 来源表（核心断言 → URL/证据）

| # | 断言 | 判定 | 来源 |
|---|------|------|------|
| 1 | v0.12.58540（8/13）复活由金币改生命值制 | ✅ | co-op-revive-guide 已 PASS 核（Paper Cult Steam 公告 app 1913120 allnews + thegameswiki update-history）；本次 §6 依此重写，附 [official announcement](https://steamcommunity.com/app/1913120/allnews/) + [update-history](https://thegameswiki.com/tears-of-metal/wiki/update-history) |
| 2 | 救人者付当前生命 50%、需 >10% 最大生命、被救者按让渡最大生命占比回血、每次复活窗口 -5s | ✅ | 同上（QA-EXPAND-TEARS-OF-METAL 已两次独立 WebSearch 交叉一致） |
| 3 | Patch 1.03「Quality of Life Hotfixes」含中央圆点防晕动 + FOV 滑杆 85–115→75–125 | ✅ | [Steam 公告 Patch 1.03](https://steamcommunity.com/app/2569760/allnews/?l=koreana)（WebSearch 两路独立命中，与站内 motion-sickness 引用一致） |
| 4 | Patch 1.03 其余内容（ox-wagon 同时互动/随从手势/过场加长/合约信息/观战退出/语音/doppelganger+sanity/杂项修复/跨平台邀请仍在修） | ✅ | 同上（Steam 公告正文摘要） |
| 5 | Patch 1.02「Block Ability & Hotfixes」含 Block 能力、全平台成就制进度恢复、PS5 进度修复、Ultra 性能、匕首/Saints 修复、重复敌人生成修复等 | ✅ | [Steam 公告 Patch 1.02](https://steamcommunity.com/app/2569760/announcements/?l=finnish) / [ingamenews 报道](https://ingamenews.com/pc-gaming/the-mound-omen-of-cthulhu-patch-1-02-adds-new-block-ability/)（WebSearch 两路一致） |
| 6 | 1.02/1.03 时间「~Late July 2026」 | ⚠️ [Unconfirmed] 精确日 | 站内已引用来源收敛：multiplayer-connection-fix-guide「Official Fix Timeline」（1.02 mid–late Jul / 1.03 late Jul，源 Steam announcements + ingamenews）；progress-save-recovery & progression & performance 均写「1.02 late July 2026」；精确日未获官方页面直接日期 → 标注 [Unconfirmed] |
| 7 | 重复 Weapons Guide 行为污染（home Quick Navigation 出现两次） | ✅（本 diff 自证） | home-content.md 前 L24+L33 同 link；删 L33 |

## QA 判定：✅ PASS（0 🔴 / 0 🟡 / 0 🟢）

- Residue：Hugo shortcode / 他站域名 / 他站 wiki 名 → 改动 3 文件 0 命中；themound 两文件无 CJK；healing-guide 唯一日文引语为既有正文（Steam 日区评测原句，非残留）。
- 编造检查：本批全部改动断言可溯源（上表）；拿不到精确日期一律 [Unconfirmed]，未编造。
- 一致性：3 文件 frontmatter（title/description/category/version/updated）结构 OK；正文 /guides/ 内链与 related 指向均真实存在，0 BROKEN。
- 最小 diff：仅改冲突段/补版本史/删 1 行；未做任何内容扩充、未新增指南。

## 部署验证

### tearsofmetalwiki
- `./deploy-wiki-site.sh tearsofmetalwiki` → EXIT 1（良性：日志已出新部署 URL，vercel 健康检查在 sleep-5 alias 竞态中断）
- 新部署 URL: https://tearsofmetalwiki-ml7kp2nyw-zhaoq0103s-projects.vercel.app
- curl：prod `https://tearsofmetalwiki.vercel.app/guides/healing-guide` → **200**；`/guides/co-op-revive-guide` → 200
- 内容抽查：线上含「Health Is the Currency」×4、「no longer cost coins」×2、「50% of their current health」×2、「v0.12.58540」×4、「Co-op Revive Guide」×8

### themoundwiki
- `./deploy-wiki-site.sh themoundwiki` → EXIT 1（良性，同上）
- 新部署 URL: https://themoundwiki-geu7hmm3b-zhaoq0103s-projects.vercel.app
- curl：prod `https://themoundwiki.vercel.app/guides/updates-patch-notes` → **200**；`/` → 200；`/guides/motion-sickness-camera-fix-guide` → 200
- 内容抽查：patch-notes 线上含「Quality of Life Hotfixes」×10、「Block Ability & Hotfixes」×1、「centre of the screen」×2、1.02/1.03 各 ×10；home 线上「Crossbow & firearms deep dive」行 = 0，/guides/weapons-guide 仅剩 1 处导航链接（另有 Featured 区标题 1 处，属正常）

## 遗留问题
- themound 站内对 1.02/1.03 的「精确发布日」仍无官方直证：站内 multiplayer guide 时间线（1.02 mid-July）与 save/progression 系（1.02 late July）存在月份内粗粒度差异。本页按多数/官方-相近口径写「~Late July 2026 [Unconfirmed]」，未强行调和其它页；后续拿到 Steam 公告确切日期可再收敛。
- updates-patch-notes 既有 1.0.1/1.0.0 段保留原「1.0.1」写法，与新增段「1.02/1.03」（Steam 公告命名）并存；读者可从正文补丁标题识别为同一命名族（1.01≈1.0.1）。未做跨页重命名以免扩散 diff。

## 证据文件
- 部署日志: /tmp/deploy-tearsofmetal-cal-9-6.log、/tmp/deploy-themound-cal-9-6.log
- 本记录: .agent/qa-cal-9-6.md
