<script>
  import Window from "$lib/components/Window.svelte";
  import Tag from "$lib/components/Timeline/Tag.svelte";
  export let data = {};
  export let direction = "right";

  function generateDate(date) {
    if (!date) return "";
    const { start = "", end = "" } = date;
    return start + (end ? ` \u2192 ${end}` : "");
  }

  function generateTitle(name = {}, position = {}) {
    const nameText = name.title[0]?.plain_text || "";
    const posText = position.rich_text[0]?.plain_text || "";

    if (posText.length > 0) {
      return posText + (nameText.length > 0 ? ` @${nameText}` : "");
    }
    return nameText;
  }

  $: title = generateTitle(data.Name, data.Position);
  $: body = data.Description?.rich_text[0]?.plain_text || "";
  $: thumbnail = data.Thumbnail?.files[0]?.file?.url || "";
  $: link = data.Link?.url || "";
  $: date = generateDate(data.Date?.date);
  $: technologies = data.Technologies?.multi_select || [];

  console.log(title)
</script>

<div class={`Card ${direction}`}>
  <a class="Card-Thumbnail" href={link} target="_blank">
    <img src={thumbnail} alt={title || ""} loading="lazy" />
  </a>
  <div class="Card-Content">
    <div class="Card-Extra">
      {date}
    </div>
    <Window>
      <h3>
        {title}

        {#if link != ""}
          <a class="Card-Link" href={link} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
          </a>
        {/if}
      </h3>
      <p>{body}</p>
    </Window>
    <div class="Card-Extra">
      {#each technologies as tech (tech.id)}
        <Tag color={tech.color}>
          {tech.name}
        </Tag>
      {/each}
    </div>
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
    transition: filter ease 0.25s;
  }

  .Card-Thumbnail {
    transition: transform ease 0.25s;
    grid-row: 1;
    z-index: 99;
  }

  .right > .Card-Thumbnail {
    grid-column: 8 / 21;
    margin-left: auto;
  }

  .right > .Card-Content {
    grid-column: 1 / 14;
  }

  .left > .Card-Thumbnail {
    grid-column: 1 / 14;
    margin-right: auto;
  }

  .left > .Card-Content {
    grid-column: 8 / 21;
  }

  .Card-Link {
    height: 100%;
    color: var(--cl-primary);
  }

  .Card-Link svg {
    height: 1em;
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 16rem;
    aspect-ratio: 16 / 9;
  }

  .Card-Thumbnail:hover + .Card-Content {
    filter: blur(4px) opacity(0.5);
  }

  .Card-Thumbnail:hover {
    z-index: 101;
    transform: scale(1.01);
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

  .right > .Card-Content > .Card-Extra {
    justify-content: start;
  }

  .left > .Card-Content > .Card-Extra {
    justify-content: end;
  }
</style>
