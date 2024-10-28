import { products } from "./products.js";
console.log(products)


// 
// 
// 

// Fonction pour ouvrir/fermer le panier
function toggleCart() {
  const cartPopup = document.querySelector('.cart-popup');
  if (cartPopup) {
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
  }
}

// Fonction pour afficher les produits dans le panier
function showCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.querySelector('#cart-items');

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = ''; // Vider les éléments existants avant d'ajouter les nouveaux

    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${item.images[0]}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <p>${item.name}</p>
          <p>Prix : ${item.price} Fcfa</p>
          <p>Quantité : ${item.quantity}</p>
          <button class="remove-item" data-id="${item.id}">Supprimer</button>
          <button class="order-item" data-id="${item.id}" data-vendor="${item.vendorPhone}">Commander</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    // Ajouter des écouteurs pour les boutons "Supprimer"
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'), 10);
        removeFromCart(productId);
      });
    });

    // Ajouter des écouteurs pour les boutons "Commander"
    document.querySelectorAll('.order-item').forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'), 10);
        const vendorPhone = button.getAttribute('data-vendor');
        const product = cart.find(item => item.id === productId);

        if (product) {
          const message = `Bonjour, je souhaite commander :\n` +
                          `Produit : ${product.name}\n` +
                          `Prix : ${product.price} FCFA\n` +
                          `Quantité : ${product.quantity}\n` +
                          `Lien : https://ryone.netlify.app/details.html?id=${product.id}\n`;

          const whatsappUrl = `https://wa.me/${vendorPhone}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }
      });
    });
  }
}

// Supprimer un produit du panier
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  showCartItems(); 
  updateCartCounter();
}

// Gestion de l'affichage du panier lors du clic sur l'icône
document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.querySelector('.cart-icon-container');
  const closeCartBtn = document.querySelector('.close-cart-btn');
  const checkoutBtn = document.querySelector('#checkout-btn');

  if (cartIcon) {
    cartIcon.addEventListener('click', () => {
      toggleCart();
      showCartItems();
    });
  }

  // Gestion du bouton X pour fermer la pop-up
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      document.querySelector('.cart-popup').style.display = 'none';
    });
  }

  // Gestion du bouton "Commander"
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length === 0) {
        alert('Votre panier est vide. Veuillez ajouter des produits avant de commander.');
        return;
      }

      // Collecter les informations de commande pour WhatsApp
      const nameInput = document.querySelector('#name');
      const cityInput = document.querySelector('#city');
      const countrySelect = document.querySelector('#country');

      if (validateForm()) {
        const name = nameInput.value;
        const city = cityInput.value;
        const country = countrySelect.options[countrySelect.selectedIndex].text;

        let message = `Bonjour, je m'appelle ${name}.\nJ'habite à ${city}, ${country}.\n\n` +
                      `Je souhaite commander les produits suivants :\n`;

        cart.forEach(item => {
          message += `- Produit : ${item.name}\n` +
                     `- Description : ${item.description}\n` +
                     `- Prix : ${item.price} FCFA\n` +
                     `- Quantité : ${item.quantity}\n` +
                     `- Lien : https://ryone.netlify.app/details.html?id=${item.id}\n`;

          if (item.images && item.images.length > 0) {
            message += `- Images :\n`;
            item.images.forEach((image, index) => {
              message += `   ${index + 1}. ${image}\n`;
            });
          }
          message += '\n';
        });

        const vendorPhone = cart[0].vendorPhone; 
        const whatsappUrl = `https://wa.me/${vendorPhone}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Vider le panier après la commande
        localStorage.removeItem('cart');
        showCartItems(); 
        updateCartCounter(); 
        document.querySelector('.cart-popup').style.display = 'none'; 
      }
    });
  }

  updateCartCounter();
});

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id === product.id);

  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  showAlert('Produit ajouté au panier !');
  updateCartCounter(); 
  showCartItems();
}

// Mettre à jour le compteur d'articles dans l'icône du panier
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.querySelector('.cart-counter');
  
  if (cartCounter) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCounter.textContent = totalItems;
  }
}

// Validation du formulaire avant commande
// function validateForm() {
//   const nameInput = document.querySelector('#name');
//   const cityInput = document.querySelector('#city');
//   const countrySelect = document.querySelector('#country');

//   if (!nameInput.value || !cityInput.value || countrySelect.selectedIndex === 0) {
//     alert('Veuillez remplir tous les champs du formulaire.');
//     return false;
//   }
//   return true;
// }

function showAlert(message) {
  const alertBox = document.createElement('div');
  alertBox.textContent = message;
  alertBox.classList.add('alert');
  document.body.appendChild(alertBox);
  
  // Supprimez l'alerte après 3 secondes
  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}

// 
// 
// 
// 

document.addEventListener('DOMContentLoaded', function() {
  const carouselInner = document.querySelector('.featured-carousel-inner');
  const items = document.querySelectorAll('.featured-item');
  const totalItems = items.length;
  let currentIndex = 0;
  
  // Dupliquer les éléments pour simuler un défilement infini
  items.forEach(item => {
      const clone = item.cloneNode(true);
      carouselInner.appendChild(clone);
  });

  const itemWidth = items[0].offsetWidth + 20; 

  function scrollCarousel() {
      currentIndex++;
      carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

      // Réinitialiser la position pour simuler le défilement infini
      if (currentIndex >= totalItems) {
          setTimeout(() => {
              carouselInner.style.transition = 'none'; 
              carouselInner.style.transform = 'translateX(0)';
              currentIndex = 0;
              setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease';
            }, 50);
        }, 500);
         
      }
  }

  setInterval(scrollCarousel, 3000); 
});


// affichage et mise à jours promotion
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.images[0];
  image.alt = product.name;
  card.appendChild(image);

  // Ajout du clic sur l'image pour rediriger vers la page du produit
  image.addEventListener('click', () => {
    window.location.href = `details.html?id=${product.id}`;
  });

  card.appendChild(image);

  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);

  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);

  const price = document.createElement('p');
  price.textContent = `Prix : ${product.price} Fcfa`;
  card.appendChild(price);

  const button = document.createElement('a');
  button.classList.add('btn-voir-produit');
  button.textContent = 'Voir le produit';
  button.addEventListener('click', () => showProductModal(product));
  card.appendChild(button);

  const whatsappBtn = document.createElement('a');
  whatsappBtn.classList.add('btn', 'whatsapp-btn');
  whatsappBtn.textContent = 'Commander';
  whatsappBtn.addEventListener('click', () => openOrderForm(product));
  card.appendChild(whatsappBtn);

  const detailsBtn = document.createElement('a');
  detailsBtn.classList.add('btn-detail');
  detailsBtn.textContent = 'Détails du produit';
  detailsBtn.href = `details.html?id=${product.id}`;
  card.appendChild(detailsBtn);

 // Bouton Ajouter au panier
  const addToCartBtn = document.createElement('button');
  addToCartBtn.classList.add('btn-panier', 'add-to-cart-btn');
  addToCartBtn.textContent = 'Ajouter au panier';
  addToCartBtn.addEventListener('click', () => {
    addToCart(product);
  });
  card.appendChild(addToCartBtn);

  // Ajout du pop-up de promotion
  if (product.promotion && isPromotionValid(product.promotion)) {
    const promoPopup = document.createElement('div');
    promoPopup.classList.add('promo-popup');
    promoPopup.innerHTML = `
      <p>Promotion ${product.promotion.discount}% !</p>
      <p class="promo-timer" data-end="${product.promotion.endDate}"></p>
    `;
    card.appendChild(promoPopup);
    updatePromoTimer(promoPopup.querySelector('.promo-timer'), card);
  }

  // Ajout du pop-up de stock
  const stockStatus = document.createElement('div');
  stockStatus.classList.add('stock-status');

  if (product.stock > 10) {
    stockStatus.textContent = 'En stock';
    stockStatus.classList.add('in-stock');
  } else if (product.stock > 0) {
    stockStatus.textContent = 'Stock limité';
    stockStatus.classList.add('low-stock');
  } else {
    stockStatus.textContent = 'Rupture de stock';
    stockStatus.classList.add('out-of-stock');
  }

  card.appendChild(stockStatus);

  return card;
}

function updatePromoTimer(timerElement, cardElement) {
  const endDate = new Date(timerElement.dataset.end);
  
  function updateTimer() {
    const now = new Date();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      timerElement.textContent = `Fin dans : ${days}j ${hours}h ${minutes}m ${seconds}s`;
    } else {
      // Supprime le pop-up de promotion lorsque la promotion est terminée
      const promoPopup = cardElement.querySelector('.promo-popup');
      if (promoPopup) {
        promoPopup.remove();
      }
      clearInterval(timerInterval);
    }
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

// fn pour vérifier si la promotion est toujours valide
function isPromotionValid(promotion) {
  const now = new Date();
  const endDate = new Date(promotion.endDate);
  return now < endDate;
}

function openOrderForm(product) {
  // Créer le modal
  const modal = document.createElement('div');
  modal.id = 'user-info-modal';
  modal.classList.add('modal');

  // Créer le contenu du modal
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Bouton de fermeture du modal
  const closeModalSpan = document.createElement('span');
  closeModalSpan.classList.add('close');
  closeModalSpan.textContent = '×';
  closeModalSpan.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset(); 
  });

  // Formulaire à l'intérieur du modal
  const form = document.createElement('form');
  form.id = 'user-info-form';

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Nom :';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.required = true;
  nameLabel.appendChild(nameInput);

  const cityLabel = document.createElement('label');
  cityLabel.setAttribute('for', 'city');
  cityLabel.textContent = 'Ville :';
  const cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.id = 'city';
  cityInput.name = 'city';
  cityInput.required = true;
  cityLabel.appendChild(cityInput);

  const countryLabel = document.createElement('label');
  countryLabel.setAttribute('for', 'country');
  countryLabel.textContent = 'Pays :';
  const countrySelect = document.createElement('select');
  countrySelect.id = 'country';
  countrySelect.name = 'country';
  countrySelect.required = true;

  const countries = [
    { code: 'DZ', name: 'Algérie' },
    { code: 'AO', name: 'Angola' },
    { code: 'BJ', name: 'Bénin' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'CM', name: 'Cameroun' },
    { code: 'CV', name: 'Cap-Vert' },
    { code: 'CF', name: 'République centrafricaine' },
    { code: 'TD', name: 'Tchad' },
    { code: 'KM', name: 'Comores' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'République Démocratique du Congo' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'EG', name: 'Égypte' },
    { code: 'GQ', name: 'Guinée équatoriale' },
    { code: 'ER', name: 'Érythrée' },
    { code: 'ET', name: 'Éthiopie' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambie' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GN', name: 'Guinée' },
    { code: 'GW', name: 'Guinée-Bissau' },
    { code: 'CI', name: "Côte d'Ivoire" },
    { code: 'KE', name: 'Kenya' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Libéria' },
    { code: 'LY', name: 'Libye' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'ML', name: 'Mali' },
    { code: 'MR', name: 'Mauritanie' },
    { code: 'MU', name: 'Maurice' },
    { code: 'MA', name: 'Maroc' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'NA', name: 'Namibie' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigéria' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'ST', name: 'Sao Tomé-et-Principe' },
    { code: 'SN', name: 'Sénégal' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SO', name: 'Somalie' },
    { code: 'ZA', name: 'Afrique du Sud' },
    { code: 'SS', name: 'Soudan du Sud' },
    { code: 'SD', name: 'Soudan' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'TZ', name: 'Tanzanie' },
    { code: 'TG', name: 'Togo' },
    { code: 'TN', name: 'Tunisie' },
    { code: 'UG', name: 'Ouganda' },
    { code: 'ZM', name: 'Zambie' },
    { code: 'ZW', name: 'Zimbabwe' }
  ];


  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Discuter avec le vendeur';

  form.appendChild(nameLabel);
  form.appendChild(cityLabel);
  form.appendChild(countryLabel);
  form.appendChild(countrySelect);
  form.appendChild(submitButton);

  modalContent.appendChild(closeModalSpan);
  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Afficher le modal
  modal.style.display = 'block';

  // Ajouter un événement de soumission au formulaire
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        const name = nameInput.value;
        const city = cityInput.value;
        const country = countrySelect.options[countrySelect.selectedIndex].text;

        // Récupérer le numéro de téléphone du vendeur et vérifier qu'il est valide
        const vendorPhone = product.vendorPhone ? product.vendorPhone.replace(/^\+/, '') : null;
        if (!vendorPhone) {
          alert("Numéro de téléphone du vendeur indisponible pour ce produit.");
          return;
        }

        // Construire le message WhatsApp
        const productLink = `https://ryone.netlify.app/details.html?id=${product.id}`;
        let message = `Bonjour, je m'appelle ${name}.\nJ'habite à ${city}, ${country}.\n\n` +
                      `Je souhaite commander le produit :\n` +
                      `- Nom : ${product.name}\n` +
                      `- Description : ${product.description}\n` +
                      `- Prix : ${product.price} FCFA\n` +
                      `- Lien : ${productLink}\n`;

        // Ajouter les images au message
        if (product.images && product.images.length > 0) {
            message += `- Images :\n`;
            product.images.forEach((image, index) => {
                message += `   ${index + 1}. ${image}\n`;
            });
        }

        // Encodage de l'URL de WhatsApp
        const whatsappUrl = `https://wa.me/${vendorPhone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        modal.style.display = 'none';
        form.reset();
    } else {
        alert('Veuillez remplir correctement tous les champs.');
    }
  });

  // Validation du formulaire
  function validateForm() {
    const nameValid = /^[a-zA-Z\s,;_\-'\u00C0-\u017F]+$/.test(nameInput.value);
    const cityValid = /^[a-zA-Z\s,;_\-'\u00C0-\u017F]+$/.test(cityInput.value);
    const countryValid = countrySelect.value !== '';
  
    return nameValid && cityValid && countryValid;
  }
}


// Variables pour la pagination //////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  // Vérifiez que `products` contient bien les articles
  if (!products || products.length === 0) {
      console.error("La variable 'products' est vide ou non définie.");
      return;
  }
  
  // Variables pour la pagination
  let currentPage = 1;
  const productsPerPage = 10;
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const pageInfo = document.getElementById('page-info');
  
  // Fonction pour afficher les produits avec pagination
  function displayProducts(products) {
      const productList = document.querySelector('.product-list');
      productList.innerHTML = ''; 

      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = products.slice(startIndex, endIndex); 

      // Vérification si des produits sont disponibles
      if (paginatedProducts.length === 0) {
          const noProductsMessage = document.createElement('p');
          noProductsMessage.textContent = 'Pas de produits pour ce pays ou ce vendeur.';
          productList.appendChild(noProductsMessage);
          return;
      }

      // Ajouter chaque produit
      paginatedProducts.forEach(product => {
          const card = createProductCard(product); 
          if (card) productList.appendChild(card);
      });

      updatePaginationInfo(products.length);
  }

  // Fonction pour mettre à jour les informations de pagination
  function updatePaginationInfo(totalProducts) {
      const totalPages = Math.ceil(totalProducts / productsPerPage);
      pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;

      // Désactiver les boutons si nécessaire
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
  }

  // Fonction pour passer à la page suivante
  function nextPage() {
      const totalPages = Math.ceil(products.length / productsPerPage);
      if (currentPage < totalPages) {
          currentPage++;
          displayProducts(products); 
      }
  }

  // Fonction pour revenir à la page précédente
  function prevPage() {
      if (currentPage > 1) {
          currentPage--;
          displayProducts(products); 
      }
  }

  // Gestion des événements pour les boutons de pagination
  prevBtn.addEventListener('click', prevPage);
  nextBtn.addEventListener('click', nextPage);

  // Appel initial de la fonction pour afficher les produits
  displayProducts(products);
});
///


// Événement pour le bouton "Suivant" 
nextBtn.addEventListener('click', () => {
const totalProducts = products.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

if (currentPage < totalPages) {
currentPage++;
displayProducts(products);
}
});

// Fonction pour filtrer les produits par catégorie
function filterProductsByCategory(category) {
  // Retirer la classe active des anciennes catégories (plus nécessaire avec un <select>)
  const categorySelect = document.getElementById('category-select');

  // Vérifie si la catégorie sélectionnée est 'all'
  if (category === 'all') {
      // Affiche tous les produits si 'all' est sélectionné
      displayProducts(products);
  } else {
      // Filtre les produits en fonction de la catégorie sélectionnée
      const filteredProducts = products.filter(product => product.category === category);
      displayProducts(filteredProducts);
  }
}

// Événement pour détecter le changement dans le <select>
document.getElementById('category-select').addEventListener('change', function() {
  const selectedCategory = this.value; 
  filterProductsByCategory(selectedCategory); 
});

// Fonction pour filtrer les produits par catégorie, pays ou vendeur
function filterProducts() {
  const selectedCategory = document.getElementById('category-select').value;
  const selectedCountry = document.getElementById('seller-country').value;
  const selectedSeller = document.getElementById('seller-name').value;

  let filteredProducts = products;

  // Filtrage par catégorie
  if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }

  // Filtrage par pays du vendeur
  if (selectedCountry !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
          product.seller && product.seller.country === selectedCountry // Vérifie que seller existe avant d'accéder à country
      );
  }

  // Filtrage par nom du vendeur
  if (selectedSeller !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
          product.seller && product.seller.name === selectedSeller // Vérifie que seller existe avant d'accéder à name
      );
  }

  displayProducts(filteredProducts);
}

// Événements pour détecter les changements de filtre
document.getElementById('category-select').addEventListener('change', filterProducts);
document.getElementById('seller-country').addEventListener('change', filterProducts);
document.getElementById('seller-name').addEventListener('change', filterProducts);

// Fonction pour trier les produits
function sortProducts() {
const sortSelect = document.getElementById('sort');
const sortOption = sortSelect.value;

let sortedProducts = [...products];

if (sortOption === 'price-asc') {
sortedProducts.sort((a, b) => a.price - b.price);
} else if (sortOption === 'price-desc') {
sortedProducts.sort((a, b) => b.price - a.price);
}

displayProducts(sortedProducts);
}

// Fonction pour afficher la modal de la galerie d'images
function showProductModal(product) {
const modal = document.getElementById('product-modal');
const modalContent = modal.querySelector('.modal-content');
const productGallery = modalContent.querySelector('.product-gallery');

productGallery.innerHTML = '';

product.images.forEach(imageUrl => {
const img = document.createElement('img');
img.src = imageUrl;
img.alt = product.name;
productGallery.appendChild(img);
});

modal.style.display = 'block';

const closeModal = () => {
modal.style.display = 'none';
};

const closeBtn = modalContent.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', event => {
if (event.target === modal) {
closeModal();
}
});
}

document.querySelectorAll('.category-list a').forEach(link => {
link.addEventListener('click', event => {
event.preventDefault();
const category = event.target.dataset.category;
filterProductsByCategory(category);
});
});

// document.getElementById('filter').addEventListener('input', filterProducts);
document.getElementById('sort').addEventListener('change', sortProducts);

// Afficher tous les produits au chargement initial
displayProducts(products);

const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
nav.classList.toggle('nav-active');
burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('nav-active');
burger.classList.remove('toggle');
});
});


const searchInput = document.getElementById('search-input');
const productList = document.querySelector('.product-list');

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const cards = productList.getElementsByClassName('product-card');

  for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  const productName = card.querySelector('h3').textContent.toLowerCase();

  if (productName.includes(searchTerm)) {
  card.style.display = 'block';
  } else {
  card.style.display = 'none';
    }
  }
}
searchInput.addEventListener('input', filterProducts);

};


navSlide();