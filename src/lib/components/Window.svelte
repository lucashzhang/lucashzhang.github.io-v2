<script>
  export let color = "";
</script>

<div class={`Window ${color}`}>
  <div class={`Window-Bar ${color}`}>
    <div class="Window-Dot" />
    <div class="Window-Dot" />
  </div>
  <div class="Window-Content">
    <slot />
  </div>
</div>

<style>
  .Window {
    border: 2px solid grey;
    background-color: var(--cl-background-light);
    width: auto;
  }

  .Window-Bar {
    height: 1rem;
    border-bottom: 2px solid grey;
    display: flex;
    align-items: center;
  }

  .Window-Dot {
    height: 0.5rem;
    width: 0.5rem;
    border: 2px solid grey;
    border-radius: 200%;
    margin: 0 2px;
  }

  .Window-Dot:first-child {
    margin-left: auto;
  }

  .Window-Dot:last-child {
    border-color: var(--cl-secondary);
    background-color: var(--cl-secondary);
    margin-right: 4px;
  }

  .Window-Content {
    padding: 0.75rem;
  }

  .primary {
    border-color: var(--cl-primary);
  }

  .secondary {
    border-color: var(--cl-secondary);
  }
</style>
