import { products } from './data.js';

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const product = products.find(p => p.id === parseInt(productId));

function displayProductDetails(product) {
  const productInfo = document.getElementById('product-info');
  productInfo.innerHTML = '';

  const name = document.createElement('h2');
  name.textContent = product.name;
  productInfo.appendChild(name);

  const description = document.createElement('p');
  description.textContent = product.description;
  productInfo.appendChild(description);

  const price = document.createElement('p');
  price.textContent = `Prix : ${product.price} €`;
  productInfo.appendChild(price);

  const images = document.createElement('div');
  images.classList.add('product-images');
  product.images.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = product.name;
    images.appendChild(img);
  });
  productInfo.appendChild(images);
}

// Afficher les détails du produit
if (product) {
  displayProductDetails(product);
} else {
  console.error('Produit non trouvé');
}
