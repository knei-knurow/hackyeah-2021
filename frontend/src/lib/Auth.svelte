<script lang="ts">
    import Button, { Label } from '@smui/button';
    import { signInWithPopup, AuthProvider, Auth } from "firebase/auth";

    export let auth: Auth = undefined;
    export let provider: AuthProvider = undefined;

    async function authenticate() {
        try {
            await signInWithPopup(auth, provider);
        }
        catch (error) {
            console.log(error);
        }
    }
</script>

<Button on:click={authenticate}>
    <Label> Login </Label>
</Button>