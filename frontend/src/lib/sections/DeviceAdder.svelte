<script lang="ts">
  import Dialog, { Title, Content, Actions } from "@smui/dialog"
  import Button, { Label } from "@smui/button"
  import { Device, DeviceType } from "../../FirebaseTypes"
  import Textfield from "@smui/textfield"
  import Select, { Option } from "@smui/select"
  import HelperText from "@smui/textfield/helper-text"
  import slug from "slug"
  import type { User } from "firebase/auth"

  export let open: boolean
  export let addDevice: (dev: Device) => Promise<boolean>
  export let user: User

  const defaultDevice: Device = {
    name: "",
    type: DeviceType.Accelerometer,
    description: "",
    id: "",
  }

  let isInvalid = false
  let step = 1
  let deviceToAdd: Device = { ...defaultDevice }

  async function next() {
    if (step === 1) {
      deviceToAdd.id = slug(deviceToAdd.name)
      if (deviceToAdd.name !== "" && (await addDevice(deviceToAdd))) {
        step = 2
      } else {
        isInvalid = true
      }
    } else if (step === 2) {
      open = false
      step = 1
      deviceToAdd = { ...defaultDevice }
    }
  }
</script>

<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  surface$style="width: 850px; max-width: calc(100vw - 32px); height: 350px;"
>
  <Title id="large-scroll-title">Add a new device</Title>
  <Content id="large-scroll-content">
    {#if step === 1}
      <Textfield
        type="text"
        label="Device name"
        style="min-width: 250px;"
        invalid={isInvalid}
        bind:value={deviceToAdd.name}
      >
        <HelperText validationMsg slot="helper">
          You must specify a unique name for the device
        </HelperText>
      </Textfield>
      <Select bind:value={deviceToAdd.type} label="Device type">
        {#each Object.values(DeviceType) as deviceType}
          <Option value={deviceType}>{deviceType}</Option>
        {/each}
      </Select>
      <br />
      <Textfield
        type="text"
        label="Device description (optional)"
        style="min-width: 250px;"
        bind:value={deviceToAdd.description}
      />
    {:else if step === 2}
      Paste this id on your device:
      <h1 style="margin-top: 20px;">
        <strong> {user.uid}-{deviceToAdd.id} </strong>
      </h1>
    {/if}
  </Content>
  <Actions>
    <Button>
      <Label>Cancel</Label>
    </Button>
    <Button action="" on:click={next}>
      <Label>
        {#if step === 1} Next {:else if step === 2} Done {/if}
      </Label>
    </Button>
  </Actions>
</Dialog>
