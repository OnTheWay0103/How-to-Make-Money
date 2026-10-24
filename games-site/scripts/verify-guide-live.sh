#!/bin/zsh
# verify-guide-live.sh — 部署后内容级复验
# 用法: ./verify-guide-live.sh <site> <slug> <marker> [marker2 ...]
set -euo pipefail
site="${1:?usage: verify-guide-live.sh <site> <slug> <marker...>}"
slug="${2:?usage: verify-guide-live.sh <site> <slug> <marker...>}"
shift 2
url="https://${site}.vercel.app/guides/${slug}"
body=$(curl -s -m 25 -L "$url") || { echo "FAIL curl $url"; exit 1 }
code=$(curl -s -o /dev/null -m 25 -w "%{http_code}" -L "$url")
echo "URL: $url"
echo "HTTP: $code  bytes: ${#body}"
fail=0
for m in "$@"; do
  n=$(printf '%s' "$body" | grep -c -- "$m" || true)
  echo "  marker [$m] hits=$n"
  [[ "$n" -gt 0 ]] || fail=1
done
[[ "$code" == "200" && "$fail" == "0" ]] && echo "RESULT: PASS" || echo "RESULT: FAIL"
exit $fail
