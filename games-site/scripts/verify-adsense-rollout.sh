#!/bin/zsh
# ============================================================
# verify-adsense-rollout.sh — AdSense P0 整改的线上内容级验证
#
# 用途：批量验证各站线上状态（不依赖 deploy-wiki-site.sh 退出码——
#       该脚本第 3 步在并发部署下会误报，见 04 Profile 部署规则）。
#
# 用法:
#   ./scripts/verify-adsense-rollout.sh                 # 验证全部 41 站
#   ./scripts/verify-adsense-rollout.sh themoundwiki    # 只验证指定站
#
# 验证项（每站 4 项，全绿才算通过）:
#   1. 首页 HTTP 200
#   2. /icon.png HTTP 200            （A2 图标补全是否上线）
#   3. /privacy 含新统一表述          （A1 隐私页修正是否上线）
#   4. /privacy 不含旧表述            （残留必须为 0）
#
# 网络：需要走本机代理（macOS 系统代理 127.0.0.1:1087）；直连会 000。
# ============================================================
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR/.."

export https_proxy=${https_proxy:-http://127.0.0.1:1087}
export http_proxy=${http_proxy:-http://127.0.0.1:1087}

NEW_TEXT='We may display advertisements on this website through Google AdSense'
OLD_TEXT='We use Google AdSense'

sites=("$@")
if (( ${#sites[@]} == 0 )); then
  sites=(${(f)"$(ls -d */ | sed 's#/##' | grep 'wiki$')"})
fi

pass=0; fail=0
printf "%-28s %5s %5s %6s %6s  %s\n" "站点" "首页" "icon" "新表述" "旧残留" "判定"
printf -- "%.0s─" {1..72}; echo

for s in $sites; do
  base="https://$s.vercel.app"
  h=$(curl -s -o /dev/null -w "%{http_code}" -m 25 "$base/")
  i=$(curl -s -o /dev/null -w "%{http_code}" -m 25 "$base/icon.png")
  body=$(curl -s -m 25 "$base/privacy")
  p=$(printf '%s' "$body" | grep -c "$NEW_TEXT")
  o=$(printf '%s' "$body" | grep -c "$OLD_TEXT")

  if [[ "$h" == "200" && "$i" == "200" && "$p" -ge 1 && "$o" -eq 0 ]]; then
    verdict="✅ PASS"; ((pass++))
  else
    verdict="❌ FAIL"; ((fail++))
  fi
  printf "%-28s %5s %5s %6s %6s  %s\n" "$s" "$h" "$i" "$p" "$o" "$verdict"
done

echo
echo "汇总：PASS $pass / FAIL $fail （共 $((pass+fail)) 站）"
[[ $fail -eq 0 ]]
