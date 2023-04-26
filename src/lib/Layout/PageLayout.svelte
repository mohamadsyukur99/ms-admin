<script lang="ts">
  import { fade } from "svelte/transition";
  import PageHeader from "../Components/PageHeader/PageHeader.svelte";
  import FormFilter from "../Components/FormFIlter/FormFilter.svelte";
  import Table from "../Components/Table/Table.svelte";
  import { isMenu, isFilter } from "../Store/Navbar";

  let dataPageHeader: TDataPageHeader[] = [
    {
      head: [{ title: "Dashboard", descripstion: "Halaman Dashboard" }],
      breadcrumbs: [{ b1: "Dashboard", b2: "Page", b3: "Page layout" }],
    },
  ];

  let elementFilter: TElement[] = [
    {
      column: "2",
      child: [
        {
          name: "username",
          kind: "text",
          label: "Username",
          value: "",
        },
        { name: "nama", kind: "text", label: "Nama", value: "" },
        { name: "Tempat", kind: "text", label: "Tempat", value: "" },
        {
          name: "tanggallapor",
          label: "Tanggal Lapor",
          kind: "date",
          value: "",
          option: {
            altInput: true,
            mode: "range",
            dateFormat: "Y-m-d",
            altFormat: "d-m-Y",
          },
        },
      ],
    },
  ];

  const filterHandler = (e: any) => {
    console.log(e.detail.data);
  };
</script>

<div class="w-full {$isMenu == true ? 'lg:pl-64' : ''} pb-10">
  <PageHeader data={dataPageHeader} />
  {#if $isFilter}
    <div transition:fade>
      <FormFilter element={elementFilter} on:message={filterHandler} />
    </div>
  {/if}
  <Table />
</div>
