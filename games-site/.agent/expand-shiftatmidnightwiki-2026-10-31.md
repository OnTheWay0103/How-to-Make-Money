# EXPAND-2026-10-31-shiftatmidnightwiki

## 结论

- 状态：✅ 完成（写作 + 部署 + 线上验证）
- 新页 slug：`controller-support-steam-deck-guide`
- 标题：Shift At Midnight Controller Support & Steam Deck Guide（55 字符）
- description：156 字符
- 正文：1,500 词（口径 1,200–1,500），1 个 H1，首段 56 词
- 部署：https://shiftatmidnightwiki.vercel.app/guides/controller-support-steam-deck-guide 线上 HTTP 200

## 选题

**Shift At Midnight 的手柄支持与 Steam Deck 设置**。

为什么是缺口：站内 40 篇里 `controller` / `gamepad` / `Steam Deck` 没有独立页面；只有 `save-system-and-cloud-guide` 在存档路径里顺带提到 Steam Deck。玩家反馈明确指向这个缺口：

- Steam 讨论区有专帖 “Please Add Gamepad Support”，OP 报告「will recognize button inputs but not joysticks」，开发者回复「Ill pass it on as a suggestion!」，另有 “Is controller support planned?” 帖。
- Reddit 有专帖 “Xbox controller issues”（2026-09-03），同一手柄在两台笔记本上分别显示 X 与 E 提示；回复称「The game doesnt really have native controller support sadly」。
- 多个第三方站（shiftatmidnight.wiki、shiftatmidnightwiki.site、tuxDB、TheGamer/PCGamingWiki 等）都在回答同一问题，说明是重复出现的搜索意图，不是一次性长尾。
- 官方 Steam 页的 controller-support 字段全为 false，Steam Deck 为 Playable（非 Verified），正好可以用官方数据给出确定答案。

未选已覆盖主题：doppelganger、dentist、entity、endings、money、marionette、save/cloud、performance、voice chat 等站内均已有页。

## 反馈来源（可点击 URL + 抓取日期）

| 来源 | URL | 日期 | 要点 |
|---|---|---|---|
| Steam 社区讨论 “Please Add Gamepad Support” | https://steamcommunity.com/app/3722330/discussions/0/690871474424385921/ | 2026-10-31 访问 | OP：按钮有反应、摇杆无反应；开发者回复会转达建议；无承诺/日期 |
| Reddit r/ShiftAtMidnight “Xbox controller issues” | https://www.reddit.com/r/ShiftAtMidnight/comments/1w6mlmb/xbox_controller_issues/ | 2026-09-03 发帖；2026-10-31 访问 | 同手柄两台机器提示不同；回复称无原生手柄支持 |
| shiftatmidnight.wiki Controls / Steam Deck | https://shiftatmidnight.wiki/guide/controls/ | 2026-10-31 访问 | Deck “Playable, not Verified”；无官方 Deck 配置；Steam Input/Proton/40 FPS 建议 |
| tuxDB Steam Deck 条目 | https://www.tuxdb.com/section/steamdeck?deckgame=3722330 | 2026-10-31 访问 | 独立列出 Playable 与 Valve 同款 caveat |
| Steam 商店页（评测概况） | https://store.steampowered.com/app/3722330/Shift_At_Midnight/ | 2026-10-31 访问 | 英文评测 5,216 条 94% 好评；近 30 天 984 条 86% 好评 |

说明：本机网络对 `steamcommunity.com` / `reddit.com` 直连被阻断（ECONNRESET / curl 000），Steam 讨论内容通过搜索索引摘要核实，Reddit 内容通过 PullPush 档案 API 读取（permalink 指向真实原帖）。因此这两条的「全文直读」未完成，但 URL、发帖日期与关键句均有记录。

## 素材源（≥2 独立 + ≥1 官方）

官方：

1. Steam 商店页 controller-support 声明（app 3722330）：全 Xbox full/partial、PS4/PS5、Steam Input API、gamepad-preferred 均为 false；keyboard 可用。
2. Steam Deck 兼容性 payload：category 2 = Playable；default controller config not fully functional、glyphs 不匹配、文本输入不自动弹键盘；性能与文字可读性为正面项。
3. Xbox Store 页面：Single player、Online co-op (2-3)、Xbox cross-platform co-op、Play Anywhere、cloud saves、achievements；未列 local co-op / split-screen。

社区/第三方（交叉核对）：

4. Steam 讨论区 “Please Add Gamepad Support”与 “Is controller support planned?”。
5. Reddit “Xbox controller issues”。
6. shiftatmidnight.wiki 控制/Deck 页。
7. tuxDB Deck 条目。

## 自检与结果

| 命令 | exit | 结果 |
|---|---|---|
| `node scripts/seo-check.mjs --site shiftatmidnightwiki --live --report .agent/seo-fix-shiftatmidnightwiki.md` | 0 | ERROR 0 / WARN 97；新页不在任何 WARN 清单 |
| `node scripts/check-ad-slots.mjs shiftatmidnightwiki` | 0 | 1 站通过 |
| `node scripts/check-site-residue.mjs shiftatmidnightwiki` | 0 | 无模板残留 |
| `pnpm build`（站内） | 0 | 50/50 静态页生成，新页出现在路由表 |
| 构建产物核对 | — | 新页 1 个 `<h1>`、title/desc 正确、5 条内链全部存在 |
| `./deploy-wiki-site.sh shiftatmidnightwiki` | 成功输出 | 新部署 `shiftatmidnightwiki-qsff3mulj-...`，脚本报部署完成 |

QA quick（手工）：

- 虚构检查：未新增 Boss/武器/数值；未声称官方支持手柄；PC Game Pass 手柄行为标 `[Unconfirmed]`。
- 一致性：沿用站内已有口径（在线 co-op 2–3；Xbox 无本地合作）。
- 残留：新文件无他站游戏名、无中文标记。
- 内链：multiplayer-faq / pc-performance / beginner / voice-chat-mic-setup / save-system-and-cloud 均存在。

## 线上验证

- `dig @1.1.1.1 shiftatmidnightwiki.vercel.app` → 64.29.17.67，`curl --resolve` 访问新页：**HTTP 200，70,122 bytes**。
- 线上 HTML：`<h1>` 1 个；title 正确；首段包含 “no native controller support on the Steam PC build”；`container-` 广告容器 2 个（global + guide）。
- 线上 sitemap：HTTP 200，包含 `controller-support-steam-deck-guide` 1 条。

## 文件清单

- 新增：`shiftatmidnightwiki/content/guides/controller-support-steam-deck-guide.md`
- 新增：`.agent/expand-shiftatmidnightwiki-2026-10-31.md`（本报告）
- 生成：`.agent/seo-fix-shiftatmidnightwiki.md`（seo-check 报告）
- 未改：`lib/seo-config.ts`、`lib/adsterra-zones.ts`、`.agent/expand-daily.json`、`.agent/qa-report.md`、其他站点
- 未 commit、未 push

## 遗留问题（预存在，未在本轮修改）

1. `patch-notes-history.md` 仍写「6-player lobby 未被官方确认」「没有逐条 changelog」，与官方 Steam 公告 “6 PLAYER LOBBIES + FIXES” 及 15/30 customers 等 changelog 冲突；建议后续单独修正。
2. `faq-content.md` 第 53 行称 Steam 与 Xbox 可跨平台联机，与 `multiplayer-faq-guide`（Steam 池独立）冲突；预存在，建议合并口径。
3. 本机网络无法直读 Steam 社区原帖与 Reddit 原帖，仅能通过搜索索引/档案 API 核实；若需逐字引用，需换网络环境复验。
4. SEO WARN 97 → 部署时本地 86 条，均为存量 title/description 长度、字数、内链、canonical 项；按 2026-10-29 决定暂不处理。
