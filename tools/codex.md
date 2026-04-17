---
layout: tool
tool_name: "OpenAI Codex"
tool_slug: codex
tool_logo: /assets/images/tools/codex.svg
tool_repo: openai/codex
tool_website: https://openai.com/codex
tool_command: codex
tool_description: "A lightweight coding agent from OpenAI that runs locally in your terminal, featuring a skills system stored in .codex/skills/."
tool_version: "0.121.0"
tool_license: Apache-2.0
tool_language: Rust
tool_last_updated: "2024-01-15"
---

{% assign tool = site.data.tools.codex %}

## Overview

{{ tool.name }} is OpenAI's official coding agent that brings the power of GPT-4o directly to your terminal.

## Installation

### Via npm

```bash
npm install -g @openai/codex
```

### Via Homebrew

```bash
brew install --cask codex
```

## Quick Start

1. **Sign in**
   ```bash
   codex
   ```

2. **Start coding**
   ```bash
   codex review
   ```

## Resources

- [Official Documentation](https://help.openai.com/en/articles/11096431-codex-cli)
- [GitHub Repository](https://github.com/openai/codex)
