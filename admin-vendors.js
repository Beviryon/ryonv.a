document.addEventListener('DOMContentLoaded', () => {
    // Éléments DOM
    const vendorsList = document.getElementById('vendorsList');
    const searchInput = document.getElementById('searchVendor');
    const statusFilter = document.getElementById('statusFilter');
    const vendorDetailsModal = document.getElementById('vendorDetailsModal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modalApproveBtn = document.getElementById('modalApproveBtn');
    const modalRejectBtn = document.getElementById('modalRejectBtn');

    // Éléments pour les notifications et statistiques
    const notificationBell = document.querySelector('.notification-bell');
    const notificationBadge = document.querySelector('.notification-badge');
    const notificationDropdown = document.querySelector('.notification-dropdown');
    const notificationList = document.querySelector('.notification-list');
    const markAllReadBtn = document.getElementById('markAllRead');
    const statsGrid = document.querySelector('.stats-grid');
    const vendorDistributionChart = document.getElementById('vendorDistributionChart');
    const vendorEvolutionChart = document.getElementById('vendorEvolutionChart');

    // État de l'application
    let vendors = [];
    let currentVendorId = null;

    // État des notifications
    let notifications = [];
    let unreadCount = 0;

    // Vérifier l'authentification
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/desloSite/login.html';
        return;
    }

    // Vérifier le rôle admin
    const checkAdminRole = async () => {
        try {
            const response = await fetch('https://ryonv-shop.netlify.app/.netlify/functions/admin', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Accès non autorisé');
            }
        } catch (error) {
            console.error('Erreur de vérification du rôle admin:', error);
            window.location.href = '/desloSite/login.html';
        }
    };

    // Charger la liste des vendeurs
    const loadVendors = async () => {
        try {
            const response = await fetch('https://ryonv-shop.netlify.app/.netlify/functions/admin/vendors', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des vendeurs');
            }

            const data = await response.json();
            vendors = data.vendors;
            renderVendors(vendors);
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors du chargement des vendeurs');
        }
    };

    // Rendre la liste des vendeurs
    const renderVendors = (vendorsToRender) => {
        vendorsList.innerHTML = '';
        const template = document.getElementById('vendorCardTemplate');

        vendorsToRender.forEach(vendor => {
            const card = template.content.cloneNode(true);
            
            // Remplir les informations de la carte
            card.querySelector('.vendor-name').textContent = vendor.store_name;
            card.querySelector('.vendor-status').textContent = getStatusText(vendor.status);
            card.querySelector('.vendor-status').classList.add(vendor.status);
            card.querySelector('.vendor-owner').textContent = vendor.users.first_name;
            card.querySelector('.vendor-phone').textContent = vendor.users.phone;
            card.querySelector('.vendor-location').textContent = `${vendor.users.city}, ${vendor.users.country}`;
            card.querySelector('.vendor-business-type').textContent = getBusinessTypeText(vendor.business_type);
            card.querySelector('.vendor-description').textContent = vendor.store_description;

            // Configurer les boutons
            const viewDetailsBtn = card.querySelector('.btn-view-details');
            const approveBtn = card.querySelector('.btn-approve');
            const rejectBtn = card.querySelector('.btn-reject');

            viewDetailsBtn.dataset.vendorId = vendor.id;
            approveBtn.dataset.vendorId = vendor.id;
            rejectBtn.dataset.vendorId = vendor.id;

            // Masquer les boutons d'approbation si le vendeur est déjà approuvé ou rejeté
            if (vendor.status !== 'pending') {
                card.querySelector('.approval-actions').style.display = 'none';
            }

            // Ajouter les écouteurs d'événements
            viewDetailsBtn.addEventListener('click', () => showVendorDetails(vendor));
            approveBtn.addEventListener('click', () => handleVendorApproval(vendor.id, 'approved'));
            rejectBtn.addEventListener('click', () => handleVendorApproval(vendor.id, 'rejected'));

            vendorsList.appendChild(card);
        });
    };

    // Afficher les détails d'un vendeur
    const showVendorDetails = (vendor) => {
        currentVendorId = vendor.id;

        // Remplir les informations du modal
        document.getElementById('modalStoreName').textContent = vendor.store_name;
        document.getElementById('modalBusinessType').textContent = getBusinessTypeText(vendor.business_type);
        document.getElementById('modalTaxId').textContent = vendor.tax_id;
        document.getElementById('modalBankAccount').textContent = vendor.bank_account;
        document.getElementById('modalOwnerName').textContent = vendor.users.first_name;
        document.getElementById('modalOwnerPhone').textContent = vendor.users.phone;
        document.getElementById('modalOwnerCity').textContent = vendor.users.city;
        document.getElementById('modalOwnerCountry').textContent = vendor.users.country;
        document.getElementById('modalStoreDescription').textContent = vendor.store_description;

        // Configurer les boutons d'action
        modalApproveBtn.dataset.vendorId = vendor.id;
        modalRejectBtn.dataset.vendorId = vendor.id;

        // Masquer les boutons d'approbation si le vendeur est déjà approuvé ou rejeté
        const approvalActions = document.querySelector('.modal-footer .approval-actions');
        approvalActions.style.display = vendor.status === 'pending' ? 'flex' : 'none';

        // Afficher le modal
        vendorDetailsModal.classList.add('show');
    };

    // Gérer l'approbation/rejet d'un vendeur
    const handleVendorApproval = async (vendorId, status) => {
        try {
            const response = await fetch(`https://ryonv-shop.netlify.app/.netlify/functions/admin/approve-vendor/${vendorId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la mise à jour du statut');
            }

            // Mettre à jour la liste des vendeurs
            await loadVendors();
            
            // Fermer le modal si ouvert
            vendorDetailsModal.classList.remove('show');
            
            // Afficher un message de confirmation
            alert(`Vendeur ${status === 'approved' ? 'approuvé' : 'rejeté'} avec succès`);
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la mise à jour du statut');
        }
    };

    // Filtrer les vendeurs
    const filterVendors = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const statusValue = statusFilter.value;

        const filteredVendors = vendors.filter(vendor => {
            const matchesSearch = 
                vendor.store_name.toLowerCase().includes(searchTerm) ||
                vendor.users.first_name.toLowerCase().includes(searchTerm) ||
                vendor.users.phone.includes(searchTerm) ||
                vendor.users.city.toLowerCase().includes(searchTerm) ||
                vendor.users.country.toLowerCase().includes(searchTerm);

            const matchesStatus = statusValue === 'all' || vendor.status === statusValue;

            return matchesSearch && matchesStatus;
        });

        renderVendors(filteredVendors);
    };

    // Utilitaires
    const getStatusText = (status) => {
        const statusMap = {
            'pending': 'En attente',
            'approved': 'Approuvé',
            'rejected': 'Rejeté'
        };
        return statusMap[status] || status;
    };

    const getBusinessTypeText = (type) => {
        const typeMap = {
            'individual': 'Particulier',
            'company': 'Société',
            'association': 'Association'
        };
        return typeMap[type] || type;
    };

    // Écouteurs d'événements
    searchInput.addEventListener('input', filterVendors);
    statusFilter.addEventListener('change', filterVendors);

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            vendorDetailsModal.classList.remove('show');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === vendorDetailsModal) {
            vendorDetailsModal.classList.remove('show');
        }
    });

    modalApproveBtn.addEventListener('click', () => handleVendorApproval(currentVendorId, 'approved'));
    modalRejectBtn.addEventListener('click', () => handleVendorApproval(currentVendorId, 'rejected'));

    // Charger les notifications et statistiques
    loadNotifications();
    loadStats();
    
    // Rafraîchir les notifications toutes les minutes
    setInterval(loadNotifications, 60000);

    // Initialisation
    checkAdminRole().then(() => {
        loadVendors();
    });
});

// État des notifications
let notifications = [];
let unreadCount = 0;

// Fonction pour charger les notifications
async function loadNotifications() {
    try {
        const response = await fetch('/admin/notifications', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (!response.ok) throw new Error('Erreur lors du chargement des notifications');
        
        notifications = await response.json();
        unreadCount = notifications.filter(n => !n.read).length;
        updateNotificationBadge();
        renderNotifications();
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les notifications');
    }
}

// Fonction pour mettre à jour le badge de notification
function updateNotificationBadge() {
    notificationBadge.textContent = unreadCount;
    notificationBadge.style.display = unreadCount > 0 ? 'block' : 'none';
}

// Fonction pour afficher les notifications
function renderNotifications() {
    notificationList.innerHTML = notifications.length ? '' : '<div class="notification-empty">Aucune notification</div>';
    
    notifications.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.className = `notification-item ${notification.read ? '' : 'unread'}`;
        
        const iconClass = getNotificationIconClass(notification.type);
        const timeAgo = getTimeAgo(notification.created_at);
        
        notificationElement.innerHTML = `
            <div class="notification-icon ${iconClass}">
                <i class="fas ${getNotificationIcon(notification.type)}"></i>
            </div>
            <div class="notification-content">
                <p class="notification-message">${notification.message}</p>
                <span class="notification-time">${timeAgo}</span>
            </div>
            <button class="notification-close" data-id="${notification.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        notificationList.appendChild(notificationElement);
    });
}

// Fonction pour marquer une notification comme lue
async function markNotificationAsRead(notificationId) {
    try {
        const response = await fetch(`/admin/notifications/${notificationId}/read`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (!response.ok) throw new Error('Erreur lors de la mise à jour de la notification');
        
        const notification = notifications.find(n => n.id === notificationId);
        if (notification && !notification.read) {
            notification.read = true;
            unreadCount--;
            updateNotificationBadge();
            renderNotifications();
        }
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de mettre à jour la notification');
    }
}

// Fonction pour marquer toutes les notifications comme lues
async function markAllNotificationsAsRead() {
    try {
        const response = await fetch('/admin/notifications/read-all', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (!response.ok) throw new Error('Erreur lors de la mise à jour des notifications');
        
        notifications.forEach(notification => notification.read = true);
        unreadCount = 0;
        updateNotificationBadge();
        renderNotifications();
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de mettre à jour les notifications');
    }
}

// Fonction pour charger les statistiques
async function loadStats() {
    try {
        const response = await fetch('/admin/stats', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        
        if (!response.ok) throw new Error('Erreur lors du chargement des statistiques');
        
        const stats = await response.json();
        renderStats(stats);
        renderCharts(stats);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les statistiques');
    }
}

// Fonction pour afficher les statistiques
function renderStats(stats) {
    const statsHTML = `
        <div class="stat-card">
            <div class="stat-icon">
                <i class="fas fa-store"></i>
            </div>
            <div class="stat-content">
                <h3>Total Vendeurs</h3>
                <div class="stat-number">${stats.total}</div>
                <p class="stat-change ${stats.totalChange >= 0 ? 'positive' : 'negative'}">
                    <i class="fas fa-${stats.totalChange >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                    ${Math.abs(stats.totalChange)}% ce mois
                </p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon pending">
                <i class="fas fa-clock"></i>
            </div>
            <div class="stat-content">
                <h3>En attente</h3>
                <div class="stat-number">${stats.pending}</div>
                <p class="stat-change ${stats.pendingChange >= 0 ? 'positive' : 'negative'}">
                    <i class="fas fa-${stats.pendingChange >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                    ${Math.abs(stats.pendingChange)}% ce mois
                </p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon approved">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="stat-content">
                <h3>Approuvés</h3>
                <div class="stat-number">${stats.approved}</div>
                <p class="stat-change ${stats.approvedChange >= 0 ? 'positive' : 'negative'}">
                    <i class="fas fa-${stats.approvedChange >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                    ${Math.abs(stats.approvedChange)}% ce mois
                </p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon rejected">
                <i class="fas fa-times-circle"></i>
            </div>
            <div class="stat-content">
                <h3>Rejetés</h3>
                <div class="stat-number">${stats.rejected}</div>
                <p class="stat-change ${stats.rejectedChange >= 0 ? 'positive' : 'negative'}">
                    <i class="fas fa-${stats.rejectedChange >= 0 ? 'arrow-up' : 'arrow-down'}"></i>
                    ${Math.abs(stats.rejectedChange)}% ce mois
                </p>
            </div>
        </div>
    `;
    
    statsGrid.innerHTML = statsHTML;
}

// Fonction pour afficher les graphiques
function renderCharts(stats) {
    // Graphique de distribution des vendeurs
    new Chart(vendorDistributionChart, {
        type: 'doughnut',
        data: {
            labels: ['En attente', 'Approuvés', 'Rejetés'],
            datasets: [{
                data: [stats.pending, stats.approved, stats.rejected],
                backgroundColor: [
                    '#ffc107',
                    '#28a745',
                    '#dc3545'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Graphique d'évolution mensuelle
    new Chart(vendorEvolutionChart, {
        type: 'line',
        data: {
            labels: stats.monthlyEvolution.labels,
            datasets: [{
                label: 'Nouveaux vendeurs',
                data: stats.monthlyEvolution.data,
                borderColor: '#6e8efb',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Fonctions utilitaires
function getNotificationIconClass(type) {
    switch (type) {
        case 'approval': return 'approval';
        case 'rejection': return 'rejection';
        default: return 'new';
    }
}

function getNotificationIcon(type) {
    switch (type) {
        case 'approval': return 'fa-check-circle';
        case 'rejection': return 'fa-times-circle';
        default: return 'fa-bell';
    }
}

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' an(s)';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' mois';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' jour(s)';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' heure(s)';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minute(s)';
    
    return Math.floor(seconds) + ' seconde(s)';
}

// Event Listeners pour les notifications
notificationBell.addEventListener('click', () => {
    notificationDropdown.classList.toggle('show');
});

markAllReadBtn.addEventListener('click', markAllNotificationsAsRead);

notificationList.addEventListener('click', (e) => {
    const closeButton = e.target.closest('.notification-close');
    if (closeButton) {
        const notificationId = closeButton.dataset.id;
        markNotificationAsRead(notificationId);
    }
});

document.addEventListener('click', (e) => {
    if (!notificationBell.contains(e.target) && !notificationDropdown.contains(e.target)) {
        notificationDropdown.classList.remove('show');
    }
}); 