const smoother = ScrollSmoother.create({
  content: ".scroll-smooth",
  smooth: 2,
  effects: true,
});

const scrollLagElements = document.querySelectorAll('.scroll-lag')

scrollLagElements.forEach((el) => {
  smoother.effects(el, {
    speed: 1.05,
    lag: (i) => i * 0.5,
  })
})



