## Context

The Agentic Comparison site is a Jekyll-based static site that compares AI coding tools. Recent review identified two critical issues:

1. **Broken Links**: The tool detail pages (e.g., `/tools/claude_code/`) are not properly linked from the navigation and comparison tables. The navigation references these paths but the actual files may have naming mismatches.

2. **Accessibility Contrast**: The current color scheme uses light gray text (`#6c757d`) on white backgrounds and accent colors that fail WCAG 2.1 AA contrast requirements. This affects users with low vision.

Current tech stack: Jekyll, Bootstrap 5, SCSS, GitHub Pages deployment.

## Goals / Non-Goals

**Goals:**
- Achieve 100% link validity across all internal navigation paths
- Meet WCAG 2.1 AA contrast standards (4.5:1 for normal text, 3:1 for large text/UI components)
- Implement automated checks to prevent regression
- Maintain visual design integrity while improving accessibility

**Non-Goals:**
- Full WCAG 2.1 AAA compliance (beyond AA)
- Screen reader testing (manual verification required)
- Mobile-specific accessibility features (focus on desktop contrast)
- External link validation (out of scope)

## Decisions

### 1. Manual Link Audit Over Automated Scanning
**Decision**: Use `htmlproofer` gem for Jekyll link validation during build.
**Rationale**: Static sites need reliable internal link checking. `htmlproofer` integrates with Jekyll build process and catches broken internal links, missing images, and invalid external links.
**Alternative**: Manual regex search - rejected due to maintenance burden.

### 2. SCSS Variable-Based Color Updates
**Decision**: Update color variables in `_sass/_variables.scss` rather than individual component files.
**Rationale**: Centralized color management ensures consistency. Modifying variables like `$text-muted`, `$primary`, and accent colors will cascade to all components automatically.
**Alternative**: Per-component fixes - rejected due to inconsistency risk and maintenance overhead.

### 3. CI-Integrated Accessibility Checks
**Decision**: Add `pa11y-ci` to GitHub Actions workflow for automated accessibility testing.
**Rationale**: pa11y-ci runs against built site and reports WCAG 2.1 AA violations. Running on PRs prevents regression.
**Alternative**: Manual lighthouse CI - rejected as pa11y provides more detailed accessibility reporting.

### 4. Tool Page Naming Convention
**Decision**: Standardize tool URLs to use kebab-case matching the data keys (e.g., `claude_code` → `claude-code`).
**Rationale**: Consistency with Jekyll conventions and easier URL management. Navigation links already use kebab-case paths.
**Alternative**: Keep underscores - rejected as it causes URL/display mismatches.

## Risks / Trade-offs

- **[Risk] Color changes may alter brand aesthetic** → Mitigation: Select darker variants of existing colors to maintain palette while meeting contrast
- **[Risk] Link restructuring may break external bookmarks** → Mitigation: Add Jekyll redirect-from plugin for tool pages
- **[Risk] Automated checks may have false positives** → Mitigation: Configure pa11y to ignore known acceptable patterns (e.g., Bootstrap components)
- **[Trade-off] Build time increase** - Adding htmlproofer and pa11y will increase CI build time by ~30-60 seconds
