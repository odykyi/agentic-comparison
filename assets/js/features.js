// Features page specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initFeatureFilters();
  initToolColumnToggle();
  initCategoryFilters();
});

function initFeatureFilters() {
  const searchInput = document.getElementById("comparison-search");
  if (!searchInput) return;

  searchInput.addEventListener(
    "input",
    debounce(function (e) {
      const query = e.target.value.toLowerCase();
      filterTable(query);
    }, 300),
  );
}

function filterTable(query) {
  const rows = document.querySelectorAll(
    "#features-table tbody tr:not(.category-header)",
  );

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    if (text.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function initToolColumnToggle() {
  const toolFilter = document.getElementById("tool-filter");
  if (!toolFilter) return;

  // Populate tool filter
  const tools = document.querySelectorAll("#features-table th[data-tool]");
  tools.forEach((tool, index) => {
    const toolId = tool.getAttribute("data-tool");
    const toolName = tool.textContent.trim();

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="dropdown-item">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="${toolId}" 
                 id="tool-filter-${toolId}" checked data-column="${index + 2}">
          <label class="form-check-label" for="tool-filter-${toolId}">
            ${toolName}
          </label>
        </div>
      </div>
    `;
    toolFilter.appendChild(li);
  });

  // Handle toggles
  toolFilter.addEventListener("change", function (e) {
    if (e.target.matches('input[type="checkbox"]')) {
      const column = e.target.getAttribute("data-column");
      const isVisible = e.target.checked;
      toggleColumn(column, isVisible);

      // Save preference
      saveToolVisibility();
    }
  });

  // Load saved preferences
  loadToolVisibility();
}

function toggleColumn(columnIndex, isVisible) {
  const table = document.getElementById("features-table");
  const cells = table.querySelectorAll(`tr > *:nth-child(${columnIndex})`);

  cells.forEach((cell) => {
    cell.style.display = isVisible ? "" : "none";
  });
}

function saveToolVisibility() {
  const checkboxes = document.querySelectorAll(
    '#tool-filter input[type="checkbox"]',
  );
  const visibility = {};

  checkboxes.forEach((cb) => {
    visibility[cb.value] = cb.checked;
  });

  localStorage.setItem("tool_visibility", JSON.stringify(visibility));
}

function loadToolVisibility() {
  const saved = localStorage.getItem("tool_visibility");
  if (!saved) return;

  const visibility = JSON.parse(saved);

  Object.keys(visibility).forEach((toolId) => {
    const checkbox = document.getElementById(`tool-filter-${toolId}`);
    if (checkbox) {
      checkbox.checked = visibility[toolId];
      const column = checkbox.getAttribute("data-column");
      toggleColumn(column, visibility[toolId]);
    }
  });
}

function initCategoryFilters() {
  const categoryFilter = document.getElementById("category-filter");
  if (!categoryFilter) return;

  // Get unique categories
  const categories = new Set();
  document.querySelectorAll(".category-header").forEach((header) => {
    const text = header.textContent.trim();
    categories.add(text);
  });

  // Populate filter
  categories.forEach((category) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <button class="dropdown-item" data-category="${category}">
        ${category}
      </button>
    `;
    categoryFilter.appendChild(li);
  });

  // Handle selection
  categoryFilter.addEventListener("click", function (e) {
    if (e.target.matches("[data-category]")) {
      const category = e.target.getAttribute("data-category");
      filterByCategory(category);
    }
  });
}

function filterByCategory(category) {
  const allRows = document.querySelectorAll("#features-table tbody tr");
  let inTargetCategory = false;

  allRows.forEach((row) => {
    if (row.classList.contains("category-header")) {
      inTargetCategory = row.textContent.includes(category);
      row.style.display = inTargetCategory ? "" : "none";
    } else {
      row.style.display = inTargetCategory ? "" : "none";
    }
  });
}

// Reset filters
document
  .getElementById("reset-filters")
  ?.addEventListener("click", function () {
    // Show all rows
    document.querySelectorAll("#features-table tbody tr").forEach((row) => {
      row.style.display = "";
    });

    // Show all columns
    document
      .querySelectorAll('#tool-filter input[type="checkbox"]')
      .forEach((cb) => {
        cb.checked = true;
        const column = cb.getAttribute("data-column");
        toggleColumn(column, true);
      });

    // Clear search
    document.getElementById("comparison-search").value = "";
  });

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
