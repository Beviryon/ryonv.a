const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Méthode non autorisée" }),
        };
    }

    try {
        const { first_name, phone, city, country, password } = JSON.parse(event.body);
        const role_id = 1; // ID du rôle par défaut

        // Vérifier si tous les champs sont remplis
        if (!first_name || !phone || !city || !country || !password) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Tous les champs sont obligatoires." }),
            };
        }

        // Vérifier si le rôle existe
        const { data: roleData, error: roleError } = await supabase
            .from("roles")
            .select("*")
            .eq("id", role_id)
            .single();

        if (roleError || !roleData) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Le rôle spécifié n'existe pas." }),
            };
        }

        // Vérifier si le téléphone est déjà utilisé
        const { data: existingUser, error: existingUserError } = await supabase
            .from("users")
            .select("*")
            .eq("phone", phone)
            .single();

        if (existingUser) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Le numéro de téléphone est déjà utilisé." }),
            };
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insérer l'utilisateur dans la base de données
        const { data, error: insertError } = await supabase
            .from("users")
            .insert([{ first_name, phone, city, country, password: hashedPassword, role_id }]);

        if (insertError) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: insertError.message }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Utilisateur enregistré avec succès." }),
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Erreur interne du serveur." }),
        };
    }
};
