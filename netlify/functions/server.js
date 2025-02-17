const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const jwtSecret = process.env.JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
const supabase = createClient(supabaseUrl, supabaseKey);

// Route pour l'inscription des clients
app.post('/register', async (req, res) => {
  const { first_name, phone, city, country, password } = req.body;
  const role_id = 1; 

  const { data: roleData, error: roleError } = await supabase
    .from('roles')
    .select('*')
    .eq('id', role_id)
    .single();

  if (roleError) {
    return res.status(400).json({ error: roleError.message });
  }

  if (!roleData) {
    return res.status(400).json({ error: 'Le rôle spécifié n\'existe pas.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data: existingUser, error: existingUserError } = await supabase
    .from('users')
    .select('*')
    .eq('phone', phone)
    .single();

  if (existingUserError && existingUserError.code !== 'PGRST116') {
    return res.status(400).json({ error: existingUserError.message });
  }

  if (existingUser) {
    return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé.' });
  }

  const { data, error: insertError } = await supabase
    .from('users')
    .insert([{ first_name, phone, city, country, password: hashedPassword, role_id }]);

  if (insertError) {
    return res.status(400).json({ error: insertError.message });
  }

  res.status(200).json({ message: 'Utilisateur enregistré avec succès' });
});

// Route pour la connexion
app.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ error: 'Numéro de téléphone et mot de passe sont requis.' });
  }

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*, roles(name)')
    .eq('phone', phone)
    .single();

  if (userError && userError.code !== 'PGRST116') {
    return res.status(400).json({ error: userError.message });
  }

  if (!userData) {
    return res.status(400).json({ error: 'Numéro de téléphone ou mot de passe incorrect.' });
  }

  const isPasswordValid = await bcrypt.compare(password, userData.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Numéro de téléphone ou mot de passe incorrect.' });
  }

  const token = jwt.sign({ id: userData.id, role: userData.roles.name }, jwtSecret, { expiresIn: '1h' });

  res.status(200).json({ token, user: userData });
});

// Route pour obtenir les informations de l'utilisateur connecté
app.get('/profile', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, jwtSecret);

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('id', decoded.id)
    .single();

  if (userError) {
    return res.status(400).json({ error: userError.message });
  }

  res.status(200).json({ user: userData });
});

// Route pour mettre à jour le profil de l'utilisateur
app.put('/update-profile', async (req, res) => {
  const { id, first_name, phone, city, country } = req.body;

  if (!id || !first_name || !phone || !city || !country) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const { data, error } = await supabase
    .from('users')
    .update({ first_name, phone, city, country })
    .eq('id', id)
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Profil mis à jour avec succès', user: data[0] });
});

// Route pour rafraîchir le jeton
app.post('/refresh-token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ error: 'Token de rafraîchissement manquant' });
  }

  jwt.verify(token, jwtRefreshSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token de rafraîchissement expiré ou invalide' });
    }

    const newToken = jwt.sign({ id: decoded.id }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token: newToken });
  });
});

// Route pour obtenir les utilisateurs
app.get('/users', async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const offset = (page - 1) * limit;

  const { data: users, error } = await supabase
    .from('users')
    .select('*', { count: 'exact' })
    .range(offset, offset + limit - 1);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ users });
});

// Route pour obtenir les informations de l'utilisateur connecté en tant qu'administrateur
app.get('/admin', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, jwtSecret);

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*, roles(name)')
    .eq('id', decoded.id)
    .single();

  if (userError) {
    return res.status(400).json({ error: userError.message });
  }

  if (userData.roles.name !== 'admin') {
    return res.status(403).json({ error: 'Accès refusé' });
  }

  res.status(200).json({ message: 'Bienvenue sur la page d\'administration', user: userData });
});

// Route pour mettre à jour un utilisateur
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, phone, city, country } = req.body;

  const { data, error } = await supabase
    .from('users')
    .update({ first_name, phone, city, country })
    .eq('id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Utilisateur mis à jour avec succès', user: data });
});

// Route pour supprimer un utilisateur
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
});

// Route pour obtenir les statistiques des utilisateurs
app.get('/user-stats', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('city, count:count(*)')
    .group('city');

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ stats: data });
});

// Route pour enregistrer les administrateurs
app.post('/register-admin', async (req, res) => {
    const { first_name, phone, city, country, password } = req.body;
    const role_id = 3; // Rôle 'admin'
  
    if (!first_name || !phone || !city || !country || !password) {
      return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const { data: existingUser, error: existingUserError } = await supabase
        .from('users')
        .select('*')
        .eq('phone', phone)
        .single();
  
      if (existingUserError && existingUserError.code !== 'PGRST116') {
        return res.status(400).json({ error: existingUserError.message });
      }
  
      if (existingUser) {
        return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé.' });
      }
  
      const { data, error: insertError } = await supabase
        .from('users')
        .insert([{ first_name, phone, city, country, password: hashedPassword, role_id }]);
  
      if (insertError) {
        return res.status(400).json({ error: insertError.message });
      }
  
      res.status(200).json({ message: 'Administrateur enregistré avec succès' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur serveur lors de l\'enregistrement de l\'administrateur' });
    }
  });
  