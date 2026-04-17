## ADDED Requirements

### Requirement: Canonical URL Implementation

All pages SHALL include self-referencing canonical URLs.

#### Scenario: Canonical on homepage

- **WHEN** the homepage renders
- **THEN** the head SHALL contain link rel="canonical" pointing to the absolute homepage URL

#### Scenario: Canonical on tool pages

- **WHEN** a tool page renders (e.g., /tools/opencode/)
- **THEN** the canonical URL SHALL match the page URL with trailing slash

### Requirement: Robots Meta Directives

Pages SHALL include appropriate robots meta directives for crawl control.

#### Scenario: Default index,follow

- **WHEN** a regular content page renders
- **THEN** the robots meta SHALL be "index, follow" (or omitted, implying default)

#### Scenario: Noindex for utility pages

- **WHEN** a search results or utility page renders
- **THEN** the robots meta SHALL be "noindex, follow" to prevent indexing but allow link following

### Requirement: Meta Keywords for Skills and Tools

Skills and tools pages SHALL include relevant meta keywords.

#### Scenario: Tool meta keywords

- **WHEN** a tool page renders for "Codex"
- **THEN** the meta keywords SHALL include "codex, openai, cli, ai coding, terminal"

#### Scenario: Skill meta keywords

- **WHEN** a skill page renders
- **THEN** the meta keywords SHALL include skill name, category, and compatible tools

### Requirement: Meta Description Enhancement

All pages SHALL have descriptive, unique meta descriptions.

#### Scenario: Unique descriptions per tool

- **WHEN** comparing two tool pages
- **THEN** each SHALL have a distinct meta description specific to that tool

#### Scenario: Description length compliance

- **WHEN** a meta description renders
- **THEN** it SHALL be between 50-160 characters for optimal display
