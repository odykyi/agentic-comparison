---
layout: default
title: Skills Marketplace
description: Discover and install AI agent skills for Codex, Claude Code, OpenCode, and more
---

{% assign featured_skills = site.data.skills %}
{% assign daily_trending = site.data.skills | where_exp: "skill", "skill[1].trending == 'daily'" %}
{% assign weekly_trending = site.data.skills | where_exp: "skill", "skill[1].trending == 'weekly'" %}
{% assign monthly_trending = site.data.skills | where_exp: "skill", "skill[1].trending == 'monthly'" %}

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
          <select class="form-select" id="tool-filter" style="width: auto; min-width: 150px;">
            <option value="all">All Tools</option>
            <option value="codex">Codex</option>
            <option value="claude_code">Claude Code</option>
            <option value="opencode">OpenCode</option>
            <option value="cursor">Cursor</option>
            <option value="continue">Continue</option>
            <option value="tabnine">Tabnine</option>
            <option value="google-antigravity">Google Antigravity</option>
            <option value="copilot_cli">Copilot CLI</option>
          </select>
          <select class="form-select" id="category-filter" style="width: auto; min-width: 150px;">
            <option value="all">All Categories</option>
            <option value="code-review">Code Review</option>
            <option value="git-workflow">Git Workflow</option>
            <option value="testing">Testing</option>
            <option value="documentation">Documentation</option>
            <option value="code-quality">Code Quality</option>
            <option value="security">Security</option>
            <option value="debugging">Debugging</option>
            <option value="creative">Creative</option>
            <option value="frontend">Frontend</option>
            <option value="system-extension">System Extension</option>
            <option value="recruiting">Recruiting</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="research">Research</option>
            <option value="customer-success">Customer Success</option>
            <option value="collaboration">Collaboration</option>
          </select>

          <!-- Use Case Filter -->
          <select class="form-select" id="use-case-filter" style="width: auto; min-width: 150px;">
            <option value="all">All Roles</option>
            <optgroup label="Engineering">
              <option value="developer">👨‍💻 Developer</option>
              <option value="frontend-dev">🎨 Frontend Dev</option>
              <option value="backend-dev">⚙️ Backend Dev</option>
              <option value="fullstack-dev">🌐 Fullstack Dev</option>
              <option value="devops">🚀 DevOps</option>
              <option value="qa-engineer">🧪 QA Engineer</option>
              <option value="security-engineer">🔒 Security Engineer</option>
              <option value="data-engineer">📊 Data Engineer</option>
            </optgroup>
            <optgroup label="Product & Design">
              <option value="product-manager">📋 Product Manager</option>
              <option value="designer">🎨 Designer</option>
              <option value="ux-researcher">🔍 UX Researcher</option>
              <option value="founder">🚀 Founder</option>
            </optgroup>
            <optgroup label="Business">
              <option value="recruiter">🎯 Recruiter</option>
              <option value="hiring-manager">👔 Hiring Manager</option>
              <option value="sales-rep">💼 Sales Rep</option>
              <option value="marketer">📢 Marketer</option>
              <option value="customer-success">🤝 Customer Success</option>
              <option value="team-lead">👥 Team Lead</option>
            </optgroup>
            <optgroup label="Research & Ops">
              <option value="researcher">🔬 Researcher</option>
              <option value="data-analyst">📈 Data Analyst</option>
              <option value="ats-admin">⚙️ ATS Admin</option>
              <option value="technical-writer">📝 Technical Writer</option>
            </optgroup>
          </select>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Trending Skills Section -->
<div class="container py-4">
  <!-- Daily Trending -->
  {% if daily_trending.size > 0 %}
  <div class="row mb-5">
    <div class="col-12">
      <div class="d-flex align-items-center mb-4">
        <span class="badge bg-danger me-2">HOT</span>
        <h2 class="h4 mb-0">Trending Today</h2>
        <span class="badge bg-warning text-dark ms-2">Daily</span>
      </div>
      <div class="row g-4" id="daily-trending">
        {% for skill_entry in daily_trending limit: 3 %}
          {% assign skill_slug = skill_entry[0] %}
          {% assign skill_data = skill_entry[1] %}
          {% assign trending_type = 'daily' %}
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 skill-card border-danger">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">{{ skill_data.name }}</h5>
                <div>
                  <span class="badge bg-danger">🔥 Hot</span>
                  <span class="badge bg-secondary ms-1">{{ skill_data.category | replace: '-', ' ' | capitalize }}</span>
                </div>
              </div>
              <div class="card-body">
                <p class="text-muted">{{ skill_data.description | truncate: 150 }}</p>
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
                <div class="install-section bg-light rounded p-2">
                  <div class="bg-white rounded border p-2 mb-2">
                    <code class="d-block text-dark" style="font-size: 0.85rem; word-break: break-all;">
                      {{ skill_data.install_commands['codex'] }}
                    </code>
                  </div>
                  {% assign marketplace_full_url = site.url | append: site.baseurl | append: '/skills/' %}
                  {% capture codex_prompt %}🔥 TRENDING TODAY - Install "{{ skill_data.name }}" (hot right now!). Command: {{ skill_data.install_commands['codex'] }} | From: {{ marketplace_full_url }} | Source: {{ skill_data.source_url }}{% endcapture %}
                  <a href="codex://new?prompt={{ codex_prompt | url_encode }}" class="btn btn-sm btn-success w-100 d-flex align-items-center justify-content-center gap-1">
                    <i class="bi bi-box-arrow-up-right"></i>Open in Codex
                  </a>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endif %}

  <!-- Weekly Trending -->

{% if weekly_trending.size > 0 %}

  <div class="row mb-5">
    <div class="col-12">
      <div class="d-flex align-items-center mb-4">
        <span class="badge bg-primary me-2">POPULAR</span>
        <h2 class="h4 mb-0">This Week</h2>
        <span class="badge bg-info text-dark ms-2">Weekly</span>
      </div>
      <div class="row g-4" id="weekly-trending">
        {% for skill_entry in weekly_trending limit: 3 %}
          {% assign skill_slug = skill_entry[0] %}
          {% assign skill_data = skill_entry[1] %}
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 skill-card border-primary">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">{{ skill_data.name }}</h5>
                <div>
                  <span class="badge bg-primary">📈 Trending</span>
                  <span class="badge bg-secondary ms-1">{{ skill_data.category | replace: '-', ' ' | capitalize }}</span>
                </div>
              </div>
              <div class="card-body">
                <p class="text-muted">{{ skill_data.description | truncate: 150 }}</p>
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
                <div class="install-section bg-light rounded p-2">
                  <div class="bg-white rounded border p-2 mb-2">
                    <code class="d-block text-dark" style="font-size: 0.85rem; word-break: break-all;">
                      {{ skill_data.install_commands['codex'] }}
                    </code>
                  </div>
                  {% assign marketplace_full_url = site.url | append: site.baseurl | append: '/skills/' %}
                  {% capture codex_prompt %}📈 This Week's Pick - "{{ skill_data.name }}" is gaining popularity. Install: {{ skill_data.install_commands['codex'] }} | From: {{ marketplace_full_url }} | Source: {{ skill_data.source_url }}{% endcapture %}
                  <a href="codex://new?prompt={{ codex_prompt | url_encode }}" class="btn btn-sm btn-success w-100 d-flex align-items-center justify-content-center gap-1">
                    <i class="bi bi-box-arrow-up-right"></i>Open in Codex
                  </a>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endif %}

  <!-- Monthly Trending -->

{% if monthly_trending.size > 0 %}

  <div class="row mb-5">
    <div class="col-12">
      <div class="d-flex align-items-center mb-4">
        <span class="badge bg-success me-2">TOP</span>
        <h2 class="h4 mb-0">This Month</h2>
        <span class="badge bg-secondary ms-2">Monthly</span>
      </div>
      <div class="row g-4" id="monthly-trending">
        {% for skill_entry in monthly_trending limit: 3 %}
          {% assign skill_slug = skill_entry[0] %}
          {% assign skill_data = skill_entry[1] %}
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 skill-card border-success">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">{{ skill_data.name }}</h5>
                <div>
                  <span class="badge bg-success">⭐ Top</span>
                  <span class="badge bg-secondary ms-1">{{ skill_data.category | replace: '-', ' ' | capitalize }}</span>
                </div>
              </div>
              <div class="card-body">
                <p class="text-muted">{{ skill_data.description | truncate: 150 }}</p>
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
                <div class="install-section bg-light rounded p-2">
                  <div class="bg-white rounded border p-2 mb-2">
                    <code class="d-block text-dark" style="font-size: 0.85rem; word-break: break-all;">
                      {{ skill_data.install_commands['codex'] }}
                    </code>
                  </div>
                  {% assign marketplace_full_url = site.url | append: site.baseurl | append: '/skills/' %}
                  {% capture codex_prompt %}⭐ Monthly Top Skill - "{{ skill_data.name }}" is this month's favorite. Install now: {{ skill_data.install_commands['codex'] }} | From: {{ marketplace_full_url }} | Source: {{ skill_data.source_url }}{% endcapture %}
                  <a href="codex://new?prompt={{ codex_prompt | url_encode }}" class="btn btn-sm btn-success w-100 d-flex align-items-center justify-content-center gap-1">
                    <i class="bi bi-box-arrow-up-right"></i>Open in Codex
                  </a>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endif %}
</div>

<!-- All Skills Grid -->
<div class="container py-5">
  <h2 class="h4 mb-4">All Skills</h2>
  <div class="row g-4" id="skills-grid">
    {% for skill_entry in featured_skills %}
      {% assign skill_slug = skill_entry[0] %}
      {% assign skill_data = skill_entry[1] %}
      {% if skill_data.featured == true %}
      <div class="col-md-6 col-lg-4 skill-card-wrapper" 
           data-tools="{{ skill_data.compatible_tools | join: ' ' }}"
           data-category="{{ skill_data.category }}"
           data-use-cases="{{ skill_data.use_cases | join: ' ' }}">
        <div class="card h-100 skill-card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">{{ skill_data.name }}</h5>
            <span class="badge bg-secondary">{{ skill_data.category | replace: '-', ' ' | capitalize }}</span>
          </div>
          <div class="card-body">
            <p class="text-muted">{{ skill_data.description | truncate: 150 }}</p>
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
              <button class="btn btn-sm btn-primary w-100 copy-btn mb-2" data-command="{{ skill_data.install_commands[first_tool] }}">
                <i class="bi bi-clipboard me-1"></i>Copy Command
              </button>
              
              <!-- Tool-specific Open buttons -->
              <div class="d-flex flex-wrap gap-1 mt-2">
                {% assign marketplace_full_url = site.url | append: site.baseurl | append: '/skills/' %}
                
                {% if skill_data.compatible_tools contains 'codex' %}
                  {% assign codex_template = site.data.prompts.codex_install %}
                  {% assign codex_prompt = codex_template | replace: '{{ skill_name }}', skill_data.name | replace: '{{ skill_slug }}', skill_slug | replace: '{{ marketplace_url }}', marketplace_full_url | replace: '{{ install_command }}', skill_data.install_commands['codex'] | replace: '{{ source_url }}', skill_data.source_url %}
                  <a href="codex://new?prompt={{ codex_prompt | url_encode }}" class="btn btn-sm btn-success flex-fill" title="Open in Codex">
                    <i class="bi bi-box-arrow-up-right"></i> Codex
                  </a>
                {% endif %}
                
                {% if skill_data.compatible_tools contains 'claude_code' %}
                  {% assign claude_template = site.data.prompts.claude_install %}
                  {% assign claude_prompt = claude_template | replace: '{{ skill_name }}', skill_data.name | replace: '{{ skill_slug }}', skill_slug | replace: '{{ marketplace_url }}', marketplace_full_url | replace: '{{ install_command }}', skill_data.install_commands['claude_code'] | replace: '{{ source_url }}', skill_data.source_url %}
                  <a href="claude://new?prompt={{ claude_prompt | url_encode }}" class="btn btn-sm btn-warning flex-fill" title="Open in Claude Code" style="color: #000;">
                    <i class="bi bi-box-arrow-up-right"></i> Claude
                  </a>
                {% endif %}
                
                {% if skill_data.compatible_tools contains 'opencode' %}
                  {% assign opencode_template = site.data.prompts.opencode_install %}
                  {% assign opencode_prompt = opencode_template | replace: '{{ skill_name }}', skill_data.name | replace: '{{ skill_slug }}', skill_slug | replace: '{{ marketplace_url }}', marketplace_full_url | replace: '{{ install_command }}', skill_data.install_commands['opencode'] | replace: '{{ source_url }}', skill_data.source_url %}
                  <a href="opencode://new?prompt={{ opencode_prompt | url_encode }}" class="btn btn-sm btn-info flex-fill" title="Open in OpenCode">
                    <i class="bi bi-box-arrow-up-right"></i> OpenCode
                  </a>
                {% endif %}
                
                {% if skill_data.compatible_tools contains 'cursor' %}
                  {% assign cursor_template = site.data.prompts.cursor_install %}
                  {% assign cursor_prompt = cursor_template | replace: '{{ skill_name }}', skill_data.name | replace: '{{ skill_slug }}', skill_slug | replace: '{{ marketplace_url }}', marketplace_full_url | replace: '{{ install_command }}', skill_data.install_commands['cursor'] | replace: '{{ source_url }}', skill_data.source_url %}
                  <a href="cursor://new?prompt={{ cursor_prompt | url_encode }}" class="btn btn-sm btn-dark flex-fill" title="Open in Cursor">
                    <i class="bi bi-box-arrow-up-right"></i> Cursor
                  </a>
                {% endif %}
                
                {% if skill_data.compatible_tools contains 'tabnine' %}
                  {% assign tabnine_template = site.data.prompts.tabnine_install %}
                  {% assign tabnine_prompt = tabnine_template | replace: '{{ skill_name }}', skill_data.name | replace: '{{ skill_slug }}', skill_slug | replace: '{{ marketplace_url }}', marketplace_full_url | replace: '{{ install_command }}', skill_data.install_commands['tabnine'] | replace: '{{ source_url }}', skill_data.source_url %}
                  <a href="tabnine://new?prompt={{ tabnine_prompt | url_encode }}" class="btn btn-sm btn-light flex-fill border" title="Open in Tabnine" style="background-color: #4A90E2; color: white; border-color: #4A90E2;">
                    <i class="bi bi-box-arrow-up-right"></i> Tabnine
                  </a>
                {% endif %}
                
                {% if skill_data.compatible_tools contains 'continue' %}
                  {% assign continue_template = site.data.prompts.continue_install %}
                  {% assign continue_prompt = continue_template | replace: '{{ skill_name }}', skill_data.name | replace: '{{ skill_slug }}', skill_slug | replace: '{{ marketplace_url }}', marketplace_full_url | replace: '{{ install_command }}', skill_data.install_commands['continue'] | replace: '{{ source_url }}', skill_data.source_url %}
                  <a href="continue://new?prompt={{ continue_prompt | url_encode }}" class="btn btn-sm btn-secondary flex-fill" title="Open in Continue">
                    <i class="bi bi-box-arrow-up-right"></i> Continue
                  </a>
                {% endif %}
                
                {% if skill_data.compatible_tools contains 'cursor' %}
                  {% assign cursor_template = site.data.prompts.cursor_install %}
                  {% assign cursor_prompt = cursor_template | replace: '{{ skill_name }}', skill_data.name | replace: '{{ skill_slug }}', skill_slug | replace: '{{ marketplace_url }}', marketplace_full_url | replace: '{{ install_command }}', skill_data.install_commands['cursor'] | replace: '{{ source_url }}', skill_data.source_url %}
                  <a href="cursor://new?prompt={{ cursor_prompt | url_encode }}" class="btn btn-sm btn-light flex-fill border" title="Open in Cursor">
                    <i class="bi bi-box-arrow-up-right"></i> Cursor
                  </a>
                {% endif %}
              </div>
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
