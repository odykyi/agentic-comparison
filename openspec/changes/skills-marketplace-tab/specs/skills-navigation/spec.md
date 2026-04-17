## ADDED Requirements

### Requirement: Skills tab in main navigation

The system SHALL display a "Skills" link in the main navigation header.

#### Scenario: View navigation on desktop

- **GIVEN** user views site on desktop
- **WHEN** looking at the navigation bar
- **THEN** a "Skills" link is visible between "MCP" and "Pricing"

#### Scenario: View navigation on mobile

- **GIVEN** user views site on mobile
- **WHEN** opening the hamburger menu
- **THEN** a "Skills" link is visible in the collapsed menu

### Requirement: Skills link navigates to marketplace

The system SHALL navigate to the skills marketplace page when the Skills link is clicked.

#### Scenario: Click Skills in nav

- **GIVEN** user is on any page
- **WHEN** user clicks "Skills" in navigation
- **THEN** browser navigates to `/skills/`

### Requirement: Active state for current page

The system SHALL highlight the Skills navigation item when on the skills page.

#### Scenario: On skills page

- **GIVEN** user is on `/skills/`
- **WHEN** viewing the navigation
- **THEN** the "Skills" link has an active/highlighted state

#### Scenario: On other pages

- **GIVEN** user is on `/features/`
- **WHEN** viewing the navigation
- **THEN** the "Skills" link does NOT have active state
- **AND** "Features" link has active state

### Requirement: Skills navigation order

The system SHALL place the Skills link in the correct position in navigation order.

#### Scenario: Navigation order

- **WHEN** viewing the full navigation
- **THEN** the order is:
  1. Home
  2. Features
  3. Full Comparison
  4. Commands
  5. Terminology
  6. MCP
  7. **Skills**
  8. Pricing
  9. Tools (dropdown)
