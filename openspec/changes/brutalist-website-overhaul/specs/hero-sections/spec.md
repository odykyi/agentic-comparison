## ADDED Requirements

### Requirement: Massive Headline Typography

Hero sections SHALL use massive headlines (up to 72px) with tight line-height.

#### Scenario: Hero headline size

- **WHEN** a hero h1 renders
- **THEN** it SHALL use clamp(3rem, 8vw, 6rem) sizing with 0.95 line-height

#### Scenario: Hero headline letter-spacing

- **WHEN** a hero h1 renders
- **THEN** it SHALL have -0.04em letter-spacing for tight display typography

### Requirement: Bordered Section Separator

Hero sections SHALL have a thick bottom border separating from content.

#### Scenario: Hero bottom border

- **WHEN** a hero section renders
- **THEN** it SHALL have a 2px solid black bottom border

### Requirement: Purple Highlight Class

Hero sections SHALL support purple text highlighting for emphasis.

#### Scenario: Highlight text color

- **WHEN** text has the .highlight class within a hero
- **THEN** it SHALL render in purple (#7c3aed)

#### Scenario: Highlight usage

- **WHEN** key words in the headline need emphasis
- **THEN** wrapping them in .highlight SHALL make them purple

### Requirement: Hero Label Component

Hero sections SHALL support a small bordered label component above the headline.

#### Scenario: Hero label styling

- **WHEN** a hero-label element renders
- **THEN** it SHALL be a small bordered box with uppercase text

### Requirement: Generous Vertical Padding

Hero sections SHALL have substantial vertical padding.

#### Scenario: Hero padding

- **WHEN** a hero section renders
- **THEN** it SHALL have 96px-128px vertical padding

### Requirement: Dark Hero Variant

Hero sections SHALL support a dark (black background) variant.

#### Scenario: Dark hero styling

- **WHEN** a hero has .hero-dark class
- **THEN** it SHALL have black background with white text and white bottom border
