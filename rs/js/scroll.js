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

gsap.registerPlugin(ScrollToPlugin);

// Bouton commander
const commandButton = document.querySelector('#command');

commandButton.addEventListener('click', () => {
  gsap.to(window, {duration: 0.5, scrollTo: "#connection"});
})
