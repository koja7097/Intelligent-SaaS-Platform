export const views = {
  dashboard: () => `
    <header class="topbar">
      <h1>System Overview</h1>
      <div class="status operational">Operational</div>
    </header>

    <section class="cards">
      <div class="card glow">
        <h4>Active Users</h4>
        <p id="users">0</p>
        <span class="trend up">▲ 4.3%</span>
      </div>

      <div class="card">
        <h4>Error Rate</h4>
        <p id="errors">0.00%</p>
        <span class="trend down">▼ 1.1%</span>
      </div>

      <div class="card">
        <h4>Latency</h4>
        <p id="latency">0 ms</p>
        <span class="trend stable">● stable</span>
      </div>

      <div class="card">
        <h4>Uptime</h4>
        <p>99.98%</p>
      </div>
    </section>

    <section class="grid">
      <div class="panel">
        <h3>Recent Activity</h3>
        <ul id="activity"></ul>
      </div>

      <div class="panel">
        <h3>Active Alerts</h3>
        <ul id="alerts"></ul>
      </div>

      <div class="panel ai">
        <h3>AI System Insight</h3>
        <p id="ai"></p>
      </div>
    </section>
  `,

analytics: () => `
  <section class="analytics">

    <div class="analytics-header">
      <h2>Analytics</h2>

      <div class="filters">
        <button class="filter active" data-range="today">Today</button>
        <button class="filter" data-range="7">7 Days</button>
        <button class="filter" data-range="30">30 Days</button>
      </div>
    </div>

    <div class="analytics-kpis">
      <div class="card">
        <h4>Total Visits</h4>
        <p id="visits">—</p>
      </div>
      <div class="card">
        <h4>Conversions</h4>
        <p id="conversions">—%</p>
      </div>
      <div class="card">
        <h4>Bounce Rate</h4>
        <p id="bounce">—%</p>
      </div>
    </div>

    <div class="charts">
      <div class="panel">
        <h3>Traffic Over Time</h3>
        <canvas id="lineChart" height="120"></canvas>
      </div>

      <div class="panel">
        <h3>Usage Breakdown</h3>
        <canvas id="barChart" height="120"></canvas>
      </div>
    </div>

  </section>
`,

alerts: () => `
<header class="topbar">
  <h1>Alerts & Notifications</h1>
</header>

<div class="panel alerts-panel">

  <div class="filters">
    <button class="alert-filter active" data-type="all">All</button>
    <button class="alert-filter" data-type="warning">Warnings</button>
    <button class="alert-filter" data-type="error">Errors</button>
    <button class="alert-filter" data-type="success">Success</button>
  </div>

  <ul id="alertList" class="alert-list"></ul>
</div>
`,


 ai: () => `
<header class="topbar">
  <h1>AI Insights</h1>
</header>

<section class="ai-panel">
  <div class="ai-cards">
    <div class="card glow">
      <h4>System Prediction</h4>
      <p id="prediction">Calculating...</p>
    </div>
    <div class="card glow">
      <h4>Risk Level</h4>
      <p id="risk">—</p>
    </div>
    <div class="card glow">
      <h4>Recommendation</h4>
      <p id="recommendation">—</p>
    </div>
  </div>

  <div class="ai-charts">
    <div class="panel">
      <h3>Load Prediction</h3>
      <canvas id="aiLineChart" height="120"></canvas>
    </div>

    <div class="panel">
      <h3>Resource Usage</h3>
      <canvas id="aiBarChart" height="120"></canvas>
    </div>
  </div>
</section>
`,

client: () => `
<header class="topbar">
  <h1>Client Portal</h1>
</header>

<section class="client-panel">

  <!-- Client Info -->
  <div class="client-card">
    <div class="client-avatar" id="clientAvatar">👤</div>
    <div class="client-info">
      <h3 id="clientName">John Doe</h3>
      <p id="clientEmail">john.doe@example.com</p>
      <button class="btn editProfileBtn">Edit Profile</button>
    </div>
  </div>

  <!-- Client Projects / Usage -->
  <div class="client-usage">
    <div class="card glow">
      <h4>Active Projects</h4>
      <p id="activeProjects">3</p>
    </div>
    <div class="card glow">
      <h4>Subscription Plan</h4>
      <p id="subscriptionPlan">Pro</p>
    </div>
    <div class="card glow">
      <h4>API Usage</h4>
      <p id="apiUsage">1,245 requests</p>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="client-actions">
    <button class="btn upgradePlanBtn">Upgrade Plan</button>
    <button class="btn contactSupportBtn">Contact Support</button>
    <button class="btn viewInvoicesBtn">View Invoices</button>
  </div>
</section>

<!-- Edit Profile Modal Card -->
<div id="modalOverlay" class="modal-overlay hidden">
  <div class="modal-card">
    <h3>Edit Profile</h3>
    <form id="editProfileForm">
      <label>
        Name:
        <input type="text" id="editName" required>
      </label>
      <label>
        Email:
        <input type="email" id="editEmail" required>
      </label>
      <label>
        Profile Image:
        <input type="file" id="editAvatar" accept="image/*">
      </label>
      <div style="margin-top:1rem; display:flex; gap:0.5rem; justify-content:flex-end;">
        <button type="submit" class="btn">Save</button>
        <button type="button" id="modalClose" class="btn">Cancel</button>
      </div>
    </form>
  </div>
</div>
`,

pricing: () => `
<header class="topbar">
  <h1>Pricing & Subscriptions</h1>
</header>

<section class="pricing-panel">

  <div class="pricing-cards">

    <!-- Basic Plan -->
    <div class="pricing-card">
      <h3>Basic</h3>
      <p class="price">$10<span>/mo</span></p>
      <ul>
        <li>5 Projects</li>
        <li>10 GB Storage</li>
        <li>Email Support</li>
      </ul>
      <button class="btn selectPlanBtn">Select Plan</button>
    </div>

    <!-- Pro Plan -->
    <div class="pricing-card recommended">
      <h3>Pro</h3>
      <p class="price">$25<span>/mo</span></p>
      <ul>
        <li>15 Projects</li>
        <li>50 GB Storage</li>
        <li>Priority Support</li>
        <li>Advanced Analytics</li>
      </ul>
      <button class="btn selectPlanBtn">Select Plan</button>
    </div>

    <!-- Enterprise Plan -->
    <div class="pricing-card">
      <h3>Enterprise</h3>
      <p class="price">$50<span>/mo</span></p>
      <ul>
        <li>Unlimited Projects</li>
        <li>200 GB Storage</li>
        <li>Dedicated Support</li>
        <li>Custom Integrations</li>
      </ul>
      <button class="btn selectPlanBtn">Select Plan</button>
    </div>

  </div>
</section>
`,

 settings: () => `
<header class="topbar">
  <h1>Settings & Personalization</h1>
</header>

<section class="settings-panel">

  <div class="settings-card">
    <h4>Notifications</h4>
    <label class="switch">
      <input type="checkbox" id="toggleNotifications" checked>
      <span class="slider round"></span>
    </label>
  </div>

  <div class="settings-card">
    <h4>Dark Mode</h4>
    <label class="switch">
      <input type="checkbox" id="toggleDarkMode">
      <span class="slider round"></span>
    </label>
  </div>

  <div class="settings-card">
    <h4>Auto Updates</h4>
    <label class="switch">
      <input type="checkbox" id="toggleAutoUpdate" checked>
      <span class="slider round"></span>
    </label>
  </div>

  <div class="settings-card">
    <h4>Profile Settings</h4>
    <p>Update your account info, password, and preferences.</p>
    <button class="btn">Edit Profile</button>
  </div>

</section>
`,
};