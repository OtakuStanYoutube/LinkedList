<main class="main">
  <nav>
    <img class="logo-try" src="logo2.png" alt="ma ka loda" />
    <section class="social">
      <a href="https://github.com/OtakuStanYoutube/LinkedList">
        <img src="/icon/github.png" alt="github" />
      </a>
      <a href="https://twitter.com/LinkedList_">
        <img src="/icon/twitter.png" alt="Twitter" />
      </a>
    </section>
  </nav>
  <slot />
</main>

<style lang="scss">
  .main {
    display: grid;
    grid-template-rows: 10% auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    nav {
      margin-top: 4em;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-try {
        margin-left: 4em;
        width: 150px;
        margin-bottom: 0.2em;
        // height: 24px;

        @media only screen and (max-width: 500px) {
          margin: 0 auto;
        }
      }

      .social {
        margin-right: 6em;
        display: flex;
        a > * {
          width: 18px;
          height: 18px;
          margin-left: 1em;
        }

        @media only screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }
</style>
