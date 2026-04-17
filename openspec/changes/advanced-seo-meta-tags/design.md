## Context

The site currently has basic Schema.org Organization and BreadcrumbList structured data in `_includes/head.html`. The brutalist website overhaul added basic SoftwareApplication concepts but the implementation is incomplete. We need comprehensive JSON-LD coverage for all content types to maximize SEO potential and enable rich snippets in Google search results.

**Current SEO State:**

- Basic Organization schema on all pages
- BreadcrumbList on non-home pages
- Open Graph and Twitter Card meta tags
- Missing: SoftwareApplication details, SoftwareSourceCode, ItemList, FAQPage, WebSite with SearchAction

**Data Sources:**

- Tools: `_data/tools/*.yml` with features, pricing, version info
- Skills: `_data/skills/**/*.yml` with compatible_tools, install_commands
- Static pages: Jekyll frontmatter for titles/descriptions

## Goals / Non-Goals

**Goals:**

1. Add SoftwareApplication schema to all tool pages with aggregateRating, offers, operatingSystem
2. Add SoftwareSourceCode schema to skill detail pages with programmingLanguage
3. Add ItemList schema for skills marketplace grid
4. Add WebSite schema with SearchAction to homepage
5. Add FAQPage schema to terminology/commands pages
6. Enhance Open Graph with proper image dimensions and article timestamps
7. Add Twitter Cards rich data (label/data pairs)
8. Implement proper canonical URLs and robots meta tags

**Non-Goals:**

1. No changes to existing content structure (YAML files)
2. No dynamic generation of social card images (static assets only)
3. No hreflang implementation (single language site)
4. No AMP (Accelerated Mobile Pages) markup

## Decisions

### Decision: Include Files vs Inline

**Choice:** Create separate include files (`_includes/seo-tool.html`, `_includes/seo-skill.html`) for complex schemas
**Rationale:** Keeps head.html clean and allows page-specific customization. Template logic for SoftwareApplication is complex (30+ lines).
**Alternative Considered:** Inline all JSON-LD in head.html - rejected because it would make the file unmanageable (200+ lines).

### Decision: Schema.org @id Strategy

**Choice:** Use URL-based @ids with #anchors (e.g., `"@id": "https://agentic.com/tools/opencode/#software"`)
**Rationale:** Enables entity linking between schemas. Tool page can reference Organization via @id.
**Alternative Considered:** UUID-based @ids - rejected because URLs are more semantic and stable.

### Decision: Aggregate Rating Source

**Choice:** Calculate aggregateRating from feature count (simple algorithm: features count / 10 \* 5, rounded)
**Rationale:** No external review data available. Feature richness is a proxy for quality.
**Alternative Considered:** Use static rating values in YAML - rejected because it adds maintenance burden.

### Decision: JSON-LD vs Microdata

**Choice:** JSON-LD in `<script type="application/ld+json">` tags
**Rationale:** Google's preferred format. Cleaner separation of data and presentation.
**Alternative Considered:** Microdata attributes - rejected because it clutters HTML and is harder to template.

### Decision: Image Handling

**Choice:** Use existing tool logos as og:image, fallback to site default
**Rationale:** Tool logos are already available. Creating custom social cards is out of scope.
**Alternative Considered:** Generate dynamic social card images - rejected as too complex for this phase.

## Risks / Trade-offs

**[Risk] Duplicate Content Issues** → Mitigation: Ensure canonical URLs are correct on all pages. Test with Google Search Console after deployment.

**[Risk] Schema Validation Errors** → Mitigation: Use Google's Rich Results Test before each PR. Add schema validation to CI if possible.

**[Risk] Performance Impact** → Mitigation: JSON-LD adds ~1KB per page (compressed). No external requests. Use Jekyll's `jsonify` filter for efficient serialization.

**[Trade-off] Incomplete Review Data** → Aggregate ratings are synthetic (based on feature count) not user reviews. Mark with "warning" in schema that these are computed ratings.

**[Trade-off] Single Language** → No hreflang tags since site is English-only. Expanding to other languages would require significant content effort.

## Migration Plan

**Phase 1: Tool Page Schemas**

1. Create `_includes/seo-tool.html` with SoftwareApplication template
2. Update individual tool pages to include the template
3. Test with Google Rich Results Test

**Phase 2: Skill Page Schemas**

1. Create `_includes/seo-skill.html` with SoftwareSourceCode template
2. Update skill detail pages
3. Verify programmingLanguage fields in YAML

**Phase 3: List and Search Schemas**

1. Add ItemList schema to skills marketplace
2. Add WebSite + SearchAction to homepage
3. Add FAQPage to terminology/commands

**Phase 4: Enhanced Meta Tags**

1. Update head.html with Twitter Card rich data
2. Add article timestamps to dated content
3. Add meta robots directives

**Rollback:** Remove include files from pages. Head.html changes are additive only.

## Open Questions

1. **Q:** Should we add UserReview schema for future user feedback system?
   **A:** Out of scope for now. Revisit when review system is built.

2. **Q:** How to handle tool version changes for schema dateModified?
   **A:** Use Jekyll's `site.time` for dateModified on each build. Tool version from YAML for softwareVersion.

3. **Q:** Should skills get individual detail pages for better schema targeting?
   **A:** Consider for future. Currently skills are in a list view only.
