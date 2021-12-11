<script type="ts">
    import "svelte-material-ui/bare.css"
    import { AppContent, Scrim } from '@smui/drawer';
    import Drawer from '../lib/Drawer.svelte';
    import TopBar from '../lib/TopBar.svelte';
    import Auth from "../lib/Auth.svelte";
    import { initializeApp } from 'firebase/app';
    import { onAuthStateChanged, signOut } from 'firebase/auth';
    import { User, GoogleAuthProvider, getAuth } from "firebase/auth";  
    import type { SectionName } from "src/lib/sections/Sections.svelte";
    import { SECTIONS } from "../lib/sections/Sections.svelte";
    import { getFirestore } from "firebase/firestore"

    const firebaseConfig = {
        apiKey: "AIzaSyA7dfh7bUrK5BWKbTSfQpuOyHF62nW62JI",
        authDomain: "hackyeah-2021.firebaseapp.com",
        projectId: "hackyeah-2021",
        storageBucket: "hackyeah-2021.appspot.com",
        messagingSenderId: "1082992813378",
        appId: "1:1082992813378:web:527cd7986a3212f4c394db"
    };    

    initializeApp(firebaseConfig);

    let user: User = undefined;
    let isDrawerOpened = false
    let openedSection: SectionName = "Start"
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const db = getFirestore();

    onAuthStateChanged(auth, newUser => newUser ? user = newUser : user = undefined);
</script>

{#if user !== undefined}
    <Drawer bind:open={isDrawerOpened} bind:openedSection />

    <Scrim fixed />
    <AppContent>
      <TopBar openDrawer={() => isDrawerOpened = true} signOut={() => signOut(auth)} {openedSection} />
    </AppContent>

    <svelte:component this={SECTIONS[openedSection].component} bind:openedSection {db} {user}/>
{:else}
    <Auth {provider} {auth} />
{/if}



