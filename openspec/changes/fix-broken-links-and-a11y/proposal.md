## Why

The site currently has broken links (e.g., the Claude Code tool page 404s) and WCAG 2.1 AA contrast violations that impact usability and accessibility. These issues harm user experience and prevent users with visual impairments from effectively using the comparison matrix.

## What Changes

- **Fix all broken internal links** across tool pages, comparison tables, and navigation
- **Resolve color contrast issues** to meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)
- **Add automated accessibility checks** to prevent future regressions
- **Update navigation links** to ensure consistency with actual page paths

## Capabilities

### New Capabilities
- `broken-link-detection`: Automated scanning and reporting of broken internal links
- `a11y-contrast-fix`: Systematic color palette updates to meet WCAG 2.1 AA contrast requirements
- `a11y-automated-checks`: Integration of automated accessibility testing in build pipeline

### Modified Capabilities
<!-- No existing spec modifications needed - these are fixes to existing implementation -->

## Impact

- **All HTML templates** in `_layouts/` and `_includes/`
- **SCSS/CSS files** in `_sass/` for color contrast fixes
- **Site navigation** in `_includes/navigation.html`
- **Tool detail pages** in `tools/` directory
- **CI/build pipeline** for automated checks
