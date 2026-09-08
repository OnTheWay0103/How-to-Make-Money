# 单站 AdSense 复审申请清单 — themoundwiki

> 创建：2026-09-09 | 适用：`themoundwiki.vercel.app`（主攻站）
> 背景：2026-08-10 被拒，理由「低价值内容（Low Value Content）」
> 依据：`docs/AdSense合规分析与改进方案.md`、`docs/themoundwiki-去模板化改造方案.md`、生财有术圈内复盘（国器 / 丿晓风 / 袁锐钦 / 王马扎）

---

## 使用方式

**这不是一份"做完就提交"的清单，而是一份"没做完就绝对不要提交"的门禁。**

生财圈内复盘的关键教训：王马扎被拒后**无改动重复申请**最终通过了 —— 说明审核有随机性，但**随机性只对本身没有硬伤的站有利**。带着硬伤重复申请，只会消耗掉 Google 对你域名的信任额度，且**被拒记录会累积**。

**判定规则：阶段 0 有一项未勾选 → 停止，不要提交。**

---

## 阶段 0 — 阻断项（红线，缺一不可提交）

| # | 检查项 | 判定命令 / 证据 | 状态 |
|---|--------|----------------|:--:|
| 0.1 | 隐私页无「不实陈述」 | `grep -c 'We use Google AdSense' app/privacy/page.tsx` = 0 且 `grep -c 'intend to apply'` = 0 | ☐ |
| 0.2 | 隐私页保留 AdSense 必需的第三方 cookie + opt-out 披露 | `grep -c 'google.com/settings/ads'` ≥ 1 且 `grep -c 'aboutads.info'` ≥ 1 | ☐ |
| 0.3 | `og:image` 不再 404 | `ls public/icon.png` 存在；线上 `curl -sI {域名}/icon.png` 返回 200 | ☐ |
| 0.4 | 无「无据 verified / tested」类断言 | `grep -rn 'verified from the launch build\|I tested\|in my experience' app/ content/` = 0 | ☐ |
| 0.5 | 无过期时态文案 | `grep -rn 'It launches\|check official documentation at launch' app/` = 0 | ☐ |
| 0.6 | 无跨站污染 / 模板残留 | `grep -rn 'Witchspire\|Mistfall\|Aincrad' app/ lib/ content/` = 0 | ☐ |
| 0.7 | ads.txt 与实际情况一致 | `public/ads.txt` 内容为 `google.com, pub-7211682665758448, DIRECT, ...` | ☐ |
| 0.8 | 构建零错误 | `npm run build` 退出码 0，静态页数 = 50 | ☐ |
| 0.9 | 线上已部署本次全部改动 | `./deploy-wiki-site.sh themoundwiki` 后 alias 指向新部署 | ☐ |
| 0.10 | 未被同一账号的其他站牵连 | 确认申请使用**独立域名**，且该账号下无其他站同期被拒 | ☐ |

---

## 阶段 1 — 内容层（决定「低价值」判定的核心）

依据 `docs/themoundwiki-去模板化改造方案.md`。核心法则：

> **如果你能把一页的 intro 换到另一页上读起来同样通顺，这就是模板，不是写作。**

| # | 检查项 | 具体动作 | 状态 |
|---|--------|---------|:--:|
| 1.1 | T1 模板 intro 全部重写 | 5 篇：`beginner-loadouts` / `controls-settings-guide` / `daily-challenges` / `loadout-guide` / `perks-guide` —— 逐篇按方案 §5 重写 | ☐ |
| 1.2 | T2 半模板 intro 重写 | 22 篇（方案 §5 清单）；句模「This guide covers X, Y, Z」出现于 12 篇，必须逐篇强绑定主题 | ☐ |
| 1.3 | 合并近重复页 | 3 篇：`daily-challenges`→`contracts-guide`、`beginner-loadouts`→`loadout-guide`、`boss-weakness-drops-chart`→数据单源化 | ☐ |
| 1.4 | 站点级双写去重 | `/faq`（17 问硬编码）与 `/guides/faq-content`（15 问）**合一**；`/tier-list` 与 `weapons-guide` 的 Tier List **单源化** | ☐ |
| 1.5 | 内容自噬簇清理 | 方案 §4 列出的 C1–C10 共 10 簇，按「单源化 + 互相引用」处理 | ☐ |
| 1.6 | 矛盾裁决 | `/faq` 称角色「purely cosmetic」与 `characters-classes` 的 trait/属性/初始装备**直接矛盾** → 必须裁决统一 | ☐ |
| 1.7 | 高危数值核验或标注 | 方案 §6.1 列出的 10 组未验证数值（UTC 刷新表、噪音半径 ~200m、RTX 4080 Super 帧数、Sanity 阈值表、结局声望门槛等）→ **能核验的核验，核验不了的显式标注** | ☐ |
| 1.8 | 薄页处置 | 无独立搜索需求或纯罗列的页面 → 合并或下线（方案 §7） | ☐ |

---

## 阶段 2 — 证据层（E-E-A-T，当前最短板）

**现状：37 篇中 30 篇零来源零核验标记，全站 0 图片、0 作者字段。** 这是「低价值内容」最直接的成因。

| # | 检查项 | 具体动作 | 状态 |
|---|--------|---------|:--:|
| 2.1 | 每篇一个可核实的官方来源 | frontmatter 增 `sources:` 字段；正文标注来源类型（Official / Community / Editorial 三层） | ☐ |
| 2.2 | 不确定项显式化 | 核实不了的写 `[Unconfirmed]` 并说明「未能确认」，**MUST NOT 编造** | ☐ |
| 2.3 | 版本 / 日期字段 | 每篇标注 `game_version` + `verified_date`，可核实的才填 | ☐ |
| 2.4 | 真实截图采集 | 按方案 §6.5 清单由**真实玩家/站主**采集，采到才放，**禁止无图硬声称** | ☐ |
| 2.5 | 作者身份 | About 页从「a small team of passionate gamers」升级为可核验的运营者身份（**真实信息，不许编造**） | ☐ |
| 2.6 | 更新承诺兑现 | About 页若写 "Regular Updates"，则 `updated` 字段须在复审前 2 周内有过真实更新 | ☐ |

> ⚠️ **MUST NOT 伪造** "I tested this" / "in my experience" / 虚构实测数据。无一手证据时，**「明确说不知道」是唯一合法的差异化**。

---

## 阶段 3 — 站点层

| # | 检查项 | 具体动作 | 状态 |
|---|--------|---------|:--:|
| 3.1 | 独立域名 | 当前为 `themoundwiki.vercel.app` 免费子域 → **强烈建议买独立域名**（`.wiki`/`.com`）后再申请。免费子域 + 41 站同托管 = 可被轻易聚类为同一实体 | ☐ |
| 3.2 | 单一 AdSense 账号隔离 | 该账号下 41 站共用 `ca-pub-7211682665758448`；确认复审期间**其他站不提交申请**，避免连带 | ☐ |
| 3.3 | 广告位状态 | 当前 0 个广告单元，仅 loader 脚本 —— **保持现状直到通过**（先干净上线，通过后再开广告） | ☐ |
| 3.4 | 信任页齐全 | About / Contact / Privacy / Terms / FAQ 均存在且内容与事实一致 | ☐ |
| 3.5 | sitemap / robots | `app/sitemap.ts` + `app/robots.ts` 正常，线上可访问 | ☐ |
| 3.6 | GSC 收录正常 | 核心页已被 Google 收录（`site:themoundwiki.vercel.app` 抽样） | ☐ |

---

## 阶段 4 — 提交复审

| # | 步骤 | 说明 | 状态 |
|---|------|------|:--:|
| 4.1 | 全部改造完成后**等待 2–3 周** | 给 Google 重新抓取的时间；方案 §0 执行摘要明确要求 | ☐ |
| 4.2 | 在 GSC 请求重新抓取核心页 | 首页 + 改造过的核心攻略页 | ☐ |
| 4.3 | 提交 AdSense 复审 | 同一账号、同一域名 | ☐ |
| 4.4 | 记录提交日期 | 写入本文件底部「申请记录」 | ☐ |

---

## 阶段 5 — 提交后监控

| # | 检查项 | 说明 | 状态 |
|---|--------|------|:--:|
| 5.1 | 保持内容更新节奏 | 通过与否都持续更新，不要"提交完就冻结" | ☐ |
| 5.2 | 不重复提交 | 被拒后**至少等 2 周 + 有实质改动**再申请（王马扎案例的教训：无改动重复申请只是赌运气） | ☐ |
| 5.3 | 准备 Plan B | 同步接入门槛低的广告网络（Adsterra / Ezoic），不要把所有变现押在 AdSense | ☐ |

---

## 附 A：为什么不做「41 站一起申请」

1. **账号级连带**：41 站共用 `ca-pub-7211682665758448`，任一站被判 → 全账号受影响。
2. **规模化自证**：同模板复制 41 份 + 同托管子域 + 同 GSC 账号 → Google 可零成本聚类，这正是 2026 年 8 月 spam update 判定的 **scaled content abuse** 形态（国器案例：3 周 40→436 页，4 天掉 99% 流量）。
3. **本地文档已自认**：`docs/AdSense合规分析与改进方案.md` §八原文 —— 「34 站矩阵的规模化内容天然与『独特性』要求冲突」「AdSense 可能永远不给过」。

**结论：先用 1 个站（themoundwiki）单独跑通复审，拿到正反馈后再决定矩阵怎么处置。**

## 附 B：如果再次被拒

| 情形 | 处置 |
|------|------|
| 仍是「低价值内容」 | 说明阶段 1/2 未做透 —— 回查 T1/T2 intro 是否真的不可互换、每页是否有别处找不到的信息 |
| 理由变为「内容重复」 | 说明阶段 1.3–1.6 未清理干净 —— 重点查双 FAQ、双 Tier List、C1–C10 簇 |
| 理由变为「违反政策」 | 逐条比对 Google Web Search Spam Policies（门页 / 关键字堆砌 / 不实陈述 / 抄袭），逐项整改后再申请 |
| 无理由被拒 | 参照王马扎案例：等待 2 周、做实质改动后再试；**不要无改动重复提交** |

---

## 申请记录

| 日期 | 动作 | 结果 | 备注 |
|------|------|------|------|
| 2026-08-10 | 首次申请 | ❌ 被拒 | 低价值内容 |
| — | 复审 | — | 待阶段 0–3 全部勾选后提交 |
