// Sift offline support: keeps the app itself available without a connection.
// Your PDFs, highlights and boards are stored separately in IndexedDB and are never touched here.
const CACHE = 'sift-v2';
const CORE = [
  './',
  'index.html',
  'lib/pdf.min.js',
  'lib/pdf.worker.min.js',
  'favicon.svg',
  'favicon.ico',
  'site.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const fonts = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !fonts) return;

  // The page itself: try the network first so updates show up right away, fall back to the cache offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      // ask the server every time (not the browser's HTTP cache), so a new version shows up on the next open
      fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' })
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); } return res; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  // Everything else: answer from the cache at once and refresh it in the background.
  event.respondWith(
    caches.open(CACHE).then(async cache => {
      const hit = await cache.match(req);
      const net = fetch(req)
        .then(res => { if (res.ok || res.type === 'opaque') cache.put(req, res.clone()); return res; })
        .catch(() => hit);
      return hit || net;
    })
  );
});
