const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};

navSlide();

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach(link => link.style.animation = '');
      });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach(link => link.style.animation = '');
      }
    });
  }

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

// Animation des cartes au scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', animateOnScroll);


