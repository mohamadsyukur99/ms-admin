import { writable } from "svelte/store";

export const menu: TMenu[] = [
  {
    name: "dashboard",
    link: "home",
    component: "Home",
    icon: "home-3-line",
    child: [],
  },
  {
    name: "master",
    component: "",
    link: "",
    icon: "database-2-line",
    child: [
      { name: "data user", component: "DataUser", link: "datauser" },
      { name: "Sop", component: "SOP", link: "sop" }
    ],
  },
  {
    name: "Aplikasi",
    component: "",
    link: "",
    icon: "apps-2-line",
    child: [
      { name: "data user", component: "DataUser", link: "datauser" },
      { name: "Sop", component: "SOP", link: "sop" }
    ],
  },
];

const themeNow = localStorage.getItem('theme')
function createTheme() {
  const { subscribe, set } = writable(themeNow);

  return {
    subscribe,
    changeTheme: (value: "" | "light" | "night" | "corporate" | "business") => {
      document.documentElement.setAttribute('data-theme', value);
      localStorage.setItem("theme", value)
      set(value)
    },
  }
}
export const theme = createTheme()
