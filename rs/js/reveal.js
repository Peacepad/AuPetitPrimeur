gsap.registerPlugin(ScrollTrigger);

const revealTxt = document.querySelectorAll('.txt-reveal');

const revealTxt2 = document.querySelectorAll('.txt-reveal2');

gsap.from(revealTxt, {
  duration:1.5,
  yPercent: 100,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: '.connection',
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
});
gsap.from(revealTxt2, {
  duration:1.5,
  yPercent: 100,
  opacity: 0,
  ease: "power4",
  scrollTrigger: {
    trigger: '.news',
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
});
  
  

 



