const DEFAULT_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTUwIDE1MCIgZmlsbD0ibm9uZSI+CiAgPHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNjY2NjY2MiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzMzMzMzMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiPlByb2R1aXQ8L3RleHQ+Cjwvc3ZnPg==";

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const itemsCountElement = document.getElementById('items-count');
    
    // Fonction pour regrouper les produits par vendeur
    function renderCartByVendors() {
        // Vider le conteneur
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            document.getElementById('empty-cart').classList.remove('hidden');
            document.getElementById('cart-items').classList.add('hidden');
            document.querySelector('.cart-header').classList.add('hidden');
            updateCartSummary(0, 0);
            return;
        }
        
        // Regrouper les produits par vendeur
        const vendorGroups = {};
        let totalAmount = 0;
        let totalItems = 0;
        
        cart.forEach(item => {
            // Extraction des informations du vendeur depuis l'objet seller du produit
            const vendorInfo = item.seller || {};
            const vendorName = vendorInfo.name || 'Vendeur inconnu';
            const vendorId = vendorInfo.id || vendorInfo.phone || vendorName;
            
            if (!vendorGroups[vendorId]) {
                vendorGroups[vendorId] = {
                    name: vendorName,
                    phone: vendorInfo.phone || '0123456789',
                    email: vendorInfo.email || '',
                    location: vendorInfo.location || '',
                    avatar: vendorInfo.avatar || '',
                    items: [],
                    subtotal: 0
                };
            }
            
            vendorGroups[vendorId].items.push(item);
            vendorGroups[vendorId].subtotal += item.price * item.quantity;
            totalAmount += item.price * item.quantity;
            totalItems += item.quantity;
        });
        
        // Créer un groupe pour chaque vendeur
        Object.keys(vendorGroups).forEach(vendorId => {
            const vendor = vendorGroups[vendorId];
            const vendorInitial = vendor.name.charAt(0).toUpperCase();
            
            // Créer le groupe vendeur
            const vendorGroup = document.createElement('div');
            vendorGroup.classList.add('vendor-group');
            
            // Créer l'en-tête du vendeur
            const vendorHeader = document.createElement('div');
            vendorHeader.classList.add('vendor-header');
            
            // Déterminer si nous utilisons une image de vendeur ou un avatar avec initiale
            const vendorAvatarHtml = vendor.avatar 
                ? `<img src="${vendor.avatar}" alt="${vendor.name}" class="vendor-avatar-img">` 
                : `<div class="vendor-avatar">${vendorInitial}</div>`;
            
            // Ajouter un badge indiquant le nombre d'articles
            const itemCount = vendor.items.reduce((total, item) => total + item.quantity, 0);
            const itemCountBadge = `<span class="item-count-badge">${itemCount} article${itemCount > 1 ? 's' : ''}</span>`;
            
            vendorHeader.innerHTML = `
                <div class="vendor-info">
                    ${vendorAvatarHtml}
                    <div class="vendor-details">
                        <div class="vendor-name">${vendor.name} ${itemCountBadge}</div>
                        ${vendor.location ? `<div class="vendor-location"><i class="fas fa-map-marker-alt"></i> ${vendor.location}</div>` : ''}
                        ${vendor.email ? `<div class="vendor-email"><i class="fas fa-envelope"></i> ${vendor.email}</div>` : ''}
                    </div>
                </div>
                <div class="vendor-actions">
                    <button class="vendor-checkout-btn" data-vendor="${vendor.phone}" data-vendor-name="${vendor.name}">
                        <i class="fas fa-comment"></i>
                        <span>Commander chez ${vendor.name}</span>
                    </button>
                </div>
            `;
            
            // Créer le conteneur des produits du vendeur
            const vendorItems = document.createElement('div');
            vendorItems.classList.add('vendor-items');
            
            // Ajouter les produits du vendeur
            vendor.items.forEach(item => {
                const cartItem = createCartItemElement(item, vendor.name);
                vendorItems.appendChild(cartItem);
            });
            
            // Ajouter le sous-total du vendeur
            const vendorSubtotal = document.createElement('div');
            vendorSubtotal.classList.add('vendor-subtotal');
            vendorSubtotal.innerHTML = `
                <span>Sous-total chez ${vendor.name}</span>
                <span class="vendor-subtotal-amount">${vendor.subtotal.toLocaleString()} Fcfa</span>
            `;
            
            // Assembler le groupe vendeur
            vendorGroup.appendChild(vendorHeader);
            vendorGroup.appendChild(vendorItems);
            vendorGroup.appendChild(vendorSubtotal);
            
            // Ajouter le groupe au panier
            cartItemsContainer.appendChild(vendorGroup);
            
            // Ajouter l'événement de commande au bouton du vendeur
            const checkoutBtn = vendorGroup.querySelector('.vendor-checkout-btn');
            checkoutBtn.addEventListener('click', () => {
                orderFromVendor(vendor);
            });
        });
        
        // Mettre à jour le récapitulatif du panier
        updateCartSummary(totalAmount, totalItems);
        
        // Mettre à jour le titre de la section des options de commande
        const checkoutOptionsTitle = document.querySelector('.checkout-options h3');
        if (checkoutOptionsTitle) {
            checkoutOptionsTitle.textContent = 'Options de commande par vendeur';
        }
        
        // Mettre à jour les boutons d'options de commande
        const orderAllBtn = document.getElementById('order-all-btn');
        if (orderAllBtn) {
            orderAllBtn.innerHTML = `
                <i class="fas fa-users"></i>
                <span>Commander auprès de chaque vendeur</span>
            `;
        }
    }
    
    // Fonction pour créer un élément d'article du panier
    function createCartItemElement(item, vendorName) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.setAttribute('data-id', item.id);
        
        const imageSrc = item.images && item.images.length > 0 
            ? item.images[0] 
            : "https://via.placeholder.com/150x150/cccccc/333333?text=Produit";
            
        cartItem.innerHTML = `
            <div class="item-select">
                <input type="checkbox" class="select-item" data-id="${item.id}">
                <span class="checkmark"></span>
            </div>
            <div class="item-image">
                <img src="${imageSrc}" alt="${item.name}">
                ${item.category ? `<span class="item-category">${item.category}</span>` : ''}
            </div>
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <div class="item-meta">
                    <span class="item-vendor">Par: <span class="vendor-name-highlight">${vendorName}</span></span>
                </div>
                <div class="item-price">${item.price.toLocaleString()} Fcfa</div>
                <div class="item-controls">
                    <div class="quantity-selector">
                        <button class="quantity-btn minus" data-id="${item.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item-actions">
                <button class="action-btn view-btn" data-id="${item.id}">
                    <i class="fas fa-eye"></i>
                    <span>Voir</span>
                </button>
                <button class="action-btn remove-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // Ajouter les écouteurs d'événements
        const minusBtn = cartItem.querySelector('.minus');
        const plusBtn = cartItem.querySelector('.plus');
        const removeBtn = cartItem.querySelector('.remove-btn');
        const viewBtn = cartItem.querySelector('.view-btn');
        
        minusBtn.addEventListener('click', () => updateQuantity(item.id, item.quantity - 1));
        plusBtn.addEventListener('click', () => updateQuantity(item.id, item.quantity + 1));
        removeBtn.addEventListener('click', () => removeFromCart(item.id));
        viewBtn.addEventListener('click', () => window.location.href = `details.html?id=${item.id}`);
        
        return cartItem;
    }
    
    // Fonction pour commander auprès d'un vendeur
    function orderFromVendor(vendor) {
        let message = `Bonjour ${vendor.name},\n\nJe souhaite commander les produits suivants :\n\n`;
        
        vendor.items.forEach(item => {
            message += `- ${item.name}\n`;
            message += `  Prix : ${item.price.toLocaleString()} Fcfa\n`;
            message += `  Quantité : ${item.quantity}\n\n`;
        });
        
        message += `Sous-total : ${vendor.subtotal.toLocaleString()} Fcfa\n\n`;
        message += `Merci,\nVotre client RYONV`;
        
        const whatsappUrl = `https://wa.me/${vendor.phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Mise à jour de la section des options de commande dans la récapitulation
    function updateCheckoutOptions() {
        const checkoutOptions = document.querySelector('.checkout-options');
        if (!checkoutOptions) return;
        
        // Récupérer les noms des vendeurs uniques
        const vendorNames = new Set();
        cart.forEach(item => {
            if (item.seller && item.seller.name) {
                vendorNames.add(item.seller.name);
            }
        });
        
        const vendorList = Array.from(vendorNames);
        
        // Mise à jour du texte pour le bouton de génération de liste
        const bulkOrderBtn = document.getElementById('bulk-order-btn');
        if (bulkOrderBtn && vendorList.length > 0) {
            bulkOrderBtn.innerHTML = `
                <i class="fas fa-list-check"></i>
                <span>Générer liste pour ${vendorList.length} vendeur${vendorList.length > 1 ? 's' : ''}</span>
            `;
            
            const description = bulkOrderBtn.nextElementSibling;
            if (description) {
                description.textContent = `Liste consolidée pour ${vendorList.join(', ')}`;
            }
        }
    }
    
    // Fonction pour mettre à jour la quantité d'un produit
    function updateQuantity(productId, newQuantity) {
        if (newQuantity < 1) return;
        
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            cart[itemIndex].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCartByVendors();
        }
    }
    
    // Fonction pour supprimer un produit du panier
    function removeFromCart(productId) {
        const itemElement = document.querySelector(`.cart-item[data-id="${productId}"]`);
        if (itemElement) {
            itemElement.classList.add('fade-out');
            
            setTimeout(() => {
                const updatedCart = cart.filter(item => item.id !== productId);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                location.reload();
            }, 300);
        }
    }
    
    // Fonction pour mettre à jour le récapitulatif du panier
    function updateCartSummary(total, count) {
        if (subtotalElement) subtotalElement.textContent = `${total.toLocaleString()} Fcfa`;
        if (totalElement) totalElement.textContent = `${total.toLocaleString()} Fcfa`;
        if (itemsCountElement) itemsCountElement.textContent = `${count} article${count > 1 ? 's' : ''}`;
        
        // Mettre à jour les options de commande
        updateCheckoutOptions();
    }
    
    // Initialiser l'affichage du panier par vendeur
    renderCartByVendors();
    
    // Reste du code pour gérer les boutons de commande et autres fonctionnalités...
});

// Fonction pour obtenir les produits recommandés
function getRecommendedProducts() {
    // Fallback si products n'est pas défini
    if (typeof products === 'undefined') {
        return []; // Retourne un tableau vide si products n'est pas défini
    }
    return products.filter(product => product.isTrending).slice(0, 6);
}

// Fonction pour obtenir les produits en promotion
function getPromotionProducts() {
    // Fallback si products n'est pas défini
    if (typeof products === 'undefined') {
        return []; // Retourne un tableau vide si products n'est pas défini
    }
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
