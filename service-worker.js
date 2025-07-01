<!--
const CACHE_NAME = 'arkade-game-ai-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap',
    'https://assets.mixkit.co/videos/preview/mixkit-futuristic-wireframe-mesh-of-a-human-head-4436-large.mp4',
    'https://image.pngaaa.com/533/2119533-middle.png',
    'https://www.svgrepo.com/show/27533/ping-pong.svg',
    'https://www.svgrepo.com/show/432012/tic-tac-toe.svg',
    'https://www.svgrepo.com/show/494050/chess.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache dibuka');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.url.includes('generativelanguage.googleapis.com')) {
        event.respondWith(fetch(event.request));
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
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
-->