## Why

The site currently has broken links (e.g., the Claude Code tool page 404s, skill links to non-existent repos like `research-ai/skills`) and WCAG 2.1 AA contrast violations that impact usability and accessibility. These issues harm user experience and prevent users with visual impairments from effectively using the comparison matrix.

## What Changes

- **Fix all broken internal links** across tool pages, comparison tables, skills pages, and navigation
- **Fix broken external skill repository links** (e.g., `github.com/research-ai/skills/*`)
- **Resolve color contrast issues** to meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)
- **Add automated accessibility checks** to prevent future regressions
- **Update navigation links** to ensure consistency with actual page paths

## Capabilities

### New Capabilities
- `broken-link-detection`: Automated scanning and reporting of broken internal and external skill links
- `a11y-contrast-fix`: Systematic color palette updates to meet WCAG 2.1 AA contrast requirements
- `a11y-automated-checks`: Integration of automated accessibility testing in build pipeline

### Modified Capabilities
<!-- No existing spec modifications needed - these are fixes to existing implementation -->

## Impact

- **All HTML templates** in `_layouts/` and `_includes/`
- **SCSS/CSS files** in `_sass/` for color contrast fixes
- **Site navigation** in `_includes/navigation.html`
- **Tool detail pages** in `tools/` directory
- **Skills pages** in `skills/` directory and skill data in `_data/skills/`
- **CI/build pipeline** for automated checks
