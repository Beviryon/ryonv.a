const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const product = products.find(p => p.id === parseInt(productId))
const productInfo = document.getElementById('product-info');
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
// Créer le bouton "Discuter avec le vendeur"
const button = document.createElement('button');
button.textContent = 'Discuter avec le vendeur';
button.addEventListener('click', () => {
  const phoneNumber = product.vendorPhone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.location.href = whatsappUrl;
});
productInfo.appendChild(button);

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
}

navSlide();
