<script lang="ts">
    import Button, { Label } from '@smui/button';
    import { SECTIONS } from './Sections.svelte';
    
    export let openedSection: string    
</script>

{#each Object.keys(SECTIONS).filter(n => n !== "Start") as sectionName}
    <Button on:click={() => openedSection = sectionName}>
        <Label>{sectionName}</Label>
    </Button>
{/each}