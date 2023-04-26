<script lang="ts">
  import { isFilter } from "./../../Store/Navbar";

  let header: any[] = [
    { label: "Name", type: "font-semibold w-30" },
    {
      label: "Title",
      type: "w-30 ",
    },
    { label: "Email", type: "w-20 " },
    { label: "Role", type: "w-20 " },
    { label: "Role", type: "w-20 " },
    { label: "Role", type: "w-20 " },
    { label: "Role", type: "w-20 " },
  ];
  let dataBody: any[] = [
    {
      code: "00",
      totalPage: 1000,
      data: [
        {
          name: "syukur",
          title: "Front-end Developer sdf sddf dfdf dfdf ",
          email: "mohamad@gmail.com",
          role: "admin dsfds dsfdsf dfdf",
          te: "admin dsf df fd fdf dfd fd fd f",
          ro: "admin dfd fdf df dfdf d fd f d fdff",
          rol: "admin dfd f dfdf d fd fd f df df",
        },
        {
          name: "syukur",
          title: "Front-end Developer",
          email: "mohamad@gmail.com",
          role: "admin",
          te: "admin",
          ro: "admin",
          rol: "admin",
        },
        {
          name: "syukur",
          title: "Front-end Developer",
          email: "mohamad@gmail.com",
          role: "admin",
          te: "admin",
          ro: "admin",
          rol: "admin",
        },
        {
          name: "syukur",
          title: "Front-end Developer",
          email: "mohamad@gmail.com",
          role: "admin",
          te: "admin",
          ro: "admin",
          rol: "admin",
        },
        {
          name: "syukur",
          title: "Front-end Developer",
          email: "mohamad@gmail.com",
          role: "admin",
          te: "admin",
          ro: "admin",
          rol: "admin",
        },
        {
          name: "syukur",
          title: "Front-end Developer",
          email: "mohamad@gmail.com",
          role: "admin",
          te: "admin",
          ro: "admin",
          rol: "admin",
        },
        {
          name: "syukur",
          title: "Front-end Developer",
          email: "mohamad@gmail.com",
          role: "admin",
          te: "admin",
          ro: "admin",
          rol: "admin",
        },
        {
          name: "syukur",
          title: "Front-end Developer",
          email: "mohamad@gmail.com",
          role: "admin",
          te: "admin",
          ro: "admin",
          rol: "admin",
        },
      ],
    },
  ];

  const hideFilter = (e: boolean) => {
    isFilter.changehideFilter(e);
  };
</script>

<div class="mt-4 px-4 sm:px-6 lg:px-4">
  <p class="text-xs text-gray-700 mt-2">Record Shown: 0 - 0 of 0</p>
  <div class="sm:flex sm:items-center bg-white py-2 px-6 rounded-t-lg">
    <div class="sm:flex-auto flex space-x-2">
      <p class="mt-3 text-sm text-gray-700">show</p>
      <select
        id="location"
        name="location"
        class="focus:outline-none  sm:text-sm rounded-md"
      >
        <option selected>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
      <p class="mt-3 text-sm text-gray-700">entries</p>
    </div>
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
      <span on:click={() => hideFilter($isFilter)} class="icon-action "
        ><i class="ri-filter{$isFilter ? '-off' : ''}-fill" />
      </span>
      <span class="icon-action text-red-600 "
        ><i class="ri-printer-line" />
      </span>
      <span class="icon-action text-green-600"
        ><i class="ri-file-excel-line" />
      </span>

      <span class="icon-action text-indigo-600"
        ><i class="ri-add-circle-line" />
      </span>
    </div>
  </div>
  <div class="flex flex-col px-8">
    <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle">
        <div class="shadow-sm ring-1 ring-black ring-opacity-5">
          <table
            class="min-w-full border-separate overflow-auto"
            style="border-spacing: 0"
          >
            <thead class="bg-gray-50">
              <tr>
                <th scope="col">No</th>
                {#each header as col}
                  <th scope="col" class=" {col['type']}">{col["label"]}</th>
                {/each}
                <th
                  scope="col"
                  class=" py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                >
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {#each dataBody[0]["data"] as data, index}
                <tr>
                  <td class="td">{index + 1}</td>
                  {#each header as t, i}
                    <td class="td {t['type']}">{data[Object.keys(data)[i]]}</td>
                  {/each}
                  <td
                    class="relative  py-4 pr-4 pl-3 text-center text-sm font-medium sm:pr-6 lg:pr-8"
                  >
                    <span class=" text-indigo-700 icon-action"
                      ><i class="ri-file-edit-fill" /></span
                    >
                    <span class="text-red-700 icon-action"
                      ><i class="ri-delete-bin-6-fill" /></span
                    >
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div
            class="bg-gray-50 px-4 py-2 flex items-center justify-between border-gray-200 sm:px-6"
          >
            <div
              class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
            >
              <div>
                <nav
                  class="relative z-0 flex space-x-2 rounded-md shadow-sm h-8"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="text-xl relative inline-flex items-center px-1   border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
                  >
                    <span class="sr-only">Previous</span>
                    <!-- Heroicon name: mini/chevron-left -->
                    <i class="ri-arrow-left-s-line" />
                  </a>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-20  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 "
                    placeholder=""
                  />
                  <a
                    href="#"
                    class=" text-sm  relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
                  >
                    <span class="">Go</span>
                  </a>
                  <a
                    href="#"
                    class="mr-2  text-xl relative inline-flex items-center px-1  border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Next</span>
                    <!-- Heroicon name: mini/chevron-right -->
                    <i class="ri-arrow-right-s-line" />
                  </a>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-26 text-center h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 "
                    value="of 10 pages"
                    readonly
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  select {
    @apply mt-1 block w-20 pl-3 pr-10 py-2 text-base border-gray-300;
  }

  .icon-action {
    @apply text-2xl cursor-pointer;
  }
  th {
    @apply sticky top-14 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 
    text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter py-3.5 px-3 text-left;
  }

  td {
    @apply whitespace-nowrap border-b border-gray-200 py-4 text-sm text-gray-500 px-3;
  }
</style>
