<script lang="ts" context="module">
  import Start from "./Start.svelte"
  import DevicesMenager from "./DevicesMenager.svelte"
  import Logs from "./Logs.svelte"

  export const SECTIONS = {
    Start: {
      component: Start,
      icon: "home",
    },
    "Devices Menager": {
      component: DevicesMenager,
      icon: "devices",
    },
    Logs: {
      component: Logs,
      icon: "book",
    },
  }

  export type SectionName = keyof typeof SECTIONS
</script>
