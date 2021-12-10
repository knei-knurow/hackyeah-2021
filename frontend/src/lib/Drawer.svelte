<script type="ts">
    import Drawer, { Content, Header, Subtitle, Title } from '@smui/drawer';
    import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
    import { H6 } from '@smui/common/elements';
  
    export let open = false
</script>

<Drawer variant="modal" fixed={false} bind:open>
    <Header>
      <Title>Super Mail</Title>
      <Subtitle>It's the best fake mail app drawer.</Subtitle>
    </Header>
    <Content>
      <List>
        <Item>
          <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
          <Text>Inbox</Text>
        </Item>
        <Item>
          <Graphic class="material-icons" aria-hidden="true">star</Graphic>
          <Text>Star</Text>
        </Item>
        <Item>
          <Graphic class="material-icons" aria-hidden="true">send</Graphic>
          <Text>Sent Mail</Text>
        </Item>
        <Item>
          <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
          <Text>Drafts</Text>
        </Item>
  
        <Separator />
        <Subheader component={H6}>Labels</Subheader>
        <Item>
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Family</Text>
        </Item>
        <Item>
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Friends</Text>
        </Item>
        <Item>
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Work</Text>
        </Item>
      </List>
    </Content>
  </Drawer>