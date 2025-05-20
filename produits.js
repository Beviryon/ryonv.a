import { products } from "./products.js";
import "./produitBottomNav.js";
import { checkIfFavorite, toggleFavorite } from './favoris.js';

// Exposer les produits à l'objet global window pour le comparateur
window.products = products;

console.log(products);

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

function filterProductsByCategory(category) {
  const products = document.querySelectorAll('.product-card');
  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    if (productCategory === category || category === 'all') {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Récupérer les éléments du carrousel des produits tendances et des meilleures ventes
  const trendingCarousel = document.querySelector('.trending-carousel');
  const bestSellersCarousel = document.querySelector('.best-sellers-carousel');

  // Fonction pour créer un élément d'image de produit
  const createProductImage = (product) => {
    const img = document.createElement('img');
    img.src = product.images[0];
    img.alt = product.name;
    img.dataset.id = product.id; 
    img.addEventListener('click', () => {
      window.location.href = `details.html?id=${product.id}`;
    });
    return img;
  };

  // Ajouter les produits tendances dans le carrousel
  const trendingProducts = products.filter(product => product.isTrending).slice(0, 6); 
  trendingProducts.forEach(product => {
    const img = createProductImage(product);
    trendingCarousel.appendChild(img);
  });

  // Ajouter les meilleures ventes dans le carrousel
  const bestSellers = products.filter(product => product.isBestSeller).slice(0, 6);
  bestSellers.forEach(product => {
    const img = createProductImage(product);
    bestSellersCarousel.appendChild(img);
  });
});

function displaySimilarProducts(currentProduct) {
  const similarProductsContainer = document.querySelector('.similar-products-carousel');
  if (!similarProductsContainer) {
    console.error("Conteneur des produits similaires non trouvé !");
    return;
  }
  similarProductsContainer.innerHTML = '';

  const similarProducts = getSimilarProducts(currentProduct);
  console.log("Produits similaires:", similarProducts);

  similarProducts.forEach(product => {
      const productCard = createProductCard(product);
      similarProductsContainer.appendChild(productCard);
  });
}

function displayRecentlyViewedProducts() {
  const recentlyViewedContainer = document.querySelector('.recently-viewed-carousel');
  if (!recentlyViewedContainer) {
    console.error("Conteneur des produits récemment consultés non trouvé !");
    return;
  }
  recentlyViewedContainer.innerHTML = '';

  const recentlyViewed = getRecentlyViewedProducts();
  console.log("Produits récemment consultés:", recentlyViewed);

  recentlyViewed.forEach(product => {
      const productCard = createProductCard(product);
      recentlyViewedContainer.appendChild(productCard);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const currentProductId = getProductIdFromURL();
  console.log("ID du produit actuel:", currentProductId);
  const currentProduct = products.find(product => product.id === currentProductId);

  if (currentProduct) {
      console.log("Produit actuel trouvé :", currentProduct);
      displaySimilarProducts(currentProduct);
      addRecentlyViewedProduct(currentProduct);
      displayRecentlyViewedProducts();
  } else {
      console.error("Produit non trouvé avec l'ID:", currentProductId);
  }
});

function toggleCart() {
  window.location.href = 'cart.html';
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
          // Créer un numéro de référence unique
          const date = new Date();
          const formattedDate = date.toLocaleDateString('fr-FR');
          const reference = `RYONVA-${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
          
          // Créer le message du bon de commande
          let message = `*BON DE COMMANDE RYON.A*\n`;
          message += `------------------------------------------\n`;
          message += `*RÉFÉRENCE:* ${reference}\n`;
          message += `*DATE:* ${formattedDate}\n`;
          message += `------------------------------------------\n\n`;
          
          // Détails du produit
          message += `*ARTICLE:* ${product.name}\n`;
          message += `• Référence: ART-${reference.substring(reference.length-6)}\n`;
          message += `• Prix unitaire: *${product.price.toLocaleString()} FCFA*\n`;
          message += `• Quantité: *${product.quantity}*\n`;
          message += `• Sous-total: *${(product.price * product.quantity).toLocaleString()} FCFA*\n`;
          
          // Ajouter le lien de l'image si disponible
          if (product.images && product.images.length > 0) {
            message += `• Lien image: ${product.images[0]}\n`;
          }
          
          message += `------------------------------------------\n\n`;
          
          // Récapitulatif financier
          message += `*RÉCAPITULATIF DE LA COMMANDE*\n`;
          message += `------------------------------------------\n`;
          // message += `• Nombre d'articles: *${product.quantity}*\n`;
          message += `• Total: *${(product.price * product.quantity).toLocaleString()} FCFA*\n`;
          message += `------------------------------------------\n\n`;
          
          message += `Cordialement,\n`;
          message += `*Service Commandes RYONV*\n\n`;
          
          message += `_Document généré automatiquement via la plateforme RYONV.A_\n`;
          message += `_www.ryonv.com_`;
          
          // Fix the phone number to avoid duplicate country codes
          let phoneNumber = vendorPhone;
          if (typeof fixPhoneNumber === 'function') {
            phoneNumber = fixPhoneNumber(phoneNumber);
          }
          
          // Remove + for WhatsApp URL
          if (phoneNumber.startsWith('+')) {
            phoneNumber = phoneNumber.substring(1);
          }
          
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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

console.log("==== DÉBOGAGE DU PANIER ====");

// Créez une fonction spécifique pour les notifications de panier
function showCartNotification(message) {
  // Supprimer toute notification existante
  const existingNotification = document.querySelector('.favorite-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Créer l'élément de notification
  const notification = document.createElement('div');
  notification.className = 'favorite-notification cart-style'; // Ajouter une classe pour le style
  
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-shopping-cart"></i> <!-- Icône de panier au lieu de coeur -->
      <p>${message}</p>
      <div class="notification-buttons">
        <button class="view-favorites-btn">Voir mon panier</button> <!-- Texte modifié -->
        <button class="close-popup-btn">Continuer</button>
      </div>
    </div>
  `;

  // Ajouter au document
  document.body.appendChild(notification);

  // Gérer le bouton "Voir mon panier"
  const viewFavoritesBtn = notification.querySelector('.view-favorites-btn');
  viewFavoritesBtn.addEventListener('click', () => {
    window.location.href = 'cart.html'; // Redirection vers le panier
  });

  // Gérer le bouton de fermeture
  const closeBtn = notification.querySelector('.close-popup-btn');
  closeBtn.addEventListener('click', () => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.remove();
    }, 300);
  });

  // Auto-fermeture après 3 secondes
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.classList.add('fade-out');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }, 3000);
}

// Modifier la fonction addToCart pour utiliser cette notification spécifique
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id === product.id);

  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  // Utiliser la fonction spécifique pour les notifications de panier
  showCartNotification('Produit ajouté au panier !');
  updateCartCounter();
}

// Mettre à jour le compteur d'articles dans l'icône du panier
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.querySelector('.cart-counter');
  
  if (cartCounter) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCounter.textContent = totalItems;
    
    // S'assurer que le compteur est toujours visible, même à 0
    cartCounter.style.display = 'inline-block';
    
    // Optionnel: vous pouvez ajouter une classe spéciale quand le panier est vide
    if (totalItems === 0) {
      cartCounter.classList.add('empty-cart');
    } else {
      cartCounter.classList.remove('empty-cart');
    }
  }
}

function showAlert(message, isAdded = true) {
  // Supprimer toute notification existante
  const existingNotification = document.querySelector('.favorite-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Créer l'élément de notification
  const notification = document.createElement('div');
  notification.className = 'favorite-notification';
  
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-heart"></i>
      <p>${message}</p>
      <div class="notification-buttons">
        <button class="view-favorites-btn">Voir mes favoris</button>
        <button class="close-popup-btn">Continuer</button>
      </div>
    </div>
  `;

  // Ajouter au document
  document.body.appendChild(notification);

  // Gérer le bouton "Voir mes favoris"
  const viewFavoritesBtn = notification.querySelector('.view-favorites-btn');
  viewFavoritesBtn.addEventListener('click', () => {
    window.location.href = 'cart.html';
  });

  // Gérer le bouton de fermeture
  const closeBtn = notification.querySelector('.close-popup-btn');
  closeBtn.addEventListener('click', () => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.remove();
    }, 300);
  });

  // Auto-fermeture après 3 secondes
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.classList.add('fade-out');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }
  }, 3000);
}

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

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;

  const image = document.createElement('img');
  image.src = product.images[0];
  image.alt = product.name;
  card.appendChild(image);

  image.addEventListener('click', () => {
    window.location.href = `details.html?id=${product.id}`;
  });

  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);

  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);

  // Ajout du pop-up de promotion
  if (product.promotion && isPromotionValid(product.promotion)) {
    // Création du conteneur de prix
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    // Prix original barré
    const originalPrice = document.createElement('span');
    originalPrice.classList.add('original-price');
    originalPrice.textContent = `${product.price.toLocaleString()} FCFA`;

    // Prix en promotion
    const promoPrice = document.createElement('span');
    promoPrice.classList.add('promo-price');
    const discountedPrice = Math.round(product.price * (1 - product.promotion.discount / 100));
    promoPrice.textContent = `${discountedPrice.toLocaleString()} FCFA`;

    // Assemblage des prix
    priceContainer.appendChild(originalPrice);
    priceContainer.appendChild(promoPrice);

    // Ajouter l'étiquette de type de vente si elle existe
    if (product.salesType) {
      const salesTypeLabel = document.createElement('div');
      salesTypeLabel.className = 'sales-type-label';
      if (product.salesType === 'wholesale') {
        salesTypeLabel.innerHTML = '</i>En gros à partir de 10 pièce';
        salesTypeLabel.classList.add('wholesale');
      } else if (product.salesType === 'retail') {
        salesTypeLabel.innerHTML = 'En détail à partir 1 pièce ';
        salesTypeLabel.classList.add('retail');
      }
      priceContainer.appendChild(salesTypeLabel);
    }

    card.appendChild(priceContainer);

    // Badge de promotion
    const promoBadge = document.createElement('div');
    promoBadge.classList.add('promo-badge');
    promoBadge.textContent = `-${product.promotion.discount}%`;
    card.appendChild(promoBadge);
  } else {
    // Prix normal sans promotion
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');
    const normalPrice = document.createElement('span');
    normalPrice.classList.add('normal-price');
    normalPrice.textContent = `${product.price.toLocaleString()} FCFA`;
    priceContainer.appendChild(normalPrice);

    // Ajouter l'étiquette de type de vente si elle existe
    if (product.salesType) {
      const salesTypeLabel = document.createElement('div');
      salesTypeLabel.className = 'sales-type-label';
      if (product.salesType === 'wholesale') {
        salesTypeLabel.innerHTML = '<i class="fas fa-store"></i> Vente en gros';
        salesTypeLabel.classList.add('wholesale');
      } else if (product.salesType === 'retail') {
        salesTypeLabel.innerHTML = '<i class="fas fa-shopping-cart"></i> Vente au détail';
        salesTypeLabel.classList.add('retail');
      }
      priceContainer.appendChild(salesTypeLabel);
    }
    card.appendChild(priceContainer);
  }

  // Bouton Commander
  const commanderBtn = document.createElement('button');
  commanderBtn.classList.add('btn-commander');
  commanderBtn.textContent = 'Commander';
  commanderBtn.addEventListener('click', () => {
    if (product.seller && product.seller.phone) {
      // Créer un numéro de référence unique
      const date = new Date();
      const formattedDate = date.toLocaleDateString('fr-FR');
      const reference = `RYONVA-${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
      
      // Créer le message du bon de commande
      let message = `*BON DE COMMANDE RYON.A*\n`;
      message += `------------------------------------------\n`;
      message += `*RÉFÉRENCE:* ${reference}\n`;
      message += `*DATE:* ${formattedDate}\n`;
      message += `------------------------------------------\n\n`;
      
      // Détails du produit
      message += `*ARTICLE:* ${product.name}\n`;
      message += `• Référence: ART-${reference.substring(reference.length-6)}\n`;
      message += `• Prix unitaire: *${product.price.toLocaleString()} FCFA*\n`;
      message += `• Quantité: *1*\n`;
      message += `• Sous-total: *${product.price.toLocaleString()} FCFA*\n`;
      
      // Ajouter le lien de l'image si disponible
      if (product.images && product.images.length > 0) {
        message += `• Lien image: ${product.images[0]}\n`;
      }
      
      message += `------------------------------------------\n\n`;
      
      // Récapitulatif financier
      message += `*RÉCAPITULATIF DE LA COMMANDE*\n`;
      message += `------------------------------------------\n`;
      message += `• Nombre d'articles: *1*\n`;
      message += `• Total: *${product.price.toLocaleString()} FCFA*\n`;
      message += `------------------------------------------\n\n`;
      
      message += `Cordialement,\n`;
      message += `*Service Commandes RYONV*\n\n`;
      
      message += `_Document généré automatiquement via la plateforme RYONV.A_\n`;
      message += `_www.ryonv.com_`;
      
      // Fix the phone number to avoid duplicate country codes
      let phoneNumber = product.seller.phone;
      if (typeof fixPhoneNumber === 'function') {
        phoneNumber = fixPhoneNumber(phoneNumber);
      }
      
      // Remove + for WhatsApp URL
      if (phoneNumber.startsWith('+')) {
        phoneNumber = phoneNumber.substring(1);
      }
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  });
  card.appendChild(commanderBtn);

  // Bouton Ajouter au panier
  const addToCartBtn = document.createElement('button');
  addToCartBtn.classList.add('btn-panier', 'add-to-cart-btn');
  addToCartBtn.textContent = 'Ajouter au panier';
  addToCartBtn.addEventListener('click', () => {
    addToCart(product);
  });
  card.appendChild(addToCartBtn);

  const sellerInfo = document.createElement('p');
  sellerInfo.classList.add('seller-info');
  
  // Créer un lien autour du nom du vendeur
  const sellerLink = document.createElement('a');
  sellerLink.classList.add('seller-link');
  
  // Vérifier si product.seller et product.seller.name existent
  if (product.seller && product.seller.name && product.seller.phone) {
    sellerLink.textContent = `Vendu par : ${product.seller.name}`;
    sellerLink.href = `https://wa.me/${product.seller.phone}`;
    sellerLink.target = "_blank";
  } else {
    sellerLink.textContent = 'Vendeur inconnu';
    sellerLink.href = "#"; 
  }
  
  card.appendChild(sellerInfo);
  sellerInfo.appendChild(sellerLink);

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

  // Après la création de la carte mais avant le retour
  const favoriteBtn = document.createElement('button');
  favoriteBtn.classList.add('favorite-btn');
  const isFavorite = checkIfFavorite(product.id);
  favoriteBtn.innerHTML = `<i class="fas fa-heart ${isFavorite ? 'active' : ''}"></i>`;
  
  favoriteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleFavorite(product);
    favoriteBtn.querySelector('i').classList.toggle('active');
  });
  
  card.appendChild(favoriteBtn);

  return card;
}

function displayVendorInfo(vendor) {
  const vendorCard = document.createElement('div');
  vendorCard.classList.add('vendor-card');

  const name = document.createElement('h3');
  name.textContent = vendor.name;
  vendorCard.appendChild(name);

  const rating = document.createElement('p');
  rating.textContent = `Note : ${'★'.repeat(vendor.rating)}${'☆'.repeat(5 - vendor.rating)}`;
  vendorCard.appendChild(rating);

  const contact = document.createElement('p');
  contact.textContent = `Contact : ${vendor.phone}`;
  vendorCard.appendChild(contact);

  document.querySelector('.vendor-list').appendChild(vendorCard);
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
  window.location.href = `details.html?id=${product.id}`;
}

setInterval(() => {
  shuffleProducts(products); 
  displayProducts(products); 
}, 70000);

document.addEventListener('DOMContentLoaded', () => {
  if (!products || products.length === 0) {
      console.error("La variable 'products' est vide ou non définie.");
      return;
  }
  
  let currentPage = 1;
  const productsPerPage = 10;
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const pageInfo = document.getElementById('page-info');

  function shuffleProducts(productsArray) {
    for (let i = productsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productsArray[i], productsArray[j]] = [productsArray[j], productsArray[i]];
    }
  }

  shuffleProducts(products); 
  displayProducts(products); 

  function displayProducts(filteredProducts) {
      const productList = document.querySelector('.product-list');
      productList.innerHTML = ''; 

      // Vérifier s'il y a des produits
      if (filteredProducts.length === 0) {
        showNoProductsMessage();
        return;
      }

      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex); 

      paginatedProducts.forEach(product => {
          const card = createProductCard(product); 
          if (card) productList.appendChild(card);
      });

      updatePaginationInfo(filteredProducts.length);
  }

  function updatePaginationInfo(totalProducts) {
      const totalPages = Math.ceil(totalProducts / productsPerPage);
      pageInfo.textContent = ` ${currentPage} sur ${totalPages}`;

      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
  }

  function applyFilters() {
      const selectedCategory = document.getElementById('category-select').value;
      const selectedCountry = document.getElementById('seller-country').value;
      const selectedSeller = document.getElementById('seller-name').value;
      const searchTerm = document.getElementById('search-input').value.toLowerCase();

      let filteredProducts = products;

      if (selectedCategory !== 'all') {
          filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
      }

      if (selectedCountry !== 'all') {
          filteredProducts = filteredProducts.filter(product => 
              product.seller && product.seller.country === selectedCountry
          );
      }

      if (selectedSeller !== 'all') {
          filteredProducts = filteredProducts.filter(product => 
              product.seller && product.seller.name === selectedSeller
          );
      }

      if (searchTerm) {
          filteredProducts = filteredProducts.filter(product => 
              product.name.toLowerCase().includes(searchTerm)
          );
      }

      // Afficher l'en-tête de catégorie
      const categoryName = getCategoryDisplayName(selectedCategory);
      displayCategoryHeader(categoryName, filteredProducts.length, selectedCategory);

      // Vérifier si des produits ont été trouvés
      if (filteredProducts.length === 0) {
        showNoProductsMessage();
      }

      currentPage = 1; 
      displayProducts(filteredProducts);
      return filteredProducts; 
  }

  document.getElementById('category-select').addEventListener('change', () => {
      filteredProducts = applyFilters();
  });
  document.getElementById('seller-country').addEventListener('change', () => {
      filteredProducts = applyFilters();
  });
  document.getElementById('seller-name').addEventListener('change', () => {
      filteredProducts = applyFilters();
  });
  document.getElementById('search-input').addEventListener('input', () => {
      filteredProducts = applyFilters();
  });

  let filteredProducts = applyFilters(); 

  nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      if (currentPage < totalPages) {
          currentPage++;
          displayProducts(filteredProducts); 
      }
  });

  prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          displayProducts(filteredProducts); 
      }
  });

  applyFilters();
});

document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    const categorySelect = document.getElementById('category-select');
    
    function updateCategory(category) {
        categoryItems.forEach(item => {
            item.classList.remove('active');
            if(item.dataset.category === category) {
                item.classList.add('active');
            }
        });

        if (categorySelect) {
            categorySelect.value = category;
            const event = new Event('change');
            categorySelect.dispatchEvent(event);
            
            // L'en-tête sera affiché via applyFilters uniquement si une catégorie spécifique est sélectionnée
        }
    }

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            updateCategory(category);
        });
    });

    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            updateCategory(this.value);
        });
    }

    const searchInput = document.getElementById('search-input');
    const sellerCountry = document.getElementById('seller-country');
    const sellerName = document.getElementById('seller-name');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
        });
    }

    if (sellerCountry) {
        sellerCountry.addEventListener('change', function() {
        });
    }

    if (sellerName) {
        sellerName.addEventListener('change', function() {
        });
    }
});

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

document.getElementById('sort').addEventListener('change', sortProducts);

displayProducts(products);

document.addEventListener('DOMContentLoaded', function() {
  initializeStyles();
  
  if (products && products.length > 0) {
    let currentPage = 1;
    const productsPerPage = 10;
    
    shuffleProducts(products);
    displayProducts(products);
    applyFilters();
    
    initializeCarousel();
  }
});

function initializeStyles() {
  document.body.style.display = 'none';
  document.body.offsetHeight;
  document.body.style.display = '';
  
  const carouselInner = document.querySelector('.featured-carousel-inner');
  if (carouselInner) {
    carouselInner.style.transition = 'transform 0.5s ease';
  }
  
  updateCartCounter();
  initializeProductStates();
}

function initializeProductStates() {
  document.querySelectorAll('.product-card').forEach(card => {
    const productId = card.dataset.productId;
    if (productId) {
      updateLikeState(card, productId);
      updateShareState(card, productId);
      updateStockStatus(card, productId);
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const countryBanner = document.getElementById('seller-country-banner');
    const countryOriginal = document.getElementById('seller-country');
    
    const sellerBanner = document.getElementById('seller-name-banner');
    const sellerOriginal = document.getElementById('seller-name');
    
    const searchBanner = document.getElementById('search-input-banner');
    const searchOriginal = document.getElementById('search-input');

    function syncSelects(select1, select2) {
        if (!select1 || !select2) return;
        
        select1.addEventListener('change', function() {
            select2.value = this.value;
            select2.dispatchEvent(new Event('change'));
        });

        select2.addEventListener('change', function() {
            select1.value = this.value;
        });
    }

    function syncSearch(search1, search2) {
        if (!search1 || !search2) return;
        
        search1.addEventListener('input', function() {
            search2.value = this.value;
            search2.dispatchEvent(new Event('input'));
        });

        search2.addEventListener('input', function() {
            search1.value = this.value;
        });
    }

    syncSelects(countryBanner, countryOriginal);
    syncSelects(sellerBanner, sellerOriginal);
    syncSearch(searchBanner, searchOriginal);

});

function updateProductDisplay(filteredProducts) {
    const productContainer = document.querySelector('.products-container');
    productContainer.innerHTML = '';

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p class="no-results">Aucun produit trouvé dans cette gamme de prix</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

function applyAllFilters() {
    let filteredProducts = products;

    const priceRange = document.getElementById('price-range').value;
    if (priceRange !== 'all') {
        const [minPrice, maxPrice] = getPriceRange(priceRange);
        filteredProducts = filteredProducts.filter(product => {
            let finalPrice = product.price;
            if (product.promotion && product.promotion.discount) {
                finalPrice = product.price * (1 - product.promotion.discount / 100);
            }
            return finalPrice >= minPrice && finalPrice < maxPrice;
        });
    }

    const selectedCountry = document.getElementById('seller-country').value;
    if (selectedCountry !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.seller.country === selectedCountry
        );
    }

    const selectedSeller = document.getElementById('seller-name').value;
    if (selectedSeller !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.seller.name === selectedSeller
        );
    }

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
    }

    updateProductDisplay(filteredProducts);
}

function getPriceRange(range) {
    switch(range) {
        case '0-5000': return [0, 5000];
        case '5000-10000': return [5000, 10000];
        case '10000-25000': return [10000, 25000];
        case '25000-50000': return [25000, 50000];
        case '50000-100000': return [50000, 100000];
        case '100000+': return [100000, Infinity];
        default: return [0, Infinity];
    }
}

document.getElementById('price-range').addEventListener('change', applyAllFilters);
document.getElementById('seller-country').addEventListener('change', applyAllFilters);
document.getElementById('seller-name').addEventListener('change', applyAllFilters);
document.getElementById('search-input').addEventListener('input', applyAllFilters);

document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort');
    const categorySelect = document.getElementById('category-select');
    const countrySelect = document.getElementById('seller-country');
    const sellerSelect = document.getElementById('seller-name');
    const searchInput = document.getElementById('search-input');
    const productsSection = document.getElementById('products-section');
    const productList = document.querySelector('.product-list');

    function filterProducts() {
        let filteredProducts = window.products;

        displayProducts(filteredProducts);

        setTimeout(() => {
            productsSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
    }
});

// Fonction pour obtenir le nom d'affichage de la catégorie
function getCategoryDisplayName(categoryValue) {
  switch(categoryValue) {
    case 'vetements': return 'Vêtements';
    case 'vetements_hommes': return 'Vêtements Hommes';
    case 'electronique': return 'Électronique';
    case 'maison': return 'Maison';
    case 'sport': return 'Accessoires';
    default: return 'Tous les produits';
  }
}

// Modifier la fonction displayCategoryHeader pour gérer la visibilité conditionnelle
function displayCategoryHeader(categoryName, productCount, selectedCategory) {
  const headerContainer = document.getElementById('category-header-container');
  
  // Afficher l'en-tête uniquement si une catégorie spécifique est sélectionnée (pas "all")
  if (selectedCategory && selectedCategory !== 'all') {
    headerContainer.innerHTML = `
      <div class="category-header">
        <div class="category-title">
          <i class="fas fa-folder"></i> 
          ${categoryName}
        </div>
        <div class="product-count">${productCount} produits trouvés</div>
      </div>
    `;
    headerContainer.style.display = 'block';
    // Faire défiler jusqu'à l'en-tête
    headerContainer.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Cacher l'en-tête si aucune catégorie spécifique n'est sélectionnée
    headerContainer.innerHTML = '';
    headerContainer.style.display = 'none';
  }
}

// Modifier la fonction applyFilters pour contrôler quand afficher l'en-tête
function applyFilters() {
  const selectedCategory = document.getElementById('category-select').value;
  const selectedCountry = document.getElementById('seller-country').value;
  const selectedSeller = document.getElementById('seller-name').value;
  const searchTerm = document.getElementById('search-input').value.toLowerCase();

  let filteredProducts = products;

  if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
      
      // Afficher l'en-tête de catégorie uniquement lorsqu'une catégorie spécifique est sélectionnée
      const categoryName = getCategoryDisplayName(selectedCategory);
      displayCategoryHeader(categoryName, filteredProducts.length, selectedCategory);
  } else {
      // Cacher l'en-tête si aucune catégorie spécifique n'est sélectionnée
      displayCategoryHeader(null, 0, 'all');
  }

  if (selectedCountry !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
          product.seller && product.seller.country === selectedCountry
      );
  }

  if (selectedSeller !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
          product.seller && product.seller.name === selectedSeller
      );
  }

  if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(searchTerm)
      );
  }

  // Vérifier si des produits ont été trouvés
  if (filteredProducts.length === 0) {
    showNoProductsMessage();
  }

  currentPage = 1; 
  displayProducts(filteredProducts);
  return filteredProducts; 
}

// Fonction améliorée pour afficher le message "aucun produit trouvé"
function showNoProductsMessage() {
  // Supprimer tout popup existant
  const existingPopup = document.querySelector('.no-results-popup');
  if (existingPopup) {
    existingPopup.remove();
  }
  
  // Créer le popup
  const noResultsPopup = document.createElement('div');
  noResultsPopup.className = 'no-results-popup';
  noResultsPopup.innerHTML = `
    <div class="no-results-content">
      <div class="no-results-icon">
        <i class="fas fa-search"></i>
      </div>
      <h3>Désolé, aucun produit trouvé</h3>
      <p>Essayez de modifier vos critères de recherche ou de filtrage</p>
      <button class="reset-search-btn">
        <i class="fas fa-redo"></i> Réinitialiser la recherche
      </button>
    </div>
  `;
  
  // Ajouter au document
  document.body.appendChild(noResultsPopup);
  
  // Ajouter l'écouteur au bouton de réinitialisation
  const resetBtn = noResultsPopup.querySelector('.reset-search-btn');
  resetBtn.addEventListener('click', function() {
    // Réinitialiser les filtres
    document.getElementById('search-input').value = '';
    document.getElementById('category-select').value = 'all';
    document.getElementById('seller-country').value = 'all';
    document.getElementById('seller-name').value = 'all';
    
    // Mettre à jour l'interface des catégories
    document.querySelectorAll('.category-item').forEach(item => {
      item.classList.remove('active');
      if(item.dataset.category === 'all') {
        item.classList.add('active');
      }
    });
    
    // Cacher l'en-tête de catégorie
    const headerContainer = document.getElementById('category-header-container');
    if (headerContainer) {
      headerContainer.innerHTML = '';
      headerContainer.style.display = 'none';
    }
    
    // Fermer le popup
    noResultsPopup.remove();
    
    // SOLUTION: Utiliser la page 1 directement sans référence à currentPage
    const productList = document.querySelector('.product-list');
    if (productList) {
      productList.innerHTML = '';
      
      // Afficher les produits de la page 1
      const startIndex = 0; // Page 1 commence à l'index 0
      const productsPerPage = 10; // Si cette variable n'est pas accessible, utilisez une valeur fixe
      const endIndex = startIndex + productsPerPage;
      
      const allProductsToShow = products.slice(startIndex, endIndex);
      
      allProductsToShow.forEach(product => {
        const card = createProductCard(product);
        if (card) productList.appendChild(card);
      });
      
      // Mettre à jour l'info de pagination
      const totalPages = Math.ceil(products.length / productsPerPage);
      const pageInfo = document.getElementById('page-info');
      if (pageInfo) pageInfo.textContent = `1 sur ${totalPages}`;
      
      // Mettre à jour les boutons de pagination
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn && totalPages > 1) nextBtn.disabled = false;
    }
  });
}

// Modifier la fonction displayProducts pour vérifier s'il y a des produits
function displayProducts(filteredProducts) {
  const productList = document.querySelector('.product-list');
  productList.innerHTML = ''; 

  // Vérifier s'il y a des produits
  if (filteredProducts.length === 0) {
    showNoProductsMessage();
    return;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  paginatedProducts.forEach(product => {
    const card = createProductCard(product); 
    if (card) productList.appendChild(card);
  });

  updatePaginationInfo(filteredProducts.length);
}

