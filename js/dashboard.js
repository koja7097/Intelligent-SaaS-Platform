import { views } from "./views.js";

const container = document.getElementById("view-container");
const links = document.querySelectorAll(".sidebar nav a");

// Load view
function loadView(name) {
  container.innerHTML = views[name]();
  links.forEach(l => l.classList.remove("active"));
  document.querySelector(`[data-view="${name}"]`).classList.add("active");

  if (name === "dashboard") initDashboard();
}

// Sidebar clicks
links.forEach(link => {
  link.addEventListener("click", () => {
    loadView(link.dataset.view);
  });
});

// Dashboard logic
function initDashboard() {
  const users = document.getElementById("users");
  const errors = document.getElementById("errors");
  const latency = document.getElementById("latency");
  const activity = document.getElementById("activity");
  const alerts = document.getElementById("alerts");
  const ai = document.getElementById("ai");

  setInterval(() => {
    users.textContent = Math.floor(200 + Math.random() * 50);
    errors.textContent = (Math.random() * 0.2).toFixed(2) + "%";
    latency.textContent = Math.floor(90 + Math.random() * 40) + " ms";
  }, 2000);

  activity.innerHTML = `
    <li>User logged in</li>
    <li>API request processed</li>
    <li>Database synced</li>
  `;

  alerts.innerHTML = `
    <li>✔ System stable</li>
    <li>⚠ Memory usage high</li>
  `;

  ai.textContent =
    "System health is optimal. No immediate action required.";
}

//Analytics
function initAnalytics(range = "today") {
  const visits = Math.floor(Math.random() * 4000 + 800);
  const conversions = (Math.random() * 5 + 2).toFixed(2);
  const bounce = (Math.random() * 30 + 20).toFixed(1);

  document.getElementById("visits").textContent = visits;
  document.getElementById("conversions").textContent = conversions + "%";
  document.getElementById("bounce").textContent = bounce + "%";

  drawLineChart(range);
  drawBarChart();
}

function drawLineChart(range) {
  const canvas = document.getElementById("lineChart");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const points = range === "today" ? 12 : range === "7" ? 7 : 30;
  const data = Array.from({ length: points }, () =>
    Math.random() * canvas.height * 0.8
  );

  ctx.beginPath();
  ctx.strokeStyle = "#6cf";
  ctx.lineWidth = 3;

  data.forEach((val, i) => {
    const x = (canvas.width / (points - 1)) * i;
    const y = canvas.height - val;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.stroke();
}

function drawBarChart() {
  const canvas = document.getElementById("barChart");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const bars = 5;
  const barWidth = canvas.width / (bars * 2);

  for (let i = 0; i < bars; i++) {
    const height = Math.random() * canvas.height * 0.8;
    ctx.fillStyle = "#4fd1c5";
    ctx.fillRect(
      i * barWidth * 2 + barWidth / 2,
      canvas.height - height,
      barWidth,
      height
    );
  }
}

if (name === "analytics") {
  initAnalytics();

  document.querySelectorAll(".filter").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      initAnalytics(btn.dataset.range);
    };
  });
}

// Initial load
loadView("dashboard");