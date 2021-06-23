<section class="card_container">
  <slot />
</section>

<style lang="scss">
  .card_container {
    background-color: var(--main-fg-color);
    box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1em 2em;
  }
</style>
