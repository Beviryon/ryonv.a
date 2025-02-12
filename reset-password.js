document.addEventListener('DOMContentLoaded', () => {
  const resetPasswordForm = document.getElementById('resetPasswordForm');
  const togglePassword = document.getElementById('togglePassword');
  const newPasswordInput = document.getElementById('newPassword');

  resetPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newPassword = newPasswordInput.value;
    const token = new URLSearchParams(window.location.search).get('token');

    try {
      const response = await fetch('http://localhost:4000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword, token }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Votre mot de passe a été réinitialisé avec succès.');
        window.location.href = './login.html';
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  });

  togglePassword.addEventListener('click', () => {
    const type = newPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    newPasswordInput.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye-slash');
  });
});
