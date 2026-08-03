# 候选游戏池

> 侦察 Agent 发现的新游戏候选。主管 Agent 读取此文件做建站决策。
> 最后更新: 2026-08-04

## 候选清单

| # | 游戏 | 类型 | 评分 | 上线日 | Wiki | 发现日 | 状态 |
|---|------|------|:--:|------|:--:|------|------|
| 1 | **Nivalis Nights** | 赛博朋克生活模拟 (Ion Lands/505) | **22** | 9/29 | ⚠️ thegameswiki.com 已有 wiki | 8/3 | **强烈推荐** — 932K wishlist（2026 第5），7 种生意+100 NPC+钓鱼/象棋/航海，指南面极广；⚠️ thegameswiki 已建 wiki（尚小，无 Fandom）；**现在建站太早（距发售 57 天），建议 9 月初再建** |
| 2 | ~~**Low-Budget Repairs**~~ | ~~装修经营模拟 (Gray2RGB/PlayWay)~~ | ~~**21**~~ | ~~8/13~~ | ~~❌ 无~~ | ~~8/3~~ | ✅ **已建站** — lowbudgetrepairswiki，8/3 Coordinator auto-build |
| 3 | Luminary | ARPG-lite Co-op (2人) | 19 | 8/11 EA | ❌ 无 | 8/3 | 观望（50K wishlist；名字泛化 SEO 弱；2人团队） |
| 5 | Sir, We Have an Orc Problem | TD + 增量 (2人) | 19 | ~8/1 已上线 | ❌ 无 | 8/3 | 观望（首发 $360K/天、峰值 7.6K CCU 爆款，仅 ProdigyGamers 一篇攻略；2人团队） |
| 6 | BOMBANANA! | 3人 Co-op 拆弹 | 19 | 8/27 | ❌ 无 | 8/3 | 观望（659K wishlist；派对游戏内容偏浅） |
| 7 | IRON NEST: Heavy Turret Simulator | 重炮模拟 (2人) | 18 | 8/6 | ❌ 无 | 8/3 | 观望（843K wishlist；品类窄；3天后上线需快） |
| 8 | Blood Dungeon | Bullet Heaven 平台跳跃 (Messhof) | 17 | 8/25 | ❌ 无 | 8/3 | 观望（小团队 ~5人；名字泛化） |
| 9 | Mortal Shell II | Souls-like ARPG | 16 | 8/20 | ⚠️ 竞争激烈 | 8/1 | 观望（IGN/Ludo.guide/社区Wiki已存在） |
| 10 | Good Heavens! | Co-op 生存建造 RPG | 15 | 8月 EA | ❌ 无 | 8/1 | 观望（EA日期模糊，热度低） |
| 11 | Twisted Tower | FPS Horror Adventure | 14 | 8/18 | ❌ 无 | 7/31 | 观望（等待临近发售） |
| 12 | Dig, Dig, Die | 6人 Co-op 恐怖 | 14 | 8/6 | ❌ 无 | 8/1 | 观望（小团队 <10人） |
| 13 | Frozen Ship | 生存建造 | 14 | 8/7 EA | ❌ 无 | 8/1 | 观望 |
| 14 | Polylithic | 石器时代生存 Co-op | 13 | 8/25 1.0 | ❌ 无 | 8/1 | 观望（EA已3年，1.0新窗口） |
| 15 | Pax Autocratica | 殖民模拟 FPS Roguelite | 13 | 8/10 EA | ❌ 无 | 8/1 | 观望 |
| 16 | Lootbound | 回合制战术 Roguelite | 13 | 8/14 | ❌ 无 | 8/1 | 观望 |
| 17 | Pass the Fear | Co-op Roguelite 弹幕 | ~~16~~ **12** | 7/22 已上线 | ⚠️ 已有 wiki | 8/1 | ⚠️ 降级 — 8/1 深度调研发现 passthefear.wiki 已存在（含 build planner），关键词仅 18 个 |
| 18 | FEED IT | PSX-Style Horror | 12 | 8/17 | ❌ 无 | 7/31 | 观望（wishlist 偏低） |
| 19 | Stoneguard | Horde Survival EA | 11 | 7/30 | ❌ 无 | 7/31 | 低分（~121 销量） |
| 20 | Order Automatica | Tactical Roguelite | 11 | 7/27 | ❌ 无 | 7/31 | 低分（0 评测 319 关注） |

## 已建站（从候选池移除）

| 游戏 | 评分 | 建站日 | 站点 |
|------|:--:|------|------|
| Big Walk | 21 | 8/4 | bigwalkwiki — 上线当日建站（8/4 发售，零 wiki 竞争，799K wishlist，93 Metacritic） |
| Expeditions: Samurai | 20 | 8/1 | expeditionssamuraiwiki |
| Moonlight Peaks | 17 | 7/31 | moonlightpeakswiki |
| Go-Go Town! | 15 | 8/1 | gotownwiki |
| Low-Budget Repairs | 21 | 8/3 | lowbudgetrepairswiki |
| Delverium | 19 | 8/2 | delveriumwiki |

> ⚠️ 完整已建站清单（28 站）见 `dashboard/lib/sites.ts` 与 `.agent/build-history.json`。
> 注意：**Echoes of Mystralia**（mystraliawiki）与 **Grain Rot**（grainrotwiki）已建站（7 月底），
> 本次侦察已确认并排除，勿重复推荐。

---
> **使用规则**: 
> - 侦察 Agent 写入新候选
> - 主管 Agent 读取 → 决定是否建站
> - 建站完成后从候选清单移除，移到"已建站"
> - 评分 < 10 或发现 > 30 天 → 清除
