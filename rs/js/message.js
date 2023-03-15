async function getDailyMessage() {
  try {
    const response = await fetch("https://remote.au-petit-primeur.fr:44301/api_pp/Message");
    const data = await response.json();
    const dailyMessage = data.DailyMessage;
    const dailyMessageElement = document.getElementById('daily-message');
    dailyMessageElement.innerText = dailyMessage;
  } catch (error) {
    console.error('Erreur lors de la récupération du message:', error);
  }
}

getDailyMessage();

