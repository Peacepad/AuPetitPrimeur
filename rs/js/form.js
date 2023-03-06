const emailLogin = document.querySelector('#email-login');
const labelEmailLogin = document.querySelector('#label-email-login');
const passwordLogin = document.querySelector('#password-login');
const labelPasswordLogin = document.querySelector('#label-password-login');

const labelsLogin = [labelEmailLogin,labelPasswordLogin];
const inputsLogin = [emailLogin, passwordLogin]

function verifyEmpty() {
    inputsLogin.forEach((input,index) => {
        if(input.value !== "") {
            labelsLogin.index.style.transform = "translateY(-100%)"
        }
    })
}

inputsLogin.forEach((input) => {
    input.addEventListener('input', (e) => {
        verifyEmpty()
        console.log("test")
    })
})