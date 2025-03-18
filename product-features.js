document.addEventListener('DOMContentLoaded', function() {
    // Correction pour toutes les images de la page
    function fixAllImages() {
        document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('data-error-handled')) {
                img.setAttribute('data-error-handled', 'true');
                img.addEventListener('error', function() {
                    const altText = this.alt || 'Image';
                    const encodedText = encodeURIComponent(altText.replace(/\s+/g, '+'));
                    this.src = `https://via.placeholder.com/300x300/cccccc/333333?text=${encodedText}`;
                });
            }
        });
    }
    
    // Appliquer la correction immédiatement et périodiquement pour les images chargées dynamiquement
    fixAllImages();
    setInterval(fixAllImages, 2000);
    
    // Fonctions utilitaires qui doivent être définies en premier
    
    // Fonction pour extraire le prix d'une chaîne
    function extractPrice(priceString) {
        if (!priceString) return 0;
        // Supprimer les espaces et remplacer les virgules par des points
        const cleanPrice = priceString.replace(/\s+/g, '').replace(/,/g, '');
        // Extraire les chiffres avec un regex
        const match = cleanPrice.match(/(\d+)/);
        return match ? parseInt(match[0], 10) : 0;
    }

    // Fonction utilitaire pour formater le prix
    function formatPrice(price) {
        return `${price.toLocaleString('fr-FR')} FCFA`;
    }
    
    // Fonction pour assurer que les produits sont disponibles
    function ensureProductsAvailable() {
        if (typeof products !== 'undefined' && products) {
            window.products = products;
            console.log("Les produits sont maintenant disponibles globalement:", window.products.length);
            return true;
        }
        
        // Si products n'est pas défini, essayer de le récupérer depuis localStorage
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            try {
                window.products = JSON.parse(storedProducts);
                console.log("Produits récupérés depuis le localStorage:", window.products.length);
                return true;
            } catch (e) {
                console.error("Erreur lors de la lecture des produits depuis localStorage:", e);
            }
        }
        
        // Créer un tableau de produits de démonstration comme dernier recours
        // Avec des images en ligne (placeholder) au lieu de chemins locaux
        window.products = [
            {
                id: 1,
                name: "Sac en perles",
                description: "Sac à main décoré avec des perles colorées",
                price: 25000,
                category: "Accessoires",
                images: ["https://via.placeholder.com/300x300/FFD700/000000?text=Sac+en+perles"],
                stock: 15,
                seller: { name: "Artisanat Congolais", country: "Congo" }
            },
            {
                id: 2,
                name: "Collier traditionnel",
                description: "Collier fait main avec des matériaux locaux",
                price: 15000,
                category: "Bijoux",
                images: ["https://via.placeholder.com/300x300/FF5733/FFFFFF?text=Collier+traditionnel"],
                stock: 8,
                seller: { name: "Artisanat Congolais", country: "Congo" }
            },
            {
                id: 3,
                name: "Bracelet en cuivre",
                description: "Bracelet en cuivre avec motifs traditionnels",
                price: 8000,
                category: "Bijoux",
                images: ["https://via.placeholder.com/300x300/C70039/FFFFFF?text=Bracelet+en+cuivre"],
                stock: 12,
                seller: { name: "Bijoux d'Afrique", country: "Congo" }
            },
            {
                id: 4,
                name: "Tenue traditionnelle",
                description: "Ensemble traditionnel fait à la main",
                price: 35000,
                category: "vetements",
                images: ["https://via.placeholder.com/300x300/900C3F/FFFFFF?text=Tenue+traditionnelle"],
                stock: 5,
                seller: { name: "Mode Africaine", country: "Congo" }
            }
        ];
        
        console.log("Produits de démonstration créés:", window.products.length);
        return false;
    }
    
    // Fonction pour afficher une alerte stylisée
    function showAlert(message, duration = 3000) {
        console.log("Message d'alerte:", message);
        
        // Supprimer toute alerte existante
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Créer une nouvelle alerte
        const alert = document.createElement('div');
        alert.className = 'custom-alert';
        alert.innerHTML = `
            <div class="alert-content">
                <i class="fas fa-check-circle"></i>
                <p>${message}</p>
            </div>
        `;
        
        // Styles pour l'alerte
        alert.style.position = 'fixed';
        alert.style.bottom = '20px';
        alert.style.left = '50%';
        alert.style.transform = 'translateX(-50%)';
        alert.style.background = 'rgba(0, 0, 0, 0.8)';
        alert.style.color = 'white';
        alert.style.padding = '15px 25px';
        alert.style.borderRadius = '30px';
        alert.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        alert.style.zIndex = '9999';
        alert.style.display = 'flex';
        alert.style.alignItems = 'center';
        alert.style.gap = '10px';
        alert.style.animation = 'fadeInUp 0.3s ease';
        
        // Ajouter au document
        document.body.appendChild(alert);
        
        // Supprimer après un délai
        setTimeout(() => {
            alert.style.animation = 'fadeOutDown 0.3s ease';
            setTimeout(() => {
                alert.remove();
            }, 300);
        }, duration);
        
        // Ajouter les keyframes pour les animations
        if (!document.querySelector('#alert-animations')) {
            const style = document.createElement('style');
            style.id = 'alert-animations';
            style.textContent = `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translate(-50%, 20px); }
                    to { opacity: 1; transform: translate(-50%, 0); }
                }
                @keyframes fadeOutDown {
                    from { opacity: 1; transform: translate(-50%, 0); }
                    to { opacity: 0; transform: translate(-50%, 20px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Créer une fonction addToCart si elle n'existe pas
    if (typeof window.addToCart !== 'function') {
        window.addToCart = function(product) {
            console.log("Fonction addToCart de secours appelée pour:", product.name);
            
            if (!product || !product.id) {
                console.error("Produit invalide:", product);
                return false;
            }
            
            try {
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const productIndex = cart.findIndex(item => item.id === product.id);

                if (productIndex !== -1) {
                    cart[productIndex].quantity += 1;
                } else {
                    // Créer une copie pour éviter les références
                    const productCopy = JSON.parse(JSON.stringify(product));
                    cart.push({ ...productCopy, quantity: 1 });
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Essayer de mettre à jour le compteur du panier
                try {
                    if (typeof updateCartCounter === 'function') {
                        updateCartCounter();
                    }
                } catch (e) {
                    console.error("Erreur lors de la mise à jour du compteur:", e);
                }
                
                showAlert('Produit ajouté au panier !', 3000);
                return true;
            } catch (e) {
                console.error("Erreur lors de l'ajout au panier:", e);
                return false;
            }
        };
        
        console.log("Fonction addToCart créée globalement");
    }
    
    // S'assurer que les produits sont disponibles avant tout
    ensureProductsAvailable();
    
    // 1. Fonctionnalité FAQ accordéon
    function initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Fermer les autres éléments ouverts
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Basculer l'état actif de l'élément cliqué
                item.classList.toggle('active');
            });
        });
    }
    
    // 2. Calcul des prix pour "Achetés fréquemment ensemble"
    function initBundleCalculator() {
        console.log("Initialisation du calculateur de bundle...");
        
        const bundleCheckboxes = document.querySelectorAll('.bundle-product input[type="checkbox"]');
        const totalPriceElement = document.querySelector('.total-price');
        const savingsElement = document.querySelector('.total-savings');
        const bundleContainer = document.querySelector('.bundle-container');
        
        if (!bundleCheckboxes.length) {
            console.log("Aucune case à cocher trouvée pour les produits groupés");
            return;
        }
        
        console.log("Nombre de cases à cocher trouvées:", bundleCheckboxes.length);
        
        // Trouver le prix du produit principal
        let mainProductPrice = 0;
        const mainPriceElement = document.querySelector('.main-product-price');
        
        if (mainPriceElement) {
            mainProductPrice = extractPrice(mainPriceElement.textContent);
            console.log("Prix extrait de l'élément:", mainProductPrice);
        } else {
            // Essayer de trouver le produit à partir de l'URL
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const productId = parseInt(urlParams.get('id'), 10);
                
                if (!isNaN(productId) && window.products) {
                    const mainProduct = window.products.find(p => p.id === productId);
                    if (mainProduct && mainProduct.price) {
                        mainProductPrice = mainProduct.price;
                        console.log("Prix trouvé à partir de l'ID de produit:", mainProductPrice);
                    }
                }
            } catch (e) {
                console.error("Erreur lors de la recherche du produit principal:", e);
            }
            
            // Si toujours pas de prix, utiliser une valeur par défaut
            if (mainProductPrice === 0) {
                mainProductPrice = 25000; // Valeur par défaut
                console.log("Utilisation du prix par défaut:", mainProductPrice);
            }
        }
        
        // Liste des produits du bundle avec leurs informations
        const bundleProducts = [];
        
        bundleCheckboxes.forEach(checkbox => {
            const productContainer = checkbox.closest('.bundle-product');
            if (productContainer) {
                let productId = productContainer.dataset.productId;
                if (productId) {
                    productId = parseInt(productId, 10);
                } else {
                    // Générer un ID temporaire si aucun n'est trouvé
                    productId = Math.floor(Math.random() * 10000) + 100;
                }
                
                const priceElement = productContainer.querySelector('.bundle-price');
                let productPrice = 0;
                
                if (priceElement) {
                    productPrice = extractPrice(priceElement.textContent);
                }
                
                const nameElement = productContainer.querySelector('.bundle-product-name');
                const productName = nameElement ? nameElement.textContent.trim() : "Produit complémentaire";
                
                // Trouver l'image si elle existe
                const imageElement = productContainer.querySelector('img');
                const productImage = imageElement ? imageElement.src : null;
                
                bundleProducts.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    images: productImage ? [productImage] : [],
                    element: productContainer,
                    checkbox: checkbox
                });
                
                console.log(`Produit bundle trouvé: ${productName}, ID: ${productId}, Prix: ${productPrice}`);
            }
        });
        
        function updateTotalPrice() {
            let totalPrice = mainProductPrice;
            let originalTotal = mainProductPrice;
            let checkedItems = 0;
            let selectedProducts = [];
            
            bundleCheckboxes.forEach((checkbox, index) => {
                if (checkbox.checked) {
                    const bundleProduct = bundleProducts[index];
                    if (bundleProduct) {
                        totalPrice += bundleProduct.price;
                        originalTotal += bundleProduct.price;
                        checkedItems++;
                        selectedProducts.push(bundleProduct);
                    }
                }
            });
            
            // Réduction en fonction du nombre d'éléments ajoutés
            let discount = 0;
            if (checkedItems === 1) discount = 2000;
            if (checkedItems >= 2) discount = 7000;
            
            const discountedTotal = totalPrice - discount;
            
            // Mettre à jour l'affichage
            if (totalPriceElement) {
                totalPriceElement.innerHTML = `${formatPrice(discountedTotal)} <span class="original-total">${formatPrice(originalTotal)}</span>`;
                
                // Stocker le prix total et les produits sélectionnés comme attributs de données
                totalPriceElement.dataset.totalPrice = discountedTotal;
                totalPriceElement.dataset.selectedProducts = JSON.stringify(selectedProducts.map(p => p.id));
            }
            
            if (savingsElement) {
                savingsElement.textContent = `Économisez ${formatPrice(discount)}`;
                savingsElement.style.color = discount > 0 ? '#4CAF50' : '#666';
                savingsElement.style.fontWeight = discount > 0 ? 'bold' : 'normal';
            }
        }
        
        // Créer le bouton d'ajout au panier s'il n'existe pas
        let addBundleToCartBtn = document.querySelector('.add-bundle-to-cart');
        
        if (!addBundleToCartBtn && bundleContainer) {
            console.log("Création d'un nouveau bouton d'ajout au panier");
            
            addBundleToCartBtn = document.createElement('button');
            addBundleToCartBtn.className = 'add-bundle-to-cart';
            addBundleToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Ajouter l\'ensemble au panier';
            
            // Styles pour le bouton
            addBundleToCartBtn.style.marginTop = '15px';
            addBundleToCartBtn.style.background = 'var(--primary, #F2AE01)';
            addBundleToCartBtn.style.color = 'white';
            addBundleToCartBtn.style.border = 'none';
            addBundleToCartBtn.style.borderRadius = '4px';
            addBundleToCartBtn.style.padding = '10px 15px';
            addBundleToCartBtn.style.cursor = 'pointer';
            addBundleToCartBtn.style.width = '100%';
            addBundleToCartBtn.style.fontWeight = 'bold';
            addBundleToCartBtn.style.transition = 'background-color 0.3s ease';
            
            bundleContainer.appendChild(addBundleToCartBtn);
        }
        
        // Configurer l'événement pour le bouton d'ajout au panier
        if (addBundleToCartBtn) {
            console.log("Configuration de l'événement pour le bouton d'ajout au panier");
            
            // Supprimer tous les écouteurs d'événements existants (pour éviter les doublons)
            const newBtn = addBundleToCartBtn.cloneNode(true);
            if (addBundleToCartBtn.parentNode) {
                addBundleToCartBtn.parentNode.replaceChild(newBtn, addBundleToCartBtn);
            }
            addBundleToCartBtn = newBtn;
            
            addBundleToCartBtn.addEventListener('click', function() {
                console.log("Clic sur ajouter le bundle au panier");
                
                // Récupérer le produit principal
                let mainProduct = null;
                try {
                    const urlParams = new URLSearchParams(window.location.search);
                    const productId = parseInt(urlParams.get('id'), 10);
                    
                    if (!isNaN(productId) && window.products) {
                        mainProduct = window.products.find(p => p.id === productId);
                    }
                } catch (e) {
                    console.error("Erreur lors de la récupération du produit principal:", e);
                }
                
                if (!mainProduct) {
                    console.log("Produit principal non trouvé, création d'un produit fictif");
                    
                    // Créer un produit fictif basé sur les éléments de la page
                    const productName = document.querySelector('h1') ? 
                        document.querySelector('h1').textContent : "Produit principal";
                    
                    const productImage = document.querySelector('.product-gallery img') ? 
                        document.querySelector('.product-gallery img').src : null;
                    
                    mainProduct = {
                        id: Date.now(), // ID unique basé sur le timestamp
                        name: productName,
                        price: mainProductPrice,
                        images: productImage ? [productImage] : []
                    };
                }
                
                // Ajouter le produit principal au panier
                window.addToCart(mainProduct);
                
                // Ajouter les produits sélectionnés
                let successCount = 1; // Commencer à 1 pour le produit principal
                
                bundleCheckboxes.forEach((checkbox, index) => {
                    if (checkbox.checked) {
                        const bundleProduct = bundleProducts[index];
                        if (bundleProduct) {
                            window.addToCart(bundleProduct);
                            successCount++;
                        }
                    }
                });
                
                // Afficher le message de succès
                if (successCount > 1) {
                    showAlert(`${successCount} produits ajoutés au panier`, 3000);
                } else {
                    showAlert('Produit ajouté au panier', 3000);
                }
                
                // Feedback visuel
                this.disabled = true;
                this.style.backgroundColor = '#4CAF50';
                this.innerHTML = '<i class="fas fa-check"></i> Produits ajoutés';
                
                setTimeout(() => {
                    this.disabled = false;
                    this.style.backgroundColor = 'var(--primary, #F2AE01)';
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i> Ajouter l\'ensemble au panier';
                }, 2000);
            });
        } else {
            console.error("Le bouton d'ajout au panier n'a pas pu être trouvé ou créé");
        }
        
        // Surveiller les changements sur les cases à cocher
        bundleCheckboxes.forEach(checkbox => {
            // Supprimer tous les écouteurs d'événements existants (pour éviter les doublons)
            const newCheckbox = checkbox.cloneNode(true);
            checkbox.parentNode.replaceChild(newCheckbox, checkbox);
            
            newCheckbox.addEventListener('change', updateTotalPrice);
        });
        
        // Calculer le prix initial
        updateTotalPrice();
        
        console.log("Initialisation du calculateur de bundle terminée");
    }
    
    // 3. Boutons de partage social
    function initSocialSharing() {
        const shareBtns = document.querySelectorAll('.share-btn');
        if (!shareBtns.length) return;
        
        const pageUrl = encodeURIComponent(window.location.href);
        const pageTitle = encodeURIComponent(document.title);
        
        shareBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (this.classList.contains('whatsapp')) {
                    window.open(`https://api.whatsapp.com/send?text=${pageTitle} ${pageUrl}`, '_blank');
                } else if (this.classList.contains('facebook')) {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, '_blank');
                } else if (this.classList.contains('twitter')) {
                    window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`, '_blank');
                } else if (this.classList.contains('copy-link')) {
                    navigator.clipboard.writeText(window.location.href)
                        .then(() => {
                            this.classList.add('copied');
                            this.innerHTML = '<i class="fas fa-check"></i>';
                            
                            setTimeout(() => {
                                this.classList.remove('copied');
                                this.innerHTML = '<i class="fas fa-link"></i>';
                            }, 2000);
                        })
                        .catch(err => {
                            console.error('Erreur lors de la copie du lien:', err);
                        });
                }
            });
        });
    }
    
    // 4. Animation des ventes récentes
    function initRecentSales() {
        const salesTicker = document.querySelector('.sales-ticker');
        if (!salesTicker) return;
        
        // Simuler des ventes récentes (remplacer par des données réelles)
        const recentSales = [
            { 
                buyer: 'Sophie K. de Brazzaville', 
                product: 'a acheté ce produit', 
                time: 'il y a 4 minutes' 
            },
            { 
                buyer: 'Ruth L. de Brazzaville', 
                product: 'a acheté ce produit', 
                time: 'il y a 27 minutes' 
            },
            { 
                buyer: 'Marie T. de Pointe-Noire', 
                product: 'a acheté ce produit', 
                time: 'il y a 53 minutes' 
            },
            { 
                buyer: 'Junior R. de Sibiti', 
                product: 'a acheté ce produit', 
                time: 'il y a 1 heure' 
            }
        ];
        
        // Afficher les ventes récentes
        salesTicker.innerHTML = '';
        recentSales.forEach((sale, index) => {
            const saleItem = document.createElement('div');
            saleItem.className = 'sale-item';
            saleItem.innerHTML = `
                <img src="./images/icons/profile.jpg" alt="Acheteur">
                <div class="sale-info">
                    <p class="buyer">${sale.buyer}</p>
                    <p class="product">${sale.product}</p>
                    <p class="time">${sale.time}</p>
                </div>
            `;
            
            saleItem.style.animationDelay = `${index * 0.3}s`;
            salesTicker.appendChild(saleItem);
        });
    }
    
    // 5. Système de comparaison de produits - Implémentation corrigée
    function initCompareProducts() {
        console.log("Redirection vers le système de comparaison principal (product-compare.js)");
        
        // Vérifier si le système principal est disponible
        if (typeof window.ProductCompare !== 'undefined' && typeof window.ProductCompare.init === 'function') {
            // Utiliser le système principal
            window.ProductCompare.init();
        } else {
            console.warn("Le système de comparaison principal n'est pas disponible. Chargez product-compare.js avant product-features.js.");
            
            // Tentative de chargement différé
            const script = document.createElement('script');
            script.src = './product-compare.js';
            script.onload = function() {
                console.log("Système de comparaison principal chargé avec succès");
                if (typeof window.ProductCompare !== 'undefined') {
                    window.ProductCompare.init();
                }
            };
            document.head.appendChild(script);
        }
        
        return true;
    }
    
    // 6. Animations d'entrée des éléments
    function initAnimations() {
        if (!('IntersectionObserver' in window)) {
            // Fallback pour les navigateurs qui ne prennent pas en charge IntersectionObserver
            console.log("IntersectionObserver n'est pas pris en charge, animations désactivées");
            return;
        }
        
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target); // Ne plus observer une fois animé
                }
            });
        }, {
            threshold: 0.1 // Déclencher l'animation lorsque 10% de l'élément est visible
        });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // 7. Gestion du panier et des produits fréquemment achetés ensemble
    function initShoppingCart() {
        // Assurez-vous que cette fonction existe car elle est mentionnée dans le code principal
        console.log("Initialisation de la gestion du panier...");
        
        // Si nécessaire, ajouter ici des fonctionnalités supplémentaires du panier
    }
    
    // Fonction utilitaire pour obtenir une URL d'image sécurisée
    function getSafeImageUrl(product, index = 0, defaultText = 'Produit') {
        if (product && product.images && Array.isArray(product.images) && product.images.length > index) {
            return product.images[index];
        }
        
        // Image par défaut basée sur le nom du produit ou le texte par défaut
        const productName = product && product.name ? product.name : defaultText;
        const encodedName = encodeURIComponent(productName.replace(/\s+/g, '+'));
        
        // Générer une couleur aléatoire
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        
        return `https://via.placeholder.com/300x300/${randomColor}/FFFFFF?text=${encodedName}`;
    }
    
    // Initialiser toutes les fonctionnalités
    initFaqAccordion();
    initBundleCalculator();
    initSocialSharing();
    initRecentSales();
    initCompareProducts();
    initAnimations();
    initShoppingCart();
    
    // Réinitialiser après un délai pour s'assurer que tout est bien chargé
    setTimeout(() => {
        console.log("Réinitialisation des fonctionnalités après délai...");
        
        // Réinitialiser le calculateur de bundle (où vous avez des problèmes)
        initBundleCalculator();
        
        // Et le système de comparaison (qui posait également problème)
        initCompareProducts();
        
        console.log("Réinitialisation terminée");
    }, 1000);
});