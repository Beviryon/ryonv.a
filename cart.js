document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('#cart-items');
    const recommendedProductsContainer = document.querySelector('.recommended-products-carousel');
    const promotionBannerContainer = document.querySelector('.promotion-carousel');
    const trendingCarousel = document.querySelector('.trending-carousel');
    const bestSellersCarousel = document.querySelector('.best-sellers-carousel');

    // Afficher les produits dans le panier
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <input type="checkbox" class="select-item" data-id="${item.id}">
            <img src="${item.images[0]}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>Prix : ${item.price} Fcfa</p>
                <p>Quantité : ${item.quantity}</p>
                <i class="fas fa-trash remove-item" data-id="${item.id}"></i>
                <i class="fas fa-shopping-cart order-item" data-id="${item.id}" data-vendor="${item.vendorPhone}"></i>
                <a href="details.html?id=${item.id}" class="view-item-btn">Voir le produit</a>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Ajouter un écouteur d'événements pour rediriger vers la page de détails du produit
        const cartItemImage = cartItem.querySelector('.cart-item-image');
        cartItemImage.addEventListener('click', () => {
            window.location.href = `details.html?id=${item.id}`;
        });
    });

    // Ajouter des écouteurs pour les icônes "Supprimer"
    document.querySelectorAll('.remove-item').forEach(icon => {
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
    document.querySelectorAll('.order-item').forEach(icon => {
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

    // Afficher le total des produits dans le panier
    displayCartTotal();

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

// Afficher le total de tous les produits dans le panier
function displayCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total : ${total} Fcfa`;
    totalElement.classList.add('cart-total');
    document.querySelector('#cart-items').appendChild(totalElement);
}
