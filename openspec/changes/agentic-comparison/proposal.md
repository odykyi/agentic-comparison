## Why

The AI agent tooling landscape is exploding with multiple CLI-based coding agents (OpenCode, Codex, Claude Code, Continue, Aider) each using different terminology and architecture patterns. Developers struggle to understand which tool fits their needs and how concepts map between them—e.g., "skills" in Codex vs "commands" in Claude Code vs "agents" in OpenCode. A unified comparison resource would help developers make informed decisions and ease migration between tools.

## What Changes

- Create a Jekyll-based static site at `agentic-comparison.dev`
- Build comprehensive comparison matrices across 6+ agentic tools
- Map equivalent concepts: agents/commands/skills, MCP integrations, context management
- Include feature comparisons: terminal UI, IDE support, pricing models, extensibility
- Add interactive filtering and search capabilities
- Provide command equivalency tables (e.g., `/help` in Claude Code vs `codex --help` vs `opencode help`)
- Document MCP support and tool integration patterns
- **BREAKING**: New repository structure with `_data/` YAML files for comparison data

## Capabilities

### New Capabilities
- `comparison-matrix`: Multi-dimensional comparison tables for agentic tools with feature filtering and search
- `terminology-mapper`: Cross-reference system mapping equivalent concepts across tools (skills↔commands↔agents)
- `command-reference`: Equivalency tables showing how to perform the same action in different tools
- `mcp-registry`: Catalog of MCP server support and integrations across different agent platforms
- `feature-profiles`: Tool-specific deep-dive pages with architecture diagrams and capability breakdowns
- `ui-showcase`: Visual comparison of terminal interfaces, command palettes, and interaction patterns
- `pricing-calculator`: Interactive cost comparison based on usage patterns (API calls, token consumption)

### Modified Capabilities
- None (this is a greenfield project)

## Impact

- **Repository**: New GitHub repo `agentic-comparison` with Jekyll/GitHub Pages setup
- **Data Structure**: YAML-based data files in `_data/` for maintainable comparisons
- **Build Pipeline**: GitHub Actions for Jekyll build and deployment to GitHub Pages
- **Dependencies**: Jekyll 4.x, Bootstrap 5, DataTables.js for interactivity
- **Content**: Requires ongoing maintenance as tools evolve (version tracking system needed)
- **Community**: Open to contributions via standardized YAML schema and PR templates
