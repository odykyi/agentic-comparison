// Terminology page specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initPerspectiveToggle();
});

function initPerspectiveToggle() {
  const toggle = document.getElementById("perspective-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", function (e) {
    if (e.target.matches("[data-perspective]")) {
      const perspective = e.target.getAttribute("data-perspective");

      // Update active state
      toggle.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // Apply perspective
      applyPerspective(perspective);

      // Save preference
      localStorage.setItem("terminology-perspective", perspective);
    }
  });

  // Load saved preference
  const saved = localStorage.getItem("terminology-perspective");
  if (saved && saved !== "canonical") {
    const btn = toggle.querySelector(`[data-perspective="${saved}"]`);
    if (btn) {
      btn.click();
    }
  }
}

function applyPerspective(perspective) {
  const table = document.getElementById("terminology-table");
  if (!table) return;

  if (perspective === "canonical") {
    // Reset to canonical view
    resetToCanonical(table);
  } else {
    // Show from tool's perspective
    showToolPerspective(table, perspective);
  }
}

function resetToCanonical(table) {
  // Restore original headers
  const headers = table.querySelectorAll("thead th");
  headers.forEach((header, index) => {
    if (index === 0) {
      header.textContent = "Canonical Concept";
    } else if (index === 1) {
      header.textContent = "Definition";
    } else {
      const toolId = header.getAttribute("data-tool");
      if (toolId) {
        header.innerHTML = `${getToolName(toolId)} Term`;
      }
    }
  });

  // Show all columns
  const cells = table.querySelectorAll("td, th");
  cells.forEach((cell) => {
    cell.style.display = "";
  });
}

function showToolPerspective(table, toolId) {
  // Get tool name
  const toolName = getToolName(toolId);

  // Update headers to show "In [Tool]" format
  const headers = table.querySelectorAll("thead th");
  headers.forEach((header, index) => {
    if (index === 0) {
      header.textContent = `Concept`;
    } else if (index === 1) {
      header.textContent = "Meaning";
    } else {
      const headerToolId = header.getAttribute("data-tool");
      if (headerToolId === toolId) {
        header.innerHTML = `<strong>${toolName}</strong> <span class="badge bg-primary">This Tool</span>`;
      } else {
        header.innerHTML = `In ${getToolName(headerToolId)}`;
      }
    }
  });

  // Highlight the selected tool column
  const rows = table.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    cells.forEach((cell, index) => {
      const header = headers[index];
      const cellToolId = header?.getAttribute("data-tool");

      if (cellToolId === toolId) {
        cell.classList.add("bg-light");
        cell.style.fontWeight = "bold";
      } else if (cellToolId && cellToolId !== toolId) {
        cell.classList.remove("bg-light");
        cell.style.fontWeight = "";
      }
    });
  });
}

function getToolName(toolId) {
  // Map of tool IDs to names - in production this would come from data
  const toolNames = {
    opencode: "OpenCode",
    codex: "Codex",
    claude_code: "Claude Code",
  };
  return toolNames[toolId] || toolId;
}
