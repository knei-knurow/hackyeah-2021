<script type="ts">
  import "svelte-material-ui/bare.css"
  import { AppContent, Scrim } from "@smui/drawer"
  import Drawer from "../lib/Drawer.svelte"
  import TopBar from "../lib/TopBar.svelte"
  import Auth from "../lib/Auth.svelte"
  import { initializeApp } from "firebase/app"
  import { onAuthStateChanged, signOut } from "firebase/auth"
  import { User, GoogleAuthProvider, getAuth } from "firebase/auth"
  import type { SectionName } from "src/lib/sections/Sections.svelte"
  import { SECTIONS } from "../lib/sections/Sections.svelte"
  import { getFirestore } from "firebase/firestore"
  import { getMessaging, getToken, onMessage } from "firebase/messaging"
  import { doc, setDoc } from "firebase/firestore"

  const firebaseConfig = {
    apiKey: "AIzaSyA7dfh7bUrK5BWKbTSfQpuOyHF62nW62JI",
    authDomain: "hackyeah-2021.firebaseapp.com",
    projectId: "hackyeah-2021",
    storageBucket: "hackyeah-2021.appspot.com",
    messagingSenderId: "1082992813378",
    appId: "1:1082992813378:web:527cd7986a3212f4c394db",
  }

  initializeApp(firebaseConfig)

  let user: User = undefined
  let isDrawerOpened = false
  let openedSection: SectionName = "Start"
  const provider = new GoogleAuthProvider()
  const auth = getAuth()
  const db = getFirestore()
  const messaging = getMessaging()

  onAuthStateChanged(auth, (newUser) => {
    user = newUser ? newUser : undefined
    if (user !== undefined) {
      const swRegistration = async () => {
        try {
          await navigator.serviceWorker.register("./firebase-messaging-sw.js")
        } catch (error) {
          console.error(error)
        }
      }
      ;(async () => {
        const token = await getToken(messaging, {
          serviceWorkerRegistration: swRegistration,
          vapidKey:
            "BK-R4Cg4Z60s08wLw__xIRVpgtdZNpMD8yJeI9WZMtS9VbxjT1dmL07U6AU8Lp2lVtJsxhseq2lP6leE60pHGDU",
        })
        if (token) {
          console.log(token)
          await setDoc(doc(db, "users", newUser.uid, "fcmTokens", token), {
            token,
          })
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          )
        }
      })()
    }
  })

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload)
  })
</script>

{#if user !== undefined}
  <Drawer bind:open={isDrawerOpened} bind:openedSection />

  <Scrim fixed />
  <AppContent>
    <TopBar
      openDrawer={() => (isDrawerOpened = true)}
      signOut={() => signOut(auth)}
      {openedSection}
    />
  </AppContent>

  <svelte:component
    this={SECTIONS[openedSection].component}
    bind:openedSection
    {db}
    {user}
  />
{:else}
  <Auth {provider} {auth} />
{/if}
