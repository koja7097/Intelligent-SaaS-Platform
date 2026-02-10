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
      <h1>Alerts</h1>
    </header>

    <div class="panel">
      <ul>
        <li>⚠ High CPU usage detected</li>
        <li>⚠ API latency spike</li>
        <li>✔ Backup completed successfully</li>
      </ul>
    </div>
  `,

  ai: () => `
    <header class="topbar">
      <h1>AI Insights</h1>
    </header>

    <div class="panel ai">
      <p>
        Based on recent data, system load will increase by 12% in the next 24 hours.
        Consider scaling resources.
      </p>
    </div>
  `,

  settings: () => `
    <header class="topbar">
      <h1>Settings</h1>
    </header>

    <div class="panel">
      <label>
        <input type="checkbox" checked />
        Enable notifications
      </label>
    </div>
  `
};