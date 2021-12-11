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
      <Section align="end" toolbar>
        <IconButton class="material-icons" aria-label="Download">
          file_download
        </IconButton>
        <IconButton class="material-icons" aria-label="Print this page">
          print
        </IconButton>
        <IconButton class="material-icons" aria-label="Bookmark this page">
          bookmark
        </IconButton>
      </Section>
    </Row>
  </TopAppBar>