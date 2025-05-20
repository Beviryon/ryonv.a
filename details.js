import { products } from './products.js';

// Function to fix phone numbers by removing duplicate country code prefixes
function fixPhoneNumber(phoneNumber) {
  if (!phoneNumber) return phoneNumber;
  
  // If the number starts with +221, remove the 221 part
  if (phoneNumber.startsWith('+221')) {
    return '+' + phoneNumber.substring(4); // Keep the + but remove 221
  }
  
  return phoneNumber;
}

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

function displayProductDetail() {
  const productId = getProductIdFromUrl();
  const product = products.find(p => p.id === productId);
  const container = document.getElementById('product-detail');
  if (!product) {
    container.innerHTML = `
      <div class="error-container">
        <div class="error-message">
          <h2>Produit introuvable</h2>
          <p>Désolé, le produit que vous recherchez n'existe pas ou a été retiré.</p>
          <a href="produits.html" class="btn btn-primary">Retour à la boutique</a>
        </div>
      </div>
    `;
    return;
  }
  
  // Enregistrer la visite du produit
  addProductToRecentlyViewed(product);
  
  // Prix promo
  let promo = '';
  let oldPrice = '';
  let price = product.price;
  if (product.promotion && product.promotion.discount) {
    const discounted = Math.round(product.price * (1 - product.promotion.discount / 100));
    oldPrice = `<span class="old-price">${product.price.toLocaleString()} FCFA</span>`;
    price = discounted;
    promo = `<span class="promo-badge">-${product.promotion.discount}%</span>`;
  }

  // Stock
  let stock = '';
  if (typeof product.stock === 'number') {
    if (product.stock > 10) stock = `<span class="stock">En stock</span>`;
    else if (product.stock > 0) stock = `<span class="stock low-stock">Stock limité (${product.stock})</span>`;
    else stock = `<span class="stock out-stock">Rupture de stock</span>`;
  }

  // Couleurs
  let colors = '';
  if (Array.isArray(product.colors) && product.colors.length) {
    colors = `<div class="options">
      <span>Couleur :</span>
      <div class="color-dots-container">
        ${product.colors.map((c, i) =>
          `<span class="color-dot" style="background:${c}" data-color="${c}" tabindex="0" aria-label="Couleur ${c}" role="button"></span>`
        ).join('')}
      </div>
    </div>`;
  }

  // Tailles
  let sizes = '';
  if (Array.isArray(product.sizes) && product.sizes.length) {
    sizes = `<div class="options"><span>Taille :</span>
      <select class="size-select" aria-label="Sélectionner une taille">
        ${product.sizes.map(s => `<option>${s}</option>`).join('')}
      </select>
    </div>`;
  }

  // Vendeur
  let seller = '';
  if (product.seller && product.seller.name) {
    seller = `<div class="seller">Vendu par <b>${product.seller.name}</b>${product.seller.country ? ' (' + product.seller.country + ')' : ''}</div>`;
  }

  // Carrousel d'images (toujours au moins une image)
  let carousel = '';
  if (Array.isArray(product.images) && product.images.length) {
    carousel = `
      <section class="product-images card">
        <div class="main-image-container">
          <img id="main-img" src="${product.images[0]}" alt="${product.name}" class="main-product-img" style="cursor:zoom-in;">
          <div class="image-overlay">
            <span class="zoom-hint">Appuyez pour zoomer</span>
          </div>
        </div>
        <div class="image-thumbnails">
          ${product.images.map((img, i) =>
            `<img src="${img}" class="thumbnail-img${i === 0 ? ' active' : ''}" data-index="${i}" alt="Miniature ${i + 1}" loading="lazy">`
          ).join('')}
        </div>
        ${product.images.length > 4 ? '<div class="scroll-hint">Faire défiler pour voir plus d\'images →</div>' : ''}
      </section>
      <div class="image-modal" id="image-modal">
        <div class="modal-content">
          <span class="close-modal" id="close-modal" aria-label="Fermer">&times;</span>
          <div class="modal-gallery">
            <img id="modalMainImage" src="${product.images[0]}" alt="${product.name}">
            <button class="modal-nav prev" id="modalPrev" aria-label="Image précédente">&#10094;</button>
            <button class="modal-nav next" id="modalNext" aria-label="Image suivante">&#10095;</button>
          </div>
          <div class="modal-thumbnails">
            ${product.images.map((img, i) =>
              `<img src="${img}" class="modal-thumb${i === 0 ? ' active' : ''}" data-index="${i}" alt="Miniature ${i + 1}" loading="lazy">`
            ).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Section infos produit
  const infoSection = `
    <section class="product-info card">
      <div class="product-info-header" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;">
        <h1 class="product-title">${product.name}</h1>
        <button class="btn btn-fav" id="add-fav" title="Ajouter aux favoris" aria-label="Ajouter aux favoris">❤</button>
      </div>
      <div class="product-pricing">
        <span class="price">${price.toLocaleString()} FCFA</span>
        ${oldPrice} ${promo}
      </div>
      <div class="product-badges">
        ${stock}
        ${product.category ? `<span class="category-badge">${product.category}</span>` : ''}
      </div>
      <p class="product-description">${product.description || ''}</p>
      ${colors}
      ${sizes}
      <div class="actions">
        <button class="btn btn-primary" id="add-cart"><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>
      </div>
      ${seller}
    </section>
  `;

  // Section vendeur (si dispo)
  let sellerSection = '';
  if (product.seller && product.seller.name) {
    sellerSection = `
      <section class="seller-section card">
        <div class="seller-badge">
          <div class="seller-avatar">
            <img src="${product.seller.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(product.seller.name)}" alt="${product.seller.name}" loading="lazy">
          </div>
          <div class="seller-info">
            <h3>${product.seller.name}</h3>
            ${product.seller.country ? `<div class="seller-location"><i class="fas fa-map-marker-alt"></i> ${product.seller.country}</div>` : ''}
            ${product.seller.phone ? `<div class="seller-phone"><i class="fas fa-phone"></i> ${product.seller.phone}</div>` : ''}
          </div>
        </div>
      </section>
    `;
  }

  // Section détails supplémentaires (ex: caractéristiques, livraison, etc.)
  let extraSection = '';
  if (product.features && Array.isArray(product.features) && product.features.length) {
    extraSection = `
      <section class="product-extra card">
        <h2>Caractéristiques</h2>
        <ul class="features-list">
          ${product.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </section>
    `;
  }

  // Ajout d'une section "Vous pourriez aussi aimer"
  const similarProducts = getSimilarProducts(product);
  let similarProductsSection = '';
  
  if (similarProducts && similarProducts.length > 0) {
    similarProductsSection = `
      <section class="similar-products-section">
        <h2>Vous pourriez aussi aimer</h2>
        <div class="similar-products-container">
          ${similarProducts.slice(0, 4).map(p => `
            <div class="similar-product-card" data-id="${p.id}">
              <div class="similar-product-img">
                <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
              </div>
              <div class="similar-product-info">
                <h3>${p.name}</h3>
                <div class="similar-product-price">${p.price.toLocaleString()} FCFA</div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  container.innerHTML = `
    <div class="product-detail-layout">
      ${carousel}
      <div class="product-info-block">
        ${infoSection}
        ${sellerSection}
        ${extraSection}
      </div>
    </div>
    ${similarProductsSection}
  `;

  // --- JS pour la visionneuse d'images ---
  if (Array.isArray(product.images) && product.images.length) {
    const mainImg = document.getElementById('main-img');
    const thumbs = container.querySelectorAll('.thumbnail-img');
    let current = 0;
    
    // Swipe detection for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    function showImg(i) {
      current = (i + product.images.length) % product.images.length;
      mainImg.src = product.images[current];
      thumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
    }
    
    function handleSwipe() {
      if (touchEndX < touchStartX) {
        // Swipe left - next image
        showImg(current + 1);
      }
      if (touchEndX > touchStartX) {
        // Swipe right - prev image
        showImg(current - 1);
      }
    }
    
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => showImg(i));
      // Remove mouseenter event for better mobile experience
    });
    
    // Add touch events for main image
    mainImg.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    mainImg.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});
    
    // Add keyboard navigation
    document.addEventListener('keydown', e => {
      if (document.activeElement.tagName === 'INPUT' || 
          document.activeElement.tagName === 'TEXTAREA' || 
          document.activeElement.tagName === 'SELECT') {
        return; // Don't navigate when focusing form elements
      }
      
      if (e.key === 'ArrowLeft') {
        showImg(current - 1);
      } else if (e.key === 'ArrowRight') {
        showImg(current + 1);
      }
    });
    
    // Visionneuse modale
    const modal = document.getElementById('image-modal');
    const modalMain = document.getElementById('modalMainImage');
    const modalThumbs = modal.querySelectorAll('.modal-thumb');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    mainImg.addEventListener('click', () => {
      modal.classList.add('show');
      modalMain.src = product.images[current];
      modalThumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
    
    modalThumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
        modalMain.src = product.images[i];
        current = i;
        modalThumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
      });
    });
    
    modalPrev.addEventListener('click', () => {
      current = (current - 1 + product.images.length) % product.images.length;
      modalMain.src = product.images[current];
      modalThumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
    });
    
    modalNext.addEventListener('click', () => {
      current = (current + 1) % product.images.length;
      modalMain.src = product.images[current];
      modalThumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
    });
    
    document.getElementById('close-modal').onclick = () => {
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Restore scrolling
    };
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
    
    // Add touch events for modal
    modalMain.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    modalMain.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX) {
        // Swipe left - next image
        current = (current + 1) % product.images.length;
        modalMain.src = product.images[current];
        modalThumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
      }
      if (touchEndX > touchStartX) {
        // Swipe right - prev image
        current = (current - 1 + product.images.length) % product.images.length;
        modalMain.src = product.images[current];
        modalThumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
      }
    }, {passive: true});
  }

  // Couleur sélection
  if (Array.isArray(product.colors) && product.colors.length) {
    const colorDots = container.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
      dot.onclick = () => {
        colorDots.forEach(d => d.classList.remove('selected'));
        dot.classList.add('selected');
      };
    });
  }

  // Favoris (localStorage)
  const favBtn = document.getElementById('add-fav');
  favBtn.classList.toggle('active', checkIfFavorite(product.id));
  favBtn.textContent = checkIfFavorite(product.id) ? '❤' : '❤';
  
  favBtn.onclick = () => {
    let favs = JSON.parse(localStorage.getItem('favs') || '[]');
    if (!favs.includes(product.id)) {
      favs.push(product.id);
      favBtn.classList.add('active');
      favBtn.textContent = '❤';
      // Animation pour l'ajout aux favoris
      animateFavButton(favBtn);
    } else {
      favs = favs.filter(id => id !== product.id);
      favBtn.classList.remove('active');
      favBtn.textContent = '❤';
    }
    localStorage.setItem('favs', JSON.stringify(favs));
  };

  // Actions (ajout panier, favoris, discuter vendeur)
  const actionsDiv = container.querySelector('.actions');

  // Bouton discuter avec le vendeur (si numéro dispo)
  if (product.seller && product.seller.phone) {
    const chatBtn = document.createElement('button');
    chatBtn.className = 'btn btn-chat';
    chatBtn.textContent = 'Discuter avec le vendeur';
    chatBtn.onclick = () => {
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
      message += `• Prix unitaire: *${price.toLocaleString()} FCFA*\n`;
      message += `• Quantité: *1*\n`;
      message += `• Sous-total: *${price.toLocaleString()} FCFA*\n`;
      
      // Ajouter le lien de l'image si disponible
      if (product.images && product.images.length > 0) {
        message += `• Lien image: ${product.images[0]}\n`;
      }
      
      message += `------------------------------------------\n\n`;
      
      // Récapitulatif financier
      message += `*RÉCAPITULATIF DE LA COMMANDE*\n`;
      message += `------------------------------------------\n`;
      message += `• Nombre d'articles: *1*\n`;
      message += `• Total: *${price.toLocaleString()} FCFA*\n`;
      message += `------------------------------------------\n\n`;
      
      message += `Cordialement,\n`;
      message += `*Service Commandes RYONV*\n\n`;
      
      message += `_Document généré automatiquement via la plateforme RYONV.A_\n`;
      message += `_www.ryonv.com_`;
      
      // Fix the phone number before creating the WhatsApp link
      const fixedPhone = fixPhoneNumber(product.seller.phone);
      
      // Prepare the phone number for WhatsApp URL
      let phoneNumber = fixedPhone;
      if (phoneNumber.startsWith('+')) {
        phoneNumber = phoneNumber.substring(1);
      }
      
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };
    actionsDiv.appendChild(chatBtn);
  }

  // Panier (localStorage) + pop-up
  const addToCartBtn = document.getElementById('add-cart');
  addToCartBtn.onclick = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: price,
      images: product.images || [],
      quantity: 1,
      seller: product.seller || {},
      category: product.category || ''
    });
    showCartPopup(product.name);
    animateCartButton(addToCartBtn);
  };
  
  // Handle similar products clicks
  document.querySelectorAll('.similar-product-card').forEach(card => {
    card.addEventListener('click', () => {
      const productId = parseInt(card.getAttribute('data-id'), 10);
      window.location.href = `details.html?id=${productId}`;
    });
  });
}

// Helper function to check if a product is in favorites
function checkIfFavorite(productId) {
  const favs = JSON.parse(localStorage.getItem('favs') || '[]');
  return favs.includes(productId);
}

// Animation for favorite button
function animateFavButton(button) {
  button.classList.add('pulse-animation');
  setTimeout(() => {
    button.classList.remove('pulse-animation');
  }, 700);
}

// Animation for cart button
function animateCartButton(button) {
  button.classList.add('scale-animation');
  setTimeout(() => {
    button.classList.remove('scale-animation');
  }, 300);
}

// Function to get similar products
function getSimilarProducts(product) {
  if (!product || !product.category) return [];
  
  return products
    .filter(p => p.id !== product.id && p.category === product.category)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 4);
}

// Function to add product to recently viewed
function addProductToRecentlyViewed(product) {
  const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
  
  // Remove if already exists
  const filtered = recentlyViewed.filter(p => p.id !== product.id);
  
  // Add to the beginning
  filtered.unshift({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images && product.images.length > 0 ? product.images[0] : '',
    timestamp: Date.now()
  });
  
  // Keep only the last 10
  const trimmed = filtered.slice(0, 10);
  
  // Save back to localStorage
  localStorage.setItem('recentlyViewed', JSON.stringify(trimmed));
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cart.find(item => item.id === product.id);
    if (found) {
        found.quantity += 1;
        if (typeof found.price === 'undefined' && typeof product.price !== 'undefined') {
            found.price = product.price;
        }
        if (!found.images && product.images) {
            found.images = product.images;
        }
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    if (typeof updateCartCounter === 'function') updateCartCounter();
}

function showCartPopup(productName) {
  const popup = document.getElementById('cart-popup');
  const message = document.getElementById('cart-popup-message');
  const viewBtn = document.getElementById('view-cart-btn');
  const closeBtn = document.getElementById('close-popup-btn');
  if (!popup) return;
  message.textContent = `« ${productName} » a bien été ajouté au panier !`;
  popup.classList.remove('hidden');
  viewBtn.onclick = () => {
    window.location.href = 'cart.html';
  };
  closeBtn.onclick = () => {
    popup.classList.add('hidden');
  };
  // Fermer le pop-up si on clique en dehors
  popup.onclick = (e) => {
    if (e.target === popup) popup.classList.add('hidden');
  };
  
  // Auto-close after 3 seconds
  setTimeout(() => {
    if (!popup.classList.contains('hidden')) {
      popup.classList.add('hidden');
    }
  }, 3000);
}

// Update cart counter if it exists
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCounter = document.querySelector('.cart-counter');
  
  if (cartCounter) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCounter.textContent = totalItems;
    cartCounter.style.display = totalItems > 0 ? 'inline-block' : 'none';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  displayProductDetail();
  updateCartCounter(); // Initialize cart counter
});
