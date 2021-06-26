<script lang="ts">
  import "../app.scss";
</script>

<div class="header">
  <div class="logo_container">LinkList</div>
  <nav class="navigation">
    <li class="link active">
      <a href="/">Log In</a>
    </li>
    <li class="link"><a href="/signup">Sign Up</a></li>
  </nav>
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

    .navigation {
      display: flex;
      margin-right: 1em;
      align-items: center;

      .link {
        // background-color: black;
        list-style: none;
        padding: 0.3em 1.5em;
        margin-right: 0.5em;
      }

      .active {
        color: green;
        background-color: var(--main-bg-color);
      }
    }
  }
</style>
