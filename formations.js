// Données de formation fictives
const formations = [
    {
      id: 1,
      titre: 'Dévoloppement web',
      description: 'La formation est basées sur le JavaScripte, HTML, CSS',
      contenu: "Nous sommes ravis de vous présenter notre programme de formation,conçu pour vous doter des compétences indispensables en développement web. Notre formation est spécifiquement centrée sur les technologies clés du web moderne : JavaScript, HTML et CSS. Formation en Développement Web : JavaScript, HTML, CSS Pourquoi cette formation ? JavaScript : Maîtrisez le langage de programmation incontournable pour créer des sites web interactifs et dynamiques. Apprenez à manipuler le DOM, gérer des événements, et utiliser des frameworks populaires comme React ou Angular. HTML (HyperText Markup Language) : Découvrez les fondations de toute page web. Apprenez à structurer le contenu de vos sites de manière sémantique et accessible, garantissant une base solide pour toutes vos créations. CSS (Cascading Style Sheets) : Développez vos compétences en design web. Apprenez à styliser et mettre en forme vos pages web avec élégance et efficacité, en utilisant des techniques modernes telles que Flexbox et Grid Layout.",
      image: 'https://tse4.mm.bing.net/th?id=OIP.igo55aPjEMu3ZJ2tTnZTpwAAAA&pid=Api&P=0&h=180'
    },
    {
      id: 2,
      titre: 'Désign graphique',
      description: "Pourquoi choisir cette formation ? Adobe Photoshop, InDesign et Illustrator sont des logiciels incontournables dans le monde du design graphique. Maîtriser ces outils vous permettra de réaliser une large gamme de projets créatifs, allant de l'édition d'images et de la création de logos à la mise en page de magazines et de brochures.",
      contenu: "Ce que vous apprendrez : \nAdobe Photoshop : Introduction et interface utilisateur : Découvrez l'interface de Photoshop, les outils de base et les panneaux de contrôle. Édition et retouche d'images : Apprenez à retoucher des photos, à ajuster les couleurs, à corriger les imperfections et à utiliser les calques et les masques. Techniques de sélection et de découpage : Maîtrisez les outils de sélection pour isoler des éléments et créer des compositions complexes... \n Adobe Illustrator : \nIntroduction et interface utilisateur : Familiarisez-vous avec l'interface d'Illustrator et ses outils principaux. Dessin vectoriel : Apprenez à créer des illustrations vectorielles, des logos, des icônes et des graphiques qui peuvent être redimensionnés sans perte de qualité. \nAdobe InDesign : Introduction et interface utilisateur : Explorez l'interface d'InDesign et ses fonctionnalités de base. Mise en page : Apprenez à créer des mises en page professionnelles pour des brochures, des magazines, des livres et des flyers... ",
      image: 'https://tse2.mm.bing.net/th?id=OIP.0Biu3lZyJnvxA-pAHIYtrwHaEK&pid=Api&P=0&h=180'
    },
    {
      id: 3,
      titre: 'E-Commerce',
      description: 'La formation est basées sur Alibaba, Amazone Busness, Shein',
      contenu: 'La formation est basées sur Alibaba, Amazone Busness, Shein',
      image: 'https://tse4.mm.bing.net/th?id=OIP.n3reqbF8ckjvjK752_doZQHaE8&pid=Api&P=0&h=180'
    },
    {
      id: 4,
      titre: 'Réseau Informatique',
      description: 'La formation est basées sur...',
      contenu: 'La formation est basées sur...',
      image: 'https://tse4.mm.bing.net/th?id=OIP.n3reqbF8ckjvjK752_doZQHaE8&pid=Api&P=0&h=180'
    },
  ];
  
 
  function showFormationDetails(formationId) {
    const formation = formations.find(f => f.id === formationId);
    if (formation) {
      const modal = document.getElementById('formation-modal');
      const modalContent = modal.querySelector('.modal-content');
      const formationDetails = modalContent.querySelector('.formation-details');
  
      formationDetails.innerHTML = `
        <img src="${formation.image}" alt="${formation.titre}">
        <h2>${formation.titre}</h2>
        <p>${formation.description}</p>
        <h3>Contenu de la formation</h3>
        <p>${formation.contenu}</p>
      `;
  
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
  }
  

  const formationCards = document.querySelectorAll('.formation-card .btn');
  formationCards.forEach(card => {
    card.addEventListener('click', event => {
      event.preventDefault();
      const formationId = event.target.dataset.formationId;
      showFormationDetails(parseInt(formationId));
    });
  });
  
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
  