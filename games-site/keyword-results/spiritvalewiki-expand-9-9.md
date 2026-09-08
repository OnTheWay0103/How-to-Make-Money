# SpiritVale 内容扩充记录 — 9/9

> 模式: expand-feedback | 站点: spiritvalewiki | 游戏: SpiritVale (Baikun Interactive, Steam app 3767850, EA 2026-07-15)
> 角色: 反馈分析师 + 建站协调员 + QA 审核员（一站内串起全流程）
> 结果: ✅ **产出 1 篇** — `content/guides/account-ban-appeal-guide.md`（约 1,500 词正文，QA PASS，已部署并 curl 验证）
> 背景: 8/28 最后扩充；9/3–9/7 连续 5 次 SKIP，9/8 未轮到。本轮触发复检「0.31.0 Dark Fortress ≥2 独立非官方来源」。

## 〇、0.31.0 触发复检结论（P0 指定项）

**仍未达标 → 本轮不写 Dark Fortress 深度指南。**

- vgspoilers 补丁日志直抓（8/17 后无更新，最新仍为 0.30.14）；MassivelyOP 对 SpiritVale 报道止于 8/17。
- 0.31.0（8/25 官方公告，Dusk 武器/Echo 套/Grimoires 角色绑定/Bond Targets/PvP 跨服队列）截至 9/9 **无任何独立第三方（非官方）覆盖**。
- 站内 updates-patch-notes（9/6 校准）已把 0.31.0 官方公告内容完整收录 → 即使达标，重写一遍官方内容=内容自噬。故「达标才写」的设计判断依然正确：不达标即不写。

## 一、今日反馈采集（2026-09-09 实际执行）

按 8/28 上一轮后到今日的可检索反馈 + 官方 8/17 执法公告，聚焦「玩家当下会搜/会问」的高频问题。

### 独立来源清单（用于选题 ≥3 判定）
| # | 来源 | 类型 | 内容要点 | 链接 |
|---|------|------|----------|------|
| 1 | 开发组执法公告（官方 Steam/Discord，经 MassivelyOP 报道） | Official | 8/17 封禁清单：**3,821（未授权程序/宏，MassivelyOP 表述为永久封禁）、1,106（RMT）、65（行为准则）**；同文预告下版内容（亚服/PvP 重做/Dragon Knight） | https://massivelyop.com/2026/08/17/spiritvale-shares-a-ban-list-updates-on-dev-team-size-and-a-list-of-features-for-its-next-update/ |
| 2 | MassivelyOP（7/21） | Editorial | EA 首发周 2 万同接；bot 打金破坏经济；Bot Hunter Program（Discord 举报）；demo 关停 | https://massivelyop.com/2026/07/21/indie-mmorpg-spiritvale-sees-20000-concurrent-players-as-the-dev-fights-economy-wrecking-bots/ |
| 3 | Steam 讨论「I haven't done anything wrong, but my account got banned for no reason. Is this a false ban?」 | Community | 误封求助帖；顶回复：去开官方 support ticket 才会知道原因，「在这写没用」；有回复称 ticket 自动关闭/响应慢/看不了回复 | https://steamcommunity.com/app/3767850/discussions/0/586182361974100027/ |
| 4 | Steam 讨论「Wrongfully accused as a Bot」 | Community | ROG Ally 掌机手动游玩被系统判 botting 误封；社区流传封禁阶梯（botting 首犯 7 天/再犯 14 天/三犯永久；宏首犯 1 周） | https://steamcommunity.com/app/3767850/discussions/0/586182635679706563/ |
| 5 | Steam 近期评测（中文区 + 英文区） | Community | 误封个案（亲友间交易被当 RMT、孩子账号被当 bot、ticket 秒关）；亦有玩家观察到「~90% bot 在封禁潮后消失」 | https://steamcommunity.com/app/3767850/reviews/ |

### 其他被否决候选（记录理由）
| 候选 | 否决原因 |
|------|----------|
| 开放世界 PvP 野外区域深度指南 | 来源薄（<3 独立）；pvp-arena 已覆盖 Colosseum 并提及开放世界；与官方 PvP 重做预告时间点冲突，易写空 |
| 0.31.0 Dark Fortress 深度指南 | 见「〇」：独立来源未达标；且官方内容已被 updates-patch-notes 收录（自噬） |

## 二、选题判定 — Account Ban / False-Ban / Appeal（选中）

| 条件 | 判定 |
|------|------|
| 1. 高频 ≥3 独立来源 | ✅ Official（执法公告）+ Editorial（MassivelyOP 7/21 + 8/17 两篇）+ Community（≥3 帖/评）。多声部独立 |
| 2. 具体可成篇 | ✅ 官方封禁分类+数字可列表；误封场景可归纳；申诉通道（support ticket）有可操作步骤；避坑/预防可给清单 |
| 3. 缺口（不重复） | ✅ 站内 40 篇 grep「ban/appeal/banned」= 0 命中。最近邻 connection-server-guide 仅覆盖「举报 bot」侧（Bot Hunter Program），未覆盖**被封玩家视角**（为什么被 ban/怎么申诉）。updates-patch-notes 只提「actively banning」，无具体执法数字 → 无自噬 |
| 4. 可溯源不编造 | ✅ 执法数字=官方（经 MassivelyOP 可溯源）；封禁阶梯/误封个案/ticket 体验/申诉流程=社区单一来源 → 全部 **[Unconfirmed]**；不虚构任何玩家原话（帖内顶回复为可溯源引用） |

**不达标部分如实标注**：官方从未发布「封禁阶梯/申诉流程」文档 → 文中申诉流程为社区口径，全部挂 [Unconfirmed]；MassivelyOP 无法直连 Discord 原文，数字以「官方公告（经 MassivelyOP 报道）」定级。

## 三、交付物

| 文件 | 说明 |
|------|------|
| `content/guides/account-ban-appeal-guide.md` | 新指南：**Why Was My SpiritVale Account Banned? — Ban Reasons & Appeal Guide**（约 1,500 词正文；frontmatter sources 4 条含 11 处 [Unconfirmed]；problem-oriented 标题） |
| `content/home-content.md` | Quick Navigation 追加 1 行（Account Ban Appeal Guide / Fixes） |

## 四、给主 Agent 的遗留建议（P0 级线索）
1. **0.31.0「≥2 独立来源」门槛若长期不达标**：updates-patch-notes 的 0.31.0 章节目前是「官方单一来源」，合规审计时注意其措辞已如实声明「developer-published but not community-corroborated」。
2. **执法公告是持续话题**：开发组预告的 PvP 重做/Dragon Knight 落地后，PvP arena 指南与本文可联动更新（属既有指南编辑，超出 expand 范围）。
