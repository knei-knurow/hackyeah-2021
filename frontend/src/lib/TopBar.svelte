<script type="ts">
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import type { SectionName } from './sections/Sections.svelte';
  
    export let openDrawer: () => void 
    export let openedSection: SectionName
</script>

<TopAppBar variant="static">
    <Row>
        <Section>
            <IconButton class="material-icons" on:click={openDrawer}>menu</IconButton>
            <Title> {openedSection} </Title>
        </Section>
    </Row>
</TopAppBar>