<script type="ts">
    import Drawer, { Content, Header, Subtitle, Title } from '@smui/drawer';
    import List, { Item, Text, Graphic } from '@smui/list';
    import { SectionName, SECTIONS } from './sections/Sections.svelte';
  
    export let open = false
    export let openedSection: SectionName
</script>

<Drawer variant="modal" fixed={false} bind:open>
    <Header>
        <Title>Ragequit detector</Title>
        <Subtitle>An app for detecting ragequits.</Subtitle>
    </Header>
    <Content>
        <List>
            {#each Object.keys(SECTIONS) as sectionName(sectionName)}
              <Item on:click={() => { openedSection = sectionName; open = false }}>
                <Graphic class="material-icons" aria-hidden="true">{SECTIONS[sectionName].icon}</Graphic>
                <Text>{sectionName}</Text>
              </Item>
            {/each}
        </List>
    </Content>
</Drawer>