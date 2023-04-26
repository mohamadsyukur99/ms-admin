<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let label: string = "label";
  export let name: string = "";

  let data: any = { value: "", name: name };
  let avatar: any;
  let file: boolean = false;

  const dispatch = createEventDispatcher();

  const inputHandler = (e: any) => {
    file = false;
    const size = e.target.files[0].size / (1024 * 1024);
    if (size >= 5) {
      file = true;
    } else {
      const val = e.target.files[0];
      const name = e.target.name;
      let reader = new FileReader();
      reader.readAsDataURL(val);
      reader.onload = (e) => {
        avatar = e.target.result;
      };
      data["name"] = name;
      data["value"] = val;

      dispatch("change", {
        data,
      });
    }
  };
</script>

<label for="name">{label}</label>
<div
  class="{file == true
    ? 'border-red-500'
    : 'border-gray-300'} mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"
>
  <div class="space-y-1 text-center">
    {#if avatar}
      <img class="h-20 w-20 mx-auto" src={avatar} alt="d" />
    {:else}
      <span class="mx-auto h-20 w-20 text-5xl text-gray-400">
        <i class="fa fa-image" />
      </span>
    {/if}
    <div class="flex text-sm text-gray-600">
      <label
        for="file-upload"
        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <span>Upload a file</span>
        <input
          on:change={inputHandler}
          id="file-upload"
          {name}
          type="file"
          class="sr-only"
        />
      </label>
      <p class="pl-1">or drag and drop</p>
    </div>
    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
  </div>
</div>
{#if file == true}
  <p class="text-red-700 text-sm">File terbaru besar</p>
{/if}

<style lang="postcss">
  label {
    @apply block text-sm font-medium text-gray-700 capitalize;
  }
</style>
