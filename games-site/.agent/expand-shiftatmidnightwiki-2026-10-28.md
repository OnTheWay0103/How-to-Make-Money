# EXPAND — shiftatmidnightwiki — 2026-10-28

## 产出

- slug: `voice-chat-mic-setup-guide`
- 标题: Shift At Midnight Voice Chat Not Working? Mic Setup Fixes
- URL: https://shiftatmidnightwiki.vercel.app/guides/voice-chat-mic-setup-guide
- 正文词数: 1,372（title 57 字符 / description 155 字符 / H1 ×1（线上实测 1）/ 首段 53 词）

## 选题依据（为什么是它）

站内 33 篇零覆盖。改前全站只有两处提到语音：
`multiplayer-faq-guide.md` 的「Voice Chat, Muting, and Mic Discipline」小节（讲的是**纪律**：开麦会被实体听到）
与 `faq-content.md` 的「Do I need a microphone?」，**没有任何一篇讲"为什么麦克风不出声"**。
`grep -i "microphone|mic not|voice not working"` 在技术排查意义上 0 命中。

玩家侧信号有三层：
1. Steam 商店页把 "Proximity chat" 列为官方特性之一，但**游戏内没有设备选择器** —— 这是玩家找不到设置项的根因；
2. 至少 3 个独立站（2UpSkill、shiftatmidnight.wiki、shiftatmidnightwiki.site）各自写了"voice chat not working"
   专页，说明是持续有搜索量的支持型长尾，不是臆想的题；
3. 该游戏的差评/讨论主题集中在「规则不透明」「多人连接问题」，语音是多人侧最常见的求助方向。

与 10-27 的 `shop-rating-cleaning-guide` 不重叠：那篇讲清洁与评分（玩法内经济），本篇讲音频设备排查（技术配置），
意图、页面、关键词三者都不相交。

## 来源（5 条，2 独立通道 + 本站编辑层）

| 层级 | 来源 | 日期 |
|---|---|---|
| Official | Steam 商店页（Bun Muen / Kwalee）：特性列表含 "Proximity chat"、"Multiplayer"；最多 3 人线上联机、支持单人 | 2026-10-28 访问 |
| Official | Steam 公告 2026-08-20「15 CUSTOMERS + BUG FIXES」：新增 "Individual volume sliders for each player"、"Steam Cloud saves"、15 名新顾客、商品价格拉平 | 2026-08-20 |
| Community | 2UpSkill 排障文：Windows 隐私麦克风开关、默认通信设备、Steam Settings > Voice 手选设备 + Voice Test、**完整重启 Steam**、16-bit/48000 Hz、虚拟声卡软件冲突清单（VoiceMeeter / Voicemod / Sonar / Wave Link / NVIDIA Broadcast / Krisp）、flushdns + winsock reset | 2026-10-28 访问 |
| Community | Steam 讨论「Only 3-player multiplayer??」：开发者回复解释 3 人上限是有意设计，任务可单人完成 | 2026-10-28 访问 |
| Editorial | 修复顺序、症状对照表、"默认用 push-to-talk" 的建议 | 2026-10-28 |

> **披露**：Steam Community 主机在本机 `ETIMEDOUT`（与前几轮一致），2026-08-20 公告条目是从检索索引读到的，
> 已在 sources 的 text 与正文「What is not confirmed」两处写明"未直接抓取"，并建议读者到公告页复核原文。
> 该游戏**没有**官方承认的麦克风 bug，本篇也没有把它写成 bug —— 全篇结论是"设备选错，不是游戏坏"。

## 采集面（≥6 组查询）

1. `reddit "Shift at Midnight" players stuck confused mechanic help` — 无可用 Reddit 索引，转竞对/媒体
2. `"Shift at Midnight" Steam discussion how to what does` — 拿到玩法事实底（3 人上限、proximity chat、13 夜）
3. `site:reddit.com "Shift at Midnight" night 10 bucket stuck` — 0 结果，Night 10 卡桶题**来源只有二手 SEO 站**，放弃
4. `steamcommunity.com "Shift At Midnight" discussions general topics` — 命中「Only 3-player multiplayer??」「Couple Questions & Suggestions」
5. 差评/困惑主题（"confusing" OR "unclear"）— 结论集中在剧情不透明 + 规则不透明，但规则类已被 `doppelganger-guide` / `all-doppelgangers-list` 吃透
6. `"Shift at Midnight" voice chat not working` — 3 个独立站有专页，确认需求存在
7. `"Shift at Midnight" lost save progress steam cloud` — 备选题（存档页），因与本机既有 `pc-performance-guide` 的存档路径存在来源冲突而放弃

## 排除理由

- **Night 10 水桶卡关**：唯一来源是 shiftatmidnight.co 等二手攻略站，无 Steam 原串可核，
  且其中「水桶会消失」「控制失灵」属 bug 报障而非攻略题 → 不写
- **存档 / Steam Cloud 专页**：两个社区来源给的路径互相冲突（`AppData\Local\ShiftAtMidnight\Saved\SaveGames`
  vs `AppData\LocalLow\Kwalee\ShiftAtMidnight`），本站既有页已写了其中一个；新开一页会制造站内 🟡 冲突，
  正确做法是后续单独核验后修旧页，不在本轮扩词里做
- **配额 / 工资公式**：`money-guide` 已明确写"官方未公布，各社区数字不一"，再写一页必然编造数字
- **失踪的狗 Guillermo**：`characters-guide` 已有一行结论，撑不起 1,200 词的独立意图
- **玩家阵营（doppelganger 识别）**：`doppelganger-guide` + `all-doppelgangers-list` 双页已覆盖
- **4 人联机**：`multiplayer-faq-guide` 已覆盖，本轮改为在新页里做互链引用

## QA

- `node scripts/lint-guides.mjs shiftatmidnightwiki` → **0 ERROR / 25 WARN**
  （本篇只产生 1 条 `updated-future` 时区假警报；其余 24 条全为存量页「正文无 markdown `#` 标题」，
  页面 H1 由 frontmatter 渲染、线上仍为 1 个，属 2026-10-27 已澄清的历史口径，不追溯）
- `node scripts/check-site-residue.mjs shiftatmidnightwiki` → ✅ 无模板残留
- `pnpm install && pnpm build` → exit 0，新页出现在静态路由表
- 完整 QA quick 报告：`.agent/qa-shiftatmidnightwiki-2026-10-28.md`

## 部署与线上验证

- `./deploy-wiki-site.sh shiftatmidnightwiki` → 部署成功，
  新部署 `shiftatmidnightwiki-9jgyx1tlo-zhaoq0103s-projects.vercel.app`，alias 到 `https://shiftatmidnightwiki.vercel.app/`
- `dig @1.1.1.1 +short shiftatmidnightwiki.vercel.app` → 64.29.17.67 / 216.198.79.67
- `curl --resolve`（216.198.79.67）：
  - `/guides/voice-chat-mic-setup-guide` → **200**，`<h1>` 计数 **1**，`<title>` 正确
  - `/guides` 列表页 → 200 且含本页链接
  - `/` → 200，`/ads.txt` → 200，`/sitemap.xml` → 200
- `/sitemap.xml`（加查询串绕过边缘缓存）42 条 loc / 34 条 guide URL，含本页 ✅

> 注：裸请求 `/sitemap.xml` 前两次命中旧边缘缓存对象（5 条 loc、lastmod 停在 10-27T23:52），
> 换查询串后稳定取到 42 条并确认含本页；属 CDN 缓存 TTL 现象，非站点缺陷。

## 未做

- 未执行 git add / commit / push（主 Agent 统一提交）
- 未改 `.agent/expand-daily.json`、未改 `.agent/qa-report.md`
- 未动站点广告代码与 `lib/adsterra-zones.ts`
- 未改 `pc-performance-guide.md` 里的存档路径（来源冲突待单独核验，本轮不擅改）
- 未手改 `keyword-results/INDEX.md`、`STATS-游戏站点统计.md`
