
  var module_78664458578 = (function () {

    
    const uspItems = document.querySelectorAll(".usps__item"),
        wrapper = document.querySelector(".usps__list"),
        prev = document.querySelector(".usps__arrow--prev"),
        next = document.querySelector(".usps__arrow--next");

      uspItems.forEach(function (usp, index) {
        usp.addEventListener("click", function (event) {
          console.log(index), console.log(usp);
        });
      }),

        prev.addEventListener("click", function (event) {
          const total = wrapper.getAttribute("data-total"),
            current = wrapper.getAttribute("data-current-stage");
          1 == current
            ? (console.log("Go to: " + total),
              wrapper.setAttribute("data-current-stage", total),
              wrapper.style.setProperty("--current", total))
            : (console.log("Go to: " + (parseInt(current) - 1)),
              wrapper.setAttribute("data-current-stage", parseInt(current) - 1),
              wrapper.style.setProperty("--current", parseInt(current) - 1));
        }),
        next.addEventListener("click", function (event) {
          const total = wrapper.getAttribute("data-total"),
            current = wrapper.getAttribute("data-current-stage");
          current < total
            ? (console.log("Go to: " + (parseInt(current) + 1)),
              wrapper.setAttribute("data-current-stage", parseInt(current) + 1),
              wrapper.style.setProperty("--current", parseInt(current) + 1))
            : (console.log("Go to: 1"),
              wrapper.setAttribute("data-current-stage", "1"),
              wrapper.style.setProperty("--current", "1"));
        });
   
  })();

