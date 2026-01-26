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