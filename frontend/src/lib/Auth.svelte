<script lang="ts">
  import Button, { Label } from "@smui/button"
  import { signInWithPopup, AuthProvider, Auth } from "firebase/auth"

  export let auth: Auth = undefined
  export let provider: AuthProvider = undefined

  async function authenticate() {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }
</script>

<Button on:click={authenticate} class="auth-btn">
  <h1>Login</h1>
</Button>

<style>
  /* Center vertically and horizontally */
  :global(.auth-btn) {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
</style>
