## 1. Design System Foundation

- [x] 1.1 Create `_sass/_brutalist.scss` with CSS custom properties (colors, typography, spacing, borders)
- [x] 1.2 Add Space Grotesk, DM Sans, and JetBrains Mono font imports to `_includes/head.html`
- [x] 1.3 Update `assets/css/style.scss` to import `_brutalist.scss` instead of `_modern.scss`
- [x] 1.4 Test that custom properties work (check browser dev tools for --color-black, --font-display)

## 2. Navigation Component

- [x] 2.1 Update `_includes/navigation.html` with brutalist styling (sharp borders, uppercase links)
- [x] 2.2 Implement hover inversion effect (black background, white text on hover)
- [x] 2.3 Add active state styling (inverted colors for current page)
- [x] 2.4 Style mobile hamburger button (2px border, square corners)
- [x] 2.5 Style dropdown menus (sharp borders, hover inversions)

## 3. Footer Component

- [x] 3.1 Update `_includes/footer.html` with brutalist styling (black background, white text)
- [x] 3.2 Add uppercase section headers with letter-spacing
- [x] 3.3 Implement hover underline effect on footer links

## 4. Skill Cards Redesign

- [x] 4.1 Update `_includes/skill-card.html` with terminal-style install section
- [x] 4.2 Add category badge to skill card header
- [x] 4.3 Style command boxes (white background, 2px black border, monospace)
- [x] 4.4 Add copy-to-clipboard button with hover feedback
- [x] 4.5 Implement card hover lift effect (translate + shadow)

## 5. Skills Category Filtering

- [x] 5.1 Add category tabs to `skills/index.md` (All + 7 categories)
- [x] 5.2 Implement JavaScript filtering logic (show/hide skills by category)
- [x] 5.3 Style active tab state (purple background, white text)
- [x] 5.4 Add smooth transition when switching categories
- [x] 5.5 Ensure horizontal scroll on mobile for category tabs

## 6. Homepage Hero Redesign

- [x] 6.1 Redesign `index.html` hero section with massive headline (clamp 3-6rem)
- [x] 6.2 Add hero label component (small bordered box above headline)
- [x] 6.3 Implement purple highlight class for emphasis words
- [x] 6.4 Add thick bottom border separator (2px black)
- [x] 6.5 Style hero action buttons (primary black, outline black)

## 7. Tools Page Redesign

- [x] 7.1 Update `tools/index.md` tool cards with brutalist styling
- [x] 7.2 Fix truncated tool descriptions (ensure full text displays)
- [x] 7.3 Add tool brand color left border accent (4px)
- [x] 7.4 Implement card hover lift effect

## 8. Comparison Tables

- [x] 8.1 Update comparison table styling (2px black outer border)
- [x] 8.2 Implement black header row with white text
- [x] 8.3 Add sticky header behavior on scroll
- [x] 8.4 Style status icons as bordered squares (not circles)
- [x] 8.5 Add row hover effect (light gray background)

## 9. SEO & Structured Data

- [x] 9.1 Add Schema.org SoftwareApplication JSON-LD to tool pages
- [x] 9.2 Add Schema.org SoftwareSourceCode JSON-LD to skill pages
- [x] 9.3 Add Organization schema to all pages via default layout
- [x] 9.4 Add BreadcrumbList schema to non-home pages
- [x] 9.5 Verify all pages have proper meta descriptions
- [x] 9.6 Verify Open Graph tags (og:title, og:description, og:image, og:url)
- [x] 9.7 Verify Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)

## 10. Accessibility Implementation

- [x] 10.1 Add skip navigation link ("Skip to main content") to default layout
- [x] 10.2 Ensure main content area has id="main-content" for skip link target
- [x] 10.3 Implement visible focus indicators (3px purple outline, 2px offset)
- [x] 10.4 Add alt text to all images (tool logos, icons)
- [x] 10.5 Add aria-labels to icon-only buttons (search, copy, theme toggle)
- [x] 10.6 Ensure search input has associated label
- [x] 10.7 Verify semantic HTML structure (nav, main, header, footer, article)
- [x] 10.8 Verify heading hierarchy (h1 → h2 → h3 without skips)

## 11. Testing & Validation

- [x] 11.1 Run Lighthouse audit for accessibility (target 90+ score)
- [x] 11.2 Run Lighthouse audit for SEO (target 90+ score)
- [x] 11.3 Test keyboard navigation (Tab through all interactive elements)
- [x] 11.4 Test category filtering on skills page (all 7 categories + All tab)
- [x] 11.5 Test copy-to-clipboard on skill cards
- [x] 11.6 Test responsive layout at 320px, 768px, 1024px, 1440px viewports
- [x] 11.7 Validate Schema.org markup with Google's Rich Results Test
- [x] 11.8 Check color contrast ratios (WCAG 2.1 AA compliance)

## 12. Cleanup & Deployment

- [x] 12.1 Remove `_sass/_modern.scss` import from style.scss (keep file for reference)
- [x] 12.2 Update DESIGN.md with any implementation deviations
- [x] 12.3 Add Jekyll build verification (`bundle exec jekyll build` succeeds)
- [x] 12.4 Verify all pages render without console errors
- [x] 12.5 Final review: homepage, tools page, skills page, comparison page
