## ADDED Requirements

### Requirement: Twitter Card Rich Data

Twitter Cards SHALL include enhanced metadata for better social sharing.

#### Scenario: Twitter site attribution

- **WHEN** any page renders
- **THEN** the head SHALL contain twitter:site meta tag with site handle (@agentic_compare)

#### Scenario: Twitter card image dimensions

- **WHEN** a page has custom Open Graph image
- **THEN** the head SHALL include twitter:image:width (800) and twitter:image:height (418) for proper rendering

#### Scenario: Twitter label/data pairs

- **WHEN** a tool page renders
- **THEN** the head SHALL include twitter:label1="Price" and twitter:data1="Free" (or actual price)

### Requirement: Open Graph Article Timestamps

Dated content SHALL include article timestamps for better indexing.

#### Scenario: Article published time

- **WHEN** a page with date published renders
- **THEN** the head SHALL contain article:published_time with ISO 8601 timestamp

#### Scenario: Article modified time

- **WHEN** a page has been modified
- **THEN** the head SHALL contain article:modified_time with ISO 8601 timestamp

### Requirement: Open Graph Image Dimensions

Open Graph images SHALL include dimension metadata.

#### Scenario: OG image width and height

- **WHEN** a page renders with og:image
- **THEN** the head SHALL include og:image:width (1200) and og:image:height (630)

### Requirement: OG Locale and Site Name

Open Graph tags SHALL include locale and proper site attribution.

#### Scenario: OG locale present

- **WHEN** any page renders
- **THEN** the head SHALL contain og:locale with value "en_US"

#### Scenario: OG site name consistent

- **WHEN** any page renders
- **THEN** the og:site_name SHALL be consistent across all pages ("Agentic Comparison")
