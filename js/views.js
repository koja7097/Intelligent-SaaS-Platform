export const views = {

overview: () => `
<h1>System Overview</h1>

<div class="cards">
  <div class="card">
    <h4>Active Users</h4>
    <p id="users">--</p>
  </div>

  <div class="card">
    <h4>Error Rate</h4>
    <p id="errors">--%</p>
  </div>

  <div class="card">
    <h4>Latency</h4>
    <p id="latency">-- ms</p>
  </div>
</div>

<div class="panel">
  <h3>Recent Activity</h3>
  <ul id="activity"></ul>
</div>
`,

analytics: () => `
<h1>Analytics</h1>
<div class="cards">
  <div class="card"><h4>Monthly Growth</h4><p>+23%</p></div>
  <div class="card"><h4>Avg Session</h4><p>6m 20s</p></div>
  <div class="card"><h4>Conversion</h4><p>4.1%</p></div>
</div>
`,

alerts: () => `
<h1>Alerts & Incidents</h1>
<div class="panel">
  <ul id="alerts"></ul>
</div>
`,

ai: () => `
<h1>AI Insights</h1>
<div class="panel">
  <p id="ai-output">Analyzing system patterns...</p>
</div>
`,

settings: () => `
<h1>Settings</h1>
<div class="panel">
  <button id="reset">Reset Local Data</button>
</div>
`

};