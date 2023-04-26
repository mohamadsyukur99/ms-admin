<script lang="ts">
	import Flatpickr from "svelte-flatpickr";
	import "flatpickr/dist/flatpickr.css";
	import { createEventDispatcher } from "svelte";

	export let label: string = "label";
	export let name: string = "";
	export let value: string = "";
	export let option: {} = {
		altInput: true,
		altFormat: "d-m-Y",
		dateFormat: "Y-m-d",
	};

	const dispatch = createEventDispatcher();

	const selectHandler = (e: any) => {
		let data: any = {};
		data["name"] = name;
		data["value"] = e.detail[1];

		dispatch("change", {
			data,
		});
	};
</script>

<label for={name} class="block text-sm font-medium text-gray-700">
	{label}
</label>
<Flatpickr
	placeholder="Select Date...."
	options={option}
	{name}
	bind:value
	on:change={selectHandler}
	class="focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
/>

<style lang="postcss">
	label {
		@apply block text-sm font-medium text-gray-700 capitalize mb-1;
	}
</style>
