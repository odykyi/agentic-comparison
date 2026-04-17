## Why

Users need a centralized way to discover and install popular AI coding agent skills. Currently, finding and installing skills requires manually searching documentation or GitHub repos. A Skills Marketplace tab would showcase featured/popular skills with one-click installation commands, reducing friction for users wanting to extend their AI tools.

## What Changes

- **New "Skills Marketplace" navigation tab** added to the main header between "MCP" and "Pricing"
- **Skills Marketplace page** (`/skills/`) featuring curated, popular skills from the community
- **Featured skills grid** displaying skill cards with:
  - Skill name and description
  - Compatible tools (Codex, Claude Code, OpenCode, etc.)
  - Install command preview
  - One-click "Install" button that copies the command
- **Categorized skill listings** (e.g., Git workflows, Code review, Testing, Documentation)
- **Skill detail modal/page** with full description, usage examples, and installation instructions
- **Filter/search** by tool compatibility and category

## Capabilities

### New Capabilities

- `skills-marketplace`: Main marketplace page displaying featured skills with metadata, install commands, and tool compatibility
- `skill-card`: Reusable skill card component with copy-to-clipboard functionality for install commands
- `skill-install-action`: One-click install button that generates tool-specific installation commands (e.g., `codex skills install <skill-name>`)
- `skills-navigation`: Navigation integration - new "Skills" tab in header

### Modified Capabilities

- (none)

## Impact

- **UI Changes**: New navigation item, new skills marketplace page, new skill card components
- **Data**: New `_data/skills/` directory for skill definitions (similar to `_data/tools/`)
- **JavaScript**: New `skills.js` for copy-to-clipboard and filtering functionality
- **No breaking changes**: Purely additive feature
