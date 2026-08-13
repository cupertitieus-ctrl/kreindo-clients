(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".progress", { scaleX: 0, transformOrigin: "0% 50%" });
  gsap.to(".progress", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { scrub: 0.25, start: 0, end: "max" }
  });

  var heroBits = gsap.utils.toArray(".hero > *");
  gsap.set(heroBits, { opacity: 0, y: 26 });
  gsap.to(heroBits, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.06,
    ease: "power3.out",
    delay: 0.04
  });
  gsap.to(".hero h1", {
    yPercent: -12,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.35 }
  });

  gsap.from("#services .card", {
    opacity: 0,
    y: 32,
    duration: 0.45,
    stagger: 0.07,
    ease: "power3.out",
    scrollTrigger: { trigger: "#services", start: "top 78%" }
  });

  gsap.from("#proof [data-proof], #proof [data-proof-by]", {
    opacity: 0,
    y: 20,
    duration: 0.45,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: { trigger: "#proof", start: "top 75%" }
  });

  gsap.from("#process .steps li", {
    opacity: 0,
    x: -18,
    duration: 0.4,
    stagger: 0.09,
    ease: "power3.out",
    scrollTrigger: { trigger: "#process", start: "top 75%" }
  });

  gsap.from("#contact form", {
    opacity: 0,
    y: 22,
    duration: 0.4,
    ease: "power3.out",
    scrollTrigger: { trigger: "#contact", start: "top 80%" }
  });

  ScrollTrigger.matchMedia({
    "(min-width: 801px)": function () {
      ScrollTrigger.create({
        trigger: "#proof",
        start: "top 16%",
        end: "+=85%",
        pin: true,
        pinSpacing: true
      });
      ScrollTrigger.create({
        trigger: "#process",
        start: "top 14%",
        end: "+=70%",
        pin: true,
        pinSpacing: true
      });
    }
  });
})();
