// Cambiamos el nombre del caché para forzar la actualización de todos los archivos
const CACHE_NAME = 'hogueras-pwa-cache-v2'; // Versión actualizada a v2
const urlsToCache = [
    './',
    'index.html',
    'styles.css',
    'app.js',
    'manifest.json',
    'icon.png',
    'images/baver.png',
    'images/goteta.png',
    'images/carolinas_altas.png',
    'images/foguerer.png',
    'images/bergez.png',
    'images/guillermo.png',
    'images/sagrada.png',
    'images/baixes.png',
    'images/seneca.png',
    'images/hernan.png',
    'images/sento.png',
    'images/luceros.png',
    'images/luceros_welcome.png',
    'images/Central.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});