const revealTxt = document.querySelectorAll('.txt-reveal')

const childSplit = new SplitText(revealTxt, {
    type: "lines",
    linesClass: "split-child"
  });
  const parentSplit = new SplitText(revealTxt, {
    // type: "lines",
    linesClass: "split-parent"
  });
  
  gsap.from(childSplit.lines, {
    duration: 1.5,
    yPercent: 100,
    ease: "power4",
    stagger: 0.2
  });
  
  