<script lang="ts">
  export let items: any[] = [];
  export let label: string = "label";
  export let name: string = "";
  export let value: string = "";
</script>

<fieldset>
  <div>
    <label for={name} class="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
  </div>
  <div class="flex">
    {#each items as item}
      <div class="flex items-center">
        <input
          {name}
          id={item["id"]}
          value={item["value"]}
          type="radio"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          checked={value === item["value"]}
          on:input
        />
        <label
          for={item["id"]}
          class="ml-2 block text-sm font-medium text-gray-700 mr-3"
        >
          {item["label"]}
        </label>
      </div>
    {/each}
  </div>
</fieldset>

<style lang="postcss">
  label {
    @apply block text-sm font-medium text-gray-700 capitalize;
  }
</style>
