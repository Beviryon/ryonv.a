// Récupérer l'ID du produit depuis les paramètres d'URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Trouver le produit correspondant dans la liste des produits
const product = products.find(p => p.id === parseInt(productId));

if (product) {
  // Récupérer l'élément product-info où afficher les informations du produit
  const productInfo = document.getElementById('product-info');

  // Ajouter le nom du produit
  const name = document.createElement('h2');
  name.textContent = product.name;
  productInfo.appendChild(name);

  // Ajouter la description du produit
  const description = document.createElement('p');
  description.textContent = product.description;
  productInfo.appendChild(description);

  // Ajouter le prix du produit
  const price = document.createElement('p');
  price.textContent = `Prix : ${product.price} FCFA`;
  productInfo.appendChild(price);

  // === Gestion du carrousel d'images ===
  const carouselInner = document.querySelector('.carousel-inner');
  let currentIndex = 0;

  // Ajouter les images du produit dans le carrousel
  product.images.forEach((imageUrl, index) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = product.name;
    carouselInner.appendChild(img);
  });

  const totalImages = product.images.length;

  // Fonction pour afficher l'image courante
  function showImage(index) {
    const offset = -index * 100; // Calculer l'offset en fonction de l'index
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  // Gestion des boutons du carrousel
  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    showImage(currentIndex);
  });

  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
  });

  // Afficher la première image par défaut
  showImage(currentIndex);

  // === Gestion du bouton "Discuter avec le vendeur" ===
  const contactBtn = document.getElementById('contact-seller-btn');
  contactBtn.addEventListener('click', () => {
    const phoneNumber = product.vendorPhone.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank'); // Ouvrir la discussion WhatsApp dans un nouvel onglet
  });
}

// === Gestion du menu burger pour la navigation mobile ===
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

navSlide(); // Appel de la fonction navSlide pour activer la fonctionnalité du menu

// === Gestion du pop-up d'affichage (si besoin) ===
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closePopup = document.querySelector('.close-popup');

  // Afficher le pop-up au chargement de la page
  function showPopup() {
    popup.style.display = 'block';
  }

  // Fermer le pop-up
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Afficher le pop-up après un délai de 1 seconde
  setTimeout(showPopup, 1000);
});

// === Enregistrement du Service Worker pour les notifications et autres fonctionnalités PWA ===
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    location.reload();
  }, 200000); 
});
