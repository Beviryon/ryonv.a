import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fileUpload from 'express-fileupload';

// Charger les variables d'environnement
dotenv.config();

const app = express();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const jwtSecret = process.env.JWT_SECRET;

if (!supabaseUrl || !supabaseKey || !jwtSecret) {
  throw new Error('Les variables d\'environnement SUPABASE_URL, SUPABASE_KEY et JWT_SECRET sont requises.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Utiliser le middleware cors
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Route pour l'inscription des clients
// app.post('/register', async (req, res) => {
//   const { first_name, phone, city, country, password } = req.body;
//   const role_id = 1; // Attribuer automatiquement le rôle 'client'

//   // Vérifier si le rôle existe
//   const { data: roleData, error: roleError } = await supabase
//     .from('roles')
//     .select('*')
//     .eq('id', role_id)
//     .single();

//   if (roleError) {
//     console.error('Error fetching role:', roleError);
//     return res.status(400).json({ error: roleError.message });
//   }

//   if (!roleData) {
//     return res.status(400).json({ error: 'Le rôle spécifié n\'existe pas.' });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Vérifier si le numéro de téléphone existe déjà
//   const { data: existingUser, error: existingUserError } = await supabase
//     .from('users')
//     .select('*')
//     .eq('phone', phone)
//     .single();

//   if (existingUserError && existingUserError.code !== 'PGRST116') {
//     console.error('Error checking existing user:', existingUserError);
//     return res.status(400).json({ error: existingUserError.message });
//   }

//   if (existingUser) {
//     return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé.' });
//   }

//   const { data, error: insertError } = await supabase
//     .from('users')
//     .insert([{ first_name, phone, city, country, password: hashedPassword, role_id }]);

//   if (insertError) {
//     console.error('Error during insert:', insertError);
//     return res.status(400).json({ error: insertError.message });
//   }

//   console.log('User registered successfully:', { first_name, phone, city, country, role_id });
//   res.status(200).json({ message: 'User registered successfully' });
// });

// Route pour la connexion
// app.post('/login', async (req, res) => {
//   const { phone, password } = req.body;

//   const { data: userData, error: userError } = await supabase
//     .from('users')
//     .select('*, roles(name)')
//     .eq('phone', phone)
//     .single();

//   if (userError && userError.code !== 'PGRST116') {
//     console.error('Error fetching user:', userError);
//     return res.status(400).json({ error: userError.message });
//   }

//   if (!userData) {
//     return res.status(400).json({ error: 'Numéro de téléphone ou mot de passe incorrect.' });
//   }

//   const isPasswordValid = await bcrypt.compare(password, userData.password);
//   if (!isPasswordValid) {
//     return res.status(400).json({ error: 'Numéro de téléphone ou mot de passe incorrect.' });
//   }

//   const token = jwt.sign({ id: userData.id, role: userData.roles.name }, jwtSecret, { expiresIn: '1h' });

//   console.log('User logged in successfully:', { phone, role: userData.roles.name });
//   res.status(200).json({ token, user: userData });
// });

// Route pour l'inscription des clients
app.post('/register', async (req, res) => {
  const { first_name, phone, city, country, password } = req.body;
  const role_id = 1; // Attribuer automatiquement le rôle 'client'

  const { data: roleData, error: roleError } = await supabase
    .from('roles')
    .select('*')
    .eq('id', role_id)
    .single();

  if (roleError) {
    console.error('Error fetching role:', roleError);
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
    console.error('Error checking existing user:', existingUserError);
    return res.status(400).json({ error: existingUserError.message });
  }

  if (existingUser) {
    return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé.' });
  }

  const { data, error: insertError } = await supabase
    .from('users')
    .insert([{ first_name, phone, city, country, password: hashedPassword, role_id }]);

  if (insertError) {
    console.error('Error during insert:', insertError);
    return res.status(400).json({ error: insertError.message });
  }

  console.log('User registered successfully:', { first_name, phone, city, country, role_id });
  res.status(200).json({ message: 'User registered successfully' });
});

// Route pour la connexion
// app.post('/login', async (req, res) => {
//   const { phone, password } = req.body;

//   const { data: userData, error: userError } = await supabase
//     .from('users')
//     .select('*, roles(name)')
//     .eq('phone', phone)
//     .single();

//   if (userError && userError.code !== 'PGRST116') {
//     console.error('Error fetching user:', userError);
//     return res.status(400).json({ error: userError.message });
//   }

//   if (!userData) {
//     return res.status(400).json({ error: 'Numéro de téléphone ou mot de passe incorrect.' });
//   }

//   const isPasswordValid = await bcrypt.compare(password, userData.password);
//   if (!isPasswordValid) {
//     return res.status(400).json({ error: 'Numéro de téléphone ou mot de passe incorrect.' });
//   }

//   const token = jwt.sign({ id: userData.id, role: userData.roles.name }, jwtSecret, { expiresIn: '1h' });

//   res.status(200).json({ token, user: userData });
// });
app.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  console.log('Requête reçue avec les données suivantes :', req.body);

  if (!phone || !password) {
    return res.status(400).json({ error: 'Numéro de téléphone et mot de passe sont requis.' });
  }

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*, roles(name)')
    .eq('phone', phone)
    .single();

  if (userError && userError.code !== 'PGRST116') {
    console.error('Erreur lors de la récupération de l\'utilisateur :', userError);
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
    console.error('Erreur lors de la récupération de l\'utilisateur:', userError);
    return res.status(400).json({ error: userError.message });
  }

  res.status(200).json({ user: userData });
});

// Route pour mettre à jour le profil de l'utilisateur
app.put('/update-profile', async (req, res) => {
  const { id, first_name, phone, city, country } = req.body;

  // Vérifier que toutes les données nécessaires sont présentes
  if (!id || !first_name || !phone || !city || !country) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const { data, error } = await supabase
    .from('users')
    .update({ first_name, phone, city, country })
    .eq('id', id)
    .select();

  if (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    return res.status(400).json({ error: error.message });
  }

  console.log('Profil mis à jour avec succès:', data);
  res.status(200).json({ message: 'Profil mis à jour avec succès', user: data[0] });
});

// Route pour la création des comptes de vendeurs par l'administrateur
app.post('/admin/create-vendor', async (req, res) => {
  const { phone, password, role_id } = req.body;

  // Vérifier si le rôle existe
  const { data: roleData, error: roleError } = await supabase
    .from('roles')
    .select('*')
    .eq('id', role_id)
    .single();

  if (roleError) {
    console.error('Error fetching role:', roleError);
    return res.status(400).json({ error: roleError.message });
  }

  if (!roleData) {
    return res.status(400).json({ error: 'Le rôle spécifié n\'existe pas.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error: insertError } = await supabase
    .from('users')
    .insert([{ phone, password: hashedPassword, role_id }]);

  if (insertError) {
    console.error('Error during insert:', insertError);
    return res.status(400).json({ error: insertError.message });
  }

  console.log('Vendor account created successfully:', { phone, role_id });
  res.status(200).json({ message: 'Vendor account created successfully' });
});

// Route pour obtenir les produits d'un vendeur
app.get('/vendor/products', async (req, res) => {
  const { vendorId } = req.query;
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('vendor_id', vendorId);

  if (error) {
    console.error('Error during fetch:', error);
    return res.status(400).json({ error: error.message });
  }

  console.log('Products retrieved successfully for vendor:', { vendorId });
  res.status(200).json({ products: data });
});

// Route pour ajouter un produit
app.post('/vendor/products', async (req, res) => {
  const { vendorId, product } = req.body;
  const { data, error } = await supabase
    .from('products')
    .insert([{ ...product, vendor_id: vendorId }]);

  if (error) {
    console.error('Error during insert:', error);
    return res.status(400).json({ error: error.message });
  }

  console.log('Product added successfully:', product);
  res.status(200).json({ message: 'Product added successfully' });
});

// Route pour modifier un produit
app.put('/vendor/products/:id', async (req, res) => {
  const { id } = req.params;
  const { product } = req.body;
  const { data, error } = await supabase
    .from('products')
    .update(product)
    .eq('id', id);

  if (error) {
    console.error('Error during update:', error);
    return res.status(400).json({ error: error.message });
  }

  console.log('Product updated successfully:', product);
  res.status(200).json({ message: 'Product updated successfully' });
});

// Route pour supprimer un produit
app.delete('/vendor/products/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error during delete:', error);
    return res.status(400).json({ error: error.message });
  }

  console.log('Product deleted successfully:', { id });
  res.status(200).json({ message: 'Product deleted successfully' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
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

app.get('/users', async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const offset = (page - 1) * limit;

  const { data: users, error } = await supabase
    .from('users')
    .select('*', { count: 'exact' })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ users });
});

app.get('/admin', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, jwtSecret);

  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*, roles(name)')
    .eq('id', decoded.id)
    .single();

  if (userError) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', userError);
    return res.status(400).json({ error: userError.message });
  }

  if (userData.roles.name !== 'admin') {
    return res.status(403).json({ error: 'Accès refusé' });
  }

  res.status(200).json({ message: 'Bienvenue sur la page d\'administration', user: userData });
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, phone, city, country } = req.body;

  const { data, error } = await supabase
    .from('users')
    .update({ first_name, phone, city, country })
    .eq('id', id);

  if (error) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Utilisateur mis à jour avec succès', user: data });
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
});

app.get('/user-stats', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('city, count:count(*)')
    .group('city');

  if (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ stats: data });
});

//Route pour enregistrer les admin
app.post('/register-admin', async (req, res) => {
  const { first_name, phone, city, country, password } = req.body;
  const role_id = 3; // Rôle 'admin'

  console.log('Requête reçue avec les données suivantes :', req.body);

  // Vérifier que tous les champs sont remplis
  if (!first_name || !phone || !city || !country || !password) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  try {
    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Mot de passe hashé :', hashedPassword); // Log pour vérifier le hashage

    const { data: existingUser, error: existingUserError } = await supabase
      .from('users')
      .select('*')
      .eq('phone', phone)
      .single();

    if (existingUserError && existingUserError.code !== 'PGRST116') {
      console.error('Erreur lors de la vérification de l\'utilisateur existant :', existingUserError);
      return res.status(400).json({ error: existingUserError.message });
    }

    if (existingUser) {
      return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé.' });
    }

    // Insertion des données avec le mot de passe hashé
    const { data, error: insertError } = await supabase
      .from('users')
      .insert([{ first_name, phone, city, country, password: hashedPassword, role_id }]);

    if (insertError) {
      console.error('Erreur lors de l\'insertion de l\'administrateur :', insertError);
      return res.status(400).json({ error: insertError.message });
    }

    console.log('Administrateur enregistré avec succès :', { first_name, phone, city, country, role_id });
    res.status(200).json({ message: 'Administrateur enregistré avec succès' });

  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'administrateur :', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'enregistrement de l\'administrateur.' });
  }
});

// Route pour envoyer un lien de réinitialisation du mot de passe
app.post('/forgot-password', async (req, res) => {
  const { phone } = req.body;

  // Vérifiez si l'utilisateur existe
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('phone', phone)
    .single();

  if (userError || !userData) {
    return res.status(400).json({ error: 'Numéro de téléphone incorrect.' });
  }

  // Générez un token de réinitialisation
  const resetToken = jwt.sign({ id: userData.id }, jwtSecret, { expiresIn: '1h' });

  // Envoyez le token par SMS ou e-mail (exemple avec console.log)
  console.log(`Lien de réinitialisation envoyé à ${phone}: http://localhost:3000/reset-password.html?token=${resetToken}`);

  res.status(200).json({ message: 'Lien de réinitialisation envoyé.' });
});

// Route pour réinitialiser le mot de passe
app.post('/reset-password', async (req, res) => {
  const { newPassword, token } = req.body;

  try {
    const decoded = jwt.verify(token, jwtSecret);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const { data, error } = await supabase
      .from('users')
      .update({ password: hashedPassword })
      .eq('id', decoded.id);

    if (error) {
      throw new Error('Erreur lors de la mise à jour du mot de passe.');
    }

    res.status(200).json({ message: 'Mot de passe réinitialisé avec succès.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route pour l'inscription des vendeurs
app.post('/register-vendor', async (req, res) => {
  const { 
    first_name, 
    phone, 
    city, 
    country, 
    password,
    store_name,
    store_description,
    business_type,
    tax_id,
    bank_account
  } = req.body;
  const role_id = 2; // Rôle 'vendor'

  try {
    // Vérifier si le rôle existe
    const { data: roleData, error: roleError } = await supabase
      .from('roles')
      .select('*')
      .eq('id', role_id)
      .single();

    if (roleError || !roleData) {
      console.error('Error fetching role:', roleError);
      return res.status(400).json({ error: 'Le rôle vendeur n\'existe pas.' });
    }

    // Vérifier si le numéro de téléphone existe déjà
    const { data: existingUser, error: existingUserError } = await supabase
      .from('users')
      .select('*')
      .eq('phone', phone)
      .single();

    if (existingUser) {
      return res.status(400).json({ error: 'Le numéro de téléphone est déjà utilisé.' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l'utilisateur vendeur
    const { data: userData, error: userError } = await supabase
      .from('users')
      .insert([{
        first_name,
        phone,
        city,
        country,
        password: hashedPassword,
        role_id
      }])
      .select()
      .single();

    if (userError) {
      console.error('Error creating vendor user:', userError);
      return res.status(400).json({ error: 'Erreur lors de la création du compte vendeur.' });
    }

    // Créer le profil vendeur
    const { error: vendorError } = await supabase
      .from('vendors')
      .insert([{
        user_id: userData.id,
        store_name,
        store_description,
        business_type,
        tax_id,
        bank_account,
        status: 'pending' // Le statut sera approuvé par un admin
      }]);

    if (vendorError) {
      console.error('Error creating vendor profile:', vendorError);
      // Supprimer l'utilisateur si la création du profil échoue
      await supabase.from('users').delete().eq('id', userData.id);
      return res.status(400).json({ error: 'Erreur lors de la création du profil vendeur.' });
    }

    res.status(200).json({ 
      message: 'Compte vendeur créé avec succès. En attente d\'approbation par un administrateur.',
      user: userData
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la création du compte vendeur.' });
  }
});

// Route pour approuver un vendeur (admin seulement)
app.post('/admin/approve-vendor/:vendorId', async (req, res) => {
  const { vendorId } = req.params;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token d\'authentification manquant.' });
  }

  try {
    // Vérifier si l'utilisateur est un admin
    const decoded = jwt.verify(token, jwtSecret);
    const { data: adminData, error: adminError } = await supabase
      .from('users')
      .select('*, roles(name)')
      .eq('id', decoded.id)
      .single();

    if (adminError || adminData.roles.name !== 'admin') {
      return res.status(403).json({ error: 'Accès non autorisé.' });
    }

    // Mettre à jour le statut du vendeur
    const { error: updateError } = await supabase
      .from('vendors')
      .update({ status: 'approved' })
      .eq('id', vendorId);

    if (updateError) {
      return res.status(400).json({ error: 'Erreur lors de l\'approbation du vendeur.' });
    }

    res.status(200).json({ message: 'Vendeur approuvé avec succès.' });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Erreur serveur lors de l\'approbation du vendeur.' });
  }
});

// Route pour obtenir la liste des vendeurs (admin seulement)
app.get('/admin/vendors', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token d\'authentification manquant.' });
  }

  try {
    // Vérifier si l'utilisateur est un admin
    const decoded = jwt.verify(token, jwtSecret);
    const { data: adminData, error: adminError } = await supabase
      .from('users')
      .select('*, roles(name)')
      .eq('id', decoded.id)
      .single();

    if (adminError || adminData.roles.name !== 'admin') {
      return res.status(403).json({ error: 'Accès non autorisé.' });
    }

    // Récupérer la liste des vendeurs avec leurs informations
    const { data: vendors, error: vendorsError } = await supabase
      .from('vendors')
      .select(`
        *,
        users (
          first_name,
          phone,
          city,
          country
        )
      `);

    if (vendorsError) {
      return res.status(400).json({ error: 'Erreur lors de la récupération des vendeurs.' });
    }

    res.status(200).json({ vendors });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des vendeurs.' });
  }
});

