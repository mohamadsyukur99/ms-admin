<script lang="ts">
  import { isMenu } from "./../../Store/Navbar";

  import SIdebarDekstop from "./SIdebarDekstop.svelte";
  import SIdebarMobile from "./SIdebarMobile.svelte";
</script>

<div class="hidden lg:block">
  {#if $isMenu}
    <SIdebarDekstop />
  {/if}
</div>
<div class="lg:hidden">
  <SIdebarMobile />
</div>
