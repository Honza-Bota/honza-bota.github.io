document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  buildDust();
  markActiveNav();
});

// Fill in every element tagged with data-config="path.to.value"
// from siteConfig (defined in config.js).
function applyConfig() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const path = el.getAttribute("data-config");
    const value = path
      .split(".")
      .reduce((obj, key) => (obj ? obj[key] : undefined), siteConfig);

    if (value === undefined) return;

    if (el.dataset.configAttr) {
      el.setAttribute(el.dataset.configAttr, value);
    } else {
      el.textContent = value;
    }
  });

  // mailto link needs both the visible text and the href built from config
  const emailLink = document.querySelector("[data-email-link]");
  if (emailLink) {
    emailLink.href = `mailto:${siteConfig.about.email}`;
  }

  document.title = siteConfig.name;
}

// Quiet drifting gold dust behind the content — restrained, not confetti.
function buildDust() {
  const field = document.querySelector(".dust");
  if (!field) return;

  const count = window.innerWidth < 600 ? 35 : 60;

  for (let i = 0; i < count; i++) {
    const mote = document.createElement("div");
    mote.className = "mote";
    mote.style.top = Math.random() * 100 + "vh";
    mote.style.left = Math.random() * 100 + "vw";
    mote.style.animationDuration =
      (Math.random() * 6 + 6).toFixed(2) + "s, " +
      (Math.random() * 2 + 1.5).toFixed(2) + "s";
    mote.style.animationDelay = -(Math.random() * 6).toFixed(2) + "s";
    field.appendChild(mote);
  }
}

// Underline the current page in the nav.
function markActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav ul a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}
