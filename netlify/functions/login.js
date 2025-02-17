// // document.addEventListener('DOMContentLoaded', () => {
// //   const loginForm = document.getElementById('loginForm');
// //   const togglePassword = document.getElementById('togglePassword');
// //   const passwordInput = document.getElementById('password');
// //   const welcomeModal = document.getElementById('welcomeModal');
// //   const closeModal = document.getElementById('closeModal');
// //   const userNameSpan = document.getElementById('userName');

// //   loginForm.addEventListener('submit', async (e) => {
// //     e.preventDefault();
// //     const phone = document.getElementById('phone').value;
// //     const password = passwordInput.value;

// //     try {
// //       const response = await fetch('http://localhost:4000/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ phone, password }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         // Afficher la fenêtre modale de bienvenue
// //         userNameSpan.textContent = data.first_name;
// //         welcomeModal.style.display = 'block';

// //         // Fermer la modale après 3 secondes et rediriger vers la page d'accueil
// //         setTimeout(() => {
// //           welcomeModal.style.display = 'none';
// //           window.location.href = '/desloSite/home.html';
// //         }, 3000);

// //         // Stocker le token dans le localStorage
// //         localStorage.setItem('token', data.token);
// //       } else {
// //         alert(data.error);
// //       }
// //     } catch (error) {
// //       console.error('Erreur lors de la connexion:', error);
// //       alert('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
// //     }
// //   });

// //   // Gestion de la fermeture de la modale
// //   closeModal.addEventListener('click', () => {
// //     welcomeModal.style.display = 'none';
// //   });

// //   // Afficher/Masquer le mot de passe
// //   togglePassword.addEventListener('click', () => {
// //     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
// //     passwordInput.setAttribute('type', type);
// //     togglePassword.classList.toggle('fa-eye-slash');
// //   });
// // });

// // document.addEventListener('DOMContentLoaded', () => {
// //   const token = localStorage.getItem('token');
// //   if (token) {
// //     // Supposons que vous ayez stocké le prénom et le nom de l'utilisateur dans le localStorage après la connexion
// //     const firstName = localStorage.getItem('first_name');

// //     if (firstName && lastName) {
// //       const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
// //       const profileIcon = document.getElementById('profile-icon');
// //       profileIcon.textContent = initials;

// //       // Afficher l'icône de profil et masquer le lien de connexion
// //       document.getElementById('profile-link').style.display = 'block';
// //       document.getElementById('login-link').style.display = 'none';
// //     }
// //   }
// // });

// document.addEventListener('DOMContentLoaded', () => {
//   const loginForm = document.getElementById('loginForm');
//   const togglePassword = document.getElementById('togglePassword');
//   const passwordInput = document.getElementById('password');
//   const welcomeModal = document.getElementById('welcomeModal');
//   const closeModal = document.getElementById('closeModal');
//   const userNameSpan = document.getElementById('userName');

//   loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const phone = document.getElementById('phone').value;
//     const password = passwordInput.value;

//     try {
//       const response = await fetch('http://localhost:4000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ phone, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Afficher la fenêtre modale de bienvenue
//         userNameSpan.textContent = data.user.first_name;
//         welcomeModal.style.display = 'block';

//         // Stocker le token et le rôle dans le localStorage
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userRole', data.user.roles.name);

//         // Fermer la modale après 3 secondes et rediriger vers la page appropriée
//         setTimeout(() => {
//           welcomeModal.style.display = 'none';

//           // Rediriger en fonction du rôle de l'utilisateur
//           if (data.user.roles.name === 'admin') {
//             window.location.href = '/desloSite/admin.html';
//           } else {
//             window.location.href = '/desloSite/profile.html';
//           }
//         }, 3000);

//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error('Erreur lors de la connexion:', error);
//       alert('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
//     }
//   });

//   // Gestion de la fermeture de la modale
//   closeModal.addEventListener('click', () => {
//     welcomeModal.style.display = 'none';
//   });

//   // Afficher/Masquer le mot de passe
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
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const jwtSecret = process.env.JWT_SECRET;
const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/login', async (req, res) => {
  const { phone, password } = req.body;

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

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  return await handler(event, context);
};
