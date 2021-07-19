var CACHE_NAME = "my-pwa-cache-v4";
var CAHCHE_DYNAMIC_NAME = "dynamic-v4";

var urlsToCache = [
  "/",
  "/dashboard",
  "/icons/android-chrome-192x192.png",
  "/icons/android-chrome-512x512.png",
  "/icons/android-maskable-192x192.png",
  "/icons/android-maskable-512x512.png",
  "/icons/mstile-270x270.png",
  "/favicon.ico",
  "/main.css",
  "/index.html",
  "/static/media/team-1-800x800.fa5a7ac2.jpg",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v92/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/NewTask",
];

this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Open a cache and cache our files
      console.log("caching shell assets !!");
      return cache.addAll(urlsToCache);
    })
  );
});

this.addEventListener("activate", (evt) => {
  // console.log("service worker is activated");
  evt.waitUntil(
    caches.keys().then((keys) => {
      //-->all caches inside array of cache storage
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== CAHCHE_DYNAMIC_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});

this.addEventListener("fetch", (evnt) => {
  // console.log(evnt);
  if (evnt.request.url.indexOf("firestore.googleapis.com") === -1) {
    evnt.respondWith(
      caches.match(evnt.request).then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evnt.request).then((fetchRes) => {
            return caches.open(CAHCHE_DYNAMIC_NAME).then((cache) => {
              cache.put(evnt.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
    );
  }
});
