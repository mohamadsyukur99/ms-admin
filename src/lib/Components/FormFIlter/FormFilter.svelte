<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { isFilter } from "./../../Store/Navbar";
  import GroupFormInput from "./../GroupFormInput/GroupFormInput.svelte";
  import Textarea from "./../Textarea/Textarea.svelte";
  import Select from "./../Select/Select.svelte";
  import TextInput from "./../TextInput/TextInput.svelte";
  import DatePicker from "./../DatePicker/DatePicker.svelte";

  const dispatch = createEventDispatcher();

  // export let element: any[];
  export let dataSend: any = {};

  export let element: TElement[] = [
    {
      column: "1",
      child: [
        {
          name: "Input1",
          kind: "text",
          label: "Input 1",
          value: "",
        },
      ],
    },
    {
      column: "2",
      child: [
        {
          name: "Input2",
          kind: "text",
          label: "Input 2",
          value: "",
        },
        {
          name: "Input3",
          kind: "text",
          label: "Input 3",
          value: "",
        },
      ],
    },
    {
      column: "3",
      child: [
        {
          name: "Input4",
          kind: "text",
          label: "Input 4",
          value: "",
        },
        {
          name: "Input5",
          kind: "text",
          label: "Input 5",
          value: "",
        },
        {
          name: "Input6",
          kind: "text",
          label: "Input 6",
          value: "",
        },
      ],
    },
  ];

  const hideFilter = (e: boolean) => {
    isFilter.changehideFilter(e);
  };

  const submitHandler = () => {
    dispatch("message", {
      data: dataSend,
    });
  };

  const inputHandler = (e: any) => {
    let val: any = "";
    let name: string = "";

    if (e.target !== null) {
      val = e.target.value;
      name = e.target.name;
    } else {
      val = e.detail.data.value;
      name = e.detail.data.name;
    }
    dataSend = { ...dataSend, [name]: val };
  };
</script>

<div class="mt-10 sm:mt-0 p-4">
  <div class="md:grid md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="flex justify-between">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 pb-5">
                  Filter Data
                </h3>
              </div>
              <div>
                <span
                  on:click={() => hideFilter($isFilter)}
                  class="cursor-pointer text-2xl leading-6 font-medium text-error pb-5"
                >
                  <i class="ri-close-line" />
                </span>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-6">
              {#each element as e}
                {#each e["child"] as child}
                  <GroupFormInput type={e["column"]}>
                    {#if child["kind"] === "txtarea"}
                      <Textarea
                        on:input={inputHandler}
                        label={child["label"]}
                        name={child["name"]}
                      />
                    {:else if child["kind"] === "select"}
                      <Select
                        label={child["label"]}
                        name={child["name"]}
                        items={child["items"]}
                        on:change={inputHandler}
                      />
                    {:else if child["kind"] === "date"}
                      <DatePicker
                        label={child["label"]}
                        name={child["name"]}
                        option={child["option"]}
                        on:change={inputHandler}
                      />
                    {:else}
                      <TextInput
                        on:input={inputHandler}
                        label={child["label"]}
                        name={child["name"]}
                      />
                    {/if}
                  </GroupFormInput>
                {/each}
              {/each}
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              on:click={submitHandler}
              type="button"
              class="hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >Filter
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<style lang="postcss">
  button {
    @apply inline-flex justify-center py-2 px-4 border border-transparent 
     shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600;
  }
</style>
