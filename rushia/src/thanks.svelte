<script>
  export let email;
</script>

<svelte:head>
  <title>Thanks for registering</title>
</svelte:head>

<img src="onebg.svg" class="bg-svg" alt="" />
<img src="elp.png" class="elps" alt="" />
<section class="container">
  <section class="left">
    <h1 class="head-line">A Single Platform For All Your Work</h1>
    <h3 class="sub-head-line">
      Thanks for registering with us, You will receive a confirmation email on {email}
    </h3>
  </section>
</section>

<style lang="scss">
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
    // width: 200px;
    // height: 200px;
    @media only screen and (max-width: 500px) {
      // display: none;
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

    // .right {
    //   align-self: center;
    //   position: relative;
    //   width: clamp(200px, 40%, 400px);
    //   margin: 0 auto;

    //   @media only screen and (max-width: 500px) {
    //     width: 100%;
    //     display: grid;
    //     align-items: center;
    //   }
    //   .lottie-player {
    //     width: clamp(10em, 40vw, 50em);
    //     // margin-top: 5em;
    //     margin-right: 3em;

    //     @media only screen and (max-width: 500px) {
    //       // display: block;
    //       margin: 0 auto;
    //       // width: clamp(10em, 80vw, 30em);
    //       width: 100vw;
    //     }
    //   }
    // }

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
        // padding: 2em 0em;
      }
      .head-line {
        margin: 0 auto;
        // width: clamp(1em, 100%, 10em);
        // margin-left: 2em;
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

      //   .lbl {
      //     font-size: clamp(0.8rem, 1.5vw, 1.7rem);
      //     font-weight: 300;
      //     line-height: 112%;
      //     letter-spacing: 0.105em;
      //     color: #b055e1;

      //     u {
      //       border: white;
      //       font-weight: 600;
      //       border-radius: 40px;
      //       padding: 0.2em 0.5em;
      //     }
      //   }

      //   .inputs {
      //     display: flex;
      //     flex-direction: row;
      //     align-items: stretch;
      //     padding: 0;
      //     box-sizing: border-box;
      //     margin-top: 0.7rem;
      //     border: clamp(1px, 0.15em, 2px) solid #944cbf;
      //     border-radius: 100px;
      //     background-color: #000000;
      //     box-shadow: 10px 30px 100px 10px #0000006b;
      //   }

      //   .form-email {
      //     width: 100%;
      //     color: white;
      //     background: transparent;
      //     border: none;
      //     padding: 0.7em 1em;
      //     // padding: 0.7em 5em 0.7em 1em;
      //     font-size: clamp(0.5rem, 1vw, 1.5rem);
      //     // box-sizing: border-box;
      //     // margin-top: 0.7em;
      //     // border-radius: 100px;

      //     @media only screen and (max-width: 500px) {
      //       font-size: 0.8rem;
      //     }

      //     ::placeholder {
      //       color: #ffffff;
      //     }
      //   }

      //   .btn {
      //     // position: absolute;
      //     display: grid;
      //     border: none;
      //     justify-content: center;
      //     align-items: center;
      //     cursor: pointer;
      //     padding-inline: 0.8rem;
      //     width: clamp(2em, 3.7vw, 5em);
      //     // height: clamp(1.5em, 3vw, 4.5em);
      //     // height: 100%;
      //     // width: 100%;
      //     // padding: clamp(0.85em, 1vw, 0.1em) 1.5em;
      //     background: #944cbf;
      //     border-radius: 100px;

      //     @media only screen and (max-width: 500px) {
      //       width: 3rem;
      //     }

      //     & > * {
      //       font-size: clamp(0.8em, 1.7vw, 2em);
      //       color: white;

      //       @media only screen and (max-width: 500px) {
      //         font-size: 1rem;
      //       }
      //     }
      //   }
      // }
    }
  }
</style>
