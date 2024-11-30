document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

    // Charger les identifiants de l'administrateur depuis le fichier JSON
    fetch('adminCredentials.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const adminUsername = data.username;
            const adminPassword = data.password;

            console.log('Admin Username:', adminUsername);
            console.log('Admin Password:', adminPassword);

            if (username === adminUsername && password === adminPassword) {
                // Authentification réussie
                alert('Connexion réussie !');
                document.cookie = "admin=true; path=/";
                window.location.href = 'addProduct.html';
            } else {
                // Authentification échouée
                alert('Nom d\'utilisateur ou mot de passe incorrect.');
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement des identifiants:', error);
            alert('Erreur lors de la connexion.');
        });
});
