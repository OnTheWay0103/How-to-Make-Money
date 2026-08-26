# QA Report — 2026-08-27 EXPAND-006 quick QA

## 执行摘要

- **模式**: quick（仅审查本轮变更）
- **目标站点**: `themoundwiki`
- **审查范围**: 2 个文件
  1. `content/guides/weapon-durability-repair-guide.md`（新增，武器耐久/修理攻略）
  2. `content/home-content.md`（Quick Navigation 新增 1 行）
- **结果**: ✅ **PASS**（0 🔴 阻断 / 2 🟡 警告 / 3 🟢 建议）

**一句话结论**: 新攻略的每个游戏特有名词（武器名、Aged/Decayed 等级、Galleon Anvil 修理流程、cart 检测限制、Token 价格、Matchlock→Flintlock 转换）均在 NoobFeed / GameWatcher / vgtimes / Steam 社区等独立来源中核实通过，无虚构；残留扫描干净，`[Unconfirmed]` 使用恰当，related slug 全部真实存在。仅 2 个非阻断警告（1 个来源精确性、1 个跨指南措辞歧义）。

---

## 虚构检测表（每个游戏特有名词独立核验）

| # | 名词 | 核实结果 | 依据来源 | 判定 |
|---|------|---------|---------|:--:|
| 1 | Weapon Upgrade Anvil（Galleon 修理台） | 存在，位于 Galleon 的备战站 | [NoobFeed — How Weapon Upgrades Work with the Anvil](https://noobfeed.com/articles/the-mound-omen-of-cthulhu-weapon-upgrades-with-anvil) | ✅ |
| 2 | cart 检测限制（Anvil 无法检测 cart 中的武器） | 原文逐条一致：需先取出放入角色背包 | 同上 NoobFeed | ✅ |
| 3 | 升级仅当次探险生效（临时，需每契约重刷） | 原文一致："apply only to the current expedition" | 同上 NoobFeed | ✅ |
| 4 | Token 作为修理/升级货币 | 一致（spend Tokens） | NoobFeed + [vgtimes 新手指南](https://vgtimes.com/guides/161784-the-mound-omen-of-cthulhu-beginner-guide-and-tips.html) | ✅ |
| 5 | Matchlock → Flintlock 转换（防潮湿哑火） | 一致（damp weather 更可靠） | NoobFeed | ✅ |
| 6 | 近战耐久升级优先级（"helps the weapon survive an entire expedition"） | 逐字对应 | NoobFeed | ✅ |
| 7 | Crossbow 可升级更快装填 | 一致 | NoobFeed | ✅ |
| 8 | Aged 等级（近战+枪，减伤，枪减射程） | 一致 | [GameWatcher — Weapons List](https://www.gamewatcher.com/the-mound-omen-of-cthulhu-weapons-list) | ✅ |
| 9 | Decayed 等级（仅枪，锈蚀易哑火） | 一致（"rusted and prone to misfires"） | GameWatcher | ✅ |
| 10 | Francesca Axe（投掷回收斧） | 武器列表含 Francesca Axe | GameWatcher | ✅ |
| 11 | Crossbow（弓，可回收箭矢、防雨） | 武器列表 + 本站 weapons-guide 一致 | GameWatcher + 站内 | ✅ |
| 12 | Flintlock Pistol / Matchlock Arquebus | 武器列表均有 | GameWatcher | ✅ |
| 13 | Machete | 武器列表有（Swords 类） | GameWatcher | ✅ |
| 14 | Sword / Spear（攻略提及的近战武器） | 武器列表有 Conquistador Side Sword / Spear（Pole Weapons）；Steam 讨论确认 spear 为强近战 | [GameWatcher](https://www.gamewatcher.com/the-mound-omen-of-cthulhu-weapons-list) + [Steam 讨论](https://steamcommunity.com/app/2569760/discussions/0/569289747256816128/) | ✅ |
| 15 | "武器两三次攻击即碎"（melee breaks after two or three uses） | 社区复现；与 Nyarlathotep 评测及[VaporLens 数据](https://vaporlens.app/app/2569760/the_mound_omen_of_cthulhu)（55% 好评，耐久为主要抱怨）一致 | Steam 评测 + VaporLens | ✅ |
| 16 | "durability is poorly explained / break after a few hits" 为 Steam 高频差评 | 一致，耐久/修理为 top 请求项 | VaporLens + [GamesCreed Review](https://www.gamescreed.com/reviews/the-mound-omen-of-cthulhu-review) | ✅ |
| 17 | Y'm-bhi（敌方种族名） | 本站既有 canon（weapons-guide/enemy-bestiary），站内一致 | 站内 | ✅ |
| 18 | Galleon（漂浮基地） | 与 Steam 商店页/home-content 描述一致 | 站内 + 商店页 | ✅ |
| 19 | Steam 评测 URL 76561199411932619（Nyarlathotep） | 链接真实存在，搜索命中该评测页 | [Steam 评测](https://steamcommunity.com/profiles/76561199411932619/recommended/2569760/) | ✅ |
| 20 | Steam 评测 URL 76561198008302916（ChubbiChibbai） | 评测页真实存在（正面评测） | [Steam 评测](https://steamcommunity.com/profiles/76561198008302916/recommended/2569760/) | ⚠️ 部分 |
| 21 | Steam 讨论 569289747256816128 "Tips for people just starting?" | 帖子真实存在；确认 "The axe is the best weapon in the game. Just throw and retrieve." | [Steam 讨论](https://steamcommunity.com/app/2569760/discussions/0/569289747256816128/) | ✅ |
| 22 | vgtimes 新手指南（"sword/spear 在最坏时刻碎裂毁掉整局"） | 搜索命中 vgtimes 指南，与描述一致 | [vgtimes](https://vgtimes.com/guides/161784-the-mound-omen-of-cthulhu-beginner-guide-and-tips.html) | ✅ |
| 23 | GamePlay.tips / GamesCreed 来源 | 链接存在 | [GamePlay.tips](https://gameplay.tips/guides/the-mound-omen-of-cthulhu-essential-survival-tips.html) / [GamesCreed](https://www.gamescreed.com/reviews/the-mound-omen-of-cthulhu-review) | ✅ |

**结论**: 22/23 项明确核实通过；1 项部分确认（见警告 W1）。**无 🔴 明确虚构。**

---

## 残留扫描

| 检查项 | 结果 | 说明 |
|--------|:--:|------|
| 他站游戏名（witchspire/mistfall/aincrad/SpiritVale/Skills & Raids 等 30+ 项） | ✅ Clean | 两个变更文件 grep 均无命中 |
| 描述模板残留（"cooperative PvE extraction horror" 等） | ✅ Clean | 新 guide 无命中；home-content.md 第 63 行的 "cooperative PvE extraction horror" 为 themoundwiki 自身合法描述（例外站），且为既有内容非本轮新增 |
| `[Unconfirmed]` / `[待确认]` 使用 | ✅ 恰当 | 2 处（L44 精确耐久数值、L65 Token 价格 + 野外铁砧机制），均为无公开来源的数值/未证实机制，符合「仅用于无公开来源数值」规则 |
| frontmatter 格式 | ✅ 一致 | title/description/category("Guides")/version("1.0")/updated(2026-08-27)/keywords/related，与 beginner-guide、crafting-recipes 格式一致 |
| related slug 真实性 | ✅ 全部存在 | weapons-guide、loadout-guide、crafting-recipes、beginner-guide 均存在于 `content/guides/` |

---

## 一致性检查

| # | 检查项 | 结果 | 说明 |
|---|--------|:--:|------|
| 1 | 新攻略 vs NoobFeed（Anvil 全流程） | ✅ | cart 限制、临时升级、Token、Matchlock→Flintlock、近战耐久优先 全部逐条一致 |
| 2 | 新攻略 vs GameWatcher（Aged/Decayed、武器清单） | ✅ | 等级定义、武器名（含 sword/spear）一致 |
| 3 | 新攻略 vs loadout-guide（耐久=武器不中断） | ✅ | L30 引用与 loadout-guide L45 "Durability \| Weapon not breaking mid-fight" 完全对应 |
| 4 | 新攻略 vs weapons-guide（升级永久性措辞） | 🟡 W2 | 见警告 W2 |
| 5 | 新攻略 vs weapons-guide（武器评级框架） | 🟢 S3 | 见建议 S3 |
| 6 | home-content.md 新增行 slug | ✅ | `/guides/weapon-durability-repair-guide` 与文件真实路径一致，位置合理（Weapons Guide 行之后） |

---

## 警告 / 阻断 / 建议

### 🟡 警告（非阻断，记录，下次 deep 复查）

- **W1 — 来源精确性**（`weapon-durability-repair-guide.md` L112）：ChubbiChibbai 评测页真实存在（已核实），但该评测的主旨是 co-op 氛围/噪音机制/Vermintide 对比，未能独立确认其明确主张 "melee breaks; axe + crossbow most reliable"。攻略把该主张精确挂名到 ChubbiChibbai 有过度归因风险。建议：改为「Steam 玩家评测（如 ChubbiChibbai）」或移除该精确挂名，保留已验证的讨论帖/其他来源。不影响游戏事实真实性。
- **W2 — 跨指南升级永久性措辞歧义**（`weapon-durability-repair-guide.md` L57 vs `weapons-guide.md` L206-214）：新攻略称「Anvil 升级仅当次探险生效」（NoobFeed 证实正确）；weapons-guide 称「Token 购买的升级永久保留」。两者可解释为不同系统（Galleon vendor 永久收藏升级 vs Weapon Upgrade Anvil 临时强化），但措辞并排易误导读者。本轮不改（weapons-guide 不在本轮范围），记录供 deep 复查统一措辞。

### 🟢 建议（不阻塞）

- **S3 — 评级框架差异**：weapons-guide 总评将 Francesca Axe 列 C 档、Machete 列 S 档；新攻略「耐久向」将 Axe 列 Excellent、Machete 列 Weak。因衡量维度不同（总战力 vs 耐久寿命）不构成矛盾，但读者跨读时可能困惑。建议未来在两篇 guide 内加一句「评级维度」说明。
- **S4 — home-content.md frontmatter `updated` 仍为 2026-08-04**（本轮新增了 2026-08-27 行未同步）。建议顺手 bump。
- **S5 — home-content.md 存在重复「Weapons Guide」行**（L24 与 L31，既有问题非本轮引入）。建议 deep 复查时去重。

---

## 基建检查（轻量）

- Build：Builder 已报告 `npm run build` exit 0；本轮仅新增 content markdown + 1 行表格，无代码变更，build 风险极低。QA 按任务说明未重跑。
- Deploy / GA4 / GSC：不在 quick 模式范围。

---

## QA 结果（供主 Agent 决策）

```
QA 结果: ✅ PASS (0 🔴 阻断 / 2 🟡 警告 / 3 🟢 建议)
如有问题: [themoundwiki] [weapon-durability-repair-guide.md L112] 来源精确性（ChubbiChibbai 挂名过度归因，非虚构）→ 可后续软化为通用表述
```

**决策建议**: ✅ **可部署**。W1/W2 均为非阻断记录项，不影响本轮上线；如需稳妥，可在部署前将 L112 的 ChubbiChibbai 精确挂名改为通用「Steam 玩家评测」。
