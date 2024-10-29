document.addEventListener('DOMContentLoaded', () => {
    const chatPopup = document.getElementById('chat-popup');
    const chatButton = document.getElementById('chat-button');
    const closeButton = document.getElementById('close-chat-popup');
    const adminPhoneNumber = '+33758146261'; 

    // Affiche le pop-up avec effet après 3 secondes
    setTimeout(() => {
      chatPopup.classList.add('show');
    }, 6000);
  
    // Masque le pop-up après 10 secondes avec effet de disparition
    setTimeout(() => {
      chatPopup.classList.remove('show');
      chatPopup.classList.add('hide');
    }, 20000);
  
    // Redirige vers WhatsApp au clic sur "Discuter avec un administrateur"
    chatButton.addEventListener('click', () => {
      const message = "Bonjour, je souhaite obtenir plus d'informations.";
      const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  
    // Ferme le pop-up au clic sur le bouton "X" avec effet de disparition
    closeButton.addEventListener('click', () => {
      chatPopup.classList.remove('show');
      chatPopup.classList.add('hide');
    });
  
    // Supprime complètement le pop-up une fois l'animation de disparition terminée
    chatPopup.addEventListener('transitionend', () => {
      if (chatPopup.classList.contains('hide')) {
        chatPopup.style.display = 'none';
      }
    });
  });
  