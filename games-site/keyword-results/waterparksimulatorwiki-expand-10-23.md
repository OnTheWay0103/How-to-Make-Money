# waterparksimulatorwiki — 2026-10-23 全站补更报告

## 新增攻略

- **Title**: How Do Shelves, Multi-Stand Vendors & Staff Days Off Work in Waterpark Simulator?
- **Slug**: `shelves-multistand-staff-guide`
- **File**: `waterparksimulatorwiki/content/guides/shelves-multistand-staff-guide.md`
- **词数**: 1,155（表格不计）
- **Version**: 1.0.99

## 选题依据

路径② system-inventory-driven：官方 1.0.91（2026-09-11）一次性加入三个运营系统（Shelves、Multi-stand vendors、Day off），1.0.93（2026-09-16）又把多摊位解锁前移到 2 星；站内 `staff-management-guide` 只写招聘/工资/岗位，`research-tree-guide` 只写研究分类，没有任何一篇解释这三个系统怎么用。

来源：

- Official: [Multitasking by the shelves deserves a break](https://store.steampowered.com/news/app/3293260/view/1843481262696049)（2026-09-11）— 货架、多摊位研究、员工休假；Caymart 补给自动上架。
- Official: [UPDATE 1.0.93 - Patch Notes](https://store.steampowered.com/news/app/3293260/view/1844115010488697)（2026-09-16）— 多摊位改为 2 星解锁、建造镜头速度。
- Official: [UPDATE 1.0.99 - Patch Notes](https://store.steampowered.com/news/app/3293260/view/1844751498235216)（2026-09-29）— 保安处理不良游客后的休息时间缩短、开园即上岗。
- Community: [Waterpark Simulator Staff Guide](https://waterparksimulatorgame.wiki/guides/staff/)（accessed 2026-10-23）— 多摊位研究位置、2 星门槛、休假按钮位置与「早段可用」限制、必须手动给摊位分配员工。
- Community: [Steam Discussions — Staff issues](https://steamcommunity.com/app/3293260/discussions/0/603040822196384048/)（accessed 2026-10-23）— 交叉核对「招聘≠分配」的常见混淆。

## 查重结论

对比全部 16 篇现有 slug/title：`staff-management-guide` 讲岗位类型、工资、招聘顺序；`research-tree-guide` 讲研究树优先级；`money-making-guide` 讲收入；`visitor-problems-guide` 讲游客不满。新篇聚焦「货架补给链 + 多摊位分配 + 休假」三个 1.0.91 新系统及其联动，不与上述页面自噬。新 slug 无重复。

## 构建

- `pnpm install --prefer-offline`: 成功（2.3s）
- `pnpm build`: 成功，`/guides/shelves-multistand-staff-guide` 出现在 SSG 路由表。

## 部署与线上验证

- `./deploy-wiki-site.sh waterparksimulatorwiki`: 成功
- URL: https://waterparksimulatorwiki.vercel.app/guides/shelves-multistand-staff-guide
- HTTP: **200**
- 内容校验：页面包含 `Shelves, Multi-Stand Vendors`。

## 备注

- 研究点成本、多摊位人数上限、员工可覆盖的最大摊位数官方未公布，正文标 `[Unconfirmed]` 或写成观察建议。
- 未执行 git commit（按要求）。
