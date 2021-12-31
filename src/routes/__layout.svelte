<script>
  import "../app.css";
  import Hero from "$lib/views/Hero.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/views/Footer.svelte";
</script>

<svelte:head>
  <title>Lucas Zhang</title>
</svelte:head>

<Hero />
<Nav />
<main>
  <slot />
</main>
<Footer />
