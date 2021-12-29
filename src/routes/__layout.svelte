<script>
  import "../app.css";
  import Hero from "$lib/views/Hero.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/views/Footer.svelte";
</script>

<Hero />
<Nav />
<main>
  <slot />
</main>
<Footer />
<img id="website3d" src="/Website3d.png" alt="">

<style>
  #website3d {
    position: fixed;
    right: -160px;
    top: 100px;
    z-index: -1;
    height: 100vh;
    transform: rotateZ(5deg);
    opacity: 0.7;
    filter: blur(2px);
  }
</style>