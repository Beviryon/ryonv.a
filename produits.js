// Données de produits fictives
const products = [
{
id: 1,
name: "Écouteurs d'écran tactile",
description: 'Écouteurs intra-auriculaires',
price: 17500,
category: 'electronique',
images: [
'https://s.alicdn.com/@sc04/kf/H8d4e33a9c7344e6aae486a7e45b05e24H.jpg',
'https://s.alicdn.com/@sc04/kf/Hdb7f824324e84044b3eef68f9d9878eaB.jpg',
'hhttps://s.alicdn.com/@sc04/kf/Hddcc916518fc4fcf97f1253fbb5c82c4C.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 2,
name: 'Support de téléphone',
description: 'Décoration de la maison',
price: 1200,
category: 'maison',
images: [
'https://s.alicdn.com/@sc04/kf/H0911ecc7982549489bd59d3976fc5378W.jpg',
'https://s.alicdn.com/@sc04/kf/H9a2c6edd9c6e454e9f6cddff49f56dafc.jpg',
'https://s.alicdn.com/@sc04/kf/H2fef3c9f9fa247439fe76a740fd921fcE.jpg',
],
vendorPhone: '+33758146261'
},
{
id: 3,
name: 'ZONE Sport ',
description: 'Sacs de Téléphone portable',
price: 2500,
category: 'sport',
images: [
'https://s.alicdn.com/@sc04/kf/HTB1FQLZXOnrK1Rjy1Xcq6yeDVXah.jpg',
'https://s.alicdn.com/@sc04/kf/HTB1XuTUinlYBeNjSszcq6zwhFXaW.jpg',
'https://s.alicdn.com/@sc04/kf/HTB11gOaiXmWBuNjSspdq6zugXXaQ.jpg',
],
vendorPhone: '+33758146261'
},
{
id: 4,
name: 'Custom Brand',
description: 'Costumes de pantalon',
price: 150000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H3a17680c893a4090abfe94b2ad36b21cR.jpg',
'https://s.alicdn.com/@sc04/kf/Hd9c68838f4444723a0c5a633cffe073dn.jpg',
'https://s.alicdn.com/@sc04/kf/H6db20e92226c43bc996db6197dd5be93l.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 5,
name: 'Femmes Sexy Jupe',
description: '100% coton Denim',
price: 10000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H85526e7e55e443c593b9302487ad2ba2R.jpg',
'https://s.alicdn.com/@sc04/kf/H1f7aaa81232649b4b352c4e228268009O.jpg',
'https://s.alicdn.com/@sc04/kf/Hfde0ff53a70a41ad82d118ee575586ffY.jpg'
],
vendorPhone: '+33758146261'
},

// Vêtements raison
{
id: 6,
name: 'Robe',
description: 'Toutes les tailles',
price: 8000,
category: 'vetements',
images: [
'https://db3pap006files.storage.live.com/y4mc4hcMYmNr5YU88xwxNSDuV7FGAc2ej1B9KZWIoH_GyulchS8x60OVcTKvw772UbpWsrNP_tDeHdMsgUb-rRDReIECOkCJGXERoCS4I1lUFdS94tKbXI7dIxKvBvukqJ5LkoiDUnDsjZDrdXt7hSxUYL-JQ6rO1trsdRWmmy5ZTRnLrbIbsdhhmE2lYjaKFyQ-E1-TEZkcVYFBTFEYYRXws7kcFvItC2teq3VNy2iD3c?encodeFailures=1&width=756&height=756',
'https://db3pap006files.storage.live.com/y4m6QsZYenD0EYz8xg9YKmdpB-Mdg4fZy4flV44gaUGjkKd-YI6liCeDYeRPLKeXQffal47ZLCKMDkD1oNvWB3bi76uo_tjNO1oYLwuYG9aJ75UoC_tIdqmUespmUCABmQuiOPr9-t8S6HkJyJkor1BeIFMglBkWKPplONYqJwfv8NXUuFDXEX644wfZ6jj18m6kDCkqEPJQag0vGrc0STMniu-Fk_Qrfq8QDmdRLe4Anw?encodeFailures=1&width=604&height=756',
'https://db3pap006files.storage.live.com/y4mGU8rgGiHvZrOmDKkz2S2t3Xu07Q7sYrW8m5f1t2_H83wZVKf_Ih4vZTvN0eIwF-SeqqtnewsPj003HF4l6qbEpJ9HESu6sPxxHl7Gvf2q3kwK7vMZQE_muCtC1fGFDtQcjrKpskc20BqsUAdVSSpqLLZh-MUbii0ykg9U23M7Yozr9rGHarKHClo8E_YoOUu387_8Lt5AOFIY7Vx66QvY38x_kzOVykJ3nH-7JkdjfU?encodeFailures=1&width=605&height=756'
],
vendorPhone: '+221784743356'
},

// Vêtements raison
{
id: 7,
name: 'Robe',
description: 'Tissu en coton',
price: 8000,
category: 'vetements',
images: [
'https://db3pap006files.storage.live.com/y4mNmL6ftkc8Fw9dAxv7W0lBHmd3iwyVD3nfs7Z5pR_ef0rb_-Z4NuloqmB9AfqdbNOc8SgQ12gMRRYJkEqODAopmr8Ew6CxwyX_E9_YVQYGrS1w8FrhSv2puxH8Nz6LqhGn1Mnzn1iiAyEtdYJdU1sE3hO4RB7d9MtIzA_5wbBtlkxNTbTAa9Vs6rPDNiIDukmrJv7MQTQWW7siXoN-LChIphEqlqoNNcZMyZXXm53W2I?encodeFailures=1&width=503&height=755',
'https://db3pap006files.storage.live.com/y4mTSBEzwFzRpE5m3-yZSTF1z4ziIJf1lZmsIYnjWgzzWQLTh666HAtRL_Jd-ahi_HuKHNvqsy4twNPOOfeWtMaDB0pVcADZtdJwOAzKsaUwwJd5fCKfvbJEMzhthk_ZvPmKnqd6dUzN29JPs-7WXFJfeo0YsstcxUxny641JUktL5Ems0zDUxDaRGZ36DEUZ7kVgfeWATct5Zeq1GRIiaPnVbuHLhCLmQO-5XOgr6ZWS4?encodeFailures=1&width=503&height=756',
'https://db3pap006files.storage.live.com/y4m7hIf1N0BiNgEo5IefCxU-c71MbB7Bh_VOnFXNfNlGiRNz4MoWX8YrSqtVy8WCbveD3896VXhtPFgezq0mv6SsbcEA8xCe15YgTF_JhJi8mjq-acwHsYvS8VTCxIVNLM76MM-X3kIJt3NI3tnDhUIZIJ7j0FbazygySfjG15LxHQeCzfyjQ5yJOxavxsd6OfiERCQORA8dYRV4lz3oBO4v64vm6dhMeKS34Qy39Jzo5M?encodeFailures=1&width=503&height=756'
],
vendorPhone: '+221784743356'
},
{
id: 8,
name: 'Robe de soirée femme',
description: '100% Polyester',
price: 20000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/Hbfc38afed3fc4b3984e40cbc5ed8a49cP.jpg',
'https://s.alicdn.com/@sc04/kf/H5710996c11594111ad7b127ee5c8cd741.jpg',
'https://s.alicdn.com/@sc04/kf/H43167ad91703404b8f759650953ff9c8B.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 9,
name: 'Sac à main',
description: 'modèle 2023 en cuir',
price: 7000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H2aa20b2331584b08914ebfdbecc8f76eo.jpg',
'https://s.alicdn.com/@sc04/kf/H7d09183f2f284305bb1d08834b842c4eY.jpg',
'https://s.alicdn.com/@sc04/kf/H0a2b7c07b5c2400cade43ace2db65141G.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 10, 
name: 'H-P EliteBook 640G9', 
description: 'WINDOWS 11 HOME',
price: 250000,
category: 'electronique',
images: [
'https://s.alicdn.com/@sc04/kf/H13b354835d0742a1919dab2e5386d5d90.jpg',
'https://s.alicdn.com/@sc04/kf/H8d3e389715e449cba5f2c41c6f2a752cb.jpg',
'https://s.alicdn.com/@sc04/kf/H161a4757294e4dc7bb291fa1c6ec19aaZ.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 11, 
name: 'Pas de stock', 
description: 'Bientôt disponible',
price: 0,
category: 'vetements',
images: [
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
],
vendorPhone: '+33758146261'
},
{
id: 12, 
name: 'Produit 2', 
description: 'Bientôt disponible',
price: 0,
category: 'vetements',
images: [
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

function openOrderForm() {
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
  nameInput.name = 'name';
  nameInput.pattern = '[A-Za-zÀ-ÿ ]+';
  nameInput.title = 'Seuls les lettres et espaces sont autorisés';
  nameInput.required = true;
  form.appendChild(nameLabel);
  form.appendChild(nameInput);

  const cityLabel = document.createElement('label');
  cityLabel.textContent = 'Ville :';
  const cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.name = 'city';
  cityInput.pattern = '[A-Za-zÀ-ÿ ]+';
  cityInput.title = 'Seuls les lettres et espaces sont autorisés';
  cityInput.required = true;
  form.appendChild(cityLabel);
  form.appendChild(cityInput);

  const countryLabel = document.createElement('label');
  countryLabel.textContent = 'Pays :';
  const countrySelect = document.createElement('select');
  countrySelect.name = 'country';
  countrySelect.required = true;
  countrySelect.innerHTML = `
    <!-- Pays d'Afrique -->
    <option value="+213">Algérie (+213)</option>
    <option value="+244">Angola (+244)</option>
    <option value="+229">Bénin (+229)</option>
    <option value="+226">Burkina Faso (+226)</option>
    <option value="+257">Burundi (+257)</option>
    <option value="+237">Cameroun (+237)</option>
    <option value="+238">Cap-Vert (+238)</option>
    <option value="+236">République Centrafricaine (+236)</option>
    <option value="+235">Tchad (+235)</option>
    <option value="+269">Comores (+269)</option>
    <option value="+242">Congo-Brazzaville (+242)</option>
    <option value="+243">République Démocratique du Congo (+243)</option>
    <option value="+225">Côte d'Ivoire (+225)</option>
    <option value="+253">Djibouti (+253)</option>
    <option value="+20">Égypte (+20)</option>
    <option value="+240">Guinée Équatoriale (+240)</option>
    <option value="+291">Érythrée (+291)</option>
    <option value="+251">Éthiopie (+251)</option>
    <option value="+241">Gabon (+241)</option>
    <option value="+220">Gambie (+220)</option>
    <option value="+233">Ghana (+233)</option>
    <option value="+224">Guinée (+224)</option>
    <option value="+245">Guinée-Bissau (+245)</option>
    <option value="+254">Kenya (+254)</option>
    <option value="+266">Lesotho (+266)</option>
    <option value="+231">Libéria (+231)</option>
    <option value="+218">Libye (+218)</option>
    <option value="+261">Madagascar (+261)</option>
    <option value="+265">Malawi (+265)</option>
    <option value="+223">Mali (+223)</option>
    <option value="+222">Mauritanie (+222)</option>
    <option value="+230">Maurice (+230)</option>
    <option value="+212">Maroc (+212)</option>
    <option value="+258">Mozambique (+258)</option>
    <option value="+264">Namibie (+264)</option>
    <option value="+227">Niger (+227)</option>
    <option value="+234">Nigeria (+234)</option>
    <option value="+250">Rwanda (+250)</option>
    <option value="+239">Sao Tomé-et-Principe (+239)</option>
    <option value="+221">Sénégal (+221)</option>
    <option value="+248">Seychelles (+248)</option>
    <option value="+232">Sierra Leone (+232)</option>
    <option value="+252">Somalie (+252)</option>
    <option value="+27">Afrique du Sud (+27)</option>
    <option value="+211">Soudan du Sud (+211)</option>
    <option value="+249">Soudan (+249)</option>
    <option value="+268">Eswatini (+268)</option>
    <option value="+255">Tanzanie (+255)</option>
    <option value="+228">Togo (+228)</option>
    <option value="+216">Tunisie (+216)</option>
    <option value="+256">Ouganda (+256)</option>
    <option value="+260">Zambie (+260)</option>
    <option value="+263">Zimbabwe (+263)</option>

    <!-- Pays d'Europe -->
    <option value="+43">Autriche (+43)</option>
    <option value="+32">Belgique (+32)</option>
    <option value="+359">Bulgarie (+359)</option>
    <option value="+357">Chypre (+357)</option>
    <option value="+420">République Tchèque (+420)</option>
    <option value="+45">Danemark (+45)</option>
    <option value="+372">Estonie (+372)</option>
    <option value="+358">Finlande (+358)</option>
    <option value="+33">France (+33)</option>
    <option value="+49">Allemagne (+49)</option>
    <option value="+30">Grèce (+30)</option>
    <option value="+36">Hongrie (+36)</option>
    <option value="+354">Islande (+354)</option>
    <option value="+353">Irlande (+353)</option>
    <option value="+39">Italie (+39)</option>
    <option value="+371">Lettonie (+371)</option>
    <option value="+370">Lituanie (+370)</option>
    <option value="+352">Luxembourg (+352)</option>
    <option value="+356">Malte (+356)</option>
    <option value="+31">Pays-Bas (+31)</option>
    <option value="+47">Norvège (+47)</option>
    <option value="+48">Pologne (+48)</option>
    <option value="+351">Portugal (+351)</option>
    <option value="+40">Roumanie (+40)</option>
    <option value="+7">Russie (+7)</option>
    <option value="+421">Slovaquie (+421)</option>
    <option value="+386">Slovénie (+386)</option>
    <option value="+34">Espagne (+34)</option>
    <option value="+46">Suède (+46)</option>
    <option value="+41">Suisse (+41)</option>
    <option value="+44">Royaume-Uni (+44)</option>
  `;
  form.appendChild(countryLabel);
  form.appendChild(countrySelect);

  const phoneLabel = document.createElement('label');
  phoneLabel.textContent = 'Numéro de téléphone :';
  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.name = 'phone';
  phoneInput.required = true;
  form.appendChild(phoneLabel);
  form.appendChild(phoneInput);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Discuter avec le vendeur';
  form.appendChild(submitBtn);

  formContainer.appendChild(form);
  formPopup.appendChild(formContainer);
  document.body.appendChild(formPopup);

  formPopup.style.display = 'block';

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name');
    const city = formData.get('city');
    const country = formData.get('country');
    const phone = formData.get('phone');

    const message = `Bonjour, je m'appelle ${name}.\nJ'habite à ${city}.\n\nJe souhaite commander le produit :\n${product.name}\n${phone}.`;

    const whatsappUrl = `https://wa.me/${vendorPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    formPopup.style.display = 'none';
  });
}

openOrderForm();


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