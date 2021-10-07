<script>
  import Card from "$lib/components/Timeline/Card.svelte";
  export let items;
</script>

<div class="Timeline">
  {#each items as item (item.id)}
    <Card data={item} />
  {/each}
</div>

<style>

</style>
