<nav class="navigation">
  <li>
    <a class="link active" href="/">Log In</a>
  </li>
  <li><a class="link" href="/signup">Sign Up</a></li>
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

    .active {
      color: rgb(64, 175, 64);
      background-color: var(--main-bg-color);
    }
  }
</style>
