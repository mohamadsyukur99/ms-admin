<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "./../Store/Navbar";
  import Navbar from "./Navbar/Navbar.svelte";
  import Sidebar from "./Sidebar/Sidebar.svelte";

  const themeChange = (e: any) => {
    theme.changeTheme(e);
  };

  onMount(async () => {
    let themeNow = localStorage.getItem("theme");
    if (themeNow == "null") {
      themeChange("light");
    } else {
      themeChange(themeNow);
    }
  });
</script>

<div class="h-full bg-base-200">
  <Navbar />
  <Sidebar />
  <slot />
</div>
