<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
// GSAP Intro Animations
gsap.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from("nav ul li", { duration: 1, opacity: 0, y: -20, stagger: 0.2 });
gsap.from(".hero h2", { duration: 1, opacity: 0, x: -100 });
gsap.from(".hero p", { duration: 1, opacity: 0, x: 100, delay: 0.5 });
gsap.from(".btn", { duration: 1, scale: 0, delay: 1 });

// Scroll Animations
gsap.utils.toArray("section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});
