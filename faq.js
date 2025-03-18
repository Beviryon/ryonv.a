document.addEventListener('DOMContentLoaded', function() {
    // Navigation de sujet
    const topics = document.querySelectorAll('.topic');
    const faqBlocks = document.querySelectorAll('.faq-block');
    
    topics.forEach(topic => {
        topic.addEventListener('click', function() {
            // Enlever la classe active de tous les sujets
            topics.forEach(t => t.classList.remove('active'));
            
            // Ajouter la classe active au sujet cliqué
            this.classList.add('active');
            
            const selectedTopic = this.getAttribute('data-topic');
            
            // Afficher tous les blocs si "all" est sélectionné, sinon filtrer
            if (selectedTopic === 'all') {
                faqBlocks.forEach(block => {
                    block.style.display = 'block';
                });
            } else {
                faqBlocks.forEach(block => {
                    if (block.getAttribute('data-category') === selectedTopic) {
                        block.style.display = 'block';
                    } else {
                        block.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Recherche
    const searchInput = document.querySelector('.search-wrapper input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm.length > 2) {
                let found = false;
                
                // Recherche dans tous les blocs et éléments de contenu
                faqBlocks.forEach(block => {
                    const content = block.textContent.toLowerCase();
                    
                    if (content.includes(searchTerm)) {
                        block.style.display = 'block';
                        found = true;
                    } else {
                        block.style.display = 'none';
                    }
                });
                
                // Si aucun résultat trouvé
                if (!found) {
                    // Vous pouvez ajouter un message "Aucun résultat trouvé" ici
                }
            } else {
                // Réinitialiser l'affichage si moins de 3 caractères
                faqBlocks.forEach(block => {
                    block.style.display = 'block';
                });
            }
        });
    }
    
    // Navigation mobile si nécessaire
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
}); 