<script lang="ts">
  import { isMenu } from "../../Store/Navbar";

  export let data: TDataPageHeader[] = [
    {
      head: [{ title: "Dashboard", descripstion: "Halaman Dashboard" }],
      breadcrumbs: [{ b1: "Dashboard", b2: "Master", b3: "Data Master" }],
    },
  ];
</script>

<div class="bg-white shadow pt-14">
  <div class="px-4 sm:px-6  lg:mx-auto lg:px-4">
    <div class="py-2 md:flex md:items-center md:justify-between ">
      <div class="flex-1 min-w-0">
        <!-- Profile -->
        <div class="flex items-center">
          <div>
            <div class="flex items-center">
              <img
                class="h-16 w-16 rounded-full sm:hidden"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                alt=""
              />
              <h1
                class=" text-xl font-bold leading-7 text-base-content sm:leading-9 sm:truncate"
              >
                {data[0]["head"][0]["title"]}
              </h1>
            </div>
            <dl class="flex flex-col sm:flex-row sm:flex-wrap">
              <dd
                class="flex items-center text-sm text-gray-500 font-base capitalize sm:mr-6"
              >
                {data[0]["head"][0]["descripstion"]}
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
        <div class="text-sm breadcrumbs">
          <ul>
            {#each data[0]["breadcrumbs"] as b}
              <li class="cursor-pointer"><span>{b["b1"]}</span></li>
              {#if b["b2"] != ""}
                <li class="cursor-pointer"><span>{b["b2"]}</span></li>
              {/if}
              {#if b["b3"] != ""}
                <li class="cursor-pointer"><span>{b["b3"]}</span></li>
              {/if}
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
