## ADDED Requirements

### Requirement: MCP server catalog
The system SHALL maintain a registry of MCP servers and their compatibility with agentic tools.

#### Scenario: Browsing MCP servers
- **WHEN** a user navigates to the MCP registry page
- **THEN** a filterable list shows all known MCP servers
- **AND** each entry shows compatible tools with version requirements

#### Scenario: Filtering by tool
- **WHEN** a user selects "Show only Claude Code compatible"
- **THEN** the list filters to servers known to work with Claude Code
- **AND** includes community-tested and officially-supported badges

### Requirement: MCP integration guides
The system SHALL provide setup instructions for each tool+MCP server combination.

#### Scenario: Integration guide
- **WHEN** a user clicks "Setup" for a server+tool combination
- **THEN** step-by-step instructions appear for that specific setup
- **AND** includes configuration file examples

#### Scenario: Troubleshooting section
- **WHEN** a user expands the troubleshooting accordion
- **THEN** common issues and solutions appear for that integration
- **AND** links to relevant GitHub issues

### Requirement: MCP capability matrix
The system SHALL track which MCP features each tool supports.

#### Scenario: Feature support view
- **WHEN** viewing the MCP capabilities table
- **THEN** columns show tools and rows show MCP features (resources, prompts, tools, sampling)
- **AND** cells indicate full/partial/no support

#### Scenario: Feature comparison
- **WHEN** a user hovers over a partial support cell
- **THEN** a tooltip explains limitations
- **AND** references documentation or known issues

### Requirement: Official vs community MCPs
The system SHALL distinguish between official and community-maintained MCP servers.

#### Scenario: Official badge
- **WHEN** viewing an official MCP server (from tool vendor)
- **THEN** an "Official" badge appears with vendor icon
- **AND** includes link to official documentation

#### Scenario: Community stats
- **WHEN** viewing a community MCP server
- **THEN** GitHub stars, last update, and maintainer info appear
- **AND** includes risk assessment (actively maintained/stale)

### Requirement: MCP server submission
The system SHALL accept community submissions for new MCP servers.

#### Scenario: Submitting new server
- **WHEN** a user clicks "Add MCP Server"
- **THEN** a form opens for server details (name, repo, supported tools)
- **AND** creates a PR-ready YAML file via GitHub API

#### Scenario: Server verification
- **WHEN** a new server is submitted
- **THEN** the YAML includes "verified: false" by default
- **AND** maintainers can mark verified after testing
