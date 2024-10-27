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

  // Fonction pour mettre à jour le compteur d'images
  function updateCounter(currentIndex, totalImages) {
    const counter = document.getElementById('carousel-counter');
    counter.textContent = `Image ${currentIndex + 1} sur ${totalImages}`;
  }

  // Fonction pour afficher l'image courante
  function showImage(index) {
    const offset = -index * 100; // Calculer l'offset en fonction de l'index
    carouselInner.style.transform = `translateX(${offset}%)`;
    updateCounter(index, totalImages); // Mise à jour du compteur
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
    
    // Créer un message WhatsApp prédéfini avec les informations du produit
    const message = `Bonjour, je suis intéressé par votre produit : 
    *Nom :* ${product.name} 
    *Description :* ${product.description} 
    *Prix :* ${product.price} FCFA 
    *Quantité disponible :* ${product.quantity || 'N/A'} 
    Pouvez-vous me donner plus de détails ?`;

    // Créer le lien WhatsApp avec le message prédéfini
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Ouvrir la discussion WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
  });
}

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

