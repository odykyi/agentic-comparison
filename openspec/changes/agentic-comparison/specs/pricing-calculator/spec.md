## ADDED Requirements

### Requirement: Pricing comparison table
The system SHALL display pricing models for each tool in a comparable format.

#### Scenario: Pricing overview
- **WHEN** a user navigates to the pricing page
- **THEN** a table shows: free tier, paid tiers, usage limits, API costs
- **AND** includes both subscription and pay-as-you-go models

#### Scenario: Tier detail view
- **WHEN** clicking a specific tier
- **THEN** detailed features and limits appear
- **AND** includes what happens when limits are exceeded

### Requirement: Cost calculator
The system SHALL provide an interactive calculator for estimated monthly costs.

#### Scenario: Usage input
- **WHEN** a user enters estimated usage (requests, tokens, projects)
- **THEN** the calculator updates total cost for each tool
- **AND** includes confidence intervals (low/medium/high usage)

#### Scenario: Team pricing
- **WHEN** selecting "Team" mode
- **THEN** per-seat pricing appears with team discounts
- **AND** includes enterprise contact info for custom pricing

### Requirement: Regional pricing display
The system SHALL show pricing in multiple currencies where applicable.

#### Scenario: Currency selector
- **WHEN** a user selects currency (USD, EUR, GBP, JPY)
- **THEN** prices convert using recent exchange rates
- **AND** includes last-updated timestamp

#### Scenario: Regional availability
- **WHEN** viewing pricing
- **THEN** indicators show which tiers are available in user's region
- **AND** notes any regional restrictions

### Requirement: Free tier comparison
The system SHALL detail what each tool offers in their free tier.

#### Scenario: Free tier matrix
- **WHEN** viewing "Free Tier Comparison"
- **THEN** a detailed table shows limits: requests, tokens, features
- **AND** includes whether credit card is required

#### Scenario: Free tier suitability
- **WHEN** a user enters their use case
- **THEN** the system recommends which free tiers might suffice
- **AND** warns if the use case likely exceeds free limits

### Requirement: Billing model explanations
The system SHALL explain how each tool bills for usage.

#### Scenario: Billing mechanism
- **WHEN** clicking "How billing works"
- **THEN** a detailed explanation appears (token-based, request-based, seat-based)
- **AND** includes example calculations

#### Scenario: Cost optimization tips
- **WHEN** expanding "Tips to reduce costs"
- **THEN** tool-specific suggestions appear
- **AND** includes caching strategies, batching recommendations

### Requirement: Price history tracking
The system SHALL track pricing changes over time.

#### Scenario: Price history
- **WHEN** viewing a tool's pricing
- **THEN** a timeline shows past price changes
- **AND** includes effective dates and change descriptions

#### Scenario: Price alerts
- **WHEN** a user enables alerts for a tool
- **THEN** they can subscribe to price change notifications
- **AND** includes RSS feed or email subscription options

### Requirement: Educational/Non-profit discounts
The system SHALL document special pricing programs.

#### Scenario: Discount eligibility
- **WHEN** viewing "Special Programs"
- **THEN** education, non-profit, and open-source discounts appear
- **AND** includes application links and eligibility criteria

#### Scenario: Startup programs
- **WHEN** viewing startup/incubator programs
- **THEN** available credits and free tiers for startups appear
- **AND** includes partner program details
