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

// Fonction pour créer une notification
const createNotification = async (userId, type, message) => {
    const { error } = await supabase
        .from('notifications')
        .insert([
            {
                user_id: userId,
                type,
                message,
                read: false
            }
        ]);
    if (error) throw error;
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

    // Vérifier le rôle admin pour les routes admin
    if (event.path.startsWith('/api/admin/')) {
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
    }

    try {
        // Gérer les différentes routes
        const path = event.path.replace('/api', '');
        const method = event.httpMethod;

        // Route GET /vendors - Liste des vendeurs
        if (path === '/vendors' && method === 'GET') {
            const { data: vendors, error } = await supabase
                .from('vendors')
                .select(`
                    *,
                    users (
                        email,
                        first_name,
                        last_name
                    )
                `)
                .order('created_at', { ascending: false });

            if (error) throw error;

            return {
                statusCode: 200,
                body: JSON.stringify(vendors)
            };
        }

        // Route POST /register-vendor - Inscription d'un vendeur
        if (path === '/register-vendor' && method === 'POST') {
            const vendorData = JSON.parse(event.body);

            // Créer l'utilisateur
            const { data: user, error: userError } = await supabase.auth.signUp({
                email: vendorData.email,
                password: vendorData.password,
                options: {
                    data: {
                        first_name: vendorData.first_name,
                        last_name: vendorData.last_name,
                        role_id: 2 // Rôle vendeur
                    }
                }
            });

            if (userError) throw userError;

            // Créer le vendeur
            const { data: vendor, error: vendorError } = await supabase
                .from('vendors')
                .insert([
                    {
                        user_id: user.id,
                        business_name: vendorData.business_name,
                        business_type: vendorData.business_type,
                        tax_id: vendorData.tax_id,
                        bank_account: vendorData.bank_account,
                        phone: vendorData.phone,
                        address: vendorData.address,
                        status: 'pending'
                    }
                ])
                .select()
                .single();

            if (vendorError) throw vendorError;

            // Notifier les admins
            const { data: admins } = await supabase
                .from('users')
                .select('id')
                .eq('role_id', 1);

            for (const admin of admins) {
                await createNotification(
                    admin.id,
                    'new_vendor',
                    `Nouvelle demande de vendeur : ${vendorData.business_name}`
                );
            }

            return {
                statusCode: 201,
                body: JSON.stringify({ message: 'Vendeur enregistré avec succès', vendor })
            };
        }

        // Route POST /admin/approve-vendor/:vendorId - Approuver/Rejeter un vendeur
        if (path.match(/^\/admin\/approve-vendor\/\d+$/) && method === 'POST') {
            const vendorId = path.split('/').pop();
            const { status } = JSON.parse(event.body);

            if (!['approved', 'rejected'].includes(status)) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Statut invalide' })
                };
            }

            // Mettre à jour le statut du vendeur
            const { data: vendor, error: updateError } = await supabase
                .from('vendors')
                .update({ status })
                .eq('id', vendorId)
                .select(`
                    *,
                    users (
                        email,
                        first_name,
                        last_name
                    )
                `)
                .single();

            if (updateError) throw updateError;

            // Notifier le vendeur
            await createNotification(
                vendor.user_id,
                status === 'approved' ? 'vendor_approved' : 'vendor_rejected',
                status === 'approved'
                    ? 'Votre demande de vendeur a été approuvée'
                    : 'Votre demande de vendeur a été rejetée'
            );

            // Notifier les admins
            const { data: admins } = await supabase
                .from('users')
                .select('id')
                .eq('role_id', 1);

            for (const admin of admins) {
                await createNotification(
                    admin.id,
                    status === 'approved' ? 'vendor_approved' : 'vendor_rejected',
                    `Vendeur ${vendor.business_name} ${status === 'approved' ? 'approuvé' : 'rejeté'}`
                );
            }

            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Statut du vendeur mis à jour', vendor })
            };
        }

        // Route non trouvée
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'Route non trouvée' })
        };
    } catch (error) {
        console.error('Erreur:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erreur serveur' })
        };
    }
}; 