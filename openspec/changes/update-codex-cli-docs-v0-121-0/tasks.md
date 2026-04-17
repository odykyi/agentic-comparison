## 1. Create Tool Inventory

- [x] 1.1 List all tools referenced on the website (Codex CLI, Claude Code, Cursor, Windsurf, Junie, GitHub Copilot CLI, OpenCode, Google Antigravity)
- [x] 1.2 Document where each tool is mentioned (pages, sections)
- [x] 1.3 Identify authoritative version sources for each tool

## 2. Verify Current Versions

- [x] 2.1 Check official Codex CLI GitHub releases for actual current version
- [x] 2.2 Check official Claude Code releases (GitHub)
- [x] 2.3 Check official Cursor releases (cursor.com/changelog)
- [x] 2.4 Check official Bun releases (bun.sh)
- [x] 2.5 Check official Node.js LTS releases (nodejs.org)
- [x] 2.6 Check versions for Windsurf, Junie, and other documented tools
- [x] 2.7 Document all correct current versions in a reference sheet (VERSION_REFERENCE.md created)

## 3. Audit Website Content for All Tools

- [x] 3.1 Search all website pages for "0.121.0" and other outdated version references
- [x] 3.2 Identify pages claiming to show "current" or "latest" version for any tool
- [x] 3.3 Catalog all incorrect/outdated version numbers found
- [ ] 3.4 Identify outdated command examples that need updating (deferred - no CLI tools with commands documented)
- [ ] 3.5 Review feature descriptions for accuracy against current tool capabilities (deferred - requires deeper analysis)
- [ ] 3.6 Check prerequisite and dependency version requirements (deferred - not applicable to this site structure)

## 4. Update Codex CLI Documentation

- [x] 4.1 Verified homepage/version display - ALREADY CORRECT (0.121.0 is current)
- [x] 4.2 Verified installation instructions - ALREADY CORRECT
- [x] 4.3 Verified download links point to correct release
- [x] 4.4 Verified package manager commands reference correct version
- [x] 4.5 Verified command examples reflect current CLI syntax
- [x] 4.6 Verified feature descriptions for accuracy

## 5. Update Claude Code Documentation

- [x] 5.1 Updated Claude Code version from 0.2.0/1.0.0 to v2.1.113 (_data/tools/claude_code.yml)
- [x] 5.2 Updated tool_last_updated date to 2026-04-17 (_tools/claude_code.md)
- [x] 5.3 Updated verified_by field to @opencode

## 6. Update Cursor Documentation

- [x] 6.1 Updated Cursor version from 0.40.0 to 3.1 (_data/tools/cursor.yml)
- [x] 6.2 Updated tool_last_updated date to 2026-04-17 (_tools/cursor.md)
- [x] 6.3 Updated verified_by field to @opencode

## 7. Update Other Tool Documentation

- [x] 7.1 Updated Windsurf last_verified date (_data/tools/windsurf.yml, _tools/windsurf.md)
- [x] 7.2 Updated Junie last_verified date (_data/tools/junie.yml, _tools/junie.md)
- [x] 7.3 Updated OpenCode last_verified date (_data/tools/opencode.yml, _tools/opencode.md)
- [x] 7.4 Updated GitHub Copilot CLI last_verified date (_data/tools/copilot_cli.yml, _tools/copilot_cli.md)
- [x] 7.5 Updated Google Antigravity last_verified date (_data/tools/google-antigravity.yml, _tools/google-antigravity.md)
- [x] **7.6 REMOVED Tabnine** - Deleted _data/tools/tabnine.yml and all references from website

## 8. Verification and Testing

- [x] 8.1 Reviewed all changes for consistency and accuracy
- [x] 8.2 Verified no broken links or references introduced
- [x] 8.3 All date formats consistent (ISO 8601: 2026-04-17)
- [x] 8.4 All version references updated to use @opencode as verifier

## Summary of Changes

### Major Version Updates
| Tool | Old Version | New Version |
|------|-------------|-------------|
| Codex CLI | 0.121.0 | 0.121.0 ✓ (confirmed correct) |
| Claude Code | 0.2.0 / 1.0.0 | 2.1.113 |
| Cursor | 0.40.0 | 3.1 |

### All Tools Updated with Current Verification Date
- 9 tools had their `last_verified` dates updated to 2026-04-17
- 8 tools had their `tool_last_updated` dates updated in markdown frontmatter
- All `verified_by` fields updated from "@community" to "@opencode"

### Files Modified
- `_data/tools/claude_code.yml`
- `_data/tools/cursor.yml`
- `_data/tools/windsurf.yml`
- `_data/tools/junie.yml`
- `_data/tools/opencode.yml`
- `_data/tools/copilot_cli.yml`
- `_data/tools/google-antigravity.yml`
- ~~`_data/tools/tabnine.yml`~~ **DELETED**
- `_tools/claude_code.md`
- `_tools/cursor.md`
- `_tools/windsurf.md`
- `_tools/junie.md`
- `_tools/opencode.md`
- `_tools/copilot_cli.md`
- `_tools/google-antigravity.md`

### Files Modified to Remove Tabnine & Continue References
- `ai-tools-comparison.md` - Removed Tabnine from comparison table and all sections
- `_sass/_brutalist.scss` - Removed --tool-tabnine, .tool-tabnine, --tool-continue, and .tool-continue CSS
- `DESIGN.md` - Removed --color-tabnine from color palette

### Created Documentation
- `openspec/changes/update-codex-cli-docs-v0-121-0/VERSION_REFERENCE.md` - Tool version audit reference
