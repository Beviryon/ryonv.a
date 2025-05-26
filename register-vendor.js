document.addEventListener('DOMContentLoaded', () => {
    const registerVendorForm = document.getElementById('registerVendorForm');
    const welcomeModal = document.getElementById('welcomeModal');
    const closeModal = document.getElementById('closeModal');
    const userNameSpan = document.getElementById('userName');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Fonction pour basculer la visibilité du mot de passe
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Fonction pour valider le numéro de téléphone
    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // Fonction pour valider le numéro de compte bancaire
    function validateBankAccount(account) {
        const accountRegex = /^[0-9]{11,14}$/;
        return accountRegex.test(account.replace(/\s/g, ''));
    }

    // Fonction pour valider le numéro d'identification fiscale
    function validateTaxId(taxId) {
        const taxIdRegex = /^[0-9]{14}$/;
        return taxIdRegex.test(taxId.replace(/\s/g, ''));
    }

    registerVendorForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const formData = {
            first_name: document.getElementById('first_name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            city: document.getElementById('city').value.trim(),
            country: document.getElementById('country').value.trim(),
            password: passwordInput.value,
            store_name: document.getElementById('store_name').value.trim(),
            store_description: document.getElementById('store_description').value.trim(),
            business_type: document.getElementById('business_type').value,
            tax_id: document.getElementById('tax_id').value.trim(),
            bank_account: document.getElementById('bank_account').value.trim()
        };

        // Validation des champs
        if (!validatePhone(formData.phone)) {
            alert('Veuillez entrer un numéro de téléphone valide (10 chiffres).');
            return;
        }

        if (!validateTaxId(formData.tax_id)) {
            alert('Veuillez entrer un numéro d\'identification fiscale valide (14 chiffres).');
            return;
        }

        if (!validateBankAccount(formData.bank_account)) {
            alert('Veuillez entrer un numéro de compte bancaire valide (11 à 14 chiffres).');
            return;
        }

        try {
            const response = await fetch('https://ryonv-shop.netlify.app/.netlify/functions/register-vendor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Afficher la fenêtre modale de bienvenue
                userNameSpan.textContent = formData.first_name;
                welcomeModal.style.display = 'block';

                // Fermer la modale après quelques secondes et rediriger vers la page de connexion
                setTimeout(() => {
                    welcomeModal.style.display = 'none';
                    window.location.href = '/desloSite/login.html';
                }, 5000);
            } else {
                alert(data.error || 'Une erreur est survenue lors de l\'inscription.');
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

    // Fermer la modale si on clique en dehors
    window.addEventListener('click', (e) => {
        if (e.target === welcomeModal) {
            welcomeModal.style.display = 'none';
        }
    });
}); 