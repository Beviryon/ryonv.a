const CACHE_NAME = 'ryonv-site-v1';
const ASSETS_TO_CACHE = [
    './',
    './details.html',
    './produits.html',
    './styles/theme.css',
    './details.css',
    './images/icon-192x192.png',
    './images/icon-512x512.png',
    '/index.html',
    '/home.html',
    '/cart.html',
    '/favoris.html',
    '/about.html',
    '/contact.html',
    '/services.html',
    '/faq.html',
    '/cart.css',
    '/favoris.css',
    '/produits.css',
    '/cart.js',
    '/favoris.js',
    '/produits.js',
    '/app-settings.js',
    '/images/logo.png',
    // Ajoutez d'autres ressources à mettre en cache
];

// Installation du service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache ouvert');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Suppression de l\'ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Stratégie de cache : Cache First, puis Network
self.addEventListener('fetch', (event) => {
    // Ignorer les requêtes non GET
    if (event.request.method !== 'GET') return;

    // Ignorer les requêtes vers des API externes
    if (event.request.url.includes('api.') || event.request.url.includes('analytics')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Retourner la réponse du cache si elle existe
                if (response) {
                    return response;
                }

                // Sinon, faire la requête réseau
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Vérifier si la réponse est valide
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Cloner la réponse car elle ne peut être utilisée qu'une fois
                        const responseToCache = networkResponse.clone();

                        // Mettre en cache la nouvelle réponse
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    })
                    .catch(() => {
                        // En cas d'erreur réseau, retourner une page d'erreur personnalisée
                        if (event.request.url.includes('.html')) {
                            return caches.match('/offline.html');
                        }
                        // Pour les autres ressources, retourner une réponse d'erreur
                        return new Response('Erreur de connexion', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/plain'
                            })
                        });
                    });
            })
    );
});

// Gestion des notifications push
self.addEventListener('push', (event) => {
    const options = {
        body: event.data.text(),
        icon: '/images/logo.png',
        badge: '/images/badge.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Voir les détails',
                icon: '/images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Fermer',
                icon: '/images/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('ryonv.com', options)
    );
});

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Gestion de la synchronisation en arrière-plan
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-cart') {
        event.waitUntil(syncCart());
    }
});

// Fonction de synchronisation du panier
async function syncCart() {
    try {
        const cart = await getCartFromIndexedDB();
        // Ici, vous pouvez implémenter la logique de synchronisation
        // avec un serveur si nécessaire
        console.log('Synchronisation du panier effectuée');
    } catch (error) {
        console.error('Erreur de synchronisation du panier:', error);
    }
}

// Fonction pour récupérer le panier depuis IndexedDB
async function getCartFromIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('ryonvDB', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(['cart'], 'readonly');
            const store = transaction.objectStore('cart');
            const getRequest = store.get('currentCart');
            
            getRequest.onsuccess = () => resolve(getRequest.result);
            getRequest.onerror = () => reject(getRequest.error);
        };
    });
}
