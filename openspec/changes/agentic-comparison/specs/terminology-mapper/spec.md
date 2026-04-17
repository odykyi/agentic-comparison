## ADDED Requirements

### Requirement: Terminology equivalency map
The system SHALL display a cross-reference showing how each tool names equivalent concepts.

#### Scenario: Viewing concept equivalencies
- **WHEN** a user navigates to the terminology page
- **THEN** the system displays a table with canonical concepts as rows
- **AND** each tool has a column showing their specific terminology
- **AND** clicking a term shows detailed explanation popup

#### Scenario: Searching for term
- **WHEN** a user types "skill" in the terminology search
- **THEN** results show all tools and what they call equivalent concepts
- **AND** Codex shows "skill", Claude Code shows "command", etc.

### Requirement: Canonical concept definitions
The system SHALL define neutral terminology that maps to all tool-specific terms.

#### Scenario: Canonical concept detail
- **WHEN** a user clicks a canonical concept (e.g., "reusable-block")
- **THEN** a modal shows the definition and all tool implementations
- **AND** includes code examples from each tool's documentation

#### Scenario: Tool-perspective view
- **WHEN** a user selects "From Codex perspective"
- **THEN** the system shows "In Codex: skill / In Claude Code: command / In OpenCode: agent"
- **AND** highlights what Codex calls each concept

### Requirement: Concept relationship diagrams
The system SHALL visualize how concepts relate within each tool's architecture.

#### Scenario: Architecture diagram
- **WHEN** a user clicks "View Architecture" for a tool
- **THEN** an interactive diagram shows concept relationships
- **AND** includes: skills → commands → agents → MCP → tools

#### Scenario: Comparing architectures
- **WHEN** a user selects "Compare Architectures"
- **THEN** side-by-side diagrams highlight structural similarities
- **AND** connecting lines show equivalent components

### Requirement: Terminology change tracking
The system SHALL track when tools rename concepts between versions.

#### Scenario: Historical view
- **WHEN** a user clicks "Version History" for a term
- **THEN** a timeline shows what the concept was called in each version
- **AND** includes migration notes if terminology changed

#### Scenario: Deprecation notices
- **WHEN** a tool marks a term as deprecated
- **THEN** the system displays a warning badge
- **AND** shows the new term to use
