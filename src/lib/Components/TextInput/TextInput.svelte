<script lang="ts">
  export let label: string = "Label";
  export let name: string = "";
  export let value: string = "";
</script>

<label for={name}>{label}</label>
<input
  on:input
  type="text"
  {name}
  id={name}
  class="sm:text-sm"
  placeholder="Masukan {label}"
  {value}
/>

<style lang="postcss">
  input {
    @apply mt-1 block w-full shadow-sm border-gray-300 rounded-md capitalize;
  }
  label {
    @apply block text-sm font-medium text-gray-700 capitalize;
  }
</style>
