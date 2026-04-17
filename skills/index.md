---
layout: default
title: Skills Marketplace
description: Discover and install AI agent skills for Codex, Claude Code, OpenCode, and more
---

{% assign all_skills = '' | split: '' %}
{% for category in site.data.skills %}
{% for skill_entry in category[1] %}
{% assign all_skills = all_skills | push: skill_entry %}
{% endfor %}
{% endfor %}

{% assign categories = "development,frontend,documentation,business,collaboration,devops,tools" | split: "," %}

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <span class="hero-label">MARKETPLACE</span>
    <h1>Skills for <span class="highlight">AI Agents</span></h1>
    <p class="lead">42+ installable skills for Codex, Claude Code, OpenCode, Cursor, and more. Select your tool, copy the command, paste in terminal.</p>
  </div>
</section>

<!-- Category Tabs -->
<section class="section" style="padding: 24px 0; border-bottom: 2px solid var(--color-black);">
  <div class="container">
    <div class="category-tabs" role="tablist" aria-label="Skill categories">
      <button class="category-tab active" data-category="all" role="tab" aria-selected="true">
        All <span class="count">({{ all_skills | size }})</span>
      </button>
      <button class="category-tab" data-category="development" role="tab" aria-selected="false">
        Development
      </button>
      <button class="category-tab" data-category="frontend" role="tab" aria-selected="false">
        Frontend
      </button>
      <button class="category-tab" data-category="documentation" role="tab" aria-selected="false">
        Documentation
      </button>
      <button class="category-tab" data-category="business" role="tab" aria-selected="false">
        Business
      </button>
      <button class="category-tab" data-category="collaboration" role="tab" aria-selected="false">
        Collaboration
      </button>
      <button class="category-tab" data-category="devops" role="tab" aria-selected="false">
        DevOps
      </button>
      <button class="category-tab" data-category="tools" role="tab" aria-selected="false">
        Tools
      </button>
    </div>
  </div>
</section>

<!-- Skills Grid -->
<section class="section">
  <div class="container">
    <div class="row g-4" id="skills-grid">
      {% for skill_entry in all_skills %}
        {% assign skill_slug = skill_entry[0] %}
        {% assign skill_data = skill_entry[1] %}
        {% assign parent_category = site.data.skills | where_exp: "cat", "cat[1][skill_slug]" | first %}
        {% assign category_name = parent_category[0] %}
        
        <div class="col-md-6 col-lg-4 skill-card-wrapper" 
             data-category="{{ category_name }}"
             data-tools="{{ skill_data.compatible_tools | join: ' ' }}">
          <div class="card skill-card">
            <div class="card-header">
              <span class="category-badge">{{ category_name | upcase }}</span>
              <h5>{{ skill_data.name }}</h5>
            </div>
            <div class="card-body">
              <p>{{ skill_data.description }}</p>
              <div class="mb-3">
                <span class="label">Compatible:</span>
                <div class="d-flex flex-wrap gap-1 mt-1">
                  {% for tool in skill_data.compatible_tools %}
                    {% assign tool_color = site.data.tool_colors[tool] | default: '#666666' %}
                    <span class="badge" style="border-color: {{ tool_color }}; color: {{ tool_color }}">
                      {{ tool | replace: '_', ' ' | capitalize }}
                    </span>
                  {% endfor %}
                </div>
              </div>
            </div>
            
            <!-- Terminal-style Install Section -->
            <div class="install-section">
              <div class="install-label">INSTALL</div>
              {% assign first_tool = skill_data.compatible_tools | first %}
              <div class="command-box">
                <code id="command-{{ skill_slug }}">{{ skill_data.install_commands[first_tool] }}</code>
                <button class="copy-btn" data-command="{{ skill_data.install_commands[first_tool] }}" aria-label="Copy install command">
                  <i class="bi bi-clipboard" aria-hidden="true"></i>
                </button>
              </div>
              
              <!-- Open in Tool buttons -->
              <div class="tool-buttons">
                {% assign marketplace_full_url = site.url | append: site.baseurl | append: '/skills/' %}
                {% for tool in skill_data.compatible_tools %}
                  {% assign install_cmd = skill_data.install_commands[tool] %}
                  {% if install_cmd %}
                    {% case tool %}
                      {% when 'codex' %}
                        {% capture tool_prompt %}Install {{ skill_data.name }} skill: {{ install_cmd }} | Source: {{ skill_data.source_url }}{% endcapture %}
                        <a href="codex://new?prompt={{ tool_prompt | url_encode }}" class="btn btn-sm" title="Open in Codex">
                          <i class="bi bi-box-arrow-up-right"></i> Codex
                        </a>
                      {% when 'claude_code' %}
                        {% capture tool_prompt %}Install {{ skill_data.name }} skill: {{ install_cmd }} | Source: {{ skill_data.source_url }}{% endcapture %}
                        <a href="claude://new?prompt={{ tool_prompt | url_encode }}" class="btn btn-sm" title="Open in Claude Code">
                          <i class="bi bi-box-arrow-up-right"></i> Claude
                        </a>
                      {% when 'opencode' %}
                        {% capture tool_prompt %}Install {{ skill_data.name }} skill: {{ install_cmd }} | Source: {{ skill_data.source_url }}{% endcapture %}
                        <a href="opencode://new?prompt={{ tool_prompt | url_encode }}" class="btn btn-sm" title="Open in OpenCode">
                          <i class="bi bi-box-arrow-up-right"></i> OpenCode
                        </a>
                      {% when 'cursor' %}
                        {% capture tool_prompt %}Install {{ skill_data.name }} skill: {{ install_cmd }} | Source: {{ skill_data.source_url }}{% endcapture %}
                        <a href="cursor://new?prompt={{ tool_prompt | url_encode }}" class="btn btn-sm" title="Open in Cursor">
                          <i class="bi bi-box-arrow-up-right"></i> Cursor
                        </a>
                      {% when 'junie' %}
                        {% capture tool_prompt %}Install {{ skill_data.name }} skill: {{ install_cmd }} | Source: {{ skill_data.source_url }}{% endcapture %}
                        <a href="junie://new?prompt={{ tool_prompt | url_encode }}" class="btn btn-sm" title="Open in Junie">
                          <i class="bi bi-box-arrow-up-right"></i> Junie
                        </a>
                      {% when 'google_antigravity' %}
                        {% capture tool_prompt %}Install {{ skill_data.name }} skill: {{ install_cmd }} | Source: {{ skill_data.source_url }}{% endcapture %}
                        <a href="antigravity://new?prompt={{ tool_prompt | url_encode }}" class="btn btn-sm" title="Open in Antigravity">
                          <i class="bi bi-box-arrow-up-right"></i> Antigravity
                        </a>
                      {% when 'copilot_cli' %}
                        {% capture tool_prompt %}Install {{ skill_data.name }} skill: {{ install_cmd }} | Source: {{ skill_data.source_url }}{% endcapture %}
                        <a href="copilot://new?prompt={{ tool_prompt | url_encode }}" class="btn btn-sm" title="Open in Copilot CLI">
                          <i class="bi bi-box-arrow-up-right"></i> Copilot
                        </a>
                    {% endcase %}
                  {% endif %}
                {% endfor %}
              </div>
            </div>
            
            <div class="card-footer">
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">v{{ skill_data.version }}</small>
                <a href="{{ skill_data.source_url }}" class="btn btn-sm btn-outline-dark" target="_blank" rel="noopener">
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
    
    <div id="no-results" class="text-center py-5 d-none">
      <p>No skills found in this category.</p>
    </div>
  </div>
</section>

<!-- Submit CTA -->
<section class="section" style="background: var(--color-gray-100);">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2>Have a skill to share?</h2>
        <p style="color: var(--color-gray-600);">
          Submit your AI agent skill to the marketplace. Open source skills welcome!
        </p>
        <a href="https://github.com/odykyi/agentic-comparison/issues/new?template=feature_request.yml&title=%5BSkill%5D%20Add%20new%20skill" class="btn btn-primary" target="_blank" rel="noopener">
          Submit a Skill
        </a>
      </div>
    </div>
  </div>
</section>

<script>
// Category filtering
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.category-tab');
  const skillCards = document.querySelectorAll('.skill-card-wrapper');
  const noResults = document.getElementById('no-results');

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active tab
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      
      // Filter skills
      let visibleCount = 0;
      skillCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 10);
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      // Show/hide no results message
      if (visibleCount === 0) {
        noResults.classList.remove('d-none');
      } else {
        noResults.classList.add('d-none');
      }
    });
  });

  // Copy to clipboard
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const command = this.dataset.command;
      navigator.clipboard.writeText(command).then(() => {
        const icon = this.querySelector('i');
        icon.classList.remove('bi-clipboard');
        icon.classList.add('bi-check');
        setTimeout(() => {
          icon.classList.remove('bi-check');
          icon.classList.add('bi-clipboard');
        }, 2000);
      });
    });
  });
});
</script>

<style>
.category-tabs {
  display: flex;
  gap: 0;
  border: 2px solid var(--color-black);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.category-tab {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 12px 20px;
  border: none;
  border-right: 2px solid var(--color-black);
  background: var(--color-white);
  color: var(--color-black);
  cursor: pointer;
  white-space: nowrap;
  transition: all 150ms ease-out;
}

.category-tab:last-child {
  border-right: none;
}

.category-tab:hover {
  background: var(--color-black);
  color: var(--color-white);
}

.category-tab.active {
  background: var(--color-purple);
  color: var(--color-white);
}

.category-tab .count {
  font-weight: 500;
  opacity: 0.7;
}

.skill-card-wrapper {
  transition: opacity 200ms ease-out;
}
</style>
