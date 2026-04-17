// Main JavaScript for Agentic Comparison

document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle
  initThemeToggle();

  // Search functionality
  initSearch();

  // Initialize tooltips
  initTooltips();

  // Table sorting helper
  initTableSort();
});

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const icon = themeToggle.querySelector("i");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  // Set initial theme
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute("data-theme", "dark");
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }

  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      icon.classList.replace("bi-moon-fill", "bi-sun-fill");
    } else {
      icon.classList.replace("bi-sun-fill", "bi-moon-fill");
    }
  });
}

// Site Search - Simplified version
function initSearch() {
  const searchInput = document.getElementById("search-input");

  if (!searchInput) return;

  // Handle Enter key to navigate to search or a specific page
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();

      // Simple navigation based on search terms
      if (query.includes("command") || query.includes("cmd")) {
        window.location.href = "/agentic-comparison/commands/";
      } else if (query.includes("feature")) {
        window.location.href = "/agentic-comparison/features/";
      } else if (query.includes("price") || query.includes("cost")) {
        window.location.href = "/agentic-comparison/pricing/";
      } else if (query.includes("mcp")) {
        window.location.href = "/agentic-comparison/mcp/";
      } else if (query.includes("opencode")) {
        window.location.href = "/agentic-comparison/tools/opencode/";
      } else if (query.includes("codex")) {
        window.location.href = "/agentic-comparison/tools/codex/";
      } else if (query.includes("claude")) {
        window.location.href = "/agentic-comparison/tools/claude_code/";
      } else if (query.includes("copilot")) {
        window.location.href = "/agentic-comparison/tools/copilot_cli/";
      } else {
        // Default to tools page
        window.location.href = "/agentic-comparison/tools/";
      }
    }
  });
}

// Initialize Bootstrap tooltips
function initTooltips() {
  if (window.bootstrap) {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}

// Table sorting helper
function initTableSort() {
  // Add click handlers for table headers that should sort
  document.querySelectorAll("th[data-sort]").forEach((header) => {
    header.style.cursor = "pointer";
    header.addEventListener("click", function () {
      const table = this.closest("table");
      const tbody = table.querySelector("tbody");
      const rows = Array.from(tbody.querySelectorAll("tr"));
      const column = Array.from(this.parentNode.children).indexOf(this);
      const direction = this.getAttribute("data-sort") === "asc" ? -1 : 1;

      rows.sort((a, b) => {
        const aVal = a.children[column]?.textContent?.trim() || "";
        const bVal = b.children[column]?.textContent?.trim() || "";
        return aVal.localeCompare(bVal) * direction;
      });

      rows.forEach((row) => tbody.appendChild(row));
      this.setAttribute("data-sort", direction === 1 ? "asc" : "desc");
    });
  });
}

// Debounce helper
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Copy to clipboard helper
function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="bi bi-check"></i> Copied!';
    button.classList.add("btn-success");
    button.classList.remove("btn-outline-secondary");

    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove("btn-success");
      button.classList.add("btn-outline-secondary");
    }, 2000);
  });
}

// Export for use in other scripts
window.AgenticComparison = {
  copyToClipboard,
  debounce,
};
