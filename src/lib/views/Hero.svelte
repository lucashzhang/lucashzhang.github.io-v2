<script>
  import Desktop from "$lib/components/Desktop.svelte";
</script>

<div class="Hero" id="hero">
  <Desktop />
  <header>
    <h1>Hello, I'm Lucas Zhang.</h1>
    <h1>Welcome to my website!</h1>
  </header>
</div>

<style>
  .Hero {
    text-align: center;
    height: calc(100vh - 3rem);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    position: relative;
    max-width: 1000px;
    padding-bottom: 3rem;
  }

  h1 {
    color: var(--cl-text);
    font-size: 4em;
    padding: 0.5rem 1rem;
  }
</style>
