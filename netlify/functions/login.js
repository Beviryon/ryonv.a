const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const jwtSecret = process.env.JWT_SECRET;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' }),
    };
  }

  try {
    const { phone, password } = JSON.parse(event.body);

    if (!phone || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Numéro de téléphone et mot de passe sont requis.' }),
      };
    }

    // Vérifier si l'utilisateur existe
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id, phone, password, role_id')
      .eq('phone', phone)
      .single();

    if (userError || !user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Numéro de téléphone ou mot de passe incorrect.' }),
      };
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Numéro de téléphone ou mot de passe incorrect.' }),
      };
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.id, role: user.role_id }, jwtSecret, { expiresIn: '1h' });

    return {
      statusCode: 200,
      body: JSON.stringify({ token, user: { id: user.id, phone: user.phone, role: user.role_id } }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur interne du serveur.' }),
    };
  }
};
