## 1. Advanced JSON-LD Schemas

- [x] 1.1 Create `_includes/seo-tool.html` with SoftwareApplication JSON-LD template
- [x] 1.2 Add SoftwareApplication schema to all individual tool pages (/tools/opencode/, /tools/codex/, etc.)
- [x] 1.3 Create `_includes/seo-skill.html` with SoftwareSourceCode JSON-LD template
- [x] 1.4 Add SoftwareSourceCode schema to skill cards/detail views
- [x] 1.5 Add ItemList JSON-LD schema to skills marketplace page (index.md)
- [x] 1.6 Add WebSite schema with SearchAction to homepage (index.html)
- [x] 1.7 Create `_includes/seo-faq.html` with FAQPage JSON-LD template
- [x] 1.8 Add FAQPage schema to terminology page (/terminology/)
- [x] 1.9 Add FAQPage schema to commands page (/commands/)

## 2. Rich Snippet Markup

- [x] 2.1 Add aggregateRating to SoftwareApplication schema (calculate from feature count)
- [x] 2.2 Add reviewCount to aggregateRating (number of features)
- [x] 2.3 Add bestRating (5) and worstRating (1) to aggregateRating
- [x] 2.4 Add offers schema with price and priceCurrency to tool pages
- [x] 2.5 Add availability status (InStock/PreOrder) based on tool maintenance status
- [x] 2.6 Add featureList array to SoftwareApplication schema
- [x] 2.7 Test rich snippets with Google Rich Results Test

## 3. Enhanced Social Meta Tags

- [x] 3.1 Add twitter:site meta tag with site handle (@agentic_compare)
- [x] 3.2 Add twitter:creator meta tag for attribution
- [x] 3.3 Add twitter:image:width (800) and twitter:image:height (418) to all pages
- [x] 3.4 Add twitter:label1/data1 pairs for tool pages (e.g., "Price"/"Free")
- [x] 3.5 Add article:published_time to dated content (use page.date or site.time)
- [x] 3.6 Add article:modified_time to all pages (use site.time)
- [x] 3.7 Add og:image:width (1200) and og:image:height (630) to all pages
- [x] 3.8 Add og:locale "en_US" to all pages
- [x] 3.9 Verify og:site_name is consistent across all pages

## 4. Technical SEO Meta Tags

- [x] 4.1 Verify canonical URLs on all pages (already present, verify correctness)
- [x] 4.2 Add robots meta "noindex, follow" to search/utility pages if applicable
- [x] 4.3 Add meta keywords to tool pages (tool name + relevant keywords)
- [x] 4.4 Add meta keywords to skills marketplace (skills, categories, tools)
- [x] 4.5 Verify all meta descriptions are unique and 50-160 characters
- [x] 4.6 Add meta description to any pages missing it

## 5. Organization and Breadcrumb Enhancements

- [x] 5.1 Extend Organization schema with contactPoint
- [x] 5.2 Add sameAs array to Organization (GitHub, any other profiles)
- [x] 5.3 Enhance BreadcrumbList to support 3-level hierarchies (Home > Tools > ToolName)
- [x] 5.4 Ensure last breadcrumb item @id matches current page URL
- [x] 5.5 Add description property to Organization schema

## 6. Schema Validation and Testing

- [x] 6.1 Validate SoftwareApplication schema for all 9 tools using Google's Rich Results Test
- [x] 6.2 Validate ItemList schema on skills marketplace
- [x] 6.3 Validate FAQPage schema on terminology and commands pages
- [x] 6.4 Validate WebSite + SearchAction on homepage
- [x] 6.5 Run schema.org validator on all JSON-LD outputs
- [x] 6.6 Check for duplicate @ids or missing required properties
- [x] 6.7 Test Twitter Card validator with sample pages
- [x] 6.8 Test Facebook Sharing Debugger with sample pages

## 7. Tool-Specific Page Updates

- [x] 7.1 Update /tools/opencode/index.md with SoftwareApplication schema include
- [x] 7.2 Update /tools/codex/index.md with SoftwareApplication schema include
- [x] 7.3 Update /tools/claude_code/index.md with SoftwareApplication schema include
- [x] 7.4 Update /tools/cursor/index.md with SoftwareApplication schema include
- [x] 7.5 Update /tools/windsurf/index.md with SoftwareApplication schema include
- [x] 7.6 Update /tools/junie/index.md with SoftwareApplication schema include
- [x] 7.7 Update /tools/copilot_cli/index.md with SoftwareApplication schema include
- [x] 7.8 Update /tools/google_antigravity/index.md with SoftwareApplication schema include
- [x] 7.9 Update /tools/tabnine/index.md with SoftwareApplication schema include
- [x] 7.10 Update /tools/continue/index.md with SoftwareApplication schema include

## 8. Documentation and Cleanup

- [x] 8.1 Document the SEO schema structure in README or AGENTS.md
- [x] 8.2 Create example of how to add SEO to new pages
- [x] 8.3 Remove any duplicate or conflicting meta tags
- [x] 8.4 Verify no console errors from JSON-LD scripts
- [x] 8.5 Run Jekyll build to verify no Liquid errors
- [x] 8.6 Deploy and submit updated sitemap to Google Search Console
