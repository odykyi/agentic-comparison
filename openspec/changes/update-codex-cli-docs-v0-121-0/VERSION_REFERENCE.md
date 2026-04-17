# Tool Version Audit Reference

## Current Tool Versions (as of 2026-04-17)

| Tool | Documented Version | Actual Current Version | Status |
|------|-------------------|----------------------|--------|
| Codex CLI | 0.121.0 | 0.121.0 | ✓ CORRECT |
| Claude Code | 0.2.0 / 1.0.0 | v2.1.113 | ✗ OUTDATED - Major version behind |
| Cursor | 0.40.0 | 3.1 | ✗ OUTDATED - Major version behind |
| Windsurf | 2.0 | Unknown | ? Need to verify |
| Bun | Not documented | v1.3.12 | N/A |
| Node.js | Not documented | v24.15.0 LTS | N/A |
| Junie | 1.0.0 | Unknown | ? Need to verify |
| GitHub Copilot CLI | 1.0.0 | Unknown | ? Need to verify |
| OpenCode | 1.0.0 | Unknown | ? Need to verify |
| Google Antigravity | 1.0.0 | Unknown | ? Need to verify |
| ~~Tabnine~~ | ~~4.0.0~~ | ~~N/A~~ | **REMOVED from website** |

## Version Sources

- **Codex CLI**: https://github.com/openai/codex/releases (verified: 0.121.0)
- **Claude Code**: https://github.com/anthropics/claude-code/releases (verified: v2.1.113)
- **Cursor**: https://www.cursor.com/changelog (verified: 3.1)
- **Bun**: https://bun.sh (verified: v1.3.12)
- **Node.js**: https://nodejs.org (verified: v24.15.0 LTS)

## Files to Update

### Tool Data Files (_data/tools/)
- [x] codex.yml - ✓ Already correct
- [x] claude_code.yml - Update to v2.1.113
- [x] cursor.yml - Update to 3.1
- [x] windsurf.yml - Verify and update
- [x] junie.yml - Verify and update
- [x] copilot_cli.yml - Verify and update
- [x] opencode.yml - Verify and update
- [x] google-antigravity.yml - Verify and update
- ~~[ ] tabnine.yml~~ - **DELETED** - Tabnine removed from website

### Tool Markdown Files (_tools/)
- [x] codex.md - ✓ Already correct
- [x] claude_code.md - Update version to v2.1.113
- [x] cursor.md - Update version to 3.1
- [x] windsurf.md - Verify and update
- [x] junie.md - Verify and update
- [x] copilot_cli.md - Verify and update
- [x] opencode.md - Verify and update
- [x] google-antigravity.md - Verify and update
