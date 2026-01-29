/* gsap.registerPlugin(ScrollTrigger);

// Hero
gsap.from(".product-tabs h1", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".subtitle", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.3
});

// Tabs
gsap.from(".tab", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  delay: 0.5
});

// Content panels
gsap.utils.toArray(".tab-content").forEach(panel => {
  gsap.from(panel, {
    scrollTrigger: {
      trigger: panel,
      start: "top 80%"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out"
  });
}); */

gsap.to(camera.position, {
  z: 5.5,
  scrollTrigger: {
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});