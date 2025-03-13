// Importer les produits existants
import { products } from '../products.js';

const productForm = document.getElementById('productForm');
const productsList = document.getElementById('productsList');

// Afficher les produits
function displayProducts() {
    productsList.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Prix: ${product.price} FCFA</p>
            <p>Catégorie: ${product.category}</p>
            <p>Stock: ${product.stock}</p>
            <div class="image-preview">
                ${product.images.map(img => `<img src="${img}" alt="Produit">`).join('')}
            </div>
            <button class="delete-btn" onclick="deleteProduct(${index})">Supprimer</button>
        `;
        productsList.appendChild(productCard);
    });
}

// Ajouter un nouveau produit
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: parseInt(document.getElementById('price').value),
        category: document.getElementById('category').value,
        images: document.getElementById('images').value.split(',').map(url => url.trim()),
        stock: parseInt(document.getElementById('stock').value),
        seller: {
            name: document.getElementById('sellerName').value,
            phone: document.getElementById('sellerPhone').value,
            country: document.getElementById('sellerCountry').value,
            rating: 4.8 // Valeur par défaut
        },
        vendorPhone: document.getElementById('sellerPhone').value,
        promotion: {
            discount: parseInt(document.getElementById('discount').value) || 0,
            endDate: document.getElementById('promoEndDate').value
        },
        like: 0,
        rating: 4.5 // Valeur par défaut
    };

    try {
        // Ajouter le nouveau produit au tableau products
        products.push(newProduct);

        // Créer le contenu du fichier products.js mis à jour
        const fileContent = `const products = ${JSON.stringify(products, null, 2)};\n\nexport { products };`;

        // Envoyer les données au serveur pour mettre à jour le fichier
        const response = await fetch('/update-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fileContent })
        });

        if (response.ok) {
            alert('Produit ajouté avec succès !');
            displayProducts();
            productForm.reset();
        } else {
            throw new Error('Erreur lors de la mise à jour du fichier');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'ajout du produit');
    }
});

// Supprimer un produit
async function deleteProduct(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        try {
            products.splice(index, 1);
            
            // Créer le contenu du fichier products.js mis à jour
            const fileContent = `const products = ${JSON.stringify(products, null, 2)};\n\nexport { products };`;

            // Envoyer les données au serveur pour mettre à jour le fichier
            const response = await fetch('/update-products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fileContent })
            });

            if (response.ok) {
                displayProducts();
            } else {
                throw new Error('Erreur lors de la mise à jour du fichier');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la suppression du produit');
        }
    }
}

// Afficher les produits au chargement
displayProducts();