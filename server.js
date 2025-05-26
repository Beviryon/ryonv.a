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

// Route pour récupérer les notifications
app.get('/admin/notifications', authenticateToken, async (req, res) => {
    try {
        // Vérifier si l'utilisateur est admin
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('role_id')
            .eq('id', req.user.id)
            .single();

        if (userError || user.role_id !== 1) {
            return res.status(403).json({ error: 'Accès non autorisé' });
        }

        // Récupérer les notifications
        const { data: notifications, error } = await supabase
            .from('notifications')
            .select('*')
            .eq('user_id', req.user.id)
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) throw error;

        res.json(notifications);
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Route pour marquer une notification comme lue
app.post('/admin/notifications/:id/read', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        // Vérifier si l'utilisateur est admin
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('role_id')
            .eq('id', req.user.id)
            .single();

        if (userError || user.role_id !== 1) {
            return res.status(403).json({ error: 'Accès non autorisé' });
        }

        // Mettre à jour la notification
        const { error } = await supabase
            .from('notifications')
            .update({ read: true })
            .eq('id', id)
            .eq('user_id', req.user.id);

        if (error) throw error;

        res.json({ message: 'Notification mise à jour' });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Route pour marquer toutes les notifications comme lues
app.post('/admin/notifications/read-all', authenticateToken, async (req, res) => {
    try {
        // Vérifier si l'utilisateur est admin
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('role_id')
            .eq('id', req.user.id)
            .single();

        if (userError || user.role_id !== 1) {
            return res.status(403).json({ error: 'Accès non autorisé' });
        }

        // Mettre à jour toutes les notifications
        const { error } = await supabase
            .from('notifications')
            .update({ read: true })
            .eq('user_id', req.user.id)
            .eq('read', false);

        if (error) throw error;

        res.json({ message: 'Notifications mises à jour' });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Route pour récupérer les statistiques
app.get('/admin/stats', authenticateToken, async (req, res) => {
    try {
        // Vérifier si l'utilisateur est admin
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('role_id')
            .eq('id', req.user.id)
            .single();

        if (userError || user.role_id !== 1) {
            return res.status(403).json({ error: 'Accès non autorisé' });
        }

        // Récupérer les statistiques actuelles
        const { data: currentStats, error: currentError } = await supabase
            .from('vendors')
            .select('status');

        if (currentError) throw currentError;

        // Calculer les statistiques actuelles
        const stats = {
            total: currentStats.length,
            pending: currentStats.filter(v => v.status === 'pending').length,
            approved: currentStats.filter(v => v.status === 'approved').length,
            rejected: currentStats.filter(v => v.status === 'rejected').length
        };

        // Récupérer les statistiques du mois dernier
        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        
        const { data: lastMonthStats, error: lastMonthError } = await supabase
            .from('vendors')
            .select('status, created_at')
            .gte('created_at', lastMonth.toISOString());

        if (lastMonthError) throw lastMonthError;

        // Calculer les variations
        const lastMonthTotal = lastMonthStats.length;
        const lastMonthPending = lastMonthStats.filter(v => v.status === 'pending').length;
        const lastMonthApproved = lastMonthStats.filter(v => v.status === 'approved').length;
        const lastMonthRejected = lastMonthStats.filter(v => v.status === 'rejected').length;

        stats.totalChange = lastMonthTotal ? ((stats.total - lastMonthTotal) / lastMonthTotal) * 100 : 0;
        stats.pendingChange = lastMonthPending ? ((stats.pending - lastMonthPending) / lastMonthPending) * 100 : 0;
        stats.approvedChange = lastMonthApproved ? ((stats.approved - lastMonthApproved) / lastMonthApproved) * 100 : 0;
        stats.rejectedChange = lastMonthRejected ? ((stats.rejected - lastMonthRejected) / lastMonthRejected) * 100 : 0;

        // Récupérer l'évolution mensuelle des 6 derniers mois
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        const { data: monthlyStats, error: monthlyError } = await supabase
            .from('vendors')
            .select('created_at')
            .gte('created_at', sixMonthsAgo.toISOString());

        if (monthlyError) throw monthlyError;

        // Préparer les données pour le graphique
        const monthlyEvolution = {
            labels: [],
            data: []
        };

        for (let i = 5; i >= 0; i--) {
            const date = new Date();
            date.setMonth(date.getMonth() - i);
            const monthName = date.toLocaleString('fr-FR', { month: 'long' });
            
            const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
            const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            
            const monthCount = monthlyStats.filter(v => {
                const vendorDate = new Date(v.created_at);
                return vendorDate >= monthStart && vendorDate <= monthEnd;
            }).length;

            monthlyEvolution.labels.push(monthName);
            monthlyEvolution.data.push(monthCount);
        }

        stats.monthlyEvolution = monthlyEvolution;

        res.json(stats);
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Fonction pour créer une notification
async function createNotification(userId, type, message) {
    try {
        const { error } = await supabase
            .from('notifications')
            .insert({
                user_id: userId,
                type,
                message,
                read: false
            });

        if (error) throw error;
    } catch (error) {
        console.error('Erreur lors de la création de la notification:', error);
    }
}

// Modifier la route d'approbation des vendeurs pour ajouter les notifications
app.post('/admin/approve-vendor/:vendorId', authenticateToken, async (req, res) => {
    try {
        const { vendorId } = req.params;
        const { status } = req.body;

        // Vérifier si l'utilisateur est admin
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('role_id')
            .eq('id', req.user.id)
            .single();

        if (userError || user.role_id !== 1) {
            return res.status(403).json({ error: 'Accès non autorisé' });
        }

        // Mettre à jour le statut du vendeur
        const { data: vendor, error: vendorError } = await supabase
            .from('vendors')
            .update({ status })
            .eq('id', vendorId)
            .select('user_id, store_name')
            .single();

        if (vendorError) throw vendorError;

        // Créer une notification pour l'admin
        const message = status === 'approved' 
            ? `Le vendeur "${vendor.store_name}" a été approuvé`
            : `Le vendeur "${vendor.store_name}" a été rejeté`;
        
        await createNotification(req.user.id, status === 'approved' ? 'approval' : 'rejection', message);

        res.json({ message: 'Statut du vendeur mis à jour' });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Modifier la route d'inscription des vendeurs pour ajouter les notifications
app.post('/register-vendor', async (req, res) => {
    try {
        // ... existing vendor registration code ...

        // Après la création du vendeur, créer une notification pour les admins
        const { data: admins, error: adminError } = await supabase
            .from('users')
            .select('id')
            .eq('role_id', 1);

        if (!adminError && admins) {
            const message = `Nouvelle demande de vendeur : ${req.body.store_name}`;
            for (const admin of admins) {
                await createNotification(admin.id, 'new', message);
            }
        }

        res.status(201).json({ message: 'Vendeur enregistré avec succès' });
    } catch (error) {
        // ... existing error handling ...
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
}); 