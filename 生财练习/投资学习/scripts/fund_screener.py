#!/usr/bin/env python3
"""
指数基金筛选器 — 一键搜索→筛选→排序→输出对比表
用法: python3 fund_screener.py [关键词]
示例: python3 fund_screener.py 沪深300
"""
import requests
import re
import json
import sys
from datetime import datetime

KEYWORD = sys.argv[1] if len(sys.argv) > 1 else "沪深300"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "Referer": "http://fund.eastmoney.com/fund.html",
}

print(f"🔍 正在搜索跟踪「{KEYWORD}」的指数基金...\n")

# 从天天基金排名API拉取数据
url = "http://fund.eastmoney.com/data/rankhandler.aspx"
params = {
    "op": "ph", "dt": "kf", "ft": "zs", "rs": "",
    "gs": "0", "sc": "jjfe", "st": "desc",
    "pi": "1", "pn": "500", "dx": "1",
}

resp = requests.get(url, params=params, headers=HEADERS, timeout=15)

# 提取 datas 数组
match = re.search(r'datas:\[(.*?)\],allRecords', resp.text, re.DOTALL)
if not match:
    print("❌ 数据获取失败")
    sys.exit(1)

raw = match.group(1)

# 按 "record","record" 分割（记录间用引号+逗号分隔）
rows = raw.split('","')
rows[0] = rows[0].lstrip('"')
rows[-1] = rows[-1].rstrip('"')

funds = []
for row in rows:
    parts = row.strip('"').split(',')
    if len(parts) < 20:
        continue

    name = parts[1]
    code = parts[0]

    if KEYWORD not in name:
        continue

    # 基金规模（最后一项）
    try:
        fund_size = float(parts[-1])
    except:
        fund_size = 0

    if fund_size < 1.0:
        continue

    # 费率解析
    # 从天天基金API获取费率（管理费[19], 托管费[20]）
    raw_mgmt = parts[19].strip() if len(parts) > 19 else ""
    raw_cust = parts[20].strip() if len(parts) > 20 else ""

    mgmt_fee = float(raw_mgmt.replace('%', '')) if raw_mgmt.endswith('%') else None
    cust_fee = float(raw_cust.replace('%', '')) if raw_cust.endswith('%') else None
    total_fee = (mgmt_fee or 0) + (cust_fee or 0) if (mgmt_fee or 0) + (cust_fee or 0) > 0 else 999

    # 收益数据
    returns = {
        "近1周": parts[7] if len(parts) > 7 else "",
        "近1月": parts[8] if len(parts) > 8 else "",
        "近3月": parts[9] if len(parts) > 9 else "",
        "近6月": parts[10] if len(parts) > 10 else "",
        "近1年": parts[11] if len(parts) > 11 else "",
        "近3年": parts[13] if len(parts) > 13 else "",
    }

    funds.append({
        "code": code,
        "name": name,
        "size": fund_size,
        "mgmt_fee": mgmt_fee,
        "cust_fee": cust_fee,
        "total_fee": total_fee,
        "returns": returns,
    })

# 按总费率排序
funds.sort(key=lambda x: x["total_fee"])

if len(funds) == 0:
    print(f"❌ 未找到跟踪「{KEYWORD}」且规模≥1亿的指数基金")
    sys.exit(1)

print(f"✅ 共找到 {len(funds)} 只基金（规模≥1亿）\n")
print(f"{'排名':<4} {'代码':<8} {'基金名称':<44} {'规模(亿)':<10} {'管理费':<8} {'托管费':<8} {'合计':<8}")
print("-" * 94)
for i, f in enumerate(funds[:20], 1):
    mgmt = f"{f['mgmt_fee']:.2f}%" if f["mgmt_fee"] is not None else "N/A"
    cust = f"{f['cust_fee']:.2f}%" if f["cust_fee"] is not None else "N/A"
    total = f"{f['total_fee']:.2f}%"
    print(f"{i:<4} {f['code']:<8} {f['name']:<44} {f['size']:<10.2f} {mgmt:<8} {cust:<8} {total:<8}")

if len(funds) >= 3:
    print(f"\n🏆 推荐前3只候选基金:")
    print("-" * 94)
    for i, f in enumerate(funds[:3], 1):
        print(f"\n  {i}. {f['name']}（{f['code']}）")
        print(f"     总费率: {f['total_fee']:.2f}%/年 | 管理费: {f['mgmt_fee']:.2f}% | 托管费: {f['cust_fee']:.2f}% | 规模: {f['size']:.2f}亿")
        ret_str = " | ".join([f"{k}: {v}%" for k, v in f['returns'].items() if v and v != ''])
        if ret_str:
            print(f"     收益: {ret_str}")

# 保存结果
with open("fund_screener_result.json", "w", encoding="utf-8") as f:
    json.dump({"keyword": KEYWORD, "time": str(datetime.now()), "results": funds[:20]}, f, ensure_ascii=False, indent=2)
print(f"\n📁 完整结果已保存到 fund_screener_result.json")
print(f"💡 提示：费率为API获取的参考值，建议在天天基金网核实具体费率")
