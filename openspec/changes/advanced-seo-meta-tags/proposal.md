## Why

The current SEO implementation has basic Schema.org Organization and BreadcrumbList structured data, but lacks comprehensive coverage for tools, skills, and comparison content. To improve search visibility, rich snippets, and social media sharing, we need to add advanced JSON-LD structured data types and enhanced meta tags for all page types.

## What Changes

**Enhanced JSON-LD Structured Data:**

- Add `SoftwareApplication` schema for each tool page with detailed properties (aggregateRating, offers, operatingSystem, applicationCategory)
- Add `SoftwareSourceCode` schema for skills pages with programmingLanguage and codeRepository
- Add `ItemList` schema for skills marketplace listing
- Add `ComparisonTable` schema (custom) for feature comparison pages
- Add `WebSite` schema with SearchAction for site search functionality
- Add `FAQPage` schema for terminology/command reference pages
- Add `Article` schema for any blog posts or documentation

**Advanced Meta Tags:**

- Implement `article:published_time` and `article:modified_time` for dated content
- Add `og:locale` and alternate language tags for internationalization
- Add `twitter:site` and `twitter:creator` for social attribution
- Implement `rel=canonical` with proper URL handling
- Add `meta robots` directives for crawl control
- Add `meta keywords` for skills/tools (comma-separated tags)

**Rich Snippet Optimization:**

- Add aggregateRating markup for tools (aggregate from features)
- Add priceCurrency and price for pricing page
- Add availability status for tools

**Social Media Cards:**

- Create dedicated OpenGraph/Twitter card images for each tool
- Add `og:image:width` and `og:image:height` for better rendering
- Add `twitter:label1` and `twitter:data1` for rich Twitter cards

## Capabilities

### New Capabilities

- `advanced-json-ld`: Comprehensive Schema.org markup for SoftwareApplication, SoftwareSourceCode, FAQPage, ItemList
- `rich-snippets`: Aggregate ratings, offers, availability structured data
- `social-meta-enhanced`: Advanced Twitter Cards and Open Graph properties
- `technical-seo`: Canonical URLs, robots meta, hreflang tags

### Modified Capabilities

- `seo-structured-data`: Expand from basic Organization/Breadcrumb to include advanced schemas

## Impact

**Frontend:**

- `_includes/head.html` - Enhanced JSON-LD and meta tags
- `_includes/seo-tool.html` - Tool-specific schema template
- `_includes/seo-skill.html` - Skill-specific schema template
- `_includes/seo-comparison.html` - Comparison table schema template
- New tool pages need `@id` anchors for proper entity linking

**SEO:**

- All tool pages get SoftwareApplication schema
- All skill pages get SoftwareSourceCode schema
- Comparison pages get ItemList schema
- Homepage gets WebSite schema with SearchAction
- Terminology/commands pages get FAQPage schema

**Dependencies:**

- Tool data files need version/price/rating fields if not present
- Skill data files need programmingLanguage if applicable
- Static assets: Social card images (1200x630, 800x418 for Twitter)

**Risk:** Low - purely additive SEO improvements with no breaking changes
