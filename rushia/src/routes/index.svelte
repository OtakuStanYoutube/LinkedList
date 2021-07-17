<section class="container">
  <section class="left">
    <h1 class="head-line">Get all your work orginised in a single place</h1>
    <form class="form">
      <label name="email" class="lbl">Pre-Register Today</label>
      <input type="email" name="email" class="form-email" />
      <!-- <input type="submit" class="btn" value="Go" /> -->
      <button class="btn"><span class="material-icons"> send </span></button>
    </form>
  </section>
  <section class="right">
    <img src="preview-ils.svg" alt="illustration" />
  </section>
</section>

<style lang="scss">
  .container {
    display: flex;
    align-self: flex-start;
    margin-top: 50px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    z-index: 0;
    width: clamp(500px, 70vw, 1400px);
    height: clamp(100px, 70vh, 800px);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.116);
    background: rgba(53, 51, 57, 0.26);
    // backdrop-filter: blur(100px);
    border-radius: 20px;
    color: white;

    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      width: 80vw;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 0;
      padding: clamp(0.5px, 0.01vw, 5px);
      border-radius: inherit;
      background: linear-gradient(
        to right,
        rgb(59, 35, 167, 0.4) 30%,
        rgb(164, 48, 94, 0.4) 60%
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;

      @media only screen and (max-width: 500px) {
        background: linear-gradient(
          to bottom,
          rgb(59, 35, 167, 0.4) 30%,
          rgb(164, 48, 94, 0.4) 60%
        );
      }
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
        width: clamp(5em, 30vw, 30em);
        margin-top: 5em;
        margin-right: 3em;

        @media only screen and (max-width: 500px) {
          // display: block;
          margin: 0 auto;
          width: clamp(10em, 80vw, 18em);
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 100px;
        left: -30px;
        width: 200px;
        height: 280px;
        z-index: -20;
        filter: blur(100px);
        background-color: #760d35;
        border-radius: 100%;
      }
    }

    .left {
      position: relative;
      display: grid;
      gap: 1.5em;
      width: clamp(200px, 40%, 500px);
      margin: 0 auto;

      @media only screen and (max-width: 500px) {
        gap: 0.5em;
        padding: 2em 0em;
      }
      .head-line {
        margin: 0 auto;
        // width: clamp(1em, 100%, 10em);
        // margin-left: 2em;
        font-style: normal;
        font-weight: 600;
        font-size: clamp(1.2rem, 2.5vw, 3rem);
        line-height: 112%;
      }

      .form {
        position: relative;
        .lbl {
          font-size: clamp(0.8rem, 1.5vw, 1.7rem);
          line-height: 112%;
          letter-spacing: 0.105em;
          color: #b055e1;
        }

        .form-email {
          width: 100%;
          color: white;
          background: #353339;
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

      &::before {
        content: "";
        position: absolute;
        width: 200px;
        height: 280px;
        z-index: -20;
        filter: blur(100px);
        top: -120px;
        left: -20px;
        background-color: #20115f;
        border-radius: 100%;
      }
    }
  }
</style>
