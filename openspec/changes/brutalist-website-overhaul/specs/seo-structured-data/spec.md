## ADDED Requirements

### Requirement: Tool Schema Markup

Each tool page SHALL include Schema.org SoftwareApplication JSON-LD structured data.

#### Scenario: Tool page structured data

- **WHEN** a tool detail page renders (e.g., /tools/opencode/)
- **THEN** the head SHALL contain a JSON-LD script tag with @type: SoftwareApplication

#### Scenario: Required SoftwareApplication properties

- **WHEN** Schema.org data is validated
- **THEN** it SHALL include name, description, applicationCategory (DeveloperApplication), and operatingSystem

#### Scenario: Aggregate rating for tools

- **WHEN** a tool has comparison data
- **THEN** the Schema.org data SHALL include aggregateRating with ratingValue and reviewCount

### Requirement: Skill Schema Markup

Each skill SHALL include Schema.org SoftwareSourceCode JSON-LD structured data.

#### Scenario: Skill page structured data

- **WHEN** a skill detail page renders
- **THEN** the head SHALL contain a JSON-LD script tag with @type: SoftwareSourceCode

#### Scenario: Required SoftwareSourceCode properties

- **WHEN** Schema.org data is validated
- **THEN** it SHALL include name, description, programmingLanguage (where applicable), and codeRepository (if available)

### Requirement: Organization Schema

The site SHALL include Organization schema on all pages.

#### Scenario: Organization structured data present

- **WHEN** any page renders
- **THEN** it SHALL include JSON-LD with @type: Organization including name, url, and logo

### Requirement: Breadcrumb Schema

All pages except home SHALL include BreadcrumbList structured data.

#### Scenario: Breadcrumb structured data

- **WHEN** a non-homepage renders
- **THEN** the head SHALL contain BreadcrumbList JSON-LD showing page hierarchy

### Requirement: Meta Tag Compliance

All pages SHALL have proper meta tags, Open Graph, and Twitter Cards.

#### Scenario: Meta description present

- **WHEN** any page renders
- **THEN** the head SHALL contain a meta description tag with relevant content

#### Scenario: Open Graph tags present

- **WHEN** any page renders
- **THEN** the head SHALL contain og:title, og:description, og:image, and og:url tags

#### Scenario: Twitter Card tags present

- **WHEN** any page renders
- **THEN** the head SHALL contain twitter:card, twitter:title, twitter:description, and twitter:image tags
