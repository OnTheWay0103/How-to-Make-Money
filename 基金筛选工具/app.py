import streamlit as st
import requests
import re
import json

st.set_page_config(page_title="指数基金筛选器", page_icon="📊", layout="wide")

st.title("📊 指数基金一键筛选")
st.markdown("输入指数名称，自动筛选出规模≥1亿的基金，按费率从低到高排序")

# 指数库
INDEX_PRESETS = ["沪深300", "中证500", "中证1000", "中证红利", "创业板指", "科创50", "标普500", "纳斯达克100"]

col1, col2 = st.columns([3, 1])
with col1:
    keyword = st.text_input("输入指数关键词", placeholder="例如：沪深300、中证500、标普500")
with col2:
    preset = st.selectbox("或快速选择", [""] + INDEX_PRESETS, label_visibility="collapsed")
    if preset:
        keyword = preset

st.markdown("---")

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "Referer": "http://fund.eastmoney.com/fund.html",
}


@st.cache_data(ttl=3600)
def fetch_funds(keyword):
    """从天天基金API拉取数据并按关键词筛选"""
    url = "http://fund.eastmoney.com/data/rankhandler.aspx"
    params = {
        "op": "ph", "dt": "kf", "ft": "zs", "rs": "",
        "gs": "0", "sc": "jjfe", "st": "desc",
        "pi": "1", "pn": "500", "dx": "1",
    }

    resp = requests.get(url, params=params, headers=HEADERS, timeout=15)
    match = re.search(r'datas:\[(.*?)\],allRecords', resp.text, re.DOTALL)
    if not match:
        return []

    raw = match.group(1)
    rows = raw.split('","')
    rows[0] = rows[0].lstrip('"')
    rows[-1] = rows[-1].rstrip('"')

    funds = []
    for row in rows:
        parts = row.strip('"').split(',')
        if len(parts) < 22:
            continue

        name = parts[1]
        code = parts[0]
        if keyword not in name:
            continue

        # 基金规模
        try:
            fund_size = float(parts[-1])
        except:
            fund_size = 0
        if fund_size < 1.0:
            continue

        # 费率
        raw_mgmt = parts[19].strip() if len(parts) > 19 else ""
        raw_cust = parts[20].strip() if len(parts) > 20 else ""
        mgmt_fee = float(raw_mgmt.replace('%', '')) if raw_mgmt.endswith('%') else None
        cust_fee = float(raw_cust.replace('%', '')) if raw_cust.endswith('%') else None
        total_fee = (mgmt_fee or 0) + (cust_fee or 0) if mgmt_fee else None

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

    # 排序
    funds.sort(key=lambda x: (x["total_fee"] if x["total_fee"] else 999))
    return funds


if keyword:
    with st.spinner(f"正在搜索跟踪「{keyword}」的指数基金..."):
        funds = fetch_funds(keyword)

    if not funds:
        st.warning(f"未找到跟踪「{keyword}」且规模≥1亿的指数基金，请换个关键词试试")
        st.stop()

    st.success(f"共找到 {len(funds)} 只基金（规模≥1亿）")

    # 完整对比表
    st.subheader("📋 完整对比表")
    table_data = []
    for i, f in enumerate(funds, 1):
        mgmt = f"{f['mgmt_fee']:.2f}%" if f["mgmt_fee"] else "N/A"
        cust = f"{f['cust_fee']:.2f}%" if f["cust_fee"] else "N/A"
        total = f"{f['total_fee']:.2f}%" if f["total_fee"] else "N/A"
        table_data.append({
            "排名": i,
            "代码": f["code"],
            "基金名称": f["name"],
            "规模(亿)": f"{f['size']:.2f}",
            "管理费": mgmt,
            "托管费": cust,
            "总费率": total,
        })

    st.dataframe(table_data, use_container_width=True, hide_index=True,
                 column_config={
                     "排名": st.column_config.NumberColumn(width=50),
                     "代码": st.column_config.TextColumn(width=80),
                     "基金名称": st.column_config.TextColumn(width=300),
                     "规模(亿)": st.column_config.TextColumn(width=80),
                     "管理费": st.column_config.TextColumn(width=70),
                     "托管费": st.column_config.TextColumn(width=70),
                     "总费率": st.column_config.TextColumn(width=70),
                 })

    # 推荐前3
    st.subheader("🏆 推荐前3候选基金")
    cols = st.columns(3)
    for i, (col, f) in enumerate(zip(cols, funds[:3])):
        with col:
            st.markdown(f"### {i+1}. {f['name']}")
            st.markdown(f"**代码：** {f['code']}")
            st.markdown(f"**总费率：** {f['total_fee']:.2f}%/年")
            st.markdown(f"**管理费：** {f['mgmt_fee']:.2f}% | **托管费：** {f['cust_fee']:.2f}%")
            st.markdown(f"**规模：** {f['size']:.2f}亿")
            st.markdown("**近期收益：**")
            for k, v in f["returns"].items():
                if v and v != "":
                    st.markdown(f"- {k}：{v}%")

    # 导出
    st.subheader("📥 导出数据")
    json_str = json.dumps([{
        "code": f["code"],
        "name": f["name"],
        "size": f["size"],
        "mgmt_fee": f["mgmt_fee"],
        "cust_fee": f["cust_fee"],
        "total_fee": f["total_fee"],
        "returns": f["returns"],
    } for f in funds], ensure_ascii=False, indent=2)

    st.download_button(
        label="📄 下载 JSON 数据",
        data=json_str,
        file_name=f"fund_screener_{keyword}.json",
        mime="application/json",
    )

else:
    st.info("👆 在上方输入指数关键词开始筛选")
    st.markdown("""
    **使用说明：**
    1. 输入指数名称（如沪深300、中证500、标普500）
    2. 系统自动拉取天天基金实时数据
    3. 筛选出规模≥1亿的基金
    4. 按费率从低到高排序
    5. 展示完整对比表和推荐前3

    **数据来源：** 天天基金 API（实时数据）
    """)
