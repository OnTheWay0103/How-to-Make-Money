# Moonlight Peaks — 扩充报告（2026-10-23）

## 选题

**Slug**: `museum-guide`
**标题**: Moonlight Peaks Museum Guide — How to Unlock All Five Rooms and Every Reward

选题依据：站点 16 篇现有攻略中没有任何一篇讲博物馆完整系统；`fishing-guide.md` 只在 Aquarium 收藏处顺带提到 Museum。官方 Patch 1.2.3（2026-08-20）明确改动 Museum（接受更高质量物品，包括鱼），说明该系统仍在更新。博物馆是游戏最大的长期收集系统（五房间、210 件展品、13 档奖励），属于「官方系统清单 × 站内整块空白」。

## 来源

- Official — Steam Patch Notes 1.2.3（2026-08-20）：https://store.steampowered.com/news/app/2209900/view/1841579228666115
- Community — GamesHedge Museum Guide（解锁流程、房间、奖励表）：https://www.gameshedge.com/moonlight-peaks-museum-guide/
- Community — Moonlight Peaks Wiki Museum Guide（房间收藏、2 星作物规则）：https://moonlightpeaks.wiki/guides/museum-guide/
- Community — PocketTactics Museum Guide（交叉核对）：https://www.pockettactics.com/moonlight-peaks/museum
- Official — Steam 商店页（游戏事实）：https://store.steampowered.com/app/2209900/

无法确证项已标 `[Unconfirmed]`：具体任务名（A New Beginning / Museum in the Making / Curating the Museum）、Patch 1.2.3 后星级鱼是否仍被接受。

## 查重结论

- 新 slug 与现有 16 篇无重复；标题无重复。
- `fishing-guide` 仅覆盖 Aquarium 的 22 种鱼与「捐一条」建议；本篇覆盖解锁、五房间、210 件、星级/颜色规则、13 档奖励与捐赠顺序，主题不重叠。
- `money-guide` 仅提到 Goliath 捐博物馆；不构成自噬。
- 独立搜索意图：museum unlock / rooms / donations / rewards。

## 词数

正文 **1453 词**（不含表格，脚本统计）。

## Build

`pnpm install --prefer-offline` + `pnpm build` 成功，静态生成 30 页，路由包含 `/guides/museum-guide`。

## 部署

- 部署命令：`./deploy-wiki-site.sh moonlightpeakswiki`
- 生产 URL：https://moonlightpeakswiki.vercel.app/guides/museum-guide
- 本次 deployment：https://moonlightpeakswiki-au2dbmgxb-zhaoq0103s-projects.vercel.app

## 线上验证

- `curl` HTTP **200**（68,066 bytes）
- 页面标题包含 `Moonlight Peaks Museum Guide — How to Unlock All Five Rooms and Every Reward`
- 正文包含 `Dracula Insignia Key`（3 处），确认新内容已上线
