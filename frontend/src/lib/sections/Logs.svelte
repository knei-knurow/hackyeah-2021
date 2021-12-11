<script lang="ts">
  import Paper, { Title, Content } from "@smui/paper"
  import type { Log } from "../../FirebaseTypes"
  import { collection, getDocs } from "firebase/firestore"
  import type { Firestore } from "firebase/firestore"
  import type { User } from "firebase/auth"

  export let db: Firestore
  export let user: User

  async function getDevices() {
    const snapshot = await getDocs(collection(db, "users", user.uid, "logs"))
    console.log(snapshot.docs.map((doc) => doc.data() as Log))
    return snapshot.docs.map((doc) => doc.data() as Log)
  }

  function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000)
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    if (hours.length < 2) {
      hours = "0" + hours
    }
    if (minutes.length < 2) {
      minutes = "0" + minutes
    }

    return `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()} ${hours}:${minutes}`
  }
</script>

{#await getDevices()}
  Ładowanie
{:then logs}
  <div style="margin: auto; width: calc(100vw - 100px);">
    {#each logs as { deviceId, timestamp }}
      <Paper style="margin: 20px;">
        <Title>{formatDate(timestamp.seconds)}</Title>
        <Content>{deviceId}</Content>
      </Paper>
    {/each}
  </div>
{/await}

<style>
  :global(.add-device-button) {
    position: fixed;
    bottom: 16px;
    right: 16px;
  }

  :global(.delete-device-button) {
    position: absolute;
    transform: translate(calc(100vw - 210px), -20px);
  }
</style>
