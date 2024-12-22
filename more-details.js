import { products } from './products.js';  // Importer les données depuis products.js

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

  // Ajouter le stock du produit
  const stock = document.createElement('p');
  stock.textContent = `Quantité en stock : ${product.stock}`;
  productInfo.appendChild(stock);

  // Ajouter les informations spécifiques du produit sous forme de tableau en bas de la page
  const detailsTable = document.createElement('table');
  detailsTable.classList.add('details-table');

  // Créer l'en-tête du tableau
  const tableHeader = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerAttribute = document.createElement('th');
  headerAttribute.textContent = 'Détail';
  const headerValue = document.createElement('th');
  headerValue.textContent = 'Valeur';
  headerRow.appendChild(headerAttribute);
  headerRow.appendChild(headerValue);
  tableHeader.appendChild(headerRow);
  detailsTable.appendChild(tableHeader);

  // Créer le corps du tableau
  const tableBody = document.createElement('tbody');

  // Ajouter les détails du produit
  const productDetails = [
    { label: 'Nom', value: product.name },
    { label: 'Description', value: product.description },
    { label: 'Prix', value: `${product.price} FCFA` },
    { label: 'Catégorie', value: product.category },
    { label: 'Like', value: product.like },
    { label: 'Vendeur', value: product.seller.name },
    { label: 'Téléphone du vendeur', value: product.seller.phone },
    { label: 'Pays du vendeur', value: product.seller.country },
    { label: 'Note du vendeur', value: product.seller.rating },
    { label: 'Téléphone du vendeur', value: product.vendorPhone },
    { label: 'Promotion', value: `${product.promotion.discount}% jusqu'au ${new Date(product.promotion.endDate).toLocaleDateString()}` },
    { label: 'Stock', value: product.stock },
    { label: 'Note du produit', value: product.rating },
  ];

  productDetails.forEach(detail => {
    const row = document.createElement('tr');
    const attributeCell = document.createElement('td');
    attributeCell.textContent = detail.label;
    const valueCell = document.createElement('td');
    valueCell.textContent = detail.value;
    row.appendChild(attributeCell);
    row.appendChild(valueCell);
    tableBody.appendChild(row);
  });

  detailsTable.appendChild(tableBody);

  // Ajouter le tableau à la page
  productInfo.appendChild(detailsTable);

  // === Affichage des informations du vendeur ===
  const sellerInfo = document.createElement('div');
  sellerInfo.classList.add('seller-info');

  productInfo.appendChild(sellerInfo);

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
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    updateCounter(index, totalImages);
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
    *Quantité disponible :* ${product.stock || 'N/A'}
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

function renderSuggestionsCarousel(products) {
  const track = document.querySelector('.carousel-track');

  // Ajouter les produits au carrousel
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.images[0];
    img.alt = product.name;
    img.title = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `${product.price} FCFA`;

    const icon = document.createElement('span');
    icon.classList.add('icon');

    // Insérer un SVG pour l'icône de panier
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    `;

    // Ajouter les éléments dans la carte produit
    productCard.appendChild(img);
    productCard.appendChild(name);
    productCard.appendChild(price);
    productCard.appendChild(icon);

    // Ajouter la carte produit au carrousel
    track.appendChild(productCard);

    // Ajouter un clic pour rediriger vers la page de détails
    img.addEventListener('click', () => {
      window.location.href = `details.html?id=${product.id}`;
    });

    // Ajouter l'événement de clic sur l'icône "ajouter au panier"
    icon.addEventListener('click', () => {
      alert(`Produit ajouté au panier : ${product.name}`);
    });
  });

  let currentIndex = 0;
  const totalItems = products.length;
  const visibleWidth = track.parentNode.offsetWidth;
  const itemWidth = track.firstElementChild.offsetWidth + 20; // Largeur de l'élément + marge
  const itemsPerView = Math.floor(visibleWidth / itemWidth);

  // Fonction pour mettre à jour la position du carrousel
  function updateCarouselPosition() {
    const offset = -(itemWidth * currentIndex);
    track.style.transform = `translateX(${offset}px)`;
  }

  // Gestion des boutons de défilement
  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarouselPosition();
  });

  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarouselPosition();
  });

  // Fonction pour permettre de faire défiler avec le doigt (touch events)
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX; // Enregistrer la position de départ du toucher
  });

  track.addEventListener('touchmove', (e) => {
    const touchEndX = e.touches[0].clientX; // Enregistrer la position du toucher actuel
    const moveX = touchStartX - touchEndX;

    // Si l'utilisateur fait glisser vers la gauche ou la droite
    if (Math.abs(moveX) > 50) {
      if (moveX > 0) {
        currentIndex = (currentIndex + 1) % totalItems;
      } else {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      }
      updateCarouselPosition();
      touchStartX = touchEndX; // Réinitialiser la position de départ
    }
  });

  // Défilement automatique toutes les 5 secondes
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarouselPosition();
  }, 5000); // 5 secondes

  // Rotation immédiate après 5 secondes (cela pourrait être redondant avec setInterval, mais laissé ici pour rotation immédiate)
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarouselPosition();
  }, 5000); // Change les images après 5 secondes
}

// Appeler la fonction avec vos données de produits
renderSuggestionsCarousel(products);
