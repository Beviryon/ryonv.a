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

// Gérer les différentes méthodes HTTP
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

    // Gérer les différentes routes
    const path = event.path.replace('/.netlify/functions/notifications', '');

    switch (event.httpMethod) {
        case 'GET':
            return handleGet(auth.user.id);
        case 'POST':
            if (path === '/read-all') {
                return handleMarkAllRead(auth.user.id);
            }
            if (path.match(/\/\d+\/read/)) {
                const id = path.split('/')[1];
                return handleMarkAsRead(id, auth.user.id);
            }
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Route non trouvée' })
            };
        default:
            return {
                statusCode: 405,
                body: JSON.stringify({ error: 'Méthode non autorisée' })
            };
    }
};

// Récupérer les notifications
async function handleGet(userId) {
    try {
        const { data: notifications, error } = await supabase
            .from('notifications')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) throw error;

        return {
            statusCode: 200,
            body: JSON.stringify(notifications)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur serveur' })
        };
    }
}

// Marquer une notification comme lue
async function handleMarkAsRead(notificationId, userId) {
    try {
        const { error } = await supabase
            .from('notifications')
            .update({ read: true })
            .eq('id', notificationId)
            .eq('user_id', userId);

        if (error) throw error;

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Notification mise à jour' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur serveur' })
        };
    }
}

// Marquer toutes les notifications comme lues
async function handleMarkAllRead(userId) {
    try {
        const { error } = await supabase
            .from('notifications')
            .update({ read: true })
            .eq('user_id', userId)
            .eq('read', false);

        if (error) throw error;

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Notifications mises à jour' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur serveur' })
        };
    }
} 