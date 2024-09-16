// Fonction pour charger les produits depuis le localStorage
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return Promise.resolve(products); // Simule un retour de promesse pour correspondre à l'utilisation asynchrone
  }
  
  // Fonction pour afficher les produits
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Vide la liste avant d'ajouter les produits
    
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Prix : ${product.price} Fcfa</p>
        <p>Stock : ${product.stock}</p>
        <button onclick="editProduct('${product.id}')">Modifier</button>
        <button onclick="deleteProduct('${product.id}')">Supprimer</button>
      `;
      productList.appendChild(productCard); // Ajoute chaque produit dans la liste
    });
  }
  
  // Fonction pour ajouter un produit
  function addProduct() {
    document.getElementById('product-form').style.display = 'block';
    document.getElementById('form-title').innerText = 'Ajouter un Produit';
    
    // Réinitialise les champs du formulaire pour un ajout
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('price').value = '';
    document.getElementById('stock').value = '';
    document.getElementById('category').value = '';
    document.getElementById('images').value = '';
    document.getElementById('promotion').value = '';
    document.getElementById('vendorPhone').value = '';
  
    document.getElementById('product-form-content').onsubmit = function(event) {
      event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
      const newProduct = {
        id: Date.now().toString(), // Utilisation du timestamp comme ID unique
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value),
        stock: parseInt(document.getElementById('stock').value),
        category: document.getElementById('category').value,
        images: [document.getElementById('images').value],
        promotion: document.getElementById('promotion').value,
        vendorPhone: document.getElementById('vendorPhone').value
      };
  
      // Charger les produits, ajouter le nouveau produit et sauvegarder
      loadProducts().then(products => {
        products.push(newProduct);
        saveProducts(products); // Sauvegarde dans le localStorage
        document.getElementById('product-form').style.display = 'none'; // Cache le formulaire après ajout
        displayProducts(products); // Recharge la liste des produits après ajout
      });
    };
  
    document.getElementById('cancel-btn').onclick = function() {
      document.getElementById('product-form').style.display = 'none'; // Cache le formulaire si on annule
    };
  }
  
  // Fonction pour éditer un produit
  function editProduct(id) {
    loadProducts().then(products => {
      const product = products.find(p => p.id === id);
      if (product) {
        document.getElementById('product-form').style.display = 'block';
        document.getElementById('form-title').innerText = 'Modifier le Produit';
        document.getElementById('product-id').value = product.id;
        document.getElementById('name').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('price').value = product.price;
        document.getElementById('stock').value = product.stock;
        document.getElementById('category').value = product.category;
        document.getElementById('images').value = product.images.join(', ');
        document.getElementById('promotion').value = product.promotion || '';
        document.getElementById('vendorPhone').value = product.vendorPhone;
  
        document.getElementById('product-form-content').onsubmit = function(event) {
          event.preventDefault();
          const updatedProduct = {
            id: product.id,
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            price: parseFloat(document.getElementById('price').value),
            stock: parseInt(document.getElementById('stock').value),
            category: document.getElementById('category').value,
            images: document.getElementById('images').value.split(',').map(url => url.trim()),
            promotion: document.getElementById('promotion').value,
            vendorPhone: document.getElementById('vendorPhone').value
          };
  
          loadProducts().then(products => {
            const index = products.findIndex(p => p.id === updatedProduct.id);
            if (index !== -1) {
              products[index] = updatedProduct; // Met à jour le produit
              saveProducts(products); // Sauvegarde les modifications dans le localStorage
              document.getElementById('product-form').style.display = 'none'; // Cache le formulaire après modification
              displayProducts(products); // Recharge la liste des produits après modification
            }
          });
        };
      }
    });
  }
  
  // Fonction pour supprimer un produit
  function deleteProduct(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      loadProducts().then(products => {
        const updatedProducts = products.filter(product => product.id !== id);
        saveProducts(updatedProducts); // Sauvegarde les produits après suppression
      });
    }
  }
  
  // Fonction pour sauvegarder les produits dans le localStorage
  function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products)); // Sauvegarde dans localStorage
    displayProducts(products); // Recharge l'affichage des produits
  }
  
  // Initialisation du dashboard
  document.addEventListener('DOMContentLoaded', () => {
    loadProducts().then(displayProducts); // Charge et affiche les produits lors du chargement de la page
  });
  
  document.getElementById('add-product-btn').addEventListener('click', addProduct);
  