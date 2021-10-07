<script context="module">
  export async function load({ fetch }) {
    const [work, projects] = await Promise.all([
      fetch("/api/work"),
      fetch("/api/projects"),
    ]);

    return {
      props: {
        work: work.ok ? await work.json() : { data: [] },
        projects: projects.ok ? await projects.json() : { data: [] },
      },
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
