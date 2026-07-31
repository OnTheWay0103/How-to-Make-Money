---
name: harvest-keywords
description: 独立的关键词收割 Agent — 对指定游戏运行 Google Suggest 关键词调研，输出去噪分类报告
arguments:
  - name: gameName
    description: 游戏名（如 "Dark Frontier"）
    required: true
  - name: searchQuery
    description: Google 搜索查询词（如 "dark frontier game"），用于区分同名游戏
    required: false
---

# Harvest Keywords — 关键词收割 Agent

> 独立 Agent，可被主管 Agent 或人工调用。

---

## 输入

| 参数 | 必填 | 说明 |
|------|:--:|------|
| `gameName` | ✅ | 目标游戏名 |
| `searchQuery` | ❌ | 搜索词，默认 = gameName |

---

## 执行流程

### Step 1: 搜索前缀轮询

用以下 10 种前缀 + 搜索词调用 Google Suggest API：

```
PREFIXES = ["", "how to ", "best ", "guide ", "weapons ", "beginner ", "build ", "solo ", "co op ", "tier list "]
```

**API 端点**（无需 API Key）：
```
https://suggestqueries.google.com/complete/search?client=chrome&q={prefix}{query}
```

每次请求间隔 ≥ 4 秒避免限速。需代理访问（中国大陆）。

### Step 2: 去噪

从结果中剔除以下类型：
- 明显属于其他游戏的词（如 "spirit island solo" 不属于 SpiritVale）
- 纯品牌/新闻搜索（如 "mistfall hunter review ign"）
- 无搜索意图的词（如拼写错误、无意义词组）

保留：
- How-to 类（"how to X"）
- Best/排行类（"best X"）
- 攻略类（"X guide"）
- 装备/武器类
- 新手向（"beginner X"）
- Build/配装类
- 联机/合作类
- Tier List 类

### Step 3: 分类

按搜索意图分类统计：

| 分类 | 示例 |
|------|------|
| How-to | how to beat X, how to get X |
| Best/Ranking | best build, best weapon |
| Guide | beginner guide, X guide |
| Weapons/Gear | best sword, X weapon list |
| Build | tank build, dps build |
| Co-op/Multiplayer | how to play with friends |
| Tier List | X tier list |
| Info | release date, price, platforms |

### Step 4: 产出内容优先级

根据关键词数量和类型，推荐内容优先级：

```
关键词 > 100 → 15 篇攻略
关键词 50-100 → 10 篇攻略
关键词 < 50 → 8 篇攻略
同时标注 Top 5 最高优先级主题
```

---

## 输出格式

保存到 `keyword-results/{GameName}.md`：

```markdown
# {GameName} — Google Suggest 关键词

> 采集日期: {date} | 总词数: {N} | 噪声率: {X}%

## 有效关键词

### How-to 类 ({count})
- keyword 1
- keyword 2

### Best/Ranking 类 ({count})
- ...

（所有分类）

## 内容优先级建议

1. {最高优先级主题}（{N} 个相关搜索词）
2. {次高优先级主题}
...

## 噪声词（已剔除）
- keyword (原因)
```

---

## 调用示例

主管 Agent 调用：
```
Invoke harvest-keywords skill with gameName="Dark Frontier" searchQuery="dark frontier game"
```

人工调用：
```
/harvest-keywords "Dark Frontier"
```
