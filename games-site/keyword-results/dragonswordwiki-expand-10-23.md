# dragonswordwiki 扩充报告 — 2026-10-23

## 选题

**Slug**: `save-file-corrupted-fix`
**标题**: How to Fix the DragonSword: Awakening "Save File Corrupted" Error (1.1.0)
**选题路径**: ① complaint-driven（1.1.0 更新后玩家存档无法加载）+ 官方 known-issue 公告

2026-10-15 的 **1.1.0** 更新后，部分 Steam/PC 玩家启动游戏时看到「存档文件已损坏，正在加载备份文件」。官方于 **2026-10-20** 发布临时解决方案。站内 22 篇既有攻略没有任何存档/故障排查页，属明确空白。

## 来源（5 个独立来源，含 2 个官方）

**Official**
1. 官方 Known Issue 公告（存档损坏/加载备份）— 2026-10-20
   https://news.17173.com/content/10202026/225043099.shtml
   官方临时方案：Steam 离线 + 关闭云同步 → Properties → Installed Files → Browse → `DS\Saved\savegames\[9-digit folder]` → ZIP 备份 → 删除所有 `.bak` → 启动 → 正常退出 → 恢复在线/云同步
2. Steam 公告 Version 1.1.0 / 1.1.1 hotfix — 2026-10-15
   https://store.steampowered.com/news/app/4570720
   （Ryza、暴击公式重做、Hell 难度、Training Ground、1.1.1 修复）

**Community**
3. PlayGround.ru — 2026-10-15
   https://www.playground.ru/dragonsword_awakening/news/obnovlenie_1_1_0_dlya_dragonsword_awakening_dobavilo_geroinyu_rajzu_trenirovochnuyu_ploschadku_i_volnu_nerfov-1881958
4. Game*Spark — 2026-10-15
   http://www.gamespark.jp/article/2026/10/15/173650.html
5. 17173 已知问题页（同上，官方公告转载，作为中文原文核对）

**Editorial**: 备份顺序、恢复优先级、预防建议为本刊分析。

## 查重结论

现有 22 个 slug 均无重复；新 slug 唯一。

与既有页面边界：
- `faq`：平台/联机/价格问答，不含存档故障
- `beginner-guide`：上手与战斗，不含 1.1.0 技术问题
- `leveling-guide`：Mercenary Ranks，不含存档路径
- `equipment-guide`：装备与 Karma gear，不含故障排查

新文聚焦「报错含义 + 官方修复步骤 + 备份恢复」，与既有页面无重叠。

## 文章

- 正文字数（不含表格）：**1,411 词**
- 含表格总词数：1,411（全文无表格）
- 事实处理：官方未公布根因与永久修复时间，文中明确写「未公布」；未编造文件路径以外的数值或步骤。步骤逐条对应官方公告顺序。

## 构建

```
pnpm install --prefer-offline  → OK (2.4s)
pnpm build                     → OK
/guides/save-file-corrupted-fix 已静态生成 (36/36 pages)
```

## 部署与线上验证

- 部署命令：`./deploy-wiki-site.sh dragonswordwiki`
- 部署 URL：https://dragonswordwiki.vercel.app/guides/save-file-corrupted-fix
- HTTP 状态：**200**
- 内容验证：页面含标题 “How to Fix the DragonSword: Awakening "Save File Corrupted" Error (1.1.0)” 与正文 “Save File Corrupted”
- Vercel 生产 alias：dragonswordwiki.vercel.app（部署脚本返回 HTTP 200）
