## ADDED Requirements

### Requirement: Command equivalency table
The system SHALL provide a searchable table showing how to perform equivalent actions across tools.

#### Scenario: Finding equivalent command
- **WHEN** a user searches for "help" in the command table
- **THEN** results show: Codex `codex --help`, Claude Code `/help`, OpenCode `opencode help`
- **AND** includes command description and common flags

#### Scenario: Task-based search
- **WHEN** a user filters by task category "file operations"
- **THEN** all file-related commands appear from all tools
- **AND** grouped by specific action (read, write, search)

### Requirement: Command detail pages
The system SHALL generate individual pages for each command with full documentation.

#### Scenario: Command detail view
- **WHEN** a user clicks on a specific command row
- **THEN** a detail page opens with syntax, examples, and options
- **AND** includes "try it" section with copy-paste commands

#### Scenario: Cross-tool comparison on detail page
- **WHEN** viewing a command detail page
- **THEN** a sidebar shows how other tools accomplish the same task
- **AND** includes direct links to those commands' pages

### Requirement: Command examples with context
The system SHALL provide practical examples showing commands in realistic scenarios.

#### Scenario: Scenario-based examples
- **WHEN** a user clicks "Examples" tab on a command page
- **THEN** scenario cards appear (e.g., "Initialize new project")
- **AND** each card shows the exact commands for all tools

#### Scenario: Interactive example builder
- **WHEN** a user selects parameters (e.g., "with verbose output")
- **THEN** the command example updates dynamically
- **AND** reflects the selected options across all tools

### Requirement: Common workflow guides
The system SHALL document multi-step workflows showing command sequences.

#### Scenario: Workflow view
- **WHEN** a user selects "Workflow: Code Review"
- **THEN** a step-by-step guide shows commands for each stage
- **AND** each step includes the command for the selected tool

#### Scenario: Tool-switching workflow
- **WHEN** a user selects "Switching from Codex to Claude Code"
- **THEN** the guide shows command mappings side-by-side
- **AND** highlights syntax differences and gotchas

### Requirement: Command verification status
The system SHALL indicate whether command documentation has been verified.

#### Scenario: Verification badge
- **WHEN** viewing a command with verified documentation
- **THEN** a green checkmark appears with "Verified in v1.2.3"
- **AND** unverified commands show a "Community-contributed" badge

#### Scenario: Reporting outdated commands
- **WHEN** a user clicks "Report outdated"
- **THEN** a GitHub issue template opens pre-filled with command details
- **AND** includes current documentation and user's correction
