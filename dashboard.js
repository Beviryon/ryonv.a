// Éléments DOM
const productsGrid = document.getElementById('productsGrid');
const addProductBtn = document.getElementById('addProductBtn');
const productModal = document.getElementById('productModal');
const productForm = document.getElementById('productForm');
const closeModal = document.querySelector('.close-modal');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.querySelector('.search-bar input');

// État global
let products = [];
let categories = new Set();

// Charger les produits depuis le fichier JS
async function loadProducts() {
    try {
        // Essayer de charger depuis le localStorage d'abord
        const savedProducts = localStorage.getItem('desloProducts');
        if (savedProducts) {
            products = JSON.parse(savedProducts);
            console.log('Produits chargés depuis le localStorage:', products.length, 'produits');
            categories.clear();
            products.forEach(product => {
                if (product.category) {
                    categories.add(product.category);
                }
            });
            renderProducts();
            populateCategories();
            updateStatistics();
            updateSellerTable();
            return;
        }

        // Si pas de données dans le localStorage, charger depuis le fichier JS
        // Définir des produits par défaut au cas où le chargement échoue
        products = [
            {
                id: 1,
                name: "Exemple de produit",
                description: "Produit par défaut",
                price: 0,
                category: 'divers',
                salesType: 'retail',
                images: [],
                seller: {
                    name: 'RYONV',
                    phone: '',
                    country: 'FR',
                    rating: 0
                },
                stock: 0,
                rating: 0,
                isBestSeller: false
            }
        ];

        // Essayer d'abord le chemin relatif
        let response = await fetch('./products.js');
        if (!response.ok) {
            // Si ça ne marche pas, essayer le chemin absolu
            response = await fetch('/desloSite/products.js');
        }
        
        if (!response.ok) {
            throw new Error('Impossible de charger le fichier products.js');
        }

        const data = await response.text();
        
        try {
            // Extraire uniquement la définition du tableau products
            const match = data.match(/const\s+products\s*=\s*(\[[\s\S]*?\]);/);
            if (!match) {
                throw new Error('Format de fichier products.js invalide');
            }

            // Créer une fonction pour évaluer uniquement le tableau
            const evalFn = new Function(`
                const products = ${match[1]};
                return products;
            `);

            const tempProducts = evalFn();

            if (Array.isArray(tempProducts) && tempProducts.length > 0) {
                // Nettoyer et valider chaque produit
                products = tempProducts.map(product => ({
                    id: Number(product.id) || Date.now(),
                    name: String(product.name || ''),
                    description: String(product.description || ''),
                    price: Number(product.price) || 0,
                    category: String(product.category || ''),
                    salesType: String(product.salesType || 'retail'),
                    images: Array.isArray(product.images) ? product.images.filter(url => url && typeof url === 'string') : [],
                    seller: {
                        name: String(product.seller?.name || ''),
                        phone: String(product.seller?.phone || ''),
                        country: String(product.seller?.country || ''),
                        rating: Number(product.seller?.rating) || 0
                    },
                    promotion: product.promotion ? {
                        discount: Number(product.promotion.discount) || 0,
                        endDate: String(product.promotion.endDate || '')
                    } : null,
                    stock: Number(product.stock) || 0,
                    rating: Number(product.rating) || 0,
                    isBestSeller: Boolean(product.isBestSeller)
                }));

                console.log('Produits chargés avec succès:', products.length, 'produits');
            } else {
                console.warn('Aucun produit trouvé dans le fichier');
            }
            
            // Extraire les catégories uniques
            categories.clear();
            products.forEach(product => {
                if (product.category) {
                    categories.add(product.category);
                }
            });
            
            renderProducts();
            populateCategories();
            updateStatistics();
            updateSellerTable();
        } catch (parseError) {
            console.error('Erreur lors du parsing des produits:', parseError);
            // Continuer avec les produits par défaut
            renderProducts();
            populateCategories();
            updateStatistics();
            updateSellerTable();
        }
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
        // Continuer avec les produits par défaut
        renderProducts();
        populateCategories();
        updateStatistics();
        updateSellerTable();
    }
}

// Rendre les produits dans la grille
function renderProducts(filteredProducts = products) {
    productsGrid.innerHTML = '';
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">Aucun produit trouvé</div>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Créer une carte de produit
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // S'assurer que les images sont un tableau et contiennent des URLs valides
    const images = Array.isArray(product.images) ? product.images : [];
    const imageUrl = images.length > 0 ? images[0] : null;
    
    const defaultImage = `data:image/svg+xml,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#f0f0f0"/>
            <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#666" text-anchor="middle" dy=".3em">
                Aucune image
            </text>
        </svg>
    `)}`;
    
    // Formater le prix avec FCFA
    const formattedPrice = `${product.price.toLocaleString()}FCFA`;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${imageUrl || defaultImage}" 
                 alt="${product.name}" 
                 onerror="this.src='${defaultImage}'">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">${formattedPrice}</p>
            <p class="category">${product.category || 'Non catégorisé'}</p>
            <div class="product-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Remplir le filtre de catégories
function populateCategories() {
    categoryFilter.innerHTML = '<option value="">Toutes les catégories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Filtrer les produits
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortBy = sortFilter.value;

    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Trier les produits
    filtered.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price':
                return a.price - b.price;
            case 'date':
                return new Date(b.dateAdded) - new Date(a.dateAdded);
            default:
                return 0;
        }
    });

    renderProducts(filtered);
}

// Ajouter un nouveau produit
function addProduct(productData) {
    const newProduct = {
        id: Date.now(),
        ...productData,
        dateAdded: new Date().toISOString()
    };
        products.push(newProduct);
    if (productData.category) {
        categories.add(productData.category);
        populateCategories();
    }
    renderProducts();
    saveProducts();
    updateStatistics();
    updateSellerTable();
}

// Modifier un produit
function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        // Remplir le formulaire avec les données du produit
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('salesType').value = product.salesType;

        // Afficher le modal
        productModal.style.display = 'block';
        productForm.dataset.editId = id;
    }
}

// Supprimer un produit
function deleteProduct(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        products = products.filter(p => p.id !== id);
        renderProducts();
        saveProducts();
        updateStatistics();
        updateSellerTable();
    }
}

// Sauvegarder les produits dans le localStorage
function saveProducts() {
    try {
        localStorage.setItem('desloProducts', JSON.stringify(products));
        console.log('Produits sauvegardés avec succès dans le localStorage');
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
        alert('Erreur lors de la sauvegarde des produits');
    }
}

// Gestionnaires d'événements
addProductBtn.addEventListener('click', () => {
    productForm.reset();
    productForm.dataset.editId = '';
    productModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
});

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(productForm);
    const productData = {
        name: formData.get('productName'),
        price: parseFloat(formData.get('productPrice')),
        category: formData.get('productCategory'),
        description: formData.get('productDescription'),
        salesType: formData.get('salesType'),
        images: [] // Gérer l'upload d'images ici
    };

    // Créer une prévisualisation
    const previewCard = createProductCard({
        ...productData,
        id: Date.now()
    });

    // Créer un modal de prévisualisation
    const previewModal = document.createElement('div');
    previewModal.className = 'modal preview-modal';
    previewModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Prévisualisation du produit</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="preview-content">
                ${previewCard.outerHTML}
            </div>
            <div class="preview-actions">
                <button class="btn-cancel">Annuler</button>
                <button class="btn-confirm">Confirmer</button>
            </div>
        </div>
    `;

    document.body.appendChild(previewModal);
    previewModal.style.display = 'block';

    // Gérer les boutons de la prévisualisation
    const closeBtn = previewModal.querySelector('.close-modal');
    const cancelBtn = previewModal.querySelector('.btn-cancel');
    const confirmBtn = previewModal.querySelector('.btn-confirm');

    const closePreview = () => {
        previewModal.remove();
    };

    closeBtn.onclick = closePreview;
    cancelBtn.onclick = closePreview;

    confirmBtn.onclick = () => {
        const editId = productForm.dataset.editId;
        if (editId) {
            // Modifier le produit existant
            const index = products.findIndex(p => p.id === parseInt(editId));
            if (index !== -1) {
                products[index] = { ...products[index], ...productData };
            }
        } else {
            // Ajouter un nouveau produit
            addProduct(productData);
        }

        productModal.style.display = 'none';
        closePreview();
        renderProducts();
        saveProducts();
    };
});

// Filtres et recherche
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
sortFilter.addEventListener('change', filterProducts);

// Fonction pour convertir les produits en CSV
function convertToCSV(products) {
    // Définir les en-têtes du CSV
    const headers = [
        'ID',
        'Nom',
        'Prix',
        'Catégorie',
        'Type de vente',
        'Description',
        'Stock',
        'Note',
        'Meilleure vente',
        'Vendeur',
        'Téléphone vendeur',
        'Pays vendeur',
        'Note vendeur',
        'Images',
        'Date de modification'
    ];

    // Créer la ligne d'en-tête
    let csv = headers.join(',') + '\n';

    // Ajouter chaque produit
    products.forEach(product => {
        const row = [
            product.id,
            `"${product.name.replace(/"/g, '""')}"`,
            product.price,
            `"${product.category || ''}"`,
            product.salesType,
            `"${(product.description || '').replace(/"/g, '""')}"`,
            product.stock,
            product.rating,
            product.isBestSeller ? 'Oui' : 'Non',
            `"${product.seller?.name || ''}"`,
            `"${product.seller?.phone || ''}"`,
            product.seller?.country || '',
            product.seller?.rating || 0,
            `"${Array.isArray(product.images) ? product.images.join('; ') : ''}"`,
            new Date().toISOString()
        ];
        csv += row.join(',') + '\n';
    });

    return csv;
}

// Fonction pour télécharger le CSV
function downloadProductsCSV() {
    const csv = convertToCSV(products);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const date = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    
    link.href = URL.createObjectURL(blob);
    link.download = `produits_deslo_${date}.csv`;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Ajouter le bouton d'export dans le HTML
const exportButton = document.createElement('button');
exportButton.id = 'exportCSV';
exportButton.className = 'btn-export';
exportButton.innerHTML = '<i class="fas fa-download"></i> Exporter CSV';
exportButton.onclick = downloadProductsCSV;

// Insérer le bouton après le bouton d'ajout de produit
addProductBtn.parentNode.insertBefore(exportButton, addProductBtn.nextSibling);

// Ajouter le style pour le bouton d'export
const style = document.createElement('style');
style.textContent = `
    .btn-export {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: background-color 0.3s;
    }
    .btn-export:hover {
        background-color: #218838;
    }
    .btn-export i {
        font-size: 16px;
    }
`;
document.head.appendChild(style);

// Fonction pour télécharger en PDF
function downloadProductsPDF() {
    // Créer un nouveau document PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Ajouter le titre
    doc.setFontSize(18);
    doc.text('Liste des Produits RYONV.A', 14, 20);
    doc.setFontSize(11);
    doc.text(`Exporté le ${new Date().toLocaleDateString()}`, 14, 30);

    // Préparer les données pour le tableau
    const headers = [
        ['ID', 'Nom', 'Prix (FCFA)', 'Catégorie', 'Type', 'Stock', 'Note']
    ];

    const data = products.map(product => [
        product.id,
        product.name,
        product.price.toLocaleString(),
        product.category || '',
        product.salesType,
        product.stock,
        product.rating
    ]);

    // Générer le tableau
    doc.autoTable({
        head: headers,
        body: data,
        startY: 35,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [40, 84, 148] },
        alternateRowStyles: { fillColor: [245, 245, 245] },
        margin: { top: 35 }
    });

    // Ajouter les détails des produits
    let yPos = doc.lastAutoTable.finalY + 20;
    
    products.forEach((product, index) => {
        if (yPos > 250) { // Nouvelle page si pas assez d'espace
            doc.addPage();
            yPos = 20;
        }

        doc.setFontSize(10);
        doc.setFont(undefined, 'bold');
        doc.text(`Détails du produit: ${product.name}`, 14, yPos);
        
        doc.setFont(undefined, 'normal');
        doc.setFontSize(8);
        yPos += 7;
        
        if (product.description) {
            doc.text(`Description: ${product.description}`, 14, yPos);
            yPos += 5;
        }
        
        if (product.seller) {
            doc.text(`Vendeur: ${product.seller.name} (${product.seller.country})`, 14, yPos);
            yPos += 5;
            if (product.seller.phone) {
                doc.text(`Contact: ${product.seller.phone}`, 14, yPos);
                yPos += 5;
            }
        }
        
        if (product.images && product.images.length > 0) {
            doc.text(`Images: ${product.images.length} image(s)`, 14, yPos);
            yPos += 5;
        }
        
        yPos += 10; // Espace entre les produits
    });

    // Télécharger le PDF
    const date = new Date().toISOString().split('T')[0];
    doc.save(`produits_ryonv_${date}.pdf`);
}

// Ajouter le bouton d'export PDF
const exportPDFButton = document.createElement('button');
exportPDFButton.id = 'exportPDF';
exportPDFButton.className = 'btn-export btn-export-pdf';
exportPDFButton.innerHTML = '<i class="fas fa-file-pdf"></i> Exporter PDF';
exportPDFButton.onclick = downloadProductsPDF;

// Insérer le bouton après le bouton d'export CSV
exportButton.parentNode.insertBefore(exportPDFButton, exportButton.nextSibling);

// Ajouter le style pour le bouton PDF
const pdfStyle = document.createElement('style');
pdfStyle.textContent = `
    .btn-export-pdf {
        background-color: #dc3545;
    }
    .btn-export-pdf:hover {
        background-color: #c82333;
    }
`;
document.head.appendChild(pdfStyle);

// Fonction pour mettre à jour les statistiques
function updateStatistics() {
    updateBasicStats();
    updateSellerStats();
    updateCharts();
}

// Statistiques de base
function updateBasicStats() {
    // Total des produits
    document.getElementById('totalProducts').textContent = products.length;

    // Total des catégories
    document.getElementById('totalCategories').textContent = categories.size;

    // Valeur totale
    const totalValue = products.reduce((sum, product) => sum + product.price, 0);
    document.getElementById('totalValue').textContent = `${totalValue.toLocaleString()} FCFA`;

    // Nombre de vendeurs uniques
    const uniqueSellers = new Set(products.map(p => p.seller?.name)).size;
    document.getElementById('totalSellers').textContent = uniqueSellers;
}

// Statistiques des vendeurs
function updateSellerStats() {
    // Collecter les données des vendeurs
    const sellerStats = {};
    products.forEach(product => {
        if (product.seller?.name) {
            if (!sellerStats[product.seller.name]) {
                sellerStats[product.seller.name] = {
                    productCount: 0,
                    totalValue: 0,
                    rating: product.seller.rating || 0,
                    country: product.seller.country
                };
            }
            sellerStats[product.seller.name].productCount++;
            sellerStats[product.seller.name].totalValue += product.price;
        }
    });

    // Meilleur vendeur
    const bestSeller = Object.entries(sellerStats)
        .sort((a, b) => b[1].productCount - a[1].productCount)[0];
    
    if (bestSeller) {
        document.getElementById('bestSeller').textContent = bestSeller[0];
        document.getElementById('bestSellerProducts').textContent = 
            `${bestSeller[1].productCount} produits - ${bestSeller[1].totalValue.toLocaleString()} FCFA`;
    }

    // Note moyenne des vendeurs
    const ratings = Object.values(sellerStats).map(s => s.rating);
    const avgRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length || 0;
    document.getElementById('avgSellerRating').textContent = avgRating.toFixed(1);

    // Nombre de pays
    const countries = new Set(Object.values(sellerStats).map(s => s.country));
    document.getElementById('totalCountries').textContent = countries.size;
}

// Fonction pour mettre à jour les graphiques
function updateCharts() {
    updateCategoryChart();
    updatePriceChart();
    updateSellerChart();
    updateSalesTypeChart();
}

// Graphique des catégories
function updateCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    
    // Compter les produits par catégorie
    const categoryData = {};
    products.forEach(product => {
        const category = product.category || 'Non catégorisé';
        categoryData[category] = (categoryData[category] || 0) + 1;
    });

    // Détruire le graphique existant s'il y en a un
    if (window.categoryChart instanceof Chart) {
        window.categoryChart.destroy();
    }

    // Créer le nouveau graphique
    window.categoryChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                data: Object.values(categoryData),
                backgroundColor: [
                    '#4CAF50', '#2196F3', '#FFC107', '#F44336',
                    '#9C27B0', '#00BCD4', '#FF9800', '#795548'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// Graphique des prix
function updatePriceChart() {
    const ctx = document.getElementById('priceChart');
    
    // Créer des tranches de prix
    const priceRanges = {
        '0-5000': 0,
        '5000-10000': 0,
        '10000-50000': 0,
        '50000+': 0
    };

    products.forEach(product => {
        if (product.price <= 5000) priceRanges['0-5000']++;
        else if (product.price <= 10000) priceRanges['5000-10000']++;
        else if (product.price <= 50000) priceRanges['10000-50000']++;
        else priceRanges['50000+']++;
    });

    // Détruire le graphique existant s'il y en a un
    if (window.priceChart instanceof Chart) {
        window.priceChart.destroy();
    }

    // Créer le nouveau graphique
    window.priceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(priceRanges),
            datasets: [{
                label: 'Nombre de produits',
                data: Object.values(priceRanges),
                backgroundColor: '#4CAF50'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Graphique des meilleurs vendeurs
function updateSellerChart() {
    const ctx = document.getElementById('sellerChart');
    
    // Compter les produits par vendeur
    const sellerData = {};
    products.forEach(product => {
        if (product.seller?.name) {
            sellerData[product.seller.name] = (sellerData[product.seller.name] || 0) + 1;
        }
    });

    // Prendre les 5 meilleurs vendeurs
    const topSellers = Object.entries(sellerData)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    // Détruire le graphique existant s'il y en a un
    if (window.sellerChart instanceof Chart) {
        window.sellerChart.destroy();
    }

    // Créer le nouveau graphique
    window.sellerChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topSellers.map(s => s[0]),
            datasets: [{
                label: 'Nombre de produits',
                data: topSellers.map(s => s[1]),
                backgroundColor: '#2196F3'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Graphique des types de vente
function updateSalesTypeChart() {
    const ctx = document.getElementById('salesTypeChart');
    
    // Compter les produits par type de vente
    const salesTypeData = {
        'retail': 0,
        'wholesale': 0
    };
    
    products.forEach(product => {
        if (product.salesType) {
            salesTypeData[product.salesType]++;
        }
    });

    // Détruire le graphique existant s'il y en a un
    if (window.salesTypeChart instanceof Chart) {
        window.salesTypeChart.destroy();
    }

    // Créer le nouveau graphique
    window.salesTypeChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Détail', 'Gros'],
            datasets: [{
                data: [salesTypeData.retail, salesTypeData.wholesale],
                backgroundColor: ['#4CAF50', '#FFC107']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Ajouter des gestionnaires d'événements pour la navigation
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Masquer toutes les sections
        document.querySelectorAll('.dashboard-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Afficher la section ciblée
        document.getElementById(targetId).style.display = 'block';
        
        // Mettre à jour la classe active
        document.querySelectorAll('.sidebar-nav li').forEach(li => {
            li.classList.remove('active');
        });
        link.parentElement.classList.add('active');
    });
});

// Afficher la section produits par défaut
document.getElementById('products').style.display = 'block';
document.getElementById('stats').style.display = 'none';

// Initialisation
loadProducts();

// Function to update seller table
function updateSellerTable() {
    const tableBody = document.querySelector('.seller-table tbody');
    if (!tableBody) return;

    // Get seller statistics
    const sellerStats = {};
    products.forEach(product => {
        if (!product.seller || !product.seller.name) return;
        
        if (!sellerStats[product.seller.name]) {
            sellerStats[product.seller.name] = {
                name: product.seller.name,
                products: 0,
                totalValue: 0,
                rating: product.seller.rating || 0,
                country: product.seller.country || 'N/A',
                phone: product.seller.phone || 'N/A'
            };
        }
        sellerStats[product.seller.name].products++;
        sellerStats[product.seller.name].totalValue += parseFloat(product.price) || 0;
    });

    // Convert to array for sorting
    let sellerArray = Object.values(sellerStats);

    // Get current sort option
    const sortSelect = document.getElementById('sellerSort');
    const sortBy = sortSelect ? sortSelect.value : 'products';

    // Sort sellers
    sellerArray.sort((a, b) => {
        switch (sortBy) {
            case 'products':
                return b.products - a.products;
            case 'value':
                return b.totalValue - a.totalValue;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return b.products - a.products;
        }
    });

    // Get search term
    const searchInput = document.getElementById('sellerSearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    // Filter sellers based on search
    if (searchTerm) {
        sellerArray = sellerArray.filter(seller => 
            seller.name.toLowerCase().includes(searchTerm) ||
            seller.country.toLowerCase().includes(searchTerm) ||
            seller.phone.toLowerCase().includes(searchTerm)
        );
    }

    // Clear existing rows
    tableBody.innerHTML = '';

    // Add seller rows
    sellerArray.forEach(seller => {
        const row = document.createElement('tr');
        const avgPrice = seller.totalValue / seller.products;
        
        row.innerHTML = `
            <td>${seller.name}</td>
            <td>${seller.products}</td>
            <td>${seller.totalValue.toLocaleString()} FCFA</td>
            <td>${Math.round(avgPrice).toLocaleString()} FCFA</td>
            <td>
                <div class="seller-rating">
                    ${seller.rating.toFixed(1)}
                    <i class="fas fa-star"></i>
                </div>
            </td>
            <td>
                <div class="seller-contact">
                    <i class="fas fa-phone"></i>
                    ${seller.phone}
                </div>
            </td>
            <td>${seller.country}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Add event listeners for search and sort
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.table-search input');
    const sortSelect = document.querySelector('.table-sort select');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            updateSellerTable();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            updateSellerTable();
        });
    }
});

// Update seller table when products change
const originalLoadProducts = loadProducts;
loadProducts = function() {
    originalLoadProducts();
    updateSellerTable();
};

const originalAddProduct = addProduct;
addProduct = function(product) {
    originalAddProduct(product);
    updateSellerTable();
};

const originalDeleteProduct = deleteProduct;
deleteProduct = function(productId) {
    originalDeleteProduct(productId);
    updateSellerTable();
};

// Fonction pour télécharger les statistiques en PDF
function downloadStatsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Couleurs du thème
    const colors = {
        primary: [40, 84, 148],    // Bleu RYONV
        secondary: [76, 175, 80],  // Vert
        text: [60, 60, 60],        // Gris foncé
        lightText: [100, 100, 100], // Gris clair
        background: [245, 245, 245] // Gris très clair
    };

    // Fonction utilitaire pour créer des sections
    function createSection(title, yStart) {
        // Fond gris clair pour la section
        doc.setFillColor(...colors.background);
        doc.rect(10, yStart - 5, 190, 12, 'F');
        
        // Barre latérale bleue
        doc.setFillColor(...colors.primary);
        doc.rect(10, yStart - 5, 3, 12, 'F');
        
        // Titre de la section
        doc.setFontSize(14);
        doc.setTextColor(...colors.primary);
        doc.setFont(undefined, 'bold');
        doc.text(title, 20, yStart);
        
        return yStart + 15;
    }

    // En-tête du document
    doc.setFillColor(...colors.primary);
    doc.rect(0, 0, 220, 40, 'F');
    
    // Logo et titre principal
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.text('RYONV.A', 14, 20);
    doc.setFontSize(16);
    doc.setFont(undefined, 'normal');
    doc.text('Rapport de Statistiques', 14, 30);
    
    // Date du rapport
    doc.setFontSize(10);
    doc.setTextColor(...colors.lightText);
    doc.text(`Généré le ${new Date().toLocaleDateString()}`, 140, 20);

    let yPos = 50;

    // Section 1: Statistiques Générales
    yPos = createSection('Vue d\'ensemble', yPos);
    
    // Cartes des statistiques principales
    const mainStats = [
        { label: 'Total Produits', value: document.getElementById('totalProducts').textContent },
        { label: 'Valeur Totale', value: document.getElementById('totalValue').textContent },
        { label: 'Catégories', value: document.getElementById('totalCategories').textContent },
        { label: 'Vendeurs', value: document.getElementById('totalSellers').textContent }
    ];

    // Créer une grille de cartes de statistiques
    mainStats.forEach((stat, index) => {
        const x = 14 + (index % 2) * 95;
        const y = yPos + Math.floor(index / 2) * 30;
        
        // Fond de la carte
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(x, y, 85, 25, 3, 3, 'F');
        
        // Contenu de la carte
        doc.setFontSize(12);
        doc.setTextColor(...colors.text);
        doc.text(stat.label, x + 5, y + 8);
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...colors.primary);
        doc.text(stat.value, x + 5, y + 20);
    });

    yPos += 70;

    // Section 2: Graphiques
    yPos = createSection('Analyse des Données', yPos);
    
    // Configuration des graphiques avec une meilleure présentation
    const chartConfig = {
        categoryChart: {
            title: 'Répartition par Catégorie',
            width: 85,
            height: 85
        },
        priceChart: {
            title: 'Distribution des Prix',
            width: 85,
            height: 85
        }
    };

    // Disposition des graphiques en grille 2x2
    let chartIndex = 0;
    for (const [chartId, config] of Object.entries(chartConfig)) {
        const canvas = document.getElementById(chartId);
        if (canvas) {
            const x = 14 + (chartIndex % 2) * 95;
            const y = yPos + Math.floor(chartIndex / 2) * 100;

            // Fond blanc pour le graphique
            doc.setFillColor(255, 255, 255);
            doc.roundedRect(x - 2, y - 2, config.width + 4, config.height + 20, 3, 3, 'F');

            // Titre du graphique
            doc.setFontSize(10);
            doc.setTextColor(...colors.primary);
            doc.setFont(undefined, 'bold');
            doc.text(config.title, x, y - 5);

            // Graphique haute qualité
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width * 2;
            tempCanvas.height = canvas.height * 2;
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.scale(2, 2);
            tempCtx.drawImage(canvas, 0, 0);
            
            const imgData = tempCanvas.toDataURL('image/png', 1.0);
            doc.addImage(imgData, 'PNG', x, y, config.width, config.height);
            
            chartIndex++;
        }
    }

    yPos += 200;

    // Section 3: Tableau des Vendeurs
    doc.addPage();
    yPos = createSection('Performance des Vendeurs', 20);

    // En-tête du tableau avec style moderne
    const tableBody = document.querySelector('.seller-table tbody');
    const sellerData = Array.from(tableBody.rows).map(row => [
        row.cells[0].textContent,
        row.cells[1].textContent,
        row.cells[2].textContent,
        row.cells[4].textContent.trim(),
        row.cells[6].textContent
    ]);

    doc.autoTable({
        head: [['Vendeur', 'Produits', 'Valeur Totale', 'Note', 'Pays']],
        body: sellerData,
        startY: yPos + 5,
        styles: {
            fontSize: 9,
            cellPadding: 6,
            lineColor: [220, 220, 220],
            lineWidth: 0.1
        },
        headStyles: {
            fillColor: colors.primary,
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            halign: 'center'
        },
        columnStyles: {
            0: { cellWidth: 40 },
            1: { cellWidth: 30, halign: 'center' },
            2: { cellWidth: 40, halign: 'right' },
            3: { cellWidth: 30, halign: 'center' },
            4: { cellWidth: 30, halign: 'center' }
        },
        alternateRowStyles: { fillColor: [250, 250, 250] },
        didDrawPage: function(data) {
            // Ajouter un fond subtil au tableau
            doc.setFillColor(255, 255, 255);
            doc.roundedRect(10, data.settings.startY - 5, 190, 
                          data.table.height + 10, 3, 3, 'F');
        }
    });

    // Pied de page sur chaque page
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Ligne de séparation
        doc.setDrawColor(...colors.lightText);
        doc.line(10, doc.internal.pageSize.height - 20, 200, doc.internal.pageSize.height - 20);
        
        // Informations de pied de page
        doc.setFontSize(8);
        doc.setTextColor(...colors.lightText);
        doc.text('RYONV.A - Rapport de Statistiques', 14, doc.internal.pageSize.height - 10);
        doc.text(`Page ${i}/${pageCount}`, doc.internal.pageSize.width - 30, doc.internal.pageSize.height - 10);
    }

    // Télécharger le PDF
    const date = new Date().toISOString().split('T')[0];
    doc.save(`statistiques_ryonv_${date}.pdf`);
}

// Ajouter le bouton d'export des statistiques
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-section .section-header');
    if (statsSection) {
        const exportStatsBtn = document.createElement('button');
        exportStatsBtn.className = 'action-btn export-btn';
        exportStatsBtn.innerHTML = '<i class="fas fa-file-pdf"></i> Exporter les statistiques';
        exportStatsBtn.onclick = downloadStatsPDF;
        statsSection.appendChild(exportStatsBtn);
    }
});

// Fonction pour capturer la page exactement comme elle apparaît
async function capturePageToPDF() {
    // Vérifier si les dépendances sont disponibles
    if (typeof html2canvas === 'undefined' || typeof jspdf === 'undefined') {
        alert('Chargement des outils nécessaires...');
        await loadDependencies();
    }

    const { jsPDF } = window.jspdf;
    const statsSection = document.querySelector('.stats-section');
    
    if (!statsSection) {
        alert('Section des statistiques non trouvée');
        return;
    }

    // Afficher un indicateur de chargement
    const loader = document.createElement('div');
    loader.className = 'capture-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="spinner"></div>
            <p>Capture de la page en cours...</p>
        </div>
    `;
    document.body.appendChild(loader);

    try {
        // Capturer la section des statistiques
        const canvas = await html2canvas(statsSection, {
            scale: 2, // Meilleure qualité
            useCORS: true, // Permettre les images cross-origin
            logging: false, // Désactiver les logs
            allowTaint: true, // Permettre les images du même domaine
            backgroundColor: '#ffffff' // Fond blanc
        });

        // Créer le PDF avec les dimensions de la capture
        const imgWidth = 210; // Largeur A4 en mm
        const pageHeight = 297; // Hauteur A4 en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        let heightLeft = imgHeight;
        let position = 0;
        let pageCount = 1;

        // Ajouter l'image au PDF
        doc.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Ajouter des pages supplémentaires si nécessaire
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            pageCount++;
        }

        // Ajouter le pied de page sur chaque page
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.text(`Page ${i}/${pageCount}`, doc.internal.pageSize.width - 30, doc.internal.pageSize.height - 10);
        }

        // Sauvegarder le PDF
        const date = new Date().toISOString().split('T')[0];
        doc.save(`capture_ryonv_${date}.pdf`);

    } catch (error) {
        console.error('Erreur lors de la capture:', error);
        alert('Une erreur est survenue lors de la capture de la page.');
    } finally {
        // Supprimer le loader
        loader.remove();
    }
}

// Fonction pour charger les dépendances nécessaires
async function loadDependencies() {
    const dependencies = [
        {
            name: 'html2canvas',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
        },
        {
            name: 'jspdf',
            url: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
        }
    ];

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    try {
        for (const dep of dependencies) {
            if (typeof window[dep.name] === 'undefined') {
                await loadScript(dep.url);
            }
        }
    } catch (error) {
        console.error('Erreur lors du chargement des dépendances:', error);
        throw new Error('Impossible de charger les outils nécessaires.');
    }
}

// Créer le bouton de capture
function createCaptureButton() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    const captureBtn = document.createElement('button');
    captureBtn.id = 'capturePageBtn';
    captureBtn.className = 'action-btn capture-btn';
    captureBtn.innerHTML = '<i class="fas fa-camera"></i> Capturer la page';
    
    captureBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await capturePageToPDF();
        } catch (error) {
            console.error('Erreur lors de la capture:', error);
            alert('Une erreur est survenue lors de la capture de la page.');
        }
    });

    // Ajouter le style pour le bouton et le loader
    const style = document.createElement('style');
    style.textContent = `
        .capture-btn {
            background-color: #2196F3;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-left: 10px;
            transition: background-color 0.3s ease;
        }
        .capture-btn:hover {
            background-color: #1976D2;
        }
        .capture-btn i {
            font-size: 16px;
        }
        .capture-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        .loader-content {
            text-align: center;
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #2196F3;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Ajouter le bouton à la section
    const headerSection = statsSection.querySelector('.section-header') || statsSection;
    headerSection.appendChild(captureBtn);
}

// Initialiser le bouton de capture lors du chargement de la page
document.addEventListener('DOMContentLoaded', createCaptureButton);