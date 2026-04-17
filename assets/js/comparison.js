// Comparison layout page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initToolFilter();
  initCategoryFilter();
  initResetButton();
  initColumnToggle();
});

// Initialize Tool Filter Dropdown
function initToolFilter() {
  const toolFilter = document.getElementById("tool-filter");
  if (!toolFilter) return;

  // Get all tool columns from the table headers
  const toolHeaders = document.querySelectorAll("table thead th[data-tool]");
  if (toolHeaders.length === 0) return;

  // Build dropdown content
  let dropdownHTML = '<li><h6 class="dropdown-header">Show/Hide Tools</h6></li>';
  
  toolHeaders.forEach((th, index) => {
    const toolKey = th.dataset.tool;
    const toolName = th.textContent.trim();
    // Column index (0 is feature name column, so tools start at 1)
    const colIndex = index + 1;
    
    dropdownHTML += `
      <li>
        <div class="dropdown-item">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${toolKey}" 
                   id="tool-${toolKey}" data-col-index="${colIndex}" checked>
            <label class="form-check-label" for="tool-${toolKey}">
              ${toolName}
            </label>
          </div>
        </div>
      </li>
    `;
  });

  toolFilter.innerHTML = dropdownHTML;

  // Add event listeners to checkboxes
  toolFilter.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", function () {
      const colIndex = this.dataset.colIndex;
      toggleColumn(colIndex, this.checked);
    });
  });
}

// Initialize Category Filter Dropdown
function initCategoryFilter() {
  const categoryFilter = document.getElementById("category-filter");
  if (!categoryFilter) return;

  // Get all unique categories from table rows
  const categories = new Set();
  document.querySelectorAll("table tbody tr[data-category]").forEach((row) => {
    const cat = row.dataset.category;
    if (cat) categories.add(cat);
  });

  if (categories.size === 0) {
    // Try to get categories from section headers
    document.querySelectorAll("tr.section-header").forEach((row) => {
      const text = row.textContent.trim();
      if (text) categories.add(text.toLowerCase().replace(/\s+/g, '-'));
    });
  }

  // Build dropdown content
  let dropdownHTML = '<li><h6 class="dropdown-header">Filter by Category</h6></li>';
  dropdownHTML += `
    <li>
      <a class="dropdown-item" href="#" data-category="all">
        <i class="bi bi-grid-3x3-gap me-2"></i>All Categories
      </a>
    </li>
  `;

  const categoryLabels = {
    'core': 'Core Features',
    'mcp': 'MCP & Integration',
    'commands': 'Commands & CLI',
    'skills': 'Skills/Agents',
    'editor': 'Editor Integration',
    'pricing': 'Pricing & Limits'
  };

  categories.forEach((cat) => {
    const label = categoryLabels[cat] || cat;
    dropdownHTML += `
      <li>
        <a class="dropdown-item" href="#" data-category="${cat}">
          ${label}
        </a>
      </li>
    `;
  });

  categoryFilter.innerHTML = dropdownHTML;

  // Add click handlers
  categoryFilter.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.dataset.category;
      filterByCategory(category);
      
      // Close dropdown
      const dropdown = bootstrap.Dropdown.getInstance(
        document.getElementById('category-filter').previousElementSibling
      );
      if (dropdown) dropdown.hide();
    });
  });
}

// Toggle column visibility
function toggleColumn(colIndex, show) {
  const table = document.querySelector("table.comparison-matrix, table");
  if (!table) return;

  // Toggle header
  const th = table.querySelector(`thead tr th:nth-child(${parseInt(colIndex) + 1})`);
  if (th) th.style.display = show ? "" : "none";

  // Toggle all cells in this column
  table.querySelectorAll(`tbody tr td:nth-child(${parseInt(colIndex) + 1})`).forEach((td) => {
    td.style.display = show ? "" : "none";
  });
}

// Filter rows by category
function filterByCategory(category) {
  const rows = document.querySelectorAll("table tbody tr[data-category]");
  
  rows.forEach((row) => {
    if (category === "all" || row.dataset.category === category) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });

  // Also filter section headers if they don't match
  document.querySelectorAll("tr.section-header").forEach((header) => {
    // Section headers stay visible, but we could hide them if empty
  });
}

// Initialize Reset Button
function initResetButton() {
  const resetBtn = document.getElementById("reset-filters");
  if (!resetBtn) return;

  resetBtn.addEventListener("click", function () {
    // Clear search
    const searchInput = document.getElementById("comparison-search");
    if (searchInput) searchInput.value = "";

    // Show all rows
    document.querySelectorAll("table tbody tr").forEach((row) => {
      row.style.display = "";
    });

    // Reset tool visibility checkboxes
    document
      .querySelectorAll('#tool-filter input[type="checkbox"]')
      .forEach((cb) => {
        cb.checked = true;
      });

    // Show all columns
    document.querySelectorAll("table th, table td").forEach((cell) => {
      cell.style.display = "";
    });

    // Reset category filter to "all"
    filterByCategory("all");

    // Trigger any custom reset events
    document.dispatchEvent(new CustomEvent("comparison-reset"));
  });
}

// Initialize Column Toggle (for responsive)
function initColumnToggle() {
  // Handle window resize for responsive column hiding
  const table = document.querySelector("table.comparison-matrix");
  if (!table) return;

  function handleResize() {
    const width = window.innerWidth;
    const toolHeaders = table.querySelectorAll("thead th[data-tool]");
    
    // On small screens, hide some columns (keep first 4 tools visible)
    if (width < 768) {
      toolHeaders.forEach((th, index) => {
        if (index >= 4) {
          toggleColumn(index + 1, false);
        }
      });
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize(); // Initial check
}
