// Fonction pour obtenir l'ID de l'utilisateur connecté
function getCurrentUserId() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return currentUser ? currentUser.id : null;
}

// Fonction pour obtenir la clé de stockage des favoris pour le panier
function getFavoritesKey() {
  return 'cart_favorites';
}

// Fonction pour vérifier si un produit est en favori
export function checkIfFavorite(productId) {
  const favoritesKey = getFavoritesKey();
  const favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
  return favorites.some(fav => fav.id === productId);
}

// Fonction pour basculer l'état favori d'un produit
export function toggleFavorite(product) {
  const favoritesKey = getFavoritesKey();
  let favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
  const index = favorites.findIndex(fav => fav.id === product.id);
  
  if (index === -1) {
    favorites.push(product);
    showAlert("Produit ajouté aux favoris !", true);
  } else {
    favorites.splice(index, 1);
    showAlert("Produit retiré des favoris !", false);
  }
  
  localStorage.setItem(favoritesKey, JSON.stringify(favorites));
}

// Fonction pour afficher l'alerte
export function showAlert(message, isAdded = true) {
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
      <i class="fas ${isAdded ? 'fa-heart' : 'fa-heart-broken'}"></i>
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
    window.location.href = './favoris.html';
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

// Fonction pour afficher les favoris dans la page favoris.html
export function displayFavorites() {
  const favoritesContainer = document.querySelector('.favorites-container');
  if (!favoritesContainer) return;

  const favorites = JSON.parse(localStorage.getItem(getFavoritesKey())) || [];
  
  if (favorites.length === 0) {
    favoritesContainer.innerHTML = `
      <div class="empty-favorites">
        <i class="fas fa-heart-broken"></i>
        <p>Vous n'avez pas encore de favoris</p>
        <a href="./produits.html" class="btn">Découvrir nos produits</a>
      </div>
    `;
    return;
  }

  favoritesContainer.innerHTML = '';
  favorites.forEach(product => {
    const card = createFavoriteCard(product);
    favoritesContainer.appendChild(card);
  });
}

// Fonction pour créer une carte de produit favori
function createFavoriteCard(product) {
  const card = document.createElement('div');
  card.className = 'favorite-product-card';
  
  // Calculer le prix promotionnel si une promotion existe
  let finalPrice = product.price;
  let discountBadge = '';
  if (product.promotion && product.promotion.discount) {
    finalPrice = product.price * (1 - product.promotion.discount / 100);
    discountBadge = `<span class="promo-badge">-${product.promotion.discount}%</span>`;
  }

  card.innerHTML = `
    <div class="favorite-product-image">
      ${discountBadge}
      <img src="${product.images[0]}" alt="${product.name}" class="main-image">
      <button class="remove-favorite" data-id="${product.id}">
        <i class="fas fa-heart"></i>
      </button>
    </div>
    <div class="favorite-product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      
      <div class="price-container">
        ${product.promotion ? 
          `<span class="original-price">${product.price} FCFA</span>
           <span class="promo-price">${Math.round(finalPrice)} FCFA</span>` :
          `<span class="regular-price">${product.price} FCFA</span>`
        }
      </div>

      <div class="product-details">
        ${product.colors ? `
          <div class="colors">
            <span>Couleurs disponibles:</span>
            <div class="color-options">
              ${product.colors.map(color => `
                <span class="color-dot" style="background-color: ${color}"></span>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        ${product.sizes ? `
          <div class="sizes">
            <span>Tailles disponibles:</span>
            <div class="size-options">
              ${product.sizes.map(size => `
                <span class="size-badge">${size}</span>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <div class="seller-info">
        <p><i class="fas fa-store"></i> Vendeur: ${product.seller.name}</p>
        <p><i class="fas fa-map-marker-alt"></i> Pays: ${product.seller.country}</p>
        ${product.seller.rating ? `
          <p><i class="fas fa-star"></i> Note: ${product.seller.rating}/5</p>
        ` : ''}
      </div>

      <div class="stock-info">
        <p><i class="fas fa-box"></i> Stock: ${product.stock} disponibles</p>
      </div>

      <div class="card-buttons">
        <button class="view-details-btn" onclick="window.location.href='./details.html?id=${product.id}'">
          Voir détails
        </button>
        <button class="contact-seller-btn" onclick="window.location.href='https://wa.me/${product.vendorPhone}'">
          Contacter le vendeur
        </button>
      </div>
    </div>
  `;

  // Ajouter l'événement de suppression
  const removeBtn = card.querySelector('.remove-favorite');
  removeBtn.addEventListener('click', () => {
    toggleFavorite(product);
    displayFavorites(); // Rafraîchir l'affichage
  });

  // Ajouter la galerie d'images si disponible
  if (product.images && product.images.length > 1) {
    const imageGallery = document.createElement('div');
    imageGallery.className = 'image-gallery';
    product.images.slice(1).forEach(imgUrl => {
      const thumbImg = document.createElement('img');
      thumbImg.src = imgUrl;
      thumbImg.alt = product.name;
      thumbImg.addEventListener('click', () => {
        card.querySelector('.main-image').src = imgUrl;
      });
      imageGallery.appendChild(thumbImg);
    });
    card.querySelector('.favorite-product-image').appendChild(imageGallery);
  }

  return card;
}

// Initialiser l'affichage des favoris si on est sur la page favoris.html
if (window.location.pathname.includes('favoris.html')) {
  document.addEventListener('DOMContentLoaded', displayFavorites);
} 

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