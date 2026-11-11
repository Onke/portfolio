// Kill switch for the service worker the old Create React App site registered.
// Browsers that visited the old site keep serving its cached pages until this
// file replaces the old worker. It clears every cache, unregisters itself and
// reloads open tabs so they get the current site. Safe to delete after 2027.
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      clients.forEach((client) => client.navigate(client.url))
    })(),
  )
})
