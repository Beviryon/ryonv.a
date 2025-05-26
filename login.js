document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const welcomeModal = document.getElementById('welcomeModal');
    const closeModal = document.getElementById('closeModal');
    const userNameSpan = document.getElementById('userName');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const phone = document.getElementById('phone').value.trim();
      const password = passwordInput.value;
  
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone, password }),
        });
  
        const data = await response.json();
        if (response.ok && data.user) {
          // Afficher la fenêtre modale de bienvenue
          userNameSpan.textContent = data.user.first_name || '';
          welcomeModal.style.display = 'block';
  
          // Stocker le token et le rôle dans le localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('userRole', data.user.role);
  
          // Fermer la modale après 3 secondes et rediriger vers la page appropriée
          setTimeout(() => {
            welcomeModal.style.display = 'none';
  
            // Rediriger en fonction du rôle de l'utilisateur
            if (parseInt(data.user.role) === 3) {
              window.location.href = '/desloSite/admin.html';
            } else if (parseInt(data.user.role) === 2) {
              window.location.href = '/desloSite/vendor-dashboard.html';
            } else {
              window.location.href = '/desloSite/profile.html';
            }
          }, 3000);
  
        } else {
          alert(data.error || "Erreur lors de la connexion.");
        }
      } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        alert("Erreur lors de la connexion.");
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
  