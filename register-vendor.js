document.addEventListener('DOMContentLoaded', () => {
    const registerVendorForm = document.getElementById('registerVendorForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const vendorModal = document.getElementById('vendorModal');
    const vendorName = document.getElementById('vendorName');

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
        const first_name = document.getElementById('first_name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const city = document.getElementById('city').value.trim();
        const country = document.getElementById('country').value.trim();
        const password = document.getElementById('password').value;
        const store_name = document.getElementById('store_name').value.trim();
        const store_description = document.getElementById('store_description').value.trim();
        const business_type = document.getElementById('business_type').value;
        const tax_id = document.getElementById('tax_id').value.trim();
        const bank_account = document.getElementById('bank_account').value.trim();

        try {
            const response = await fetch('/api/register-vendor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name, phone, city, country, password,
                    store_name, store_description, business_type, tax_id, bank_account
                }),
            });
            const data = await response.json();
            if (response.ok) {
                vendorName.textContent = first_name;
                vendorModal.style.display = 'block';
                setTimeout(() => {
                    vendorModal.style.display = 'none';
                    window.location.href = '/desloSite/login.html';
                }, 3000);
            } else {
                alert(data.error || "Erreur lors de l'inscription.");
            }
        } catch (error) {
            alert("Erreur lors de l'inscription vendeur.");
        }
    });
}); 