<script type="ts">
  import "svelte-material-ui/bare.css"
  import { AppContent, Scrim } from '@smui/drawer';
  import Drawer from '../lib/Drawer.svelte';
  import TopBar from '../lib/TopBar.svelte';

  let isDrawerOpened = false
</script>

<Drawer bind:open={isDrawerOpened} />

<Scrim fixed />
<AppContent>
  <TopBar openDrawer={() => isDrawerOpened = true} />
</AppContent>
