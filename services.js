document.addEventListener('DOMContentLoaded', () => {
  // Fonction pour le menu burger
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    if (burger && nav) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
      });
    }
  
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      });
    });
  };
  
  navSlide();

  // Gestion du pop-up
  const popup = document.getElementById('popup');
  const closePopup = document.querySelector('.close-popup');

  if (popup && closePopup) {
    // Afficher le pop-up au chargement de la page
    function showPopup() {
      popup.style.display = 'block';
    }

    // Fermer le pop-up
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Afficher le pop-up après un délai ou immédiatement
    setTimeout(showPopup, 1000); // Délai de 1 seconde
  }

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(error => {
      console.log('ServiceWorker registration failed: ', error);
    });
  }
});


