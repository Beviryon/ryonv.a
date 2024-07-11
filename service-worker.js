self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/',
          './home.html',
          './produits.html',
          './services.html',
          './about.html',
          './contact.html',
          './formations.html',
          './produits.js',
          './manifest.json',
          './about.css',
          './contact.css',
          './services.css',
          './produits.css',
          './formations.css',
          './home.css'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  