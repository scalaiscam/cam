//https://codelabs.developers.google.com/codelabs/offline/#6 
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('cache-man').then(function(cache) {
        return cache.addAll([
          '/',
        //   '/images/icons-192.png',
<<<<<<< HEAD
          '/images/icon-512.png',
          '/index.html',
          '/css/bootstrap.min.css',
          '/css/style.css',
=======
          '/img/Home.png',
          '/index.html',
          '/css/bootstrap.min.css',
          '/scss/style.css',
>>>>>>> aa25f70a044b66d42178048696f94c60a7fc11cb
          '/js/jquery-3.5.1.min.js',
          '/js/scripts.js',
        ]);
      })
    );
   });
  
  //https://codelabs.developers.google.com/codelabs/offline/#7
  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
    caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
        })
        );
<<<<<<< HEAD
        });
  
=======
        });
>>>>>>> aa25f70a044b66d42178048696f94c60a7fc11cb
