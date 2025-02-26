import { products } from "./products.js";
import "./produitBottomNav.js"
console.log(products)

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
  }c
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


// 
// 
// 


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

function showAlert(message) {
  const alertBox = document.createElement('div');
  alertBox.textContent = message;
  alertBox.classList.add('alert');
  document.body.appendChild(alertBox);
  
  // Supprimez l'alerte après 3 secondes
  setTimeout(() => {
    alertBox.remove();
  }, 5000);
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

  image.addEventListener('click', () => {
    window.location.href = `details.html?id=${product.id}`;
  });

  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);

  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);

  const whatsappBtn = document.createElement('a');
  whatsappBtn.classList.add('btn', 'whatsapp-btn');
  whatsappBtn.textContent = 'Commander';
  whatsappBtn.addEventListener('click', () => openOrderForm(product));
  card.appendChild(whatsappBtn);

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
    card.appendChild(priceContainer);
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


////////////////////////////////////////////////////////////////////////
// Mettre à jour l'affichage toutes les minutes avec un ordre aléatoire
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

    // Fonction de mélange des produits
  function shuffleProducts(productsArray) {
    for (let i = productsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productsArray[i], productsArray[j]] = [productsArray[j], productsArray[i]];
    }
  }

  // Affichage initial des produits avec mélange
  shuffleProducts(products); 
  displayProducts(products); 

  // Fonction pour afficher les produits avec pagination et filtres
  function displayProducts(filteredProducts) {
      const productList = document.querySelector('.product-list');
      productList.innerHTML = ''; 

      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex); 

      // Vérification si des produits sont disponibles
      if (paginatedProducts.length === 0) {
          const noProductsMessage = document.createElement('p');
          noProductsMessage.textContent = 'Pas de produits pour cette sélection.';
          productList.appendChild(noProductsMessage);
          return;
      }

      // Ajouter chaque produit
      paginatedProducts.forEach(product => {
          const card = createProductCard(product); 
          if (card) productList.appendChild(card);
      });

      updatePaginationInfo(filteredProducts.length);
  }

  // Fonction pour mettre à jour les informations de pagination
  function updatePaginationInfo(totalProducts) {
      const totalPages = Math.ceil(totalProducts / productsPerPage);
      pageInfo.textContent = ` ${currentPage} sur ${totalPages}`;

      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
  }

  // Fonction pour filtrer les produits
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

      currentPage = 1; 
      displayProducts(filteredProducts);
      return filteredProducts; 
  }

  // Événements pour les filtres et la barre de recherche
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

  let filteredProducts = applyFilters();  // Initialiser avec les produits filtrés

  // Gestion des événements pour la pagination
  nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      if (currentPage < totalPages) {
          currentPage++;
          displayProducts(filteredProducts);  // Afficher les produits filtrés
      }
  });

  prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          displayProducts(filteredProducts);  // Afficher les produits filtrés
      }
  });

  // Appel initial pour afficher les produits sans filtre
  applyFilters();
});

//////////////////////////////////////////////////////////////// //////

// Gestion des catégories
document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');
    const categorySelect = document.getElementById('category-select');
    
    // Garder la logique de filtrage existante
    function updateCategory(category) {
        categoryItems.forEach(item => {
            item.classList.remove('active');
            if(item.dataset.category === category) {
                item.classList.add('active');
            }
        });

        if (categorySelect) {
            categorySelect.value = category;
            // Utiliser votre fonction de filtrage existante
            const event = new Event('change');
            categorySelect.dispatchEvent(event);
        }
    }

    // Conserver les événements existants
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.dataset.category;
            updateCategory(category);
        });
    });

    // Garder la synchronisation avec le select original s'il existe encore
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            updateCategory(this.value);
        });
    }

    // Conserver toute autre logique de filtrage existante
    const searchInput = document.getElementById('search-input');
    const sellerCountry = document.getElementById('seller-country');
    const sellerName = document.getElementById('seller-name');

    // Laisser vos fonctions de filtrage existantes intactes
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Votre logique de recherche existante
        });
    }

    if (sellerCountry) {
        sellerCountry.addEventListener('change', function() {
            // Votre logique de filtrage par pays existante
        });
    }

    if (sellerName) {
        sellerName.addEventListener('change', function() {
            // Votre logique de filtrage par vendeur existante
        });
    }
});

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

document.addEventListener('DOMContentLoaded', () => {
  const featuredItems = document.querySelectorAll('.featured-item');

  featuredItems.forEach(item => {
    const img = item.querySelector('img');
    img.addEventListener('click', () => {
      const productId = item.getAttribute('data-id');
      window.location.href = `details.html?id=${productId}`;
    });
  });
});

// Supprimer le reload automatique
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser les styles immédiatement
  initializeStyles();
  
  // Charger les produits et appliquer les filtres
  if (products && products.length > 0) {
    let currentPage = 1;
    const productsPerPage = 10;
    
    // Mélanger et afficher les produits immédiatement
    shuffleProducts(products);
    displayProducts(products);
    applyFilters();
    
    // Initialiser le carousel immédiatement
    initializeCarousel();
  }
});

function initializeStyles() {
  // Forcer le recalcul des styles
  document.body.style.display = 'none';
  document.body.offsetHeight; // Force reflow
  document.body.style.display = '';
  
  // S'assurer que les styles du carousel sont appliqués
  const carouselInner = document.querySelector('.featured-carousel-inner');
  if (carouselInner) {
    carouselInner.style.transition = 'transform 0.5s ease';
  }
  
  // Initialiser les compteurs et états visuels
  updateCartCounter();
  initializeProductStates();
}

function initializeProductStates() {
  // Initialiser les états des boutons like, share, etc.
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
    // Synchronisation des sélecteurs de pays
    const countryBanner = document.getElementById('seller-country-banner');
    const countryOriginal = document.getElementById('seller-country');
    
    // Synchronisation des sélecteurs de vendeurs
    const sellerBanner = document.getElementById('seller-name-banner');
    const sellerOriginal = document.getElementById('seller-name');
    
    // Synchronisation des champs de recherche
    const searchBanner = document.getElementById('search-input-banner');
    const searchOriginal = document.getElementById('search-input');

    // Fonction de synchronisation bidirectionnelle
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

    // Fonction de synchronisation des champs de recherche
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

    // Initialiser les synchronisations
    syncSelects(countryBanner, countryOriginal);
    syncSelects(sellerBanner, sellerOriginal);
    syncSearch(searchBanner, searchOriginal);

    // Code existant pour les catégories...
});

document.addEventListener('DOMContentLoaded', function() {
    const priceRange = document.getElementById('price-range');
    
    priceRange.addEventListener('change', function() {
        const range = this.value;
        let minPrice, maxPrice;
        
        switch(range) {
            case '0-5000':
                minPrice = 0;
                maxPrice = 5000;
                break;
            case '5000-10000':
                minPrice = 5000;
                maxPrice = 10000;
                break;
            case '10000-25000':
                minPrice = 10000;
                maxPrice = 25000;
                break;
            case '25000-50000':
                minPrice = 25000;
                maxPrice = 50000;
                break;
            case '50000-100000':
                minPrice = 50000;
                maxPrice = 100000;
                break;
            case '100000+':
                minPrice = 100000;
                maxPrice = Infinity;
                break;
            default:
                minPrice = 0;
                maxPrice = Infinity;
        }

        // Filtrer les produits
        const filteredProducts = products.filter(product => {
            // Prendre en compte le prix avec la promotion si elle existe
            let finalPrice = product.price;
            if (product.promotion && product.promotion.discount) {
                finalPrice = product.price * (1 - product.promotion.discount / 100);
            }
            return range === 'all' || (finalPrice >= minPrice && finalPrice < maxPrice);
        });

        // Mettre à jour l'affichage
        updateProductDisplay(filteredProducts);
    });
});

function updateProductDisplay(filteredProducts) {
    const productContainer = document.querySelector('.products-container');
    productContainer.innerHTML = ''; // Vider le conteneur

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p class="no-results">Aucun produit trouvé dans cette gamme de prix</p>';
        return;
    }

    filteredProducts.forEach(product => {
        // Utiliser votre fonction existante de création de carte produit
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

// Fonction pour combiner les filtres (prix, catégorie, vendeur, pays, recherche)
function applyAllFilters() {
    let filteredProducts = products;

    // Filtre par prix
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

    // Filtre par pays
    const selectedCountry = document.getElementById('seller-country').value;
    if (selectedCountry !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.seller.country === selectedCountry
        );
    }

    // Filtre par vendeur
    const selectedSeller = document.getElementById('seller-name').value;
    if (selectedSeller !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.seller.name === selectedSeller
        );
    }

    // Filtre par recherche
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
// Ajouter les écouteurs d'événements pour tous les filtres
document.getElementById('price-range').addEventListener('change', applyAllFilters);
document.getElementById('seller-country').addEventListener('change', applyAllFilters);
document.getElementById('seller-name').addEventListener('change', applyAllFilters);
document.getElementById('search-input').addEventListener('input', applyAllFilters);

document.addEventListener('DOMContentLoaded', function() {
    // Sélecteurs pour les filtres
    const sortSelect = document.getElementById('sort');
    const categorySelect = document.getElementById('category-select');
    const countrySelect = document.getElementById('seller-country');
    const sellerSelect = document.getElementById('seller-name');
    const searchInput = document.getElementById('search-input');
    const productsSection = document.getElementById('products-section');
    const productList = document.querySelector('.product-list');

    function filterProducts() {
        let filteredProducts = window.products;

        // ... votre logique de filtrage existante ...

        // Afficher les produits
        displayProducts(filteredProducts);

        // Faire défiler jusqu'à la section des produits
        setTimeout(() => {
            productsSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
    }

    // ... reste du code inchangé ...
});
