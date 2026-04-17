# AI Skills Marketplace - Agentic Comparison for AI Coding Tools

**The ultimate skills marketplace for AI coding agents.** Browse, compare, and discover 40+ AI skills across 10+ agentic coding tools.

🔗 **Live Site:** https://odykyi.github.io/agentic-comparison/

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://odykyi.github.io/agentic-comparison/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills: 40+](https://img.shields.io/badge/Skills-40+-blue)](https://odykyi.github.io/agentic-comparison/skills/)
[![Tools: 10](https://img.shields.io/badge/Tools-10+-orange)](https://odykyi.github.io/agentic-comparison/tools/)

## 🎨 What is this Skills Marketplace?

This is a **comprehensive AI skills marketplace** that helps developers discover and compare AI coding agents. Think of it as a marketplace where you can find the best skills, commands, and capabilities across different AI tools.

**Tags:** `skills-marketplace` `ai-skills` `agent-skills` `mcp-servers` `ai-tools` `coding-agents`

## 🎯 Mission

The AI agent tooling landscape is exploding with multiple CLI-based coding agents (OpenCode, Codex, Claude Code, Cursor, Windsurf) each using different terminology and architecture patterns. This project serves as a **skills marketplace** and comparison hub to help developers understand which tool fits their needs and how concepts map between them.

**Example mapping**: "skills" in Codex ↔ "commands" in Claude Code ↔ "agents" in OpenCode ↔ "extensions" in Windsurf

## 🎨 AI Skills Marketplace

Welcome to the **AI Skills Marketplace** - a curated collection of 40+ AI skills for coding agents. This marketplace helps developers discover capabilities across different AI tools.

### Why a Skills Marketplace?

Different AI coding agents call their capabilities different things:

- **Codex** calls them "Skills"
- **Claude Code** calls them "Commands"
- **OpenCode** calls them "Agents"
- **Windsurf** calls them "Extensions"

This marketplace unifies them all so you can find what you need, regardless of the tool you use.

### Skill Categories in Our Marketplace

| Skill Category      | Description                                     |
| ------------------- | ----------------------------------------------- |
| **Code Generation** | Generate components, functions, and boilerplate |
| **Refactoring**     | Modernize and restructure existing code         |
| **Testing**         | Generate unit, integration, and E2E tests       |
| **Documentation**   | Auto-generate README, API docs, and comments    |
| **Security Audit**  | Scan for vulnerabilities and security issues    |
| **DevOps**          | CI/CD, Docker, and infrastructure automation    |
| **Database**        | Schema design, migrations, and optimization     |

[Browse all skills →](https://odykyi.github.io/agentic-comparison/skills/)

## 🛠️ Tools Compared (9 AI Coding Agents)

| Tool                   | Repository                                                                | Command Prefix | MCP | Skills/Commands |
| ---------------------- | ------------------------------------------------------------------------- | -------------- | --- | --------------- |
| **OpenCode**           | [saoirse-opencode/opencode](https://github.com/saoirse-opencode/opencode) | `opencode`     | ✅  | Agents          |
| **OpenAI Codex**       | [openai/codex](https://github.com/openai/codex)                           | `codex`        | ✅  | Skills          |
| **Claude Code**        | [anthropics/claude-code](https://github.com/anthropics/claude-code)       | `claude`       | ✅  | Commands        |
| **Cursor**             | [getcursor/cursor](https://cursor.sh)                                     | `cursor`       | ✅  | Extensions      |
| **Windsurf**           | [windsurf](https://windsurf.com)                                          | `windsurf`     | ✅  | Cascade         |
| **GitHub Copilot CLI** | [github/copilot.vim](https://github.com/github/copilot.vim)               | `gh copilot`   | ✅  | Chat            |
| **Google Antigravity** | [google](https://google.com)                                              | Various        | ✅  | Assistants      |
| **Junie**              | [junie](https://junie.ai)                                                 | `junie`        | ✅  | Agents          |

## 📊 Comparison Dimensions

- ✅ **Feature Matrix** - Core capabilities side-by-side
- 📝 **Command Reference** - How to do the same thing in each tool
- 🗣️ **Terminology Mapper** - "What you call X, they call Y"
- 🔌 **MCP Registry** - Model Context Protocol server compatibility
- 💰 **Pricing Calculator** - Cost comparison with usage estimates
- 🎨 **UI Showcase** - Terminal interface and IDE integration comparisons

## 🚀 Quick Start (Local Development)

### Prerequisites

- Ruby 3.0+ with Bundler (recommended)
- Node.js 18+ (for build tooling)

> **Note:** If you have Ruby 2.6, you may encounter native extension compilation issues on macOS. See [Ruby 2.6 Workarounds](#ruby-26-workarounds) below.

### Installation

```bash
# Clone the repository
git clone https://github.com/odykyi/agentic-comparison.git
cd agentic-comparison

# Install Ruby dependencies (Ruby 3.0+)
bundle install

# Alternative for Ruby 2.6 users - use Docker:
# docker run -v $(pwd):/srv/jekyll -p 4000:4000 jekyll/jekyll:3.8

# Alternative for Ruby 2.6 - skip bundle install and use GitHub Pages:
# The site will work fine when deployed to GitHub Pages even without local bundle

# Install Node dependencies (for build tooling)
npm install

# Start local server
bundle exec jekyll serve --livereload

# For Ruby 2.6 without eventmachine (no live reload):
# bundle exec jekyll serve --no-watch
```

Visit `http://localhost:4000` to view the site.

### Ruby 2.6 Workarounds

If you're on Ruby 2.6 and experiencing native extension build failures (particularly with `eventmachine`):

**Option 1: Use Docker (Recommended)**

```bash
docker run --rm \
  -v $(pwd):/srv/jekyll \
  -p 4000:4000 \
  -e JEKYLL_ENV=development \
  jekyll/jekyll:3.8 \
  jekyll serve --watch --force_polling --livereload
```

**Option 2: Use the Docker Gemfile**

```bash
mv Gemfile.docker Gemfile
bundle install
bundle exec jekyll serve
```

**Option 3: Skip local setup and rely on GitHub Pages**
Since this is a Jekyll site for GitHub Pages, you can:

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. GitHub will automatically build and deploy the site
4. Make edits and view changes after deployment

**Option 4: Upgrade Ruby to 3.0+**
Using rbenv or rvm:

```bash
# Using rbenv
rbenv install 3.1.0
rbenv local 3.1.0
bundle install
```

# Install Node dependencies (for asset building)

npm install

# Start local server

bundle exec jekyll serve --livereload

````

Visit `http://localhost:4000` to view the site.

### Building for Production

```bash
# Build the site
bundle exec jekyll build

# The built site will be in `_site/` directory
````

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

- 🐛 [Report issues](https://github.com/odykyi/agentic-comparison/issues)
- 💡 [Suggest features](https://github.com/odykyi/agentic-comparison/discussions)
- 🗣️ [Join our Discord](https://discord.gg/YOUR_INVITE) (coming soon)

---

## 🔍 About This Skills Marketplace

**Agentic Comparison** is an open-source **skills marketplace** for AI coding agents. Our goal is to make it easy for developers to discover and compare AI capabilities across different tools.

### Search Keywords

If you're looking for:

- `skills marketplace` - You're in the right place!
- `ai skills` - We have 40+ documented
- `agent skills` - Listed by tool
- `ai tools marketplace` - Compare 10+ tools
- `mcp marketplace` - Registry included

### Related Searches

People searching for this skills marketplace also look for:

- AI coding agents comparison
- Claude Code vs Codex vs Cursor
- MCP servers list
- AI developer tools
- Agentic AI tools

**Made with ❤️ for the AI coding agent community**

**[⬆ Back to Top](#ai-skills-marketplace---agentic-comparison-for-ai-coding-tools)**
