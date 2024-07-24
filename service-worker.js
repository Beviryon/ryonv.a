self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  // Add a call to skipWaiting here if you want to activate the SW immediately
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
});
