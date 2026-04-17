## ADDED Requirements

### Requirement: Generate correct install command per tool

The system SHALL generate tool-specific install commands based on each tool's CLI syntax.

#### Scenario: Codex install command

- **GIVEN** skill "code-review" with Codex support
- **WHEN** generating install command for Codex
- **THEN** command is "codex skills install code-review"

#### Scenario: Claude Code install command

- **GIVEN** skill "code-review" with Claude Code support
- **WHEN** generating install command for Claude Code
- **THEN** command is "claude skills install code-review"

#### Scenario: OpenCode install command

- **GIVEN** skill "code-review" with OpenCode support
- **WHEN** generating install command for OpenCode
- **THEN** command is "opencode skills install code-review"

### Requirement: Install command is tool-aware

The system SHALL use the correct command syntax for each AI tool.

#### Scenario: Different CLI patterns

- **GIVEN** skills for multiple tools with different CLI patterns
- **WHEN** generating commands
- **THEN** each tool uses its correct syntax:
  - Codex: "codex skills install <skill>"
  - Claude Code: "claude skills install <skill>"
  - Aider: "aider --skill <skill>"
  - Continue: "continue install <skill>"

### Requirement: Handle missing tool support

The system SHALL gracefully handle skills that don't support a tool.

#### Scenario: Tool not supported

- **GIVEN** a skill that doesn't support Continue
- **WHEN** user selects Continue from tool selector
- **THEN** a "Not available for Continue" message is shown
- **AND** the copy button is disabled

### Requirement: Support custom install commands

The system SHALL support custom install commands for complex skills.

#### Scenario: Skill with custom install

- **GIVEN** a skill requiring multiple commands
- **WHEN** displaying install instructions
- **THEN** all commands are displayed in sequence
- **AND** a "Copy all" button copies the entire script
