<script>
  import Window from "$lib/components/Window.svelte";
  export let data;
  export let direction = "right";

  function generateDate(date) {
    if (!date) return "";
    const { start = "", end = "" } = date;
    return start + (end ? ` -> ${end}` : "");
  }

  $: title = data?.Name?.title[0]?.plain_text || "";
  $: body = data?.Description?.rich_text[0]?.plain_text || "";
  $: thumbnail = data?.Thumbnail?.files[0]?.file?.url || "";
  $: link = data?.Link?.url || "";
  $: date = generateDate(data?.Date?.date);
</script>

<div class="Card">
  <a class={`Card-Thumbnail ${direction}`} href={link} target="_blank">
    <img src={thumbnail} alt={title || ""} />
  </a>
  <div class={`Card-Content ${direction}`}>
    <div class={`Card-Extra ${direction}`}>
      {date}
    </div>
    <Window>
      <h3>{title}</h3>
      <p>{body}</p>
    </Window>
    <div class={`Card-Extra ${direction}`}>Tags Placeholder</div>
  </div>
</div>

<style>
  .Card {
    position: relative;
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    height: 18rem;
  }

  .Card-Content {
    grid-row: 1;
    z-index: 100;
  }

  .Card-Thumbnail {
    transition: scale ease 0.25s;
    grid-row: 1;
    z-index: 99;
  }

  .Card-Thumbnail.right {
    grid-column: 8 / 21;
    margin-left: auto;
  }

  .Card-Content.right {
    grid-column: 1 / 14;
  }

  .Card-Thumbnail.left {
    grid-column: 1 / 14;
    margin-left: auto;
  }

  .Card-Content.left {
    grid-column: 8 / 21;
  }

  img {
    width: 28rem;
    object-fit: cover;
    object-position: center;
    height: 16rem;
    border-radius: 2px;
  }

  .Card-Thumbnail:hover {
    z-index: 101;
    scale: 1.01;
  }

  p {
    margin-top: 0.5rem;
  }

  .Card-Extra {
    height: 1rem;
    margin: 8px 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .Card-Extra.right {
    justify-content: start;
  }

  .Card-Extra.left {
    justify-content: end;

  }
</style>
