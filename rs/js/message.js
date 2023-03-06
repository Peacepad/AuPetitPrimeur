

function displayMessage () {
    fetch("https://remote.au-petit-primeur.fr:44301/api_pp/Message")
  .then(response => response.text())
  .then(data => {
    const message =document.querySelector('#message');

    console.log(data)
    message.textContent = data
  })
  .catch(error => console.error(error));
}

displayMessage()