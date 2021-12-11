import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { registerRoute, NavigationRoute } from 'workbox-routing'

declare let self: ServiceWorkerGlobalScope

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

// clean old assets
cleanupOutdatedCaches()

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')))

self.skipWaiting()
clientsClaim()

// self.addEventListener('push', (event) => {
//     // 2. Sprawdź wiadomośc z serwera i sparsuj do tekstu
//     console.log('Otrzymałem nowe dane z serwera:', event.data.text())
//     // 3. Stwórz tytuł i treśc notyfikacji. Uzyj danych z serwera
//     const message = {
//         data: event.data.text()
//     }
//     const title = 'Niesamowita sprawa!';
  
//     // 4. Stwórz notyfikację
//     const promiseChain = self.registration.showNotification(title, message);
//     // 5. Wywołaj notyfikację
//     event.waitUntil(promiseChain);
// })