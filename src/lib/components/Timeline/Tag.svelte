<script>
  export let color;
</script>

<div class={`Tag ${color}`}>
  <slot />
</div>

<style>
  .Tag {
    padding: 1px 2px;
    border-radius: 2px;
    margin: 0px 2px;
  }
  /* Classes for Notion colors */
  .default {
    background-color: rgb(80,85,88);
  }

  .gray {
    background-color: rgba(151,154,155,0.5);
  }

  .brown {
    background-color: rgba(147,114,100,0.5);
  }

  .orange {
    background-color: rgba(255,163,68,0.5);
  }

  .yellow {
    background-color: rgba(255,220,73,0.5);
  }

  .green {
    background-color: rgba(77,171,154,0.5);
  }

  .blue {
    background-color: rgba(82,156,202,0.5);
  }

  .purple {
    background-color: rgba(154,109,215,0.5);
  }

  .pink {
    background-color: rgba(226,85,161,0.5);
  }

  .red {
    background-color: rgba(255,115,105,0.5);
  }
</style>
