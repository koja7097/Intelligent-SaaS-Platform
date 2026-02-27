import { views } from "./views.js";

const container = document.getElementById("view-container");
const links = document.querySelectorAll(".sidebar nav a");

// Load view
function loadView(name) {
  container.innerHTML = views[name]();
  links.forEach(l => l.classList.remove("active"));
  document.querySelector(`[data-view="${name}"]`).classList.add("active");

  // Initialize the proper view
  if (name === "dashboard") initDashboard();
  if (name === "analytics") initAnalytics();
  if (name === "alerts") initAlerts();
  if (name === "ai") initAI();
  if (name === "client") initClient();
  if (name === "pricing") initPricing();
  if (name === "settings") initSettings();
}

// Sidebar clicks
links.forEach(link => {
  link.addEventListener("click", () => {
    loadView(link.dataset.view);
  });
});

// ----------------- DASHBOARD -----------------
function initDashboard() {
  const users = document.getElementById("users");
  const errors =  document.getElementById("errors");
  const latency = document.getElementById("latency");
  const activity = document.getElementById("activity");
  const alerts = document.getElementById("alerts");
  const ai = document.getElementById("ai");

  setInterval(() => {
    users.textContent = Math.floor(200 + Math.random() * 50);
    errors.textContent = (Math.random() * 0.2).toFixed(2) + "%";
    latency.textContent = Math.floor(90 + Math.random() * 40) + " ms";
  }, 2000);

document.addEventListener("DOMContentLoaded",()=>{

  // ----------------- KPI SPARKLINES & ANIMATION -----------------
function drawSparkline(id, data, color = 'var(--primary)') {
  const ctx = document.getElementById(id).getContext('2d');
  if (window[id + 'Chart']) {
    window[id + 'Chart'].data.datasets[0].data = data;
    window[id + 'Chart'].update();
  } else {
    window[id + 'Chart'] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((_, i) => i),
        datasets: [{
          data,
          borderColor: color,
          backgroundColor: 'rgba(108,124,255,0.2)',
          tension: 0.3,
          fill: true,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x:{display:false}, y:{display:false} },
        animation: { duration: 800, easing: 'easeOutQuart' }
      }
    });
  }
}

  function animateValue(id,start,end,duration){
    const obj=document.getElementById(id);
    let startTimestamp=null;
    const step=(timestamp)=>{
      if(!startTimestamp) startTimestamp=timestamp;
      const progress=Math.min((timestamp-startTimestamp)/duration,1);
      obj.textContent=Math.floor(progress*(end-start)+start);
      if(progress<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  setInterval(()=>{
    const usersData=Array.from({length:12},()=>Math.floor(200+Math.random()*50));
    drawSparkline('usersSparkline',usersData);
    animateValue('users',0,usersData[usersData.length-1],1000);

    const errorsData=Array.from({length:12},()=>parseFloat((Math.random()*0.2).toFixed(2)));
    drawSparkline('errorsSparkline',errorsData);
    animateValue('errors',0,errorsData[errorsData.length-1]*100,1000);

    const latencyData=Array.from({length:12},()=>Math.floor(90+Math.random()*40));
    drawSparkline('latencySparkline',latencyData);
    animateValue('latency',0,latencyData[latencyData.length-1],1000);
  },2000);

  // ----------------- ACTIVITY FILTER & SEARCH -----------------
  const activityList=[
    { type:"login", text:"User logged in" },
    { type:"api", text:"API request processed" },
    { type:"db", text:"Database synced" },
    { type:"login", text:"Admin logged in" }
  ];
  const activityUl=document.getElementById("activity");

  function renderActivity(filter="all"){
    activityUl.innerHTML="";
    activityList.filter(a=>filter==="all"||a.type===filter).forEach(a=>{
      const li=document.createElement("li");
      li.textContent=a.text;
      activityUl.appendChild(li);
    });
  }
  renderActivity();

  document.querySelectorAll(".filter").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderActivity(btn.dataset.type);
    });
  });

  document.getElementById("activitySearch").addEventListener("input",e=>{
    const query=e.target.value.toLowerCase();
    document.querySelectorAll("#activity li").forEach(li=>{
      li.style.display=li.textContent.toLowerCase().includes(query)?"":"none";
    });
  });

  // ----------------- ALERTS -----------------
  const alertsUl=document.getElementById('alerts');
  const alertTypes=[
    {type:'warning',text:'High CPU Usage'},
    {type:'error',text:'Server Down'},
    {type:'success',text:'Deployment Successful'}
  ];

  function showToast(msg,type='info'){
    const toast=document.createElement('div');
    toast.className=`toast ${type}`;
    toast.textContent=msg;
    document.body.appendChild(toast);
    setTimeout(()=>toast.remove(),3000);
  }

  setInterval(()=>{
    const alert=alertTypes[Math.floor(Math.random()*alertTypes.length)];
    const li=document.createElement('li');
    li.className=`alert-item ${alert.type}`;
    li.innerHTML=`${alert.text} <span class="timestamp">${new Date().toLocaleTimeString()}</span>`;
    alertsUl.prepend(li);
    if(alertsUl.children.length>10) alertsUl.removeChild(alertsUl.lastChild);
    showToast(`New Alert: ${alert.text}`,alert.type);
  },5000);

  // ----------------- AI INSIGHTS -----------------
  document.querySelectorAll(".aiSuggestBtn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const action=btn.textContent;
      document.getElementById("ai").textContent=`AI recommends: ${action}`;
      showToast(`Applied AI Suggestion: ${action}`,'success');
    });

const kpiCards = ['users', 'errors', 'latency'];

kpiCards.forEach(id => {
  const card = document.getElementById(id).closest('.card');

  // Tooltip container
  const tooltip = document.createElement('div');
  tooltip.className = 'kpi-tooltip';
  tooltip.style.display = 'none';
  card.appendChild(tooltip);

  // Tooltip content
  tooltip.innerHTML = `
    <div class="tooltip-header">
      <strong id="${id}-tooltip-title">${id.toUpperCase()}</strong>
      <span id="${id}-tooltip-change" class="tooltip-change">+0%</span>
    </div>
    <canvas id="${id}-tooltip-chart" height="40"></canvas>
  `;

  card.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
    tooltip.style.opacity = 0;
    tooltip.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      tooltip.style.opacity = 1;
      tooltip.style.transform = 'translateY(0)';
    }, 10);

    // Random data for demo
    const data = Array.from({ length: 24 }, () => Math.floor(Math.random() * 50) + 50);

    // Draw mini sparkline
    drawSparkline(`${id}-tooltip-chart`, data, '#6c7cff');

    // Show percentage change
    const change = ((data[data.length-1] - data[0]) / data[0] * 100).toFixed(1);
    const changeEl = document.getElementById(`${id}-tooltip-change`);
    changeEl.textContent = `${change > 0 ? '+' : ''}${change}%`;
    changeEl.style.color = change >= 0 ? '#22c55e' : '#ef4444';
  });

  card.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
    tooltip.style.transform = 'translateY(-10px)';
    setTimeout(() => tooltip.style.display = 'none', 300);
  });
});

  });

  // ----------------- DRAGGABLE PANELS -----------------
  const grid=document.getElementById("dashboardGrid");
  let dragged;
  grid.addEventListener("dragstart",e=>dragged=e.target);
  grid.addEventListener("dragover",e=>e.preventDefault());
  grid.addEventListener("drop",e=>{
    e.preventDefault();
    if(e.target.classList.contains("panel") && e.target!==dragged){
      const panels=Array.from(grid.children);
      const dropIndex=panels.indexOf(e.target);
      grid.insertBefore(dragged,panels[dropIndex]);
    }
  });
});

// Call this when loading KPIs
animateValue('users', 0, Math.floor(200 + Math.random()*50), 1000);
animateValue('errors', 0, parseFloat((Math.random()*0.2).toFixed(2)), 1000);
animateValue('latency', 0, Math.floor(90 + Math.random()*40), 1000);

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

// ----------------- ANALYTICS -----------------
function initAnalytics(range = "today") {
  // Update KPIs
  const visits = Math.floor(Math.random() * 4000 + 800);
  const conversions = (Math.random() * 5 + 2).toFixed(2);
  const bounce = (Math.random() * 30 + 20).toFixed(1);

  document.getElementById("visits").textContent = visits;
  document.getElementById("conversions").textContent = conversions + "%";
  document.getElementById("bounce").textContent = bounce + "%";

  drawLineChart(range);
  drawBarChart();

  // Filter buttons
  const filterButtons = document.querySelectorAll(".filter");
  filterButtons.forEach(btn => {
    btn.onclick = () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      initAnalytics(btn.dataset.range); // reload with new range
    };
  });
}

//======= aLERT ======//

function initAlerts() {
  const alertList = document.getElementById("alertList");

  const alertTypes = [
    { type: "success", text: "Backup completed successfully" },
    { type: "warning", text: "Memory usage high" },
    { type: "error", text: "API request failed" },
    { type: "success", text: "New user registered" },
    { type: "warning", text: "CPU usage spiked" },
    { type: "error", text: "Database connection lost" },
  ];

  function renderAlerts(filter = "all") {
    alertList.innerHTML = "";
    const filtered = filter === "all" ? alertTypes : alertTypes.filter(a => a.type === filter);

    filtered.forEach(a => {
      const li = document.createElement("li");
      li.className = `alert-item ${a.type}`;
      li.innerHTML = `
        ${a.text}
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
      `;
      alertList.appendChild(li);
    });
  }

  // Initial render
  renderAlerts();

  // Filters
  const filterButtons = document.querySelectorAll(".alert-filter");
  filterButtons.forEach(btn => {
    btn.onclick = () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderAlerts(btn.dataset.type);
    };
  });

  // Simulate real-time alerts every 5 seconds
  setInterval(() => {
    const randomAlert = alertTypes[Math.floor(Math.random() * alertTypes.length)];
    alertTypes.unshift({ ...randomAlert }); // newest on top
    if (alertTypes.length > 20) alertTypes.pop();
    const activeFilter = document.querySelector(".alert-filter.active").dataset.type;
    renderAlerts(activeFilter);
  }, 5000);
}




//AI INSIGHT SECTION=======//
let aiLineChartInstance;
let aiBarChartInstance;

function initAI() {
  const predictionEl = document.getElementById("prediction");
  const riskEl = document.getElementById("risk");
  const recommendationEl = document.getElementById("recommendation");

  // Update AI KPIs dynamically
  function updateAIKPI() {
    const predictions = ["Stable", "Moderate Load", "High Load", "Critical"];
    const risks = ["Low", "Medium", "High", "Critical"];
    const recommendations = [
      "No action required",
      "Monitor closely",
      "Consider scaling resources",
      "Immediate scaling required"
    ];

    predictionEl.textContent = predictions[Math.floor(Math.random() * predictions.length)];
    riskEl.textContent = risks[Math.floor(Math.random() * risks.length)];
    recommendationEl.textContent = recommendations[Math.floor(Math.random() * recommendations.length)];
  }

  updateAIKPI();
  setInterval(updateAIKPI, 5000);

  // --- AI Charts ---
  const lineLabels = Array.from({ length: 12 }, (_, i) => `${i + 1}h`);
  const lineData = lineLabels.map(() => Math.floor(Math.random() * 100 + 50));

  const barLabels = ["CPU", "Memory", "Disk", "Network"];
  const barData = barLabels.map(() => Math.floor(Math.random() * 100));

  // Destroy previous charts
  if (aiLineChartInstance) aiLineChartInstance.destroy();
  if (aiBarChartInstance) aiBarChartInstance.destroy();

  // Line chart - Load Prediction
  const lineCtx = document.getElementById("aiLineChart").getContext("2d");
  aiLineChartInstance = new Chart(lineCtx, {
    type: "line",
    data: {
      labels: lineLabels,
      datasets: [{
        label: "Predicted Load",
        data: lineData,
        borderColor: "#f472b6",
        backgroundColor: "rgba(244, 114, 182, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 3,
      }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });

  // Bar chart - Resource Usage
  const barCtx = document.getElementById("aiBarChart").getContext("2d");
  aiBarChartInstance = new Chart(barCtx, {
    type: "bar",
    data: {
      labels: barLabels,
      datasets: [{
        label: "Usage (%)",
        data: barData,
        backgroundColor: ["#facc15", "#22c55e", "#3b82f6", "#f87171"],
        borderRadius: 6,
      }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } },
    },
  });
}

// Settitngs//

function initSettings() {
  const notifications = document.getElementById("toggleNotifications");
  const darkMode = document.getElementById("toggleDarkMode");
  const autoUpdate = document.getElementById("toggleAutoUpdate");

  // Load saved preferences (from localStorage)
  notifications.checked = JSON.parse(localStorage.getItem("notifications") ?? "true");
  darkMode.checked = JSON.parse(localStorage.getItem("darkMode") ?? "false");
  autoUpdate.checked = JSON.parse(localStorage.getItem("autoUpdate") ?? "true");

  // Event listeners
  notifications.addEventListener("change", () => {
    localStorage.setItem("notifications", notifications.checked);
  });

  darkMode.addEventListener("change", () => {
    localStorage.setItem("darkMode", darkMode.checked);
    document.body.classList.toggle("dark-mode", darkMode.checked);
  });

  autoUpdate.addEventListener("change", () => {
    localStorage.setItem("autoUpdate", autoUpdate.checked);
  });
}

// client portal//
function initClient() {
  const clientAvatar = document.getElementById("clientAvatar");
  const clientName = document.getElementById("clientName");
  const clientEmail = document.getElementById("clientEmail");
  const activeProjects = document.getElementById("activeProjects");
  const subscriptionPlan = document.getElementById("subscriptionPlan");
  const apiUsage = document.getElementById("apiUsage");

  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const editProfileForm = document.getElementById("editProfileForm");
  const editNameInput = document.getElementById("editName");
  const editEmailInput = document.getElementById("editEmail");
  const editAvatarInput = document.getElementById("editAvatar");

  // Load saved client data or default
  const savedClient = JSON.parse(localStorage.getItem("clientData")) || {
    name: "Jane Smith",
    email: "jane.smith@company.com",
    avatar: "",
    projects: Math.floor(Math.random() * 5 + 1),
    plan: "Pro",
    usage: Math.floor(Math.random() * 2000 + 500)
  };

  function renderClient() {
    clientName.textContent = savedClient.name;
    clientEmail.textContent = savedClient.email;
    activeProjects.textContent = savedClient.projects;
    subscriptionPlan.textContent = savedClient.plan;
    apiUsage.textContent = `${savedClient.usage} requests`;
    if(savedClient.avatar){
      clientAvatar.style.backgroundImage = `url(${savedClient.avatar})`;
      clientAvatar.textContent = "";
      clientAvatar.style.backgroundSize = "cover";
      clientAvatar.style.borderRadius = "50%";
    } else {
      clientAvatar.textContent = "👤";
      clientAvatar.style.backgroundImage = "none";
    }
  }

  renderClient();

  // Open modal
  document.querySelector(".editProfileBtn").onclick = () => {
    editNameInput.value = savedClient.name;
    editEmailInput.value = savedClient.email;
    modalOverlay.classList.remove("hidden");
  };

  // Close modal
  modalClose.onclick = () => modalOverlay.classList.add("hidden");
  modalOverlay.onclick = (e) => { if(e.target === modalOverlay) modalOverlay.classList.add("hidden"); };

  // Save changes
  editProfileForm.onsubmit = (e) => {
    e.preventDefault();
    savedClient.name = editNameInput.value;
    savedClient.email = editEmailInput.value;

    const file = editAvatarInput.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        savedClient.avatar = reader.result;
        renderClient();
        localStorage.setItem("clientData", JSON.stringify(savedClient));
      };
      reader.readAsDataURL(file);
    } else {
      renderClient();
      localStorage.setItem("clientData", JSON.stringify(savedClient));
    }

    modalOverlay.classList.add("hidden");
  };

  // Other buttons
  document.querySelector(".upgradePlanBtn").onclick = () => showCardModal("Upgrade Plan", `Current plan: ${savedClient.plan}. Choose a new plan.`);
  document.querySelector(".contactSupportBtn").onclick = () => showCardModal("Contact Support", "Reach support at support@example.com");
  document.querySelector(".viewInvoicesBtn").onclick = () => showCardModal("Invoices", "You have 3 invoices pending.");

  // Reusable card modal for other buttons
  function showCardModal(title, content){
    modalOverlay.classList.remove("hidden");
    const modalCard = modalOverlay.querySelector(".modal-card");
    modalCard.querySelector("h3").textContent = title;

    let html = `<p>${content}</p><div style="text-align:right; margin-top:1rem;"><button id="modalClose" class="btn">Close</button></div>`;
    modalCard.innerHTML = html;

    modalOverlay.querySelector("#modalClose").onclick = () => modalOverlay.classList.add("hidden");
  }
}


//PRICING''//
function initPricing() {
  const planButtons = document.querySelectorAll(".selectPlanBtn");
  planButtons.forEach(btn => {
    btn.onclick = () => {
      const planName = btn.closest(".pricing-card").querySelector("h3").textContent;
      alert(`You selected the ${planName} plan!`);
      // Here you can add logic to upgrade the plan in your system
    };
  });
}



// Draw line chart
function drawLineChart(range) {
  const canvas = document.getElementById("lineChart");
  if (!canvas) return;
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

// Draw bar chart
function drawBarChart() {
  const canvas = document.getElementById("barChart");
  if (!canvas) return;
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


// ----------------- INITIAL LOAD -----------------
loadView("dashboard");