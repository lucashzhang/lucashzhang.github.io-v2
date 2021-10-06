<script>
  import Hero from "$lib/views/Hero.svelte";
  import About from "$lib/views/About.svelte";
  import Experience from "$lib/views/Experience.svelte";
  import Projects from "$lib/views/Projects.svelte";
  import Footer from "$lib/views/Footer.svelte";
</script>

<main>
  <Hero />
  <About />
  <Experience />
  <Projects />
  <Footer />
</main>

<style>
  :global(:root) {
    --cl-primary: #00dddd;
    --cl-secondary: #dd00dd;
    --cl-background: #333333;
    --cl-text: white;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  :global(body) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: linear-gradient(-45deg, #ff44ff, #44ffff, #ff44ff, #44ffff);
    background-size: 600vw 600vw;
    animation: gradient 20s ease infinite;
  }

  :global(section) {
    padding: 1rem max(calc(50vw - 800px), 1rem);
  }

  :global(h1, h2, h3, h4, h5, h6) {
      padding: 0;
      margin: 0;
  }

  main {
    background-image: url(/background.svg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
</style>
