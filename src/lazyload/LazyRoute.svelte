<script lang="ts">
  import { Route } from "svelte-navigator";
  import Lazy from "./Lazy.svelte";

  export let component: any;
  export let delayMs = null;

  let props: any;
  $: {
    const { component, ...restProps } = $$props;
    props = restProps;
  }
</script>

<Route {...props}>
  <Lazy {component} {delayMs}>
    <slot />
  </Lazy>
</Route>
