const CACHE_NAME = 'cassiano-portfolio-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/src/main.jsx',
    '/src/App.jsx',
    '/favicon.svg',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
