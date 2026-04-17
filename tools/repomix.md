---
layout: tool
tool_name: "Repomix"
tool_slug: repomix
tool_logo: /assets/images/tools/repomix.svg
tool_repo: yamadashy/repomix
tool_website: https://repomix.com
tool_command: repomix
tool_description: "Pack your codebase into AI-friendly formats"
tool_version: "0.40.0"
tool_license: MIT
tool_language: TypeScript
tool_last_updated: "2024-04-17"
---

## Overview

Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. It's perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, and more.

**Key Features:**

- **AI-Optimized**: Formats your codebase for easy AI understanding
- **Token Counting**: Shows token counts to manage LLM context limits
- **Multiple Output Formats**: XML, Markdown, JSON, or Plain Text
- **Git-Aware**: Respects `.gitignore`, `.ignore`, and `.repomixignore`
- **Security-Focused**: Built-in Secretlint to detect sensitive data
- **Code Compression**: Uses Tree-sitter to extract key code elements
- **Remote Repos**: Pack any public GitHub repo without cloning

## Installation

```bash
# Using npm
npm install -g repomix

# Using yarn
yarn global add repomix

# Using bun
bun add -g repomix

# Using Homebrew
brew install repomix

# Or run without installing
npx repomix@latest
```

## Quick Start

```bash
# Pack current repository
repomix

# Pack specific directory
repomix path/to/directory

# Pack remote repository
repomix --remote yamadashy/repomix

# Pack with Markdown output
repomix --style markdown

# Compress output (extract key code elements)
repomix --compress

# Show token count tree
repomix --token-count-tree
```

## Usage Examples

**Include specific files:**

```bash
repomix --include "src/**/*.ts,**/*.md"
```

**Exclude patterns:**

```bash
repomix --ignore "**/*.test.js,tmp/"
```

**Pack from stdin:**

```bash
git ls-files "*.ts" | repomix --stdin
```

**Include git history:**

```bash
repomix --include-logs --include-logs-count 10
```

## Resources

- [GitHub Repository](https://github.com/yamadashy/repomix)
- [Web Interface](https://repomix.com)
- [Chrome Extension](https://chromewebstore.google.com/detail/repomix/fimfamikepjgchehkohedilpdigcpkoa)
- [Discord Community](https://discord.gg/wNYzTwZFku)
