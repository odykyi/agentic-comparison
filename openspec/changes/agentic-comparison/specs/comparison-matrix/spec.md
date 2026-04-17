## ADDED Requirements

### Requirement: Feature matrix displays tool capabilities
The system SHALL render a sortable, filterable table comparing agentic tools across feature dimensions.

#### Scenario: User views feature matrix
- **WHEN** a user navigates to the features comparison page
- **THEN** the system displays a table with tools as columns and features as rows
- **AND** each cell shows availability (checkmark/X/partial) with hover tooltip

#### Scenario: User filters by feature
- **WHEN** a user clicks a feature category filter (e.g., "MCP Support")
- **THEN** the system shows only rows matching that category
- **AND** the URL updates to include the filter parameter

#### Scenario: User sorts by tool
- **WHEN** a user clicks a tool column header
- **THEN** the system sorts features by availability for that tool (available first)

### Requirement: Matrix supports tool filtering
The system SHALL allow users to select which tools appear in comparison tables.

#### Scenario: User selects subset of tools
- **WHEN** a user unchecks a tool from the filter panel
- **THEN** that tool's column is hidden from all matrices
- **AND** the preference persists in localStorage

#### Scenario: User compares exactly two tools
- **WHEN** exactly two tools are selected
- **THEN** the system highlights differences with color coding
- **AND** shows a "diff only" toggle option

### Requirement: Feature categories organize matrix rows
The system SHALL group features into logical categories for easier navigation.

#### Scenario: Category expansion
- **WHEN** a user clicks a category header (e.g., "Core Features")
- **THEN** the category expands to show all features within
- **AND** an expand/collapse all control is available

#### Scenario: Category-based filtering
- **WHEN** a user selects a category from the sidebar
- **THEN** only features in that category are displayed
- **AND** a breadcrumb shows the current category filter

### Requirement: Matrix data is YAML-driven
The system SHALL read comparison data from YAML files in the `_data/` directory.

#### Scenario: Adding new tool via YAML
- **WHEN** a contributor adds a new tool YAML file to `_data/tools/`
- **THEN** the build system automatically includes it in all matrices
- **AND** the site regenerates within 5 minutes via GitHub Actions

#### Scenario: Updating feature availability
- **WHEN** a maintainer updates a feature value in YAML
- **THEN** the change reflects on the site after rebuild
- **AND** the git commit hash appears in the page footer

### Requirement: Mobile-responsive matrix display
The system SHALL provide usable comparison tables on mobile devices.

#### Scenario: Mobile view
- **WHEN** a user accesses the site on a viewport < 768px
- **THEN** the matrix converts to a card-based layout
- **AND** each card shows one tool with all its features
- **AND** a tool selector dropdown replaces column headers

#### Scenario: Horizontal scroll alternative
- **WHEN** a user accesses on tablet (768px - 1024px)
- **THEN** the matrix allows horizontal scroll with sticky first column
- **AND** the sticky column shows feature names
