## ADDED Requirements

### Requirement: Skills marketplace page exists and is accessible

The system SHALL provide a Skills Marketplace page at `/skills/` path.

#### Scenario: User navigates to skills page

- **WHEN** user clicks "Skills" in the navigation header
- **THEN** the browser navigates to `/skills/`
- **AND** the page displays a list of featured skills

#### Scenario: Direct URL access

- **WHEN** user visits `/skills/` directly
- **THEN** the page loads successfully with a 200 status
- **AND** featured skills are displayed

### Requirement: Skills data is loaded from YAML

The system SHALL read skills definitions from `_data/skills/*.yml` files.

#### Scenario: Skills data file exists

- **GIVEN** a skill file exists at `_data/skills/code-review.yml`
- **WHEN** the skills page renders
- **THEN** that skill appears in the marketplace grid

#### Scenario: Multiple skills loaded

- **GIVEN** multiple skill YAML files exist
- **WHEN** the skills page renders
- **THEN** all skills are displayed in the grid

### Requirement: Skills display in a responsive grid

The system SHALL display skills in a responsive card grid layout.

#### Scenario: Desktop view

- **WHEN** user views on desktop (>992px)
- **THEN** skills display in 3-column grid

#### Scenario: Tablet view

- **WHEN** user views on tablet (768px-991px)
- **THEN** skills display in 2-column grid

#### Scenario: Mobile view

- **WHEN** user views on mobile (<768px)
- **THEN** skills display in 1-column grid

### Requirement: Skills can be filtered by tool compatibility

The system SHALL allow filtering skills by which AI tools support them.

#### Scenario: Filter by Codex

- **GIVEN** skills exist that support Codex
- **WHEN** user selects "Codex" filter
- **THEN** only Codex-compatible skills are displayed

#### Scenario: Filter by multiple tools

- **GIVEN** skills exist for multiple tools
- **WHEN** user selects "Codex" and "Claude Code" filters
- **THEN** skills compatible with either tool are displayed

### Requirement: Skills can be filtered by category

The system SHALL allow filtering skills by category.

#### Scenario: Filter by category

- **GIVEN** skills exist in multiple categories
- **WHEN** user selects "Git Workflows" category
- **THEN** only skills in that category are displayed

### Requirement: Skills display metadata

Each skill SHALL display: name, description, compatible tools, and category.

#### Scenario: View skill card

- **WHEN** user views a skill card
- **THEN** the following are visible:
  - Skill name
  - Short description (max 150 chars)
  - Tool compatibility badges
  - Category badge
  - Install command preview
