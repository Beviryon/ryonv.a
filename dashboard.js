document.addEventListener('DOMContentLoaded', async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'vendor') {
      window.location.href = '/home.html';
      return;
    }
  
    const response = await fetch(`/vendor/products?vendorId=${user.id}`);
    const data = await response.json();
    const productsSection = document.getElementById('products-section');
  
    data.products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-card');
      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Prix: ${product.price} FCFA</p>
        <button onclick="editProduct('${product.id}')">Modifier</button>
        <button onclick="deleteProduct('${product.id}')">Supprimer</button>
      `;
      productsSection.appendChild(productDiv);
    });
  });
  
  async function editProduct(id) {
    // Implémenter la logique de modification du produit
  }
  
  async function deleteProduct(id) {
    const response = await fetch(`/vendor/products/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      window.location.reload();
    } else {
      alert(data.error);
    }
  }
  