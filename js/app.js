/* import { views } from "./views.js";
import { initDashboard } from "./dashboard.js";
import { initAnalyticsView } from "./analytics.js";
import { initAlerts } from "./alerts.js";
import { initAI } from "./ai.js";
import { initSettings } from "./settings.js";

const container = document.getElementById("view-container");
const links = document.querySelectorAll(".sidebar nav a");

function loadView(name) {
  container.innerHTML = views[name]();

  links.forEach(l => l.classList.remove("active"));
  document.querySelector(`[data-view="${name}"]`)?.classList.add("active");

  if (name === "dashboard") initDashboard();
  if (name === "analytics") initAnalyticsView();
  if (name === "alerts") initAlerts();
  if (name === "ai") initAI();
  if (name === "settings") initSettings();
}

links.forEach(link => {
  link.addEventListener("click", () => loadView(link.dataset.view));
});

// Initial load
loadView("dashboard"); */





const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(
  ".hero-copy, .hero-visual, .feature-card, .product-grid, .team-grid, .cta"
).forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

setInterval(() => {
  document.getElementById("latency").textContent = `${110 + Math.floor(Math.random()*40)}ms`;
  document.getElementById("events").textContent = `${1000 + Math.floor(Math.random()*500)}`;
}, 2000);

