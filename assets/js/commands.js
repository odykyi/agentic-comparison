// Commands page specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initCommandSearch();
  initCategoryFilter();
  initCopyButtons();
});

function initCommandSearch() {
  const searchInput = document.getElementById("comparison-search");
  if (!searchInput) return;

  searchInput.addEventListener(
    "input",
    debounce(function (e) {
      const query = e.target.value.toLowerCase();
      filterCommands(query);
    }, 300),
  );
}

function filterCommands(query) {
  const rows = document.querySelectorAll(
    "#commands-table tbody tr:not(.category-header)",
  );

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    if (text.includes(query)) {
      row.style.display = "";
      // Show parent category header
      showParentCategory(row);
    } else {
      row.style.display = "none";
    }
  });
}

function showParentCategory(row) {
  let prev = row.previousElementSibling;
  while (prev) {
    if (prev.classList.contains("category-header")) {
      prev.style.display = "";
      break;
    }
    prev = prev.previousElementSibling;
  }
}

function initCategoryFilter() {
  const categoryFilter = document.getElementById("category-filter");
  if (!categoryFilter) return;

  const categories = [
    "general",
    "file",
    "git",
    "search",
    "edit",
    "debug",
    "test",
    "deploy",
  ];
  const categoryLabels = {
    general: "General",
    file: "File Operations",
    git: "Git Integration",
    search: "Search",
    edit: "Edit Code",
    debug: "Debug",
    test: "Test",
    deploy: "Deploy",
  };

  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <button class="dropdown-item" data-category="${cat}">
        ${categoryLabels[cat]}
      </button>
    `;
    categoryFilter.appendChild(li);
  });

  categoryFilter.addEventListener("click", function (e) {
    if (e.target.matches("[data-category]")) {
      const category = e.target.getAttribute("data-category");
      filterCommandsByCategory(category);
    }
  });
}

function filterCommandsByCategory(category) {
  const rows = document.querySelectorAll(
    "#commands-table tbody tr.command-row",
  );

  rows.forEach((row) => {
    const rowCategory = row.getAttribute("data-category");
    if (rowCategory === category) {
      row.style.display = "";
      showParentCategory(row);
    } else {
      row.style.display = "none";
    }
  });
}

function initCopyButtons() {
  document.querySelectorAll(".command-syntax").forEach((el) => {
    // Wrap in a relative container if not already
    if (!el.parentElement.classList.contains("command-wrapper")) {
      const wrapper = document.createElement("div");
      wrapper.className = "command-wrapper position-relative";
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);

      // Add copy button
      const btn = document.createElement("button");
      btn.className =
        "btn btn-sm btn-outline-secondary copy-btn position-absolute";
      btn.style.cssText =
        "top: 50%; right: 0.5rem; transform: translateY(-50%); opacity: 0;";
      btn.innerHTML = '<i class="bi bi-clipboard"></i>';
      btn.onclick = function () {
        copyToClipboard(el.textContent.trim(), btn);
      };
      wrapper.appendChild(btn);

      // Show button on hover
      wrapper.addEventListener("mouseenter", () => (btn.style.opacity = "1"));
      wrapper.addEventListener("mouseleave", () => (btn.style.opacity = "0"));
    }
  });
}

function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="bi bi-check"></i>';
    button.classList.replace("btn-outline-secondary", "btn-success");

    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.classList.replace("btn-success", "btn-outline-secondary");
    }, 2000);
  });
}

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
