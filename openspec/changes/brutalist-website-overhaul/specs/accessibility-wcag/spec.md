## ADDED Requirements

### Requirement: WCAG 2.1 AA Color Contrast

All text SHALL meet WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text).

#### Scenario: Body text contrast

- **WHEN** body text (16px, normal weight) renders on white background
- **THEN** the contrast ratio SHALL be at least 4.5:1 (black on white = 21:1)

#### Scenario: Purple accent contrast

- **WHEN** purple (#7c3aed) text renders
- **THEN** the contrast ratio SHALL be at least 4.5:1 against white background

### Requirement: Keyboard Navigation

All interactive elements SHALL be keyboard accessible with visible focus indicators.

#### Scenario: Focusable elements

- **WHEN** a user presses Tab key
- **THEN** focus SHALL move sequentially through all interactive elements (links, buttons, form inputs)

#### Scenario: Visible focus indicator

- **WHEN** an element receives keyboard focus
- **THEN** it SHALL display a 3px solid purple outline with 2px offset

### Requirement: Skip Navigation

The site SHALL provide a "Skip to main content" link for keyboard users.

#### Scenario: Skip link available

- **WHEN** the page loads
- **THEN** a "Skip to main content" link SHALL be the first focusable element

#### Scenario: Skip link functionality

- **WHEN** a user activates the skip link
- **THEN** focus SHALL move to the main content area and the main content SHALL be announced by screen readers

### Requirement: Alt Text for Images

All images SHALL have descriptive alt text.

#### Scenario: Tool logo alt text

- **WHEN** a tool logo image renders
- **THEN** it SHALL have alt text describing the tool name (e.g., "OpenCode logo")

#### Scenario: Decorative images

- **WHEN** an image is purely decorative
- **THEN** it SHALL have empty alt text (alt="") to be ignored by screen readers

### Requirement: ARIA Labels

Interactive elements without visible text SHALL have ARIA labels.

#### Scenario: Icon-only buttons

- **WHEN** a button contains only an icon (no visible text)
- **THEN** it SHALL have an aria-label describing its function

#### Scenario: Search input

- **WHEN** the search input field renders
- **THEN** it SHALL have an associated label or aria-label="Search"

### Requirement: Semantic HTML

The site SHALL use semantic HTML5 elements.

#### Scenario: Page structure

- **WHEN** the page renders
- **THEN** it SHALL use nav, main, header, footer, article, and section elements appropriately

#### Scenario: Heading hierarchy

- **WHEN** heading levels are inspected
- **THEN** they SHALL follow a logical hierarchy (h1 → h2 → h3) without skips

### Requirement: Form Labels

All form inputs SHALL have associated labels.

#### Scenario: Search input label

- **WHEN** the site search input renders
- **THEN** it SHALL have a visible or associated label element
