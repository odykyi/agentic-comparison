// Skills Marketplace JavaScript
// Handles filtering, tool selection, and copy-to-clipboard

document.addEventListener("DOMContentLoaded", function () {
  initSkillsFiltering();
  initToolSelectors();
  initCopyButtons();
  initClearFilters();
});

// Skills Filtering by Tool and Category
function initSkillsFiltering() {
  const toolFilter = document.getElementById("tool-filter");
  const categoryFilter = document.getElementById("category-filter");
  const skillCards = document.querySelectorAll(".skill-card-wrapper");
  const noResults = document.getElementById("no-results");

  if (!toolFilter || !categoryFilter) return;

  function filterSkills() {
    const selectedTool = toolFilter.value;
    const selectedCategory = categoryFilter.value;
    let visibleCount = 0;

    skillCards.forEach((card) => {
      const tools = card.getAttribute("data-tools") || "";
      const category = card.getAttribute("data-category") || "";

      const matchesTool =
        selectedTool === "all" || tools.includes(selectedTool);
      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      if (matchesTool && matchesCategory) {
        card.classList.remove("d-none");
        visibleCount++;
      } else {
        card.classList.add("d-none");
      }
    });

    // Show/hide no results message
    if (visibleCount === 0) {
      noResults.classList.remove("d-none");
    } else {
      noResults.classList.add("d-none");
    }
  }

  toolFilter.addEventListener("change", filterSkills);
  categoryFilter.addEventListener("change", filterSkills);
}

// Tool Selector - Update install command when tool changes
function initToolSelectors() {
  const selectors = document.querySelectorAll(".tool-selector");

  selectors.forEach((selector) => {
    selector.addEventListener("change", function () {
      const skillSlug = this.getAttribute("data-skill");
      const selectedTool = this.value;
      const skillCard = this.closest(".skill-card");
      const commandCode = skillCard.querySelector(".install-command");
      const copyBtn = skillCard.querySelector(".copy-btn");

      // Get the install command for selected tool
      // We need to fetch this from the data attribute or re-render
      // Since we don't have the full data object in JS, we'll use a data attribute approach
      const command =
        this.options[this.selectedIndex].getAttribute("data-command") ||
        getCommandForTool(skillSlug, selectedTool);

      if (command) {
        commandCode.textContent = command;
        copyBtn.setAttribute("data-command", command);
        copyBtn.disabled = false;
        copyBtn.title = "Copy to clipboard";
      } else {
        commandCode.textContent = `Not available for ${selectedTool}`;
        copyBtn.disabled = true;
        copyBtn.title = "Not available for this tool";
      }
    });
  });
}

// Helper to get command (fallback if data attribute not set)
function getCommandForTool(skillSlug, tool) {
  // Map of known install commands (this is a simplified version)
  const commandMap = {
    "code-review": {
      codex: "codex skills install code-review",
      claude_code: "claude skills install code-review",
      opencode: "opencode skills install code-review",
      aider: "aider --skill code-review",
    },
    "commit-gen": {
      codex: "codex skills install commit-gen",
      claude_code: "claude skills install commit-gen",
      opencode: "opencode skills install commit-gen",
      aider: "aider --skill commit-gen",
    },
    "test-gen": {
      codex: "codex skills install test-gen",
      claude_code: "claude skills install test-gen",
      opencode: "opencode skills install test-gen",
      aider: "aider --skill test-gen",
    },
  };

  return commandMap[skillSlug] && commandMap[skillSlug][tool]
    ? commandMap[skillSlug][tool]
    : null;
}

// Copy to Clipboard
function initCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async function () {
      const command = this.getAttribute("data-command");

      if (!command || command.includes("Not available")) return;

      try {
        await navigator.clipboard.writeText(command);

        // Visual feedback
        const originalHTML = this.innerHTML;
        this.innerHTML = '<i class="bi bi-check me-1"></i>Copied!';
        this.classList.remove("btn-primary");
        this.classList.add("btn-success");

        // Reset after 2 seconds
        setTimeout(() => {
          this.innerHTML = originalHTML;
          this.classList.remove("btn-success");
          this.classList.add("btn-primary");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
        this.title = "Failed to copy";
      }
    });
  });
}

// Clear Filters Button
function initClearFilters() {
  const clearBtn = document.getElementById("clear-filters");
  const toolFilter = document.getElementById("tool-filter");
  const categoryFilter = document.getElementById("category-filter");

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      toolFilter.value = "all";
      categoryFilter.value = "all";

      // Trigger change events to update display
      toolFilter.dispatchEvent(new Event("change"));
      categoryFilter.dispatchEvent(new Event("change"));
    });
  }
}
