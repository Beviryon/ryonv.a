document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('#cart-items');
    const recommendedProductsContainer = document.querySelector('.recommended-products-carousel');
    const promotionBannerContainer = document.querySelector('.promotion-carousel');
    const trendingCarousel = document.querySelector('.trending-carousel');
    const bestSellersCarousel = document.querySelector('.best-sellers-carousel');

    // Fonction pour mettre à jour la quantité
    function updateQuantity(productId, newQuantity) {
        if (newQuantity < 1) return; // Empêcher les quantités négatives
        
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cartItems.findIndex(item => item.id === productId);
        
        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cartItems));
            
            // Mettre à jour l'affichage
            const quantityDisplay = document.querySelector(`[data-quantity="${productId}"]`);
            if (quantityDisplay) {
                quantityDisplay.textContent = newQuantity;
            }
            
            // Mettre à jour le total
            updateCartTotal();
        }
    }

    // Fonction pour calculer et afficher le total
    function updateCartTotal() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        
        // Supprimer l'ancien total s'il existe
        const oldTotal = document.querySelector('.cart-total');
        if (oldTotal) {
            oldTotal.remove();
        }

        // Créer et ajouter le nouveau total
        const totalElement = document.createElement('div');
        totalElement.classList.add('cart-total');
        totalElement.innerHTML = `
            <div class="cart-total-content">
                <span class="cart-total-label">Total du panier :</span>
                <span class="cart-total-amount">${total.toLocaleString()} Fcfa</span>
            </div>
        `;
        cartItemsContainer.appendChild(totalElement);
    }

    // Afficher les produits dans le panier
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-select">
                <input type="checkbox" class="select-item" data-id="${item.id}">
            </div>
            <div class="cart-item-image-container">
                <img src="${item.images[0]}" alt="${item.name}" class="cart-item-image">
            </div>
            <div class="cart-item-details">
                <h3 class="product-name">${item.name}</h3>
                <div class="product-price">${item.price.toLocaleString()} Fcfa</div>
                <div class="quantity-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity" data-quantity="${item.id}">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="cart-item-actions">
                <button class="action-btn view-btn" onclick="window.location.href='details.html?id=${item.id}'">
                    <i class="fas fa-eye"></i>
                    <span>Voir</span>
                </button>
                <button class="action-btn order-btn" data-id="${item.id}" data-vendor="${item.vendorPhone}">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Commander</span>
                </button>
                <button class="action-btn remove-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                    <span>Supprimer</span>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Ajouter les écouteurs pour les boutons + et -
        const minusBtn = cartItem.querySelector('.minus');
        const plusBtn = cartItem.querySelector('.plus');

        minusBtn.addEventListener('click', () => {
            const currentQuantity = parseInt(cartItem.querySelector('.quantity').textContent);
            updateQuantity(item.id, currentQuantity - 1);
        });

        plusBtn.addEventListener('click', () => {
            const currentQuantity = parseInt(cartItem.querySelector('.quantity').textContent);
            updateQuantity(item.id, currentQuantity + 1);
        });

        // Ajouter un écouteur d'événements pour rediriger vers la page de détails du produit
        const cartItemImage = cartItem.querySelector('.cart-item-image');
        cartItemImage.addEventListener('click', () => {
            window.location.href = `details.html?id=${item.id}`;
        });
    });

    // Ajouter des écouteurs pour les icônes "Supprimer"
    document.querySelectorAll('.remove-btn').forEach(icon => {
        icon.addEventListener('click', () => {
            const productId = parseInt(icon.getAttribute('data-id'), 10);
            const cartItem = icon.closest('.cart-item');
            cartItem.classList.add('fade-out');
            setTimeout(() => {
                removeFromCart(productId);
            }, 500);
        });
    });

    // Ajouter des écouteurs pour les icônes "Commander"
    document.querySelectorAll('.order-btn').forEach(icon => {
        icon.addEventListener('click', () => {
            const productId = parseInt(icon.getAttribute('data-id'), 10);
            const vendorPhone = icon.getAttribute('data-vendor');
            const product = cart.find(item => item.id === productId);

            if (product) {
                const message = `Bonjour, je souhaite commander :\n` +
                                `Produit : ${product.name}\n` +
                                `Prix : ${product.price} FCFA\n` +
                                `Quantité : ${product.quantity}\n` +
                                `Lien : https://ryone.netlify.app/details.html?id=${product.id}\n`;

                const whatsappUrl = `https://wa.me/${vendorPhone}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');

                const cartItem = icon.closest('.cart-item');
                cartItem.classList.add('pulse');
                setTimeout(() => {
                    cartItem.classList.remove('pulse');
                }, 500);
            }
        });
    });

    // Ajouter un écouteur pour le bouton "Sélectionner tout"
    const selectAllCheckbox = document.getElementById('select-all');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', () => {
            const selectItemCheckboxes = document.querySelectorAll('.select-item');
            selectItemCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });
    }

    // Ajouter un écouteur pour le bouton "Supprimer les sélectionnés"
    const deleteSelectedBtn = document.getElementById('delete-selected');
    if (deleteSelectedBtn) {
        deleteSelectedBtn.addEventListener('click', () => {
            const selectItemCheckboxes = document.querySelectorAll('.select-item:checked');
            selectItemCheckboxes.forEach(checkbox => {
                const productId = parseInt(checkbox.getAttribute('data-id'), 10);
                const cartItem = checkbox.closest('.cart-item');
                cartItem.classList.add('fade-out');
                setTimeout(() => {
                    removeFromCart(productId);
                }, 500);
            });
        });
    }

    // Afficher le total initial
    updateCartTotal();

    // Afficher les produits recommandés
    const recommendedProducts = getRecommendedProducts();
    recommendedProducts.forEach(product => {
        const productCard = createProductCard(product);
        recommendedProductsContainer.appendChild(productCard);
    });

    // Afficher les produits en promotion dans la bannière
    const promotionProducts = getPromotionProducts();
    promotionProducts.forEach(product => {
        const productCard = createProductCard(product);
        promotionBannerContainer.appendChild(productCard);
    });

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

    // Ajouter des écouteurs pour les boutons "Voir plus" et "Continuer vos achats"
    const viewMoreBtn = document.getElementById('view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            window.location.href = 'produits.html';
        });
    }

    const continueShoppingBtn = document.getElementById('continue-shopping-btn');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            window.location.href = 'produits.html';
        });
    }

    // Correction de la gestion du bouton favoris
    const favoritesBtn = document.getElementById('favorites-btn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Empêcher le comportement par défaut
            console.log('Navigation vers les favoris'); // Pour le débogage
            window.location.href = './favoris.html'; 
        });
    } else {
        console.error('Le bouton favoris n\'a pas été trouvé'); // Pour le débogage
    }

    // Ajouter la fonctionnalité Commander tout
    const orderAllBtn = document.querySelector('.order-all-btn');
    if (orderAllBtn) {
        orderAllBtn.addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                alert('Votre panier est vide');
                return;
            }

            // Créer le message pour tous les produits
            let message = 'Bonjour, je souhaite commander les produits suivants :\n\n';
            cart.forEach(item => {
                message += `- ${item.name}\n`;
                message += `  Prix : ${item.price} FCFA\n`;
                message += `  Quantité : ${item.quantity}\n`;
                message += `  Lien : https://ryone.netlify.app/details.html?id=${item.id}\n\n`;
            });

            // Calculer le total
            const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            message += `\nTotal : ${total.toLocaleString()} FCFA`;

            // Utiliser le numéro du premier vendeur (vous pouvez adapter selon vos besoins)
            const firstItem = cart[0];
            if (firstItem && firstItem.vendorPhone) {
                const whatsappUrl = `https://wa.me/${firstItem.vendorPhone}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            } else {
                alert('Impossible de trouver les informations du vendeur');
            }
        });
    }
});

// Supprimer un produit du panier
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

// Fonction pour obtenir les produits recommandés
function getRecommendedProducts() {
    return products.filter(product => product.isTrending).slice(0, 6);
}

// Fonction pour obtenir les produits en promotion
function getPromotionProducts() {
    return products.filter(product => product.promotion && isPromotionValid(product.promotion)).slice(0, 6);
}

// Fonction pour vérifier si la promotion est toujours valide
function isPromotionValid(promotion) {
    const now = new Date();
    const endDate = new Date(promotion.endDate);
    return now < endDate;
}

// Fonction pour créer une carte de produit
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.images[0];
    image.alt = product.name;
    image.addEventListener('click', () => {
        window.location.href = `details.html?id=${product.id}`;
    });
    card.appendChild(image);

    const name = document.createElement('h3');
    name.textContent = product.name;
    card.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `Prix : ${product.price} Fcfa`;
    card.appendChild(price);

    const button = document.createElement('a');
    button.classList.add('btn-voir-produit');
    button.textContent = 'Voir le produit';
    button.href = `details.html?id=${product.id}`;
    card.appendChild(button);

    return card;
}

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
