# Contributing to Agentic Comparison

Thank you for your interest in contributing! This document provides guidelines for contributing to the Agentic Comparison project.

## 🎯 Ways to Contribute

### 1. Update Tool Information

The most valuable contributions are keeping tool data current. Each tool lives in `_data/tools/<tool_name>.yml`.

#### What to Update

- **Version numbers** - When tools release new versions
- **Command references** - If command syntax changes
- **Feature availability** - New features added or removed
- **Pricing** - When pricing models change
- **MCP server support** - New servers or compatibility updates

#### Tool YAML Structure

```yaml
name: "Tool Name"
repo: "owner/repo"
command_prefix: "tool"
version:
  current: "1.2.3"
  last_verified: "2024-01-15"
  verified_by: "@contributor"
concepts:
  skill: "what they call skills"
  command: "what they call commands"
  agent: "what they call agents"
install:
  npm: "npm i -g tool"
  homebrew: "brew install tool"
  curl: "curl -fsSL https://tool.dev/install.sh | bash"
features:
  mcp_support: true
  offline_mode: false
  ide_integration: ["vscode", "jetbrains", "neovim"]
  context_window: 200000
pricing:
  free_tier:
    available: true
    limits: "100 requests/day"
  paid_tiers:
    - name: "Pro"
      price: "$20/month"
commands:
  - name: "help"
    invoke: "tool --help"
    description: "Show help information"
    category: "general"
    verified: true
```

### 2. Add a New Tool

To add a completely new agentic tool:

1. **Create the tool YAML file**
   ```bash
   cp _data/tools/_template.yml _data/tools/new_tool.yml
   ```

2. **Fill in all required fields**
   - Use the template as a guide
   - Check official documentation for accuracy
   - Include installation methods
   - Map at least 10 common commands

3. **Add the tool to feature matrix**
   Edit `_data/features.yml` and add the tool to relevant feature rows.

4. **Create a profile page**
   Create `tools/new_tool.html` with detailed information.

5. **Submit a PR**
   Include links to official documentation for verification.

### 3. Update Command References

Commands are mapped in `_data/commands.yml`:

```yaml
- canonical_name: "initialize_project"
  description: "Set up a new project in the current directory"
  category: "project"
  implementations:
    opencode: "opencode init"
    codex: "codex init"
    claude_code: "/init"
```

When updating:
- Use the **canonical name** consistently
- Verify command syntax from official docs
- Note any flags or options variations

### 4. Terminology Mappings

Add cross-references in `_data/terminology.yml`:

```yaml
canonical_concepts:
  - name: "reusable_block"
    description: "A reusable piece of prompt logic or functionality"
    tool_names:
      codex: "skill"
      claude_code: "command"
      opencode: "agent"
```

### 5. MCP Server Registry

Add new MCP servers to `_data/mcp_servers.yml`:

```yaml
- name: "filesystem"
  description: "Access and manipulate local files"
  repository: "modelcontextprotocol/servers"
  official: true
  compatibility:
    claude_code: 
      supported: true
      version: "0.1.0+"
    codex:
      supported: true
      version: "0.2.0+"
  setup_guide: "/mcp/filesystem-setup.html"
```

## 📝 YAML Schema Validation

All YAML files are validated against JSON Schema. The validation runs:

- **Locally**: Before committing
  ```bash
  npm run validate
  ```

- **In CI**: On every PR via GitHub Actions

### Common Validation Errors

| Error | Fix |
|-------|-----|
| `missing required property` | Add the missing field |
| `invalid type` | Check data type (string vs boolean vs array) |
| `enum value mismatch` | Use one of the allowed values |
| `pattern mismatch` | Fix regex pattern (e.g., semver format) |

## 🧪 Testing Locally

```bash
# Install dependencies
bundle install
npm install

# Build and serve locally
bundle exec jekyll serve --livereload

# Validate YAML data
npm run validate

# Run HTML proofer (checks links, images)
npm run test
```

## 🔄 Pull Request Process

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/update-tool-name
   ```

2. **Make your changes** following the guidelines above

3. **Update the "last verified" date** in any modified tool files
   ```yaml
   version:
     last_verified: "2024-01-15"  # Today's date
   ```

4. **Run validation** to ensure your changes pass
   ```bash
   npm run validate
   ```

5. **Commit your changes** with a clear message
   ```bash
   git commit -m "Update OpenCode to v1.2.3 - add new /explain command"
   ```

6. **Push to your fork** and submit a Pull Request

### PR Title Format

Use one of these prefixes:
- `data:` - Updates to tool data, commands, features
- `content:` - New tools, terminology mappings, MCP servers
- `fix:` - Corrections to existing data
- `docs:` - Documentation updates
- `feat:` - New site features or functionality

Examples:
```
data: Update Claude Code pricing for Pro tier
content: Add Aider tool comparison
fix: Correct Codex command syntax for /commit
```

### PR Description Template

```markdown
## Summary
Brief description of changes

## Tools Affected
- [ ] OpenCode
- [ ] Codex
- [ ] Claude Code
- [ ] Continue
- [ ] Aider
- [ ] Other: _____

## Type of Change
- [ ] New tool added
- [ ] Data update (version, pricing, commands)
- [ ] Bug fix
- [ ] Documentation

## Verification
- [ ] I verified this against official documentation
- [ ] Link to source: _____
- [ ] YAML validation passed locally
```

## 🏷️ Issue Labels

We use these labels to organize issues:

| Label | Use For |
|-------|---------|
| `data-update` | Outdated tool information |
| `new-tool` | Requests to add new tools |
| `terminology` | Terminology mapping issues |
| `mcp` | MCP server related |
| `good-first-issue` | Easy entry points for new contributors |
| `help-wanted` | Extra attention needed |
| `verified` | Data confirmed by tool maintainers |

## 💬 Community

- **Discussions**: Use GitHub Discussions for questions and ideas
- **Issues**: Report data inaccuracies or request new features
- **Discord**: Join our community (link coming soon)

## ⚖️ Code of Conduct

- Be respectful and constructive
- Focus on factual, verifiable information
- Cite official documentation when possible
- Accept that tool preferences are subjective

## 🙏 Recognition

Contributors will be:
- Listed in our CONTRIBUTORS.md file
- Mentioned in release notes for significant contributions
- Given credit on relevant tool pages (with permission)

## 📧 Questions?

Open an issue with the `question` label or start a GitHub Discussion.

---

**Thank you for helping developers navigate the agentic tooling landscape!** 🚀
