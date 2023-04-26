<script lang="ts">
  import "remixicon/fonts/remixicon.css";
  import { Router, Route, Link } from "svelte-navigator";
  import LazyRoute from "./lazyload/LazyRoute.svelte";
  import Layout from "./lib/Layout/Layout.svelte";
  import PageLayout from "./lib/Layout/PageLayout.svelte";

  const delayModuleLoad = (module) =>
    new Promise((res) => setTimeout(() => res(module), Math.random() * 2000));
  const Home = () => import("./lazyload/Home.svelte").then(delayModuleLoad);
  const About = () => import("./lazyload/About.svelte").then(delayModuleLoad);
  const Blog = () => import("./lazyload/Blog.svelte").then(delayModuleLoad);
</script>

<!-- <Router>
  <header>
    <h1>History</h1>

    <nav>
      <Link to="/">Base</Link>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="blog">Blog</Link>
    </nav>
  </header>

  <main>
    <LazyRoute path="blog/*blogRoute" component={Blog} delayMs={500}>
      <h4>Loading...</h4>
    </LazyRoute>
    <LazyRoute path="home" component={Home} delayMs={500}>
      Loading Home...
    </LazyRoute>
    <LazyRoute path="about" component={About} delayMs={500}>
      Loading About...
    </LazyRoute>
    <Route>
      <h3>Default</h3>
      <p>No Route could be matched.</p>
    </Route>
  </main>
</Router> -->

<Layout>
  <!-- <TitleContent /> -->
  <PageLayout />
</Layout>
