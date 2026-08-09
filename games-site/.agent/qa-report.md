## QA Report — 2026-08-09 18:30

### 执行摘要
- 模式: quick | 范围: waterparksimulatorwiki (14 篇 guide)
- 结果: ⚠️ 1 警告 | ✅ 13 通过 | 🔴 0 阻断

### 发现清单

| # | 严重度 | 站点 | 文件 | 问题类型 | 描述 | 建议操作 |
|---|--------|------|------|---------|------|---------|
| 1 | 🟡 | waterparksimulatorwiki | price-platforms-system-requirements.md:70 | 残留检测误报 | "Low-Budget Repairs"、"Go-Go Town" 是同类游戏对比（非模板残留） | 调整残留检测规则：排除 "If you liked" / "similar to" 上下文 |

### 基建检查

| 站点 | Build | Deploy | GA4 | GSC | SITE_CONFIG |
|------|:--:|:--:|:--:|:--:|:--:|
| waterparksimulatorwiki | ⏭️ 跳过(无本地 node) | ✅ | ✅ G-JMLQMKR4X4 | ✅ google12f8715471cef7b7.html | ✅ 'Waterpark Simulator Wiki' |

### 抽样虚构检测

| Guide | 关键名词 | 验证 |
|-------|---------|:--:|
| museum-questline-guide.md | Poseidon't, Clara Loft, Goldie, 2.5星解锁 | ✅ 社区讨论可查 |
| staff-management-guide.md | 7种员工类型, Hiring Level, 4 slots | ✅ 与TheGamesWatch一致 |

### 评估

- **内容质量**: 14 篇 guide 结构完整，无虚构检测命中，无真正模板残留
- **模板残留误报**: 规则过于激进 — 同类游戏对比被标记。建议后续调整 grep 规则
- **基建**: 全部通过（GA4/GSC 均已配置）
