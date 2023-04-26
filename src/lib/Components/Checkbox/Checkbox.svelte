<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let items: any[] = [];
  export let label: string = "label";
  export let name: string = "";
  export let value: any[] = [];
  let data: any = { value: [], name: name };

  const dispatch = createEventDispatcher();

  const isChecked = (item: any) => {
    const checked = value.filter((val) => val === item.value).length > 0;
    return checked;
  };

  const selectHandler = (e: any) => {
    const val = e.target.value;
    if (e.target.checked) {
      data["value"] = [...data["value"], val];
    } else {
      data["value"] = [...data["value"].filter((v: any) => v !== val)];
    }
    dispatch("change", {
      data,
    });
  };
</script>

<fieldset>
  <label for={name}>
    {label}
  </label>
  <div class="flex">
    {#each items as item, i (item.label)}
      <div class="flex items-start mr-5">
        <div class="flex items-center h-5">
          <input
            {name}
            id={item["id"]}
            type="checkbox"
            value={item["value"]}
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            checked={isChecked(item)}
            on:change={selectHandler}
          />
        </div>
        <div class="ml-1 text-sm">
          <label for={item["id"]} class="font-medium text-gray-700"
            >{item["label"]}</label
          >
        </div>
      </div>
    {/each}
  </div>
</fieldset>

<style lang="postcss">
  label {
    @apply block text-sm font-medium text-gray-700 mb-2 capitalize;
  }
</style>
