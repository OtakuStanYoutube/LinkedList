<img src="onebg.svg" class="bg-svg" alt="" />
<img src="elp.png" class="elps" alt="" />
<section class="container">
  <section class="left">
    <h1 class="head-line">A Single Platform For All Your Work</h1>
    <h3 class="sub-head-line">
      Build your LinkedList profile and showcase your proof of work, experience
      and online presence to your audience, all at a single place
    </h3>
    <form class="form">
      <label name="email" class="lbl"
        >Pre-register today.<u>it's free!!</u></label
      >
      <input type="email" name="email" class="form-email" />
      <!-- <input type="submit" class="btn" value="Go" /> -->
      <button class="btn"><span class="material-icons"> send </span></button>
    </form>
  </section>
  <section class="right">
    <img src="utkarsh.gif" alt="illustration" />
  </section>
</section>

<style lang="scss">
  .bg-svg {
    position: absolute;
    top: 0;
    left: -100px;
    width: 100vw;
    height: 100vh;

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
    // width: 200px;
    // height: 200px;
    @media only screen and (max-width: 500px) {
      display: none;
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
      flex-direction: column;
      width: 100vw;
    }

    .right {
      align-self: flex-start;
      position: relative;
      width: clamp(200px, 40%, 400px);
      margin: 0 auto;

      @media only screen and (max-width: 500px) {
        width: 100%;
        display: grid;
        align-items: center;
      }
      img {
        width: clamp(10em, 40vw, 50em);
        margin-top: 5em;
        margin-right: 3em;

        @media only screen and (max-width: 500px) {
          // display: block;
          margin: 0 auto;
          // width: clamp(10em, 80vw, 30em);
          width: 80vw;
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

      .form {
        position: relative;
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

        .form-email {
          width: 100%;
          color: white;
          background: #000000;
          border: clamp(1px, 0.15em, 2px) solid #944cbf;
          padding: 0.7em 1em;
          font-size: clamp(0.5rem, 1vw, 1.5rem);
          // box-sizing: border-box;
          margin-top: 0.7em;
          box-shadow: 10px 30px 100px 10px #0000006b;
          border-radius: 100px;
        }

        .btn {
          position: absolute;
          display: grid;
          justify-content: center;
          align-items: center;
          right: 0px;
          bottom: 0px;
          border: none;
          font-size: inherit;
          width: clamp(2em, 3.5vw, 5em);
          height: clamp(1.5em, 3vw, 4.5em);
          // padding: clamp(0.85em, 1vw, 0.1em) 1.5em;
          background: #944cbf;
          border-radius: 100px;

          & > * {
            font-size: clamp(0.8em, 1.7vw, 2em);
            color: white;
          }
        }
      }
    }
  }
</style>
