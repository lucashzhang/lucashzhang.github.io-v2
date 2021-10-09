<script>
  import Timeline from "$lib/components/Timeline/index.svelte";
  import Window from "$lib/components/Window.svelte";
  export let projects;

  console.log(projects);
</script>

<section>
  <div class="stable">
    <div class="stable-container">
      <Window color="primary">
        <h1>My Projects</h1>
        <hr />
        <p>
          Lorem Ipsum
        </p>
      </Window>
    </div>
  </div>
  <div class="scrollable">
    <Timeline items={projects} direction="left" />
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row-reverse;
  }

  .stable {
    position: sticky;
    top: 0px;
    max-height: 100vh;
    width: 50%;
    display: flex;
    align-items: center;
    padding: 1rem;
    z-index: 10;
  }

  .stable-container {
    width: 80%;
    margin-left: auto;
  }

  .scrollable {
    z-index: 100;
    width: 50%;
    padding: 1rem;
  }
</style>
