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
  'https://live.staticflickr.com/65535/53804146564_6d12963d8f_b.jpg',
  'https://live.staticflickr.com/65535/53804063223_07ccde5008_b.jpg',
  'https://live.staticflickr.com/65535/53803818431_29f2a5a591_b.jpg'
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
  'https://live.staticflickr.com/65535/53804063198_7af2ed9561_b.jpg',
  'https://live.staticflickr.com/65535/53802885782_77b847496f_b.jpg',
  'https://live.staticflickr.com/65535/53804146569_481a14341d_b.jpg'
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
name: 'Pull ', 
description: 'Coton/Fibre de bambou',
price: 9000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H41b80ca10ccd4bac8264eefd48316704V.jpg',
'https://s.alicdn.com/@sc04/kf/H491e6c1e4845486abc3afc8718c9a964W.jpg',
],
vendorPhone: '+33758146261'
},
{
id: 12, 
name: 'Robe', 
description: 'Polyester',
price: 20000,
category: 'vetements',
images: [
'https://s.alicdn.com/@sc04/kf/H58cb15421aa94bc5a813bf8f4b883a3bY.png',
'https://s.alicdn.com/@sc04/kf/H9d075e179f454d2388796c5bda521df3Q.jpg',
'https://s.alicdn.com/@sc04/kf/Hd6ced2e218df41f7bb1c17bdb9f73de9e.jpg',
'https://s.alicdn.com/@sc04/kf/Hd1f0f03ed9824666ae75f8bb44be83ae0.jpg',
'https://s.alicdn.com/@sc04/kf/H3d6bd0cb4b8f400f9dde650405b8176f2.jpg',
'https://s.alicdn.com/@sc04/kf/Hd4264e42d8254abbaa38bacc299612e3M.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 13, 
name: 'Chemises Hommes', 
description: 'Col rabattu',
price: 70000,
category: 'vetements',
images: [
  'https://s.alicdn.com/@sc04/kf/H12cdfb8eaa3a4929be28cba2d2c701cbW.jpg',
  'https://s.alicdn.com/@sc04/kf/H2d6d61a7e124466a8ab87e3d4e9d6a38c.jpg',
  'https://s.alicdn.com/@sc04/kf/H197d813ab6d645268032263c9b2b40a00.jpg',
  'https://s.alicdn.com/@sc04/kf/Hae3219dab53547cf863174cc0d908c96z.jpg',
  'https://s.alicdn.com/@sc04/kf/Hdf4b5a1e550349f5967b283dca1d84c0h.jpg'
  ],
vendorPhone: '+33758146261'
},
{
id: 14, 
name: 'Chemises Hommes', 
description: '	Polyester / coton',
price: 70000,
category: 'vetements',
images: [
  'https://s.alicdn.com/@sc04/kf/H414fc4a08f8f4b0690dd30d2118a0f8eU.jpg',
  'https://s.alicdn.com/@sc04/kf/H1be3e820295b438588483000eb45c891l.jpg',
  'https://s.alicdn.com/@sc04/kf/Hefe0c5fe5f644ea8a8dd90ba8f0d98e0I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd50830bdb3014505811fe3b4761a8a6fl.jpg',
  'https://s.alicdn.com/@sc04/kf/Hf8bbab9f172d43309128ba137f426061x.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 15, 
name: 'Shorts', 
description: '100% Polyester',
price: 90000,
category: 'vetements',
images: [
  'https://s.alicdn.com/@sc04/kf/Hc13922b4f77741a1971d5d3ea8164f73P.png',
  'https://s.alicdn.com/@sc04/kf/H70702c2fbcca4385add27f95d2f9f5fcp.png',
  'https://s.alicdn.com/@sc04/kf/H030af050062d4538acb91c1af58b6bb2t.png',
  'https://s.alicdn.com/@sc04/kf/Hd9b97457fc904340a0327bde51254635F.png',
  'https://s.alicdn.com/@sc04/kf/Hd6152d57976e4b0f931b81d5206ca19eV.png'
],
vendorPhone: '+33758146261'
},
{
id: 16, 
name: 'Draps plats', 
description: '100% Polyester',
price: 90000,
category: 'maison',
images: [
  'https://s.alicdn.com/@sc04/kf/Ha9658f0230284f87ac87c68821d68bb2G.jpg',
  'https://s.alicdn.com/@sc04/kf/H5423e303cfbb47529b3600661f20c20cx.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hbf6d45e665ba49d1a0b0f71b489aec9bA.jpg',
  'https://s.alicdn.com/@sc04/kf/H80e39df3cadd4f778bd15007d9394ef7H.png'
],
vendorPhone: '+33758146261'
},
{
id: 17, 
name: 'Drap-housse', 
description: 'Polyester/cotonr',
price: 10000,
category: 'maison',
images: [
  'https://s.alicdn.com/@sc04/kf/Hb9327b0ad28d4d7592200ae312ad278be.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd563096c298245a59a298ff69c296e67C.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg',
  'https://s.alicdn.com/@sc04/kf/Hd8c1570821934f2ba9c4de9feb241d898.jpg',
  'https://s.alicdn.com/@sc04/kf/H7270ff5536e1419c858dfbb155434c54U.jpg',
  'https://s.alicdn.com/@sc04/kf/H7c67bde15747449e82c29d2c3d49c4332.jpg'
],
vendorPhone: '+33758146261'
},
{
id: 18, 
name: 'Mixeur', 
description: 'Fruit et Légumes',
price: 7000,
category: 'maison',
images: [
  'https://s.alicdn.com/@sc04/kf/H2890d50f345f4056ac236fad8fbb5f8cU.png',
  'https://s.alicdn.com/@sc04/kf/Hdde0ea2ed30944f0ada91c76439c16e8V.png',
  'https://s.alicdn.com/@sc04/kf/H5bcfa19a90fc4be5b7a06ba1ea5e85b3Y.png',
  'https://s.alicdn.com/@sc04/kf/Hfb95223a915043ee95329d8d2880b7dc6.png',
  'https://s.alicdn.com/@sc04/kf/H4a0d44471a694a7d945170de8cdd78f0A.png',
  'https://s.alicdn.com/@sc04/kf/Hcbf55f7354bf4bc9891139bb872a478cx.png'
],
vendorPhone: '+33758146261'
},
{
id: 19, 
name: 'Manette', 
description: 'Pour téléphone Mobile',
price: 20000,
category: 'electronique',
images: [
  'https://s.alicdn.com/@sc04/kf/Hc1c0b699684b42b6a00dd234944547184.jpg',
  'https://s.alicdn.com/@sc04/kf/H206a15ef54194c5c831b9c5ae6fe2b6fR.jpg',
  'https://s.alicdn.com/@sc04/kf/H189c6bd52c6249b49e867b0243cc4f20W.jpg',
  'https://s.alicdn.com/@sc04/kf/Hb493a24e6f85418383c380d210e87cfbW.jpg',
  'https://s.alicdn.com/@sc04/kf/H538b2787519d46fab86128f1874d187aw.jpg',
  'https://s.alicdn.com/@sc04/kf/He8f69a08da8f43ba97ce66c76d61e53eF.jpg'
],
vendorPhone: '+33758146261'
},

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

function openOrderForm(product) {
  // Créer le modal
  const modal = document.createElement('div');
  modal.id = 'user-info-modal';
  modal.classList.add('modal');

  // Créer le contenu du modal
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Bouton de fermeture du modal
  const closeModalSpan = document.createElement('span');
  closeModalSpan.classList.add('close');
  closeModalSpan.textContent = '×';
  closeModalSpan.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset(); // Réinitialiser le formulaire lorsque le modal est fermé
  });

  // Formulaire à l'intérieur du modal
  const form = document.createElement('form');
  form.id = 'user-info-form';

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Nom :';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.required = true;
  nameLabel.appendChild(nameInput);

  const cityLabel = document.createElement('label');
  cityLabel.setAttribute('for', 'city');
  cityLabel.textContent = 'Ville :';
  const cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.id = 'city';
  cityInput.name = 'city';
  cityInput.required = true;
  cityLabel.appendChild(cityInput);

  const countryLabel = document.createElement('label');
  countryLabel.setAttribute('for', 'country');
  countryLabel.textContent = 'Pays :';
  const countrySelect = document.createElement('select');
  countrySelect.id = 'country';
  countrySelect.name = 'country';
  countrySelect.required = true;

  const countries = [
    { code: 'DZ', name: 'Algérie' },
    { code: 'AO', name: 'Angola' },
    { code: 'BJ', name: 'Bénin' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'CM', name: 'Cameroun' },
    { code: 'CV', name: 'Cap-Vert' },
    { code: 'CF', name: 'République centrafricaine' },
    { code: 'TD', name: 'Tchad' },
    { code: 'KM', name: 'Comores' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'République Démocratique du Congo' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'EG', name: 'Égypte' },
    { code: 'GQ', name: 'Guinée équatoriale' },
    { code: 'ER', name: 'Érythrée' },
    { code: 'ET', name: 'Éthiopie' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambie' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GN', name: 'Guinée' },
    { code: 'GW', name: 'Guinée-Bissau' },
    { code: 'CI', name: "Côte d'Ivoire" },
    { code: 'KE', name: 'Kenya' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Libéria' },
    { code: 'LY', name: 'Libye' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'ML', name: 'Mali' },
    { code: 'MR', name: 'Mauritanie' },
    { code: 'MU', name: 'Maurice' },
    { code: 'MA', name: 'Maroc' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'NA', name: 'Namibie' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigéria' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'ST', name: 'Sao Tomé-et-Principe' },
    { code: 'SN', name: 'Sénégal' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SO', name: 'Somalie' },
    { code: 'ZA', name: 'Afrique du Sud' },
    { code: 'SS', name: 'Soudan du Sud' },
    { code: 'SD', name: 'Soudan' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'TZ', name: 'Tanzanie' },
    { code: 'TG', name: 'Togo' },
    { code: 'TN', name: 'Tunisie' },
    { code: 'UG', name: 'Ouganda' },
    { code: 'ZM', name: 'Zambie' },
    { code: 'ZW', name: 'Zimbabwe' }
  ];

  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Discuter avec le vendeur';

  form.appendChild(nameLabel);
  form.appendChild(cityLabel);
  form.appendChild(countryLabel);
  form.appendChild(countrySelect);
  form.appendChild(submitButton);

  modalContent.appendChild(closeModalSpan);
  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Afficher le modal
  modal.style.display = 'block';

  // Ajouter un événement de soumission au formulaire
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      const name = nameInput.value;
      const city = cityInput.value;
      const country = countrySelect.options[countrySelect.selectedIndex].text;
      const message = `Bonjour, je m'appelle ${name}.\nJ'habite à ${city}, ${country}.\n\nJe souhaite commander le produit :\n${product.name}.`;
      const whatsappUrl = `https://wa.me/${product.vendorPhone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      modal.style.display = 'none';
      form.reset(); // Réinitialiser le formulaire après l'envoi
    } else {
      alert('Veuillez remplir correctement tous les champs.');
    }
  });

  // Validation du formulaire
  function validateForm() {
    const nameValid = /^[a-zA-Z\s]+$/.test(nameInput.value);
    const cityValid = /^[a-zA-Z\s]+$/.test(cityInput.value);
    const countryValid = countrySelect.value !== '';

    return nameValid && cityValid && countryValid;
  }
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

// document.getElementById('filter').addEventListener('input', filterProducts);
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