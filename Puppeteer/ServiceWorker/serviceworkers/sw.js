self.addEventListener('fetch', (event) => {
    console.log('doing fetching in service worker');
    event.respondWith(fetch(event.request));
  });
  
  self.addEventListener('activate', (event) => {
    console.log('activating service worker');
    event.waitUntil(clients.claim());
  });
