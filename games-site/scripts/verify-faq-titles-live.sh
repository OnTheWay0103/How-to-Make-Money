#!/bin/zsh
# verify-faq-titles-live.sh — /faq 标题线上复验（源码合规 ≠ 线上合规）
#
# 用法:
#   scripts/verify-faq-titles-live.sh                 # 全站
#   scripts/verify-faq-titles-live.sh aincradwiki ... # 指定站
#
# 判定：线上 <title> 去掉模板后缀「 · <站名>」后的长度必须落在 40–60，
#       且不能还是裸的 "FAQ"。
#
# ⚠️ 本机 DNS 会把 *.vercel.app 污染到别的 IP，直接 curl 会超时误判 ——
#    这里先 dig @1.1.1.1 取真实 IP，再 curl --resolve 强制直连。
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$SCRIPT_DIR" || exit 1

sites=("$@")
if [[ ${#sites[@]} -eq 0 ]]; then
  sites=(${(f)"$(ls -d *wiki/app/faq/page.tsx 2>/dev/null | cut -d/ -f1)"})
fi

pass=0; fail=0; failed=()
for site in "${sites[@]}"; do
  host="${site}.vercel.app"
  ip=$(dig @1.1.1.1 +short "$host" A 2>/dev/null | head -1)
  if [[ -z "$ip" ]]; then
    echo "❌ $site  取不到 $host 的 IP（DNS）"
    fail=$((fail+1)); failed+=("$site"); continue
  fi
  title=$(curl -s -m 30 --resolve "$host:443:$ip" "https://$host/faq" \
    | grep -o '<title>[^<]*</title>' | head -1 | sed -e 's/<[^>]*>//g')
  # HTML 实体先还原再量长度：&amp; 是 5 个字符，实际只占 1 个
  title=$(printf '%s' "$title" | sed -e 's/&amp;/\&/g' -e 's/&#x27;/'"'"'/g' -e 's/&#39;/'"'"'/g' -e 's/&quot;/"/g')
  if [[ -z "$title" ]]; then
    echo "❌ $site  取不到 /faq 的 <title>"
    fail=$((fail+1)); failed+=("$site"); continue
  fi
  # 去掉模板后缀「 · <站名>」
  page=${title%% · *}
  len=${#page}
  if [[ "$page" == "FAQ" || "$len" -lt 40 || "$len" -gt 60 ]]; then
    echo "❌ $site  (${len})  $page"
    fail=$((fail+1)); failed+=("$site")
  else
    echo "✅ $site  (${len})  $page"
    pass=$((pass+1))
  fi
done

echo ""
echo "RESULT: $pass PASS / $fail FAIL"
[[ $fail -eq 0 ]] || echo "失败站点: ${failed[*]}"
exit $(( fail > 0 ))
