const { createClient } = require('@supabase/supabase-js');

// Initialiser Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Middleware pour vérifier le token
const authenticateToken = async (event) => {
    const authHeader = event.headers.authorization;
    if (!authHeader) {
        return { error: 'Token manquant', status: 401 };
    }

    const token = authHeader.split(' ')[1];
    try {
        const { data: { user }, error } = await supabase.auth.getUser(token);
        if (error) throw error;
        return { user };
    } catch (error) {
        return { error: 'Token invalide', status: 401 };
    }
};

exports.handler = async (event, context) => {
    // Vérifier l'authentification
    const auth = await authenticateToken(event);
    if (auth.error) {
        return {
            statusCode: auth.status,
            body: JSON.stringify({ error: auth.error })
        };
    }

    // Vérifier le rôle admin
    const { data: user, error: userError } = await supabase
        .from('users')
        .select('role_id')
        .eq('id', auth.user.id)
        .single();

    if (userError || user.role_id !== 1) {
        return {
            statusCode: 403,
            body: JSON.stringify({ error: 'Accès non autorisé' })
        };
    }

    try {
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

        return {
            statusCode: 200,
            body: JSON.stringify(stats)
        };
    } catch (error) {
        console.error('Erreur:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur serveur' })
        };
    }
}; 