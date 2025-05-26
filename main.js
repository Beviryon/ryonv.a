// Gestion de la navigation mobile
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const body = document.body;

  // Fonction pour fermer le menu
  const closeMenu = () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
    body.style.overflow = 'auto';
  };

  // Fonction pour ouvrir le menu
  const openMenu = () => {
    nav.classList.add('active');
    burger.classList.add('active');
    body.style.overflow = 'hidden'; // Empêche le défilement de la page
  };

  // Gestion du clic sur le burger
  if (burger) {
    burger.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Fermer le menu au clic sur un lien
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Fermer le menu au clic en dehors
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
      closeMenu();
    }
  });

  // Fermer le menu avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
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
  
  // Vérifier si les éléments existent avant de les utiliser
  if (overlay && popup && closeBtn) {
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
  }

  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  if (menuToggle && closeMenu && mobileMenu && mobileMenuOverlay) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenu.classList.add('active');
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    function closeMenuFunc() {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeMenu.addEventListener('click', closeMenuFunc);
    mobileMenuOverlay.addEventListener('click', function(e) {
      if (e.target === mobileMenuOverlay) closeMenuFunc();
    });
  }

  // Assistance popup
  const assistancePopup = document.getElementById('assistance-popup');
  const openAssistanceBtn = document.getElementById('open-assistance');
  const closeAssistanceBtn = document.getElementById('close-assistance');

  if (assistancePopup && openAssistanceBtn && closeAssistanceBtn) {
    assistancePopup.setAttribute('hidden', '');

    openAssistanceBtn.addEventListener('click', function() {
      assistancePopup.removeAttribute('hidden');
      openAssistanceBtn.style.display = 'none';
    });

    closeAssistanceBtn.addEventListener('click', function() {
      assistancePopup.setAttribute('hidden', '');
      openAssistanceBtn.style.display = 'flex';
    });
  }
});

// Gestion du loader
window.onload = function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  
  if (loader) {
    loader.style.display = 'none';
  }
  if (content) {
    content.style.display = 'block';
  }
};
