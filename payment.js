// payment.js

document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const paymentMethod = document.getElementById('payment-option').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;

    // Vérification de base pour s'assurer que les champs sont remplis
    if (!phone || !amount) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Afficher le message de traitement
    const responseElement = document.getElementById('payment-response');
    responseElement.textContent = 'Traitement du paiement...';

    // Appeler l'API de paiement
    processPayment(paymentMethod, phone, amount);
});

// Fonction pour simuler un appel d'API
function processPayment(paymentMethod, phone, amount) {
    // Exemple de configuration d'API (vous devez adapter cela à l'API que vous utilisez)
    const apiEndpoint = 'https://api.votre-service-de-paiement.com/pay';

    const paymentData = {
        method: paymentMethod,
        phone: phone,
        amount: amount,
    };

    // Envoyer la requête de paiement (exemple avec Fetch API)
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VOTRE_CLE_API',  // Remplacez par votre clé API
        },
        body: JSON.stringify(paymentData),
    })
    .then(response => response.json())
    .then(data => {
        // Vérifier si le paiement a été traité avec succès
        if (data.status === 'success') {
            document.getElementById('payment-response').textContent = 'Paiement réussi!';
        } else {
            document.getElementById('payment-response').textContent = 'Échec du paiement. Veuillez réessayer.';
        }
    })
    .catch(error => {
        console.error('Erreur de paiement:', error);
        document.getElementById('payment-response').textContent = 'Erreur de traitement du paiement.';
    });
}


