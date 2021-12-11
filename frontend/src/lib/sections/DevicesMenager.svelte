<script lang="ts">
  import Paper, { Title, Subtitle, Content } from "@smui/paper"
  import type { Device } from "../../FirebaseTypes"
  import Fab, { Icon } from "@smui/fab"
  import DeviceAdder from "./DeviceAdder.svelte"
  import IconButton from "@smui/icon-button"
  import {
    doc,
    setDoc,
    collection,
    getDocs,
    deleteDoc,
  } from "firebase/firestore"
  import type { Firestore } from "firebase/firestore"
  import type { User } from "firebase/auth"

  export let db: Firestore
  export let user: User

  let isDeviceAdderOpened = false
  let devices: Device[] = []

  async function getDevices() {
    const snapshot = await getDocs(collection(db, "users", user.uid, "devices"))
    devices = snapshot.docs.map((doc) => doc.data() as Device)
  }

  async function addDevice(device: Device) {
    try {
      if (devices.some((d) => d.id === device.id)) {
        return false
      }

      await setDoc(doc(db, "users", user.uid, "devices", device.id), device)

      devices = [...devices, device]
      return true
    } catch (e) {
      console.log(e)
    }
  }

  function deleteDevice(id: string) {
    return async () => {
      await deleteDoc(doc(db, "users", user.uid, "devices", id))
      devices = devices.filter((d) => d.id !== id)
    }
  }
</script>

{#await getDevices()}
  Ładowanie
{:then d}
  <div style="margin: auto; width: calc(100vw - 100px);">
    {#each devices as { name, description, type, id } (id)}
      <Paper style="margin: 20px;">
        <IconButton
          class="material-icons delete-device-button"
          on:click={deleteDevice(id)}>delete</IconButton
        >
        <Title>{name}</Title>
        <Subtitle>Device type: {type}</Subtitle>
        <Content>{description}</Content>
      </Paper>
    {/each}
  </div>

  <Fab class="add-device-button" on:click={() => (isDeviceAdderOpened = true)}>
    <Icon class="material-icons">add</Icon>
  </Fab>

  <DeviceAdder bind:open={isDeviceAdderOpened} {addDevice} />
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
