<script lang="ts">
  import Button from "@smui/button"
  import { SECTIONS } from "./Sections.svelte"

  export let openedSection: string
</script>

<div class="wrapper">
  {#each Object.keys(SECTIONS).filter((n) => n !== "Start") as sectionName}
    <Button on:click={() => (openedSection = sectionName)} class="section-btn">
      <h1>{sectionName}</h1>
    </Button>
  {/each}
</div>

<style>
  .wrapper {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }

  :global(.section-btn) {
    margin: 10px;
  }
</style>
