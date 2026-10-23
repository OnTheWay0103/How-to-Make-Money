# lunariumwiki 扩充报告 — 2026-10-23

## 选题

**Slug**: `steam-achievements-guide`
**标题**: How to 100% Lunarium — All 35 Steam Achievements Guide
**选题路径**: ② system-inventory / 官方商店页功能清单 × 站内覆盖

Lunarium Steam 商店页明确列出 **Steam Achievements**，但站内 19 篇既有攻略没有成就页。社区来源确认游戏共有 **35 个成就**，最终成就为 **Stellar Lector**（集齐其余成就）。这是「官方明说有、站内整块没写」的典型空白。

## 来源（4 个独立来源，含 1 个官方 + 3 个社区）

**Official**
1. Lunarium Steam 商店页 — Steam Achievements / Steam Cloud / Embroidery / Cloaks / Skill Tree
   https://store.steampowered.com/app/2939790/Lunarium/

**Community**
2. GameCast.it，“Lunarium: tutti i 35 obiettivi Steam” — 35 个成就完整列表与公开描述（访问于 2026-10-23）
   https://www.gamecast.it/lunarium-obiettivi-steam-lista-completa/
3. Steam 社区成就进度页（app 2939790）— HP / Resonance / capes / Junonia / embroidery / souvenirs / skills 计数
   https://steamcommunity.com/id/rooke64/stats/2939790/achievements/
4. TrueSteamAchievements 评论线程 — 玩家报告的 “Secrets in the Well” 线索
   https://truesteamachievements.com/viewcomment.aspx?commentid=36422

**Editorial**: 100% 路线、区域清理顺序、Boss 练习建议为本刊分析。

## 查重结论

现有 19 个 slug 均无重复；新 slug 唯一。

与既有页面边界：
- `boss-guide`：Boss 打法，不按成就组织
- `exploration-guide`：区域与隐藏宝物，不涉及成就清单
- `equipment-guide`：cloaks / embroidery / 武器，不涉及成就
- `endings-guide`：两个结局，不涉及成就触发

新文以「35 个成就 + 100% 路线」为独立搜索意图，无自噬。

## 文章

- 正文字数（不含表格）：**1,496 词**
- 含表格总词数：1,924
- 事实处理：公开列表中有 6–7 个条目缺少完整描述（编译表疑似把 Home Sweet Home 与 Secrets in the Well 合并为一行），均标 `[Unconfirmed]`；未编造解锁条件。成就总数 35 来自社区列表，已注明来源。
- 附带确认：**Animus Bracelet** 成就说明为「Meet Lune and receive her bracelet」，为站内 skill-tree 页长期悬置的 “Animus” 搜索提供公开依据（该页未改动）。

## 构建

```
pnpm install --prefer-offline  → OK (2.3s)
pnpm build                     → OK
/guides/steam-achievements-guide 已静态生成 (33/33 pages)
```

## 部署与线上验证

- 部署命令：`./deploy-wiki-site.sh lunariumwiki`
- 部署 URL：https://lunariumwiki.vercel.app/guides/steam-achievements-guide
- HTTP 状态：**200**
- 内容验证：页面含标题 “How to 100% Lunarium — All 35 Steam Achievements Guide” 与正文 “Stellar Lector”
- Vercel 生产 alias：lunariumwiki.vercel.app（部署脚本返回 HTTP 200）
