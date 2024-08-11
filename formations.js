// Sélection des éléments DOM
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.getElementsByClassName("close")[0];

// Données de formation (exemple)
const formations = {
  1: {
    title: "Développement Web",
    description: "La formation couvre le JavaScript, HTML, CSS et les bonnes pratiques du développement web.",
    details: "Durée : 3 mois, Niveau : Débutant à Intermédiaire, Prix : 1200€"
  },
  2: {
    title: "Design graphique",
    description: "Apprenez à utiliser des outils comme Photoshop, InDesign et Illustrator pour créer des designs professionnels.",
    details: "Durée : 2 mois, Niveau : Débutant à Avancé, Prix : 1000€"
  },
  3: {
    title: "E-commerce",
    description: "Maîtrisez les plateformes e-commerce comme Alibaba, Amazon Business, et Shein pour lancer votre boutique en ligne.",
    details: "Durée : 4 mois, Niveau : Intermédiaire, Prix : 1500€"
  },
  4: {
    title: "Réseau Informatique",
    description: "Cette formation vous donnera les compétences nécessaires pour gérer et sécuriser des réseaux informatiques.",
    details: "Durée : 5 mois, Niveau : Intermédiaire à Avancé, Prix : 1800€"
  }
};

// Fonction pour ouvrir la modal avec les informations de la formation
function openModal(formationId) {
  const formation = formations[formationId];
  modalTitle.innerText = formation.title;
  modalDescription.innerText = formation.description;
  modalDetails.innerText = formation.details;
  modal.style.display = "block";
}

// Fermer la modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Fermer la modal si l'utilisateur clique en dehors du contenu
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Ajouter des écouteurs d'événements aux boutons "Plus d'infos"
const infoButtons = document.querySelectorAll(".btn[data-formation-id]");
infoButtons.forEach(button => {
  button.addEventListener("click", function() {
    const formationId = this.getAttribute("data-formation-id");
    openModal(formationId);
  });
});

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