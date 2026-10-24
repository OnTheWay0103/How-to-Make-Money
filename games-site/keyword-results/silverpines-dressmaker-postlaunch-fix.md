# Silver Pines / Dressmaker — 发售后内容纠错报告

- **执行人**: 内容合规审计员
- **日期**: 2026-10-24
- **范围**: `silverpineswiki/`、`dressmakerwiki/` 的 `content/` 与 `app/`（含 `lib/schema.ts` 注释）
- **结论**: RESULT: DONE — 两站已改为已发售口径，build 均通过

## 事实基准（Steam，2026-10-24 核对）

| 项目 | Silver Pines | Dressmaker |
|---|---|---|
| App ID | 2333000 | 4019220 |
| `coming_soon` | `false` | `false` |
| 发售日 | 2026-10-08 | 2026-09-21 |
| 价格 | $24.99 USD，无折扣 | $14.99 USD，无折扣 |
| Steam 平台 | Windows | Windows + macOS |
| 商店页评测 | Overwhelmingly Positive，1,735 篇，97% 好评 | Overwhelmingly Positive，近 30 天 14,886 篇，98% 好评；英文子集 12,626 篇，99% |
| Steam Deck 标识 | 未显示 | 未显示 |

数据来源：`store.steampowered.com/api/appdetails?appids=...&cc=us&l=en` 与两站商店页评测区块（同日抓取）。

口径说明：appdetails 的 `recommendations.total`（SP 3,734 / DM 16,601）与商店页展示的评测数不一致（Steam 对总评测与近期/语言子集采用不同统计窗口）。本报告与页面统一采用**商店页展示值**，并明确标注 DM 的 14,886 为「近 30 天」、12,626 为「英文子集」，不混用。

## 一、Silver Pines（11 个文件）

### 改动文件

| 文件 | before → after |
|---|---|
| `content/guides/silver-pines-release-date-price-platforms.md` | 「未发售 / 发售日待定」→ 已发售 2026-10-08；新增售价 $24.99、购买入口说明、正式版评测 1,735 / 97%；FAQ 全部改为过去时；`updated: 2026-10-24` |
| `content/guides/silver-pines-demo-guide.md` | demo 描述为「发售前唯一可玩版本」→ demo 为已发售游戏的免费试玩；明确区分 demo 数据（802 / 95.9%，2026-09-16）与正式版数据（1,735 / 97%，2026-10-24）；删除「正式版 0 评测」；武器列表未来时改为现在时 |
| `content/home-content.md` | 首段「即将发售」→ 已发售；事实表加入 `Price $24.99` 与 `Full game rating 1,735 · 97%`；从未确认清单移除价格；页脚日期更新 |
| `content/guides/silver-pines-beginner-guide.md` | 删除「游戏尚未发售」表述；`updated` 更新 |
| `content/guides/silver-pines-coins-vending-machines-economy.md` | 经济评价段落补明「802 / 95.9% 仅为 demo 数据」，并并列正式版 1,735 / 97%，避免把 demo 评测当正式版评分 |
| `content/guides/silver-pines-save-system-phone-booths.md` | 「正式版存档系统会不同」未来时 → 现在时，并注明无发售后报告支持该说法 |
| `app/page.tsx` | Hero「即将发售」→「Out now — released October 8, 2026」；按钮改为「Buy on Steam — $24.99」；精选卡与 FAQ 改为已发售；评测行区分正式版与 demo |
| `app/faq/page.tsx` | 发售问题改为「was released on October 8, 2026」；价格 $24.99；可玩性 = 正式版 + demo；demo 答案区分 802 / 95.9% 与 1,735 / 97% |
| `app/about/page.tsx` | 「发布时刷新内容」→「2026-10-08 发售后刷新」；发售信息、demo 覆盖、媒体引用、准确性声明改为已发售口径；删除「价格未公布」 |
| `app/tier-list/page.tsx` | 标题改 Post-Release；发售行 `coming_soon false, checked 2026-10-24`；价格行 $24.99 Confirmed；成就拆为「已公布列表」+「实体版/Game Pass 未公布」；证据账本正式版评测由 0 改为 1,735 / 97%；首屏、徽章、表格引言去除发售前措辞 |
| `lib/schema.ts` | 注释「价格未公布（2026-09-16）」→ 已发售、$24.99；FAQ 示例从「Is it out yet? No」改为已发售问法 |

### 未改动
- `related` 数组格式未改；未触碰任何 `sources:` frontmatter（如 camera 指南的 `sources:` 数组保持原样），仅同步正文行内 Sources 文字。
- 其他 6 篇指南（camera / guns / inventory / map / melee / stamina）经扫描无「未发售」断言，未改。

## 二、Dressmaker（18 个文件）

### 改动文件

| 文件 | before → after |
|---|---|
| `content/guides/dressmaker-release-date-price-platforms.md` | 「未发售 / 价格待公布」→ 已发售 2026-09-21、$14.99；新增正式版评测 14,886（近 30 天）/ 98%，英文子集 12,626 / 99%；FAQ 改过去时；`updated: 2026-10-24` |
| `content/home-content.md` | 首段与事实表改为已发售、$14.99；加入 Steam 评测摘要；从未确认清单移除价格 |
| `content/guides/dressmaker-free-steam-vs-itch-prototype.md` | 状态表 `Released`、价格 $14.99；删除「9 月 21 日前」「游戏发售后」等未来时；章节改为「How to Play the itch.io Prototype」；FAQ 更正 |
| `content/guides/dressmaker-platforms-mac-console-mobile.md` | 发售时态与价格改为已发售 / $14.99；删除「临近发售」「发售后」措辞；Deck 核对日期 2026-10-24 |
| `content/guides/dressmaker-beginner-guide.md` | 首段改为已发售 / $14.99；发售前预览改为发售后回顾；「What We Do Not Know Yet」注明已于 2026-09-21 发售、核对日 2026-10-24；删除 launch day 措辞 |
| `content/guides/dressmaker-vs-dressmaker-pro.md` | 价格表 `Not yet listed` → `$14.99`；「releasing September 21, 2026」→ 已发售；Sources 从「价格仍 [Unconfirmed]」改为 $14.99 已确认 |
| `content/guides/dressmaker-customer-requests-style-tags.md` | 首段已发售；style tag 来源改为发售后口径；删除「9 月 21 日前」 |
| `content/guides/dressmaker-grain-direction-bias-cut.md` | 首段未来时 → 已发售 + $14.99；frontmatter description 改为「released game」；重写「in the release」表述 |
| `content/guides/dressmaker-pattern-placement-cutting.md` | 首段已发售 + $14.99；发售后标记；布料成本措辞与 Sources 更新 |
| `content/guides/dressmaker-sewing-guide-clean-seams.md` | 首段已发售 + $14.99；预览/发售后口径；Sources 更新 |
| `content/guides/dressmaker-decoration-placement-guide.md` | 首段已发售 + $14.99；Sources 更新 |
| `content/guides/dressmaker-fabric-guide.md` | 首段已发售 + $14.99；「as of October 24, 2026」；预览/发售后措辞；「in the released game」 |
| `content/guides/dressmaker-sketchbook-dress-parts.md` | 首段已发售 + $14.99；部件名称来源改为发售后口径 |
| `app/page.tsx` | Hero「Out now — released September 21, 2026. Windows & macOS, $14.99」；按钮「Buy on Steam — $14.99」；精选卡与 FAQ（是什么/何时/多少钱/demo）全部更正 |
| `app/faq/page.tsx` | 发售、价格、免费与否、demo 答案更正；成就改为「列表已公布」；Deck 日期 2026-10-24 |
| `app/about/page.tsx` | 发售信息、常规更新、媒体覆盖、准确性声明、免责声明改为发售后口径 |
| `app/tier-list/page.tsx` | 标题改 Post-Release；新增「Released September 21, 2026 at $14.99」系统行；首屏/徽章/表格引言更正；页尾「Why This Is a Pre-Release Page」→「Why This Page Ranks Activities, Not a Tier List」，删除「A data-backed ranking will follow launch」 |
| `lib/schema.ts` | 注释「价格未公布（2026-09-12）」→ 已发售、$14.99 |

### 未改动
- `related` 数组格式未改；未触碰任何 `sources:` frontmatter（如 order-fails 指南的 `sources:` 数组保持原样），仅同步正文行内 Sources 文字。
- `content/guides/dressmaker-order-fails-quality-requirements.md` 已是发售后口径（`updated: 2026-10-23`），未改。

## 三、Build 验证

依赖已存在（两站均有 `node_modules` 与 `pnpm-lock.yaml`），仅执行 `pnpm build`。

| 站点 | 命令 | 结果 |
|---|---|---|
| `silverpineswiki/` | `pnpm build` | PASS — 成功 — Next.js 16.3.4，Compiled successfully，TypeScript 通过，24/24 静态页生成 |
| `dressmakerwiki/` | `pnpm build` | PASS — 成功 — Next.js 16.3.4，Compiled successfully，TypeScript 通过，26/26 静态页生成 |

构建产物复核：两站 HTML 中 `coming soon` 仅出现在「released rather than as coming soon」的否定句，无残留错误断言。

## 四、遗留 [Unconfirmed]（保留英文标记）

### Silver Pines
- 武器名称、伤害数值、敌人属性
- 存档/售货机的具体金币价格
- 完整 Memento 列表及效果
- 成就名称与完整列表
- Steam Deck 兼容性评级
- 实体版、Game Pass / PS Plus、发售后路线图
- 具名城镇人物、地点、章节、Boss
- 背包格数、容器位置/容量、升级名称与数量
- 相机分辨率上限、照片按存档存储等细节
- demo 存档能否继承到正式版

### Dressmaker
- 顾客姓名、人数、偏好表、报酬数值
- 风格标签完整词表、订单截止时间/时间推进规则
- 声望等级与数值质量分计算方式
- 部件目录/解锁列表、能否更换已选部件
- 手账容量、设计保存/复用
- 装饰数量上限、是否影响质量分、能否移除、是否需解锁
- 每种布料在游戏内的具体建模/数值、布料价格与商店库存
- 每张图纸的布料消耗量
- 完整成就列表
- DLC、季票、发售后路线图
- 原型版布料是否全部进入正式版、原型存档是否继承、原型页是否长期保留

## 五、未做 / 边界说明

- 未部署。
- 未编造任何评分、评测数、价格或平台信息；正式版评测均标注抓取日期与统计窗口。
- 未使用中文 `[待确认]` 或 Hugo shortcode。
- 任务给出的平台为「Steam (PC/Windows)」；Dressmaker 的 Steam 数据同时列出 macOS，页面据实写作 Windows + macOS，不视为冲突。
