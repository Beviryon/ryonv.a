document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const welcomeModal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');
    const userNameSpan = document.getElementById('userName');
  
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const first_name = document.getElementById('first_name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const city = document.getElementById('city').value.trim();
      const country = document.getElementById('country').value.trim();
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ first_name, phone, city, country, password }),
        });
  
        let data;
        try {
          data = await response.json();
        } catch (jsonError) {
          throw new Error("Réponse du serveur invalide.");
        }
  
        if (response.ok) {
          userNameSpan.textContent = data.message || 'Inscription réussie !';
          welcomeModal.style.display = 'block';
  
          setTimeout(() => {
            welcomeModal.style.display = 'none';
            window.location.href = '/desloSite/login.html';
          }, 3000);
        } else {
          alert(data.error || "Erreur lors de l'inscription.");
        }
      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
      }
    });
  
    closeModal.addEventListener('click', () => {
      welcomeModal.style.display = 'none';
    });
  });
  