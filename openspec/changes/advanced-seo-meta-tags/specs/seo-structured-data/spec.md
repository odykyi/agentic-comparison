## MODIFIED Requirements

### Requirement: Organization Schema Enhancement

The existing Organization schema SHALL be enhanced with additional properties.

#### Scenario: Extended Organization properties

- **WHEN** any page renders
- **THEN** the Organization JSON-LD SHALL include: name, url, logo, description, sameAs (social profiles), and contactPoint

#### Scenario: SameAs social profiles

- **WHEN** the Organization schema renders
- **THEN** the sameAs array SHALL contain GitHub repository URL

### Requirement: BreadcrumbList Enhancement

The existing BreadcrumbList schema SHALL support deeper page hierarchies.

#### Scenario: Multi-level breadcrumbs

- **WHEN** a tool detail page (e.g., /tools/opencode/) renders
- **THEN** the BreadcrumbList SHALL have 3 items: Home, Tools, OpenCode

#### Scenario: Current page in breadcrumbs

- **WHEN** breadcrumbs are generated for any page
- **THEN** the last item SHALL have @id pointing to the current page URL
