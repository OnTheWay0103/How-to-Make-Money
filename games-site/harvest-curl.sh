#!/bin/bash
# Google Suggest Harvester — curl 版（自动走代理）
set -e

PREFIXES=("" "how+to+" "best+" "guide+" "tips+" "beginner+" "weapons+" "build+" "solo+" "co+op+" "tier+list+")

declare -A GAMES
GAMES["Witchspire"]="witchspire"
GAMES["Mistfall-Hunter"]="mistfall+hunter"
GAMES["Echoes-of-Aincrad"]="echoes+of+aincrad"
GAMES["The-Mound-Omen-of-Cthulhu"]="the+mound+omen+of+cthulhu"

DIR="./keyword-results"
mkdir -p "$DIR"

for name in "${!GAMES[@]}"; do
  query="${GAMES[$name]}"
  echo "🎮 $name"
  ALL_KW=""
  declare -A SEEN

  for prefix in "${PREFIXES[@]}"; do
    q="${prefix}${query}"
    # Call Google Suggest API through proxy
    result=$(curl -s --max-time 15 \
      "https://suggestqueries.google.com/complete/search?client=chrome&q=${q}" 2>/dev/null)
    
    # Extract suggestions from JSON array
    suggestions=$(echo "$result" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    for s in data[1]:
        print(s)
except: pass
" 2>/dev/null)
    
    count=0
    while IFS= read -r line; do
      if [ -n "$line" ] && [ -z "${SEEN[$line]}" ]; then
        SEEN["$line"]=1
        ALL_KW+="$line"$'\n'
        count=$((count+1))
      fi
    done <<< "$suggestions"
    
    echo -n "."
    sleep 0.5
  done

  # Generate markdown
  total=$(echo "$ALL_KW" | grep -c . 2>/dev/null || echo 0)
  md="$DIR/$name.md"
  echo "# $name — Google Suggest Keywords" > "$md"
  echo "> $total unique keywords" >> "$md"
  echo "" >> "$md"
  echo "$ALL_KW" | sort -u | while read kw; do
    echo "- $kw" >> "$md"
  done
  echo " ✅ $total keywords → $md"
  unset SEEN
done

echo ""
echo "✨ Done! Results in $DIR/"
