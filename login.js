document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const welcomeModal = document.getElementById('welcomeModal');
    const closeModal = document.getElementById('closeModal');
    const userNameSpan = document.getElementById('userName');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const phone = document.getElementById('phone').value;
      const password = passwordInput.value;
  
      try {
        const response = await fetch('https://ryonv-shop.netlify.app/.netlify/functions/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone, password }),
        });
  
        const data = await response.json();
        if (response.ok) {
          // Afficher la fenêtre modale de bienvenue
          userNameSpan.textContent = data.user.first_name;
          welcomeModal.style.display = 'block';
  
          // Stocker le token et le rôle dans le localStorage
          localStorage.setItem('token', data.user.token);
          localStorage.setItem('userRole', data.user.roles.name);
  
          // Fermer la modale après 3 secondes et rediriger vers la page appropriée
          setTimeout(() => {
            welcomeModal.style.display = 'none';
  
            // Rediriger en fonction du rôle de l'utilisateur
            if (data.user.roles.name === 'admin') {
              window.location.href = '/desloSite/admin.html';
            } else {
              window.location.href = '/desloSite/profile.html';
            }
          }, 3000);
  
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        alert('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
      }
    });
  
    // Gestion de la fermeture de la modale
    closeModal.addEventListener('click', () => {
      welcomeModal.style.display = 'none';
    });
  
    // Afficher/Masquer le mot de passe
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.classList.toggle('fa-eye-slash');
    });
  });
  