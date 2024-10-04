self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('to-do-list-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style/style.css',
          '/images/space4.jpg',
          '/images/icons/icon-192x192.png',
          '/images/icons/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  