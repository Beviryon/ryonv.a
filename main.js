// Gestion de la navigation mobile
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

// Gestion du curseur personnalisé
const handleCursor = () => {
  const cursor = document.querySelector('.cursor');
  
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      const targetElement = e.target;
      
      if (targetElement.tagName.toLowerCase() === 'img') {
        cursor.style.display = 'block';
        // Utiliser transform pour une meilleure performance
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      } else {
        cursor.style.display = 'none';
      }
    });
  }
};

// Gestion de la navigation mobile
const handleMobileNavigation = () => {
  const navIcons = document.querySelectorAll('.mobile-navbar .nav-icon');

  navIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
      event.preventDefault();
      const href = icon.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
  });
};

// Gestion des redirections vers les pages de détails
const handleProductRedirection = () => {
  const productCards = document.querySelectorAll('.product-card a');

  productCards.forEach(card => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const href = card.getAttribute('href');
      if (href) {
        const productId = href.split('=')[1];
        if (productId) {
          window.location.href = `details.html?id=${productId}`;
        }
      }
    });
  });
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  navSlide();
  handleCursor();
  handleMobileNavigation();
  handleProductRedirection();

  // Gestion du popup promotionnel
  const overlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('promoPopup');
  const closeBtn = document.querySelector('.close-btn');
  
  // Afficher le popup après 3 secondes
  setTimeout(() => {
    overlay.style.display = 'flex';
    popup.style.display = 'block';
  }, 3000);

  // Fermer le popup au clic sur le bouton de fermeture ou l'overlay
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closePopup();
    }
  });

  function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  }

  // Fermer automatiquement après 10 secondes
  setTimeout(closePopup, 13000);
});

window.onload = function() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
};
