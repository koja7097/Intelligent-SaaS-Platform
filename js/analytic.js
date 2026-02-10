/* import { drawLineChart, drawBarChart } from "./charts.js";

export function initAnalyticsView() {
  // Set KPI values
  document.getElementById("visits").textContent = Math.floor(Math.random() * 4000 + 800);
  document.getElementById("conversions").textContent = (Math.random() * 5 + 2).toFixed(2) + "%";
  document.getElementById("bounce").textContent = (Math.random() * 30 + 20).toFixed(1) + "%";

  // Draw charts
  drawLineChart();
  drawBarChart();

  // Filter buttons
  document.querySelectorAll(".filter").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Update KPIs and charts
      document.getElementById("visits").textContent = Math.floor(Math.random() * 4000 + 800);
      document.getElementById("conversions").textContent = (Math.random() * 5 + 2).toFixed(2) + "%";
      document.getElementById("bounce").textContent = (Math.random() * 30 + 20).toFixed(1) + "%";
      drawLineChart(btn.dataset.range);
      drawBarChart();
    };
  });
} */