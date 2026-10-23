# mystraliawiki 扩充报告 — 2026-10-23

## 选题

**Slug**: `basement-dojo-vault-of-memories-guide`
**标题**: How to Use the Basement Dojo & Vault of Memories in Echoes of Mystralia
**选题路径**: ② system-inventory / 官方更新清单 × 站内覆盖

2026-10-08 上线 **All You Can Cast** 更新，新增 Azimuth 地下 **Basement Dojo**、可搜索的 **Vault of Memories**、7 个新 Memory 与 Watcher's Duties 新层级。站内 29 篇既有攻略覆盖 Memories、Spell Crafting、Relics、Lotus、Endgame，但没有一篇讲练习场或 Vault，属整块空白。

## 来源（5 个独立来源，含 2 个官方）

**Official**
1. Steam Devlog #3 “All You Can Cast Update” — 2026-09-30 发布，2026-10-08 上线
   https://store.steampowered.com/news/app/974480/view/693147294304832118
   - Basement Dojo：在 Altar 解锁地下室门；投入 Echo Fragments 与 Ancient Lessons 解锁配置与 dummy 类型
   - Vault of Memories：可搜索、可放置到 spell canvas、显示未发现数量
   - 7 个新 Memory：Alliance of Forces / Full Circle / Walled City / Fully Focused / Way Back / Aim High / Easy Prey
2. Steam 商店页（7 elements / 16 starting spells / 100+ Memories / 40+ Relics / 50+ Altar upgrades）
   https://store.steampowered.com/app/974480/Echoes_of_Mystralia/

**Community**
3. GAMERamble — 2026-10-08
   https://gameramble.com/echoes-of-mystralia-all-you-can-cast-update/
4. Rogueliker — 2026-10-08
   https://rogueliker.com/echoes-of-mystralia-all-you-can-cast/
5. Steam 商店页玩家评价/公告页（更新存在性交叉核对）

**Editorial**: 测试方法、Echo Fragment 花费顺序、build 验证流程为本刊分析。

## 查重结论

现有 29 个 slug 均无重复；新 slug 唯一。

与既有页面边界：
- `memories-guide`：Memory 经济与采集，不涉及 Vault 或 Dojo
- `spell-crafting-guide`：canvas、元素、起始法术，不涉及练习场
- `best-spell-builds`：build 方向，不涉及测试方法
- `endgame-guide`：三区域后的内容，不涉及 Watcher's Duties 新层级细节

新文聚焦「地下室怎么解锁 + Dojo/Vault 怎么用于验证 build」，无自噬。

## 文章

- 正文字数（不含表格）：**1,388 词**
- 含表格总词数：1,559
- 事实处理：Echo Fragment / Ancient Lesson 的具体价格、Ancient Lesson 掉落、7 个新 Memory 的数值效果均未公开，标 `[Unconfirmed]`；未编造数值或引语。

## 构建

```
pnpm install --prefer-offline  → OK (2.6s)
pnpm build                     → OK
/guides/basement-dojo-vault-of-memories-guide 已静态生成 (43/43 pages)
```

注：该站原有 frontmatter 使用 inline 数组，但站内自研 parser 只识别多行数组。为保证 `related` 真正渲染，本篇的 keywords/related 改为多行 YAML 数组；字段与语义不变。

## 部署与线上验证

- 部署命令：`./deploy-wiki-site.sh mystraliawiki`
- 部署 URL：https://mystraliawiki.vercel.app/guides/basement-dojo-vault-of-memories-guide
- HTTP 状态：**200**
- 内容验证：页面含标题 “How to Use the Basement Dojo & Vault of Memories in Echoes of Mystralia” 与正文 “Vault of Memories”
- Vercel 生产 alias：mystraliawiki.vercel.app（部署脚本返回 HTTP 200）
