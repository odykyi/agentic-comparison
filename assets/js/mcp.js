// Placeholder for MCP page JavaScript
// Will handle filtering servers by compatibility

document.addEventListener("DOMContentLoaded", function () {
  initMcpFilters();
});

function initMcpFilters() {
  // Filter buttons for tool compatibility
  const filterButtons = document.querySelectorAll("[data-filter-tool]");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const toolId = this.getAttribute("data-filter-tool");
      filterServersByTool(toolId);
    });
  });
}

function filterServersByTool(toolId) {
  const cards = document.querySelectorAll("#mcp-server-grid .card");

  cards.forEach((card) => {
    const hasSupport = card.querySelector(`[data-tool="${toolId}"]`);
    if (hasSupport) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
