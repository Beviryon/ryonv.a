document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const confirmationModal = document.getElementById('confirmationModal');
  const userNameSpan = document.getElementById('userName');
  const closeModal = document.getElementById('closeModal');

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const first_name = document.getElementById('first_name').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, phone, city, country, password, role: 'client' }),
      });

      const data = await response.json();
      if (response.ok) {
        // Afficher la fenêtre modale avec le prénom de l'utilisateur
        userNameSpan.textContent = first_name;
        confirmationModal.style.display = 'block';
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
    }
  });

  // Fermer la modale lorsque l'utilisateur clique sur la croix
  closeModal.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
    window.location.href = 'login.html'; // Rediriger vers la page de connexion
  });

  // Fermer la modale lorsque l'utilisateur clique en dehors de celle-ci
  window.addEventListener('click', (event) => {
    if (event.target === confirmationModal) {
      confirmationModal.style.display = 'none';
      window.location.href = 'login.html'; // Rediriger vers la page de connexion
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye-slash');
  });
});
