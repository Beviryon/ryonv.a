document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = document.getElementById('order-details');
    const updateForm = document.getElementById('update-form');
    const notification = document.getElementById('notification');

    // Exemple de données de commande (vous pouvez remplacer cela par des données réelles de votre base de données)
    const order = {
        id: 12345,
        status: 'en attente',
        notes: 'Commande reçue et en attente de traitement.',
        customerName: 'John Doe',
        customerPhone: '0701234567',
    };

    // Fonction pour afficher les détails de la commande
    function displayOrderDetails(order) {
        orderDetails.innerHTML = `
            <p><strong>ID de la commande :</strong> ${order.id}</p>
            <p><strong>Nom du client :</strong> ${order.customerName}</p>
            <p><strong>Téléphone :</strong> ${order.customerPhone}</p>
            <p><strong>Statut :</strong> <span id="current-status">${order.status}</span></p>
            <p><strong>Notes :</strong> ${order.notes}</p>
        `;
    }

    // Afficher les détails de la commande au chargement de la page
    displayOrderDetails(order);

    // Événement pour la soumission du formulaire de mise à jour
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const status = document.getElementById('status').value;
        const notes = document.getElementById('notes').value;

        // Mettre à jour l'objet commande
        order.status = status;
        order.notes = notes || order.notes; 

        // Mettre à jour l'affichage
        displayOrderDetails(order);

        // Afficher la notification
        notification.textContent = `Statut de la commande mis à jour à : ${status}`;
        setTimeout(() => {
            notification.textContent = '';
        }, 5000); // Effacer la notification après 5 secondes
    });
});
