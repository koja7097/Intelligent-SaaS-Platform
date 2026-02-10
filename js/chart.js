/* export function drawLineChart(range = "today") {
  const canvas = document.getElementById("lineChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.parentElement.clientWidth;

  const points = range === "today" ? 12 : range === "7" ? 7 : 30;
  const data = Array.from({ length: points }, () => Math.random() * canvas.height * 0.8);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
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

export function drawBarChart() {
  const canvas = document.getElementById("barChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.parentElement.clientWidth;

  const bars = 5;
  const barWidth = canvas.width / (bars * 2);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < bars; i++) {
    const height = Math.random() * canvas.height * 0.8;
    ctx.fillStyle = "#4fd1c5";
    ctx.fillRect(i * barWidth * 2 + barWidth / 2, canvas.height - height, barWidth, height);
  }
} */