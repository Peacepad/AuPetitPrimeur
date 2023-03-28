const formLogin = document.querySelector('.login');
const formRegister = document.querySelector('.register');
const buttonContact = document.querySelector('#contact-button');
const formHeading = document.querySelector('#connection__heading');

let toogleForm = true;

buttonContact.addEventListener('click', () => {
    if(toogleForm === true) {
        formLogin.style.transform ="translateX(-100%)";
        formRegister.style.transform ="translateX(-100%)";
        buttonContact.innerHTML="Se connecter <span></span><span></span><span></span><span></span>";

        formHeading.textContent="Vous êtes un professionnel et vous avez déjà un accès ?";
        toogleForm = !toogleForm;
    } else {
        formLogin.style.transform ="translateX(00%)";
        formRegister.style.transform ="translateX(00%)";
        buttonContact.innerHTML="Nous contacter <span></span><span></span><span></span><span></span>";

        formHeading.textContent="Vous êtes un professionnel et vous avez besoin d'un accès ?";
        toogleForm = !toogleForm;
    }
    })