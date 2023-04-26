import { writable } from "svelte/store";

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

function collapsMenu() {
  const { subscribe, update } = writable(true)
  return {
    subscribe,
    changecollapsMenu: (e: boolean) => update(n => n = !e)
  }
}
export const isMenu = collapsMenu()


function hideFilter() {
  const { subscribe, update } = writable(true)
  return {
    subscribe,
    changehideFilter: (e: boolean) => update(n => n = !e)
  }
}
export const isFilter = hideFilter()