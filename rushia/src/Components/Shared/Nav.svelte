<script lang="ts">
  let curr: string = "login";
</script>

<nav class="navigation">
  <a
    class="link {curr == 'login' ? 'active' : ''}"
    on:click={() => (curr = "login")}
    href="/">Log In</a
  >
  <a
    class="link {curr == 'signup' ? 'active' : ''}"
    on:click={() => (curr = "signup")}
    href="/signup">Sign Up</a
  >
</nav>

<style lang="scss">
  .navigation {
    display: flex;
    margin-right: 1em;
    align-items: center;

    .link {
      // background-color: black;
      padding: 0.3em 1.5em;
      margin-right: 0.5em;
    }

    .link:hover {
      background-color: var(--main-bg-color);
    }

    .active {
      color: rgb(64, 175, 64);
      background-color: var(--main-bg-color);
    }
  }
</style>
