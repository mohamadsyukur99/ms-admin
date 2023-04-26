<script lang="ts">
  import home from "./home.json";
  import blog from "./about.json";
  import about from "./about.json";

  let url = window.location.pathname;
  url = url.substring(1);

  switch (url) {
    case "home":
      console.log(home);
      break;
    case "about":
      console.log(about);
      break;
    case "blog":
      console.log(blog);
      break;

    default:
      break;
  }
  // let data = url.substring(1);
</script>

<p>{url}</p>
