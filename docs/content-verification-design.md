# Content Truth & Verification System Design

## Overview
Manual verification system with visual trust indicators for AI tool comparison data.

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-17 | Manual verification only | Higher accuracy, controlled quality |
| 2026-04-17 | Show unverified with warning | Transparency without hiding content |
| 2026-04-17 | Quarterly review cycle | Sustainable "lazy" approach |
| 2026-04-17 | Keep versions with date stamps | Context for users + official links |

---

## 1. YAML Schema Extension

Each tool file (`_data/tools/*.yml`) gets verification metadata:

```yaml
verification:
  status: "verified"        # verified | community | uncertain | stale
  last_verified: "2024-01-15"
  verified_by: "@opencode"
  next_review: "2024-04-15"

facts:
  version:
    value: "1.0.0"
    status: "verified"
    source: "https://github.com/.../releases"
    as_of: "2024-01-15"
  
  mcp_support:
    value: true
    status: "verified"
    source: "https://docs..."
    as_of: "2024-01-15"

sources:
  official_website: "https://..."
  documentation: "https://..."
  github: "https://..."
  changelog: "https://..."
```

---

## 2. Badge System

Four trust levels:

| Badge | Status | Color | Display |
|-------|--------|-------|---------|
| ✓ Official | verified | Green #22c55e | Tool cards, tables, details |
| ☆ Community | community | Blue #3b82f6 | Tool cards, tables |
| ? Uncertain | uncertain | Amber #f59e0b | All locations |
| ✗ Stale | stale | Red #ef4444 | All locations |

Badge hover shows: "Last verified: [date] by [who]"

---

## 3. Quarterly Workflow

### Month 1: Generate Review Queue
- Script finds `next_review <= today` or `status = uncertain`
- Creates GitHub issue with priority list
- Priority: Stale > Outdated > Unverified > Due

### Month 1-2: Manual Verification
For each tool:
1. Visit official sources (YAML links)
2. Compare current vs documented
3. Update YAML facts
4. Update verification block
5. Commit with "verify: tool-name vX.Y.Z"

### Month 3: Buffer
- Handle user "Report Outdated" submissions
- Emergency updates for major releases
- Prep next quarter

---

## 4. UI Components

### Tool Card Header
- Badge top-right showing trust level
- Click for verification details

### "Get Latest" Banner
- Below hero on tool pages
- Links: Official Site | Changelog | GitHub

### Feature Table Dots
- Small indicator per cell (verified=●, unverified=○)
- Hover shows verification date

### Report Button
- "Report Outdated" opens pre-filled GitHub issue
- Captures: tool name, field, expected value

---

## 5. Implementation Plan

### Phase 1: Schema Update (1-2 hours)
- [ ] Create verification includes
- [ ] Update `_data/tools/_template.yml`
- [ ] Add verification to 1 existing tool (opencode)
- [ ] Test Jekyll builds correctly

### Phase 2: Badge UI (2-3 hours)
- [ ] Create `verification-badge.html` include
- [ ] Add badge CSS to custom.css
- [ ] Add badges to tool cards
- [ ] Add dots to comparison table

### Phase 3: Official Links (1 hour)
- [ ] Create "Get Latest" banner include
- [ ] Add to tool page layout
- [ ] Populate sources for top 3 tools

### Phase 4: Reporting (1 hour)
- [ ] Create "Report Outdated" modal
- [ ] Pre-fill GitHub issue template
- [ ] Add to all tool pages

### Phase 5: Workflow Scripts (1-2 hours)
- [ ] Create `scripts/check-outdated.js`
- [ ] Create GitHub issue template for quarterly review
- [ ] Document workflow in README

**Total: 6-9 hours of work**

---

## Success Criteria

- [ ] All tools show verification status badge
- [ ] Users can see when data was last verified
- [ ] Official source links are always visible
- [ ] Users can report outdated information
- [ ] Quarterly review process is documented
- [ ] No tool shows version >90 days old without warning

---

## Risks & Mitigation

| Risk | Mitigation |
|------|------------|
| Manual updates fall behind | Quarterly reminders + user reports |
| User confusion about badges | Hover tooltips explain clearly |
| Maintainer burnout | Simple workflow, only 10 tools |
| Stale data on popular tools | Priority queue puts popular first |

---

**Design validated. Ready for implementation.**
