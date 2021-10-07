<script>
  import Window from "$lib/components/Window.svelte";
  export let data;

  $: title = data?.Name?.title[0]?.plain_text || "";
  $: body = data?.Description?.rich_text[0]?.plain_text || "";
  $: thumbnail = data?.Thumbnail?.files[0]?.file?.url || "";
  $: link = data?.Link?.url || "";
</script>

<div class="Card">
  <a class="Card-Thumbnail" href={link} target="_blank">
    <img src={thumbnail} alt={title || ""} />
  </a>
  <div class="Card-Content">
    <Window>
      <h3>{title}</h3>
      <p>{body}</p>
    </Window>
  </div>
</div>

<style>
  .Card {
    position: relative;
    display: flex;
    align-items: center;
    height: 22rem;
  }

  .Card-Content {
    width: 24rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .Card-Thumbnail {
    margin-left: auto;
    max-height: 22rem;
    max-width: 75%;
    transition: scale ease 0.5s;
  }

  img {
    max-width: 100%;
    border-radius: 2px;
  }

  .Card-Thumbnail:hover {
    z-index: 101;
    scale: 1.01;
  }

  p {
    margin-top: 0.5rem;
  }
</style>
