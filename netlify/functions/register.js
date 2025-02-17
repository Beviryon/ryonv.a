// document.addEventListener('DOMContentLoaded', () => {
//   const registerForm = document.getElementById('registerForm');
//   const confirmationModal = document.getElementById('confirmationModal');
//   const userNameSpan = document.getElementById('userName');
//   const closeModal = document.getElementById('closeModal');

//   registerForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const first_name = document.getElementById('first_name').value;
//     const phone = document.getElementById('phone').value;
//     const city = document.getElementById('city').value;
//     const country = document.getElementById('country').value;
//     const password = document.getElementById('password').value;

//     try {
//       const response = await fetch('http://localhost:4000/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ first_name, phone, city, country, password, role: 'client' }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Afficher la fenêtre modale avec le prénom de l'utilisateur
//         userNameSpan.textContent = first_name;
//         confirmationModal.style.display = 'block';
//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error('Erreur lors de l\'inscription:', error);
//       alert('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
//     }
//   });

//   // Fermer la modale lorsque l'utilisateur clique sur la croix
//   closeModal.addEventListener('click', () => {
//     confirmationModal.style.display = 'none';
//     window.location.href = 'login.html'; // Rediriger vers la page de connexion
//   });

//   // Fermer la modale lorsque l'utilisateur clique en dehors de celle-ci
//   window.addEventListener('click', (event) => {
//     if (event.target === confirmationModal) {
//       confirmationModal.style.display = 'none';
//       window.location.href = 'login.html'; // Rediriger vers la page de connexion
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const togglePassword = document.getElementById('togglePassword');
//   const passwordInput = document.getElementById('password');

//   togglePassword.addEventListener('click', () => {
//     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
//     passwordInput.setAttribute('type', type);
//     togglePassword.classList.toggle('fa-eye-slash');
//   });
// });

const express = require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/register', async (req, res) => {
  const { first_name, phone, city, country, password } = req.body;
  const role_id = 1; // Attribuer automatiquement le rôle 'client'

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

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  return await handler(event, context);
};
