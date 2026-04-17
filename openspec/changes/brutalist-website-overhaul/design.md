## Context

The Agentic Comparison website is a Jekyll-based static site hosted on GitHub Pages. It compares 10 AI coding tools (OpenCode, Codex, Claude Code, Cursor, etc.) and catalogs 42+ installable skills across 7 categories. The current design uses a generic "modern" gradient aesthetic that lacks differentiation.

**Current Technical Stack:**

- Jekyll 4.x with GitHub Pages
- Bootstrap 5.3.2 (CDN)
- SCSS compilation via Jekyll
- Data files: `_data/tools/`, `_data/skills/` (YAML)
- Existing styles: `_sass/_modern.scss`, `_sass/_base.scss`, `_sass/_skills.scss`

**Constraints:**

- Must maintain existing data structure (YAML tool/skill definitions)
- Must work on GitHub Pages (no custom plugins)
- Must support Bootstrap components (override with higher specificity)
- Must maintain existing URL structure

## Goals / Non-Goals

**Goals:**

1. Create distinctive High-Contrast Brutalist visual identity
2. Implement 4px-based spacing system with CSS custom properties
3. Build sharp-cornered component library (0px radius, 2px borders)
4. Add category filtering to reduce 42-skill cognitive overload
5. Achieve WCAG 2.1 AA accessibility compliance
6. Add Schema.org structured data for SEO

**Non-Goals:**

1. No changes to tool/skill data structure (YAML files)
2. No new Jekyll plugins or build processes
3. No dark mode implementation (out of scope)
4. No changes to comparison table data logic
5. No animations beyond CSS transitions (no JS animation libraries)

## Decisions

### Decision: Google Fonts vs Local Fonts

**Choice:** Use Google Fonts CDN for Space Grotesk, DM Sans, and JetBrains Mono
**Rationale:** GitHub Pages supports external CDN links; local font files would require font file hosting. Space Grotesk is not available as a system font.
**Alternative Considered:** System font stack only - rejected because it wouldn't achieve the distinctive brutalist typographic look.

### Decision: Bootstrap Override vs Custom CSS

**Choice:** Create new `_brutalist.scss` that overrides Bootstrap variables and provides higher-specificity classes
**Rationale:** Bootstrap is already loaded and provides grid/responsive utilities. Complete removal would require rebuilding those systems.
**Alternative Considered:** Remove Bootstrap entirely - rejected due to time cost and grid system rewrite needed.

### Decision: CSS Custom Properties vs SCSS Variables

**Choice:** CSS custom properties in :root for runtime theming capability
**Rationale:** Enables potential future dark mode without recompilation. Better developer experience for debugging.
**Alternative Considered:** SCSS variables only - rejected because custom properties are supported in all modern browsers and provide runtime flexibility.

### Decision: Vanilla JS vs Alpine.js for Filtering

**Choice:** Vanilla JavaScript for category filtering
**Rationale:** Single small feature doesn't justify additional library. Alpine.js would add ~15KB for one interaction.
**Alternative Considered:** Alpine.js for reactivity - rejected as overkill for simple show/hide filtering.

### Decision: Schema.org JSON-LD vs Microdata

**Choice:** JSON-LD in `<script>` tags in head
**Rationale:** Cleaner separation from presentation markup. Easier to template in Jekyll. Google's preferred format.
**Alternative Considered:** Microdata attributes - rejected because it would clutter HTML templates and be harder to maintain.

## Risks / Trade-offs

**[Risk] Font Loading Performance** → Mitigation: Use `&display=swap` in Google Fonts URL. Preconnect to fonts.googleapis.com and fonts.gstatic.com in head.

**[Risk] Bootstrap Specificity Wars** → Mitigation: Use highly specific selectors (e.g., `.navbar .navbar-nav .nav-link`) and load brutalist styles after Bootstrap. Test every component.

**[Risk] Mobile Navigation UX** → Mitigation: Brutalist thick borders may feel heavy on mobile. Add collapse animation and ensure touch targets are 44px+.

**[Trade-off] Accessibility vs Aesthetic** → Sharp corners (0px radius) are less "friendly" but still accessible. Focus indicators will be thick (3px) purple borders to compensate.

**[Trade-off] SEO Impact During Transition** → Schema.org addition improves SEO but layout changes may temporarily affect rankings. Risk is low for static content site.

## Migration Plan

**Phase 1: Foundation (Deployable)**

1. Create `_brutalist.scss` with full design system
2. Update `head.html` with new fonts
3. Update `style.scss` to import brutalist instead of modern
4. Test homepage and one tool page

**Phase 2: Components (Deployable)**

1. Update `navigation.html` with brutalist styling
2. Update `footer.html` with brutalist styling
3. Update `skill-card.html` with terminal-style design
4. Test all skill cards render correctly

**Phase 3: Pages (Deployable)**

1. Redesign `index.html` hero section
2. Add category tabs to `skills/index.md`
3. Update `tools/index.md` grid
4. Test all page types

**Phase 4: SEO (Deployable)**

1. Add Schema.org JSON-LD to all pages
2. Verify meta tags, OG tags, Twitter Cards
3. Run accessibility audit (axe-core or Lighthouse)
4. Deploy

**Rollback:** Revert `style.scss` to import `_modern.scss` instead of `_brutalist.scss`. All changes are additive or style-only.

## Open Questions

1. **Q:** Should we keep the gradient hero on terminology page as a "heritage" style or convert everything to brutalist?
   **A:** Convert everything to brutalist for consistency.

2. **Q:** Do we need category icons for the 7 skill categories?
   **A:** Use text labels only - brutalist minimalism over decorative icons.

3. **Q:** Should skill installation commands be copy-to-clipboard?
   **A:** Yes, implement copy button on hover for all install commands.

4. **Q:** How to handle the 10 tool colors in brutalist palette?
   **A:** Keep existing tool brand colors but use them sparingly (left border only, not full backgrounds).
