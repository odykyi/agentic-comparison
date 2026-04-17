## 1. Data & Content

- [x] 1.1 Create `_data/skills/` directory
- [x] 1.2 Create first sample skill YAML file (e.g., `code-review.yml`) with complete structure
- [x] 1.3 Create 6-12 featured skill YAML files covering different categories (Git workflows, Testing, Documentation, Code review)
- [x] 1.4 Define YAML schema for skills (name, slug, description, category, compatible_tools, install_commands, author, source_url)

## 2. Navigation Integration

- [x] 2.1 Add "Skills" link in `_includes/navigation.html` between "MCP" and "Pricing"
- [x] 2.2 Ensure Skills link works on mobile hamburger menu
- [x] 2.3 Add active state styling for Skills page in navigation
- [x] 2.4 Update any hardcoded nav order references if they exist

## 3. Skills Marketplace Page

- [x] 3.1 Create `skills/index.md` with front matter and basic structure
- [x] 3.2 Add hero section with title and description
- [x] 3.3 Implement skill grid layout using Bootstrap cards
- [x] 3.4 Add responsive grid (3-col desktop, 2-col tablet, 1-col mobile)
- [x] 3.5 Add tool filter buttons/dropdown (All, Codex, Claude Code, OpenCode, Aider, Continue)
- [x] 3.6 Add category filter dropdown
- [x] 3.7 Implement client-side filtering JavaScript

## 4. Skill Card Component

- [x] 4.1 Create reusable skill card HTML structure in `_includes/skill-card.html`
- [x] 4.2 Add skill name and description display
- [x] 4.3 Add compatible tool badges with tool colors
- [x] 4.4 Add category badge
- [x] 4.5 Display default install command preview
- [x] 4.6 Add tool selector dropdown for switching install commands
- [x] 4.7 Style skill cards consistently with existing design system

## 5. Install Action & JavaScript

- [x] 5.1 Create `assets/js/skills.js` file
- [x] 5.2 Implement copy-to-clipboard function using navigator.clipboard
- [x] 5.3 Add "Copy" button to skill cards with click handler
- [x] 5.4 Implement visual feedback on copy ("Copied!" tooltip)
- [x] 5.5 Add tool selector change handler to update displayed command
- [x] 5.6 Handle "Not available" state for unsupported tools
- [x] 5.7 Add filter functionality to show/hide skills based on selected tool
- [x] 5.8 Add filter functionality to show/hide skills based on selected category

## 6. Styling

- [x] 6.1 Add skill card SCSS styles in `_sass/_custom.scss` or new `_sass/_skills.scss`
- [x] 6.2 Style tool compatibility badges with existing tool colors
- [x] 6.3 Style category badges
- [x] 6.4 Style filter controls
- [x] 6.5 Ensure dark mode support for all new elements
- [x] 6.6 Add hover effects to skill cards

## 7. Content & Documentation

- [ ] 7.1 Add "Submit a Skill" CTA at bottom of skills page linking to GitHub issues
- [ ] 7.2 Write brief description of what skills are and how they work
- [ ] 7.3 Update README.md with info about the Skills Marketplace
- [ ] 7.4 Create sample install commands for each tool that are accurate

## 8. Testing & Verification

- [ ] 8.1 Test navigation link works from all pages
- [ ] 8.2 Test responsive layout on mobile/tablet/desktop
- [ ] 8.3 Test tool filtering functionality
- [ ] 8.4 Test category filtering functionality
- [ ] 8.5 Test copy-to-clipboard on Chrome, Firefox, Safari
- [ ] 8.6 Test dark mode appearance
- [ ] 8.7 Verify all install commands are correct for each tool
- [ ] 8.8 Test with JavaScript disabled (graceful degradation)

## 9. Deployment

- [ ] 9.1 Run Jekyll build locally to verify no errors
- [ ] 9.2 Commit all changes
- [ ] 9.3 Push to GitHub
- [ ] 9.4 Verify GitHub Pages deploys successfully
- [ ] 9.5 Test live site at https://odykyi.github.io/agentic-comparison/skills/
