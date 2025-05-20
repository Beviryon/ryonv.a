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
        id: 10, name: 'Produit 2',  description: 'Description du produit 2',price: 24.99,category: 'vetements',images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 11, name: 'Produit 2',  description: 'Description du produit 2',price: 24.99,category: 'vetements',images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },
    {
        id: 12, name: 'Produit 2',  description: 'Description du produit 2',price: 24.99,category: 'vetements',images: [
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        ],
        vendorPhone: '+33758146261' 
      },

  ];
  
  // Function to fix phone numbers by removing duplicate country code prefixes
  function fixPhoneNumber(phoneNumber) {
    if (!phoneNumber) return phoneNumber;
    
    // If the number starts with +221, remove the 221 part
    if (phoneNumber.startsWith('+221')) {
      return '+' + phoneNumber.substring(4); // Keep the + but remove 221
    }
    
    return phoneNumber;
  }
  
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
    
    // Fix the phone number before creating the WhatsApp link
    const fixedPhone = fixPhoneNumber(product.vendorPhone);
    whatsappBtn.href = `https://wa.me/${fixedPhone}?text=Bonjour,%20je%20souhaite%20commander%20le%20produit%20:%20${product.name}.%20Voici%20le%20lien%20de%20l'image%20:%20${encodeURIComponent(product.images[0])}`;
    whatsappBtn.target = '_blank';
    card.appendChild(whatsappBtn);

    const detailsBtn = document.createElement('a');
    detailsBtn.classList.add('btn-detail');
    detailsBtn.textContent = 'Détails du produit';
    detailsBtn.href = `details.html?id=${product.id}`;
    card.appendChild(detailsBtn);
  
    return card;
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
  

  ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
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
    form.reset(); 
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

    // Lien vers les modalités de livraison
    const deliveryLink = document.createElement('p');
    deliveryLink.innerHTML = `<a href="./modalites-livraison.html" target="_blank">Connaître les modalités de livraison</a>`;
    deliveryLink.style.marginTop = '10px';

  form.appendChild(nameLabel);
  form.appendChild(cityLabel);
  form.appendChild(countryLabel);
  form.appendChild(countrySelect);
  form.appendChild(submitButton);
  form.appendChild(deliveryLink);

  modalContent.appendChild(closeModalSpan);
  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Afficher le modal
  modal.style.display = 'block';

  // Ajouter un événement de soumission au formulaire
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     const name = nameInput.value;
  //     const city = cityInput.value;
  //     const country = countrySelect.options[countrySelect.selectedIndex].text;
  //     const message = `Bonjour, je m'appelle ${name}.\nJ'habite à ${city}, ${country}.\n\nJe souhaite commander le produit :\n${product.name}.`;
  //     const whatsappUrl = `https://wa.me/${product.vendorPhone}?text=${encodeURIComponent(message)}`;
  //     window.open(whatsappUrl, '_blank');
  //     modal.style.display = 'none';
  //     form.reset(); 
  //   } else {
  //     alert('Veuillez remplir correctement tous les champs.');
  //   }
  // });


  // Ajouter un événement de soumission au formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
      const name = nameInput.value;
      const city = cityInput.value;
      const country = countrySelect.options[countrySelect.selectedIndex].text;

      // Informations sur le produit
      const productName = product.name;
      const productDescription = product.description;
      const productPrice = product.price;
      const productImages = product.images;
      const vendorPhone = product.vendorPhone;
      const productId = product.id;

      // Générer l'URL spécifique du produit en utilisant son ID
      const productLink = `https://ryone.netlify.app/details.html?id=${productId}`;

      // Construire le message WhatsApp
      let message = `Bonjour, je m'appelle ${name}.\nJ'habite à ${city}, ${country}.\n\n`;
      message += `Je souhaite commander le produit :\n`;
      message += `- Nom : ${productName}\n`;
      message += `- Description : ${productDescription}\n`;
      message += `- Prix : ${productPrice} FCFA\n`;
      message += `- Lien : ${productLink}\n`;

      // Ajouter les images au message
      if (productImages && productImages.length > 0) {
          message += `- Images :\n`;
          productImages.forEach((image, index ) => {
              message += `   ${index + 1}. ${image}\n`;
          });
      }

      // Encodage de l'URL de WhatsApp
      const fixedPhone = fixPhoneNumber(vendorPhone);
      const whatsappUrl = `https://wa.me/${fixedPhone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      modal.style.display = 'none';
      form.reset();
  } else {
      alert('Veuillez remplir correctement tous les champs.');
  }
});


  // Validation du formulaire
  function validateForm() {
    const nameValid = /^[a-zA-Z\s,;_\-'\u00C0-\u017F]+$/.test(nameInput.value);
    const cityValid = /^[a-zA-Z\s,;_\-'\u00C0-\u017F]+$/.test(cityInput.value);
    const countryValid = countrySelect.value !== '';
  
    return nameValid && cityValid && countryValid;
  }
  
}