## ADDED Requirements

### Requirement: Automated link checking in build pipeline
The system SHALL run automated link validation during the build process for both internal and external links.

#### Scenario: Broken internal links fail the build
- **WHEN** the site is built in CI
- **AND** there are broken internal links (including skill detail pages)
- **THEN** the build fails with an error message identifying the broken links

#### Scenario: Broken external skill repo links are reported
- **WHEN** the site is built in CI
- **AND** external skill repository links return 404 (e.g., `github.com/research-ai/skills/*`)
- **THEN** the build warns with a list of broken external skill links

#### Scenario: External link timeouts handled gracefully
- **WHEN** the site is built
- **AND** external links timeout
- **THEN** the build warns but does not fail

### Requirement: Automated accessibility testing in CI
The system SHALL run automated accessibility tests against WCAG 2.1 AA standards in the CI pipeline.

#### Scenario: Contrast violations fail the build
- **WHEN** the site is built in CI
- **AND** there are color contrast violations below 4.5:1
- **THEN** the build fails with error messages identifying the violations

#### Scenario: Missing alt text is reported
- **WHEN** the site is built
- **AND** images lack alt text
- **THEN** the build fails with a list of images requiring alt attributes

#### Scenario: Invalid ARIA is detected
- **WHEN** the site is built
- **AND** there are invalid ARIA attributes or roles
- **THEN** the build fails with details of the violations

### Requirement: Local accessibility testing capability
The system SHALL provide a way to run accessibility checks locally during development.

#### Scenario: Developer runs local checks
- **WHEN** a developer runs the accessibility test command locally
- **THEN** a report is generated showing all WCAG 2.1 AA violations
- **AND** the report includes specific element selectors and suggested fixes
