<script lang="ts">
  import DropdownMenu from "./DropdownMenu.svelte";
  import SidebarMenuItem from "./SidebarMenuItem.svelte";
  import { menu } from "./../../Store/Store";
</script>

<div
  class="mt-[3.6rem] flex1 lg:w-64 w-13 h-full bg-base-200 fixed overflow-auto"
>
  <div class="flex-1 flex flex-col min-h-full border-gray-200 bg-white">
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <nav class="-mt-2 flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
        {#each menu as m}
          {#if m["child"].length > 0}
            <DropdownMenu
              name={m["name"]}
              submenu={m["child"]}
              icon={m["icon"]}
            />
          {:else}
            <SidebarMenuItem
              name={m["name"]}
              link={m["link"]}
              icon={m["icon"]}
            />
          {/if}
        {/each}
      </nav>
    </div>
  </div>
</div>
