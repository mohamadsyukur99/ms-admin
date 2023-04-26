<script lang="ts">
  export let name: string = "Menu saja";
  export let icon: string = "home-4-line";
  export let link: string = "#0";
  export let isAktif: boolean = false;
</script>

<a
  href={link}
  class="{isAktif === true
    ? 'bg-gray-100 text-gray-900'
    : 'text-gray-600'} hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-1 text-sm font-medium rounded-md"
>
  <span class="text-2xl pr-3"><i class="ri-{icon}" /></span>
  <span class="flex-1 capitalize"> {name} </span>
</a>

<style lang="postcss">
</style>
