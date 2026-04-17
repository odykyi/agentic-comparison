## Context

This project creates a comparison site for AI agentic coding tools. The landscape includes:

**Primary Tools to Compare:**
- **OpenCode** (Saoirse): CLI with skills, commands, agents, and MCP support
- **OpenAI Codex**: Rust-based CLI with `.codex/skills/` system
- **Claude Code**: Node.js CLI with `.claude/commands/` and `.claude-plugin/` architecture
- **Continue**: IDE extension with multi-provider support
- **Aider**: Python-based pair programming tool
- **GitHub Copilot CLI**: Microsoft's offering

**Research Findings:**
- Codex uses "skills" stored in `.codex/skills/` as markdown files with structured frontmatter
- Claude Code uses "commands" in `.claude/commands/` with similar but different structure
- Both support MCP (Model Context Protocol) but implementation differs
- Terminology varies wildly: agents vs commands vs skills vs plugins
- No unified resource exists comparing these dimensions

**Constraints:**
- Static site for GitHub Pages (no backend)
- YAML-driven data for easy community contributions
- Mobile-responsive design
- Fast load times with DataTables.js for interactivity

## Goals / Non-Goals

**Goals:**
- Create intuitive comparison matrices showing feature parity across tools
- Map terminology equivalencies (e.g., Codex "skill" = Claude Code "command" = OpenCode "agent")
- Provide command equivalency tables for common operations
- Build searchable, filterable tables for 10+ comparison dimensions
- Enable community contributions via simple YAML edits
- Support 6+ agentic tools at launch with extensible architecture

**Non-Goals:**
- Real-time pricing data (use periodic snapshots)
- Benchmarks or performance comparisons (too variable)
- User reviews or ratings (out of scope)
- Integration testing or validation
- Video content (initial release)

## Decisions

### 1. Jekyll + GitHub Pages vs Dynamic Site
**Decision**: Use Jekyll 4.x with GitHub Pages
**Rationale**: 
- Free hosting, version controlled content
- Community can PR changes easily
- No backend maintenance required

**Alternatives Considered**: 
- Next.js + Vercel (more complex, requires API routes for dynamic features)
- VuePress (less familiar to potential contributors)

### 2. YAML Data Structure vs Database
**Decision**: YAML files in `_data/` directory
**Rationale**:
- Git-native (version history, diffable)
- Easy for non-developers to contribute
- Jekyll natively supports `_data` folder
- Schema validation via GitHub Actions

**Structure**:
```yaml
# _data/tools/opencode.yml
name: "OpenCode"
repo: "saoirse-opencode/opencode"
command_prefix: "opencode"
concepts:
  skill: "agent"  # Their terminology
  command: "slash command"
install:
  npm: "npm i -g @opencode/cli"
  homebrew: "brew install opencode"
features:
  mcp_support: true
  offline_mode: false
  ide_integration: ["vscode", "jetbrains"]
commands:
  - name: "help"
    invoke: "opencode help"
    description: "Show help"
```

### 3. Comparison Matrix Architecture
**Decision**: Multi-table approach with DataTables.js
**Rationale**:
- Single page per comparison dimension
- JavaScript filtering prevents page reloads
- Progressive enhancement (works without JS)

**Pages**:
- `/features/` - Core capability matrix
- `/commands/` - Command equivalency
- `/terminology/` - Concept mapping
- `/mcp/` - MCP server support
- `/pricing/` - Cost comparison
- `/tools/<name>/` - Individual tool deep-dive

### 4. Terminology Mapping Strategy
**Decision**: Canonical concept approach with tool-specific aliases
**Rationale**:
- Establish neutral vocabulary ("reusable prompt block")
- Map each tool's terminology to canonical terms
- Show "In Codex: skill / In Claude Code: command" format

**Canonical Concepts**:
- `reusable-block` = Codex skill, Claude command, OpenCode agent
- `tool-integration` = MCP server, plugin, extension
- `context-window` = Conversation history, thread
- `project-knowledge` = .codex/ folder, .claude/ folder, AGENTS.md

### 5. Design System
**Decision**: Bootstrap 5 + custom SCSS
**Rationale**:
- Proven mobile-responsive
- Familiar to most developers
- Easy theming with CSS variables
- DataTables.js integration well-documented

**Color Scheme**:
- Primary: Indigo (#4f46e5) - agentic/innovation
- Secondary: Teal (#14b8a6) - code/tech
- Tools: Unique color per tool (Codex=green, Claude=orange, OpenCode=blue)

## Risks / Trade-offs

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Tool API/terminology changes | High | Medium | Version tracking in YAML; automated daily checks via GitHub Actions |
| Content becomes outdated | High | Medium | "Last verified" timestamps; community contribution workflow; stale issue bot |
| Too many tools to maintain | Medium | Medium | Tier system: Tier 1 (full data), Tier 2 (basic data), Tier 3 (community) |
| YAML schema confusion | Medium | Low | JSON Schema validation in CI; detailed contribution guide |
| Performance with large tables | Low | Medium | DataTables pagination; lazy loading images; no videos initially |
| Copyright/trademark issues | Low | High | Use official logos only; fair use for comparison; legal review |

**Trade-offs:**
- Static site limits real-time data (pricing, version checks)
- YAML approach sacrifices complex relationships for simplicity
- Mobile-first design may limit desktop data density

## Migration Plan

This is a greenfield project. Deployment steps:

1. **Phase 1: Foundation** (Week 1)
   - Jekyll site scaffold with Bootstrap
   - GitHub Actions CI/CD to Pages
   - Base layouts and includes

2. **Phase 2: Data Model** (Week 2)
   - YAML schema definition
   - Validation scripts
   - Seed data for 3 primary tools (Codex, Claude Code, OpenCode)

3. **Phase 3: Core Pages** (Week 3)
   - Homepage with feature matrix
   - Tool detail pages
   - Command equivalency table

4. **Phase 4: Advanced** (Week 4)
   - Terminology mapper
   - MCP registry
   - Search functionality

5. **Phase 5: Launch** (Week 5)
   - Custom domain (agentic-comparison.dev)
   - SEO optimization
   - Contribution guidelines
   - Social media announcement

**Rollback**: Git revert + Pages redeploy (immediate)

## Open Questions

1. Should we include pricing estimates given API cost variability?
2. How to handle tools with both free and paid tiers (e.g., Claude Code free vs Pro)?
3. Do we need multilingual support initially?
4. Should we add a "migration guide" section showing how to move from tool A to B?
5. How to track tool version numbers effectively?
6. Should we include a "verified" badge for data confirmed by tool maintainers?
