## 1. Audit and Fix Broken Links

- [ ] 1.1 Audit all internal links in `_includes/navigation.html` and identify broken paths
- [ ] 1.2 Audit tool page links in `tools/` directory - check for naming mismatches (e.g., `claude_code` vs `claude-code`)
- [ ] 1.3 Audit skill links in `skills/` directory and `_data/skills/` - identify broken external repo URLs (e.g., `research-ai/skills`)
- [ ] 1.4 Fix navigation links to point to correct tool page paths
- [ ] 1.5 Fix comparison table links in `compare/index.html` to use correct URLs
- [ ] 1.6 Fix or remove broken skill repository links (e.g., update to correct GitHub org/repo or mark as unavailable)
- [ ] 1.7 Standardize all tool page URLs to kebab-case matching data keys
- [ ] 1.8 Add Jekyll redirect-from for old tool page URLs if URLs change
- [ ] 1.9 Verify footer links in `_includes/footer.html` are valid
- [ ] 1.10 Manually test all navigation, comparison, skill, and footer links

## 2. Fix Color Contrast Issues

- [ ] 2.1 Audit current color contrast using browser DevTools or contrast checker tool
- [ ] 2.2 Identify all failing colors (target: 4.5:1 for text, 3:1 for UI components)
- [ ] 2.3 Update `_sass/_variables.scss` - fix `$text-muted` for better contrast (current: `#6c757d`)
- [ ] 2.4 Update primary color variables to meet 4.5:1 contrast on white backgrounds
- [ ] 2.5 Update link colors (`$link-color`) to meet 4.5:1 contrast
- [ ] 2.6 Update badge background colors for 4.5:1 text contrast
- [ ] 2.7 Update button styles for 4.5:1 text-to-background contrast
- [ ] 2.8 Update form input borders for 3:1 boundary contrast
- [ ] 2.9 Run visual regression check to ensure brand aesthetic is maintained
- [ ] 2.10 Verify all contrast fixes meet WCAG 2.1 AA standards

## 3. Add Automated Link Checking

- [ ] 3.1 Add `html-proofer` gem to `Gemfile`
- [ ] 3.2 Run `bundle install` to install dependencies
- [ ] 3.3 Create `Rakefile` with htmlproofer task for link validation
- [ ] 3.4 Configure htmlproofer to check internal links and skill repo external links
- [ ] 3.5 Add timeout configuration for external link checks to prevent CI hangs
- [ ] 3.6 Run htmlproofer locally and verify it catches any remaining broken links
- [ ] 3.7 Fix any additional broken internal links discovered by htmlproofer
- [ ] 3.8 Create report of broken external skill links for manual review

## 4. Add Automated Accessibility Testing

- [ ] 4.1 Add `pa11y-ci` npm package to `package.json` (create if doesn't exist)
- [ ] 4.2 Run `npm install` to install pa11y-ci
- [ ] 4.3 Create `.pa11yci` configuration file with WCAG 2.1 AA rules
- [ ] 4.4 Configure pa11y to ignore known acceptable patterns (e.g., Bootstrap decorative elements)
- [ ] 4.5 Create npm script `"test:a11y": "pa11y-ci"` in `package.json`
- [ ] 4.6 Run pa11y-ci locally and capture baseline violations
- [ ] 4.7 Fix any additional accessibility issues discovered by pa11y
- [ ] 4.8 Verify pa11y passes with zero WCAG 2.1 AA violations

## 5. CI/CD Integration

- [ ] 5.1 Update `.github/workflows/jekyll.yml` (or create) to include htmlproofer step
- [ ] 5.2 Add pa11y-ci step to GitHub Actions workflow
- [ ] 5.3 Configure CI to fail build on broken internal links
- [ ] 5.4 Configure CI to fail build on WCAG 2.1 AA violations
- [ ] 5.5 Add Node.js setup step to CI for pa11y-ci
- [ ] 5.6 Test CI workflow on a feature branch
- [ ] 5.7 Verify CI catches intentional broken link and contrast violation

## 6. Documentation and Final Verification

- [ ] 6.1 Update `README.md` with instructions for running local checks
- [ ] 6.2 Document color palette changes in design notes
- [ ] 6.3 Run full site build locally and verify no Jekyll errors
- [ ] 6.4 Run htmlproofer and confirm zero broken internal links
- [ ] 6.5 Run pa11y-ci and confirm zero WCAG 2.1 AA violations
- [ ] 6.6 Manually verify navigation, comparison table, and footer links work
- [ ] 6.7 Test on mobile viewport to ensure no mobile-specific issues
