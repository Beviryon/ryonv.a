document.addEventListener('DOMContentLoaded', async () => {
  const tbody = document.querySelector('tbody');

  async function fetchUsers() {
    try {
      const response = await fetch('https://ryonv-shop.netlify.app/.netlify/functions/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        displayUsers(data.users);
      } else {
        console.error('La réponse n\'est pas au format JSON.');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  }

  function displayUsers(users) {
    tbody.innerHTML = '';
    if (!users || users.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5">Aucun utilisateur trouvé.</td></tr>';
      return;
    }

    users.forEach(user => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.first_name}</td>
        <td>${user.phone}</td>
        <td>${user.city}</td>
        <td>${user.country}</td>
        <td>
          <button class="edit" data-id="${user.id}">Modifier</button>
          <button class="delete" data-id="${user.id}">Supprimer</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Ajoutez des écouteurs d'événements aux boutons après l'affichage des utilisateurs
    attachEventListeners();
  }

  async function deleteUser(userId) {
    try {
      const response = await fetch(`https://ryonv-shop.netlify.app/.netlify/functions/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de l\'utilisateur.');
      }

      console.log('Utilisateur supprimé avec succès.');
      // Rechargez les utilisateurs après la suppression
      await fetchUsers();
    } catch (error) {
      console.error('Erreur :', error);
    }
  }

  async function updateUser(userId, updatedData) {
    try {
      const response = await fetch(`https://ryonv-shop.netlify.app/.netlify/functions/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'utilisateur.');
      }

      console.log('Utilisateur mis à jour avec succès.');
      // Rechargez les utilisateurs après la mise à jour
      await fetchUsers();
    } catch (error) {
      console.error('Erreur :', error);
    }
  }

  function openEditForm(userId) {
    const updatedData = {
      first_name: prompt('Nouveau Prénom:', ''),
      phone: prompt('Nouveau Téléphone:', ''),
      city: prompt('Nouvelle Ville:', ''),
      country: prompt('Nouveau Pays:', '')
    };

    // Vérifiez que les champs ne sont pas vides
    if (updatedData.first_name && updatedData.phone && updatedData.city && updatedData.country) {
      updateUser(userId, updatedData);
    } else {
      alert('Tous les champs doivent être remplis.');
    }
  }

  function attachEventListeners() {
    document.querySelectorAll('.edit').forEach(button => {
      button.addEventListener('click', (event) => {
        const userId = event.target.dataset.id;
        openEditForm(userId);
      });
    });

    document.querySelectorAll('.delete').forEach(button => {
      button.addEventListener('click', (event) => {
        const userId = event.target.dataset.id;
        if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
          deleteUser(userId);
        }
      });
    });
  }

  await fetchUsers();
});
