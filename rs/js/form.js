// Effet de transform

const connectionButton = document.querySelector("#connection-button");

connectionButton.textContent = "Nous contacter";

const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");

connectionButton.addEventListener("click", () => {
  if (connectionButton.classList.contains("register-button")) {
    loginForm.classList.add("inactive-l");
    registerForm.classList.add("active-r");

    loginForm.classList.remove("active-l");
    registerForm.classList.remove("inactive-r");

    connectionButton.classList.add("login-button");
    connectionButton.classList.remove("register-button");

    // connectionButton text

    connectionButton.textContent = "Se connecter";
  } else {
    loginForm.classList.add("active-l");
    registerForm.classList.add("inactive-r");

    loginForm.classList.remove("inactive-l");
    registerForm.classList.remove("active-r");

    connectionButton.classList.add("register-button");
    connectionButton.classList.remove("login-button");

    connectionButton.textContent = "Nous contacter";
  }
});

// Effet des labels

const labelsLogin = loginForm.querySelectorAll(".transform-label");
const inputsLogin = loginForm.querySelectorAll("input");

inputsLogin.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      // S'il n'est pas vide
      labelsLogin[index].style.transform = "translateY(-200%)";
      labelsLogin[index].style.visibility = "visible";
      labelsLogin[index].style.opacity = "1";
    } else {
      labelsLogin[index].style.transform = "translateY(-50%)";
      labelsLogin[index].style.visibility = "hidden";
      labelsLogin[index].style.opacity = "0";
    }
  });
});

// verification au début si autocomplete
inputsLogin.forEach((input, index) => {
    if(index <=1) {
        if (input.value !== "") {
            // S'il n'est pas vide
            labelsLogin[index].style.transform = "translateY(-200%)";
            labelsLogin[index].style.visibility = "visible";
            labelsLogin[index].style.opacity = "1";
          } else {
            labelsLogin[index].style.transform = "translateY(-50%)";
            labelsLogin[index].style.visibility = "hidden";
            labelsLogin[index].style.opacity = "0";
          }
    }

});
