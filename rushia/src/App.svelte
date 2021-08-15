<script>
  import axios from "axios";
  import Layout from "./layout.svelte";
  import Thanks from "./thanks.svelte";
  let email;
  let isSubmited = false;

  $: err = "";
  console.log(err);

  async function emailSubmit() {
    console.log(email);
    const userData = { email };
    const baseUrl = myApp["env"]["BASE_URL"];
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/registrations/create`,
        userData,
      );
      let { data } = response;
      isSubmited = data.status;
    } catch (error) {
      const { data } = error.response;
      isSubmited = data.status;
      err = data.message;
      console.log(err);
    }
  }
</script>

<svelte:head>
  <title>LinkedList Pre-Registration</title>
</svelte:head>

<Layout>
  {#if isSubmited}
    <Thanks {email} />
  {:else}
    <img src="onebg.svg" class="bg-svg" alt="" />
    <img src="elp.png" class="elps" alt="" />
    <section class="container">
      <section class="left">
        <h1 class="head-line">A Single Platform For All Your Work</h1>
        <h3 class="sub-head-line">
          Build your LinkedList profile and showcase your proof of work,
          experience and online presence to your audience, all at a single place
        </h3>
        <form class="form">
          <label for="email" name="email" class="lbl">
            Pre-register today.<u>it's free!!</u>
          </label>
          <div class="inputs {err ? 'error' : ''}">
            <input
              bind:value={email}
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              class="form-email"
            />
            <button class="btn" on:click|preventDefault={emailSubmit}>
              <span class="material-icons"> send </span>
            </button>
          </div>
          <span class="error-text">{err}</span>
        </form>
      </section>
      <section class="right">
        <lottie-player
          class="lottie-player"
          src="linkedlist.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </section>
    </section>
  {/if}
</Layout>

<style lang="scss">
  .error-text {
    color: #e43e3e;
  }

  .bg-svg {
    position: absolute;
    top: 0;
    left: -100px;
    width: 100vw;
    height: 100vh;
    user-select: none;
    z-index: -200;

    @media only screen and (max-width: 500px) {
      position: absolute;
      top: -100px;
      left: 0;
      width: 100vw;
      height: 100%;
    }
  }

  .elps {
    position: absolute;
    top: 200px;
    right: 0vw;
    z-index: -200;
    user-select: none;

    @media only screen and (max-width: 500px) {
      height: 150px;
      top: calc(100vh - 300px);
    }
  }

  .container {
    display: flex;
    align-self: flex-start;
    margin-top: 50px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    z-index: 0;
    width: clamp(500px, 75vw, 1400px);
    height: clamp(100px, 70vh, 800px);
    color: white;

    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-evenly;
      margin-block: 0;
      width: 100vw;
    }

    .right {
      align-self: center;
      position: relative;
      width: clamp(200px, 40%, 400px);
      margin: 0 auto;

      @media only screen and (max-width: 500px) {
        width: 100%;
        display: grid;
        align-items: center;
      }
      .lottie-player {
        width: clamp(10em, 40vw, 50em);
        margin-right: 3em;

        @media only screen and (max-width: 500px) {
          margin: 0 auto;
          width: 100vw;
        }
      }
    }

    .left {
      position: relative;
      display: grid;
      gap: 1.5em;
      width: clamp(200px, 40%, 500px);
      margin: 0 auto;

      @media only screen and (max-width: 500px) {
        gap: 0.7em;
        width: 80%;
        margin: 0 auto;
        align-self: stretch;
      }

      .head-line {
        margin: 0 auto;
        font-style: normal;
        font-weight: 600;
        font-size: clamp(1.5rem, 2.5vw, 4rem);
        line-height: 112%;

        @media only screen and (max-width: 500px) {
          font-size: 2rem;
        }
      }

      .sub-head-line {
        margin: 0 auto;
        font-style: normal;
        font-weight: 300;
        font-size: clamp(0.9rem, 1.1vw, 1.3rem);
        line-height: 112%;

        @media only screen and (max-width: 500px) {
          font-size: 0.8rem;
        }
      }

      .lbl {
        font-size: clamp(0.8rem, 1.5vw, 1.7rem);
        font-weight: 300;
        line-height: 112%;
        letter-spacing: 0.105em;
        color: #b055e1;

        u {
          border: white;
          font-weight: 600;
          border-radius: 40px;
          padding: 0.2em 0.5em;
        }
      }

      .inputs {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 0;
        box-sizing: border-box;
        margin-top: 0.7rem;
        border: clamp(1px, 0.15em, 2px) solid #944cbf;
        border-radius: 100px;
        background-color: #000000;
        box-shadow: 10px 30px 100px 10px #0000006b;
      }

      .error {
        border: clamp(1px, 0.15em, 2px) solid #e43e3e;
      }

      .form-email {
        width: 100%;
        color: white;
        background: transparent;
        border: none;
        padding: 0.7em 1em;
        font-size: clamp(0.5rem, 1vw, 1.5rem);

        @media only screen and (max-width: 500px) {
          font-size: 0.8rem;
        }
      }

      .btn {
        display: grid;
        border: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding-inline: 0.8rem;
        width: clamp(2em, 3.7vw, 5em);
        background: #944cbf;
        border-radius: 100px;

        @media only screen and (max-width: 500px) {
          width: 3rem;
        }

        & > * {
          font-size: clamp(0.8em, 1.7vw, 2em);
          color: white;

          @media only screen and (max-width: 500px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>
