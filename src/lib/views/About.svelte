<script>
  import Window from "$lib/components/Window.svelte";
</script>

<section id="about">
  <img src="/Me.jpg" alt="Me" loading="lazy" />
  <Window color="primary">
    <div class="About-Content">
      <h1>About Me</h1>
      <hr />
      <p>
        Hello! My name is Lucas Zhang. I'm a creative and analytical software
        developer who also happens to love making things look pretty. I've been
        interning, teaching, taking classes, and building all sorts of projects,
        hoping to gain more practical experience in my field as well as explore
        any new ones.
      </p>
      <div class="Button-Group">
        <a
          class="Button"
          href="https://linkedin.com/in/lucashzhang"
          target="_blank">Linkedin</a
        >
        <a
          class="Button"
          href="https://drive.google.com/file/d/1kYoxdLcPnO5h7ehvS6RkL8_2aIfyihdu/view?usp=sharing"
          target="_blank">Resume</a
        >
      </div>
    </div>
  </Window>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 3rem;
    height: 100%;
    gap: 3rem;
  }

  img {
    width: 20rem;
  }

  hr {
    width: 100%;
  }

  .About-Content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .Button-Group {
    margin-top: auto;
    margin-bottom: 0.5rem;
    display: grid;

    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-top: 2rem;
  }

  hr {
    width: 100%
  }

  @media only screen and (max-width: 992px) {
    section {
      flex-direction: column;
    }

    img {
      width: 100%;
      height: auto;
    }

  }
</style>
