## ADDED Requirements

### Requirement: Terminal-Style Install Box

Skill cards SHALL display installation commands in a terminal-style box.

#### Scenario: Install section styling

- **WHEN** a skill card with installation commands renders
- **THEN** it SHALL have a gray background (#f5f5f5) with 2px black top border

#### Scenario: Command box styling

- **WHEN** the install command displays
- **THEN** it SHALL be in a white box with 2px black border and monospace font

#### Scenario: Install label

- **WHEN** the install section renders
- **THEN** it SHALL display an uppercase "Install" label in small text

### Requirement: Copy-to-Clipboard Button

Each install command SHALL have a copy button.

#### Scenario: Copy button present

- **WHEN** a skill card renders with install commands
- **THEN** a copy button SHALL appear next to each command

#### Scenario: Copy button feedback

- **WHEN** user clicks the copy button
- **THEN** it SHALL copy the command to clipboard and show visual feedback (checkmark icon)

#### Scenario: Copy button hover

- **WHEN** user hovers over the copy button
- **THEN** the icon color SHALL change to purple (#7c3aed)

### Requirement: Category Badge

Skill cards SHALL display a category badge in the header.

#### Scenario: Category badge styling

- **WHEN** a skill card header renders
- **THEN** it SHALL display a small uppercase category label in a bordered box

#### Scenario: Badge position

- **WHEN** the category badge renders
- **THEN** it SHALL appear above the skill name in the card header

### Requirement: Hover Lift Effect

Skill cards SHALL have the standard brutalist hover lift effect.

#### Scenario: Card hover state

- **WHEN** a user hovers over a skill card
- **THEN** it SHALL translate 2px up/left and display 4px shadow

### Requirement: Tool Compatibility Badges

Skill cards SHALL show which tools support the skill.

#### Scenario: Tool badges display

- **WHEN** a skill card renders
- **THEN** it SHALL display badges for each compatible tool

#### Scenario: Tool badge styling

- **WHEN** tool badges render
- **THEN** they SHALL be small bordered pills with the tool's brand color
