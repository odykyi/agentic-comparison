## ADDED Requirements

### Requirement: Sharp Table Borders

Comparison tables SHALL have sharp corners and thick borders.

#### Scenario: Table outer border

- **WHEN** a comparison table renders
- **THEN** it SHALL have 2px solid black outer border with 0px border-radius

#### Scenario: Table cell borders

- **WHEN** table cells render
- **THEN** they SHALL have 1px solid light gray internal borders

### Requirement: Black Header Row

Table headers SHALL have black background with white text.

#### Scenario: Header styling

- **WHEN** table header cells (th) render
- **THEN** they SHALL have black background (#000000) with white text

#### Scenario: Header typography

- **WHEN** table headers render
- **THEN** they SHALL use uppercase text, 0.75rem size, and 0.08em letter-spacing

### Requirement: Sticky Header

Table headers SHALL stick to the top when scrolling.

#### Scenario: Sticky header behavior

- **WHEN** user scrolls down a long comparison table
- **THEN** the header row SHALL remain fixed at the top (below navbar)

### Requirement: Status Icon Styling

Status indicators SHALL use bordered square boxes (not circles).

#### Scenario: Yes status icon

- **WHEN** a feature is supported (status-yes)
- **THEN** it SHALL display a black square with white checkmark

#### Scenario: No status icon

- **WHEN** a feature is not supported (status-no)
- **THEN** it SHALL display a gray-bordered empty square

#### Scenario: Partial status icon

- **WHEN** a feature is partially supported (status-partial)
- **THEN** it SHALL display a purple square with white partial indicator

### Requirement: Row Hover Effect

Table rows SHALL highlight on hover.

#### Scenario: Row hover

- **WHEN** user hovers over a table row
- **THEN** the row background SHALL change to light gray (#f5f5f5)

### Requirement: Tool Column Coloring

Tool columns SHALL have subtle left border coloring with the tool's brand color.

#### Scenario: Tool column accent

- **WHEN** a tool column renders in comparison table
- **THEN** it SHALL have a 4px left border in the tool's brand color
