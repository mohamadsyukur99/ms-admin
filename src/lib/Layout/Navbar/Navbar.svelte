<script lang="ts">
  import { theme, isMenu } from "./../../Store/Navbar";

  const collapseMenua = (e: boolean) => {
    isMenu.changecollapsMenu(e);
  };

  const themeChange = (e: any) => {
    theme.changeTheme(e);
  };
</script>

<div class="navbar fixed  bg-primary min-h-0 py-1 px-2 ">
  <div class="navbar-start">
    <button
      class="btn btn-square btn-primary text-xl ml-[-5px]"
      on:click={() => collapseMenua($isMenu)}
    >
      <i class="ri-menu-fill" />
    </button>
    <h3 class="normal-case text-primary-content font-medium">MS ADMIN</h3>
  </div>

  <div class="navbar-end">
    <div class="dropdown dropdown-end">
      <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="#0" class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="#0">Settings</a></li>
        <li><a href="#0">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
