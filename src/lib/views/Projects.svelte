<script>
  import Timeline from "$lib/components/Timeline/index.svelte";
  import Window from "$lib/components/Window.svelte";
  export let projects;
</script>

<section id="projects">
  <div class="stable">
    <Window color="primary">
      <h1>My Projects</h1>
      <hr />
      <p>
        Here are some examples of the projects that I've worked on in the past
        few years. They include many applications and projects that I developed
        on my own time as well as some assignments that I feel particularly
        proud of.
      </p>
    </Window>
  </div>
  <div class="scrollable">
    <Timeline items={projects} direction="left" />
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row-reverse;
    gap: 6rem;
  }

  .stable {
    position: sticky;
    top: 0px;
    max-height: 100vh;
    width: 45%;
    display: flex;
    align-items: center;
    z-index: 10;
  }

  .scrollable {
    z-index: 100;
    width: 55%;
  }

  @media only screen and (max-width: 1200px) {
    section {
      flex-direction: column;
      gap: 2rem;
    }

    .stable {
      position: inherit;
      width: 100%;
      padding: 0;
    }

    .scrollable {
      width: 100%;
      padding: 0;
    }
  }
</style>
