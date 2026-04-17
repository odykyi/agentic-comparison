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

// Site Search
function initSearch() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const searchModal = document.getElementById("search-modal");

  if (!searchInput || !searchResults) return;

  searchInput.addEventListener(
    "input",
    debounce(function (e) {
      const query = e.target.value.trim().toLowerCase();

      if (query.length < 2) {
        searchResults.innerHTML =
          '<p class="text-muted">Type at least 2 characters to search...</p>';
        return;
      }

      // Simple client-side search (can be enhanced with Lunr.js)
      performSearch(query, searchResults);
    }, 300),
  );

  // Open modal on focus
  searchInput.addEventListener("focus", function () {
    if (window.bootstrap) {
      const modal = new bootstrap.Modal(searchModal);
      modal.show();
    }
  });
}

function performSearch(query, resultsContainer) {
  // Placeholder search implementation
  // In production, this would use Lunr.js or similar
  resultsContainer.innerHTML = `
    <div class="list-group">
      <a href="/features/" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">Feature Comparison</h6>
          <small class="text-muted">Page</small>
        </div>
        <p class="mb-1 text-muted">Compare features across all tools</p>
      </a>
      <a href="/commands/" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">Command Reference</h6>
          <small class="text-muted">Page</small>
        </div>
        <p class="mb-1 text-muted">Command equivalency table</p>
      </a>
    </div>
    <p class="text-muted mt-3 small">
      <i class="bi bi-info-circle me-1"></i>
      Full search coming soon with Lunr.js integration
    </p>
  `;
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
