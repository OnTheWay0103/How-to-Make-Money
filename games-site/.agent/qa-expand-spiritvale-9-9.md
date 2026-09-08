# QA 报告 — QA-EXPAND-SPIRITVALE-9/9

- 日期: 2026-09-09
- 模式: quick（1 篇新指南 + home-content 1 行）
- 审核员: QA 审核员（岗位卡 docs/agents/05 + Profile docs/agents/06）
- 范围: 本轮 spiritvalewiki 产出评审
- 变更文件:
  1. `content/guides/account-ban-appeal-guide.md`（新增，正文约 1,500 词）
  2. `content/home-content.md`（Quick Navigation +1 行）
- 结论: ✅ **PASS — 可部署**（已部署并 curl 验证，见 keyword-results/spiritvalewiki-expand-9-9.md）

## 检查项逐项结果

- a) **残留扫描**：✅ `grep -niE "witchspire|mistfallhunter|aincrad|themound|heymound|sephiria|grainrot|tearsofmetal|hugo|{{\<|yaml|frontmatter"` 新指南 = **0 命中**（无他站名/域名/Hugo shortcode/模板残留）。
- b) **编造检查（claims → source 表）**：
  | 正文断言 | 定级 | 来源 |
  |---|---|---|
  | 8/17 执法数字 3,821（宏/未授权）/1,106（RMT）/65（行为准则） | Official | 官方公告（经 MassivelyOP 8/17 报道），URL 在 Sources + 正文 |
  | 宏类为永久封禁的表述 | Official | MassivelyOP 对公告的表述 |
  | 7/21 首发周 2 万同接、Bot Hunter Program、bot 打金 | Official/Editorial | MassivelyOP 7/21，URL 在 Sources |
  | AH 5% 税 / 30 listing cap | Official | 站内 updates-patch-notes（9/6 校准，官方 8/4 公告） |
  | 封禁阶梯 7d/14d/永久、宏 1 周 | **[Unconfirmed]** | Steam 讨论单源玩家描述，正文已标 |
  | ROG Ally 掌机误封、亲友交易被当 RMT、孩子账号被当 bot | **[Unconfirmed]** | Steam 讨论/评测个案，正文已标（作者如实注明"single player's account"） |
  | 「Open a ticket...」申诉建议 | Community | Steam 讨论顶回复（可溯源引用，非虚构），正文标明"Writing here won't help you"来自讨论帖 |
  | ticket 自动关闭/响应慢/看不了回复 | **[Unconfirmed]** | Steam 评测/讨论，正文已标 |
  | 「~90% bot 消失」 | **[Unconfirmed]** | Steam 评测观察，正文已标（QA 修正后补标） |
  - 无凭空数字、无虚构玩家原话；被拒候选（0.31.0 deep guide、开放世界 PvP）理由在 expand 记录留痕。
- c) **内部一致性**：✅ 新指南内链 5 个（connection-server-guide / updates-patch-notes / trading-market-guide / faq-content / guild-guide）全部为真实存在的 guide slug → **0 BROKEN 内链**；无外站内链。frontmatter related[] 与正文 Related Guides 一致。frontmatter schema（title/description/category/version/updated/keywords/related/sources）与 spiritvale 既有约定（echoing-spire、updates-patch-notes 同款 tier/text sources）一致。
- d) **诚实标注**：✅ 11 处 `[Unconfirmed]`（英文标记）；Honesty note 置顶声明"数字官方可溯 / 阶梯与申诉流程社区口径不保证结果"；frontmatter sources 将官方公告定级为「经 MassivelyOP 报道」，未谎称直连 Discord。
- e) **词数区间**：✅ 正文约 1,500 词（管/管道符剥离口径），在 800–1,500 区间内（QA 计数含 markdown 符号时 1,539）。

## 部署验证（QA 侧）
- `./deploy-wiki-site.sh spiritvalewiki` → 部署后 curl 新 URL 200 + 正文标志词命中（详情见 expand 记录「部署验证」节；如遇脚本别名竞态以 vercel inspect + curl 复验为准）。

## 证据文件
- 采集与选题细节: keyword-results/spiritvalewiki-expand-9-9.md

## Coordinator 摘要
```
QA 结果: ✅ PASS — 产出 1 篇（account-ban-appeal-guide，约 1,500 词）并已部署。
0.31.0 触发复检: 未达标（无独立非官方来源；vgspoilers 止于 0.30.14、MassivelyOP 止于 8/17）→ 不写 Dark Fortress
深度指南（判定正确：官方内容已被 updates-patch-notes 收录，达标也不应重写）。
缺口选择: 站内 40 篇 grep ban/appeal/banned=0 命中 → 账号封禁/申诉是唯一通过「≥3 独立来源(Official+Editorial+
Community) + 具体 + 缺口 + 可溯源」的真缺口，结束 spiritvale 连续 5 SKIP。
合规要点: 全部社区口径（封禁阶梯/误封个案/ticket 体验）挂 [Unconfirmed]；执法数字以官方经 MassivelyOP 报道定级。
```
