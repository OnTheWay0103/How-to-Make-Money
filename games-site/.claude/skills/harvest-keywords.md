---
name: harvest-keywords
description: 关键词采集 — 对指定游戏运行 Google Suggest 采集（脚本驱动），输出去噪分类 + 来源标记的关键词报告
arguments:
  - name: gameName
    description: 游戏名，MUST 用官方写法（多词品牌带空格，如 "Tears of Metal"）
    required: true
  - name: genre
    description: 品类，决定后缀种子：rpg / survival / coop / sim / roguelite
    required: false
---

# Harvest Keywords — 关键词采集

> 规则：`docs/STRATEGY-挖词与词库.md`（第三节采集执行、第四节去噪、第五节沉淀）
> 岗位：关键词研究员（`docs/agents/13` + `14`）
> **采集器是脚本，不是手敲 curl**：`scripts/harvest-keywords.mjs`

---

## 执行

```bash
node scripts/harvest-keywords.mjs \
  --game "{gameName}" \
  --slug "{小写去空格}" \
  --genre "{genre}" \
  --write
```

可选项：

| 参数 | 用途 |
|---|---|
| `--alias "アノマリス"` | 别名（中文名/日文名/缩写）。不传会把别名词误判成噪声 |
| `--locale ja` | 日文市场（`hl=ja&gl=jp`）；默认 `en`（`hl=en&gl=us`） |
| `--bare-only` | 只采裸词，快速判需求（约 1 次请求） |
| `--seeds "a,b,c"` | 覆盖品类种子 |
| `--json path.json` | 额外输出本次 JSON（调试用） |

脚本已内置：DNS 投毒取证 + `--resolve`、固定 `hl/gl`、锚定批次去重、失败计数、来源标记、
近重复变体识别、`.data/{slug}.json` 跨次合并。

---

## 完成标准

1. 报告头部 5 个数字齐全：原始 / 去重 / 有效 / 噪声率 / 品牌锚定率。
2. **请求失败数 = 0**。有失败就重跑，MUST NOT 把失败当 0 词。
3. 有效词 **≥20** 才能进入建站评分；不足则报「搜索需求低」并给复采日期。
4. 每条有效词带 **来源** 和 **页型**。
5. 噪声词逐条写原因（同名混淆 / 近音回退 / 无意义片段）。

---

## MUST NOT

- MUST NOT 用无空格的品牌串作锚定词（`tearsofmetal` 会返回另一款游戏的词）。
- MUST NOT 省略 `--write` 后手工拼报告（格式会漂移，`.data` 断档）。
- MUST NOT 写「需代理访问」——本机是 DNS 投毒，脚本已用 `--resolve` 绕开。
- MUST NOT 用「关键词 >100 → 15 篇攻略」这类按篇数的口径；内容量口径是**页型 + 词数**。
- MUST NOT 把别名当噪声；先加 `--alias` 再重跑。
