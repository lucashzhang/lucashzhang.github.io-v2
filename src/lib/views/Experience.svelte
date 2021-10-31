<script>
  import Timeline from "$lib/components/Timeline/index.svelte";
  import Window from "$lib/components/Window.svelte";
  export let work;
</script>

<section id="experience">
  <div class="stable">
    <div class="stable-container">
      <Window color="primary">
        <h1>My Experiences</h1>
        <hr />
        <p>
          Right now, I'm a computer science major at UNC Chapel Hill. But
          outside of schoolwork, I spend much of my time interning at places
          like SAS and Duke University. I also taking an active role in my
          Computer Science Department by doing things such as Directing the
          Carolina Data Challenge Hackathon and serving on the development team
          of Computer Science for Social Good.
        </p>
      </Window>
    </div>
  </div>
  <div class="scrollable">
    <Timeline items={work} />
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
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
  }

  .scrollable {
    z-index: 100;
    width: 50%;
    padding: 1rem;
  }
</style>
