<script>
  import Card from "$lib/components/Timeline/Card.svelte";
  export let items;
  export let direction = "right";
</script>

<div class="Timeline">
  {#each items as item (item.id)}
    <Card data={item} {direction} />
  {/each}
</div>

<style>
</style>
