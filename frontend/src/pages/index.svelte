<script type="ts">
  import "svelte-material-ui/bare.css"
  import { AppContent, Scrim } from '@smui/drawer';
  import Drawer from '../lib/Drawer.svelte';
  import TopBar from '../lib/TopBar.svelte';
  import Auth from "../lib/Auth.svelte";
  import { initializeApp } from 'firebase/app';
  import type { UserCredential } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyA7dfh7bUrK5BWKbTSfQpuOyHF62nW62JI",
    authDomain: "hackyeah-2021.firebaseapp.com",
    projectId: "hackyeah-2021",
    storageBucket: "hackyeah-2021.appspot.com",
    messagingSenderId: "1082992813378",
    appId: "1:1082992813378:web:527cd7986a3212f4c394db"
  };

  initializeApp(firebaseConfig);

  let userCredential: UserCredential = undefined;
  let isDrawerOpened = false
</script>

{#if userCredential !== undefined}
  <Drawer bind:open={isDrawerOpened} />

  <Scrim fixed />
  <AppContent>
    <TopBar openDrawer={() => isDrawerOpened = true} />
  </AppContent>  
{:else}
  <Auth bind:userCredential />
{/if}



