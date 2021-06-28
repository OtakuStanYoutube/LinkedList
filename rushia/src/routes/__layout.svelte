<script lang="ts">
  import "../app.scss";
  import Navigation from "../Components/Shared/Nav.svelte";
</script>

<div class="header">
  <div class="logo_container">LinkList</div>
  <Navigation />
</div>
<slot />

<style lang="scss">
  .header {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    background-color: var(--main-fg-color);
    color: var(--main-font-color);
    padding: 0.2em 1em;

    .logo_container {
      font-size: 25px;
      font-weight: 700;
      letter-spacing: -5%;
      margin-left: 1em;
    }
  }
</style>
