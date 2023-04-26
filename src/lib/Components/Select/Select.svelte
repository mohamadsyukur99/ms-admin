<script lang="ts">
	import Select from "svelte-select";
	import { createEventDispatcher } from "svelte";

	export let items: any[] = [];
	export let label: string = "label";
	export let name: string = "";
	export let value: string = "";
	const dispatch = createEventDispatcher();

	const isSelect = (n: any) => {
		let filter = items.filter((el: any) => el.value === n);
		return filter[0];
	};

	const selectHandler = (e: any) => {
		let data: any = e.detail;
		data["name"] = name;
		data["type"] = "select";

		dispatch("change", {
			data,
		});
	};
</script>

<label for={name}>
	{label}
</label>
<div class="themed">
	<Select
		on:select={selectHandler}
		{items}
		value={isSelect(value)}
		inputStyles="border-radius: 5px;"
	/>
</div>

<style lang="postcss">
	label {
		@apply block text-sm font-medium text-gray-700 capitalize;
	}
</style>
