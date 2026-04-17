## ADDED Requirements

### Requirement: CSS Custom Properties

The design system SHALL provide CSS custom properties for all design tokens including colors, typography, spacing, and borders.

#### Scenario: Color tokens available

- **WHEN** a developer inspects the `:root` styles
- **THEN** they SHALL see custom properties for --color-black, --color-white, --color-purple, and gray scale

#### Scenario: Typography tokens available

- **WHEN** a developer inspects the `:root` styles
- **THEN** they SHALL see custom properties for --font-display, --font-body, --font-mono

#### Scenario: Spacing tokens available

- **WHEN** a developer inspects the `:root` styles
- **THEN** they SHALL see custom properties from --space-1 (4px) to --space-32 (128px)

### Requirement: Border System

All components SHALL use sharp corners (0px border-radius) and thick 2px borders in black by default.

#### Scenario: Card component borders

- **WHEN** a card component renders
- **THEN** it SHALL have 2px solid black border with 0px border-radius

#### Scenario: Button borders

- **WHEN** a button component renders
- **THEN** it SHALL have 2px solid black border with 0px border-radius

### Requirement: Typography Scale

The design system SHALL provide a typographic scale using Space Grotesk for display, DM Sans for body, and JetBrains Mono for code.

#### Scenario: Hero headline typography

- **WHEN** a hero h1 element renders
- **THEN** it SHALL use Space Grotesk font family with size clamp(3rem, 8vw, 6rem)

#### Scenario: Body text typography

- **WHEN** body text renders
- **THEN** it SHALL use DM Sans font family with 16px size and 1.6 line-height

#### Scenario: Code/monospace typography

- **WHEN** code elements render
- **THEN** they SHALL use JetBrains Mono font family

### Requirement: Hover Lift Effect

Card components SHALL lift on hover with shadow effect.

#### Scenario: Card hover state

- **WHEN** a user hovers over a card component
- **THEN** it SHALL translate 2px up/left and show 4px 4px 0 black shadow

### Requirement: Purple Accent Color

The electric purple (#7c3aed) SHALL be used for accent elements, hover states, and highlights.

#### Scenario: Purple accent on headlines

- **WHEN** text uses the .highlight class within a hero
- **THEN** it SHALL render in #7c3aed color

#### Scenario: Purple hover on primary button

- **WHEN** a user hovers over a .btn-primary button
- **THEN** it SHALL change background from black to #7c3aed
