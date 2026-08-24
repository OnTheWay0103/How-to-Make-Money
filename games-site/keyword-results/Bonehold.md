# Bonehold — Google Suggest 关键词调研报告

> 采集日期：2026-08-25
> 关键词研究员 · KW-RESEARCH-2026-08-25
> 数据源：Google Suggest API（真实搜索建议）

## 一、采集方法与总量

- 两轮采集：第一轮 16 种子词 × a-z/0-9 扩展（592 次请求）；第二轮补充 25 种子词（reddit/update/trailer/multiplayer/how to/boss/俄语 прохождение 等）再跑 925 次请求
- **第二轮新增建议词：0**（两轮后原始建议词仍为 24）
- 含游戏名过滤后：**10**
- 去噪后：**10 个有效关键词**

## ⚠️ 结论：搜索需求低（触发停止条件，关键词量 < 20）

- "bonehold board game"、"bonehold game steam" 精确词返回空建议 —— **未发现同名桌游或其他热门同名产品分流**
- 主要混淆来源是拼写相近的 **"bonehead"**（乐队/卡车公司/纹身/标本等，14 词已全部过滤）及无关词（collar bone hold 解剖词、does bone hold dna 科普词、how to purge reclaim 等）
- 站点已有 17 篇攻略，而全网络真实搜索词仅 10 个 —— **攻略数量已远超搜索需求，扩充不划算**

## 二、主题分类（仅 2 簇，如实报告）

| # | 主题簇 | 关键词数 | 代表词 | 建议 |
|---|--------|---------|--------|------|
| 1 | 基础信息 | 9 | bonehold / bonehold game / bonehold gameplay / bonehold steam / bonehold pc / bonehold demo / bonehold download / bonehold review / bonehold скачать | 已有站点首页/FAQ 即可覆盖；review 无对应指南（1 词） |
| 2 | 职业 | 1 | bonehold classes | ✅ 已有 classes-guide + class-tier-list，已覆盖 |

## 三、命中率（对照 boneholdwiki/content/guides/ 现有 17 篇攻略）

- classes（1 词）：🟢 已覆盖（classes-guide、class-tier-list）
- 基础信息（9 词）：🟢 站点核心页覆盖；review 类（1 词）为唯一小缺口

## 四、建议

1. **暂缓 Bonehold 内容扩充**——搜索需求极低，写新攻略预期月访问为个位数
2. 建议 1 个月后（游戏正式发售/宣发后）重采一轮再决策
3. 若必须补内容，最多补 1 篇 review/购买指南，其余按兵不动

## 五、全量关键词（10 个，证据链）

- bonehold
- bonehold classes
- bonehold demo
- bonehold download
- bonehold game
- bonehold gameplay
- bonehold pc
- bonehold review
- bonehold steam
- bonehold скачать（俄语：下载）

### 已过滤的混淆词（14 个）

- bone hold and bust dress
- bonehead tackle / bonehead tattoo / bonehead taxidermy / bonehead this city is ours / bonehead toxic toys
- bonehead truckers / bonehead truckers email / bonehead truckers merchandise / bonehead truckers youtube / bonehead trucking
- collar bone hold / does bone hold dna / how to purge reclaim / pas instructions
