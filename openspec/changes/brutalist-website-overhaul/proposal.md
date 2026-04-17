## Why

The current Agentic Comparison website uses a generic "modern" gradient design that blends into the sea of similar-looking tech sites. As a tool comparison platform for AI coding agents, we need a distinctive visual identity that reflects the bold, opinionated nature of the products we compare. The current design also has usability issues: 42 skills overwhelm users without category organization, tool descriptions truncate awkwardly, and the skills grid lacks visual hierarchy.

## What Changes

**Visual Identity Overhaul:**

- Replace gradient-based modern design with High-Contrast Brutalist aesthetic
- Sharp rectangles (0px radius), thick 2px black borders, black/white base with electric purple (#7c3aed) accent
- Space Grotesk for headlines, DM Sans for body text, JetBrains Mono for code
- Bold typography scale with massive headlines (up to 72px) and uppercase section labels

**Content Organization:**

- Add category filtering/tabs to Skills page (42 items organized into Development, Frontend, Documentation, Business, Collaboration, DevOps, Tools)
- Fix truncated tool descriptions on tool cards
- Implement terminal-style command boxes for skill installation instructions

**SEO & Accessibility Improvements:**

- Add Schema.org structured data (SoftwareApplication, SoftwareSourceCode) to all pages
- Implement proper meta tags, Open Graph, Twitter Cards
- Add alt text for all images, ARIA labels for interactive elements
- Implement skip navigation and focus indicators for keyboard users
- Ensure WCAG 2.1 AA compliance (color contrast, semantic HTML)

**Technical:**

- Create new `_brutalist.scss` design system
- Update `head.html` to load Space Grotesk and DM Sans fonts
- Refactor navigation, footer, cards, buttons, badges to match brutalist style
- Remove/replace `_modern.scss` imports

## Capabilities

### New Capabilities

- `brutalist-design-system`: CSS custom properties, typography scale, spacing system, component styles
- `skills-category-filtering`: Category tabs and filtering for 42 skills organized by function
- `seo-structured-data`: Schema.org markup for tools and skills pages
- `accessibility-wcag`: Skip links, ARIA labels, focus management, alt text

### Modified Capabilities

- `site-navigation`: Restyle to brutalist aesthetic (thick borders, sharp corners, hover inversions)
- `skill-cards`: Redesign with terminal-style install boxes and category badges
- `hero-sections`: Implement massive bordered headlines with purple highlights
- `comparison-tables`: Sharp-bordered tables with black headers

## Impact

**Frontend:**

- `_sass/_brutalist.scss` (new design system)
- `_includes/head.html` (font loading)
- `_includes/navigation.html` (brutalist restyle)
- `_includes/footer.html` (brutalist restyle)
- `_includes/skill-card.html` (terminal-style redesign)
- `assets/css/style.scss` (replace modern import)
- `index.html` (homepage hero redesign)
- `skills/index.md` (category tabs)
- `tools/index.md` (grid redesign)

**SEO:**

- All pages get Schema.org JSON-LD structured data
- Meta description/OG improvements across all layouts

**Dependencies:**

- Google Fonts: Space Grotesk, DM Sans, JetBrains Mono
- Existing Bootstrap 5 (overridden by brutalist styles)
- Existing Jekyll/GitHub Pages infrastructure

**Risk:** Low - visual redesign with no breaking functionality changes
