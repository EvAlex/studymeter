this.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js'
            ]);
        })
    );
});

this.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .catch(() => fetch(event.request))
        .then(r => {
            let response = r;
            caches.open('v1').then(cache => cache.put(event.request, response));
            return response.clone();
        })
        .catch(() => caches.match('/gallery/myLittleVader.jpg'))
    );
});
