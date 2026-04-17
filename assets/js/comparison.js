// Comparison layout page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initResetButton();
});

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

    // Reset tool visibility
    document
      .querySelectorAll('#tool-filter input[type="checkbox"]')
      .forEach((cb) => {
        cb.checked = true;
      });

    // Show all columns
    document.querySelectorAll("table th, table td").forEach((cell) => {
      cell.style.display = "";
    });

    // Trigger any custom reset events
    document.dispatchEvent(new CustomEvent("comparison-reset"));
  });
}
