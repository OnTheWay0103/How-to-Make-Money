# AdSense 合规分析与改进方案

> 创建日期：2026-08-10 | 触发事件：The Mound Wiki AdSense 申请被拒（低价值内容）

---

## 一、拒绝背景

- **申请站点**：themoundwiki.vercel.app（The Mound: Omen of Cthulhu 攻略站）
- **拒绝原因**：低价值内容（Low Value Content）
- **站点状态**：54 篇攻略，平均 1,186 词/篇，About/Contact/Privacy/Terms/FAQ 齐全，ads.txt ✅，GA4 ✅，GSC ✅，Vercel 已部署
- **表面数据正常，深层质量问题导致拒绝**

---

## 二、站点审计发现

### 2.1 致命问题：内容自噬（Content Cannibalization）

9 个主题群存在 2-4 篇近重复攻略，Google 的「scaled content abuse」检测会识别为模板内容：

| 主题 | 现有篇数 | 涉及文件 |
|------|:--:|------|
| Sanity 系统 | 3 | `sanity-guide` / `sanity-management` / `sanity-mechanics` |
| Combat/Survival | 3 | `combat-survival-guide` / `combat-survival-mechanics` / `advanced-combat` |
| Weapons | 3 | `weapons-guide` / `best-weapons-gear-guide` / `ranged-weapons-guide` |
| Loadout | 4 | `loadout-guide` / `beginner-loadouts` / `survival-loadouts` / `squad-loadout-chart` |
| Co-op/Multiplayer | 3 | `coop-multiplayer-guide` / `coop-strategy-guide` / `crossplay-multiplayer` |
| Enemy | 3 | `enemy-guide` / `enemy-bestiary` / `enemy-weakness-chart` |
| Extraction | 2 | `extraction-guide` / `extraction-zones` |
| Solo | 2 | `solo-guide` / `solo-survival-guide` |
| Walkthrough | 2 | `walkthrough-guide` / `walkthrough-story-guide` |

### 2.2 零 E-E-A-T 信号

- About 页面只说 "a small team of passionate gamers" — 无名无姓无资质
- **没有任何**作者简介、真实姓名、照片、游戏经验证明
- **没有任何**原创截图、实测数据、第一手游戏体验
- 全部内容读起来像「任何玩过游戏的人都能写出来的通用攻略」

### 2.3 AI 生成内容缺乏人工差异化

- 所有 54 篇采用相同结构：frontmatter → h2 sections → bullet points
- 语调一致、缺乏个性、没有 "I tested this" / "in my experience" 等个人经验标记
- 可以互换段落而不影响可读性 — Google 判定模板内容的核心信号

### 2.4 其他发现

- `seo-config.ts` 中 `googleAdsenseId: ''` 为空
- Tier List 页面纯表格渲染，缺少分析段落（thin content）
- 全部攻略由 Coordinator 自动生成，同一天批量发布的页面结构高度一致

---

## 三、AdSense 政策深度解读

### 3.1 2025-2026 核心变化

- **通过率极低**：约 95-96% 的新 AdSense 申请被拒
- **AI 内容**：不禁止 AI 生成，但禁止「没有人工价值的 AI 内容」。AI 是脚手架，不是建筑。
- **Information Gain 决定一切**：你的内容 — 所有其他同类内容 = Information Gain。**零信息增量 = 拒绝**。
- **综合判断**：Google 从内容深度、原创性、用户体验、网站结构、可信度等多维度综合打分。

### 3.2 官方红线（Google Web Search Spam Policies）

| 违规类型 | 说明 |
|----------|------|
| 门页（Doorway pages） | 专为搜索引擎创建、原创内容极少 |
| 内容贫乏的联属网站 | 未为用户带来重大附加价值 |
| 关键字堆砌 | 不必要地重复关键字且不增添价值 |
| 不实陈述 | 声称提供实际并未提供的内容或服务 |
| 抄袭/重复内容 | 直接复制其他网站；略做修改（替换同义词或自动技术）后重新发布 |

### 3.3 模板检测机制

Google 检测的不是「逐字重复」，而是**句子结构的 n-gram 重叠**。如果多篇文章的 intro、段落结构、句式高度一致（仅替换名词），就会被判定为模板内容。

**判定法则**：如果你能把一页的 intro 换到另一页上读起来同样通顺，这就是模板，不是写作。

---

## 四、成功案例研究

### 案例 1：独立游戏目录站（findindiegame.com）

| 阶段 | 描述 |
|------|------|
| 被拒原因 | 每页 About 段落是 Steam `short_description` 的逐字复制。所有页面是「不同名词替换的结构克隆」 |
| 修复方案 | 让每页文案依赖数据库中真正不同的字段来生成不同的编辑判断。按下载量分层（10M+ vs 100K）生成不同段落 |
| 核心洞察 | **"修复不是加更多词。更长的模板段落仍然是模板。"** |

### 案例 2：浏览器游戏站（jigsolitaire.online）

| 阶段 | 描述 |
|------|------|
| 被拒原因 | iframe 嵌入游戏 = 爬虫看到空白页，内容对爬虫不可见 |
| 修复方案 | 新增 15-20 篇 1000+ 词博客 + 游戏页面下方加 300-500 词说明文字 |
| 结果 | 通过 |

### 案例 3：游戏技术修复站（nftnoobie.com）

| 阶段 | 描述 |
|------|------|
| 被拒原因 | 短帖 + 部分内容抄新闻站 |
| 修复方案 | 删垃圾帖、重写教程加入个人踩坑经历（"我试了这个，失败了，然后找到了这个方案"）、修复导航、加 About/Contact |
| 结果 | **仅 10-15 篇好文章通过**，一篇 Fix 页排名 Google #2 |

### 案例 4：科技/应用/游戏博客（techmyapp.in — 被拒 5 次）

| 阶段 | 描述 |
|------|------|
| 被拒原因 | 51 篇文章，内容像教科书、零个人声音、全部相同结构模板、没有原创截图、零内链、About 只有一句话 |
| 修复方案 | 加内链、重写 intro、合并重叠文章、加作者简介+照片、加个人体验、加原创截图 |
| 状态 | 等待第 6 次申请 |

### 共同规律

1. **不是文章数量问题**：10-15 篇高质量可以过，50+ 篇模板化必然被拒
2. **每页必须提供别处找不到的信息**
3. **个人经验/截图/实测数据是不可替代的差异化因素**
4. **修复后等 2-3 周再申请**

---

## 五、同行 AdSense 策略

| 平台 | 广告模式 | 与我们相关性 |
|------|----------|:--:|
| **Fandom** | 自己卖广告（非 AdSense），注册用户免广告 | 低 — 规模完全不同 |
| **wiki.gg** | 仅对匿名用户展示广告，广告主限于 Freedom Games 发行商，给开发者收入分成 | 低 — 封闭生态 |
| **独立 wiki** | 几乎没有成功案例被公开讨论 | — |

**关键发现**：独立游戏 wiki 靠 AdSense 变现的案例非常稀少。这个赛道要么没人做（机会），要么做的人都没成功（风险）。

---

## 六、AI + 人工最佳实践

### 6.1 核心公式

> **AI 是脚手架，不是建筑。**
> 用 AI 打草稿 → 拆除 AI 的通用骨架 → 替换为你的知识、经验和数据。

### 6.2 五次人工审核流程（每篇 5-10 分钟）

| 轮次 | 检查内容 | 关键动作 |
|:--:|------|------|
| **1. 声音与语调** | 听起来像一个**具体的人**在说话吗？ | 朗读开头；删除 "In today's…" 开头；检查零缩写（AI 特征）；加入一个 AI 不会写的具体例子 |
| **2. 结构与节奏** | H2 列表本身是否构成逻辑论证？ | 删除重复观点；修复过渡；最强段落前移；每个 H2 以结论/问题/场景开头 |
| **3. 事实与来源** | 每个数字、产品名、价格声明可信吗？ | AI 会编造数字和产品名——逐个核实；所有研究引用必须有 URL；每篇至少抽查一个声明 |
| **4. SEO 卫生** | 关键词是否自然出现？ | 主关键词在 H1 / 首段 / 第一个 H2 / meta description；150-160 字符 meta；内链指到真实页面；至少一个外链到官方来源 |
| **5. AI 痕迹** | 是否有机器人写作特征？ | 删除夸张的 AI 动词、平行三项列表（"faster, smarter, more efficient"）、喉清短语（"It's important to note"）、过多破折号、以 "Moreover/Furthermore/Additionally" 开头的段落 |

### 6.3 AI 痕迹清除清单

需要删除的典型 AI 特征：
- 平行三项列表："faster, smarter, more efficient"
- 喉清短语："It's important to note that…" / "It's worth mentioning that…"
- 过度使用破折号（限制 ~2 个/500 词）
- 以 "Moreover / Furthermore / Additionally / In conclusion" 开头的段落
- "In today's digital landscape…" / "Whether you're a beginner or…"
- 零缩写 = 高度可疑（正常人的文章会有 don't, you'll, it's 等）
- 结尾模板："success requires consistent effort" / "the key is to practice"

### 6.4 Information Gain 实现方法

不需要实验室设备。「专有数据」可以是：
- 你自己测试出的数值对比表
- **你自己的游戏截图**（AI 无法伪造的视觉证据）
- 你踩过的坑 + 怎么爬出来的
- 你自己整理的对比表
- 你自己的 Google Analytics 截图
- 一个你手动做的简单对比表

**920 词实质规则**：每篇文章至少包含一个**原创元素**。20 篇达标的文章 > 50 篇不达标的。

---

## 七、改进方案

### Phase 1 — The Mound 单站试点

#### 7.1 合并近重复内容（54 → ~41 篇）

| 合并组 | 操作 | 预期结果 |
|--------|------|:--:|
| Sanity ×3 → **1 篇** | 合并 `sanity-management` + `sanity-mechanics` 入 `sanity-guide` | 深度覆盖 sanity 系统 |
| Combat ×2 → **1 篇** | `combat-survival-mechanics` 并入 `combat-survival-guide`（`advanced-combat` 保留为高阶篇） | 基础+进阶两篇 |
| Weapons ×3 → **2 篇** | `ranged-weapons-guide` 并入 `weapons-guide`，`best-weapons-gear-guide` 保留 | 全武器 + 排名 |
| Loadout ×4 → **2 篇** | `survival-loadouts` + `squad-loadout-chart` 并入 `loadout-guide`，`beginner-loadouts` 保留 | 通用 + 新手 |
| Co-op ×3 → **2 篇** | `coop-multiplayer-guide` 并入 `coop-strategy-guide`，`crossplay-multiplayer` 保留 | 策略 + 技术 |
| Enemy ×3 → **2 篇** | `enemy-weakness-chart` 并入 `enemy-guide`，`enemy-bestiary` 保留 | 全敌人 + 图鉴 |
| Extraction ×2 → **1 篇** | `extraction-zones` 并入 `extraction-guide` | 完整撤离指南 |
| Solo ×2 → **1 篇** | `solo-survival-guide` 并入 `solo-guide` | 完整单刷指南 |
| Walkthrough ×2 → **1 篇** | `walkthrough-story-guide` 并入 `walkthrough-guide` | 完整通关攻略 |

#### 7.2 注入 E-E-A-T 信号

- **About 页面重写**：添加编辑信息、游戏时长、内容审核标准
- **Author Box 组件**：新建组件，部署到 5-8 篇核心攻略
- **核心里程碑文章**加入实测段落（"Playtest Notes" / "Author's Experience"）
- **原创截图**：为核心攻略补充游戏内截图

#### 7.3 差异化每篇 Intro

- 消除模板 intro 结构
- 每篇以不同角度切入（问题驱动 / 数据驱动 / 场景驱动）
- Tier List 页面添加分析段落（不只是表格）

#### 7.4 等待 & 重新提交

- 修复完成后等 **2-3 周**让 Google 重新抓取
- 重新提交时附带改进说明

### Phase 2 — 全站推广（待 Phase 1 通过后执行）

#### 7.5 建立 AdSense 合规模板

- Author Box 组件标准化
- 内容差异化 Checklist 标准化
- 新站建站流程加入「AdSense 合规审查」步骤

#### 7.6 旧站改造优先级

1. **已部署 + 攻略数多**（优先）：Witchspire, Mistfall Hunter, Aincrad, SpiritVale 等
2. **已部署 + 攻略数少**：后续改造
3. **待部署**：在建站时就按新标准执行

#### 7.7 Coordinator 升级

- 生成内容时加入「去重检查」
- 自动标记潜在重复内容
- 每篇自动生成「差异化建议」

---

## 八、风险与备选方案

### 风险

- **AdSense 可能永远不给过**：独立游戏 wiki 通过 AdSense 的公开案例很少
- **34 站矩阵的规模化内容天然与「独特性」要求冲突**
- **Google 可能在 2026-2027 进一步收紧政策**

### 备选变现路径

| 路径 | 优势 | 劣势 |
|------|------|------|
| 直接卖广告位给游戏厂商 | 不受 AdSense 政策限制 | 需要主动销售 |
| Affiliate（游戏装备/外设） | 内容相关性强 | 转化率不确定 |
| Patreon / Buy Me a Coffee | 零门槛 | 收入预期低 |
| 卖站（Flippa 等） | 一次性变现 | 放弃长期收益 |
| Ezoic / Mediavine 等替代广告网络 | 审核可能比 AdSense 宽松 | 收益可能更低 |

---

## 九、参考资料

- [Google AdSense 计划政策](https://support.google.com/adsense/answer/48182)
- [Google Web Search 垃圾内容政策](https://developers.google.com/search/docs/essentials/spam-policies)
- [AdSense Approval Checklist 2026 (adstimate.com)](https://adstimate.com/blog/adsense-approval-checklist-2026.html)
- [How to Get AdSense Approval with AI Content — E-E-A-T Blueprint](https://paidmediaworld.com/adsense-approval-ai-written-content-eeat-blueprint/)
- [Why Sentence Uniqueness Beats Page Count (dev.to)](https://dev.to/morinaga/why-im-betting-sentence-uniqueness-beats-page-count-for-programmatic-adsense-approval-6n1)
- [How I Rebuilt Slug Pages After AdSense Flagged Scaled Content Abuse (dev.to)](https://dev.to/morinaga/how-i-rebuilt-astro-slug-pages-after-adsense-flagged-three-sites-for-scaled-content-abuse-ln8)
- [What I Learned About Accidental Low-Value Signals After Four AdSense Rejections (dev.to)](https://dev.to/morinaga/what-i-learned-about-accidental-low-value-signals-after-four-adsense-rejections-1b2l)
- [AdSense 因低价值内容被拒？解决方案 (genieegroup.com)](https://genieegroup.com/blog/adsense-low-value-content/)
