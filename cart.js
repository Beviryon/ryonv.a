const DEFAULT_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTUwIDE1MCIgZmlsbD0ibm9uZSI+CiAgPHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNjY2NjY2MiLz4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzMzMzMzMyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiPlByb2R1aXQ8L3RleHQ+Cjwvc3ZnPg==";

// Function to fix phone numbers by removing duplicate country code prefixes
function fixPhoneNumber(phoneNumber) {
    if (!phoneNumber) return phoneNumber;
    
    // Remove any spaces, dashes, etc.
    let cleaned = phoneNumber.toString().replace(/[\s\-\+\(\)\.]/g, '');
    
    // If it starts with 221, remove it and add back the + sign
    if (cleaned.startsWith('221')) {
        return '+' + cleaned.substring(3);
    }
    
    // If it starts with +221, remove the 221 part
    if (phoneNumber.startsWith('+221')) {
        return '+' + phoneNumber.substring(4);
    }
    
    return phoneNumber;
}

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
                        <i class="fab fa-whatsapp"></i>
                        <span>Commander par WhatsApp</span>
                    </button>
                    <button class="vendor-pdf-btn" data-vendor-id="${vendorId}">
                        <i class="fas fa-download"></i>
                        <span>Télécharger en PDF</span>
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
            
            // Ajouter l'événement de commande au bouton WhatsApp du vendeur
            const checkoutBtn = vendorGroup.querySelector('.vendor-checkout-btn');
            checkoutBtn.addEventListener('click', () => {
                // Récupérer le numéro de téléphone et le nom du vendeur depuis les attributs data
                const vendorPhone = checkoutBtn.getAttribute('data-vendor');
                const vendorName = checkoutBtn.getAttribute('data-vendor-name');
                console.log("Commander par WhatsApp chez:", vendorName, "au numéro:", vendorPhone);
                
                // Appeler la fonction avec les données du vendeur
                if (vendorPhone) {
                    orderFromVendor(vendorPhone, vendorName);
                } else {
                    orderFromVendor(vendor); // Fallback sur l'objet vendor complet
                }
            });
            
            // Ajouter l'événement de génération PDF au bouton correspondant
            const pdfBtn = vendorGroup.querySelector('.vendor-pdf-btn');
            pdfBtn.addEventListener('click', () => {
                generateOrderPDF(vendor);
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
                <img src="${imageSrc}" alt="${item.name}" class="product-image" data-id="${item.id}">
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
        const productImage = cartItem.querySelector('.product-image');
        
        minusBtn.addEventListener('click', () => updateQuantity(item.id, item.quantity - 1));
        plusBtn.addEventListener('click', () => updateQuantity(item.id, item.quantity + 1));
        removeBtn.addEventListener('click', () => removeFromCart(item.id));
        viewBtn.addEventListener('click', () => window.location.href = `details.html?id=${item.id}`);
        
        // Ajouter le gestionnaire d'événements pour l'image du produit
        if (productImage) {
            productImage.style.cursor = 'pointer'; // Ajouter un curseur pointer pour indiquer que l'image est cliquable
            productImage.addEventListener('click', () => window.location.href = `details.html?id=${item.id}`);
        }
        
        return cartItem;
    }
    
    // Fonction pour créer les informations communes de commande
    function createOrderInfo(vendor) {
        // Créer le numéro de référence et la date pour la commande
        const date = new Date();
        const formattedDate = date.toLocaleDateString('fr-FR');
        const reference = `RYONVA-${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
        
        // Stocker les informations de commande pour la page PDF
        sessionStorage.setItem('currentOrder', JSON.stringify({
            vendor: vendor,
            reference: reference,
            date: formattedDate
        }));
        
        return { reference, formattedDate };
    }
    
    // Fonction pour créer le message WhatsApp professionnel
    function createWhatsAppMessage(vendor, reference, formattedDate) {
        // Format du message très professionnel
        let message = `*BON DE COMMANDE RYON.A*\n`;
        message += `------------------------------------------\n`;
        message += `*RÉFÉRENCE:* ${reference}\n`;
        message += `*DATE:* ${formattedDate}\n`;
        // message += `*CLIENT:* RYONV\n`;
        message += `------------------------------------------\n\n`;
        
        // message += `Cher/Chère *${vendor.name}*,\n\n`;
        // message += `Suite à notre intérêt pour vos produits, nous souhaitons formaliser une commande pour les articles suivants:\n\n`;
        
        // Détails des articles avec prix unitaire, prix total par article et image
        let articleCount = 1;
        vendor.items.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            
            message += `*ARTICLE ${articleCount}:* ${item.name}\n`;
            message += `• Référence: ART-${articleCount}-${reference.substring(reference.length-6)}\n`;
            message += `• Prix unitaire: *${item.price.toLocaleString()} FCFA*\n`;
            message += `• Quantité: *${item.quantity}*\n`;
            message += `• Sous-total: *${itemTotal.toLocaleString()} FCFA*\n`;
            
            // Ajouter le lien de l'image si disponible
            if (item.images && item.images.length > 0) {
                message += `• Lien image: ${item.images[0]}\n`;
            }
            
            message += `------------------------------------------\n\n`;
            articleCount++;
        });
        
        // Récapitulatif financier
        message += `*RÉCAPITULATIF DE LA COMMANDE*\n`;
        message += `------------------------------------------\n`;
        message += `• Nombre d'articles: *${vendor.items.reduce((total, item) => total + item.quantity, 0)}*\n`;
        message += `• Total HT: *${vendor.subtotal.toLocaleString()} FCFA*\n`;
        message += `• TOTAL TTC: *${vendor.subtotal.toLocaleString()} FCFA*\n`;
        message += `------------------------------------------\n\n`;
        
        // Informations complémentaires
        // message += `*INFORMATIONS COMPLÉMENTAIRES*\n`;
        // message += `Nous souhaiterions discuter des modalités suivantes:\n`;
        // message += `• Options de livraison disponibles\n`;
        // message += `• Délais de livraison estimés\n`;
        // message += `• Modes de paiement acceptés\n`;
        // message += `• Conditions de garantie\n\n`;
        
        // message += `Dans l'attente de votre retour, nous vous prions d'agréer l'expression de nos salutations distinguées.\n\n`;
        
        message += `Cordialement,\n`;
        message += `*Service Commandes RYONV*\n\n`;
        
        message += `_Document généré automatiquement via la plateforme RYONV.A_\n`;
        message += `_www.ryonv.com_`;
        
        return message;
    }
    
    // Fonction pour commander auprès d'un vendeur (WhatsApp uniquement)
    function orderFromVendor(vendor, vendorName) {
        // Vérifier si nous avons reçu un objet vendor complet ou juste le numéro de téléphone et le nom
        if (typeof vendor === 'string' || !vendor.items) {
            // Si c'est juste un numéro, nous devons récupérer le vendeur complet
            const vendorPhone = typeof vendor === 'string' ? vendor : vendor.phone;
            const vendorName = typeof vendor === 'string' ? arguments[1] : vendor.name;
            
            // Chercher le vendeur dans les groupes de vendeurs
            const vendorGroups = {};
            cart.forEach(item => {
                const vendorInfo = item.seller || {};
                const vName = vendorInfo.name || 'Vendeur inconnu';
                const vId = vendorInfo.id || vendorInfo.phone || vName;
                
                if (!vendorGroups[vId]) {
                    vendorGroups[vId] = {
                        name: vName,
                        phone: vendorInfo.phone || '0123456789',
                        email: vendorInfo.email || '',
                        location: vendorInfo.location || '',
                        avatar: vendorInfo.avatar || '',
                        items: [],
                        subtotal: 0
                    };
                }
                
                if (vendorInfo.phone === vendorPhone || vName === vendorName) {
                    vendorGroups[vId].items.push(item);
                    vendorGroups[vId].subtotal += item.price * item.quantity;
                }
            });
            
            // Utiliser le premier vendeur trouvé
            const vendorId = Object.keys(vendorGroups).find(id => {
                return vendorGroups[id].phone === vendorPhone || vendorGroups[id].name === vendorName;
            });
            
            if (vendorId) {
                vendor = vendorGroups[vendorId];
            } else {
                console.error("Vendeur non trouvé:", vendorPhone, vendorName);
                alert("Impossible de trouver les informations du vendeur. Veuillez réessayer.");
                return;
            }
        }
        
        // Créer les informations de commande
        const { reference, formattedDate } = createOrderInfo(vendor);
        
        // Générer le message WhatsApp
        const message = createWhatsAppMessage(vendor, reference, formattedDate);
        
        // Formater correctement le numéro de téléphone pour WhatsApp
        let phoneNumber = vendor.phone ? vendor.phone.toString().replace(/[\s\-\+\(\)\.]/g, '') : '';
        
        // Fix the phone number to avoid duplicate country codes
        phoneNumber = fixPhoneNumber(vendor.phone);
        
        // S'assurer que le numéro commence par le code pays
        // if (phoneNumber && !phoneNumber.startsWith('221') && !phoneNumber.startsWith('00') && !phoneNumber.startsWith('011')) {
        //     if (phoneNumber.startsWith('0')) {
        //         phoneNumber = '221' + phoneNumber.substring(1);
        //     } else {
        //         phoneNumber = '221' + phoneNumber;
        //     }
        // }
        
        // Vérifier si le numéro est valide
        if (!phoneNumber || phoneNumber === '') {
            console.error("Numéro de téléphone du vendeur invalide:", vendor);
            alert("Le numéro de téléphone du vendeur est invalide. Veuillez réessayer avec un autre vendeur.");
            return;
        }
        
        // Ouvrir WhatsApp avec le message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        console.log("Ouverture de WhatsApp avec URL:", whatsappUrl);
        window.open(whatsappUrl, '_blank');
    }
    
    // Fonction pour générer uniquement le bon de commande PDF
    function generateOrderPDF(vendor) {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('fr-FR');
        const reference = `RYONVA-${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
        
        // Stocker les informations de commande pour la page de résumé
        sessionStorage.setItem('currentOrder', JSON.stringify({
            vendor: vendor,
            reference: reference,
            date: formattedDate
        }));

        // Ouvrir la page de résumé pour télécharger le PDF
        window.open('./order-summary.html', '_blank');
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
    
    // Gérer le bouton d'achat auprès de tous les vendeurs
    const orderAllBtn = document.getElementById('order-all-btn');
    if (orderAllBtn) {
        orderAllBtn.addEventListener('click', () => {
            // Regrouper les produits par vendeur
            const vendorGroups = {};
            
            cart.forEach(item => {
                // Extraction des informations du vendeur
                const vendorInfo = item.seller || {};
                const vendorId = vendorInfo.id || vendorInfo.phone || vendorInfo.name || 'Vendeur inconnu';
                
                if (!vendorGroups[vendorId]) {
                    vendorGroups[vendorId] = {
                        name: vendorInfo.name || 'Vendeur inconnu',
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
            });
            
            // Pour chaque vendeur, générer une commande
            const vendorIds = Object.keys(vendorGroups);
            if (vendorIds.length > 0) {
                // Commencer par le premier vendeur
                orderFromVendor(vendorGroups[vendorIds[0]]);
                
                // Informer l'utilisateur s'il y a plusieurs vendeurs
                if (vendorIds.length > 1) {
                    setTimeout(() => {
                        alert(`Vous avez des produits de ${vendorIds.length} vendeurs. Après avoir terminé avec le premier vendeur, revenez pour contacter les autres.`);
                    }, 1000);
                }
            } else {
                alert('Aucun produit dans votre panier.');
            }
        });
    }
    
    // Gérer le bouton de génération de liste consolidée
    const bulkOrderBtn = document.getElementById('bulk-order-btn');
    if (bulkOrderBtn) {
        bulkOrderBtn.addEventListener('click', () => {
            // Stocker toutes les informations de commande pour tous les vendeurs
            const vendorGroups = {};
            
            cart.forEach(item => {
                const vendorInfo = item.seller || {};
                const vendorId = vendorInfo.id || vendorInfo.phone || vendorInfo.name || 'Vendeur inconnu';
                
                if (!vendorGroups[vendorId]) {
                    vendorGroups[vendorId] = {
                        name: vendorInfo.name || 'Vendeur inconnu',
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
            });
            
            // Stocker la liste complète des vendeurs pour la page de résumé
            const date = new Date();
            const formattedDate = date.toLocaleDateString('fr-FR');
            const reference = `RYONVA-MULTI-${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
            
            sessionStorage.setItem('bulkOrder', JSON.stringify({
                vendors: Object.values(vendorGroups),
                reference: reference,
                date: formattedDate
            }));
            
            // Ouvrir la page de liste consolidée
            window.open('./vendor-list.html', '_blank');
        });
    }
    
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