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
        './products.js',
        './manifest.json',
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
