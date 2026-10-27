# 外链建设 P0 — 实测报告（2026-10-27）

> 对应 `docs/STRATEGY-外链建设.md` 第五节的 P0：**建台账 + 5 个 A/B 档站各 3 条手工提交**，
> 验证「提交 → 实测 rel → 30 天存活」这条链路。
>
> **结论先说：P0 的「准备 + 实测」这半做完了，「提交」这半没做成，被两件事挡住（见第三节）。
> 目前台账是 0 条 —— 不是漏做，是确实一条也发不出去。**

---

## 一、5 个起跑站（选定依据）

按 `node scripts/expansion-targets.mjs --json` 的 `eligible[]`（PV30 > 1000 且非 `不再维护`）
取 4 站，再补 PV 最高的第 5 站凑够样本：

| 站 | 30 天 PV | 分级 | 攻略数 | 首批目标页 |
|---|---:|---|---:|---|
| nivalisnightswiki | 2,417 | 加码 | 20 | `/guides/beginner-guide`（380 PV） |
| sephiriawiki | 1,208 | 加码 | 44 | `/guides/builds-guide`（192 PV） |
| waterparksimulatorwiki | 1,168 | 加码 | 19 | `/guides/hidden-content-easter-eggs-guide`（285 PV） |
| shiftatmidnightwiki | 1,103 | 加码 | 33 | `/guides/story-walkthrough`（461 PV） |
| moonlightpeakswiki | 777 | A | 17 | `/guides/money-guide`（283 PV） |

数据源：`dashboard /api/traffic`（GA4，30 天窗口），取数时间 2026-10-27。
> 顺带发现一个数据问题（不影响本节结论）：The Mound Wiki 与 SpiritVale Wiki 的
> top 页 PV 完全相同（155 / 133 / 83），疑似看板两站映射到同一 property，待查。

选站理由：这 5 站都有**明确高流量的单页**（380–461 PV），外链该指向那个页而不是首页 ——
首页排名已经在了，链接的边际价值在还没排上去的内页。

## 二、平台实测（这台机器 + 这个网络，2026-10-27 当天）

用 `curl` 逐个探活（`dig @1.1.1.1` 取 IP 后直连；带浏览器 UA 再试一次）。
**这一列比方法本身更重要：我们的执行环境决定了哪些来源根本用不了。**

| 平台 | 类型 | 可达性 | 需要账号 | 判定 |
|---|---|---|---|---|
| velog.io | 开发者博客（A 类） | ✅ 200 | 是（GitHub / Kakao 登录） | 可用，卡在账号 |
| gamejolt.com | 游戏社区（B 类） | ✅ 200 | 是 | 可用，卡在账号 |
| dev.to | 开发者博客（A 类） | ✅ 200 | 是（GitHub 登录 + API key） | 可用，卡在账号 |
| indiedb.com | 游戏数据库（A 类） | ⚠️ 403（Cloudflare 拦 curl） | 是 | 浏览器可打开，脚本进不去 |
| gamedev.net | 开发者论坛（A 类） | ⚠️ 403（同上） | 是 | 同上 |
| telegra.ph | 笔记平台（A 类） | ❌ TCP 不通（`31.13.96.193` 为投毒 IP，DoH 也取不到真 IP） | 否 | 网络不可达 |
| rentry.co | 笔记平台（A 类） | ❌ TCP 不通 | 否 | 网络不可达 |
| itch.io | 游戏社区（B 类） | ❌ TCP 不通 | 是 | 网络不可达 |
| quora.com | 问答（B 类） | ❌ TCP 不通 | 是 | 网络不可达 |
| medium.com | 博客（C 类） | ❌ TCP 不通 | 是 | 网络不可达 |
| gamefaqs.gamespot.com | 游戏攻略社区（B 类） | ❌ TCP 不通 | 是 | 网络不可达 |
| steamcommunity.com | 社区（B 类） | ❌ TCP 不通（此前已记录） | 是 | 网络不可达 |

补充：`https://1.1.1.1/dns-query` 本身也不可达，说明本机是 **UDP 53 被投毒 + 境外站点 TCP 被阻断**，
`--doh-url` 也救不回来。能用 `dig + --resolve` 绕过的只有被投毒但 TCP 未被阻断的域名（如 `*.vercel.app`）。

## 三、两个硬阻塞（这是 P0 的真实产出）

1. **所有能发外链的平台都要账号。** 免登录的（telegra.ph / rentry.co）恰好全被网络挡住；
   能连上的（dev.to / velog / gamejolt / IndieDB）都要 GitHub/Kakao 登录，
   dev.to 还要去设置页取 API key。**注册需要邮箱验证 + 验证码，我不能替你注册账号。**
2. **一半候选平台本机根本连不上。** 不是方法问题，是网络问题；按 `docs/STRATEGY-外链建设.md`
   第七节，这条要么走代理，要么改人工在浏览器里做。

所以我停了 —— 不是停下来问要不要继续，是再往下走就必须动用你的账号和你的网络选择。

## 四、开工需要你给的两样东西

| 需要 | 用途 | 最小量 |
|---|---|---|
| **一个可用出口**（代理，或你在浏览器里操作、我只出内容） | 让 dev.to / velog / IndieDB 这类能连上 | 一个能开 dev.to 即可 |
| **一个或几个平台账号**（dev.to 优先，GitHub 登录后给我 API key） | 真正把链接发出去 | 1 个够跑 P0 的 15 条 |

拿到之后，P0 的执行顺序（每条 ≤5 分钟）：

1. dev.to 发一篇「我怎么用脚本维护 48 个游戏攻略站」的实操文，正文 2–3 条链到不同站（**不给同一站堆链**）；
2. velog.io 同题材换写法再发一篇；
3. IndieDB / GameJolt 建 game 条目，profile 里的 website 填目标站；
4. 每发一条，立刻 `node scripts/link-check.mjs --write` 实测 rel 并写台账；
5. 30 天后 `node scripts/link-check.mjs --due` 复查存活率。

## 五、锚文本与目标页（已排好，可直接用）

按 `docs/STRATEGY-外链建设.md` 的分布：品牌 ≥60%、长尾 30%、精确 ≤10%。

| 站 | 品牌锚（默认） | 长尾锚 | 精确锚（少用） | 指向页 |
|---|---|---|---|---|
| nivalisnightswiki | Nivalis Nights Wiki | a beginner's guide to Nivalis Nights | Nivalis Nights beginner guide | `/guides/beginner-guide` |
| sephiriawiki | Sephiria Wiki | Sephiria build and artifact notes | Sephiria builds | `/guides/builds-guide` |
| waterparksimulatorwiki | Waterpark Simulator Wiki | where the hidden content in Waterpark Simulator is | Waterpark Simulator easter eggs | `/guides/hidden-content-easter-eggs-guide` |
| shiftatmidnightwiki | Shift At Midnight Wiki | a full Shift At Midnight walkthrough | Shift At Midnight story walkthrough | `/guides/story-walkthrough` |
| moonlightpeakswiki | Moonlight Peaks Wiki | how to make money early in Moonlight Peaks | Moonlight Peaks money guide | `/guides/money-guide` |

## 六、已就位的工具

- **`scripts/link-check.mjs`** — 台账复查器：逐条取 `sourceUrl` → 判断 404/410（dead）、
  页面在但链接没了（missing）、找到则解析 `<a rel>` 实测 dofollow/nofollow/ugc/sponsored，
  结果写回 `.agent/link-building-log.jsonl`。
  ```bash
  node scripts/link-check.mjs --due --write    # 只复查到期的，写回台账
  ```
  台账每行一条：
  ```json
  {"date":"2026-10-27","site":"nivalisnightswiki","targetUrl":"https://nivalisnightswiki.vercel.app/guides/beginner-guide","sourceUrl":"https://dev.to/xxx","sourceType":"A/dev.to","rel":"dofollow","anchor":"Nivalis Nights Wiki","status":"live","recheckAt":"2026-11-26","lastSeenOk":"2026-10-27"}
  ```
  台账现在**还不存在** —— 按设计，它是第一条链接落地的同时建立的，不预先建空文件冒充「已开工」。

## 七、本次没有做的事（明确下来，避免以后误以为做过）

- ❌ 没有注册任何平台账号；
- ❌ 没有发出任何一条外链（0 条）；
- ❌ 没有买任何目录/客座文章；
- ✅ 做了：选站、排锚文本、13 个平台的真实可达性实测、rel 复查脚本。
