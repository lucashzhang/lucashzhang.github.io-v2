<script>
  export let color;
</script>

<div class={`Tag notion-${color}`}>
  <slot />
</div>

<style>
  .Tag {
    padding: 1px 2px;
    border-radius: 2px;
    margin: 0px 2px;
    background-color: var(--cl-notion-tag, #505558);
  }
  /* Classes for Notion colors */

  .notion-gray {
    --cl-notion-tag: #6F7376;
  }

  .notion-brown {
    --cl-notion-tag: #6D5F5A;
  }

  .notion-orange {
    --cl-notion-tag: #A3784A;
  }

  .notion-yellow {
    --cl-notion-tag: #A3944D;
  }

  .notion-green {
    --cl-notion-tag: #4A7C75;
  }

  .notion-blue {
    --cl-notion-tag: #4C748D;
  }

  .notion-purple {
    --cl-notion-tag: #705D94;
  }

  .notion-pink {
    --cl-notion-tag: #945179;
  }

  .notion-red {
    --cl-notion-tag: #A3605D;
  }
</style>
