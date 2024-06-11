// Données de produits fictives
const products = [
{
id: 1,
name: 'HP',
description: 'RAM 8 Go, SSD 256 Go, AZERTY',
price: 379.99,
category: 'electronique',
images: [
'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 2,
name: 'Acer Aspire',
description: 'RAM 16 Go, SSD 512 Go',
price: 534.99,
category: 'electronique',
images: [
'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 3,
name: 'Lenovo ',
description: '8 Go DDR4,512 Go SSD,',
price: 724.99,
category: 'electronique',
images: [
'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 4,
name: 'Produit 2',
description: 'Description du produit 2',
price: 524.99,
category: 'electronique',
images: [
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 5,
name: 'Produit 2',
description: 'Description du produit 2',
price: 24.99,
category: 'electronique',
images: [
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 6,
name: 'Produit 2',
description: 'Description du produit 2',
price: 24.99,
category: 'electronique',
images: [
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},

// Vêtements
{
id: 7,
name: 'Produit 2',
description: 'Description du produit 2',
price: 24.99,
category: 'vetements',
images: [
'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/6069553/pexels-photo-6069553.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/1389449/pexels-photo-1389449.jpeg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 8,
name: 'Produit 2',
description: 'Description du produit 2',
price: 24.99,
category: 'vetements',
images: [
'https://images.pexels.com/photos/5490979/pexels-photo-5490979.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/9185791/pexels-photo-9185791.jpeg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 9,
name: 'Produit 2',
description: 'Description du produit 2',
price: 24.99,
category: 'vetements',
images: [
'https://images.pexels.com/photos/7691089/pexels-photo-7691089.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7691227/pexels-photo-7691227.jpeg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/8387838/pexels-photo-8387838.jpeg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 10, name: 'Produit 2', description: 'Description du produit 2',price: 24.99,category: 'vetements',images: [
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 11, name: 'Produit 2', description: 'Description du produit 2',price: 24.99,category: 'vetements',images: [
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 12, name: 'Produit 2', description: 'Description du produit 2',price: 24.99,category: 'vetements',images: [
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
}
];

// Fonction pour créer une carte de produit
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.images[0];
  image.alt = product.name;
  card.appendChild(image);

  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);

  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);

  const price = document.createElement('p');
  price.textContent = `Prix : ${product.price} Fcfa`;
  card.appendChild(price);

  const button = document.createElement('a');
  button.classList.add('btn');
  button.textContent = 'Voir le produit';
  button.addEventListener('click', () => showProductModal(product));
  card.appendChild(button);

  const whatsappBtn = document.createElement('a');
  whatsappBtn.classList.add('btn', 'whatsapp-btn');
  whatsappBtn.textContent = 'Commander';
  whatsappBtn.addEventListener('click', () => openOrderForm(product)); // Mettre à jour cette ligne
  card.appendChild(whatsappBtn);

  const detailsBtn = document.createElement('a');
  detailsBtn.classList.add('btn-detail');
  detailsBtn.textContent = 'Détails du produit';
  detailsBtn.href = `details.html?id=${product.id}`;
  card.appendChild(detailsBtn);

  return card;
}


// Fonction pour afficher le formulaire de commande dans un pop-up
// function openOrderForm(product) {
//   // Créer le formulaire pop-up
//   const formPopup = document.createElement('div');
//   formPopup.classList.add('form-popup');

//   const formContainer = document.createElement('div');
//   formContainer.classList.add('form-container');

//   const closeBtn = document.createElement('span');
//   closeBtn.classList.add('close');
//   closeBtn.textContent = '×';
//   closeBtn.addEventListener('click', () => {
//     formPopup.style.display = 'none';
//   });

//   formContainer.appendChild(closeBtn);

//   const form = document.createElement('form');
//   form.classList.add('order-form');

//   const nameLabel = document.createElement('label');
//   nameLabel.textContent = 'Nom :';
//   const nameInput = document.createElement('input');
//   nameInput.type = 'text';
//   nameInput.required = true;
//   nameLabel.appendChild(nameInput);

//   const cityLabel = document.createElement('label');
//   cityLabel.textContent = 'Ville :';
//   const cityInput = document.createElement('input');
//   cityInput.type = 'text';
//   cityInput.required = true;
//   cityLabel.appendChild(cityInput);

//   const phoneLabel = document.createElement('label');
//   phoneLabel.textContent = 'Numéro de téléphone :';
//   const phoneInput = document.createElement('input');
//   phoneInput.type = 'tel';
//   phoneInput.required = true;
//   phoneLabel.appendChild(phoneInput);

//   form.appendChild(nameLabel);
//   form.appendChild(cityLabel);
//   form.appendChild(phoneLabel);

//   const submitBtn = document.createElement('button');
//   submitBtn.type = 'submit';
//   submitBtn.textContent = 'Discuter avec le vendeur';
//   submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     const name = nameInput.value;
//     const city = cityInput.value;
//     const phone = phoneInput.value;
//     const message = `Bonjour, je m'appelle ${name} et je suis de ${city}.\n Je souhaite commander le produit :\n ${product.name}.}`;
//     const whatsappUrl = `https://wa.me/${product.vendorPhone}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//     formPopup.style.display = 'none';
//   });

//   form.appendChild(submitBtn);
//   formContainer.appendChild(form);

//   formPopup.appendChild(formContainer);
//   document.body.appendChild(formPopup);

//   // Afficher le formulaire pop-up
//   formPopup.style.display = 'block';
// }

function openOrderForm(product) {
  // Créer le formulaire pop-up
  const formPopup = document.createElement('div');
  formPopup.classList.add('form-popup');

  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => {
    formPopup.style.display = 'none';
  });

  formContainer.appendChild(closeBtn);

  const form = document.createElement('form');
  form.classList.add('order-form');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Nom :';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.required = true;
  nameLabel.appendChild(nameInput);

  const cityLabel = document.createElement('label');
  cityLabel.textContent = 'Ville :';
  const cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.required = true;
  cityLabel.appendChild(cityInput);

  const phoneLabel = document.createElement('label');
  phoneLabel.textContent = 'Numéro de téléphone :';
  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.required = true;
  phoneLabel.appendChild(phoneInput);

  form.appendChild(nameLabel);
  form.appendChild(cityLabel);
  form.appendChild(phoneLabel);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Discuter avec le vendeur';

  form.appendChild(submitBtn);
  formContainer.appendChild(form);

  form.appendChild(submitBtn);
  formContainer.appendChild(form);

  formPopup.appendChild(formContainer);
  document.body.appendChild(formPopup);

  // Afficher le formulaire pop-up
  formPopup.style.display = 'block';

  // Ajouter l'événement 'submit' au formulaire
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const city = cityInput.value;
    const phone = phoneInput.value;
    const message = `Bonjour, je m'appelle ${name} \nJ'habite à ${city}.\n \nJe souhaite commander le produit :\n\ ${product.name}.`;
    const whatsappUrl = `https://wa.me/${product.vendorPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    formPopup.style.display = 'none';
  });
}



// Variables pour la pagination
let currentPage = 1;
const productsPerPage = 10;
const paginationContainer = document.querySelector('.pagination');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// Fonction pour afficher les produits avec pagination
function displayProducts(products) {
const productList = document.querySelector('.product-list');
productList.innerHTML = '';

const startIndex = (currentPage - 1) * productsPerPage;
const endIndex = startIndex + productsPerPage;
const paginatedProducts = products.slice(startIndex, endIndex);

paginatedProducts.forEach(product => {
const card = createProductCard(product);
productList.appendChild(card);
});

updatePaginationInfo(products.length);
}

// Fonction pour mettre à jour les informations de pagination
function updatePaginationInfo(totalProducts) {
const totalPages = Math.ceil(totalProducts / productsPerPage);
pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;

prevBtn.disabled = currentPage === 1;
nextBtn.disabled = currentPage === totalPages;
}

// Événement pour le bouton "Précédent"
prevBtn.addEventListener('click', () => {
if (currentPage > 1) {
currentPage--;
displayProducts(products);
}
});

// Événement pour le bouton "Suivant"
nextBtn.addEventListener('click', () => {
const totalProducts = products.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

if (currentPage < totalPages) {
currentPage++;
displayProducts(products);
}
});

// Fonction pour filtrer les produits par catégorie
function filterProductsByCategory(category) {
const categoryLinks = document.querySelectorAll('.category-list a');
categoryLinks.forEach(link => link.classList.remove('active'));

const activeLink = document.querySelector(`.category-list a[data-category="${category}"]`);
activeLink.classList.add('active');

if (category === 'all') {
displayProducts(products);
} else {
const filteredProducts = products.filter(product => product.category === category);
displayProducts(filteredProducts);
}
}

// Fonction pour filtrer les produits par prix
function filterProducts() {
const filterInput = document.getElementById('filter');
const filterValue = document.getElementById('filter-value');
const maxPrice = filterInput.value;

filterValue.textContent = maxPrice;

const filteredProducts = products.filter(product => product.price <= maxPrice);
displayProducts(filteredProducts);
}

// Fonction pour trier les produits
function sortProducts() {
const sortSelect = document.getElementById('sort');
const sortOption = sortSelect.value;

let sortedProducts = [...products];

if (sortOption === 'price-asc') {
sortedProducts.sort((a, b) => a.price - b.price);
} else if (sortOption === 'price-desc') {
sortedProducts.sort((a, b) => b.price - a.price);
}

displayProducts(sortedProducts);
}

// Fonction pour afficher la modal de la galerie d'images
function showProductModal(product) {
const modal = document.getElementById('product-modal');
const modalContent = modal.querySelector('.modal-content');
const productGallery = modalContent.querySelector('.product-gallery');

productGallery.innerHTML = '';

product.images.forEach(imageUrl => {
const img = document.createElement('img');
img.src = imageUrl;
img.alt = product.name;
productGallery.appendChild(img);
});

modal.style.display = 'block';

const closeModal = () => {
modal.style.display = 'none';
};

const closeBtn = modalContent.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', event => {
if (event.target === modal) {
closeModal();
}
});
}

document.querySelectorAll('.category-list a').forEach(link => {
link.addEventListener('click', event => {
event.preventDefault();
const category = event.target.dataset.category;
filterProductsByCategory(category);
});
});

document.getElementById('filter').addEventListener('input', filterProducts);
document.getElementById('sort').addEventListener('change', sortProducts);

// Afficher tous les produits au chargement initial
displayProducts(products);

const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
nav.classList.toggle('nav-active');
burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('nav-active');
burger.classList.remove('toggle');
});
});


const searchInput = document.getElementById('search-input');
const productList = document.querySelector('.product-list');

function filterProducts() {
const searchTerm = searchInput.value.toLowerCase();
const cards = productList.getElementsByClassName('product-card');

for (let i = 0; i < cards.length; i++) {
const card = cards[i];
const productName = card.querySelector('h3').textContent.toLowerCase();

if (productName.includes(searchTerm)) {
card.style.display = 'block';
} else {
card.style.display = 'none';
}
}
}

searchInput.addEventListener('input', filterProducts);

};

navSlide();