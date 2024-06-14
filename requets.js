document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.getElementById('main-content');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.getAttribute('href');
        loadContent(url);
        history.pushState(null, '', url); 
      });
    });
  
    window.addEventListener('popstate', () => {
      loadContent(window.location.pathname);
    });
  
    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const newContent = doc.querySelector('main').innerHTML;
          mainContent.innerHTML = newContent;
          // Reinitialiser les événements si nécessaire
          initDynamicContent();
        })
        .catch(error => console.error('Error loading content:', error));
    }
  
    function initDynamicContent() {
      // Initialiser tous les événements nécessaires après le chargement dynamique du contenu
    }
  
    // Load initial content based on current URL
    loadContent(window.location.pathname);
  });
  