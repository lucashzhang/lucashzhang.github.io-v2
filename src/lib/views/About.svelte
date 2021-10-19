<script>
  import Window from "$lib/components/Window.svelte";
</script>

<section class="About">
  <img src="/Me.jpg" alt="Me" />
  <Window color="primary">
    <h1>About Me</h1>
    <hr />
    <p>
      Hello! My name is Lucas Zhang. I'm a creative and analytical software
      developer who also happens to love making things look pretty.
    </p>
    <div class="Button-Group">
      <a class="Button" href="https://linkedin.com/in/lucashzhang" target="_blank">Linkedin</a>
      <a class="Button" href="https://drive.google.com/file/d/1kYoxdLcPnO5h7ehvS6RkL8_2aIfyihdu/view?usp=sharing" target="_blank">Resume</a>
    </div>
  </Window>
</section>

<style>
  .About {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 3rem;
  }

  img {
    width: 20rem;
    padding-right: 3rem;
  }

  p {
    width: 48rem;
  }

  .Button-Group {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
</style>
