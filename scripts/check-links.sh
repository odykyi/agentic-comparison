#!/bin/bash
# Comprehensive Link Checker for Agentic Comparison
# Usage: ./scripts/check-links.sh

echo "=== Link Validation Report ==="
echo "Generated: $(date)"
echo ""

# Track results
BROKEN=0
WORKING=0
SKIPPED=0

# Helper function to check URL
check_url() {
  local url=$1
  local name=$2
  local file=$3
  
  # Skip empty or null URLs
  if [ -z "$url" ] || [ "$url" == "null" ] || [ "$url" == "" ]; then
    SKIPPED=$((SKIPPED+1))
    return
  fi
  
  # Skip template URLs
  if [[ "$url" == *"tool-website.com"* ]] || [[ "$url" == *"owner/repo"* ]] || [[ "$url" == *"example.com"* ]]; then
    SKIPPED=$((SKIPPED+1))
    return
  fi
  
  # Check the URL
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" --max-time 10 "$url" 2>&1)
  
  if [ "$STATUS" == "200" ] || [ "$STATUS" == "301" ] || [ "$STATUS" == "302" ] || [ "$STATUS" == "308" ]; then
    WORKING=$((WORKING+1))
  elif [ "$STATUS" == "403" ]; then
    # 403 might be a block, not necessarily broken
    echo "⚠️  BLOCKED (403): $name"
    echo "    URL: $url"
    echo "    File: $file"
    echo ""
    BROKEN=$((BROKEN+1))
  else
    echo "❌ BROKEN ($STATUS): $name"
    echo "    URL: $url"
    echo "    File: $file"
    echo ""
    BROKEN=$((BROKEN+1))
  fi
}

echo "--- Checking Tool Repos ---"
for file in _data/tools/*.yml; do
  if [ "$file" == "_data/tools/_template.yml" ]; then
    continue
  fi
  
  repo=$(grep "^repo:" "$file" | head -1 | sed 's/repo: //' | sed 's/"//g' | sed "s/'//g" | tr -d ' ')
  tool_name=$(grep "^name:" "$file" | head -1 | sed 's/name: //' | sed 's/"//g' | sed "s/'//g")
  
  if [ -n "$repo" ] && [[ ! "$repo" == *"owner/repo"* ]]; then
    check_url "https://github.com/$repo" "$tool_name (repo)" "$file"
  fi
done

echo ""
echo "--- Checking Tool Websites ---"
for file in _data/tools/*.yml; do
  if [ "$file" == "_data/tools/_template.yml" ]; then
    continue
  fi
  
  website=$(grep "^website:" "$file" | head -1 | sed 's/website: //' | sed 's/"//g' | sed "s/'//g" | tr -d ' ')
  tool_name=$(grep "^name:" "$file" | head -1 | sed 's/name: //' | sed 's/"//g' | sed "s/'//g")
  
  if [ -n "$website" ] && [[ ! "$website" == *"tool-website.com"* ]]; then
    check_url "$website" "$tool_name (website)" "$file"
  fi
done

echo ""
echo "--- Checking Documentation URLs ---"
for file in _data/tools/*.yml; do
  if [ "$file" == "_data/tools/_template.yml" ]; then
    continue
  fi
  
  docs=$(grep "^docs:" "$file" | head -1 | sed 's/docs: //' | sed 's/"//g' | sed "s/'//g" | tr -d ' ')
  tool_name=$(grep "^name:" "$file" | head -1 | sed 's/name: //' | sed 's/"//g' | sed "s/'//g")
  
  if [ -n "$docs" ]; then
    check_url "$docs" "$tool_name (docs)" "$file"
  fi
done

echo ""
echo "--- Checking Source URLs in YAML ---"
grep -r "source:" _data/tools/*.yml | grep -v "source: null" | grep -v "#" | while read line; do
  file=$(echo "$line" | cut -d: -f1)
  url=$(echo "$line" | sed 's/.*source: //' | sed 's/"//g' | sed "s/'//g" | tr -d ' ')
  
  if [ -n "$url" ] && [[ ! "$url" == *"docs.tool-website.com"* ]] && [[ ! "$url" == *"example.com"* ]]; then
    check_url "$url" "Source reference" "$file"
  fi
done

echo ""
echo "=== Summary ==="
echo "✅ Working: $WORKING"
echo "⚠️  Issues: $BROKEN"
echo "⏭️  Skipped (templates/empty): $SKIPPED"
echo ""
echo "Total checked: $((WORKING+BROKEN))"

if [ $BROKEN -gt 0 ]; then
  echo ""
  echo "⚠️  Found $BROKEN broken or blocked links!"
  exit 1
else
  echo "✅ All links working!"
  exit 0
fi
