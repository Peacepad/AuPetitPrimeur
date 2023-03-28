gsap.registerPlugin(ScrollTrigger);

const scrollReveal = document.querySelectorAll(".scroll-reveal");
const scrollReveal2 = document.querySelectorAll(".scroll-reveal2");
const scrollReveal3 = document.querySelectorAll(".scroll-reveal3");
const formReveal = document.querySelectorAll(".form-reveal");
const lineReveal = document.querySelectorAll(".line-reveal");
const faqReveal = document.querySelectorAll(".faq");


gsap.from(scrollReveal, {
  duration: 1.5,
  yPercent: 100,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: ".connection",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
gsap.from(scrollReveal2, {
  duration: 1.5,
  yPercent: 100,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: ".news",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
gsap.from(lineReveal, {
  duration: 0.2,
  ease: "power4",
  scrollTrigger: {
    trigger: ".news",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    onEnter: () => {
      const lineReveal = document.querySelector(".line-reveal");
      lineReveal.classList.add("line-reveal-active");
    },
    onLeaveBack: () => {
      const lineReveal = document.querySelector(".line-reveal");
      lineReveal.classList.remove("line-reveal-active");
    },
  },
});
gsap.from(scrollReveal3, {
  duration: 1.5,
  yPercent: 100,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
gsap.from(formReveal, {
  duration: 1.5,
  yPercent: 100,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: ".form-slider",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
gsap.from(faqReveal, {
  duration: 1.5,
  xPercent: 50,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: faqReveal,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
