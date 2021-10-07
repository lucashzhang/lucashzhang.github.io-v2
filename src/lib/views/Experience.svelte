<script>
  import Timeline from "$lib/components/Timeline/index.svelte";
  export let work;

  console.log(work);
</script>

<section>
  <div class="stable">
    <div class="stable-container">
      <h1>Where I've Worked</h1>
      <hr />
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
    justify-content: center;
    padding: 1rem;
    z-index: 10;
  }

  .stable-container {
    width: 75%;
    text-align: left;
  }

  .scrollable {
    z-index: 100;
    width: 50%;
    padding: 1rem;
  }
</style>
