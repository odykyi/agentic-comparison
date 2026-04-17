## ADDED Requirements

### Requirement: Aggregate Rating Markup

Tools SHALL display aggregate ratings using schema.org/AggregateRating for rich snippets.

#### Scenario: AggregateRating in SoftwareApplication

- **WHEN** a tool page renders
- **THEN** the SoftwareApplication schema SHALL include aggregateRating with ratingValue (1-5), reviewCount (number of features), and bestRating (5)

#### Scenario: Star rating display

- **WHEN** Google parses the tool page schema
- **THEN** search results MAY display star ratings for the tool

### Requirement: Offers and Pricing Markup

Tools with pricing information SHALL include Offer schema.

#### Scenario: Free tool offer

- **WHEN** a tool has "Free" in its pricing tier
- **THEN** the SoftwareApplication SHALL include offers with @type: Offer, price: 0, and priceCurrency: USD

#### Scenario: Paid tool offer

- **WHEN** a tool has subscription pricing
- **THEN** the Offer SHALL include price (numeric value), priceCurrency, and availability

### Requirement: Availability Status

Tools SHALL indicate availability status in schema markup.

#### Scenario: Available tool status

- **WHEN** a tool is actively maintained (last updated within 90 days)
- **THEN** the Offer SHALL have availability: "https://schema.org/InStock"

### Requirement: Feature List Schema

Tools SHALL list key features using schema.org/featureList.

#### Scenario: Feature list array

- **WHEN** a tool has 5 supported features
- **THEN** the SoftwareApplication SHALL include featureList as an array of 5 feature strings
