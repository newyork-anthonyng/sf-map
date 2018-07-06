const CACHE_NAME = "sf-rooms-v2";
const filesToCache = ["/", "/index.html", "/map.js"];

self.addEventListener("install", e => {
  console.log("%c[SW] installed", "color: green");
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("%c[SW] Caching app files", "color: green");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", e => {
  console.log("%c[SW] activated", "color: green;");

  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          // Clear out old versions of cache
          // Don't touch other caches that don't belong to us.
          if (key.indexOf("sf-rooms") !== -1 && key !== CACHE_NAME) {
            console.log("%c[SW] removing old cache " + key, "color: green;");
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
