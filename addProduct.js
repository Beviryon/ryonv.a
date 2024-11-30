document.addEventListener('DOMContentLoaded', function() {
    // Vérifiez si l'utilisateur est un administrateur
    const isAdmin = document.cookie.includes('admin=true');

    if (!isAdmin) {
        alert('Accès refusé. Vous devez être un administrateur pour accéder à cette page.');
        window.location.href = 'home.html'; 
    }
});

document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const productCategory = document.getElementById('product-category').value;
    const productImages = document.getElementById('product-images').value.split(',');
    const sellerName = document.getElementById('seller-name').value;
    const sellerPhone = document.getElementById('seller-phone').value;
    const sellerCountry = document.getElementById('seller-country').value;
    const sellerRating = parseFloat(document.getElementById('seller-rating').value);
    const productPromotion = document.getElementById('product-promotion').value;
    const productStock = parseInt(document.getElementById('product-stock').value);
    const productRating = parseFloat(document.getElementById('product-rating').value);

    const promotion = productPromotion ? {
        discount: parseInt(productPromotion.split(',')[0]),
        endDate: productPromotion.split(',')[1]
    } : null;

    const newProduct = {
        id: Date.now(), // Utilisez un timestamp comme ID unique
        name: productName,
        description: productDescription,
        price: productPrice,
        category: productCategory,
        images: productImages,
        seller: {
            name: sellerName,
            phone: sellerPhone,
            country: sellerCountry,
            rating: sellerRating
        },
        vendorPhone: sellerPhone,
        promotion: promotion,
        stock: productStock,
        rating: productRating
    };

    // Charger les produits existants
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.push(newProduct);
            return products;
        })
        .then(updatedProducts => {
            // Sauvegarder les produits mis à jour
            fetch('products.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProducts)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Produit ajouté avec succès:', data);
                alert('Produit ajouté avec succès!');
                document.getElementById('product-form').reset();
            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout du produit:', error);
                alert('Erreur lors de l\'ajout du produit.');
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des produits:', error);
            alert('Erreur lors du chargement des produits.');
        });
});
