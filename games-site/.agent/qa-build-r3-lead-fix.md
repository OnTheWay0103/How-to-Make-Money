# FIX-R3-LEAD — 首段压到 40–60 词（rekawiki / gonefishingwiki）

- 日期：2026-10-26
- 派发：主 Agent
- 执行：建站协调员（docs/agents/03 + 04，写作规格 docs/STRATEGY-内容生产.md 4.1）
- 范围：**只改每个 `content/guides/*.md` 首段一段**；不换选题、不加页、不改事实、不动 frontmatter、不动正文其余段落

## 规格

首段 MUST 40–60 词（按空格切分非空 token），且第一句 MUST 直接给答案。
本文件里的「词数」一律按空格 token 计，标点附着在词上不单独计。

---

## rekawiki（7 篇）

| # | 文件 | 改前 | 改后 | 是否改动 | 线上 |
|---|---|---|---|---|---|
| 1 | reka-beginner-guide.md | 54 | 54 | 否（已合规） | `/` + `/guides/reka-beginner-guide` 200 |
| 2 | reka-character-appearance.md | 63 | **58** | 是 | 200 |
| 3 | reka-cooking-recipes.md | 61 | **59** | 是 | 200 |
| 4 | reka-cottage-moving.md | 63 | **59** | 是 | 200 |
| 5 | reka-faq.md | 56 | 56 | 否（已合规） | 200 |
| 6 | reka-how-to-get-flour.md | 58 | 58 | 否（已合规） | 200 |
| 7 | reka-leshy-trial.md | 60 | 60 | 否（已合规，恰在上限） | 200 |

改动要点（事实零丢失，信息顺序不变）：

- character-appearance：两句并一句，「large mirror 是最后一次免费更改」与「magic mirror 取回后用 build menu 放置」全部保留；`There is no appearance option in a settings menu` → `Settings has no appearance option`（同义，省 2 词）。
- cooking-recipes：`put exactly three ingredients into the oven` → `three ingredients into the oven`（省 2 词，语义等价）；oven 位于小屋中央、恢复起始房屋后解锁、两套独立配方表、售价——全部保留。
- cottage-moving：`two different things that players often merge into one` → `two things players often merge into one`；`one-way trip by design` → `one-way by design`（省 3 词）；walk / recall 两套系统、非免费传送网、限于当前地图——全部保留。

## gonefishingwiki（7 篇）

| # | 文件 | 改前 | 改后 | 线上 |
|---|---|---|---|---|
| 1 | gone-fishing-beginner-guide.md | 68 | **59** | 200 |
| 2 | gone-fishing-best-perks.md | 73 | **59** | 200 |
| 3 | gone-fishing-co-op-guide.md | 73 | **59** | 200 |
| 4 | gone-fishing-enemies-guide.md | 82 | **58** | 200 |
| 5 | gone-fishing-lake-entity-boss.md | 68 | **54** | 200 |
| 6 | gone-fishing-legendary-fish.md | 69 | **55** | 200 |
| 7 | gone-fishing-sacrifice-quota.md | 70 | **56** | 200 |

改动要点（全部保留游戏事实，只压缩本页的「导览承诺句」）：

- beginner-guide：1–8 人、生存恐怖、白天钓鱼/夜里不被吃、交祭坛喂湖中实体、漏配额反被吃——全保留；压缩的只是「本页覆盖第一周：每天做什么、什么顺序、哪些习惯毁局」的重复表述。
- best-perks：9 个 perk、可带 2 个、连续存活 7 天解锁、每名玩家开跑前选至多 2 个——全保留；`does not explain most of them` → `explains almost none of them`（同义）。
- co-op-guide：1–8 人线上合作、游戏不分配角色、全员钓鱼会在黄昏死人、因为没人做饭/侦察/点蓝火、四个岗位、首个团夜不团灭——全保留。
- enemies-guide：白天威胁是时间与距离、夜里是听得见看得见你的生物、其中一种杀不死、商店页三类（territorial beasts / stalking nightmares / ambushing predators）+ Lake Entity 可战斗的终局威胁——全保留。
- lake-entity-boss：最终 boss 非支线、随 1.0 上线、正是湖中实体一路威胁的那场、通关解锁 MOBY rod 与 Jeremy Wade 难度——全保留。
- legendary-fish：传说是诱饵系统存在的理由、100+ 可钓鱼种、少数靠分数门槛而非地点、Nessie / 商店写作 Lochness——全保留。
- sacrifice-quota：献祭配额是当日胜利条件、每天早晨要一定量鱼、送祭坛丢进去、火焰转蓝即满足可安全睡、先入夜则被猎——全保留。

「导览承诺句」（如 `how to tell them apart, and the rules that keep a group alive`、`what the 1.0 hotfixes changed`）属本页目录性表述，不是游戏事实，压缩时删去；未新增任何断言，原有 `[Unconfirmed]` 标记一处未动。
唯一例外：`gone-fishing-beginner-guide.md` 内 **Why Cooking Is Not Optional** 一节为主 Agent 上一轮改动，本次**未触碰**，线上复核该节标题与正文仍在（`Why Cooking` 命中 2 次，`treat the direction as certain` 命中 2 次）。

## 门禁结果

| 项 | rekawiki | gonefishingwiki |
|---|---|---|
| `node scripts/lint-guides.mjs` | 全部通过，0 ERROR / 0 WARN | 0 ERROR / 1 WARN |
| `pnpm install && pnpm build` | 通过，19/19 静态页 | 通过，20/20 静态页 |
| node_modules / .next 清理 | 已删 | 已删 |

gonefishingwiki 的 1 个 WARN 是**存量**（`gone-fishing-beginner-guide.md` 正文总词数 1649 → 1640，仍略超 800–1600 建议区间），本次修首段前即存在，与 40–60 词规格无关，不判 FAIL。

## 部署与线上复验

- `./deploy-wiki-site.sh rekawiki` → 生产 alias 200
- `./deploy-wiki-site.sh gonefishingwiki` → 生产 alias 200
- 两台依次执行，未并发
- 取 IP：`dig @1.1.1.1 +short <host> A` → rekawiki `64.29.17.131`，gonefishingwiki `216.198.79.67`
- 验证方式：`curl --resolve <host>:443:<IP> https://<host><path>`

线上 200 率：**16/16（100%）** — 两站首页 2/2 + 全部攻略页 14/14。

内容级抽检（新首段关键词命中 / 旧首段关键词命中，期望 新≥1、旧=0）：

| 页面 | 新 | 旧 |
|---|---|---|
| reka-character-appearance | 2 | 0 |
| reka-cooking-recipes | 2 | 0 |
| reka-cottage-moving | 2 | 0 |
| gone-fishing-beginner-guide | 2 | 0 |
| gone-fishing-best-perks | 2 | 0 |
| gone-fishing-co-op-guide | 2 | 0 |
| gone-fishing-enemies-guide | 2 | 0 |
| gone-fishing-lake-entity-boss | 6 | 0 |
| gone-fishing-legendary-fish | 2 | 0 |
| gone-fishing-sacrifice-quota | 2 | 0 |

（命中 2 次 = 可见 HTML 正文 + RSC payload 各一次；命中 6 次 = 该短语在正文表格里也有出现。）
注：`deploy-wiki-site.sh` 输出 `alias → 未知`，是 Profile 记载的 `vercel inspect` 管道竞态已知现象，按规则改用**内容级验证**判定，判为成功。

## 结论

- 两站 14 篇首段全部落在 40–60 词区间（改动 10 篇，另 4 篇本已合规）。
- **无超过 60 词的例外**，未触发停止条件。
- 事实零丢失，frontmatter 零改动，正文其余段落零改动（`git diff --numstat` 每篇均为 1 行 +/1 行 -；beginner-guide 的额外 3 行改动来自主 Agent 上一轮 Why Cooking 修改）。
