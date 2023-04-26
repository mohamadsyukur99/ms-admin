<script lang="ts">
	export let label: string = "label";
	export let name: string = "";
	export let value: string = "";
</script>

<label for={name}>
	{label}
</label>
<div class="mt-1">
	<textarea
		on:input
		id={name}
		{name}
		rows="3"
		class="sm:text-sm"
		placeholder="Masukan {label}"
		{value}
	/>
</div>

<style lang="postcss">
	textarea {
		@apply shadow-sm mt-1 block w-full border border-gray-300 rounded-md capitalize;
	}
	label {
		@apply block text-sm font-medium text-gray-700 capitalize;
	}
</style>
