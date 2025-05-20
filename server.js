const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware pour parser le JSON et gérer CORS
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Route pour sauvegarder les produits
app.post('/save-products', async (req, res) => {
    try {
        const { products } = req.body;
        const fileContent = `const products = ${JSON.stringify(products, null, 2)};`;
        await fs.writeFile(path.join(__dirname, 'products.js'), fileContent, 'utf-8');
        res.json({ success: true });
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
        res.status(500).json({ error: 'Erreur lors de la sauvegarde des produits' });
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
}); 