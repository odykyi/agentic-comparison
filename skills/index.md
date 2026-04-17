---
layout: default
title: Skills Marketplace
description: Discover and install AI agent skills for Codex, Claude Code, OpenCode, and more
---

<!-- Hero Section -->
<div class="py-5 bg-light">
  <div class="container">
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h1 class="display-5">Skills Marketplace</h1>
        <p class="lead text-muted">
          Discover and install AI agent skills. Select your tool, copy the command, and paste it in your terminal.
        </p>
        <div class="alert alert-info">
          <i class="bi bi-info-circle me-2"></i>
          <strong>How to install:</strong> Select your AI tool from the dropdown, click "Copy Command", then paste it in your terminal.
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="row mb-4">
      <div class="col-md-6 mx-auto">
        <div class="d-flex gap-2 justify-content-center flex-wrap">
          <!-- Tool Filter -->
          <select class="form-select" id="tool-filter" style="width: auto; min-width: 150px;">
            <option value="all">All Tools</option>
            <option value="codex">Codex</option>
            <option value="claude_code">Claude Code</option>
            <option value="opencode">OpenCode</option>
            <option value="aider">Aider</option>
            <option value="continue">Continue</option>
            <option value="copilot_cli">Copilot CLI</option>
          </select>

          <!-- Category Filter -->
          <select class="form-select" id="category-filter" style="width: auto; min-width: 150px;">
            <option value="all">All Categories</option>
            <option value="code-review">Code Review</option>
            <option value="git-workflow">Git Workflow</option>
            <option value="testing">Testing</option>
            <option value="documentation">Documentation</option>
            <option value="code-quality">Code Quality</option>
            <option value="security">Security</option>
            <option value="debugging">Debugging</option>
          </select>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Skills Grid -->
<div class="container py-5">
  <div class="row g-4" id="skills-grid">
    {% for skill in site.data.skills %}
      {% if skill[1].featured == true %}
        {% assign skill_slug = skill[0] %}
        {% assign skill_data = skill[1] %}
        <div class="col-md-6 col-lg-4 skill-card-wrapper" 
             data-tools="{{ skill_data.compatible_tools | join: ' ' }}"
             data-category="{{ skill_data.category }}">
          <div class="card h-100 skill-card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="mb-0">{{ skill_data.name }}</h5>
              <span class="badge bg-secondary">{{ skill_data.category | replace: '-', ' ' | capitalize }}</span>
            </div>
            <div class="card-body">
              <p class="text-muted">{{ skill_data.description | truncate: 150 }}</p>

              <!-- Tool Badges -->
              <div class="mb-3">
                <small class="text-muted d-block mb-1">Compatible with:</small>
                <div class="d-flex flex-wrap gap-1">
                  {% for tool in skill_data.compatible_tools %}
                    <span class="badge" style="background-color: {{ site.tool_colors[tool] | default: '#6c757d' }}">
                      {{ tool | replace: '_', ' ' | capitalize }}
                    </span>
                  {% endfor %}
                </div>
              </div>

              <!-- Install Section -->
              <div class="install-section bg-light rounded p-2">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <small class="text-muted">Select tool:</small>
                  <select class="form-select form-select-sm tool-selector" style="width: auto; max-width: 140px;" data-skill="{{ skill_slug }}">
                    {% for tool in skill_data.compatible_tools %}
                      <option value="{{ tool }}">{{ tool | replace: '_', ' ' | capitalize }}</option>
                    {% endfor %}
                  </select>
                </div>
                <div class="bg-white rounded border p-2 mb-2">
                  <code class="d-block text-dark install-command" id="command-{{ skill_slug }}" style="font-size: 0.85rem; word-break: break-all;">
                    {% assign first_tool = skill_data.compatible_tools | first %}
                    {{ skill_data.install_commands[first_tool] }}
                  </code>
                </div>
                <button class="btn btn-sm btn-primary w-100 copy-btn" data-command="{{ skill_data.install_commands[first_tool] }}">
                  <i class="bi bi-clipboard me-1"></i>Copy Command
                </button>
              </div>
            </div>
            <div class="card-footer bg-white border-0">
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">v{{ skill_data.version }}</small>
                <a href="{{ skill_data.source_url }}" class="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener">
                  <i class="bi bi-github"></i> Source
                </a>
              </div>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}

  </div>

  <!-- No Results Message -->
  <div id="no-results" class="text-center py-5 d-none">
    <p class="text-muted">No skills found for the selected filters.</p>
    <button class="btn btn-outline-primary" id="clear-filters">Clear Filters</button>
  </div>
</div>

<!-- Submit CTA -->
<div class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h3 class="h5 mb-3">Have a skill to share?</h3>
        <p class="text-muted mb-4">
          Submit your AI agent skill to the marketplace. Open source skills welcome!
        </p>
        <a href="https://github.com/odykyi/agentic-comparison/issues/new?template=feature_request.yml&title=%5BSkill%5D%20Add%20new%20skill" class="btn btn-primary" target="_blank">
          <i class="bi bi-plus-circle me-2"></i>Submit a Skill
        </a>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/skills.js' | relative_url }}"></script>
