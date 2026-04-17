// Tool page specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
  initToolToc();
  initCommandCopy();
});

function initToolToc() {
  const toc = document.getElementById("tool-toc");
  if (!toc) return;

  // Find all H2 and H3 headings in the content
  const content = document.querySelector(".col-lg-9");
  if (!content) return;

  const headings = content.querySelectorAll("h2, h3");

  headings.forEach((heading, index) => {
    // Add ID if not present
    if (!heading.id) {
      heading.id = `section-${index}`;
    }

    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.className = "list-group-item list-group-item-action";
    link.textContent = heading.textContent;

    if (heading.tagName === "H3") {
      link.style.paddingLeft = "2rem";
    }

    toc.appendChild(link);
  });

  // Update active state on scroll
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 100;

    headings.forEach((heading) => {
      if (heading.offsetTop <= scrollPos) {
        toc.querySelectorAll("a").forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = toc.querySelector(`a[href="#${heading.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  });
}

function initCommandCopy() {
  document.querySelectorAll(".install-command").forEach((el) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-sm btn-outline-light ms-2";
    btn.innerHTML = '<i class="bi bi-clipboard"></i>';
    btn.onclick = function () {
      copyToClipboard(el.textContent.trim(), btn);
    };
    el.appendChild(btn);
  });
}

function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="bi bi-check"></i>';

    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  });
}
