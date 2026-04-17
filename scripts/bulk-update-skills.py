#!/usr/bin/env python3
"""
Bulk update skill YAML files with verification sections
"""

import os
import re
from pathlib import Path

SKILLS_DIR = Path("/private/var/www/agentic-comparison/_data/skills")

VERIFICATION_BLOCK = """# ============================================
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
# ============================================
"""

def update_skill_file(filepath):
    """Update a single skill file with verification section"""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already has verification
    if 'verification:' in content:
        return False
    
    # Split into lines
    lines = content.split('\n')
    
    # Find where comments end and content begins
    comment_end = 0
    for i, line in enumerate(lines):
        if line.strip() and not line.startswith('#'):
            comment_end = i
            break
    
    # Keep comments, add verification, then rest of content
    comments = '\n'.join(lines[:comment_end])
    rest = '\n'.join(lines[comment_end:])
    
    new_content = f"{comments}\n\n{VERIFICATION_BLOCK}\n{rest}"
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    return True

def main():
    count = 0
    
    for category_dir in SKILLS_DIR.iterdir():
        if not category_dir.is_dir() or category_dir.name.startswith('_'):
            continue
        
        for skill_file in category_dir.glob('*.yml'):
            if update_skill_file(skill_file):
                count += 1
                print(f"Updated: {skill_file}")
    
    print(f"\nTotal skills updated: {count}")

if __name__ == '__main__':
    main()
