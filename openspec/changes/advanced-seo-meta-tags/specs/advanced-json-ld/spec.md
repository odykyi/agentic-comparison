## ADDED Requirements

### Requirement: SoftwareApplication Schema for Tools

Each tool page SHALL include comprehensive SoftwareApplication JSON-LD structured data.

#### Scenario: SoftwareApplication properties present

- **WHEN** a tool detail page renders
- **THEN** the head SHALL contain JSON-LD with @type: SoftwareApplication including name, description, applicationCategory, operatingSystem, softwareVersion, aggregateRating, offers, and featureList

#### Scenario: Aggregate rating calculation

- **WHEN** a tool has 8 features marked as supported
- **THEN** the aggregateRating SHALL be 4.0 (8/10 \* 5)

#### Scenario: Tool schema @id

- **WHEN** a tool page renders for "opencode"
- **THEN** the SoftwareApplication SHALL have "@id": "{{ site.url }}/tools/opencode/#software"

### Requirement: SoftwareSourceCode Schema for Skills

Each skill SHALL include SoftwareSourceCode JSON-LD structured data when applicable.

#### Scenario: SoftwareSourceCode properties present

- **WHEN** a skill detail page renders
- **THEN** the head SHALL contain JSON-LD with @type: SoftwareSourceCode including name, description, programmingLanguage (if applicable), codeRepository, and datePublished

#### Scenario: Skill programming language

- **WHEN** a skill has "javascript" in its keywords
- **THEN** the programmingLanguage SHALL be set to "JavaScript"

### Requirement: ItemList Schema for Skills Marketplace

The skills marketplace page SHALL include ItemList schema for discoverability.

#### Scenario: ItemList structure

- **WHEN** the skills marketplace page renders with 42 skills
- **THEN** the head SHALL contain JSON-LD with @type: ItemList containing 42 itemListElement entries

#### Scenario: ItemList element properties

- **WHEN** an item in the ItemList is rendered
- **THEN** it SHALL include @type: ListItem, position, name, and url for each skill

### Requirement: WebSite Schema with SearchAction

The homepage SHALL include WebSite schema with SearchAction for site search in Google.

#### Scenario: WebSite schema present

- **WHEN** the homepage renders
- **THEN** the head SHALL contain JSON-LD with @type: WebSite including name, url, and potentialAction

#### Scenario: SearchAction configuration

- **WHEN** the WebSite schema includes potentialAction
- **THEN** it SHALL have @type: SearchAction with target template "{site_url}/search/?q={search_term_string}"

### Requirement: FAQPage Schema for Reference Pages

The terminology and commands pages SHALL include FAQPage schema.

#### Scenario: FAQPage mainEntity

- **WHEN** a terminology page with 12 term definitions renders
- **THEN** the head SHALL contain JSON-LD with @type: FAQPage containing 12 mainEntity items

#### Scenario: Question and Answer structure

- **WHEN** an FAQ item is rendered
- **THEN** it SHALL have @type: Question with name and acceptedAnswer containing @type: Answer with text
