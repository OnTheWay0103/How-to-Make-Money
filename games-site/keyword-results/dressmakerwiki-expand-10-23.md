# dressmakerwiki 扩充报告 — 2026-10-23

## 结论

- **状态**：DONE
- **新增 slug**：`dressmaker-order-fails-quality-requirements`
- **标题**：Why Your Dressmaker Order Fails — Quality, Stat Minimums and Mandatory Rules
- **正文词数**：1,463（不含表格；正文无表格）
- **独立来源**：4（官方 Steam 商店页 + 3 个社区/媒体来源）
- **Build**：PASS
- **部署**：PASS
- **线上验证**：HTTP 200，标题与关键词命中

## 选题依据

Dressmaker 已于 2026-09-21 发售；站内 12 篇攻略大多写于发售前（updated 2026-09-12），其中 `dressmaker-customer-requests-style-tags` 只讲「风格标签/事件/口味」的抽象方法，并明确写着没有官方 style vocabulary。发售后社区卡片数据库补上了真正的判定层：Quality 阈值、style 最低值与上限、强制配件数量、面料百分比、颜色规则、预算含义。

因此本题不是重复「怎么匹配风格」，而是回答发售后玩家最常问的具体问题：**裙子看起来对，为什么订单还是失败？** 这是「官方商店页系统清单（customers/tastes/quality）× 站内覆盖」找到的空白，也是独立搜索意图（order failed / quality 80 / mandatory accessories）。

### 来源

1. **Official — Steam 商店页（App 4019220）**
   - URL：https://store.steampowered.com/app/4019220/Dressmaker/
   - 访问日期：2026-10-23
   - 采用事实：顾客为重要事件和各自品味订制裙子；交付获得 reputation 与 coin；游戏支持 satisfy (or sabotage)。

2. **Community — Cozy Game Guides**
   - 标题：Dressmaker Commissions: All 77 Cards, Requirements & Checker
   - URL：https://cozygameguides.com/dressmaker/commissions/
   - 访问日期：2026-10-23
   - 采用事实：Quality 60-95；style 最低值与上限；强制配件数量；面料百分比与颜色规则；预算 200-5,000；游戏内 “Will my dress pass?” checker；Quality 来自 fit、grain、sewing，而不是昂贵面料。

3. **Community — VGTimes**
   - 标题：Все заказы в Dressmaker — требования, бюджеты и прохождение
   - URL：https://vgtimes.ru/guides/169769-vse-zakazy-v-dressmaker-trebovaniya-byudzhety-i-kak-vypolnit-kazhduyu-komissiyu.html
   - 日期：2026-10
   - 采用事实：78 个订单；17 个剧情订单 Quality 60-80、预算 200-1,500；具体订单的数值要求（如 Chilly Overtime、Flamboyant Funeral、Secret Art Critic）；「Lace Trim」类别只接受指定配件。

4. **Editorial — ixbt.games 评测**
   - 标题：Fashion Verdict on a Sewing Simulator: Dressmaker Review
   - URL：https://ixbt.games/en/reviews/2026/10/05/439975-modnyi-prigovor-sveinomu-simuliatoru-obzor-dressmaker.html
   - 日期：2026-10-05
   - 采用事实：10 位主要女性角色；订单约有 23 项指标；friendship 解锁版型；Quality 80 以上可作为礼物判定参考。

## 查重结论

现有 12 篇中无同名 slug / 标题，且主题分工明确：

- `dressmaker-customer-requests-style-tags`：发售前的「风格标签 + 事件 + 口味」读单方法；明确标注 style vocabulary 未公布。
- `dressmaker-sewing-guide-clean-seams`、`dressmaker-grain-direction-bias-cut`、`dressmaker-pattern-placement-cutting`：分别讲缝纫、纱向、排料，都是 Quality 的** construction 来源**，不涉及订单判定规则。
- `dressmaker-fabric-guide`：讲面料特性与 per-panel 选择，不涉及百分比/颜色强制规则。
- `dressmaker-decoration-placement-guide`：讲装饰摆放，不讲强制配件数量。
- `dressmaker-beginner-guide`：全流程概览，明确说数值未公布。

新页是「订单失败诊断」层，把上述页面串起来但不重复其内容；标题、slug、H1 唯一。与 `customer-requests` 的差异是：旧页回答「怎么读 brief」，新页回答「为什么已经像 brief 了还是 fail」。

## 内容与事实边界

- 正文结构：pass/fail 判定栈 → Quality 是做工不是成本 → style 最低值/上限 → 强制规则 → 预算是报酬不是花费上限 → 60 秒交件检查表 → 社区数值差异解释。
- 明确标注为 **[Unconfirmed]** 的内容：当前 build 的完整 style 指标 taxonomy（评测说约 23 项，社区数据库列出核心命名标签，二者不完全一致）；具体数值随 build/翻译变化。
- 对「77 张卡 vs 78 个订单」「Quality 60-95 vs 剧情 60-80」「预算 200-5,000 vs 剧情 200-1,500」的差异做了显式解释（全量卡 vs 剧情单、版本差异），没有把冲突数字写成同一口径。
- 未编造顾客名、订单名或数值；订单名与阈值均来自上述来源。
- 英文站内容无中文标记残留（CJK 字符检查为 0）。

## 构建

```text
pnpm install --prefer-offline  → OK
pnpm build                     → PASS
Next.js 16.3.4 (Turbopack)
✓ Compiled successfully
✓ Generating static pages (26/26)
Route: ● /guides/dressmaker-order-fails-quality-requirements
```

无 TypeScript 错误、无构建警告阻断。

## 部署

- 部署 URL：https://dressmakerwiki-ho5wdtxw3-zhaoq0103s-projects.vercel.app
- 生产 alias：https://dressmakerwiki.vercel.app
- 部署脚本：`./deploy-wiki-site.sh dressmakerwiki` → PASS

## 线上验证

```text
GET https://dressmakerwiki.vercel.app/guides/dressmaker-order-fails-quality-requirements
HTTP 200
size 61,170 bytes
title: Why Your Dressmaker Order Fails — Quality, Stat Minimums and Mandatory Rules · Dressmaker Wiki
```

页面文本命中：

- `Why Your Dressmaker Order Fails` → true
- `Quality 70 max` → true
- `mandatory accessory` → true
- `will my dress pass` → true

## 后续建议

- 发售后补丁若调整订单阈值，优先更新本篇的示例表与「社区数值差异」段。
- 可另开一篇「Dressmaker friendship/gift 系统」；本篇只把 Quality 80 作为礼物判定参考，不展开 friendship 等级，避免与后续页重叠。
