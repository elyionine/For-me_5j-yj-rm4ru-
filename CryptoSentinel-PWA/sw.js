const CACHE = 'sentinel-v1';
const ASSETS = ['./index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if(e.request.url.includes('api.binance.com') ||
     e.request.url.includes('api.blockchair.com') ||
     e.request.url.includes('api.etherscan.io') ||
     e.request.url.includes('newsapi.org') ||
     e.request.url.includes('stream.binance.com')) {
    return; // Always network for live data
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
