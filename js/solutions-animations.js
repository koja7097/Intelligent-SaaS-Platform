gsap.utils.toArray('.solution-card').forEach((card, i) => {
  gsap.from(card, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    }
  });
});

gsap.from('.feature-box', {
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.solution-features',
    start: "top 80%",
  }
});