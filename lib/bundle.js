"use strict";

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();
"use strict";

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();
"use strict";

var helmet = require('helmet');
module.exports = helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://apis.google.com"]
  }
});
"use strict";

var products = [{
  id: 1,
  name: 'Écouteurs intra-auriculaires',
  description: 'Capacité batterie (mAh)	500mAh\n Couleurs	Noir Blanc\n Écouteurs intra-auriculaires TWS à suppression de bruit ANC Microphone ENC à écran tactile Son super basse Batterie longue durée Écouteurs étanches',
  price: 17500,
  images: ['https://s.alicdn.com/@sc04/kf/H8d4e33a9c7344e6aae486a7e45b05e24H.jpg', 'https://s.alicdn.com/@sc04/kf/Hdb7f824324e84044b3eef68f9d9878eaB.jpg', 'hhttps://s.alicdn.com/@sc04/kf/Hddcc916518fc4fcf97f1253fbb5c82c4C.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 2,
  name: 'Boîte de rangement polyvalente',
  description: 'Marque compatible	Tous les téléphones mobiles\n Produit	Boîte de rangement polyvalente\n Conception fonctionnelle	Multifonction\n Support de téléphone portable mural avec auto-adhésif pour salle de bain chambre cuisine support de chargeur télécommande boîte de rangement',
  price: 1200,
  images: ['https://s.alicdn.com/@sc04/kf/H0911ecc7982549489bd59d3976fc5378W.jpg', 'https://s.alicdn.com/@sc04/kf/H9a2c6edd9c6e454e9f6cddff49f56dafc.jpg', 'https://s.alicdn.com/@sc04/kf/H2fef3c9f9fa247439fe76a740fd921fcE.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 3,
  name: 'Sacs de Téléphone portable ',
  description: 'Brassard De Sport pour Téléphone Portable Pour Tous Les Téléphones mobiles Accessoire',
  price: 25000,
  images: ['https://s.alicdn.com/@sc04/kf/HTB1FQLZXOnrK1Rjy1Xcq6yeDVXah.jpg', 'https://s.alicdn.com/@sc04/kf/HTB1XuTUinlYBeNjSszcq6zwhFXaW.jpg', 'https://s.alicdn.com/@sc04/kf/HTB11gOaiXmWBuNjSspdq6zugXXaQ.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 4,
  name: 'Custom Brand',
  description: "Costume 3 pièces élégant avec pantalon pour homme, coupe Slim, bouton unique, tenue de soirée formelle, costume d'affaires",
  price: 150000,
  images: ['https://s.alicdn.com/@sc04/kf/H3a17680c893a4090abfe94b2ad36b21cR.jpg', 'https://s.alicdn.com/@sc04/kf/Hd9c68838f4444723a0c5a633cffe073dn.jpg', 'https://s.alicdn.com/@sc04/kf/H6db20e92226c43bc996db6197dd5be93l.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 5,
  name: '	Femmes Sexy Jupe',
  description: 'Jupe en denim pour femmes, longue, taille haute, mode de bureau, style décontracté, nouvelle collection été',
  price: 10000,
  images: ['https://s.alicdn.com/@sc04/kf/H85526e7e55e443c593b9302487ad2ba2R.jpg', 'https://s.alicdn.com/@sc04/kf/H1f7aaa81232649b4b352c4e228268009O.jpg', 'https://s.alicdn.com/@sc04/kf/Hfde0ff53a70a41ad82d118ee575586ffY.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 6,
  // Vêtements raison
  name: 'Robe',
  description: 'Tailles: XL | M | L',
  price: 8000,
  images: ['https://live.staticflickr.com/65535/53804146564_6d12963d8f_b.jpg', 'https://live.staticflickr.com/65535/53804063223_07ccde5008_b.jpg', 'https://live.staticflickr.com/65535/53803818431_29f2a5a591_b.jpg'],
  vendorPhone: '+221784743356'
},
// Vêtements
{
  id: 7,
  // Vêtements raison
  name: 'Robe en gros et en détails',
  description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
  price: 8000,
  images: ['https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg', 'https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg', 'https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg'],
  vendorPhone: '+221784743356'
}, {
  id: 8,
  name: 'Robe de soirée femme',
  description: '100% Polyester Vente en gros de vêtements personnalisés pour femmes robes de bal en satin pour femme robe de soirée enveloppante chic à une épaule robe élégante',
  price: 20000,
  images: ['https://s.alicdn.com/@sc04/kf/Hbfc38afed3fc4b3984e40cbc5ed8a49cP.jpg', 'https://s.alicdn.com/@sc04/kf/H5710996c11594111ad7b127ee5c8cd741.jpg', 'https://s.alicdn.com/@sc04/kf/H43167ad91703404b8f759650953ff9c8B.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 9,
  name: 'sacs à main vintage pour dames',
  description: 'Grands sacs à main vintage pour dames: modèle 2023, fourre-tout en cuir PU et polyester, sacs à bandoulière chics pour femmes',
  price: 7000,
  images: ['https://s.alicdn.com/@sc04/kf/H2aa20b2331584b08914ebfdbecc8f76eo.jpg', 'https://s.alicdn.com/@sc04/kf/H7d09183f2f284305bb1d08834b842c4eY.jpg', 'https://s.alicdn.com/@sc04/kf/H0a2b7c07b5c2400cade43ace2db65141G.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 10,
  name: 'H-P EliteBook 640G9',
  description: "WINDOWS 11 HOME? Reconnaissance d'empreintes digitales, Fréquence principale du processeur	2.10 GHz, Capacité d'unité de disque dur(1): 512 Go, i5-1235U/16G/512G SSD, H-P EliteBook 640G9 Intel Core Series 12e génération CPU commercial/Offre Spéciale/grand public/maison/étudiant ordinateur portable",
  price: 250000,
  images: ['https://s.alicdn.com/@sc04/kf/H13b354835d0742a1919dab2e5386d5d90.jpg', 'https://s.alicdn.com/@sc04/kf/H8d3e389715e449cba5f2c41c6f2a752cb.jpg', 'https://s.alicdn.com/@sc04/kf/H161a4757294e4dc7bb291fa1c6ec19aaZ.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 11,
  name: 'Pull Homme | Femme',
  description: 'Blanc personnalisé à manches longues hiver coton français éponge pull sweat mince Couple ras du cou sweats à capuche et sweats',
  price: 9000,
  images: ['https://s.alicdn.com/@sc04/kf/H41b80ca10ccd4bac8264eefd48316704V.jpg', 'https://s.alicdn.com/@sc04/kf/H491e6c1e4845486abc3afc8718c9a964W.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 12,
  name: 'Combinaison femmes',
  description: 'combinaison femmes lâche plissé large jambe combinaisons élégant bureau dames à manches longues combinaison avec ceinture',
  price: 20000,
  images: ['https://s.alicdn.com/@sc04/kf/H58cb15421aa94bc5a813bf8f4b883a3bY.png', 'https://s.alicdn.com/@sc04/kf/H9d075e179f454d2388796c5bda521df3Q.jpg', 'https://s.alicdn.com/@sc04/kf/Hd6ced2e218df41f7bb1c17bdb9f73de9e.jpg', 'https://s.alicdn.com/@sc04/kf/Hd1f0f03ed9824666ae75f8bb44be83ae0.jpg', 'https://s.alicdn.com/@sc04/kf/H3d6bd0cb4b8f400f9dde650405b8176f2.jpg', 'https://s.alicdn.com/@sc04/kf/Hd4264e42d8254abbaa38bacc299612e3M.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 13,
  name: 'Chemises Hommes',
  description: "Chemises pour hommes en pur coton, Anti-rétricissant, Anti-rides, Respirant, Séchage rapide, Autres de vente chaude, couleur unie, chemise bleue vierge, chemise à manches longues à revers, en stock, rapidement envoyé",
  price: 70000,
  images: ['https://s.alicdn.com/@sc04/kf/H12cdfb8eaa3a4929be28cba2d2c701cbW.jpg', 'https://s.alicdn.com/@sc04/kf/H2d6d61a7e124466a8ab87e3d4e9d6a38c.jpg', 'https://s.alicdn.com/@sc04/kf/H197d813ab6d645268032263c9b2b40a00.jpg', 'https://s.alicdn.com/@sc04/kf/Hae3219dab53547cf863174cc0d908c96z.jpg', 'https://s.alicdn.com/@sc04/kf/Hdf4b5a1e550349f5967b283dca1d84c0h.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 14,
  name: 'Chemises Hommes',
  description: "Chemise de couleur unie Oxford tissée mince pour hommes, chemise à manches longues pour hommes, nouvelle collection d'automne transfrontalier",
  price: 70000,
  images: ['https://s.alicdn.com/@sc04/kf/H414fc4a08f8f4b0690dd30d2118a0f8eU.jpg', 'https://s.alicdn.com/@sc04/kf/H1be3e820295b438588483000eb45c891l.jpg', 'https://s.alicdn.com/@sc04/kf/Hefe0c5fe5f644ea8a8dd90ba8f0d98e0I.jpg', 'https://s.alicdn.com/@sc04/kf/Hd50830bdb3014505811fe3b4761a8a6fl.jpg', 'https://s.alicdn.com/@sc04/kf/Hf8bbab9f172d43309128ba137f426061x.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 15,
  name: 'Ensembles de shorts',
  description: "Ensembles de shorts pour hommes Ensemble de chemises d'été personnalisées pour hommes Ensemble de t-shirts et shorts de plage à manches courtes",
  price: 90000,
  images: ['https://s.alicdn.com/@sc04/kf/Hc13922b4f77741a1971d5d3ea8164f73P.png', 'https://s.alicdn.com/@sc04/kf/H70702c2fbcca4385add27f95d2f9f5fcp.png', 'https://s.alicdn.com/@sc04/kf/H030af050062d4538acb91c1af58b6bb2t.png', 'https://s.alicdn.com/@sc04/kf/Hd9b97457fc904340a0327bde51254635F.png', 'https://s.alicdn.com/@sc04/kf/Hd6152d57976e4b0f931b81d5206ca19eV.png'],
  vendorPhone: '+33758146261'
}, {
  id: 16,
  name: 'draps plats',
  description: "Vente en gros de draps plats en polyester brossé en microfibre ensembles de draps et taies d'oreiller",
  price: 90000,
  images: ['https://s.alicdn.com/@sc04/kf/Ha9658f0230284f87ac87c68821d68bb2G.jpg', 'https://s.alicdn.com/@sc04/kf/H5423e303cfbb47529b3600661f20c20cx.jpg', 'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg', 'https://s.alicdn.com/@sc04/kf/Hbf6d45e665ba49d1a0b0f71b489aec9bA.jpg', 'https://s.alicdn.com/@sc04/kf/H80e39df3cadd4f778bd15007d9394ef7H.png'],
  vendorPhone: '+33758146261'
}, {
  id: 17,
  name: 'Drap-housse',
  description: "Drap-housse à imprimé café avec taies d'oreiller, housse de protection de matelas, taille King/Queen/Twin, 3 pièces",
  price: 10000,
  images: ['https://s.alicdn.com/@sc04/kf/Hb9327b0ad28d4d7592200ae312ad278be.jpg', 'https://s.alicdn.com/@sc04/kf/Hd563096c298245a59a298ff69c296e67C.jpg', 'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg', 'https://s.alicdn.com/@sc04/kf/Hd8c1570821934f2ba9c4de9feb241d898.jpg', 'https://s.alicdn.com/@sc04/kf/H7270ff5536e1419c858dfbb155434c54U.jpg', 'https://s.alicdn.com/@sc04/kf/H7c67bde15747449e82c29d2c3d49c4332.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 18,
  name: 'Mini broyeur',
  description: "Nouveau hachoir à lame en métal manuel Mini broyeur d'ail en acier inoxydable pour légumes et fruits pour usage en cuisine",
  price: 7000,
  images: ['https://s.alicdn.com/@sc04/kf/H2890d50f345f4056ac236fad8fbb5f8cU.png', 'https://s.alicdn.com/@sc04/kf/Hdde0ea2ed30944f0ada91c76439c16e8V.png', 'https://s.alicdn.com/@sc04/kf/H5bcfa19a90fc4be5b7a06ba1ea5e85b3Y.png', 'https://s.alicdn.com/@sc04/kf/Hfb95223a915043ee95329d8d2880b7dc6.png', 'https://s.alicdn.com/@sc04/kf/H4a0d44471a694a7d945170de8cdd78f0A.png', 'https://s.alicdn.com/@sc04/kf/Hcbf55f7354bf4bc9891139bb872a478cx.png'],
  vendorPhone: '+33758146261'
}, {
  id: 19,
  name: 'Contrôleur de jeu sans fil 2.4G ',
  description: "PG-9076 contrôleur de jeu sans fil 2.4G pour Android Smartphone iOS Gamepad pour PC PS3 poignée Joystick",
  price: 20000,
  images: ['https://s.alicdn.com/@sc04/kf/Hc1c0b699684b42b6a00dd234944547184.jpg', 'https://s.alicdn.com/@sc04/kf/H206a15ef54194c5c831b9c5ae6fe2b6fR.jpg', 'https://s.alicdn.com/@sc04/kf/H189c6bd52c6249b49e867b0243cc4f20W.jpg', 'https://s.alicdn.com/@sc04/kf/Hb493a24e6f85418383c380d210e87cfbW.jpg', 'https://s.alicdn.com/@sc04/kf/H538b2787519d46fab86128f1874d187aw.jpg', 'https://s.alicdn.com/@sc04/kf/He8f69a08da8f43ba97ce66c76d61e53eF.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 20,
  // Vêtements raison
  name: 'Ensemble H&F',
  description: 'Tissu en coton,\n Disponible taille L | XL | XXL | 3XL',
  price: 9000,
  images: ['https://live.staticflickr.com/65535/53808149299_845e11f25b_w.jpg', 'https://live.staticflickr.com/65535/53806891127_2371ca23f1_w.jpg', 'https://live.staticflickr.com/65535/53807824346_a454c0bc44_w.jpg', 'https://live.staticflickr.com/65535/53808261690_3762aca3df_w.jpg'],
  vendorPhone: '+221784743356'
}];
"use strict";

var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('id');
var product = products.find(function (p) {
  return p.id === parseInt(productId);
});
var productInfo = document.getElementById('product-info');
var name = document.createElement('h2');
name.textContent = product.name;
productInfo.appendChild(name);
var description = document.createElement('p_details');
description.textContent = product.description;
productInfo.appendChild(description);
var price = document.createElement('p_prix');
price.textContent = "Prix : ".concat(product.price, " FCFA");
productInfo.appendChild(price);
var images = document.createElement('div');
// Créer le bouton "Discuter avec le vendeur"
var button = document.createElement('button');
button.textContent = "Voir d'autres produits";
button.addEventListener('click', function () {
  var phoneNumber = product.vendorPhone.replace(/[^0-9]/g, '');
  var whatsappUrl = "./produits.html";
  window.location.href = whatsappUrl;
});
productInfo.appendChild(button);
images.classList.add('product-images');
product.images.forEach(function (imageUrl) {
  var img = document.createElement('img');
  img.src = imageUrl;
  img.alt = product.name;
  images.appendChild(img);
});
productInfo.appendChild(images);
var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();
"use strict";

var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('id');
var product = products.find(function (p) {
  return p.id === parseInt(productId);
});
var productInfo = document.getElementById('product-info');
var name = document.createElement('h2');
name.textContent = product.name;
productInfo.appendChild(name);
var description = document.createElement('p');
description.textContent = product.description;
productInfo.appendChild(description);
var price = document.createElement('p');
price.textContent = "Prix : ".concat(product.price, " Fcfa");
productInfo.appendChild(price);
var images = document.createElement('div');
// Créer le bouton "Discuter avec le vendeur"
var button = document.createElement('button');
button.textContent = 'Discuter avec le vendeur';
button.addEventListener('click', function () {
  var phoneNumber = product.vendorPhone.replace(/[^0-9]/g, '');
  var whatsappUrl = "./produits.html";
  window.location.href = whatsappUrl;
});
productInfo.appendChild(button);
images.classList.add('product-images');
product.images.forEach(function (imageUrl) {
  var img = document.createElement('img');
  img.src = imageUrl;
  img.alt = product.name;
  images.appendChild(img);
});
productInfo.appendChild(images);
var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();
"use strict";

// Données de formation fictives
var formations = [{
  id: 1,
  titre: 'Dévoloppement web',
  description: 'La formation est basées sur le JavaScripte, HTML, CSS',
  contenu: "Nous sommes ravis de vous présenter notre programme de formation,conçu pour vous doter des compétences indispensables en développement web. Notre formation est spécifiquement centrée sur les technologies clés du web moderne : JavaScript, HTML et CSS. Formation en Développement Web : JavaScript, HTML, CSS Pourquoi cette formation ? JavaScript : Maîtrisez le langage de programmation incontournable pour créer des sites web interactifs et dynamiques. Apprenez à manipuler le DOM, gérer des événements, et utiliser des frameworks populaires comme React ou Angular. HTML (HyperText Markup Language) : Découvrez les fondations de toute page web. Apprenez à structurer le contenu de vos sites de manière sémantique et accessible, garantissant une base solide pour toutes vos créations. CSS (Cascading Style Sheets) : Développez vos compétences en design web. Apprenez à styliser et mettre en forme vos pages web avec élégance et efficacité, en utilisant des techniques modernes telles que Flexbox et Grid Layout.",
  image: 'https://tse4.mm.bing.net/th?id=OIP.igo55aPjEMu3ZJ2tTnZTpwAAAA&pid=Api&P=0&h=180'
}, {
  id: 2,
  titre: 'Désign graphique',
  description: "Pourquoi choisir cette formation ? Adobe Photoshop, InDesign et Illustrator sont des logiciels incontournables dans le monde du design graphique. Maîtriser ces outils vous permettra de réaliser une large gamme de projets créatifs, allant de l'édition d'images et de la création de logos à la mise en page de magazines et de brochures.",
  contenu: "Ce que vous apprendrez : \nAdobe Photoshop : Introduction et interface utilisateur : Découvrez l'interface de Photoshop, les outils de base et les panneaux de contrôle. Édition et retouche d'images : Apprenez à retoucher des photos, à ajuster les couleurs, à corriger les imperfections et à utiliser les calques et les masques. Techniques de sélection et de découpage : Maîtrisez les outils de sélection pour isoler des éléments et créer des compositions complexes... \n Adobe Illustrator : \nIntroduction et interface utilisateur : Familiarisez-vous avec l'interface d'Illustrator et ses outils principaux. Dessin vectoriel : Apprenez à créer des illustrations vectorielles, des logos, des icônes et des graphiques qui peuvent être redimensionnés sans perte de qualité. \nAdobe InDesign : Introduction et interface utilisateur : Explorez l'interface d'InDesign et ses fonctionnalités de base. Mise en page : Apprenez à créer des mises en page professionnelles pour des brochures, des magazines, des livres et des flyers... ",
  image: 'https://tse2.mm.bing.net/th?id=OIP.0Biu3lZyJnvxA-pAHIYtrwHaEK&pid=Api&P=0&h=180'
}, {
  id: 3,
  titre: 'E-Commerce',
  description: 'La formation est basées sur Alibaba, Amazone Busness, Shein',
  contenu: 'La formation est basées sur Alibaba, Amazone Busness, Shein',
  image: 'https://tse4.mm.bing.net/th?id=OIP.n3reqbF8ckjvjK752_doZQHaE8&pid=Api&P=0&h=180'
}, {
  id: 4,
  titre: 'Réseau Informatique',
  description: 'La formation est basées sur...',
  contenu: 'La formation est basées sur...',
  image: 'https://tse4.mm.bing.net/th?id=OIP.n3reqbF8ckjvjK752_doZQHaE8&pid=Api&P=0&h=180'
}];
function showFormationDetails(formationId) {
  var formation = formations.find(function (f) {
    return f.id === formationId;
  });
  if (formation) {
    var modal = document.getElementById('formation-modal');
    var modalContent = modal.querySelector('.modal-content');
    var formationDetails = modalContent.querySelector('.formation-details');
    formationDetails.innerHTML = "\n        <img src=\"".concat(formation.image, "\" alt=\"").concat(formation.titre, "\">\n        <h2>").concat(formation.titre, "</h2>\n        <p>").concat(formation.description, "</p>\n        <h3>Contenu de la formation</h3>\n        <p>").concat(formation.contenu, "</p>\n      ");
    modal.style.display = 'block';
    var closeModal = function closeModal() {
      modal.style.display = 'none';
    };
    var closeBtn = modalContent.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
}
var formationCards = document.querySelectorAll('.formation-card .btn');
formationCards.forEach(function (card) {
  card.addEventListener('click', function (event) {
    event.preventDefault();
    var formationId = event.target.dataset.formationId;
    showFormationDetails(parseInt(formationId));
  });
});
var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();
"use strict";

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;
var products = exports.products = [{
  id: 1,
  name: "Écouteurs d'écran tactile",
  description: 'Écouteurs intra-auriculaires',
  price: 17500,
  category: 'electronique',
  images: ['https://s.alicdn.com/@sc04/kf/H8d4e33a9c7344e6aae486a7e45b05e24H.jpg', 'https://s.alicdn.com/@sc04/kf/Hdb7f824324e84044b3eef68f9d9878eaB.jpg', 'hhttps://s.alicdn.com/@sc04/kf/Hddcc916518fc4fcf97f1253fbb5c82c4C.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 2,
  name: 'Support de téléphone',
  description: 'Décoration de la maison',
  price: 1200,
  category: 'maison',
  images: ['https://s.alicdn.com/@sc04/kf/H0911ecc7982549489bd59d3976fc5378W.jpg', 'https://s.alicdn.com/@sc04/kf/H9a2c6edd9c6e454e9f6cddff49f56dafc.jpg', 'https://s.alicdn.com/@sc04/kf/H2fef3c9f9fa247439fe76a740fd921fcE.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 3,
  name: 'ZONE Sport ',
  description: 'Sacs de Téléphone portable',
  price: 2500,
  category: 'sport',
  images: ['https://s.alicdn.com/@sc04/kf/HTB1FQLZXOnrK1Rjy1Xcq6yeDVXah.jpg', 'https://s.alicdn.com/@sc04/kf/HTB1XuTUinlYBeNjSszcq6zwhFXaW.jpg', 'https://s.alicdn.com/@sc04/kf/HTB11gOaiXmWBuNjSspdq6zugXXaQ.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 4,
  name: 'Custom Brand',
  description: 'Costumes de pantalon',
  price: 150000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/H3a17680c893a4090abfe94b2ad36b21cR.jpg', 'https://s.alicdn.com/@sc04/kf/Hd9c68838f4444723a0c5a633cffe073dn.jpg', 'https://s.alicdn.com/@sc04/kf/H6db20e92226c43bc996db6197dd5be93l.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 5,
  name: 'Femmes Sexy Jupe',
  description: '100% coton Denim',
  price: 10000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/H85526e7e55e443c593b9302487ad2ba2R.jpg', 'https://s.alicdn.com/@sc04/kf/H1f7aaa81232649b4b352c4e228268009O.jpg', 'https://s.alicdn.com/@sc04/kf/Hfde0ff53a70a41ad82d118ee575586ffY.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 6,
  // Vêtements raison
  name: 'Robe',
  description: 'Toutes les tailles',
  price: 8000,
  category: 'vetements',
  images: ['https://live.staticflickr.com/65535/53804146564_6d12963d8f_b.jpg', 'https://live.staticflickr.com/65535/53804063223_07ccde5008_b.jpg', 'https://live.staticflickr.com/65535/53803818431_29f2a5a591_b.jpg'],
  vendorPhone: '+221784743356'
}, {
  id: 7,
  // Vêtements raison
  name: 'Robe',
  description: 'Tissu en coton',
  price: 8000,
  category: 'vetements',
  images: ['https://live.staticflickr.com/65535/53808261640_81983ff3b3_w.jpg', 'https://live.staticflickr.com/65535/53808261655_a7ccaf6301_n.jpg'],
  vendorPhone: '+221784743356'
}, {
  id: 8,
  name: 'Robe de soirée femme',
  description: '100% Polyester',
  price: 20000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/Hbfc38afed3fc4b3984e40cbc5ed8a49cP.jpg', 'https://s.alicdn.com/@sc04/kf/H5710996c11594111ad7b127ee5c8cd741.jpg', 'https://s.alicdn.com/@sc04/kf/H43167ad91703404b8f759650953ff9c8B.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 9,
  name: 'Sac à main',
  description: 'modèle 2023 en cuir',
  price: 7000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/H2aa20b2331584b08914ebfdbecc8f76eo.jpg', 'https://s.alicdn.com/@sc04/kf/H7d09183f2f284305bb1d08834b842c4eY.jpg', 'https://s.alicdn.com/@sc04/kf/H0a2b7c07b5c2400cade43ace2db65141G.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 10,
  name: 'H-P EliteBook 640G9',
  description: 'WINDOWS 11 HOME',
  price: 250000,
  category: 'electronique',
  images: ['https://s.alicdn.com/@sc04/kf/H13b354835d0742a1919dab2e5386d5d90.jpg', 'https://s.alicdn.com/@sc04/kf/H8d3e389715e449cba5f2c41c6f2a752cb.jpg', 'https://s.alicdn.com/@sc04/kf/H161a4757294e4dc7bb291fa1c6ec19aaZ.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 11,
  name: 'Pull ',
  description: 'Coton/Fibre de bambou',
  price: 9000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/H41b80ca10ccd4bac8264eefd48316704V.jpg', 'https://s.alicdn.com/@sc04/kf/H491e6c1e4845486abc3afc8718c9a964W.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 12,
  name: 'Robe',
  description: 'Polyester',
  price: 20000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/H58cb15421aa94bc5a813bf8f4b883a3bY.png', 'https://s.alicdn.com/@sc04/kf/H9d075e179f454d2388796c5bda521df3Q.jpg', 'https://s.alicdn.com/@sc04/kf/Hd6ced2e218df41f7bb1c17bdb9f73de9e.jpg', 'https://s.alicdn.com/@sc04/kf/Hd1f0f03ed9824666ae75f8bb44be83ae0.jpg', 'https://s.alicdn.com/@sc04/kf/H3d6bd0cb4b8f400f9dde650405b8176f2.jpg', 'https://s.alicdn.com/@sc04/kf/Hd4264e42d8254abbaa38bacc299612e3M.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 13,
  name: 'Chemises Hommes',
  description: 'Col rabattu',
  price: 70000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/H12cdfb8eaa3a4929be28cba2d2c701cbW.jpg', 'https://s.alicdn.com/@sc04/kf/H2d6d61a7e124466a8ab87e3d4e9d6a38c.jpg', 'https://s.alicdn.com/@sc04/kf/H197d813ab6d645268032263c9b2b40a00.jpg', 'https://s.alicdn.com/@sc04/kf/Hae3219dab53547cf863174cc0d908c96z.jpg', 'https://s.alicdn.com/@sc04/kf/Hdf4b5a1e550349f5967b283dca1d84c0h.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 14,
  name: 'Chemises Hommes',
  description: '	Polyester / coton',
  price: 70000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/H414fc4a08f8f4b0690dd30d2118a0f8eU.jpg', 'https://s.alicdn.com/@sc04/kf/H1be3e820295b438588483000eb45c891l.jpg', 'https://s.alicdn.com/@sc04/kf/Hefe0c5fe5f644ea8a8dd90ba8f0d98e0I.jpg', 'https://s.alicdn.com/@sc04/kf/Hd50830bdb3014505811fe3b4761a8a6fl.jpg', 'https://s.alicdn.com/@sc04/kf/Hf8bbab9f172d43309128ba137f426061x.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 15,
  name: 'Shorts',
  description: '100% Polyester',
  price: 90000,
  category: 'vetements',
  images: ['https://s.alicdn.com/@sc04/kf/Hc13922b4f77741a1971d5d3ea8164f73P.png', 'https://s.alicdn.com/@sc04/kf/H70702c2fbcca4385add27f95d2f9f5fcp.png', 'https://s.alicdn.com/@sc04/kf/H030af050062d4538acb91c1af58b6bb2t.png', 'https://s.alicdn.com/@sc04/kf/Hd9b97457fc904340a0327bde51254635F.png', 'https://s.alicdn.com/@sc04/kf/Hd6152d57976e4b0f931b81d5206ca19eV.png'],
  vendorPhone: '+33758146261'
}, {
  id: 16,
  name: 'Draps plats',
  description: '100% Polyester',
  price: 90000,
  category: 'maison',
  images: ['https://s.alicdn.com/@sc04/kf/Ha9658f0230284f87ac87c68821d68bb2G.jpg', 'https://s.alicdn.com/@sc04/kf/H5423e303cfbb47529b3600661f20c20cx.jpg', 'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg', 'https://s.alicdn.com/@sc04/kf/Hbf6d45e665ba49d1a0b0f71b489aec9bA.jpg', 'https://s.alicdn.com/@sc04/kf/H80e39df3cadd4f778bd15007d9394ef7H.png'],
  vendorPhone: '+33758146261'
}, {
  id: 17,
  name: 'Drap-housse',
  description: 'Polyester/cotonr',
  price: 10000,
  category: 'maison',
  images: ['https://s.alicdn.com/@sc04/kf/Hb9327b0ad28d4d7592200ae312ad278be.jpg', 'https://s.alicdn.com/@sc04/kf/Hd563096c298245a59a298ff69c296e67C.jpg', 'https://s.alicdn.com/@sc04/kf/Hd7ce141a43644a8e9d63bce2af43bab1I.jpg', 'https://s.alicdn.com/@sc04/kf/Hd8c1570821934f2ba9c4de9feb241d898.jpg', 'https://s.alicdn.com/@sc04/kf/H7270ff5536e1419c858dfbb155434c54U.jpg', 'https://s.alicdn.com/@sc04/kf/H7c67bde15747449e82c29d2c3d49c4332.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 18,
  name: 'Mixeur',
  description: 'Fruit et Légumes',
  price: 7000,
  category: 'maison',
  images: ['https://s.alicdn.com/@sc04/kf/H2890d50f345f4056ac236fad8fbb5f8cU.png', 'https://s.alicdn.com/@sc04/kf/Hdde0ea2ed30944f0ada91c76439c16e8V.png', 'https://s.alicdn.com/@sc04/kf/H5bcfa19a90fc4be5b7a06ba1ea5e85b3Y.png', 'https://s.alicdn.com/@sc04/kf/Hfb95223a915043ee95329d8d2880b7dc6.png', 'https://s.alicdn.com/@sc04/kf/H4a0d44471a694a7d945170de8cdd78f0A.png', 'https://s.alicdn.com/@sc04/kf/Hcbf55f7354bf4bc9891139bb872a478cx.png'],
  vendorPhone: '+33758146261'
}, {
  id: 19,
  name: 'Manette',
  description: 'Pour téléphone Mobile',
  price: 20000,
  category: 'electronique',
  images: ['https://s.alicdn.com/@sc04/kf/Hc1c0b699684b42b6a00dd234944547184.jpg', 'https://s.alicdn.com/@sc04/kf/H206a15ef54194c5c831b9c5ae6fe2b6fR.jpg', 'https://s.alicdn.com/@sc04/kf/H189c6bd52c6249b49e867b0243cc4f20W.jpg', 'https://s.alicdn.com/@sc04/kf/Hb493a24e6f85418383c380d210e87cfbW.jpg', 'https://s.alicdn.com/@sc04/kf/H538b2787519d46fab86128f1874d187aw.jpg', 'https://s.alicdn.com/@sc04/kf/He8f69a08da8f43ba97ce66c76d61e53eF.jpg'],
  vendorPhone: '+33758146261'
}, {
  id: 20,
  // Vêtements raison
  name: 'Ensemble H&F',
  description: 'Toutes les tailles',
  price: 9000,
  category: 'vetements',
  images: ['https://live.staticflickr.com/65535/53808149299_845e11f25b_w.jpg', 'https://live.staticflickr.com/65535/53806891127_2371ca23f1_w.jpg', 'https://live.staticflickr.com/65535/53807824346_a454c0bc44_w.jpg', 'https://live.staticflickr.com/65535/53808261690_3762aca3df_w.jpg'],
  vendorPhone: '+221784743356'
}];
"use strict";

var _products = require("./products");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Fonction pour créer une carte de produit
function createProductCard(product) {
  var card = document.createElement('div');
  card.classList.add('product-card');
  var image = document.createElement('img');
  image.src = product.images[0];
  image.alt = product.name;
  card.appendChild(image);
  var name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);
  var description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);
  var price = document.createElement('p');
  price.textContent = "Prix : ".concat(product.price, " Fcfa");
  card.appendChild(price);
  var button = document.createElement('a');
  button.classList.add('btn');
  button.textContent = 'Voir le produit';
  button.addEventListener('click', function () {
    return showProductModal(product);
  });
  card.appendChild(button);
  var whatsappBtn = document.createElement('a');
  whatsappBtn.classList.add('btn', 'whatsapp-btn');
  whatsappBtn.textContent = 'Commander';
  whatsappBtn.addEventListener('click', function () {
    return openOrderForm(product);
  }); // Mettre à jour cette ligne
  card.appendChild(whatsappBtn);
  var detailsBtn = document.createElement('a');
  detailsBtn.classList.add('btn-detail');
  detailsBtn.textContent = 'Détails du produit';
  detailsBtn.href = "details.html?id=".concat(product.id);
  card.appendChild(detailsBtn);
  return card;
}
function openOrderForm(product) {
  // Créer le modal
  var modal = document.createElement('div');
  modal.id = 'user-info-modal';
  modal.classList.add('modal');

  // Créer le contenu du modal
  var modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // Bouton de fermeture du modal
  var closeModalSpan = document.createElement('span');
  closeModalSpan.classList.add('close');
  closeModalSpan.textContent = '×';
  closeModalSpan.addEventListener('click', function () {
    modal.style.display = 'none';
    form.reset();
  });

  // Formulaire à l'intérieur du modal
  var form = document.createElement('form');
  form.id = 'user-info-form';
  var nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Nom :';
  var nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'name';
  nameInput.name = 'name';
  nameInput.required = true;
  nameLabel.appendChild(nameInput);
  var cityLabel = document.createElement('label');
  cityLabel.setAttribute('for', 'city');
  cityLabel.textContent = 'Ville :';
  var cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.id = 'city';
  cityInput.name = 'city';
  cityInput.required = true;
  cityLabel.appendChild(cityInput);
  var countryLabel = document.createElement('label');
  countryLabel.setAttribute('for', 'country');
  countryLabel.textContent = 'Pays :';
  var countrySelect = document.createElement('select');
  countrySelect.id = 'country';
  countrySelect.name = 'country';
  countrySelect.required = true;
  var countries = [{
    code: 'DZ',
    name: 'Algérie'
  }, {
    code: 'AO',
    name: 'Angola'
  }, {
    code: 'BJ',
    name: 'Bénin'
  }, {
    code: 'BW',
    name: 'Botswana'
  }, {
    code: 'BF',
    name: 'Burkina Faso'
  }, {
    code: 'BI',
    name: 'Burundi'
  }, {
    code: 'CM',
    name: 'Cameroun'
  }, {
    code: 'CV',
    name: 'Cap-Vert'
  }, {
    code: 'CF',
    name: 'République centrafricaine'
  }, {
    code: 'TD',
    name: 'Tchad'
  }, {
    code: 'KM',
    name: 'Comores'
  }, {
    code: 'CG',
    name: 'Congo'
  }, {
    code: 'CD',
    name: 'République Démocratique du Congo'
  }, {
    code: 'DJ',
    name: 'Djibouti'
  }, {
    code: 'EG',
    name: 'Égypte'
  }, {
    code: 'GQ',
    name: 'Guinée équatoriale'
  }, {
    code: 'ER',
    name: 'Érythrée'
  }, {
    code: 'ET',
    name: 'Éthiopie'
  }, {
    code: 'GA',
    name: 'Gabon'
  }, {
    code: 'GM',
    name: 'Gambie'
  }, {
    code: 'GH',
    name: 'Ghana'
  }, {
    code: 'GN',
    name: 'Guinée'
  }, {
    code: 'GW',
    name: 'Guinée-Bissau'
  }, {
    code: 'CI',
    name: "Côte d'Ivoire"
  }, {
    code: 'KE',
    name: 'Kenya'
  }, {
    code: 'LS',
    name: 'Lesotho'
  }, {
    code: 'LR',
    name: 'Libéria'
  }, {
    code: 'LY',
    name: 'Libye'
  }, {
    code: 'MG',
    name: 'Madagascar'
  }, {
    code: 'MW',
    name: 'Malawi'
  }, {
    code: 'ML',
    name: 'Mali'
  }, {
    code: 'MR',
    name: 'Mauritanie'
  }, {
    code: 'MU',
    name: 'Maurice'
  }, {
    code: 'MA',
    name: 'Maroc'
  }, {
    code: 'MZ',
    name: 'Mozambique'
  }, {
    code: 'NA',
    name: 'Namibie'
  }, {
    code: 'NE',
    name: 'Niger'
  }, {
    code: 'NG',
    name: 'Nigéria'
  }, {
    code: 'RW',
    name: 'Rwanda'
  }, {
    code: 'ST',
    name: 'Sao Tomé-et-Principe'
  }, {
    code: 'SN',
    name: 'Sénégal'
  }, {
    code: 'SC',
    name: 'Seychelles'
  }, {
    code: 'SL',
    name: 'Sierra Leone'
  }, {
    code: 'SO',
    name: 'Somalie'
  }, {
    code: 'ZA',
    name: 'Afrique du Sud'
  }, {
    code: 'SS',
    name: 'Soudan du Sud'
  }, {
    code: 'SD',
    name: 'Soudan'
  }, {
    code: 'SZ',
    name: 'Eswatini'
  }, {
    code: 'TZ',
    name: 'Tanzanie'
  }, {
    code: 'TG',
    name: 'Togo'
  }, {
    code: 'TN',
    name: 'Tunisie'
  }, {
    code: 'UG',
    name: 'Ouganda'
  }, {
    code: 'ZM',
    name: 'Zambie'
  }, {
    code: 'ZW',
    name: 'Zimbabwe'
  }];
  countries.forEach(function (country) {
    var option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });
  var submitButton = document.createElement('button');
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
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      var name = nameInput.value;
      var city = cityInput.value;
      var country = countrySelect.options[countrySelect.selectedIndex].text;
      var message = "Bonjour, je m'appelle ".concat(name, ".\nJ'habite \xE0 ").concat(city, ", ").concat(country, ".\n\nJe souhaite commander le produit :\n").concat(product.name, ".");
      var whatsappUrl = "https://wa.me/".concat(product.vendorPhone, "?text=").concat(encodeURIComponent(message));
      window.open(whatsappUrl, '_blank');
      modal.style.display = 'none';
      form.reset();
    } else {
      alert('Veuillez remplir correctement tous les champs.');
    }
  });

  // Validation du formulaire
  function validateForm() {
    var nameValid = /^[a-zA-Z\s]+$/.test(nameInput.value);
    var cityValid = /^[a-zA-Z\s]+$/.test(cityInput.value);
    var countryValid = countrySelect.value !== '';
    return nameValid && cityValid && countryValid;
  }
}

// Variables pour la pagination
var currentPage = 1;
var productsPerPage = 10;
var paginationContainer = document.querySelector('.pagination');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var pageInfo = document.getElementById('page-info');

// Fonction pour afficher les produits avec pagination
function displayProducts(products) {
  var productList = document.querySelector('.product-list');
  productList.innerHTML = '';
  var startIndex = (currentPage - 1) * productsPerPage;
  var endIndex = startIndex + productsPerPage;
  var paginatedProducts = products.slice(startIndex, endIndex);
  paginatedProducts.forEach(function (product) {
    var card = createProductCard(product);
    productList.appendChild(card);
  });
  updatePaginationInfo(products.length);
}

// Fonction pour mettre à jour les informations de pagination
function updatePaginationInfo(totalProducts) {
  var totalPages = Math.ceil(totalProducts / productsPerPage);
  pageInfo.textContent = "Page ".concat(currentPage, " sur ").concat(totalPages);
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Événement pour le bouton "Précédent"
prevBtn.addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(_products.products);
  }
});

// Événement pour le bouton "Suivant"
nextBtn.addEventListener('click', function () {
  var totalProducts = _products.products.length;
  var totalPages = Math.ceil(totalProducts / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayProducts(_products.products);
  }
});

// Fonction pour filtrer les produits par catégorie
function filterProductsByCategory(category) {
  var categoryLinks = document.querySelectorAll('.category-list a');
  categoryLinks.forEach(function (link) {
    return link.classList.remove('active');
  });
  var activeLink = document.querySelector(".category-list a[data-category=\"".concat(category, "\"]"));
  activeLink.classList.add('active');
  if (category === 'all') {
    displayProducts(_products.products);
  } else {
    var filteredProducts = _products.products.filter(function (product) {
      return product.category === category;
    });
    displayProducts(filteredProducts);
  }
}

// Fonction pour filtrer les produits par prix
function filterProducts() {
  var filterInput = document.getElementById('filter');
  var filterValue = document.getElementById('filter-value');
  var maxPrice = filterInput.value;
  filterValue.textContent = maxPrice;
  var filteredProducts = _products.products.filter(function (product) {
    return product.price <= maxPrice;
  });
  displayProducts(filteredProducts);
}

// Fonction pour trier les produits
function sortProducts() {
  var sortSelect = document.getElementById('sort');
  var sortOption = sortSelect.value;
  var sortedProducts = _toConsumableArray(_products.products);
  if (sortOption === 'price-asc') {
    sortedProducts.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortOption === 'price-desc') {
    sortedProducts.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  displayProducts(sortedProducts);
}

// Fonction pour afficher la modal de la galerie d'images
function showProductModal(product) {
  var modal = document.getElementById('product-modal');
  var modalContent = modal.querySelector('.modal-content');
  var productGallery = modalContent.querySelector('.product-gallery');
  productGallery.innerHTML = '';
  product.images.forEach(function (imageUrl) {
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = product.name;
    productGallery.appendChild(img);
  });
  modal.style.display = 'block';
  var closeModal = function closeModal() {
    modal.style.display = 'none';
  };
  var closeBtn = modalContent.querySelector('.close');
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}
document.querySelectorAll('.category-list a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var category = event.target.dataset.category;
    filterProductsByCategory(category);
  });
});

// document.getElementById('filter').addEventListener('input', filterProducts);
document.getElementById('sort').addEventListener('change', sortProducts);

// Afficher tous les produits au chargement initial
displayProducts(_products.products);
var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
  var searchInput = document.getElementById('search-input');
  var productList = document.querySelector('.product-list');
  function filterProducts() {
    var searchTerm = searchInput.value.toLowerCase();
    var cards = productList.getElementsByClassName('product-card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var productName = card.querySelector('h3').textContent.toLowerCase();
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
"use strict";

// Données de produits fictives
var products = [{
  id: 1,
  name: 'HP',
  description: 'RAM 8 Go, SSD 256 Go, AZERTY',
  price: 379.99,
  category: 'electronique',
  images: ['https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 2,
  name: 'Acer Aspire',
  description: 'RAM 16 Go, SSD 512 Go',
  price: 534.99,
  category: 'electronique',
  images: ['https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 3,
  name: 'Lenovo ',
  description: '8 Go DDR4,512 Go SSD,',
  price: 724.99,
  category: 'electronique',
  images: ['https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 4,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 524.99,
  category: 'electronique',
  images: ['https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 5,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'electronique',
  images: ['https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 6,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'electronique',
  images: ['https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
},
// Vêtements
{
  id: 7,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'vetements',
  images: ['https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/6069553/pexels-photo-6069553.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1389449/pexels-photo-1389449.jpeg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 8,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'vetements',
  images: ['https://images.pexels.com/photos/5490979/pexels-photo-5490979.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/9185791/pexels-photo-9185791.jpeg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 9,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'vetements',
  images: ['https://images.pexels.com/photos/7691089/pexels-photo-7691089.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7691227/pexels-photo-7691227.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/8387838/pexels-photo-8387838.jpeg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 10,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'vetements',
  images: ['https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 11,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'vetements',
  images: ['https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}, {
  id: 12,
  name: 'Produit 2',
  description: 'Description du produit 2',
  price: 24.99,
  category: 'vetements',
  images: ['https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'],
  vendorPhone: '+33758146261'
}];

// Fonction pour créer une carte de produit
function createProductCard(product) {
  var card = document.createElement('div');
  card.classList.add('product-card');
  var image = document.createElement('img');
  image.src = product.images[0];
  image.alt = product.name;
  card.appendChild(image);
  var name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);
  var description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);
  var price = document.createElement('p');
  price.textContent = "Prix : ".concat(product.price, " Fcfa");
  card.appendChild(price);
  var button = document.createElement('a');
  button.classList.add('btn');
  button.textContent = 'Voir le produit';
  button.addEventListener('click', function () {
    return showProductModal(product);
  });
  card.appendChild(button);
  var whatsappBtn = document.createElement('a');
  whatsappBtn.classList.add('btn', 'whatsapp-btn');
  whatsappBtn.textContent = 'Commander';
  whatsappBtn.href = "https://wa.me/".concat(product.vendorPhone, "?text=Bonjour,%20je%20souhaite%20commander%20le%20produit%20:%20").concat(product.name, ".%20Voici%20le%20lien%20de%20l'image%20:%20").concat(encodeURIComponent(product.images[0]));
  whatsappBtn.target = '_blank';
  card.appendChild(whatsappBtn);
  var detailsBtn = document.createElement('a');
  detailsBtn.classList.add('btn-detail');
  detailsBtn.textContent = 'Détails du produit';
  detailsBtn.href = "details.html?id=".concat(product.id);
  card.appendChild(detailsBtn);
  return card;
}

// Variables pour la pagination
var currentPage = 1;
var productsPerPage = 10;
var paginationContainer = document.querySelector('.pagination');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var pageInfo = document.getElementById('page-info');

// Fonction pour afficher les produits avec pagination
function displayProducts(products) {
  var productList = document.querySelector('.product-list');
  productList.innerHTML = '';
  var startIndex = (currentPage - 1) * productsPerPage;
  var endIndex = startIndex + productsPerPage;
  var paginatedProducts = products.slice(startIndex, endIndex);
  paginatedProducts.forEach(function (product) {
    var card = createProductCard(product);
    productList.appendChild(card);
  });
  updatePaginationInfo(products.length);
}

// Fonction pour mettre à jour les informations de pagination
function updatePaginationInfo(totalProducts) {
  var totalPages = Math.ceil(totalProducts / productsPerPage);
  pageInfo.textContent = "Page ".concat(currentPage, " sur ").concat(totalPages);
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Événement pour le bouton "Précédent"
prevBtn.addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(products);
  }
});

// Événement pour le bouton "Suivant"
nextBtn.addEventListener('click', function () {
  var totalProducts = products.length;
  var totalPages = Math.ceil(totalProducts / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayProducts(products);
  }
});

// Fonction pour filtrer les produits par catégorie
function filterProductsByCategory(category) {
  var categoryLinks = document.querySelectorAll('.category-list a');
  categoryLinks.forEach(function (link) {
    return link.classList.remove('active');
  });
  var activeLink = document.querySelector(".category-list a[data-category=\"".concat(category, "\"]"));
  activeLink.classList.add('active');
  if (category === 'all') {
    displayProducts(products);
  } else {
    var filteredProducts = products.filter(function (product) {
      return product.category === category;
    });
    displayProducts(filteredProducts);
  }
}

// Fonction pour filtrer les produits par prix
function filterProducts() {
  var filterInput = document.getElementById('filter');
  var filterValue = document.getElementById('filter-value');
  var maxPrice = filterInput.value;
  filterValue.textContent = maxPrice;
  var filteredProducts = products.filter(function (product) {
    return product.price <= maxPrice;
  });
  displayProducts(filteredProducts);
}

// Fonction pour trier les produits
function sortProducts() {
  var sortSelect = document.getElementById('sort');
  var sortOption = sortSelect.value;
  var sortedProducts = [].concat(products);
  if (sortOption === 'price-asc') {
    sortedProducts.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortOption === 'price-desc') {
    sortedProducts.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  displayProducts(sortedProducts);
}

// Fonction pour afficher la modal de la galerie d'images
function showProductModal(product) {
  var modal = document.getElementById('product-modal');
  var modalContent = modal.querySelector('.modal-content');
  var productGallery = modalContent.querySelector('.product-gallery');
  productGallery.innerHTML = '';
  product.images.forEach(function (imageUrl) {
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = product.name;
    productGallery.appendChild(img);
  });
  modal.style.display = 'block';
  var closeModal = function closeModal() {
    modal.style.display = 'none';
  };
  var closeBtn = modalContent.querySelector('.close');
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}
document.querySelectorAll('.category-list a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var category = event.target.dataset.category;
    filterProductsByCategory(category);
  });
});
document.getElementById('filter').addEventListener('input', filterProducts);
document.getElementById('sort').addEventListener('change', sortProducts);

// Afficher tous les produits au chargement initial
displayProducts(products);
var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
  var searchInput = document.getElementById('search-input');
  var productList = document.querySelector('.product-list');
  function filterProducts() {
    var searchTerm = searchInput.value.toLowerCase();
    var cards = productList.getElementsByClassName('product-card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var productName = card.querySelector('h3').textContent.toLowerCase();
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
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-link');
  var mainContent = document.getElementById('main-content');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var url = link.getAttribute('href');
      loadContent(url);
      history.pushState(null, '', url);
    });
  });
  window.addEventListener('popstate', function () {
    loadContent(window.location.pathname);
  });
  function loadContent(url) {
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (data) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(data, 'text/html');
      var newContent = doc.querySelector('main').innerHTML;
      mainContent.innerHTML = newContent;
      // Reinitialiser les événements si nécessaire
      initDynamicContent();
    })["catch"](function (error) {
      return console.error('Error loading content:', error);
    });
  }
  function initDynamicContent() {
    // Initialiser tous les événements nécessaires après le chargement dynamique du contenu
  }

  // Load initial content based on current URL
  loadContent(window.location.pathname);
});
"use strict";

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();

//# sourceMappingURL=bundle.js.map