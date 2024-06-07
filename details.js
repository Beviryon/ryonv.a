// Récupérer l'ID du produit à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Trouver le produit correspondant à l'ID dans le tableau products
const product = products.find(p => p.id === parseInt(productId));

// Récupérer l'élément HTML où les détails du produit seront affichés
const productInfo = document.getElementById('product-info');

// Créer les éléments HTML pour afficher les détails du produit
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

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};

navSlide();
