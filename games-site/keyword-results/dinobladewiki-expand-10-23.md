# dinobladewiki 扩充报告 — 2026-10-23

## 选题

**Slug**: `raptor-and-rematch-mode-guide`
**标题**: How to Play as the Raptor & Use Rematch Mode in Dinoblade
**选题路径**: ② system-inventory / 官方更新清单 × 站内覆盖

Dinoblade 于 2026-10-01 发布免费内容更新，Steam 公告标题为 **“Playable Raptor, REMATCH MODE, Steam Fall Sale 20%”**，新增 Story Mode 可玩 Raptor 与 Rematch Mode。站内 15 篇既有攻略（beginner / boss / weapons / soul-arts / new-game-plus 等）均未覆盖角色选择或 Rematch Mode，属整块空白。

## 来源（4 个独立来源，含 2 个官方）

**Official**
1. Steam 公告 “Playable Raptor, REMATCH MODE, Steam Fall Sale 20%” — 2026-10-01
   https://store.steampowered.com/news/app/3440070
2. Steam 公告 “Optimized the Player Character Map Size” — 2026-10-02
   https://store.steampowered.com/news/app/3440070
3. Steam 公告 “Fixed Load Game UI Not showing if Players Play as Raptor First” — 2026-10-12
   https://store.steampowered.com/news/app/3440070
4. Steam 商店页（Story Mode / Boss Rush / 战斗系统基线）
   https://store.steampowered.com/app/3440070/Dinoblade/

**Community**
5. player.gg Dinoblade patch feed — 记录 Raptor 与 Rematch 为免费更新
   https://player.gg/explore/games/330174-dinoblade
6. isitdoneyet.gg — 2026-10-02 评估，确认 Sept 29–Oct 1 更新窗口
   https://isitdoneyet.gg/game/dinoblade

**Editorial**: 访问步骤、练习流程、故障排查为本刊分析。

## 查重结论

现有 15 个 slug 均无重复；新 slug 唯一。

与既有页面边界：
- `beginner-guide`：核心 parry/posture 循环，不涉及 Raptor 或 Rematch
- `boss-guide`：Alpha 与 Boss Rush，不涉及 Rematch Mode
- `new-game-plus-guide`：通关后重玩与挑战跑，不涉及 10 月更新角色
- `weapons-guide`：Great Sword 与 build，不涉及角色选择

新文聚焦「如何进入 Raptor 模式 + Rematch Mode 怎么用」，与上述页面无主题自噬。

## 文章

- 正文字数（不含表格）：**1,379 词**
- 含表格总词数：1,529
- 事实处理：Raptor 的具体 moveset / 解锁条件 / 奖励未获官方说明，均标 `[Unconfirmed]`；未编造 Boss 名、数值或引语。

## 构建

```
pnpm install --prefer-offline  → OK (2.6s)
pnpm build                     → OK
/guides/raptor-and-rematch-mode-guide 已静态生成 (29/29 pages)
```

## 部署与线上验证

- 部署命令：`./deploy-wiki-site.sh dinobladewiki`
- 部署 URL：https://dinobladewiki.vercel.app/guides/raptor-and-rematch-mode-guide
- HTTP 状态：**200**
- 内容验证：页面含标题关键词 “How to Play as the Raptor & Use Rematch Mode in Dinoblade” 与正文 “Rematch Mode”
- Vercel 生产 alias：dinobladewiki.vercel.app（部署脚本返回 HTTP 200）
