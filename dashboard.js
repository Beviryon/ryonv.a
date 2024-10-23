// Charger les produits depuis products.js
import { products as initialProducts } from './products.js'; // Assure-toi que le chemin d'accès est correct

let products = [...initialProducts]; // Faire une copie des produits pour ne pas modifier l'original

// Fonction pour afficher la liste des produits
function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Effacer l'ancien contenu

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Prix:</strong> ${product.price} FCFA</p>
            <p><strong>Catégorie:</strong> ${product.category}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
            ${product.promotion ? `<p><strong>Promotion:</strong> ${product.promotion.discount}% jusqu'au ${new Date(product.promotion.endDate).toLocaleDateString()}</p>` : ''}
            <div class="product-images">
                ${product.images.map(img => `<img src="${img}" alt="${product.name}" style="width: 50px;">`).join('')}
            </div>
            <p><strong>Vendeur:</strong> ${product.seller.name}</p>
            <p><strong>Téléphone:</strong> ${product.seller.phone}</p>
            <p><strong>Pays:</strong> ${product.seller.country}</p>
            <button onclick="editProduct(${product.id})">Modifier</button>
            <button onclick="deleteProduct(${product.id})">Supprimer</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Fonction pour ajouter ou modifier un produit
function saveProduct(event) {
    event.preventDefault();

    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const category = document.getElementById('product-category').value;
    const stock = parseInt(document.getElementById('product-stock').value);
    const discount = parseInt(document.getElementById('product-discount').value) || 0; // 0 si pas de discount
    const endDate = document.getElementById('product-end-date').value; // Récupérer la date de fin
    const images = document.getElementById('product-images').value.split(',').map(img => img.trim()).filter(Boolean); // Filtrer les valeurs vides
    const sellerName = document.getElementById('product-seller-name').value;
    const sellerPhone = document.getElementById('product-seller-phone').value;
    const sellerCountry = document.getElementById('product-seller-country').value; // Récupérer le pays

    // Construire le produit
    const product = {
        id: id ? parseInt(id) : products.length + 1, // Assigne un nouvel ID si pas d'ID
        name,
        description,
        price,
        category,
        stock,
        promotion: discount ? { discount, endDate } : undefined, // Inclure la promotion uniquement si discount > 0
        images,
        seller: { name: sellerName, phone: sellerPhone, country: sellerCountry }
    };

    if (id) {
        // Modifier le produit existant
        const productIndex = products.findIndex(p => p.id === parseInt(id));
        products[productIndex] = product;
    } else {
        // Ajouter un nouveau produit
        products.push(product);
    }

    // Réinitialiser le formulaire
    document.getElementById('product-form').reset();
    document.getElementById('product-id').value = '';

    // Mettre à jour l'affichage
    displayProducts();
}

// Fonction pour charger les informations du produit dans le formulaire pour modification
function editProduct(id) {
    const product = products.find(p => p.id === id);
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-stock').value = product.stock;
    document.getElementById('product-discount').value = product.promotion ? product.promotion.discount : ''; // Pré-remplir le discount
    document.getElementById('product-images').value = product.images.join(', ');
    document.getElementById('product-seller-name').value = product.seller.name;
    document.getElementById('product-seller-phone').value = product.seller.phone;
    document.getElementById('product-seller-country').value = product.seller.country; // Pré-remplir le pays
    document.getElementById('product-end-date').value = product.promotion ? product.promotion.endDate : ''; // Pré-remplir la date de fin
}

// Fonction pour supprimer un produit
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}

// Charger les événements sur le formulaire
document.getElementById('product-form').addEventListener('submit', saveProduct);

// Afficher la liste des produits au chargement de la page
document.addEventListener('DOMContentLoaded', displayProducts);
