const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};
navSlide();

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const targetElement = e.target;

  // Vérifie si l'élément survolé est une image
  if (targetElement.tagName.toLowerCase() === 'img') {
    cursor.style.display = 'block';
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  } else {
    cursor.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navIcons = document.querySelectorAll('.mobile-navbar .nav-icon');

  navIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
      event.preventDefault();
      const href = icon.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
  });
});

// redirection vers chaque page detail de chaque produit
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card a');

  productCards.forEach(card => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const productId = card.getAttribute('href').split('=')[1];
      window.location.href = `details.html?id=${productId}`;
    });
  });
});


////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', async () => {
//   const profileForm = document.getElementById('profileForm');
//   const editProfileBtn = document.getElementById('editProfileBtn');
//   const changePhotoBtn = document.getElementById('changePhotoBtn');
//   const profilePictureInput = document.getElementById('profilePictureInput');
//   const profileImage = document.getElementById('profileImage');
//   const profileLink = document.getElementById('profile-link');
//   const navProfileImage = document.getElementById('navProfileImage');
//   const logoutBtn = document.getElementById('logoutBtn');

//   console.log('DOM elements:', {
//       profileForm,
//       editProfileBtn,
//       changePhotoBtn,
//       profilePictureInput,
//       profileImage,
//       profileLink,
//       navProfileImage,
//       logoutBtn
//   });

//   const showPopup = (message) => {
//       const popup = document.createElement('div');
//       popup.classList.add('popup');
//       popup.innerText = message;
//       document.body.appendChild(popup);
//       setTimeout(() => {
//           popup.remove();
//       }, 3000);
//   };

//   const fetchUserProfile = async () => {
//       const token = localStorage.getItem('token');
//       try {
//           const response = await fetch('http://localhost:4000/profile', {
//               headers: {
//                   'Authorization': `Bearer ${token}`
//               }
//           });
//           if (response.ok) {
//               const data = await response.json();
//               const user = data.user;
//               localStorage.setItem('user', JSON.stringify(user));
//               profileLink.style.display = 'block';
//               document.getElementById('firstName').textContent = user.first_name;
//               document.getElementById('userCity').textContent = user.city;
//               document.getElementById('userCountry').textContent = user.country;
//               const storedProfilePicture = localStorage.getItem('profilePicture_' + user.id);

//               if (storedProfilePicture) {
//                   console.log('Profile picture found:', storedProfilePicture);
//                   navProfileImage.src = storedProfilePicture;
//                   profileImage.src = storedProfilePicture;
//               } else {
//                   console.log('No profile picture found, using default');
//                   navProfileImage.src = './images/icons/profile.jpg';
//                   profileImage.src = './images/icons/profile.jpg';
//               }

//           } else if (response.status === 401) {
//               // Token expired, refresh the token
//               const refreshToken = localStorage.getItem('refreshToken');
//               const refreshResponse = await fetch('http://localhost:4000/refresh-token', {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify({ token: refreshToken })
//               });
//               if (refreshResponse.ok) {
//                   const refreshData = await refreshResponse.json();
//                   localStorage.setItem('token', refreshData.token);
//                   fetchUserProfile();
//               } else {
//                   // Refresh failed, redirect to login page
//                   window.location.href = './login.html';
//               }
//           } else {
//               console.error('Error fetching user information');
//           }
//       } catch (error) {
//           console.error('Network error:', error);
//       }
//   };

//   if (profileLink && profileForm && editProfileBtn && changePhotoBtn && profilePictureInput && profileImage && navProfileImage && logoutBtn) {
//       fetchUserProfile();

//       // Handle logout
//       logoutBtn.addEventListener('click', () => {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//           localStorage.removeItem('refreshToken');
//           showPopup('Déconnecté avec succès');
//           setTimeout(() => {
//               window.location.href = './login.html';
//           }, 2000);
//       });

//       editProfileBtn.addEventListener('click', () => {
//           profileForm.style.display = 'block';
//           const user = JSON.parse(localStorage.getItem('user'));
//           if (user) {
//               document.getElementById('first_name').value = user.first_name;
//               document.getElementById('phone').value = user.phone;
//               document.getElementById('city').value = user.city;
//               document.getElementById('country').value = user.country;
//           } else {
//               console.error('User information not available.');
//           }
//       });

//       profileForm.addEventListener('submit', async (e) => {
//           e.preventDefault();
//           const token = localStorage.getItem('token');
//           const user = JSON.parse(localStorage.getItem('user'));
//           if (user) {
//               const formData = new FormData(profileForm);
//               formData.append('id', user.id);
//               try {
//                   const response = await fetch('http://localhost:4000/update-profile', {
//                       method: 'PUT',
//                       headers: {
//                           'Authorization': `Bearer ${token}`,
//                           'Content-Type': 'application/json'
//                       },
//                       body: JSON.stringify(Object.fromEntries(formData))
//                   });
//                   const data = await response.json();
//                   if (response.ok) {
//                       showPopup('Profil mis à jour avec succès');
//                       fetchUserProfile();
//                       profileForm.style.display = 'none';
//                   } else {
//                       showPopup(data.error);
//                   }
//               } catch (error) {
//                   console.error('Network error:', error);
//               }
//           } else {
//               console.error('User information not available.');
//           }
//       });

//       changePhotoBtn.addEventListener('click', () => {
//           profilePictureInput.click();
//       });

//       profilePictureInput.addEventListener('change', (e) => {
//           const file = e.target.files[0];
//           const reader = new FileReader();
//           reader.onloadend = () => {
//               const profilePictureUrl = reader.result;
//               const user = JSON.parse(localStorage.getItem('user'));
//               localStorage.setItem('profilePicture_' + user.id, profilePictureUrl);
//               profileImage.src = profilePictureUrl;
//               navProfileImage.src = profilePictureUrl;
//               showPopup('Photo de profil mise à jour avec succès');
//           };
//           reader.readAsDataURL(file);
//       });

//   } else {
//       console.error('One or more DOM elements are not found.');
//   }
// });
///////////////////////////////////////