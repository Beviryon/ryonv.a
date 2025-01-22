document.addEventListener('DOMContentLoaded', () => {
    // Mettre à jour le compteur d'articles dans l'icône du panier
    updateCartCounter();
  
    // Gestion de l'affichage du panier lors du clic sur l'icône
    const cartIcon = document.querySelector('.nav-icon .fas.fa-shopping-cart');
    if (cartIcon) {
      cartIcon.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'cart.html';
      });
    }
  
    // Gestion du menu déroulant des catégories
    const categoryDropdown = document.querySelector('.category-dropdown');
    const categoryList = document.querySelector('.category-list');
  
    if (categoryDropdown && categoryList) {
      categoryDropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêche la propagation de l'événement
        categoryList.style.display = categoryList.style.display === 'block' ? 'none' : 'block';
      });
  
      // Fermer le menu déroulant si l'utilisateur clique en dehors
      document.addEventListener('click', (event) => {
        if (!categoryDropdown.contains(event.target) && !categoryList.contains(event.target)) {
          categoryList.style.display = 'none';
        }
      });
    }
  
    // Récupérer les catégories et les afficher dans le menu déroulant
    const categories = getUniqueCategories(products);
    displayCategories(categories);
  });
  
  // Fonction pour récupérer les catégories uniques des produits
  function getUniqueCategories(products) {
    const categories = new Set();
    products.forEach(product => {
      if (product.category) {
        categories.add(product.category);
      }
    });
    return Array.from(categories);
  }
  
  // Fonction pour afficher les catégories dans le menu déroulant
  function displayCategories(categories) {
    const categoryList = document.querySelector('.category-list');
    if (categoryList) {
      categoryList.innerHTML = '';
      categories.forEach(category => {
        const categoryLink = document.createElement('a');
        categoryLink.href = `./produits.html?category=${encodeURIComponent(category)}`;
        categoryLink.textContent = category;
        categoryList.appendChild(categoryLink);
      });
    }
  }
  
  // Mettre à jour le compteur d'articles dans l'icône du panier
  function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart from localStorage:', cart);
    const cartCounter = document.querySelector('.cart-counter');
  
    if (cartCounter) {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      console.log('Total items in cart:', totalItems);
      cartCounter.textContent = totalItems;
    }
  }
  
  // Ajouter un produit au panier
  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id === product.id);
  
    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart after adding product:', cart);
  
    showAlert('Produit ajouté au panier !');
    updateCartCounter();
  }
  
  // Afficher une alerte de confirmation
  function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.classList.add('alert');
    document.body.appendChild(alertBox);
  
    // Supprimer l'alerte après 3 secondes
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }
  
  