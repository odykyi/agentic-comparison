## ADDED Requirements

### Requirement: Sharp Border Styling

The navigation SHALL use sharp rectangles with thick black borders matching the brutalist aesthetic.

#### Scenario: Navbar border

- **WHEN** the navigation renders
- **THEN** it SHALL have a 2px solid black bottom border

#### Scenario: Nav links hover effect

- **WHEN** a user hovers over a nav link
- **THEN** the background SHALL invert to black with white text

### Requirement: Uppercase Typography

Navigation links SHALL use uppercase text with tight letter-spacing.

#### Scenario: Nav link text style

- **WHEN** navigation links render
- **THEN** they SHALL use uppercase text-transform, 0.875rem size, and 0.03em letter-spacing

### Requirement: Active State Styling

The active/current page link SHALL have inverted colors (black background, white text).

#### Scenario: Active page indicator

- **WHEN** viewing the current page
- **THEN** that page's nav link SHALL have black background and white text

### Requirement: Mobile Collapse Menu

The mobile navigation SHALL collapse into a hamburger menu with brutalist styling.

#### Scenario: Mobile hamburger button

- **WHEN** viewport is < 992px
- **THEN** the hamburger menu button SHALL have 2px black border and square corners

#### Scenario: Mobile menu open state

- **WHEN** the mobile menu is expanded
- **THEN** it SHALL have a 2px black top border and white background

### Requirement: Dropdown Styling

Dropdown menus SHALL match the brutalist border style.

#### Scenario: Dropdown border

- **WHEN** a dropdown menu opens
- **THEN** it SHALL have 2px solid black border with 0px border-radius

#### Scenario: Dropdown item hover

- **WHEN** hovering over a dropdown item
- **THEN** it SHALL invert to black background with white text
