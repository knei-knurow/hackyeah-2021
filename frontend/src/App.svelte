<script lang="ts">
  // import { Router } from '@roxi/routify'
  // import { routes } from '../.routify/routes'
  import ReloadPrompt from "./lib/ReloadPrompt.svelte"
  import Index from "./pages/index.svelte"

  // navigator.serviceWorker.ready.then((registration) => {
  //   registration.getNotifications().then((notification) => {
  //     console.log(notification)
  //   })
  // })

  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker
  //     .register("../firebase-messaging-sw.js")
  //     .then(function (registration) {
  //       console.log("Registration successful, scope is:", registration.scope)
  //     })
  //     .catch(function (err) {
  //       console.log("Service worker registration failed, error:", err)
  //     })
  // }
</script>

<!-- <Router {routes} /> -->
<Index />

<ReloadPrompt />
