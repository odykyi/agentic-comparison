## Context

The Agentic Comparison site currently has navigation for Features, Commands, Terminology, MCP, Pricing, and Tools. Users discover AI coding agents but lack a central place to discover and install skills/plugins for these tools.

This change adds a Skills Marketplace - a curated gallery of popular skills with one-click install commands. Similar to VS Code's extension marketplace or npm's package registry, but specifically for AI agent skills.

**Current site structure:**

- Jekyll-based static site with Bootstrap 5
- Data-driven tools in `_data/tools/`
- Navigation in `_includes/navigation.html`
- Each tool has a dedicated page with front matter

**Constraints:**

- Static site (GitHub Pages)
- No backend/database
- Skills data will live in YAML files (like tools)
- Client-side JavaScript for interactivity

## Goals / Non-Goals

**Goals:**

- Provide a discoverable, browsable list of popular AI agent skills
- Show which tools each skill is compatible with
- Generate correct install commands for each tool (Codex, Claude Code, OpenCode, etc.)
- Enable one-click copy of install commands
- Integrate seamlessly with existing navigation and design system

**Non-Goals:**

- Backend marketplace with payments or ratings
- Skill execution or hosting
- User accounts or personal skill collections
- Real-time skill availability checking

## Decisions

### Decision 1: Data Structure - YAML files in `_data/skills/`

**Rationale:** Consistent with existing tools data structure. Easy to maintain via PRs. Version controlled.

**Alternative considered:** JSON files - rejected because Jekyll's native YAML support is cleaner and consistent with existing patterns.

### Decision 2: One Page vs Multi-Page

**Approach:** Single `/skills/` page with featured skills and filtering

**Rationale:** Simpler for static site. All skills load at once (they'll be < 100 items initially). No pagination complexity.

**Alternative considered:** Individual skill pages - rejected because adds complexity without significant benefit for static content.

### Decision 3: Install Command Generation

**Approach:** Template-based command generation stored in skill data

Example:

```yaml
install_commands:
  codex: "codex skills install {{ skill.slug }}"
  claude_code: "claude skills install {{ skill.slug }}"
  opencode: "opencode skills install {{ skill.slug }}"
```

**Rationale:** Each tool has different CLI syntax. Pre-defining commands ensures accuracy.

### Decision 4: Navigation Placement

**Placement:** Between "MCP" and "Pricing"

**Rationale:** Logically groups with other resource/discovery tabs. MCP Registry and Skills Marketplace are both "extension/plugin" concepts.

### Decision 5: Copy-to-Clipboard vs Direct Install

**Approach:** Copy command to clipboard only

**Rationale:** Cannot execute shell commands from a static webpage. Copy is the best UX possible within browser security constraints. User pastes in their terminal.

## Risks / Trade-offs

| Risk                                  | Mitigation                                                            |
| ------------------------------------- | --------------------------------------------------------------------- |
| Skill commands become outdated        | Add "Last verified" date; community PRs for updates; periodic review  |
| Skills don't exist for all tools      | Only show skills compatible with that tool; mark tool support clearly |
| Large YAML file size                  | Keep skill descriptions concise; lazy load if > 50 skills             |
| Command syntax varies by tool version | Document minimum version; add version compatibility field             |

## Migration Plan

No migration needed - purely additive feature.

**Deploy steps:**

1. Merge PR with all changes
2. GitHub Pages auto-deploys
3. Verify navigation renders correctly
4. Test skill card copy functionality

## Open Questions

1. Should we include a "Submit a Skill" CTA linking to GitHub issues?
2. How many skills to feature initially (recommend 6-12)?
3. Should we add a "Popular" or "Trending" sort, or just static featured list?
