# AI Tools Feature Review

## Summary Matrix

| Tool                   | MCP | Offline | IDE Integration            | Skills System                | Notes                      |
| ---------------------- | --- | ------- | -------------------------- | ---------------------------- | -------------------------- |
| **Claude Code**        | ✅  | ❌      | None                       | Commands (.claude/commands/) | Natural language commands  |
| **OpenAI Codex**       | ✅  | ❌      | VS Code                    | Skills (.codex/skills/)      | Skills marketplace leader  |
| **Cursor**             | ✅  | ❌      | VS Code                    | Extensions                   | Editor with AI built-in    |
| **Windsurf**           | ✅  | ❌      | Windsurf IDE, JetBrains    | Cascade                      | 70+ MCP servers, memories  |
| **Junie**              | ✅  | ❌      | All JetBrains IDEs         | Skills                       | JetBrains native           |
| **GitHub Copilot CLI** | ✅  | ❌      | VS Code, JetBrains, Neovim | None                         | CLI extension for gh       |
| **OpenCode**           | ✅  | ❌      | VS Code, JetBrains         | Agents                       | MIT licensed               |
| **Google Antigravity** | ✅  | ❌      | Web IDE                    | None                         | Web-based (idx.google.com) |

## Detailed Review by Tool

### 1. Claude Code ✅ GOOD

- **MCP**: Yes (filesystem, github, figma)
- **Command System**: `.claude/commands/` (markdown with frontmatter)
- **Strength**: Natural language interface (no slash commands needed)
- **Models**: Claude-3 only
- **Context**: 200k tokens

### 2. OpenAI Codex ✅ GOOD

- **MCP**: Yes (filesystem, github, web_search)
- **Skill System**: `.codex/skills/` (markdown with frontmatter)
- **Strength**: Skills marketplace concept
- **Models**: GPT-4o, GPT-4o-mini, o1, o1-mini
- **License**: Apache-2.0 (open source!)

### 3. Cursor ✅ GOOD

- **MCP**: Yes (implied by extensions)
- **IDE**: VS Code fork
- **Strength**: Editor-first approach
- **Models**: GPT-4, Claude-3.5-sonnet, cursor-small

### 4. Windsurf ✅ GOOD

- **MCP**: Yes (filesystem, github, figma, slack, stripe, postgres, playwright)
- **Unique**: Cascade (agentic AI), Memories, Rules
- **Strength**: 70+ MCP servers, turbo mode
- **Models**: GPT-4, GPT-4o, Claude-3, Gemini-3.1

### 5. Junie ✅ GOOD

- **MCP**: Yes
- **IDE**: All JetBrains (IntelliJ, PyCharm, WebStorm, etc.)
- **Strength**: Native JetBrains integration

### 6. GitHub Copilot CLI ✅ FIXED

- **MCP**: ✅ Yes (was incorrectly set to false, now fixed)
- **Type**: CLI extension (requires `gh` CLI)
- **Strength**: Works across all Copilot-enabled IDEs
- **Limitation**: Not a standalone agent

### 7. OpenCode ✅ GOOD

- **MCP**: Yes (filesystem, github, fetch)
- **Concept**: Agents
- **License**: MIT (fully open source)
- **Strength**: Unified interface

### 8. Google Antigravity ⚠️ QUESTIONABLE

## Issues Found & Fixed

1. **GitHub Copilot CLI** - `mcp_support: false` → `true` ✅ FIXED

## Recommendations

1. **Verify Google Antigravity MCP** - Web-based IDEs may not support local MCP servers
2. **Add MCP server lists** to tools that support them but don't document them
3. **Add `commands_file` or `skills_file` entries** for tools with custom configuration
4. **Verify offline_mode** - Most tools marked false (correct, they need API keys)

## To-Do

- [ ] Verify Google Antigravity actual MCP capabilities
- [ ] Add `mcp_servers` section to Cursor.yml (if supported)
- [ ] Add `mcp_servers` section to Junie.yml
- [ ] Add `mcp_servers` section to Google Antigravity.yml
- [ ] Update README table to reflect accurate MCP status
