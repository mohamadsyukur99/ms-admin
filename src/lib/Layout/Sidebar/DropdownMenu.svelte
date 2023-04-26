<script lang="ts">
  export let name: string = "menu";
  export let submenu: any[] = [
    { name: "submenu1", link: "#0" },
    { name: "submenu2", link: "#0" },
  ];
  export let icon = "list-unordered";
  let isShow: boolean = false;
</script>

<div class="space-y-1">
  <!-- Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
  <button
    type="button"
    class="group hover:bg-gray-50 hover:text-gray-900"
    aria-controls="sub-menu-1"
    aria-expanded="false"
    on:click={() => (isShow = !isShow)}
  >
    <span class="icon-menu group-hover:text-gray-500"
      ><i class="ri-{icon}" /></span
    >
    <span class="flex-1">{name}</span>
    <span class="arrow  {isShow ? 'rotate-90' : ''}  group-hover:text-gray-400 "
      ><i class="ri-arrow-right-s-fill" /></span
    >
  </button>
  <div class="space-y-1  {!isShow ? 'hidden' : ''}" id="sub-menu-1">
    {#each submenu as sm}
      <a
        href={sm["link"]}
        class="submenu group hover:bg-gray-50 hover:text-gray-900"
        >{sm["name"]}</a
      >
    {/each}
  </div>
</div>

<style lang="postcss">
  button {
    @apply bg-white text-gray-600   w-full flex items-center pl-2 pr-1 py-1 text-left text-sm font-medium rounded-md;
  }

  .arrow {
    @apply text-gray-300 ml-3 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out text-2xl;
  }

  .icon-menu {
    @apply mr-3 w-6 flex-shrink-0 text-gray-400 text-2xl;
  }

  .submenu {
    @apply flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600;
  }
</style>
