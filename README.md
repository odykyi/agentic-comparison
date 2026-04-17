# Agentic Comparison

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://agentic-comparison.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive comparison resource for AI agentic coding tools.

## 🎯 Mission

The AI agent tooling landscape is exploding with multiple CLI-based coding agents (OpenCode, Codex, Claude Code, Continue, Aider) each using different terminology and architecture patterns. This project helps developers understand which tool fits their needs and how concepts map between them.

**Example mapping**: "skills" in Codex ↔ "commands" in Claude Code ↔ "agents" in OpenCode

## 🛠️ Tools Compared

| Tool | Repository | Command Prefix |
|------|------------|----------------|
| **OpenCode** | [saoirse-opencode/opencode](https://github.com/saoirse-opencode/opencode) | `opencode` |
| **OpenAI Codex** | [openai/codex](https://github.com/openai/codex) | `codex` |
| **Claude Code** | [anthropics/claude-code](https://github.com/anthropics/claude-code) | `claude` |
| **Continue.dev** | [continuedev/continue](https://github.com/continuedev/continue) | IDE extension |
| **Aider** | [Aider-AI/aider](https://github.com/Aider-AI/aider) | `aider` |
| **GitHub Copilot CLI** | [github/copilot.vim](https://github.com/github/copilot.vim) | `gh copilot` |

## 📊 Comparison Dimensions

- ✅ **Feature Matrix** - Core capabilities side-by-side
- 📝 **Command Reference** - How to do the same thing in each tool
- 🗣️ **Terminology Mapper** - "What you call X, they call Y"
- 🔌 **MCP Registry** - Model Context Protocol server compatibility
- 💰 **Pricing Calculator** - Cost comparison with usage estimates
- 🎨 **UI Showcase** - Terminal interface and IDE integration comparisons

## 🚀 Quick Start (Local Development)

### Prerequisites

- Ruby 3.0+ with Bundler
- Node.js 18+ (for build tooling)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/agentic-comparison.git
cd agentic-comparison

# Install Ruby dependencies
bundle install

# Install Node dependencies (for asset building)
npm install

# Start local server
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000` to view the site.

### Building for Production

```bash
# Build the site
bundle exec jekyll build

# The built site will be in `_site/` directory
```

## 📁 Project Structure

```
agentic-comparison/
├── _data/                    # YAML data files
│   ├── tools/               # Tool definitions
│   ├── features.yml         # Feature categories
│   ├── commands.yml         # Command mappings
│   ├── terminology.yml      # Terminology mappings
│   └── mcp_servers.yml      # MCP server registry
├── _layouts/                # Jekyll layouts
├── _includes/               # Reusable components
├── _sass/                   # SCSS stylesheets
├── assets/                  # Static assets
│   ├── css/
│   ├── js/
│   └── images/
├── tools/                   # Tool profile pages
├── features/                # Feature comparison
├── commands/                # Command reference
├── terminology/             # Terminology mapper
├── mcp/                     # MCP registry
├── pricing/                 # Pricing calculator
├── ui/                      # UI showcase
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies
└── package.json            # Node dependencies
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Contribution Ideas

- 🆕 Add a new agentic tool to the comparison
- 📝 Update outdated command references
- 🐛 Report incorrect terminology mappings
- 🌐 Add translations
- 🎨 Improve UI/UX

### Data-Driven Contributions

All comparison data lives in YAML files under `_data/`. To update information:

1. Edit the relevant YAML file
2. Validate your changes with our schema validator
3. Submit a PR with your changes

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Tool logos and trademarks belong to their respective owners
- Built with [Jekyll](https://jekyllrb.com/) and [Bootstrap 5](https://getbootstrap.com/)

## 📬 Contact

- 🐛 [Report issues](https://github.com/YOUR_USERNAME/agentic-comparison/issues)
- 💡 [Suggest features](https://github.com/YOUR_USERNAME/agentic-comparison/discussions)
- 🗣️ [Join our Discord](https://discord.gg/YOUR_INVITE) (coming soon)

---

**Made with ❤️ for the AI coding agent community**
