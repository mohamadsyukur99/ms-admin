<script lang="ts">
  export let type: TGroup = "2";
</script>

{#if type === "1"}
  <div class="col-span-6">
    <slot />
  </div>
{:else if type === "2"}
  <div class="col-span-6 sm:col-span-3">
    <slot />
  </div>
{:else}
  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
    <slot />
  </div>
{/if}
