<script lang="ts">
    import Button, { Label } from '@smui/button';
    import { getAuth, signInWithPopup, GoogleAuthProvider, UserCredential } from "firebase/auth";

    export let userCredential: UserCredential = undefined;

    async function authenticate() {
      try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider);
        userCredential = result;
      }
      catch (error) {
        console.log(error);
      }
    }
</script>

<Button  on:click={authenticate}>
  <Label> Login </Label>
</Button>