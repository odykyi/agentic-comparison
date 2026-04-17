## 1. Foundation & Repository Setup

- [x] 1.1 Create new GitHub repository `agentic-comparison` with MIT license
- [x] 1.2 Initialize Jekyll 4.x site with `jekyll new` scaffold
- [x] 1.3 Configure GitHub Pages deployment via Settings > Pages
- [x] 1.4 Set up GitHub Actions workflow for Jekyll build and deploy
- [x] 1.5 Add `.gitignore` for Jekyll, Ruby, and macOS artifacts
- [x] 1.6 Create `README.md` with project overview and local dev instructions
- [x] 1.7 Add `CONTRIBUTING.md` with guidelines for YAML contributions

## 2. Jekyll Site Structure & Layouts

- [x] 2.1 Create `_layouts/default.html` with Bootstrap 5 base template
- [x] 2.2 Create `_layouts/tool.html` for individual tool profile pages
- [x] 2.3 Create `_layouts/comparison.html` for matrix-style pages
- [x] 2.4 Create `_includes/navigation.html` with responsive navbar
- [x] 2.5 Create `_includes/footer.html` with version info and links
- [x] 2.6 Create `_includes/head.html` with DataTables.js CDN links
- [x] 2.7 Set up `_sass/` directory with Bootstrap 5 overrides and custom SCSS
- [x] 2.8 Create `assets/css/style.scss` main stylesheet with CSS variables for tool colors

## 3. YAML Data Schema & Validation

- [ ] 3.1 Define JSON Schema for tool definitions (`_data/tools/*.yml`)
- [ ] 3.2 Define JSON Schema for feature definitions (`_data/features.yml`)
- [ ] 3.3 Define JSON Schema for command mappings (`_data/commands.yml`)
- [ ] 3.4 Define JSON Schema for terminology mappings (`_data/terminology.yml`)
- [ ] 3.5 Define JSON Schema for MCP servers (`_data/mcp_servers.yml`)
- [ ] 3.6 Create GitHub Actions workflow for YAML schema validation
- [ ] 3.7 Add validation script using `jsonschema` Python package
- [ ] 3.8 Create `_config.yml` with Jekyll collections configuration

## 4. Tool Data Collection (Phase 1: 3 Primary Tools)

- [ ] 4.1 Create `_data/tools/opencode.yml` with full specifications
- [ ] 4.2 Create `_data/tools/codex.yml` with full specifications
- [ ] 4.3 Create `_data/tools/claude_code.yml` with full specifications
- [ ] 4.4 Gather command references for all 3 tools from official docs
- [ ] 4.5 Map feature availability for each tool
- [ ] 4.6 Collect official logos and brand assets (add to `assets/images/tools/`)
- [ ] 4.7 Add "last verified" version timestamps to each tool YAML
- [ ] 4.8 Create `_data/tools/_template.yml` for future tool contributions

## 5. Core Pages - Feature Comparison Matrix

- [ ] 5.1 Create `index.html` homepage with hero section and feature matrix preview
- [ ] 5.2 Create `features/index.html` with full feature comparison table
- [ ] 5.3 Implement DataTables.js integration for sorting and filtering
- [ ] 5.4 Add category filter sidebar with expand/collapse functionality
- [ ] 5.5 Implement tool column visibility toggle with localStorage persistence
- [ ] 5.6 Create mobile-responsive card layout alternative for matrix
- [ ] 5.7 Add tool highlight on hover with connecting row lines
- [ ] 5.8 Create feature detail modals with expanded descriptions

## 6. Command Reference Pages

- [ ] 6.1 Create `commands/index.html` with command equivalency table
- [ ] 6.2 Implement search functionality across command names and descriptions
- [ ] 6.3 Add task category filter (file operations, git, search, etc.)
- [ ] 6.4 Create `_layouts/command.html` for individual command detail pages
- [ ] 6.5 Generate command detail pages for 20+ common operations per tool
- [ ] 6.6 Add "copy to clipboard" buttons for command examples
- [ ] 6.7 Create command comparison sidebars showing alternatives
- [ ] 6.8 Add verification status badges (verified/community-contributed)

## 7. Terminology Mapper

- [ ] 7.1 Create `terminology/index.html` with canonical concepts table
- [ ] 7.2 Define canonical concept definitions in `_data/canonical_concepts.yml`
- [ ] 7.3 Create cross-reference mapping for each tool's terminology
- [ ] 7.4 Implement perspective toggle ("From Codex view" vs "From Claude view")
- [ ] 7.5 Create terminology search with auto-suggest
- [ ] 7.6 Add concept relationship diagrams using Mermaid.js
- [ ] 7.7 Create tool architecture visualization pages
- [ ] 7.8 Add terminology history/deprecation tracking display

## 8. MCP Registry

- [ ] 8.1 Create `mcp/index.html` with MCP server catalog
- [ ] 8.2 Create `_data/mcp_servers.yml` with initial server entries
- [ ] 8.3 Implement compatibility filter by tool
- [ ] 8.4 Add official vs community-maintained badges
- [ ] 8.5 Create integration guides for each tool+server combination
- [ ] 8.6 Add MCP capability matrix (resources, prompts, tools, sampling)
- [ ] 8.7 Create server detail pages with setup instructions
- [ ] 8.8 Add "Add MCP Server" contribution form via GitHub API

## 9. Tool Profile Pages

- [ ] 9.1 Create dynamic tool profile page generator using Jekyll collections
- [ ] 9.2 Create `tools/opencode.html` profile page
- [ ] 9.3 Create `tools/codex.html` profile page
- [ ] 9.4 Create `tools/claude_code.html` profile page
- [ ] 9.5 Add architecture diagrams for each tool
- [ ] 9.6 Create installation methods section with copy-paste commands
- [ ] 9.7 Add feature deep-dive sections for each capability
- [ ] 9.8 Include version history and changelog integration

## 10. UI Showcase

- [ ] 10.1 Create `ui/index.html` terminal interface gallery
- [ ] 10.2 Add annotated screenshots for each tool's UI
- [ ] 10.3 Create command palette comparison section
- [ ] 10.4 Add syntax highlighting theme comparisons
- [ ] 10.5 Create configuration file structure visualizations
- [ ] 10.6 Add IDE integration screenshots section
- [ ] 10.7 Create accessibility features comparison table
- [ ] 10.8 Add UI customization options documentation

## 11. Pricing Calculator

- [ ] 11.1 Create `pricing/index.html` with pricing comparison table
- [ ] 11.2 Implement interactive cost calculator with JavaScript
- [ ] 11.3 Add usage sliders for requests, tokens, and seats
- [ ] 11.4 Create currency selector with exchange rate API
- [ ] 11.5 Add free tier comparison matrix
- [ ] 11.6 Document billing models with example calculations
- [ ] 11.7 Add price history timeline visualization
- [ ] 11.8 Include educational/non-profit discount information

## 12. Advanced Features & Polish

- [ ] 12.1 Implement site-wide search using Lunr.js or Algolia DocSearch
- [ ] 12.2 Add dark mode toggle with CSS variables
- [ ] 12.3 Create sitemap.xml and robots.txt for SEO
- [ ] 12.4 Add Open Graph meta tags for social sharing
- [ ] 12.5 Implement "Edit this page" links to GitHub edit mode
- [ ] 12.6 Add table of contents navigation for long pages
- [ ] 12.7 Create progressive web app manifest
- [ ] 12.8 Add analytics (Plausible or Fathom) with privacy focus

## 13. Content Expansion (Phase 2: Additional Tools)

- [ ] 13.1 Create `_data/tools/continue.yml` for Continue.dev
- [ ] 13.2 Create `_data/tools/aider.yml` for Aider
- [ ] 13.3 Create `_data/tools/copilot_cli.yml` for GitHub Copilot CLI
- [ ] 13.4 Update all comparison tables to include new tools
- [ ] 13.5 Generate command equivalencies for new tools
- [ ] 13.6 Create profile pages for additional tools
- [ ] 13.7 Update terminology mappings with new tool terms
- [ ] 13.8 Add tier system labels (Tier 1/2/3) to tool listings

## 14. Launch Preparation

- [ ] 14.1 Configure custom domain `agentic-comparison.dev` in GitHub Pages
- [ ] 14.2 Set up Cloudflare DNS for custom domain
- [ ] 14.3 Enable HTTPS/SSL certificate
- [ ] 14.4 Perform cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] 14.5 Run mobile responsiveness audit
- [ ] 14.6 Optimize images and assets for performance
- [ ] 14.7 Create social media preview images
- [ ] 14.8 Write launch announcement blog post

## 15. Post-Launch & Maintenance

- [ ] 15.1 Set up scheduled GitHub Action for version checking
- [ ] 15.2 Create issue templates for tool updates and corrections
- [ ] 15.3 Add stale issue bot for outdated content flags
- [ ] 15.4 Create maintenance runbook for maintainers
- [ ] 15.5 Set up community Discord or GitHub Discussions
- [ ] 15.6 Plan monthly content update cycles
- [ ] 15.7 Create analytics dashboard review process
- [ ] 15.8 Document release process for version updates
