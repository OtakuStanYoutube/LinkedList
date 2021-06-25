<script lang="ts">
  let Email: string;
  let Password: string;

  const LoginSubmit = (e: any) => {
    e.preventDefault();
    if (!Email && !Password) {
      console.log(`fields can not be empty`);
    } else {
      console.log(`${Email} and ${Password}`);
    }
  };
</script>

<section class="login_form">
  <section class="heading">Log In</section>
  <section class="form_container">
    <lable class="email_lable"> E-mail </lable>
    <input
      type="text"
      name="email"
      class="txt_input_full email"
      id="email"
      placeholder="Enetr Your E-Mail Here"
      bind:value={Email}
      required
    />
    <lable class="email_lable"> Password </lable>
    <input
      type="password"
      name="password"
      class="txt_input_full password"
      id="password"
      placeholder="Enter Your Password Here"
      bind:value={Password}
      required
    />
    <a href="/forgot_password">Forgot Password?</a>
    <button class="temporary btn_prime_green" on:click={LoginSubmit}
      >Log In</button
    >
  </section>
  <section class="oauth">
    <h2 class="breaker">OR</h2>
    <section class="bubbles">
      <div class="bubble1" />
      <div class="bubble1" />
      <div class="bubble1" />
    </section>
  </section>
</section>

<style lang="scss">
  .login_form {
    width: clamp(200px, 23vw, 370px);
    display: grid;

    .heading {
      font-size: 39.86px;
      font-weight: 400;
      text-align: center;
      margin: 2rem;
    }

    .oauth {
      display: grid;
      justify-content: center;
      justify-items: center;
      margin: 2.5em;

      .bubbles {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2em;
        margin-top: 1.5em;

        .bubble1 {
          background-color: var(--main-bg-color);
          height: 37.16px;
          width: 37.16px;
          border-radius: 50%;
        }
      }
    }

    .form_container {
      display: grid;
      // margin-top: 2em;
      align-content: start;
      justify-content: center;

      lable {
        font-size: 16px;
        margin-bottom: 0.4em;
      }

      input {
        margin-bottom: 1em;
        width: clamp(200px, 20vw, 280px);

        &:last-of-type {
          margin-bottom: 0.2rem;
        }
      }

      button {
        justify-self: end;
        margin-top: 1em;
      }

      a {
        text-decoration: none;
        color: var(--main-font-color);
      }
    }
  }
</style>
