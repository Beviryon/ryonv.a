// Fonction pour gérer les boutons de défilement haut/bas
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const scrollBottomBtn = document.getElementById('scroll-to-bottom');
    
    // Fonction pour remonter en haut de la page avec animation
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Fonction pour descendre en bas de la page avec animation
    scrollBottomBtn.addEventListener('click', function() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
    
    // Afficher/masquer le bouton pour remonter quand on descend dans la page
    window.addEventListener('scroll', function() {
      // Si on est descendu d'au moins 300px
      if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
      } else {
        scrollTopBtn.style.display = 'none';
      }
      
      // Si on est proche du bas, masquer le bouton pour descendre
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 300) {
        scrollBottomBtn.style.display = 'none';
      } else {
        scrollBottomBtn.style.display = 'flex';
      }
    });
    
    // Déclencher l'événement de défilement pour initialiser l'état des boutons
    window.dispatchEvent(new Event('scroll'));
  });