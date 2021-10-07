<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/api/notion");

    if (res.ok) {
      const { work, projects } = await res.json();
      return {
        props: {
          work: work,
          projects: projects,
        },
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load notion database`),
    };
  }
</script>

<script>
  import About from "$lib/views/About.svelte";
  import Experience from "$lib/views/Experience.svelte";
  import Projects from "$lib/views/Projects.svelte";

  export let work;
  export let projects;
</script>

<About />
<Experience {work} />
<Projects {projects} />
