---
layout: default
title: Tools
description: Detailed profiles of each AI agentic coding tool. Compare 9 AI coding agents including OpenCode, Codex CLI, Claude Code, Cursor, Windsurf, and more.
---

<section class="hero" style="padding: var(--space-16) 0;">
  <div class="container">
    <span class="hero-label">TOOLS</span>
    <h1>AI Coding <span class="highlight">Agents</span></h1>
    <p class="lead">9 AI coding agents compared. Click any card for full specs, install instructions, and feature breakdown.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="row g-4">
      {% for tool in site.data.tools %}
        {% unless tool[0] == '_template' %}
          {% assign tool_color = site.data.tool_colors[tool[0]] | default: '#666666' %}
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 tool-card card-tool tool-{{ tool[0] }}">
              <div class="card-header" style="background: {{ tool_color }};">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0" style="color: white;">{{ tool[1].name }}</h5>
                  <span class="badge" style="background: white; color: {{ tool_color }}; font-size: 0.625rem;">
                    {{ tool[1].version.current }}
                  </span>
                </div>
              </div>
              <div class="card-body">
                <!-- Full description without truncation -->
                <p>{{ tool[1].description }}</p>

                <div class="mb-3">
                  <span class="label">Key Features:</span>
                  <div class="d-flex flex-wrap gap-1 mt-1">
                    {% if tool[1].features.mcp_support %}
                      <span class="badge bg-purple">MCP</span>
                    {% endif %}
                    {% if tool[1].features.offline_mode %}
                      <span class="badge">Offline</span>
                    {% endif %}
                    {% if tool[1].skill_system or tool[1].command_system %}
                      <span class="badge">Skills</span>
                    {% endif %}
                  </div>
                </div>

                <div style="font-size: 0.875rem; color: var(--color-gray-600);">
                  <div class="mb-1">
                    <strong>License:</strong> {{ tool[1].license }}
                  </div>
                  <div>
                    <strong>Language:</strong> {{ tool[1].language }}
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <a href="{{ '/tools/' | append: tool[0] | relative_url }}" class="btn btn-outline-dark w-100">
                  View Profile →
                </a>
              </div>
            </div>
          </div>
        {% endunless %}
      {% endfor %}
    </div>

  </div>
</section>

<!-- Comparison CTA -->
<section class="section" style="background: var(--color-gray-100);">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2>Want to Compare Them All?</h2>
        <p style="color: var(--color-gray-600); margin-bottom: var(--space-6);">
          See side-by-side comparisons of features, commands, pricing, and more.
        </p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <a href="{{ '/features/' | relative_url }}" class="btn btn-primary btn-lg">
            Feature Comparison
          </a>
          <a href="{{ '/commands/' | relative_url }}" class="btn btn-outline-dark btn-lg">
            Command Reference
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
