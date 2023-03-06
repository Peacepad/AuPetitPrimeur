function displayMessage () {
    fetch("https://remote.au-petit-primeur.fr:44301/api_pp/Message")
  .then(response => response.text())
  .then(data => {
    const message =document.querySelector('#message');
    message.textContent = data.DailyMessage
  })
  .catch(error => console.error(error));
}

displayMessage()