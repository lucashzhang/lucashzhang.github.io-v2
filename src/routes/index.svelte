<!-- <script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/notion");

    if (res.ok) {
      return {
        props: {
          ...await res.json()
        },
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load notion database`),
    };
  }
</script> -->
<script>
  import About from "$lib/views/About.svelte";
  import Experience from "$lib/views/Experience.svelte";
  import Projects from "$lib/views/Projects.svelte";
  import { onMount } from "svelte";

  let work = [];
  let projects = [];

  onMount(async () => {
    const res = await fetch("/api/notion");

    if (res.ok) {
      const json = await res.json();
      work = json.work;
      projects = json.projects;
    }
  });
</script>

<About />
<Experience {work} />
<Projects {projects} />
