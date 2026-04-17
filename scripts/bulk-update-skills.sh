#!/bin/bash
# Bulk update all skills with verification sections

SKILLS_DIR="/private/var/www/agentic-comparison/_data/skills"
TEMPLATE_VERIFICATION='# ============================================
# VERIFICATION & TRUTH
# ============================================
verification:
  status: "community"
  last_verified: "2024-01-15"
  verified_by: "@community"
  next_review: "2024-04-15"

compatibility:
  codex:
    status: "unverified"
    as_of: null
  claude_code:
    status: "unverified"
    as_of: null
  cursor:
    status: "unverified"
    as_of: null
  opencode:
    status: "unverified"
    as_of: null

sources:
  documentation: null
  github: null
  npm: null

# ============================================
# BASIC INFO
# ============================================'

count=0
for file in "$SKILLS_DIR"/*/*.yml; do
  # Skip if already has verification
  if grep -q "^verification:" "$file" 2>/dev/null; then
    continue
  fi
  
  # Create temp file with verification prepended
  temp_file="${file}.tmp"
  
  # Get the category from the directory
  category=$(basename $(dirname "$file"))
  
  # Extract existing content after comments
  existing_content=$(grep -v "^#" "$file" | head -1)
  
  # Check if first line is a comment
  first_line=$(head -1 "$file")
  
  if [[ "$first_line" == \#* ]]; then
    # File starts with comments, keep them
    comments=$(sed -n '/^#/p' "$file")
    rest=$(sed -n '/^[^#]/,$p' "$file")
    
    echo "$comments" > "$temp_file"
    echo "" >> "$temp_file"
    echo "$TEMPLATE_VERIFICATION" >> "$temp_file"
    echo "" >> "$temp_file"
    echo "$rest" >> "$temp_file"
  else
    # File starts with content
    echo "$TEMPLATE_VERIFICATION" > "$temp_file"
    echo "" >> "$temp_file"
    cat "$file" >> "$temp_file"
  fi
  
  # Move temp file to original
  mv "$temp_file" "$file"
  
  count=$((count + 1))
  echo "Updated: $file"
done

echo ""
echo "Total skills updated: $count"
