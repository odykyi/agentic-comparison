## Context

The website currently displays "Version 0.121.0" for Codex CLI and may have outdated version references for other tools (Playwright, Prisma, Node.js, Bun, etc.). The goal is to systematically audit ALL website content referencing tools, verify the correct current versions against official sources, and update any discrepancies. This is a comprehensive documentation audit affecting all tool-related pages.

## Goals / Non-Goals

**Goals:**
- Audit all website pages for ALL tool version references (not just Codex CLI)
- Identify and correct incorrect/outdated version numbers for all tools
- Update feature descriptions to match current tool capabilities
- Ensure installation instructions reference the correct versions
- Verify command examples are current and accurate
- Document which tools need ongoing version tracking

**Non-Goals:**
- Modifying the actual tool codebases
- Adding new features to any tools
- Changing tool functionality
- Rewriting unrelated documentation sections

## Decisions

1. **Verification Strategy**: Check official sources for each tool:
   - Codex CLI: github.com/openai/codex releases, npm registry
   - Playwright: playwright.dev, npm registry
   - Prisma: prisma.io/docs, npm registry
   - Bun: bun.sh, GitHub releases
   - Node.js: nodejs.org, official releases
   - Other tools: their respective official sources

2. **Scope of Changes**: Update only factual inaccuracies (version numbers, outdated commands, broken links). Preserve the existing documentation structure and writing style.

3. **Tool Inventory**: Create a list of all tools documented on the website to ensure none are missed during the audit.

4. **Rollback Plan**: Keep a backup or use version control to revert changes if needed. Changes are documentation-only, so rollback is straightforward.

## Risks / Trade-offs

- [Risk] Different tools may have different version sources (GitHub, npm, official sites) → [Mitigation] Document the authoritative source for each tool
- [Risk] Some version references may be intentional (e.g., "introduced in v0.121.0") → [Mitigation] Only update references that claim to be the "current" version, preserve historical references
- [Risk] Some tools may have multiple channels (stable, beta, nightly) → [Mitigation] Always reference the stable release unless documentation specifically covers preview channels
- [Risk] Large number of tools could make audit time-consuming → [Mitigation] Prioritize by frequency of use and user impact
