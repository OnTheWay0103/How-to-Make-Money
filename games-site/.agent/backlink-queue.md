# 外链队列（backlink-queue）

> 口径见 `docs/STRATEGY-外链建设.md` 第五节「周节奏：每个合适站点每周 1 条」。
> 本文由 `node scripts/backlink-queue.mjs --write` 生成，**`MUST NOT` 手改**（改了下次刷新会被覆盖）。
>
> 名额三条同时成立：① PV30 ≥ 50 ② 上线 ≥ 30 天 ③ 生命周期状态 ≠ `不再维护`。
>
> 产能约束：单平台单账号每周 ≤3 篇 → 实际可发 = 已开通平台数 × 3。当前只有 dev.to = 3 篇/周。

```bash
node scripts/backlink-queue.mjs --write   # 每周一刷新（也用于发完一篇文章后更新进度）
node scripts/link-check.mjs --write       # 发完立刻实测 rel，结果回写外链台账
```

**取数**：2026-10-30T23:46:54.676Z 抓 `dashboard /api/traffic`（GA4 30 天窗口）。当前名额 **30** 站。
**排除**：23 站（PV < 50 / 未满 30 天 / 不再维护 / 上线日不明）。

| # | 站点目录 | PV30 | 上线日 | 首选目标页 | 上次发文 | 存活条数 | 状态 |
|---:|---|---:|---|---|---|---:|---|
| 1 | nivalisnightswiki | 1830 | 2026-08-07 | /guides/best-business-guide | 2026-10-27 | 2 | 进行中 |
| 2 | waterparksimulatorwiki | 1061 | 2026-08-08 | /guides/hidden-content-easter-eggs-guide | 2026-10-28 | 2 | 进行中 |
| 3 | shiftatmidnightwiki | 1030 | 2026-07-29 | /guides/story-walkthrough | — | 0 | 待排 |
| 4 | sephiriawiki | 939 | 2026-07-20 | /guides/builds-guide | 2026-10-31 | 2 | 进行中 |
| 5 | themoundwiki | 800 | 2026-07-11 | /guides/enemy-bestiary | — | 0 | 待排 |
| 6 | spiritvalewiki | 797 | 2026-07-12 | /guides/weapons-guide | — | 0 | 待排 |
| 7 | moonlightpeakswiki | 759 | 2026-07-31 | /guides/money-guide | — | 0 | 待排 |
| 8 | tearsofmetalwiki | 599 | 2026-07-23 | /guides/best-builds | — | 0 | 待排 |
| 9 | gotownwiki | 539 | 2026-08-01 | /guides/best-layout-guide | — | 0 | 待排 |
| 10 | aincradwiki | 345 | 2026-07-07 | /guides/beginner-guide | — | 0 | 待排 |
| 11 | witchspirewiki | 342 | 2026-06-30 | /guides/hearth-upgrade-guide | — | 0 | 待排 |
| 12 | relicfirstguardianwiki | 338 | 2026-07-28 | /guides/weapons-guide | — | 0 | 待排 |
| 13 | ironnestwiki | 322 | 2026-08-06 | /guides/beginner-guide | — | 0 | 待排 |
| 14 | expeditionssamuraiwiki | 311 | 2026-08-01 | /guides/best-builds-guide | — | 0 | 待排 |
| 15 | vahrinscallwiki | 277 | 2026-07-28 | /guides/weapons-guide | — | 0 | 待排 |
| 16 | dragonswordwiki | 269 | 2026-07-24 | /guides/hero-builds-guide | — | 0 | 待排 |
| 17 | bigwalkwiki | 246 | 2026-08-04 | /guides/controls-guide | — | 0 | 待排 |
| 18 | delveriumwiki | 232 | 2026-08-02 | /guides/boss-guide | — | 0 | 待排 |
| 19 | grainrotwiki | 210 | 2026-07-24 | /guides/outpost-upgrade-guide | — | 0 | 待排 |
| 20 | ardentwildswiki | 154 | 2026-07-31 | /guides/crafting-guide | — | 0 | 待排 |
| 21 | restorywiki | 150 | 2026-08-08 | /guides/walkthrough-guide | — | 0 | 待排 |
| 22 | lunariumwiki | 144 | 2026-07-26 | /guides/equipment-guide | — | 0 | 待排 |
| 23 | mystraliawiki | 132 | 2026-07-22 | /guides/best-spell-builds | — | 0 | 待排 |
| 24 | mistfallhunterwiki | 120 | 2026-07-04 | /guides/combat-mechanics-guide | — | 0 | 待排 |
| 25 | boneholdwiki | 115 | 2026-07-30 | /guides/beginner-guide | — | 0 | 待排 |
| 26 | taivalwiki | 89 | 2026-07-27 | /guides/beginner-guide | — | 0 | 待排 |
| 27 | beastreincarnationwiki | 63 | 2026-08-08 | /guides/secrets-collectibles-guide | — | 0 | 待排 |
| 28 | lowbudgetrepairswiki | 56 | 2026-08-03 | /guides/hidden-secrets-guide | — | 0 | 待排 |
| 29 | dinobladewiki | 55 | 2026-07-20 | /guides/soul-arts-guide | — | 0 | 待排 |
| 30 | phantomtowerwiki | 55 | 2026-07-30 | /guides/items-catalog-guide | — | 0 | 待排 |

> `上线日` 带 `*` = 台账该列空着，回退成 GA property 创建日（近似值，不是真实上线日）。
> `存活条数` 只数外链台账里 `status=live` 且 rel 不是 nofollow/ugc/sponsored 的条目。

## 怎么消费这一队

1. 取「上次发文」最久没动的（`—` 排最前），同批内 PV 高者优先；
2. 一篇 2–3 条链接、只打 1 个站，指向表里的目标页；锚文本按品牌 6 : 长尾 3 : 精确 1 分布；
3. 连续两篇 `MUST NOT` 打同一个站；同一天发的多篇 `MUST` 指向不同站；
4. 发布后立刻 `node scripts/link-check.mjs --write`，rel 以实测为准；
5. 再跑一次本脚本 `--write` 刷新进度（`上次发文`/`存活条数` 都是从外链台账算的，别手改本文件）；
6. 累计到 **3 条存活** 才算该站达标（`状态` 变 `达标`），30 天后 `--due` 复查掉链要减回去。
