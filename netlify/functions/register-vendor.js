const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" }),
    };
  }

  try {
    const {
      first_name, phone, city, country, password,
      store_name, store_description, business_type, address, subscription_type
    } = JSON.parse(event.body);

    // Vérification des champs requis
    if (
      !first_name || !phone || !city || !country || !password ||
      !store_name || !store_description || !business_type || !address || !subscription_type
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Tous les champs sont obligatoires." }),
      };
    }

    // Vérifier si le téléphone est déjà utilisé
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
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

    // Insérer l'utilisateur vendeur dans la table users
    const { data: user, error: userError } = await supabase
      .from("users")
      .insert([{
        first_name,
        phone,
        city,
        country,
        password: hashedPassword,
        role_id: 2 // 2 = vendeur
      }])
      .select()
      .single();

    if (userError || !user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: userError ? userError.message : "Erreur lors de la création de l'utilisateur." }),
      };
    }

    // Insérer la boutique du vendeur dans vendors
    const { error: vendorError } = await supabase
      .from("vendors")
      .insert([{
        user_id: user.id,
        business_name: store_name,
        business_type,
        subscription_type,
        phone,
        address,
        status: 'pending'
      }]);

    if (vendorError) {
      // Optionnel : supprimer l'utilisateur si la création du vendeur échoue
      await supabase.from("users").delete().eq("id", user.id);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: vendorError.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Vendeur enregistré avec succès. En attente de validation." }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur interne du serveur." }),
    };
  }
};
