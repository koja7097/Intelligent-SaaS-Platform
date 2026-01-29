document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab, .tab-content").forEach(el => el.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});


//Product
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('active')) return;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    panels.forEach(panel => {
      if (panel.classList.contains('active')) {
        gsap.to(panel, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          onComplete: () => panel.classList.remove('active')
        });
      }
    });

    const target = document.getElementById(tab.dataset.tab);
    target.classList.add('active');

    gsap.fromTo(
      target,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    gsap.from(
      target.querySelectorAll("h3, p, li, img"),
      {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  });
});

let autoIndex = 0;
const tabArray = Array.from(tabs);

setInterval(() => {
  autoIndex = (autoIndex + 1) % tabArray.length;
  tabArray[autoIndex].click();
}, 7000);