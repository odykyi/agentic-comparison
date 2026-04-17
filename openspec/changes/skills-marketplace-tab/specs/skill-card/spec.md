## ADDED Requirements

### Requirement: Skill card component displays skill information

The system SHALL provide a reusable skill card component that displays skill metadata.

#### Scenario: Render skill card

- **GIVEN** a skill with name "Code Review", description "AI-powered code review", compatible tools ["codex", "claude_code"]
- **WHEN** the skill card renders
- **THEN** it displays:
  - "Code Review" as the title
  - "AI-powered code review" as description
  - Badges for "Codex" and "Claude Code"
  - An install command preview

### Requirement: Skill card has copy-to-clipboard functionality

The system SHALL provide a button to copy the install command to clipboard.

#### Scenario: Copy install command

- **GIVEN** a skill card with install command "codex skills install code-review"
- **WHEN** user clicks the "Copy" button
- **THEN** the command is copied to clipboard
- **AND** user receives visual feedback (e.g., "Copied!" tooltip)

#### Scenario: Copy feedback timeout

- **GIVEN** user has clicked copy button
- **AND** "Copied!" feedback is showing
- **WHEN** 2 seconds pass
- **THEN** the button returns to normal state

### Requirement: Skill card shows tool compatibility

The system SHALL display which AI tools the skill is compatible with.

#### Scenario: Single tool compatibility

- **GIVEN** a skill compatible with only Codex
- **WHEN** the skill card renders
- **THEN** a "Codex" badge is displayed

#### Scenario: Multiple tool compatibility

- **GIVEN** a skill compatible with Codex, Claude Code, and OpenCode
- **WHEN** the skill card renders
- **THEN** badges for all three tools are displayed

### Requirement: Skill card links to tool-specific install

The system SHALL generate tool-specific install commands based on selected tool.

#### Scenario: Default install command

- **GIVEN** a skill with default install command
- **WHEN** skill card renders initially
- **THEN** the default tool's install command is shown

#### Scenario: Tool selector changes command

- **GIVEN** a skill with commands for multiple tools
- **WHEN** user selects "Claude Code" from tool dropdown
- **THEN** the install command updates to Claude Code's syntax
