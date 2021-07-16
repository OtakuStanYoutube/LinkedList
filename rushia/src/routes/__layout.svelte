<script>
  import "../app.scss";
</script>

<main class="main">
  <nav>
    <h3><span class="pp">Linked</span>List</h3>
    <section class="social">
      <img src="/icon/github.png" alt="github" />
      <img src="/icon/twitter.png" alt="Twitter" />
    </section>
  </nav>
  <slot />
</main>

<style lang="scss">
  .main {
    background-color: var(--bg-color);
    display: grid;
    grid-template-rows: 10% auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    nav {
      margin-top: 4em;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        margin-left: 4em;
        font-size: 1.5em;
        font-weight: 600;
        .pp {
          color: #944cbf;
        }
      }

      .social {
        margin-right: 6em;
        display: flex;
        & > * {
          width: 18px;
          height: 18px;
          margin-left: 1em;
        }
      }
    }
  }
</style>
