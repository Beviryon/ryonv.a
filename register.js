document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const welcomeModal = document.getElementById('welcomeModal');
    const closeModal = document.getElementById('closeModal');
    const userNameSpan = document.getElementById('userName');
  
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const first_name = document.getElementById('first_name').value;
      const phone = document.getElementById('phone').value;
      const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('https://ryonv-shop.netlify.app/.netlify/functions/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ first_name, phone, city, country, password }),
        });
  
        const data = await response.json();
        if (response.ok) {
          // Afficher la fenêtre modale de bienvenue
          userNameSpan.textContent = data.message;
          welcomeModal.style.display = 'block';
  
          // Fermer la modale après quelques secondes et rediriger vers la page de connexion
          setTimeout(() => {
            welcomeModal.style.display = 'none';
            window.location.href = '/desloSite/login.html';
          }, 3000);
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
      }
    });
  
    // Gestion de la fermeture de la modale
    closeModal.addEventListener('click', () => {
      welcomeModal.style.display = 'none';
    });
  });
  